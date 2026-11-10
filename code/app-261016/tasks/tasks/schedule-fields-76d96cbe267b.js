import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  FBt as n,
  HFt as r,
  IH as i,
  LNt as a,
  NH as o,
  PBt as s,
  TY as c,
  XOt as l,
  Y3 as u,
  YOt as d,
  Z3 as f,
  ZSt as p,
  _D as m,
  ew as h,
  ezt as g,
  fD as _,
  gD as v,
  iCt as y,
  kH as b,
  kLt as x,
  kRt as S,
  mD as C,
  okt as w,
  sw as T,
  tkt as E,
  uw as D,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  NPr as O,
  OPr as ee,
  fBr as k,
  fFr as A,
  lBr as j,
  wFr as M,
  xFr as N,
} from "./app-initial-ad16eaadf81f.js";
import { l as P, n as te, o as ne, t as re, u as ie } from "./schedule-draft-f9ea92400312.js";
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
} from "./automation-frequency-section-caeb4180ce42.js";
function ce(e) {
  let t = (0, K.c)(85),
    { value: n, onChange: r } = e,
    a = w(),
    [s, c] = (0, q.useState)(!1),
    [l, d] = (0, q.useState)(G),
    f,
    p,
    m,
    h,
    g,
    y,
    x,
    S,
    T,
    D,
    O,
    ee,
    k,
    A;
  if (t[0] !== a || t[1] !== l || t[2] !== r || t[3] !== s || t[4] !== n) {
    let e = new Date(l.getFullYear(), l.getMonth() + 1, 0).getDate();
    ((p = _),
      (h = s),
      t[19] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((g = (e) => {
            if (e) {
              let e = new Date();
              d(new Date(e.getFullYear(), e.getMonth(), 1));
            }
            c(e);
          }),
          (t[19] = g))
        : (g = t[19]));
    let w;
    t[20] === a
      ? (w = t[21])
      : ((w = a.formatMessage({
          id: `automations.editor.schedule.monthlyDate`,
          defaultMessage: `Monthly date`,
          description: `Label for the monthly day-of-month calendar control`,
        })),
        (t[20] = a),
        (t[21] = w));
    let j;
    t[22] === n
      ? (j = t[23])
      : ((j = (0, J.jsx)(`span`, {
          className: `truncate`,
          children: (0, J.jsx)(E, {
            id: `automations.editor.schedule.everyMonthOnDay`,
            defaultMessage: `Every month on the {day, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}`,
            description: `Summary text for a monthly schedule day selection`,
            values: { day: n },
          }),
        })),
        (t[22] = n),
        (t[23] = j));
    let M;
    (t[24] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = (0, J.jsx)(b, {})), (t[24] = M)) : (M = t[24]),
      t[25] !== w || t[26] !== j
        ? ((y = (0, J.jsx)(v, {
            asChild: !0,
            children: (0, J.jsxs)(u, {
              color: `ghost`,
              size: `composerPill`,
              "aria-label": w,
              children: [j, M],
            }),
          })),
          (t[25] = w),
          (t[26] = j),
          (t[27] = y))
        : (y = t[27]),
      (f = C),
      (ee = `end`),
      (k = `content`),
      (A = `menu`),
      (D = `flex flex-col gap-3 text-sm select-none`));
    let N;
    t[28] !== a || t[29] !== l
      ? ((N = a.formatDate(l, { month: `long`, year: `numeric` })), (t[28] = a), (t[29] = l), (t[30] = N))
      : (N = t[30]);
    let P;
    t[31] === N
      ? (P = t[32])
      : ((P = (0, J.jsx)(`span`, { className: `font-medium`, children: N })), (t[31] = N), (t[32] = P));
    let te;
    t[33] === a
      ? (te = t[34])
      : ((te = a.formatMessage({
          id: `automations.editor.schedule.previousMonth`,
          defaultMessage: `Previous month`,
          description: `Accessible label for moving the monthly calendar backward`,
        })),
        (t[33] = a),
        (t[34] = te));
    let ne;
    t[35] === l
      ? (ne = t[36])
      : ((ne = () => d(new Date(l.getFullYear(), l.getMonth() - 1, 1))), (t[35] = l), (t[36] = ne));
    let re;
    t[37] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((re = (0, J.jsx)(o, {})), (t[37] = re))
      : (re = t[37]);
    let ie;
    t[38] !== te || t[39] !== ne
      ? ((ie = (0, J.jsx)(u, {
          color: `ghost`,
          radius: `full`,
          size: `iconCircle`,
          "aria-label": te,
          onClick: ne,
          children: re,
        })),
        (t[38] = te),
        (t[39] = ne),
        (t[40] = ie))
      : (ie = t[40]);
    let F;
    t[41] === a
      ? (F = t[42])
      : ((F = a.formatMessage({
          id: `automations.editor.schedule.nextMonth`,
          defaultMessage: `Next month`,
          description: `Accessible label for moving the monthly calendar forward`,
        })),
        (t[41] = a),
        (t[42] = F));
    let I;
    t[43] === l
      ? (I = t[44])
      : ((I = () => d(new Date(l.getFullYear(), l.getMonth() + 1, 1))), (t[43] = l), (t[44] = I));
    let L;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? ((L = (0, J.jsx)(i, {})), (t[45] = L)) : (L = t[45]);
    let R;
    t[46] !== F || t[47] !== I
      ? ((R = (0, J.jsx)(u, {
          color: `ghost`,
          radius: `full`,
          size: `iconCircle`,
          "aria-label": F,
          onClick: I,
          children: L,
        })),
        (t[46] = F),
        (t[47] = I),
        (t[48] = R))
      : (R = t[48]);
    let z;
    (t[49] !== ie || t[50] !== R
      ? ((z = (0, J.jsxs)(`div`, { className: `flex gap-1`, children: [ie, R] })),
        (t[49] = ie),
        (t[50] = R),
        (t[51] = z))
      : (z = t[51]),
      t[52] !== P || t[53] !== z
        ? ((O = (0, J.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3`,
            children: [P, z],
          })),
          (t[52] = P),
          (t[53] = z),
          (t[54] = O))
        : (O = t[54]),
      (m = `grid grid-cols-7 gap-1`),
      t[55] === a
        ? (x = t[56])
        : ((x = Array.from({ length: 7 }, (e, t) =>
            (0, J.jsx)(
              `span`,
              {
                className: `flex size-8 items-center justify-center text-xs text-secondary`,
                children: a.formatDate(new Date(2021, 0, 3 + t), { weekday: `narrow` }),
              },
              t,
            ),
          )),
          (t[55] = a),
          (t[56] = x)),
      t[57] === l ? (S = t[58]) : ((S = Array.from({ length: l.getDay() }, W)), (t[57] = l), (t[58] = S)));
    let B;
    (t[59] !== a || t[60] !== l || t[61] !== r || t[62] !== n
      ? ((B = (e, t) => {
          let i = t + 1;
          return (0, J.jsx)(
            u,
            {
              "aria-label": a.formatDate(new Date(l.getFullYear(), l.getMonth(), i), { dateStyle: `long` }),
              "aria-pressed": i === n,
              color: i === n ? `primary` : `ghostActive`,
              radius: `full`,
              size: `iconCircle`,
              onClick: () => {
                (r(i), c(!1));
              },
              children: i,
            },
            i,
          );
        }),
        (t[59] = a),
        (t[60] = l),
        (t[61] = r),
        (t[62] = n),
        (t[63] = B))
      : (B = t[63]),
      (T = Array.from({ length: e }, B)),
      (t[0] = a),
      (t[1] = l),
      (t[2] = r),
      (t[3] = s),
      (t[4] = n),
      (t[5] = f),
      (t[6] = p),
      (t[7] = m),
      (t[8] = h),
      (t[9] = g),
      (t[10] = y),
      (t[11] = x),
      (t[12] = S),
      (t[13] = T),
      (t[14] = D),
      (t[15] = O),
      (t[16] = ee),
      (t[17] = k),
      (t[18] = A));
  } else
    ((f = t[5]),
      (p = t[6]),
      (m = t[7]),
      (h = t[8]),
      (g = t[9]),
      (y = t[10]),
      (x = t[11]),
      (S = t[12]),
      (T = t[13]),
      (D = t[14]),
      (O = t[15]),
      (ee = t[16]),
      (k = t[17]),
      (A = t[18]));
  let j;
  t[64] !== m || t[65] !== x || t[66] !== S || t[67] !== T
    ? ((j = (0, J.jsxs)(`div`, { className: m, children: [x, S, T] })),
      (t[64] = m),
      (t[65] = x),
      (t[66] = S),
      (t[67] = T),
      (t[68] = j))
    : (j = t[68]);
  let M;
  t[69] !== j || t[70] !== D || t[71] !== O
    ? ((M = (0, J.jsxs)(`div`, { className: D, children: [O, j] })),
      (t[69] = j),
      (t[70] = D),
      (t[71] = O),
      (t[72] = M))
    : (M = t[72]);
  let N;
  t[73] !== f || t[74] !== M || t[75] !== ee || t[76] !== k || t[77] !== A
    ? ((N = (0, J.jsx)(f, { align: ee, size: k, variant: A, children: M })),
      (t[73] = f),
      (t[74] = M),
      (t[75] = ee),
      (t[76] = k),
      (t[77] = A),
      (t[78] = N))
    : (N = t[78]);
  let P;
  return (
    t[79] !== p || t[80] !== h || t[81] !== g || t[82] !== y || t[83] !== N
      ? ((P = (0, J.jsxs)(p, { open: h, onOpenChange: g, children: [y, N] })),
        (t[79] = p),
        (t[80] = h),
        (t[81] = g),
        (t[82] = y),
        (t[83] = N),
        (t[84] = P))
      : (P = t[84]),
    P
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
    ((K = s()), (q = n()), l(), f(), c(), m(), (J = a()));
  }))();
}
function X(e) {
  let n = (0, Z.c)(124),
    {
      afterScheduleRows: r,
      automation: i,
      draft: a,
      onChange: o,
      sharedPreview: s,
      weekdayLabelFormat: c,
      form: l,
    } = e,
    u = s !== void 0 && s,
    d = l !== void 0 && l,
    f = w(),
    p = y(k),
    m,
    h,
    g,
    _,
    v,
    b,
    x,
    S,
    C,
    D,
    O,
    j,
    N,
    P,
    F,
    L,
    z,
    V,
    H;
  if (
    n[0] !== i ||
    n[1] !== p ||
    n[2] !== a ||
    n[3] !== d ||
    n[4] !== f ||
    n[5] !== o ||
    n[6] !== u ||
    n[7] !== c
  ) {
    S = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = fe.safeParse(p?.getDynamicConfig(`208167308`).get(`automation_capabilities`, null)),
        r = e.success ? e.data.allowed_frequencies?.filter(ue) : void 0;
      ((h = a.scheduleConfig), (_ = i.timing_mode === `condition_watch`));
      let s;
      (n[27] === h.time ? (s = n[28]) : ((s = ne(h.time)), (n[27] = h.time), (n[28] = s)),
        (L = s),
        (g =
          h.mode === `daily` ||
          h.mode === `weekdays` ||
          h.mode === `weekly` ||
          h.mode === `monthly` ||
          (h.oneTimeDate != null && i.timing_mode === `flexible_schedule`)));
      let l =
          te(i).scheduleConfig.mode === `custom` &&
          ![`daily`, `weekly`, `monthly`].includes(i.schedule_components.frequency),
        y = h.mode === `custom` ? M(h.customRrule) : null,
        w = h.mode === `custom` && !l && y != null,
        k;
      (n[29] !== a || n[30] !== o
        ? ((k = (e) => o({ ...a, scheduleConfig: e, scheduleDirty: !0, rawRrule: null })),
          (n[29] = a),
          (n[30] = o),
          (n[31] = k))
        : (k = n[31]),
        (H = k));
      let B;
      n[32] !== h || n[33] !== H
        ? ((B = (e) =>
            H({ ...h, time: e.time, weekdays: e.weekdays, monthDay: e.monthDays[0], customRrule: A(e) })),
          (n[32] = h),
          (n[33] = H),
          (n[34] = B))
        : (B = n[34]);
      let U = B,
        W;
      n[35] !== i || n[36] !== h || n[37] !== H
        ? ((W = (e) => {
            e !== h.mode && H(ie(i, h, e));
          }),
          (n[35] = i),
          (n[36] = h),
          (n[37] = H),
          (n[38] = W))
        : (W = n[38]);
      let G = W,
        K;
      n[39] === h.mode ? (K = n[40]) : ((K = (e) => e.id === h.mode), (n[39] = h.mode), (n[40] = K));
      let q = R.find(K),
        J = R.filter((e) => r == null || r.includes(e.id === `weekdays` ? `weekly` : e.id)),
        Y;
      (n[41] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((Y = new Intl.DateTimeFormat(`sv-SE`, {
            year: `numeric`,
            month: `2-digit`,
            day: `2-digit`,
            hour: `2-digit`,
            minute: `2-digit`,
            hourCycle: `h23`,
          }).format(new Date())),
          (n[41] = Y))
        : (Y = n[41]),
        (V = Y));
      let X;
      n[42] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((X = [`morning`, `afternoon`, `evening`, `night`]), (n[42] = X))
        : (X = n[42]);
      let Z;
      n[43] === h.oneTimeDate
        ? (Z = n[44])
        : ((Z = X.filter((e) => h.oneTimeDate == null || `${h.oneTimeDate} ${re[e]}` >= V)),
          (n[43] = h.oneTimeDate),
          (n[44] = Z));
      let pe;
      if (
        (n[45] !== f || n[46] !== Z
          ? ((pe = Z.map((e) => ({ id: e, label: f.formatMessage($[e]) }))),
            (n[45] = f),
            (n[46] = Z),
            (n[47] = pe))
          : (pe = n[47]),
        (z = pe),
        d && _)
      ) {
        let e;
        n[48] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(E, { ...$.repeat })), (n[48] = e))
          : (e = n[48]);
        let r;
        (n[49] === i
          ? (r = n[50])
          : ((r = (0, Q.jsx)(t, {
              variant: `input`,
              children: (0, Q.jsx)(T, {
                variant: `nested`,
                label: e,
                control: (0, Q.jsx)(`span`, {
                  className: `text-tertiary`,
                  children: (0, Q.jsx)(de, { automation: i }),
                }),
              }),
            })),
            (n[49] = i),
            (n[50] = r)),
          (S = r));
        break bb0;
      }
      ((x = `flex flex-col gap-5`),
        (m = t),
        (C = u ? `outlined` : `default`),
        n[51] !== i || n[52] !== _
          ? ((D = _
              ? (0, Q.jsx)(T, {
                  label: (0, Q.jsx)(E, { ...$.repeat }),
                  control: (0, Q.jsx)(de, { automation: i }),
                })
              : null),
            (n[51] = i),
            (n[52] = _),
            (n[53] = D))
          : (D = n[53]),
        n[54] !== i || n[55] !== f || n[56] !== _ || n[57] !== u
          ? ((O = _ && u ? (0, Q.jsx)(T, { label: ee({ automation: i }, f), control: null }) : null),
            (n[54] = i),
            (n[55] = f),
            (n[56] = _),
            (n[57] = u),
            (n[58] = O))
          : (O = n[58]),
        (j =
          !_ && h.oneTimeDate == null && q != null
            ? (0, Q.jsx)(T, {
                label: (0, Q.jsx)(E, { ...$.repeat }),
                control: (0, Q.jsx)(I, {
                  ariaLabel: f.formatMessage($.repeat),
                  options: J.map((e) => ({ id: e.id, label: f.formatMessage(e.labelMessage) })),
                  selectedId: h.mode,
                  selectedLabel: f.formatMessage(q.labelMessage),
                  onSelect: G,
                }),
              })
            : null),
        n[59] !== h || n[60] !== f || n[61] !== _ || n[62] !== H
          ? ((N =
              !_ && h.oneTimeDate != null
                ? (0, Q.jsx)(T, {
                    label: (0, Q.jsx)(E, { ...$.date }),
                    control: (0, Q.jsx)(ae, {
                      ariaLabel: f.formatMessage($.date),
                      value: h.oneTimeDate,
                      onChange: (e) => H({ ...h, oneTimeDate: e }),
                    }),
                  })
                : null),
            (n[59] = h),
            (n[60] = f),
            (n[61] = _),
            (n[62] = H),
            (n[63] = N))
          : (N = n[63]),
        n[64] !== h || n[65] !== f || n[66] !== _ || n[67] !== H
          ? ((P =
              !_ && h.oneTimeDate == null && h.mode === `hourly`
                ? (0, Q.jsx)(T, {
                    label: (0, Q.jsx)(E, { ...$.every }),
                    control: (0, Q.jsx)(I, {
                      ariaLabel: f.formatMessage($.every),
                      options: Array.from({ length: 23 }, (e, t) => ({
                        id: String(t + 1),
                        label: f.formatMessage($.hours, { hours: t + 1 }),
                      })),
                      selectedId: String(h.intervalHours),
                      selectedLabel: f.formatMessage($.hours, { hours: h.intervalHours }),
                      onSelect: (e) => H({ ...h, intervalHours: Number(e), intervalMinutes: null }),
                    }),
                  })
                : null),
            (n[64] = h),
            (n[65] = f),
            (n[66] = _),
            (n[67] = H),
            (n[68] = P))
          : (P = n[68]),
        n[69] !== h || n[70] !== _ || n[71] !== H || n[72] !== c
          ? ((F =
              !_ && h.mode === `weekly` && h.oneTimeDate == null
                ? (0, Q.jsx)(T, {
                    label: (0, Q.jsx)(E, { ...$.daysOfWeek }),
                    control: (0, Q.jsx)(oe, {
                      value: h.weekdays,
                      onChange: (e) => H({ ...h, weekdays: e }),
                      weekdayLabelFormat: c,
                    }),
                  })
                : null),
            (n[69] = h),
            (n[70] = _),
            (n[71] = H),
            (n[72] = c),
            (n[73] = F))
          : (F = n[73]),
        n[74] !== h || n[75] !== _ || n[76] !== H
          ? ((v =
              !_ && h.mode === `monthly` && h.oneTimeDate == null
                ? (0, Q.jsx)(T, {
                    label: (0, Q.jsx)(E, { ...$.monthlyDate }),
                    control: (0, Q.jsx)(ce, {
                      value: h.monthDay ?? 1,
                      onChange: (e) => H({ ...h, monthDay: e }),
                    }),
                  })
                : null),
            (n[74] = h),
            (n[75] = _),
            (n[76] = H),
            (n[77] = v))
          : (v = n[77]),
        (b =
          !_ && w && y != null
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(T, {
                    label: (0, Q.jsx)(E, { ...$.frequency }),
                    control: (0, Q.jsx)(I, {
                      ariaLabel: f.formatMessage($.frequency),
                      options: R.filter(le).map((e) => ({
                        id: e.id,
                        label: f.formatMessage(e.labelMessage),
                      })),
                      selectedId: y.frequency,
                      selectedLabel: f.formatMessage($.customFrequency, { frequency: y.frequency }),
                      onSelect: (e) => {
                        (e === `daily` || e === `weekly` || e === `monthly`) &&
                          U({ ...y, frequency: e, interval: 1 });
                      },
                    }),
                  }),
                  y.frequency === `weekly`
                    ? (0, Q.jsx)(T, {
                        label: (0, Q.jsx)(E, { ...$.daysOfWeek }),
                        control: (0, Q.jsx)(oe, {
                          value: y.weekdays,
                          onChange: (e) => U({ ...y, weekdays: e }),
                          weekdayLabelFormat: c,
                        }),
                      })
                    : null,
                  y.frequency === `monthly`
                    ? (0, Q.jsx)(T, {
                        label: (0, Q.jsx)(E, { ...$.monthlyDate }),
                        control: (0, Q.jsx)(ce, {
                          value: y.monthDays[0] ?? 1,
                          onChange: (e) => U({ ...y, monthDays: [e] }),
                        }),
                      })
                    : null,
                  (0, Q.jsx)(T, {
                    label: (0, Q.jsx)(E, { ...$.time }),
                    control: (0, Q.jsx)(se, { value: y.time, onChange: (e) => U({ ...y, time: e }) }),
                  }),
                ],
              })
            : null));
    }
    ((n[0] = i),
      (n[1] = p),
      (n[2] = a),
      (n[3] = d),
      (n[4] = f),
      (n[5] = o),
      (n[6] = u),
      (n[7] = c),
      (n[8] = m),
      (n[9] = h),
      (n[10] = g),
      (n[11] = _),
      (n[12] = v),
      (n[13] = b),
      (n[14] = x),
      (n[15] = S),
      (n[16] = C),
      (n[17] = D),
      (n[18] = O),
      (n[19] = j),
      (n[20] = N),
      (n[21] = P),
      (n[22] = F),
      (n[23] = L),
      (n[24] = z),
      (n[25] = V),
      (n[26] = H));
  } else
    ((m = n[8]),
      (h = n[9]),
      (g = n[10]),
      (_ = n[11]),
      (v = n[12]),
      (b = n[13]),
      (x = n[14]),
      (S = n[15]),
      (C = n[16]),
      (D = n[17]),
      (O = n[18]),
      (j = n[19]),
      (N = n[20]),
      (P = n[21]),
      (F = n[22]),
      (L = n[23]),
      (z = n[24]),
      (V = n[25]),
      (H = n[26]));
  if (S !== Symbol.for(`react.early_return_sentinel`)) return S;
  let U;
  n[78] !== h || n[79] !== g || n[80] !== f || n[81] !== _ || n[82] !== L || n[83] !== z || n[84] !== H
    ? ((U =
        !_ && g
          ? (0, Q.jsx)(T, {
              label: (0, Q.jsx)(E, { ...$.time }),
              control: (0, Q.jsx)(I, {
                ariaLabel: f.formatMessage($.time),
                options: z,
                selectedId: L,
                selectedLabel: f.formatMessage($[L]),
                onSelect: (e) => H({ ...h, time: re[e], oneTimeSeconds: 0 }),
              }),
            })
          : null),
      (n[78] = h),
      (n[79] = g),
      (n[80] = f),
      (n[81] = _),
      (n[82] = L),
      (n[83] = z),
      (n[84] = H),
      (n[85] = U))
    : (U = n[85]);
  let W;
  n[86] !== h || n[87] !== g || n[88] !== _ || n[89] !== V || n[90] !== H
    ? ((W =
        !_ && h.oneTimeDate != null && !g
          ? (0, Q.jsx)(T, {
              label: (0, Q.jsx)(E, { ...$.time }),
              control: (0, Q.jsx)(se, {
                value: h.time,
                isOptionVisible: (e) => h.oneTimeDate == null || `${h.oneTimeDate} ${e}` >= V,
                onChange: (e) => H({ ...h, time: e, oneTimeSeconds: 0 }),
              }),
            })
          : null),
      (n[86] = h),
      (n[87] = g),
      (n[88] = _),
      (n[89] = V),
      (n[90] = H),
      (n[91] = W))
    : (W = n[91]);
  let G;
  n[92] !== m ||
  n[93] !== r ||
  n[94] !== v ||
  n[95] !== b ||
  n[96] !== U ||
  n[97] !== W ||
  n[98] !== C ||
  n[99] !== D ||
  n[100] !== O ||
  n[101] !== j ||
  n[102] !== N ||
  n[103] !== P ||
  n[104] !== F
    ? ((G = (0, Q.jsxs)(m, { variant: C, children: [D, O, j, N, P, F, v, b, U, W, r] })),
      (n[92] = m),
      (n[93] = r),
      (n[94] = v),
      (n[95] = b),
      (n[96] = U),
      (n[97] = W),
      (n[98] = C),
      (n[99] = D),
      (n[100] = O),
      (n[101] = j),
      (n[102] = N),
      (n[103] = P),
      (n[104] = F),
      (n[105] = G))
    : (G = n[105]);
  let K;
  n[106] !== i.default_timezone ||
  n[107] !== h ||
  n[108] !== f ||
  n[109] !== _ ||
  n[110] !== u ||
  n[111] !== H
    ? ((K =
        !_ && h.oneTimeDate == null
          ? (0, Q.jsxs)(t, {
              variant: u ? `outlined` : `default`,
              children: [
                (0, Q.jsx)(T, {
                  label: (0, Q.jsx)(E, { ...$.endRepeat }),
                  control: (0, Q.jsx)(I, {
                    ariaLabel: f.formatMessage($.endRepeat),
                    options: [
                      { id: `never`, label: f.formatMessage($.never) },
                      { id: `on-date`, label: f.formatMessage($.onDate) },
                    ],
                    selectedId: h.untilDate == null ? `never` : `on-date`,
                    selectedLabel: f.formatMessage(h.untilDate == null ? $.never : $.onDate),
                    onSelect: (e) => {
                      if (e === `never`) {
                        H({ ...h, untilDate: void 0, untilTime: void 0 });
                        return;
                      }
                      if (h.untilDate != null) return;
                      let t = new Date();
                      (t.setMonth(t.getMonth() + 1),
                        H({
                          ...h,
                          untilTime: `23:59:59`,
                          untilDate: new Intl.DateTimeFormat(`en-CA`, {
                            timeZone: i.default_timezone,
                            year: `numeric`,
                            month: `2-digit`,
                            day: `2-digit`,
                          }).format(t),
                        }));
                    },
                  }),
                }),
                h.untilDate == null
                  ? null
                  : (0, Q.jsx)(T, {
                      label: (0, Q.jsx)(E, { ...$.date }),
                      control: (0, Q.jsx)(ae, {
                        ariaLabel: f.formatMessage($.date),
                        value: h.untilDate,
                        timeZone: i.default_timezone,
                        onChange: (e) => H({ ...h, untilDate: e, untilTime: `23:59:59` }),
                      }),
                    }),
              ],
            })
          : null),
      (n[106] = i.default_timezone),
      (n[107] = h),
      (n[108] = f),
      (n[109] = _),
      (n[110] = u),
      (n[111] = H),
      (n[112] = K))
    : (K = n[112]);
  let q;
  n[113] !== _ || n[114] !== u
    ? ((q =
        _ && u
          ? (0, Q.jsx)(t, {
              variant: `outlined`,
              children: (0, Q.jsx)(T, {
                label: (0, Q.jsx)(E, { ...$.time }),
                control: (0, Q.jsx)(E, { ...$.custom }),
              }),
            })
          : null),
      (n[113] = _),
      (n[114] = u),
      (n[115] = q))
    : (q = n[115]);
  let J;
  n[116] !== x || n[117] !== G || n[118] !== K || n[119] !== q
    ? ((J = (0, Q.jsxs)(`div`, { className: x, children: [G, K, q] })),
      (n[116] = x),
      (n[117] = G),
      (n[118] = K),
      (n[119] = q),
      (n[120] = J))
    : (J = n[120]);
  let Y = J,
    X;
  return (
    n[121] !== Y || n[122] !== u
      ? ((X = u
          ? Y
          : (0, Q.jsx)(B, {
              title: (0, Q.jsx)(`span`, {
                className: `text-xs uppercase select-none`,
                children: (0, Q.jsx)(E, { ...$.frequency }),
              }),
              children: Y,
            })),
        (n[121] = Y),
        (n[122] = u),
        (n[123] = X))
      : (X = n[123]),
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
          : ((e = (0, Q.jsx)(E, { ...$.minutes, values: { minutes: r } })), (t[3] = r), (t[4] = e)),
        e
      );
    }
    if (a === `HOURLY`) {
      let e;
      return (
        t[5] === r
          ? (e = t[6])
          : ((e = (0, Q.jsx)(E, { ...$.everyHours, values: { hours: r } })), (t[5] = r), (t[6] = e)),
        e
      );
    }
  }
  let o;
  return (
    t[7] === n.schedule_components.frequency
      ? (o = t[8])
      : ((o = (0, Q.jsx)(E, { ...$.repeatValue, values: { frequency: n.schedule_components.frequency } })),
        (t[7] = n.schedule_components.frequency),
        (t[8] = o)),
    o
  );
}
var Z, Q, fe, $;
function pe() {
  return (pe = e(() => {
    ((Z = s()),
      p(),
      l(),
      r(),
      D(),
      h(),
      j(),
      H(),
      N(),
      z(),
      L(),
      V(),
      U(),
      F(),
      O(),
      Y(),
      P(),
      (Q = a()),
      (fe = S({ allowed_frequencies: x(g()).optional() })),
      ($ = d({
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
//# sourceMappingURL=schedule-fields-76d96cbe267b.js.map
