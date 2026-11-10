import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  DB as t,
  FBt as n,
  HO as r,
  IO as i,
  JO as a,
  LNt as o,
  OB as s,
  Ost as c,
  PBt as l,
  RO as u,
  WO as d,
  XOt as f,
  Y3 as ee,
  YOt as p,
  Z3 as m,
  ia as te,
  qO as ne,
  ra as h,
  tkt as g,
  zO as re,
} from "./app-shared-2feb3d4c6fcc.js";
import { iRr as _, tyr as v } from "./app-initial-ad16eaadf81f.js";
import { i as y, t as ie } from "./shared-30e89022d7a8.js";
var b, x, S, C, w;
function T() {
  return (T = e(() => {
    ((b = `_field_1wl8q_2`),
      (x = `_input_1wl8q_2`),
      (S = `_slots_1wl8q_2`),
      (C = `_slot_1wl8q_2`),
      (w = { field: b, input: x, slots: S, slot: C }));
  }))();
}
function ae(e) {
  let t = (0, E.c)(14),
    { id: n, value: r, readOnly: i, invalid: a, onChange: o } = e,
    s = a || void 0,
    c;
  t[0] === o
    ? (c = t[1])
    : ((c = (e) => {
        /^[0-9]{0,4}$/.test(e.target.value) && o(e.target.value);
      }),
      (t[0] = o),
      (t[1] = c));
  let l;
  t[2] !== n || t[3] !== i || t[4] !== s || t[5] !== c || t[6] !== r
    ? ((l = (0, D.jsx)(`input`, {
        id: n,
        className: w.input,
        type: `password`,
        inputMode: `numeric`,
        autoComplete: `off`,
        "data-1p-ignore": !0,
        "data-lpignore": `true`,
        spellCheck: !1,
        autoFocus: !0,
        maxLength: 4,
        value: r,
        readOnly: i,
        "aria-invalid": s,
        onChange: c,
      })),
      (t[2] = n),
      (t[3] = i),
      (t[4] = s),
      (t[5] = c),
      (t[6] = r),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = [0, 1, 2, 3]), (t[8] = u)) : (u = t[8]);
  let d;
  t[9] === r
    ? (d = t[10])
    : ((d = (0, D.jsx)(`div`, {
        className: w.slots,
        "aria-hidden": `true`,
        children: u.map((e) =>
          (0, D.jsx)(
            `span`,
            { className: w.slot, "data-active": e === Math.min(r.length, 3), "data-filled": e < r.length },
            e,
          ),
        ),
      })),
      (t[9] = r),
      (t[10] = d));
  let f;
  return (
    t[11] !== l || t[12] !== d
      ? ((f = (0, D.jsxs)(`div`, { className: w.field, children: [l, d] })),
        (t[11] = l),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
var E, D;
function O() {
  return (O = e(() => {
    ((E = l()), T(), (D = o()));
  }))();
}
var k, A;
function j() {
  return (j = e(() => {
    (f(),
      (k = p({
        title: {
          id: `settingsModal.accountPin.title`,
          defaultMessage: `Account PIN`,
          description: `Title of the Account PIN settings subpage for locked chats. This PIN does not control sign-in.`,
        },
        rowDescription: {
          id: `settingsModal.accountPin.rowDescription.access`,
          defaultMessage: `Control how you access your locked chats.`,
          description: `Account PIN controls access to locked chats, not sign-in or unrelated account information.`,
        },
        createPinLabel: {
          id: `settingsModal.accountPin.createPin.label`,
          defaultMessage: `Create account PIN`,
          description: `Label for creating a PIN to access locked chats when the user has no PIN.`,
        },
        createPinDescription: {
          id: `settingsModal.accountPin.createPin.description.new_messages`,
          defaultMessage: `Create a PIN to lock and hide the chats you choose. Once locked, new messages in that chat won’t contribute to memory.`,
          description: `Explanation of selected locked chats and personalization of new messages.`,
        },
        createPinButton: {
          id: `settingsModal.accountPin.createPin.button`,
          defaultMessage: `Create a PIN`,
          description: `Button to start creating an account PIN for locked chats.`,
        },
        changePinLabel: {
          id: `settingsModal.accountPin.changePin.label`,
          defaultMessage: `Change PIN`,
          description: `Label for the Change PIN settings row.`,
        },
        changePinButton: {
          id: `settingsModal.accountPin.changePin.button`,
          defaultMessage: `Change`,
          description: `Button to start changing the current account PIN.`,
        },
        resetPinLabel: {
          id: `settingsModal.accountPin.resetPin.label`,
          defaultMessage: `Reset PIN`,
          description: `Label for the Reset PIN settings row.`,
        },
        resetPinDescription: {
          id: `settingsModal.accountPin.resetPin.description`,
          defaultMessage: `Only reset your PIN if you forgot your current one.`,
          description: `Guidance to reset the Account PIN only when the user has forgotten it.`,
        },
        resetPinButton: {
          id: `settingsModal.accountPin.resetPin.button`,
          defaultMessage: `Reset`,
          description: `Button to begin reauthentication before resetting an account PIN.`,
        },
      })),
      (A = p({
        ...k,
        unlockTitle: {
          id: `lockedChats.pin.title`,
          defaultMessage: `Enter PIN`,
          description: `Dialog title asking for the PIN to access Locked chats`,
        },
        currentPinTitle: {
          id: `settingsModal.accountPin.currentPin.title`,
          defaultMessage: `Current PIN`,
          description: `Title of the current PIN verification step before changing a PIN.`,
        },
        createNewPinTitle: {
          id: `settingsModal.accountPin.createNewPin.title`,
          defaultMessage: `Create new PIN`,
          description: `Title for choosing a new PIN when changing or resetting it.`,
        },
        resetWarningTitle: {
          id: `settingsModal.accountPin.resetWarning.title`,
          defaultMessage: `Reset your PIN?`,
          description: `Title of the destructive PIN reset confirmation after reauthentication.`,
        },
        resetWarningDescription: {
          id: `settingsModal.accountPin.resetWarning.description`,
          defaultMessage: `Resetting your PIN lets you create a new PIN, but deletes all content protected by your previous PIN.`,
          description: `Warning that reset permanently deletes chats protected by the prior PIN.`,
        },
        resetWarningConfirm: {
          id: `settingsModal.accountPin.resetWarning.confirm`,
          defaultMessage: `Reset PIN & Delete`,
          description: `Destructive confirmation after a fresh account sign-in for PIN reset.`,
        },
        currentPinInput: {
          id: `settings.chatGpt.security.accountPin.currentPinInput`,
          defaultMessage: `Current PIN`,
          description: `Label for the existing four-digit PIN required before changing it.`,
        },
        confirmPinInput: {
          id: `settings.chatGpt.security.accountPin.confirmPinInput`,
          defaultMessage: `Confirm new PIN`,
          description: `Label for confirming a newly chosen four-digit account PIN.`,
        },
        newPinInput: {
          id: `settings.chatGpt.security.accountPin.newPinInput`,
          defaultMessage: `New PIN`,
          description: `Label for a new four-digit account PIN.`,
        },
        invalid: {
          id: `settings.chatGpt.security.accountPin.invalid`,
          defaultMessage: `Enter a four-digit PIN`,
          description: `Validation when an Account PIN is not exactly four ASCII digits.`,
        },
        mismatch: {
          id: `settings.chatGpt.security.accountPin.mismatch`,
          defaultMessage: `Those PINs do not match. Try again.`,
          description: `Validation when the new Account PIN and confirmation differ.`,
        },
        incorrect: {
          id: `settings.chatGpt.security.accountPin.incorrect`,
          defaultMessage: `That PIN is incorrect. Try again.`,
          description: `Current Account PIN was rejected during verification.`,
        },
        actionFailed: {
          id: `settings.chatGpt.security.accountPin.actionFailed`,
          defaultMessage: `Locked chats are temporarily unavailable. Try again.`,
          description: `A request to create or change the Account PIN failed.`,
        },
        createSubmit: {
          id: `settings.chatGpt.security.accountPin.createSubmit`,
          defaultMessage: `Create PIN`,
          description: `Creates a four-digit Account PIN after confirmation.`,
        },
        changeSubmit: {
          id: `settings.chatGpt.security.accountPin.changeSubmit`,
          defaultMessage: `Change PIN`,
          description: `Changes the Account PIN after verifying the old one.`,
        },
        continue: {
          id: `settings.chatGpt.security.accountPin.continue`,
          defaultMessage: `Continue`,
          description: `Advances a PIN entry step after four numeric digits are entered.`,
        },
      })));
  }))();
}
function M(e) {
  let n = (0, oe.c)(96),
    {
      step: r,
      currentPin: a,
      nextPin: o,
      confirmation: s,
      error: c,
      lockedFor: l,
      isPending: f,
      onCurrentPinChange: p,
      onNextPinChange: m,
      onConfirmationChange: h,
      onClearError: _,
      onLockoutExpired: v,
      onSubmit: y,
      onClose: b,
      onForgotPin: x,
    } = e,
    [S, C] = (0, N.useState)(!1),
    w = r === `change-current` || r === `unlock`,
    T = r === `create-confirm` || r === `change-confirm` || r === `reset-confirm`,
    E = w || T || r === `create` || r === `change-new` || r === `reset-new`,
    D = l > 0 || c === `locked`,
    O = (0, N.useEffectEvent)(v),
    k;
  n[0] !== w || n[1] !== D || n[2] !== l || n[3] !== O || n[4] !== E
    ? ((k = () => {
        if (!E || !w || !D) return;
        let e = setTimeout(O, (l || 60) * 1e3);
        return () => clearTimeout(e);
      }),
      (n[0] = w),
      (n[1] = D),
      (n[2] = l),
      (n[3] = O),
      (n[4] = E),
      (n[5] = k))
    : (k = n[5]);
  let j;
  if (
    (n[6] !== w || n[7] !== D || n[8] !== l || n[9] !== E
      ? ((j = [E, w, D, l]), (n[6] = w), (n[7] = D), (n[8] = l), (n[9] = E), (n[10] = j))
      : (j = n[10]),
    (0, N.useEffect)(k, j),
    !E)
  )
    return null;
  if (S) {
    let e, t, i;
    n[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(g, {
          id: `lockedChats.pin.closeSetupTitle`,
          defaultMessage: `Close PIN setup?`,
          description: `Confirmation title when dismissing Account PIN creation or change before it is complete`,
        })),
        (t = (0, P.jsx)(g, {
          id: `lockedChats.pin.continueSetup`,
          defaultMessage: `Continue setup`,
          description: `Return to the unfinished Account PIN setup and keep the digits already entered`,
        })),
        (i = (0, P.jsx)(g, {
          id: `lockedChats.pin.closeSetup`,
          defaultMessage: `Close`,
          description: `Abandon unfinished Account PIN setup and discard the digits entered`,
        })),
        (n[11] = e),
        (n[12] = t),
        (n[13] = i))
      : ((e = n[11]), (t = n[12]), (i = n[13]));
    let a;
    n[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = () => C(!1)), (n[14] = a)) : (a = n[14]);
    let o;
    n[15] === b
      ? (o = n[16])
      : ((o = () => {
          (C(!1), b());
        }),
        (n[15] = b),
        (n[16] = o));
    let s;
    n[17] === r
      ? (s = n[18])
      : ((s =
          r === `change-new` || r === `change-confirm`
            ? (0, P.jsx)(g, {
                id: `lockedChats.pin.closeChangeDescription`,
                defaultMessage: `If you close setup now, your current PIN will stay active and no changes will be made`,
                description: `Explanation before abandoning an unfinished PIN change; the existing PIN has not yet been replaced`,
              })
            : (0, P.jsx)(g, {
                id: `lockedChats.pin.closeCreateDescription`,
                defaultMessage: `If you close setup now, your new PIN won’t be saved`,
                description: `Explanation before abandoning PIN creation, including creating a new PIN after the previous PIN was reset`,
              })),
        (n[17] = r),
        (n[18] = s));
    let c;
    return (
      n[19] !== o || n[20] !== s
        ? ((c = (0, P.jsx)(ie, {
            title: e,
            cancelLabel: t,
            confirmLabel: i,
            confirmColor: `primary`,
            isPending: !1,
            onClose: a,
            onConfirm: o,
            children: s,
          })),
          (n[19] = o),
          (n[20] = s),
          (n[21] = c))
        : (c = n[21]),
      c
    );
  }
  let M = o;
  w ? (M = a) : T && (M = s);
  let F = A.newPinInput;
  w ? (F = A.currentPinInput) : T && (F = A.confirmPinInput);
  let I = A.actionFailed;
  c === `invalid`
    ? (I = A.invalid)
    : c === `mismatch`
      ? (I = A.mismatch)
      : c === `incorrect` && (I = A.incorrect);
  let L;
  if (w && D) {
    let e;
    (n[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(g, {
          id: `lockedChats.pin.blockedTitle`,
          defaultMessage: `Too many incorrect attempts`,
          description: `Title when account PIN verification is temporarily locked after too many incorrect attempts`,
        })),
        (n[22] = e))
      : (e = n[22]),
      (L = e));
  } else if (r === `create`) {
    let e;
    (n[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(g, {
          id: `lockedChats.pin.createTitle`,
          defaultMessage: `Create account PIN`,
          description: `Title for choosing the first Account PIN for Locked chats`,
        })),
        (n[23] = e))
      : (e = n[23]),
      (L = e));
  } else if (T) {
    let e;
    (n[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(g, {
          id: `lockedChats.pin.confirmTitle`,
          defaultMessage: `Confirm PIN`,
          description: `Title for repeating a newly chosen Account PIN`,
        })),
        (n[24] = e))
      : (e = n[24]),
      (L = e));
  } else if (r === `unlock`) {
    let e;
    (n[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(g, { ...A.unlockTitle })), (n[25] = e))
      : (e = n[25]),
      (L = e));
  } else if (w) {
    let e;
    (n[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(g, { ...A.currentPinTitle })), (n[26] = e))
      : (e = n[26]),
      (L = e));
  } else {
    let e;
    (n[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(g, { ...A.createNewPinTitle })), (n[27] = e))
      : (e = n[27]),
      (L = e));
  }
  let R;
  if (w && D) {
    let e = Math.max(1, Math.ceil(l / 60)),
      t;
    (n[28] === e
      ? (t = n[29])
      : ((t = (0, P.jsx)(`span`, {
          role: `alert`,
          children: (0, P.jsx)(g, {
            id: `lockedChats.pin.blockedDescription`,
            defaultMessage: `You can try again in {minutes, plural, one {# minute} other {# minutes}}.`,
            values: { minutes: e },
            description: `Account PIN verification lockout; minutes are derived from server retry-after status.`,
          }),
        })),
        (n[28] = e),
        (n[29] = t)),
      (R = t));
  } else if (!w) {
    let e;
    (n[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(g, {
          id: `lockedChats.pin.purpose`,
          defaultMessage: `You’ll use this PIN to access any of your locked chats.`,
          description: `Explanation when creating or confirming an Account PIN for Locked chats`,
        })),
        (n[30] = e))
      : (e = n[30]),
      (R = e));
  }
  let se = w && !D ? `pinEntry` : `narrow`,
    z;
  n[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = { "aria-describedby": void 0 }), (n[31] = z))
    : (z = n[31]);
  let B;
  n[32] !== w || n[33] !== f || n[34] !== b
    ? ((B = (e) => {
        !e && !f && (w ? b() : C(!0));
      }),
      (n[32] = w),
      (n[33] = f),
      (n[34] = b),
      (n[35] = B))
    : (B = n[35]);
  let ce = w ? `codeEntry` : `default`,
    V;
  n[36] === y
    ? (V = n[37])
    : ((V = (e) => {
        (e.preventDefault(), y());
      }),
      (n[36] = y),
      (n[37] = V));
  let H;
  n[38] !== T || n[39] !== w || n[40] !== r
    ? ((H = w || T || r === `create` ? (0, P.jsx)(t, { asset: te }) : void 0),
      (n[38] = T),
      (n[39] = w),
      (n[40] = r),
      (n[41] = H))
    : (H = n[41]);
  let U;
  n[42] === L
    ? (U = n[43])
    : ((U = (0, P.jsx)(ne, { className: `select-none`, children: L })), (n[42] = L), (n[43] = U));
  let W;
  n[44] !== f || n[45] !== R || n[46] !== H || n[47] !== U
    ? ((W = (0, P.jsx)(u, {
        icon: H,
        iconClassName: `self-center`,
        iconVariant: `outlinedCircle`,
        iconLoading: f,
        subtitle: R,
        subtitleSize: `sm`,
        subtitleTone: `secondary`,
        title: U,
      })),
      (n[44] = f),
      (n[45] = R),
      (n[46] = H),
      (n[47] = U),
      (n[48] = W))
    : (W = n[48]);
  let G;
  n[49] !== T ||
  n[50] !== w ||
  n[51] !== c ||
  n[52] !== F ||
  n[53] !== M ||
  n[54] !== f ||
  n[55] !== D ||
  n[56] !== _ ||
  n[57] !== h ||
  n[58] !== p ||
  n[59] !== m ||
  n[60] !== y ||
  n[61] !== r
    ? ((G =
        w && D
          ? null
          : (0, P.jsxs)(P.Fragment, {
              children: [
                (0, P.jsx)(`label`, {
                  className: `sr-only`,
                  htmlFor: `account-pin-input`,
                  children: (0, P.jsx)(g, { ...F }),
                }),
                (0, P.jsx)(
                  ae,
                  {
                    id: `account-pin-input`,
                    value: M,
                    readOnly: f,
                    invalid: c != null,
                    onChange: (e) => {
                      (_(), w ? p(e) : T ? h(e) : m(e), e.length === 4 && y(e));
                    },
                  },
                  r,
                ),
              ],
            })),
      (n[49] = T),
      (n[50] = w),
      (n[51] = c),
      (n[52] = F),
      (n[53] = M),
      (n[54] = f),
      (n[55] = D),
      (n[56] = _),
      (n[57] = h),
      (n[58] = p),
      (n[59] = m),
      (n[60] = y),
      (n[61] = r),
      (n[62] = G))
    : (G = n[62]);
  let K;
  n[63] !== w || n[64] !== D || n[65] !== x
    ? ((K =
        w && D && x != null
          ? (0, P.jsx)(ee, {
              className: `self-center`,
              type: `button`,
              color: `dangerOutline`,
              size: `medium`,
              onClick: x,
              children: (0, P.jsx)(g, {
                id: `lockedChats.pin.reset`,
                defaultMessage: `Reset PIN`,
                description: `Open Account PIN settings to reset a forgotten PIN after a lockout`,
              }),
            })
          : null),
      (n[63] = w),
      (n[64] = D),
      (n[65] = x),
      (n[66] = K))
    : (K = n[66]);
  let q;
  n[67] !== w || n[68] !== c || n[69] !== D || n[70] !== v
    ? ((q =
        w && D && c === `failed`
          ? (0, P.jsxs)(P.Fragment, {
              children: [
                (0, P.jsx)(`p`, {
                  role: `alert`,
                  className: `text-sm text-danger`,
                  children: (0, P.jsx)(g, { ...A.actionFailed }),
                }),
                (0, P.jsx)(ee, {
                  className: `self-center`,
                  type: `button`,
                  color: `secondary`,
                  onClick: v,
                  children: (0, P.jsx)(g, {
                    id: `settings.chatGpt.security.accountPin.retryStatus`,
                    defaultMessage: `Try again`,
                    description: `Button shown when rechecking the Account PIN lockout status fails; retries the status check`,
                  }),
                }),
              ],
            })
          : null),
      (n[67] = w),
      (n[68] = c),
      (n[69] = D),
      (n[70] = v),
      (n[71] = q))
    : (q = n[71]);
  let J;
  n[72] !== w || n[73] !== c || n[74] !== I || n[75] !== D
    ? ((J =
        c != null && !(w && D)
          ? (0, P.jsx)(`p`, {
              role: `alert`,
              className: `text-sm text-danger`,
              children: (0, P.jsx)(g, { ...I }),
            })
          : null),
      (n[72] = w),
      (n[73] = c),
      (n[74] = I),
      (n[75] = D),
      (n[76] = J))
    : (J = n[76]);
  let Y;
  n[77] !== W || n[78] !== G || n[79] !== K || n[80] !== q || n[81] !== J
    ? ((Y = (0, P.jsxs)(re, { className: `gap-4 text-center`, children: [W, G, K, q, J] })),
      (n[77] = W),
      (n[78] = G),
      (n[79] = K),
      (n[80] = q),
      (n[81] = J),
      (n[82] = Y))
    : (Y = n[82]);
  let le = f || (w && D),
    X;
  n[83] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, P.jsx)(g, { ...A.continue })), (n[83] = X))
    : (X = n[83]);
  let Z;
  n[84] === le
    ? (Z = n[85])
    : ((Z = (0, P.jsx)(`button`, {
        type: `submit`,
        className: `sr-only`,
        tabIndex: -1,
        disabled: le,
        children: X,
      })),
      (n[84] = le),
      (n[85] = Z));
  let Q;
  n[86] !== f || n[87] !== Y || n[88] !== Z || n[89] !== ce || n[90] !== V
    ? ((Q = (0, P.jsxs)(i, { as: `form`, variant: ce, "aria-busy": f, onSubmit: V, children: [Y, Z] })),
      (n[86] = f),
      (n[87] = Y),
      (n[88] = Z),
      (n[89] = ce),
      (n[90] = V),
      (n[91] = Q))
    : (Q = n[91]);
  let $;
  return (
    n[92] !== Q || n[93] !== se || n[94] !== B
      ? (($ = (0, P.jsx)(d, {
          open: !0,
          size: se,
          variant: `form`,
          contentProps: z,
          onOpenChange: B,
          children: Q,
        })),
        (n[92] = Q),
        (n[93] = se),
        (n[94] = B),
        (n[95] = $))
      : ($ = n[95]),
    $
  );
}
var oe, N, P;
function F() {
  return (F = e(() => {
    ((oe = l()), h(), (N = n()), f(), m(), a(), r(), s(), O(), j(), y(), (P = o()));
  }))();
}
function I(e) {
  return c({
    queryKey: [`chatgpt-security`, e, `account-pin`],
    queryFn: ({ signal: t }) =>
      _.safeGet(`/locked_chats/status`, { additionalHeaders: { "ChatGPT-Account-ID": e }, signal: t }),
    staleTime: 0,
    retry: !1,
  });
}
function L() {
  return (L = e(() => {
    v();
  }))();
}
export { A as a, F as i, L as n, j as o, M as r, I as t };
//# sourceMappingURL=account-pin-query-180628ba8891.js.map
