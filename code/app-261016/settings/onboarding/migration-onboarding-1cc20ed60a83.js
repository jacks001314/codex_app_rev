import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  BSt as r,
  DB as i,
  FBt as a,
  Gi as o,
  HO as s,
  Hi as c,
  IO as ee,
  JO as l,
  Ji as u,
  KO as d,
  Ki as te,
  LNt as f,
  LO as ne,
  Lit as re,
  Mst as p,
  NSt as m,
  OB as ie,
  PBt as h,
  Pit as g,
  Qst as ae,
  RO as oe,
  Ui as _,
  Vi as v,
  Vit as y,
  WO as b,
  Wi as x,
  XOt as S,
  Xi as C,
  Y3 as w,
  Yi as T,
  Z3 as E,
  ZSt as D,
  jit as O,
  jst as k,
  mCt as A,
  nCt as j,
  okt as se,
  qO as M,
  qi as N,
  tkt as P,
  vD as ce,
  yD as F,
  zO as le,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  AP as I,
  BRr as L,
  Ejr as R,
  FWn as z,
  GLn as ue,
  I2n as B,
  IMr as de,
  IWn as V,
  N2n as fe,
  QIr as H,
  SLn as U,
  XIr as W,
  ZUn as pe,
  Zjr as me,
  dAt as he,
  dLr as ge,
  fAt as _e,
  iRr as ve,
  nMr as ye,
  qLn as be,
  rBr as xe,
  tyr as Se,
  vLn as Ce,
  vjr as we,
  wLr as Te,
  xMr as Ee,
  xjr as De,
  yMr as Oe,
} from "./app-initial-ad16eaadf81f.js";
import { o as ke, s as Ae } from "./workspace-2b6b070f8f00.js";
import { n as G, t as je } from "./radio-group-8a1b881bed8e.js";
import { n as Me, r as K } from "./contracts-f473c8d038ac.js";
import { n as Ne } from "./eligibility-ad39d272751d.js";
import { n as Pe, t as Fe } from "./started-toast-c563ca86941b.js";
import { d as Ie, r as Le, t as Re, u as ze } from "./progress-state-5cf15308345a.js";
function Be(e) {
  let t = (0, Ve.c)(5),
    { icon: n, children: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, He.jsx)(`span`, {
        className: `max-w-full text-onboarding-label wrap-break-word`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, He.jsxs)(`li`, {
          className: `flex min-w-0 flex-col items-center rounded-2xl bg-(--color-background-primary-soft-alpha)/50 px-3 py-4 text-center`,
          children: [n, i],
        })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
var Ve, He;
function Ue() {
  return (Ue = e(() => {
    ((Ve = h()), (He = f()));
  }))();
}
function We(e) {
  let t = (0, Ge.c)(15),
    { billing: n, onRetry: r } = e,
    i = se();
  if (n == null) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, q.jsx)(P, {
          id: `transferBilling.loading`,
          defaultMessage: `Review your billing details before starting the transfer`,
          description: `Status shown while billing terms for a personal workspace transfer are unavailable; confirmation is disabled. No placeholders.`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] === r
      ? (n = t[2])
      : ((n =
          r != null &&
          (0, q.jsx)(w, {
            type: `button`,
            color: `outlineGhost`,
            onClick: r,
            children: (0, q.jsx)(P, {
              id: `transferBilling.retry`,
              defaultMessage: `Try again`,
              description: `Retries the read-only billing preview for a personal workspace transfer; does not start the transfer. No placeholders.`,
            }),
          })),
        (t[1] = r),
        (t[2] = n));
    let i;
    return (
      t[3] === n
        ? (i = t[4])
        : ((i = (0, q.jsxs)(`span`, { role: `status`, children: [e, n] })), (t[3] = n), (t[4] = i)),
      i
    );
  }
  switch (n.outcome) {
    case `retained`: {
      let e;
      t[5] !== n.period_end || t[6] !== i
        ? ((e = i.formatDate(n.period_end, {
            year: `numeric`,
            month: `long`,
            day: `numeric`,
            timeZone: `UTC`,
          })),
          (t[5] = n.period_end),
          (t[6] = i),
          (t[7] = e))
        : (e = t[7]);
      let r;
      return (
        t[8] === e
          ? (r = t[9])
          : ((r = (0, q.jsx)(P, {
              id: `transferBilling.retained`,
              defaultMessage: `Your personal subscription will remain active until {date} and won’t renew. You won’t receive a refund. You can continue using your personal workspace and remaining Wallet balance during that time. Your Wallet balance won’t transfer to this workspace.`,
              description: `Billing and access terms before a personal-to-workspace transfer. The personal plan and Wallet remain usable until date, a localized billing period end. No refund or renewal. Do not explain eligibility criteria.`,
              values: { date: e },
            })),
            (t[8] = e),
            (t[9] = r)),
        r
      );
    }
    case `cancel_with_refund`: {
      let e;
      return (
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(P, {
              id: `transferBilling.cancel_with_refund`,
              defaultMessage: `Your personal subscription will end when the transfer starts. You’re eligible for a prorated refund for unused paid time, returned to your payment method or Wallet according to how you paid. You’ll lose access to your personal workspace and remaining Wallet balance. Your Wallet balance won’t transfer to this workspace.`,
              description: `Billing and access terms before a personal-to-workspace transfer. Immediate cancellation is eligible for a prorated refund. Refunds follow the original payment funding, including Wallet. The exact amount is determined at cancellation. Personal workspace and Wallet access ends. Do not explain eligibility criteria. No placeholders.`,
            })),
            (t[10] = e))
          : (e = t[10]),
        e
      );
    }
    case `cancel_without_refund`: {
      let e;
      return (
        t[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(P, {
              id: `transferBilling.cancel_without_refund`,
              defaultMessage: `Your personal subscription will end when the transfer starts. You won’t receive a refund. You’ll lose access to your personal workspace and remaining Wallet balance. Your Wallet balance won’t transfer to this workspace.`,
              description: `Billing and access terms before a personal-to-workspace transfer. Immediate cancellation without a refund, with loss of the personal workspace and Wallet access. Do not explain eligibility criteria. No placeholders.`,
            })),
            (t[11] = e))
          : (e = t[11]),
        e
      );
    }
    case `no_subscription`: {
      let e;
      return (
        t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(P, {
              id: `transferBilling.no_subscription`,
              defaultMessage: `You don’t have an active personal subscription to cancel or refund. When the transfer starts, you’ll lose access to your personal workspace and remaining Wallet balance. Your Wallet balance won’t transfer to this workspace.`,
              description: `Billing and access terms before a personal-to-workspace transfer with no active personal subscription. The personal workspace and Wallet become inaccessible. No refund promise. No placeholders.`,
            })),
            (t[12] = e))
          : (e = t[12]),
        e
      );
    }
    case `apple_subscription`: {
      let e;
      return (
        t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(P, {
              id: `transferBilling.apple_subscription`,
              defaultMessage: `Your App Store subscription won’t be canceled or refunded by this transfer. Cancel it in your Apple subscription settings to stop future charges. When the transfer starts, you’ll lose access to your personal workspace and remaining Wallet balance. Your Wallet balance won’t transfer to this workspace.`,
              description: `Billing and access terms before a personal-to-workspace transfer billed through Apple. The user must cancel the subscription with Apple; transfer does not issue a refund. Personal workspace and Wallet access ends. No placeholders.`,
            })),
            (t[13] = e))
          : (e = t[13]),
        e
      );
    }
    case `google_subscription`: {
      let e;
      return (
        t[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(P, {
              id: `transferBilling.google_subscription`,
              defaultMessage: `Your Google Play subscription won’t renew, and this transfer won’t issue a refund. When the transfer starts, you’ll lose access to your personal workspace and remaining Wallet balance. Your Wallet balance won’t transfer to this workspace.`,
              description: `Billing and access terms before a personal-to-workspace transfer billed through Google Play. Renewals are canceled without a refund and personal workspace and Wallet access ends. No placeholders.`,
            })),
            (t[14] = e))
          : (e = t[14]),
        e
      );
    }
  }
}
var Ge, q;
function Ke() {
  return (Ke = e(() => {
    ((Ge = h()), S(), E(), (q = f()));
  }))();
}
function qe(e) {
  let t = (0, Je.c)(5),
    { status: n } = e;
  switch (n) {
    case `loading`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(P, {
              id: `personalMigration.linkStatus.loading`,
              defaultMessage: `Checking whether your personal data can be merged…`,
              description: `Loading message in the migration link dialog while checking account and workspace eligibility`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `error`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(P, {
              id: `personalMigration.linkStatus.error`,
              defaultMessage: `We couldn’t check whether you can merge your personal data. Please try again.`,
              description: `Error message in the migration link dialog when the account lookup fails; the user can retry without starting a transfer`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `select-workspace`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(P, {
              id: `personalMigration.linkStatus.selectWorkspace`,
              defaultMessage: `Switch to the Business workspace you want to merge into, then open this link again`,
              description: `Help in the migration link dialog when the user is in their personal workspace instead of a destination Business workspace`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `no-personal-workspace`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(P, {
              id: `personalMigration.linkStatus.noPersonalWorkspace`,
              defaultMessage: `You don’t have an active personal workspace to merge from`,
              description: `Help in the migration link dialog when no active personal workspace is available as a source, including after a previous merge`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `data-residency`:
    case `unavailable`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, J.jsx)(P, {
              id: `personalMigration.linkStatus.unavailable`,
              defaultMessage: `Merging personal data isn’t available in this workspace`,
              description: `Help in the migration link dialog when the selected workspace does not support merging personal data through Data controls`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
  }
}
var Je, J;
function Ye() {
  return (Ye = e(() => {
    ((Je = h()), S(), (J = f()));
  }))();
}
function Xe(e) {
  let t = (0, $e.c)(89),
    {
      step: n,
      billing: r,
      fromSettings: i,
      linkStatus: a,
      formattedPersonalWalletBalance: o,
      pending: s,
      loadingBalance: c,
      error: l,
      transferAccepted: u,
      transferUnconfirmed: te,
      allowCloseAfterTransfer: f,
      description: re,
      primaryLabel: p,
      secondaryLabel: m,
      onTransfer: ie,
      onBack: h,
      onClose: g,
      onConfirm: ae,
      onLearnMore: oe,
    } = e,
    _ = i !== void 0 && i,
    v = te !== void 0 && te,
    y = f !== void 0 && f,
    x = (0, et.useRef)(null),
    S = a?.status,
    C = S == null && n === `transfer`,
    T = S === `loading` || s || (C && c),
    E;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = () => {
        x.current?.focus();
      }),
      (t[0] = E))
    : (E = t[0]);
  let D;
  (t[1] !== S || t[2] !== n ? ((D = [n, S]), (t[1] = S), (t[2] = n), (t[3] = D)) : (D = t[3]),
    (0, et.useEffect)(E, D));
  let O;
  if (S === `error`) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(P, {
          id: `personalMigration.linkStatus.retry`,
          defaultMessage: `Try again`,
          description: `Button that retries the eligibility lookup after an account-loading error in the migration link dialog; does not start a transfer`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (O = e));
  } else if (v) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(P, {
          id: `personalMigration.retryTransfer`,
          defaultMessage: `Retry transfer`,
          description: `Checks the previous transfer and retries the original operation when submission or source workspace closure is unfinished`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (O = e));
  } else if (u) {
    let e;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(P, {
          id: `personalMigration.refresh.button`,
          defaultMessage: `Refresh workspace`,
          description: `Retries refreshing the browser after personal-data migration has already started; does not submit another transfer`,
        })),
        (t[6] = e))
      : (e = t[6]),
      (O = e));
  } else if (C && s) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(P, {
          id: `personalMigration.startingTransfer`,
          defaultMessage: `Starting transfer…`,
          description: `Disabled confirmation button while the request to start transferring personal data into the current workspace is pending`,
        })),
        (t[7] = e))
      : (e = t[7]),
      (O = e));
  } else if (C) {
    let e;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(P, {
          id: `personalMigration.history.startTransfer`,
          defaultMessage: `Start transfer`,
          description: `Starts the irreversible personal-data migration after the user has reviewed the confirmation`,
        })),
        (t[8] = e))
      : (e = t[8]),
      (O = e));
  } else {
    let e;
    (t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(P, {
          id: `personalMigration.history.transferData`,
          defaultMessage: `Transfer data`,
          description: `Opens the final migration confirmation without starting a transfer`,
        })),
        (t[9] = e))
      : (e = t[9]),
      (O = e));
  }
  let k;
  if (S != null) {
    let e;
    (t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(P, {
          id: `personalMigration.linkStatus.close`,
          defaultMessage: `Close`,
          description: `Button that dismisses the migration link status dialog and leaves Data controls open`,
        })),
        (t[10] = e))
      : (e = t[10]),
      (k = e));
  } else if (u) {
    let e;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(P, {
          id: `common.close`,
          defaultMessage: `Close`,
          description: `Close button label`,
        })),
        (t[11] = e))
      : (e = t[11]),
      (k = e));
  } else if (_ && !C) {
    let e;
    (t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(P, { id: `common.cancel`, defaultMessage: `Cancel`, description: `Cancel button` })),
        (t[12] = e))
      : (e = t[12]),
      (k = e));
  } else if (C) {
    let e;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(P, {
          id: `selectedModal.back`,
          defaultMessage: `Back`,
          description: `Returns to the preceding step without starting the transfer`,
        })),
        (t[13] = e))
      : (e = t[13]),
      (k = e));
  } else {
    let e;
    (t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(P, {
          id: `personalMigration.history.startFresh`,
          defaultMessage: `Start fresh`,
          description: `Continues in the current workspace while keeping the personal workspace and subscription separate`,
        })),
        (t[14] = e))
      : (e = t[14]),
      (k = e));
  }
  let A;
  t[15] === oe
    ? (A = t[16])
    : ((A = {
        strong: Ze,
        link: (e) =>
          (0, Y.jsx)(ue, {
            appearance: `secondary`,
            href: `https://help.openai.com/articles/8801890`,
            openTarget: `external-browser`,
            initiator: `open_in_browser_bridge`,
            onClick: oe,
            onAuxClick: (e) => {
              e.button === 1 && oe?.();
            },
            children: e,
          }),
      }),
      (t[15] = oe),
      (t[16] = A));
  let j = A,
    se = re;
  if (S != null) {
    let e;
    (t[17] === S ? (e = t[18]) : ((e = (0, Y.jsx)(qe, { status: S })), (t[17] = S), (t[18] = e)), (se = e));
  } else if (se == null) {
    if (C) {
      let e;
      (t[19] !== j.link || t[20] !== j.strong
        ? ((e = (0, Y.jsx)(P, {
            id: `personalMigration.settings.confirmation.accessWarning.dataTransfer`,
            defaultMessage: `Your personal ChatGPT data will be transferred to this workspace. <strong>Your sites won’t transfer.</strong> If you leave this workspace, or if the workspace is deactivated, you will lose access to the transferred data there. This can’t be undone. <link>Learn more</link>`,
            description: `Final confirmation before transferring personal ChatGPT data into a Business workspace. Sites (hosted websites or apps) are excluded. Destination data access requires membership. Preserve strong emphasis on Sites exclusion; link opens migration help. No variable placeholders.`,
            values: { strong: j.strong, link: j.link },
          })),
          (t[19] = j.link),
          (t[20] = j.strong),
          (t[21] = e))
        : (e = t[21]),
        (se = e));
    } else if (_) {
      let e;
      (t[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(P, {
            id: `personalMigration.settings.overview.description`,
            defaultMessage: `Bring your personal ChatGPT data into this workspace to preserve your memory and context. You can transfer:`,
            description: `Introduces the five personal data categories in the optional Settings migration overview for an existing Business workspace member. Cancel leaves the personal workspace and its data unchanged.`,
          })),
          (t[22] = e))
        : (e = t[22]),
        (se = e));
    } else {
      let e;
      (t[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(P, {
            id: `personalMigration.history.description`,
            defaultMessage: `You can bring your personal account data to your new workspace to preserve your memory and context. If you transfer, this data will be copied into your workspace:`,
            description: `Introduces the personal data categories copied into the new workspace if the user chooses Transfer data. Choosing Start fresh keeps personal data separate and does not remove access to it.`,
          })),
          (t[23] = e))
        : (e = t[23]),
        (se = e));
    }
  }
  let N;
  t[24] !== y || t[25] !== g || t[26] !== s || t[27] !== u || t[28] !== v
    ? ((N = (e) => {
        !e && !s && !v && (!u || y) && g(`dismiss`);
      }),
      (t[24] = y),
      (t[25] = g),
      (t[26] = s),
      (t[27] = u),
      (t[28] = v),
      (t[29] = N))
    : (N = t[29]);
  let ce;
  t[30] !== T || t[31] !== C || t[32] !== a || t[33] !== ae || t[34] !== ie
    ? ((ce = (e) => {
        (e.preventDefault(), !T && (a == null ? (C ? ae() : ie()) : a.status === `error` && a.onRetry()));
      }),
      (t[30] = T),
      (t[31] = C),
      (t[32] = a),
      (t[33] = ae),
      (t[34] = ie),
      (t[35] = ce))
    : (ce = t[35]);
  let F = C ? `flex flex-col gap-6 px-8 pt-6 pb-8` : `flex flex-col gap-6 px-8 pt-8 pb-4`,
    le;
  t[36] === C
    ? (le = t[37])
    : ((le = (0, Y.jsx)(M, {
        asChild: !0,
        children: (0, Y.jsx)(`h2`, {
          ref: x,
          className: `text-onboarding-title font-medium`,
          tabIndex: -1,
          children: C
            ? (0, Y.jsx)(P, {
                id: `teamTransferModal.confirmation.title`,
                defaultMessage: `Are you sure?`,
                description: `Title of the final confirmation before permanently transferring personal ChatGPT data into the current workspace`,
              })
            : (0, Y.jsx)(P, {
                id: `personalMigration.history.title`,
                defaultMessage: `Transfer your account history?`,
                description: `Title asking whether to bring personal ChatGPT data into the workspace the user has joined`,
              }),
        }),
      })),
      (t[36] = C),
      (t[37] = le));
  let I;
  t[38] === se
    ? (I = t[39])
    : ((I = (0, Y.jsx)(d, { className: `text-onboarding-body text-secondary`, children: se })),
      (t[38] = se),
      (t[39] = I));
  let L;
  t[40] !== le || t[41] !== I
    ? ((L = (0, Y.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [le, I] })),
      (t[40] = le),
      (t[41] = I),
      (t[42] = L))
    : (L = t[42]);
  let R;
  t[43] !== C || t[44] !== S
    ? ((R = S == null && !C && (0, Y.jsx)(Qe, {})), (t[43] = C), (t[44] = S), (t[45] = R))
    : (R = t[45]);
  let z;
  t[46] !== r || t[47] !== C
    ? ((z =
        C &&
        r != null &&
        (0, Y.jsx)(`p`, { children: (0, Y.jsx)(We, { billing: r.preview, onRetry: r.onRetry }) })),
      (t[46] = r),
      (t[47] = C),
      (t[48] = z))
    : (z = t[48]);
  let B;
  t[49] !== C || t[50] !== o
    ? ((B =
        C &&
        o != null &&
        (0, Y.jsx)(`p`, {
          className: `text-onboarding-body text-secondary`,
          children: (0, Y.jsx)(P, {
            id: `teamAccountTransferModal.member.confirmation.walletBalance.currentAmount`,
            defaultMessage: `Your remaining personal Wallet balance is {currentBalance}`,
            description: `Current personal Wallet balance shown beside the transfer billing and access terms. The currentBalance placeholder is a positive monetary amount already formatted with its currency and locale. No eligibility criteria.`,
            values: { currentBalance: o },
          }),
        })),
      (t[49] = C),
      (t[50] = o),
      (t[51] = B))
    : (B = t[51]);
  let de = S == null && l,
    V;
  t[52] !== y ||
  t[53] !== k ||
  t[54] !== C ||
  t[55] !== _ ||
  t[56] !== h ||
  t[57] !== g ||
  t[58] !== s ||
  t[59] !== m ||
  t[60] !== S ||
  t[61] !== u ||
  t[62] !== v
    ? ((V =
        !v &&
        (!u || y) &&
        (0, Y.jsx)(w, {
          className: `flex-1`,
          allowShrink: !0,
          type: `button`,
          color: `outlineGhost`,
          size: `onboardingAction`,
          disabled: s,
          onClick: () => {
            S == null ? (C && !u ? h() : g(u ? `dismiss` : _ ? `cancel` : `start-fresh`)) : g(`dismiss`);
          },
          children: m ?? k,
        })),
      (t[52] = y),
      (t[53] = k),
      (t[54] = C),
      (t[55] = _),
      (t[56] = h),
      (t[57] = g),
      (t[58] = s),
      (t[59] = m),
      (t[60] = S),
      (t[61] = u),
      (t[62] = v),
      (t[63] = V))
    : (V = t[63]);
  let fe;
  t[64] !== r || t[65] !== T || t[66] !== O || t[67] !== p || t[68] !== S || t[69] !== n || t[70] !== u
    ? ((fe =
        (S == null || S === `loading` || S === `error`) &&
        (0, Y.jsx)(w, {
          className: `flex-1`,
          allowShrink: !0,
          type: `submit`,
          color: `primary`,
          size: `onboardingAction`,
          loading: T,
          disabled: T || (n === `transfer` && !u && r != null && r.preview == null),
          children: p ?? O,
        })),
      (t[64] = r),
      (t[65] = T),
      (t[66] = O),
      (t[67] = p),
      (t[68] = S),
      (t[69] = n),
      (t[70] = u),
      (t[71] = fe))
    : (fe = t[71]);
  let H;
  t[72] !== V || t[73] !== fe
    ? ((H = (0, Y.jsxs)(ne, { children: [V, fe] })), (t[72] = V), (t[73] = fe), (t[74] = H))
    : (H = t[74]);
  let U;
  t[75] !== L || t[76] !== R || t[77] !== z || t[78] !== B || t[79] !== de || t[80] !== H || t[81] !== F
    ? ((U = (0, Y.jsxs)(`div`, { className: F, children: [L, R, z, B, de, H] })),
      (t[75] = L),
      (t[76] = R),
      (t[77] = z),
      (t[78] = B),
      (t[79] = de),
      (t[80] = H),
      (t[81] = F),
      (t[82] = U))
    : (U = t[82]);
  let W;
  t[83] !== U || t[84] !== ce
    ? ((W = (0, Y.jsx)(ee, {
        as: `form`,
        className: `select-none`,
        size: `viewport`,
        variant: `chatgpt`,
        onSubmit: ce,
        children: U,
      })),
      (t[83] = U),
      (t[84] = ce),
      (t[85] = W))
    : (W = t[85]);
  let pe;
  return (
    t[86] !== W || t[87] !== N
      ? ((pe = (0, Y.jsx)(b, {
          open: !0,
          size: `beacon`,
          variant: `onboarding`,
          showDialogClose: !1,
          onOpenChange: N,
          children: W,
        })),
        (t[86] = W),
        (t[87] = N),
        (t[88] = pe))
      : (pe = t[88]),
    pe
  );
}
function Ze(e) {
  return (0, Y.jsx)(`strong`, { className: `font-medium text-default`, children: e });
}
function Qe() {
  let e = (0, $e.c)(5),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, Y.jsx)(Be, {
        icon: (0, Y.jsx)(i, { asset: N }),
        children: (0, Y.jsx)(P, {
          id: `personalMigration.history.chats`,
          defaultMessage: `Chats`,
          description: `Personal chat history category in the migration overview`,
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Y.jsx)(Be, {
        icon: (0, Y.jsx)(i, { asset: _ }),
        children: (0, Y.jsx)(P, {
          id: `personalMigration.history.files`,
          defaultMessage: `Files`,
          description: `Personal files category in the migration overview`,
        }),
      })),
      (e[1] = n))
    : (n = e[1]);
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Y.jsx)(Be, {
        icon: (0, Y.jsx)(i, { asset: T }),
        children: (0, Y.jsx)(P, {
          id: `personalMigration.history.memories`,
          defaultMessage: `Memories`,
          description: `Saved personal memories category in the migration overview`,
        }),
      })),
      (e[2] = r))
    : (r = e[2]);
  let a;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Y.jsx)(Be, {
        icon: (0, Y.jsx)(i, { asset: o }),
        children: (0, Y.jsx)(P, {
          id: `personalMigration.history.automations`,
          defaultMessage: `Automations`,
          description: `Personal scheduled tasks category in the migration overview`,
        }),
      })),
      (e[3] = a))
    : (a = e[3]);
  let s;
  return (
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, Y.jsxs)(`ul`, {
          className: `grid grid-cols-2 gap-4 sm:grid-cols-3`,
          children: [
            t,
            n,
            r,
            a,
            (0, Y.jsx)(Be, {
              icon: (0, Y.jsx)(i, { asset: c }),
              children: (0, Y.jsx)(P, {
                id: `personalMigration.history.plugins`,
                defaultMessage: `Plugins`,
                description: `Personal plugins category in the migration overview`,
              }),
            }),
          ],
        })),
        (e[4] = s))
      : (s = e[4]),
    s
  );
}
var $e, et, Y;
function tt() {
  return (tt = e(() => {
    (($e = h()),
      C(),
      u(),
      te(),
      x(),
      v(),
      (et = a()),
      S(),
      E(),
      l(),
      s(),
      be(),
      ie(),
      Ue(),
      Ke(),
      Ye(),
      (Y = f()));
  }))();
}
var X, nt;
function rt() {
  return (rt = e(() => {
    ((X = (function (e) {
      return (
        (e.CHATGPT_PERSONAL_MIGRATION_ACTION_UNSPECIFIED = `CHATGPT_PERSONAL_MIGRATION_ACTION_UNSPECIFIED`),
        (e.CHATGPT_PERSONAL_MIGRATION_ACTION_SELECT_KEEP_SEPARATE = `CHATGPT_PERSONAL_MIGRATION_ACTION_SELECT_KEEP_SEPARATE`),
        (e.CHATGPT_PERSONAL_MIGRATION_ACTION_SELECT_TRANSFER = `CHATGPT_PERSONAL_MIGRATION_ACTION_SELECT_TRANSFER`),
        (e.CHATGPT_PERSONAL_MIGRATION_ACTION_CONTINUE_KEEP_SEPARATE = `CHATGPT_PERSONAL_MIGRATION_ACTION_CONTINUE_KEEP_SEPARATE`),
        (e.CHATGPT_PERSONAL_MIGRATION_ACTION_CONTINUE_TRANSFER = `CHATGPT_PERSONAL_MIGRATION_ACTION_CONTINUE_TRANSFER`),
        (e.CHATGPT_PERSONAL_MIGRATION_ACTION_CONFIRM_TRANSFER = `CHATGPT_PERSONAL_MIGRATION_ACTION_CONFIRM_TRANSFER`),
        (e.CHATGPT_PERSONAL_MIGRATION_ACTION_BACK = `CHATGPT_PERSONAL_MIGRATION_ACTION_BACK`),
        (e.CHATGPT_PERSONAL_MIGRATION_ACTION_CANCEL = `CHATGPT_PERSONAL_MIGRATION_ACTION_CANCEL`),
        (e.CHATGPT_PERSONAL_MIGRATION_ACTION_DISMISS = `CHATGPT_PERSONAL_MIGRATION_ACTION_DISMISS`),
        (e.CHATGPT_PERSONAL_MIGRATION_ACTION_LEARN_MORE_CLICKED = `CHATGPT_PERSONAL_MIGRATION_ACTION_LEARN_MORE_CLICKED`),
        (e.CHATGPT_PERSONAL_MIGRATION_ACTION_REFRESH = `CHATGPT_PERSONAL_MIGRATION_ACTION_REFRESH`),
        (e.CHATGPT_PERSONAL_MIGRATION_ACTION_WALLET_RETRY = `CHATGPT_PERSONAL_MIGRATION_ACTION_WALLET_RETRY`),
        (e.UNRECOGNIZED = `UNRECOGNIZED`),
        e
      );
    })({})),
      (nt = { $type: `protobuf_analytics_events.v1.ChatgptPersonalMigrationInteraction` }));
  }))();
}
function it(e) {
  let t = (0, st.c)(71),
    {
      step: n,
      billing: r,
      isBusinessOwner: i,
      formattedPersonalWalletBalance: a,
      pending: o,
      loadingBalance: s,
      error: c,
      transferAccepted: l,
      transferUnconfirmed: u,
      primaryLabel: te,
      onTransfer: f,
      onBack: re,
      onClose: p,
      onConfirm: m,
      onChoiceChange: ie,
      onLearnMore: h,
    } = e,
    g = u !== void 0 && u,
    ae = se(),
    _ = U(),
    v = (0, ct.useRef)(null),
    [y, x] = (0, ct.useState)(`create`),
    S = n === `transfer`,
    C = o || (S && s),
    T;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => {
        v.current?.focus();
      }),
      (t[0] = T))
    : (T = t[0]);
  let E;
  (t[1] === n ? (E = t[2]) : ((E = [n]), (t[1] = n), (t[2] = E)), (0, ct.useEffect)(T, E));
  let D;
  if (S) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(P, {
          id: `teamTransferModal.confirmation.title`,
          defaultMessage: `Are you sure?`,
          description: `Short title of the final Business workspace migration confirmation dialog. Shown to a user who chose to move their personal ChatGPT data into a Business workspace. Asks them to confirm the irreversible transfer before it starts.`,
        })),
        (t[3] = e))
      : (e = t[3]),
      (D = e));
  } else if (i) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(P, {
          id: `teamAccountTransferModal.title`,
          defaultMessage: `Your ChatGPT Business workspace is ready`,
          description: `Initial modal title for Business account transfer`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (D = e));
  } else {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(P, {
          id: `teamAccountTransferModal.member.title`,
          defaultMessage: `Your ChatGPT workspace is ready`,
          description: `Title of the optional personal-data migration dialog shown to a new Business or Enterprise workspace member. The user has already joined the destination workspace and can choose whether to transfer personal data into it.`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (D = e));
  }
  let O;
  if (S) {
    let e;
    (t[6] === i
      ? (e = t[7])
      : ((e = i
          ? (0, Z.jsx)(P, {
              id: `teamTransferModal.confirmation.description`,
              defaultMessage: `Your personal ChatGPT data will be transferred to your business account. This can’t be undone.`,
              description: `Subtitle in the final Business workspace migration confirmation dialog. Warns a user who selected transfer that moving their personal ChatGPT data into the Business workspace is permanent.`,
            })
          : (0, Z.jsx)(P, {
              id: `teamAccountTransferModal.member.confirmation.description`,
              defaultMessage: `Your personal ChatGPT data will be transferred to this workspace. This can’t be undone.`,
              description: `Subtitle in the final optional migration confirmation dialog for a Business or Enterprise workspace member. Warns that confirming the transfer of personal ChatGPT data into the current workspace is irreversible.`,
            })),
        (t[6] = i),
        (t[7] = e)),
      (O = e));
  } else {
    let e;
    (t[8] === i
      ? (e = t[9])
      : ((e = i
          ? (0, Z.jsx)(P, {
              id: `teamAccountTransferModal.v2.owner.explanation`,
              defaultMessage: `Do you want to transfer your personal data to your new Business workspace?`,
              description: `Question in the optional migration dialog shown to a new Business workspace owner. Asks whether to transfer supported data from the owner's personal workspace into the new Business workspace. The choices below explain which data is supported and allow the user to keep personal data separate instead. Business is a workspace type. No placeholders.`,
            })
          : (0, Z.jsx)(P, {
              id: `teamAccountTransferModal.v2.member.explanation`,
              defaultMessage: `Do you want to transfer your personal data to this workspace?`,
              description: `Question in the optional migration dialog shown after a user joins a Business or Enterprise workspace. Asks whether to transfer supported data from their personal workspace into the current workspace. The choices below explain which data is supported and allow the user to keep personal data separate instead. No placeholders.`,
            })),
        (t[8] = i),
        (t[9] = e)),
      (O = e));
  }
  let k;
  if (g) {
    let e;
    (t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(P, {
          id: `personalMigration.retryTransfer`,
          defaultMessage: `Retry transfer`,
          description: `Checks the previous transfer and retries the original operation when submission or source workspace closure is unfinished`,
        })),
        (t[10] = e))
      : (e = t[10]),
      (k = e));
  } else if (l) {
    let e;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(P, {
          id: `personalMigration.refresh.button`,
          defaultMessage: `Refresh workspace`,
          description: `Retries refreshing the browser after personal-data migration has already started; does not submit another transfer`,
        })),
        (t[11] = e))
      : (e = t[11]),
      (k = e));
  } else if (S && o) {
    let e;
    (t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(P, {
          id: `personalMigration.startingTransfer`,
          defaultMessage: `Starting transfer…`,
          description: `Disabled confirmation button while the request to start transferring personal data into the current workspace is pending`,
        })),
        (t[12] = e))
      : (e = t[12]),
      (k = e));
  } else if (S) {
    let e;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(P, {
          id: `teamTransferModal.confirm`,
          defaultMessage: `Confirm transfer`,
          description: `Short, explicit label for the final danger button in the Business workspace migration confirmation dialog. Shown to an end user who chose to move their personal ChatGPT data into a Business workspace. Clicking immediately starts the irreversible transfer; it does not open another confirmation step.`,
        })),
        (t[13] = e))
      : (e = t[13]),
      (k = e));
  } else {
    let e;
    (t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(P, {
          id: `teamAccountTransferModal.confirm`,
          defaultMessage: `Continue`,
          description: `Short primary button label in the initial optional personal-to-workspace migration dialog for Business and Enterprise owners and members. With Start fresh selected, it completes this onboarding step and keeps personal data separate. With Transfer personal data selected, it opens the final confirmation dialog without starting the transfer. No placeholders.`,
        })),
        (t[14] = e))
      : (e = t[14]),
      (k = e));
  }
  let A = !o && !l && !g,
    j;
  t[15] !== p || t[16] !== o || t[17] !== l || t[18] !== g
    ? ((j = (e) => {
        !e && !o && !l && !g && p(`dismiss`);
      }),
      (t[15] = p),
      (t[16] = o),
      (t[17] = l),
      (t[18] = g),
      (t[19] = j))
    : (j = t[19]);
  let N;
  t[20] !== C || t[21] !== y || t[22] !== S || t[23] !== p || t[24] !== m || t[25] !== f
    ? ((N = (e) => {
        (e.preventDefault(), !C && (S ? m() : y === `transfer` ? f() : p(`start-fresh`)));
      }),
      (t[20] = C),
      (t[21] = y),
      (t[22] = S),
      (t[23] = p),
      (t[24] = m),
      (t[25] = f),
      (t[26] = N))
    : (N = t[26]);
  let F;
  t[27] === D
    ? (F = t[28])
    : ((F = (0, Z.jsx)(M, {
        asChild: !0,
        children: (0, Z.jsx)(`h2`, { ref: v, tabIndex: -1, children: D }),
      })),
      (t[27] = D),
      (t[28] = F));
  let I;
  t[29] === O ? (I = t[30]) : ((I = (0, Z.jsx)(d, { children: O })), (t[29] = O), (t[30] = I));
  let L;
  t[31] !== F || t[32] !== I
    ? ((L = (0, Z.jsx)(oe, { title: F, subtitle: I })), (t[31] = F), (t[32] = I), (t[33] = L))
    : (L = t[33]);
  let R;
  t[34] !== r ||
  t[35] !== y ||
  t[36] !== S ||
  t[37] !== a ||
  t[38] !== ae ||
  t[39] !== ie ||
  t[40] !== h ||
  t[41] !== o ||
  t[42] !== _
    ? ((R = S
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, Z.jsx)(P, {
                  id: `teamTransferModal.confirmTitle`,
                  defaultMessage: `Transfer of existing data is permanent and can’t be undone`,
                  description: `Heading above the outcome list in the final optional personal-to-workspace migration confirmation dialog. Warns Business and Enterprise owners and members that the transfer is irreversible. Introduces the supported data, excluded Sites, account-access, and subscription consequences. No placeholders.`,
                }),
              }),
              (0, Z.jsxs)(`ul`, {
                className: `list-disc ps-5 text-sm text-secondary`,
                children: [
                  (0, Z.jsx)(`li`, {
                    children: _
                      ? (0, Z.jsx)(P, {
                          id: `teamAccountTransferModal.v2.dataTypes.space`,
                          defaultMessage: `Your chats, GPTs, projects, and saved memories will transfer to this workspace. Space files, tasks, personalization (including custom instructions), and connected apps will also transfer where supported by your workspace.`,
                          description: `Data summary in the final confirmation of optional personal-to-workspace migration for Business and Enterprise owners and members. Chats, GPTs, projects, and saved memories are the core migration resources. Space files, scheduled tasks, explicit personalization, app connections, and installed apps are separately enabled and subject to destination support. Personalization includes custom instructions, not every account setting. Preserve the qualification that additional resources transfer only where supported. Plain text with no placeholders. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                        })
                      : (0, Z.jsx)(P, {
                          id: `teamAccountTransferModal.v2.dataTypes`,
                          defaultMessage: `Your chats, GPTs, projects, and saved memories will transfer to this workspace. Library files, tasks, personalization (including custom instructions), and connected apps will also transfer where supported by your workspace.`,
                          description: `Data summary in the final confirmation of optional personal-to-workspace migration for Business and Enterprise owners and members. Chats, GPTs, projects, and saved memories are the core migration resources. Library files, scheduled tasks, explicit personalization, app connections, and installed apps are separately enabled and subject to destination support. Personalization includes custom instructions, not every account setting. Preserve the qualification that additional resources transfer only where supported. Plain text with no placeholders.`,
                        }),
                  }),
                  (0, Z.jsx)(`li`, {
                    children: (0, Z.jsx)(`strong`, {
                      className: `font-semibold text-default`,
                      children: (0, Z.jsx)(P, {
                        id: `teamAccountTransferModal.v2.sitesExcluded`,
                        defaultMessage: `Your sites won’t transfer.`,
                        description: `Prominent warning in the final confirmation for optional personal-to-workspace migration, shown to Business and Enterprise owners and members. Sites means the user's hosted websites or apps created with the Sites product, not physical locations. These are excluded from this migration. Rendered in bold; a complete short sentence with no placeholders.`,
                      }),
                    }),
                  }),
                  r != null &&
                    (0, Z.jsx)(`li`, {
                      children: (0, Z.jsx)(We, { billing: r.preview, onRetry: r.onRetry }),
                    }),
                ],
              }),
              a != null &&
                (0, Z.jsx)(`p`, {
                  className: `text-sm text-secondary`,
                  children: (0, Z.jsx)(P, {
                    id: `teamAccountTransferModal.member.confirmation.walletBalance.currentAmount`,
                    defaultMessage: `Your remaining personal Wallet balance is {currentBalance}`,
                    description: `Current personal Wallet balance shown beside the transfer billing and access terms. The currentBalance placeholder is a positive monetary amount already formatted with its currency and locale. No eligibility criteria.`,
                    values: { currentBalance: a },
                  }),
                }),
              (0, Z.jsx)(ce, {
                type: `warning`,
                variant: `callout`,
                layout: `vertical`,
                title: (0, Z.jsx)(P, {
                  id: `teamTransferModal.warning.title`,
                  defaultMessage: `You may lose access to your data`,
                  description: `Prominent warning heading in the final Business workspace migration confirmation dialog. Alerts the user that access to their transferred personal data depends on continued access to the Business workspace.`,
                }),
                content: (0, Z.jsx)(P, {
                  id: `teamTransferModal.warning.description`,
                  defaultMessage: `If you leave the workspace, or if the workspace is deactivated, you will lose your data. <link>Learn more</link>`,
                  description: `Warning body in the final Business workspace migration confirmation dialog. Explains that the user will lose access to their transferred personal data if they leave the Business workspace or it is deactivated. The link opens the Help Center article about workspace migration and access risks. Preserve the link tag.`,
                  values: {
                    link: (e) =>
                      (0, Z.jsx)(ue, {
                        href: `https://help.openai.com/articles/8801890`,
                        openTarget: `external-browser`,
                        initiator: `open_in_browser_bridge`,
                        onClick: h,
                        onAuxClick: (e) => {
                          e.button === 1 && h?.();
                        },
                        children: e,
                      }),
                  },
                }),
              }),
            ],
          })
        : (0, Z.jsxs)(G, {
            name: `personal-migration-choice`,
            direction: `col`,
            value: y,
            onChange: (e) => {
              (x(e), ie?.(e));
            },
            disabled: o,
            "aria-label": ae.formatMessage({
              id: `personalMigration.choice.label`,
              defaultMessage: `Personal data transfer`,
              description: `Accessible name of the choices to keep personal ChatGPT data separate or transfer it into the current workspace`,
            }),
            children: [
              (0, Z.jsx)(G.Item, {
                value: `create`,
                block: !0,
                children: (0, Z.jsxs)(`span`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-sm font-semibold`,
                      children: (0, Z.jsx)(P, {
                        id: `teamAccountTransferModal.keepSeparateLabel`,
                        defaultMessage: `Start fresh in this workspace`,
                        description: `Short label for the keep-separate option in the optional personal-data migration dialog for Business and Enterprise workspace owners and members. Selecting it and continuing keeps personal data in the Personal workspace instead of transferring it. Start fresh means continuing without importing personal data; it does not create, empty, or reset the shared workspace. The alternative transfers supported personal data. No placeholders.`,
                      }),
                    }),
                    (0, Z.jsx)(`span`, {
                      className: `text-sm text-secondary`,
                      children: (0, Z.jsx)(P, {
                        id: `teamAccountTransferModal.create.paidPlanDetail`,
                        defaultMessage: `Keep your personal data separate. If you’re on a paid plan, you’ll maintain your subscription until you cancel.`,
                        description: `Description of the keep-separate option in the optional personal-to-workspace migration dialog for Business and Enterprise owners and members. Explains that personal data stays separate and any existing personal paid subscription remains active until the user cancels it. No placeholders.`,
                      }),
                    }),
                  ],
                }),
              }),
              (0, Z.jsx)(G.Item, {
                value: `transfer`,
                block: !0,
                children: (0, Z.jsxs)(`span`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `text-sm font-semibold`,
                      children: (0, Z.jsx)(P, {
                        id: `teamAccountTransferModal.v2.transferHistoryLabel`,
                        defaultMessage: `Transfer your personal account history`,
                        description: `Short label for the transfer radio option in the optional personal-to-workspace migration dialog for Business and Enterprise owners and members. Account history includes chats, saved memories, files, connected apps, automations, and other supported data. Selecting it and continuing opens a confirmation before transfer starts. The alternative is Start fresh in this workspace, which keeps personal data separate. No placeholders.`,
                      }),
                    }),
                    (0, Z.jsx)(`span`, {
                      className: `text-sm text-secondary`,
                      children: (0, Z.jsxs)(`span`, {
                        className: `flex flex-col gap-3`,
                        children: [
                          (0, Z.jsx)(`span`, {
                            children: (0, Z.jsx)(P, {
                              id: `teamAccountTransferModal.v2.supportedDataDescription.emphasized`,
                              defaultMessage: `Bring your personal data to your new workspace to preserve your memory and context. Your supported chats, saved memories, files, connected apps, automations, and more will be transferred. <strong>Sites won’t be transferred.</strong>`,
                              description: `First paragraph under the transfer radio option in the optional personal-to-workspace migration dialog for Business and Enterprise owners and members. Describes supported data copied from the Personal workspace. Saved memories are stored facts and preferences; files includes Library files; connected apps covers app connections and installed apps; automations are scheduled tasks. And more includes other supported data such as GPTs, projects, and personalization. Resources depend on destination support and configuration, so preserve the supported qualification for all listed data types. Sites means hosted websites or apps created with the Sites product, which are not migrated. Preserve the strong tag around the complete Sites exclusion sentence, rendered in bold with primary text color. Selecting this option and continuing opens a separate confirmation. No variable placeholders.`,
                              values: { strong: ot },
                            }),
                          }),
                          (0, Z.jsx)(`span`, {
                            children: (0, Z.jsx)(P, {
                              id: `teamAccountTransferModal.v2.transferConsequences.billingOutcomes`,
                              defaultMessage: `An eligible personal subscription will be canceled immediately with a prorated refund. For Business transfers, your personal plan may instead stay active until the billing cycle ends without a refund. You can keep using your personal workspace if your subscription remains active. If you leave the new workspace or it is deactivated, you’ll lose access to the transferred data there. The transfer <strong>can’t be undone</strong>. <link>Learn more</link>`,
                              description: `Consequences shown under the personal data transfer option for workspace members. Explains immediate cancellation with an eligible prorated refund, or, for Business transfers, possible continued paid personal access until the billing period ends without a refund. Do not describe refund eligibility criteria. Access to copied data in the destination requires workspace membership. The strong tag emphasizes that transfer cannot be undone; link opens migration help. No variable placeholders.`,
                              values: {
                                strong: at,
                                link: (e) =>
                                  (0, Z.jsx)(ue, {
                                    appearance: `secondary`,
                                    href: `https://help.openai.com/articles/8801890`,
                                    openTarget: `external-browser`,
                                    initiator: `open_in_browser_bridge`,
                                    onClick: h,
                                    onAuxClick: (e) => {
                                      e.button === 1 && h?.();
                                    },
                                    children: e,
                                  }),
                              },
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })),
      (t[34] = r),
      (t[35] = y),
      (t[36] = S),
      (t[37] = a),
      (t[38] = ae),
      (t[39] = ie),
      (t[40] = h),
      (t[41] = o),
      (t[42] = _),
      (t[43] = R))
    : (R = t[43]);
  let z;
  t[44] !== c || t[45] !== R
    ? ((z = (0, Z.jsxs)(le, { className: `flex flex-col gap-4`, children: [R, c] })),
      (t[44] = c),
      (t[45] = R),
      (t[46] = z))
    : (z = t[46]);
  let B;
  t[47] !== S || t[48] !== re || t[49] !== p || t[50] !== o || t[51] !== l || t[52] !== g
    ? ((B =
        !l &&
        !g &&
        (0, Z.jsx)(w, {
          type: `button`,
          color: `secondary`,
          disabled: o,
          onClick: S
            ? () => {
                (x(`create`), re());
              }
            : () => p(`cancel`),
          children: S
            ? (0, Z.jsx)(P, {
                id: `selectedModal.back`,
                defaultMessage: `Back`,
                description: `Back button text to return to previous step`,
              })
            : (0, Z.jsx)(P, {
                id: `teamAccountTransferModal.cancel`,
                defaultMessage: `Cancel`,
                description: `Button in the initial Business workspace migration dialog. Closes the dialog without transferring any personal data and keeps the Personal workspace separate.`,
              }),
        })),
      (t[47] = S),
      (t[48] = re),
      (t[49] = p),
      (t[50] = o),
      (t[51] = l),
      (t[52] = g),
      (t[53] = B))
    : (B = t[53]);
  let de = S && !l ? `dangerSolid` : `primary`,
    V = C || (n === `transfer` && !l && r != null && r.preview == null),
    fe = te ?? k,
    H;
  t[54] !== C || t[55] !== de || t[56] !== V || t[57] !== fe
    ? ((H = (0, Z.jsx)(w, { type: `submit`, color: de, loading: C, disabled: V, children: fe })),
      (t[54] = C),
      (t[55] = de),
      (t[56] = V),
      (t[57] = fe),
      (t[58] = H))
    : (H = t[58]);
  let W;
  t[59] !== B || t[60] !== H
    ? ((W = (0, Z.jsxs)(ne, { children: [B, H] })), (t[59] = B), (t[60] = H), (t[61] = W))
    : (W = t[61]);
  let pe;
  t[62] !== z || t[63] !== W || t[64] !== N || t[65] !== L
    ? ((pe = (0, Z.jsxs)(ee, {
        as: `form`,
        size: `viewport`,
        className: `select-none`,
        onSubmit: N,
        children: [L, z, W],
      })),
      (t[62] = z),
      (t[63] = W),
      (t[64] = N),
      (t[65] = L),
      (t[66] = pe))
    : (pe = t[66]);
  let me;
  return (
    t[67] !== pe || t[68] !== A || t[69] !== j
      ? ((me = (0, Z.jsx)(b, { open: !0, size: `wide`, showDialogClose: A, onOpenChange: j, children: pe })),
        (t[67] = pe),
        (t[68] = A),
        (t[69] = j),
        (t[70] = me))
      : (me = t[70]),
    me
  );
}
function at(e) {
  return (0, Z.jsx)(`strong`, { className: `font-semibold`, children: e });
}
function ot(e) {
  return (0, Z.jsx)(`strong`, { className: `font-semibold text-default`, children: e });
}
var st, ct, Z;
function lt() {
  return (lt = e(() => {
    ((st = h()), je(), (ct = a()), S(), F(), E(), l(), s(), be(), Ce(), Ke(), (Z = f()));
  }))();
}
var ut;
function dt() {
  return (dt = e(() => {
    (D(),
      Se(),
      n(),
      (ut = A(ae, (e) => ({
        enabled: e != null,
        queryKey: [`personal-migration-wallet`, e],
        queryFn:
          e == null
            ? void 0
            : ({ signal: t }) =>
                ve.safeGet(`/accounts/{account_id}/customer-balance`, {
                  parameters: { path: { account_id: e } },
                  signal: t,
                  expectedErrorStatuses: [401, 403, 404, 503],
                }),
        staleTime: 0,
        gcTime: 0,
        retry: !1,
      }))));
  }))();
}
function ft(e) {
  let n = (0, gt.c)(122),
    {
      accountId: i,
      userId: a,
      personalAccountId: o,
      isBusinessOwner: s,
      onTransferActiveChange: c,
      onTransferStarted: ee,
      settings: l,
      ownerOnboarding: u,
    } = e,
    d = t(ae),
    te = se(),
    f = (0, Q.useRef)(!1),
    ne,
    m;
  (n[0] !== d || n[1] !== l
    ? ((ne = () => {
        f.current ||
          l != null ||
          ((f.current = !0),
          Ee(d, pe, {
            eventId: `team_account_transfer_modal`,
            type: z.UPSELL_OR_MODAL_TYPE_BLOCKING_INITIAL_MODAL,
          }));
      }),
      (m = [d, l]),
      (n[0] = d),
      (n[1] = l),
      (n[2] = ne),
      (n[3] = m))
    : ((ne = n[2]), (m = n[3])),
    (0, Q.useEffect)(ne, m));
  let ie = r(`/`),
    h = R(),
    g;
  n[4] !== l || n[5] !== h
    ? ((g = () => l != null || we(h, `500944450`)), (n[4] = l), (n[5] = h), (n[6] = g))
    : (g = n[6]);
  let [oe] = (0, Q.useState)(g),
    [_, v] = (0, Q.useState)(u == null ? `initial` : `transfer`),
    y = (0, Q.useRef)(!1),
    [b, x] = (0, Q.useState)(!1),
    [S, C] = (0, Q.useState)(!1),
    [w, T] = (0, Q.useState)(u?.recovering === !0),
    [E, D] = (0, Q.useState)(u?.recovering !== !0),
    k = (0, Q.useRef)(!1),
    [A, M] = (0, Q.useState)(null),
    N;
  n[7] !== i || n[8] !== o || n[9] !== a
    ? ((N = [`personal-transfer-billing`, a, o, i]), (n[7] = i), (n[8] = o), (n[9] = a), (n[10] = N))
    : (N = n[10]);
  let F;
  n[11] !== i || n[12] !== a
    ? ((F = () =>
        ve.safeGet(`/accounts/transfer/billing`, {
          expectedIdentity: { accountId: i, userId: a },
          additionalHeaders: { "ChatGPT-Account-ID": i },
          parameters: { query: { workspace_id: i } },
          expectedErrorStatuses: [401, 403, 409, 503],
        })),
      (n[11] = i),
      (n[12] = a),
      (n[13] = F))
    : (F = n[13]);
  let le = _ === `transfer` && !S && E && (o != null || u != null),
    I;
  n[14] !== N || n[15] !== F || n[16] !== le
    ? ((I = {
        queryKey: N,
        queryFn: F,
        enabled: le,
        staleTime: 0,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
      }),
      (n[14] = N),
      (n[15] = F),
      (n[16] = le),
      (n[17] = I))
    : (I = n[17]);
  let { data: ue, isFetching: B, isError: V, refetch: U } = p(I),
    { data: W, isPending: ge, isError: ye, refetch: be } = j(ut, o),
    Se;
  n[18] === W
    ? (Se = n[19])
    : ((Se = W?.balances?.usd ?? (W?.currency?.toLowerCase() === `usd` ? W.balance : 0)),
      (n[18] = W),
      (n[19] = Se));
  let Ce = Se,
    Te = Ce === 0 ? W?.balance : Ce,
    De;
  if (n[20] !== Te || n[21] !== te || n[22] !== Ce || n[23] !== W?.currency) {
    let e = Ce === 0 ? W?.currency?.toUpperCase() : `USD`;
    ((De =
      Te != null && Te < 0 && e != null
        ? he({ intl: te, amount: -Te / 10 ** _e({ intl: te, currencyCode: e }), currencyCode: e })
        : null),
      (n[20] = Te),
      (n[21] = te),
      (n[22] = Ce),
      (n[23] = W?.currency),
      (n[24] = De));
  } else De = n[24];
  let Oe = De,
    Ae;
  n[25] !== i || n[26] !== u || n[27] !== d || n[28] !== a
    ? ((Ae = function () {
        return u == null ? d.get(de) === i && d.get(L) === a : u.isCurrentIdentity();
      }),
      (n[25] = i),
      (n[26] = u),
      (n[27] = d),
      (n[28] = a),
      (n[29] = Ae))
    : (Ae = n[29]);
  let G = Ae,
    je;
  n[30] !== G || n[31] !== oe || n[32] !== d || n[33] !== l || n[34] !== _
    ? ((je = function (e) {
        G() &&
          Ee(d, nt, {
            action: e,
            uiVariant: oe ? `redesigned` : `legacy`,
            entryPoint: l == null ? `onboarding` : `settings`,
            step: _ === `transfer` ? `confirmation` : `choice`,
          });
      }),
      (n[30] = G),
      (n[31] = oe),
      (n[32] = d),
      (n[33] = l),
      (n[34] = _),
      (n[35] = je))
    : (je = n[35]);
  let K = je,
    Ne;
  n[36] !== i ||
  n[37] !== G ||
  n[38] !== u ||
  n[39] !== b ||
  n[40] !== d ||
  n[41] !== l ||
  n[42] !== S ||
  n[43] !== w
    ? ((Ne = async function () {
        if (!(b || S || w || !G())) {
          if (u != null) {
            u.onCancel();
            return;
          }
          if (l != null) {
            l.onCancel();
            return;
          }
          (x(!0), M(null));
          try {
            await me(d, i, Me);
          } catch {
            M(
              (0, $.jsx)(P, {
                id: `personalMigration.dismiss.error`,
                defaultMessage: `Couldn’t save your choice. Please try again.`,
                description: `Error in the optional migration dialog when saving dismissal or the choice to keep personal data separate fails; the dialog remains open for retry`,
              }),
            );
          }
          x(!1);
        }
      }),
      (n[36] = i),
      (n[37] = G),
      (n[38] = u),
      (n[39] = b),
      (n[40] = d),
      (n[41] = l),
      (n[42] = S),
      (n[43] = w),
      (n[44] = Ne))
    : (Ne = n[44]);
  let Fe = Ne,
    Re;
  if (
    n[45] !== i ||
    n[46] !== V ||
    n[47] !== ue ||
    n[48] !== ie ||
    n[49] !== te ||
    n[50] !== G ||
    n[51] !== B ||
    n[52] !== c ||
    n[53] !== ee ||
    n[54] !== u ||
    n[55] !== b ||
    n[56] !== o ||
    n[57] !== U ||
    n[58] !== E ||
    n[59] !== d ||
    n[60] !== l ||
    n[61] !== h ||
    n[62] !== S ||
    n[63] !== w ||
    n[64] !== a
  ) {
    Re = async function () {
      if (b || (o == null && !S && !w && u?.recovering !== !0) || !G() || (!S && E && (ue == null || B || V)))
        return;
      (x(!0), M(null));
      let t = we(h, `279671486`),
        n = S,
        r = w,
        s = !1;
      c(!0);
      let f = (0, $.jsx)(P, {
        id: `personalMigration.transfer.error`,
        defaultMessage: `Couldn’t start the transfer. Please try again.`,
        description: `Error in the final personal-data transfer confirmation when the migration request fails; the user can retry or go back without dismissing onboarding`,
      });
      try {
        if (!n && u != null) {
          let e = await ve
            .safeGet(`/accounts/transfer/status`, {
              expectedIdentity: { accountId: i, userId: a },
              additionalHeaders: { "ChatGPT-Account-ID": i },
              parameters: { query: { workspace_id: i, include_accepted: !0 } },
              expectedErrorStatuses: [401, 403, 404, 409, 500, 503],
            })
            .catch((e) => {
              if (e instanceof Error && fe(e) === `transfer_finalization_pending`) return ((r = !0), null);
              throw e;
            });
          if (!G()) {
            x(!1);
            return;
          }
          if (((n = e != null), C(n), T(!n && r), !n && !E)) {
            (D(!0), x(!1), G() && c(!1));
            return;
          }
        }
        if (!n) {
          if (
            ((s = !0),
            !(
              await ve.safePost(`/accounts/transfer`, {
                expectedIdentity: u == null ? void 0 : { accountId: i, userId: a },
                additionalHeaders: { "ChatGPT-Account-ID": i },
                requestBody: {
                  workspace_id: i,
                  migration_trigger: l == null ? `modal-optional` : `settings`,
                  expected_billing: ue,
                },
                expectedErrorStatuses: [401, 403, 404, 409, 503],
              })
            ).success)
          ) {
            (c(!1), M(f), x(!1));
            return;
          }
          if (((n = !0), C(!0), T(!1), !G())) {
            x(!1);
            return;
          }
          if (t && u == null) {
            let e = `${a}:${i}`;
            (Ie(e), d.set(Le, e));
          }
          if (u != null) {
            (await e(t), x(!1));
            return;
          }
          if (l != null || t) {
            (l != null && !t && Pe(d, te),
              ee(),
              l ?? me(d, i, Me).catch(ht),
              H(`accounts-check`).then(() => {
                if (G())
                  return Promise.all([
                    d.queryClient.invalidateQueries({ queryKey: [`accounts`] }),
                    d.queryClient.invalidateQueries({ queryKey: xe }),
                  ]);
              }));
            return;
          }
          await ve
            .safePost(`/settings/announcement_viewed`, {
              additionalHeaders: { "ChatGPT-Account-ID": i },
              parameters: { query: { announcement_id: Me } },
            })
            .catch(mt);
        }
        if (!G()) {
          x(!1);
          return;
        }
        if (u != null) {
          (await e(t), x(!1));
          return;
        }
        let o = new URL(ie, window.location.origin);
        (o.searchParams.set(`refresh_account`, `true`),
          o.searchParams.set(`account_switch`, `true`),
          o.searchParams.set(`_tm`, `account_transfer_started`),
          o.searchParams.set(`migration_workspace_id`, i),
          await ke(o.toString()));
      } catch (e) {
        let t = e;
        (!n && t instanceof O && t.status === 409 && (await U()),
          n
            ? M(
                u == null
                  ? (0, $.jsx)(P, {
                      id: `personalMigration.refresh.error`,
                      defaultMessage: `Your migration has started, but the workspace couldn’t refresh. Try refreshing again.`,
                      description: `Error after the transfer was accepted but browser refresh failed. Retrying only refreshes the destination workspace; it does not start another migration.`,
                    })
                  : (0, $.jsx)(P, {
                      id: `personalMigration.owner.advanceError`,
                      defaultMessage: `Your transfer has started. Try continuing setup again`,
                      description: `Error after transfer acceptance when advancing the owner setup flow fails; retry never starts another transfer`,
                    }),
              )
            : u != null && (r || (s && (!(t instanceof O) || t.status === 0 || t.status >= 500)))
              ? (T(!0),
                D(!1),
                M(
                  (0, $.jsx)(P, {
                    id: `personalMigration.owner.unconfirmed`,
                    defaultMessage: `Your transfer may have started. Check its status before continuing`,
                    description: `An interrupted transfer request has an uncertain outcome; the owner must reconcile it before choosing another action`,
                  }),
                ))
              : t instanceof O && [401, 403, 409, 503].includes(t.status) && t.diagnosticError instanceof re
                ? M(t.diagnosticError.message)
                : M(f));
      }
      (n || c(!1), x(!1));
    };
    async function e(e) {
      if (G() && u != null) {
        if (!k.current) {
          if (((k.current = !0), e)) {
            let e = `${a}:${i}`;
            (Ie(e), d.set(Le, e));
          }
          (me(d, i, Me).catch(pt),
            H(`accounts-check`).then(() => {
              if (G()) return d.queryClient.invalidateQueries({ queryKey: xe });
            }),
            ee());
        }
        await u.onAccepted();
      }
    }
    ((n[45] = i),
      (n[46] = V),
      (n[47] = ue),
      (n[48] = ie),
      (n[49] = te),
      (n[50] = G),
      (n[51] = B),
      (n[52] = c),
      (n[53] = ee),
      (n[54] = u),
      (n[55] = b),
      (n[56] = o),
      (n[57] = U),
      (n[58] = E),
      (n[59] = d),
      (n[60] = l),
      (n[61] = h),
      (n[62] = S),
      (n[63] = w),
      (n[64] = a),
      (n[65] = Re));
  } else Re = n[65];
  let ze = null;
  if (A != null) {
    let e;
    (n[66] === A
      ? (e = n[67])
      : ((e = (0, $.jsx)(ce, { type: `error`, variant: `callout`, role: `alert`, content: A })),
        (n[66] = A),
        (n[67] = e)),
      (ze = e));
  } else if (u?.recovering && w && !E) {
    let e;
    (n[68] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(ce, {
          type: `warning`,
          variant: `callout`,
          role: `status`,
          content: (0, $.jsx)(P, {
            id: `personalMigration.owner.checkTransfer`,
            defaultMessage: `Check your transfer to continue setup`,
            description: `Recovery prompt to check a previously interrupted transfer before continuing workspace setup; personal access may be retained according to the billing terms`,
          }),
        })),
        (n[68] = e))
      : (e = n[68]),
      (ze = e));
  } else if (ye && _ === `transfer`) {
    let e, t;
    n[69] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(P, {
          id: `personalMigration.wallet.error`,
          defaultMessage: `Your Wallet balance couldn’t be loaded. Any remaining personal Wallet balance won’t transfer to this workspace.`,
          description: `Warning in transfer confirmation when the balance request fails. The amount is unknown, but remaining personal Wallet credit will not transfer.`,
        })),
        (t = (0, $.jsx)(P, {
          id: `personalMigration.wallet.retry`,
          defaultMessage: `Retry`,
          description: `Retries loading the personal Wallet balance before confirming migration`,
        })),
        (n[69] = e),
        (n[70] = t))
      : ((e = n[69]), (t = n[70]));
    let r;
    (n[71] !== K || n[72] !== be
      ? ((r = (0, $.jsx)(ce, {
          type: `warning`,
          variant: `callout`,
          content: e,
          primaryCtaText: t,
          onPrimaryCtaClick: () => {
            (K(X.CHATGPT_PERSONAL_MIGRATION_ACTION_WALLET_RETRY), be());
          },
        })),
        (n[71] = K),
        (n[72] = be),
        (n[73] = r))
      : (r = n[73]),
      (ze = r));
  }
  let Be;
  if (u != null && S) {
    let e;
    (n[74] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(P, {
          id: `personalMigration.owner.continue`,
          defaultMessage: `Continue setup`,
          description: `Continues owner onboarding after an already accepted transfer without refreshing or leaving the current web flow`,
        })),
        (n[74] = e))
      : (e = n[74]),
      (Be = e));
  } else if (w && E) {
    let e;
    (n[75] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(P, {
          id: `personalMigration.owner.confirmBilling`,
          defaultMessage: `Confirm billing and continue`,
          description: `Confirms the displayed personal subscription billing terms before retrying an interrupted transfer; checking status alone never submits billing changes`,
        })),
        (n[75] = e))
      : (e = n[75]),
      (Be = e));
  }
  let Ve = l != null || oe ? Xe : it,
    He = l != null,
    Ue = l?.linkStatus,
    We;
  n[76] !== V || n[77] !== ue || n[78] !== U || n[79] !== E
    ? ((We = E
        ? {
            preview: V ? void 0 : ue,
            onRetry: V
              ? () => {
                  U();
                }
              : void 0,
          }
        : null),
      (n[76] = V),
      (n[77] = ue),
      (n[78] = U),
      (n[79] = E),
      (n[80] = We))
    : (We = n[80]);
  let Ge = !S && E && ((o != null && ge) || B),
    q;
  n[81] === K
    ? (q = n[82])
    : ((q = () => {
        (K(X.CHATGPT_PERSONAL_MIGRATION_ACTION_CONTINUE_TRANSFER), M(null), v(`transfer`));
      }),
      (n[81] = K),
      (n[82] = q));
  let Ke;
  n[83] !== K || n[84] !== u || n[85] !== b || n[86] !== S || n[87] !== w
    ? ((Ke = () => {
        if ((K(X.CHATGPT_PERSONAL_MIGRATION_ACTION_BACK), u != null)) {
          !b && !S && !w && u.onCancel();
          return;
        }
        (M(null), v(`initial`));
      }),
      (n[83] = K),
      (n[84] = u),
      (n[85] = b),
      (n[86] = S),
      (n[87] = w),
      (n[88] = Ke))
    : (Ke = n[88]);
  let qe;
  n[89] !== Fe || n[90] !== K || n[91] !== l
    ? ((qe = (e) => {
        if (l?.linkStatus != null) {
          l.onCancel();
          return;
        }
        (K(
          e === `start-fresh`
            ? X.CHATGPT_PERSONAL_MIGRATION_ACTION_CONTINUE_KEEP_SEPARATE
            : e === `cancel`
              ? X.CHATGPT_PERSONAL_MIGRATION_ACTION_CANCEL
              : X.CHATGPT_PERSONAL_MIGRATION_ACTION_DISMISS,
        ),
          Fe());
      }),
      (n[89] = Fe),
      (n[90] = K),
      (n[91] = l),
      (n[92] = qe))
    : (qe = n[92]);
  let Je;
  n[93] !== Re || n[94] !== K || n[95] !== u || n[96] !== S || n[97] !== w
    ? ((Je = () => {
        y.current ||
          ((u == null || !w) &&
            K(
              S
                ? X.CHATGPT_PERSONAL_MIGRATION_ACTION_REFRESH
                : X.CHATGPT_PERSONAL_MIGRATION_ACTION_CONFIRM_TRANSFER,
            ),
          (y.current = !0),
          Re().finally(() => {
            y.current = !1;
          }));
      }),
      (n[93] = Re),
      (n[94] = K),
      (n[95] = u),
      (n[96] = S),
      (n[97] = w),
      (n[98] = Je))
    : (Je = n[98]);
  let J, Ye;
  n[99] === K
    ? ((J = n[100]), (Ye = n[101]))
    : ((J = (e) => {
        K(
          e === `transfer`
            ? X.CHATGPT_PERSONAL_MIGRATION_ACTION_SELECT_TRANSFER
            : X.CHATGPT_PERSONAL_MIGRATION_ACTION_SELECT_KEEP_SEPARATE,
        );
      }),
      (Ye = () => {
        K(X.CHATGPT_PERSONAL_MIGRATION_ACTION_LEARN_MORE_CLICKED);
      }),
      (n[99] = K),
      (n[100] = J),
      (n[101] = Ye));
  let Ze;
  return (
    n[102] !== Ve ||
    n[103] !== ze ||
    n[104] !== Oe ||
    n[105] !== s ||
    n[106] !== b ||
    n[107] !== Be ||
    n[108] !== _ ||
    n[109] !== He ||
    n[110] !== Ue ||
    n[111] !== We ||
    n[112] !== Ge ||
    n[113] !== q ||
    n[114] !== Ke ||
    n[115] !== qe ||
    n[116] !== Je ||
    n[117] !== J ||
    n[118] !== Ye ||
    n[119] !== S ||
    n[120] !== w
      ? ((Ze = (0, $.jsx)(Ve, {
          isBusinessOwner: s,
          fromSettings: He,
          linkStatus: Ue,
          step: _,
          billing: We,
          formattedPersonalWalletBalance: Oe,
          pending: b,
          loadingBalance: Ge,
          transferAccepted: S,
          transferUnconfirmed: w,
          primaryLabel: Be,
          error: ze,
          onTransfer: q,
          onBack: Ke,
          onClose: qe,
          onConfirm: Je,
          onChoiceChange: J,
          onLearnMore: Ye,
        })),
        (n[102] = Ve),
        (n[103] = ze),
        (n[104] = Oe),
        (n[105] = s),
        (n[106] = b),
        (n[107] = Be),
        (n[108] = _),
        (n[109] = He),
        (n[110] = Ue),
        (n[111] = We),
        (n[112] = Ge),
        (n[113] = q),
        (n[114] = Ke),
        (n[115] = qe),
        (n[116] = Je),
        (n[117] = J),
        (n[118] = Ye),
        (n[119] = S),
        (n[120] = w),
        (n[121] = Ze))
      : (Ze = n[121]),
    Ze
  );
}
function pt() {}
function mt() {}
function ht() {}
var gt, Q, $;
function _t() {
  return (_t = e(() => {
    ((gt = h()),
      V(),
      rt(),
      k(),
      D(),
      (Q = a()),
      S(),
      m(),
      W(),
      ge(),
      Te(),
      B(),
      Se(),
      ye(),
      y(),
      F(),
      Oe(),
      n(),
      I(),
      Ae(),
      De(),
      g(),
      K(),
      Ne(),
      lt(),
      tt(),
      dt(),
      ze(),
      Re(),
      Fe(),
      ($ = f()));
  }))();
}
export { _t as n, ft as t };
//# sourceMappingURL=migration-onboarding-1cc20ed60a83.js.map
