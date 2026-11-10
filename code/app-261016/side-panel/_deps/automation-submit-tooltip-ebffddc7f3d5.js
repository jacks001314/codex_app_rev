import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $4 as n,
  Ay as r,
  Cg as ee,
  Dx as i,
  Eg as a,
  Ex as o,
  F4 as s,
  FBt as c,
  I4 as l,
  LNt as u,
  My as d,
  Ny as f,
  PBt as p,
  QY as te,
  Tg as ne,
  Ty as m,
  UQ as re,
  WQ as ie,
  XOt as h,
  XY as ae,
  Y3 as g,
  YY as _,
  Z3 as v,
  ZY as y,
  ck as b,
  e3 as x,
  e6 as S,
  jy as C,
  okt as oe,
  rk as w,
  tk as se,
  tkt as T,
  wg as E,
  wy as ce,
} from "./app-shared-2feb3d4c6fcc.js";
import { $Pr as D, iFr as O } from "./app-initial-ad16eaadf81f.js";
import { Am as k, Mm as A, jm as le, km as ue } from "./app-primary-3e00728c2a4c.js";
function j(e) {
  let a = (0, de.c)(59),
    {
      deleteAction: o,
      editAction: c,
      isCompleted: l,
      isPaused: u,
      isStatusPending: f,
      openConversationAction: p,
      pauseAction: m,
      pauseResumeInMenu: re,
      resetAction: h,
      resumeAction: _,
      retrySaveAction: v,
      runNowAction: y,
      runNowIcon: b,
      trailingMenuItems: x,
      additionalMenuItems: S,
      statusFirst: C,
      menuProps: E,
      onMenuOpenChange: D,
    } = e,
    O = l !== void 0 && l,
    k = f !== void 0 && f,
    A = re !== void 0 && re,
    j = C !== void 0 && C,
    N = oe(),
    [me, P] = (0, fe.useState)(!1),
    F;
  a[0] === D
    ? (F = a[1])
    : ((F = () => {
        (P(!1), D?.(!1));
      }),
      (a[0] = D),
      (a[1] = F));
  let I = F,
    L;
  a[2] !== O || a[3] !== u || a[4] !== k || a[5] !== E?.size || a[6] !== m || a[7] !== A || a[8] !== _
    ? ((L =
        !O &&
        A &&
        (u
          ? (0, M.jsx)(w.Item, {
              "aria-busy": k || void 0,
              disabled: _.disabled,
              focusableWhenDisabled: k || _.disabledReason != null,
              tooltipText: _.disabledReason,
              leftIconAsset: E?.size === `action` ? ee : r,
              rightIcon: k ? (0, M.jsx)(t, { className: `icon-xs` }) : void 0,
              onSelect: (e) => {
                (e.preventDefault(), _.onSelect());
              },
              children: (0, M.jsx)(T, {
                id: `inbox.automations.resumeTooltip`,
                defaultMessage: `Resume`,
                description: `Tooltip label for resuming an automation`,
              }),
            })
          : (0, M.jsx)(w.Item, {
              "aria-busy": k || void 0,
              disabled: m.disabled,
              focusableWhenDisabled: k,
              leftIconAsset: E?.size === `action` ? ne : d,
              rightIcon: k ? (0, M.jsx)(t, { className: `icon-xs` }) : void 0,
              onSelect: (e) => {
                (e.preventDefault(), m.onSelect());
              },
              children: (0, M.jsx)(T, {
                id: `inbox.automations.pauseTooltip`,
                defaultMessage: `Pause`,
                description: `Tooltip label for pausing an automation`,
              }),
            }))),
      (a[2] = O),
      (a[3] = u),
      (a[4] = k),
      (a[5] = E?.size),
      (a[6] = m),
      (a[7] = A),
      (a[8] = _),
      (a[9] = L))
    : (L = a[9]);
  let R = L,
    z;
  a[10] === v
    ? (z = a[11])
    : ((z =
        v == null
          ? null
          : (0, M.jsx)(g, {
              color: `primary`,
              disabled: v.disabled,
              loading: v.disabled,
              size: `toolbar`,
              onClick: v.onSelect,
              children: (0, M.jsx)(T, {
                id: `settings.automations.saveRetry`,
                defaultMessage: `Retry save`,
                description: `Button label for retrying a failed automation save`,
              }),
            })),
      (a[10] = v),
      (a[11] = z));
  let B = u ? `paused` : `active`,
    V = E?.contentWidth ?? `xs`,
    H = y?.onSelectAsync == null ? void 0 : me,
    U;
  a[12] === D
    ? (U = a[13])
    : ((U = (e) => {
        (P(e), D?.(e));
      }),
      (a[12] = D),
      (a[13] = U));
  let W;
  a[14] === N
    ? (W = a[15])
    : ((W = N.formatMessage({
        id: `settings.automations.actionsAria`,
        defaultMessage: `Scheduled task actions`,
        description: `Accessible label for the scheduled task actions menu`,
      })),
      (a[14] = N),
      (a[15] = W));
  let G;
  a[16] === W ? (G = a[17]) : ((G = (0, M.jsx)(ce, { label: W })), (a[16] = W), (a[17] = G));
  let he = j ? R : null,
    K;
  a[18] === c
    ? (K = a[19])
    : ((K =
        c == null
          ? null
          : (0, M.jsx)(w.Item, {
              disabled: c.disabled,
              leftIconAsset: ie,
              onSelect: c.onSelect,
              children: (0, M.jsx)(T, {
                id: `settings.automations.edit`,
                defaultMessage: `Edit`,
                description: `Menu item for editing a scheduled task`,
              }),
            })),
      (a[18] = c),
      (a[19] = K));
  let q;
  a[20] !== I || a[21] !== y || a[22] !== b
    ? ((q =
        y == null
          ? null
          : (0, M.jsx)(w.Item, {
              "aria-busy": y.isPending || void 0,
              disabled: y.disabled,
              focusableWhenDisabled: y.isPending,
              leftIcon: b,
              leftIconAsset: i,
              rightIcon: y.isPending ? (0, M.jsx)(t, { className: `icon-xs` }) : void 0,
              tooltipText: y.tooltipText,
              onSelect: (e) => {
                y.onSelectAsync == null ? y.onSelect() : (e.preventDefault(), y.onSelectAsync().then(I, I));
              },
              children:
                y.label ??
                (0, M.jsx)(T, {
                  id: `settings.automations.runNow`,
                  defaultMessage: `Run now`,
                  description: `Button label for running an automation immediately`,
                }),
            })),
      (a[20] = I),
      (a[21] = y),
      (a[22] = b),
      (a[23] = q))
    : (q = a[23]);
  let J;
  a[24] === p
    ? (J = a[25])
    : ((J =
        p == null
          ? null
          : (0, M.jsx)(w.Item, {
              disabled: p.disabled,
              leftIconAsset: s,
              onSelect: p.onSelect,
              children: (0, M.jsx)(T, {
                id: `inbox.automations.cloud.openChat`,
                defaultMessage: `Open chat`,
                description: `Menu item for opening a cloud scheduled task chat`,
              }),
            })),
      (a[24] = p),
      (a[25] = J));
  let Y;
  a[26] === h
    ? (Y = a[27])
    : ((Y =
        h == null
          ? null
          : (0, M.jsx)(w.Item, {
              disabled: h.disabled,
              leftIconAsset: n,
              tooltipText: h.isUsingDefaults
                ? (0, M.jsx)(T, {
                    id: `settings.automations.resetToPluginDefaults.alreadyDefault`,
                    defaultMessage: `Already using plugin defaults`,
                    description: `Tooltip shown when a scheduled task already matches its plugin template defaults`,
                  })
                : void 0,
              onSelect: h.onSelect,
              children: (0, M.jsx)(T, {
                id: `settings.automations.resetToPluginDefaults`,
                defaultMessage: `Reset to plugin defaults`,
                description: `Menu item for resetting a scheduled task to its plugin template defaults`,
              }),
            })),
      (a[26] = h),
      (a[27] = Y));
  let ge = j ? null : R,
    X;
  a[28] !== o || a[29] !== E?.size
    ? ((X =
        o == null
          ? null
          : (0, M.jsx)(w.Item, {
              className: `!text-danger`,
              disabled: o.disabled,
              leftIconAsset: E?.size === `action` ? ae : te,
              onSelect: o.onSelect,
              children: (0, M.jsx)(T, {
                id: `settings.automations.delete`,
                defaultMessage: `Delete`,
                description: `Menu item for deleting a scheduled task`,
              }),
            })),
      (a[28] = o),
      (a[29] = E?.size),
      (a[30] = X))
    : (X = a[30]);
  let Z;
  a[31] !== S ||
  a[32] !== E ||
  a[33] !== H ||
  a[34] !== U ||
  a[35] !== G ||
  a[36] !== he ||
  a[37] !== K ||
  a[38] !== q ||
  a[39] !== J ||
  a[40] !== Y ||
  a[41] !== ge ||
  a[42] !== X ||
  a[43] !== B ||
  a[44] !== V ||
  a[45] !== x
    ? ((Z = (0, pe.createElement)(
        se,
        { ...E, key: B, align: `end`, contentWidth: V, open: H, onOpenChange: U, triggerButton: G },
        he,
        K,
        q,
        J,
        Y,
        ge,
        S,
        X,
        x,
      )),
      (a[31] = S),
      (a[32] = E),
      (a[33] = H),
      (a[34] = U),
      (a[35] = G),
      (a[36] = he),
      (a[37] = K),
      (a[38] = q),
      (a[39] = J),
      (a[40] = Y),
      (a[41] = ge),
      (a[42] = X),
      (a[43] = B),
      (a[44] = V),
      (a[45] = x),
      (a[46] = Z))
    : (Z = a[46]);
  let Q;
  a[47] !== N || a[48] !== O || a[49] !== u || a[50] !== k || a[51] !== m || a[52] !== A || a[53] !== _
    ? ((Q =
        !O &&
        !A &&
        (u
          ? (0, M.jsx)(g, {
              "aria-label": N.formatMessage({
                id: `settings.automations.resumeAria`,
                defaultMessage: `Resume scheduled task`,
                description: `Aria label for resuming a scheduled task`,
              }),
              color: `ghost`,
              disabled: _.disabled,
              loading: k,
              size: `toolbar`,
              uniform: !0,
              onClick: _.onSelect,
              children: (0, M.jsx)(ue, { className: `icon-sm` }),
            })
          : (0, M.jsx)(g, {
              "aria-label": N.formatMessage({
                id: `settings.automations.pauseAria`,
                defaultMessage: `Pause scheduled task`,
                description: `Aria label for pausing a scheduled task`,
              }),
              color: `ghost`,
              disabled: m.disabled,
              loading: k,
              size: `toolbar`,
              uniform: !0,
              onClick: m.onSelect,
              children: (0, M.jsx)(le, { className: `icon-sm` }),
            }))),
      (a[47] = N),
      (a[48] = O),
      (a[49] = u),
      (a[50] = k),
      (a[51] = m),
      (a[52] = A),
      (a[53] = _),
      (a[54] = Q))
    : (Q = a[54]);
  let $;
  return (
    a[55] !== Z || a[56] !== Q || a[57] !== z
      ? (($ = (0, M.jsxs)(`div`, { className: `flex items-center gap-2`, children: [z, Z, Q] })),
        (a[55] = Z),
        (a[56] = Q),
        (a[57] = z),
        (a[58] = $))
      : ($ = a[58]),
    $
  );
}
var de, fe, M, pe;
function N() {
  return (N = e(() => {
    ((de = p()),
      x(),
      l(),
      f(),
      a(),
      C(),
      E(),
      re(),
      o(),
      y(),
      _(),
      (fe = c()),
      h(),
      v(),
      b(),
      m(),
      S(),
      A(),
      k(),
      (M = u()),
      (pe = c()));
  }))();
}
function me(e) {
  let t = (0, I.c)(16),
    { allowNewThread: n, draft: r, executionLocation: ee } = e,
    i = n !== void 0 && n,
    a = ee === void 0 ? `local` : ee,
    o,
    s,
    c,
    l,
    u;
  if (t[0] !== i || t[1] !== r || t[2] !== a) {
    u = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let { missingRequirements: e } = D(r, a, { allowNewThread: i });
      if (e.length === 0) {
        u = null;
        break bb0;
      }
      ((c = `flex flex-col gap-1 text-start`),
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((l = (0, L.jsx)(T, {
              id: `settings.automations.saveTooltip.requirements`,
              defaultMessage: `To continue:`,
              description: `Heading for requirements that must be completed before submitting an automation`,
            })),
            (t[8] = l))
          : (l = t[8]),
        (o = `flex list-disc flex-col gap-1 ps-4`),
        (s = e.map(P)));
    }
    ((t[0] = i), (t[1] = r), (t[2] = a), (t[3] = o), (t[4] = s), (t[5] = c), (t[6] = l), (t[7] = u));
  } else ((o = t[3]), (s = t[4]), (c = t[5]), (l = t[6]), (u = t[7]));
  if (u !== Symbol.for(`react.early_return_sentinel`)) return u;
  let d;
  t[9] !== o || t[10] !== s
    ? ((d = (0, L.jsx)(`ul`, { className: o, children: s })), (t[9] = o), (t[10] = s), (t[11] = d))
    : (d = t[11]);
  let f;
  return (
    t[12] !== c || t[13] !== l || t[14] !== d
      ? ((f = (0, L.jsxs)(`div`, { className: c, children: [l, d] })),
        (t[12] = c),
        (t[13] = l),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function P(e) {
  return (0, L.jsx)(`li`, { children: (0, L.jsx)(F, { requirement: e }) }, e);
}
function F(e) {
  let t = (0, I.c)(8),
    { requirement: n } = e;
  switch (n) {
    case `slackChannel`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, L.jsx)(T, {
              id: `automations.configuration.chooseSlackChannel`,
              defaultMessage: `Select at least one Slack channel`,
              description: `Explains why Create is disabled until a Slack trigger has a channel selected`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `githubRepository`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, L.jsx)(T, {
              id: `automations.configuration.chooseGitHubRepository`,
              defaultMessage: `Select a GitHub repository`,
              description: `Explains why Create is disabled until a GitHub trigger has a valid repository selected`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `name`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, L.jsx)(T, {
              id: `settings.automations.saveTooltip.requirement.name`,
              defaultMessage: `Add a task name`,
              description: `Tooltip requirement shown when the automation title is missing`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `prompt`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, L.jsx)(T, {
              id: `settings.automations.saveTooltip.requirement.prompt`,
              defaultMessage: `Add instructions`,
              description: `Tooltip requirement shown when the automation prompt is missing`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `thread`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, L.jsx)(T, {
              id: `settings.automations.saveTooltip.requirement.thread`,
              defaultMessage: `Select a chat`,
              description: `Tooltip requirement shown when the heartbeat automation task selection is missing`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `executionEnvironment`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, L.jsx)(T, {
              id: `settings.automations.saveTooltip.requirement.executionEnvironment`,
              defaultMessage: `Choose where to run it`,
              description: `Tooltip requirement shown when the automation execution environment is missing`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `model`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, L.jsx)(T, {
              id: `settings.automations.saveTooltip.requirement.model`,
              defaultMessage: `Choose a model`,
              description: `Tooltip requirement shown when the automation model is missing`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `schedule`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, L.jsx)(T, {
              id: `settings.automations.saveTooltip.requirement.schedule`,
              defaultMessage: `Fix the schedule`,
              description: `Tooltip requirement shown when the automation schedule is invalid`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
  }
}
var I, L;
function R() {
  return (R = e(() => {
    ((I = p()), h(), O(), (L = u()));
  }))();
}
export { N as i, R as n, j as r, me as t };
//# sourceMappingURL=automation-submit-tooltip-ebffddc7f3d5.js.map
