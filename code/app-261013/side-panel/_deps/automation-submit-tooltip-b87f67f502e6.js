import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $v as n,
  AO as r,
  CO as i,
  F2 as a,
  Gh as o,
  HZ as s,
  I2 as c,
  IDt as l,
  Jh as u,
  Kh as d,
  QJ as f,
  Qb as p,
  Qv as m,
  TO as h,
  VDt as ee,
  VZ as te,
  XJ as ne,
  YJ as g,
  ZJ as _,
  Zb as v,
  ay as y,
  i3 as b,
  iy as re,
  jDt as x,
  n4 as S,
  oy as ie,
  qh as ae,
  r3 as oe,
  sy as C,
  t3 as w,
  t4 as se,
  vzt as T,
  xMt as E,
  yzt as D,
} from "./app-shared-bbfeca5e5737.js";
import { PAr as O, kAr as k } from "./app-initial-5851df3f6cb1.js";
import { _m as A, gm as ce, vm as le, ym as j } from "./app-primary-fe8a450b3b04.js";
function M(e) {
  let n = (0, ue.c)(59),
    {
      deleteAction: r,
      editAction: c,
      isCompleted: u,
      isPaused: d,
      isStatusPending: te,
      openConversationAction: g,
      pauseAction: _,
      pauseResumeInMenu: v,
      resetAction: y,
      resumeAction: b,
      retrySaveAction: x,
      runNowAction: S,
      runNowIcon: C,
      trailingMenuItems: w,
      additionalMenuItems: T,
      statusFirst: E,
      menuProps: D,
      onMenuOpenChange: O,
    } = e,
    k = u !== void 0 && u,
    A = te !== void 0 && te,
    j = v !== void 0 && v,
    M = E !== void 0 && E,
    P = ee(),
    [pe, F] = (0, de.useState)(!1),
    I;
  n[0] === O
    ? (I = n[1])
    : ((I = () => {
        (F(!1), O?.(!1));
      }),
      (n[0] = O),
      (n[1] = I));
  let L = I,
    R;
  n[2] !== k || n[3] !== d || n[4] !== A || n[5] !== D?.size || n[6] !== _ || n[7] !== j || n[8] !== b
    ? ((R =
        !k &&
        j &&
        (d
          ? (0, N.jsx)(h.Item, {
              "aria-busy": A || void 0,
              disabled: b.disabled,
              focusableWhenDisabled: A || b.disabledReason != null,
              tooltipText: b.disabledReason,
              leftIconAsset: D?.size === `action` ? o : re,
              rightIcon: A ? (0, N.jsx)(oe, { className: `icon-xs` }) : void 0,
              onSelect: (e) => {
                (e.preventDefault(), b.onSelect());
              },
              children: (0, N.jsx)(l, {
                id: `inbox.automations.resumeTooltip`,
                defaultMessage: `Resume`,
                description: `Tooltip label for resuming an automation`,
              }),
            })
          : (0, N.jsx)(h.Item, {
              "aria-busy": A || void 0,
              disabled: _.disabled,
              focusableWhenDisabled: A,
              leftIconAsset: D?.size === `action` ? ae : ie,
              rightIcon: A ? (0, N.jsx)(oe, { className: `icon-xs` }) : void 0,
              onSelect: (e) => {
                (e.preventDefault(), _.onSelect());
              },
              children: (0, N.jsx)(l, {
                id: `inbox.automations.pauseTooltip`,
                defaultMessage: `Pause`,
                description: `Tooltip label for pausing an automation`,
              }),
            }))),
      (n[2] = k),
      (n[3] = d),
      (n[4] = A),
      (n[5] = D?.size),
      (n[6] = _),
      (n[7] = j),
      (n[8] = b),
      (n[9] = R))
    : (R = n[9]);
  let z = R,
    B;
  n[10] === x
    ? (B = n[11])
    : ((B =
        x == null
          ? null
          : (0, N.jsx)(t, {
              color: `primary`,
              disabled: x.disabled,
              loading: x.disabled,
              size: `toolbar`,
              onClick: x.onSelect,
              children: (0, N.jsx)(l, {
                id: `settings.automations.saveRetry`,
                defaultMessage: `Retry save`,
                description: `Button label for retrying a failed automation save`,
              }),
            })),
      (n[10] = x),
      (n[11] = B));
  let V = d ? `paused` : `active`,
    H = D?.contentWidth ?? `xs`,
    me = S?.onSelectAsync == null ? void 0 : pe,
    U;
  n[12] === O
    ? (U = n[13])
    : ((U = (e) => {
        (F(e), O?.(e));
      }),
      (n[12] = O),
      (n[13] = U));
  let W;
  n[14] === P
    ? (W = n[15])
    : ((W = P.formatMessage({
        id: `settings.automations.actionsAria`,
        defaultMessage: `Scheduled task actions`,
        description: `Accessible label for the scheduled task actions menu`,
      })),
      (n[14] = P),
      (n[15] = W));
  let G;
  n[16] === W ? (G = n[17]) : ((G = (0, N.jsx)(m, { label: W })), (n[16] = W), (n[17] = G));
  let he = M ? z : null,
    K;
  n[18] === c
    ? (K = n[19])
    : ((K =
        c == null
          ? null
          : (0, N.jsx)(h.Item, {
              disabled: c.disabled,
              leftIconAsset: s,
              onSelect: c.onSelect,
              children: (0, N.jsx)(l, {
                id: `settings.automations.edit`,
                defaultMessage: `Edit`,
                description: `Menu item for editing a scheduled task`,
              }),
            })),
      (n[18] = c),
      (n[19] = K));
  let q;
  n[20] !== L || n[21] !== S || n[22] !== C
    ? ((q =
        S == null
          ? null
          : (0, N.jsx)(h.Item, {
              "aria-busy": S.isPending || void 0,
              disabled: S.disabled,
              focusableWhenDisabled: S.isPending,
              leftIcon: C,
              leftIconAsset: p,
              rightIcon: S.isPending ? (0, N.jsx)(oe, { className: `icon-xs` }) : void 0,
              tooltipText: S.tooltipText,
              onSelect: (e) => {
                S.onSelectAsync == null ? S.onSelect() : (e.preventDefault(), S.onSelectAsync().then(L, L));
              },
              children:
                S.label ??
                (0, N.jsx)(l, {
                  id: `settings.automations.runNow`,
                  defaultMessage: `Run now`,
                  description: `Button label for running an automation immediately`,
                }),
            })),
      (n[20] = L),
      (n[21] = S),
      (n[22] = C),
      (n[23] = q))
    : (q = n[23]);
  let J;
  n[24] === g
    ? (J = n[25])
    : ((J =
        g == null
          ? null
          : (0, N.jsx)(h.Item, {
              disabled: g.disabled,
              leftIconAsset: a,
              onSelect: g.onSelect,
              children: (0, N.jsx)(l, {
                id: `inbox.automations.cloud.openChat`,
                defaultMessage: `Open chat`,
                description: `Menu item for opening a cloud scheduled task chat`,
              }),
            })),
      (n[24] = g),
      (n[25] = J));
  let Y;
  n[26] === y
    ? (Y = n[27])
    : ((Y =
        y == null
          ? null
          : (0, N.jsx)(h.Item, {
              disabled: y.disabled,
              leftIconAsset: se,
              tooltipText: y.isUsingDefaults
                ? (0, N.jsx)(l, {
                    id: `settings.automations.resetToPluginDefaults.alreadyDefault`,
                    defaultMessage: `Already using plugin defaults`,
                    description: `Tooltip shown when a scheduled task already matches its plugin template defaults`,
                  })
                : void 0,
              onSelect: y.onSelect,
              children: (0, N.jsx)(l, {
                id: `settings.automations.resetToPluginDefaults`,
                defaultMessage: `Reset to plugin defaults`,
                description: `Menu item for resetting a scheduled task to its plugin template defaults`,
              }),
            })),
      (n[26] = y),
      (n[27] = Y));
  let ge = M ? null : z,
    X;
  n[28] !== r || n[29] !== D?.size
    ? ((X =
        r == null
          ? null
          : (0, N.jsx)(h.Item, {
              className: `!text-danger`,
              disabled: r.disabled,
              leftIconAsset: D?.size === `action` ? ne : f,
              onSelect: r.onSelect,
              children: (0, N.jsx)(l, {
                id: `settings.automations.delete`,
                defaultMessage: `Delete`,
                description: `Menu item for deleting a scheduled task`,
              }),
            })),
      (n[28] = r),
      (n[29] = D?.size),
      (n[30] = X))
    : (X = n[30]);
  let Z;
  n[31] !== T ||
  n[32] !== D ||
  n[33] !== me ||
  n[34] !== U ||
  n[35] !== G ||
  n[36] !== he ||
  n[37] !== K ||
  n[38] !== q ||
  n[39] !== J ||
  n[40] !== Y ||
  n[41] !== ge ||
  n[42] !== X ||
  n[43] !== V ||
  n[44] !== H ||
  n[45] !== w
    ? ((Z = (0, fe.createElement)(
        i,
        { ...D, key: V, align: `end`, contentWidth: H, open: me, onOpenChange: U, triggerButton: G },
        he,
        K,
        q,
        J,
        Y,
        ge,
        T,
        X,
        w,
      )),
      (n[31] = T),
      (n[32] = D),
      (n[33] = me),
      (n[34] = U),
      (n[35] = G),
      (n[36] = he),
      (n[37] = K),
      (n[38] = q),
      (n[39] = J),
      (n[40] = Y),
      (n[41] = ge),
      (n[42] = X),
      (n[43] = V),
      (n[44] = H),
      (n[45] = w),
      (n[46] = Z))
    : (Z = n[46]);
  let Q;
  n[47] !== P || n[48] !== k || n[49] !== d || n[50] !== A || n[51] !== _ || n[52] !== j || n[53] !== b
    ? ((Q =
        !k &&
        !j &&
        (d
          ? (0, N.jsx)(t, {
              "aria-label": P.formatMessage({
                id: `settings.automations.resumeAria`,
                defaultMessage: `Resume scheduled task`,
                description: `Aria label for resuming a scheduled task`,
              }),
              color: `ghost`,
              disabled: b.disabled,
              loading: A,
              size: `toolbar`,
              uniform: !0,
              onClick: b.onSelect,
              children: (0, N.jsx)(ce, { className: `icon-sm` }),
            })
          : (0, N.jsx)(t, {
              "aria-label": P.formatMessage({
                id: `settings.automations.pauseAria`,
                defaultMessage: `Pause scheduled task`,
                description: `Aria label for pausing a scheduled task`,
              }),
              color: `ghost`,
              disabled: _.disabled,
              loading: A,
              size: `toolbar`,
              uniform: !0,
              onClick: _.onSelect,
              children: (0, N.jsx)(le, { className: `icon-sm` }),
            }))),
      (n[47] = P),
      (n[48] = k),
      (n[49] = d),
      (n[50] = A),
      (n[51] = _),
      (n[52] = j),
      (n[53] = b),
      (n[54] = Q))
    : (Q = n[54]);
  let $;
  return (
    n[55] !== Z || n[56] !== Q || n[57] !== B
      ? (($ = (0, N.jsxs)(`div`, { className: `flex items-center gap-2`, children: [B, Z, Q] })),
        (n[55] = Z),
        (n[56] = Q),
        (n[57] = B),
        (n[58] = $))
      : ($ = n[58]),
    $
  );
}
var ue, de, N, fe;
function P() {
  return (P = e(() => {
    ((ue = T()),
      S(),
      c(),
      C(),
      u(),
      y(),
      d(),
      te(),
      v(),
      _(),
      g(),
      (de = D()),
      x(),
      w(),
      r(),
      n(),
      b(),
      j(),
      A(),
      (N = E()),
      (fe = D()));
  }))();
}
function pe(e) {
  let t = (0, L.c)(16),
    { allowNewThread: n, draft: r, executionLocation: i } = e,
    a = n !== void 0 && n,
    o = i === void 0 ? `local` : i,
    s,
    c,
    u,
    d,
    f;
  if (t[0] !== a || t[1] !== r || t[2] !== o) {
    f = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let { missingRequirements: e } = k(r, o, { allowNewThread: a });
      if (e.length === 0) {
        f = null;
        break bb0;
      }
      ((u = `flex flex-col gap-1 text-start`),
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((d = (0, R.jsx)(l, {
              id: `settings.automations.saveTooltip.requirements`,
              defaultMessage: `To continue:`,
              description: `Heading for requirements that must be completed before submitting an automation`,
            })),
            (t[8] = d))
          : (d = t[8]),
        (s = `flex list-disc flex-col gap-1 ps-4`),
        (c = e.map(F)));
    }
    ((t[0] = a), (t[1] = r), (t[2] = o), (t[3] = s), (t[4] = c), (t[5] = u), (t[6] = d), (t[7] = f));
  } else ((s = t[3]), (c = t[4]), (u = t[5]), (d = t[6]), (f = t[7]));
  if (f !== Symbol.for(`react.early_return_sentinel`)) return f;
  let p;
  t[9] !== s || t[10] !== c
    ? ((p = (0, R.jsx)(`ul`, { className: s, children: c })), (t[9] = s), (t[10] = c), (t[11] = p))
    : (p = t[11]);
  let m;
  return (
    t[12] !== u || t[13] !== d || t[14] !== p
      ? ((m = (0, R.jsxs)(`div`, { className: u, children: [d, p] })),
        (t[12] = u),
        (t[13] = d),
        (t[14] = p),
        (t[15] = m))
      : (m = t[15]),
    m
  );
}
function F(e) {
  return (0, R.jsx)(`li`, { children: (0, R.jsx)(I, { requirement: e }) }, e);
}
function I(e) {
  let t = (0, L.c)(8),
    { requirement: n } = e;
  switch (n) {
    case `slackChannel`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, R.jsx)(l, {
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
          ? ((e = (0, R.jsx)(l, {
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
          ? ((e = (0, R.jsx)(l, {
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
          ? ((e = (0, R.jsx)(l, {
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
          ? ((e = (0, R.jsx)(l, {
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
          ? ((e = (0, R.jsx)(l, {
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
          ? ((e = (0, R.jsx)(l, {
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
          ? ((e = (0, R.jsx)(l, {
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
var L, R;
function z() {
  return (z = e(() => {
    ((L = T()), x(), O(), (R = E()));
  }))();
}
export { P as i, z as n, M as r, pe as t };
//# sourceMappingURL=automation-submit-tooltip-b87f67f502e6.js.map
