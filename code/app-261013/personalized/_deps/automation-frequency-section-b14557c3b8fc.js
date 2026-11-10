import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AO as r,
  BE as i,
  CO as a,
  IDt as o,
  JC as s,
  L$ as c,
  Mz as ee,
  Nz as l,
  R$ as u,
  RE as d,
  TO as f,
  UE as p,
  VDt as m,
  Xh as h,
  Yh as g,
  _Mt as _,
  _O as v,
  b0 as y,
  cO as b,
  cz as x,
  fO as S,
  gMt as C,
  gO as w,
  iw as T,
  jDt as E,
  kDt as D,
  l0 as te,
  lO as O,
  mO as ne,
  oO as re,
  qC as k,
  sO as ie,
  sz as A,
  t3 as j,
  tw as M,
  u0 as N,
  vO as P,
  vzt as F,
  xMt as I,
  y0 as ae,
  yzt as oe,
  zE as se,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Ar as ce,
  DPn as le,
  HAr as ue,
  JAr as de,
  MRt as L,
  NRt as R,
  QAr as z,
  TPn as fe,
  WAr as pe,
  YAr as me,
  ZAr as he,
  lAr as ge,
  sAr as _e,
  tjr as ve,
} from "./app-initial-5851df3f6cb1.js";
import { n as ye, t as be } from "./DatePicker-ab3817e664c5.js";
function B(e, t) {
  let n = he(e);
  return n ? t.formatTime(new Date(2024, 0, 1, n.hour, n.minute), { hour: `numeric`, minute: `2-digit` }) : e;
}
var xe, V, Se, H, U, Ce, we, Te, Ee;
function W() {
  return (W = e(() => {
    (E(),
      z(),
      (xe = 1440),
      (V = 15),
      (Se = Array.from({ length: xe / V }, (e, t) => {
        let n = t * V;
        return me(Math.floor(n / 60), n % 60);
      })),
      (H = [
        {
          id: `hourly`,
          labelMessage: D({
            id: `settings.automations.scheduleMode.interval`,
            defaultMessage: `Interval`,
            description: `Dropdown label for a repeating automation interval schedule`,
          }),
        },
        {
          id: `daily`,
          labelMessage: D({
            id: `settings.automations.scheduleMode.daily`,
            defaultMessage: `Daily`,
            description: `Dropdown label for a daily automation schedule`,
          }),
        },
        {
          id: `weekdays`,
          labelMessage: D({
            id: `settings.automations.scheduleMode.weekdays`,
            defaultMessage: `Weekdays`,
            description: `Dropdown label for a weekdays-only automation schedule`,
          }),
        },
        {
          id: `weekly`,
          labelMessage: D({
            id: `settings.automations.scheduleMode.weekly`,
            defaultMessage: `Weekly`,
            description: `Dropdown label for a weekly automation schedule`,
          }),
        },
      ]),
      (U = {
        id: `custom`,
        labelMessage: D({
          id: `settings.automations.scheduleMode.custom`,
          defaultMessage: `Custom`,
          description: `Dropdown label for a custom automation schedule`,
        }),
      }),
      (Ce = [...H, U]),
      (we = [
        ...H,
        {
          id: `monthly`,
          labelMessage: D({
            id: `settings.automations.scheduleMode.monthly`,
            defaultMessage: `Monthly`,
            description: `Dropdown label for a monthly cloud automation schedule`,
          }),
        },
        U,
      ]),
      (Te = Array.from({ length: 31 }, (e, t) => t + 1)),
      (Ee = [
        {
          id: `MO`,
          labelMessage: D({
            id: `settings.automations.rrule.weekday.mon`,
            defaultMessage: `Mo`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: D({
            id: `settings.automations.rrule.weekday.monday`,
            defaultMessage: `Monday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `TU`,
          labelMessage: D({
            id: `settings.automations.rrule.weekday.tue`,
            defaultMessage: `Tu`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: D({
            id: `settings.automations.rrule.weekday.tuesday`,
            defaultMessage: `Tuesday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `WE`,
          labelMessage: D({
            id: `settings.automations.rrule.weekday.wed`,
            defaultMessage: `We`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: D({
            id: `settings.automations.rrule.weekday.wednesday`,
            defaultMessage: `Wednesday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `TH`,
          labelMessage: D({
            id: `settings.automations.rrule.weekday.thu`,
            defaultMessage: `Th`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: D({
            id: `settings.automations.rrule.weekday.thursday`,
            defaultMessage: `Thursday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `FR`,
          labelMessage: D({
            id: `settings.automations.rrule.weekday.fri`,
            defaultMessage: `Fr`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: D({
            id: `settings.automations.rrule.weekday.friday`,
            defaultMessage: `Friday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `SA`,
          labelMessage: D({
            id: `settings.automations.rrule.weekday.sat`,
            defaultMessage: `Sa`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: D({
            id: `settings.automations.rrule.weekday.saturday`,
            defaultMessage: `Saturday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `SU`,
          labelMessage: D({
            id: `settings.automations.rrule.weekday.sun`,
            defaultMessage: `Su`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: D({
            id: `settings.automations.rrule.weekday.sunday`,
            defaultMessage: `Sunday`,
            description: `RRULE weekday long label`,
          }),
        },
      ]));
  }))();
}
function De(e) {
  let n = (0, K.c)(26),
    { appearance: r, value: i, onChange: o } = e,
    s = r === void 0 ? `default` : r,
    c = m(),
    [l, u] = (0, Oe.useState)(null),
    d;
  n[0] !== c || n[1] !== i
    ? ((d =
        i.length <= 3
          ? i.join(`, `)
          : c.formatMessage(
              {
                id: `inbox.automations.customMonthDays.summary`,
                defaultMessage: `{count, plural, one {# day} other {# days}}`,
                description: `Summary of selected days in a custom monthly schedule`,
              },
              { count: i.length },
            )),
      (n[0] = c),
      (n[1] = i),
      (n[2] = d))
    : (d = n[2]);
  let p = d,
    h;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (e) => {
        u(e?.closest(`.codex-dialog`) ?? null);
      }),
      (n[3] = h))
    : (h = n[3]);
  let _;
  n[4] === c
    ? (_ = n[5])
    : ((_ = c.formatMessage({
        id: `inbox.automations.customMonthDays.ariaLabel`,
        defaultMessage: `Days of the month`,
        description: `Accessible label for the custom schedule days of month selector`,
      })),
      (n[4] = c),
      (n[5] = _));
  let v = s === `form` ? `ghostTertiary` : `ghost`,
    y = s === `form` ? `formValue` : `composerSm`,
    b = s === "default" && `text-base text-default`,
    x;
  n[6] === b ? (x = n[7]) : ((x = C(`max-w-40 truncate tabular-nums`, b)), (n[6] = b), (n[7] = x));
  let S;
  n[8] !== p || n[9] !== x
    ? ((S = (0, q.jsx)(`span`, { className: x, children: p })), (n[8] = p), (n[9] = x), (n[10] = S))
    : (S = n[10]);
  let w = s === `form` ? g : te,
    T;
  n[11] === w ? (T = n[12]) : ((T = (0, q.jsx)(ee, { asset: w })), (n[11] = w), (n[12] = T));
  let E;
  n[13] !== T || n[14] !== _ || n[15] !== v || n[16] !== y || n[17] !== S
    ? ((E = (0, q.jsxs)(t, {
        ref: h,
        "aria-label": _,
        className: `max-w-full min-w-0`,
        color: v,
        size: y,
        children: [S, T],
      })),
      (n[13] = T),
      (n[14] = _),
      (n[15] = v),
      (n[16] = y),
      (n[17] = S),
      (n[18] = E))
    : (E = n[18]);
  let D;
  n[19] !== o || n[20] !== i
    ? ((D = Te.map((e) => {
        let t = i.includes(e);
        return (0, q.jsx)(
          f.CheckboxItem,
          {
            checked: t,
            onCheckedChange: (t) => {
              let n = t === !0 ? [...i, e].sort(G) : i.filter((t) => t !== e);
              n.length > 0 && o(n);
            },
            children: e,
          },
          e,
        );
      })),
      (n[19] = o),
      (n[20] = i),
      (n[21] = D))
    : (D = n[21]);
  let O;
  return (
    n[22] !== l || n[23] !== E || n[24] !== D
      ? ((O = (0, q.jsx)(a, {
          scrollFade: !0,
          align: `end`,
          contentMaxHeight: `tall`,
          contentWidth: `sm`,
          portalContainer: l,
          triggerButton: E,
          children: D,
        })),
        (n[22] = l),
        (n[23] = E),
        (n[24] = D),
        (n[25] = O))
      : (O = n[25]),
    O
  );
}
function G(e, t) {
  return e - t;
}
var K, Oe, q;
function ke() {
  return (ke = e(() => {
    ((K = F()), N(), h(), _(), (Oe = oe()), E(), W(), j(), r(), l(), (q = I()));
  }))();
}
function Ae(e) {
  let t = (0, J.c)(24),
    { appearance: n, ariaLabel: r, max: i, min: a, step: o, suffix: s, value: c, onChange: ee } = e,
    l = n === void 0 ? `default` : n,
    u = o === void 0 ? 1 : o,
    d = l === `form` ? `text-form-body` : `text-base`,
    f;
  t[0] === d ? (f = t[1]) : ((f = C(`flex items-center gap-1.5 text-default`, d)), (t[0] = d), (t[1] = f));
  let p = String(c),
    m = u === 1 ? `numeric` : `decimal`,
    h = u === 1 ? `[0-9]*` : `[0-9]*[.]?[0-9]*`,
    g;
  t[2] !== i || t[3] !== a || t[4] !== ee || t[5] !== u || t[6] !== c
    ? ((g = (e) => {
        if (e.currentTarget.value === String(c)) return;
        if (e.currentTarget.value.length === 0 || !Number.isFinite(Number(e.currentTarget.value))) {
          e.currentTarget.value = String(c);
          return;
        }
        let t = Math.min(i, Math.max(a, Math.round(Number(e.currentTarget.value) / u) * u));
        ((e.currentTarget.value = String(t)), t !== c && ee(t));
      }),
      (t[2] = i),
      (t[3] = a),
      (t[4] = ee),
      (t[5] = u),
      (t[6] = c),
      (t[7] = g))
    : (g = t[7]);
  let _;
  t[8] === u
    ? (_ = t[9])
    : ((_ = (e) => {
        e.currentTarget.value = e.currentTarget.value.replaceAll(u === 1 ? /[^0-9]/g : /[^0-9.]/g, ``);
      }),
      (t[8] = u),
      (t[9] = _));
  let v;
  t[10] !== r || t[11] !== p || t[12] !== m || t[13] !== h || t[14] !== g || t[15] !== _ || t[16] !== c
    ? ((v = (0, Y.jsx)(
        `input`,
        {
          "aria-label": r,
          className: `w-12 bg-transparent text-end tabular-nums outline-none`,
          defaultValue: p,
          inputMode: m,
          pattern: h,
          type: `text`,
          onBlur: g,
          onChange: _,
        },
        c,
      )),
      (t[10] = r),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _),
      (t[16] = c),
      (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] === s
    ? (y = t[19])
    : ((y = s == null ? null : (0, Y.jsx)(`span`, { className: `text-codex-description`, children: s })),
      (t[18] = s),
      (t[19] = y));
  let b;
  return (
    t[20] !== v || t[21] !== y || t[22] !== f
      ? ((b = (0, Y.jsxs)(`label`, { className: f, children: [v, y] })),
        (t[20] = v),
        (t[21] = y),
        (t[22] = f),
        (t[23] = b))
      : (b = t[23]),
    b
  );
}
var J, Y;
function je() {
  return (je = e(() => {
    ((J = F()), _(), (Y = I()));
  }))();
}
function Me(e, t) {
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
function Ne(e) {
  let t = (0, Re.c)(112),
    { appearance: n, value: r, onChange: a, isOptionVisible: o, timeZone: s, date: c } = e,
    l = n === void 0 ? `default` : n,
    u = m(),
    f = (0, X.useId)(),
    p = (0, X.useRef)(null),
    h = (0, X.useRef)(r),
    [_, v] = (0, X.useState)(!1),
    [y, b] = (0, X.useState)(!1),
    [x, S] = (0, X.useState)(``),
    [w, T] = (0, X.useState)(null),
    [E, D] = (0, X.useState)(r),
    [O, ne] = (0, X.useState)(),
    re;
  t[0] !== o || t[1] !== r
    ? ((re = [...new Set([...Se, r])].filter((e) => o?.(e) ?? !0).sort()),
      (t[0] = o),
      (t[1] = r),
      (t[2] = re))
    : (re = t[2]);
  let k = re,
    ie;
  t[3] !== o || t[4] !== w
    ? ((ie = w != null && (o?.(w) ?? !0)), (t[3] = o), (t[4] = w), (t[5] = ie))
    : (ie = t[5]);
  let A = ie,
    j;
  t[6] === u
    ? (j = t[7])
    : ((j = u.formatMessage({
        id: `settings.automations.scheduleTime`,
        defaultMessage: `Time`,
        description: `Accessible label for the automation schedule time input`,
      })),
      (t[6] = u),
      (t[7] = j));
  let M = j,
    N;
  t[8] !== c || t[9] !== u || t[10] !== s || t[11] !== r
    ? ((N =
        s == null
          ? B(r, u)
          : u.formatTime(_e(c ?? `2026-01-01`, r, s, 0), {
              timeZone: s,
              hour: `numeric`,
              minute: `2-digit`,
              timeZoneName: c == null ? `shortGeneric` : `short`,
            })),
      (t[8] = c),
      (t[9] = u),
      (t[10] = s),
      (t[11] = r),
      (t[12] = N))
    : (N = t[12]);
  let P = N,
    F;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = () => {
        (v(!1), b(!1), S(``));
      }),
      (t[13] = F))
    : (F = t[13]);
  let I = F,
    oe;
  t[14] !== y || t[15] !== a || t[16] !== w || t[17] !== A
    ? ((oe = () => {
        (y && A && a(w), I());
      }),
      (t[14] = y),
      (t[15] = a),
      (t[16] = w),
      (t[17] = A),
      (t[18] = oe))
    : (oe = t[18]);
  let ce = oe,
    le;
  t[19] === a
    ? (le = t[20])
    : ((le = (e) => {
        (a(e), I(), p.current?.focus());
      }),
      (t[19] = a),
      (t[20] = le));
  let ue = le,
    de;
  t[21] !== _ || t[22] !== r
    ? ((de = () => {
        _ || (D(r), v(!0));
      }),
      (t[21] = _),
      (t[22] = r),
      (t[23] = de))
    : (de = t[23]);
  let L = de,
    R;
  t[24] !== y || t[25] !== k || t[26] !== w || t[27] !== r
    ? ((R = (e) => {
        (S(e), y ? e === `` && w != null && (h.current = w) : (h.current = r));
        let t = Me(e, h.current);
        if ((T(t), t != null && k.length > 0)) {
          let e = Le,
            n = e(t),
            r = k.reduce((t, r) => (Math.abs(e(r) - n) < Math.abs(e(t) - n) ? r : t));
          D(r);
        }
      }),
      (t[24] = y),
      (t[25] = k),
      (t[26] = w),
      (t[27] = r),
      (t[28] = R))
    : (R = t[28]);
  let z = R,
    fe;
  t[29] !== ce || t[30] !== L
    ? ((fe = (e) => {
        e ? L() : ce();
      }),
      (t[29] = ce),
      (t[30] = L),
      (t[31] = fe))
    : (fe = t[31]);
  let pe =
      l === `form`
        ? `min-h-10 text-form-body text-secondary`
        : `h-token-button-composer-sm text-base leading-5 text-tertiary`,
    me;
  t[32] === pe
    ? (me = t[33])
    : ((me = C(
        `inline-flex min-w-0 items-center gap-2 rounded-md has-focus-visible:outline has-focus-visible:outline-2`,
        pe,
      )),
      (t[32] = pe),
      (t[33] = me));
  let he = _ ? f : void 0,
    ge = _ ? `${f}-${E}` : void 0,
    ve = y && x !== `` && !A,
    ye = !y,
    be = y ? x : P,
    xe = Math.max(P.length, x.length, 5),
    V = !y && `cursor-interaction caret-transparent`,
    H;
  t[34] === V
    ? (H = t[35])
    : ((H = C(
        `min-w-0 max-w-full border-0 bg-transparent p-0 text-end text-[length:inherit] leading-[inherit] text-inherit tabular-nums outline-none`,
        V,
      )),
      (t[34] = V),
      (t[35] = H));
  let U;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (e) => ne(e.currentTarget.closest(`[role="dialog"]`) ?? void 0)), (t[36] = U))
    : (U = t[36]);
  let Ce;
  t[37] === z ? (Ce = t[38]) : ((Ce = (e) => z(e.target.value)), (t[37] = z), (t[38] = Ce));
  let we;
  t[39] !== E ||
  t[40] !== ce ||
  t[41] !== y ||
  t[42] !== x.length ||
  t[43] !== _ ||
  t[44] !== k ||
  t[45] !== w ||
  t[46] !== ue ||
  t[47] !== L ||
  t[48] !== z ||
  t[49] !== A
    ? ((we = (e) => {
        if (!e.nativeEvent.isComposing) {
          if (
            (y &&
              w != null &&
              e.currentTarget.selectionStart === 0 &&
              e.currentTarget.selectionEnd === x.length &&
              !e.metaKey &&
              !e.ctrlKey &&
              !e.altKey &&
              (e.key.length === 1 || e.key === `Backspace` || e.key === `Delete`) &&
              (h.current = w),
            e.key === `Escape`)
          )
            (e.preventDefault(), e.stopPropagation(), I());
          else if (e.key === `Tab`) ce();
          else if (e.key === `Enter`)
            (e.preventDefault(), e.stopPropagation(), _ ? (y ? A && ce() : k.includes(E) && ue(E)) : L());
          else if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
            if ((e.preventDefault(), !_)) L();
            else {
              let t = k.indexOf(E),
                n = k[Math.max(0, Math.min(k.length - 1, t + (e.key === `ArrowDown` ? 1 : -1)))];
              n != null &&
                (D(n),
                T(n),
                S(
                  `${Number(n.slice(0, 2)) % 12 || 12}:${n.slice(3)} ${Number(n.slice(0, 2)) >= 12 ? `pm` : `am`}`,
                ),
                b(!0));
            }
          } else
            !y &&
              !e.metaKey &&
              !e.ctrlKey &&
              !e.altKey &&
              (e.key.length === 1 || e.key === `Backspace` || e.key === `Delete`) &&
              (e.preventDefault(), L(), b(!0), z(e.key.length === 1 ? e.key : ``));
        }
      }),
      (t[39] = E),
      (t[40] = ce),
      (t[41] = y),
      (t[42] = x.length),
      (t[43] = _),
      (t[44] = k),
      (t[45] = w),
      (t[46] = ue),
      (t[47] = L),
      (t[48] = z),
      (t[49] = A),
      (t[50] = we))
    : (we = t[50]);
  let Te;
  t[51] !== y || t[52] !== w || t[53] !== L || t[54] !== z
    ? ((Te = (e) => {
        (e.preventDefault(),
          L(),
          b(!0),
          y && w != null && (h.current = w),
          z(e.clipboardData.getData(`text`)));
      }),
      (t[51] = y),
      (t[52] = w),
      (t[53] = L),
      (t[54] = z),
      (t[55] = Te))
    : (Te = t[55]);
  let Ee;
  t[56] !== M ||
  t[57] !== _ ||
  t[58] !== L ||
  t[59] !== he ||
  t[60] !== ge ||
  t[61] !== ve ||
  t[62] !== ye ||
  t[63] !== be ||
  t[64] !== xe ||
  t[65] !== H ||
  t[66] !== Ce ||
  t[67] !== we ||
  t[68] !== Te
    ? ((Ee = (0, ze.jsx)(`input`, {
        ref: p,
        role: `combobox`,
        "aria-label": M,
        "aria-expanded": _,
        "aria-controls": he,
        "aria-activedescendant": ge,
        "aria-autocomplete": `none`,
        "aria-invalid": ve,
        autoComplete: `off`,
        readOnly: ye,
        value: be,
        size: xe,
        className: H,
        onFocus: U,
        onClick: L,
        onChange: Ce,
        onKeyDown: we,
        onPaste: Te,
      })),
      (t[56] = M),
      (t[57] = _),
      (t[58] = L),
      (t[59] = he),
      (t[60] = ge),
      (t[61] = ve),
      (t[62] = ye),
      (t[63] = be),
      (t[64] = xe),
      (t[65] = H),
      (t[66] = Ce),
      (t[67] = we),
      (t[68] = Te),
      (t[69] = Ee))
    : (Ee = t[69]);
  let W;
  t[70] === L
    ? (W = t[71])
    : ((W = () => {
        (p.current?.focus(), L());
      }),
      (t[70] = L),
      (t[71] = W));
  let De = l === `form` ? g : te,
    G;
  t[72] === De ? (G = t[73]) : ((G = (0, ze.jsx)(ee, { asset: De })), (t[72] = De), (t[73] = G));
  let K;
  t[74] !== M || t[75] !== W || t[76] !== G
    ? ((K = (0, ze.jsx)(`button`, {
        type: `button`,
        tabIndex: -1,
        "aria-label": M,
        className: `shrink-0 cursor-interaction`,
        onClick: W,
        children: G,
      })),
      (t[74] = M),
      (t[75] = W),
      (t[76] = G),
      (t[77] = K))
    : (K = t[77]);
  let Oe;
  t[78] !== me || t[79] !== Ee || t[80] !== K
    ? ((Oe = (0, ze.jsx)(se, {
        asChild: !0,
        children: (0, ze.jsxs)(`div`, { className: me, children: [Ee, K] }),
      })),
      (t[78] = me),
      (t[79] = Ee),
      (t[80] = K),
      (t[81] = Oe))
    : (Oe = t[81]);
  let q, ke;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (e) => {
        e.target instanceof Node && p.current?.parentElement?.contains(e.target) && e.preventDefault();
      }),
      (ke = (e) => {
        (e.preventDefault(), I());
      }),
      (t[82] = q),
      (t[83] = ke))
    : ((q = t[82]), (ke = t[83]));
  let Ae;
  t[84] === E
    ? (Ae = t[85])
    : ((Ae = (e) => {
        let t = e?.querySelector(`[data-time="${E}"]`);
        e != null && t != null && (e.scrollTop = t.offsetTop - (e.clientHeight - t.offsetHeight) / 2);
      }),
      (t[84] = E),
      (t[85] = Ae));
  let J;
  if (t[86] !== E || t[87] !== u || t[88] !== f || t[89] !== k || t[90] !== ue || t[91] !== r) {
    let e;
    (t[93] !== E || t[94] !== u || t[95] !== f || t[96] !== ue || t[97] !== r
      ? ((e = (e) =>
          (0, ze.jsxs)(
            `button`,
            {
              id: `${f}-${e}`,
              type: `button`,
              role: `option`,
              "aria-selected": e === E,
              "data-time": e,
              tabIndex: -1,
              className: C(
                `flex w-full cursor-interaction items-center justify-between gap-2 rounded-xl px-row-x py-row-y text-sm text-default tabular-nums hover:bg-primary-ghost-hover`,
                e === E && `bg-primary-ghost-hover`,
              ),
              onPointerDown: Pe,
              onClick: () => ue(e),
              children: [B(e, u), e === r ? (0, ze.jsx)(ee, { asset: ae }) : null],
            },
            e,
          )),
        (t[93] = E),
        (t[94] = u),
        (t[95] = f),
        (t[96] = ue),
        (t[97] = r),
        (t[98] = e))
      : (e = t[98]),
      (J = k.map(e)),
      (t[86] = E),
      (t[87] = u),
      (t[88] = f),
      (t[89] = k),
      (t[90] = ue),
      (t[91] = r),
      (t[92] = J));
  } else J = t[92];
  let Y;
  t[99] !== M || t[100] !== f || t[101] !== Ae || t[102] !== J
    ? ((Y = (0, ze.jsx)(`div`, {
        ref: Ae,
        id: f,
        role: `listbox`,
        "aria-label": M,
        className: `relative max-h-72 min-h-0 overflow-y-auto`,
        children: J,
      })),
      (t[99] = M),
      (t[100] = f),
      (t[101] = Ae),
      (t[102] = J),
      (t[103] = Y))
    : (Y = t[103]);
  let je;
  t[104] !== O || t[105] !== Y
    ? ((je = (0, ze.jsx)(i, {
        align: `end`,
        variant: `menu`,
        size: `content`,
        className: `min-w-40 overflow-hidden`,
        portalContainer: O,
        onOpenAutoFocus: Ie,
        onCloseAutoFocus: Fe,
        onInteractOutside: q,
        onEscapeKeyDown: ke,
        children: Y,
      })),
      (t[104] = O),
      (t[105] = Y),
      (t[106] = je))
    : (je = t[106]);
  let Ne;
  return (
    t[107] !== _ || t[108] !== fe || t[109] !== Oe || t[110] !== je
      ? ((Ne = (0, ze.jsxs)(d, { open: _, onOpenChange: fe, children: [Oe, je] })),
        (t[107] = _),
        (t[108] = fe),
        (t[109] = Oe),
        (t[110] = je),
        (t[111] = Ne))
      : (Ne = t[111]),
    Ne
  );
}
function Pe(e) {
  return e.preventDefault();
}
function Fe(e) {
  return e.preventDefault();
}
function Ie(e) {
  return e.preventDefault();
}
function Le(e) {
  return Number(e.slice(0, 2)) * 60 + Number(e.slice(3));
}
var Re, X, ze;
function Be() {
  return (Be = e(() => {
    ((Re = F()), y(), N(), h(), _(), (X = oe()), E(), W(), ge(), l(), p(), (ze = I()));
  }))();
}
function Ve(e) {
  let n = (0, He.c)(44),
    {
      appearance: r,
      ariaLabel: i,
      disabled: s,
      error: c,
      options: l,
      selectedId: u,
      selectedLabel: d,
      onSelect: p,
    } = e,
    m = r === void 0 ? `default` : r,
    h = s !== void 0 && s,
    _ = (0, Ue.useId)(),
    v = (0, Ue.useRef)(null),
    y;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (e) => {
        let t = v.current?.querySelector(`[data-selected="true"]`);
        t != null &&
          (e.preventDefault(),
          t.focus({ preventScroll: !0 }),
          requestAnimationFrame(() => {
            t.scrollIntoView({ block: `nearest` });
          }));
      }),
      (n[0] = y))
    : (y = n[0]);
  let b = c != null || void 0,
    x = c == null ? void 0 : _,
    S = m === `form` && `not-disabled:not-aria-disabled:text-secondary`,
    w = m === "default" && `pe-0`,
    T;
  n[1] !== S || n[2] !== w
    ? ((T = C(`max-w-full min-w-0`, S, w)), (n[1] = S), (n[2] = w), (n[3] = T))
    : (T = n[3]);
  let E = m === `form` ? `ghostTertiary` : `ghost`,
    D = m === `form` ? `formValue` : `composerSm`,
    O;
  n[4] !== c || n[5] !== _
    ? ((O = c == null ? null : (0, Z.jsx)(`span`, { id: _, className: `sr-only`, children: c })),
      (n[4] = c),
      (n[5] = _),
      (n[6] = O))
    : (O = n[6]);
  let ne;
  n[7] === c
    ? (ne = n[8])
    : ((ne =
        c == null
          ? null
          : (0, Z.jsx)(L, {
              variant: `caution`,
              children: (0, Z.jsx)(o, {
                id: `automation.schedule.unsupportedInterval`,
                defaultMessage: `Unsupported`,
                description: `Badge beside a selected automation interval that the current owner's schedule policy does not allow. The user must choose a supported interval to save.`,
              }),
            })),
      (n[7] = c),
      (n[8] = ne));
  let re = m === "default" && `text-tertiary`,
    k = m === "default" && `text-base leading-5`,
    ie;
  n[9] !== re || n[10] !== k
    ? ((ie = C(`truncate`, re, k)), (n[9] = re), (n[10] = k), (n[11] = ie))
    : (ie = n[11]);
  let j;
  n[12] !== d || n[13] !== ie
    ? ((j = (0, Z.jsx)(`span`, { className: ie, children: d })), (n[12] = d), (n[13] = ie), (n[14] = j))
    : (j = n[14]);
  let M = m === "default" ? `text-tertiary` : void 0,
    N = m === `form` ? g : te,
    P;
  n[15] !== M || n[16] !== N
    ? ((P = (0, Z.jsx)(ee, { className: M, asset: N })), (n[15] = M), (n[16] = N), (n[17] = P))
    : (P = n[17]);
  let F;
  n[18] !== i ||
  n[19] !== h ||
  n[20] !== D ||
  n[21] !== O ||
  n[22] !== ne ||
  n[23] !== j ||
  n[24] !== P ||
  n[25] !== b ||
  n[26] !== x ||
  n[27] !== T ||
  n[28] !== E
    ? ((F = (0, Z.jsxs)(t, {
        "aria-label": i,
        "aria-invalid": b,
        "aria-describedby": x,
        disabled: h,
        className: T,
        color: E,
        size: D,
        children: [O, ne, j, P],
      })),
      (n[18] = i),
      (n[19] = h),
      (n[20] = D),
      (n[21] = O),
      (n[22] = ne),
      (n[23] = j),
      (n[24] = P),
      (n[25] = b),
      (n[26] = x),
      (n[27] = T),
      (n[28] = E),
      (n[29] = F))
    : (F = n[29]);
  let I;
  if (n[30] !== p || n[31] !== l || n[32] !== u) {
    let e;
    (n[34] !== p || n[35] !== u
      ? ((e = (e) =>
          (0, Z.jsx)(
            f.Item,
            {
              "data-selected": e.id === u,
              rightIconAsset: e.id === u ? ae : void 0,
              onSelect: () => {
                p(e.id);
              },
              children: e.label,
            },
            e.id,
          )),
        (n[34] = p),
        (n[35] = u),
        (n[36] = e))
      : (e = n[36]),
      (I = l.map(e)),
      (n[30] = p),
      (n[31] = l),
      (n[32] = u),
      (n[33] = I));
  } else I = n[33];
  let oe;
  n[37] !== h || n[38] !== F || n[39] !== I
    ? ((oe = (0, Z.jsx)(a, {
        scrollFade: !0,
        disabled: h,
        modal: !0,
        align: `end`,
        contentRef: v,
        onOpenAutoFocus: y,
        contentWidth: `sm`,
        contentMaxHeight: `list`,
        triggerButton: F,
        children: I,
      })),
      (n[37] = h),
      (n[38] = F),
      (n[39] = I),
      (n[40] = oe))
    : (oe = n[40]);
  let se;
  return (
    n[41] !== c || n[42] !== oe
      ? ((se = (0, Z.jsx)(A, { tooltipContent: c, children: oe })), (n[41] = c), (n[42] = oe), (n[43] = se))
      : (se = n[43]),
    se
  );
}
var He, Ue, Z;
function We() {
  return (We = e(() => {
    ((He = F()), y(), N(), h(), _(), (Ue = oe()), E(), R(), j(), r(), l(), x(), (Z = I()));
  }))();
}
function Ge(e) {
  let n = (0, qe.c)(20),
    { appearance: r, value: i, onChange: o, weekdayLabelFormat: s } = e,
    c = r === void 0 ? `default` : r,
    l = m(),
    u;
  if (n[0] !== c || n[1] !== l || n[2] !== o || n[3] !== i || n[4] !== s) {
    let e;
    n[6] !== l || n[7] !== s
      ? ((e = (e, t) => ({
          id: e.id,
          label:
            s === `short`
              ? l.formatDate(Date.UTC(2024, 0, t + 1), { weekday: `short`, timeZone: `UTC` })
              : l.formatMessage(e.longLabelMessage),
        })),
        (n[6] = l),
        (n[7] = s),
        (n[8] = e))
      : (e = n[8]);
    let r = Ee.map(e),
      d;
    n[9] === i ? (d = n[10]) : ((d = (e) => i.includes(e.id)), (n[9] = i), (n[10] = d));
    let p = r.filter(d).map(Ke),
      m;
    n[11] === l
      ? (m = n[12])
      : ((m = l.formatMessage({
          id: `inbox.automations.customWeekdays.ariaLabel`,
          defaultMessage: `Days of the week`,
          description: `Accessible label for the custom schedule weekdays selector`,
        })),
        (n[11] = l),
        (n[12] = m));
    let h = c === "default" && `text-base text-default`,
      _;
    n[13] === h ? (_ = n[14]) : ((_ = C(`truncate`, h)), (n[13] = h), (n[14] = _));
    let v = c === `form` ? g : te,
      y;
    n[15] === v ? (y = n[16]) : ((y = (0, Je.jsx)(ee, { asset: v })), (n[15] = v), (n[16] = y));
    let b;
    (n[17] !== o || n[18] !== i
      ? ((b = (e) => {
          let t = i.includes(e.id);
          return (0, Je.jsx)(
            f.CheckboxItem,
            {
              checked: t,
              onCheckedChange: (t) => {
                let n = t === !0 ? [...i, e.id] : i.filter((t) => t !== e.id);
                n.length > 0 && o(n);
              },
              children: e.label,
            },
            e.id,
          );
        }),
        (n[17] = o),
        (n[18] = i),
        (n[19] = b))
      : (b = n[19]),
      (u = (0, Je.jsx)(a, {
        scrollFade: !0,
        align: `end`,
        contentWidth: `sm`,
        triggerButton: (0, Je.jsxs)(t, {
          "aria-label": m,
          className: `max-w-full min-w-0`,
          color: c === `form` ? `ghostTertiary` : `ghost`,
          size: c === `form` ? `formValue` : `composerSm`,
          children: [
            (0, Je.jsx)(`span`, { className: _, children: l.formatList(p, { type: `conjunction` }) }),
            y,
          ],
        }),
        children: r.map(b),
      })),
      (n[0] = c),
      (n[1] = l),
      (n[2] = o),
      (n[3] = i),
      (n[4] = s),
      (n[5] = u));
  } else u = n[5];
  return u;
}
function Ke(e) {
  return e.label;
}
var qe, Je;
function Ye() {
  return (Ye = e(() => {
    ((qe = F()), N(), h(), _(), E(), W(), j(), r(), l(), (Je = I()));
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
    ((Ze = F()), (Qe = I()));
  }))();
}
function et(e) {
  let n = (0, rt.c)(174),
    {
      appearance: r,
      afterScheduleRows: i,
      beforeScheduleRows: a,
      grouped: s,
      showCustomRuleFallback: l,
      frequencyLabel: u,
      heading: d,
      scheduleConfig: f,
      intervalStyle: p,
      scheduleSource: h,
      minuteIntervals: g,
      minuteIntervalDisabled: _,
      minuteIntervalError: y,
      timeZone: x,
      onChangeEndDate: S,
      onUpdateScheduleDraft: C,
    } = e,
    T = r === void 0 ? `default` : r,
    E = s !== void 0 && s,
    D = l !== void 0 && l,
    te = _ !== void 0 && _,
    A = m(),
    [j, N] = (0, it.useState)(!1),
    [P, F] = (0, it.useState)(``),
    I;
  n[0] === f.intervalMinutes
    ? (I = n[1])
    : ((I = () => (f.intervalMinutes != null && f.intervalMinutes % 60 != 0 ? `minute` : `hour`)),
      (n[0] = f.intervalMinutes),
      (n[1] = I));
  let [ae, oe] = (0, it.useState)(I),
    se = p === `heartbeat`,
    le = f.intervalMinutes ?? f.intervalHours * 60,
    L = h === `local` || (g != null && g.length > 0) || f.intervalMinutes != null,
    R = L ? ae : `hour`,
    z = R === `hour` ? 60 : 1,
    me = f.intervalMinutes != null && (h === `local` || (g != null && g.length > 0)),
    he = h === `cloud` ? we : Ce,
    ge;
  if (n[2] !== A || n[3] !== he) {
    let e;
    (n[5] === A
      ? (e = n[6])
      : ((e = (e) => ({ id: e.id, label: A.formatMessage(e.labelMessage) })), (n[5] = A), (n[6] = e)),
      (ge = he.map(e)),
      (n[2] = A),
      (n[3] = he),
      (n[4] = ge));
  } else ge = n[4];
  let _e = ge,
    ye,
    be,
    B,
    xe,
    V,
    Se,
    H,
    U,
    W,
    G,
    K,
    Oe,
    q,
    ke,
    J,
    Y;
  if (
    n[7] !== T ||
    n[8] !== a ||
    n[9] !== L ||
    n[10] !== u ||
    n[11] !== E ||
    n[12] !== d ||
    n[13] !== le ||
    n[14] !== R ||
    n[15] !== A ||
    n[16] !== se ||
    n[17] !== te ||
    n[18] !== y ||
    n[19] !== g ||
    n[20] !== _e ||
    n[21] !== S ||
    n[22] !== C ||
    n[23] !== me ||
    n[24] !== P ||
    n[25] !== f ||
    n[26] !== he ||
    n[27] !== h ||
    n[28] !== x ||
    n[29] !== z
  ) {
    let e = he.find((e) => e.id === f.mode) ?? he[0],
      r = f.weekdays[0] ?? Ee[0].id;
    Se = f.monthDay ?? 1;
    let i = Ee.find((e) => e.id === r) ?? Ee[0];
    H =
      f.oneTimeDate != null ||
      f.mode === `daily` ||
      f.mode === `weekdays` ||
      f.mode === `weekly` ||
      f.mode === `monthly`;
    let s;
    (n[46] !== f.customRrule || n[47] !== f.mode || n[48] !== f.oneTimeDate
      ? ((s = f.oneTimeDate == null && f.mode === `custom` ? ve(f.customRrule) : null),
        (n[46] = f.customRrule),
        (n[47] = f.mode),
        (n[48] = f.oneTimeDate),
        (n[49] = s))
      : (s = n[49]),
      (B = s));
    let l;
    (n[50] !== P || n[51] !== f
      ? ((l = ce({ ...f, mode: `custom`, customRrule: P })), (n[50] = P), (n[51] = f), (n[52] = l))
      : (l = n[52]),
      (V = l));
    let p;
    (n[53] !== C || n[54] !== f
      ? ((p = (e) => {
          C({ ...f, ...e });
        }),
        (n[53] = C),
        (n[54] = f),
        (n[55] = p))
      : (p = n[55]),
      (Y = p));
    let m;
    n[56] !== S || n[57] !== Y
      ? ((m = (e) => {
          S == null ? Y({ untilDate: e }) : S(e);
        }),
        (n[56] = S),
        (n[57] = Y),
        (n[58] = m))
      : (m = n[58]);
    let _ = m,
      v;
    (n[59] !== B || n[60] !== Y
      ? ((v = (e) => {
          B != null && Y({ customRrule: ue({ ...B, ...e }) });
        }),
        (n[59] = B),
        (n[60] = Y),
        (n[61] = v))
      : (v = n[61]),
      (J = v));
    let b;
    (n[62] !== T ||
    n[63] !== _ ||
    n[64] !== A ||
    n[65] !== f.oneTimeDate ||
    n[66] !== f.untilDate ||
    n[67] !== h ||
    n[68] !== x
      ? ((b =
          h === `cloud` && f.oneTimeDate == null
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(M, {
                    control: (0, Q.jsx)(Ve, {
                      appearance: T,
                      ariaLabel: A.formatMessage({
                        id: `inbox.automations.endRepeat.ariaLabel`,
                        defaultMessage: `End repeat`,
                        description: `Accessible label for choosing when a cloud scheduled task stops repeating`,
                      }),
                      options: [
                        { id: `never`, label: A.formatMessage($.endRepeatNever) },
                        { id: `on-date`, label: A.formatMessage($.endRepeatOnDate) },
                      ],
                      selectedId: f.untilDate == null ? `never` : `on-date`,
                      selectedLabel: A.formatMessage(
                        f.untilDate == null ? $.endRepeatNever : $.endRepeatOnDate,
                      ),
                      onSelect: (e) => {
                        if (e === (f.untilDate == null ? `never` : `on-date`)) return;
                        if (e === `never`) {
                          _(void 0);
                          return;
                        }
                        let t = new Date();
                        (t.setMonth(t.getMonth() + 1),
                          _(
                            new Intl.DateTimeFormat(`en-CA`, {
                              timeZone: x,
                              year: `numeric`,
                              month: `2-digit`,
                              day: `2-digit`,
                            }).format(t),
                          ));
                      },
                    }),
                    label: A.formatMessage({
                      id: `inbox.automations.endRepeat.label`,
                      defaultMessage: `End repeat`,
                      description: `Label for choosing when a cloud scheduled task stops repeating`,
                    }),
                    variant: `nested`,
                  }),
                  f.untilDate == null
                    ? null
                    : (0, Q.jsx)(M, {
                        control: (0, Q.jsx)(nt, {
                          appearance: T,
                          ariaLabel: A.formatMessage({
                            id: `inbox.automations.endRepeatDate.ariaLabel`,
                            defaultMessage: `End date`,
                            description: `Accessible label for the date when a cloud scheduled task stops repeating`,
                          }),
                          timeZone: x,
                          value: f.untilDate,
                          onChange: _,
                        }),
                        label: A.formatMessage({
                          id: `inbox.automations.endRepeatDate.label`,
                          defaultMessage: `Date`,
                          description: `Label for the date when a cloud scheduled task stops repeating`,
                        }),
                        variant: `nested`,
                      }),
                ],
              })
            : null),
        (n[62] = T),
        (n[63] = _),
        (n[64] = A),
        (n[65] = f.oneTimeDate),
        (n[66] = f.untilDate),
        (n[67] = h),
        (n[68] = x),
        (n[69] = b))
      : (b = n[69]),
      (xe = b),
      (be = Xe),
      n[70] !== d || n[71] !== A || n[72] !== f.customRrule || n[73] !== f.mode || n[74] !== f.oneTimeDate
        ? ((G =
            f.oneTimeDate == null && f.mode === `custom` && (d === void 0 || d != null)
              ? (0, Q.jsx)(t, {
                  "aria-label": A.formatMessage({
                    id: `inbox.automations.scheduleRule.open`,
                    defaultMessage: `Edit schedule rule`,
                    description: `Accessible label for opening the custom schedule RRULE dialog`,
                  }),
                  className: `h-7 w-7 rounded-md !p-1 text-default opacity-75 hover:opacity-100`,
                  color: `ghostActive`,
                  size: `icon`,
                  onClick: () => {
                    (F(f.customRrule), N(!0));
                  },
                  children: (0, Q.jsx)(ee, { asset: c }),
                })
              : null),
          (n[70] = d),
          (n[71] = A),
          (n[72] = f.customRrule),
          (n[73] = f.mode),
          (n[74] = f.oneTimeDate),
          (n[75] = G))
        : (G = n[75]),
      n[76] === d
        ? (K = n[77])
        : ((K =
            d === void 0
              ? (0, Q.jsx)(o, {
                  id: `inbox.automations.frequency`,
                  defaultMessage: `Frequency`,
                  description: `Section label above scheduled task frequency controls`,
                })
              : d),
          (n[76] = d),
          (n[77] = K)),
      (ye = k),
      (Oe = E ? `input` : `default`),
      (q = a),
      (ke =
        f.oneTimeDate == null
          ? (0, Q.jsx)(M, {
              control: (0, Q.jsx)(Ve, {
                appearance: T,
                ariaLabel: A.formatMessage({
                  id: `settings.automations.scheduleModeLabel`,
                  defaultMessage: `Repeat schedule`,
                  description: `Aria label for schedule type dropdown`,
                }),
                options: _e,
                selectedId: f.mode,
                selectedLabel: A.formatMessage(e.labelMessage),
                onSelect: (e) => {
                  e !== f.mode && C(pe(f, e));
                },
              }),
              label:
                u ??
                A.formatMessage({
                  id: `inbox.automations.repeat.label`,
                  defaultMessage: `Repeat`,
                  description: `Label for the scheduled task repeat mode row`,
                }),
              variant: `nested`,
            })
          : (0, Q.jsx)(M, {
              control: (0, Q.jsx)(nt, {
                appearance: T,
                ariaLabel: A.formatMessage({
                  id: `inbox.automations.oneTimeDate.ariaLabel`,
                  defaultMessage: `Scheduled date`,
                  description: `Accessible label for choosing the date of a one-time cloud scheduled task`,
                }),
                timeZone: x,
                value: f.oneTimeDate,
                onChange: (e) => {
                  Y({ oneTimeDate: e });
                },
              }),
              label: A.formatMessage({
                id: `inbox.automations.oneTimeDate.label`,
                defaultMessage: `Date`,
                description: `Label for the date of a one-time scheduled task`,
              }),
              variant: `nested`,
            })),
      n[78] !== T ||
      n[79] !== L ||
      n[80] !== le ||
      n[81] !== R ||
      n[82] !== A ||
      n[83] !== se ||
      n[84] !== te ||
      n[85] !== y ||
      n[86] !== g ||
      n[87] !== me ||
      n[88] !== f.mode ||
      n[89] !== f.oneTimeDate ||
      n[90] !== z ||
      n[91] !== Y
        ? ((U =
            f.oneTimeDate == null && f.mode === `hourly`
              ? (0, Q.jsx)(M, {
                  control: (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-1.5`,
                    children: [
                      R === `minute` && g != null
                        ? (0, Q.jsx)(Ve, {
                            appearance: T,
                            ariaLabel: A.formatMessage({
                              id: `settings.automations.scheduleIntervalDuration`,
                              defaultMessage: `Interval duration`,
                              description: `Accessible label for a task's repeat interval amount`,
                            }),
                            disabled: te,
                            error: y,
                            options: g.map((e) => ({ id: String(e), label: A.formatNumber(e) })),
                            selectedId: String(le),
                            selectedLabel: A.formatNumber(le),
                            onSelect: (e) => Y({ intervalMinutes: Number(e) }),
                          })
                        : (0, Q.jsx)(Ae, {
                            appearance: T,
                            ariaLabel: A.formatMessage({
                              id: `settings.automations.scheduleIntervalDuration`,
                              defaultMessage: `Interval duration`,
                              description: `Accessible label for a task's repeat interval amount`,
                            }),
                            max: se || R === `minute` ? 999 / z : 23,
                            min: se ? 1 / z : 1,
                            step: se || me ? 1 / z : 1,
                            value: le / z,
                            onChange: (e) => {
                              let t = Math.round(e * z);
                              t !== le &&
                                Y(
                                  R === `minute` || se || me
                                    ? { intervalMinutes: t }
                                    : { intervalHours: e, intervalMinutes: null },
                                );
                            },
                          }),
                      (0, Q.jsx)(Ve, {
                        appearance: T,
                        ariaLabel: A.formatMessage({
                          id: `settings.automations.scheduleIntervalUnit`,
                          defaultMessage: `Interval unit`,
                          description: `Accessible label for selecting minutes or hours for a task's repeat interval`,
                        }),
                        options: (L ? [`minute`, `hour`] : [`hour`]).map((e) => ({
                          id: e,
                          label: A.formatMessage($.intervalUnit, { unit: e }),
                        })),
                        selectedId: R,
                        selectedLabel: A.formatMessage($.intervalUnit, { unit: R }),
                        onSelect: oe,
                      }),
                    ],
                  }),
                  label: A.formatMessage({
                    id: `settings.automations.scheduleIntervalLabel`,
                    defaultMessage: `Every`,
                    description: `Label for the automation interval input`,
                  }),
                  variant: `nested`,
                })
              : null),
          (n[78] = T),
          (n[79] = L),
          (n[80] = le),
          (n[81] = R),
          (n[82] = A),
          (n[83] = se),
          (n[84] = te),
          (n[85] = y),
          (n[86] = g),
          (n[87] = me),
          (n[88] = f.mode),
          (n[89] = f.oneTimeDate),
          (n[90] = z),
          (n[91] = Y),
          (n[92] = U))
        : (U = n[92]),
      (W =
        f.oneTimeDate == null && f.mode === `weekly`
          ? (0, Q.jsx)(M, {
              control:
                h === `cloud` || f.weekdays.length > 1
                  ? (0, Q.jsx)(Ge, {
                      appearance: T,
                      value: f.weekdays,
                      onChange: (e) => {
                        Y({ weekdays: e });
                      },
                    })
                  : (0, Q.jsx)(Ve, {
                      appearance: T,
                      ariaLabel: A.formatMessage({
                        id: `inbox.automations.scheduleWeekday.ariaLabel`,
                        defaultMessage: `Day of the week`,
                        description: `Accessible label for the weekly automation day selector`,
                      }),
                      options: Ee.map((e) => ({ id: e.id, label: A.formatMessage(e.longLabelMessage) })),
                      selectedId: i.id,
                      selectedLabel: A.formatMessage(i.longLabelMessage),
                      onSelect: (e) => {
                        Y({ weekdays: [e] });
                      },
                    }),
              label: A.formatMessage({
                id: `inbox.automations.day.label`,
                defaultMessage: `On`,
                description: `Label for the scheduled task weekday row`,
              }),
              labelSizing: `content`,
              variant: `nested`,
            })
          : null),
      (n[7] = T),
      (n[8] = a),
      (n[9] = L),
      (n[10] = u),
      (n[11] = E),
      (n[12] = d),
      (n[13] = le),
      (n[14] = R),
      (n[15] = A),
      (n[16] = se),
      (n[17] = te),
      (n[18] = y),
      (n[19] = g),
      (n[20] = _e),
      (n[21] = S),
      (n[22] = C),
      (n[23] = me),
      (n[24] = P),
      (n[25] = f),
      (n[26] = he),
      (n[27] = h),
      (n[28] = x),
      (n[29] = z),
      (n[30] = ye),
      (n[31] = be),
      (n[32] = B),
      (n[33] = xe),
      (n[34] = V),
      (n[35] = Se),
      (n[36] = H),
      (n[37] = U),
      (n[38] = W),
      (n[39] = G),
      (n[40] = K),
      (n[41] = Oe),
      (n[42] = q),
      (n[43] = ke),
      (n[44] = J),
      (n[45] = Y));
  } else
    ((ye = n[30]),
      (be = n[31]),
      (B = n[32]),
      (xe = n[33]),
      (V = n[34]),
      (Se = n[35]),
      (H = n[36]),
      (U = n[37]),
      (W = n[38]),
      (G = n[39]),
      (K = n[40]),
      (Oe = n[41]),
      (q = n[42]),
      (ke = n[43]),
      (J = n[44]),
      (Y = n[45]));
  let je;
  n[93] !== T || n[94] !== A || n[95] !== f.mode || n[96] !== f.oneTimeDate || n[97] !== Se || n[98] !== Y
    ? ((je =
        f.oneTimeDate == null && f.mode === `monthly`
          ? (0, Q.jsx)(M, {
              control: (0, Q.jsx)(Ve, {
                appearance: T,
                ariaLabel: A.formatMessage({
                  id: `inbox.automations.monthDay.ariaLabel`,
                  defaultMessage: `Day of the month`,
                  description: `Accessible label for the monthly scheduled task day-of-month selector`,
                }),
                options: Te.map(tt),
                selectedId: String(Se),
                selectedLabel: String(Se),
                onSelect: (e) => {
                  Y({ monthDay: Number(e) });
                },
              }),
              label: A.formatMessage({
                id: `inbox.automations.day.label`,
                defaultMessage: `On`,
                description: `Label for the scheduled task weekday row`,
              }),
              variant: `nested`,
            })
          : null),
      (n[93] = T),
      (n[94] = A),
      (n[95] = f.mode),
      (n[96] = f.oneTimeDate),
      (n[97] = Se),
      (n[98] = Y),
      (n[99] = je))
    : (je = n[99]);
  let Me;
  n[100] !== T ||
  n[101] !== A ||
  n[102] !== f.oneTimeDate ||
  n[103] !== f.time ||
  n[104] !== H ||
  n[105] !== x ||
  n[106] !== Y
    ? ((Me = H
        ? (0, Q.jsx)(M, {
            control: (0, Q.jsx)(Ne, {
              appearance: T,
              value: f.time,
              timeZone: x,
              date: f.oneTimeDate,
              onChange: (e) => {
                Y({ time: e });
              },
            }),
            label:
              f.oneTimeDate == null
                ? A.formatMessage({
                    id: `inbox.automations.scheduleTime.label`,
                    defaultMessage: `Time`,
                    description: `Label for the scheduled task time row`,
                  })
                : A.formatMessage({
                    id: `inbox.automations.scheduleStartTime.label`,
                    defaultMessage: `Start time`,
                    description: `Label for the time a one-time scheduled task starts`,
                  }),
            variant: `nested`,
          })
        : null),
      (n[100] = T),
      (n[101] = A),
      (n[102] = f.oneTimeDate),
      (n[103] = f.time),
      (n[104] = H),
      (n[105] = x),
      (n[106] = Y),
      (n[107] = Me))
    : (Me = n[107]);
  let Pe;
  n[108] !== T || n[109] !== B || n[110] !== A || n[111] !== x || n[112] !== J
    ? ((Pe =
        B == null
          ? null
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(M, {
                  control: (0, Q.jsx)(Ve, {
                    appearance: T,
                    ariaLabel: A.formatMessage({
                      id: `inbox.automations.customFrequency.ariaLabel`,
                      defaultMessage: `Repeat frequency`,
                      description: `Accessible label for the custom scheduled task frequency selector`,
                    }),
                    options: at.map((e) => ({ id: e, label: A.formatMessage(st[e]) })),
                    selectedId: B.frequency,
                    selectedLabel: A.formatMessage(st[B.frequency]),
                    onSelect: (e) => {
                      J({ frequency: e });
                    },
                  }),
                  label: A.formatMessage({
                    id: `inbox.automations.customFrequency.label`,
                    defaultMessage: `Repeats`,
                    description: `Label for the custom schedule frequency row`,
                  }),
                  variant: `nested`,
                }),
                (0, Q.jsx)(M, {
                  control: (0, Q.jsx)(Ae, {
                    appearance: T,
                    ariaLabel: A.formatMessage({
                      id: `inbox.automations.customInterval.ariaLabel`,
                      defaultMessage: `Repeat interval`,
                      description: `Accessible label for the custom schedule interval input`,
                    }),
                    max: 999,
                    min: 1,
                    suffix: A.formatMessage(ct[B.frequency], { count: B.interval }),
                    value: B.interval,
                    onChange: (e) => {
                      J({ interval: e });
                    },
                  }),
                  label: A.formatMessage({
                    id: `inbox.automations.customInterval.label`,
                    defaultMessage: `Every`,
                    description: `Label for the custom schedule interval row`,
                  }),
                  variant: `nested`,
                }),
                B.frequency === `weekly`
                  ? (0, Q.jsx)(M, {
                      control: (0, Q.jsx)(Ge, {
                        appearance: T,
                        value: B.weekdays,
                        onChange: (e) => {
                          J({ weekdays: e });
                        },
                      }),
                      label: A.formatMessage({
                        id: `inbox.automations.customWeekdays.label`,
                        defaultMessage: `On`,
                        description: `Label for the custom schedule weekdays row`,
                      }),
                      labelSizing: `content`,
                      variant: `nested`,
                    })
                  : null,
                B.frequency === `yearly`
                  ? (0, Q.jsx)(M, {
                      control: (0, Q.jsx)(Ve, {
                        appearance: T,
                        ariaLabel: A.formatMessage({
                          id: `inbox.automations.customMonth.ariaLabel`,
                          defaultMessage: `Month`,
                          description: `Accessible label for the custom schedule month selector`,
                        }),
                        options: ot.map((e) => ({
                          id: String(e),
                          label: A.formatDate(new Date(2024, e - 1, 1), { month: `long` }),
                        })),
                        selectedId: String(B.month),
                        selectedLabel: A.formatDate(new Date(2024, B.month - 1, 1), { month: `long` }),
                        onSelect: (e) => {
                          J({ month: Number(e) });
                        },
                      }),
                      label: A.formatMessage({
                        id: `inbox.automations.customMonth.label`,
                        defaultMessage: `In`,
                        description: `Label for the custom schedule month row`,
                      }),
                      variant: `nested`,
                    })
                  : null,
                B.frequency === `monthly` || B.frequency === `yearly`
                  ? (0, Q.jsx)(M, {
                      control: (0, Q.jsx)(De, {
                        appearance: T,
                        value: B.monthDays,
                        onChange: (e) => {
                          J({ monthDays: e });
                        },
                      }),
                      label: A.formatMessage({
                        id: `inbox.automations.customMonthDay.label`,
                        defaultMessage: `On days`,
                        description: `Label for the custom schedule days of month row`,
                      }),
                      variant: `nested`,
                    })
                  : null,
                B.frequency === `hourly`
                  ? (0, Q.jsx)(M, {
                      control: (0, Q.jsx)(Ae, {
                        appearance: T,
                        ariaLabel: A.formatMessage({
                          id: `inbox.automations.customMinute.ariaLabel`,
                          defaultMessage: `Minute past the hour`,
                          description: `Accessible label for the custom hourly schedule minute input`,
                        }),
                        max: 59,
                        min: 0,
                        value: B.minute,
                        onChange: (e) => {
                          J({ minute: e });
                        },
                      }),
                      label: A.formatMessage({
                        id: `inbox.automations.customMinute.label`,
                        defaultMessage: `At minute`,
                        description: `Label for the custom hourly schedule minute row`,
                      }),
                      variant: `nested`,
                    })
                  : (0, Q.jsx)(M, {
                      control: (0, Q.jsx)(Ne, {
                        appearance: T,
                        value: B.time,
                        timeZone: x,
                        onChange: (e) => {
                          J({ time: e });
                        },
                      }),
                      label: A.formatMessage({
                        id: `inbox.automations.customStartTime.label`,
                        defaultMessage: `Start time`,
                        description: `Label for the time a custom recurring scheduled task starts`,
                      }),
                      variant: `nested`,
                    }),
              ],
            })),
      (n[108] = T),
      (n[109] = B),
      (n[110] = A),
      (n[111] = x),
      (n[112] = J),
      (n[113] = Pe))
    : (Pe = n[113]);
  let Fe;
  n[114] !== B ||
  n[115] !== A ||
  n[116] !== f.customRrule ||
  n[117] !== f.mode ||
  n[118] !== f.oneTimeDate ||
  n[119] !== D
    ? ((Fe =
        D && f.mode === `custom` && f.oneTimeDate == null && B == null
          ? (0, Q.jsx)(M, {
              variant: `nested`,
              label: de({
                rrule: f.customRrule,
                intl: A,
                fallbackMessage: A.formatMessage({
                  id: `inbox.automations.scheduleRule.advanced`,
                  defaultMessage: `Advanced schedule`,
                  description: `Label for a saved recurrence that requires the schedule rule editor`,
                }),
              }),
              control: (0, Q.jsx)(t, {
                color: `ghost`,
                size: `composerSm`,
                type: `button`,
                onClick: () => {
                  (F(f.customRrule), N(!0));
                },
                children: (0, Q.jsx)(o, {
                  id: `inbox.automations.scheduleRule.edit`,
                  defaultMessage: `Edit rule`,
                  description: `Opens the editor for an advanced saved schedule rule`,
                }),
              }),
            })
          : null),
      (n[114] = B),
      (n[115] = A),
      (n[116] = f.customRrule),
      (n[117] = f.mode),
      (n[118] = f.oneTimeDate),
      (n[119] = D),
      (n[120] = Fe))
    : (Fe = n[120]);
  let Ie = E ? xe : null,
    Le;
  n[121] !== ye ||
  n[122] !== i ||
  n[123] !== U ||
  n[124] !== W ||
  n[125] !== je ||
  n[126] !== Me ||
  n[127] !== Pe ||
  n[128] !== Fe ||
  n[129] !== Ie ||
  n[130] !== Oe ||
  n[131] !== q ||
  n[132] !== ke
    ? ((Le = (0, Q.jsxs)(ye, { variant: Oe, children: [q, ke, U, W, je, Me, Pe, Fe, i, Ie] })),
      (n[121] = ye),
      (n[122] = i),
      (n[123] = U),
      (n[124] = W),
      (n[125] = je),
      (n[126] = Me),
      (n[127] = Pe),
      (n[128] = Fe),
      (n[129] = Ie),
      (n[130] = Oe),
      (n[131] = q),
      (n[132] = ke),
      (n[133] = Le))
    : (Le = n[133]);
  let Re;
  n[134] !== xe || n[135] !== E
    ? ((Re = !E && xe != null ? (0, Q.jsx)(k, { className: `mt-2`, children: xe }) : null),
      (n[134] = xe),
      (n[135] = E),
      (n[136] = Re))
    : (Re = n[136]);
  let X;
  n[137] !== V || n[138] !== P || n[139] !== Y
    ? ((X = (e) => {
        (e.preventDefault(), V && (Y({ customRrule: P }), N(!1)));
      }),
      (n[137] = V),
      (n[138] = P),
      (n[139] = Y),
      (n[140] = X))
    : (X = n[140]);
  let ze;
  n[141] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = (0, Q.jsx)(v, {
        className: `contents`,
        children: (0, Q.jsx)(o, {
          id: `inbox.automations.scheduleRule.title`,
          defaultMessage: `Edit schedule rule`,
          description: `Title of the custom schedule RRULE dialog`,
        }),
      })),
      (n[141] = ze))
    : (ze = n[141]);
  let Be;
  n[142] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (0, Q.jsx)(O, {
        children: (0, Q.jsx)(b, {
          title: ze,
          subtitle: (0, Q.jsx)(w, {
            className: `contents`,
            children: (0, Q.jsx)(o, {
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
        children: (0, Q.jsx)(o, {
          id: `inbox.automations.scheduleRule.inputLabel`,
          defaultMessage: `RRULE`,
          description: `Label for the custom schedule RRULE input`,
        }),
      })),
      (n[143] = He))
    : (He = n[143]);
  let Ue = !V,
    Z;
  n[144] === A
    ? (Z = n[145])
    : ((Z = A.formatMessage({
        id: `settings.automations.scheduleCustomPlaceholder`,
        defaultMessage: `RRULE:FREQ=MONTHLY;BYMONTHDAY=1;BYHOUR=9;BYMINUTE=0`,
        description: `Placeholder text for the custom automation RRULE editor`,
      })),
      (n[144] = A),
      (n[145] = Z));
  let We;
  n[146] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = (e) => {
        F(e.currentTarget.value);
      }),
      (n[146] = We))
    : (We = n[146]);
  let Ke;
  n[147] !== P || n[148] !== Ue || n[149] !== Z
    ? ((Ke = (0, Q.jsx)(fe, {
        variant: `code`,
        autoFocus: !0,
        "aria-invalid": Ue,
        placeholder: Z,
        spellCheck: !1,
        value: P,
        onChange: We,
      })),
      (n[147] = P),
      (n[148] = Ue),
      (n[149] = Z),
      (n[150] = Ke))
    : (Ke = n[150]);
  let qe;
  n[151] === V
    ? (qe = n[152])
    : ((qe = V
        ? null
        : (0, Q.jsx)(`span`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children: (0, Q.jsx)(o, {
              id: `inbox.automations.scheduleRule.invalid`,
              defaultMessage: `Enter a valid RRULE`,
              description: `Validation error shown for an invalid custom schedule RRULE`,
            }),
          })),
      (n[151] = V),
      (n[152] = qe));
  let Je;
  n[153] !== Ke || n[154] !== qe
    ? ((Je = (0, Q.jsx)(O, {
        children: (0, Q.jsxs)(`label`, { className: `flex flex-col gap-2`, children: [He, Ke, qe] }),
      })),
      (n[153] = Ke),
      (n[154] = qe),
      (n[155] = Je))
    : (Je = n[155]);
  let Ye;
  n[156] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = (0, Q.jsx)(t, {
        color: `ghost`,
        type: `button`,
        onClick: () => {
          N(!1);
        },
        children: (0, Q.jsx)(o, {
          id: `inbox.automations.scheduleRule.cancel`,
          defaultMessage: `Cancel`,
          description: `Button label for closing the schedule rule dialog without saving`,
        }),
      })),
      (n[156] = Ye))
    : (Ye = n[156]);
  let Ze = !V,
    Qe;
  n[157] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qe = (0, Q.jsx)(o, {
        id: `inbox.automations.scheduleRule.save`,
        defaultMessage: `Save`,
        description: `Button label for saving a custom schedule RRULE`,
      })),
      (n[157] = Qe))
    : (Qe = n[157]);
  let $e;
  n[158] === Ze
    ? ($e = n[159])
    : (($e = (0, Q.jsx)(O, {
        children: (0, Q.jsxs)(ie, {
          children: [Ye, (0, Q.jsx)(t, { disabled: Ze, type: `submit`, children: Qe })],
        }),
      })),
      (n[158] = Ze),
      (n[159] = $e));
  let et;
  n[160] !== X || n[161] !== Je || n[162] !== $e
    ? ((et = (0, Q.jsxs)(re, { as: `form`, onSubmit: X, children: [Be, Je, $e] })),
      (n[160] = X),
      (n[161] = Je),
      (n[162] = $e),
      (n[163] = et))
    : (et = n[163]);
  let lt;
  n[164] !== j || n[165] !== et
    ? ((lt = (0, Q.jsx)(ne, { open: j, size: `compact`, onOpenChange: N, children: et })),
      (n[164] = j),
      (n[165] = et),
      (n[166] = lt))
    : (lt = n[166]);
  let ut;
  return (
    n[167] !== be || n[168] !== G || n[169] !== K || n[170] !== Le || n[171] !== Re || n[172] !== lt
      ? ((ut = (0, Q.jsxs)(be, { actions: G, title: K, children: [Le, Re, lt] })),
        (n[167] = be),
        (n[168] = G),
        (n[169] = K),
        (n[170] = Le),
        (n[171] = Re),
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
    ee;
  t[0] === i
    ? (ee = t[1])
    : ((ee = new Intl.DateTimeFormat(`en-CA`, {
        timeZone: i,
        year: `numeric`,
        month: `2-digit`,
        day: `2-digit`,
      }).format(new Date())),
      (t[0] = i),
      (t[1] = ee));
  let l = ee,
    u = s === `form` ? `text-secondary` : `text-tertiary`,
    d;
  t[2] === u ? (d = t[3]) : ((d = C(`-me-1.5 text-base`, u)), (t[2] = u), (t[3] = d));
  let f = `${l}T00:00:00`,
    p;
  t[4] === f ? (p = t[5]) : ((p = new Date(f)), (t[4] = f), (t[5] = p));
  let m =
      s === `form`
        ? `[--select-control-font-size:var(--text-form-body)]`
        : `[--select-control-font-size:var(--text-base)]`,
    h;
  t[6] === m
    ? (h = t[7])
    : ((h = C(`[--select-control-font-weight:var(--font-ui-weight)]`, m)), (t[6] = m), (t[7] = h));
  let g = `${a}T00:00:00`,
    _;
  t[8] === g ? (_ = t[9]) : ((_ = new Date(g)), (t[8] = g), (t[9] = _));
  let v;
  t[10] === o
    ? (v = t[11])
    : ((v = (e) => {
        e != null &&
          o(
            new Intl.DateTimeFormat(`en-CA`, { year: `numeric`, month: `2-digit`, day: `2-digit` }).format(e),
          );
      }),
      (t[10] = o),
      (t[11] = v));
  let y;
  t[12] !== c || t[13] !== _ || t[14] !== v || t[15] !== p || t[16] !== h
    ? ((y = (0, Q.jsx)(ye, {
        id: c,
        align: `end`,
        dropdownIconType: `chevronDown`,
        min: p,
        size: `sm`,
        triggerClassName: h,
        triggerDateFormat: `MMM d, yyyy`,
        triggerShowIcon: !1,
        value: _,
        valueType: `date`,
        variant: `ghost`,
        onChange: v,
      })),
      (t[12] = c),
      (t[13] = _),
      (t[14] = v),
      (t[15] = p),
      (t[16] = h),
      (t[17] = y))
    : (y = t[17]);
  let b;
  return (
    t[18] !== r || t[19] !== y || t[20] !== d
      ? ((b = (0, Q.jsx)(`div`, { "aria-label": r, className: d, role: `group`, children: y })),
        (t[18] = r),
        (t[19] = y),
        (t[20] = d),
        (t[21] = b))
      : (b = t[21]),
    b
  );
}
var rt, it, Q, at, ot, $, st, ct;
function lt() {
  return (lt = e(() => {
    ((rt = F()),
      u(),
      be(),
      _(),
      (it = oe()),
      E(),
      z(),
      ke(),
      je(),
      W(),
      Be(),
      We(),
      Ye(),
      $e(),
      j(),
      P(),
      S(),
      l(),
      le(),
      T(),
      s(),
      (Q = I()),
      (at = [`hourly`, `daily`, `weekly`, `monthly`, `yearly`]),
      (ot = Array.from({ length: 12 }, (e, t) => t + 1)),
      ($ = n({
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
  we as f,
  W as g,
  B as h,
  Xe as i,
  We as l,
  Ee as m,
  nt as n,
  Ge as o,
  Ce as p,
  lt as r,
  Ye as s,
  et as t,
  Ne as u,
};
//# sourceMappingURL=automation-frequency-section-b14557c3b8fc.js.map
