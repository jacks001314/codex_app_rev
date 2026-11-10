import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $nt as n,
  $vt as r,
  $x as i,
  ADt as a,
  Cot as o,
  EDt as s,
  Ext as c,
  Ez as l,
  HG as u,
  HT as d,
  IDt as f,
  Ixt as p,
  JC as m,
  Jbt as h,
  KB as g,
  LT as _,
  MO as v,
  Mq as y,
  Pxt as b,
  Qvt as x,
  RT as S,
  Rnt as C,
  TDt as w,
  TJ as T,
  VDt as E,
  VT as D,
  Vxt as O,
  Wnt as k,
  XD as A,
  YD as j,
  Yct as M,
  Znt as N,
  _G as P,
  _Mt as F,
  _O as I,
  _xt as L,
  bH as R,
  cO as z,
  eS as B,
  fO as V,
  gJ as H,
  gMt as U,
  gO as W,
  i3 as G,
  iot as K,
  iw as ee,
  jDt as te,
  jO as ne,
  kz as re,
  lO as ie,
  mO as ae,
  nV as oe,
  nk as se,
  oO as ce,
  qC as le,
  qnt as ue,
  r3 as de,
  rst as fe,
  sO as pe,
  t3 as me,
  tk as he,
  tw as q,
  uO as ge,
  vO as _e,
  vV as ve,
  vzt as ye,
  w7 as be,
  wot as xe,
  xMt as Se,
  yzt as Ce,
  zxt as we,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ak as Te,
  Bbt as Ee,
  Bk as De,
  Ebt as Oe,
  Ek as ke,
  F5n as Ae,
  Fbt as je,
  GHn as Me,
  Gbt as Ne,
  Ggr as Pe,
  Hbt as Fe,
  Ibt as Ie,
  Ik as Le,
  Jbt as Re,
  Jgr as ze,
  KHn as Be,
  Lbt as Ve,
  Lk as He,
  Mbt as Ue,
  Mk as We,
  N$ as Ge,
  N5n as Ke,
  Nbt as qe,
  Nk as Je,
  Obt as Ye,
  Pk as Xe,
  QDr as Ze,
  Rbt as Qe,
  Rk as $e,
  SA as et,
  S_r as tt,
  Sk as nt,
  Tbt as rt,
  Tk as it,
  Ubt as at,
  Wbt as ot,
  XDr as st,
  Xbt as ct,
  _F as lt,
  a0n as ut,
  abt as dt,
  alr as ft,
  bk as pt,
  cA as mt,
  cbt as ht,
  dA as gt,
  eDr as _t,
  eF as vt,
  flr as yt,
  hF as bt,
  h_r as xt,
  ibt as St,
  j$ as Ct,
  jk as wt,
  kbt as Tt,
  lA as Et,
  l_r as Dt,
  lbt as Ot,
  m_r as kt,
  nDr as At,
  oA as jt,
  oFr as Mt,
  qbt as Nt,
  s0n as Pt,
  sA as Ft,
  tF as It,
  uA as Lt,
  u_r as Rt,
  v8n as zt,
  vA as Bt,
  vk as Vt,
  wbt as Ht,
  xA as Ut,
  yA as Wt,
  yk as Gt,
  zbt as Kt,
  zk as qt,
} from "./app-initial-5851df3f6cb1.js";
import { by as Jt, xy as Yt } from "./app-primary-fe8a450b3b04.js";
import { n as Xt, t as Zt } from "./app-connect-modal-fb7e1b0124f4.js";
import { n as Qt, t as $t } from "./settings-loading-row-bf72bf2df25d.js";
import { r as en, t as tn } from "./hooks-settings-route-8191acda142e.js";
import {
  n as nn,
  o as rn,
  r as an,
  t as on,
} from "./use-external-agent-import-setup-actions-aa854eb5201e.js";
import { n as sn, r as cn, t as ln } from "./setup-e77998d0081a.js";
import { n as un, t as dn } from "./settings-row-disclosure-81330dc4d2f4.js";
function fn(e) {
  let n = (0, hn.c)(45),
    { isImportContextLoading: r, latestSuccessfulImportAtMs: i, workspaceRoots: a } = e,
    c = p(o),
    l = E(),
    u = O(Ne),
    d = At(Oe),
    m;
  n[0] === d ? (m = n[1]) : ((m = Ye(d)), (n[0] = d), (n[1] = m));
  let h = m,
    g = rt(),
    _;
  n[2] !== h || n[3] !== g || n[4] !== a
    ? ((_ = { enabled: !0, hostId: K, providers: h, sessionLimits: g, workspaceRoots: a }),
      (n[2] = h),
      (n[3] = g),
      (n[4] = a),
      (n[5] = _))
    : (_ = n[5]);
  let {
      detectedItems: v,
      isDetecting: y,
      isDetectionError: b,
      refetchDetectedItems: x,
      unsupportedProjects: S,
    } = dt(_),
    C,
    w,
    T,
    D,
    k,
    A,
    j;
  if (
    n[6] !== v ||
    n[7] !== l ||
    n[8] !== y ||
    n[9] !== b ||
    n[10] !== r ||
    n[11] !== i ||
    n[12] !== x ||
    n[13] !== u ||
    n[14] !== c ||
    n[15] !== g ||
    n[16] !== S
  ) {
    let e = Je(v),
      a = u?.hostId === K,
      o = a && u != null ? We({ detectedItems: u.items, intl: l, providerIds: Je(u.items) }) : null;
    D = y || r;
    let d = (t, n) => {
        let r = We({ detectedItems: v, intl: l, providerIds: [t] });
        r != null &&
          (Ze(c, be, { source: `settings`, action: `shown`, ...wt(r, Te(r), e) }),
          Gt(c, {
            hostId: K,
            items: v,
            preselectedProviderIds: [t],
            restoreFocus: n,
            sessionLimits: g,
            source: `settings`,
          }));
      },
      p;
    n[24] === x
      ? (p = n[25])
      : ((p = () => {
          x();
        }),
        (n[24] = x),
        (n[25] = p));
    let m = p;
    ((T = it), (A = pt));
    let h;
    n[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = (0, J.jsx)(f, {
          id: `settings.agent.importSettings.sectionTitle.v2`,
          defaultMessage: `Import from another AI app`,
          description: `Settings section heading for importing configuration, projects, and chat history from a different AI coding app`,
        })),
        (n[26] = h))
      : (h = n[26]);
    let _ =
      e.length === 0
        ? null
        : (0, J.jsx)(f, {
            id: `settings.agent.importSettings.sectionDescription`,
            defaultMessage: `Detected setup that can be added to {appName}`,
            description: `Description for the detected external agent apps that can be imported`,
            values: { appName: Me },
          });
    (n[27] === _
      ? (j = n[28])
      : ((j = (0, J.jsx)(it.Header, { title: h, subtitle: _ })), (n[27] = _), (n[28] = j)),
      (w = it.Content),
      (C = le),
      (k = a
        ? (0, J.jsx)(q, {
            label: (0, J.jsx)(f, {
              id: `settings.agent.importSettings.importingLabel`,
              defaultMessage: `Import in progress`,
              description: `Settings row label shown while an external agent import is running`,
            }),
            description: o == null ? null : (0, J.jsx)(s, { type: `unit`, value: o.customizeItems.map(mn) }),
            control: (0, J.jsx)(de, { className: `icon-xs` }),
          })
        : D
          ? (0, J.jsx)(q, {
              label: (0, J.jsx)(f, {
                id: `settings.agent.importSettings.loadingLabel.v2`,
                defaultMessage: `Checking for imports`,
                description: `Label shown while external agent setup is loading`,
              }),
              description: (0, J.jsx)(f, {
                id: `settings.agent.importSettings.detectingDescription.v2`,
                defaultMessage: `Looking for compatible setup, projects, and recent chats`,
                description: `Description shown while checking for external agent setup`,
              }),
              control: (0, J.jsx)(de, { className: `icon-xs` }),
            })
          : b
            ? (0, J.jsx)(q, {
                label: (0, J.jsx)(f, {
                  id: `settings.import.error.label`,
                  defaultMessage: `Couldn't check for imports`,
                  description: `Settings row label shown when external agent setup detection fails`,
                }),
                description: (0, J.jsx)(f, {
                  id: `settings.import.error.description`,
                  defaultMessage: `Try again to look for compatible setup, projects, and recent chats`,
                  description: `Settings row description shown when external agent setup detection fails`,
                }),
                control: (0, J.jsx)(t, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: m,
                  children: (0, J.jsx)(f, {
                    id: `settings.import.error.retry`,
                    defaultMessage: `Retry`,
                    description: `Button label to retry external agent setup detection`,
                  }),
                }),
              })
            : e.length === 0 && S.length === 0 && i == null
              ? (0, J.jsx)(q, {
                  label: (0, J.jsx)(f, {
                    id: `settings.import.empty.label`,
                    defaultMessage: `Import from other AI apps`,
                    description: `Settings row label shown when no external agent setup can currently be imported`,
                  }),
                  description: (0, J.jsx)(f, {
                    id: `settings.import.empty.description`,
                    defaultMessage: `No importable setup found`,
                    description: `Settings row description shown when no external agent setup can currently be imported`,
                  }),
                  control: (0, J.jsx)(t, {
                    color: `secondary`,
                    size: `toolbar`,
                    disabled: !0,
                    children: (0, J.jsx)(f, {
                      id: `settings.import.empty.button`,
                      defaultMessage: `Import`,
                      description: `Disabled import button shown when no external agent setup can currently be imported`,
                    }),
                  }),
                })
              : e.length === 0 && S.length === 0
                ? (0, J.jsx)(q, {
                    label: (0, J.jsx)(f, {
                      id: `settings.import.empty.noNewItems`,
                      defaultMessage: `No new items found`,
                      description: `Settings row label shown when a previous import exists and no additional external agent setup is available`,
                    }),
                    description:
                      i == null
                        ? null
                        : (0, J.jsx)(f, {
                            id: `settings.import.empty.lastImported`,
                            defaultMessage: `Last imported {relativeTime} ago`,
                            description: `Description showing when another local agent setup was last imported`,
                            values: {
                              relativeTime: (0, J.jsx)(
                                Ct,
                                { dateString: new Date(i).toISOString() },
                                `last-imported-at`,
                              ),
                            },
                          }),
                    control: (0, J.jsx)(t, {
                      color: `secondary`,
                      size: `toolbar`,
                      onClick: m,
                      children: (0, J.jsx)(f, {
                        id: `settings.import.empty.checkAgain`,
                        defaultMessage: `Check again`,
                        description: `Button label to check again for importable external agent setup`,
                      }),
                    }),
                  })
                : e.map((e) => {
                    let n = gn[e],
                      r = Re(l, e);
                    return (0, J.jsx)(
                      q,
                      {
                        icon: (0, J.jsx)(`div`, {
                          "aria-hidden": !0,
                          className: U(
                            `flex size-10 shrink-0 items-center justify-center rounded-xl`,
                            e === `cursor` ? `text-default` : `bg-chart-orange text-inverse`,
                          ),
                          children: (0, J.jsx)(n, { className: `size-10` }),
                        }),
                        label: r,
                        control: (0, J.jsx)(t, {
                          "aria-label": l.formatMessage(
                            {
                              id: `settings.agent.importSettings.importProviderAriaLabel`,
                              defaultMessage: `Import from {provider}`,
                              description: `Accessible button label to import setup from a specific external agent app`,
                            },
                            { provider: r },
                          ),
                          color: `secondary`,
                          size: `toolbar`,
                          onClick: (t) => {
                            let n = t.currentTarget;
                            d(e, () => n.focus());
                          },
                          children: (0, J.jsx)(f, {
                            id: `settings.agent.importSettings.importProvider`,
                            defaultMessage: `Import`,
                            description: `Button label to review and import setup from a detected external agent app`,
                          }),
                        }),
                      },
                      e,
                    );
                  })),
      (n[6] = v),
      (n[7] = l),
      (n[8] = y),
      (n[9] = b),
      (n[10] = r),
      (n[11] = i),
      (n[12] = x),
      (n[13] = u),
      (n[14] = c),
      (n[15] = g),
      (n[16] = S),
      (n[17] = C),
      (n[18] = w),
      (n[19] = T),
      (n[20] = D),
      (n[21] = k),
      (n[22] = A),
      (n[23] = j));
  } else ((C = n[17]), (w = n[18]), (T = n[19]), (D = n[20]), (k = n[21]), (A = n[22]), (j = n[23]));
  let M;
  n[29] !== D || n[30] !== b || n[31] !== S
    ? ((M =
        !D && !b && S.length > 0
          ? (0, J.jsx)(q, {
              icon: (0, J.jsx)(Jt, { className: `icon-2xs shrink-0 text-warning` }),
              label: (0, J.jsx)(f, {
                id: `settings.import.unsupportedProjects.label`,
                defaultMessage: `{count, plural, one {# project can't be imported} other {# projects can't be imported}}`,
                description: `Settings row label shown when detected external agent projects cannot be imported`,
                values: { count: S.length },
              }),
              description: (0, J.jsx)(f, {
                id: `settings.import.unsupportedProjects.description`,
                defaultMessage: `{projects} {count, plural, one {uses} other {use}} an unsupported project configuration`,
                description: `Settings row description listing detected external agent projects that cannot be imported`,
                values: {
                  count: S.length,
                  projects: (0, J.jsx)(s, { type: `conjunction`, value: S.map(pn) }, `unsupported-projects`),
                },
              }),
              control: null,
            })
          : null),
      (n[29] = D),
      (n[30] = b),
      (n[31] = S),
      (n[32] = M))
    : (M = n[32]);
  let N;
  n[33] !== C || n[34] !== k || n[35] !== M
    ? ((N = (0, J.jsxs)(C, { children: [k, M] })), (n[33] = C), (n[34] = k), (n[35] = M), (n[36] = N))
    : (N = n[36]);
  let P;
  n[37] !== w || n[38] !== N
    ? ((P = (0, J.jsx)(w, { children: N })), (n[37] = w), (n[38] = N), (n[39] = P))
    : (P = n[39]);
  let F;
  return (
    n[40] !== T || n[41] !== A || n[42] !== j || n[43] !== P
      ? ((F = (0, J.jsxs)(T, { id: A, children: [j, P] })),
        (n[40] = T),
        (n[41] = A),
        (n[42] = j),
        (n[43] = P),
        (n[44] = F))
      : (F = n[44]),
    F
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
    ((hn = ye()),
      C(),
      F(),
      b(),
      te(),
      Be(),
      me(),
      Ge(),
      G(),
      Vt(),
      ot(),
      nt(),
      ct(),
      Tt(),
      Ht(),
      St(),
      gt(),
      Et(),
      Ft(),
      Yt(),
      Xe(),
      st(),
      xe(),
      ke(),
      ee(),
      m(),
      Mt(),
      _t(),
      (J = Se()),
      (gn = { "claude-code": Lt, "claude-cowork": mt, cursor: jt }));
  }))();
}
function vn(e) {
  let n = (0, Sn.c)(20),
    { category: r, history: i } = e,
    a = c(),
    o,
    s;
  if (n[0] !== r.itemType || n[1] !== i.failures || n[2] !== i.successes) {
    let e;
    n[5] === r.itemType
      ? (e = n[6])
      : ((e = (e) => e.itemType === r.itemType), (n[5] = r.itemType), (n[6] = e));
    let t = i.successes.filter(e),
      a;
    n[7] === r.itemType
      ? (a = n[8])
      : ((a = (e) => e.itemType === r.itemType), (n[7] = r.itemType), (n[8] = a));
    let c = i.failures.filter(a),
      l;
    (n[9] === r.itemType
      ? (l = n[10])
      : ((l = (e, t) =>
          r.itemType === `SESSIONS`
            ? (0, Y.jsx)(yn, { status: `success`, target: e.target }, `success-${t}`)
            : (0, Y.jsx)(
                bn,
                { itemType: r.itemType, label: e.source, status: `success`, target: e.target },
                `success-${t}`,
              )),
        (n[9] = r.itemType),
        (n[10] = l)),
      (o = t.map(l)));
    let u;
    (n[11] === r.itemType
      ? (u = n[12])
      : ((u = (e, t) =>
          r.itemType === `SESSIONS`
            ? (0, Y.jsx)(yn, { failureMessage: e.message, status: `error` }, `failure-${t}`)
            : (0, Y.jsx)(
                bn,
                { itemType: r.itemType, failureMessage: e.message, label: e.source, status: `error` },
                `failure-${t}`,
              )),
        (n[11] = r.itemType),
        (n[12] = u)),
      (s = c.map(u)),
      (n[0] = r.itemType),
      (n[1] = i.failures),
      (n[2] = i.successes),
      (n[3] = o),
      (n[4] = s));
  } else ((o = n[3]), (s = n[4]));
  let l;
  n[13] !== r.itemType || n[14] !== a
    ? ((l =
        r.itemType === `HOOKS`
          ? (0, Y.jsx)(q, {
              variant: `nested`,
              label: (0, Y.jsx)(f, {
                id: `settings.import.history.details.reviewHooks`,
                defaultMessage: `Manage imported hooks`,
                description: `Label for the inline action to manage imported hooks`,
              }),
              control: (0, Y.jsx)(t, {
                color: `ghost`,
                onClick: () => {
                  a(tn({ hostId: K }));
                },
                children: (0, Y.jsx)(f, {
                  id: `settings.import.history.details.openHooks`,
                  defaultMessage: `Open hooks settings`,
                  description: `Button label to open hooks settings from imported hooks`,
                }),
              }),
            })
          : null),
      (n[13] = r.itemType),
      (n[14] = a),
      (n[15] = l))
    : (l = n[15]);
  let u;
  return (
    n[16] !== o || n[17] !== s || n[18] !== l
      ? ((u = (0, Y.jsxs)(Y.Fragment, { children: [o, s, l] })),
        (n[16] = o),
        (n[17] = s),
        (n[18] = l),
        (n[19] = u))
      : (u = n[19]),
    u
  );
}
function yn(e) {
  let n = (0, Sn.c)(19),
    r = E(),
    i = c(),
    a;
  n[0] !== e.status || n[1] !== e.target
    ? ((a = e.status === `success` && e.target != null ? h(e.target) : null),
      (n[0] = e.status),
      (n[1] = e.target),
      (n[2] = a))
    : (a = n[2]);
  let o = a,
    s;
  n[3] === o ? (s = n[4]) : ((s = o == null ? null : { hostId: K, threadId: o }), (n[3] = o), (n[4] = s));
  let u = we(Ae, s),
    d = we(Ke, o),
    p = u ?? d?.title,
    m;
  n[5] === e.status
    ? (m = n[6])
    : ((m =
        e.status === `error`
          ? (0, Y.jsx)(l, {
              className: `shrink-0 text-danger`,
              "aria-hidden": !1,
              legacyIcon: Jt,
              asset16: _,
              legacyClassName: `icon-2xs`,
            })
          : null),
      (n[5] = e.status),
      (n[6] = m));
  let g;
  n[7] === p
    ? (g = n[8])
    : ((g =
        p ??
        (0, Y.jsx)(f, {
          id: `settings.import.history.details.untitledChat`,
          defaultMessage: `Untitled chat`,
          description: `Fallback title for an imported chat without a loaded thread title`,
        })),
      (n[7] = p),
      (n[8] = g));
  let v = e.status === `error` ? e.failureMessage : null,
    y;
  n[9] !== o || n[10] !== r || n[11] !== i || n[12] !== p
    ? ((y =
        o == null
          ? null
          : (0, Y.jsx)(t, {
              "aria-label":
                p == null
                  ? r.formatMessage({
                      id: `settings.import.history.details.openUntitledChat`,
                      defaultMessage: `Open untitled chat`,
                      description: `Accessible label to open an imported chat without a loaded thread title`,
                    })
                  : r.formatMessage(
                      {
                        id: `settings.import.history.details.openNamedChat`,
                        defaultMessage: `Open {title}`,
                        description: `Accessible label to open an imported chat by title`,
                      },
                      { title: p },
                    ),
              color: `ghost`,
              onClick: () => {
                i(x(o));
              },
              children: (0, Y.jsx)(f, {
                id: `settings.import.history.details.openChat`,
                defaultMessage: `Open chat`,
                description: `Button label to open an imported chat`,
              }),
            })),
      (n[9] = o),
      (n[10] = r),
      (n[11] = i),
      (n[12] = p),
      (n[13] = y))
    : (y = n[13]);
  let b;
  return (
    n[14] !== m || n[15] !== g || n[16] !== v || n[17] !== y
      ? ((b = (0, Y.jsx)(q, { variant: `nested`, icon: m, label: g, description: v, control: y })),
        (n[14] = m),
        (n[15] = g),
        (n[16] = v),
        (n[17] = y),
        (n[18] = b))
      : (b = n[18]),
    b
  );
}
function bn(e) {
  let n = (0, Sn.c)(21),
    r = E(),
    i = c(),
    a = null;
  if (e.status === `error`) a = e.failureMessage;
  else if (e.target == null) {
    let e;
    (n[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(f, {
          id: `settings.import.history.details.imported`,
          defaultMessage: `Imported`,
          description: `Fallback destination label for a successful import history detail item`,
        })),
        (n[0] = e))
      : (e = n[0]),
      (a = e));
  } else e.target !== e.label && (a = e.target);
  let o;
  n[1] !== e.itemType || n[2] !== e.label || n[3] !== e.status || n[4] !== e.target
    ? ((o = e.status === `success` && e.label != null ? xn(e.itemType, e.label, e.target) : null),
      (n[1] = e.itemType),
      (n[2] = e.label),
      (n[3] = e.status),
      (n[4] = e.target),
      (n[5] = o))
    : (o = n[5]);
  let s = o,
    u;
  n[6] === e.label
    ? (u = n[7])
    : ((u =
        e.label ??
        (0, Y.jsx)(f, {
          id: `settings.import.history.details.unknownItem`,
          defaultMessage: `Imported item`,
          description: `Fallback label for an import history detail item without a source name`,
        })),
      (n[6] = e.label),
      (n[7] = u));
  let d = u,
    p;
  n[8] === e.status
    ? (p = n[9])
    : ((p =
        e.status === `error`
          ? (0, Y.jsx)(l, {
              className: `shrink-0 text-danger`,
              "aria-hidden": !1,
              legacyIcon: Jt,
              asset16: _,
              legacyClassName: `icon-2xs`,
            })
          : null),
      (n[8] = e.status),
      (n[9] = p));
  let m;
  n[10] !== r || n[11] !== i || n[12] !== s || n[13] !== e.itemType || n[14] !== e.label
    ? ((m =
        s == null
          ? null
          : (0, Y.jsx)(t, {
              "aria-label": r.formatMessage(
                {
                  id: `settings.import.history.details.openItem`,
                  defaultMessage: `Open {item}`,
                  description: `Accessible label to open an imported item`,
                },
                { item: e.label },
              ),
              color: `ghost`,
              onClick: () => {
                i(s, {
                  state:
                    e.itemType === `SKILLS` || e.itemType === `COMMANDS`
                      ? { initialHostId: K, initialTab: `skills` }
                      : void 0,
                });
              },
              children:
                e.itemType === `SKILLS` || e.itemType === `COMMANDS`
                  ? (0, Y.jsx)(f, {
                      id: `settings.import.history.details.openInSkills`,
                      defaultMessage: `Open in Skills`,
                      description: `Button label to open an imported skill or converted command in Skills`,
                    })
                  : e.itemType === `MCP_SERVER_CONFIG`
                    ? (0, Y.jsx)(f, {
                        id: `settings.import.history.details.openMcpSettings`,
                        defaultMessage: `Open MCP settings`,
                        description: `Button label to open an imported MCP server in settings`,
                      })
                    : (0, Y.jsx)(f, {
                        id: `settings.import.history.details.openPlugin`,
                        defaultMessage: `Open plugin`,
                        description: `Button label to open an imported plugin`,
                      }),
            })),
      (n[10] = r),
      (n[11] = i),
      (n[12] = s),
      (n[13] = e.itemType),
      (n[14] = e.label),
      (n[15] = m))
    : (m = n[15]);
  let h;
  return (
    n[16] !== a || n[17] !== d || n[18] !== p || n[19] !== m
      ? ((h = (0, Y.jsx)(q, { variant: `nested`, icon: p, label: d, description: a, control: m })),
        (n[16] = a),
        (n[17] = d),
        (n[18] = p),
        (n[19] = m),
        (n[20] = h))
      : (h = n[20]),
    h
  );
}
function xn(e, t, n) {
  return e === `SKILLS` || e === `COMMANDS` || e === `MCP_SERVER_CONFIG`
    ? `${e === `MCP_SERVER_CONFIG` ? `/settings/mcp-settings` : `/skills`}?search=${encodeURIComponent(n ?? t)}`
    : e === `PLUGINS`
      ? r({ hostId: K, pluginId: n ?? t })
      : null;
}
var Sn, Y;
function Cn() {
  return (Cn = e(() => {
    ((Sn = ye()), S(), b(), fe(), te(), L(), zt(), me(), re(), Yt(), en(), ee(), Mt(), (Y = Se()));
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
  let t = (0, In.c)(6),
    { runningImport: n } = e,
    r = E(),
    i;
  if (t[0] !== r || t[1] !== n.items) {
    let e = Ve(n.items),
      a;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, X.jsx)(q, {
          label: (0, X.jsx)(f, {
            id: `settings.import.history.running`,
            defaultMessage: `Importing now`,
            description: `Header for an import history entry while its results are pending`,
          }),
          control: (0, X.jsx)(de, { className: `icon-xs shrink-0 text-secondary` }),
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
              label: Nt(r, e),
              control: (0, X.jsx)(`span`, {
                className: `text-xs text-secondary`,
                children: (0, X.jsx)(f, {
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
      (i = (0, X.jsxs)(le, { children: [a, e.map(o)] })),
      (t[0] = r),
      (t[1] = n.items),
      (t[2] = i));
  } else i = t[2];
  return i;
}
function En(e) {
  let t = (0, In.c)(39),
    { defaultExpanded: n, history: r, mcpServerStatuses: i } = e,
    a = je(r),
    o = a.reduce(An, 0),
    s = a.reduce(kn, 0),
    c;
  t[0] !== r || t[1] !== i
    ? ((c = Qe({ histories: [r], mcpServerStatuses: i })), (t[0] = r), (t[1] = i), (t[2] = c))
    : (c = t[2]);
  let l = c.length,
    u;
  t[3] === r.successes ? (u = t[4]) : ((u = r.successes.filter(On)), (t[3] = r.successes), (t[4] = u));
  let d = l + u.length,
    [p, m] = (0, Ln.useState)(n),
    [h, g] = (0, Ln.useState)(null),
    _ = `import-history-${r.importId}`,
    v;
  v =
    s > 0 && d > 0
      ? (0, X.jsx)(f, {
          id: `settings.import.history.summaryWithFailuresAndWarnings`,
          defaultMessage: `{importedCount} imported · {failedCount} did not import · {warningCount} need review`,
          description: `Summary of imported, failed, and review-required items for a completed import`,
          values: { importedCount: o, failedCount: s, warningCount: d },
        })
      : s > 0
        ? (0, X.jsx)(f, {
            id: `settings.import.history.summaryWithFailures`,
            defaultMessage: `{importedCount} imported · {failedCount} did not import`,
            description: `Summary of imported and failed items for a completed import`,
            values: { importedCount: o, failedCount: s },
          })
        : d > 0
          ? (0, X.jsx)(f, {
              id: `settings.import.history.summaryWithWarnings`,
              defaultMessage: `{importedCount} imported · {warningCount} need review`,
              description: `Summary of imported and review-required items for a completed import`,
              values: { importedCount: o, warningCount: d },
            })
          : (0, X.jsx)(f, {
              id: `settings.import.history.summary`,
              defaultMessage: `{importedCount} imported`,
              description: `Summary of imported items for a completed import`,
              values: { importedCount: o },
            });
  let y = le,
    b = dn,
    x =
      a.length === 0
        ? (0, X.jsx)(q, {
            variant: `nested`,
            label: (0, X.jsx)(f, {
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
              dn,
              {
                content: (0, X.jsx)(vn, { category: e, history: r }),
                contentId: t,
                expanded: n,
                children: (0, X.jsx)(Nn, {
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
    S;
  t[5] === r.providerId
    ? (S = t[6])
    : ((S = (0, X.jsx)(jn, { providerId: r.providerId })), (t[5] = r.providerId), (t[6] = S));
  let C = Number(r.completedAtMs),
    T;
  t[7] === C
    ? (T = t[8])
    : ((T = (0, X.jsx)(w, { value: C, dateStyle: `medium`, timeStyle: `short` })), (t[7] = C), (t[8] = T));
  let E;
  t[9] === v ? (E = t[10]) : ((E = (0, X.jsx)(`span`, { children: v })), (t[9] = v), (t[10] = E));
  let D;
  t[11] !== T || t[12] !== E
    ? ((D = (0, X.jsxs)(`span`, { className: `flex flex-wrap items-center gap-x-2`, children: [T, E] })),
      (t[11] = T),
      (t[12] = E),
      (t[13] = D))
    : (D = t[13]);
  let O;
  t[14] === r.providerId
    ? (O = t[15])
    : ((O = (0, X.jsx)(Mn, { providerId: r.providerId })), (t[14] = r.providerId), (t[15] = O));
  let k = p && `rotate-180`,
    A;
  t[16] === k
    ? (A = t[17])
    : ((A = U(`icon-2xs text-tertiary transition-transform`, k)), (t[16] = k), (t[17] = A));
  let M;
  t[18] === A
    ? (M = t[19])
    : ((M = (0, X.jsx)(j, { "aria-hidden": !0, className: A })), (t[18] = A), (t[19] = M));
  let N;
  t[20] === m
    ? (N = t[21])
    : ((N = () => {
        m(Dn);
      }),
      (t[20] = m),
      (t[21] = N));
  let P;
  t[22] !== _ || t[23] !== p || t[24] !== O || t[25] !== M || t[26] !== N || t[27] !== S || t[28] !== D
    ? ((P = (0, X.jsx)(Fn, {
        contentId: _,
        expanded: p,
        label: S,
        description: D,
        icon: O,
        control: M,
        onClick: N,
      })),
      (t[22] = _),
      (t[23] = p),
      (t[24] = O),
      (t[25] = M),
      (t[26] = N),
      (t[27] = S),
      (t[28] = D),
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
    r = E();
  switch (n) {
    case `claude-code`:
    case `claude-cowork`:
    case `cursor`: {
      let e;
      t[0] !== r || t[1] !== n ? ((e = Re(r, n)), (t[0] = r), (t[1] = n), (t[2] = e)) : (e = t[2]);
      let i;
      return (
        t[3] === e
          ? (i = t[4])
          : ((i = (0, X.jsx)(f, {
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
          ? ((e = (0, X.jsx)(f, {
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
      let e = n === `claude-code` ? Lt : mt,
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
              children: (0, X.jsx)(jt, { className: `size-10` }),
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
              children: (0, X.jsx)(i, { className: `icon-sm` }),
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
    c = E(),
    l;
  t[0] !== n.itemType || t[1] !== a || t[2] !== o
    ? ((l = n.itemType === `MCP_SERVER_CONFIG` ? Qe({ histories: [a], mcpServerStatuses: o }).length : 0),
      (t[0] = n.itemType),
      (t[1] = a),
      (t[2] = o),
      (t[3] = l))
    : (l = t[3]);
  let u = l,
    d;
  t[4] !== n.itemType || t[5] !== c
    ? ((d = Nt(c, n.itemType)), (t[4] = n.itemType), (t[5] = c), (t[6] = d))
    : (d = t[6]);
  let p;
  t[7] !== u || t[8] !== n.importedCount || t[9] !== n.itemType
    ? ((p =
        n.itemType === `COMMANDS`
          ? (0, X.jsx)(f, {
              id: `settings.import.history.destination.commands`,
              defaultMessage: `Converted into Codex skills`,
              description: `Destination label for imported commands`,
            })
          : n.itemType === `HOOKS` && n.importedCount > 0
            ? (0, X.jsx)(f, {
                id: `settings.import.history.manageHooks`,
                defaultMessage: `Manage imported hooks in Hooks settings`,
                description: `Description for opening imported hooks in Hooks settings`,
              })
            : u > 0
              ? (0, X.jsx)(f, {
                  id: `settings.import.history.authRequiredCount.v2`,
                  defaultMessage: `{count, plural, one {# server needs authentication} other {# servers need authentication}}`,
                  description: `Imported MCP server count that still requires authentication`,
                  values: { count: u },
                })
              : null),
      (t[7] = u),
      (t[8] = n.importedCount),
      (t[9] = n.itemType),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== u || t[12] !== n
    ? ((m = (0, X.jsx)(Pn, { authRequiredCount: u, category: n })), (t[11] = u), (t[12] = n), (t[13] = m))
    : (m = t[13]);
  let h = i && `rotate-90`,
    g;
  t[14] === h
    ? (g = t[15])
    : ((g = U(`icon-2xs shrink-0 text-tertiary transition-transform`, h)), (t[14] = h), (t[15] = g));
  let _;
  t[16] === g ? (_ = t[17]) : ((_ = (0, X.jsx)(he, { className: g })), (t[16] = g), (t[17] = _));
  let v;
  t[18] !== m || t[19] !== _
    ? ((v = (0, X.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-3 whitespace-nowrap`,
        children: [m, _],
      })),
      (t[18] = m),
      (t[19] = _),
      (t[20] = v))
    : (v = t[20]);
  let y;
  return (
    t[21] !== r || t[22] !== i || t[23] !== s || t[24] !== d || t[25] !== p || t[26] !== v
      ? ((y = (0, X.jsx)(Fn, {
          contentId: r,
          expanded: i,
          variant: `nested`,
          label: d,
          description: p,
          control: v,
          onClick: s,
        })),
        (t[21] = r),
        (t[22] = i),
        (t[23] = s),
        (t[24] = d),
        (t[25] = p),
        (t[26] = v),
        (t[27] = y))
      : (y = t[27]),
    y
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
              (0, X.jsx)(f, {
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
                ? (0, X.jsx)(f, {
                    id: `settings.import.history.categorySummaryWithAuthentication`,
                    defaultMessage: `{importedCount} imported · {authRequiredCount, plural, one {# needs authentication} other {# need authentication}}`,
                    description: `Summary of imported MCP servers and how many still require authentication`,
                    values: { authRequiredCount: n, importedCount: r.importedCount },
                  })
                : (0, X.jsx)(f, {
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
            (0, X.jsx)(f, {
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
var In, Ln, X;
function Rn() {
  return (Rn = e(() => {
    ((In = ye()),
      F(),
      (Ln = Ce()),
      te(),
      G(),
      ot(),
      ct(),
      se(),
      A(),
      gt(),
      Et(),
      Ft(),
      B(),
      ee(),
      un(),
      m(),
      Cn(),
      (X = Se()));
  }))();
}
var zn, Bn, Vn;
function Hn() {
  return (Hn = e(() => {
    (te(),
      (zn = a({
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
      (Bn = a({
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
      (Vn = a({
        content: {
          id: `settings.import.autosync.content`,
          defaultMessage: `Content to sync`,
          description: `Label and dialog title for selecting categories to import during automatic sync`,
        },
      })));
  }))();
}
function Un(e) {
  let n = (0, Wn.c)(68),
    { itemTypes: r, initialPreferences: i, isSaving: a, syncState: o, onCancel: s, onSave: c } = e,
    l = (0, Gn.useId)(),
    [u, d] = (0, Gn.useState)(i),
    [p, m] = (0, Gn.useState)(!1),
    [h, g] = (0, Gn.useState)(!1),
    _ = h ? Le : r,
    v = u === `all` ? _ : r,
    y;
  n[0] !== u || n[1] !== o || n[2] !== v
    ? ((y = $e({ preferences: u, syncState: o, itemTypes: v })),
      (n[0] = u),
      (n[1] = o),
      (n[2] = v),
      (n[3] = y))
    : (y = n[3]);
  let b = y,
    x;
  n[4] !== r || n[5] !== u || n[6] !== o
    ? ((x = Le.some((e) => qt({ preferences: u, syncState: o, itemType: e, itemTypes: r }) !== !1)),
      (n[4] = r),
      (n[5] = u),
      (n[6] = o),
      (n[7] = x))
    : (x = n[7]);
  let S = x,
    C;
  n[8] !== S || n[9] !== a || n[10] !== c || n[11] !== u
    ? ((C = (e) => {
        (e.preventDefault(),
          S &&
            !a &&
            (m(!1),
            c(u).catch(() => {
              m(!0);
            })));
      }),
      (n[8] = S),
      (n[9] = a),
      (n[10] = c),
      (n[11] = u),
      (n[12] = C))
    : (C = n[12]);
  let w;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(I, { children: (0, Z.jsx)(f, { ...Vn.content }) })), (n[13] = w))
    : (w = n[13]);
  let T;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Z.jsx)(ie, {
        className: `shrink-0`,
        children: (0, Z.jsx)(z, {
          title: w,
          subtitle: (0, Z.jsx)(W, {
            children: (0, Z.jsx)(f, {
              id: `settings.import.autosync.customizeDescription`,
              defaultMessage: `Applies to all connected sources and projects`,
              description: `Explains that changing an automatic import category applies to all connected import sources and project-level content`,
            }),
          }),
        }),
      })),
      (n[14] = T))
    : (T = n[14]);
  let E;
  if (n[15] !== b || n[16] !== l || n[17] !== a || n[18] !== r || n[19] !== u || n[20] !== o || n[21] !== _) {
    let e;
    (n[23] !== b || n[24] !== l || n[25] !== a || n[26] !== r || n[27] !== u || n[28] !== o
      ? ((e = (e) => {
          let t = e === `CONFIG` && !o?.providerIds.includes(`claude-cowork`) ? void 0 : Bn[e],
            n = `${l}-${e}`;
          return (0, Z.jsx)(
            `label`,
            {
              className: a ? void 0 : `cursor-interaction`,
              htmlFor: n,
              children: (0, Z.jsx)(q, {
                control: (t) =>
                  (0, Z.jsx)(`div`, {
                    className: `relative`,
                    children: (0, Z.jsx)(D, {
                      id: n,
                      ...t,
                      checked: qt({ preferences: u, syncState: o, itemType: e, itemTypes: r }),
                      disabled: a,
                      onCheckedChange: (t) => {
                        (d({ ...b, [e]: t }), m(!1));
                      },
                    }),
                  }),
                description: t == null ? void 0 : (0, Z.jsx)(f, { ...t }),
                icon: Kn[e],
                label: (0, Z.jsx)(f, { ...zn[e] }),
              }),
            },
            e,
          );
        }),
        (n[23] = b),
        (n[24] = l),
        (n[25] = a),
        (n[26] = r),
        (n[27] = u),
        (n[28] = o),
        (n[29] = e))
      : (e = n[29]),
      (E = _.map(e)),
      (n[15] = b),
      (n[16] = l),
      (n[17] = a),
      (n[18] = r),
      (n[19] = u),
      (n[20] = o),
      (n[21] = _),
      (n[22] = E));
  } else E = n[22];
  let O;
  n[30] === E
    ? (O = n[31])
    : ((O = (0, Z.jsx)(ie, {
        className: `min-h-0 overflow-y-auto`,
        children: (0, Z.jsx)(le, { children: E }),
      })),
      (n[30] = E),
      (n[31] = O));
  let k, A;
  n[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Z.jsx)(f, {
        id: `settings.import.autosync.allCategories`,
        defaultMessage: `Sync all categories`,
        description: `Toggle to sync every import category from connected sources, including categories detected later`,
      })),
      (k = (0, Z.jsx)(f, {
        id: `settings.import.autosync.allCategoriesDescription`,
        defaultMessage: `Include categories found in the future`,
        description: `Explains that syncing all categories automatically includes categories absent from the original import`,
      })),
      (n[32] = k),
      (n[33] = A))
    : ((k = n[32]), (A = n[33]));
  let j;
  n[34] !== b || n[35] !== a || n[36] !== u
    ? ((j = (0, Z.jsx)(q, {
        label: A,
        description: k,
        control: (e) =>
          (0, Z.jsx)(ne, {
            ...e,
            checked: u === `all`,
            disabled: a,
            onChange: (e) => {
              (d(e ? `all` : b), m(!1));
            },
          }),
      })),
      (n[34] = b),
      (n[35] = a),
      (n[36] = u),
      (n[37] = j))
    : (j = n[37]);
  let M;
  n[38] !== a || n[39] !== r.length || n[40] !== h
    ? ((M =
        r.length < Le.length
          ? (0, Z.jsx)(q, {
              label: (0, Z.jsx)(f, {
                id: `settings.import.autosync.showAllCategories`,
                defaultMessage: `Show all categories`,
                description: `Toggle to also show automatic import categories not found in connected sources so they can be configured in advance`,
              }),
              description: (0, Z.jsx)(f, {
                id: `settings.import.autosync.showAllCategoriesDescription`,
                defaultMessage: `Choose what to sync when new categories become available`,
                description: `Explains that showing all import categories lets users choose in advance which categories to sync when their connected source apps have that content`,
              }),
              control: (e) => (0, Z.jsx)(ne, { ...e, checked: h, disabled: a, onChange: g }),
            })
          : null),
      (n[38] = a),
      (n[39] = r.length),
      (n[40] = h),
      (n[41] = M))
    : (M = n[41]);
  let N;
  n[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Z.jsx)(`p`, {
        className: `text-sm leading-4 text-secondary`,
        children: (0, Z.jsx)(f, {
          id: `settings.import.autosync.futureSyncs.v2`,
          defaultMessage: `Changes apply to future syncs. Content already imported stays in {appName}`,
          description: `Explains that changing automatic import preferences does not remove content already imported into the named app`,
          values: { appName: Me },
        }),
      })),
      (n[42] = N))
    : (N = n[42]);
  let P;
  n[43] === S
    ? (P = n[44])
    : ((P = S
        ? null
        : (0, Z.jsx)(`p`, {
            className: `text-sm leading-4 text-secondary`,
            role: `alert`,
            children: (0, Z.jsx)(f, {
              id: `settings.import.autosync.noCategories`,
              defaultMessage: `Select at least one category. To stop syncing, turn off “Keep imports in sync”`,
              description: `Validation message for an empty automatic import category selection, explaining how to pause sync instead`,
            }),
          })),
      (n[43] = S),
      (n[44] = P));
  let F;
  n[45] === p
    ? (F = n[46])
    : ((F = p
        ? (0, Z.jsx)(`p`, {
            className: `text-danger`,
            role: `alert`,
            children: (0, Z.jsx)(f, {
              id: `settings.import.autosync.saveError`,
              defaultMessage: `Couldn’t save sync preferences. Try again`,
              description: `Error shown when automatic import category preferences could not be saved; the dialog stays open for retry`,
            }),
          })
        : null),
      (n[45] = p),
      (n[46] = F));
  let L;
  n[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Z.jsx)(f, {
        id: `settings.import.autosync.cancel`,
        defaultMessage: `Cancel`,
        description: `Discard unsaved automatic import category changes and close the dialog`,
      })),
      (n[47] = L))
    : (L = n[47]);
  let R;
  n[48] !== a || n[49] !== s
    ? ((R = (0, Z.jsx)(t, { type: `button`, color: `outline`, disabled: a, onClick: s, children: L })),
      (n[48] = a),
      (n[49] = s),
      (n[50] = R))
    : (R = n[50]);
  let B = !S || a,
    V;
  n[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Z.jsx)(f, {
        id: `settings.import.autosync.save`,
        defaultMessage: `Save`,
        description: `Save the selected categories for future automatic import syncs`,
      })),
      (n[51] = V))
    : (V = n[51]);
  let H;
  n[52] !== a || n[53] !== B
    ? ((H = (0, Z.jsx)(t, { type: `submit`, color: `primary`, disabled: B, loading: a, children: V })),
      (n[52] = a),
      (n[53] = B),
      (n[54] = H))
    : (H = n[54]);
  let U;
  n[55] !== R || n[56] !== H
    ? ((U = (0, Z.jsxs)(pe, { children: [R, H] })), (n[55] = R), (n[56] = H), (n[57] = U))
    : (U = n[57]);
  let G;
  n[58] !== j || n[59] !== M || n[60] !== P || n[61] !== F || n[62] !== U
    ? ((G = (0, Z.jsx)(ie, {
        className: `shrink-0`,
        children: (0, Z.jsxs)(ge, { children: [j, M, N, P, F, U] }),
      })),
      (n[58] = j),
      (n[59] = M),
      (n[60] = P),
      (n[61] = F),
      (n[62] = U),
      (n[63] = G))
    : (G = n[63]);
  let K;
  return (
    n[64] !== G || n[65] !== C || n[66] !== O
      ? ((K = (0, Z.jsxs)(ce, {
          as: `form`,
          className: `max-h-[min(720px,calc(100vh-64px))] overflow-hidden select-none`,
          onSubmit: C,
          children: [T, O, G],
        })),
        (n[64] = G),
        (n[65] = C),
        (n[66] = O),
        (n[67] = K))
      : (K = n[67]),
    K
  );
}
var Wn, Gn, Z, Kn;
function qn() {
  return (qn = e(() => {
    ((Wn = ye()),
      (Gn = Ce()),
      te(),
      Be(),
      me(),
      d(),
      _e(),
      V(),
      T(),
      v(),
      De(),
      ee(),
      m(),
      Hn(),
      (Z = Se()),
      (Kn = {
        SESSIONS: (0, Z.jsx)(ve, {}),
        AGENTS_MD: (0, Z.jsx)(R, {}),
        CONFIG: (0, Z.jsx)(oe, {}),
        SKILLS: (0, Z.jsx)(H, {}),
        PLUGINS: (0, Z.jsx)(u, {}),
        MCP_SERVER_CONFIG: (0, Z.jsx)(oe, {}),
        SUBAGENTS: (0, Z.jsx)(P, {}),
        HOOKS: (0, Z.jsx)(g, {}),
        COMMANDS: (0, Z.jsx)(y, {}),
        MEMORY: (0, Z.jsx)(R, {}),
      }));
  }))();
}
function Jn(e) {
  let r = (0, Xn.c)(63),
    { workspaceRoots: i } = e,
    a = p(o),
    c = n(M.syncEnabled),
    l = n(M.syncItemTypes),
    u = O(N),
    d = O(Bt),
    m = At(Oe),
    h;
  r[0] === m ? (h = r[1]) : ((h = Ye(m)), (r[0] = m), (r[1] = h));
  let g = h,
    _ = rt(),
    v = d != null,
    y;
  r[2] !== g || r[3] !== _ || r[4] !== v || r[5] !== i
    ? ((y = { enabled: v, hostId: K, providers: g, sessionLimits: _, workspaceRoots: i }),
      (r[2] = g),
      (r[3] = _),
      (r[4] = v),
      (r[5] = i),
      (r[6] = y))
    : (y = r[6]);
  let { detectedItems: b } = dt(y),
    { data: x } = we(Ue, K),
    S = He({ syncState: d, detectedItems: b, histories: x }),
    [C, w] = (0, Zn.useState)(!1),
    [T, E] = (0, Zn.useState)(!1),
    [D, k] = (0, Zn.useState)(!1),
    A = Le.filter((e) => qt({ preferences: l, syncState: d, itemType: e, itemTypes: S }) !== !1),
    j = u && d?.version === 1 && d.providerIds.length > 0,
    P = s,
    F = A.map(Yn),
    I;
  r[7] !== P || r[8] !== F
    ? ((I = (0, Q.jsx)(P, { type: `conjunction`, value: F })), (r[7] = P), (r[8] = F), (r[9] = I))
    : (I = r[9]);
  let L = I;
  if (l === `all`) {
    let e;
    (r[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(f, {
          id: `settings.import.autosync.allCategoriesSummary`,
          defaultMessage: `All categories, including new ones`,
          description: `Summary when automatic import sync includes every category, even categories detected in the future`,
        })),
        (r[10] = e))
      : (e = r[10]),
      (L = e));
  } else if (A.length === 0) {
    let e;
    (r[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(f, {
          id: `settings.import.autosync.noneSelected`,
          defaultMessage: `No content selected`,
          description: `Summary when no categories are selected for automatic import sync`,
        })),
        (r[11] = e))
      : (e = r[11]),
      (L = e));
  } else if (A.length === 1 && A[0] === `SESSIONS`) {
    let e;
    (r[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(f, {
          id: `settings.import.autosync.chatsOnly`,
          defaultMessage: `Chats only`,
          description: `Summary when conversation history is the only category selected for automatic import sync`,
        })),
        (r[12] = e))
      : (e = r[12]),
      (L = e));
  } else if (A.length > 3) {
    let e;
    (r[13] === A.length
      ? (e = r[14])
      : ((e = (0, Q.jsx)(f, {
          id: `settings.import.autosync.selectedCount`,
          defaultMessage: `{count} categories selected`,
          description: `Number of content categories selected for automatic import sync`,
          values: { count: A.length },
        })),
        (r[13] = A.length),
        (r[14] = e)),
      (L = e));
  }
  let R;
  r[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(it.Header, {
        title: (0, Q.jsx)(f, {
          id: `settings.import.autosync.title`,
          defaultMessage: `Automatic sync`,
          description: `Heading for the external agent import autosync settings`,
        }),
      })),
      (r[15] = R))
    : (R = r[15]);
  let z;
  r[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Q.jsx)(f, {
        id: `settings.import.autosync.label`,
        defaultMessage: `Keep imports in sync`,
        description: `Label for the external agent import autosync setting`,
      })),
      (r[16] = z))
    : (z = r[16]);
  let B;
  r[17] === c
    ? (B = r[18])
    : ((B = c
        ? (0, Q.jsx)(f, {
            id: `settings.import.autosync.description`,
            defaultMessage: `Automatically sync new and updated content from connected sources`,
            description: `Description for the external agent import autosync setting`,
          })
        : (0, Q.jsx)(f, {
            id: `settings.import.autosync.paused`,
            defaultMessage: `Sync paused. Your content selections are saved`,
            description: `Explains that automatic imports are paused without discarding category preferences`,
          })),
      (r[17] = c),
      (r[18] = B));
  let V;
  r[19] !== a || r[20] !== k || r[21] !== u || r[22] !== c
    ? ((V = (e) =>
        (0, Q.jsx)(ne, {
          ...e,
          checked: c,
          disabled: !u,
          onChange: (e) => {
            (k(!1),
              ue(a, M.syncEnabled, e).catch(() => {
                k(!0);
              }));
          },
        })),
      (r[19] = a),
      (r[20] = k),
      (r[21] = u),
      (r[22] = c),
      (r[23] = V))
    : (V = r[23]);
  let H;
  r[24] !== B || r[25] !== V
    ? ((H = (0, Q.jsx)(q, { label: z, description: B, control: V })), (r[24] = B), (r[25] = V), (r[26] = H))
    : (H = r[26]);
  let U;
  r[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Q.jsx)(f, { ...Vn.content })), (r[27] = U))
    : (U = r[27]);
  let W;
  r[28] !== L || r[29] !== d
    ? ((W =
        d == null || d.providerIds.length === 0
          ? (0, Q.jsx)(f, {
              id: `settings.import.autosync.afterImport`,
              defaultMessage: `Available after your first import`,
              description: `Explains that automatic import category preferences become editable after an import connects a source`,
            })
          : L),
      (r[28] = L),
      (r[29] = d),
      (r[30] = W))
    : (W = r[30]);
  let G;
  r[31] !== T || r[32] !== w
    ? ((G = (e) => {
        T || w(e);
      }),
      (r[31] = T),
      (r[32] = w),
      (r[33] = G))
    : (G = r[33]);
  let ee = !j,
    te;
  r[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Q.jsx)(f, {
        id: `settings.import.autosync.customize`,
        defaultMessage: `Customize`,
        description: `Open a dialog to choose the content categories for automatic import sync`,
      })),
      (r[34] = te))
    : (te = r[34]);
  let re;
  r[35] === ee
    ? (re = r[36])
    : ((re = (0, Q.jsx)(t, { color: `secondary`, size: `toolbar`, disabled: ee, children: te })),
      (r[35] = ee),
      (r[36] = re));
  let ie;
  r[37] !== C ||
  r[38] !== T ||
  r[39] !== S ||
  r[40] !== l ||
  r[41] !== a ||
  r[42] !== w ||
  r[43] !== E ||
  r[44] !== d
    ? ((ie = C
        ? (0, Q.jsx)(Un, {
            itemTypes: S,
            initialPreferences: l,
            isSaving: T,
            syncState: d,
            onCancel: () => w(!1),
            onSave: (e) => (
              E(!0),
              ue(a, M.syncItemTypes, e)
                .then(() => {
                  w(!1);
                })
                .finally(() => {
                  E(!1);
                })
            ),
          })
        : null),
      (r[37] = C),
      (r[38] = T),
      (r[39] = S),
      (r[40] = l),
      (r[41] = a),
      (r[42] = w),
      (r[43] = E),
      (r[44] = d),
      (r[45] = ie))
    : (ie = r[45]);
  let oe;
  r[46] !== C || r[47] !== T || r[48] !== G || r[49] !== re || r[50] !== ie
    ? ((oe = (0, Q.jsx)(ae, {
        open: C,
        onOpenChange: G,
        shouldIgnoreClickOutside: T,
        showDialogClose: !1,
        size: `xwide`,
        triggerContent: re,
        children: ie,
      })),
      (r[46] = C),
      (r[47] = T),
      (r[48] = G),
      (r[49] = re),
      (r[50] = ie),
      (r[51] = oe))
    : (oe = r[51]);
  let se;
  r[52] !== W || r[53] !== oe
    ? ((se = (0, Q.jsx)(q, { label: U, description: W, control: oe })),
      (r[52] = W),
      (r[53] = oe),
      (r[54] = se))
    : (se = r[54]);
  let ce;
  r[55] !== H || r[56] !== se
    ? ((ce = (0, Q.jsx)(it.Content, { children: (0, Q.jsxs)(le, { children: [H, se] }) })),
      (r[55] = H),
      (r[56] = se),
      (r[57] = ce))
    : (ce = r[57]);
  let de;
  r[58] === D
    ? (de = r[59])
    : ((de = D
        ? (0, Q.jsx)(it.Footer, {
            children: (0, Q.jsx)(`span`, {
              className: `text-danger`,
              role: `alert`,
              children: (0, Q.jsx)(f, {
                id: `settings.import.autosync.toggleError`,
                defaultMessage: `Couldn’t change automatic sync. Try again`,
                description: `Error shown when the automatic import sync switch could not be saved`,
              }),
            }),
          })
        : null),
      (r[58] = D),
      (r[59] = de));
  let fe;
  return (
    r[60] !== ce || r[61] !== de
      ? ((fe = (0, Q.jsxs)(it, { className: `select-none`, children: [R, ce, de] })),
        (r[60] = ce),
        (r[61] = de),
        (r[62] = fe))
      : (fe = r[62]),
    fe
  );
}
function Yn(e) {
  return (0, Q.jsx)(f, { ...zn[e] }, e);
}
var Xn, Zn, Q;
function Qn() {
  return (Qn = e(() => {
    ((Xn = ye()),
      b(),
      fe(),
      (Zn = Ce()),
      te(),
      me(),
      _e(),
      v(),
      ot(),
      Tt(),
      Ht(),
      Wt(),
      De(),
      St(),
      xe(),
      k(),
      ke(),
      ee(),
      m(),
      Mt(),
      _t(),
      qn(),
      Hn(),
      (Q = Se()));
  }))();
}
function $n() {
  let e = (0, ir.c)(76),
    n = At(Ut),
    r = O(Rt),
    i = r == null,
    a = O(tt),
    o = O(xt),
    s;
  e[0] !== o || e[1] !== a
    ? ((s = a?.type === `local` ? (o[a.projectId]?.rootPaths ?? []) : []), (e[0] = o), (e[1] = a), (e[2] = s))
    : (s = e[2]);
  let c = s,
    l = O(Dt),
    u = O(Ne),
    { data: d, error: p, isLoading: m, refetch: h } = we(Ue, K),
    g;
  e[3] === d ? (g = e[4]) : ((g = d?.some(nr) ?? !1), (e[3] = d), (e[4] = g));
  let _ = g,
    v;
  e[5] === d ? (v = e[6]) : ((v = d ?? []), (e[5] = d), (e[6] = v));
  let y;
  e[7] === v ? (y = e[8]) : ((y = at(v)), (e[7] = v), (e[8] = y));
  let b = y,
    { data: x } = we(ht, K),
    { data: S } = we(qe, K),
    C;
  e[9] !== S || e[10] !== x?.connectors
    ? ((C = x?.connectors == null && S == null ? void 0 : [...(x?.connectors ?? []), ...(S ?? [])]),
      (e[9] = S),
      (e[10] = x?.connectors),
      (e[11] = C))
    : (C = e[11]);
  let w = (C?.length ?? 0) > 0,
    T;
  e[12] === w ? (T = e[13]) : ((T = { enabled: w, hostId: K }), (e[12] = w), (e[13] = T));
  let { hardRefetchAppsList: E, loadError: D } = Pt(T),
    k = we(sn, K),
    A = k.status === `ready` && k.data.kind === `plugin-directory`,
    j;
  e[14] === A ? (j = e[15]) : ((j = { enabled: A }), (e[14] = A), (e[15] = j));
  let { availablePlugins: M, errorMessage: N, isLoading: P, refetch: F } = yt(K, void 0, j),
    I;
  e[16] !== M || e[17] !== k || e[18] !== P || e[19] !== N || e[20] !== F
    ? ((I = ln({
        inputsResult: k,
        pluginDirectory: { errorMessage: N, isLoading: P, plugins: M, refetch: F },
      })),
      (e[16] = M),
      (e[17] = k),
      (e[18] = P),
      (e[19] = N),
      (e[20] = F),
      (e[21] = I))
    : (I = e[21]);
  let L = I,
    R = L.data,
    z;
  e[22] === b ? (z = e[23]) : ((z = { enabled: b }), (e[22] = b), (e[23] = z));
  let { data: B, error: V, refetch: H } = we(ze, K, z),
    U = Ie({ histories: d ?? [], runningImport: u?.hostId === `local` ? u : null }),
    W = Ee(U),
    [G, ee] = (0, ar.useState)(!1),
    [te, ne] = (0, ar.useState)(!1),
    re = te ? U : W,
    ie;
  e[24] === d ? (ie = e[25]) : ((ie = d?.find(tr)), (e[24] = d), (e[25] = ie));
  let ae = ie,
    oe;
  e[26] === R?.appsRequiringConnection
    ? (oe = e[27])
    : ((oe = R?.appsRequiringConnection ?? []), (e[26] = R?.appsRequiringConnection), (e[27] = oe));
  let se = oe,
    ce = D == null ? L.status : `error`,
    ue;
  e[28] !== d || e[29] !== B?.data
    ? ((ue = Qe({ histories: d ?? [], mcpServerStatuses: B?.data ?? [] })),
      (e[28] = d),
      (e[29] = B?.data),
      (e[30] = ue))
    : (ue = e[30]);
  let de = ue,
    fe;
  e[31] === d ? (fe = e[32]) : ((fe = d ?? []), (e[31] = d), (e[32] = fe));
  let pe;
  e[33] === fe ? (pe = e[34]) : ((pe = Fe(fe)), (e[33] = fe), (e[34] = pe));
  let me = pe,
    he = B?.data,
    ge;
  e[35] !== d || e[36] !== p || e[37] !== V || e[38] !== he
    ? ((ge = Kt({ histories: d, historiesError: p, mcpServerStatuses: he, mcpServerStatusesError: V })),
      (e[35] = d),
      (e[36] = p),
      (e[37] = V),
      (e[38] = he),
      (e[39] = ge))
    : (ge = e[39]);
  let _e = ge,
    ve = (_ || w) && ce !== `ready`,
    ye = b && _e !== `ready`,
    be = ye && _e === `error`,
    xe = (R?.importedPlugins.length ?? 0) > 0 || se.length > 0 || ve || de.length > 0 || me || be,
    Se = bt,
    Ce;
  e[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, $.jsx)(vt, { slug: `import` })), (e[40] = Ce))
    : (Ce = e[40]);
  let Te;
  e[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, $.jsx)(f, {
        id: `settings.import.subtitle.v2`,
        defaultMessage: `Bring setup, projects, and chats from other AI apps into {appName}`,
        description: `Subtitle explaining that this page imports configuration, projects, and chat history from other AI coding apps into the named Codex app`,
        values: { appName: Me },
      })),
      (e[41] = Te))
    : (Te = e[41]);
  let De;
  e[42] !== c || e[43] !== r || e[44] !== n
    ? ((De = n ? (0, $.jsx)(Jn, { workspaceRoots: r == null ? void 0 : c }) : null),
      (e[42] = c),
      (e[43] = r),
      (e[44] = n),
      (e[45] = De))
    : (De = e[45]);
  let Oe = i || l || m,
    ke = ae == null ? null : Number(ae.completedAtMs),
    Ae = r == null ? void 0 : c,
    je;
  e[46] !== Oe || e[47] !== ke || e[48] !== Ae
    ? ((je = (0, $.jsx)(fn, {
        isImportContextLoading: Oe,
        latestSuccessfulImportAtMs: ke,
        workspaceRoots: Ae,
      })),
      (e[46] = Oe),
      (e[47] = ke),
      (e[48] = Ae),
      (e[49] = je))
    : (je = e[49]);
  let Pe;
  e[50] !== D ||
  e[51] !== se ||
  e[52] !== E ||
  e[53] !== me ||
  e[54] !== b ||
  e[55] !== G ||
  e[56] !== ce ||
  e[57] !== de ||
  e[58] !== _e ||
  e[59] !== R?.importedPlugins ||
  e[60] !== L ||
  e[61] !== h ||
  e[62] !== H ||
  e[63] !== xe ||
  e[64] !== ve ||
  e[65] !== be ||
  e[66] !== ye
    ? ((Pe =
        xe || G
          ? (0, $.jsx)(rr, {
              appsRequiringConnection: se,
              hardRefetchAppsList: E,
              hasImportedHooks: me,
              hasImportedMcpServers: b,
              importedConnectorDiscoveryStatus: ce,
              importedMcpServerNamesRequiringAuthentication: de,
              importedMcpSetupStatus: _e,
              importedPlugins: R?.importedPlugins ?? [],
              retryImportHistories: () => {
                h();
              },
              retryImportedApps: () => {
                (L.status === `error` && L.retry(), D != null && E().catch(er));
              },
              retryMcpServerStatuses: () => {
                H();
              },
              onSetupStarted: () => {
                ee(!0);
              },
              shouldShowImportedConnectorStatus: ve,
              shouldShowMcpServerError: be,
              shouldShowMcpServerStatus: ye,
            })
          : null),
      (e[50] = D),
      (e[51] = se),
      (e[52] = E),
      (e[53] = me),
      (e[54] = b),
      (e[55] = G),
      (e[56] = ce),
      (e[57] = de),
      (e[58] = _e),
      (e[59] = R?.importedPlugins),
      (e[60] = L),
      (e[61] = h),
      (e[62] = H),
      (e[63] = xe),
      (e[64] = ve),
      (e[65] = be),
      (e[66] = ye),
      (e[67] = Pe))
    : (Pe = e[67]);
  let Le =
      U.length > 0 || m || p != null
        ? (0, $.jsxs)(it, {
            children: [
              (0, $.jsx)(it.Header, {
                title: (0, $.jsx)(f, {
                  id: `settings.import.history.latestTitle`,
                  defaultMessage: `Import history`,
                  description: `Heading for external agent import results`,
                }),
              }),
              (0, $.jsxs)(it.Content, {
                children: [
                  re.map((e) =>
                    (0, $.jsx)(
                      wn,
                      {
                        defaultExpanded: e.kind === `completed` && W.includes(e),
                        entry: e,
                        mcpServerStatuses: B?.data ?? [],
                      },
                      e.kind === `running` ? `running-${e.runningImport.startedAtMs}` : e.history.importId,
                    ),
                  ),
                  re.length < U.length
                    ? (0, $.jsx)(`div`, {
                        className: `flex justify-center`,
                        children: (0, $.jsx)(t, {
                          color: `secondary`,
                          size: `toolbar`,
                          onClick: () => {
                            ne(!0);
                          },
                          children: (0, $.jsx)(f, {
                            id: `settings.import.history.viewMore`,
                            defaultMessage: `View more`,
                            description: `Button label to reveal older external agent import history`,
                          }),
                        }),
                      })
                    : null,
                  m
                    ? (0, $.jsx)(le, {
                        children: (0, $.jsx)($t, {
                          children: (0, $.jsx)(f, {
                            id: `settings.import.history.loading`,
                            defaultMessage: `Loading import history`,
                            description: `Label shown while import history is loading`,
                          }),
                        }),
                      })
                    : d == null && p != null
                      ? (0, $.jsx)(le, {
                          children: (0, $.jsx)(q, {
                            label: (0, $.jsx)(f, {
                              id: `settings.import.history.error`,
                              defaultMessage: `Couldn't load import history`,
                              description: `Error shown when import history cannot be loaded`,
                            }),
                            control: (0, $.jsx)(t, {
                              color: `secondary`,
                              size: `toolbar`,
                              onClick: () => {
                                h();
                              },
                              children: (0, $.jsx)(f, {
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
    Re;
  return (
    e[68] !== Se ||
    e[69] !== Ce ||
    e[70] !== Te ||
    e[71] !== De ||
    e[72] !== je ||
    e[73] !== Pe ||
    e[74] !== Le
      ? ((Re = (0, $.jsxs)(Se, { title: Ce, subtitle: Te, children: [De, je, Pe, Le] })),
        (e[68] = Se),
        (e[69] = Ce),
        (e[70] = Te),
        (e[71] = De),
        (e[72] = je),
        (e[73] = Pe),
        (e[74] = Le),
        (e[75] = Re))
      : (Re = e[75]),
    Re
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
  let n = (0, ir.c)(46),
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
      retryImportedApps: p,
      retryMcpServerStatuses: m,
      shouldShowImportedConnectorStatus: h,
      shouldShowMcpServerError: g,
      shouldShowMcpServerStatus: _,
      onSetupStarted: v,
    } = e,
    [y, b] = (0, ar.useState)(`apps`),
    x;
  n[0] !== i || n[1] !== o || n[2] !== d || n[3] !== p || n[4] !== m
    ? ((x = {
        hardRefetchAppsList: i,
        hasImportedMcpServers: o,
        hostId: K,
        retryImportHistories: d,
        retryImportedApps: p,
        retryMcpServerStatuses: m,
      }),
      (n[0] = i),
      (n[1] = o),
      (n[2] = d),
      (n[3] = p),
      (n[4] = m),
      (n[5] = x))
    : (x = n[5]);
  let {
      clearConnectingApp: S,
      connectedApps: C,
      connectingApp: w,
      handleAppConnectOAuthStarted: T,
      handleAppConnected: E,
      handleAuthenticateMcp: D,
      handleConnectApp: O,
      handleInstallPlugin: k,
      handleOpenHooksSettings: A,
      handleRetry: j,
      isAppConnectPending: M,
    } = nn(x),
    N = h ? s : `ready`,
    P = _ ? l : `ready`,
    F;
  n[6] !== N || n[7] !== P
    ? ((F = { apps: N, hooks: `ready`, mcps: P }), (n[6] = N), (n[7] = P), (n[8] = F))
    : (F = n[8]);
  let I = F,
    L;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, $.jsx)(it.Header, {
        title: (0, $.jsx)(f, {
          id: `settings.import.attention.title`,
          defaultMessage: `Needs attention`,
          description: `Heading for imported setup that needs review or authentication`,
        }),
        subtitle: (0, $.jsx)(f, {
          id: `settings.import.attention.subtitle`,
          defaultMessage: `Finish setting up items from a previous import`,
          description: `Subtitle for imported setup that needs review or authentication`,
        }),
      })),
      (n[9] = L))
    : (L = n[9]);
  let R;
  n[10] !== m || n[11] !== g
    ? ((R = g
        ? (0, $.jsx)(q, {
            label: (0, $.jsx)(f, {
              id: `settings.import.attention.mcps.error`,
              defaultMessage: `Couldn't check imported MCP servers`,
              description: `Error shown when Codex cannot determine whether imported MCP servers need authentication`,
            }),
            control: (0, $.jsx)(t, {
              color: `secondary`,
              size: `toolbar`,
              onClick: m,
              children: (0, $.jsx)(f, {
                id: `settings.import.attention.mcps.retry`,
                defaultMessage: `Retry`,
                description: `Button label to retry checking whether imported MCP servers need authentication`,
              }),
            }),
          })
        : null),
      (n[10] = m),
      (n[11] = g),
      (n[12] = R))
    : (R = n[12]);
  let z;
  n[13] !== O || n[14] !== v
    ? ((z = (e) => (v(), O(e))), (n[13] = O), (n[14] = v), (n[15] = z))
    : (z = n[15]);
  let B;
  n[16] !== k || n[17] !== v
    ? ((B = (e, t) => {
        (v(), k(e, t));
      }),
      (n[16] = k),
      (n[17] = v),
      (n[18] = B))
    : (B = n[18]);
  let V;
  n[19] !== r ||
  n[20] !== C ||
  n[21] !== D ||
  n[22] !== A ||
  n[23] !== j ||
  n[24] !== a ||
  n[25] !== c ||
  n[26] !== u ||
  n[27] !== M ||
  n[28] !== y ||
  n[29] !== z ||
  n[30] !== B ||
  n[31] !== I
    ? ((V = (0, $.jsx)(an, {
        appsRequiringConnection: r,
        connectedApps: C,
        hasImportedHooks: a,
        importedPlugins: u,
        isAppConnectPending: M,
        mcpServerNamesRequiringAuthentication: c,
        selectedTab: y,
        tabStatus: I,
        variant: `settings`,
        onConnectApp: z,
        onInstallPlugin: B,
        onOpenHooksSettings: A,
        onAuthenticateMcp: D,
        onRetry: j,
        onSelectTab: b,
      })),
      (n[19] = r),
      (n[20] = C),
      (n[21] = D),
      (n[22] = A),
      (n[23] = j),
      (n[24] = a),
      (n[25] = c),
      (n[26] = u),
      (n[27] = M),
      (n[28] = y),
      (n[29] = z),
      (n[30] = B),
      (n[31] = I),
      (n[32] = V))
    : (V = n[32]);
  let H;
  n[33] !== R || n[34] !== V
    ? ((H = (0, $.jsxs)(it, {
        children: [L, (0, $.jsx)(it.Content, { children: (0, $.jsxs)(le, { children: [R, V] }) })],
      })),
      (n[33] = R),
      (n[34] = V),
      (n[35] = H))
    : (H = n[35]);
  let U;
  n[36] === S
    ? (U = n[37])
    : ((U = (e) => {
        e || S();
      }),
      (n[36] = S),
      (n[37] = U));
  let W;
  n[38] !== w || n[39] !== T || n[40] !== E || n[41] !== U
    ? ((W = (0, $.jsx)(Zt, { app: w, hostId: K, onOpenChange: U, onOAuthStarted: T, onConnected: E })),
      (n[38] = w),
      (n[39] = T),
      (n[40] = E),
      (n[41] = U),
      (n[42] = W))
    : (W = n[42]);
  let G;
  return (
    n[43] !== H || n[44] !== W
      ? ((G = (0, $.jsxs)($.Fragment, { children: [H, W] })), (n[43] = H), (n[44] = W), (n[45] = G))
      : (G = n[45]),
    G
  );
}
var ir, ar, $;
function or() {
  return (or = e(() => {
    ((ir = ye()),
      b(),
      (ar = Ce()),
      te(),
      Be(),
      ut(),
      me(),
      ot(),
      rn(),
      et(),
      Ot(),
      cn(),
      on(),
      ft(),
      Pe(),
      kt(),
      lt(),
      Xt(),
      ke(),
      Qt(),
      ee(),
      It(),
      m(),
      Mt(),
      _t(),
      _n(),
      Rn(),
      Qn(),
      ($ = Se()));
  }))();
}
or();
export { $n as ImportSettings };
//# sourceMappingURL=import-settings-b20488a510b5.js.map
