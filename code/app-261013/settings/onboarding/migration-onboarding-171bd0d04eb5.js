import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Ai as n,
  Cot as r,
  Cxt as i,
  Di as a,
  Fi as o,
  GE as s,
  IDt as c,
  Ii as l,
  Ixt as u,
  Mi as d,
  Mz as f,
  Ni as p,
  Nz as m,
  Oi as h,
  Pi as g,
  Pxt as _,
  Trt as v,
  VDt as ee,
  WE as te,
  Zxt as y,
  _O as ne,
  _xt as b,
  cO as x,
  fO as S,
  gO as re,
  hrt as C,
  jDt as w,
  ji as T,
  ki as E,
  lO as D,
  mO as ie,
  oO as O,
  sO as k,
  t3 as A,
  vO as j,
  vrt as M,
  vzt as N,
  wot as P,
  xMt as F,
  xrt as I,
  yzt as L,
  zxt as R,
} from "./app-shared-bbfeca5e5737.js";
import {
  DMr as z,
  KNn as B,
  NDr as V,
  ODr as ae,
  PBn as H,
  QDr as U,
  SPr as W,
  TMr as G,
  XDr as K,
  XMr as oe,
  XNn as q,
  YN as se,
  Ymr as ce,
  ZEr as le,
  aDr as ue,
  eDr as de,
  ehr as fe,
  oNt as pe,
  pOr as me,
  sNt as he,
  tNr as ge,
  vVn as _e,
  xPn as ve,
  yPn as ye,
  yVn as be,
  zMr as xe,
} from "./app-initial-5851df3f6cb1.js";
import { o as Se, s as Ce } from "./workspace-621c2c3096f1.js";
import { n as J, t as we } from "./radio-group-11cefafc81df.js";
import { a as Te, n as Ee, r as De, t as Oe } from "./started-toast-a5d7b9a4a671.js";
import { d as ke, r as Ae, t as je, u as Me } from "./progress-state-2676229eff7e.js";
function Y(e) {
  let t = (0, Ne.c)(5),
    { icon: n, children: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, Pe.jsx)(`span`, {
        className: `max-w-full text-onboarding-label wrap-break-word`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, Pe.jsxs)(`li`, {
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
var Ne, Pe;
function Fe() {
  return (Fe = e(() => {
    ((Ne = N()), (Pe = F()));
  }))();
}
function Ie(e) {
  let t = (0, Le.c)(5),
    { status: n } = e;
  switch (n) {
    case `loading`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Re.jsx)(c, {
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
          ? ((e = (0, Re.jsx)(c, {
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
          ? ((e = (0, Re.jsx)(c, {
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
          ? ((e = (0, Re.jsx)(c, {
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
          ? ((e = (0, Re.jsx)(c, {
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
var Le, Re;
function ze() {
  return (ze = e(() => {
    ((Le = N()), w(), (Re = F()));
  }))();
}
function Be(e) {
  let n = (0, Ue.c)(82),
    {
      step: r,
      fromSettings: i,
      linkStatus: a,
      formattedPersonalWalletBalance: o,
      pending: s,
      loadingBalance: l,
      error: u,
      transferAccepted: d,
      allowCloseAfterTransfer: f,
      description: p,
      primaryLabel: m,
      secondaryLabel: h,
      onTransfer: g,
      onBack: _,
      onClose: v,
      onConfirm: ee,
      onLearnMore: te,
    } = e,
    y = i !== void 0 && i,
    b = f !== void 0 && f,
    x = (0, We.useRef)(null),
    S = a?.status,
    C = S == null && r === `transfer`,
    w = S === `loading` || s || (C && l),
    T;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => {
        x.current?.focus();
      }),
      (n[0] = T))
    : (T = n[0]);
  let E;
  (n[1] !== S || n[2] !== r ? ((E = [r, S]), (n[1] = S), (n[2] = r), (n[3] = E)) : (E = n[3]),
    (0, We.useEffect)(T, E));
  let D;
  if (S === `error`) {
    let e;
    (n[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(c, {
          id: `personalMigration.linkStatus.retry`,
          defaultMessage: `Try again`,
          description: `Button that retries the eligibility lookup after an account-loading error in the migration link dialog; does not start a transfer`,
        })),
        (n[4] = e))
      : (e = n[4]),
      (D = e));
  } else if (d) {
    let e;
    (n[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(c, {
          id: `personalMigration.refresh.button`,
          defaultMessage: `Refresh workspace`,
          description: `Retries refreshing the browser after personal-data migration has already started; does not submit another transfer`,
        })),
        (n[5] = e))
      : (e = n[5]),
      (D = e));
  } else if (C && s) {
    let e;
    (n[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(c, {
          id: `personalMigration.startingTransfer`,
          defaultMessage: `Starting transfer…`,
          description: `Disabled confirmation button while the request to start transferring personal data into the current workspace is pending`,
        })),
        (n[6] = e))
      : (e = n[6]),
      (D = e));
  } else if (C) {
    let e;
    (n[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(c, {
          id: `personalMigration.history.startTransfer`,
          defaultMessage: `Start transfer`,
          description: `Starts the irreversible personal-data migration after the user has reviewed the confirmation`,
        })),
        (n[7] = e))
      : (e = n[7]),
      (D = e));
  } else {
    let e;
    (n[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(c, {
          id: `personalMigration.history.transferData`,
          defaultMessage: `Transfer data`,
          description: `Opens the final migration confirmation without starting a transfer`,
        })),
        (n[8] = e))
      : (e = n[8]),
      (D = e));
  }
  let A;
  if (S != null) {
    let e;
    (n[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(c, {
          id: `personalMigration.linkStatus.close`,
          defaultMessage: `Close`,
          description: `Button that dismisses the migration link status dialog and leaves Data controls open`,
        })),
        (n[9] = e))
      : (e = n[9]),
      (A = e));
  } else if (d) {
    let e;
    (n[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(c, {
          id: `common.close`,
          defaultMessage: `Close`,
          description: `Close button label`,
        })),
        (n[10] = e))
      : (e = n[10]),
      (A = e));
  } else if (y && !C) {
    let e;
    (n[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(c, { id: `common.cancel`, defaultMessage: `Cancel`, description: `Cancel button` })),
        (n[11] = e))
      : (e = n[11]),
      (A = e));
  } else if (C) {
    let e;
    (n[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(c, {
          id: `selectedModal.back`,
          defaultMessage: `Back`,
          description: `Returns to the preceding step without starting the transfer`,
        })),
        (n[12] = e))
      : (e = n[12]),
      (A = e));
  } else {
    let e;
    (n[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(c, {
          id: `personalMigration.history.startFresh`,
          defaultMessage: `Start fresh`,
          description: `Continues in the current workspace while keeping the personal workspace and subscription separate`,
        })),
        (n[13] = e))
      : (e = n[13]),
      (A = e));
  }
  let j;
  n[14] === te
    ? (j = n[15])
    : ((j = {
        strong: Ve,
        link: (e) =>
          (0, X.jsx)(ye, {
            appearance: `secondary`,
            href: `https://help.openai.com/articles/8801890`,
            openTarget: `external-browser`,
            initiator: `open_in_browser_bridge`,
            onClick: te,
            onAuxClick: (e) => {
              e.button === 1 && te?.();
            },
            children: e,
          }),
      }),
      (n[14] = te),
      (n[15] = j));
  let M = j,
    N = p;
  if (S != null) {
    let e;
    (n[16] === S ? (e = n[17]) : ((e = (0, X.jsx)(Ie, { status: S })), (n[16] = S), (n[17] = e)), (N = e));
  } else if (N == null) {
    if (C && y) {
      let e;
      (n[18] !== M.link || n[19] !== M.strong
        ? ((e = (0, X.jsx)(c, {
            id: `personalMigration.settings.confirmation.accessWarning.sitesEmphasized`,
            defaultMessage: `Your personal ChatGPT data will be transferred to this workspace. <strong>Your sites won’t transfer.</strong> Your personal workspace will become inaccessible as soon as the transfer starts. <strong>Your personal subscription will be canceled</strong>. If you leave this workspace, or if the workspace is deactivated, you will lose your data. This can’t be undone. <link>Learn more</link>`,
            description: `Final confirmation opened from Data controls in an existing Business workspace. Warns that Sites (hosted websites or apps created with Sites) are excluded, personal workspace access and subscription end when transfer starts, and access to transferred data depends on destination membership. Preserve both strong tags, which emphasize the complete Sites exclusion sentence and subscription cancellation; the link opens migration help.`,
            values: { strong: M.strong, link: M.link },
          })),
          (n[18] = M.link),
          (n[19] = M.strong),
          (n[20] = e))
        : (e = n[20]),
        (N = e));
    } else if (C) {
      let e;
      (n[21] !== M.link || n[22] !== M.strong
        ? ((e = (0, X.jsx)(c, {
            id: `personalMigration.history.confirmation.accessWarning.sitesEmphasized`,
            defaultMessage: `Your personal ChatGPT data will be transferred to your new business workspace. <strong>Your sites won’t transfer.</strong> Your personal workspace will become inaccessible as soon as the transfer starts. <strong>Your personal subscription will be canceled</strong>. If you leave the business workspace, or if the workspace is deactivated, you will lose your data. This can’t be undone. <link>Learn more</link>`,
            description: `Final confirmation body shown after a user chooses to transfer personal ChatGPT data into a Business workspace. Warns that Sites (hosted websites or apps created with Sites) are excluded, the source personal workspace becomes inaccessible when transfer starts, the personal subscription is canceled, and access to transferred data depends on membership in the destination workspace. Serious, direct tone. Preserve both strong tags, which emphasize the complete Sites exclusion sentence and subscription cancellation with primary text color and medium font weight; the link tag opens migration Help Center guidance. No variable placeholders.`,
            values: { strong: M.strong, link: M.link },
          })),
          (n[21] = M.link),
          (n[22] = M.strong),
          (n[23] = e))
        : (e = n[23]),
        (N = e));
    } else if (y) {
      let e;
      (n[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(c, {
            id: `personalMigration.settings.overview.description`,
            defaultMessage: `Bring your personal ChatGPT data into this workspace to preserve your memory and context. You can transfer:`,
            description: `Introduces the five personal data categories in the optional Settings migration overview for an existing Business workspace member. Cancel leaves the personal workspace and its data unchanged.`,
          })),
          (n[24] = e))
        : (e = n[24]),
        (N = e));
    } else {
      let e;
      (n[25] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(c, {
            id: `personalMigration.history.description`,
            defaultMessage: `You can bring your personal account data to your new workspace to preserve your memory and context. If you transfer, this data will be copied into your workspace:`,
            description: `Introduces the personal data categories copied into the new workspace if the user chooses Transfer data. Choosing Start fresh keeps personal data separate and does not remove access to it.`,
          })),
          (n[25] = e))
        : (e = n[25]),
        (N = e));
    }
  }
  let P;
  n[26] !== b || n[27] !== v || n[28] !== s || n[29] !== d
    ? ((P = (e) => {
        !e && !s && (!d || b) && v(`dismiss`);
      }),
      (n[26] = b),
      (n[27] = v),
      (n[28] = s),
      (n[29] = d),
      (n[30] = P))
    : (P = n[30]);
  let F;
  n[31] !== w || n[32] !== C || n[33] !== a || n[34] !== ee || n[35] !== g
    ? ((F = (e) => {
        (e.preventDefault(), !w && (a == null ? (C ? ee() : g()) : a.status === `error` && a.onRetry()));
      }),
      (n[31] = w),
      (n[32] = C),
      (n[33] = a),
      (n[34] = ee),
      (n[35] = g),
      (n[36] = F))
    : (F = n[36]);
  let I = C ? `flex flex-col gap-6 px-8 pt-6 pb-8` : `flex flex-col gap-6 px-8 pt-8 pb-4`,
    L;
  n[37] === C
    ? (L = n[38])
    : ((L = (0, X.jsx)(ne, {
        asChild: !0,
        children: (0, X.jsx)(`h2`, {
          ref: x,
          className: `text-onboarding-title font-medium`,
          tabIndex: -1,
          children: C
            ? (0, X.jsx)(c, {
                id: `teamTransferModal.confirmation.title`,
                defaultMessage: `Are you sure?`,
                description: `Title of the final confirmation before permanently transferring personal ChatGPT data into the current workspace`,
              })
            : (0, X.jsx)(c, {
                id: `personalMigration.history.title`,
                defaultMessage: `Transfer your account history?`,
                description: `Title asking whether to bring personal ChatGPT data into the workspace the user has joined`,
              }),
        }),
      })),
      (n[37] = C),
      (n[38] = L));
  let R;
  n[39] === N
    ? (R = n[40])
    : ((R = (0, X.jsx)(re, { className: `text-onboarding-body text-secondary`, children: N })),
      (n[39] = N),
      (n[40] = R));
  let z;
  n[41] !== R || n[42] !== L
    ? ((z = (0, X.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [L, R] })),
      (n[41] = R),
      (n[42] = L),
      (n[43] = z))
    : (z = n[43]);
  let B;
  n[44] !== C || n[45] !== S
    ? ((B = S == null && !C && (0, X.jsx)(He, {})), (n[44] = C), (n[45] = S), (n[46] = B))
    : (B = n[46]);
  let V;
  n[47] !== C || n[48] !== o
    ? ((V =
        C &&
        o != null &&
        (0, X.jsx)(`p`, {
          className: `text-onboarding-body text-secondary`,
          children: (0, X.jsx)(c, {
            id: `teamAccountTransferModal.member.confirmation.walletBalance`,
            defaultMessage: `Your remaining personal Wallet balance of {currentBalance} will be lost and won’t transfer to this workspace.`,
            description: `Warning before migration when personal Wallet credit remains. The currentBalance placeholder is a positive monetary amount formatted with its currency and locale.`,
            values: { currentBalance: o },
          }),
        })),
      (n[47] = C),
      (n[48] = o),
      (n[49] = V))
    : (V = n[49]);
  let ae = S == null && u,
    H;
  n[50] !== b ||
  n[51] !== A ||
  n[52] !== C ||
  n[53] !== y ||
  n[54] !== _ ||
  n[55] !== v ||
  n[56] !== s ||
  n[57] !== h ||
  n[58] !== S ||
  n[59] !== d
    ? ((H =
        (!d || b) &&
        (0, X.jsx)(t, {
          className: `flex-1`,
          allowShrink: !0,
          type: `button`,
          color: `outlineGhost`,
          size: `onboardingAction`,
          disabled: s,
          onClick: () => {
            S == null ? (C && !d ? _() : v(d ? `dismiss` : y ? `cancel` : `start-fresh`)) : v(`dismiss`);
          },
          children: h ?? A,
        })),
      (n[50] = b),
      (n[51] = A),
      (n[52] = C),
      (n[53] = y),
      (n[54] = _),
      (n[55] = v),
      (n[56] = s),
      (n[57] = h),
      (n[58] = S),
      (n[59] = d),
      (n[60] = H))
    : (H = n[60]);
  let U;
  n[61] !== w || n[62] !== D || n[63] !== m || n[64] !== S
    ? ((U =
        (S == null || S === `loading` || S === `error`) &&
        (0, X.jsx)(t, {
          className: `flex-1`,
          allowShrink: !0,
          type: `submit`,
          color: `primary`,
          size: `onboardingAction`,
          loading: w,
          disabled: w,
          children: m ?? D,
        })),
      (n[61] = w),
      (n[62] = D),
      (n[63] = m),
      (n[64] = S),
      (n[65] = U))
    : (U = n[65]);
  let W;
  n[66] !== H || n[67] !== U
    ? ((W = (0, X.jsxs)(k, { children: [H, U] })), (n[66] = H), (n[67] = U), (n[68] = W))
    : (W = n[68]);
  let G;
  n[69] !== z || n[70] !== B || n[71] !== V || n[72] !== ae || n[73] !== W || n[74] !== I
    ? ((G = (0, X.jsxs)(`div`, { className: I, children: [z, B, V, ae, W] })),
      (n[69] = z),
      (n[70] = B),
      (n[71] = V),
      (n[72] = ae),
      (n[73] = W),
      (n[74] = I),
      (n[75] = G))
    : (G = n[75]);
  let K;
  n[76] !== G || n[77] !== F
    ? ((K = (0, X.jsx)(O, {
        as: `form`,
        className: `select-none`,
        size: `viewport`,
        variant: `chatgpt`,
        onSubmit: F,
        children: G,
      })),
      (n[76] = G),
      (n[77] = F),
      (n[78] = K))
    : (K = n[78]);
  let oe;
  return (
    n[79] !== K || n[80] !== P
      ? ((oe = (0, X.jsx)(ie, {
          open: !0,
          size: `beacon`,
          variant: `onboarding`,
          showDialogClose: !1,
          onOpenChange: P,
          children: K,
        })),
        (n[79] = K),
        (n[80] = P),
        (n[81] = oe))
      : (oe = n[81]),
    oe
  );
}
function Ve(e) {
  return (0, X.jsx)(`strong`, { className: `font-medium text-default`, children: e });
}
function He() {
  let e = (0, Ue.c)(5),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, X.jsx)(Y, {
        icon: (0, X.jsx)(f, { asset: p }),
        children: (0, X.jsx)(c, {
          id: `personalMigration.history.chats`,
          defaultMessage: `Chats`,
          description: `Personal chat history category in the migration overview`,
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, X.jsx)(Y, {
        icon: (0, X.jsx)(f, { asset: E }),
        children: (0, X.jsx)(c, {
          id: `personalMigration.history.files`,
          defaultMessage: `Files`,
          description: `Personal files category in the migration overview`,
        }),
      })),
      (e[1] = n))
    : (n = e[1]);
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(Y, {
        icon: (0, X.jsx)(f, { asset: o }),
        children: (0, X.jsx)(c, {
          id: `personalMigration.history.memories`,
          defaultMessage: `Memories`,
          description: `Saved personal memories category in the migration overview`,
        }),
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, X.jsx)(Y, {
        icon: (0, X.jsx)(f, { asset: T }),
        children: (0, X.jsx)(c, {
          id: `personalMigration.history.automations`,
          defaultMessage: `Automations`,
          description: `Personal scheduled tasks category in the migration overview`,
        }),
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  return (
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, X.jsxs)(`ul`, {
          className: `grid grid-cols-2 gap-4 sm:grid-cols-3`,
          children: [
            t,
            n,
            r,
            i,
            (0, X.jsx)(Y, {
              icon: (0, X.jsx)(f, { asset: h }),
              children: (0, X.jsx)(c, {
                id: `personalMigration.history.plugins`,
                defaultMessage: `Plugins`,
                description: `Personal plugins category in the migration overview`,
              }),
            }),
          ],
        })),
        (e[4] = a))
      : (a = e[4]),
    a
  );
}
var Ue, We, X;
function Ge() {
  return (Ge = e(() => {
    ((Ue = N()), l(), g(), d(), n(), a(), (We = L()), w(), A(), j(), S(), ve(), m(), Fe(), ze(), (X = F()));
  }))();
}
var Z, Ke;
function qe() {
  return (qe = e(() => {
    ((Z = (function (e) {
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
      (Ke = { $type: `protobuf_analytics_events.v1.ChatgptPersonalMigrationInteraction` }));
  }))();
}
function Je(e) {
  let n = (0, Ze.c)(67),
    {
      step: r,
      isBusinessOwner: i,
      formattedPersonalWalletBalance: a,
      pending: o,
      loadingBalance: s,
      error: l,
      transferAccepted: u,
      onTransfer: d,
      onBack: f,
      onClose: p,
      onConfirm: m,
      onChoiceChange: h,
      onLearnMore: g,
    } = e,
    _ = ee(),
    v = q(),
    y = (0, Qe.useRef)(null),
    [b, S] = (0, Qe.useState)(`create`),
    C = r === `transfer`,
    w = o || (C && s),
    T;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => {
        y.current?.focus();
      }),
      (n[0] = T))
    : (T = n[0]);
  let E;
  (n[1] === r ? (E = n[2]) : ((E = [r]), (n[1] = r), (n[2] = E)), (0, Qe.useEffect)(T, E));
  let A;
  if (C) {
    let e;
    (n[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, {
          id: `teamTransferModal.confirmation.title`,
          defaultMessage: `Are you sure?`,
          description: `Short title of the final Business workspace migration confirmation dialog. Shown to a user who chose to move their personal ChatGPT data into a Business workspace. Asks them to confirm the irreversible transfer before it starts.`,
        })),
        (n[3] = e))
      : (e = n[3]),
      (A = e));
  } else if (i) {
    let e;
    (n[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, {
          id: `teamAccountTransferModal.title`,
          defaultMessage: `Your ChatGPT Business workspace is ready`,
          description: `Initial modal title for Business account transfer`,
        })),
        (n[4] = e))
      : (e = n[4]),
      (A = e));
  } else {
    let e;
    (n[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, {
          id: `teamAccountTransferModal.member.title`,
          defaultMessage: `Your ChatGPT workspace is ready`,
          description: `Title of the optional personal-data migration dialog shown to a new Business or Enterprise workspace member. The user has already joined the destination workspace and can choose whether to transfer personal data into it.`,
        })),
        (n[5] = e))
      : (e = n[5]),
      (A = e));
  }
  let j;
  if (C) {
    let e;
    (n[6] === i
      ? (e = n[7])
      : ((e = i
          ? (0, Q.jsx)(c, {
              id: `teamTransferModal.confirmation.description`,
              defaultMessage: `Your personal ChatGPT data will be transferred to your business account. This can’t be undone.`,
              description: `Subtitle in the final Business workspace migration confirmation dialog. Warns a user who selected transfer that moving their personal ChatGPT data into the Business workspace is permanent.`,
            })
          : (0, Q.jsx)(c, {
              id: `teamAccountTransferModal.member.confirmation.description`,
              defaultMessage: `Your personal ChatGPT data will be transferred to this workspace. This can’t be undone.`,
              description: `Subtitle in the final optional migration confirmation dialog for a Business or Enterprise workspace member. Warns that confirming the transfer of personal ChatGPT data into the current workspace is irreversible.`,
            })),
        (n[6] = i),
        (n[7] = e)),
      (j = e));
  } else {
    let e;
    (n[8] === i
      ? (e = n[9])
      : ((e = i
          ? (0, Q.jsx)(c, {
              id: `teamAccountTransferModal.v2.owner.explanation`,
              defaultMessage: `Do you want to transfer your personal data to your new Business workspace?`,
              description: `Question in the optional migration dialog shown to a new Business workspace owner. Asks whether to transfer supported data from the owner's personal workspace into the new Business workspace. The choices below explain which data is supported and allow the user to keep personal data separate instead. Business is a workspace type. No placeholders.`,
            })
          : (0, Q.jsx)(c, {
              id: `teamAccountTransferModal.v2.member.explanation`,
              defaultMessage: `Do you want to transfer your personal data to this workspace?`,
              description: `Question in the optional migration dialog shown after a user joins a Business or Enterprise workspace. Asks whether to transfer supported data from their personal workspace into the current workspace. The choices below explain which data is supported and allow the user to keep personal data separate instead. No placeholders.`,
            })),
        (n[8] = i),
        (n[9] = e)),
      (j = e));
  }
  let M;
  if (u) {
    let e;
    (n[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, {
          id: `personalMigration.refresh.button`,
          defaultMessage: `Refresh workspace`,
          description: `Retries refreshing the browser after personal-data migration has already started; does not submit another transfer`,
        })),
        (n[10] = e))
      : (e = n[10]),
      (M = e));
  } else if (C && o) {
    let e;
    (n[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, {
          id: `personalMigration.startingTransfer`,
          defaultMessage: `Starting transfer…`,
          description: `Disabled confirmation button while the request to start transferring personal data into the current workspace is pending`,
        })),
        (n[11] = e))
      : (e = n[11]),
      (M = e));
  } else if (C) {
    let e;
    (n[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, {
          id: `teamTransferModal.confirm`,
          defaultMessage: `Confirm transfer`,
          description: `Short, explicit label for the final danger button in the Business workspace migration confirmation dialog. Shown to an end user who chose to move their personal ChatGPT data into a Business workspace. Clicking immediately starts the irreversible transfer; it does not open another confirmation step.`,
        })),
        (n[12] = e))
      : (e = n[12]),
      (M = e));
  } else {
    let e;
    (n[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, {
          id: `teamAccountTransferModal.confirm`,
          defaultMessage: `Continue`,
          description: `Short primary button label in the initial optional personal-to-workspace migration dialog for Business and Enterprise owners and members. With Start fresh selected, it completes this onboarding step and keeps personal data separate. With Transfer personal data selected, it opens the final confirmation dialog without starting the transfer. No placeholders.`,
        })),
        (n[13] = e))
      : (e = n[13]),
      (M = e));
  }
  let N = !o && !u,
    P;
  n[14] !== p || n[15] !== o || n[16] !== u
    ? ((P = (e) => {
        !e && !o && !u && p(`dismiss`);
      }),
      (n[14] = p),
      (n[15] = o),
      (n[16] = u),
      (n[17] = P))
    : (P = n[17]);
  let F;
  n[18] !== w || n[19] !== b || n[20] !== C || n[21] !== p || n[22] !== m || n[23] !== d
    ? ((F = (e) => {
        (e.preventDefault(), !w && (C ? m() : b === `transfer` ? d() : p(`start-fresh`)));
      }),
      (n[18] = w),
      (n[19] = b),
      (n[20] = C),
      (n[21] = p),
      (n[22] = m),
      (n[23] = d),
      (n[24] = F))
    : (F = n[24]);
  let I;
  n[25] === A
    ? (I = n[26])
    : ((I = (0, Q.jsx)(ne, {
        asChild: !0,
        children: (0, Q.jsx)(`h2`, { ref: y, tabIndex: -1, children: A }),
      })),
      (n[25] = A),
      (n[26] = I));
  let L;
  n[27] === j ? (L = n[28]) : ((L = (0, Q.jsx)(re, { children: j })), (n[27] = j), (n[28] = L));
  let R;
  n[29] !== I || n[30] !== L
    ? ((R = (0, Q.jsx)(x, { title: I, subtitle: L })), (n[29] = I), (n[30] = L), (n[31] = R))
    : (R = n[31]);
  let z;
  n[32] !== b ||
  n[33] !== C ||
  n[34] !== a ||
  n[35] !== _ ||
  n[36] !== i ||
  n[37] !== h ||
  n[38] !== g ||
  n[39] !== o ||
  n[40] !== v
    ? ((z = C
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(`h3`, {
                className: `text-sm font-semibold`,
                children: (0, Q.jsx)(c, {
                  id: `teamTransferModal.confirmTitle`,
                  defaultMessage: `Transfer of existing data is permanent and can’t be undone`,
                  description: `Heading above the outcome list in the final optional personal-to-workspace migration confirmation dialog. Warns Business and Enterprise owners and members that the transfer is irreversible. Introduces the supported data, excluded Sites, account-access, and subscription consequences. No placeholders.`,
                }),
              }),
              (0, Q.jsxs)(`ul`, {
                className: `list-disc ps-5 text-sm text-secondary`,
                children: [
                  (0, Q.jsx)(`li`, {
                    children: v
                      ? (0, Q.jsx)(c, {
                          id: `teamAccountTransferModal.v2.dataTypes.space`,
                          defaultMessage: `Your chats, GPTs, projects, and saved memories will transfer to this workspace. Space files, tasks, personalization (including custom instructions), and connected apps will also transfer where supported by your workspace.`,
                          description: `Data summary in the final confirmation of optional personal-to-workspace migration for Business and Enterprise owners and members. Chats, GPTs, projects, and saved memories are the core migration resources. Space files, scheduled tasks, explicit personalization, app connections, and installed apps are separately enabled and subject to destination support. Personalization includes custom instructions, not every account setting. Preserve the qualification that additional resources transfer only where supported. Plain text with no placeholders. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                        })
                      : (0, Q.jsx)(c, {
                          id: `teamAccountTransferModal.v2.dataTypes`,
                          defaultMessage: `Your chats, GPTs, projects, and saved memories will transfer to this workspace. Library files, tasks, personalization (including custom instructions), and connected apps will also transfer where supported by your workspace.`,
                          description: `Data summary in the final confirmation of optional personal-to-workspace migration for Business and Enterprise owners and members. Chats, GPTs, projects, and saved memories are the core migration resources. Library files, scheduled tasks, explicit personalization, app connections, and installed apps are separately enabled and subject to destination support. Personalization includes custom instructions, not every account setting. Preserve the qualification that additional resources transfer only where supported. Plain text with no placeholders.`,
                        }),
                  }),
                  (0, Q.jsx)(`li`, {
                    children: (0, Q.jsx)(`strong`, {
                      className: `font-semibold text-default`,
                      children: (0, Q.jsx)(c, {
                        id: `teamAccountTransferModal.v2.sitesExcluded`,
                        defaultMessage: `Your sites won’t transfer.`,
                        description: `Prominent warning in the final confirmation for optional personal-to-workspace migration, shown to Business and Enterprise owners and members. Sites means the user's hosted websites or apps created with the Sites product, not physical locations. These are excluded from this migration. Rendered in bold; a complete short sentence with no placeholders.`,
                      }),
                    }),
                  }),
                  (0, Q.jsx)(`li`, {
                    children: (0, Q.jsx)(c, {
                      id: `teamAccountTransferModal.v2.personalWorkspace`,
                      defaultMessage: `Your personal workspace will be inaccessible.`,
                      description: `Access warning in the final confirmation for optional personal-to-workspace migration, shown to Business and Enterprise owners and members. The personal workspace is the source Personal workspace, not the destination Business or Enterprise workspace. Confirming deactivates access to that source workspace; this does not claim that its data is deleted or the user's entire login is disabled. A complete short sentence with no placeholders.`,
                    }),
                  }),
                  (0, Q.jsx)(`li`, {
                    children: (0, Q.jsx)(c, {
                      id: `teamTransferModal.cancelPlus`,
                      defaultMessage: `If you have a ChatGPT Plus subscription, it will be canceled and refunded upon merging.`,
                      description: `Description to explain existing Plus subscription will be cancelled`,
                    }),
                  }),
                ],
              }),
              a != null &&
                (0, Q.jsx)(`p`, {
                  className: `text-sm text-secondary`,
                  children: i
                    ? (0, Q.jsx)(c, {
                        id: `teamTransferModal.walletBalanceWithAmount`,
                        defaultMessage: `Your remaining personal Wallet balance of {currentBalance} will be lost and won’t transfer to your Business workspace.`,
                        description: `Plain-text warning bullet in the Business workspace merge confirmation modal, shown only to an end user with remaining personal Wallet credit who chose to transfer their personal chat history and GPTs and is about to confirm the merge. Warns that the personal Wallet credit will be permanently lost and will not transfer to the Business workspace. Placeholder {currentBalance} is the nonempty personal Wallet credit formatted as a positive monetary amount in its currency and the user's locale. Contains no markup or links.`,
                        values: { currentBalance: a },
                      })
                    : (0, Q.jsx)(c, {
                        id: `teamAccountTransferModal.member.confirmation.walletBalance`,
                        defaultMessage: `Your remaining personal Wallet balance of {currentBalance} will be lost and won’t transfer to this workspace.`,
                        description: `Warning in the optional migration confirmation for a Business or Enterprise workspace member with remaining personal Wallet credit. The credit will not transfer to the destination workspace. The currentBalance placeholder is a positive monetary amount already formatted with its currency and locale.`,
                        values: { currentBalance: a },
                      }),
                }),
              (0, Q.jsx)(te, {
                type: `warning`,
                variant: `callout`,
                layout: `vertical`,
                title: (0, Q.jsx)(c, {
                  id: `teamTransferModal.warning.title`,
                  defaultMessage: `You may lose access to your data`,
                  description: `Prominent warning heading in the final Business workspace migration confirmation dialog. Alerts the user that access to their transferred personal data depends on continued access to the Business workspace.`,
                }),
                content: (0, Q.jsx)(c, {
                  id: `teamTransferModal.warning.description`,
                  defaultMessage: `If you leave the workspace, or if the workspace is deactivated, you will lose your data. <link>Learn more</link>`,
                  description: `Warning body in the final Business workspace migration confirmation dialog. Explains that the user will lose access to their transferred personal data if they leave the Business workspace or it is deactivated. The link opens the Help Center article about workspace migration and access risks. Preserve the link tag.`,
                  values: {
                    link: (e) =>
                      (0, Q.jsx)(ye, {
                        href: `https://help.openai.com/articles/8801890`,
                        openTarget: `external-browser`,
                        initiator: `open_in_browser_bridge`,
                        onClick: g,
                        onAuxClick: (e) => {
                          e.button === 1 && g?.();
                        },
                        children: e,
                      }),
                  },
                }),
              }),
            ],
          })
        : (0, Q.jsxs)(J, {
            name: `personal-migration-choice`,
            direction: `col`,
            value: b,
            onChange: (e) => {
              (S(e), h?.(e));
            },
            disabled: o,
            "aria-label": _.formatMessage({
              id: `personalMigration.choice.label`,
              defaultMessage: `Personal data transfer`,
              description: `Accessible name of the choices to keep personal ChatGPT data separate or transfer it into the current workspace`,
            }),
            children: [
              (0, Q.jsx)(J.Item, {
                value: `create`,
                block: !0,
                children: (0, Q.jsxs)(`span`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, Q.jsx)(`span`, {
                      className: `text-sm font-semibold`,
                      children: (0, Q.jsx)(c, {
                        id: `teamAccountTransferModal.keepSeparateLabel`,
                        defaultMessage: `Start fresh in this workspace`,
                        description: `Short label for the keep-separate option in the optional personal-data migration dialog for Business and Enterprise workspace owners and members. Selecting it and continuing keeps personal data in the Personal workspace instead of transferring it. Start fresh means continuing without importing personal data; it does not create, empty, or reset the shared workspace. The alternative transfers supported personal data. No placeholders.`,
                      }),
                    }),
                    (0, Q.jsx)(`span`, {
                      className: `text-sm text-secondary`,
                      children: (0, Q.jsx)(c, {
                        id: `teamAccountTransferModal.create.paidPlanDetail`,
                        defaultMessage: `Keep your personal data separate. If you’re on a paid plan, you’ll maintain your subscription until you cancel.`,
                        description: `Description of the keep-separate option in the optional personal-to-workspace migration dialog for Business and Enterprise owners and members. Explains that personal data stays separate and any existing personal paid subscription remains active until the user cancels it. No placeholders.`,
                      }),
                    }),
                  ],
                }),
              }),
              (0, Q.jsx)(J.Item, {
                value: `transfer`,
                block: !0,
                children: (0, Q.jsxs)(`span`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, Q.jsx)(`span`, {
                      className: `text-sm font-semibold`,
                      children: (0, Q.jsx)(c, {
                        id: `teamAccountTransferModal.v2.transferHistoryLabel`,
                        defaultMessage: `Transfer your personal account history`,
                        description: `Short label for the transfer radio option in the optional personal-to-workspace migration dialog for Business and Enterprise owners and members. Account history includes chats, saved memories, files, connected apps, automations, and other supported data. Selecting it and continuing opens a confirmation before transfer starts. The alternative is Start fresh in this workspace, which keeps personal data separate. No placeholders.`,
                      }),
                    }),
                    (0, Q.jsx)(`span`, {
                      className: `text-sm text-secondary`,
                      children: (0, Q.jsxs)(`span`, {
                        className: `flex flex-col gap-3`,
                        children: [
                          (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(c, {
                              id: `teamAccountTransferModal.v2.supportedDataDescription.emphasized`,
                              defaultMessage: `Bring your personal data to your new workspace to preserve your memory and context. Your supported chats, saved memories, files, connected apps, automations, and more will be transferred. <strong>Sites won’t be transferred.</strong>`,
                              description: `First paragraph under the transfer radio option in the optional personal-to-workspace migration dialog for Business and Enterprise owners and members. Describes supported data copied from the Personal workspace. Saved memories are stored facts and preferences; files includes Library files; connected apps covers app connections and installed apps; automations are scheduled tasks. And more includes other supported data such as GPTs, projects, and personalization. Resources depend on destination support and configuration, so preserve the supported qualification for all listed data types. Sites means hosted websites or apps created with the Sites product, which are not migrated. Preserve the strong tag around the complete Sites exclusion sentence, rendered in bold with primary text color. Selecting this option and continuing opens a separate confirmation. No variable placeholders.`,
                              values: { strong: Xe },
                            }),
                          }),
                          (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(c, {
                              id: `teamAccountTransferModal.v2.transferConsequences.emphasized`,
                              defaultMessage: `Your personal workspace <strong>will no longer be accessible</strong>, and your personal subscription will be canceled. If you leave the new workspace or it is deactivated, you’ll lose access to the transferred data. The transfer <strong>can’t be undone</strong>. <link>Learn more</link>`,
                              description: `Second paragraph under the transfer radio option in the optional personal-to-workspace migration dialog for Business and Enterprise owners and members. Explains what happens after the user separately confirms transfer: the source Personal workspace becomes inaccessible and an existing personal subscription is canceled. This does not claim deletion of personal data or disabling the user's entire login. The new workspace means the destination Business or Enterprise workspace. Losing access to that destination also removes access to the copied data. The transfer is irreversible. Preserve both strong tags, which render the loss-of-access and irreversibility phrases in bold, and the link tag, which opens the Help Center article about migration and access risks in a new tab. Calm explanatory text with no variable placeholders.`,
                              values: {
                                strong: Ye,
                                link: (e) =>
                                  (0, Q.jsx)(ye, {
                                    appearance: `secondary`,
                                    href: `https://help.openai.com/articles/8801890`,
                                    openTarget: `external-browser`,
                                    initiator: `open_in_browser_bridge`,
                                    onClick: g,
                                    onAuxClick: (e) => {
                                      e.button === 1 && g?.();
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
      (n[32] = b),
      (n[33] = C),
      (n[34] = a),
      (n[35] = _),
      (n[36] = i),
      (n[37] = h),
      (n[38] = g),
      (n[39] = o),
      (n[40] = v),
      (n[41] = z))
    : (z = n[41]);
  let B;
  n[42] !== l || n[43] !== z
    ? ((B = (0, Q.jsxs)(D, { className: `flex flex-col gap-4`, children: [z, l] })),
      (n[42] = l),
      (n[43] = z),
      (n[44] = B))
    : (B = n[44]);
  let V;
  n[45] !== C || n[46] !== f || n[47] !== p || n[48] !== o || n[49] !== u
    ? ((V =
        !u &&
        (0, Q.jsx)(t, {
          type: `button`,
          color: `secondary`,
          disabled: o,
          onClick: C
            ? () => {
                (S(`create`), f());
              }
            : () => p(`cancel`),
          children: C
            ? (0, Q.jsx)(c, {
                id: `selectedModal.back`,
                defaultMessage: `Back`,
                description: `Back button text to return to previous step`,
              })
            : (0, Q.jsx)(c, {
                id: `teamAccountTransferModal.cancel`,
                defaultMessage: `Cancel`,
                description: `Button in the initial Business workspace migration dialog. Closes the dialog without transferring any personal data and keeps the Personal workspace separate.`,
              }),
        })),
      (n[45] = C),
      (n[46] = f),
      (n[47] = p),
      (n[48] = o),
      (n[49] = u),
      (n[50] = V))
    : (V = n[50]);
  let ae = C && !u ? `dangerSolid` : `primary`,
    H;
  n[51] !== w || n[52] !== M || n[53] !== ae
    ? ((H = (0, Q.jsx)(t, { type: `submit`, color: ae, loading: w, disabled: w, children: M })),
      (n[51] = w),
      (n[52] = M),
      (n[53] = ae),
      (n[54] = H))
    : (H = n[54]);
  let U;
  n[55] !== V || n[56] !== H
    ? ((U = (0, Q.jsxs)(k, { children: [V, H] })), (n[55] = V), (n[56] = H), (n[57] = U))
    : (U = n[57]);
  let W;
  n[58] !== B || n[59] !== U || n[60] !== F || n[61] !== R
    ? ((W = (0, Q.jsxs)(O, {
        as: `form`,
        size: `viewport`,
        className: `select-none`,
        onSubmit: F,
        children: [R, B, U],
      })),
      (n[58] = B),
      (n[59] = U),
      (n[60] = F),
      (n[61] = R),
      (n[62] = W))
    : (W = n[62]);
  let G;
  return (
    n[63] !== W || n[64] !== N || n[65] !== P
      ? ((G = (0, Q.jsx)(ie, { open: !0, size: `wide`, showDialogClose: N, onOpenChange: P, children: W })),
        (n[63] = W),
        (n[64] = N),
        (n[65] = P),
        (n[66] = G))
      : (G = n[66]),
    G
  );
}
function Ye(e) {
  return (0, Q.jsx)(`strong`, { className: `font-semibold`, children: e });
}
function Xe(e) {
  return (0, Q.jsx)(`strong`, { className: `font-semibold text-default`, children: e });
}
var Ze, Qe, Q;
function $e() {
  return ($e = e(() => {
    ((Ze = N()), we(), (Qe = L()), w(), s(), A(), j(), S(), ve(), B(), (Q = F()));
  }))();
}
var et;
function tt() {
  return (tt = e(() => {
    (_(),
      fe(),
      P(),
      (et = y(r, (e) => ({
        enabled: e != null,
        queryKey: [`personal-migration-wallet`, e],
        queryFn:
          e == null
            ? void 0
            : ({ signal: t }) =>
                ce.safeGet(`/accounts/{account_id}/customer-balance`, {
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
function nt(e) {
  let t = (0, at.c)(83),
    {
      accountId: n,
      userId: a,
      personalAccountId: o,
      isBusinessOwner: s,
      onTransferActiveChange: l,
      onTransferStarted: d,
      settings: f,
    } = e,
    p = u(r),
    m = ee(),
    h = (0, $.useRef)(!1),
    g,
    _;
  (t[0] !== p || t[1] !== f
    ? ((g = () => {
        h.current ||
          f != null ||
          ((h.current = !0),
          U(p, H, {
            eventId: `team_account_transfer_modal`,
            type: _e.UPSELL_OR_MODAL_TYPE_BLOCKING_INITIAL_MODAL,
          }));
      }),
      (_ = [p, f]),
      (t[0] = p),
      (t[1] = f),
      (t[2] = g),
      (t[3] = _))
    : ((g = t[2]), (_ = t[3])),
    (0, $.useEffect)(g, _));
  let v = i(`/`),
    y = ue(),
    ne;
  t[4] !== f || t[5] !== y
    ? ((ne = () => f != null || le(y, `500944450`)), (t[4] = f), (t[5] = y), (t[6] = ne))
    : (ne = t[6]);
  let [b] = (0, $.useState)(ne),
    [x, S] = (0, $.useState)(`initial`),
    re = (0, $.useRef)(!1),
    [w, T] = (0, $.useState)(!1),
    [E, D] = (0, $.useState)(!1),
    [ie, O] = (0, $.useState)(null),
    { data: k, isPending: A, isError: j, refetch: M } = R(et, o),
    N;
  t[7] === k
    ? (N = t[8])
    : ((N = k?.balances?.usd ?? (k?.currency?.toLowerCase() === `usd` ? k.balance : 0)),
      (t[7] = k),
      (t[8] = N));
  let P = N,
    F = P === 0 ? k?.balance : P,
    L;
  if (t[9] !== F || t[10] !== m || t[11] !== P || t[12] !== k?.currency) {
    let e = P === 0 ? k?.currency?.toUpperCase() : `USD`;
    ((L =
      F != null && F < 0 && e != null
        ? pe({ intl: m, amount: -F / 10 ** he({ intl: m, currencyCode: e }), currencyCode: e })
        : null),
      (t[9] = F),
      (t[10] = m),
      (t[11] = P),
      (t[12] = k?.currency),
      (t[13] = L));
  } else L = t[13];
  let B = L,
    V;
  t[14] !== n || t[15] !== p || t[16] !== a
    ? ((V = function () {
        return p.get(me) === n && p.get(oe) === a;
      }),
      (t[14] = n),
      (t[15] = p),
      (t[16] = a),
      (t[17] = V))
    : (V = t[17]);
  let G = V,
    K;
  t[18] !== G || t[19] !== b || t[20] !== p || t[21] !== f || t[22] !== x
    ? ((K = function (e) {
        G() &&
          U(p, Ke, {
            action: e,
            uiVariant: b ? `redesigned` : `legacy`,
            entryPoint: f == null ? `onboarding` : `settings`,
            step: x === `transfer` ? `confirmation` : `choice`,
          });
      }),
      (t[18] = G),
      (t[19] = b),
      (t[20] = p),
      (t[21] = f),
      (t[22] = x),
      (t[23] = K))
    : (K = t[23]);
  let q = K,
    se;
  t[24] !== n || t[25] !== G || t[26] !== w || t[27] !== p || t[28] !== f || t[29] !== E
    ? ((se = async function () {
        if (!(w || E || !G())) {
          if (f != null) {
            f.onCancel();
            return;
          }
          (T(!0), O(null));
          try {
            await ae(p, n, De);
          } catch {
            O(
              (0, ot.jsx)(c, {
                id: `personalMigration.dismiss.error`,
                defaultMessage: `Couldn’t save your choice. Please try again.`,
                description: `Error in the optional migration dialog when saving dismissal or the choice to keep personal data separate fails; the dialog remains open for retry`,
              }),
            );
          }
          T(!1);
        }
      }),
      (t[24] = n),
      (t[25] = G),
      (t[26] = w),
      (t[27] = p),
      (t[28] = f),
      (t[29] = E),
      (t[30] = se))
    : (se = t[30]);
  let de = se,
    fe;
  t[31] !== n ||
  t[32] !== v ||
  t[33] !== m ||
  t[34] !== G ||
  t[35] !== l ||
  t[36] !== d ||
  t[37] !== w ||
  t[38] !== o ||
  t[39] !== p ||
  t[40] !== f ||
  t[41] !== y ||
  t[42] !== E ||
  t[43] !== a
    ? ((fe = async function () {
        if (w || o == null || !G()) return;
        (T(!0), O(null));
        let e = le(y, `279671486`),
          t = E;
        l(!0);
        let r = (0, ot.jsx)(c, {
          id: `personalMigration.transfer.error`,
          defaultMessage: `Couldn’t start the transfer. Please try again.`,
          description: `Error in the final personal-data transfer confirmation when the migration request fails; the user can retry or go back without dismissing onboarding`,
        });
        try {
          if (!t) {
            if (
              !(
                await ce.safePost(`/accounts/transfer`, {
                  additionalHeaders: { "ChatGPT-Account-ID": n },
                  requestBody: {
                    workspace_id: n,
                    migration_trigger: f == null ? `modal-optional` : `settings`,
                  },
                  expectedErrorStatuses: [401, 403, 404, 409, 503],
                })
              ).success
            ) {
              (l(!1), O(r), T(!1));
              return;
            }
            if (((t = !0), D(!0), !G())) {
              T(!1);
              return;
            }
            if (e) {
              let e = `${a}:${n}`;
              (ke(e), p.set(Ae, e));
            }
            if (f != null || e) {
              (f != null && !e && Ee(p, m),
                d(),
                f ?? ae(p, n, De).catch(it),
                z(`accounts-check`).then(() => {
                  if (G())
                    return Promise.all([
                      p.queryClient.invalidateQueries({ queryKey: [`accounts`] }),
                      p.queryClient.invalidateQueries({ queryKey: W }),
                    ]);
                }));
              return;
            }
            await ce
              .safePost(`/settings/announcement_viewed`, {
                additionalHeaders: { "ChatGPT-Account-ID": n },
                parameters: { query: { announcement_id: De } },
              })
              .catch(rt);
          }
          if (!G()) {
            T(!1);
            return;
          }
          let i = new URL(v, window.location.origin);
          (i.searchParams.set(`refresh_account`, `true`),
            i.searchParams.set(`account_switch`, `true`),
            i.searchParams.set(`_tm`, `account_transfer_started`),
            i.searchParams.set(`migration_workspace_id`, n),
            await Se(i.toString()));
        } catch (e) {
          let n = e;
          t
            ? O(
                (0, ot.jsx)(c, {
                  id: `personalMigration.refresh.error`,
                  defaultMessage: `Your migration has started, but the workspace couldn’t refresh. Try refreshing again.`,
                  description: `Error after the transfer was accepted but browser refresh failed. Retrying only refreshes the destination workspace; it does not start another migration.`,
                }),
              )
            : n instanceof C && [401, 403, 503].includes(n.status) && n.diagnosticError instanceof I
              ? O(n.diagnosticError.message)
              : O(r);
        }
        (t || l(!1), T(!1));
      }),
      (t[31] = n),
      (t[32] = v),
      (t[33] = m),
      (t[34] = G),
      (t[35] = l),
      (t[36] = d),
      (t[37] = w),
      (t[38] = o),
      (t[39] = p),
      (t[40] = f),
      (t[41] = y),
      (t[42] = E),
      (t[43] = a),
      (t[44] = fe))
    : (fe = t[44]);
  let ge = fe,
    ve = null;
  if (ie != null) {
    let e;
    (t[45] === ie
      ? (e = t[46])
      : ((e = (0, ot.jsx)(te, { type: `error`, variant: `callout`, role: `alert`, content: ie })),
        (t[45] = ie),
        (t[46] = e)),
      (ve = e));
  } else if (j && x === `transfer`) {
    let e, n;
    t[47] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, ot.jsx)(c, {
          id: `personalMigration.wallet.error`,
          defaultMessage: `Your Wallet balance couldn’t be loaded. Any remaining personal Wallet balance won’t transfer to this workspace.`,
          description: `Warning in transfer confirmation when the balance request fails. The amount is unknown, but remaining personal Wallet credit will not transfer.`,
        })),
        (n = (0, ot.jsx)(c, {
          id: `personalMigration.wallet.retry`,
          defaultMessage: `Retry`,
          description: `Retries loading the personal Wallet balance before confirming migration`,
        })),
        (t[47] = e),
        (t[48] = n))
      : ((e = t[47]), (n = t[48]));
    let r;
    (t[49] !== q || t[50] !== M
      ? ((r = (0, ot.jsx)(te, {
          type: `warning`,
          variant: `callout`,
          content: e,
          primaryCtaText: n,
          onPrimaryCtaClick: () => {
            (q(Z.CHATGPT_PERSONAL_MIGRATION_ACTION_WALLET_RETRY), M());
          },
        })),
        (t[49] = q),
        (t[50] = M),
        (t[51] = r))
      : (r = t[51]),
      (ve = r));
  }
  let ye = f != null || b ? Be : Je,
    be = f != null,
    xe = f?.linkStatus,
    Ce = !E && A,
    J,
    we;
  t[52] === q
    ? ((J = t[53]), (we = t[54]))
    : ((J = () => {
        (q(Z.CHATGPT_PERSONAL_MIGRATION_ACTION_CONTINUE_TRANSFER), O(null), S(`transfer`));
      }),
      (we = () => {
        (q(Z.CHATGPT_PERSONAL_MIGRATION_ACTION_BACK), O(null), S(`initial`));
      }),
      (t[52] = q),
      (t[53] = J),
      (t[54] = we));
  let Te;
  t[55] !== de || t[56] !== q || t[57] !== f
    ? ((Te = (e) => {
        if (f?.linkStatus != null) {
          f.onCancel();
          return;
        }
        (q(
          e === `start-fresh`
            ? Z.CHATGPT_PERSONAL_MIGRATION_ACTION_CONTINUE_KEEP_SEPARATE
            : e === `cancel`
              ? Z.CHATGPT_PERSONAL_MIGRATION_ACTION_CANCEL
              : Z.CHATGPT_PERSONAL_MIGRATION_ACTION_DISMISS,
        ),
          de());
      }),
      (t[55] = de),
      (t[56] = q),
      (t[57] = f),
      (t[58] = Te))
    : (Te = t[58]);
  let Oe;
  t[59] !== ge || t[60] !== q || t[61] !== E
    ? ((Oe = () => {
        re.current ||
          (q(
            E
              ? Z.CHATGPT_PERSONAL_MIGRATION_ACTION_REFRESH
              : Z.CHATGPT_PERSONAL_MIGRATION_ACTION_CONFIRM_TRANSFER,
          ),
          (re.current = !0),
          ge().finally(() => {
            re.current = !1;
          }));
      }),
      (t[59] = ge),
      (t[60] = q),
      (t[61] = E),
      (t[62] = Oe))
    : (Oe = t[62]);
  let je, Me;
  t[63] === q
    ? ((je = t[64]), (Me = t[65]))
    : ((je = (e) => {
        q(
          e === `transfer`
            ? Z.CHATGPT_PERSONAL_MIGRATION_ACTION_SELECT_TRANSFER
            : Z.CHATGPT_PERSONAL_MIGRATION_ACTION_SELECT_KEEP_SEPARATE,
        );
      }),
      (Me = () => {
        q(Z.CHATGPT_PERSONAL_MIGRATION_ACTION_LEARN_MORE_CLICKED);
      }),
      (t[63] = q),
      (t[64] = je),
      (t[65] = Me));
  let Y;
  return (
    t[66] !== ye ||
    t[67] !== ve ||
    t[68] !== B ||
    t[69] !== s ||
    t[70] !== w ||
    t[71] !== x ||
    t[72] !== be ||
    t[73] !== xe ||
    t[74] !== Ce ||
    t[75] !== J ||
    t[76] !== we ||
    t[77] !== Te ||
    t[78] !== Oe ||
    t[79] !== je ||
    t[80] !== Me ||
    t[81] !== E
      ? ((Y = (0, ot.jsx)(ye, {
          isBusinessOwner: s,
          fromSettings: be,
          linkStatus: xe,
          step: x,
          formattedPersonalWalletBalance: B,
          pending: w,
          loadingBalance: Ce,
          transferAccepted: E,
          error: ve,
          onTransfer: J,
          onBack: we,
          onClose: Te,
          onConfirm: Oe,
          onChoiceChange: je,
          onLearnMore: Me,
        })),
        (t[66] = ye),
        (t[67] = ve),
        (t[68] = B),
        (t[69] = s),
        (t[70] = w),
        (t[71] = x),
        (t[72] = be),
        (t[73] = xe),
        (t[74] = Ce),
        (t[75] = J),
        (t[76] = we),
        (t[77] = Te),
        (t[78] = Oe),
        (t[79] = je),
        (t[80] = Me),
        (t[81] = E),
        (t[82] = Y))
      : (Y = t[82]),
    Y
  );
}
function rt() {}
function it() {}
var at, $, ot;
function st() {
  return (st = e(() => {
    ((at = N()),
      be(),
      qe(),
      _(),
      ($ = L()),
      w(),
      b(),
      G(),
      xe(),
      ge(),
      fe(),
      V(),
      v(),
      s(),
      K(),
      P(),
      se(),
      Ce(),
      de(),
      M(),
      Te(),
      $e(),
      Ge(),
      tt(),
      Me(),
      je(),
      Oe(),
      (ot = F()));
  }))();
}
export { st as n, nt as t };
//# sourceMappingURL=migration-onboarding-171bd0d04eb5.js.map
