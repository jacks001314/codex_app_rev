import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $v as r,
  AO as i,
  BJ as a,
  BR as o,
  CO as s,
  Cot as c,
  DE as l,
  DV as u,
  EE as d,
  HZ as f,
  IDt as p,
  Ixt as m,
  LR as h,
  Mz as g,
  Nz as _,
  Pxt as v,
  QJ as y,
  Qv as b,
  TJ as x,
  TO as S,
  VDt as C,
  VZ as w,
  Vxt as T,
  XD as E,
  YD as D,
  ZJ as O,
  _Mt as k,
  _O as A,
  b4 as j,
  bO as M,
  bb as N,
  cO as P,
  cz as F,
  fO as I,
  gMt as L,
  gO as R,
  gS as z,
  ght as ee,
  hS as te,
  hot as ne,
  ik as B,
  iot as V,
  jDt as H,
  lO as U,
  ldt as re,
  lot as W,
  mO as G,
  mht as ie,
  nk as K,
  oO as ae,
  rk as oe,
  sO as se,
  sz as ce,
  t3 as le,
  tk as ue,
  vO as de,
  vzt as q,
  wot as fe,
  xMt as J,
  xb as pe,
  y4 as me,
  yO as he,
  yzt as Y,
  zJ as ge,
} from "./app-shared-bbfeca5e5737.js";
import {
  $nr as _e,
  Bnn as ve,
  Bu as ye,
  Fin as be,
  HOr as xe,
  Hin as Se,
  Hu as Ce,
  Im as we,
  Iwr as Te,
  JPn as Ee,
  Ju as De,
  K_ as Oe,
  Mvt as ke,
  N$ as Ae,
  Nbr as je,
  Nvt as Me,
  OPn as Ne,
  Pbr as Pe,
  Qnr as Fe,
  Rm as Ie,
  Txn as Le,
  Uu as Re,
  VOr as ze,
  Vu as Be,
  W_ as Ve,
  XPn as He,
  Yu as Ue,
  _d as We,
  _m as Ge,
  _xn as Ke,
  a0n as qe,
  bd as Je,
  bm as Ye,
  dAn as Xe,
  dFr as Ze,
  da as Qe,
  dcr as $e,
  dd as et,
  dur as tt,
  eDr as nt,
  ekt as rt,
  err as it,
  fAn as at,
  fa as ot,
  fur as st,
  gd as ct,
  h9 as lt,
  ha as ut,
  hm as dt,
  irr as ft,
  j$ as pt,
  jxn as mt,
  kPn as ht,
  kan as gt,
  ld as _t,
  lur as vt,
  m9 as yt,
  m_r as bt,
  nDr as xt,
  oFr as St,
  p9 as Ct,
  pur as wt,
  qwr as Tt,
  rrr as Et,
  trr as Dt,
  u0n as Ot,
  uFr as kt,
  ua as At,
  ud as jt,
  vU as Mt,
  v_r as Nt,
  vd as Pt,
  vkt as Ft,
  xd as It,
  yU as Lt,
  zm as Rt,
  znn as zt,
} from "./app-initial-5851df3f6cb1.js";
import { Bp as Bt, Vp as Vt } from "./app-primary-fe8a450b3b04.js";
import { n as Ht, t as Ut } from "./file-diff-61a6fffbd4c1.js";
import { i as Wt, n as Gt, r as Kt, t as qt } from "./row-cb5037d08176.js";
function Jt(e) {
  for (let t of e) {
    if (!(t instanceof HTMLElement)) continue;
    let e = t.getAttribute(`data-line`) ?? t.getAttribute(`data-column-number`);
    if (e == null) continue;
    let n = Number.parseInt(e, 10);
    if (!Number.isNaN(n)) return n;
  }
  return null;
}
function Yt() {
  return (Yt = e(() => {}))();
}
function Xt(e) {
  return e.flatMap((e) => {
    if (e.side !== `additions`) return [];
    switch (e.metadata.kind) {
      case `comment`:
        return [{ lineNumber: e.lineNumber, metadata: e.metadata }];
      case `draft-comment`:
        return [{ lineNumber: e.lineNumber, metadata: e.metadata }];
    }
  });
}
function Zt(e) {
  switch (e.metadata.kind) {
    case `comment`:
      return { side: `additions`, lineNumber: e.lineNumber, metadata: e.metadata };
    case `draft-comment`:
      return { side: `additions`, lineNumber: e.lineNumber, metadata: e.metadata };
  }
}
var Qt;
function $t() {
  return ($t = e(() => {
    Qt = (e, t) => `${e}:${t}`;
  }))();
}
function en(e) {
  let t = (0, tn.c)(42),
    { className: r, defaultValue: i, onRemove: o, onSubmit: s } = e,
    c = C(),
    [l, u] = (0, nn.useState)(i),
    d;
  t[0] === l ? (d = t[1]) : ((d = l.trim()), (t[0] = l), (t[1] = d));
  let f = d,
    p;
  t[2] === i ? (p = t[3]) : ((p = i.trim()), (t[2] = i), (t[3] = p));
  let m = f !== p,
    h;
  t[4] === c
    ? (h = t[5])
    : ((h = c.formatMessage({
        id: `pullRequest.commentGuidance.remove`,
        defaultMessage: `Remove`,
        description: `Accessible label for removing an attached pull request review comment`,
      })),
      (t[4] = c),
      (t[5] = h));
  let _ = h,
    v;
  t[6] === c
    ? (v = t[7])
    : ((v = c.formatMessage({
        id: `pullRequest.commentGuidance.save`,
        defaultMessage: `Save guidance`,
        description: `Accessible label for saving optional guidance on an attached pull request comment`,
      })),
      (t[6] = c),
      (t[7] = v));
  let y = v,
    b;
  t[8] === r
    ? (b = t[9])
    : ((b = L(`flex w-full items-center gap-2 border-t border-default pt-2`, r)), (t[8] = r), (t[9] = b));
  let x;
  t[10] === i
    ? (x = t[11])
    : ((x = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), u(i));
      }),
      (t[10] = i),
      (t[11] = x));
  let S;
  t[12] !== m || t[13] !== s || t[14] !== f
    ? ((S = (e) => {
        (e.preventDefault(), m && s(f));
      }),
      (t[12] = m),
      (t[13] = s),
      (t[14] = f),
      (t[15] = S))
    : (S = t[15]);
  let w;
  t[16] === c
    ? (w = t[17])
    : ((w = c.formatMessage({
        id: `pullRequest.commentGuidance.label`,
        defaultMessage: `Optional guidance`,
        description: `Accessible label for optional guidance added to an attached pull request comment`,
      })),
      (t[16] = c),
      (t[17] = w));
  let T;
  t[18] === c
    ? (T = t[19])
    : ((T = c.formatMessage({
        id: `pullRequest.commentGuidance.placeholder`,
        defaultMessage: `Add optional guidance…`,
        description: `Placeholder for optional guidance added to an attached pull request comment`,
      })),
      (t[18] = c),
      (t[19] = T));
  let E;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (e) => {
        u(e.target.value);
      }),
      (t[20] = E))
    : (E = t[20]);
  let D;
  t[21] !== l || t[22] !== w || t[23] !== T
    ? ((D = (0, rn.jsx)(`input`, {
        "aria-label": w,
        autoComplete: `off`,
        className: `min-w-0 flex-1 bg-transparent text-base text-default outline-none placeholder:text-codex-description`,
        placeholder: T,
        value: l,
        onChange: E,
      })),
      (t[21] = l),
      (t[22] = w),
      (t[23] = T),
      (t[24] = D))
    : (D = t[24]);
  let O;
  t[25] !== o || t[26] !== _
    ? ((O =
        o == null
          ? null
          : (0, rn.jsx)(ce, {
              cloneCustomTrigger: !0,
              tooltipContent: _,
              children: (0, rn.jsx)(n, {
                "aria-label": _,
                color: `ghost`,
                size: `composerSm`,
                type: `button`,
                uniform: !0,
                onClick: o,
                children: (0, rn.jsx)(g, { "aria-hidden": !1, asset: a }),
              }),
            })),
      (t[25] = o),
      (t[26] = _),
      (t[27] = O))
    : (O = t[27]);
  let k = !m,
    A;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, rn.jsx)(oe, { className: `icon-sm` })), (t[28] = A))
    : (A = t[28]);
  let j;
  t[29] !== y || t[30] !== k
    ? ((j = (0, rn.jsx)(n, {
        "aria-label": y,
        color: `primary`,
        disabled: k,
        size: `composer`,
        type: `submit`,
        uniform: !0,
        children: A,
      })),
      (t[29] = y),
      (t[30] = k),
      (t[31] = j))
    : (j = t[31]);
  let M;
  t[32] !== y || t[33] !== j
    ? ((M = (0, rn.jsx)(ce, { cloneCustomTrigger: !0, tooltipContent: y, children: j })),
      (t[32] = y),
      (t[33] = j),
      (t[34] = M))
    : (M = t[34]);
  let N;
  return (
    t[35] !== D || t[36] !== O || t[37] !== M || t[38] !== b || t[39] !== x || t[40] !== S
      ? ((N = (0, rn.jsxs)(`form`, { className: b, onKeyDown: x, onSubmit: S, children: [D, O, M] })),
        (t[35] = D),
        (t[36] = O),
        (t[37] = M),
        (t[38] = b),
        (t[39] = x),
        (t[40] = S),
        (t[41] = N))
      : (N = t[41]),
    N
  );
}
var tn, nn, rn;
function an() {
  return (an = e(() => {
    ((tn = q()), ge(), k(), (nn = Y()), H(), le(), _(), F(), B(), (rn = J()));
  }))();
}
function on(e, t, n = `github.com`) {
  let r = e?.trim();
  return r == null || r.length === 0 || /\s/.test(r)
    ? null
    : `https://${n}/${encodeURIComponent(r)}.png?size=${t}`;
}
function sn() {
  return (sn = e(() => {}))();
}
function cn(e) {
  let t = (0, ln.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, un.jsx)(`span`, { className: `shrink-0`, children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
var ln, un;
function dn() {
  return (dn = e(() => {
    ((ln = q()), (un = J()));
  }))();
}
function fn(e) {
  let t = (0, pn.c)(33),
    { actions: n, children: r, provider: i, reply: a } = e,
    o = i === void 0 ? `github` : i,
    s = C(),
    [c, l] = (0, mn.useState)(null),
    u,
    d,
    f;
  if (t[0] !== c || t[1] !== s || t[2] !== o || t[3] !== a.authorAvatarUrl || t[4] !== a.authorLogin) {
    u =
      a.authorLogin ??
      s.formatMessage({
        id: `pullRequestsPage.detail.commentUnknownAuthor`,
        defaultMessage: `Unknown author`,
        description: `Fallback author label for PR timeline comments on the detail page`,
      });
    let e;
    t[8] !== o || t[9] !== a.authorAvatarUrl || t[10] !== a.authorLogin
      ? ((e = a.authorAvatarUrl ?? (o === `github` ? on(a.authorLogin, 48) : null)),
        (t[8] = o),
        (t[9] = a.authorAvatarUrl),
        (t[10] = a.authorLogin),
        (t[11] = e))
      : (e = t[11]);
    let n = e,
      r = n != null && n !== c;
    ((d = `flex min-w-0 items-center gap-2.5 px-3 pt-1.5`),
      (f = r
        ? (0, hn.jsx)(cn, {
            children: (0, hn.jsx)(`img`, {
              alt: s.formatMessage(
                {
                  id: `pullRequestsPage.detail.commentAuthorAvatarAlt`,
                  defaultMessage: `{author} avatar`,
                  description: `Alt text for a pull request comment author's avatar on the detail page`,
                },
                { author: u },
              ),
              className: `size-6 rounded-full bg-white object-cover`,
              src: n,
              onError: () => {
                l(n);
              },
            }),
          })
        : (0, hn.jsx)(cn, {
            children: (0, hn.jsx)(`span`, {
              className: `flex size-6 items-center justify-center rounded-full bg-surface text-xs font-semibold text-default`,
              children: u.slice(0, 1).toUpperCase(),
            }),
          })),
      (t[0] = c),
      (t[1] = s),
      (t[2] = o),
      (t[3] = a.authorAvatarUrl),
      (t[4] = a.authorLogin),
      (t[5] = u),
      (t[6] = d),
      (t[7] = f));
  } else ((u = t[5]), (d = t[6]), (f = t[7]));
  let m;
  t[12] === u
    ? (m = t[13])
    : ((m = (0, hn.jsx)(`span`, {
        className: `min-w-0 truncate text-base leading-5 font-medium text-default`,
        children: u,
      })),
      (t[12] = u),
      (t[13] = m));
  let h;
  t[14] === a.createdAt
    ? (h = t[15])
    : ((h = a.createdAt
        ? (0, hn.jsx)(`span`, {
            className: `shrink-0 text-sm text-tertiary`,
            children: (0, hn.jsx)(pt, { dateString: a.createdAt }),
          })
        : null),
      (t[14] = a.createdAt),
      (t[15] = h));
  let g;
  t[16] === n
    ? (g = t[17])
    : ((g = n == null ? null : (0, hn.jsx)(`div`, { className: `ms-auto`, children: n })),
      (t[16] = n),
      (t[17] = g));
  let _;
  t[18] !== d || t[19] !== f || t[20] !== m || t[21] !== h || t[22] !== g
    ? ((_ = (0, hn.jsxs)(`div`, { className: d, children: [f, m, h, g] })),
      (t[18] = d),
      (t[19] = f),
      (t[20] = m),
      (t[21] = h),
      (t[22] = g),
      (t[23] = _))
    : (_ = t[23]);
  let v;
  t[24] !== r || t[25] !== a.isDeleted || t[26] !== a.text
    ? ((v = a.isDeleted
        ? (0, hn.jsx)(`span`, {
            className: `text-secondary`,
            children: (0, hn.jsx)(p, {
              id: `pullRequestDetail.comment.deleted`,
              defaultMessage: `Comment deleted`,
              description: `Placeholder for a deleted review comment whose replies remain visible`,
            }),
          })
        : (r ?? a.text)),
      (t[24] = r),
      (t[25] = a.isDeleted),
      (t[26] = a.text),
      (t[27] = v))
    : (v = t[27]);
  let y;
  t[28] === v
    ? (y = t[29])
    : ((y = (0, hn.jsx)(`div`, {
        className: `ps-11.5 pe-3 pb-1.5 text-size-chat break-words text-default`,
        children: v,
      })),
      (t[28] = v),
      (t[29] = y));
  let b;
  return (
    t[30] !== _ || t[31] !== y
      ? ((b = (0, hn.jsxs)(`div`, { children: [_, y] })), (t[30] = _), (t[31] = y), (t[32] = b))
      : (b = t[32]),
    b
  );
}
var pn, mn, hn;
function gn() {
  return (gn = e(() => {
    ((pn = q()), (mn = Y()), H(), Ae(), dn(), (hn = J()));
  }))();
}
function _n(e) {
  let t = (0, En.c)(72),
    {
      authorLogin: r,
      authorAvatarUrl: i,
      avatarSize: a,
      body: o,
      bodyPreview: s,
      comment: c,
      className: l,
      createdAt: u,
      defaultCollapsed: d,
      diffHunk: f,
      diffHunkPosition: m,
      fileName: h,
      headerAccessory: g,
      metadataAccessory: _,
      onDelete: v,
      onDeleteReply: y,
      onEdit: b,
      onEditReply: x,
      onOpenFile: S,
      onOpenInReview: w,
      onQuoteReply: T,
      position: E,
      preventCollapse: D,
      provider: O,
      replies: k,
      renderBody: A,
      showDiffLocation: j,
      surfaceVariant: M,
      url: N,
    } = e,
    P = a === void 0 ? `default` : a,
    F = s !== void 0 && s,
    I = d !== void 0 && d,
    R = D !== void 0 && D,
    z = O === void 0 ? `github` : O,
    ee = k === void 0 ? [] : k,
    te = j !== void 0 && j,
    ne = M === void 0 ? `default` : M,
    B = C(),
    V = (0, On.useId)(),
    [H, U] = (0, On.useState)(I),
    [re, W] = (0, On.useState)(I),
    [G, ie] = (0, On.useState)(null);
  I !== re && (W(I), U(I && !R));
  let { authorLogin: K, text: ae } = c == null ? { authorLogin: null, text: o ?? `` } : it(c),
    oe = r ?? c?.authorLogin ?? K,
    se = o ?? ae,
    le =
      oe ??
      B.formatMessage({
        id: `pullRequestsPage.detail.commentUnknownAuthor`,
        defaultMessage: `Unknown author`,
        description: `Fallback author label for PR timeline comments on the detail page`,
      }),
    de = i ?? c?.authorAvatarUrl ?? (z === `github` && oe != null ? on(oe, 48) : null),
    q = de != null && de !== G,
    fe;
  t[0] !== B || t[1] !== z
    ? ((fe =
        z === `gitlab`
          ? B.formatMessage({
              id: `gitlabMergeRequest.discussions.openComment`,
              defaultMessage: `Open comment on GitLab`,
              description: `Accessible label for opening a merge request comment on GitLab`,
            })
          : B.formatMessage({
              id: `pullRequestsPage.detail.openCommentOnGitHub`,
              defaultMessage: `Open comment on GitHub`,
              description: `Accessible label for a link that opens a pull request comment on GitHub`,
            })),
      (t[0] = B),
      (t[1] = z),
      (t[2] = fe))
    : (fe = t[2]);
  let J = fe,
    pe = B.formatMessage(
      {
        id: `pullRequestsPage.detail.commentAuthorAvatarAlt`,
        defaultMessage: `{author} avatar`,
        description: `Alt text for a pull request comment author's avatar on the detail page`,
      },
      { author: le },
    ),
    me = q
      ? (0, X.jsx)(`img`, {
          alt: pe,
          className: L(`rounded-full bg-white object-cover`, P === `compact` ? `icon-xs` : `size-6`),
          src: de,
          onError: () => {
            ie(de);
          },
        })
      : (0, X.jsx)(`span`, {
          className: L(
            `flex items-center justify-center rounded-full bg-surface text-xs font-semibold text-default`,
            P === `compact` ? `icon-xs` : `size-6`,
          ),
          children: le.slice(0, 1).toUpperCase(),
        });
  if (F) {
    let e;
    t[3] === c
      ? (e = t[4])
      : ((e = c == null ? null : Dn.default.posix.basename(c.position.path)), (t[3] = c), (t[4] = e));
    let n = e,
      r = w != null || N != null,
      i;
    t[5] !== u || t[6] !== n || t[7] !== r
      ? ((i =
          n != null || u
            ? (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(`span`, {
                    className: L(`min-w-0 truncate text-tertiary`, r && `group-hover:text-default`),
                    children: n,
                  }),
                  u
                    ? (0, X.jsx)(`span`, {
                        className: L(`shrink-0 text-tertiary`, r && `group-hover:text-default`),
                        children: (0, X.jsx)(pt, { dateString: u }),
                      })
                    : null,
                ],
              })
            : null),
        (t[5] = u),
        (t[6] = n),
        (t[7] = r),
        (t[8] = i))
      : (i = t[8]);
    let a = i,
      o = null;
    if (a != null) {
      if (w != null) {
        let e;
        t[9] === B
          ? (e = t[10])
          : ((e = B.formatMessage({
              id: `pullRequestsPage.detail.openCommentInReview`,
              defaultMessage: `Open comment in review`,
              description: `Accessible label for a button that opens a pull request comment in the app review view`,
            })),
            (t[9] = B),
            (t[10] = e));
        let n;
        (t[11] !== w || t[12] !== a || t[13] !== e
          ? ((n = (0, X.jsx)(`button`, {
              "aria-label": e,
              className: `group flex min-w-0 cursor-interaction items-center justify-between gap-2 text-base`,
              type: `button`,
              onClick: w,
              children: a,
            })),
            (t[11] = w),
            (t[12] = a),
            (t[13] = e),
            (t[14] = n))
          : (n = t[14]),
          (o = n));
      } else if (N == null) {
        let e;
        (t[15] === a
          ? (e = t[16])
          : ((e = (0, X.jsx)(`div`, {
              className: `flex min-w-0 items-center justify-between gap-2 text-base`,
              children: a,
            })),
            (t[15] = a),
            (t[16] = e)),
          (o = e));
      } else {
        let e;
        (t[17] !== J || t[18] !== a || t[19] !== N
          ? ((e = (0, X.jsx)(`a`, {
              "aria-label": J,
              className: `group flex min-w-0 cursor-interaction items-center justify-between gap-2 text-base`,
              href: N,
              rel: `noreferrer`,
              target: `_blank`,
              children: a,
            })),
            (t[17] = J),
            (t[18] = a),
            (t[19] = N),
            (t[20] = e))
          : (e = t[20]),
          (o = e));
      }
    }
    let s = P === `compact` ? `gap-3.5` : `gap-2`,
      d;
    t[21] !== l || t[22] !== s
      ? ((d = L(`flex min-w-0 py-1`, s, l)), (t[21] = l), (t[22] = s), (t[23] = d))
      : (d = t[23]);
    let f = P === `compact` && `mt-1`,
      p;
    t[24] === f ? (p = t[25]) : ((p = L(`shrink-0`, f)), (t[24] = f), (t[25] = p));
    let m;
    t[26] !== me || t[27] !== p
      ? ((m = (0, X.jsx)(`span`, { className: p, children: me })), (t[26] = me), (t[27] = p), (t[28] = m))
      : (m = t[28]);
    let h;
    return (
      t[29] !== P || t[30] !== _ || t[31] !== o
        ? ((h =
            o != null || _ != null
              ? (0, X.jsxs)(`div`, {
                  className: `flex min-w-0 items-center justify-between gap-2`,
                  children: [
                    o,
                    _ == null
                      ? null
                      : (0, X.jsx)(`span`, {
                          className: L(`inline-flex shrink-0`, P === `compact` && `-me-0.5`),
                          children: _,
                        }),
                  ],
                })
              : null),
          (t[29] = P),
          (t[30] = _),
          (t[31] = o),
          (t[32] = h))
        : (h = t[32]),
      (0, X.jsxs)(`div`, {
        className: d,
        children: [
          m,
          (0, X.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 flex-col gap-0.5`,
            children: [(0, X.jsx)(wn, { body: se }), h],
          }),
        ],
      })
    );
  }
  let he = [...(c == null || o != null || ee.length > 0 ? [] : Dt(c).slice(1)).map(yn), ...ee.map(vn)],
    Y = E ?? c?.position,
    ge = m ?? Y,
    _e;
  t[33] !== Y || t[34] !== te
    ? ((_e = te && Y != null ? Tn(Y) : null), (t[33] = Y), (t[34] = te), (t[35] = _e))
    : (_e = t[35]);
  let ve = _e,
    ye;
  t[36] !== f || t[37] !== Y
    ? ((ye =
        f == null || Y == null
          ? null
          : (Me(`diff --git a/${Y.path} b/${Y.path}\n--- a/${Y.path}\n+++ b/${Y.path}\n${f}\n`, {
              maxFiles: 1,
            })[0]?.metadata ?? null)),
      (t[36] = f),
      (t[37] = Y),
      (t[38] = ye))
    : (ye = t[38]);
  let be = ye,
    xe = oe != null || !!u,
    Se;
  t[39] === me ? (Se = t[40]) : ((Se = (0, X.jsx)(cn, { children: me })), (t[39] = me), (t[40] = Se));
  let Ce = Se,
    we;
  t[41] !== h || t[42] !== B || t[43] !== H || t[44] !== S || t[45] !== U
    ? ((we =
        h == null
          ? null
          : S == null && !H
            ? (0, X.jsx)(`span`, { className: `min-w-0 truncate text-sm leading-5`, children: h })
            : (0, X.jsx)(`button`, {
                className: L(
                  `min-w-0 cursor-interaction truncate text-sm leading-5 focus-visible:text-default`,
                  !H && `hover:text-default`,
                ),
                "aria-expanded": !H && void 0,
                "aria-label": H
                  ? void 0
                  : B.formatMessage(
                      {
                        id: `pullRequestsPage.detail.openFileInCode`,
                        defaultMessage: `Open {fileName} in Code`,
                        description: `Accessible label for a pull request comment file link that opens the file in the Code tab`,
                      },
                      { fileName: h },
                    ),
                type: `button`,
                onClick: H ? () => U(!1) : S,
                children: h,
              })),
      (t[41] = h),
      (t[42] = B),
      (t[43] = H),
      (t[44] = S),
      (t[45] = U),
      (t[46] = we))
    : (we = t[46]);
  let Te = we,
    Ee = null;
  H ||
    (Ee = (0, X.jsxs)(`div`, {
      className: `min-w-0`,
      children: [
        (0, X.jsx)(`div`, {
          className: `px-3 pt-1 pb-2`,
          children: (0, X.jsx)(wn, {
            body: se,
            truncate: !R,
            children:
              A == null
                ? (0, X.jsx)(ut, {
                    textStyle: { kind: `small` },
                    allowBasicHtml: !0,
                    className: `[&_details]:mt-3 [&_details]:rounded-[14px] [&_details]:border [&_details]:border-border/16 [&_details]:bg-surface-secondary/40 [&_details]:px-3.5 [&_details]:py-3 [&_summary]:cursor-interaction [&_summary]:font-medium [&_summary]:text-default`,
                    cwd: null,
                    children: Qe(se),
                  })
                : A(se, !1),
          }),
        }),
        he.length > 0 &&
          (0, X.jsx)(`div`, {
            className: `flex flex-col`,
            children: he.map((e, t) => {
              let { replyData: n } = e;
              return (0, X.jsx)(
                fn,
                {
                  provider: z,
                  actions:
                    n?.nodeId == null
                      ? null
                      : (0, X.jsx)(bn, {
                          onDelete: n.viewerCanDelete === !0 && y != null ? () => y(n) : void 0,
                          onEdit: n.viewerCanUpdate === !0 && x != null ? () => x(n) : void 0,
                        }),
                  reply: e,
                  children:
                    A == null
                      ? (0, X.jsx)(ut, { allowBasicHtml: !0, cwd: null, children: Qe(e.text) })
                      : A(e.text, !0, n),
                },
                n?.nodeId ?? n?.id ?? t,
              );
            }),
          }),
      ],
    }));
  let De = H
      ? B.formatMessage(
          {
            id: `pullRequestsPage.detail.expandCommentByAuthor`,
            defaultMessage: `Expand comment by {author}`,
            description: `Accessible label for the button that expands a collapsed pull request comment and identifies its author`,
          },
          { author: le },
        )
      : B.formatMessage(
          {
            id: `pullRequestsPage.detail.collapseCommentByAuthor`,
            defaultMessage: `Collapse comment by {author}`,
            description: `Accessible label for the button that collapses an expanded pull request comment and identifies its author`,
          },
          { author: le },
        ),
    Oe;
  t[47] !== B || t[48] !== J || t[49] !== z || t[50] !== N
    ? ((Oe =
        N == null
          ? null
          : (0, X.jsx)(ce, {
              delayDuration: 250,
              tooltipContent:
                z === `gitlab`
                  ? J
                  : B.formatMessage({
                      id: `pullRequestsPage.detail.viewCommentOnGitHub`,
                      defaultMessage: `View comment on GitHub`,
                      description: `Tooltip for the external link that opens a pull request comment on GitHub`,
                    }),
              children: (0, X.jsx)(`a`, {
                "aria-label": J,
                className: `inline-flex shrink-0 text-codex-description opacity-0 transition-colors group-focus-within/comment:opacity-100 group-hover/comment:opacity-100 hover:text-default`,
                href: N,
                rel: `noreferrer`,
                target: `_blank`,
                onClick: (e) => {
                  (e.stopPropagation(), He({ event: e, href: N, initiator: `pull_request_link` }));
                },
                children: (0, X.jsx)(Ne, { href: N, className: `icon-xs` }),
              }),
            })),
      (t[47] = B),
      (t[48] = J),
      (t[49] = z),
      (t[50] = N),
      (t[51] = Oe))
    : (Oe = t[51]);
  let ke = Oe,
    Ae;
  t[52] !== H || t[53] !== R || t[54] !== U
    ? ((Ae = (e) => {
        (e.preventDefault(), e.stopPropagation());
        let t = !H;
        (t && R) || U(t);
      }),
      (t[52] = H),
      (t[53] = R),
      (t[54] = U),
      (t[55] = Ae))
    : (Ae = t[55]);
  let je = Ae,
    Pe;
  t[56] === u
    ? (Pe = t[57])
    : ((Pe = u
        ? (0, X.jsx)(`span`, {
            className: `shrink-0 text-sm text-tertiary`,
            children: (0, X.jsx)(pt, { dateString: u }),
          })
        : null),
      (t[56] = u),
      (t[57] = Pe));
  let Fe;
  t[58] !== b || t[59] !== U
    ? ((Fe =
        b == null
          ? void 0
          : () => {
              (U(!1), b());
            }),
      (t[58] = b),
      (t[59] = U),
      (t[60] = Fe))
    : (Fe = t[60]);
  let Ie;
  t[61] !== T || t[62] !== U
    ? ((Ie =
        T == null
          ? void 0
          : () => {
              (U(!1), T());
            }),
      (t[61] = T),
      (t[62] = U),
      (t[63] = Ie))
    : (Ie = t[63]);
  let Le;
  t[64] !== v || t[65] !== Fe || t[66] !== Ie
    ? ((Le = (0, X.jsx)(bn, { onDelete: v, onEdit: Fe, onQuoteReply: Ie })),
      (t[64] = v),
      (t[65] = Fe),
      (t[66] = Ie),
      (t[67] = Le))
    : (Le = t[67]);
  let Re;
  t[68] !== ke || t[69] !== Pe || t[70] !== Le
    ? ((Re = (0, X.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [ke, Pe, Le] })),
      (t[68] = ke),
      (t[69] = Pe),
      (t[70] = Le),
      (t[71] = Re))
    : (Re = t[71]);
  let ze = Re;
  return xe
    ? (0, X.jsx)(Kt, {
        authorAvatar: Ce,
        authorLabel: (0, X.jsxs)(n, {
          className: `min-w-0 gap-1.5 text-start`,
          "aria-describedby": g != null || he.length > 0 ? V : void 0,
          "aria-expanded": !H,
          "aria-label": De,
          color: `ghostMuted`,
          focusRing: `inset`,
          onClick: je,
          size: `inline`,
          children: [
            (0, X.jsx)(`span`, { className: `truncate`, children: le }),
            g == null && he.length === 0
              ? null
              : (0, X.jsxs)(`span`, {
                  id: V,
                  className: `inline-flex shrink-0 items-center gap-1.5 text-sm leading-5 font-normal text-codex-description`,
                  children: [
                    g == null ? null : (0, X.jsx)(`span`, { children: g }),
                    he.length === 0
                      ? null
                      : (0, X.jsx)(`span`, {
                          className: `ps-1`,
                          children:
                            g == null
                              ? (0, X.jsx)(p, {
                                  id: `pullRequestsPage.detail.commentReplyCount`,
                                  defaultMessage: `{count, plural, one {# reply} other {# replies}}`,
                                  description: `Reply count shown after the author in a pull request comment header`,
                                  values: { count: he.length },
                                })
                              : (0, X.jsx)(p, {
                                  id: `pullRequestsPage.detail.resolvedCommentReplyCount`,
                                  defaultMessage: `· {count, plural, one {# reply} other {# replies}}`,
                                  description: `Reply count with a dot separator shown after the resolved status in a pull request comment header`,
                                  values: { count: he.length },
                                }),
                        }),
                  ],
                }),
            (0, X.jsx)(ue, {
              "aria-hidden": !0,
              className: L(
                `icon-2xs shrink-0 text-tertiary opacity-0 transition-transform duration-basic group-focus-within/comment:opacity-100 group-hover/comment:opacity-100`,
                !H && `rotate-90`,
              ),
            }),
          ],
        }),
        body: Ee,
        className: l,
        footer: H ? null : _,
        headerAccessory: ze,
        onHeaderClick: je,
        headerSuffix:
          Te == null
            ? null
            : (0, X.jsx)(`div`, {
                className: L(
                  be == null || H
                    ? `flex min-w-0 items-center gap-2 ps-11.5 pe-3 text-tertiary`
                    : `mt-2 border-y border-default bg-surface`,
                  (be == null || H) && (H ? `pb-2.5` : `pb-1`),
                ),
                children:
                  be == null || H
                    ? (0, X.jsxs)(X.Fragment, {
                        children: [
                          Te,
                          ve == null || be != null
                            ? null
                            : (0, X.jsx)(`span`, { className: `shrink-0 text-sm leading-5`, children: ve }),
                        ],
                      })
                    : (0, X.jsxs)(X.Fragment, {
                        children: [
                          (0, X.jsx)(`div`, {
                            className: `flex min-w-0 items-center py-2 ps-11.5 pe-3 text-tertiary`,
                            children: Te,
                          }),
                          (0, X.jsx)(Ut, {
                            alignCommentGutter: !0,
                            fileDiff: be,
                            diffStyle: `unified`,
                            hunkSeparators: `simple`,
                            selectedLines:
                              ge == null
                                ? void 0
                                : {
                                    start: ge.start_line ?? ge.line,
                                    end: ge.line,
                                    side: ge.side === `left` ? `deletions` : `additions`,
                                  },
                          }),
                        ],
                      }),
              }),
        surfaceVariant: ne,
      })
    : A == null
      ? (0, X.jsx)(ut, {
          textStyle: { kind: `small` },
          allowBasicHtml: !0,
          className: `[&_details]:mt-3 [&_details]:rounded-[14px] [&_details]:border [&_details]:border-border/16 [&_details]:bg-surface-secondary/40 [&_details]:px-3.5 [&_details]:py-3 [&_summary]:cursor-interaction [&_summary]:font-medium [&_summary]:text-default`,
          cwd: null,
          children: Qe(se),
        })
      : A(se, !1);
}
function vn(e) {
  return { ...e, replyData: e, text: e.body };
}
function yn(e) {
  return { ...e, replyData: void 0 };
}
function bn(e) {
  let t = (0, En.c)(15),
    { onDelete: n, onEdit: r, onQuoteReply: i } = e,
    a = C();
  if (n == null && r == null && i == null) return null;
  let o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `pullRequestDetail.comment.actions`,
        defaultMessage: `Comment actions`,
        description: `Accessible label for opening a pull request comment's action menu`,
      })),
      (t[0] = a),
      (t[1] = o));
  let c;
  t[2] === o ? (c = t[3]) : ((c = (0, X.jsx)(b, { label: o, size: `xs` })), (t[2] = o), (t[3] = c));
  let l;
  t[4] === r
    ? (l = t[5])
    : ((l =
        r == null
          ? null
          : (0, X.jsx)(S.Item, {
              leftIconAsset: f,
              onClick: Cn,
              onSelect: r,
              children: (0, X.jsx)(p, {
                id: `pullRequestDetail.comment.edit`,
                defaultMessage: `Edit`,
                description: `Menu item to edit a pull request comment or review`,
              }),
            })),
      (t[4] = r),
      (t[5] = l));
  let u;
  t[6] === i
    ? (u = t[7])
    : ((u =
        i == null
          ? null
          : (0, X.jsx)(S.Item, {
              leftIconAsset: me,
              onClick: Sn,
              onSelect: i,
              children: (0, X.jsx)(p, {
                id: `pullRequestDetail.comment.quoteReply`,
                defaultMessage: `Quote reply`,
                description: `Menu item to reply to a pull request comment with its text quoted in Markdown`,
              }),
            })),
      (t[6] = i),
      (t[7] = u));
  let d;
  t[8] === n
    ? (d = t[9])
    : ((d =
        n == null
          ? null
          : (0, X.jsx)(S.Item, {
              leftIconAsset: y,
              tone: `danger`,
              onClick: xn,
              onSelect: n,
              children: (0, X.jsx)(p, {
                id: `pullRequestDetail.comment.delete`,
                defaultMessage: `Delete`,
                description: `Menu item to delete a pull request comment`,
              }),
            })),
      (t[8] = n),
      (t[9] = d));
  let m;
  return (
    t[10] !== c || t[11] !== l || t[12] !== u || t[13] !== d
      ? ((m = (0, X.jsxs)(s, { align: `end`, contentWidth: `xs`, triggerButton: c, children: [l, u, d] })),
        (t[10] = c),
        (t[11] = l),
        (t[12] = u),
        (t[13] = d),
        (t[14] = m))
      : (m = t[14]),
    m
  );
}
function xn(e) {
  return e.stopPropagation();
}
function Sn(e) {
  return e.stopPropagation();
}
function Cn(e) {
  return e.stopPropagation();
}
function wn(e) {
  let t = (0, En.c)(19),
    { body: n, children: r, truncate: i } = e,
    a = i === void 0 || i,
    o = r == null ? 3 : 6,
    s;
  t[0] !== n || t[1] !== o
    ? ((s = { text: n, collapsedLineCount: o, fallbackFontSizePx: 13 }), (t[0] = n), (t[1] = o), (t[2] = s))
    : (s = t[2]);
  let { setTextContentMeasurementRef: c, collapseState: u, handleToggleExpansion: d } = l(s),
    f = a && u === `collapsed` && (r == null ? `line-clamp-3` : `line-clamp-6`),
    m;
  t[3] === f ? (m = t[4]) : ((m = L(f)), (t[3] = f), (t[4] = m));
  let h;
  t[5] !== n || t[6] !== r
    ? ((h =
        r ??
        (0, X.jsx)(ut, {
          textStyle: { kind: `small` },
          allowBasicHtml: !0,
          components: {
            img() {
              return null;
            },
            p(e) {
              let { children: t } = e;
              return (0, X.jsx)(`span`, { className: `block leading-5`, children: t });
            },
            strong(e) {
              let { children: t } = e;
              return (0, X.jsx)(X.Fragment, { children: t });
            },
          },
          cwd: null,
          children: Qe(n),
        })),
      (t[5] = n),
      (t[6] = r),
      (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] !== c || t[9] !== m || t[10] !== h
    ? ((g = (0, X.jsx)(`div`, { ref: c, className: m, children: h })),
      (t[8] = c),
      (t[9] = m),
      (t[10] = h),
      (t[11] = g))
    : (g = t[11]);
  let _;
  t[12] !== u || t[13] !== d || t[14] !== a
    ? ((_ =
        !a || u === `uncollapsible`
          ? null
          : (0, X.jsxs)(`button`, {
              type: `button`,
              "aria-expanded": u === `expanded`,
              className: `mt-1.5 inline-flex cursor-interaction items-center gap-1 self-start text-base text-codex-description hover:text-default`,
              onClick: d,
              children: [
                (0, X.jsx)(`span`, {
                  children:
                    u === `expanded`
                      ? (0, X.jsx)(p, {
                          id: `pullRequestsPage.detail.commentShowLess`,
                          defaultMessage: `Show less`,
                          description: `Button label for collapsing a pull request comment preview`,
                        })
                      : (0, X.jsx)(p, {
                          id: `pullRequestsPage.detail.commentShowMore`,
                          defaultMessage: `Show more`,
                          description: `Button label for expanding a truncated pull request comment preview`,
                        }),
                }),
                (0, X.jsx)(D, { className: u === `expanded` ? `icon-2xs rotate-180` : `icon-2xs` }),
              ],
            })),
      (t[12] = u),
      (t[13] = d),
      (t[14] = a),
      (t[15] = _))
    : (_ = t[15]);
  let v;
  return (
    t[16] !== g || t[17] !== _
      ? ((v = (0, X.jsxs)(X.Fragment, { children: [g, _] })), (t[16] = g), (t[17] = _), (t[18] = v))
      : (v = t[18]),
    v
  );
}
function Tn(e) {
  let t = e.line,
    n = e.side === `left` ? `L` : `R`,
    r = e.start_line ?? t,
    i = (e.start_side ?? e.side) === `left` ? `L` : `R`;
  return r === t && i === n
    ? (0, X.jsx)(p, {
        id: `pullRequestsPage.detail.line`,
        defaultMessage: `Line {side}{line}`,
        description: `Single-line location label shown beside a pull request comment file name`,
        values: { line: t, side: n },
      })
    : (0, X.jsx)(p, {
        id: `pullRequestsPage.detail.lines`,
        defaultMessage: `{startSide}{startLine}–{endSide}{endLine}`,
        description: `Line-range location label shown beside a pull request comment file name`,
        values: { endLine: t, endSide: n, startLine: r, startSide: i },
      });
}
var En, Dn, On, X;
function kn() {
  return (kn = e(() => {
    ((En = q()),
      j(),
      w(),
      O(),
      k(),
      (Dn = t(re(), 1)),
      (On = Y()),
      H(),
      le(),
      i(),
      Ee(),
      ht(),
      Ae(),
      r(),
      F(),
      d(),
      Wt(),
      Et(),
      Ht(),
      ke(),
      K(),
      E(),
      ot(),
      At(),
      dn(),
      gn(),
      (X = J()));
  }))();
}
function An(e) {
  let t = (0, jn.c)(9),
    [n, r] = Ze(`diff_comment_drafts`),
    i;
  t[0] !== n || t[1] !== e ? ((i = e ? (n?.[e] ?? {}) : {}), (t[0] = n), (t[1] = e), (t[2] = i)) : (i = t[2]);
  let a = i,
    o;
  t[3] !== e || t[4] !== r
    ? ((o = (t) => {
        e &&
          r((n) => {
            let r = n?.[e] ?? {},
              i = t(r);
            if (i === r) return n;
            let a = { ...n };
            return Object.keys(i).length === 0 ? (delete a[e], a) : ((a[e] = i), a);
          });
      }),
      (t[3] = e),
      (t[4] = r),
      (t[5] = o))
    : (o = t[5]);
  let s = o,
    c;
  return (
    t[6] !== a || t[7] !== s
      ? ((c = { drafts: a, updateDrafts: s }), (t[6] = a), (t[7] = s), (t[8] = c))
      : (c = t[8]),
    c
  );
}
var jn;
function Mn() {
  return (Mn = e(() => {
    ((jn = q()), kt());
  }))();
}
function Nn(e) {
  let t = (0, Fn.c)(25),
    {
      commentEditor: r,
      commentText: i,
      initialComment: a,
      isSubmitting: o,
      onCancel: s,
      onDelete: c,
      onSubmit: l,
      showButtons: u,
      stopDictationRef: d,
    } = e,
    f;
  t[0] !== o || t[1] !== c || t[2] !== u
    ? ((f =
        c == null
          ? null
          : (0, Z.jsx)(n, {
              color: u && !o ? `danger` : `ghost`,
              size: `compact`,
              onClick: c,
              children: (0, Z.jsx)(p, {
                id: `code.diffComment.delete`,
                defaultMessage: `Delete`,
                description: `Delete a comment`,
              }),
            })),
      (t[0] = o),
      (t[1] = c),
      (t[2] = u),
      (t[3] = f))
    : (f = t[3]);
  let m = f,
    h = u && !o ? m : null,
    g;
  t[4] !== i || t[5] !== m || t[6] !== a || t[7] !== o || t[8] !== s || t[9] !== l || t[10] !== u
    ? ((g = (e) => {
        let { dictationButton: t, isDictating: r, transcriptionAction: c } = e === void 0 ? {} : e,
          d = r !== void 0 && r,
          f = c === void 0 ? null : c;
        return u || o
          ? (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2`,
              children: [
                t,
                u && !o
                  ? (0, Z.jsx)(n, {
                      color: `ghost`,
                      size: `compact`,
                      onClick: s,
                      children: (0, Z.jsx)(p, {
                        id: `code.diffComment.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel a comment`,
                      }),
                    })
                  : null,
                (0, Z.jsx)(n, {
                  color: `primary`,
                  size: `compact`,
                  disabled: f != null || (!i && !d),
                  loading: o || f === `send`,
                  onClick: l,
                  children: a
                    ? (0, Z.jsx)(p, {
                        id: `code.diffComment.save`,
                        defaultMessage: `Save`,
                        description: `Save a comment`,
                      })
                    : (0, Z.jsx)(p, {
                        id: `code.diffComment.comment`,
                        defaultMessage: `Comment`,
                        description: `Comment on a code diff`,
                      }),
                }),
              ],
            })
          : m;
      }),
      (t[4] = i),
      (t[5] = m),
      (t[6] = a),
      (t[7] = o),
      (t[8] = s),
      (t[9] = l),
      (t[10] = u),
      (t[11] = g))
    : (g = t[11]);
  let _ = g,
    v;
  t[12] === h ? (v = t[13]) : ((v = h ?? (0, Z.jsx)(`div`, {})), (t[12] = h), (t[13] = v));
  let y;
  t[14] === _ ? (y = t[15]) : ((y = _()), (t[14] = _), (t[15] = y));
  let b;
  t[16] !== v || t[17] !== y
    ? ((b = (0, Z.jsxs)(`div`, {
        className: `flex w-full items-center justify-between gap-2`,
        children: [v, y],
      })),
      (t[16] = v),
      (t[17] = y),
      (t[18] = b))
    : (b = t[18]);
  let x = b;
  if (!u || o) return x;
  let S;
  return (
    t[19] !== r || t[20] !== h || t[21] !== l || t[22] !== _ || t[23] !== d
      ? ((S = (0, Z.jsxs)(Z.Fragment, {
          children: [
            null,
            (0, Z.jsx)(Z.Fragment, {
              children: (0, Z.jsx)(Pn, {
                commentEditor: r,
                leadingAction: h,
                onSubmit: l,
                stopDictationRef: d,
                renderTrailingActions: _,
              }),
            }),
          ],
        })),
        (t[19] = r),
        (t[20] = h),
        (t[21] = l),
        (t[22] = _),
        (t[23] = d),
        (t[24] = S))
      : (S = t[24]),
    S
  );
}
function Pn(e) {
  let t = (0, Fn.c)(79),
    { commentEditor: n, leadingAction: r, onSubmit: i, stopDictationRef: a, renderTrailingActions: o } = e,
    s = m(c),
    l = C(),
    d = Re() === !0,
    f = xt(ze),
    p;
  t[0] !== n || t[1] !== i || t[2] !== a
    ? ((p = async (e, t) => {
        let r = await n.dictation.finish(e);
        r !== `cancelled` &&
          (r === `not-active` && n.insertDictationText(e), (a.current = null), t === `send` && i());
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = p))
    : (p = t[3]);
  let h = p,
    g;
  t[4] === n ? (g = t[5]) : ((g = () => n.getText()), (t[4] = n), (t[5] = g));
  let _, v, y;
  t[6] === n.dictation
    ? ((_ = t[7]), (v = t[8]), (y = t[9]))
    : ((_ = () => n.dictation.start()),
      (v = (e) => n.dictation.update(e)),
      (y = () => n.dictation.cancel()),
      (t[6] = n.dictation),
      (t[7] = _),
      (t[8] = v),
      (t[9] = y));
  let b, x;
  t[10] === h
    ? ((b = t[11]), (x = t[12]))
    : ((b = (e) => h(e, `insert`)), (x = (e) => h(e, `send`)), (t[10] = h), (t[11] = b), (t[12] = x));
  let S;
  t[13] !== l || t[14] !== s || t[15] !== a
    ? ((S = (e) => {
        ((a.current = null),
          s
            .get(ne)
            .danger(ye(l, `start`, e).message, {
              errorAnalytics: { toastId: `codeDiffCommentFooter.onStartError.start` },
            }));
      }),
      (t[13] = l),
      (t[14] = s),
      (t[15] = a),
      (t[16] = S))
    : (S = t[16]);
  let w;
  t[17] !== n.dictation || t[18] !== l || t[19] !== s || t[20] !== a
    ? ((w = (e) => {
        ((a.current = null),
          n.dictation.cancel(),
          s
            .get(ne)
            .danger(ye(l, `transcription`, e).message, {
              errorAnalytics: { toastId: `codeDiffCommentFooter.onTranscribeError.transcription` },
            }));
      }),
      (t[17] = n.dictation),
      (t[18] = l),
      (t[19] = s),
      (t[20] = a),
      (t[21] = w))
    : (w = t[21]);
  let T;
  t[22] !== l || t[23] !== s || t[24] !== a
    ? ((T = () => {
        ((a.current = null),
          s
            .get(ne)
            .danger(
              l.formatMessage({
                id: `composer.dictation.unsupported`,
                defaultMessage: `Dictation is not available on this device`,
                description: `Toast text shown when dictation is not supported on the current device`,
              }),
              { errorAnalytics: { toastId: `composer.dictation.unsupported` } },
            ));
      }),
      (t[22] = l),
      (t[23] = s),
      (t[24] = a),
      (t[25] = T))
    : (T = t[25]);
  let {
      canRetryDictation: E,
      isDictationStarting: D,
      isDictating: O,
      isMicrophoneBusy: k,
      isTranscribing: A,
      retryDictation: j,
      startDictation: M,
      stopDictation: N,
      transcriptionAction: P,
      waveformCanvasRef: F,
    } = Ue({
      productSurface: `work`,
      enabled: d,
      waveformVariant: f ? `dictation` : `scrolling`,
      getSurroundingText: g,
      onTranscriptStart: _,
      onTranscriptUpdate: v,
      onTranscriptCancel: y,
      onRecordingStarted: () => {
        ((a.current = I), n.focus());
      },
      onTranscriptInsert: b,
      onTranscriptSend: x,
      onStartError: S,
      onTranscribeError: w,
      onUnsupported: T,
    }),
    I = N,
    L;
  t[26] !== O || t[27] !== A || t[28] !== I
    ? ((L = () => (O || A ? I : null)), (t[26] = O), (t[27] = A), (t[28] = I), (t[29] = L))
    : (L = t[29]);
  let R;
  (t[30] !== O || t[31] !== A || t[32] !== I
    ? ((R = [O, A, I]), (t[30] = O), (t[31] = A), (t[32] = I), (t[33] = R))
    : (R = t[33]),
    (0, In.useImperativeHandle)(a, L, R));
  let z;
  t[34] === I
    ? (z = t[35])
    : ((z = () => () => {
        I(`abort`);
      }),
      (t[34] = I),
      (t[35] = z));
  let ee;
  (t[36] === I ? (ee = t[37]) : ((ee = [I]), (t[36] = I), (t[37] = ee)), (0, In.useLayoutEffect)(z, ee));
  let te;
  t[38] !== n || t[39] !== I || t[40] !== a
    ? ((te = (e) => {
        (e === `abort` && (a.current = null), n.focus(), I(e));
      }),
      (t[38] = n),
      (t[39] = I),
      (t[40] = a),
      (t[41] = te))
    : (te = t[41]);
  let B = te;
  if (!f && (O || A)) {
    let e;
    return (
      t[42] !== B || t[43] !== P || t[44] !== F
        ? ((e = (0, Z.jsx)(`div`, {
            className: `w-full`,
            children: (0, Z.jsx)(jt, {
              noBottomMargin: !0,
              noHorizontalPadding: !0,
              primaryIcon: u,
              stopDictation: B,
              transcriptionAction: P,
              waveformCanvasRef: F,
            }),
          })),
          (t[42] = B),
          (t[43] = P),
          (t[44] = F),
          (t[45] = e))
        : (e = t[45]),
      e
    );
  }
  let V;
  t[46] === r ? (V = t[47]) : ((V = r ?? (0, Z.jsx)(`div`, {})), (t[46] = r), (t[47] = V));
  let H = f && O,
    U = d && !(f && P === `send`),
    re;
  t[48] !== n || t[49] !== k || t[50] !== j || t[51] !== I || t[52] !== a
    ? ((re = () => {
        if (k) return Promise.resolve();
        let e = (e) => {
          I(e);
        };
        return (
          (a.current = e),
          n.focus(),
          j().then(() => {
            a.current === e && (a.current = null);
          })
        );
      }),
      (t[48] = n),
      (t[49] = k),
      (t[50] = j),
      (t[51] = I),
      (t[52] = a),
      (t[53] = re))
    : (re = t[53]);
  let W = f ? F : void 0,
    G;
  t[54] !== k || t[55] !== i || t[56] !== M || t[57] !== I || t[58] !== a
    ? ((G = (e) => {
        if (k) return Promise.resolve();
        let t = (e) => {
          (I(`abort`), e === `send` && a.current === t && ((a.current = null), i()));
        };
        return (
          (a.current = t),
          M(e).then(() => {
            a.current === t && (a.current = null);
          })
        );
      }),
      (t[54] = k),
      (t[55] = i),
      (t[56] = M),
      (t[57] = I),
      (t[58] = a),
      (t[59] = G))
    : (G = t[59]);
  let ie;
  t[60] !== E ||
  t[61] !== B ||
  t[62] !== D ||
  t[63] !== k ||
  t[64] !== A ||
  t[65] !== H ||
  t[66] !== U ||
  t[67] !== re ||
  t[68] !== W ||
  t[69] !== G
    ? ((ie = (0, Z.jsx)(_t, {
        canRetryDictation: E,
        disabled: k,
        isStarting: D,
        isDictating: H,
        isTranscribing: A,
        isVisible: U,
        retryDictation: re,
        size: `compact`,
        waveformCanvasRef: W,
        stopDictation: B,
        startDictation: G,
      })),
      (t[60] = E),
      (t[61] = B),
      (t[62] = D),
      (t[63] = k),
      (t[64] = A),
      (t[65] = H),
      (t[66] = U),
      (t[67] = re),
      (t[68] = W),
      (t[69] = G),
      (t[70] = ie))
    : (ie = t[70]);
  let K;
  t[71] !== O || t[72] !== o || t[73] !== ie || t[74] !== P
    ? ((K = o({ isDictating: O, transcriptionAction: P, dictationButton: ie })),
      (t[71] = O),
      (t[72] = o),
      (t[73] = ie),
      (t[74] = P),
      (t[75] = K))
    : (K = t[75]);
  let ae;
  return (
    t[76] !== V || t[77] !== K
      ? ((ae = (0, Z.jsxs)(`div`, {
          className: `flex w-full items-center justify-between gap-2`,
          children: [V, K],
        })),
        (t[76] = V),
        (t[77] = K),
        (t[78] = ae))
      : (ae = t[78]),
    ae
  );
}
var Fn, In, Z;
function Ln() {
  return (Ln = e(() => {
    ((Fn = q()), v(), (In = Y()), H(), et(), De(), Ce(), x(), W(), fe(), xe(), nt(), Be(), le(), (Z = J()));
  }))();
}
function Rn(e) {
  let t = (0, Vn.c)(14),
    { alt: n, fallbackName: r } = e,
    { accountId: i, authMethod: a, email: o, userId: s } = wt(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = { enabled: !0 }), (t[0] = c)) : (c = t[0]);
  let { data: l } = tt(c),
    { data: u } = Se(),
    d = i ?? l?.accountId ?? null,
    f = a === `chatgpt`,
    p = s ?? l?.userId ?? null,
    m;
  t[1] !== d || t[2] !== f || t[3] !== p
    ? ((m = { accountId: d, enabled: f, userId: p }), (t[1] = d), (t[2] = f), (t[3] = p), (t[4] = m))
    : (m = t[4]);
  let { data: h } = Ft(m),
    g = u?.structure?.toLowerCase() === `personal`,
    _ = h?.imageUrl,
    v = g ? (u?.profile_picture_url ?? null) : null,
    y;
  t[5] !== _ || t[6] !== v
    ? ((y = (0, Hn.default)([_, v].filter(zn))), (t[5] = _), (t[6] = v), (t[7] = y))
    : (y = t[7]);
  let b = y,
    x = h?.displayName ?? h?.username ?? (g ? u?.name : null) ?? o ?? l?.email ?? r,
    S = b[0] ?? `fallback`,
    C = s ?? l?.userId ?? void 0,
    w;
  return (
    t[8] !== n || t[9] !== b || t[10] !== x || t[11] !== C || t[12] !== S
      ? ((w = (0, Wn.jsx)(Bn, { alt: n, colorKey: C, imageUrls: b, name: x }, S)),
        (t[8] = n),
        (t[9] = b),
        (t[10] = x),
        (t[11] = C),
        (t[12] = S),
        (t[13] = w))
      : (w = t[13]),
    w
  );
}
function zn(e) {
  return e != null;
}
function Bn(e) {
  let t = (0, Vn.c)(15),
    { alt: n, colorKey: r, imageUrls: i, name: a } = e,
    [o, s] = (0, Un.useState)(!1),
    c = i[0] ?? null,
    { isError: l, src: u } = lt(c);
  if ((o || l) && i.length > 1) {
    let e;
    t[0] === i ? (e = t[1]) : ((e = i.slice(1)), (t[0] = i), (t[1] = e));
    let o = e,
      s;
    return (
      t[2] !== n || t[3] !== r || t[4] !== o || t[5] !== a
        ? ((s = (0, Wn.jsx)(Bn, { alt: n, colorKey: r, imageUrls: o, name: a }, o[0])),
          (t[2] = n),
          (t[3] = r),
          (t[4] = o),
          (t[5] = a),
          (t[6] = s))
        : (s = t[6]),
      s
    );
  }
  let d = o || l ? null : u,
    f;
  t[7] === c ? (f = t[8]) : ((f = c == null ? void 0 : () => s(!0)), (t[7] = c), (t[8] = f));
  let p;
  return (
    t[9] !== n || t[10] !== r || t[11] !== a || t[12] !== d || t[13] !== f
      ? ((p = (0, Wn.jsx)(zt, { alt: n, colorKey: r, name: a, src: d, onImageError: f })),
        (t[9] = n),
        (t[10] = r),
        (t[11] = a),
        (t[12] = d),
        (t[13] = f),
        (t[14] = p))
      : (p = t[14]),
    p
  );
}
var Vn, Hn, Un, Wn;
function Gn() {
  return (Gn = e(() => {
    ((Vn = q()), (Hn = t($e(), 1)), (Un = Y()), st(), vt(), Ct(), be(), ve(), rt(), (Wn = J()));
  }))();
}
function Kn(e) {
  let t = (0, qn.c)(20),
    { open: r, onConfirm: i, onOpenChange: a } = e,
    o;
  t[0] !== i || t[1] !== a
    ? ((o = (e) => {
        (e.preventDefault(), a(!1), i());
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Jn.jsx)(A, {
        className: `contents`,
        children: (0, Jn.jsx)(p, {
          id: `code.diffComment.dismissConfirmation.title`,
          defaultMessage: `Dismiss this review comment?`,
          description: `Title for the confirmation dialog shown before hiding a model-authored review comment from a code diff`,
        }),
      })),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Jn.jsx)(U, {
        children: (0, Jn.jsx)(P, {
          title: c,
          subtitle: (0, Jn.jsx)(R, {
            className: `contents`,
            children: (0, Jn.jsx)(p, {
              id: `code.diffComment.dismissConfirmation.description`,
              defaultMessage: `The comment will be hidden from the diff but remain in the chat transcript`,
              description: `Explanation that dismissing a model-authored review comment hides it from the diff without deleting it from the chat transcript`,
            }),
          }),
        }),
      })),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] === a ? (u = t[6]) : ((u = () => a(!1)), (t[5] = a), (t[6] = u));
  let d;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Jn.jsx)(p, {
        id: `code.diffComment.dismissConfirmation.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button for keeping a model-authored review comment visible in a code diff`,
      })),
      (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] === u
    ? (f = t[9])
    : ((f = (0, Jn.jsx)(n, { color: `secondary`, type: `button`, onClick: u, children: d })),
      (t[8] = u),
      (t[9] = f));
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Jn.jsx)(n, {
        color: `danger`,
        type: `submit`,
        children: (0, Jn.jsx)(p, {
          id: `code.diffComment.dismissConfirmation.confirm`,
          defaultMessage: `Dismiss`,
          description: `Confirm button for hiding a model-authored review comment from a code diff`,
        }),
      })),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] === f
    ? (h = t[12])
    : ((h = (0, Jn.jsx)(U, { children: (0, Jn.jsxs)(se, { children: [f, m] }) })), (t[11] = f), (t[12] = h));
  let g;
  t[13] !== s || t[14] !== h
    ? ((g = (0, Jn.jsxs)(ae, { as: `form`, onSubmit: s, children: [l, h] })),
      (t[13] = s),
      (t[14] = h),
      (t[15] = g))
    : (g = t[15]);
  let _;
  return (
    t[16] !== a || t[17] !== r || t[18] !== g
      ? ((_ = (0, Jn.jsx)(G, {
          open: r,
          onOpenChange: a,
          showDialogClose: !1,
          size: `compact`,
          children: g,
        })),
        (t[16] = a),
        (t[17] = r),
        (t[18] = g),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
var qn, Jn;
function Yn() {
  return (Yn = e(() => {
    ((qn = q()), H(), le(), de(), I(), (Jn = J()));
  }))();
}
function Xn(e) {
  let t = (0, ir.c)(141),
    {
      filePath: r,
      workspaceRoot: i,
      source: a,
      side: o,
      lineNumber: s,
      startLine: c,
      startSide: l,
      localDiffHunk: u,
      authorLabel: d,
      authorAvatarUrl: f,
      onSubmit: m,
      onDelete: h,
      onDismiss: _,
      onClose: v,
      initialComment: y,
      initialDraftText: b,
      onDraftTextChange: x,
      onUnsavedChange: S,
      isSubmitting: w,
    } = e,
    T = w !== void 0 && w,
    E = a === `model`,
    O = a === `user` && d == null,
    k;
  t[0] === y ? (k = t[1]) : ((k = y ? je(y) : ``), (t[0] = y), (t[1] = k));
  let A = k,
    j = b ?? A,
    M = y?.position.start_line ?? c ?? s,
    N = y?.position.line ?? s,
    [P, F] = (0, Q.useState)(j),
    [I, R] = (0, Q.useState)(!y && !E),
    [z, ee] = (0, Q.useState)(!1),
    [ne, B] = (0, Q.useState)(!1),
    V = (0, Q.useRef)(null),
    H = (0, Q.useRef)(null),
    U = (0, Q.useRef)(null),
    re = (0, Q.useRef)(y != null),
    W = C(),
    G =
      a === `model`
        ? W.formatMessage({
            id: `code.diffComment.modelCommentAuthor`,
            defaultMessage: `Codex`,
            description: `Author label shown for model-authored local diff comments`,
          })
        : (d ??
          W.formatMessage({
            id: `code.diffComment.currentUserAuthor`,
            defaultMessage: `You`,
            description: `Author label for the current user's local diff comments`,
          })),
    ie = yt(a === `user` ? (f ?? null) : null),
    K = O
      ? W.formatMessage({
          id: `code.diffComment.currentUserAvatarAlt`,
          defaultMessage: `Your avatar`,
          description: `Alt text for the current user's avatar on a local diff comment`,
        })
      : W.formatMessage(
          {
            id: `code.diffComment.authorAvatarAlt`,
            defaultMessage: `{author} avatar`,
            description: `Alt text for an author's avatar on a diff comment`,
          },
          { author: G },
        ),
    ae;
  if (a === `model`) {
    let e;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(g, { asset: te })), (t[2] = e))
      : (e = t[2]);
    let n;
    (t[3] === K
      ? (n = t[4])
      : ((n = (0, $.jsx)(`span`, {
          "aria-label": K,
          className: `flex size-6 shrink-0 items-center justify-center rounded-full border border-border/20 bg-surface-secondary/60 text-default`,
          role: `img`,
          children: e,
        })),
        (t[3] = K),
        (t[4] = n)),
      (ae = n));
  } else if (O) {
    let e;
    (t[5] !== K || t[6] !== G
      ? ((e = (0, $.jsx)(Rn, { alt: K, fallbackName: G })), (t[5] = K), (t[6] = G), (t[7] = e))
      : (e = t[7]),
      (ae = e));
  } else {
    let e;
    (t[8] !== K || t[9] !== ie || t[10] !== G
      ? ((e = (0, $.jsx)(`span`, {
          className: Mt.avatar,
          children: (0, $.jsx)(zt, { alt: K, name: G, src: ie }),
        })),
        (t[8] = K),
        (t[9] = ie),
        (t[10] = G),
        (t[11] = e))
      : (e = t[11]),
      (ae = e));
  }
  let oe;
  t[12] !== W || t[13] !== z
    ? ((oe = z
        ? W.formatMessage({
            id: `pullRequestsPage.detail.expandComment`,
            defaultMessage: `Expand`,
            description: `Accessible label for the button that expands a collapsed pull request comment`,
          })
        : W.formatMessage({
            id: `pullRequestsPage.detail.collapseComment`,
            defaultMessage: `Collapse`,
            description: `Accessible label for the button that collapses an expanded pull request comment`,
          })),
      (t[12] = W),
      (t[13] = z),
      (t[14] = oe))
    : (oe = t[14]);
  let se = oe,
    le;
  t[15] === W
    ? (le = t[16])
    : ((le = W.formatMessage({
        id: `code.diffComment.dismiss`,
        defaultMessage: `Dismiss comment`,
        description: `Accessible label for dismissing a model-authored comment from a code diff`,
      })),
      (t[15] = W),
      (t[16] = le));
  let ue = le,
    de;
  t[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((de = we()), (t[17] = de)) : (de = t[17]);
  let q = de,
    fe;
  (t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = () => {
        q.view.isDestroyed || q.destroy();
      }),
      (t[18] = fe))
    : (fe = t[18]),
    Ie(fe, q));
  let J;
  t[19] !== y?.replyToReviewThreadId || t[20] !== E
    ? ((J = () => {
        if (!(V.current == null || E || y?.replyToReviewThreadId != null))
          return mt(document.body, (e) => {
            let t = H.current;
            e.defaultPrevented ||
              e.key !== `Escape` ||
              t == null ||
              (e.preventDefault(), e.stopPropagation(), (H.current = null), q.focus(), t(`abort`));
          });
      }),
      (t[19] = y?.replyToReviewThreadId),
      (t[20] = E),
      (t[21] = J))
    : (J = t[21]);
  let pe = y?.replyToReviewThreadId,
    me;
  (t[22] !== E || t[23] !== pe ? ((me = [q, pe, E]), (t[22] = E), (t[23] = pe), (t[24] = me)) : (me = t[24]),
    (0, Q.useEffect)(J, me));
  let Y;
  t[25] === E
    ? (Y = t[26])
    : ((Y = (e) => {
        if (E) return;
        let t = e.target;
        t &&
          (t.closest(`.ProseMirror,button,input,select,a,[role='button']`) ||
            (e.preventDefault(), q.focus()));
      }),
      (t[25] = E),
      (t[26] = Y));
  let ge = Y,
    _e,
    ve;
  (t[27] === j
    ? ((_e = t[28]), (ve = t[29]))
    : ((_e = () => {
        (q.getText() !== j && q.setPromptText(j), F(j));
      }),
      (ve = [q, j]),
      (t[27] = j),
      (t[28] = _e),
      (t[29] = ve)),
    (0, Q.useEffect)(_e, ve));
  let ye;
  t[30] === x
    ? (ye = t[31])
    : ((ye = (e) => {
        (F(e), x?.(e));
      }),
      (t[30] = x),
      (t[31] = ye));
  let be = ye,
    xe,
    Se;
  (t[32] === y
    ? ((xe = t[33]), (Se = t[34]))
    : ((xe = () => {
        let e = y != null;
        (!re.current && e && (R(!1), q.view.dom.blur()), (re.current = e));
      }),
      (Se = [q, y]),
      (t[32] = y),
      (t[33] = xe),
      (t[34] = Se)),
    (0, Q.useEffect)(xe, Se));
  let Ce;
  if (t[35] !== P || t[36] !== y || t[37] !== A || t[38] !== E) {
    if (((Ce = !1), !E)) {
      if (y) Ce = P !== A;
      else {
        let e;
        (t[40] === P ? (e = t[41]) : ((e = P.trim()), (t[40] = P), (t[41] = e)), (Ce = e.length > 0));
      }
    }
    ((t[35] = P), (t[36] = y), (t[37] = A), (t[38] = E), (t[39] = Ce));
  } else Ce = t[39];
  let Te;
  t[42] !== Ce || t[43] !== S
    ? ((Te = () => {
        S && U.current !== Ce && ((U.current = Ce), S(Ce));
      }),
      (t[42] = Ce),
      (t[43] = S),
      (t[44] = Te))
    : (Te = t[44]);
  let Ee;
  (t[45] !== Ce || t[46] !== S ? ((Ee = [Ce, S]), (t[45] = Ce), (t[46] = S), (t[47] = Ee)) : (Ee = t[47]),
    (0, Q.useEffect)(Te, Ee));
  let De;
  t[48] !== r ||
  t[49] !== y ||
  t[50] !== T ||
  t[51] !== s ||
  t[52] !== u ||
  t[53] !== v ||
  t[54] !== m ||
  t[55] !== E ||
  t[56] !== o ||
  t[57] !== c ||
  t[58] !== l
    ? ((De = () => {
        if (E || T) return;
        if (H.current != null) {
          H.current(`send`);
          return;
        }
        let e = q.getText();
        if (!e) return;
        let t = y
          ? { ...y, content: [{ content_type: `text`, text: e }] }
          : {
              type: `comment`,
              content: [{ content_type: `text`, text: e }],
              position: {
                side: o === `deletions` ? `left` : `right`,
                path: r,
                line: s,
                ...(c != null && (c !== s || l !== o) ? { start_line: c } : {}),
                ...(l != null && l !== o ? { start_side: l === `deletions` ? `left` : `right` } : {}),
              },
              localDiffHunk: u,
            };
        (m(t), R(!1), q.view.dom.blur(), v?.(), Ke());
      }),
      (t[48] = r),
      (t[49] = y),
      (t[50] = T),
      (t[51] = s),
      (t[52] = u),
      (t[53] = v),
      (t[54] = m),
      (t[55] = E),
      (t[56] = o),
      (t[57] = c),
      (t[58] = l),
      (t[59] = De))
    : (De = t[59]);
  let Oe = De,
    ke;
  t[60] === h
    ? (ke = t[61])
    : ((ke = () => {
        (h?.(), Ke());
      }),
      (t[60] = h),
      (t[61] = ke));
  let Ae = ke,
    Me;
  t[62] !== y || t[63] !== A || t[64] !== v || t[65] !== x
    ? ((Me = () => {
        (v?.(), R(!1), y && (F(A), q.setPromptText(A), x?.(A)));
      }),
      (t[62] = y),
      (t[63] = A),
      (t[64] = v),
      (t[65] = x),
      (t[66] = Me))
    : (Me = t[66]);
  let Ne = Me;
  if (!E && y?.replyToReviewThreadId != null) {
    let e = ae,
      n;
    t[67] === P ? (n = t[68]) : ((n = P.trim()), (t[67] = P), (t[68] = n));
    let r = !n,
      a;
    t[69] === W
      ? (a = t[70])
      : ((a = W.formatMessage({
          id: `code.diffComment.reply.submit`,
          defaultMessage: `Post reply`,
          description: `Accessible label for posting a pull request reply`,
        })),
        (t[69] = W),
        (t[70] = a));
    let o;
    t[71] === W
      ? (o = t[72])
      : ((o = W.formatMessage({
          id: `code.diffComment.reply.placeholder`,
          defaultMessage: `Reply…`,
          description: `Placeholder for a pull request review reply`,
        })),
        (t[71] = W),
        (t[72] = o));
    let s;
    t[73] !== P ||
    t[74] !== Oe ||
    t[75] !== be ||
    t[76] !== y ||
    t[77] !== A ||
    t[78] !== v ||
    t[79] !== o ||
    t[80] !== i
      ? ((s = (0, $.jsx)(tr, {
          commentEditor: q,
          commentText: P,
          disableAutoFocus: !1,
          initialComment: y,
          initialCommentText: A,
          workspaceRoot: i,
          containerRef: V,
          onTextChange: be,
          onEscape: v,
          onSubmit: Oe,
          placeholder: o,
        })),
        (t[73] = P),
        (t[74] = Oe),
        (t[75] = be),
        (t[76] = y),
        (t[77] = A),
        (t[78] = v),
        (t[79] = o),
        (t[80] = i),
        (t[81] = s))
      : (s = t[81]);
    let c;
    return (
      t[82] !== ae || t[83] !== Oe || t[84] !== T || t[85] !== r || t[86] !== a || t[87] !== s
        ? ((c = (0, $.jsx)(`div`, {
            ref: V,
            className: `w-full max-w-3xl min-w-0 px-1.5 pb-1.5 font-sans`,
            children: (0, $.jsx)(`div`, {
              className: `min-w-0 rounded-lg border border-border/24 bg-surface-secondary/92 focus-within:border-text-secondary`,
              children: (0, $.jsx)(qt, {
                authorAvatar: e,
                disabled: r,
                loading: T,
                submitLabel: a,
                submitType: `button`,
                onSubmit: Oe,
                children: s,
              }),
            }),
          })),
          (t[82] = ae),
          (t[83] = Oe),
          (t[84] = T),
          (t[85] = r),
          (t[86] = a),
          (t[87] = s),
          (t[88] = c))
        : (c = t[88]),
      c
    );
  }
  let Pe;
  t[89] !== P ||
  t[90] !== Oe ||
  t[91] !== be ||
  t[92] !== y ||
  t[93] !== A ||
  t[94] !== W ||
  t[95] !== z ||
  t[96] !== v ||
  t[97] !== E ||
  t[98] !== i
    ? ((Pe = z
        ? null
        : (0, $.jsx)(`div`, {
            className: `flex flex-col gap-2 p-3`,
            children: E
              ? (0, $.jsx)(Qn, {
                  commentEditor: q,
                  placeholder: W.formatMessage({
                    id: `code.diff.requestChange`,
                    defaultMessage: `Add a comment…`,
                    description: `Placeholder for code diff request change`,
                  }),
                })
              : (0, $.jsx)(tr, {
                  commentEditor: q,
                  commentText: P,
                  initialComment: y,
                  initialCommentText: A,
                  workspaceRoot: i,
                  containerRef: V,
                  onTextChange: be,
                  onEscape: v,
                  onSubmit: Oe,
                  onShowButtons: () => {
                    R(!0);
                  },
                  onHideButtons: () => {
                    H.current ?? R(!1);
                  },
                  placeholder: W.formatMessage({
                    id: `code.diff.requestChange`,
                    defaultMessage: `Add a comment…`,
                    description: `Placeholder for code diff request change`,
                  }),
                }),
          })),
      (t[89] = P),
      (t[90] = Oe),
      (t[91] = be),
      (t[92] = y),
      (t[93] = A),
      (t[94] = W),
      (t[95] = z),
      (t[96] = v),
      (t[97] = E),
      (t[98] = i),
      (t[99] = Pe))
    : (Pe = t[99]);
  let Fe;
  t[100] !== P ||
  t[101] !== Ne ||
  t[102] !== Ae ||
  t[103] !== Oe ||
  t[104] !== y ||
  t[105] !== z ||
  t[106] !== T ||
  t[107] !== h ||
  t[108] !== E ||
  t[109] !== I
    ? ((Fe =
        !E && (I || T || h != null)
          ? (0, $.jsx)(Nn, {
              stopDictationRef: H,
              commentEditor: q,
              commentText: P,
              initialComment: y,
              isSubmitting: T,
              onCancel: Ne,
              onDelete: h == null ? void 0 : Ae,
              onSubmit: Oe,
              showButtons: I && !z,
            })
          : null),
      (t[100] = P),
      (t[101] = Ne),
      (t[102] = Ae),
      (t[103] = Oe),
      (t[104] = y),
      (t[105] = z),
      (t[106] = T),
      (t[107] = h),
      (t[108] = E),
      (t[109] = I),
      (t[110] = Fe))
    : (Fe = t[110]);
  let Le;
  t[111] !== O || t[112] !== N || t[113] !== M || t[114] !== o
    ? ((Le = (0, $.jsx)(`div`, {
        className: `text-xs leading-4 text-codex-description`,
        children:
          M === N
            ? (0, $.jsx)(p, {
                id: `code.diffComment.lineBySource`,
                defaultMessage: `{source, select, local {Local comment on line {line}} other {Comment on line {line}}}`,
                description: `Line label for a diff comment. Local identifies the current user's local comment; other identifies a Codex finding or GitHub review comment.`,
                values: { source: O ? `local` : `review`, line: `${o === `deletions` ? `L` : `R`}${N}` },
              })
            : (0, $.jsx)(p, {
                id: `code.diffComment.lineRangeBySource`,
                defaultMessage: `{source, select, local {Local comment on lines {startLine} to {endLine}} other {Comment on lines {startLine} to {endLine}}}`,
                description: `Line-range label for a diff comment. Local identifies the current user's local comment; other identifies a Codex finding or GitHub review comment.`,
                values: {
                  source: O ? `local` : `review`,
                  endLine: `${o === `deletions` ? `L` : `R`}${N}`,
                  startLine: `${o === `deletions` ? `L` : `R`}${M}`,
                },
              }),
      })),
      (t[111] = O),
      (t[112] = N),
      (t[113] = M),
      (t[114] = o),
      (t[115] = Le))
    : (Le = t[115]);
  let Re;
  t[116] !== ue || t[117] !== _ || t[118] !== E
    ? ((Re =
        E && _ != null
          ? (0, $.jsx)(ce, {
              delayDuration: 250,
              tooltipContent: ue,
              children: (0, $.jsx)(n, {
                "aria-label": ue,
                color: `ghost`,
                size: `composerSm`,
                uniform: !0,
                onClick: (e) => {
                  (e.preventDefault(), e.stopPropagation(), B(!0));
                },
                children: (0, $.jsx)(he, { className: `icon-2xs` }),
              }),
            })
          : null),
      (t[116] = ue),
      (t[117] = _),
      (t[118] = E),
      (t[119] = Re))
    : (Re = t[119]);
  let ze;
  t[120] !== se || t[121] !== z || t[122] !== E
    ? ((ze = E
        ? (0, $.jsx)(ce, {
            delayDuration: 250,
            tooltipContent: se,
            children: (0, $.jsx)(n, {
              "aria-expanded": !z,
              "aria-label": se,
              color: `ghost`,
              size: `composerSm`,
              uniform: !0,
              onClick: (e) => {
                (e.preventDefault(), e.stopPropagation(), ee(Zn));
              },
              children: (0, $.jsx)(D, {
                className: L(`icon-2xs transition-transform duration-basic`, !z && `rotate-180`),
              }),
            }),
          })
        : null),
      (t[120] = se),
      (t[121] = z),
      (t[122] = E),
      (t[123] = ze))
    : (ze = t[123]);
  let Be;
  t[124] !== Le || t[125] !== Re || t[126] !== ze
    ? ((Be = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [Le, Re, ze] })),
      (t[124] = Le),
      (t[125] = Re),
      (t[126] = ze),
      (t[127] = Be))
    : (Be = t[127]);
  let Ve;
  t[128] !== ae || t[129] !== G || t[130] !== ge || t[131] !== Pe || t[132] !== Fe || t[133] !== Be
    ? ((Ve = (0, $.jsx)(Kt, {
        authorAvatar: ae,
        authorLabel: G,
        body: Pe,
        className: `composer-surface-chrome`,
        footer: Fe,
        headerAccessory: Be,
        onPointerDownCapture: ge,
      })),
      (t[128] = ae),
      (t[129] = G),
      (t[130] = ge),
      (t[131] = Pe),
      (t[132] = Fe),
      (t[133] = Be),
      (t[134] = Ve))
    : (Ve = t[134]);
  let He;
  t[135] !== ne || t[136] !== _
    ? ((He = _ == null ? null : (0, $.jsx)(Kn, { open: ne, onConfirm: _, onOpenChange: B })),
      (t[135] = ne),
      (t[136] = _),
      (t[137] = He))
    : (He = t[137]);
  let Ue;
  return (
    t[138] !== Ve || t[139] !== He
      ? ((Ue = (0, $.jsxs)(`div`, {
          ref: V,
          className: `w-full max-w-3xl min-w-0 gap-2 p-1.5 font-sans`,
          children: [Ve, He],
        })),
        (t[138] = Ve),
        (t[139] = He),
        (t[140] = Ue))
      : (Ue = t[140]),
    Ue
  );
}
function Zn(e) {
  return !e;
}
function Qn(e) {
  let t = (0, ir.c)(7),
    { commentEditor: n, placeholder: r } = e,
    i;
  t[0] === n.view
    ? (i = t[1])
    : ((i = () => {
        n.view.isDestroyed || n.view.setProps({ editable: er });
      }),
      (t[0] = n.view),
      (t[1] = i));
  let a;
  (t[2] === n ? (a = t[3]) : ((a = [n]), (t[2] = n), (t[3] = a)), (0, Q.useEffect)(i, a));
  let o;
  return (
    t[4] !== n || t[5] !== r
      ? ((o = (0, $.jsx)(Rt, {
          className: ar,
          composerController: n,
          disableAutoFocus: !0,
          minHeight: `0`,
          placeholder: r,
          onSubmit: $n,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function $n() {}
function er() {
  return !1;
}
function tr(e) {
  let t = (0, ir.c)(58),
    {
      commentEditor: n,
      commentText: r,
      disableAutoFocus: i,
      initialComment: a,
      initialCommentText: o,
      workspaceRoot: s,
      containerRef: c,
      onTextChange: l,
      onEscape: u,
      onSubmit: d,
      onShowButtons: f,
      onHideButtons: p,
      placeholder: m,
    } = e,
    h = (0, Q.useRef)(null),
    g = rr(s),
    _ = We(n),
    v = Ge(n),
    y = _.ui?.active ?? !1,
    b;
  t[0] === y ? (b = t[1]) : ((b = { anchorRef: h, isActive: y }), (t[0] = y), (t[1] = b));
  let x = Vt(b),
    S = v.ui?.active ?? !1,
    C;
  t[2] === S ? (C = t[3]) : ((C = { anchorRef: h, isActive: S }), (t[2] = S), (t[3] = C));
  let w = Vt(C),
    T;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = { hostId: V }), (t[4] = T)) : (T = t[4]);
  let E = Ot(T),
    { skills: D } = at(g),
    O,
    k;
  (t[5] !== n || t[6] !== l
    ? ((O = () =>
        gt(n.view, (e) => {
          e && l(n.getText());
        })),
      (k = [n, l]),
      (t[5] = n),
      (t[6] = l),
      (t[7] = O),
      (t[8] = k))
    : ((O = t[7]), (k = t[8])),
    (0, Q.useEffect)(O, k));
  let A, j;
  (t[9] !== E || t[10] !== D || t[11] !== n
    ? ((A = () => {
        n.syncMentionMetadata({ skills: D, apps: E });
      }),
      (j = [E, D, n]),
      (t[9] = E),
      (t[10] = D),
      (t[11] = n),
      (t[12] = A),
      (t[13] = j))
    : ((A = t[12]), (j = t[13])),
    (0, Q.useEffect)(A, j));
  let M;
  t[14] !== n.view.dom || t[15] !== u
    ? ((M = () => {
        let e = (e) => {
            e.key === `Escape` && (e.defaultPrevented || (e.preventDefault(), u?.()));
          },
          t = n.view.dom;
        return (
          t.addEventListener(`keydown`, e),
          () => {
            t.removeEventListener(`keydown`, e);
          }
        );
      }),
      (t[14] = n.view.dom),
      (t[15] = u),
      (t[16] = M))
    : (M = t[16]);
  let P;
  (t[17] !== n || t[18] !== u ? ((P = [n, u]), (t[17] = n), (t[18] = u), (t[19] = P)) : (P = t[19]),
    (0, Q.useEffect)(M, P));
  let F;
  t[20] !== r || t[21] !== c || t[22] !== a || t[23] !== o || t[24] !== p
    ? ((F = (e) => {
        let t = e.relatedTarget;
        a && r === o && (!t || !c.current?.contains(t)) && p?.();
      }),
      (t[20] = r),
      (t[21] = c),
      (t[22] = a),
      (t[23] = o),
      (t[24] = p),
      (t[25] = F))
    : (F = t[25]);
  let I = _.ui?.active ?? !1,
    L = _.ui?.query ?? ``,
    R = _.ui?.source ?? null,
    z;
  t[26] !== _.addMention ||
  t[27] !== _.closeAutocomplete ||
  t[28] !== _.setSelectedMention ||
  t[29] !== g ||
  t[30] !== L ||
  t[31] !== R
    ? ((z = (0, $.jsx)(It, {
        hostId: V,
        onAddContext: _.addMention,
        onRequestClose: _.closeAutocomplete,
        onUpdateSelectedMention: _.setSelectedMention,
        query: L,
        fileSearchRootPaths: g,
        skillRoots: g,
        source: R,
      })),
      (t[26] = _.addMention),
      (t[27] = _.closeAutocomplete),
      (t[28] = _.setSelectedMention),
      (t[29] = g),
      (t[30] = L),
      (t[31] = R),
      (t[32] = z))
    : (z = t[32]);
  let ee;
  t[33] !== x || t[34] !== n || t[35] !== _.ui || t[36] !== I || t[37] !== z
    ? ((ee = (0, $.jsx)(N, {
        anchorRef: h,
        composerController: n,
        isActive: I,
        mentionUiState: _.ui,
        placement: x,
        children: z,
      })),
      (t[33] = x),
      (t[34] = n),
      (t[35] = _.ui),
      (t[36] = I),
      (t[37] = z),
      (t[38] = ee))
    : (ee = t[38]);
  let te;
  t[39] !== g || t[40] !== v || t[41] !== w
    ? ((te = (0, $.jsx)(Ye, {
        autocomplete: v,
        roots: g,
        anchorRef: h,
        placement: w,
        zIndexClassName: `z-[60]`,
      })),
      (t[39] = g),
      (t[40] = v),
      (t[41] = w),
      (t[42] = te))
    : (te = t[42]);
  let ne = i ?? !!a,
    B;
  t[43] !== _.handleMentionEvent || t[44] !== v.handleMentionEvent
    ? ((B = (e) => {
        Pt(e, { onAtMention: _.handleMentionEvent, onSkillMention: v.handleMentionEvent });
      }),
      (t[43] = _.handleMentionEvent),
      (t[44] = v.handleMentionEvent),
      (t[45] = B))
    : (B = t[45]);
  let H;
  t[46] !== n || t[47] !== d || t[48] !== m || t[49] !== ne || t[50] !== B
    ? ((H = (0, $.jsx)(Rt, {
        className: ar,
        composerController: n,
        disableAutoFocus: ne,
        minHeight: `0`,
        placeholder: m,
        onSuggestionHandler: B,
        onSubmit: d,
      })),
      (t[46] = n),
      (t[47] = d),
      (t[48] = m),
      (t[49] = ne),
      (t[50] = B),
      (t[51] = H))
    : (H = t[51]);
  let U;
  return (
    t[52] !== f || t[53] !== F || t[54] !== ee || t[55] !== te || t[56] !== H
      ? ((U = (0, $.jsxs)(`div`, {
          ref: h,
          className: `relative`,
          onContextMenu: nr,
          onFocus: f,
          onBlur: F,
          children: [ee, te, H],
        })),
        (t[52] = f),
        (t[53] = F),
        (t[54] = ee),
        (t[55] = te),
        (t[56] = H),
        (t[57] = U))
      : (U = t[57]),
    U
  );
}
function nr(e) {
  e.stopPropagation();
}
function rr(e) {
  let t = (0, ir.c)(2),
    { data: n } = T(Nt);
  n?.roots;
  let r;
  bb0: {
    if (e != null) {
      let n;
      (t[0] === e ? (n = t[1]) : ((n = [e]), (t[0] = e), (t[1] = n)), (r = n));
      break bb0;
    }
    r = n?.roots;
  }
  return r;
}
var ir, Q, $, ar;
function or() {
  return (or = e(() => {
    ((ir = q()),
      z(),
      k(),
      v(),
      Pe(),
      (Q = Y()),
      H(),
      qe(),
      Ct(),
      Gt(),
      pe(),
      Je(),
      Le(),
      ct(),
      Bt(),
      _(),
      dt(),
      bt(),
      St(),
      Xe(),
      ve(),
      le(),
      F(),
      E(),
      M(),
      Ln(),
      Gn(),
      Wt(),
      Yn(),
      Lt(),
      ($ = J()),
      (ar = L(
        `text-default font-sans w-full !min-h-0 p-0`,
        `[&_.ProseMirror]:w-full`,
        `[&_.ProseMirror]:leading-relaxed`,
        `extension:[&_.ProseMirror]:leading-normal`,
        `[&_.ProseMirror]:font-sans`,
        `[&_.ProseMirror]:caret-current`,
        `[&_.ProseMirror]:px-0`,
        `[&_.ProseMirror]:py-0`,
      )));
  }))();
}
function sr(e) {
  let t = (0, lr.c)(10),
    { comment: n, cwd: r, lineNumber: i, onSelectionClear: a, side: o } = e,
    s = m(Te),
    c;
  t[0] !== n || t[1] !== a || t[2] !== s
    ? ((c = () => {
        (a?.(), Ve(s, n));
      }),
      (t[0] = n),
      (t[1] = a),
      (t[2] = s),
      (t[3] = c))
    : (c = t[3]);
  let l = r ?? void 0,
    u;
  return (
    t[4] !== n || t[5] !== i || t[6] !== o || t[7] !== c || t[8] !== l
      ? ((u = (0, ur.jsx)(Xn, {
          filePath: n.position.path,
          initialComment: n,
          lineNumber: i,
          onDismiss: c,
          onSubmit: cr,
          side: o,
          source: `model`,
          workspaceRoot: l,
        })),
        (t[4] = n),
        (t[5] = i),
        (t[6] = o),
        (t[7] = c),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function cr() {}
var lr, ur;
function dr() {
  return (dr = e(() => {
    ((lr = q()), v(), Tt(), or(), Oe(), (ur = J()));
  }))();
}
function fr(e) {
  let t = (0, _r.c)(54),
    {
      cwd: r,
      diffPath: i,
      workspaceRoot: a,
      enableComments: s,
      allowCommentDrafts: c,
      comments: l,
      modelComments: u,
      readonlyComments: d,
      submittingCommentKeys: f,
      onCommentsChange: m,
      commentAuthorLabel: h,
      commentAuthorAvatarUrl: g,
      onReadonlyCommentReply: _,
      renderReadonlyComment: v,
      renderReadonlyCommentActions: y,
      renderReadonlyCommentBody: b,
      onSelectionClear: x,
      conversationId: S,
    } = e,
    C = c === void 0 ? s : c,
    w = (0, vr.useId)(),
    T;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = new Set()), (t[0] = T)) : (T = t[0]);
  let E = (0, vr.useRef)(T),
    D;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = new Map()), (t[1] = D)) : (D = t[1]);
  let O = (0, vr.useRef)(D),
    { updateDrafts: k } = An(S ?? null),
    A,
    j;
  (t[2] !== S || t[3] !== k
    ? ((A = () => {
        if (!S) return;
        let e = E.current,
          t = O.current;
        return () => {
          (t.clear(),
            e.size !== 0 &&
              (k((t) => {
                let n = { ...t },
                  r = !1;
                for (let t of e) t in n && ((r = !0), delete n[t]);
                return r ? n : t;
              }),
              e.clear()));
        };
      }),
      (j = [S, k]),
      (t[2] = S),
      (t[3] = k),
      (t[4] = A),
      (t[5] = j))
    : ((A = t[4]), (j = t[5])),
    (0, vr.useEffect)(A, j));
  let M;
  t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = {}), (t[6] = M)) : (M = t[6]);
  let [N, P] = (0, vr.useState)(M),
    F;
  if (t[7] !== l || t[8] !== r || t[9] !== i || t[10] !== s || t[11] !== u || t[12] !== d || t[13] !== a) {
    bb0: {
      if (!s) {
        let e;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[15] = e)) : (e = t[15]), (F = e));
        break bb0;
      }
      let e = (e) => e.localWorkspaceRoot == null || a == null || ie(e.localWorkspaceRoot, a),
        n = (l ?? []).filter(e),
        o = new Set(n.map((e) => _e(e, a))),
        c = new Set(
          (d ?? []).flatMap((e) => {
            let t = _e(e, a);
            return a == null ? [t] : [t, _e({ ...e, localWorkspaceRoot: a }, a)];
          }),
        ),
        f = n.flatMap((e) => (c.has(_e(e, a)) ? [] : [{ comment: e, source: `user` }])),
        p = (d ?? []).map((e) => ({
          attached: o.has(_e(e, a)) || (a != null && o.has(_e({ ...e, localWorkspaceRoot: a }, a))),
          comment: e,
          source: `readonly`,
        })),
        m = (u ?? []).filter(e).map(hr),
        h = [...f, ...p, ...m];
      if (h.length === 0) {
        let e;
        (t[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[16] = e)) : (e = t[16]), (F = e));
        break bb0;
      }
      F = h
        .filter((e) => {
          let { comment: t } = e;
          return ft(t.position.path, i, r ?? void 0);
        })
        .map(mr);
    }
    ((t[7] = l), (t[8] = r), (t[9] = i), (t[10] = s), (t[11] = u), (t[12] = d), (t[13] = a), (t[14] = F));
  } else F = t[14];
  let I = F,
    L;
  bb1: {
    if (!C) {
      let e;
      (t[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[17] = e)) : (e = t[17]), (L = e));
      break bb1;
    }
    let e;
    (t[18] !== N || t[19] !== a
      ? ((e = Object.entries(N)
          .filter((e) => {
            let [, t] = e;
            return t.localWorkspaceRoot == null ? a == null : a != null && ie(t.localWorkspaceRoot, a);
          })
          .map(pr)),
        (t[18] = N),
        (t[19] = a),
        (t[20] = e))
      : (e = t[20]),
      (L = e));
  }
  let R = L,
    z;
  bb2: {
    if (!s) {
      let e;
      (t[21] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[21] = e)) : (e = t[21]), (z = e));
      break bb2;
    }
    let e;
    (t[22] !== I || t[23] !== R ? ((e = [...I, ...R]), (t[22] = I), (t[23] = R), (t[24] = e)) : (e = t[24]),
      (z = e));
  }
  let te = z,
    ne;
  if (t[25] !== I || t[26] !== R) {
    ne = new Set();
    for (let e of I)
      (e.metadata?.kind !== `comment` || e.metadata.source !== `readonly`) &&
        ne.add(Qt(e.side, e.lineNumber));
    for (let e of R) ne.add(Qt(e.side, e.lineNumber));
    ((t[25] = I), (t[26] = R), (t[27] = ne));
  } else ne = t[27];
  let B = ne,
    V;
  t[28] !== C || t[29] !== i || t[30] !== a
    ? ((V = (e) => {
        let { lineNumber: t, side: n, startLine: r, startSide: s, localDiffHunk: c } = e;
        if (!C) return;
        let l = Qt(n, t),
          u = a == null ? l : `${ee(a)}::${l}`;
        P((e) => {
          if (e[u]) return e;
          let l = o(i);
          return {
            ...e,
            [u]: {
              side: n,
              lineNumber: t,
              path: l,
              localWorkspaceRoot: a,
              ...(r != null && (r !== t || s !== n) ? { startLine: r } : {}),
              ...(s != null && s !== n ? { startSide: s } : {}),
              localDiffHunk: c,
            },
          };
        });
      }),
      (t[28] = C),
      (t[29] = i),
      (t[30] = a),
      (t[31] = V))
    : (V = t[31]);
  let H = V,
    U;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (e) => {
        P((t) => {
          if (!(e in t)) return t;
          let n = { ...t };
          return (delete n[e], n);
        });
      }),
      (t[32] = U))
    : (U = t[32]);
  let re = U,
    W;
  t[33] !== g ||
  t[34] !== h ||
  t[35] !== l ||
  t[36] !== S ||
  t[37] !== r ||
  t[38] !== w ||
  t[39] !== m ||
  t[40] !== _ ||
  t[41] !== x ||
  t[42] !== v ||
  t[43] !== y ||
  t[44] !== b ||
  t[45] !== f ||
  t[46] !== k ||
  t[47] !== a
    ? ((W = (e) => {
        let t = function (e, t) {
            if (S) {
              if (t) {
                (k((t) => (e in t ? t : { ...t, [e]: !0 })), E.current.add(e));
                return;
              }
              (k((t) => {
                if (!(e in t)) return t;
                let n = { ...t };
                return (delete n[e], n);
              }),
                E.current.delete(e));
            }
          },
          i = e.metadata;
        if (!i) return null;
        let o = gr({
            instanceId: w,
            path: i.kind === `comment` ? i.comment.position.path : i.path,
            workspaceRoot: i.kind === `comment` ? (i.comment.localWorkspaceRoot ?? a) : i.localWorkspaceRoot,
            side: e.side,
            lineNumber: e.lineNumber,
          }),
          s =
            i.kind === `comment`
              ? (i.comment.replyToReviewThreadId ??
                i.comment.reviewThreadId ??
                `comment-${l?.indexOf(i.comment) ?? -1}`)
              : `draft`,
          c = `${S ?? `no-conversation`}::${o}::${s}`,
          u = () => {
            O.current.delete(c);
          },
          d = (e) => {
            O.current.set(c, e);
          };
        switch (i.kind) {
          case `comment`: {
            if (i.source === `readonly`) {
              let e = i.comment,
                t = i.attached === !0,
                r = a == null ? i.comment : { ...i.comment, localWorkspaceRoot: a },
                o = _e(r, a),
                s = _e(i.comment, a),
                c = `url` in i.comment && typeof i.comment.url == `string` ? i.comment.url : null,
                u = i.comment.reviewThreadId ?? null,
                d =
                  _ != null &&
                  i.comment.viewerCanReply !== !1 &&
                  u != null &&
                  !(l ?? []).some((e) => e.replyToReviewThreadId === u),
                f = (e) => {
                  let t = _e(e, a);
                  return t === o || t === s;
                },
                h = l?.find(f)?.localPullRequestCommentGuidance ?? ``,
                g = null;
              if (
                (_ ??
                  (g = t
                    ? (0, yr.jsx)(
                        en,
                        {
                          className: `w-full`,
                          defaultValue: h,
                          onRemove: () => {
                            m?.(
                              (l ?? []).filter((e) => !f(e)),
                              null,
                            );
                          },
                          onSubmit: (e) => {
                            m?.(
                              (l ?? []).map((t) =>
                                f(t) ? { ...t, localPullRequestCommentGuidance: e || void 0 } : t,
                              ),
                              null,
                            );
                          },
                        },
                        `${o}:${h}`,
                      )
                    : (0, yr.jsx)(n, {
                        color: `secondary`,
                        size: `default`,
                        onClick: (e) => {
                          (e.preventDefault(), e.stopPropagation(), m?.([...(l ?? []), r], null));
                        },
                        children: (0, yr.jsx)(p, {
                          id: `localConversation.pullRequest.actions.comments.address`,
                          defaultMessage: `Add to chat`,
                          description: `Action button shown on an individual review comment in the comments flyout`,
                        }),
                      })),
                v != null)
              )
                return (0, yr.jsx)(`div`, {
                  className: `w-full min-w-0 gap-2 p-1.5 font-sans whitespace-normal`,
                  children: v(e, g, t),
                });
              let x;
              return (
                (x =
                  y == null
                    ? _ == null
                      ? g
                      : d
                        ? (0, yr.jsx)(n, {
                            color: `secondary`,
                            size: `default`,
                            onClick: (e) => {
                              (e.preventDefault(), e.stopPropagation(), _(i.comment));
                            },
                            children: (0, yr.jsx)(p, {
                              id: `pullRequestsPage.codeReview.comment.reply`,
                              defaultMessage: `Reply`,
                              description: `Action button shown on a pull request review comment in the code review tab`,
                            }),
                          })
                        : null
                    : y(e, d, () => {
                        d && _?.(i.comment);
                      })),
                (0, yr.jsx)(`div`, {
                  className: `w-full min-w-0 gap-2 p-1.5 font-sans whitespace-normal`,
                  children: (0, yr.jsx)(_n, {
                    comment: i.comment,
                    createdAt: e.createdAt,
                    defaultCollapsed: e.isResolved === !0,
                    headerAccessory:
                      e.isResolved === !0
                        ? (0, yr.jsx)(p, {
                            id: `pullRequestDetail.comment.resolved`,
                            defaultMessage: `Resolved`,
                            description: `Status shown on a resolved pull request code review thread`,
                          })
                        : void 0,
                    metadataAccessory: x,
                    replies: e.replies,
                    renderBody: b,
                    surfaceVariant: `inline`,
                    url: c,
                  }),
                })
              );
            }
            if (i.source === `model`)
              return (0, yr.jsx)(sr, {
                comment: i.comment,
                cwd: r,
                lineNumber: e.lineNumber,
                onSelectionClear: x,
                side: e.side,
              });
            let o = f?.has(Fe(i.comment)) === !0;
            return (0, yr.jsx)(
              Xn,
              {
                filePath: i.comment.position.path,
                workspaceRoot: r ?? void 0,
                side: e.side,
                source: `user`,
                lineNumber: e.lineNumber,
                initialComment: i.comment,
                initialDraftText: O.current.get(c),
                authorLabel: h,
                authorAvatarUrl: g,
                isSubmitting: o,
                onUnsavedChange: (e) => {
                  (t(c, e), e || u());
                },
                onDraftTextChange: d,
                onSubmit: (e) => {
                  (t(c, !1), u());
                  let n = (l ?? []).map((t) => (t === i.comment ? e : t));
                  m?.(n, { previous: i.comment, updated: e });
                },
                onDelete: () => {
                  (t(c, !1), u(), x?.(), m?.(l?.filter((e) => e !== i.comment) ?? [], null));
                },
              },
              c,
            );
          }
          case `draft-comment`:
            return (0, yr.jsx)(
              Xn,
              {
                filePath: i.path,
                workspaceRoot: r ?? void 0,
                side: e.side,
                source: `user`,
                lineNumber: e.lineNumber,
                startLine: i.startLine,
                startSide: i.startSide,
                localDiffHunk: i.localDiffHunk,
                authorLabel: h,
                authorAvatarUrl: g,
                initialDraftText: O.current.get(c),
                onUnsavedChange: (e) => {
                  (t(c, e), e || u());
                },
                onDraftTextChange: d,
                onSubmit: (e) => {
                  (t(c, !1),
                    u(),
                    x?.(),
                    m?.(
                      [
                        ...(l ?? []),
                        i.localWorkspaceRoot == null ? e : { ...e, localWorkspaceRoot: i.localWorkspaceRoot },
                      ],
                      null,
                    ),
                    re(i.key));
                },
                onClose: () => {
                  (t(c, !1), u(), x?.(), re(i.key));
                },
              },
              c,
            );
        }
      }),
      (t[33] = g),
      (t[34] = h),
      (t[35] = l),
      (t[36] = S),
      (t[37] = r),
      (t[38] = w),
      (t[39] = m),
      (t[40] = _),
      (t[41] = x),
      (t[42] = v),
      (t[43] = y),
      (t[44] = b),
      (t[45] = f),
      (t[46] = k),
      (t[47] = a),
      (t[48] = W))
    : (W = t[48]);
  let G = W,
    K;
  return (
    t[49] !== H || t[50] !== B || t[51] !== te || t[52] !== G
      ? ((K = { annotations: te, annotationKeys: B, addDraftComment: H, renderCommentAnnotation: G }),
        (t[49] = H),
        (t[50] = B),
        (t[51] = te),
        (t[52] = G),
        (t[53] = K))
      : (K = t[53]),
    K
  );
}
function pr(e) {
  let [t, n] = e;
  return {
    side: n.side,
    lineNumber: n.lineNumber,
    metadata: {
      kind: `draft-comment`,
      key: t,
      path: n.path,
      localWorkspaceRoot: n.localWorkspaceRoot,
      startLine: n.startLine,
      startSide: n.startSide,
      localDiffHunk: n.localDiffHunk,
    },
  };
}
function mr(e) {
  let { attached: t, comment: n, source: r } = e;
  return {
    side: n.position.side === `left` ? `deletions` : `additions`,
    lineNumber: n.position.line,
    metadata: { kind: `comment`, attached: t, comment: n, source: r },
  };
}
function hr(e) {
  return { comment: e, source: `model` };
}
function gr({ instanceId: e, path: t, workspaceRoot: n, side: r, lineNumber: i }) {
  let a = o(t);
  return `${e}::${n == null ? `` : `${ee(n)}::`}${a}::${Qt(r, i)}`;
}
var _r, vr, yr;
function br() {
  return (br = e(() => {
    ((_r = q()), (vr = Y()), H(), le(), an(), kn(), h(), Mn(), or(), $t(), Et(), dr(), (yr = J()));
  }))();
}
export {
  cn as a,
  sn as c,
  Xt as d,
  $t as f,
  kn as i,
  Qt as l,
  Yt as m,
  fr as n,
  dn as o,
  Jt as p,
  _n as r,
  on as s,
  br as t,
  Zt as u,
};
//# sourceMappingURL=use-diff-annotations-1d5c03397aea.js.map
