import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cat as n,
  Cot as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  Tat as s,
  Xot as c,
  Yot as l,
  _O as u,
  cO as d,
  fO as f,
  hrt as p,
  jDt as ee,
  mO as m,
  oO as h,
  t3 as g,
  vO as _,
  vrt as v,
  vzt as y,
  wot as b,
  xMt as x,
  xat as S,
  yzt as C,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Qn as w,
  $an as T,
  AMn as te,
  BIn as E,
  DYn as ne,
  FTr as re,
  GMr as ie,
  ITr as D,
  LIn as ae,
  NTr as oe,
  NZn as se,
  XMr as ce,
  XZn as le,
  Ymr as ue,
  bTn as O,
  con as de,
  dhr as fe,
  don as pe,
  e$n as k,
  ehr as A,
  fon as j,
  gNn as M,
  jMn as N,
  kNn as P,
  lIr as F,
  lhr as me,
  nhr as he,
  pon as ge,
  rhr as _e,
  sIr as I,
  shr as L,
  son as R,
  t$n as z,
  tNr as B,
  uhr as ve,
  xNn as V,
  yTn as H,
  yjn as U,
} from "./app-initial-5851df3f6cb1.js";
import { i as W, t as ye } from "./shared-68e21d781554.js";
import { i as G, n as K, r as be, t as xe } from "./account-pin-query-54fbe3e3c800.js";
function Se(e, t, n, r, i = !0, a = new Set()) {
  let o = e.get(I).pathname,
    c = new Set(e.get(le).filter((t) => e.get(se, t) === n));
  for (let e of a) z(e) && c.add(e);
  for (let [t, r] of e.queryClient.getQueriesData({ queryKey: [`chatgpt-conversation`] }))
    r?.gizmo_id === n &&
      (c.add(w(r.conversation_id)),
      e.queryClient.cancelQueries({ queryKey: t, exact: !0 }),
      e.queryClient.removeQueries({ queryKey: t, exact: !0 }));
  let l = o == null ? null : s(o),
    u = l?.params.conversationId,
    d =
      o != null &&
      (re(o) === n ||
        (l != null && `gizmoId` in l.params && l.params.gizmoId === n) ||
        (u != null && e.get(se, u) === n));
  (r && d && e.get(I).navigate(`/`, { replace: !0, flushSync: i }), j(e, t, n), e.query.invalidate(T));
  for (let t of c) (Ce(e, t), ne(e, t));
  let f = {
    predicate: ({ queryKey: e }) =>
      typeof e[0] == `string` && /file|image|library|thumbnail/.test(e[0]) && e.slice(1).some(p),
  };
  (e.queryClient.cancelQueries(f), e.queryClient.removeQueries(f));
  function p(e) {
    return typeof e == `string`
      ? e === n || c.has(w(e)) || a.has(e)
      : Array.isArray(e)
        ? e.some(p)
        : typeof e == `object` && e
          ? Object.values(e).some(p)
          : !1;
  }
}
function Ce(e, t) {
  (P(e, t, ``), P(e, { conversationId: t, surface: `image-edit` }, ``), M(e, t));
}
function q() {
  return (q = e(() => {
    (F(), V(), k(), U(), D(), R(), n());
  }))();
}
function we(e) {
  let n = (0, De.c)(23),
    o = a(r),
    s;
  n[0] === e.accountId ? (s = n[1]) : ((s = xe(e.accountId)), (n[0] = e.accountId), (n[1] = s));
  let l = e.action.kind === `open`,
    f;
  n[2] !== s || n[3] !== l
    ? ((f = { ...s, enabled: l, staleTime: 0, refetchOnMount: `always`, retryOnMount: !0 }),
      (n[2] = s),
      (n[3] = l),
      (n[4] = f))
    : (f = n[4]);
  let { data: p, isError: ee, isFetchedAfterMount: g, refetch: _ } = c(f, o.queryClient);
  if (e.action.kind !== `open`) {
    let t;
    return (
      n[5] === e ? (t = n[6]) : ((t = (0, X.jsx)(J, { ...e, initialStatus: null })), (n[5] = e), (n[6] = t)),
      t
    );
  }
  if (p != null && g) {
    let t;
    return (
      n[7] !== p || n[8] !== e
        ? ((t = (0, X.jsx)(J, { ...e, initialStatus: p })), (n[7] = p), (n[8] = e), (n[9] = t))
        : (t = n[9]),
      t
    );
  }
  if (!ee) {
    let e;
    return (
      n[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(H, { overlay: !0 })), (n[10] = e))
        : (e = n[10]),
      e
    );
  }
  let v;
  n[11] === e
    ? (v = n[12])
    : ((v = (t) => {
        t || e.onClose();
      }),
      (n[11] = e),
      (n[12] = v));
  let y;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { "aria-describedby": void 0 }), (n[13] = y))
    : (y = n[13]);
  let b;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(d, {
        title: (0, X.jsx)(u, {
          children: (0, X.jsx)(i, {
            id: `lockedChats.title`,
            defaultMessage: `Locked chats`,
            description: `Heading of the PIN-protected chat collection`,
          }),
        }),
      })),
      (n[14] = b))
    : (b = n[14]);
  let x;
  n[15] === _ ? (x = n[16]) : ((x = () => void _()), (n[15] = _), (n[16] = x));
  let S;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, X.jsx)(i, {
        id: `lockedChats.status.retry`,
        defaultMessage: `Try again`,
        description: `Retry checking whether the account has a Locked chats PIN`,
      })),
      (n[17] = S))
    : (S = n[17]);
  let C;
  n[18] === x
    ? (C = n[19])
    : ((C = (0, X.jsxs)(h, { children: [b, (0, X.jsx)(t, { onClick: x, children: S })] })),
      (n[18] = x),
      (n[19] = C));
  let w;
  return (
    n[20] !== v || n[21] !== C
      ? ((w = (0, X.jsx)(m, { open: !0, size: `narrow`, onOpenChange: v, contentProps: y, children: C })),
        (n[20] = v),
        (n[21] = C),
        (n[22] = w))
      : (w = n[22]),
    w
  );
}
function J(e) {
  let t = (0, De.c)(89),
    { action: n, accountId: o, userId: s, onUnlocked: c, onClose: l, initialStatus: u } = e,
    d = a(r),
    [f, ee] = (0, Y.useState)(u),
    [m, h] = (0, Y.useState)(n.kind === `open` && u?.has_pin ? `unlock` : null),
    [g, _] = (0, Y.useState)(``),
    [v, y] = (0, Y.useState)(``),
    [b, x] = (0, Y.useState)(``),
    [C, T] = (0, Y.useState)(null),
    [E, re] = (0, Y.useState)(!1),
    [D, se] = (0, Y.useState)(!1),
    le = (0, Y.useRef)(!0),
    O = (0, Y.useRef)(!1),
    k;
  t[0] !== o || t[1] !== d || t[2] !== s
    ? ((k = () => le.current && d.get(ie) === o && d.get(ce) === s),
      (t[0] = o),
      (t[1] = d),
      (t[2] = s),
      (t[3] = k))
    : (k = t[3]);
  let A = k,
    j,
    M;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = () => (
        (le.current = !0),
        () => {
          le.current = !1;
        }
      )),
      (M = []),
      (t[4] = j),
      (t[5] = M))
    : ((j = t[4]), (M = t[5])),
    (0, Y.useEffect)(j, M));
  let N;
  t[6] !== o || t[7] !== A || t[8] !== d.queryClient
    ? ((N = async function () {
        let e = await d.queryClient.fetchQuery(xe(o));
        return (A() && ee(e), e);
      }),
      (t[6] = o),
      (t[7] = A),
      (t[8] = d.queryClient),
      (t[9] = N))
    : (N = t[9]);
  let P = N,
    F;
  t[10] !== o ||
  t[11] !== n.conversationId ||
  t[12] !== n.kind ||
  t[13] !== A ||
  t[14] !== l ||
  t[15] !== c ||
  t[16] !== d ||
  t[17] !== s
    ? ((F = async function () {
        if (!A()) return;
        let e = d.get(me);
        if (e != null) {
          if (n.kind !== `open`) {
            let t = {
              parameters: { path: { conversation_id: n.conversationId } },
              additionalHeaders: { "ChatGPT-Account-ID": o, "chatgpt-project-id": e.projectId },
              expectedErrorStatuses: [400, 403, 409, 423],
            };
            if (
              (n.kind === `lock`
                ? await ue.safePost(`/conversation/{conversation_id}/lock`, { ...t, requestBody: {} })
                : await ue.safePost(`/conversation/{conversation_id}/unlock_permanently`, t),
              !A())
            )
              return;
            (n.kind === `lock` ? ve(e.projectId, [n.conversationId]) : _e(n.conversationId),
              te({ includePersisted: !0 }).catch(Ee),
              Ce(d, n.conversationId),
              ge(d, n.conversationId),
              pe(d, n.conversationId, n.kind === `lock` ? `remove` : `refresh`),
              ne(d, w(n.conversationId)),
              await d.queryClient.cancelQueries({ queryKey: [`chatgpt-conversation`, n.conversationId] }),
              d.queryClient.removeQueries({ queryKey: [`chatgpt-conversation`, n.conversationId] }),
              de(d));
            let r = { queryKey: [`chatgpt-images`, `history`, o, s] };
            (n.kind === `lock` &&
              d.queryClient.setQueriesData(r, (e) =>
                e == null
                  ? e
                  : {
                      ...e,
                      pages: e.pages.map((e) => ({
                        ...e,
                        items: e.items.filter((e) => e.conversation_id !== n.conversationId),
                      })),
                    },
              ),
              d.queryClient.invalidateQueries(r),
              d.queryClient.invalidateQueries({ queryKey: [`chatgpt-project-conversations`] }));
          }
          A() &&
            (l(),
            c == null
              ? d
                  .get(I)
                  .navigate(
                    n.kind === `open`
                      ? oe(e.projectId)
                      : S(n.conversationId, { gizmoId: n.kind === `lock` ? e.projectId : null }),
                  )
              : c());
        }
      }),
      (t[10] = o),
      (t[11] = n.conversationId),
      (t[12] = n.kind),
      (t[13] = A),
      (t[14] = l),
      (t[15] = c),
      (t[16] = d),
      (t[17] = s),
      (t[18] = F))
    : (F = t[18]);
  let L = F,
    R;
  if (
    t[19] !== o ||
    t[20] !== b ||
    t[21] !== A ||
    t[22] !== g ||
    t[23] !== L ||
    t[24] !== v ||
    t[25] !== P ||
    t[26] !== d ||
    t[27] !== m ||
    t[28] !== s
  ) {
    R = function (t) {
      !O.current &&
        A() &&
        ((O.current = !0),
        se(!0),
        T(null),
        re(!1),
        e(t).finally(() => {
          ((O.current = !1), A() && se(!1));
        }));
    };
    async function e(e) {
      try {
        if (m == null) {
          if (d.get(me) != null) await L();
          else {
            let e = await P();
            A() && h(e.has_pin ? `unlock` : `create`);
          }
          return;
        }
        let t = v;
        if ((m === `unlock` ? (t = e ?? g) : m === `create` && (t = e ?? v), !/^\d{4}$/.test(t))) {
          T(`invalid`);
          return;
        }
        if (m === `create`) {
          (y(t), x(``), h(`create-confirm`));
          return;
        }
        let n = e ?? b;
        if (m === `create-confirm` && v !== n) {
          (x(``), T(`mismatch`));
          return;
        }
        let r = await ue.safePost(`/locked_chats/unlock`, {
          requestBody: { pin: t, pin_confirmation: m === `create-confirm` ? n : void 0 },
          additionalHeaders: { "ChatGPT-Account-ID": o },
          expectedErrorStatuses: [400, 403, 409, 423, 429],
        });
        if (!A()) return;
        if (r.project_id == null) {
          T(`failed`);
          return;
        }
        let i = r.project_id,
          a = { queryKey: [ae, i] };
        if (
          (await d.queryClient.cancelQueries(a),
          !A() ||
            (d.queryClient.removeQueries(a),
            !fe(d, { accountId: o, userId: s, projectId: i }, t, (e, t, n) => Se(d, o, i, e, t, n))))
        )
          return;
        (d.queryClient.setQueryData(xe(o).queryKey, r), _(``), y(``), x(``), h(null), await L());
      } catch (e) {
        let t = e;
        if (!A()) return;
        _(``);
        let n = t instanceof p ? t.errorCode : null,
          r = `failed`;
        (n === `invalid_pin` ? (r = `incorrect`) : n === `pin_locked` && (r = `locked`),
          (n === `invalid_pin` || n === `pin_locked`) && (he(d, { navigateAway: !1 }), h(`unlock`)),
          T(r),
          re(n === `conversation_not_lockable`),
          n === `pin_locked` && P().catch(Te));
      }
    }
    ((t[19] = o),
      (t[20] = b),
      (t[21] = A),
      (t[22] = g),
      (t[23] = L),
      (t[24] = v),
      (t[25] = P),
      (t[26] = d),
      (t[27] = m),
      (t[28] = s),
      (t[29] = R));
  } else R = t[29];
  if (m != null) {
    let e = f?.pin_lockout_retry_after_seconds ?? 0,
      n;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = () => T(null)), (t[30] = n)) : (n = t[30]);
    let r;
    t[31] !== A || t[32] !== P
      ? ((r = () => {
          P()
            .then(() => {
              A() && T(null);
            })
            .catch(() => {
              A() && T(`failed`);
            });
        }),
        (t[31] = A),
        (t[32] = P),
        (t[33] = r))
      : (r = t[33]);
    let i;
    t[34] !== l || t[35] !== d
      ? ((i = () => {
          (l(), d.get(I).navigate(`/settings/security?view=account-pin`));
        }),
        (t[34] = l),
        (t[35] = d),
        (t[36] = i))
      : (i = t[36]);
    let a;
    return (
      t[37] !== b ||
      t[38] !== g ||
      t[39] !== C ||
      t[40] !== v ||
      t[41] !== l ||
      t[42] !== D ||
      t[43] !== m ||
      t[44] !== R ||
      t[45] !== e ||
      t[46] !== r ||
      t[47] !== i
        ? ((a = (0, X.jsx)(be, {
            step: m,
            currentPin: g,
            nextPin: v,
            confirmation: b,
            error: C,
            lockedFor: e,
            isPending: D,
            onCurrentPinChange: _,
            onNextPinChange: y,
            onConfirmationChange: x,
            onClearError: n,
            onLockoutExpired: r,
            onSubmit: R,
            onClose: l,
            onForgotPin: i,
          })),
          (t[37] = b),
          (t[38] = g),
          (t[39] = C),
          (t[40] = v),
          (t[41] = l),
          (t[42] = D),
          (t[43] = m),
          (t[44] = R),
          (t[45] = e),
          (t[46] = r),
          (t[47] = i),
          (t[48] = a))
        : (a = t[48]),
      a
    );
  }
  let z;
  t[49] === n.kind
    ? (z = t[50])
    : ((z =
        n.kind === `lock`
          ? (0, X.jsx)(i, {
              id: `lockedChats.dialog.lockTitle`,
              defaultMessage: `Lock this chat?`,
              description: `Confirmation title before moving a conversation into Locked chats`,
            })
          : null),
      (t[49] = n.kind),
      (t[50] = z));
  let B;
  t[51] === n.kind
    ? (B = t[52])
    : ((B =
        n.kind === `unlock`
          ? (0, X.jsx)(i, {
              id: `lockedChats.dialog.unlockTitle`,
              defaultMessage: `Unlock this chat?`,
              description: `Confirmation title before removing PIN protection from a conversation`,
            })
          : null),
      (t[51] = n.kind),
      (t[52] = B));
  let V;
  t[53] === n.kind
    ? (V = t[54])
    : ((V =
        n.kind === `open`
          ? (0, X.jsx)(i, {
              id: `lockedChats.dialog.title`,
              defaultMessage: `Lock sensitive chats`,
              description: `Title of the dialog for accessing or changing Locked chats`,
            })
          : null),
      (t[53] = n.kind),
      (t[54] = V));
  let H;
  t[55] !== z || t[56] !== B || t[57] !== V
    ? ((H = (0, X.jsxs)(X.Fragment, { children: [z, B, V] })),
      (t[55] = z),
      (t[56] = B),
      (t[57] = V),
      (t[58] = H))
    : (H = t[58]);
  let U;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, X.jsx)(i, {
        id: `lockedChats.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss the Locked chats dialog`,
      })),
      (t[59] = U))
    : (U = t[59]);
  let W;
  t[60] === n.kind
    ? (W = t[61])
    : ((W =
        n.kind === `lock`
          ? (0, X.jsx)(i, {
              id: `lockedChats.lock`,
              defaultMessage: `Lock chat`,
              description: `Move this conversation into Locked chats`,
            })
          : null),
      (t[60] = n.kind),
      (t[61] = W));
  let G;
  t[62] === n.kind
    ? (G = t[63])
    : ((G =
        n.kind === `unlock`
          ? (0, X.jsx)(i, {
              id: `lockedChats.unlock`,
              defaultMessage: `Unlock chat`,
              description: `Remove this conversation from Locked chats`,
            })
          : null),
      (t[62] = n.kind),
      (t[63] = G));
  let K;
  t[64] === n.kind
    ? (K = t[65])
    : ((K =
        n.kind === `open`
          ? (0, X.jsx)(i, {
              id: `settingsModal.accountPin.createPin.button`,
              defaultMessage: `Create a PIN`,
              description: `Button to start creating an account PIN for locked chats.`,
            })
          : null),
      (t[64] = n.kind),
      (t[65] = K));
  let q;
  t[66] !== W || t[67] !== G || t[68] !== K
    ? ((q = (0, X.jsxs)(X.Fragment, { children: [W, G, K] })),
      (t[66] = W),
      (t[67] = G),
      (t[68] = K),
      (t[69] = q))
    : (q = t[69]);
  let we = C != null,
    J;
  t[70] === E
    ? (J = t[71])
    : ((J = E
        ? (0, X.jsx)(i, {
            id: `lockedChats.dialog.notLockable`,
            defaultMessage: `This chat cannot be locked. If it has scheduled tasks, delete them first`,
            description: `Error when the server refuses to lock a chat, including chats with scheduled tasks`,
          })
        : (0, X.jsx)(i, {
            id: `lockedChats.dialog.failed`,
            defaultMessage: `Locked chats are temporarily unavailable. Try again.`,
            description: `Retryable error accessing Locked chats or changing a chat's protection`,
          })),
      (t[70] = E),
      (t[71] = J));
  let Z;
  t[72] === n.kind
    ? (Z = t[73])
    : ((Z =
        n.kind === `unlock`
          ? (0, X.jsx)(i, {
              id: `lockedChats.dialog.unlockDescription`,
              defaultMessage: `This chat will be removed from Locked Chats and shown in your sidebar.`,
              description: `Confirmation before permanently removing PIN protection from a chat`,
            })
          : null),
      (t[72] = n.kind),
      (t[73] = Z));
  let Q;
  t[74] === n.kind
    ? (Q = t[75])
    : ((Q =
        n.kind === `lock`
          ? (0, X.jsx)(i, {
              id: `lockedChats.dialog.lockDescription`,
              defaultMessage: `This chat will be hidden from recent chats and search. Find it anytime in Projects → Locked chats.`,
              description: `Explains where to find a conversation after locking it`,
            })
          : null),
      (t[74] = n.kind),
      (t[75] = Q));
  let $;
  t[76] === n.kind
    ? ($ = t[77])
    : (($ =
        n.kind === `open`
          ? (0, X.jsx)(i, {
              id: `lockedChats.dialog.description`,
              defaultMessage: `Create a PIN to lock and hide the chats you choose. Once locked, new messages in that chat won’t contribute to memory.`,
              description: `Explanation before creating or entering the PIN for Locked chats`,
            })
          : null),
      (t[76] = n.kind),
      (t[77] = $));
  let Oe;
  return (
    t[78] !== l ||
    t[79] !== D ||
    t[80] !== R ||
    t[81] !== q ||
    t[82] !== we ||
    t[83] !== J ||
    t[84] !== Z ||
    t[85] !== Q ||
    t[86] !== $ ||
    t[87] !== H
      ? ((Oe = (0, X.jsxs)(ye, {
          title: H,
          cancelLabel: U,
          confirmLabel: q,
          confirmColor: `primary`,
          onConfirm: R,
          onClose: l,
          isPending: D,
          isError: we,
          errorMessage: J,
          children: [Z, Q, $],
        })),
        (t[78] = l),
        (t[79] = D),
        (t[80] = R),
        (t[81] = q),
        (t[82] = we),
        (t[83] = J),
        (t[84] = Z),
        (t[85] = Q),
        (t[86] = $),
        (t[87] = H),
        (t[88] = Oe))
      : (Oe = t[88]),
    Oe
  );
}
function Te() {}
function Ee() {}
var De, Y, X;
function Z() {
  return (Z = e(() => {
    ((De = y()),
      l(),
      o(),
      (Y = C()),
      ee(),
      F(),
      B(),
      E(),
      A(),
      k(),
      U(),
      N(),
      L(),
      D(),
      R(),
      n(),
      g(),
      _(),
      f(),
      O(),
      b(),
      G(),
      K(),
      W(),
      v(),
      q(),
      (X = x()));
  }))();
}
export { Z as n, we as t };
//# sourceMappingURL=dialog-d237ad47e2b6.js.map
