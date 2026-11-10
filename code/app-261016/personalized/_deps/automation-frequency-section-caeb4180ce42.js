import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  B1 as n,
  DB as r,
  Dg as i,
  FBt as a,
  HO as o,
  IO as s,
  JO as c,
  JOt as l,
  KO as u,
  LNt as d,
  LO as f,
  MNt as p,
  NNt as m,
  OB as h,
  Og as g,
  PBt as _,
  RO as v,
  WO as y,
  XOt as b,
  Y3 as x,
  YOt as S,
  Z3 as C,
  _D as w,
  b2 as T,
  ck as E,
  ew as D,
  fD as ee,
  l2 as te,
  mD as O,
  nB as ne,
  okt as re,
  pD as ie,
  qO as k,
  rB as A,
  rk as ae,
  sw as j,
  tk as M,
  tkt as oe,
  u2 as se,
  uw as ce,
  y2 as le,
  z1 as ue,
  zO as de,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as N,
  BFt as fe,
  NPr as P,
  SFr as pe,
  ZLn as F,
  _Fr as me,
  bFr as I,
  fFr as he,
  jPr as ge,
  mFr as _e,
  vFr as L,
  wFr as ve,
  xFr as ye,
  zFt as be,
} from "./app-initial-ad16eaadf81f.js";
import { n as xe, t as Se } from "./DatePicker-aa68df19788f.js";
function R(e, t) {
  let n = I(e);
  return n ? t.formatTime(new Date(2024, 0, 1, n.hour, n.minute), { hour: `numeric`, minute: `2-digit` }) : e;
}
var Ce, z, we, B, V, Te, Ee, De, Oe;
function H() {
  return (H = e(() => {
    (b(),
      ye(),
      (Ce = 1440),
      (z = 15),
      (we = Array.from({ length: Ce / z }, (e, t) => {
        let n = t * z;
        return L(Math.floor(n / 60), n % 60);
      })),
      (B = [
        {
          id: `hourly`,
          labelMessage: l({
            id: `settings.automations.scheduleMode.interval`,
            defaultMessage: `Interval`,
            description: `Dropdown label for a repeating automation interval schedule`,
          }),
        },
        {
          id: `daily`,
          labelMessage: l({
            id: `settings.automations.scheduleMode.daily`,
            defaultMessage: `Daily`,
            description: `Dropdown label for a daily automation schedule`,
          }),
        },
        {
          id: `weekdays`,
          labelMessage: l({
            id: `settings.automations.scheduleMode.weekdays`,
            defaultMessage: `Weekdays`,
            description: `Dropdown label for a weekdays-only automation schedule`,
          }),
        },
        {
          id: `weekly`,
          labelMessage: l({
            id: `settings.automations.scheduleMode.weekly`,
            defaultMessage: `Weekly`,
            description: `Dropdown label for a weekly automation schedule`,
          }),
        },
      ]),
      (V = {
        id: `custom`,
        labelMessage: l({
          id: `settings.automations.scheduleMode.custom`,
          defaultMessage: `Custom`,
          description: `Dropdown label for a custom automation schedule`,
        }),
      }),
      (Te = [...B, V]),
      (Ee = [
        ...B,
        {
          id: `monthly`,
          labelMessage: l({
            id: `settings.automations.scheduleMode.monthly`,
            defaultMessage: `Monthly`,
            description: `Dropdown label for a monthly cloud automation schedule`,
          }),
        },
        V,
      ]),
      (De = Array.from({ length: 31 }, (e, t) => t + 1)),
      (Oe = [
        {
          id: `MO`,
          labelMessage: l({
            id: `settings.automations.rrule.weekday.mon`,
            defaultMessage: `Mo`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: l({
            id: `settings.automations.rrule.weekday.monday`,
            defaultMessage: `Monday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `TU`,
          labelMessage: l({
            id: `settings.automations.rrule.weekday.tue`,
            defaultMessage: `Tu`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: l({
            id: `settings.automations.rrule.weekday.tuesday`,
            defaultMessage: `Tuesday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `WE`,
          labelMessage: l({
            id: `settings.automations.rrule.weekday.wed`,
            defaultMessage: `We`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: l({
            id: `settings.automations.rrule.weekday.wednesday`,
            defaultMessage: `Wednesday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `TH`,
          labelMessage: l({
            id: `settings.automations.rrule.weekday.thu`,
            defaultMessage: `Th`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: l({
            id: `settings.automations.rrule.weekday.thursday`,
            defaultMessage: `Thursday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `FR`,
          labelMessage: l({
            id: `settings.automations.rrule.weekday.fri`,
            defaultMessage: `Fr`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: l({
            id: `settings.automations.rrule.weekday.friday`,
            defaultMessage: `Friday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `SA`,
          labelMessage: l({
            id: `settings.automations.rrule.weekday.sat`,
            defaultMessage: `Sa`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: l({
            id: `settings.automations.rrule.weekday.saturday`,
            defaultMessage: `Saturday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `SU`,
          labelMessage: l({
            id: `settings.automations.rrule.weekday.sun`,
            defaultMessage: `Su`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: l({
            id: `settings.automations.rrule.weekday.sunday`,
            defaultMessage: `Sunday`,
            description: `RRULE weekday long label`,
          }),
        },
      ]));
  }))();
}
function ke(e) {
  let t = (0, W.c)(26),
    { appearance: n, value: a, onChange: o } = e,
    s = n === void 0 ? `default` : n,
    c = re(),
    [l, u] = (0, G.useState)(null),
    d;
  t[0] !== c || t[1] !== a
    ? ((d =
        a.length <= 3
          ? a.join(`, `)
          : c.formatMessage(
              {
                id: `inbox.automations.customMonthDays.summary`,
                defaultMessage: `{count, plural, one {# day} other {# days}}`,
                description: `Summary of selected days in a custom monthly schedule`,
              },
              { count: a.length },
            )),
      (t[0] = c),
      (t[1] = a),
      (t[2] = d))
    : (d = t[2]);
  let f = d,
    m;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (e) => {
        u(e?.closest(`.codex-dialog`) ?? null);
      }),
      (t[3] = m))
    : (m = t[3]);
  let h;
  t[4] === c
    ? (h = t[5])
    : ((h = c.formatMessage({
        id: `inbox.automations.customMonthDays.ariaLabel`,
        defaultMessage: `Days of the month`,
        description: `Accessible label for the custom schedule days of month selector`,
      })),
      (t[4] = c),
      (t[5] = h));
  let g = s === `form` ? `ghostTertiary` : `ghost`,
    _ = s === `form` ? `formValue` : `composerSm`,
    v = s === "default" && `text-base text-default`,
    y;
  t[6] === v ? (y = t[7]) : ((y = p(`max-w-40 truncate tabular-nums`, v)), (t[6] = v), (t[7] = y));
  let b;
  t[8] !== f || t[9] !== y
    ? ((b = (0, K.jsx)(`span`, { className: y, children: f })), (t[8] = f), (t[9] = y), (t[10] = b))
    : (b = t[10]);
  let S = s === `form` ? i : te,
    C;
  t[11] === S ? (C = t[12]) : ((C = (0, K.jsx)(r, { asset: S })), (t[11] = S), (t[12] = C));
  let w;
  t[13] !== C || t[14] !== h || t[15] !== g || t[16] !== _ || t[17] !== b
    ? ((w = (0, K.jsxs)(x, {
        ref: m,
        "aria-label": h,
        className: `max-w-full min-w-0`,
        color: g,
        size: _,
        children: [b, C],
      })),
      (t[13] = C),
      (t[14] = h),
      (t[15] = g),
      (t[16] = _),
      (t[17] = b),
      (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] !== o || t[20] !== a
    ? ((T = De.map((e) => {
        let t = a.includes(e);
        return (0, K.jsx)(
          ae.CheckboxItem,
          {
            checked: t,
            onCheckedChange: (t) => {
              let n = t === !0 ? [...a, e].sort(U) : a.filter((t) => t !== e);
              n.length > 0 && o(n);
            },
            children: e,
          },
          e,
        );
      })),
      (t[19] = o),
      (t[20] = a),
      (t[21] = T))
    : (T = t[21]);
  let E;
  return (
    t[22] !== l || t[23] !== w || t[24] !== T
      ? ((E = (0, K.jsx)(M, {
          scrollFade: !0,
          align: `end`,
          contentMaxHeight: `tall`,
          contentWidth: `sm`,
          portalContainer: l,
          triggerButton: w,
          children: T,
        })),
        (t[22] = l),
        (t[23] = w),
        (t[24] = T),
        (t[25] = E))
      : (E = t[25]),
    E
  );
}
function U(e, t) {
  return e - t;
}
var W, G, K;
function Ae() {
  return (Ae = e(() => {
    ((W = _()), se(), g(), m(), (G = a()), b(), H(), C(), E(), h(), (K = d()));
  }))();
}
function je(e) {
  let t = (0, q.c)(24),
    { appearance: n, ariaLabel: r, max: i, min: a, step: o, suffix: s, value: c, onChange: l } = e,
    u = n === void 0 ? `default` : n,
    d = o === void 0 ? 1 : o,
    f = u === `form` ? `text-form-body` : `text-base`,
    m;
  t[0] === f ? (m = t[1]) : ((m = p(`flex items-center gap-1.5 text-default`, f)), (t[0] = f), (t[1] = m));
  let h = String(c),
    g = d === 1 ? `numeric` : `decimal`,
    _ = d === 1 ? `[0-9]*` : `[0-9]*[.]?[0-9]*`,
    v;
  t[2] !== i || t[3] !== a || t[4] !== l || t[5] !== d || t[6] !== c
    ? ((v = (e) => {
        if (e.currentTarget.value === String(c)) return;
        if (e.currentTarget.value.length === 0 || !Number.isFinite(Number(e.currentTarget.value))) {
          e.currentTarget.value = String(c);
          return;
        }
        let t = Math.min(i, Math.max(a, Math.round(Number(e.currentTarget.value) / d) * d));
        ((e.currentTarget.value = String(t)), t !== c && l(t));
      }),
      (t[2] = i),
      (t[3] = a),
      (t[4] = l),
      (t[5] = d),
      (t[6] = c),
      (t[7] = v))
    : (v = t[7]);
  let y;
  t[8] === d
    ? (y = t[9])
    : ((y = (e) => {
        e.currentTarget.value = e.currentTarget.value.replaceAll(d === 1 ? /[^0-9]/g : /[^0-9.]/g, ``);
      }),
      (t[8] = d),
      (t[9] = y));
  let b;
  t[10] !== r || t[11] !== h || t[12] !== g || t[13] !== _ || t[14] !== v || t[15] !== y || t[16] !== c
    ? ((b = (0, J.jsx)(
        `input`,
        {
          "aria-label": r,
          className: `w-12 bg-transparent text-end tabular-nums outline-none`,
          defaultValue: h,
          inputMode: g,
          pattern: _,
          type: `text`,
          onBlur: v,
          onChange: y,
        },
        c,
      )),
      (t[10] = r),
      (t[11] = h),
      (t[12] = g),
      (t[13] = _),
      (t[14] = v),
      (t[15] = y),
      (t[16] = c),
      (t[17] = b))
    : (b = t[17]);
  let x;
  t[18] === s
    ? (x = t[19])
    : ((x = s == null ? null : (0, J.jsx)(`span`, { className: `text-codex-description`, children: s })),
      (t[18] = s),
      (t[19] = x));
  let S;
  return (
    t[20] !== b || t[21] !== x || t[22] !== m
      ? ((S = (0, J.jsxs)(`label`, { className: m, children: [b, x] })),
        (t[20] = b),
        (t[21] = x),
        (t[22] = m),
        (t[23] = S))
      : (S = t[23]),
    S
  );
}
var q, J;
function Me() {
  return (Me = e(() => {
    ((q = _()), m(), (J = d()));
  }))();
}
function Ne(e, t) {
  let n = e
      .trim()
      .toLowerCase()
      .replace(/([ap])\.?m\.?$/, `$1m`),
    r = /^(\d{1,4})(?::(\d{2}))?\s*([ap](?:m)?)?$/.exec(n);
  if (r == null) return null;
  let [, i = ``, a, o] = r;
  if (a != null && i.length > 2) return null;
  let s = Number(i.length > 2 ? i.slice(0, -2) : i),
    c = Number(a ?? (i.length > 2 ? i.slice(-2) : `0`));
  if (c > 59 || s > (o == null ? 23 : 12) || (o != null && s < 1)) return null;
  if (o != null) s = (s % 12) + (o.startsWith(`p`) ? 12 : 0);
  else if (t != null && s >= 1 && s <= 12 && !i.startsWith(`0`)) {
    let e = Number(t.slice(0, 2)) * 60 + Number(t.slice(3)),
      n = s % 12;
    s = [n, n + 12].find((t) => t * 60 + c > e) ?? n;
  }
  return `${String(s).padStart(2, `0`)}:${String(c).padStart(2, `0`)}`;
}
function Pe(e) {
  let t = (0, ze.c)(112),
    { appearance: n, value: a, onChange: o, isOptionVisible: s, timeZone: c, date: l } = e,
    u = n === void 0 ? `default` : n,
    d = re(),
    f = (0, Y.useId)(),
    m = (0, Y.useRef)(null),
    h = (0, Y.useRef)(a),
    [g, _] = (0, Y.useState)(!1),
    [v, y] = (0, Y.useState)(!1),
    [b, x] = (0, Y.useState)(``),
    [S, C] = (0, Y.useState)(null),
    [w, T] = (0, Y.useState)(a),
    [E, D] = (0, Y.useState)(),
    ne;
  t[0] !== s || t[1] !== a
    ? ((ne = [...new Set([...we, a])].filter((e) => s?.(e) ?? !0).sort()),
      (t[0] = s),
      (t[1] = a),
      (t[2] = ne))
    : (ne = t[2]);
  let k = ne,
    A;
  t[3] !== s || t[4] !== S
    ? ((A = S != null && (s?.(S) ?? !0)), (t[3] = s), (t[4] = S), (t[5] = A))
    : (A = t[5]);
  let ae = A,
    j;
  t[6] === d
    ? (j = t[7])
    : ((j = d.formatMessage({
        id: `settings.automations.scheduleTime`,
        defaultMessage: `Time`,
        description: `Accessible label for the automation schedule time input`,
      })),
      (t[6] = d),
      (t[7] = j));
  let M = j,
    oe;
  t[8] !== l || t[9] !== d || t[10] !== c || t[11] !== a
    ? ((oe =
        c == null
          ? R(a, d)
          : d.formatTime(ge(l ?? `2026-01-01`, a, c, 0), {
              timeZone: c,
              hour: `numeric`,
              minute: `2-digit`,
              timeZoneName: l == null ? `shortGeneric` : `short`,
            })),
      (t[8] = l),
      (t[9] = d),
      (t[10] = c),
      (t[11] = a),
      (t[12] = oe))
    : (oe = t[12]);
  let se = oe,
    ce;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = () => {
        (_(!1), y(!1), x(``));
      }),
      (t[13] = ce))
    : (ce = t[13]);
  let ue = ce,
    de;
  t[14] !== v || t[15] !== o || t[16] !== S || t[17] !== ae
    ? ((de = () => {
        (v && ae && o(S), ue());
      }),
      (t[14] = v),
      (t[15] = o),
      (t[16] = S),
      (t[17] = ae),
      (t[18] = de))
    : (de = t[18]);
  let N = de,
    fe;
  t[19] === o
    ? (fe = t[20])
    : ((fe = (e) => {
        (o(e), ue(), m.current?.focus());
      }),
      (t[19] = o),
      (t[20] = fe));
  let P = fe,
    pe;
  t[21] !== g || t[22] !== a
    ? ((pe = () => {
        g || (T(a), _(!0));
      }),
      (t[21] = g),
      (t[22] = a),
      (t[23] = pe))
    : (pe = t[23]);
  let F = pe,
    me;
  t[24] !== v || t[25] !== k || t[26] !== S || t[27] !== a
    ? ((me = (e) => {
        (x(e), v ? e === `` && S != null && (h.current = S) : (h.current = a));
        let t = Ne(e, h.current);
        if ((C(t), t != null && k.length > 0)) {
          let e = Re,
            n = e(t),
            r = k.reduce((t, r) => (Math.abs(e(r) - n) < Math.abs(e(t) - n) ? r : t));
          T(r);
        }
      }),
      (t[24] = v),
      (t[25] = k),
      (t[26] = S),
      (t[27] = a),
      (t[28] = me))
    : (me = t[28]);
  let I = me,
    he;
  t[29] !== N || t[30] !== F
    ? ((he = (e) => {
        e ? F() : N();
      }),
      (t[29] = N),
      (t[30] = F),
      (t[31] = he))
    : (he = t[31]);
  let _e =
      u === `form`
        ? `min-h-10 text-form-body text-secondary`
        : `h-token-button-composer-sm text-base leading-5 text-tertiary`,
    L;
  t[32] === _e
    ? (L = t[33])
    : ((L = p(
        `inline-flex min-w-0 items-center gap-2 rounded-md has-focus-visible:outline has-focus-visible:outline-2`,
        _e,
      )),
      (t[32] = _e),
      (t[33] = L));
  let ve = g ? f : void 0,
    ye = g ? `${f}-${w}` : void 0,
    be = v && b !== `` && !ae,
    xe = !v,
    Se = v ? b : se,
    Ce = Math.max(se.length, b.length, 5),
    z = !v && `cursor-interaction caret-transparent`,
    B;
  t[34] === z
    ? (B = t[35])
    : ((B = p(
        `min-w-0 max-w-full border-0 bg-transparent p-0 text-end text-[length:inherit] leading-[inherit] text-inherit tabular-nums outline-none`,
        z,
      )),
      (t[34] = z),
      (t[35] = B));
  let V;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (e) => D(e.currentTarget.closest(`[role="dialog"]`) ?? void 0)), (t[36] = V))
    : (V = t[36]);
  let Te;
  t[37] === I ? (Te = t[38]) : ((Te = (e) => I(e.target.value)), (t[37] = I), (t[38] = Te));
  let Ee;
  t[39] !== w ||
  t[40] !== N ||
  t[41] !== v ||
  t[42] !== b.length ||
  t[43] !== g ||
  t[44] !== k ||
  t[45] !== S ||
  t[46] !== P ||
  t[47] !== F ||
  t[48] !== I ||
  t[49] !== ae
    ? ((Ee = (e) => {
        if (!e.nativeEvent.isComposing) {
          if (
            (v &&
              S != null &&
              e.currentTarget.selectionStart === 0 &&
              e.currentTarget.selectionEnd === b.length &&
              !e.metaKey &&
              !e.ctrlKey &&
              !e.altKey &&
              (e.key.length === 1 || e.key === `Backspace` || e.key === `Delete`) &&
              (h.current = S),
            e.key === `Escape`)
          )
            (e.preventDefault(), e.stopPropagation(), ue());
          else if (e.key === `Tab`) N();
          else if (e.key === `Enter`)
            (e.preventDefault(), e.stopPropagation(), g ? (v ? ae && N() : k.includes(w) && P(w)) : F());
          else if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
            if ((e.preventDefault(), !g)) F();
            else {
              let t = k.indexOf(w),
                n = k[Math.max(0, Math.min(k.length - 1, t + (e.key === `ArrowDown` ? 1 : -1)))];
              n != null &&
                (T(n),
                C(n),
                x(
                  `${Number(n.slice(0, 2)) % 12 || 12}:${n.slice(3)} ${Number(n.slice(0, 2)) >= 12 ? `pm` : `am`}`,
                ),
                y(!0));
            }
          } else
            !v &&
              !e.metaKey &&
              !e.ctrlKey &&
              !e.altKey &&
              (e.key.length === 1 || e.key === `Backspace` || e.key === `Delete`) &&
              (e.preventDefault(), F(), y(!0), I(e.key.length === 1 ? e.key : ``));
        }
      }),
      (t[39] = w),
      (t[40] = N),
      (t[41] = v),
      (t[42] = b.length),
      (t[43] = g),
      (t[44] = k),
      (t[45] = S),
      (t[46] = P),
      (t[47] = F),
      (t[48] = I),
      (t[49] = ae),
      (t[50] = Ee))
    : (Ee = t[50]);
  let De;
  t[51] !== v || t[52] !== S || t[53] !== F || t[54] !== I
    ? ((De = (e) => {
        (e.preventDefault(),
          F(),
          y(!0),
          v && S != null && (h.current = S),
          I(e.clipboardData.getData(`text`)));
      }),
      (t[51] = v),
      (t[52] = S),
      (t[53] = F),
      (t[54] = I),
      (t[55] = De))
    : (De = t[55]);
  let Oe;
  t[56] !== M ||
  t[57] !== g ||
  t[58] !== F ||
  t[59] !== ve ||
  t[60] !== ye ||
  t[61] !== be ||
  t[62] !== xe ||
  t[63] !== Se ||
  t[64] !== Ce ||
  t[65] !== B ||
  t[66] !== Te ||
  t[67] !== Ee ||
  t[68] !== De
    ? ((Oe = (0, X.jsx)(`input`, {
        ref: m,
        role: `combobox`,
        "aria-label": M,
        "aria-expanded": g,
        "aria-controls": ve,
        "aria-activedescendant": ye,
        "aria-autocomplete": `none`,
        "aria-invalid": be,
        autoComplete: `off`,
        readOnly: xe,
        value: Se,
        size: Ce,
        className: B,
        onFocus: V,
        onClick: F,
        onChange: Te,
        onKeyDown: Ee,
        onPaste: De,
      })),
      (t[56] = M),
      (t[57] = g),
      (t[58] = F),
      (t[59] = ve),
      (t[60] = ye),
      (t[61] = be),
      (t[62] = xe),
      (t[63] = Se),
      (t[64] = Ce),
      (t[65] = B),
      (t[66] = Te),
      (t[67] = Ee),
      (t[68] = De),
      (t[69] = Oe))
    : (Oe = t[69]);
  let H;
  t[70] === F
    ? (H = t[71])
    : ((H = () => {
        (m.current?.focus(), F());
      }),
      (t[70] = F),
      (t[71] = H));
  let ke = u === `form` ? i : te,
    U;
  t[72] === ke ? (U = t[73]) : ((U = (0, X.jsx)(r, { asset: ke })), (t[72] = ke), (t[73] = U));
  let W;
  t[74] !== M || t[75] !== H || t[76] !== U
    ? ((W = (0, X.jsx)(`button`, {
        type: `button`,
        tabIndex: -1,
        "aria-label": M,
        className: `shrink-0 cursor-interaction`,
        onClick: H,
        children: U,
      })),
      (t[74] = M),
      (t[75] = H),
      (t[76] = U),
      (t[77] = W))
    : (W = t[77]);
  let G;
  t[78] !== L || t[79] !== Oe || t[80] !== W
    ? ((G = (0, X.jsx)(ie, {
        asChild: !0,
        children: (0, X.jsxs)(`div`, { className: L, children: [Oe, W] }),
      })),
      (t[78] = L),
      (t[79] = Oe),
      (t[80] = W),
      (t[81] = G))
    : (G = t[81]);
  let K, Ae;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (e) => {
        e.target instanceof Node && m.current?.parentElement?.contains(e.target) && e.preventDefault();
      }),
      (Ae = (e) => {
        (e.preventDefault(), ue());
      }),
      (t[82] = K),
      (t[83] = Ae))
    : ((K = t[82]), (Ae = t[83]));
  let je;
  t[84] === w
    ? (je = t[85])
    : ((je = (e) => {
        let t = e?.querySelector(`[data-time="${w}"]`);
        e != null && t != null && (e.scrollTop = t.offsetTop - (e.clientHeight - t.offsetHeight) / 2);
      }),
      (t[84] = w),
      (t[85] = je));
  let q;
  if (t[86] !== w || t[87] !== d || t[88] !== f || t[89] !== k || t[90] !== P || t[91] !== a) {
    let e;
    (t[93] !== w || t[94] !== d || t[95] !== f || t[96] !== P || t[97] !== a
      ? ((e = (e) =>
          (0, X.jsxs)(
            `button`,
            {
              id: `${f}-${e}`,
              type: `button`,
              role: `option`,
              "aria-selected": e === w,
              "data-time": e,
              tabIndex: -1,
              className: p(
                `flex w-full cursor-interaction items-center justify-between gap-2 rounded-xl px-row-x py-row-y text-sm text-default tabular-nums hover:bg-primary-ghost-hover`,
                e === w && `bg-primary-ghost-hover`,
              ),
              onPointerDown: Fe,
              onClick: () => P(e),
              children: [R(e, d), e === a ? (0, X.jsx)(r, { asset: le }) : null],
            },
            e,
          )),
        (t[93] = w),
        (t[94] = d),
        (t[95] = f),
        (t[96] = P),
        (t[97] = a),
        (t[98] = e))
      : (e = t[98]),
      (q = k.map(e)),
      (t[86] = w),
      (t[87] = d),
      (t[88] = f),
      (t[89] = k),
      (t[90] = P),
      (t[91] = a),
      (t[92] = q));
  } else q = t[92];
  let J;
  t[99] !== M || t[100] !== f || t[101] !== je || t[102] !== q
    ? ((J = (0, X.jsx)(`div`, {
        ref: je,
        id: f,
        role: `listbox`,
        "aria-label": M,
        className: `relative max-h-72 min-h-0 overflow-y-auto`,
        children: q,
      })),
      (t[99] = M),
      (t[100] = f),
      (t[101] = je),
      (t[102] = q),
      (t[103] = J))
    : (J = t[103]);
  let Me;
  t[104] !== E || t[105] !== J
    ? ((Me = (0, X.jsx)(O, {
        align: `end`,
        variant: `menu`,
        size: `content`,
        className: `min-w-40 overflow-hidden`,
        portalContainer: E,
        onOpenAutoFocus: Le,
        onCloseAutoFocus: Ie,
        onInteractOutside: K,
        onEscapeKeyDown: Ae,
        children: J,
      })),
      (t[104] = E),
      (t[105] = J),
      (t[106] = Me))
    : (Me = t[106]);
  let Pe;
  return (
    t[107] !== g || t[108] !== he || t[109] !== G || t[110] !== Me
      ? ((Pe = (0, X.jsxs)(ee, { open: g, onOpenChange: he, children: [G, Me] })),
        (t[107] = g),
        (t[108] = he),
        (t[109] = G),
        (t[110] = Me),
        (t[111] = Pe))
      : (Pe = t[111]),
    Pe
  );
}
function Fe(e) {
  return e.preventDefault();
}
function Ie(e) {
  return e.preventDefault();
}
function Le(e) {
  return e.preventDefault();
}
function Re(e) {
  return Number(e.slice(0, 2)) * 60 + Number(e.slice(3));
}
var ze, Y, X;
function Be() {
  return (Be = e(() => {
    ((ze = _()), T(), se(), g(), m(), (Y = a()), b(), H(), P(), h(), w(), (X = d()));
  }))();
}
function Ve(e) {
  let t = (0, He.c)(44),
    {
      appearance: n,
      ariaLabel: a,
      disabled: o,
      error: s,
      options: c,
      selectedId: l,
      selectedLabel: u,
      onSelect: d,
    } = e,
    f = n === void 0 ? `default` : n,
    m = o !== void 0 && o,
    h = (0, Ue.useId)(),
    g = (0, Ue.useRef)(null),
    _;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (e) => {
        let t = g.current?.querySelector(`[data-selected="true"]`);
        t != null &&
          (e.preventDefault(),
          t.focus({ preventScroll: !0 }),
          requestAnimationFrame(() => {
            t.scrollIntoView({ block: `nearest` });
          }));
      }),
      (t[0] = _))
    : (_ = t[0]);
  let v = s != null || void 0,
    y = s == null ? void 0 : h,
    b = f === `form` && `not-disabled:not-aria-disabled:text-secondary`,
    S = f === "default" && `pe-0`,
    C;
  t[1] !== b || t[2] !== S
    ? ((C = p(`max-w-full min-w-0`, b, S)), (t[1] = b), (t[2] = S), (t[3] = C))
    : (C = t[3]);
  let w = f === `form` ? `ghostTertiary` : `ghost`,
    T = f === `form` ? `formValue` : `composerSm`,
    E;
  t[4] !== s || t[5] !== h
    ? ((E = s == null ? null : (0, Z.jsx)(`span`, { id: h, className: `sr-only`, children: s })),
      (t[4] = s),
      (t[5] = h),
      (t[6] = E))
    : (E = t[6]);
  let D;
  t[7] === s
    ? (D = t[8])
    : ((D =
        s == null
          ? null
          : (0, Z.jsx)(be, {
              variant: `caution`,
              children: (0, Z.jsx)(oe, {
                id: `automation.schedule.unsupportedInterval`,
                defaultMessage: `Unsupported`,
                description: `Badge beside a selected automation interval that the current owner's schedule policy does not allow. The user must choose a supported interval to save.`,
              }),
            })),
      (t[7] = s),
      (t[8] = D));
  let ee = f === "default" && `text-tertiary`,
    O = f === "default" && `text-base leading-5`,
    re;
  t[9] !== ee || t[10] !== O
    ? ((re = p(`truncate`, ee, O)), (t[9] = ee), (t[10] = O), (t[11] = re))
    : (re = t[11]);
  let ie;
  t[12] !== u || t[13] !== re
    ? ((ie = (0, Z.jsx)(`span`, { className: re, children: u })), (t[12] = u), (t[13] = re), (t[14] = ie))
    : (ie = t[14]);
  let k = f === "default" ? `text-tertiary` : void 0,
    A = f === `form` ? i : te,
    j;
  t[15] !== k || t[16] !== A
    ? ((j = (0, Z.jsx)(r, { className: k, asset: A })), (t[15] = k), (t[16] = A), (t[17] = j))
    : (j = t[17]);
  let se;
  t[18] !== a ||
  t[19] !== m ||
  t[20] !== T ||
  t[21] !== E ||
  t[22] !== D ||
  t[23] !== ie ||
  t[24] !== j ||
  t[25] !== v ||
  t[26] !== y ||
  t[27] !== C ||
  t[28] !== w
    ? ((se = (0, Z.jsxs)(x, {
        "aria-label": a,
        "aria-invalid": v,
        "aria-describedby": y,
        disabled: m,
        className: C,
        color: w,
        size: T,
        children: [E, D, ie, j],
      })),
      (t[18] = a),
      (t[19] = m),
      (t[20] = T),
      (t[21] = E),
      (t[22] = D),
      (t[23] = ie),
      (t[24] = j),
      (t[25] = v),
      (t[26] = y),
      (t[27] = C),
      (t[28] = w),
      (t[29] = se))
    : (se = t[29]);
  let ce;
  if (t[30] !== d || t[31] !== c || t[32] !== l) {
    let e;
    (t[34] !== d || t[35] !== l
      ? ((e = (e) =>
          (0, Z.jsx)(
            ae.Item,
            {
              "data-selected": e.id === l,
              rightIconAsset: e.id === l ? le : void 0,
              onSelect: () => {
                d(e.id);
              },
              children: e.label,
            },
            e.id,
          )),
        (t[34] = d),
        (t[35] = l),
        (t[36] = e))
      : (e = t[36]),
      (ce = c.map(e)),
      (t[30] = d),
      (t[31] = c),
      (t[32] = l),
      (t[33] = ce));
  } else ce = t[33];
  let ue;
  t[37] !== m || t[38] !== se || t[39] !== ce
    ? ((ue = (0, Z.jsx)(M, {
        scrollFade: !0,
        disabled: m,
        modal: !0,
        align: `end`,
        contentRef: g,
        onOpenAutoFocus: _,
        contentWidth: `sm`,
        contentMaxHeight: `list`,
        triggerButton: se,
        children: ce,
      })),
      (t[37] = m),
      (t[38] = se),
      (t[39] = ce),
      (t[40] = ue))
    : (ue = t[40]);
  let de;
  return (
    t[41] !== s || t[42] !== ue
      ? ((de = (0, Z.jsx)(ne, { tooltipContent: s, children: ue })), (t[41] = s), (t[42] = ue), (t[43] = de))
      : (de = t[43]),
    de
  );
}
var He, Ue, Z;
function We() {
  return (We = e(() => {
    ((He = _()), T(), se(), g(), m(), (Ue = a()), b(), fe(), C(), E(), h(), A(), (Z = d()));
  }))();
}
function Ge(e) {
  let t = (0, qe.c)(20),
    { appearance: n, value: a, onChange: o, weekdayLabelFormat: s } = e,
    c = n === void 0 ? `default` : n,
    l = re(),
    u;
  if (t[0] !== c || t[1] !== l || t[2] !== o || t[3] !== a || t[4] !== s) {
    let e;
    t[6] !== l || t[7] !== s
      ? ((e = (e, t) => ({
          id: e.id,
          label:
            s === `short`
              ? l.formatDate(Date.UTC(2024, 0, t + 1), { weekday: `short`, timeZone: `UTC` })
              : l.formatMessage(e.longLabelMessage),
        })),
        (t[6] = l),
        (t[7] = s),
        (t[8] = e))
      : (e = t[8]);
    let n = Oe.map(e),
      d;
    t[9] === a ? (d = t[10]) : ((d = (e) => a.includes(e.id)), (t[9] = a), (t[10] = d));
    let f = n.filter(d).map(Ke),
      m;
    t[11] === l
      ? (m = t[12])
      : ((m = l.formatMessage({
          id: `inbox.automations.customWeekdays.ariaLabel`,
          defaultMessage: `Days of the week`,
          description: `Accessible label for the custom schedule weekdays selector`,
        })),
        (t[11] = l),
        (t[12] = m));
    let h = c === "default" && `text-base text-default`,
      g;
    t[13] === h ? (g = t[14]) : ((g = p(`truncate`, h)), (t[13] = h), (t[14] = g));
    let _ = c === `form` ? i : te,
      v;
    t[15] === _ ? (v = t[16]) : ((v = (0, Je.jsx)(r, { asset: _ })), (t[15] = _), (t[16] = v));
    let y;
    (t[17] !== o || t[18] !== a
      ? ((y = (e) => {
          let t = a.includes(e.id);
          return (0, Je.jsx)(
            ae.CheckboxItem,
            {
              checked: t,
              onCheckedChange: (t) => {
                let n = t === !0 ? [...a, e.id] : a.filter((t) => t !== e.id);
                n.length > 0 && o(n);
              },
              children: e.label,
            },
            e.id,
          );
        }),
        (t[17] = o),
        (t[18] = a),
        (t[19] = y))
      : (y = t[19]),
      (u = (0, Je.jsx)(M, {
        scrollFade: !0,
        align: `end`,
        contentWidth: `sm`,
        triggerButton: (0, Je.jsxs)(x, {
          "aria-label": m,
          className: `max-w-full min-w-0`,
          color: c === `form` ? `ghostTertiary` : `ghost`,
          size: c === `form` ? `formValue` : `composerSm`,
          children: [
            (0, Je.jsx)(`span`, { className: g, children: l.formatList(f, { type: `conjunction` }) }),
            v,
          ],
        }),
        children: n.map(y),
      })),
      (t[0] = c),
      (t[1] = l),
      (t[2] = o),
      (t[3] = a),
      (t[4] = s),
      (t[5] = u));
  } else u = t[5];
  return u;
}
function Ke(e) {
  return e.label;
}
var qe, Je;
function Ye() {
  return (Ye = e(() => {
    ((qe = _()), se(), g(), m(), b(), H(), C(), E(), h(), (Je = d()));
  }))();
}
function Xe(e) {
  let t = (0, Ze.c)(8),
    { actions: n, children: r, title: i } = e,
    a;
  t[0] !== n || t[1] !== i
    ? ((a =
        i != null || n != null
          ? (0, Qe.jsxs)(`div`, {
              className: `flex h-8 shrink-0 items-center justify-between gap-2 px-1 text-base text-tertiary`,
              children: [(0, Qe.jsx)(`span`, { className: `opacity-75`, children: i }), n],
            })
          : null),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === r
    ? (o = t[4])
    : ((o = (0, Qe.jsx)(`div`, { className: `flex min-h-0 flex-col`, children: r })), (t[3] = r), (t[4] = o));
  let s;
  return (
    t[5] !== a || t[6] !== o
      ? ((s = (0, Qe.jsxs)(`section`, { className: `flex min-h-0 flex-col`, children: [a, o] })),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
var Ze, Qe;
function $e() {
  return ($e = e(() => {
    ((Ze = _()), (Qe = d()));
  }))();
}
function et(e) {
  let n = (0, rt.c)(174),
    {
      appearance: i,
      afterScheduleRows: a,
      beforeScheduleRows: o,
      grouped: c,
      showCustomRuleFallback: l,
      frequencyLabel: d,
      heading: p,
      scheduleConfig: m,
      intervalStyle: h,
      scheduleSource: g,
      minuteIntervals: _,
      minuteIntervalDisabled: b,
      minuteIntervalError: S,
      timeZone: C,
      onChangeEndDate: w,
      onUpdateScheduleDraft: T,
    } = e,
    E = i === void 0 ? `default` : i,
    D = c !== void 0 && c,
    ee = l !== void 0 && l,
    te = b !== void 0 && b,
    O = re(),
    [ne, ie] = (0, it.useState)(!1),
    [A, ae] = (0, it.useState)(``),
    M;
  n[0] === m.intervalMinutes
    ? (M = n[1])
    : ((M = () => (m.intervalMinutes != null && m.intervalMinutes % 60 != 0 ? `minute` : `hour`)),
      (n[0] = m.intervalMinutes),
      (n[1] = M));
  let [se, ce] = (0, it.useState)(M),
    le = h === `heartbeat`,
    N = m.intervalMinutes ?? m.intervalHours * 60,
    fe = g === `local` || (_ != null && _.length > 0) || m.intervalMinutes != null,
    P = fe ? se : `hour`,
    I = P === `hour` ? 60 : 1,
    ge = m.intervalMinutes != null && (g === `local` || (_ != null && _.length > 0)),
    L = g === `cloud` ? Ee : Te,
    ye;
  if (n[2] !== O || n[3] !== L) {
    let e;
    (n[5] === O
      ? (e = n[6])
      : ((e = (e) => ({ id: e.id, label: O.formatMessage(e.labelMessage) })), (n[5] = O), (n[6] = e)),
      (ye = L.map(e)),
      (n[2] = O),
      (n[3] = L),
      (n[4] = ye));
  } else ye = n[4];
  let be = ye,
    xe,
    Se,
    R,
    Ce,
    z,
    we,
    B,
    V,
    H,
    U,
    W,
    G,
    K,
    Ae,
    q,
    J;
  if (
    n[7] !== E ||
    n[8] !== o ||
    n[9] !== fe ||
    n[10] !== d ||
    n[11] !== D ||
    n[12] !== p ||
    n[13] !== N ||
    n[14] !== P ||
    n[15] !== O ||
    n[16] !== le ||
    n[17] !== te ||
    n[18] !== S ||
    n[19] !== _ ||
    n[20] !== be ||
    n[21] !== w ||
    n[22] !== T ||
    n[23] !== ge ||
    n[24] !== A ||
    n[25] !== m ||
    n[26] !== L ||
    n[27] !== g ||
    n[28] !== C ||
    n[29] !== I
  ) {
    let e = L.find((e) => e.id === m.mode) ?? L[0],
      i = m.weekdays[0] ?? Oe[0].id;
    we = m.monthDay ?? 1;
    let a = Oe.find((e) => e.id === i) ?? Oe[0];
    B =
      m.oneTimeDate != null ||
      m.mode === `daily` ||
      m.mode === `weekdays` ||
      m.mode === `weekly` ||
      m.mode === `monthly`;
    let s;
    (n[46] !== m.customRrule || n[47] !== m.mode || n[48] !== m.oneTimeDate
      ? ((s = m.oneTimeDate == null && m.mode === `custom` ? ve(m.customRrule) : null),
        (n[46] = m.customRrule),
        (n[47] = m.mode),
        (n[48] = m.oneTimeDate),
        (n[49] = s))
      : (s = n[49]),
      (R = s));
    let c;
    (n[50] !== A || n[51] !== m
      ? ((c = pe({ ...m, mode: `custom`, customRrule: A })), (n[50] = A), (n[51] = m), (n[52] = c))
      : (c = n[52]),
      (z = c));
    let l;
    (n[53] !== T || n[54] !== m
      ? ((l = (e) => {
          T({ ...m, ...e });
        }),
        (n[53] = T),
        (n[54] = m),
        (n[55] = l))
      : (l = n[55]),
      (J = l));
    let u;
    n[56] !== w || n[57] !== J
      ? ((u = (e) => {
          w == null ? J({ untilDate: e }) : w(e);
        }),
        (n[56] = w),
        (n[57] = J),
        (n[58] = u))
      : (u = n[58]);
    let f = u,
      h;
    (n[59] !== R || n[60] !== J
      ? ((h = (e) => {
          R != null && J({ customRrule: he({ ...R, ...e }) });
        }),
        (n[59] = R),
        (n[60] = J),
        (n[61] = h))
      : (h = n[61]),
      (q = h));
    let v;
    (n[62] !== E ||
    n[63] !== f ||
    n[64] !== O ||
    n[65] !== m.oneTimeDate ||
    n[66] !== m.untilDate ||
    n[67] !== g ||
    n[68] !== C
      ? ((v =
          g === `cloud` && m.oneTimeDate == null
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(j, {
                    control: (0, Q.jsx)(Ve, {
                      appearance: E,
                      ariaLabel: O.formatMessage({
                        id: `inbox.automations.endRepeat.ariaLabel`,
                        defaultMessage: `End repeat`,
                        description: `Accessible label for choosing when a cloud scheduled task stops repeating`,
                      }),
                      options: [
                        { id: `never`, label: O.formatMessage($.endRepeatNever) },
                        { id: `on-date`, label: O.formatMessage($.endRepeatOnDate) },
                      ],
                      selectedId: m.untilDate == null ? `never` : `on-date`,
                      selectedLabel: O.formatMessage(
                        m.untilDate == null ? $.endRepeatNever : $.endRepeatOnDate,
                      ),
                      onSelect: (e) => {
                        if (e === (m.untilDate == null ? `never` : `on-date`)) return;
                        if (e === `never`) {
                          f(void 0);
                          return;
                        }
                        let t = new Date();
                        (t.setMonth(t.getMonth() + 1),
                          f(
                            new Intl.DateTimeFormat(`en-CA`, {
                              timeZone: C,
                              year: `numeric`,
                              month: `2-digit`,
                              day: `2-digit`,
                            }).format(t),
                          ));
                      },
                    }),
                    label: O.formatMessage({
                      id: `inbox.automations.endRepeat.label`,
                      defaultMessage: `End repeat`,
                      description: `Label for choosing when a cloud scheduled task stops repeating`,
                    }),
                    variant: `nested`,
                  }),
                  m.untilDate == null
                    ? null
                    : (0, Q.jsx)(j, {
                        control: (0, Q.jsx)(nt, {
                          appearance: E,
                          ariaLabel: O.formatMessage({
                            id: `inbox.automations.endRepeatDate.ariaLabel`,
                            defaultMessage: `End date`,
                            description: `Accessible label for the date when a cloud scheduled task stops repeating`,
                          }),
                          timeZone: C,
                          value: m.untilDate,
                          onChange: f,
                        }),
                        label: O.formatMessage({
                          id: `inbox.automations.endRepeatDate.label`,
                          defaultMessage: `Date`,
                          description: `Label for the date when a cloud scheduled task stops repeating`,
                        }),
                        variant: `nested`,
                      }),
                ],
              })
            : null),
        (n[62] = E),
        (n[63] = f),
        (n[64] = O),
        (n[65] = m.oneTimeDate),
        (n[66] = m.untilDate),
        (n[67] = g),
        (n[68] = C),
        (n[69] = v))
      : (v = n[69]),
      (Ce = v),
      (Se = Xe),
      n[70] !== p || n[71] !== O || n[72] !== m.customRrule || n[73] !== m.mode || n[74] !== m.oneTimeDate
        ? ((U =
            m.oneTimeDate == null && m.mode === `custom` && (p === void 0 || p != null)
              ? (0, Q.jsx)(x, {
                  "aria-label": O.formatMessage({
                    id: `inbox.automations.scheduleRule.open`,
                    defaultMessage: `Edit schedule rule`,
                    description: `Accessible label for opening the custom schedule RRULE dialog`,
                  }),
                  className: `h-7 w-7 rounded-md !p-1 text-default opacity-75 hover:opacity-100`,
                  color: `ghostActive`,
                  size: `icon`,
                  onClick: () => {
                    (ae(m.customRrule), ie(!0));
                  },
                  children: (0, Q.jsx)(r, { asset: ue }),
                })
              : null),
          (n[70] = p),
          (n[71] = O),
          (n[72] = m.customRrule),
          (n[73] = m.mode),
          (n[74] = m.oneTimeDate),
          (n[75] = U))
        : (U = n[75]),
      n[76] === p
        ? (W = n[77])
        : ((W =
            p === void 0
              ? (0, Q.jsx)(oe, {
                  id: `inbox.automations.frequency`,
                  defaultMessage: `Frequency`,
                  description: `Section label above scheduled task frequency controls`,
                })
              : p),
          (n[76] = p),
          (n[77] = W)),
      (xe = t),
      (G = D ? `input` : `default`),
      (K = o),
      (Ae =
        m.oneTimeDate == null
          ? (0, Q.jsx)(j, {
              control: (0, Q.jsx)(Ve, {
                appearance: E,
                ariaLabel: O.formatMessage({
                  id: `settings.automations.scheduleModeLabel`,
                  defaultMessage: `Repeat schedule`,
                  description: `Aria label for schedule type dropdown`,
                }),
                options: be,
                selectedId: m.mode,
                selectedLabel: O.formatMessage(e.labelMessage),
                onSelect: (e) => {
                  e !== m.mode && T(_e(m, e));
                },
              }),
              label:
                d ??
                O.formatMessage({
                  id: `inbox.automations.repeat.label`,
                  defaultMessage: `Repeat`,
                  description: `Label for the scheduled task repeat mode row`,
                }),
              variant: `nested`,
            })
          : (0, Q.jsx)(j, {
              control: (0, Q.jsx)(nt, {
                appearance: E,
                ariaLabel: O.formatMessage({
                  id: `inbox.automations.oneTimeDate.ariaLabel`,
                  defaultMessage: `Scheduled date`,
                  description: `Accessible label for choosing the date of a one-time cloud scheduled task`,
                }),
                timeZone: C,
                value: m.oneTimeDate,
                onChange: (e) => {
                  J({ oneTimeDate: e });
                },
              }),
              label: O.formatMessage({
                id: `inbox.automations.oneTimeDate.label`,
                defaultMessage: `Date`,
                description: `Label for the date of a one-time scheduled task`,
              }),
              variant: `nested`,
            })),
      n[78] !== E ||
      n[79] !== fe ||
      n[80] !== N ||
      n[81] !== P ||
      n[82] !== O ||
      n[83] !== le ||
      n[84] !== te ||
      n[85] !== S ||
      n[86] !== _ ||
      n[87] !== ge ||
      n[88] !== m.mode ||
      n[89] !== m.oneTimeDate ||
      n[90] !== I ||
      n[91] !== J
        ? ((V =
            m.oneTimeDate == null && m.mode === `hourly`
              ? (0, Q.jsx)(j, {
                  control: (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-1.5`,
                    children: [
                      P === `minute` && _ != null
                        ? (0, Q.jsx)(Ve, {
                            appearance: E,
                            ariaLabel: O.formatMessage({
                              id: `settings.automations.scheduleIntervalDuration`,
                              defaultMessage: `Interval duration`,
                              description: `Accessible label for a task's repeat interval amount`,
                            }),
                            disabled: te,
                            error: S,
                            options: _.map((e) => ({ id: String(e), label: O.formatNumber(e) })),
                            selectedId: String(N),
                            selectedLabel: O.formatNumber(N),
                            onSelect: (e) => J({ intervalMinutes: Number(e) }),
                          })
                        : (0, Q.jsx)(je, {
                            appearance: E,
                            ariaLabel: O.formatMessage({
                              id: `settings.automations.scheduleIntervalDuration`,
                              defaultMessage: `Interval duration`,
                              description: `Accessible label for a task's repeat interval amount`,
                            }),
                            max: le || P === `minute` ? 999 / I : 23,
                            min: le ? 1 / I : 1,
                            step: le || ge ? 1 / I : 1,
                            value: N / I,
                            onChange: (e) => {
                              let t = Math.round(e * I);
                              t !== N &&
                                J(
                                  P === `minute` || le || ge
                                    ? { intervalMinutes: t }
                                    : { intervalHours: e, intervalMinutes: null },
                                );
                            },
                          }),
                      (0, Q.jsx)(Ve, {
                        appearance: E,
                        ariaLabel: O.formatMessage({
                          id: `settings.automations.scheduleIntervalUnit`,
                          defaultMessage: `Interval unit`,
                          description: `Accessible label for selecting minutes or hours for a task's repeat interval`,
                        }),
                        options: (fe ? [`minute`, `hour`] : [`hour`]).map((e) => ({
                          id: e,
                          label: O.formatMessage($.intervalUnit, { unit: e }),
                        })),
                        selectedId: P,
                        selectedLabel: O.formatMessage($.intervalUnit, { unit: P }),
                        onSelect: ce,
                      }),
                    ],
                  }),
                  label: O.formatMessage({
                    id: `settings.automations.scheduleIntervalLabel`,
                    defaultMessage: `Every`,
                    description: `Label for the automation interval input`,
                  }),
                  variant: `nested`,
                })
              : null),
          (n[78] = E),
          (n[79] = fe),
          (n[80] = N),
          (n[81] = P),
          (n[82] = O),
          (n[83] = le),
          (n[84] = te),
          (n[85] = S),
          (n[86] = _),
          (n[87] = ge),
          (n[88] = m.mode),
          (n[89] = m.oneTimeDate),
          (n[90] = I),
          (n[91] = J),
          (n[92] = V))
        : (V = n[92]),
      (H =
        m.oneTimeDate == null && m.mode === `weekly`
          ? (0, Q.jsx)(j, {
              control:
                g === `cloud` || m.weekdays.length > 1
                  ? (0, Q.jsx)(Ge, {
                      appearance: E,
                      value: m.weekdays,
                      onChange: (e) => {
                        J({ weekdays: e });
                      },
                    })
                  : (0, Q.jsx)(Ve, {
                      appearance: E,
                      ariaLabel: O.formatMessage({
                        id: `inbox.automations.scheduleWeekday.ariaLabel`,
                        defaultMessage: `Day of the week`,
                        description: `Accessible label for the weekly automation day selector`,
                      }),
                      options: Oe.map((e) => ({ id: e.id, label: O.formatMessage(e.longLabelMessage) })),
                      selectedId: a.id,
                      selectedLabel: O.formatMessage(a.longLabelMessage),
                      onSelect: (e) => {
                        J({ weekdays: [e] });
                      },
                    }),
              label: O.formatMessage({
                id: `inbox.automations.day.label`,
                defaultMessage: `On`,
                description: `Label for the scheduled task weekday row`,
              }),
              labelSizing: `content`,
              variant: `nested`,
            })
          : null),
      (n[7] = E),
      (n[8] = o),
      (n[9] = fe),
      (n[10] = d),
      (n[11] = D),
      (n[12] = p),
      (n[13] = N),
      (n[14] = P),
      (n[15] = O),
      (n[16] = le),
      (n[17] = te),
      (n[18] = S),
      (n[19] = _),
      (n[20] = be),
      (n[21] = w),
      (n[22] = T),
      (n[23] = ge),
      (n[24] = A),
      (n[25] = m),
      (n[26] = L),
      (n[27] = g),
      (n[28] = C),
      (n[29] = I),
      (n[30] = xe),
      (n[31] = Se),
      (n[32] = R),
      (n[33] = Ce),
      (n[34] = z),
      (n[35] = we),
      (n[36] = B),
      (n[37] = V),
      (n[38] = H),
      (n[39] = U),
      (n[40] = W),
      (n[41] = G),
      (n[42] = K),
      (n[43] = Ae),
      (n[44] = q),
      (n[45] = J));
  } else
    ((xe = n[30]),
      (Se = n[31]),
      (R = n[32]),
      (Ce = n[33]),
      (z = n[34]),
      (we = n[35]),
      (B = n[36]),
      (V = n[37]),
      (H = n[38]),
      (U = n[39]),
      (W = n[40]),
      (G = n[41]),
      (K = n[42]),
      (Ae = n[43]),
      (q = n[44]),
      (J = n[45]));
  let Me;
  n[93] !== E || n[94] !== O || n[95] !== m.mode || n[96] !== m.oneTimeDate || n[97] !== we || n[98] !== J
    ? ((Me =
        m.oneTimeDate == null && m.mode === `monthly`
          ? (0, Q.jsx)(j, {
              control: (0, Q.jsx)(Ve, {
                appearance: E,
                ariaLabel: O.formatMessage({
                  id: `inbox.automations.monthDay.ariaLabel`,
                  defaultMessage: `Day of the month`,
                  description: `Accessible label for the monthly scheduled task day-of-month selector`,
                }),
                options: De.map(tt),
                selectedId: String(we),
                selectedLabel: String(we),
                onSelect: (e) => {
                  J({ monthDay: Number(e) });
                },
              }),
              label: O.formatMessage({
                id: `inbox.automations.day.label`,
                defaultMessage: `On`,
                description: `Label for the scheduled task weekday row`,
              }),
              variant: `nested`,
            })
          : null),
      (n[93] = E),
      (n[94] = O),
      (n[95] = m.mode),
      (n[96] = m.oneTimeDate),
      (n[97] = we),
      (n[98] = J),
      (n[99] = Me))
    : (Me = n[99]);
  let Ne;
  n[100] !== E ||
  n[101] !== O ||
  n[102] !== m.oneTimeDate ||
  n[103] !== m.time ||
  n[104] !== B ||
  n[105] !== C ||
  n[106] !== J
    ? ((Ne = B
        ? (0, Q.jsx)(j, {
            control: (0, Q.jsx)(Pe, {
              appearance: E,
              value: m.time,
              timeZone: C,
              date: m.oneTimeDate,
              onChange: (e) => {
                J({ time: e });
              },
            }),
            label:
              m.oneTimeDate == null
                ? O.formatMessage({
                    id: `inbox.automations.scheduleTime.label`,
                    defaultMessage: `Time`,
                    description: `Label for the scheduled task time row`,
                  })
                : O.formatMessage({
                    id: `inbox.automations.scheduleStartTime.label`,
                    defaultMessage: `Start time`,
                    description: `Label for the time a one-time scheduled task starts`,
                  }),
            variant: `nested`,
          })
        : null),
      (n[100] = E),
      (n[101] = O),
      (n[102] = m.oneTimeDate),
      (n[103] = m.time),
      (n[104] = B),
      (n[105] = C),
      (n[106] = J),
      (n[107] = Ne))
    : (Ne = n[107]);
  let Fe;
  n[108] !== E || n[109] !== R || n[110] !== O || n[111] !== C || n[112] !== q
    ? ((Fe =
        R == null
          ? null
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(j, {
                  control: (0, Q.jsx)(Ve, {
                    appearance: E,
                    ariaLabel: O.formatMessage({
                      id: `inbox.automations.customFrequency.ariaLabel`,
                      defaultMessage: `Repeat frequency`,
                      description: `Accessible label for the custom scheduled task frequency selector`,
                    }),
                    options: at.map((e) => ({ id: e, label: O.formatMessage(st[e]) })),
                    selectedId: R.frequency,
                    selectedLabel: O.formatMessage(st[R.frequency]),
                    onSelect: (e) => {
                      q({ frequency: e });
                    },
                  }),
                  label: O.formatMessage({
                    id: `inbox.automations.customFrequency.label`,
                    defaultMessage: `Repeats`,
                    description: `Label for the custom schedule frequency row`,
                  }),
                  variant: `nested`,
                }),
                (0, Q.jsx)(j, {
                  control: (0, Q.jsx)(je, {
                    appearance: E,
                    ariaLabel: O.formatMessage({
                      id: `inbox.automations.customInterval.ariaLabel`,
                      defaultMessage: `Repeat interval`,
                      description: `Accessible label for the custom schedule interval input`,
                    }),
                    max: 999,
                    min: 1,
                    suffix: O.formatMessage(ct[R.frequency], { count: R.interval }),
                    value: R.interval,
                    onChange: (e) => {
                      q({ interval: e });
                    },
                  }),
                  label: O.formatMessage({
                    id: `inbox.automations.customInterval.label`,
                    defaultMessage: `Every`,
                    description: `Label for the custom schedule interval row`,
                  }),
                  variant: `nested`,
                }),
                R.frequency === `weekly`
                  ? (0, Q.jsx)(j, {
                      control: (0, Q.jsx)(Ge, {
                        appearance: E,
                        value: R.weekdays,
                        onChange: (e) => {
                          q({ weekdays: e });
                        },
                      }),
                      label: O.formatMessage({
                        id: `inbox.automations.customWeekdays.label`,
                        defaultMessage: `On`,
                        description: `Label for the custom schedule weekdays row`,
                      }),
                      labelSizing: `content`,
                      variant: `nested`,
                    })
                  : null,
                R.frequency === `yearly`
                  ? (0, Q.jsx)(j, {
                      control: (0, Q.jsx)(Ve, {
                        appearance: E,
                        ariaLabel: O.formatMessage({
                          id: `inbox.automations.customMonth.ariaLabel`,
                          defaultMessage: `Month`,
                          description: `Accessible label for the custom schedule month selector`,
                        }),
                        options: ot.map((e) => ({
                          id: String(e),
                          label: O.formatDate(new Date(2024, e - 1, 1), { month: `long` }),
                        })),
                        selectedId: String(R.month),
                        selectedLabel: O.formatDate(new Date(2024, R.month - 1, 1), { month: `long` }),
                        onSelect: (e) => {
                          q({ month: Number(e) });
                        },
                      }),
                      label: O.formatMessage({
                        id: `inbox.automations.customMonth.label`,
                        defaultMessage: `In`,
                        description: `Label for the custom schedule month row`,
                      }),
                      variant: `nested`,
                    })
                  : null,
                R.frequency === `monthly` || R.frequency === `yearly`
                  ? (0, Q.jsx)(j, {
                      control: (0, Q.jsx)(ke, {
                        appearance: E,
                        value: R.monthDays,
                        onChange: (e) => {
                          q({ monthDays: e });
                        },
                      }),
                      label: O.formatMessage({
                        id: `inbox.automations.customMonthDay.label`,
                        defaultMessage: `On days`,
                        description: `Label for the custom schedule days of month row`,
                      }),
                      variant: `nested`,
                    })
                  : null,
                R.frequency === `hourly`
                  ? (0, Q.jsx)(j, {
                      control: (0, Q.jsx)(je, {
                        appearance: E,
                        ariaLabel: O.formatMessage({
                          id: `inbox.automations.customMinute.ariaLabel`,
                          defaultMessage: `Minute past the hour`,
                          description: `Accessible label for the custom hourly schedule minute input`,
                        }),
                        max: 59,
                        min: 0,
                        value: R.minute,
                        onChange: (e) => {
                          q({ minute: e });
                        },
                      }),
                      label: O.formatMessage({
                        id: `inbox.automations.customMinute.label`,
                        defaultMessage: `At minute`,
                        description: `Label for the custom hourly schedule minute row`,
                      }),
                      variant: `nested`,
                    })
                  : (0, Q.jsx)(j, {
                      control: (0, Q.jsx)(Pe, {
                        appearance: E,
                        value: R.time,
                        timeZone: C,
                        onChange: (e) => {
                          q({ time: e });
                        },
                      }),
                      label: O.formatMessage({
                        id: `inbox.automations.customStartTime.label`,
                        defaultMessage: `Start time`,
                        description: `Label for the time a custom recurring scheduled task starts`,
                      }),
                      variant: `nested`,
                    }),
              ],
            })),
      (n[108] = E),
      (n[109] = R),
      (n[110] = O),
      (n[111] = C),
      (n[112] = q),
      (n[113] = Fe))
    : (Fe = n[113]);
  let Ie;
  n[114] !== R ||
  n[115] !== O ||
  n[116] !== m.customRrule ||
  n[117] !== m.mode ||
  n[118] !== m.oneTimeDate ||
  n[119] !== ee
    ? ((Ie =
        ee && m.mode === `custom` && m.oneTimeDate == null && R == null
          ? (0, Q.jsx)(j, {
              variant: `nested`,
              label: me({
                rrule: m.customRrule,
                intl: O,
                fallbackMessage: O.formatMessage({
                  id: `inbox.automations.scheduleRule.advanced`,
                  defaultMessage: `Advanced schedule`,
                  description: `Label for a saved recurrence that requires the schedule rule editor`,
                }),
              }),
              control: (0, Q.jsx)(x, {
                color: `ghost`,
                size: `composerSm`,
                type: `button`,
                onClick: () => {
                  (ae(m.customRrule), ie(!0));
                },
                children: (0, Q.jsx)(oe, {
                  id: `inbox.automations.scheduleRule.edit`,
                  defaultMessage: `Edit rule`,
                  description: `Opens the editor for an advanced saved schedule rule`,
                }),
              }),
            })
          : null),
      (n[114] = R),
      (n[115] = O),
      (n[116] = m.customRrule),
      (n[117] = m.mode),
      (n[118] = m.oneTimeDate),
      (n[119] = ee),
      (n[120] = Ie))
    : (Ie = n[120]);
  let Le = D ? Ce : null,
    Re;
  n[121] !== xe ||
  n[122] !== a ||
  n[123] !== V ||
  n[124] !== H ||
  n[125] !== Me ||
  n[126] !== Ne ||
  n[127] !== Fe ||
  n[128] !== Ie ||
  n[129] !== Le ||
  n[130] !== G ||
  n[131] !== K ||
  n[132] !== Ae
    ? ((Re = (0, Q.jsxs)(xe, { variant: G, children: [K, Ae, V, H, Me, Ne, Fe, Ie, a, Le] })),
      (n[121] = xe),
      (n[122] = a),
      (n[123] = V),
      (n[124] = H),
      (n[125] = Me),
      (n[126] = Ne),
      (n[127] = Fe),
      (n[128] = Ie),
      (n[129] = Le),
      (n[130] = G),
      (n[131] = K),
      (n[132] = Ae),
      (n[133] = Re))
    : (Re = n[133]);
  let ze;
  n[134] !== Ce || n[135] !== D
    ? ((ze = !D && Ce != null ? (0, Q.jsx)(t, { className: `mt-2`, children: Ce }) : null),
      (n[134] = Ce),
      (n[135] = D),
      (n[136] = ze))
    : (ze = n[136]);
  let Y;
  n[137] !== z || n[138] !== A || n[139] !== J
    ? ((Y = (e) => {
        (e.preventDefault(), z && (J({ customRrule: A }), ie(!1)));
      }),
      (n[137] = z),
      (n[138] = A),
      (n[139] = J),
      (n[140] = Y))
    : (Y = n[140]);
  let X;
  n[141] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, Q.jsx)(k, {
        className: `contents`,
        children: (0, Q.jsx)(oe, {
          id: `inbox.automations.scheduleRule.title`,
          defaultMessage: `Edit schedule rule`,
          description: `Title of the custom schedule RRULE dialog`,
        }),
      })),
      (n[141] = X))
    : (X = n[141]);
  let Be;
  n[142] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (0, Q.jsx)(de, {
        children: (0, Q.jsx)(v, {
          title: X,
          subtitle: (0, Q.jsx)(u, {
            className: `contents`,
            children: (0, Q.jsx)(oe, {
              id: `inbox.automations.scheduleRule.description`,
              defaultMessage: `Use an RRULE to define a custom schedule`,
              description: `Description of the custom schedule RRULE dialog`,
            }),
          }),
        }),
      })),
      (n[142] = Be))
    : (Be = n[142]);
  let He;
  n[143] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (0, Q.jsx)(`span`, {
        className: `text-sm font-medium text-default`,
        children: (0, Q.jsx)(oe, {
          id: `inbox.automations.scheduleRule.inputLabel`,
          defaultMessage: `RRULE`,
          description: `Label for the custom schedule RRULE input`,
        }),
      })),
      (n[143] = He))
    : (He = n[143]);
  let Ue = !z,
    Z;
  n[144] === O
    ? (Z = n[145])
    : ((Z = O.formatMessage({
        id: `settings.automations.scheduleCustomPlaceholder`,
        defaultMessage: `RRULE:FREQ=MONTHLY;BYMONTHDAY=1;BYHOUR=9;BYMINUTE=0`,
        description: `Placeholder text for the custom automation RRULE editor`,
      })),
      (n[144] = O),
      (n[145] = Z));
  let We;
  n[146] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = (e) => {
        ae(e.currentTarget.value);
      }),
      (n[146] = We))
    : (We = n[146]);
  let Ke;
  n[147] !== A || n[148] !== Ue || n[149] !== Z
    ? ((Ke = (0, Q.jsx)(F, {
        variant: `code`,
        autoFocus: !0,
        "aria-invalid": Ue,
        placeholder: Z,
        spellCheck: !1,
        value: A,
        onChange: We,
      })),
      (n[147] = A),
      (n[148] = Ue),
      (n[149] = Z),
      (n[150] = Ke))
    : (Ke = n[150]);
  let qe;
  n[151] === z
    ? (qe = n[152])
    : ((qe = z
        ? null
        : (0, Q.jsx)(`span`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children: (0, Q.jsx)(oe, {
              id: `inbox.automations.scheduleRule.invalid`,
              defaultMessage: `Enter a valid RRULE`,
              description: `Validation error shown for an invalid custom schedule RRULE`,
            }),
          })),
      (n[151] = z),
      (n[152] = qe));
  let Je;
  n[153] !== Ke || n[154] !== qe
    ? ((Je = (0, Q.jsx)(de, {
        children: (0, Q.jsxs)(`label`, { className: `flex flex-col gap-2`, children: [He, Ke, qe] }),
      })),
      (n[153] = Ke),
      (n[154] = qe),
      (n[155] = Je))
    : (Je = n[155]);
  let Ye;
  n[156] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = (0, Q.jsx)(x, {
        color: `ghost`,
        type: `button`,
        onClick: () => {
          ie(!1);
        },
        children: (0, Q.jsx)(oe, {
          id: `inbox.automations.scheduleRule.cancel`,
          defaultMessage: `Cancel`,
          description: `Button label for closing the schedule rule dialog without saving`,
        }),
      })),
      (n[156] = Ye))
    : (Ye = n[156]);
  let Ze = !z,
    Qe;
  n[157] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qe = (0, Q.jsx)(oe, {
        id: `inbox.automations.scheduleRule.save`,
        defaultMessage: `Save`,
        description: `Button label for saving a custom schedule RRULE`,
      })),
      (n[157] = Qe))
    : (Qe = n[157]);
  let $e;
  n[158] === Ze
    ? ($e = n[159])
    : (($e = (0, Q.jsx)(de, {
        children: (0, Q.jsxs)(f, {
          children: [Ye, (0, Q.jsx)(x, { disabled: Ze, type: `submit`, children: Qe })],
        }),
      })),
      (n[158] = Ze),
      (n[159] = $e));
  let et;
  n[160] !== Y || n[161] !== Je || n[162] !== $e
    ? ((et = (0, Q.jsxs)(s, { as: `form`, onSubmit: Y, children: [Be, Je, $e] })),
      (n[160] = Y),
      (n[161] = Je),
      (n[162] = $e),
      (n[163] = et))
    : (et = n[163]);
  let lt;
  n[164] !== ne || n[165] !== et
    ? ((lt = (0, Q.jsx)(y, { open: ne, size: `compact`, onOpenChange: ie, children: et })),
      (n[164] = ne),
      (n[165] = et),
      (n[166] = lt))
    : (lt = n[166]);
  let ut;
  return (
    n[167] !== Se || n[168] !== U || n[169] !== W || n[170] !== Re || n[171] !== ze || n[172] !== lt
      ? ((ut = (0, Q.jsxs)(Se, { actions: U, title: W, children: [Re, ze, lt] })),
        (n[167] = Se),
        (n[168] = U),
        (n[169] = W),
        (n[170] = Re),
        (n[171] = ze),
        (n[172] = lt),
        (n[173] = ut))
      : (ut = n[173]),
    ut
  );
}
function tt(e) {
  return { id: String(e), label: String(e) };
}
function nt(e) {
  let t = (0, rt.c)(22),
    { appearance: n, ariaLabel: r, timeZone: i, value: a, onChange: o } = e,
    s = n === void 0 ? `default` : n,
    c = (0, it.useId)(),
    l;
  t[0] === i
    ? (l = t[1])
    : ((l = new Intl.DateTimeFormat(`en-CA`, {
        timeZone: i,
        year: `numeric`,
        month: `2-digit`,
        day: `2-digit`,
      }).format(new Date())),
      (t[0] = i),
      (t[1] = l));
  let u = l,
    d = s === `form` ? `text-secondary` : `text-tertiary`,
    f;
  t[2] === d ? (f = t[3]) : ((f = p(`-me-1.5 text-base`, d)), (t[2] = d), (t[3] = f));
  let m = `${u}T00:00:00`,
    h;
  t[4] === m ? (h = t[5]) : ((h = new Date(m)), (t[4] = m), (t[5] = h));
  let g =
      s === `form`
        ? `[--select-control-font-size:var(--text-form-body)]`
        : `[--select-control-font-size:var(--text-base)]`,
    _;
  t[6] === g
    ? (_ = t[7])
    : ((_ = p(`[--select-control-font-weight:var(--font-ui-weight)]`, g)), (t[6] = g), (t[7] = _));
  let v = `${a}T00:00:00`,
    y;
  t[8] === v ? (y = t[9]) : ((y = new Date(v)), (t[8] = v), (t[9] = y));
  let b;
  t[10] === o
    ? (b = t[11])
    : ((b = (e) => {
        e != null &&
          o(
            new Intl.DateTimeFormat(`en-CA`, { year: `numeric`, month: `2-digit`, day: `2-digit` }).format(e),
          );
      }),
      (t[10] = o),
      (t[11] = b));
  let x;
  t[12] !== c || t[13] !== y || t[14] !== b || t[15] !== h || t[16] !== _
    ? ((x = (0, Q.jsx)(Se, {
        id: c,
        align: `end`,
        dropdownIconType: `chevronDown`,
        min: h,
        size: `sm`,
        triggerClassName: _,
        triggerDateFormat: `MMM d, yyyy`,
        triggerShowIcon: !1,
        value: y,
        valueType: `date`,
        variant: `ghost`,
        onChange: b,
      })),
      (t[12] = c),
      (t[13] = y),
      (t[14] = b),
      (t[15] = h),
      (t[16] = _),
      (t[17] = x))
    : (x = t[17]);
  let S;
  return (
    t[18] !== r || t[19] !== x || t[20] !== f
      ? ((S = (0, Q.jsx)(`div`, { "aria-label": r, className: f, role: `group`, children: x })),
        (t[18] = r),
        (t[19] = x),
        (t[20] = f),
        (t[21] = S))
      : (S = t[21]),
    S
  );
}
var rt, it, Q, at, ot, $, st, ct;
function lt() {
  return (lt = e(() => {
    ((rt = _()),
      n(),
      xe(),
      m(),
      (it = a()),
      b(),
      ye(),
      Ae(),
      Me(),
      H(),
      Be(),
      We(),
      Ye(),
      $e(),
      C(),
      c(),
      o(),
      h(),
      N(),
      ce(),
      D(),
      (Q = d()),
      (at = [`hourly`, `daily`, `weekly`, `monthly`, `yearly`]),
      (ot = Array.from({ length: 12 }, (e, t) => t + 1)),
      ($ = S({
        intervalUnit: {
          id: `automations.schedule.intervalUnit`,
          defaultMessage: `{unit, select, hour {hours} other {minutes}}`,
          description: `Unit option beside a task's numeric repeat interval; unit is hour or minute`,
        },
        endRepeatNever: {
          id: `inbox.automations.endRepeat.never`,
          defaultMessage: `Never`,
          description: `Dropdown option indicating that a cloud scheduled task repeats indefinitely`,
        },
        endRepeatOnDate: {
          id: `inbox.automations.endRepeat.onDate`,
          defaultMessage: `On date`,
          description: `Dropdown option indicating that a cloud scheduled task stops repeating on a selected date`,
        },
        hourly: {
          id: `inbox.automations.customFrequency.hourly`,
          defaultMessage: `Hourly`,
          description: `Custom scheduled task frequency option for hours`,
        },
        daily: {
          id: `inbox.automations.customFrequency.daily`,
          defaultMessage: `Daily`,
          description: `Custom scheduled task frequency option for days`,
        },
        weekly: {
          id: `inbox.automations.customFrequency.weekly`,
          defaultMessage: `Weekly`,
          description: `Custom scheduled task frequency option for weeks`,
        },
        monthly: {
          id: `inbox.automations.customFrequency.monthly`,
          defaultMessage: `Monthly`,
          description: `Custom scheduled task frequency option for months`,
        },
        yearly: {
          id: `inbox.automations.customFrequency.yearly`,
          defaultMessage: `Yearly`,
          description: `Custom scheduled task frequency option for years`,
        },
        hourlyUnit: {
          id: `inbox.automations.customFrequencyUnit.hours`,
          defaultMessage: `{count, plural, one {hour} other {hours}}`,
          description: `Unit shown after a custom hourly schedule interval`,
        },
        dailyUnit: {
          id: `inbox.automations.customFrequencyUnit.days`,
          defaultMessage: `{count, plural, one {day} other {days}}`,
          description: `Unit shown after a custom daily schedule interval`,
        },
        weeklyUnit: {
          id: `inbox.automations.customFrequencyUnit.weeks`,
          defaultMessage: `{count, plural, one {week} other {weeks}}`,
          description: `Unit shown after a custom weekly schedule interval`,
        },
        monthlyUnit: {
          id: `inbox.automations.customFrequencyUnit.months`,
          defaultMessage: `{count, plural, one {month} other {months}}`,
          description: `Unit shown after a custom monthly schedule interval`,
        },
        yearlyUnit: {
          id: `inbox.automations.customFrequencyUnit.years`,
          defaultMessage: `{count, plural, one {year} other {years}}`,
          description: `Unit shown after a custom yearly schedule interval`,
        },
      })),
      (st = { hourly: $.hourly, daily: $.daily, weekly: $.weekly, monthly: $.monthly, yearly: $.yearly }),
      (ct = {
        hourly: $.hourlyUnit,
        daily: $.dailyUnit,
        weekly: $.weeklyUnit,
        monthly: $.monthlyUnit,
        yearly: $.yearlyUnit,
      }));
  }))();
}
export {
  $e as a,
  Ve as c,
  Be as d,
  Ee as f,
  H as g,
  R as h,
  Xe as i,
  We as l,
  Oe as m,
  nt as n,
  Ge as o,
  Te as p,
  lt as r,
  Ye as s,
  et as t,
  Pe as u,
};
//# sourceMappingURL=automation-frequency-section-caeb4180ce42.js.map
