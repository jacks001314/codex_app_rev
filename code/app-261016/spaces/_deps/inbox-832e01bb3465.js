import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  BV as i,
  DB as ee,
  DU as te,
  FBt as a,
  Ft as ne,
  It as o,
  LNt as s,
  LV as c,
  NSt as l,
  OB as u,
  PBt as d,
  Qst as f,
  RV as p,
  SB as m,
  TY as h,
  USt as g,
  VSt as _,
  Vrt as v,
  XI as y,
  XOt as b,
  Y3 as x,
  Z3 as S,
  ZI as C,
  ZSt as w,
  _D as T,
  ck as E,
  e6 as D,
  fD as re,
  gD as ie,
  hD as ae,
  iCt as O,
  mD as k,
  nB as oe,
  okt as se,
  qrt as A,
  rB as j,
  rk as M,
  tk as N,
  tkt as P,
  vH as ce,
  wB as F,
  zV as I,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $4 as le,
  $cr as ue,
  BRr as de,
  Fxn as L,
  Hlr as fe,
  MT as pe,
  Olr as me,
  Q4 as he,
  Ulr as R,
  XEn as z,
  YEn as ge,
  Ycr as _e,
  Z4 as ve,
  e3 as ye,
  gur as be,
  hdn as B,
  hen as xe,
  iRr as Se,
  iut as V,
  jT as Ce,
  jxn as we,
  mlr as H,
  pen as U,
  sRr as W,
  tut as Te,
  wLr as G,
  x0 as K,
  y0 as Ee,
} from "./app-initial-ad16eaadf81f.js";
import { n as q, t as De } from "./avatar-b3af498c99de.js";
import { i as J, n as Oe } from "./profile-card-596b3632a9d9.js";
import { n as Y, t as ke } from "./detail-section-state-45be9ee036ee.js";
import { n as X, t as Ae } from "./content-section-456efce858c0.js";
function Z(e) {
  let t = (0, Fe.c)(33),
    { defaultOpen: n, onOpenPage: r, isCurrent: ee, captureNavigationGuard: te, sidebar: a } = e,
    ne = n !== void 0 && n,
    o = a !== void 0 && a,
    s = se(),
    l = (0, Q.useId)(),
    [u, d] = (0, Q.useState)(ne),
    { data: f } = O(ve),
    h = O(R),
    g;
  t[0] !== f || t[1] !== s
    ? ((g = f
        ? s.formatMessage({
            id: `codex.pages.mentions.activityUnread`,
            defaultMessage: `Activity, unread notifications`,
            description: `Accessible label for the Space activity bell when there are unread notifications`,
          })
        : s.formatMessage({
            id: `codex.pages.mentions.activity`,
            defaultMessage: `Activity`,
            description: `Accessible label for the Space activity bell`,
          })),
      (t[0] = f),
      (t[1] = s),
      (t[2] = g))
    : (g = t[2]);
  let _ = g,
    v = f ? i : p,
    y = f ? `[--blue-400:var(--color-background-info-solid)]` : void 0,
    b;
  t[3] !== v || t[4] !== f || t[5] !== y || t[6] !== o || t[7] !== h
    ? ((b =
        o || h
          ? (0, $.jsx)(m, { className: y, icon: f ? { 16: I, 20: i } : { 16: c, 20: p } })
          : (0, $.jsx)(v, { className: y })),
      (t[3] = v),
      (t[4] = f),
      (t[5] = y),
      (t[6] = o),
      (t[7] = h),
      (t[8] = b))
    : (b = t[8]);
  let S = b,
    C;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(P, {
        id: `codex.pages.mentions.activity`,
        defaultMessage: `Activity`,
        description: `Accessible label for the Space activity bell`,
      })),
      (t[9] = C))
    : (C = t[9]);
  let w;
  t[10] !== S || t[11] !== _ || t[12] !== o
    ? ((w = (0, $.jsx)(oe, {
        cloneCustomTrigger: !0,
        tooltipContent: C,
        children: (0, $.jsx)(ie, {
          asChild: !0,
          children: o
            ? (0, $.jsx)(we, { "aria-label": _, uniform: !0, children: S })
            : (0, $.jsx)(x, {
                color: `ghost`,
                size: `inputIcon`,
                radius: `full`,
                "aria-label": _,
                children: S,
              }),
        }),
      })),
      (t[10] = S),
      (t[11] = _),
      (t[12] = o),
      (t[13] = w))
    : (w = t[13]);
  let T = o ? `start` : `end`,
    E;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(P, {
        id: `space.activity.title`,
        defaultMessage: `Activity`,
        description: `Heading for the activity feed on Space home`,
      })),
      (t[14] = E))
    : (E = t[14]);
  let D;
  t[15] === l
    ? (D = t[16])
    : ((D = (0, $.jsx)(ae, { id: l, className: `sr-only`, children: E })), (t[15] = l), (t[16] = D));
  let A;
  t[17] !== te || t[18] !== ee || t[19] !== r || t[20] !== u
    ? ((A = u
        ? (0, $.jsx)(je, { onOpen: () => d(!1), onOpenPage: r, isCurrent: ee, captureNavigationGuard: te })
        : null),
      (t[17] = te),
      (t[18] = ee),
      (t[19] = r),
      (t[20] = u),
      (t[21] = A))
    : (A = t[21]);
  let j;
  t[22] !== A || t[23] !== D
    ? ((j = (0, $.jsxs)(`div`, { className: `flex flex-col`, children: [D, A] })),
      (t[22] = A),
      (t[23] = D),
      (t[24] = j))
    : (j = t[24]);
  let M;
  t[25] !== j || t[26] !== T || t[27] !== l
    ? ((M = (0, $.jsx)(k, {
        align: T,
        size: `large`,
        opaque: !0,
        disablePadding: !0,
        "aria-labelledby": l,
        children: j,
      })),
      (t[25] = j),
      (t[26] = T),
      (t[27] = l),
      (t[28] = M))
    : (M = t[28]);
  let N;
  return (
    t[29] !== u || t[30] !== M || t[31] !== w
      ? ((N = (0, $.jsxs)(re, { open: u, onOpenChange: d, children: [w, M] })),
        (t[29] = u),
        (t[30] = M),
        (t[31] = w),
        (t[32] = N))
      : (N = t[32]),
    N
  );
}
function je(e) {
  let r = (0, Fe.c)(73),
    { searchQuery: i, onOpen: a, onOpenPage: o, isCurrent: s, captureNavigationGuard: c } = e,
    l = n(f),
    u = se(),
    d = g(),
    p = _(),
    m = pe(),
    h = O(be),
    v = O(de),
    [b, S] = (0, Q.useState)(null),
    [C, w] = (0, Q.useState)(!1),
    [T, E] = (0, Q.useState)(!1),
    { data: D } = O(ve),
    re = xe(),
    ie = new Date(re).setHours(0, 0, 0, 0),
    ae = new Date(ie);
  ae.setDate(ae.getDate() - 1);
  let k = (e) => {
      let t = Date.parse(e.created_at);
      return t >= ie ? `today` : t >= ae.getTime() ? `yesterday` : `earlier`;
    },
    {
      data: oe,
      fetchNextPage: j,
      hasNextPage: F,
      isError: I,
      isFetchingNextPage: ue,
      isPending: L,
      refetch: fe,
    } = O(ye),
    he = oe?.pages.flatMap(Ne),
    R = (i ?? ``).trim().toLocaleLowerCase(),
    z = he?.filter(
      (e) =>
        (!T || e.read_at == null) &&
        (!R ||
          e.page_title.toLocaleLowerCase().includes(R) ||
          e.actor_display_name?.toLocaleLowerCase().includes(R)),
    ),
    B = i !== void 0 && !C && !R ? z?.slice(0, 3) : z,
    V;
  r[0] !== h ||
  r[1] !== c ||
  r[2] !== u ||
  r[3] !== s ||
  r[4] !== m ||
  r[5] !== p ||
  r[6] !== d ||
  r[7] !== a ||
  r[8] !== o ||
  r[9] !== b ||
  r[10] !== l ||
  r[11] !== v
    ? ((V = async (e) => {
        if (b != null || h == null) return;
        let t = c?.();
        S(e.notification_id);
        let n = () =>
          m() &&
          l.get(be) === h &&
          l.get(de) === v &&
          l.get(me) &&
          (s?.() ?? !0) &&
          (t?.() ?? !0) &&
          l.get(_e)?.key === p.key;
        try {
          if (
            (await Se.safePost(`/pages/mentions/inbox/{notification_id}/read`, {
              parameters: { path: { notification_id: e.notification_id } },
            }),
            n())
          ) {
            (l.query.invalidate(ye), l.query.invalidate(ve), a?.());
            let t = {
              blockId: e.block_id,
              threadId: e.thread_id ?? void 0,
              messageId: e.message_id ?? void 0,
              requestId: e.notification_id,
            };
            o == null ? d(y(e.page_id, t)) : o(e.page_id, { navigationTarget: t });
          }
        } catch {
          n() &&
            l
              .get(A)
              .danger(
                u.formatMessage({
                  id: `codex.pages.mentions.openError`,
                  defaultMessage: `Could not open this mention. Try again.`,
                  description: `Error when marking a Page mention notification read before navigating to its target`,
                }),
                { errorAnalytics: { toastId: `codex.pages.mentions.openError` } },
              );
        }
        m() && S(null);
      }),
      (r[0] = h),
      (r[1] = c),
      (r[2] = u),
      (r[3] = s),
      (r[4] = m),
      (r[5] = p),
      (r[6] = d),
      (r[7] = a),
      (r[8] = o),
      (r[9] = b),
      (r[10] = l),
      (r[11] = v),
      (r[12] = V))
    : (V = r[12]);
  let Ce = V,
    we = R
      ? (0, $.jsx)(P, {
          id: `codex.pages.mentions.noMatches`,
          defaultMessage: `No matching mentions`,
          description: `Empty state when loaded Page mentions do not match the search`,
        })
      : (0, $.jsx)(P, {
          id: `codex.pages.mentions.noUnreadNotifications`,
          defaultMessage: `No unread notifications`,
          description: `Empty state when no notifications remain in the unread filter`,
        }),
    H = null;
  if (B?.length === 0 && !I && !L && !F) {
    let e;
    (r[13] === we ? (e = r[14]) : ((e = (0, $.jsx)(ke, { children: we })), (r[13] = we), (r[14] = e)),
      (H = e));
  }
  let U;
  r[15] === L
    ? (U = r[16])
    : ((U = L
        ? (0, $.jsxs)(ke, {
            role: `status`,
            children: [
              (0, $.jsx)(t, { className: `icon-xs` }),
              (0, $.jsx)(P, {
                id: `codex.pages.mentions.inboxLoading`,
                defaultMessage: `Loading mentions…`,
                description: `Loading state while fetching the current workspace's Page mentions inbox`,
              }),
            ],
          })
        : null),
      (r[15] = L),
      (r[16] = U));
  let W;
  r[17] !== I || r[18] !== fe
    ? ((W = I
        ? (0, $.jsxs)(ke, {
            role: `alert`,
            tone: `danger`,
            children: [
              (0, $.jsx)(P, {
                id: `codex.pages.mentions.inboxError`,
                defaultMessage: `Could not load mentions`,
                description: `Error in the Page mentions inbox when notifications cannot be loaded`,
              }),
              (0, $.jsx)(x, {
                color: `secondary`,
                size: `compact`,
                onClick: () => {
                  fe();
                },
                children: (0, $.jsx)(P, {
                  id: `codex.pages.mentions.retry`,
                  defaultMessage: `Try again`,
                  description: `Button that retries loading Page mention notifications`,
                }),
              }),
            ],
          })
        : null),
      (r[17] = I),
      (r[18] = fe),
      (r[19] = W))
    : (W = r[19]);
  let G;
  r[20] !== H || r[21] !== U || r[22] !== W
    ? ((G = (0, $.jsxs)($.Fragment, { children: [U, W, H] })),
      (r[20] = H),
      (r[21] = U),
      (r[22] = W),
      (r[23] = G))
    : (G = r[23]);
  let K = G,
    q =
      B != null && B.length > 0
        ? (0, $.jsx)(`ul`, {
            className: `flex shrink-0 flex-col select-none`,
            children: B.map((e, t) =>
              (0, $.jsxs)(
                `li`,
                {
                  className: `border-b border-subtle`,
                  children: [
                    i === void 0 && t > 0 && k(e) !== k(B[t - 1])
                      ? (0, $.jsx)(`div`, {
                          className: `px-4 py-3 text-sm text-secondary`,
                          children: Pe(k(e)),
                        })
                      : null,
                    (0, $.jsx)(Te, {
                      surface: `flush`,
                      density: `compact`,
                      compactSecondLine: !0,
                      showDivider: !1,
                      titleWrap: !0,
                      icon:
                        e.actor_display_name == null
                          ? (0, $.jsx)(De, { size: `md`, accountUserId: e.actor_account_user_id, name: `?` })
                          : (0, $.jsx)(Oe, {
                              accountUserId: e.actor_account_user_id,
                              label: e.actor_display_name,
                              children: (0, $.jsx)(De, {
                                size: `md`,
                                accountUserId: e.actor_account_user_id,
                                name: e.actor_display_name,
                              }),
                            }),
                      isDisabled: b != null,
                      isSelected: !1,
                      onSelect: () => {
                        Ce(e);
                      },
                      secondLine: (0, $.jsx)(`span`, {
                        className: `text-xs text-secondary`,
                        children: (0, $.jsx)(Ee, { dateString: e.created_at, format: `relative` }),
                      }),
                      title: (0, $.jsx)(`span`, {
                        className: `text-sm text-default`,
                        children: (0, $.jsx)(P, {
                          id: `codex.pages.mentions.notificationSentenceWithActorProfile`,
                          defaultMessage: `{knownActor, select, true {<actorName>{actor}</actorName>} other {Someone}} mentioned you in {page}`,
                          description: `Notification sentence. actor is the person who mentioned the recipient; page is the full Page title.`,
                          values: {
                            knownActor: e.actor_display_name != null,
                            actor: e.actor_display_name,
                            actorName: (t) =>
                              e.actor_display_name == null
                                ? t
                                : (0, $.jsx)(Oe, {
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
                              "aria-label": u.formatMessage({
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
    J =
      F && (i === void 0 || C || R)
        ? (0, $.jsx)(`div`, {
            className: `flex shrink-0 flex-col gap-2`,
            children: (0, $.jsx)(x, {
              color: `secondary`,
              loading: ue,
              size: `compact`,
              onClick: () => {
                j();
              },
              children: (0, $.jsx)(P, {
                id: `codex.pages.mentions.more`,
                defaultMessage: `Show more`,
                description: `Loads the next page of mention notifications`,
              }),
            }),
          })
        : null;
  if (i === void 0) {
    if (he?.length === 0 && H != null) {
      let e;
      r[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(ee, { asset: ne })), (r[24] = e))
        : (e = r[24]);
      let t;
      return (
        r[25] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, $.jsx)(ge, {
              className: `select-none`,
              layout: `popover`,
              illustration: e,
              illustrationSize: `tile`,
              spacing: `default`,
              title: (0, $.jsx)(`h2`, {
                children: (0, $.jsx)(P, {
                  id: `codex.pages.mentions.emptyTitle`,
                  defaultMessage: `No notifications yet`,
                  description: `Heading for a completely empty Space notification history`,
                }),
              }),
              description: (0, $.jsx)(P, {
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
    let e = B?.length && B.every((e) => k(e) === `earlier`) ? null : Pe(B?.[0] == null ? `today` : k(B[0])),
      t;
    r[26] === e ? (t = r[27]) : ((t = (0, $.jsx)(`span`, { children: e })), (r[26] = e), (r[27] = t));
    let n;
    r[28] === u
      ? (n = r[29])
      : ((n = u.formatMessage({
          id: `codex.pages.mentions.filter`,
          defaultMessage: `Filter notifications`,
          description: `Open notification filter menu`,
        })),
        (r[28] = u),
        (r[29] = n));
    let i;
    r[30] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = (0, $.jsx)(te, {})), (r[30] = i)) : (i = r[30]);
    let a;
    r[31] === n
      ? (a = r[32])
      : ((a = (0, $.jsx)(x, { color: `ghost`, size: `iconCircleSm`, "aria-label": n, children: i })),
        (r[31] = n),
        (r[32] = a));
    let o = T ? `unread` : `all`,
      s;
    r[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (e) => E(e === `unread`)), (r[33] = s))
      : (s = r[33]);
    let c;
    r[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, $.jsx)(M.RadioItem, {
          value: `all`,
          children: (0, $.jsx)(P, {
            id: `codex.pages.mentions.filterAll`,
            defaultMessage: `All notifications`,
            description: `Show both read and unread Page notifications`,
          }),
        })),
        (r[34] = c))
      : (c = r[34]);
    let d;
    r[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, $.jsx)(M.RadioItem, {
          value: `unread`,
          children: (0, $.jsx)(P, {
            id: `codex.pages.mentions.filterUnread`,
            defaultMessage: `Unread only`,
            description: `Show only unread Page notifications`,
          }),
        })),
        (r[35] = d))
      : (d = r[35]);
    let f;
    r[36] === o
      ? (f = r[37])
      : ((f = (0, $.jsxs)(M.RadioGroup, { value: o, onValueChange: s, children: [c, d] })),
        (r[36] = o),
        (r[37] = f));
    let p;
    r[38] !== f || r[39] !== a
      ? ((p = (0, $.jsx)(N, { align: `end`, triggerButton: a, children: f })),
        (r[38] = f),
        (r[39] = a),
        (r[40] = p))
      : (p = r[40]);
    let m = b != null || (!D && !he?.some(Me)),
      h;
    r[41] === l ? (h = r[42]) : ((h = () => void le(l)), (r[41] = l), (r[42] = h));
    let g;
    r[43] === u
      ? (g = r[44])
      : ((g = u.formatMessage({
          id: `codex.pages.mentions.markAllRead`,
          defaultMessage: `Mark all as read`,
          description: `Mark every unread Page notification in this workspace as read`,
        })),
        (r[43] = u),
        (r[44] = g));
    let _;
    r[45] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = (0, $.jsx)(ce, {})), (r[45] = _)) : (_ = r[45]);
    let v;
    r[46] !== m || r[47] !== h || r[48] !== g
      ? ((v = (0, $.jsx)(x, {
          color: `ghost`,
          size: `iconCircleSm`,
          disabled: m,
          onClick: h,
          "aria-label": g,
          children: _,
        })),
        (r[46] = m),
        (r[47] = h),
        (r[48] = g),
        (r[49] = v))
      : (v = r[49]);
    let y;
    r[50] !== p || r[51] !== v
      ? ((y = (0, $.jsxs)(`div`, { className: `flex items-center gap-3`, children: [p, v] })),
        (r[50] = p),
        (r[51] = v),
        (r[52] = y))
      : (y = r[52]);
    let S;
    r[53] !== y || r[54] !== t
      ? ((S = (0, $.jsxs)(`div`, {
          className: `flex shrink-0 items-center justify-between border-b border-default px-4 py-3 text-sm select-none`,
          children: [t, y],
        })),
        (r[53] = y),
        (r[54] = t),
        (r[55] = S))
      : (S = r[55]);
    let C;
    r[56] !== q || r[57] !== J || r[58] !== K
      ? ((C = (0, $.jsxs)(`div`, {
          className: `flex min-h-0 flex-col gap-2 overflow-y-auto pt-1`,
          children: [K, q, J],
        })),
        (r[56] = q),
        (r[57] = J),
        (r[58] = K),
        (r[59] = C))
      : (C = r[59]);
    let w;
    return (
      r[60] !== S || r[61] !== C
        ? ((w = (0, $.jsxs)(`div`, { className: `flex max-h-96 flex-col`, children: [S, C] })),
          (r[60] = S),
          (r[61] = C),
          (r[62] = w))
        : (w = r[62]),
      w
    );
  }
  let Y;
  r[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, $.jsx)(P, {
        id: `space.activity.title`,
        defaultMessage: `Activity`,
        description: `Heading for the activity feed on Space home`,
      })),
      (r[63] = Y))
    : (Y = r[63]);
  let X;
  r[64] !== C || r[65] !== F || r[66] !== z?.length
    ? ((X =
        (z?.length ?? 0) > 3 || F
          ? (0, $.jsx)(x, {
              color: `ghost`,
              size: `toolbar`,
              onClick: () => w(!C),
              children: C
                ? (0, $.jsx)(P, {
                    id: `codex.pages.mentions.showLess`,
                    defaultMessage: `Show less`,
                    description: `Collapse the mentions preview on Space home`,
                  })
                : (0, $.jsx)(P, {
                    id: `codex.pages.mentions.viewAll`,
                    defaultMessage: `View all`,
                    description: `Expand the mentions preview on Space home`,
                  }),
            })
          : null),
      (r[64] = C),
      (r[65] = F),
      (r[66] = z?.length),
      (r[67] = X))
    : (X = r[67]);
  let Z;
  return (
    r[68] !== q || r[69] !== J || r[70] !== K || r[71] !== X
      ? ((Z = (0, $.jsxs)(Ae, { title: Y, compact: !0, actions: X, children: [K, q, J] })),
        (r[68] = q),
        (r[69] = J),
        (r[70] = K),
        (r[71] = X),
        (r[72] = Z))
      : (Z = r[72]),
    Z
  );
}
function Me(e) {
  return e.read_at == null;
}
function Ne(e) {
  return e.items;
}
function Pe(e) {
  return (0, $.jsx)(P, {
    id: `codex.pages.mentions.dateGroup`,
    defaultMessage: `{group, select, today {Today} yesterday {Yesterday} other {Earlier}}`,
    description: `Heading grouping Page notifications by their date relative to today`,
    values: { group: e },
  });
}
var Fe, Q, $;
function Ie() {
  return (Ie = e(() => {
    ((Fe = d()),
      o(),
      w(),
      C(),
      (Q = a()),
      b(),
      l(),
      G(),
      S(),
      Y(),
      E(),
      K(),
      u(),
      h(),
      z(),
      T(),
      V(),
      D(),
      F(),
      v(),
      j(),
      U(),
      ue(),
      H(),
      q(),
      J(),
      B(),
      r(),
      fe(),
      L(),
      W(),
      Ce(),
      X(),
      he(),
      ($ = s()));
  }))();
}
Ie();
export { je as PageActivityFeed, Z as PageActivityMenu };
//# sourceMappingURL=inbox-832e01bb3465.js.map
