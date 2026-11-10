import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  CH as n,
  Cat as r,
  Cot as i,
  EV as a,
  Fat as o,
  HG as s,
  IDt as c,
  Ixt as l,
  JG as u,
  Kot as d,
  LV as f,
  PH as p,
  Pat as m,
  Pxt as h,
  TJ as g,
  VDt as ee,
  Vxt as _,
  Xot as v,
  YC as y,
  Yot as b,
  ZC as x,
  _O as te,
  fO as S,
  gO as ne,
  hot as re,
  hrt as C,
  i3 as w,
  iw as T,
  jDt as E,
  lgt as D,
  lot as O,
  mG as k,
  mO as A,
  oO as j,
  oot as M,
  r3 as ie,
  rst as N,
  t3 as P,
  tw as ae,
  vO as oe,
  vrt as F,
  vzt as I,
  wot as L,
  xMt as R,
  xV as z,
  xat as B,
  yMt as V,
  yzt as H,
  zxt as se,
} from "./app-shared-bbfeca5e5737.js";
import {
  Aur as U,
  Bcr as ce,
  Bun as le,
  C2 as W,
  Ccr as ue,
  Dkn as de,
  FAn as G,
  Fur as fe,
  G4n as K,
  Gcr as pe,
  HKt as me,
  Hur as he,
  IYt as ge,
  Icr as _e,
  LMn as ve,
  Nur as ye,
  Ocr as be,
  QMr as xe,
  Run as Se,
  Skn as Ce,
  TEr as we,
  U4n as Te,
  Udr as q,
  VKt as Ee,
  Vur as De,
  Wcr as Oe,
  Ycr as ke,
  ZQn as Ae,
  a0n as je,
  alr as Me,
  dIn as J,
  e$n as Ne,
  fJt as Pe,
  fMr as Fe,
  fOn as Ie,
  fur as Le,
  gOr as Re,
  hJt as ze,
  hOr as Be,
  hzt as Ve,
  iPr as He,
  kur as Ue,
  lIr as We,
  mzt as Ge,
  pur as Ke,
  s0n as qe,
  sIr as Y,
  sPr as Je,
  tNr as X,
  uIn as Ye,
  uOn as Xe,
  vEr as Ze,
  w2 as Qe,
  xMr as $e,
  zYt as et,
} from "./app-initial-5851df3f6cb1.js";
import { n as tt, t as nt } from "./app-connect-modal-fb7e1b0124f4.js";
import { n as rt, t as it } from "./app-connect-modal-by-id-a3e486d4397f.js";
import { n as at, t as ot } from "./use-app-connect-flow-7088479fda99.js";
import { n as st, t as ct } from "./connector-logo-stack-f9fdd0a03bf9.js";
import { n as lt, t as ut } from "./apps-availability-30e091a5d405.js";
import { n as dt, t as ft } from "./background-b4c0c6f8f01e.js";
import { n as pt, t as mt } from "./writing-style-demo-cab6908153aa.js";
import { i as ht, r as gt } from "./contracts-80c91d59a0a6.js";
import { n as _t, r as vt, t as yt } from "./preference-b164b95b048a.js";
function bt(e, t) {
  let n = performance.now(),
    r = !1;
  return (
    e.get(Ye).count(`default`, `write_like_me.connector_engagement`, { ...t, outcome: `started` }),
    (i) => {
      r ||
        ((r = !0),
        e.get(Ye).count(`default`, `write_like_me.connector_engagement`, { ...t, outcome: i }),
        e
          .get(Ye)
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
    J();
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
      : ((s = (0, Z.jsx)(`div`, { className: y, children: o })), (t[9] = o), (t[10] = s)),
    s
  );
}
function Ct(e, t) {
  return Number(e.connection === `connected`) - Number(t.connection === `connected`);
}
function wt(e) {
  let n = (0, Tt.c)(28),
    { app: r, disabled: i, pending: o, onConnect: l } = e,
    d = ee(),
    f;
  n[0] !== r.connection || n[1] !== r.name || n[2] !== d
    ? ((f = d.formatMessage(
        {
          id: `writingStyle.apps.sourceActionLabel`,
          defaultMessage: `{action, select, reauth {Reconnect} disabled {Enable} refresh {Refresh} other {Connect}} {appName}`,
          description: `Accessible action for a writing source. action indicates reauthorization, enablement, refreshing host readiness, or connecting. appName is the product name.`,
        },
        { action: r.connection, appName: r.name },
      )),
      (n[0] = r.connection),
      (n[1] = r.name),
      (n[2] = d),
      (n[3] = f))
    : (f = n[3]);
  let p = f,
    m = r.connection === `disconnected` || r.connection === `connect`,
    h;
  if (m) {
    let e;
    (n[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Z.jsx)(u, {})), (n[4] = e)) : (e = n[4]),
      (h = e));
  } else {
    let e;
    (n[5] === r.connection
      ? (e = n[6])
      : ((e = (0, Z.jsx)(c, {
          id: `writingStyle.apps.sourceAction`,
          defaultMessage: `{action, select, reauth {Reconnect} disabled {Enable} other {Refresh}}`,
          description: `Action for an installed writing source needing authorization, enablement, or refreshed host readiness`,
          values: { action: r.connection },
        })),
        (n[5] = r.connection),
        (n[6] = e)),
      (h = e));
  }
  let g;
  if (r.connection === `connected`) {
    let e;
    n[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Z.jsx)(a, {})), (n[7] = e)) : (e = n[7]);
    let t;
    (n[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsxs)(`span`, {
          className: `flex size-9 shrink-0 items-center justify-center`,
          role: `status`,
          children: [
            e,
            (0, Z.jsx)(`span`, {
              className: `sr-only`,
              children: (0, Z.jsx)(c, {
                id: `writingStyle.apps.connected`,
                defaultMessage: `Connected`,
                description: `Status of an app that can supply the user's writing examples`,
              }),
            }),
          ],
        })),
        (n[8] = t))
      : (t = n[8]),
      (g = t));
  } else if (r.connection === `unavailable`) {
    let e;
    (n[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(c, {
          id: `writingStyle.apps.unavailable`,
          defaultMessage: `Unavailable`,
          description: `Status of a writing source app that is unavailable for this account or execution host`,
        })),
        (n[9] = e))
      : (e = n[9]),
      (g = e));
  } else {
    let e = m ? `inputIcon` : `medium`,
      a;
    n[10] !== r || n[11] !== l ? ((a = () => l(r)), (n[10] = r), (n[11] = l), (n[12] = a)) : (a = n[12]);
    let s;
    (n[13] !== p || n[14] !== h || n[15] !== i || n[16] !== o || n[17] !== e || n[18] !== a
      ? ((s = (0, Z.jsx)(t, {
          type: `button`,
          color: `ghostSecondary`,
          size: e,
          radius: `full`,
          "aria-label": p,
          title: p,
          "aria-busy": o,
          disabled: i,
          onClick: a,
          children: h,
        })),
        (n[13] = p),
        (n[14] = h),
        (n[15] = i),
        (n[16] = o),
        (n[17] = e),
        (n[18] = a),
        (n[19] = s))
      : (s = n[19]),
      (g = s));
  }
  let _;
  n[20] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = (0, Z.jsx)(s, {})), (n[20] = _)) : (_ = n[20]);
  let v;
  n[21] !== r.logoDarkUrl || n[22] !== r.logoUrl
    ? ((v = (0, Z.jsx)(Ge, {
        className: `size-5`,
        alt: ``,
        logoUrl: r.logoUrl,
        logoDarkUrl: r.logoDarkUrl,
        fallback: _,
      })),
      (n[21] = r.logoDarkUrl),
      (n[22] = r.logoUrl),
      (n[23] = v))
    : (v = n[23]);
  let y;
  return (
    n[24] !== r.name || n[25] !== g || n[26] !== v
      ? ((y = (0, Z.jsx)(ae, { variant: `featured`, label: r.name, icon: v, control: g })),
        (n[24] = r.name),
        (n[25] = g),
        (n[26] = v),
        (n[27] = y))
      : (y = n[27]),
    y
  );
}
var Tt, Z;
function Et() {
  return (Et = e(() => {
    ((Tt = I()), E(), Ve(), P(), g(), T(), x(), (Z = R()));
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
      error: l,
      isContinuing: u,
      isLoading: d,
      isRefreshing: p,
      pendingAppId: m,
      onClose: h,
      onConnect: g,
      onContinue: _,
      onRetry: v,
    } = e,
    b = p !== void 0 && p,
    x = ee(),
    S = (0, Nt.useRef)(null),
    re,
    C,
    w,
    T,
    E,
    D,
    O,
    M,
    N,
    P,
    oe,
    F,
    I,
    L,
    R,
    z,
    B,
    V,
    H,
    se,
    U,
    ce,
    le;
  if (
    n[0] !== r ||
    n[1] !== o ||
    n[2] !== i ||
    n[3] !== x ||
    n[4] !== u ||
    n[5] !== d ||
    n[6] !== s ||
    n[7] !== h ||
    n[8] !== _ ||
    n[9] !== a ||
    n[10] !== m
  ) {
    let e = r?.filter(jt);
    ((w = u || m != null), (T = !w));
    let l = (e) => {
      w || (s(e), S.current?.focus());
    };
    ((C = A),
      (oe = !0),
      (F = `setup`),
      (I = `chatgpt`),
      n[34] === h ? (L = n[35]) : ((L = (e) => !e && h()), (n[34] = h), (n[35] = L)),
      n[36] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((z = {
            onOpenAutoFocus: (e) => {
              (e.preventDefault(), S.current?.focus());
            },
          }),
          (n[36] = z))
        : (z = n[36]),
      (re = j),
      (ce = `form`),
      (le = `full`),
      (E = `chatgpt`),
      (D = `relative overflow-hidden`),
      n[37] !== T || n[38] !== _
        ? ((O = (e) => {
            (e.preventDefault(), T && _());
          }),
          (n[37] = T),
          (n[38] = _),
          (n[39] = O))
        : (O = n[39]),
      n[40] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((M = (0, Q.jsx)(ft, {})), (n[40] = M))
        : (M = n[40]),
      n[41] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((N = (0, Q.jsx)(`div`, {
            className: `relative flex shrink-0 items-center justify-center pt-8 select-none`,
            children: (0, Q.jsx)(`span`, {
              className: `flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl border border-default bg-surface text-default shadow-sm`,
              children: (0, Q.jsx)(k, {}),
            }),
          })),
          (n[41] = N))
        : (N = n[41]),
      (P =
        o == null
          ? null
          : (0, Q.jsx)(t, {
              className: `absolute top-6 left-6`,
              type: `button`,
              color: `ghostSecondary`,
              size: `inputIcon`,
              radius: `full`,
              disabled: w,
              onClick: () => l(null),
              "aria-label": x.formatMessage({
                id: `writingStyle.setup.back`,
                defaultMessage: `Back`,
                description: `Button returning from the Writing style source picker to its overview without saving consent`,
              }),
              children: (0, Q.jsx)(f, {}),
            })),
      (se = `relative flex min-h-0 flex-1 flex-col gap-4 px-8 pt-6 pb-4`));
    let p;
    n[42] === i
      ? (p = n[43])
      : ((p = (0, Q.jsx)(te, {
          asChild: !0,
          children: (0, Q.jsx)(`h2`, {
            ref: S,
            tabIndex: -1,
            className: `heading-lg font-semibold`,
            children: i
              ? (0, Q.jsx)(c, {
                  id: `writingStyle.setup.enabledTitle`,
                  defaultMessage: `Writing style is personalized`,
                  description: `Heading confirming that writing-style personalization has been enabled`,
                })
              : (0, Q.jsx)(c, {
                  id: `writingStyle.setup.title`,
                  defaultMessage: `Set up writing style`,
                  description: `Heading while writing-style personalization has not yet been enabled`,
                }),
          }),
        })),
        (n[42] = i),
        (n[43] = p));
    let g;
    (n[44] === a
      ? (g = n[45])
      : ((g = (0, Q.jsx)(ne, {
          className: `text-base text-secondary`,
          children: (0, Q.jsx)(c, {
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
        (n[45] = g)),
      n[46] !== p || n[47] !== g
        ? ((U = (0, Q.jsxs)(`div`, {
            className: `flex shrink-0 flex-col items-center gap-2 text-center select-none`,
            children: [p, g],
          })),
          (n[46] = p),
          (n[47] = g),
          (n[48] = U))
        : (U = n[48]),
      (R = `flex min-h-0 flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto`),
      n[49] === o
        ? (B = n[50])
        : ((B =
            o == null
              ? (0, Q.jsx)(`h3`, {
                  className: `font-semibold`,
                  children: (0, Q.jsx)(c, {
                    id: `writingStyle.setup.improve`,
                    defaultMessage: `Connect apps to improve writing (optional)`,
                    description: `Heading above optional app connections that provide additional writing examples`,
                  }),
                })
              : null),
          (n[49] = o),
          (n[50] = B)),
      n[51] === d
        ? (V = n[52])
        : ((V = d
            ? (0, Q.jsxs)(`div`, {
                role: `status`,
                className: `flex items-center justify-center gap-2 text-secondary`,
                children: [
                  (0, Q.jsx)(ie, {}),
                  (0, Q.jsx)(c, {
                    id: `writingStyle.apps.loading`,
                    defaultMessage: `Checking connected apps…`,
                    description: `Status while Writing style setup checks plugins, host availability and account links`,
                  }),
                ],
              })
            : null),
          (n[51] = d),
          (n[52] = V)),
      (H =
        r != null && o == null
          ? (0, Q.jsx)(`div`, {
              className: y,
              children: Pt.map((n) => {
                let r = Ft[n],
                  i = e?.filter((e) => e.category === n),
                  a = i != null && i.length > 0;
                return (0, Q.jsx)(
                  ae,
                  {
                    className: `justify-between max-sm:flex-wrap`,
                    variant: `featured`,
                    icon: (0, Q.jsx)(r, {}),
                    label: (0, Q.jsx)(c, {
                      id: `writingStyle.setup.category`,
                      defaultMessage: `{category, select, email {Email} messaging {Messaging} other {Documents}}`,
                      description: `Writing category label in setup; category is email, messaging or documents`,
                      values: { category: n },
                    }),
                    control: (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        a
                          ? (0, Q.jsxs)(Q.Fragment, {
                              children: [
                                (0, Q.jsx)(ct, { ariaLabel: x.formatList(i.map(At)), children: i.map(kt) }),
                                (0, Q.jsx)(c, {
                                  id: `writingStyle.apps.connected`,
                                  defaultMessage: `Connected`,
                                  description: `Status of an app that can supply the user's writing examples`,
                                }),
                              ],
                            })
                          : null,
                        (0, Q.jsx)(t, {
                          type: `button`,
                          color: `ghostSecondary`,
                          size: `toolbar`,
                          disabled: w,
                          "aria-label": a
                            ? x.formatMessage(
                                {
                                  id: `writingStyle.setup.connectedCategoryAction`,
                                  defaultMessage: `{category, select, email {Connect more email apps} messaging {Connect more messaging apps} other {Connect more document apps}}. Connected: {apps}`,
                                  description: `Accessible name for the connected-app chevron in Writing style setup. It opens that category picker; category is email, messaging or documents, and apps is the complete localized list of connected product names.`,
                                },
                                { category: n, apps: x.formatList(i.map(Ot)) },
                              )
                            : x.formatMessage(
                                {
                                  id: `writingStyle.setup.openCategory`,
                                  defaultMessage: `{category, select, email {Set up email} messaging {Set up messaging} other {Set up documents}}`,
                                  description: `Accessible action opening a category's app picker in Writing style setup, including with connected apps; category is email, messaging or documents`,
                                },
                                { category: n },
                              ),
                          onClick: () => l(n),
                          children: (0, Q.jsx)(c, {
                            id: `writingStyle.setup.setUp`,
                            defaultMessage: `Set up`,
                            description: `Opens the optional app picker for a writing category`,
                          }),
                        }),
                      ],
                    }),
                  },
                  n,
                );
              }),
            })
          : null),
      (n[0] = r),
      (n[1] = o),
      (n[2] = i),
      (n[3] = x),
      (n[4] = u),
      (n[5] = d),
      (n[6] = s),
      (n[7] = h),
      (n[8] = _),
      (n[9] = a),
      (n[10] = m),
      (n[11] = re),
      (n[12] = C),
      (n[13] = w),
      (n[14] = T),
      (n[15] = E),
      (n[16] = D),
      (n[17] = O),
      (n[18] = M),
      (n[19] = N),
      (n[20] = P),
      (n[21] = oe),
      (n[22] = F),
      (n[23] = I),
      (n[24] = L),
      (n[25] = R),
      (n[26] = z),
      (n[27] = B),
      (n[28] = V),
      (n[29] = H),
      (n[30] = se),
      (n[31] = U),
      (n[32] = ce),
      (n[33] = le));
  } else
    ((re = n[11]),
      (C = n[12]),
      (w = n[13]),
      (T = n[14]),
      (E = n[15]),
      (D = n[16]),
      (O = n[17]),
      (M = n[18]),
      (N = n[19]),
      (P = n[20]),
      (oe = n[21]),
      (F = n[22]),
      (I = n[23]),
      (L = n[24]),
      (R = n[25]),
      (z = n[26]),
      (B = n[27]),
      (V = n[28]),
      (H = n[29]),
      (se = n[30]),
      (U = n[31]),
      (ce = n[32]),
      (le = n[33]));
  let W;
  n[53] !== r || n[54] !== o || n[55] !== u || n[56] !== b || n[57] !== g || n[58] !== m
    ? ((W =
        r != null && o != null
          ? (0, Q.jsx)(St, {
              apps: r.filter((e) => e.category === o),
              isContinuing: u || b,
              pendingAppId: m,
              onConnect: g,
            })
          : null),
      (n[53] = r),
      (n[54] = o),
      (n[55] = u),
      (n[56] = b),
      (n[57] = g),
      (n[58] = m),
      (n[59] = W))
    : (W = n[59]);
  let ue;
  n[60] !== w || n[61] !== l || n[62] !== b || n[63] !== v
    ? ((ue =
        l == null
          ? null
          : (0, Q.jsxs)(`div`, {
              role: `alert`,
              className: `flex flex-col items-center gap-2`,
              children: [
                (0, Q.jsx)(`p`, { children: l }),
                (0, Q.jsx)(t, {
                  type: `button`,
                  color: `secondary`,
                  disabled: w || b,
                  loading: b,
                  onClick: v,
                  children: (0, Q.jsx)(c, {
                    id: `writingStyle.retry`,
                    defaultMessage: `Retry`,
                    description: `Button to retry loading writing style or source app information after a failure`,
                  }),
                }),
              ],
            })),
      (n[60] = w),
      (n[61] = l),
      (n[62] = b),
      (n[63] = v),
      (n[64] = ue))
    : (ue = n[64]);
  let de;
  n[65] !== R || n[66] !== W || n[67] !== ue || n[68] !== B || n[69] !== V || n[70] !== H
    ? ((de = (0, Q.jsxs)(`div`, { className: R, children: [B, V, H, W, ue] })),
      (n[65] = R),
      (n[66] = W),
      (n[67] = ue),
      (n[68] = B),
      (n[69] = V),
      (n[70] = H),
      (n[71] = de))
    : (de = n[71]);
  let G = !T,
    fe;
  n[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, Q.jsx)(c, {
        id: `writingStyle.setup.showMe`,
        defaultMessage: `Show me`,
        description: `Saves writing-style personalization and starts a demonstration in chat; connecting apps is optional`,
      })),
      (n[72] = fe))
    : (fe = n[72]);
  let K;
  n[73] !== u || n[74] !== G
    ? ((K = (0, Q.jsx)(`div`, {
        className: `flex shrink-0 flex-col gap-2`,
        children: (0, Q.jsx)(t, {
          type: `submit`,
          size: `beaconAction`,
          "aria-busy": u,
          disabled: G,
          loading: u,
          children: fe,
        }),
      })),
      (n[73] = u),
      (n[74] = G),
      (n[75] = K))
    : (K = n[75]);
  let pe;
  n[76] !== de || n[77] !== K || n[78] !== se || n[79] !== U
    ? ((pe = (0, Q.jsxs)(`div`, { className: se, children: [U, de, K] })),
      (n[76] = de),
      (n[77] = K),
      (n[78] = se),
      (n[79] = U),
      (n[80] = pe))
    : (pe = n[80]);
  let me;
  n[81] !== re ||
  n[82] !== E ||
  n[83] !== D ||
  n[84] !== O ||
  n[85] !== M ||
  n[86] !== N ||
  n[87] !== P ||
  n[88] !== pe ||
  n[89] !== ce ||
  n[90] !== le
    ? ((me = (0, Q.jsxs)(re, {
        as: ce,
        size: le,
        variant: E,
        className: D,
        onSubmit: O,
        children: [M, N, P, pe],
      })),
      (n[81] = re),
      (n[82] = E),
      (n[83] = D),
      (n[84] = O),
      (n[85] = M),
      (n[86] = N),
      (n[87] = P),
      (n[88] = pe),
      (n[89] = ce),
      (n[90] = le),
      (n[91] = me))
    : (me = n[91]);
  let he;
  return (
    n[92] !== C || n[93] !== oe || n[94] !== F || n[95] !== I || n[96] !== L || n[97] !== z || n[98] !== me
      ? ((he = (0, Q.jsx)(C, {
          open: oe,
          size: F,
          variant: I,
          onOpenChange: L,
          contentProps: z,
          children: me,
        })),
        (n[92] = C),
        (n[93] = oe),
        (n[94] = F),
        (n[95] = I),
        (n[96] = L),
        (n[97] = z),
        (n[98] = me),
        (n[99] = he))
      : (he = n[99]),
    he
  );
}
function Ot(e) {
  return e.name;
}
function kt(e) {
  return (0, Q.jsx)(
    Ge,
    {
      className: `size-5`,
      alt: ``,
      logoUrl: e.logoUrl,
      logoDarkUrl: e.logoDarkUrl,
      fallback: (0, Q.jsx)(s, {}),
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
    ((Mt = I()),
      (Nt = H()),
      E(),
      dt(),
      Ve(),
      st(),
      P(),
      oe(),
      S(),
      g(),
      w(),
      T(),
      x(),
      Et(),
      (Q = R()),
      (Pt = [`messaging`, `email`, `documents`]),
      (Ft = { messaging: z, email: p, documents: n }));
  }))();
}
function Lt(e, t, n, r, i, a) {
  let o = n?.apps.map(({ id: e }) => q(e)),
    s = zt(t.id, n, a),
    c = s?.plugin ?? n?.summary,
    l = a == null ? c?.installed === !0 : s != null,
    u = i?.filter((e) => e.visibility !== `HIDDEN` && !e.id.startsWith(`implicit_link::`)),
    d = n == null ? void 0 : Rt(n.apps, i),
    f = n != null && n.apps.length > 0 && d == null,
    p = r?.filter((e) => o?.includes(q(e.id))),
    m = o?.every((e) => p?.some((t) => q(t.id) === e && t.isAccessible && t.isEnabled)),
    h = `disconnected`;
  return (
    c == null ||
    o?.length === 0 ||
    Qe(c) ||
    c.installPolicy === `NOT_AVAILABLE` ||
    (U(e) && p?.some((e) => !e.isEnabled))
      ? (h = `unavailable`)
      : (l && !c.enabled) || p?.some((e) => !e.isEnabled)
        ? (h = `disabled`)
        : f && m
          ? (h = `connected`)
          : u?.some((e) => d != null && q(d.id) === q(e.connector_id) && e.auth_status === `REAUTH_REQUIRED`)
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
          q(t.connector_id) === q(e.id),
      ),
  );
}
function zt(e, t, n) {
  return n?.find(
    ({ plugin: n, canonicalAppId: r }) =>
      n.remotePluginId === e ||
      n.id === t?.summary.id ||
      (r != null && t?.apps.some(({ id: e }) => q(e) === q(r))),
  );
}
var Bt;
function Vt() {
  return (Vt = e(() => {
    (Ue(),
      W(),
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
      accountId: n,
      hostId: r,
      userId: a,
      workspaceRoots: o,
      entryPoint: s,
      onClose: u,
      onContinue: f,
      onManage: p,
    } = e,
    h = s === void 0 ? `unknown` : s,
    g = l(i),
    _ = ee(),
    y;
  t[0] !== n || t[1] !== r || t[2] !== a
    ? ((y = { accountId: n, userId: a, hostId: r }), (t[0] = n), (t[1] = r), (t[2] = a), (t[3] = y))
    : (y = t[3]);
  let b = se(vt, y),
    [x, te] = (0, $.useState)(null),
    S = (0, $.useRef)(null),
    ne;
  t[4] !== n || t[5] !== r || t[6] !== a
    ? ((ne = { accountId: n, userId: a, hostId: r }), (t[4] = n), (t[5] = r), (t[6] = a), (t[7] = ne))
    : (ne = t[7]);
  let { data: re } = se(_t, ne),
    C;
  t[8] === r ? (C = t[9]) : ((C = { hostId: r }), (t[8] = r), (t[9] = C));
  let { setPluginEnabled: w } = de(C),
    T;
  t[10] === r ? (T = t[11]) : ((T = { hostId: r }), (t[10] = r), (t[11] = T));
  let { setAppEnabled: E } = lt(T),
    D;
  t[12] !== r || t[13] !== o
    ? ((D = { hostId: r, roots: o }), (t[12] = r), (t[13] = o), (t[14] = D))
    : (D = t[14]);
  let { data: O, error: k, isLoading: A, refetch: j } = ce(D),
    [M, ie] = (0, $.useState)(null),
    [N, P] = (0, $.useState)(null),
    [ae, oe] = (0, $.useState)(null),
    [F, I] = (0, $.useState)(null),
    L;
  t[15] === r ? (L = t[16]) : ((L = { hostId: r }), (t[15] = r), (t[16] = L));
  let { clearPendingAppConnect: R, handleAppConnectOAuthStarted: z, isAppConnectPending: B } = at(L),
    V;
  t[17] !== B || t[18] !== ae || t[19] !== M || t[20] !== F?.sourceId
    ? ((V = M ?? F?.sourceId ?? (ae != null && B(ae.appId) ? ae.sourceId : null)),
      (t[17] = B),
      (t[18] = ae),
      (t[19] = M),
      (t[20] = F?.sourceId),
      (t[21] = V))
    : (V = t[21]);
  let H = V,
    le = (0, $.useRef)(!1),
    W = (0, $.useRef)(!0),
    G = (0, $.useRef)(null),
    fe,
    K;
  (t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = () => (
        (W.current = !0),
        () => {
          ((W.current = !1), G.current?.abort(), S.current?.abort());
        }
      )),
      (fe = []),
      (t[22] = fe),
      (t[23] = K))
    : ((fe = t[22]), (K = t[23])),
    (0, $.useEffect)(K, fe));
  let [pe, me] = (0, $.useState)(!1),
    [he, ge] = (0, $.useState)(!1),
    _e;
  t[24] === r ? (_e = t[25]) : ((_e = { hostId: r }), (t[24] = r), (t[25] = _e));
  let {
      data: ve,
      loadError: be,
      isLoading: Se,
      isFetching: Ce,
      isHardRefetchingAppsList: we,
      hardRefetchAppsList: Te,
    } = qe(_e),
    Ae;
  t[26] !== n || t[27] !== a
    ? ((Ae = ye({ accountId: n, userId: a })), (t[26] = n), (t[27] = a), (t[28] = Ae))
    : (Ae = t[28]);
  let je;
  t[29] === H ? (je = t[30]) : ((je = () => H == null && S.current == null), (t[29] = H), (t[30] = je));
  let Me;
  t[31] !== Ae || t[32] !== je
    ? ((Me = { ...Ae, staleTime: m.ONE_MINUTE, refetchOnWindowFocus: je }),
      (t[31] = Ae),
      (t[32] = je),
      (t[33] = Me))
    : (Me = t[33]);
  let { data: J, error: Ne, isLoading: Pe, isFetching: Fe, refetch: Ie } = v(Me),
    Le = U(r) ? `chatgpt` : `codex`,
    ze;
  if (t[34] !== n || t[35] !== Le || t[36] !== a) {
    let e;
    (t[38] !== n || t[39] !== Le
      ? ((e = async (e) => {
          let { signal: t } = e,
            r = await Promise.all(
              Bt.map(async (e) => {
                let { id: r } = e,
                  i = await He.safeGet(`/ps/plugins/{plugin_id}`, {
                    parameters: { path: { plugin_id: r } },
                    additionalHeaders: { ...De(Le), "ChatGPT-Account-Id": n },
                    expectedErrorStatuses: [404],
                    signal: Oe(t),
                  }).catch(Wt);
                return i == null ? null : [r, i];
              }),
            );
          return Object.fromEntries(r.filter(Ut));
        }),
        (t[38] = n),
        (t[39] = Le),
        (t[40] = e))
      : (e = t[40]),
      (ze = d({
        queryKey: [`plugins`, `writing-style-sources`, n, a, Le],
        queryFn: e,
        retry: !1,
        staleTime: m.FIVE_MINUTES,
      })),
      (t[34] = n),
      (t[35] = Le),
      (t[36] = a),
      (t[37] = ze));
  } else ze = t[37];
  let { data: Be, error: Ve, isLoading: Ue, isFetching: We, refetch: Ge } = v(ze),
    Ke,
    Y,
    Je,
    X,
    Xe,
    Ze;
  if (
    t[41] !== n ||
    t[42] !== Ce ||
    t[43] !== Se ||
    t[44] !== N ||
    t[45] !== ve ||
    t[46] !== r ||
    t[47] !== he ||
    t[48] !== k ||
    t[49] !== A ||
    t[50] !== O ||
    t[51] !== we ||
    t[52] !== J ||
    t[53] !== Ne ||
    t[54] !== Fe ||
    t[55] !== Pe ||
    t[56] !== be ||
    t[57] !== g ||
    t[58] !== Be ||
    t[59] !== Ve ||
    t[60] !== We ||
    t[61] !== Ue ||
    t[62] !== a
  ) {
    let e;
    (t[69] === Be
      ? (e = t[70])
      : ((e = (e) => {
          let { id: t } = e,
            n = Be?.[t];
          return n == null ? void 0 : ue(n);
        }),
        (t[69] = Be),
        (t[70] = e)),
      (Xe = Bt.map(e)));
    let i;
    (t[71] !== n || t[72] !== g || t[73] !== a
      ? ((i = () => W.current && g.get(Re) === n && g.get(xe).userId === a && g.get($e).status === `allowed`),
        (t[71] = n),
        (t[72] = g),
        (t[73] = a),
        (t[74] = i))
      : (i = t[74]),
      (Y = i),
      (Je = A || Se || Pe || Ue),
      (Ke = he || N != null || k != null || be != null || Ne != null || Ve != null),
      (X = Ce || we || Fe || We),
      (Ze =
        O == null || ve == null || J == null || Be == null
          ? void 0
          : Bt.map((e, t) => Lt(r, e, Xe[t], ve, J, O))),
      (t[41] = n),
      (t[42] = Ce),
      (t[43] = Se),
      (t[44] = N),
      (t[45] = ve),
      (t[46] = r),
      (t[47] = he),
      (t[48] = k),
      (t[49] = A),
      (t[50] = O),
      (t[51] = we),
      (t[52] = J),
      (t[53] = Ne),
      (t[54] = Fe),
      (t[55] = Pe),
      (t[56] = be),
      (t[57] = g),
      (t[58] = Be),
      (t[59] = Ve),
      (t[60] = We),
      (t[61] = Ue),
      (t[62] = a),
      (t[63] = Ke),
      (t[64] = Y),
      (t[65] = Je),
      (t[66] = X),
      (t[67] = Xe),
      (t[68] = Ze));
  } else ((Ke = t[63]), (Y = t[64]), (Je = t[65]), (X = t[66]), (Xe = t[67]), (Ze = t[68]));
  let Qe = Ze,
    et;
  t[75] !== Te || t[76] !== r || t[77] !== Y || t[78] !== j || t[79] !== Ie || t[80] !== Ge
    ? ((et = async (e) => {
        let [t, n, i, a] = await Promise.all([
          Te(),
          Ie({ throwOnError: !0 }),
          j({ throwOnError: !0, cancelRefetch: !1 }),
          Ge({ throwOnError: !0, cancelRefetch: !1 }),
        ]);
        if (!Y()) return null;
        let o = Bt.findIndex((t) => {
            let { id: n } = t;
            return n === e;
          }),
          s = e == null ? void 0 : a.data?.[e];
        return o < 0 ? null : Lt(r, Bt[o], s == null ? void 0 : ue(s), t, n.data, i.data).connection;
      }),
      (t[75] = Te),
      (t[76] = r),
      (t[77] = Y),
      (t[78] = j),
      (t[79] = Ie),
      (t[80] = Ge),
      (t[81] = et))
    : (et = t[81]);
  let tt = et,
    rt = F?.app == null ? it : nt,
    ot;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (0, Kt.createPortal)(
        (0, qt.jsx)(Ee, { className: `pointer-events-none fixed inset-0` }),
        document.body,
      )),
      (t[82] = ot))
    : (ot = t[82]);
  let st = re?.enabled === !0,
    ct;
  t[83] !== h || t[84] !== g
    ? ((ct = (e) => {
        (te(e),
          e != null &&
            g
              .get(Ye)
              .count(`default`, `write_like_me.setup_funnel`, {
                category: e,
                entry_point: h,
                stage: `category_selected`,
              }));
      }),
      (t[83] = h),
      (t[84] = g),
      (t[85] = ct))
    : (ct = t[85]);
  let ut;
  t[86] === Ke
    ? (ut = t[87])
    : ((ut = Ke
        ? (0, qt.jsx)(c, {
            id: `writingStyle.apps.error`,
            defaultMessage: `Couldn't finish Writing style setup. Try again.`,
            description: `Recoverable error loading sources, saving Writing style, or starting its ordinary chat`,
          })
        : null),
      (t[86] = Ke),
      (t[87] = ut));
  let dt = pe || b.isPending,
    ft = Je && Qe == null,
    mt;
  t[88] === u
    ? (mt = t[89])
    : ((mt = () => {
        ((W.current = !1), G.current?.abort(), S.current?.abort(), u());
      }),
      (t[88] = u),
      (t[89] = mt));
  let gt;
  t[90] !== h ||
  t[91] !== N ||
  t[92] !== ve ||
  t[93] !== r ||
  t[94] !== O ||
  t[95] !== Y ||
  t[96] !== X ||
  t[97] !== J ||
  t[98] !== H ||
  t[99] !== Xe ||
  t[100] !== tt ||
  t[101] !== g ||
  t[102] !== E ||
  t[103] !== w
    ? ((gt = (e) => {
        if (!Y() || H != null || X || S.current != null) return;
        let t = Bt.findIndex((t) => {
            let { id: n } = t;
            return n === e.id;
          }),
          n = Xe[t],
          i = zt(e.id, n, O),
          a = n == null ? void 0 : { ...n, summary: i?.plugin ?? n.summary };
        if (a == null || e.connection === `unavailable` || (e.connection === `connected` && N !== e.id))
          return;
        (G.current?.abort(), (G.current = null), P(null), oe(null), (le.current = !1));
        let o = bt(g, { category: e.category, connector: Bt[t]?.connector ?? `unknown`, entry_point: h });
        if (e.connection === `reauth` || e.connection === `connect`) {
          let t = Rt(a.apps, J)?.id,
            n = J?.find(
              (e) =>
                e.visibility !== `HIDDEN` &&
                !e.id.startsWith(`implicit_link::`) &&
                e.auth_status === `REAUTH_REQUIRED` &&
                t != null &&
                q(t) === q(e.connector_id),
            ),
            r = ve?.find((e) => {
              let { id: n } = e;
              return q(n) === q(t ?? ``);
            });
          if (t == null || (e.connection === `reauth` && n == null)) {
            (o(`failure`), P(e.id));
            return;
          }
          I({ app: r, connectorId: t, linkId: n?.id, sourceId: e.id, recordOutcome: o });
          return;
        }
        (ie(e.id), ge(!1));
        let s = new AbortController();
        ((G.current = s),
          (async () => {
            if (e.connection === `disabled`) {
              i != null &&
                !i.plugin.enabled &&
                (await w({
                  pluginId: a.summary.id,
                  pluginDisplayName: e.name,
                  plugin: a.summary,
                  enabled: !0,
                }));
              for (let e of ve ?? []) {
                if (!Y() || s.signal.aborted) return;
                !e.isEnabled &&
                  a.apps.some((t) => {
                    let { id: n } = t;
                    return q(n) === q(e.id);
                  }) &&
                  (await E({ appId: e.id, enabled: !0 }));
              }
            } else if (e.connection !== `refresh` && e.connection !== `connected`) {
              let t = await ht(g, ke(a), { hostId: r, signal: s.signal });
              if (t !== `installed`) {
                Y() &&
                  !s.signal.aborted &&
                  (o(t === `failed` ? `failure` : `cancelled`), P(t === `failed` ? e.id : null));
                return;
              }
            }
            if (Y() && !s.signal.aborted) {
              let t = await tt(e.id);
              Y() &&
                !s.signal.aborted &&
                (o(
                  t === `connected`
                    ? `success`
                    : t === `connect` || t === `reauth`
                      ? `connection_required`
                      : `failure`,
                ),
                P(t === `connected` || t === `connect` || t === `reauth` ? null : e.id));
            }
          })()
            .catch(() => {
              Y() && !s.signal.aborted && (o(`failure`), P(e.id));
            })
            .finally(() => {
              G.current === s && ((G.current = null), W.current && ie(null));
            }));
      }),
      (t[90] = h),
      (t[91] = N),
      (t[92] = ve),
      (t[93] = r),
      (t[94] = O),
      (t[95] = Y),
      (t[96] = X),
      (t[97] = J),
      (t[98] = H),
      (t[99] = Xe),
      (t[100] = tt),
      (t[101] = g),
      (t[102] = E),
      (t[103] = w),
      (t[104] = gt))
    : (gt = t[104]);
  let yt;
  t[105] !== n ||
  t[106] !== x ||
  t[107] !== h ||
  t[108] !== r ||
  t[109] !== _ ||
  t[110] !== Y ||
  t[111] !== f ||
  t[112] !== H ||
  t[113] !== b ||
  t[114] !== g ||
  t[115] !== a
    ? ((yt = () => {
        if (
          !Y() ||
          S.current != null ||
          H != null ||
          g.get(vt, { accountId: n, userId: a, hostId: r }).isPending
        )
          return;
        let e = new AbortController();
        ((S.current = e),
          g
            .get(Ye)
            .count(`default`, `write_like_me.setup_funnel`, {
              category: x ?? `not_applicable`,
              entry_point: h,
              stage: `use_clicked`,
            }),
          me(!0),
          ge(!1),
          (async () => {
            let t = await b.mutateAsync({
              enabled: !0,
              prepareForChat: !0,
              prepareForChatSignal: e.signal,
              entryPoint: h,
              hostId: r,
              signal: new AbortController().signal,
            });
            if (t.status !== `cancelled` && Y()) {
              if (t.status === `failed`) {
                ge(!0);
                return;
              }
              Y() && !e.signal.aborted && (await f(pt(_), e.signal));
            }
          })()
            .catch(() => {
              Y() && ge(!0);
            })
            .finally(() => {
              ((S.current = null), W.current && me(!1));
            }));
      }),
      (t[105] = n),
      (t[106] = x),
      (t[107] = h),
      (t[108] = r),
      (t[109] = _),
      (t[110] = Y),
      (t[111] = f),
      (t[112] = H),
      (t[113] = b),
      (t[114] = g),
      (t[115] = a),
      (t[116] = yt))
    : (yt = t[116]);
  let xt;
  t[117] !== Y || t[118] !== tt
    ? ((xt = () => {
        tt()
          .then(() => {
            Y() && (ge(!1), P(null));
          })
          .catch(() => {
            Y() && ge(!0);
          });
      }),
      (t[117] = Y),
      (t[118] = tt),
      (t[119] = xt))
    : (xt = t[119]);
  let St;
  t[120] !== Qe ||
  t[121] !== x ||
  t[122] !== X ||
  t[123] !== p ||
  t[124] !== H ||
  t[125] !== st ||
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
        enabled: st,
        onManage: p,
        category: x,
        onCategoryChange: ct,
        error: ut,
        isContinuing: dt,
        isLoading: ft,
        isRefreshing: X,
        pendingAppId: H,
        onClose: mt,
        onConnect: gt,
        onContinue: yt,
        onRetry: xt,
      })),
      (t[120] = Qe),
      (t[121] = x),
      (t[122] = X),
      (t[123] = p),
      (t[124] = H),
      (t[125] = st),
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
  t[135] !== rt ||
  t[136] !== R ||
  t[137] !== z ||
  t[138] !== r ||
  t[139] !== Y ||
  t[140] !== F ||
  t[141] !== tt
    ? ((Ct =
        F == null
          ? null
          : (0, qt.jsx)(rt, {
              app: F.app ?? null,
              connectorId: F.connectorId,
              hostId: r,
              isReconnecting: F?.linkId != null,
              reauthLinkId: F?.linkId,
              beforeConnect: async () => Y(),
              onOpenChange: (e) => {
                e || (le.current || F.recordOutcome(`cancelled`), I(null));
              },
              onExternalConnectStarted: () => F.recordOutcome(`connection_required`),
              onOAuthStarted: (e) => {
                F.recordOutcome(`connection_required`);
                let t = z(e);
                if (F != null && t != null) {
                  let n = new AbortController();
                  ((G.current = n),
                    n.signal.addEventListener(`abort`, () => R({ oauthState: t }), { once: !0 }),
                    oe({ sourceId: F.sourceId, appId: e.app.id, oauthState: t }));
                }
              },
              onConnectFailed: () => {
                Y() && (F.recordOutcome(`failure`), P(F?.sourceId ?? null));
              },
              onConnected: async () => {
                if (((le.current = !0), Y()))
                  try {
                    let e = await tt(F?.sourceId);
                    Y() &&
                      (F.recordOutcome(e === `connected` ? `success` : `connection_required`),
                      P(e === `connected` ? null : (F?.sourceId ?? null)));
                  } catch {
                    Y() && (F.recordOutcome(`failure`), P(F?.sourceId ?? null));
                  }
              },
            })),
      (t[135] = rt),
      (t[136] = R),
      (t[137] = z),
      (t[138] = r),
      (t[139] = Y),
      (t[140] = F),
      (t[141] = tt),
      (t[142] = Ct))
    : (Ct = t[142]);
  let wt;
  return (
    t[143] !== St || t[144] !== Ct
      ? ((wt = (0, qt.jsxs)(qt.Fragment, { children: [ot, St, Ct] })),
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
  if (e instanceof C && e.status === 404) return null;
  throw e;
}
var Gt, $, Kt, qt;
function Jt() {
  return (Jt = e(() => {
    ((Gt = I()),
      b(),
      h(),
      ($ = H()),
      (Kt = V()),
      E(),
      J(),
      rt(),
      ut(),
      je(),
      Ue(),
      fe(),
      ot(),
      Be(),
      X(),
      Fe(),
      me(),
      he(),
      Ce(),
      be(),
      pe(),
      _e(),
      Me(),
      L(),
      tt(),
      o(),
      Je(),
      F(),
      gt(),
      xt(),
      yt(),
      It(),
      Vt(),
      (qt = R()));
  }))();
}
function Yt(e) {
  let t = (0, Xt.c)(50),
    { accountId: n, userId: r, hostId: a, entryPoint: o, onClose: s, workspaceRoots: c, project: u } = e,
    d = o === void 0 ? `unknown` : o,
    f = l(i),
    p = ee(),
    { userId: m } = Ke(),
    h = _(Re),
    g = _($e),
    v = (0, Zt.useRef)(null),
    y = (0, Zt.useRef)(!1),
    b;
  t[0] !== d || t[1] !== f
    ? ((b = () => {
        v.current ??
          ((v.current = performance.now()),
          f
            .get(Ye)
            .count(`default`, `write_like_me.setup_funnel`, {
              category: `not_applicable`,
              entry_point: d,
              stage: `shown`,
            }));
      }),
      (t[0] = d),
      (t[1] = f),
      (t[2] = b))
    : (b = t[2]);
  let x = (0, Zt.useEffectEvent)(b),
    te;
  t[3] !== d || t[4] !== f
    ? ((te = (e) => {
        y.current ||
          ((y.current = !0),
          f
            .get(Ye)
            .count(`default`, `write_like_me.setup_funnel`, {
              category: `not_applicable`,
              entry_point: d,
              stage: e,
            }),
          f
            .get(Ye)
            .hist(
              `default`,
              `write_like_me.setup_duration_ms`,
              { entry_point: d, outcome: e },
              v.current == null ? 0 : performance.now() - v.current,
            ));
      }),
      (t[3] = d),
      (t[4] = f),
      (t[5] = te))
    : (te = t[5]);
  let S = te,
    ne;
  t[6] === f
    ? (ne = t[7])
    : ((ne = () => {
        Te(f, Yt);
      }),
      (t[6] = f),
      (t[7] = ne));
  let C = (0, Zt.useEffectEvent)(ne),
    w;
  t[8] !== n || t[9] !== C || t[10] !== h || t[11] !== m || t[12] !== x || t[13] !== r || t[14] !== g.status
    ? ((w = () => {
        h !== n || m !== r || g.status !== `allowed` ? C() : x();
      }),
      (t[8] = n),
      (t[9] = C),
      (t[10] = h),
      (t[11] = m),
      (t[12] = x),
      (t[13] = r),
      (t[14] = g.status),
      (t[15] = w))
    : (w = t[15]);
  let T;
  if (
    (t[16] !== n || t[17] !== h || t[18] !== m || t[19] !== r || t[20] !== g.status
      ? ((T = [h, m, n, r, g.status]),
        (t[16] = n),
        (t[17] = h),
        (t[18] = m),
        (t[19] = r),
        (t[20] = g.status),
        (t[21] = T))
      : (T = t[21]),
    (0, Zt.useEffect)(w, T),
    h !== n || m !== r || g.status !== `allowed`)
  )
    return null;
  let E = `${n}:${r}:${a}`,
    O;
  t[22] === c ? (O = t[23]) : ((O = c ?? []), (t[22] = c), (t[23] = O));
  let k;
  t[24] !== s || t[25] !== S
    ? ((k = () => {
        (S(`dismissed`), s());
      }),
      (t[24] = s),
      (t[25] = S),
      (t[26] = k))
    : (k = t[26]);
  let A;
  t[27] !== s || t[28] !== S || t[29] !== f
    ? ((A = () => {
        (S(`dismissed`), s(), f.get(Y).navigate(`/settings/personalization`));
      }),
      (t[27] = s),
      (t[28] = S),
      (t[29] = f),
      (t[30] = A))
    : (A = t[30]);
  let j;
  t[31] !== n ||
  t[32] !== a ||
  t[33] !== p ||
  t[34] !== s ||
  t[35] !== u ||
  t[36] !== S ||
  t[37] !== f ||
  t[38] !== r
    ? ((j = async (e, t) => {
        let i = () =>
          !t.aborted && f.get(Re) === n && f.get(xe).userId === r && f.get($e).status === `allowed`;
        if (!i()) return;
        if (U(a)) {
          let n = await f.query.getOrFetch(ve);
          if (!i()) return;
          let r = mt(n),
            a = Ae(),
            o = f.get(Y).prepareNavigation(B(a));
          if (o == null || (await o(), !i())) return;
          let c = await ze(f, {
            conversationId: a,
            conversationOrigin: `tpp`,
            prompt: e,
            model: r.slug,
            thinkingEffort: r.thinkingEffort,
            requireDispatchAcceptance: !0,
            startupSignal: t,
            isSubmissionCurrent: i,
          });
          if (!i()) return;
          if (c == null) throw Error(`Writing style sample was not accepted`);
          (S(`completed`), s());
          return;
        }
        let o = a === D;
        if (o && !f.get(Xe)) throw Error(`Writing style cloud execution is unavailable`);
        if (!o && a !== `local` && u?.type !== `remote`) {
          f.get(re).danger(
            p.formatMessage({
              id: `writingStyle.remoteProjectRequired`,
              defaultMessage: `Close this dialog and select a project on the remote host to start Writing style`,
              description: `Actionable error when starting a Writing style sample on an SSH host without a selected remote project`,
            }),
            { errorAnalytics: { toastId: `writingStyle.remoteProjectRequired` } },
          );
          return;
        }
        et(f, {
          activeProject: o ? null : Se(u ?? null),
          codexAppMode: o ? `codex` : void 0,
          prefillPrompt: e,
          prefillComposerMode: `local`,
          prefillCloudThreadPrototype: o,
          startInSidebar: !0,
          onNavigate: () => {
            (we(f, `work`), S(`completed`), s());
          },
        });
      }),
      (t[31] = n),
      (t[32] = a),
      (t[33] = p),
      (t[34] = s),
      (t[35] = u),
      (t[36] = S),
      (t[37] = f),
      (t[38] = r),
      (t[39] = j))
    : (j = t[39]);
  let M;
  return (
    t[40] !== n ||
    t[41] !== d ||
    t[42] !== a ||
    t[43] !== A ||
    t[44] !== j ||
    t[45] !== E ||
    t[46] !== O ||
    t[47] !== k ||
    t[48] !== r
      ? ((M = (0, Qt.jsx)(
          Ht,
          {
            accountId: n,
            hostId: a,
            entryPoint: d,
            userId: r,
            workspaceRoots: O,
            onClose: k,
            onManage: A,
            onContinue: j,
          },
          E,
        )),
        (t[40] = n),
        (t[41] = d),
        (t[42] = a),
        (t[43] = A),
        (t[44] = j),
        (t[45] = E),
        (t[46] = O),
        (t[47] = k),
        (t[48] = r),
        (t[49] = M))
      : (M = t[49]),
    M
  );
}
var Xt, Zt, Qt;
function $t() {
  return ($t = e(() => {
    ((Xt = I()),
      h(),
      N(),
      (Zt = H()),
      E(),
      J(),
      We(),
      Ue(),
      Be(),
      X(),
      Fe(),
      Le(),
      G(),
      Ne(),
      Pe(),
      r(),
      Ie(),
      Ze(),
      K(),
      O(),
      ge(),
      le(),
      L(),
      M(),
      Jt(),
      (Qt = R()));
  }))();
}
$t();
export { Yt as AccountWritingStyleDialog };
//# sourceMappingURL=account-dialog-eb8c1dd025d1.js.map
