const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./wallet-card-805c60ad50bc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./mobile-handoff-84a4432d8d16.js",
      "./payment-method-assets-a65a422e942b.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  B4 as r,
  BV as i,
  Cot as a,
  IDt as o,
  Ixt as s,
  Iz as c,
  Kat as l,
  Lz as u,
  Mz as d,
  Nz as f,
  Oat as p,
  Pxt as m,
  TJ as h,
  Vxt as g,
  _Mt as _,
  _O as v,
  aw as y,
  cz as b,
  fO as x,
  fPt as S,
  gMt as C,
  hot as w,
  i3 as T,
  jDt as E,
  kat as D,
  lot as O,
  mO as k,
  oO as A,
  ow as j,
  pPt as M,
  qat as N,
  r3 as P,
  sz as F,
  t3 as I,
  vO as L,
  vzt as R,
  wot as z,
  xMt as B,
  yzt as V,
  z4 as ee,
  zxt as te,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bcr as ne,
  Icr as re,
  JPn as ie,
  Jlr as H,
  Mf as ae,
  Nf as oe,
  RSr as se,
  XPn as U,
  XPr as ce,
  YPr as le,
  ZPn as ue,
  bf as de,
  d9n as fe,
  dPr as pe,
  df as me,
  fPr as he,
  fSn as W,
  ff as ge,
  fn as _e,
  hzt as ve,
  iSr as ye,
  lSn as be,
  mf as xe,
  mzt as Se,
  pf as Ce,
  pn as we,
  qlr as G,
  r7n as Te,
  svr as Ee,
  u9n as De,
  wf as Oe,
  xPn as ke,
  yPn as Ae,
  zSr as je,
} from "./app-initial-5851df3f6cb1.js";
import { n as Me, t as Ne } from "./color-icon-d7fde048c9aa.js";
import { n as Pe, t as Fe } from "./request-action-chip-f9f928bcbf56.js";
import { n as Ie, t as Le } from "./mobile-handoff-84a4432d8d16.js";
function Re(e) {
  let n = (0, Be.c)(44),
    {
      available: r,
      checking: i,
      elicitation: a,
      waiting: s,
      onApprove: c,
      onCancel: l,
      onDismiss: u,
      secondaryAction: d,
      mobileHandoffUrl: f,
      mobileHandoffOpenTarget: p,
    } = e,
    m = i !== void 0 && i,
    h = u === void 0 ? l : u,
    g = d === void 0 ? `cancel` : d,
    _;
  n[0] === h
    ? (_ = n[1])
    : ((_ = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), h());
      }),
      (n[0] = h),
      (n[1] = _));
  let v;
  n[2] === a.serverName
    ? (v = n[3])
    : ((v = (0, K.jsx)(`span`, {
        className: `wrap-anywhere`,
        children: (0, K.jsx)(o, {
          id: `composer.userVerification.requestedBy`,
          defaultMessage: `Identity verification requested by {serverName}`,
          description: `Identifies the MCP server asking the user to approve a request using biometric verification`,
          values: { serverName: a.serverName },
        }),
      })),
      (n[2] = a.serverName),
      (n[3] = v));
  let y;
  n[4] === a.description
    ? (y = n[5])
    : ((y = (0, K.jsx)(`span`, { className: `wrap-anywhere whitespace-pre-wrap`, children: a.description })),
      (n[4] = a.description),
      (n[5] = y));
  let b;
  n[6] !== a.title || n[7] !== v || n[8] !== y
    ? ((b = (0, K.jsx)(me, { headerContent: v, title: a.title, subtitle: y })),
      (n[6] = a.title),
      (n[7] = v),
      (n[8] = y),
      (n[9] = b))
    : (b = n[9]);
  let x;
  n[10] !== p || n[11] !== f || n[12] !== s
    ? ((x =
        f == null
          ? (0, K.jsx)(`div`, {
              className: `text-size-chat-sm text-codex-description select-none`,
              role: `status`,
              children: s
                ? (0, K.jsx)(o, {
                    id: `composer.userVerification.waiting`,
                    defaultMessage: `Waiting for Touch ID…`,
                    description: `Status while the device waits for biometric authentication to approve this request`,
                  })
                : (0, K.jsx)(o, {
                    id: `composer.userVerification.explanation`,
                    defaultMessage: `Review this request before approving it with Touch ID`,
                    description: `Explains that biometric authentication starts only after the user chooses to approve the displayed request`,
                  }),
            })
          : (0, K.jsx)(Le, { url: f, openTarget: p })),
      (n[10] = p),
      (n[11] = f),
      (n[12] = s),
      (n[13] = x))
    : (x = n[13]);
  let S;
  n[14] !== b || n[15] !== x
    ? ((S = (0, K.jsxs)(`div`, {
        className: `flex min-h-0 min-w-0 flex-col gap-2 overflow-y-auto overscroll-contain px-4 pt-4 pb-3`,
        children: [b, x],
      })),
      (n[14] = b),
      (n[15] = x),
      (n[16] = S))
    : (S = n[16]);
  let C;
  n[17] !== r || n[18] !== m || n[19] !== f || n[20] !== c || n[21] !== s
    ? ((C = (e) => {
        (e.preventDefault(), r && !s && !m && f == null && c());
      }),
      (n[17] = r),
      (n[18] = m),
      (n[19] = f),
      (n[20] = c),
      (n[21] = s),
      (n[22] = C))
    : (C = n[22]);
  let w = s && g === `deny`,
    T;
  n[23] === g
    ? (T = n[24])
    : ((T =
        g === `deny`
          ? (0, K.jsx)(o, {
              id: `composer.userVerification.deny`,
              defaultMessage: `Deny`,
              description: `Declines the request without approving it`,
            })
          : (0, K.jsx)(o, {
              id: `composer.userVerification.cancel`,
              defaultMessage: `Cancel`,
              description: `Cancels the identity verification request without approving it`,
            })),
      (n[23] = g),
      (n[24] = T));
  let E;
  n[25] !== l || n[26] !== w || n[27] !== T
    ? ((E = (0, K.jsx)(t, {
        className: `@max-md/approval-card:justify-center`,
        color: `outline`,
        disabled: w,
        size: `composer`,
        type: `button`,
        onClick: l,
        children: T,
      })),
      (n[25] = l),
      (n[26] = w),
      (n[27] = T),
      (n[28] = E))
    : (E = n[28]);
  let D;
  n[29] !== r || n[30] !== m || n[31] !== f || n[32] !== s
    ? ((D =
        f == null
          ? (0, K.jsx)(t, {
              allowShrink: !0,
              className: `max-w-full @max-md/approval-card:justify-center`,
              color: `primary`,
              disabled: !r || s || m,
              size: `composer`,
              type: `submit`,
              children: (0, K.jsx)(`span`, {
                className: `truncate`,
                children: (0, K.jsx)(o, {
                  id: `composer.userVerification.approve`,
                  defaultMessage: `Approve with Touch ID`,
                  description: `Starts biometric authentication to approve the displayed MCP server request`,
                }),
              }),
            })
          : null),
      (n[29] = r),
      (n[30] = m),
      (n[31] = f),
      (n[32] = s),
      (n[33] = D))
    : (D = n[33]);
  let O;
  n[34] !== E || n[35] !== D
    ? ((O = (0, K.jsxs)(`div`, {
        className: `ms-auto flex min-w-0 items-center gap-2 @max-md/approval-card:ms-0 @max-md/approval-card:w-full @max-md/approval-card:flex-col @max-md/approval-card:items-stretch`,
        children: [E, D],
      })),
      (n[34] = E),
      (n[35] = D),
      (n[36] = O))
    : (O = n[36]);
  let k;
  n[37] !== C || n[38] !== O
    ? ((k = (0, K.jsx)(`form`, {
        className: `flex shrink-0 items-center gap-2 px-4 pt-2 pb-4 @max-md/approval-card:flex-col @max-md/approval-card:items-stretch`,
        onSubmit: C,
        children: O,
      })),
      (n[37] = C),
      (n[38] = O),
      (n[39] = k))
    : (k = n[39]);
  let A;
  return (
    n[40] !== k || n[41] !== _ || n[42] !== S
      ? ((A = (0, K.jsxs)(Ce, {
          className: `@container/approval-card`,
          "data-codex-approval-surface": !0,
          onKeyDown: _,
          children: [S, k],
        })),
        (n[40] = k),
        (n[41] = _),
        (n[42] = S),
        (n[43] = A))
      : (A = n[43]),
    A
  );
}
function ze() {
  let e = (0, Be.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, K.jsxs)(`div`, {
          className: `flex items-center gap-2 text-sm text-secondary select-none`,
          role: `status`,
          children: [
            (0, K.jsx)(P, {}),
            (0, K.jsx)(o, {
              id: `composer.walletRequest.loading`,
              defaultMessage: `Loading payment details…`,
              description: `Status while the secure Wallet purchase review loads, before approval is available`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Be, K;
function Ve() {
  return (Ve = e(() => {
    ((Be = R()), E(), I(), T(), xe(), ge(), Ie(), (K = B()));
  }))();
}
function He(e) {
  let t = (0, Ue.c)(12),
    { error: n, requestRemainsPending: r } = e,
    i = r !== void 0 && r;
  bb0: switch (n.type) {
    case `unavailable`:
      switch (n.reason) {
        case `credentialMissing`: {
          let e;
          return (
            t[0] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, q.jsx)(o, {
                  id: `composer.userVerification.credentialMissing`,
                  defaultMessage: `No verification credential is available on this device`,
                  description: `Explains that no local signing credential exists; this screen does not enroll credentials`,
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          );
        }
        case `biometricsUnavailable`: {
          let e;
          return (
            t[1] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, q.jsx)(o, {
                  id: `composer.userVerification.biometricsUnavailable`,
                  defaultMessage: `Biometric verification is currently unavailable on this device`,
                  description: `Explains that the device cannot currently authenticate with biometrics`,
                })),
                (t[1] = e))
              : (e = t[1]),
            e
          );
        }
        case `providerUnavailable`: {
          let e;
          return (
            t[2] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, q.jsx)(o, {
                  id: `composer.userVerification.providerUnavailable`,
                  defaultMessage: `Identity verification is unavailable for this request`,
                  description: `Explains that local signing is unsupported or unavailable for this request`,
                })),
                (t[2] = e))
              : (e = t[2]),
            e
          );
        }
      }
    case `cancelled`: {
      if (n.reason === `interrupted`) {
        if (i) {
          let e;
          return (
            t[3] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, q.jsx)(o, {
                  id: `composer.userVerification.interruptedPending`,
                  defaultMessage: `Identity verification was interrupted. Try again`,
                  description: `Recovery when the platform interrupts identity verification but the request remains available to retry`,
                })),
                (t[3] = e))
              : (e = t[3]),
            e
          );
        }
        let e;
        return (
          t[4] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, q.jsx)(o, {
                id: `composer.userVerification.interrupted`,
                defaultMessage: `Identity verification was interrupted`,
                description: `Status when the signing attempt is interrupted by a changed account, connection, or request`,
              })),
              (t[4] = e))
            : (e = t[4]),
          e
        );
      }
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(o, {
              id: `composer.userVerification.cancelled`,
              defaultMessage: `Identity verification was cancelled`,
              description: `Status after the user cancels biometric verification`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `failed`:
      if (n.reason === `authenticationFailed`) {
        if (i) {
          let e;
          return (
            t[6] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, q.jsx)(o, {
                  id: `composer.userVerification.authenticationFailedPending`,
                  defaultMessage: `Biometric verification did not succeed. You can try again`,
                  description: `Biometric authentication failed, but the request remains pending and can be retried`,
                })),
                (t[6] = e))
              : (e = t[6]),
            e
          );
        }
        let e;
        return (
          t[7] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, q.jsx)(o, {
                id: `composer.userVerification.authenticationFailed`,
                defaultMessage: `Biometric verification did not succeed. The request was cancelled`,
                description: `Explains that failed biometric authentication cancelled the request without approving it`,
              })),
              (t[7] = e))
            : (e = t[7]),
          e
        );
      }
      if (n.reason === `timeout`) {
        if (i) {
          let e;
          return (
            t[8] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, q.jsx)(o, {
                  id: `composer.userVerification.timeoutPending`,
                  defaultMessage: `Identity verification timed out. You can try again`,
                  description: `Biometric authentication timed out, but the request remains pending and can be retried`,
                })),
                (t[8] = e))
              : (e = t[8]),
            e
          );
        }
        let e;
        return (
          t[9] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, q.jsx)(o, {
                id: `composer.userVerification.timeout`,
                defaultMessage: `Identity verification timed out. The request was cancelled`,
                description: `Explains that the biometric verification time limit elapsed and the request was cancelled without approval`,
              })),
              (t[9] = e))
            : (e = t[9]),
          e
        );
      }
      break bb0;
  }
  if (i) {
    let e;
    return (
      t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(o, {
            id: `composer.userVerification.failedPending`,
            defaultMessage: `Identity verification could not be completed. The request is still pending`,
            description: `A local verification attempt failed without approving or cancelling the pending request`,
          })),
          (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  let a;
  return (
    t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, q.jsx)(o, {
          id: `composer.userVerification.failed`,
          defaultMessage: `Identity verification could not be completed. The request was cancelled`,
          description: `Safe fallback after a signing or transport failure; no raw device error or challenge is displayed`,
        })),
        (t[11] = a))
      : (a = t[11]),
    a
  );
}
var Ue, q;
function We() {
  return (We = e(() => {
    ((Ue = R()), E(), (q = B()));
  }))();
}
function Ge({ appInfo: e, conversationId: t, requestId: n, messagingContext: r }) {
  if (e == null) return;
  let i;
  try {
    i = new URL(e.chatGptDesktopAuthOrigin ?? e.chatGptApiBaseUrl ?? `https://chatgpt.com`);
  } catch {
    return;
  }
  if (i.protocol !== `https:` || i.username || i.password) return;
  let a;
  if (i.hostname === `chatgpt-staging.com` || i.hostname.endsWith(`.chatgpt-staging.com`))
    a = `https://chatgpt-staging.com`;
  else if (i.hostname === `chatgpt.com` || i.hostname.endsWith(`.chatgpt.com`)) a = `https://chatgpt.com`;
  else return;
  let o = new URL(`/elicitation`, a);
  return (
    o.searchParams.set(`thread_id`, t),
    o.searchParams.set(`request_id`, n.toString()),
    r != null && (o.searchParams.set(`room_id`, r.roomId), o.searchParams.set(`message_id`, r.messageId)),
    {
      url: o.href,
      phoneReviewAvailable:
        a === `https://chatgpt.com` &&
        t.length > 0 &&
        n.toString().length > 0 &&
        r != null &&
        r.roomId.length > 0 &&
        r.messageId.length > 0,
    }
  );
}
function Ke(e) {
  let t = (0, Xe.c)(86),
    {
      conversationId: n,
      elicitation: r,
      hostId: c,
      requestId: u,
      beforeBegin: d,
      beforeAccept: f,
      beginVerification: p,
      onDeny: m,
      onOutcome: h,
      preserveRequestOnFailure: _,
      messagingContext: y,
      walletPresentation: b,
      hidden: x,
      disabled: S,
      onOpenInThread: C,
    } = e,
    T = _ !== void 0 && _,
    E = b === void 0 ? `inline` : b,
    D = x !== void 0 && x,
    O = S !== void 0 && S,
    j = s(a),
    M = oe(),
    { data: N } = g(De),
    P = l.userVerification != null,
    [F, I] = (0, J.useState)(null),
    L;
  t[0] === r ? (L = t[1]) : ((L = Te(r)), (t[0] = r), (t[1] = L));
  let R = L,
    z = R && E === `dialog`,
    B = T || R,
    V = F?.type === `cancelled` && F.reason === `interrupted`,
    ee;
  t[2] !== N || t[3] !== n || t[4] !== c || t[5] !== y || t[6] !== u || t[7] !== F?.type || t[8] !== V
    ? ((ee =
        (!P || F?.type === `unavailable` || V) && je(c)
          ? Ge({ appInfo: N, conversationId: n, requestId: u, messagingContext: y })
          : void 0),
      (t[2] = N),
      (t[3] = n),
      (t[4] = c),
      (t[5] = y),
      (t[6] = u),
      (t[7] = F?.type),
      (t[8] = V),
      (t[9] = ee))
    : (ee = t[9]);
  let te = ee,
    [ne, re] = (0, J.useState)(!1),
    [ie, H] = (0, J.useState)(!1),
    [ae, se] = (0, J.useState)(!1),
    U = (0, J.useRef)(null),
    ce = (0, J.useRef)(null),
    ue,
    de;
  (t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = () => () => {
        (U.current != null && ((U.current.cancelled = !0), (U.current = null)), ce.current?.dispose());
      }),
      (de = []),
      (t[10] = ue),
      (t[11] = de))
    : ((ue = t[10]), (de = t[11])),
    (0, J.useEffect)(ue, de));
  let fe;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = () => {
        U.current != null && ((U.current.cancelled = !0), (U.current = null), H(!1));
        let e = ce.current;
        e != null && (e.dispose(), se(!1));
      }),
      (t[12] = fe))
    : (fe = t[12]);
  let me = fe,
    he;
  t[13] !== n || t[14] !== c || t[15] !== u || t[16] !== j
    ? ((he = (e) => {
        (H(!0),
          le(j, c)
            .replyWithMcpServerElicitationResponse(n, u, ye(`cancel`, { "openai/userVerificationReason": e }))
            .catch(Ye)
            .finally(() => H(!1)));
      }),
      (t[13] = n),
      (t[14] = c),
      (t[15] = u),
      (t[16] = j),
      (t[17] = he))
    : (he = t[17]);
  let W = he,
    ge;
  t[18] === W
    ? (ge = t[19])
    : ((ge = () => {
        (me(), W(`userCancelled`));
      }),
      (t[18] = W),
      (t[19] = ge));
  let _e = ge,
    ve;
  t[20] === m
    ? (ve = t[21])
    : ((ve = () => {
        (me(),
          H(!0),
          (async () => {
            try {
              await m?.();
            } catch {}
          })().finally(() => H(!1)));
      }),
      (t[20] = m),
      (t[21] = ve));
  let be = ve,
    xe;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = () => {
        (re(!1), me());
      }),
      (t[22] = xe))
    : (xe = t[22]);
  let Se = xe,
    Ce;
  t[23] !== z || t[24] !== h
    ? ((Ce = async (e) => {
        z && e === `accepted` && re(!1);
        try {
          await h?.(e);
        } catch {}
      }),
      (t[23] = z),
      (t[24] = h),
      (t[25] = Ce))
    : (Ce = t[25]);
  let G = Ce,
    Ee;
  t[26] !== f ||
  t[27] !== p ||
  t[28] !== n ||
  t[29] !== r ||
  t[30] !== c ||
  t[31] !== B ||
  t[32] !== G ||
  t[33] !== W ||
  t[34] !== u ||
  t[35] !== j
    ? ((Ee = () => {
        I(null);
        let e = l.userVerification;
        if (e == null) {
          (j
            .get(w)
            .warning(
              (0, Y.jsx)(He, {
                error: { type: `unavailable`, reason: `providerUnavailable` },
                requestRemainsPending: B,
              }),
            ),
            B ? G(`failed`) : (me(), W(`providerUnavailable`)));
          return;
        }
        let t =
            p == null
              ? le(j, c).beginUserVerification(n, u, e, {
                  expectedRequest: r,
                  deviceId: pe(),
                  beforeAccept: f,
                  preserveRequestOnFailure: B,
                })
              : p(e),
          i,
          a = {
            disposed: !1,
            dispose: () => {
              a.disposed ||
                ((a.disposed = !0),
                Promise.resolve(i?.cancel()).catch(Je),
                i?.[Symbol.dispose](),
                t[Symbol.dispose]?.());
            },
          };
        ((ce.current = a),
          se(!0),
          t
            .then(async (e) => {
              if (((i = e), a.disposed)) {
                (Promise.resolve(e.cancel()).catch(qe), e[Symbol.dispose]());
                return;
              }
              let t = await e.wait();
              if (!a.disposed) {
                if (
                  t.status === `failed` &&
                  t.error.type === `cancelled` &&
                  t.error.reason === `userCancelled`
                ) {
                  await G(`cancelled`);
                  return;
                }
                if (t.status === `verified` && `accept` in e) {
                  let t = await f?.();
                  if (a.disposed) return;
                  let n = t !== !1 && (await e.accept(typeof t == `object` ? t : void 0));
                  await G(n ? `accepted` : `cancelled`);
                  return;
                }
                (t.status === `failed` &&
                  (I(t.error),
                  j.get(w).warning((0, Y.jsx)(He, { error: t.error, requestRemainsPending: B }))),
                  t.status !== `verified` && (await G(t.status)));
              }
            })
            .catch(async () => {
              a.disposed ||
                (j
                  .get(w)
                  .warning(
                    (0, Y.jsx)(He, {
                      error: { type: `failed`, reason: `serviceError` },
                      requestRemainsPending: B,
                    }),
                  ),
                B || W(`serviceError`),
                await G(`failed`));
            })
            .finally(() => {
              (a.disposed || se(!1), a.dispose(), ce.current === a && (ce.current = null));
            }));
      }),
      (t[26] = f),
      (t[27] = p),
      (t[28] = n),
      (t[29] = r),
      (t[30] = c),
      (t[31] = B),
      (t[32] = G),
      (t[33] = W),
      (t[34] = u),
      (t[35] = j),
      (t[36] = Ee))
    : (Ee = t[36]);
  let Oe = Ee,
    ke;
  t[37] !== d || t[38] !== Oe || t[39] !== O || t[40] !== G
    ? ((ke = () => {
        if (O || !P || ce.current != null || U.current != null) return;
        if (d == null) {
          Oe();
          return;
        }
        let e = { cancelled: !1 };
        ((U.current = e),
          H(!0),
          Promise.resolve()
            .then(d)
            .then(async (t) => {
              e.cancelled || (t ? Oe() : await G(`cancelled`));
            })
            .catch(async () => {
              e.cancelled || (await G(`failed`));
            })
            .finally(() => {
              U.current === e && ((U.current = null), H(!1));
            }));
      }),
      (t[37] = d),
      (t[38] = Oe),
      (t[39] = O),
      (t[40] = G),
      (t[41] = ke))
    : (ke = t[41]);
  let Ae = ke,
    Me = M && !O && !R,
    Pe = m == null ? _e : be,
    Ie;
  (t[42] !== Ae || t[43] !== Me || t[44] !== Pe
    ? ((Ie = { enabled: Me, approveEnabled: P, onApprove: Ae, onDecline: Pe }),
      (t[42] = Ae),
      (t[43] = Me),
      (t[44] = Pe),
      (t[45] = Ie))
    : (Ie = t[45]),
    we(Ie));
  let Le = m == null ? _e : be,
    ze = m == null && !z ? _e : Se,
    Be = m == null ? `cancel` : `deny`,
    K = te?.url,
    Ve = z ? `external-browser` : void 0,
    Ue;
  t[46] !== Ae ||
  t[47] !== ie ||
  t[48] !== r ||
  t[49] !== Le ||
  t[50] !== ze ||
  t[51] !== Be ||
  t[52] !== K ||
  t[53] !== Ve ||
  t[54] !== ae
    ? ((Ue = {
        available: P,
        checking: ie,
        elicitation: r,
        waiting: ae,
        onApprove: Ae,
        onCancel: Le,
        onDismiss: ze,
        secondaryAction: Be,
        mobileHandoffUrl: K,
        mobileHandoffOpenTarget: Ve,
      }),
      (t[46] = Ae),
      (t[47] = ie),
      (t[48] = r),
      (t[49] = Le),
      (t[50] = ze),
      (t[51] = Be),
      (t[52] = K),
      (t[53] = Ve),
      (t[54] = ae),
      (t[55] = Ue))
    : (Ue = t[55]);
  let q = Ue,
    We;
  t[56] !== N?.osName ||
  t[57] !== q ||
  t[58] !== n ||
  t[59] !== r ||
  t[60] !== c ||
  t[61] !== z ||
  t[62] !== R ||
  t[63] !== te?.phoneReviewAvailable ||
  t[64] !== u ||
  t[65] !== F ||
  t[66] !== V
    ? ((We = R
        ? (0, Y.jsx)(
            Ze,
            {
              ...q,
              inDialog: z,
              phoneReviewAvailable: te?.phoneReviewAvailable,
              verificationHint:
                F != null && (F.type === `unavailable` || V)
                  ? (0, Y.jsx)(`p`, {
                      className: `text-sm text-secondary`,
                      role: `status`,
                      children:
                        N?.osName === `macOS` && (F.reason === `biometricsUnavailable` || V)
                          ? (0, Y.jsx)(o, {
                              id: `composer.walletRequest.openLaptop`,
                              defaultMessage: `If your laptop is closed, open it to use Touch ID, then try again`,
                              description: `Recovery after macOS reports unavailable or interrupted biometric verification; the app cannot determine whether the laptop lid is closed`,
                            })
                          : (0, Y.jsx)(He, { error: F, requestRemainsPending: !0 }),
                    })
                  : void 0,
            },
            JSON.stringify([c, n, u, r]),
          )
        : (0, Y.jsx)(Re, { ...q })),
      (t[56] = N?.osName),
      (t[57] = q),
      (t[58] = n),
      (t[59] = r),
      (t[60] = c),
      (t[61] = z),
      (t[62] = R),
      (t[63] = te?.phoneReviewAvailable),
      (t[64] = u),
      (t[65] = F),
      (t[66] = V),
      (t[67] = We))
    : (We = t[67]);
  let Ke = We;
  if (!z) return Ke;
  let $e = ne && !D,
    et;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = { "aria-describedby": void 0 }), (t[68] = et))
    : (et = t[68]);
  let tt = O || D,
    nt;
  t[69] === C
    ? (nt = t[70])
    : ((nt = (e) => {
        C != null && (e.preventDefault(), C());
      }),
      (t[69] = C),
      (t[70] = nt));
  let rt, it, X;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = (0, Y.jsx)(Ne, { name: `wallet` })),
      (it = (0, Y.jsx)(o, { ...Qe.reviewPurchase })),
      (X = (0, Y.jsx)(i, {})),
      (t[71] = rt),
      (t[72] = it),
      (t[73] = X))
    : ((rt = t[71]), (it = t[72]), (X = t[73]));
  let Z;
  t[74] !== tt || t[75] !== nt
    ? ((Z = (0, Y.jsxs)(Fe, {
        color: `accentSubtle`,
        size: `dialogGhost`,
        radius: `full`,
        disabled: tt,
        onClick: nt,
        children: [rt, it, X],
      })),
      (t[74] = tt),
      (t[75] = nt),
      (t[76] = Z))
    : (Z = t[76]);
  let at;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (e) => {
        e ? re(!0) : Se();
      }),
      (t[77] = at))
    : (at = t[77]);
  let ot;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (0, Y.jsx)(v, { className: `sr-only`, children: (0, Y.jsx)(o, { ...Qe.reviewPurchase }) })),
      (t[78] = ot))
    : (ot = t[78]);
  let st;
  t[79] !== Ke || t[80] !== O
    ? ((st = (0, Y.jsx)(A, {
        className: `[scrollbar-gutter:stable]`,
        variant: `confirmation`,
        size: `viewport`,
        children: (0, Y.jsx)(`fieldset`, { className: `min-w-0`, disabled: O, children: Ke }),
      })),
      (t[79] = Ke),
      (t[80] = O),
      (t[81] = st))
    : (st = t[81]);
  let ct;
  return (
    t[82] !== $e || t[83] !== Z || t[84] !== st
      ? ((ct = (0, Y.jsxs)(k, {
          open: $e,
          size: `beacon`,
          variant: `form`,
          closeButtonSize: `compact`,
          contentProps: et,
          triggerContent: Z,
          onOpenChange: at,
          children: [ot, st],
        })),
        (t[82] = $e),
        (t[83] = Z),
        (t[84] = st),
        (t[85] = ct))
      : (ct = t[85]),
    ct
  );
}
function qe() {}
function Je() {}
function Ye() {}
var Xe, J, Y, Ze, Qe;
function $e() {
  return ($e = e(() => {
    ((Xe = R()),
      m(),
      Ee(),
      (J = V()),
      E(),
      ce(),
      se(),
      he(),
      Me(),
      _e(),
      ae(),
      Pe(),
      L(),
      x(),
      h(),
      ee(),
      O(),
      fe(),
      N(),
      z(),
      Ve(),
      We(),
      (Y = B()),
      M(),
      (Ze = r(
        () =>
          S(
            () => import(`./wallet-card-805c60ad50bc.js`).then((e) => e.WalletUserVerificationRequestCard),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
            import.meta.url,
          ),
        { fallback: (0, Y.jsx)(ze, {}), errorFallback: (e) => (0, Y.jsx)(Re, { ...e, checking: !0 }) },
      )),
      (Qe = n({
        reviewPurchase: {
          id: `composer.walletRequest.reviewPurchase`,
          defaultMessage: `Review purchase`,
          description: `Label for opening the Wallet purchase review dialog and its accessible title; opening it does not authorize payment`,
        },
      })));
  }))();
}
function et(e) {
  let t = (0, X.c)(11),
    { children: n, className: r } = e;
  if (D()) {
    let e;
    t[0] === r
      ? (e = t[1])
      : ((e = C(`overflow-x-hidden overflow-y-auto overscroll-contain text-size-chat`, r)),
        (t[0] = r),
        (t[1] = e));
    let i;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = { borderRadius: `var(--radius-xl)` }), (t[2] = i))
      : (i = t[2]);
    let a;
    return (
      t[3] !== n || t[4] !== e
        ? ((a = (0, Z.jsx)(de, { className: e, variant: `transcript-card`, style: i, children: n })),
          (t[3] = n),
          (t[4] = e),
          (t[5] = a))
        : (a = t[5]),
      a
    );
  }
  let i;
  t[6] === r
    ? (i = t[7])
    : ((i = C(
        `text-size-chat flex flex-col overflow-hidden rounded-xl border border-default bg-surface text-default`,
        r,
      )),
      (t[6] = r),
      (t[7] = i));
  let a;
  return (
    t[8] !== n || t[9] !== i
      ? ((a = (0, Z.jsx)(`div`, { className: i, children: n })), (t[8] = n), (t[9] = i), (t[10] = a))
      : (a = t[10]),
    a
  );
}
function tt(e) {
  let t = (0, X.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = C(`flex items-center gap-2 text-secondary`, r)), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, Z.jsx)(`div`, { className: i, children: n })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function nt(e) {
  let t = (0, X.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = C(`text-codex-description`, r)), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, Z.jsx)(`div`, { className: i, children: n })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function rt(e) {
  let t = (0, X.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = C(`flex flex-col gap-2 p-3`, r)), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, Z.jsx)(`div`, { className: i, children: n })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function it(e) {
  let t = (0, X.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ children: n, className: r, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  t[4] === r ? (a = t[5]) : ((a = C(`border-t border-border/50 px-3 py-2`, r)), (t[4] = r), (t[5] = a));
  let o;
  return (
    t[6] !== n || t[7] !== i || t[8] !== a
      ? ((o = (0, Z.jsx)(`form`, { className: a, ...i, children: n })),
        (t[6] = n),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
var X, Z;
function at() {
  return (at = e(() => {
    ((X = R()), _(), Oe(), p(), (Z = B()));
  }))();
}
var ot;
function st() {
  return (st = e(() => {
    (at(), (ot = { Root: et, Header: tt, Description: nt, Content: rt, Footer: it }));
  }))();
}
function ct(e) {
  let n = (0, lt.c)(51),
    {
      icon: r,
      title: i,
      description: a,
      secondaryActionLabel: s,
      showDeclineShortcut: l,
      primaryActionLabel: u,
      isPrimaryActionLoading: d,
      isSecondaryActionLoading: f,
      onDecline: p,
      onPrimaryActionClick: m,
      onSubmit: h,
    } = e,
    g = l === void 0 || l,
    _ = f !== void 0 && f,
    v = oe(),
    y = d || _,
    b = v && !y,
    x = te(be, `approval.approve`),
    S = te(be, `approval.decline`),
    C;
  (n[0] !== b || n[1] !== p || n[2] !== h
    ? ((C = { enabled: b, onApprove: h, onDecline: p }), (n[0] = b), (n[1] = p), (n[2] = h), (n[3] = C))
    : (C = n[3]),
    we(C));
  let w;
  n[4] === h
    ? (w = n[5])
    : ((w = (e) => {
        (e.preventDefault(), h());
      }),
      (n[4] = h),
      (n[5] = w));
  let T;
  n[6] === r
    ? (T = n[7])
    : ((T = (0, Q.jsx)(`span`, {
        className: `flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-secondary/92 text-secondary`,
        children: r,
      })),
      (n[6] = r),
      (n[7] = T));
  let E;
  n[8] === i
    ? (E = n[9])
    : ((E = (0, Q.jsx)(`div`, {
        className: `truncate text-size-chat font-medium text-default select-none`,
        children: i,
      })),
      (n[8] = i),
      (n[9] = E));
  let D;
  n[10] === a
    ? (D = n[11])
    : ((D = a == null ? null : (0, Q.jsx)(ot.Description, { className: `text-size-chat-sm`, children: a })),
      (n[10] = a),
      (n[11] = D));
  let O;
  n[12] !== E || n[13] !== D
    ? ((O = (0, Q.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [E, D] })),
      (n[12] = E),
      (n[13] = D),
      (n[14] = O))
    : (O = n[14]);
  let k;
  n[15] !== T || n[16] !== O
    ? ((k = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 basis-64 items-center gap-3`,
        children: [T, O],
      })),
      (n[15] = T),
      (n[16] = O),
      (n[17] = k))
    : (k = n[17]);
  let A;
  n[18] === s
    ? (A = n[19])
    : ((A =
        s ??
        (0, Q.jsx)(o, {
          id: `composer.toolSuggestion.notNow`,
          defaultMessage: `Not now`,
          description: `Secondary action label for declining a suggestion-style request`,
        })),
      (n[18] = s),
      (n[19] = A));
  let j;
  n[20] === A ? (j = n[21]) : ((j = (0, Q.jsx)(`span`, { children: A })), (n[20] = A), (n[21] = j));
  let M;
  n[22] !== b || n[23] !== S || n[24] !== g
    ? ((M = g && b && S != null ? (0, Q.jsx)(c, { keysLabel: S }) : null),
      (n[22] = b),
      (n[23] = S),
      (n[24] = g),
      (n[25] = M))
    : (M = n[25]);
  let N;
  n[26] !== y || n[27] !== _ || n[28] !== p || n[29] !== j || n[30] !== M
    ? ((N = (0, Q.jsxs)(t, {
        color: `outline`,
        disabled: y,
        loading: _,
        size: `toolbar`,
        type: `button`,
        onClick: p,
        children: [j, M],
      })),
      (n[26] = y),
      (n[27] = _),
      (n[28] = p),
      (n[29] = j),
      (n[30] = M),
      (n[31] = N))
    : (N = n[31]);
  let P;
  n[32] === u ? (P = n[33]) : ((P = (0, Q.jsx)(`span`, { children: u })), (n[32] = u), (n[33] = P));
  let F;
  n[34] !== x || n[35] !== b
    ? ((F = b && x != null ? (0, Q.jsx)(c, { keysLabel: x }) : null), (n[34] = x), (n[35] = b), (n[36] = F))
    : (F = n[36]);
  let I;
  n[37] !== y || n[38] !== v || n[39] !== d || n[40] !== m || n[41] !== P || n[42] !== F
    ? ((I = (0, Q.jsxs)(t, {
        autoFocus: v,
        color: `primary`,
        disabled: y,
        size: `toolbar`,
        type: `submit`,
        loading: d,
        onClick: m,
        children: [P, F],
      })),
      (n[37] = y),
      (n[38] = v),
      (n[39] = d),
      (n[40] = m),
      (n[41] = P),
      (n[42] = F),
      (n[43] = I))
    : (I = n[43]);
  let L;
  n[44] !== N || n[45] !== I
    ? ((L = (0, Q.jsxs)(`div`, {
        className: `ms-auto flex max-w-full shrink-0 flex-wrap items-center justify-end gap-2`,
        children: [N, I],
      })),
      (n[44] = N),
      (n[45] = I),
      (n[46] = L))
    : (L = n[46]);
  let R;
  return (
    n[47] !== L || n[48] !== w || n[49] !== k
      ? ((R = (0, Q.jsx)(ot.Root, {
          children: (0, Q.jsxs)(`form`, {
            className: `flex flex-wrap items-center gap-3 p-3`,
            onSubmit: w,
            children: [k, L],
          }),
        })),
        (n[47] = L),
        (n[48] = w),
        (n[49] = k),
        (n[50] = R))
      : (R = n[50]),
    R
  );
}
var lt, Q;
function ut() {
  return (ut = e(() => {
    ((lt = R()), m(), E(), W(), _e(), ae(), I(), u(), st(), (Q = B()));
  }))();
}
function dt(e) {
  let t = (0, ft.c)(35),
    { conversationId: n, hostId: r, requestId: i, action: c, onOpenInThread: l, onReply: u } = e,
    f = s(a),
    [p, m] = (0, pt.useState)(!1),
    h = (0, pt.useRef)(!1),
    g = p ? mt.continue : mt.openLink,
    _;
  t[0] !== n || t[1] !== r || t[2] !== u || t[3] !== i || t[4] !== f
    ? ((_ = (e) => {
        if (h.current) return;
        h.current = u == null;
        let t = ye(e);
        (u == null ? le(f, r).replyWithMcpServerElicitationResponse(n, i, t) : u(t)).catch(() => {
          h.current = !1;
        });
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = u),
      (t[3] = i),
      (t[4] = f),
      (t[5] = _))
    : (_ = t[5]);
  let v = _,
    y;
  t[6] === v
    ? (y = t[7])
    : ((y = () => {
        v(`decline`);
      }),
      (t[6] = v),
      (t[7] = y));
  let b = y,
    x;
  t[8] !== c.url || t[9] !== p || t[10] !== l || t[11] !== v
    ? ((x = () => {
        if (l != null) {
          l();
          return;
        }
        if (p) {
          v(`accept`);
          return;
        }
        (m(!0), ue({ href: c.url, initiator: `mcp_app_resource` }));
      }),
      (t[8] = c.url),
      (t[9] = p),
      (t[10] = l),
      (t[11] = v),
      (t[12] = x))
    : (x = t[12]);
  let S = x,
    C;
  t[13] !== c.url || t[14] !== p || t[15] !== l
    ? ((C = (e) => {
        if (l != null) {
          (e.preventDefault(), l());
          return;
        }
        p || (m(!0), U({ event: e, href: c.url, initiator: `mcp_app_resource` }));
      }),
      (t[13] = c.url),
      (t[14] = p),
      (t[15] = l),
      (t[16] = C))
    : (C = t[16]);
  let w = C,
    T,
    E;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(d, { className: `text-secondary`, "aria-hidden": !1, asset: j })),
      (E = (0, $.jsx)(o, {
        id: `composer.urlAction.title`,
        defaultMessage: `Action required`,
        description: `Title for a generic URL elicitation that opens in the browser`,
      })),
      (t[17] = T),
      (t[18] = E))
    : ((T = t[17]), (E = t[18]));
  let D;
  t[19] === c.message
    ? (D = t[20])
    : ((D = (0, $.jsx)(`div`, { children: c.message })), (t[19] = c.message), (t[20] = D));
  let O;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(`span`, {
        className: `shrink-0`,
        children: (0, $.jsx)(o, {
          id: `composer.urlAction.urlLabel`,
          defaultMessage: `URL`,
          description: `Label for the URL opened by a generic URL elicitation`,
        }),
      })),
      (t[21] = O))
    : (O = t[21]);
  let k;
  t[22] === c.url
    ? (k = t[23])
    : ((k = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 gap-2 text-size-chat-sm leading-5`,
        children: [
          O,
          (0, $.jsx)(`span`, { className: `min-w-0 wrap-anywhere text-default`, children: c.url }),
        ],
      })),
      (t[22] = c.url),
      (t[23] = k));
  let A;
  t[24] !== D || t[25] !== k
    ? ((A = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-1`, children: [D, k] })),
      (t[24] = D),
      (t[25] = k),
      (t[26] = A))
    : (A = t[26]);
  let M;
  t[27] === g ? (M = t[28]) : ((M = (0, $.jsx)(o, { ...g })), (t[27] = g), (t[28] = M));
  let N;
  return (
    t[29] !== b || t[30] !== S || t[31] !== w || t[32] !== A || t[33] !== M
      ? ((N = (0, $.jsx)(ct, {
          icon: T,
          title: E,
          description: A,
          primaryActionLabel: M,
          isPrimaryActionLoading: !1,
          onDecline: b,
          onPrimaryActionClick: w,
          onSubmit: S,
        })),
        (t[29] = b),
        (t[30] = S),
        (t[31] = w),
        (t[32] = A),
        (t[33] = M),
        (t[34] = N))
      : (N = t[34]),
    N
  );
}
var ft, pt, $, mt;
function ht() {
  return (ht = e(() => {
    ((ft = R()),
      y(),
      m(),
      Ee(),
      (pt = V()),
      E(),
      ce(),
      ie(),
      f(),
      z(),
      ut(),
      ($ = B()),
      (mt = n({
        openLink: {
          id: `composer.urlAction.openLink`,
          defaultMessage: `Open link`,
          description: `Primary action label for opening a generic URL elicitation`,
        },
        continue: {
          id: `composer.urlAction.continue`,
          defaultMessage: `Continue`,
          description: `Primary action label after opening a generic URL elicitation`,
        },
      })));
  }))();
}
function gt(e) {
  let t = (0, _t.c)(6),
    { message: n } = e,
    r = n.url,
    i;
  t[0] !== n.values || t[1] !== r
    ? ((i =
        r == null
          ? n.values
          : {
              ...n.values,
              link: (e) =>
                (0, vt.jsx)(Ae, {
                  className: `cursor-interaction text-info underline underline-offset-2`,
                  href: r,
                  initiator: `mcp_app_resource`,
                  children: e,
                }),
            }),
      (t[0] = n.values),
      (t[1] = r),
      (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] !== n.descriptor || t[4] !== i
      ? ((a = (0, vt.jsx)(o, { ...n.descriptor, values: i })), (t[3] = n.descriptor), (t[4] = i), (t[5] = a))
      : (a = t[5]),
    a
  );
}
var _t, vt;
function yt() {
  return (yt = e(() => {
    ((_t = R()), E(), ke(), (vt = B()));
  }))();
}
function bt(e) {
  let t = (0, xt.c)(18),
    {
      className: n,
      alt: r,
      fallback: i,
      hostId: a,
      knownAppId: o,
      logoDarkUrl: s,
      logoUrl: c,
      pluginId: l,
      preferComposerIcon: u,
    } = e,
    d = u !== void 0 && u,
    f;
  t[0] === a ? (f = t[1]) : ((f = { hostId: a }), (t[0] = a), (t[1] = f));
  let p = H(f),
    m;
  t[2] !== a || t[3] !== p
    ? ((m = { enabled: p, hostId: a, roots: void 0, resolveActiveRoots: !0 }),
      (t[2] = a),
      (t[3] = p),
      (t[4] = m))
    : (m = t[4]);
  let { data: h } = ne(m),
    g;
  t[5] !== h || t[6] !== l
    ? ((g = h?.find((e) => e.plugin.id === l || e.plugin.name === l)), (t[5] = h), (t[6] = l), (t[7] = g))
    : (g = t[7]);
  let _ = g,
    v = d ? _?.composerIconPath : void 0,
    y = _?.displayName ?? _?.plugin.name,
    b = v ?? _?.logoPath ?? c,
    x = v ?? _?.logoDarkPath ?? s,
    S;
  t[8] !== r || t[9] !== n || t[10] !== i || t[11] !== o || t[12] !== b || t[13] !== x
    ? ((S = (0, St.jsx)(Se, {
        alt: r,
        className: n,
        knownAppId: o,
        logoUrl: b,
        logoDarkUrl: x,
        fallback: i,
      })),
      (t[8] = r),
      (t[9] = n),
      (t[10] = i),
      (t[11] = o),
      (t[12] = b),
      (t[13] = x),
      (t[14] = S))
    : (S = t[14]);
  let C;
  return (
    t[15] !== y || t[16] !== S
      ? ((C = (0, St.jsx)(F, { tooltipContent: y, children: S })), (t[15] = y), (t[16] = S), (t[17] = C))
      : (C = t[17]),
    C
  );
}
var xt, St;
function Ct() {
  return (Ct = e(() => {
    ((xt = R()), ve(), b(), G(), re(), (St = B()));
  }))();
}
export { dt as a, ut as c, yt as i, Ke as l, Ct as n, ht as o, gt as r, ct as s, bt as t, $e as u };
//# sourceMappingURL=mcp-plugin-logo-807452fde2d3.js.map
