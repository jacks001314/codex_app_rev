import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  VDt as n,
  i3 as r,
  iot as i,
  jDt as a,
  r3 as o,
  vzt as s,
  xMt as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  GJn as l,
  J5t as u,
  K5t as d,
  KJn as f,
  QQn as p,
  Qkr as m,
  aWn as h,
  e$n as g,
  lAr as _,
  oFr as v,
  rWn as y,
} from "./app-initial-5851df3f6cb1.js";
import { l as b, n as x, s as S } from "./schedule-draft-871290737b78.js";
import { i as C, n as w } from "./task-groups-c909436a8517.js";
import { a as T, r as E, t as D } from "./timestamps-85bd12c0e1b2.js";
import { n as O, t as k } from "./chatgpt-assistant-message-content-657f67d40f20.js";
function A(e) {
  let r = (0, N.c)(15),
    { automation: i, footer: a, lastRunFailed: o, showLastRun: s } = e,
    c = a !== void 0 && a,
    l = o !== void 0 && o,
    d = s === void 0 || s,
    f = n(),
    p = u(),
    m,
    h,
    g;
  if (r[0] !== i.last_run_time || r[1] !== f || r[2] !== l || r[3] !== p || r[4] !== d) {
    let e = i.last_run_time == null ? null : new Date(i.last_run_time);
    if (((h = `none`), (g = ``), (m = ``), d && e != null && Number.isFinite(e.getTime()))) {
      let t = M(e, p, f);
      if (t != null) ((h = l ? `failedRecent` : `recent`), (g = t));
      else {
        let t = D(p, e);
        t === 0 || t === 1
          ? ((h = `at`),
            (m = f.formatRelativeTime(-t, `day`, { numeric: `auto` })),
            (g = f.formatTime(e, { hour: `numeric`, minute: `2-digit` })))
          : ((h = `on`),
            (g =
              t <= 7
                ? f.formatDate(e, { weekday: `long` })
                : f.formatDate(e, { month: `short`, day: `numeric`, year: `numeric` })));
      }
    }
    ((r[0] = i.last_run_time),
      (r[1] = f),
      (r[2] = l),
      (r[3] = p),
      (r[4] = d),
      (r[5] = m),
      (r[6] = h),
      (r[7] = g));
  } else ((m = r[5]), (h = r[6]), (g = r[7]));
  if (h === `none`) return null;
  let _;
  r[8] !== m || r[9] !== h || r[10] !== g
    ? ((_ = (0, P.jsx)(t, {
        id: `automations.scheduled.detailRunTiming`,
        defaultMessage: `{lastKind, select, recent {Last ran {lastTime}} failedRecent {{lastTime}} at {Last ran {lastDay} at {lastTime}} on {Last ran on {lastTime}} other {}}{separator}{nextKind, select, running {Running now} next {Next run {nextTime}} other {}}`,
        description: `Timing summary in the Scheduled task details drawer. lastKind chooses a relative last-run time, a day and clock time, a calendar date, or no last-run status. For a failed first run it shows only the relative time beneath Last run failed. lastDay, lastTime, and nextTime are locale-formatted dates or durations. nextKind is running, next, or none. separator is a middle dot in the empty state or a line break in the footer, present only when both statuses are shown.`,
        values: { lastKind: h, lastDay: m, lastTime: g, nextKind: `none`, nextTime: ``, separator: `` },
      })),
      (r[8] = m),
      (r[9] = h),
      (r[10] = g),
      (r[11] = _))
    : (_ = r[11]);
  let v = _,
    y;
  return (
    r[12] !== c || r[13] !== v
      ? ((y = c
          ? (0, P.jsx)(`div`, {
              className: `border-t border-default pt-4 text-sm leading-5 whitespace-pre-line text-tertiary select-none`,
              children: v,
            })
          : v),
        (r[12] = c),
        (r[13] = v),
        (r[14] = y))
      : (y = r[14]),
    y
  );
}
function j(e) {
  let r = (0, N.c)(12),
    { value: i } = e,
    a = n(),
    o = u(),
    s,
    c,
    l;
  if (r[0] !== a || r[1] !== o || r[2] !== i) {
    l = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = new Date(i);
      if (!Number.isFinite(e.getTime())) {
        l = null;
        break bb0;
      }
      ((s = M(e, o, a)), (c = E(a, e, o)));
    }
    ((r[0] = a), (r[1] = o), (r[2] = i), (r[3] = s), (r[4] = c), (r[5] = l));
  } else ((s = r[3]), (c = r[4]), (l = r[5]));
  if (l !== Symbol.for(`react.early_return_sentinel`)) return l;
  let d = c,
    f = s == null ? `no` : `yes`,
    p = s ?? ``,
    m = d.includeAt ? `yes` : `no`,
    h;
  return (
    r[6] !== d.date || r[7] !== d.time || r[8] !== f || r[9] !== p || r[10] !== m
      ? ((h = (0, P.jsx)(t, {
          id: `automations.scheduled.detailUpdateTimestampWithLabel`,
          defaultMessage: `{showLastUpdateLabel, select, yes {Last update · } other {}}{recent, select, yes {{relativeTime}} other {{date}{includeAt, select, yes { at } other { }}{time}}}`,
          description: `Timestamp above a task update in the Scheduled details drawer. showLastUpdateLabel adds Last update to distinguish the last report from a newer run that is still starting. Recent updates use relativeTime, a localized duration such as 22 minutes ago. Older updates use date, a localized day or calendar date, and time, a localized clock time; includeAt inserts the preposition for dates more than a week old.`,
          values: {
            showLastUpdateLabel: `no`,
            recent: f,
            relativeTime: p,
            date: d.date,
            time: d.time,
            includeAt: m,
          },
        })),
        (r[6] = d.date),
        (r[7] = d.time),
        (r[8] = f),
        (r[9] = p),
        (r[10] = m),
        (r[11] = h))
      : (h = r[11]),
    h
  );
}
function M(e, t, n) {
  let r = t.getTime() - e.getTime();
  return r < 0 || r >= 864e5
    ? null
    : r < 36e5
      ? n.formatRelativeTime(-Math.max(1, Math.round(r / 6e4)), `minute`)
      : n.formatRelativeTime(-Math.max(1, Math.round(r / 36e5)), `hour`);
}
var N, P;
function F() {
  return (F = e(() => {
    ((N = s()), a(), T(), d(), (P = c()));
  }))();
}
function I(e) {
  let r = (0, R.c)(70),
    { item: i, runPhase: a, status: o } = e,
    s = n(),
    c = u(),
    { automation: l } = i,
    d;
  r[0] !== l || r[1] !== o ? ((d = o ?? w(l)), (r[0] = l), (r[1] = o), (r[2] = d)) : (d = r[2]);
  let f = d,
    p = l.schedule_components.frequency,
    h,
    g,
    _,
    v,
    y,
    b,
    C,
    T,
    E,
    D,
    O,
    k,
    A,
    j;
  if (r[3] !== l || r[4] !== p || r[5] !== s || r[6] !== i || r[7] !== c || r[8] !== a || r[9] !== f) {
    let e = p === `once` || l.timing_mode === `condition_watch` ? void 0 : S(l),
      n = l.schedule_components.start_time,
      o = n != null && !Number.isNaN(Date.parse(n)) ? n : null,
      u;
    r[24] === i ? (u = r[25]) : ((u = m(i)), (r[24] = i), (r[25] = u));
    let d = u,
      w = p;
    if (p === `once` && o != null) w = `once`;
    else if (l.timing_mode === `condition_watch`) w = `monitoring`;
    else if (d != null) w = `everyMinutes`;
    else if (p === `once`) w = `scheduled`;
    else if (p === `custom`) {
      let { scheduleConfig: e } = x(l);
      w = l.display_schedule?.toLowerCase().includes(`hour`)
        ? `hourly`
        : e.mode === `hourly` || e.oneTimeDate != null
          ? `scheduled`
          : `daily`;
    }
    let M = l.next_run_times[0],
      N,
      P,
      F;
    if (
      r[26] !== l.last_run_time ||
      r[27] !== p ||
      r[28] !== s ||
      r[29] !== M ||
      r[30] !== c ||
      r[31] !== a ||
      r[32] !== f
    ) {
      let e = l.last_run_time == null ? null : new Date(l.last_run_time);
      if (((N = e != null && !Number.isNaN(e.getTime())), (F = `none`), (P = ``), a != null))
        F = a === `starting` ? `starting` : `executing`;
      else if (f === `active` && p === `once`) F = `scheduled`;
      else if (f === `active` && M != null && !Number.isNaN(Date.parse(M))) {
        let e = Date.parse(M) - c.getTime();
        if (((F = e <= 6e4 ? `running` : `next`), e < 36e5)) {
          let t;
          (r[36] !== s || r[37] !== e
            ? ((t = s.formatRelativeTime(Math.round(e / 6e4), `minute`)),
              (r[36] = s),
              (r[37] = e),
              (r[38] = t))
            : (t = r[38]),
            (P = t));
        } else if (e < 864e5) {
          let t;
          (r[39] !== s || r[40] !== e
            ? ((t = s.formatRelativeTime(Math.round(e / 36e5), `hour`)),
              (r[39] = s),
              (r[40] = e),
              (r[41] = t))
            : (t = r[41]),
            (P = t));
        } else if (e < 6048e5) {
          let t;
          (r[42] !== s || r[43] !== e
            ? ((t = s.formatRelativeTime(Math.round(e / 864e5), `day`, { numeric: `auto` })),
              (r[42] = s),
              (r[43] = e),
              (r[44] = t))
            : (t = r[44]),
            (P = t));
        } else {
          let e;
          (r[45] !== s || r[46] !== M || r[47] !== c
            ? ((e = s.formatDate(M, {
                month: `short`,
                day: `numeric`,
                year: new Date(M).getFullYear() === c.getFullYear() ? void 0 : `numeric`,
              })),
              (r[45] = s),
              (r[46] = M),
              (r[47] = c),
              (r[48] = e))
            : (e = r[48]),
            (P = e));
        }
      } else if (N) {
        F = `last`;
        let t = new Date(c.getFullYear(), c.getMonth(), c.getDate()),
          n = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
          r = Math.round((n.getTime() - t.getTime()) / 864e5);
        r === 0 || r === -1
          ? (F = r === 0 ? `lastToday` : `lastYesterday`)
          : (P =
              r >= -7
                ? s.formatDate(e, { weekday: `long` })
                : s.formatDate(e, { month: `short`, day: `numeric`, year: `numeric` }));
      }
      ((r[26] = l.last_run_time),
        (r[27] = p),
        (r[28] = s),
        (r[29] = M),
        (r[30] = c),
        (r[31] = a),
        (r[32] = f),
        (r[33] = N),
        (r[34] = P),
        (r[35] = F));
    } else ((N = r[33]), (P = r[34]), (F = r[35]));
    let I = a != null || f === `active` || (f === `paused` && !N);
    ((h = t),
      (v = `automations.scheduled.taskSummaryWithMinutesAndRunStatus`),
      (y = `{status, select, paused {Paused{showCadence, select, yes { · } other {}}} completed {{showCadence, select, no {Completed} other {}}} other {}}{showCadence, select, yes {{cadence, select, monitoring {Monitoring} everyMinutes {Every {minutes, number} min} hourly {Hourly} daily {Daily} weekly {Weekly} monthly {Monthly} yearly {Annually} once {{date}} other {Scheduled}}{hasEndDate, select, yes { until {endDate}} other {}}} other {}}{timing, select, starting { · <run>Starting run…</run>} executing { · <run>Running now</run>} next { · Next run {time}} last { · Last run {time}} lastToday { · Last run Today} lastYesterday { · Last run Yesterday} running { · Running now} scheduled { · Scheduled} other {}}`),
      (b = `Complete secondary line for a scheduled task. status is active, paused, or completed; cadence is its recurrence or monitoring; minutes is the minute recurrence interval. showCadence adds its schedule for active tasks, paused tasks that have never run, or a run that is starting or executing. It also hides Completed while a run is active. date is a one-time task date, endDate is the final recurrence date, and time is a locale-formatted relative duration or date. The middle dot separates cadence/status from next or last run information. The run tag adds a spinner beside the status while a requested run is starting or executing.`),
      (C = f),
      (T = w),
      (E = d),
      (D = F),
      (O = P),
      (k = L),
      (A = I ? `yes` : `no`),
      r[49] !== s || r[50] !== c || r[51] !== o
        ? ((j =
            o == null
              ? ``
              : s.formatDate(o, {
                  month: `short`,
                  day: `numeric`,
                  year: new Date(o).getFullYear() === c.getFullYear() ? void 0 : `numeric`,
                })),
          (r[49] = s),
          (r[50] = c),
          (r[51] = o),
          (r[52] = j))
        : (j = r[52]),
      (g = I && e != null ? `yes` : `no`),
      (_ =
        e == null
          ? ``
          : s.formatDate(e, {
              month: `short`,
              day: `numeric`,
              year: e.getFullYear() === c.getFullYear() ? void 0 : `numeric`,
            })),
      (r[3] = l),
      (r[4] = p),
      (r[5] = s),
      (r[6] = i),
      (r[7] = c),
      (r[8] = a),
      (r[9] = f),
      (r[10] = h),
      (r[11] = g),
      (r[12] = _),
      (r[13] = v),
      (r[14] = y),
      (r[15] = b),
      (r[16] = C),
      (r[17] = T),
      (r[18] = E),
      (r[19] = D),
      (r[20] = O),
      (r[21] = k),
      (r[22] = A),
      (r[23] = j));
  } else
    ((h = r[10]),
      (g = r[11]),
      (_ = r[12]),
      (v = r[13]),
      (y = r[14]),
      (b = r[15]),
      (C = r[16]),
      (T = r[17]),
      (E = r[18]),
      (D = r[19]),
      (O = r[20]),
      (k = r[21]),
      (A = r[22]),
      (j = r[23]));
  let M;
  r[53] !== g ||
  r[54] !== _ ||
  r[55] !== C ||
  r[56] !== T ||
  r[57] !== E ||
  r[58] !== D ||
  r[59] !== O ||
  r[60] !== k ||
  r[61] !== A ||
  r[62] !== j
    ? ((M = {
        status: C,
        cadence: T,
        minutes: E,
        timing: D,
        time: O,
        run: k,
        showCadence: A,
        date: j,
        hasEndDate: g,
        endDate: _,
      }),
      (r[53] = g),
      (r[54] = _),
      (r[55] = C),
      (r[56] = T),
      (r[57] = E),
      (r[58] = D),
      (r[59] = O),
      (r[60] = k),
      (r[61] = A),
      (r[62] = j),
      (r[63] = M))
    : (M = r[63]);
  let N;
  return (
    r[64] !== h || r[65] !== v || r[66] !== y || r[67] !== b || r[68] !== M
      ? ((N = (0, z.jsx)(h, { id: v, defaultMessage: y, description: b, values: M })),
        (r[64] = h),
        (r[65] = v),
        (r[66] = y),
        (r[67] = b),
        (r[68] = M),
        (r[69] = N))
      : (N = r[69]),
    N
  );
}
function L(e) {
  return (0, z.jsxs)(`span`, {
    children: [
      (0, z.jsx)(o, { as: `span`, className: `icon-xs`, containerClassName: `me-1 align-middle` }),
      e,
    ],
  });
}
var R, z;
function B() {
  return (B = e(() => {
    ((R = s()), a(), r(), d(), _(), b(), C(), (z = c()));
  }))();
}
function V(e) {
  let t = (0, H.c)(16),
    { conversationId: n, update: r } = e,
    a = r.id,
    o = r.author_name ?? void 0,
    s,
    c,
    l;
  if (
    t[0] !== n ||
    t[1] !== o ||
    t[2] !== r.channel ||
    t[3] !== r.content ||
    t[4] !== r.created_at ||
    t[5] !== r.id ||
    t[6] !== r.metadata ||
    t[7] !== r.recipient
  ) {
    l = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = {
        id: a,
        author: { role: `assistant`, name: o },
        content: r.content,
        metadata: r.metadata,
        channel: r.channel,
        recipient: r.recipient,
        create_time: Date.parse(r.created_at) / 1e3,
        end_turn: !0,
      };
      if (!f(e)) {
        l = null;
        break bb0;
      }
      let u = y({ current_node: r.id, mapping: { [r.id]: { message: e } } }, { mode: `sidebar` });
      s = `select-text`;
      let d;
      (t[11] === n
        ? (d = t[12])
        : ((d = (e) =>
            e.turn.items.map((e) =>
              e.type === `assistant-message`
                ? (0, U.jsx)(
                    k,
                    { item: e, conversationId: p(n), cwd: null, hostId: i, trackShownImpressions: !1 },
                    e.messageId,
                  )
                : null,
            )),
          (t[11] = n),
          (t[12] = d)),
        (c = u.flatMap(d)));
    }
    ((t[0] = n),
      (t[1] = o),
      (t[2] = r.channel),
      (t[3] = r.content),
      (t[4] = r.created_at),
      (t[5] = r.id),
      (t[6] = r.metadata),
      (t[7] = r.recipient),
      (t[8] = s),
      (t[9] = c),
      (t[10] = l));
  } else ((s = t[8]), (c = t[9]), (l = t[10]));
  if (l !== Symbol.for(`react.early_return_sentinel`)) return l;
  let u;
  return (
    t[13] !== s || t[14] !== c
      ? ((u = (0, U.jsx)(`div`, { className: s, children: c })), (t[13] = s), (t[14] = c), (t[15] = u))
      : (u = t[15]),
    u
  );
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = s()), O(), l(), h(), g(), v(), (U = c()));
  }))();
}
export { A as a, B as i, W as n, j as o, I as r, F as s, V as t };
//# sourceMappingURL=update-content-3518078bea44.js.map
