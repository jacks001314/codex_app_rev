import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $bt as n,
  Cot as r,
  Fat as i,
  IDt as a,
  Iot as o,
  Ixt as s,
  Lot as c,
  Pat as l,
  Pxt as u,
  Rot as d,
  TDt as ee,
  TJ as f,
  VDt as te,
  Vxt as p,
  Xot as m,
  Yot as h,
  _O as g,
  cO as _,
  fO as v,
  gO as y,
  hot as ne,
  i3 as b,
  jDt as x,
  lot as S,
  mO as C,
  nst as re,
  oO as w,
  r3 as T,
  rst as E,
  sJ as D,
  sO as O,
  t3 as k,
  tst as A,
  vO as j,
  vzt as M,
  wot as N,
  xMt as ie,
  yzt as P,
  zot as ae,
} from "./app-shared-bbfeca5e5737.js";
import {
  GMr as F,
  Txn as I,
  Ymr as L,
  _xn as R,
  ehr as z,
  tNr as B,
  xPn as V,
  yPn as H,
} from "./app-initial-5851df3f6cb1.js";
function U(e) {
  let t = (0, he.c)(9),
    { accountId: n, onClose: r } = e,
    i = p(F) === n,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = (e) => {
        (e.preventDefault(), i && document.activeElement === document.body && R());
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
      ? ((s = (0, G.jsx)(W, { accountId: n, open: i, onCloseAutoFocus: a, onOpenChange: o })),
        (t[4] = n),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function W(e) {
  let n = (0, he.c)(92),
    { accountId: i, open: o, onCloseAutoFocus: u, onOpenChange: d, triggerContent: ee } = e,
    f = s(r),
    p = te(),
    h = re(),
    [v, b] = (0, ge.useState)(!1),
    x = (0, ge.useRef)(null),
    S;
  n[0] === i ? (S = n[1]) : ((S = [`chatgpt-shared-links`, i]), (n[0] = i), (n[1] = S));
  let T = S,
    E;
  n[2] === T ? (E = n[3]) : ((E = [...T, `conversations`]), (n[2] = T), (n[3] = E));
  let D;
  n[4] !== o || n[5] !== E
    ? ((D = { enabled: o, queryKey: E, queryFn: le, staleTime: l.ONE_MINUTE }),
      (n[4] = o),
      (n[5] = E),
      (n[6] = D))
    : (D = n[6]);
  let k = m(D),
    A;
  n[7] === T ? (A = n[8]) : ((A = [...T, `textdocs`]), (n[7] = T), (n[8] = A));
  let j;
  n[9] !== o || n[10] !== A
    ? ((j = { enabled: o, queryKey: A, queryFn: ce, staleTime: l.ONE_MINUTE }),
      (n[9] = o),
      (n[10] = A),
      (n[11] = j))
    : (j = n[11]);
  let M = m(j),
    N;
  n[12] === T ? (N = n[13]) : ((N = [...T, `posts`]), (n[12] = T), (n[13] = N));
  let ie;
  n[14] !== o || n[15] !== N
    ? ((ie = { enabled: o, queryKey: N, queryFn: se, staleTime: l.ONE_MINUTE }),
      (n[14] = o),
      (n[15] = N),
      (n[16] = ie))
    : (ie = n[16]);
  let P = m(ie),
    ae;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = () => {
        b(!1);
      }),
      (n[17] = ae))
    : (ae = n[17]);
  let F;
  n[18] !== p || n[19] !== f
    ? ((F = () => {
        f.get(ne).danger(
          p.formatMessage({
            id: `settings.chatGpt.sharedLinks.deleteAllError`,
            defaultMessage: `Could not delete shared links`,
            description: `Error toast shown when a user cannot revoke all shared ChatGPT links from the Shared links management dialog`,
          }),
          { errorAnalytics: { toastId: `delete_all_shared_links_failed` } },
        );
      }),
      (n[18] = p),
      (n[19] = f),
      (n[20] = F))
    : (F = n[20]);
  let I;
  n[21] !== h || n[22] !== T
    ? ((I = () => h.invalidateQueries({ queryKey: T })), (n[21] = h), (n[22] = T), (n[23] = I))
    : (I = n[23]);
  let L;
  n[24] !== I || n[25] !== F
    ? ((L = { mutationFn: me, onSuccess: ae, onError: F, onSettled: I }),
      (n[24] = I),
      (n[25] = F),
      (n[26] = L))
    : (L = n[26]);
  let R = c(L),
    z,
    B,
    V,
    H;
  if (n[27] !== i || n[28] !== k || n[29] !== P || n[30] !== M) {
    if (
      ((H = fe({
        conversations: k.data?.items ?? [],
        posts: P.data?.items ?? [],
        textdocs: M.data?.shared_textdocs ?? [],
      })),
      (V = k.isLoading || M.isLoading || P.isLoading),
      (B = k.isError || M.isError || P.isError),
      V)
    ) {
      let e;
      (n[35] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(`p`, {
            className: `py-8 text-center text-sm text-secondary`,
            role: `status`,
            children: (0, G.jsx)(a, {
              id: `settings.chatGpt.sharedLinks.loading`,
              defaultMessage: `Loading shared links…`,
              description: `Loading status in the ChatGPT Shared links management dialog`,
            }),
          })),
          (n[35] = e))
        : (e = n[35]),
        (z = e));
    } else if (B) {
      let e;
      n[36] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(`p`, {
            className: `text-sm text-secondary`,
            role: `alert`,
            children: (0, G.jsx)(a, {
              id: `settings.chatGpt.sharedLinks.loadError`,
              defaultMessage: `Could not load shared links`,
              description: `Error message shown when ChatGPT shared links cannot be loaded`,
            }),
          })),
          (n[36] = e))
        : (e = n[36]);
      let r;
      n[37] !== k || n[38] !== P || n[39] !== M
        ? ((r = () => {
            Promise.all([k.refetch(), M.refetch(), P.refetch()]);
          }),
          (n[37] = k),
          (n[38] = P),
          (n[39] = M),
          (n[40] = r))
        : (r = n[40]);
      let i;
      n[41] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, G.jsx)(a, {
            id: `common.retry`,
            defaultMessage: `Retry`,
            description: `Button to retry an operation after an error`,
          })),
          (n[41] = i))
        : (i = n[41]);
      let o;
      (n[42] === r
        ? (o = n[43])
        : ((o = (0, G.jsxs)(`div`, {
            className: `flex flex-col items-center gap-3 py-8 text-center`,
            children: [e, (0, G.jsx)(t, { color: `secondary`, onClick: r, children: i })],
          })),
          (n[42] = r),
          (n[43] = o)),
        (z = o));
    } else if (H.length === 0) {
      let e;
      (n[44] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(`p`, {
            className: `py-8 text-center text-sm text-secondary`,
            children: (0, G.jsx)(a, {
              id: `settings.chatGpt.sharedLinks.empty`,
              defaultMessage: `You have no shared links`,
              description: `Empty state in the ChatGPT Shared links management dialog`,
            }),
          })),
          (n[44] = e))
        : (e = n[44]),
        (z = e));
    } else {
      let e;
      n[45] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(`th`, {
            className: `px-3 py-2 text-start font-medium`,
            scope: `col`,
            children: (0, G.jsx)(a, {
              id: `settings.chatGpt.sharedLinks.name`,
              defaultMessage: `Name`,
              description: `Name column heading in the ChatGPT Shared links management table`,
            }),
          })),
          (n[45] = e))
        : (e = n[45]);
      let t;
      n[46] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, G.jsx)(`th`, {
            className: `px-3 py-2 text-start font-medium`,
            scope: `col`,
            children: (0, G.jsx)(a, {
              id: `settings.chatGpt.sharedLinks.type`,
              defaultMessage: `Type`,
              description: `Content type column heading in the ChatGPT Shared links management table`,
            }),
          })),
          (n[46] = t))
        : (t = n[46]);
      let r;
      n[47] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, G.jsx)(`th`, {
            className: `px-3 py-2 text-start font-medium`,
            scope: `col`,
            children: (0, G.jsx)(a, {
              id: `settings.chatGpt.sharedLinks.dateShared`,
              defaultMessage: `Date shared`,
              description: `Date column heading in the ChatGPT Shared links management table`,
            }),
          })),
          (n[47] = r))
        : (r = n[47]);
      let o;
      n[48] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((o = (0, G.jsx)(`thead`, {
            className: `sticky top-0 border-b border-default bg-surface text-codex-description select-none`,
            children: (0, G.jsxs)(`tr`, {
              children: [
                e,
                t,
                r,
                (0, G.jsx)(`th`, {
                  className: `w-px px-3 py-2`,
                  scope: `col`,
                  children: (0, G.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, G.jsx)(a, {
                      id: `settings.chatGpt.sharedLinks.actions`,
                      defaultMessage: `Actions`,
                      description: `Accessible heading for actions in the ChatGPT Shared links management table`,
                    }),
                  }),
                }),
              ],
            }),
          })),
          (n[48] = o))
        : (o = n[48]);
      let s;
      n[49] === i
        ? (s = n[50])
        : ((s = (e) => (0, G.jsx)(ue, { accountId: i, sharedLink: e }, `${i}:${e.kind}:${e.id}`)),
          (n[49] = i),
          (n[50] = s));
      let c = (0, G.jsx)(`tbody`, { children: H.map(s) }),
        l;
      (n[51] === c
        ? (l = n[52])
        : ((l = (0, G.jsx)(`div`, {
            className: `min-h-0 overflow-auto rounded-xl border border-default`,
            children: (0, G.jsxs)(`table`, {
              className: `w-full border-collapse text-start text-sm`,
              children: [o, c],
            }),
          })),
          (n[51] = c),
          (n[52] = l)),
        (z = l));
    }
    ((n[27] = i), (n[28] = k), (n[29] = P), (n[30] = M), (n[31] = z), (n[32] = B), (n[33] = V), (n[34] = H));
  } else ((z = n[31]), (B = n[32]), (V = n[33]), (H = n[34]));
  let U;
  n[53] === u ? (U = n[54]) : ((U = { onCloseAutoFocus: u }), (n[53] = u), (n[54] = U));
  let W;
  n[55] === d
    ? (W = n[56])
    : ((W = (e) => {
        (e || b(!1), d(e));
      }),
      (n[55] = d),
      (n[56] = W));
  let de;
  n[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, G.jsx)(g, {
        children: (0, G.jsx)(a, {
          id: `settings.chatGpt.sharedLinks.title`,
          defaultMessage: `Shared links`,
          description: `Title of the ChatGPT Shared links management dialog`,
        }),
      })),
      (n[57] = de))
    : (de = n[57]);
  let pe;
  n[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, G.jsx)(_, {
        className: `px-5 pt-5`,
        title: de,
        subtitle: (0, G.jsx)(y, {
          children: (0, G.jsx)(a, {
            id: `settings.chatGpt.sharedLinks.description`,
            defaultMessage: `Anyone with a shared link can view the shared image, message, chat, or scheduled task. Deleting a shared link stops others from viewing that shared content. It does not delete your original content. <link>Learn more</link>`,
            description: `Explanation in the ChatGPT Shared links management dialog. It tells users that link recipients can view shared content, removing a link revokes access, and original content remains. The link tag opens a help article.`,
            values: { link: oe },
          }),
        }),
      })),
      (n[58] = pe))
    : (pe = n[58]);
  let K;
  n[59] === z
    ? (K = n[60])
    : ((K = (0, G.jsx)(`div`, { className: `flex min-h-0 flex-1 flex-col px-5`, children: z })),
      (n[59] = z),
      (n[60] = K));
  let q;
  n[61] !== B || n[62] !== V || n[63] !== H
    ? ((q =
        !V && !B && H.length > 0
          ? (0, G.jsx)(O, {
              className: `px-5 pb-5`,
              expandSingleButton: !1,
              children: (0, G.jsx)(t, {
                ref: x,
                color: `danger`,
                onClick: () => b(!0),
                children: (0, G.jsx)(a, {
                  id: `settings.chatGpt.sharedLinks.deleteAll`,
                  defaultMessage: `Delete all shared links`,
                  description: `Destructive button in the ChatGPT Shared links management dialog that starts confirmation to revoke every shared link`,
                }),
              }),
            })
          : null),
      (n[61] = B),
      (n[62] = V),
      (n[63] = H),
      (n[64] = q))
    : (q = n[64]);
  let J;
  n[65] !== K || n[66] !== q
    ? ((J = (0, G.jsxs)(w, { className: `gap-4`, size: `full`, variant: `chatgpt`, children: [pe, K, q] })),
      (n[65] = K),
      (n[66] = q),
      (n[67] = J))
    : (J = n[67]);
  let Y;
  n[68] !== o || n[69] !== U || n[70] !== W || n[71] !== J || n[72] !== ee
    ? ((Y = (0, G.jsx)(C, {
        open: o,
        triggerContent: ee,
        contentProps: U,
        onOpenChange: W,
        size: `xwideTall`,
        variant: `chatgpt`,
        children: J,
      })),
      (n[68] = o),
      (n[69] = U),
      (n[70] = W),
      (n[71] = J),
      (n[72] = ee),
      (n[73] = Y))
    : (Y = n[73]);
  let _e;
  n[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = {
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), document.activeElement === document.body && x.current?.focus());
        },
      }),
      (n[74] = _e))
    : (_e = n[74]);
  let X;
  n[75] === R
    ? (X = n[76])
    : ((X = (e) => {
        (e.preventDefault(), R.mutate());
      }),
      (n[75] = R),
      (n[76] = X));
  let ve;
  n[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, G.jsx)(_, {
        title: (0, G.jsx)(g, {
          children: (0, G.jsx)(a, {
            id: `settings.chatGpt.sharedLinks.deleteAllConfirmTitle`,
            defaultMessage: `Delete all shared links?`,
            description: `Title of the confirmation dialog before revoking every shared ChatGPT link`,
          }),
        }),
      })),
      (n[77] = ve))
    : (ve = n[77]);
  let ye;
  n[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, G.jsx)(y, {
        asChild: !0,
        children: (0, G.jsx)(`p`, {
          className: `text-sm text-secondary`,
          children: (0, G.jsx)(a, {
            id: `settings.chatGpt.sharedLinks.deleteAllConfirmDescription`,
            defaultMessage: `People with these links will no longer be able to view the shared content. Your original content will not be deleted.`,
            description: `Warning in the confirmation dialog before revoking every shared ChatGPT link; it clarifies that original content remains`,
          }),
        }),
      })),
      (n[78] = ye))
    : (ye = n[78]);
  let be;
  n[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, G.jsx)(t, {
        color: `secondary`,
        type: `button`,
        onClick: () => b(!1),
        children: (0, G.jsx)(a, {
          id: `common.cancel`,
          defaultMessage: `Cancel`,
          description: `Cancel button`,
        }),
      })),
      (n[79] = be))
    : (be = n[79]);
  let xe;
  n[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (0, G.jsx)(a, {
        id: `settings.chatGpt.sharedLinks.deleteAllConfirm`,
        defaultMessage: `Delete all`,
        description: `Button confirming revocation of every shared ChatGPT link`,
      })),
      (n[80] = xe))
    : (xe = n[80]);
  let Z;
  n[81] === R.isPending
    ? (Z = n[82])
    : ((Z = (0, G.jsxs)(O, {
        children: [
          be,
          (0, G.jsx)(t, { color: `dangerSolid`, loading: R.isPending, type: `submit`, children: xe }),
        ],
      })),
      (n[81] = R.isPending),
      (n[82] = Z));
  let Q;
  n[83] !== X || n[84] !== Z
    ? ((Q = (0, G.jsxs)(w, { as: `form`, onSubmit: X, children: [ve, ye, Z] })),
      (n[83] = X),
      (n[84] = Z),
      (n[85] = Q))
    : (Q = n[85]);
  let $;
  n[86] !== v || n[87] !== Q
    ? (($ = (0, G.jsx)(C, { open: v, onOpenChange: b, contentProps: _e, children: Q })),
      (n[86] = v),
      (n[87] = Q),
      (n[88] = $))
    : ($ = n[88]);
  let Se;
  return (
    n[89] !== Y || n[90] !== $
      ? ((Se = (0, G.jsxs)(G.Fragment, { children: [Y, $] })), (n[89] = Y), (n[90] = $), (n[91] = Se))
      : (Se = n[91]),
    Se
  );
}
function oe(e) {
  return (0, G.jsx)(
    H,
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
function se() {
  return L.safeGet(`/share/posts/mine`, { parameters: { query: { limit: 1e4 } } });
}
function ce() {
  return L.safeGet(`/shared_textdocs`);
}
function le() {
  return L.safeGet(`/shared_conversations`, { parameters: { query: { order: `created` } } });
}
function ue(e) {
  let n = (0, he.c)(49),
    { accountId: i, sharedLink: o } = e,
    l = s(r),
    u = te(),
    d = re(),
    f;
  n[0] !== i || n[1] !== o.id || n[2] !== o.kind
    ? ((f = [`chatgpt-shared-links`, i, `delete`, o.kind, o.id]),
      (n[0] = i),
      (n[1] = o.id),
      (n[2] = o.kind),
      (n[3] = f))
    : (f = n[3]);
  let p = f,
    m;
  n[4] === p ? (m = n[5]) : ((m = { mutationKey: p, exact: !0 }), (n[4] = p), (n[5] = m));
  let h = ae(m) > 0,
    g;
  n[6] !== o.id || n[7] !== o.kind
    ? ((g = async () => {
        bb2: switch (o.kind) {
          case `conversation`:
            await L.safeDelete(`/share/{shared_conversation_id}`, {
              parameters: { path: { shared_conversation_id: o.id } },
            });
            break bb2;
          case `textdoc`:
            await L.safeDelete(`/textdoc/shared/{shared_textdoc_id}`, {
              parameters: { path: { shared_textdoc_id: o.id } },
            });
            break bb2;
          case `post`:
            await L.safeDelete(`/share/post/{post_id}`, { parameters: { path: { post_id: o.id } } });
        }
      }),
      (n[6] = o.id),
      (n[7] = o.kind),
      (n[8] = g))
    : (g = n[8]);
  let _;
  n[9] !== i || n[10] !== d
    ? ((_ = () => d.invalidateQueries({ queryKey: [`chatgpt-shared-links`, i] })),
      (n[9] = i),
      (n[10] = d),
      (n[11] = _))
    : (_ = n[11]);
  let v;
  n[12] !== u || n[13] !== l || n[14] !== o.kind
    ? ((v = () => {
        l.get(ne).danger(
          u.formatMessage({
            id: `settings.chatGpt.sharedLinks.deleteError`,
            defaultMessage: `Could not delete shared link`,
            description: `Error toast shown when a user cannot revoke one shared ChatGPT link from the Shared links management dialog`,
          }),
          {
            errorAnalytics: {
              toastId: o.kind === `post` ? `delete_shared_post_failed` : `delete_shared_link_failed`,
            },
          },
        );
      }),
      (n[12] = u),
      (n[13] = l),
      (n[14] = o.kind),
      (n[15] = v))
    : (v = n[15]);
  let y;
  n[16] !== p || n[17] !== g || n[18] !== _ || n[19] !== v
    ? ((y = { mutationKey: p, mutationFn: g, onSuccess: _, onError: v }),
      (n[16] = p),
      (n[17] = g),
      (n[18] = _),
      (n[19] = v),
      (n[20] = y))
    : (y = n[20]);
  let { mutate: b } = c(y),
    x = o.title ?? o.href,
    S;
  n[21] === o.title
    ? (S = n[22])
    : ((S =
        o.title ??
        (0, G.jsx)(a, {
          id: `settings.chatGpt.sharedLinks.fallbackName`,
          defaultMessage: `Shared link`,
          description: `Fallback name for shared ChatGPT content without a title in the Shared links management table`,
        })),
      (n[21] = o.title),
      (n[22] = S));
  let C;
  n[23] !== o.href || n[24] !== x || n[25] !== S
    ? ((C = (0, G.jsx)(`td`, {
        className: `max-w-0 px-3 py-2`,
        children: (0, G.jsx)(H, {
          className: `block truncate underline`,
          href: o.href,
          initiator: `open_in_browser_bridge`,
          isBrowserEnabled: !1,
          openTarget: `external-browser`,
          title: x,
          children: S,
        }),
      })),
      (n[23] = o.href),
      (n[24] = x),
      (n[25] = S),
      (n[26] = C))
    : (C = n[26]);
  let w;
  n[27] === o.type
    ? (w = n[28])
    : ((w = (0, G.jsx)(`td`, {
        className: `px-3 py-2 text-secondary`,
        children: (0, G.jsx)(de, { type: o.type }),
      })),
      (n[27] = o.type),
      (n[28] = w));
  let E;
  n[29] === o.sharedAt
    ? (E = n[30])
    : ((E =
        o.sharedAt > 0
          ? (0, G.jsx)(ee, { value: o.sharedAt, day: `numeric`, month: `long`, year: `numeric` })
          : null),
      (n[29] = o.sharedAt),
      (n[30] = E));
  let O;
  n[31] === E
    ? (O = n[32])
    : ((O = (0, G.jsx)(`td`, { className: `px-3 py-2 whitespace-nowrap text-secondary`, children: E })),
      (n[31] = E),
      (n[32] = O));
  let k;
  n[33] === u
    ? (k = n[34])
    : ((k = u.formatMessage({
        id: `settings.chatGpt.sharedLinks.delete`,
        defaultMessage: `Delete shared link`,
        description: `Accessible label for the icon button that revokes one link in the ChatGPT Shared links management table`,
      })),
      (n[33] = u),
      (n[34] = k));
  let A;
  n[35] === b ? (A = n[36]) : ((A = () => b()), (n[35] = b), (n[36] = A));
  let j;
  n[37] === h
    ? (j = n[38])
    : ((j = h ? (0, G.jsx)(T, { className: `size-4` }) : (0, G.jsx)(D, {})), (n[37] = h), (n[38] = j));
  let M;
  n[39] !== h || n[40] !== k || n[41] !== A || n[42] !== j
    ? ((M = (0, G.jsx)(`td`, {
        className: `px-3 py-2 text-end`,
        children: (0, G.jsx)(t, {
          "aria-busy": h,
          "aria-label": k,
          color: `ghost`,
          disabled: h,
          onClick: A,
          size: `icon`,
          children: j,
        }),
      })),
      (n[39] = h),
      (n[40] = k),
      (n[41] = A),
      (n[42] = j),
      (n[43] = M))
    : (M = n[43]);
  let N;
  return (
    n[44] !== w || n[45] !== O || n[46] !== M || n[47] !== C
      ? ((N = (0, G.jsxs)(`tr`, {
          className: `border-b border-default last:border-b-0`,
          children: [C, w, O, M],
        })),
        (n[44] = w),
        (n[45] = O),
        (n[46] = M),
        (n[47] = C),
        (n[48] = N))
      : (N = n[48]),
    N
  );
}
function de(e) {
  let t = (0, he.c)(5),
    { type: n } = e;
  switch (n) {
    case `canvas`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, G.jsx)(a, {
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
          ? ((e = (0, G.jsx)(a, {
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
          ? ((e = (0, G.jsx)(a, {
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
          ? ((e = (0, G.jsx)(a, {
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
          ? ((e = (0, G.jsx)(a, {
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
function fe({ conversations: e, posts: t, textdocs: n }) {
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
      type: pe(e),
    })),
  ].sort((e, t) => t.sharedAt - e.sharedAt);
}
function pe(e) {
  return e.id.startsWith(`task_`) || e.id.startsWith(`shareauto_`)
    ? `task`
    : e.attachments.some((e) => e.kind === `media_generation`)
      ? `image`
      : `post`;
}
async function me() {
  await Promise.all([
    L.safeDelete(`/share/all`, { requestBody: { confirm: !0 } }),
    L.safeDelete(`/shared_textdocs`, {}),
    L.safeDelete(`/share/posts/mine`, {}),
  ]);
}
var he, ge, G, K, q;
function J() {
  return (J = e(() => {
    ((he = M()),
      d(),
      o(),
      h(),
      A(),
      u(),
      E(),
      (ge = P()),
      x(),
      B(),
      z(),
      I(),
      k(),
      j(),
      v(),
      V(),
      f(),
      b(),
      S(),
      N(),
      i(),
      (G = ie()),
      (K = new URL(n).origin),
      (q = `https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq`));
  }))();
}
export { U as n, J as r, W as t };
//# sourceMappingURL=dialog-7ca11e3d5620.js.map
