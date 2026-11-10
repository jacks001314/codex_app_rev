import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AO as r,
  CO as i,
  Cot as a,
  Ext as o,
  HT as s,
  Hgt as c,
  IDt as l,
  Iot as u,
  Ixt as d,
  JC as f,
  Jbt as p,
  Kat as m,
  Lot as h,
  Pxt as g,
  Rot as _,
  TO as v,
  VDt as y,
  VT as b,
  Xgt as x,
  Xot as S,
  Ygt as C,
  Yot as w,
  _Mt as T,
  _O as E,
  _xt as D,
  a_t as O,
  cO as k,
  fO as A,
  gMt as j,
  gO as M,
  hot as N,
  i3 as P,
  i_t as F,
  iot as I,
  iw as L,
  jDt as R,
  lO as z,
  lot as B,
  mO as ee,
  n_t as te,
  nst as V,
  oO as ne,
  o_t as re,
  qC as ie,
  qat as ae,
  r3 as H,
  rst as U,
  sO as oe,
  t3 as W,
  tst as G,
  tw as K,
  vO as se,
  vzt as ce,
  wot as le,
  xMt as ue,
  yzt as de,
  znt as fe,
  zot as pe,
  zxt as me,
} from "./app-shared-bbfeca5e5737.js";
import {
  Brt as he,
  Cmr as ge,
  D7n as _e,
  E7n as ve,
  Ek as ye,
  Emr as be,
  QP as xe,
  Rrt as Se,
  T7n as Ce,
  Tk as we,
  XPr as Te,
  YPr as Ee,
  _F as De,
  eF as Oe,
  hF as ke,
  nEt as Ae,
  nFr as je,
  oFr as Me,
  tEt as Ne,
  tF as Pe,
  v8n as Fe,
} from "./app-initial-5851df3f6cb1.js";
import { t as q } from "./format-bytes-9f828acaa58f.js";
function Ie(e, t) {
  return Re(e.entries, e.cutoff, e.archivedOnly).flatMap((e) => {
    let n = 0;
    for (let r of [e.thread, ...e.descendants]) {
      let e = t.threadBytes[r.id];
      if (e == null) return [];
      n += e;
    }
    return [{ ...e, bytes: n }];
  });
}
async function Le(e, t, n, r) {
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
            sourceKinds: c,
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
function Re(e, t, n) {
  let r = new Map();
  for (let { thread: t } of e) {
    let e = ge(t);
    if (e != null) {
      let n = r.get(e) ?? [];
      (n.push(t), r.set(e, n));
    }
  }
  let i = [];
  for (let { thread: a, archived: o } of e) {
    if (
      (n && !o) ||
      ge(a) != null ||
      typeof a.source != `string` ||
      a.source === `unknown` ||
      !x(a.threadSource) ||
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
function ze(e) {
  return e != null && re(e) && F(e, `0.143.0-alpha.16`) >= 0;
}
async function Be(e, t, n, r) {
  if (!ze(r)) throw Error(`Chat cleanup requires descendant discovery support`);
  let i = await Le(
      e,
      t.cutoff,
      t.archivedOnly,
      t.entries.map(({ thread: e }) => e.id),
    ),
    a = new Map(Re(i.entries, i.cutoff, i.archivedOnly).map((e) => [e.thread.id, e])),
    o = { deleted: 0, skipped: 0, failed: 0 };
  for (let r of Re(t.entries, t.cutoff, t.archivedOnly)) {
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
      let n = await e.discoverSubagentDescendantSnapshot(p(r.thread.id), { reconcile: !1 });
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
function Ve() {
  return (Ve = e(() => {
    (te(), O(), C(), be());
  }))();
}
function He(e) {
  let t = (0, Ue.c)(15),
    { days: n, archivedOnly: r, disabled: a, onChange: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, J.jsx)(l, {
        id: `settings.storage.cleanup.age`,
        defaultMessage: `Last updated`,
        description: `Age cutoff for old chat cleanup`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] !== r || t[2] !== n || t[3] !== a || t[4] !== o
    ? ((c = (0, J.jsx)(K, {
        size: `compact`,
        label: s,
        control: (e) =>
          (0, J.jsx)(i, {
            disabled: a,
            triggerButton: (0, J.jsx)(xe, {
              ...e,
              disabled: a,
              children: (0, J.jsx)(l, {
                id: `settings.storage.cleanup.days`,
                defaultMessage: `Over {days} days ago`,
                description: `Only include chats last updated more than this number of days ago`,
                values: { days: n },
              }),
            }),
            children: (0, J.jsx)(v.RadioGroup, {
              value: String(n),
              children: [30, 90, 180, 365].map((e) =>
                (0, J.jsx)(
                  v.RadioItem,
                  {
                    value: String(e),
                    onSelect: () => o(e, r),
                    children: (0, J.jsx)(l, {
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
      (t[1] = r),
      (t[2] = n),
      (t[3] = a),
      (t[4] = o),
      (t[5] = c))
    : (c = t[5]);
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, J.jsx)(l, {
        id: `settings.storage.cleanup.include`,
        defaultMessage: `Include`,
        description: `Which chats to include in cleanup`,
      })),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] !== r || t[8] !== n || t[9] !== a || t[10] !== o
    ? ((d = (0, J.jsx)(K, {
        size: `compact`,
        label: u,
        control: (e) =>
          (0, J.jsx)(i, {
            disabled: a,
            triggerButton: (0, J.jsx)(xe, {
              ...e,
              disabled: a,
              children: r
                ? (0, J.jsx)(l, {
                    id: `settings.storage.cleanup.archived`,
                    defaultMessage: `Archived chats`,
                    description: `Include only archived chats in cleanup`,
                  })
                : (0, J.jsx)(l, {
                    id: `settings.storage.cleanup.all`,
                    defaultMessage: `All chats`,
                    description: `Include archived and unarchived chats in cleanup`,
                  }),
            }),
            children: (0, J.jsxs)(v.RadioGroup, {
              value: r ? `archived` : `all`,
              children: [
                (0, J.jsx)(v.RadioItem, {
                  value: `archived`,
                  onSelect: () => o(n, !0),
                  children: (0, J.jsx)(l, {
                    id: `settings.storage.cleanup.archived`,
                    defaultMessage: `Archived chats`,
                    description: `Include only archived chats in cleanup`,
                  }),
                }),
                (0, J.jsx)(v.RadioItem, {
                  value: `all`,
                  onSelect: () => o(n, !1),
                  children: (0, J.jsx)(l, {
                    id: `settings.storage.cleanup.all`,
                    defaultMessage: `All chats`,
                    description: `Include archived and unarchived chats in cleanup`,
                  }),
                }),
              ],
            }),
          }),
      })),
      (t[7] = r),
      (t[8] = n),
      (t[9] = a),
      (t[10] = o),
      (t[11] = d))
    : (d = t[11]);
  let f;
  return (
    t[12] !== c || t[13] !== d
      ? ((f = (0, J.jsxs)(ie, { children: [c, d] })), (t[12] = c), (t[13] = d), (t[14] = f))
      : (f = t[14]),
    f
  );
}
var Ue, J;
function We() {
  return (We = e(() => {
    ((Ue = ce()), R(), r(), L(), Pe(), f(), (J = ue()));
  }))();
}
function Ge(e) {
  let n = (0, Xe.c)(67),
    { review: r, storage: i, onClose: a, onConfirm: o } = e,
    s = y(),
    c;
  n[0] === r ? (c = n[1]) : ((c = { ...r, days: 90 }), (n[0] = r), (n[1] = c));
  let [u, d] = (0, Y.useState)(c),
    f;
  n[2] !== u || n[3] !== i ? ((f = Ie(u, i)), (n[2] = u), (n[3] = i), (n[4] = f)) : (f = n[4]);
  let m = f,
    h;
  n[5] === m ? (h = n[6]) : ((h = () => new Set(m.map(Je))), (n[5] = m), (n[6] = h));
  let [g, _] = (0, Y.useState)(h),
    v = (0, Y.useRef)(!1),
    [x, S] = (0, Y.useState)(50),
    [C, w] = (0, Y.useState)(!1),
    T;
  if (n[7] !== m || n[8] !== g) {
    let e;
    (n[10] === g
      ? (e = n[11])
      : ((e = (e, t) => e + (g.has(t.thread.id) ? t.descendants.length : 0)), (n[10] = g), (n[11] = e)),
      (T = m.reduce(e, 0)),
      (n[7] = m),
      (n[8] = g),
      (n[9] = T));
  } else T = n[9];
  let D = T;
  if (C) {
    let e;
    n[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = () => w(!1)), (n[12] = e)) : (e = n[12]);
    let t;
    n[13] !== o || n[14] !== u || n[15] !== g
      ? ((t = () => {
          v.current || ((v.current = !0), o(u, g));
        }),
        (n[13] = o),
        (n[14] = u),
        (n[15] = g),
        (n[16] = t))
      : (t = n[16]);
    let r;
    return (
      n[17] !== g.size || n[18] !== t
        ? ((r = (0, X.jsx)(Ye, { count: g.size, onCancel: e, onConfirm: t })),
          (n[17] = g.size),
          (n[18] = t),
          (n[19] = r))
        : (r = n[19]),
      r
    );
  }
  let O;
  n[20] === a
    ? (O = n[21])
    : ((O = (e) => {
        !e && !v.current && a();
      }),
      (n[20] = a),
      (n[21] = O));
  let A;
  n[22] === g.size
    ? (A = n[23])
    : ((A = (e) => {
        (e.preventDefault(), !v.current && g.size > 0 && w(!0));
      }),
      (n[22] = g.size),
      (n[23] = A));
  let j;
  n[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, X.jsx)(E, {
        children: (0, X.jsx)(l, {
          id: `settings.storage.cleanup.dialogTitle`,
          defaultMessage: `Review old chats`,
          description: `Title of the old chat deletion review`,
        }),
      })),
      (n[24] = j))
    : (j = n[24]);
  let N;
  n[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, X.jsx)(z, {
        children: (0, X.jsx)(k, {
          title: j,
          subtitle: (0, X.jsx)(M, {
            children: (0, X.jsx)(l, {
              id: `settings.storage.cleanup.warningWithSize`,
              defaultMessage: `Sizes include subagents. Deleting a chat and its subagents is permanent.`,
              description: `Warning shown before confirming irreversible chat cleanup`,
            }),
          }),
        }),
      })),
      (n[25] = N))
    : (N = n[25]);
  let P;
  n[26] !== u || n[27] !== i
    ? ((P = (e, t) => {
        let n = Date.now() / 1e3 - e * 86400,
          r = { ...u, days: e, cutoff: n, archivedOnly: t };
        (d(r), _(new Set(Ie(r, i).map(qe))), S(50));
      }),
      (n[26] = u),
      (n[27] = i),
      (n[28] = P))
    : (P = n[28]);
  let F;
  n[29] !== u.archivedOnly || n[30] !== u.days || n[31] !== P
    ? ((F = (0, X.jsx)(z, {
        children: (0, X.jsx)(He, { days: u.days, archivedOnly: u.archivedOnly, disabled: !1, onChange: P }),
      })),
      (n[29] = u.archivedOnly),
      (n[30] = u.days),
      (n[31] = P),
      (n[32] = F))
    : (F = n[32]);
  let I;
  n[33] !== m || n[34] !== s || n[35] !== g || n[36] !== x
    ? ((I =
        m.length === 0
          ? (0, X.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, X.jsx)(l, {
                id: `settings.storage.cleanup.empty`,
                defaultMessage: `No chats match these filters`,
                description: `No old chats are eligible for deletion`,
              }),
            })
          : (0, X.jsx)(ie, {
              children: m.slice(0, x).map((e) => {
                let { thread: t, bytes: n } = e;
                return (0, X.jsx)(
                  K,
                  {
                    size: `compact`,
                    controlSizing: `content`,
                    label: (0, X.jsx)(`span`, {
                      className: `line-clamp-2`,
                      children:
                        Ce({ id: p(t.id), title: t.name, fallbackSearchTitle: _e(t.preview), turns: null }) ||
                        (0, X.jsx)(l, {
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
                            children: q(n, s),
                          }),
                          (0, X.jsx)(b, {
                            ...e,
                            checked: g.has(t.id),
                            onCheckedChange: (e) =>
                              _((n) => {
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
            })),
      (n[33] = m),
      (n[34] = s),
      (n[35] = g),
      (n[36] = x),
      (n[37] = I))
    : (I = n[37]);
  let L;
  n[38] !== m.length || n[39] !== x
    ? ((L =
        x < m.length
          ? (0, X.jsx)(t, {
              color: `ghost`,
              onClick: () => S(Ke),
              children: (0, X.jsx)(l, {
                id: `settings.storage.cleanup.showMore`,
                defaultMessage: `Show more chats`,
                description: `Show the next page of chats in the cleanup review`,
              }),
            })
          : null),
      (n[38] = m.length),
      (n[39] = x),
      (n[40] = L))
    : (L = n[40]);
  let R;
  n[41] !== I || n[42] !== L
    ? ((R = (0, X.jsxs)(z, { className: `min-h-0 overflow-y-auto`, children: [I, L] })),
      (n[41] = I),
      (n[42] = L),
      (n[43] = R))
    : (R = n[43]);
  let B;
  n[44] !== g.size || n[45] !== D
    ? ((B = (0, X.jsx)(`p`, {
        className: `text-sm text-secondary`,
        "aria-live": `polite`,
        children: (0, X.jsx)(l, {
          id: `settings.storage.cleanup.selection`,
          defaultMessage: `Selected chats: {count} · Subagents: {subagents}`,
          description: `Number of selected chats and all their descendants`,
          values: { count: g.size, subagents: D },
        }),
      })),
      (n[44] = g.size),
      (n[45] = D),
      (n[46] = B))
    : (B = n[46]);
  let te;
  n[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, X.jsx)(l, {
        id: `settings.storage.cleanup.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel cleanup without deleting chats`,
      })),
      (n[47] = te))
    : (te = n[47]);
  let V;
  n[48] === a
    ? (V = n[49])
    : ((V = (0, X.jsx)(t, { autoFocus: !0, color: `outline`, onClick: a, children: te })),
      (n[48] = a),
      (n[49] = V));
  let re = g.size === 0,
    ae;
  n[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, X.jsx)(l, {
        id: `settings.storage.cleanup.delete`,
        defaultMessage: `Delete selected`,
        description: `Permanently delete the reviewed selection and its subagents`,
      })),
      (n[50] = ae))
    : (ae = n[50]);
  let H;
  n[51] === re
    ? (H = n[52])
    : ((H = (0, X.jsx)(t, { color: `danger`, type: `submit`, disabled: re, children: ae })),
      (n[51] = re),
      (n[52] = H));
  let U;
  n[53] !== V || n[54] !== H
    ? ((U = (0, X.jsxs)(oe, { children: [V, H] })), (n[53] = V), (n[54] = H), (n[55] = U))
    : (U = n[55]);
  let W;
  n[56] !== B || n[57] !== U
    ? ((W = (0, X.jsxs)(z, { children: [B, U] })), (n[56] = B), (n[57] = U), (n[58] = W))
    : (W = n[58]);
  let G;
  n[59] !== F || n[60] !== R || n[61] !== W || n[62] !== A
    ? ((G = (0, X.jsxs)(ne, {
        as: `form`,
        size: `scrollable`,
        className: `select-none`,
        onSubmit: A,
        children: [N, F, R, W],
      })),
      (n[59] = F),
      (n[60] = R),
      (n[61] = W),
      (n[62] = A),
      (n[63] = G))
    : (G = n[63]);
  let se;
  return (
    n[64] !== G || n[65] !== O
      ? ((se = (0, X.jsx)(ee, { open: !0, onOpenChange: O, children: G })),
        (n[64] = G),
        (n[65] = O),
        (n[66] = se))
      : (se = n[66]),
    se
  );
}
function Ke(e) {
  return e + 50;
}
function qe(e) {
  let { thread: t } = e;
  return t.id;
}
function Je(e) {
  let { thread: t } = e;
  return t.id;
}
function Ye(e) {
  let n = (0, Xe.c)(20),
    { count: r, onCancel: i, onConfirm: a } = e,
    o;
  n[0] === i
    ? (o = n[1])
    : ((o = (e) => {
        e || i();
      }),
      (n[0] = i),
      (n[1] = o));
  let s;
  n[2] === a
    ? (s = n[3])
    : ((s = (e) => {
        (e.preventDefault(), a());
      }),
      (n[2] = a),
      (n[3] = s));
  let c;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(z, {
        children: (0, X.jsx)(k, {
          title: (0, X.jsx)(E, {
            children: (0, X.jsx)(l, {
              id: `settings.storage.cleanup.confirmTitle`,
              defaultMessage: `Delete selected chats?`,
              description: `Title of the final confirmation before permanently deleting selected local chats`,
            }),
          }),
        }),
      })),
      (n[4] = c))
    : (c = n[4]);
  let u;
  n[5] === r
    ? (u = n[6])
    : ((u = (0, X.jsx)(z, {
        className: `text-codex-description`,
        children: (0, X.jsx)(`p`, {
          children: (0, X.jsx)(l, {
            id: `settings.storage.cleanup.confirmBody`,
            defaultMessage: `This permanently deletes {count, plural, one {# chat} other {# chats}} and their subagents. This cannot be undone.`,
            description: `Final deletion warning; count is the number of selected parent chats, excluding their subagents`,
            values: { count: r },
          }),
        }),
      })),
      (n[5] = r),
      (n[6] = u));
  let d;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, X.jsx)(l, {
        id: `settings.storage.cleanup.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel cleanup without deleting chats`,
      })),
      (n[7] = d))
    : (d = n[7]);
  let f;
  n[8] === i
    ? (f = n[9])
    : ((f = (0, X.jsx)(t, { autoFocus: !0, color: `ghost`, onClick: i, children: d })),
      (n[8] = i),
      (n[9] = f));
  let p;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, X.jsx)(t, {
        color: `danger`,
        type: `submit`,
        children: (0, X.jsx)(l, {
          id: `settings.storage.cleanup.confirmDelete`,
          defaultMessage: `Delete`,
          description: `Confirm permanent deletion of the selected chats and their subagents`,
        }),
      })),
      (n[10] = p))
    : (p = n[10]);
  let m;
  n[11] === f
    ? (m = n[12])
    : ((m = (0, X.jsx)(z, { children: (0, X.jsxs)(oe, { children: [f, p] }) })), (n[11] = f), (n[12] = m));
  let h;
  n[13] !== s || n[14] !== u || n[15] !== m
    ? ((h = (0, X.jsxs)(ne, { as: `form`, onSubmit: s, children: [c, u, m] })),
      (n[13] = s),
      (n[14] = u),
      (n[15] = m),
      (n[16] = h))
    : (h = n[16]);
  let g;
  return (
    n[17] !== o || n[18] !== h
      ? ((g = (0, X.jsx)(ee, { open: !0, showDialogClose: !1, onOpenChange: o, children: h })),
        (n[17] = o),
        (n[18] = h),
        (n[19] = g))
      : (g = n[19]),
    g
  );
}
var Xe, Y, X;
function Ze() {
  return (Ze = e(() => {
    ((Xe = ce()), U(), (Y = de()), R(), W(), s(), se(), A(), ve(), L(), f(), Ve(), We(), (X = ue()));
  }))();
}
function Qe(e) {
  let n = (0, $e.c)(50),
    { hostId: r, storage: i, onStorageChanged: o } = e,
    s = d(a),
    c = me(je, r),
    u;
  n[0] === c ? (u = n[1]) : ((u = ze(c)), (n[0] = c), (n[1] = u));
  let f = u,
    p = V(),
    [m, g] = (0, et.useState)(null),
    _;
  n[2] === r ? (_ = n[3]) : ((_ = [`storage-chat-cleanup`, r]), (n[2] = r), (n[3] = _));
  let v = _,
    y;
  n[4] === v ? (y = n[5]) : ((y = { mutationKey: v }), (n[4] = v), (n[5] = y));
  let b = pe(y) > 0,
    x = `storage-chat-cleanup-${r}`,
    S;
  n[6] !== r || n[7] !== s
    ? ((S = (e) => {
        let { review: t, selected: n } = e;
        return Be(Ee(s, r), t, n, s.get(je, r));
      }),
      (n[6] = r),
      (n[7] = s),
      (n[8] = S))
    : (S = n[8]);
  let C, w, T;
  n[9] !== s || n[10] !== x
    ? ((C = () => {
        s.get(N).info(
          (0, Z.jsx)(l, {
            id: `settings.storage.cleanup.deleting`,
            defaultMessage: `Deleting chats`,
            description: `Persistent loading toast while the selected local chats and their subagents are being deleted`,
          }),
          { id: x, duration: 0, hasCloseButton: !1, leading: (0, Z.jsx)(H, { className: `icon-xs` }) },
        );
      }),
      (w = (e) => {
        let t = (0, Z.jsx)(l, {
          id: `settings.storage.cleanup.result`,
          defaultMessage: `Chats deleted: {deleted}. Changed chats skipped: {skipped}. Incomplete deletions: {failed}.`,
          description: `Cleanup results counted by parent chats; changed chats are preserved`,
          values: { deleted: e.deleted, skipped: e.skipped, failed: e.failed },
        });
        e.failed > 0
          ? s.get(N).danger(t, { id: x, errorAnalytics: { toastId: `storage.cleanup.partialFailure` } })
          : s.get(N).success(t, { id: x });
      }),
      (T = () => {
        s.get(N).danger(
          (0, Z.jsx)(l, {
            id: `settings.storage.cleanup.recheckError`,
            defaultMessage: `Couldn't recheck the chats. Nothing was deleted. Try again.`,
            description: `Revalidation failed before deletion began`,
          }),
          { id: x, errorAnalytics: { toastId: `storage.cleanup.recheckError` } },
        );
      }),
      (n[9] = s),
      (n[10] = x),
      (n[11] = C),
      (n[12] = w),
      (n[13] = T))
    : ((C = n[11]), (w = n[12]), (T = n[13]));
  let E;
  n[14] !== r || n[15] !== o || n[16] !== p
    ? ((E = () => {
        (o(), p.invalidateQueries({ queryKey: [`archived-threads`, r] }));
      }),
      (n[14] = r),
      (n[15] = o),
      (n[16] = p),
      (n[17] = E))
    : (E = n[17]);
  let D;
  n[18] !== v || n[19] !== S || n[20] !== C || n[21] !== w || n[22] !== T || n[23] !== E
    ? ((D = { mutationKey: v, mutationFn: S, onMutate: C, onSuccess: w, onError: T, onSettled: E }),
      (n[18] = v),
      (n[19] = S),
      (n[20] = C),
      (n[21] = w),
      (n[22] = T),
      (n[23] = E),
      (n[24] = D))
    : (D = n[24]);
  let O = h(D),
    k;
  n[25] !== r || n[26] !== s
    ? ((k = {
        mutationFn: async (e) => ({
          review: await Le(Ee(s, r), Date.now() / 1e3 - 7776e3, !0, Object.keys(e.threadBytes)),
          storage: e,
        }),
        onSuccess: g,
      }),
      (n[25] = r),
      (n[26] = s),
      (n[27] = k))
    : (k = n[27]);
  let { mutate: A, isPending: j, isError: M } = h(k),
    P;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Z.jsx)(l, {
        id: `settings.storage.cleanup.title`,
        defaultMessage: `Clean up old chats`,
        description: `Heading for manual cleanup of old local chats`,
      })),
      (n[28] = P))
    : (P = n[28]);
  let F;
  n[29] === f
    ? (F = n[30])
    : ((F = f
        ? (0, Z.jsx)(l, {
            id: `settings.storage.cleanup.description`,
            defaultMessage: `Review chats and their subagents before permanently deleting them`,
            description: `Explains the local chat cleanup review flow`,
          })
        : (0, Z.jsx)(l, {
            id: `settings.storage.cleanup.requiresUpdate`,
            defaultMessage: `Update ChatGPT on this device to clean up chats safely`,
            description: `Older app servers cannot verify all subagents before deleting a chat`,
          })),
      (n[29] = f),
      (n[30] = F));
  let I;
  n[31] !== b || n[32] !== j || n[33] !== A || n[34] !== i || n[35] !== f
    ? ((I = (e) =>
        (0, Z.jsx)(t, {
          ...e,
          color: `secondary`,
          size: `toolbar`,
          loading: j,
          disabled: !f || j || b || i == null,
          onClick: () => {
            f && !b && i != null && A(i);
          },
          children: (0, Z.jsx)(l, {
            id: `settings.storage.cleanup.review`,
            defaultMessage: `Review`,
            description: `Open a review of old chats before deletion`,
          }),
        })),
      (n[31] = b),
      (n[32] = j),
      (n[33] = A),
      (n[34] = i),
      (n[35] = f),
      (n[36] = I))
    : (I = n[36]);
  let L;
  n[37] !== F || n[38] !== I
    ? ((L = (0, Z.jsx)(ie, { children: (0, Z.jsx)(K, { label: P, description: F, control: I }) })),
      (n[37] = F),
      (n[38] = I),
      (n[39] = L))
    : (L = n[39]);
  let R;
  n[40] === M
    ? (R = n[41])
    : ((R = M
        ? (0, Z.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-secondary`,
            children: (0, Z.jsx)(l, {
              id: `settings.storage.cleanup.loadError`,
              defaultMessage: `Couldn't load all chats. Try reviewing again.`,
              description: `Cleanup cannot start without a complete inventory`,
            }),
          })
        : null),
      (n[40] = M),
      (n[41] = R));
  let z;
  n[42] !== O || n[43] !== b || n[44] !== m
    ? ((z =
        m == null
          ? null
          : (0, Z.jsx)(Ge, {
              review: m.review,
              storage: m.storage,
              onClose: () => g(null),
              onConfirm: (e, t) => {
                b || (g(null), O.mutate({ review: e, selected: t }));
              },
            })),
      (n[42] = O),
      (n[43] = b),
      (n[44] = m),
      (n[45] = z))
    : (z = n[45]);
  let B;
  return (
    n[46] !== L || n[47] !== R || n[48] !== z
      ? ((B = (0, Z.jsxs)(Z.Fragment, { children: [L, R, z] })),
        (n[46] = L),
        (n[47] = R),
        (n[48] = z),
        (n[49] = B))
      : (B = n[49]),
    B
  );
}
var $e, et, Z;
function tt() {
  return (tt = e(() => {
    (($e = ce()),
      _(),
      u(),
      G(),
      g(),
      (et = de()),
      R(),
      Te(),
      Fe(),
      W(),
      P(),
      B(),
      le(),
      L(),
      f(),
      Ve(),
      Ze(),
      (Z = ue()));
  }))();
}
function nt(e) {
  let n = (0, it.c)(60),
    { service: r, hostId: i } = e,
    a = y(),
    o = (0, at.useId)(),
    s = V(),
    c;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = [`device-storage`]), (n[0] = c)) : (c = n[0]);
  let u;
  n[1] === r
    ? (u = n[2])
    : ((u = {
        queryKey: c,
        queryFn: (e) => {
          let { signal: t } = e;
          return fe(r.read(), t);
        },
        staleTime: 6e4,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchInterval: rt,
      }),
      (n[1] = r),
      (n[2] = u));
  let { data: d, isPending: f, isError: p } = S(u),
    m;
  n[3] === s
    ? (m = n[4])
    : ((m = () => s.cancelQueries({ queryKey: [`device-storage`] })), (n[3] = s), (n[4] = m));
  let g;
  n[5] === r ? (g = n[6]) : ((g = () => fe(r.refresh())), (n[5] = r), (n[6] = g));
  let _;
  n[7] === s ? (_ = n[8]) : ((_ = (e) => s.setQueryData([`device-storage`], e)), (n[7] = s), (n[8] = _));
  let v;
  n[9] !== m || n[10] !== g || n[11] !== _
    ? ((v = { onMutate: m, mutationFn: g, onSuccess: _ }), (n[9] = m), (n[10] = g), (n[11] = _), (n[12] = v))
    : (v = n[12]);
  let { mutate: b, isPending: x, isError: C } = h(v),
    w = d?.usage,
    T = f || x || d?.status === `scanning`,
    E =
      d != null &&
      [`threads`, `subagents`, `archived`].every((e) => d.completedCategories.some((t) => t === e)),
    D;
  n[13] !== d?.measuredAt || n[14] !== d?.status || n[15] !== a || n[16] !== w
    ? ((D =
        w == null
          ? (0, Q.jsx)(l, {
              id: `settings.storage.homeLabel`,
              defaultMessage: `App data folder`,
              description: `Label for the folder whose storage usage is broken down in the chart`,
            })
          : (0, Q.jsx)(Q.Fragment, {
              children:
                d?.measuredAt == null && d?.status !== `ready`
                  ? (0, Q.jsx)(l, {
                      id: `settings.storage.measuredTotal`,
                      defaultMessage: `{size} measured so far`,
                      description: `Partial disk usage while the first storage scan is running`,
                      values: { size: q(w.totalBytes, a) },
                    })
                  : (0, Q.jsx)(l, {
                      id: `settings.storage.total`,
                      defaultMessage: `{size} used by ChatGPT`,
                      description: `Total size of files in the app data folder`,
                      values: { size: q(w.totalBytes, a) },
                    }),
            })),
      (n[13] = d?.measuredAt),
      (n[14] = d?.status),
      (n[15] = a),
      (n[16] = w),
      (n[17] = D))
    : (D = n[17]);
  let O;
  n[18] !== o || n[19] !== D
    ? ((O = (0, Q.jsx)(`p`, { id: o, className: `text-sm font-semibold`, children: D })),
      (n[18] = o),
      (n[19] = D),
      (n[20] = O))
    : (O = n[20]);
  let k;
  n[21] === b ? (k = n[22]) : ((k = () => b()), (n[21] = b), (n[22] = k));
  let A;
  n[23] === T
    ? (A = n[24])
    : ((A = T
        ? (0, Q.jsx)(l, {
            id: `settings.storage.updating`,
            defaultMessage: `Updating…`,
            description: `Storage measurements are being refreshed in the background`,
          })
        : (0, Q.jsx)(l, {
            id: `settings.storage.refresh`,
            defaultMessage: `Refresh`,
            description: `Refresh device storage usage`,
          })),
      (n[23] = T),
      (n[24] = A));
  let M;
  n[25] !== T || n[26] !== A || n[27] !== k
    ? ((M = (0, Q.jsx)(t, {
        color: `secondary`,
        size: `toolbar`,
        loading: T,
        disabled: T,
        onClick: k,
        children: A,
      })),
      (n[25] = T),
      (n[26] = A),
      (n[27] = k),
      (n[28] = M))
    : (M = n[28]);
  let N;
  n[29] !== M || n[30] !== O
    ? ((N = (0, Q.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-between gap-2`,
        children: [O, M],
      })),
      (n[29] = M),
      (n[30] = O),
      (n[31] = N))
    : (N = n[31]);
  let P;
  n[32] !== a || n[33] !== T || n[34] !== w
    ? ((P =
        w == null && T
          ? (0, Q.jsx)(Ne, {
              className: `h-6 rounded-lg`,
              variant: `prominent`,
              role: `progressbar`,
              "aria-label": a.formatMessage({
                id: `settings.storage.measuring`,
                defaultMessage: `Measuring storage`,
                description: `Accessible label for the storage chart while disk usage is being measured`,
              }),
            })
          : null),
      (n[32] = a),
      (n[33] = T),
      (n[34] = w),
      (n[35] = P))
    : (P = n[35]);
  let F;
  n[36] !== d?.status || n[37] !== p || n[38] !== C
    ? ((F =
        p || C || d?.status === `error`
          ? (0, Q.jsx)(`p`, {
              role: `alert`,
              className: `text-sm text-secondary`,
              children: (0, Q.jsx)(l, {
                id: `settings.storage.loadError`,
                defaultMessage: `Couldn't measure storage. Try refreshing.`,
                description: `Error when disk usage could not be fully measured`,
              }),
            })
          : null),
      (n[36] = d?.status),
      (n[37] = p),
      (n[38] = C),
      (n[39] = F))
    : (F = n[39]);
  let I;
  n[40] !== d?.completedCategories || n[41] !== d?.status || n[42] !== a || n[43] !== o || n[44] !== w
    ? ((I =
        w == null
          ? null
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`div`, {
                  role: `img`,
                  "aria-labelledby": o,
                  className: `flex h-6 overflow-hidden rounded-lg bg-border`,
                  children: w.categories.map((e) => {
                    let { category: t, bytes: n } = e;
                    return (0, Q.jsx)(
                      `div`,
                      {
                        className: j(`h-full`, ot[t]),
                        style: { width: `${w.totalBytes > 0 ? (n / w.totalBytes) * 100 : 0}%` },
                      },
                      t,
                    );
                  }),
                }),
                (0, Q.jsx)(`ul`, {
                  className: `flex flex-wrap gap-x-4 gap-y-1.5 text-secondary`,
                  children: w.categories.map((e) => {
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
                                className: j(`size-2 shrink-0 rounded-full`, ot[t]),
                              }),
                              (0, Q.jsx)(l, { ...st[t] }),
                            ],
                          }),
                          (0, Q.jsx)(`span`, {
                            className: `text-xs tabular-nums`,
                            children: d?.completedCategories.includes(t)
                              ? q(n, a)
                              : (0, Q.jsx)(Q.Fragment, {
                                  children:
                                    d?.status === `error`
                                      ? (0, Q.jsx)(l, {
                                          id: `settings.storage.categoryIncomplete`,
                                          defaultMessage: `{size} · Incomplete`,
                                          description: `A partial or cached category size whose refresh failed`,
                                          values: { size: q(n, a) },
                                        })
                                      : (0, Q.jsx)(l, {
                                          id: `settings.storage.categoryUpdating`,
                                          defaultMessage: `{size} · Updating…`,
                                          description: `A category size is still being measured or refreshed; it may be a cached measurement`,
                                          values: { size: q(n, a) },
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
                  children: w.codexHome,
                }),
              ],
            })),
      (n[40] = d?.completedCategories),
      (n[41] = d?.status),
      (n[42] = a),
      (n[43] = o),
      (n[44] = w),
      (n[45] = I))
    : (I = n[45]);
  let L;
  n[46] !== N || n[47] !== P || n[48] !== F || n[49] !== I
    ? ((L = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [N, P, F, I] })),
      (n[46] = N),
      (n[47] = P),
      (n[48] = F),
      (n[49] = I),
      (n[50] = L))
    : (L = n[50]);
  let R;
  n[51] === b ? (R = n[52]) : ((R = () => b()), (n[51] = b), (n[52] = R));
  let z = E && !p && !x ? (w ?? void 0) : void 0,
    B;
  n[53] !== i || n[54] !== R || n[55] !== z
    ? ((B = (0, Q.jsx)(Qe, { hostId: i, onStorageChanged: R, storage: z })),
      (n[53] = i),
      (n[54] = R),
      (n[55] = z),
      (n[56] = B))
    : (B = n[56]);
  let ee;
  return (
    n[57] !== L || n[58] !== B
      ? ((ee = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-10`, children: [L, B] })),
        (n[57] = L),
        (n[58] = B),
        (n[59] = ee))
      : (ee = n[59]),
    ee
  );
}
function rt(e) {
  return e.state.data?.status === `scanning` && 1e3;
}
var it, at, Q, ot, st;
function ct() {
  return (ct = e(() => {
    ((it = ce()),
      u(),
      w(),
      G(),
      T(),
      (at = de()),
      R(),
      W(),
      Ae(),
      tt(),
      (Q = ue()),
      (ot = {
        threads: `bg-yellow`,
        subagents: `bg-purple`,
        archived: `bg-orange`,
        unclassified: `bg-red`,
        worktrees: `bg-green`,
        other: `bg-text-tertiary`,
      }),
      (st = n({
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
        unclassified: {
          id: `settings.storage.category.unclassified`,
          defaultMessage: `Unclassified chats`,
          description: `Rollout files whose chat or subagent identity is unavailable in app-server metadata`,
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
function lt() {
  let e = (0, ft.c)(5),
    { selectedHostId: t } = he(),
    n = t === I,
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(Oe, { slug: `storage` })), (e[0] = r))
    : (r = e[0]);
  let i = n ? m?.deviceStorage : void 0,
    a;
  return (
    e[1] !== n || e[2] !== t || e[3] !== i
      ? ((a = (0, $.jsx)(ke, {
          title: r,
          children: (0, $.jsx)(ut, { hostId: t, isLocal: n, storageService: i }, t),
        })),
        (e[1] = n),
        (e[2] = t),
        (e[3] = i),
        (e[4] = a))
      : (a = e[4]),
    a
  );
}
function ut(e) {
  let t = (0, ft.c)(17),
    { hostId: n, isLocal: r, storageService: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = r
        ? (0, $.jsx)(l, {
            id: `settings.storage.thisDevice`,
            defaultMessage: `This device`,
            description: `Heading for storage on this computer, rather than cloud storage`,
          })
        : (0, $.jsx)(l, {
            id: `settings.storage.selectedComputer`,
            defaultMessage: `This computer`,
            description: `Heading for storage on the selected remote computer`,
          })),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(l, {
        id: `settings.storage.deviceManagementDescription`,
        defaultMessage: `Manage chats and worktrees stored on this computer`,
        description: `Description of existing device storage management tools`,
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === a ? (s = t[4]) : ((s = (0, $.jsx)(we.Header, { title: a, subtitle: o })), (t[3] = a), (t[4] = s));
  let c;
  t[5] !== n || t[6] !== r || t[7] !== i
    ? ((c = r && i != null ? (0, $.jsx)(nt, { service: i, hostId: n }) : null),
      (t[5] = n),
      (t[6] = r),
      (t[7] = i),
      (t[8] = c))
    : (c = t[8]);
  let u;
  t[9] === n ? (u = t[10]) : ((u = (0, $.jsx)(dt, { hostId: n })), (t[9] = n), (t[10] = u));
  let d;
  t[11] !== c || t[12] !== u
    ? ((d = (0, $.jsxs)(we.Content, { className: `gap-4`, children: [c, u] })),
      (t[11] = c),
      (t[12] = u),
      (t[13] = d))
    : (d = t[13]);
  let f;
  return (
    t[14] !== s || t[15] !== d
      ? ((f = (0, $.jsxs)(we, { children: [s, d] })), (t[14] = s), (t[15] = d), (t[16] = f))
      : (f = t[16]),
    f
  );
}
function dt(e) {
  let n = (0, ft.c)(13),
    { hostId: r } = e,
    i = o(),
    a,
    s;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(l, {
        id: `settings.storage.worktreeManagement`,
        defaultMessage: `Manage worktrees`,
        description: `Link to existing worktree management`,
      })),
      (s = (0, $.jsx)(l, {
        id: `settings.storage.worktreeDescription`,
        defaultMessage: `Review working copies and choose how many old worktrees to keep`,
        description: `Description of worktree management and automatic cleanup settings`,
      })),
      (n[0] = a),
      (n[1] = s))
    : ((a = n[0]), (s = n[1]));
  let c;
  n[2] !== r || n[3] !== i
    ? ((c = (0, $.jsx)(K, {
        label: a,
        description: s,
        control: (e) =>
          (0, $.jsx)(t, {
            ...e,
            color: `secondary`,
            size: `toolbar`,
            onClick: () => void i(`/settings/worktrees?${new URLSearchParams({ hostId: r })}`),
            children: (0, $.jsx)(l, {
              id: `settings.storage.manage`,
              defaultMessage: `Manage`,
              description: `Open storage management settings`,
            }),
          }),
      })),
      (n[2] = r),
      (n[3] = i),
      (n[4] = c))
    : (c = n[4]);
  let u, d;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(l, {
        id: `settings.storage.archiveManagement`,
        defaultMessage: `Archived chats`,
        description: `Link to existing archived chat management`,
      })),
      (d = (0, $.jsx)(l, {
        id: `settings.storage.archiveDescription`,
        defaultMessage: `Restore or delete individual archived chats`,
        description: `Description of archived chat management`,
      })),
      (n[5] = u),
      (n[6] = d))
    : ((u = n[5]), (d = n[6]));
  let f;
  n[7] !== r || n[8] !== i
    ? ((f = (0, $.jsx)(K, {
        label: u,
        description: d,
        control: (e) =>
          (0, $.jsx)(t, {
            ...e,
            color: `secondary`,
            size: `toolbar`,
            onClick: () => void i(`/settings/archived-chats?${new URLSearchParams({ hostId: r })}`),
            children: (0, $.jsx)(l, {
              id: `settings.storage.manage`,
              defaultMessage: `Manage`,
              description: `Open storage management settings`,
            }),
          }),
      })),
      (n[7] = r),
      (n[8] = i),
      (n[9] = f))
    : (f = n[9]);
  let p;
  return (
    n[10] !== c || n[11] !== f
      ? ((p = (0, $.jsxs)(ie, { children: [c, f] })), (n[10] = c), (n[11] = f), (n[12] = p))
      : (p = n[12]),
    p
  );
}
var ft, $;
function pt() {
  return (pt = e(() => {
    ((ft = ce()), R(), D(), W(), ae(), De(), ye(), Se(), L(), Pe(), f(), Me(), ct(), ($ = ue()));
  }))();
}
pt();
export { lt as DeviceStorageSettings };
//# sourceMappingURL=device-storage-520feb70e463.js.map
