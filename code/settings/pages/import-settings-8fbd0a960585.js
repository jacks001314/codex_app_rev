import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  $qt as r,
  A3t as i,
  A8t as a,
  AMt as o,
  Alt as s,
  Amn as c,
  Aqt as l,
  B6t as u,
  BS as d,
  Bf as f,
  Cf as p,
  Cpn as m,
  Dqt as h,
  F3t as g,
  FO as _,
  Ff as v,
  Fu as y,
  GK as b,
  GKt as x,
  Gf as S,
  Hqt as C,
  Hu as w,
  IXt as T,
  If as E,
  Iu as D,
  JS as O,
  JXt as k,
  Jd as A,
  Jf as j,
  Jqt as M,
  Jrt as N,
  KK as P,
  KYt as F,
  Kdt as I,
  Kf as L,
  Lf as R,
  MMt as z,
  Mdt as B,
  Mf as V,
  N3t as H,
  Nf as ee,
  O3t as U,
  Opn as W,
  PO as te,
  PQt as ne,
  Pu as re,
  Put as G,
  QG as ie,
  QKt as ae,
  QXt as oe,
  Qd as se,
  Qrt as ce,
  Qu as le,
  Rf as ue,
  Rpn as de,
  Ru as fe,
  S9 as pe,
  Sf as me,
  Spn as he,
  Uf as ge,
  VS as _e,
  Vqt as ve,
  Vu as ye,
  WKt as be,
  Wct as xe,
  Wf as Se,
  XS as Ce,
  Xct as we,
  Xd as Te,
  Xdt as Ee,
  Xrt as De,
  Xu as Oe,
  YKt as ke,
  Yd as Ae,
  Yf as je,
  Yrt as Me,
  Yut as Ne,
  ZKt as Pe,
  Zd as Fe,
  Zf as Ie,
  Zrt as Le,
  Zu as Re,
  _pn as ze,
  a3t as Be,
  aYt as Ve,
  ad as He,
  af as Ue,
  ayt as We,
  cd as Ge,
  cf as Ke,
  cs as qe,
  dEt as Je,
  dd as Ye,
  df as Xe,
  dyt as Ze,
  e0t as Qe,
  e4t as K,
  eZt as $e,
  eit as et,
  f5t as tt,
  fd as nt,
  ff as rt,
  gd as it,
  gf as at,
  gpn as ot,
  hEt as st,
  hd as ct,
  hf as lt,
  hmn as ut,
  id as dt,
  iit as ft,
  jMt as pt,
  kMt as mt,
  kmn as ht,
  lf as gt,
  ls as _t,
  md as vt,
  mf as yt,
  nH as bt,
  nV as xt,
  nit as St,
  o3t as Ct,
  od as wt,
  olt as Tt,
  p5t as Et,
  pd as Dt,
  qKt as Ot,
  qd as kt,
  qqt as At,
  qu as q,
  rTt as jt,
  rV as Mt,
  rf as Nt,
  rit as Pt,
  sYt as Ft,
  sd as It,
  snn as Lt,
  tH as Rt,
  tit as zt,
  ud as Bt,
  vf as Vt,
  vit as Ht,
  xpn as Ut,
  y9 as Wt,
  yf as Gt,
  yit as Kt,
  zf as qt,
  zpn as Jt,
} from "./app-initial-f094ef01c64d.js";
import { r as Yt, t as Xt } from "./hooks-settings-route-dc9cfc2985b4.js";
import {
  n as Zt,
  o as Qt,
  r as $t,
  t as en,
} from "./use-external-agent-import-setup-actions-b950217bf4da.js";
import { n as tn, r as nn, t as rn } from "./setup-e2fbeaf3d961.js";
import { n as an, t as on } from "./settings-loading-row-de4ab81779d6.js";
import { n as sn, t as cn } from "./settings-row-disclosure-d65042756aaf.js";
function ln(e) {
  let t = (0, fn.c)(45),
    { isImportContextLoading: n, latestSuccessfulImportAtMs: r, workspaceRoots: a } = e,
    o = i(Be),
    s = W(),
    c = g(L),
    l = Ft(at),
    u;
  t[0] === l ? (u = t[1]) : ((u = Vt(l)), (t[0] = l), (t[1] = u));
  let d = u,
    f = lt(),
    p;
  t[2] !== d || t[3] !== f || t[4] !== a
    ? ((p = { enabled: !0, hostId: K, providers: d, sessionLimits: f, workspaceRoots: a }),
      (t[2] = d),
      (t[3] = f),
      (t[4] = a),
      (t[5] = p))
    : (p = t[5]);
  let {
      detectedItems: h,
      isDetecting: _,
      isDetectionError: v,
      refetchDetectedItems: b,
      unsupportedProjects: x,
    } = Ye(p),
    S,
    C,
    w,
    T,
    E,
    O,
    k;
  if (
    t[6] !== h ||
    t[7] !== s ||
    t[8] !== _ ||
    t[9] !== v ||
    t[10] !== n ||
    t[11] !== r ||
    t[12] !== b ||
    t[13] !== c ||
    t[14] !== o ||
    t[15] !== f ||
    t[16] !== x
  ) {
    let e = It(h),
      i = c?.hostId === K,
      a = i && c != null ? wt({ detectedItems: c.items, intl: s, providerIds: It(c.items) }) : null;
    T = _ || n;
    let l = (t, n) => {
        let r = wt({ detectedItems: h, intl: s, providerIds: [t] });
        r != null &&
          ($e(o, ne, { source: `settings`, action: `shown`, ...He(r, dt(r), e) }),
          y(o, {
            hostId: K,
            items: h,
            preselectedProviderIds: [t],
            restoreFocus: n,
            sessionLimits: f,
            source: `settings`,
          }));
      },
      u;
    t[24] === b
      ? (u = t[25])
      : ((u = () => {
          b();
        }),
        (t[24] = b),
        (t[25] = u));
    let d = u;
    ((w = Re), (O = D));
    let p;
    t[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = (0, J.jsx)(m, {
          id: `settings.agent.importSettings.sectionTitle.v2`,
          defaultMessage: `Import from another AI app`,
          description: `Settings section heading for importing configuration, projects, and chat history from a different AI coding app`,
        })),
        (t[26] = p))
      : (p = t[26]);
    let g =
      e.length === 0
        ? null
        : (0, J.jsx)(m, {
            id: `settings.agent.importSettings.sectionDescription`,
            defaultMessage: `Detected setup that can be added to {appName}`,
            description: `Description for the detected external agent apps that can be imported`,
            values: { appName: be },
          });
    (t[27] === g
      ? (k = t[28])
      : ((k = (0, J.jsx)(Re.Header, { title: p, subtitle: g })), (t[27] = g), (t[28] = k)),
      (C = Re.Content),
      (S = ye),
      (E = i
        ? (0, J.jsx)(q, {
            label: (0, J.jsx)(m, {
              id: `settings.agent.importSettings.importingLabel`,
              defaultMessage: `Import in progress`,
              description: `Settings row label shown while an external agent import is running`,
            }),
            description:
              a == null ? null : (0, J.jsx)(ze, { type: `unit`, value: a.customizeItems.map(dn) }),
            control: (0, J.jsx)(pt, { className: `icon-xs` }),
          })
        : T
          ? (0, J.jsx)(q, {
              label: (0, J.jsx)(m, {
                id: `settings.agent.importSettings.loadingLabel.v2`,
                defaultMessage: `Checking for imports`,
                description: `Label shown while external agent setup is loading`,
              }),
              description: (0, J.jsx)(m, {
                id: `settings.agent.importSettings.detectingDescription.v2`,
                defaultMessage: `Looking for compatible setup, projects, and recent chats`,
                description: `Description shown while checking for external agent setup`,
              }),
              control: (0, J.jsx)(pt, { className: `icon-xs` }),
            })
          : v
            ? (0, J.jsx)(q, {
                label: (0, J.jsx)(m, {
                  id: `settings.import.error.label`,
                  defaultMessage: `Couldn't check for imports`,
                  description: `Settings row label shown when external agent setup detection fails`,
                }),
                description: (0, J.jsx)(m, {
                  id: `settings.import.error.description`,
                  defaultMessage: `Try again to look for compatible setup, projects, and recent chats`,
                  description: `Settings row description shown when external agent setup detection fails`,
                }),
                control: (0, J.jsx)(mt, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: d,
                  children: (0, J.jsx)(m, {
                    id: `settings.import.error.retry`,
                    defaultMessage: `Retry`,
                    description: `Button label to retry external agent setup detection`,
                  }),
                }),
              })
            : e.length === 0 && x.length === 0 && r == null
              ? (0, J.jsx)(q, {
                  label: (0, J.jsx)(m, {
                    id: `settings.import.empty.label`,
                    defaultMessage: `Import from other AI apps`,
                    description: `Settings row label shown when no external agent setup can currently be imported`,
                  }),
                  description: (0, J.jsx)(m, {
                    id: `settings.import.empty.description`,
                    defaultMessage: `No importable setup found`,
                    description: `Settings row description shown when no external agent setup can currently be imported`,
                  }),
                  control: (0, J.jsx)(mt, {
                    color: `secondary`,
                    size: `toolbar`,
                    disabled: !0,
                    children: (0, J.jsx)(m, {
                      id: `settings.import.empty.button`,
                      defaultMessage: `Import`,
                      description: `Disabled import button shown when no external agent setup can currently be imported`,
                    }),
                  }),
                })
              : e.length === 0 && x.length === 0
                ? (0, J.jsx)(q, {
                    label: (0, J.jsx)(m, {
                      id: `settings.import.empty.noNewItems`,
                      defaultMessage: `No new items found`,
                      description: `Settings row label shown when a previous import exists and no additional external agent setup is available`,
                    }),
                    description:
                      r == null
                        ? null
                        : (0, J.jsx)(m, {
                            id: `settings.import.empty.lastImported`,
                            defaultMessage: `Last imported {relativeTime} ago`,
                            description: `Description showing when another local agent setup was last imported`,
                            values: {
                              relativeTime: (0, J.jsx)(
                                Nt,
                                { dateString: new Date(r).toISOString() },
                                `last-imported-at`,
                              ),
                            },
                          }),
                    control: (0, J.jsx)(mt, {
                      color: `secondary`,
                      size: `toolbar`,
                      onClick: d,
                      children: (0, J.jsx)(m, {
                        id: `settings.import.empty.checkAgain`,
                        defaultMessage: `Check again`,
                        description: `Button label to check again for importable external agent setup`,
                      }),
                    }),
                  })
                : e.map((e) => {
                    let t = pn[e],
                      n = je(s, e);
                    return (0, J.jsx)(
                      q,
                      {
                        icon: (0, J.jsx)(`div`, {
                          "aria-hidden": !0,
                          className: de(
                            `flex size-10 shrink-0 items-center justify-center rounded-xl`,
                            e === `cursor` ? `text-default` : `bg-chart-orange text-inverse`,
                          ),
                          children: (0, J.jsx)(t, { className: `size-10` }),
                        }),
                        label: n,
                        control: (0, J.jsx)(mt, {
                          "aria-label": s.formatMessage(
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
                            l(e, () => n.focus());
                          },
                          children: (0, J.jsx)(m, {
                            id: `settings.agent.importSettings.importProvider`,
                            defaultMessage: `Import`,
                            description: `Button label to review and import setup from a detected external agent app`,
                          }),
                        }),
                      },
                      e,
                    );
                  })),
      (t[6] = h),
      (t[7] = s),
      (t[8] = _),
      (t[9] = v),
      (t[10] = n),
      (t[11] = r),
      (t[12] = b),
      (t[13] = c),
      (t[14] = o),
      (t[15] = f),
      (t[16] = x),
      (t[17] = S),
      (t[18] = C),
      (t[19] = w),
      (t[20] = T),
      (t[21] = E),
      (t[22] = O),
      (t[23] = k));
  } else
    ((S = t[17]), (C = t[18]), (w = t[19]), (T = t[20]), (E = t[21]), (O = t[22]), (k = t[23]));
  let A;
  t[29] !== T || t[30] !== v || t[31] !== x
    ? ((A =
        !T && !v && x.length > 0
          ? (0, J.jsx)(q, {
              icon: (0, J.jsx)(te, { className: `icon-2xs shrink-0 text-warning` }),
              label: (0, J.jsx)(m, {
                id: `settings.import.unsupportedProjects.label`,
                defaultMessage: `{count, plural, one {# project can't be imported} other {# projects can't be imported}}`,
                description: `Settings row label shown when detected external agent projects cannot be imported`,
                values: { count: x.length },
              }),
              description: (0, J.jsx)(m, {
                id: `settings.import.unsupportedProjects.description`,
                defaultMessage: `{projects} {count, plural, one {uses} other {use}} an unsupported project configuration`,
                description: `Settings row description listing detected external agent projects that cannot be imported`,
                values: {
                  count: x.length,
                  projects: (0, J.jsx)(
                    ze,
                    { type: `conjunction`, value: x.map(un) },
                    `unsupported-projects`,
                  ),
                },
              }),
              control: null,
            })
          : null),
      (t[29] = T),
      (t[30] = v),
      (t[31] = x),
      (t[32] = A))
    : (A = t[32]);
  let j;
  t[33] !== S || t[34] !== E || t[35] !== A
    ? ((j = (0, J.jsxs)(S, { children: [E, A] })),
      (t[33] = S),
      (t[34] = E),
      (t[35] = A),
      (t[36] = j))
    : (j = t[36]);
  let M;
  t[37] !== C || t[38] !== j
    ? ((M = (0, J.jsx)(C, { children: j })), (t[37] = C), (t[38] = j), (t[39] = M))
    : (M = t[39]);
  let N;
  return (
    t[40] !== w || t[41] !== O || t[42] !== k || t[43] !== M
      ? ((N = (0, J.jsxs)(w, { id: O, children: [k, M] })),
        (t[40] = w),
        (t[41] = O),
        (t[42] = k),
        (t[43] = M),
        (t[44] = N))
      : (N = t[44]),
    N
  );
}
function un(e) {
  return e.name;
}
function dn(e) {
  return e.title;
}
var fn,
  J,
  pn,
  mn = e(() => {
    ((fn = ht()),
      Qe(),
      Jt(),
      U(),
      he(),
      x(),
      o(),
      Ue(),
      z(),
      re(),
      S(),
      fe(),
      Ie(),
      Gt(),
      yt(),
      Bt(),
      se(),
      Te(),
      A(),
      _(),
      Ge(),
      oe(),
      Ct(),
      le(),
      Oe(),
      w(),
      F(),
      Ve(),
      (J = ut()),
      (pn = { "claude-code": Fe, "claude-cowork": Ae, cursor: kt }));
  });
