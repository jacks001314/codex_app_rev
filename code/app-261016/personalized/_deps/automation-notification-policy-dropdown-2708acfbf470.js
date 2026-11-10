import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  BY as n,
  CCt as r,
  CH as i,
  D2 as a,
  DB as o,
  DK as s,
  EO as c,
  FBt as l,
  LNt as u,
  MNt as d,
  NNt as f,
  O2 as p,
  OB as m,
  OH as h,
  PBt as g,
  Q$ as _,
  Q1 as v,
  Qst as y,
  TO as b,
  TY as x,
  WK as S,
  Wvt as C,
  X0 as w,
  XOt as T,
  Y0 as E,
  Y3 as D,
  YOt as O,
  Z$ as k,
  Z1 as ee,
  Z3 as A,
  ZSt as j,
  _3 as te,
  b2 as M,
  ck as N,
  iCt as P,
  l2 as ne,
  nA as re,
  nB as ie,
  nCt as F,
  okt as I,
  pH as L,
  rA as R,
  rB as z,
  rk as B,
  sct as V,
  tk as ae,
  tkt as H,
  u2 as U,
  uSt as W,
  v3 as G,
  y2 as K,
  zY as q,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ASn as oe,
  Cbr as se,
  Ger as ce,
  Gsn as le,
  IEr as ue,
  J_t as de,
  KBr as fe,
  Ksn as pe,
  MSn as me,
  OSn as he,
  QSt as ge,
  Qnr as _e,
  RCn as ve,
  SIt as ye,
  Xyr as be,
  Yyr as xe,
  ZSt as Se,
  Znr as Ce,
  _yn as we,
  dat as Te,
  eFr as Ee,
  eer as De,
  ewt as Oe,
  iFr as ke,
  mtr as Ae,
  mwr as je,
  nFr as Me,
  o2 as Ne,
  ptr as Pe,
  q_t as Fe,
  s2 as Ie,
  twt as Le,
  uat as Re,
  wbr as ze,
  xIt as Be,
  xyn as Ve,
  z9n as He,
  zCn as Ue,
} from "./app-initial-ad16eaadf81f.js";
import { Gl as J, Kl as We, Wl as Ge } from "./app-primary-3e00728c2a4c.js";
function Ke(e) {
  let t = (0, qe.c)(54),
    {
      className: r,
      selectedProjectId: i,
      projects: o,
      placeholder: s,
      projectlessActionLabel: c,
      projectlessLabel: l,
      align: u,
      showIcon: f,
      includeChats: p,
      localOnlyTooltip: m,
      onChange: h,
    } = e,
    g = u === void 0 ? `start` : u,
    _ = f === void 0 || f,
    v = p === void 0 || p,
    y = I(),
    { remoteConnections: x } = pe(),
    S = Te(x).length > 0,
    C;
  t[0] !== y || t[1] !== l
    ? ((C =
        l ??
        y.formatMessage({
          id: `components.projectDropdown.projectless`,
          defaultMessage: `Chats`,
          description: `Label for selecting the chats target in the project dropdown`,
        })),
      (t[0] = y),
      (t[1] = l),
      (t[2] = C))
    : (C = t[2]);
  let w = C,
    T;
  if (t[3] !== o || t[4] !== i) {
    let e;
    (t[6] === i ? (e = t[7]) : ((e = (e) => e.projectId === i), (t[6] = i), (t[7] = e)),
      (T = o.find(e)),
      (t[3] = o),
      (t[4] = i),
      (t[5] = T));
  } else T = t[5];
  let E = T,
    O = v && i === `~`,
    k = O ? w : (E?.label ?? s),
    A = re;
  O ? (A = Be) : E?.isCodexWorktree === !0 && (A = Oe);
  let j;
  t[8] === y
    ? (j = t[9])
    : ((j = y.formatMessage({
        id: `components.projectDropdown.ariaLabel`,
        defaultMessage: `Project`,
        description: `Aria label for project dropdown`,
      })),
      (t[8] = y),
      (t[9] = j));
  let M;
  t[10] === r ? (M = t[11]) : ((M = d(`min-w-0`, r)), (t[10] = r), (t[11] = M));
  let N;
  t[12] !== A || t[13] !== _
    ? ((N = _ ? (0, Y.jsx)(A, { className: `icon-xs shrink-0` }) : null),
      (t[12] = A),
      (t[13] = _),
      (t[14] = N))
    : (N = t[14]);
  let P;
  t[15] === k
    ? (P = t[16])
    : ((P = (0, Y.jsx)(`span`, { className: `truncate text-start text-default`, children: k })),
      (t[15] = k),
      (t[16] = P));
  let ne;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, Y.jsx)(b, { className: `icon-2xs shrink-0 text-tertiary` })), (t[17] = ne))
    : (ne = t[17]);
  let F;
  t[18] !== j || t[19] !== M || t[20] !== N || t[21] !== P
    ? ((F = (0, Y.jsxs)(D, {
        "aria-label": j,
        size: `composerSm`,
        color: `ghost`,
        className: M,
        children: [N, P, ne],
      })),
      (t[18] = j),
      (t[19] = M),
      (t[20] = N),
      (t[21] = P),
      (t[22] = F))
    : (F = t[22]);
  let L;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Y.jsx)(H, {
        id: `components.projectDropdown.title`,
        defaultMessage: `Project`,
        description: `Header label above project options`,
      })),
      (t[23] = L))
    : (L = t[23]);
  let R;
  t[24] !== S || t[25] !== y || t[26] !== m
    ? ((R = S
        ? (0, Y.jsx)(ie, {
            tooltipContent: m,
            side: `top`,
            align: `center`,
            children: (0, Y.jsx)(`button`, {
              type: `button`,
              className: `inline-flex shrink-0 cursor-interaction items-center justify-center text-codex-description hover:text-default`,
              "aria-label": y.formatMessage({
                id: `components.projectDropdown.localOnlyTooltipLabel`,
                defaultMessage: `Project availability details`,
                description: `Aria label for the project local-only info tooltip trigger`,
              }),
              children: (0, Y.jsx)(Se, { className: `icon-2xs` }),
            }),
          })
        : null),
      (t[24] = S),
      (t[25] = y),
      (t[26] = m),
      (t[27] = R))
    : (R = t[27]);
  let z;
  t[28] === R
    ? (z = t[29])
    : ((z = (0, Y.jsx)(B.Title, {
        children: (0, Y.jsxs)(`div`, { className: `flex min-w-0 items-center gap-1`, children: [L, R] }),
      })),
      (t[28] = R),
      (t[29] = z));
  let V;
  if (t[30] !== h || t[31] !== o || t[32] !== i) {
    let e;
    (t[34] !== h || t[35] !== i
      ? ((e = (e) => {
          let t = e.isCodexWorktree === !0 ? te : ee,
            n = e.gitRepos[0]?.rootFolder,
            r = n != null && n !== e.label;
          return (0, Y.jsx)(
            B.Item,
            {
              leftIconAsset: t,
              rightIconAsset: e.projectId === i ? K : void 0,
              onSelect: () => {
                h(e.projectId);
              },
              children: (0, Y.jsxs)(`div`, {
                className: `flex items-center gap-1`,
                children: [
                  (0, Y.jsx)(`span`, { children: e.label }),
                  r
                    ? (0, Y.jsx)(`span`, {
                        className: `truncate text-sm text-codex-description`,
                        children: n,
                      })
                    : null,
                ],
              }),
            },
            e.projectId,
          );
        }),
        (t[34] = h),
        (t[35] = i),
        (t[36] = e))
      : (e = t[36]),
      (V = o.map(e)),
      (t[30] = h),
      (t[31] = o),
      (t[32] = i),
      (t[33] = V));
  } else V = t[33];
  let U;
  t[37] === o.length
    ? (U = t[38])
    : ((U =
        o.length === 0
          ? (0, Y.jsx)(B.Message, {
              compact: !0,
              children: (0, Y.jsx)(H, {
                id: `components.projectDropdown.empty`,
                defaultMessage: `No project folders available`,
                description: `Fallback label when no project options are available`,
              }),
            })
          : null),
      (t[37] = o.length),
      (t[38] = U));
  let W;
  t[39] !== V || t[40] !== U
    ? ((W = (0, Y.jsxs)(B.Section, {
        className: `flex flex-col [--edge-fade-distance:1.5rem]`,
        children: [V, U],
      })),
      (t[39] = V),
      (t[40] = U),
      (t[41] = W))
    : (W = t[41]);
  let G;
  t[42] !== w || t[43] !== v || t[44] !== O || t[45] !== h || t[46] !== c
    ? ((G =
        v && (c == null || !O)
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(B.Separator, {}),
                (0, Y.jsx)(B.Section, {
                  className: `flex flex-col`,
                  children: (0, Y.jsx)(B.Item, {
                    leftIconAsset: c == null ? a : n,
                    rightIconAsset: c == null && O ? K : void 0,
                    onSelect: () => {
                      h(`~`);
                    },
                    children: c ?? w,
                  }),
                }),
              ],
            })
          : null),
      (t[42] = w),
      (t[43] = v),
      (t[44] = O),
      (t[45] = h),
      (t[46] = c),
      (t[47] = G))
    : (G = t[47]);
  let q;
  return (
    t[48] !== g || t[49] !== F || t[50] !== z || t[51] !== W || t[52] !== G
      ? ((q = (0, Y.jsxs)(ae, {
          align: g,
          contentWidth: `workspace`,
          contentMaxHeight: `tall`,
          contentClassName: `pb-2`,
          triggerButton: F,
          children: [z, W, G],
        })),
        (t[48] = g),
        (t[49] = F),
        (t[50] = z),
        (t[51] = W),
        (t[52] = G),
        (t[53] = q))
      : (q = t[53]),
    q
  );
}
var qe, Y;
function Je() {
  return (Je = e(() => {
    ((qe = g()),
      G(),
      p(),
      M(),
      v(),
      q(),
      f(),
      V(),
      T(),
      Re(),
      A(),
      N(),
      z(),
      ye(),
      c(),
      R(),
      ge(),
      Le(),
      le(),
      (Y = u()));
  }))();
}
function Ye(e) {
  let t = (0, Xe.c)(25),
    { className: n, align: r, ariaLabel: i, children: a, defaultOpen: o, selectedLabel: s, size: c } = e,
    l = r === void 0 ? `start` : r,
    u = c === void 0 ? `composerSm` : c,
    f = I(),
    p = (0, Ze.useId)(),
    [m, g] = (0, Ze.useState)(o ?? !1),
    _;
  t[0] === n ? (_ = t[1]) : ((_ = d(`min-w-0`, n)), (t[0] = n), (t[1] = _));
  let v;
  t[2] !== i || t[3] !== f
    ? ((v =
        i ??
        f.formatMessage({
          id: `threadPicker.search`,
          defaultMessage: `Search chats`,
          description: `Search input placeholder in the shared chat picker`,
        })),
      (t[2] = i),
      (t[3] = f),
      (t[4] = v))
    : (v = t[4]);
  let y;
  t[5] === s
    ? (y = t[6])
    : ((y =
        s ??
        (0, X.jsx)(H, {
          id: `threadPicker.placeholder`,
          defaultMessage: `Choose a chat`,
          description: `Placeholder for an unselected shared chat picker`,
        })),
      (t[5] = s),
      (t[6] = y));
  let b;
  t[7] !== p || t[8] !== y
    ? ((b = (0, X.jsx)(`span`, { id: p, className: `truncate text-start text-default`, children: y })),
      (t[7] = p),
      (t[8] = y),
      (t[9] = b))
    : (b = t[9]);
  let x;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, X.jsx)(h, { className: `text-tertiary` })), (t[10] = x))
    : (x = t[10]);
  let S;
  t[11] !== p || t[12] !== u || t[13] !== _ || t[14] !== v || t[15] !== b
    ? ((S = (0, X.jsxs)(D, {
        className: _,
        "aria-label": v,
        "aria-describedby": p,
        color: `ghost`,
        radius: `full`,
        size: u,
        children: [b, x],
      })),
      (t[11] = p),
      (t[12] = u),
      (t[13] = _),
      (t[14] = v),
      (t[15] = b),
      (t[16] = S))
    : (S = t[16]);
  let C;
  t[17] !== a || t[18] !== m
    ? ((C = m ? a(() => g(!1)) : null), (t[17] = a), (t[18] = m), (t[19] = C))
    : (C = t[19]);
  let w;
  return (
    t[20] !== l || t[21] !== m || t[22] !== S || t[23] !== C
      ? ((w = (0, X.jsx)(Ge, {
          align: l,
          contentMaxHeight: `tall`,
          contentWidth: `workspace`,
          open: m,
          onOpenChange: g,
          triggerButton: S,
          children: C,
        })),
        (t[20] = l),
        (t[21] = m),
        (t[22] = S),
        (t[23] = C),
        (t[24] = w))
      : (w = t[24]),
    w
  );
}
var Xe, Ze, X;
function Qe() {
  return (Qe = e(() => {
    ((Xe = g()), f(), (Ze = l()), T(), A(), We(), x(), (X = u()));
  }))();
}
var $e;
function et() {
  return (et = e(() => {
    (T(),
      ($e = O({
        newChatEachRun: {
          id: `settings.automations.destination.newChatEachRun`,
          defaultMessage: `New chat each run`,
          description: `Option to start a separate new chat every time a scheduled task runs`,
        },
        newDedicatedChat: {
          id: `settings.automations.destination.newDedicatedChat`,
          defaultMessage: `New chat for this task`,
          description: `Option to create one dedicated chat when saving a new scheduled task, then reuse that chat for every run`,
        },
      })));
  }))();
}
function tt(e, t) {
  let n = (0, it.c)(6),
    { data: r } = P(Ue),
    { data: i } = P(_e),
    a = P(at),
    o;
  return (
    n[0] !== t || n[1] !== r?.items || n[2] !== a || n[3] !== i?.threadIds || n[4] !== e
      ? ((o = nt({
          automations: r?.items ?? [],
          conversations: a,
          pinnedThreadIds: i?.threadIds ?? [],
          selectedThreadId: e,
          automationId: t,
        })),
        (n[0] = t),
        (n[1] = r?.items),
        (n[2] = a),
        (n[3] = i?.threadIds),
        (n[4] = e),
        (n[5] = o))
      : (o = n[5]),
    o
  );
}
function nt({ automations: e, conversations: t, pinnedThreadIds: n, selectedThreadId: r, automationId: i }) {
  let a = new Set(
      e.flatMap((e) =>
        !C(e) || e.id === i || e.status !== `ACTIVE` || e.targetThreadId.trim().length === 0
          ? []
          : [e.targetThreadId],
      ),
    ),
    o = new Map(t.filter((e) => e.hostId == null || ze(e.hostId)).map((e) => [String(e.id), e])),
    s = new Set(n),
    c = [...n, ...Array.from(o.keys()).filter((e) => !s.has(e))].flatMap((e) => {
      let t = o.get(e);
      return t == null ||
        rt(t) ||
        t.threadSource === `pull_request_fix_automation` ||
        be(t.threadStartKind, t.threadSource)
        ? []
        : [
            {
              threadId: t.id,
              title: t.title ?? e,
              createdAt: t.createdAt ?? null,
              projectId: t.projectId ?? null,
              projectLabel: t.projectLabel ?? null,
              isPinned: s.has(e),
              isUnavailable: a.has(e),
            },
          ];
    }),
    l = r == null ? void 0 : o.get(r),
    u = rt(l) || l?.threadSource === `pull_request_fix_automation`,
    d = be(l?.threadStartKind, l?.threadSource);
  return (
    r != null &&
      r.length > 0 &&
      !c.some((e) => e.threadId === r) &&
      c.unshift({
        threadId: W(l?.id ?? r),
        title: l?.title ?? r,
        createdAt: l?.createdAt ?? null,
        projectId: l?.projectId ?? null,
        projectLabel: l?.projectLabel ?? null,
        isPinned: s.has(r),
        isUnavailable: u || d || a.has(r),
      }),
    c
  );
}
function rt(e) {
  return e != null && (e.parentThreadId != null || ue(e.source)?.parentThreadId != null);
}
var it, at;
function ot() {
  return (ot = e(() => {
    ((it = g()),
      je(),
      j(),
      V(),
      De(),
      se(),
      xe(),
      Ce(),
      t(),
      fe(),
      Ne(),
      he(),
      we(),
      ve(),
      (at = r(
        y,
        ({ get: e }) =>
          e(me).flatMap((t) => {
            let n = e(oe, t);
            if (n?.kind !== `local` || n.conversationId == null) return [];
            let r = n.conversationId,
              i = e(Ve, t);
            return [
              {
                id: r,
                title: e(Ie, { hostId: n.hostId ?? `local`, threadId: r }),
                createdAt: e(He, r) ?? n.summary?.createdAt ?? null,
                hostId: n.hostId ?? void 0,
                parentThreadId:
                  e(ce, r) ??
                  (n.summary?.parentThreadId == null ? null : W(n.summary.parentThreadId)) ??
                  ue(n.source)?.parentThreadId ??
                  null,
                source: n.source ?? void 0,
                threadSource: e(Pe, r) ?? n.summary?.threadSource ?? null,
                threadStartKind: e(Ae, r) ?? n.summary?.threadStartKind,
                projectId: i?.projectId ?? null,
                projectLabel: i?.label ?? null,
              },
            ];
          }),
        {
          isEqual: (e, t) =>
            e.length === t.length &&
            e.every((e, n) => {
              let r = t[n];
              return (
                r != null &&
                e.id === r.id &&
                e.title === r.title &&
                e.createdAt === r.createdAt &&
                e.hostId === r.hostId &&
                rt(e) === rt(r) &&
                e.threadSource === r.threadSource &&
                e.threadStartKind === r.threadStartKind &&
                e.projectId === r.projectId &&
                e.projectLabel === r.projectLabel
              );
            }),
        },
      )));
  }))();
}
function st(e) {
  let t = (0, ut.c)(25),
    { allowNewThread: n, draft: r, setDraft: a, onClose: o } = e,
    c = I(),
    l = tt(r.targetThreadId, r.id),
    u = [
      {
        id: `new-chat-each-run`,
        label: c.formatMessage($e.newChatEachRun),
        isSelected: r.kind === `cron`,
        onSelect: () => {
          a(lt);
        },
      },
      ...(n && r.id == null
        ? [
            {
              id: `new-dedicated-chat`,
              label: c.formatMessage($e.newDedicatedChat),
              isSelected: r.kind === `heartbeat` && r.targetThreadId == null,
              onSelect: () => {
                a(ct);
              },
            },
          ]
        : []),
    ],
    [d, f] = (0, dt.useState)(``),
    p = d.trim(),
    m;
  t[0] === c
    ? (m = t[1])
    : ((m = c.formatMessage({
        id: `threadPicker.search`,
        defaultMessage: `Search chats`,
        description: `Search input placeholder in the shared chat picker`,
      })),
      (t[0] = c),
      (t[1] = m));
  let h = m,
    g = c.formatMessage({
      id: `threadPicker.otherChats`,
      defaultMessage: `Other chats`,
      description: `Heading for chats without a project in the shared chat picker`,
    }),
    _ = c.formatMessage({
      id: `threadPicker.pinnedChats`,
      defaultMessage: `Pinned chats`,
      description: `Heading for pinned chats in the shared chat picker`,
    }),
    v = Fe(p),
    y = l.filter((e) => p.length === 0 || v(e.title) > 0 || v(e.projectLabel ?? ``) > 0),
    b = new Map();
  for (let e of y) {
    let t = `projectless`;
    e.isPinned ? (t = `pinned`) : e.projectId != null && (t = `project:${e.projectId}`);
    let n = e.isPinned ? _ : e.projectLabel?.trim() || g,
      r = b.get(t);
    r == null ? b.set(t, { label: n, options: [e] }) : r.options.push(e);
  }
  let x = u.filter((e) => p.length === 0 || v(e.label) > 0),
    C;
  t[2] !== d || t[3] !== h || t[4] !== f
    ? ((C = (0, Z.jsx)(J.Input, { "aria-label": h, placeholder: h, value: d, onValueChange: f })),
      (t[2] = d),
      (t[3] = h),
      (t[4] = f),
      (t[5] = C))
    : (C = t[5]);
  let w;
  t[6] !== x || t[7] !== o
    ? ((w = x.map((e) =>
        (0, Z.jsx)(
          J.Item,
          {
            icon: (0, Z.jsx)(S, {}),
            rightIcon: e.isSelected ? (0, Z.jsx)(i, {}) : void 0,
            value: e.id,
            onSelect: () => {
              (e.onSelect(), o());
            },
            children: e.label,
          },
          e.id,
        ),
      )),
      (t[6] = x),
      (t[7] = o),
      (t[8] = w))
    : (w = t[8]);
  let T;
  t[9] !== r || t[10] !== c || t[11] !== o || t[12] !== a
    ? ((T = (e) => {
        let [t, n] = e;
        return (0, Z.jsxs)(
          `div`,
          {
            "aria-label": n.label,
            role: `group`,
            children: [
              (0, Z.jsx)(`div`, {
                className: `px-2 pt-2 pb-1 text-xs text-codex-description`,
                children: n.label,
              }),
              n.options.map((e) =>
                (0, Z.jsx)(
                  J.Item,
                  {
                    disabled: e.isUnavailable,
                    icon: e.isPinned ? (0, Z.jsx)(s, {}) : (0, Z.jsx)(L, {}),
                    rightIcon:
                      r.kind === `heartbeat` && e.threadId === r.targetThreadId ? (0, Z.jsx)(i, {}) : void 0,
                    value: e.threadId,
                    onSelect: () => {
                      (a((t) => Me({ draft: Ee(t, `thread`), threadId: e.threadId, title: e.title })), o());
                    },
                    children: (0, Z.jsxs)(`div`, {
                      className: `flex min-w-0 items-center gap-1`,
                      children: [
                        (0, Z.jsx)(`span`, { className: `truncate`, children: e.title }),
                        e.isPinned && e.projectLabel
                          ? (0, Z.jsx)(`span`, {
                              className: `truncate text-sm text-codex-description`,
                              children: e.projectLabel,
                            })
                          : null,
                        e.createdAt == null
                          ? null
                          : (0, Z.jsx)(`span`, {
                              className: `truncate text-sm text-codex-description`,
                              children: c.formatDate(new Date(e.createdAt), { dateStyle: `medium` }),
                            }),
                      ],
                    }),
                  },
                  e.threadId,
                ),
              ),
            ],
          },
          t,
        );
      }),
      (t[9] = r),
      (t[10] = c),
      (t[11] = o),
      (t[12] = a),
      (t[13] = T))
    : (T = t[13]);
  let E = Array.from(b, T),
    D;
  t[14] !== x.length || t[15] !== y
    ? ((D =
        x.length === 0 && y.length === 0
          ? (0, Z.jsx)(B.Message, {
              compact: !0,
              children: (0, Z.jsx)(H, {
                id: `threadPicker.noChatsFound`,
                defaultMessage: `No chats found`,
                description: `Empty state in the shared chat picker`,
              }),
            })
          : null),
      (t[14] = x.length),
      (t[15] = y),
      (t[16] = D))
    : (D = t[16]);
  let O;
  t[17] !== w || t[18] !== E || t[19] !== D
    ? ((O = (0, Z.jsxs)(J.List, {
        className: `flex flex-col [--edge-fade-distance:1.5rem]`,
        children: [w, E, D],
      })),
      (t[17] = w),
      (t[18] = E),
      (t[19] = D),
      (t[20] = O))
    : (O = t[20]);
  let k;
  return (
    t[21] !== h || t[22] !== C || t[23] !== O
      ? ((k = (0, Z.jsxs)(J.Root, { label: h, children: [C, O] })),
        (t[21] = h),
        (t[22] = C),
        (t[23] = O),
        (t[24] = k))
      : (k = t[24]),
    k
  );
}
function ct(e) {
  return { ...Ee(e, `thread`), targetThreadId: null };
}
function lt(e) {
  return Ee(e, `new-task`);
}
var ut, dt, Z;
function ft() {
  return (ft = e(() => {
    ((ut = g()), (dt = l()), T(), de(), We(), N(), x(), et(), ke(), ot(), (Z = u()));
  }))();
}
var pt;
function mt() {
  return (mt = e(() => {
    (T(),
      (pt = O({
        cloud: {
          id: `inbox.automations.executionLocation.cloud`,
          defaultMessage: `Cloud`,
          description: `Scheduled task execution option that continues running in the cloud when this computer is off`,
        },
        local: {
          id: `inbox.automations.executionLocation.local`,
          defaultMessage: `This device`,
          description: `Scheduled task execution option that runs on the current device`,
        },
        label: {
          id: `inbox.automations.executionLocation.label`,
          defaultMessage: `Runs on`,
          description: `Label for choosing whether a scheduled task runs on this device or in the cloud`,
        },
      })));
  }))();
}
function ht(e) {
  let t = (0, vt.c)(25),
    { selectedLocation: n, onSelect: r } = e,
    i = I(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(H, { ...pt.cloud })), (t[0] = a))
    : (a = t[0]);
  let s = a,
    c;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(H, { ...pt.local })), (t[1] = c))
    : (c = t[1]);
  let l = c,
    u;
  t[2] !== i || t[3] !== n
    ? ((u = i.formatMessage(
        {
          id: `inbox.automations.executionLocation.ariaLabel`,
          defaultMessage: `Runs on: {location, select, cloud {Cloud} other {This device}}`,
          description: `Accessible label for a scheduled task's selected cloud or on-device execution location`,
        },
        { location: n },
      )),
      (t[2] = i),
      (t[3] = n),
      (t[4] = u))
    : (u = t[4]);
  let d = n === `cloud` ? s : l,
    f;
  t[5] === d
    ? (f = t[6])
    : ((f = (0, Q.jsx)(`span`, { className: `truncate text-start text-default`, children: d })),
      (t[5] = d),
      (t[6] = f));
  let p;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(o, { className: `shrink-0 text-tertiary`, "aria-hidden": !1, asset: ne })), (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== u || t[9] !== f
    ? ((m = (0, Q.jsxs)(D, {
        "aria-label": u,
        className: `min-w-0`,
        size: `composerSm`,
        color: `ghost`,
        children: [f, p],
      })),
      (t[8] = u),
      (t[9] = f),
      (t[10] = m))
    : (m = t[10]);
  let h = n === `local` ? K : void 0,
    g;
  t[11] === r ? (g = t[12]) : ((g = () => r(`local`)), (t[11] = r), (t[12] = g));
  let v;
  t[13] !== h || t[14] !== g
    ? ((v = (0, Q.jsx)(Q.Fragment, {
        children: (0, Q.jsx)(B.Item, { leftIconAsset: _, rightIconAsset: h, onSelect: g, children: l }),
      })),
      (t[13] = h),
      (t[14] = g),
      (t[15] = v))
    : (v = t[15]);
  let y = n === `cloud` ? K : void 0,
    b;
  t[16] === r ? (b = t[17]) : ((b = () => r(`cloud`)), (t[16] = r), (t[17] = b));
  let x;
  t[18] !== y || t[19] !== b
    ? ((x = (0, Q.jsx)(B.Item, { leftIconAsset: E, rightIconAsset: y, onSelect: b, children: s })),
      (t[18] = y),
      (t[19] = b),
      (t[20] = x))
    : (x = t[20]);
  let S;
  return (
    t[21] !== v || t[22] !== x || t[23] !== m
      ? ((S = (0, Q.jsxs)(ae, { align: `end`, contentWidth: `menu`, triggerButton: m, children: [v, x] })),
        (t[21] = v),
        (t[22] = x),
        (t[23] = m),
        (t[24] = S))
      : (S = t[24]),
    S
  );
}
function gt(e) {
  let t = (0, vt.c)(14),
    { allowNewThread: n, draft: r, setDraft: i } = e,
    a = n !== void 0 && n,
    o = I(),
    s;
  if (r.kind === `cron`) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(H, { ...$e.newChatEachRun })), (t[0] = e))
      : (e = t[0]),
      (s = e));
  } else if (r.targetThreadId != null) {
    let e;
    (t[1] === r.targetThreadId
      ? (e = t[2])
      : ((e = (0, Q.jsx)(_t, { threadId: r.targetThreadId })), (t[1] = r.targetThreadId), (t[2] = e)),
      (s = e));
  } else if (a && r.id == null) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(H, { ...$e.newDedicatedChat })), (t[3] = e))
      : (e = t[3]),
      (s = e));
  }
  let c;
  t[4] === o
    ? (c = t[5])
    : ((c = o.formatMessage({
        id: `settings.automations.destination.ariaLabel`,
        defaultMessage: `Scheduled task destination`,
        description: `Accessible label for choosing whether a scheduled task creates a new chat each run or continues in a specific chat`,
      })),
      (t[4] = o),
      (t[5] = c));
  let l;
  t[6] !== a || t[7] !== r || t[8] !== i
    ? ((l = (e) => (0, Q.jsx)(st, { allowNewThread: a, draft: r, setDraft: i, onClose: e })),
      (t[6] = a),
      (t[7] = r),
      (t[8] = i),
      (t[9] = l))
    : (l = t[9]);
  let u;
  return (
    t[10] !== s || t[11] !== c || t[12] !== l
      ? ((u = (0, Q.jsx)(Ye, { align: `end`, ariaLabel: c, selectedLabel: s, size: `toolbar`, children: l })),
        (t[10] = s),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u))
      : (u = t[13]),
    u
  );
}
function _t(e) {
  let { threadId: t } = e;
  return F(Ie, { hostId: `local`, threadId: W(t) }) ?? t;
}
var vt, Q;
function yt() {
  return (yt = e(() => {
    ((vt = g()),
      M(),
      U(),
      w(),
      k(),
      j(),
      V(),
      T(),
      Qe(),
      A(),
      N(),
      m(),
      fe(),
      Ne(),
      et(),
      ft(),
      mt(),
      (Q = u()));
  }))();
}
function bt(e) {
  let t = (0, St.c)(30),
    { kind: n, value: r, onChange: i } = e,
    a = I(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(H, {
        id: `settings.automations.notifications.failedRunsOnly`,
        defaultMessage: `Failed runs only`,
        description: `Automation notification policy that suppresses completed runs`,
      })),
      (t[0] = o))
    : (o = t[0]);
  let s = o,
    c;
  t[1] === a
    ? (c = t[2])
    : ((c = a.formatMessage({
        id: `settings.automations.notifications.ariaLabel`,
        defaultMessage: `Notifications`,
        description: `Aria label for automation notification policy`,
      })),
      (t[1] = a),
      (t[2] = c));
  let l;
  t[3] !== n || t[4] !== r
    ? ((l = (0, $.jsx)(`span`, {
        className: `truncate text-start text-default`,
        children: r === `failed_runs_only` ? s : (0, $.jsx)(xt, { kind: n }),
      })),
      (t[3] = n),
      (t[4] = r),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(b, { className: `icon-2xs shrink-0 text-tertiary` })), (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] !== c || t[8] !== l
    ? ((d = (0, $.jsxs)(D, {
        "aria-label": c,
        size: `composerSm`,
        color: `ghost`,
        className: `min-w-0`,
        children: [l, u],
      })),
      (t[7] = c),
      (t[8] = l),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(B.Title, {
        children: (0, $.jsx)(H, {
          id: `settings.automations.notifications.title`,
          defaultMessage: `Notifications`,
          description: `Header for automation notification policy options`,
        }),
      })),
      (t[10] = f))
    : (f = t[10]);
  let p = r == null ? K : void 0,
    m;
  t[11] === i ? (m = t[12]) : ((m = () => i(void 0)), (t[11] = i), (t[12] = m));
  let h;
  t[13] === n ? (h = t[14]) : ((h = (0, $.jsx)(xt, { kind: n })), (t[13] = n), (t[14] = h));
  let g;
  t[15] !== p || t[16] !== m || t[17] !== h
    ? ((g = (0, $.jsx)(B.Item, { rightIconAsset: p, onSelect: m, children: h })),
      (t[15] = p),
      (t[16] = m),
      (t[17] = h),
      (t[18] = g))
    : (g = t[18]);
  let _ = r === `failed_runs_only` ? K : void 0,
    v;
  t[19] === i ? (v = t[20]) : ((v = () => i(`failed_runs_only`)), (t[19] = i), (t[20] = v));
  let y;
  t[21] !== _ || t[22] !== v
    ? ((y = (0, $.jsx)(B.Item, { rightIconAsset: _, onSelect: v, children: s })),
      (t[21] = _),
      (t[22] = v),
      (t[23] = y))
    : (y = t[23]);
  let x;
  t[24] !== g || t[25] !== y
    ? ((x = (0, $.jsxs)(B.Section, { children: [g, y] })), (t[24] = g), (t[25] = y), (t[26] = x))
    : (x = t[26]);
  let S;
  return (
    t[27] !== x || t[28] !== d
      ? ((S = (0, $.jsxs)(ae, { align: `end`, triggerButton: d, children: [f, x] })),
        (t[27] = x),
        (t[28] = d),
        (t[29] = S))
      : (S = t[29]),
    S
  );
}
function xt(e) {
  let t = (0, St.c)(2),
    { kind: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r =
          n === `cron`
            ? (0, $.jsx)(H, {
                id: `settings.automations.notifications.allRuns`,
                defaultMessage: `All runs`,
                description: `Default cron automation notification behavior`,
              })
            : (0, $.jsx)(H, {
                id: `settings.automations.notifications.importantUpdates`,
                defaultMessage: `Important updates`,
                description: `Default heartbeat notification behavior`,
              })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var St, $;
function Ct() {
  return (Ct = e(() => {
    ((St = g()), M(), T(), A(), N(), c(), ($ = u()));
  }))();
}
export { yt as a, Ke as c, ht as i, Je as l, Ct as n, pt as o, gt as r, mt as s, bt as t };
//# sourceMappingURL=automation-notification-policy-dropdown-2708acfbf470.js.map
