import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  Bst as i,
  FBt as a,
  FNt as o,
  GK as s,
  HO as c,
  IO as l,
  JO as u,
  KO as d,
  LNt as f,
  Mst as p,
  NH as m,
  Ost as h,
  PBt as g,
  Pit as _,
  Qst as ee,
  SH as v,
  TY as y,
  Uot as b,
  Vot as te,
  Vrt as x,
  WO as ne,
  XOt as S,
  Y3 as C,
  Z3 as w,
  ZSt as T,
  Zst as E,
  _H as D,
  bU as O,
  dK as k,
  e6 as A,
  iCt as j,
  jU as M,
  jit as N,
  jst as P,
  nCt as re,
  okt as ie,
  qO as ae,
  qrt as F,
  rw as oe,
  sct as I,
  sw as se,
  tkt as L,
  tw as ce,
  uw as R,
  w_t as z,
  zK as B,
  zst as le,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Air as V,
  Bhr as H,
  Cqt as U,
  D5n as W,
  Emr as G,
  Eqt as K,
  Fjn as ue,
  IAr as de,
  Itn as q,
  Jfr as J,
  K4 as Y,
  KIr as fe,
  LIr as pe,
  LVt as me,
  M6t as he,
  Mir as ge,
  Mmr as _e,
  N6t as ve,
  Nfr as ye,
  Njn as be,
  Nmr as xe,
  O2n as Se,
  Pfr as Ce,
  RMr as we,
  RVt as Te,
  Rfr as Ee,
  Rtn as De,
  Rzn as Oe,
  T2n as ke,
  T5n as Ae,
  Tfr as je,
  UAr as Me,
  V3n as Ne,
  VRr as Pe,
  WMn as Fe,
  XGt as Ie,
  YMn as Le,
  _fr as Re,
  bmr as ze,
  ffr as Be,
  iRr as Ve,
  imr as He,
  kfr as Ue,
  q4 as We,
  qGt as Ge,
  rPn as X,
  rmr as Ke,
  sIn as qe,
  sRr as Je,
  wLr as Ye,
  wmr as Xe,
  xmr as Ze,
  z3n as Qe,
  zMr as $e,
  zzn as et,
} from "./app-initial-ad16eaadf81f.js";
import { ep as tt, tp as nt } from "./app-primary-3e00728c2a4c.js";
import { n as rt, t as it } from "./app-connect-modal-763ad0733e86.js";
import { n as at, t as ot } from "./app-connect-modal-by-id-ee9e7bc8d7c4.js";
import { n as st, t as ct } from "./use-app-connect-flow-7fc070fa8fd7.js";
import { n as lt, t as ut } from "./apps-availability-8e892cfd0ff7.js";
import { n as dt, t as ft } from "./background-df2d0f0d3c80.js";
import { n as pt, t as mt } from "./writing-style-demo-cab6908153aa.js";
import { i as ht, r as gt } from "./contracts-99d876fb924e.js";
import { n as _t, r as vt, t as yt } from "./preference-7dc4b1ded741.js";
function bt(e, t) {
  let n = performance.now(),
    r = !1;
  return (
    e.get(Oe).count(`default`, `write_like_me.connector_engagement`, { ...t, outcome: `started` }),
    (i) => {
      r ||
        ((r = !0),
        e.get(Oe).count(`default`, `write_like_me.connector_engagement`, { ...t, outcome: i }),
        e
          .get(Oe)
          .hist(
            `default`,
            `write_like_me.connector_duration_ms`,
            { ...t, outcome: i },
            performance.now() - n,
          ));
    }
  );
}
function xt() {
  return (xt = e(() => {
    et();
  }))();
}
function St(e) {
  let t = (0, Tt.c)(11),
    { apps: n, isContinuing: r, pendingAppId: i, onConnect: a } = e,
    o;
  if (t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i) {
    let e;
    (t[5] !== r || t[6] !== a || t[7] !== i
      ? ((e = (e) =>
          (0, Z.jsx)(wt, { app: e, disabled: r || i != null, pending: i === e.id, onConnect: a }, e.id)),
        (t[5] = r),
        (t[6] = a),
        (t[7] = i),
        (t[8] = e))
      : (e = t[8]),
      (o = [...n].sort(Ct).map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = i),
      (t[4] = o));
  } else o = t[4];
  let s;
  return (
    t[9] === o
      ? (s = t[10])
      : ((s = (0, Z.jsx)(`div`, { className: ce, children: o })), (t[9] = o), (t[10] = s)),
    s
  );
}
function Ct(e, t) {
  return Number(e.connection === `connected`) - Number(t.connection === `connected`);
}
function wt(e) {
  let t = (0, Tt.c)(28),
    { app: n, disabled: r, pending: i, onConnect: a } = e,
    o = ie(),
    c;
  t[0] !== n.connection || t[1] !== n.name || t[2] !== o
    ? ((c = o.formatMessage(
        {
          id: `writingStyle.apps.sourceActionLabel`,
          defaultMessage: `{action, select, reauth {Reconnect} disabled {Enable} refresh {Refresh} other {Connect}} {appName}`,
          description: `Accessible action for a writing source. action indicates reauthorization, enablement, refreshing host readiness, or connecting. appName is the product name.`,
        },
        { action: n.connection, appName: n.name },
      )),
      (t[0] = n.connection),
      (t[1] = n.name),
      (t[2] = o),
      (t[3] = c))
    : (c = t[3]);
  let l = c,
    u = n.connection === `disconnected` || n.connection === `connect`,
    d;
  if (u) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Z.jsx)(s, {})), (t[4] = e)) : (e = t[4]),
      (d = e));
  } else {
    let e;
    (t[5] === n.connection
      ? (e = t[6])
      : ((e = (0, Z.jsx)(L, {
          id: `writingStyle.apps.sourceAction`,
          defaultMessage: `{action, select, reauth {Reconnect} disabled {Enable} other {Refresh}}`,
          description: `Action for an installed writing source needing authorization, enablement, or refreshed host readiness`,
          values: { action: n.connection },
        })),
        (t[5] = n.connection),
        (t[6] = e)),
      (d = e));
  }
  let f;
  if (n.connection === `connected`) {
    let e;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Z.jsx)(v, {})), (t[7] = e)) : (e = t[7]);
    let n;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Z.jsxs)(`span`, {
          className: `flex size-9 shrink-0 items-center justify-center`,
          role: `status`,
          children: [
            e,
            (0, Z.jsx)(`span`, {
              className: `sr-only`,
              children: (0, Z.jsx)(L, {
                id: `writingStyle.apps.connected`,
                defaultMessage: `Connected`,
                description: `Status of an app that can supply the user's writing examples`,
              }),
            }),
          ],
        })),
        (t[8] = n))
      : (n = t[8]),
      (f = n));
  } else if (n.connection === `unavailable`) {
    let e;
    (t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(L, {
          id: `writingStyle.apps.unavailable`,
          defaultMessage: `Unavailable`,
          description: `Status of a writing source app that is unavailable for this account or execution host`,
        })),
        (t[9] = e))
      : (e = t[9]),
      (f = e));
  } else {
    let e = u ? `inputIcon` : `medium`,
      o;
    t[10] !== n || t[11] !== a ? ((o = () => a(n)), (t[10] = n), (t[11] = a), (t[12] = o)) : (o = t[12]);
    let s;
    (t[13] !== l || t[14] !== d || t[15] !== r || t[16] !== i || t[17] !== e || t[18] !== o
      ? ((s = (0, Z.jsx)(C, {
          type: `button`,
          color: `ghostSecondary`,
          size: e,
          radius: `full`,
          "aria-label": l,
          title: l,
          "aria-busy": i,
          disabled: r,
          onClick: o,
          children: d,
        })),
        (t[13] = l),
        (t[14] = d),
        (t[15] = r),
        (t[16] = i),
        (t[17] = e),
        (t[18] = o),
        (t[19] = s))
      : (s = t[19]),
      (f = s));
  }
  let p;
  t[20] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = (0, Z.jsx)(B, {})), (t[20] = p)) : (p = t[20]);
  let m;
  t[21] !== n.logoDarkUrl || t[22] !== n.logoUrl
    ? ((m = (0, Z.jsx)(he, {
        className: `size-5`,
        alt: ``,
        logoUrl: n.logoUrl,
        logoDarkUrl: n.logoDarkUrl,
        fallback: p,
      })),
      (t[21] = n.logoDarkUrl),
      (t[22] = n.logoUrl),
      (t[23] = m))
    : (m = t[23]);
  let h;
  return (
    t[24] !== n.name || t[25] !== f || t[26] !== m
      ? ((h = (0, Z.jsx)(se, { variant: `featured`, label: n.name, icon: m, control: f })),
        (t[24] = n.name),
        (t[25] = f),
        (t[26] = m),
        (t[27] = h))
      : (h = t[27]),
    h
  );
}
var Tt, Z;
function Et() {
  return (Et = e(() => {
    ((Tt = g()), S(), ve(), w(), y(), R(), oe(), (Z = f()));
  }))();
}
function Dt(e) {
  let n = (0, Mt.c)(100),
    {
      apps: r,
      enabled: i,
      onManage: a,
      category: o,
      onCategoryChange: s,
      error: c,
      isContinuing: u,
      isLoading: f,
      isRefreshing: p,
      pendingAppId: h,
      onClose: g,
      onConnect: _,
      onContinue: ee,
      onRetry: v,
    } = e,
    y = p !== void 0 && p,
    b = ie(),
    te = (0, Nt.useRef)(null),
    x,
    S,
    w,
    T,
    E,
    D,
    O,
    A,
    j,
    M,
    N,
    P,
    re,
    F,
    oe,
    I,
    R,
    z,
    B,
    le,
    V,
    H,
    U;
  if (
    n[0] !== r ||
    n[1] !== o ||
    n[2] !== i ||
    n[3] !== b ||
    n[4] !== u ||
    n[5] !== f ||
    n[6] !== s ||
    n[7] !== g ||
    n[8] !== ee ||
    n[9] !== a ||
    n[10] !== h
  ) {
    let e = r?.filter(jt);
    ((w = u || h != null), (T = !w));
    let c = (e) => {
      w || (s(e), te.current?.focus());
    };
    ((S = ne),
      (N = !0),
      (P = `setup`),
      (re = `chatgpt`),
      n[34] === g ? (F = n[35]) : ((F = (e) => !e && g()), (n[34] = g), (n[35] = F)),
      n[36] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((I = {
            onOpenAutoFocus: (e) => {
              (e.preventDefault(), te.current?.focus());
            },
          }),
          (n[36] = I))
        : (I = n[36]),
      (x = l),
      (H = `form`),
      (U = `full`),
      (E = `chatgpt`),
      (D = `relative overflow-hidden`),
      n[37] !== T || n[38] !== ee
        ? ((O = (e) => {
            (e.preventDefault(), T && ee());
          }),
          (n[37] = T),
          (n[38] = ee),
          (n[39] = O))
        : (O = n[39]),
      n[40] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((A = (0, Q.jsx)(ft, {})), (n[40] = A))
        : (A = n[40]),
      n[41] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((j = (0, Q.jsx)(`div`, {
            className: `relative flex shrink-0 items-center justify-center pt-8 select-none`,
            children: (0, Q.jsx)(`span`, {
              className: `flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl border border-default bg-surface text-default shadow-sm`,
              children: (0, Q.jsx)(k, {}),
            }),
          })),
          (n[41] = j))
        : (j = n[41]),
      (M =
        o == null
          ? null
          : (0, Q.jsx)(C, {
              className: `absolute top-6 left-6`,
              type: `button`,
              color: `ghostSecondary`,
              size: `inputIcon`,
              radius: `full`,
              disabled: w,
              onClick: () => c(null),
              "aria-label": b.formatMessage({
                id: `writingStyle.setup.back`,
                defaultMessage: `Back`,
                description: `Button returning from the Writing style source picker to its overview without saving consent`,
              }),
              children: (0, Q.jsx)(m, {}),
            })),
      (le = `relative flex min-h-0 flex-1 flex-col gap-4 px-8 pt-6 pb-4`));
    let p;
    n[42] === i
      ? (p = n[43])
      : ((p = (0, Q.jsx)(ae, {
          asChild: !0,
          children: (0, Q.jsx)(`h2`, {
            ref: te,
            tabIndex: -1,
            className: `heading-lg font-semibold`,
            children: i
              ? (0, Q.jsx)(L, {
                  id: `writingStyle.setup.enabledTitle`,
                  defaultMessage: `Writing style is personalized`,
                  description: `Heading confirming that writing-style personalization has been enabled`,
                })
              : (0, Q.jsx)(L, {
                  id: `writingStyle.setup.title`,
                  defaultMessage: `Set up writing style`,
                  description: `Heading while writing-style personalization has not yet been enabled`,
                }),
          }),
        })),
        (n[42] = i),
        (n[43] = p));
    let _;
    (n[44] === a
      ? (_ = n[45])
      : ((_ = (0, Q.jsx)(d, {
          className: `text-base text-secondary`,
          children: (0, Q.jsx)(L, {
            id: `writingStyle.setup.descriptionWithManage`,
            defaultMessage: `ChatGPT uses your chats and Library files to write in your style. <manage>Manage</manage>`,
            description: `Writing-style setup description. Library is ChatGPT's file library. The inline Manage link closes setup and opens Personalization settings.`,
            values: {
              manage: (e) =>
                (0, Q.jsx)(`button`, {
                  type: `button`,
                  className: `cursor-interaction underline`,
                  onClick: a,
                  children: e,
                }),
            },
          }),
        })),
        (n[44] = a),
        (n[45] = _)),
      n[46] !== p || n[47] !== _
        ? ((V = (0, Q.jsxs)(`div`, {
            className: `flex shrink-0 flex-col items-center gap-2 text-center select-none`,
            children: [p, _],
          })),
          (n[46] = p),
          (n[47] = _),
          (n[48] = V))
        : (V = n[48]),
      (oe = `flex min-h-0 flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto`),
      n[49] === o
        ? (R = n[50])
        : ((R =
            o == null
              ? (0, Q.jsx)(`h3`, {
                  className: `font-semibold`,
                  children: (0, Q.jsx)(L, {
                    id: `writingStyle.setup.improve`,
                    defaultMessage: `Connect apps to improve writing (optional)`,
                    description: `Heading above optional app connections that provide additional writing examples`,
                  }),
                })
              : null),
          (n[49] = o),
          (n[50] = R)),
      n[51] === f
        ? (z = n[52])
        : ((z = f
            ? (0, Q.jsxs)(`div`, {
                role: `status`,
                className: `flex items-center justify-center gap-2 text-secondary`,
                children: [
                  (0, Q.jsx)(t, {}),
                  (0, Q.jsx)(L, {
                    id: `writingStyle.apps.loading`,
                    defaultMessage: `Checking connected apps…`,
                    description: `Status while Writing style setup checks plugins, host availability and account links`,
                  }),
                ],
              })
            : null),
          (n[51] = f),
          (n[52] = z)),
      (B =
        r != null && o == null
          ? (0, Q.jsx)(`div`, {
              className: ce,
              children: Pt.map((t) => {
                let n = Ft[t],
                  r = e?.filter((e) => e.category === t),
                  i = r != null && r.length > 0;
                return (0, Q.jsx)(
                  se,
                  {
                    className: `justify-between max-sm:flex-wrap`,
                    variant: `featured`,
                    icon: (0, Q.jsx)(n, {}),
                    label: (0, Q.jsx)(L, {
                      id: `writingStyle.setup.category`,
                      defaultMessage: `{category, select, email {Email} messaging {Messaging} other {Documents}}`,
                      description: `Writing category label in setup; category is email, messaging or documents`,
                      values: { category: t },
                    }),
                    control: (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        i
                          ? (0, Q.jsxs)(Q.Fragment, {
                              children: [
                                (0, Q.jsx)(tt, { ariaLabel: b.formatList(r.map(At)), children: r.map(kt) }),
                                (0, Q.jsx)(L, {
                                  id: `writingStyle.apps.connected`,
                                  defaultMessage: `Connected`,
                                  description: `Status of an app that can supply the user's writing examples`,
                                }),
                              ],
                            })
                          : null,
                        (0, Q.jsx)(C, {
                          type: `button`,
                          color: `ghostSecondary`,
                          size: `toolbar`,
                          disabled: w,
                          "aria-label": i
                            ? b.formatMessage(
                                {
                                  id: `writingStyle.setup.connectedCategoryAction`,
                                  defaultMessage: `{category, select, email {Connect more email apps} messaging {Connect more messaging apps} other {Connect more document apps}}. Connected: {apps}`,
                                  description: `Accessible name for the connected-app chevron in Writing style setup. It opens that category picker; category is email, messaging or documents, and apps is the complete localized list of connected product names.`,
                                },
                                { category: t, apps: b.formatList(r.map(Ot)) },
                              )
                            : b.formatMessage(
                                {
                                  id: `writingStyle.setup.openCategory`,
                                  defaultMessage: `{category, select, email {Set up email} messaging {Set up messaging} other {Set up documents}}`,
                                  description: `Accessible action opening a category's app picker in Writing style setup, including with connected apps; category is email, messaging or documents`,
                                },
                                { category: t },
                              ),
                          onClick: () => c(t),
                          children: (0, Q.jsx)(L, {
                            id: `writingStyle.setup.setUp`,
                            defaultMessage: `Set up`,
                            description: `Opens the optional app picker for a writing category`,
                          }),
                        }),
                      ],
                    }),
                  },
                  t,
                );
              }),
            })
          : null),
      (n[0] = r),
      (n[1] = o),
      (n[2] = i),
      (n[3] = b),
      (n[4] = u),
      (n[5] = f),
      (n[6] = s),
      (n[7] = g),
      (n[8] = ee),
      (n[9] = a),
      (n[10] = h),
      (n[11] = x),
      (n[12] = S),
      (n[13] = w),
      (n[14] = T),
      (n[15] = E),
      (n[16] = D),
      (n[17] = O),
      (n[18] = A),
      (n[19] = j),
      (n[20] = M),
      (n[21] = N),
      (n[22] = P),
      (n[23] = re),
      (n[24] = F),
      (n[25] = oe),
      (n[26] = I),
      (n[27] = R),
      (n[28] = z),
      (n[29] = B),
      (n[30] = le),
      (n[31] = V),
      (n[32] = H),
      (n[33] = U));
  } else
    ((x = n[11]),
      (S = n[12]),
      (w = n[13]),
      (T = n[14]),
      (E = n[15]),
      (D = n[16]),
      (O = n[17]),
      (A = n[18]),
      (j = n[19]),
      (M = n[20]),
      (N = n[21]),
      (P = n[22]),
      (re = n[23]),
      (F = n[24]),
      (oe = n[25]),
      (I = n[26]),
      (R = n[27]),
      (z = n[28]),
      (B = n[29]),
      (le = n[30]),
      (V = n[31]),
      (H = n[32]),
      (U = n[33]));
  let W;
  n[53] !== r || n[54] !== o || n[55] !== u || n[56] !== y || n[57] !== _ || n[58] !== h
    ? ((W =
        r != null && o != null
          ? (0, Q.jsx)(St, {
              apps: r.filter((e) => e.category === o),
              isContinuing: u || y,
              pendingAppId: h,
              onConnect: _,
            })
          : null),
      (n[53] = r),
      (n[54] = o),
      (n[55] = u),
      (n[56] = y),
      (n[57] = _),
      (n[58] = h),
      (n[59] = W))
    : (W = n[59]);
  let G;
  n[60] !== w || n[61] !== c || n[62] !== y || n[63] !== v
    ? ((G =
        c == null
          ? null
          : (0, Q.jsxs)(`div`, {
              role: `alert`,
              className: `flex flex-col items-center gap-2`,
              children: [
                (0, Q.jsx)(`p`, { children: c }),
                (0, Q.jsx)(C, {
                  type: `button`,
                  color: `secondary`,
                  disabled: w || y,
                  loading: y,
                  onClick: v,
                  children: (0, Q.jsx)(L, {
                    id: `writingStyle.retry`,
                    defaultMessage: `Retry`,
                    description: `Button to retry loading writing style or source app information after a failure`,
                  }),
                }),
              ],
            })),
      (n[60] = w),
      (n[61] = c),
      (n[62] = y),
      (n[63] = v),
      (n[64] = G))
    : (G = n[64]);
  let K;
  n[65] !== oe || n[66] !== W || n[67] !== G || n[68] !== R || n[69] !== z || n[70] !== B
    ? ((K = (0, Q.jsxs)(`div`, { className: oe, children: [R, z, B, W, G] })),
      (n[65] = oe),
      (n[66] = W),
      (n[67] = G),
      (n[68] = R),
      (n[69] = z),
      (n[70] = B),
      (n[71] = K))
    : (K = n[71]);
  let ue = !T,
    de;
  n[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, Q.jsx)(L, {
        id: `writingStyle.setup.showMe`,
        defaultMessage: `Show me`,
        description: `Saves writing-style personalization and starts a demonstration in chat; connecting apps is optional`,
      })),
      (n[72] = de))
    : (de = n[72]);
  let q;
  n[73] !== u || n[74] !== ue
    ? ((q = (0, Q.jsx)(`div`, {
        className: `flex shrink-0 flex-col gap-2`,
        children: (0, Q.jsx)(C, {
          type: `submit`,
          size: `beaconAction`,
          "aria-busy": u,
          disabled: ue,
          loading: u,
          children: de,
        }),
      })),
      (n[73] = u),
      (n[74] = ue),
      (n[75] = q))
    : (q = n[75]);
  let J;
  n[76] !== K || n[77] !== q || n[78] !== le || n[79] !== V
    ? ((J = (0, Q.jsxs)(`div`, { className: le, children: [V, K, q] })),
      (n[76] = K),
      (n[77] = q),
      (n[78] = le),
      (n[79] = V),
      (n[80] = J))
    : (J = n[80]);
  let Y;
  n[81] !== x ||
  n[82] !== E ||
  n[83] !== D ||
  n[84] !== O ||
  n[85] !== A ||
  n[86] !== j ||
  n[87] !== M ||
  n[88] !== J ||
  n[89] !== H ||
  n[90] !== U
    ? ((Y = (0, Q.jsxs)(x, {
        as: H,
        size: U,
        variant: E,
        className: D,
        onSubmit: O,
        children: [A, j, M, J],
      })),
      (n[81] = x),
      (n[82] = E),
      (n[83] = D),
      (n[84] = O),
      (n[85] = A),
      (n[86] = j),
      (n[87] = M),
      (n[88] = J),
      (n[89] = H),
      (n[90] = U),
      (n[91] = Y))
    : (Y = n[91]);
  let fe;
  return (
    n[92] !== S || n[93] !== N || n[94] !== P || n[95] !== re || n[96] !== F || n[97] !== I || n[98] !== Y
      ? ((fe = (0, Q.jsx)(S, {
          open: N,
          size: P,
          variant: re,
          onOpenChange: F,
          contentProps: I,
          children: Y,
        })),
        (n[92] = S),
        (n[93] = N),
        (n[94] = P),
        (n[95] = re),
        (n[96] = F),
        (n[97] = I),
        (n[98] = Y),
        (n[99] = fe))
      : (fe = n[99]),
    fe
  );
}
function Ot(e) {
  return e.name;
}
function kt(e) {
  return (0, Q.jsx)(
    he,
    {
      className: `size-5`,
      alt: ``,
      logoUrl: e.logoUrl,
      logoDarkUrl: e.logoDarkUrl,
      fallback: (0, Q.jsx)(B, {}),
    },
    e.id,
  );
}
function At(e) {
  return e.name;
}
function jt(e) {
  return e.connection === `connected`;
}
var Mt, Nt, Q, Pt, Ft;
function It() {
  return (It = e(() => {
    ((Mt = g()),
      (Nt = a()),
      S(),
      dt(),
      ve(),
      nt(),
      w(),
      u(),
      c(),
      y(),
      A(),
      R(),
      oe(),
      Et(),
      (Q = f()),
      (Pt = [`messaging`, `email`, `documents`]),
      (Ft = { messaging: D, email: M, documents: O }));
  }))();
}
function Lt(e, t, n, r, i, a) {
  let o = n?.apps.map(({ id: e }) => H(e)),
    s = zt(t.id, n, a),
    c = s?.plugin ?? n?.summary,
    l = a == null ? c?.installed === !0 : s != null,
    u = i?.filter((e) => e.visibility !== `HIDDEN` && !e.id.startsWith(`implicit_link::`)),
    d = n == null ? void 0 : Rt(n.apps, i),
    f = n != null && n.apps.length > 0 && d == null,
    p = r?.filter((e) => o?.includes(H(e.id))),
    m = o?.every((e) => p?.some((t) => H(t.id) === e && t.isAccessible && t.isEnabled)),
    h = `disconnected`;
  return (
    c == null ||
    o?.length === 0 ||
    We(c) ||
    c.installPolicy === `NOT_AVAILABLE` ||
    (Ze(e) && p?.some((e) => !e.isEnabled))
      ? (h = `unavailable`)
      : (l && !c.enabled) || p?.some((e) => !e.isEnabled)
        ? (h = `disabled`)
        : f && m
          ? (h = `connected`)
          : u?.some((e) => d != null && H(d.id) === H(e.connector_id) && e.auth_status === `REAUTH_REQUIRED`)
            ? (h = `reauth`)
            : l && (h = f ? `refresh` : `connect`),
    {
      ...t,
      name: n?.summary.interface?.displayName ?? t.name,
      logoUrl: n?.summary.interface?.logoUrl ?? null,
      logoDarkUrl: n?.summary.interface?.logoUrlDark ?? null,
      connection: h,
    }
  );
}
function Rt(e, t) {
  return e.find(
    (e) =>
      !t?.some(
        (t) =>
          t.visibility !== `HIDDEN` &&
          !t.id.startsWith(`implicit_link::`) &&
          (t.auth_status ?? `ACTIVE`) === `ACTIVE` &&
          H(t.connector_id) === H(e.id),
      ),
  );
}
function zt(e, t, n) {
  return n?.find(
    ({ plugin: n, canonicalAppId: r }) =>
      n.remotePluginId === e ||
      n.id === t?.summary.id ||
      (r != null && t?.apps.some(({ id: e }) => H(e) === H(r))),
  );
}
var Bt;
function Vt() {
  return (Vt = e(() => {
    (ze(),
      Y(),
      (Bt = [
        {
          id: `plugin_connector_1p_95d39881713c8191931482a62d6edff9`,
          category: `email`,
          name: `Gmail`,
          connector: `gmail`,
        },
        {
          id: `plugin_connector_1p_6bcb5879c73c819196abc70016166099`,
          category: `email`,
          name: `Outlook Email`,
          connector: `outlook_email`,
        },
        {
          id: `plugin_asdk_app_69a1d78e929881919bba0dbda1f6436d`,
          category: `messaging`,
          name: `Slack`,
          connector: `slack`,
        },
        {
          id: `plugin_connector_1p_eba8b52fe53881918408d4b46b957644`,
          category: `messaging`,
          name: `Teams`,
          connector: `teams`,
        },
        {
          id: `plugin_connector_1p_ab21a553bfbc81919ea8fd1858e3ffa7`,
          category: `documents`,
          name: `Google Drive`,
          connector: `google_drive`,
        },
        {
          id: `plugin_connector_1p_dca009ae2c848191ae14df3a47c5e7fd`,
          category: `documents`,
          name: `SharePoint`,
          connector: `sharepoint`,
        },
        {
          id: `plugin_asdk_app_69c18c28f1188191bf5b8445c4ab0a2e`,
          category: `documents`,
          name: `Notion`,
          connector: `notion`,
        },
      ]));
  }))();
}
function Ht(e) {
  let t = (0, Gt.c)(146),
    {
      accountId: r,
      hostId: i,
      userId: a,
      workspaceRoots: o,
      entryPoint: s,
      onClose: c,
      onContinue: l,
      onManage: u,
    } = e,
    d = s === void 0 ? `unknown` : s,
    f = n(ee),
    m = ie(),
    g;
  t[0] !== r || t[1] !== i || t[2] !== a
    ? ((g = { accountId: r, userId: a, hostId: i }), (t[0] = r), (t[1] = i), (t[2] = a), (t[3] = g))
    : (g = t[3]);
  let _ = re(vt, g),
    [v, y] = (0, $.useState)(null),
    b = (0, $.useRef)(null),
    te;
  t[4] !== r || t[5] !== i || t[6] !== a
    ? ((te = { accountId: r, userId: a, hostId: i }), (t[4] = r), (t[5] = i), (t[6] = a), (t[7] = te))
    : (te = t[7]);
  let { data: x } = re(_t, te),
    ne;
  t[8] === i ? (ne = t[9]) : ((ne = { hostId: i }), (t[8] = i), (t[9] = ne));
  let { setPluginEnabled: S } = Le(ne),
    C;
  t[10] === i ? (C = t[11]) : ((C = { hostId: i }), (t[10] = i), (t[11] = C));
  let { setAppEnabled: w } = lt(C),
    T;
  t[12] !== i || t[13] !== o
    ? ((T = { hostId: i, roots: o }), (t[12] = i), (t[13] = o), (t[14] = T))
    : (T = t[14]);
  let { data: E, error: D, isLoading: O, refetch: k } = Ue(T),
    [A, j] = (0, $.useState)(null),
    [M, N] = (0, $.useState)(null),
    [P, ae] = (0, $.useState)(null),
    [F, oe] = (0, $.useState)(null),
    I;
  t[15] === i ? (I = t[16]) : ((I = { hostId: i }), (t[15] = i), (t[16] = I));
  let { clearPendingAppConnect: se, handleAppConnectOAuthStarted: ce, isAppConnectPending: R } = st(I),
    z;
  t[17] !== R || t[18] !== P || t[19] !== A || t[20] !== F?.sourceId
    ? ((z = A ?? F?.sourceId ?? (P != null && R(P.appId) ? P.sourceId : null)),
      (t[17] = R),
      (t[18] = P),
      (t[19] = A),
      (t[20] = F?.sourceId),
      (t[21] = z))
    : (z = t[21]);
  let B = z,
    V = (0, $.useRef)(!1),
    U = (0, $.useRef)(!0),
    W = (0, $.useRef)(null),
    G,
    K;
  (t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = () => (
        (U.current = !0),
        () => {
          ((U.current = !1), W.current?.abort(), b.current?.abort());
        }
      )),
      (G = []),
      (t[22] = G),
      (t[23] = K))
    : ((G = t[22]), (K = t[23])),
    (0, $.useEffect)(K, G));
  let [ue, de] = (0, $.useState)(!1),
    [q, J] = (0, $.useState)(!1),
    Y;
  t[24] === i ? (Y = t[25]) : ((Y = { hostId: i }), (t[24] = i), (t[25] = Y));
  let {
      data: pe,
      loadError: he,
      isLoading: ge,
      isFetching: ve,
      isHardRefetchingAppsList: be,
      hardRefetchAppsList: xe,
    } = Ne(Y),
    Se;
  t[26] !== r || t[27] !== a
    ? ((Se = Xe({ accountId: r, userId: a })), (t[26] = r), (t[27] = a), (t[28] = Se))
    : (Se = t[28]);
  let Ce;
  t[29] === B ? (Ce = t[30]) : ((Ce = () => B == null && b.current == null), (t[29] = B), (t[30] = Ce));
  let we;
  t[31] !== Se || t[32] !== Ce
    ? ((we = { ...Se, staleTime: le.ONE_MINUTE, refetchOnWindowFocus: Ce }),
      (t[31] = Se),
      (t[32] = Ce),
      (t[33] = we))
    : (we = t[33]);
  let { data: Te, error: De, isLoading: ke, isFetching: Ae, refetch: je } = p(we),
    Me = Ze(i) ? `chatgpt` : `codex`,
    Fe;
  if (t[34] !== r || t[35] !== Me || t[36] !== a) {
    let e;
    (t[38] !== r || t[39] !== Me
      ? ((e = async (e) => {
          let { signal: t } = e,
            n = await Promise.all(
              Bt.map(async (e) => {
                let { id: n } = e,
                  i = await Ve.safeGet(`/ps/plugins/{plugin_id}`, {
                    parameters: { path: { plugin_id: n } },
                    additionalHeaders: { ..._e(Me), "ChatGPT-Account-Id": r },
                    expectedErrorStatuses: [404],
                    signal: ye(t),
                  }).catch(Wt);
                return i == null ? null : [n, i];
              }),
            );
          return Object.fromEntries(n.filter(Ut));
        }),
        (t[38] = r),
        (t[39] = Me),
        (t[40] = e))
      : (e = t[40]),
      (Fe = h({
        queryKey: [`plugins`, `writing-style-sources`, r, a, Me],
        queryFn: e,
        retry: !1,
        staleTime: le.FIVE_MINUTES,
      })),
      (t[34] = r),
      (t[35] = Me),
      (t[36] = a),
      (t[37] = Fe));
  } else Fe = t[37];
  let { data: Ie, error: Re, isLoading: ze, isFetching: He, refetch: We } = p(Fe),
    Ge,
    X,
    Ke,
    qe,
    Je,
    Ye;
  if (
    t[41] !== r ||
    t[42] !== ve ||
    t[43] !== ge ||
    t[44] !== M ||
    t[45] !== pe ||
    t[46] !== i ||
    t[47] !== q ||
    t[48] !== D ||
    t[49] !== O ||
    t[50] !== E ||
    t[51] !== be ||
    t[52] !== Te ||
    t[53] !== De ||
    t[54] !== Ae ||
    t[55] !== ke ||
    t[56] !== he ||
    t[57] !== f ||
    t[58] !== Ie ||
    t[59] !== Re ||
    t[60] !== He ||
    t[61] !== ze ||
    t[62] !== a
  ) {
    let e;
    (t[69] === Ie
      ? (e = t[70])
      : ((e = (e) => {
          let { id: t } = e,
            n = Ie?.[t];
          return n == null ? void 0 : Be(n);
        }),
        (t[69] = Ie),
        (t[70] = e)),
      (Je = Bt.map(e)));
    let n;
    (t[71] !== r || t[72] !== f || t[73] !== a
      ? ((n = () => U.current && f.get($e) === r && f.get(Pe).userId === a && f.get(fe).status === `allowed`),
        (t[71] = r),
        (t[72] = f),
        (t[73] = a),
        (t[74] = n))
      : (n = t[74]),
      (X = n),
      (Ke = O || ge || ke || ze),
      (Ge = q || M != null || D != null || he != null || De != null || Re != null),
      (qe = ve || be || Ae || He),
      (Ye =
        E == null || pe == null || Te == null || Ie == null
          ? void 0
          : Bt.map((e, t) => Lt(i, e, Je[t], pe, Te, E))),
      (t[41] = r),
      (t[42] = ve),
      (t[43] = ge),
      (t[44] = M),
      (t[45] = pe),
      (t[46] = i),
      (t[47] = q),
      (t[48] = D),
      (t[49] = O),
      (t[50] = E),
      (t[51] = be),
      (t[52] = Te),
      (t[53] = De),
      (t[54] = Ae),
      (t[55] = ke),
      (t[56] = he),
      (t[57] = f),
      (t[58] = Ie),
      (t[59] = Re),
      (t[60] = He),
      (t[61] = ze),
      (t[62] = a),
      (t[63] = Ge),
      (t[64] = X),
      (t[65] = Ke),
      (t[66] = qe),
      (t[67] = Je),
      (t[68] = Ye));
  } else ((Ge = t[63]), (X = t[64]), (Ke = t[65]), (qe = t[66]), (Je = t[67]), (Ye = t[68]));
  let Qe = Ye,
    et;
  t[75] !== xe || t[76] !== i || t[77] !== X || t[78] !== k || t[79] !== je || t[80] !== We
    ? ((et = async (e) => {
        let [t, n, r, a] = await Promise.all([
          xe(),
          je({ throwOnError: !0 }),
          k({ throwOnError: !0, cancelRefetch: !1 }),
          We({ throwOnError: !0, cancelRefetch: !1 }),
        ]);
        if (!X()) return null;
        let o = Bt.findIndex((t) => {
            let { id: n } = t;
            return n === e;
          }),
          s = e == null ? void 0 : a.data?.[e];
        return o < 0 ? null : Lt(i, Bt[o], s == null ? void 0 : Be(s), t, n.data, r.data).connection;
      }),
      (t[75] = xe),
      (t[76] = i),
      (t[77] = X),
      (t[78] = k),
      (t[79] = je),
      (t[80] = We),
      (t[81] = et))
    : (et = t[81]);
  let tt = et,
    nt = F?.app == null ? ot : it,
    rt;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = (0, Kt.createPortal)(
        (0, qt.jsx)(me, { className: `pointer-events-none fixed inset-0` }),
        document.body,
      )),
      (t[82] = rt))
    : (rt = t[82]);
  let at = x?.enabled === !0,
    ct;
  t[83] !== d || t[84] !== f
    ? ((ct = (e) => {
        (y(e),
          e != null &&
            f
              .get(Oe)
              .count(`default`, `write_like_me.setup_funnel`, {
                category: e,
                entry_point: d,
                stage: `category_selected`,
              }));
      }),
      (t[83] = d),
      (t[84] = f),
      (t[85] = ct))
    : (ct = t[85]);
  let ut;
  t[86] === Ge
    ? (ut = t[87])
    : ((ut = Ge
        ? (0, qt.jsx)(L, {
            id: `writingStyle.apps.error`,
            defaultMessage: `Couldn't finish Writing style setup. Try again.`,
            description: `Recoverable error loading sources, saving Writing style, or starting its ordinary chat`,
          })
        : null),
      (t[86] = Ge),
      (t[87] = ut));
  let dt = ue || _.isPending,
    ft = Ke && Qe == null,
    mt;
  t[88] === c
    ? (mt = t[89])
    : ((mt = () => {
        ((U.current = !1), W.current?.abort(), b.current?.abort(), c());
      }),
      (t[88] = c),
      (t[89] = mt));
  let gt;
  t[90] !== d ||
  t[91] !== M ||
  t[92] !== pe ||
  t[93] !== i ||
  t[94] !== E ||
  t[95] !== X ||
  t[96] !== qe ||
  t[97] !== Te ||
  t[98] !== B ||
  t[99] !== Je ||
  t[100] !== tt ||
  t[101] !== f ||
  t[102] !== w ||
  t[103] !== S
    ? ((gt = (e) => {
        if (!X() || B != null || qe || b.current != null) return;
        let t = Bt.findIndex((t) => {
            let { id: n } = t;
            return n === e.id;
          }),
          n = Je[t],
          r = zt(e.id, n, E),
          a = n == null ? void 0 : { ...n, summary: r?.plugin ?? n.summary };
        if (a == null || e.connection === `unavailable` || (e.connection === `connected` && M !== e.id))
          return;
        (W.current?.abort(), (W.current = null), N(null), ae(null), (V.current = !1));
        let o = bt(f, { category: e.category, connector: Bt[t]?.connector ?? `unknown`, entry_point: d });
        if (e.connection === `reauth` || e.connection === `connect`) {
          let t = Rt(a.apps, Te)?.id,
            n = Te?.find(
              (e) =>
                e.visibility !== `HIDDEN` &&
                !e.id.startsWith(`implicit_link::`) &&
                e.auth_status === `REAUTH_REQUIRED` &&
                t != null &&
                H(t) === H(e.connector_id),
            ),
            r = pe?.find((e) => {
              let { id: n } = e;
              return H(n) === H(t ?? ``);
            });
          if (t == null || (e.connection === `reauth` && n == null)) {
            (o(`failure`), N(e.id));
            return;
          }
          oe({ app: r, connectorId: t, linkId: n?.id, sourceId: e.id, recordOutcome: o });
          return;
        }
        (j(e.id), J(!1));
        let s = new AbortController();
        ((W.current = s),
          (async () => {
            if (e.connection === `disabled`) {
              r != null &&
                !r.plugin.enabled &&
                (await S({
                  pluginId: a.summary.id,
                  pluginDisplayName: e.name,
                  plugin: a.summary,
                  enabled: !0,
                }));
              for (let e of pe ?? []) {
                if (!X() || s.signal.aborted) return;
                !e.isEnabled &&
                  a.apps.some((t) => {
                    let { id: n } = t;
                    return H(n) === H(e.id);
                  }) &&
                  (await w({ appId: e.id, enabled: !0 }));
              }
            } else if (e.connection !== `refresh` && e.connection !== `connected`) {
              let t = await ht(f, Ee(a), { hostId: i, signal: s.signal });
              if (t !== `installed`) {
                X() &&
                  !s.signal.aborted &&
                  (o(t === `failed` ? `failure` : `cancelled`), N(t === `failed` ? e.id : null));
                return;
              }
            }
            if (X() && !s.signal.aborted) {
              let t = await tt(e.id);
              X() &&
                !s.signal.aborted &&
                (o(
                  t === `connected`
                    ? `success`
                    : t === `connect` || t === `reauth`
                      ? `connection_required`
                      : `failure`,
                ),
                N(t === `connected` || t === `connect` || t === `reauth` ? null : e.id));
            }
          })()
            .catch(() => {
              X() && !s.signal.aborted && (o(`failure`), N(e.id));
            })
            .finally(() => {
              W.current === s && ((W.current = null), U.current && j(null));
            }));
      }),
      (t[90] = d),
      (t[91] = M),
      (t[92] = pe),
      (t[93] = i),
      (t[94] = E),
      (t[95] = X),
      (t[96] = qe),
      (t[97] = Te),
      (t[98] = B),
      (t[99] = Je),
      (t[100] = tt),
      (t[101] = f),
      (t[102] = w),
      (t[103] = S),
      (t[104] = gt))
    : (gt = t[104]);
  let yt;
  t[105] !== r ||
  t[106] !== v ||
  t[107] !== d ||
  t[108] !== i ||
  t[109] !== m ||
  t[110] !== X ||
  t[111] !== l ||
  t[112] !== B ||
  t[113] !== _ ||
  t[114] !== f ||
  t[115] !== a
    ? ((yt = () => {
        if (
          !X() ||
          b.current != null ||
          B != null ||
          f.get(vt, { accountId: r, userId: a, hostId: i }).isPending
        )
          return;
        let e = new AbortController();
        ((b.current = e),
          f
            .get(Oe)
            .count(`default`, `write_like_me.setup_funnel`, {
              category: v ?? `not_applicable`,
              entry_point: d,
              stage: `use_clicked`,
            }),
          de(!0),
          J(!1),
          (async () => {
            let t = await _.mutateAsync({
              enabled: !0,
              prepareForChat: !0,
              prepareForChatSignal: e.signal,
              entryPoint: d,
              hostId: i,
              signal: new AbortController().signal,
            });
            if (t.status !== `cancelled` && X()) {
              if (t.status === `failed`) {
                J(!0);
                return;
              }
              X() && !e.signal.aborted && (await l(pt(m), e.signal));
            }
          })()
            .catch(() => {
              X() && J(!0);
            })
            .finally(() => {
              ((b.current = null), U.current && de(!1));
            }));
      }),
      (t[105] = r),
      (t[106] = v),
      (t[107] = d),
      (t[108] = i),
      (t[109] = m),
      (t[110] = X),
      (t[111] = l),
      (t[112] = B),
      (t[113] = _),
      (t[114] = f),
      (t[115] = a),
      (t[116] = yt))
    : (yt = t[116]);
  let xt;
  t[117] !== X || t[118] !== tt
    ? ((xt = () => {
        tt()
          .then(() => {
            X() && (J(!1), N(null));
          })
          .catch(() => {
            X() && J(!0);
          });
      }),
      (t[117] = X),
      (t[118] = tt),
      (t[119] = xt))
    : (xt = t[119]);
  let St;
  t[120] !== Qe ||
  t[121] !== v ||
  t[122] !== qe ||
  t[123] !== u ||
  t[124] !== B ||
  t[125] !== at ||
  t[126] !== ct ||
  t[127] !== ut ||
  t[128] !== dt ||
  t[129] !== ft ||
  t[130] !== mt ||
  t[131] !== gt ||
  t[132] !== yt ||
  t[133] !== xt
    ? ((St = (0, qt.jsx)(Dt, {
        apps: Qe,
        enabled: at,
        onManage: u,
        category: v,
        onCategoryChange: ct,
        error: ut,
        isContinuing: dt,
        isLoading: ft,
        isRefreshing: qe,
        pendingAppId: B,
        onClose: mt,
        onConnect: gt,
        onContinue: yt,
        onRetry: xt,
      })),
      (t[120] = Qe),
      (t[121] = v),
      (t[122] = qe),
      (t[123] = u),
      (t[124] = B),
      (t[125] = at),
      (t[126] = ct),
      (t[127] = ut),
      (t[128] = dt),
      (t[129] = ft),
      (t[130] = mt),
      (t[131] = gt),
      (t[132] = yt),
      (t[133] = xt),
      (t[134] = St))
    : (St = t[134]);
  let Ct;
  t[135] !== nt ||
  t[136] !== se ||
  t[137] !== ce ||
  t[138] !== i ||
  t[139] !== X ||
  t[140] !== F ||
  t[141] !== tt
    ? ((Ct =
        F == null
          ? null
          : (0, qt.jsx)(nt, {
              app: F.app ?? null,
              connectorId: F.connectorId,
              hostId: i,
              isReconnecting: F?.linkId != null,
              reauthLinkId: F?.linkId,
              beforeConnect: async () => X(),
              onOpenChange: (e) => {
                e || (V.current || F.recordOutcome(`cancelled`), oe(null));
              },
              onExternalConnectStarted: () => F.recordOutcome(`connection_required`),
              onOAuthStarted: (e) => {
                F.recordOutcome(`connection_required`);
                let t = ce(e);
                if (F != null && t != null) {
                  let n = new AbortController();
                  ((W.current = n),
                    n.signal.addEventListener(`abort`, () => se({ oauthState: t }), { once: !0 }),
                    ae({ sourceId: F.sourceId, appId: e.app.id, oauthState: t }));
                }
              },
              onConnectFailed: () => {
                X() && (F.recordOutcome(`failure`), N(F?.sourceId ?? null));
              },
              onConnected: async () => {
                if (((V.current = !0), X()))
                  try {
                    let e = await tt(F?.sourceId);
                    X() &&
                      (F.recordOutcome(e === `connected` ? `success` : `connection_required`),
                      N(e === `connected` ? null : (F?.sourceId ?? null)));
                  } catch {
                    X() && (F.recordOutcome(`failure`), N(F?.sourceId ?? null));
                  }
              },
            })),
      (t[135] = nt),
      (t[136] = se),
      (t[137] = ce),
      (t[138] = i),
      (t[139] = X),
      (t[140] = F),
      (t[141] = tt),
      (t[142] = Ct))
    : (Ct = t[142]);
  let wt;
  return (
    t[143] !== St || t[144] !== Ct
      ? ((wt = (0, qt.jsxs)(qt.Fragment, { children: [rt, St, Ct] })),
        (t[143] = St),
        (t[144] = Ct),
        (t[145] = wt))
      : (wt = t[145]),
    wt
  );
}
function Ut(e) {
  return e != null;
}
function Wt(e) {
  if (e instanceof N && e.status === 404) return null;
  throw e;
}
var Gt, $, Kt, qt;
function Jt() {
  return (Jt = e(() => {
    ((Gt = g()),
      P(),
      T(),
      ($ = a()),
      (Kt = o()),
      S(),
      et(),
      at(),
      ut(),
      Qe(),
      ze(),
      G(),
      ct(),
      we(),
      Ye(),
      pe(),
      Te(),
      xe(),
      Fe(),
      Re(),
      Ce(),
      je(),
      J(),
      r(),
      rt(),
      i(),
      Je(),
      _(),
      gt(),
      xt(),
      yt(),
      It(),
      Vt(),
      (qt = f()));
  }))();
}
function Yt(e) {
  let t = (0, Xt.c)(50),
    { accountId: r, userId: i, hostId: a, entryPoint: o, onClose: s, workspaceRoots: c, project: l } = e,
    u = o === void 0 ? `unknown` : o,
    d = n(ee),
    f = ie(),
    { userId: p } = He(),
    m = j($e),
    h = j(fe),
    g = (0, Zt.useRef)(null),
    _ = (0, Zt.useRef)(!1),
    v;
  t[0] !== u || t[1] !== d
    ? ((v = () => {
        g.current ??
          ((g.current = performance.now()),
          d
            .get(Oe)
            .count(`default`, `write_like_me.setup_funnel`, {
              category: `not_applicable`,
              entry_point: u,
              stage: `shown`,
            }));
      }),
      (t[0] = u),
      (t[1] = d),
      (t[2] = v))
    : (v = t[2]);
  let y = (0, Zt.useEffectEvent)(v),
    b;
  t[3] !== u || t[4] !== d
    ? ((b = (e) => {
        _.current ||
          ((_.current = !0),
          d
            .get(Oe)
            .count(`default`, `write_like_me.setup_funnel`, {
              category: `not_applicable`,
              entry_point: u,
              stage: e,
            }),
          d
            .get(Oe)
            .hist(
              `default`,
              `write_like_me.setup_duration_ms`,
              { entry_point: u, outcome: e },
              g.current == null ? 0 : performance.now() - g.current,
            ));
      }),
      (t[3] = u),
      (t[4] = d),
      (t[5] = b))
    : (b = t[5]);
  let x = b,
    ne;
  t[6] === d
    ? (ne = t[7])
    : ((ne = () => {
        Ae(d, Yt);
      }),
      (t[6] = d),
      (t[7] = ne));
  let S = (0, Zt.useEffectEvent)(ne),
    C;
  t[8] !== r || t[9] !== S || t[10] !== m || t[11] !== p || t[12] !== y || t[13] !== i || t[14] !== h.status
    ? ((C = () => {
        m !== r || p !== i || h.status !== `allowed` ? S() : y();
      }),
      (t[8] = r),
      (t[9] = S),
      (t[10] = m),
      (t[11] = p),
      (t[12] = y),
      (t[13] = i),
      (t[14] = h.status),
      (t[15] = C))
    : (C = t[15]);
  let w;
  if (
    (t[16] !== r || t[17] !== m || t[18] !== p || t[19] !== i || t[20] !== h.status
      ? ((w = [m, p, r, i, h.status]),
        (t[16] = r),
        (t[17] = m),
        (t[18] = p),
        (t[19] = i),
        (t[20] = h.status),
        (t[21] = w))
      : (w = t[21]),
    (0, Zt.useEffect)(C, w),
    m !== r || p !== i || h.status !== `allowed`)
  )
    return null;
  let T = `${r}:${i}:${a}`,
    E;
  t[22] === c ? (E = t[23]) : ((E = c ?? []), (t[22] = c), (t[23] = E));
  let D;
  t[24] !== s || t[25] !== x
    ? ((D = () => {
        (x(`dismissed`), s());
      }),
      (t[24] = s),
      (t[25] = x),
      (t[26] = D))
    : (D = t[26]);
  let O;
  t[27] !== s || t[28] !== x || t[29] !== d
    ? ((O = () => {
        (x(`dismissed`), s(), d.get(V).navigate(`/settings/personalization`));
      }),
      (t[27] = s),
      (t[28] = x),
      (t[29] = d),
      (t[30] = O))
    : (O = t[30]);
  let k;
  t[31] !== r ||
  t[32] !== a ||
  t[33] !== f ||
  t[34] !== s ||
  t[35] !== l ||
  t[36] !== x ||
  t[37] !== d ||
  t[38] !== i
    ? ((k = async (e, t) => {
        let n = () =>
          !t.aborted && d.get($e) === r && d.get(Pe).userId === i && d.get(fe).status === `allowed`;
        if (!n()) return;
        if (Ze(a)) {
          let r = await d.query.getOrFetch(qe);
          if (!n()) return;
          let i = mt(r),
            a = ke(),
            o = d.get(V).prepareNavigation(te(a));
          if (o == null || (await o(), !n())) return;
          let c = await Ie(d, {
            conversationId: a,
            conversationOrigin: `tpp`,
            prompt: e,
            model: i.slug,
            thinkingEffort: i.thinkingEffort,
            requireDispatchAcceptance: !0,
            startupSignal: t,
            isSubmissionCurrent: n,
          });
          if (!n()) return;
          if (c == null) throw Error(`Writing style sample was not accepted`);
          (x(`completed`), s());
          return;
        }
        let o = a === z;
        if (o && !d.get(be)) throw Error(`Writing style cloud execution is unavailable`);
        if (!o && a !== `local` && l?.type !== `remote`) {
          d.get(F).danger(
            f.formatMessage({
              id: `writingStyle.remoteProjectRequired`,
              defaultMessage: `Close this dialog and select a project on the remote host to start Writing style`,
              description: `Actionable error when starting a Writing style sample on an SSH host without a selected remote project`,
            }),
            { errorAnalytics: { toastId: `writingStyle.remoteProjectRequired` } },
          );
          return;
        }
        K(d, {
          activeProject: o ? null : q(l ?? null),
          codexAppMode: o ? `codex` : void 0,
          prefillPrompt: e,
          prefillComposerMode: `local`,
          prefillCloudThreadPrototype: o,
          startInSidebar: !0,
          onNavigate: () => {
            (Me(d, `work`), x(`completed`), s());
          },
        });
      }),
      (t[31] = r),
      (t[32] = a),
      (t[33] = f),
      (t[34] = s),
      (t[35] = l),
      (t[36] = x),
      (t[37] = d),
      (t[38] = i),
      (t[39] = k))
    : (k = t[39]);
  let A;
  return (
    t[40] !== r ||
    t[41] !== u ||
    t[42] !== a ||
    t[43] !== O ||
    t[44] !== k ||
    t[45] !== T ||
    t[46] !== E ||
    t[47] !== D ||
    t[48] !== i
      ? ((A = (0, Qt.jsx)(
          Ht,
          {
            accountId: r,
            hostId: a,
            entryPoint: u,
            userId: i,
            workspaceRoots: E,
            onClose: D,
            onManage: O,
            onContinue: k,
          },
          T,
        )),
        (t[40] = r),
        (t[41] = u),
        (t[42] = a),
        (t[43] = O),
        (t[44] = k),
        (t[45] = T),
        (t[46] = E),
        (t[47] = D),
        (t[48] = i),
        (t[49] = A))
      : (A = t[49]),
    A
  );
}
var Xt, Zt, Qt;
function $t() {
  return ($t = e(() => {
    ((Xt = g()),
      T(),
      I(),
      (Zt = a()),
      S(),
      et(),
      ge(),
      ze(),
      we(),
      Ye(),
      pe(),
      Ke(),
      X(),
      Se(),
      Ge(),
      b(),
      ue(),
      de(),
      W(),
      x(),
      U(),
      De(),
      r(),
      E(),
      Jt(),
      (Qt = f()));
  }))();
}
$t();
export { Yt as AccountWritingStyleDialog };
//# sourceMappingURL=account-dialog-81460bcaedd4.js.map