function hn(e) {
  let t = (0, yn.c)(20),
    { category: n, history: r } = e,
    i = k(),
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
            ? (0, Y.jsx)(gn, { status: `success`, target: e.target }, `success-${t}`)
            : (0, Y.jsx)(
                _n,
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
            ? (0, Y.jsx)(gn, { failureMessage: e.message, status: `error` }, `failure-${t}`)
            : (0, Y.jsx)(
                _n,
                {
                  itemType: n.itemType,
                  failureMessage: e.message,
                  label: e.source,
                  status: `error`,
                },
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
          ? (0, Y.jsx)(q, {
              variant: `nested`,
              label: (0, Y.jsx)(m, {
                id: `settings.import.history.details.reviewHooks`,
                defaultMessage: `Manage imported hooks`,
                description: `Label for the inline action to manage imported hooks`,
              }),
              control: (0, Y.jsx)(mt, {
                color: `ghost`,
                onClick: () => {
                  i(Xt({ hostId: K }));
                },
                children: (0, Y.jsx)(m, {
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
function gn(e) {
  let t = (0, yn.c)(19),
    n = W(),
    r = k(),
    i;
  t[0] !== e.status || t[1] !== e.target
    ? ((i = e.status === `success` && e.target != null ? Lt(e.target) : null),
      (t[0] = e.status),
      (t[1] = e.target),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] === a
    ? (o = t[4])
    : ((o = a == null ? null : { hostId: K, threadId: a }), (t[3] = a), (t[4] = o));
  let s = H(st, o),
    c = H(Je, a),
    l = s ?? c?.title,
    u;
  t[5] === e.status
    ? (u = t[6])
    : ((u =
        e.status === `error`
          ? (0, Y.jsx)(te, { className: `icon-2xs shrink-0 text-danger` })
          : null),
      (t[5] = e.status),
      (t[6] = u));
  let d;
  t[7] === l
    ? (d = t[8])
    : ((d =
        l ??
        (0, Y.jsx)(m, {
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
          : (0, Y.jsx)(mt, {
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
                r(tt(a));
              },
              children: (0, Y.jsx)(m, {
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
  let h;
  return (
    t[14] !== u || t[15] !== d || t[16] !== f || t[17] !== p
      ? ((h = (0, Y.jsx)(q, { variant: `nested`, icon: u, label: d, description: f, control: p })),
        (t[14] = u),
        (t[15] = d),
        (t[16] = f),
        (t[17] = p),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
function _n(e) {
  let t = (0, yn.c)(21),
    n = W(),
    r = k(),
    i = null;
  if (e.status === `error`) i = e.failureMessage;
  else if (e.target == null) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(m, {
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
    ? ((a = e.status === `success` && e.label != null ? vn(e.itemType, e.label, e.target) : null),
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
        (0, Y.jsx)(m, {
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
          ? (0, Y.jsx)(te, { className: `icon-2xs shrink-0 text-danger` })
          : null),
      (t[8] = e.status),
      (t[9] = l));
  let u;
  t[10] !== n || t[11] !== r || t[12] !== o || t[13] !== e.itemType || t[14] !== e.label
    ? ((u =
        o == null
          ? null
          : (0, Y.jsx)(mt, {
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
                      ? { initialHostId: K, initialTab: `skills` }
                      : void 0,
                });
              },
              children:
                e.itemType === `SKILLS` || e.itemType === `COMMANDS`
                  ? (0, Y.jsx)(m, {
                      id: `settings.import.history.details.openInSkills`,
                      defaultMessage: `Open in Skills`,
                      description: `Button label to open an imported skill or converted command in Skills`,
                    })
                  : e.itemType === `MCP_SERVER_CONFIG`
                    ? (0, Y.jsx)(m, {
                        id: `settings.import.history.details.openMcpSettings`,
                        defaultMessage: `Open MCP settings`,
                        description: `Button label to open an imported MCP server in settings`,
                      })
                    : (0, Y.jsx)(m, {
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
      ? ((d = (0, Y.jsx)(q, { variant: `nested`, icon: l, label: c, description: i, control: u })),
        (t[16] = i),
        (t[17] = c),
        (t[18] = l),
        (t[19] = u),
        (t[20] = d))
      : (d = t[20]),
    d
  );
}
function vn(e, t, n) {
  return e === `SKILLS` || e === `COMMANDS` || e === `MCP_SERVER_CONFIG`
    ? `${e === `MCP_SERVER_CONFIG` ? `/settings/mcp-settings` : `/skills`}?search=${encodeURIComponent(n ?? t)}`
    : e === `PLUGINS`
      ? Et({ hostId: K, pluginId: n ?? t })
      : null;
}
var yn,
  Y,
  bn = e(() => {
    ((yn = ht()), U(), u(), he(), T(), jt(), o(), _(), Yt(), Oe(), F(), (Y = ut()));
  });
function xn(e) {
  let t = (0, Nn.c)(6),
    { defaultExpanded: n, entry: r, mcpServerStatuses: i } = e,
    a = n !== void 0 && n;
  if (r.kind === `running`) {
    let e;
    return (
      t[0] === r.runningImport
        ? (e = t[1])
        : ((e = (0, X.jsx)(Sn, { runningImport: r.runningImport })),
          (t[0] = r.runningImport),
          (t[1] = e)),
      e
    );
  }
  let o;
  return (
    t[2] !== a || t[3] !== r.history || t[4] !== i
      ? ((o = (0, X.jsx)(Cn, { defaultExpanded: a, history: r.history, mcpServerStatuses: i })),
        (t[2] = a),
        (t[3] = r.history),
        (t[4] = i),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function Sn(e) {
  let t = (0, Nn.c)(6),
    { runningImport: n } = e,
    r = W(),
    i;
  if (t[0] !== r || t[1] !== n.items) {
    let e = R(n.items),
      a;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, X.jsx)(q, {
          label: (0, X.jsx)(m, {
            id: `settings.import.history.running`,
            defaultMessage: `Importing now`,
            description: `Header for an import history entry while its results are pending`,
          }),
          control: (0, X.jsx)(pt, { className: `icon-xs shrink-0 text-secondary` }),
        })),
        (t[3] = a))
      : (a = t[3]);
    let o;
    (t[4] === r
      ? (o = t[5])
      : ((o = (e) =>
          (0, X.jsx)(
            q,
            {
              variant: `nested`,
              label: j(r, e),
              control: (0, X.jsx)(`span`, {
                className: `text-xs text-secondary`,
                children: (0, X.jsx)(m, {
                  id: `settings.import.history.runningBadge`,
                  defaultMessage: `Importing`,
                  description: `Status for an import history category while its results are pending`,
                }),
              }),
            },
            e,
          )),
        (t[4] = r),
        (t[5] = o)),
      (i = (0, X.jsxs)(ye, { children: [a, e.map(o)] })),
      (t[0] = r),
      (t[1] = n.items),
      (t[2] = i));
  } else i = t[2];
  return i;
}
function Cn(e) {
  let t = (0, Nn.c)(39),
    { defaultExpanded: n, history: r, mcpServerStatuses: i } = e,
    a = v(r),
    o = a.reduce(Dn, 0),
    s = a.reduce(En, 0),
    c;
  t[0] !== r || t[1] !== i
    ? ((c = ue({ histories: [r], mcpServerStatuses: i })), (t[0] = r), (t[1] = i), (t[2] = c))
    : (c = t[2]);
  let l = c.length,
    u;
  t[3] === r.successes
    ? (u = t[4])
    : ((u = r.successes.filter(Tn)), (t[3] = r.successes), (t[4] = u));
  let d = l + u.length,
    [f, p] = (0, Pn.useState)(n),
    [h, g] = (0, Pn.useState)(null),
    _ = `import-history-${r.importId}`,
    y;
  y =
    s > 0 && d > 0
      ? (0, X.jsx)(m, {
          id: `settings.import.history.summaryWithFailuresAndWarnings`,
          defaultMessage: `{importedCount} imported · {failedCount} did not import · {warningCount} need review`,
          description: `Summary of imported, failed, and review-required items for a completed import`,
          values: { importedCount: o, failedCount: s, warningCount: d },
        })
      : s > 0
        ? (0, X.jsx)(m, {
            id: `settings.import.history.summaryWithFailures`,
            defaultMessage: `{importedCount} imported · {failedCount} did not import`,
            description: `Summary of imported and failed items for a completed import`,
            values: { importedCount: o, failedCount: s },
          })
        : d > 0
          ? (0, X.jsx)(m, {
              id: `settings.import.history.summaryWithWarnings`,
              defaultMessage: `{importedCount} imported · {warningCount} need review`,
              description: `Summary of imported and review-required items for a completed import`,
              values: { importedCount: o, warningCount: d },
            })
          : (0, X.jsx)(m, {
              id: `settings.import.history.summary`,
              defaultMessage: `{importedCount} imported`,
              description: `Summary of imported items for a completed import`,
              values: { importedCount: o },
            });
  let b = ye,
    x = cn,
    S =
      a.length === 0
        ? (0, X.jsx)(q, {
            variant: `nested`,
            label: (0, X.jsx)(m, {
              id: `settings.import.history.noResults`,
              defaultMessage: `No results recorded`,
              description: `Label shown when an import history entry has no category results`,
            }),
            control: null,
          })
        : a.map((e) => {
            let t = `${_}-${e.itemType}`,
              n = h === e.itemType;
            return (0, X.jsx)(
              cn,
              {
                content: (0, X.jsx)(hn, { category: e, history: r }),
                contentId: t,
                expanded: n,
                children: (0, X.jsx)(An, {
                  category: e,
                  contentId: t,
                  expanded: n,
                  history: r,
                  mcpServerStatuses: i,
                  onToggleExpanded: () => {
                    g(n ? null : e.itemType);
                  },
                }),
              },
              e.itemType,
            );
          }),
    C;
  t[5] === r.providerId
    ? (C = t[6])
    : ((C = (0, X.jsx)(On, { providerId: r.providerId })), (t[5] = r.providerId), (t[6] = C));
  let w = Number(r.completedAtMs),
    T;
  t[7] === w
    ? (T = t[8])
    : ((T = (0, X.jsx)(ot, { value: w, dateStyle: `medium`, timeStyle: `short` })),
      (t[7] = w),
      (t[8] = T));
  let E;
  t[9] === y ? (E = t[10]) : ((E = (0, X.jsx)(`span`, { children: y })), (t[9] = y), (t[10] = E));
  let D;
  t[11] !== T || t[12] !== E
    ? ((D = (0, X.jsxs)(`span`, {
        className: `flex flex-wrap items-center gap-x-2`,
        children: [T, E],
      })),
      (t[11] = T),
      (t[12] = E),
      (t[13] = D))
    : (D = t[13]);
  let O;
  t[14] === r.providerId
    ? (O = t[15])
    : ((O = (0, X.jsx)(kn, { providerId: r.providerId })), (t[14] = r.providerId), (t[15] = O));
  let k = f && `rotate-180`,
    A;
  t[16] === k
    ? (A = t[17])
    : ((A = de(`icon-2xs text-tertiary transition-transform`, k)), (t[16] = k), (t[17] = A));
  let j;
  t[18] === A
    ? (j = t[19])
    : ((j = (0, X.jsx)(Ht, { "aria-hidden": !0, className: A })), (t[18] = A), (t[19] = j));
  let M;
  t[20] === p
    ? (M = t[21])
    : ((M = () => {
        p(wn);
      }),
      (t[20] = p),
      (t[21] = M));
  let N;
  t[22] !== _ ||
  t[23] !== f ||
  t[24] !== O ||
  t[25] !== j ||
  t[26] !== M ||
  t[27] !== C ||
  t[28] !== D
    ? ((N = (0, X.jsx)(Mn, {
        contentId: _,
        expanded: f,
        label: C,
        description: D,
        icon: O,
        control: j,
        onClick: M,
      })),
      (t[22] = _),
      (t[23] = f),
      (t[24] = O),
      (t[25] = j),
      (t[26] = M),
      (t[27] = C),
      (t[28] = D),
      (t[29] = N))
    : (N = t[29]);
  let P;
  t[30] !== x || t[31] !== _ || t[32] !== f || t[33] !== N || t[34] !== S
    ? ((P = (0, X.jsx)(x, { contentId: _, expanded: f, content: S, children: N })),
      (t[30] = x),
      (t[31] = _),
      (t[32] = f),
      (t[33] = N),
      (t[34] = S),
      (t[35] = P))
    : (P = t[35]);
  let F;
  return (
    t[36] !== b || t[37] !== P
      ? ((F = (0, X.jsx)(b, { children: P })), (t[36] = b), (t[37] = P), (t[38] = F))
      : (F = t[38]),
    F
  );
}
function wn(e) {
  return !e;
}
function Tn(e) {
  return e.itemType === `HOOKS`;
}
function En(e, t) {
  return e + t.failedCount;
}
function Dn(e, t) {
  return e + t.importedCount;
}
function On(e) {
  let t = (0, Nn.c)(6),
    { providerId: n } = e,
    r = W();
  switch (n) {
    case `claude-code`:
    case `claude-cowork`:
    case `cursor`: {
      let e;
      t[0] !== r || t[1] !== n ? ((e = je(r, n)), (t[0] = r), (t[1] = n), (t[2] = e)) : (e = t[2]);
      let i;
      return (
        t[3] === e
          ? (i = t[4])
          : ((i = (0, X.jsx)(m, {
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
          ? ((e = (0, X.jsx)(m, {
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
function kn(e) {
  let t = (0, Nn.c)(4),
    { providerId: n } = e;
  switch (n) {
    case `claude-code`:
    case `claude-cowork`: {
      let e = n === `claude-code` ? Fe : Ae,
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
              children: (0, X.jsx)(kt, { className: `size-10` }),
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
              children: (0, X.jsx)(Rt, { className: `icon-sm` }),
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
}
function An(e) {
  let t = (0, Nn.c)(28),
    {
      category: n,
      contentId: r,
      expanded: i,
      history: a,
      mcpServerStatuses: o,
      onToggleExpanded: s,
    } = e,
    c = W(),
    l;
  t[0] !== n.itemType || t[1] !== a || t[2] !== o
    ? ((l =
        n.itemType === `MCP_SERVER_CONFIG`
          ? ue({ histories: [a], mcpServerStatuses: o }).length
          : 0),
      (t[0] = n.itemType),
      (t[1] = a),
      (t[2] = o),
      (t[3] = l))
    : (l = t[3]);
  let u = l,
    d;
  t[4] !== n.itemType || t[5] !== c
    ? ((d = j(c, n.itemType)), (t[4] = n.itemType), (t[5] = c), (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] !== u || t[8] !== n.importedCount || t[9] !== n.itemType
    ? ((f =
        n.itemType === `COMMANDS`
          ? (0, X.jsx)(m, {
              id: `settings.import.history.destination.commands`,
              defaultMessage: `Converted into Codex skills`,
              description: `Destination label for imported commands`,
            })
          : n.itemType === `HOOKS` && n.importedCount > 0
            ? (0, X.jsx)(m, {
                id: `settings.import.history.manageHooks`,
                defaultMessage: `Manage imported hooks in Hooks settings`,
                description: `Description for opening imported hooks in Hooks settings`,
              })
            : u > 0
              ? (0, X.jsx)(m, {
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
    ? ((p = (0, X.jsx)(jn, { authRequiredCount: u, category: n })),
      (t[11] = u),
      (t[12] = n),
      (t[13] = p))
    : (p = t[13]);
  let h = i && `rotate-90`,
    g;
  t[14] === h
    ? (g = t[15])
    : ((g = de(`icon-2xs shrink-0 text-tertiary transition-transform`, h)),
      (t[14] = h),
      (t[15] = g));
  let _;
  t[16] === g ? (_ = t[17]) : ((_ = (0, X.jsx)(b, { className: g })), (t[16] = g), (t[17] = _));
  let v;
  t[18] !== p || t[19] !== _
    ? ((v = (0, X.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-3 whitespace-nowrap`,
        children: [p, _],
      })),
      (t[18] = p),
      (t[19] = _),
      (t[20] = v))
    : (v = t[20]);
  let y;
  return (
    t[21] !== r || t[22] !== i || t[23] !== s || t[24] !== d || t[25] !== f || t[26] !== v
      ? ((y = (0, X.jsx)(Mn, {
          contentId: r,
          expanded: i,
          variant: `nested`,
          label: d,
          description: f,
          control: v,
          onClick: s,
        })),
        (t[21] = r),
        (t[22] = i),
        (t[23] = s),
        (t[24] = d),
        (t[25] = f),
        (t[26] = v),
        (t[27] = y))
      : (y = t[27]),
    y
  );
}
function jn(e) {
  let t = (0, Nn.c)(11),
    { authRequiredCount: n, category: r } = e;
  if (r.failedCount > 0) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(`span`, { className: `size-2 shrink-0 rounded-full bg-chart-red` })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    return (
      t[1] !== r.failedCount || t[2] !== r.importedCount
        ? ((n = (0, X.jsxs)(`span`, {
            className: `inline-flex items-center gap-2 rounded-lg bg-chart-red/10 px-2 py-1 text-xs font-medium text-chart-red`,
            children: [
              e,
              (0, X.jsx)(m, {
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
      ? ((e = (0, X.jsx)(`span`, { className: `size-2 shrink-0 rounded-full bg-text-warning` })),
        (t[4] = e))
      : (e = t[4]);
    let i;
    return (
      t[5] !== n || t[6] !== r.importedCount
        ? ((i = (0, X.jsxs)(`span`, {
            className: `inline-flex items-center gap-2 rounded-lg px-2 py-1 text-xs font-medium text-warning`,
            children: [
              e,
              n > 0
                ? (0, X.jsx)(m, {
                    id: `settings.import.history.categorySummaryWithAuthentication`,
                    defaultMessage: `{importedCount} imported · {authRequiredCount, plural, one {# needs authentication} other {# need authentication}}`,
                    description: `Summary of imported MCP servers and how many still require authentication`,
                    values: { authRequiredCount: n, importedCount: r.importedCount },
                  })
                : (0, X.jsx)(m, {
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
    ? ((i = (0, X.jsx)(`span`, { className: `size-2 shrink-0 rounded-full bg-chart-green` })),
      (t[8] = i))
    : (i = t[8]);
  let a;
  return (
    t[9] === r.importedCount
      ? (a = t[10])
      : ((a = (0, X.jsxs)(`span`, {
          className: `inline-flex items-center gap-2 text-xs font-medium text-default`,
          children: [
            i,
            (0, X.jsx)(m, {
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
function Mn(e) {
  let t = (0, Nn.c)(11),
    {
      contentId: n,
      control: r,
      description: i,
      expanded: a,
      icon: o,
      label: s,
      onClick: c,
      variant: l,
    } = e,
    u;
  t[0] !== r || t[1] !== i || t[2] !== o || t[3] !== s || t[4] !== l
    ? ((u = (0, X.jsx)(q, { variant: l, label: s, description: i, icon: o, control: r })),
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
var Nn,
  Pn,
  X,
  Fn = e(() => {
    ((Nn = ht()),
      Jt(),
      (Pn = t(c(), 1)),
      he(),
      z(),
      S(),
      Ie(),
      P(),
      Kt(),
      se(),
      Te(),
      A(),
      bt(),
      Oe(),
      sn(),
      w(),
      bn(),
      (X = ut()));
  }),
  In,
  Ln,
  Rn,
  zn = e(() => {
    (he(),
      (In = Ut({
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
      (Ln = Ut({
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
      (Rn = Ut({
        content: {
          id: `settings.import.autosync.content`,
          defaultMessage: `Content to sync`,
          description: `Label and dialog title for selecting categories to import during automatic sync`,
        },
      })));
  });
function Bn(e) {
  let t = (0, Vn.c)(68),
    { itemTypes: n, initialPreferences: r, isSaving: i, syncState: a, onCancel: o, onSave: s } = e,
    c = (0, Hn.useId)(),
    [l, u] = (0, Hn.useState)(r),
    [d, f] = (0, Hn.useState)(!1),
    [p, h] = (0, Hn.useState)(!1),
    g = p ? nt : n,
    _ = l === `all` ? g : n,
    v;
  t[0] !== l || t[1] !== a || t[2] !== _
    ? ((v = vt({ preferences: l, syncState: a, itemTypes: _ })),
      (t[0] = l),
      (t[1] = a),
      (t[2] = _),
      (t[3] = v))
    : (v = t[3]);
  let y = v,
    b;
  t[4] !== n || t[5] !== l || t[6] !== a
    ? ((b = nt.some((e) => ct({ preferences: l, syncState: a, itemType: e, itemTypes: n }) !== !1)),
      (t[4] = n),
      (t[5] = l),
      (t[6] = a),
      (t[7] = b))
    : (b = t[7]);
  let x = b,
    S;
  t[8] !== x || t[9] !== i || t[10] !== s || t[11] !== l
    ? ((S = (e) => {
        (e.preventDefault(),
          !(!x || i) &&
            (f(!1),
            s(l).catch(() => {
              f(!0);
            })));
      }),
      (t[8] = x),
      (t[9] = i),
      (t[10] = s),
      (t[11] = l),
      (t[12] = S))
    : (S = t[12]);
  let C;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(Pt, { children: (0, Z.jsx)(m, { ...Rn.content }) })), (t[13] = C))
    : (C = t[13]);
  let w;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(Le, {
        className: `shrink-0`,
        children: (0, Z.jsx)(De, {
          title: C,
          subtitle: (0, Z.jsx)(St, {
            children: (0, Z.jsx)(m, {
              id: `settings.import.autosync.customizeDescription`,
              defaultMessage: `Applies to all connected sources and projects`,
              description: `Explains that changing an automatic import category applies to all connected import sources and project-level content`,
            }),
          }),
        }),
      })),
      (t[14] = w))
    : (w = t[14]);
  let T;
  if (
    t[15] !== y ||
    t[16] !== c ||
    t[17] !== i ||
    t[18] !== n ||
    t[19] !== l ||
    t[20] !== a ||
    t[21] !== g
  ) {
    let e;
    (t[23] !== y || t[24] !== c || t[25] !== i || t[26] !== n || t[27] !== l || t[28] !== a
      ? ((e = (e) => {
          let t = e === `CONFIG` && !a?.providerIds.includes(`claude-cowork`) ? void 0 : Ln[e],
            r = `${c}-${e}`;
          return (0, Z.jsx)(
            `label`,
            {
              className: i ? void 0 : `cursor-interaction`,
              htmlFor: r,
              children: (0, Z.jsx)(q, {
                control: (t) =>
                  (0, Z.jsx)(`div`, {
                    className: `relative`,
                    children: (0, Z.jsx)(xt, {
                      id: r,
                      ...t,
                      checked: ct({ preferences: l, syncState: a, itemType: e, itemTypes: n }),
                      disabled: i,
                      onCheckedChange: (t) => {
                        (u({ ...y, [e]: t }), f(!1));
                      },
                    }),
                  }),
                description: t == null ? void 0 : (0, Z.jsx)(m, { ...t }),
                icon: Un[e],
                label: (0, Z.jsx)(m, { ...In[e] }),
              }),
            },
            e,
          );
        }),
        (t[23] = y),
        (t[24] = c),
        (t[25] = i),
        (t[26] = n),
        (t[27] = l),
        (t[28] = a),
        (t[29] = e))
      : (e = t[29]),
      (T = g.map(e)),
      (t[15] = y),
      (t[16] = c),
      (t[17] = i),
      (t[18] = n),
      (t[19] = l),
      (t[20] = a),
      (t[21] = g),
      (t[22] = T));
  } else T = t[22];
  let E;
  t[30] === T
    ? (E = t[31])
    : ((E = (0, Z.jsx)(Le, {
        className: `min-h-0 overflow-y-auto`,
        children: (0, Z.jsx)(ye, { children: T }),
      })),
      (t[30] = T),
      (t[31] = E));
  let D, O;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Z.jsx)(m, {
        id: `settings.import.autosync.allCategories`,
        defaultMessage: `Sync all categories`,
        description: `Toggle to sync every import category from connected sources, including categories detected later`,
      })),
      (D = (0, Z.jsx)(m, {
        id: `settings.import.autosync.allCategoriesDescription`,
        defaultMessage: `Include categories found in the future`,
        description: `Explains that syncing all categories automatically includes categories absent from the original import`,
      })),
      (t[32] = D),
      (t[33] = O))
    : ((D = t[32]), (O = t[33]));
  let k;
  t[34] !== y || t[35] !== i || t[36] !== l
    ? ((k = (0, Z.jsx)(q, {
        label: O,
        description: D,
        control: (e) =>
          (0, Z.jsx)(ie, {
            ...e,
            checked: l === `all`,
            disabled: i,
            onChange: (e) => {
              (u(e ? `all` : y), f(!1));
            },
          }),
      })),
      (t[34] = y),
      (t[35] = i),
      (t[36] = l),
      (t[37] = k))
    : (k = t[37]);
  let A;
  t[38] !== i || t[39] !== n.length || t[40] !== p
    ? ((A =
        n.length < nt.length
          ? (0, Z.jsx)(q, {
              label: (0, Z.jsx)(m, {
                id: `settings.import.autosync.showAllCategories`,
                defaultMessage: `Show all categories`,
                description: `Toggle to also show automatic import categories not found in connected sources so they can be configured in advance`,
              }),
              description: (0, Z.jsx)(m, {
                id: `settings.import.autosync.showAllCategoriesDescription`,
                defaultMessage: `Choose what to sync when new categories become available`,
                description: `Explains that showing all import categories lets users choose in advance which categories to sync when their connected source apps have that content`,
              }),
              control: (e) => (0, Z.jsx)(ie, { ...e, checked: p, disabled: i, onChange: h }),
            })
          : null),
      (t[38] = i),
      (t[39] = n.length),
      (t[40] = p),
      (t[41] = A))
    : (A = t[41]);
  let j;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Z.jsx)(`p`, {
        className: `text-sm leading-4 text-secondary`,
        children: (0, Z.jsx)(m, {
          id: `settings.import.autosync.futureSyncs.v2`,
          defaultMessage: `Changes apply to future syncs. Content already imported stays in {appName}`,
          description: `Explains that changing automatic import preferences does not remove content already imported into the named app`,
          values: { appName: be },
        }),
      })),
      (t[42] = j))
    : (j = t[42]);
  let M;
  t[43] === x
    ? (M = t[44])
    : ((M = x
        ? null
        : (0, Z.jsx)(`p`, {
            className: `text-sm leading-4 text-secondary`,
            role: `alert`,
            children: (0, Z.jsx)(m, {
              id: `settings.import.autosync.noCategories`,
              defaultMessage: `Select at least one category. To stop syncing, turn off “Keep imports in sync”`,
              description: `Validation message for an empty automatic import category selection, explaining how to pause sync instead`,
            }),
          })),
      (t[43] = x),
      (t[44] = M));
  let P;
  t[45] === d
    ? (P = t[46])
    : ((P = d
        ? (0, Z.jsx)(`p`, {
            className: `text-danger`,
            role: `alert`,
            children: (0, Z.jsx)(m, {
              id: `settings.import.autosync.saveError`,
              defaultMessage: `Couldn’t save sync preferences. Try again`,
              description: `Error shown when automatic import category preferences could not be saved; the dialog stays open for retry`,
            }),
          })
        : null),
      (t[45] = d),
      (t[46] = P));
  let F;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Z.jsx)(m, {
        id: `settings.import.autosync.cancel`,
        defaultMessage: `Cancel`,
        description: `Discard unsaved automatic import category changes and close the dialog`,
      })),
      (t[47] = F))
    : (F = t[47]);
  let I;
  t[48] !== i || t[49] !== o
    ? ((I = (0, Z.jsx)(mt, {
        type: `button`,
        color: `outline`,
        disabled: i,
        onClick: o,
        children: F,
      })),
      (t[48] = i),
      (t[49] = o),
      (t[50] = I))
    : (I = t[50]);
  let L = !x || i,
    R;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Z.jsx)(m, {
        id: `settings.import.autosync.save`,
        defaultMessage: `Save`,
        description: `Save the selected categories for future automatic import syncs`,
      })),
      (t[51] = R))
    : (R = t[51]);
  let z;
  t[52] !== i || t[53] !== L
    ? ((z = (0, Z.jsx)(mt, {
        type: `submit`,
        color: `primary`,
        disabled: L,
        loading: i,
        children: R,
      })),
      (t[52] = i),
      (t[53] = L),
      (t[54] = z))
    : (z = t[54]);
  let B;
  t[55] !== I || t[56] !== z
    ? ((B = (0, Z.jsxs)(Me, { children: [I, z] })), (t[55] = I), (t[56] = z), (t[57] = B))
    : (B = t[57]);
  let V;
  t[58] !== k || t[59] !== A || t[60] !== M || t[61] !== P || t[62] !== B
    ? ((V = (0, Z.jsx)(Le, {
        className: `shrink-0`,
        children: (0, Z.jsxs)(ce, { children: [k, A, j, M, P, B] }),
      })),
      (t[58] = k),
      (t[59] = A),
      (t[60] = M),
      (t[61] = P),
      (t[62] = B),
      (t[63] = V))
    : (V = t[63]);
  let H;
  return (
    t[64] !== V || t[65] !== S || t[66] !== E
      ? ((H = (0, Z.jsxs)(N, {
          as: `form`,
          className: `max-h-[min(720px,calc(100vh-64px))] overflow-hidden select-none`,
          onSubmit: S,
          children: [w, E, V],
        })),
        (t[64] = V),
        (t[65] = S),
        (t[66] = E),
        (t[67] = H))
      : (H = t[67]),
    H
  );
}
var Vn,
  Hn,
  Z,
  Un,
  Wn = e(() => {
    ((Vn = ht()),
      (Hn = t(c(), 1)),
      he(),
      x(),
      o(),
      Mt(),
      ft(),
      et(),
      Ee(),
      n(),
      it(),
      Oe(),
      w(),
      zn(),
      (Z = ut()),
      (Un = {
        SESSIONS: (0, Z.jsx)(Tt, {}),
        AGENTS_MD: (0, Z.jsx)(s, {}),
        CONFIG: (0, Z.jsx)(we, {}),
        SKILLS: (0, Z.jsx)(I, {}),
        PLUGINS: (0, Z.jsx)(Ne, {}),
        MCP_SERVER_CONFIG: (0, Z.jsx)(we, {}),
        SUBAGENTS: (0, Z.jsx)(G, {}),
        HOOKS: (0, Z.jsx)(xe, {}),
        COMMANDS: (0, Z.jsx)(B, {}),
        MEMORY: (0, Z.jsx)(s, {}),
      }));
  });
function Gn(e) {
  let t = (0, qn.c)(63),
    { workspaceRoots: n } = e,
    r = i(Be),
    o = ae(a.syncEnabled),
    s = ae(a.syncItemTypes),
    c = g(Pe),
    l = g(Ke),
    u = Ft(at),
    d;
  t[0] === u ? (d = t[1]) : ((d = Vt(u)), (t[0] = u), (t[1] = d));
  let f = d,
    p = lt(),
    h = l != null,
    _;
  t[2] !== f || t[3] !== p || t[4] !== h || t[5] !== n
    ? ((_ = { enabled: h, hostId: K, providers: f, sessionLimits: p, workspaceRoots: n }),
      (t[2] = f),
      (t[3] = p),
      (t[4] = h),
      (t[5] = n),
      (t[6] = _))
    : (_ = t[6]);
  let { detectedItems: v } = Ye(_),
    { data: y } = H(V, K),
    b = Dt({ syncState: l, detectedItems: v, histories: y }),
    [x, S] = (0, Jn.useState)(!1),
    [C, w] = (0, Jn.useState)(!1),
    [T, E] = (0, Jn.useState)(!1),
    D = nt.filter((e) => ct({ preferences: s, syncState: l, itemType: e, itemTypes: b }) !== !1),
    O = c && l?.version === 1 && l.providerIds.length > 0,
    k = ze,
    A = D.map(Kn),
    j;
  t[7] !== k || t[8] !== A
    ? ((j = (0, Q.jsx)(k, { type: `conjunction`, value: A })), (t[7] = k), (t[8] = A), (t[9] = j))
    : (j = t[9]);
  let M = j;
  if (s === `all`) {
    let e;
    (t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(m, {
          id: `settings.import.autosync.allCategoriesSummary`,
          defaultMessage: `All categories, including new ones`,
          description: `Summary when automatic import sync includes every category, even categories detected in the future`,
        })),
        (t[10] = e))
      : (e = t[10]),
      (M = e));
  } else if (D.length === 0) {
    let e;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(m, {
          id: `settings.import.autosync.noneSelected`,
          defaultMessage: `No content selected`,
          description: `Summary when no categories are selected for automatic import sync`,
        })),
        (t[11] = e))
      : (e = t[11]),
      (M = e));
  } else if (D.length === 1 && D[0] === `SESSIONS`) {
    let e;
    (t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(m, {
          id: `settings.import.autosync.chatsOnly`,
          defaultMessage: `Chats only`,
          description: `Summary when conversation history is the only category selected for automatic import sync`,
        })),
        (t[12] = e))
      : (e = t[12]),
      (M = e));
  } else if (D.length > 3) {
    let e;
    (t[13] === D.length
      ? (e = t[14])
      : ((e = (0, Q.jsx)(m, {
          id: `settings.import.autosync.selectedCount`,
          defaultMessage: `{count} categories selected`,
          description: `Number of content categories selected for automatic import sync`,
          values: { count: D.length },
        })),
        (t[13] = D.length),
        (t[14] = e)),
      (M = e));
  }
  let N;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Q.jsx)(Re.Header, {
        title: (0, Q.jsx)(m, {
          id: `settings.import.autosync.title`,
          defaultMessage: `Automatic sync`,
          description: `Heading for the external agent import autosync settings`,
        }),
      })),
      (t[15] = N))
    : (N = t[15]);
  let P;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Q.jsx)(m, {
        id: `settings.import.autosync.label`,
        defaultMessage: `Keep imports in sync`,
        description: `Label for the external agent import autosync setting`,
      })),
      (t[16] = P))
    : (P = t[16]);
  let F;
  t[17] === o
    ? (F = t[18])
    : ((F = o
        ? (0, Q.jsx)(m, {
            id: `settings.import.autosync.description`,
            defaultMessage: `Automatically sync new and updated content from connected sources`,
            description: `Description for the external agent import autosync setting`,
          })
        : (0, Q.jsx)(m, {
            id: `settings.import.autosync.paused`,
            defaultMessage: `Sync paused. Your content selections are saved`,
            description: `Explains that automatic imports are paused without discarding category preferences`,
          })),
      (t[17] = o),
      (t[18] = F));
  let I;
  t[19] !== r || t[20] !== E || t[21] !== c || t[22] !== o
    ? ((I = (e) =>
        (0, Q.jsx)(ie, {
          ...e,
          checked: o,
          disabled: !c,
          onChange: (e) => {
            (E(!1),
              ke(r, a.syncEnabled, e).catch(() => {
                E(!0);
              }));
          },
        })),
      (t[19] = r),
      (t[20] = E),
      (t[21] = c),
      (t[22] = o),
      (t[23] = I))
    : (I = t[23]);
  let L;
  t[24] !== F || t[25] !== I
    ? ((L = (0, Q.jsx)(q, { label: P, description: F, control: I })),
      (t[24] = F),
      (t[25] = I),
      (t[26] = L))
    : (L = t[26]);
  let R;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(m, { ...Rn.content })), (t[27] = R))
    : (R = t[27]);
  let z;
  t[28] !== M || t[29] !== l
    ? ((z =
        l == null || l.providerIds.length === 0
          ? (0, Q.jsx)(m, {
              id: `settings.import.autosync.afterImport`,
              defaultMessage: `Available after your first import`,
              description: `Explains that automatic import category preferences become editable after an import connects a source`,
            })
          : M),
      (t[28] = M),
      (t[29] = l),
      (t[30] = z))
    : (z = t[30]);
  let B;
  t[31] !== C || t[32] !== S
    ? ((B = (e) => {
        C || S(e);
      }),
      (t[31] = C),
      (t[32] = S),
      (t[33] = B))
    : (B = t[33]);
  let ee = !O,
    U;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Q.jsx)(m, {
        id: `settings.import.autosync.customize`,
        defaultMessage: `Customize`,
        description: `Open a dialog to choose the content categories for automatic import sync`,
      })),
      (t[34] = U))
    : (U = t[34]);
  let W;
  t[35] === ee
    ? (W = t[36])
    : ((W = (0, Q.jsx)(mt, { color: `secondary`, size: `toolbar`, disabled: ee, children: U })),
      (t[35] = ee),
      (t[36] = W));
  let te;
  t[37] !== x ||
  t[38] !== C ||
  t[39] !== b ||
  t[40] !== s ||
  t[41] !== r ||
  t[42] !== S ||
  t[43] !== w ||
  t[44] !== l
    ? ((te = x
        ? (0, Q.jsx)(Bn, {
            itemTypes: b,
            initialPreferences: s,
            isSaving: C,
            syncState: l,
            onCancel: () => S(!1),
            onSave: (e) => (
              w(!0),
              ke(r, a.syncItemTypes, e)
                .then(() => {
                  S(!1);
                })
                .finally(() => {
                  w(!1);
                })
            ),
          })
        : null),
      (t[37] = x),
      (t[38] = C),
      (t[39] = b),
      (t[40] = s),
      (t[41] = r),
      (t[42] = S),
      (t[43] = w),
      (t[44] = l),
      (t[45] = te))
    : (te = t[45]);
  let ne;
  t[46] !== x || t[47] !== C || t[48] !== B || t[49] !== W || t[50] !== te
    ? ((ne = (0, Q.jsx)(zt, {
        open: x,
        onOpenChange: B,
        shouldIgnoreClickOutside: C,
        showDialogClose: !1,
        size: `xwide`,
        triggerContent: W,
        children: te,
      })),
      (t[46] = x),
      (t[47] = C),
      (t[48] = B),
      (t[49] = W),
      (t[50] = te),
      (t[51] = ne))
    : (ne = t[51]);
  let re;
  t[52] !== z || t[53] !== ne
    ? ((re = (0, Q.jsx)(q, { label: R, description: z, control: ne })),
      (t[52] = z),
      (t[53] = ne),
      (t[54] = re))
    : (re = t[54]);
  let G;
  t[55] !== L || t[56] !== re
    ? ((G = (0, Q.jsx)(Re.Content, { children: (0, Q.jsxs)(ye, { children: [L, re] }) })),
      (t[55] = L),
      (t[56] = re),
      (t[57] = G))
    : (G = t[57]);
  let oe;
  t[58] === T
    ? (oe = t[59])
    : ((oe = T
        ? (0, Q.jsx)(Re.Footer, {
            children: (0, Q.jsx)(`span`, {
              className: `text-danger`,
              role: `alert`,
              children: (0, Q.jsx)(m, {
                id: `settings.import.autosync.toggleError`,
                defaultMessage: `Couldn’t change automatic sync. Try again`,
                description: `Error shown when the automatic import sync switch could not be saved`,
              }),
            }),
          })
        : null),
      (t[58] = T),
      (t[59] = oe));
  let se;
  return (
    t[60] !== G || t[61] !== oe
      ? ((se = (0, Q.jsxs)(Re, { className: `select-none`, children: [N, G, oe] })),
        (t[60] = G),
        (t[61] = oe),
        (t[62] = se))
      : (se = t[62]),
    se
  );
}
function Kn(e) {
  return (0, Q.jsx)(m, { ...In[e] }, e);
}
var qn,
  Jn,
  Q,
  Yn = e(() => {
    ((qn = ht()),
      U(),
      u(),
      (Jn = t(c(), 1)),
      he(),
      o(),
      ft(),
      n(),
      S(),
      Gt(),
      yt(),
      gt(),
      it(),
      Bt(),
      Ct(),
      Ot(),
      le(),
      Oe(),
      w(),
      F(),
      Ve(),
      Wn(),
      zn(),
      (Q = ut()));
  });
function Xn() {
  let e = (0, tr.c)(76),
    t = Ft(Xe),
    n = g(C),
    i = n == null,
    a = g(r),
    o = g(M),
    s;
  e[0] !== o || e[1] !== a
    ? ((s = a?.type === `local` ? (o[a.projectId]?.rootPaths ?? []) : []),
      (e[0] = o),
      (e[1] = a),
      (e[2] = s))
    : (s = e[2]);
  let c = s,
    u = g(ve),
    p = g(L),
    { data: h, error: _, isLoading: v, refetch: y } = H(V, K),
    b;
  e[3] === h ? (b = e[4]) : ((b = h?.some($n) ?? !1), (e[3] = h), (e[4] = b));
  let x = b,
    S;
  e[5] === h ? (S = e[6]) : ((S = h ?? []), (e[5] = h), (e[6] = S));
  let w;
  e[7] === S ? (w = e[8]) : ((w = Se(S)), (e[7] = S), (e[8] = w));
  let T = w,
    { data: D } = H(me, K),
    { data: k } = H(ee, K),
    A;
  e[9] !== k || e[10] !== D?.connectors
    ? ((A = D?.connectors == null && k == null ? void 0 : [...(D?.connectors ?? []), ...(k ?? [])]),
      (e[9] = k),
      (e[10] = D?.connectors),
      (e[11] = A))
    : (A = e[11]);
  let j = (A?.length ?? 0) > 0,
    N;
  e[12] === j ? (N = e[13]) : ((N = { enabled: j, hostId: K }), (e[12] = j), (e[13] = N));
  let { hardRefetchAppsList: P, loadError: F } = pe(N),
    I = H(tn, K),
    R = I.status === `ready` && I.data.kind === `plugin-directory`,
    z;
  e[14] === R ? (z = e[15]) : ((z = { enabled: R }), (e[14] = R), (e[15] = z));
  let { availablePlugins: B, errorMessage: U, isLoading: W, refetch: te } = Ze(K, void 0, z),
    ne;
  e[16] !== B || e[17] !== I || e[18] !== W || e[19] !== U || e[20] !== te
    ? ((ne = rn({
        inputsResult: I,
        pluginDirectory: { errorMessage: U, isLoading: W, plugins: B, refetch: te },
      })),
      (e[16] = B),
      (e[17] = I),
      (e[18] = W),
      (e[19] = U),
      (e[20] = te),
      (e[21] = ne))
    : (ne = e[21]);
  let re = ne,
    G = re.data,
    ie;
  e[22] === T ? (ie = e[23]) : ((ie = { enabled: T }), (e[22] = T), (e[23] = ie));
  let { data: ae, error: oe, refetch: se } = H(l, K, ie),
    ce = E({ histories: h ?? [], runningImport: p?.hostId === `local` ? p : null }),
    le = f(ce),
    [de, fe] = (0, nr.useState)(!1),
    [he, _e] = (0, nr.useState)(!1),
    xe = he ? ce : le,
    Ce;
  e[24] === h ? (Ce = e[25]) : ((Ce = h?.find(Qn)), (e[24] = h), (e[25] = Ce));
  let we = Ce,
    Te;
  e[26] === G?.appsRequiringConnection
    ? (Te = e[27])
    : ((Te = G?.appsRequiringConnection ?? []), (e[26] = G?.appsRequiringConnection), (e[27] = Te));
  let Ee = Te,
    De = F == null ? re.status : `error`,
    Oe;
  e[28] !== h || e[29] !== ae?.data
    ? ((Oe = ue({ histories: h ?? [], mcpServerStatuses: ae?.data ?? [] })),
      (e[28] = h),
      (e[29] = ae?.data),
      (e[30] = Oe))
    : (Oe = e[30]);
  let ke = Oe,
    Ae;
  e[31] === h ? (Ae = e[32]) : ((Ae = h ?? []), (e[31] = h), (e[32] = Ae));
  let je;
  e[33] === Ae ? (je = e[34]) : ((je = ge(Ae)), (e[33] = Ae), (e[34] = je));
  let Me = je,
    Ne = ae?.data,
    Pe;
  e[35] !== h || e[36] !== _ || e[37] !== oe || e[38] !== Ne
    ? ((Pe = qt({
        histories: h,
        historiesError: _,
        mcpServerStatuses: Ne,
        mcpServerStatusesError: oe,
      })),
      (e[35] = h),
      (e[36] = _),
      (e[37] = oe),
      (e[38] = Ne),
      (e[39] = Pe))
    : (Pe = e[39]);
  let Fe = Pe,
    Ie = (x || j) && De !== `ready`,
    Le = T && Fe !== `ready`,
    ze = Le && Fe === `error`,
    Be = (G?.importedPlugins.length ?? 0) > 0 || Ee.length > 0 || Ie || ke.length > 0 || Me || ze,
    Ve = O,
    He;
  e[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (0, $.jsx)(d, { slug: `import` })), (e[40] = He))
    : (He = e[40]);
  let Ue;
  e[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = (0, $.jsx)(m, {
        id: `settings.import.subtitle.v2`,
        defaultMessage: `Bring setup, projects, and chats from other AI apps into {appName}`,
        description: `Subtitle explaining that this page imports configuration, projects, and chat history from other AI coding apps into the named Codex app`,
        values: { appName: be },
      })),
      (e[41] = Ue))
    : (Ue = e[41]);
  let We;
  e[42] !== c || e[43] !== n || e[44] !== t
    ? ((We = t ? (0, $.jsx)(Gn, { workspaceRoots: n == null ? void 0 : c }) : null),
      (e[42] = c),
      (e[43] = n),
      (e[44] = t),
      (e[45] = We))
    : (We = e[45]);
  let Ge = i || u || v,
    Ke = we == null ? null : Number(we.completedAtMs),
    qe = n == null ? void 0 : c,
    Je;
  e[46] !== Ge || e[47] !== Ke || e[48] !== qe
    ? ((Je = (0, $.jsx)(ln, {
        isImportContextLoading: Ge,
        latestSuccessfulImportAtMs: Ke,
        workspaceRoots: qe,
      })),
      (e[46] = Ge),
      (e[47] = Ke),
      (e[48] = qe),
      (e[49] = Je))
    : (Je = e[49]);
  let Ye;
  e[50] !== F ||
  e[51] !== Ee ||
  e[52] !== P ||
  e[53] !== Me ||
  e[54] !== T ||
  e[55] !== de ||
  e[56] !== De ||
  e[57] !== ke ||
  e[58] !== Fe ||
  e[59] !== G?.importedPlugins ||
  e[60] !== re ||
  e[61] !== y ||
  e[62] !== se ||
  e[63] !== Be ||
  e[64] !== Ie ||
  e[65] !== ze ||
  e[66] !== Le
    ? ((Ye =
        Be || de
          ? (0, $.jsx)(er, {
              appsRequiringConnection: Ee,
              hardRefetchAppsList: P,
              hasImportedHooks: Me,
              hasImportedMcpServers: T,
              importedConnectorDiscoveryStatus: De,
              importedMcpServerNamesRequiringAuthentication: ke,
              importedMcpSetupStatus: Fe,
              importedPlugins: G?.importedPlugins ?? [],
              retryImportHistories: () => {
                y();
              },
              retryImportedApps: () => {
                (re.status === `error` && re.retry(), F != null && P().catch(Zn));
              },
              retryMcpServerStatuses: () => {
                se();
              },
              onSetupStarted: () => {
                fe(!0);
              },
              shouldShowImportedConnectorStatus: Ie,
              shouldShowMcpServerError: ze,
              shouldShowMcpServerStatus: Le,
            })
          : null),
      (e[50] = F),
      (e[51] = Ee),
      (e[52] = P),
      (e[53] = Me),
      (e[54] = T),
      (e[55] = de),
      (e[56] = De),
      (e[57] = ke),
      (e[58] = Fe),
      (e[59] = G?.importedPlugins),
      (e[60] = re),
      (e[61] = y),
      (e[62] = se),
      (e[63] = Be),
      (e[64] = Ie),
      (e[65] = ze),
      (e[66] = Le),
      (e[67] = Ye))
    : (Ye = e[67]);
  let Qe =
      ce.length > 0 || v || _ != null
        ? (0, $.jsxs)(Re, {
            children: [
              (0, $.jsx)(Re.Header, {
                title: (0, $.jsx)(m, {
                  id: `settings.import.history.latestTitle`,
                  defaultMessage: `Import history`,
                  description: `Heading for external agent import results`,
                }),
              }),
              (0, $.jsxs)(Re.Content, {
                children: [
                  xe.map((e) =>
                    (0, $.jsx)(
                      xn,
                      {
                        defaultExpanded: e.kind === `completed` && le.includes(e),
                        entry: e,
                        mcpServerStatuses: ae?.data ?? [],
                      },
                      e.kind === `running`
                        ? `running-${e.runningImport.startedAtMs}`
                        : e.history.importId,
                    ),
                  ),
                  xe.length < ce.length
                    ? (0, $.jsx)(`div`, {
                        className: `flex justify-center`,
                        children: (0, $.jsx)(mt, {
                          color: `secondary`,
                          size: `toolbar`,
                          onClick: () => {
                            _e(!0);
                          },
                          children: (0, $.jsx)(m, {
                            id: `settings.import.history.viewMore`,
                            defaultMessage: `View more`,
                            description: `Button label to reveal older external agent import history`,
                          }),
                        }),
                      })
                    : null,
                  v
                    ? (0, $.jsx)(ye, {
                        children: (0, $.jsx)(on, {
                          children: (0, $.jsx)(m, {
                            id: `settings.import.history.loading`,
                            defaultMessage: `Loading import history`,
                            description: `Label shown while import history is loading`,
                          }),
                        }),
                      })
                    : h == null && _ != null
                      ? (0, $.jsx)(ye, {
                          children: (0, $.jsx)(q, {
                            label: (0, $.jsx)(m, {
                              id: `settings.import.history.error`,
                              defaultMessage: `Couldn't load import history`,
                              description: `Error shown when import history cannot be loaded`,
                            }),
                            control: (0, $.jsx)(mt, {
                              color: `secondary`,
                              size: `toolbar`,
                              onClick: () => {
                                y();
                              },
                              children: (0, $.jsx)(m, {
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
    $e;
  return (
    e[68] !== Ve ||
    e[69] !== He ||
    e[70] !== Ue ||
    e[71] !== We ||
    e[72] !== Je ||
    e[73] !== Ye ||
    e[74] !== Qe
      ? (($e = (0, $.jsxs)(Ve, { title: He, subtitle: Ue, children: [We, Je, Ye, Qe] })),
        (e[68] = Ve),
        (e[69] = He),
        (e[70] = Ue),
        (e[71] = We),
        (e[72] = Je),
        (e[73] = Ye),
        (e[74] = Qe),
        (e[75] = $e))
      : ($e = e[75]),
    $e
  );
}
function Zn() {}
function Qn(e) {
  return e.successes.length > 0;
}
function $n(e) {
  return e.successes.length > 0;
}
function er(e) {
  let t = (0, tr.c)(46),
    {
      appsRequiringConnection: n,
      hardRefetchAppsList: r,
      hasImportedHooks: i,
      hasImportedMcpServers: a,
      importedConnectorDiscoveryStatus: o,
      importedMcpServerNamesRequiringAuthentication: s,
      importedMcpSetupStatus: c,
      importedPlugins: l,
      retryImportHistories: u,
      retryImportedApps: d,
      retryMcpServerStatuses: f,
      shouldShowImportedConnectorStatus: p,
      shouldShowMcpServerError: h,
      shouldShowMcpServerStatus: g,
      onSetupStarted: _,
    } = e,
    [v, y] = (0, nr.useState)(`apps`),
    b;
  t[0] !== r || t[1] !== a || t[2] !== u || t[3] !== d || t[4] !== f
    ? ((b = {
        hardRefetchAppsList: r,
        hasImportedMcpServers: a,
        hostId: K,
        retryImportHistories: u,
        retryImportedApps: d,
        retryMcpServerStatuses: f,
      }),
      (t[0] = r),
      (t[1] = a),
      (t[2] = u),
      (t[3] = d),
      (t[4] = f),
      (t[5] = b))
    : (b = t[5]);
  let {
      clearConnectingApp: x,
      connectedApps: S,
      connectingApp: C,
      handleAppConnectOAuthStarted: w,
      handleAppConnected: T,
      handleAuthenticateMcp: E,
      handleConnectApp: D,
      handleInstallPlugin: O,
      handleOpenHooksSettings: k,
      handleRetry: A,
      isAppConnectPending: j,
    } = Zt(b),
    M = p ? o : `ready`,
    N = g ? c : `ready`,
    P;
  t[6] !== M || t[7] !== N
    ? ((P = { apps: M, hooks: `ready`, mcps: N }), (t[6] = M), (t[7] = N), (t[8] = P))
    : (P = t[8]);
  let F = P,
    I;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(Re.Header, {
        title: (0, $.jsx)(m, {
          id: `settings.import.attention.title`,
          defaultMessage: `Needs attention`,
          description: `Heading for imported setup that needs review or authentication`,
        }),
        subtitle: (0, $.jsx)(m, {
          id: `settings.import.attention.subtitle`,
          defaultMessage: `Finish setting up items from a previous import`,
          description: `Subtitle for imported setup that needs review or authentication`,
        }),
      })),
      (t[9] = I))
    : (I = t[9]);
  let L;
  t[10] !== f || t[11] !== h
    ? ((L = h
        ? (0, $.jsx)(q, {
            label: (0, $.jsx)(m, {
              id: `settings.import.attention.mcps.error`,
              defaultMessage: `Couldn't check imported MCP servers`,
              description: `Error shown when Codex cannot determine whether imported MCP servers need authentication`,
            }),
            control: (0, $.jsx)(mt, {
              color: `secondary`,
              size: `toolbar`,
              onClick: f,
              children: (0, $.jsx)(m, {
                id: `settings.import.attention.mcps.retry`,
                defaultMessage: `Retry`,
                description: `Button label to retry checking whether imported MCP servers need authentication`,
              }),
            }),
          })
        : null),
      (t[10] = f),
      (t[11] = h),
      (t[12] = L))
    : (L = t[12]);
  let R;
  t[13] !== D || t[14] !== _
    ? ((R = (e) => (_(), D(e))), (t[13] = D), (t[14] = _), (t[15] = R))
    : (R = t[15]);
  let z;
  t[16] !== O || t[17] !== _
    ? ((z = (e, t) => {
        (_(), O(e, t));
      }),
      (t[16] = O),
      (t[17] = _),
      (t[18] = z))
    : (z = t[18]);
  let B;
  t[19] !== n ||
  t[20] !== S ||
  t[21] !== E ||
  t[22] !== k ||
  t[23] !== A ||
  t[24] !== i ||
  t[25] !== s ||
  t[26] !== l ||
  t[27] !== j ||
  t[28] !== v ||
  t[29] !== R ||
  t[30] !== z ||
  t[31] !== F
    ? ((B = (0, $.jsx)($t, {
        appsRequiringConnection: n,
        connectedApps: S,
        hasImportedHooks: i,
        importedPlugins: l,
        isAppConnectPending: j,
        mcpServerNamesRequiringAuthentication: s,
        selectedTab: v,
        tabStatus: F,
        variant: `settings`,
        onConnectApp: R,
        onInstallPlugin: z,
        onOpenHooksSettings: k,
        onAuthenticateMcp: E,
        onRetry: A,
        onSelectTab: y,
      })),
      (t[19] = n),
      (t[20] = S),
      (t[21] = E),
      (t[22] = k),
      (t[23] = A),
      (t[24] = i),
      (t[25] = s),
      (t[26] = l),
      (t[27] = j),
      (t[28] = v),
      (t[29] = R),
      (t[30] = z),
      (t[31] = F),
      (t[32] = B))
    : (B = t[32]);
  let V;
  t[33] !== L || t[34] !== B
    ? ((V = (0, $.jsxs)(Re, {
        children: [I, (0, $.jsx)(Re.Content, { children: (0, $.jsxs)(ye, { children: [L, B] }) })],
      })),
      (t[33] = L),
      (t[34] = B),
      (t[35] = V))
    : (V = t[35]);
  let H;
  t[36] === x
    ? (H = t[37])
    : ((H = (e) => {
        e || x();
      }),
      (t[36] = x),
      (t[37] = H));
  let ee;
  t[38] !== C || t[39] !== w || t[40] !== T || t[41] !== H
    ? ((ee = (0, $.jsx)(qe, {
        app: C,
        hostId: K,
        onOpenChange: H,
        onOAuthStarted: w,
        onConnected: T,
      })),
      (t[38] = C),
      (t[39] = w),
      (t[40] = T),
      (t[41] = H),
      (t[42] = ee))
    : (ee = t[42]);
  let U;
  return (
    t[43] !== V || t[44] !== ee
      ? ((U = (0, $.jsxs)($.Fragment, { children: [V, ee] })),
        (t[43] = V),
        (t[44] = ee),
        (t[45] = U))
      : (U = t[45]),
    U
  );
}
var tr, nr, $;
e(() => {
  ((tr = ht()),
    U(),
    (nr = t(c(), 1)),
    he(),
    x(),
    o(),
    S(),
    Qt(),
    rt(),
    p(),
    nn(),
    en(),
    We(),
    Wt(),
    h(),
    At(),
    Ce(),
    _t(),
    le(),
    an(),
    Oe(),
    _e(),
    w(),
    F(),
    Ve(),
    mn(),
    Fn(),
    Yn(),
    ($ = ut()));
})();
export { Xn as ImportSettings };
//# sourceMappingURL=import-settings-8fbd0a960585.js.map
