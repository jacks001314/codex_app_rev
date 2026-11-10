import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  BE as r,
  BV as i,
  EPt as a,
  HE as o,
  IDt as s,
  JC as c,
  LV as ee,
  NV as l,
  Pxt as u,
  RE as d,
  RLt as f,
  TJ as p,
  UE as m,
  VDt as h,
  Vxt as te,
  iw as g,
  jDt as _,
  pIt as v,
  pLt as y,
  qC as b,
  t3 as x,
  tw as S,
  vzt as C,
  xMt as w,
  yzt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  HAr as E,
  OPr as D,
  QAr as O,
  iAr as ne,
  jPr as k,
  lAr as A,
  tjr as j,
} from "./app-initial-5851df3f6cb1.js";
import { l as M, n as N, o as P, t as re, u as ie } from "./schedule-draft-871290737b78.js";
import {
  a as F,
  c as I,
  d as L,
  f as R,
  g as z,
  i as B,
  l as V,
  n as ae,
  o as oe,
  r as H,
  s as U,
  u as se,
} from "./automation-frequency-section-b14557c3b8fc.js";
function ce(e) {
  let n = (0, K.c)(85),
    { value: a, onChange: c } = e,
    u = h(),
    [f, p] = (0, q.useState)(!1),
    [m, te] = (0, q.useState)(G),
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    ne;
  if (n[0] !== u || n[1] !== m || n[2] !== c || n[3] !== f || n[4] !== a) {
    let e = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
    ((_ = d),
      (y = f),
      n[19] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((b = (e) => {
            if (e) {
              let e = new Date();
              te(new Date(e.getFullYear(), e.getMonth(), 1));
            }
            p(e);
          }),
          (n[19] = b))
        : (b = n[19]));
    let h;
    n[20] === u
      ? (h = n[21])
      : ((h = u.formatMessage({
          id: `automations.editor.schedule.monthlyDate`,
          defaultMessage: `Monthly date`,
          description: `Label for the monthly day-of-month calendar control`,
        })),
        (n[20] = u),
        (n[21] = h));
    let k;
    n[22] === a
      ? (k = n[23])
      : ((k = (0, J.jsx)(`span`, {
          className: `truncate`,
          children: (0, J.jsx)(s, {
            id: `automations.editor.schedule.everyMonthOnDay`,
            defaultMessage: `Every month on the {day, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}`,
            description: `Summary text for a monthly schedule day selection`,
            values: { day: a },
          }),
        })),
        (n[22] = a),
        (n[23] = k));
    let A;
    (n[24] === Symbol.for(`react.memo_cache_sentinel`) ? ((A = (0, J.jsx)(l, {})), (n[24] = A)) : (A = n[24]),
      n[25] !== h || n[26] !== k
        ? ((x = (0, J.jsx)(o, {
            asChild: !0,
            children: (0, J.jsxs)(t, {
              color: `ghost`,
              size: `composerPill`,
              "aria-label": h,
              children: [k, A],
            }),
          })),
          (n[25] = h),
          (n[26] = k),
          (n[27] = x))
        : (x = n[27]),
      (g = r),
      (D = `end`),
      (O = `content`),
      (ne = `menu`),
      (T = `flex flex-col gap-3 text-sm select-none`));
    let j;
    n[28] !== u || n[29] !== m
      ? ((j = u.formatDate(m, { month: `long`, year: `numeric` })), (n[28] = u), (n[29] = m), (n[30] = j))
      : (j = n[30]);
    let M;
    n[31] === j
      ? (M = n[32])
      : ((M = (0, J.jsx)(`span`, { className: `font-medium`, children: j })), (n[31] = j), (n[32] = M));
    let N;
    n[33] === u
      ? (N = n[34])
      : ((N = u.formatMessage({
          id: `automations.editor.schedule.previousMonth`,
          defaultMessage: `Previous month`,
          description: `Accessible label for moving the monthly calendar backward`,
        })),
        (n[33] = u),
        (n[34] = N));
    let P;
    n[35] === m
      ? (P = n[36])
      : ((P = () => te(new Date(m.getFullYear(), m.getMonth() - 1, 1))), (n[35] = m), (n[36] = P));
    let re;
    n[37] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((re = (0, J.jsx)(ee, {})), (n[37] = re))
      : (re = n[37]);
    let ie;
    n[38] !== N || n[39] !== P
      ? ((ie = (0, J.jsx)(t, {
          color: `ghost`,
          radius: `full`,
          size: `iconCircle`,
          "aria-label": N,
          onClick: P,
          children: re,
        })),
        (n[38] = N),
        (n[39] = P),
        (n[40] = ie))
      : (ie = n[40]);
    let F;
    n[41] === u
      ? (F = n[42])
      : ((F = u.formatMessage({
          id: `automations.editor.schedule.nextMonth`,
          defaultMessage: `Next month`,
          description: `Accessible label for moving the monthly calendar forward`,
        })),
        (n[41] = u),
        (n[42] = F));
    let I;
    n[43] === m
      ? (I = n[44])
      : ((I = () => te(new Date(m.getFullYear(), m.getMonth() + 1, 1))), (n[43] = m), (n[44] = I));
    let L;
    n[45] === Symbol.for(`react.memo_cache_sentinel`) ? ((L = (0, J.jsx)(i, {})), (n[45] = L)) : (L = n[45]);
    let R;
    n[46] !== F || n[47] !== I
      ? ((R = (0, J.jsx)(t, {
          color: `ghost`,
          radius: `full`,
          size: `iconCircle`,
          "aria-label": F,
          onClick: I,
          children: L,
        })),
        (n[46] = F),
        (n[47] = I),
        (n[48] = R))
      : (R = n[48]);
    let z;
    (n[49] !== ie || n[50] !== R
      ? ((z = (0, J.jsxs)(`div`, { className: `flex gap-1`, children: [ie, R] })),
        (n[49] = ie),
        (n[50] = R),
        (n[51] = z))
      : (z = n[51]),
      n[52] !== M || n[53] !== z
        ? ((E = (0, J.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3`,
            children: [M, z],
          })),
          (n[52] = M),
          (n[53] = z),
          (n[54] = E))
        : (E = n[54]),
      (v = `grid grid-cols-7 gap-1`),
      n[55] === u
        ? (S = n[56])
        : ((S = Array.from({ length: 7 }, (e, t) =>
            (0, J.jsx)(
              `span`,
              {
                className: `flex size-8 items-center justify-center text-xs text-secondary`,
                children: u.formatDate(new Date(2021, 0, 3 + t), { weekday: `narrow` }),
              },
              t,
            ),
          )),
          (n[55] = u),
          (n[56] = S)),
      n[57] === m ? (C = n[58]) : ((C = Array.from({ length: m.getDay() }, W)), (n[57] = m), (n[58] = C)));
    let B;
    (n[59] !== u || n[60] !== m || n[61] !== c || n[62] !== a
      ? ((B = (e, n) => {
          let r = n + 1;
          return (0, J.jsx)(
            t,
            {
              "aria-label": u.formatDate(new Date(m.getFullYear(), m.getMonth(), r), { dateStyle: `long` }),
              "aria-pressed": r === a,
              color: r === a ? `primary` : `ghostActive`,
              radius: `full`,
              size: `iconCircle`,
              onClick: () => {
                (c(r), p(!1));
              },
              children: r,
            },
            r,
          );
        }),
        (n[59] = u),
        (n[60] = m),
        (n[61] = c),
        (n[62] = a),
        (n[63] = B))
      : (B = n[63]),
      (w = Array.from({ length: e }, B)),
      (n[0] = u),
      (n[1] = m),
      (n[2] = c),
      (n[3] = f),
      (n[4] = a),
      (n[5] = g),
      (n[6] = _),
      (n[7] = v),
      (n[8] = y),
      (n[9] = b),
      (n[10] = x),
      (n[11] = S),
      (n[12] = C),
      (n[13] = w),
      (n[14] = T),
      (n[15] = E),
      (n[16] = D),
      (n[17] = O),
      (n[18] = ne));
  } else
    ((g = n[5]),
      (_ = n[6]),
      (v = n[7]),
      (y = n[8]),
      (b = n[9]),
      (x = n[10]),
      (S = n[11]),
      (C = n[12]),
      (w = n[13]),
      (T = n[14]),
      (E = n[15]),
      (D = n[16]),
      (O = n[17]),
      (ne = n[18]));
  let k;
  n[64] !== v || n[65] !== S || n[66] !== C || n[67] !== w
    ? ((k = (0, J.jsxs)(`div`, { className: v, children: [S, C, w] })),
      (n[64] = v),
      (n[65] = S),
      (n[66] = C),
      (n[67] = w),
      (n[68] = k))
    : (k = n[68]);
  let A;
  n[69] !== k || n[70] !== T || n[71] !== E
    ? ((A = (0, J.jsxs)(`div`, { className: T, children: [E, k] })),
      (n[69] = k),
      (n[70] = T),
      (n[71] = E),
      (n[72] = A))
    : (A = n[72]);
  let j;
  n[73] !== g || n[74] !== A || n[75] !== D || n[76] !== O || n[77] !== ne
    ? ((j = (0, J.jsx)(g, { align: D, size: O, variant: ne, children: A })),
      (n[73] = g),
      (n[74] = A),
      (n[75] = D),
      (n[76] = O),
      (n[77] = ne),
      (n[78] = j))
    : (j = n[78]);
  let M;
  return (
    n[79] !== _ || n[80] !== y || n[81] !== b || n[82] !== x || n[83] !== j
      ? ((M = (0, J.jsxs)(_, { open: y, onOpenChange: b, children: [x, j] })),
        (n[79] = _),
        (n[80] = y),
        (n[81] = b),
        (n[82] = x),
        (n[83] = j),
        (n[84] = M))
      : (M = n[84]),
    M
  );
}
function W(e, t) {
  return (0, J.jsx)(`span`, {}, `blank-${t}`);
}
function G() {
  return new Date(new Date().getFullYear(), new Date().getMonth(), 1);
}
var K, q, J;
function Y() {
  return (Y = e(() => {
    ((K = C()), (q = T()), _(), x(), p(), m(), (J = w()));
  }))();
}
function X(e) {
  let t = (0, Z.c)(124),
    {
      afterScheduleRows: n,
      automation: r,
      draft: i,
      onChange: a,
      sharedPreview: o,
      weekdayLabelFormat: c,
      form: ee,
    } = e,
    l = o !== void 0 && o,
    u = ee !== void 0 && ee,
    d = h(),
    f = te(k),
    p,
    m,
    g,
    _,
    v,
    y,
    x,
    C,
    w,
    T,
    D,
    O,
    A,
    M,
    F,
    L,
    z,
    V,
    H;
  if (
    t[0] !== r ||
    t[1] !== f ||
    t[2] !== i ||
    t[3] !== u ||
    t[4] !== d ||
    t[5] !== a ||
    t[6] !== l ||
    t[7] !== c
  ) {
    C = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = fe.safeParse(f?.getDynamicConfig(`208167308`).get(`automation_capabilities`, null)),
        n = e.success ? e.data.allowed_frequencies?.filter(ue) : void 0;
      ((m = i.scheduleConfig), (_ = r.timing_mode === `condition_watch`));
      let o;
      (t[27] === m.time ? (o = t[28]) : ((o = P(m.time)), (t[27] = m.time), (t[28] = o)),
        (L = o),
        (g =
          m.mode === `daily` ||
          m.mode === `weekdays` ||
          m.mode === `weekly` ||
          m.mode === `monthly` ||
          (m.oneTimeDate != null && r.timing_mode === `flexible_schedule`)));
      let ee =
          N(r).scheduleConfig.mode === `custom` &&
          ![`daily`, `weekly`, `monthly`].includes(r.schedule_components.frequency),
        h = m.mode === `custom` ? j(m.customRrule) : null,
        te = m.mode === `custom` && !ee && h != null,
        k;
      (t[29] !== i || t[30] !== a
        ? ((k = (e) => a({ ...i, scheduleConfig: e, scheduleDirty: !0, rawRrule: null })),
          (t[29] = i),
          (t[30] = a),
          (t[31] = k))
        : (k = t[31]),
        (H = k));
      let B;
      t[32] !== m || t[33] !== H
        ? ((B = (e) =>
            H({ ...m, time: e.time, weekdays: e.weekdays, monthDay: e.monthDays[0], customRrule: E(e) })),
          (t[32] = m),
          (t[33] = H),
          (t[34] = B))
        : (B = t[34]);
      let U = B,
        W;
      t[35] !== r || t[36] !== m || t[37] !== H
        ? ((W = (e) => {
            e !== m.mode && H(ie(r, m, e));
          }),
          (t[35] = r),
          (t[36] = m),
          (t[37] = H),
          (t[38] = W))
        : (W = t[38]);
      let G = W,
        K;
      t[39] === m.mode ? (K = t[40]) : ((K = (e) => e.id === m.mode), (t[39] = m.mode), (t[40] = K));
      let q = R.find(K),
        J = R.filter((e) => n == null || n.includes(e.id === `weekdays` ? `weekly` : e.id)),
        Y;
      (t[41] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((Y = new Intl.DateTimeFormat(`sv-SE`, {
            year: `numeric`,
            month: `2-digit`,
            day: `2-digit`,
            hour: `2-digit`,
            minute: `2-digit`,
            hourCycle: `h23`,
          }).format(new Date())),
          (t[41] = Y))
        : (Y = t[41]),
        (V = Y));
      let X;
      t[42] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((X = [`morning`, `afternoon`, `evening`, `night`]), (t[42] = X))
        : (X = t[42]);
      let Z;
      t[43] === m.oneTimeDate
        ? (Z = t[44])
        : ((Z = X.filter((e) => m.oneTimeDate == null || `${m.oneTimeDate} ${re[e]}` >= V)),
          (t[43] = m.oneTimeDate),
          (t[44] = Z));
      let pe;
      if (
        (t[45] !== d || t[46] !== Z
          ? ((pe = Z.map((e) => ({ id: e, label: d.formatMessage($[e]) }))),
            (t[45] = d),
            (t[46] = Z),
            (t[47] = pe))
          : (pe = t[47]),
        (z = pe),
        u && _)
      ) {
        let e;
        t[48] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(s, { ...$.repeat })), (t[48] = e))
          : (e = t[48]);
        let n;
        (t[49] === r
          ? (n = t[50])
          : ((n = (0, Q.jsx)(b, {
              variant: `input`,
              children: (0, Q.jsx)(S, {
                variant: `nested`,
                label: e,
                control: (0, Q.jsx)(`span`, {
                  className: `text-tertiary`,
                  children: (0, Q.jsx)(de, { automation: r }),
                }),
              }),
            })),
            (t[49] = r),
            (t[50] = n)),
          (C = n));
        break bb0;
      }
      ((x = `flex flex-col gap-5`),
        (p = b),
        (w = l ? `outlined` : `default`),
        t[51] !== r || t[52] !== _
          ? ((T = _
              ? (0, Q.jsx)(S, {
                  label: (0, Q.jsx)(s, { ...$.repeat }),
                  control: (0, Q.jsx)(de, { automation: r }),
                })
              : null),
            (t[51] = r),
            (t[52] = _),
            (t[53] = T))
          : (T = t[53]),
        t[54] !== r || t[55] !== d || t[56] !== _ || t[57] !== l
          ? ((D = _ && l ? (0, Q.jsx)(S, { label: ne({ automation: r }, d), control: null }) : null),
            (t[54] = r),
            (t[55] = d),
            (t[56] = _),
            (t[57] = l),
            (t[58] = D))
          : (D = t[58]),
        (O =
          !_ && m.oneTimeDate == null && q != null
            ? (0, Q.jsx)(S, {
                label: (0, Q.jsx)(s, { ...$.repeat }),
                control: (0, Q.jsx)(I, {
                  ariaLabel: d.formatMessage($.repeat),
                  options: J.map((e) => ({ id: e.id, label: d.formatMessage(e.labelMessage) })),
                  selectedId: m.mode,
                  selectedLabel: d.formatMessage(q.labelMessage),
                  onSelect: G,
                }),
              })
            : null),
        t[59] !== m || t[60] !== d || t[61] !== _ || t[62] !== H
          ? ((A =
              !_ && m.oneTimeDate != null
                ? (0, Q.jsx)(S, {
                    label: (0, Q.jsx)(s, { ...$.date }),
                    control: (0, Q.jsx)(ae, {
                      ariaLabel: d.formatMessage($.date),
                      value: m.oneTimeDate,
                      onChange: (e) => H({ ...m, oneTimeDate: e }),
                    }),
                  })
                : null),
            (t[59] = m),
            (t[60] = d),
            (t[61] = _),
            (t[62] = H),
            (t[63] = A))
          : (A = t[63]),
        t[64] !== m || t[65] !== d || t[66] !== _ || t[67] !== H
          ? ((M =
              !_ && m.oneTimeDate == null && m.mode === `hourly`
                ? (0, Q.jsx)(S, {
                    label: (0, Q.jsx)(s, { ...$.every }),
                    control: (0, Q.jsx)(I, {
                      ariaLabel: d.formatMessage($.every),
                      options: Array.from({ length: 23 }, (e, t) => ({
                        id: String(t + 1),
                        label: d.formatMessage($.hours, { hours: t + 1 }),
                      })),
                      selectedId: String(m.intervalHours),
                      selectedLabel: d.formatMessage($.hours, { hours: m.intervalHours }),
                      onSelect: (e) => H({ ...m, intervalHours: Number(e), intervalMinutes: null }),
                    }),
                  })
                : null),
            (t[64] = m),
            (t[65] = d),
            (t[66] = _),
            (t[67] = H),
            (t[68] = M))
          : (M = t[68]),
        t[69] !== m || t[70] !== _ || t[71] !== H || t[72] !== c
          ? ((F =
              !_ && m.mode === `weekly` && m.oneTimeDate == null
                ? (0, Q.jsx)(S, {
                    label: (0, Q.jsx)(s, { ...$.daysOfWeek }),
                    control: (0, Q.jsx)(oe, {
                      value: m.weekdays,
                      onChange: (e) => H({ ...m, weekdays: e }),
                      weekdayLabelFormat: c,
                    }),
                  })
                : null),
            (t[69] = m),
            (t[70] = _),
            (t[71] = H),
            (t[72] = c),
            (t[73] = F))
          : (F = t[73]),
        t[74] !== m || t[75] !== _ || t[76] !== H
          ? ((v =
              !_ && m.mode === `monthly` && m.oneTimeDate == null
                ? (0, Q.jsx)(S, {
                    label: (0, Q.jsx)(s, { ...$.monthlyDate }),
                    control: (0, Q.jsx)(ce, {
                      value: m.monthDay ?? 1,
                      onChange: (e) => H({ ...m, monthDay: e }),
                    }),
                  })
                : null),
            (t[74] = m),
            (t[75] = _),
            (t[76] = H),
            (t[77] = v))
          : (v = t[77]),
        (y =
          !_ && te && h != null
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(S, {
                    label: (0, Q.jsx)(s, { ...$.frequency }),
                    control: (0, Q.jsx)(I, {
                      ariaLabel: d.formatMessage($.frequency),
                      options: R.filter(le).map((e) => ({
                        id: e.id,
                        label: d.formatMessage(e.labelMessage),
                      })),
                      selectedId: h.frequency,
                      selectedLabel: d.formatMessage($.customFrequency, { frequency: h.frequency }),
                      onSelect: (e) => {
                        (e === `daily` || e === `weekly` || e === `monthly`) &&
                          U({ ...h, frequency: e, interval: 1 });
                      },
                    }),
                  }),
                  h.frequency === `weekly`
                    ? (0, Q.jsx)(S, {
                        label: (0, Q.jsx)(s, { ...$.daysOfWeek }),
                        control: (0, Q.jsx)(oe, {
                          value: h.weekdays,
                          onChange: (e) => U({ ...h, weekdays: e }),
                          weekdayLabelFormat: c,
                        }),
                      })
                    : null,
                  h.frequency === `monthly`
                    ? (0, Q.jsx)(S, {
                        label: (0, Q.jsx)(s, { ...$.monthlyDate }),
                        control: (0, Q.jsx)(ce, {
                          value: h.monthDays[0] ?? 1,
                          onChange: (e) => U({ ...h, monthDays: [e] }),
                        }),
                      })
                    : null,
                  (0, Q.jsx)(S, {
                    label: (0, Q.jsx)(s, { ...$.time }),
                    control: (0, Q.jsx)(se, { value: h.time, onChange: (e) => U({ ...h, time: e }) }),
                  }),
                ],
              })
            : null));
    }
    ((t[0] = r),
      (t[1] = f),
      (t[2] = i),
      (t[3] = u),
      (t[4] = d),
      (t[5] = a),
      (t[6] = l),
      (t[7] = c),
      (t[8] = p),
      (t[9] = m),
      (t[10] = g),
      (t[11] = _),
      (t[12] = v),
      (t[13] = y),
      (t[14] = x),
      (t[15] = C),
      (t[16] = w),
      (t[17] = T),
      (t[18] = D),
      (t[19] = O),
      (t[20] = A),
      (t[21] = M),
      (t[22] = F),
      (t[23] = L),
      (t[24] = z),
      (t[25] = V),
      (t[26] = H));
  } else
    ((p = t[8]),
      (m = t[9]),
      (g = t[10]),
      (_ = t[11]),
      (v = t[12]),
      (y = t[13]),
      (x = t[14]),
      (C = t[15]),
      (w = t[16]),
      (T = t[17]),
      (D = t[18]),
      (O = t[19]),
      (A = t[20]),
      (M = t[21]),
      (F = t[22]),
      (L = t[23]),
      (z = t[24]),
      (V = t[25]),
      (H = t[26]));
  if (C !== Symbol.for(`react.early_return_sentinel`)) return C;
  let U;
  t[78] !== m || t[79] !== g || t[80] !== d || t[81] !== _ || t[82] !== L || t[83] !== z || t[84] !== H
    ? ((U =
        !_ && g
          ? (0, Q.jsx)(S, {
              label: (0, Q.jsx)(s, { ...$.time }),
              control: (0, Q.jsx)(I, {
                ariaLabel: d.formatMessage($.time),
                options: z,
                selectedId: L,
                selectedLabel: d.formatMessage($[L]),
                onSelect: (e) => H({ ...m, time: re[e], oneTimeSeconds: 0 }),
              }),
            })
          : null),
      (t[78] = m),
      (t[79] = g),
      (t[80] = d),
      (t[81] = _),
      (t[82] = L),
      (t[83] = z),
      (t[84] = H),
      (t[85] = U))
    : (U = t[85]);
  let W;
  t[86] !== m || t[87] !== g || t[88] !== _ || t[89] !== V || t[90] !== H
    ? ((W =
        !_ && m.oneTimeDate != null && !g
          ? (0, Q.jsx)(S, {
              label: (0, Q.jsx)(s, { ...$.time }),
              control: (0, Q.jsx)(se, {
                value: m.time,
                isOptionVisible: (e) => m.oneTimeDate == null || `${m.oneTimeDate} ${e}` >= V,
                onChange: (e) => H({ ...m, time: e, oneTimeSeconds: 0 }),
              }),
            })
          : null),
      (t[86] = m),
      (t[87] = g),
      (t[88] = _),
      (t[89] = V),
      (t[90] = H),
      (t[91] = W))
    : (W = t[91]);
  let G;
  t[92] !== p ||
  t[93] !== n ||
  t[94] !== v ||
  t[95] !== y ||
  t[96] !== U ||
  t[97] !== W ||
  t[98] !== w ||
  t[99] !== T ||
  t[100] !== D ||
  t[101] !== O ||
  t[102] !== A ||
  t[103] !== M ||
  t[104] !== F
    ? ((G = (0, Q.jsxs)(p, { variant: w, children: [T, D, O, A, M, F, v, y, U, W, n] })),
      (t[92] = p),
      (t[93] = n),
      (t[94] = v),
      (t[95] = y),
      (t[96] = U),
      (t[97] = W),
      (t[98] = w),
      (t[99] = T),
      (t[100] = D),
      (t[101] = O),
      (t[102] = A),
      (t[103] = M),
      (t[104] = F),
      (t[105] = G))
    : (G = t[105]);
  let K;
  t[106] !== r.default_timezone ||
  t[107] !== m ||
  t[108] !== d ||
  t[109] !== _ ||
  t[110] !== l ||
  t[111] !== H
    ? ((K =
        !_ && m.oneTimeDate == null
          ? (0, Q.jsxs)(b, {
              variant: l ? `outlined` : `default`,
              children: [
                (0, Q.jsx)(S, {
                  label: (0, Q.jsx)(s, { ...$.endRepeat }),
                  control: (0, Q.jsx)(I, {
                    ariaLabel: d.formatMessage($.endRepeat),
                    options: [
                      { id: `never`, label: d.formatMessage($.never) },
                      { id: `on-date`, label: d.formatMessage($.onDate) },
                    ],
                    selectedId: m.untilDate == null ? `never` : `on-date`,
                    selectedLabel: d.formatMessage(m.untilDate == null ? $.never : $.onDate),
                    onSelect: (e) => {
                      if (e === `never`) {
                        H({ ...m, untilDate: void 0, untilTime: void 0 });
                        return;
                      }
                      if (m.untilDate != null) return;
                      let t = new Date();
                      (t.setMonth(t.getMonth() + 1),
                        H({
                          ...m,
                          untilTime: `23:59:59`,
                          untilDate: new Intl.DateTimeFormat(`en-CA`, {
                            timeZone: r.default_timezone,
                            year: `numeric`,
                            month: `2-digit`,
                            day: `2-digit`,
                          }).format(t),
                        }));
                    },
                  }),
                }),
                m.untilDate == null
                  ? null
                  : (0, Q.jsx)(S, {
                      label: (0, Q.jsx)(s, { ...$.date }),
                      control: (0, Q.jsx)(ae, {
                        ariaLabel: d.formatMessage($.date),
                        value: m.untilDate,
                        timeZone: r.default_timezone,
                        onChange: (e) => H({ ...m, untilDate: e, untilTime: `23:59:59` }),
                      }),
                    }),
              ],
            })
          : null),
      (t[106] = r.default_timezone),
      (t[107] = m),
      (t[108] = d),
      (t[109] = _),
      (t[110] = l),
      (t[111] = H),
      (t[112] = K))
    : (K = t[112]);
  let q;
  t[113] !== _ || t[114] !== l
    ? ((q =
        _ && l
          ? (0, Q.jsx)(b, {
              variant: `outlined`,
              children: (0, Q.jsx)(S, {
                label: (0, Q.jsx)(s, { ...$.time }),
                control: (0, Q.jsx)(s, { ...$.custom }),
              }),
            })
          : null),
      (t[113] = _),
      (t[114] = l),
      (t[115] = q))
    : (q = t[115]);
  let J;
  t[116] !== x || t[117] !== G || t[118] !== K || t[119] !== q
    ? ((J = (0, Q.jsxs)(`div`, { className: x, children: [G, K, q] })),
      (t[116] = x),
      (t[117] = G),
      (t[118] = K),
      (t[119] = q),
      (t[120] = J))
    : (J = t[120]);
  let Y = J,
    X;
  return (
    t[121] !== Y || t[122] !== l
      ? ((X = l
          ? Y
          : (0, Q.jsx)(B, {
              title: (0, Q.jsx)(`span`, {
                className: `text-xs uppercase select-none`,
                children: (0, Q.jsx)(s, { ...$.frequency }),
              }),
              children: Y,
            })),
        (t[121] = Y),
        (t[122] = l),
        (t[123] = X))
      : (X = t[123]),
    X
  );
}
function le(e) {
  return e.id === `daily` || e.id === `weekly` || e.id === `monthly`;
}
function ue(e) {
  return typeof e == `string`;
}
function de(e) {
  let t = (0, Z.c)(9),
    { automation: n } = e,
    r,
    i;
  if (t[0] !== n.schedule) {
    let e = n.schedule.match(/^RRULE:(.+)$/m)?.[1];
    ((r = Number(e?.match(/(?:^|;)INTERVAL=(\d+)/)?.[1] ?? 1)),
      (i = e?.match(/(?:^|;)FREQ=(\w+)/)?.[1]),
      (t[0] = n.schedule),
      (t[1] = r),
      (t[2] = i));
  } else ((r = t[1]), (i = t[2]));
  let a = i;
  if (n.schedule_components.frequency === `custom` && Number.isSafeInteger(r) && r > 0) {
    if (a === `MINUTELY`) {
      let e;
      return (
        t[3] === r
          ? (e = t[4])
          : ((e = (0, Q.jsx)(s, { ...$.minutes, values: { minutes: r } })), (t[3] = r), (t[4] = e)),
        e
      );
    }
    if (a === `HOURLY`) {
      let e;
      return (
        t[5] === r
          ? (e = t[6])
          : ((e = (0, Q.jsx)(s, { ...$.everyHours, values: { hours: r } })), (t[5] = r), (t[6] = e)),
        e
      );
    }
  }
  let o;
  return (
    t[7] === n.schedule_components.frequency
      ? (o = t[8])
      : ((o = (0, Q.jsx)(s, { ...$.repeatValue, values: { frequency: n.schedule_components.frequency } })),
        (t[7] = n.schedule_components.frequency),
        (t[8] = o)),
    o
  );
}
var Z, Q, fe, $;
function pe() {
  return (pe = e(() => {
    ((Z = C()),
      u(),
      _(),
      a(),
      g(),
      c(),
      D(),
      H(),
      O(),
      z(),
      L(),
      V(),
      U(),
      F(),
      A(),
      Y(),
      M(),
      (Q = w()),
      (fe = y({ allowed_frequencies: v(f()).optional() })),
      ($ = n({
        frequency: {
          id: `automations.editor.schedule.frequencySectionLabel`,
          defaultMessage: `Frequency`,
          description: `Section label for the schedule controls in the Scheduled task editor`,
        },
        repeat: {
          id: `automations.editor.schedule.repeat`,
          defaultMessage: `Repeat`,
          description: `Row label for the repeat frequency in the Scheduled task editor`,
        },
        date: {
          id: `automations.editor.schedule.date`,
          defaultMessage: `Date`,
          description: `Row label for choosing the scheduled date in the Scheduled task editor`,
        },
        every: {
          id: `automations.editor.schedule.every`,
          defaultMessage: `Every`,
          description: `Row label for an hourly interval in the Scheduled task editor`,
        },
        hours: {
          id: `automations.editor.schedule.hourInterval`,
          defaultMessage: `{hours, plural, one {# hour} other {# hours}}`,
          description: `Choice of hourly interval in the Scheduled editor; hours is the number between runs`,
        },
        daysOfWeek: {
          id: `automations.editor.schedule.daysOfWeek`,
          defaultMessage: `Days of the week`,
          description: `Row label for weekdays in the Scheduled task editor`,
        },
        monthlyDate: {
          id: `automations.editor.schedule.monthlyDate`,
          defaultMessage: `Monthly date`,
          description: `Row label for choosing a day of the month in the Scheduled task editor`,
        },
        time: {
          id: `automations.editor.schedule.time`,
          defaultMessage: `Time`,
          description: `Row label for task time in the Scheduled editor`,
        },
        morning: {
          id: `automations.editor.schedule.morning`,
          defaultMessage: `Morning`,
          description: `Flexible task time option in the Scheduled editor, represented by 9 AM`,
        },
        afternoon: {
          id: `automations.editor.schedule.afternoon`,
          defaultMessage: `Afternoon`,
          description: `Flexible task time option in the Scheduled editor, represented by 2 PM`,
        },
        evening: {
          id: `automations.editor.schedule.evening`,
          defaultMessage: `Evening`,
          description: `Flexible task time option in the Scheduled editor, represented by 6 PM`,
        },
        night: {
          id: `automations.editor.schedule.night`,
          defaultMessage: `Night`,
          description: `Flexible task time option in the Scheduled editor, represented by 10 PM`,
        },
        customFrequency: {
          id: `automations.scheduled.custom.frequency`,
          defaultMessage: `{frequency, select, daily {Daily} weekly {Weekly} monthly {Monthly} other {Custom}}`,
          description: `Selected structured custom frequency in the Scheduled editor`,
        },
        endRepeat: {
          id: `automations.editor.schedule.until`,
          defaultMessage: `End repeat`,
          description: `Row label for when a repeating scheduled task stops`,
        },
        never: {
          id: `automations.editor.schedule.untilNever`,
          defaultMessage: `Never`,
          description: `End-repeat option for a scheduled task that does not expire`,
        },
        onDate: {
          id: `automations.editor.schedule.untilOnDate`,
          defaultMessage: `On date`,
          description: `End-repeat option that enables choosing an end date`,
        },
        custom: {
          id: `automations.sharing.preview.dialog.custom_task_time`,
          defaultMessage: `Custom`,
          description: `Read-only time value for a shared monitoring task`,
        },
        minutes: {
          id: `automations.scheduled.monitoring.minutes`,
          defaultMessage: `Every {minutes, plural, one {minute} other {# minutes}}`,
          description: `Monitoring interval shown in the Scheduled editor; minutes is the interval length`,
        },
        everyHours: {
          id: `automations.scheduled.monitoring.hours`,
          defaultMessage: `Every {hours, plural, one {hour} other {# hours}}`,
          description: `Monitoring interval shown in the Scheduled editor; hours is the interval length`,
        },
        repeatValue: {
          id: `automations.sharing.preview.repeatValue`,
          defaultMessage: `{frequency, select, once {Once} hourly {Hourly} daily {Daily} weekly {Weekly} monthly {Monthly} yearly {Annually} other {Custom}}`,
          description: `Repeat frequency of a shared monitoring task`,
        },
      })));
  }))();
}
export { pe as n, X as t };
//# sourceMappingURL=schedule-fields-237908040925.js.map
