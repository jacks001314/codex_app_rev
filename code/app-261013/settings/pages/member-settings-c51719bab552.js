import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AO as r,
  BV as i,
  CO as a,
  Cot as o,
  DV as s,
  EO as c,
  EPt as l,
  IDt as u,
  Iot as d,
  Ixt as f,
  JC as p,
  Lot as m,
  MO as h,
  Pxt as g,
  QC as _,
  TJ as v,
  TLt as y,
  VDt as b,
  Xot as x,
  Yot as S,
  _It as C,
  frt as ee,
  hrt as w,
  iw as T,
  jDt as E,
  jO as te,
  nst as ne,
  oIt as D,
  pIt as O,
  pLt as re,
  qC as ie,
  t3 as k,
  tst as A,
  tw as ae,
  vzt as j,
  wot as M,
  xMt as N,
  yzt as P,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as oe,
  Ek as se,
  TPn as ce,
  Tk as le,
  Ymr as ue,
  _F as F,
  ehr as de,
  hF as fe,
  mF as I,
  pF as L,
  xPn as R,
  yPn as z,
} from "./app-initial-5851df3f6cb1.js";
import { i as B, n as V, r as H, t as U } from "./queries-5461a01c4337.js";
import { n as pe, r as W, t as G } from "./legacy-study-hours-schedule-493102f58ae0.js";
import { a as me, c as he, n as ge, r as _e, s as K, t as ve } from "./shared-3670dea403eb.js";
function q(e) {
  let n = (0, J.c)(8),
    { isRefresh: r, onRetry: i } = e,
    a = r !== void 0 && r,
    o;
  n[0] === a
    ? (o = n[1])
    : ((o = (0, Y.jsx)(`span`, {
        role: `alert`,
        children: a
          ? (0, Y.jsx)(u, {
              id: `settings.chatGpt.parentalControls.refreshError`,
              defaultMessage: `Your family information couldn’t be refreshed`,
              description: `Nonblocking error in Parental controls when a background read fails; previously loaded family information and unsaved edits remain visible, and Retry refreshes them`,
            })
          : (0, Y.jsx)(u, {
              id: `settings.chatGpt.parentalControls.loadError`,
              defaultMessage: `Your family information couldn’t be loaded`,
              description: `Recoverable error in Parental controls settings when account eligibility, family membership, or the member list cannot be loaded; Retry repeats the failed read`,
            }),
      })),
      (n[0] = a),
      (n[1] = o));
  let s;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(u, {
        id: `settings.chatGpt.parentalControls.retry`,
        defaultMessage: `Retry`,
        description: `Button in Parental controls settings that retries loading the failed account or family information`,
      })),
      (n[2] = s))
    : (s = n[2]);
  let c;
  n[3] === i
    ? (c = n[4])
    : ((c = (0, Y.jsx)(t, { color: `secondary`, size: `toolbar`, onClick: i, children: s })),
      (n[3] = i),
      (n[4] = c));
  let l;
  return (
    n[5] !== o || n[6] !== c
      ? ((l = (0, Y.jsx)(ae, { label: o, control: c })), (n[5] = o), (n[6] = c), (n[7] = l))
      : (l = n[7]),
    l
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = j()), E(), k(), T(), (Y = N()));
  }))();
}
function ye(e) {
  return Te.safeParse(e).success;
}
function be(e) {
  return { ...e, blocks: e.blocks.map((e) => ({ ...e, days: [...e.days] })) };
}
function xe(e, t) {
  switch (t.type) {
    case `set_enabled`:
      return {
        ...e,
        enabled: t.enabled,
        blocks: t.enabled && e.blocks.length === 0 && t.initialBlock != null ? [t.initialBlock] : e.blocks,
      };
    case `update_block`:
      return { ...e, blocks: e.blocks.map((e) => (e.id === t.blockId ? { ...e, ...t.update } : e)) };
    case `add_block`:
      return { ...e, blocks: [...e.blocks, t.block] };
    case `remove_block`:
      return { ...e, blocks: e.blocks.filter((e) => e.id !== t.blockId) };
  }
}
function Se(e) {
  if (e.enabled && e.blocks.length === 0) return `missing_blocks`;
  if (e.blocks.length > Ce) return `too_many_blocks`;
  let t = new Set();
  for (let n of e.blocks) {
    if (n.id.trim().length === 0) return `invalid_block_id`;
    if (t.has(n.id)) return `duplicate_block_id`;
    if ((t.add(n.id), n.days.length === 0)) return `missing_days`;
    if (
      n.days.length > Z.length ||
      new Set(n.days).size !== n.days.length ||
      n.days.some((e) => !Z.includes(e))
    )
      return `invalid_days`;
    if (!we.test(n.start_time) || !we.test(n.end_time)) return `invalid_time`;
    if (n.start_time === n.end_time) return `same_time`;
  }
}
var Z, Ce, we, Te;
function Ee() {
  return (Ee = e(() => {
    (l(),
      (Z = [`monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`]),
      (Ce = 12),
      (we = /^(?:[01][0-9]|2[0-3]):[0-5][0-9]$/),
      (Te = re({ enabled: C(), blocks: O(re({ id: y(), days: O(D(Z)), start_time: y(), end_time: y() })) })));
  }))();
}
function De(e) {
  let t = e?.quiet_hours_schedule;
  if (t != null) return ye(t) ? t : void 0;
  let n = Pe.safeParse(e?.[je]),
    r = n.success ? n.data : void 0;
  if (r?.enabled !== !0) return r == null ? void 0 : { enabled: !1, blocks: [] };
  if (typeof r.start_time == `string` && typeof r.end_time == `string` && r.start_time !== r.end_time)
    return {
      enabled: !0,
      blocks: [
        { id: `web-legacy-quiet-hours`, days: [...Z], start_time: r.start_time, end_time: r.end_time },
      ],
    };
}
function Oe(e) {
  let t = e?.study_hours_schedule;
  return ye(t) ? t : void 0;
}
function ke(e) {
  let t = Se(e);
  if (t != null) return t;
  let n = new Map(Z.map((e) => [e, []]));
  for (let t of e.blocks) {
    let e = Ae(t.start_time),
      r = Ae(t.end_time);
    for (let i of t.days)
      if ((n.get(i)?.push([e, e < r ? r : Me]), e > r)) {
        let e = Z[(Z.indexOf(i) + 1) % Z.length];
        e != null && n.get(e)?.push([0, r]);
      }
  }
  if (e.enabled)
    for (let e of n.values()) {
      let t = 0,
        n,
        r;
      for (let [i, a] of e.sort(([e], [t]) => e - t))
        n == null || r == null
          ? ((n = i), (r = a))
          : i > r
            ? ((t += r - n), (n = i), (r = a))
            : (r = Math.max(r, a));
      if ((n != null && r != null && (t += r - n), Me - t < Ne)) return `insufficient_break`;
    }
}
function Ae(e) {
  let [t, n] = e.split(`:`).map(Number);
  return (t ?? 0) * 60 + (n ?? 0);
}
var je, Me, Ne, Pe;
function Fe() {
  return (Fe = e(() => {
    (l(),
      Ee(),
      (je = `rKAMeJfyrM_settings`),
      (Me = 1440),
      (Ne = 5),
      (Pe = re({
        enabled: C().optional(),
        start_time: y().nullable().optional(),
        end_time: y().nullable().optional(),
      })));
  }))();
}
var Ie, Le;
function Re() {
  return (Re = e(() => {
    (E(),
      (Ie = n({
        missing_blocks: {
          id: `chatgpt.parental_controls.quiet_hours.error.missing_blocks`,
          defaultMessage: `Add at least one quiet hours block`,
          description: `Validation error in web parental controls when an enabled Quiet Hours schedule contains no recurring blocks.`,
        },
        too_many_blocks: {
          id: `chatgpt.parental_controls.quiet_hours.error.too_many_blocks`,
          defaultMessage: `Quiet hours can have at most 12 blocks`,
          description: `Validation error in web parental controls when a recurring Quiet Hours schedule exceeds the backend's twelve-block maximum.`,
        },
        invalid_block_id: {
          id: `chatgpt.parental_controls.quiet_hours.error.invalid_block_id`,
          defaultMessage: `Each quiet hours block needs a valid identifier`,
          description: `Validation error in web parental controls when a recurring Quiet Hours block has an empty or whitespace-only identifier.`,
        },
        duplicate_block_id: {
          id: `chatgpt.parental_controls.quiet_hours.error.duplicate_block_id`,
          defaultMessage: `Each quiet hours block needs a unique identifier`,
          description: `Validation error in web parental controls when multiple recurring Quiet Hours blocks share the same identifier.`,
        },
        missing_days: {
          id: `chatgpt.parental_controls.quiet_hours.error.missing_days`,
          defaultMessage: `Select at least one day for each block`,
          description: `Validation error in web parental controls when a recurring Quiet Hours block has no selected local weekday.`,
        },
        invalid_days: {
          id: `chatgpt.parental_controls.quiet_hours.error.invalid_days`,
          defaultMessage: `Each block needs valid, non-repeating days`,
          description: `Validation error in web parental controls when a recurring Quiet Hours block includes an invalid or duplicate local weekday.`,
        },
        invalid_time: {
          id: `chatgpt.parental_controls.quiet_hours.error.invalid_time`,
          defaultMessage: `Enter a valid start and end time for each block`,
          description: `Validation error in web parental controls when a recurring Quiet Hours block has a missing or invalid local start or end time.`,
        },
        same_time: {
          id: `chatgpt.parental_controls.quiet_hours.error.same_time`,
          defaultMessage: `Start and end times must be different for each block`,
          description: `Validation error in web parental controls when a recurring Quiet Hours block starts and ends at the same local time.`,
        },
        insufficient_break: {
          id: `chatgpt.parental_controls.quiet_hours.error.insufficient_break`,
          defaultMessage: `Quiet hours must leave at least five minutes available each day`,
          description: `Validation error in web parental controls when the combined recurring Quiet Hours blocks, including overlapping and overnight blocks, leave fewer than five unblocked minutes on a local weekday.`,
        },
      })),
      (Le = n({
        missing_blocks: {
          id: `chatgpt.parental_controls.study_hours.error.missing_blocks`,
          defaultMessage: `Add at least one study hours block`,
          description: `Validation error in web parental controls when a parent enables Study Hours without configuring a recurring schedule block.`,
        },
        too_many_blocks: {
          id: `chatgpt.parental_controls.study_hours.error.too_many_blocks`,
          defaultMessage: `Study hours can have at most 12 blocks`,
          description: `Validation error in web parental controls when a parent configures more than the twelve Study Hours blocks accepted by the backend.`,
        },
        invalid_block_id: {
          id: `chatgpt.parental_controls.study_hours.error.invalid_block_id`,
          defaultMessage: `Each study hours block needs a valid identifier`,
          description: `Validation error in web parental controls when a recurring Study Hours block has an empty or whitespace-only identifier.`,
        },
        duplicate_block_id: {
          id: `chatgpt.parental_controls.study_hours.error.duplicate_block_id`,
          defaultMessage: `Each study hours block needs a unique identifier`,
          description: `Validation error in web parental controls when multiple recurring Study Hours blocks share the same identifier.`,
        },
      })));
  }))();
}
function ze(e, t) {
  let n = e.amphora_locks;
  return n == null
    ? !1
    : typeof n != `object` || Array.isArray(n) || Object.values(n).some((e) => typeof e != `boolean`)
      ? !0
      : t.some((e) => n[e] === !0);
}
function Be(e) {
  let n = (0, Ue.c)(61),
    {
      item: r,
      description: a,
      settings: o,
      isSelf: s,
      pending: c,
      editing: l,
      onEditingChange: d,
      onSave: f,
    } = e,
    p = (0, We.useId)(),
    m;
  n[0] === r.settings
    ? (m = n[1])
    : ((m = r.settings?.includes(`study_hours_schedule`) ?? !1), (n[0] = r.settings), (n[1] = m));
  let h = m,
    g = h ? `study_hours_schedule` : `quiet_hours_schedule`,
    _,
    v,
    y,
    b;
  if (n[2] !== g || n[3] !== s || n[4] !== r.settings || n[5] !== o || n[6] !== h) {
    y = h ? Oe(o) : De(o);
    let e;
    n[11] !== g || n[12] !== r.settings
      ? ((e = r.settings ?? [g]), (n[11] = g), (n[12] = r.settings), (n[13] = e))
      : (e = n[13]);
    let t = e;
    if (h) {
      let e;
      (n[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = [`study_hours_schedule`, `default_to_study_mode`]), (n[14] = e))
        : (e = n[14]),
        (t = e));
    } else if (o.quiet_hours_schedule != null) {
      let e;
      (n[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = [`quiet_hours_schedule`]), (n[15] = e))
        : (e = n[15]),
        (t = e));
    }
    let i;
    (n[16] !== s || n[17] !== t || n[18] !== o
      ? ((i = s && ze(o, t)), (n[16] = s), (n[17] = t), (n[18] = o), (n[19] = i))
      : (i = n[19]),
      (v = i),
      (_ = h && o.default_to_study_mode === !0 && o.study_hours_schedule == null),
      (b =
        ((o[g] != null || (!h && o.rKAMeJfyrM_settings != null)) && y == null) ||
        (y != null && (h ? Se(y) : ke(y)) != null)),
      (n[2] = g),
      (n[3] = s),
      (n[4] = r.settings),
      (n[5] = o),
      (n[6] = h),
      (n[7] = _),
      (n[8] = v),
      (n[9] = y),
      (n[10] = b));
  } else ((_ = n[7]), (v = n[8]), (y = n[9]), (b = n[10]));
  let x = b,
    S;
  n[20] === y ? (S = n[21]) : ((S = () => be(y ?? { enabled: !1, blocks: [] })), (n[20] = y), (n[21] = S));
  let [C, ee] = (0, We.useState)(S),
    [T, E] = (0, We.useState)(_);
  if (l && C) {
    let e;
    n[22] !== C || n[23] !== T
      ? ((e = (e) => {
          (ee(T ? G(C, e) : xe(C, e)), E(!1));
        }),
        (n[22] = C),
        (n[23] = T),
        (n[24] = e))
      : (e = n[24]);
    let t;
    n[25] !== C || n[26] !== g || n[27] !== d || n[28] !== f
      ? ((t = async () => {
          try {
            (await f({ feature: g, value: C }), d(!1));
          } catch (e) {
            let t = e;
            if (t instanceof w && t.status === 403 && t.errorCode === `feature-locked-by-owner`) d(!1);
            else throw t;
          }
        }),
        (n[25] = C),
        (n[26] = g),
        (n[27] = d),
        (n[28] = f),
        (n[29] = t))
      : (t = n[29]);
    let i;
    n[30] === d ? (i = n[31]) : ((i = () => d(!1)), (n[30] = d), (n[31] = i));
    let o;
    return (
      n[32] !== a ||
      n[33] !== C ||
      n[34] !== r.label ||
      n[35] !== T ||
      n[36] !== _ ||
      n[37] !== v ||
      n[38] !== c ||
      n[39] !== y ||
      n[40] !== h ||
      n[41] !== e ||
      n[42] !== t ||
      n[43] !== i ||
      n[44] !== x
        ? ((o = (0, Q.jsx)(Ve, {
            label: r.label,
            description: a,
            draft: C,
            current: y,
            legacyStudy: _,
            legacyDisplay: T,
            study: h,
            locked: v,
            unsupported: x,
            pending: c,
            onChange: e,
            onSave: t,
            onCancel: i,
          })),
          (n[32] = a),
          (n[33] = C),
          (n[34] = r.label),
          (n[35] = T),
          (n[36] = _),
          (n[37] = v),
          (n[38] = c),
          (n[39] = y),
          (n[40] = h),
          (n[41] = e),
          (n[42] = t),
          (n[43] = i),
          (n[44] = x),
          (n[45] = o))
        : (o = n[45]),
      o
    );
  }
  let te;
  n[46] !== _ || n[47] !== y?.enabled || n[48] !== x
    ? ((te = x
        ? (0, Q.jsx)(u, {
            id: `chatgpt.parental_controls.quiet_hours.status.unsupported`,
            defaultMessage: `Unsupported schedule`,
            description: `Status for a saved Quiet Hours or Study Hours schedule that cannot be edited without risking its existing data`,
          })
        : y?.enabled || _
          ? (0, Q.jsx)(u, {
              id: `chatgpt.recurring_schedule.status.scheduled`,
              defaultMessage: `Scheduled`,
              description: `Status when Quiet Hours or Study Hours is enabled`,
            })
          : (0, Q.jsx)(u, {
              id: `settings.chatGpt.parentalControls.notScheduled`,
              defaultMessage: `Not scheduled`,
              description: `Status when Quiet Hours or Study Hours is disabled`,
            })),
      (n[46] = _),
      (n[47] = y?.enabled),
      (n[48] = x),
      (n[49] = te))
    : (te = n[49]);
  let ne;
  n[50] !== _ || n[51] !== d || n[52] !== c || n[53] !== y || n[54] !== te || n[55] !== p
    ? ((ne = (e) =>
        (0, Q.jsxs)(t, {
          ...e,
          "aria-labelledby": `${e[`aria-labelledby`]} ${p}`,
          color: `ghostSecondary`,
          size: `compact`,
          disabled: c,
          onClick: () => {
            (ee(be(y ?? { enabled: !1, blocks: [] })), E(_), d(!0));
          },
          children: [(0, Q.jsx)(`span`, { id: p, children: te }), (0, Q.jsx)(i, {})],
        })),
      (n[50] = _),
      (n[51] = d),
      (n[52] = c),
      (n[53] = y),
      (n[54] = te),
      (n[55] = p),
      (n[56] = ne))
    : (ne = n[56]);
  let D;
  return (
    n[57] !== a || n[58] !== r.label || n[59] !== ne
      ? ((D = (0, Q.jsx)(ae, { label: r.label, description: a, control: ne })),
        (n[57] = a),
        (n[58] = r.label),
        (n[59] = ne),
        (n[60] = D))
      : (D = n[60]),
    D
  );
}
function Ve(e) {
  let n = (0, Ue.c)(87),
    {
      label: r,
      description: a,
      draft: o,
      current: c,
      legacyStudy: l,
      legacyDisplay: d,
      study: f,
      locked: p,
      unsupported: m,
      pending: h,
      onChange: g,
      onSave: v,
      onCancel: y,
    } = e,
    x = p !== void 0 && p,
    S = m !== void 0 && m,
    C = b(),
    ee = x || S,
    [w, T] = (0, We.useState)(),
    [E, ne] = (0, We.useState)(),
    [D, O] = (0, We.useState)(!1),
    [re, k] = (0, We.useState)(!1),
    A = ee || h || D,
    j;
  n[0] !== o || n[1] !== d ? ((j = d ? pe() : o), (n[0] = o), (n[1] = d), (n[2] = j)) : (j = n[2]);
  let M = j,
    N;
  n[3] !== o || n[4] !== f ? ((N = f ? Se(o) : ke(o)), (n[3] = o), (n[4] = f), (n[5] = N)) : (N = n[5]);
  let P = N,
    oe;
  n[6] !== c || n[7] !== o || n[8] !== d || n[9] !== l
    ? ((oe = JSON.stringify(o) !== JSON.stringify(c ?? { enabled: !1, blocks: [] }) || (l && !d)),
      (n[6] = c),
      (n[7] = o),
      (n[8] = d),
      (n[9] = l),
      (n[10] = oe))
    : (oe = n[10]);
  let se = oe,
    le = P == null ? void 0 : Ie[P];
  f &&
    (P === `missing_blocks` ||
      P === `too_many_blocks` ||
      P === `invalid_block_id` ||
      P === `duplicate_block_id`) &&
    (le = Le[P]);
  let ue;
  n[11] === f
    ? (ue = n[12])
    : ((ue = () => ({
        id: crypto.randomUUID(),
        days: Z.slice(0, 5),
        start_time: f ? `16:00` : `22:00`,
        end_time: f ? `20:00` : `07:00`,
      })),
      (n[11] = f),
      (n[12] = ue));
  let F = ue,
    de;
  n[13] === C
    ? (de = n[14])
    : ((de = (e) => C.formatDate(new Date(Date.UTC(2026, 0, 5 + e)), { weekday: `long`, timeZone: `UTC` })),
      (n[13] = C),
      (n[14] = de));
  let fe = de,
    I;
  n[15] !== A || n[16] !== se || n[17] !== C || n[18] !== P || n[19] !== v
    ? ((I = (e) => {
        (e.preventDefault(),
          !A &&
            se &&
            (ne(void 0),
            k(!0),
            !P &&
              (O(!0),
              v()
                .catch((e) => {
                  ne(
                    e instanceof Error && e.message.length > 0
                      ? e.message
                      : C.formatMessage({
                          id: `chatgpt.parental_controls.quiet_hours.error.save`,
                          defaultMessage: `Couldn't update this schedule. Try again.`,
                          description: `Fallback inline error when saving a Quiet Hours or Study Hours schedule fails; the draft remains available for retry`,
                        }),
                  );
                })
                .finally(() => O(!1)))));
      }),
      (n[15] = A),
      (n[16] = se),
      (n[17] = C),
      (n[18] = P),
      (n[19] = v),
      (n[20] = I))
    : (I = n[20]);
  let L;
  n[21] === r
    ? (L = n[22])
    : ((L = (0, Q.jsx)(`h3`, { className: `text-base font-medium`, children: r })), (n[21] = r), (n[22] = L));
  let R;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(u, {
        id: `chatgpt.recurring_schedule.status.scheduled`,
        defaultMessage: `Scheduled`,
        description: `Status when Quiet Hours or Study Hours is enabled`,
      })),
      (n[23] = R))
    : (R = n[23]);
  let z;
  n[24] !== A || n[25] !== F || n[26] !== o || n[27] !== g || n[28] !== M.enabled
    ? ((z = (e) =>
        (0, Q.jsx)(te, {
          ...e,
          checked: M.enabled,
          disabled: A,
          onChange: (e) =>
            g({ type: `set_enabled`, enabled: e, initialBlock: e && !o.blocks.length ? F() : void 0 }),
        })),
      (n[24] = A),
      (n[25] = F),
      (n[26] = o),
      (n[27] = g),
      (n[28] = M.enabled),
      (n[29] = z))
    : (z = n[29]);
  let B;
  n[30] !== a || n[31] !== z
    ? ((B = (0, Q.jsx)(ae, { label: R, description: a, control: z })), (n[30] = a), (n[31] = z), (n[32] = B))
    : (B = n[32]);
  let V;
  n[33] === x
    ? (V = n[34])
    : ((V =
        x &&
        (0, Q.jsx)(`p`, {
          role: `status`,
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(u, {
            id: `chatgpt.parental_controls.quiet_hours.status.managed_by_parent`,
            defaultMessage: `Managed by your parent`,
            description: `Read-only status when a teen views a schedule locked by their parent`,
          }),
        })),
      (n[33] = x),
      (n[34] = V));
  let H;
  n[35] === S
    ? (H = n[36])
    : ((H =
        S &&
        (0, Q.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children: (0, Q.jsx)(u, {
            id: `chatgpt.parental_controls.quiet_hours.unsupported.help_text`,
            defaultMessage: `This schedule can't be edited here. Your existing settings have been preserved.`,
            description: `Warning for an unsupported schedule; existing saved data is preserved`,
          }),
        })),
      (n[35] = S),
      (n[36] = H));
  let U;
  n[37] !== A || n[38] !== C || n[39] !== g || n[40] !== M.blocks || n[41] !== M.enabled
    ? ((U =
        M.enabled &&
        M.blocks.map((e, t) =>
          (0, Q.jsxs)(
            `fieldset`,
            {
              className: `min-w-0`,
              disabled: A,
              children: [
                (0, Q.jsx)(`legend`, {
                  className: `sr-only`,
                  children: C.formatMessage(
                    {
                      id: `chatgpt.recurring_schedule.block.accessibility.label`,
                      defaultMessage: `Schedule block {number}`,
                      description: `Screen-reader label for a recurring schedule block; number is its one-based position`,
                    },
                    { number: t + 1 },
                  ),
                }),
                (0, Q.jsxs)(ie, {
                  children: [
                    (0, Q.jsx)(ae, {
                      size: `compact`,
                      label: (0, Q.jsx)(u, {
                        id: `chatgpt.recurring_schedule.block.start_time.label`,
                        defaultMessage: `Start time`,
                        description: `Start time for a Quiet Hours or Study Hours block`,
                      }),
                      control: (t) =>
                        (0, Q.jsx)(`div`, {
                          className: `w-36`,
                          children: (0, Q.jsx)(ce, {
                            ...t,
                            type: `time`,
                            step: 60,
                            name: `start-${e.id}`,
                            value: e.start_time,
                            onChange: (t) =>
                              g({
                                type: `update_block`,
                                blockId: e.id,
                                update: { start_time: t.target.value },
                              }),
                          }),
                        }),
                    }),
                    (0, Q.jsx)(ae, {
                      size: `compact`,
                      label: (0, Q.jsx)(u, {
                        id: `chatgpt.recurring_schedule.block.end_time.label`,
                        defaultMessage: `End time`,
                        description: `End time for a Quiet Hours or Study Hours block`,
                      }),
                      control: (t) =>
                        (0, Q.jsx)(`div`, {
                          className: `w-36`,
                          children: (0, Q.jsx)(ce, {
                            ...t,
                            type: `time`,
                            step: 60,
                            name: `end-${e.id}`,
                            value: e.end_time,
                            onChange: (t) =>
                              g({
                                type: `update_block`,
                                blockId: e.id,
                                update: { end_time: t.target.value },
                              }),
                          }),
                        }),
                    }),
                    (0, Q.jsx)(_, {
                      label: (0, Q.jsx)(u, {
                        id: `chatgpt.recurring_schedule.block.days.label`,
                        defaultMessage: `Days`,
                        description: `Opens the weekday selector for a schedule block`,
                      }),
                      trailing: (0, Q.jsxs)(Q.Fragment, {
                        children: [(0, Q.jsx)(He, { days: e.days }), (0, Q.jsx)(i, {})],
                      }),
                      disabled: A,
                      onClick: () => T({ ...e, days: [...e.days] }),
                    }),
                    e.end_time < e.start_time &&
                      (0, Q.jsx)(`p`, {
                        className: `px-4 py-3 text-xs text-secondary`,
                        children: (0, Q.jsx)(u, {
                          id: `chatgpt.parental_controls.quiet_hours.block.overnight.help_text`,
                          defaultMessage: `Ends the next day`,
                          description: `Helper text inside a schedule block whose end time is on the following day`,
                        }),
                      }),
                    M.blocks.length > 1 &&
                      (0, Q.jsx)(_, {
                        label: (0, Q.jsx)(`span`, {
                          className: `text-danger`,
                          children: (0, Q.jsx)(u, {
                            id: `chatgpt.recurring_schedule.block.button.delete`,
                            defaultMessage: `Delete block`,
                            description: `Removes a block from the unsaved schedule`,
                          }),
                        }),
                        disabled: A,
                        onClick: () => g({ type: `remove_block`, blockId: e.id }),
                      }),
                  ],
                }),
              ],
            },
            e.id,
          ),
        )),
      (n[37] = A),
      (n[38] = C),
      (n[39] = g),
      (n[40] = M.blocks),
      (n[41] = M.enabled),
      (n[42] = U))
    : (U = n[42]);
  let W;
  n[43] !== A || n[44] !== F || n[45] !== o || n[46] !== g || n[47] !== M.enabled
    ? ((W =
        M.enabled &&
        (0, Q.jsx)(t, {
          className: `justify-center`,
          color: `secondary`,
          size: `dialog`,
          disabled: A || o.blocks.length >= 12,
          onClick: () => g({ type: `add_block`, block: F() }),
          children: (0, Q.jsx)(u, {
            id: `chatgpt.recurring_schedule.block.button.add`,
            defaultMessage: `Add a new block`,
            description: `Adds an editable time block to Quiet Hours or Study Hours`,
          }),
        })),
      (n[43] = A),
      (n[44] = F),
      (n[45] = o),
      (n[46] = g),
      (n[47] = M.enabled),
      (n[48] = W))
    : (W = n[48]);
  let G;
  n[49] !== o || n[50] !== d || n[51] !== l || n[52] !== re || n[53] !== le
    ? ((G =
        (re || (l && !d && o.blocks.length > 12)) &&
        le &&
        (0, Q.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children: (0, Q.jsx)(u, { ...le }),
        })),
      (n[49] = o),
      (n[50] = d),
      (n[51] = l),
      (n[52] = re),
      (n[53] = le),
      (n[54] = G))
    : (G = n[54]);
  let me;
  n[55] === E
    ? (me = n[56])
    : ((me = E && (0, Q.jsx)(`p`, { role: `alert`, className: `text-sm text-danger`, children: E })),
      (n[55] = E),
      (n[56] = me));
  let he = h || D,
    ge;
  n[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, Q.jsx)(u, {
        id: `amphora.members.cancelButton`,
        defaultMessage: `Cancel`,
        description: `Cancel button text in family invite modal`,
      })),
      (n[57] = ge))
    : (ge = n[57]);
  let K;
  n[58] !== y || n[59] !== he
    ? ((K = (0, Q.jsx)(t, {
        color: `secondary`,
        size: `dialogAction`,
        disabled: he,
        onClick: y,
        children: ge,
      })),
      (n[58] = y),
      (n[59] = he),
      (n[60] = K))
    : (K = n[60]);
  let ve = A || !se,
    q;
  n[61] !== h || n[62] !== D
    ? ((q =
        h || D
          ? (0, Q.jsx)(u, {
              id: `chatgpt.parental_controls.quiet_hours.button.saving`,
              defaultMessage: `Saving…`,
              description: `Save button label while a Quiet Hours or Study Hours schedule is being saved`,
            })
          : (0, Q.jsx)(u, {
              id: `settings.chatGpt.parentalControls.save`,
              defaultMessage: `Save`,
              description: `Saves changes to a parental-controls schedule`,
            })),
      (n[61] = h),
      (n[62] = D),
      (n[63] = q))
    : (q = n[63]);
  let J;
  n[64] !== ve || n[65] !== q
    ? ((J = (0, Q.jsx)(t, { type: `submit`, size: `dialogAction`, disabled: ve, children: q })),
      (n[64] = ve),
      (n[65] = q),
      (n[66] = J))
    : (J = n[66]);
  let Y;
  n[67] !== K || n[68] !== J
    ? ((Y = (0, Q.jsxs)(`div`, {
        className: `sticky bottom-0 flex min-h-21 items-center justify-end gap-2 border-t border-primary-outline bg-surface px-4`,
        children: [K, J],
      })),
      (n[67] = K),
      (n[68] = J),
      (n[69] = Y))
    : (Y = n[69]);
  let X;
  n[70] !== w || n[71] !== g || n[72] !== M.blocks || n[73] !== fe
    ? ((X =
        w &&
        (0, Q.jsx)(_e, {
          title: (0, Q.jsx)(u, {
            id: `chatgpt.recurring_schedule.block.days.label`,
            defaultMessage: `Days`,
            description: `Opens the weekday selector for a schedule block`,
          }),
          onClose: () => T(void 0),
          confirmDisabled: w.days.length === 0,
          onSubmit: () => {
            if (w.days.length) {
              let e = M.blocks.find((e) => e.id === w.id)?.days;
              ((e?.length !== w.days.length || !w.days.every((t) => e.includes(t))) &&
                g({ type: `update_block`, blockId: w.id, update: { days: w.days } }),
                T(void 0));
            }
          },
          confirmLabel: (0, Q.jsx)(u, {
            id: `settings.chatGpt.parentalControls.done`,
            defaultMessage: `Done`,
            description: `Applies selected weekdays to an unsaved schedule block`,
          }),
          children: (0, Q.jsx)(ie, {
            children: Z.map((e, n) =>
              (0, Q.jsxs)(
                t,
                {
                  className: `w-full justify-between`,
                  color: `ghostActive`,
                  size: `dialog`,
                  role: `checkbox`,
                  tabIndex: 0,
                  "aria-checked": w.days.includes(e),
                  onClick: () =>
                    T({
                      ...w,
                      days: w.days.includes(e)
                        ? w.days.filter((t) => t !== e)
                        : Z.filter((t) => t === e || w.days.includes(t)),
                    }),
                  children: [fe(n), w.days.includes(e) && (0, Q.jsx)(s, {})],
                },
                e,
              ),
            ),
          }),
        })),
      (n[70] = w),
      (n[71] = g),
      (n[72] = M.blocks),
      (n[73] = fe),
      (n[74] = X))
    : (X = n[74]);
  let ye;
  return (
    n[75] !== B ||
    n[76] !== V ||
    n[77] !== H ||
    n[78] !== U ||
    n[79] !== W ||
    n[80] !== G ||
    n[81] !== me ||
    n[82] !== Y ||
    n[83] !== X ||
    n[84] !== I ||
    n[85] !== L
      ? ((ye = (0, Q.jsxs)(`form`, {
          className: `flex flex-col gap-4`,
          noValidate: !0,
          onSubmit: I,
          children: [L, B, V, H, U, W, G, me, Y, X],
        })),
        (n[75] = B),
        (n[76] = V),
        (n[77] = H),
        (n[78] = U),
        (n[79] = W),
        (n[80] = G),
        (n[81] = me),
        (n[82] = Y),
        (n[83] = X),
        (n[84] = I),
        (n[85] = L),
        (n[86] = ye))
      : (ye = n[86]),
    ye
  );
}
function He(e) {
  let t = (0, Ue.c)(9),
    { days: n } = e,
    r = b();
  if (n.length === 7) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(u, {
            id: `chatgpt.recurring_schedule.days.every_day`,
            defaultMessage: `Every day`,
            description: `Summary when all seven days are selected for a schedule block`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n.length === 5 && Z.slice(0, 5).every((e) => n.includes(e))) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(u, {
            id: `chatgpt.recurring_schedule.days.week_days`,
            defaultMessage: `Week days`,
            description: `Summary when Monday through Friday are selected for a schedule block`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i;
  if (t[2] !== n || t[3] !== r) {
    let e;
    (t[5] === r
      ? (e = t[6])
      : ((e = (e) =>
          r.formatDate(new Date(Date.UTC(2026, 0, 5 + Z.indexOf(e))), { weekday: `short`, timeZone: `UTC` })),
        (t[5] = r),
        (t[6] = e)),
      (i = r.formatList(n.map(e))),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i));
  } else i = t[4];
  let a;
  return (
    t[7] === i ? (a = t[8]) : ((a = (0, Q.jsx)(Q.Fragment, { children: i })), (t[7] = i), (t[8] = a)),
    a
  );
}
var Ue, We, Q;
function Ge() {
  return (Ge = e(() => {
    ((Ue = j()),
      (We = P()),
      E(),
      k(),
      v(),
      oe(),
      h(),
      W(),
      T(),
      p(),
      ee(),
      Fe(),
      Ee(),
      Re(),
      he(),
      (Q = N()));
  }))();
}
function Ke(e) {
  return e instanceof Error ? e : Error(String(e));
}
function qe(e) {
  let t = (0, it.c)(26),
    { account: n, amphoraId: r, member: i, onBack: a } = e,
    o = ne(),
    s;
  t[0] !== n.accountId || t[1] !== n.userId
    ? ((s = V(n.userId, n.accountId)), (t[0] = n.accountId), (t[1] = n.userId), (t[2] = s))
    : (s = t[2]);
  let c = s,
    l = i.user_id ?? ``,
    u;
  t[3] !== n.userId || t[4] !== r || t[5] !== o || t[6] !== i.role || t[7] !== l || t[8] !== c
    ? ((u = () => {
        let e = o.getQueryData(c.current.queryKey),
          t = o.getQueryData(c.members(r).queryKey)?.items.find((e) => {
            let { user_id: t } = e;
            return t === l;
          });
        return (
          e?.id === r &&
          t?.status === `accepted` &&
          t.role === i.role &&
          t.role !== `owner` &&
          (e.role === `owner` || l === n.userId)
        );
      }),
      (t[3] = n.userId),
      (t[4] = r),
      (t[5] = o),
      (t[6] = i.role),
      (t[7] = l),
      (t[8] = c),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] === i ? (d = t[11]) : ((d = (0, $.jsx)(me, { member: i })), (t[10] = i), (t[11] = d));
  let f;
  t[12] !== n || t[13] !== r || t[14] !== i || t[15] !== a
    ? ((f = () => (0, $.jsx)(K, { account: n, amphoraId: r, member: i, onRemoved: a })),
      (t[12] = n),
      (t[13] = r),
      (t[14] = i),
      (t[15] = a),
      (t[16] = f))
    : (f = t[16]);
  let p = i.role === `child` && l === n.userId,
    m;
  return (
    t[17] !== n ||
    t[18] !== r ||
    t[19] !== l ||
    t[20] !== a ||
    t[21] !== u ||
    t[22] !== d ||
    t[23] !== f ||
    t[24] !== p
      ? ((m = (0, $.jsx)(Je, {
          account: n,
          familyId: r,
          memberId: l,
          canUpdate: u,
          profile: d,
          footer: f,
          readOnly: p,
          onBack: a,
        })),
        (t[17] = n),
        (t[18] = r),
        (t[19] = l),
        (t[20] = a),
        (t[21] = u),
        (t[22] = d),
        (t[23] = f),
        (t[24] = p),
        (t[25] = m))
      : (m = t[25]),
    m
  );
}
function Je(e) {
  let t = (0, it.c)(23),
    { account: n, familyId: r, memberId: i } = e,
    { locale: a } = b(),
    o,
    s,
    c,
    l;
  if (t[0] !== n.accountId || t[1] !== n.userId || t[2] !== r || t[3] !== a || t[4] !== i || t[5] !== e) {
    let u = V(n.userId, n.accountId, a);
    ((o = Ye),
      (c = e),
      (l = u.layout),
      (s = u.settings(r, i)),
      (t[0] = n.accountId),
      (t[1] = n.userId),
      (t[2] = r),
      (t[3] = a),
      (t[4] = i),
      (t[5] = e),
      (t[6] = o),
      (t[7] = s),
      (t[8] = c),
      (t[9] = l));
  } else ((o = t[6]), (s = t[7]), (c = t[8]), (l = t[9]));
  let u = i !== ``,
    d;
  t[10] !== s || t[11] !== u
    ? ((d = { ...s, enabled: u }), (t[10] = s), (t[11] = u), (t[12] = d))
    : (d = t[12]);
  let f;
  t[13] !== n.accountId || t[14] !== r || t[15] !== i
    ? ((f = async (e, t) => {
        let a = { "ChatGPT-Account-ID": n.accountId },
          o = { path: { amphora_id: encodeURIComponent(r), user_id: encodeURIComponent(i) } };
        if (`permission` in e) {
          await ue.safePatch(`/amphora/{amphora_id}/members/{user_id}/permissions`, {
            additionalHeaders: a,
            parameters: o,
            requestBody: e,
            signal: t,
          });
          return;
        }
        let s;
        for (let n of e.patches)
          try {
            await ue.safePatch(`/amphora/{amphora_id}/members/{user_id}/settings`, {
              additionalHeaders: a,
              parameters: o,
              requestBody: n,
              signal: t,
            });
          } catch (e) {
            s === void 0 && (s = Ke(e));
          }
        if (s) throw s;
      }),
      (t[13] = n.accountId),
      (t[14] = r),
      (t[15] = i),
      (t[16] = f))
    : (f = t[16]);
  let p;
  return (
    t[17] !== o || t[18] !== c || t[19] !== l || t[20] !== d || t[21] !== f
      ? ((p = (0, $.jsx)(o, { ...c, layoutQuery: l, settingsQuery: d, onSave: f })),
        (t[17] = o),
        (t[18] = c),
        (t[19] = l),
        (t[20] = d),
        (t[21] = f),
        (t[22] = p))
      : (p = t[22]),
    p
  );
}
function Ye(e) {
  let t = (0, it.c)(21),
    { data: n, isError: r, refetch: i } = x(e.layoutQuery),
    { data: a, isError: o, refetch: s } = x(e.settingsQuery);
  if ((o && !a) || (r && !n)) {
    let n = e.embedded ? `max-w-3xl` : void 0,
      r;
    t[0] !== e.onBack || t[1] !== e.showRootBack
      ? ((r = e.showRootBack !== !1 && (0, $.jsx)(ge, { onClick: e.onBack })),
        (t[0] = e.onBack),
        (t[1] = e.showRootBack),
        (t[2] = r))
      : (r = t[2]);
    let a;
    t[3] !== s || t[4] !== i
      ? ((a = (0, $.jsx)(q, {
          onRetry: () => {
            (s(), i());
          },
        })),
        (t[3] = s),
        (t[4] = i),
        (t[5] = a))
      : (a = t[5]);
    let o;
    t[6] === e.footer ? (o = t[7]) : ((o = e.footer?.(!1)), (t[6] = e.footer), (t[7] = o));
    let c;
    return (
      t[8] !== e.embedded || t[9] !== e.profile || t[10] !== n || t[11] !== r || t[12] !== a || t[13] !== o
        ? ((c = (0, $.jsxs)(fe, {
            embedded: e.embedded,
            fullWidth: e.embedded,
            contentClassName: n,
            backSlot: r,
            children: [e.profile, a, o],
          })),
          (t[8] = e.embedded),
          (t[9] = e.profile),
          (t[10] = n),
          (t[11] = r),
          (t[12] = a),
          (t[13] = o),
          (t[14] = c))
        : (c = t[14]),
      c
    );
  }
  if (!n || !a || !e.memberId) {
    let e;
    return (
      t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(L, {})), (t[15] = e))
        : (e = t[15]),
      e
    );
  }
  let c = o || r,
    l;
  return (
    t[16] !== a || t[17] !== n || t[18] !== e || t[19] !== c
      ? ((l = (0, $.jsx)(Xe, { ...e, layout: n, data: a, confirmationError: c })),
        (t[16] = a),
        (t[17] = n),
        (t[18] = e),
        (t[19] = c),
        (t[20] = l))
      : (l = t[20]),
    l
  );
}
function Xe(e) {
  let t = (0, it.c)(90),
    {
      account: n,
      memberId: r,
      settingsQuery: a,
      canUpdate: s,
      onSave: c,
      onPendingChange: l,
      profile: d,
      footer: p,
      readOnly: h,
      embedded: g,
      layout: v,
      data: y,
      confirmationError: b,
      selfNotice: x,
      accountScope: S,
      showRootBack: C,
      onBack: ee,
    } = e,
    w = h !== void 0 && h,
    T = g !== void 0 && g,
    E = S === void 0 ? `personal` : S,
    D = C === void 0 || C,
    O = f(o),
    re;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((re = []), (t[0] = re)) : (re = t[0]);
  let [k, A] = (0, at.useState)(re),
    [j, M] = (0, at.useState)(),
    N = ne(),
    P = a.queryKey,
    oe = (0, at.useRef)(null),
    se = (0, at.useRef)(!1),
    ce,
    ue;
  (t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = () => () => {
        oe.current?.abort();
      }),
      (ue = []),
      (t[1] = ce),
      (t[2] = ue))
    : ((ce = t[1]), (ue = t[2])),
    (0, at.useEffect)(ce, ue));
  let F;
  t[3] !== v.root_page_id || t[4] !== k
    ? ((F = k.at(-1) ?? v.root_page_id), (t[3] = v.root_page_id), (t[4] = k), (t[5] = F))
    : (F = t[5]);
  let de = F,
    I;
  t[6] !== v.pages || t[7] !== de
    ? ((I = v.pages.find((e) => e.id === de) ?? v.pages[0]), (t[6] = v.pages), (t[7] = de), (t[8] = I))
    : (I = t[8]);
  let L = I,
    R = r === n.userId,
    z;
  t[9] !== n ||
  t[10] !== E ||
  t[11] !== s ||
  t[12] !== N ||
  t[13] !== R ||
  t[14] !== c ||
  t[15] !== P ||
  t[16] !== w ||
  t[17] !== O
    ? ((z = async (e) => {
        if (oe.current != null || !B(O, n, E) || w || !s())
          throw Error(`Family membership changed before saving settings`);
        let t = new AbortController();
        oe.current = t;
        let r = O.watch((e) => {
          B(e, n, E) || t.abort();
        });
        return (
          N.invalidateQueries({ queryKey: P, refetchType: `none` }),
          R && N.invalidateQueries({ queryKey: [`chatgpt-user-settings`, n.accountId], refetchType: `none` }),
          (async () => {
            let r;
            try {
              await c(e, t.signal);
            } catch (e) {
              r = Ke(e);
            }
            if (
              t.signal.aborted ||
              !B(O, n, E) ||
              (await N.cancelQueries({ queryKey: P }), t.signal.aborted || !B(O, n, E)) ||
              (await Promise.all([
                N.invalidateQueries({ queryKey: P, exact: !0, refetchType: `active` }, { throwOnError: !0 }),
                ...(R
                  ? [
                      N.invalidateQueries(
                        { queryKey: [`chatgpt-user-settings`, n.accountId], refetchType: `active` },
                        { throwOnError: !0 },
                      ),
                    ]
                  : []),
              ]),
              t.signal.aborted || !B(O, n, E))
            )
              throw r ?? new DOMException(`Account changed`, `AbortError`);
            if (((se.current = !0), r)) throw r;
          })().finally(() => {
            (r(), oe.current === t && (oe.current = null));
          })
        );
      }),
      (t[9] = n),
      (t[10] = E),
      (t[11] = s),
      (t[12] = N),
      (t[13] = R),
      (t[14] = c),
      (t[15] = P),
      (t[16] = w),
      (t[17] = O),
      (t[18] = z))
    : (z = t[18]);
  let V;
  t[19] !== n ||
  t[20] !== E ||
  t[21] !== s ||
  t[22] !== N ||
  t[23] !== R ||
  t[24] !== l ||
  t[25] !== P ||
  t[26] !== w ||
  t[27] !== O
    ? ((V = async (e) => {
        (l?.(!0), (se.current = !1), await N.cancelQueries({ queryKey: P }));
        let t = N.getQueryData(P),
          r = [];
        if (
          (`permission` in e ? (r = [e.permission]) : `patches` in e && (r = e.patches.map(et)),
          !t || !B(O, n, E) || w || !s() || (R && ze(t.settings, r)))
        )
          throw Error(`Family settings changed before saving`);
        return {
          previous: t,
          optimistic: N.setQueryData(
            P,
            `permission` in e
              ? {
                  ...t,
                  permissions: e.enabled
                    ? [...new Set([...t.permissions, e.permission])]
                    : t.permissions.filter((t) => t !== e.permission),
                }
              : { ...t, settings: { ...t.settings, ...Object.fromEntries(e.patches.map($e)) } },
          ),
        };
      }),
      (t[19] = n),
      (t[20] = E),
      (t[21] = s),
      (t[22] = N),
      (t[23] = R),
      (t[24] = l),
      (t[25] = P),
      (t[26] = w),
      (t[27] = O),
      (t[28] = V))
    : (V = t[28]);
  let H;
  t[29] !== n || t[30] !== E || t[31] !== s || t[32] !== N || t[33] !== P || t[34] !== w || t[35] !== O
    ? ((H = (e, t, r) => {
        (r &&
          !se.current &&
          N.getQueryData(P) === r.optimistic &&
          B(O, n, E) &&
          !w &&
          s() &&
          N.setQueryData(P, r.previous),
          N.invalidateQueries({ queryKey: P, refetchType: `none` }));
      }),
      (t[29] = n),
      (t[30] = E),
      (t[31] = s),
      (t[32] = N),
      (t[33] = P),
      (t[34] = w),
      (t[35] = O),
      (t[36] = H))
    : (H = t[36]);
  let U;
  t[37] === l ? (U = t[38]) : ((U = () => l?.(!1)), (t[37] = l), (t[38] = U));
  let pe;
  t[39] !== z || t[40] !== V || t[41] !== H || t[42] !== U
    ? ((pe = { mutationFn: z, onMutate: V, onError: H, onSettled: U }),
      (t[39] = z),
      (t[40] = V),
      (t[41] = H),
      (t[42] = U),
      (t[43] = pe))
    : (pe = t[43]);
  let { mutateAsync: W, isPending: G, isError: me } = m(pe),
    he;
  t[44] === W
    ? (he = t[45])
    : ((he = (e) => {
        W(e).catch(Qe);
      }),
      (t[44] = W),
      (t[45] = he));
  let _e = he,
    K;
  t[46] !== j || t[47] !== ee || t[48] !== k
    ? ((K = () => {
        j ? M(void 0) : k.length ? A(k.slice(0, -1)) : ee();
      }),
      (t[46] = j),
      (t[47] = ee),
      (t[48] = k),
      (t[49] = K))
    : (K = t[49]);
  let q = K,
    J = k.length === 0 && j == null,
    Y = j ? at.Fragment : ie,
    X;
  t[50] !== q || t[51] !== G || t[52] !== J || t[53] !== D
    ? ((X = (D || !J) && (0, $.jsx)(ge, { onClick: q, disabled: G })),
      (t[50] = q),
      (t[51] = G),
      (t[52] = J),
      (t[53] = D),
      (t[54] = X))
    : (X = t[54]);
  let ye = T ? `max-w-3xl` : void 0,
    be = J && d,
    xe;
  t[55] !== R || t[56] !== J || t[57] !== x
    ? ((xe =
        J &&
        R &&
        (0, $.jsx)(`p`, {
          className: `text-sm text-secondary select-none`,
          children:
            x ??
            (0, $.jsx)(u, {
              id: `amphora.memberSettings.childInformationalBanner`,
              defaultMessage: `Your parent or guardian can adjust these settings to help guide how you use ChatGPT and Sora.`,
              description: `Informational banner shown when a child is viewing their own settings`,
            }),
        })),
      (t[55] = R),
      (t[56] = J),
      (t[57] = x),
      (t[58] = xe))
    : (xe = t[58]);
  let Se;
  t[59] !== j || t[60] !== L
    ? ((Se =
        !j &&
        (L?.heading || L?.description) &&
        (0, $.jsx)(le.Header, {
          title: L.heading,
          subtitle: (0, $.jsx)(tt, { description: L.description, learnMore: L.description_learn_more }),
        })),
      (t[59] = j),
      (t[60] = L),
      (t[61] = Se))
    : (Se = t[61]);
  let Z;
  t[62] !== Y ||
  t[63] !== y ||
  t[64] !== j ||
  t[65] !== G ||
  t[66] !== R ||
  t[67] !== W ||
  t[68] !== L?.sections ||
  t[69] !== k ||
  t[70] !== w ||
  t[71] !== _e
    ? ((Z = L?.sections.map((e) => {
        let t = j ? e.items.filter((e) => e.id === j) : e.items;
        return t.length
          ? (0, $.jsxs)(
              le,
              {
                children: [
                  e.label && !j && (0, $.jsx)(le.Header, { title: e.label }),
                  (0, $.jsx)(le.Content, {
                    children: (0, $.jsx)(Y, {
                      children: t.map((e) => {
                        if (e.type === `navigation`)
                          return (0, $.jsx)(
                            _,
                            {
                              label: e.label,
                              description: e.description,
                              trailing: (0, $.jsx)(i, {}),
                              onClick: () => A([...k, e.target_page_id]),
                            },
                            e.id,
                          );
                        if (e.type === `multi_select`)
                          return (0, $.jsx)(
                            nt,
                            {
                              item: e,
                              settings: y.settings,
                              disabled: G || w || (R && ze(y.settings, [e.setting])),
                              onChange: (t) => _e({ patches: [{ feature: e.setting, value: t }] }),
                            },
                            e.id,
                          );
                        if (
                          !(`kind` in e) ||
                          (R && e.settings?.includes(`3VyEPC5dTP_model_instructions_enabled`))
                        )
                          return null;
                        if (e.toggle_type === `blackout`)
                          return (0, $.jsx)(
                            Be,
                            {
                              item: e,
                              description: (0, $.jsx)(tt, {
                                description: e.description,
                                learnMore: e.learn_more,
                              }),
                              settings: y.settings,
                              isSelf: R,
                              pending: G || w,
                              editing: j === e.id,
                              onEditingChange: (t) => M(t ? e.id : void 0),
                              onSave: (e) => W({ patches: [e] }),
                            },
                            e.id,
                          );
                        let t = e.kind === `setting` ? e.settings : [e.permission].filter(Ze),
                          n = G || w || !t?.length || (R && ze(y.settings, t)),
                          r =
                            e.kind === `setting`
                              ? (t?.some((e) => y.settings[e] === !0) ?? !1)
                              : e.permission != null && y.permissions.includes(e.permission);
                        return (0, $.jsx)(
                          ae,
                          {
                            label: e.label,
                            description: (0, $.jsx)(tt, {
                              description: e.description,
                              learnMore: e.learn_more,
                            }),
                            control: (t) =>
                              (0, $.jsx)(te, {
                                ...t,
                                disabled: n,
                                checked: r,
                                onChange: (t) => {
                                  n ||
                                    (e.kind === `setting`
                                      ? _e({
                                          patches: (e.settings ?? [])
                                            .filter((e) => (y.settings[e] === !0) !== t)
                                            .map((e) => ({ feature: e, value: t })),
                                        })
                                      : e.permission && _e({ permission: e.permission, enabled: t }));
                                },
                              }),
                          },
                          e.id,
                        );
                      }),
                    }),
                  }),
                ],
              },
              e.id,
            )
          : null;
      })),
      (t[62] = Y),
      (t[63] = y),
      (t[64] = j),
      (t[65] = G),
      (t[66] = R),
      (t[67] = W),
      (t[68] = L?.sections),
      (t[69] = k),
      (t[70] = w),
      (t[71] = _e),
      (t[72] = Z))
    : (Z = t[72]);
  let Ce;
  t[73] !== b || t[74] !== me
    ? ((Ce = (me || b) && (0, $.jsx)(ve, {})), (t[73] = b), (t[74] = me), (t[75] = Ce))
    : (Ce = t[75]);
  let we;
  t[76] !== p || t[77] !== G || t[78] !== J
    ? ((we = J && p?.(G)), (t[76] = p), (t[77] = G), (t[78] = J), (t[79] = we))
    : (we = t[79]);
  let Te;
  return (
    t[80] !== T ||
    t[81] !== X ||
    t[82] !== ye ||
    t[83] !== be ||
    t[84] !== xe ||
    t[85] !== Se ||
    t[86] !== Z ||
    t[87] !== Ce ||
    t[88] !== we
      ? ((Te = (0, $.jsxs)(fe, {
          backSlot: X,
          embedded: T,
          fullWidth: T,
          contentClassName: ye,
          children: [be, xe, Se, Z, Ce, we],
        })),
        (t[80] = T),
        (t[81] = X),
        (t[82] = ye),
        (t[83] = be),
        (t[84] = xe),
        (t[85] = Se),
        (t[86] = Z),
        (t[87] = Ce),
        (t[88] = we),
        (t[89] = Te))
      : (Te = t[89]),
    Te
  );
}
function Ze(e) {
  return e != null;
}
function Qe() {}
function $e(e) {
  return [e.feature, e.value];
}
function et(e) {
  let { feature: t } = e;
  return t;
}
function tt(e) {
  let t = (0, it.c)(5),
    { description: n, learnMore: r } = e;
  if (!n) return null;
  let i;
  t[0] === r
    ? (i = t[1])
    : ((i =
        r &&
        (0, $.jsxs)($.Fragment, {
          children: [
            ` `,
            (0, $.jsx)(z, {
              appearance: `secondary`,
              href: r.href,
              initiator: `open_in_browser_bridge`,
              children: r.label,
            }),
          ],
        })),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, $.jsxs)($.Fragment, { children: [n, i] })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function nt(e) {
  let n = (0, it.c)(21),
    { item: r, settings: i, disabled: o, onChange: s } = e,
    l = b(),
    u = i[r.setting],
    d = Array.isArray(u) ? u : r.default_value,
    f,
    p;
  if (n[0] !== l || n[1] !== r.default_value || n[2] !== r.options || n[3] !== d) {
    let e;
    n[6] === r.options
      ? (e = n[7])
      : ((e = (e) => r.options.some((t) => t.value === e)), (n[6] = r.options), (n[7] = e));
    let t = d.filter(e);
    ((f = t.length ? t : r.default_value.filter((e) => r.options.some((t) => t.value === e))),
      (p = l.formatList(r.options.filter((e) => f.includes(e.value)).map(rt))),
      (n[0] = l),
      (n[1] = r.default_value),
      (n[2] = r.options),
      (n[3] = d),
      (n[4] = f),
      (n[5] = p));
  } else ((f = n[4]), (p = n[5]));
  let m = p,
    h;
  n[8] !== r.description || n[9] !== r.learn_more
    ? ((h = (0, $.jsx)(tt, { description: r.description, learnMore: r.learn_more })),
      (n[8] = r.description),
      (n[9] = r.learn_more),
      (n[10] = h))
    : (h = n[10]);
  let g;
  n[11] !== o || n[12] !== r.options || n[13] !== s || n[14] !== f || n[15] !== m
    ? ((g = (e) =>
        (0, $.jsx)(a, {
          triggerButton: (0, $.jsx)(t, { ...e, color: `secondary`, disabled: o, children: m }),
          children: r.options.map((e) =>
            (0, $.jsx)(
              c,
              {
                checked: f.includes(e.value),
                disabled: o || (f.includes(e.value) && f.length === 1),
                onCheckedChange: (t) => s(t ? [...f, e.value] : f.filter((t) => t !== e.value)),
                SubText: e.description ? (0, $.jsx)($.Fragment, { children: e.description }) : void 0,
                children: e.label,
              },
              e.value,
            ),
          ),
        })),
      (n[11] = o),
      (n[12] = r.options),
      (n[13] = s),
      (n[14] = f),
      (n[15] = m),
      (n[16] = g))
    : (g = n[16]);
  let _;
  return (
    n[17] !== r.label || n[18] !== h || n[19] !== g
      ? ((_ = (0, $.jsx)(ae, { label: r.label, description: h, control: g })),
        (n[17] = r.label),
        (n[18] = h),
        (n[19] = g),
        (n[20] = _))
      : (_ = n[20]),
    _
  );
}
function rt(e) {
  return e.label;
}
var it, at, $;
function ot() {
  return (ot = e(() => {
    ((it = j()),
      d(),
      S(),
      A(),
      g(),
      (at = P()),
      E(),
      de(),
      k(),
      r(),
      R(),
      v(),
      h(),
      M(),
      F(),
      se(),
      I(),
      T(),
      p(),
      H(),
      X(),
      U(),
      Ge(),
      he(),
      ($ = N()));
  }))();
}
export { X as a, q as i, Ye as n, ot as r, qe as t };
//# sourceMappingURL=member-settings-c51719bab552.js.map
