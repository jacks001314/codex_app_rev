import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $W as n,
  $c as r,
  A as i,
  A3t as a,
  AKt as o,
  AMt as s,
  Aj as c,
  Amn as l,
  Ayt as u,
  B6t as d,
  BW as f,
  CPt as p,
  Cj as m,
  Cpn as h,
  Cpt as g,
  Ct as _,
  DKt as v,
  EPt as y,
  Eln as b,
  FI as x,
  FW as S,
  Fj as C,
  GW as w,
  Gyt as T,
  HW as E,
  Hb as D,
  IW as O,
  IXt as k,
  Ij as A,
  JS as j,
  JW as M,
  Jit as ee,
  Jrt as te,
  Js as ne,
  KW as re,
  KYt as N,
  Kit as P,
  Ks as ie,
  LW as F,
  LXt as ae,
  M6t as I,
  MKt as L,
  MMt as R,
  MW as oe,
  Mj as z,
  N3t as se,
  N6t as ce,
  NW as B,
  Nvt as V,
  O3t as H,
  OKt as le,
  Opn as ue,
  PI as U,
  PW as de,
  QW as fe,
  QXt as pe,
  Qc as W,
  RW as me,
  Rpn as he,
  Rvt as G,
  SPt as ge,
  Sj as _e,
  Sln as ve,
  Spn as ye,
  St as be,
  TPt as xe,
  Trn as Se,
  Uat as K,
  Ust as Ce,
  Uyt as we,
  Vat as Te,
  Vst as Ee,
  WW as De,
  Wb as Oe,
  XS as q,
  XW as ke,
  Xrt as Ae,
  YW as je,
  Yrt as Me,
  Ys as Ne,
  ZW as Pe,
  Zrt as Fe,
  _$t as Ie,
  a3t as Le,
  aYt as Re,
  aft as ze,
  ayt as Be,
  bJt as Ve,
  bt as He,
  cR as Ue,
  d$t as We,
  dbt as Ge,
  dit as Ke,
  dyt as qe,
  e0t as Je,
  e4t as J,
  eZt as Ye,
  eit as Xe,
  f$t as Ze,
  fit as Qe,
  fk as $e,
  g$t as et,
  gMt as tt,
  gPt as nt,
  hMt as rt,
  hmn as it,
  iit as at,
  j as ot,
  jMt as st,
  jXt as ct,
  jln as lt,
  kMt as ut,
  kXt as dt,
  kmn as ft,
  krn as pt,
  kyt as mt,
  m$t as ht,
  m1 as gt,
  nH as _t,
  nit as vt,
  nln as yt,
  o3t as bt,
  oft as xt,
  ov as St,
  p$t as Ct,
  p1 as wt,
  pPt as Tt,
  pk as Et,
  qW as Dt,
  qs as Ot,
  rit as kt,
  rq as At,
  rrn as jt,
  sR as Mt,
  sYt as Nt,
  sv as Pt,
  tH as Ft,
  tit as It,
  ttn as Lt,
  u$t as Rt,
  ubt as zt,
  uq as Bt,
  v$t as Vt,
  vln as Ht,
  wPt as Ut,
  wpt as Wt,
  wt as Gt,
  xJt as Kt,
  xpn as qt,
  xt as Jt,
  y$t as Yt,
  yt as Xt,
  zW as Zt,
  zpn as Qt,
} from "./app-initial-f094ef01c64d.js";
import {
  AS as $t,
  Eg as en,
  Fg as tn,
  Ig as nn,
  Lg as rn,
  Ng as an,
  Pg as on,
  Tg as sn,
  _d as cn,
  gd as ln,
  kS as un,
} from "./app-primary-4c40d73a1074.js";
import { n as dn, t as fn } from "./model-and-reasoning-effort-translations-550629a13cba.js";
import { n as pn, t as mn } from "./codex-pet-assets-16127cbc3056.js";
import { n as hn, t as gn } from "./lock-light-16-53cceab671fe.js";
import { i as _n, n as vn, r as yn, t as bn } from "./twitter-6618edee0f61.js";
import { n as xn, t as Sn } from "./plus-sm-f82863230f20.js";
import { n as Cn, t as wn } from "./use-avatar-options-25c4fda3035d.js";
function Tn() {
  let e = (0, Dn.c)(20),
    t = a(Le),
    n = ue(),
    { accountId: r, authMethod: i, userId: o } = Ge(),
    { data: s } = Bt(),
    c;
  e[0] !== r || e[1] !== s
    ? ((c = s?.id === r ? an(s.structure) : null), (e[0] = r), (e[1] = s), (e[2] = c))
    : (c = e[2]);
  let l = c,
    u;
  e[3] !== r || e[4] !== l || e[5] !== n.locale || e[6] !== o
    ? ((u = { accountId: r, context: l, locale: n.locale, userId: o }),
      (e[3] = r),
      (e[4] = l),
      (e[5] = n.locale),
      (e[6] = o),
      (e[7] = u))
    : (u = e[7]);
  let d = u,
    f = i === `chatgpt`,
    p;
  e[8] === f ? (p = e[9]) : ((p = { enabled: f }), (e[8] = f), (e[9] = p));
  let { data: m } = se(nn, d, p),
    h = i === `chatgpt`,
    g;
  e[10] === h ? (g = e[11]) : ((g = { enabled: h }), (e[10] = h), (e[11] = g));
  let { data: _, isError: v } = se(rn, d, g),
    y = _ ?? m;
  if (i !== `chatgpt` || l == null || v || y?.should_show !== !0) return null;
  let b = _ == null,
    x;
  e[12] !== l || e[13] !== y || e[14] !== t
    ? ((x = () => {
        K(t, sn, { context: l, eligibility: y });
      }),
      (e[12] = l),
      (e[13] = y),
      (e[14] = t),
      (e[15] = x))
    : (x = e[15]);
  let S;
  return (
    e[16] !== l || e[17] !== b || e[18] !== x
      ? ((S = (0, On.jsx)(En, { context: l, loading: b, onClick: x })),
        (e[16] = l),
        (e[17] = b),
        (e[18] = x),
        (e[19] = S))
      : (S = e[19]),
    S
  );
}
function En(e) {
  let t = (0, Dn.c)(10),
    { context: n, loading: r, onClick: i } = e,
    a = n.programId === `codex_referral_consumer`,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = r
        ? (0, On.jsx)(st, { as: `span`, className: `icon-xs` })
        : (0, On.jsx)(rt, { asset: cn })),
      (t[0] = r),
      (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, On.jsx)(`span`, {
        className: `min-[641px]:hidden`,
        children: (0, On.jsx)(h, {
          id: `codex.profile.invite`,
          defaultMessage: `Invite`,
          description: `Compact button label for inviting someone from the profile page`,
        }),
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === a
    ? (c = t[4])
    : ((c = (0, On.jsx)(`span`, {
        className: `max-[640px]:hidden`,
        children: a
          ? (0, On.jsx)(h, {
              id: `codex.profile.inviteFriend`,
              defaultMessage: `Invite a friend`,
              description: `Button label for inviting a friend from the profile page`,
            })
          : (0, On.jsx)(h, {
              id: `codex.profile.inviteCoworker`,
              defaultMessage: `Invite a coworker`,
              description: `Button label for inviting a coworker from the profile page`,
            }),
      })),
      (t[3] = a),
      (t[4] = c));
  let l;
  return (
    t[5] !== r || t[6] !== i || t[7] !== o || t[8] !== c
      ? ((l = (0, On.jsxs)(ut, {
          "aria-busy": r,
          className: `h-7`,
          color: `ghostActive`,
          disabled: r,
          size: `toolbar`,
          onClick: i,
          children: [o, s, c],
        })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = o),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
var Dn,
  On,
  kn = e(() => {
    ((Dn = ft()),
      ln(),
      H(),
      ye(),
      zt(),
      At(),
      s(),
      tt(),
      Te(),
      R(),
      bt(),
      on(),
      en(),
      tn(),
      (On = it()));
  });
function An(e) {
  let t = (0, In.c)(46),
    { insights: n, plugins: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = r === void 0 ? [] : r), (t[0] = r), (t[1] = i));
  let a = i,
    o = ue(),
    s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(_e, { "aria-hidden": !0, className: `icon-xs` })), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Y.jsx)(h, {
        id: `profile.activity.plugins.empty`,
        defaultMessage: `No plugins used yet ·`,
        description: `Empty state for the most used plugins on the profile page`,
      })),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Y.jsxs)(Y.Fragment, {
        children: [
          s,
          (0, Y.jsxs)(`div`, {
            className: `flex items-center gap-1`,
            children: [
              c,
              (0, Y.jsx)(ae, {
                className: `cursor-interaction !text-tertiary underline underline-offset-2 hover:!text-secondary`,
                to: `/skills`,
                children: (0, Y.jsx)(h, {
                  id: `profile.activity.plugins.browse`,
                  defaultMessage: `Browse`,
                  description: `Link to browse plugins from the profile activity empty state`,
                }),
              }),
            ],
          }),
        ],
      })),
      (t[4] = l))
    : (l = t[4]);
  let u, d, f;
  t[5] === o
    ? ((u = t[6]), (d = t[7]), (f = t[8]))
    : ((u = (e) => o.formatNumber(e)),
      (d = (e) => o.formatNumber(e / 100, { maximumFractionDigits: 0, style: `percent` })),
      (f = (e) =>
        o.formatMessage(
          {
            id: `profile.activity.plugins.runs`,
            defaultMessage: `{runs, plural, one {# run} other {# runs}}`,
            description: `Run count shown for a plugin on the profile page`,
          },
          { runs: e },
        )),
      (t[5] = o),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f));
  let p;
  t[9] === o
    ? (p = t[10])
    : ((p = o.formatMessage({
        id: `profile.activity.ariaLabel`,
        defaultMessage: `Codex activity`,
        description: `Accessible label for the Codex activity profile section`,
      })),
      (t[9] = o),
      (t[10] = p));
  let m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Y.jsx)(h, {
        id: `profile.activity.features.fastMode`,
        defaultMessage: `Fast Mode`,
        description: `Fast Mode feature label on the profile page`,
      })),
      (t[11] = m))
    : (m = t[11]);
  let g;
  t[12] === o
    ? (g = t[13])
    : ((g = o.formatMessage({
        id: `profile.activity.features.fastModeTooltip`,
        defaultMessage: `How often you use /fast mode`,
        description: `Tooltip explaining the Fast Mode profile metric`,
      })),
      (t[12] = o),
      (t[13] = g));
  let _, v;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Y.jsx)(h, {
        id: `profile.activity.insights.title`,
        defaultMessage: `Activity insights`,
        description: `Heading for Codex activity insights on the profile page`,
      })),
      (v = (0, Y.jsx)(h, {
        id: `profile.activity.features.mostUsedReasoning`,
        defaultMessage: `Most used reasoning`,
        description: `Most used reasoning effort feature label on the profile page`,
      })),
      (t[14] = _),
      (t[15] = v))
    : ((_ = t[14]), (v = t[15]));
  let y;
  t[16] === o
    ? (y = t[17])
    : ((y = o.formatMessage({
        id: `profile.activity.features.reasoningEffortTooltip`,
        defaultMessage: `Your most used reasoning effort`,
        description: `Tooltip explaining the reasoning effort profile metric`,
      })),
      (t[16] = o),
      (t[17] = y));
  let b, x, C, w;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Y.jsx)(h, {
        id: `profile.activity.features.none`,
        defaultMessage: `None`,
        description: `Empty count metric value on the profile page`,
      })),
      (x = (0, Y.jsx)(h, {
        id: `profile.activity.features.notUsed`,
        defaultMessage: `Not used`,
        description: `Empty activity metric value on the profile page`,
      })),
      (C = (0, Y.jsx)(h, {
        id: `profile.activity.plugins.title`,
        defaultMessage: `Most used plugins`,
        description: `Heading for the most used Codex plugins on the profile page`,
      })),
      (w = (0, Y.jsx)(h, {
        id: `profile.activity.features.skillsExplored`,
        defaultMessage: `Skills explored`,
        description: `Unique skills explored feature label on the profile page`,
      })),
      (t[18] = b),
      (t[19] = x),
      (t[20] = C),
      (t[21] = w))
    : ((b = t[18]), (x = t[19]), (C = t[20]), (w = t[21]));
  let T;
  t[22] === o
    ? (T = t[23])
    : ((T = o.formatMessage({
        id: `profile.activity.features.skillsExploredTooltip`,
        defaultMessage: `The number of unique skills you've used`,
        description: `Tooltip explaining the skills explored profile metric`,
      })),
      (t[22] = o),
      (t[23] = T));
  let E;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Y.jsx)(h, {
        id: `profile.activity.features.totalSkillsUsed`,
        defaultMessage: `Total skills used`,
        description: `Total skills used feature label on the profile page`,
      })),
      (t[24] = E))
    : (E = t[24]);
  let D;
  t[25] === o
    ? (D = t[26])
    : ((D = o.formatMessage({
        id: `profile.activity.features.totalSkillsUsedTooltip`,
        defaultMessage: `Total times Codex used a skill`,
        description: `Tooltip explaining the total skills used profile metric`,
      })),
      (t[25] = o),
      (t[26] = D));
  let O;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Y.jsx)(h, {
        id: `profile.activity.features.totalThreads`,
        defaultMessage: `Total chats`,
        description: `Total chats feature label on the profile page`,
      })),
      (t[27] = O))
    : (O = t[27]);
  let k;
  t[28] === o
    ? (k = t[29])
    : ((k = o.formatMessage({
        id: `profile.activity.features.totalThreadsTooltip`,
        defaultMessage: `Total unique conversations with Codex`,
        description: `Tooltip explaining the total tasks profile metric`,
      })),
      (t[28] = o),
      (t[29] = k));
  let A;
  t[30] !== g || t[31] !== y || t[32] !== T || t[33] !== D || t[34] !== k || t[35] !== p
    ? ((A = {
        ariaLabel: p,
        fastModeLabel: m,
        fastModeTooltip: g,
        insightsTitle: _,
        mostUsedReasoningLabel: v,
        mostUsedReasoningTooltip: y,
        none: b,
        notUsed: x,
        pluginsTitle: C,
        skillsExploredLabel: w,
        skillsExploredTooltip: T,
        totalSkillsUsedLabel: E,
        totalSkillsUsedTooltip: D,
        totalThreadsLabel: O,
        totalThreadsTooltip: k,
      }),
      (t[30] = g),
      (t[31] = y),
      (t[32] = T),
      (t[33] = D),
      (t[34] = k),
      (t[35] = p),
      (t[36] = A))
    : (A = t[36]);
  let j;
  t[37] === a
    ? (j = t[38])
    : ((j = (e) => {
        let { invocation: t, name: n } = e;
        return (0, Y.jsx)(Pn, { name: n, plugin: Fn(t, a), pluginId: t.plugin_id, type: t.type });
      }),
      (t[37] = a),
      (t[38] = j));
  let M;
  return (
    t[39] !== n || t[40] !== A || t[41] !== j || t[42] !== u || t[43] !== d || t[44] !== f
      ? ((M = (0, Y.jsx)(S, {
          emptyInvocations: l,
          formatNumber: u,
          formatPercent: d,
          formatRuns: f,
          insights: n,
          messages: A,
          renderFeatureValue: Mn,
          renderInvocationIcon: j,
          renderReasoningEffort: jn,
        })),
        (t[39] = n),
        (t[40] = A),
        (t[41] = j),
        (t[42] = u),
        (t[43] = d),
        (t[44] = f),
        (t[45] = M))
      : (M = t[45]),
    M
  );
}
function jn(e) {
  return (0, Y.jsx)(Nn, { effort: e });
}
function Mn(e) {
  let { children: t, tooltip: n } = e;
  return (0, Y.jsx)(P, {
    delayDuration: 250,
    disablePadding: !0,
    side: `top`,
    tooltipClassName: `flex h-[38px] items-center gap-2.5 p-2`,
    tooltipContent: n,
    children: (0, Y.jsx)(`button`, {
      type: `button`,
      "aria-label": n,
      className: `inline-block rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
      children: t,
    }),
  });
}
function Nn(e) {
  let t = (0, In.c)(4),
    { effort: n } = e;
  switch (n) {
    case `none`:
    case `minimal`:
    case `low`:
    case `medium`:
    case `high`:
    case `xhigh`:
    case `max`:
    case `ultra`:
    case `persistent`: {
      let e;
      return (
        t[0] === n ? (e = t[1]) : ((e = (0, Y.jsx)(fn, { effort: n })), (t[0] = n), (t[1] = e)), e
      );
    }
    default: {
      let e;
      return (
        t[2] === n
          ? (e = t[3])
          : ((e = (0, Y.jsx)(Y.Fragment, { children: n })), (t[2] = n), (t[3] = e)),
        e
      );
    }
  }
}
function Pn(e) {
  let t = (0, In.c)(11),
    { name: n, plugin: r, pluginId: i, type: a } = e,
    o;
  t[0] !== n || t[1] !== a
    ? ((o =
        a === `plugin`
          ? (0, Ln.createElement)(_e, { "aria-hidden": !0, className: `icon-sm` })
          : (0, Ln.createElement)(c(null, { fallbackName: n }), { className: `icon-sm` })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s = o;
  if (r?.logoPath != null || r?.logoDarkPath != null) {
    let e;
    return (
      t[3] !== s || t[4] !== r.logoDarkPath || t[5] !== r.logoPath
        ? ((e = (0, Y.jsx)($e, {
            alt: ``,
            className: `icon-sm`,
            fallback: s,
            logoDarkUrl: r.logoDarkPath,
            logoUrl: r.logoPath,
          })),
          (t[3] = s),
          (t[4] = r.logoDarkPath),
          (t[5] = r.logoPath),
          (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  if (r == null) {
    let e;
    if (t[7] !== n || t[8] !== i || t[9] !== a) {
      e = Symbol.for(`react.early_return_sentinel`);
      bb0: {
        let t = Ee(i?.split(`@`)[0] ?? (a === `skill` ? n.split(`:`)[0] : n));
        if (t != null) {
          e = (0, Ln.createElement)(t, { "aria-hidden": !0, className: `icon-sm` });
          break bb0;
        }
      }
      ((t[7] = n), (t[8] = i), (t[9] = a), (t[10] = e));
    } else e = t[10];
    if (e !== Symbol.for(`react.early_return_sentinel`)) return e;
  }
  return s;
}
function Fn(e, t) {
  if (e.plugin_id) {
    let n = t.find((t) => t.plugin.id === e.plugin_id);
    if (n != null) return n;
  }
  let n = e.plugin_name ?? (e.type === `skill` ? e.skill_name?.split(`:`)[0] : null);
  return t.find((e) => e.plugin.name === n) ?? null;
}
var In,
  Ln,
  Y,
  Rn = e(() => {
    ((In = ft()), de(), (Ln = t(l(), 1)), ye(), k(), Ce(), dn(), Et(), ee(), m(), z(), (Y = it()));
  }),
  zn,
  Bn,
  Vn = e(() => {
    (l(),
      (zn = it()),
      (Bn = (e) =>
        (0, zn.jsx)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, zn.jsx)(`path`, {
            d: `M11.6002 7.46777L11.7072 7.47871C11.9497 7.52826 12.1322 7.74266 12.1322 7.9998C12.1322 8.25695 11.9497 8.47135 11.7072 8.5209L11.6002 8.53184H4.4002C4.10638 8.53184 3.86816 8.29362 3.86816 7.9998C3.86816 7.70599 4.10638 7.46777 4.4002 7.46777H11.6002Z`,
            fill: `currentColor`,
          }),
        })));
  });
function Hn(e) {
  let t = (0, Qn.c)(99),
    { source: n, onCancel: r, onSave: i } = e,
    a = ue(),
    [o, s] = (0, $n.useState)(null),
    [c, l] = (0, $n.useState)(null),
    [u, d] = (0, $n.useState)(!1),
    [f, p] = (0, $n.useState)(!1),
    m;
  t[0] === o
    ? (m = t[1])
    : ((m = o == null ? 1 : Wn(o.naturalWidth, o.naturalHeight)), (t[0] = o), (t[1] = m));
  let g = m,
    _ = o == null ? 1 : o.zoom / g,
    v;
  t[2] !== o || t[3] !== g
    ? ((v = (e) => {
        o != null && s(qn(o, g * e));
      }),
      (t[2] = o),
      (t[3] = g),
      (t[4] = v))
    : (v = t[4]);
  let y = v,
    b;
  t[5] !== o || t[6] !== f || t[7] !== i || t[8] !== n
    ? ((b = async () => {
        if (!(o == null || f)) {
          (p(!0), d(!1));
          try {
            let e = await Jn(n, o);
            (p(!1), i(e));
          } catch {
            (p(!1), d(!0));
          }
        }
      }),
      (t[5] = o),
      (t[6] = f),
      (t[7] = i),
      (t[8] = n),
      (t[9] = b))
    : (b = t[9]);
  let x = b,
    S;
  t[10] !== f || t[11] !== r
    ? ((S = (e) => {
        !e && !f && r();
      }),
      (t[10] = f),
      (t[11] = r),
      (t[12] = S))
    : (S = t[12]);
  let C = !f,
    w;
  t[13] === x
    ? (w = t[14])
    : ((w = (e) => {
        (e.preventDefault(), x());
      }),
      (t[13] = x),
      (t[14] = w));
  let T;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, X.jsx)(kt, { className: `sr-only`, children: (0, X.jsx)(h, { ...lr.title }) })),
      (t[15] = T))
    : (T = t[15]);
  let E;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, X.jsx)(vt, {
        className: `sr-only`,
        children: (0, X.jsx)(h, {
          id: `profile.photoCrop.description`,
          defaultMessage: `Drag the image to reposition it, and adjust zoom with the slider`,
          description: `Description for the profile picture crop dialog`,
        }),
      })),
      (t[16] = E))
    : (E = t[16]);
  let D;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, X.jsx)(Ae, { title: (0, X.jsx)(h, { ...lr.title }) })), (t[17] = D))
    : (D = t[17]);
  let O;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { maxWidth: tr }), (t[18] = O))
    : (O = t[18]);
  let k;
  t[19] !== o || t[20] !== n.dataUrl
    ? ((k =
        o == null
          ? null
          : (0, X.jsx)(`div`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute inset-0 z-0 overflow-hidden`,
              style: { WebkitMaskImage: cr, maskImage: cr },
              children: (0, X.jsxs)(`div`, {
                className: `absolute top-0 left-0 overflow-hidden`,
                style: {
                  height: o.naturalHeight * o.zoom,
                  transform: `translate(${rr + o.offsetX}px, ${rr + o.offsetY}px)`,
                  width: o.naturalWidth * o.zoom,
                },
                children: [
                  (0, X.jsx)(`img`, {
                    src: n.dataUrl,
                    alt: ``,
                    className: `block max-w-none select-none`,
                    draggable: !1,
                    style: {
                      filter: `blur(${sr}px)`,
                      height: `calc(100% + ${sr * 2}px)`,
                      transform: `translate(-2px, -2px)`,
                      width: `calc(100% + ${sr * 2}px)`,
                    },
                  }),
                  (0, X.jsx)(`div`, {
                    className: `absolute inset-0 bg-[color-mix(in_srgb,var(--color-surface)_80%,transparent)]`,
                  }),
                ],
              }),
            })),
      (t[19] = o),
      (t[20] = n.dataUrl),
      (t[21] = k))
    : (k = t[21]);
  let A;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = { height: er, width: er }), (t[22] = A))
    : (A = t[22]);
  let j;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (e) => {
        s(Un(e.currentTarget.naturalWidth, e.currentTarget.naturalHeight));
      }),
      (t[23] = j))
    : (j = t[23]);
  let M;
  t[24] === o
    ? (M = t[25])
    : ((M = (e) => {
        o != null &&
          (e.currentTarget.setPointerCapture(e.pointerId),
          l({
            offsetX: o.offsetX,
            offsetY: o.offsetY,
            pointerId: e.pointerId,
            pointerX: e.clientX,
            pointerY: e.clientY,
          }));
      }),
      (t[24] = o),
      (t[25] = M));
  let ee;
  t[26] === c
    ? (ee = t[27])
    : ((ee = (e) => {
        c != null &&
          e.pointerId === c.pointerId &&
          s((t) =>
            t == null
              ? t
              : {
                  ...t,
                  offsetX: Kn(c.offsetX + e.clientX - c.pointerX, t.naturalWidth, t.zoom),
                  offsetY: Kn(c.offsetY + e.clientY - c.pointerY, t.naturalHeight, t.zoom),
                },
          );
      }),
      (t[26] = c),
      (t[27] = ee));
  let ne, re;
  t[28] === c?.pointerId
    ? ((ne = t[29]), (re = t[30]))
    : ((ne = (e) => {
        e.pointerId === c?.pointerId && l(null);
      }),
      (re = (e) => {
        e.pointerId === c?.pointerId && l(null);
      }),
      (t[28] = c?.pointerId),
      (t[29] = ne),
      (t[30] = re));
  let N;
  t[31] === o
    ? (N = t[32])
    : ((N =
        o == null
          ? void 0
          : {
              height: o.naturalHeight * o.zoom,
              transform: `translate(${o.offsetX}px, ${o.offsetY}px)`,
              width: o.naturalWidth * o.zoom,
            }),
      (t[31] = o),
      (t[32] = N));
  let P;
  t[33] !== n.dataUrl || t[34] !== M || t[35] !== ee || t[36] !== ne || t[37] !== re || t[38] !== N
    ? ((P = (0, X.jsx)(`div`, {
        className: `relative z-10 overflow-hidden rounded-full bg-surface-secondary/92 ring-1 ring-border-subtle`,
        style: A,
        children: (0, X.jsx)(`img`, {
          src: n.dataUrl,
          alt: ``,
          className: `absolute top-0 left-0 max-h-none max-w-none cursor-interaction touch-none select-none`,
          draggable: !1,
          onLoad: j,
          onPointerDown: M,
          onPointerMove: ee,
          onPointerUp: ne,
          onPointerCancel: re,
          style: N,
        }),
      })),
      (t[33] = n.dataUrl),
      (t[34] = M),
      (t[35] = ee),
      (t[36] = ne),
      (t[37] = re),
      (t[38] = N),
      (t[39] = P))
    : (P = t[39]);
  let ie;
  t[40] !== k || t[41] !== P
    ? ((ie = (0, X.jsx)(Fe, {
        className: `items-center`,
        children: (0, X.jsxs)(`div`, {
          className: `relative isolate flex aspect-square w-full items-center justify-center`,
          style: O,
          children: [k, P],
        }),
      })),
      (t[40] = k),
      (t[41] = P),
      (t[42] = ie))
    : (ie = t[42]);
  let F;
  t[43] === a
    ? (F = t[44])
    : ((F = a.formatMessage({
        id: `profile.photoCrop.zoomOut`,
        defaultMessage: `Zoom out`,
        description: `Accessible label for the profile picture zoom out button`,
      })),
      (t[43] = a),
      (t[44] = F));
  let ae = o == null || f || _ <= 1,
    I;
  t[45] !== y || t[46] !== _
    ? ((I = () => {
        y(Math.max(1, _ - 0.1));
      }),
      (t[45] = y),
      (t[46] = _),
      (t[47] = I))
    : (I = t[47]);
  let L;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, X.jsx)(Bn, { className: `icon-2xs` })), (t[48] = L))
    : (L = t[48]);
  let R;
  t[49] !== F || t[50] !== ae || t[51] !== I
    ? ((R = (0, X.jsx)(ut, {
        "aria-label": F,
        color: `ghost`,
        disabled: ae,
        size: `iconMd`,
        onClick: I,
        children: L,
      })),
      (t[49] = F),
      (t[50] = ae),
      (t[51] = I),
      (t[52] = R))
    : (R = t[52]);
  let oe;
  t[53] === a
    ? (oe = t[54])
    : ((oe = a.formatMessage({
        id: `profile.photoCrop.zoomLabel`,
        defaultMessage: `Zoom profile picture`,
        description: `Accessible label for the profile picture crop zoom slider`,
      })),
      (t[53] = a),
      (t[54] = oe));
  let z = o == null || f,
    se;
  t[55] === y
    ? (se = t[56])
    : ((se = (e) => {
        y(Number(e.target.value));
      }),
      (t[55] = y),
      (t[56] = se));
  let ce;
  t[57] !== oe || t[58] !== z || t[59] !== se || t[60] !== _
    ? ((ce = (0, X.jsx)(`input`, {
        type: `range`,
        "aria-label": oe,
        className: `h-0.5 flex-1 appearance-none rounded-full bg-border-subtle [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-strong [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-strong [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger`,
        disabled: z,
        min: 1,
        max: 3,
        step: 0.01,
        value: _,
        onChange: se,
      })),
      (t[57] = oe),
      (t[58] = z),
      (t[59] = se),
      (t[60] = _),
      (t[61] = ce))
    : (ce = t[61]);
  let B;
  t[62] === a
    ? (B = t[63])
    : ((B = a.formatMessage({
        id: `profile.photoCrop.zoomIn`,
        defaultMessage: `Zoom in`,
        description: `Accessible label for the profile picture zoom in button`,
      })),
      (t[62] = a),
      (t[63] = B));
  let V = o == null || f || _ >= 3,
    H;
  t[64] !== y || t[65] !== _
    ? ((H = () => {
        y(Math.min(3, _ + 0.1));
      }),
      (t[64] = y),
      (t[65] = _),
      (t[66] = H))
    : (H = t[66]);
  let le;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, X.jsx)(Sn, { className: `icon-2xs` })), (t[67] = le))
    : (le = t[67]);
  let U;
  t[68] !== B || t[69] !== V || t[70] !== H
    ? ((U = (0, X.jsx)(ut, {
        "aria-label": B,
        color: `ghost`,
        disabled: V,
        size: `iconMd`,
        onClick: H,
        children: le,
      })),
      (t[68] = B),
      (t[69] = V),
      (t[70] = H),
      (t[71] = U))
    : (U = t[71]);
  let de;
  t[72] !== R || t[73] !== ce || t[74] !== U
    ? ((de = (0, X.jsx)(Fe, {
        className: `relative z-10 items-center`,
        children: (0, X.jsxs)(`div`, {
          className: `flex w-full max-w-[276px] items-center gap-5`,
          children: [R, ce, U],
        }),
      })),
      (t[72] = R),
      (t[73] = ce),
      (t[74] = U),
      (t[75] = de))
    : (de = t[75]);
  let fe;
  t[76] === u
    ? (fe = t[77])
    : ((fe = u
        ? (0, X.jsx)(Fe, {
            className: `items-center`,
            children: (0, X.jsx)(`div`, {
              className: `text-center text-sm leading-5 text-danger`,
              role: `alert`,
              children: (0, X.jsx)(h, {
                id: `profile.photoCrop.error`,
                defaultMessage: `Unable to process the profile picture`,
                description: `Error shown when profile picture cropping fails`,
              }),
            }),
          })
        : null),
      (t[76] = u),
      (t[77] = fe));
  let pe;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, X.jsx)(h, {
        id: `profile.photoCrop.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels profile picture cropping`,
      })),
      (t[78] = pe))
    : (pe = t[78]);
  let W;
  t[79] !== f || t[80] !== r
    ? ((W = (0, X.jsx)(ut, { color: `ghost`, disabled: f, onClick: r, children: pe })),
      (t[79] = f),
      (t[80] = r),
      (t[81] = W))
    : (W = t[81]);
  let me = o == null,
    he;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, X.jsx)(h, {
        id: `profile.photoCrop.save`,
        defaultMessage: `Save`,
        description: `Button that saves a cropped profile picture`,
      })),
      (t[82] = he))
    : (he = t[82]);
  let G;
  t[83] !== f || t[84] !== me
    ? ((G = (0, X.jsx)(ut, {
        type: `submit`,
        color: `primary`,
        disabled: me,
        loading: f,
        children: he,
      })),
      (t[83] = f),
      (t[84] = me),
      (t[85] = G))
    : (G = t[85]);
  let ge;
  t[86] !== W || t[87] !== G
    ? ((ge = (0, X.jsxs)(Me, { children: [W, G] })), (t[86] = W), (t[87] = G), (t[88] = ge))
    : (ge = t[88]);
  let _e;
  t[89] !== ie || t[90] !== de || t[91] !== fe || t[92] !== ge || t[93] !== w
    ? ((_e = (0, X.jsxs)(te, {
        as: `form`,
        className: `gap-5`,
        onSubmit: w,
        children: [T, E, D, ie, de, fe, ge],
      })),
      (t[89] = ie),
      (t[90] = de),
      (t[91] = fe),
      (t[92] = ge),
      (t[93] = w),
      (t[94] = _e))
    : (_e = t[94]);
  let ve;
  return (
    t[95] !== S || t[96] !== _e || t[97] !== C
      ? ((ve = (0, X.jsx)(It, {
          open: !0,
          onOpenChange: S,
          showDialogClose: C,
          size: `default`,
          children: _e,
        })),
        (t[95] = S),
        (t[96] = _e),
        (t[97] = C),
        (t[98] = ve))
      : (ve = t[98]),
    ve
  );
}
function Un(e, t) {
  let n = Wn(e, t);
  return { naturalHeight: t, naturalWidth: e, offsetX: Gn(e, n), offsetY: Gn(t, n), zoom: n };
}
function Wn(e, t) {
  return Math.max(er / e, er / t);
}
function Gn(e, t) {
  return (er - e * t) / 2;
}
function Kn(e, t, n) {
  return Math.min(0, Math.max(er - t * n, e));
}
function qn(e, t) {
  let n = (er / 2 - e.offsetX) / e.zoom,
    r = (er / 2 - e.offsetY) / e.zoom;
  return {
    ...e,
    offsetX: Kn(er / 2 - n * t, e.naturalWidth, t),
    offsetY: Kn(er / 2 - r * t, e.naturalHeight, t),
    zoom: t,
  };
}
async function Jn(e, t) {
  let n = await Yn(e.dataUrl),
    r = document.createElement(`canvas`);
  ((r.height = nr), (r.width = nr));
  let i = r.getContext(`2d`);
  if (i == null) throw Error(`Unable to create profile photo crop canvas`);
  i.drawImage(n, -t.offsetX / t.zoom, -t.offsetY / t.zoom, er / t.zoom, er / t.zoom, 0, 0, nr, nr);
  let a = Zn(e.contentType),
    o = r.toDataURL(a, 0.92),
    s = await Xn(r, a);
  return { photo: new File([s], e.filename, { type: s.type }), previewUrl: o };
}
function Yn(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.onload = () => {
      t(r);
    }),
      (r.onerror = () => {
        n(Error(`Unable to load profile photo`));
      }),
      (r.src = e));
  });
}
function Xn(e, t) {
  return new Promise((n, r) => {
    e.toBlob(
      (e) => {
        if (e == null) {
          r(Error(`Unable to crop profile photo`));
          return;
        }
        n(e);
      },
      t,
      0.92,
    );
  });
}
function Zn(e) {
  return e === `image/png` || e === `image/webp` ? e : `image/jpeg`;
}
var Qn,
  $n,
  X,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur = e(() => {
    ((Qn = ft()),
      ($n = t(l(), 1)),
      ye(),
      s(),
      at(),
      Xe(),
      Vn(),
      xn(),
      (X = it()),
      (er = 220),
      (tr = 360),
      (nr = 512),
      (rr = (tr - er) / 2),
      (ir = er / 2),
      (ar = tr / 2),
      (or = ar - 32),
      (sr = 2),
      (cr = `radial-gradient(circle at center, transparent 0 ${ir - 0.5}px, black ${ir}px ${or}px, transparent ${ar}px)`),
      (lr = qt({
        title: {
          id: `profile.photoCrop.title`,
          defaultMessage: `Adjust your image`,
          description: `Title for the profile picture crop dialog`,
        },
      })));
  }),
  dr,
  fr = e(() => {
    dr = `` + new URL(`OpenAISans-Medium-7b9c963f9063.woff2`, import.meta.url).href;
  }),
  pr,
  mr = e(() => {
    pr = `` + new URL(`OpenAISans-Regular-c56711d328c4.woff2`, import.meta.url).href;
  }),
  hr,
  gr = e(() => {
    hr = `<svg width="92" height="28" viewBox="0 0 92 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_934_12058)">
<path d="M11.9434 0.430908C13.7624 0.431247 15.4294 1.09161 16.7158 2.18188C17.1422 2.10495 17.584 2.06277 18.0322 2.06274C22.11 2.0642 25.4164 5.37117 25.417 9.44946C25.4169 9.89743 25.3728 10.3366 25.2959 10.762C26.3869 12.0489 27.0486 13.7176 27.0488 15.5374C27.0482 18.7417 25.0061 21.4654 22.1562 22.4885C21.1331 25.3386 18.4094 27.3806 15.2051 27.3811C13.3855 27.3809 11.7185 26.7191 10.4316 25.6282C10.0059 25.705 9.56539 25.7491 9.11719 25.7493C5.03873 25.7487 1.73312 22.4413 1.73242 18.3625C1.73247 17.9141 1.77453 17.4743 1.85156 17.0481C0.83754 15.8516 0.194518 14.3264 0.109375 12.6555L0.0986328 12.2747C0.0989925 9.07057 2.13971 6.34328 4.98926 5.31958C6.01324 2.47012 8.73955 0.430975 11.9434 0.430908ZM11.9434 2.59985C9.53065 2.59992 7.49693 4.23961 6.90137 6.46704C6.80098 6.84049 6.5082 7.13327 6.13477 7.23364C3.90815 7.82949 2.26795 9.86235 2.26758 12.2747C2.26791 13.7154 2.85272 15.0198 3.79785 15.9651C4.07029 16.2386 4.17665 16.6379 4.07715 17.011C3.962 17.4422 3.89948 17.896 3.89941 18.3625C3.90012 21.2437 6.23609 23.5797 9.11719 23.5803C9.58367 23.5802 10.0384 23.5198 10.4697 23.4045L10.6113 23.3762C10.9409 23.3342 11.2757 23.4453 11.5146 23.6838C12.4599 24.6287 13.7645 25.2111 15.2051 25.2112C17.6173 25.2107 19.6506 23.5723 20.2461 21.345L20.292 21.2083C20.4202 20.9003 20.6853 20.6662 21.0127 20.5784C23.2396 19.9828 24.8802 17.9494 24.8809 15.5374C24.8807 14.0967 24.2963 12.7921 23.3516 11.8469C23.0782 11.5733 22.9726 11.1737 23.0723 10.8C23.1875 10.3688 23.2488 9.91531 23.249 9.44946C23.2484 6.56834 20.9112 4.23251 18.0303 4.23169C17.5631 4.23177 17.1084 4.29242 16.6777 4.40747C16.3048 4.50684 15.9063 4.40063 15.6328 4.12817C14.747 3.24249 13.5458 2.67278 12.2129 2.60474L11.9434 2.59985ZM71.5488 20.428H69.127V19.3098C68.5117 20.1111 67.3381 20.6145 66.1279 20.6145C63.5186 20.6145 61.4688 18.5649 61.4688 15.7708C61.4688 12.9765 63.5199 10.927 66.1279 10.927C67.376 10.927 68.5118 11.3173 69.127 12.0999V7.38501H71.5488V20.428ZM43.4658 7.19751C46.6147 7.19769 49.1299 9.15467 49.5967 11.8381H46.9316C46.5403 10.6077 45.2165 9.60083 43.5029 9.60083C41.1554 9.6009 39.4972 11.4086 39.4971 13.9045C39.4971 16.4019 41.1555 18.2092 43.541 18.2092C45.2545 18.2092 46.5592 17.2208 47.0059 15.9729H49.6514C49.1482 18.6928 46.6887 20.6135 43.4844 20.6135C39.6093 20.6135 36.9073 17.6152 36.9072 13.9075C36.9072 10.1973 39.6838 7.19751 43.4658 7.19751ZM55.5059 10.9241C58.281 10.9242 60.4246 13.1222 60.4248 15.7678C60.4248 18.4135 58.2824 20.6134 55.5059 20.6135C52.7306 20.6135 50.5861 18.4141 50.5859 15.7698C50.5859 13.1226 52.7305 10.9241 55.5059 10.9241ZM77.7354 10.9241C80.6416 10.9241 82.4121 13.0484 82.4121 15.5823V16.5334H75.3701C75.5941 17.7812 76.5439 18.6563 77.793 18.6565C78.7995 18.6565 79.6373 18.1722 79.9355 17.4827H82.3008C81.8164 19.1408 80.2513 20.6135 77.8105 20.6135C74.8292 20.6133 73.0041 18.507 73.0039 15.7698C73.0039 12.9931 75.0895 10.9242 77.7354 10.9241ZM87.5 13.9807L89.4375 11.1116H92.1016L88.8955 15.6565L92.249 20.426H89.3984L87.3857 17.4631L85.2998 20.426L82.6172 20.427L85.9902 15.7317L82.7109 11.1106H85.5625L87.5 13.9807ZM66.5381 13.0315C65.1591 13.0316 63.9287 14.1126 63.9287 15.7708C63.9288 17.429 65.1594 18.51 66.5371 18.51C67.9159 18.5099 69.1464 17.4276 69.1465 15.7708C69.1465 14.1139 67.9157 13.0315 66.5381 13.0315ZM55.5059 13.0842C54.2214 13.0842 52.9902 14.1287 52.9902 15.7668C52.9902 17.4074 54.2211 18.4504 55.5068 18.4504L55.7461 18.4387C56.9406 18.3179 58.0215 17.3036 58.0215 15.7668C58.0215 14.1276 56.7916 13.0844 55.5059 13.0842ZM8.25098 9.57251C8.76529 9.26426 9.43267 9.43133 9.74121 9.94556L11.7822 13.3479C11.9883 13.6917 11.9886 14.1223 11.7822 14.4661L9.74121 17.8674C9.43268 18.3811 8.76506 18.5491 8.25098 18.2415C7.73681 17.9329 7.56986 17.2645 7.87793 16.7502L9.58301 13.9055L7.87793 11.0618C7.56977 10.5476 7.7371 9.88117 8.25098 9.57251ZM19.0176 16.2219C19.6172 16.2219 20.103 16.7084 20.1035 17.3079C20.1035 17.9078 19.6175 18.3948 19.0176 18.3948H14.9346C14.3347 18.3948 13.8486 17.9078 13.8486 17.3079C13.849 16.7084 14.335 16.2219 14.9346 16.2219H19.0176ZM77.792 12.8811C76.6181 12.8812 75.6468 13.6636 75.3877 14.8186H80.1016C79.9708 13.6825 79.0401 12.8811 77.792 12.8811Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_934_12058">
<rect width="92" height="28" fill="white"/>
</clipPath>
</defs>
</svg>
`;
  });
