import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  VDt as r,
  bx as i,
  e3 as a,
  iO as o,
  iz as s,
  jDt as c,
  nz as l,
  rO as u,
  rz as d,
  t3 as f,
  tz as p,
  vzt as m,
  xMt as h,
  yx as g,
  yzt as _,
} from "./app-shared-bbfeca5e5737.js";
import { JPn as v, N as y, P as b, ULn as x, WLn as S, XPn as C } from "./app-initial-5851df3f6cb1.js";
function w(e) {
  let i = (0, T.c)(48),
    { url: o, openTarget: c, purchase: d } = e,
    f = d !== void 0 && d,
    p = r(),
    m = l(`(pointer: coarse)`),
    h =
      s() &&
      (S() ||
        (navigator.platform === `MacIntel` && navigator.maxTouchPoints > 1) ||
        (m && navigator.maxTouchPoints > 0)),
    [_, v] = (0, E.useState)(!1),
    b = (0, E.useId)(),
    x;
  i[0] === p
    ? (x = i[1])
    : ((x = p.formatMessage({
        id: `composer.userVerification.copyMobileLink`,
        defaultMessage: `Copy link`,
        description: `Copies the pending verification link so the user can open it in ChatGPT on their phone`,
      })),
      (i[0] = p),
      (i[1] = x));
  let w = x,
    O;
  i[2] !== c || i[3] !== o
    ? ((O = (e) => {
        C({ event: e, href: o, openTarget: c, initiator: `open_in_browser_bridge` });
      }),
      (i[2] = c),
      (i[3] = o),
      (i[4] = O))
    : (O = i[4]);
  let k = O,
    A = h && !_,
    j;
  i[5] !== p || i[6] !== h || i[7] !== f || i[8] !== _ || i[9] !== o
    ? ((j =
        (!h || _) &&
        (0, D.jsx)(y, {
          size: f && !h ? `inline` : `compact`,
          value: o,
          ariaLabel: p.formatMessage({
            id: `composer.userVerification.mobileHandoffQrLabel`,
            defaultMessage: `QR code to open this request on your phone`,
            description: `Accessible label for the QR code containing the link to the same pending verification request`,
          }),
          fallback: (0, D.jsxs)(`div`, {
            className: `flex min-w-0 flex-col gap-2`,
            children: [
              (0, D.jsx)(`p`, {
                className: `text-size-chat-sm text-codex-description select-none`,
                role: `status`,
                children:
                  f && !h
                    ? (0, D.jsx)(n, {
                        id: `composer.walletRequest.phoneHandoffQrUnavailable`,
                        defaultMessage: `The QR code couldn’t be displayed. Open ChatGPT on your phone using the same account to continue.`,
                        description: `Recovery instructions when the Wallet purchase verification QR code cannot be generated`,
                      })
                    : (0, D.jsx)(n, {
                        id: `composer.userVerification.mobileHandoffQrUnavailable`,
                        defaultMessage: `The QR code couldn’t be displayed. Copy the link to open this request on your phone.`,
                        description: `Recovery instructions when the verification request QR code cannot be generated; the separate Copy link action remains available`,
                      }),
              }),
              (0, D.jsx)(`p`, {
                className: `text-size-chat-sm wrap-anywhere select-text`,
                "data-dd-privacy": `hidden`,
                children: o,
              }),
            ],
          }),
        })),
      (i[5] = p),
      (i[6] = h),
      (i[7] = f),
      (i[8] = _),
      (i[9] = o),
      (i[10] = j))
    : (j = i[10]);
  let M;
  i[11] !== b || i[12] !== A || i[13] !== j
    ? ((M = (0, D.jsx)(`div`, { id: b, hidden: A, children: j })),
      (i[11] = b),
      (i[12] = A),
      (i[13] = j),
      (i[14] = M))
    : (M = i[14]);
  let N = M;
  if (f && !h) {
    let e;
    i[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, D.jsx)(`p`, {
          className: `text-sm leading-tight font-semibold select-none`,
          children: (0, D.jsx)(n, {
            id: `composer.walletRequest.phoneHandoffTitle`,
            defaultMessage: `Scan code or open ChatGPT on your phone to complete your purchase`,
            description: `Wallet purchase review handoff instructions for a supported phone approval link`,
          }),
        })),
        (i[15] = e))
      : (e = i[15]);
    let t;
    i[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, D.jsxs)(`div`, {
          className: `min-w-0 flex-1`,
          children: [
            e,
            (0, D.jsx)(`p`, {
              className: `mt-1 text-xs text-codex-description select-none`,
              children: (0, D.jsx)(n, {
                id: `composer.walletRequest.phoneHandoffDescription`,
                defaultMessage: `You’ll be asked to verify in the ChatGPT app using the same account.`,
                description: `Explains that phone handoff still requires verification with the same account`,
              }),
            }),
          ],
        })),
        (i[16] = t))
      : (t = i[16]);
    let r;
    return (
      i[17] === N
        ? (r = i[18])
        : ((r = (0, D.jsxs)(`div`, { className: `flex min-w-0 items-center gap-6`, children: [t, N] })),
          (i[17] = N),
          (i[18] = r)),
      r
    );
  }
  let P;
  i[19] === h
    ? (P = i[20])
    : ((P = (0, D.jsx)(`p`, {
        className: `text-size-chat-sm font-medium select-none`,
        children: h
          ? (0, D.jsx)(n, {
              id: `composer.userVerification.mobileHandoffContinueTitle`,
              defaultMessage: `Continue this request`,
              description: `Heading above the action that opens the pending verification link on the user's current mobile device`,
            })
          : (0, D.jsx)(n, {
              id: `composer.userVerification.mobileHandoffTitle`,
              defaultMessage: `Open this request on your phone`,
              description: `Heading above the QR code for opening the same pending verification request on a phone`,
            }),
      })),
      (i[19] = h),
      (i[20] = P));
  let F;
  i[21] === h
    ? (F = i[22])
    : ((F = (0, D.jsx)(`p`, {
        className: `text-size-chat-sm text-codex-description select-none`,
        children: h
          ? (0, D.jsx)(n, {
              id: `composer.userVerification.mobileHandoffOpenInstructions`,
              defaultMessage: `Open the link and use the same ChatGPT account to continue`,
              description: `Instructions for opening the pending verification link on the current mobile device; the user must use the same ChatGPT account`,
            })
          : (0, D.jsx)(n, {
              id: `composer.userVerification.mobileHandoffQrInstructions`,
              defaultMessage: `Scan the QR code with your phone’s camera and use the same ChatGPT account to continue`,
              description: `Instructions for opening the pending verification request on a phone when this device cannot verify it; the phone must use the same ChatGPT account`,
            }),
      })),
      (i[21] = h),
      (i[22] = F));
  let I = !h && N,
    L;
  i[23] !== h || i[24] !== k || i[25] !== o
    ? ((L =
        h &&
        (0, D.jsx)(a, {
          className: `justify-center`,
          color: `composerPrimary`,
          size: `dialog`,
          href: o,
          onClick: k,
          onAuxClick: (e) => {
            e.button === 1 && k(e);
          },
          rel: `noopener noreferrer`,
          target: `_blank`,
          children: (0, D.jsx)(n, {
            id: `composer.userVerification.openMobileLink`,
            defaultMessage: `Open link`,
            description: `Primary action on mobile that opens the existing pending verification URL`,
          }),
        })),
      (i[23] = h),
      (i[24] = k),
      (i[25] = o),
      (i[26] = L))
    : (L = i[26]);
  let R;
  i[27] !== h || i[28] !== b || i[29] !== _
    ? ((R =
        h &&
        (0, D.jsx)(t, {
          color: `outlineCard`,
          size: `actionSm`,
          "aria-controls": b,
          "aria-expanded": _,
          onClick: () => v(!_),
          children: _
            ? (0, D.jsx)(n, {
                id: `composer.userVerification.hideMobileQrCode`,
                defaultMessage: `Hide QR code`,
                description: `Collapses the optional QR code for opening the pending verification request on another device`,
              })
            : (0, D.jsx)(n, {
                id: `composer.userVerification.showMobileQrCode`,
                defaultMessage: `Show QR code`,
                description: `Reveals the optional QR code for opening the pending verification request on another device`,
              }),
        })),
      (i[27] = h),
      (i[28] = b),
      (i[29] = _),
      (i[30] = R))
    : (R = i[30]);
  let z;
  i[31] === o ? (z = i[32]) : ((z = (e) => u(o, e)), (i[31] = o), (i[32] = z));
  let B = h ? `secondaryAction` : `primaryAction`,
    V;
  i[33] !== w || i[34] !== z || i[35] !== B
    ? ((V = (0, D.jsx)(g, { ariaLabel: w, buttonText: w, onCopy: z, variant: B })),
      (i[33] = w),
      (i[34] = z),
      (i[35] = B),
      (i[36] = V))
    : (V = i[36]);
  let H;
  i[37] !== R || i[38] !== V
    ? ((H = (0, D.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-center gap-2`,
        children: [R, V],
      })),
      (i[37] = R),
      (i[38] = V),
      (i[39] = H))
    : (H = i[39]);
  let U = h && N,
    W;
  i[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, D.jsx)(`p`, {
        className: `text-size-chat-sm text-codex-description select-none`,
        children: (0, D.jsx)(n, {
          id: `composer.userVerification.mobileHandoffPending`,
          defaultMessage: `Opening the link doesn’t approve or cancel this request`,
          description: `Clarifies that scanning or copying the phone handoff link does not itself respond to the pending verification request`,
        }),
      })),
      (i[40] = W))
    : (W = i[40]);
  let G;
  return (
    i[41] !== L || i[42] !== H || i[43] !== U || i[44] !== P || i[45] !== F || i[46] !== I
      ? ((G = (0, D.jsxs)(`div`, {
          className: `flex min-w-0 flex-col gap-3`,
          children: [P, F, I, L, H, U, W],
        })),
        (i[41] = L),
        (i[42] = H),
        (i[43] = U),
        (i[44] = P),
        (i[45] = F),
        (i[46] = I),
        (i[47] = G))
      : (G = i[47]),
    G
  );
}
var T, E, D;
function O() {
  return (O = e(() => {
    ((T = m()), x(), (E = _()), c(), f(), i(), v(), b(), p(), o(), d(), (D = h()));
  }))();
}
export { O as n, w as t };
//# sourceMappingURL=mobile-handoff-84a4432d8d16.js.map
