import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  $St as r,
  $st as i,
  FBt as a,
  HO as o,
  IO as s,
  JO as c,
  KO as l,
  LNt as u,
  LO as d,
  Lst as f,
  MNt as p,
  Mst as m,
  NNt as h,
  NSt as g,
  OT as _,
  PBt as v,
  Qst as y,
  RO as b,
  Rst as ee,
  USt as x,
  Vrt as S,
  WO as C,
  XOt as w,
  Y3 as T,
  YOt as E,
  Yst as D,
  Z3 as O,
  ZSt as k,
  _vt as A,
  ast as j,
  bst as M,
  bvt as N,
  ck as P,
  dvt as F,
  e6 as I,
  ew as L,
  ist as R,
  jst as z,
  kT as B,
  nCt as te,
  okt as ne,
  qO as re,
  qrt as V,
  rk as H,
  rvt as U,
  sct as W,
  sw as G,
  tit as K,
  tk as ie,
  tkt as q,
  uSt as ae,
  uvt as oe,
  uw as se,
  vst as ce,
  xst as le,
  xvt as ue,
  yst as de,
  yvt as fe,
  zO as J,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  FBr as pe,
  FF as me,
  HBr as he,
  IBr as ge,
  KBr as _e,
  LF as ve,
  MSt as ye,
  NSt as be,
  Ovr as xe,
  QF as Se,
  RF as Ce,
  cA as we,
  cnr as Te,
  eI as Ee,
  eer as De,
  iat as Oe,
  jvr as ke,
  lnr as Ae,
  oat as je,
  sA as Me,
  snr as Ne,
} from "./app-initial-ad16eaadf81f.js";
import { n as Pe, t as Fe } from "./settings-rows-ddb669c33599.js";
import { t as Ie } from "./format-bytes-9f828acaa58f.js";
function Le(e, t) {
  return ze(e.entries, e.cutoff, e.archivedOnly).flatMap((e) => {
    let n = 0;
    for (let r of [e.thread, ...e.descendants]) {
      let e = t.threadBytes[r.id];
      if (e == null) return [];
      n += e;
    }
    return [{ ...e, bytes: n }];
  });
}
async function Re(e, t, n, r) {
  let i = (
    await Promise.all(
      [!1, !0].map(async (t) => {
        let n = [],
          r = null;
        do {
          let i = await e.sendRequest(`thread/list`, {
            archived: t,
            cursor: r,
            limit: 100,
            modelProviders: [],
            sourceKinds: U,
            useStateDbOnly: !0,
          });
          (n.push(...i.data.map((e) => ({ thread: e, archived: t }))), (r = i.nextCursor));
        } while (r != null);
        return n;
      }),
    )
  ).flat();
  if (new Set(i.map(({ thread: e }) => e.id)).size !== i.length)
    throw Error(`Chat inventory changed during pagination`);
  let a = new Set(i.map(({ thread: e }) => e.id)),
    o = [...r].filter((e) => !a.has(e));
  return (
    await Promise.all(
      Array.from({ length: Math.min(8, o.length) }, async () => {
        for (; o.length > 0;) {
          let t = o.pop();
          if (t == null) return;
          let { thread: n } = await e.sendRequest(`thread/read`, { threadId: t, includeTurns: !1 });
          if (n.id !== t) throw Error(`Chat inventory changed during recovery`);
          i.push({ thread: n, archived: !1 });
        }
      }),
    ),
    { entries: i, cutoff: t, archivedOnly: n }
  );
}
function ze(e, t, n) {
  let r = new Map();
  for (let { thread: t } of e) {
    let e = xe(t);
    if (e != null) {
      let n = r.get(e) ?? [];
      (n.push(t), r.set(e, n));
    }
  }
  let i = [];
  for (let { thread: a, archived: o } of e) {
    if (
      (n && !o) ||
      xe(a) != null ||
      typeof a.source != `string` ||
      a.source === `unknown` ||
      !F(a.threadSource) ||
      a.threadSource === `cloud_threads.create`
    )
      continue;
    let e = [],
      s = [...(r.get(a.id) ?? [])],
      c = new Set([a.id]),
      l = !0;
    for (let t of s) {
      if (c.has(t.id)) {
        l = !1;
        break;
      }
      (c.add(t.id), e.push(t), s.push(...(r.get(t.id) ?? [])));
    }
    l &&
      [a, ...e].every(
        (e) =>
          !e.ephemeral &&
          e.status.type !== `active` &&
          Number.isFinite(e.updatedAt) &&
          e.updatedAt > 0 &&
          e.updatedAt < t,
      ) &&
      i.push({ thread: a, descendants: e });
  }
  return i.sort((e, t) => e.thread.updatedAt - t.thread.updatedAt);
}
function Be(e) {
  return e != null && ue(e) && fe(e, `0.143.0-alpha.16`) >= 0;
}
async function Ve(e, t, n, r) {
  if (!Be(r)) throw Error(`Chat cleanup requires descendant discovery support`);
  let i = await Re(
      e,
      t.cutoff,
      t.archivedOnly,
      t.entries.map(({ thread: e }) => e.id),
    ),
    a = new Map(ze(i.entries, i.cutoff, i.archivedOnly).map((e) => [e.thread.id, e])),
    o = { deleted: 0, skipped: 0, failed: 0 };
  for (let r of ze(t.entries, t.cutoff, t.archivedOnly)) {
    if (!n.has(r.thread.id)) continue;
    let t = a.get(r.thread.id),
      i = new Map([r.thread, ...r.descendants].map((e) => [e.id, e.updatedAt]));
    if (
      t == null ||
      t.descendants.length !== r.descendants.length ||
      [t.thread, ...t.descendants].some((e) => i.get(e.id) !== e.updatedAt)
    ) {
      o.skipped++;
      continue;
    }
    try {
      let n = await e.discoverSubagentDescendantSnapshot(ae(r.thread.id), { reconcile: !1 });
      if (
        !n.isComplete ||
        n.descendantThreads.some((e) => i.get(e.id) !== e.updatedAt || e.status.type === `active`)
      ) {
        o.skipped++;
        continue;
      }
      let a = !1;
      for (let n of [t.thread, ...t.descendants]) {
        let t = await e.sendRequest(`thread/read`, { threadId: n.id, includeTurns: !1 });
        if (t.thread.id !== n.id || t.thread.updatedAt !== n.updatedAt || t.thread.status.type === `active`) {
          a = !0;
          break;
        }
      }
      if (a) {
        o.skipped++;
        continue;
      }
      (await e.sendRequest(`thread/delete`, { threadId: r.thread.id }), o.deleted++);
    } catch {
      o.failed++;
    }
  }
  return o;
}
function He() {
  return (He = e(() => {
    (A(), N(), oe(), ke());
  }))();
}
function Ue(e) {
  let t = (0, We.c)(15),
    { days: r, archivedOnly: i, disabled: a, onChange: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(q, {
        id: `settings.storage.cleanup.age`,
        defaultMessage: `Last updated`,
        description: `Age cutoff for old chat cleanup`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] !== i || t[2] !== r || t[3] !== a || t[4] !== o
    ? ((c = (0, Y.jsx)(G, {
        size: `compact`,
        label: s,
        control: (e) =>
          (0, Y.jsx)(ie, {
            disabled: a,
            triggerButton: (0, Y.jsx)(me, {
              ...e,
              disabled: a,
              children: (0, Y.jsx)(q, {
                id: `settings.storage.cleanup.days`,
                defaultMessage: `Over {days} days ago`,
                description: `Only include chats last updated more than this number of days ago`,
                values: { days: r },
              }),
            }),
            children: (0, Y.jsx)(H.RadioGroup, {
              value: String(r),
              children: [30, 90, 180, 365].map((e) =>
                (0, Y.jsx)(
                  H.RadioItem,
                  {
                    value: String(e),
                    onSelect: () => o(e, i),
                    children: (0, Y.jsx)(q, {
                      id: `settings.storage.cleanup.days`,
                      defaultMessage: `Over {days} days ago`,
                      description: `Only include chats last updated more than this number of days ago`,
                      values: { days: e },
                    }),
                  },
                  e,
                ),
              ),
            }),
          }),
      })),
      (t[1] = i),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Y.jsx)(q, {
        id: `settings.storage.cleanup.include`,
        defaultMessage: `Include`,
        description: `Which chats to include in cleanup`,
      })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== i || t[8] !== r || t[9] !== a || t[10] !== o
    ? ((u = (0, Y.jsx)(G, {
        size: `compact`,
        label: l,
        control: (e) =>
          (0, Y.jsx)(ie, {
            disabled: a,
            triggerButton: (0, Y.jsx)(me, {
              ...e,
              disabled: a,
              children: i
                ? (0, Y.jsx)(q, {
                    id: `settings.storage.cleanup.archived`,
                    defaultMessage: `Archived chats`,
                    description: `Include only archived chats in cleanup`,
                  })
                : (0, Y.jsx)(q, {
                    id: `settings.storage.cleanup.all`,
                    defaultMessage: `All chats`,
                    description: `Include archived and unarchived chats in cleanup`,
                  }),
            }),
            children: (0, Y.jsxs)(H.RadioGroup, {
              value: i ? `archived` : `all`,
              children: [
                (0, Y.jsx)(H.RadioItem, {
                  value: `archived`,
                  onSelect: () => o(r, !0),
                  children: (0, Y.jsx)(q, {
                    id: `settings.storage.cleanup.archived`,
                    defaultMessage: `Archived chats`,
                    description: `Include only archived chats in cleanup`,
                  }),
                }),
                (0, Y.jsx)(H.RadioItem, {
                  value: `all`,
                  onSelect: () => o(r, !1),
                  children: (0, Y.jsx)(q, {
                    id: `settings.storage.cleanup.all`,
                    defaultMessage: `All chats`,
                    description: `Include archived and unarchived chats in cleanup`,
                  }),
                }),
              ],
            }),
          }),
      })),
      (t[7] = i),
      (t[8] = r),
      (t[9] = a),
      (t[10] = o),
      (t[11] = u))
    : (u = t[11]);
  let d;
  return (
    t[12] !== c || t[13] !== u
      ? ((d = (0, Y.jsxs)(n, { children: [c, u] })), (t[12] = c), (t[13] = u), (t[14] = d))
      : (d = t[14]),
    d
  );
}
var We, Y;
function Ge() {
  return (Ge = e(() => {
    ((We = v()), w(), P(), se(), Ce(), L(), (Y = u()));
  }))();
}
function Ke(e) {
  let t = (0, Ze.c)(67),
    { review: r, storage: i, onClose: a, onConfirm: o } = e,
    c = ne(),
    u;
  t[0] === r ? (u = t[1]) : ((u = { ...r, days: 90 }), (t[0] = r), (t[1] = u));
  let [f, p] = (0, Qe.useState)(u),
    m;
  t[2] !== f || t[3] !== i ? ((m = Le(f, i)), (t[2] = f), (t[3] = i), (t[4] = m)) : (m = t[4]);
  let h = m,
    g;
  t[5] === h ? (g = t[6]) : ((g = () => new Set(h.map(Ye))), (t[5] = h), (t[6] = g));
  let [v, y] = (0, Qe.useState)(g),
    ee = (0, Qe.useRef)(!1),
    [x, S] = (0, Qe.useState)(50),
    [w, E] = (0, Qe.useState)(!1),
    D;
  if (t[7] !== h || t[8] !== v) {
    let e;
    (t[10] === v
      ? (e = t[11])
      : ((e = (e, t) => e + (v.has(t.thread.id) ? t.descendants.length : 0)), (t[10] = v), (t[11] = e)),
      (D = h.reduce(e, 0)),
      (t[7] = h),
      (t[8] = v),
      (t[9] = D));
  } else D = t[9];
  let O = D;
  if (w) {
    let e;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = () => E(!1)), (t[12] = e)) : (e = t[12]);
    let n;
    t[13] !== o || t[14] !== f || t[15] !== v
      ? ((n = () => {
          ee.current || ((ee.current = !0), o(f, v));
        }),
        (t[13] = o),
        (t[14] = f),
        (t[15] = v),
        (t[16] = n))
      : (n = t[16]);
    let r;
    return (
      t[17] !== v.size || t[18] !== n
        ? ((r = (0, X.jsx)(Xe, { count: v.size, onCancel: e, onConfirm: n })),
          (t[17] = v.size),
          (t[18] = n),
          (t[19] = r))
        : (r = t[19]),
      r
    );
  }
  let k;
  t[20] === a
    ? (k = t[21])
    : ((k = (e) => {
        !e && !ee.current && a();
      }),
      (t[20] = a),
      (t[21] = k));
  let A;
  t[22] === v.size
    ? (A = t[23])
    : ((A = (e) => {
        (e.preventDefault(), !ee.current && v.size > 0 && E(!0));
      }),
      (t[22] = v.size),
      (t[23] = A));
  let j;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, X.jsx)(re, {
        children: (0, X.jsx)(q, {
          id: `settings.storage.cleanup.dialogTitle`,
          defaultMessage: `Review old chats`,
          description: `Title of the old chat deletion review`,
        }),
      })),
      (t[24] = j))
    : (j = t[24]);
  let M;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, X.jsx)(J, {
        children: (0, X.jsx)(b, {
          title: j,
          subtitle: (0, X.jsx)(l, {
            children: (0, X.jsx)(q, {
              id: `settings.storage.cleanup.warningWithSize`,
              defaultMessage: `Sizes include subagents. Deleting a chat and its subagents is permanent.`,
              description: `Warning shown before confirming irreversible chat cleanup`,
            }),
          }),
        }),
      })),
      (t[25] = M))
    : (M = t[25]);
  let N;
  t[26] !== f || t[27] !== i
    ? ((N = (e, t) => {
        let n = Date.now() / 1e3 - e * 86400,
          r = { ...f, days: e, cutoff: n, archivedOnly: t };
        (p(r), y(new Set(Le(r, i).map(Je))), S(50));
      }),
      (t[26] = f),
      (t[27] = i),
      (t[28] = N))
    : (N = t[28]);
  let P;
  t[29] !== f.archivedOnly || t[30] !== f.days || t[31] !== N
    ? ((P = (0, X.jsx)(J, {
        children: (0, X.jsx)(Ue, { days: f.days, archivedOnly: f.archivedOnly, disabled: !1, onChange: N }),
      })),
      (t[29] = f.archivedOnly),
      (t[30] = f.days),
      (t[31] = N),
      (t[32] = P))
    : (P = t[32]);
  let F;
  t[33] !== h || t[34] !== c || t[35] !== v || t[36] !== x
    ? ((F =
        h.length === 0
          ? (0, X.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, X.jsx)(q, {
                id: `settings.storage.cleanup.empty`,
                defaultMessage: `No chats match these filters`,
                description: `No old chats are eligible for deletion`,
              }),
            })
          : (0, X.jsx)(n, {
              className: `min-h-0`,
              dividers: !1,
              children: (0, X.jsx)(`div`, {
                className: `min-h-0 overflow-y-auto`,
                children: (0, X.jsx)(Fe, {
                  children: h.slice(0, x).map((e) => {
                    let { thread: t, bytes: n } = e;
                    return (0, X.jsx)(
                      G,
                      {
                        size: `compact`,
                        controlSizing: `content`,
                        label: (0, X.jsx)(`span`, {
                          className: `line-clamp-2`,
                          children:
                            Ne({
                              id: ae(t.id),
                              title: t.name,
                              fallbackSearchTitle: Ae(t.preview),
                              turns: null,
                            }) ||
                            (0, X.jsx)(q, {
                              id: `settings.storage.cleanup.untitled`,
                              defaultMessage: `Untitled chat`,
                              description: `Fallback title for a chat without a title`,
                            }),
                        }),
                        control: (e) =>
                          (0, X.jsxs)(`div`, {
                            className: `relative flex items-center gap-3`,
                            children: [
                              (0, X.jsx)(`span`, {
                                className: `text-sm whitespace-nowrap text-secondary tabular-nums`,
                                children: Ie(n, c),
                              }),
                              (0, X.jsx)(_, {
                                ...e,
                                checked: v.has(t.id),
                                onCheckedChange: (e) =>
                                  y((n) => {
                                    let r = new Set(n);
                                    return (e ? r.add(t.id) : r.delete(t.id), r);
                                  }),
                              }),
                            ],
                          }),
                      },
                      t.id,
                    );
                  }),
                }),
              }),
            })),
      (t[33] = h),
      (t[34] = c),
      (t[35] = v),
      (t[36] = x),
      (t[37] = F))
    : (F = t[37]);
  let I;
  t[38] !== h.length || t[39] !== x
    ? ((I =
        x < h.length
          ? (0, X.jsx)(T, {
              className: `shrink-0`,
              color: `ghost`,
              onClick: () => S(qe),
              children: (0, X.jsx)(q, {
                id: `settings.storage.cleanup.showMore`,
                defaultMessage: `Show more chats`,
                description: `Show the next page of chats in the cleanup review`,
              }),
            })
          : null),
      (t[38] = h.length),
      (t[39] = x),
      (t[40] = I))
    : (I = t[40]);
  let L;
  t[41] !== F || t[42] !== I
    ? ((L = (0, X.jsxs)(J, { className: `min-h-0`, children: [F, I] })),
      (t[41] = F),
      (t[42] = I),
      (t[43] = L))
    : (L = t[43]);
  let R;
  t[44] !== v.size || t[45] !== O
    ? ((R = (0, X.jsx)(`p`, {
        className: `text-sm text-secondary`,
        "aria-live": `polite`,
        children: (0, X.jsx)(q, {
          id: `settings.storage.cleanup.selection`,
          defaultMessage: `Selected chats: {count} · Subagents: {subagents}`,
          description: `Number of selected chats and all their descendants`,
          values: { count: v.size, subagents: O },
        }),
      })),
      (t[44] = v.size),
      (t[45] = O),
      (t[46] = R))
    : (R = t[46]);
  let z;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, X.jsx)(q, {
        id: `settings.storage.cleanup.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel cleanup without deleting chats`,
      })),
      (t[47] = z))
    : (z = t[47]);
  let B;
  t[48] === a
    ? (B = t[49])
    : ((B = (0, X.jsx)(T, { autoFocus: !0, color: `outline`, onClick: a, children: z })),
      (t[48] = a),
      (t[49] = B));
  let te = v.size === 0,
    V;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, X.jsx)(q, {
        id: `settings.storage.cleanup.delete`,
        defaultMessage: `Delete selected`,
        description: `Permanently delete the reviewed selection and its subagents`,
      })),
      (t[50] = V))
    : (V = t[50]);
  let H;
  t[51] === te
    ? (H = t[52])
    : ((H = (0, X.jsx)(T, { color: `danger`, type: `submit`, disabled: te, children: V })),
      (t[51] = te),
      (t[52] = H));
  let U;
  t[53] !== B || t[54] !== H
    ? ((U = (0, X.jsxs)(d, { children: [B, H] })), (t[53] = B), (t[54] = H), (t[55] = U))
    : (U = t[55]);
  let W;
  t[56] !== R || t[57] !== U
    ? ((W = (0, X.jsxs)(J, { children: [R, U] })), (t[56] = R), (t[57] = U), (t[58] = W))
    : (W = t[58]);
  let K;
  t[59] !== P || t[60] !== L || t[61] !== W || t[62] !== A
    ? ((K = (0, X.jsxs)(s, {
        as: `form`,
        size: `scrollable`,
        className: `select-none`,
        onSubmit: A,
        children: [M, P, L, W],
      })),
      (t[59] = P),
      (t[60] = L),
      (t[61] = W),
      (t[62] = A),
      (t[63] = K))
    : (K = t[63]);
  let ie;
  return (
    t[64] !== K || t[65] !== k
      ? ((ie = (0, X.jsx)(C, { open: !0, onOpenChange: k, children: K })),
        (t[64] = K),
        (t[65] = k),
        (t[66] = ie))
      : (ie = t[66]),
    ie
  );
}
function qe(e) {
  return e + 50;
}
function Je(e) {
  let { thread: t } = e;
  return t.id;
}
function Ye(e) {
  let { thread: t } = e;
  return t.id;
}
function Xe(e) {
  let t = (0, Ze.c)(20),
    { count: n, onCancel: r, onConfirm: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = (e) => {
        e || r();
      }),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o = (e) => {
        (e.preventDefault(), i());
      }),
      (t[2] = i),
      (t[3] = o));
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(J, {
        children: (0, X.jsx)(b, {
          title: (0, X.jsx)(re, {
            children: (0, X.jsx)(q, {
              id: `settings.storage.cleanup.confirmTitle`,
              defaultMessage: `Delete selected chats?`,
              description: `Title of the final confirmation before permanently deleting selected local chats`,
            }),
          }),
        }),
      })),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === n
    ? (l = t[6])
    : ((l = (0, X.jsx)(J, {
        className: `text-codex-description`,
        children: (0, X.jsx)(`p`, {
          children: (0, X.jsx)(q, {
            id: `settings.storage.cleanup.confirmBody`,
            defaultMessage: `This permanently deletes {count, plural, one {# chat} other {# chats}} and their subagents. This cannot be undone.`,
            description: `Final deletion warning; count is the number of selected parent chats, excluding their subagents`,
            values: { count: n },
          }),
        }),
      })),
      (t[5] = n),
      (t[6] = l));
  let u;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(q, {
        id: `settings.storage.cleanup.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel cleanup without deleting chats`,
      })),
      (t[7] = u))
    : (u = t[7]);
  let f;
  t[8] === r
    ? (f = t[9])
    : ((f = (0, X.jsx)(T, { autoFocus: !0, color: `ghost`, onClick: r, children: u })),
      (t[8] = r),
      (t[9] = f));
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, X.jsx)(T, {
        color: `danger`,
        type: `submit`,
        children: (0, X.jsx)(q, {
          id: `settings.storage.cleanup.confirmDelete`,
          defaultMessage: `Delete`,
          description: `Confirm permanent deletion of the selected chats and their subagents`,
        }),
      })),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === f
    ? (m = t[12])
    : ((m = (0, X.jsx)(J, { children: (0, X.jsxs)(d, { children: [f, p] }) })), (t[11] = f), (t[12] = m));
  let h;
  t[13] !== o || t[14] !== l || t[15] !== m
    ? ((h = (0, X.jsxs)(s, { as: `form`, onSubmit: o, children: [c, l, m] })),
      (t[13] = o),
      (t[14] = l),
      (t[15] = m),
      (t[16] = h))
    : (h = t[16]);
  let g;
  return (
    t[17] !== a || t[18] !== h
      ? ((g = (0, X.jsx)(C, { open: !0, showDialogClose: !1, onOpenChange: a, children: h })),
        (t[17] = a),
        (t[18] = h),
        (t[19] = g))
      : (g = t[19]),
    g
  );
}
var Ze, Qe, X;
function $e() {
  return ($e = e(() => {
    ((Ze = v()), W(), (Qe = a()), w(), O(), B(), c(), o(), Te(), se(), Pe(), L(), He(), Ge(), (X = u()));
  }))();
}
function et(e) {
  let i = (0, tt.c)(50),
    { hostId: a, storage: o, onStorageChanged: s } = e,
    c = r(y),
    l = te(he, a),
    u;
  i[0] === l ? (u = i[1]) : ((u = Be(l)), (i[0] = l), (i[1] = u));
  let d = u,
    f = ee(),
    [p, m] = (0, nt.useState)(null),
    h;
  i[2] === a ? (h = i[3]) : ((h = [`storage-chat-cleanup`, a]), (i[2] = a), (i[3] = h));
  let g = h,
    _;
  i[4] === g ? (_ = i[5]) : ((_ = { mutationKey: g }), (i[4] = g), (i[5] = _));
  let v = le(_) > 0,
    b = `storage-chat-cleanup-${a}`,
    x;
  i[6] !== a || i[7] !== c
    ? ((x = (e) => {
        let { review: t, selected: n } = e;
        return Ve(pe(c, a), t, n, c.get(he, a));
      }),
      (i[6] = a),
      (i[7] = c),
      (i[8] = x))
    : (x = i[8]);
  let S, C, w;
  i[9] !== c || i[10] !== b
    ? ((S = () => {
        c.get(V).info(
          (0, Z.jsx)(q, {
            id: `settings.storage.cleanup.deleting`,
            defaultMessage: `Deleting chats`,
            description: `Persistent loading toast while the selected local chats and their subagents are being deleted`,
          }),
          { id: b, duration: 0, hasCloseButton: !1, leading: (0, Z.jsx)(t, { className: `icon-xs` }) },
        );
      }),
      (C = (e) => {
        let t = (0, Z.jsx)(q, {
          id: `settings.storage.cleanup.result`,
          defaultMessage: `Chats deleted: {deleted}. Changed chats skipped: {skipped}. Incomplete deletions: {failed}.`,
          description: `Cleanup results counted by parent chats; changed chats are preserved`,
          values: { deleted: e.deleted, skipped: e.skipped, failed: e.failed },
        });
        e.failed > 0
          ? c.get(V).danger(t, { id: b, errorAnalytics: { toastId: `storage.cleanup.partialFailure` } })
          : c.get(V).success(t, { id: b });
      }),
      (w = () => {
        c.get(V).danger(
          (0, Z.jsx)(q, {
            id: `settings.storage.cleanup.recheckError`,
            defaultMessage: `Couldn't recheck the chats. Nothing was deleted. Try again.`,
            description: `Revalidation failed before deletion began`,
          }),
          { id: b, errorAnalytics: { toastId: `storage.cleanup.recheckError` } },
        );
      }),
      (i[9] = c),
      (i[10] = b),
      (i[11] = S),
      (i[12] = C),
      (i[13] = w))
    : ((S = i[11]), (C = i[12]), (w = i[13]));
  let E;
  i[14] !== a || i[15] !== s || i[16] !== f
    ? ((E = () => {
        (s(), f.invalidateQueries({ queryKey: [`archived-threads`, a] }));
      }),
      (i[14] = a),
      (i[15] = s),
      (i[16] = f),
      (i[17] = E))
    : (E = i[17]);
  let D;
  i[18] !== g || i[19] !== x || i[20] !== S || i[21] !== C || i[22] !== w || i[23] !== E
    ? ((D = { mutationKey: g, mutationFn: x, onMutate: S, onSuccess: C, onError: w, onSettled: E }),
      (i[18] = g),
      (i[19] = x),
      (i[20] = S),
      (i[21] = C),
      (i[22] = w),
      (i[23] = E),
      (i[24] = D))
    : (D = i[24]);
  let O = de(D),
    k;
  i[25] !== a || i[26] !== c
    ? ((k = {
        mutationFn: async (e) => ({
          review: await Re(pe(c, a), Date.now() / 1e3 - 7776e3, !0, Object.keys(e.threadBytes)),
          storage: e,
        }),
        onSuccess: m,
      }),
      (i[25] = a),
      (i[26] = c),
      (i[27] = k))
    : (k = i[27]);
  let { mutate: A, isPending: j, isError: M } = de(k),
    N;
  i[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Z.jsx)(q, {
        id: `settings.storage.cleanup.title`,
        defaultMessage: `Clean up old chats`,
        description: `Heading for manual cleanup of old local chats`,
      })),
      (i[28] = N))
    : (N = i[28]);
  let P;
  i[29] === d
    ? (P = i[30])
    : ((P = d
        ? (0, Z.jsx)(q, {
            id: `settings.storage.cleanup.description`,
            defaultMessage: `Review chats and their subagents before permanently deleting them`,
            description: `Explains the local chat cleanup review flow`,
          })
        : (0, Z.jsx)(q, {
            id: `settings.storage.cleanup.requiresUpdate`,
            defaultMessage: `Update ChatGPT on this device to clean up chats safely`,
            description: `Older app servers cannot verify all subagents before deleting a chat`,
          })),
      (i[29] = d),
      (i[30] = P));
  let F;
  i[31] !== v || i[32] !== j || i[33] !== A || i[34] !== o || i[35] !== d
    ? ((F = (e) =>
        (0, Z.jsx)(T, {
          ...e,
          color: `secondary`,
          size: `toolbar`,
          loading: j,
          disabled: !d || j || v || o == null,
          onClick: () => {
            d && !v && o != null && A(o);
          },
          children: (0, Z.jsx)(q, {
            id: `settings.storage.cleanup.review`,
            defaultMessage: `Review`,
            description: `Open a review of old chats before deletion`,
          }),
        })),
      (i[31] = v),
      (i[32] = j),
      (i[33] = A),
      (i[34] = o),
      (i[35] = d),
      (i[36] = F))
    : (F = i[36]);
  let I;
  i[37] !== P || i[38] !== F
    ? ((I = (0, Z.jsx)(n, { children: (0, Z.jsx)(G, { label: N, description: P, control: F }) })),
      (i[37] = P),
      (i[38] = F),
      (i[39] = I))
    : (I = i[39]);
  let L;
  i[40] === M
    ? (L = i[41])
    : ((L = M
        ? (0, Z.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-secondary`,
            children: (0, Z.jsx)(q, {
              id: `settings.storage.cleanup.loadError`,
              defaultMessage: `Couldn't load all chats. Try reviewing again.`,
              description: `Cleanup cannot start without a complete inventory`,
            }),
          })
        : null),
      (i[40] = M),
      (i[41] = L));
  let R;
  i[42] !== O || i[43] !== v || i[44] !== p
    ? ((R =
        p == null
          ? null
          : (0, Z.jsx)(Ke, {
              review: p.review,
              storage: p.storage,
              onClose: () => m(null),
              onConfirm: (e, t) => {
                v || (m(null), O.mutate({ review: e, selected: t }));
              },
            })),
      (i[42] = O),
      (i[43] = v),
      (i[44] = p),
      (i[45] = R))
    : (R = i[45]);
  let z;
  return (
    i[46] !== I || i[47] !== L || i[48] !== R
      ? ((z = (0, Z.jsxs)(Z.Fragment, { children: [I, L, R] })),
        (i[46] = I),
        (i[47] = L),
        (i[48] = R),
        (i[49] = z))
      : (z = i[49]),
    z
  );
}
var tt, nt, Z;
function rt() {
  return (rt = e(() => {
    ((tt = v()),
      M(),
      ce(),
      f(),
      k(),
      (nt = a()),
      w(),
      ge(),
      De(),
      O(),
      I(),
      S(),
      i(),
      se(),
      L(),
      He(),
      $e(),
      (Z = u()));
  }))();
}
function it(e) {
  let t = (0, st.c)(72),
    { service: n, hostId: r } = e,
    i = ne(),
    a = (0, ct.useId)(),
    o = ee(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = [`device-storage`]), (t[0] = s)) : (s = t[0]);
  let c;
  t[1] === n
    ? (c = t[2])
    : ((c = {
        queryKey: s,
        queryFn: (e) => {
          let { signal: t } = e;
          return K(n.read(), t);
        },
        staleTime: 6e4,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchInterval: ot,
      }),
      (t[1] = n),
      (t[2] = c));
  let { data: l, isPending: u, isError: d } = m(c),
    f;
  t[3] === o
    ? (f = t[4])
    : ((f = () => o.cancelQueries({ queryKey: [`device-storage`] })), (t[3] = o), (t[4] = f));
  let h;
  t[5] === n ? (h = t[6]) : ((h = () => K(n.refresh())), (t[5] = n), (t[6] = h));
  let g;
  t[7] === o ? (g = t[8]) : ((g = (e) => o.setQueryData([`device-storage`], e)), (t[7] = o), (t[8] = g));
  let _;
  t[9] !== f || t[10] !== h || t[11] !== g
    ? ((_ = { onMutate: f, mutationFn: h, onSuccess: g }), (t[9] = f), (t[10] = h), (t[11] = g), (t[12] = _))
    : (_ = t[12]);
  let { mutate: v, isPending: y, isError: b } = de(_),
    x = l?.usage,
    S,
    C,
    w,
    E,
    D,
    O,
    k;
  if (
    t[13] !== l ||
    t[14] !== i ||
    t[15] !== d ||
    t[16] !== u ||
    t[17] !== y ||
    t[18] !== v ||
    t[19] !== b ||
    t[20] !== a ||
    t[21] !== x
  ) {
    let e = x?.categories.flatMap((e) => {
        let { category: t, bytes: n } = e;
        return t === `unclassified`
          ? []
          : [{ category: t, bytes: t === `other` ? n + (x.categories.find(at)?.bytes ?? 0) : n }];
      }),
      n = u || y || l?.status === `scanning`;
    ((S =
      l != null &&
      [`threads`, `subagents`, `archived`].every((e) => l.completedCategories.some((t) => t === e))),
      (E = `flex flex-col gap-10`),
      (D = `flex flex-col gap-3`));
    let r;
    t[29] !== l?.measuredAt || t[30] !== l?.status || t[31] !== i || t[32] !== x
      ? ((r =
          x == null
            ? (0, Q.jsx)(q, {
                id: `settings.storage.homeLabel`,
                defaultMessage: `App data folder`,
                description: `Label for the folder whose storage usage is broken down in the chart`,
              })
            : (0, Q.jsx)(Q.Fragment, {
                children:
                  l?.measuredAt == null && l?.status !== `ready`
                    ? (0, Q.jsx)(q, {
                        id: `settings.storage.measuredTotal`,
                        defaultMessage: `{size} measured so far`,
                        description: `Partial disk usage while the first storage scan is running`,
                        values: { size: Ie(x.totalBytes, i) },
                      })
                    : (0, Q.jsx)(q, {
                        id: `settings.storage.total`,
                        defaultMessage: `{size} used by ChatGPT`,
                        description: `Total size of files in the app data folder`,
                        values: { size: Ie(x.totalBytes, i) },
                      }),
              })),
        (t[29] = l?.measuredAt),
        (t[30] = l?.status),
        (t[31] = i),
        (t[32] = x),
        (t[33] = r))
      : (r = t[33]);
    let o;
    t[34] !== a || t[35] !== r
      ? ((o = (0, Q.jsx)(`p`, { id: a, className: `text-sm font-semibold`, children: r })),
        (t[34] = a),
        (t[35] = r),
        (t[36] = o))
      : (o = t[36]);
    let s;
    t[37] === v ? (s = t[38]) : ((s = () => v()), (t[37] = v), (t[38] = s));
    let c;
    t[39] === n
      ? (c = t[40])
      : ((c = n
          ? (0, Q.jsx)(q, {
              id: `settings.storage.updating`,
              defaultMessage: `Updating…`,
              description: `Storage measurements are being refreshed in the background`,
            })
          : (0, Q.jsx)(q, {
              id: `settings.storage.refresh`,
              defaultMessage: `Refresh`,
              description: `Refresh device storage usage`,
            })),
        (t[39] = n),
        (t[40] = c));
    let f;
    (t[41] !== n || t[42] !== s || t[43] !== c
      ? ((f = (0, Q.jsx)(T, {
          color: `secondary`,
          size: `toolbar`,
          loading: n,
          disabled: n,
          onClick: s,
          children: c,
        })),
        (t[41] = n),
        (t[42] = s),
        (t[43] = c),
        (t[44] = f))
      : (f = t[44]),
      t[45] !== o || t[46] !== f
        ? ((O = (0, Q.jsxs)(`div`, {
            className: `flex flex-wrap items-center justify-between gap-2`,
            children: [o, f],
          })),
          (t[45] = o),
          (t[46] = f),
          (t[47] = O))
        : (O = t[47]),
      t[48] !== i || t[49] !== n || t[50] !== x
        ? ((k =
            x == null && n
              ? (0, Q.jsx)(ye, {
                  className: `h-6 rounded-lg`,
                  variant: `prominent`,
                  role: `progressbar`,
                  "aria-label": i.formatMessage({
                    id: `settings.storage.measuring`,
                    defaultMessage: `Measuring storage`,
                    description: `Accessible label for the storage chart while disk usage is being measured`,
                  }),
                })
              : null),
          (t[48] = i),
          (t[49] = n),
          (t[50] = x),
          (t[51] = k))
        : (k = t[51]),
      t[52] !== l?.status || t[53] !== d || t[54] !== b
        ? ((C =
            d || b || l?.status === `error`
              ? (0, Q.jsx)(`p`, {
                  role: `alert`,
                  className: `text-sm text-secondary`,
                  children: (0, Q.jsx)(q, {
                    id: `settings.storage.loadError`,
                    defaultMessage: `Couldn't measure storage. Try refreshing.`,
                    description: `Error when disk usage could not be fully measured`,
                  }),
                })
              : null),
          (t[52] = l?.status),
          (t[53] = d),
          (t[54] = b),
          (t[55] = C))
        : (C = t[55]),
      (w =
        x != null && e != null
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`div`, {
                  role: `img`,
                  "aria-labelledby": a,
                  className: `flex h-6 overflow-hidden rounded-lg bg-border`,
                  children: e.map((e) => {
                    let { category: t, bytes: n } = e;
                    return (0, Q.jsx)(
                      `div`,
                      {
                        className: p(`h-full`, lt[t]),
                        style: { width: `${x.totalBytes > 0 ? (n / x.totalBytes) * 100 : 0}%` },
                      },
                      t,
                    );
                  }),
                }),
                (0, Q.jsx)(`ul`, {
                  className: `flex flex-wrap gap-x-4 gap-y-1.5 text-secondary`,
                  children: e.map((e) => {
                    let { category: t, bytes: n } = e;
                    return (0, Q.jsxs)(
                      `li`,
                      {
                        className: `flex flex-col gap-1`,
                        children: [
                          (0, Q.jsxs)(`span`, {
                            className: `flex items-center gap-2 text-sm`,
                            children: [
                              (0, Q.jsx)(`span`, {
                                "aria-hidden": !0,
                                className: p(`size-2 shrink-0 rounded-full`, lt[t]),
                              }),
                              (0, Q.jsx)(q, { ...ut[t] }),
                            ],
                          }),
                          (0, Q.jsx)(`span`, {
                            className: `text-xs tabular-nums`,
                            children:
                              l?.completedCategories.includes(t) &&
                              (t !== `other` || l.completedCategories.includes(`unclassified`))
                                ? Ie(n, i)
                                : (0, Q.jsx)(Q.Fragment, {
                                    children:
                                      l?.status === `error`
                                        ? (0, Q.jsx)(q, {
                                            id: `settings.storage.categoryIncomplete`,
                                            defaultMessage: `{size} · Incomplete`,
                                            description: `A partial or cached category size whose refresh failed`,
                                            values: { size: Ie(n, i) },
                                          })
                                        : (0, Q.jsx)(q, {
                                            id: `settings.storage.categoryUpdating`,
                                            defaultMessage: `{size} · Updating…`,
                                            description: `A category size is still being measured or refreshed; it may be a cached measurement`,
                                            values: { size: Ie(n, i) },
                                          }),
                                  }),
                          }),
                        ],
                      },
                      t,
                    );
                  }),
                }),
                (0, Q.jsx)(`p`, {
                  className: `text-xs break-all text-secondary select-text`,
                  children: x.codexHome,
                }),
              ],
            })
          : null),
      (t[13] = l),
      (t[14] = i),
      (t[15] = d),
      (t[16] = u),
      (t[17] = y),
      (t[18] = v),
      (t[19] = b),
      (t[20] = a),
      (t[21] = x),
      (t[22] = S),
      (t[23] = C),
      (t[24] = w),
      (t[25] = E),
      (t[26] = D),
      (t[27] = O),
      (t[28] = k));
  } else ((S = t[22]), (C = t[23]), (w = t[24]), (E = t[25]), (D = t[26]), (O = t[27]), (k = t[28]));
  let A;
  t[56] !== C || t[57] !== w || t[58] !== D || t[59] !== O || t[60] !== k
    ? ((A = (0, Q.jsxs)(`div`, { className: D, children: [O, k, C, w] })),
      (t[56] = C),
      (t[57] = w),
      (t[58] = D),
      (t[59] = O),
      (t[60] = k),
      (t[61] = A))
    : (A = t[61]);
  let j;
  t[62] === v ? (j = t[63]) : ((j = () => v()), (t[62] = v), (t[63] = j));
  let M = S && !d && !y ? (x ?? void 0) : void 0,
    N;
  t[64] !== r || t[65] !== j || t[66] !== M
    ? ((N = (0, Q.jsx)(et, { hostId: r, onStorageChanged: j, storage: M })),
      (t[64] = r),
      (t[65] = j),
      (t[66] = M),
      (t[67] = N))
    : (N = t[67]);
  let P;
  return (
    t[68] !== E || t[69] !== A || t[70] !== N
      ? ((P = (0, Q.jsxs)(`div`, { className: E, children: [A, N] })),
        (t[68] = E),
        (t[69] = A),
        (t[70] = N),
        (t[71] = P))
      : (P = t[71]),
    P
  );
}
function at(e) {
  return e.category === `unclassified`;
}
function ot(e) {
  return e.state.data?.status === `scanning` && 1e3;
}
var st, ct, Q, lt, ut;
function dt() {
  return (dt = e(() => {
    ((st = v()),
      ce(),
      z(),
      f(),
      h(),
      (ct = a()),
      w(),
      O(),
      be(),
      rt(),
      (Q = u()),
      (lt = {
        threads: `bg-yellow`,
        subagents: `bg-purple`,
        archived: `bg-orange`,
        worktrees: `bg-green`,
        other: `bg-text-tertiary`,
      }),
      (ut = E({
        threads: {
          id: `settings.storage.category.threads`,
          defaultMessage: `Chats`,
          description: `Disk space used by main Codex chat histories`,
        },
        subagents: {
          id: `settings.storage.category.subagents`,
          defaultMessage: `Subagents`,
          description: `Disk space used by unarchived Codex subagent histories`,
        },
        archived: {
          id: `settings.storage.category.archived`,
          defaultMessage: `Archived chats`,
          description: `Disk space used by archived chat histories, including archived subagents`,
        },
        worktrees: {
          id: `settings.storage.category.worktrees`,
          defaultMessage: `Worktrees`,
          description: `Disk space used by Git working copies inside Codex home`,
        },
        other: {
          id: `settings.storage.category.other`,
          defaultMessage: `Other`,
          description: `Other files inside Codex home, including databases, logs, and caches`,
        },
      })));
  }))();
}
function ft() {
  let e = (0, ht.c)(5),
    { selectedHostId: t } = je(),
    n = t === D,
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(ve, { slug: `storage` })), (e[0] = r))
    : (r = e[0]);
  let i = n ? R?.deviceStorage : void 0,
    a;
  return (
    e[1] !== n || e[2] !== t || e[3] !== i
      ? ((a = (0, $.jsx)(Se, {
          title: r,
          children: (0, $.jsx)(pt, { hostId: t, isLocal: n, storageService: i }, t),
        })),
        (e[1] = n),
        (e[2] = t),
        (e[3] = i),
        (e[4] = a))
      : (a = e[4]),
    a
  );
}
function pt(e) {
  let t = (0, ht.c)(17),
    { hostId: n, isLocal: r, storageService: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = r
        ? (0, $.jsx)(q, {
            id: `settings.storage.thisDevice`,
            defaultMessage: `This device`,
            description: `Heading for storage on this computer, rather than cloud storage`,
          })
        : (0, $.jsx)(q, {
            id: `settings.storage.selectedComputer`,
            defaultMessage: `This computer`,
            description: `Heading for storage on the selected remote computer`,
          })),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(q, {
        id: `settings.storage.deviceManagementDescription`,
        defaultMessage: `Manage chats and worktrees stored on this computer`,
        description: `Description of existing device storage management tools`,
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === a ? (s = t[4]) : ((s = (0, $.jsx)(Me.Header, { title: a, subtitle: o })), (t[3] = a), (t[4] = s));
  let c;
  t[5] !== n || t[6] !== r || t[7] !== i
    ? ((c = r && i != null ? (0, $.jsx)(it, { service: i, hostId: n }) : null),
      (t[5] = n),
      (t[6] = r),
      (t[7] = i),
      (t[8] = c))
    : (c = t[8]);
  let l;
  t[9] === n ? (l = t[10]) : ((l = (0, $.jsx)(mt, { hostId: n })), (t[9] = n), (t[10] = l));
  let u;
  t[11] !== c || t[12] !== l
    ? ((u = (0, $.jsxs)(Me.Content, { className: `gap-4`, children: [c, l] })),
      (t[11] = c),
      (t[12] = l),
      (t[13] = u))
    : (u = t[13]);
  let d;
  return (
    t[14] !== s || t[15] !== u
      ? ((d = (0, $.jsxs)(Me, { children: [s, u] })), (t[14] = s), (t[15] = u), (t[16] = d))
      : (d = t[16]),
    d
  );
}
function mt(e) {
  let t = (0, ht.c)(13),
    { hostId: r } = e,
    i = x(),
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(q, {
        id: `settings.storage.worktreeManagement`,
        defaultMessage: `Manage worktrees`,
        description: `Link to existing worktree management`,
      })),
      (o = (0, $.jsx)(q, {
        id: `settings.storage.worktreeDescription`,
        defaultMessage: `Review working copies and choose how many old worktrees to keep`,
        description: `Description of worktree management and automatic cleanup settings`,
      })),
      (t[0] = a),
      (t[1] = o))
    : ((a = t[0]), (o = t[1]));
  let s;
  t[2] !== r || t[3] !== i
    ? ((s = (0, $.jsx)(G, {
        label: a,
        description: o,
        control: (e) =>
          (0, $.jsx)(T, {
            ...e,
            color: `secondary`,
            size: `toolbar`,
            onClick: () => void i(`/settings/worktrees?${new URLSearchParams({ hostId: r })}`),
            children: (0, $.jsx)(q, {
              id: `settings.storage.manage`,
              defaultMessage: `Manage`,
              description: `Open storage management settings`,
            }),
          }),
      })),
      (t[2] = r),
      (t[3] = i),
      (t[4] = s))
    : (s = t[4]);
  let c, l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(q, {
        id: `settings.storage.archiveManagement`,
        defaultMessage: `Archived chats`,
        description: `Link to existing archived chat management`,
      })),
      (l = (0, $.jsx)(q, {
        id: `settings.storage.archiveDescription`,
        defaultMessage: `Restore or delete individual archived chats`,
        description: `Description of archived chat management`,
      })),
      (t[5] = c),
      (t[6] = l))
    : ((c = t[5]), (l = t[6]));
  let u;
  t[7] !== r || t[8] !== i
    ? ((u = (0, $.jsx)(G, {
        label: c,
        description: l,
        control: (e) =>
          (0, $.jsx)(T, {
            ...e,
            color: `secondary`,
            size: `toolbar`,
            onClick: () => void i(`/settings/archived-chats?${new URLSearchParams({ hostId: r })}`),
            children: (0, $.jsx)(q, {
              id: `settings.storage.manage`,
              defaultMessage: `Manage`,
              description: `Open storage management settings`,
            }),
          }),
      })),
      (t[7] = r),
      (t[8] = i),
      (t[9] = u))
    : (u = t[9]);
  let d;
  return (
    t[10] !== s || t[11] !== u
      ? ((d = (0, $.jsxs)(n, { children: [s, u] })), (t[10] = s), (t[11] = u), (t[12] = d))
      : (d = t[12]),
    d
  );
}
var ht, $;
function gt() {
  return (gt = e(() => {
    ((ht = v()), w(), g(), O(), j(), Ee(), we(), Oe(), se(), Ce(), L(), _e(), dt(), ($ = u()));
  }))();
}
gt();
export { ft as DeviceStorageSettings };
//# sourceMappingURL=device-storage-91f490b9c301.js.map