function _r() {
  let e = document.documentElement,
    t = window.getComputedStyle(e),
    n = Pr(e);
  try {
    return {
      accentColor: Mr(t, n, `color`, [`--codex-base-accent`, `--color-text-info`], bi.accentColor),
      backgroundColor: Mr(
        t,
        n,
        `backgroundColor`,
        [`--codex-base-surface`, `--color-surface`],
        bi.backgroundColor,
      ),
      primaryTextColor: Mr(
        t,
        n,
        `color`,
        [`--codex-base-ink`, `--color-text`],
        bi.primaryTextColor,
      ),
      secondaryTextColor: Mr(
        t,
        n,
        `color`,
        [`--color-text-secondary`, `--color-codex-description`],
        bi.secondaryTextColor,
      ),
    };
  } finally {
    n.remove();
  }
}
async function vr({
  displayNameLabel: e,
  imageUrl: t,
  initials: n,
  pet: r,
  stats: i,
  theme: a,
  usernameLabel: o,
  usageCells: s,
}) {
  let c = await xr(
    {
      displayNameLabel: e,
      imageUrl: t,
      initials: n,
      stats: i,
      theme: a,
      usernameLabel: o,
      usageCells: s,
    },
    r != null,
  );
  return r == null ? Kr(c) : Sr(c, r);
}
async function yr(e) {
  let t = await xr(e, !0);
  return { createImageBlob: (e) => Sr(t, e) };
}
function br(e) {
  let t = URL.createObjectURL(e),
    n = document.createElement(`a`);
  ((n.href = t), (n.download = qr), n.click(), window.setTimeout(() => URL.revokeObjectURL(t), 0));
}
async function xr(
  {
    displayNameLabel: e,
    imageUrl: t,
    initials: n,
    stats: r,
    theme: i,
    usernameLabel: a,
    usageCells: o,
  },
  s,
) {
  let c = document.createElement(`canvas`);
  ((c.width = Jr * Xr), (c.height = Yr * Xr));
  let l = c.getContext(`2d`);
  if (l == null) throw Error(`Unable to create profile share card canvas`);
  let [u, d] = await Promise.all([
    t == null ? Promise.resolve(null) : Hr(t),
    Wr(Lr(i.secondaryTextColor), null),
    Cr(),
  ]);
  if (d == null) throw Error(`Unable to load Codex watermark`);
  let f = Nr(i);
  return (
    l.scale(Xr, Xr),
    Tr(l, i),
    Er(l, u, n, i),
    Or(l, e, a, i, s),
    kr(l, d),
    Ar(l, o, f.levelColors),
    jr(l, r, i, f.statDividerColor),
    c
  );
}
async function Sr(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = Jr * Xr), (n.height = Yr * Xr));
  let r = n.getContext(`2d`);
  if (r == null) throw Error(`Unable to create profile share card canvas`);
  return (
    r.drawImage(e, 0, 0), r.scale(Xr, Xr), Dr(r, await Hr(t.imageUrl), t.spriteVersionNumber), Kr(n)
  );
}
async function Cr() {
  (await Promise.all([wr(pr, `400`), wr(dr, `500`)]), await document.fonts.ready);
}
async function wr(e, t) {
  let n = new FontFace(si, `url(${e})`, { weight: t });
  (document.fonts.add(n), await n.load());
}
function Tr(e, t) {
  ((e.fillStyle = t.backgroundColor), e.fillRect(0, 0, Jr, Yr));
}
function Er(e, t, n, r) {
  let i = Zr,
    a = Zr;
  (e.save(),
    Br(e, i, a, Qr, Qr, Qr / 2),
    e.clip(),
    t == null
      ? ((e.fillStyle = r.accentColor),
        e.fillRect(i, a, Qr, Qr),
        (e.fillStyle = r.backgroundColor),
        (e.font = `500 16px 'OpenAI Sans', system-ui, sans-serif`),
        (e.textAlign = `center`),
        (e.textBaseline = `middle`),
        e.fillText(n, 58, 58))
      : zr(e, t, i, a, Qr, Qr),
    e.restore());
}
function Dr(e, t, n) {
  t != null &&
    (e.save(),
    (e.imageSmoothingEnabled = !1),
    e.drawImage(t, 0, 0, t.naturalWidth / ri, t.naturalHeight / xe(n), ti, ni, $r, ei),
    e.restore());
}
function Or(e, t, n, r, i) {
  let a = 84 + (i ? ii : 12),
    o = mi - a - 12;
  e.fillStyle = r.primaryTextColor;
  for (
    let n = ci;
    n >= li &&
    ((e.font = `500 ${n}px 'OpenAI Sans', system-ui, sans-serif`),
    !(n === li || e.measureText(t).width <= o));
    --n
  );
  ((e.textAlign = `left`),
    (e.textBaseline = `middle`),
    e.fillText(Vr(e, t, o), a, ui),
    (e.fillStyle = r.secondaryTextColor),
    (e.font = `400 ${di}px 'OpenAI Sans', system-ui, sans-serif`),
    e.fillText(Vr(e, n, o), a, fi));
}
function kr(e, t) {
  e.drawImage(t, mi, hi, ai, oi);
}
function Ar(e, t, n) {
  for (let r = 0; r < 182; r += 1) {
    let i = Math.floor(r / 7),
      a = r % 7,
      o = Zr + i * vi,
      s = gi + a * vi,
      c = t[r];
    c != null && ((e.fillStyle = n[c]), Br(e, o, s, _i, _i, 4), e.fill());
  }
}
function jr(e, t, n, r) {
  t.forEach((t, i) => {
    i > 0 && ((e.fillStyle = r), Br(e, Zr + i * yi, 234, 1, 40, 0.5), e.fill());
    let a = Zr + i * yi + yi / 2,
      o = yi - 8;
    ((e.fillStyle = n.primaryTextColor),
      (e.font = `500 18px 'OpenAI Sans', system-ui, sans-serif`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      e.fillText(Vr(e, t.value, o), a, 245),
      (e.fillStyle = n.secondaryTextColor),
      (e.font = `400 14px 'OpenAI Sans', system-ui, sans-serif`),
      e.fillText(Vr(e, t.label, o), a, 269));
  });
}
function Mr(e, t, n, r, i) {
  for (let i of r) {
    let r = e.getPropertyValue(i).trim();
    if (r.length === 0) continue;
    t.style[n] = `var(${i})`;
    let a = Fr(t, n);
    if (a != null) return a;
    if (!Ir(r)) return r;
  }
  return i;
}
function Nr(e) {
  let t = Pr(document.documentElement),
    n = (e) => ((t.style.color = e), Fr(t, `color`) ?? e);
  try {
    return {
      levelColors: {
        0: n(Rr(e.backgroundColor, e.primaryTextColor, xi[0])),
        1: n(Rr(e.backgroundColor, e.accentColor, xi[1])),
        2: n(Rr(e.backgroundColor, e.accentColor, xi[2])),
        3: n(Rr(e.backgroundColor, e.accentColor, xi[3])),
        4: e.accentColor,
      },
      statDividerColor: n(Rr(`transparent`, e.primaryTextColor, 0.06)),
    };
  } finally {
    t.remove();
  }
}
function Pr(e) {
  let t = document.createElement(`div`);
  return (
    (t.style.height = `0`),
    (t.style.inset = `0`),
    (t.style.opacity = `0`),
    (t.style.pointerEvents = `none`),
    (t.style.position = `absolute`),
    (t.style.width = `0`),
    (document.body ?? e).appendChild(t),
    t
  );
}
function Fr(e, t) {
  if (e.style[t].length === 0) return null;
  let n = window.getComputedStyle(e)[t].trim();
  return Ir(n) ? null : n;
}
function Ir(e) {
  return e.length === 0 || e.includes(`var(`);
}
function Lr(e) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(hr.replaceAll(`currentColor`, e))}`;
}
function Rr(e, t, n) {
  return `color-mix(in srgb, ${t} ${Math.round(n * 100)}%, ${e})`;
}
function zr(e, t, n, r, i, a) {
  let o = t.naturalWidth || t.width,
    s = t.naturalHeight || t.height,
    c = o / s,
    l = i / a,
    u = c > l ? s * l : o,
    d = c > l ? s : o / l,
    f = (o - u) / 2,
    p = (s - d) / 2;
  e.drawImage(t, f, p, u, d, n, r, i, a);
}
function Br(e, t, n, r, i, a) {
  (e.beginPath(),
    e.moveTo(t + a, n),
    e.lineTo(t + r - a, n),
    e.arcTo(t + r, n, t + r, n + a, a),
    e.lineTo(t + r, n + i - a),
    e.arcTo(t + r, n + i, t + r - a, n + i, a),
    e.lineTo(t + a, n + i),
    e.arcTo(t, n + i, t, n + i - a, a),
    e.lineTo(t, n + a),
    e.arcTo(t, n, t + a, n, a),
    e.closePath());
}
function Vr(e, t, n) {
  if (e.measureText(t).width <= n) return t;
  let r = t;
  for (; r.length > 1 && e.measureText(`${r}…`).width > n;) r = r.slice(0, -1);
  return `${r}…`;
}
async function Hr(e) {
  return (await Wr(e, Gr(e) ? `anonymous` : null)) ?? (await Ur(e));
}
async function Ur(e) {
  if (!Gr(e)) return null;
  try {
    let t = await Ve.getInstance().fetch(e),
      n = URL.createObjectURL(await t.blob());
    try {
      return await Wr(n, null);
    } finally {
      URL.revokeObjectURL(n);
    }
  } catch {
    return null;
  }
}
function Wr(e, t) {
  return new Promise((n) => {
    let r = new Image();
    (t != null && (r.crossOrigin = t),
      (r.onload = () => {
        n(r);
      }),
      (r.onerror = () => {
        n(null);
      }),
      (r.src = e));
  });
}
function Gr(e) {
  return /^https?:\/\//i.test(e);
}
function Kr(e) {
  return new Promise((t, n) => {
    e.toBlob((e) => {
      if (e == null) {
        n(Error(`Unable to create profile share card image`));
        return;
      }
      t(e);
    }, `image/png`);
  });
}
var qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si = e(() => {
    (fr(),
      mr(),
      y(),
      gr(),
      Kt(),
      Ne(),
      (qr = `codex-profile-card.png`),
      (Jr = 499),
      (Yr = 306),
      (Xr = 2),
      (Zr = 32),
      (Qr = 52),
      ($r = 36),
      (ei = 40),
      (ti = 74),
      (ni = 56),
      (ri = 8),
      (ii = 32),
      (ai = 92),
      (oi = 28),
      (si = `OpenAI Sans`),
      (ci = 20),
      (li = 15),
      (ui = 50),
      (di = 14),
      (fi = 70),
      (pi = Jr - Zr),
      (mi = pi - ai),
      (hi = 44),
      (gi = 96),
      (_i = 13.9),
      (vi = (pi - Zr - _i) / 25),
      (yi = (Jr - 2 * Zr) / 4),
      (bi = {
        accentColor: `#5865f2`,
        backgroundColor: `#ffffff`,
        primaryTextColor: `#0d0d0d`,
        secondaryTextColor: `#5d5d5d`,
      }),
      (xi = { 0: 0.1, 1: 0.28, 2: 0.45, 3: 0.68, 4: 1 }));
  }),
  Ci,
  wi,
  Ti = e(() => {
    (l(),
      (Ci = it()),
      (wi = (e) =>
        (0, Ci.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Ci.jsx)(`path`, {
            d: `M16.6337 2.90073C16.6337 4.04257 15.708 4.96822 14.5662 4.96822C13.5883 4.96822 12.769 4.28937 12.5539 3.37723C11.3544 3.54198 10.4276 4.57344 10.4276 5.81744L10.4275 5.82524C12.2767 5.89387 13.9672 6.41475 15.3066 7.24346C15.7984 6.86574 16.4141 6.64121 17.0822 6.64121C18.6936 6.64121 20 7.94757 20 9.55905C20 10.7212 19.3206 11.7247 18.3373 12.1939C18.2458 15.5849 14.5521 18.3126 10.0089 18.3126C5.46956 18.3126 1.77825 15.5894 1.68081 12.2025C0.687757 11.7369 0 10.7283 0 9.55905C0 7.94757 1.30636 6.64121 2.91785 6.64121C3.58954 6.64121 4.20823 6.86817 4.70139 7.24959C6.02803 6.42618 7.70059 5.90522 9.53121 5.82759L9.531 5.8186C9.531 4.084 10.853 2.65175 12.5422 2.47676C12.7378 1.53829 13.5697 0.833252 14.5662 0.833252C15.708 0.833252 16.6337 1.7589 16.6337 2.90073ZM5.97607 12.9003C6.79403 12.9003 7.49631 12.5185 7.5449 11.468V11.4692C7.59349 10.4186 6.96989 9.54167 6.15192 9.54167C5.33395 9.54167 4.63168 10.2289 4.58309 11.2794C4.5345 12.3299 5.1581 12.9003 5.97607 12.9003ZM14.0371 12.9003C14.8551 12.9003 15.4787 12.3299 15.4301 11.2794C15.3815 10.2289 14.6793 9.54167 13.8613 9.54167C13.0433 9.54167 12.4197 10.4186 12.4683 11.4692V11.468C12.5169 12.5185 13.2192 12.9003 14.0371 12.9003ZM10.0057 13.7172C8.99218 13.7172 8.02033 13.7669 7.12254 13.8583C6.96866 13.8734 6.87148 14.033 6.93164 14.1753C7.43492 15.3774 8.62195 16.222 10.0057 16.222C11.3894 16.222 12.5776 15.3774 13.0797 14.1753C13.1399 14.033 13.0415 13.8734 12.8888 13.8583C11.9899 13.7669 11.0192 13.7172 10.0057 13.7172Z`,
            fill: `currentColor`,
          }),
        })));
  });
