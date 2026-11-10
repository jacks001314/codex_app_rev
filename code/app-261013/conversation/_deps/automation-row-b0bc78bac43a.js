import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $v as n,
  ADt as r,
  AO as i,
  CO as a,
  IDt as o,
  Pxt as s,
  QJ as c,
  Qb as l,
  Qv as u,
  TJ as d,
  TO as f,
  VDt as p,
  Xx as m,
  Yx as h,
  ZJ as g,
  Zb as _,
  _Mt as v,
  aD as y,
  ay as b,
  cG as x,
  cz as S,
  gMt as C,
  i3 as w,
  iD as T,
  iot as E,
  iy as D,
  jDt as O,
  oy as ee,
  r3 as te,
  sy as k,
  sz as A,
  t3 as j,
  vk as ne,
  vzt as M,
  xMt as N,
  yk as P,
  yzt as F,
  zG as re,
  zxt as ie,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Or as ae,
  $ct as I,
  EG as L,
  Jk as oe,
  M$ as se,
  N$ as R,
  PAr as z,
  QAr as B,
  SAr as V,
  TG as ce,
  Xct as le,
  Yk as H,
  aY as U,
  akr as ue,
  dkr as W,
  e1 as de,
  fkr as G,
  h1 as K,
  hp as q,
  hzt as J,
  iY as fe,
  m1 as pe,
  mp as me,
  mzt as he,
  oFr as ge,
  qAr as _e,
  rkr as ve,
  t1 as ye,
} from "./app-initial-5851df3f6cb1.js";
import { _m as be, af as xe, gm as Se, of as Ce, vm as we, ym as Te } from "./app-primary-fe8a450b3b04.js";
import { n as Ee, t as De } from "./bullet-separator-9aa986eaf7a4.js";
import { n as Oe, t as ke } from "./document-search-5f7ef56ebc1f.js";
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
      name: d,
      scheduleLabel: f,
      onSelect: m,
    } = e,
    h = p(),
    g;
  n[0] !== r || n[1] !== h || n[2] !== d
    ? ((g =
        r === `add`
          ? h.formatMessage(
              {
                id: `inbox.automations.emptySuggestion.add`,
                defaultMessage: `Add {name} scheduled task`,
                description: `Accessible label for immediately adding a suggested scheduled task`,
              },
              { name: d },
            )
          : h.formatMessage(
              {
                id: `inbox.automations.pluginTemplate.setUp`,
                defaultMessage: `Set up {name} scheduled task`,
                description: `Accessible label for opening a plugin scheduled task template in the setup panel`,
              },
              { name: d },
            )),
      (n[0] = r),
      (n[1] = h),
      (n[2] = d),
      (n[3] = g))
    : (g = n[3]);
  let _ = g,
    v;
  n[4] === s ? (v = n[5]) : ((v = C(`relative inline-flex`, s)), (n[4] = s), (n[5] = v));
  let y;
  n[6] !== o || n[7] !== l
    ? ((y = l
        ? (0, Y.jsx)(te, { className: `icon-sm` })
        : (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsx)(`span`, {
                className: `icon-sm group-focus-within:opacity-0 group-focus-within/add:opacity-0 group-hover:opacity-0 group-hover/add:opacity-0 [&>svg]:size-full`,
                children: o,
              }),
              (0, Y.jsx)(pe, {
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
        children: (0, Y.jsx)(t, {
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
  let S;
  n[17] !== _ || n[18] !== x
    ? ((S = (0, Y.jsx)(A, { tooltipContent: _, children: x })), (n[17] = _), (n[18] = x), (n[19] = S))
    : (S = n[19]);
  let w;
  n[20] !== i || n[21] !== a
    ? ((w = (0, Y.jsx)(xe, {
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
    n[23] !== c || n[24] !== u || n[25] !== d || n[26] !== m || n[27] !== f || n[28] !== S || n[29] !== w
      ? ((T = (0, Y.jsx)(le, {
          ariaLabel: d,
          className: `@container`,
          compactSecondLine: !0,
          hasInteractiveContent: !0,
          icon: S,
          isDisabled: c,
          isSelected: u,
          secondaryTitle: f,
          secondLine: w,
          title: d,
          onSelect: m,
        })),
        (n[23] = c),
        (n[24] = u),
        (n[25] = d),
        (n[26] = m),
        (n[27] = f),
        (n[28] = S),
        (n[29] = w),
        (n[30] = T))
      : (T = n[30]),
    T
  );
}
var je, Y;
function Me() {
  return (Me = e(() => {
    ((je = M()), v(), O(), j(), I(), w(), S(), Ce(), K(), (Y = N()));
  }))();
}
function Ne() {
  let e = (0, Re.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsx)(me, {
          className: `min-h-56 text-tertiary`,
          children: (0, X.jsx)(o, {
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
      emptyState: s,
      pluginIconsById: c,
      pluginTemplateGroups: l,
      searchQuery: u,
      selectedPluginTemplateId: d,
      showDivider: f,
      onAdd: m,
      onSelectPluginTemplate: h,
    } = e,
    g = a === void 0 ? `line` : a,
    _ = p(),
    v,
    y;
  if (t[0] !== n || t[1] !== _ || t[2] !== c || t[3] !== l || t[4] !== u) {
    let e = u.trim().toLocaleLowerCase(),
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
          let t = _e(e.scheduleConfig, _) ?? ``;
          return { suggestion: e, scheduleLabel: t, searchTerms: [e.name, e.description, e.prompt, t] };
        }),
        (t[9] = _),
        (t[10] = i)),
      (y = Le(_)
        .filter(r)
        .map(i)
        .filter((t) => Ie(t.searchTerms, e))));
    let a;
    (t[11] !== _ || t[12] !== c
      ? ((a = (e) =>
          e.templates.map((t) => {
            let n = V({ pluginId: e.plugin.id, template: t }),
              r = _e(n.scheduleConfig, _) ?? ``,
              i = c.get(e.plugin.id);
            return {
              suggestion: {
                ...n,
                id: n.pluginTemplateId,
                description: t.prompt,
                icon: (0, X.jsx)(he, {
                  alt: ``,
                  className: `icon-sm`,
                  fallback: (0, X.jsx)(T, { className: `icon-sm text-secondary` }),
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
        (t[12] = c),
        (t[13] = a))
      : (a = t[13]),
      (v = (l ?? []).flatMap(a).filter((t) => Ie(t.searchTerms, e))),
      (t[0] = n),
      (t[1] = _),
      (t[2] = c),
      (t[3] = l),
      (t[4] = u),
      (t[5] = v),
      (t[6] = y));
  } else ((v = t[5]), (y = t[6]));
  let b = v;
  if (y.length === 0 && b.length === 0) {
    let e;
    return (
      t[14] === s
        ? (e = t[15])
        : ((e = s == null ? null : (0, X.jsx)(X.Fragment, { children: s })), (t[14] = s), (t[15] = e)),
      e
    );
  }
  let x = f && `mt-3 pt-3`,
    S = f && g === `line` && `border-t border-default`,
    w;
  t[16] !== x || t[17] !== S ? ((w = C(x, S)), (t[16] = x), (t[17] = S), (t[18] = w)) : (w = t[18]);
  let E;
  t[19] !== r || t[20] !== i || t[21] !== m || t[22] !== y
    ? ((E =
        y.length > 0
          ? (0, X.jsx)(Fe, {
              action: `add`,
              canAdd: r,
              creatingAutomationId: i,
              selectedSuggestionId: null,
              suggestions: y,
              title: (0, X.jsx)(o, {
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
      (t[23] = E))
    : (E = t[23]);
  let D;
  t[24] !== h || t[25] !== d || t[26] !== b
    ? ((D =
        b.length > 0
          ? (0, X.jsx)(Fe, {
              action: `set-up`,
              canAdd: !0,
              creatingAutomationId: null,
              selectedSuggestionId: d,
              suggestions: b,
              title: (0, X.jsx)(o, {
                id: `inbox.automations.fromPlugins`,
                defaultMessage: `From Plugins`,
                description: `Heading above scheduled task templates provided by plugins`,
              }),
              onSelect: h,
            })
          : null),
      (t[24] = h),
      (t[25] = d),
      (t[26] = b),
      (t[27] = D))
    : (D = t[27]);
  let O;
  return (
    t[28] !== w || t[29] !== E || t[30] !== D
      ? ((O = (0, X.jsxs)(`div`, { className: w, children: [E, D] })),
        (t[28] = w),
        (t[29] = E),
        (t[30] = D),
        (t[31] = O))
      : (O = t[31]),
    O
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
                hostId: E,
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
      icon: (0, X.jsx)(fe, {}),
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
      icon: (0, X.jsx)(ne, {}),
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
    ((Re = M()), v(), O(), B(), z(), J(), q(), y(), U(), Oe(), P(), ge(), Me(), (X = N()));
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
  t[9] === n ? (u = t[10]) : ((u = C(`select-none`, n)), (t[9] = n), (t[10] = u));
  let d;
  t[11] === r
    ? (d = t[12])
    : ((d = (0, Z.jsx)(`span`, {
        className: `flex size-7 shrink-0 items-center justify-center`,
        children: r,
      })),
      (t[11] = r),
      (t[12] = d));
  let f;
  t[13] === c
    ? (f = t[14])
    : ((f = (0, Z.jsx)(`span`, { className: `truncate text-default`, children: c })),
      (t[13] = c),
      (t[14] = f));
  let p;
  t[15] === l
    ? (p = t[16])
    : ((p =
        l == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: `min-w-0 truncate text-sm text-codex-description`,
              children: l,
            })),
      (t[15] = l),
      (t[16] = p));
  let m;
  t[17] !== f || t[18] !== p
    ? ((m = (0, Z.jsxs)(`span`, {
        className: `flex min-w-0 flex-1 items-baseline gap-1.5`,
        children: [f, p],
      })),
      (t[17] = f),
      (t[18] = p),
      (t[19] = m))
    : (m = t[19]);
  let h;
  t[20] === o
    ? (h = t[21])
    : ((h = (0, Z.jsx)(`span`, {
        className: `truncate text-sm text-codex-description @sm:max-w-1/2 @sm:shrink-0 @sm:text-end`,
        children: o,
      })),
      (t[20] = o),
      (t[21] = h));
  let g;
  t[22] !== m || t[23] !== h
    ? ((g = (0, Z.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-x-4 @sm:flex-row @sm:items-center`,
        children: [m, h],
      })),
      (t[22] = m),
      (t[23] = h),
      (t[24] = g))
    : (g = t[24]);
  let _;
  t[25] === i
    ? (_ = t[26])
    : ((_ =
        i == null
          ? null
          : (0, Z.jsx)(`span`, { className: `flex min-h-7 shrink-0 items-center`, children: i })),
      (t[25] = i),
      (t[26] = _));
  let v;
  t[27] !== d || t[28] !== g || t[29] !== _
    ? ((v = (0, Z.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-3 leading-6`,
        children: [d, g, _],
      })),
      (t[27] = d),
      (t[28] = g),
      (t[29] = _),
      (t[30] = v))
    : (v = t[30]);
  let y;
  t[31] === s
    ? (y = t[32])
    : ((y = (0, Z.jsx)(`span`, { className: `sr-only`, children: s })), (t[31] = s), (t[32] = y));
  let b;
  return (
    t[33] !== a || t[34] !== u || t[35] !== y || t[36] !== v || t[37] !== c
      ? ((b = (0, Z.jsxs)(le, { className: u, ...a, title: c, children: [v, y] })),
        (t[33] = a),
        (t[34] = u),
        (t[35] = y),
        (t[36] = v),
        (t[37] = c),
        (t[38] = b))
      : (b = t[38]),
    b
  );
}
function Ve(e) {
  let n = (0, He.c)(18),
    { disabled: r, disabledReason: i, isPaused: a, loading: s, onToggle: c } = e,
    l = p(),
    u;
  n[0] === a ? (u = n[1]) : ((u = a ? (0, Z.jsx)(x, {}) : (0, Z.jsx)(re, {})), (n[0] = a), (n[1] = u));
  let d = u;
  if (c == null) return d;
  let f;
  n[2] !== l || n[3] !== a
    ? ((f = a
        ? l.formatMessage({
            id: `inbox.automations.resumeTooltip`,
            defaultMessage: `Resume`,
            description: `Tooltip label for resuming an automation`,
          })
        : l.formatMessage({
            id: `inbox.automations.pauseTooltip`,
            defaultMessage: `Pause`,
            description: `Tooltip label for pausing an automation`,
          })),
      (n[2] = l),
      (n[3] = a),
      (n[4] = f))
    : (f = n[4]);
  let m = f,
    h = i ?? (a ? W.paused : W.active),
    g;
  n[5] === h ? (g = n[6]) : ((g = (0, Z.jsx)(o, { ...h })), (n[5] = h), (n[6] = g));
  let _ = s || void 0,
    v = i != null || void 0,
    y = i == null ? c : void 0,
    b = s ? null : d,
    S;
  n[7] !== r || n[8] !== m || n[9] !== s || n[10] !== _ || n[11] !== v || n[12] !== y || n[13] !== b
    ? ((S = (0, Z.jsx)(t, {
        className: `pointer-events-auto`,
        "aria-busy": _,
        "aria-disabled": v,
        "aria-label": m,
        color: `ghostActive`,
        disabled: r,
        loading: s,
        size: `composer`,
        uniform: !0,
        onClick: y,
        children: b,
      })),
      (n[7] = r),
      (n[8] = m),
      (n[9] = s),
      (n[10] = _),
      (n[11] = v),
      (n[12] = y),
      (n[13] = b),
      (n[14] = S))
    : (S = n[14]);
  let C;
  return (
    n[15] !== g || n[16] !== S
      ? ((C = (0, Z.jsx)(A, { tooltipContent: g, children: S })), (n[15] = g), (n[16] = S), (n[17] = C))
      : (C = n[17]),
    C
  );
}
var He, Z;
function Ue() {
  return (Ue = e(() => {
    ((He = M()), v(), O(), G(), j(), d(), I(), S(), (Z = N()));
  }))();
}
function We(e) {
  let t = (0, Ke.c)(85),
    {
      cloudAutomationId: n,
      displayName: r,
      managementActions: i,
      nextRunAt: s,
      scheduleLabel: d,
      secondLineAdornment: m,
      titleAdornment: g,
      hasUnreadRuns: _,
      inline: v,
      isCompleted: y,
      isInProgress: b,
      isPaused: x,
      isSelected: S,
      onSelect: w,
    } = e,
    T = v !== void 0 && v,
    E = y !== void 0 && y,
    O = p(),
    k = ie(ue, n),
    A = (0, qe.useId)(),
    j = ie(ae, i?.resumeDeadlineMs ?? null) ? W.expiredResume : void 0,
    ne = T ? Be : le,
    M = !E && !!d,
    N = E || b || (x && i == null) || (!x && s != null),
    P;
  if (b) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(te, { className: `icon-sm shrink-0 text-codex-description` })), (t[0] = e))
      : (e = t[0]),
      (P = e));
  } else if (E) {
    let e;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(h, { "aria-hidden": !0, className: `icon-sm shrink-0 text-codex-description` })),
        (t[1] = e))
      : (e = t[1]),
      (P = e));
  } else if (T) {
    let e = i?.isActionPending,
      n = x ? j : void 0,
      r = x ? i?.onResume : i?.onPause,
      a;
    (t[2] !== x || t[3] !== k || t[4] !== e || t[5] !== n || t[6] !== r
      ? ((a = (0, Q.jsx)(Ve, { disabled: e, disabledReason: n, isPaused: x, loading: k, onToggle: r })),
        (t[2] = x),
        (t[3] = k),
        (t[4] = e),
        (t[5] = n),
        (t[6] = r),
        (t[7] = a))
      : (a = t[7]),
      (P = a));
  } else if (x && i != null) {
    let e;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(Se, { className: `icon-sm` })), (t[8] = e))
      : (e = t[8]);
    let n;
    (t[9] !== k || t[10] !== i.isActionPending || t[11] !== i.onResume || t[12] !== j
      ? ((n = (0, Q.jsx)(`span`, {
          className: `pointer-events-auto inline-flex`,
          children: (0, Q.jsx)(Ge, {
            disabled: i.isActionPending,
            disabledReason: j,
            label: $.resume,
            loading: k,
            onClick: i.onResume,
            tooltipLabel: W.paused,
            children: e,
          }),
        })),
        (t[9] = k),
        (t[10] = i.isActionPending),
        (t[11] = i.onResume),
        (t[12] = j),
        (t[13] = n))
      : (n = t[13]),
      (P = n));
  } else if (x) {
    let e;
    (t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(we, { className: `icon-sm shrink-0 text-codex-description` })), (t[14] = e))
      : (e = t[14]),
      (P = e));
  } else if (i != null) {
    let e;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
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
        (t[15] = e))
      : (e = t[15]);
    let n;
    (t[16] !== k || t[17] !== i.isActionPending || t[18] !== i.onPause
      ? ((n = (0, Q.jsx)(`span`, {
          className: `group/status-toggle pointer-events-auto inline-flex`,
          children: (0, Q.jsx)(Ge, {
            disabled: i.isActionPending,
            label: $.pause,
            loading: k,
            onClick: i.onPause,
            tooltipLabel: W.active,
            children: e,
          }),
        })),
        (t[16] = k),
        (t[17] = i.isActionPending),
        (t[18] = i.onPause),
        (t[19] = n))
      : (n = t[19]),
      (P = n));
  } else {
    let e;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(ce, { className: `icon-sm shrink-0 text-codex-description` })), (t[20] = e))
      : (e = t[20]),
      (P = e));
  }
  let F = d;
  if (E) {
    let e;
    (t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(o, { ...W.completed })), (t[21] = e))
      : (e = t[21]),
      (F = e));
  } else if (T && x) {
    let e;
    t[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(o, { ...W.paused })), (t[22] = e))
      : (e = t[22]);
    let n;
    t[23] !== M || t[24] !== d
      ? ((n = M
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [(0, Q.jsx)(De, { className: `mx-1` }), (0, Q.jsx)(`span`, { children: d })],
            })
          : null),
        (t[23] = M),
        (t[24] = d),
        (t[25] = n))
      : (n = t[25]);
    let r;
    (t[26] === n
      ? (r = t[27])
      : ((r = (0, Q.jsxs)(Q.Fragment, { children: [e, n] })), (t[26] = n), (t[27] = r)),
      (F = r));
  }
  let re = (x || E) && !S && (T ? `text-tertiary` : `opacity-60 hover:opacity-100 focus-within:opacity-100`),
    I;
  t[28] === re ? (I = t[29]) : ((I = C(`@container`, re)), (t[28] = re), (t[29] = I));
  let L;
  t[30] !== _ || t[31] !== T || t[32] !== O || t[33] !== E || t[34] !== x || t[35] !== i || t[36] !== j
    ? ((L =
        _ || i != null
          ? (0, Q.jsxs)(`span`, {
              className: C(`relative inline-flex items-center justify-end`, T ? `w-7` : `min-w-16`),
              children: [
                _
                  ? (0, Q.jsx)(`span`, {
                      className: `flex group-focus-within:opacity-0 group-hover:opacity-0 group-has-[[data-state=open]]:opacity-0`,
                      children: (0, Q.jsx)(de, { statusState: { type: `idle`, unread: !0 } }),
                    })
                  : null,
                i == null
                  ? null
                  : (0, Q.jsx)(`span`, {
                      className: `pointer-events-none absolute right-0 inline-flex items-center justify-end opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 has-[[data-state=open]]:pointer-events-auto has-[[data-state=open]]:opacity-100`,
                      children: (0, Q.jsxs)(a, {
                        align: `end`,
                        contentWidth: `xs`,
                        triggerButton: (0, Q.jsx)(u, { label: O.formatMessage($.moreActions) }),
                        children: [
                          i.onRun == null
                            ? null
                            : (0, Q.jsx)(f.Item, {
                                disabled: i.isActionPending || i.isRunNowPending,
                                leftIconAsset: l,
                                onSelect: i.onRun,
                                children: (0, Q.jsx)(o, { ...$.runNow }),
                              }),
                          E
                            ? null
                            : (0, Q.jsx)(f.Item, {
                                disabled: i.isActionPending || (x && j != null),
                                focusableWhenDisabled: x && j != null,
                                tooltipText: x && j != null ? (0, Q.jsx)(o, { ...j }) : void 0,
                                leftIconAsset: x ? D : ee,
                                onSelect: () => {
                                  x ? i.onResume() : i.onPause();
                                },
                                children: (0, Q.jsx)(o, { ...(x ? $.resume : $.pause) }),
                              }),
                          i.onDelete == null
                            ? null
                            : (0, Q.jsx)(f.Item, {
                                className: `!text-danger`,
                                disabled: i.isActionPending,
                                leftIconAsset: c,
                                onSelect: i.onDelete,
                                children: (0, Q.jsx)(o, { ...$.delete }),
                              }),
                        ],
                      }),
                    }),
              ],
            })
          : void 0),
      (t[30] = _),
      (t[31] = T),
      (t[32] = O),
      (t[33] = E),
      (t[34] = x),
      (t[35] = i),
      (t[36] = j),
      (t[37] = L))
    : (L = t[37]);
  let R;
  t[38] !== M || t[39] !== d
    ? ((R = M ? (0, Q.jsx)(`span`, { className: `min-w-0 truncate`, children: d }) : null),
      (t[38] = M),
      (t[39] = d),
      (t[40] = R))
    : (R = t[40]);
  let z;
  t[41] !== M || t[42] !== N
    ? ((z = N && M ? (0, Q.jsx)(De, {}) : null), (t[41] = M), (t[42] = N), (t[43] = z))
    : (z = t[43]);
  let B;
  t[44] === E ? (B = t[45]) : ((B = E ? (0, Q.jsx)(o, { ...W.completed }) : null), (t[44] = E), (t[45] = B));
  let V;
  t[46] === b
    ? (V = t[47])
    : ((V = b
        ? (0, Q.jsx)(oe, {
            className: `text-codex-description`,
            message: (0, Q.jsx)(o, {
              id: `inbox.automations.inProgress`,
              defaultMessage: `In progress`,
              description: `Label for an automation that is currently running`,
            }),
          })
        : null),
      (t[46] = b),
      (t[47] = V));
  let H;
  t[48] !== b || t[49] !== x || t[50] !== s
    ? ((H =
        !b && !x && s != null
          ? (0, Q.jsxs)(`span`, {
              className: `inline-flex shrink-0 gap-1`,
              children: [
                (0, Q.jsx)(o, {
                  id: `inbox.automations.nextRunRelative`,
                  defaultMessage: `Next run`,
                  description: `Label before the relative time until the next scheduled task run`,
                }),
                (0, Q.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, Q.jsx)(o, {
                    id: `inbox.automations.nextRunRelativeSeparator`,
                    defaultMessage: `, `,
                    description: `Accessible separator before a scheduled task's relative next run time`,
                  }),
                }),
                (0, Q.jsx)(se, { dateString: new Date(s).toISOString() }),
              ],
            })
          : null),
      (t[48] = b),
      (t[49] = x),
      (t[50] = s),
      (t[51] = H))
    : (H = t[51]);
  let U;
  t[52] !== x || t[53] !== i
    ? ((U =
        x && i == null
          ? (0, Q.jsx)(o, {
              id: `inbox.automations.pausedRowStatus`,
              defaultMessage: `Paused`,
              description: `Visible status for a paused scheduled task in a navigation-only row`,
            })
          : null),
      (t[52] = x),
      (t[53] = i),
      (t[54] = U))
    : (U = t[54]);
  let G;
  t[55] !== x || t[56] !== i
    ? ((G =
        x && i != null
          ? (0, Q.jsx)(`span`, {
              className: `sr-only`,
              children: (0, Q.jsx)(o, {
                id: `inbox.automations.pausedRowDescription`,
                defaultMessage: `, Paused`,
                description: `Accessible status appended to a paused scheduled task's schedule`,
              }),
            })
          : null),
      (t[55] = x),
      (t[56] = i),
      (t[57] = G))
    : (G = t[57]);
  let K;
  t[58] !== M || t[59] !== N || t[60] !== m
    ? ((K = m != null && (M || N) ? (0, Q.jsx)(De, {}) : null),
      (t[58] = M),
      (t[59] = N),
      (t[60] = m),
      (t[61] = K))
    : (K = t[61]);
  let q;
  t[62] !== m ||
  t[63] !== A ||
  t[64] !== H ||
  t[65] !== U ||
  t[66] !== G ||
  t[67] !== K ||
  t[68] !== R ||
  t[69] !== z ||
  t[70] !== B ||
  t[71] !== V
    ? ((q = (0, Q.jsxs)(`span`, {
        id: A,
        className: `inline-flex max-w-full items-center gap-1.5 overflow-hidden whitespace-nowrap`,
        children: [R, z, B, V, H, U, G, K, m],
      })),
      (t[62] = m),
      (t[63] = A),
      (t[64] = H),
      (t[65] = U),
      (t[66] = G),
      (t[67] = K),
      (t[68] = R),
      (t[69] = z),
      (t[70] = B),
      (t[71] = V),
      (t[72] = q))
    : (q = t[72]);
  let J;
  return (
    t[73] !== ne ||
    t[74] !== r ||
    t[75] !== F ||
    t[76] !== S ||
    t[77] !== P ||
    t[78] !== w ||
    t[79] !== A ||
    t[80] !== q ||
    t[81] !== I ||
    t[82] !== L ||
    t[83] !== g
      ? ((J = (0, Q.jsx)(ne, {
          ariaDescribedBy: A,
          ariaLabel: r,
          className: I,
          compactSecondLine: !0,
          hasInteractiveContent: !0,
          icon: P,
          isSelected: S,
          onSelect: w,
          rightText: L,
          rightTextPosition: `center`,
          scheduleLabel: F,
          secondLine: q,
          title: r,
          titleAdornment: g,
        })),
        (t[73] = ne),
        (t[74] = r),
        (t[75] = F),
        (t[76] = S),
        (t[77] = P),
        (t[78] = w),
        (t[79] = A),
        (t[80] = q),
        (t[81] = I),
        (t[82] = L),
        (t[83] = g),
        (t[84] = J))
      : (J = t[84]),
    J
  );
}
function Ge(e) {
  let n = (0, Ke.c)(19),
    { children: r, disabled: i, disabledReason: a, label: s, loading: c, onClick: l, tooltipLabel: u } = e,
    d = p(),
    f = a ?? u,
    m;
  n[0] === f ? (m = n[1]) : ((m = (0, Q.jsx)(o, { ...f })), (n[0] = f), (n[1] = m));
  let h = c || void 0,
    g = a != null || void 0,
    _;
  n[2] !== d || n[3] !== s ? ((_ = d.formatMessage(s)), (n[2] = d), (n[3] = s), (n[4] = _)) : (_ = n[4]);
  let v = a == null ? l : void 0,
    y;
  n[5] !== r || n[6] !== c
    ? ((y = c ? null : (0, Q.jsx)(`span`, { className: `inline-flex`, children: r })),
      (n[5] = r),
      (n[6] = c),
      (n[7] = y))
    : (y = n[7]);
  let b;
  n[8] !== i || n[9] !== c || n[10] !== h || n[11] !== g || n[12] !== _ || n[13] !== v || n[14] !== y
    ? ((b = (0, Q.jsx)(t, {
        "aria-busy": h,
        "aria-disabled": g,
        "aria-label": _,
        className: `text-codex-description hover:text-default`,
        color: `ghostTertiary`,
        disabled: i,
        loading: c,
        size: `iconMd`,
        uniform: !0,
        onClick: v,
        children: y,
      })),
      (n[8] = i),
      (n[9] = c),
      (n[10] = h),
      (n[11] = g),
      (n[12] = _),
      (n[13] = v),
      (n[14] = y),
      (n[15] = b))
    : (b = n[15]);
  let x;
  return (
    n[16] !== m || n[17] !== b
      ? ((x = (0, Q.jsx)(A, { tooltipContent: m, children: b })), (n[16] = m), (n[17] = b), (n[18] = x))
      : (x = n[18]),
    x
  );
}
var Ke, qe, Q, $;
function Je() {
  return (Je = e(() => {
    ((Ke = M()),
      k(),
      b(),
      _(),
      g(),
      v(),
      s(),
      (qe = F()),
      O(),
      Ee(),
      j(),
      i(),
      R(),
      n(),
      I(),
      w(),
      S(),
      m(),
      Te(),
      be(),
      L(),
      H(),
      ye(),
      Ue(),
      G(),
      ve(),
      (Q = N()),
      ($ = r({
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
//# sourceMappingURL=automation-row-b0bc78bac43a.js.map
