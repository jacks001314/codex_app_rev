import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BV as n,
  Cot as r,
  IDt as i,
  Iot as a,
  Ixt as o,
  JC as s,
  Lot as c,
  MO as l,
  Mz as u,
  Nxt as d,
  Nz as f,
  Pxt as p,
  QC as m,
  Rv as h,
  TDt as g,
  TJ as _,
  VDt as v,
  Vxt as y,
  _O as b,
  _xt as x,
  cO as ee,
  fO as S,
  gO as C,
  hot as w,
  i3 as T,
  iw as E,
  jDt as D,
  jO as O,
  lot as k,
  mO as te,
  oO as ne,
  qC as A,
  r3 as j,
  sO as re,
  t3 as M,
  tw as N,
  vO as P,
  vzt as F,
  wot as I,
  xMt as L,
  yzt as R,
  zv as z,
  zxt as B,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ek as V,
  JPn as ie,
  NDr as H,
  QDr as ae,
  ROr as oe,
  Tk as U,
  XDr as W,
  XMr as se,
  XPn as ce,
  _F as G,
  _Or as le,
  eDr as K,
  hF as ue,
  hGt as de,
  hKt as fe,
  jDr as pe,
  mGt as me,
  mKt as he,
  n0 as ge,
  nDr as _e,
  oDr as ve,
  pOr as ye,
  t0 as q,
  tNr as J,
  vOr as Y,
} from "./app-initial-5851df3f6cb1.js";
import { n as be, t as xe } from "./availability-82a31f22db06.js";
import { a as Se, i as X, n as Ce, r as we, t as Te } from "./state-23139beafd87.js";
function Ee(e) {
  let n = (0, Oe.c)(39),
    { accountId: a, onClose: s } = e,
    l = o(r),
    u = v(),
    { data: d } = y(pe),
    f = (0, ke.useRef)(!1),
    p;
  n[0] !== a || n[1] !== u || n[2] !== l
    ? ((p = async () => {
        let e = l.get(se),
          t = await we(l, a);
        return l.get(ye) !== a || l.get(se) !== e
          ? !1
          : t
            ? !0
            : (l
                .get(w)
                .danger(
                  u.formatMessage({
                    id: `settings.ads.deleteError`,
                    defaultMessage: `Couldn’t delete ads data. Please try again`,
                    description: `Error toast when the request to delete ads history and topics fails`,
                  }),
                  { errorAnalytics: { toastId: `settings.ads.deleteError` } },
                ),
              !1);
      }),
      (n[0] = a),
      (n[1] = u),
      (n[2] = l),
      (n[3] = p))
    : (p = n[3]);
  let m;
  n[4] === s
    ? (m = n[5])
    : ((m = (e) => {
        e && s();
      }),
      (n[4] = s),
      (n[5] = m));
  let h;
  n[6] !== p || n[7] !== m
    ? ((h = { mutationFn: p, onSuccess: m }), (n[6] = p), (n[7] = m), (n[8] = h))
    : (h = n[8]);
  let { mutate: g, isPending: _ } = c(h),
    x;
  n[9] !== _ || n[10] !== s || n[11] !== l
    ? ((x = function () {
        _ || (f.current || ae(l, le, { action: Y.ADS_CONTROLS_ACTION_TYPE_CANCEL_DELETE_ADS_DATA }), s());
      }),
      (n[9] = _),
      (n[10] = s),
      (n[11] = l),
      (n[12] = x))
    : (x = n[12]);
  let S = x,
    T;
  n[13] === S
    ? (T = n[14])
    : ((T = (e) => {
        e || S();
      }),
      (n[13] = S),
      (n[14] = T));
  let E;
  n[15] !== _ || n[16] !== g || n[17] !== l
    ? ((E = (e) => {
        (e.preventDefault(),
          !_ &&
            ((f.current = !0),
            ae(l, le, { action: Y.ADS_CONTROLS_ACTION_TYPE_CONFIRM_DELETE_ADS_DATA }),
            g()));
      }),
      (n[15] = _),
      (n[16] = g),
      (n[17] = l),
      (n[18] = E))
    : (E = n[18]);
  let D;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Z.jsx)(ee, {
        title: (0, Z.jsx)(b, {
          children: (0, Z.jsx)(i, {
            id: `settings.ads.deleteDataTitle`,
            defaultMessage: `Delete all ads data?`,
            description: `Title asking the user to confirm permanently deleting ads history and topics`,
          }),
        }),
      })),
      (n[19] = D))
    : (D = n[19]);
  let O;
  n[20] === d?.bazaarPersonalizationUnavailable
    ? (O = n[21])
    : ((O = (0, Z.jsx)(C, {
        children: d?.bazaarPersonalizationUnavailable
          ? (0, Z.jsx)(i, {
              id: `settings.ads.deleteDataDescriptionHistory.confirmation`,
              defaultMessage: `This will permanently delete your ad history. This action cannot be undone.`,
              description: `Warning in the deletion dialog when regional restrictions mean only ad history exists`,
            })
          : (0, Z.jsx)(i, {
              id: `settings.ads.deleteDataDescriptionTopics.confirmation`,
              defaultMessage: `This will permanently delete your ads history and ads topics data. This action cannot be undone.`,
              description: `Body text explaining that deleting ads data permanently removes ads history and the saved list of ad topics used for personalization.`,
            }),
      })),
      (n[20] = d?.bazaarPersonalizationUnavailable),
      (n[21] = O));
  let k;
  n[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Z.jsx)(i, { id: `common.cancel`, defaultMessage: `Cancel`, description: `Cancel button` })),
      (n[22] = k))
    : (k = n[22]);
  let A;
  n[23] !== S || n[24] !== _
    ? ((A = (0, Z.jsx)(t, { type: `button`, color: `secondary`, disabled: _, onClick: S, children: k })),
      (n[23] = S),
      (n[24] = _),
      (n[25] = A))
    : (A = n[25]);
  let j;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Z.jsx)(i, {
        id: `settings.ads.deleteDataConfirm`,
        defaultMessage: `Delete`,
        description: `Destructive button to delete ads history and topics`,
      })),
      (n[26] = j))
    : (j = n[26]);
  let M;
  n[27] === _
    ? (M = n[28])
    : ((M = (0, Z.jsx)(t, { type: `submit`, color: `danger`, loading: _, children: j })),
      (n[27] = _),
      (n[28] = M));
  let N;
  n[29] !== A || n[30] !== M
    ? ((N = (0, Z.jsxs)(re, { children: [A, M] })), (n[29] = A), (n[30] = M), (n[31] = N))
    : (N = n[31]);
  let P;
  n[32] !== N || n[33] !== E || n[34] !== O
    ? ((P = (0, Z.jsxs)(ne, { as: `form`, className: `select-none`, onSubmit: E, children: [D, O, N] })),
      (n[32] = N),
      (n[33] = E),
      (n[34] = O),
      (n[35] = P))
    : (P = n[35]);
  let F;
  return (
    n[36] !== P || n[37] !== T
      ? ((F = (0, Z.jsx)(te, { open: !0, onOpenChange: T, children: P })),
        (n[36] = P),
        (n[37] = T),
        (n[38] = F))
      : (F = n[38]),
    F
  );
}
function De(e) {
  let n = (0, Oe.c)(33),
    { optOutEligible: a, onClose: s, onOptOut: c } = e,
    l = o(r),
    u = de(),
    d;
  n[0] === s
    ? (d = n[1])
    : ((d = (e) => {
        e || s();
      }),
      (n[0] = s),
      (n[1] = d));
  let f;
  n[2] === a
    ? (f = n[3])
    : ((f = (0, Z.jsx)(ee, {
        title: (0, Z.jsx)(b, {
          children: a
            ? (0, Z.jsx)(i, {
                id: `settings.ads.choicesTitle`,
                defaultMessage: `Choices to go ad-free`,
                description: `Title offering upgrade and reduced usage options for removing ads`,
              })
            : (0, Z.jsx)(i, {
                id: `settings.ads.upgradeTitle`,
                defaultMessage: `Upgrade to go ad-free`,
                description: `Title offering a Plus upgrade to remove ads`,
              }),
        }),
      })),
      (n[2] = a),
      (n[3] = f));
  let p;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(i, {
          id: `settings.ads.choicesDescription`,
          defaultMessage: `Ads allow for more messages with ChatGPT`,
          description: `Explains why ads increase available usage in the ad-free choices dialog`,
        }),
      })),
      (n[4] = p))
    : (p = n[4]);
  let m;
  n[5] === a
    ? (m = n[6])
    : ((m = (0, Z.jsx)(C, {
        asChild: !0,
        children: (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-4 text-sm`,
          children: [
            p,
            (0, Z.jsx)(`p`, {
              children: a
                ? (0, Z.jsx)(i, {
                    id: `settings.ads.choicesOptions`,
                    defaultMessage: `To get full access without ads, upgrade to Plus. Or, you can reduce message limits to remove ads for free.`,
                    description: `Explains the paid upgrade and free reduced-usage options for removing ads`,
                  })
                : (0, Z.jsx)(i, {
                    id: `settings.ads.upgradeOption`,
                    defaultMessage: `To get full access without ads, upgrade to Plus`,
                    description: `Explains that upgrading to Plus removes ads`,
                  }),
            }),
          ],
        }),
      })),
      (n[5] = a),
      (n[6] = m));
  let h;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(i, { id: `common.cancel`, defaultMessage: `Cancel`, description: `Cancel button` })),
      (n[7] = h))
    : (h = n[7]);
  let g;
  n[8] === s
    ? (g = n[9])
    : ((g = (0, Z.jsx)(t, { color: `secondary`, onClick: s, children: h })), (n[8] = s), (n[9] = g));
  let _;
  n[10] !== s || n[11] !== c || n[12] !== a || n[13] !== l
    ? ((_ =
        a &&
        (0, Z.jsx)(t, {
          color: `secondary`,
          onClick: () => {
            (ae(l, le, { action: Y.ADS_CONTROLS_ACTION_TYPE_CLICK_AD_FREE_REDUCE_MESSAGE_LIMITS }), c(), s());
          },
          children: (0, Z.jsx)(i, {
            id: `settings.ads.reduceLimits`,
            defaultMessage: `Reduce message limits`,
            description: `Button removing ads for free in exchange for lower message limits`,
          }),
        })),
      (n[10] = s),
      (n[11] = c),
      (n[12] = a),
      (n[13] = l),
      (n[14] = _))
    : (_ = n[14]);
  let v;
  n[15] !== s || n[16] !== u || n[17] !== l
    ? ((v = (e) => {
        (ae(l, le, { action: Y.ADS_CONTROLS_ACTION_TYPE_CLICK_AD_FREE_UPGRADE_TO_PLUS }),
          s(),
          ce({
            event: e,
            href: he({ openModalLocation: `ads_controls_change_plan`, targetPlan: `plus` }),
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          }));
      }),
      (n[15] = s),
      (n[16] = u),
      (n[17] = l),
      (n[18] = v))
    : (v = n[18]);
  let y;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsx)(i, {
        id: `settings.ads.upgradePlus`,
        defaultMessage: `Upgrade to Plus`,
        description: `Button opening ChatGPT Plus pricing from the ad-free choices dialog`,
      })),
      (n[19] = y))
    : (y = n[19]);
  let x;
  n[20] === v ? (x = n[21]) : ((x = (0, Z.jsx)(t, { onClick: v, children: y })), (n[20] = v), (n[21] = x));
  let S;
  n[22] !== x || n[23] !== g || n[24] !== _
    ? ((S = (0, Z.jsxs)(re, { children: [g, _, x] })), (n[22] = x), (n[23] = g), (n[24] = _), (n[25] = S))
    : (S = n[25]);
  let w;
  n[26] !== S || n[27] !== f || n[28] !== m
    ? ((w = (0, Z.jsxs)(ne, { className: `select-none`, children: [f, m, S] })),
      (n[26] = S),
      (n[27] = f),
      (n[28] = m),
      (n[29] = w))
    : (w = n[29]);
  let T;
  return (
    n[30] !== d || n[31] !== w
      ? ((T = (0, Z.jsx)(te, { open: !0, onOpenChange: d, children: w })),
        (n[30] = d),
        (n[31] = w),
        (n[32] = T))
      : (T = n[32]),
    T
  );
}
var Oe, ke, Z;
function Ae() {
  return (Ae = e(() => {
    ((Oe = F()),
      oe(),
      a(),
      p(),
      (ke = R()),
      D(),
      J(),
      H(),
      M(),
      P(),
      S(),
      ie(),
      k(),
      fe(),
      me(),
      W(),
      I(),
      X(),
      (Z = L()));
  }))();
}
function je(e) {
  let t = (0, ze.c)(22),
    { accountId: n } = e,
    {
      data: r,
      isError: a,
      isPending: o,
      hasNextPage: s,
      isFetchingNextPage: c,
      fetchNextPage: l,
      refetch: u,
    } = B(Te, n),
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(U.Header, {
        title: null,
        subtitle: (0, Q.jsx)(i, {
          id: `settings.ads.historyDescription`,
          defaultMessage: `See the ads you’ve viewed or interacted with. You’re always in control — you can clear your history at any time.`,
          description: `Description above the user's ads history`,
        }),
      })),
      (t[0] = d))
    : (d = t[0]);
  let f;
  t[1] !== a || t[2] !== o || t[3] !== u
    ? ((f = (o || a) && (0, Q.jsx)(Re, { isError: a, onRetry: () => void u() })),
      (t[1] = a),
      (t[2] = o),
      (t[3] = u),
      (t[4] = f))
    : (f = t[4]);
  let p;
  t[5] !== r?.pages || t[6] !== a
    ? ((p =
        r?.pages.every(Pe) &&
        !a &&
        (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-2 text-center text-sm text-secondary`,
          children: [
            (0, Q.jsx)(`p`, {
              children: (0, Q.jsx)(i, {
                id: `settings.ads.historyEmpty`,
                defaultMessage: `No ad history`,
                description: `Empty-state title when the user has no ads history`,
              }),
            }),
            (0, Q.jsx)(`p`, {
              children: (0, Q.jsx)(i, {
                id: `settings.ads.historyEmptyDescription`,
                defaultMessage: `Ads you view in ChatGPT will appear here`,
                description: `Empty-state explanation of what will be included in ads history`,
              }),
            }),
          ],
        })),
      (t[5] = r?.pages),
      (t[6] = a),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] === r?.pages ? (m = t[9]) : ((m = r?.pages.flatMap(Ne).map(Me)), (t[8] = r?.pages), (t[9] = m));
  let h;
  t[10] === m ? (h = t[11]) : ((h = (0, Q.jsx)(A, { children: m })), (t[10] = m), (t[11] = h));
  let g;
  t[12] !== l || t[13] !== s || t[14] !== a || t[15] !== c
    ? ((g = !a && (0, Q.jsx)(q, { hasNextPage: s, isFetchingNextPage: c, onLoadNextPage: () => void l() })),
      (t[12] = l),
      (t[13] = s),
      (t[14] = a),
      (t[15] = c),
      (t[16] = g))
    : (g = t[16]);
  let _;
  return (
    t[17] !== f || t[18] !== p || t[19] !== h || t[20] !== g
      ? ((_ = (0, Q.jsxs)(U, { children: [d, (0, Q.jsxs)(U.Content, { children: [f, p, h, g] })] })),
        (t[17] = f),
        (t[18] = p),
        (t[19] = h),
        (t[20] = g),
        (t[21] = _))
      : (_ = t[21]),
    _
  );
}
function Me(e) {
  return (0, Q.jsx)(
    N,
    {
      label: (0, Q.jsx)(`span`, {
        children: (0, Q.jsx)(i, {
          id: `settings.ads.historyItem`,
          defaultMessage: `{brand} — {title}`,
          description: `An ads history entry showing the advertiser brand name and ad title`,
          values: { brand: e.ad_data.advertiser_brand.name, title: e.ad_data.title },
        }),
      }),
      description: (0, Q.jsxs)(`span`, {
        className: `flex gap-2`,
        children: [
          (0, Q.jsx)(`span`, {
            children: (0, Q.jsx)(g, {
              value: e.occurred_at,
              year: `numeric`,
              month: `short`,
              day: `numeric`,
            }),
          }),
          e.action === `viewed` &&
            (0, Q.jsx)(i, {
              id: `settings.ads.viewed`,
              defaultMessage: `Viewed`,
              description: `Label for an ad the user viewed`,
            }),
          e.action === `opened` &&
            (0, Q.jsx)(i, {
              id: `settings.ads.opened`,
              defaultMessage: `Opened`,
              description: `Label for an ad the user opened`,
            }),
        ],
      }),
      control: null,
    },
    e.id,
  );
}
function Ne(e) {
  return e.history;
}
function Pe(e) {
  return e.history.length === 0;
}
function Fe(e) {
  let t = (0, ze.c)(23),
    { accountId: n } = e,
    { data: r } = y(pe),
    {
      data: a,
      isError: o,
      isLoading: s,
      hasNextPage: c,
      isFetchingNextPage: l,
      fetchNextPage: u,
      refetch: d,
    } = B(Ce, n),
    f = r != null && r.bazaarPersonalizationEnabled !== !1 && !r.bazaarPersonalizationUnavailable,
    p = f && a?.pages.some(Le);
  if (f && !p && (s || o)) {
    let e;
    t[0] === d ? (e = t[1]) : ((e = () => void d()), (t[0] = d), (t[1] = e));
    let n;
    return (
      t[2] !== o || t[3] !== e
        ? ((n = (0, Q.jsx)(Re, { isError: o, onRetry: e })), (t[2] = o), (t[3] = e), (t[4] = n))
        : (n = t[4]),
      n
    );
  }
  if (!p) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-2 text-center text-sm text-secondary`,
            children: [
              (0, Q.jsx)(`p`, {
                children: (0, Q.jsx)(i, {
                  id: `settings.ads.topicsEmptyTitle`,
                  defaultMessage: `No topics yet`,
                  description: `Empty-state title in the Ads Topics view indicating the user has no ad topics saved for personalization.`,
                }),
              }),
              (0, Q.jsx)(`p`, {
                children: (0, Q.jsx)(i, {
                  id: `settings.ads.topicsEmptyDescription`,
                  defaultMessage: `ChatGPT may use topics to make ads more relevant. Topics may be based on your activity or feedback on ads.`,
                  description: `Empty-state description explaining that topics are ad categories inferred from the user's activity in ChatGPT or feedback on ads, used for ad personalization.`,
                }),
              }),
            ],
          })),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let m;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(U.Header, {
        title: (0, Q.jsx)(i, {
          id: `settings.ads.topicsListHeader`,
          defaultMessage: `Topics inspired by your activity`,
          description: `Header above the list of ad topics inferred from the user's activity in ChatGPT, including ad feedback and chats if enabled.`,
        }),
        subtitle: (0, Q.jsx)(i, {
          id: `settings.ads.topicsDescription`,
          defaultMessage: `ChatGPT may use these topics to choose ads that are more relevant to you.`,
          description: `Description at the top of the Ads Topics view explaining that these are ad topics, or categories inferred from activity and ad feedback, used for ad personalization.`,
        }),
      })),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] !== o || t[8] !== d
    ? ((h = o && (0, Q.jsx)(Re, { isError: !0, onRetry: () => void d() })),
      (t[7] = o),
      (t[8] = d),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] === a?.pages ? (g = t[11]) : ((g = a?.pages.flatMap(Ie)), (t[10] = a?.pages), (t[11] = g));
  let _;
  t[12] === g ? (_ = t[13]) : ((_ = (0, Q.jsx)(A, { children: g })), (t[12] = g), (t[13] = _));
  let v;
  t[14] !== u || t[15] !== c || t[16] !== o || t[17] !== l
    ? ((v = !o && (0, Q.jsx)(q, { hasNextPage: c, isFetchingNextPage: l, onLoadNextPage: () => void u() })),
      (t[14] = u),
      (t[15] = c),
      (t[16] = o),
      (t[17] = l),
      (t[18] = v))
    : (v = t[18]);
  let b;
  return (
    t[19] !== h || t[20] !== _ || t[21] !== v
      ? ((b = (0, Q.jsxs)(U, { children: [m, (0, Q.jsxs)(U.Content, { children: [h, _, v] })] })),
        (t[19] = h),
        (t[20] = _),
        (t[21] = v),
        (t[22] = b))
      : (b = t[22]),
    b
  );
}
function Ie(e, t) {
  return e.preferences.map((e, n) => (0, Q.jsx)(N, { label: e.content, control: null }, `${t}:${n}`));
}
function Le(e) {
  return e.preferences.length > 0;
}
function Re(e) {
  let n = (0, ze.c)(3),
    { isError: r, onRetry: a } = e,
    o;
  return (
    n[0] !== r || n[1] !== a
      ? ((o = r
          ? (0, Q.jsxs)(`div`, {
              role: `alert`,
              className: `flex flex-col items-start gap-3 text-sm text-secondary`,
              children: [
                (0, Q.jsx)(i, {
                  id: `settings.ads.loadError`,
                  defaultMessage: `Couldn’t load ads controls. Please try again`,
                  description: `Error shown when ads settings, history, or topics cannot be loaded`,
                }),
                (0, Q.jsx)(t, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: a,
                  children: (0, Q.jsx)(i, {
                    id: `common.retry`,
                    defaultMessage: `Retry`,
                    description: `Button to retry an operation after an error`,
                  }),
                }),
              ],
            })
          : (0, Q.jsxs)(`div`, {
              role: `status`,
              className: `flex items-center gap-2 text-sm text-secondary`,
              children: [
                (0, Q.jsx)(j, {}),
                (0, Q.jsx)(i, {
                  id: `settings.ads.loading`,
                  defaultMessage: `Loading ads controls…`,
                  description: `Status while ads settings, history, or topics are being fetched`,
                }),
              ],
            })),
        (n[0] = r),
        (n[1] = a),
        (n[2] = o))
      : (o = n[2]),
    o
  );
}
var ze, Q;
function Be() {
  return (Be = e(() => {
    ((ze = F()), p(), D(), H(), M(), ge(), T(), V(), E(), s(), X(), (Q = L()));
  }))();
}
function Ve(e) {
  let a = (0, He.c)(83),
    { accountId: s, onBack: l } = e,
    f = o(r),
    p = v(),
    [g, _] = d(),
    b;
  a[0] === g ? (b = a[1]) : ((b = g.get(`view`) ?? `ads`), (a[0] = g), (a[1] = b));
  let x = b,
    ee;
  a[2] === g ? (ee = a[3]) : ((ee = g.get(`adsView`)), (a[2] = g), (a[3] = ee));
  let S = ee,
    C = x === `ads` && (S === `history` || S === `topics`) ? `ads-${S}` : x,
    { data: T, isError: E, refetch: D } = y(pe),
    k = _e(`1613860123`),
    te = _e(`1174206456`),
    ne = ve(`1648954249`),
    j;
  a[4] !== te || a[5] !== ne
    ? ((j =
        !te &&
        (!ne.get(`suppress_upsell`, !1) ||
          ne
            .get(`allowed_frontend_entry_point_locations_for_upsell_suppression`, [])
            .includes(`ads_controls_change_plan`))),
      (a[4] = te),
      (a[5] = ne),
      (a[6] = j))
    : (j = a[6]);
  let re = j,
    [M, P] = (0, Ue.useState)(null),
    F;
  a[7] !== s || a[8] !== p || a[9] !== f
    ? ((F = {
        mutationFn: async (e) => {
          let { feature: t, value: n } = e,
            r = f.get(se);
          (await Se(f, s, { feature: t, value: n })) ||
            f.get(ye) !== s ||
            f.get(se) !== r ||
            f
              .get(w)
              .danger(
                p.formatMessage({
                  id: `settings.ads.updateError`,
                  defaultMessage: `Couldn’t update ads controls. Please try again`,
                  description: `Error toast when saving an ads personalization or opt-out preference fails`,
                }),
                { errorAnalytics: { toastId: `settings.ads.updateError` } },
              );
        },
      }),
      (a[7] = s),
      (a[8] = p),
      (a[9] = f),
      (a[10] = F))
    : (F = a[10]);
  let { mutate: I, isPending: L } = c(F),
    R = T?.bazaarPersonalizationUnavailable === !0,
    z = k && T?.freeAdsOptOut === !0,
    B = C === `ads-topics` && T != null && !R && !z,
    V = C === `ads-history` && !z,
    ie,
    H;
  (a[11] !== f || a[12] !== C
    ? ((ie = () => {
        C === `ads` &&
          ae(f, le, {
            action: Y.ADS_CONTROLS_ACTION_TYPE_SCREEN_SHOWN,
            personalizationSettingsFetched: f.query.getData(pe) != null,
          });
      }),
      (H = [f, C]),
      (a[11] = f),
      (a[12] = C),
      (a[13] = ie),
      (a[14] = H))
    : ((ie = a[13]), (H = a[14])),
    (0, Ue.useEffect)(ie, H));
  let oe;
  a[15] === f
    ? (oe = a[16])
    : ((oe = function (e) {
        ae(f, le, { action: e });
      }),
      (a[15] = f),
      (a[16] = oe));
  let W = oe,
    ce;
  a[17] !== g || a[18] !== _
    ? ((ce = function (e) {
        let t = new URLSearchParams(g);
        (t.delete(`adsView`), e == null ? t.delete(`view`) : t.set(`view`, e), _(t));
      }),
      (a[17] = g),
      (a[18] = _),
      (a[19] = ce))
    : (ce = a[19]);
  let G = ce,
    K;
  a[20] === V
    ? (K = a[21])
    : ((K =
        V &&
        (0, $.jsx)(i, {
          id: `settings.ads.historyTitle`,
          defaultMessage: `Ads history`,
          description: `Heading for the list of ads viewed or opened in ChatGPT`,
        })),
      (a[20] = V),
      (a[21] = K));
  let de;
  a[22] === B
    ? (de = a[23])
    : ((de =
        B &&
        (0, $.jsx)(i, {
          id: `settings.ads.topicsTitle`,
          defaultMessage: `Topics`,
          description: `Heading at the top of the Ads Topics page, which lists ad categories used for ad personalization.`,
        })),
      (a[22] = B),
      (a[23] = de));
  let fe;
  a[24] !== V || a[25] !== B
    ? ((fe =
        !V &&
        !B &&
        (0, $.jsx)(i, {
          id: `settings.ads.settings.title`,
          defaultMessage: `Ads controls`,
          description: `Heading at the top of the advertising control settings view`,
        })),
      (a[24] = V),
      (a[25] = B),
      (a[26] = fe))
    : (fe = a[26]);
  let me;
  a[27] !== de || a[28] !== fe || a[29] !== K
    ? ((me = (0, $.jsxs)($.Fragment, { children: [K, de, fe] })),
      (a[27] = de),
      (a[28] = fe),
      (a[29] = K),
      (a[30] = me))
    : (me = a[30]);
  let he;
  a[31] !== G || a[32] !== l || a[33] !== V || a[34] !== B
    ? ((he =
        (V || B || l != null) &&
        (0, $.jsxs)(t, {
          color: `ghostActive`,
          size: `toolbar`,
          onClick: () => (V || B ? G(`ads`) : l?.()),
          children: [
            (0, $.jsx)(u, { className: `rtl:rotate-180`, asset: h }),
            (0, $.jsx)(i, {
              id: `settings.ads.back`,
              defaultMessage: `Back`,
              description: `Button returning from an ads settings page to its parent settings page`,
            }),
          ],
        })),
      (a[31] = G),
      (a[32] = l),
      (a[33] = V),
      (a[34] = B),
      (a[35] = he))
    : (he = a[35]);
  let ge;
  a[36] !== E || a[37] !== D || a[38] !== T || a[39] !== V
    ? ((ge = T == null && !V && (0, $.jsx)(Re, { isError: E, onRetry: () => void D() })),
      (a[36] = E),
      (a[37] = D),
      (a[38] = T),
      (a[39] = V),
      (a[40] = ge))
    : (ge = a[40]);
  let q;
  a[41] !== s || a[42] !== V
    ? ((q = V && (0, $.jsx)(je, { accountId: s })), (a[41] = s), (a[42] = V), (a[43] = q))
    : (q = a[43]);
  let J;
  a[44] !== s || a[45] !== T || a[46] !== B
    ? ((J = T != null && B && (0, $.jsx)(Fe, { accountId: s })),
      (a[44] = s),
      (a[45] = T),
      (a[46] = B),
      (a[47] = J))
    : (J = a[47]);
  let be;
  a[48] !== L || a[49] !== W || a[50] !== I || a[51] !== z || a[52] !== T
    ? ((be =
        T != null &&
        z &&
        (0, $.jsxs)(U, {
          children: [
            (0, $.jsx)(U.Header, {
              title: (0, $.jsx)(i, {
                id: `settings.ads.off`,
                defaultMessage: `Ads are off`,
                description: `Heading in Ads controls when the user has opted out of ads`,
              }),
              subtitle: (0, $.jsx)(i, {
                id: `settings.ads.offDescription`,
                defaultMessage: `You’re using ChatGPT ad-free with reduced usage. Expand your access by upgrading your plan or turning on ads.`,
                description: `Explanation of the reduced usage that comes with the free ad-free option`,
              }),
            }),
            (0, $.jsx)(U.Content, {
              children: (0, $.jsx)(t, {
                loading: L,
                onClick: () => {
                  (W(Y.ADS_CONTROLS_ACTION_TYPE_CLICK_TURN_ON_ADS),
                    I({ feature: `free_ads_opt_out`, value: !1 }));
                },
                children: (0, $.jsx)(i, {
                  id: `settings.ads.turnOn`,
                  defaultMessage: `Turn on ads`,
                  description: `Button enabling ads and restoring the user's normal free usage limits`,
                }),
              }),
            }),
          ],
        })),
      (a[48] = L),
      (a[49] = W),
      (a[50] = I),
      (a[51] = z),
      (a[52] = T),
      (a[53] = be))
    : (be = a[53]);
  let xe;
  a[54] !== L ||
  a[55] !== W ||
  a[56] !== I ||
  a[57] !== G ||
  a[58] !== z ||
  a[59] !== f ||
  a[60] !== T ||
  a[61] !== re ||
  a[62] !== V ||
  a[63] !== B ||
  a[64] !== R
    ? ((xe =
        !V &&
        !B &&
        !z &&
        (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(U, {
              children: (0, $.jsx)(U.Content, {
                children: (0, $.jsxs)(A, {
                  children: [
                    (0, $.jsx)(m, {
                      edgeRounding: `surface`,
                      label: (0, $.jsx)(i, {
                        id: `settings.ads.historyLink`,
                        defaultMessage: `History`,
                        description: `Link to the advertising history view`,
                      }),
                      onClick: () => {
                        (W(Y.ADS_CONTROLS_ACTION_TYPE_CLICK_HISTORY), G(`ads-history`));
                      },
                      trailing: (0, $.jsx)(n, {}),
                    }),
                    T != null &&
                      !R &&
                      (0, $.jsx)(m, {
                        edgeRounding: `surface`,
                        label: (0, $.jsx)(i, {
                          id: `settings.ads.topicsLinkLabel`,
                          defaultMessage: `Topics`,
                          description: `Link label in Ads controls that opens the Ads Topics page, which lists ad categories used for ad personalization.`,
                        }),
                        onClick: () => {
                          f.query.getData(pe)?.bazaarPersonalizationUnavailable ||
                            (W(Y.ADS_CONTROLS_ACTION_TYPE_CLICK_INTERESTS), G(`ads-topics`));
                        },
                        trailing: (0, $.jsx)(n, {}),
                      }),
                    T != null &&
                      (0, $.jsx)(N, {
                        label: (0, $.jsx)(i, {
                          id: `settings.ads.deleteDataLabel`,
                          defaultMessage: `Delete ads data`,
                          description: `Label for the destructive button in Ads settings that opens the delete-ads-data confirmation modal. Audience is end users; short, direct label with no placeholders.`,
                        }),
                        description: R
                          ? (0, $.jsx)(i, {
                              id: `settings.ads.deleteDataDescriptionHistory`,
                              defaultMessage: `Delete your ad history associated with you. This won’t delete or change your chats.`,
                              description: `Supporting description under Delete ads data when regional policy makes personalization unavailable; only history is cleared`,
                            })
                          : (0, $.jsx)(i, {
                              id: `settings.ads.deleteDataDescriptionTopics`,
                              defaultMessage: `Clear all ads history and topics data. This won't affect your chats.`,
                              description: `Button description explaining that deleting ads data clears ads history and the saved list of ad topics used for personalization without affecting chats.`,
                            }),
                        control: (0, $.jsx)(t, {
                          color: `danger`,
                          size: `toolbar`,
                          onClick: () => {
                            (W(Y.ADS_CONTROLS_ACTION_TYPE_CLICK_DELETE_ADS_DATA), P(`delete`));
                          },
                          children: (0, $.jsx)(i, {
                            id: `settings.ads.deleteDataConfirm`,
                            defaultMessage: `Delete`,
                            description: `Destructive button to delete ads history and topics`,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
            T != null &&
              (0, $.jsxs)(U, {
                children: [
                  (0, $.jsx)(U.Header, {
                    title: (0, $.jsx)(i, {
                      id: `settings.ads.personalizationTitle`,
                      defaultMessage: `Ads personalization`,
                      description: `Heading for advertising personalization settings`,
                    }),
                  }),
                  (0, $.jsx)(U.Content, {
                    children: (0, $.jsx)(A, {
                      children: (0, $.jsx)(N, {
                        label: (0, $.jsx)(i, {
                          id: `settings.ads.personalize`,
                          defaultMessage: `Personalize ads`,
                          description: `Label for the switch that allows ChatGPT to personalize ads using activity and preferences`,
                        }),
                        description: R
                          ? (0, $.jsx)(i, {
                              id: `settings.ads.personalizationUnavailableDescription`,
                              defaultMessage: `Personalized ads currently aren’t available in your region. You’ll still see ads based on limited data like general location, context, and device type.`,
                              description: `Supporting text under the disabled Personalize ads toggle when regional policy makes ad personalization unavailable. It reassures the end user that ads still use only limited contextual and device data.`,
                            })
                          : (0, $.jsx)(i, {
                              id: `settings.ads.personalizeDescription`,
                              defaultMessage: `Allow ChatGPT to use your past chats, activity, and preferences to select ads. Ads may still be based on your current chat.`,
                              description: `Explanation of what the Personalize ads switch permits and that contextual ads remain when disabled`,
                            }),
                        control: (e) =>
                          (0, $.jsx)(O, {
                            ...e,
                            checked: T.bazaarPersonalizationEnabled !== !1 && !R,
                            disabled: L,
                            "aria-disabled": R || L,
                            onChange: (e) => {
                              if (f.query.getData(pe)?.bazaarPersonalizationUnavailable) {
                                W(Y.ADS_CONTROLS_ACTION_TYPE_ATTEMPT_TOGGLE_PERSONALIZE_ADS_WHILE_DISABLED);
                                return;
                              }
                              (W(
                                e
                                  ? Y.ADS_CONTROLS_ACTION_TYPE_TOGGLE_PERSONALIZE_ADS_ON
                                  : Y.ADS_CONTROLS_ACTION_TYPE_TOGGLE_PERSONALIZE_ADS_OFF,
                              ),
                                I({ feature: `bazaar_personalization_enabled`, value: e }));
                            },
                          }),
                      }),
                    }),
                  }),
                ],
              }),
            T != null &&
              re &&
              (0, $.jsx)(U, {
                children: (0, $.jsx)(U.Content, {
                  children: (0, $.jsx)(A, {
                    children: (0, $.jsx)(N, {
                      label: (0, $.jsx)(i, {
                        id: `settings.ads.changePlanLabel`,
                        defaultMessage: `Change plan to go ad-free`,
                        description: `Row offering plan choices to remove ads`,
                      }),
                      control: (0, $.jsx)(t, {
                        color: `secondary`,
                        size: `toolbar`,
                        disabled: L,
                        onClick: () => {
                          (W(Y.ADS_CONTROLS_ACTION_TYPE_CLICK_CHANGE_PLAN_AD_FREE), P(`ad-free`));
                        },
                        children: (0, $.jsx)(i, {
                          id: `settings.ads.changePlan`,
                          defaultMessage: `Change plan`,
                          description: `Button opening the ad-free plan choices dialog`,
                        }),
                      }),
                    }),
                  }),
                }),
              }),
          ],
        })),
      (a[54] = L),
      (a[55] = W),
      (a[56] = I),
      (a[57] = G),
      (a[58] = z),
      (a[59] = f),
      (a[60] = T),
      (a[61] = re),
      (a[62] = V),
      (a[63] = B),
      (a[64] = R),
      (a[65] = xe))
    : (xe = a[65]);
  let X;
  a[66] !== s || a[67] !== M
    ? ((X = M === `delete` && (0, $.jsx)(Ee, { accountId: s, onClose: () => P(null) })),
      (a[66] = s),
      (a[67] = M),
      (a[68] = X))
    : (X = a[68]);
  let Ce;
  a[69] !== M || a[70] !== I || a[71] !== k
    ? ((Ce =
        M === `ad-free` &&
        (0, $.jsx)(De, {
          optOutEligible: k,
          onClose: () => P(null),
          onOptOut: () => I({ feature: `free_ads_opt_out`, value: !0 }),
        })),
      (a[69] = M),
      (a[70] = I),
      (a[71] = k),
      (a[72] = Ce))
    : (Ce = a[72]);
  let we;
  return (
    a[73] !== me ||
    a[74] !== he ||
    a[75] !== ge ||
    a[76] !== q ||
    a[77] !== J ||
    a[78] !== be ||
    a[79] !== xe ||
    a[80] !== X ||
    a[81] !== Ce
      ? ((we = (0, $.jsxs)(ue, { title: me, backSlot: he, children: [ge, q, J, be, xe, X, Ce] })),
        (a[73] = me),
        (a[74] = he),
        (a[75] = ge),
        (a[76] = q),
        (a[77] = J),
        (a[78] = be),
        (a[79] = xe),
        (a[80] = X),
        (a[81] = Ce),
        (a[82] = we))
      : (we = a[82]),
    we
  );
}
var He, Ue, $;
function We() {
  return (We = e(() => {
    ((He = F()),
      oe(),
      z(),
      a(),
      p(),
      (Ue = R()),
      D(),
      x(),
      J(),
      H(),
      M(),
      f(),
      _(),
      k(),
      l(),
      W(),
      I(),
      G(),
      V(),
      E(),
      s(),
      K(),
      Ae(),
      Be(),
      X(),
      ($ = L()));
  }))();
}
function Ge(e) {
  let t = (0, Ke.c)(5),
    { onBack: n } = e,
    r = y(ye),
    i = y(se),
    a = y(xe),
    o;
  return (
    t[0] !== r || t[1] !== a || t[2] !== n || t[3] !== i
      ? ((o = r == null || !a ? null : (0, qe.jsx)(Ve, { accountId: r, onBack: n }, `${r}:${i}`)),
        (t[0] = r),
        (t[1] = a),
        (t[2] = n),
        (t[3] = i),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
var Ke, qe;
function Je() {
  return (Je = e(() => {
    ((Ke = F()), p(), J(), H(), be(), We(), (qe = L()));
  }))();
}
Je();
export { Ge as AdsControlsSettings };
//# sourceMappingURL=route-d301b07bc046.js.map
