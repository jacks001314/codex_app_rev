import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  HO as n,
  IH as r,
  IO as i,
  JO as a,
  KO as o,
  LNt as s,
  LO as c,
  PBt as l,
  RO as u,
  TY as d,
  WO as f,
  XOt as p,
  Y3 as m,
  YOt as h,
  Z3 as g,
  qO as _,
  tkt as v,
  vK as y,
  zO as b,
} from "./app-shared-2feb3d4c6fcc.js";
import { $Ln as x, ZLn as S, iut as C, tut as w } from "./app-initial-ad16eaadf81f.js";
function T(e) {
  let t = (0, D.c)(8),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = (t) => {
        t || e.onCancel();
      }),
      (t[0] = e),
      (t[1] = n));
  let r = e.prompt?.id,
    i;
  t[2] !== e || t[3] !== r
    ? ((i = (0, k.jsx)(E, { ...e }, r)), (t[2] = e), (t[3] = r), (t[4] = i))
    : (i = t[4]);
  let a;
  return (
    t[5] !== n || t[6] !== i
      ? ((a = (0, k.jsx)(f, { open: !0, size: `compact`, onOpenChange: n, children: i })),
        (t[5] = n),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function E(e) {
  let t = (0, D.c)(65),
    { details: n, prompt: a, onRespond: s, onCancel: l } = e,
    [d, f] = (0, O.useState)(``),
    [p, h] = (0, O.useState)(!1),
    g = !p && a?.type === `enter-pin` && d !== ``,
    x;
  t[0] === s
    ? (x = t[1])
    : ((x = (e) => {
        (h(!0), f(``), s(e));
      }),
      (t[0] = s),
      (t[1] = x));
  let C = x,
    T;
  t[2] !== g || t[3] !== d || t[4] !== a || t[5] !== C
    ? ((T = (e) => {
        (e.preventDefault(), g && a?.type === `enter-pin` && C({ promptId: a.id, type: a.type, pin: d }));
      }),
      (t[2] = g),
      (t[3] = d),
      (t[4] = a),
      (t[5] = C),
      (t[6] = T))
    : (T = t[6]);
  let E;
  t[7] === n
    ? (E = t[8])
    : ((E =
        n == null &&
        (0, k.jsx)(v, {
          id: `restricted.aeon.passkey.request`,
          defaultMessage: `Passkey request`,
          description: `Title shown while the local host validates a remote website's USB passkey request before showing its relying party or account`,
        })),
      (t[7] = n),
      (t[8] = E));
  let j;
  t[9] === n?.operation
    ? (j = t[10])
    : ((j =
        n?.operation === `registration` &&
        (0, k.jsx)(v, {
          id: `restricted.aeon.passkey.create`,
          defaultMessage: `Create a passkey`,
          description: `Title for creating a passkey on a local USB security key for a website in the remote computer`,
        })),
      (t[9] = n?.operation),
      (t[10] = j));
  let M;
  t[11] === n?.operation
    ? (M = t[12])
    : ((M =
        n?.operation === `authentication` &&
        (0, k.jsx)(v, {
          id: `restricted.aeon.passkey.authenticate`,
          defaultMessage: `Use a passkey`,
          description: `Title for signing in to a website in the remote computer with a local USB security key`,
        })),
      (t[11] = n?.operation),
      (t[12] = M));
  let N;
  t[13] !== E || t[14] !== j || t[15] !== M
    ? ((N = (0, k.jsxs)(_, { className: `contents`, children: [E, j, M] })),
      (t[13] = E),
      (t[14] = j),
      (t[15] = M),
      (t[16] = N))
    : (N = t[16]);
  let P;
  t[17] === n
    ? (P = t[18])
    : ((P =
        n == null
          ? void 0
          : (0, k.jsx)(o, { className: `break-all select-text`, children: n.relyingPartyId })),
      (t[17] = n),
      (t[18] = P));
  let F;
  t[19] !== N || t[20] !== P
    ? ((F = (0, k.jsx)(b, { children: (0, k.jsx)(u, { title: N, subtitle: P }) })),
      (t[19] = N),
      (t[20] = P),
      (t[21] = F))
    : (F = t[21]);
  let I;
  t[22] === n
    ? (I = t[23])
    : ((I =
        n?.operation === `registration` &&
        n.userName != null &&
        n.userName.trim() !== `` &&
        (0, k.jsx)(b, {
          children: (0, k.jsxs)(`p`, {
            className: `flex items-center gap-2`,
            children: [
              (0, k.jsx)(y, {}),
              (0, k.jsx)(`span`, { className: `break-all select-text`, children: n.userName }),
            ],
          }),
        })),
      (t[22] = n),
      (t[23] = I));
  let L;
  t[24] === a?.type
    ? (L = t[25])
    : ((L =
        a?.type === `connect-key` &&
        (0, k.jsx)(`p`, {
          role: `status`,
          children: (0, k.jsx)(v, {
            id: `restricted.aeon.passkey.connect`,
            defaultMessage: `Insert your USB security key`,
            description: `Instruction to connect a USB security key while the app automatically waits for one`,
          }),
        })),
      (t[24] = a?.type),
      (t[25] = L));
  let R;
  t[26] !== a || t[27] !== C || t[28] !== p
    ? ((R =
        a?.type === `select-account` &&
        (0, k.jsxs)(`div`, {
          className: `flex flex-col gap-2`,
          children: [
            (0, k.jsx)(`p`, {
              children: (0, k.jsx)(v, {
                id: `restricted.aeon.passkey.chooseAccount`,
                defaultMessage: `Choose an account`,
                description: `Instruction to choose which account on the USB security key to use for this website`,
              }),
            }),
            a.accounts.map((e, t) =>
              (0, k.jsx)(
                w,
                {
                  density: `compact`,
                  icon: (0, k.jsx)(y, {}),
                  isDisabled: p,
                  isSelected: !1,
                  rightText: (0, k.jsx)(r, {}),
                  title:
                    e.userName ??
                    e.displayName ??
                    (0, k.jsx)(v, {
                      id: `restricted.aeon.passkey.unnamedAccount`,
                      defaultMessage: `Account {number}`,
                      description: `Fallback label for a passkey account whose security key provides no user name or display name`,
                      values: { number: t + 1 },
                    }),
                  onSelect: () => C({ promptId: a.id, type: a.type, accountId: e.id }),
                },
                e.id,
              ),
            ),
          ],
        })),
      (t[26] = a),
      (t[27] = C),
      (t[28] = p),
      (t[29] = R))
    : (R = t[29]);
  let z;
  t[30] !== d || t[31] !== a || t[32] !== p
    ? ((z =
        a?.type === `enter-pin` &&
        (0, k.jsxs)(`label`, {
          className: `flex flex-col gap-2 text-sm`,
          children: [
            (0, k.jsx)(v, {
              id: `restricted.aeon.passkey.pin`,
              defaultMessage: `Security key PIN`,
              description: `Label for the local USB security key's PIN, not the computer login password`,
            }),
            (0, k.jsx)(S, {
              autoFocus: !0,
              type: `password`,
              autoComplete: `off`,
              value: d,
              disabled: p,
              "aria-invalid": a.incorrect,
              onChange: (e) => f(e.target.value),
            }),
          ],
        })),
      (t[30] = d),
      (t[31] = a),
      (t[32] = p),
      (t[33] = z))
    : (z = t[33]);
  let B;
  t[34] === a
    ? (B = t[35])
    : ((B =
        a?.type === `enter-pin` &&
        a.incorrect &&
        (0, k.jsx)(`p`, {
          role: `alert`,
          children:
            a.retries == null
              ? (0, k.jsx)(v, {
                  id: `restricted.aeon.passkey.incorrectPin`,
                  defaultMessage: `Incorrect PIN`,
                  description: `Error when the USB security key rejects the entered PIN and does not report a remaining attempt count`,
                })
              : (0, k.jsx)(v, {
                  id: `restricted.aeon.passkey.incorrectPinRetries`,
                  defaultMessage: `Incorrect PIN. {retries, plural, one {# attempt remaining} other {# attempts remaining}}`,
                  description: `Error with the number of PIN attempts remaining before the USB security key is blocked`,
                  values: { retries: a.retries },
                }),
        })),
      (t[34] = a),
      (t[35] = B));
  let V;
  t[36] === a
    ? (V = t[37])
    : ((V =
        a?.type === `error` && (0, k.jsx)(`p`, { role: `alert`, children: (0, k.jsx)(v, { ...A[a.code] }) })),
      (t[36] = a),
      (t[37] = V));
  let H;
  t[38] === a?.type
    ? (H = t[39])
    : ((H =
        a?.type === `touch-key` &&
        (0, k.jsx)(`p`, {
          role: `status`,
          children: (0, k.jsx)(v, {
            id: `restricted.aeon.passkey.touch`,
            defaultMessage: `Touch your USB security key to continue`,
            description: `Instruction to confirm a passkey request using the physical touch sensor on the selected USB security key`,
          }),
        })),
      (t[38] = a?.type),
      (t[39] = H));
  let U;
  t[40] === a
    ? (U = t[41])
    : ((U =
        a == null &&
        (0, k.jsx)(`p`, {
          role: `status`,
          children: (0, k.jsx)(v, {
            id: `restricted.aeon.passkey.preparing`,
            defaultMessage: `Looking for USB security keys…`,
            description: `Status while preparing a local USB security key passkey request`,
          }),
        })),
      (t[40] = a),
      (t[41] = U));
  let W;
  t[42] !== L || t[43] !== R || t[44] !== z || t[45] !== B || t[46] !== V || t[47] !== H || t[48] !== U
    ? ((W = (0, k.jsxs)(b, { children: [L, R, z, B, V, H, U] })),
      (t[42] = L),
      (t[43] = R),
      (t[44] = z),
      (t[45] = B),
      (t[46] = V),
      (t[47] = H),
      (t[48] = U),
      (t[49] = W))
    : (W = t[49]);
  let G;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, k.jsx)(v, {
        id: `restricted.aeon.passkey.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels the local USB security key passkey request`,
      })),
      (t[50] = G))
    : (G = t[50]);
  let K;
  t[51] === l
    ? (K = t[52])
    : ((K = (0, k.jsx)(m, { color: `secondary`, type: `button`, onClick: l, children: G })),
      (t[51] = l),
      (t[52] = K));
  let q;
  t[53] !== g || t[54] !== a?.type
    ? ((q =
        a?.type === `enter-pin` &&
        (0, k.jsx)(m, {
          type: `submit`,
          disabled: !g,
          children: (0, k.jsx)(v, {
            id: `restricted.aeon.passkey.continue`,
            defaultMessage: `Continue`,
            description: `Button that submits the entered security key PIN`,
          }),
        })),
      (t[53] = g),
      (t[54] = a?.type),
      (t[55] = q))
    : (q = t[55]);
  let J;
  t[56] !== K || t[57] !== q
    ? ((J = (0, k.jsx)(b, { children: (0, k.jsxs)(c, { children: [K, q] }) })),
      (t[56] = K),
      (t[57] = q),
      (t[58] = J))
    : (J = t[58]);
  let Y;
  return (
    t[59] !== W || t[60] !== T || t[61] !== J || t[62] !== F || t[63] !== I
      ? ((Y = (0, k.jsxs)(i, { as: `form`, className: `select-none`, onSubmit: T, children: [F, I, W, J] })),
        (t[59] = W),
        (t[60] = T),
        (t[61] = J),
        (t[62] = F),
        (t[63] = I),
        (t[64] = Y))
      : (Y = t[64]),
    Y
  );
}
var D, O, k, A;
function j() {
  return (j = e(() => {
    ((D = l()),
      (O = t()),
      p(),
      g(),
      a(),
      n(),
      d(),
      C(),
      x(),
      (k = s()),
      (A = h({
        "device-unavailable": {
          id: `restricted.aeon.passkey.deviceUnavailable`,
          defaultMessage: `The security key is unavailable. Reconnect it and try again.`,
          description: `Error when the selected USB security key cannot be opened or was disconnected`,
        },
        "pin-blocked": {
          id: `restricted.aeon.passkey.pinBlocked`,
          defaultMessage: `The security key PIN is blocked. Follow your key's instructions to unlock it.`,
          description: `Error when the USB security key blocks PIN verification`,
        },
        "pin-not-set": {
          id: `restricted.aeon.passkey.pinNotSet`,
          defaultMessage: `Set a PIN using your security key's app, then try again`,
          description: `Error when a USB passkey request requires a PIN but the key has none configured`,
        },
        "no-credentials": {
          id: `restricted.aeon.passkey.noCredentials`,
          defaultMessage: `This security key has no passkey for this account`,
          description: `Error when the selected USB security key cannot find a matching passkey`,
        },
        unsupported: {
          id: `restricted.aeon.passkey.unsupported`,
          defaultMessage: `This passkey request isn't supported by this security key`,
          description: `Error when the requested passkey operation cannot be performed with this USB security key`,
        },
        timeout: {
          id: `restricted.aeon.passkey.timeout`,
          defaultMessage: `The passkey request timed out. Try again from the website.`,
          description: `Error when the USB security key passkey request reaches its deadline`,
        },
        error: {
          id: `restricted.aeon.passkey.error`,
          defaultMessage: `The passkey request failed. Try again from the website.`,
          description: `Error when a USB passkey request fails without a more specific reason`,
        },
      })));
  }))();
}
j();
export { T as UsbPasskeyDialog };
//# sourceMappingURL=usb-passkey-dialog-e76eaeb4d0d0.js.map