function Ei(e) {
  let t = (0, Mi.c)(111),
    {
      imageUrl: n,
      isLoading: r,
      open: i,
      petSwitcher: a,
      selectedSocialPlatform: o,
      getSocialDraftUrl: s,
      onCopy: c,
      onDownload: l,
      onDismissShareInstructions: u,
      onOpenChange: d,
      onOpenSocialDraft: f,
      onSelectSocialPlatform: p,
    } = e,
    m = ue(),
    g = ve(0),
    _ = ve(0),
    v = Ht(g, Li),
    y = Ht(_, Li),
    x;
  t[0] !== g || t[1] !== _
    ? ((x = (e) => {
        let t = e.currentTarget.getBoundingClientRect(),
          n = Math.min(Math.max((e.clientX - t.left) / t.width, 0), 1),
          r = Math.min(Math.max((e.clientY - t.top) / t.height, 0), 1);
        (g.set(-(r * 2 - 1) * Ri), _.set((n * 2 - 1) * zi));
      }),
      (t[0] = g),
      (t[1] = _),
      (t[2] = x))
    : (x = t[2]);
  let S = x,
    C;
  t[3] !== g || t[4] !== _
    ? ((C = () => {
        (g.set(0), _.set(0));
      }),
      (t[3] = g),
      (t[4] = _),
      (t[5] = C))
    : (C = t[5]);
  let w = C,
    T;
  t[6] === w
    ? (T = t[7])
    : ((T = (e) => {
        let t = e.currentTarget.querySelector(`[data-profile-share-card-preview-hover-target]`);
        (e.target instanceof Node && t?.contains(e.target) === !0) || w();
      }),
      (t[6] = w),
      (t[7] = T));
  let E = T,
    D = o == null ? Bi : Vi,
    O;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Z.jsx)(kt, {
        className: `sr-only`,
        children: (0, Z.jsx)(h, {
          id: `profile.shareCard.preview.title`,
          defaultMessage: `Share profile card`,
          description: `Accessible title for the profile share card preview dialog`,
        }),
      })),
      (t[8] = O))
    : (O = t[8]);
  let k;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Z.jsx)(vt, {
        className: `sr-only`,
        children: (0, Z.jsx)(h, {
          id: `profile.shareCard.preview.description`,
          defaultMessage: `Preview your profile share card before sharing or saving it`,
          description: `Accessible description for the profile share card preview dialog`,
        }),
      })),
      (t[9] = k))
    : (k = t[9]);
  let A;
  t[10] === m
    ? (A = t[11])
    : ((A = m.formatMessage({
        id: `profile.shareCard.preview.close`,
        defaultMessage: `Close share preview`,
        description: `Accessible label for closing the profile share card preview`,
      })),
      (t[10] = m),
      (t[11] = A));
  let j;
  t[12] === d
    ? (j = t[13])
    : ((j = () => {
        d(!1);
      }),
      (t[12] = d),
      (t[13] = j));
  let M;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Z.jsx)(Ke, { "aria-hidden": !0, className: `icon-sm` })), (t[14] = M))
    : (M = t[14]);
  let ee;
  t[15] !== A || t[16] !== j
    ? ((ee = (0, Z.jsx)(ut, {
        "aria-label": A,
        className: `absolute top-5 right-5 z-10 size-8 !rounded-md`,
        color: `ghostActive`,
        size: `icon`,
        uniform: !0,
        onClick: j,
        children: M,
      })),
      (t[15] = A),
      (t[16] = j),
      (t[17] = ee))
    : (ee = t[17]);
  let te;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Z.jsx)(`h2`, {
        className: `shrink-0 text-center text-[24px] leading-8 font-normal text-default`,
        children: (0, Z.jsx)(h, {
          id: `profile.shareCard.preview.heading`,
          defaultMessage: `Share your activity`,
          description: `Visible heading for the profile share card preview dialog`,
        }),
      })),
      (t[18] = te))
    : (te = t[18]);
  let ne = o == null ? `mt-[50px]` : `mt-8`,
    re;
  t[19] === ne
    ? (re = t[20])
    : ((re = he(`flex flex-col items-center`, ne)), (t[19] = ne), (t[20] = re));
  let N;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = he(
        `aspect-[499/306] overflow-hidden rounded-[32px] bg-surface-elevated-secondary/90 will-change-transform [transform-style:preserve-3d]`,
        Ii,
      )),
      (t[21] = N))
    : (N = t[21]);
  let P;
  t[22] !== D || t[23] !== v || t[24] !== y
    ? ((P = { rotateX: v, rotateY: y, width: D }),
      (t[22] = D),
      (t[23] = v),
      (t[24] = y),
      (t[25] = P))
    : (P = t[25]);
  let ie;
  t[26] !== n || t[27] !== m
    ? ((ie =
        n == null
          ? (0, Z.jsx)(`div`, {
              role: `status`,
              "aria-label": m.formatMessage({
                id: `profile.shareCard.preview.loadingLabel`,
                defaultMessage: `Creating profile share card`,
                description: `Accessible label while the profile share card preview is being created`,
              }),
              className: `flex size-full items-center justify-center text-sm text-secondary`,
              children: (0, Z.jsx)(h, {
                id: `profile.shareCard.preview.loading`,
                defaultMessage: `Creating image…`,
                description: `Loading text shown while creating the profile share card preview`,
              }),
            })
          : (0, Z.jsx)(`img`, {
              src: n,
              alt: m.formatMessage({
                id: `profile.shareCard.preview.imageAlt`,
                defaultMessage: `Profile share card preview`,
                description: `Alt text for the generated profile share card preview image`,
              }),
              className: `block size-full object-contain`,
            })),
      (t[26] = n),
      (t[27] = m),
      (t[28] = ie))
    : (ie = t[28]);
  let F;
  t[29] !== P || t[30] !== ie
    ? ((F = (0, Z.jsx)(b.div, { className: N, style: P, children: ie })),
      (t[29] = P),
      (t[30] = ie),
      (t[31] = F))
    : (F = t[31]);
  let ae;
  t[32] !== w || t[33] !== S || t[34] !== F
    ? ((ae = (0, Z.jsx)(`div`, {
        "data-profile-share-card-preview-hover-target": !0,
        className: `w-fit [perspective:1200px] [transform-style:preserve-3d]`,
        onPointerEnter: S,
        onPointerLeave: w,
        onPointerMove: S,
        children: F,
      })),
      (t[32] = w),
      (t[33] = S),
      (t[34] = F),
      (t[35] = ae))
    : (ae = t[35]);
  let I;
  t[36] === a
    ? (I = t[37])
    : ((I =
        a == null
          ? null
          : (0, Z.jsx)(Oi, {
              disabled: a.disabled,
              isPetVisible: a.isPetVisible,
              petCount: a.petCount,
              petName: a.petName,
              petPosition: a.petPosition,
              onNext: a.onNext,
              onPrevious: a.onPrevious,
              onTogglePetVisibility: a.onTogglePetVisibility,
            })),
      (t[36] = a),
      (t[37] = I));
  let L;
  t[38] !== ae || t[39] !== I
    ? ((L = (0, Z.jsxs)(`div`, { className: `relative w-fit`, children: [ae, I] })),
      (t[38] = ae),
      (t[39] = I),
      (t[40] = L))
    : (L = t[40]);
  let R =
      a == null
        ? o == null
          ? `mt-[50px]`
          : `mt-8 mb-7`
        : o == null
          ? `mt-[60px]`
          : `mt-[60px] mb-7`,
    oe;
  t[41] === R
    ? (oe = t[42])
    : ((oe = he(`flex items-start justify-center gap-2 sm:gap-5`, R)), (t[41] = R), (t[42] = oe));
  let z;
  t[43] === m
    ? (z = t[44])
    : ((z = m.formatMessage({
        id: `profile.shareCard.preview.shareX`,
        defaultMessage: `Share to X`,
        description: `Accessible label for the X share button in the profile share card preview`,
      })),
      (t[43] = m),
      (t[44] = z));
  let se = o === `x`,
    ce = r || n == null,
    B;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Z.jsx)(h, {
        id: `profile.shareCard.preview.x`,
        defaultMessage: `X`,
        description: `X social platform name`,
      })),
      (t[45] = B))
    : (B = t[45]);
  let V;
  t[46] === p
    ? (V = t[47])
    : ((V = () => {
        p(`x`);
      }),
      (t[46] = p),
      (t[47] = V));
  let H;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Z.jsx)(bn, { "aria-hidden": !0, className: `icon-sm` })), (t[48] = H))
    : (H = t[48]);
  let le;
  t[49] !== z || t[50] !== se || t[51] !== ce || t[52] !== V
    ? ((le = (0, Z.jsx)(Di, {
        ariaLabel: z,
        active: se,
        disabled: ce,
        label: B,
        onClick: V,
        children: H,
      })),
      (t[49] = z),
      (t[50] = se),
      (t[51] = ce),
      (t[52] = V),
      (t[53] = le))
    : (le = t[53]);
  let U;
  t[54] === m
    ? (U = t[55])
    : ((U = m.formatMessage({
        id: `profile.shareCard.preview.shareLinkedIn`,
        defaultMessage: `Share to LinkedIn`,
        description: `Accessible label for the LinkedIn share button in the profile share card preview`,
      })),
      (t[54] = m),
      (t[55] = U));
  let de = o === `linkedin`,
    fe = r || n == null,
    pe;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, Z.jsx)(h, {
        id: `profile.shareCard.preview.linkedin`,
        defaultMessage: `LinkedIn`,
        description: `LinkedIn social platform name`,
      })),
      (t[56] = pe))
    : (pe = t[56]);
  let W;
  t[57] === p
    ? (W = t[58])
    : ((W = () => {
        p(`linkedin`);
      }),
      (t[57] = p),
      (t[58] = W));
  let me;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, Z.jsx)(yn, { "aria-hidden": !0, className: `icon-sm` })), (t[59] = me))
    : (me = t[59]);
  let G;
  t[60] !== U || t[61] !== de || t[62] !== fe || t[63] !== W
    ? ((G = (0, Z.jsx)(Di, {
        ariaLabel: U,
        active: de,
        disabled: fe,
        label: pe,
        onClick: W,
        children: me,
      })),
      (t[60] = U),
      (t[61] = de),
      (t[62] = fe),
      (t[63] = W),
      (t[64] = G))
    : (G = t[64]);
  let ge;
  t[65] === m
    ? (ge = t[66])
    : ((ge = m.formatMessage({
        id: `profile.shareCard.preview.shareReddit`,
        defaultMessage: `Share to Reddit`,
        description: `Accessible label for the Reddit share button in the profile share card preview`,
      })),
      (t[65] = m),
      (t[66] = ge));
  let _e = o === `reddit`,
    ye = r || n == null,
    be;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, Z.jsx)(h, {
        id: `profile.shareCard.preview.reddit`,
        defaultMessage: `Reddit`,
        description: `Reddit social platform name`,
      })),
      (t[67] = be))
    : (be = t[67]);
  let xe;
  t[68] === p
    ? (xe = t[69])
    : ((xe = () => {
        p(`reddit`);
      }),
      (t[68] = p),
      (t[69] = xe));
  let Se;
  t[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, Z.jsx)(wi, { "aria-hidden": !0, className: `icon-sm` })), (t[70] = Se))
    : (Se = t[70]);
  let K;
  t[71] !== ge || t[72] !== _e || t[73] !== ye || t[74] !== xe
    ? ((K = (0, Z.jsx)(Di, {
        ariaLabel: ge,
        active: _e,
        disabled: ye,
        label: be,
        onClick: xe,
        children: Se,
      })),
      (t[71] = ge),
      (t[72] = _e),
      (t[73] = ye),
      (t[74] = xe),
      (t[75] = K))
    : (K = t[75]);
  let Ce;
  t[76] === m
    ? (Ce = t[77])
    : ((Ce = m.formatMessage({
        id: `profile.shareCard.preview.save`,
        defaultMessage: `Save profile card`,
        description: `Accessible label for saving the profile share card from the preview dialog`,
      })),
      (t[76] = m),
      (t[77] = Ce));
  let we = r || n == null,
    Te;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, Z.jsx)(Ft, { "aria-hidden": !0, className: `icon-sm` })), (t[78] = Te))
    : (Te = t[78]);
  let Ee;
  t[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, Z.jsx)(`span`, {
        className: Fi,
        children: (0, Z.jsx)(h, {
          id: `profile.shareCard.preview.saveLabel`,
          defaultMessage: `Save`,
          description: `Visible label for saving the profile share card`,
        }),
      })),
      (t[79] = Ee))
    : (Ee = t[79]);
  let De;
  t[80] !== l || t[81] !== Ce || t[82] !== we
    ? ((De = (0, Z.jsxs)(ut, {
        "aria-label": Ce,
        className: Pi,
        color: `primary`,
        disabled: we,
        size: `icon`,
        uniform: !0,
        onClick: l,
        children: [Te, Ee],
      })),
      (t[80] = l),
      (t[81] = Ce),
      (t[82] = we),
      (t[83] = De))
    : (De = t[83]);
  let Oe;
  t[84] !== oe || t[85] !== le || t[86] !== G || t[87] !== K || t[88] !== De
    ? ((Oe = (0, Z.jsxs)(`div`, { className: oe, children: [le, G, K, De] })),
      (t[84] = oe),
      (t[85] = le),
      (t[86] = G),
      (t[87] = K),
      (t[88] = De),
      (t[89] = Oe))
    : (Oe = t[89]);
  let q;
  t[90] !== s || t[91] !== c || t[92] !== u || t[93] !== f || t[94] !== o
    ? ((q =
        o == null
          ? null
          : (0, Z.jsx)(b.div, {
              id: Ni,
              className: `mt-4 w-[min(499px,calc(100vw-56px))] overflow-hidden rounded-lg bg-surface-elevated-secondary/95 p-3 text-start text-default shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-border backdrop-blur`,
              initial: { height: 0, opacity: 0, y: -6 },
              animate: { height: `auto`, opacity: 1, y: 0 },
              exit: { height: 0, opacity: 0, y: -6 },
              transition: { duration: 0.16, ease: `easeOut` },
              children: (0, Z.jsx)(ki, {
                getSocialDraftUrl: s,
                platform: o,
                onCopy: c,
                onDismiss: u,
                onOpenSocialDraft: f,
              }),
            })),
      (t[90] = s),
      (t[91] = c),
      (t[92] = u),
      (t[93] = f),
      (t[94] = o),
      (t[95] = q))
    : (q = t[95]);
  let ke;
  t[96] === q ? (ke = t[97]) : ((ke = (0, Z.jsx)(lt, { children: q })), (t[96] = q), (t[97] = ke));
  let Ae;
  t[98] !== re || t[99] !== L || t[100] !== Oe || t[101] !== ke
    ? ((Ae = (0, Z.jsxs)(`div`, {
        className: `flex min-h-fit flex-col items-center`,
        children: [te, (0, Z.jsxs)(`div`, { className: re, children: [L, Oe, ke] })],
      })),
      (t[98] = re),
      (t[99] = L),
      (t[100] = Oe),
      (t[101] = ke),
      (t[102] = Ae))
    : (Ae = t[102]);
  let je;
  t[103] !== E || t[104] !== Ae
    ? ((je = (0, Z.jsx)(`div`, {
        className: `flex h-full min-h-0 items-center justify-center overflow-y-auto px-6 py-8`,
        onPointerMove: E,
        children: Ae,
      })),
      (t[103] = E),
      (t[104] = Ae),
      (t[105] = je))
    : (je = t[105]);
  let Me;
  return (
    t[106] !== d || t[107] !== i || t[108] !== je || t[109] !== ee
      ? ((Me = (0, Z.jsxs)(It, {
          open: i,
          contentClassName: `!left-0 !top-0 !z-[51] !translate-x-0 !translate-y-0 overflow-hidden bg-transparent text-default`,
          overlayClassName: `!bg-[color-mix(in_srgb,var(--color-surface-secondary)_88%,transparent)] backdrop-blur-[18px]`,
          showDialogClose: !1,
          unstyledContent: !0,
          viewportSized: !0,
          onOpenChange: d,
          children: [O, k, ee, je],
        })),
        (t[106] = d),
        (t[107] = i),
        (t[108] = je),
        (t[109] = ee),
        (t[110] = Me))
      : (Me = t[110]),
    Me
  );
}
function Di(e) {
  let t = (0, Mi.c)(10),
    { active: n, ariaLabel: r, children: i, disabled: a, label: o, onClick: s } = e,
    c = n ? Ni : void 0,
    l;
  t[0] === o
    ? (l = t[1])
    : ((l = (0, Z.jsx)(`span`, { className: Fi, children: o })), (t[0] = o), (t[1] = l));
  let u;
  return (
    t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== a || t[6] !== s || t[7] !== c || t[8] !== l
      ? ((u = (0, Z.jsxs)(ut, {
          "aria-controls": c,
          "aria-expanded": n,
          "aria-label": r,
          "aria-pressed": n,
          className: Pi,
          color: `primary`,
          disabled: a,
          size: `icon`,
          uniform: !0,
          onClick: s,
          children: [i, l],
        })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = i),
        (t[5] = a),
        (t[6] = s),
        (t[7] = c),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function Oi(e) {
  let t = (0, Mi.c)(40),
    {
      disabled: n,
      isPetVisible: r,
      petCount: i,
      petName: a,
      petPosition: o,
      onNext: s,
      onPrevious: c,
      onTogglePetVisibility: l,
    } = e,
    u = ue(),
    d = i > 1,
    f;
  t[0] === u
    ? (f = t[1])
    : ((f = u.formatMessage({
        id: `profile.shareCard.preview.petSwitcher`,
        defaultMessage: `Custom pet`,
        description: `Accessible label for controls that switch the custom pet shown in the profile share card preview`,
      })),
      (t[0] = u),
      (t[1] = f));
  let p = d
      ? `w-[min(320px,calc(100vw-80px))] grid-cols-[1.75rem_minmax(0,1fr)_1.75rem_4.25rem]`
      : `w-[min(240px,calc(100vw-80px))] grid-cols-[minmax(0,1fr)_4.25rem]`,
    m;
  t[2] === p
    ? (m = t[3])
    : ((m = he(
        `absolute top-full left-1/2 mt-3 grid -translate-x-1/2 items-center gap-2 rounded-full bg-surface-elevated-secondary/95 px-2 py-1 shadow-[0_12px_36px_rgba(0,0,0,0.12)] ring-1 ring-border backdrop-blur`,
        p,
      )),
      (t[2] = p),
      (t[3] = m));
  let g;
  t[4] !== d || t[5] !== n || t[6] !== u || t[7] !== c
    ? ((g = d
        ? (0, Z.jsx)(ut, {
            "aria-label": u.formatMessage({
              id: `profile.shareCard.preview.previousPet`,
              defaultMessage: `Previous custom pet`,
              description: `Accessible label for selecting the previous custom pet in the profile share card preview`,
            }),
            className: `size-7 !rounded-full`,
            color: `ghostActive`,
            disabled: n,
            size: `icon`,
            uniform: !0,
            onClick: c,
            children: (0, Z.jsx)(rt, { className: `rotate-180`, asset: U }),
          })
        : null),
      (t[4] = d),
      (t[5] = n),
      (t[6] = u),
      (t[7] = c),
      (t[8] = g))
    : (g = t[8]);
  let _ = r ? `text-default` : `text-tertiary`,
    v;
  t[9] === _
    ? (v = t[10])
    : ((v = he(`truncate text-xs leading-4 font-medium`, _)), (t[9] = _), (t[10] = v));
  let y;
  t[11] !== a || t[12] !== v
    ? ((y = (0, Z.jsx)(`div`, { className: v, children: a })),
      (t[11] = a),
      (t[12] = v),
      (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] !== r || t[15] !== i || t[16] !== o
    ? ((b = (0, Z.jsx)(`div`, {
        className: `text-[11px] leading-3 text-tertiary`,
        children: r
          ? (0, Z.jsx)(h, {
              id: `profile.shareCard.preview.petPosition`,
              defaultMessage: `{petPosition} / {petCount}`,
              description: `Current custom pet position in the profile share card preview pet switcher`,
              values: { petCount: i, petPosition: o },
            })
          : (0, Z.jsx)(h, {
              id: `profile.shareCard.preview.petHidden`,
              defaultMessage: `Hidden`,
              description: `Label shown when the custom pet is hidden from the profile share card preview`,
            }),
      })),
      (t[14] = r),
      (t[15] = i),
      (t[16] = o),
      (t[17] = b))
    : (b = t[17]);
  let x;
  t[18] !== y || t[19] !== b
    ? ((x = (0, Z.jsxs)(`div`, { className: `min-w-0 text-center`, children: [y, b] })),
      (t[18] = y),
      (t[19] = b),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] !== d || t[22] !== n || t[23] !== u || t[24] !== s
    ? ((S = d
        ? (0, Z.jsx)(ut, {
            "aria-label": u.formatMessage({
              id: `profile.shareCard.preview.nextPet`,
              defaultMessage: `Next custom pet`,
              description: `Accessible label for selecting the next custom pet in the profile share card preview`,
            }),
            className: `size-7 !rounded-full`,
            color: `ghostActive`,
            disabled: n,
            size: `icon`,
            uniform: !0,
            onClick: s,
            children: (0, Z.jsx)(rt, { asset: U }),
          })
        : null),
      (t[21] = d),
      (t[22] = n),
      (t[23] = u),
      (t[24] = s),
      (t[25] = S))
    : (S = t[25]);
  let C = r ? `ghostActive` : `secondary`,
    w;
  t[26] === r
    ? (w = t[27])
    : ((w = r
        ? (0, Z.jsx)(h, {
            id: `profile.shareCard.preview.hidePetLabel`,
            defaultMessage: `Hide pet`,
            description: `Short button label for hiding the custom pet from the profile share card preview`,
          })
        : (0, Z.jsx)(h, {
            id: `profile.shareCard.preview.showPetLabel`,
            defaultMessage: `Show pet`,
            description: `Short button label for showing the custom pet on the profile share card preview`,
          })),
      (t[26] = r),
      (t[27] = w));
  let T;
  t[28] !== n || t[29] !== l || t[30] !== C || t[31] !== w
    ? ((T = (0, Z.jsx)(ut, {
        className: `h-7 w-[4.25rem] justify-center px-0 text-[11px] leading-3`,
        color: C,
        disabled: n,
        size: `default`,
        onClick: l,
        children: w,
      })),
      (t[28] = n),
      (t[29] = l),
      (t[30] = C),
      (t[31] = w),
      (t[32] = T))
    : (T = t[32]);
  let E;
  return (
    t[33] !== f || t[34] !== S || t[35] !== T || t[36] !== m || t[37] !== g || t[38] !== x
      ? ((E = (0, Z.jsxs)(`div`, {
          "aria-label": f,
          className: m,
          role: `group`,
          children: [g, x, S, T],
        })),
        (t[33] = f),
        (t[34] = S),
        (t[35] = T),
        (t[36] = m),
        (t[37] = g),
        (t[38] = x),
        (t[39] = E))
      : (E = t[39]),
    E
  );
}
function ki(e) {
  let t = (0, Mi.c)(41),
    { platform: n, getSocialDraftUrl: r, onCopy: i, onDismiss: a, onOpenSocialDraft: o } = e,
    s = ue(),
    c;
  t[0] !== s || t[1] !== n ? ((c = ji(s, n)), (t[0] = s), (t[1] = n), (t[2] = c)) : (c = t[2]);
  let l = c,
    u;
  t[3] !== r || t[4] !== n ? ((u = r(n)), (t[3] = r), (t[4] = n), (t[5] = u)) : (u = t[5]);
  let d = u,
    f;
  t[6] === l
    ? (f = t[7])
    : ((f = (0, Z.jsx)(`h3`, {
        className: `text-sm leading-5 font-medium`,
        children: (0, Z.jsx)(h, {
          id: `profile.shareCard.preview.socialInstructionsTitle`,
          defaultMessage: `Share to {platformName}`,
          description: `Title for the profile share card social sharing instructions`,
          values: { platformName: l },
        }),
      })),
      (t[6] = l),
      (t[7] = f));
  let p;
  t[8] === s
    ? (p = t[9])
    : ((p = s.formatMessage({
        id: `profile.shareCard.preview.dismissShareInstructions`,
        defaultMessage: `Dismiss share instructions`,
        description: `Accessible label for dismissing the profile share card social sharing instructions`,
      })),
      (t[8] = s),
      (t[9] = p));
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(Ke, { "aria-hidden": !0, className: `icon-xs` })), (t[10] = m))
    : (m = t[10]);
  let g;
  t[11] !== a || t[12] !== p
    ? ((g = (0, Z.jsx)(ut, {
        "aria-label": p,
        className: `size-6 rounded-full`,
        color: `ghostActive`,
        size: `icon`,
        uniform: !0,
        onClick: a,
        children: m,
      })),
      (t[11] = a),
      (t[12] = p),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] !== f || t[15] !== g
    ? ((_ = (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [f, g],
      })),
      (t[14] = f),
      (t[15] = g),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsx)(Ai, { step: 1 })), (t[17] = v))
    : (v = t[17]);
  let y, b;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Z.jsx)(rt, { asset: xt })),
      (y = (0, Z.jsx)(h, {
        id: `profile.shareCard.preview.copyImage`,
        defaultMessage: `Copy image`,
        description: `Button label for copying the profile share card image`,
      })),
      (t[18] = y),
      (t[19] = b))
    : ((y = t[18]), (b = t[19]));
  let x;
  t[20] === i
    ? (x = t[21])
    : ((x = (0, Z.jsxs)(`li`, {
        className: `flex items-center gap-2`,
        children: [
          v,
          (0, Z.jsxs)(ut, { color: `secondary`, size: `toolbar`, onClick: i, children: [b, y] }),
        ],
      })),
      (t[20] = i),
      (t[21] = x));
  let S;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Z.jsx)(Ai, { step: 2 })), (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== o || t[24] !== n
    ? ((C = (e) => {
        o(n, e);
      }),
      (t[23] = o),
      (t[24] = n),
      (t[25] = C))
    : (C = t[25]);
  let w;
  t[26] === d
    ? (w = t[27])
    : ((w = (0, Z.jsx)(Mt, { className: `icon-xs`, href: d, openTarget: `external-browser` })),
      (t[26] = d),
      (t[27] = w));
  let T;
  t[28] === l
    ? (T = t[29])
    : ((T = (0, Z.jsx)(h, {
        id: `profile.shareCard.preview.openSocialComposer`,
        defaultMessage: `Open {platformName} composer`,
        description: `Button label for opening a social platform composer for the profile share card`,
        values: { platformName: l },
      })),
      (t[28] = l),
      (t[29] = T));
  let E;
  t[30] !== C || t[31] !== w || t[32] !== T
    ? ((E = (0, Z.jsxs)(`li`, {
        className: `flex items-center gap-2`,
        children: [
          S,
          (0, Z.jsxs)(ut, { color: `secondary`, size: `toolbar`, onClick: C, children: [w, T] }),
        ],
      })),
      (t[30] = C),
      (t[31] = w),
      (t[32] = T),
      (t[33] = E))
    : (E = t[33]);
  let D;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Z.jsxs)(`li`, {
        className: `flex items-center gap-2 text-secondary`,
        children: [
          (0, Z.jsx)(Ai, { step: 3 }),
          (0, Z.jsx)(h, {
            id: `profile.shareCard.preview.pasteImage`,
            defaultMessage: `Paste image into the post`,
            description: `Instruction for pasting the copied profile share card image into the social post`,
          }),
        ],
      })),
      (t[34] = D))
    : (D = t[34]);
  let O;
  t[35] !== x || t[36] !== E
    ? ((O = (0, Z.jsxs)(`ol`, {
        className: `mt-2 flex flex-col gap-2 text-sm leading-5`,
        children: [x, E, D],
      })),
      (t[35] = x),
      (t[36] = E),
      (t[37] = O))
    : (O = t[37]);
  let k;
  return (
    t[38] !== O || t[39] !== _
      ? ((k = (0, Z.jsxs)(Z.Fragment, { children: [_, O] })), (t[38] = O), (t[39] = _), (t[40] = k))
      : (k = t[40]),
    k
  );
}
function Ai(e) {
  let t = (0, Mi.c)(2),
    { step: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`span`, {
          "aria-hidden": !0,
          className: `flex size-5 shrink-0 items-center justify-center rounded-full bg-text/10 text-[11px] font-medium text-default`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function ji(e, t) {
  switch (t) {
    case `linkedin`:
      return e.formatMessage({
        id: `profile.shareCard.preview.linkedin`,
        defaultMessage: `LinkedIn`,
        description: `LinkedIn social platform name`,
      });
    case `reddit`:
      return e.formatMessage({
        id: `profile.shareCard.preview.reddit`,
        defaultMessage: `Reddit`,
        description: `Reddit social platform name`,
      });
    case `x`:
      return e.formatMessage({
        id: `profile.shareCard.preview.x`,
        defaultMessage: `X`,
        description: `X social platform name`,
      });
  }
}
var Mi,
  Z,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi = e(() => {
    ((Mi = ft()),
      x(),
      ze(),
      Qt(),
      yt(),
      ye(),
      s(),
      at(),
      Ue(),
      tt(),
      _t(),
      _n(),
      Ti(),
      vn(),
      Qe(),
      (Z = it()),
      (Ni = `profile-share-card-social-instructions`),
      (Pi = `relative size-[52px] overflow-visible !rounded-full`),
      (Fi = `absolute top-[60px] left-1/2 max-w-[68px] -translate-x-1/2 truncate text-center text-xs leading-4 text-secondary`),
      (Ii = `[box-shadow:rgba(0,0,0,0.06)_0px_4px_12px_-8px,rgba(0,0,0,0.10)_0px_9px_64px_-10px,rgba(0,0,0,0.05)_0px_0px_0px_0.5px]`),
      (Li = { stiffness: 200, damping: 25, mass: 1 }),
      (Ri = 1.5),
      (zi = 2),
      (Bi = `min(499px, calc(100vw - 56px), max(294px, calc(163.072dvh - 506px)))`),
      (Vi = `min(499px, calc(100vw - 56px), max(294px, calc(163.072dvh - 749px)))`));
  });
function Ui(e) {
  let t = (0, qi.c)(93),
    {
      dailyUsage: n,
      displayName: r,
      imageUrl: i,
      petOptions: o,
      selectedPetId: s,
      todayIso: c,
      usageSummary: l,
      username: u,
    } = e,
    d = a(Le),
    f = ue(),
    [p, m] = (0, Ji.useState)(!1),
    [_, v] = (0, Ji.useState)(!1),
    [y, b] = (0, Ji.useState)(null),
    [x, S] = (0, Ji.useState)(null),
    [C, T] = (0, Ji.useState)(null),
    [E, D] = (0, Ji.useState)(!1),
    [O, k] = (0, Ji.useState)(null),
    A = (0, Ji.useRef)(0),
    j;
  t[0] === f
    ? (j = t[1])
    : ((j = f.formatMessage({
        id: `profile.shareCard.shareLabel`,
        defaultMessage: `Share profile card`,
        description: `Accessible label for sharing the profile share card image`,
      })),
      (t[0] = f),
      (t[1] = j));
  let ee = j,
    te;
  t[2] === f
    ? (te = t[3])
    : ((te = f.formatMessage({
        id: `profile.shareCard.createError`,
        defaultMessage: `Could not create profile card`,
        description: `Toast shown when the profile share card image could not be created`,
      })),
      (t[2] = f),
      (t[3] = te));
  let ne = te,
    re;
  t[4] === f
    ? (re = t[5])
    : ((re = f.formatMessage({
        id: `profile.shareCard.copySuccess`,
        defaultMessage: `Copied image`,
        description: `Toast shown after copying the profile share card image`,
      })),
      (t[4] = f),
      (t[5] = re));
  let N = re,
    P;
  t[6] === f
    ? (P = t[7])
    : ((P = f.formatMessage({
        id: `profile.shareCard.saveSuccess`,
        defaultMessage: `Image saved`,
        description: `Toast shown after saving the profile share card image`,
      })),
      (t[6] = f),
      (t[7] = P));
  let F = P,
    ae;
  t[8] === f
    ? (ae = t[9])
    : ((ae = f.formatMessage({
        id: `profile.shareCard.draftText`,
        defaultMessage: `Check out my Codex activity`,
        description: `Draft text used when sharing the profile share card to social platforms`,
      })),
      (t[8] = f),
      (t[9] = ae));
  let I = ae,
    L;
  t[10] === d
    ? (L = t[11])
    : ((L = (e, t) => {
        if (t == null) {
          Ye(d, Vt, { action: e });
          return;
        }
        Ye(d, Vt, { action: e, socialPlatform: Ki(t) });
      }),
      (t[10] = d),
      (t[11] = L));
  let R = L,
    oe;
  t[12] !== n ||
  t[13] !== r ||
  t[14] !== i ||
  t[15] !== f ||
  t[16] !== c ||
  t[17] !== l.currentStreakDays ||
  t[18] !== l.longestStreakDays ||
  t[19] !== l.peakTokens ||
  t[20] !== l.totalTextTokens ||
  t[21] !== u
    ? ((oe = () => {
        let e = f.formatMessage(
          {
            id: `profile.usernameValue`,
            defaultMessage: `@{username}`,
            description: `Profile username shown with an at-sign prefix`,
          },
          { username: u },
        );
        return {
          displayNameLabel: r,
          imageUrl: i,
          initials: w(r),
          stats: [
            {
              label: f.formatMessage({
                id: `profile.shareCard.stats.lifetimeTokens`,
                defaultMessage: `lifetime tokens`,
                description: `Label for lifetime token usage in the profile share card image`,
              }),
              value: ie(f, l.totalTextTokens),
            },
            {
              label: f.formatMessage({
                id: `profile.shareCard.stats.peakDay`,
                defaultMessage: `peak day`,
                description: `Label for peak token usage day in the profile share card image`,
              }),
              value: ie(f, l.peakTokens),
            },
            {
              label: f.formatMessage({
                id: `profile.shareCard.stats.currentStreak`,
                defaultMessage: `current streak`,
                description: `Label for current usage streak in the profile share card image`,
              }),
              value: Ot(f, l.currentStreakDays),
            },
            {
              label: f.formatMessage({
                id: `profile.shareCard.stats.longestStreak`,
                defaultMessage: `longest streak`,
                description: `Label for longest usage streak in the profile share card image`,
              }),
              value: Ot(f, l.longestStreakDays),
            },
          ],
          theme: _r(),
          usernameLabel: e,
          usageCells: M({ dailyUsage: n, todayIso: c }),
        };
      }),
      (t[12] = n),
      (t[13] = r),
      (t[14] = i),
      (t[15] = f),
      (t[16] = c),
      (t[17] = l.currentStreakDays),
      (t[18] = l.longestStreakDays),
      (t[19] = l.peakTokens),
      (t[20] = l.totalTextTokens),
      (t[21] = u),
      (t[22] = oe))
    : (oe = t[22]);
  let z = oe,
    se;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = async (e, t) => {
        let n = await Wi(e);
        A.current === t && b({ blob: e, imageUrl: n });
      }),
      (t[23] = se))
    : (se = t[23]);
  let B = se,
    V;
  t[24] !== z || t[25] !== d || t[26] !== ne
    ? ((V = async (e, t) => {
        let { clearPreview: n, showLoadingState: r, requestId: i } = t;
        (r && m(!0),
          n && b(null),
          await (async () => {
            try {
              await B(await vr({ ...z(), pet: e }), i);
            } catch {
              if (A.current !== i) return;
              (v(!1), k(null), d.get(ct).danger(ne));
            }
          })().finally(() => {
            r && A.current === i && m(!1);
          }));
      }),
      (t[24] = z),
      (t[25] = d),
      (t[26] = ne),
      (t[27] = V))
    : (V = t[27]);
  let H = V,
    le;
  t[28] !== z || t[29] !== d || t[30] !== ne
    ? ((le = async (e, t, n) => {
        let { clearPreview: r, showLoadingState: i, requestId: a } = n;
        (i && m(!0),
          r && b(null),
          await (async () => {
            try {
              let n = t ?? (await yr(z()));
              if (A.current !== a) return;
              (t ?? k(n), await B(await n.createImageBlob(e), a));
            } catch {
              if (A.current !== a) return;
              (v(!1), k(null), d.get(ct).danger(ne));
            }
          })().finally(() => {
            i && A.current === a && m(!1);
          }));
      }),
      (t[28] = z),
      (t[29] = d),
      (t[30] = ne),
      (t[31] = le))
    : (le = t[31]);
  let U = le,
    de;
  t[32] !== H || t[33] !== U || t[34] !== o || t[35] !== s
    ? ((de = () => {
        A.current += 1;
        let e = A.current,
          t = s == null ? -1 : o.findIndex((e) => e.id === s);
        (v(!0), S(null), k(null), T(t === -1 ? null : t), D(t !== -1));
        let n = o[t];
        if (n == null) {
          H(null, { clearPreview: !0, requestId: e, showLoadingState: !0 });
          return;
        }
        U(n, null, { clearPreview: !0, requestId: e, showLoadingState: !0 });
      }),
      (t[32] = H),
      (t[33] = U),
      (t[34] = o),
      (t[35] = s),
      (t[36] = de))
    : (de = t[36]);
  let fe = de,
    pe;
  t[37] !== U || t[38] !== o || t[39] !== O
    ? ((pe = (e) => {
        let t = o[e];
        if (t == null) return;
        A.current += 1;
        let n = A.current;
        (T(e), D(!0), U(t, O, { clearPreview: !1, requestId: n, showLoadingState: !1 }));
      }),
      (t[37] = U),
      (t[38] = o),
      (t[39] = O),
      (t[40] = pe))
    : (pe = t[40]);
  let W = pe,
    me;
  t[41] !== H || t[42] !== o || t[43] !== C
    ? ((me = (e) => {
        let t = C == null ? null : o[C];
        if (e && t == null) return;
        A.current += 1;
        let n = A.current;
        (D(e), H(e ? t : null, { clearPreview: !1, requestId: n, showLoadingState: !1 }));
      }),
      (t[41] = H),
      (t[42] = o),
      (t[43] = C),
      (t[44] = me))
    : (me = t[44]);
  let he = me,
    G;
  t[45] !== R || t[46] !== d || t[47] !== y || t[48] !== F
    ? ((G = () => {
        y != null &&
          (R(Ie.CODEX_PROFILE_SHARE_ACTION_SAVE_BUTTON_CLICKED), br(y.blob), d.get(ct).success(F));
      }),
      (t[45] = R),
      (t[46] = d),
      (t[47] = y),
      (t[48] = F),
      (t[49] = G))
    : (G = t[49]);
  let ge = G,
    _e;
  t[50] !== d || t[51] !== N || t[52] !== y
    ? ((_e = () => {
        y != null &&
          wt({ "image/png": y.blob }).then((e) => {
            e && d.get(ct).success(N);
          });
      }),
      (t[50] = d),
      (t[51] = N),
      (t[52] = y),
      (t[53] = _e))
    : (_e = t[53]);
  let ve = _e,
    ye;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (e) => {
        (e || ((A.current += 1), S(null), T(null), D(!1), m(!1), k(null)), v(e));
      }),
      (t[54] = ye))
    : (ye = t[54]);
  let be = ye,
    xe;
  t[55] !== R || t[56] !== fe
    ? ((xe = () => {
        (R(Ie.CODEX_PROFILE_SHARE_ACTION_SHARE_BUTTON_CLICKED), fe());
      }),
      (t[55] = R),
      (t[56] = fe),
      (t[57] = xe))
    : (xe = t[57]);
  let Se, K;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, Yi.jsx)(rt, { asset: g })),
      (K = (0, Yi.jsx)(h, {
        id: `profile.shareCard.share`,
        defaultMessage: `Share`,
        description: `Button label for sharing the profile share card image`,
      })),
      (t[58] = Se),
      (t[59] = K))
    : ((Se = t[58]), (K = t[59]));
  let Ce;
  t[60] !== p || t[61] !== ee || t[62] !== xe
    ? ((Ce = (0, Yi.jsxs)(ut, {
        "aria-label": ee,
        className: `h-7`,
        color: `ghostActive`,
        loading: p,
        size: `toolbar`,
        onClick: xe,
        children: [Se, K],
      })),
      (t[60] = p),
      (t[61] = ee),
      (t[62] = xe),
      (t[63] = Ce))
    : (Ce = t[63]);
  let we = y?.imageUrl ?? null,
    Te;
  t[64] !== E || t[65] !== p || t[66] !== o || t[67] !== W || t[68] !== C || t[69] !== he
    ? ((Te =
        C == null || o.length === 0
          ? null
          : {
              disabled: p,
              isPetVisible: E,
              petCount: o.length,
              petName: o[C]?.displayName ?? ``,
              petPosition: C + 1,
              onNext: () => {
                W((C + 1) % o.length);
              },
              onPrevious: () => {
                W((C - 1 + o.length) % o.length);
              },
              onTogglePetVisibility: () => {
                he(!E);
              },
            }),
      (t[64] = E),
      (t[65] = p),
      (t[66] = o),
      (t[67] = W),
      (t[68] = C),
      (t[69] = he),
      (t[70] = Te))
    : (Te = t[70]);
  let Ee;
  t[71] === I ? (Ee = t[72]) : ((Ee = (e) => Gi(e, I)), (t[71] = I), (t[72] = Ee));
  let De;
  t[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = () => {
        S(null);
      }),
      (t[73] = De))
    : (De = t[73]);
  let Oe;
  t[74] !== R || t[75] !== I
    ? ((Oe = (e, t) => {
        let n = Gi(e, I);
        (R(Ie.CODEX_PROFILE_SHARE_ACTION_SOCIAL_COMPOSER_BUTTON_CLICKED, e),
          ce({
            event: t,
            href: n,
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          }));
      }),
      (t[74] = R),
      (t[75] = I),
      (t[76] = Oe))
    : (Oe = t[76]);
  let q;
  t[77] === R
    ? (q = t[78])
    : ((q = (e) => {
        (R(Ie.CODEX_PROFILE_SHARE_ACTION_SOCIAL_SHARE_BUTTON_CLICKED, e), S(e));
      }),
      (t[77] = R),
      (t[78] = q));
  let ke;
  t[79] !== ve ||
  t[80] !== ge ||
  t[81] !== _ ||
  t[82] !== p ||
  t[83] !== x ||
  t[84] !== we ||
  t[85] !== Te ||
  t[86] !== Ee ||
  t[87] !== Oe ||
  t[88] !== q
    ? ((ke = (0, Yi.jsx)(Ei, {
        imageUrl: we,
        isLoading: p,
        open: _,
        petSwitcher: Te,
        selectedSocialPlatform: x,
        getSocialDraftUrl: Ee,
        onCopy: ve,
        onDownload: ge,
        onDismissShareInstructions: De,
        onOpenChange: be,
        onOpenSocialDraft: Oe,
        onSelectSocialPlatform: q,
      })),
      (t[79] = ve),
      (t[80] = ge),
      (t[81] = _),
      (t[82] = p),
      (t[83] = x),
      (t[84] = we),
      (t[85] = Te),
      (t[86] = Ee),
      (t[87] = Oe),
      (t[88] = q),
      (t[89] = ke))
    : (ke = t[89]);
  let Ae;
  return (
    t[90] !== Ce || t[91] !== ke
      ? ((Ae = (0, Yi.jsxs)(Yi.Fragment, { children: [Ce, ke] })),
        (t[90] = Ce),
        (t[91] = ke),
        (t[92] = Ae))
      : (Ae = t[92]),
    Ae
  );
}
function Wi(e) {
  return new Promise((t, n) => {
    let r = new FileReader();
    ((r.onerror = () => {
      n(r.error ?? Error(`Unable to read profile share card`));
    }),
      (r.onload = () => {
        if (typeof r.result != `string`) {
          n(Error(`Unable to read profile share card`));
          return;
        }
        t(r.result);
      }),
      r.readAsDataURL(e));
  });
}
function Gi(e, t) {
  switch (e) {
    case `linkedin`: {
      let e = new URL(`https://www.linkedin.com/feed/`);
      return (
        e.searchParams.set(`shareActive`, `true`), e.searchParams.set(`text`, t), e.toString()
      );
    }
    case `reddit`: {
      let e = new URL(`https://www.reddit.com/submit`);
      return (e.searchParams.set(`title`, t), e.toString());
    }
    case `x`: {
      let e = new URL(`https://x.com/intent/post`);
      return (e.searchParams.set(`text`, t), e.toString());
    }
  }
}
function Ki(e) {
  switch (e) {
    case `linkedin`:
      return Yt.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_LINKEDIN;
    case `reddit`:
      return Yt.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_REDDIT;
    case `x`:
      return Yt.CODEX_PROFILE_SHARE_SOCIAL_PLATFORM_X;
  }
}
var qi,
  Ji,
  Yi,
  Xi = e(() => {
    ((qi = ft()),
      Je(),
      Wt(),
      H(),
      (Ji = t(l(), 1)),
      ye(),
      s(),
      I(),
      tt(),
      dt(),
      pe(),
      bt(),
      gt(),
      Ne(),
      Si(),
      Hi(),
      (Yi = it()));
  }),
  Zi,
  Qi,
  $i,
  ea,
  ta = e(() => {
    ((Zi = `_profileLoadingBlock_18xr0_1`),
      (Qi = `_profilePhotoEditBadge_18xr0_22`),
      ($i = `_profilePhotoInput_18xr0_28`),
      (ea = {
        profileLoadingBlock: Zi,
        "profile-loading-page-sweep": `_profile-loading-page-sweep_18xr0_1`,
        profilePhotoEditBadge: Qi,
        profilePhotoInput: $i,
      }));
  });
