import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  $St as r,
  $st as i,
  DB as a,
  FBt as o,
  HO as s,
  IH as c,
  IO as l,
  JO as u,
  KO as d,
  LNt as f,
  LO as p,
  NSt as m,
  OB as h,
  PBt as g,
  Qst as _,
  RO as v,
  TY as y,
  Vrt as b,
  WO as ee,
  WOt as x,
  XOt as S,
  XSt as C,
  Y3 as w,
  Z3 as T,
  ZSt as E,
  dy as D,
  e6 as O,
  ew as k,
  iCt as te,
  iw as A,
  lk as j,
  nCt as M,
  okt as ne,
  qO as N,
  qrt as re,
  sw as ie,
  tkt as P,
  uk as F,
  uw as I,
  uy as ae,
  vst as L,
  yst as oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BMr as se,
  BRr as ce,
  Cjr as le,
  Djr as ue,
  IMr as de,
  QF as fe,
  SRn as R,
  VMr as z,
  b2 as pe,
  bRn as me,
  cA as he,
  cNr as B,
  dBt as ge,
  dVt as V,
  eI as H,
  eMr as _e,
  nMr as U,
  sA as W,
  uBt as G,
  uVt as K,
  wLr as q,
  x2 as J,
  xMr as ve,
  xjr as ye,
  yMr as Y,
} from "./app-initial-ad16eaadf81f.js";
import { n as be, t as xe } from "./availability-575290109b23.js";
import { a as Se, i as X, n as Ce, r as we, t as Te } from "./state-d192cfa657f1.js";
function Ee(e) {
  let t = (0, Oe.c)(39),
    { accountId: n, onClose: i } = e,
    a = r(_),
    o = ne(),
    { data: s } = te(_e),
    c = (0, ke.useRef)(!1),
    u;
  t[0] !== n || t[1] !== o || t[2] !== a
    ? ((u = async () => {
        let e = a.get(ce),
          t = await we(a, n);
        return a.get(de) !== n || a.get(ce) !== e
          ? !1
          : t
            ? !0
            : (a
                .get(re)
                .danger(
                  o.formatMessage({
                    id: `settings.ads.deleteError`,
                    defaultMessage: `Couldn’t delete ads data. Please try again`,
                    description: `Error toast when the request to delete ads history and topics fails`,
                  }),
                  { errorAnalytics: { toastId: `settings.ads.deleteError` } },
                ),
              !1);
      }),
      (t[0] = n),
      (t[1] = o),
      (t[2] = a),
      (t[3] = u))
    : (u = t[3]);
  let f;
  t[4] === i
    ? (f = t[5])
    : ((f = (e) => {
        e && i();
      }),
      (t[4] = i),
      (t[5] = f));
  let m;
  t[6] !== u || t[7] !== f
    ? ((m = { mutationFn: u, onSuccess: f }), (t[6] = u), (t[7] = f), (t[8] = m))
    : (m = t[8]);
  let { mutate: h, isPending: g } = oe(m),
    y;
  t[9] !== g || t[10] !== i || t[11] !== a
    ? ((y = function () {
        g || (c.current || ve(a, se, { action: z.ADS_CONTROLS_ACTION_TYPE_CANCEL_DELETE_ADS_DATA }), i());
      }),
      (t[9] = g),
      (t[10] = i),
      (t[11] = a),
      (t[12] = y))
    : (y = t[12]);
  let b = y,
    x;
  t[13] === b
    ? (x = t[14])
    : ((x = (e) => {
        e || b();
      }),
      (t[13] = b),
      (t[14] = x));
  let S;
  t[15] !== g || t[16] !== h || t[17] !== a
    ? ((S = (e) => {
        (e.preventDefault(),
          !g &&
            ((c.current = !0),
            ve(a, se, { action: z.ADS_CONTROLS_ACTION_TYPE_CONFIRM_DELETE_ADS_DATA }),
            h()));
      }),
      (t[15] = g),
      (t[16] = h),
      (t[17] = a),
      (t[18] = S))
    : (S = t[18]);
  let C;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(v, {
        title: (0, Z.jsx)(N, {
          children: (0, Z.jsx)(P, {
            id: `settings.ads.deleteDataTitle`,
            defaultMessage: `Delete all ads data?`,
            description: `Title asking the user to confirm permanently deleting ads history and topics`,
          }),
        }),
      })),
      (t[19] = C))
    : (C = t[19]);
  let T;
  t[20] === s?.bazaarPersonalizationUnavailable
    ? (T = t[21])
    : ((T = (0, Z.jsx)(d, {
        children: s?.bazaarPersonalizationUnavailable
          ? (0, Z.jsx)(P, {
              id: `settings.ads.deleteDataDescriptionHistory.confirmation`,
              defaultMessage: `This will permanently delete your ad history. This action cannot be undone.`,
              description: `Warning in the deletion dialog when regional restrictions mean only ad history exists`,
            })
          : (0, Z.jsx)(P, {
              id: `settings.ads.deleteDataDescriptionTopics.confirmation`,
              defaultMessage: `This will permanently delete your ads history and ads topics data. This action cannot be undone.`,
              description: `Body text explaining that deleting ads data permanently removes ads history and the saved list of ad topics used for personalization.`,
            }),
      })),
      (t[20] = s?.bazaarPersonalizationUnavailable),
      (t[21] = T));
  let E;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Z.jsx)(P, { id: `common.cancel`, defaultMessage: `Cancel`, description: `Cancel button` })),
      (t[22] = E))
    : (E = t[22]);
  let D;
  t[23] !== b || t[24] !== g
    ? ((D = (0, Z.jsx)(w, { type: `button`, color: `secondary`, disabled: g, onClick: b, children: E })),
      (t[23] = b),
      (t[24] = g),
      (t[25] = D))
    : (D = t[25]);
  let O;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Z.jsx)(P, {
        id: `settings.ads.deleteDataConfirm`,
        defaultMessage: `Delete`,
        description: `Destructive button to delete ads history and topics`,
      })),
      (t[26] = O))
    : (O = t[26]);
  let k;
  t[27] === g
    ? (k = t[28])
    : ((k = (0, Z.jsx)(w, { type: `submit`, color: `danger`, loading: g, children: O })),
      (t[27] = g),
      (t[28] = k));
  let A;
  t[29] !== D || t[30] !== k
    ? ((A = (0, Z.jsxs)(p, { children: [D, k] })), (t[29] = D), (t[30] = k), (t[31] = A))
    : (A = t[31]);
  let j;
  t[32] !== A || t[33] !== S || t[34] !== T
    ? ((j = (0, Z.jsxs)(l, { as: `form`, className: `select-none`, onSubmit: S, children: [C, T, A] })),
      (t[32] = A),
      (t[33] = S),
      (t[34] = T),
      (t[35] = j))
    : (j = t[35]);
  let M;
  return (
    t[36] !== j || t[37] !== x
      ? ((M = (0, Z.jsx)(ee, { open: !0, onOpenChange: x, children: j })),
        (t[36] = j),
        (t[37] = x),
        (t[38] = M))
      : (M = t[38]),
    M
  );
}
function De(e) {
  let t = (0, Oe.c)(33),
    { optOutEligible: n, onClose: i, onOptOut: a } = e,
    o = r(_),
    s = ge(),
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = (e) => {
        e || i();
      }),
      (t[0] = i),
      (t[1] = c));
  let u;
  t[2] === n
    ? (u = t[3])
    : ((u = (0, Z.jsx)(v, {
        title: (0, Z.jsx)(N, {
          children: n
            ? (0, Z.jsx)(P, {
                id: `settings.ads.choicesTitle`,
                defaultMessage: `Choices to go ad-free`,
                description: `Title offering upgrade and reduced usage options for removing ads`,
              })
            : (0, Z.jsx)(P, {
                id: `settings.ads.upgradeTitle`,
                defaultMessage: `Upgrade to go ad-free`,
                description: `Title offering a Plus upgrade to remove ads`,
              }),
        }),
      })),
      (t[2] = n),
      (t[3] = u));
  let f;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(P, {
          id: `settings.ads.choicesDescription`,
          defaultMessage: `Ads allow for more messages with ChatGPT`,
          description: `Explains why ads increase available usage in the ad-free choices dialog`,
        }),
      })),
      (t[4] = f))
    : (f = t[4]);
  let m;
  t[5] === n
    ? (m = t[6])
    : ((m = (0, Z.jsx)(d, {
        asChild: !0,
        children: (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-4 text-sm`,
          children: [
            f,
            (0, Z.jsx)(`p`, {
              children: n
                ? (0, Z.jsx)(P, {
                    id: `settings.ads.choicesOptions`,
                    defaultMessage: `To get full access without ads, upgrade to Plus. Or, you can reduce message limits to remove ads for free.`,
                    description: `Explains the paid upgrade and free reduced-usage options for removing ads`,
                  })
                : (0, Z.jsx)(P, {
                    id: `settings.ads.upgradeOption`,
                    defaultMessage: `To get full access without ads, upgrade to Plus`,
                    description: `Explains that upgrading to Plus removes ads`,
                  }),
            }),
          ],
        }),
      })),
      (t[5] = n),
      (t[6] = m));
  let h;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(P, { id: `common.cancel`, defaultMessage: `Cancel`, description: `Cancel button` })),
      (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] === i
    ? (g = t[9])
    : ((g = (0, Z.jsx)(w, { color: `secondary`, onClick: i, children: h })), (t[8] = i), (t[9] = g));
  let y;
  t[10] !== i || t[11] !== a || t[12] !== n || t[13] !== o
    ? ((y =
        n &&
        (0, Z.jsx)(w, {
          color: `secondary`,
          onClick: () => {
            (ve(o, se, { action: z.ADS_CONTROLS_ACTION_TYPE_CLICK_AD_FREE_REDUCE_MESSAGE_LIMITS }), a(), i());
          },
          children: (0, Z.jsx)(P, {
            id: `settings.ads.reduceLimits`,
            defaultMessage: `Reduce message limits`,
            description: `Button removing ads for free in exchange for lower message limits`,
          }),
        })),
      (t[10] = i),
      (t[11] = a),
      (t[12] = n),
      (t[13] = o),
      (t[14] = y))
    : (y = t[14]);
  let b;
  t[15] !== i || t[16] !== s || t[17] !== o
    ? ((b = (e) => {
        (ve(o, se, { action: z.ADS_CONTROLS_ACTION_TYPE_CLICK_AD_FREE_UPGRADE_TO_PLUS }),
          i(),
          R({
            event: e,
            href: K({ openModalLocation: `ads_controls_change_plan`, targetPlan: `plus` }),
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          }));
      }),
      (t[15] = i),
      (t[16] = s),
      (t[17] = o),
      (t[18] = b))
    : (b = t[18]);
  let x;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsx)(P, {
        id: `settings.ads.upgradePlus`,
        defaultMessage: `Upgrade to Plus`,
        description: `Button opening ChatGPT Plus pricing from the ad-free choices dialog`,
      })),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] === b ? (S = t[21]) : ((S = (0, Z.jsx)(w, { onClick: b, children: x })), (t[20] = b), (t[21] = S));
  let C;
  t[22] !== S || t[23] !== g || t[24] !== y
    ? ((C = (0, Z.jsxs)(p, { children: [g, y, S] })), (t[22] = S), (t[23] = g), (t[24] = y), (t[25] = C))
    : (C = t[25]);
  let T;
  t[26] !== C || t[27] !== u || t[28] !== m
    ? ((T = (0, Z.jsxs)(l, { className: `select-none`, children: [u, m, C] })),
      (t[26] = C),
      (t[27] = u),
      (t[28] = m),
      (t[29] = T))
    : (T = t[29]);
  let E;
  return (
    t[30] !== c || t[31] !== T
      ? ((E = (0, Z.jsx)(ee, { open: !0, onOpenChange: c, children: T })),
        (t[30] = c),
        (t[31] = T),
        (t[32] = E))
      : (E = t[32]),
    E
  );
}
var Oe, ke, Z;
function Ae() {
  return (Ae = e(() => {
    ((Oe = g()),
      B(),
      L(),
      E(),
      (ke = o()),
      S(),
      q(),
      U(),
      T(),
      u(),
      s(),
      me(),
      b(),
      V(),
      G(),
      Y(),
      i(),
      X(),
      (Z = f()));
  }))();
}
function je(e) {
  let t = (0, ze.c)(22),
    { accountId: r } = e,
    {
      data: i,
      isError: a,
      isPending: o,
      hasNextPage: s,
      isFetchingNextPage: c,
      fetchNextPage: l,
      refetch: u,
    } = M(Te, r),
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(W.Header, {
        title: null,
        subtitle: (0, Q.jsx)(P, {
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
  t[5] !== i?.pages || t[6] !== a
    ? ((p =
        i?.pages.every(Pe) &&
        !a &&
        (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-2 text-center text-sm text-secondary`,
          children: [
            (0, Q.jsx)(`p`, {
              children: (0, Q.jsx)(P, {
                id: `settings.ads.historyEmpty`,
                defaultMessage: `No ad history`,
                description: `Empty-state title when the user has no ads history`,
              }),
            }),
            (0, Q.jsx)(`p`, {
              children: (0, Q.jsx)(P, {
                id: `settings.ads.historyEmptyDescription`,
                defaultMessage: `Ads you view in ChatGPT will appear here`,
                description: `Empty-state explanation of what will be included in ads history`,
              }),
            }),
          ],
        })),
      (t[5] = i?.pages),
      (t[6] = a),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] === i?.pages ? (m = t[9]) : ((m = i?.pages.flatMap(Ne).map(Me)), (t[8] = i?.pages), (t[9] = m));
  let h;
  t[10] === m ? (h = t[11]) : ((h = (0, Q.jsx)(n, { children: m })), (t[10] = m), (t[11] = h));
  let g;
  t[12] !== l || t[13] !== s || t[14] !== a || t[15] !== c
    ? ((g = !a && (0, Q.jsx)(pe, { hasNextPage: s, isFetchingNextPage: c, onLoadNextPage: () => void l() })),
      (t[12] = l),
      (t[13] = s),
      (t[14] = a),
      (t[15] = c),
      (t[16] = g))
    : (g = t[16]);
  let _;
  return (
    t[17] !== f || t[18] !== p || t[19] !== h || t[20] !== g
      ? ((_ = (0, Q.jsxs)(W, { children: [d, (0, Q.jsxs)(W.Content, { children: [f, p, h, g] })] })),
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
    ie,
    {
      label: (0, Q.jsx)(`span`, {
        children: (0, Q.jsx)(P, {
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
            children: (0, Q.jsx)(x, {
              value: e.occurred_at,
              year: `numeric`,
              month: `short`,
              day: `numeric`,
            }),
          }),
          e.action === `viewed` &&
            (0, Q.jsx)(P, {
              id: `settings.ads.viewed`,
              defaultMessage: `Viewed`,
              description: `Label for an ad the user viewed`,
            }),
          e.action === `opened` &&
            (0, Q.jsx)(P, {
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
    { accountId: r } = e,
    { data: i } = te(_e),
    {
      data: a,
      isError: o,
      isLoading: s,
      hasNextPage: c,
      isFetchingNextPage: l,
      fetchNextPage: u,
      refetch: d,
    } = M(Ce, r),
    f = i != null && i.bazaarPersonalizationEnabled !== !1 && !i.bazaarPersonalizationUnavailable,
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
                children: (0, Q.jsx)(P, {
                  id: `settings.ads.topicsEmptyTitle`,
                  defaultMessage: `No topics yet`,
                  description: `Empty-state title in the Ads Topics view indicating the user has no ad topics saved for personalization.`,
                }),
              }),
              (0, Q.jsx)(`p`, {
                children: (0, Q.jsx)(P, {
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
    ? ((m = (0, Q.jsx)(W.Header, {
        title: (0, Q.jsx)(P, {
          id: `settings.ads.topicsListHeader`,
          defaultMessage: `Topics inspired by your activity`,
          description: `Header above the list of ad topics inferred from the user's activity in ChatGPT, including ad feedback and chats if enabled.`,
        }),
        subtitle: (0, Q.jsx)(P, {
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
  t[12] === g ? (_ = t[13]) : ((_ = (0, Q.jsx)(n, { children: g })), (t[12] = g), (t[13] = _));
  let v;
  t[14] !== u || t[15] !== c || t[16] !== o || t[17] !== l
    ? ((v = !o && (0, Q.jsx)(pe, { hasNextPage: c, isFetchingNextPage: l, onLoadNextPage: () => void u() })),
      (t[14] = u),
      (t[15] = c),
      (t[16] = o),
      (t[17] = l),
      (t[18] = v))
    : (v = t[18]);
  let y;
  return (
    t[19] !== h || t[20] !== _ || t[21] !== v
      ? ((y = (0, Q.jsxs)(W, { children: [m, (0, Q.jsxs)(W.Content, { children: [h, _, v] })] })),
        (t[19] = h),
        (t[20] = _),
        (t[21] = v),
        (t[22] = y))
      : (y = t[22]),
    y
  );
}
function Ie(e, t) {
  return e.preferences.map((e, n) => (0, Q.jsx)(ie, { label: e.content, control: null }, `${t}:${n}`));
}
function Le(e) {
  return e.preferences.length > 0;
}
function Re(e) {
  let n = (0, ze.c)(3),
    { isError: r, onRetry: i } = e,
    a;
  return (
    n[0] !== r || n[1] !== i
      ? ((a = r
          ? (0, Q.jsxs)(`div`, {
              role: `alert`,
              className: `flex flex-col items-start gap-3 text-sm text-secondary`,
              children: [
                (0, Q.jsx)(P, {
                  id: `settings.ads.loadError`,
                  defaultMessage: `Couldn’t load ads controls. Please try again`,
                  description: `Error shown when ads settings, history, or topics cannot be loaded`,
                }),
                (0, Q.jsx)(w, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: i,
                  children: (0, Q.jsx)(P, {
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
                (0, Q.jsx)(t, {}),
                (0, Q.jsx)(P, {
                  id: `settings.ads.loading`,
                  defaultMessage: `Loading ads controls…`,
                  description: `Status while ads settings, history, or topics are being fetched`,
                }),
              ],
            })),
        (n[0] = r),
        (n[1] = i),
        (n[2] = a))
      : (a = n[2]),
    a
  );
}
var ze, Q;
function Be() {
  return (Be = e(() => {
    ((ze = g()), E(), S(), U(), T(), J(), O(), he(), I(), k(), X(), (Q = f()));
  }))();
}
function Ve(e) {
  let t = (0, He.c)(83),
    { accountId: i, onBack: o } = e,
    s = r(_),
    l = ne(),
    [u, d] = C(),
    f;
  t[0] === u ? (f = t[1]) : ((f = u.get(`view`) ?? `ads`), (t[0] = u), (t[1] = f));
  let p = f,
    m;
  t[2] === u ? (m = t[3]) : ((m = u.get(`adsView`)), (t[2] = u), (t[3] = m));
  let h = m,
    g = p === `ads` && (h === `history` || h === `topics`) ? `ads-${h}` : p,
    { data: v, isError: y, refetch: b } = te(_e),
    ee = le(`1613860123`),
    x = le(`1174206456`),
    S = ue(`1648954249`),
    T;
  t[4] !== x || t[5] !== S
    ? ((T =
        !x &&
        (!S.get(`suppress_upsell`, !1) ||
          S.get(`allowed_frontend_entry_point_locations_for_upsell_suppression`, []).includes(
            `ads_controls_change_plan`,
          ))),
      (t[4] = x),
      (t[5] = S),
      (t[6] = T))
    : (T = t[6]);
  let E = T,
    [D, O] = (0, Ue.useState)(null),
    k;
  t[7] !== i || t[8] !== l || t[9] !== s
    ? ((k = {
        mutationFn: async (e) => {
          let { feature: t, value: n } = e,
            r = s.get(ce);
          (await Se(s, i, { feature: t, value: n })) ||
            s.get(de) !== i ||
            s.get(ce) !== r ||
            s
              .get(re)
              .danger(
                l.formatMessage({
                  id: `settings.ads.updateError`,
                  defaultMessage: `Couldn’t update ads controls. Please try again`,
                  description: `Error toast when saving an ads personalization or opt-out preference fails`,
                }),
                { errorAnalytics: { toastId: `settings.ads.updateError` } },
              );
        },
      }),
      (t[7] = i),
      (t[8] = l),
      (t[9] = s),
      (t[10] = k))
    : (k = t[10]);
  let { mutate: M, isPending: N } = oe(k),
    F = v?.bazaarPersonalizationUnavailable === !0,
    I = ee && v?.freeAdsOptOut === !0,
    L = g === `ads-topics` && v != null && !F && !I,
    R = g === `ads-history` && !I,
    pe,
    me;
  (t[11] !== s || t[12] !== g
    ? ((pe = () => {
        g === `ads` &&
          ve(s, se, {
            action: z.ADS_CONTROLS_ACTION_TYPE_SCREEN_SHOWN,
            personalizationSettingsFetched: s.query.getData(_e) != null,
          });
      }),
      (me = [s, g]),
      (t[11] = s),
      (t[12] = g),
      (t[13] = pe),
      (t[14] = me))
    : ((pe = t[13]), (me = t[14])),
    (0, Ue.useEffect)(pe, me));
  let he;
  t[15] === s
    ? (he = t[16])
    : ((he = function (e) {
        ve(s, se, { action: e });
      }),
      (t[15] = s),
      (t[16] = he));
  let B = he,
    ge;
  t[17] !== u || t[18] !== d
    ? ((ge = function (e) {
        let t = new URLSearchParams(u);
        (t.delete(`adsView`), e == null ? t.delete(`view`) : t.set(`view`, e), d(t));
      }),
      (t[17] = u),
      (t[18] = d),
      (t[19] = ge))
    : (ge = t[19]);
  let V = ge,
    H;
  t[20] === R
    ? (H = t[21])
    : ((H =
        R &&
        (0, $.jsx)(P, {
          id: `settings.ads.historyTitle`,
          defaultMessage: `Ads history`,
          description: `Heading for the list of ads viewed or opened in ChatGPT`,
        })),
      (t[20] = R),
      (t[21] = H));
  let U;
  t[22] === L
    ? (U = t[23])
    : ((U =
        L &&
        (0, $.jsx)(P, {
          id: `settings.ads.topicsTitle`,
          defaultMessage: `Topics`,
          description: `Heading at the top of the Ads Topics page, which lists ad categories used for ad personalization.`,
        })),
      (t[22] = L),
      (t[23] = U));
  let G;
  t[24] !== R || t[25] !== L
    ? ((G =
        !R &&
        !L &&
        (0, $.jsx)(P, {
          id: `settings.ads.settings.title`,
          defaultMessage: `Ads controls`,
          description: `Heading at the top of the advertising control settings view`,
        })),
      (t[24] = R),
      (t[25] = L),
      (t[26] = G))
    : (G = t[26]);
  let K;
  t[27] !== U || t[28] !== G || t[29] !== H
    ? ((K = (0, $.jsxs)($.Fragment, { children: [H, U, G] })),
      (t[27] = U),
      (t[28] = G),
      (t[29] = H),
      (t[30] = K))
    : (K = t[30]);
  let q;
  t[31] !== V || t[32] !== o || t[33] !== R || t[34] !== L
    ? ((q =
        (R || L || o != null) &&
        (0, $.jsxs)(w, {
          color: `ghostActive`,
          size: `toolbar`,
          onClick: () => (R || L ? V(`ads`) : o?.()),
          children: [
            (0, $.jsx)(a, { className: `rtl:rotate-180`, asset: ae }),
            (0, $.jsx)(P, {
              id: `settings.ads.back`,
              defaultMessage: `Back`,
              description: `Button returning from an ads settings page to its parent settings page`,
            }),
          ],
        })),
      (t[31] = V),
      (t[32] = o),
      (t[33] = R),
      (t[34] = L),
      (t[35] = q))
    : (q = t[35]);
  let J;
  t[36] !== y || t[37] !== b || t[38] !== v || t[39] !== R
    ? ((J = v == null && !R && (0, $.jsx)(Re, { isError: y, onRetry: () => void b() })),
      (t[36] = y),
      (t[37] = b),
      (t[38] = v),
      (t[39] = R),
      (t[40] = J))
    : (J = t[40]);
  let ye;
  t[41] !== i || t[42] !== R
    ? ((ye = R && (0, $.jsx)(je, { accountId: i })), (t[41] = i), (t[42] = R), (t[43] = ye))
    : (ye = t[43]);
  let Y;
  t[44] !== i || t[45] !== v || t[46] !== L
    ? ((Y = v != null && L && (0, $.jsx)(Fe, { accountId: i })),
      (t[44] = i),
      (t[45] = v),
      (t[46] = L),
      (t[47] = Y))
    : (Y = t[47]);
  let be;
  t[48] !== N || t[49] !== B || t[50] !== M || t[51] !== I || t[52] !== v
    ? ((be =
        v != null &&
        I &&
        (0, $.jsxs)(W, {
          children: [
            (0, $.jsx)(W.Header, {
              title: (0, $.jsx)(P, {
                id: `settings.ads.off`,
                defaultMessage: `Ads are off`,
                description: `Heading in Ads controls when the user has opted out of ads`,
              }),
              subtitle: (0, $.jsx)(P, {
                id: `settings.ads.offDescription`,
                defaultMessage: `You’re using ChatGPT ad-free with reduced usage. Expand your access by upgrading your plan or turning on ads.`,
                description: `Explanation of the reduced usage that comes with the free ad-free option`,
              }),
            }),
            (0, $.jsx)(W.Content, {
              children: (0, $.jsx)(w, {
                loading: N,
                onClick: () => {
                  (B(z.ADS_CONTROLS_ACTION_TYPE_CLICK_TURN_ON_ADS),
                    M({ feature: `free_ads_opt_out`, value: !1 }));
                },
                children: (0, $.jsx)(P, {
                  id: `settings.ads.turnOn`,
                  defaultMessage: `Turn on ads`,
                  description: `Button enabling ads and restoring the user's normal free usage limits`,
                }),
              }),
            }),
          ],
        })),
      (t[48] = N),
      (t[49] = B),
      (t[50] = M),
      (t[51] = I),
      (t[52] = v),
      (t[53] = be))
    : (be = t[53]);
  let xe;
  t[54] !== N ||
  t[55] !== B ||
  t[56] !== M ||
  t[57] !== V ||
  t[58] !== I ||
  t[59] !== s ||
  t[60] !== v ||
  t[61] !== E ||
  t[62] !== R ||
  t[63] !== L ||
  t[64] !== F
    ? ((xe =
        !R &&
        !L &&
        !I &&
        (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(W, {
              children: (0, $.jsx)(W.Content, {
                children: (0, $.jsxs)(n, {
                  children: [
                    (0, $.jsx)(A, {
                      edgeRounding: `surface`,
                      label: (0, $.jsx)(P, {
                        id: `settings.ads.historyLink`,
                        defaultMessage: `History`,
                        description: `Link to the advertising history view`,
                      }),
                      onClick: () => {
                        (B(z.ADS_CONTROLS_ACTION_TYPE_CLICK_HISTORY), V(`ads-history`));
                      },
                      trailing: (0, $.jsx)(c, {}),
                    }),
                    v != null &&
                      !F &&
                      (0, $.jsx)(A, {
                        edgeRounding: `surface`,
                        label: (0, $.jsx)(P, {
                          id: `settings.ads.topicsLinkLabel`,
                          defaultMessage: `Topics`,
                          description: `Link label in Ads controls that opens the Ads Topics page, which lists ad categories used for ad personalization.`,
                        }),
                        onClick: () => {
                          s.query.getData(_e)?.bazaarPersonalizationUnavailable ||
                            (B(z.ADS_CONTROLS_ACTION_TYPE_CLICK_INTERESTS), V(`ads-topics`));
                        },
                        trailing: (0, $.jsx)(c, {}),
                      }),
                    v != null &&
                      (0, $.jsx)(ie, {
                        label: (0, $.jsx)(P, {
                          id: `settings.ads.deleteDataLabel`,
                          defaultMessage: `Delete ads data`,
                          description: `Label for the destructive button in Ads settings that opens the delete-ads-data confirmation modal. Audience is end users; short, direct label with no placeholders.`,
                        }),
                        description: F
                          ? (0, $.jsx)(P, {
                              id: `settings.ads.deleteDataDescriptionHistory`,
                              defaultMessage: `Delete your ad history associated with you. This won’t delete or change your chats.`,
                              description: `Supporting description under Delete ads data when regional policy makes personalization unavailable; only history is cleared`,
                            })
                          : (0, $.jsx)(P, {
                              id: `settings.ads.deleteDataDescriptionTopics`,
                              defaultMessage: `Clear all ads history and topics data. This won't affect your chats.`,
                              description: `Button description explaining that deleting ads data clears ads history and the saved list of ad topics used for personalization without affecting chats.`,
                            }),
                        control: (0, $.jsx)(w, {
                          color: `danger`,
                          size: `toolbar`,
                          onClick: () => {
                            (B(z.ADS_CONTROLS_ACTION_TYPE_CLICK_DELETE_ADS_DATA), O(`delete`));
                          },
                          children: (0, $.jsx)(P, {
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
            v != null &&
              (0, $.jsxs)(W, {
                children: [
                  (0, $.jsx)(W.Header, {
                    title: (0, $.jsx)(P, {
                      id: `settings.ads.personalizationTitle`,
                      defaultMessage: `Ads personalization`,
                      description: `Heading for advertising personalization settings`,
                    }),
                  }),
                  (0, $.jsx)(W.Content, {
                    children: (0, $.jsx)(n, {
                      children: (0, $.jsx)(ie, {
                        label: (0, $.jsx)(P, {
                          id: `settings.ads.personalize`,
                          defaultMessage: `Personalize ads`,
                          description: `Label for the switch that allows ChatGPT to personalize ads using activity and preferences`,
                        }),
                        description: F
                          ? (0, $.jsx)(P, {
                              id: `settings.ads.personalizationUnavailableDescription`,
                              defaultMessage: `Personalized ads currently aren’t available in your region. You’ll still see ads based on limited data like general location, context, and device type.`,
                              description: `Supporting text under the disabled Personalize ads toggle when regional policy makes ad personalization unavailable. It reassures the end user that ads still use only limited contextual and device data.`,
                            })
                          : (0, $.jsx)(P, {
                              id: `settings.ads.personalizeDescription`,
                              defaultMessage: `Allow ChatGPT to use your past chats, activity, and preferences to select ads. Ads may still be based on your current chat.`,
                              description: `Explanation of what the Personalize ads switch permits and that contextual ads remain when disabled`,
                            }),
                        control: (e) =>
                          (0, $.jsx)(j, {
                            ...e,
                            checked: v.bazaarPersonalizationEnabled !== !1 && !F,
                            disabled: N,
                            "aria-disabled": F || N,
                            onChange: (e) => {
                              if (s.query.getData(_e)?.bazaarPersonalizationUnavailable) {
                                B(z.ADS_CONTROLS_ACTION_TYPE_ATTEMPT_TOGGLE_PERSONALIZE_ADS_WHILE_DISABLED);
                                return;
                              }
                              (B(
                                e
                                  ? z.ADS_CONTROLS_ACTION_TYPE_TOGGLE_PERSONALIZE_ADS_ON
                                  : z.ADS_CONTROLS_ACTION_TYPE_TOGGLE_PERSONALIZE_ADS_OFF,
                              ),
                                M({ feature: `bazaar_personalization_enabled`, value: e }));
                            },
                          }),
                      }),
                    }),
                  }),
                ],
              }),
            v != null &&
              E &&
              (0, $.jsx)(W, {
                children: (0, $.jsx)(W.Content, {
                  children: (0, $.jsx)(n, {
                    children: (0, $.jsx)(ie, {
                      label: (0, $.jsx)(P, {
                        id: `settings.ads.changePlanLabel`,
                        defaultMessage: `Change plan to go ad-free`,
                        description: `Row offering plan choices to remove ads`,
                      }),
                      control: (0, $.jsx)(w, {
                        color: `secondary`,
                        size: `toolbar`,
                        disabled: N,
                        onClick: () => {
                          (B(z.ADS_CONTROLS_ACTION_TYPE_CLICK_CHANGE_PLAN_AD_FREE), O(`ad-free`));
                        },
                        children: (0, $.jsx)(P, {
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
      (t[54] = N),
      (t[55] = B),
      (t[56] = M),
      (t[57] = V),
      (t[58] = I),
      (t[59] = s),
      (t[60] = v),
      (t[61] = E),
      (t[62] = R),
      (t[63] = L),
      (t[64] = F),
      (t[65] = xe))
    : (xe = t[65]);
  let X;
  t[66] !== i || t[67] !== D
    ? ((X = D === `delete` && (0, $.jsx)(Ee, { accountId: i, onClose: () => O(null) })),
      (t[66] = i),
      (t[67] = D),
      (t[68] = X))
    : (X = t[68]);
  let Ce;
  t[69] !== D || t[70] !== M || t[71] !== ee
    ? ((Ce =
        D === `ad-free` &&
        (0, $.jsx)(De, {
          optOutEligible: ee,
          onClose: () => O(null),
          onOptOut: () => M({ feature: `free_ads_opt_out`, value: !0 }),
        })),
      (t[69] = D),
      (t[70] = M),
      (t[71] = ee),
      (t[72] = Ce))
    : (Ce = t[72]);
  let we;
  return (
    t[73] !== K ||
    t[74] !== q ||
    t[75] !== J ||
    t[76] !== ye ||
    t[77] !== Y ||
    t[78] !== be ||
    t[79] !== xe ||
    t[80] !== X ||
    t[81] !== Ce
      ? ((we = (0, $.jsxs)(fe, { title: K, backSlot: q, children: [J, ye, Y, be, xe, X, Ce] })),
        (t[73] = K),
        (t[74] = q),
        (t[75] = J),
        (t[76] = ye),
        (t[77] = Y),
        (t[78] = be),
        (t[79] = xe),
        (t[80] = X),
        (t[81] = Ce),
        (t[82] = we))
      : (we = t[82]),
    we
  );
}
var He, Ue, $;
function We() {
  return (We = e(() => {
    ((He = g()),
      B(),
      D(),
      L(),
      E(),
      (Ue = o()),
      S(),
      m(),
      q(),
      U(),
      T(),
      h(),
      y(),
      b(),
      F(),
      Y(),
      i(),
      H(),
      he(),
      I(),
      k(),
      ye(),
      Ae(),
      Be(),
      X(),
      ($ = f()));
  }))();
}
function Ge(e) {
  let t = (0, Ke.c)(5),
    { onBack: n } = e,
    r = te(de),
    i = te(ce),
    a = te(xe),
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
    ((Ke = g()), E(), q(), U(), be(), We(), (qe = f()));
  }))();
}
Je();
export { Ge as AdsControlsSettings };
//# sourceMappingURL=route-be55cff7d5f6.js.map
