import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  Got as i,
  HO as a,
  IO as o,
  JO as s,
  LNt as c,
  Mst as l,
  PBt as u,
  Pit as ee,
  Qst as d,
  RO as f,
  Uot as p,
  Vot as m,
  WO as h,
  XOt as g,
  Y3 as _,
  Z3 as v,
  ZSt as y,
  jit as b,
  jst as x,
  qO as S,
  tkt as C,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $In as w,
  $kr as T,
  ARr as te,
  Air as E,
  BIn as ne,
  BRr as re,
  C0n as D,
  D2n as ie,
  GIn as ae,
  HOn as oe,
  IRr as se,
  LRr as ce,
  Mir as O,
  O2n as k,
  PRr as A,
  Qln as j,
  RRr as le,
  UOn as M,
  VPn as N,
  Zkr as ue,
  dBn as de,
  dun as P,
  e$n as fe,
  eAr as F,
  eIn as pe,
  fun as me,
  iBn as he,
  iRr as ge,
  k2n as I,
  kRr as _e,
  mBn as L,
  o0n as R,
  oun as z,
  sun as ve,
  tIn as B,
  tyr as V,
  uun as ye,
  wLr as H,
  zRr as be,
} from "./app-initial-ad16eaadf81f.js";
import { i as U, t as xe } from "./shared-30e89022d7a8.js";
import { i as W, n as G, r as Se, t as Ce } from "./account-pin-query-180628ba8891.js";
function we(e, t, n, r, a = !0, o = new Set()) {
  let s = e.get(E).pathname,
    c = new Set(e.get(D).filter((t) => e.get(R, t) === n));
  for (let e of o) I(e) && c.add(e);
  for (let [t, r] of e.queryClient.getQueriesData({ queryKey: [`chatgpt-conversation`] }))
    r?.gizmo_id === n &&
      (c.add(ie(r.conversation_id)),
      e.queryClient.cancelQueries({ queryKey: t, exact: !0 }),
      e.queryClient.removeQueries({ queryKey: t, exact: !0 }));
  let l = s == null ? null : i(s),
    u = l?.params.conversationId,
    ee =
      s != null &&
      (T(s) === n ||
        (l != null && `gizmoId` in l.params && l.params.gizmoId === n) ||
        (u != null && e.get(R, u) === n));
  (r && ee && e.get(E).navigate(`/`, { replace: !0, flushSync: a }),
    P(e, t, n),
    e.query.invalidate(he),
    e.query.invalidate(j));
  for (let t of c) (Te(e, t), fe(e, t));
  let d = {
    predicate: ({ queryKey: e }) =>
      typeof e[0] == `string` && /file|image|library|thumbnail/.test(e[0]) && e.slice(1).some(f),
  };
  (e.queryClient.cancelQueries(d), e.queryClient.removeQueries(d));
  function f(e) {
    return typeof e == `string`
      ? e === n || c.has(ie(e)) || o.has(e)
      : Array.isArray(e)
        ? e.some(f)
        : typeof e == `object` && e
          ? Object.values(e).some(f)
          : !1;
  }
}
function Te(e, t) {
  (w(e, t, ``), w(e, { conversationId: t, surface: `image-edit` }, ``), ne(e, t));
}
function K() {
  return (K = e(() => {
    (O(), ae(), k(), N(), F(), z(), p());
  }))();
}
function q(e) {
  let n = (0, Oe.c)(23),
    r = t(d),
    i;
  n[0] === e.accountId ? (i = n[1]) : ((i = Ce(e.accountId)), (n[0] = e.accountId), (n[1] = i));
  let a = e.action.kind === `open`,
    s;
  n[2] !== i || n[3] !== a
    ? ((s = { ...i, enabled: a, staleTime: 0, refetchOnMount: `always`, retryOnMount: !0 }),
      (n[2] = i),
      (n[3] = a),
      (n[4] = s))
    : (s = n[4]);
  let { data: c, isError: u, isFetchedAfterMount: ee, refetch: p } = l(s, r.queryClient);
  if (e.action.kind !== `open`) {
    let t;
    return (
      n[5] === e ? (t = n[6]) : ((t = (0, X.jsx)(J, { ...e, initialStatus: null })), (n[5] = e), (n[6] = t)),
      t
    );
  }
  if (c != null && ee) {
    let t;
    return (
      n[7] !== c || n[8] !== e
        ? ((t = (0, X.jsx)(J, { ...e, initialStatus: c })), (n[7] = c), (n[8] = e), (n[9] = t))
        : (t = n[9]),
      t
    );
  }
  if (!u) {
    let e;
    return (
      n[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(oe, { overlay: !0 })), (n[10] = e))
        : (e = n[10]),
      e
    );
  }
  let m;
  n[11] === e
    ? (m = n[12])
    : ((m = (t) => {
        t || e.onClose();
      }),
      (n[11] = e),
      (n[12] = m));
  let g;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = { "aria-describedby": void 0 }), (n[13] = g))
    : (g = n[13]);
  let v;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(f, {
        title: (0, X.jsx)(S, {
          children: (0, X.jsx)(C, {
            id: `lockedChats.title`,
            defaultMessage: `Locked chats`,
            description: `Heading of the PIN-protected chat collection`,
          }),
        }),
      })),
      (n[14] = v))
    : (v = n[14]);
  let y;
  n[15] === p ? (y = n[16]) : ((y = () => void p()), (n[15] = p), (n[16] = y));
  let b;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(C, {
        id: `lockedChats.status.retry`,
        defaultMessage: `Try again`,
        description: `Retry checking whether the account has a Locked chats PIN`,
      })),
      (n[17] = b))
    : (b = n[17]);
  let x;
  n[18] === y
    ? (x = n[19])
    : ((x = (0, X.jsxs)(o, { children: [v, (0, X.jsx)(_, { onClick: y, children: b })] })),
      (n[18] = y),
      (n[19] = x));
  let w;
  return (
    n[20] !== m || n[21] !== x
      ? ((w = (0, X.jsx)(h, { open: !0, size: `narrow`, onOpenChange: m, contentProps: g, children: x })),
        (n[20] = m),
        (n[21] = x),
        (n[22] = w))
      : (w = n[22]),
    w
  );
}
function J(e) {
  let n = (0, Oe.c)(89),
    { action: r, accountId: i, userId: a, onUnlocked: o, onClose: s, initialStatus: c } = e,
    l = t(d),
    [u, ee] = (0, Y.useState)(c),
    [f, p] = (0, Y.useState)(r.kind === `open` && c?.has_pin ? `unlock` : null),
    [h, g] = (0, Y.useState)(``),
    [_, v] = (0, Y.useState)(``),
    [y, x] = (0, Y.useState)(``),
    [S, w] = (0, Y.useState)(null),
    [T, ne] = (0, Y.useState)(!1),
    [D, ae] = (0, Y.useState)(!1),
    oe = (0, Y.useRef)(!0),
    O = (0, Y.useRef)(!1),
    k;
  n[0] !== i || n[1] !== l || n[2] !== a
    ? ((k = () => oe.current && l.get(be) === i && l.get(re) === a),
      (n[0] = i),
      (n[1] = l),
      (n[2] = a),
      (n[3] = k))
    : (k = n[3]);
  let A = k,
    j,
    M;
  (n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = () => (
        (oe.current = !0),
        () => {
          oe.current = !1;
        }
      )),
      (M = []),
      (n[4] = j),
      (n[5] = M))
    : ((j = n[4]), (M = n[5])),
    (0, Y.useEffect)(j, M));
  let N;
  n[6] !== i || n[7] !== A || n[8] !== l.queryClient
    ? ((N = async function () {
        let e = await l.queryClient.fetchQuery(Ce(i));
        return (A() && ee(e), e);
      }),
      (n[6] = i),
      (n[7] = A),
      (n[8] = l.queryClient),
      (n[9] = N))
    : (N = n[9]);
  let P = N,
    F;
  n[10] !== i ||
  n[11] !== r.conversationId ||
  n[12] !== r.kind ||
  n[13] !== A ||
  n[14] !== s ||
  n[15] !== o ||
  n[16] !== l ||
  n[17] !== a
    ? ((F = async function () {
        if (!A()) return;
        let e = l.get(se);
        if (e != null) {
          if (r.kind !== `open`) {
            let t = {
              parameters: { path: { conversation_id: r.conversationId } },
              additionalHeaders: { "ChatGPT-Account-ID": i, "chatgpt-project-id": e.projectId },
              expectedErrorStatuses: [400, 403, 409, 423],
            };
            if (
              (r.kind === `lock`
                ? await ge.safePost(`/conversation/{conversation_id}/lock`, { ...t, requestBody: {} })
                : await ge.safePost(`/conversation/{conversation_id}/unlock_permanently`, t),
              !A())
            )
              return;
            (r.kind === `lock` ? ce(e.projectId, [r.conversationId]) : te(r.conversationId),
              pe({ includePersisted: !0 }).catch(De),
              Te(l, r.conversationId),
              me(l, r.conversationId),
              ye(l, r.conversationId, r.kind === `lock` ? `remove` : `refresh`),
              fe(l, ie(r.conversationId)),
              await l.queryClient.cancelQueries({ queryKey: [`chatgpt-conversation`, r.conversationId] }),
              l.queryClient.removeQueries({ queryKey: [`chatgpt-conversation`, r.conversationId] }),
              ve(l));
            let n = { queryKey: [`chatgpt-images`, `history`, i, a] };
            (r.kind === `lock` &&
              l.queryClient.setQueriesData(n, (e) =>
                e == null
                  ? e
                  : {
                      ...e,
                      pages: e.pages.map((e) => ({
                        ...e,
                        items: e.items.filter((e) => e.conversation_id !== r.conversationId),
                      })),
                    },
              ),
              l.queryClient.invalidateQueries(n),
              l.queryClient.invalidateQueries({ queryKey: [`chatgpt-project-conversations`] }));
          }
          A() &&
            (s(),
            o == null
              ? l
                  .get(E)
                  .navigate(
                    r.kind === `open`
                      ? ue(e.projectId)
                      : m(r.conversationId, { gizmoId: r.kind === `lock` ? e.projectId : null }),
                  )
              : o());
        }
      }),
      (n[10] = i),
      (n[11] = r.conversationId),
      (n[12] = r.kind),
      (n[13] = A),
      (n[14] = s),
      (n[15] = o),
      (n[16] = l),
      (n[17] = a),
      (n[18] = F))
    : (F = n[18]);
  let I = F,
    L;
  if (
    n[19] !== i ||
    n[20] !== y ||
    n[21] !== A ||
    n[22] !== h ||
    n[23] !== I ||
    n[24] !== _ ||
    n[25] !== P ||
    n[26] !== l ||
    n[27] !== f ||
    n[28] !== a
  ) {
    L = function (t) {
      !O.current &&
        A() &&
        ((O.current = !0),
        ae(!0),
        w(null),
        ne(!1),
        e(t).finally(() => {
          ((O.current = !1), A() && ae(!1));
        }));
    };
    async function e(e) {
      try {
        if (f == null) {
          if (l.get(se) != null) await I();
          else {
            let e = await P();
            A() && p(e.has_pin ? `unlock` : `create`);
          }
          return;
        }
        let t = _;
        if ((f === `unlock` ? (t = e ?? h) : f === `create` && (t = e ?? _), !/^\d{4}$/.test(t))) {
          w(`invalid`);
          return;
        }
        if (f === `create`) {
          (v(t), x(``), p(`create-confirm`));
          return;
        }
        let n = e ?? y;
        if (f === `create-confirm` && _ !== n) {
          (x(``), w(`mismatch`));
          return;
        }
        let r = await ge.safePost(`/locked_chats/unlock`, {
          requestBody: { pin: t, pin_confirmation: f === `create-confirm` ? n : void 0 },
          additionalHeaders: { "ChatGPT-Account-ID": i },
          expectedErrorStatuses: [400, 403, 409, 423, 429],
        });
        if (!A()) return;
        if (r.project_id == null) {
          w(`failed`);
          return;
        }
        let o = r.project_id,
          s = { queryKey: [de, o] };
        if (
          (await l.queryClient.cancelQueries(s),
          !A() ||
            (l.queryClient.removeQueries(s),
            !le(l, { accountId: i, userId: a, projectId: o }, t, (e, t, n) => we(l, i, o, e, t, n))))
        )
          return;
        (l.queryClient.setQueryData(Ce(i).queryKey, r),
          g(``),
          f === `create-confirm` && l.query.invalidate(he),
          v(``),
          x(``),
          p(null),
          await I());
      } catch (e) {
        let t = e;
        if (!A()) return;
        g(``);
        let n = t instanceof b ? t.errorCode : null,
          r = `failed`;
        (n === `invalid_pin` ? (r = `incorrect`) : n === `pin_locked` && (r = `locked`),
          (n === `invalid_pin` || n === `pin_locked`) && (_e(l, { navigateAway: !1 }), p(`unlock`)),
          w(r),
          ne(n === `conversation_not_lockable`),
          n === `pin_locked` && P().catch(Ee));
      }
    }
    ((n[19] = i),
      (n[20] = y),
      (n[21] = A),
      (n[22] = h),
      (n[23] = I),
      (n[24] = _),
      (n[25] = P),
      (n[26] = l),
      (n[27] = f),
      (n[28] = a),
      (n[29] = L));
  } else L = n[29];
  if (f != null) {
    let e = u?.pin_lockout_retry_after_seconds ?? 0,
      t;
    n[30] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = () => w(null)), (n[30] = t)) : (t = n[30]);
    let r;
    n[31] !== A || n[32] !== P
      ? ((r = () => {
          P()
            .then(() => {
              A() && w(null);
            })
            .catch(() => {
              A() && w(`failed`);
            });
        }),
        (n[31] = A),
        (n[32] = P),
        (n[33] = r))
      : (r = n[33]);
    let i;
    n[34] !== s || n[35] !== l
      ? ((i = () => {
          (s(), l.get(E).navigate(`/settings/security?view=account-pin`));
        }),
        (n[34] = s),
        (n[35] = l),
        (n[36] = i))
      : (i = n[36]);
    let a;
    return (
      n[37] !== y ||
      n[38] !== h ||
      n[39] !== S ||
      n[40] !== _ ||
      n[41] !== s ||
      n[42] !== D ||
      n[43] !== f ||
      n[44] !== L ||
      n[45] !== e ||
      n[46] !== r ||
      n[47] !== i
        ? ((a = (0, X.jsx)(Se, {
            step: f,
            currentPin: h,
            nextPin: _,
            confirmation: y,
            error: S,
            lockedFor: e,
            isPending: D,
            onCurrentPinChange: g,
            onNextPinChange: v,
            onConfirmationChange: x,
            onClearError: t,
            onLockoutExpired: r,
            onSubmit: L,
            onClose: s,
            onForgotPin: i,
          })),
          (n[37] = y),
          (n[38] = h),
          (n[39] = S),
          (n[40] = _),
          (n[41] = s),
          (n[42] = D),
          (n[43] = f),
          (n[44] = L),
          (n[45] = e),
          (n[46] = r),
          (n[47] = i),
          (n[48] = a))
        : (a = n[48]),
      a
    );
  }
  let R;
  n[49] === r.kind
    ? (R = n[50])
    : ((R =
        r.kind === `lock`
          ? (0, X.jsx)(C, {
              id: `lockedChats.dialog.lockTitle`,
              defaultMessage: `Lock this chat?`,
              description: `Confirmation title before moving a conversation into Locked chats`,
            })
          : null),
      (n[49] = r.kind),
      (n[50] = R));
  let z;
  n[51] === r.kind
    ? (z = n[52])
    : ((z =
        r.kind === `unlock`
          ? (0, X.jsx)(C, {
              id: `lockedChats.dialog.unlockTitle`,
              defaultMessage: `Unlock this chat?`,
              description: `Confirmation title before removing PIN protection from a conversation`,
            })
          : null),
      (n[51] = r.kind),
      (n[52] = z));
  let B;
  n[53] === r.kind
    ? (B = n[54])
    : ((B =
        r.kind === `open`
          ? (0, X.jsx)(C, {
              id: `lockedChats.dialog.title`,
              defaultMessage: `Lock sensitive chats`,
              description: `Title of the dialog for accessing or changing Locked chats`,
            })
          : null),
      (n[53] = r.kind),
      (n[54] = B));
  let V;
  n[55] !== R || n[56] !== z || n[57] !== B
    ? ((V = (0, X.jsxs)(X.Fragment, { children: [R, z, B] })),
      (n[55] = R),
      (n[56] = z),
      (n[57] = B),
      (n[58] = V))
    : (V = n[58]);
  let H;
  n[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, X.jsx)(C, {
        id: `lockedChats.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss the Locked chats dialog`,
      })),
      (n[59] = H))
    : (H = n[59]);
  let U;
  n[60] === r.kind
    ? (U = n[61])
    : ((U =
        r.kind === `lock`
          ? (0, X.jsx)(C, {
              id: `lockedChats.lock`,
              defaultMessage: `Lock chat`,
              description: `Move this conversation into Locked chats`,
            })
          : null),
      (n[60] = r.kind),
      (n[61] = U));
  let W;
  n[62] === r.kind
    ? (W = n[63])
    : ((W =
        r.kind === `unlock`
          ? (0, X.jsx)(C, {
              id: `lockedChats.unlock`,
              defaultMessage: `Unlock chat`,
              description: `Remove this conversation from Locked chats`,
            })
          : null),
      (n[62] = r.kind),
      (n[63] = W));
  let G;
  n[64] === r.kind
    ? (G = n[65])
    : ((G =
        r.kind === `open`
          ? (0, X.jsx)(C, {
              id: `settingsModal.accountPin.createPin.button`,
              defaultMessage: `Create a PIN`,
              description: `Button to start creating an account PIN for locked chats.`,
            })
          : null),
      (n[64] = r.kind),
      (n[65] = G));
  let K;
  n[66] !== U || n[67] !== W || n[68] !== G
    ? ((K = (0, X.jsxs)(X.Fragment, { children: [U, W, G] })),
      (n[66] = U),
      (n[67] = W),
      (n[68] = G),
      (n[69] = K))
    : (K = n[69]);
  let q = S != null,
    J;
  n[70] === T
    ? (J = n[71])
    : ((J = T
        ? (0, X.jsx)(C, {
            id: `lockedChats.dialog.notLockable`,
            defaultMessage: `This chat cannot be locked. If it has scheduled tasks, delete them first`,
            description: `Error when the server refuses to lock a chat, including chats with scheduled tasks`,
          })
        : (0, X.jsx)(C, {
            id: `lockedChats.dialog.failed`,
            defaultMessage: `Locked chats are temporarily unavailable. Try again.`,
            description: `Retryable error accessing Locked chats or changing a chat's protection`,
          })),
      (n[70] = T),
      (n[71] = J));
  let Z;
  n[72] === r.kind
    ? (Z = n[73])
    : ((Z =
        r.kind === `unlock`
          ? (0, X.jsx)(C, {
              id: `lockedChats.dialog.unlockDescription`,
              defaultMessage: `This chat will be removed from Locked Chats and shown in your sidebar.`,
              description: `Confirmation before permanently removing PIN protection from a chat`,
            })
          : null),
      (n[72] = r.kind),
      (n[73] = Z));
  let Q;
  n[74] === r.kind
    ? (Q = n[75])
    : ((Q =
        r.kind === `lock`
          ? (0, X.jsx)(C, {
              id: `lockedChats.dialog.lockDescription`,
              defaultMessage: `This chat will be hidden from recent chats and search. Find it anytime in Projects → Locked chats.`,
              description: `Explains where to find a conversation after locking it`,
            })
          : null),
      (n[74] = r.kind),
      (n[75] = Q));
  let $;
  n[76] === r.kind
    ? ($ = n[77])
    : (($ =
        r.kind === `open`
          ? (0, X.jsx)(C, {
              id: `lockedChats.dialog.description`,
              defaultMessage: `Create a PIN to lock and hide the chats you choose. Once locked, new messages in that chat won’t contribute to memory.`,
              description: `Explanation before creating or entering the PIN for Locked chats`,
            })
          : null),
      (n[76] = r.kind),
      (n[77] = $));
  let ke;
  return (
    n[78] !== s ||
    n[79] !== D ||
    n[80] !== L ||
    n[81] !== K ||
    n[82] !== q ||
    n[83] !== J ||
    n[84] !== Z ||
    n[85] !== Q ||
    n[86] !== $ ||
    n[87] !== V
      ? ((ke = (0, X.jsxs)(xe, {
          title: V,
          cancelLabel: H,
          confirmLabel: K,
          confirmColor: `primary`,
          onConfirm: L,
          onClose: s,
          isPending: D,
          isError: q,
          errorMessage: J,
          children: [Z, Q, $],
        })),
        (n[78] = s),
        (n[79] = D),
        (n[80] = L),
        (n[81] = K),
        (n[82] = q),
        (n[83] = J),
        (n[84] = Z),
        (n[85] = Q),
        (n[86] = $),
        (n[87] = V),
        (n[88] = ke))
      : (ke = n[88]),
    ke
  );
}
function Ee() {}
function De() {}
var Oe, Y, X;
function Z() {
  return (Z = e(() => {
    ((Oe = u()),
      x(),
      y(),
      (Y = r()),
      g(),
      O(),
      H(),
      L(),
      V(),
      k(),
      N(),
      B(),
      A(),
      F(),
      z(),
      p(),
      v(),
      s(),
      a(),
      M(),
      n(),
      W(),
      G(),
      U(),
      ee(),
      K(),
      (X = c()));
  }))();
}
export { Z as n, q as t };
//# sourceMappingURL=dialog-25b30a1a0d4f.js.map
