import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $D as n,
  $Ut as r,
  AMt as i,
  Amn as a,
  Cpn as o,
  Fj as s,
  GK as c,
  Ij as l,
  JG as u,
  Jit as d,
  KG as f,
  KK as p,
  Kit as m,
  M6t as h,
  N6t as g,
  Opn as ee,
  QD as _,
  QUt as te,
  Rpn as v,
  Spn as ne,
  YHt as y,
  ZG as b,
  aW as x,
  af as S,
  cR as re,
  hmn as C,
  iW as ie,
  kMt as ae,
  kmn as w,
  nWt as T,
  rf as oe,
  sR as se,
  vit as E,
  yit as ce,
  zpn as le,
} from "./app-initial-f094ef01c64d.js";
import {
  Bw as ue,
  FS as D,
  Gw as de,
  KS as fe,
  Kw as pe,
  MS as O,
  NS as me,
  PS as he,
  US as k,
  zw as ge,
} from "./app-primary-4c40d73a1074.js";
import { r as A, t as _e } from "./diff-comment-card-c409d5c26721.js";
import { n as j, t as ve } from "./arrow-curved-right-c429570ec5db.js";
function ye(e, t, n = `github.com`) {
  let r = e?.trim();
  return r == null || r.length === 0 || /\s/.test(r)
    ? null
    : `https://${n}/${encodeURIComponent(r)}.png?size=${t}`;
}
var M = e(() => {});
function be(e) {
  let t = (0, xe.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, N.jsx)(`span`, { className: `shrink-0`, children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
var xe,
  N,
  P = e(() => {
    ((xe = w()), (N = C()));
  });
function Se(e) {
  let t = (0, F.c)(27),
    { actions: n, children: r, reply: i } = e,
    a = ee(),
    [o, s] = (0, I.useState)(null),
    c,
    l,
    u;
  if (t[0] !== o || t[1] !== a || t[2] !== i.authorAvatarUrl || t[3] !== i.authorLogin) {
    c =
      i.authorLogin ??
      a.formatMessage({
        id: `pullRequestsPage.detail.commentUnknownAuthor`,
        defaultMessage: `Unknown author`,
        description: `Fallback author label for PR timeline comments on the detail page`,
      });
    let e;
    t[7] !== i.authorAvatarUrl || t[8] !== i.authorLogin
      ? ((e = i.authorAvatarUrl ?? ye(i.authorLogin, 48)),
        (t[7] = i.authorAvatarUrl),
        (t[8] = i.authorLogin),
        (t[9] = e))
      : (e = t[9]);
    let n = e,
      r = n != null && n !== o;
    ((l = `flex min-w-0 items-center gap-2.5 ps-11.5 pe-3 pt-1.5`),
      (u = r
        ? (0, L.jsx)(be, {
            children: (0, L.jsx)(`img`, {
              alt: a.formatMessage(
                {
                  id: `pullRequestsPage.detail.commentAuthorAvatarAlt`,
                  defaultMessage: `{author} avatar`,
                  description: `Alt text for a pull request comment author's avatar on the detail page`,
                },
                { author: c },
              ),
              className: `size-6 rounded-full bg-surface object-cover`,
              src: n,
              onError: () => {
                s(n);
              },
            }),
          })
        : (0, L.jsx)(be, {
            children: (0, L.jsx)(`span`, {
              className: `flex size-6 items-center justify-center rounded-full bg-surface text-xs font-semibold text-default`,
              children: c.slice(0, 1).toUpperCase(),
            }),
          })),
      (t[0] = o),
      (t[1] = a),
      (t[2] = i.authorAvatarUrl),
      (t[3] = i.authorLogin),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u));
  } else ((c = t[4]), (l = t[5]), (u = t[6]));
  let d;
  t[10] === c
    ? (d = t[11])
    : ((d = (0, L.jsx)(`span`, {
        className: `min-w-0 truncate text-base leading-5 font-medium text-default`,
        children: c,
      })),
      (t[10] = c),
      (t[11] = d));
  let f;
  t[12] === i.createdAt
    ? (f = t[13])
    : ((f =
        i.createdAt == null
          ? null
          : (0, L.jsx)(`span`, {
              className: `shrink-0 text-sm text-tertiary`,
              children: (0, L.jsx)(oe, { dateString: i.createdAt }),
            })),
      (t[12] = i.createdAt),
      (t[13] = f));
  let p;
  t[14] === n
    ? (p = t[15])
    : ((p = n == null ? null : (0, L.jsx)(`div`, { className: `ms-auto`, children: n })),
      (t[14] = n),
      (t[15] = p));
  let m;
  t[16] !== l || t[17] !== u || t[18] !== d || t[19] !== f || t[20] !== p
    ? ((m = (0, L.jsxs)(`div`, { className: l, children: [u, d, f, p] })),
      (t[16] = l),
      (t[17] = u),
      (t[18] = d),
      (t[19] = f),
      (t[20] = p),
      (t[21] = m))
    : (m = t[21]);
  let h = r ?? i.text,
    g;
  t[22] === h
    ? (g = t[23])
    : ((g = (0, L.jsx)(`div`, {
        className: `ps-20 pe-3 pb-1.5 text-size-chat break-words text-default`,
        children: h,
      })),
      (t[22] = h),
      (t[23] = g));
  let _;
  return (
    t[24] !== m || t[25] !== g
      ? ((_ = (0, L.jsxs)(`div`, { children: [m, g] })), (t[24] = m), (t[25] = g), (t[26] = _))
      : (_ = t[26]),
    _
  );
}
var F,
  I,
  L,
  Ce = e(() => {
    ((F = w()), (I = t(a(), 1)), ne(), S(), M(), P(), (L = C()));
  });
function we(e) {
  let t = (0, B.c)(3),
    { children: n } = e,
    [r] = (0, V.useState)(Te),
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, H.jsx)(Pe, { value: r, children: n })), (t[0] = n), (t[1] = r), (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Te() {
  return new Set();
}
function Ee(e) {
  let t = (0, B.c)(77),
    {
      authorLogin: i,
      authorAvatarUrl: a,
      avatarSize: s,
      body: l,
      bodyPreview: u,
      comment: d,
      className: f,
      createdAt: p,
      defaultCollapsed: h,
      diffHunk: _,
      diffHunkPosition: ne,
      fileName: y,
      headerAccessory: b,
      metadataAccessory: x,
      onDelete: S,
      onDeleteReply: re,
      onEdit: C,
      onEditReply: ie,
      onOpenFile: w,
      onOpenInReview: T,
      onQuoteReply: E,
      position: ce,
      preventCollapse: le,
      replies: ue,
      renderBody: D,
      showDiffLocation: de,
      surfaceVariant: pe,
      url: O,
    } = e,
    k = s === void 0 ? `default` : s,
    ge = u !== void 0 && u,
    A = h !== void 0 && h,
    j = le !== void 0 && le,
    ve = ue === void 0 ? [] : ue,
    M = de !== void 0 && de,
    xe = pe === void 0 ? `default` : pe,
    N = ee(),
    P = (0, V.useId)(),
    F = (0, V.useContext)(Pe),
    [I, L] = (0, V.useState)(A),
    [Ce, we] = (0, V.useState)(A),
    [Te, Ee] = (0, V.useState)(null);
  A !== Ce && (we(A), L(A && !j));
  let R;
  t[0] !== F || t[1] !== j || t[2] !== L
    ? ((R = () => {
        if (F == null) return;
        let e = (e) => {
          (e && j) || L(e);
        };
        return (
          F.add(e),
          () => {
            F.delete(e);
          }
        );
      }),
      (t[0] = F),
      (t[1] = j),
      (t[2] = L),
      (t[3] = R))
    : (R = t[3]);
  let z;
  (t[4] !== F || t[5] !== j ? ((z = [F, j]), (t[4] = F), (t[5] = j), (t[6] = z)) : (z = t[6]),
    (0, V.useEffect)(R, z));
  let { authorLogin: Ae, text: Fe } = d == null ? { authorLogin: null, text: l ?? `` } : te(d),
    Ie = i ?? d?.authorLogin ?? Ae,
    U = l ?? Fe,
    W =
      Ie ??
      N.formatMessage({
        id: `pullRequestsPage.detail.commentUnknownAuthor`,
        defaultMessage: `Unknown author`,
        description: `Fallback author label for PR timeline comments on the detail page`,
      }),
    Le = a ?? d?.authorAvatarUrl ?? (Ie == null ? null : ye(Ie, 48)),
    Re = Le != null && Le !== Te,
    ze = N.formatMessage(
      {
        id: `pullRequestsPage.detail.commentAuthorAvatarAlt`,
        defaultMessage: `{author} avatar`,
        description: `Alt text for a pull request comment author's avatar on the detail page`,
      },
      { author: W },
    ),
    G = Re
      ? (0, H.jsx)(`img`, {
          alt: ze,
          className: v(
            `rounded-full bg-surface object-cover`,
            k === `compact` ? `icon-xs` : `size-6`,
          ),
          src: Le,
          onError: () => {
            Ee(Le);
          },
        })
      : (0, H.jsx)(`span`, {
          className: v(
            `flex items-center justify-center rounded-full bg-surface text-xs font-semibold text-default`,
            k === `compact` ? `icon-xs` : `size-6`,
          ),
          children: W.slice(0, 1).toUpperCase(),
        });
  if (ge) {
    let e;
    t[7] === d
      ? (e = t[8])
      : ((e = d == null ? null : Ne.default.posix.basename(d.position.path)),
        (t[7] = d),
        (t[8] = e));
    let n = e,
      r = T != null || O != null,
      i;
    t[9] !== p || t[10] !== n || t[11] !== r
      ? ((i =
          n != null || p != null
            ? (0, H.jsxs)(H.Fragment, {
                children: [
                  (0, H.jsx)(`span`, {
                    className: v(`min-w-0 truncate text-tertiary`, r && `group-hover:text-default`),
                    children: n,
                  }),
                  p == null
                    ? null
                    : (0, H.jsx)(`span`, {
                        className: v(`shrink-0 text-tertiary`, r && `group-hover:text-default`),
                        children: (0, H.jsx)(oe, { dateString: p }),
                      }),
                ],
              })
            : null),
        (t[9] = p),
        (t[10] = n),
        (t[11] = r),
        (t[12] = i))
      : (i = t[12]);
    let a = i,
      o = null;
    if (a != null)
      if (T != null) {
        let e;
        t[13] === N
          ? (e = t[14])
          : ((e = N.formatMessage({
              id: `pullRequestsPage.detail.openCommentInReview`,
              defaultMessage: `Open comment in review`,
              description: `Accessible label for a button that opens a pull request comment in the app review view`,
            })),
            (t[13] = N),
            (t[14] = e));
        let n;
        (t[15] !== T || t[16] !== a || t[17] !== e
          ? ((n = (0, H.jsx)(`button`, {
              "aria-label": e,
              className: `group flex min-w-0 cursor-interaction items-center justify-between gap-2 text-base`,
              type: `button`,
              onClick: T,
              children: a,
            })),
            (t[15] = T),
            (t[16] = a),
            (t[17] = e),
            (t[18] = n))
          : (n = t[18]),
          (o = n));
      } else if (O == null) {
        let e;
        (t[19] === a
          ? (e = t[20])
          : ((e = (0, H.jsx)(`div`, {
              className: `flex min-w-0 items-center justify-between gap-2 text-base`,
              children: a,
            })),
            (t[19] = a),
            (t[20] = e)),
          (o = e));
      } else {
        let e;
        t[21] === N
          ? (e = t[22])
          : ((e = N.formatMessage({
              id: `pullRequestsPage.detail.openCommentOnGitHub`,
              defaultMessage: `Open comment on GitHub`,
              description: `Accessible label for a link that opens a pull request comment on GitHub`,
            })),
            (t[21] = N),
            (t[22] = e));
        let n;
        (t[23] !== a || t[24] !== e || t[25] !== O
          ? ((n = (0, H.jsx)(`a`, {
              "aria-label": e,
              className: `group flex min-w-0 cursor-interaction items-center justify-between gap-2 text-base`,
              href: O,
              rel: `noreferrer`,
              target: `_blank`,
              children: a,
            })),
            (t[23] = a),
            (t[24] = e),
            (t[25] = O),
            (t[26] = n))
          : (n = t[26]),
          (o = n));
      }
    let s = k === `compact` ? `gap-3.5` : `gap-2`,
      c;
    t[27] !== f || t[28] !== s
      ? ((c = v(`flex min-w-0 py-1`, s, f)), (t[27] = f), (t[28] = s), (t[29] = c))
      : (c = t[29]);
    let l = k === `compact` && `mt-1`,
      u;
    t[30] === l ? (u = t[31]) : ((u = v(`shrink-0`, l)), (t[30] = l), (t[31] = u));
    let m;
    t[32] !== G || t[33] !== u
      ? ((m = (0, H.jsx)(`span`, { className: u, children: G })),
        (t[32] = G),
        (t[33] = u),
        (t[34] = m))
      : (m = t[34]);
    let h;
    return (
      t[35] !== k || t[36] !== x || t[37] !== o
        ? ((h =
            o != null || x != null
              ? (0, H.jsxs)(`div`, {
                  className: `flex min-w-0 items-center justify-between gap-2`,
                  children: [
                    o,
                    x == null
                      ? null
                      : (0, H.jsx)(`span`, {
                          className: v(`inline-flex shrink-0`, k === `compact` && `-me-0.5`),
                          children: x,
                        }),
                  ],
                })
              : null),
          (t[35] = k),
          (t[36] = x),
          (t[37] = o),
          (t[38] = h))
        : (h = t[38]),
      (0, H.jsxs)(`div`, {
        className: c,
        children: [
          m,
          (0, H.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 flex-col gap-0.5`,
            children: [(0, H.jsx)(je, { body: U }), h],
          }),
        ],
      })
    );
  }
  let K = [
      ...(d == null || l != null || ve.length > 0 ? [] : r(d).slice(1)).map(Oe),
      ...ve.map(De),
    ],
    q = ce ?? d?.position,
    J = ne ?? q,
    Be;
  t[39] !== q || t[40] !== M
    ? ((Be = M && q != null ? Me(q) : null), (t[39] = q), (t[40] = M), (t[41] = Be))
    : (Be = t[41]);
  let Ve = Be,
    He;
  t[42] !== _ || t[43] !== q
    ? ((He =
        _ == null || q == null
          ? null
          : (n(`diff --git a/${q.path} b/${q.path}\n--- a/${q.path}\n+++ b/${q.path}\n${_}\n`, {
              maxFiles: 1,
            })[0]?.metadata ?? null)),
      (t[42] = _),
      (t[43] = q),
      (t[44] = He))
    : (He = t[44]);
  let Y = He,
    Ue = Ie != null || p != null,
    We;
  t[45] === G ? (We = t[46]) : ((We = (0, H.jsx)(be, { children: G })), (t[45] = G), (t[46] = We));
  let Ge = We,
    Ke;
  t[47] !== y || t[48] !== N || t[49] !== I || t[50] !== w || t[51] !== L
    ? ((Ke =
        y == null
          ? null
          : w == null && !I
            ? (0, H.jsx)(`span`, { className: `min-w-0 truncate text-sm leading-5`, children: y })
            : (0, H.jsx)(`button`, {
                className: v(
                  `min-w-0 cursor-interaction truncate text-sm leading-5 focus-visible:text-default`,
                  !I && `hover:text-default`,
                ),
                "aria-expanded": !I && void 0,
                "aria-label": I
                  ? void 0
                  : N.formatMessage(
                      {
                        id: `pullRequestsPage.detail.openFileInCode`,
                        defaultMessage: `Open {fileName} in Code`,
                        description: `Accessible label for a pull request comment file link that opens the file in the Code tab`,
                      },
                      { fileName: y },
                    ),
                type: `button`,
                onClick: I ? () => L(!1) : w,
                children: y,
              })),
      (t[47] = y),
      (t[48] = N),
      (t[49] = I),
      (t[50] = w),
      (t[51] = L),
      (t[52] = Ke))
    : (Ke = t[52]);
  let qe = Ke,
    Je = null;
  I ||
    (Je = (0, H.jsxs)(`div`, {
      className: `min-w-0`,
      children: [
        D == null
          ? (0, H.jsx)(fe, {
              allowBasicHtml: !0,
              className: `ps-11.5 pe-3 pt-2 pb-2.5 [&_details]:mt-3 [&_details]:rounded-[14px] [&_details]:border [&_details]:border-border/16 [&_details]:bg-surface-secondary/40 [&_details]:px-3.5 [&_details]:py-3 [&_summary]:cursor-interaction [&_summary]:font-medium [&_summary]:text-default`,
              cwd: null,
              children: me(U),
            })
          : D(U, !1),
        K.length > 0 &&
          (0, H.jsx)(`div`, {
            className: `flex flex-col`,
            children: K.map((e, t) => {
              let { replyData: n } = e;
              return (0, H.jsx)(
                Se,
                {
                  actions:
                    n?.nodeId == null
                      ? null
                      : (0, H.jsx)(ke, {
                          onDelete: n.viewerCanDelete === !0 && re != null ? () => re(n) : void 0,
                          onEdit: n.viewerCanUpdate === !0 && ie != null ? () => ie(n) : void 0,
                        }),
                  reply: e,
                  children:
                    D == null
                      ? (0, H.jsx)(fe, { allowBasicHtml: !0, cwd: null, children: me(e.text) })
                      : D(e.text, !0, n),
                },
                n?.nodeId ?? n?.id ?? t,
              );
            }),
          }),
      ],
    }));
  let Ye = I
      ? N.formatMessage(
          {
            id: `pullRequestsPage.detail.expandCommentByAuthor`,
            defaultMessage: `Expand comment by {author}`,
            description: `Accessible label for the button that expands a collapsed pull request comment and identifies its author`,
          },
          { author: W },
        )
      : N.formatMessage(
          {
            id: `pullRequestsPage.detail.collapseCommentByAuthor`,
            defaultMessage: `Collapse comment by {author}`,
            description: `Accessible label for the button that collapses an expanded pull request comment and identifies its author`,
          },
          { author: W },
        ),
    Xe;
  t[53] !== N || t[54] !== O
    ? ((Xe =
        O == null
          ? null
          : (0, H.jsx)(m, {
              delayDuration: 250,
              tooltipContent: N.formatMessage({
                id: `pullRequestsPage.detail.viewCommentOnGitHub`,
                defaultMessage: `View comment on GitHub`,
                description: `Tooltip for the external link that opens a pull request comment on GitHub`,
              }),
              children: (0, H.jsx)(`a`, {
                "aria-label": N.formatMessage({
                  id: `pullRequestsPage.detail.openCommentOnGitHub`,
                  defaultMessage: `Open comment on GitHub`,
                  description: `Accessible label for a link that opens a pull request comment on GitHub`,
                }),
                className: `inline-flex shrink-0 text-codex-description opacity-0 transition-colors group-focus-within/comment:opacity-100 group-hover/comment:opacity-100 hover:text-default`,
                href: O,
                rel: `noreferrer`,
                target: `_blank`,
                onClick: (e) => {
                  (e.stopPropagation(), g({ event: e, href: O, initiator: `pull_request_link` }));
                },
                children: (0, H.jsx)(se, { href: O, className: `icon-xs` }),
              }),
            })),
      (t[53] = N),
      (t[54] = O),
      (t[55] = Xe))
    : (Xe = t[55]);
  let Ze = Xe,
    Qe;
  t[56] !== F || t[57] !== I || t[58] !== j || t[59] !== L
    ? ((Qe = (e) => {
        (e.preventDefault(), e.stopPropagation());
        let t = !I;
        if (!(t && j)) {
          if (e.altKey && F != null) {
            for (let e of F) e(t);
            return;
          }
          L(t);
        }
      }),
      (t[56] = F),
      (t[57] = I),
      (t[58] = j),
      (t[59] = L),
      (t[60] = Qe))
    : (Qe = t[60]);
  let $e = Qe,
    X;
  t[61] === p
    ? (X = t[62])
    : ((X =
        p == null
          ? null
          : (0, H.jsx)(`span`, {
              className: `shrink-0 text-sm text-tertiary`,
              children: (0, H.jsx)(oe, { dateString: p }),
            })),
      (t[61] = p),
      (t[62] = X));
  let Z;
  t[63] !== C || t[64] !== L
    ? ((Z =
        C == null
          ? void 0
          : () => {
              (L(!1), C());
            }),
      (t[63] = C),
      (t[64] = L),
      (t[65] = Z))
    : (Z = t[65]);
  let Q;
  t[66] !== E || t[67] !== L
    ? ((Q =
        E == null
          ? void 0
          : () => {
              (L(!1), E());
            }),
      (t[66] = E),
      (t[67] = L),
      (t[68] = Q))
    : (Q = t[68]);
  let $;
  t[69] !== S || t[70] !== Z || t[71] !== Q
    ? (($ = (0, H.jsx)(ke, { onDelete: S, onEdit: Z, onQuoteReply: Q })),
      (t[69] = S),
      (t[70] = Z),
      (t[71] = Q),
      (t[72] = $))
    : ($ = t[72]);
  let et;
  t[73] !== Ze || t[74] !== X || t[75] !== $
    ? ((et = (0, H.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [Ze, X, $],
      })),
      (t[73] = Ze),
      (t[74] = X),
      (t[75] = $),
      (t[76] = et))
    : (et = t[76]);
  let tt = et;
  return Ue
    ? (0, H.jsx)(_e, {
        authorAvatar: Ge,
        authorLabel: (0, H.jsxs)(ae, {
          className: `min-w-0 gap-1.5 text-start`,
          "aria-describedby": b != null || K.length > 0 ? P : void 0,
          "aria-expanded": !I,
          "aria-label": Ye,
          color: `ghostMuted`,
          focusRing: `inset`,
          onClick: $e,
          size: `inline`,
          children: [
            (0, H.jsx)(`span`, { className: `truncate`, children: W }),
            b == null && K.length === 0
              ? null
              : (0, H.jsxs)(`span`, {
                  id: P,
                  className: `inline-flex shrink-0 items-center gap-1.5 text-sm leading-5 font-normal text-codex-description`,
                  children: [
                    b == null ? null : (0, H.jsx)(`span`, { children: b }),
                    K.length === 0
                      ? null
                      : (0, H.jsx)(`span`, {
                          className: `ps-1`,
                          children:
                            b == null
                              ? (0, H.jsx)(o, {
                                  id: `pullRequestsPage.detail.commentReplyCount`,
                                  defaultMessage: `{count, plural, one {# reply} other {# replies}}`,
                                  description: `Reply count shown after the author in a pull request comment header`,
                                  values: { count: K.length },
                                })
                              : (0, H.jsx)(o, {
                                  id: `pullRequestsPage.detail.resolvedCommentReplyCount`,
                                  defaultMessage: `· {count, plural, one {# reply} other {# replies}}`,
                                  description: `Reply count with a dot separator shown after the resolved status in a pull request comment header`,
                                  values: { count: K.length },
                                }),
                        }),
                  ],
                }),
            (0, H.jsx)(c, {
              "aria-hidden": !0,
              className: v(
                `icon-2xs shrink-0 text-tertiary opacity-0 transition-transform duration-basic group-focus-within/comment:opacity-100 group-hover/comment:opacity-100`,
                !I && `rotate-90`,
              ),
            }),
          ],
        }),
        body: Je,
        className: f,
        footer: I ? null : x,
        headerAccessory: tt,
        onHeaderClick: $e,
        headerSuffix:
          qe == null
            ? null
            : (0, H.jsx)(`div`, {
                className: v(
                  Y == null || I
                    ? `flex min-w-0 items-center gap-2 ps-11.5 pe-3 text-tertiary`
                    : `mt-2 border-y border-default bg-surface`,
                  (Y == null || I) && (I ? `pb-2.5` : `pb-1`),
                ),
                children:
                  Y == null || I
                    ? (0, H.jsxs)(H.Fragment, {
                        children: [
                          qe,
                          Ve == null || Y != null
                            ? null
                            : (0, H.jsx)(`span`, {
                                className: `shrink-0 text-sm leading-5`,
                                children: Ve,
                              }),
                        ],
                      })
                    : (0, H.jsxs)(H.Fragment, {
                        children: [
                          (0, H.jsx)(`div`, {
                            className: `flex min-w-0 items-center py-2 ps-11.5 pe-3 text-tertiary`,
                            children: qe,
                          }),
                          (0, H.jsx)(he, {
                            alignCommentGutter: !0,
                            fileDiff: Y,
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
        surfaceVariant: xe,
      })
    : D == null
      ? (0, H.jsx)(fe, {
          allowBasicHtml: !0,
          className: `[&_details]:mt-3 [&_details]:rounded-[14px] [&_details]:border [&_details]:border-border/16 [&_details]:bg-surface-secondary/40 [&_details]:px-3.5 [&_details]:py-3 [&_summary]:cursor-interaction [&_summary]:font-medium [&_summary]:text-default`,
          cwd: null,
          children: me(U),
        })
      : D(U, !1);
}
function De(e) {
  return { ...e, replyData: e, text: e.body };
}
function Oe(e) {
  return { ...e, replyData: void 0 };
}
function ke(e) {
  let t = (0, B.c)(15),
    { onDelete: n, onEdit: r, onQuoteReply: i } = e,
    a = ee();
  if (n == null && r == null && i == null) return null;
  let c;
  t[0] === a
    ? (c = t[1])
    : ((c = a.formatMessage({
        id: `pullRequestDetail.comment.actions`,
        defaultMessage: `Comment actions`,
        description: `Accessible label for opening a pull request comment's action menu`,
      })),
      (t[0] = a),
      (t[1] = c));
  let l;
  t[2] === c
    ? (l = t[3])
    : ((l = (0, H.jsx)(de, { label: c, size: `icon` })), (t[2] = c), (t[3] = l));
  let d;
  t[4] === r
    ? (d = t[5])
    : ((d =
        r == null
          ? null
          : (0, H.jsx)(u.Item, {
              LeftIcon: s,
              onClick: Ae,
              onSelect: r,
              children: (0, H.jsx)(o, {
                id: `pullRequestDetail.comment.edit`,
                defaultMessage: `Edit`,
                description: `Menu item to edit a pull request comment or review`,
              }),
            })),
      (t[4] = r),
      (t[5] = d));
  let p;
  t[6] === i
    ? (p = t[7])
    : ((p =
        i == null
          ? null
          : (0, H.jsx)(u.Item, {
              LeftIcon: ve,
              onClick: z,
              onSelect: i,
              children: (0, H.jsx)(o, {
                id: `pullRequestDetail.comment.quoteReply`,
                defaultMessage: `Quote reply`,
                description: `Menu item to reply to a pull request comment with its text quoted in Markdown`,
              }),
            })),
      (t[6] = i),
      (t[7] = p));
  let m;
  t[8] === n
    ? (m = t[9])
    : ((m =
        n == null
          ? null
          : (0, H.jsx)(u.Item, {
              LeftIcon: ge,
              tone: `danger`,
              onClick: R,
              onSelect: n,
              children: (0, H.jsx)(o, {
                id: `pullRequestDetail.comment.delete`,
                defaultMessage: `Delete`,
                description: `Menu item to delete a pull request comment`,
              }),
            })),
      (t[8] = n),
      (t[9] = m));
  let h;
  return (
    t[10] !== l || t[11] !== d || t[12] !== p || t[13] !== m
      ? ((h = (0, H.jsxs)(f, {
          align: `end`,
          contentWidth: `xs`,
          triggerButton: l,
          children: [d, p, m],
        })),
        (t[10] = l),
        (t[11] = d),
        (t[12] = p),
        (t[13] = m),
        (t[14] = h))
      : (h = t[14]),
    h
  );
}
function R(e) {
  return e.stopPropagation();
}
function z(e) {
  return e.stopPropagation();
}
function Ae(e) {
  return e.stopPropagation();
}
function je(e) {
  let t = (0, B.c)(19),
    { body: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = { text: n, collapsedLineCount: 3, fallbackFontSizePx: 13 }), (t[0] = n), (t[1] = r));
  let { setTextContentMeasurementRef: i, collapseState: a, handleToggleExpansion: s } = x(r),
    c = a === `collapsed` && `line-clamp-3`,
    l;
  t[2] === c ? (l = t[3]) : ((l = v(c)), (t[2] = c), (t[3] = l));
  let u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = {
        img() {
          return null;
        },
        p(e) {
          let { children: t } = e;
          return (0, H.jsx)(`span`, { className: `block leading-5`, children: t });
        },
        strong(e) {
          let { children: t } = e;
          return (0, H.jsx)(H.Fragment, { children: t });
        },
      }),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] === n ? (d = t[6]) : ((d = me(n)), (t[5] = n), (t[6] = d));
  let f;
  t[7] === d
    ? (f = t[8])
    : ((f = (0, H.jsx)(fe, { allowBasicHtml: !0, components: u, cwd: null, children: d })),
      (t[7] = d),
      (t[8] = f));
  let p;
  t[9] !== i || t[10] !== l || t[11] !== f
    ? ((p = (0, H.jsx)(`div`, { ref: i, className: l, children: f })),
      (t[9] = i),
      (t[10] = l),
      (t[11] = f),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] !== a || t[14] !== s
    ? ((m =
        a === `uncollapsible`
          ? null
          : (0, H.jsxs)(`button`, {
              type: `button`,
              "aria-expanded": a === `expanded`,
              className: `mt-1.5 inline-flex cursor-interaction items-center gap-1 self-start text-base text-codex-description hover:text-default`,
              onClick: s,
              children: [
                (0, H.jsx)(`span`, {
                  children:
                    a === `expanded`
                      ? (0, H.jsx)(o, {
                          id: `pullRequestsPage.detail.commentShowLess`,
                          defaultMessage: `Show less`,
                          description: `Button label for collapsing a pull request comment preview`,
                        })
                      : (0, H.jsx)(o, {
                          id: `pullRequestsPage.detail.commentShowMore`,
                          defaultMessage: `Show more`,
                          description: `Button label for expanding a truncated pull request comment preview`,
                        }),
                }),
                (0, H.jsx)(E, { className: a === `expanded` ? `icon-2xs rotate-180` : `icon-2xs` }),
              ],
            })),
      (t[13] = a),
      (t[14] = s),
      (t[15] = m))
    : (m = t[15]);
  let h;
  return (
    t[16] !== p || t[17] !== m
      ? ((h = (0, H.jsxs)(H.Fragment, { children: [p, m] })), (t[16] = p), (t[17] = m), (t[18] = h))
      : (h = t[18]),
    h
  );
}
function Me(e) {
  let t = e.line,
    n = e.side === `left` ? `L` : `R`,
    r = e.start_line ?? t,
    i = (e.start_side ?? e.side) === `left` ? `L` : `R`;
  return r === t && i === n
    ? (0, H.jsx)(o, {
        id: `pullRequestsPage.detail.line`,
        defaultMessage: `Line {side}{line}`,
        description: `Single-line location label shown beside a pull request comment file name`,
        values: { line: t, side: n },
      })
    : (0, H.jsx)(o, {
        id: `pullRequestsPage.detail.lines`,
        defaultMessage: `{startSide}{startLine}–{endSide}{endLine}`,
        description: `Line-range location label shown beside a pull request comment file name`,
        values: { endLine: t, endSide: n, startLine: r, startSide: i },
      });
}
var B,
  Ne,
  V,
  H,
  Pe,
  Fe = e(() => {
    ((B = w()),
      le(),
      (Ne = t(y(), 1)),
      (V = t(a(), 1)),
      ne(),
      i(),
      b(),
      h(),
      re(),
      S(),
      pe(),
      d(),
      ie(),
      A(),
      T(),
      D(),
      _(),
      j(),
      p(),
      ce(),
      l(),
      ue(),
      k(),
      O(),
      M(),
      P(),
      Ce(),
      (H = C()),
      (Pe = (0, V.createContext)(null)));
  });
export { P as a, be as i, Ee as n, ye as o, Fe as r, M as s, we as t };
//# sourceMappingURL=pull-request-readonly-comment-6e9ac0779fb8.js.map