function na(e) {
  let t = (0, Ia.c)(167),
    { today: r } = e,
    i = a(Le),
    o = r ?? new Date(),
    s = (0, Q.useRef)(!1),
    c = ue(),
    l = Nt(`3162484136`),
    u = Nt(`1991660486`),
    d = Nt(`2056428529`),
    { accountId: p, authMethod: m, planAtLogin: g, userId: y } = Ge(),
    { data: b } = Bt(),
    x;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { enabled: !0 }), (t[0] = x))
    : (x = t[0]);
  let { data: S } = T(x),
    { avatarOptions: w } = Cn(),
    E = Pe(o),
    D = fe(E),
    k = n(E),
    A = p ?? S?.accountId ?? null,
    M = y ?? S?.userId ?? null,
    ee = m === `chatgpt`,
    te;
  t[1] !== A || t[2] !== M || t[3] !== ee
    ? ((te = { accountId: A, enabled: ee, userId: M }),
      (t[1] = A),
      (t[2] = M),
      (t[3] = ee),
      (t[4] = te))
    : (te = t[4]);
  let N = Jt(te),
    ae = N.data?.activityInsights,
    I;
  t[5] !== A || t[6] !== M
    ? ((I = { accountId: A, userId: M }), (t[5] = A), (t[6] = M), (t[7] = I))
    : (I = t[7]);
  let R = be(I),
    z;
  t[8] !== A || t[9] !== M
    ? ((z = { accountId: A, userId: M }), (t[8] = A), (t[9] = M), (t[10] = z))
    : (z = t[10]);
  let se = Gt(z),
    ce = R.isPending || se.isPending,
    B;
  t[11] !== A || t[12] !== M
    ? ((B = { accountId: A, userId: M }), (t[11] = A), (t[12] = M), (t[13] = B))
    : (B = t[13]);
  let V = _(B),
    { selectedAvatar: H } = Oe(w),
    [le, U] = (0, Q.useState)(null),
    [de, pe] = (0, Q.useState)(null),
    [W, G] = (0, Q.useState)(`daily`),
    [ge, _e] = (0, Q.useState)(null),
    [ve, ye] = (0, Q.useState)(null),
    [xe, Se] = (0, Q.useState)(!1),
    K = N.isLoading,
    Ce = N.data == null && N.isError,
    we;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = Lt.isInternal(v())), (t[14] = we))
    : (we = t[14]);
  let Te = we,
    Ee;
  t[15] === N.error
    ? (Ee = t[16])
    : ((Ee = Te && N.error != null ? Fa(N.error) : null), (t[15] = N.error), (t[16] = Ee));
  let De = Ee,
    q = N.data?.hasStatsError === !0,
    ke;
  t[17] === H.id ? (ke = t[18]) : ((ke = Ut(H.id)), (t[17] = H.id), (t[18] = ke));
  let Ae = ke,
    je = $t(K ? null : (de ?? N.data?.imageUrl ?? b?.profile_picture_url ?? null)),
    Me = je != null && je !== le,
    Ne = b?.plan_type ?? S?.plan ?? g,
    Fe;
  t[19] !== d || t[20] !== Ne
    ? ((Fe = !L(Ne) || d), (t[19] = d), (t[20] = Ne), (t[21] = Fe))
    : (Fe = t[21]);
  let Ie = Fe,
    Re,
    ze,
    Be,
    Ve;
  t[22] !== b?.name ||
  t[23] !== K ||
  t[24] !== N.data?.displayName ||
  t[25] !== N.data?.username ||
  t[26] !== Ie
    ? ((ze = N.data?.username?.trim() || null),
      (Ve = Ie ? ze : null),
      (Re = N.data?.displayName ?? null),
      (Be = K ? null : Dt({ accountName: b?.name, displayName: Re, username: Ve })),
      (t[22] = b?.name),
      (t[23] = K),
      (t[24] = N.data?.displayName),
      (t[25] = N.data?.username),
      (t[26] = Ie),
      (t[27] = Re),
      (t[28] = ze),
      (t[29] = Be),
      (t[30] = Ve))
    : ((Re = t[27]), (ze = t[28]), (Be = t[29]), (Ve = t[30]));
  let He = Be,
    Ue = b?.structure,
    Ke = b?.name,
    qe;
  t[31] !== Ne || t[32] !== Ue || t[33] !== Ke
    ? ((qe = re({ accountStructure: Ue, plan: Ne, workspaceName: Ke })),
      (t[31] = Ne),
      (t[32] = Ue),
      (t[33] = Ke),
      (t[34] = qe))
    : (qe = t[34]);
  let Je = qe,
    J = N.data?.summary,
    Xe = J?.longestTaskDurationMs,
    Ze = N.data?.dailyUsage,
    Qe;
  t[35] === w ? (Qe = t[36]) : ((Qe = w.flatMap(ra)), (t[35] = w), (t[36] = Qe));
  let $e = Qe,
    tt;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((tt = (0, $.jsx)(h, {
        id: `profile.header`,
        defaultMessage: `Profile`,
        description: `Header title for the profile page`,
      })),
      (t[37] = tt))
    : (tt = t[37]);
  let nt = tt,
    it,
    at;
  if (
    (t[38] === i
      ? ((it = t[39]), (at = t[40]))
      : ((it = () => {
          s.current || ((s.current = !0), Ye(i, et, { profileOwner: `self`, surface: `codex` }));
        }),
        (at = [i]),
        (t[38] = i),
        (t[39] = it),
        (t[40] = at)),
    (0, Q.useEffect)(it, at),
    Ce)
  ) {
    let e;
    t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`h1`, { className: `text-base font-normal text-default`, children: nt })),
        (t[41] = e))
      : (e = t[41]);
    let n;
    t[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(St, { className: `icon-sm` })), (t[42] = n))
      : (n = t[42]);
    let r;
    t[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(h, {
          id: `profile.fetchError`,
          defaultMessage: `We’re having trouble loading your profile. Please try again later.`,
          description: `Error shown when the profile page cannot be loaded`,
        })),
        (t[43] = r))
      : (r = t[43]);
    let i;
    t[44] === De
      ? (i = t[45])
      : ((i =
          De == null
            ? null
            : (0, $.jsx)(`span`, {
                className: `whitespace-pre-wrap text-danger`,
                children: (0, $.jsx)(h, {
                  id: `profile.fetchErrorDetail`,
                  defaultMessage: `[Employee only] Error: {details}`,
                  description: `Internal build diagnostic detail shown when the profile page cannot be loaded`,
                  values: { details: De },
                }),
              })),
        (t[44] = De),
        (t[45] = i));
    let a;
    return (
      t[46] === i
        ? (a = t[47])
        : ((a = (0, $.jsx)(j, {
            contentClassName: `h-full justify-center`,
            fullWidth: !0,
            backSlot: e,
            children: (0, $.jsxs)(`div`, {
              role: `alert`,
              className: `flex flex-col items-center justify-center gap-4 text-center text-sm leading-5 text-tertiary`,
              children: [
                n,
                (0, $.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [r, i] }),
              ],
            }),
          })),
          (t[46] = i),
          (t[47] = a)),
      a
    );
  }
  let ot;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (0, $.jsx)(`div`, { className: `text-base font-normal text-default`, children: nt })),
      (t[48] = ot))
    : (ot = t[48]);
  let st;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (0, $.jsx)(Tn, {})), (t[49] = st))
    : (st = t[49]);
  let ct;
  t[50] !== Ze ||
  t[51] !== Ae ||
  t[52] !== K ||
  t[53] !== l ||
  t[54] !== q ||
  t[55] !== je ||
  t[56] !== Re ||
  t[57] !== H.id ||
  t[58] !== $e ||
  t[59] !== Me ||
  t[60] !== E ||
  t[61] !== J ||
  t[62] !== Ve
    ? ((ct =
        l && !K && !q && Ve != null && Re != null && J != null && Ze != null
          ? (0, $.jsx)(Ui, {
              dailyUsage: Ze,
              displayName: Re,
              imageUrl: Me ? je : null,
              petOptions: $e,
              selectedPetId: Ae ? H.id : null,
              todayIso: E,
              usageSummary: J,
              username: Ve,
            })
          : null),
      (t[50] = Ze),
      (t[51] = Ae),
      (t[52] = K),
      (t[53] = l),
      (t[54] = q),
      (t[55] = je),
      (t[56] = Re),
      (t[57] = H.id),
      (t[58] = $e),
      (t[59] = Me),
      (t[60] = E),
      (t[61] = J),
      (t[62] = Ve),
      (t[63] = ct))
    : (ct = t[63]);
  let lt;
  t[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, $.jsx)(h, {
        id: `profile.privateTooltip`,
        defaultMessage: `Your profile is only visible to you`,
        description: `Tooltip explaining private profile visibility`,
      })),
      (t[64] = lt))
    : (lt = t[64]);
  let dt;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (0, $.jsx)(P, {
        tooltipContent: lt,
        children: (0, $.jsxs)(`button`, {
          type: `button`,
          className: `flex h-7 cursor-default items-center gap-1.5 rounded-lg px-2 text-base text-secondary outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
          children: [
            (0, $.jsx)(rt, { "aria-hidden": !1, asset: hn }),
            (0, $.jsx)(h, {
              id: `profile.private`,
              defaultMessage: `Private`,
              description: `Private visibility badge label`,
            }),
          ],
        }),
      })),
      (t[65] = dt))
    : (dt = t[65]);
  let ft;
  t[66] === c
    ? (ft = t[67])
    : ((ft = c.formatMessage({
        id: `profile.editProfileLabel`,
        defaultMessage: `Edit profile`,
        description: `Accessible label for opening the edit profile dialog`,
      })),
      (t[66] = c),
      (t[67] = ft));
  let pt;
  t[68] === i
    ? (pt = t[69])
    : ((pt = () => {
        (Ye(i, We, { action: Rt.CODEX_PROFILE_EDIT_ACTION_OPENED }), Se(!0));
      }),
      (t[68] = i),
      (t[69] = pt));
  let mt, gt;
  t[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (0, $.jsx)(C, { "aria-hidden": !0, className: `icon-xs` })),
      (gt = (0, $.jsx)(h, {
        id: `profile.editProfile`,
        defaultMessage: `Edit`,
        description: `Button label for opening the edit profile dialog`,
      })),
      (t[70] = mt),
      (t[71] = gt))
    : ((mt = t[70]), (gt = t[71]));
  let _t;
  t[72] !== K || t[73] !== ft || t[74] !== pt
    ? ((_t = (0, $.jsxs)(ut, {
        "aria-label": ft,
        className: `h-7`,
        color: `ghostActive`,
        disabled: K,
        size: `toolbar`,
        onClick: pt,
        children: [mt, gt],
      })),
      (t[72] = K),
      (t[73] = ft),
      (t[74] = pt),
      (t[75] = _t))
    : (_t = t[75]);
  let vt;
  t[76] !== ct || t[77] !== _t
    ? ((vt = (0, $.jsxs)(`div`, {
        className: `flex w-full items-center justify-between`,
        children: [
          ot,
          (0, $.jsxs)(`div`, {
            className: `-me-2 flex items-center gap-2 no-drag`,
            children: [st, ct, dt, _t],
          }),
        ],
      })),
      (t[76] = ct),
      (t[77] = _t),
      (t[78] = vt))
    : (vt = t[78]);
  let yt = K || void 0,
    bt;
  t[79] !== Je ||
  t[80] !== He ||
  t[81] !== c ||
  t[82] !== Ae ||
  t[83] !== K ||
  t[84] !== je ||
  t[85] !== i ||
  t[86] !== H ||
  t[87] !== Me ||
  t[88] !== V ||
  t[89] !== Ve
    ? ((bt = K
        ? (0, $.jsx)(va, { avatar: H, showsPet: Ae })
        : (0, $.jsx)(O, {
            account: Je == null ? null : (0, $.jsx)(ua, { accountLabel: Je }),
            avatar: (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsxs)(`label`, {
                  "aria-disabled": V.isPending,
                  className: he(
                    `group relative flex size-20 rounded-full outline-none focus-within:ring-1 focus-within:ring-ring`,
                    V.isPending ? `cursor-default opacity-70` : `cursor-interaction`,
                  ),
                  children: [
                    (0, $.jsx)(oe, {
                      alt: ``,
                      name: He,
                      size: `lg`,
                      src: Me ? je : null,
                      onImageError: () => {
                        U(je);
                      },
                    }),
                    (0, $.jsx)(`span`, {
                      className: he(
                        `pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-black/45 text-white opacity-0 dark:bg-black/60 electron-dark:bg-black/60`,
                        !V.isPending && `group-focus-within:opacity-100 group-hover:opacity-100`,
                      ),
                      children: (0, $.jsx)(C, { "aria-hidden": !0, className: `icon-sm` }),
                    }),
                    (0, $.jsx)(`input`, {
                      type: `file`,
                      accept: `image/*`,
                      "aria-label": c.formatMessage({
                        id: `profile.photoInputLabel`,
                        defaultMessage: `Change profile picture`,
                        description: `Accessible label for the profile photo upload input`,
                      }),
                      className: `sr-only`,
                      disabled: V.isPending,
                      onClick: () => {
                        Ye(i, ht, { action: Ct.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_STARTED });
                      },
                      onChange: (e) => {
                        let t = e.currentTarget.files?.[0];
                        ((e.currentTarget.value = ``),
                          t != null &&
                            (Ye(i, ht, {
                              action: Ct.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_IMAGE_SELECTED,
                            }),
                            _a(t).then(ye, () => {
                              (Ye(i, ht, {
                                action: Ct.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_FAILED,
                              }),
                                ye(null));
                            })));
                      },
                    }),
                  ],
                }),
                Ae
                  ? (0, $.jsx)(`div`, {
                      className: `absolute -right-8 -bottom-2 flex size-14 items-center justify-center`,
                      children: (0, $.jsx)(Pa, { avatar: H }),
                    })
                  : null,
              ],
            }),
            displayName:
              He ??
              (0, $.jsx)(h, {
                id: `profile.nameFallback`,
                defaultMessage: `ChatGPT user`,
                description: `Fallback profile display name`,
              }),
            username:
              Ve == null
                ? null
                : (0, $.jsx)(h, {
                    id: `profile.usernameValue`,
                    defaultMessage: `@{username}`,
                    description: `Profile username shown with an at-sign prefix`,
                    values: { username: Ve },
                  }),
          })),
      (t[79] = Je),
      (t[80] = He),
      (t[81] = c),
      (t[82] = Ae),
      (t[83] = K),
      (t[84] = je),
      (t[85] = i),
      (t[86] = H),
      (t[87] = Me),
      (t[88] = V),
      (t[89] = Ve),
      (t[90] = bt))
    : (bt = t[90]);
  let xt;
  t[91] !== yt || t[92] !== bt
    ? ((xt = (0, $.jsx)(`section`, {
        "aria-busy": yt,
        className: `flex flex-col items-center`,
        children: bt,
      })),
      (t[91] = yt),
      (t[92] = bt),
      (t[93] = xt))
    : (xt = t[93]);
  let wt;
  t[94] !== c ||
  t[95] !== K ||
  t[96] !== q ||
  t[97] !== Xe ||
  t[98] !== J?.currentStreakDays ||
  t[99] !== J?.longestStreakDays ||
  t[100] !== J?.peakTokens ||
  t[101] !== J?.totalTextTokens
    ? ((wt = (0, $.jsx)(me, {
        children: K
          ? (0, $.jsx)(ba, {})
          : q
            ? (0, $.jsx)(Sa, {})
            : (0, $.jsxs)($.Fragment, {
                children: [
                  (0, $.jsx)(Ma, {
                    value: ie(c, J?.totalTextTokens),
                    label: (0, $.jsx)(h, {
                      id: `profile.stats.lifetimeTokens`,
                      defaultMessage: `Lifetime tokens`,
                      description: `Label for lifetime token usage on the profile page`,
                    }),
                  }),
                  (0, $.jsx)(F, {}),
                  (0, $.jsx)(Ma, {
                    value: ie(c, J?.peakTokens),
                    label: (0, $.jsx)(h, {
                      id: `profile.stats.peakTokens`,
                      defaultMessage: `Peak tokens`,
                      description: `Label for peak token usage on the profile page`,
                    }),
                  }),
                  (0, $.jsx)(F, {}),
                  Xe == null
                    ? null
                    : (0, $.jsxs)($.Fragment, {
                        children: [
                          (0, $.jsx)(Ma, {
                            value: ne(c, Xe),
                            label: (0, $.jsx)(h, {
                              id: `profile.stats.longestTask`,
                              defaultMessage: `Longest chat`,
                              description: `Label for longest chat duration on the profile page`,
                            }),
                          }),
                          (0, $.jsx)(F, {}),
                        ],
                      }),
                  (0, $.jsx)(Ma, {
                    value: Ot(c, J?.currentStreakDays),
                    label: (0, $.jsx)(h, {
                      id: `profile.stats.currentStreak`,
                      defaultMessage: `Current streak`,
                      description: `Label for current usage streak on the profile page`,
                    }),
                  }),
                  (0, $.jsx)(F, {}),
                  (0, $.jsx)(Ma, {
                    value: Ot(c, J?.longestStreakDays),
                    label: (0, $.jsx)(h, {
                      id: `profile.stats.longestStreak`,
                      defaultMessage: `Longest streak`,
                      description: `Label for longest usage streak on the profile page`,
                    }),
                  }),
                ],
              }),
      })),
      (t[94] = c),
      (t[95] = K),
      (t[96] = q),
      (t[97] = Xe),
      (t[98] = J?.currentStreakDays),
      (t[99] = J?.longestStreakDays),
      (t[100] = J?.peakTokens),
      (t[101] = J?.totalTextTokens),
      (t[102] = wt))
    : (wt = t[102]);
  let Tt;
  t[103] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tt = (0, $.jsx)(h, {
        id: `profile.tokenUsage.title`,
        defaultMessage: `Token activity`,
        description: `Heading above the token usage chart`,
      })),
      (t[103] = Tt))
    : (Tt = t[103]);
  let Et = W === `daily`,
    kt,
    At;
  t[104] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((kt = () => {
        G(`daily`);
      }),
      (At = (0, $.jsx)(h, {
        id: `profile.tokenUsage.daily`,
        defaultMessage: `Daily`,
        description: `Daily token usage chart tab`,
      })),
      (t[104] = kt),
      (t[105] = At))
    : ((kt = t[104]), (At = t[105]));
  let jt;
  t[106] !== K || t[107] !== Et
    ? ((jt = (0, $.jsx)(Na, { active: Et, disabled: K, onSelect: kt, children: At })),
      (t[106] = K),
      (t[107] = Et),
      (t[108] = jt))
    : (jt = t[108]);
  let Mt = W === `weekly`,
    Pt,
    Ft;
  t[109] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pt = () => {
        G(`weekly`);
      }),
      (Ft = (0, $.jsx)(h, {
        id: `profile.tokenUsage.weekly`,
        defaultMessage: `Weekly`,
        description: `Weekly token usage chart tab`,
      })),
      (t[109] = Pt),
      (t[110] = Ft))
    : ((Pt = t[109]), (Ft = t[110]));
  let It;
  t[111] !== K || t[112] !== Mt
    ? ((It = (0, $.jsx)(Na, { active: Mt, disabled: K, onSelect: Pt, children: Ft })),
      (t[111] = K),
      (t[112] = Mt),
      (t[113] = It))
    : (It = t[113]);
  let zt = W === `cumulative`,
    Vt,
    Ht;
  t[114] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Vt = () => {
        G(`cumulative`);
      }),
      (Ht = (0, $.jsx)(h, {
        id: `profile.tokenUsage.cumulative`,
        defaultMessage: `Cumulative`,
        description: `Cumulative token usage chart tab`,
      })),
      (t[114] = Vt),
      (t[115] = Ht))
    : ((Vt = t[114]), (Ht = t[115]));
  let Wt;
  t[116] !== K || t[117] !== zt
    ? ((Wt = (0, $.jsx)(Na, { active: zt, disabled: K, onSelect: Vt, children: Ht })),
      (t[116] = K),
      (t[117] = zt),
      (t[118] = Wt))
    : (Wt = t[118]);
  let Kt;
  t[119] !== jt || t[120] !== It || t[121] !== Wt
    ? ((Kt = (0, $.jsxs)($.Fragment, { children: [jt, It, Wt] })),
      (t[119] = jt),
      (t[120] = It),
      (t[121] = Wt),
      (t[122] = Kt))
    : (Kt = t[122]);
  let qt;
  t[123] !== W ||
  t[124] !== Ze ||
  t[125] !== c ||
  t[126] !== K ||
  t[127] !== q ||
  t[128] !== E ||
  t[129] !== D ||
  t[130] !== k ||
  t[131] !== ge
    ? ((qt = K
        ? (0, $.jsx)(Ca, { columnCount: D, monthLabelCount: k.length })
        : q || Ze == null
          ? (0, $.jsx)(Ea, {})
          : (0, $.jsx)(Zt, {
              dailyUsage: Ze,
              intl: c,
              renderTooltip: (e) => {
                let { children: t, label: n, open: r, onOpenChange: i } = e;
                return (0, $.jsx)(P, {
                  delayDuration: 0,
                  open: r,
                  onOpenChange: i,
                  portalContainer: ge,
                  tooltipContent: n,
                  children: t,
                });
              },
              todayIso: E,
              view: W,
            })),
      (t[123] = W),
      (t[124] = Ze),
      (t[125] = c),
      (t[126] = K),
      (t[127] = q),
      (t[128] = E),
      (t[129] = D),
      (t[130] = k),
      (t[131] = ge),
      (t[132] = qt))
    : (qt = t[132]);
  let Yt;
  t[133] !== Kt || t[134] !== qt
    ? ((Yt = (0, $.jsx)(f, { title: Tt, controls: Kt, children: qt })),
      (t[133] = Kt),
      (t[134] = qt),
      (t[135] = Yt))
    : (Yt = t[135]);
  let Xt;
  t[136] !== u || t[137] !== K || t[138] !== q || t[139] !== ae
    ? ((Xt = u ? (0, $.jsx)(Da, { insights: ae, isLoading: K, isUnavailable: q }) : null),
      (t[136] = u),
      (t[137] = K),
      (t[138] = q),
      (t[139] = ae),
      (t[140] = Xt))
    : (Xt = t[140]);
  let Qt;
  t[141] !== xt || t[142] !== wt || t[143] !== Yt || t[144] !== Xt
    ? ((Qt = (0, $.jsxs)(`div`, { className: `flex flex-col gap-10`, children: [xt, wt, Yt, Xt] })),
      (t[141] = xt),
      (t[142] = wt),
      (t[143] = Yt),
      (t[144] = Xt),
      (t[145] = Qt))
    : (Qt = t[145]);
  let en;
  t[146] !== ve || t[147] !== i || t[148] !== V
    ? ((en =
        ve == null
          ? null
          : (0, $.jsx)(Hn, {
              source: ve,
              onCancel: () => {
                ye(null);
              },
              onSave: (e) => {
                (ye(null),
                  pe(e.previewUrl),
                  V.mutate(e.photo, {
                    onError: () => {
                      (Ye(i, ht, { action: Ct.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_FAILED }),
                        pe(null));
                    },
                    onSuccess: () => {
                      (Ye(i, ht, { action: Ct.CODEX_PROFILE_INLINE_PHOTO_CHANGE_ACTION_SUCCEEDED }),
                        U(null),
                        pe(null));
                    },
                  }));
              },
            })),
      (t[146] = ve),
      (t[147] = i),
      (t[148] = V),
      (t[149] = en))
    : (en = t[149]);
  let tn;
  t[150] !== He ||
  t[151] !== le ||
  t[152] !== xe ||
  t[153] !== ce ||
  t[154] !== je ||
  t[155] !== ze ||
  t[156] !== i ||
  t[157] !== Ie ||
  t[158] !== R ||
  t[159] !== V ||
  t[160] !== se
    ? ((tn = xe
        ? (0, $.jsx)(aa, {
            displayName: He,
            failedProfileImageUrl: le,
            isPhotoSaving: V.isPending,
            isTextSaving: ce,
            profileImageUrl: je,
            showUsername: Ie,
            username: ze,
            onCancel: () => {
              Se(!1);
            },
            onProfileImageError: U,
            onSaveError: (e) => {
              Ye(i, We, { action: Rt.CODEX_PROFILE_EDIT_ACTION_SAVE_FAILED, ...e });
            },
            onPhotoChangeImageSelected: () => {
              Ye(i, We, { action: Rt.CODEX_PROFILE_EDIT_ACTION_MODAL_PHOTO_CHANGE_IMAGE_SELECTED });
            },
            onPhotoChangeStarted: () => {
              Ye(i, We, { action: Rt.CODEX_PROFILE_EDIT_ACTION_MODAL_PHOTO_CHANGE_STARTED });
            },
            onSaveProfile: async (e) => {
              (await R.mutateAsync(e), U(null));
            },
            onSaveSuccess: () => {
              Ye(i, We, { action: Rt.CODEX_PROFILE_EDIT_ACTION_SAVE_SUCCEEDED });
            },
            onSaveUsername: (e) => se.mutateAsync(e),
          })
        : null),
      (t[150] = He),
      (t[151] = le),
      (t[152] = xe),
      (t[153] = ce),
      (t[154] = je),
      (t[155] = ze),
      (t[156] = i),
      (t[157] = Ie),
      (t[158] = R),
      (t[159] = V),
      (t[160] = se),
      (t[161] = tn))
    : (tn = t[161]);
  let nn;
  return (
    t[162] !== vt || t[163] !== Qt || t[164] !== en || t[165] !== tn
      ? ((nn = (0, $.jsxs)(ia, { ref: _e, header: vt, children: [Qt, en, tn] })),
        (t[162] = vt),
        (t[163] = Qt),
        (t[164] = en),
        (t[165] = tn),
        (t[166] = nn))
      : (nn = t[166]),
    nn
  );
}
function ra(e) {
  return !Ut(e.id) || e.spritesheetUrl == null
    ? []
    : [
        {
          displayName: e.displayName,
          id: e.id,
          imageUrl: e.spritesheetUrl,
          spriteVersionNumber: e.spriteVersionNumber,
        },
      ];
}
function ia(e) {
  let t = (0, Ia.c)(9),
    { children: n, header: r, ref: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = (0, $.jsx)(`div`, {
        className: `flex items-center px-panel draggable electron:h-toolbar extension:h-toolbar-sm`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = !1), (t[2] = o)) : (o = t[2]);
  let s;
  t[3] === n
    ? (s = t[4])
    : ((s = (0, $.jsx)(`div`, {
        className: `flex-1 scrollbar-stable overflow-y-auto p-panel`,
        children: (0, $.jsx)(j, {
          embedded: !0,
          fullWidth: !0,
          contentClassName: `max-w-[732px] pt-12`,
          children: n,
        }),
      })),
      (t[3] = n),
      (t[4] = s));
  let c;
  return (
    t[5] !== i || t[6] !== a || t[7] !== s
      ? ((c = (0, $.jsxs)(`div`, {
          ref: i,
          className: `relative flex h-full min-h-0 flex-col electron:overflow-hidden electron:bg-surface windows:rounded-tl-lg`,
          children: [a, o, s],
        })),
        (t[5] = i),
        (t[6] = a),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function aa(e) {
  let t = (0, Ia.c)(115),
    {
      displayName: n,
      failedProfileImageUrl: r,
      isPhotoSaving: i,
      isTextSaving: a,
      onCancel: o,
      onPhotoChangeImageSelected: s,
      onPhotoChangeStarted: c,
      onProfileImageError: l,
      onSaveError: u,
      onSaveProfile: d,
      onSaveSuccess: f,
      onSaveUsername: p,
      profileImageUrl: m,
      showUsername: g,
      username: _,
    } = e,
    v = ue(),
    y = (0, Q.useId)(),
    b = (0, Q.useId)(),
    x = (0, Q.useId)(),
    S = (0, Q.useId)(),
    [w, T] = (0, Q.useState)(n ?? ``),
    [E, D] = (0, Q.useState)(_ ?? ``),
    [O, k] = (0, Q.useState)(null),
    [A, j] = (0, Q.useState)(null),
    [M, ee] = (0, Q.useState)(null),
    [ne, re] = (0, Q.useState)(null),
    [N, P] = (0, Q.useState)(null),
    [ie, F] = (0, Q.useState)(null),
    [ae, I] = (0, Q.useState)(!1),
    L = ae || a || i,
    R;
  t[0] === E ? (R = t[1]) : ((R = ke(E)), (t[0] = E), (t[1] = R));
  let z = R,
    se;
  t[2] !== w || t[3] !== L || t[4] !== g || t[5] !== z
    ? ((se = L || w.trim().length === 0 || (g && !z.ok)),
      (t[2] = w),
      (t[3] = L),
      (t[4] = g),
      (t[5] = z),
      (t[6] = se))
    : (se = t[6]);
  let ce = se,
    B = O?.previewUrl ?? m,
    V = B != null && B !== r,
    H;
  t[7] === _ ? (H = t[8]) : ((H = _?.trim() ?? ``), (t[7] = _), (t[8] = H));
  let le = H,
    U;
  t[9] !== le ||
  t[10] !== n ||
  t[11] !== w ||
  t[12] !== O ||
  t[13] !== E ||
  t[14] !== v ||
  t[15] !== ce ||
  t[16] !== o ||
  t[17] !== u ||
  t[18] !== d ||
  t[19] !== f ||
  t[20] !== p ||
  t[21] !== g
    ? ((U = async () => {
        if (ce) return;
        (ee(null), re(null), P(null), F(null));
        let e = w.trim(),
          t = De(E),
          r = n?.trim() ?? ``;
        (T(e), D(t));
        let i = e.length > 0 && e !== r,
          a = g && t !== le,
          s = O != null,
          c = {},
          l = 0,
          m = null;
        if ((i && ((c.displayName = e), (l += 1)), a)) {
          let e = ke(t);
          if (!e.ok) {
            re(ga(e.reason, v));
            return;
          }
          m = e.username;
        }
        if ((s && ((c.photo = O.photo), (l += 1)), m == null && l === 0)) {
          o();
          return;
        }
        I(!0);
        let h = Ze.CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED,
          _ = Ze.CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED;
        await (async () => {
          try {
            (m != null &&
              ((h = Ze.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED),
              await p(m),
              (h = Ze.CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED)),
              l > 0 &&
                ((_ = Ze.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED),
                await d(c),
                (_ = Ze.CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED)),
              f(),
              o());
          } catch (e) {
            let t = e;
            if (
              (u({ profileDetailsUpdateApiStatus: _, usernameUpdateApiStatus: h }),
              h === Ze.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED)
            ) {
              re(fa(t, v));
              return;
            }
            if (t instanceof Xt) {
              P(pa(t.uploadError, v));
              return;
            }
            if (l > 1) {
              F(ma(t, v));
              return;
            }
            if (i) {
              ee(da(t, v));
              return;
            }
            P(pa(t, v));
          }
        })().finally(() => {
          I(!1);
        });
      }),
      (t[9] = le),
      (t[10] = n),
      (t[11] = w),
      (t[12] = O),
      (t[13] = E),
      (t[14] = v),
      (t[15] = ce),
      (t[16] = o),
      (t[17] = u),
      (t[18] = d),
      (t[19] = f),
      (t[20] = p),
      (t[21] = g),
      (t[22] = U))
    : (U = t[22]);
  let de = U,
    fe;
  t[23] !== L || t[24] !== o
    ? ((fe = (e) => {
        !e && !L && o();
      }),
      (t[23] = L),
      (t[24] = o),
      (t[25] = fe))
    : (fe = t[25]);
  let pe;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = { onOpenAutoFocus: ca, tabIndex: -1 }), (t[26] = pe))
    : (pe = t[26]);
  let W;
  t[27] === de
    ? (W = t[28])
    : ((W = (e) => {
        (e.preventDefault(), de());
      }),
      (t[27] = de),
      (t[28] = W));
  let me;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, $.jsx)(kt, {
        className: `contents`,
        children: (0, $.jsx)(h, {
          id: `profile.editProfileTitle`,
          defaultMessage: `Edit profile`,
          description: `Title for the edit profile dialog`,
        }),
      })),
      (t[29] = me))
    : (me = t[29]);
  let G;
  t[30] === g
    ? (G = t[31])
    : ((G = (0, $.jsx)(Fe, {
        children: (0, $.jsx)(Ae, {
          title: me,
          subtitle: (0, $.jsx)(vt, {
            className: `sr-only`,
            children: g
              ? (0, $.jsx)(h, {
                  id: `profile.editProfileDescription`,
                  defaultMessage: `Update your profile picture, display name, and username`,
                  description: `Accessible description for the edit profile dialog`,
                })
              : (0, $.jsx)(h, {
                  id: `profile.editProfileDescriptionWithoutUsername`,
                  defaultMessage: `Update your profile picture and display name`,
                  description: `Accessible description for the edit profile dialog when username editing is unavailable`,
                }),
          }),
        }),
      })),
      (t[30] = g),
      (t[31] = G));
  let ge = L ? `cursor-default opacity-70` : `cursor-interaction`,
    _e;
  t[32] === ge
    ? (_e = t[33])
    : ((_e = he(
        `relative flex size-32 rounded-full outline-none focus-within:ring-1 focus-within:ring-ring`,
        ea.profilePhotoInput,
        ge,
      )),
      (t[32] = ge),
      (t[33] = _e));
  let ve = V ? B : null,
    ye;
  t[34] !== B || t[35] !== l
    ? ((ye =
        B == null
          ? void 0
          : () => {
              l(B);
            }),
      (t[34] = B),
      (t[35] = l),
      (t[36] = ye))
    : (ye = t[36]);
  let be;
  t[37] !== w || t[38] !== ve || t[39] !== ye
    ? ((be = (0, $.jsx)(oe, { alt: ``, name: w, size: `xl`, src: ve, onImageError: ye })),
      (t[37] = w),
      (t[38] = ve),
      (t[39] = ye),
      (t[40] = be))
    : (be = t[40]);
  let xe;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (0, $.jsx)(`span`, {
        className: he(
          `absolute right-1 bottom-1 flex size-9 items-center justify-center rounded-full text-white`,
          ea.profilePhotoEditBadge,
        ),
        children: (0, $.jsx)(C, { "aria-hidden": !0, className: `icon-sm` }),
      })),
      (t[41] = xe))
    : (xe = t[41]);
  let Se;
  t[42] === v
    ? (Se = t[43])
    : ((Se = v.formatMessage({
        id: `profile.photoInputLabel`,
        defaultMessage: `Change profile picture`,
        description: `Accessible label for the profile photo upload input`,
      })),
      (t[42] = v),
      (t[43] = Se));
  let K;
  t[44] === s
    ? (K = t[45])
    : ((K = (e) => {
        let t = e.currentTarget.files?.[0];
        ((e.currentTarget.value = ``),
          t != null &&
            (s(),
            _a(t).then(j, () => {
              j(null);
            })));
      }),
      (t[44] = s),
      (t[45] = K));
  let Ce;
  t[46] !== L || t[47] !== c || t[48] !== Se || t[49] !== K
    ? ((Ce = (0, $.jsx)(`input`, {
        type: `file`,
        accept: `image/*`,
        "aria-label": Se,
        className: `sr-only`,
        disabled: L,
        onClick: c,
        onChange: K,
      })),
      (t[46] = L),
      (t[47] = c),
      (t[48] = Se),
      (t[49] = K),
      (t[50] = Ce))
    : (Ce = t[50]);
  let we;
  t[51] !== L || t[52] !== _e || t[53] !== be || t[54] !== Ce
    ? ((we = (0, $.jsx)(Fe, {
        className: `items-center pt-6`,
        children: (0, $.jsxs)(`label`, {
          "aria-disabled": L,
          className: _e,
          children: [be, xe, Ce],
        }),
      })),
      (t[51] = L),
      (t[52] = _e),
      (t[53] = be),
      (t[54] = Ce),
      (t[55] = we))
    : (we = t[55]);
  let Te;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, $.jsx)(h, {
        id: `profile.nameInputLabel`,
        defaultMessage: `Display name`,
        description: `Accessible label for the editable profile display name`,
      })),
      (t[56] = Te))
    : (Te = t[56]);
  let Ee;
  t[57] === b
    ? (Ee = t[58])
    : ((Ee = (0, $.jsx)(`label`, {
        htmlFor: b,
        className: `text-sm leading-5 text-default`,
        children: Te,
      })),
      (t[57] = b),
      (t[58] = Ee));
  let Oe;
  t[59] !== y || t[60] !== M
    ? ((Oe =
        M == null
          ? null
          : (0, $.jsx)(`div`, {
              id: y,
              className: `text-sm leading-5 text-danger`,
              role: `alert`,
              children: M,
            })),
      (t[59] = y),
      (t[60] = M),
      (t[61] = Oe))
    : (Oe = t[61]);
  let q;
  t[62] !== Ee || t[63] !== Oe
    ? ((q = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-1`, children: [Ee, Oe] })),
      (t[62] = Ee),
      (t[63] = Oe),
      (t[64] = q))
    : (q = t[64]);
  let Ne = M == null ? void 0 : y,
    Pe = M != null,
    Ie;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (e) => {
        (T(e.target.value), ee(null), F(null));
      }),
      (t[65] = Ie))
    : (Ie = t[65]);
  let Le;
  t[66] !== b || t[67] !== w || t[68] !== L || t[69] !== Ne || t[70] !== Pe
    ? ((Le = (0, $.jsx)(`div`, {
        className: `flex h-10 min-w-0 items-center rounded-lg border border-primary-outline bg-primary-soft px-3 focus-within:border-ring`,
        children: (0, $.jsx)(`input`, {
          id: b,
          "aria-describedby": Ne,
          "aria-invalid": Pe,
          className: `min-w-0 flex-1 bg-transparent text-base leading-6 text-default outline-none`,
          disabled: L,
          maxLength: 64,
          onChange: Ie,
          onFocus: sa,
          spellCheck: !1,
          value: w,
        }),
      })),
      (t[66] = b),
      (t[67] = w),
      (t[68] = L),
      (t[69] = Ne),
      (t[70] = Pe),
      (t[71] = Le))
    : (Le = t[71]);
  let Re;
  t[72] !== q || t[73] !== Le
    ? ((Re = (0, $.jsxs)(`div`, {
        className: `grid min-h-[72px] grid-cols-[minmax(0,1fr)_minmax(0,220px)] items-center gap-4 px-4 py-3`,
        children: [q, Le],
      })),
      (t[72] = q),
      (t[73] = Le),
      (t[74] = Re))
    : (Re = t[74]);
  let ze;
  t[75] !== E ||
  t[76] !== v ||
  t[77] !== L ||
  t[78] !== g ||
  t[79] !== x ||
  t[80] !== ne ||
  t[81] !== S
    ? ((ze = g
        ? (0, $.jsxs)(`div`, {
            className: `grid min-h-[72px] grid-cols-[minmax(0,1fr)_minmax(0,220px)] items-center gap-4 px-4 py-3`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-1`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-1.5`,
                    children: [
                      (0, $.jsx)(`label`, {
                        htmlFor: S,
                        className: `text-sm leading-5 text-default`,
                        children: (0, $.jsx)(h, {
                          id: `profile.usernameInputLabel`,
                          defaultMessage: `Username`,
                          description: `Accessible label for the editable profile username`,
                        }),
                      }),
                      ne == null ? null : (0, $.jsx)(la, {}),
                    ],
                  }),
                  ne == null
                    ? null
                    : (0, $.jsx)(`div`, {
                        id: x,
                        className: `text-sm leading-5 text-danger`,
                        role: `alert`,
                        children: ne,
                      }),
                ],
              }),
              (0, $.jsxs)(`div`, {
                className: `flex h-10 min-w-0 items-center gap-0.5 rounded-lg border border-primary-outline bg-primary-soft px-3 text-base leading-6 focus-within:border-ring`,
                children: [
                  (0, $.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: `text-tertiary`,
                    children: (0, $.jsx)(h, {
                      id: `profile.usernamePrefix`,
                      defaultMessage: `@`,
                      description: `Prefix shown before a profile username`,
                    }),
                  }),
                  (0, $.jsx)(`input`, {
                    id: S,
                    "aria-describedby": ne == null ? void 0 : x,
                    "aria-invalid": ne != null,
                    className: `min-w-0 flex-1 bg-transparent text-base leading-6 text-default outline-none`,
                    disabled: L,
                    maxLength: 20,
                    onChange: (e) => {
                      let t = je(e.target.value),
                        n = ke(t);
                      (D(t), re(n.ok ? null : ga(n.reason, v)), F(null));
                    },
                    onFocus: oa,
                    spellCheck: !1,
                    value: E,
                  }),
                ],
              }),
            ],
          })
        : null),
      (t[75] = E),
      (t[76] = v),
      (t[77] = L),
      (t[78] = g),
      (t[79] = x),
      (t[80] = ne),
      (t[81] = S),
      (t[82] = ze))
    : (ze = t[82]);
  let Be;
  t[83] !== Re || t[84] !== ze
    ? ((Be = (0, $.jsx)(Fe, {
        className: `pt-8`,
        children: (0, $.jsxs)(`div`, {
          className: `divide-y-[0.5px] divide-border overflow-hidden rounded-lg border border-default`,
          children: [Re, ze],
        }),
      })),
      (t[83] = Re),
      (t[84] = ze),
      (t[85] = Be))
    : (Be = t[85]);
  let Ve;
  t[86] !== N || t[87] !== ie
    ? ((Ve =
        N != null || ie != null
          ? (0, $.jsx)(Fe, {
              className: `pt-3`,
              children: (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-1.5`,
                children: [
                  N == null
                    ? null
                    : (0, $.jsx)(`div`, {
                        className: `text-sm leading-5 text-danger`,
                        role: `alert`,
                        children: N,
                      }),
                  ie == null
                    ? null
                    : (0, $.jsx)(`div`, {
                        className: `text-sm leading-5 text-danger`,
                        role: `alert`,
                        children: ie,
                      }),
                ],
              }),
            })
          : null),
      (t[86] = N),
      (t[87] = ie),
      (t[88] = Ve))
    : (Ve = t[88]);
  let He;
  t[89] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (0, $.jsx)(h, {
        id: `profile.editProfileCancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels profile editing`,
      })),
      (t[89] = He))
    : (He = t[89]);
  let Ue;
  t[90] !== L || t[91] !== o
    ? ((Ue = (0, $.jsx)(ut, { color: `ghost`, disabled: L, onClick: o, children: He })),
      (t[90] = L),
      (t[91] = o),
      (t[92] = Ue))
    : (Ue = t[92]);
  let We;
  t[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = (0, $.jsx)(h, {
        id: `profile.editProfileSave`,
        defaultMessage: `Save`,
        description: `Button that saves profile edits`,
      })),
      (t[93] = We))
    : (We = t[93]);
  let Ge;
  t[94] !== ce || t[95] !== ae
    ? ((Ge = (0, $.jsx)(ut, { type: `submit`, disabled: ce, loading: ae, children: We })),
      (t[94] = ce),
      (t[95] = ae),
      (t[96] = Ge))
    : (Ge = t[96]);
  let Ke;
  t[97] !== Ue || t[98] !== Ge
    ? ((Ke = (0, $.jsx)(Fe, {
        className: `pt-5`,
        children: (0, $.jsxs)(Me, { children: [Ue, Ge] }),
      })),
      (t[97] = Ue),
      (t[98] = Ge),
      (t[99] = Ke))
    : (Ke = t[99]);
  let qe;
  t[100] !== we || t[101] !== Be || t[102] !== Ve || t[103] !== Ke || t[104] !== W || t[105] !== G
    ? ((qe = (0, $.jsxs)(te, {
        as: `form`,
        className: `gap-0`,
        onSubmit: W,
        children: [G, we, Be, Ve, Ke],
      })),
      (t[100] = we),
      (t[101] = Be),
      (t[102] = Ve),
      (t[103] = Ke),
      (t[104] = W),
      (t[105] = G),
      (t[106] = qe))
    : (qe = t[106]);
  let Je;
  t[107] !== qe || t[108] !== fe
    ? ((Je = (0, $.jsx)(It, {
        open: !0,
        onOpenChange: fe,
        contentProps: pe,
        showDialogClose: !1,
        size: `default`,
        children: qe,
      })),
      (t[107] = qe),
      (t[108] = fe),
      (t[109] = Je))
    : (Je = t[109]);
  let J;
  t[110] === A
    ? (J = t[111])
    : ((J =
        A == null
          ? null
          : (0, $.jsx)(Hn, {
              source: A,
              onCancel: () => {
                j(null);
              },
              onSave: (e) => {
                (k(e), j(null), P(null), F(null));
              },
            })),
      (t[110] = A),
      (t[111] = J));
  let Ye;
  return (
    t[112] !== Je || t[113] !== J
      ? ((Ye = (0, $.jsxs)($.Fragment, { children: [Je, J] })),
        (t[112] = Je),
        (t[113] = J),
        (t[114] = Ye))
      : (Ye = t[114]),
    Ye
  );
}
function oa(e) {
  e.currentTarget.select();
}
function sa(e) {
  e.currentTarget.select();
}
function ca(e) {
  (e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus());
}
function la() {
  let e = (0, Ia.c)(6),
    t = ue(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(h, {
        id: `profile.usernameHelper`,
        defaultMessage: `Use 3-20 lowercase letters, numbers, periods, underscores, or hyphens`,
        description: `Helper text explaining allowed username characters`,
      })),
      (e[0] = n))
    : (n = e[0]);
  let r;
  e[1] === t
    ? (r = e[2])
    : ((r = t.formatMessage({
        id: `profile.usernameRequirementsLabel`,
        defaultMessage: `Username requirements`,
        description: `Accessible label for the username requirements tooltip trigger`,
      })),
      (e[1] = t),
      (e[2] = r));
  let a;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(i, { "aria-hidden": !0, className: `icon-2xs` })), (e[3] = a))
    : (a = e[3]);
  let o;
  return (
    e[4] === r
      ? (o = e[5])
      : ((o = (0, $.jsx)(P, {
          side: `top`,
          tooltipContent: n,
          children: (0, $.jsx)(`button`, {
            type: `button`,
            "aria-label": r,
            className: `flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full border-0 bg-transparent p-0 text-tertiary outline-none hover:text-default focus-visible:ring-2 focus-visible:ring-ring`,
            children: a,
          }),
        })),
        (e[4] = r),
        (e[5] = o)),
    o
  );
}
function ua(e) {
  let t = (0, Ia.c)(2),
    { accountLabel: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(`span`, {
          className: `inline-flex h-6 items-center rounded-lg border border-subtle px-[5px] text-sm leading-5 text-tertiary`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function da(e, t) {
  return (
    ha(e) ??
    t.formatMessage({
      id: `profile.displayNameUpdateError`,
      defaultMessage: `Unable to update display name`,
      description: `Fallback error shown when profile display name update fails`,
    })
  );
}
function fa(e, t) {
  return e instanceof E
    ? ga(e.reason, t)
    : (ha(e) ??
        t.formatMessage({
          id: `profile.usernameUpdateError`,
          defaultMessage: `Unable to update username`,
          description: `Fallback error shown when profile username update fails`,
        }));
}
function pa(e, t) {
  return (
    ha(e) ??
    t.formatMessage({
      id: `profile.photoUpdateError`,
      defaultMessage: `Unable to update profile picture`,
      description: `Fallback error shown when profile picture update fails`,
    })
  );
}
function ma(e, t) {
  return (
    ha(e) ??
    t.formatMessage({
      id: `profile.updateError`,
      defaultMessage: `Unable to update profile`,
      description: `Fallback error shown when profile update fails`,
    })
  );
}
function ha(e) {
  if (e instanceof Error) {
    let t = W(e);
    if (t != null) return t.message;
    if (e.message.length > 0) {
      try {
        let t = La.safeParse(JSON.parse(e.message));
        if (t.success) return t.data.msg;
      } catch {}
      return e.message;
    }
  }
  return null;
}
function ga(e, t) {
  switch (e) {
    case `empty`:
      return t.formatMessage({
        id: `profile.usernameValidation.empty`,
        defaultMessage: `Enter a username`,
        description: `Error shown when submitting an empty profile username`,
      });
    case `invalidCharacters`:
      return t.formatMessage({
        id: `profile.usernameValidation.invalidCharacters`,
        defaultMessage: `Use only lowercase letters, numbers, periods, underscores, or hyphens`,
        description: `Error shown when a profile username contains unsupported characters`,
      });
    case `tooLong`:
      return t.formatMessage({
        id: `profile.usernameValidation.tooLong`,
        defaultMessage: `Username must be 20 characters or fewer`,
        description: `Error shown when a profile username is too long`,
      });
    case `tooShort`:
      return t.formatMessage({
        id: `profile.usernameValidation.tooShort`,
        defaultMessage: `Username must be at least 3 characters long`,
        description: `Error shown when a profile username is too short`,
      });
  }
}
function _a(e) {
  return new Promise((t, n) => {
    let r = new FileReader();
    ((r.onerror = () => {
      n(r.error ?? Error(`Unable to read profile photo`));
    }),
      (r.onload = () => {
        if (typeof r.result != `string`) {
          n(Error(`Unable to read profile photo`));
          return;
        }
        t({
          contentType: e.type.trim() || `image/jpeg`,
          dataUrl: r.result,
          filename: e.name.trim() || `profile-photo.jpg`,
        });
      }),
      r.readAsDataURL(e));
  });
}
function va(e) {
  let t = (0, Ia.c)(8),
    { avatar: n, showsPet: r } = e,
    i,
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(ya, { className: `absolute top-0 left-[72px] size-20 rounded-full` })),
      (a = (0, $.jsx)(ya, { className: `absolute top-[100px] left-0 h-8 w-56 rounded-lg` })),
      (o = (0, $.jsx)(ya, { className: `absolute top-[136px] left-12 h-5 w-32 rounded-lg` })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o))
    : ((i = t[0]), (a = t[1]), (o = t[2]));
  let s;
  t[3] !== n || t[4] !== r
    ? ((s = r
        ? (0, $.jsx)(`div`, {
            className: `absolute top-8 left-32 flex size-14 items-center justify-center`,
            children: (0, $.jsx)(Pa, { avatar: n }),
          })
        : null),
      (t[3] = n),
      (t[4] = r),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] === s
      ? (c = t[7])
      : ((c = (0, $.jsxs)(`div`, {
          "aria-hidden": !0,
          className: `relative h-[152px] w-56`,
          children: [i, a, o, s],
        })),
        (t[6] = s),
        (t[7] = c)),
    c
  );
}
function ya(e) {
  let t = (0, Ia.c)(4),
    { className: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = he(ea.profileLoadingBlock, `block`, n)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, $.jsx)(`span`, { "aria-hidden": !0, className: r })), (t[2] = r), (t[3] = i)),
    i
  );
}
function ba() {
  let e = (0, Ia.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)($.Fragment, { children: Ra.map(xa) })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function xa(e, t) {
  return (0, $.jsxs)(
    Q.Fragment,
    {
      children: [
        t > 0 ? (0, $.jsx)(F, {}) : null,
        (0, $.jsxs)(`div`, {
          className: `flex min-w-px flex-1 flex-col items-center justify-center gap-1 overflow-hidden px-3 py-2.5`,
          children: [
            (0, $.jsx)(ya, { className: `h-5 w-12 rounded-md` }),
            (0, $.jsx)(ya, { className: `h-5 w-20 rounded-md` }),
          ],
        }),
      ],
    },
    e,
  );
}
function Sa() {
  let e = (0, Ia.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[60px] w-full items-center justify-center px-4 py-3 text-center text-base text-tertiary`,
          children: (0, $.jsx)(h, {
            id: `profile.stats.unavailable`,
            defaultMessage: `Profile stats unavailable`,
            description: `Empty state shown when profile stats fail to load`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ca(e) {
  let t = (0, Ia.c)(12),
    { columnCount: n, monthLabelCount: r } = e,
    i = `repeat(${n}, minmax(1px, 1fr))`,
    a;
  t[0] === i ? (a = t[1]) : ((a = { gridTemplateColumns: i }), (t[0] = i), (t[1] = a));
  let o;
  t[2] === n ? (o = t[3]) : ((o = Array.from({ length: n * 7 }, Ta)), (t[2] = n), (t[3] = o));
  let s;
  t[4] !== a || t[5] !== o
    ? ((s = (0, $.jsx)(`div`, {
        className: `grid grid-flow-col grid-rows-[repeat(7,minmax(1px,1fr))] gap-[3px] overflow-hidden`,
        style: a,
        children: o,
      })),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === r
    ? (c = t[8])
    : ((c = (0, $.jsx)(`div`, {
        className: `flex items-center justify-between`,
        children: Array.from({ length: r }, wa),
      })),
      (t[7] = r),
      (t[8] = c));
  let l;
  return (
    t[9] !== s || t[10] !== c
      ? ((l = (0, $.jsxs)(`div`, {
          "aria-hidden": !0,
          className: `flex flex-col gap-2`,
          children: [s, c],
        })),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function wa(e, t) {
  return (0, $.jsx)(ya, { className: `h-4 w-6 rounded-md` }, t);
}
function Ta(e, t) {
  return (0, $.jsx)(ya, { className: `aspect-square w-full rounded-[4px]` }, t);
}
function Ea() {
  let e = (0, Ia.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-40 items-center justify-center rounded-2xl border border-subtle px-4 text-center text-sm text-tertiary`,
          children: (0, $.jsx)(h, {
            id: `profile.tokenUsage.unavailable`,
            defaultMessage: `Token usage unavailable`,
            description: `Empty state shown when profile token usage fails to load`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Da(e) {
  let t = (0, Ia.c)(16),
    { insights: n, isLoading: r, isUnavailable: i } = e,
    a = !r && !i && n != null,
    o;
  t[0] === a ? (o = t[1]) : ((o = { enabled: a, hostId: J }), (t[0] = a), (t[1] = o));
  let s = u(o),
    c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = []), (t[2] = c)) : (c = t[2]);
  let l;
  t[3] === s ? (l = t[4]) : ((l = { enabled: s, hostId: J, roots: c }), (t[3] = s), (t[4] = l));
  let { data: d } = G(l),
    f;
  t[5] !== n?.invocations || t[6] !== d
    ? ((f =
        d != null &&
        n?.invocations?.some((e) => {
          let t = e.plugin_name ?? (e.type === `skill` ? e.skill_name?.split(`:`)[0] : null);
          return (
            (e.plugin_id != null || t != null) &&
            !d.some((n) => {
              let { plugin: r } = n;
              return r.id === e.plugin_id || r.name === t;
            })
          );
        }) === !0),
      (t[5] = n?.invocations),
      (t[6] = d),
      (t[7] = f))
    : (f = t[7]);
  let p = f,
    m;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = []), (t[8] = m)) : (m = t[8]);
  let h = s && p,
    g;
  t[9] === h ? (g = t[10]) : ((g = { enabled: h }), (t[9] = h), (t[10] = g));
  let { availablePlugins: _ } = qe(J, m, g);
  if (r) {
    let e;
    return (
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(ka, {})), (t[11] = e))
        : (e = t[11]),
      e
    );
  }
  if (!i && n != null) {
    let e = p ? _ : d,
      r;
    return (
      t[12] !== n || t[13] !== e
        ? ((r = (0, $.jsx)(An, { insights: n, plugins: e })), (t[12] = n), (t[13] = e), (t[14] = r))
        : (r = t[14]),
      r
    );
  }
  let v;
  return (
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (0, $.jsx)(Oa, {})), (t[15] = v))
      : (v = t[15]),
    v
  );
}
function Oa() {
  let e = (0, Ia.c)(6),
    t = ue(),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n = t.formatMessage({
        id: `profile.activity.ariaLabel`,
        defaultMessage: `Codex activity`,
        description: `Accessible label for the Codex activity profile section`,
      })),
      (e[0] = t),
      (e[1] = n));
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(`h2`, {
        className: `text-base leading-5 font-medium text-default`,
        children: (0, $.jsx)(h, {
          id: `profile.activity.insights.title`,
          defaultMessage: `Activity insights`,
          description: `Heading for Codex activity insights on the profile page`,
        }),
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`div`, {
        className: `flex min-h-40 items-center justify-center rounded-2xl border border-subtle px-4 text-center text-sm text-tertiary`,
        children: (0, $.jsx)(h, {
          id: `profile.activity.unavailable`,
          defaultMessage: `Activity insights unavailable`,
          description: `Empty state shown when profile activity stats fail to load`,
        }),
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  return (
    e[4] === n
      ? (a = e[5])
      : ((a = (0, $.jsxs)(`section`, {
          "aria-label": n,
          className: `flex flex-col gap-2`,
          children: [r, i],
        })),
        (e[4] = n),
        (e[5] = a)),
    a
  );
}
function ka() {
  let e = (0, Ia.c)(8),
    t = ue(),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n = t.formatMessage({
        id: `profile.activity.ariaLabel`,
        defaultMessage: `Codex activity`,
        description: `Accessible label for the Codex activity profile section`,
      })),
      (e[0] = t),
      (e[1] = n));
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(`h2`, {
        className: `text-base leading-5 font-medium text-default`,
        children: (0, $.jsx)(h, {
          id: `profile.activity.insights.title`,
          defaultMessage: `Activity insights`,
          description: `Heading for Codex activity insights on the profile page`,
        }),
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-2`,
        children: [
          r,
          (0, $.jsx)(`div`, {
            "aria-hidden": !0,
            className: `flex flex-col gap-2`,
            children: Array.from({ length: 5 }, ja),
          }),
        ],
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`h2`, {
        className: `text-base leading-5 font-medium text-default`,
        children: (0, $.jsx)(h, {
          id: `profile.activity.plugins.title`,
          defaultMessage: `Most used plugins`,
          description: `Heading for the most used Codex plugins on the profile page`,
        }),
      })),
      (e[4] = a))
    : (a = e[4]);
  let o;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-2`,
        children: [
          a,
          (0, $.jsx)(`div`, {
            "aria-hidden": !0,
            className: `flex flex-col gap-2`,
            children: Array.from({ length: 5 }, Aa),
          }),
        ],
      })),
      (e[5] = o))
    : (o = e[5]);
  let s;
  return (
    e[6] === n
      ? (s = e[7])
      : ((s = (0, $.jsxs)(`section`, {
          "aria-busy": !0,
          "aria-label": n,
          className: `grid grid-cols-2 gap-10`,
          children: [i, o],
        })),
        (e[6] = n),
        (e[7] = s)),
    s
  );
}
function Aa(e, t) {
  return (0, $.jsxs)(
    `div`,
    {
      className: `flex h-6 items-center justify-between gap-3`,
      children: [
        (0, $.jsxs)(`div`, {
          className: `flex items-center gap-1.5`,
          children: [
            (0, $.jsx)(ya, { className: `size-6 rounded-lg` }),
            (0, $.jsx)(ya, { className: `h-5 w-24 rounded-md` }),
          ],
        }),
        (0, $.jsx)(ya, { className: `h-5 w-14 rounded-md` }),
      ],
    },
    t,
  );
}
function ja(e, t) {
  return (0, $.jsxs)(
    `div`,
    {
      className: `flex h-6 items-center justify-between gap-3`,
      children: [
        (0, $.jsx)(ya, { className: `h-5 w-24 rounded-md` }),
        (0, $.jsx)(ya, { className: `h-5 w-10 rounded-md` }),
      ],
    },
    t,
  );
}
function Ma(e) {
  let t = (0, Ia.c)(13),
    { label: n, value: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, $.jsx)(`div`, {
        className: `w-full truncate leading-5 text-default`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] !== i || t[3] !== r
    ? ((a = (0, $.jsx)(P, { openWhen: `trigger-overflows`, tooltipContent: r, children: i })),
      (t[2] = i),
      (t[3] = r),
      (t[4] = a))
    : (a = t[4]);
  let o;
  t[5] === n
    ? (o = t[6])
    : ((o = (0, $.jsx)(`div`, {
        className: `w-full truncate leading-5 text-secondary`,
        children: n,
      })),
      (t[5] = n),
      (t[6] = o));
  let s;
  t[7] !== n || t[8] !== o
    ? ((s = (0, $.jsx)(P, { openWhen: `trigger-overflows`, tooltipContent: n, children: o })),
      (t[7] = n),
      (t[8] = o),
      (t[9] = s))
    : (s = t[9]);
  let c;
  return (
    t[10] !== a || t[11] !== s
      ? ((c = (0, $.jsxs)(`div`, {
          className: `flex min-w-px flex-1 flex-col items-center justify-center overflow-hidden px-3 py-2.5 text-center text-base font-normal`,
          children: [a, s],
        })),
        (t[10] = a),
        (t[11] = s),
        (t[12] = c))
      : (c = t[12]),
    c
  );
}
function Na(e) {
  let t = (0, Ia.c)(10),
    { active: n, children: r, disabled: i, onSelect: a } = e,
    o = i ? `cursor-default` : `cursor-interaction`,
    s = n ? `text-default` : `text-tertiary`,
    c = !n && !i && `hover:text-default focus-visible:text-default`,
    l;
  t[0] !== o || t[1] !== s || t[2] !== c
    ? ((l = he(
        `text-base leading-5 font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring`,
        o,
        s,
        c,
      )),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c),
      (t[3] = l))
    : (l = t[3]);
  let u;
  return (
    t[4] !== n || t[5] !== r || t[6] !== i || t[7] !== a || t[8] !== l
      ? ((u = (0, $.jsx)(`button`, {
          type: `button`,
          className: l,
          "aria-pressed": n,
          disabled: i,
          onClick: a,
          children: r,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function Pa(e) {
  let t = (0, Ia.c)(10),
    { avatar: n } = e,
    [r, i] = (0, Q.useState)(!1),
    a = n.id,
    o,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = () => {
        i(!0);
      }),
      (s = () => {
        i(!1);
      }),
      (t[0] = o),
      (t[1] = s))
    : ((o = t[0]), (s = t[1]));
  let c;
  t[2] === n ? (c = t[3]) : ((c = ge(n)), (t[2] = n), (t[3] = c));
  let l = r ? `jumping` : `idle`,
    u;
  t[4] !== c || t[5] !== l
    ? ((u = (0, $.jsx)(nt, { assetMap: mn, className: `scale-75`, source: c, state: l })),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u))
    : (u = t[6]);
  let d;
  return (
    t[7] !== n.id || t[8] !== u
      ? ((d = (0, $.jsx)(`div`, {
          className: `flex size-14 shrink-0 items-center justify-center overflow-visible`,
          "data-avatar-id": a,
          onPointerEnter: o,
          onPointerLeave: s,
          children: u,
        })),
        (t[7] = n.id),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
function Fa(e) {
  let t = Object.fromEntries(Object.entries(e));
  if (Object.keys(t).length === 0) return e.stack ?? e.message;
  try {
    return JSON.stringify({ name: e.name, message: e.message, stack: e.stack, ...t }, null, 2);
  } catch {
    return e.stack ?? e.message;
  }
}
var Ia, Q, $, La, Ra;
e(() => {
  ((Ia = ft()),
    Je(),
    Tt(),
    gn(),
    de(),
    Qt(),
    H(),
    d(),
    (Q = t(l(), 1)),
    ye(),
    jt(),
    zt(),
    we(),
    pn(),
    p(),
    D(),
    wn(),
    un(),
    At(),
    B(),
    s(),
    at(),
    Xe(),
    tt(),
    ee(),
    kn(),
    mt(),
    Pt(),
    A(),
    ot(),
    V(),
    Be(),
    pe(),
    bt(),
    q(),
    N(),
    Re(),
    r(),
    le(),
    o(),
    Rn(),
    Ne(),
    ur(),
    He(),
    Xi(),
    ta(),
    ($ = it()),
    (La = Se({ type: pt(), msg: pt() })),
    (Ra = [
      `totalTextTokens`,
      `peakTokens`,
      `longestTaskDurationMs`,
      `currentStreakDays`,
      `longestStreakDays`,
    ]));
})();
export { na as Profile };
//# sourceMappingURL=profile-bf2928c08023.js.map
