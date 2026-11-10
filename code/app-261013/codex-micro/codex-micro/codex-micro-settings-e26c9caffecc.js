import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $nt as r,
  ADt as i,
  AO as a,
  CO as o,
  Cot as s,
  DDt as c,
  Fat as l,
  IDt as u,
  IF as d,
  Ixt as f,
  JC as p,
  JO as m,
  Jy as h,
  Kat as g,
  MO as _,
  Mz as v,
  Nz as y,
  Pat as b,
  Pxt as x,
  SJ as S,
  TJ as C,
  TO as w,
  VDt as T,
  Vxt as E,
  Wnt as D,
  Xot as O,
  Yot as k,
  Yy as A,
  _Mt as j,
  _O as M,
  b0 as N,
  cO as ee,
  cz as P,
  fO as F,
  gMt as I,
  gO as te,
  gvt as ne,
  hk as L,
  hvt as R,
  i3 as z,
  ij as B,
  iot as V,
  iw as H,
  jDt as U,
  jO as W,
  lO as re,
  lgt as G,
  mO as ie,
  mk as ae,
  mvt as oe,
  n4 as se,
  oO as ce,
  pM as K,
  pvt as le,
  qC as ue,
  qO as de,
  qat as fe,
  qnt as pe,
  r3 as me,
  rj as he,
  rst as ge,
  sMt as _e,
  sO as ve,
  slt as q,
  sz as ye,
  t3 as be,
  t4 as xe,
  tMt as Se,
  tw as Ce,
  uM as we,
  vO as Te,
  vvt as Ee,
  vzt as De,
  wot as Oe,
  xMt as ke,
  y0 as Ae,
  yvt as je,
  yzt as Me,
  zxt as Ne,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ct as Pe,
  $gn as Fe,
  $lr as Ie,
  ARt as Le,
  CDt as Re,
  Cit as ze,
  Cyn as Be,
  DPn as Ve,
  Dq as He,
  Dyn as Ue,
  EPn as We,
  Ed as Ge,
  Ek as Ke,
  Eq as qe,
  FEr as Je,
  G4n as Ye,
  Grt as Xe,
  I3n as Ze,
  J4n as Qe,
  Ltn as $e,
  Od as et,
  PEr as tt,
  QP as nt,
  Qot as rt,
  RSn as it,
  Rtn as at,
  SDt as ot,
  T0 as st,
  T3n as ct,
  Td as lt,
  Tk as ut,
  Tm as dt,
  Wrt as ft,
  XPr as pt,
  Xct as mt,
  Xot as ht,
  YPr as gt,
  Zgn as _t,
  Zot as vt,
  _F as yt,
  a4 as bt,
  ast as xt,
  cMr as St,
  dAn as Ct,
  dNr as wt,
  dP as Tt,
  eDr as Et,
  ean as Dt,
  eur as Ot,
  fAn as kt,
  fMr as At,
  hF as jt,
  i4 as Mt,
  ist as Nt,
  jRt as Pt,
  jd as Ft,
  l4 as It,
  lF as Lt,
  mP as Rt,
  mtr as zt,
  nDr as Bt,
  nF as Vt,
  nfn as Ht,
  oFr as Ut,
  rF as Wt,
  rfn as Gt,
  rst as Kt,
  tF as qt,
  tan as Jt,
  tst as Yt,
  u4 as Xt,
  uF as Zt,
  vSn as Qt,
  w0 as $t,
  wit as en,
  wm as tn,
  ySn as nn,
  yyn as rn,
} from "./app-initial-5851df3f6cb1.js";
import { D_ as an, E_ as on, Ec as sn, Oc as cn } from "./app-primary-fe8a450b3b04.js";
import { i as ln, n as un, t as dn } from "./codex-micro-commands-fdc168b3622a.js";
import {
  c as fn,
  d as pn,
  f as mn,
  i as hn,
  l as gn,
  n as _n,
  o as vn,
  r as yn,
  s as bn,
  u as xn,
} from "./codex-micro-layout-3ae79f44ce27.js";
import {
  c as Sn,
  f as Cn,
  n as wn,
  o as Tn,
  r as En,
  u as Dn,
} from "./codex-micro-slot-signals-838363a53538.js";
import { n as On, r as kn, t as An } from "./command-messages-54cbbed1e112.js";
import { n as jn, t as Mn } from "./codex-micro-analog-action-title-56f79effef85.js";
import {
  a as Nn,
  c as Pn,
  d as Fn,
  f as In,
  i as Ln,
  l as Rn,
  n as zn,
  o as Bn,
  p as Vn,
  r as Hn,
  s as Un,
  t as Wn,
  u as Gn,
} from "./codex-micro-keyboard-surface-f2d6fa0a8efb.js";
import { n as Kn, t as qn } from "./keyboard-shortcuts-search-input-24effdcb9c56.js";
function Jn(e, t, n) {
  let r = t.trim(),
    i = (0, Xn.default)(
      e.flatMap((e) => {
        if (e.id === `personalitySettings`) return [];
        let { description: t, title: i } = An(e, n);
        return r.length > 0 && ![e.id, i, t].some((e) => He(e, r) > 0)
          ? []
          : [
              {
                command: e,
                description: t,
                group: `commandMenuGroupKey` in e ? (e.commandMenuGroupKey ?? `app`) : `app`,
                title: i,
              },
            ];
      }),
      (e) => e.title.toLowerCase(),
    );
  return nn.flatMap((e) => {
    let t = i.filter((t) => t.group === e);
    return t.length === 0 ? [] : [{ id: e, label: n.formatMessage(Qn[e]), options: t }];
  });
}
function Yn(e) {
  let t = wt();
  return (0, Xn.default)(
    (0, Zn.default)(
      e.filter((e) => e.enabled && dt(e, t)),
      (e) => e.path,
    ),
    (e) => we(e).toLowerCase(),
  );
}
var Xn, Zn, Qn;
function $n() {
  return ($n = e(() => {
    (Qt(),
      (Xn = t(Se(), 1)),
      (Zn = t(_e(), 1)),
      U(),
      kn(),
      qe(),
      tn(),
      K(),
      (Qn = i({
        thread: {
          id: `settings.codexMicro.analog.commands.thread`,
          defaultMessage: `Chat`,
          description: `Section heading for Codex Micro task action choices`,
        },
        navigation: {
          id: `settings.codexMicro.analog.commands.navigation`,
          defaultMessage: `Navigation`,
          description: `Section heading for Codex Micro navigation action choices`,
        },
        panels: {
          id: `settings.codexMicro.analog.commands.panels`,
          defaultMessage: `Panels`,
          description: `Section heading for Codex Micro panel action choices`,
        },
        workspace: {
          id: `settings.codexMicro.analog.commands.workspace`,
          defaultMessage: `Workspace`,
          description: `Section heading for Codex Micro workspace action choices`,
        },
        skills: {
          id: `settings.codexMicro.analog.commands.skills`,
          defaultMessage: `Skill actions`,
          description: `Section heading for Codex Micro skill management action choices`,
        },
        configure: {
          id: `settings.codexMicro.analog.commands.configure`,
          defaultMessage: `Settings`,
          description: `Section heading for Codex Micro settings action choices`,
        },
        app: {
          id: `settings.codexMicro.analog.commands.app`,
          defaultMessage: `App`,
          description: `Section heading for Codex Micro app action choices`,
        },
      })));
  }))();
}
function er(e) {
  let t = (0, rr.c)(46),
    {
      commands: r,
      heading: i,
      searchAriaLabel: a,
      searchQuery: o,
      selectedAction: s,
      skills: c,
      onActionChange: l,
      onSearchQueryChange: f,
    } = e,
    p = T(),
    m,
    h,
    g,
    _,
    v,
    y;
  if (
    t[0] !== r ||
    t[1] !== i ||
    t[2] !== p ||
    t[3] !== l ||
    t[4] !== f ||
    t[5] !== a ||
    t[6] !== o ||
    t[7] !== s ||
    t[8] !== c
  ) {
    let e = Yn(c),
      b = o.trim(),
      x;
    t[15] === s
      ? (x = t[16])
      : ((x = s?.type === `command` ? un(s.commandId)?.id : null), (t[15] = s), (t[16] = x));
    let C = x,
      w =
        s == null
          ? p.formatMessage({
              id: `settings.codexMicro.actionPicker.none`,
              defaultMessage: `None`,
              description: `Short label for a Codex Micro control with no action assigned`,
            })
          : Mn(s, e, p),
      T = e.filter((e) => b.length === 0 || [e.name, we(e), d(e)].some((e) => He(e, b) > 0)),
      E = Jn(r, b, p),
      D;
    t[17] === p
      ? (D = t[18])
      : ((D = p.formatMessage({
          id: `settings.codexMicro.analog.clearAssignment`,
          defaultMessage: `Clear assignment`,
          description: `Accessible label and tooltip for clearing a Codex Micro control action assignment`,
        })),
        (t[17] = p),
        (t[18] = D));
    let O = D;
    ((m = re), (_ = `flex min-h-0 flex-1 flex-col gap-3`));
    let k;
    t[19] === i
      ? (k = t[20])
      : ((k = (0, J.jsx)(`span`, { className: `font-medium`, children: i })), (t[19] = i), (t[20] = k));
    let A;
    t[21] === p
      ? (A = t[22])
      : ((A = p.formatMessage({
          id: `settings.codexMicro.analog.currentAssignment`,
          defaultMessage: `Current assignment`,
          description: `Accessible label for the current Codex Micro control action assignment`,
        })),
        (t[21] = p),
        (t[22] = A));
    let j;
    t[23] !== O || t[24] !== l || t[25] !== s
      ? ((j =
          s == null
            ? null
            : (0, J.jsx)(ye, {
                tooltipContent: O,
                children: (0, J.jsx)(n, {
                  uniform: !0,
                  "aria-label": O,
                  className: `shrink-0`,
                  color: `ghost`,
                  radius: `small`,
                  size: `iconCircleSm`,
                  onClick: () => {
                    l(null);
                  },
                  children: (0, J.jsx)(S, {}),
                }),
              })),
        (t[23] = O),
        (t[24] = l),
        (t[25] = s),
        (t[26] = j))
      : (j = t[26]);
    let M = (0, J.jsxs)(`div`, {
      "aria-label": A,
      className: `flex max-w-[60%] min-w-0 items-center gap-1`,
      role: `group`,
      children: [(0, J.jsx)(tr, { title: w, unassigned: s == null }), j],
    });
    t[27] !== M || t[28] !== k
      ? ((v = (0, J.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4 text-sm`,
          children: [k, M],
        })),
        (t[27] = M),
        (t[28] = k),
        (t[29] = v))
      : (v = t[29]);
    let N;
    (t[30] === p
      ? (N = t[31])
      : ((N = p.formatMessage({
          id: `settings.codexMicro.analog.search.placeholder`,
          defaultMessage: `Search actions and skills`,
          description: `Placeholder for searching actions and skills in a Codex Micro control mapping dialog`,
        })),
        (t[30] = p),
        (t[31] = N)),
      t[32] !== f || t[33] !== a || t[34] !== o || t[35] !== N
        ? ((y = (0, J.jsx)(qn, { ariaLabel: a, placeholder: N, value: o, onValueChange: f })),
          (t[32] = f),
          (t[33] = a),
          (t[34] = o),
          (t[35] = N),
          (t[36] = y))
        : (y = t[36]),
      (h = `vertical-scroll-fade-mask min-h-0 flex-1 overflow-y-auto pe-1 [--edge-fade-distance:1rem]`),
      (g =
        T.length === 0 && E.length === 0
          ? (0, J.jsx)(`div`, {
              className: `py-2 text-sm text-secondary`,
              children: (0, J.jsx)(u, {
                id: `settings.codexMicro.analog.noResults`,
                defaultMessage: `No matching actions or skills`,
                description: `Empty search state for Codex Micro control action choices`,
              }),
            })
          : (0, J.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [
                T.length === 0
                  ? null
                  : (0, J.jsxs)(ut, {
                      children: [
                        (0, J.jsx)(ut.Header, {
                          title: (0, J.jsx)(u, {
                            id: `settings.codexMicro.analog.skills`,
                            defaultMessage: `Skills`,
                            description: `Section heading for Codex Micro control skill choices`,
                          }),
                        }),
                        (0, J.jsx)(ut.Content, {
                          children: T.map((e) =>
                            (0, J.jsx)(
                              nr,
                              {
                                description: d(e),
                                isSelected:
                                  s?.type === `skill` && s.skillName === e.name && s.skillPath === e.path,
                                onSelect: () => {
                                  l({ type: `skill`, skillName: e.name, skillPath: e.path });
                                },
                                title: we(e),
                              },
                              e.path,
                            ),
                          ),
                        }),
                      ],
                    }),
                E.map((e) =>
                  (0, J.jsxs)(
                    ut,
                    {
                      children: [
                        (0, J.jsx)(ut.Header, { title: e.label }),
                        (0, J.jsx)(ut.Content, {
                          children: e.options.map((e) => {
                            let { command: t, description: n, title: r } = e;
                            return (0, J.jsx)(
                              nr,
                              {
                                description: n || null,
                                isSelected: C === t.id,
                                onSelect: () => {
                                  l({ type: `command`, commandId: t.id });
                                },
                                title: r,
                              },
                              t.id,
                            );
                          }),
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              ],
            })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = p),
      (t[3] = l),
      (t[4] = f),
      (t[5] = a),
      (t[6] = o),
      (t[7] = s),
      (t[8] = c),
      (t[9] = m),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y));
  } else ((m = t[9]), (h = t[10]), (g = t[11]), (_ = t[12]), (v = t[13]), (y = t[14]));
  let b;
  t[37] !== h || t[38] !== g
    ? ((b = (0, J.jsx)(`div`, { className: h, children: g })), (t[37] = h), (t[38] = g), (t[39] = b))
    : (b = t[39]);
  let x;
  return (
    t[40] !== m || t[41] !== _ || t[42] !== v || t[43] !== y || t[44] !== b
      ? ((x = (0, J.jsxs)(m, { className: _, children: [v, y, b] })),
        (t[40] = m),
        (t[41] = _),
        (t[42] = v),
        (t[43] = y),
        (t[44] = b),
        (t[45] = x))
      : (x = t[45]),
    x
  );
}
function tr(e) {
  let t = (0, rr.c)(7),
    { compact: n, title: r, unassigned: i } = e,
    a = n !== void 0 && n,
    o = a || void 0,
    s = a ? `max-w-56 text-xs` : `max-w-full`,
    c = i && `text-codex-description`,
    l;
  t[0] !== s || t[1] !== c
    ? ((l = I(`block truncate`, s, c)), (t[0] = s), (t[1] = c), (t[2] = l))
    : (l = t[2]);
  let u;
  return (
    t[3] !== o || t[4] !== l || t[5] !== r
      ? ((u = (0, J.jsx)(`span`, { "data-tooltip-overflow-target": o, className: l, children: r })),
        (t[3] = o),
        (t[4] = l),
        (t[5] = r),
        (t[6] = u))
      : (u = t[6]),
    u
  );
}
function nr(e) {
  let t = (0, rr.c)(11),
    { description: n, isSelected: r, onSelect: i, title: a } = e,
    o = r ? `true` : void 0,
    s;
  t[0] === r
    ? (s = t[1])
    : ((s = r ? (0, J.jsx)(v, { className: `shrink-0 text-info`, "aria-hidden": !1, asset: Ae }) : null),
      (t[0] = r),
      (t[1] = s));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = n == null ? null : (0, J.jsx)(`span`, { className: `block truncate`, children: n })),
      (t[2] = n),
      (t[3] = c));
  let l;
  return (
    t[4] !== r || t[5] !== i || t[6] !== o || t[7] !== s || t[8] !== c || t[9] !== a
      ? ((l = (0, J.jsx)(mt, {
          ariaCurrent: o,
          compactSecondLine: !0,
          density: `compact`,
          isSelected: r,
          onSelect: i,
          rightText: s,
          secondLine: c,
          title: a,
        })),
        (t[4] = r),
        (t[5] = i),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c),
        (t[9] = a),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
var rr, J;
function ir() {
  return (ir = e(() => {
    ((rr = De()),
      N(),
      j(),
      U(),
      ln(),
      qe(),
      be(),
      F(),
      y(),
      C(),
      Pe(),
      P(),
      Kn(),
      Ke(),
      K(),
      jn(),
      $n(),
      (J = ke()));
  }))();
}
function ar(e) {
  let t = (0, cr.c)(62),
    {
      commands: r,
      mapping: i,
      joystick: a,
      selectedDirection: o,
      skills: s,
      onActionChange: c,
      onDirectionSelect: l,
      onEditorOpenChange: d,
    } = e,
    f = T(),
    [p, m] = (0, lr.useState)(!1),
    [h, g] = (0, lr.useState)(``),
    _;
  t[0] === s ? (_ = t[1]) : ((_ = Yn(s)), (t[0] = s), (t[1] = _));
  let v = _,
    y;
  t[2] === d
    ? (y = t[3])
    : ((y = () => {
        d(!1);
      }),
      (t[2] = d),
      (t[3] = y));
  let b = (0, lr.useEffectEvent)(y),
    x;
  t[4] === b
    ? (x = t[5])
    : ((x = () => () => {
        b();
      }),
      (t[4] = b),
      (t[5] = x));
  let S;
  (t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = []), (t[6] = S)) : (S = t[6]),
    (0, lr.useEffect)(x, S));
  let C;
  t[7] === d
    ? (C = t[8])
    : ((C = function (e) {
        (m(e), d(e), e || g(``));
      }),
      (t[7] = d),
      (t[8] = C));
  let w = C,
    E;
  t[9] === f
    ? (E = t[10])
    : ((E = f.formatMessage({
        id: `settings.codexMicro.keyboardLayout.analog.configure`,
        defaultMessage: `Configure analog stick actions`,
        description: `Accessible label for opening the Codex Micro analog stick action mapping editor`,
      })),
      (t[9] = f),
      (t[10] = E));
  let D;
  t[11] === a
    ? (D = t[12])
    : ((D = (0, Y.jsx)(Wn, {
        className: `size-full group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.82),0_0_12px_rgba(141,181,255,0.2)] dark:group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_0_12px_rgba(141,181,255,0.24)]`,
        joystick: a,
      })),
      (t[11] = a),
      (t[12] = D));
  let O;
  t[13] !== E || t[14] !== D
    ? ((O = (0, Y.jsx)(`button`, {
        type: `button`,
        "aria-label": E,
        className: `group relative z-10 m-auto size-[92%] cursor-interaction`,
        children: D,
      })),
      (t[13] = E),
      (t[14] = D),
      (t[15] = O))
    : (O = t[15]);
  let k;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Y.jsx)(M, {
        children: (0, Y.jsx)(u, {
          id: `settings.codexMicro.analog.title`,
          defaultMessage: `Analog stick`,
          description: `Title of the Codex Micro analog stick action mapping dialog`,
        }),
      })),
      (t[16] = k))
    : (k = t[16]);
  let A;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Y.jsx)(re, {
        children: (0, Y.jsx)(ee, {
          title: k,
          subtitle: (0, Y.jsx)(te, {
            children: (0, Y.jsx)(u, {
              id: `settings.codexMicro.analog.description`,
              defaultMessage: `Choose what each direction triggers`,
              description: `Description of the Codex Micro analog stick action mapping dialog`,
            }),
          }),
        }),
      })),
      (t[17] = A))
    : (A = t[17]);
  let j;
  t[18] === a
    ? (j = t[19])
    : ((j = (0, Y.jsx)(Wn, { className: `size-20 justify-self-center`, joystick: a })),
      (t[18] = a),
      (t[19] = j));
  let N;
  t[20] === f
    ? (N = t[21])
    : ((N = f.formatMessage({
        id: `settings.codexMicro.analog.directionGroup.label`,
        defaultMessage: `Analog direction mappings`,
        description: `Accessible label for the Codex Micro analog direction mapping group`,
      })),
      (t[20] = f),
      (t[21] = N));
  let P;
  t[22] !== i || t[23] !== l || t[24] !== v || t[25] !== o
    ? ((P = ur.map((e) =>
        (0, Y.jsx)(
          or,
          {
            action: i[e],
            direction: e,
            isSelected: o === e,
            skills: v,
            onSelect: () => {
              l(e);
            },
          },
          e,
        ),
      )),
      (t[22] = i),
      (t[23] = l),
      (t[24] = v),
      (t[25] = o),
      (t[26] = P))
    : (P = t[26]);
  let F;
  t[27] !== N || t[28] !== P
    ? ((F = (0, Y.jsx)(`div`, {
        "aria-label": N,
        className: `flex min-w-0 flex-col gap-1`,
        role: `group`,
        children: P,
      })),
      (t[27] = N),
      (t[28] = P),
      (t[29] = F))
    : (F = t[29]);
  let I;
  t[30] !== j || t[31] !== F
    ? ((I = (0, Y.jsx)(re, {
        children: (0, Y.jsxs)(`div`, {
          className: `grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-5`,
          children: [j, F],
        }),
      })),
      (t[30] = j),
      (t[31] = F),
      (t[32] = I))
    : (I = t[32]);
  let ne;
  t[33] === o
    ? (ne = t[34])
    : ((ne = (0, Y.jsx)(u, {
        id: `settings.codexMicro.analog.assignDirection`,
        defaultMessage: `Assign {direction}`,
        description: `Label above Codex Micro analog direction action choices`,
        values: { direction: (0, Y.jsx)(sr, { direction: o, lowercase: !0 }, `direction`) },
      })),
      (t[33] = o),
      (t[34] = ne));
  let L;
  t[35] === f
    ? (L = t[36])
    : ((L = f.formatMessage({
        id: `settings.codexMicro.analog.search.label`,
        defaultMessage: `Search analog actions and skills`,
        description: `Accessible label for searching actions and skills in the Codex Micro analog mapping dialog`,
      })),
      (t[35] = f),
      (t[36] = L));
  let R = i[o],
    z;
  t[37] !== c || t[38] !== o
    ? ((z = (e) => {
        c(o, e);
      }),
      (t[37] = c),
      (t[38] = o),
      (t[39] = z))
    : (z = t[39]);
  let B;
  t[40] !== r || t[41] !== h || t[42] !== s || t[43] !== ne || t[44] !== L || t[45] !== R || t[46] !== z
    ? ((B = (0, Y.jsx)(er, {
        commands: r,
        heading: ne,
        searchAriaLabel: L,
        searchQuery: h,
        selectedAction: R,
        skills: s,
        onActionChange: z,
        onSearchQueryChange: g,
      })),
      (t[40] = r),
      (t[41] = h),
      (t[42] = s),
      (t[43] = ne),
      (t[44] = L),
      (t[45] = R),
      (t[46] = z),
      (t[47] = B))
    : (B = t[47]);
  let V;
  t[48] === w
    ? (V = t[49])
    : ((V = () => {
        w(!1);
      }),
      (t[48] = w),
      (t[49] = V));
  let H;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Y.jsx)(u, {
        id: `settings.codexMicro.analog.done`,
        defaultMessage: `Done`,
        description: `Button that closes the Codex Micro analog action mapping dialog`,
      })),
      (t[50] = H))
    : (H = t[50]);
  let U;
  t[51] === V
    ? (U = t[52])
    : ((U = (0, Y.jsx)(re, {
        children: (0, Y.jsx)(ve, { children: (0, Y.jsx)(n, { color: `primary`, onClick: V, children: H }) }),
      })),
      (t[51] = V),
      (t[52] = U));
  let W;
  t[53] !== I || t[54] !== B || t[55] !== U
    ? ((W = (0, Y.jsxs)(ce, {
        className: `max-h-[min(680px,calc(100vh-4rem))] min-h-0 gap-0 overflow-hidden`,
        children: [A, I, B, U],
      })),
      (t[53] = I),
      (t[54] = B),
      (t[55] = U),
      (t[56] = W))
    : (W = t[56]);
  let G;
  return (
    t[57] !== p || t[58] !== w || t[59] !== W || t[60] !== O
      ? ((G = (0, Y.jsx)(ie, { open: p, size: `wide`, onOpenChange: w, triggerContent: O, children: W })),
        (t[57] = p),
        (t[58] = w),
        (t[59] = W),
        (t[60] = O),
        (t[61] = G))
      : (G = t[61]),
    G
  );
}
function or(e) {
  let t = (0, cr.c)(35),
    { action: n, direction: r, isSelected: i, skills: a, onSelect: o } = e,
    s = T(),
    c,
    l,
    u,
    d,
    f,
    p,
    m;
  if (t[0] !== n || t[1] !== r || t[2] !== s || t[3] !== i || t[4] !== a) {
    u = n == null ? s.formatMessage(fr.none) : Mn(n, a, s);
    let e = s.formatMessage(fr[r]);
    ((l = ye),
      (p = `trigger-overflows`),
      (m = u),
      (c = mt),
      (d = i ? `true` : void 0),
      (f = s.formatMessage(
        {
          id: `settings.codexMicro.analog.direction.mapping`,
          defaultMessage: `{direction}: {action}`,
          description: `Accessible label for a Codex Micro analog direction and its assigned action`,
        },
        { action: u, direction: e },
      )),
      (t[0] = n),
      (t[1] = r),
      (t[2] = s),
      (t[3] = i),
      (t[4] = a),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m));
  } else ((c = t[5]), (l = t[6]), (u = t[7]), (d = t[8]), (f = t[9]), (p = t[10]), (m = t[11]));
  let h = dr[r],
    g;
  t[12] === h ? (g = t[13]) : ((g = I(`size-4 shrink-0`, h)), (t[12] = h), (t[13] = g));
  let _;
  t[14] === g ? (_ = t[15]) : ((_ = (0, Y.jsx)(he, { className: g })), (t[14] = g), (t[15] = _));
  let v = n == null,
    y;
  t[16] !== u || t[17] !== v
    ? ((y = (0, Y.jsx)(tr, { compact: !0, title: u, unassigned: v })), (t[16] = u), (t[17] = v), (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] === r ? (b = t[20]) : ((b = (0, Y.jsx)(sr, { direction: r })), (t[19] = r), (t[20] = b));
  let x;
  t[21] !== c ||
  t[22] !== i ||
  t[23] !== o ||
  t[24] !== d ||
  t[25] !== b ||
  t[26] !== f ||
  t[27] !== _ ||
  t[28] !== y
    ? ((x = (0, Y.jsx)(c, {
        ariaCurrent: d,
        ariaLabel: f,
        density: `compact`,
        icon: _,
        isSelected: i,
        onSelect: o,
        rightText: y,
        title: b,
      })),
      (t[21] = c),
      (t[22] = i),
      (t[23] = o),
      (t[24] = d),
      (t[25] = b),
      (t[26] = f),
      (t[27] = _),
      (t[28] = y),
      (t[29] = x))
    : (x = t[29]);
  let S;
  return (
    t[30] !== l || t[31] !== x || t[32] !== p || t[33] !== m
      ? ((S = (0, Y.jsx)(l, { openWhen: p, tooltipContent: m, children: x })),
        (t[30] = l),
        (t[31] = x),
        (t[32] = p),
        (t[33] = m),
        (t[34] = S))
      : (S = t[34]),
    S
  );
}
function sr(e) {
  let t = (0, cr.c)(6),
    { direction: n, lowercase: r } = e;
  if (!(r !== void 0 && r)) {
    let e = fr[n],
      r;
    return (t[0] === e ? (r = t[1]) : ((r = (0, Y.jsx)(u, { ...e })), (t[0] = e), (t[1] = r)), r);
  }
  switch (n) {
    case `up`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(u, { ...fr.upLowercase })), (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `right`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(u, { ...fr.rightLowercase })), (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `down`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(u, { ...fr.downLowercase })), (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `left`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(u, { ...fr.leftLowercase })), (t[5] = e))
          : (e = t[5]),
        e
      );
    }
  }
}
var cr, lr, Y, ur, dr, fr;
function pr() {
  return (pr = e(() => {
    ((cr = De()),
      j(),
      (lr = Me()),
      U(),
      be(),
      Te(),
      F(),
      Pe(),
      P(),
      B(),
      ir(),
      jn(),
      $n(),
      Nn(),
      (Y = ke()),
      (ur = [`up`, `right`, `down`, `left`]),
      (dr = { up: ``, right: `rotate-90`, down: `rotate-180`, left: `-rotate-90` }),
      (fr = i({
        none: {
          id: `settings.codexMicro.analog.none`,
          defaultMessage: `None`,
          description: `Short label for a Codex Micro analog direction with no action assigned`,
        },
        up: {
          id: `settings.codexMicro.analog.direction.up`,
          defaultMessage: `Up`,
          description: `Up direction label in the Codex Micro analog action dialog`,
        },
        right: {
          id: `settings.codexMicro.analog.direction.right`,
          defaultMessage: `Right`,
          description: `Right direction label in the Codex Micro analog action dialog`,
        },
        down: {
          id: `settings.codexMicro.analog.direction.down`,
          defaultMessage: `Down`,
          description: `Down direction label in the Codex Micro analog action dialog`,
        },
        left: {
          id: `settings.codexMicro.analog.direction.left`,
          defaultMessage: `Left`,
          description: `Left direction label in the Codex Micro analog action dialog`,
        },
        upLowercase: {
          id: `settings.codexMicro.analog.direction.up.lowercase`,
          defaultMessage: `up`,
          description: `Lowercase up direction label in the Codex Micro analog action dialog`,
        },
        rightLowercase: {
          id: `settings.codexMicro.analog.direction.right.lowercase`,
          defaultMessage: `right`,
          description: `Lowercase right direction label in the Codex Micro analog action dialog`,
        },
        downLowercase: {
          id: `settings.codexMicro.analog.direction.down.lowercase`,
          defaultMessage: `down`,
          description: `Lowercase down direction label in the Codex Micro analog action dialog`,
        },
        leftLowercase: {
          id: `settings.codexMicro.analog.direction.left.lowercase`,
          defaultMessage: `left`,
          description: `Lowercase left direction label in the Codex Micro analog action dialog`,
        },
      })));
  }))();
}
function mr(e) {
  let t = (0, hr.c)(29),
    {
      commands: n,
      noActionLabel: r,
      portalContainer: i,
      selectedAction: a,
      skills: s,
      triggerButton: c,
      onActionSelect: l,
    } = e,
    f = T(),
    [p, m] = (0, gr.useState)(``),
    h;
  if (
    t[0] !== n ||
    t[1] !== f ||
    t[2] !== r ||
    t[3] !== l ||
    t[4] !== i?.ownerDocument.body ||
    t[5] !== p ||
    t[6] !== a ||
    t[7] !== s ||
    t[8] !== c
  ) {
    let e = Jn(n, p, f),
      g;
    t[10] === p
      ? (g = t[11])
      : ((g = (e) => p.trim().length === 0 || [e.name, we(e), d(e)].some((e) => He(e, p) > 0)),
        (t[10] = p),
        (t[11] = g));
    let _ = Yn(s).filter(g),
      y;
    t[12] !== r || t[13] !== p
      ? ((y = p.trim().length === 0 || He(r, p) > 0), (t[12] = r), (t[13] = p), (t[14] = y))
      : (y = t[14]);
    let b = y,
      x,
      S;
    t[15] !== f || t[16] !== p
      ? ((x = f.formatMessage({
          id: `settings.codexMicro.editor.action.insertText`,
          defaultMessage: `Insert text`,
          description: `Option for assigning custom composer text to a Codex Micro keycap`,
        })),
        (S = p.trim().length === 0 || He(x, p) > 0),
        (t[15] = f),
        (t[16] = p),
        (t[17] = x),
        (t[18] = S))
      : ((x = t[17]), (S = t[18]));
    let C = S,
      T;
    t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((T = (e) => {
          e || m(``);
        }),
        (t[19] = T))
      : (T = t[19]);
    let E;
    t[20] === f
      ? (E = t[21])
      : ((E = f.formatMessage({
          id: `settings.codexMicro.editor.action.search.label`,
          defaultMessage: `Search actions for keycap`,
          description: `Accessible label for searching actions assignable to a Codex Micro keycap`,
        })),
        (t[20] = f),
        (t[21] = E));
    let D;
    t[22] === f
      ? (D = t[23])
      : ((D = f.formatMessage({
          id: `settings.codexMicro.editor.action.search.placeholder`,
          defaultMessage: `Search actions`,
          description: `Placeholder for searching actions assignable to a Codex Micro keycap`,
        })),
        (t[22] = f),
        (t[23] = D));
    let O;
    t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((O = (e) => {
          m(e.currentTarget.value);
        }),
        (t[24] = O))
      : (O = t[24]);
    let k;
    (t[25] !== p || t[26] !== E || t[27] !== D
      ? ((k = (0, _r.jsx)(w.SearchInput, {
          className: `shrink-0`,
          "aria-label": E,
          placeholder: D,
          value: p,
          onChange: O,
        })),
        (t[25] = p),
        (t[26] = E),
        (t[27] = D),
        (t[28] = k))
      : (k = t[28]),
      (h = (0, _r.jsxs)(o, {
        align: `end`,
        side: `top`,
        contentClassName: `overflow-hidden`,
        contentMaxHeight: `tall`,
        contentWidth: `panelWide`,
        portalContainer: i?.ownerDocument.body ?? null,
        onOpenChange: T,
        triggerButton: c,
        children: [
          k,
          b || C || _.length > 0 || e.length > 0
            ? (0, _r.jsxs)(w.Section, {
                className: `min-h-0 flex-1 overflow-y-auto`,
                children: [
                  b
                    ? (0, _r.jsx)(w.Item, {
                        rightIcon:
                          a == null
                            ? (0, _r.jsx)(v, { className: `text-info`, "aria-hidden": !1, asset: Ae })
                            : null,
                        onSelect: () => {
                          l(void 0);
                        },
                        children: r,
                      })
                    : null,
                  C
                    ? (0, _r.jsx)(w.Item, {
                        rightIcon:
                          a?.type === `composer-text`
                            ? (0, _r.jsx)(v, { className: `text-info`, "aria-hidden": !1, asset: Ae })
                            : null,
                        SubText: (0, _r.jsx)(`span`, {
                          className: `text-xs text-codex-description`,
                          children: (0, _r.jsx)(u, {
                            id: `settings.codexMicro.editor.action.insertText.description`,
                            defaultMessage: `Add text to the active prompt without sending it`,
                            description: `Description of the custom composer text action for a Codex Micro keycap`,
                          }),
                        }),
                        onSelect: () => {
                          l({ type: `composer-text`, text: a?.type === `composer-text` ? a.text : `` });
                        },
                        children: x,
                      })
                    : null,
                  e.map((e, t) =>
                    (0, _r.jsxs)(
                      gr.Fragment,
                      {
                        children: [
                          b || C || t > 0 ? (0, _r.jsx)(w.Separator, {}) : null,
                          (0, _r.jsx)(w.SectionLabel, { children: e.label }),
                          e.options.map((e) => {
                            let { command: t, description: n, title: r } = e;
                            return (0, _r.jsx)(
                              w.Item,
                              {
                                rightIcon:
                                  a?.type === `command` && t.id === a.commandId
                                    ? (0, _r.jsx)(v, { className: `text-info`, "aria-hidden": !1, asset: Ae })
                                    : null,
                                SubText:
                                  n.length === 0
                                    ? null
                                    : (0, _r.jsx)(`span`, {
                                        className: `text-xs text-codex-description`,
                                        children: n,
                                      }),
                                onSelect: () => {
                                  l({ type: `command`, commandId: t.id });
                                },
                                children: r,
                              },
                              t.id,
                            );
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                  _.length === 0
                    ? null
                    : (0, _r.jsxs)(_r.Fragment, {
                        children: [
                          b || C || e.length > 0 ? (0, _r.jsx)(w.Separator, {}) : null,
                          (0, _r.jsx)(w.SectionLabel, {
                            children: (0, _r.jsx)(u, {
                              id: `settings.codexMicro.editor.customShortcut.skills`,
                              defaultMessage: `Skills`,
                              description: `Section heading for skills assignable to a Codex Micro keycap`,
                            }),
                          }),
                          _.map((e) =>
                            (0, _r.jsx)(
                              w.Item,
                              {
                                rightIcon:
                                  a?.type === `skill` && a.skillPath === e.path
                                    ? (0, _r.jsx)(v, { className: `text-info`, "aria-hidden": !1, asset: Ae })
                                    : null,
                                SubText: (0, _r.jsx)(`span`, {
                                  className: `text-xs text-codex-description`,
                                  children: d(e),
                                }),
                                onSelect: () => {
                                  l({ type: `skill`, skillName: e.name, skillPath: e.path });
                                },
                                children: we(e),
                              },
                              e.path,
                            ),
                          ),
                        ],
                      }),
                ],
              })
            : (0, _r.jsx)(w.Message, {
                centered: !0,
                children: (0, _r.jsx)(u, {
                  id: `settings.codexMicro.editor.action.search.noResults`,
                  defaultMessage: `No matching actions`,
                  description: `Empty search state for actions assignable to a Codex Micro keycap`,
                }),
              }),
        ],
      })),
      (t[0] = n),
      (t[1] = f),
      (t[2] = r),
      (t[3] = l),
      (t[4] = i?.ownerDocument.body),
      (t[5] = p),
      (t[6] = a),
      (t[7] = s),
      (t[8] = c),
      (t[9] = h));
  } else h = t[9];
  return h;
}
var hr, gr, _r;
function vr() {
  return (vr = e(() => {
    ((hr = De()), N(), (gr = Me()), U(), qe(), a(), y(), K(), $n(), (_r = ke()));
  }))();
}
var X;
function yr() {
  return (yr = e(() => {
    (U(),
      (X = i({
        options: {
          id: `settings.codexMicro.options`,
          defaultMessage: `Options`,
          description: `Heading for Codex Micro device options`,
        },
        agentKeys: {
          id: `settings.codexMicro.agentKeys.label`,
          defaultMessage: `Agent keys`,
          description: `Label for choosing which chats Codex Micro agent keys open`,
        },
        singleTapAgentKeys: {
          id: `settings.codexMicro.agentKeys.singleTap.label`,
          defaultMessage: `Focus ChatGPT with a single tap`,
          description: `Label for the setting that focuses ChatGPT and opens an assigned chat with one agent-key tap`,
        },
        singleTapAgentKeysDescription: {
          id: `settings.codexMicro.agentKeys.singleTap.description`,
          defaultMessage: `Open the assigned chat and focus the ChatGPT window with a single tap instead of a double tap`,
          description: `Description for the setting that changes Codex Micro agent-key chat navigation and window focus from double-tap to single-tap`,
        },
        customChats: {
          id: `settings.codexMicro.agentKeys.customChats`,
          defaultMessage: `Custom assignments`,
          description: `Option for assigning Codex Micro agent keys to individual chats or actions`,
        },
        customChatsDescription: {
          id: `settings.codexMicro.agentKeys.customChatsDescription`,
          defaultMessage: `Choose a chat, shortcut, keycap, or skill for each key`,
          description: `Explanation of the Codex Micro custom agent source`,
        },
        connection: {
          id: `settings.codexMicro.connection.label`,
          defaultMessage: `Connection`,
          description: `Label for the Codex Micro connection state`,
        },
        connectionControlUnavailable: {
          id: `settings.codexMicro.connection.controlUnavailable`,
          defaultMessage: `Connected with limited functionality`,
          description: `Codex Micro connection status when keyboard input remains available but device controls cannot communicate`,
        },
        connectionControlUnavailableDescription: {
          id: `settings.codexMicro.connection.controlUnavailableDescriptionByDevice`,
          defaultMessage: `{deviceName} input remains available, but lighting and battery updates are temporarily unavailable`,
          description: `Explains that a connected Codex Micro or Creator Micro can still receive input while its device control channel is unavailable`,
        },
        connectionFailed: {
          id: `settings.codexMicro.connection.connectionFailed`,
          defaultMessage: `Connection failed`,
          description: `Codex Micro status when the app cannot connect to a detected device`,
        },
        connectionFailedDescription: {
          id: `settings.codexMicro.connection.connectionFailedDescriptionByDevice`,
          defaultMessage: `ChatGPT found your {deviceName} but couldn't connect. ChatGPT is reconnecting automatically. If the problem continues, reconnect it and check whether a keyboard remapper or security tool is blocking access.`,
          description: `Troubleshooting guidance shown when ChatGPT cannot connect to a detected Codex Micro or Creator Micro`,
        },
        connectionProblem: {
          id: `settings.codexMicro.connection.problem`,
          defaultMessage: `Connection problem`,
          description: `Fallback Codex Micro error status`,
        },
        connectionProblemDescription: {
          id: `settings.codexMicro.connection.problemDescriptionByDevice`,
          defaultMessage: `ChatGPT couldn't communicate with your {deviceName}. ChatGPT is reconnecting automatically. If the problem continues, reconnect it and try again.`,
          description: `Fallback troubleshooting guidance for a Codex Micro or Creator Micro connection error`,
        },
        discoveryFailed: {
          id: `settings.codexMicro.connection.discoveryFailed`,
          defaultMessage: `Discovery failed`,
          description: `Codex Micro status when device discovery fails`,
        },
        discoveryFailedDescription: {
          id: `settings.codexMicro.connection.discoveryFailedDescriptionByDevice`,
          defaultMessage: `ChatGPT couldn't check for your {deviceName}. ChatGPT will try again automatically. If the problem continues, reconnect the device or restart ChatGPT.`,
          description: `Troubleshooting guidance shown when Codex Micro or Creator Micro device discovery fails`,
        },
        transportUnavailable: {
          id: `settings.codexMicro.connection.transportUnavailable`,
          defaultMessage: `Connection interrupted`,
          description: `Codex Micro status when an active device connection becomes unusable`,
        },
        transportUnavailableDescription: {
          id: `settings.codexMicro.connection.transportUnavailableDescriptionByDevice`,
          defaultMessage: `ChatGPT lost communication with your {deviceName} and is reconnecting automatically. If your computer still shows the device and the problem continues, a keyboard remapper or security tool may be blocking access. Check that tool's device rules, reconnect {deviceName}, or contact IT if it is managed.`,
          description: `Troubleshooting guidance shown when the Codex Micro or Creator Micro transport becomes unusable`,
        },
        inputMonitoring: {
          id: `settings.codexMicro.inputMonitoring.label`,
          defaultMessage: `Input Monitoring`,
          description: `Label for the macOS Input Monitoring permission state`,
        },
        microphoneKey: {
          id: `settings.codexMicro.microphoneKey.label`,
          defaultMessage: `Microphone key`,
          description: `Label for choosing how the Codex Micro microphone key works`,
        },
        microphoneKeyDescription: {
          id: `settings.codexMicro.microphoneKey.description`,
          defaultMessage: `Choose how the microphone key works`,
          description: `Description for the Codex Micro microphone-key mode setting`,
        },
        separateMicrophoneKeys: {
          id: `settings.codexMicro.microphoneKey.split.label`,
          defaultMessage: `Use separate microphone keys`,
          description: `Label for the setting that maps the two switches beneath the wide Codex Micro microphone key independently`,
        },
        separateMicrophoneKeysDescription: {
          id: `settings.codexMicro.microphoneKey.split.description`,
          defaultMessage: `Map the two switches beneath the wide key separately`,
          description: `Description for the setting that maps the two switches beneath the wide Codex Micro microphone key independently`,
        },
        microphoneKeyPushToTalk: {
          id: `settings.codexMicro.microphoneKey.pushToTalk`,
          defaultMessage: `Push to talk`,
          description: `Option that uses the Codex Micro microphone key for dictation`,
        },
        microphoneKeyPushToTalkDescription: {
          id: `settings.codexMicro.microphoneKey.pushToTalkDescription`,
          defaultMessage: `Hold to dictate or double-tap to keep recording`,
          description: `Explanation of the Codex Micro push-to-talk mode`,
        },
        microphoneKeyVoiceChat: {
          id: `settings.codexMicro.microphoneKey.voiceChat`,
          defaultMessage: `Voice Chat`,
          description: `Option that uses the Codex Micro microphone key for Voice Chat`,
        },
        microphoneKeyVoiceChatDescription: {
          id: `settings.codexMicro.microphoneKey.voiceChatDescription`,
          defaultMessage: `Tap to start a Voice Chat or toggle your microphone, then hold to end`,
          description: `Explanation of the Codex Micro Voice Chat mode`,
        },
        microphoneKeyStartVoiceChat: {
          id: `settings.codexMicro.microphoneKey.startVoiceChat`,
          defaultMessage: `Start a Voice Chat`,
          description: `Codex Micro microphone key action for starting a Voice Chat`,
        },
        keyboardLayout: {
          id: `settings.codexMicro.keyboardLayout.title`,
          defaultMessage: `Layout`,
          description: `Heading for the Codex Micro hardware layout preview`,
        },
        knob: {
          id: `settings.codexMicro.knob.label`,
          defaultMessage: `Knob`,
          description: `Label for choosing what the Codex Micro knob controls`,
        },
        knobDescription: {
          id: `settings.codexMicro.knob.description`,
          defaultMessage: `Choose what turning the knob controls`,
          description: `Description for the Codex Micro knob mode setting`,
        },
        knobCustom: {
          id: `settings.codexMicro.knob.custom`,
          defaultMessage: `Custom assignments`,
          description: `Option for assigning custom actions to each Codex Micro knob gesture`,
        },
        knobCustomDescription: {
          id: `settings.codexMicro.knob.customDescription`,
          defaultMessage: `Choose an action for each turn, click, and long press`,
          description: `Explanation of the Codex Micro custom knob assignment mode`,
        },
        knobComposerNavigation: {
          id: `settings.codexMicro.knob.composerNavigation`,
          defaultMessage: `Composer navigation`,
          description: `Option label for using the Codex Micro knob to move among controls and options in the prompt and message input area`,
        },
        knobComposerNavigationDescription: {
          id: `settings.codexMicro.knob.composerNavigationDescription`,
          defaultMessage: `Move through composer controls and options`,
          description: `Supporting text explaining that this Codex Micro knob mode moves among controls and options in the prompt and message input area`,
        },
        knobComposerNavigationTurnRight: {
          id: `settings.codexMicro.knob.composerNavigationTurnRight`,
          defaultMessage: `Move to the previous control or option`,
          description: `Action performed when turning the Codex Micro knob clockwise in composer navigation mode`,
        },
        knobComposerNavigationTurnLeft: {
          id: `settings.codexMicro.knob.composerNavigationTurnLeft`,
          defaultMessage: `Move to the next control or option`,
          description: `Action performed when turning the Codex Micro knob counterclockwise in composer navigation mode`,
        },
        knobComposerNavigationClick: {
          id: `settings.codexMicro.knob.composerNavigationClick`,
          defaultMessage: `Open or select the highlighted control`,
          description: `Action performed when clicking the Codex Micro knob in composer navigation mode`,
        },
        knobReasoning: {
          id: `settings.codexMicro.knob.reasoning`,
          defaultMessage: `Reasoning only`,
          description: `Option for controlling reasoning effort with the Codex Micro knob`,
        },
        knobReasoningDescription: {
          id: `settings.codexMicro.knob.reasoningDescription`,
          defaultMessage: `Open and adjust reasoning effort`,
          description: `Explanation of the Codex Micro reasoning-only knob mode`,
        },
        knobReasoningTurnRight: {
          id: `settings.codexMicro.knob.reasoningTurnRight`,
          defaultMessage: `Decrease reasoning effort`,
          description: `Action performed when turning the Codex Micro knob clockwise in reasoning-only mode`,
        },
        knobReasoningTurnLeft: {
          id: `settings.codexMicro.knob.reasoningTurnLeft`,
          defaultMessage: `Increase reasoning effort`,
          description: `Action performed when turning the Codex Micro knob counterclockwise in reasoning-only mode`,
        },
        knobReasoningClick: {
          id: `settings.codexMicro.knob.reasoningClick`,
          defaultMessage: `Open the slider or advanced options`,
          description: `Action performed when clicking the Codex Micro knob in reasoning-only mode`,
        },
        knobConversationScroll: {
          id: `settings.codexMicro.knob.conversationScroll`,
          defaultMessage: `Conversation scrolling`,
          description: `Option for scrolling the active conversation with the Codex Micro knob`,
        },
        knobConversationScrollDescription: {
          id: `settings.codexMicro.knob.conversationScrollDescription`,
          defaultMessage: `Scroll through the active conversation`,
          description: `Explanation of the Codex Micro conversation-scrolling knob mode`,
        },
        knobConversationScrollTurnRight: {
          id: `settings.codexMicro.knob.conversationScrollTurnRight`,
          defaultMessage: `Scroll up the conversation`,
          description: `Action performed when turning the Codex Micro knob clockwise in conversation-scrolling mode`,
        },
        knobConversationScrollTurnLeft: {
          id: `settings.codexMicro.knob.conversationScrollTurnLeft`,
          defaultMessage: `Scroll down the conversation`,
          description: `Action performed when turning the Codex Micro knob counterclockwise in conversation-scrolling mode`,
        },
        knobConversationScrollClick: {
          id: `settings.codexMicro.knob.conversationScrollClick`,
          defaultMessage: `Jump to the latest message`,
          description: `Action performed when clicking the Codex Micro knob in conversation-scrolling mode`,
        },
        lightingBrightness: {
          id: `settings.codexMicro.lightingBrightness.label`,
          defaultMessage: `Brightness`,
          description: `Label for the Codex Micro lighting brightness setting`,
        },
        lightingBrightnessDescription: {
          id: `settings.codexMicro.lightingBrightness.descriptionByDevice`,
          defaultMessage: `Adjusts the brightness of all {deviceName} lighting`,
          description: `Description for the Codex Micro or Creator Micro lighting brightness setting`,
        },
        lightingAutoOff: {
          id: `settings.codexMicro.lightingAutoOff.label`,
          defaultMessage: `Auto-dim`,
          description: `Label for the Codex Micro lighting auto-dim setting`,
        },
        lightingAutoOffDescription: {
          id: `settings.codexMicro.lightingAutoOff.descriptionByDevice`,
          defaultMessage: `Turns lighting off after inactivity and back on when you use {deviceName} or an agent key changes color or state`,
          description: `Description for the Codex Micro or Creator Micro lighting auto-dim setting`,
        },
        lightingAutoOffOff: {
          id: `settings.codexMicro.lightingAutoOff.off`,
          defaultMessage: `Off`,
          description: `Option that keeps Codex Micro lighting on indefinitely`,
        },
        lightingAutoOff30Seconds: {
          id: `settings.codexMicro.lightingAutoOff.thirtySeconds`,
          defaultMessage: `30 seconds`,
          description: `Codex Micro lighting auto-off interval of 30 seconds`,
        },
        lightingAutoOff1Minute: {
          id: `settings.codexMicro.lightingAutoOff.oneMinute`,
          defaultMessage: `1 minute`,
          description: `Codex Micro lighting auto-off interval of 1 minute`,
        },
        lightingAutoOff3Minutes: {
          id: `settings.codexMicro.lightingAutoOff.threeMinutes`,
          defaultMessage: `3 minutes`,
          description: `Codex Micro lighting auto-off interval of 3 minutes`,
        },
        lightingAutoOff10Minutes: {
          id: `settings.codexMicro.lightingAutoOff.tenMinutes`,
          defaultMessage: `10 minutes`,
          description: `Codex Micro lighting auto-off interval of 10 minutes`,
        },
        lightingAutoOff30Minutes: {
          id: `settings.codexMicro.lightingAutoOff.thirtyMinutes`,
          defaultMessage: `30 minutes`,
          description: `Codex Micro lighting auto-off interval of 30 minutes`,
        },
        lightingAutoOff1Hour: {
          id: `settings.codexMicro.lightingAutoOff.oneHour`,
          defaultMessage: `1 hour`,
          description: `Codex Micro lighting auto-off interval of 1 hour`,
        },
        pinnedChats: {
          id: `settings.codexMicro.agentKeys.pinnedChats`,
          defaultMessage: `Pinned chats`,
          description: `Option for mapping Codex Micro agent keys to pinned chats`,
        },
        pinnedChatsDescription: {
          id: `settings.codexMicro.agentKeys.pinnedChatsDescription`,
          defaultMessage: `First six chats in Pinned`,
          description: `Explanation of the Codex Micro pinned chats agent source`,
        },
        priorityChats: {
          id: `settings.codexMicro.agentKeys.priorityChats`,
          defaultMessage: `Priority chats`,
          description: `Option for mapping Codex Micro agent keys to priority chats`,
        },
        priorityChatsDescription: {
          id: `settings.codexMicro.agentKeys.priorityChatsDescription`,
          defaultMessage: `Waiting, unread, and active chats first`,
          description: `Explanation of the Codex Micro priority chats agent source`,
        },
        recentChats: {
          id: `settings.codexMicro.agentKeys.recentChats`,
          defaultMessage: `Most recent chats`,
          description: `Option for mapping Codex Micro agent keys to the most recently updated chats`,
        },
        recentChatsDescription: {
          id: `settings.codexMicro.agentKeys.recentChatsDescription`,
          defaultMessage: `First six recently updated chats, pinned or unpinned`,
          description: `Explanation of the Codex Micro most recent chats agent source`,
        },
      })));
  }))();
}
function br(e) {
  let t = (0, Cr.c)(66),
    {
      commands: r,
      defaultOpen: i,
      deviceName: a,
      isPressed: o,
      mapping: s,
      open: c,
      pulse: l,
      skills: d,
      onActionChange: f,
      onOpenChange: p,
    } = e,
    m = i !== void 0 && i,
    h = T(),
    [g, _] = (0, wr.useState)(m),
    [v, y] = (0, wr.useState)(``),
    [b, x] = (0, wr.useState)(`left`),
    S = c ?? g,
    C;
  t[0] === d ? (C = t[1]) : ((C = Yn(d)), (t[0] = d), (t[1] = C));
  let w = C,
    E;
  t[2] !== c || t[3] !== p
    ? ((E = function (e) {
        (c ?? _(e), p?.(e), e || y(``));
      }),
      (t[2] = c),
      (t[3] = p),
      (t[4] = E))
    : (E = t[4]);
  let D = E,
    O;
  t[5] !== s || t[6] !== w
    ? ((O = (0, Z.jsx)(xr, { mapping: s, skills: w })), (t[5] = s), (t[6] = w), (t[7] = O))
    : (O = t[7]);
  let k;
  t[8] !== a || t[9] !== h
    ? ((k = h.formatMessage(
        {
          id: `settings.codexMicro.keyboardLayout.knob.configureByDevice`,
          defaultMessage: `Configure {deviceName} knob actions`,
          description: `Accessible label for opening the Codex Micro or Creator Micro knob action mapping editor`,
        },
        { deviceName: a },
      )),
      (t[8] = a),
      (t[9] = h),
      (t[10] = k))
    : (k = t[10]);
  let A;
  t[11] !== o || t[12] !== l
    ? ((A = (0, Z.jsx)(zn, { isPressed: o, pulse: l })), (t[11] = o), (t[12] = l), (t[13] = A))
    : (A = t[13]);
  let j;
  t[14] !== k || t[15] !== A
    ? ((j = (0, Z.jsx)(`button`, {
        type: `button`,
        "aria-label": k,
        className: `group relative z-10 m-auto size-full cursor-interaction`,
        children: A,
      })),
      (t[14] = k),
      (t[15] = A),
      (t[16] = j))
    : (j = t[16]);
  let N;
  t[17] !== O || t[18] !== j
    ? ((N = (0, Z.jsx)(ye, {
        align: `start`,
        delayOpen: !0,
        disablePadding: !0,
        tooltipMaxWidth: `18rem`,
        tooltipContent: O,
        children: j,
      })),
      (t[17] = O),
      (t[18] = j),
      (t[19] = N))
    : (N = t[19]);
  let P;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Z.jsx)(M, {
        children: (0, Z.jsx)(u, {
          id: `settings.codexMicro.encoder.title`,
          defaultMessage: `Knob`,
          description: `Title of the Codex Micro knob action mapping dialog`,
        }),
      })),
      (t[20] = P))
    : (P = t[20]);
  let F;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Z.jsx)(re, {
        children: (0, Z.jsx)(ee, {
          title: P,
          subtitle: (0, Z.jsx)(te, {
            children: (0, Z.jsx)(u, {
              id: `settings.codexMicro.encoder.description`,
              defaultMessage: `Choose what each knob gesture triggers`,
              description: `Description of the Codex Micro knob action mapping dialog`,
            }),
          }),
        }),
      })),
      (t[21] = F))
    : (F = t[21]);
  let I;
  t[22] !== o || t[23] !== l
    ? ((I = (0, Z.jsx)(`div`, {
        className: `size-20 justify-self-center`,
        children: (0, Z.jsx)(zn, { isPressed: o, pulse: l }),
      })),
      (t[22] = o),
      (t[23] = l),
      (t[24] = I))
    : (I = t[24]);
  let ne;
  t[25] === h
    ? (ne = t[26])
    : ((ne = h.formatMessage({
        id: `settings.codexMicro.encoder.inputGroup.label`,
        defaultMessage: `Knob gesture mappings`,
        description: `Accessible label for the Codex Micro knob gesture mapping group`,
      })),
      (t[25] = h),
      (t[26] = ne));
  let L;
  t[27] !== s || t[28] !== w || t[29] !== b
    ? ((L = Tr.map((e) =>
        (0, Z.jsx)(
          Sr,
          {
            action: s[e],
            input: e,
            isSelected: b === e,
            skills: w,
            onSelect: () => {
              x(e);
            },
          },
          e,
        ),
      )),
      (t[27] = s),
      (t[28] = w),
      (t[29] = b),
      (t[30] = L))
    : (L = t[30]);
  let R;
  t[31] !== ne || t[32] !== L
    ? ((R = (0, Z.jsx)(`div`, {
        "aria-label": ne,
        className: `flex min-w-0 flex-col gap-1`,
        role: `group`,
        children: L,
      })),
      (t[31] = ne),
      (t[32] = L),
      (t[33] = R))
    : (R = t[33]);
  let z;
  t[34] !== I || t[35] !== R
    ? ((z = (0, Z.jsx)(re, {
        children: (0, Z.jsxs)(`div`, {
          className: `grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-5`,
          children: [I, R],
        }),
      })),
      (t[34] = I),
      (t[35] = R),
      (t[36] = z))
    : (z = t[36]);
  let B;
  t[37] === b
    ? (B = t[38])
    : ((B = (0, Z.jsx)(u, {
        id: `settings.codexMicro.encoder.assign`,
        defaultMessage: `{input, select, left {Assign left turn} right {Assign right turn} click {Assign click} longPress {Assign long press} other {Assign knob gesture}}`,
        description: `Label above action choices for a Codex Micro knob gesture`,
        values: { input: b },
      })),
      (t[37] = b),
      (t[38] = B));
  let V;
  t[39] === h
    ? (V = t[40])
    : ((V = h.formatMessage({
        id: `settings.codexMicro.encoder.search.label`,
        defaultMessage: `Search knob actions and skills`,
        description: `Accessible label for searching actions and skills in the Codex Micro knob mapping dialog`,
      })),
      (t[39] = h),
      (t[40] = V));
  let H = s[b],
    U;
  t[41] !== f || t[42] !== b
    ? ((U = (e) => {
        f(b, e);
      }),
      (t[41] = f),
      (t[42] = b),
      (t[43] = U))
    : (U = t[43]);
  let W;
  t[44] !== r || t[45] !== v || t[46] !== d || t[47] !== B || t[48] !== V || t[49] !== H || t[50] !== U
    ? ((W = (0, Z.jsx)(er, {
        commands: r,
        heading: B,
        searchAriaLabel: V,
        searchQuery: v,
        selectedAction: H,
        skills: d,
        onActionChange: U,
        onSearchQueryChange: y,
      })),
      (t[44] = r),
      (t[45] = v),
      (t[46] = d),
      (t[47] = B),
      (t[48] = V),
      (t[49] = H),
      (t[50] = U),
      (t[51] = W))
    : (W = t[51]);
  let G;
  t[52] === D
    ? (G = t[53])
    : ((G = () => {
        D(!1);
      }),
      (t[52] = D),
      (t[53] = G));
  let ae;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, Z.jsx)(u, {
        id: `settings.codexMicro.encoder.done`,
        defaultMessage: `Done`,
        description: `Button that closes the Codex Micro knob action mapping dialog`,
      })),
      (t[54] = ae))
    : (ae = t[54]);
  let oe;
  t[55] === G
    ? (oe = t[56])
    : ((oe = (0, Z.jsx)(re, {
        children: (0, Z.jsx)(ve, { children: (0, Z.jsx)(n, { color: `primary`, onClick: G, children: ae }) }),
      })),
      (t[55] = G),
      (t[56] = oe));
  let se;
  t[57] !== z || t[58] !== W || t[59] !== oe
    ? ((se = (0, Z.jsxs)(ce, {
        className: `max-h-[min(680px,calc(100vh-4rem))] min-h-0 gap-0 overflow-hidden`,
        children: [F, z, W, oe],
      })),
      (t[57] = z),
      (t[58] = W),
      (t[59] = oe),
      (t[60] = se))
    : (se = t[60]);
  let K;
  return (
    t[61] !== S || t[62] !== D || t[63] !== se || t[64] !== N
      ? ((K = (0, Z.jsx)(ie, { open: S, size: `wide`, onOpenChange: D, triggerContent: N, children: se })),
        (t[61] = S),
        (t[62] = D),
        (t[63] = se),
        (t[64] = N),
        (t[65] = K))
      : (K = t[65]),
    K
  );
}
function xr(e) {
  let t = (0, Cr.c)(8),
    { mapping: n, skills: r } = e,
    i = T(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(`span`, {
        className: `text-xs font-semibold`,
        children: (0, Z.jsx)(u, {
          id: `settings.codexMicro.keyboardLayout.knobTooltip.title`,
          defaultMessage: `Knob controls`,
          description: `Title for the tooltip describing Codex Micro encoder knob controls`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(`span`, {
        className: `text-xs opacity-65`,
        children: (0, Z.jsx)(u, { ...X.knobCustomDescription }),
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] !== i || t[3] !== n || t[4] !== r
    ? ((s = Tr.map((e) =>
        (0, Z.jsxs)(
          wr.Fragment,
          {
            children: [
              (0, Z.jsx)(`dt`, {
                className: `font-medium whitespace-nowrap`,
                children: (0, Z.jsx)(u, { ...Dr.gesture, values: { input: e } }),
              }),
              (0, Z.jsx)(`dd`, {
                className: `opacity-65`,
                children: n[e] == null ? i.formatMessage(Dr.none) : Mn(n[e], r, i),
              }),
            ],
          },
          e,
        ),
      )),
      (t[2] = i),
      (t[3] = n),
      (t[4] = r),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] === s
      ? (c = t[7])
      : ((c = (0, Z.jsxs)(`div`, {
          className: `flex w-64 flex-col gap-2.5 p-3`,
          children: [
            a,
            o,
            (0, Z.jsx)(`dl`, {
              className: `grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-xs leading-4`,
              children: s,
            }),
          ],
        })),
        (t[6] = s),
        (t[7] = c)),
    c
  );
}
function Sr(e) {
  let t = (0, Cr.c)(31),
    { action: n, input: r, isSelected: i, skills: a, onSelect: o } = e,
    s = T(),
    c,
    l,
    d,
    f,
    p,
    m,
    h;
  t[0] !== n || t[1] !== r || t[2] !== s || t[3] !== i || t[4] !== a
    ? ((d = n == null ? s.formatMessage(Dr.none) : Mn(n, a, s)),
      (l = ye),
      (m = `trigger-overflows`),
      (h = d),
      (c = mt),
      (f = i ? `true` : void 0),
      (p = s.formatMessage(
        {
          id: `settings.codexMicro.encoder.mapping`,
          defaultMessage: `{input, select, left {Turn left} right {Turn right} click {Click} longPress {Press and hold} other {Knob gesture}}: {action}`,
          description: `Accessible label for a Codex Micro knob gesture and its assigned action`,
        },
        { action: d, input: r },
      )),
      (t[0] = n),
      (t[1] = r),
      (t[2] = s),
      (t[3] = i),
      (t[4] = a),
      (t[5] = c),
      (t[6] = l),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h))
    : ((c = t[5]), (l = t[6]), (d = t[7]), (f = t[8]), (p = t[9]), (m = t[10]), (h = t[11]));
  let g = Er[r],
    _ = n == null,
    v;
  t[12] !== d || t[13] !== _
    ? ((v = (0, Z.jsx)(tr, { compact: !0, title: d, unassigned: _ })), (t[12] = d), (t[13] = _), (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] === r
    ? (y = t[16])
    : ((y = (0, Z.jsx)(u, { ...Dr.gesture, values: { input: r } })), (t[15] = r), (t[16] = y));
  let b;
  t[17] !== c ||
  t[18] !== i ||
  t[19] !== o ||
  t[20] !== f ||
  t[21] !== p ||
  t[22] !== g ||
  t[23] !== v ||
  t[24] !== y
    ? ((b = (0, Z.jsx)(c, {
        ariaCurrent: f,
        ariaLabel: p,
        density: `compact`,
        icon: g,
        isSelected: i,
        onSelect: o,
        rightText: v,
        title: y,
      })),
      (t[17] = c),
      (t[18] = i),
      (t[19] = o),
      (t[20] = f),
      (t[21] = p),
      (t[22] = g),
      (t[23] = v),
      (t[24] = y),
      (t[25] = b))
    : (b = t[25]);
  let x;
  return (
    t[26] !== l || t[27] !== m || t[28] !== h || t[29] !== b
      ? ((x = (0, Z.jsx)(l, { openWhen: m, tooltipContent: h, children: b })),
        (t[26] = l),
        (t[27] = m),
        (t[28] = h),
        (t[29] = b),
        (t[30] = x))
      : (x = t[30]),
    x
  );
}
var Cr, wr, Z, Tr, Er, Dr;
function Or() {
  return (Or = e(() => {
    ((Cr = De()),
      se(),
      A(),
      (wr = Me()),
      U(),
      be(),
      Te(),
      F(),
      y(),
      Pe(),
      P(),
      en(),
      ir(),
      jn(),
      $n(),
      Nn(),
      yr(),
      (Z = ke()),
      (Tr = [`left`, `right`, `click`, `longPress`]),
      (Er = {
        left: (0, Z.jsx)(v, { className: `shrink-0`, "aria-hidden": !1, asset: xe }),
        right: (0, Z.jsx)(v, { className: `shrink-0 -scale-x-100`, "aria-hidden": !1, asset: xe }),
        click: (0, Z.jsx)(v, { className: `shrink-0`, "aria-hidden": !1, asset: h }),
        longPress: (0, Z.jsx)(ze, { className: `size-4 shrink-0` }),
      }),
      (Dr = i({
        gesture: {
          id: `settings.codexMicro.encoder.gesture`,
          defaultMessage: `{input, select, left {Turn left} right {Turn right} click {Click} longPress {Press and hold} other {Knob gesture}}`,
          description: `Label for a Codex Micro knob gesture`,
        },
        none: {
          id: `settings.codexMicro.encoder.none`,
          defaultMessage: `None`,
          description: `Short label for a Codex Micro knob gesture with no action assigned`,
        },
      })));
  }))();
}
function kr({
  onClose: e,
  onConfirm: t,
  title: r = (0, Ar.jsx)(u, {
    id: `settings.codexMicro.keyboardLayout.resetConfirmation.title`,
    defaultMessage: `Reset keyboard layout?`,
    description: `Title for the dialog confirming a Codex Micro keyboard layout reset`,
  }),
  description: i = (0, Ar.jsx)(u, {
    id: `settings.codexMicro.keyboardLayout.resetConfirmation.description`,
    defaultMessage: `This restores the command keys and analog stick to their default assignments without changing your agent key mode or custom chat assignments`,
    description: `Explanation shown before resetting the Codex Micro keyboard layout`,
  }),
  cancel: a = (0, Ar.jsx)(u, {
    id: `settings.codexMicro.keyboardLayout.resetConfirmation.cancel`,
    defaultMessage: `Cancel`,
    description: `Button that cancels resetting the Codex Micro keyboard layout`,
  }),
  confirm: o = (0, Ar.jsx)(u, {
    id: `settings.codexMicro.keyboardLayout.resetConfirmation.confirm`,
    defaultMessage: `Reset layout`,
    description: `Button that confirms resetting the Codex Micro keyboard layout`,
  }),
}) {
  return (0, Ar.jsx)(ie, {
    open: !0,
    showDialogClose: !1,
    size: `compact`,
    onOpenChange: (t) => {
      t || e();
    },
    children: (0, Ar.jsxs)(ce, {
      as: `form`,
      onSubmit: (n) => {
        (n.preventDefault(), t(), e());
      },
      children: [
        (0, Ar.jsx)(M, { className: `sr-only`, children: r }),
        (0, Ar.jsx)(te, { className: `sr-only`, children: i }),
        (0, Ar.jsx)(re, { children: (0, Ar.jsx)(ee, { title: r, subtitle: i }) }),
        (0, Ar.jsx)(re, {
          children: (0, Ar.jsxs)(ve, {
            children: [
              (0, Ar.jsx)(n, { color: `secondary`, onClick: e, children: a }),
              (0, Ar.jsx)(n, { color: `danger`, type: `submit`, children: o }),
            ],
          }),
        }),
      ],
    }),
  });
}
var Ar;
function jr() {
  return (jr = e(() => {
    (U(), be(), Te(), F(), (Ar = ke()));
  }))();
}
function Mr(e) {
  let t = (0, Nr.c)(11),
    { deviceName: n, onClose: r, onConfirm: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (0, Pr.jsx)(u, {
        id: `settings.codexMicro.connection.removeConfirmation.title`,
        defaultMessage: `Remove {deviceName}?`,
        description: `Title for the dialog confirming removal of an unavailable Codex Micro or Creator Micro connection from ChatGPT`,
        values: { deviceName: n },
      })),
      (t[0] = n),
      (t[1] = a));
  let o;
  t[2] === n
    ? (o = t[3])
    : ((o = (0, Pr.jsx)(u, {
        id: `settings.codexMicro.connection.removeConfirmation.description`,
        defaultMessage: `This removes {deviceName} from ChatGPT without changing its preferences, custom chat assignments, or Bluetooth pairing. Reconnect the device to add it again.`,
        description: `Explanation shown before removing an unavailable Codex Micro or Creator Micro connection from ChatGPT`,
        values: { deviceName: n },
      })),
      (t[2] = n),
      (t[3] = o));
  let s, c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Pr.jsx)(u, {
        id: `settings.codexMicro.connection.removeConfirmation.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels removing an unavailable Codex Micro or Creator Micro connection`,
      })),
      (c = (0, Pr.jsx)(u, {
        id: `settings.codexMicro.connection.removeConfirmation.confirm`,
        defaultMessage: `Remove connection`,
        description: `Button that confirms removing an unavailable Codex Micro or Creator Micro connection from ChatGPT`,
      })),
      (t[4] = s),
      (t[5] = c))
    : ((s = t[4]), (c = t[5]));
  let l;
  return (
    t[6] !== r || t[7] !== i || t[8] !== a || t[9] !== o
      ? ((l = (0, Pr.jsx)(kr, { onClose: r, onConfirm: i, title: a, description: o, cancel: s, confirm: c })),
        (t[6] = r),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
var Nr, Pr;
function Fr() {
  return (Fr = e(() => {
    ((Nr = De()), U(), jr(), (Pr = ke()));
  }))();
}
function Ir(e) {
  let t = (0, Ur.c)(11),
    n = f(s),
    { data: r, isLoading: i } = Rt(),
    a = r === void 0 ? [] : r,
    o = E(Ue),
    c;
  t[0] === o ? (c = t[1]) : ((c = rn(o)), (t[0] = o), (t[1] = c));
  let l = E(c),
    { remoteConnections: u } = Gt(),
    d = Xe(u) ?? [],
    { data: p } = E(zt),
    m = E(Fe),
    h;
  t[2] === e ? (h = t[3]) : ((h = e.trim()), (t[2] = e), (t[3] = h));
  let g = h,
    _ = Jt(g, Kr),
    v = [V, ...d.map(Vr).sort(Br)],
    { data: y, isFetching: x } = O({
      queryKey: [`codex-micro-custom-thread-search`, v, _],
      queryFn: async () =>
        (await Promise.allSettled(v.map((e) => gt(n, e).searchThreads({ query: _, limit: Gr })))).flatMap(zr),
      enabled: _.length > 0,
      staleTime: b.THIRTY_SECONDS,
    }),
    S = _ === g,
    C = E(
      lt({
        cloudTasks: [...(p ?? []), ...l.flatMap(Rr)],
        conversationsMeta: [...a, ...l.flatMap(Lr)],
        hostIds: new Set([...v, G]),
        projectLabelByThreadKey: m,
      }),
    ),
    w = S ? y : void 0,
    T;
  t[4] !== C || t[5] !== w || t[6] !== g
    ? ((T = Hr({ asyncResults: w, loadedResults: C, query: g, limit: Gr })),
      (t[4] = C),
      (t[5] = w),
      (t[6] = g),
      (t[7] = T))
    : (T = t[7]);
  let D = T,
    k = i || (g.length > 0 && (!S || x)),
    A;
  return (
    t[8] !== D || t[9] !== k
      ? ((A = { loading: k, options: D }), (t[8] = D), (t[9] = k), (t[10] = A))
      : (A = t[10]),
    A
  );
}
function Lr(e) {
  return e.kind === `local` && e.summary != null ? [e.summary] : [];
}
function Rr(e) {
  return e.kind === `remote` ? [e.task] : [];
}
function zr(e) {
  return e.status === `fulfilled` ? e.value : [];
}
function Br(e, t) {
  return e.localeCompare(t);
}
function Vr(e) {
  return e.hostId;
}
function Hr({ asyncResults: e, loadedResults: t, limit: n, query: r }) {
  let i = (0, Wr.default)(t, Ge);
  return (
    r.length === 0
      ? [...i].sort((e, t) => t.updatedAt - e.updatedAt).slice(0, n)
      : et({ asyncResults: e ?? [], loadedChatSearchResults: i, limit: n, query: r })
  ).flatMap((e) =>
    e.kind !== `local` && e.kind !== `remote`
      ? []
      : [
          {
            assignment: {
              hostId: e.kind === `local` ? e.hostId : null,
              threadKey: e.threadKey,
              title: e.title?.trim() || e.searchTitle,
            },
            result: e,
          },
        ],
  );
}
var Ur, Wr, Gr, Kr;
function qr() {
  return (qr = e(() => {
    ((Ur = De()),
      k(),
      (Wr = t(_e(), 1)),
      x(),
      ge(),
      pt(),
      Tt(),
      ft(),
      Ft(),
      Ht(),
      Oe(),
      Ut(),
      Be(),
      _t(),
      l(),
      Dt(),
      (Gr = 30),
      (Kr = 150));
  }))();
}
function Jr(e) {
  let t = (0, $r.c)(103),
    { agentKeyId: r, commands: i, skills: a, onOpenChange: c } = e,
    l = f(s),
    p = T(),
    m = E(Dn) ?? Tn,
    h = m[r],
    [g, _] = (0, ei.useState)(
      h == null || `threadKey` in h ? `chat` : h.type === `command` ? `shortcut` : h.type,
    ),
    [y, b] = (0, ei.useState)(``),
    x;
  t[0] === y ? (x = t[1]) : ((x = y.trim()), (t[0] = y), (t[1] = x));
  let S = x,
    { loading: C, options: D } = Ir(g === `chat` ? S : ``),
    O,
    k,
    A,
    j,
    N,
    P,
    F,
    I,
    ne,
    L,
    R,
    z,
    B,
    V,
    H,
    U,
    W,
    G;
  if (
    t[2] !== r ||
    t[3] !== g ||
    t[4] !== m ||
    t[5] !== D ||
    t[6] !== i ||
    t[7] !== p ||
    t[8] !== C ||
    t[9] !== c ||
    t[10] !== l ||
    t[11] !== y ||
    t[12] !== h ||
    t[13] !== a ||
    t[14] !== S
  ) {
    let e = [];
    bb0: switch (g) {
      case `chat`:
        break bb0;
      case `shortcut`:
        e = Jn(i, S, p).map(Xr);
        break bb0;
      case `keycap`: {
        let n;
        (t[33] !== p || t[34] !== S
          ? ((n = (e) => {
              if (e.action.type === `custom-shortcut`) return [];
              let t = Qr(e, p);
              return S.length > 0 && ![e.id, t, ...pn(e)].some((e) => He(e, S) > 0)
                ? []
                : [
                    {
                      assignment: { type: `keycap`, keycapId: e.id },
                      description: t,
                      keycap: e,
                      title: e.id,
                      value: e.id,
                    },
                  ];
            }),
            (t[33] = p),
            (t[34] = S),
            (t[35] = n))
          : (n = t[35]),
          (e = [{ id: g, label: p.formatMessage(ni.keycap), options: xn.flatMap(n) }]));
        break bb0;
      }
      case `skill`: {
        let n = Yn(a),
          r;
        (t[36] === S
          ? (r = t[37])
          : ((r = (e) => {
              let t = we(e),
                n = d(e);
              return S.length > 0 && ![e.name, t, n].some((e) => He(e, S) > 0)
                ? []
                : [
                    {
                      assignment: { type: `skill`, skillName: e.name, skillPath: e.path },
                      description: n,
                      title: t,
                      value: e.path,
                    },
                  ];
            }),
            (t[36] = S),
            (t[37] = r)),
          (e = [{ id: g, label: p.formatMessage(ni.skill), options: n.flatMap(r) }]));
      }
    }
    e = e.filter(Yr);
    let n =
        h == null || !(`type` in h)
          ? null
          : h.type === `command`
            ? h.commandId
            : h.type === `skill`
              ? h.skillPath
              : h.keycapId,
      o;
    t[38] !== g || t[39] !== p
      ? ((o = p.formatMessage(
          {
            id: `settings.codexMicro.customAgent.search.labelByType`,
            defaultMessage: `Search {type, select, chat {chats} shortcut {shortcuts} keycap {keycaps} skill {skills} other {assignments}} to assign`,
            description: `Accessible label for searching Codex Micro agent-key assignments by assignment type`,
          },
          { type: g },
        )),
        (t[38] = g),
        (t[39] = p),
        (t[40] = o))
      : (o = t[40]);
    let s = o,
      f = le.indexOf(r) + 1,
      _;
    (t[41] !== r || t[42] !== c || t[43] !== l
      ? ((_ = function (e) {
          (Sn(l, r, e), c(!1));
        }),
        (t[41] = r),
        (t[42] = c),
        (t[43] = l),
        (t[44] = _))
      : (_ = t[44]),
      (P = _),
      (N = ie),
      (I = !0),
      (ne = `wide`),
      (L = c),
      (j = ce),
      (G = `max-h-[calc(100vh-4rem)] min-h-0 gap-0 overflow-hidden`));
    let x;
    t[45] === f
      ? (x = t[46])
      : ((x = (0, Q.jsx)(M, {
          children: (0, Q.jsx)(u, {
            id: `settings.codexMicro.customAgent.title`,
            defaultMessage: `Assign agent key {position}`,
            description: `Title of the dialog for assigning a task to a numbered physical Agent Key on the Codex Micro hardware keypad`,
            values: { position: f },
          }),
        })),
        (t[45] = f),
        (t[46] = x));
    let w;
    (t[47] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((w = (0, Q.jsx)(te, {
          children: (0, Q.jsx)(u, {
            id: `settings.codexMicro.customAgent.description`,
            defaultMessage: `Choose a chat, shortcut, keycap, or skill for this key`,
            description: `Description of the Codex Micro custom agent-key assignment dialog`,
          }),
        })),
        (t[47] = w))
      : (w = t[47]),
      t[48] === x
        ? (F = t[49])
        : ((F = (0, Q.jsx)(re, { children: (0, Q.jsx)(ee, { title: x, subtitle: w }) })),
          (t[48] = x),
          (t[49] = F)),
      (A = re),
      (W = `min-h-0 flex-1`),
      (k = It),
      (B = !1),
      (V = s),
      (H = `min-h-0 overflow-hidden rounded-lg`));
    let T;
    (t[50] !== g || t[51] !== p
      ? ((T = p.formatMessage(
          {
            id: `settings.codexMicro.customAgent.search.placeholderByType`,
            defaultMessage: `Search {type, select, chat {chats} shortcut {shortcuts} keycap {keycaps} skill {skills} other {assignments}}`,
            description: `Placeholder for searching Codex Micro agent-key assignments by assignment type`,
          },
          { type: g },
        )),
        (t[50] = g),
        (t[51] = p),
        (t[52] = T))
      : (T = t[52]),
      t[53] !== y || t[54] !== s || t[55] !== T
        ? ((U = (0, Q.jsx)(It.Input, {
            autoFocus: !0,
            "aria-label": s,
            placeholder: T,
            value: y,
            onValueChange: b,
          })),
          (t[53] = y),
          (t[54] = s),
          (t[55] = T),
          (t[56] = U))
        : (U = t[56]),
      (O = It.List),
      (R = `max-h-[min(360px,50vh)]!`),
      (z =
        g === `chat` && C
          ? (0, Q.jsx)(`div`, {
              className: `flex h-24 items-center justify-center text-secondary`,
              children: (0, Q.jsx)(me, { className: `icon-xs` }),
            })
          : g === `chat` && D.length === 0
            ? (0, Q.jsx)(It.Empty, {
                children: (0, Q.jsx)(u, {
                  id: `settings.codexMicro.customAgent.search.empty`,
                  defaultMessage: `No active chats found`,
                  description: `Empty state for the Codex Micro custom agent-key task search`,
                }),
              })
            : g === `chat`
              ? (0, Q.jsx)(It.Group, {
                  heading: (0, Q.jsx)(`span`, {
                    className: `block px-2 pt-2 text-sm text-codex-description`,
                    children:
                      S.length === 0
                        ? (0, Q.jsx)(u, {
                            id: `settings.codexMicro.customAgent.recent`,
                            defaultMessage: `Recent chats`,
                            description: `Heading for recent tasks in the Codex Micro custom assignment dialog`,
                          })
                        : (0, Q.jsx)(u, {
                            id: `settings.codexMicro.customAgent.results`,
                            defaultMessage: `Search results`,
                            description: `Heading for task search results in the Codex Micro custom assignment dialog`,
                          }),
                  }),
                  children: D.map((e) => {
                    let { assignment: t, result: n } = e,
                      { threadKey: i } = t,
                      a = Ge(n),
                      o = le.find((e) => {
                        let n = m[e];
                        return n != null && `threadKey` in n && n.threadKey === i && n.hostId === t.hostId;
                      }),
                      s = o == null ? null : le.indexOf(o) + 1,
                      c =
                        n.title ??
                        p.formatMessage({
                          id: `settings.codexMicro.customAgent.untitled`,
                          defaultMessage: `Untitled chat`,
                          description: `Fallback title for an untitled task in the Codex Micro custom assignment dialog`,
                        }),
                      l =
                        n.kind === `local`
                          ? (n.projectLabel ?? n.cwd)
                          : (n.projectLabel ?? n.environmentLabel);
                    return (0, Q.jsx)(
                      Mt,
                      {
                        value: a,
                        title: c,
                        description: l,
                        titleTooltipContent: c,
                        descriptionTooltipContent: l,
                        LeftIcon: $e,
                        rightAccessory:
                          o === r
                            ? (0, Q.jsx)(v, { className: `text-default`, "aria-hidden": !1, asset: Ae })
                            : s == null
                              ? null
                              : (0, Q.jsx)(`span`, {
                                  className: `text-xs text-secondary`,
                                  children: (0, Q.jsx)(u, {
                                    id: `settings.codexMicro.customAgent.assignedKey`,
                                    defaultMessage: `Key {position}`,
                                    description: `Label identifying the numbered physical Agent Key on the Codex Micro hardware keypad currently assigned to a task`,
                                    values: { position: s },
                                  }),
                                }),
                        onSelect: () => P(t),
                      },
                      a,
                    );
                  }),
                })
              : e.length === 0
                ? (0, Q.jsx)(It.Empty, {
                    children: (0, Q.jsx)(u, {
                      id: `settings.codexMicro.customAgent.actions.empty`,
                      defaultMessage: `No matching {type, select, shortcut {shortcuts} keycap {keycaps} skill {skills} other {actions}}`,
                      description: `Empty state when searching actions for a Codex Micro agent key`,
                      values: { type: g },
                    }),
                  })
                : e.map((e) =>
                    (0, Q.jsx)(
                      It.Group,
                      {
                        heading: (0, Q.jsx)(`span`, {
                          className: `block px-2 pt-2 text-sm text-codex-description`,
                          children: e.label,
                        }),
                        children: e.options.map((e) =>
                          (0, Q.jsx)(
                            Mt,
                            {
                              value: e.value,
                              title: e.title,
                              description: e.description,
                              LeftIcon:
                                e.assignment.type === `skill`
                                  ? ae
                                  : e.assignment.type === `command`
                                    ? on
                                    : void 0,
                              leftAccessory:
                                e.keycap == null
                                  ? void 0
                                  : (0, Q.jsx)(Rn, { keycap: e.keycap, className: `icon-xs shrink-0` }),
                              rightAccessory:
                                h != null && `type` in h && h.type === e.assignment.type && n === e.value
                                  ? (0, Q.jsx)(v, { className: `text-default`, "aria-hidden": !1, asset: Ae })
                                  : null,
                              onSelect: () => P(e.assignment),
                            },
                            e.value,
                          ),
                        ),
                      },
                      e.id,
                    ),
                  )),
      (t[2] = r),
      (t[3] = g),
      (t[4] = m),
      (t[5] = D),
      (t[6] = i),
      (t[7] = p),
      (t[8] = C),
      (t[9] = c),
      (t[10] = l),
      (t[11] = y),
      (t[12] = h),
      (t[13] = a),
      (t[14] = S),
      (t[15] = O),
      (t[16] = k),
      (t[17] = A),
      (t[18] = j),
      (t[19] = N),
      (t[20] = P),
      (t[21] = F),
      (t[22] = I),
      (t[23] = ne),
      (t[24] = L),
      (t[25] = R),
      (t[26] = z),
      (t[27] = B),
      (t[28] = V),
      (t[29] = H),
      (t[30] = U),
      (t[31] = W),
      (t[32] = G));
  } else
    ((O = t[15]),
      (k = t[16]),
      (A = t[17]),
      (j = t[18]),
      (N = t[19]),
      (P = t[20]),
      (F = t[21]),
      (I = t[22]),
      (ne = t[23]),
      (L = t[24]),
      (R = t[25]),
      (z = t[26]),
      (B = t[27]),
      (V = t[28]),
      (H = t[29]),
      (U = t[30]),
      (W = t[31]),
      (G = t[32]));
  let oe;
  t[57] !== O || t[58] !== R || t[59] !== z
    ? ((oe = (0, Q.jsx)(O, { className: R, children: z })),
      (t[57] = O),
      (t[58] = R),
      (t[59] = z),
      (t[60] = oe))
    : (oe = t[60]);
  let se;
  t[61] !== k || t[62] !== oe || t[63] !== B || t[64] !== V || t[65] !== H || t[66] !== U
    ? ((se = (0, Q.jsxs)(k, { shouldFilter: B, label: V, className: H, children: [U, oe] })),
      (t[61] = k),
      (t[62] = oe),
      (t[63] = B),
      (t[64] = V),
      (t[65] = H),
      (t[66] = U),
      (t[67] = se))
    : (se = t[67]);
  let K;
  t[68] !== A || t[69] !== se || t[70] !== W
    ? ((K = (0, Q.jsx)(A, { className: W, children: se })),
      (t[68] = A),
      (t[69] = se),
      (t[70] = W),
      (t[71] = K))
    : (K = t[71]);
  let ue = ni[g],
    de;
  t[72] === ue
    ? (de = t[73])
    : ((de = (0, Q.jsx)(nt, { className: `w-36`, children: (0, Q.jsx)(u, { ...ue }) })),
      (t[72] = ue),
      (t[73] = de));
  let fe;
  t[74] === g
    ? (fe = t[75])
    : ((fe = ti.map((e) =>
        (0, Q.jsx)(
          w.Item,
          {
            rightIcon:
              g === e ? (0, Q.jsx)(v, { className: `text-info`, "aria-hidden": !1, asset: Ae }) : null,
            onSelect: () => {
              (_(e), b(``));
            },
            children: (0, Q.jsx)(u, { ...ni[e] }),
          },
          e,
        ),
      )),
      (t[74] = g),
      (t[75] = fe));
  let pe;
  t[76] !== de || t[77] !== fe
    ? ((pe = (0, Q.jsx)(`div`, {
        className: `me-auto`,
        children: (0, Q.jsx)(o, { align: `start`, side: `top`, triggerButton: de, children: fe }),
      })),
      (t[76] = de),
      (t[77] = fe),
      (t[78] = pe))
    : (pe = t[78]);
  let he;
  t[79] !== P || t[80] !== h
    ? ((he =
        h == null
          ? null
          : (0, Q.jsx)(n, {
              color: `secondary`,
              onClick: () => P(null),
              children: (0, Q.jsx)(u, {
                id: `settings.codexMicro.customAgent.remove`,
                defaultMessage: `Remove assignment`,
                description: `Button that removes a custom Codex Micro agent-key assignment`,
              }),
            })),
      (t[79] = P),
      (t[80] = h),
      (t[81] = he))
    : (he = t[81]);
  let ge;
  t[82] === c ? (ge = t[83]) : ((ge = () => c(!1)), (t[82] = c), (t[83] = ge));
  let _e;
  t[84] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, Q.jsx)(u, {
        id: `settings.codexMicro.customAgent.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the Codex Micro custom agent-key assignment dialog`,
      })),
      (t[84] = _e))
    : (_e = t[84]);
  let q;
  t[85] === ge
    ? (q = t[86])
    : ((q = (0, Q.jsx)(n, { color: `ghost`, onClick: ge, children: _e })), (t[85] = ge), (t[86] = q));
  let ye;
  t[87] !== pe || t[88] !== he || t[89] !== q
    ? ((ye = (0, Q.jsx)(re, {
        children: (0, Q.jsxs)(ve, { expandSingleButton: !1, children: [pe, he, q] }),
      })),
      (t[87] = pe),
      (t[88] = he),
      (t[89] = q),
      (t[90] = ye))
    : (ye = t[90]);
  let be;
  t[91] !== j || t[92] !== F || t[93] !== K || t[94] !== ye || t[95] !== G
    ? ((be = (0, Q.jsxs)(j, { className: G, children: [F, K, ye] })),
      (t[91] = j),
      (t[92] = F),
      (t[93] = K),
      (t[94] = ye),
      (t[95] = G),
      (t[96] = be))
    : (be = t[96]);
  let xe;
  return (
    t[97] !== N || t[98] !== I || t[99] !== ne || t[100] !== L || t[101] !== be
      ? ((xe = (0, Q.jsx)(N, { open: I, size: ne, onOpenChange: L, children: be })),
        (t[97] = N),
        (t[98] = I),
        (t[99] = ne),
        (t[100] = L),
        (t[101] = be),
        (t[102] = xe))
      : (xe = t[102]),
    xe
  );
}
function Yr(e) {
  return e.options.length > 0;
}
function Xr(e) {
  let { id: t, label: n, options: r } = e;
  return { id: t, label: n, options: r.map(Zr) };
}
function Zr(e) {
  let { command: t, description: n, title: r } = e;
  return { assignment: { type: `command`, commandId: t.id }, description: n, title: r, value: t.id };
}
function Qr(e, t) {
  switch (e.action.type) {
    case `command`: {
      let n = un(e.action.command);
      return n == null ? e.action.command : On(n, t);
    }
    case `composer-text`:
      return t.formatMessage(
        {
          id: `settings.codexMicro.customAgent.keycaps.composerText`,
          defaultMessage: `Insert {text} into the composer`,
          description: `Description for a Codex Micro keycap that inserts text into the composer`,
        },
        { text: e.action.text },
      );
    case `custom-shortcut`:
      return t.formatMessage({
        id: `settings.codexMicro.customAgent.keycaps.customShortcut`,
        defaultMessage: `Custom shortcut`,
        description: `Description for an unassigned Codex Micro shortcut keycap`,
      });
    case `external-url`:
      return t.formatMessage(
        {
          id: `settings.codexMicro.customAgent.keycaps.externalUrl`,
          defaultMessage: `Open {url}`,
          description: `Description for a Codex Micro keycap that opens an external URL`,
        },
        { url: e.action.url },
      );
    case `named`:
      return t.formatMessage({
        id: `settings.codexMicro.customAgent.keycaps.microphone`,
        defaultMessage: `Microphone`,
        description: `Description for the Codex Micro microphone keycap`,
      });
  }
}
var $r, ei, Q, ti, ni;
function ri() {
  return (ri = e(() => {
    (($r = De()),
      N(),
      Xt(),
      x(),
      ge(),
      (ei = Me()),
      U(),
      kn(),
      Ft(),
      qe(),
      bt(),
      be(),
      Te(),
      F(),
      a(),
      y(),
      z(),
      at(),
      an(),
      L(),
      Oe(),
      qt(),
      K(),
      $n(),
      ln(),
      Cn(),
      Gn(),
      mn(),
      qr(),
      (Q = ke()),
      (ti = [`chat`, `shortcut`, `keycap`, `skill`]),
      (ni = i({
        chat: {
          id: `settings.codexMicro.customAgent.assignmentType.chat`,
          defaultMessage: `Chats`,
          description: `Assignment picker option for Codex Micro agent-key chats`,
        },
        shortcut: {
          id: `settings.codexMicro.customAgent.assignmentType.shortcut`,
          defaultMessage: `Shortcuts`,
          description: `Assignment picker option for Codex Micro agent-key shortcuts`,
        },
        keycap: {
          id: `settings.codexMicro.customAgent.assignmentType.keycap`,
          defaultMessage: `Keycaps`,
          description: `Assignment picker option for Codex Micro agent-key keycaps`,
        },
        skill: {
          id: `settings.codexMicro.customAgent.assignmentType.skill`,
          defaultMessage: `Skills`,
          description: `Assignment picker option for Codex Micro agent-key skills`,
        },
      })));
  }))();
}
function ii(e) {
  let t = (0, ai.c)(9),
    { mode: n, onChange: r } = e,
    i,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, oi.jsx)(u, { ...X.microphoneKey })),
      (a = (0, oi.jsx)(u, { ...X.microphoneKeyDescription })),
      (t[0] = i),
      (t[1] = a))
    : ((i = t[0]), (a = t[1]));
  let s = si[n],
    c;
  t[2] === s.label
    ? (c = t[3])
    : ((c = (0, oi.jsx)(nt, { children: (0, oi.jsx)(u, { ...s.label }) })), (t[2] = s.label), (t[3] = c));
  let l;
  t[4] === r
    ? (l = t[5])
    : ((l = je.options.map((e) => {
        let t = si[e];
        return (0, oi.jsx)(
          w.Item,
          {
            allowWrap: !0,
            onSelect: () => r(e),
            children: (0, oi.jsxs)(`div`, {
              className: `flex min-w-0 flex-col gap-0.5`,
              children: [
                (0, oi.jsx)(`span`, { className: `truncate`, children: (0, oi.jsx)(u, { ...t.label }) }),
                (0, oi.jsx)(`span`, {
                  className: `text-sm text-secondary`,
                  children: (0, oi.jsx)(u, { ...t.description }),
                }),
              ],
            }),
          },
          e,
        );
      })),
      (t[4] = r),
      (t[5] = l));
  let d;
  return (
    t[6] !== c || t[7] !== l
      ? ((d = (0, oi.jsx)(Ce, {
          label: i,
          description: a,
          control: (0, oi.jsx)(o, { align: `end`, contentWidth: `menuWide`, triggerButton: c, children: l }),
        })),
        (t[6] = c),
        (t[7] = l),
        (t[8] = d))
      : (d = t[8]),
    d
  );
}
var ai, oi, si;
function ci() {
  return (ci = e(() => {
    ((ai = De()),
      ge(),
      U(),
      a(),
      H(),
      qt(),
      yr(),
      (oi = ke()),
      (si = {
        "push-to-talk": {
          label: X.microphoneKeyPushToTalk,
          description: X.microphoneKeyPushToTalkDescription,
        },
        realtime: { label: X.microphoneKeyVoiceChat, description: X.microphoneKeyVoiceChatDescription },
      }));
  }))();
}
function li(e) {
  return Pi.flatMap((t) => (t.slotId === `ACT10_ACT11` && e.separateMicrophoneKeys ? Fi : t));
}
function ui() {
  let e = (0, Oi.c)(1),
    t = g.codexMicro;
  if (t == null) return null;
  let n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(di, { codexMicro: t })), (e[0] = n))
      : (n = e[0]),
    n
  );
}
function di(e) {
  let t = (0, Oi.c)(180),
    { codexMicro: i } = e,
    a = f(s),
    c = T(),
    l = E(St),
    d = E(vt),
    p = E(ht),
    m = E(rt),
    h = E(Yt),
    g = E(Re),
    _ = E(wn),
    v = E(Dn) ?? Tn,
    y = E(ct),
    { platform: x } = Ot(),
    S = r(q.layout),
    C = r(q.agentSource),
    D = r(q.singleTapAgentKeys),
    k = r(q.lightingBrightness),
    A = r(q.lightingAutoOff),
    j;
  t[0] === S ? (j = t[1]) : ((j = hn(S)), (t[0] = S), (t[1] = j));
  let M = j,
    N;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = { name: `automations.local` }), (t[2] = N))
    : (N = t[2]);
  let ee = Ne(tt, N).isCapable,
    P;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = { name: `automations.cloud` }), (t[3] = P))
    : (P = t[3]);
  let F = Ne(tt, P).isCapable,
    I = Bt(`1372061905`),
    te = Pt(),
    L = te ? M.voiceButtonMode : `push-to-talk`,
    z = m === `creator-micro-v2` ? `Creator Micro` : `Codex Micro`,
    B;
  t[4] !== F || t[5] !== l || t[6] !== g || t[7] !== I || t[8] !== y || t[9] !== te || t[10] !== ee
    ? ((B = dn.filter(
        (e) =>
          (e.requiredAccess == null || l) &&
          (e.id !== `manageTasks` || ee || F) &&
          (e.id !== `hotkeyWindow` || I) &&
          (e.id !== `toggleSidebar` || y) &&
          (e.id !== `composer.captureAppshot` || g) &&
          (!it(e.id) || te),
      )),
      (t[4] = F),
      (t[5] = l),
      (t[6] = g),
      (t[7] = I),
      (t[8] = y),
      (t[9] = te),
      (t[10] = ee),
      (t[11] = B))
    : (B = t[11]);
  let V = B,
    { skills: H } = kt(),
    [U, re] = (0, ki.useState)(null),
    [G, ie] = (0, ki.useState)(null),
    [ae, se] = (0, ki.useState)(!1),
    ce = x === `macOS`,
    K;
  t[12] === i ? (K = t[13]) : ((K = () => i.getInputMonitoringPermissionStatus()), (t[12] = i), (t[13] = K));
  let le;
  t[14] !== ce || t[15] !== K
    ? ((le = {
        enabled: ce,
        queryFn: K,
        queryKey: Fn,
        refetchInterval: In,
        refetchIntervalInBackground: !0,
        refetchOnMount: `always`,
        staleTime: b.FIVE_SECONDS,
      }),
      (t[14] = ce),
      (t[15] = K),
      (t[16] = le))
    : (le = t[16]);
  let { data: de } = O(le),
    fe;
  t[17] === m
    ? (fe = t[18])
    : ((fe =
        m === `creator-micro-v2`
          ? (0, $.jsx)(u, { ...Lt.creatorMicro })
          : (0, $.jsx)(u, { ...Vt(`codex-micro`) })),
      (t[17] = m),
      (t[18] = fe));
  let me;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, $.jsx)(u, { ...X.connection })), (t[19] = me))
    : (me = t[19]);
  let he;
  t[20] !== z || t[21] !== d.controlPlaneStatus || t[22] !== d.error || t[23] !== d.status
    ? ((he =
        d.status === `error` || d.controlPlaneStatus === `unavailable`
          ? (0, $.jsx)(gi, { controlPlaneStatus: d.controlPlaneStatus, deviceName: z, error: d.error })
          : void 0),
      (t[20] = z),
      (t[21] = d.controlPlaneStatus),
      (t[22] = d.error),
      (t[23] = d.status),
      (t[24] = he))
    : (he = t[24]);
  let ge;
  t[25] !== d.controlPlaneStatus || t[26] !== d.error || t[27] !== d.status
    ? ((ge = (0, $.jsx)(mi, { controlPlaneStatus: d.controlPlaneStatus, error: d.error, status: d.status })),
      (t[25] = d.controlPlaneStatus),
      (t[26] = d.error),
      (t[27] = d.status),
      (t[28] = ge))
    : (ge = t[28]);
  let _e;
  t[29] !== p || t[30] !== z || t[31] !== a
    ? ((_e = p
        ? (0, $.jsx)(n, {
            color: `danger`,
            size: `toolbar`,
            onClick: () => {
              Qe(a, Mr, {
                deviceName: z,
                onConfirm: () => {
                  a.get(ht) && cn(a);
                },
              });
            },
            children: (0, $.jsx)(u, {
              id: `settings.codexMicro.connection.remove`,
              defaultMessage: `Remove`,
              description: `Button that removes an unavailable Codex Micro or Creator Micro connection from Codex`,
            }),
          })
        : null),
      (t[29] = p),
      (t[30] = z),
      (t[31] = a),
      (t[32] = _e))
    : (_e = t[32]);
  let ve;
  t[33] !== ge || t[34] !== _e
    ? ((ve = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [ge, _e] })),
      (t[33] = ge),
      (t[34] = _e),
      (t[35] = ve))
    : (ve = t[35]);
  let ye;
  t[36] !== he || t[37] !== ve
    ? ((ye = (0, $.jsx)(Ce, { label: me, description: he, control: ve })),
      (t[36] = he),
      (t[37] = ve),
      (t[38] = ye))
    : (ye = t[38]);
  let be;
  t[39] !== d.battery || t[40] !== d.status
    ? ((be =
        d.status === `connected` && d.battery != null
          ? (0, $.jsx)(Ce, {
              label: (0, $.jsx)(u, {
                id: `settings.codexMicro.battery`,
                defaultMessage: `Battery`,
                description: `Label for the Codex Micro battery status`,
              }),
              control: (0, $.jsx)($t, { ...d.battery }),
            })
          : null),
      (t[39] = d.battery),
      (t[40] = d.status),
      (t[41] = be))
    : (be = t[41]);
  let xe;
  t[42] !== i || t[43] !== z || t[44] !== de || t[45] !== x
    ? ((xe =
        x === `macOS`
          ? (0, $.jsx)(Ce, {
              label: (0, $.jsx)(u, { ...X.inputMonitoring }),
              description: (0, $.jsx)(u, {
                id: `settings.codexMicro.inputMonitoring.descriptionByDevice`,
                defaultMessage: `Required for {deviceName} key presses on macOS`,
                description: `Description for the macOS Input Monitoring permission state for Codex Micro or Creator Micro`,
                values: { deviceName: z },
              }),
              control: (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, $.jsx)(pi, { status: de }),
                  de === `denied`
                    ? (0, $.jsx)(n, {
                        color: `secondary`,
                        onClick: () => {
                          i.openInputMonitoringSettings();
                        },
                        children: (0, $.jsx)(u, {
                          id: `settings.codexMicro.inputMonitoring.openSettings`,
                          defaultMessage: `Open System Settings`,
                          description: `Button that opens macOS Input Monitoring settings`,
                        }),
                      })
                    : null,
                ],
              }),
            })
          : null),
      (t[42] = i),
      (t[43] = z),
      (t[44] = de),
      (t[45] = x),
      (t[46] = xe))
    : (xe = t[46]);
  let Se;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, $.jsx)(u, { ...X.lightingBrightness })), (t[47] = Se))
    : (Se = t[47]);
  let we;
  t[48] === z
    ? (we = t[49])
    : ((we = (0, $.jsx)(u, { ...X.lightingBrightnessDescription, values: { deviceName: z } })),
      (t[48] = z),
      (t[49] = we));
  let Te;
  t[50] === a
    ? (Te = t[51])
    : ((Te = (e) => {
        pe(a, q.lightingBrightness, e);
      }),
      (t[50] = a),
      (t[51] = Te));
  let De;
  t[52] !== k || t[53] !== Te
    ? ((De = (0, $.jsx)(fi, { value: k, onChange: Te })), (t[52] = k), (t[53] = Te), (t[54] = De))
    : (De = t[54]);
  let Oe;
  t[55] !== we || t[56] !== De
    ? ((Oe = (0, $.jsx)(Ce, { label: Se, description: we, control: De })),
      (t[55] = we),
      (t[56] = De),
      (t[57] = Oe))
    : (Oe = t[57]);
  let ke;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (0, $.jsx)(u, { ...X.lightingAutoOff })), (t[58] = ke))
    : (ke = t[58]);
  let Ae;
  t[59] === z
    ? (Ae = t[60])
    : ((Ae = (0, $.jsx)(u, { ...X.lightingAutoOffDescription, values: { deviceName: z } })),
      (t[59] = z),
      (t[60] = Ae));
  let je = ji[A],
    Me;
  t[61] === je
    ? (Me = t[62])
    : ((Me = (0, $.jsx)(nt, { className: `w-42!`, children: (0, $.jsx)(u, { ...je }) })),
      (t[61] = je),
      (t[62] = Me));
  let Pe;
  t[63] === a
    ? (Pe = t[64])
    : ((Pe = Ee.options.map((e) =>
        (0, $.jsx)(
          w.Item,
          {
            onSelect: () => {
              pe(a, q.lightingAutoOff, e);
            },
            children: (0, $.jsx)(u, { ...ji[e] }),
          },
          e,
        ),
      )),
      (t[63] = a),
      (t[64] = Pe));
  let Fe;
  t[65] !== Me || t[66] !== Pe
    ? ((Fe = (0, $.jsx)(o, { align: `end`, contentWidth: `xs`, triggerButton: Me, children: Pe })),
      (t[65] = Me),
      (t[66] = Pe),
      (t[67] = Fe))
    : (Fe = t[67]);
  let Ie;
  t[68] !== Ae || t[69] !== Fe
    ? ((Ie = (0, $.jsx)(Ce, { label: ke, description: Ae, control: Fe })),
      (t[68] = Ae),
      (t[69] = Fe),
      (t[70] = Ie))
    : (Ie = t[70]);
  let Le;
  t[71] !== ye || t[72] !== be || t[73] !== xe || t[74] !== Oe || t[75] !== Ie
    ? ((Le = (0, $.jsx)(ut, {
        children: (0, $.jsx)(ut.Content, { children: (0, $.jsxs)(ue, { children: [ye, be, xe, Oe, Ie] }) }),
      })),
      (t[71] = ye),
      (t[72] = be),
      (t[73] = xe),
      (t[74] = Oe),
      (t[75] = Ie),
      (t[76] = Le))
    : (Le = t[76]);
  let ze;
  t[77] === a
    ? (ze = t[78])
    : ((ze = () => {
        Qe(a, kr, {
          onConfirm: () => {
            pe(a, q.layout, oe);
          },
        });
      }),
      (t[77] = a),
      (t[78] = ze));
  let Be;
  t[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (0, $.jsx)(u, {
        id: `settings.codexMicro.keyboardLayout.reset`,
        defaultMessage: `Reset layout`,
        description: `Button that restores the default Codex Micro action-key layout`,
      })),
      (t[79] = Be))
    : (Be = t[79]);
  let Ve;
  t[80] === ze
    ? (Ve = t[81])
    : ((Ve = (0, $.jsx)(n, { color: `ghost`, size: `toolbar`, onClick: ze, children: Be })),
      (t[80] = ze),
      (t[81] = Ve));
  let He;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (0, $.jsx)(u, { ...X.keyboardLayout })), (t[82] = He))
    : (He = t[82]);
  let Ue;
  t[83] === Ve
    ? (Ue = t[84])
    : ((Ue = (0, $.jsx)(ut.Header, { actions: Ve, title: He })), (t[83] = Ve), (t[84] = Ue));
  let We = C === `custom` ? v : void 0,
    Ge = C === `custom` ? ie : void 0,
    Ke,
    qe;
  t[85] !== M || t[86] !== a
    ? ((Ke = (e, t) => {
        pe(a, q.layout, bn(M, e, t));
      }),
      (qe = (e, t) => {
        pe(a, q.layout, fn(M, e, t));
      }),
      (t[85] = M),
      (t[86] = a),
      (t[87] = Ke),
      (t[88] = qe))
    : ((Ke = t[87]), (qe = t[88]));
  let Je, Ye;
  t[89] === a
    ? ((Je = t[90]), (Ye = t[91]))
    : ((Je = (e) => {
        Nt(a, e);
      }),
      (Ye = (e) => {
        xt(a, e);
      }),
      (t[89] = a),
      (t[90] = Je),
      (t[91] = Ye));
  let Xe;
  t[92] !== _ ||
  t[93] !== V ||
  t[94] !== z ||
  t[95] !== ae ||
  t[96] !== M ||
  t[97] !== h ||
  t[98] !== H ||
  t[99] !== We ||
  t[100] !== Ge ||
  t[101] !== Ke ||
  t[102] !== qe ||
  t[103] !== Je ||
  t[104] !== Ye ||
  t[105] !== L
    ? ((Xe = (0, $.jsx)(ut.Content, {
        children: (0, $.jsx)(ue, {
          children: (0, $.jsx)(bi, {
            agentSlots: _,
            commands: V,
            customAgentAssignments: We,
            deviceName: z,
            isEncoderEditorOpen: ae,
            layout: M,
            previewState: h,
            skills: H,
            voiceButtonMode: L,
            onEditSlot: re,
            onEditAgentKey: Ge,
            onEncoderEditorOpenChange: se,
            onSetAnalogAction: Ke,
            onSetEncoderAction: qe,
            onSelectAnalogDirection: Je,
            onSetAnalogEditorOpen: Ye,
          }),
        }),
      })),
      (t[92] = _),
      (t[93] = V),
      (t[94] = z),
      (t[95] = ae),
      (t[96] = M),
      (t[97] = h),
      (t[98] = H),
      (t[99] = We),
      (t[100] = Ge),
      (t[101] = Ke),
      (t[102] = qe),
      (t[103] = Je),
      (t[104] = Ye),
      (t[105] = L),
      (t[106] = Xe))
    : (Xe = t[106]);
  let Ze;
  t[107] !== Ue || t[108] !== Xe
    ? ((Ze = (0, $.jsxs)(ut, { children: [Ue, Xe] })), (t[107] = Ue), (t[108] = Xe), (t[109] = Ze))
    : (Ze = t[109]);
  let $e;
  t[110] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($e = (0, $.jsx)(ut.Header, { title: (0, $.jsx)(u, { ...X.options }) })), (t[110] = $e))
    : ($e = t[110]);
  let et, at;
  t[111] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = (0, $.jsx)(u, { ...X.agentKeys })),
      (at = (0, $.jsx)(u, {
        id: `settings.codexMicro.agentKeys.description`,
        defaultMessage: `Choose what the six agent keys follow or trigger`,
        description: `Description for the Codex Micro agent-key task source setting`,
      })),
      (t[111] = et),
      (t[112] = at))
    : ((et = t[111]), (at = t[112]));
  let ot = Ai[C],
    st;
  t[113] === ot.label
    ? (st = t[114])
    : ((st = (0, $.jsx)(nt, { children: (0, $.jsx)(u, { ...ot.label }) })),
      (t[113] = ot.label),
      (t[114] = st));
  let lt;
  t[115] === a
    ? (lt = t[116])
    : ((lt = R.options.map((e) => {
        let t = Ai[e];
        return (0, $.jsx)(
          w.Item,
          {
            allowWrap: !0,
            onSelect: () => {
              (ie(null), pe(a, q.agentSource, e));
            },
            children: (0, $.jsxs)(`div`, {
              className: `flex min-w-0 flex-col gap-0.5`,
              children: [
                (0, $.jsx)(`span`, { className: `truncate`, children: (0, $.jsx)(u, { ...t.label }) }),
                (0, $.jsx)(`span`, {
                  className: `text-sm text-secondary`,
                  children: (0, $.jsx)(u, { ...t.description }),
                }),
              ],
            }),
          },
          e,
        );
      })),
      (t[115] = a),
      (t[116] = lt));
  let dt;
  t[117] !== st || t[118] !== lt
    ? ((dt = (0, $.jsx)(Ce, {
        label: et,
        description: at,
        control: (0, $.jsx)(o, { align: `end`, contentWidth: `menuWide`, triggerButton: st, children: lt }),
      })),
      (t[117] = st),
      (t[118] = lt),
      (t[119] = dt))
    : (dt = t[119]);
  let ft, pt;
  t[120] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (0, $.jsx)(u, { ...X.knob })),
      (pt = (0, $.jsx)(u, { ...X.knobDescription })),
      (t[120] = ft),
      (t[121] = pt))
    : ((ft = t[120]), (pt = t[121]));
  let mt = Mi[M.encoderMode],
    gt;
  t[122] === mt.label
    ? (gt = t[123])
    : ((gt = (0, $.jsx)(nt, { children: (0, $.jsx)(u, { ...mt.label }) })),
      (t[122] = mt.label),
      (t[123] = gt));
  let _t;
  t[124] !== M || t[125] !== a
    ? ((_t = ne.options.map((e) => {
        let t = Mi[e];
        return (0, $.jsx)(
          w.Item,
          {
            allowWrap: !0,
            onSelect: () => {
              (se(e === `custom`), pe(a, q.layout, { ...M, encoderMode: e }));
            },
            children: (0, $.jsxs)(`div`, {
              className: `flex min-w-0 flex-col gap-0.5`,
              children: [
                (0, $.jsx)(`span`, { className: `truncate`, children: (0, $.jsx)(u, { ...t.label }) }),
                (0, $.jsx)(`span`, {
                  className: `text-sm text-secondary`,
                  children: (0, $.jsx)(u, { ...t.description }),
                }),
              ],
            }),
          },
          e,
        );
      })),
      (t[124] = M),
      (t[125] = a),
      (t[126] = _t))
    : (_t = t[126]);
  let yt;
  t[127] !== gt || t[128] !== _t
    ? ((yt = (0, $.jsx)(Ce, {
        label: ft,
        description: pt,
        control: (0, $.jsx)(o, { align: `end`, contentWidth: `menuWide`, triggerButton: gt, children: _t }),
      })),
      (t[127] = gt),
      (t[128] = _t),
      (t[129] = yt))
    : (yt = t[129]);
  let bt;
  t[130] !== te || t[131] !== M || t[132] !== a
    ? ((bt = te
        ? (0, $.jsx)(ii, {
            mode: M.voiceButtonMode,
            onChange: (e) => {
              pe(a, q.layout, { ...M, voiceButtonMode: e });
            },
          })
        : null),
      (t[130] = te),
      (t[131] = M),
      (t[132] = a),
      (t[133] = bt))
    : (bt = t[133]);
  let Ct, wt;
  t[134] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ct = (0, $.jsx)(u, { ...X.separateMicrophoneKeys })),
      (wt = (0, $.jsx)(u, { ...X.separateMicrophoneKeysDescription })),
      (t[134] = Ct),
      (t[135] = wt))
    : ((Ct = t[134]), (wt = t[135]));
  let Tt = M.separateMicrophoneKeys,
    Et;
  t[136] === c
    ? (Et = t[137])
    : ((Et = c.formatMessage(X.separateMicrophoneKeys)), (t[136] = c), (t[137] = Et));
  let Dt;
  t[138] !== M || t[139] !== a
    ? ((Dt = (e) => {
        pe(a, q.layout, { ...M, separateMicrophoneKeys: e });
      }),
      (t[138] = M),
      (t[139] = a),
      (t[140] = Dt))
    : (Dt = t[140]);
  let At;
  t[141] !== M.separateMicrophoneKeys || t[142] !== Et || t[143] !== Dt
    ? ((At = (0, $.jsx)(Ce, {
        label: Ct,
        description: wt,
        control: (0, $.jsx)(W, { checked: Tt, ariaLabel: Et, onChange: Dt }),
      })),
      (t[141] = M.separateMicrophoneKeys),
      (t[142] = Et),
      (t[143] = Dt),
      (t[144] = At))
    : (At = t[144]);
  let Mt, Ft;
  t[145] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mt = (0, $.jsx)(u, { ...X.singleTapAgentKeys })),
      (Ft = (0, $.jsx)(u, { ...X.singleTapAgentKeysDescription })),
      (t[145] = Mt),
      (t[146] = Ft))
    : ((Mt = t[145]), (Ft = t[146]));
  let It;
  t[147] === c ? (It = t[148]) : ((It = c.formatMessage(X.singleTapAgentKeys)), (t[147] = c), (t[148] = It));
  let Rt;
  t[149] === a
    ? (Rt = t[150])
    : ((Rt = (e) => {
        pe(a, q.singleTapAgentKeys, e);
      }),
      (t[149] = a),
      (t[150] = Rt));
  let zt;
  t[151] !== D || t[152] !== It || t[153] !== Rt
    ? ((zt = (0, $.jsx)(Ce, {
        label: Mt,
        description: Ft,
        control: (0, $.jsx)(W, { checked: D, ariaLabel: It, onChange: Rt }),
      })),
      (t[151] = D),
      (t[152] = It),
      (t[153] = Rt),
      (t[154] = zt))
    : (zt = t[154]);
  let Ht;
  t[155] !== dt || t[156] !== yt || t[157] !== bt || t[158] !== At || t[159] !== zt
    ? ((Ht = (0, $.jsxs)(ut, {
        children: [
          $e,
          (0, $.jsx)(ut.Content, { children: (0, $.jsxs)(ue, { children: [dt, yt, bt, At, zt] }) }),
        ],
      })),
      (t[155] = dt),
      (t[156] = yt),
      (t[157] = bt),
      (t[158] = At),
      (t[159] = zt),
      (t[160] = Ht))
    : (Ht = t[160]);
  let Ut;
  t[161] !== V || t[162] !== U || t[163] !== M || t[164] !== a || t[165] !== H || t[166] !== L
    ? ((Ut =
        U == null
          ? null
          : (0, $.jsx)(
              yi,
              {
                commands: V,
                layout: M,
                skills: H,
                slotId: U,
                voiceButtonMode: L,
                onOpenChange: (e) => {
                  e || re(null);
                },
                onSave: (e) => {
                  pe(a, q.layout, gn(M, U, e)).then(() => {
                    re(null);
                  });
                },
              },
              U,
            )),
      (t[161] = V),
      (t[162] = U),
      (t[163] = M),
      (t[164] = a),
      (t[165] = H),
      (t[166] = L),
      (t[167] = Ut))
    : (Ut = t[167]);
  let Wt;
  t[168] !== C || t[169] !== V || t[170] !== G || t[171] !== H
    ? ((Wt =
        C === `custom` && G != null
          ? (0, $.jsx)(
              Jr,
              {
                agentKeyId: G,
                commands: V,
                skills: H,
                onOpenChange: (e) => {
                  e || ie(null);
                },
              },
              G,
            )
          : null),
      (t[168] = C),
      (t[169] = V),
      (t[170] = G),
      (t[171] = H),
      (t[172] = Wt))
    : (Wt = t[172]);
  let Gt;
  return (
    t[173] !== Le || t[174] !== Ze || t[175] !== Ht || t[176] !== Ut || t[177] !== Wt || t[178] !== fe
      ? ((Gt = (0, $.jsxs)(jt, { title: fe, children: [Le, Ze, Ht, Ut, Wt] })),
        (t[173] = Le),
        (t[174] = Ze),
        (t[175] = Ht),
        (t[176] = Ut),
        (t[177] = Wt),
        (t[178] = fe),
        (t[179] = Gt))
      : (Gt = t[179]),
    Gt
  );
}
function fi(e) {
  let t = (0, Oi.c)(17),
    { value: n, onChange: r } = e,
    i = T(),
    a;
  t[0] !== i || t[1] !== n
    ? ((a = i.formatNumber(n / 100, { style: `percent` })), (t[0] = i), (t[1] = n), (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] === i ? (s = t[4]) : ((s = i.formatMessage(X.lightingBrightness)), (t[3] = i), (t[4] = s));
  let l;
  t[5] === r
    ? (l = t[6])
    : ((l = (e) => {
        r(Number(e.currentTarget.value));
      }),
      (t[5] = r),
      (t[6] = l));
  let u;
  t[7] !== o || t[8] !== s || t[9] !== l || t[10] !== n
    ? ((u = (0, $.jsx)(`input`, {
        "aria-label": s,
        "aria-valuetext": o,
        className: `h-0.5 flex-1 cursor-interaction appearance-none rounded-full bg-border text-default outline-none focus-visible:ring-2 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-transparent [&::-moz-range-thumb]:bg-current [&::-moz-range-thumb]:shadow-sm [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-transparent [&::-webkit-slider-thumb]:bg-current [&::-webkit-slider-thumb]:shadow-sm`,
        max: 100,
        min: 0,
        step: 10,
        type: `range`,
        value: n,
        onChange: l,
      })),
      (t[7] = o),
      (t[8] = s),
      (t[9] = l),
      (t[10] = n),
      (t[11] = u))
    : (u = t[11]);
  let d = n / 100,
    f;
  t[12] === d
    ? (f = t[13])
    : ((f = (0, $.jsx)(`span`, {
        className: `w-12 text-end text-sm text-secondary tabular-nums`,
        children: (0, $.jsx)(c, { style: `percent`, value: d }),
      })),
      (t[12] = d),
      (t[13] = f));
  let p;
  return (
    t[14] !== u || t[15] !== f
      ? ((p = (0, $.jsxs)(`div`, { className: `flex h-9 min-w-48 items-center gap-2.5`, children: [u, f] })),
        (t[14] = u),
        (t[15] = f),
        (t[16] = p))
      : (p = t[16]),
    p
  );
}
function pi(e) {
  let t = (0, Oi.c)(3),
    { status: n } = e;
  switch (n) {
    case `granted`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(`span`, {
              className: `text-sm text-chart-green`,
              children: (0, $.jsx)(u, {
                id: `settings.codexMicro.inputMonitoring.granted`,
                defaultMessage: `Granted`,
                description: `Granted macOS Input Monitoring permission status`,
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `denied`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(`span`, {
              className: `text-sm text-danger`,
              children: (0, $.jsx)(u, {
                id: `settings.codexMicro.inputMonitoring.denied`,
                defaultMessage: `Not granted`,
                description: `Denied macOS Input Monitoring permission status`,
              }),
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `unavailable`:
    case void 0: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(`span`, {
              className: `text-sm text-secondary`,
              children: (0, $.jsx)(u, {
                id: `settings.codexMicro.inputMonitoring.unavailable`,
                defaultMessage: `Unavailable`,
                description: `Unavailable macOS Input Monitoring permission status`,
              }),
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function mi(e) {
  let t = (0, Oi.c)(13),
    { controlPlaneStatus: n, error: r, status: i } = e,
    a = i === `connected` && n === `unavailable`,
    o;
  bb0: switch (i) {
    case `connected`: {
      let e;
      (t[0] === a
        ? (e = t[1])
        : ((e = a
            ? (0, $.jsx)(u, { ...X.connectionControlUnavailable })
            : (0, $.jsx)(u, {
                id: `settings.codexMicro.connection.connected`,
                defaultMessage: `Connected`,
                description: `Connected Codex Micro status`,
              })),
          (t[0] = a),
          (t[1] = e)),
        (o = e));
      break bb0;
    }
    case `detected`: {
      let e;
      (t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(u, {
            id: `settings.codexMicro.connection.detected`,
            defaultMessage: `Detected`,
            description: `Detected Codex Micro status while the app connects`,
          })),
          (t[2] = e))
        : (e = t[2]),
        (o = e));
      break bb0;
    }
    case `not-detected`: {
      let e;
      (t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(u, {
            id: `settings.codexMicro.connection.notDetected`,
            defaultMessage: `Not detected`,
            description: `Disconnected Codex Micro status`,
          })),
          (t[3] = e))
        : (e = t[3]),
        (o = e));
      break bb0;
    }
    case `error`: {
      let e;
      (t[4] === r ? (e = t[5]) : ((e = (0, $.jsx)(hi, { error: r })), (t[4] = r), (t[5] = e)), (o = e));
    }
  }
  let s = i === `error`,
    c = i !== `error` && !a,
    l;
  t[6] !== a || t[7] !== s || t[8] !== c
    ? ((l = I(`text-sm`, { "text-danger": s, "text-warning": a, "text-secondary": c })),
      (t[6] = a),
      (t[7] = s),
      (t[8] = c),
      (t[9] = l))
    : (l = t[9]);
  let d;
  return (
    t[10] !== o || t[11] !== l
      ? ((d = (0, $.jsx)(`span`, { className: l, children: o })), (t[10] = o), (t[11] = l), (t[12] = d))
      : (d = t[12]),
    d
  );
}
function hi(e) {
  let t = (0, Oi.c)(3),
    { error: n } = e;
  if (n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(u, { ...X.connectionProblem })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let r = Ni[n],
    i;
  return (
    t[1] === r.label ? (i = t[2]) : ((i = (0, $.jsx)(u, { ...r.label })), (t[1] = r.label), (t[2] = i)),
    i
  );
}
function gi(e) {
  let t = (0, Oi.c)(5),
    { controlPlaneStatus: n, deviceName: r, error: i } = e;
  if (n === `unavailable`) {
    let e;
    return (
      t[0] === r
        ? (e = t[1])
        : ((e = (0, $.jsx)(`span`, {
            className: `text-warning`,
            children: (0, $.jsx)(u, {
              ...X.connectionControlUnavailableDescription,
              values: { deviceName: r },
            }),
          })),
          (t[0] = r),
          (t[1] = e)),
      e
    );
  }
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, $.jsx)(`span`, {
          className: `text-danger`,
          children:
            i == null
              ? (0, $.jsx)(u, { ...X.connectionProblemDescription, values: { deviceName: r } })
              : (0, $.jsx)(u, { ...Ni[i].description, values: { deviceName: r } }),
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function _i(e) {
  let t = (0, Oi.c)(34),
    { keycap: n, voiceButtonMode: r } = e;
  switch (n.id) {
    case `FAST`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.fast`,
              defaultMessage: `Cycle speed`,
              description: `Codex Micro action label for the FAST keycap, which cycles through available Standard, Fast, and Ultrafast speeds`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `APPR`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.approve`,
              defaultMessage: `Approve`,
              description: `Codex Micro action label for the APPR keycap`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `REJ`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.reject`,
              defaultMessage: `Reject`,
              description: `Codex Micro action label for the REJ keycap`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `SPLIT`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.split`,
              defaultMessage: `Fork chat`,
              description: `Codex Micro action label for the SPLIT keycap that forks the current chat`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `MIC`:
    case `MIC1`: {
      let e;
      return (
        t[4] === r
          ? (e = t[5])
          : ((e =
              r === `realtime`
                ? (0, $.jsx)(u, { ...X.microphoneKeyStartVoiceChat })
                : (0, $.jsx)(u, { ...X.microphoneKeyPushToTalk })),
            (t[4] = r),
            (t[5] = e)),
        e
      );
    }
    case `CODEX`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.codex`,
              defaultMessage: `Send message`,
              description: `Codex Micro action label for the CODEX keycap`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `BUG`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.bug`,
              defaultMessage: `Open feedback`,
              description: `Codex Micro action label for the BUG keycap`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `OAI`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.oai`,
              defaultMessage: `Open OpenAI docs`,
              description: `Codex Micro action label for the OAI keycap`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case `TERM`: {
      let e;
      return (
        t[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.terminal`,
              defaultMessage: `Toggle terminal`,
              description: `Codex Micro action label for the TERM keycap`,
            })),
            (t[9] = e))
          : (e = t[9]),
        e
      );
    }
    case `DWN`: {
      let e;
      return (
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.download`,
              defaultMessage: `Copy chat as Markdown`,
              description: `Codex Micro action label for the DWN keycap`,
            })),
            (t[10] = e))
          : (e = t[10]),
        e
      );
    }
    case `DEL`: {
      let e;
      return (
        t[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.delete`,
              defaultMessage: `Archive chat`,
              description: `Codex Micro action label for the DEL keycap`,
            })),
            (t[11] = e))
          : (e = t[11]),
        e
      );
    }
    case `NEW`: {
      let e;
      return (
        t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.new`,
              defaultMessage: `New chat`,
              description: `Codex Micro action label for the NEW keycap`,
            })),
            (t[12] = e))
          : (e = t[12]),
        e
      );
    }
    case `NAV`: {
      let e;
      return (
        t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.navigation`,
              defaultMessage: `Open browser tab`,
              description: `Codex Micro action label for the NAV keycap`,
            })),
            (t[13] = e))
          : (e = t[13]),
        e
      );
    }
    case `MAGIC`: {
      let e;
      return (
        t[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.pinThread`,
              defaultMessage: `Pin or unpin chat`,
              description: `Codex Micro action label for the MAGIC keycap`,
            })),
            (t[14] = e))
          : (e = t[14]),
        e
      );
    }
    case `DIFF`: {
      let e;
      return (
        t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.review`,
              defaultMessage: `Toggle Changes`,
              description: `Codex Micro action label for the DIFF keycap, which toggles the Changes tab showing local diffs`,
            })),
            (t[15] = e))
          : (e = t[15]),
        e
      );
    }
    case `BRCH`: {
      let e;
      return (
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.draftPullRequest`,
              defaultMessage: `Create draft PR`,
              description: `Codex Micro action label for the draft pull request keycap`,
            })),
            (t[16] = e))
          : (e = t[16]),
        e
      );
    }
    case `BRANCH`: {
      let e;
      return (
        t[17] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.branch`,
              defaultMessage: `Create branch`,
              description: `Codex Micro action label for the branch keycap`,
            })),
            (t[17] = e))
          : (e = t[17]),
        e
      );
    }
    case `MRG`: {
      let e;
      return (
        t[18] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.mergePullRequest`,
              defaultMessage: `Merge PR`,
              description: `Codex Micro action label for the MRG keycap`,
            })),
            (t[18] = e))
          : (e = t[18]),
        e
      );
    }
    case `GIT`: {
      let e;
      return (
        t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.git`,
              defaultMessage: `Commit or push`,
              description: `Codex Micro action label for the GIT keycap`,
            })),
            (t[19] = e))
          : (e = t[19]),
        e
      );
    }
    case `PR`: {
      let e;
      return (
        t[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.pullRequest`,
              defaultMessage: `Create PR`,
              description: `Codex Micro action label for the PR keycap`,
            })),
            (t[20] = e))
          : (e = t[20]),
        e
      );
    }
    case `PLAY`: {
      let e;
      return (
        t[21] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.runAction`,
              defaultMessage: `Run primary action`,
              description: `Codex Micro action label for the PLAY keycap`,
            })),
            (t[21] = e))
          : (e = t[21]),
        e
      );
    }
    case `SETUP`:
    case `LAB`: {
      let e;
      return (
        t[22] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.settings`,
              defaultMessage: `Open Settings`,
              description: `Codex Micro action label for settings keycaps`,
            })),
            (t[22] = e))
          : (e = t[22]),
        e
      );
    }
    case `PARTY`: {
      let e;
      return (
        t[23] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.sideChat`,
              defaultMessage: `Open side chat`,
              description: `Codex Micro action label for the PARTY keycap`,
            })),
            (t[23] = e))
          : (e = t[23]),
        e
      );
    }
    case `FOLD`: {
      let e;
      return (
        t[24] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.folder`,
              defaultMessage: `Open folder`,
              description: `Codex Micro action label for the FOLD keycap`,
            })),
            (t[24] = e))
          : (e = t[24]),
        e
      );
    }
    case `UPL`: {
      let e;
      return (
        t[25] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.attachFiles`,
              defaultMessage: `Attach files and folders`,
              description: `Codex Micro action label for the UPL keycap`,
            })),
            (t[25] = e))
          : (e = t[25]),
        e
      );
    }
    case `APPS`: {
      let e;
      return (
        t[26] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.apps`,
              defaultMessage: `Open plugins`,
              description: `Codex Micro action label for the APPS keycap`,
            })),
            (t[26] = e))
          : (e = t[26]),
        e
      );
    }
    case `YEET`: {
      let e;
      return (
        t[27] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.yeet`,
              defaultMessage: `Write :yeet: in the composer`,
              description: `Codex Micro action label for the YEET keycap`,
            })),
            (t[27] = e))
          : (e = t[27]),
        e
      );
    }
    case `YOLO`: {
      let e;
      return (
        t[28] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.yolo`,
              defaultMessage: `Write :yolo: in the composer`,
              description: `Codex Micro action label for the YOLO keycap`,
            })),
            (t[28] = e))
          : (e = t[28]),
        e
      );
    }
    case `EMPT1`:
    case `EMPT2`:
    case `EMPT3`:
    case `EMPT4`:
    case `EMPT5`: {
      let e;
      return (
        t[29] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.custom`,
              defaultMessage: `Assign any shortcut`,
              description: `Codex Micro action label for empty keycaps`,
            })),
            (t[29] = e))
          : (e = t[29]),
        e
      );
    }
    case `PAINT`: {
      let e;
      return (
        t[30] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.addPhotos`,
              defaultMessage: `Add photos`,
              description: `Codex Micro action label for the PAINT keycap`,
            })),
            (t[30] = e))
          : (e = t[30]),
        e
      );
    }
    case `TIME`: {
      let e;
      return (
        t[31] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.automations`,
              defaultMessage: `Open Scheduled`,
              description: `Codex Micro action label for the TIME keycap`,
            })),
            (t[31] = e))
          : (e = t[31]),
        e
      );
    }
    case `MIND+`: {
      let e;
      return (
        t[32] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.increaseReasoningEffort`,
              defaultMessage: `Increase reasoning effort`,
              description: `Codex Micro action label for the filled brain keycap`,
            })),
            (t[32] = e))
          : (e = t[32]),
        e
      );
    }
    case `MIND-`: {
      let e;
      return (
        t[33] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.decreaseReasoningEffort`,
              defaultMessage: `Decrease reasoning effort`,
              description: `Codex Micro action label for the outline brain keycap`,
            })),
            (t[33] = e))
          : (e = t[33]),
        e
      );
    }
  }
}
function vi(e) {
  let t = (0, Oi.c)(37),
    { keycap: n, skills: r, slot: i, voiceButtonMode: a } = e,
    o = T(),
    s = i.action?.type === `skill` ? i.action : null,
    c = i.action?.type === `composer-text` ? i.action : null,
    l = i.action?.type === `command` ? i.action.commandId : i.commandId,
    d,
    f,
    p,
    m;
  if (t[0] !== l || t[1] !== c || t[2] !== s || t[3] !== o || t[4] !== n || t[5] !== r || t[6] !== a) {
    m = l == null ? null : un(l);
    let e = m;
    (e == null && n.action.type === `command` && (e = un(n.action.command)),
      (p = e == null ? null : An(e, o).description));
    bb0: switch (n.action.type) {
      case `command`:
        d = null;
        break bb0;
      case `composer-text`: {
        let e;
        (t[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.composerText.description`,
              defaultMessage: `Available when a composer is active`,
              description: `Availability description for Codex Micro composer text keycaps`,
            })),
            (t[11] = e))
          : (e = t[11]),
          (d = e));
        break bb0;
      }
      case `custom-shortcut`: {
        let e;
        (t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.custom.description`,
              defaultMessage: `Choose a shortcut to assign`,
              description: `Description for an unassigned Codex Micro custom keycap`,
            })),
            (t[12] = e))
          : (e = t[12]),
          (d = e));
        break bb0;
      }
      case `external-url`: {
        let e;
        (t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(u, {
              id: `settings.codexMicro.keycaps.externalUrl.description`,
              defaultMessage: `Opens in your preferred browser`,
              description: `Description for a Codex Micro external URL keycap`,
            })),
            (t[13] = e))
          : (e = t[13]),
          (d = e));
        break bb0;
      }
      case `named`: {
        let e;
        (t[14] === a
          ? (e = t[15])
          : ((e =
              a === `realtime`
                ? (0, $.jsx)(u, { ...X.microphoneKeyVoiceChatDescription })
                : (0, $.jsx)(u, { ...X.microphoneKeyPushToTalkDescription })),
            (t[14] = a),
            (t[15] = e)),
          (d = e));
      }
    }
    if (c != null) {
      let e;
      (t[16] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(u, {
            id: `settings.codexMicro.keycaps.customComposerText`,
            defaultMessage: `Insert text`,
            description: `Codex Micro action label for a keycap assigned custom composer text`,
          })),
          (t[16] = e))
        : (e = t[16]),
        (f = e));
    } else if (s != null) {
      let e;
      (t[17] !== s || t[18] !== o || t[19] !== r
        ? ((e = Mn(s, r, o)), (t[17] = s), (t[18] = o), (t[19] = r), (t[20] = e))
        : (e = t[20]),
        (f = e));
    } else if (m != null) f = On(m, o);
    else {
      let e;
      (t[21] !== n || t[22] !== a
        ? ((e = (0, $.jsx)(_i, { keycap: n, voiceButtonMode: a })), (t[21] = n), (t[22] = a), (t[23] = e))
        : (e = t[23]),
        (f = e));
    }
    ((t[0] = l),
      (t[1] = c),
      (t[2] = s),
      (t[3] = o),
      (t[4] = n),
      (t[5] = r),
      (t[6] = a),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m));
  } else ((d = t[7]), (f = t[8]), (p = t[9]), (m = t[10]));
  let h;
  if (c != null) {
    let e;
    (t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(u, {
          id: `settings.codexMicro.keycaps.customComposerText.description`,
          defaultMessage: `Adds custom text to the active prompt without sending it`,
          description: `Description for a Codex Micro keycap assigned custom composer text`,
        })),
        (t[24] = e))
      : (e = t[24]),
      (h = e));
  } else h = s == null ? (p ?? (m == null ? d : null)) : null;
  let g;
  t[25] === n ? (g = t[26]) : ((g = Di(n)), (t[25] = n), (t[26] = g));
  let _;
  t[27] === g
    ? (_ = t[28])
    : ((_ = (0, $.jsx)(`span`, { className: `font-mono text-xs font-semibold`, children: g })),
      (t[27] = g),
      (t[28] = _));
  let v;
  t[29] === f
    ? (v = t[30])
    : ((v = (0, $.jsx)(`span`, { className: `text-xs`, children: f })), (t[29] = f), (t[30] = v));
  let y;
  t[31] === h
    ? (y = t[32])
    : ((y = (0, $.jsx)(`span`, { className: `text-xs opacity-65`, children: h })), (t[31] = h), (t[32] = y));
  let b;
  return (
    t[33] !== _ || t[34] !== v || t[35] !== y
      ? ((b = (0, $.jsxs)(`div`, { className: `flex min-w-32 flex-col gap-0.5`, children: [_, v, y] })),
        (t[33] = _),
        (t[34] = v),
        (t[35] = y),
        (t[36] = b))
      : (b = t[36]),
    b
  );
}
function yi(e) {
  let t = (0, Oi.c)(112),
    { commands: r, layout: i, skills: a, slotId: o, voiceButtonMode: s, onOpenChange: c, onSave: l } = e,
    d = T(),
    f = i.slots[o],
    [p, m] = (0, ki.useState)(f.keycapId),
    h;
  t[0] !== f.action || t[1] !== f.commandId
    ? ((h = f.action ?? (f.commandId == null ? void 0 : { type: `command`, commandId: f.commandId })),
      (t[0] = f.action),
      (t[1] = f.commandId),
      (t[2] = h))
    : (h = t[2]);
  let [g, _] = (0, ki.useState)(h),
    [v, y] = (0, ki.useState)(``),
    [b, x] = (0, ki.useState)(null),
    S;
  t[3] === p ? (S = t[4]) : ((S = yn(p)), (t[3] = p), (t[4] = S));
  let C = S,
    w,
    E,
    D,
    O,
    k,
    A,
    j,
    N,
    P,
    F,
    ne,
    L,
    R,
    z,
    B,
    V;
  if (
    t[5] !== d ||
    t[6] !== i ||
    t[7] !== c ||
    t[8] !== l ||
    t[9] !== v ||
    t[10] !== g ||
    t[11] !== C ||
    t[12] !== a ||
    t[13] !== o ||
    t[14] !== s
  ) {
    let e = g?.type === `command` ? un(g.commandId) : null,
      n;
    (t[31] !== d || t[32] !== C.action.type
      ? ((n =
          C.action.type === `custom-shortcut`
            ? d.formatMessage({
                id: `settings.codexMicro.editor.customShortcut.none`,
                defaultMessage: `Unassigned`,
                description: `Dropdown option that clears a Codex Micro keycap command`,
              })
            : d.formatMessage({
                id: `settings.codexMicro.editor.customShortcut.useDefault`,
                defaultMessage: `Use keycap default`,
                description: `Dropdown option that restores a Codex Micro keycap's predefined action`,
              })),
        (t[31] = d),
        (t[32] = C.action.type),
        (t[33] = n))
      : (n = t[33]),
      (O = n));
    let r = _n(o),
      f;
    t[34] === v ? (f = t[35]) : ((f = (e) => Ei(e, v)), (t[34] = v), (t[35] = f));
    let p = r.filter(f),
      h = li(i);
    if (g?.type === `composer-text`) {
      let e;
      (t[36] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(u, {
            id: `settings.codexMicro.editor.action.insertText.description`,
            defaultMessage: `Add text to the active prompt without sending it`,
            description: `Description of the custom composer text action for a Codex Micro keycap`,
          })),
          (t[36] = e))
        : (e = t[36]),
        (k = e));
    } else if (g?.type === `skill`) {
      let e;
      (t[37] !== d || t[38] !== g || t[39] !== a
        ? ((e = Mn(g, a, d)), (t[37] = d), (t[38] = g), (t[39] = a), (t[40] = e))
        : (e = t[40]),
        (k = e));
    } else if (e != null) k = On(e, d);
    else if (C.action.type === `custom-shortcut`) {
      let e;
      (t[41] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(u, {
            id: `settings.codexMicro.editor.customShortcut.unassigned`,
            defaultMessage: `Unassigned`,
            description: `Label shown when a Codex Micro keycap has no command assigned`,
          })),
          (t[41] = e))
        : (e = t[41]),
        (k = e));
    } else {
      let e;
      (t[42] !== C || t[43] !== s
        ? ((e = (0, $.jsx)(u, {
            id: `settings.codexMicro.editor.customShortcut.defaultAction`,
            defaultMessage: `Keycap default: {action}`,
            description: `Description shown when a Codex Micro keycap uses its predefined action`,
            values: { action: (0, $.jsx)(_i, { keycap: C, voiceButtonMode: s }, `action`) },
          })),
          (t[42] = C),
          (t[43] = s),
          (t[44] = e))
        : (e = t[44]),
        (k = e));
    }
    ((D = ie),
      (j = !0),
      (N = `wide`),
      (P = c),
      (E = ce),
      (z = `form`),
      (B = `max-h-[calc(100vh-4rem)] min-h-0 gap-0 overflow-hidden`),
      t[45] !== l || t[46] !== g || t[47] !== e?.id || t[48] !== C.id
        ? ((V = (t) => {
            (t.preventDefault(),
              (g?.type !== `composer-text` || g.text.length !== 0) &&
                l({
                  keycapId: C.id,
                  commandId: e?.id,
                  action: g?.type === `skill` || g?.type === `composer-text` ? g : void 0,
                }));
          }),
          (t[45] = l),
          (t[46] = g),
          (t[47] = e?.id),
          (t[48] = C.id),
          (t[49] = V))
        : (V = t[49]));
    let b;
    (t[50] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((b = (0, $.jsx)(M, {
          children: (0, $.jsx)(u, {
            id: `settings.codexMicro.editor.title`,
            defaultMessage: `Edit keycap`,
            description: `Title for the Codex Micro keycap slot editor`,
          }),
        })),
        (t[50] = b))
      : (b = t[50]),
      t[51] === o
        ? (A = t[52])
        : ((A = (0, $.jsx)(re, {
            children: (0, $.jsx)(ee, {
              title: b,
              subtitle: (0, $.jsx)(te, {
                children: (0, $.jsx)(u, {
                  id: `settings.codexMicro.editor.subtitle`,
                  defaultMessage: `Choose what appears on {slotId}`,
                  description: `Subtitle for the Codex Micro keycap slot editor`,
                  values: { slotId: o },
                }),
              }),
            }),
          })),
          (t[51] = o),
          (t[52] = A)),
      (w = re),
      (L = `flex min-h-0 flex-1 flex-col gap-3`));
    let x;
    t[53] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((x = (0, $.jsx)(de, { className: `icon-sm shrink-0 text-tertiary` })), (t[53] = x))
      : (x = t[53]);
    let S;
    t[54] === d
      ? (S = t[55])
      : ((S = d.formatMessage({
          id: `settings.codexMicro.editor.searchLabel`,
          defaultMessage: `Search keycaps`,
          description: `Accessible label for searching Codex Micro keycaps in the keycap editor`,
        })),
        (t[54] = d),
        (t[55] = S));
    let T;
    t[56] === d
      ? (T = t[57])
      : ((T = d.formatMessage({
          id: `settings.codexMicro.editor.searchPlaceholder`,
          defaultMessage: `Search keycaps`,
          description: `Placeholder for searching Codex Micro keycaps in the keycap editor`,
        })),
        (t[56] = d),
        (t[57] = T));
    let H;
    (t[58] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((H = (e) => {
          y(e.currentTarget.value);
        }),
        (t[58] = H))
      : (H = t[58]),
      t[59] !== v || t[60] !== S || t[61] !== T
        ? ((R = (0, $.jsxs)(`div`, {
            className: `flex h-10 shrink-0 items-center gap-2 rounded-lg border border-primary-outline bg-background-primary-soft/75 px-3 text-sm text-default`,
            children: [
              x,
              (0, $.jsx)(`input`, {
                autoFocus: !0,
                className: `min-w-0 flex-1 bg-transparent outline-none placeholder:text-tertiary`,
                "aria-label": S,
                placeholder: T,
                value: v,
                onChange: H,
              }),
            ],
          })),
          (t[59] = v),
          (t[60] = S),
          (t[61] = T),
          (t[62] = R))
        : (R = t[62]),
      (F = `vertical-scroll-fade-mask min-h-0 flex-1 overflow-y-auto px-1 pt-1 pb-1 [--edge-fade-distance:1rem]`),
      (ne =
        p.length === 0
          ? (0, $.jsx)(`div`, {
              className: `flex min-h-28 items-center justify-center rounded-lg border border-default px-4 text-sm text-codex-description`,
              children: (0, $.jsx)(u, {
                id: `settings.codexMicro.editor.noKeycaps`,
                defaultMessage: `No matching keycaps`,
                description: `Empty state shown when keycap search returns no results`,
              }),
            })
          : (0, $.jsx)(`div`, {
              className: `grid grid-cols-[repeat(auto-fill,minmax(4.75rem,4.75rem))] justify-between gap-2`,
              children: p.map((e) => {
                let t = e.id === C.id,
                  n = h.find((t) => i.slots[t.slotId].keycapId === e.id);
                return (0, $.jsx)(
                  ye,
                  {
                    delayOpen: !0,
                    tooltipContent: (0, $.jsx)(vi, {
                      keycap: e,
                      skills: a,
                      slot: n == null ? { keycapId: e.id } : i.slots[n.slotId],
                      voiceButtonMode: s,
                    }),
                    children: (0, $.jsxs)(`button`, {
                      type: `button`,
                      "aria-pressed": t,
                      className: I(
                        `cursor-interaction relative flex aspect-square w-[4.75rem] flex-col items-center justify-center gap-1.5 rounded-[0.8rem] border border-white/[0.86] bg-[#f7f5f1] px-2 py-2 text-[#171717] shadow-[inset_0_0_0_1px_rgba(228,228,228,0.68),0_1px_2px_rgba(79,72,63,0.18)] outline-none focus-visible:ring-2 focus-visible:ring-ring dark:border-white/[0.14] dark:bg-[#202127] dark:text-default dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.32)]`,
                        t
                          ? `border-chart-blue/60 bg-chart-blue/10 text-info ring-1 ring-chart-blue/40 dark:border-chart-blue/80 dark:bg-chart-blue/20 dark:ring-chart-blue/60 dark:text-info`
                          : null,
                      ),
                      onClick: () => {
                        if (t) return;
                        m(e.id);
                        let r = n == null ? null : i.slots[n.slotId];
                        _(
                          r?.action ??
                            (r?.commandId == null ? void 0 : { type: `command`, commandId: r.commandId }),
                        );
                      },
                      children: [
                        (0, $.jsx)(Rn, { keycap: e, className: `size-4` }),
                        (0, $.jsx)(`span`, { className: `font-mono text-[11px]`, children: Di(e) }),
                      ],
                    }),
                  },
                  e.id,
                );
              }),
            })),
      (t[5] = d),
      (t[6] = i),
      (t[7] = c),
      (t[8] = l),
      (t[9] = v),
      (t[10] = g),
      (t[11] = C),
      (t[12] = a),
      (t[13] = o),
      (t[14] = s),
      (t[15] = w),
      (t[16] = E),
      (t[17] = D),
      (t[18] = O),
      (t[19] = k),
      (t[20] = A),
      (t[21] = j),
      (t[22] = N),
      (t[23] = P),
      (t[24] = F),
      (t[25] = ne),
      (t[26] = L),
      (t[27] = R),
      (t[28] = z),
      (t[29] = B),
      (t[30] = V));
  } else
    ((w = t[15]),
      (E = t[16]),
      (D = t[17]),
      (O = t[18]),
      (k = t[19]),
      (A = t[20]),
      (j = t[21]),
      (N = t[22]),
      (P = t[23]),
      (F = t[24]),
      (ne = t[25]),
      (L = t[26]),
      (R = t[27]),
      (z = t[28]),
      (B = t[29]),
      (V = t[30]));
  let H;
  t[63] !== F || t[64] !== ne
    ? ((H = (0, $.jsx)(`div`, { className: F, children: ne })), (t[63] = F), (t[64] = ne), (t[65] = H))
    : (H = t[65]);
  let U;
  t[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(u, {
        id: `settings.codexMicro.editor.action.label`,
        defaultMessage: `Assigned action`,
        description: `Label for choosing the action assigned to a Codex Micro keycap`,
      })),
      (t[66] = U))
    : (U = t[66]);
  let W;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (e) => {
        x(e?.closest(`.codex-dialog`) ?? null);
      }),
      (t[67] = W))
    : (W = t[67]);
  let G;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, $.jsx)(nt, {
        children: (0, $.jsx)(u, {
          id: `settings.codexMicro.editor.customShortcut.choose`,
          defaultMessage: `Choose`,
          description: `Button label for choosing the action assigned to a Codex Micro keycap`,
        }),
      })),
      (t[68] = G))
    : (G = t[68]);
  let ae;
  t[69] !== r || t[70] !== b || t[71] !== O || t[72] !== g || t[73] !== a
    ? ((ae = (0, $.jsx)(`div`, {
        ref: W,
        children: (0, $.jsx)(mr, {
          commands: r,
          noActionLabel: O,
          portalContainer: b,
          selectedAction: g,
          skills: a,
          triggerButton: G,
          onActionSelect: _,
        }),
      })),
      (t[69] = r),
      (t[70] = b),
      (t[71] = O),
      (t[72] = g),
      (t[73] = a),
      (t[74] = ae))
    : (ae = t[74]);
  let oe;
  t[75] !== k || t[76] !== ae
    ? ((oe = (0, $.jsx)(Ce, { label: U, description: k, control: ae })),
      (t[75] = k),
      (t[76] = ae),
      (t[77] = oe))
    : (oe = t[77]);
  let se;
  t[78] !== d || t[79] !== g
    ? ((se =
        g?.type === `composer-text`
          ? (0, $.jsx)(Ce, {
              className: `max-sm:flex-col max-sm:items-stretch`,
              label: (0, $.jsx)(u, {
                id: `settings.codexMicro.editor.composerText.label`,
                defaultMessage: `Text to insert`,
                description: `Label for custom text assigned to a Codex Micro keycap`,
              }),
              description: (0, $.jsx)(u, {
                id: `settings.codexMicro.editor.composerText.description`,
                defaultMessage: `Stored in your local Codex settings`,
                description: `Explanation of where custom text assigned to a Codex Micro keycap is stored`,
              }),
              control: (e) =>
                (0, $.jsx)(`div`, {
                  className: `w-72 max-w-full max-sm:w-full`,
                  children: (0, $.jsx)(We, {
                    ...e,
                    autoFocus: !0,
                    required: !0,
                    placeholder: d.formatMessage({
                      id: `settings.codexMicro.editor.composerText.placeholder`,
                      defaultMessage: `Enter text`,
                      description: `Placeholder for custom text assigned to a Codex Micro keycap`,
                    }),
                    rows: 3,
                    value: g.text,
                    variant: `settings`,
                    onChange: (e) => {
                      _({ type: `composer-text`, text: e.currentTarget.value });
                    },
                  }),
                }),
            })
          : null),
      (t[78] = d),
      (t[79] = g),
      (t[80] = se))
    : (se = t[80]);
  let K;
  t[81] !== oe || t[82] !== se
    ? ((K = (0, $.jsxs)(ue, { className: `shrink-0`, children: [oe, se] })),
      (t[81] = oe),
      (t[82] = se),
      (t[83] = K))
    : (K = t[83]);
  let le;
  t[84] !== w || t[85] !== H || t[86] !== K || t[87] !== L || t[88] !== R
    ? ((le = (0, $.jsxs)(w, { className: L, children: [R, H, K] })),
      (t[84] = w),
      (t[85] = H),
      (t[86] = K),
      (t[87] = L),
      (t[88] = R),
      (t[89] = le))
    : (le = t[89]);
  let fe;
  t[90] === c
    ? (fe = t[91])
    : ((fe = () => {
        c(!1);
      }),
      (t[90] = c),
      (t[91] = fe));
  let pe;
  t[92] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, $.jsx)(u, {
        id: `settings.codexMicro.editor.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the Codex Micro keycap slot editor`,
      })),
      (t[92] = pe))
    : (pe = t[92]);
  let me;
  t[93] === fe
    ? (me = t[94])
    : ((me = (0, $.jsx)(n, { type: `button`, color: `ghost`, onClick: fe, children: pe })),
      (t[93] = fe),
      (t[94] = me));
  let he;
  t[95] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, $.jsx)(n, {
        color: `primary`,
        type: `submit`,
        children: (0, $.jsx)(u, {
          id: `settings.codexMicro.editor.save`,
          defaultMessage: `Save`,
          description: `Save button label for the Codex Micro keycap slot editor`,
        }),
      })),
      (t[95] = he))
    : (he = t[95]);
  let ge;
  t[96] === me
    ? (ge = t[97])
    : ((ge = (0, $.jsx)(re, { children: (0, $.jsxs)(ve, { children: [me, he] }) })),
      (t[96] = me),
      (t[97] = ge));
  let _e;
  t[98] !== E || t[99] !== A || t[100] !== le || t[101] !== ge || t[102] !== z || t[103] !== B || t[104] !== V
    ? ((_e = (0, $.jsxs)(E, { as: z, className: B, onSubmit: V, children: [A, le, ge] })),
      (t[98] = E),
      (t[99] = A),
      (t[100] = le),
      (t[101] = ge),
      (t[102] = z),
      (t[103] = B),
      (t[104] = V),
      (t[105] = _e))
    : (_e = t[105]);
  let q;
  return (
    t[106] !== D || t[107] !== j || t[108] !== N || t[109] !== P || t[110] !== _e
      ? ((q = (0, $.jsx)(D, { open: j, size: N, onOpenChange: P, children: _e })),
        (t[106] = D),
        (t[107] = j),
        (t[108] = N),
        (t[109] = P),
        (t[110] = _e),
        (t[111] = q))
      : (q = t[111]),
    q
  );
}
function bi(e) {
  let t = (0, Oi.c)(84),
    {
      agentSlots: n,
      commands: r,
      customAgentAssignments: i,
      deviceName: a,
      isEncoderEditorOpen: o,
      layout: s,
      previewState: c,
      skills: l,
      voiceButtonMode: u,
      onEditAgentKey: d,
      onEditSlot: f,
      onEncoderEditorOpenChange: p,
      onSetAnalogAction: m,
      onSetEncoderAction: h,
      onSelectAnalogDirection: g,
      onSetAnalogEditorOpen: _,
    } = e,
    v = T(),
    [y, b, x, S, C, w] = Pi,
    E;
  t[0] === c.pressedKeys
    ? (E = t[1])
    : ((E = c.pressedKeys.includes(`ENC_PRESS`)), (t[0] = c.pressedKeys), (t[1] = E));
  let D = E,
    O;
  t[2] !== r ||
  t[3] !== a ||
  t[4] !== o ||
  t[5] !== D ||
  t[6] !== s.encoder ||
  t[7] !== s.encoderMode ||
  t[8] !== p ||
  t[9] !== h ||
  t[10] !== c.knobPulse ||
  t[11] !== l
    ? ((O =
        s.encoderMode === `custom`
          ? (0, $.jsx)(br, {
              commands: r,
              deviceName: a,
              isPressed: D,
              mapping: s.encoder,
              open: o,
              pulse: c.knobPulse,
              skills: l,
              onActionChange: h,
              onOpenChange: p,
            })
          : (0, $.jsx)(Ci, { deviceName: a, isPressed: D, mode: s.encoderMode, pulse: c.knobPulse })),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = D),
      (t[6] = s.encoder),
      (t[7] = s.encoderMode),
      (t[8] = p),
      (t[9] = h),
      (t[10] = c.knobPulse),
      (t[11] = l),
      (t[12] = O))
    : (O = t[12]);
  let k;
  t[13] !== n ||
  t[14] !== r ||
  t[15] !== i ||
  t[16] !== v ||
  t[17] !== s.analogStick ||
  t[18] !== d ||
  t[19] !== g ||
  t[20] !== m ||
  t[21] !== _ ||
  t[22] !== c.joystick ||
  t[23] !== c.pressedKeys ||
  t[24] !== c.selectedAnalogDirection ||
  t[25] !== l
    ? ((k = le.map((e, t) =>
        (0, $.jsxs)(
          ki.Fragment,
          {
            children: [
              t === 2
                ? (0, $.jsx)(ar, {
                    commands: r,
                    joystick: c.joystick,
                    mapping: s.analogStick,
                    selectedDirection: c.selectedAnalogDirection,
                    skills: l,
                    onActionChange: m,
                    onDirectionSelect: g,
                    onEditorOpenChange: _,
                  })
                : null,
              (0, $.jsx)(Bn, {
                surface: `opaque`,
                assignmentTitle: Si(i?.[e], l, v),
                keycap: xi(i?.[e]),
                position: t + 1,
                isPressed: c.pressedKeys.includes(e),
                slot: n[t],
                onClick: d == null ? void 0 : () => d(e),
              }),
            ],
          },
          e,
        ),
      )),
      (t[13] = n),
      (t[14] = r),
      (t[15] = i),
      (t[16] = v),
      (t[17] = s.analogStick),
      (t[18] = d),
      (t[19] = g),
      (t[20] = m),
      (t[21] = _),
      (t[22] = c.joystick),
      (t[23] = c.pressedKeys),
      (t[24] = c.selectedAnalogDirection),
      (t[25] = l),
      (t[26] = k))
    : (k = t[26]);
  let A = s.slots[y.slotId],
    j = y.slotId,
    M;
  t[27] === c.pressedKeys
    ? (M = t[28])
    : ((M = Ti(c.pressedKeys, y.keys)), (t[27] = c.pressedKeys), (t[28] = M));
  let N;
  t[29] !== f || t[30] !== l || t[31] !== A || t[32] !== M || t[33] !== u
    ? ((N = (0, $.jsx)(wi, {
        slot: A,
        slotId: j,
        isPressed: M,
        skills: l,
        voiceButtonMode: u,
        onEditSlot: f,
      })),
      (t[29] = f),
      (t[30] = l),
      (t[31] = A),
      (t[32] = M),
      (t[33] = u),
      (t[34] = N))
    : (N = t[34]);
  let ee = s.slots[b.slotId],
    P = b.slotId,
    F;
  t[35] === c.pressedKeys
    ? (F = t[36])
    : ((F = Ti(c.pressedKeys, b.keys)), (t[35] = c.pressedKeys), (t[36] = F));
  let I;
  t[37] !== f || t[38] !== l || t[39] !== F || t[40] !== ee || t[41] !== u
    ? ((I = (0, $.jsx)(wi, {
        slot: ee,
        slotId: P,
        isPressed: F,
        skills: l,
        voiceButtonMode: u,
        onEditSlot: f,
      })),
      (t[37] = f),
      (t[38] = l),
      (t[39] = F),
      (t[40] = ee),
      (t[41] = u),
      (t[42] = I))
    : (I = t[42]);
  let te = s.slots[x.slotId],
    ne = x.slotId,
    L;
  t[43] === c.pressedKeys
    ? (L = t[44])
    : ((L = Ti(c.pressedKeys, x.keys)), (t[43] = c.pressedKeys), (t[44] = L));
  let R;
  t[45] !== f || t[46] !== l || t[47] !== te || t[48] !== L || t[49] !== u
    ? ((R = (0, $.jsx)(wi, {
        slot: te,
        slotId: ne,
        isPressed: L,
        skills: l,
        voiceButtonMode: u,
        onEditSlot: f,
      })),
      (t[45] = f),
      (t[46] = l),
      (t[47] = te),
      (t[48] = L),
      (t[49] = u),
      (t[50] = R))
    : (R = t[50]);
  let z = s.slots[S.slotId],
    B = S.slotId,
    V;
  t[51] === c.pressedKeys
    ? (V = t[52])
    : ((V = Ti(c.pressedKeys, S.keys)), (t[51] = c.pressedKeys), (t[52] = V));
  let H;
  t[53] !== f || t[54] !== l || t[55] !== z || t[56] !== V || t[57] !== u
    ? ((H = (0, $.jsx)(wi, {
        slot: z,
        slotId: B,
        isPressed: V,
        skills: l,
        voiceButtonMode: u,
        onEditSlot: f,
      })),
      (t[53] = f),
      (t[54] = l),
      (t[55] = z),
      (t[56] = V),
      (t[57] = u),
      (t[58] = H))
    : (H = t[58]);
  let U;
  t[59] === Symbol.for(`react.memo_cache_sentinel`) ? ((U = (0, $.jsx)(Hn, {})), (t[59] = U)) : (U = t[59]);
  let W;
  t[60] !== s.separateMicrophoneKeys ||
  t[61] !== s.slots ||
  t[62] !== f ||
  t[63] !== c.pressedKeys ||
  t[64] !== l ||
  t[65] !== u
    ? ((W = s.separateMicrophoneKeys
        ? Fi.map((e) =>
            (0, $.jsx)(
              wi,
              {
                slot: s.slots[e.slotId],
                slotId: e.slotId,
                isPressed: Ti(c.pressedKeys, e.keys),
                skills: l,
                voiceButtonMode: u,
                onEditSlot: f,
              },
              e.slotId,
            ),
          )
        : (0, $.jsx)(wi, {
            slot: s.slots[C.slotId],
            slotId: C.slotId,
            className: `col-span-2`,
            isPressed: Ti(c.pressedKeys, C.keys),
            skills: l,
            voiceButtonMode: u,
            onEditSlot: f,
          })),
      (t[60] = s.separateMicrophoneKeys),
      (t[61] = s.slots),
      (t[62] = f),
      (t[63] = c.pressedKeys),
      (t[64] = l),
      (t[65] = u),
      (t[66] = W))
    : (W = t[66]);
  let re = s.slots[w.slotId],
    G = w.slotId,
    ie;
  t[67] === c.pressedKeys
    ? (ie = t[68])
    : ((ie = Ti(c.pressedKeys, w.keys)), (t[67] = c.pressedKeys), (t[68] = ie));
  let ae;
  t[69] !== f || t[70] !== l || t[71] !== re || t[72] !== ie || t[73] !== u
    ? ((ae = (0, $.jsx)(wi, {
        slot: re,
        slotId: G,
        isPressed: ie,
        skills: l,
        voiceButtonMode: u,
        onEditSlot: f,
      })),
      (t[69] = f),
      (t[70] = l),
      (t[71] = re),
      (t[72] = ie),
      (t[73] = u),
      (t[74] = ae))
    : (ae = t[74]);
  let oe;
  return (
    t[75] !== I ||
    t[76] !== R ||
    t[77] !== H ||
    t[78] !== O ||
    t[79] !== W ||
    t[80] !== ae ||
    t[81] !== k ||
    t[82] !== N
      ? ((oe = (0, $.jsx)(`div`, {
          className: `flex justify-center px-4 py-5`,
          children: (0, $.jsxs)(Ln, { children: [O, k, N, I, R, H, U, W, ae] }),
        })),
        (t[75] = I),
        (t[76] = R),
        (t[77] = H),
        (t[78] = O),
        (t[79] = W),
        (t[80] = ae),
        (t[81] = k),
        (t[82] = N),
        (t[83] = oe))
      : (oe = t[83]),
    oe
  );
}
function xi(e) {
  return e != null && `type` in e && e.type === `keycap` ? yn(e.keycapId) : void 0;
}
function Si(e, t, n) {
  if (!(e == null || `threadKey` in e))
    return e.type === `keycap`
      ? n.formatMessage(
          {
            id: `settings.codexMicro.agentKeyPreview.keycap`,
            defaultMessage: `{keycapId} keycap`,
            description: `Title for a keycap assigned to a Codex Micro agent key`,
          },
          { keycapId: e.keycapId },
        )
      : Mn(e, t, n);
}
function Ci(e) {
  let t = (0, Oi.c)(33),
    { deviceName: n, isPressed: r, mode: i, pulse: a } = e,
    o = T(),
    s = Mi[i],
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(`span`, {
        className: `text-xs font-semibold`,
        children: (0, $.jsx)(u, {
          id: `settings.codexMicro.keyboardLayout.knobTooltip.title`,
          defaultMessage: `Knob controls`,
          description: `Title for the tooltip describing Codex Micro encoder knob controls`,
        }),
      })),
      (t[0] = c))
    : (c = t[0]);
  let l;
  t[1] === s.description
    ? (l = t[2])
    : ((l = (0, $.jsx)(`span`, {
        className: `text-xs opacity-65`,
        children: (0, $.jsx)(u, { ...s.description }),
      })),
      (t[1] = s.description),
      (t[2] = l));
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(`dt`, {
        className: `font-medium whitespace-nowrap`,
        children: (0, $.jsx)(u, {
          id: `settings.codexMicro.keyboardLayout.knobTooltip.turnRight`,
          defaultMessage: `Turn right`,
          description: `Label for turning the Codex Micro encoder knob clockwise`,
        }),
      })),
      (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] === s.turnRightAction
    ? (f = t[5])
    : ((f = (0, $.jsx)(`dd`, { className: `opacity-65`, children: (0, $.jsx)(u, { ...s.turnRightAction }) })),
      (t[4] = s.turnRightAction),
      (t[5] = f));
  let p;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(`dt`, {
        className: `font-medium whitespace-nowrap`,
        children: (0, $.jsx)(u, {
          id: `settings.codexMicro.keyboardLayout.knobTooltip.turnLeft`,
          defaultMessage: `Turn left`,
          description: `Label for turning the Codex Micro encoder knob counterclockwise`,
        }),
      })),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] === s.turnLeftAction
    ? (m = t[8])
    : ((m = (0, $.jsx)(`dd`, { className: `opacity-65`, children: (0, $.jsx)(u, { ...s.turnLeftAction }) })),
      (t[7] = s.turnLeftAction),
      (t[8] = m));
  let h;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(`dt`, {
        className: `font-medium whitespace-nowrap`,
        children: (0, $.jsx)(u, {
          id: `settings.codexMicro.keyboardLayout.knobTooltip.click`,
          defaultMessage: `Click`,
          description: `Label for clicking the Codex Micro encoder knob once`,
        }),
      })),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] === s.clickAction
    ? (g = t[11])
    : ((g = (0, $.jsx)(`dd`, { className: `opacity-65`, children: (0, $.jsx)(u, { ...s.clickAction }) })),
      (t[10] = s.clickAction),
      (t[11] = g));
  let _;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, $.jsx)(`dt`, {
        className: `font-medium whitespace-nowrap`,
        children: (0, $.jsx)(u, {
          id: `settings.codexMicro.keyboardLayout.knobTooltip.pressAndHold`,
          defaultMessage: `Press and hold`,
          description: `Label for pressing and holding the Codex Micro encoder knob`,
        }),
      })),
      (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] === n
    ? (v = t[14])
    : ((v = (0, $.jsx)(`dd`, {
        className: `opacity-65`,
        children: (0, $.jsx)(u, {
          id: `settings.codexMicro.keyboardLayout.knobTooltip.pressAndHoldActionByDevice`,
          defaultMessage: `Open {deviceName} settings`,
          description: `Action performed when pressing and holding the Codex Micro or Creator Micro encoder knob`,
          values: { deviceName: n },
        }),
      })),
      (t[13] = n),
      (t[14] = v));
  let y;
  t[15] !== v || t[16] !== f || t[17] !== m || t[18] !== g
    ? ((y = (0, $.jsxs)(`dl`, {
        className: `grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-xs leading-4`,
        children: [d, f, p, m, h, g, _, v],
      })),
      (t[15] = v),
      (t[16] = f),
      (t[17] = m),
      (t[18] = g),
      (t[19] = y))
    : (y = t[19]);
  let b;
  t[20] !== y || t[21] !== l
    ? ((b = (0, $.jsxs)(`div`, { className: `flex w-64 flex-col gap-2.5 p-3`, children: [c, l, y] })),
      (t[20] = y),
      (t[21] = l),
      (t[22] = b))
    : (b = t[22]);
  let x;
  t[23] !== n || t[24] !== o
    ? ((x = o.formatMessage(
        {
          id: `settings.codexMicro.keyboardLayout.knobByDevice`,
          defaultMessage: `{deviceName} knob`,
          description: `Accessible label for the encoder knob in the Codex Micro or Creator Micro keyboard preview`,
        },
        { deviceName: n },
      )),
      (t[23] = n),
      (t[24] = o),
      (t[25] = x))
    : (x = t[25]);
  let S;
  t[26] !== r || t[27] !== a || t[28] !== x
    ? ((S = (0, $.jsx)(zn, { ariaLabel: x, isPressed: r, pulse: a })),
      (t[26] = r),
      (t[27] = a),
      (t[28] = x),
      (t[29] = S))
    : (S = t[29]);
  let C;
  return (
    t[30] !== b || t[31] !== S
      ? ((C = (0, $.jsx)(ye, {
          align: `start`,
          delayOpen: !0,
          disablePadding: !0,
          tooltipMaxWidth: `18rem`,
          tooltipContent: b,
          children: S,
        })),
        (t[30] = b),
        (t[31] = S),
        (t[32] = C))
      : (C = t[32]),
    C
  );
}
function wi(e) {
  let t = (0, Oi.c)(56),
    { slot: n, slotId: r, className: i, isPressed: a, skills: o, voiceButtonMode: s, onEditSlot: c } = e,
    l;
  t[0] === n.keycapId ? (l = t[1]) : ((l = yn(n.keycapId)), (t[0] = n.keycapId), (t[1] = l));
  let u = l,
    d = T(),
    f = n.action?.type === `skill` ? n.action : null,
    p = n.action?.type === `command` ? n.action.commandId : n.commandId,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C;
  if (
    t[2] !== i ||
    t[3] !== p ||
    t[4] !== f ||
    t[5] !== d ||
    t[6] !== a ||
    t[7] !== u ||
    t[8] !== c ||
    t[9] !== o ||
    t[10] !== n ||
    t[11] !== r ||
    t[12] !== s
  ) {
    let e = p == null ? null : un(p);
    ((h = ye),
      (S = !0),
      t[23] !== u || t[24] !== o || t[25] !== n || t[26] !== s
        ? ((C = (0, $.jsx)(vi, { keycap: u, skills: o, slot: n, voiceButtonMode: s })),
          (t[23] = u),
          (t[24] = o),
          (t[25] = n),
          (t[26] = s),
          (t[27] = C))
        : (C = t[27]),
      (y = `button`));
    let l = a && `translate-y-px scale-[0.985]`;
    (t[28] !== i || t[29] !== l
      ? ((b = I(`group relative z-10 cursor-interaction transition-transform duration-basic ease-out`, l, i)),
        (t[28] = i),
        (t[29] = l),
        (t[30] = b))
      : (b = t[30]),
      t[31] !== c || t[32] !== r
        ? ((x = () => {
            c(r);
          }),
          (t[31] = c),
          (t[32] = r),
          (t[33] = x))
        : (x = t[33]),
      (m = Pn));
    let w =
      a &&
      `bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.92),0_0_12px_rgba(141,181,255,0.26)] dark:bg-[#282b34] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_0_14px_rgba(141,181,255,0.28)]`;
    (t[34] === w
      ? (v = t[35])
      : ((v = I(
          `size-full transition-[box-shadow,background-color] duration-basic ease-out group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.92),0_0_12px_rgba(141,181,255,0.18)] dark:group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),0_0_12px_rgba(141,181,255,0.24)]`,
          w,
        )),
        (t[34] = w),
        (t[35] = v)),
      (g = `sr-only`),
      (_ =
        f == null ? (e == null ? (0, $.jsx)(_i, { keycap: u, voiceButtonMode: s }) : On(e, d)) : Mn(f, o, d)),
      (t[2] = i),
      (t[3] = p),
      (t[4] = f),
      (t[5] = d),
      (t[6] = a),
      (t[7] = u),
      (t[8] = c),
      (t[9] = o),
      (t[10] = n),
      (t[11] = r),
      (t[12] = s),
      (t[13] = m),
      (t[14] = h),
      (t[15] = g),
      (t[16] = _),
      (t[17] = v),
      (t[18] = y),
      (t[19] = b),
      (t[20] = x),
      (t[21] = S),
      (t[22] = C));
  } else
    ((m = t[13]),
      (h = t[14]),
      (g = t[15]),
      (_ = t[16]),
      (v = t[17]),
      (y = t[18]),
      (b = t[19]),
      (x = t[20]),
      (S = t[21]),
      (C = t[22]));
  let w;
  t[36] !== g || t[37] !== _
    ? ((w = (0, $.jsx)(`span`, { className: g, children: _ })), (t[36] = g), (t[37] = _), (t[38] = w))
    : (w = t[38]);
  let E;
  t[39] === u
    ? (E = t[40])
    : ((E = (0, $.jsx)(Rn, { keycap: u, className: `size-5` })), (t[39] = u), (t[40] = E));
  let D;
  t[41] !== m || t[42] !== w || t[43] !== E || t[44] !== v
    ? ((D = (0, $.jsxs)(m, { className: v, children: [w, E] })),
      (t[41] = m),
      (t[42] = w),
      (t[43] = E),
      (t[44] = v),
      (t[45] = D))
    : (D = t[45]);
  let O;
  t[46] !== D || t[47] !== y || t[48] !== b || t[49] !== x
    ? ((O = (0, $.jsx)(`button`, { type: y, className: b, onClick: x, children: D })),
      (t[46] = D),
      (t[47] = y),
      (t[48] = b),
      (t[49] = x),
      (t[50] = O))
    : (O = t[50]);
  let k;
  return (
    t[51] !== h || t[52] !== O || t[53] !== S || t[54] !== C
      ? ((k = (0, $.jsx)(h, { delayOpen: S, tooltipContent: C, children: O })),
        (t[51] = h),
        (t[52] = O),
        (t[53] = S),
        (t[54] = C),
        (t[55] = k))
      : (k = t[55]),
    k
  );
}
function Ti(e, t) {
  return t.some((t) => e.includes(t));
}
function Ei(e, t) {
  let n = t.trim().toLowerCase();
  return n.length === 0 || [e.id, ...pn(e)].some((e) => e.toLowerCase().includes(n));
}
function Di(e) {
  return e.id === `SPLIT` ? `FORK` : e.id === `BRCH` ? `DRAFT` : e.id;
}
var Oi, ki, $, Ai, ji, Mi, Ni, Pi, Fi;
function Ii() {
  return (Ii = e(() => {
    ((Oi = De()),
      k(),
      j(),
      Qt(),
      x(),
      ge(),
      (ki = Me()),
      U(),
      Je(),
      Ze(),
      ot(),
      At(),
      ln(),
      mn(),
      vn(),
      Kt(),
      kn(),
      be(),
      Te(),
      F(),
      a(),
      Ye(),
      Ve(),
      _(),
      P(),
      Ie(),
      m(),
      Le(),
      fe(),
      Oe(),
      D(),
      yt(),
      Ke(),
      Wt(),
      H(),
      qt(),
      p(),
      Ct(),
      Et(),
      l(),
      Un(),
      jn(),
      pr(),
      st(),
      vr(),
      Cn(),
      Zt(),
      Or(),
      Vn(),
      Nn(),
      Gn(),
      sn(),
      Fr(),
      jr(),
      yr(),
      En(),
      ri(),
      ci(),
      ($ = ke()),
      (Ai = {
        pinned: { label: X.pinnedChats, description: X.pinnedChatsDescription },
        recent: { label: X.recentChats, description: X.recentChatsDescription },
        priority: { label: X.priorityChats, description: X.priorityChatsDescription },
        custom: { label: X.customChats, description: X.customChatsDescription },
      }),
      (ji = {
        off: X.lightingAutoOffOff,
        "30-seconds": X.lightingAutoOff30Seconds,
        "1-minute": X.lightingAutoOff1Minute,
        "3-minutes": X.lightingAutoOff3Minutes,
        "10-minutes": X.lightingAutoOff10Minutes,
        "30-minutes": X.lightingAutoOff30Minutes,
        "1-hour": X.lightingAutoOff1Hour,
      }),
      (Mi = {
        "composer-navigation": {
          label: X.knobComposerNavigation,
          description: X.knobComposerNavigationDescription,
          turnRightAction: X.knobComposerNavigationTurnRight,
          turnLeftAction: X.knobComposerNavigationTurnLeft,
          clickAction: X.knobComposerNavigationClick,
        },
        reasoning: {
          label: X.knobReasoning,
          description: X.knobReasoningDescription,
          turnRightAction: X.knobReasoningTurnRight,
          turnLeftAction: X.knobReasoningTurnLeft,
          clickAction: X.knobReasoningClick,
        },
        "conversation-scroll": {
          label: X.knobConversationScroll,
          description: X.knobConversationScrollDescription,
          turnRightAction: X.knobConversationScrollTurnRight,
          turnLeftAction: X.knobConversationScrollTurnLeft,
          clickAction: X.knobConversationScrollClick,
        },
        custom: { label: X.knobCustom, description: X.knobCustomDescription },
      }),
      (Ni = {
        "connection-failed": { description: X.connectionFailedDescription, label: X.connectionFailed },
        "discovery-failed": { description: X.discoveryFailedDescription, label: X.discoveryFailed },
        "transport-unavailable": {
          description: X.transportUnavailableDescription,
          label: X.transportUnavailable,
        },
      }),
      (Pi = [
        { slotId: `ACT06`, keys: [`ACT06`] },
        { slotId: `ACT07`, keys: [`ACT07`] },
        { slotId: `ACT08`, keys: [`ACT08`] },
        { slotId: `ACT09`, keys: [`ACT09`] },
        { slotId: `ACT10_ACT11`, keys: [`ACT10`, `ACT11`] },
        { slotId: `ACT12`, keys: [`ACT12`] },
      ]),
      (Fi = [
        { slotId: `ACT10`, keys: [`ACT10`] },
        { slotId: `ACT11`, keys: [`ACT11`] },
      ]));
  }))();
}
Ii();
export { ui as CodexMicroSettings };
//# sourceMappingURL=codex-micro-settings-e26c9caffecc.js.map
