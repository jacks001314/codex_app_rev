import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  CH as i,
  FBt as a,
  HFt as o,
  IH as s,
  JO as c,
  KO as l,
  LNt as u,
  Lst as d,
  Mst as f,
  NLt as p,
  Oit as m,
  PBt as h,
  Qst as ee,
  Rst as g,
  SLt as _,
  TY as v,
  VRt as y,
  XOt as b,
  Y3 as x,
  YOt as S,
  Z3 as C,
  ZSt as w,
  ck as T,
  ew as E,
  ik as D,
  iw as te,
  jit as ne,
  jst as O,
  kLt as k,
  kRt as A,
  lk as re,
  okt as ie,
  sw as ae,
  tk as j,
  tkt as M,
  uk as oe,
  uw as N,
  vst as se,
  yst as ce,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as le,
  GLn as P,
  QF as ue,
  XF as F,
  ZF as de,
  ZLn as fe,
  cA as I,
  eI as L,
  iRr as R,
  qLn as pe,
  sA as me,
  tyr as z,
} from "./app-initial-ad16eaadf81f.js";
import { i as B, n as V, r as H, t as U } from "./queries-94cb24d2279c.js";
import { n as he, r as W, t as ge } from "./legacy-study-hours-schedule-680e5861bb81.js";
import { a as _e, c as G, n as ve, r as ye, s as K, t as be } from "./shared-b5afe1ea7194.js";
function q(e) {
  let t = (0, J.c)(8),
    { isRefresh: n, onRetry: r } = e,
    i = n !== void 0 && n,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = (0, Y.jsx)(`span`, {
        role: `alert`,
        children: i
          ? (0, Y.jsx)(M, {
              id: `settings.chatGpt.parentalControls.refreshError`,
              defaultMessage: `Your family information couldn’t be refreshed`,
              description: `Nonblocking error in Parental controls when a background read fails; previously loaded family information and unsaved edits remain visible, and Retry refreshes them`,
            })
          : (0, Y.jsx)(M, {
              id: `settings.chatGpt.parentalControls.loadError`,
              defaultMessage: `Your family information couldn’t be loaded`,
              description: `Recoverable error in Parental controls settings when account eligibility, family membership, or the member list cannot be loaded; Retry repeats the failed read`,
            }),
      })),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Y.jsx)(M, {
        id: `settings.chatGpt.parentalControls.retry`,
        defaultMessage: `Retry`,
        description: `Button in Parental controls settings that retries loading the failed account or family information`,
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === r
    ? (s = t[4])
    : ((s = (0, Y.jsx)(x, { color: `secondary`, size: `toolbar`, onClick: r, children: o })),
      (t[3] = r),
      (t[4] = s));
  let c;
  return (
    t[5] !== a || t[6] !== s
      ? ((c = (0, Y.jsx)(ae, { label: a, control: s })), (t[5] = a), (t[6] = s), (t[7] = c))
      : (c = t[7]),
    c
  );
}
var J, Y;
function xe() {
  return (xe = e(() => {
    ((J = h()), b(), C(), N(), (Y = u()));
  }))();
}
function Se(e) {
  return De.safeParse(e).success;
}
function X(e) {
  return { ...e, blocks: e.blocks.map((e) => ({ ...e, days: [...e.days] })) };
}
function Ce(e, t) {
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
function we(e) {
  if (e.enabled && e.blocks.length === 0) return `missing_blocks`;
  if (e.blocks.length > Te) return `too_many_blocks`;
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
    if (!Ee.test(n.start_time) || !Ee.test(n.end_time)) return `invalid_time`;
    if (n.start_time === n.end_time) return `same_time`;
  }
}
var Z, Te, Ee, De;
function Oe() {
  return (Oe = e(() => {
    (o(),
      (Z = [`monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`]),
      (Te = 12),
      (Ee = /^(?:[01][0-9]|2[0-3]):[0-5][0-9]$/),
      (De = A({ enabled: p(), blocks: k(A({ id: y(), days: k(_(Z)), start_time: y(), end_time: y() })) })));
  }))();
}
function ke(e) {
  let t = e?.quiet_hours_schedule;
  if (t != null) return Se(t) ? t : void 0;
  let n = Ie.safeParse(e?.[Ne]),
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
function Ae(e) {
  let t = e?.study_hours_schedule;
  return Se(t) ? t : void 0;
}
function je(e) {
  let t = we(e);
  if (t != null) return t;
  let n = new Map(Z.map((e) => [e, []]));
  for (let t of e.blocks) {
    let e = Me(t.start_time),
      r = Me(t.end_time);
    for (let i of t.days)
      if ((n.get(i)?.push([e, e < r ? r : Pe]), e > r)) {
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
      if ((n != null && r != null && (t += r - n), Pe - t < Fe)) return `insufficient_break`;
    }
}
function Me(e) {
  let [t, n] = e.split(`:`).map(Number);
  return (t ?? 0) * 60 + (n ?? 0);
}
var Ne, Pe, Fe, Ie;
function Le() {
  return (Le = e(() => {
    (o(),
      Oe(),
      (Ne = `rKAMeJfyrM_settings`),
      (Pe = 1440),
      (Fe = 5),
      (Ie = A({
        enabled: p().optional(),
        start_time: y().nullable().optional(),
        end_time: y().nullable().optional(),
      })));
  }))();
}
var Re, ze;
function Be() {
  return (Be = e(() => {
    (b(),
      (Re = S({
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
      (ze = S({
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
function Ve(e, t) {
  let n = e.amphora_locks;
  return n == null
    ? !1
    : typeof n != `object` || Array.isArray(n) || Object.values(n).some((e) => typeof e != `boolean`)
      ? !0
      : t.some((e) => n[e] === !0);
}
function He(e) {
  let t = (0, Ge.c)(61),
    {
      item: n,
      description: r,
      settings: i,
      isSelf: a,
      pending: o,
      editing: c,
      onEditingChange: l,
      onSave: u,
    } = e,
    d = (0, Ke.useId)(),
    f;
  t[0] === n.settings
    ? (f = t[1])
    : ((f = n.settings?.includes(`study_hours_schedule`) ?? !1), (t[0] = n.settings), (t[1] = f));
  let p = f,
    m = p ? `study_hours_schedule` : `quiet_hours_schedule`,
    h,
    ee,
    g,
    _;
  if (t[2] !== m || t[3] !== a || t[4] !== n.settings || t[5] !== i || t[6] !== p) {
    g = p ? Ae(i) : ke(i);
    let e;
    t[11] !== m || t[12] !== n.settings
      ? ((e = n.settings ?? [m]), (t[11] = m), (t[12] = n.settings), (t[13] = e))
      : (e = t[13]);
    let r = e;
    if (p) {
      let e;
      (t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = [`study_hours_schedule`, `default_to_study_mode`]), (t[14] = e))
        : (e = t[14]),
        (r = e));
    } else if (i.quiet_hours_schedule != null) {
      let e;
      (t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = [`quiet_hours_schedule`]), (t[15] = e))
        : (e = t[15]),
        (r = e));
    }
    let o;
    (t[16] !== a || t[17] !== r || t[18] !== i
      ? ((o = a && Ve(i, r)), (t[16] = a), (t[17] = r), (t[18] = i), (t[19] = o))
      : (o = t[19]),
      (ee = o),
      (h = p && i.default_to_study_mode === !0 && i.study_hours_schedule == null),
      (_ =
        ((i[m] != null || (!p && i.rKAMeJfyrM_settings != null)) && g == null) ||
        (g != null && (p ? we(g) : je(g)) != null)),
      (t[2] = m),
      (t[3] = a),
      (t[4] = n.settings),
      (t[5] = i),
      (t[6] = p),
      (t[7] = h),
      (t[8] = ee),
      (t[9] = g),
      (t[10] = _));
  } else ((h = t[7]), (ee = t[8]), (g = t[9]), (_ = t[10]));
  let v = _,
    y;
  t[20] === g ? (y = t[21]) : ((y = () => X(g ?? { enabled: !1, blocks: [] })), (t[20] = g), (t[21] = y));
  let [b, S] = (0, Ke.useState)(y),
    [C, w] = (0, Ke.useState)(h);
  if (c && b) {
    let e;
    t[22] !== b || t[23] !== C
      ? ((e = (e) => {
          (S(C ? ge(b, e) : Ce(b, e)), w(!1));
        }),
        (t[22] = b),
        (t[23] = C),
        (t[24] = e))
      : (e = t[24]);
    let i;
    t[25] !== b || t[26] !== m || t[27] !== l || t[28] !== u
      ? ((i = async () => {
          try {
            (await u({ feature: m, value: b }), l(!1));
          } catch (e) {
            let t = e;
            if (t instanceof ne && t.status === 403 && t.errorCode === `feature-locked-by-owner`) l(!1);
            else throw t;
          }
        }),
        (t[25] = b),
        (t[26] = m),
        (t[27] = l),
        (t[28] = u),
        (t[29] = i))
      : (i = t[29]);
    let a;
    t[30] === l ? (a = t[31]) : ((a = () => l(!1)), (t[30] = l), (t[31] = a));
    let s;
    return (
      t[32] !== r ||
      t[33] !== b ||
      t[34] !== n.label ||
      t[35] !== C ||
      t[36] !== h ||
      t[37] !== ee ||
      t[38] !== o ||
      t[39] !== g ||
      t[40] !== p ||
      t[41] !== e ||
      t[42] !== i ||
      t[43] !== a ||
      t[44] !== v
        ? ((s = (0, Q.jsx)(Ue, {
            label: n.label,
            description: r,
            draft: b,
            current: g,
            legacyStudy: h,
            legacyDisplay: C,
            study: p,
            locked: ee,
            unsupported: v,
            pending: o,
            onChange: e,
            onSave: i,
            onCancel: a,
          })),
          (t[32] = r),
          (t[33] = b),
          (t[34] = n.label),
          (t[35] = C),
          (t[36] = h),
          (t[37] = ee),
          (t[38] = o),
          (t[39] = g),
          (t[40] = p),
          (t[41] = e),
          (t[42] = i),
          (t[43] = a),
          (t[44] = v),
          (t[45] = s))
        : (s = t[45]),
      s
    );
  }
  let T;
  t[46] !== h || t[47] !== g?.enabled || t[48] !== v
    ? ((T = v
        ? (0, Q.jsx)(M, {
            id: `chatgpt.parental_controls.quiet_hours.status.unsupported`,
            defaultMessage: `Unsupported schedule`,
            description: `Status for a saved Quiet Hours or Study Hours schedule that cannot be edited without risking its existing data`,
          })
        : g?.enabled || h
          ? (0, Q.jsx)(M, {
              id: `chatgpt.recurring_schedule.status.scheduled`,
              defaultMessage: `Scheduled`,
              description: `Status when Quiet Hours or Study Hours is enabled`,
            })
          : (0, Q.jsx)(M, {
              id: `settings.chatGpt.parentalControls.notScheduled`,
              defaultMessage: `Not scheduled`,
              description: `Status when Quiet Hours or Study Hours is disabled`,
            })),
      (t[46] = h),
      (t[47] = g?.enabled),
      (t[48] = v),
      (t[49] = T))
    : (T = t[49]);
  let E;
  t[50] !== h || t[51] !== l || t[52] !== o || t[53] !== g || t[54] !== T || t[55] !== d
    ? ((E = (e) =>
        (0, Q.jsxs)(x, {
          ...e,
          "aria-labelledby": `${e[`aria-labelledby`]} ${d}`,
          color: `ghostSecondary`,
          size: `compact`,
          disabled: o,
          onClick: () => {
            (S(X(g ?? { enabled: !1, blocks: [] })), w(h), l(!0));
          },
          children: [(0, Q.jsx)(`span`, { id: d, children: T }), (0, Q.jsx)(s, {})],
        })),
      (t[50] = h),
      (t[51] = l),
      (t[52] = o),
      (t[53] = g),
      (t[54] = T),
      (t[55] = d),
      (t[56] = E))
    : (E = t[56]);
  let D;
  return (
    t[57] !== r || t[58] !== n.label || t[59] !== E
      ? ((D = (0, Q.jsx)(ae, { label: n.label, description: r, control: E })),
        (t[57] = r),
        (t[58] = n.label),
        (t[59] = E),
        (t[60] = D))
      : (D = t[60]),
    D
  );
}
function Ue(e) {
  let n = (0, Ge.c)(87),
    {
      label: r,
      description: a,
      draft: o,
      current: c,
      legacyStudy: l,
      legacyDisplay: u,
      study: d,
      locked: f,
      unsupported: p,
      pending: m,
      onChange: h,
      onSave: ee,
      onCancel: g,
    } = e,
    _ = f !== void 0 && f,
    v = p !== void 0 && p,
    y = ie(),
    b = _ || v,
    [S, C] = (0, Ke.useState)(),
    [w, T] = (0, Ke.useState)(),
    [E, D] = (0, Ke.useState)(!1),
    [ne, O] = (0, Ke.useState)(!1),
    k = b || m || E,
    A;
  n[0] !== o || n[1] !== u ? ((A = u ? he() : o), (n[0] = o), (n[1] = u), (n[2] = A)) : (A = n[2]);
  let j = A,
    oe;
  n[3] !== o || n[4] !== d ? ((oe = d ? we(o) : je(o)), (n[3] = o), (n[4] = d), (n[5] = oe)) : (oe = n[5]);
  let N = oe,
    se;
  n[6] !== c || n[7] !== o || n[8] !== u || n[9] !== l
    ? ((se = JSON.stringify(o) !== JSON.stringify(c ?? { enabled: !1, blocks: [] }) || (l && !u)),
      (n[6] = c),
      (n[7] = o),
      (n[8] = u),
      (n[9] = l),
      (n[10] = se))
    : (se = n[10]);
  let ce = se,
    le = N == null ? void 0 : Re[N];
  d &&
    (N === `missing_blocks` ||
      N === `too_many_blocks` ||
      N === `invalid_block_id` ||
      N === `duplicate_block_id`) &&
    (le = ze[N]);
  let P;
  n[11] === d
    ? (P = n[12])
    : ((P = () => ({
        id: crypto.randomUUID(),
        days: Z.slice(0, 5),
        start_time: d ? `16:00` : `22:00`,
        end_time: d ? `20:00` : `07:00`,
      })),
      (n[11] = d),
      (n[12] = P));
  let ue = P,
    F;
  n[13] === y
    ? (F = n[14])
    : ((F = (e) => y.formatDate(new Date(Date.UTC(2026, 0, 5 + e)), { weekday: `long`, timeZone: `UTC` })),
      (n[13] = y),
      (n[14] = F));
  let de = F,
    I;
  n[15] !== k || n[16] !== ce || n[17] !== y || n[18] !== N || n[19] !== ee
    ? ((I = (e) => {
        (e.preventDefault(),
          !k &&
            ce &&
            (T(void 0),
            O(!0),
            !N &&
              (D(!0),
              ee()
                .catch((e) => {
                  T(
                    e instanceof Error && e.message.length > 0
                      ? e.message
                      : y.formatMessage({
                          id: `chatgpt.parental_controls.quiet_hours.error.save`,
                          defaultMessage: `Couldn't update this schedule. Try again.`,
                          description: `Fallback inline error when saving a Quiet Hours or Study Hours schedule fails; the draft remains available for retry`,
                        }),
                  );
                })
                .finally(() => D(!1)))));
      }),
      (n[15] = k),
      (n[16] = ce),
      (n[17] = y),
      (n[18] = N),
      (n[19] = ee),
      (n[20] = I))
    : (I = n[20]);
  let L;
  n[21] === r
    ? (L = n[22])
    : ((L = (0, Q.jsx)(`h3`, { className: `text-base font-medium`, children: r })), (n[21] = r), (n[22] = L));
  let R;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(M, {
        id: `chatgpt.recurring_schedule.status.scheduled`,
        defaultMessage: `Scheduled`,
        description: `Status when Quiet Hours or Study Hours is enabled`,
      })),
      (n[23] = R))
    : (R = n[23]);
  let pe;
  n[24] !== k || n[25] !== ue || n[26] !== o || n[27] !== h || n[28] !== j.enabled
    ? ((pe = (e) =>
        (0, Q.jsx)(re, {
          ...e,
          checked: j.enabled,
          disabled: k,
          onChange: (e) =>
            h({ type: `set_enabled`, enabled: e, initialBlock: e && !o.blocks.length ? ue() : void 0 }),
        })),
      (n[24] = k),
      (n[25] = ue),
      (n[26] = o),
      (n[27] = h),
      (n[28] = j.enabled),
      (n[29] = pe))
    : (pe = n[29]);
  let me;
  n[30] !== a || n[31] !== pe
    ? ((me = (0, Q.jsx)(ae, { label: R, description: a, control: pe })),
      (n[30] = a),
      (n[31] = pe),
      (n[32] = me))
    : (me = n[32]);
  let z;
  n[33] === _
    ? (z = n[34])
    : ((z =
        _ &&
        (0, Q.jsx)(`p`, {
          role: `status`,
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(M, {
            id: `chatgpt.parental_controls.quiet_hours.status.managed_by_parent`,
            defaultMessage: `Managed by your parent`,
            description: `Read-only status when a teen views a schedule locked by their parent`,
          }),
        })),
      (n[33] = _),
      (n[34] = z));
  let B;
  n[35] === v
    ? (B = n[36])
    : ((B =
        v &&
        (0, Q.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children: (0, Q.jsx)(M, {
            id: `chatgpt.parental_controls.quiet_hours.unsupported.help_text`,
            defaultMessage: `This schedule can't be edited here. Your existing settings have been preserved.`,
            description: `Warning for an unsupported schedule; existing saved data is preserved`,
          }),
        })),
      (n[35] = v),
      (n[36] = B));
  let V;
  n[37] !== k || n[38] !== y || n[39] !== h || n[40] !== j.blocks || n[41] !== j.enabled
    ? ((V =
        j.enabled &&
        j.blocks.map((e, n) =>
          (0, Q.jsxs)(
            `fieldset`,
            {
              className: `min-w-0`,
              disabled: k,
              children: [
                (0, Q.jsx)(`legend`, {
                  className: `sr-only`,
                  children: y.formatMessage(
                    {
                      id: `chatgpt.recurring_schedule.block.accessibility.label`,
                      defaultMessage: `Schedule block {number}`,
                      description: `Screen-reader label for a recurring schedule block; number is its one-based position`,
                    },
                    { number: n + 1 },
                  ),
                }),
                (0, Q.jsxs)(t, {
                  children: [
                    (0, Q.jsx)(ae, {
                      size: `compact`,
                      label: (0, Q.jsx)(M, {
                        id: `chatgpt.recurring_schedule.block.start_time.label`,
                        defaultMessage: `Start time`,
                        description: `Start time for a Quiet Hours or Study Hours block`,
                      }),
                      control: (t) =>
                        (0, Q.jsx)(`div`, {
                          className: `w-36`,
                          children: (0, Q.jsx)(fe, {
                            ...t,
                            type: `time`,
                            step: 60,
                            name: `start-${e.id}`,
                            value: e.start_time,
                            onChange: (t) =>
                              h({
                                type: `update_block`,
                                blockId: e.id,
                                update: { start_time: t.target.value },
                              }),
                          }),
                        }),
                    }),
                    (0, Q.jsx)(ae, {
                      size: `compact`,
                      label: (0, Q.jsx)(M, {
                        id: `chatgpt.recurring_schedule.block.end_time.label`,
                        defaultMessage: `End time`,
                        description: `End time for a Quiet Hours or Study Hours block`,
                      }),
                      control: (t) =>
                        (0, Q.jsx)(`div`, {
                          className: `w-36`,
                          children: (0, Q.jsx)(fe, {
                            ...t,
                            type: `time`,
                            step: 60,
                            name: `end-${e.id}`,
                            value: e.end_time,
                            onChange: (t) =>
                              h({
                                type: `update_block`,
                                blockId: e.id,
                                update: { end_time: t.target.value },
                              }),
                          }),
                        }),
                    }),
                    (0, Q.jsx)(te, {
                      label: (0, Q.jsx)(M, {
                        id: `chatgpt.recurring_schedule.block.days.label`,
                        defaultMessage: `Days`,
                        description: `Opens the weekday selector for a schedule block`,
                      }),
                      trailing: (0, Q.jsxs)(Q.Fragment, {
                        children: [(0, Q.jsx)(We, { days: e.days }), (0, Q.jsx)(s, {})],
                      }),
                      disabled: k,
                      onClick: () => C({ ...e, days: [...e.days] }),
                    }),
                    e.end_time < e.start_time &&
                      (0, Q.jsx)(`p`, {
                        className: `px-4 py-3 text-xs text-secondary`,
                        children: (0, Q.jsx)(M, {
                          id: `chatgpt.parental_controls.quiet_hours.block.overnight.help_text`,
                          defaultMessage: `Ends the next day`,
                          description: `Helper text inside a schedule block whose end time is on the following day`,
                        }),
                      }),
                    j.blocks.length > 1 &&
                      (0, Q.jsx)(te, {
                        label: (0, Q.jsx)(`span`, {
                          className: `text-danger`,
                          children: (0, Q.jsx)(M, {
                            id: `chatgpt.recurring_schedule.block.button.delete`,
                            defaultMessage: `Delete block`,
                            description: `Removes a block from the unsaved schedule`,
                          }),
                        }),
                        disabled: k,
                        onClick: () => h({ type: `remove_block`, blockId: e.id }),
                      }),
                  ],
                }),
              ],
            },
            e.id,
          ),
        )),
      (n[37] = k),
      (n[38] = y),
      (n[39] = h),
      (n[40] = j.blocks),
      (n[41] = j.enabled),
      (n[42] = V))
    : (V = n[42]);
  let H;
  n[43] !== k || n[44] !== ue || n[45] !== o || n[46] !== h || n[47] !== j.enabled
    ? ((H =
        j.enabled &&
        (0, Q.jsx)(x, {
          className: `justify-center`,
          color: `secondary`,
          size: `dialog`,
          disabled: k || o.blocks.length >= 12,
          onClick: () => h({ type: `add_block`, block: ue() }),
          children: (0, Q.jsx)(M, {
            id: `chatgpt.recurring_schedule.block.button.add`,
            defaultMessage: `Add a new block`,
            description: `Adds an editable time block to Quiet Hours or Study Hours`,
          }),
        })),
      (n[43] = k),
      (n[44] = ue),
      (n[45] = o),
      (n[46] = h),
      (n[47] = j.enabled),
      (n[48] = H))
    : (H = n[48]);
  let U;
  n[49] !== o || n[50] !== u || n[51] !== l || n[52] !== ne || n[53] !== le
    ? ((U =
        (ne || (l && !u && o.blocks.length > 12)) &&
        le &&
        (0, Q.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children: (0, Q.jsx)(M, { ...le }),
        })),
      (n[49] = o),
      (n[50] = u),
      (n[51] = l),
      (n[52] = ne),
      (n[53] = le),
      (n[54] = U))
    : (U = n[54]);
  let W;
  n[55] === w
    ? (W = n[56])
    : ((W = w && (0, Q.jsx)(`p`, { role: `alert`, className: `text-sm text-danger`, children: w })),
      (n[55] = w),
      (n[56] = W));
  let ge = m || E,
    _e;
  n[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, Q.jsx)(M, {
        id: `amphora.members.cancelButton`,
        defaultMessage: `Cancel`,
        description: `Cancel button text in family invite modal`,
      })),
      (n[57] = _e))
    : (_e = n[57]);
  let G;
  n[58] !== g || n[59] !== ge
    ? ((G = (0, Q.jsx)(x, {
        color: `secondary`,
        size: `dialogAction`,
        disabled: ge,
        onClick: g,
        children: _e,
      })),
      (n[58] = g),
      (n[59] = ge),
      (n[60] = G))
    : (G = n[60]);
  let ve = k || !ce,
    K;
  n[61] !== m || n[62] !== E
    ? ((K =
        m || E
          ? (0, Q.jsx)(M, {
              id: `chatgpt.parental_controls.quiet_hours.button.saving`,
              defaultMessage: `Saving…`,
              description: `Save button label while a Quiet Hours or Study Hours schedule is being saved`,
            })
          : (0, Q.jsx)(M, {
              id: `settings.chatGpt.parentalControls.save`,
              defaultMessage: `Save`,
              description: `Saves changes to a parental-controls schedule`,
            })),
      (n[61] = m),
      (n[62] = E),
      (n[63] = K))
    : (K = n[63]);
  let be;
  n[64] !== ve || n[65] !== K
    ? ((be = (0, Q.jsx)(x, { type: `submit`, size: `dialogAction`, disabled: ve, children: K })),
      (n[64] = ve),
      (n[65] = K),
      (n[66] = be))
    : (be = n[66]);
  let q;
  n[67] !== G || n[68] !== be
    ? ((q = (0, Q.jsxs)(`div`, {
        className: `sticky bottom-0 flex min-h-21 items-center justify-end gap-2 border-t border-primary-outline bg-surface px-4`,
        children: [G, be],
      })),
      (n[67] = G),
      (n[68] = be),
      (n[69] = q))
    : (q = n[69]);
  let J;
  n[70] !== S || n[71] !== h || n[72] !== j.blocks || n[73] !== de
    ? ((J =
        S &&
        (0, Q.jsx)(ye, {
          title: (0, Q.jsx)(M, {
            id: `chatgpt.recurring_schedule.block.days.label`,
            defaultMessage: `Days`,
            description: `Opens the weekday selector for a schedule block`,
          }),
          onClose: () => C(void 0),
          confirmDisabled: S.days.length === 0,
          onSubmit: () => {
            if (S.days.length) {
              let e = j.blocks.find((e) => e.id === S.id)?.days;
              ((e?.length !== S.days.length || !S.days.every((t) => e.includes(t))) &&
                h({ type: `update_block`, blockId: S.id, update: { days: S.days } }),
                C(void 0));
            }
          },
          confirmLabel: (0, Q.jsx)(M, {
            id: `settings.chatGpt.parentalControls.done`,
            defaultMessage: `Done`,
            description: `Applies selected weekdays to an unsaved schedule block`,
          }),
          children: (0, Q.jsx)(t, {
            children: Z.map((e, t) =>
              (0, Q.jsxs)(
                x,
                {
                  className: `w-full justify-between`,
                  color: `ghostActive`,
                  size: `dialog`,
                  role: `checkbox`,
                  tabIndex: 0,
                  "aria-checked": S.days.includes(e),
                  onClick: () =>
                    C({
                      ...S,
                      days: S.days.includes(e)
                        ? S.days.filter((t) => t !== e)
                        : Z.filter((t) => t === e || S.days.includes(t)),
                    }),
                  children: [de(t), S.days.includes(e) && (0, Q.jsx)(i, {})],
                },
                e,
              ),
            ),
          }),
        })),
      (n[70] = S),
      (n[71] = h),
      (n[72] = j.blocks),
      (n[73] = de),
      (n[74] = J))
    : (J = n[74]);
  let Y;
  return (
    n[75] !== me ||
    n[76] !== z ||
    n[77] !== B ||
    n[78] !== V ||
    n[79] !== H ||
    n[80] !== U ||
    n[81] !== W ||
    n[82] !== q ||
    n[83] !== J ||
    n[84] !== I ||
    n[85] !== L
      ? ((Y = (0, Q.jsxs)(`form`, {
          className: `flex flex-col gap-4`,
          noValidate: !0,
          onSubmit: I,
          children: [L, me, z, B, V, H, U, W, q, J],
        })),
        (n[75] = me),
        (n[76] = z),
        (n[77] = B),
        (n[78] = V),
        (n[79] = H),
        (n[80] = U),
        (n[81] = W),
        (n[82] = q),
        (n[83] = J),
        (n[84] = I),
        (n[85] = L),
        (n[86] = Y))
      : (Y = n[86]),
    Y
  );
}
function We(e) {
  let t = (0, Ge.c)(9),
    { days: n } = e,
    r = ie();
  if (n.length === 7) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(M, {
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
        ? ((e = (0, Q.jsx)(M, {
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
var Ge, Ke, Q;
function qe() {
  return (qe = e(() => {
    ((Ge = h()), (Ke = a()), b(), C(), v(), le(), oe(), W(), N(), E(), m(), Le(), Oe(), Be(), G(), (Q = u()));
  }))();
}
function Je(e) {
  return e instanceof Error ? e : Error(String(e));
}
function Ye(e) {
  let t = (0, ot.c)(26),
    { account: n, amphoraId: r, member: i, onBack: a } = e,
    o = g(),
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
  t[10] === i ? (d = t[11]) : ((d = (0, $.jsx)(_e, { member: i })), (t[10] = i), (t[11] = d));
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
      ? ((m = (0, $.jsx)(Xe, {
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
function Xe(e) {
  let t = (0, ot.c)(23),
    { account: n, familyId: r, memberId: i } = e,
    { locale: a } = ie(),
    o,
    s,
    c,
    l;
  if (t[0] !== n.accountId || t[1] !== n.userId || t[2] !== r || t[3] !== a || t[4] !== i || t[5] !== e) {
    let u = V(n.userId, n.accountId, a);
    ((o = Ze),
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
          await R.safePatch(`/amphora/{amphora_id}/members/{user_id}/permissions`, {
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
            await R.safePatch(`/amphora/{amphora_id}/members/{user_id}/settings`, {
              additionalHeaders: a,
              parameters: o,
              requestBody: n,
              signal: t,
            });
          } catch (e) {
            s === void 0 && (s = Je(e));
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
function Ze(e) {
  let t = (0, ot.c)(21),
    { data: n, isError: r, refetch: i } = f(e.layoutQuery),
    { data: a, isError: o, refetch: s } = f(e.settingsQuery);
  if ((o && !a) || (r && !n)) {
    let n = e.embedded ? `max-w-3xl` : void 0,
      r;
    t[0] !== e.onBack || t[1] !== e.showRootBack
      ? ((r = e.showRootBack !== !1 && (0, $.jsx)(ve, { onClick: e.onBack })),
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
        ? ((c = (0, $.jsxs)(ue, {
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
        ? ((e = (0, $.jsx)(F, {})), (t[15] = e))
        : (e = t[15]),
      e
    );
  }
  let c = o || r,
    l;
  return (
    t[16] !== a || t[17] !== n || t[18] !== e || t[19] !== c
      ? ((l = (0, $.jsx)(Qe, { ...e, layout: n, data: a, confirmationError: c })),
        (t[16] = a),
        (t[17] = n),
        (t[18] = e),
        (t[19] = c),
        (t[20] = l))
      : (l = t[20]),
    l
  );
}
function Qe(e) {
  let r = (0, ot.c)(102),
    {
      account: i,
      familyId: a,
      memberId: o,
      settingsQuery: c,
      canUpdate: u,
      onSave: d,
      onPendingChange: f,
      profile: p,
      footer: m,
      readOnly: h,
      embedded: _,
      layout: v,
      data: y,
      confirmationError: b,
      selfNotice: x,
      accountScope: S,
      showRootBack: C,
      onBack: w,
    } = e,
    T = h !== void 0 && h,
    E = _ !== void 0 && _,
    D = S === void 0 ? `personal` : S,
    ne = C === void 0 || C,
    O = n(ee),
    k;
  r[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = []), (r[0] = k)) : (k = r[0]);
  let [A, ie] = (0, st.useState)(k),
    [j, oe] = (0, st.useState)(),
    [N, se] = (0, st.useState)(),
    le =
      N?.memberId === o &&
      N.familyId === a &&
      N.account.userId === i.userId &&
      N.account.accountId === i.accountId,
    P = g(),
    F = c.queryKey,
    de = (0, st.useRef)(null),
    fe = (0, st.useRef)(!1),
    I,
    L;
  (r[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => () => {
        de.current?.abort();
      }),
      (L = []),
      (r[1] = I),
      (r[2] = L))
    : ((I = r[1]), (L = r[2])),
    (0, st.useEffect)(I, L));
  let R;
  r[3] !== v.root_page_id || r[4] !== A
    ? ((R = A.at(-1) ?? v.root_page_id), (r[3] = v.root_page_id), (r[4] = A), (r[5] = R))
    : (R = r[5]);
  let pe = R,
    z;
  r[6] !== v.pages || r[7] !== pe
    ? ((z = v.pages.find((e) => e.id === pe) ?? v.pages[0]), (r[6] = v.pages), (r[7] = pe), (r[8] = z))
    : (z = r[8]);
  let V = z,
    H = o === i.userId,
    U;
  r[9] !== i ||
  r[10] !== D ||
  r[11] !== u ||
  r[12] !== P ||
  r[13] !== H ||
  r[14] !== d ||
  r[15] !== F ||
  r[16] !== T ||
  r[17] !== O
    ? ((U = async (e) => {
        if (de.current != null || !B(O, i, D) || T || !u())
          throw Error(`Family membership changed before saving settings`);
        let t = new AbortController();
        de.current = t;
        let n = O.watch((e) => {
          B(e, i, D) || t.abort();
        });
        return (
          P.invalidateQueries({ queryKey: F, refetchType: `none` }),
          H && P.invalidateQueries({ queryKey: [`chatgpt-user-settings`, i.accountId], refetchType: `none` }),
          (async () => {
            let n;
            try {
              await d(e, t.signal);
            } catch (e) {
              n = Je(e);
            }
            if (
              t.signal.aborted ||
              !B(O, i, D) ||
              (await P.cancelQueries({ queryKey: F }), t.signal.aborted || !B(O, i, D)) ||
              (await Promise.all([
                P.invalidateQueries({ queryKey: F, exact: !0, refetchType: `active` }, { throwOnError: !0 }),
                ...(H
                  ? [
                      P.invalidateQueries(
                        { queryKey: [`chatgpt-user-settings`, i.accountId], refetchType: `active` },
                        { throwOnError: !0 },
                      ),
                    ]
                  : []),
              ]),
              t.signal.aborted || !B(O, i, D))
            )
              throw n ?? new DOMException(`Account changed`, `AbortError`);
            if (((fe.current = !0), n)) throw n;
          })().finally(() => {
            (n(), de.current === t && (de.current = null));
          })
        );
      }),
      (r[9] = i),
      (r[10] = D),
      (r[11] = u),
      (r[12] = P),
      (r[13] = H),
      (r[14] = d),
      (r[15] = F),
      (r[16] = T),
      (r[17] = O),
      (r[18] = U))
    : (U = r[18]);
  let he;
  r[19] !== i ||
  r[20] !== D ||
  r[21] !== u ||
  r[22] !== P ||
  r[23] !== H ||
  r[24] !== f ||
  r[25] !== F ||
  r[26] !== T ||
  r[27] !== O
    ? ((he = async (e) => {
        (f?.(!0), (fe.current = !1), await P.cancelQueries({ queryKey: F }));
        let t = P.getQueryData(F),
          n = [];
        if (
          (`permission` in e ? (n = [e.permission]) : `patches` in e && (n = e.patches.map(nt)),
          !t || !B(O, i, D) || T || !u() || (H && Ve(t.settings, n)))
        )
          throw Error(`Family settings changed before saving`);
        return {
          previous: t,
          optimistic: P.setQueryData(
            F,
            `permission` in e
              ? {
                  ...t,
                  permissions: e.enabled
                    ? [...new Set([...t.permissions, e.permission])]
                    : t.permissions.filter((t) => t !== e.permission),
                }
              : { ...t, settings: { ...t.settings, ...Object.fromEntries(e.patches.map(tt)) } },
          ),
        };
      }),
      (r[19] = i),
      (r[20] = D),
      (r[21] = u),
      (r[22] = P),
      (r[23] = H),
      (r[24] = f),
      (r[25] = F),
      (r[26] = T),
      (r[27] = O),
      (r[28] = he))
    : (he = r[28]);
  let W;
  r[29] !== i || r[30] !== D || r[31] !== u || r[32] !== P || r[33] !== F || r[34] !== T || r[35] !== O
    ? ((W = (e, t, n) => {
        (n &&
          !fe.current &&
          P.getQueryData(F) === n.optimistic &&
          B(O, i, D) &&
          !T &&
          u() &&
          P.setQueryData(F, n.previous),
          P.invalidateQueries({ queryKey: F, refetchType: `none` }));
      }),
      (r[29] = i),
      (r[30] = D),
      (r[31] = u),
      (r[32] = P),
      (r[33] = F),
      (r[34] = T),
      (r[35] = O),
      (r[36] = W))
    : (W = r[36]);
  let ge;
  r[37] === f ? (ge = r[38]) : ((ge = () => f?.(!1)), (r[37] = f), (r[38] = ge));
  let _e;
  r[39] !== U || r[40] !== he || r[41] !== W || r[42] !== ge
    ? ((_e = { mutationFn: U, onMutate: he, onError: W, onSettled: ge }),
      (r[39] = U),
      (r[40] = he),
      (r[41] = W),
      (r[42] = ge),
      (r[43] = _e))
    : (_e = r[43]);
  let { mutateAsync: G, isPending: K, isError: q } = ce(_e),
    J;
  r[44] === G
    ? (J = r[45])
    : ((J = (e) => {
        G(e).catch(et);
      }),
      (r[44] = G),
      (r[45] = J));
  let Y = J,
    xe;
  r[46] !== j || r[47] !== w || r[48] !== A
    ? ((xe = () => {
        j ? oe(void 0) : A.length ? ie(A.slice(0, -1)) : w();
      }),
      (r[46] = j),
      (r[47] = w),
      (r[48] = A),
      (r[49] = xe))
    : (xe = r[49]);
  let Se = xe,
    X = A.length === 0 && j == null,
    Ce = j ? st.Fragment : t,
    we;
  r[50] !== Se || r[51] !== K || r[52] !== X || r[53] !== ne
    ? ((we = (ne || !X) && (0, $.jsx)(ve, { onClick: Se, disabled: K })),
      (r[50] = Se),
      (r[51] = K),
      (r[52] = X),
      (r[53] = ne),
      (r[54] = we))
    : (we = r[54]);
  let Z = E ? `max-w-3xl` : void 0,
    Te = X && p,
    Ee;
  r[55] !== H || r[56] !== X || r[57] !== x
    ? ((Ee =
        X &&
        H &&
        (0, $.jsx)(`p`, {
          className: `text-sm text-secondary select-none`,
          children:
            x ??
            (0, $.jsx)(M, {
              id: `amphora.memberSettings.childInformationalBanner`,
              defaultMessage: `Your parent or guardian can adjust these settings to help guide how you use ChatGPT and Sora.`,
              description: `Informational banner shown when a child is viewing their own settings`,
            }),
        })),
      (r[55] = H),
      (r[56] = X),
      (r[57] = x),
      (r[58] = Ee))
    : (Ee = r[58]);
  let De;
  r[59] !== j || r[60] !== V
    ? ((De =
        !j &&
        (V?.heading || V?.description) &&
        (0, $.jsx)(me.Header, {
          title: V.heading,
          subtitle: (0, $.jsx)(rt, { description: V.description, learnMore: V.description_learn_more }),
        })),
      (r[59] = j),
      (r[60] = V),
      (r[61] = De))
    : (De = r[61]);
  let Oe;
  r[62] !== Ce ||
  r[63] !== i ||
  r[64] !== y ||
  r[65] !== j ||
  r[66] !== a ||
  r[67] !== K ||
  r[68] !== H ||
  r[69] !== o ||
  r[70] !== G ||
  r[71] !== V?.sections ||
  r[72] !== A ||
  r[73] !== T ||
  r[74] !== Y
    ? ((Oe = V?.sections.map((e) => {
        let t = j ? e.items.filter((e) => e.id === j) : e.items;
        return t.length
          ? (0, $.jsxs)(
              me,
              {
                children: [
                  e.label && !j && (0, $.jsx)(me.Header, { title: e.label }),
                  (0, $.jsx)(me.Content, {
                    children: (0, $.jsx)(Ce, {
                      children: t.map((e) => {
                        if (e.type === `navigation`)
                          return (0, $.jsx)(
                            te,
                            {
                              label: e.label,
                              description: e.description,
                              trailing: (0, $.jsx)(s, {}),
                              onClick: () => ie([...A, e.target_page_id]),
                            },
                            e.id,
                          );
                        if (e.type === `multi_select`)
                          return (0, $.jsx)(
                            it,
                            {
                              item: e,
                              settings: y.settings,
                              disabled: K || T || (H && Ve(y.settings, [e.setting])),
                              onChange: (t) => Y({ patches: [{ feature: e.setting, value: t }] }),
                            },
                            e.id,
                          );
                        if (
                          !(`kind` in e) ||
                          (H && e.settings?.includes(`3VyEPC5dTP_model_instructions_enabled`))
                        )
                          return null;
                        if (e.toggle_type === `blackout`)
                          return (0, $.jsx)(
                            He,
                            {
                              item: e,
                              description: (0, $.jsx)(rt, {
                                description: e.description,
                                learnMore: e.learn_more,
                              }),
                              settings: y.settings,
                              isSelf: H,
                              pending: K || T,
                              editing: j === e.id,
                              onEditingChange: (t) => oe(t ? e.id : void 0),
                              onSave: (e) => G({ patches: [e] }),
                            },
                            e.id,
                          );
                        let t = e.kind === `setting` ? e.settings : [e.permission].filter($e),
                          n = K || T || !t?.length || (H && Ve(y.settings, t)),
                          r =
                            e.kind === `setting`
                              ? (t?.some((e) => y.settings[e] === !0) ?? !1)
                              : e.permission != null && y.permissions.includes(e.permission);
                        return (0, $.jsx)(
                          ae,
                          {
                            label: e.label,
                            description: (0, $.jsx)(rt, {
                              description: e.description,
                              learnMore: e.learn_more,
                            }),
                            control: (t) =>
                              (0, $.jsx)(re, {
                                ...t,
                                disabled: n,
                                checked: r,
                                onChange: (t) => {
                                  if (!n) {
                                    if (e.kind === `setting`)
                                      Y({
                                        patches: (e.settings ?? [])
                                          .filter((e) => (y.settings[e] === !0) !== t)
                                          .map((e) => ({ feature: e, value: t })),
                                      });
                                    else if (e.permission) {
                                      if (e.permission === `chatgpt.workspace.feature.health.access` && !t) {
                                        se({ account: i, familyId: a, memberId: o });
                                        return;
                                      }
                                      Y({ permission: e.permission, enabled: t });
                                    }
                                  }
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
      (r[62] = Ce),
      (r[63] = i),
      (r[64] = y),
      (r[65] = j),
      (r[66] = a),
      (r[67] = K),
      (r[68] = H),
      (r[69] = o),
      (r[70] = G),
      (r[71] = V?.sections),
      (r[72] = A),
      (r[73] = T),
      (r[74] = Y),
      (r[75] = Oe))
    : (Oe = r[75]);
  let ke;
  r[76] !== u || r[77] !== y || r[78] !== K || r[79] !== H || r[80] !== T || r[81] !== Y || r[82] !== le
    ? ((ke =
        le &&
        (0, $.jsx)(ye, {
          title: (0, $.jsx)(M, {
            id: `amphora.memberSettings.disableHealth.title`,
            defaultMessage: `Turn off Health?`,
            description: `Title of the confirmation modal shown when a parent or teen turns off the teen’s Health access in parental controls. Health is the ChatGPT feature name. Keep this question short.`,
          }),
          onClose: () => se(void 0),
          onSubmit: () => {
            (se(void 0),
              !(K || T || !u()) && Y({ permission: `chatgpt.workspace.feature.health.access`, enabled: !1 }));
          },
          confirmDisabled: K || T || (H && Ve(y.settings, [`chatgpt.workspace.feature.health.access`])),
          confirmLabel: (0, $.jsx)(M, {
            id: `amphora.memberSettings.disableHealth.confirm`,
            defaultMessage: `Turn off Health`,
            description: `Destructive confirmation button in the parental controls modal for a parent or teen disabling the teen’s Health access. Health is the ChatGPT feature name. This action disconnects health data sources and deletes synced data; the other button cancels. Keep the label short.`,
          }),
          children: (0, $.jsx)(l, {
            children: (0, $.jsx)(M, {
              id: `amphora.memberSettings.disableHealth.description`,
              defaultMessage: `Turning this off will disconnect all connected health data sources and delete synced health data. Existing chats won’t be deleted.`,
              description: `Warning in the parental controls confirmation modal before a parent or teen disables the teen’s Health access. Turning it off disconnects linked health sources and deletes data synced to ChatGPT, not the original data at its source. Existing chats remain. This is a complete plain-text message with no placeholders.`,
            }),
          }),
        })),
      (r[76] = u),
      (r[77] = y),
      (r[78] = K),
      (r[79] = H),
      (r[80] = T),
      (r[81] = Y),
      (r[82] = le),
      (r[83] = ke))
    : (ke = r[83]);
  let Ae;
  r[84] !== b || r[85] !== q
    ? ((Ae = (q || b) && (0, $.jsx)(be, {})), (r[84] = b), (r[85] = q), (r[86] = Ae))
    : (Ae = r[86]);
  let je;
  r[87] !== m || r[88] !== K || r[89] !== X
    ? ((je = X && m?.(K)), (r[87] = m), (r[88] = K), (r[89] = X), (r[90] = je))
    : (je = r[90]);
  let Me;
  return (
    r[91] !== E ||
    r[92] !== we ||
    r[93] !== Z ||
    r[94] !== Te ||
    r[95] !== Ee ||
    r[96] !== De ||
    r[97] !== Oe ||
    r[98] !== ke ||
    r[99] !== Ae ||
    r[100] !== je
      ? ((Me = (0, $.jsxs)(ue, {
          backSlot: we,
          embedded: E,
          fullWidth: E,
          contentClassName: Z,
          children: [Te, Ee, De, Oe, ke, Ae, je],
        })),
        (r[91] = E),
        (r[92] = we),
        (r[93] = Z),
        (r[94] = Te),
        (r[95] = Ee),
        (r[96] = De),
        (r[97] = Oe),
        (r[98] = ke),
        (r[99] = Ae),
        (r[100] = je),
        (r[101] = Me))
      : (Me = r[101]),
    Me
  );
}
function $e(e) {
  return e != null;
}
function et() {}
function tt(e) {
  return [e.feature, e.value];
}
function nt(e) {
  let { feature: t } = e;
  return t;
}
function rt(e) {
  let t = (0, ot.c)(5),
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
            (0, $.jsx)(P, {
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
function it(e) {
  let t = (0, ot.c)(21),
    { item: n, settings: r, disabled: i, onChange: a } = e,
    o = ie(),
    s = r[n.setting],
    c = Array.isArray(s) ? s : n.default_value,
    l,
    u;
  if (t[0] !== o || t[1] !== n.default_value || t[2] !== n.options || t[3] !== c) {
    let e;
    t[6] === n.options
      ? (e = t[7])
      : ((e = (e) => n.options.some((t) => t.value === e)), (t[6] = n.options), (t[7] = e));
    let r = c.filter(e);
    ((l = r.length ? r : n.default_value.filter((e) => n.options.some((t) => t.value === e))),
      (u = o.formatList(n.options.filter((e) => l.includes(e.value)).map(at))),
      (t[0] = o),
      (t[1] = n.default_value),
      (t[2] = n.options),
      (t[3] = c),
      (t[4] = l),
      (t[5] = u));
  } else ((l = t[4]), (u = t[5]));
  let d = u,
    f;
  t[8] !== n.description || t[9] !== n.learn_more
    ? ((f = (0, $.jsx)(rt, { description: n.description, learnMore: n.learn_more })),
      (t[8] = n.description),
      (t[9] = n.learn_more),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== i || t[12] !== n.options || t[13] !== a || t[14] !== l || t[15] !== d
    ? ((p = (e) =>
        (0, $.jsx)(j, {
          triggerButton: (0, $.jsx)(x, { ...e, color: `secondary`, disabled: i, children: d }),
          children: n.options.map((e) =>
            (0, $.jsx)(
              D,
              {
                checked: l.includes(e.value),
                disabled: i || (l.includes(e.value) && l.length === 1),
                onCheckedChange: (t) => a(t ? [...l, e.value] : l.filter((t) => t !== e.value)),
                SubText: e.description ? (0, $.jsx)($.Fragment, { children: e.description }) : void 0,
                children: e.label,
              },
              e.value,
            ),
          ),
        })),
      (t[11] = i),
      (t[12] = n.options),
      (t[13] = a),
      (t[14] = l),
      (t[15] = d),
      (t[16] = p))
    : (p = t[16]);
  let m;
  return (
    t[17] !== n.label || t[18] !== f || t[19] !== p
      ? ((m = (0, $.jsx)(ae, { label: n.label, description: f, control: p })),
        (t[17] = n.label),
        (t[18] = f),
        (t[19] = p),
        (t[20] = m))
      : (m = t[20]),
    m
  );
}
function at(e) {
  return e.label;
}
var ot, st, $;
function ct() {
  return (ct = e(() => {
    ((ot = h()),
      se(),
      O(),
      d(),
      w(),
      (st = a()),
      b(),
      z(),
      C(),
      c(),
      T(),
      pe(),
      v(),
      oe(),
      r(),
      L(),
      I(),
      de(),
      N(),
      E(),
      H(),
      xe(),
      U(),
      qe(),
      G(),
      ($ = u()));
  }))();
}
export { xe as a, q as i, Ze as n, ct as r, Ye as t };
//# sourceMappingURL=member-settings-1983d3c7f7ef.js.map
