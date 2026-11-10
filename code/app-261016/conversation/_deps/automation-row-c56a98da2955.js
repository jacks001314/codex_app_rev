import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  Ay as n,
  DS as r,
  Dx as i,
  ES as a,
  Ex as o,
  FBt as s,
  IK as c,
  LNt as l,
  MD as u,
  MNt as d,
  My as f,
  ND as p,
  NNt as m,
  Ny as h,
  PBt as g,
  QY as _,
  TY as v,
  Ty as y,
  XOt as b,
  Xk as x,
  Y3 as S,
  YOt as C,
  Yst as w,
  Z3 as T,
  ZSt as E,
  ZY as D,
  Zk as O,
  aK as ee,
  ck as k,
  e6 as A,
  jy as j,
  nB as M,
  nCt as te,
  okt as N,
  rB as P,
  rk as ne,
  tk as re,
  tkt as F,
  wy as ie,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  AA as ae,
  CNr as oe,
  DNr as I,
  FNr as L,
  GZ as se,
  INr as R,
  JK as ce,
  KBr as z,
  KPr as B,
  KZ as V,
  M6t as H,
  N0 as U,
  N6t as W,
  OX as G,
  P0 as K,
  YK as q,
  _p as J,
  b0 as le,
  gFr as ue,
  gp as de,
  iFr as fe,
  iut as pe,
  jA as me,
  kNr as he,
  kX as ge,
  tut as _e,
  x0 as ve,
  xFr as ye,
} from "./app-initial-ad16eaadf81f.js";
import { Am as be, Mm as xe, _f as Se, gf as Ce, jm as we, km as Te } from "./app-primary-3e00728c2a4c.js";
import { n as Ee, t as De } from "./bullet-separator-fdae8fc4d5e0.js";
import { n as Oe, t as ke } from "./document-search-135ac17ad477.js";
function Ae(e) {
  let n = (0, je.c)(31),
    {
      action: r,
      description: i,
      hostId: a,
      icon: o,
      iconClassName: s,
      isAddDisabled: c,
      isCreating: l,
      isSelected: u,
      name: f,
      scheduleLabel: p,
      onSelect: m,
    } = e,
    h = N(),
    g;
  n[0] !== r || n[1] !== h || n[2] !== f
    ? ((g =
        r === `add`
          ? h.formatMessage(
              {
                id: `inbox.automations.emptySuggestion.add`,
                defaultMessage: `Add {name} scheduled task`,
                description: `Accessible label for immediately adding a suggested scheduled task`,
              },
              { name: f },
            )
          : h.formatMessage(
              {
                id: `inbox.automations.pluginTemplate.setUp`,
                defaultMessage: `Set up {name} scheduled task`,
                description: `Accessible label for opening a plugin scheduled task template in the setup panel`,
              },
              { name: f },
            )),
      (n[0] = r),
      (n[1] = h),
      (n[2] = f),
      (n[3] = g))
    : (g = n[3]);
  let _ = g,
    v;
  n[4] === s ? (v = n[5]) : ((v = d(`relative inline-flex`, s)), (n[4] = s), (n[5] = v));
  let y;
  n[6] !== o || n[7] !== l
    ? ((y = l
        ? (0, Y.jsx)(t, { className: `icon-sm` })
        : (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsx)(`span`, {
                className: `icon-sm group-focus-within:opacity-0 group-focus-within/add:opacity-0 group-hover:opacity-0 group-hover/add:opacity-0 [&>svg]:size-full`,
                children: o,
              }),
              (0, Y.jsx)(U, {
                className: `icon-sm absolute inset-0 text-codex-description opacity-0 group-focus-within:opacity-100 group-focus-within/add:opacity-100 group-hover:opacity-100 group-hover/add:opacity-100`,
              }),
            ],
          })),
      (n[6] = o),
      (n[7] = l),
      (n[8] = y))
    : (y = n[8]);
  let b;
  n[9] !== v || n[10] !== y
    ? ((b = (0, Y.jsx)(`span`, { className: v, children: y })), (n[9] = v), (n[10] = y), (n[11] = b))
    : (b = n[11]);
  let x;
  n[12] !== _ || n[13] !== c || n[14] !== m || n[15] !== b
    ? ((x = (0, Y.jsx)(`span`, {
        className: `pointer-events-auto inline-flex`,
        children: (0, Y.jsx)(S, {
          "aria-label": _,
          className: `group/add`,
          color: `ghostTertiary`,
          disabled: c,
          size: `iconMd`,
          uniform: !0,
          onClick: m,
          children: b,
        }),
      })),
      (n[12] = _),
      (n[13] = c),
      (n[14] = m),
      (n[15] = b),
      (n[16] = x))
    : (x = n[16]);
  let C;
  n[17] !== _ || n[18] !== x
    ? ((C = (0, Y.jsx)(M, { tooltipContent: _, children: x })), (n[17] = _), (n[18] = x), (n[19] = C))
    : (C = n[19]);
  let w;
  n[20] !== i || n[21] !== a
    ? ((w = (0, Y.jsx)(Ce, {
        className: `line-clamp-1`,
        cwd: null,
        hostId: a,
        pluginMentionPresentation: `text`,
        text: i,
        variant: `compact`,
      })),
      (n[20] = i),
      (n[21] = a),
      (n[22] = w))
    : (w = n[22]);
  let T;
  return (
    n[23] !== c || n[24] !== u || n[25] !== f || n[26] !== m || n[27] !== p || n[28] !== C || n[29] !== w
      ? ((T = (0, Y.jsx)(_e, {
          ariaLabel: f,
          className: `@container`,
          compactSecondLine: !0,
          hasInteractiveContent: !0,
          icon: C,
          isDisabled: c,
          isSelected: u,
          secondaryTitle: p,
          secondLine: w,
          title: f,
          onSelect: m,
        })),
        (n[23] = c),
        (n[24] = u),
        (n[25] = f),
        (n[26] = m),
        (n[27] = p),
        (n[28] = C),
        (n[29] = w),
        (n[30] = T))
      : (T = n[30]),
    T
  );
}
var je, Y;
function Me() {
  return (Me = e(() => {
    ((je = g()), m(), b(), T(), pe(), A(), P(), Se(), K(), (Y = l()));
  }))();
}
function Ne() {
  let e = (0, Re.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsx)(de, {
          className: `min-h-56 text-tertiary`,
          children: (0, X.jsx)(F, {
            id: `inbox.automations.search.emptyTitle`,
            defaultMessage: `No scheduled tasks found`,
            description: `Empty state title when no scheduled tasks match a search`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Pe(e) {
  let t = (0, Re.c)(32),
    {
      automations: n,
      canAdd: r,
      creatingAutomationId: i,
      dividerVariant: a,
      emptyState: o,
      pluginIconsById: s,
      pluginTemplateGroups: c,
      searchQuery: l,
      selectedPluginTemplateId: f,
      showDivider: p,
      onAdd: m,
      onSelectPluginTemplate: h,
    } = e,
    g = a === void 0 ? `line` : a,
    _ = N(),
    v,
    y;
  if (t[0] !== n || t[1] !== _ || t[2] !== s || t[3] !== c || t[4] !== l) {
    let e = l.trim().toLocaleLowerCase(),
      r;
    t[7] === n
      ? (r = t[8])
      : ((r = (e) => !n.some((t) => t.kind === `cron` && t.name === e.name && t.prompt === e.prompt)),
        (t[7] = n),
        (t[8] = r));
    let i;
    (t[9] === _
      ? (i = t[10])
      : ((i = (e) => {
          let t = ue(e.scheduleConfig, _) ?? ``;
          return { suggestion: e, scheduleLabel: t, searchTerms: [e.name, e.description, e.prompt, t] };
        }),
        (t[9] = _),
        (t[10] = i)),
      (y = Le(_)
        .filter(r)
        .map(i)
        .filter((t) => Ie(t.searchTerms, e))));
    let a;
    (t[11] !== _ || t[12] !== s
      ? ((a = (e) =>
          e.templates.map((t) => {
            let n = B({ pluginId: e.plugin.id, template: t }),
              r = ue(n.scheduleConfig, _) ?? ``,
              i = s.get(e.plugin.id);
            return {
              suggestion: {
                ...n,
                id: n.pluginTemplateId,
                description: t.prompt,
                icon: (0, X.jsx)(H, {
                  alt: ``,
                  className: `icon-sm`,
                  fallback: (0, X.jsx)(u, { className: `icon-sm text-secondary` }),
                  knownAppId: e.plugin.name,
                  logoDarkUrl: i?.logoDarkUrl,
                  logoUrl: i?.logoUrl,
                }),
                iconClassName: ``,
              },
              scheduleLabel: r,
              searchTerms: [e.plugin.displayName, e.plugin.name, t.name, t.prompt, r],
            };
          })),
        (t[11] = _),
        (t[12] = s),
        (t[13] = a))
      : (a = t[13]),
      (v = (c ?? []).flatMap(a).filter((t) => Ie(t.searchTerms, e))),
      (t[0] = n),
      (t[1] = _),
      (t[2] = s),
      (t[3] = c),
      (t[4] = l),
      (t[5] = v),
      (t[6] = y));
  } else ((v = t[5]), (y = t[6]));
  let b = v;
  if (y.length === 0 && b.length === 0) {
    let e;
    return (
      t[14] === o
        ? (e = t[15])
        : ((e = o == null ? null : (0, X.jsx)(X.Fragment, { children: o })), (t[14] = o), (t[15] = e)),
      e
    );
  }
  let x = p && `mt-3 pt-3`,
    S = p && g === `line` && `border-t border-default`,
    C;
  t[16] !== x || t[17] !== S ? ((C = d(x, S)), (t[16] = x), (t[17] = S), (t[18] = C)) : (C = t[18]);
  let w;
  t[19] !== r || t[20] !== i || t[21] !== m || t[22] !== y
    ? ((w =
        y.length > 0
          ? (0, X.jsx)(Fe, {
              action: `add`,
              canAdd: r,
              creatingAutomationId: i,
              selectedSuggestionId: null,
              suggestions: y,
              title: (0, X.jsx)(F, {
                id: `inbox.automations.suggestions`,
                defaultMessage: `Suggestions`,
                description: `Heading above suggested scheduled task templates`,
              }),
              onSelect: m,
            })
          : null),
      (t[19] = r),
      (t[20] = i),
      (t[21] = m),
      (t[22] = y),
      (t[23] = w))
    : (w = t[23]);
  let T;
  t[24] !== h || t[25] !== f || t[26] !== b
    ? ((T =
        b.length > 0
          ? (0, X.jsx)(Fe, {
              action: `set-up`,
              canAdd: !0,
              creatingAutomationId: null,
              selectedSuggestionId: f,
              suggestions: b,
              title: (0, X.jsx)(F, {
                id: `inbox.automations.fromPlugins`,
                defaultMessage: `From Plugins`,
                description: `Heading above scheduled task templates provided by plugins`,
              }),
              onSelect: h,
            })
          : null),
      (t[24] = h),
      (t[25] = f),
      (t[26] = b),
      (t[27] = T))
    : (T = t[27]);
  let E;
  return (
    t[28] !== C || t[29] !== w || t[30] !== T
      ? ((E = (0, X.jsxs)(`div`, { className: C, children: [w, T] })),
        (t[28] = C),
        (t[29] = w),
        (t[30] = T),
        (t[31] = E))
      : (E = t[31]),
    E
  );
}
function Fe(e) {
  let t = (0, Re.c)(20),
    {
      action: n,
      canAdd: r,
      creatingAutomationId: i,
      selectedSuggestionId: a,
      suggestions: o,
      title: s,
      onSelect: c,
    } = e,
    l;
  t[0] === s
    ? (l = t[1])
    : ((l = (0, X.jsx)(`h2`, { className: `px-2 pb-2 text-lg leading-6 text-secondary`, children: s })),
      (t[0] = s),
      (t[1] = l));
  let u;
  if (t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== c || t[6] !== a || t[7] !== o) {
    let e;
    (t[9] !== n || t[10] !== r || t[11] !== i || t[12] !== c || t[13] !== a
      ? ((e = (e) => {
          let { suggestion: t, scheduleLabel: o } = e;
          return (0, X.jsx)(
            `div`,
            {
              role: `listitem`,
              children: (0, X.jsx)(Ae, {
                action: n,
                description: t.description,
                hostId: w,
                icon: t.icon,
                iconClassName: t.iconClassName,
                isAddDisabled: !r || i != null,
                isCreating: i === t.id,
                isSelected: a === t.id,
                name: t.name,
                scheduleLabel: o,
                onSelect: () => {
                  c(t);
                },
              }),
            },
            t.id,
          );
        }),
        (t[9] = n),
        (t[10] = r),
        (t[11] = i),
        (t[12] = c),
        (t[13] = a),
        (t[14] = e))
      : (e = t[14]),
      (u = o.map(e)),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = c),
      (t[6] = a),
      (t[7] = o),
      (t[8] = u));
  } else u = t[8];
  let d;
  t[15] === u
    ? (d = t[16])
    : ((d = (0, X.jsx)(`div`, { className: `flex flex-col gap-1`, role: `list`, children: u })),
      (t[15] = u),
      (t[16] = d));
  let f;
  return (
    t[17] !== l || t[18] !== d
      ? ((f = (0, X.jsxs)(`section`, { className: `pt-3 first:pt-0`, children: [l, d] })),
        (t[17] = l),
        (t[18] = d),
        (t[19] = f))
      : (f = t[19]),
    f
  );
}
function Ie(e, t) {
  return e.some((e) => e.toLocaleLowerCase().includes(t));
}
function Le(e) {
  return [
    {
      id: `daily-brief`,
      icon: (0, X.jsx)(G, {}),
      iconClassName: `text-chart-blue`,
      name: e.formatMessage({
        id: `inbox.automations.emptySuggestion.dailyBrief`,
        defaultMessage: `Daily brief`,
        description: `Suggested automation button label`,
      }),
      description: e.formatMessage({
        id: `inbox.automations.emptySuggestion.dailyBrief.description`,
        defaultMessage: `Start each weekday with a summary of your calendar, unread email, and priorities`,
        description: `Description of the daily brief automation example`,
      }),
      prompt: e.formatMessage({
        id: `inbox.automations.emptySuggestion.dailyBrief.taskPrompt`,
        defaultMessage: `Give me a morning brief with what's on my calendar, important unread emails, and anything that needs my attention today.`,
        description: `Task prompt for the daily brief automation example`,
      }),
      scheduleConfig: {
        mode: `weekdays`,
        intervalHours: 24,
        intervalMinutes: null,
        weekdays: [`MO`, `TU`, `WE`, `TH`, `FR`],
        time: `08:00`,
        customRrule: ``,
      },
    },
    {
      id: `weekly-review`,
      icon: (0, X.jsx)(x, {}),
      iconClassName: `text-chart-purple`,
      name: e.formatMessage({
        id: `inbox.automations.emptySuggestion.weeklyReview`,
        defaultMessage: `Weekly review`,
        description: `Suggested automation button label`,
      }),
      description: e.formatMessage({
        id: `inbox.automations.emptySuggestion.weeklyReview.description`,
        defaultMessage: `Turn your recent work into a concise status update every Friday`,
        description: `Description of the weekly review automation example`,
      }),
      prompt: e.formatMessage({
        id: `inbox.automations.emptySuggestion.weeklyReview.taskPrompt`,
        defaultMessage: `Review what I worked on this week and draft a short status update.`,
        description: `Task prompt for the weekly review automation example`,
      }),
      scheduleConfig: {
        mode: `weekly`,
        intervalHours: 24,
        intervalMinutes: null,
        weekdays: [`FR`],
        time: `16:00`,
        customRrule: ``,
      },
    },
    {
      id: `follow-up-monitor`,
      icon: (0, X.jsx)(ke, {}),
      iconClassName: `text-chart-green`,
      name: e.formatMessage({
        id: `inbox.automations.emptySuggestion.followUpMonitor`,
        defaultMessage: `Follow-up monitor`,
        description: `Suggested automation button label`,
      }),
      description: e.formatMessage({
        id: `inbox.automations.emptySuggestion.followUpMonitor.description`,
        defaultMessage: `Review recent email and calendar activity and flag anything that needs your attention`,
        description: `Description of the follow-up monitor automation example`,
      }),
      prompt: e.formatMessage({
        id: `inbox.automations.emptySuggestion.followUpMonitor.taskPrompt`,
        defaultMessage: `Review recent email and calendar activity, highlight meaningful changes, and flag anything that needs my attention.`,
        description: `Task prompt for the follow-up monitor automation example`,
      }),
      scheduleConfig: {
        mode: `weekdays`,
        intervalHours: 24,
        intervalMinutes: null,
        weekdays: [`MO`, `TU`, `WE`, `TH`, `FR`],
        time: `09:00`,
        customRrule: ``,
      },
    },
  ];
}
var Re, X;
function ze() {
  return (ze = e(() => {
    ((Re = g()), m(), b(), ye(), fe(), W(), J(), p(), ge(), Oe(), O(), z(), Me(), (X = l()));
  }))();
}
function Be(e) {
  let t = (0, He.c)(39),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]), (c = t[7]), (l = t[8]))
    : (({
        className: n,
        icon: r,
        rightText: i,
        scheduleLabel: o,
        secondLine: s,
        title: c,
        titleAdornment: l,
        ...a
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l));
  let u;
  t[9] === n ? (u = t[10]) : ((u = d(`select-none`, n)), (t[9] = n), (t[10] = u));
  let f;
  t[11] === r
    ? (f = t[12])
    : ((f = (0, Z.jsx)(`span`, {
        className: `flex size-7 shrink-0 items-center justify-center`,
        children: r,
      })),
      (t[11] = r),
      (t[12] = f));
  let p;
  t[13] === c
    ? (p = t[14])
    : ((p = (0, Z.jsx)(`span`, { className: `truncate text-default`, children: c })),
      (t[13] = c),
      (t[14] = p));
  let m;
  t[15] === l
    ? (m = t[16])
    : ((m =
        l == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: `min-w-0 truncate text-sm text-codex-description`,
              children: l,
            })),
      (t[15] = l),
      (t[16] = m));
  let h;
  t[17] !== p || t[18] !== m
    ? ((h = (0, Z.jsxs)(`span`, {
        className: `flex min-w-0 flex-1 items-baseline gap-1.5`,
        children: [p, m],
      })),
      (t[17] = p),
      (t[18] = m),
      (t[19] = h))
    : (h = t[19]);
  let g;
  t[20] === o
    ? (g = t[21])
    : ((g = (0, Z.jsx)(`span`, {
        className: `truncate text-sm text-codex-description @sm:max-w-1/2 @sm:shrink-0 @sm:text-end`,
        children: o,
      })),
      (t[20] = o),
      (t[21] = g));
  let _;
  t[22] !== h || t[23] !== g
    ? ((_ = (0, Z.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-x-4 @sm:flex-row @sm:items-center`,
        children: [h, g],
      })),
      (t[22] = h),
      (t[23] = g),
      (t[24] = _))
    : (_ = t[24]);
  let v;
  t[25] === i
    ? (v = t[26])
    : ((v =
        i == null
          ? null
          : (0, Z.jsx)(`span`, { className: `flex min-h-7 shrink-0 items-center`, children: i })),
      (t[25] = i),
      (t[26] = v));
  let y;
  t[27] !== f || t[28] !== _ || t[29] !== v
    ? ((y = (0, Z.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-3 leading-6`,
        children: [f, _, v],
      })),
      (t[27] = f),
      (t[28] = _),
      (t[29] = v),
      (t[30] = y))
    : (y = t[30]);
  let b;
  t[31] === s
    ? (b = t[32])
    : ((b = (0, Z.jsx)(`span`, { className: `sr-only`, children: s })), (t[31] = s), (t[32] = b));
  let x;
  return (
    t[33] !== a || t[34] !== u || t[35] !== b || t[36] !== y || t[37] !== c
      ? ((x = (0, Z.jsxs)(_e, { className: u, ...a, title: c, children: [y, b] })),
        (t[33] = a),
        (t[34] = u),
        (t[35] = b),
        (t[36] = y),
        (t[37] = c),
        (t[38] = x))
      : (x = t[38]),
    x
  );
}
function Ve(e) {
  let t = (0, He.c)(18),
    { disabled: n, disabledReason: r, isPaused: i, loading: a, onToggle: o } = e,
    s = N(),
    l;
  t[0] === i ? (l = t[1]) : ((l = i ? (0, Z.jsx)(ee, {}) : (0, Z.jsx)(c, {})), (t[0] = i), (t[1] = l));
  let u = l;
  if (o == null) return u;
  let d;
  t[2] !== s || t[3] !== i
    ? ((d = i
        ? s.formatMessage({
            id: `inbox.automations.resumeTooltip`,
            defaultMessage: `Resume`,
            description: `Tooltip label for resuming an automation`,
          })
        : s.formatMessage({
            id: `inbox.automations.pauseTooltip`,
            defaultMessage: `Pause`,
            description: `Tooltip label for pausing an automation`,
          })),
      (t[2] = s),
      (t[3] = i),
      (t[4] = d))
    : (d = t[4]);
  let f = d,
    p = r ?? (i ? L.paused : L.active),
    m;
  t[5] === p ? (m = t[6]) : ((m = (0, Z.jsx)(F, { ...p })), (t[5] = p), (t[6] = m));
  let h = a || void 0,
    g = r != null || void 0,
    _ = r == null ? o : void 0,
    v = a ? null : u,
    y;
  t[7] !== n || t[8] !== f || t[9] !== a || t[10] !== h || t[11] !== g || t[12] !== _ || t[13] !== v
    ? ((y = (0, Z.jsx)(S, {
        className: `pointer-events-auto`,
        "aria-busy": h,
        "aria-disabled": g,
        "aria-label": f,
        color: `ghostActive`,
        disabled: n,
        loading: a,
        size: `composer`,
        uniform: !0,
        onClick: _,
        children: v,
      })),
      (t[7] = n),
      (t[8] = f),
      (t[9] = a),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y))
    : (y = t[14]);
  let b;
  return (
    t[15] !== m || t[16] !== y
      ? ((b = (0, Z.jsx)(M, { tooltipContent: m, children: y })), (t[15] = m), (t[16] = y), (t[17] = b))
      : (b = t[17]),
    b
  );
}
var He, Z;
function Ue() {
  return (Ue = e(() => {
    ((He = g()), m(), b(), R(), T(), v(), pe(), P(), (Z = l()));
  }))();
}
function We(e) {
  let r = (0, Ke.c)(85),
    {
      cloudAutomationId: o,
      displayName: s,
      managementActions: c,
      nextRunAt: l,
      scheduleLabel: u,
      secondLineAdornment: p,
      titleAdornment: m,
      hasUnreadRuns: h,
      inline: g,
      isCompleted: v,
      isInProgress: y,
      isPaused: b,
      isSelected: x,
      onSelect: S,
    } = e,
    C = g !== void 0 && g,
    w = v !== void 0 && v,
    T = N(),
    E = te(he, o),
    D = (0, qe.useId)(),
    O = te(oe, c?.resumeDeadlineMs ?? null) ? L.expiredResume : void 0,
    ee = C ? Be : _e,
    k = !w && !!u,
    A = w || y || (b && c == null) || (!b && l != null),
    j;
  if (y) {
    let e;
    (r[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(t, { className: `icon-sm shrink-0 text-codex-description` })), (r[0] = e))
      : (e = r[0]),
      (j = e));
  } else if (w) {
    let e;
    (r[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(a, { "aria-hidden": !0, className: `icon-sm shrink-0 text-codex-description` })),
        (r[1] = e))
      : (e = r[1]),
      (j = e));
  } else if (C) {
    let e = c?.isActionPending,
      t = b ? O : void 0,
      n = b ? c?.onResume : c?.onPause,
      i;
    (r[2] !== b || r[3] !== E || r[4] !== e || r[5] !== t || r[6] !== n
      ? ((i = (0, Q.jsx)(Ve, { disabled: e, disabledReason: t, isPaused: b, loading: E, onToggle: n })),
        (r[2] = b),
        (r[3] = E),
        (r[4] = e),
        (r[5] = t),
        (r[6] = n),
        (r[7] = i))
      : (i = r[7]),
      (j = i));
  } else if (b && c != null) {
    let e;
    r[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(Te, { className: `icon-sm` })), (r[8] = e))
      : (e = r[8]);
    let t;
    (r[9] !== E || r[10] !== c.isActionPending || r[11] !== c.onResume || r[12] !== O
      ? ((t = (0, Q.jsx)(`span`, {
          className: `pointer-events-auto inline-flex`,
          children: (0, Q.jsx)(Ge, {
            disabled: c.isActionPending,
            disabledReason: O,
            label: $.resume,
            loading: E,
            onClick: c.onResume,
            tooltipLabel: L.paused,
            children: e,
          }),
        })),
        (r[9] = E),
        (r[10] = c.isActionPending),
        (r[11] = c.onResume),
        (r[12] = O),
        (r[13] = t))
      : (t = r[13]),
      (j = t));
  } else if (b) {
    let e;
    (r[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(we, { className: `icon-sm shrink-0 text-codex-description` })), (r[14] = e))
      : (e = r[14]),
      (j = e));
  } else if (c != null) {
    let e;
    r[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsxs)(`span`, {
          className: `relative inline-flex`,
          children: [
            (0, Q.jsx)(ce, {
              className: `icon-sm group-focus-within/status-toggle:opacity-0 group-hover/status-toggle:opacity-0`,
            }),
            (0, Q.jsx)(we, {
              className: `icon-sm absolute inset-0 opacity-0 group-focus-within/status-toggle:opacity-100 group-hover/status-toggle:opacity-100`,
            }),
          ],
        })),
        (r[15] = e))
      : (e = r[15]);
    let t;
    (r[16] !== E || r[17] !== c.isActionPending || r[18] !== c.onPause
      ? ((t = (0, Q.jsx)(`span`, {
          className: `group/status-toggle pointer-events-auto inline-flex`,
          children: (0, Q.jsx)(Ge, {
            disabled: c.isActionPending,
            label: $.pause,
            loading: E,
            onClick: c.onPause,
            tooltipLabel: L.active,
            children: e,
          }),
        })),
        (r[16] = E),
        (r[17] = c.isActionPending),
        (r[18] = c.onPause),
        (r[19] = t))
      : (t = r[19]),
      (j = t));
  } else {
    let e;
    (r[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(ce, { className: `icon-sm shrink-0 text-codex-description` })), (r[20] = e))
      : (e = r[20]),
      (j = e));
  }
  let M = u;
  if (w) {
    let e;
    (r[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(F, { ...L.completed })), (r[21] = e))
      : (e = r[21]),
      (M = e));
  } else if (C && b) {
    let e;
    r[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(F, { ...L.paused })), (r[22] = e))
      : (e = r[22]);
    let t;
    r[23] !== k || r[24] !== u
      ? ((t = k
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [(0, Q.jsx)(De, { className: `mx-1` }), (0, Q.jsx)(`span`, { children: u })],
            })
          : null),
        (r[23] = k),
        (r[24] = u),
        (r[25] = t))
      : (t = r[25]);
    let n;
    (r[26] === t
      ? (n = r[27])
      : ((n = (0, Q.jsxs)(Q.Fragment, { children: [e, t] })), (r[26] = t), (r[27] = n)),
      (M = n));
  }
  let P = (b || w) && !x && (C ? `text-tertiary` : `opacity-60 hover:opacity-100 focus-within:opacity-100`),
    I;
  r[28] === P ? (I = r[29]) : ((I = d(`@container`, P)), (r[28] = P), (r[29] = I));
  let R;
  r[30] !== h || r[31] !== C || r[32] !== T || r[33] !== w || r[34] !== b || r[35] !== c || r[36] !== O
    ? ((R =
        h || c != null
          ? (0, Q.jsxs)(`span`, {
              className: d(`relative inline-flex items-center justify-end`, C ? `w-7` : `min-w-16`),
              children: [
                h
                  ? (0, Q.jsx)(`span`, {
                      className: `flex group-focus-within:opacity-0 group-hover:opacity-0 group-has-[[data-state=open]]:opacity-0`,
                      children: (0, Q.jsx)(se, { statusState: { type: `idle`, unread: !0 } }),
                    })
                  : null,
                c == null
                  ? null
                  : (0, Q.jsx)(`span`, {
                      className: `pointer-events-none absolute right-0 inline-flex items-center justify-end opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 has-[[data-state=open]]:pointer-events-auto has-[[data-state=open]]:opacity-100`,
                      children: (0, Q.jsxs)(re, {
                        align: `end`,
                        contentWidth: `xs`,
                        triggerButton: (0, Q.jsx)(ie, { label: T.formatMessage($.moreActions) }),
                        children: [
                          c.onRun == null
                            ? null
                            : (0, Q.jsx)(ne.Item, {
                                disabled: c.isActionPending || c.isRunNowPending,
                                leftIconAsset: i,
                                onSelect: c.onRun,
                                children: (0, Q.jsx)(F, { ...$.runNow }),
                              }),
                          w
                            ? null
                            : (0, Q.jsx)(ne.Item, {
                                disabled: c.isActionPending || (b && O != null),
                                focusableWhenDisabled: b && O != null,
                                tooltipText: b && O != null ? (0, Q.jsx)(F, { ...O }) : void 0,
                                leftIconAsset: b ? n : f,
                                onSelect: () => {
                                  b ? c.onResume() : c.onPause();
                                },
                                children: (0, Q.jsx)(F, { ...(b ? $.resume : $.pause) }),
                              }),
                          c.onDelete == null
                            ? null
                            : (0, Q.jsx)(ne.Item, {
                                className: `!text-danger`,
                                disabled: c.isActionPending,
                                leftIconAsset: _,
                                onSelect: c.onDelete,
                                children: (0, Q.jsx)(F, { ...$.delete }),
                              }),
                        ],
                      }),
                    }),
              ],
            })
          : void 0),
      (r[30] = h),
      (r[31] = C),
      (r[32] = T),
      (r[33] = w),
      (r[34] = b),
      (r[35] = c),
      (r[36] = O),
      (r[37] = R))
    : (R = r[37]);
  let z;
  r[38] !== k || r[39] !== u
    ? ((z = k ? (0, Q.jsx)(`span`, { className: `min-w-0 truncate`, children: u }) : null),
      (r[38] = k),
      (r[39] = u),
      (r[40] = z))
    : (z = r[40]);
  let B;
  r[41] !== k || r[42] !== A
    ? ((B = A && k ? (0, Q.jsx)(De, {}) : null), (r[41] = k), (r[42] = A), (r[43] = B))
    : (B = r[43]);
  let V;
  r[44] === w ? (V = r[45]) : ((V = w ? (0, Q.jsx)(F, { ...L.completed }) : null), (r[44] = w), (r[45] = V));
  let H;
  r[46] === y
    ? (H = r[47])
    : ((H = y
        ? (0, Q.jsx)(ae, {
            className: `text-codex-description`,
            message: (0, Q.jsx)(F, {
              id: `inbox.automations.inProgress`,
              defaultMessage: `In progress`,
              description: `Label for an automation that is currently running`,
            }),
          })
        : null),
      (r[46] = y),
      (r[47] = H));
  let U;
  r[48] !== y || r[49] !== b || r[50] !== l
    ? ((U =
        !y && !b && l != null
          ? (0, Q.jsxs)(`span`, {
              className: `inline-flex shrink-0 gap-1`,
              children: [
                (0, Q.jsx)(F, {
                  id: `inbox.automations.nextRunRelative`,
                  defaultMessage: `Next run`,
                  description: `Label before the relative time until the next scheduled task run`,
                }),
                (0, Q.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, Q.jsx)(F, {
                    id: `inbox.automations.nextRunRelativeSeparator`,
                    defaultMessage: `, `,
                    description: `Accessible separator before a scheduled task's relative next run time`,
                  }),
                }),
                (0, Q.jsx)(le, { dateString: new Date(l).toISOString() }),
              ],
            })
          : null),
      (r[48] = y),
      (r[49] = b),
      (r[50] = l),
      (r[51] = U))
    : (U = r[51]);
  let W;
  r[52] !== b || r[53] !== c
    ? ((W =
        b && c == null
          ? (0, Q.jsx)(F, {
              id: `inbox.automations.pausedRowStatus`,
              defaultMessage: `Paused`,
              description: `Visible status for a paused scheduled task in a navigation-only row`,
            })
          : null),
      (r[52] = b),
      (r[53] = c),
      (r[54] = W))
    : (W = r[54]);
  let G;
  r[55] !== b || r[56] !== c
    ? ((G =
        b && c != null
          ? (0, Q.jsx)(`span`, {
              className: `sr-only`,
              children: (0, Q.jsx)(F, {
                id: `inbox.automations.pausedRowDescription`,
                defaultMessage: `, Paused`,
                description: `Accessible status appended to a paused scheduled task's schedule`,
              }),
            })
          : null),
      (r[55] = b),
      (r[56] = c),
      (r[57] = G))
    : (G = r[57]);
  let K;
  r[58] !== k || r[59] !== A || r[60] !== p
    ? ((K = p != null && (k || A) ? (0, Q.jsx)(De, {}) : null),
      (r[58] = k),
      (r[59] = A),
      (r[60] = p),
      (r[61] = K))
    : (K = r[61]);
  let q;
  r[62] !== p ||
  r[63] !== D ||
  r[64] !== U ||
  r[65] !== W ||
  r[66] !== G ||
  r[67] !== K ||
  r[68] !== z ||
  r[69] !== B ||
  r[70] !== V ||
  r[71] !== H
    ? ((q = (0, Q.jsxs)(`span`, {
        id: D,
        className: `inline-flex max-w-full items-center gap-1.5 overflow-hidden whitespace-nowrap`,
        children: [z, B, V, H, U, W, G, K, p],
      })),
      (r[62] = p),
      (r[63] = D),
      (r[64] = U),
      (r[65] = W),
      (r[66] = G),
      (r[67] = K),
      (r[68] = z),
      (r[69] = B),
      (r[70] = V),
      (r[71] = H),
      (r[72] = q))
    : (q = r[72]);
  let J;
  return (
    r[73] !== ee ||
    r[74] !== s ||
    r[75] !== M ||
    r[76] !== x ||
    r[77] !== j ||
    r[78] !== S ||
    r[79] !== D ||
    r[80] !== q ||
    r[81] !== I ||
    r[82] !== R ||
    r[83] !== m
      ? ((J = (0, Q.jsx)(ee, {
          ariaDescribedBy: D,
          ariaLabel: s,
          className: I,
          compactSecondLine: !0,
          hasInteractiveContent: !0,
          icon: j,
          isSelected: x,
          onSelect: S,
          rightText: R,
          rightTextPosition: `center`,
          scheduleLabel: M,
          secondLine: q,
          title: s,
          titleAdornment: m,
        })),
        (r[73] = ee),
        (r[74] = s),
        (r[75] = M),
        (r[76] = x),
        (r[77] = j),
        (r[78] = S),
        (r[79] = D),
        (r[80] = q),
        (r[81] = I),
        (r[82] = R),
        (r[83] = m),
        (r[84] = J))
      : (J = r[84]),
    J
  );
}
function Ge(e) {
  let t = (0, Ke.c)(19),
    { children: n, disabled: r, disabledReason: i, label: a, loading: o, onClick: s, tooltipLabel: c } = e,
    l = N(),
    u = i ?? c,
    d;
  t[0] === u ? (d = t[1]) : ((d = (0, Q.jsx)(F, { ...u })), (t[0] = u), (t[1] = d));
  let f = o || void 0,
    p = i != null || void 0,
    m;
  t[2] !== l || t[3] !== a ? ((m = l.formatMessage(a)), (t[2] = l), (t[3] = a), (t[4] = m)) : (m = t[4]);
  let h = i == null ? s : void 0,
    g;
  t[5] !== n || t[6] !== o
    ? ((g = o ? null : (0, Q.jsx)(`span`, { className: `inline-flex`, children: n })),
      (t[5] = n),
      (t[6] = o),
      (t[7] = g))
    : (g = t[7]);
  let _;
  t[8] !== r || t[9] !== o || t[10] !== f || t[11] !== p || t[12] !== m || t[13] !== h || t[14] !== g
    ? ((_ = (0, Q.jsx)(S, {
        "aria-busy": f,
        "aria-disabled": p,
        "aria-label": m,
        className: `text-codex-description hover:text-default`,
        color: `ghostTertiary`,
        disabled: r,
        loading: o,
        size: `iconMd`,
        uniform: !0,
        onClick: h,
        children: g,
      })),
      (t[8] = r),
      (t[9] = o),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _))
    : (_ = t[15]);
  let v;
  return (
    t[16] !== d || t[17] !== _
      ? ((v = (0, Q.jsx)(M, { tooltipContent: d, children: _ })), (t[16] = d), (t[17] = _), (t[18] = v))
      : (v = t[18]),
    v
  );
}
var Ke, qe, Q, $;
function Je() {
  return (Je = e(() => {
    ((Ke = g()),
      h(),
      j(),
      o(),
      D(),
      m(),
      E(),
      (qe = s()),
      b(),
      Ee(),
      T(),
      k(),
      ve(),
      y(),
      pe(),
      A(),
      P(),
      r(),
      xe(),
      be(),
      q(),
      me(),
      V(),
      Ue(),
      R(),
      I(),
      (Q = l()),
      ($ = C({
        runNow: {
          id: `settings.automations.runNow`,
          defaultMessage: `Run now`,
          description: `Button label for running an automation immediately`,
        },
        pause: {
          id: `inbox.automations.pauseTooltip`,
          defaultMessage: `Pause`,
          description: `Tooltip label for pausing an automation`,
        },
        resume: {
          id: `inbox.automations.resumeTooltip`,
          defaultMessage: `Resume`,
          description: `Tooltip label for resuming an automation`,
        },
        delete: {
          id: `inbox.automations.deleteTooltip`,
          defaultMessage: `Delete`,
          description: `Tooltip label for deleting an automation`,
        },
        moreActions: {
          id: `inbox.automations.moreActions`,
          defaultMessage: `Scheduled task actions`,
          description: `Accessible label for a scheduled task's actions menu`,
        },
      })));
  }))();
}
export { ze as a, Pe as i, Je as n, Ne as r, We as t };
//# sourceMappingURL=automation-row-c56a98da2955.js.map
