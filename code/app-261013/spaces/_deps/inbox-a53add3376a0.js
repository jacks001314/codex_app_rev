import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AH as n,
  AO as r,
  BE as i,
  CO as ee,
  Cot as a,
  Ct as te,
  Dz as o,
  Ext as s,
  HB as c,
  HE as l,
  IDt as u,
  Ixt as d,
  Mz as f,
  Nz as p,
  Pxt as m,
  RE as h,
  SV as g,
  TJ as _,
  TO as v,
  UB as y,
  UE as b,
  VB as x,
  VDt as S,
  VE as C,
  Vxt as w,
  WB as T,
  _xt as E,
  cI as D,
  cz as O,
  hot as k,
  i3 as A,
  jDt as j,
  kz as M,
  lot as N,
  r3 as ne,
  sI as P,
  sz as re,
  t3 as F,
  vzt as I,
  wot as L,
  wt as R,
  wxt as ie,
  xMt as z,
  yzt as ae,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ct as oe,
  A2 as se,
  ACn as ce,
  Bar as le,
  Dor as ue,
  Ear as B,
  FFr as de,
  J5t as fe,
  K5t as pe,
  N$ as me,
  Nvn as V,
  O2 as he,
  XMr as ge,
  Xct as _e,
  eor as H,
  iPr as ve,
  j$ as ye,
  j2 as be,
  jCn as U,
  k2 as W,
  kvn as xe,
  nT as Se,
  rT as Ce,
  sPr as G,
  tNr as K,
  tor as q,
  xsn as we,
  zFr as J,
} from "./app-initial-5851df3f6cb1.js";
import { n as Y, t as Te } from "./avatar-ed18f22a2837.js";
import { i as X, n as Ee } from "./profile-card-24cf744f537b.js";
import { n as De, t as Oe } from "./detail-section-state-e7774e5ba7f3.js";
import { n as Z, t as ke } from "./content-section-2ae5a29c188d.js";
function Ae(e) {
  let n = (0, Fe.c)(33),
    { defaultOpen: r, onOpenPage: ee, isCurrent: a, captureNavigationGuard: te, sidebar: s } = e,
    d = r !== void 0 && r,
    f = s !== void 0 && s,
    p = S(),
    m = (0, Q.useId)(),
    [g, _] = (0, Q.useState)(d),
    { data: v } = w(he),
    b = w(q),
    E;
  n[0] !== v || n[1] !== p
    ? ((E = v
        ? p.formatMessage({
            id: `codex.pages.mentions.activityUnread`,
            defaultMessage: `Activity, unread notifications`,
            description: `Accessible label for the Space activity bell when there are unread notifications`,
          })
        : p.formatMessage({
            id: `codex.pages.mentions.activity`,
            defaultMessage: `Activity`,
            description: `Accessible label for the Space activity bell`,
          })),
      (n[0] = v),
      (n[1] = p),
      (n[2] = E))
    : (E = n[2]);
  let D = E,
    O = v ? T : c,
    k = v ? `[--blue-400:var(--color-background-info-solid)]` : void 0,
    A;
  n[3] !== O || n[4] !== v || n[5] !== k || n[6] !== f || n[7] !== b
    ? ((A =
        f || b
          ? (0, $.jsx)(o, { className: k, icon: v ? { 16: y, 20: T } : { 16: x, 20: c } })
          : (0, $.jsx)(O, { className: k })),
      (n[3] = O),
      (n[4] = v),
      (n[5] = k),
      (n[6] = f),
      (n[7] = b),
      (n[8] = A))
    : (A = n[8]);
  let j = A,
    M;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(u, {
        id: `codex.pages.mentions.activity`,
        defaultMessage: `Activity`,
        description: `Accessible label for the Space activity bell`,
      })),
      (n[9] = M))
    : (M = n[9]);
  let N;
  n[10] !== j || n[11] !== D || n[12] !== f
    ? ((N = (0, $.jsx)(re, {
        cloneCustomTrigger: !0,
        tooltipContent: M,
        children: (0, $.jsx)(l, {
          asChild: !0,
          children: f
            ? (0, $.jsx)(xe, { "aria-label": D, uniform: !0, children: j })
            : (0, $.jsx)(t, {
                color: `ghost`,
                size: `inputIcon`,
                radius: `full`,
                "aria-label": D,
                children: j,
              }),
        }),
      })),
      (n[10] = j),
      (n[11] = D),
      (n[12] = f),
      (n[13] = N))
    : (N = n[13]);
  let ne = f ? `start` : `end`,
    P;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(u, {
        id: `space.activity.title`,
        defaultMessage: `Activity`,
        description: `Heading for the activity feed on Space home`,
      })),
      (n[14] = P))
    : (P = n[14]);
  let F;
  n[15] === m
    ? (F = n[16])
    : ((F = (0, $.jsx)(C, { id: m, className: `sr-only`, children: P })), (n[15] = m), (n[16] = F));
  let I;
  n[17] !== te || n[18] !== a || n[19] !== ee || n[20] !== g
    ? ((I = g
        ? (0, $.jsx)(je, { onOpen: () => _(!1), onOpenPage: ee, isCurrent: a, captureNavigationGuard: te })
        : null),
      (n[17] = te),
      (n[18] = a),
      (n[19] = ee),
      (n[20] = g),
      (n[21] = I))
    : (I = n[21]);
  let L;
  n[22] !== I || n[23] !== F
    ? ((L = (0, $.jsxs)(`div`, { className: `flex flex-col`, children: [F, I] })),
      (n[22] = I),
      (n[23] = F),
      (n[24] = L))
    : (L = n[24]);
  let R;
  n[25] !== L || n[26] !== ne || n[27] !== m
    ? ((R = (0, $.jsx)(i, {
        align: ne,
        size: `large`,
        opaque: !0,
        disablePadding: !0,
        "aria-labelledby": m,
        children: L,
      })),
      (n[25] = L),
      (n[26] = ne),
      (n[27] = m),
      (n[28] = R))
    : (R = n[28]);
  let ie;
  return (
    n[29] !== g || n[30] !== R || n[31] !== N
      ? ((ie = (0, $.jsxs)(h, { open: g, onOpenChange: _, children: [N, R] })),
        (n[29] = g),
        (n[30] = R),
        (n[31] = N),
        (n[32] = ie))
      : (ie = n[32]),
    ie
  );
}
function je(e) {
  let r = (0, Fe.c)(73),
    { searchQuery: i, onOpen: o, onOpenPage: c, isCurrent: l, captureNavigationGuard: p } = e,
    m = d(a),
    h = S(),
    _ = s(),
    y = ie(),
    b = Ce(),
    x = w(ue),
    C = w(ge),
    [T, E] = (0, Q.useState)(null),
    [D, O] = (0, Q.useState)(!1),
    [A, j] = (0, Q.useState)(!1),
    { data: M } = w(he),
    N = fe(),
    re = new Date(N).setHours(0, 0, 0, 0),
    F = new Date(re);
  F.setDate(F.getDate() - 1);
  let I = (e) => {
      let t = Date.parse(e.created_at);
      return t >= re ? `today` : t >= F.getTime() ? `yesterday` : `earlier`;
    },
    {
      data: L,
      fetchNextPage: R,
      hasNextPage: z,
      isError: ae,
      isFetchingNextPage: oe,
      isPending: B,
      refetch: pe,
    } = w(be),
    me = L?.pages.flatMap(Ne),
    V = (i ?? ``).trim().toLocaleLowerCase(),
    H = me?.filter(
      (e) =>
        (!A || e.read_at == null) &&
        (!V ||
          e.page_title.toLocaleLowerCase().includes(V) ||
          e.actor_display_name?.toLocaleLowerCase().includes(V)),
    ),
    U = i !== void 0 && !D && !V ? H?.slice(0, 3) : H,
    W;
  r[0] !== x ||
  r[1] !== p ||
  r[2] !== h ||
  r[3] !== l ||
  r[4] !== b ||
  r[5] !== y ||
  r[6] !== _ ||
  r[7] !== o ||
  r[8] !== c ||
  r[9] !== T ||
  r[10] !== m ||
  r[11] !== C
    ? ((W = async (e) => {
        if (T != null || x == null) return;
        let t = p?.();
        E(e.notification_id);
        let n = () =>
          b() &&
          m.get(ue) === x &&
          m.get(ge) === C &&
          m.get(le) &&
          (l?.() ?? !0) &&
          (t?.() ?? !0) &&
          m.get(de)?.key === y.key;
        try {
          if (
            (await ve.safePost(`/pages/mentions/inbox/{notification_id}/read`, {
              parameters: { path: { notification_id: e.notification_id } },
            }),
            n())
          ) {
            (m.query.invalidate(be), m.query.invalidate(he), o?.());
            let t = {
              blockId: e.block_id,
              threadId: e.thread_id ?? void 0,
              messageId: e.message_id ?? void 0,
              requestId: e.notification_id,
            };
            c == null ? _(P(e.page_id, t)) : c(e.page_id, { navigationTarget: t });
          }
        } catch {
          n() &&
            m
              .get(k)
              .danger(
                h.formatMessage({
                  id: `codex.pages.mentions.openError`,
                  defaultMessage: `Could not open this mention. Try again.`,
                  description: `Error when marking a Page mention notification read before navigating to its target`,
                }),
                { errorAnalytics: { toastId: `codex.pages.mentions.openError` } },
              );
        }
        b() && E(null);
      }),
      (r[0] = x),
      (r[1] = p),
      (r[2] = h),
      (r[3] = l),
      (r[4] = b),
      (r[5] = y),
      (r[6] = _),
      (r[7] = o),
      (r[8] = c),
      (r[9] = T),
      (r[10] = m),
      (r[11] = C),
      (r[12] = W))
    : (W = r[12]);
  let xe = W,
    Se = V
      ? (0, $.jsx)(u, {
          id: `codex.pages.mentions.noMatches`,
          defaultMessage: `No matching mentions`,
          description: `Empty state when loaded Page mentions do not match the search`,
        })
      : (0, $.jsx)(u, {
          id: `codex.pages.mentions.noUnreadNotifications`,
          defaultMessage: `No unread notifications`,
          description: `Empty state when no notifications remain in the unread filter`,
        }),
    G = null;
  if (U?.length === 0 && !ae && !B && !z) {
    let e;
    (r[13] === Se ? (e = r[14]) : ((e = (0, $.jsx)(Oe, { children: Se })), (r[13] = Se), (r[14] = e)),
      (G = e));
  }
  let K;
  r[15] === B
    ? (K = r[16])
    : ((K = B
        ? (0, $.jsxs)(Oe, {
            role: `status`,
            children: [
              (0, $.jsx)(ne, { className: `icon-xs` }),
              (0, $.jsx)(u, {
                id: `codex.pages.mentions.inboxLoading`,
                defaultMessage: `Loading mentions…`,
                description: `Loading state while fetching the current workspace's Page mentions inbox`,
              }),
            ],
          })
        : null),
      (r[15] = B),
      (r[16] = K));
  let q;
  r[17] !== ae || r[18] !== pe
    ? ((q = ae
        ? (0, $.jsxs)(Oe, {
            role: `alert`,
            tone: `danger`,
            children: [
              (0, $.jsx)(u, {
                id: `codex.pages.mentions.inboxError`,
                defaultMessage: `Could not load mentions`,
                description: `Error in the Page mentions inbox when notifications cannot be loaded`,
              }),
              (0, $.jsx)(t, {
                color: `secondary`,
                size: `compact`,
                onClick: () => {
                  pe();
                },
                children: (0, $.jsx)(u, {
                  id: `codex.pages.mentions.retry`,
                  defaultMessage: `Try again`,
                  description: `Button that retries loading Page mention notifications`,
                }),
              }),
            ],
          })
        : null),
      (r[17] = ae),
      (r[18] = pe),
      (r[19] = q))
    : (q = r[19]);
  let we;
  r[20] !== G || r[21] !== K || r[22] !== q
    ? ((we = (0, $.jsxs)($.Fragment, { children: [K, q, G] })),
      (r[20] = G),
      (r[21] = K),
      (r[22] = q),
      (r[23] = we))
    : (we = r[23]);
  let J = we,
    Y =
      U != null && U.length > 0
        ? (0, $.jsx)(`ul`, {
            className: `flex shrink-0 flex-col select-none`,
            children: U.map((e, t) =>
              (0, $.jsxs)(
                `li`,
                {
                  className: `border-b border-subtle`,
                  children: [
                    i === void 0 && t > 0 && I(e) !== I(U[t - 1])
                      ? (0, $.jsx)(`div`, {
                          className: `px-4 py-3 text-sm text-secondary`,
                          children: Pe(I(e)),
                        })
                      : null,
                    (0, $.jsx)(_e, {
                      surface: `flush`,
                      density: `compact`,
                      compactSecondLine: !0,
                      showDivider: !1,
                      titleWrap: !0,
                      icon:
                        e.actor_display_name == null
                          ? (0, $.jsx)(Te, { size: `md`, accountUserId: e.actor_account_user_id, name: `?` })
                          : (0, $.jsx)(Ee, {
                              accountUserId: e.actor_account_user_id,
                              label: e.actor_display_name,
                              children: (0, $.jsx)(Te, {
                                size: `md`,
                                accountUserId: e.actor_account_user_id,
                                name: e.actor_display_name,
                              }),
                            }),
                      isDisabled: T != null,
                      isSelected: !1,
                      onSelect: () => {
                        xe(e);
                      },
                      secondLine: (0, $.jsx)(`span`, {
                        className: `text-xs text-secondary`,
                        children: (0, $.jsx)(ye, { dateString: e.created_at, format: `relative` }),
                      }),
                      title: (0, $.jsx)(`span`, {
                        className: `text-sm text-default`,
                        children: (0, $.jsx)(u, {
                          id: `codex.pages.mentions.notificationSentenceWithActorProfile`,
                          defaultMessage: `{knownActor, select, true {<actorName>{actor}</actorName>} other {Someone}} mentioned you in {page}`,
                          description: `Notification sentence. actor is the person who mentioned the recipient; page is the full Page title.`,
                          values: {
                            knownActor: e.actor_display_name != null,
                            actor: e.actor_display_name,
                            actorName: (t) =>
                              e.actor_display_name == null
                                ? t
                                : (0, $.jsx)(Ee, {
                                    accountUserId: e.actor_account_user_id,
                                    label: e.actor_display_name,
                                    children: t,
                                  }),
                            page: e.page_title,
                          },
                        }),
                      }),
                      rightText:
                        e.read_at == null
                          ? (0, $.jsx)(`span`, {
                              className: `size-2 shrink-0 rounded-full bg-chart-blue`,
                              role: `img`,
                              "aria-label": h.formatMessage({
                                id: `codex.pages.mentions.unread`,
                                defaultMessage: `Unread`,
                                description: `Accessible indication that a Page mention notification has not been read`,
                              }),
                            })
                          : null,
                    }),
                  ],
                },
                e.notification_id,
              ),
            ),
          })
        : null,
    X =
      z && (i === void 0 || D || V)
        ? (0, $.jsx)(`div`, {
            className: `flex shrink-0 flex-col gap-2`,
            children: (0, $.jsx)(t, {
              color: `secondary`,
              loading: oe,
              size: `compact`,
              onClick: () => {
                R();
              },
              children: (0, $.jsx)(u, {
                id: `codex.pages.mentions.more`,
                defaultMessage: `Show more`,
                description: `Loads the next page of mention notifications`,
              }),
            }),
          })
        : null;
  if (i === void 0) {
    if (me?.length === 0 && G != null) {
      let e;
      r[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(f, { asset: te })), (r[24] = e))
        : (e = r[24]);
      let t;
      return (
        r[25] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, $.jsx)(ce, {
              className: `select-none`,
              layout: `popover`,
              illustration: e,
              illustrationSize: `tile`,
              spacing: `default`,
              title: (0, $.jsx)(`h2`, {
                children: (0, $.jsx)(u, {
                  id: `codex.pages.mentions.emptyTitle`,
                  defaultMessage: `No notifications yet`,
                  description: `Heading for a completely empty Space notification history`,
                }),
              }),
              description: (0, $.jsx)(u, {
                id: `codex.pages.mentions.emptyDescription`,
                defaultMessage: `You’ll get notified when someone shares something with you or mentions you.`,
                description: `Explanation below the empty Space notification history`,
              }),
            })),
            (r[25] = t))
          : (t = r[25]),
        t
      );
    }
    let e = U?.length && U.every((e) => I(e) === `earlier`) ? null : Pe(U?.[0] == null ? `today` : I(U[0])),
      i;
    r[26] === e ? (i = r[27]) : ((i = (0, $.jsx)(`span`, { children: e })), (r[26] = e), (r[27] = i));
    let a;
    r[28] === h
      ? (a = r[29])
      : ((a = h.formatMessage({
          id: `codex.pages.mentions.filter`,
          defaultMessage: `Filter notifications`,
          description: `Open notification filter menu`,
        })),
        (r[28] = h),
        (r[29] = a));
    let o;
    r[30] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = (0, $.jsx)(n, {})), (r[30] = o)) : (o = r[30]);
    let s;
    r[31] === a
      ? (s = r[32])
      : ((s = (0, $.jsx)(t, { color: `ghost`, size: `iconCircleSm`, "aria-label": a, children: o })),
        (r[31] = a),
        (r[32] = s));
    let c = A ? `unread` : `all`,
      l;
    r[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (e) => j(e === `unread`)), (r[33] = l))
      : (l = r[33]);
    let d;
    r[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, $.jsx)(v.RadioItem, {
          value: `all`,
          children: (0, $.jsx)(u, {
            id: `codex.pages.mentions.filterAll`,
            defaultMessage: `All notifications`,
            description: `Show both read and unread Page notifications`,
          }),
        })),
        (r[34] = d))
      : (d = r[34]);
    let p;
    r[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = (0, $.jsx)(v.RadioItem, {
          value: `unread`,
          children: (0, $.jsx)(u, {
            id: `codex.pages.mentions.filterUnread`,
            defaultMessage: `Unread only`,
            description: `Show only unread Page notifications`,
          }),
        })),
        (r[35] = p))
      : (p = r[35]);
    let _;
    r[36] === c
      ? (_ = r[37])
      : ((_ = (0, $.jsxs)(v.RadioGroup, { value: c, onValueChange: l, children: [d, p] })),
        (r[36] = c),
        (r[37] = _));
    let y;
    r[38] !== _ || r[39] !== s
      ? ((y = (0, $.jsx)(ee, { align: `end`, triggerButton: s, children: _ })),
        (r[38] = _),
        (r[39] = s),
        (r[40] = y))
      : (y = r[40]);
    let b = T != null || (!M && !me?.some(Me)),
      x;
    r[41] === m ? (x = r[42]) : ((x = () => void se(m)), (r[41] = m), (r[42] = x));
    let S;
    r[43] === h
      ? (S = r[44])
      : ((S = h.formatMessage({
          id: `codex.pages.mentions.markAllRead`,
          defaultMessage: `Mark all as read`,
          description: `Mark every unread Page notification in this workspace as read`,
        })),
        (r[43] = h),
        (r[44] = S));
    let C;
    r[45] === Symbol.for(`react.memo_cache_sentinel`) ? ((C = (0, $.jsx)(g, {})), (r[45] = C)) : (C = r[45]);
    let w;
    r[46] !== b || r[47] !== x || r[48] !== S
      ? ((w = (0, $.jsx)(t, {
          color: `ghost`,
          size: `iconCircleSm`,
          disabled: b,
          onClick: x,
          "aria-label": S,
          children: C,
        })),
        (r[46] = b),
        (r[47] = x),
        (r[48] = S),
        (r[49] = w))
      : (w = r[49]);
    let E;
    r[50] !== y || r[51] !== w
      ? ((E = (0, $.jsxs)(`div`, { className: `flex items-center gap-3`, children: [y, w] })),
        (r[50] = y),
        (r[51] = w),
        (r[52] = E))
      : (E = r[52]);
    let D;
    r[53] !== E || r[54] !== i
      ? ((D = (0, $.jsxs)(`div`, {
          className: `flex shrink-0 items-center justify-between border-b border-default px-4 py-3 text-sm select-none`,
          children: [i, E],
        })),
        (r[53] = E),
        (r[54] = i),
        (r[55] = D))
      : (D = r[55]);
    let O;
    r[56] !== Y || r[57] !== X || r[58] !== J
      ? ((O = (0, $.jsxs)(`div`, {
          className: `flex min-h-0 flex-col gap-2 overflow-y-auto pt-1`,
          children: [J, Y, X],
        })),
        (r[56] = Y),
        (r[57] = X),
        (r[58] = J),
        (r[59] = O))
      : (O = r[59]);
    let k;
    return (
      r[60] !== D || r[61] !== O
        ? ((k = (0, $.jsxs)(`div`, { className: `flex max-h-96 flex-col`, children: [D, O] })),
          (r[60] = D),
          (r[61] = O),
          (r[62] = k))
        : (k = r[62]),
      k
    );
  }
  let De;
  r[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, $.jsx)(u, {
        id: `space.activity.title`,
        defaultMessage: `Activity`,
        description: `Heading for the activity feed on Space home`,
      })),
      (r[63] = De))
    : (De = r[63]);
  let Z;
  r[64] !== D || r[65] !== z || r[66] !== H?.length
    ? ((Z =
        (H?.length ?? 0) > 3 || z
          ? (0, $.jsx)(t, {
              color: `ghost`,
              size: `toolbar`,
              onClick: () => O(!D),
              children: D
                ? (0, $.jsx)(u, {
                    id: `codex.pages.mentions.showLess`,
                    defaultMessage: `Show less`,
                    description: `Collapse the mentions preview on Space home`,
                  })
                : (0, $.jsx)(u, {
                    id: `codex.pages.mentions.viewAll`,
                    defaultMessage: `View all`,
                    description: `Expand the mentions preview on Space home`,
                  }),
            })
          : null),
      (r[64] = D),
      (r[65] = z),
      (r[66] = H?.length),
      (r[67] = Z))
    : (Z = r[67]);
  let Ae;
  return (
    r[68] !== Y || r[69] !== X || r[70] !== J || r[71] !== Z
      ? ((Ae = (0, $.jsxs)(ke, { title: De, compact: !0, actions: Z, children: [J, Y, X] })),
        (r[68] = Y),
        (r[69] = X),
        (r[70] = J),
        (r[71] = Z),
        (r[72] = Ae))
      : (Ae = r[72]),
    Ae
  );
}
function Me(e) {
  return e.read_at == null;
}
function Ne(e) {
  return e.items;
}
function Pe(e) {
  return (0, $.jsx)(u, {
    id: `codex.pages.mentions.dateGroup`,
    defaultMessage: `{group, select, today {Today} yesterday {Yesterday} other {Earlier}}`,
    description: `Heading grouping Page notifications by their date relative to today`,
    values: { group: e },
  });
}
var Fe, Q, $;
function Ie() {
  return (Ie = e(() => {
    ((Fe = I()),
      R(),
      m(),
      D(),
      (Q = ae()),
      j(),
      E(),
      K(),
      F(),
      De(),
      r(),
      me(),
      p(),
      _(),
      U(),
      b(),
      oe(),
      A(),
      M(),
      N(),
      O(),
      pe(),
      J(),
      B(),
      Y(),
      X(),
      we(),
      L(),
      H(),
      V(),
      G(),
      Se(),
      Z(),
      W(),
      ($ = z()));
  }))();
}
Ie();
export { je as PageActivityFeed, Ae as PageActivityMenu };
//# sourceMappingURL=inbox-a53add3376a0.js.map
