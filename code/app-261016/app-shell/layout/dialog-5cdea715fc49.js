import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  Bst as i,
  FBt as a,
  HO as o,
  IO as s,
  JO as c,
  KO as l,
  LNt as u,
  LO as d,
  Lst as f,
  Mst as p,
  PBt as m,
  Qst as ee,
  RO as h,
  Rst as te,
  TY as g,
  Vrt as _,
  WO as ne,
  WOt as re,
  XOt as v,
  Y3 as y,
  Z3 as b,
  ZSt as x,
  bst as S,
  e6 as C,
  hSt as w,
  iCt as T,
  jst as E,
  okt as ie,
  qO as D,
  qrt as ae,
  sY as O,
  sct as k,
  tkt as A,
  vst as j,
  xst as oe,
  yst as se,
  zst as ce,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  GLn as M,
  Iwn as N,
  Own as P,
  iRr as F,
  qLn as I,
  tyr as L,
  wLr as R,
  zRr as z,
} from "./app-initial-ad16eaadf81f.js";
function B(e) {
  let t = (0, W.c)(9),
    { accountId: n, onClose: r } = e,
    i = T(z) === n,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = (e) => {
        (e.preventDefault(), i && document.activeElement === document.body && P());
      }),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = (e) => {
        e || r();
      }),
      (t[2] = r),
      (t[3] = o));
  let s;
  return (
    t[4] !== n || t[5] !== i || t[6] !== a || t[7] !== o
      ? ((s = (0, G.jsx)(V, { accountId: n, open: i, onCloseAutoFocus: a, onOpenChange: o })),
        (t[4] = n),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function V(e) {
  let t = (0, W.c)(92),
    { accountId: r, open: i, onCloseAutoFocus: a, onOpenChange: o, triggerContent: c } = e,
    u = n(ee),
    f = ie(),
    m = te(),
    [g, _] = (0, ge.useState)(!1),
    re = (0, ge.useRef)(null),
    v;
  t[0] === r ? (v = t[1]) : ((v = [`chatgpt-shared-links`, r]), (t[0] = r), (t[1] = v));
  let b = v,
    x;
  t[2] === b ? (x = t[3]) : ((x = [...b, `conversations`]), (t[2] = b), (t[3] = x));
  let S;
  t[4] !== i || t[5] !== x
    ? ((S = { enabled: i, queryKey: x, queryFn: fe, staleTime: ce.ONE_MINUTE }),
      (t[4] = i),
      (t[5] = x),
      (t[6] = S))
    : (S = t[6]);
  let C = p(S),
    w;
  t[7] === b ? (w = t[8]) : ((w = [...b, `textdocs`]), (t[7] = b), (t[8] = w));
  let T;
  t[9] !== i || t[10] !== w
    ? ((T = { enabled: i, queryKey: w, queryFn: de, staleTime: ce.ONE_MINUTE }),
      (t[9] = i),
      (t[10] = w),
      (t[11] = T))
    : (T = t[11]);
  let E = p(T),
    O;
  t[12] === b ? (O = t[13]) : ((O = [...b, `posts`]), (t[12] = b), (t[13] = O));
  let k;
  t[14] !== i || t[15] !== O
    ? ((k = { enabled: i, queryKey: O, queryFn: ue, staleTime: ce.ONE_MINUTE }),
      (t[14] = i),
      (t[15] = O),
      (t[16] = k))
    : (k = t[16]);
  let j = p(k),
    oe;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = () => {
        _(!1);
      }),
      (t[17] = oe))
    : (oe = t[17]);
  let M;
  t[18] !== f || t[19] !== u
    ? ((M = () => {
        u.get(ae).danger(
          f.formatMessage({
            id: `settings.chatGpt.sharedLinks.deleteAllError`,
            defaultMessage: `Could not delete shared links`,
            description: `Error toast shown when a user cannot revoke all shared ChatGPT links from the Shared links management dialog`,
          }),
          { errorAnalytics: { toastId: `delete_all_shared_links_failed` } },
        );
      }),
      (t[18] = f),
      (t[19] = u),
      (t[20] = M))
    : (M = t[20]);
  let N;
  t[21] !== m || t[22] !== b
    ? ((N = () => m.invalidateQueries({ queryKey: b })), (t[21] = m), (t[22] = b), (t[23] = N))
    : (N = t[23]);
  let P;
  t[24] !== N || t[25] !== M
    ? ((P = { mutationFn: he, onSuccess: oe, onError: M, onSettled: N }),
      (t[24] = N),
      (t[25] = M),
      (t[26] = P))
    : (P = t[26]);
  let F = se(P),
    I,
    L,
    R,
    z;
  if (t[27] !== r || t[28] !== C || t[29] !== j || t[30] !== E) {
    if (
      ((z = me({
        conversations: C.data?.items ?? [],
        posts: j.data?.items ?? [],
        textdocs: E.data?.shared_textdocs ?? [],
      })),
      (R = C.isLoading || E.isLoading || j.isLoading),
      (L = C.isError || E.isError || j.isError),
      R)
    ) {
      let e;
      (t[35] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(`p`, {
            className: `py-8 text-center text-sm text-secondary`,
            role: `status`,
            children: (0, G.jsx)(A, {
              id: `settings.chatGpt.sharedLinks.loading`,
              defaultMessage: `Loading shared links…`,
              description: `Loading status in the ChatGPT Shared links management dialog`,
            }),
          })),
          (t[35] = e))
        : (e = t[35]),
        (I = e));
    } else if (L) {
      let e;
      t[36] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(`p`, {
            className: `text-sm text-secondary`,
            role: `alert`,
            children: (0, G.jsx)(A, {
              id: `settings.chatGpt.sharedLinks.loadError`,
              defaultMessage: `Could not load shared links`,
              description: `Error message shown when ChatGPT shared links cannot be loaded`,
            }),
          })),
          (t[36] = e))
        : (e = t[36]);
      let n;
      t[37] !== C || t[38] !== j || t[39] !== E
        ? ((n = () => {
            Promise.all([C.refetch(), E.refetch(), j.refetch()]);
          }),
          (t[37] = C),
          (t[38] = j),
          (t[39] = E),
          (t[40] = n))
        : (n = t[40]);
      let r;
      t[41] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, G.jsx)(A, {
            id: `common.retry`,
            defaultMessage: `Retry`,
            description: `Button to retry an operation after an error`,
          })),
          (t[41] = r))
        : (r = t[41]);
      let i;
      (t[42] === n
        ? (i = t[43])
        : ((i = (0, G.jsxs)(`div`, {
            className: `flex flex-col items-center gap-3 py-8 text-center`,
            children: [e, (0, G.jsx)(y, { color: `secondary`, onClick: n, children: r })],
          })),
          (t[42] = n),
          (t[43] = i)),
        (I = i));
    } else if (z.length === 0) {
      let e;
      (t[44] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(`p`, {
            className: `py-8 text-center text-sm text-secondary`,
            children: (0, G.jsx)(A, {
              id: `settings.chatGpt.sharedLinks.empty`,
              defaultMessage: `You have no shared links`,
              description: `Empty state in the ChatGPT Shared links management dialog`,
            }),
          })),
          (t[44] = e))
        : (e = t[44]),
        (I = e));
    } else {
      let e;
      t[45] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(`th`, {
            className: `px-3 py-2 text-start font-medium`,
            scope: `col`,
            children: (0, G.jsx)(A, {
              id: `settings.chatGpt.sharedLinks.name`,
              defaultMessage: `Name`,
              description: `Name column heading in the ChatGPT Shared links management table`,
            }),
          })),
          (t[45] = e))
        : (e = t[45]);
      let n;
      t[46] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, G.jsx)(`th`, {
            className: `px-3 py-2 text-start font-medium`,
            scope: `col`,
            children: (0, G.jsx)(A, {
              id: `settings.chatGpt.sharedLinks.type`,
              defaultMessage: `Type`,
              description: `Content type column heading in the ChatGPT Shared links management table`,
            }),
          })),
          (t[46] = n))
        : (n = t[46]);
      let i;
      t[47] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, G.jsx)(`th`, {
            className: `px-3 py-2 text-start font-medium`,
            scope: `col`,
            children: (0, G.jsx)(A, {
              id: `settings.chatGpt.sharedLinks.dateShared`,
              defaultMessage: `Date shared`,
              description: `Date column heading in the ChatGPT Shared links management table`,
            }),
          })),
          (t[47] = i))
        : (i = t[47]);
      let a;
      t[48] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((a = (0, G.jsx)(`thead`, {
            className: `sticky top-0 border-b border-default bg-surface text-codex-description select-none`,
            children: (0, G.jsxs)(`tr`, {
              children: [
                e,
                n,
                i,
                (0, G.jsx)(`th`, {
                  className: `w-px px-3 py-2`,
                  scope: `col`,
                  children: (0, G.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, G.jsx)(A, {
                      id: `settings.chatGpt.sharedLinks.actions`,
                      defaultMessage: `Actions`,
                      description: `Accessible heading for actions in the ChatGPT Shared links management table`,
                    }),
                  }),
                }),
              ],
            }),
          })),
          (t[48] = a))
        : (a = t[48]);
      let o;
      t[49] === r
        ? (o = t[50])
        : ((o = (e) => (0, G.jsx)(pe, { accountId: r, sharedLink: e }, `${r}:${e.kind}:${e.id}`)),
          (t[49] = r),
          (t[50] = o));
      let s = (0, G.jsx)(`tbody`, { children: z.map(o) }),
        c;
      (t[51] === s
        ? (c = t[52])
        : ((c = (0, G.jsx)(`div`, {
            className: `min-h-0 overflow-auto rounded-xl border border-default`,
            children: (0, G.jsxs)(`table`, {
              className: `w-full border-collapse text-start text-sm`,
              children: [a, s],
            }),
          })),
          (t[51] = s),
          (t[52] = c)),
        (I = c));
    }
    ((t[27] = r), (t[28] = C), (t[29] = j), (t[30] = E), (t[31] = I), (t[32] = L), (t[33] = R), (t[34] = z));
  } else ((I = t[31]), (L = t[32]), (R = t[33]), (z = t[34]));
  let B;
  t[53] === a ? (B = t[54]) : ((B = { onCloseAutoFocus: a }), (t[53] = a), (t[54] = B));
  let V;
  t[55] === o
    ? (V = t[56])
    : ((V = (e) => {
        (e || _(!1), o(e));
      }),
      (t[55] = o),
      (t[56] = V));
  let H;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, G.jsx)(D, {
        children: (0, G.jsx)(A, {
          id: `settings.chatGpt.sharedLinks.title`,
          defaultMessage: `Shared links`,
          description: `Title of the ChatGPT Shared links management dialog`,
        }),
      })),
      (t[57] = H))
    : (H = t[57]);
  let U;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, G.jsx)(h, {
        className: `px-5 pt-5`,
        title: H,
        subtitle: (0, G.jsx)(l, {
          children: (0, G.jsx)(A, {
            id: `settings.chatGpt.sharedLinks.description`,
            defaultMessage: `Anyone with a shared link can view the shared image, message, chat, or scheduled task. Deleting a shared link stops others from viewing that shared content. It does not delete your original content. <link>Learn more</link>`,
            description: `Explanation in the ChatGPT Shared links management dialog. It tells users that link recipients can view shared content, removing a link revokes access, and original content remains. The link tag opens a help article.`,
            values: { link: le },
          }),
        }),
      })),
      (t[58] = U))
    : (U = t[58]);
  let K;
  t[59] === I
    ? (K = t[60])
    : ((K = (0, G.jsx)(`div`, { className: `flex min-h-0 flex-1 flex-col px-5`, children: I })),
      (t[59] = I),
      (t[60] = K));
  let q;
  t[61] !== L || t[62] !== R || t[63] !== z
    ? ((q =
        !R && !L && z.length > 0
          ? (0, G.jsx)(d, {
              className: `px-5 pb-5`,
              expandSingleButton: !1,
              children: (0, G.jsx)(y, {
                ref: re,
                color: `danger`,
                onClick: () => _(!0),
                children: (0, G.jsx)(A, {
                  id: `settings.chatGpt.sharedLinks.deleteAll`,
                  defaultMessage: `Delete all shared links`,
                  description: `Destructive button in the ChatGPT Shared links management dialog that starts confirmation to revoke every shared link`,
                }),
              }),
            })
          : null),
      (t[61] = L),
      (t[62] = R),
      (t[63] = z),
      (t[64] = q))
    : (q = t[64]);
  let J;
  t[65] !== K || t[66] !== q
    ? ((J = (0, G.jsxs)(s, { className: `gap-4`, size: `full`, variant: `chatgpt`, children: [U, K, q] })),
      (t[65] = K),
      (t[66] = q),
      (t[67] = J))
    : (J = t[67]);
  let Y;
  t[68] !== i || t[69] !== B || t[70] !== V || t[71] !== J || t[72] !== c
    ? ((Y = (0, G.jsx)(ne, {
        open: i,
        triggerContent: c,
        contentProps: B,
        onOpenChange: V,
        size: `xwideTall`,
        variant: `chatgpt`,
        children: J,
      })),
      (t[68] = i),
      (t[69] = B),
      (t[70] = V),
      (t[71] = J),
      (t[72] = c),
      (t[73] = Y))
    : (Y = t[73]);
  let _e;
  t[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = {
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), document.activeElement === document.body && re.current?.focus());
        },
      }),
      (t[74] = _e))
    : (_e = t[74]);
  let X;
  t[75] === F
    ? (X = t[76])
    : ((X = (e) => {
        (e.preventDefault(), F.mutate());
      }),
      (t[75] = F),
      (t[76] = X));
  let ve;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, G.jsx)(h, {
        title: (0, G.jsx)(D, {
          children: (0, G.jsx)(A, {
            id: `settings.chatGpt.sharedLinks.deleteAllConfirmTitle`,
            defaultMessage: `Delete all shared links?`,
            description: `Title of the confirmation dialog before revoking every shared ChatGPT link`,
          }),
        }),
      })),
      (t[77] = ve))
    : (ve = t[77]);
  let ye;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, G.jsx)(l, {
        asChild: !0,
        children: (0, G.jsx)(`p`, {
          className: `text-sm text-secondary`,
          children: (0, G.jsx)(A, {
            id: `settings.chatGpt.sharedLinks.deleteAllConfirmDescription`,
            defaultMessage: `People with these links will no longer be able to view the shared content. Your original content will not be deleted.`,
            description: `Warning in the confirmation dialog before revoking every shared ChatGPT link; it clarifies that original content remains`,
          }),
        }),
      })),
      (t[78] = ye))
    : (ye = t[78]);
  let be;
  t[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, G.jsx)(y, {
        color: `secondary`,
        type: `button`,
        onClick: () => _(!1),
        children: (0, G.jsx)(A, {
          id: `common.cancel`,
          defaultMessage: `Cancel`,
          description: `Cancel button`,
        }),
      })),
      (t[79] = be))
    : (be = t[79]);
  let xe;
  t[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (0, G.jsx)(A, {
        id: `settings.chatGpt.sharedLinks.deleteAllConfirm`,
        defaultMessage: `Delete all`,
        description: `Button confirming revocation of every shared ChatGPT link`,
      })),
      (t[80] = xe))
    : (xe = t[80]);
  let Z;
  t[81] === F.isPending
    ? (Z = t[82])
    : ((Z = (0, G.jsxs)(d, {
        children: [
          be,
          (0, G.jsx)(y, { color: `dangerSolid`, loading: F.isPending, type: `submit`, children: xe }),
        ],
      })),
      (t[81] = F.isPending),
      (t[82] = Z));
  let Q;
  t[83] !== X || t[84] !== Z
    ? ((Q = (0, G.jsxs)(s, { as: `form`, onSubmit: X, children: [ve, ye, Z] })),
      (t[83] = X),
      (t[84] = Z),
      (t[85] = Q))
    : (Q = t[85]);
  let $;
  t[86] !== g || t[87] !== Q
    ? (($ = (0, G.jsx)(ne, { open: g, onOpenChange: _, contentProps: _e, children: Q })),
      (t[86] = g),
      (t[87] = Q),
      (t[88] = $))
    : ($ = t[88]);
  let Se;
  return (
    t[89] !== Y || t[90] !== $
      ? ((Se = (0, G.jsxs)(G.Fragment, { children: [Y, $] })), (t[89] = Y), (t[90] = $), (t[91] = Se))
      : (Se = t[91]),
    Se
  );
}
function le(e) {
  return (0, G.jsx)(
    M,
    {
      appearance: `secondary`,
      href: q,
      initiator: `open_in_browser_bridge`,
      isBrowserEnabled: !1,
      openTarget: `external-browser`,
      children: e,
    },
    `learn-more`,
  );
}
function ue() {
  return F.safeGet(`/share/posts/mine`, { parameters: { query: { limit: 1e4 } } });
}
function de() {
  return F.safeGet(`/shared_textdocs`);
}
function fe() {
  return F.safeGet(`/shared_conversations`, { parameters: { query: { order: `created` } } });
}
function pe(e) {
  let r = (0, W.c)(49),
    { accountId: i, sharedLink: a } = e,
    o = n(ee),
    s = ie(),
    c = te(),
    l;
  r[0] !== i || r[1] !== a.id || r[2] !== a.kind
    ? ((l = [`chatgpt-shared-links`, i, `delete`, a.kind, a.id]),
      (r[0] = i),
      (r[1] = a.id),
      (r[2] = a.kind),
      (r[3] = l))
    : (l = r[3]);
  let u = l,
    d;
  r[4] === u ? (d = r[5]) : ((d = { mutationKey: u, exact: !0 }), (r[4] = u), (r[5] = d));
  let f = oe(d) > 0,
    p;
  r[6] !== a.id || r[7] !== a.kind
    ? ((p = async () => {
        bb2: switch (a.kind) {
          case `conversation`:
            await F.safeDelete(`/share/{shared_conversation_id}`, {
              parameters: { path: { shared_conversation_id: a.id } },
            });
            break bb2;
          case `textdoc`:
            await F.safeDelete(`/textdoc/shared/{shared_textdoc_id}`, {
              parameters: { path: { shared_textdoc_id: a.id } },
            });
            break bb2;
          case `post`:
            await F.safeDelete(`/share/post/{post_id}`, { parameters: { path: { post_id: a.id } } });
        }
      }),
      (r[6] = a.id),
      (r[7] = a.kind),
      (r[8] = p))
    : (p = r[8]);
  let m;
  r[9] !== i || r[10] !== c
    ? ((m = () => c.invalidateQueries({ queryKey: [`chatgpt-shared-links`, i] })),
      (r[9] = i),
      (r[10] = c),
      (r[11] = m))
    : (m = r[11]);
  let h;
  r[12] !== s || r[13] !== o || r[14] !== a.kind
    ? ((h = () => {
        o.get(ae).danger(
          s.formatMessage({
            id: `settings.chatGpt.sharedLinks.deleteError`,
            defaultMessage: `Could not delete shared link`,
            description: `Error toast shown when a user cannot revoke one shared ChatGPT link from the Shared links management dialog`,
          }),
          {
            errorAnalytics: {
              toastId: a.kind === `post` ? `delete_shared_post_failed` : `delete_shared_link_failed`,
            },
          },
        );
      }),
      (r[12] = s),
      (r[13] = o),
      (r[14] = a.kind),
      (r[15] = h))
    : (h = r[15]);
  let g;
  r[16] !== u || r[17] !== p || r[18] !== m || r[19] !== h
    ? ((g = { mutationKey: u, mutationFn: p, onSuccess: m, onError: h }),
      (r[16] = u),
      (r[17] = p),
      (r[18] = m),
      (r[19] = h),
      (r[20] = g))
    : (g = r[20]);
  let { mutate: _ } = se(g),
    ne = a.title ?? a.href,
    v;
  r[21] === a.title
    ? (v = r[22])
    : ((v =
        a.title ??
        (0, G.jsx)(A, {
          id: `settings.chatGpt.sharedLinks.fallbackName`,
          defaultMessage: `Shared link`,
          description: `Fallback name for shared ChatGPT content without a title in the Shared links management table`,
        })),
      (r[21] = a.title),
      (r[22] = v));
  let b;
  r[23] !== a.href || r[24] !== ne || r[25] !== v
    ? ((b = (0, G.jsx)(`td`, {
        className: `max-w-0 px-3 py-2`,
        children: (0, G.jsx)(M, {
          className: `block truncate underline`,
          href: a.href,
          initiator: `open_in_browser_bridge`,
          isBrowserEnabled: !1,
          openTarget: `external-browser`,
          title: ne,
          children: v,
        }),
      })),
      (r[23] = a.href),
      (r[24] = ne),
      (r[25] = v),
      (r[26] = b))
    : (b = r[26]);
  let x;
  r[27] === a.type
    ? (x = r[28])
    : ((x = (0, G.jsx)(`td`, {
        className: `px-3 py-2 text-secondary`,
        children: (0, G.jsx)(H, { type: a.type }),
      })),
      (r[27] = a.type),
      (r[28] = x));
  let S;
  r[29] === a.sharedAt
    ? (S = r[30])
    : ((S =
        a.sharedAt > 0
          ? (0, G.jsx)(re, { value: a.sharedAt, day: `numeric`, month: `long`, year: `numeric` })
          : null),
      (r[29] = a.sharedAt),
      (r[30] = S));
  let C;
  r[31] === S
    ? (C = r[32])
    : ((C = (0, G.jsx)(`td`, { className: `px-3 py-2 whitespace-nowrap text-secondary`, children: S })),
      (r[31] = S),
      (r[32] = C));
  let w;
  r[33] === s
    ? (w = r[34])
    : ((w = s.formatMessage({
        id: `settings.chatGpt.sharedLinks.delete`,
        defaultMessage: `Delete shared link`,
        description: `Accessible label for the icon button that revokes one link in the ChatGPT Shared links management table`,
      })),
      (r[33] = s),
      (r[34] = w));
  let T;
  r[35] === _ ? (T = r[36]) : ((T = () => _()), (r[35] = _), (r[36] = T));
  let E;
  r[37] === f
    ? (E = r[38])
    : ((E = f ? (0, G.jsx)(t, { className: `size-4` }) : (0, G.jsx)(O, {})), (r[37] = f), (r[38] = E));
  let D;
  r[39] !== f || r[40] !== w || r[41] !== T || r[42] !== E
    ? ((D = (0, G.jsx)(`td`, {
        className: `px-3 py-2 text-end`,
        children: (0, G.jsx)(y, {
          "aria-busy": f,
          "aria-label": w,
          color: `ghost`,
          disabled: f,
          onClick: T,
          size: `icon`,
          children: E,
        }),
      })),
      (r[39] = f),
      (r[40] = w),
      (r[41] = T),
      (r[42] = E),
      (r[43] = D))
    : (D = r[43]);
  let k;
  return (
    r[44] !== x || r[45] !== C || r[46] !== D || r[47] !== b
      ? ((k = (0, G.jsxs)(`tr`, {
          className: `border-b border-default last:border-b-0`,
          children: [b, x, C, D],
        })),
        (r[44] = x),
        (r[45] = C),
        (r[46] = D),
        (r[47] = b),
        (r[48] = k))
      : (k = r[48]),
    k
  );
}
function H(e) {
  let t = (0, W.c)(5),
    { type: n } = e;
  switch (n) {
    case `canvas`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(A, {
              id: `settings.chatGpt.sharedLinks.type.canvas`,
              defaultMessage: `Canvas`,
              description: `Content type for a shared ChatGPT canvas in the Shared links management table`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `chat`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(A, {
              id: `settings.chatGpt.sharedLinks.type.chat`,
              defaultMessage: `Chat`,
              description: `Content type for a shared ChatGPT chat in the Shared links management table`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `image`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(A, {
              id: `settings.chatGpt.sharedLinks.type.image`,
              defaultMessage: `Image`,
              description: `Content type for a shared generated image in the ChatGPT Shared links management table`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `post`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(A, {
              id: `settings.chatGpt.sharedLinks.type.post`,
              defaultMessage: `Post`,
              description: `Content type for a shared ChatGPT post in the Shared links management table`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `task`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(A, {
              id: `settings.chatGpt.sharedLinks.type.task`,
              defaultMessage: `Scheduled task`,
              description: `Content type for a shared ChatGPT scheduled task in the Shared links management table`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
  }
}
function me({ conversations: e, posts: t, textdocs: n }) {
  return [
    ...e.map((e) => ({
      href: `${K}/share/${e.workspace_id == null ? `` : `e/`}${encodeURIComponent(e.id)}`,
      id: e.id,
      kind: `conversation`,
      sharedAt: e.create_time == null ? 0 : Date.parse(e.create_time),
      title: e.title ?? null,
      type: `chat`,
    })),
    ...n.map((e) => ({
      href: `${K}/canvas/shared/${encodeURIComponent(e.shared_textdoc_id)}`,
      id: e.shared_textdoc_id,
      kind: `textdoc`,
      sharedAt: Date.parse(e.created_at),
      title: e.name,
      type: `canvas`,
    })),
    ...t.map((e) => ({
      href: e.permalink ?? `${K}/s/${encodeURIComponent(e.id)}`,
      id: e.id,
      kind: `post`,
      sharedAt: e.posted_at * 1e3,
      title: e.text,
      type: U(e),
    })),
  ].sort((e, t) => t.sharedAt - e.sharedAt);
}
function U(e) {
  return e.id.startsWith(`task_`) || e.id.startsWith(`shareauto_`)
    ? `task`
    : e.attachments.some((e) => e.kind === `media_generation`)
      ? `image`
      : `post`;
}
async function he() {
  await Promise.all([
    F.safeDelete(`/share/all`, { requestBody: { confirm: !0 } }),
    F.safeDelete(`/shared_textdocs`, {}),
    F.safeDelete(`/share/posts/mine`, {}),
  ]);
}
var W, ge, G, K, q;
function J() {
  return (J = e(() => {
    ((W = m()),
      S(),
      j(),
      E(),
      f(),
      x(),
      k(),
      (ge = a()),
      v(),
      R(),
      L(),
      N(),
      b(),
      c(),
      o(),
      I(),
      g(),
      C(),
      _(),
      r(),
      i(),
      (G = u()),
      (K = new URL(w).origin),
      (q = `https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq`));
  }))();
}
export { B as n, J as r, V as t };
//# sourceMappingURL=dialog-5cdea715fc49.js.map
