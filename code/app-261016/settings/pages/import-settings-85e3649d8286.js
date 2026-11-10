import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  $St as r,
  $lt as i,
  $st as a,
  BO as o,
  EO as s,
  FBt as c,
  GOt as l,
  HO as u,
  HV as d,
  IO as f,
  JO as p,
  KO as m,
  LNt as h,
  LO as g,
  MJ as _,
  MNt as ee,
  NNt as v,
  NSt as y,
  Nk as b,
  OS as x,
  OT as S,
  PBt as C,
  Pk as w,
  QV as T,
  Qst as E,
  RO as D,
  Rrt as O,
  TO as k,
  TY as A,
  USt as j,
  WO as M,
  WOt as N,
  XOt as P,
  Y3 as F,
  YOt as I,
  Yst as L,
  Z3 as R,
  ZSt as z,
  e6 as B,
  ew as V,
  gU as H,
  gY as U,
  hbt as W,
  hit as te,
  iCt as ne,
  kS as re,
  kT as ie,
  lit as ae,
  lk as oe,
  mH as se,
  mK as ce,
  mbt as le,
  nCt as ue,
  oit as de,
  okt as G,
  pit as fe,
  qO as pe,
  sct as me,
  sw as K,
  tkt as q,
  uSt as he,
  uk as ge,
  uw as _e,
  vT as ve,
  w9 as ye,
  wB as be,
  xB as xe,
  yT as Se,
  zK as Ce,
  zO as we,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $xt as Te,
  Bxt as Ee,
  Cjr as De,
  Cxt as Oe,
  GA as ke,
  Gxt as Ae,
  HA as je,
  Hxt as Me,
  Jbr as Ne,
  Jfr as Pe,
  Jxt as Fe,
  KA as Ie,
  KBr as Le,
  Kxt as Re,
  LF as ze,
  QF as Be,
  Qxt as Ve,
  RF as He,
  Rxt as Ue,
  SA as We,
  Sxt as Ge,
  UA as Ke,
  Uxt as qe,
  V3n as Je,
  WA as Ye,
  Xxt as Xe,
  Yxt as Ze,
  Zbr as Qe,
  Zxt as $e,
  _tr as et,
  bA as tt,
  bxr as nt,
  cA as rt,
  cKn as it,
  cxr as at,
  eA as ot,
  eI as st,
  eer as ct,
  ej as lt,
  fA as ut,
  fxr as dt,
  gA as ft,
  hA as pt,
  htr as mt,
  iA as ht,
  iSt as gt,
  ij as _t,
  lKn as vt,
  lSt as yt,
  mA as bt,
  nA as xt,
  nSt as St,
  oSt as Ct,
  pA as wt,
  pxr as Tt,
  qA as Et,
  rSt as Dt,
  rj as Ot,
  sA as kt,
  sSt as At,
  sxr as jt,
  tA as Mt,
  tSt as Nt,
  tj as Pt,
  tpr as Ft,
  vA as It,
  vxt as Lt,
  x0 as Rt,
  xA as zt,
  xMr as Bt,
  xjr as Vt,
  y0 as Ht,
  yA as Ut,
  yMr as Wt,
  yxt as Gt,
  z3n as Kt,
  zxt as qt,
} from "./app-initial-ad16eaadf81f.js";
import { Hy as Jt, Uy as Yt } from "./app-primary-3e00728c2a4c.js";
import { n as Xt, t as Zt } from "./app-connect-modal-763ad0733e86.js";
import { n as Qt, t as $t } from "./settings-loading-row-1fcc5b514745.js";
import { r as en, t as tn } from "./hooks-settings-route-8191acda142e.js";
import {
  n as nn,
  o as rn,
  r as an,
  t as on,
} from "./use-external-agent-import-setup-actions-376a9d108aea.js";
import { n as sn, r as cn, t as ln } from "./setup-226726f00b3c.js";
import { n as un, t as dn } from "./settings-row-disclosure-4167ebc9233a.js";
function fn(e) {
  let i = (0, hn.c)(45),
    { isImportContextLoading: a, latestSuccessfulImportAtMs: o, workspaceRoots: s } = e,
    c = r(E),
    u = G(),
    d = ne(gt),
    f = De(Ee),
    p;
  i[0] === f ? (p = i[1]) : ((p = Me(f)), (i[0] = f), (i[1] = p));
  let m = p,
    h = qt(),
    g;
  i[2] !== m || i[3] !== h || i[4] !== s
    ? ((g = { enabled: !0, hostId: L, providers: m, sessionLimits: h, workspaceRoots: s }),
      (i[2] = m),
      (i[3] = h),
      (i[4] = s),
      (i[5] = g))
    : (g = i[5]);
  let {
      detectedItems: _,
      isDetecting: v,
      isDetectionError: y,
      refetchDetectedItems: b,
      unsupportedProjects: x,
    } = Gt(g),
    S,
    C,
    w,
    T,
    D,
    O,
    k;
  if (
    i[6] !== _ ||
    i[7] !== u ||
    i[8] !== v ||
    i[9] !== y ||
    i[10] !== a ||
    i[11] !== o ||
    i[12] !== b ||
    i[13] !== d ||
    i[14] !== c ||
    i[15] !== h ||
    i[16] !== x
  ) {
    let e = pt(_),
      r = d?.hostId === L,
      s = r && d != null ? bt({ detectedItems: d.items, intl: u, providerIds: pt(d.items) }) : null;
    T = v || a;
    let f = (t, n) => {
        let r = bt({ detectedItems: _, intl: u, providerIds: [t] });
        r != null &&
          (Bt(c, ye, { source: `settings`, action: `shown`, ...wt(r, ut(r), e) }),
          Mt(c, {
            hostId: L,
            items: _,
            preselectedProviderIds: [t],
            restoreFocus: n,
            sessionLimits: h,
            source: `settings`,
          }));
      },
      p;
    i[24] === b
      ? (p = i[25])
      : ((p = () => {
          b();
        }),
        (i[24] = b),
        (i[25] = p));
    let m = p;
    ((w = kt), (O = xt));
    let g;
    i[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((g = (0, J.jsx)(q, {
          id: `settings.agent.importSettings.sectionTitle.v2`,
          defaultMessage: `Import from another AI app`,
          description: `Settings section heading for importing configuration, projects, and chat history from a different AI coding app`,
        })),
        (i[26] = g))
      : (g = i[26]);
    let E =
      e.length === 0
        ? null
        : (0, J.jsx)(q, {
            id: `settings.agent.importSettings.sectionDescription`,
            defaultMessage: `Detected setup that can be added to {appName}`,
            description: `Description for the detected external agent apps that can be imported`,
            values: { appName: it },
          });
    (i[27] === E
      ? (k = i[28])
      : ((k = (0, J.jsx)(kt.Header, { title: g, subtitle: E })), (i[27] = E), (i[28] = k)),
      (C = kt.Content),
      (S = n),
      (D = r
        ? (0, J.jsx)(K, {
            label: (0, J.jsx)(q, {
              id: `settings.agent.importSettings.importingLabel`,
              defaultMessage: `Import in progress`,
              description: `Settings row label shown while an external agent import is running`,
            }),
            description: s == null ? null : (0, J.jsx)(l, { type: `unit`, value: s.customizeItems.map(mn) }),
            control: (0, J.jsx)(t, { className: `icon-xs` }),
          })
        : T
          ? (0, J.jsx)(K, {
              label: (0, J.jsx)(q, {
                id: `settings.agent.importSettings.loadingLabel.v2`,
                defaultMessage: `Checking for imports`,
                description: `Label shown while external agent setup is loading`,
              }),
              description: (0, J.jsx)(q, {
                id: `settings.agent.importSettings.detectingDescription.v2`,
                defaultMessage: `Looking for compatible setup, projects, and recent chats`,
                description: `Description shown while checking for external agent setup`,
              }),
              control: (0, J.jsx)(t, { className: `icon-xs` }),
            })
          : y
            ? (0, J.jsx)(K, {
                label: (0, J.jsx)(q, {
                  id: `settings.import.error.label`,
                  defaultMessage: `Couldn't check for imports`,
                  description: `Settings row label shown when external agent setup detection fails`,
                }),
                description: (0, J.jsx)(q, {
                  id: `settings.import.error.description`,
                  defaultMessage: `Try again to look for compatible setup, projects, and recent chats`,
                  description: `Settings row description shown when external agent setup detection fails`,
                }),
                control: (0, J.jsx)(F, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: m,
                  children: (0, J.jsx)(q, {
                    id: `settings.import.error.retry`,
                    defaultMessage: `Retry`,
                    description: `Button label to retry external agent setup detection`,
                  }),
                }),
              })
            : e.length === 0 && x.length === 0 && o == null
              ? (0, J.jsx)(K, {
                  label: (0, J.jsx)(q, {
                    id: `settings.import.empty.label`,
                    defaultMessage: `Import from other AI apps`,
                    description: `Settings row label shown when no external agent setup can currently be imported`,
                  }),
                  description: (0, J.jsx)(q, {
                    id: `settings.import.empty.description`,
                    defaultMessage: `No importable setup found`,
                    description: `Settings row description shown when no external agent setup can currently be imported`,
                  }),
                  control: (0, J.jsx)(F, {
                    color: `secondary`,
                    size: `toolbar`,
                    disabled: !0,
                    children: (0, J.jsx)(q, {
                      id: `settings.import.empty.button`,
                      defaultMessage: `Import`,
                      description: `Disabled import button shown when no external agent setup can currently be imported`,
                    }),
                  }),
                })
              : e.length === 0 && x.length === 0
                ? (0, J.jsx)(K, {
                    label: (0, J.jsx)(q, {
                      id: `settings.import.empty.noNewItems`,
                      defaultMessage: `No new items found`,
                      description: `Settings row label shown when a previous import exists and no additional external agent setup is available`,
                    }),
                    description:
                      o == null
                        ? null
                        : (0, J.jsx)(q, {
                            id: `settings.import.empty.lastImported`,
                            defaultMessage: `Last imported {relativeTime} ago`,
                            description: `Description showing when another local agent setup was last imported`,
                            values: {
                              relativeTime: (0, J.jsx)(
                                Ht,
                                { dateString: new Date(o).toISOString() },
                                `last-imported-at`,
                              ),
                            },
                          }),
                    control: (0, J.jsx)(F, {
                      color: `secondary`,
                      size: `toolbar`,
                      onClick: m,
                      children: (0, J.jsx)(q, {
                        id: `settings.import.empty.checkAgain`,
                        defaultMessage: `Check again`,
                        description: `Button label to check again for importable external agent setup`,
                      }),
                    }),
                  })
                : e.map((e) => {
                    let t = gn[e],
                      n = At(u, e);
                    return (0, J.jsx)(
                      K,
                      {
                        icon: (0, J.jsx)(`div`, {
                          "aria-hidden": !0,
                          className: ee(
                            `flex size-10 shrink-0 items-center justify-center rounded-xl`,
                            e === `cursor` ? `text-default` : `bg-chart-orange text-inverse`,
                          ),
                          children: (0, J.jsx)(t, { className: `size-10` }),
                        }),
                        label: n,
                        control: (0, J.jsx)(F, {
                          "aria-label": u.formatMessage(
                            {
                              id: `settings.agent.importSettings.importProviderAriaLabel`,
                              defaultMessage: `Import from {provider}`,
                              description: `Accessible button label to import setup from a specific external agent app`,
                            },
                            { provider: n },
                          ),
                          color: `secondary`,
                          size: `toolbar`,
                          onClick: (t) => {
                            let n = t.currentTarget;
                            f(e, () => n.focus());
                          },
                          children: (0, J.jsx)(q, {
                            id: `settings.agent.importSettings.importProvider`,
                            defaultMessage: `Import`,
                            description: `Button label to review and import setup from a detected external agent app`,
                          }),
                        }),
                      },
                      e,
                    );
                  })),
      (i[6] = _),
      (i[7] = u),
      (i[8] = v),
      (i[9] = y),
      (i[10] = a),
      (i[11] = o),
      (i[12] = b),
      (i[13] = d),
      (i[14] = c),
      (i[15] = h),
      (i[16] = x),
      (i[17] = S),
      (i[18] = C),
      (i[19] = w),
      (i[20] = T),
      (i[21] = D),
      (i[22] = O),
      (i[23] = k));
  } else ((S = i[17]), (C = i[18]), (w = i[19]), (T = i[20]), (D = i[21]), (O = i[22]), (k = i[23]));
  let A;
  i[29] !== T || i[30] !== y || i[31] !== x
    ? ((A =
        !T && !y && x.length > 0
          ? (0, J.jsx)(K, {
              icon: (0, J.jsx)(Jt, { className: `icon-2xs shrink-0 text-warning` }),
              label: (0, J.jsx)(q, {
                id: `settings.import.unsupportedProjects.label`,
                defaultMessage: `{count, plural, one {# project can't be imported} other {# projects can't be imported}}`,
                description: `Settings row label shown when detected external agent projects cannot be imported`,
                values: { count: x.length },
              }),
              description: (0, J.jsx)(q, {
                id: `settings.import.unsupportedProjects.description`,
                defaultMessage: `{projects} {count, plural, one {uses} other {use}} an unsupported project configuration`,
                description: `Settings row description listing detected external agent projects that cannot be imported`,
                values: {
                  count: x.length,
                  projects: (0, J.jsx)(l, { type: `conjunction`, value: x.map(pn) }, `unsupported-projects`),
                },
              }),
              control: null,
            })
          : null),
      (i[29] = T),
      (i[30] = y),
      (i[31] = x),
      (i[32] = A))
    : (A = i[32]);
  let j;
  i[33] !== S || i[34] !== D || i[35] !== A
    ? ((j = (0, J.jsxs)(S, { children: [D, A] })), (i[33] = S), (i[34] = D), (i[35] = A), (i[36] = j))
    : (j = i[36]);
  let M;
  i[37] !== C || i[38] !== j
    ? ((M = (0, J.jsx)(C, { children: j })), (i[37] = C), (i[38] = j), (i[39] = M))
    : (M = i[39]);
  let N;
  return (
    i[40] !== w || i[41] !== O || i[42] !== k || i[43] !== M
      ? ((N = (0, J.jsxs)(w, { id: O, children: [k, M] })),
        (i[40] = w),
        (i[41] = O),
        (i[42] = k),
        (i[43] = M),
        (i[44] = N))
      : (N = i[44]),
    N
  );
}
function pn(e) {
  return e.name;
}
function mn(e) {
  return e.title;
}
var hn, J, gn;
function _n() {
  return (_n = e(() => {
    ((hn = C()),
      O(),
      v(),
      z(),
      P(),
      vt(),
      R(),
      Rt(),
      B(),
      ot(),
      Dt(),
      ht(),
      yt(),
      qe(),
      Ue(),
      Lt(),
      Et(),
      ke(),
      Ke(),
      Yt(),
      ft(),
      Wt(),
      a(),
      rt(),
      _e(),
      V(),
      Le(),
      Vt(),
      (J = h()),
      (gn = { "claude-code": Ie, "claude-cowork": Ye, cursor: je }));
  }))();
}
function vn(e) {
  let t = (0, Sn.c)(20),
    { category: n, history: r } = e,
    i = j(),
    a,
    o;
  if (t[0] !== n.itemType || t[1] !== r.failures || t[2] !== r.successes) {
    let e;
    t[5] === n.itemType
      ? (e = t[6])
      : ((e = (e) => e.itemType === n.itemType), (t[5] = n.itemType), (t[6] = e));
    let i = r.successes.filter(e),
      s;
    t[7] === n.itemType
      ? (s = t[8])
      : ((s = (e) => e.itemType === n.itemType), (t[7] = n.itemType), (t[8] = s));
    let c = r.failures.filter(s),
      l;
    (t[9] === n.itemType
      ? (l = t[10])
      : ((l = (e, t) =>
          n.itemType === `SESSIONS`
            ? (0, Y.jsx)(yn, { status: `success`, target: e.target }, `success-${t}`)
            : (0, Y.jsx)(
                bn,
                { itemType: n.itemType, label: e.source, status: `success`, target: e.target },
                `success-${t}`,
              )),
        (t[9] = n.itemType),
        (t[10] = l)),
      (a = i.map(l)));
    let u;
    (t[11] === n.itemType
      ? (u = t[12])
      : ((u = (e, t) =>
          n.itemType === `SESSIONS`
            ? (0, Y.jsx)(yn, { failureMessage: e.message, status: `error` }, `failure-${t}`)
            : (0, Y.jsx)(
                bn,
                { itemType: n.itemType, failureMessage: e.message, label: e.source, status: `error` },
                `failure-${t}`,
              )),
        (t[11] = n.itemType),
        (t[12] = u)),
      (o = c.map(u)),
      (t[0] = n.itemType),
      (t[1] = r.failures),
      (t[2] = r.successes),
      (t[3] = a),
      (t[4] = o));
  } else ((a = t[3]), (o = t[4]));
  let s;
  t[13] !== n.itemType || t[14] !== i
    ? ((s =
        n.itemType === `HOOKS`
          ? (0, Y.jsx)(K, {
              variant: `nested`,
              label: (0, Y.jsx)(q, {
                id: `settings.import.history.details.reviewHooks`,
                defaultMessage: `Manage imported hooks`,
                description: `Label for the inline action to manage imported hooks`,
              }),
              control: (0, Y.jsx)(F, {
                color: `ghost`,
                onClick: () => {
                  i(tn({ hostId: L }));
                },
                children: (0, Y.jsx)(q, {
                  id: `settings.import.history.details.openHooks`,
                  defaultMessage: `Open hooks settings`,
                  description: `Button label to open hooks settings from imported hooks`,
                }),
              }),
            })
          : null),
      (t[13] = n.itemType),
      (t[14] = i),
      (t[15] = s))
    : (s = t[15]);
  let c;
  return (
    t[16] !== a || t[17] !== o || t[18] !== s
      ? ((c = (0, Y.jsxs)(Y.Fragment, { children: [a, o, s] })),
        (t[16] = a),
        (t[17] = o),
        (t[18] = s),
        (t[19] = c))
      : (c = t[19]),
    c
  );
}
function yn(e) {
  let t = (0, Sn.c)(19),
    n = G(),
    r = j(),
    i;
  t[0] !== e.status || t[1] !== e.target
    ? ((i = e.status === `success` && e.target != null ? he(e.target) : null),
      (t[0] = e.status),
      (t[1] = e.target),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] === a ? (o = t[4]) : ((o = a == null ? null : { hostId: L, threadId: a }), (t[3] = a), (t[4] = o));
  let s = ue(et, o),
    c = ue(mt, a),
    l = s ?? c?.title,
    u;
  t[5] === e.status
    ? (u = t[6])
    : ((u =
        e.status === `error`
          ? (0, Y.jsx)(xe, {
              className: `shrink-0 text-danger`,
              "aria-hidden": !1,
              legacyIcon: Jt,
              asset16: ve,
              legacyClassName: `icon-2xs`,
            })
          : null),
      (t[5] = e.status),
      (t[6] = u));
  let d;
  t[7] === l
    ? (d = t[8])
    : ((d =
        l ??
        (0, Y.jsx)(q, {
          id: `settings.import.history.details.untitledChat`,
          defaultMessage: `Untitled chat`,
          description: `Fallback title for an imported chat without a loaded thread title`,
        })),
      (t[7] = l),
      (t[8] = d));
  let f = e.status === `error` ? e.failureMessage : null,
    p;
  t[9] !== a || t[10] !== n || t[11] !== r || t[12] !== l
    ? ((p =
        a == null
          ? null
          : (0, Y.jsx)(F, {
              "aria-label":
                l == null
                  ? n.formatMessage({
                      id: `settings.import.history.details.openUntitledChat`,
                      defaultMessage: `Open untitled chat`,
                      description: `Accessible label to open an imported chat without a loaded thread title`,
                    })
                  : n.formatMessage(
                      {
                        id: `settings.import.history.details.openNamedChat`,
                        defaultMessage: `Open {title}`,
                        description: `Accessible label to open an imported chat by title`,
                      },
                      { title: l },
                    ),
              color: `ghost`,
              onClick: () => {
                r(le(a));
              },
              children: (0, Y.jsx)(q, {
                id: `settings.import.history.details.openChat`,
                defaultMessage: `Open chat`,
                description: `Button label to open an imported chat`,
              }),
            })),
      (t[9] = a),
      (t[10] = n),
      (t[11] = r),
      (t[12] = l),
      (t[13] = p))
    : (p = t[13]);
  let m;
  return (
    t[14] !== u || t[15] !== d || t[16] !== f || t[17] !== p
      ? ((m = (0, Y.jsx)(K, { variant: `nested`, icon: u, label: d, description: f, control: p })),
        (t[14] = u),
        (t[15] = d),
        (t[16] = f),
        (t[17] = p),
        (t[18] = m))
      : (m = t[18]),
    m
  );
}
function bn(e) {
  let t = (0, Sn.c)(21),
    n = G(),
    r = j(),
    i = null;
  if (e.status === `error`) i = e.failureMessage;
  else if (e.target == null) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(q, {
          id: `settings.import.history.details.imported`,
          defaultMessage: `Imported`,
          description: `Fallback destination label for a successful import history detail item`,
        })),
        (t[0] = e))
      : (e = t[0]),
      (i = e));
  } else e.target !== e.label && (i = e.target);
  let a;
  t[1] !== e.itemType || t[2] !== e.label || t[3] !== e.status || t[4] !== e.target
    ? ((a = e.status === `success` && e.label != null ? xn(e.itemType, e.label, e.target) : null),
      (t[1] = e.itemType),
      (t[2] = e.label),
      (t[3] = e.status),
      (t[4] = e.target),
      (t[5] = a))
    : (a = t[5]);
  let o = a,
    s;
  t[6] === e.label
    ? (s = t[7])
    : ((s =
        e.label ??
        (0, Y.jsx)(q, {
          id: `settings.import.history.details.unknownItem`,
          defaultMessage: `Imported item`,
          description: `Fallback label for an import history detail item without a source name`,
        })),
      (t[6] = e.label),
      (t[7] = s));
  let c = s,
    l;
  t[8] === e.status
    ? (l = t[9])
    : ((l =
        e.status === `error`
          ? (0, Y.jsx)(xe, {
              className: `shrink-0 text-danger`,
              "aria-hidden": !1,
              legacyIcon: Jt,
              asset16: ve,
              legacyClassName: `icon-2xs`,
            })
          : null),
      (t[8] = e.status),
      (t[9] = l));
  let u;
  t[10] !== n || t[11] !== r || t[12] !== o || t[13] !== e.itemType || t[14] !== e.label
    ? ((u =
        o == null
          ? null
          : (0, Y.jsx)(F, {
              "aria-label": n.formatMessage(
                {
                  id: `settings.import.history.details.openItem`,
                  defaultMessage: `Open {item}`,
                  description: `Accessible label to open an imported item`,
                },
                { item: e.label },
              ),
              color: `ghost`,
              onClick: () => {
                r(o, {
                  state:
                    e.itemType === `SKILLS` || e.itemType === `COMMANDS`
                      ? { initialHostId: L, initialTab: `skills` }
                      : void 0,
                });
              },
              children:
                e.itemType === `SKILLS` || e.itemType === `COMMANDS`
                  ? (0, Y.jsx)(q, {
                      id: `settings.import.history.details.openInSkills`,
                      defaultMessage: `Open in Skills`,
                      description: `Button label to open an imported skill or converted command in Skills`,
                    })
                  : e.itemType === `MCP_SERVER_CONFIG`
                    ? (0, Y.jsx)(q, {
                        id: `settings.import.history.details.openMcpSettings`,
                        defaultMessage: `Open MCP settings`,
                        description: `Button label to open an imported MCP server in settings`,
                      })
                    : (0, Y.jsx)(q, {
                        id: `settings.import.history.details.openPlugin`,
                        defaultMessage: `Open plugin`,
                        description: `Button label to open an imported plugin`,
                      }),
            })),
      (t[10] = n),
      (t[11] = r),
      (t[12] = o),
      (t[13] = e.itemType),
      (t[14] = e.label),
      (t[15] = u))
    : (u = t[15]);
  let d;
  return (
    t[16] !== i || t[17] !== c || t[18] !== l || t[19] !== u
      ? ((d = (0, Y.jsx)(K, { variant: `nested`, icon: l, label: c, description: i, control: u })),
        (t[16] = i),
        (t[17] = c),
        (t[18] = l),
        (t[19] = u),
        (t[20] = d))
      : (d = t[20]),
    d
  );
}
function xn(e, t, n) {
  return e === `SKILLS` || e === `COMMANDS` || e === `MCP_SERVER_CONFIG`
    ? `${e === `MCP_SERVER_CONFIG` ? `/settings/mcp-settings` : `/skills`}?search=${encodeURIComponent(n ?? t)}`
    : e === `PLUGINS`
      ? W({ hostId: L, pluginId: n ?? t })
      : null;
}
var Sn, Y;
function Cn() {
  return (Cn = e(() => {
    ((Sn = C()), Se(), z(), me(), P(), y(), ct(), R(), be(), Yt(), en(), _e(), Le(), (Y = h()));
  }))();
}
function wn(e) {
  let t = (0, In.c)(6),
    { defaultExpanded: n, entry: r, mcpServerStatuses: i } = e,
    a = n !== void 0 && n;
  if (r.kind === `running`) {
    let e;
    return (
      t[0] === r.runningImport
        ? (e = t[1])
        : ((e = (0, X.jsx)(Tn, { runningImport: r.runningImport })), (t[0] = r.runningImport), (t[1] = e)),
      e
    );
  }
  let o;
  return (
    t[2] !== a || t[3] !== r.history || t[4] !== i
      ? ((o = (0, X.jsx)(En, { defaultExpanded: a, history: r.history, mcpServerStatuses: i })),
        (t[2] = a),
        (t[3] = r.history),
        (t[4] = i),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function Tn(e) {
  let r = (0, In.c)(6),
    { runningImport: i } = e,
    a = G(),
    o;
  if (r[0] !== a || r[1] !== i.items) {
    let e = Xe(i.items),
      s;
    r[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, X.jsx)(K, {
          label: (0, X.jsx)(q, {
            id: `settings.import.history.running`,
            defaultMessage: `Importing now`,
            description: `Header for an import history entry while its results are pending`,
          }),
          control: (0, X.jsx)(t, { className: `icon-xs shrink-0 text-secondary` }),
        })),
        (r[3] = s))
      : (s = r[3]);
    let c;
    (r[4] === a
      ? (c = r[5])
      : ((c = (e) =>
          (0, X.jsx)(
            K,
            {
              variant: `nested`,
              label: Ct(a, e),
              control: (0, X.jsx)(`span`, {
                className: `text-xs text-secondary`,
                children: (0, X.jsx)(q, {
                  id: `settings.import.history.runningBadge`,
                  defaultMessage: `Importing`,
                  description: `Status for an import history category while its results are pending`,
                }),
              }),
            },
            e,
          )),
        (r[4] = a),
        (r[5] = c)),
      (o = (0, X.jsxs)(n, { children: [s, e.map(c)] })),
      (r[0] = a),
      (r[1] = i.items),
      (r[2] = o));
  } else o = r[2];
  return o;
}
function En(e) {
  let t = (0, In.c)(39),
    { defaultExpanded: r, history: i, mcpServerStatuses: a } = e,
    o = Fe(i),
    s = o.reduce(An, 0),
    c = o.reduce(kn, 0),
    l;
  t[0] !== i || t[1] !== a
    ? ((l = $e({ histories: [i], mcpServerStatuses: a })), (t[0] = i), (t[1] = a), (t[2] = l))
    : (l = t[2]);
  let u = l.length,
    d;
  t[3] === i.successes ? (d = t[4]) : ((d = i.successes.filter(On)), (t[3] = i.successes), (t[4] = d));
  let f = u + d.length,
    [p, m] = (0, Ln.useState)(r),
    [h, g] = (0, Ln.useState)(null),
    _ = `import-history-${i.importId}`,
    v;
  v =
    c > 0 && f > 0
      ? (0, X.jsx)(q, {
          id: `settings.import.history.summaryWithFailuresAndWarnings`,
          defaultMessage: `{importedCount} imported · {failedCount} did not import · {warningCount} need review`,
          description: `Summary of imported, failed, and review-required items for a completed import`,
          values: { importedCount: s, failedCount: c, warningCount: f },
        })
      : c > 0
        ? (0, X.jsx)(q, {
            id: `settings.import.history.summaryWithFailures`,
            defaultMessage: `{importedCount} imported · {failedCount} did not import`,
            description: `Summary of imported and failed items for a completed import`,
            values: { importedCount: s, failedCount: c },
          })
        : f > 0
          ? (0, X.jsx)(q, {
              id: `settings.import.history.summaryWithWarnings`,
              defaultMessage: `{importedCount} imported · {warningCount} need review`,
              description: `Summary of imported and review-required items for a completed import`,
              values: { importedCount: s, warningCount: f },
            })
          : (0, X.jsx)(q, {
              id: `settings.import.history.summary`,
              defaultMessage: `{importedCount} imported`,
              description: `Summary of imported items for a completed import`,
              values: { importedCount: s },
            });
  let y = n,
    b = dn,
    x =
      o.length === 0
        ? (0, X.jsx)(K, {
            variant: `nested`,
            label: (0, X.jsx)(q, {
              id: `settings.import.history.noResults`,
              defaultMessage: `No results recorded`,
              description: `Label shown when an import history entry has no category results`,
            }),
            control: null,
          })
        : o.map((e) => {
            let t = `${_}-${e.itemType}`,
              n = h === e.itemType;
            return (0, X.jsx)(
              dn,
              {
                content: (0, X.jsx)(vn, { category: e, history: i }),
                contentId: t,
                expanded: n,
                children: (0, X.jsx)(Nn, {
                  category: e,
                  contentId: t,
                  expanded: n,
                  history: i,
                  mcpServerStatuses: a,
                  onToggleExpanded: () => {
                    g(n ? null : e.itemType);
                  },
                }),
              },
              e.itemType,
            );
          }),
    S;
  t[5] === i.providerId
    ? (S = t[6])
    : ((S = (0, X.jsx)(jn, { providerId: i.providerId })), (t[5] = i.providerId), (t[6] = S));
  let C = Number(i.completedAtMs),
    w;
  t[7] === C
    ? (w = t[8])
    : ((w = (0, X.jsx)(N, { value: C, dateStyle: `medium`, timeStyle: `short` })), (t[7] = C), (t[8] = w));
  let T;
  t[9] === v ? (T = t[10]) : ((T = (0, X.jsx)(`span`, { children: v })), (t[9] = v), (t[10] = T));
  let E;
  t[11] !== w || t[12] !== T
    ? ((E = (0, X.jsxs)(`span`, { className: `flex flex-wrap items-center gap-x-2`, children: [w, T] })),
      (t[11] = w),
      (t[12] = T),
      (t[13] = E))
    : (E = t[13]);
  let D;
  t[14] === i.providerId
    ? (D = t[15])
    : ((D = (0, X.jsx)(Mn, { providerId: i.providerId })), (t[14] = i.providerId), (t[15] = D));
  let O = p && `rotate-180`,
    A;
  t[16] === O
    ? (A = t[17])
    : ((A = ee(`icon-2xs text-tertiary transition-transform`, O)), (t[16] = O), (t[17] = A));
  let j;
  t[18] === A
    ? (j = t[19])
    : ((j = (0, X.jsx)(k, { "aria-hidden": !0, className: A })), (t[18] = A), (t[19] = j));
  let M;
  t[20] === m
    ? (M = t[21])
    : ((M = () => {
        m(Dn);
      }),
      (t[20] = m),
      (t[21] = M));
  let P;
  t[22] !== _ || t[23] !== p || t[24] !== D || t[25] !== j || t[26] !== M || t[27] !== S || t[28] !== E
    ? ((P = (0, X.jsx)(Fn, {
        contentId: _,
        expanded: p,
        label: S,
        description: E,
        icon: D,
        control: j,
        onClick: M,
      })),
      (t[22] = _),
      (t[23] = p),
      (t[24] = D),
      (t[25] = j),
      (t[26] = M),
      (t[27] = S),
      (t[28] = E),
      (t[29] = P))
    : (P = t[29]);
  let F;
  t[30] !== b || t[31] !== _ || t[32] !== p || t[33] !== P || t[34] !== x
    ? ((F = (0, X.jsx)(b, { contentId: _, expanded: p, content: x, children: P })),
      (t[30] = b),
      (t[31] = _),
      (t[32] = p),
      (t[33] = P),
      (t[34] = x),
      (t[35] = F))
    : (F = t[35]);
  let I;
  return (
    t[36] !== y || t[37] !== F
      ? ((I = (0, X.jsx)(y, { children: F })), (t[36] = y), (t[37] = F), (t[38] = I))
      : (I = t[38]),
    I
  );
}
function Dn(e) {
  return !e;
}
function On(e) {
  return e.itemType === `HOOKS`;
}
function kn(e, t) {
  return e + t.failedCount;
}
function An(e, t) {
  return e + t.importedCount;
}
function jn(e) {
  let t = (0, In.c)(6),
    { providerId: n } = e,
    r = G();
  switch (n) {
    case `claude-code`:
    case `claude-cowork`:
    case `cursor`: {
      let e;
      t[0] !== r || t[1] !== n ? ((e = At(r, n)), (t[0] = r), (t[1] = n), (t[2] = e)) : (e = t[2]);
      let i;
      return (
        t[3] === e
          ? (i = t[4])
          : ((i = (0, X.jsx)(q, {
              id: `settings.import.history.entryTitle.fromProvider`,
              defaultMessage: `Imported from {provider}`,
              description: `Title for a completed external agent import with a known source app`,
              values: { provider: e },
            })),
            (t[3] = e),
            (t[4] = i)),
        i
      );
    }
    case null:
    case void 0:
    default: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(q, {
              id: `settings.import.history.entryTitle`,
              defaultMessage: `Import`,
              description: `Generic title for a completed external agent import`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
  }
}
function Mn(e) {
  let t = (0, In.c)(4),
    { providerId: n } = e;
  switch (n) {
    case `claude-code`:
    case `claude-cowork`: {
      let e = n === `claude-code` ? Ie : Ye,
        r;
      return (
        t[0] === e
          ? (r = t[1])
          : ((r = (0, X.jsx)(`div`, {
              "aria-hidden": !0,
              className: `flex size-10 shrink-0 items-center justify-center rounded-lg bg-chart-orange text-inverse`,
              children: (0, X.jsx)(e, { className: `size-10` }),
            })),
            (t[0] = e),
            (t[1] = r)),
        r
      );
    }
    case `cursor`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(`div`, {
              "aria-hidden": !0,
              className: `flex size-10 shrink-0 items-center justify-center rounded-lg text-default`,
              children: (0, X.jsx)(je, { className: `size-10` }),
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case null:
    case void 0:
    default: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(`div`, {
              "aria-hidden": !0,
              className: `flex size-10 shrink-0 items-center justify-center rounded-xl bg-text/5 text-secondary`,
              children: (0, X.jsx)(x, { className: `icon-sm` }),
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
}
function Nn(e) {
  let t = (0, In.c)(28),
    { category: n, contentId: r, expanded: i, history: a, mcpServerStatuses: o, onToggleExpanded: s } = e,
    c = G(),
    l;
  t[0] !== n.itemType || t[1] !== a || t[2] !== o
    ? ((l = n.itemType === `MCP_SERVER_CONFIG` ? $e({ histories: [a], mcpServerStatuses: o }).length : 0),
      (t[0] = n.itemType),
      (t[1] = a),
      (t[2] = o),
      (t[3] = l))
    : (l = t[3]);
  let u = l,
    d;
  t[4] !== n.itemType || t[5] !== c
    ? ((d = Ct(c, n.itemType)), (t[4] = n.itemType), (t[5] = c), (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] !== u || t[8] !== n.importedCount || t[9] !== n.itemType
    ? ((f =
        n.itemType === `COMMANDS`
          ? (0, X.jsx)(q, {
              id: `settings.import.history.destination.commands`,
              defaultMessage: `Converted into skills`,
              description: `Destination label for imported commands`,
            })
          : n.itemType === `HOOKS` && n.importedCount > 0
            ? (0, X.jsx)(q, {
                id: `settings.import.history.manageHooks`,
                defaultMessage: `Manage imported hooks in Hooks settings`,
                description: `Description for opening imported hooks in Hooks settings`,
              })
            : u > 0
              ? (0, X.jsx)(q, {
                  id: `settings.import.history.authRequiredCount.v2`,
                  defaultMessage: `{count, plural, one {# server needs authentication} other {# servers need authentication}}`,
                  description: `Imported MCP server count that still requires authentication`,
                  values: { count: u },
                })
              : null),
      (t[7] = u),
      (t[8] = n.importedCount),
      (t[9] = n.itemType),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== u || t[12] !== n
    ? ((p = (0, X.jsx)(Pn, { authRequiredCount: u, category: n })), (t[11] = u), (t[12] = n), (t[13] = p))
    : (p = t[13]);
  let m = i && `rotate-90`,
    h;
  t[14] === m
    ? (h = t[15])
    : ((h = ee(`icon-2xs shrink-0 text-tertiary transition-transform`, m)), (t[14] = m), (t[15] = h));
  let g;
  t[16] === h ? (g = t[17]) : ((g = (0, X.jsx)(b, { className: h })), (t[16] = h), (t[17] = g));
  let _;
  t[18] !== p || t[19] !== g
    ? ((_ = (0, X.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-3 whitespace-nowrap`,
        children: [p, g],
      })),
      (t[18] = p),
      (t[19] = g),
      (t[20] = _))
    : (_ = t[20]);
  let v;
  return (
    t[21] !== r || t[22] !== i || t[23] !== s || t[24] !== d || t[25] !== f || t[26] !== _
      ? ((v = (0, X.jsx)(Fn, {
          contentId: r,
          expanded: i,
          variant: `nested`,
          label: d,
          description: f,
          control: _,
          onClick: s,
        })),
        (t[21] = r),
        (t[22] = i),
        (t[23] = s),
        (t[24] = d),
        (t[25] = f),
        (t[26] = _),
        (t[27] = v))
      : (v = t[27]),
    v
  );
}
function Pn(e) {
  let t = (0, In.c)(11),
    { authRequiredCount: n, category: r } = e;
  if (r.failedCount > 0) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(`span`, { className: `size-2 shrink-0 rounded-full bg-chart-red` })), (t[0] = e))
      : (e = t[0]);
    let n;
    return (
      t[1] !== r.failedCount || t[2] !== r.importedCount
        ? ((n = (0, X.jsxs)(`span`, {
            className: `inline-flex items-center gap-2 rounded-lg bg-chart-red/10 px-2 py-1 text-xs font-medium text-chart-red`,
            children: [
              e,
              (0, X.jsx)(q, {
                id: `settings.import.history.categorySummaryWithFailures`,
                defaultMessage: `{importedCount} imported · {failedCount} did not import`,
                description: `Summary of imported and failed items for an import history category`,
                values: { importedCount: r.importedCount, failedCount: r.failedCount },
              }),
            ],
          })),
          (t[1] = r.failedCount),
          (t[2] = r.importedCount),
          (t[3] = n))
        : (n = t[3]),
      n
    );
  }
  if (n > 0 || (r.itemType === `HOOKS` && r.importedCount > 0)) {
    let e;
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(`span`, { className: `size-2 shrink-0 rounded-full bg-text-warning` })), (t[4] = e))
      : (e = t[4]);
    let i;
    return (
      t[5] !== n || t[6] !== r.importedCount
        ? ((i = (0, X.jsxs)(`span`, {
            className: `inline-flex items-center gap-2 rounded-lg px-2 py-1 text-xs font-medium text-warning`,
            children: [
              e,
              n > 0
                ? (0, X.jsx)(q, {
                    id: `settings.import.history.categorySummaryWithAuthentication`,
                    defaultMessage: `{importedCount} imported · {authRequiredCount, plural, one {# needs authentication} other {# need authentication}}`,
                    description: `Summary of imported MCP servers and how many still require authentication`,
                    values: { authRequiredCount: n, importedCount: r.importedCount },
                  })
                : (0, X.jsx)(q, {
                    id: `settings.import.history.categorySummaryNeedsReview`,
                    defaultMessage: `{importedCount} imported · Needs review`,
                    description: `Summary of imported hooks that still need review`,
                    values: { importedCount: r.importedCount },
                  }),
            ],
          })),
          (t[5] = n),
          (t[6] = r.importedCount),
          (t[7] = i))
        : (i = t[7]),
      i
    );
  }
  let i;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, X.jsx)(`span`, { className: `size-2 shrink-0 rounded-full bg-chart-green` })), (t[8] = i))
    : (i = t[8]);
  let a;
  return (
    t[9] === r.importedCount
      ? (a = t[10])
      : ((a = (0, X.jsxs)(`span`, {
          className: `inline-flex items-center gap-2 text-xs font-medium text-default`,
          children: [
            i,
            (0, X.jsx)(q, {
              id: `settings.import.history.categorySummary`,
              defaultMessage: `{importedCount} imported`,
              description: `Summary of imported items for an import history category`,
              values: { importedCount: r.importedCount },
            }),
          ],
        })),
        (t[9] = r.importedCount),
        (t[10] = a)),
    a
  );
}
function Fn(e) {
  let t = (0, In.c)(11),
    { contentId: n, control: r, description: i, expanded: a, icon: o, label: s, onClick: c, variant: l } = e,
    u;
  t[0] !== r || t[1] !== i || t[2] !== o || t[3] !== s || t[4] !== l
    ? ((u = (0, X.jsx)(K, { variant: l, label: s, description: i, icon: o, control: r })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = o),
      (t[3] = s),
      (t[4] = l),
      (t[5] = u))
    : (u = t[5]);
  let d;
  return (
    t[6] !== n || t[7] !== a || t[8] !== c || t[9] !== u
      ? ((d = (0, X.jsx)(`button`, {
          "aria-controls": n,
          "aria-expanded": a,
          className: `w-full cursor-interaction text-start hover:bg-primary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring`,
          onClick: c,
          type: `button`,
          children: u,
        })),
        (t[6] = n),
        (t[7] = a),
        (t[8] = c),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
var In, Ln, X;
function Rn() {
  return (Rn = e(() => {
    ((In = C()),
      v(),
      (Ln = c()),
      P(),
      B(),
      Dt(),
      yt(),
      w(),
      s(),
      Et(),
      ke(),
      Ke(),
      re(),
      _e(),
      un(),
      V(),
      Cn(),
      (X = h()));
  }))();
}
var zn, Bn, Vn;
function Hn() {
  return (Hn = e(() => {
    (P(),
      (zn = I({
        SESSIONS: {
          id: `settings.import.syncCategory.chats`,
          defaultMessage: `Chats`,
          description: `Conversation history category in automatic import sync settings`,
        },
        AGENTS_MD: {
          id: `settings.import.syncCategory.instructions`,
          defaultMessage: `Instructions`,
          description: `Agent instruction files category in automatic import sync settings`,
        },
        CONFIG: {
          id: `settings.import.syncCategory.settings`,
          defaultMessage: `Settings`,
          description: `Agent configuration category in automatic import sync settings`,
        },
        SKILLS: {
          id: `settings.import.syncCategory.skills`,
          defaultMessage: `Skills`,
          description: `Skills category in automatic import sync settings`,
        },
        PLUGINS: {
          id: `settings.import.syncCategory.plugins`,
          defaultMessage: `Plugins`,
          description: `Plugins category in automatic import sync settings`,
        },
        MCP_SERVER_CONFIG: {
          id: `settings.import.syncCategory.mcpServers`,
          defaultMessage: `MCP servers`,
          description: `MCP server configuration category in automatic import sync settings`,
        },
        SUBAGENTS: {
          id: `settings.import.syncCategory.agents`,
          defaultMessage: `Agents`,
          description: `Custom agents category in automatic import sync settings`,
        },
        HOOKS: {
          id: `settings.import.syncCategory.hooks`,
          defaultMessage: `Hooks`,
          description: `Hooks category in automatic import sync settings`,
        },
        COMMANDS: {
          id: `settings.import.syncCategory.commands`,
          defaultMessage: `Commands`,
          description: `Slash commands category in automatic import sync settings`,
        },
        MEMORY: {
          id: `settings.import.syncCategory.memory`,
          defaultMessage: `Memory`,
          description: `Agent memory category in automatic import sync settings`,
        },
      })),
      (Bn = I({
        CONFIG: {
          id: `settings.import.autosync.settingsDescription`,
          defaultMessage: `Cowork tools sync together with Settings`,
          description: `Warns that Cowork account configuration includes tool setup that cannot be filtered through the separate content categories`,
        },
        PLUGINS: {
          id: `settings.import.autosync.pluginsDescription`,
          defaultMessage: `Bundled skills and MCP servers sync with their plugin`,
          description: `Warns that importing plugins can also bring their bundled skills and MCP servers`,
        },
        COMMANDS: {
          id: `settings.import.autosync.commandsDescription`,
          defaultMessage: `Imported as skills`,
          description: `Explains that imported slash commands are represented as skills in Codex`,
        },
      })),
      (Vn = I({
        content: {
          id: `settings.import.autosync.content`,
          defaultMessage: `Content to sync`,
          description: `Label and dialog title for selecting categories to import during automatic sync`,
        },
      })));
  }))();
}
function Un(e) {
  let t = (0, Wn.c)(68),
    { itemTypes: r, initialPreferences: i, isSaving: a, syncState: s, onCancel: c, onSave: l } = e,
    u = (0, Gn.useId)(),
    [d, p] = (0, Gn.useState)(i),
    [h, _] = (0, Gn.useState)(!1),
    [ee, v] = (0, Gn.useState)(!1),
    y = ee ? It : r,
    b = d === `all` ? y : r,
    x;
  t[0] !== d || t[1] !== s || t[2] !== b
    ? ((x = tt({ preferences: d, syncState: s, itemTypes: b })),
      (t[0] = d),
      (t[1] = s),
      (t[2] = b),
      (t[3] = x))
    : (x = t[3]);
  let C = x,
    w;
  t[4] !== r || t[5] !== d || t[6] !== s
    ? ((w = It.some((e) => zt({ preferences: d, syncState: s, itemType: e, itemTypes: r }) !== !1)),
      (t[4] = r),
      (t[5] = d),
      (t[6] = s),
      (t[7] = w))
    : (w = t[7]);
  let T = w,
    E;
  t[8] !== T || t[9] !== a || t[10] !== l || t[11] !== d
    ? ((E = (e) => {
        (e.preventDefault(),
          T &&
            !a &&
            (_(!1),
            l(d).catch(() => {
              _(!0);
            })));
      }),
      (t[8] = T),
      (t[9] = a),
      (t[10] = l),
      (t[11] = d),
      (t[12] = E))
    : (E = t[12]);
  let O;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Z.jsx)(pe, { children: (0, Z.jsx)(q, { ...Vn.content }) })), (t[13] = O))
    : (O = t[13]);
  let k;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Z.jsx)(we, {
        className: `shrink-0`,
        children: (0, Z.jsx)(D, {
          title: O,
          subtitle: (0, Z.jsx)(m, {
            children: (0, Z.jsx)(q, {
              id: `settings.import.autosync.customizeDescription`,
              defaultMessage: `Applies to all connected sources and projects`,
              description: `Explains that changing an automatic import category applies to all connected import sources and project-level content`,
            }),
          }),
        }),
      })),
      (t[14] = k))
    : (k = t[14]);
  let A;
  if (t[15] !== C || t[16] !== u || t[17] !== a || t[18] !== r || t[19] !== d || t[20] !== s || t[21] !== y) {
    let e;
    (t[23] !== C || t[24] !== u || t[25] !== a || t[26] !== r || t[27] !== d || t[28] !== s
      ? ((e = (e) => {
          let t = e === `CONFIG` && !s?.providerIds.includes(`claude-cowork`) ? void 0 : Bn[e],
            n = `${u}-${e}`;
          return (0, Z.jsx)(
            `label`,
            {
              className: a ? void 0 : `cursor-interaction`,
              htmlFor: n,
              children: (0, Z.jsx)(K, {
                control: (t) =>
                  (0, Z.jsx)(`div`, {
                    className: `relative`,
                    children: (0, Z.jsx)(S, {
                      id: n,
                      ...t,
                      checked: zt({ preferences: d, syncState: s, itemType: e, itemTypes: r }),
                      disabled: a,
                      onCheckedChange: (t) => {
                        (p({ ...C, [e]: t }), _(!1));
                      },
                    }),
                  }),
                description: t == null ? void 0 : (0, Z.jsx)(q, { ...t }),
                icon: Kn[e],
                label: (0, Z.jsx)(q, { ...zn[e] }),
              }),
            },
            e,
          );
        }),
        (t[23] = C),
        (t[24] = u),
        (t[25] = a),
        (t[26] = r),
        (t[27] = d),
        (t[28] = s),
        (t[29] = e))
      : (e = t[29]),
      (A = y.map(e)),
      (t[15] = C),
      (t[16] = u),
      (t[17] = a),
      (t[18] = r),
      (t[19] = d),
      (t[20] = s),
      (t[21] = y),
      (t[22] = A));
  } else A = t[22];
  let j;
  t[30] === A
    ? (j = t[31])
    : ((j = (0, Z.jsx)(we, {
        className: `min-h-0 overflow-y-auto`,
        children: (0, Z.jsx)(n, { children: A }),
      })),
      (t[30] = A),
      (t[31] = j));
  let M, N;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Z.jsx)(q, {
        id: `settings.import.autosync.allCategories`,
        defaultMessage: `Sync all categories`,
        description: `Toggle to sync every import category from connected sources, including categories detected later`,
      })),
      (M = (0, Z.jsx)(q, {
        id: `settings.import.autosync.allCategoriesDescription`,
        defaultMessage: `Include categories found in the future`,
        description: `Explains that syncing all categories automatically includes categories absent from the original import`,
      })),
      (t[32] = M),
      (t[33] = N))
    : ((M = t[32]), (N = t[33]));
  let P;
  t[34] !== C || t[35] !== a || t[36] !== d
    ? ((P = (0, Z.jsx)(K, {
        label: N,
        description: M,
        control: (e) =>
          (0, Z.jsx)(oe, {
            ...e,
            checked: d === `all`,
            disabled: a,
            onChange: (e) => {
              (p(e ? `all` : C), _(!1));
            },
          }),
      })),
      (t[34] = C),
      (t[35] = a),
      (t[36] = d),
      (t[37] = P))
    : (P = t[37]);
  let I;
  t[38] !== a || t[39] !== r.length || t[40] !== ee
    ? ((I =
        r.length < It.length
          ? (0, Z.jsx)(K, {
              label: (0, Z.jsx)(q, {
                id: `settings.import.autosync.showAllCategories`,
                defaultMessage: `Show all categories`,
                description: `Toggle to also show automatic import categories not found in connected sources so they can be configured in advance`,
              }),
              description: (0, Z.jsx)(q, {
                id: `settings.import.autosync.showAllCategoriesDescription`,
                defaultMessage: `Choose what to sync when new categories become available`,
                description: `Explains that showing all import categories lets users choose in advance which categories to sync when their connected source apps have that content`,
              }),
              control: (e) => (0, Z.jsx)(oe, { ...e, checked: ee, disabled: a, onChange: v }),
            })
          : null),
      (t[38] = a),
      (t[39] = r.length),
      (t[40] = ee),
      (t[41] = I))
    : (I = t[41]);
  let L;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Z.jsx)(`p`, {
        className: `text-sm leading-4 text-secondary`,
        children: (0, Z.jsx)(q, {
          id: `settings.import.autosync.futureSyncs.v2`,
          defaultMessage: `Changes apply to future syncs. Content already imported stays in {appName}`,
          description: `Explains that changing automatic import preferences does not remove content already imported into the named app`,
          values: { appName: it },
        }),
      })),
      (t[42] = L))
    : (L = t[42]);
  let R;
  t[43] === T
    ? (R = t[44])
    : ((R = T
        ? null
        : (0, Z.jsx)(`p`, {
            className: `text-sm leading-4 text-secondary`,
            role: `alert`,
            children: (0, Z.jsx)(q, {
              id: `settings.import.autosync.noCategories`,
              defaultMessage: `Select at least one category. To stop syncing, turn off “Keep imports in sync”`,
              description: `Validation message for an empty automatic import category selection, explaining how to pause sync instead`,
            }),
          })),
      (t[43] = T),
      (t[44] = R));
  let z;
  t[45] === h
    ? (z = t[46])
    : ((z = h
        ? (0, Z.jsx)(`p`, {
            className: `text-danger`,
            role: `alert`,
            children: (0, Z.jsx)(q, {
              id: `settings.import.autosync.saveError`,
              defaultMessage: `Couldn’t save sync preferences. Try again`,
              description: `Error shown when automatic import category preferences could not be saved; the dialog stays open for retry`,
            }),
          })
        : null),
      (t[45] = h),
      (t[46] = z));
  let B;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Z.jsx)(q, {
        id: `settings.import.autosync.cancel`,
        defaultMessage: `Cancel`,
        description: `Discard unsaved automatic import category changes and close the dialog`,
      })),
      (t[47] = B))
    : (B = t[47]);
  let V;
  t[48] !== a || t[49] !== c
    ? ((V = (0, Z.jsx)(F, { type: `button`, color: `outline`, disabled: a, onClick: c, children: B })),
      (t[48] = a),
      (t[49] = c),
      (t[50] = V))
    : (V = t[50]);
  let H = !T || a,
    U;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Z.jsx)(q, {
        id: `settings.import.autosync.save`,
        defaultMessage: `Save`,
        description: `Save the selected categories for future automatic import syncs`,
      })),
      (t[51] = U))
    : (U = t[51]);
  let W;
  t[52] !== a || t[53] !== H
    ? ((W = (0, Z.jsx)(F, { type: `submit`, color: `primary`, disabled: H, loading: a, children: U })),
      (t[52] = a),
      (t[53] = H),
      (t[54] = W))
    : (W = t[54]);
  let te;
  t[55] !== V || t[56] !== W
    ? ((te = (0, Z.jsxs)(g, { children: [V, W] })), (t[55] = V), (t[56] = W), (t[57] = te))
    : (te = t[57]);
  let ne;
  t[58] !== P || t[59] !== I || t[60] !== R || t[61] !== z || t[62] !== te
    ? ((ne = (0, Z.jsx)(we, {
        className: `shrink-0`,
        children: (0, Z.jsxs)(o, { children: [P, I, L, R, z, te] }),
      })),
      (t[58] = P),
      (t[59] = I),
      (t[60] = R),
      (t[61] = z),
      (t[62] = te),
      (t[63] = ne))
    : (ne = t[63]);
  let re;
  return (
    t[64] !== ne || t[65] !== E || t[66] !== j
      ? ((re = (0, Z.jsxs)(f, {
          as: `form`,
          className: `max-h-[min(720px,calc(100vh-64px))] overflow-hidden select-none`,
          onSubmit: E,
          children: [k, j, ne],
        })),
        (t[64] = ne),
        (t[65] = E),
        (t[66] = j),
        (t[67] = re))
      : (re = t[67]),
    re
  );
}
var Wn, Gn, Z, Kn;
function qn() {
  return (qn = e(() => {
    ((Wn = C()),
      (Gn = c()),
      P(),
      vt(),
      R(),
      ie(),
      p(),
      u(),
      A(),
      ge(),
      We(),
      _e(),
      V(),
      Hn(),
      (Z = h()),
      (Kn = {
        SESSIONS: (0, Z.jsx)(se, {}),
        AGENTS_MD: (0, Z.jsx)(H, {}),
        CONFIG: (0, Z.jsx)(T, {}),
        SKILLS: (0, Z.jsx)(U, {}),
        PLUGINS: (0, Z.jsx)(Ce, {}),
        MCP_SERVER_CONFIG: (0, Z.jsx)(T, {}),
        SUBAGENTS: (0, Z.jsx)(ce, {}),
        HOOKS: (0, Z.jsx)(d, {}),
        COMMANDS: (0, Z.jsx)(_, {}),
        MEMORY: (0, Z.jsx)(H, {}),
      }));
  }))();
}
function Jn(e) {
  let t = (0, Xn.c)(63),
    { workspaceRoots: a } = e,
    o = r(E),
    s = te(i.syncEnabled),
    c = te(i.syncItemTypes),
    u = ne(fe),
    d = ne(lt),
    f = De(Ee),
    p;
  t[0] === f ? (p = t[1]) : ((p = Me(f)), (t[0] = f), (t[1] = p));
  let m = p,
    h = qt(),
    g = d != null,
    _;
  t[2] !== m || t[3] !== h || t[4] !== g || t[5] !== a
    ? ((_ = { enabled: g, hostId: L, providers: m, sessionLimits: h, workspaceRoots: a }),
      (t[2] = m),
      (t[3] = h),
      (t[4] = g),
      (t[5] = a),
      (t[6] = _))
    : (_ = t[6]);
  let { detectedItems: ee } = Gt(_),
    { data: v } = ue(Ae, L),
    y = Ut({ syncState: d, detectedItems: ee, histories: v }),
    [b, x] = (0, Zn.useState)(!1),
    [S, C] = (0, Zn.useState)(!1),
    [w, T] = (0, Zn.useState)(!1),
    D = It.filter((e) => zt({ preferences: c, syncState: d, itemType: e, itemTypes: y }) !== !1),
    O = u && d?.version === 1 && d.providerIds.length > 0,
    k = l,
    A = D.map(Yn),
    j;
  t[7] !== k || t[8] !== A
    ? ((j = (0, Q.jsx)(k, { type: `conjunction`, value: A })), (t[7] = k), (t[8] = A), (t[9] = j))
    : (j = t[9]);
  let N = j;
  if (c === `all`) {
    let e;
    (t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(q, {
          id: `settings.import.autosync.allCategoriesSummary`,
          defaultMessage: `All categories, including new ones`,
          description: `Summary when automatic import sync includes every category, even categories detected in the future`,
        })),
        (t[10] = e))
      : (e = t[10]),
      (N = e));
  } else if (D.length === 0) {
    let e;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(q, {
          id: `settings.import.autosync.noneSelected`,
          defaultMessage: `No content selected`,
          description: `Summary when no categories are selected for automatic import sync`,
        })),
        (t[11] = e))
      : (e = t[11]),
      (N = e));
  } else if (D.length === 1 && D[0] === `SESSIONS`) {
    let e;
    (t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(q, {
          id: `settings.import.autosync.chatsOnly`,
          defaultMessage: `Chats only`,
          description: `Summary when conversation history is the only category selected for automatic import sync`,
        })),
        (t[12] = e))
      : (e = t[12]),
      (N = e));
  } else if (D.length > 3) {
    let e;
    (t[13] === D.length
      ? (e = t[14])
      : ((e = (0, Q.jsx)(q, {
          id: `settings.import.autosync.selectedCount`,
          defaultMessage: `{count} categories selected`,
          description: `Number of content categories selected for automatic import sync`,
          values: { count: D.length },
        })),
        (t[13] = D.length),
        (t[14] = e)),
      (N = e));
  }
  let P;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Q.jsx)(kt.Header, {
        title: (0, Q.jsx)(q, {
          id: `settings.import.autosync.title`,
          defaultMessage: `Automatic sync`,
          description: `Heading for the external agent import autosync settings`,
        }),
      })),
      (t[15] = P))
    : (P = t[15]);
  let I;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(q, {
        id: `settings.import.autosync.label`,
        defaultMessage: `Keep imports in sync`,
        description: `Label for the external agent import autosync setting`,
      })),
      (t[16] = I))
    : (I = t[16]);
  let R;
  t[17] === s
    ? (R = t[18])
    : ((R = s
        ? (0, Q.jsx)(q, {
            id: `settings.import.autosync.description`,
            defaultMessage: `Automatically sync new and updated content from connected sources`,
            description: `Description for the external agent import autosync setting`,
          })
        : (0, Q.jsx)(q, {
            id: `settings.import.autosync.paused`,
            defaultMessage: `Sync paused. Your content selections are saved`,
            description: `Explains that automatic imports are paused without discarding category preferences`,
          })),
      (t[17] = s),
      (t[18] = R));
  let z;
  t[19] !== o || t[20] !== T || t[21] !== u || t[22] !== s
    ? ((z = (e) =>
        (0, Q.jsx)(oe, {
          ...e,
          checked: s,
          disabled: !u,
          onChange: (e) => {
            (T(!1),
              ae(o, i.syncEnabled, e).catch(() => {
                T(!0);
              }));
          },
        })),
      (t[19] = o),
      (t[20] = T),
      (t[21] = u),
      (t[22] = s),
      (t[23] = z))
    : (z = t[23]);
  let B;
  t[24] !== R || t[25] !== z
    ? ((B = (0, Q.jsx)(K, { label: I, description: R, control: z })), (t[24] = R), (t[25] = z), (t[26] = B))
    : (B = t[26]);
  let V;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Q.jsx)(q, { ...Vn.content })), (t[27] = V))
    : (V = t[27]);
  let H;
  t[28] !== N || t[29] !== d
    ? ((H =
        d == null || d.providerIds.length === 0
          ? (0, Q.jsx)(q, {
              id: `settings.import.autosync.afterImport`,
              defaultMessage: `Available after your first import`,
              description: `Explains that automatic import category preferences become editable after an import connects a source`,
            })
          : N),
      (t[28] = N),
      (t[29] = d),
      (t[30] = H))
    : (H = t[30]);
  let U;
  t[31] !== S || t[32] !== x
    ? ((U = (e) => {
        S || x(e);
      }),
      (t[31] = S),
      (t[32] = x),
      (t[33] = U))
    : (U = t[33]);
  let W = !O,
    re;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, Q.jsx)(q, {
        id: `settings.import.autosync.customize`,
        defaultMessage: `Customize`,
        description: `Open a dialog to choose the content categories for automatic import sync`,
      })),
      (t[34] = re))
    : (re = t[34]);
  let ie;
  t[35] === W
    ? (ie = t[36])
    : ((ie = (0, Q.jsx)(F, { color: `secondary`, size: `toolbar`, disabled: W, children: re })),
      (t[35] = W),
      (t[36] = ie));
  let se;
  t[37] !== b ||
  t[38] !== S ||
  t[39] !== y ||
  t[40] !== c ||
  t[41] !== o ||
  t[42] !== x ||
  t[43] !== C ||
  t[44] !== d
    ? ((se = b
        ? (0, Q.jsx)(Un, {
            itemTypes: y,
            initialPreferences: c,
            isSaving: S,
            syncState: d,
            onCancel: () => x(!1),
            onSave: (e) => (
              C(!0),
              ae(o, i.syncItemTypes, e)
                .then(() => {
                  x(!1);
                })
                .finally(() => {
                  C(!1);
                })
            ),
          })
        : null),
      (t[37] = b),
      (t[38] = S),
      (t[39] = y),
      (t[40] = c),
      (t[41] = o),
      (t[42] = x),
      (t[43] = C),
      (t[44] = d),
      (t[45] = se))
    : (se = t[45]);
  let ce;
  t[46] !== b || t[47] !== S || t[48] !== U || t[49] !== ie || t[50] !== se
    ? ((ce = (0, Q.jsx)(M, {
        open: b,
        onOpenChange: U,
        shouldIgnoreClickOutside: S,
        showDialogClose: !1,
        size: `xwide`,
        triggerContent: ie,
        children: se,
      })),
      (t[46] = b),
      (t[47] = S),
      (t[48] = U),
      (t[49] = ie),
      (t[50] = se),
      (t[51] = ce))
    : (ce = t[51]);
  let le;
  t[52] !== H || t[53] !== ce
    ? ((le = (0, Q.jsx)(K, { label: V, description: H, control: ce })),
      (t[52] = H),
      (t[53] = ce),
      (t[54] = le))
    : (le = t[54]);
  let de;
  t[55] !== B || t[56] !== le
    ? ((de = (0, Q.jsx)(kt.Content, { children: (0, Q.jsxs)(n, { children: [B, le] }) })),
      (t[55] = B),
      (t[56] = le),
      (t[57] = de))
    : (de = t[57]);
  let G;
  t[58] === w
    ? (G = t[59])
    : ((G = w
        ? (0, Q.jsx)(kt.Footer, {
            children: (0, Q.jsx)(`span`, {
              className: `text-danger`,
              role: `alert`,
              children: (0, Q.jsx)(q, {
                id: `settings.import.autosync.toggleError`,
                defaultMessage: `Couldn’t change automatic sync. Try again`,
                description: `Error shown when the automatic import sync switch could not be saved`,
              }),
            }),
          })
        : null),
      (t[58] = w),
      (t[59] = G));
  let pe;
  return (
    t[60] !== de || t[61] !== G
      ? ((pe = (0, Q.jsxs)(kt, { className: `select-none`, children: [P, de, G] })),
        (t[60] = de),
        (t[61] = G),
        (t[62] = pe))
      : (pe = t[62]),
    pe
  );
}
function Yn(e) {
  return (0, Q.jsx)(q, { ...zn[e] }, e);
}
var Xn, Zn, Q;
function Qn() {
  return (Qn = e(() => {
    ((Xn = C()),
      z(),
      me(),
      (Zn = c()),
      P(),
      R(),
      p(),
      ge(),
      Dt(),
      qe(),
      Ue(),
      Pt(),
      We(),
      Lt(),
      a(),
      de(),
      rt(),
      _e(),
      V(),
      Le(),
      Vt(),
      qn(),
      Hn(),
      (Q = h()));
  }))();
}
function $n() {
  let e = (0, ir.c)(76),
    t = De(Ot),
    r = ne(at),
    i = r == null,
    a = ne(nt),
    o = ne(Tt),
    s;
  e[0] !== o || e[1] !== a
    ? ((s = a?.type === `local` ? (o[a.projectId]?.rootPaths ?? []) : []), (e[0] = o), (e[1] = a), (e[2] = s))
    : (s = e[2]);
  let c = s,
    l = ne(jt),
    u = ne(gt),
    { data: d, error: f, isLoading: p, refetch: m } = ue(Ae, L),
    h;
  e[3] === d ? (h = e[4]) : ((h = d?.some(nr) ?? !1), (e[3] = d), (e[4] = h));
  let g = h,
    _;
  e[5] === d ? (_ = e[6]) : ((_ = d ?? []), (e[5] = d), (e[6] = _));
  let ee;
  e[7] === _ ? (ee = e[8]) : ((ee = St(_)), (e[7] = _), (e[8] = ee));
  let v = ee,
    { data: y } = ue(Ge, L),
    { data: b } = ue(Re, L),
    x;
  e[9] !== b || e[10] !== y?.connectors
    ? ((x = y?.connectors == null && b == null ? void 0 : [...(y?.connectors ?? []), ...(b ?? [])]),
      (e[9] = b),
      (e[10] = y?.connectors),
      (e[11] = x))
    : (x = e[11]);
  let S = (x?.length ?? 0) > 0,
    C;
  e[12] === S ? (C = e[13]) : ((C = { enabled: S, hostId: L }), (e[12] = S), (e[13] = C));
  let { hardRefetchAppsList: w, loadError: T } = Je(C),
    E = ue(sn, L),
    D = E.status === `ready` && E.data.kind === `plugin-directory`,
    O;
  e[14] === D ? (O = e[15]) : ((O = { enabled: D }), (e[14] = D), (e[15] = O));
  let { availablePlugins: k, errorMessage: A, isLoading: j, refetch: M } = Ft(L, void 0, O),
    N;
  e[16] !== k || e[17] !== E || e[18] !== j || e[19] !== A || e[20] !== M
    ? ((N = ln({
        inputsResult: E,
        pluginDirectory: { errorMessage: A, isLoading: j, plugins: k, refetch: M },
      })),
      (e[16] = k),
      (e[17] = E),
      (e[18] = j),
      (e[19] = A),
      (e[20] = M),
      (e[21] = N))
    : (N = e[21]);
  let P = N,
    I = P.data,
    R;
  e[22] === v ? (R = e[23]) : ((R = { enabled: v }), (e[22] = v), (e[23] = R));
  let { data: z, error: B, refetch: V } = ue(Qe, L, R),
    H = Ze({ histories: d ?? [], runningImport: u?.hostId === `local` ? u : null }),
    U = Te(H),
    [W, te] = (0, ar.useState)(!1),
    [re, ie] = (0, ar.useState)(!1),
    ae = re ? H : U,
    oe;
  e[24] === d ? (oe = e[25]) : ((oe = d?.find(tr)), (e[24] = d), (e[25] = oe));
  let se = oe,
    ce;
  e[26] === I?.appsRequiringConnection
    ? (ce = e[27])
    : ((ce = I?.appsRequiringConnection ?? []), (e[26] = I?.appsRequiringConnection), (e[27] = ce));
  let le = ce,
    de = T == null ? P.status : `error`,
    G;
  e[28] !== d || e[29] !== z?.data
    ? ((G = $e({ histories: d ?? [], mcpServerStatuses: z?.data ?? [] })),
      (e[28] = d),
      (e[29] = z?.data),
      (e[30] = G))
    : (G = e[30]);
  let fe = G,
    pe;
  e[31] === d ? (pe = e[32]) : ((pe = d ?? []), (e[31] = d), (e[32] = pe));
  let me;
  e[33] === pe ? (me = e[34]) : ((me = Nt(pe)), (e[33] = pe), (e[34] = me));
  let he = me,
    ge = z?.data,
    _e;
  e[35] !== d || e[36] !== f || e[37] !== B || e[38] !== ge
    ? ((_e = Ve({ histories: d, historiesError: f, mcpServerStatuses: ge, mcpServerStatusesError: B })),
      (e[35] = d),
      (e[36] = f),
      (e[37] = B),
      (e[38] = ge),
      (e[39] = _e))
    : (_e = e[39]);
  let ve = _e,
    ye = (g || S) && de !== `ready`,
    be = v && ve !== `ready`,
    xe = be && ve === `error`,
    Se = (I?.importedPlugins.length ?? 0) > 0 || le.length > 0 || ye || fe.length > 0 || he || xe,
    Ce = Be,
    we;
  e[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, $.jsx)(ze, { slug: `import` })), (e[40] = we))
    : (we = e[40]);
  let Ee;
  e[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, $.jsx)(q, {
        id: `settings.import.subtitle.v2`,
        defaultMessage: `Bring setup, projects, and chats from other AI apps into {appName}`,
        description: `Subtitle explaining that this page imports configuration, projects, and chat history from other AI coding apps into the named Codex app`,
        values: { appName: it },
      })),
      (e[41] = Ee))
    : (Ee = e[41]);
  let Oe;
  e[42] !== c || e[43] !== r || e[44] !== t
    ? ((Oe = t ? (0, $.jsx)(Jn, { workspaceRoots: r == null ? void 0 : c }) : null),
      (e[42] = c),
      (e[43] = r),
      (e[44] = t),
      (e[45] = Oe))
    : (Oe = e[45]);
  let ke = i || l || p,
    je = se == null ? null : Number(se.completedAtMs),
    Me = r == null ? void 0 : c,
    Ne;
  e[46] !== ke || e[47] !== je || e[48] !== Me
    ? ((Ne = (0, $.jsx)(fn, {
        isImportContextLoading: ke,
        latestSuccessfulImportAtMs: je,
        workspaceRoots: Me,
      })),
      (e[46] = ke),
      (e[47] = je),
      (e[48] = Me),
      (e[49] = Ne))
    : (Ne = e[49]);
  let Pe;
  e[50] !== T ||
  e[51] !== le ||
  e[52] !== w ||
  e[53] !== he ||
  e[54] !== v ||
  e[55] !== W ||
  e[56] !== de ||
  e[57] !== fe ||
  e[58] !== ve ||
  e[59] !== I?.importedPlugins ||
  e[60] !== P ||
  e[61] !== m ||
  e[62] !== V ||
  e[63] !== Se ||
  e[64] !== ye ||
  e[65] !== xe ||
  e[66] !== be
    ? ((Pe =
        Se || W
          ? (0, $.jsx)(rr, {
              appsRequiringConnection: le,
              hardRefetchAppsList: w,
              hasImportedHooks: he,
              hasImportedMcpServers: v,
              importedConnectorDiscoveryStatus: de,
              importedMcpServerNamesRequiringAuthentication: fe,
              importedMcpSetupStatus: ve,
              importedPlugins: I?.importedPlugins ?? [],
              retryImportHistories: () => {
                m();
              },
              retryImportedApps: () => {
                (P.status === `error` && P.retry(), T != null && w().catch(er));
              },
              retryMcpServerStatuses: () => {
                V();
              },
              onSetupStarted: () => {
                te(!0);
              },
              shouldShowImportedConnectorStatus: ye,
              shouldShowMcpServerError: xe,
              shouldShowMcpServerStatus: be,
            })
          : null),
      (e[50] = T),
      (e[51] = le),
      (e[52] = w),
      (e[53] = he),
      (e[54] = v),
      (e[55] = W),
      (e[56] = de),
      (e[57] = fe),
      (e[58] = ve),
      (e[59] = I?.importedPlugins),
      (e[60] = P),
      (e[61] = m),
      (e[62] = V),
      (e[63] = Se),
      (e[64] = ye),
      (e[65] = xe),
      (e[66] = be),
      (e[67] = Pe))
    : (Pe = e[67]);
  let Fe =
      H.length > 0 || p || f != null
        ? (0, $.jsxs)(kt, {
            children: [
              (0, $.jsx)(kt.Header, {
                title: (0, $.jsx)(q, {
                  id: `settings.import.history.latestTitle`,
                  defaultMessage: `Import history`,
                  description: `Heading for external agent import results`,
                }),
              }),
              (0, $.jsxs)(kt.Content, {
                children: [
                  ae.map((e) =>
                    (0, $.jsx)(
                      wn,
                      {
                        defaultExpanded: e.kind === `completed` && U.includes(e),
                        entry: e,
                        mcpServerStatuses: z?.data ?? [],
                      },
                      e.kind === `running` ? `running-${e.runningImport.startedAtMs}` : e.history.importId,
                    ),
                  ),
                  ae.length < H.length
                    ? (0, $.jsx)(`div`, {
                        className: `flex justify-center`,
                        children: (0, $.jsx)(F, {
                          color: `secondary`,
                          size: `toolbar`,
                          onClick: () => {
                            ie(!0);
                          },
                          children: (0, $.jsx)(q, {
                            id: `settings.import.history.viewMore`,
                            defaultMessage: `View more`,
                            description: `Button label to reveal older external agent import history`,
                          }),
                        }),
                      })
                    : null,
                  p
                    ? (0, $.jsx)(n, {
                        children: (0, $.jsx)($t, {
                          children: (0, $.jsx)(q, {
                            id: `settings.import.history.loading`,
                            defaultMessage: `Loading import history`,
                            description: `Label shown while import history is loading`,
                          }),
                        }),
                      })
                    : d == null && f != null
                      ? (0, $.jsx)(n, {
                          children: (0, $.jsx)(K, {
                            label: (0, $.jsx)(q, {
                              id: `settings.import.history.error`,
                              defaultMessage: `Couldn't load import history`,
                              description: `Error shown when import history cannot be loaded`,
                            }),
                            control: (0, $.jsx)(F, {
                              color: `secondary`,
                              size: `toolbar`,
                              onClick: () => {
                                m();
                              },
                              children: (0, $.jsx)(q, {
                                id: `settings.import.history.retry`,
                                defaultMessage: `Retry`,
                                description: `Button label to retry loading import history`,
                              }),
                            }),
                          }),
                        })
                      : null,
                ],
              }),
            ],
          })
        : null,
    Ie;
  return (
    e[68] !== Ce ||
    e[69] !== we ||
    e[70] !== Ee ||
    e[71] !== Oe ||
    e[72] !== Ne ||
    e[73] !== Pe ||
    e[74] !== Fe
      ? ((Ie = (0, $.jsxs)(Ce, { title: we, subtitle: Ee, children: [Oe, Ne, Pe, Fe] })),
        (e[68] = Ce),
        (e[69] = we),
        (e[70] = Ee),
        (e[71] = Oe),
        (e[72] = Ne),
        (e[73] = Pe),
        (e[74] = Fe),
        (e[75] = Ie))
      : (Ie = e[75]),
    Ie
  );
}
function er() {}
function tr(e) {
  return e.successes.length > 0;
}
function nr(e) {
  return e.successes.length > 0;
}
function rr(e) {
  let t = (0, ir.c)(46),
    {
      appsRequiringConnection: r,
      hardRefetchAppsList: i,
      hasImportedHooks: a,
      hasImportedMcpServers: o,
      importedConnectorDiscoveryStatus: s,
      importedMcpServerNamesRequiringAuthentication: c,
      importedMcpSetupStatus: l,
      importedPlugins: u,
      retryImportHistories: d,
      retryImportedApps: f,
      retryMcpServerStatuses: p,
      shouldShowImportedConnectorStatus: m,
      shouldShowMcpServerError: h,
      shouldShowMcpServerStatus: g,
      onSetupStarted: _,
    } = e,
    [ee, v] = (0, ar.useState)(`apps`),
    y;
  t[0] !== i || t[1] !== o || t[2] !== d || t[3] !== f || t[4] !== p
    ? ((y = {
        hardRefetchAppsList: i,
        hasImportedMcpServers: o,
        hostId: L,
        retryImportHistories: d,
        retryImportedApps: f,
        retryMcpServerStatuses: p,
      }),
      (t[0] = i),
      (t[1] = o),
      (t[2] = d),
      (t[3] = f),
      (t[4] = p),
      (t[5] = y))
    : (y = t[5]);
  let {
      clearConnectingApp: b,
      connectedApps: x,
      connectingApp: S,
      handleAppConnectOAuthStarted: C,
      handleAppConnected: w,
      handleAuthenticateMcp: T,
      handleConnectApp: E,
      handleInstallPlugin: D,
      handleOpenHooksSettings: O,
      handleRetry: k,
      isAppConnectPending: A,
    } = nn(y),
    j = m ? s : `ready`,
    M = g ? l : `ready`,
    N;
  t[6] !== j || t[7] !== M
    ? ((N = { apps: j, hooks: `ready`, mcps: M }), (t[6] = j), (t[7] = M), (t[8] = N))
    : (N = t[8]);
  let P = N,
    I;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(kt.Header, {
        title: (0, $.jsx)(q, {
          id: `settings.import.attention.title`,
          defaultMessage: `Needs attention`,
          description: `Heading for imported setup that needs review or authentication`,
        }),
        subtitle: (0, $.jsx)(q, {
          id: `settings.import.attention.subtitle`,
          defaultMessage: `Finish setting up items from a previous import`,
          description: `Subtitle for imported setup that needs review or authentication`,
        }),
      })),
      (t[9] = I))
    : (I = t[9]);
  let R;
  t[10] !== p || t[11] !== h
    ? ((R = h
        ? (0, $.jsx)(K, {
            label: (0, $.jsx)(q, {
              id: `settings.import.attention.mcps.error`,
              defaultMessage: `Couldn't check imported MCP servers`,
              description: `Error shown when Codex cannot determine whether imported MCP servers need authentication`,
            }),
            control: (0, $.jsx)(F, {
              color: `secondary`,
              size: `toolbar`,
              onClick: p,
              children: (0, $.jsx)(q, {
                id: `settings.import.attention.mcps.retry`,
                defaultMessage: `Retry`,
                description: `Button label to retry checking whether imported MCP servers need authentication`,
              }),
            }),
          })
        : null),
      (t[10] = p),
      (t[11] = h),
      (t[12] = R))
    : (R = t[12]);
  let z;
  t[13] !== E || t[14] !== _
    ? ((z = (e) => (_(), E(e))), (t[13] = E), (t[14] = _), (t[15] = z))
    : (z = t[15]);
  let B;
  t[16] !== D || t[17] !== _
    ? ((B = (e, t) => {
        (_(), D(e, t));
      }),
      (t[16] = D),
      (t[17] = _),
      (t[18] = B))
    : (B = t[18]);
  let V;
  t[19] !== r ||
  t[20] !== x ||
  t[21] !== T ||
  t[22] !== O ||
  t[23] !== k ||
  t[24] !== a ||
  t[25] !== c ||
  t[26] !== u ||
  t[27] !== A ||
  t[28] !== ee ||
  t[29] !== z ||
  t[30] !== B ||
  t[31] !== P
    ? ((V = (0, $.jsx)(an, {
        appsRequiringConnection: r,
        connectedApps: x,
        hasImportedHooks: a,
        importedPlugins: u,
        isAppConnectPending: A,
        mcpServerNamesRequiringAuthentication: c,
        selectedTab: ee,
        tabStatus: P,
        variant: `settings`,
        onConnectApp: z,
        onInstallPlugin: B,
        onOpenHooksSettings: O,
        onAuthenticateMcp: T,
        onRetry: k,
        onSelectTab: v,
      })),
      (t[19] = r),
      (t[20] = x),
      (t[21] = T),
      (t[22] = O),
      (t[23] = k),
      (t[24] = a),
      (t[25] = c),
      (t[26] = u),
      (t[27] = A),
      (t[28] = ee),
      (t[29] = z),
      (t[30] = B),
      (t[31] = P),
      (t[32] = V))
    : (V = t[32]);
  let H;
  t[33] !== R || t[34] !== V
    ? ((H = (0, $.jsxs)(kt, {
        children: [I, (0, $.jsx)(kt.Content, { children: (0, $.jsxs)(n, { children: [R, V] }) })],
      })),
      (t[33] = R),
      (t[34] = V),
      (t[35] = H))
    : (H = t[35]);
  let U;
  t[36] === b
    ? (U = t[37])
    : ((U = (e) => {
        e || b();
      }),
      (t[36] = b),
      (t[37] = U));
  let W;
  t[38] !== S || t[39] !== C || t[40] !== w || t[41] !== U
    ? ((W = (0, $.jsx)(Zt, { app: S, hostId: L, onOpenChange: U, onOAuthStarted: C, onConnected: w })),
      (t[38] = S),
      (t[39] = C),
      (t[40] = w),
      (t[41] = U),
      (t[42] = W))
    : (W = t[42]);
  let te;
  return (
    t[43] !== H || t[44] !== W
      ? ((te = (0, $.jsxs)($.Fragment, { children: [H, W] })), (t[43] = H), (t[44] = W), (t[45] = te))
      : (te = t[45]),
    te
  );
}
var ir, ar, $;
function or() {
  return (or = e(() => {
    ((ir = C()),
      z(),
      (ar = c()),
      P(),
      vt(),
      Kt(),
      R(),
      Dt(),
      rn(),
      _t(),
      Oe(),
      cn(),
      on(),
      Pe(),
      Ne(),
      dt(),
      st(),
      Xt(),
      rt(),
      Qt(),
      _e(),
      He(),
      V(),
      Le(),
      Vt(),
      _n(),
      Rn(),
      Qn(),
      ($ = h()));
  }))();
}
or();
export { $n as ImportSettings };
//# sourceMappingURL=import-settings-85e3649d8286.js.map
