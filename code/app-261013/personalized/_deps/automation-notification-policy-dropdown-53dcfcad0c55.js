import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AG as r,
  AO as i,
  BJ as a,
  CO as o,
  Cot as s,
  D0 as c,
  DV as l,
  IDt as u,
  Jbt as d,
  MV as f,
  Mz as p,
  Nz as m,
  O0 as h,
  Pxt as g,
  S4 as _,
  TJ as v,
  TO as y,
  Tk as b,
  VDt as x,
  Vxt as S,
  X$ as C,
  X1 as w,
  XD as T,
  XQ as E,
  Y$ as D,
  Y1 as O,
  YD as k,
  YQ as A,
  _Mt as j,
  _V as M,
  b0 as N,
  cz as P,
  gMt as ee,
  jDt as F,
  k_t as I,
  l0 as L,
  oSt as R,
  qG as te,
  rst as z,
  sz as ne,
  t3 as B,
  u0 as V,
  vzt as H,
  wk as re,
  wot as U,
  x4 as ie,
  xMt as W,
  y0 as G,
  yzt as K,
  zJ as q,
  zxt as J,
} from "./app-shared-bbfeca5e5737.js";
import {
  A9n as ae,
  AAr as oe,
  Cgr as se,
  Cyn as ce,
  Dbn as le,
  Dyn as ue,
  Eq as de,
  Fmr as fe,
  Grt as pe,
  H1 as me,
  M5n as he,
  MAr as ge,
  Obn as _e,
  PAr as ve,
  Pmr as ye,
  Tq as be,
  Tyn as xe,
  V1 as Se,
  Wrt as Ce,
  Zgn as we,
  dEt as Te,
  fzt as Ee,
  gSr as De,
  j5n as Oe,
  k9n as ke,
  l5n as Ae,
  mDt as je,
  nfn as Me,
  oFr as Ne,
  pDt as Pe,
  pzt as Fe,
  r8n as Ie,
  rfn as Le,
  t_n as Re,
  uEt as ze,
  ubr as Be,
  v8n as Ve,
  wgr as He,
} from "./app-initial-5851df3f6cb1.js";
import { Fl as Ue, Nl as We, Pl as Ge } from "./app-primary-fe8a450b3b04.js";
function Ke(e) {
  let n = (0, qe.c)(54),
    {
      className: r,
      selectedProjectId: i,
      projects: s,
      placeholder: l,
      projectlessActionLabel: d,
      projectlessLabel: f,
      align: p,
      showIcon: m,
      includeChats: h,
      localOnlyTooltip: g,
      onChange: _,
    } = e,
    v = p === void 0 ? `start` : p,
    b = m === void 0 || m,
    S = h === void 0 || h,
    C = x(),
    { remoteConnections: w } = Le(),
    T = pe(w).length > 0,
    E;
  n[0] !== C || n[1] !== f
    ? ((E =
        f ??
        C.formatMessage({
          id: `components.projectDropdown.projectless`,
          defaultMessage: `Chats`,
          description: `Label for selecting the chats target in the project dropdown`,
        })),
      (n[0] = C),
      (n[1] = f),
      (n[2] = E))
    : (E = n[2]);
  let O = E,
    A;
  if (n[3] !== s || n[4] !== i) {
    let e;
    (n[6] === i ? (e = n[7]) : ((e = (e) => e.projectId === i), (n[6] = i), (n[7] = e)),
      (A = s.find(e)),
      (n[3] = s),
      (n[4] = i),
      (n[5] = A));
  } else A = n[5];
  let j = A,
    M = S && i === `~`,
    N = M ? O : (j?.label ?? l),
    P = re;
  M ? (P = Ee) : j?.isCodexWorktree === !0 && (P = Pe);
  let F;
  n[8] === C
    ? (F = n[9])
    : ((F = C.formatMessage({
        id: `components.projectDropdown.ariaLabel`,
        defaultMessage: `Project`,
        description: `Aria label for project dropdown`,
      })),
      (n[8] = C),
      (n[9] = F));
  let I;
  n[10] === r ? (I = n[11]) : ((I = ee(`min-w-0`, r)), (n[10] = r), (n[11] = I));
  let L;
  n[12] !== P || n[13] !== b
    ? ((L = b ? (0, Y.jsx)(P, { className: `icon-xs shrink-0` }) : null),
      (n[12] = P),
      (n[13] = b),
      (n[14] = L))
    : (L = n[14]);
  let R;
  n[15] === N
    ? (R = n[16])
    : ((R = (0, Y.jsx)(`span`, { className: `truncate text-start text-default`, children: N })),
      (n[15] = N),
      (n[16] = R));
  let te;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Y.jsx)(k, { className: `icon-2xs shrink-0 text-tertiary` })), (n[17] = te))
    : (te = n[17]);
  let z;
  n[18] !== F || n[19] !== I || n[20] !== L || n[21] !== R
    ? ((z = (0, Y.jsxs)(t, {
        "aria-label": F,
        size: `composerSm`,
        color: `ghost`,
        className: I,
        children: [L, R, te],
      })),
      (n[18] = F),
      (n[19] = I),
      (n[20] = L),
      (n[21] = R),
      (n[22] = z))
    : (z = n[22]);
  let B;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Y.jsx)(u, {
        id: `components.projectDropdown.title`,
        defaultMessage: `Project`,
        description: `Header label above project options`,
      })),
      (n[23] = B))
    : (B = n[23]);
  let V;
  n[24] !== T || n[25] !== C || n[26] !== g
    ? ((V = T
        ? (0, Y.jsx)(ne, {
            tooltipContent: g,
            side: `top`,
            align: `center`,
            children: (0, Y.jsx)(`button`, {
              type: `button`,
              className: `inline-flex shrink-0 cursor-interaction items-center justify-center text-codex-description hover:text-default`,
              "aria-label": C.formatMessage({
                id: `components.projectDropdown.localOnlyTooltipLabel`,
                defaultMessage: `Project availability details`,
                description: `Aria label for the project local-only info tooltip trigger`,
              }),
              children: (0, Y.jsx)(ze, { className: `icon-2xs` }),
            }),
          })
        : null),
      (n[24] = T),
      (n[25] = C),
      (n[26] = g),
      (n[27] = V))
    : (V = n[27]);
  let H;
  n[28] === V
    ? (H = n[29])
    : ((H = (0, Y.jsx)(y.Title, {
        children: (0, Y.jsxs)(`div`, { className: `flex min-w-0 items-center gap-1`, children: [B, V] }),
      })),
      (n[28] = V),
      (n[29] = H));
  let U;
  if (n[30] !== _ || n[31] !== s || n[32] !== i) {
    let e;
    (n[34] !== _ || n[35] !== i
      ? ((e = (e) => {
          let t = e.isCodexWorktree === !0 ? ie : D,
            n = e.gitRepos[0]?.rootFolder,
            r = n != null && n !== e.label;
          return (0, Y.jsx)(
            y.Item,
            {
              leftIconAsset: t,
              rightIconAsset: e.projectId === i ? G : void 0,
              onSelect: () => {
                _(e.projectId);
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
        (n[34] = _),
        (n[35] = i),
        (n[36] = e))
      : (e = n[36]),
      (U = s.map(e)),
      (n[30] = _),
      (n[31] = s),
      (n[32] = i),
      (n[33] = U));
  } else U = n[33];
  let W;
  n[37] === s.length
    ? (W = n[38])
    : ((W =
        s.length === 0
          ? (0, Y.jsx)(y.Message, {
              compact: !0,
              children: (0, Y.jsx)(u, {
                id: `components.projectDropdown.empty`,
                defaultMessage: `No project folders available`,
                description: `Fallback label when no project options are available`,
              }),
            })
          : null),
      (n[37] = s.length),
      (n[38] = W));
  let K;
  n[39] !== U || n[40] !== W
    ? ((K = (0, Y.jsxs)(y.Section, {
        className: `flex flex-col [--edge-fade-distance:1.5rem]`,
        children: [U, W],
      })),
      (n[39] = U),
      (n[40] = W),
      (n[41] = K))
    : (K = n[41]);
  let q;
  n[42] !== O || n[43] !== S || n[44] !== M || n[45] !== _ || n[46] !== d
    ? ((q =
        S && (d == null || !M)
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(y.Separator, {}),
                (0, Y.jsx)(y.Section, {
                  className: `flex flex-col`,
                  children: (0, Y.jsx)(y.Item, {
                    leftIconAsset: d == null ? c : a,
                    rightIconAsset: d == null && M ? G : void 0,
                    onSelect: () => {
                      _(`~`);
                    },
                    children: d ?? O,
                  }),
                }),
              ],
            })
          : null),
      (n[42] = O),
      (n[43] = S),
      (n[44] = M),
      (n[45] = _),
      (n[46] = d),
      (n[47] = q))
    : (q = n[47]);
  let J;
  return (
    n[48] !== v || n[49] !== z || n[50] !== H || n[51] !== K || n[52] !== q
      ? ((J = (0, Y.jsxs)(o, {
          align: v,
          contentWidth: `workspace`,
          contentMaxHeight: `tall`,
          contentClassName: `pb-2`,
          triggerButton: z,
          children: [H, K, q],
        })),
        (n[48] = v),
        (n[49] = z),
        (n[50] = H),
        (n[51] = K),
        (n[52] = q),
        (n[53] = J))
      : (J = n[53]),
    J
  );
}
var qe, Y;
function Je() {
  return (Je = e(() => {
    ((qe = H()),
      _(),
      h(),
      N(),
      C(),
      q(),
      j(),
      z(),
      F(),
      Ce(),
      B(),
      i(),
      P(),
      Fe(),
      T(),
      b(),
      Te(),
      je(),
      Me(),
      (Y = W()));
  }))();
}
function Ye(e) {
  let n = (0, Xe.c)(25),
    { className: r, align: i, ariaLabel: a, children: o, defaultOpen: s, selectedLabel: c, size: l } = e,
    d = i === void 0 ? `start` : i,
    p = l === void 0 ? `composerSm` : l,
    m = x(),
    h = (0, Ze.useId)(),
    [g, _] = (0, Ze.useState)(s ?? !1),
    v;
  n[0] === r ? (v = n[1]) : ((v = ee(`min-w-0`, r)), (n[0] = r), (n[1] = v));
  let y;
  n[2] !== a || n[3] !== m
    ? ((y =
        a ??
        m.formatMessage({
          id: `threadPicker.search`,
          defaultMessage: `Search chats`,
          description: `Search input placeholder in the shared chat picker`,
        })),
      (n[2] = a),
      (n[3] = m),
      (n[4] = y))
    : (y = n[4]);
  let b;
  n[5] === c
    ? (b = n[6])
    : ((b =
        c ??
        (0, X.jsx)(u, {
          id: `threadPicker.placeholder`,
          defaultMessage: `Choose a chat`,
          description: `Placeholder for an unselected shared chat picker`,
        })),
      (n[5] = c),
      (n[6] = b));
  let S;
  n[7] !== h || n[8] !== b
    ? ((S = (0, X.jsx)(`span`, { id: h, className: `truncate text-start text-default`, children: b })),
      (n[7] = h),
      (n[8] = b),
      (n[9] = S))
    : (S = n[9]);
  let C;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, X.jsx)(f, { className: `text-tertiary` })), (n[10] = C))
    : (C = n[10]);
  let w;
  n[11] !== h || n[12] !== p || n[13] !== v || n[14] !== y || n[15] !== S
    ? ((w = (0, X.jsxs)(t, {
        className: v,
        "aria-label": y,
        "aria-describedby": h,
        color: `ghost`,
        radius: `full`,
        size: p,
        children: [S, C],
      })),
      (n[11] = h),
      (n[12] = p),
      (n[13] = v),
      (n[14] = y),
      (n[15] = S),
      (n[16] = w))
    : (w = n[16]);
  let T;
  n[17] !== o || n[18] !== g
    ? ((T = g ? o(() => _(!1)) : null), (n[17] = o), (n[18] = g), (n[19] = T))
    : (T = n[19]);
  let E;
  return (
    n[20] !== d || n[21] !== g || n[22] !== w || n[23] !== T
      ? ((E = (0, X.jsx)(We, {
          align: d,
          contentMaxHeight: `tall`,
          contentWidth: `workspace`,
          open: g,
          onOpenChange: _,
          triggerButton: w,
          children: T,
        })),
        (n[20] = d),
        (n[21] = g),
        (n[22] = w),
        (n[23] = T),
        (n[24] = E))
      : (E = n[24]),
    E
  );
}
var Xe, Ze, X;
function Qe() {
  return (Qe = e(() => {
    ((Xe = H()), j(), (Ze = K()), F(), B(), Ue(), v(), (X = W()));
  }))();
}
var $e;
function et() {
  return (et = e(() => {
    (F(),
      ($e = n({
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
    { data: r } = S(_e),
    { data: i } = S(ae),
    a = S(at),
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
        !I(e) || e.id === i || e.status !== `ACTIVE` || e.targetThreadId.trim().length === 0
          ? []
          : [e.targetThreadId],
      ),
    ),
    o = new Map(t.filter((e) => e.hostId == null || He(e.hostId)).map((e) => [String(e.id), e])),
    s = new Set(n),
    c = [...n, ...Array.from(o.keys()).filter((e) => !s.has(e))].flatMap((e) => {
      let t = o.get(e);
      return t == null ||
        rt(t) ||
        t.threadSource === `pull_request_fix_automation` ||
        fe(t.threadStartKind, t.threadSource)
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
    f = fe(l?.threadStartKind, l?.threadSource);
  return (
    r != null &&
      r.length > 0 &&
      !c.some((e) => e.threadId === r) &&
      c.unshift({
        threadId: d(l?.id ?? r),
        title: l?.title ?? r,
        createdAt: l?.createdAt ?? null,
        projectId: l?.projectId ?? null,
        projectLabel: l?.projectLabel ?? null,
        isPinned: s.has(r),
        isUnavailable: u || f || a.has(r),
      }),
    c
  );
}
function rt(e) {
  return e != null && (e.parentThreadId != null || De(e.source)?.parentThreadId != null);
}
var it, at;
function ot() {
  return (ot = e(() => {
    ((it = H()),
      Be(),
      g(),
      z(),
      Ve(),
      se(),
      ye(),
      ke(),
      U(),
      Ne(),
      Se(),
      ce(),
      we(),
      le(),
      (at = R(
        s,
        ({ get: e }) =>
          e(ue).flatMap((t) => {
            let n = e(xe, t);
            if (n?.kind !== `local` || n.conversationId == null) return [];
            let r = n.conversationId,
              i = e(Re, t);
            return [
              {
                id: r,
                title: e(me, { hostId: n.hostId ?? `local`, threadId: r }),
                createdAt: e(Ie, r) ?? n.summary?.createdAt ?? null,
                hostId: n.hostId ?? void 0,
                parentThreadId:
                  e(Ae, r) ??
                  (n.summary?.parentThreadId == null ? null : d(n.summary.parentThreadId)) ??
                  De(n.source)?.parentThreadId ??
                  null,
                source: n.source ?? void 0,
                threadSource: e(Oe, r) ?? n.summary?.threadSource ?? null,
                threadStartKind: e(he, r) ?? n.summary?.threadStartKind,
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
    { allowNewThread: n, draft: i, setDraft: a, onClose: o } = e,
    s = x(),
    c = tt(i.targetThreadId, i.id),
    d = [
      {
        id: `new-chat-each-run`,
        label: s.formatMessage($e.newChatEachRun),
        isSelected: i.kind === `cron`,
        onSelect: () => {
          a(lt);
        },
      },
      ...(n && i.id == null
        ? [
            {
              id: `new-dedicated-chat`,
              label: s.formatMessage($e.newDedicatedChat),
              isSelected: i.kind === `heartbeat` && i.targetThreadId == null,
              onSelect: () => {
                a(ct);
              },
            },
          ]
        : []),
    ],
    [f, p] = (0, dt.useState)(``),
    m = f.trim(),
    h;
  t[0] === s
    ? (h = t[1])
    : ((h = s.formatMessage({
        id: `threadPicker.search`,
        defaultMessage: `Search chats`,
        description: `Search input placeholder in the shared chat picker`,
      })),
      (t[0] = s),
      (t[1] = h));
  let g = h,
    _ = s.formatMessage({
      id: `threadPicker.otherChats`,
      defaultMessage: `Other chats`,
      description: `Heading for chats without a project in the shared chat picker`,
    }),
    v = s.formatMessage({
      id: `threadPicker.pinnedChats`,
      defaultMessage: `Pinned chats`,
      description: `Heading for pinned chats in the shared chat picker`,
    }),
    b = be(m),
    S = c.filter((e) => m.length === 0 || b(e.title) > 0 || b(e.projectLabel ?? ``) > 0),
    C = new Map();
  for (let e of S) {
    let t = `projectless`;
    e.isPinned ? (t = `pinned`) : e.projectId != null && (t = `project:${e.projectId}`);
    let n = e.isPinned ? v : e.projectLabel?.trim() || _,
      r = C.get(t);
    r == null ? C.set(t, { label: n, options: [e] }) : r.options.push(e);
  }
  let w = d.filter((e) => m.length === 0 || b(e.label) > 0),
    T;
  t[2] !== f || t[3] !== g || t[4] !== p
    ? ((T = (0, Z.jsx)(Ge.Input, { "aria-label": g, placeholder: g, value: f, onValueChange: p })),
      (t[2] = f),
      (t[3] = g),
      (t[4] = p),
      (t[5] = T))
    : (T = t[5]);
  let E;
  t[6] !== w || t[7] !== o
    ? ((E = w.map((e) =>
        (0, Z.jsx)(
          Ge.Item,
          {
            icon: (0, Z.jsx)(te, {}),
            rightIcon: e.isSelected ? (0, Z.jsx)(l, {}) : void 0,
            value: e.id,
            onSelect: () => {
              (e.onSelect(), o());
            },
            children: e.label,
          },
          e.id,
        ),
      )),
      (t[6] = w),
      (t[7] = o),
      (t[8] = E))
    : (E = t[8]);
  let D;
  t[9] !== i || t[10] !== s || t[11] !== o || t[12] !== a
    ? ((D = (e) => {
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
                  Ge.Item,
                  {
                    disabled: e.isUnavailable,
                    icon: e.isPinned ? (0, Z.jsx)(r, {}) : (0, Z.jsx)(M, {}),
                    rightIcon:
                      i.kind === `heartbeat` && e.threadId === i.targetThreadId ? (0, Z.jsx)(l, {}) : void 0,
                    value: e.threadId,
                    onSelect: () => {
                      (a((t) => ge({ draft: oe(t, `thread`), threadId: e.threadId, title: e.title })), o());
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
                              children: s.formatDate(new Date(e.createdAt), { dateStyle: `medium` }),
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
      (t[9] = i),
      (t[10] = s),
      (t[11] = o),
      (t[12] = a),
      (t[13] = D))
    : (D = t[13]);
  let O = Array.from(C, D),
    k;
  t[14] !== w.length || t[15] !== S
    ? ((k =
        w.length === 0 && S.length === 0
          ? (0, Z.jsx)(y.Message, {
              compact: !0,
              children: (0, Z.jsx)(u, {
                id: `threadPicker.noChatsFound`,
                defaultMessage: `No chats found`,
                description: `Empty state in the shared chat picker`,
              }),
            })
          : null),
      (t[14] = w.length),
      (t[15] = S),
      (t[16] = k))
    : (k = t[16]);
  let A;
  t[17] !== E || t[18] !== O || t[19] !== k
    ? ((A = (0, Z.jsxs)(Ge.List, {
        className: `flex flex-col [--edge-fade-distance:1.5rem]`,
        children: [E, O, k],
      })),
      (t[17] = E),
      (t[18] = O),
      (t[19] = k),
      (t[20] = A))
    : (A = t[20]);
  let j;
  return (
    t[21] !== g || t[22] !== T || t[23] !== A
      ? ((j = (0, Z.jsxs)(Ge.Root, { label: g, children: [T, A] })),
        (t[21] = g),
        (t[22] = T),
        (t[23] = A),
        (t[24] = j))
      : (j = t[24]),
    j
  );
}
function ct(e) {
  return { ...oe(e, `thread`), targetThreadId: null };
}
function lt(e) {
  return oe(e, `new-task`);
}
var ut, dt, Z;
function ft() {
  return (ft = e(() => {
    ((ut = H()), (dt = K()), F(), de(), Ue(), i(), v(), et(), ve(), ot(), (Z = W()));
  }))();
}
var pt;
function mt() {
  return (mt = e(() => {
    (F(),
      (pt = n({
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
  let n = (0, vt.c)(25),
    { selectedLocation: r, onSelect: i } = e,
    a = x(),
    s;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(u, { ...pt.cloud })), (n[0] = s))
    : (s = n[0]);
  let c = s,
    l;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(u, { ...pt.local })), (n[1] = l))
    : (l = n[1]);
  let d = l,
    f;
  n[2] !== a || n[3] !== r
    ? ((f = a.formatMessage(
        {
          id: `inbox.automations.executionLocation.ariaLabel`,
          defaultMessage: `Runs on: {location, select, cloud {Cloud} other {This device}}`,
          description: `Accessible label for a scheduled task's selected cloud or on-device execution location`,
        },
        { location: r },
      )),
      (n[2] = a),
      (n[3] = r),
      (n[4] = f))
    : (f = n[4]);
  let m = r === `cloud` ? c : d,
    h;
  n[5] === m
    ? (h = n[6])
    : ((h = (0, Q.jsx)(`span`, { className: `truncate text-start text-default`, children: m })),
      (n[5] = m),
      (n[6] = h));
  let g;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Q.jsx)(p, { className: `shrink-0 text-tertiary`, "aria-hidden": !1, asset: L })), (n[7] = g))
    : (g = n[7]);
  let _;
  n[8] !== f || n[9] !== h
    ? ((_ = (0, Q.jsxs)(t, {
        "aria-label": f,
        className: `min-w-0`,
        size: `composerSm`,
        color: `ghost`,
        children: [h, g],
      })),
      (n[8] = f),
      (n[9] = h),
      (n[10] = _))
    : (_ = n[10]);
  let v = r === `local` ? G : void 0,
    b;
  n[11] === i ? (b = n[12]) : ((b = () => i(`local`)), (n[11] = i), (n[12] = b));
  let S;
  n[13] !== v || n[14] !== b
    ? ((S = (0, Q.jsx)(Q.Fragment, {
        children: (0, Q.jsx)(y.Item, { leftIconAsset: E, rightIconAsset: v, onSelect: b, children: d }),
      })),
      (n[13] = v),
      (n[14] = b),
      (n[15] = S))
    : (S = n[15]);
  let C = r === `cloud` ? G : void 0,
    w;
  n[16] === i ? (w = n[17]) : ((w = () => i(`cloud`)), (n[16] = i), (n[17] = w));
  let T;
  n[18] !== C || n[19] !== w
    ? ((T = (0, Q.jsx)(y.Item, { leftIconAsset: O, rightIconAsset: C, onSelect: w, children: c })),
      (n[18] = C),
      (n[19] = w),
      (n[20] = T))
    : (T = n[20]);
  let D;
  return (
    n[21] !== S || n[22] !== T || n[23] !== _
      ? ((D = (0, Q.jsxs)(o, { align: `end`, contentWidth: `menu`, triggerButton: _, children: [S, T] })),
        (n[21] = S),
        (n[22] = T),
        (n[23] = _),
        (n[24] = D))
      : (D = n[24]),
    D
  );
}
function gt(e) {
  let t = (0, vt.c)(14),
    { allowNewThread: n, draft: r, setDraft: i } = e,
    a = n !== void 0 && n,
    o = x(),
    s;
  if (r.kind === `cron`) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(u, { ...$e.newChatEachRun })), (t[0] = e))
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
      ? ((e = (0, Q.jsx)(u, { ...$e.newDedicatedChat })), (t[3] = e))
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
  let d;
  return (
    t[10] !== s || t[11] !== c || t[12] !== l
      ? ((d = (0, Q.jsx)(Ye, { align: `end`, ariaLabel: c, selectedLabel: s, size: `toolbar`, children: l })),
        (t[10] = s),
        (t[11] = c),
        (t[12] = l),
        (t[13] = d))
      : (d = t[13]),
    d
  );
}
function _t(e) {
  let { threadId: t } = e;
  return J(me, { hostId: `local`, threadId: d(t) }) ?? t;
}
var vt, Q;
function yt() {
  return (yt = e(() => {
    ((vt = H()),
      N(),
      V(),
      w(),
      A(),
      g(),
      z(),
      F(),
      Qe(),
      B(),
      i(),
      m(),
      Ne(),
      Se(),
      et(),
      ft(),
      mt(),
      (Q = W()));
  }))();
}
function bt(e) {
  let n = (0, St.c)(30),
    { kind: r, value: i, onChange: a } = e,
    s = x(),
    c;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(u, {
        id: `settings.automations.notifications.failedRunsOnly`,
        defaultMessage: `Failed runs only`,
        description: `Automation notification policy that suppresses completed runs`,
      })),
      (n[0] = c))
    : (c = n[0]);
  let l = c,
    d;
  n[1] === s
    ? (d = n[2])
    : ((d = s.formatMessage({
        id: `settings.automations.notifications.ariaLabel`,
        defaultMessage: `Notifications`,
        description: `Aria label for automation notification policy`,
      })),
      (n[1] = s),
      (n[2] = d));
  let f;
  n[3] !== r || n[4] !== i
    ? ((f = (0, $.jsx)(`span`, {
        className: `truncate text-start text-default`,
        children: i === `failed_runs_only` ? l : (0, $.jsx)(xt, { kind: r }),
      })),
      (n[3] = r),
      (n[4] = i),
      (n[5] = f))
    : (f = n[5]);
  let p;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(k, { className: `icon-2xs shrink-0 text-tertiary` })), (n[6] = p))
    : (p = n[6]);
  let m;
  n[7] !== d || n[8] !== f
    ? ((m = (0, $.jsxs)(t, {
        "aria-label": d,
        size: `composerSm`,
        color: `ghost`,
        className: `min-w-0`,
        children: [f, p],
      })),
      (n[7] = d),
      (n[8] = f),
      (n[9] = m))
    : (m = n[9]);
  let h;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(y.Title, {
        children: (0, $.jsx)(u, {
          id: `settings.automations.notifications.title`,
          defaultMessage: `Notifications`,
          description: `Header for automation notification policy options`,
        }),
      })),
      (n[10] = h))
    : (h = n[10]);
  let g = i == null ? G : void 0,
    _;
  n[11] === a ? (_ = n[12]) : ((_ = () => a(void 0)), (n[11] = a), (n[12] = _));
  let v;
  n[13] === r ? (v = n[14]) : ((v = (0, $.jsx)(xt, { kind: r })), (n[13] = r), (n[14] = v));
  let b;
  n[15] !== g || n[16] !== _ || n[17] !== v
    ? ((b = (0, $.jsx)(y.Item, { rightIconAsset: g, onSelect: _, children: v })),
      (n[15] = g),
      (n[16] = _),
      (n[17] = v),
      (n[18] = b))
    : (b = n[18]);
  let S = i === `failed_runs_only` ? G : void 0,
    C;
  n[19] === a ? (C = n[20]) : ((C = () => a(`failed_runs_only`)), (n[19] = a), (n[20] = C));
  let w;
  n[21] !== S || n[22] !== C
    ? ((w = (0, $.jsx)(y.Item, { rightIconAsset: S, onSelect: C, children: l })),
      (n[21] = S),
      (n[22] = C),
      (n[23] = w))
    : (w = n[23]);
  let T;
  n[24] !== b || n[25] !== w
    ? ((T = (0, $.jsxs)(y.Section, { children: [b, w] })), (n[24] = b), (n[25] = w), (n[26] = T))
    : (T = n[26]);
  let E;
  return (
    n[27] !== T || n[28] !== m
      ? ((E = (0, $.jsxs)(o, { align: `end`, triggerButton: m, children: [h, T] })),
        (n[27] = T),
        (n[28] = m),
        (n[29] = E))
      : (E = n[29]),
    E
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
            ? (0, $.jsx)(u, {
                id: `settings.automations.notifications.allRuns`,
                defaultMessage: `All runs`,
                description: `Default cron automation notification behavior`,
              })
            : (0, $.jsx)(u, {
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
    ((St = H()), N(), F(), B(), i(), T(), ($ = W()));
  }))();
}
export { yt as a, Ke as c, ht as i, Je as l, Ct as n, pt as o, gt as r, mt as s, bt as t };
//# sourceMappingURL=automation-notification-policy-dropdown-53dcfcad0c55.js.map
