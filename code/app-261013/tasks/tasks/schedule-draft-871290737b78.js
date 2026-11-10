import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HAr as t,
  Jkr as n,
  KAr as r,
  OAr as i,
  PAr as a,
  QAr as o,
  Ykr as s,
  eAr as c,
  fAr as l,
  ijr as u,
  lAr as d,
  njr as f,
  oAr as p,
  rAr as m,
  rjr as h,
  sAr as g,
  tjr as _,
} from "./app-initial-5851df3f6cb1.js";
function v(e, n) {
  let i = e.schedule_components,
    a = m(e.schedule),
    o = n === `configuration` ? a.replace(/;BYSECOND=0(?=;|$)/g, ``) : a,
    s = f(o, i, n === `configuration` ? void 0 : e.timing_mode, n === `configuration`),
    u = _(n === `configuration` ? o.replace(/;UNTIL=[^;\r\n]+/i, ``) : s.customRrule),
    d = E(e),
    p = d == null ? void 0 : O(d, e.default_timezone),
    g = i.by_day?.split(`,`).map((e) => e.trim()),
    v = N.filter((e) => g?.includes(e)),
    b = g != null && g.length > 0 && g.every((e) => v.some((t) => t === e)),
    x = b ? v : [h[new Date().getDay()] ?? `MO`],
    S =
      u?.time ??
      (n === `configuration`
        ? s.time
        : `${String(i.by_hour ?? 9).padStart(2, `0`)}:${String(i.by_minute ?? 0).padStart(2, `0`)}`),
    C = e.schedule_time_of_day ?? y(S),
    w = T(e),
    D =
      i.frequency === `once` ||
      (/^DTSTART/m.test(e.schedule) && !/^(RRULE|RDATE|EXRULE|EXDATE)/m.test(e.schedule)),
    k = `custom`;
  w == null
    ? n === `configuration`
      ? (k = s.mode)
      : e.timing_mode !== `exact_schedule` &&
        s.mode !== `custom` &&
        (i.frequency === `daily` || i.frequency === `monthly`
          ? (k = i.frequency)
          : i.frequency === `weekly` &&
            b &&
            (v.length === 5 && P.every((e) => v.includes(e))
              ? (k = `weekdays`)
              : v.length <= 3 && (k = `weekly`)))
    : (k = `hourly`);
  let A = i.frequency === `weekly` || i.frequency === `monthly` ? i.frequency : `daily`,
    j = Math.min(
      31,
      Math.max(
        1,
        (u?.frequency === `monthly` || u?.frequency === `yearly` ? u.monthDays[0] : i.by_month_day) ??
          new Date().getDate(),
      ),
    ),
    F = {
      ...r(),
      timeZone: n === `configuration` ? e.default_timezone : void 0,
      mode: k,
      intervalHours: w ?? 1,
      intervalMinutes: s.intervalMinutes,
      monthDay: j,
      weekdays: u?.frequency === `weekly` ? u.weekdays : x,
      time: k === `custom` || n === `configuration` ? S : M[C],
      untilDate: p?.slice(0, 10),
      untilTime: p?.slice(11),
      customRrule:
        s.customRrule ||
        t({ frequency: A, interval: 1, weekdays: x, month: 1, monthDays: [j], time: S, minute: 0 }),
    };
  if (D) {
    let t = new Date();
    t.setSeconds(0, 0);
    let n = c(e),
      r = n == null ? void 0 : new Date(n);
    ((r == null || Number.isNaN(r.getTime())) &&
      (r = [e.target_time_utc, ...e.next_run_times]
        .flatMap((e) => (e == null ? [] : [new Date(e)]))
        .find((e) => e.getTime() >= t.getTime())),
      r ?? ((r = new Date(t)), r.setHours(r.getHours() + 1)));
    let i = O(r, F.timeZone);
    ((F.oneTimeDate = i.slice(0, 10)), (F.time = i.slice(11, 16)), (F.oneTimeSeconds = r.getSeconds()));
  }
  return {
    ...l,
    scheduleEditor: n,
    id: e.id,
    kind: `cron`,
    name: e.title,
    emoji: e.display_emoji,
    prompt: e.prompt,
    model: e.model ?? null,
    reasoningEffort: e.reasoning_effort ?? null,
    threadMode: e.thread_mode,
    rawRrule: e.schedule,
    status: e.is_enabled ? `ACTIVE` : `PAUSED`,
    scheduleConfig: F,
  };
}
function y(e) {
  let t = Number(e.split(`:`)[0]);
  return t >= 21 || t < 6 ? `night` : t < 12 ? `morning` : t < 17 ? `afternoon` : `evening`;
}
function b(e, n, r) {
  let i = v(e).scheduleConfig,
    a = n.mode !== `custom` && n.mode !== `hourly`,
    o = { ...i, mode: r, untilDate: n.untilDate, untilTime: n.untilTime, timeZone: n.timeZone };
  if (r === `custom`) {
    if (n.mode === `daily` || n.mode === `weekdays` || n.mode === `weekly` || n.mode === `monthly`) {
      let e = n.mode === `weekdays` ? `weekly` : n.mode;
      ((o.weekdays = n.mode === `weekdays` ? P : n.weekdays),
        (o.monthDay = n.monthDay),
        (o.time = n.time),
        (o.customRrule = t({
          frequency: e,
          interval: 1,
          weekdays: o.weekdays,
          month: 1,
          monthDays: [o.monthDay ?? 1],
          time: n.time,
          minute: 0,
        })));
    }
  } else
    ((o.time = a ? n.time : M[e.schedule_time_of_day ?? y(`${e.schedule_components.by_hour ?? 9}:00`)]),
      (o.intervalHours = r === `hourly` && n.mode === `hourly` ? n.intervalHours : 1));
  return o;
}
function x(e, t) {
  return (
    t.name !== e.title ||
    (t.emoji !== void 0 && t.emoji !== e.display_emoji) ||
    i(t, e.prompt) !== e.prompt ||
    t.model !== (e.model ?? null) ||
    t.reasoningEffort !== (e.reasoning_effort ?? null) ||
    C(e, t)
  );
}
function S(e, t) {
  let r = {
    ...s(e, { ...t, scheduleDirty: !1 }),
    title: t.name,
    prompt: i(t, e.prompt),
    default_timezone: t.scheduleConfig.timeZone ?? e.default_timezone,
  };
  if (!C(e, t)) return r;
  let a = t.scheduleConfig;
  if (a.oneTimeDate != null) {
    let t = a.timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
    return {
      ...r,
      default_timezone: t,
      schedule: n(a.oneTimeDate, a.time, t, a.oneTimeSeconds ?? 0),
      timing_mode: +(e.timing_mode === `flexible_schedule`),
    };
  }
  let o = v(e, t.scheduleEditor).scheduleConfig,
    c = a.untilDate !== o.untilDate || a.untilTime !== o.untilTime || a.timeZone !== o.timeZone,
    l = /(?:^|\r?\n)RRULE:[^\r\n]*?\bUNTIL=([^;\r\n]+)/.exec(e.schedule)?.[1],
    u = l == null ? `` : `;UNTIL=${l}`;
  if (c) {
    let n = j(a, t.scheduleConfig.timeZone ?? e.default_timezone);
    u = n == null ? `` : `;UNTIL=${D(n)}`;
  }
  let d = w({ ...a, untilDate: o.untilDate, untilTime: o.untilTime }) === w(o),
    f;
  if ((a.mode === `hourly` && a.intervalMinutes == null && T(e) != null) || d)
    f = e.schedule.replace(
      /(^|\r?\n)RRULE:([^\r\n]*)/,
      (e, t, n) =>
        `${t}RRULE:${n
          .split(`;`)
          .filter((e) => a.mode !== `hourly` || !e.startsWith(`INTERVAL=`))
          .join(`;`)}${a.mode === `hourly` ? `;INTERVAL=${a.intervalMinutes ?? a.intervalHours}` : ``}`,
    );
  else {
    let t;
    if (a.mode === `hourly` && a.intervalMinutes != null) t = `FREQ=MINUTELY;INTERVAL=${a.intervalMinutes}`;
    else if (a.mode === `hourly`) t = `FREQ=HOURLY;INTERVAL=${a.intervalHours};BYMINUTE=0`;
    else if (a.mode === `custom`) t = a.customRrule.trim();
    else {
      let [e, n] = a.time.split(`:`).map(Number),
        r = `FREQ=DAILY`;
      if (a.mode === `weekly` || a.mode === `weekdays`) {
        let e = a.mode === `weekdays` ? P : a.weekdays;
        r = `FREQ=WEEKLY;BYDAY=${N.filter((t) => e.includes(t)).join(`,`)}`;
      } else a.mode === `monthly` && (r = `FREQ=MONTHLY;BYMONTHDAY=${a.monthDay ?? 1}`);
      t = `${r};BYHOUR=${e};BYMINUTE=${n}`;
    }
    let n = /^(RRULE|DTSTART|RDATE|EXRULE|EXDATE)[:;]/.test(t) ? t : `RRULE:${t}`,
      r = /^DTSTART[^\r\n]*/m.exec(e.schedule)?.[0];
    f = `BEGIN:VEVENT\n${r != null && !/^DTSTART[:;]/m.test(n) ? `${r}\n` : ``}${n}\nEND:VEVENT`;
  }
  (a.timeZone != null &&
    a.timeZone !== e.default_timezone &&
    (f = f.replace(/^DTSTART((?:;[^:\r\n]+)?):(\d{8}T\d{6})(Z?)(?=\r?$)/m, (t, n, r, i) => {
      let o = /;TZID=(?:"([^"]+)"|([^;]+))/.exec(n);
      if (o == null && !i) return t;
      let s = `${r.slice(0, 4)}-${r.slice(4, 6)}-${r.slice(6, 8)}`,
        c = `${r.slice(9, 11)}:${r.slice(11, 13)}`,
        l = O(
          g(s, c, i ? `UTC` : (o?.[1] ?? o?.[2] ?? e.default_timezone), Number(r.slice(13, 15))),
          e.default_timezone,
        )
          .replaceAll(`-`, ``)
          .replaceAll(`:`, ``)
          .replace(` `, `T`);
      return `DTSTART;TZID=${a.timeZone}:${l}`;
    })),
    (f = f.replace(
      /(^|\r?\n)RRULE:([^\r\n]*)/,
      (e, t, n) =>
        `${t}RRULE:${n
          .split(`;`)
          .filter((e) => !e.startsWith(`UNTIL=`))
          .join(`;`)}${u}`,
    )));
  let p = r.timing_mode;
  return (
    !d &&
      e.timing_mode !== `condition_watch` &&
      (p =
        a.mode === `custom` ||
        a.mode === `hourly` ||
        (t.scheduleEditor === `configuration` && e.timing_mode === `exact_schedule`)
          ? 0
          : 1),
    { ...r, schedule: f, timing_mode: p }
  );
}
function C(e, t) {
  if (!t.scheduleDirty) return !1;
  let n = v(e, t.scheduleEditor).scheduleConfig;
  return t.scheduleConfig.timeZone !== n.timeZone || w(t.scheduleConfig) !== w(n);
}
function w(e) {
  if (e.oneTimeDate != null) return JSON.stringify([e.oneTimeDate, e.time, e.oneTimeSeconds ?? 0]);
  let t = e.untilDate == null ? null : [e.untilDate, e.untilTime ?? `23:59:59`];
  switch (e.mode) {
    case `hourly`:
      return JSON.stringify([`hourly`, e.intervalMinutes, e.intervalHours, t]);
    case `daily`:
      return JSON.stringify([`daily`, e.time, t]);
    case `weekdays`:
      return JSON.stringify([`weekly`, P, e.time, t]);
    case `weekly`:
      return JSON.stringify([`weekly`, N.filter((t) => e.weekdays.includes(t)), e.time, t]);
    case `monthly`:
      return JSON.stringify([`monthly`, e.monthDay, e.time, t]);
    case `custom`:
      return JSON.stringify([`custom`, e.customRrule, e.monthDay, e.weekdays, t]);
  }
}
function T(e) {
  let t = /(?:^|\r?\n)RRULE:([^\r\n]+)/.exec(e.schedule)?.[1];
  if (t == null) return null;
  let n = new Map();
  for (let e of t.split(`;`)) {
    let [t, r] = e.split(`=`, 2);
    if (!t || !r || n.has(t) || ![`FREQ`, `INTERVAL`, `BYMINUTE`, `BYSECOND`, `UNTIL`].includes(t))
      return null;
    n.set(t, r);
  }
  if (
    n.get(`FREQ`) !== `HOURLY` ||
    (n.has(`BYMINUTE`) && n.get(`BYMINUTE`) !== `0`) ||
    (n.has(`BYSECOND`) && n.get(`BYSECOND`) !== `0`) ||
    (n.has(`UNTIL`) && E(e) == null)
  )
    return null;
  let r = n.get(`INTERVAL`) ?? `1`,
    i = Number(r);
  return /^\d{1,2}$/.test(r) && i >= 1 && i <= 23 ? i : null;
}
function E(e) {
  let t = /(?:^|\r?\n)RRULE:[^\r\n]*\bUNTIL=([^;\r\n]+)/.exec(e.schedule)?.[1],
    n = /^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?$/.exec(t ?? ``);
  if (n == null) return null;
  let [, r, i, a, o = `23`, s = `59`, c = `59`, l] = n,
    u = `${r}-${i}-${a}`,
    d = `${o}:${s}`,
    f = new Date(`${u}T${d}:${c}Z`);
  return Number.isNaN(f.getTime()) || f.toISOString().slice(0, 19) !== `${u}T${d}:${c}`
    ? null
    : l === `Z`
      ? f
      : g(u, d, e.default_timezone, Number(c));
}
function D(e) {
  return e
    .toISOString()
    .replaceAll(`-`, ``)
    .replaceAll(`:`, ``)
    .replace(/\.\d{3}Z$/, `Z`);
}
function O(e, t) {
  return new Intl.DateTimeFormat(`sv-SE`, {
    timeZone: t,
    year: `numeric`,
    month: `2-digit`,
    day: `2-digit`,
    hour: `2-digit`,
    minute: `2-digit`,
    second: `2-digit`,
    hourCycle: `h23`,
  }).format(e);
}
function k(e, t, n) {
  return C(e, t) ? A(t.scheduleConfig, n, t.scheduleConfig.timeZone ?? e.default_timezone) : null;
}
function A(e, t, n = p(e, Intl.DateTimeFormat().resolvedOptions().timeZone)) {
  let r = new Date(t);
  if ((r.setSeconds(0, 0), e.oneTimeDate != null)) {
    let n = g(
      e.oneTimeDate,
      e.time,
      e.timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone,
      e.oneTimeSeconds ?? 0,
    );
    if (n.getTime() < r.getTime()) return `past`;
    let i = new Date(t);
    return (i.setFullYear(i.getFullYear() + 2), n.getTime() >= i.getTime() ? `too-far` : null);
  }
  let i = j(e, n);
  return i != null && i.getTime() < r.getTime() ? `end-past` : null;
}
function j(e, t) {
  if (e.untilDate == null) return null;
  let n = e.untilTime ?? `23:59:59`;
  return g(e.untilDate, n.slice(0, 5), t, Number(n.slice(6)));
}
var M, N, P;
function F() {
  return (F = e(() => {
    (o(),
      a(),
      d(),
      u(),
      (M = { morning: `09:00`, afternoon: `14:00`, evening: `18:00`, night: `22:00` }),
      (N = [`MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`]),
      (P = [`MO`, `TU`, `WE`, `TH`, `FR`]));
  }))();
}
export { k as a, x as c, A as i, F as l, v as n, y as o, S as r, E as s, M as t, b as u };
//# sourceMappingURL=schedule-draft-871290737b78.js.map
