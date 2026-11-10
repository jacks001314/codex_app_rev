import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  BY as i,
  CH as a,
  DB as o,
  EO as s,
  FBt as c,
  Fk as l,
  GS as u,
  HO as d,
  IO as f,
  Ik as p,
  JO as m,
  Jb as h,
  KO as g,
  LNt as _,
  LO as v,
  MNt as y,
  NNt as b,
  Nk as x,
  OB as S,
  Oz as C,
  PBt as w,
  Pk as T,
  QY as E,
  Qst as D,
  RO as O,
  TO as k,
  TY as A,
  Ty as j,
  UQ as M,
  Vrt as N,
  WO as P,
  WQ as F,
  WS as ee,
  XE as I,
  XO as L,
  XOt as R,
  Y3 as z,
  YO as te,
  Yb as B,
  Yst as ne,
  Z3 as V,
  ZE as re,
  ZSt as H,
  ZY as U,
  ck as W,
  g3 as ie,
  h3 as ae,
  iCt as oe,
  jgt as se,
  jz as ce,
  kgt as le,
  nB as ue,
  okt as de,
  qO as fe,
  qrt as pe,
  rB as G,
  rk as me,
  tk as he,
  tkt as K,
  wy as ge,
  yft as _e,
  zO as ve,
  zY as ye,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Bm as be,
  Cd as xe,
  Cjr as q,
  Cor as J,
  Dor as Se,
  Fet as Ce,
  Fm as Y,
  Gu as we,
  Gyt as Te,
  Hu as Ee,
  Hwn as De,
  Iet as Oe,
  Iwn as ke,
  KBr as Ae,
  LTt as je,
  Let as Me,
  Lm as Ne,
  MW as Pe,
  NNn as Fe,
  NW as Ie,
  Oor as Le,
  Own as Re,
  PNn as ze,
  QOr as Be,
  SRn as Ve,
  Sd as He,
  Tor as Ue,
  Uu as We,
  W3n as Ge,
  Wu as Ke,
  Wyt as qe,
  Xu as Je,
  Zu as Ye,
  _v as Xe,
  aa as Ze,
  ah as Qe,
  bRn as $e,
  bd as et,
  dNr as tt,
  dd as nt,
  eRn as rt,
  eTr as it,
  efr as at,
  emr as ot,
  fNr as st,
  fd as ct,
  fxr as lt,
  gxr as ut,
  ia as dt,
  ih as ft,
  imr as pt,
  jcn as mt,
  la as ht,
  lkr as gt,
  nTr as _t,
  nh as vt,
  nmr as yt,
  oa as bt,
  oon as xt,
  pd as St,
  rTr as Ct,
  rmr as wt,
  son as Tt,
  tEt as Et,
  tRn as Dt,
  vd as Ot,
  wcn as kt,
  wor as At,
  x0 as jt,
  xjr as Mt,
  xln as Nt,
  y0 as Pt,
  yd as Ft,
  yv as It,
  z3n as Lt,
} from "./app-initial-ad16eaadf81f.js";
import { $p as Rt, em as zt } from "./app-primary-3e00728c2a4c.js";
import { n as Bt, t as Vt } from "./file-diff-232655eefd3e.js";
import { i as Ht, n as Ut, r as Wt, t as Gt } from "./row-987fdaeb1266.js";
function Kt(e) {
  for (let t of e) {
    if (!(t instanceof HTMLElement)) continue;
    let e = t.getAttribute(`data-line`) ?? t.getAttribute(`data-column-number`);
    if (e == null) continue;
    let n = Number.parseInt(e, 10);
    if (!Number.isNaN(n)) return n;
  }
  return null;
}
function qt() {
  return (qt = e(() => {}))();
}
function Jt(e) {
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
function Yt(e) {
  switch (e.metadata.kind) {
    case `comment`:
      return { side: `additions`, lineNumber: e.lineNumber, metadata: e.metadata };
    case `draft-comment`:
      return { side: `additions`, lineNumber: e.lineNumber, metadata: e.metadata };
  }
}
var Xt;
function Zt() {
  return (Zt = e(() => {
    Xt = (e, t) => `${e}:${t}`;
  }))();
}
function Qt(e) {
  let t = (0, $t.c)(42),
    { className: n, defaultValue: r, onRemove: a, onSubmit: s } = e,
    c = de(),
    [u, d] = (0, en.useState)(r),
    f;
  t[0] === u ? (f = t[1]) : ((f = u.trim()), (t[0] = u), (t[1] = f));
  let p = f,
    m;
  t[2] === r ? (m = t[3]) : ((m = r.trim()), (t[2] = r), (t[3] = m));
  let h = p !== m,
    g;
  t[4] === c
    ? (g = t[5])
    : ((g = c.formatMessage({
        id: `pullRequest.commentGuidance.remove`,
        defaultMessage: `Remove`,
        description: `Accessible label for removing an attached pull request review comment`,
      })),
      (t[4] = c),
      (t[5] = g));
  let _ = g,
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
  let b = v,
    x;
  t[8] === n
    ? (x = t[9])
    : ((x = y(`flex w-full items-center gap-2 border-t border-default pt-2`, n)), (t[8] = n), (t[9] = x));
  let S;
  t[10] === r
    ? (S = t[11])
    : ((S = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), d(r));
      }),
      (t[10] = r),
      (t[11] = S));
  let C;
  t[12] !== h || t[13] !== s || t[14] !== p
    ? ((C = (e) => {
        (e.preventDefault(), h && s(p));
      }),
      (t[12] = h),
      (t[13] = s),
      (t[14] = p),
      (t[15] = C))
    : (C = t[15]);
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
        d(e.target.value);
      }),
      (t[20] = E))
    : (E = t[20]);
  let D;
  t[21] !== u || t[22] !== w || t[23] !== T
    ? ((D = (0, tn.jsx)(`input`, {
        "aria-label": w,
        autoComplete: `off`,
        className: `min-w-0 flex-1 bg-transparent text-base text-default outline-none placeholder:text-codex-description`,
        placeholder: T,
        value: u,
        onChange: E,
      })),
      (t[21] = u),
      (t[22] = w),
      (t[23] = T),
      (t[24] = D))
    : (D = t[24]);
  let O;
  t[25] !== a || t[26] !== _
    ? ((O =
        a == null
          ? null
          : (0, tn.jsx)(ue, {
              cloneCustomTrigger: !0,
              tooltipContent: _,
              children: (0, tn.jsx)(z, {
                "aria-label": _,
                color: `ghost`,
                size: `composerSm`,
                type: `button`,
                uniform: !0,
                onClick: a,
                children: (0, tn.jsx)(o, { "aria-hidden": !1, asset: i }),
              }),
            })),
      (t[25] = a),
      (t[26] = _),
      (t[27] = O))
    : (O = t[27]);
  let k = !h,
    A;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, tn.jsx)(l, { className: `icon-sm` })), (t[28] = A))
    : (A = t[28]);
  let j;
  t[29] !== b || t[30] !== k
    ? ((j = (0, tn.jsx)(z, {
        "aria-label": b,
        color: `primary`,
        disabled: k,
        size: `composer`,
        type: `submit`,
        uniform: !0,
        children: A,
      })),
      (t[29] = b),
      (t[30] = k),
      (t[31] = j))
    : (j = t[31]);
  let M;
  t[32] !== b || t[33] !== j
    ? ((M = (0, tn.jsx)(ue, { cloneCustomTrigger: !0, tooltipContent: b, children: j })),
      (t[32] = b),
      (t[33] = j),
      (t[34] = M))
    : (M = t[34]);
  let N;
  return (
    t[35] !== D || t[36] !== O || t[37] !== M || t[38] !== x || t[39] !== S || t[40] !== C
      ? ((N = (0, tn.jsxs)(`form`, { className: x, onKeyDown: S, onSubmit: C, children: [D, O, M] })),
        (t[35] = D),
        (t[36] = O),
        (t[37] = M),
        (t[38] = x),
        (t[39] = S),
        (t[40] = C),
        (t[41] = N))
      : (N = t[41]),
    N
  );
}
var $t, en, tn;
function nn() {
  return (nn = e(() => {
    (($t = w()), ye(), b(), (en = c()), R(), V(), S(), G(), p(), (tn = _()));
  }))();
}
function rn(e, t, n = `github.com`) {
  let r = e?.trim();
  return r == null || r.length === 0 || /\s/.test(r)
    ? null
    : `https://${n}/${encodeURIComponent(r)}.png?size=${t}`;
}
function an() {
  return (an = e(() => {}))();
}
function on(e) {
  let t = (0, sn.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, cn.jsx)(`span`, { className: `shrink-0`, children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
var sn, cn;
function ln() {
  return (ln = e(() => {
    ((sn = w()), (cn = _()));
  }))();
}
function un(e) {
  let t = (0, dn.c)(33),
    { actions: n, children: r, provider: i, reply: a } = e,
    o = i === void 0 ? `github` : i,
    s = de(),
    [c, l] = (0, fn.useState)(null),
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
      ? ((e = a.authorAvatarUrl ?? (o === `github` ? rn(a.authorLogin, 48) : null)),
        (t[8] = o),
        (t[9] = a.authorAvatarUrl),
        (t[10] = a.authorLogin),
        (t[11] = e))
      : (e = t[11]);
    let n = e,
      r = n != null && n !== c;
    ((d = `flex min-w-0 items-center gap-2.5 px-3 pt-1.5`),
      (f = r
        ? (0, pn.jsx)(on, {
            children: (0, pn.jsx)(`img`, {
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
        : (0, pn.jsx)(on, {
            children: (0, pn.jsx)(`span`, {
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
  let p;
  t[12] === u
    ? (p = t[13])
    : ((p = (0, pn.jsx)(`span`, {
        className: `min-w-0 truncate text-base leading-5 font-medium text-default`,
        children: u,
      })),
      (t[12] = u),
      (t[13] = p));
  let m;
  t[14] === a.createdAt
    ? (m = t[15])
    : ((m = a.createdAt
        ? (0, pn.jsx)(`span`, {
            className: `shrink-0 text-sm text-tertiary`,
            children: (0, pn.jsx)(Pt, { dateString: a.createdAt }),
          })
        : null),
      (t[14] = a.createdAt),
      (t[15] = m));
  let h;
  t[16] === n
    ? (h = t[17])
    : ((h = n == null ? null : (0, pn.jsx)(`div`, { className: `ms-auto`, children: n })),
      (t[16] = n),
      (t[17] = h));
  let g;
  t[18] !== d || t[19] !== f || t[20] !== p || t[21] !== m || t[22] !== h
    ? ((g = (0, pn.jsxs)(`div`, { className: d, children: [f, p, m, h] })),
      (t[18] = d),
      (t[19] = f),
      (t[20] = p),
      (t[21] = m),
      (t[22] = h),
      (t[23] = g))
    : (g = t[23]);
  let _;
  t[24] !== r || t[25] !== a.isDeleted || t[26] !== a.text
    ? ((_ = a.isDeleted
        ? (0, pn.jsx)(`span`, {
            className: `text-secondary`,
            children: (0, pn.jsx)(K, {
              id: `pullRequestDetail.comment.deleted`,
              defaultMessage: `Comment deleted`,
              description: `Placeholder for a deleted review comment whose replies remain visible`,
            }),
          })
        : (r ?? a.text)),
      (t[24] = r),
      (t[25] = a.isDeleted),
      (t[26] = a.text),
      (t[27] = _))
    : (_ = t[27]);
  let v;
  t[28] === _
    ? (v = t[29])
    : ((v = (0, pn.jsx)(`div`, {
        className: `ps-11.5 pe-3 pb-1.5 text-size-chat break-words text-default`,
        children: _,
      })),
      (t[28] = _),
      (t[29] = v));
  let y;
  return (
    t[30] !== g || t[31] !== v
      ? ((y = (0, pn.jsxs)(`div`, { children: [g, v] })), (t[30] = g), (t[31] = v), (t[32] = y))
      : (y = t[32]),
    y
  );
}
var dn, fn, pn;
function mn() {
  return (mn = e(() => {
    ((dn = w()), (fn = c()), R(), jt(), ln(), (pn = _()));
  }))();
}
function hn(e) {
  let t = (0, wn.c)(72),
    {
      authorLogin: n,
      authorAvatarUrl: r,
      avatarSize: i,
      body: a,
      bodyPreview: o,
      comment: s,
      className: c,
      createdAt: l,
      defaultCollapsed: u,
      isMinimized: d,
      diffHunk: f,
      diffHunkPosition: p,
      fileName: m,
      headerAccessory: h,
      metadataAccessory: g,
      onDelete: _,
      onDeleteReply: v,
      onEdit: b,
      onEditReply: S,
      onOpenFile: C,
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
    P = i === void 0 ? `default` : i,
    F = o !== void 0 && o,
    ee = u !== void 0 && u,
    I = d !== void 0 && d,
    L = D !== void 0 && D,
    R = O === void 0 ? `github` : O,
    te = k === void 0 ? [] : k,
    B = j !== void 0 && j,
    ne = M === void 0 ? `default` : M,
    V = de(),
    re = (0, En.useId)(),
    [H, U] = (0, En.useState)(I || ee),
    [W, ie] = (0, En.useState)(ee),
    [ae, oe] = (0, En.useState)(I),
    [se, ce] = (0, En.useState)(null);
  (ee !== W || I !== ae) && (ie(ee), oe(I), U((I || ee) && !L));
  let { authorLogin: le, text: fe } = s == null ? { authorLogin: null, text: a ?? `` } : At(s),
    pe = n ?? s?.authorLogin ?? le,
    G = a ?? fe,
    me =
      pe ??
      V.formatMessage({
        id: `pullRequestsPage.detail.commentUnknownAuthor`,
        defaultMessage: `Unknown author`,
        description: `Fallback author label for PR timeline comments on the detail page`,
      }),
    he = r ?? s?.authorAvatarUrl ?? (R === `github` && pe != null ? rn(pe, 48) : null),
    ge = he != null && he !== se,
    _e;
  t[0] !== V || t[1] !== R
    ? ((_e =
        R === `gitlab`
          ? V.formatMessage({
              id: `gitlabMergeRequest.discussions.openComment`,
              defaultMessage: `Open comment on GitLab`,
              description: `Accessible label for opening a merge request comment on GitLab`,
            })
          : V.formatMessage({
              id: `pullRequestsPage.detail.openCommentOnGitHub`,
              defaultMessage: `Open comment on GitHub`,
              description: `Accessible label for a link that opens a pull request comment on GitHub`,
            })),
      (t[0] = V),
      (t[1] = R),
      (t[2] = _e))
    : (_e = t[2]);
  let ve = _e,
    ye = V.formatMessage(
      {
        id: `pullRequestsPage.detail.commentAuthorAvatarAlt`,
        defaultMessage: `{author} avatar`,
        description: `Alt text for a pull request comment author's avatar on the detail page`,
      },
      { author: me },
    ),
    be = ge
      ? (0, X.jsx)(`img`, {
          alt: ye,
          className: y(`rounded-full bg-white object-cover`, P === `compact` ? `icon-xs` : `size-6`),
          src: he,
          onError: () => {
            ce(he);
          },
        })
      : (0, X.jsx)(`span`, {
          className: y(
            `flex items-center justify-center rounded-full bg-surface text-xs font-semibold text-default`,
            P === `compact` ? `icon-xs` : `size-6`,
          ),
          children: me.slice(0, 1).toUpperCase(),
        });
  if (F) {
    let e;
    t[3] === s
      ? (e = t[4])
      : ((e = s == null ? null : Tn.default.posix.basename(s.position.path)), (t[3] = s), (t[4] = e));
    let n = e,
      r = w != null || N != null,
      i;
    t[5] !== l || t[6] !== n || t[7] !== r
      ? ((i =
          n != null || l
            ? (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(`span`, {
                    className: y(`min-w-0 truncate text-tertiary`, r && `group-hover:text-default`),
                    children: n,
                  }),
                  l
                    ? (0, X.jsx)(`span`, {
                        className: y(`shrink-0 text-tertiary`, r && `group-hover:text-default`),
                        children: (0, X.jsx)(Pt, { dateString: l }),
                      })
                    : null,
                ],
              })
            : null),
        (t[5] = l),
        (t[6] = n),
        (t[7] = r),
        (t[8] = i))
      : (i = t[8]);
    let a = i,
      o = null;
    if (a != null) {
      if (w != null) {
        let e;
        t[9] === V
          ? (e = t[10])
          : ((e = V.formatMessage({
              id: `pullRequestsPage.detail.openCommentInReview`,
              defaultMessage: `Open comment in review`,
              description: `Accessible label for a button that opens a pull request comment in the app review view`,
            })),
            (t[9] = V),
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
        (t[17] !== ve || t[18] !== a || t[19] !== N
          ? ((e = (0, X.jsx)(`a`, {
              "aria-label": ve,
              className: `group flex min-w-0 cursor-interaction items-center justify-between gap-2 text-base`,
              href: N,
              rel: `noreferrer`,
              target: `_blank`,
              children: a,
            })),
            (t[17] = ve),
            (t[18] = a),
            (t[19] = N),
            (t[20] = e))
          : (e = t[20]),
          (o = e));
      }
    }
    let u = P === `compact` ? `gap-3.5` : `gap-2`,
      d;
    t[21] !== c || t[22] !== u
      ? ((d = y(`flex min-w-0 py-1`, u, c)), (t[21] = c), (t[22] = u), (t[23] = d))
      : (d = t[23]);
    let f = P === `compact` && `mt-1`,
      p;
    t[24] === f ? (p = t[25]) : ((p = y(`shrink-0`, f)), (t[24] = f), (t[25] = p));
    let m;
    t[26] !== be || t[27] !== p
      ? ((m = (0, X.jsx)(`span`, { className: p, children: be })), (t[26] = be), (t[27] = p), (t[28] = m))
      : (m = t[28]);
    let h;
    return (
      t[29] !== P || t[30] !== g || t[31] !== o
        ? ((h =
            o != null || g != null
              ? (0, X.jsxs)(`div`, {
                  className: `flex min-w-0 items-center justify-between gap-2`,
                  children: [
                    o,
                    g == null
                      ? null
                      : (0, X.jsx)(`span`, {
                          className: y(`inline-flex shrink-0`, P === `compact` && `-me-0.5`),
                          children: g,
                        }),
                  ],
                })
              : null),
          (t[29] = P),
          (t[30] = g),
          (t[31] = o),
          (t[32] = h))
        : (h = t[32]),
      (0, X.jsxs)(`div`, {
        className: d,
        children: [
          m,
          (0, X.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 flex-col gap-0.5`,
            children: [(0, X.jsx)(Sn, { body: G }), h],
          }),
        ],
      })
    );
  }
  let xe = [...(s == null || a != null || te.length > 0 ? [] : Ue(s).slice(1)).map(_n), ...te.map(gn)],
    q = E ?? s?.position,
    J = p ?? q,
    Se;
  t[33] !== q || t[34] !== B
    ? ((Se = B && q != null ? Cn(q) : null), (t[33] = q), (t[34] = B), (t[35] = Se))
    : (Se = t[35]);
  let Ce = Se,
    Y;
  t[36] !== f || t[37] !== q
    ? ((Y =
        f == null || q == null
          ? null
          : (Te(`diff --git a/${q.path} b/${q.path}\n--- a/${q.path}\n+++ b/${q.path}\n${f}\n`, {
              maxFiles: 1,
            })[0]?.metadata ?? null)),
      (t[36] = f),
      (t[37] = q),
      (t[38] = Y))
    : (Y = t[38]);
  let we = Y,
    Ee = pe != null || !!l,
    De;
  t[39] === be ? (De = t[40]) : ((De = (0, X.jsx)(on, { children: be })), (t[39] = be), (t[40] = De));
  let Oe = De,
    ke;
  t[41] !== m || t[42] !== V || t[43] !== H || t[44] !== C || t[45] !== U
    ? ((ke =
        m == null
          ? null
          : C == null && !H
            ? (0, X.jsx)(`span`, { className: `min-w-0 truncate text-sm leading-5`, children: m })
            : (0, X.jsx)(`button`, {
                className: y(
                  `min-w-0 cursor-interaction truncate text-sm leading-5 focus-visible:text-default`,
                  !H && `hover:text-default`,
                ),
                "aria-expanded": !H && void 0,
                "aria-label": H
                  ? void 0
                  : V.formatMessage(
                      {
                        id: `pullRequestsPage.detail.openFileInCode`,
                        defaultMessage: `Open {fileName} in Code`,
                        description: `Accessible label for a pull request comment file link that opens the file in the Code tab`,
                      },
                      { fileName: m },
                    ),
                type: `button`,
                onClick: H ? () => U(!1) : C,
                children: m,
              })),
      (t[41] = m),
      (t[42] = V),
      (t[43] = H),
      (t[44] = C),
      (t[45] = U),
      (t[46] = ke))
    : (ke = t[46]);
  let Ae = ke,
    je = null;
  H ||
    (je = (0, X.jsxs)(`div`, {
      className: `min-w-0`,
      children: [
        (0, X.jsx)(`div`, {
          className: `px-3 pt-1 pb-2`,
          children: (0, X.jsx)(Sn, {
            body: G,
            truncate: !L,
            children:
              A == null
                ? (0, X.jsx)(ht, {
                    textStyle: { kind: `small` },
                    allowBasicHtml: !0,
                    className: `[&_details]:mt-3 [&_details]:rounded-[14px] [&_details]:border [&_details]:border-border/16 [&_details]:bg-surface-secondary/40 [&_details]:px-3.5 [&_details]:py-3 [&_summary]:cursor-interaction [&_summary]:font-medium [&_summary]:text-default`,
                    cwd: null,
                    children: Ze(G),
                  })
                : A(G, !1),
          }),
        }),
        xe.length > 0 &&
          (0, X.jsx)(`div`, {
            className: `flex flex-col`,
            children: xe.map((e, t) => {
              let { replyData: n } = e;
              return (0, X.jsx)(
                un,
                {
                  provider: R,
                  actions:
                    n?.nodeId == null
                      ? null
                      : (0, X.jsx)(vn, {
                          onDelete: n.viewerCanDelete === !0 && v != null ? () => v(n) : void 0,
                          onEdit: n.viewerCanUpdate === !0 && S != null ? () => S(n) : void 0,
                        }),
                  reply: e,
                  children:
                    A == null
                      ? (0, X.jsx)(ht, { allowBasicHtml: !0, cwd: null, children: Ze(e.text) })
                      : A(e.text, !0, n),
                },
                n?.nodeId ?? n?.id ?? t,
              );
            }),
          }),
      ],
    }));
  let Me = H
      ? V.formatMessage(
          {
            id: `pullRequestsPage.detail.expandCommentByAuthor`,
            defaultMessage: `Expand comment by {author}`,
            description: `Accessible label for the button that expands a collapsed pull request comment and identifies its author`,
          },
          { author: me },
        )
      : V.formatMessage(
          {
            id: `pullRequestsPage.detail.collapseCommentByAuthor`,
            defaultMessage: `Collapse comment by {author}`,
            description: `Accessible label for the button that collapses an expanded pull request comment and identifies its author`,
          },
          { author: me },
        ),
    Ne;
  t[47] !== V || t[48] !== ve || t[49] !== R || t[50] !== N
    ? ((Ne =
        N == null
          ? null
          : (0, X.jsx)(ue, {
              delayDuration: 250,
              tooltipContent:
                R === `gitlab`
                  ? ve
                  : V.formatMessage({
                      id: `pullRequestsPage.detail.viewCommentOnGitHub`,
                      defaultMessage: `View comment on GitHub`,
                      description: `Tooltip for the external link that opens a pull request comment on GitHub`,
                    }),
              children: (0, X.jsx)(`a`, {
                "aria-label": ve,
                className: `inline-flex shrink-0 text-codex-description opacity-0 transition-colors group-focus-within/comment:opacity-100 group-hover/comment:opacity-100 hover:text-default`,
                href: N,
                rel: `noreferrer`,
                target: `_blank`,
                onClick: (e) => {
                  (e.stopPropagation(), Ve({ event: e, href: N, initiator: `pull_request_link` }));
                },
                children: (0, X.jsx)(rt, { href: N, className: `icon-xs` }),
              }),
            })),
      (t[47] = V),
      (t[48] = ve),
      (t[49] = R),
      (t[50] = N),
      (t[51] = Ne))
    : (Ne = t[51]);
  let Pe = Ne,
    Fe;
  t[52] !== H || t[53] !== L || t[54] !== U
    ? ((Fe = (e) => {
        (e.preventDefault(), e.stopPropagation());
        let t = !H;
        (t && L) || U(t);
      }),
      (t[52] = H),
      (t[53] = L),
      (t[54] = U),
      (t[55] = Fe))
    : (Fe = t[55]);
  let Ie = Fe,
    Le;
  t[56] === l
    ? (Le = t[57])
    : ((Le = l
        ? (0, X.jsx)(`span`, {
            className: `shrink-0 text-sm text-tertiary`,
            children: (0, X.jsx)(Pt, { dateString: l }),
          })
        : null),
      (t[56] = l),
      (t[57] = Le));
  let Re;
  t[58] !== b || t[59] !== U
    ? ((Re =
        b == null
          ? void 0
          : () => {
              (U(!1), b());
            }),
      (t[58] = b),
      (t[59] = U),
      (t[60] = Re))
    : (Re = t[60]);
  let ze;
  t[61] !== T || t[62] !== U
    ? ((ze =
        T == null
          ? void 0
          : () => {
              (U(!1), T());
            }),
      (t[61] = T),
      (t[62] = U),
      (t[63] = ze))
    : (ze = t[63]);
  let Be;
  t[64] !== _ || t[65] !== Re || t[66] !== ze
    ? ((Be = (0, X.jsx)(vn, { onDelete: _, onEdit: Re, onQuoteReply: ze })),
      (t[64] = _),
      (t[65] = Re),
      (t[66] = ze),
      (t[67] = Be))
    : (Be = t[67]);
  let He;
  t[68] !== Pe || t[69] !== Le || t[70] !== Be
    ? ((He = (0, X.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [Pe, Le, Be] })),
      (t[68] = Pe),
      (t[69] = Le),
      (t[70] = Be),
      (t[71] = He))
    : (He = t[71]);
  let We = He;
  return Ee
    ? (0, X.jsx)(Wt, {
        authorAvatar: Oe,
        authorLabel: (0, X.jsxs)(z, {
          className: `min-w-0 gap-1.5 text-start`,
          "aria-describedby": h != null || xe.length > 0 ? re : void 0,
          "aria-expanded": !H,
          "aria-label": Me,
          color: `ghostMuted`,
          focusRing: `inset`,
          onClick: Ie,
          size: `inline`,
          children: [
            (0, X.jsx)(`span`, { className: `truncate`, children: me }),
            h == null && xe.length === 0
              ? null
              : (0, X.jsxs)(`span`, {
                  id: re,
                  className: `inline-flex shrink-0 items-center gap-1.5 text-sm leading-5 font-normal text-codex-description`,
                  children: [
                    h == null ? null : (0, X.jsx)(`span`, { children: h }),
                    xe.length === 0
                      ? null
                      : (0, X.jsx)(`span`, {
                          className: `ps-1`,
                          children:
                            h == null
                              ? (0, X.jsx)(K, {
                                  id: `pullRequestsPage.detail.commentReplyCount`,
                                  defaultMessage: `{count, plural, one {# reply} other {# replies}}`,
                                  description: `Reply count shown after the author in a pull request comment header`,
                                  values: { count: xe.length },
                                })
                              : (0, X.jsx)(K, {
                                  id: `pullRequestsPage.detail.resolvedCommentReplyCount`,
                                  defaultMessage: `· {count, plural, one {# reply} other {# replies}}`,
                                  description: `Reply count with a dot separator shown after the resolved status in a pull request comment header`,
                                  values: { count: xe.length },
                                }),
                        }),
                  ],
                }),
            (0, X.jsx)(x, {
              "aria-hidden": !0,
              className: y(
                `icon-2xs shrink-0 text-tertiary opacity-0 transition-transform duration-basic group-focus-within/comment:opacity-100 group-hover/comment:opacity-100`,
                !H && `rotate-90`,
              ),
            }),
          ],
        }),
        body: je,
        className: c,
        footer: H ? null : g,
        headerAccessory: We,
        onHeaderClick: Ie,
        headerSuffix:
          Ae == null
            ? null
            : (0, X.jsx)(`div`, {
                className: y(
                  we == null || H
                    ? `flex min-w-0 items-center gap-2 ps-11.5 pe-3 text-tertiary`
                    : `mt-2 border-y border-default bg-surface`,
                  (we == null || H) && (H ? `pb-2.5` : `pb-1`),
                ),
                children:
                  we == null || H
                    ? (0, X.jsxs)(X.Fragment, {
                        children: [
                          Ae,
                          Ce == null || we != null
                            ? null
                            : (0, X.jsx)(`span`, { className: `shrink-0 text-sm leading-5`, children: Ce }),
                        ],
                      })
                    : (0, X.jsxs)(X.Fragment, {
                        children: [
                          (0, X.jsx)(`div`, {
                            className: `flex min-w-0 items-center py-2 ps-11.5 pe-3 text-tertiary`,
                            children: Ae,
                          }),
                          (0, X.jsx)(Vt, {
                            alignCommentGutter: !0,
                            fileDiff: we,
                            diffStyle: `unified`,
                            hunkSeparators: `simple`,
                            selectedLines:
                              J == null
                                ? void 0
                                : {
                                    start: J.start_line ?? J.line,
                                    end: J.line,
                                    side: J.side === `left` ? `deletions` : `additions`,
                                  },
                          }),
                        ],
                      }),
              }),
        surfaceVariant: ne,
      })
    : A == null
      ? (0, X.jsx)(ht, {
          textStyle: { kind: `small` },
          allowBasicHtml: !0,
          className: `[&_details]:mt-3 [&_details]:rounded-[14px] [&_details]:border [&_details]:border-border/16 [&_details]:bg-surface-secondary/40 [&_details]:px-3.5 [&_details]:py-3 [&_summary]:cursor-interaction [&_summary]:font-medium [&_summary]:text-default`,
          cwd: null,
          children: Ze(G),
        })
      : A(G, !1);
}
function gn(e) {
  return { ...e, replyData: e, text: e.body };
}
function _n(e) {
  return { ...e, replyData: void 0 };
}
function vn(e) {
  let t = (0, wn.c)(15),
    { onDelete: n, onEdit: r, onQuoteReply: i } = e,
    a = de();
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
  let s;
  t[2] === o ? (s = t[3]) : ((s = (0, X.jsx)(ge, { label: o, size: `xs` })), (t[2] = o), (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c =
        r == null
          ? null
          : (0, X.jsx)(me.Item, {
              leftIconAsset: F,
              onClick: xn,
              onSelect: r,
              children: (0, X.jsx)(K, {
                id: `pullRequestDetail.comment.edit`,
                defaultMessage: `Edit`,
                description: `Menu item to edit a pull request comment or review`,
              }),
            })),
      (t[4] = r),
      (t[5] = c));
  let l;
  t[6] === i
    ? (l = t[7])
    : ((l =
        i == null
          ? null
          : (0, X.jsx)(me.Item, {
              leftIconAsset: ae,
              onClick: bn,
              onSelect: i,
              children: (0, X.jsx)(K, {
                id: `pullRequestDetail.comment.quoteReply`,
                defaultMessage: `Quote reply`,
                description: `Menu item to reply to a pull request comment with its text quoted in Markdown`,
              }),
            })),
      (t[6] = i),
      (t[7] = l));
  let u;
  t[8] === n
    ? (u = t[9])
    : ((u =
        n == null
          ? null
          : (0, X.jsx)(me.Item, {
              leftIconAsset: E,
              tone: `danger`,
              onClick: yn,
              onSelect: n,
              children: (0, X.jsx)(K, {
                id: `pullRequestDetail.comment.delete`,
                defaultMessage: `Delete`,
                description: `Menu item to delete a pull request comment`,
              }),
            })),
      (t[8] = n),
      (t[9] = u));
  let d;
  return (
    t[10] !== s || t[11] !== c || t[12] !== l || t[13] !== u
      ? ((d = (0, X.jsxs)(he, { align: `end`, contentWidth: `xs`, triggerButton: s, children: [c, l, u] })),
        (t[10] = s),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
function yn(e) {
  return e.stopPropagation();
}
function bn(e) {
  return e.stopPropagation();
}
function xn(e) {
  return e.stopPropagation();
}
function Sn(e) {
  let t = (0, wn.c)(19),
    { body: n, children: r, truncate: i } = e,
    a = i === void 0 || i,
    o = r == null ? 3 : 6,
    s;
  t[0] !== n || t[1] !== o
    ? ((s = { text: n, collapsedLineCount: o, fallbackFontSizePx: 13 }), (t[0] = n), (t[1] = o), (t[2] = s))
    : (s = t[2]);
  let { setTextContentMeasurementRef: c, collapseState: l, handleToggleExpansion: u } = re(s),
    d = a && l === `collapsed` && (r == null ? `line-clamp-3` : `line-clamp-6`),
    f;
  t[3] === d ? (f = t[4]) : ((f = y(d)), (t[3] = d), (t[4] = f));
  let p;
  t[5] !== n || t[6] !== r
    ? ((p =
        r ??
        (0, X.jsx)(ht, {
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
          children: Ze(n),
        })),
      (t[5] = n),
      (t[6] = r),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== c || t[9] !== f || t[10] !== p
    ? ((m = (0, X.jsx)(`div`, { ref: c, className: f, children: p })),
      (t[8] = c),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] !== l || t[13] !== u || t[14] !== a
    ? ((h =
        !a || l === `uncollapsible`
          ? null
          : (0, X.jsxs)(`button`, {
              type: `button`,
              "aria-expanded": l === `expanded`,
              className: `mt-1.5 inline-flex cursor-interaction items-center gap-1 self-start text-base text-codex-description hover:text-default`,
              onClick: u,
              children: [
                (0, X.jsx)(`span`, {
                  children:
                    l === `expanded`
                      ? (0, X.jsx)(K, {
                          id: `pullRequestsPage.detail.commentShowLess`,
                          defaultMessage: `Show less`,
                          description: `Button label for collapsing a pull request comment preview`,
                        })
                      : (0, X.jsx)(K, {
                          id: `pullRequestsPage.detail.commentShowMore`,
                          defaultMessage: `Show more`,
                          description: `Button label for expanding a truncated pull request comment preview`,
                        }),
                }),
                (0, X.jsx)(k, { className: l === `expanded` ? `icon-2xs rotate-180` : `icon-2xs` }),
              ],
            })),
      (t[12] = l),
      (t[13] = u),
      (t[14] = a),
      (t[15] = h))
    : (h = t[15]);
  let g;
  return (
    t[16] !== m || t[17] !== h
      ? ((g = (0, X.jsxs)(X.Fragment, { children: [m, h] })), (t[16] = m), (t[17] = h), (t[18] = g))
      : (g = t[18]),
    g
  );
}
function Cn(e) {
  let t = e.line,
    n = e.side === `left` ? `L` : `R`,
    r = e.start_line ?? t,
    i = (e.start_side ?? e.side) === `left` ? `L` : `R`;
  return r === t && i === n
    ? (0, X.jsx)(K, {
        id: `pullRequestsPage.detail.line`,
        defaultMessage: `Line {side}{line}`,
        description: `Single-line location label shown beside a pull request comment file name`,
        values: { line: t, side: n },
      })
    : (0, X.jsx)(K, {
        id: `pullRequestsPage.detail.lines`,
        defaultMessage: `{startSide}{startLine}–{endSide}{endLine}`,
        description: `Line-range location label shown beside a pull request comment file name`,
        values: { endLine: t, endSide: n, startLine: r, startSide: i },
      });
}
var wn, Tn, En, X;
function Dn() {
  return (Dn = e(() => {
    ((wn = w()),
      ie(),
      M(),
      U(),
      b(),
      (Tn = t(_e(), 1)),
      (En = c()),
      R(),
      V(),
      W(),
      $e(),
      Dt(),
      jt(),
      j(),
      G(),
      I(),
      Ht(),
      Se(),
      Bt(),
      qe(),
      T(),
      s(),
      bt(),
      dt(),
      ln(),
      mn(),
      (X = _()));
  }))();
}
function On(e) {
  let t = (0, An.c)(25),
    {
      commentEditor: n,
      commentText: r,
      initialComment: i,
      isSubmitting: a,
      onCancel: o,
      onDelete: s,
      onSubmit: c,
      showButtons: l,
      stopDictationRef: u,
    } = e,
    d;
  t[0] !== a || t[1] !== s || t[2] !== l
    ? ((d =
        s == null
          ? null
          : (0, Z.jsx)(z, {
              color: l && !a ? `danger` : `ghost`,
              size: `compact`,
              onClick: s,
              children: (0, Z.jsx)(K, {
                id: `code.diffComment.delete`,
                defaultMessage: `Delete`,
                description: `Delete a comment`,
              }),
            })),
      (t[0] = a),
      (t[1] = s),
      (t[2] = l),
      (t[3] = d))
    : (d = t[3]);
  let f = d,
    p = l && !a ? f : null,
    m;
  t[4] !== r || t[5] !== f || t[6] !== i || t[7] !== a || t[8] !== o || t[9] !== c || t[10] !== l
    ? ((m = (e) => {
        let { dictationButton: t, isDictating: n, transcriptionAction: s } = e === void 0 ? {} : e,
          u = n !== void 0 && n,
          d = s === void 0 ? null : s;
        return l || a
          ? (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2`,
              children: [
                t,
                l && !a
                  ? (0, Z.jsx)(z, {
                      color: `ghost`,
                      size: `compact`,
                      onClick: o,
                      children: (0, Z.jsx)(K, {
                        id: `code.diffComment.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel a comment`,
                      }),
                    })
                  : null,
                (0, Z.jsx)(z, {
                  color: `primary`,
                  size: `compact`,
                  disabled: d != null || (!r && !u),
                  loading: a || d === `send`,
                  onClick: c,
                  children: i
                    ? (0, Z.jsx)(K, {
                        id: `code.diffComment.save`,
                        defaultMessage: `Save`,
                        description: `Save a comment`,
                      })
                    : (0, Z.jsx)(K, {
                        id: `code.diffComment.comment`,
                        defaultMessage: `Comment`,
                        description: `Comment on a code diff`,
                      }),
                }),
              ],
            })
          : f;
      }),
      (t[4] = r),
      (t[5] = f),
      (t[6] = i),
      (t[7] = a),
      (t[8] = o),
      (t[9] = c),
      (t[10] = l),
      (t[11] = m))
    : (m = t[11]);
  let h = m,
    g;
  t[12] === p ? (g = t[13]) : ((g = p ?? (0, Z.jsx)(`div`, {})), (t[12] = p), (t[13] = g));
  let _;
  t[14] === h ? (_ = t[15]) : ((_ = h()), (t[14] = h), (t[15] = _));
  let v;
  t[16] !== g || t[17] !== _
    ? ((v = (0, Z.jsxs)(`div`, {
        className: `flex w-full items-center justify-between gap-2`,
        children: [g, _],
      })),
      (t[16] = g),
      (t[17] = _),
      (t[18] = v))
    : (v = t[18]);
  let y = v;
  if (!l || a) return y;
  let b;
  return (
    t[19] !== n || t[20] !== p || t[21] !== c || t[22] !== h || t[23] !== u
      ? ((b = (0, Z.jsxs)(Z.Fragment, {
          children: [
            null,
            (0, Z.jsx)(Z.Fragment, {
              children: (0, Z.jsx)(kn, {
                commentEditor: n,
                leadingAction: p,
                onSubmit: c,
                stopDictationRef: u,
                renderTrailingActions: h,
              }),
            }),
          ],
        })),
        (t[19] = n),
        (t[20] = p),
        (t[21] = c),
        (t[22] = h),
        (t[23] = u),
        (t[24] = b))
      : (b = t[24]),
    b
  );
}
function kn(e) {
  let t = (0, An.c)(79),
    { commentEditor: r, leadingAction: i, onSubmit: o, stopDictationRef: s, renderTrailingActions: c } = e,
    l = n(D),
    u = de(),
    d = we() === !0,
    f = q(tt),
    p;
  t[0] !== r || t[1] !== o || t[2] !== s
    ? ((p = async (e, t) => {
        let n = await r.dictation.finish(e);
        n !== `cancelled` &&
          (n === `not-active` && r.insertDictationText(e), (s.current = null), t === `send` && o());
      }),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s),
      (t[3] = p))
    : (p = t[3]);
  let m = p,
    h;
  t[4] === r ? (h = t[5]) : ((h = () => r.getText()), (t[4] = r), (t[5] = h));
  let g, _, v;
  t[6] === r.dictation
    ? ((g = t[7]), (_ = t[8]), (v = t[9]))
    : ((g = () => r.dictation.start()),
      (_ = (e) => r.dictation.update(e)),
      (v = () => r.dictation.cancel()),
      (t[6] = r.dictation),
      (t[7] = g),
      (t[8] = _),
      (t[9] = v));
  let y, b;
  t[10] === m
    ? ((y = t[11]), (b = t[12]))
    : ((y = (e) => m(e, `insert`)), (b = (e) => m(e, `send`)), (t[10] = m), (t[11] = y), (t[12] = b));
  let x;
  t[13] !== u || t[14] !== l || t[15] !== s
    ? ((x = (e) => {
        ((s.current = null),
          l
            .get(pe)
            .danger(Ee(u, `start`, e).message, {
              errorAnalytics: { toastId: `codeDiffCommentFooter.onStartError.start` },
            }));
      }),
      (t[13] = u),
      (t[14] = l),
      (t[15] = s),
      (t[16] = x))
    : (x = t[16]);
  let S;
  t[17] !== r.dictation || t[18] !== u || t[19] !== l || t[20] !== s
    ? ((S = (e) => {
        ((s.current = null),
          r.dictation.cancel(),
          l
            .get(pe)
            .danger(Ee(u, `transcription`, e).message, {
              errorAnalytics: { toastId: `codeDiffCommentFooter.onTranscribeError.transcription` },
            }));
      }),
      (t[17] = r.dictation),
      (t[18] = u),
      (t[19] = l),
      (t[20] = s),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] !== u || t[23] !== l || t[24] !== s
    ? ((C = () => {
        ((s.current = null),
          l
            .get(pe)
            .danger(
              u.formatMessage({
                id: `composer.dictation.unsupported`,
                defaultMessage: `Dictation is not available on this device`,
                description: `Toast text shown when dictation is not supported on the current device`,
              }),
              { errorAnalytics: { toastId: `composer.dictation.unsupported` } },
            ));
      }),
      (t[22] = u),
      (t[23] = l),
      (t[24] = s),
      (t[25] = C))
    : (C = t[25]);
  let {
      canRetryDictation: w,
      isDictationStarting: T,
      isDictating: E,
      isMicrophoneBusy: O,
      isTranscribing: k,
      retryDictation: A,
      startDictation: j,
      stopDictation: M,
      transcriptionAction: N,
      waveformCanvasRef: P,
    } = Ye({
      productSurface: `work`,
      enabled: d,
      waveformVariant: f ? `dictation` : `scrolling`,
      getSurroundingText: h,
      onTranscriptStart: g,
      onTranscriptUpdate: _,
      onTranscriptCancel: v,
      onRecordingStarted: () => {
        ((s.current = F), r.focus());
      },
      onTranscriptInsert: y,
      onTranscriptSend: b,
      onStartError: x,
      onTranscribeError: S,
      onUnsupported: C,
    }),
    F = M,
    ee;
  t[26] !== E || t[27] !== k || t[28] !== F
    ? ((ee = () => (E || k ? F : null)), (t[26] = E), (t[27] = k), (t[28] = F), (t[29] = ee))
    : (ee = t[29]);
  let I;
  (t[30] !== E || t[31] !== k || t[32] !== F
    ? ((I = [E, k, F]), (t[30] = E), (t[31] = k), (t[32] = F), (t[33] = I))
    : (I = t[33]),
    (0, jn.useImperativeHandle)(s, ee, I));
  let L;
  t[34] === F
    ? (L = t[35])
    : ((L = () => () => {
        F(`abort`);
      }),
      (t[34] = F),
      (t[35] = L));
  let R;
  (t[36] === F ? (R = t[37]) : ((R = [F]), (t[36] = F), (t[37] = R)), (0, jn.useLayoutEffect)(L, R));
  let z;
  t[38] !== r || t[39] !== F || t[40] !== s
    ? ((z = (e) => {
        (e === `abort` && (s.current = null), r.focus(), F(e));
      }),
      (t[38] = r),
      (t[39] = F),
      (t[40] = s),
      (t[41] = z))
    : (z = t[41]);
  let te = z;
  if (!f && (E || k)) {
    let e;
    return (
      t[42] !== te || t[43] !== N || t[44] !== P
        ? ((e = (0, Z.jsx)(`div`, {
            className: `w-full`,
            children: (0, Z.jsx)(ct, {
              noBottomMargin: !0,
              noHorizontalPadding: !0,
              primaryIcon: a,
              stopDictation: te,
              transcriptionAction: N,
              waveformCanvasRef: P,
            }),
          })),
          (t[42] = te),
          (t[43] = N),
          (t[44] = P),
          (t[45] = e))
        : (e = t[45]),
      e
    );
  }
  let B;
  t[46] === i ? (B = t[47]) : ((B = i ?? (0, Z.jsx)(`div`, {})), (t[46] = i), (t[47] = B));
  let ne = f && E,
    V = d && !(f && N === `send`),
    re;
  t[48] !== r || t[49] !== O || t[50] !== A || t[51] !== F || t[52] !== s
    ? ((re = () => {
        if (O) return Promise.resolve();
        let e = (e) => {
          F(e);
        };
        return (
          (s.current = e),
          r.focus(),
          A().then(() => {
            s.current === e && (s.current = null);
          })
        );
      }),
      (t[48] = r),
      (t[49] = O),
      (t[50] = A),
      (t[51] = F),
      (t[52] = s),
      (t[53] = re))
    : (re = t[53]);
  let H = f ? P : void 0,
    U;
  t[54] !== O || t[55] !== o || t[56] !== j || t[57] !== F || t[58] !== s
    ? ((U = (e) => {
        if (O) return Promise.resolve();
        let t = (e) => {
          (F(`abort`), e === `send` && s.current === t && ((s.current = null), o()));
        };
        return (
          (s.current = t),
          j(e).then(() => {
            s.current === t && (s.current = null);
          })
        );
      }),
      (t[54] = O),
      (t[55] = o),
      (t[56] = j),
      (t[57] = F),
      (t[58] = s),
      (t[59] = U))
    : (U = t[59]);
  let W;
  t[60] !== w ||
  t[61] !== te ||
  t[62] !== T ||
  t[63] !== O ||
  t[64] !== k ||
  t[65] !== ne ||
  t[66] !== V ||
  t[67] !== re ||
  t[68] !== H ||
  t[69] !== U
    ? ((W = (0, Z.jsx)(nt, {
        canRetryDictation: w,
        disabled: O,
        isStarting: T,
        isDictating: ne,
        isTranscribing: k,
        isVisible: V,
        retryDictation: re,
        size: `compact`,
        waveformCanvasRef: H,
        stopDictation: te,
        startDictation: U,
      })),
      (t[60] = w),
      (t[61] = te),
      (t[62] = T),
      (t[63] = O),
      (t[64] = k),
      (t[65] = ne),
      (t[66] = V),
      (t[67] = re),
      (t[68] = H),
      (t[69] = U),
      (t[70] = W))
    : (W = t[70]);
  let ie;
  t[71] !== E || t[72] !== c || t[73] !== W || t[74] !== N
    ? ((ie = c({ isDictating: E, transcriptionAction: N, dictationButton: W })),
      (t[71] = E),
      (t[72] = c),
      (t[73] = W),
      (t[74] = N),
      (t[75] = ie))
    : (ie = t[75]);
  let ae;
  return (
    t[76] !== B || t[77] !== ie
      ? ((ae = (0, Z.jsxs)(`div`, {
          className: `flex w-full items-center justify-between gap-2`,
          children: [B, ie],
        })),
        (t[76] = B),
        (t[77] = ie),
        (t[78] = ae))
      : (ae = t[78]),
    ae
  );
}
var An, jn, Z;
function Mn() {
  return (Mn = e(() => {
    ((An = w()), H(), (jn = c()), R(), St(), Je(), Ke(), A(), N(), r(), st(), Mt(), We(), V(), (Z = _()));
  }))();
}
function Nn(e) {
  let t = (0, In.c)(14),
    { alt: n, fallbackName: r } = e,
    { accountId: i, authMethod: a, email: o, userId: s } = pt(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = { enabled: !0 }), (t[0] = c)) : (c = t[0]);
  let { data: l } = yt(c),
    { data: u } = mt(),
    d = i ?? l?.accountId ?? null,
    f = a === `chatgpt`,
    p = s ?? l?.userId ?? null,
    m;
  t[1] !== d || t[2] !== f || t[3] !== p
    ? ((m = { accountId: d, enabled: f, userId: p }), (t[1] = d), (t[2] = f), (t[3] = p), (t[4] = m))
    : (m = t[4]);
  let { data: h } = Et(m),
    g = u?.structure?.toLowerCase() === `personal`,
    _ = h?.imageUrl,
    v = g ? (u?.profile_picture_url ?? null) : null,
    y;
  t[5] !== _ || t[6] !== v
    ? ((y = (0, Ln.default)([_, v].filter(Pn))), (t[5] = _), (t[6] = v), (t[7] = y))
    : (y = t[7]);
  let b = y,
    x = h?.displayName ?? h?.username ?? (g ? u?.name : null) ?? o ?? l?.email ?? r,
    S = b[0] ?? `fallback`,
    C = s ?? l?.userId ?? void 0,
    w;
  return (
    t[8] !== n || t[9] !== b || t[10] !== x || t[11] !== C || t[12] !== S
      ? ((w = (0, zn.jsx)(Fn, { alt: n, colorKey: C, imageUrls: b, name: x }, S)),
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
function Pn(e) {
  return e != null;
}
function Fn(e) {
  let t = (0, In.c)(15),
    { alt: n, colorKey: r, imageUrls: i, name: a } = e,
    [o, s] = (0, Rn.useState)(!1),
    c = i[0] ?? null,
    { isError: l, src: u } = Me(c);
  if ((o || l) && i.length > 1) {
    let e;
    t[0] === i ? (e = t[1]) : ((e = i.slice(1)), (t[0] = i), (t[1] = e));
    let o = e,
      s;
    return (
      t[2] !== n || t[3] !== r || t[4] !== o || t[5] !== a
        ? ((s = (0, zn.jsx)(Fn, { alt: n, colorKey: r, imageUrls: o, name: a }, o[0])),
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
      ? ((p = (0, zn.jsx)(xt, { alt: n, colorKey: r, name: a, src: d, onImageError: f })),
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
var In, Ln, Rn, zn;
function Bn() {
  return (Bn = e(() => {
    ((In = w()), (Ln = t(at(), 1)), (Rn = c()), wt(), ot(), Ce(), kt(), Tt(), je(), (zn = _()));
  }))();
}
function Vn(e) {
  let t = (0, Hn.c)(20),
    { open: n, onConfirm: r, onOpenChange: i } = e,
    a;
  t[0] !== r || t[1] !== i
    ? ((a = (e) => {
        (e.preventDefault(), i(!1), r());
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Un.jsx)(fe, {
        className: `contents`,
        children: (0, Un.jsx)(K, {
          id: `code.diffComment.dismissConfirmation.title`,
          defaultMessage: `Dismiss this review comment?`,
          description: `Title for the confirmation dialog shown before hiding a model-authored review comment from a code diff`,
        }),
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Un.jsx)(ve, {
        children: (0, Un.jsx)(O, {
          title: s,
          subtitle: (0, Un.jsx)(g, {
            className: `contents`,
            children: (0, Un.jsx)(K, {
              id: `code.diffComment.dismissConfirmation.description`,
              defaultMessage: `The comment will be hidden from the diff but remain in the chat transcript`,
              description: `Explanation that dismissing a model-authored review comment hides it from the diff without deleting it from the chat transcript`,
            }),
          }),
        }),
      })),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === i ? (l = t[6]) : ((l = () => i(!1)), (t[5] = i), (t[6] = l));
  let u;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Un.jsx)(K, {
        id: `code.diffComment.dismissConfirmation.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button for keeping a model-authored review comment visible in a code diff`,
      })),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] === l
    ? (d = t[9])
    : ((d = (0, Un.jsx)(z, { color: `secondary`, type: `button`, onClick: l, children: u })),
      (t[8] = l),
      (t[9] = d));
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Un.jsx)(z, {
        color: `danger`,
        type: `submit`,
        children: (0, Un.jsx)(K, {
          id: `code.diffComment.dismissConfirmation.confirm`,
          defaultMessage: `Dismiss`,
          description: `Confirm button for hiding a model-authored review comment from a code diff`,
        }),
      })),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === d
    ? (m = t[12])
    : ((m = (0, Un.jsx)(ve, { children: (0, Un.jsxs)(v, { children: [d, p] }) })), (t[11] = d), (t[12] = m));
  let h;
  t[13] !== o || t[14] !== m
    ? ((h = (0, Un.jsxs)(f, { as: `form`, onSubmit: o, children: [c, m] })),
      (t[13] = o),
      (t[14] = m),
      (t[15] = h))
    : (h = t[15]);
  let _;
  return (
    t[16] !== i || t[17] !== n || t[18] !== h
      ? ((_ = (0, Un.jsx)(P, {
          open: n,
          onOpenChange: i,
          showDialogClose: !1,
          size: `compact`,
          children: h,
        })),
        (t[16] = i),
        (t[17] = n),
        (t[18] = h),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
var Hn, Un;
function Wn() {
  return (Wn = e(() => {
    ((Hn = w()), R(), V(), m(), d(), (Un = _()));
  }))();
}
function Gn(e) {
  let t = (0, $n.c)(141),
    {
      filePath: n,
      workspaceRoot: r,
      source: i,
      side: a,
      lineNumber: s,
      startLine: c,
      startSide: l,
      localDiffHunk: u,
      authorLabel: d,
      authorAvatarUrl: f,
      onSubmit: p,
      onDelete: m,
      onDismiss: h,
      onClose: g,
      initialComment: _,
      initialDraftText: v,
      onDraftTextChange: b,
      onUnsavedChange: x,
      isSubmitting: S,
    } = e,
    C = S !== void 0 && S,
    w = i === `model`,
    T = i === `user` && d == null,
    E;
  t[0] === _ ? (E = t[1]) : ((E = _ ? _t(_) : ``), (t[0] = _), (t[1] = E));
  let D = E,
    O = v ?? D,
    A = _?.position.start_line ?? c ?? s,
    j = _?.position.line ?? s,
    [M, N] = (0, Q.useState)(O),
    [P, F] = (0, Q.useState)(!_ && !w),
    [I, L] = (0, Q.useState)(!1),
    [R, B] = (0, Q.useState)(!1),
    ne = (0, Q.useRef)(null),
    V = (0, Q.useRef)(null),
    re = (0, Q.useRef)(null),
    H = (0, Q.useRef)(_ != null),
    U = de(),
    W =
      i === `model`
        ? U.formatMessage({
            id: `code.diffComment.modelCommentAuthor`,
            defaultMessage: `Codex`,
            description: `Author label shown for model-authored local diff comments`,
          })
        : (d ??
          U.formatMessage({
            id: `code.diffComment.currentUserAuthor`,
            defaultMessage: `You`,
            description: `Author label for the current user's local diff comments`,
          })),
    ie = Oe(i === `user` ? (f ?? null) : null),
    ae = T
      ? U.formatMessage({
          id: `code.diffComment.currentUserAvatarAlt`,
          defaultMessage: `Your avatar`,
          description: `Alt text for the current user's avatar on a local diff comment`,
        })
      : U.formatMessage(
          {
            id: `code.diffComment.authorAvatarAlt`,
            defaultMessage: `{author} avatar`,
            description: `Alt text for an author's avatar on a diff comment`,
          },
          { author: W },
        ),
    oe;
  if (i === `model`) {
    let e;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(o, { asset: ee })), (t[2] = e))
      : (e = t[2]);
    let n;
    (t[3] === ae
      ? (n = t[4])
      : ((n = (0, $.jsx)(`span`, {
          "aria-label": ae,
          className: `flex size-6 shrink-0 items-center justify-center rounded-full border border-border/20 bg-surface-secondary/60 text-default`,
          role: `img`,
          children: e,
        })),
        (t[3] = ae),
        (t[4] = n)),
      (oe = n));
  } else if (T) {
    let e;
    (t[5] !== ae || t[6] !== W
      ? ((e = (0, $.jsx)(Nn, { alt: ae, fallbackName: W })), (t[5] = ae), (t[6] = W), (t[7] = e))
      : (e = t[7]),
      (oe = e));
  } else {
    let e;
    (t[8] !== ae || t[9] !== ie || t[10] !== W
      ? ((e = (0, $.jsx)(`span`, {
          className: Pe.avatar,
          children: (0, $.jsx)(xt, { alt: ae, name: W, src: ie }),
        })),
        (t[8] = ae),
        (t[9] = ie),
        (t[10] = W),
        (t[11] = e))
      : (e = t[11]),
      (oe = e));
  }
  let se;
  t[12] !== U || t[13] !== I
    ? ((se = I
        ? U.formatMessage({
            id: `pullRequestsPage.detail.expandComment`,
            defaultMessage: `Expand`,
            description: `Accessible label for the button that expands a collapsed pull request comment`,
          })
        : U.formatMessage({
            id: `pullRequestsPage.detail.collapseComment`,
            defaultMessage: `Collapse`,
            description: `Accessible label for the button that collapses an expanded pull request comment`,
          })),
      (t[12] = U),
      (t[13] = I),
      (t[14] = se))
    : (se = t[14]);
  let ce = se,
    le;
  t[15] === U
    ? (le = t[16])
    : ((le = U.formatMessage({
        id: `code.diffComment.dismiss`,
        defaultMessage: `Dismiss comment`,
        description: `Accessible label for dismissing a model-authored comment from a code diff`,
      })),
      (t[15] = U),
      (t[16] = le));
  let fe = le,
    pe;
  t[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((pe = vt()), (t[17] = pe)) : (pe = t[17]);
  let G = pe,
    me;
  (t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = () => {
        G.view.isDestroyed || G.destroy();
      }),
      (t[18] = me))
    : (me = t[18]),
    ft(me, G));
  let he;
  t[19] !== _?.replyToReviewThreadId || t[20] !== w
    ? ((he = () => {
        if (!(ne.current == null || w || _?.replyToReviewThreadId != null))
          return De(document.body, (e) => {
            let t = V.current;
            e.defaultPrevented ||
              e.key !== `Escape` ||
              t == null ||
              (e.preventDefault(), e.stopPropagation(), (V.current = null), G.focus(), t(`abort`));
          });
      }),
      (t[19] = _?.replyToReviewThreadId),
      (t[20] = w),
      (t[21] = he))
    : (he = t[21]);
  let ge = _?.replyToReviewThreadId,
    _e;
  (t[22] !== w || t[23] !== ge ? ((_e = [G, ge, w]), (t[22] = w), (t[23] = ge), (t[24] = _e)) : (_e = t[24]),
    (0, Q.useEffect)(he, _e));
  let ve;
  t[25] === w
    ? (ve = t[26])
    : ((ve = (e) => {
        if (w) return;
        let t = e.target;
        t &&
          (t.closest(`.ProseMirror,button,input,select,a,[role='button']`) ||
            (e.preventDefault(), G.focus()));
      }),
      (t[25] = w),
      (t[26] = ve));
  let ye = ve,
    be,
    xe;
  (t[27] === O
    ? ((be = t[28]), (xe = t[29]))
    : ((be = () => {
        (G.getText() !== O && G.setPromptText(O), N(O));
      }),
      (xe = [G, O]),
      (t[27] = O),
      (t[28] = be),
      (t[29] = xe)),
    (0, Q.useEffect)(be, xe));
  let q;
  t[30] === b
    ? (q = t[31])
    : ((q = (e) => {
        (N(e), b?.(e));
      }),
      (t[30] = b),
      (t[31] = q));
  let J = q,
    Se,
    Ce;
  (t[32] === _
    ? ((Se = t[33]), (Ce = t[34]))
    : ((Se = () => {
        let e = _ != null;
        (!H.current && e && (F(!1), G.view.dom.blur()), (H.current = e));
      }),
      (Ce = [G, _]),
      (t[32] = _),
      (t[33] = Se),
      (t[34] = Ce)),
    (0, Q.useEffect)(Se, Ce));
  let Y;
  if (t[35] !== M || t[36] !== _ || t[37] !== D || t[38] !== w) {
    if (((Y = !1), !w)) {
      if (_) Y = M !== D;
      else {
        let e;
        (t[40] === M ? (e = t[41]) : ((e = M.trim()), (t[40] = M), (t[41] = e)), (Y = e.length > 0));
      }
    }
    ((t[35] = M), (t[36] = _), (t[37] = D), (t[38] = w), (t[39] = Y));
  } else Y = t[39];
  let we;
  t[42] !== Y || t[43] !== x
    ? ((we = () => {
        x && re.current !== Y && ((re.current = Y), x(Y));
      }),
      (t[42] = Y),
      (t[43] = x),
      (t[44] = we))
    : (we = t[44]);
  let Te;
  (t[45] !== Y || t[46] !== x ? ((Te = [Y, x]), (t[45] = Y), (t[46] = x), (t[47] = Te)) : (Te = t[47]),
    (0, Q.useEffect)(we, Te));
  let Ee;
  t[48] !== n ||
  t[49] !== _ ||
  t[50] !== C ||
  t[51] !== s ||
  t[52] !== u ||
  t[53] !== g ||
  t[54] !== p ||
  t[55] !== w ||
  t[56] !== a ||
  t[57] !== c ||
  t[58] !== l
    ? ((Ee = () => {
        if (w || C) return;
        if (V.current != null) {
          V.current(`send`);
          return;
        }
        let e = G.getText();
        if (!e) return;
        let t = _
          ? { ..._, content: [{ content_type: `text`, text: e }] }
          : {
              type: `comment`,
              content: [{ content_type: `text`, text: e }],
              position: {
                side: a === `deletions` ? `left` : `right`,
                path: n,
                line: s,
                ...(c != null && (c !== s || l !== a) ? { start_line: c } : {}),
                ...(l != null && l !== a ? { start_side: l === `deletions` ? `left` : `right` } : {}),
              },
              localDiffHunk: u,
            };
        (p(t), F(!1), G.view.dom.blur(), g?.(), Re());
      }),
      (t[48] = n),
      (t[49] = _),
      (t[50] = C),
      (t[51] = s),
      (t[52] = u),
      (t[53] = g),
      (t[54] = p),
      (t[55] = w),
      (t[56] = a),
      (t[57] = c),
      (t[58] = l),
      (t[59] = Ee))
    : (Ee = t[59]);
  let ke = Ee,
    Ae;
  t[60] === m
    ? (Ae = t[61])
    : ((Ae = () => {
        (m?.(), Re());
      }),
      (t[60] = m),
      (t[61] = Ae));
  let je = Ae,
    Me;
  t[62] !== _ || t[63] !== D || t[64] !== g || t[65] !== b
    ? ((Me = () => {
        (g?.(), F(!1), _ && (N(D), G.setPromptText(D), b?.(D)));
      }),
      (t[62] = _),
      (t[63] = D),
      (t[64] = g),
      (t[65] = b),
      (t[66] = Me))
    : (Me = t[66]);
  let Ne = Me;
  if (!w && _?.replyToReviewThreadId != null) {
    let e = oe,
      n;
    t[67] === M ? (n = t[68]) : ((n = M.trim()), (t[67] = M), (t[68] = n));
    let i = !n,
      a;
    t[69] === U
      ? (a = t[70])
      : ((a = U.formatMessage({
          id: `code.diffComment.reply.submit`,
          defaultMessage: `Post reply`,
          description: `Accessible label for posting a pull request reply`,
        })),
        (t[69] = U),
        (t[70] = a));
    let o;
    t[71] === U
      ? (o = t[72])
      : ((o = U.formatMessage({
          id: `code.diffComment.reply.placeholder`,
          defaultMessage: `Reply…`,
          description: `Placeholder for a pull request review reply`,
        })),
        (t[71] = U),
        (t[72] = o));
    let s;
    t[73] !== M ||
    t[74] !== ke ||
    t[75] !== J ||
    t[76] !== _ ||
    t[77] !== D ||
    t[78] !== g ||
    t[79] !== o ||
    t[80] !== r
      ? ((s = (0, $.jsx)(Xn, {
          commentEditor: G,
          commentText: M,
          disableAutoFocus: !1,
          initialComment: _,
          initialCommentText: D,
          workspaceRoot: r,
          containerRef: ne,
          onTextChange: J,
          onEscape: g,
          onSubmit: ke,
          placeholder: o,
        })),
        (t[73] = M),
        (t[74] = ke),
        (t[75] = J),
        (t[76] = _),
        (t[77] = D),
        (t[78] = g),
        (t[79] = o),
        (t[80] = r),
        (t[81] = s))
      : (s = t[81]);
    let c;
    return (
      t[82] !== oe || t[83] !== ke || t[84] !== C || t[85] !== i || t[86] !== a || t[87] !== s
        ? ((c = (0, $.jsx)(`div`, {
            ref: ne,
            className: `w-full max-w-3xl min-w-0 px-1.5 pb-1.5 font-sans`,
            children: (0, $.jsx)(`div`, {
              className: `min-w-0 rounded-lg border border-border/24 bg-surface-secondary/92 focus-within:border-text-secondary`,
              children: (0, $.jsx)(Gt, {
                authorAvatar: e,
                disabled: i,
                loading: C,
                submitLabel: a,
                submitType: `button`,
                onSubmit: ke,
                children: s,
              }),
            }),
          })),
          (t[82] = oe),
          (t[83] = ke),
          (t[84] = C),
          (t[85] = i),
          (t[86] = a),
          (t[87] = s),
          (t[88] = c))
        : (c = t[88]),
      c
    );
  }
  let Fe;
  t[89] !== M ||
  t[90] !== ke ||
  t[91] !== J ||
  t[92] !== _ ||
  t[93] !== D ||
  t[94] !== U ||
  t[95] !== I ||
  t[96] !== g ||
  t[97] !== w ||
  t[98] !== r
    ? ((Fe = I
        ? null
        : (0, $.jsx)(`div`, {
            className: `flex flex-col gap-2 p-3`,
            children: w
              ? (0, $.jsx)(qn, {
                  commentEditor: G,
                  placeholder: U.formatMessage({
                    id: `code.diff.requestChange`,
                    defaultMessage: `Add a comment…`,
                    description: `Placeholder for code diff request change`,
                  }),
                })
              : (0, $.jsx)(Xn, {
                  commentEditor: G,
                  commentText: M,
                  initialComment: _,
                  initialCommentText: D,
                  workspaceRoot: r,
                  containerRef: ne,
                  onTextChange: J,
                  onEscape: g,
                  onSubmit: ke,
                  onShowButtons: () => {
                    F(!0);
                  },
                  onHideButtons: () => {
                    V.current ?? F(!1);
                  },
                  placeholder: U.formatMessage({
                    id: `code.diff.requestChange`,
                    defaultMessage: `Add a comment…`,
                    description: `Placeholder for code diff request change`,
                  }),
                }),
          })),
      (t[89] = M),
      (t[90] = ke),
      (t[91] = J),
      (t[92] = _),
      (t[93] = D),
      (t[94] = U),
      (t[95] = I),
      (t[96] = g),
      (t[97] = w),
      (t[98] = r),
      (t[99] = Fe))
    : (Fe = t[99]);
  let Ie;
  t[100] !== M ||
  t[101] !== Ne ||
  t[102] !== je ||
  t[103] !== ke ||
  t[104] !== _ ||
  t[105] !== I ||
  t[106] !== C ||
  t[107] !== m ||
  t[108] !== w ||
  t[109] !== P
    ? ((Ie =
        !w && (P || C || m != null)
          ? (0, $.jsx)(On, {
              stopDictationRef: V,
              commentEditor: G,
              commentText: M,
              initialComment: _,
              isSubmitting: C,
              onCancel: Ne,
              onDelete: m == null ? void 0 : je,
              onSubmit: ke,
              showButtons: P && !I,
            })
          : null),
      (t[100] = M),
      (t[101] = Ne),
      (t[102] = je),
      (t[103] = ke),
      (t[104] = _),
      (t[105] = I),
      (t[106] = C),
      (t[107] = m),
      (t[108] = w),
      (t[109] = P),
      (t[110] = Ie))
    : (Ie = t[110]);
  let Le;
  t[111] !== T || t[112] !== j || t[113] !== A || t[114] !== a
    ? ((Le = (0, $.jsx)(`div`, {
        className: `text-xs leading-4 text-codex-description`,
        children:
          A === j
            ? (0, $.jsx)(K, {
                id: `code.diffComment.lineBySource`,
                defaultMessage: `{source, select, local {Local comment on line {line}} other {Comment on line {line}}}`,
                description: `Line label for a diff comment. Local identifies the current user's local comment; other identifies a Codex finding or GitHub review comment.`,
                values: { source: T ? `local` : `review`, line: `${a === `deletions` ? `L` : `R`}${j}` },
              })
            : (0, $.jsx)(K, {
                id: `code.diffComment.lineRangeBySource`,
                defaultMessage: `{source, select, local {Local comment on lines {startLine} to {endLine}} other {Comment on lines {startLine} to {endLine}}}`,
                description: `Line-range label for a diff comment. Local identifies the current user's local comment; other identifies a Codex finding or GitHub review comment.`,
                values: {
                  source: T ? `local` : `review`,
                  endLine: `${a === `deletions` ? `L` : `R`}${j}`,
                  startLine: `${a === `deletions` ? `L` : `R`}${A}`,
                },
              }),
      })),
      (t[111] = T),
      (t[112] = j),
      (t[113] = A),
      (t[114] = a),
      (t[115] = Le))
    : (Le = t[115]);
  let ze;
  t[116] !== fe || t[117] !== h || t[118] !== w
    ? ((ze =
        w && h != null
          ? (0, $.jsx)(ue, {
              delayDuration: 250,
              tooltipContent: fe,
              children: (0, $.jsx)(z, {
                "aria-label": fe,
                color: `ghost`,
                size: `composerSm`,
                uniform: !0,
                onClick: (e) => {
                  (e.preventDefault(), e.stopPropagation(), B(!0));
                },
                children: (0, $.jsx)(te, { className: `icon-2xs` }),
              }),
            })
          : null),
      (t[116] = fe),
      (t[117] = h),
      (t[118] = w),
      (t[119] = ze))
    : (ze = t[119]);
  let Be;
  t[120] !== ce || t[121] !== I || t[122] !== w
    ? ((Be = w
        ? (0, $.jsx)(ue, {
            delayDuration: 250,
            tooltipContent: ce,
            children: (0, $.jsx)(z, {
              "aria-expanded": !I,
              "aria-label": ce,
              color: `ghost`,
              size: `composerSm`,
              uniform: !0,
              onClick: (e) => {
                (e.preventDefault(), e.stopPropagation(), L(Kn));
              },
              children: (0, $.jsx)(k, {
                className: y(`icon-2xs transition-transform duration-basic`, !I && `rotate-180`),
              }),
            }),
          })
        : null),
      (t[120] = ce),
      (t[121] = I),
      (t[122] = w),
      (t[123] = Be))
    : (Be = t[123]);
  let Ve;
  t[124] !== Le || t[125] !== ze || t[126] !== Be
    ? ((Ve = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [Le, ze, Be] })),
      (t[124] = Le),
      (t[125] = ze),
      (t[126] = Be),
      (t[127] = Ve))
    : (Ve = t[127]);
  let He;
  t[128] !== oe || t[129] !== W || t[130] !== ye || t[131] !== Fe || t[132] !== Ie || t[133] !== Ve
    ? ((He = (0, $.jsx)(Wt, {
        authorAvatar: oe,
        authorLabel: W,
        body: Fe,
        className: `composer-surface-chrome`,
        footer: Ie,
        headerAccessory: Ve,
        onPointerDownCapture: ye,
      })),
      (t[128] = oe),
      (t[129] = W),
      (t[130] = ye),
      (t[131] = Fe),
      (t[132] = Ie),
      (t[133] = Ve),
      (t[134] = He))
    : (He = t[134]);
  let Ue;
  t[135] !== R || t[136] !== h
    ? ((Ue = h == null ? null : (0, $.jsx)(Vn, { open: R, onConfirm: h, onOpenChange: B })),
      (t[135] = R),
      (t[136] = h),
      (t[137] = Ue))
    : (Ue = t[137]);
  let We;
  return (
    t[138] !== He || t[139] !== Ue
      ? ((We = (0, $.jsxs)(`div`, {
          ref: ne,
          className: `w-full max-w-3xl min-w-0 gap-2 p-1.5 font-sans`,
          children: [He, Ue],
        })),
        (t[138] = He),
        (t[139] = Ue),
        (t[140] = We))
      : (We = t[140]),
    We
  );
}
function Kn(e) {
  return !e;
}
function qn(e) {
  let t = (0, $n.c)(7),
    { commentEditor: n, placeholder: r } = e,
    i;
  t[0] === n.view
    ? (i = t[1])
    : ((i = () => {
        n.view.isDestroyed || n.view.setProps({ editable: Yn });
      }),
      (t[0] = n.view),
      (t[1] = i));
  let a;
  (t[2] === n ? (a = t[3]) : ((a = [n]), (t[2] = n), (t[3] = a)), (0, Q.useEffect)(i, a));
  let o;
  return (
    t[4] !== n || t[5] !== r
      ? ((o = (0, $.jsx)(Qe, {
          className: er,
          composerController: n,
          disableAutoFocus: !0,
          minHeight: `0`,
          placeholder: r,
          onSubmit: Jn,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Jn() {}
function Yn() {
  return !1;
}
function Xn(e) {
  let t = (0, $n.c)(58),
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
    g = (0, Q.useRef)(null),
    _ = Qn(s),
    v = Ft(n),
    y = Ne(n),
    b = v.ui?.active ?? !1,
    x;
  t[0] === b ? (x = t[1]) : ((x = { anchorRef: g, isActive: b }), (t[0] = b), (t[1] = x));
  let S = zt(x),
    C = y.ui?.active ?? !1,
    w;
  t[2] === C ? (w = t[3]) : ((w = { anchorRef: g, isActive: C }), (t[2] = C), (t[3] = w));
  let T = zt(w),
    E;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((E = { hostId: ne }), (t[4] = E)) : (E = t[4]);
  let D = Ge(E),
    { skills: O } = ze(_),
    k,
    A;
  (t[5] !== n || t[6] !== l
    ? ((k = () =>
        Nt(n.view, (e) => {
          e && l(n.getText());
        })),
      (A = [n, l]),
      (t[5] = n),
      (t[6] = l),
      (t[7] = k),
      (t[8] = A))
    : ((k = t[7]), (A = t[8])),
    (0, Q.useEffect)(k, A));
  let j, M;
  (t[9] !== D || t[10] !== O || t[11] !== n
    ? ((j = () => {
        n.syncMentionMetadata({ skills: O, apps: D });
      }),
      (M = [D, O, n]),
      (t[9] = D),
      (t[10] = O),
      (t[11] = n),
      (t[12] = j),
      (t[13] = M))
    : ((j = t[12]), (M = t[13])),
    (0, Q.useEffect)(j, M));
  let N;
  t[14] !== n.view.dom || t[15] !== u
    ? ((N = () => {
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
      (t[16] = N))
    : (N = t[16]);
  let P;
  (t[17] !== n || t[18] !== u ? ((P = [n, u]), (t[17] = n), (t[18] = u), (t[19] = P)) : (P = t[19]),
    (0, Q.useEffect)(N, P));
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
  let ee = v.ui?.active ?? !1,
    I = v.ui?.query ?? ``,
    L = v.ui?.source ?? null,
    R;
  t[26] !== v.addMention ||
  t[27] !== v.closeAutocomplete ||
  t[28] !== v.setSelectedMention ||
  t[29] !== _ ||
  t[30] !== I ||
  t[31] !== L
    ? ((R = (0, $.jsx)(xe, {
        hostId: ne,
        onAddContext: v.addMention,
        onRequestClose: v.closeAutocomplete,
        onUpdateSelectedMention: v.setSelectedMention,
        query: I,
        fileSearchRootPaths: _,
        skillRoots: _,
        source: L,
      })),
      (t[26] = v.addMention),
      (t[27] = v.closeAutocomplete),
      (t[28] = v.setSelectedMention),
      (t[29] = _),
      (t[30] = I),
      (t[31] = L),
      (t[32] = R))
    : (R = t[32]);
  let z;
  t[33] !== S || t[34] !== n || t[35] !== v.ui || t[36] !== ee || t[37] !== R
    ? ((z = (0, $.jsx)(h, {
        anchorRef: g,
        composerController: n,
        isActive: ee,
        mentionUiState: v.ui,
        placement: S,
        children: R,
      })),
      (t[33] = S),
      (t[34] = n),
      (t[35] = v.ui),
      (t[36] = ee),
      (t[37] = R),
      (t[38] = z))
    : (z = t[38]);
  let te;
  t[39] !== _ || t[40] !== y || t[41] !== T
    ? ((te = (0, $.jsx)(be, {
        autocomplete: y,
        roots: _,
        anchorRef: g,
        placement: T,
        zIndexClassName: `z-[60]`,
      })),
      (t[39] = _),
      (t[40] = y),
      (t[41] = T),
      (t[42] = te))
    : (te = t[42]);
  let B = i ?? !!a,
    V;
  t[43] !== v.handleMentionEvent || t[44] !== y.handleMentionEvent
    ? ((V = (e) => {
        et(e, { onAtMention: v.handleMentionEvent, onSkillMention: y.handleMentionEvent });
      }),
      (t[43] = v.handleMentionEvent),
      (t[44] = y.handleMentionEvent),
      (t[45] = V))
    : (V = t[45]);
  let re;
  t[46] !== n || t[47] !== d || t[48] !== m || t[49] !== B || t[50] !== V
    ? ((re = (0, $.jsx)(Qe, {
        className: er,
        composerController: n,
        disableAutoFocus: B,
        minHeight: `0`,
        placeholder: m,
        onSuggestionHandler: V,
        onSubmit: d,
      })),
      (t[46] = n),
      (t[47] = d),
      (t[48] = m),
      (t[49] = B),
      (t[50] = V),
      (t[51] = re))
    : (re = t[51]);
  let H;
  return (
    t[52] !== f || t[53] !== F || t[54] !== z || t[55] !== te || t[56] !== re
      ? ((H = (0, $.jsxs)(`div`, {
          ref: g,
          className: `relative`,
          onContextMenu: Zn,
          onFocus: f,
          onBlur: F,
          children: [z, te, re],
        })),
        (t[52] = f),
        (t[53] = F),
        (t[54] = z),
        (t[55] = te),
        (t[56] = re),
        (t[57] = H))
      : (H = t[57]),
    H
  );
}
function Zn(e) {
  e.stopPropagation();
}
function Qn(e) {
  let t = (0, $n.c)(2),
    { data: n } = oe(ut);
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
var $n, Q, $, er;
function tr() {
  return (tr = e(() => {
    (($n = w()),
      u(),
      b(),
      H(),
      Ct(),
      (Q = c()),
      R(),
      Lt(),
      Ce(),
      Ut(),
      B(),
      He(),
      ke(),
      Ot(),
      Rt(),
      S(),
      Y(),
      lt(),
      Ae(),
      Fe(),
      Tt(),
      V(),
      G(),
      s(),
      L(),
      Mn(),
      Bn(),
      Ht(),
      Wn(),
      Ie(),
      ($ = _()),
      (er = y(
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
function nr(e) {
  let t = (0, ir.c)(10),
    { comment: r, cwd: i, lineNumber: a, onSelectionClear: o, side: s } = e,
    c = n(Be),
    l;
  t[0] !== r || t[1] !== o || t[2] !== c
    ? ((l = () => {
        (o?.(), Xe(c, r));
      }),
      (t[0] = r),
      (t[1] = o),
      (t[2] = c),
      (t[3] = l))
    : (l = t[3]);
  let u = i ?? void 0,
    d;
  return (
    t[4] !== r || t[5] !== a || t[6] !== s || t[7] !== l || t[8] !== u
      ? ((d = (0, ar.jsx)(Gn, {
          filePath: r.position.path,
          initialComment: r,
          lineNumber: a,
          onDismiss: l,
          onSubmit: rr,
          side: s,
          source: `model`,
          workspaceRoot: u,
        })),
        (t[4] = r),
        (t[5] = a),
        (t[6] = s),
        (t[7] = l),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
function rr() {}
var ir, ar;
function or() {
  return (or = e(() => {
    ((ir = w()), H(), gt(), tr(), It(), (ar = _()));
  }))();
}
function sr(e) {
  let t = (0, fr.c)(51),
    {
      cwd: n,
      diffPath: r,
      workspaceRoot: i,
      enableComments: a,
      allowCommentDrafts: o,
      comments: s,
      modelComments: c,
      readonlyComments: l,
      submittingCommentKeys: u,
      onCommentsChange: d,
      commentAuthorLabel: f,
      commentAuthorAvatarUrl: p,
      onReadonlyCommentReply: m,
      renderReadonlyComment: h,
      renderReadonlyCommentActions: g,
      renderReadonlyCommentBody: _,
      onSelectionClear: v,
      conversationId: y,
    } = e,
    b = o === void 0 ? a : o,
    x = (0, pr.useId)(),
    S;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = new Map()), (t[0] = S)) : (S = t[0]);
  let C = (0, pr.useRef)(S),
    w,
    T;
  (t[1] === y
    ? ((w = t[2]), (T = t[3]))
    : ((w = () => {
        if (!y) return;
        let e = C.current;
        return () => {
          e.clear();
        };
      }),
      (T = [y]),
      (t[1] = y),
      (t[2] = w),
      (t[3] = T)),
    (0, pr.useEffect)(w, T));
  let E;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((E = {}), (t[4] = E)) : (E = t[4]);
  let [D, O] = (0, pr.useState)(E),
    k;
  if (t[5] !== s || t[6] !== n || t[7] !== r || t[8] !== a || t[9] !== c || t[10] !== l || t[11] !== i) {
    bb0: {
      if (!a) {
        let e;
        (t[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[13] = e)) : (e = t[13]), (k = e));
        break bb0;
      }
      let e = (e) => e.localWorkspaceRoot == null || i == null || le(e.localWorkspaceRoot, i),
        o = (s ?? []).filter(e),
        u = new Set(o.map((e) => J(e, i))),
        d = new Set(
          (l ?? []).flatMap((e) => {
            let t = J(e, i);
            return i == null ? [t] : [t, J({ ...e, localWorkspaceRoot: i }, i)];
          }),
        ),
        f = o.flatMap((e) => (d.has(J(e, i)) ? [] : [{ comment: e, source: `user` }])),
        p = (l ?? []).map((e) => ({
          attached: u.has(J(e, i)) || (i != null && u.has(J({ ...e, localWorkspaceRoot: i }, i))),
          comment: e,
          source: `readonly`,
        })),
        m = (c ?? []).filter(e).map(ur),
        h = [...f, ...p, ...m];
      if (h.length === 0) {
        let e;
        (t[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[14] = e)) : (e = t[14]), (k = e));
        break bb0;
      }
      k = h
        .filter((e) => {
          let { comment: t } = e;
          return Le(t.position.path, r, n ?? void 0);
        })
        .map(lr);
    }
    ((t[5] = s), (t[6] = n), (t[7] = r), (t[8] = a), (t[9] = c), (t[10] = l), (t[11] = i), (t[12] = k));
  } else k = t[12];
  let A = k,
    j;
  bb1: {
    if (!b) {
      let e;
      (t[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[15] = e)) : (e = t[15]), (j = e));
      break bb1;
    }
    let e;
    (t[16] !== D || t[17] !== i
      ? ((e = Object.entries(D)
          .filter((e) => {
            let [, t] = e;
            return t.localWorkspaceRoot == null ? i == null : i != null && le(t.localWorkspaceRoot, i);
          })
          .map(cr)),
        (t[16] = D),
        (t[17] = i),
        (t[18] = e))
      : (e = t[18]),
      (j = e));
  }
  let M = j,
    N;
  bb2: {
    if (!a) {
      let e;
      (t[19] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[19] = e)) : (e = t[19]), (N = e));
      break bb2;
    }
    let e;
    (t[20] !== A || t[21] !== M ? ((e = [...A, ...M]), (t[20] = A), (t[21] = M), (t[22] = e)) : (e = t[22]),
      (N = e));
  }
  let P = N,
    F;
  if (t[23] !== A || t[24] !== M) {
    F = new Set();
    for (let e of A)
      (e.metadata?.kind !== `comment` || e.metadata.source !== `readonly`) && F.add(Xt(e.side, e.lineNumber));
    for (let e of M) F.add(Xt(e.side, e.lineNumber));
    ((t[23] = A), (t[24] = M), (t[25] = F));
  } else F = t[25];
  let ee = F,
    I;
  t[26] !== b || t[27] !== r || t[28] !== i
    ? ((I = (e) => {
        let { lineNumber: t, side: n, startLine: a, startSide: o, localDiffHunk: s } = e;
        if (!b) return;
        let c = Xt(n, t),
          l = i == null ? c : `${se(i)}::${c}`;
        O((e) => {
          if (e[l]) return e;
          let c = ce(r);
          return {
            ...e,
            [l]: {
              side: n,
              lineNumber: t,
              path: c,
              localWorkspaceRoot: i,
              ...(a != null && (a !== t || o !== n) ? { startLine: a } : {}),
              ...(o != null && o !== n ? { startSide: o } : {}),
              localDiffHunk: s,
            },
          };
        });
      }),
      (t[26] = b),
      (t[27] = r),
      (t[28] = i),
      (t[29] = I))
    : (I = t[29]);
  let L = I,
    R;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (e) => {
        O((t) => {
          if (!(e in t)) return t;
          let n = { ...t };
          return (delete n[e], n);
        });
      }),
      (t[30] = R))
    : (R = t[30]);
  let te = R,
    B;
  t[31] !== p ||
  t[32] !== f ||
  t[33] !== s ||
  t[34] !== y ||
  t[35] !== n ||
  t[36] !== x ||
  t[37] !== d ||
  t[38] !== m ||
  t[39] !== v ||
  t[40] !== h ||
  t[41] !== g ||
  t[42] !== _ ||
  t[43] !== u ||
  t[44] !== i
    ? ((B = (e) => {
        let t = e.metadata;
        if (!t) return null;
        let r = dr({
            instanceId: x,
            path: t.kind === `comment` ? t.comment.position.path : t.path,
            workspaceRoot: t.kind === `comment` ? (t.comment.localWorkspaceRoot ?? i) : t.localWorkspaceRoot,
            side: e.side,
            lineNumber: e.lineNumber,
          }),
          a =
            t.kind === `comment`
              ? (t.comment.replyToReviewThreadId ??
                t.comment.reviewThreadId ??
                `comment-${s?.indexOf(t.comment) ?? -1}`)
              : `draft`,
          o = `${y ?? `no-conversation`}::${r}::${a}`,
          c = () => {
            C.current.delete(o);
          },
          l = (e) => {
            C.current.set(o, e);
          };
        switch (t.kind) {
          case `comment`: {
            if (t.source === `readonly`) {
              let e = t.comment,
                n = t.attached === !0,
                r = i == null ? t.comment : { ...t.comment, localWorkspaceRoot: i },
                a = J(r, i),
                o = J(t.comment, i),
                c = `url` in t.comment && typeof t.comment.url == `string` ? t.comment.url : null,
                l = t.comment.reviewThreadId ?? null,
                u =
                  m != null &&
                  t.comment.viewerCanReply !== !1 &&
                  l != null &&
                  !(s ?? []).some((e) => e.replyToReviewThreadId === l),
                f = (e) => {
                  let t = J(e, i);
                  return t === a || t === o;
                },
                p = s?.find(f)?.localPullRequestCommentGuidance ?? ``,
                v = null;
              if (
                (m ??
                  (v = n
                    ? (0, mr.jsx)(
                        Qt,
                        {
                          className: `w-full`,
                          defaultValue: p,
                          onRemove: () => {
                            d?.(
                              (s ?? []).filter((e) => !f(e)),
                              null,
                            );
                          },
                          onSubmit: (e) => {
                            d?.(
                              (s ?? []).map((t) =>
                                f(t) ? { ...t, localPullRequestCommentGuidance: e || void 0 } : t,
                              ),
                              null,
                            );
                          },
                        },
                        `${a}:${p}`,
                      )
                    : (0, mr.jsx)(z, {
                        color: `secondary`,
                        size: `default`,
                        onClick: (e) => {
                          (e.preventDefault(), e.stopPropagation(), d?.([...(s ?? []), r], null));
                        },
                        children: (0, mr.jsx)(K, {
                          id: `localConversation.pullRequest.actions.comments.address`,
                          defaultMessage: `Add to chat`,
                          description: `Action button shown on an individual review comment in the comments flyout`,
                        }),
                      })),
                h != null)
              )
                return (0, mr.jsx)(`div`, {
                  className: `w-full min-w-0 gap-2 p-1.5 font-sans whitespace-normal`,
                  children: h(e, v, n),
                });
              let y;
              return (
                (y =
                  g == null
                    ? m == null
                      ? v
                      : u
                        ? (0, mr.jsx)(z, {
                            color: `secondary`,
                            size: `default`,
                            onClick: (e) => {
                              (e.preventDefault(), e.stopPropagation(), m(t.comment));
                            },
                            children: (0, mr.jsx)(K, {
                              id: `pullRequestsPage.codeReview.comment.reply`,
                              defaultMessage: `Reply`,
                              description: `Action button shown on a pull request review comment in the code review tab`,
                            }),
                          })
                        : null
                    : g(e, u, () => {
                        u && m?.(t.comment);
                      })),
                (0, mr.jsx)(`div`, {
                  className: `w-full min-w-0 gap-2 p-1.5 font-sans whitespace-normal`,
                  children: (0, mr.jsx)(hn, {
                    comment: t.comment,
                    createdAt: e.createdAt,
                    defaultCollapsed: e.isResolved === !0,
                    headerAccessory:
                      e.isResolved === !0
                        ? (0, mr.jsx)(K, {
                            id: `pullRequestDetail.comment.resolved`,
                            defaultMessage: `Resolved`,
                            description: `Status shown on a resolved pull request code review thread`,
                          })
                        : void 0,
                    metadataAccessory: y,
                    replies: e.replies,
                    renderBody: _,
                    surfaceVariant: `inline`,
                    url: c,
                  }),
                })
              );
            }
            if (t.source === `model`)
              return (0, mr.jsx)(nr, {
                comment: t.comment,
                cwd: n,
                lineNumber: e.lineNumber,
                onSelectionClear: v,
                side: e.side,
              });
            let r = u?.has(it(t.comment)) === !0;
            return (0, mr.jsx)(
              Gn,
              {
                filePath: t.comment.position.path,
                workspaceRoot: n ?? void 0,
                side: e.side,
                source: `user`,
                lineNumber: e.lineNumber,
                initialComment: t.comment,
                initialDraftText: C.current.get(o),
                authorLabel: f,
                authorAvatarUrl: p,
                isSubmitting: r,
                onUnsavedChange: (e) => {
                  e || c();
                },
                onDraftTextChange: l,
                onSubmit: (e) => {
                  c();
                  let n = (s ?? []).map((n) => (n === t.comment ? e : n));
                  d?.(n, { previous: t.comment, updated: e });
                },
                onDelete: () => {
                  (c(), v?.(), d?.(s?.filter((e) => e !== t.comment) ?? [], null));
                },
              },
              o,
            );
          }
          case `draft-comment`:
            return (0, mr.jsx)(
              Gn,
              {
                filePath: t.path,
                workspaceRoot: n ?? void 0,
                side: e.side,
                source: `user`,
                lineNumber: e.lineNumber,
                startLine: t.startLine,
                startSide: t.startSide,
                localDiffHunk: t.localDiffHunk,
                authorLabel: f,
                authorAvatarUrl: p,
                initialDraftText: C.current.get(o),
                onUnsavedChange: (e) => {
                  e || c();
                },
                onDraftTextChange: l,
                onSubmit: (e) => {
                  (c(),
                    v?.(),
                    d?.(
                      [
                        ...(s ?? []),
                        t.localWorkspaceRoot == null ? e : { ...e, localWorkspaceRoot: t.localWorkspaceRoot },
                      ],
                      null,
                    ),
                    te(t.key));
                },
                onClose: () => {
                  (c(), v?.(), te(t.key));
                },
              },
              o,
            );
        }
      }),
      (t[31] = p),
      (t[32] = f),
      (t[33] = s),
      (t[34] = y),
      (t[35] = n),
      (t[36] = x),
      (t[37] = d),
      (t[38] = m),
      (t[39] = v),
      (t[40] = h),
      (t[41] = g),
      (t[42] = _),
      (t[43] = u),
      (t[44] = i),
      (t[45] = B))
    : (B = t[45]);
  let ne = B,
    V;
  return (
    t[46] !== L || t[47] !== ee || t[48] !== P || t[49] !== ne
      ? ((V = { annotations: P, annotationKeys: ee, addDraftComment: L, renderCommentAnnotation: ne }),
        (t[46] = L),
        (t[47] = ee),
        (t[48] = P),
        (t[49] = ne),
        (t[50] = V))
      : (V = t[50]),
    V
  );
}
function cr(e) {
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
function lr(e) {
  let { attached: t, comment: n, source: r } = e;
  return {
    side: n.position.side === `left` ? `deletions` : `additions`,
    lineNumber: n.position.line,
    metadata: { kind: `comment`, attached: t, comment: n, source: r },
  };
}
function ur(e) {
  return { comment: e, source: `model` };
}
function dr({ instanceId: e, path: t, workspaceRoot: n, side: r, lineNumber: i }) {
  let a = ce(t);
  return `${e}::${n == null ? `` : `${se(n)}::`}${a}::${Xt(r, i)}`;
}
var fr, pr, mr;
function hr() {
  return (hr = e(() => {
    ((fr = w()), (pr = c()), R(), V(), nn(), Dn(), C(), tr(), Zt(), Se(), or(), (mr = _()));
  }))();
}
export {
  on as a,
  an as c,
  Jt as d,
  Zt as f,
  Dn as i,
  Xt as l,
  qt as m,
  sr as n,
  ln as o,
  Kt as p,
  hn as r,
  rn as s,
  hr as t,
  Yt as u,
};
//# sourceMappingURL=use-diff-annotations-a6f2dca78adc.js.map
