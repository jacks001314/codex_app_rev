import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  $4 as r,
  $C as i,
  $M as a,
  $St as o,
  $st as s,
  Ayt as c,
  Bst as l,
  CNt as u,
  Cb as d,
  DB as f,
  Ek as p,
  FBt as m,
  Fyt as h,
  HO as g,
  IO as _,
  JO as v,
  KO as y,
  KOt as b,
  Kj as x,
  Kk as S,
  LNt as C,
  LO as w,
  MNt as T,
  Mst as E,
  Myt as D,
  NNt as O,
  OB as k,
  PBt as A,
  Pyt as j,
  Qst as M,
  RO as ee,
  SY as N,
  Sb as P,
  TI as F,
  TY as I,
  Tk as L,
  WO as te,
  XOt as R,
  Y3 as ne,
  YOt as z,
  Yst as B,
  Z3 as V,
  ZSt as H,
  _Nt as U,
  ast as W,
  b2 as G,
  ck as K,
  dut as q,
  e3 as re,
  e6 as ie,
  ew as ae,
  hit as oe,
  iCt as se,
  ist as ce,
  jst as le,
  jyt as ue,
  kyt as de,
  lit as fe,
  lk as pe,
  nB as me,
  nCt as he,
  nN as ge,
  oit as _e,
  okt as ve,
  qO as ye,
  qj as be,
  qk as xe,
  rB as Se,
  rk as Ce,
  sct as we,
  sw as Te,
  tk as Ee,
  tkt as J,
  uk as De,
  uw as Oe,
  w_t as ke,
  y2 as Ae,
  zO as je,
  zst as Me,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as Ne,
  A5n as Pe,
  Ad as Fe,
  BF as Ie,
  Bat as Le,
  Cjr as Re,
  D3 as ze,
  D5n as Be,
  Dd as Ve,
  FBr as He,
  FF as Ue,
  G2 as We,
  Gm as Ge,
  Gsn as Ke,
  Hcn as qe,
  Hpr as Je,
  IBr as Ye,
  JP as Xe,
  J_t as Ze,
  K2 as Qe,
  KBr as $e,
  KF as et,
  Ksn as tt,
  LFt as nt,
  LIr as rt,
  LTn as it,
  M3 as at,
  MSn as ot,
  N3 as st,
  NIr as ct,
  NNn as lt,
  Nd as ut,
  O3 as dt,
  OSn as ft,
  Od as pt,
  PNn as mt,
  QF as ht,
  QLn as gt,
  RF as _t,
  RFt as vt,
  RTn as yt,
  Rir as bt,
  Ucn as xt,
  Upr as St,
  Wm as Ct,
  XLr as wt,
  Y_t as Tt,
  ZP as Et,
  _ct as Dt,
  _yn as Ot,
  aan as kt,
  c7n as At,
  cA as jt,
  cct as Mt,
  dat as Nt,
  eI as Pt,
  gct as Ft,
  hct as It,
  ian as Lt,
  iut as Rt,
  lct as zt,
  lwt as Bt,
  njr as Vt,
  pct as Ht,
  qF as Ut,
  rEn as Wt,
  sA as Gt,
  tjr as Kt,
  tut as qt,
  uat as Jt,
  uct as Yt,
  uwt as Xt,
  wSn as Zt,
  xjr as Qt,
  y7n as $t,
  yyn as en,
  zF as tn,
  zat as nn,
} from "./app-initial-ad16eaadf81f.js";
import { Fc as rn, G_ as an, Nc as on, W_ as sn } from "./app-primary-3e00728c2a4c.js";
import { i as cn, n as ln, t as un } from "./codex-micro-commands-a9ca1690e672.js";
import {
  c as dn,
  d as fn,
  f as pn,
  i as mn,
  l as hn,
  n as gn,
  o as _n,
  r as vn,
  s as yn,
  u as bn,
} from "./codex-micro-layout-83367ba34281.js";
import {
  c as xn,
  f as Sn,
  n as Cn,
  o as wn,
  r as Tn,
  u as En,
} from "./codex-micro-slot-signals-ea1e3fa588b5.js";
import { n as Dn, r as On, t as kn } from "./command-messages-4a21e8f833a2.js";
import { n as An, t as jn } from "./codex-micro-analog-action-title-57a5e999b668.js";
import {
  a as Mn,
  c as Nn,
  d as Pn,
  f as Fn,
  i as In,
  l as Ln,
  n as Rn,
  o as zn,
  p as Bn,
  r as Vn,
  s as Hn,
  t as Un,
  u as Wn,
} from "./codex-micro-keyboard-surface-4aba31c5b4d8.js";
import { n as Gn, t as Kn } from "./keyboard-shortcuts-search-input-f2d78543b220.js";
function qn(e, t, n) {
  let r = t.trim(),
    i = (0, Yn.default)(
      e.flatMap((e) => {
        if (e.id === `personalitySettings`) return [];
        let { description: t, title: i } = kn(e, n);
        return r.length > 0 && ![e.id, i, t].some((e) => Tt(e, r) > 0)
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
  return yt.flatMap((e) => {
    let t = i.filter((t) => t.group === e);
    return t.length === 0 ? [] : [{ id: e, label: n.formatMessage(Zn[e]), options: t }];
  });
}
function Jn(e) {
  let t = wt();
  return (0, Yn.default)(
    (0, Xn.default)(
      e.filter((e) => e.enabled && Ge(e, t)),
      (e) => e.path,
    ),
    (e) => a(e).toLowerCase(),
  );
}
var Yn, Xn, Zn;
function Qn() {
  return (Qn = e(() => {
    (it(),
      (Yn = t(U(), 1)),
      (Xn = t(u(), 1)),
      R(),
      On(),
      Ze(),
      Ct(),
      ge(),
      (Zn = z({
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
function $n(e) {
  let t = (0, nr.c)(46),
    {
      commands: n,
      heading: r,
      searchAriaLabel: i,
      searchQuery: o,
      selectedAction: s,
      skills: c,
      onActionChange: l,
      onSearchQueryChange: u,
    } = e,
    d = ve(),
    f,
    p,
    m,
    h,
    g,
    _;
  if (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== d ||
    t[3] !== l ||
    t[4] !== u ||
    t[5] !== i ||
    t[6] !== o ||
    t[7] !== s ||
    t[8] !== c
  ) {
    let e = Jn(c),
      v = o.trim(),
      y;
    t[15] === s
      ? (y = t[16])
      : ((y = s?.type === `command` ? ln(s.commandId)?.id : null), (t[15] = s), (t[16] = y));
    let b = y,
      x =
        s == null
          ? d.formatMessage({
              id: `settings.codexMicro.actionPicker.none`,
              defaultMessage: `None`,
              description: `Short label for a Codex Micro control with no action assigned`,
            })
          : jn(s, e, d),
      S = e.filter((e) => v.length === 0 || [e.name, a(e), F(e)].some((e) => Tt(e, v) > 0)),
      C = qn(n, v, d),
      w;
    t[17] === d
      ? (w = t[18])
      : ((w = d.formatMessage({
          id: `settings.codexMicro.analog.clearAssignment`,
          defaultMessage: `Clear assignment`,
          description: `Accessible label and tooltip for clearing a Codex Micro control action assignment`,
        })),
        (t[17] = d),
        (t[18] = w));
    let T = w;
    ((f = je), (h = `flex min-h-0 flex-1 flex-col gap-3`));
    let E;
    t[19] === r
      ? (E = t[20])
      : ((E = (0, rr.jsx)(`span`, { className: `font-medium`, children: r })), (t[19] = r), (t[20] = E));
    let D;
    t[21] === d
      ? (D = t[22])
      : ((D = d.formatMessage({
          id: `settings.codexMicro.analog.currentAssignment`,
          defaultMessage: `Current assignment`,
          description: `Accessible label for the current Codex Micro control action assignment`,
        })),
        (t[21] = d),
        (t[22] = D));
    let O;
    t[23] !== T || t[24] !== l || t[25] !== s
      ? ((O =
          s == null
            ? null
            : (0, rr.jsx)(me, {
                tooltipContent: T,
                children: (0, rr.jsx)(ne, {
                  uniform: !0,
                  "aria-label": T,
                  className: `shrink-0`,
                  color: `ghost`,
                  radius: `small`,
                  size: `iconCircleSm`,
                  onClick: () => {
                    l(null);
                  },
                  children: (0, rr.jsx)(N, {}),
                }),
              })),
        (t[23] = T),
        (t[24] = l),
        (t[25] = s),
        (t[26] = O))
      : (O = t[26]);
    let k = (0, rr.jsxs)(`div`, {
      "aria-label": D,
      className: `flex max-w-[60%] min-w-0 items-center gap-1`,
      role: `group`,
      children: [(0, rr.jsx)(er, { title: x, unassigned: s == null }), O],
    });
    t[27] !== k || t[28] !== E
      ? ((g = (0, rr.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4 text-sm`,
          children: [E, k],
        })),
        (t[27] = k),
        (t[28] = E),
        (t[29] = g))
      : (g = t[29]);
    let A;
    (t[30] === d
      ? (A = t[31])
      : ((A = d.formatMessage({
          id: `settings.codexMicro.analog.search.placeholder`,
          defaultMessage: `Search actions and skills`,
          description: `Placeholder for searching actions and skills in a Codex Micro control mapping dialog`,
        })),
        (t[30] = d),
        (t[31] = A)),
      t[32] !== u || t[33] !== i || t[34] !== o || t[35] !== A
        ? ((_ = (0, rr.jsx)(Kn, { ariaLabel: i, placeholder: A, value: o, onValueChange: u })),
          (t[32] = u),
          (t[33] = i),
          (t[34] = o),
          (t[35] = A),
          (t[36] = _))
        : (_ = t[36]),
      (p = `vertical-scroll-fade-mask min-h-0 flex-1 overflow-y-auto pe-1 [--edge-fade-distance:1rem]`),
      (m =
        S.length === 0 && C.length === 0
          ? (0, rr.jsx)(`div`, {
              className: `py-2 text-sm text-secondary`,
              children: (0, rr.jsx)(J, {
                id: `settings.codexMicro.analog.noResults`,
                defaultMessage: `No matching actions or skills`,
                description: `Empty search state for Codex Micro control action choices`,
              }),
            })
          : (0, rr.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [
                S.length === 0
                  ? null
                  : (0, rr.jsxs)(Gt, {
                      children: [
                        (0, rr.jsx)(Gt.Header, {
                          title: (0, rr.jsx)(J, {
                            id: `settings.codexMicro.analog.skills`,
                            defaultMessage: `Skills`,
                            description: `Section heading for Codex Micro control skill choices`,
                          }),
                        }),
                        (0, rr.jsx)(Gt.Content, {
                          children: S.map((e) =>
                            (0, rr.jsx)(
                              tr,
                              {
                                description: F(e),
                                isSelected:
                                  s?.type === `skill` && s.skillName === e.name && s.skillPath === e.path,
                                onSelect: () => {
                                  l({ type: `skill`, skillName: e.name, skillPath: e.path });
                                },
                                title: a(e),
                              },
                              e.path,
                            ),
                          ),
                        }),
                      ],
                    }),
                C.map((e) =>
                  (0, rr.jsxs)(
                    Gt,
                    {
                      children: [
                        (0, rr.jsx)(Gt.Header, { title: e.label }),
                        (0, rr.jsx)(Gt.Content, {
                          children: e.options.map((e) => {
                            let { command: t, description: n, title: r } = e;
                            return (0, rr.jsx)(
                              tr,
                              {
                                description: n || null,
                                isSelected: b === t.id,
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
      (t[0] = n),
      (t[1] = r),
      (t[2] = d),
      (t[3] = l),
      (t[4] = u),
      (t[5] = i),
      (t[6] = o),
      (t[7] = s),
      (t[8] = c),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _));
  } else ((f = t[9]), (p = t[10]), (m = t[11]), (h = t[12]), (g = t[13]), (_ = t[14]));
  let v;
  t[37] !== p || t[38] !== m
    ? ((v = (0, rr.jsx)(`div`, { className: p, children: m })), (t[37] = p), (t[38] = m), (t[39] = v))
    : (v = t[39]);
  let y;
  return (
    t[40] !== f || t[41] !== h || t[42] !== g || t[43] !== _ || t[44] !== v
      ? ((y = (0, rr.jsxs)(f, { className: h, children: [g, _, v] })),
        (t[40] = f),
        (t[41] = h),
        (t[42] = g),
        (t[43] = _),
        (t[44] = v),
        (t[45] = y))
      : (y = t[45]),
    y
  );
}
function er(e) {
  let t = (0, nr.c)(7),
    { compact: n, title: r, unassigned: i } = e,
    a = n !== void 0 && n,
    o = a || void 0,
    s = a ? `max-w-56 text-xs` : `max-w-full`,
    c = i && `text-codex-description`,
    l;
  t[0] !== s || t[1] !== c
    ? ((l = T(`block truncate`, s, c)), (t[0] = s), (t[1] = c), (t[2] = l))
    : (l = t[2]);
  let u;
  return (
    t[3] !== o || t[4] !== l || t[5] !== r
      ? ((u = (0, rr.jsx)(`span`, { "data-tooltip-overflow-target": o, className: l, children: r })),
        (t[3] = o),
        (t[4] = l),
        (t[5] = r),
        (t[6] = u))
      : (u = t[6]),
    u
  );
}
function tr(e) {
  let t = (0, nr.c)(11),
    { description: n, isSelected: r, onSelect: i, title: a } = e,
    o = r ? `true` : void 0,
    s;
  t[0] === r
    ? (s = t[1])
    : ((s = r ? (0, rr.jsx)(f, { className: `shrink-0 text-info`, "aria-hidden": !1, asset: Ae }) : null),
      (t[0] = r),
      (t[1] = s));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = n == null ? null : (0, rr.jsx)(`span`, { className: `block truncate`, children: n })),
      (t[2] = n),
      (t[3] = c));
  let l;
  return (
    t[4] !== r || t[5] !== i || t[6] !== o || t[7] !== s || t[8] !== c || t[9] !== a
      ? ((l = (0, rr.jsx)(qt, {
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
var nr, rr;
function ir() {
  return (ir = e(() => {
    ((nr = A()),
      G(),
      O(),
      R(),
      cn(),
      Ze(),
      V(),
      g(),
      k(),
      I(),
      Rt(),
      Se(),
      Gn(),
      jt(),
      ge(),
      An(),
      Qn(),
      (rr = C()));
  }))();
}
function ar(e) {
  let t = (0, cr.c)(62),
    {
      commands: n,
      mapping: r,
      joystick: i,
      selectedDirection: a,
      skills: o,
      onActionChange: s,
      onDirectionSelect: c,
      onEditorOpenChange: l,
    } = e,
    u = ve(),
    [d, f] = (0, lr.useState)(!1),
    [p, m] = (0, lr.useState)(``),
    h;
  t[0] === o ? (h = t[1]) : ((h = Jn(o)), (t[0] = o), (t[1] = h));
  let g = h,
    v;
  t[2] === l
    ? (v = t[3])
    : ((v = () => {
        l(!1);
      }),
      (t[2] = l),
      (t[3] = v));
  let b = (0, lr.useEffectEvent)(v),
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
  t[7] === l
    ? (C = t[8])
    : ((C = function (e) {
        (f(e), l(e), e || m(``));
      }),
      (t[7] = l),
      (t[8] = C));
  let T = C,
    E;
  t[9] === u
    ? (E = t[10])
    : ((E = u.formatMessage({
        id: `settings.codexMicro.keyboardLayout.analog.configure`,
        defaultMessage: `Configure analog stick actions`,
        description: `Accessible label for opening the Codex Micro analog stick action mapping editor`,
      })),
      (t[9] = u),
      (t[10] = E));
  let D;
  t[11] === i
    ? (D = t[12])
    : ((D = (0, Y.jsx)(Un, {
        className: `size-full group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.82),0_0_12px_rgba(141,181,255,0.2)] dark:group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_0_12px_rgba(141,181,255,0.24)]`,
        joystick: i,
      })),
      (t[11] = i),
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
    ? ((k = (0, Y.jsx)(ye, {
        children: (0, Y.jsx)(J, {
          id: `settings.codexMicro.analog.title`,
          defaultMessage: `Analog stick`,
          description: `Title of the Codex Micro analog stick action mapping dialog`,
        }),
      })),
      (t[16] = k))
    : (k = t[16]);
  let A;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Y.jsx)(je, {
        children: (0, Y.jsx)(ee, {
          title: k,
          subtitle: (0, Y.jsx)(y, {
            children: (0, Y.jsx)(J, {
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
  t[18] === i
    ? (j = t[19])
    : ((j = (0, Y.jsx)(Un, { className: `size-20 justify-self-center`, joystick: i })),
      (t[18] = i),
      (t[19] = j));
  let M;
  t[20] === u
    ? (M = t[21])
    : ((M = u.formatMessage({
        id: `settings.codexMicro.analog.directionGroup.label`,
        defaultMessage: `Analog direction mappings`,
        description: `Accessible label for the Codex Micro analog direction mapping group`,
      })),
      (t[20] = u),
      (t[21] = M));
  let N;
  t[22] !== r || t[23] !== c || t[24] !== g || t[25] !== a
    ? ((N = ur.map((e) =>
        (0, Y.jsx)(
          or,
          {
            action: r[e],
            direction: e,
            isSelected: a === e,
            skills: g,
            onSelect: () => {
              c(e);
            },
          },
          e,
        ),
      )),
      (t[22] = r),
      (t[23] = c),
      (t[24] = g),
      (t[25] = a),
      (t[26] = N))
    : (N = t[26]);
  let P;
  t[27] !== M || t[28] !== N
    ? ((P = (0, Y.jsx)(`div`, {
        "aria-label": M,
        className: `flex min-w-0 flex-col gap-1`,
        role: `group`,
        children: N,
      })),
      (t[27] = M),
      (t[28] = N),
      (t[29] = P))
    : (P = t[29]);
  let F;
  t[30] !== j || t[31] !== P
    ? ((F = (0, Y.jsx)(je, {
        children: (0, Y.jsxs)(`div`, {
          className: `grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-5`,
          children: [j, P],
        }),
      })),
      (t[30] = j),
      (t[31] = P),
      (t[32] = F))
    : (F = t[32]);
  let I;
  t[33] === a
    ? (I = t[34])
    : ((I = (0, Y.jsx)(J, {
        id: `settings.codexMicro.analog.assignDirection`,
        defaultMessage: `Assign {direction}`,
        description: `Label above Codex Micro analog direction action choices`,
        values: { direction: (0, Y.jsx)(sr, { direction: a, lowercase: !0 }, `direction`) },
      })),
      (t[33] = a),
      (t[34] = I));
  let L;
  t[35] === u
    ? (L = t[36])
    : ((L = u.formatMessage({
        id: `settings.codexMicro.analog.search.label`,
        defaultMessage: `Search analog actions and skills`,
        description: `Accessible label for searching actions and skills in the Codex Micro analog mapping dialog`,
      })),
      (t[35] = u),
      (t[36] = L));
  let R = r[a],
    z;
  t[37] !== s || t[38] !== a
    ? ((z = (e) => {
        s(a, e);
      }),
      (t[37] = s),
      (t[38] = a),
      (t[39] = z))
    : (z = t[39]);
  let B;
  t[40] !== n || t[41] !== p || t[42] !== o || t[43] !== I || t[44] !== L || t[45] !== R || t[46] !== z
    ? ((B = (0, Y.jsx)($n, {
        commands: n,
        heading: I,
        searchAriaLabel: L,
        searchQuery: p,
        selectedAction: R,
        skills: o,
        onActionChange: z,
        onSearchQueryChange: m,
      })),
      (t[40] = n),
      (t[41] = p),
      (t[42] = o),
      (t[43] = I),
      (t[44] = L),
      (t[45] = R),
      (t[46] = z),
      (t[47] = B))
    : (B = t[47]);
  let V;
  t[48] === T
    ? (V = t[49])
    : ((V = () => {
        T(!1);
      }),
      (t[48] = T),
      (t[49] = V));
  let H;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Y.jsx)(J, {
        id: `settings.codexMicro.analog.done`,
        defaultMessage: `Done`,
        description: `Button that closes the Codex Micro analog action mapping dialog`,
      })),
      (t[50] = H))
    : (H = t[50]);
  let U;
  t[51] === V
    ? (U = t[52])
    : ((U = (0, Y.jsx)(je, {
        children: (0, Y.jsx)(w, { children: (0, Y.jsx)(ne, { color: `primary`, onClick: V, children: H }) }),
      })),
      (t[51] = V),
      (t[52] = U));
  let W;
  t[53] !== F || t[54] !== B || t[55] !== U
    ? ((W = (0, Y.jsxs)(_, {
        className: `max-h-[min(680px,calc(100vh-4rem))] min-h-0 gap-0 overflow-hidden`,
        children: [A, F, B, U],
      })),
      (t[53] = F),
      (t[54] = B),
      (t[55] = U),
      (t[56] = W))
    : (W = t[56]);
  let G;
  return (
    t[57] !== d || t[58] !== T || t[59] !== W || t[60] !== O
      ? ((G = (0, Y.jsx)(te, { open: d, size: `wide`, onOpenChange: T, triggerContent: O, children: W })),
        (t[57] = d),
        (t[58] = T),
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
    s = ve(),
    c,
    l,
    u,
    d,
    f,
    p,
    m;
  if (t[0] !== n || t[1] !== r || t[2] !== s || t[3] !== i || t[4] !== a) {
    u = n == null ? s.formatMessage(fr.none) : jn(n, a, s);
    let e = s.formatMessage(fr[r]);
    ((l = me),
      (p = `trigger-overflows`),
      (m = u),
      (c = qt),
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
  t[12] === h ? (g = t[13]) : ((g = T(`size-4 shrink-0`, h)), (t[12] = h), (t[13] = g));
  let _;
  t[14] === g ? (_ = t[15]) : ((_ = (0, Y.jsx)(x, { className: g })), (t[14] = g), (t[15] = _));
  let v = n == null,
    y;
  t[16] !== u || t[17] !== v
    ? ((y = (0, Y.jsx)(er, { compact: !0, title: u, unassigned: v })), (t[16] = u), (t[17] = v), (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] === r ? (b = t[20]) : ((b = (0, Y.jsx)(sr, { direction: r })), (t[19] = r), (t[20] = b));
  let S;
  t[21] !== c ||
  t[22] !== i ||
  t[23] !== o ||
  t[24] !== d ||
  t[25] !== b ||
  t[26] !== f ||
  t[27] !== _ ||
  t[28] !== y
    ? ((S = (0, Y.jsx)(c, {
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
      (t[29] = S))
    : (S = t[29]);
  let C;
  return (
    t[30] !== l || t[31] !== S || t[32] !== p || t[33] !== m
      ? ((C = (0, Y.jsx)(l, { openWhen: p, tooltipContent: m, children: S })),
        (t[30] = l),
        (t[31] = S),
        (t[32] = p),
        (t[33] = m),
        (t[34] = C))
      : (C = t[34]),
    C
  );
}
function sr(e) {
  let t = (0, cr.c)(6),
    { direction: n, lowercase: r } = e;
  if (!(r !== void 0 && r)) {
    let e = fr[n],
      r;
    return (t[0] === e ? (r = t[1]) : ((r = (0, Y.jsx)(J, { ...e })), (t[0] = e), (t[1] = r)), r);
  }
  switch (n) {
    case `up`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(J, { ...fr.upLowercase })), (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `right`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(J, { ...fr.rightLowercase })), (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `down`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(J, { ...fr.downLowercase })), (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `left`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(J, { ...fr.leftLowercase })), (t[5] = e))
          : (e = t[5]),
        e
      );
    }
  }
}
var cr, lr, Y, ur, dr, fr;
function pr() {
  return (pr = e(() => {
    ((cr = A()),
      O(),
      (lr = m()),
      R(),
      V(),
      v(),
      g(),
      Rt(),
      Se(),
      be(),
      ir(),
      An(),
      Qn(),
      Mn(),
      (Y = C()),
      (ur = [`up`, `right`, `down`, `left`]),
      (dr = { up: ``, right: `rotate-90`, down: `rotate-180`, left: `-rotate-90` }),
      (fr = z({
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
      selectedAction: o,
      skills: s,
      triggerButton: c,
      onActionSelect: l,
    } = e,
    u = ve(),
    [d, p] = (0, gr.useState)(``),
    m;
  if (
    t[0] !== n ||
    t[1] !== u ||
    t[2] !== r ||
    t[3] !== l ||
    t[4] !== i?.ownerDocument.body ||
    t[5] !== d ||
    t[6] !== o ||
    t[7] !== s ||
    t[8] !== c
  ) {
    let e = qn(n, d, u),
      h;
    t[10] === d
      ? (h = t[11])
      : ((h = (e) => d.trim().length === 0 || [e.name, a(e), F(e)].some((e) => Tt(e, d) > 0)),
        (t[10] = d),
        (t[11] = h));
    let g = Jn(s).filter(h),
      _;
    t[12] !== r || t[13] !== d
      ? ((_ = d.trim().length === 0 || Tt(r, d) > 0), (t[12] = r), (t[13] = d), (t[14] = _))
      : (_ = t[14]);
    let v = _,
      y,
      b;
    t[15] !== u || t[16] !== d
      ? ((y = u.formatMessage({
          id: `settings.codexMicro.editor.action.insertText`,
          defaultMessage: `Insert text`,
          description: `Option for assigning custom composer text to a Codex Micro keycap`,
        })),
        (b = d.trim().length === 0 || Tt(y, d) > 0),
        (t[15] = u),
        (t[16] = d),
        (t[17] = y),
        (t[18] = b))
      : ((y = t[17]), (b = t[18]));
    let x = b,
      S;
    t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((S = (e) => {
          e || p(``);
        }),
        (t[19] = S))
      : (S = t[19]);
    let C;
    t[20] === u
      ? (C = t[21])
      : ((C = u.formatMessage({
          id: `settings.codexMicro.editor.action.search.label`,
          defaultMessage: `Search actions for keycap`,
          description: `Accessible label for searching actions assignable to a Codex Micro keycap`,
        })),
        (t[20] = u),
        (t[21] = C));
    let w;
    t[22] === u
      ? (w = t[23])
      : ((w = u.formatMessage({
          id: `settings.codexMicro.editor.action.search.placeholder`,
          defaultMessage: `Search actions`,
          description: `Placeholder for searching actions assignable to a Codex Micro keycap`,
        })),
        (t[22] = u),
        (t[23] = w));
    let T;
    t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((T = (e) => {
          p(e.currentTarget.value);
        }),
        (t[24] = T))
      : (T = t[24]);
    let E;
    (t[25] !== d || t[26] !== C || t[27] !== w
      ? ((E = (0, _r.jsx)(Ce.SearchInput, {
          className: `shrink-0`,
          "aria-label": C,
          placeholder: w,
          value: d,
          onChange: T,
        })),
        (t[25] = d),
        (t[26] = C),
        (t[27] = w),
        (t[28] = E))
      : (E = t[28]),
      (m = (0, _r.jsxs)(Ee, {
        align: `end`,
        side: `top`,
        contentClassName: `overflow-hidden`,
        contentMaxHeight: `tall`,
        contentWidth: `panelWide`,
        portalContainer: i?.ownerDocument.body ?? null,
        onOpenChange: S,
        triggerButton: c,
        children: [
          E,
          v || x || g.length > 0 || e.length > 0
            ? (0, _r.jsxs)(Ce.Section, {
                className: `min-h-0 flex-1 overflow-y-auto`,
                children: [
                  v
                    ? (0, _r.jsx)(Ce.Item, {
                        rightIcon:
                          o == null
                            ? (0, _r.jsx)(f, { className: `text-info`, "aria-hidden": !1, asset: Ae })
                            : null,
                        onSelect: () => {
                          l(void 0);
                        },
                        children: r,
                      })
                    : null,
                  x
                    ? (0, _r.jsx)(Ce.Item, {
                        rightIcon:
                          o?.type === `composer-text`
                            ? (0, _r.jsx)(f, { className: `text-info`, "aria-hidden": !1, asset: Ae })
                            : null,
                        SubText: (0, _r.jsx)(`span`, {
                          className: `text-xs text-codex-description`,
                          children: (0, _r.jsx)(J, {
                            id: `settings.codexMicro.editor.action.insertText.description`,
                            defaultMessage: `Add text to the active prompt without sending it`,
                            description: `Description of the custom composer text action for a Codex Micro keycap`,
                          }),
                        }),
                        onSelect: () => {
                          l({ type: `composer-text`, text: o?.type === `composer-text` ? o.text : `` });
                        },
                        children: y,
                      })
                    : null,
                  e.map((e, t) =>
                    (0, _r.jsxs)(
                      gr.Fragment,
                      {
                        children: [
                          v || x || t > 0 ? (0, _r.jsx)(Ce.Separator, {}) : null,
                          (0, _r.jsx)(Ce.SectionLabel, { children: e.label }),
                          e.options.map((e) => {
                            let { command: t, description: n, title: r } = e;
                            return (0, _r.jsx)(
                              Ce.Item,
                              {
                                rightIcon:
                                  o?.type === `command` && t.id === o.commandId
                                    ? (0, _r.jsx)(f, { className: `text-info`, "aria-hidden": !1, asset: Ae })
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
                  g.length === 0
                    ? null
                    : (0, _r.jsxs)(_r.Fragment, {
                        children: [
                          v || x || e.length > 0 ? (0, _r.jsx)(Ce.Separator, {}) : null,
                          (0, _r.jsx)(Ce.SectionLabel, {
                            children: (0, _r.jsx)(J, {
                              id: `settings.codexMicro.editor.customShortcut.skills`,
                              defaultMessage: `Skills`,
                              description: `Section heading for skills assignable to a Codex Micro keycap`,
                            }),
                          }),
                          g.map((e) =>
                            (0, _r.jsx)(
                              Ce.Item,
                              {
                                rightIcon:
                                  o?.type === `skill` && o.skillPath === e.path
                                    ? (0, _r.jsx)(f, { className: `text-info`, "aria-hidden": !1, asset: Ae })
                                    : null,
                                SubText: (0, _r.jsx)(`span`, {
                                  className: `text-xs text-codex-description`,
                                  children: F(e),
                                }),
                                onSelect: () => {
                                  l({ type: `skill`, skillName: e.name, skillPath: e.path });
                                },
                                children: a(e),
                              },
                              e.path,
                            ),
                          ),
                        ],
                      }),
                ],
              })
            : (0, _r.jsx)(Ce.Message, {
                centered: !0,
                children: (0, _r.jsx)(J, {
                  id: `settings.codexMicro.editor.action.search.noResults`,
                  defaultMessage: `No matching actions`,
                  description: `Empty search state for actions assignable to a Codex Micro keycap`,
                }),
              }),
        ],
      })),
      (t[0] = n),
      (t[1] = u),
      (t[2] = r),
      (t[3] = l),
      (t[4] = i?.ownerDocument.body),
      (t[5] = d),
      (t[6] = o),
      (t[7] = s),
      (t[8] = c),
      (t[9] = m));
  } else m = t[9];
  return m;
}
var hr, gr, _r;
function vr() {
  return (vr = e(() => {
    ((hr = A()), G(), (gr = m()), R(), Ze(), K(), k(), ge(), Qn(), (_r = C()));
  }))();
}
var X;
function yr() {
  return (yr = e(() => {
    (R(),
      (X = z({
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
      commands: n,
      defaultOpen: r,
      deviceName: i,
      isPressed: a,
      mapping: o,
      open: s,
      pulse: c,
      skills: l,
      onActionChange: u,
      onOpenChange: d,
    } = e,
    f = r !== void 0 && r,
    p = ve(),
    [m, h] = (0, wr.useState)(f),
    [g, v] = (0, wr.useState)(``),
    [b, x] = (0, wr.useState)(`left`),
    S = s ?? m,
    C;
  t[0] === l ? (C = t[1]) : ((C = Jn(l)), (t[0] = l), (t[1] = C));
  let T = C,
    E;
  t[2] !== s || t[3] !== d
    ? ((E = function (e) {
        (s ?? h(e), d?.(e), e || v(``));
      }),
      (t[2] = s),
      (t[3] = d),
      (t[4] = E))
    : (E = t[4]);
  let D = E,
    O;
  t[5] !== o || t[6] !== T
    ? ((O = (0, Z.jsx)(xr, { mapping: o, skills: T })), (t[5] = o), (t[6] = T), (t[7] = O))
    : (O = t[7]);
  let k;
  t[8] !== i || t[9] !== p
    ? ((k = p.formatMessage(
        {
          id: `settings.codexMicro.keyboardLayout.knob.configureByDevice`,
          defaultMessage: `Configure {deviceName} knob actions`,
          description: `Accessible label for opening the Codex Micro or Creator Micro knob action mapping editor`,
        },
        { deviceName: i },
      )),
      (t[8] = i),
      (t[9] = p),
      (t[10] = k))
    : (k = t[10]);
  let A;
  t[11] !== a || t[12] !== c
    ? ((A = (0, Z.jsx)(Rn, { isPressed: a, pulse: c })), (t[11] = a), (t[12] = c), (t[13] = A))
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
  let M;
  t[17] !== O || t[18] !== j
    ? ((M = (0, Z.jsx)(me, {
        align: `start`,
        delayOpen: !0,
        disablePadding: !0,
        tooltipMaxWidth: `18rem`,
        tooltipContent: O,
        children: j,
      })),
      (t[17] = O),
      (t[18] = j),
      (t[19] = M))
    : (M = t[19]);
  let N;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Z.jsx)(ye, {
        children: (0, Z.jsx)(J, {
          id: `settings.codexMicro.encoder.title`,
          defaultMessage: `Knob`,
          description: `Title of the Codex Micro knob action mapping dialog`,
        }),
      })),
      (t[20] = N))
    : (N = t[20]);
  let P;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Z.jsx)(je, {
        children: (0, Z.jsx)(ee, {
          title: N,
          subtitle: (0, Z.jsx)(y, {
            children: (0, Z.jsx)(J, {
              id: `settings.codexMicro.encoder.description`,
              defaultMessage: `Choose what each knob gesture triggers`,
              description: `Description of the Codex Micro knob action mapping dialog`,
            }),
          }),
        }),
      })),
      (t[21] = P))
    : (P = t[21]);
  let F;
  t[22] !== a || t[23] !== c
    ? ((F = (0, Z.jsx)(`div`, {
        className: `size-20 justify-self-center`,
        children: (0, Z.jsx)(Rn, { isPressed: a, pulse: c }),
      })),
      (t[22] = a),
      (t[23] = c),
      (t[24] = F))
    : (F = t[24]);
  let I;
  t[25] === p
    ? (I = t[26])
    : ((I = p.formatMessage({
        id: `settings.codexMicro.encoder.inputGroup.label`,
        defaultMessage: `Knob gesture mappings`,
        description: `Accessible label for the Codex Micro knob gesture mapping group`,
      })),
      (t[25] = p),
      (t[26] = I));
  let L;
  t[27] !== o || t[28] !== T || t[29] !== b
    ? ((L = Tr.map((e) =>
        (0, Z.jsx)(
          Sr,
          {
            action: o[e],
            input: e,
            isSelected: b === e,
            skills: T,
            onSelect: () => {
              x(e);
            },
          },
          e,
        ),
      )),
      (t[27] = o),
      (t[28] = T),
      (t[29] = b),
      (t[30] = L))
    : (L = t[30]);
  let R;
  t[31] !== I || t[32] !== L
    ? ((R = (0, Z.jsx)(`div`, {
        "aria-label": I,
        className: `flex min-w-0 flex-col gap-1`,
        role: `group`,
        children: L,
      })),
      (t[31] = I),
      (t[32] = L),
      (t[33] = R))
    : (R = t[33]);
  let z;
  t[34] !== F || t[35] !== R
    ? ((z = (0, Z.jsx)(je, {
        children: (0, Z.jsxs)(`div`, {
          className: `grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-5`,
          children: [F, R],
        }),
      })),
      (t[34] = F),
      (t[35] = R),
      (t[36] = z))
    : (z = t[36]);
  let B;
  t[37] === b
    ? (B = t[38])
    : ((B = (0, Z.jsx)(J, {
        id: `settings.codexMicro.encoder.assign`,
        defaultMessage: `{input, select, left {Assign left turn} right {Assign right turn} click {Assign click} longPress {Assign long press} other {Assign knob gesture}}`,
        description: `Label above action choices for a Codex Micro knob gesture`,
        values: { input: b },
      })),
      (t[37] = b),
      (t[38] = B));
  let V;
  t[39] === p
    ? (V = t[40])
    : ((V = p.formatMessage({
        id: `settings.codexMicro.encoder.search.label`,
        defaultMessage: `Search knob actions and skills`,
        description: `Accessible label for searching actions and skills in the Codex Micro knob mapping dialog`,
      })),
      (t[39] = p),
      (t[40] = V));
  let H = o[b],
    U;
  t[41] !== u || t[42] !== b
    ? ((U = (e) => {
        u(b, e);
      }),
      (t[41] = u),
      (t[42] = b),
      (t[43] = U))
    : (U = t[43]);
  let W;
  t[44] !== n || t[45] !== g || t[46] !== l || t[47] !== B || t[48] !== V || t[49] !== H || t[50] !== U
    ? ((W = (0, Z.jsx)($n, {
        commands: n,
        heading: B,
        searchAriaLabel: V,
        searchQuery: g,
        selectedAction: H,
        skills: l,
        onActionChange: U,
        onSearchQueryChange: v,
      })),
      (t[44] = n),
      (t[45] = g),
      (t[46] = l),
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
  let K;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, Z.jsx)(J, {
        id: `settings.codexMicro.encoder.done`,
        defaultMessage: `Done`,
        description: `Button that closes the Codex Micro knob action mapping dialog`,
      })),
      (t[54] = K))
    : (K = t[54]);
  let q;
  t[55] === G
    ? (q = t[56])
    : ((q = (0, Z.jsx)(je, {
        children: (0, Z.jsx)(w, { children: (0, Z.jsx)(ne, { color: `primary`, onClick: G, children: K }) }),
      })),
      (t[55] = G),
      (t[56] = q));
  let re;
  t[57] !== z || t[58] !== W || t[59] !== q
    ? ((re = (0, Z.jsxs)(_, {
        className: `max-h-[min(680px,calc(100vh-4rem))] min-h-0 gap-0 overflow-hidden`,
        children: [P, z, W, q],
      })),
      (t[57] = z),
      (t[58] = W),
      (t[59] = q),
      (t[60] = re))
    : (re = t[60]);
  let ie;
  return (
    t[61] !== S || t[62] !== D || t[63] !== re || t[64] !== M
      ? ((ie = (0, Z.jsx)(te, { open: S, size: `wide`, onOpenChange: D, triggerContent: M, children: re })),
        (t[61] = S),
        (t[62] = D),
        (t[63] = re),
        (t[64] = M),
        (t[65] = ie))
      : (ie = t[65]),
    ie
  );
}
function xr(e) {
  let t = (0, Cr.c)(8),
    { mapping: n, skills: r } = e,
    i = ve(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(`span`, {
        className: `text-xs font-semibold`,
        children: (0, Z.jsx)(J, {
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
        children: (0, Z.jsx)(J, { ...X.knobCustomDescription }),
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
                children: (0, Z.jsx)(J, { ...Dr.gesture, values: { input: e } }),
              }),
              (0, Z.jsx)(`dd`, {
                className: `opacity-65`,
                children: n[e] == null ? i.formatMessage(Dr.none) : jn(n[e], r, i),
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
    s = ve(),
    c,
    l,
    u,
    d,
    f,
    p,
    m;
  t[0] !== n || t[1] !== r || t[2] !== s || t[3] !== i || t[4] !== a
    ? ((u = n == null ? s.formatMessage(Dr.none) : jn(n, a, s)),
      (l = me),
      (p = `trigger-overflows`),
      (m = u),
      (c = qt),
      (d = i ? `true` : void 0),
      (f = s.formatMessage(
        {
          id: `settings.codexMicro.encoder.mapping`,
          defaultMessage: `{input, select, left {Turn left} right {Turn right} click {Click} longPress {Press and hold} other {Knob gesture}}: {action}`,
          description: `Accessible label for a Codex Micro knob gesture and its assigned action`,
        },
        { action: u, input: r },
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
      (t[11] = m))
    : ((c = t[5]), (l = t[6]), (u = t[7]), (d = t[8]), (f = t[9]), (p = t[10]), (m = t[11]));
  let h = Er[r],
    g = n == null,
    _;
  t[12] !== u || t[13] !== g
    ? ((_ = (0, Z.jsx)(er, { compact: !0, title: u, unassigned: g })), (t[12] = u), (t[13] = g), (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] === r
    ? (v = t[16])
    : ((v = (0, Z.jsx)(J, { ...Dr.gesture, values: { input: r } })), (t[15] = r), (t[16] = v));
  let y;
  t[17] !== c ||
  t[18] !== i ||
  t[19] !== o ||
  t[20] !== d ||
  t[21] !== f ||
  t[22] !== h ||
  t[23] !== _ ||
  t[24] !== v
    ? ((y = (0, Z.jsx)(c, {
        ariaCurrent: d,
        ariaLabel: f,
        density: `compact`,
        icon: h,
        isSelected: i,
        onSelect: o,
        rightText: _,
        title: v,
      })),
      (t[17] = c),
      (t[18] = i),
      (t[19] = o),
      (t[20] = d),
      (t[21] = f),
      (t[22] = h),
      (t[23] = _),
      (t[24] = v),
      (t[25] = y))
    : (y = t[25]);
  let b;
  return (
    t[26] !== l || t[27] !== p || t[28] !== m || t[29] !== y
      ? ((b = (0, Z.jsx)(l, { openWhen: p, tooltipContent: m, children: y })),
        (t[26] = l),
        (t[27] = p),
        (t[28] = m),
        (t[29] = y),
        (t[30] = b))
      : (b = t[30]),
    b
  );
}
var Cr, wr, Z, Tr, Er, Dr;
function Or() {
  return (Or = e(() => {
    ((Cr = A()),
      re(),
      d(),
      (wr = m()),
      R(),
      V(),
      v(),
      g(),
      k(),
      Rt(),
      Se(),
      Le(),
      ir(),
      An(),
      Qn(),
      Mn(),
      yr(),
      (Z = C()),
      (Tr = [`left`, `right`, `click`, `longPress`]),
      (Er = {
        left: (0, Z.jsx)(f, { className: `shrink-0`, "aria-hidden": !1, asset: r }),
        right: (0, Z.jsx)(f, { className: `shrink-0 -scale-x-100`, "aria-hidden": !1, asset: r }),
        click: (0, Z.jsx)(f, { className: `shrink-0`, "aria-hidden": !1, asset: P }),
        longPress: (0, Z.jsx)(nn, { className: `size-4 shrink-0` }),
      }),
      (Dr = z({
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
  title: n = (0, Ar.jsx)(J, {
    id: `settings.codexMicro.keyboardLayout.resetConfirmation.title`,
    defaultMessage: `Reset keyboard layout?`,
    description: `Title for the dialog confirming a Codex Micro keyboard layout reset`,
  }),
  description: r = (0, Ar.jsx)(J, {
    id: `settings.codexMicro.keyboardLayout.resetConfirmation.description`,
    defaultMessage: `This restores the command keys and analog stick to their default assignments without changing your agent key mode or custom chat assignments`,
    description: `Explanation shown before resetting the Codex Micro keyboard layout`,
  }),
  cancel: i = (0, Ar.jsx)(J, {
    id: `settings.codexMicro.keyboardLayout.resetConfirmation.cancel`,
    defaultMessage: `Cancel`,
    description: `Button that cancels resetting the Codex Micro keyboard layout`,
  }),
  confirm: a = (0, Ar.jsx)(J, {
    id: `settings.codexMicro.keyboardLayout.resetConfirmation.confirm`,
    defaultMessage: `Reset layout`,
    description: `Button that confirms resetting the Codex Micro keyboard layout`,
  }),
}) {
  return (0, Ar.jsx)(te, {
    open: !0,
    showDialogClose: !1,
    size: `compact`,
    onOpenChange: (t) => {
      t || e();
    },
    children: (0, Ar.jsxs)(_, {
      as: `form`,
      onSubmit: (n) => {
        (n.preventDefault(), t(), e());
      },
      children: [
        (0, Ar.jsx)(ye, { className: `sr-only`, children: n }),
        (0, Ar.jsx)(y, { className: `sr-only`, children: r }),
        (0, Ar.jsx)(je, { children: (0, Ar.jsx)(ee, { title: n, subtitle: r }) }),
        (0, Ar.jsx)(je, {
          children: (0, Ar.jsxs)(w, {
            children: [
              (0, Ar.jsx)(ne, { color: `secondary`, onClick: e, children: i }),
              (0, Ar.jsx)(ne, { color: `danger`, type: `submit`, children: a }),
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
    (R(), V(), v(), g(), (Ar = C()));
  }))();
}
function Mr(e) {
  let t = (0, Nr.c)(11),
    { deviceName: n, onClose: r, onConfirm: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (0, Pr.jsx)(J, {
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
    : ((o = (0, Pr.jsx)(J, {
        id: `settings.codexMicro.connection.removeConfirmation.description`,
        defaultMessage: `This removes {deviceName} from ChatGPT without changing its preferences, custom chat assignments, or Bluetooth pairing. Reconnect the device to add it again.`,
        description: `Explanation shown before removing an unavailable Codex Micro or Creator Micro connection from ChatGPT`,
        values: { deviceName: n },
      })),
      (t[2] = n),
      (t[3] = o));
  let s, c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Pr.jsx)(J, {
        id: `settings.codexMicro.connection.removeConfirmation.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels removing an unavailable Codex Micro or Creator Micro connection`,
      })),
      (c = (0, Pr.jsx)(J, {
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
    ((Nr = A()), R(), jr(), (Pr = C()));
  }))();
}
function Ir(e) {
  let t = (0, Ur.c)(11),
    n = o(M),
    { data: r, isLoading: i } = Et(),
    a = r === void 0 ? [] : r,
    s = se(ot),
    c;
  t[0] === s ? (c = t[1]) : ((c = Zt(s)), (t[0] = s), (t[1] = c));
  let l = se(c),
    { remoteConnections: u } = tt(),
    d = Nt(u) ?? [],
    { data: f } = se(bt),
    p = se(en),
    m;
  t[2] === e ? (m = t[3]) : ((m = e.trim()), (t[2] = e), (t[3] = m));
  let h = m,
    g = xt(h, Kr),
    _ = [B, ...d.map(Vr).sort(Br)],
    { data: v, isFetching: y } = E({
      queryKey: [`codex-micro-custom-thread-search`, _, g],
      queryFn: async () =>
        (await Promise.allSettled(_.map((e) => He(n, e).searchThreads({ query: g, limit: Gr })))).flatMap(zr),
      enabled: g.length > 0,
      staleTime: Me.THIRTY_SECONDS,
    }),
    b = g === h,
    x = se(
      Ve({
        cloudTasks: [...(f ?? []), ...l.flatMap(Rr)],
        conversationsMeta: [...a, ...l.flatMap(Lr)],
        hostIds: new Set([..._, ke]),
        projectLabelByThreadKey: p,
      }),
    ),
    S = b ? v : void 0,
    C;
  t[4] !== x || t[5] !== S || t[6] !== h
    ? ((C = Hr({ asyncResults: S, loadedResults: x, query: h, limit: Gr })),
      (t[4] = x),
      (t[5] = S),
      (t[6] = h),
      (t[7] = C))
    : (C = t[7]);
  let w = C,
    T = i || (h.length > 0 && (!b || y)),
    D;
  return (
    t[8] !== w || t[9] !== T
      ? ((D = { loading: T, options: w }), (t[8] = w), (t[9] = T), (t[10] = D))
      : (D = t[10]),
    D
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
  let i = (0, Wr.default)(t, pt);
  return (
    r.length === 0
      ? [...i].sort((e, t) => t.updatedAt - e.updatedAt).slice(0, n)
      : Fe({ asyncResults: e ?? [], loadedChatSearchResults: i, limit: n, query: r })
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
    ((Ur = A()),
      le(),
      (Wr = t(u(), 1)),
      H(),
      we(),
      Ye(),
      Xe(),
      Jt(),
      ut(),
      Ke(),
      s(),
      $e(),
      ft(),
      Ot(),
      l(),
      qe(),
      (Gr = 30),
      (Kr = 150));
  }))();
}
function Jr(e) {
  let t = (0, $r.c)(103),
    { agentKeyId: r, commands: i, skills: s, onOpenChange: c } = e,
    l = o(M),
    u = ve(),
    d = se(En) ?? wn,
    p = d[r],
    [m, h] = (0, ei.useState)(
      p == null || `threadKey` in p ? `chat` : p.type === `command` ? `shortcut` : p.type,
    ),
    [g, v] = (0, ei.useState)(``),
    b;
  t[0] === g ? (b = t[1]) : ((b = g.trim()), (t[0] = g), (t[1] = b));
  let x = b,
    { loading: C, options: T } = Ir(m === `chat` ? x : ``),
    E,
    D,
    O,
    k,
    A,
    j,
    N,
    P,
    I,
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
    t[3] !== m ||
    t[4] !== d ||
    t[5] !== T ||
    t[6] !== i ||
    t[7] !== u ||
    t[8] !== C ||
    t[9] !== c ||
    t[10] !== l ||
    t[11] !== g ||
    t[12] !== p ||
    t[13] !== s ||
    t[14] !== x
  ) {
    let e = [];
    bb0: switch (m) {
      case `chat`:
        break bb0;
      case `shortcut`:
        e = qn(i, x, u).map(Xr);
        break bb0;
      case `keycap`: {
        let n;
        (t[33] !== u || t[34] !== x
          ? ((n = (e) => {
              if (e.action.type === `custom-shortcut`) return [];
              let t = Qr(e, u);
              return x.length > 0 && ![e.id, t, ...fn(e)].some((e) => Tt(e, x) > 0)
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
            (t[33] = u),
            (t[34] = x),
            (t[35] = n))
          : (n = t[35]),
          (e = [{ id: m, label: u.formatMessage(ni.keycap), options: bn.flatMap(n) }]));
        break bb0;
      }
      case `skill`: {
        let n = Jn(s),
          r;
        (t[36] === x
          ? (r = t[37])
          : ((r = (e) => {
              let t = a(e),
                n = F(e);
              return x.length > 0 && ![e.name, t, n].some((e) => Tt(e, x) > 0)
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
            (t[36] = x),
            (t[37] = r)),
          (e = [{ id: m, label: u.formatMessage(ni.skill), options: n.flatMap(r) }]));
      }
    }
    e = e.filter(Yr);
    let o =
        p == null || !(`type` in p)
          ? null
          : p.type === `command`
            ? p.commandId
            : p.type === `skill`
              ? p.skillPath
              : p.keycapId,
      h;
    t[38] !== m || t[39] !== u
      ? ((h = u.formatMessage(
          {
            id: `settings.codexMicro.customAgent.search.labelByType`,
            defaultMessage: `Search {type, select, chat {chats} shortcut {shortcuts} keycap {keycaps} skill {skills} other {assignments}} to assign`,
            description: `Accessible label for searching Codex Micro agent-key assignments by assignment type`,
          },
          { type: m },
        )),
        (t[38] = m),
        (t[39] = u),
        (t[40] = h))
      : (h = t[40]);
    let b = h,
      w = de.indexOf(r) + 1,
      M;
    (t[41] !== r || t[42] !== c || t[43] !== l
      ? ((M = function (e) {
          (xn(l, r, e), c(!1));
        }),
        (t[41] = r),
        (t[42] = c),
        (t[43] = l),
        (t[44] = M))
      : (M = t[44]),
      (j = M),
      (A = te),
      (P = !0),
      (I = `wide`),
      (L = c),
      (k = _),
      (G = `max-h-[calc(100vh-4rem)] min-h-0 gap-0 overflow-hidden`));
    let ne;
    t[45] === w
      ? (ne = t[46])
      : ((ne = (0, Q.jsx)(ye, {
          children: (0, Q.jsx)(J, {
            id: `settings.codexMicro.customAgent.title`,
            defaultMessage: `Assign agent key {position}`,
            description: `Title of the dialog for assigning a task to a numbered physical Agent Key on the Codex Micro hardware keypad`,
            values: { position: w },
          }),
        })),
        (t[45] = w),
        (t[46] = ne));
    let K;
    (t[47] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((K = (0, Q.jsx)(y, {
          children: (0, Q.jsx)(J, {
            id: `settings.codexMicro.customAgent.description`,
            defaultMessage: `Choose a chat, shortcut, keycap, or skill for this key`,
            description: `Description of the Codex Micro custom agent-key assignment dialog`,
          }),
        })),
        (t[47] = K))
      : (K = t[47]),
      t[48] === ne
        ? (N = t[49])
        : ((N = (0, Q.jsx)(je, { children: (0, Q.jsx)(ee, { title: ne, subtitle: K }) })),
          (t[48] = ne),
          (t[49] = N)),
      (O = je),
      (W = `min-h-0 flex-1`),
      (D = at),
      (B = !1),
      (V = b),
      (H = `min-h-0 overflow-hidden rounded-lg`));
    let q;
    (t[50] !== m || t[51] !== u
      ? ((q = u.formatMessage(
          {
            id: `settings.codexMicro.customAgent.search.placeholderByType`,
            defaultMessage: `Search {type, select, chat {chats} shortcut {shortcuts} keycap {keycaps} skill {skills} other {assignments}}`,
            description: `Placeholder for searching Codex Micro agent-key assignments by assignment type`,
          },
          { type: m },
        )),
        (t[50] = m),
        (t[51] = u),
        (t[52] = q))
      : (q = t[52]),
      t[53] !== g || t[54] !== b || t[55] !== q
        ? ((U = (0, Q.jsx)(at.Input, {
            autoFocus: !0,
            "aria-label": b,
            placeholder: q,
            value: g,
            onValueChange: v,
          })),
          (t[53] = g),
          (t[54] = b),
          (t[55] = q),
          (t[56] = U))
        : (U = t[56]),
      (E = at.List),
      (R = `max-h-[min(360px,50vh)]!`),
      (z =
        m === `chat` && C
          ? (0, Q.jsx)(`div`, {
              className: `flex h-24 items-center justify-center text-secondary`,
              children: (0, Q.jsx)(n, { className: `icon-xs` }),
            })
          : m === `chat` && T.length === 0
            ? (0, Q.jsx)(at.Empty, {
                children: (0, Q.jsx)(J, {
                  id: `settings.codexMicro.customAgent.search.empty`,
                  defaultMessage: `No active chats found`,
                  description: `Empty state for the Codex Micro custom agent-key task search`,
                }),
              })
            : m === `chat`
              ? (0, Q.jsx)(at.Group, {
                  heading: (0, Q.jsx)(`span`, {
                    className: `block px-2 pt-2 text-sm text-codex-description`,
                    children:
                      x.length === 0
                        ? (0, Q.jsx)(J, {
                            id: `settings.codexMicro.customAgent.recent`,
                            defaultMessage: `Recent chats`,
                            description: `Heading for recent tasks in the Codex Micro custom assignment dialog`,
                          })
                        : (0, Q.jsx)(J, {
                            id: `settings.codexMicro.customAgent.results`,
                            defaultMessage: `Search results`,
                            description: `Heading for task search results in the Codex Micro custom assignment dialog`,
                          }),
                  }),
                  children: T.map((e) => {
                    let { assignment: t, result: n } = e,
                      { threadKey: i } = t,
                      a = pt(n),
                      o = de.find((e) => {
                        let n = d[e];
                        return n != null && `threadKey` in n && n.threadKey === i && n.hostId === t.hostId;
                      }),
                      s = o == null ? null : de.indexOf(o) + 1,
                      c =
                        n.title ??
                        u.formatMessage({
                          id: `settings.codexMicro.customAgent.untitled`,
                          defaultMessage: `Untitled chat`,
                          description: `Fallback title for an untitled task in the Codex Micro custom assignment dialog`,
                        }),
                      l =
                        n.kind === `local`
                          ? (n.projectLabel ?? n.cwd)
                          : (n.projectLabel ?? n.environmentLabel);
                    return (0, Q.jsx)(
                      ze,
                      {
                        value: a,
                        title: c,
                        description: l,
                        titleTooltipContent: c,
                        descriptionTooltipContent: l,
                        LeftIcon: Lt,
                        rightAccessory:
                          o === r
                            ? (0, Q.jsx)(f, { className: `text-default`, "aria-hidden": !1, asset: Ae })
                            : s == null
                              ? null
                              : (0, Q.jsx)(`span`, {
                                  className: `text-xs text-secondary`,
                                  children: (0, Q.jsx)(J, {
                                    id: `settings.codexMicro.customAgent.assignedKey`,
                                    defaultMessage: `Key {position}`,
                                    description: `Label identifying the numbered physical Agent Key on the Codex Micro hardware keypad currently assigned to a task`,
                                    values: { position: s },
                                  }),
                                }),
                        onSelect: () => j(t),
                      },
                      a,
                    );
                  }),
                })
              : e.length === 0
                ? (0, Q.jsx)(at.Empty, {
                    children: (0, Q.jsx)(J, {
                      id: `settings.codexMicro.customAgent.actions.empty`,
                      defaultMessage: `No matching {type, select, shortcut {shortcuts} keycap {keycaps} skill {skills} other {actions}}`,
                      description: `Empty state when searching actions for a Codex Micro agent key`,
                      values: { type: m },
                    }),
                  })
                : e.map((e) =>
                    (0, Q.jsx)(
                      at.Group,
                      {
                        heading: (0, Q.jsx)(`span`, {
                          className: `block px-2 pt-2 text-sm text-codex-description`,
                          children: e.label,
                        }),
                        children: e.options.map((e) =>
                          (0, Q.jsx)(
                            ze,
                            {
                              value: e.value,
                              title: e.title,
                              description: e.description,
                              LeftIcon:
                                e.assignment.type === `skill`
                                  ? S
                                  : e.assignment.type === `command`
                                    ? sn
                                    : void 0,
                              leftAccessory:
                                e.keycap == null
                                  ? void 0
                                  : (0, Q.jsx)(Ln, { keycap: e.keycap, className: `icon-xs shrink-0` }),
                              rightAccessory:
                                p != null && `type` in p && p.type === e.assignment.type && o === e.value
                                  ? (0, Q.jsx)(f, { className: `text-default`, "aria-hidden": !1, asset: Ae })
                                  : null,
                              onSelect: () => j(e.assignment),
                            },
                            e.value,
                          ),
                        ),
                      },
                      e.id,
                    ),
                  )),
      (t[2] = r),
      (t[3] = m),
      (t[4] = d),
      (t[5] = T),
      (t[6] = i),
      (t[7] = u),
      (t[8] = C),
      (t[9] = c),
      (t[10] = l),
      (t[11] = g),
      (t[12] = p),
      (t[13] = s),
      (t[14] = x),
      (t[15] = E),
      (t[16] = D),
      (t[17] = O),
      (t[18] = k),
      (t[19] = A),
      (t[20] = j),
      (t[21] = N),
      (t[22] = P),
      (t[23] = I),
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
    ((E = t[15]),
      (D = t[16]),
      (O = t[17]),
      (k = t[18]),
      (A = t[19]),
      (j = t[20]),
      (N = t[21]),
      (P = t[22]),
      (I = t[23]),
      (L = t[24]),
      (R = t[25]),
      (z = t[26]),
      (B = t[27]),
      (V = t[28]),
      (H = t[29]),
      (U = t[30]),
      (W = t[31]),
      (G = t[32]));
  let K;
  t[57] !== E || t[58] !== R || t[59] !== z
    ? ((K = (0, Q.jsx)(E, { className: R, children: z })), (t[57] = E), (t[58] = R), (t[59] = z), (t[60] = K))
    : (K = t[60]);
  let q;
  t[61] !== D || t[62] !== K || t[63] !== B || t[64] !== V || t[65] !== H || t[66] !== U
    ? ((q = (0, Q.jsxs)(D, { shouldFilter: B, label: V, className: H, children: [U, K] })),
      (t[61] = D),
      (t[62] = K),
      (t[63] = B),
      (t[64] = V),
      (t[65] = H),
      (t[66] = U),
      (t[67] = q))
    : (q = t[67]);
  let re;
  t[68] !== O || t[69] !== q || t[70] !== W
    ? ((re = (0, Q.jsx)(O, { className: W, children: q })),
      (t[68] = O),
      (t[69] = q),
      (t[70] = W),
      (t[71] = re))
    : (re = t[71]);
  let ie = ni[m],
    ae;
  t[72] === ie
    ? (ae = t[73])
    : ((ae = (0, Q.jsx)(Ue, { className: `w-36`, children: (0, Q.jsx)(J, { ...ie }) })),
      (t[72] = ie),
      (t[73] = ae));
  let oe;
  t[74] === m
    ? (oe = t[75])
    : ((oe = ti.map((e) =>
        (0, Q.jsx)(
          Ce.Item,
          {
            rightIcon:
              m === e ? (0, Q.jsx)(f, { className: `text-info`, "aria-hidden": !1, asset: Ae }) : null,
            onSelect: () => {
              (h(e), v(``));
            },
            children: (0, Q.jsx)(J, { ...ni[e] }),
          },
          e,
        ),
      )),
      (t[74] = m),
      (t[75] = oe));
  let ce;
  t[76] !== ae || t[77] !== oe
    ? ((ce = (0, Q.jsx)(`div`, {
        className: `me-auto`,
        children: (0, Q.jsx)(Ee, { align: `start`, side: `top`, triggerButton: ae, children: oe }),
      })),
      (t[76] = ae),
      (t[77] = oe),
      (t[78] = ce))
    : (ce = t[78]);
  let le;
  t[79] !== j || t[80] !== p
    ? ((le =
        p == null
          ? null
          : (0, Q.jsx)(ne, {
              color: `secondary`,
              onClick: () => j(null),
              children: (0, Q.jsx)(J, {
                id: `settings.codexMicro.customAgent.remove`,
                defaultMessage: `Remove assignment`,
                description: `Button that removes a custom Codex Micro agent-key assignment`,
              }),
            })),
      (t[79] = j),
      (t[80] = p),
      (t[81] = le))
    : (le = t[81]);
  let ue;
  t[82] === c ? (ue = t[83]) : ((ue = () => c(!1)), (t[82] = c), (t[83] = ue));
  let fe;
  t[84] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, Q.jsx)(J, {
        id: `settings.codexMicro.customAgent.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the Codex Micro custom agent-key assignment dialog`,
      })),
      (t[84] = fe))
    : (fe = t[84]);
  let pe;
  t[85] === ue
    ? (pe = t[86])
    : ((pe = (0, Q.jsx)(ne, { color: `ghost`, onClick: ue, children: fe })), (t[85] = ue), (t[86] = pe));
  let me;
  t[87] !== ce || t[88] !== le || t[89] !== pe
    ? ((me = (0, Q.jsx)(je, {
        children: (0, Q.jsxs)(w, { expandSingleButton: !1, children: [ce, le, pe] }),
      })),
      (t[87] = ce),
      (t[88] = le),
      (t[89] = pe),
      (t[90] = me))
    : (me = t[90]);
  let he;
  t[91] !== k || t[92] !== N || t[93] !== re || t[94] !== me || t[95] !== G
    ? ((he = (0, Q.jsxs)(k, { className: G, children: [N, re, me] })),
      (t[91] = k),
      (t[92] = N),
      (t[93] = re),
      (t[94] = me),
      (t[95] = G),
      (t[96] = he))
    : (he = t[96]);
  let ge;
  return (
    t[97] !== A || t[98] !== P || t[99] !== I || t[100] !== L || t[101] !== he
      ? ((ge = (0, Q.jsx)(A, { open: P, size: I, onOpenChange: L, children: he })),
        (t[97] = A),
        (t[98] = P),
        (t[99] = I),
        (t[100] = L),
        (t[101] = he),
        (t[102] = ge))
      : (ge = t[102]),
    ge
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
      let n = ln(e.action.command);
      return n == null ? e.action.command : Dn(n, t);
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
    (($r = A()),
      G(),
      st(),
      H(),
      we(),
      (ei = m()),
      R(),
      On(),
      ut(),
      Ze(),
      dt(),
      V(),
      v(),
      g(),
      K(),
      k(),
      ie(),
      kt(),
      an(),
      xe(),
      s(),
      _t(),
      ge(),
      Qn(),
      cn(),
      Sn(),
      Wn(),
      pn(),
      qr(),
      (Q = C()),
      (ti = [`chat`, `shortcut`, `keycap`, `skill`]),
      (ni = z({
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
    ? ((i = (0, oi.jsx)(J, { ...X.microphoneKey })),
      (a = (0, oi.jsx)(J, { ...X.microphoneKeyDescription })),
      (t[0] = i),
      (t[1] = a))
    : ((i = t[0]), (a = t[1]));
  let o = si[n],
    s;
  t[2] === o.label
    ? (s = t[3])
    : ((s = (0, oi.jsx)(Ue, { children: (0, oi.jsx)(J, { ...o.label }) })), (t[2] = o.label), (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = h.options.map((e) => {
        let t = si[e];
        return (0, oi.jsx)(
          Ce.Item,
          {
            allowWrap: !0,
            onSelect: () => r(e),
            children: (0, oi.jsxs)(`div`, {
              className: `flex min-w-0 flex-col gap-0.5`,
              children: [
                (0, oi.jsx)(`span`, { className: `truncate`, children: (0, oi.jsx)(J, { ...t.label }) }),
                (0, oi.jsx)(`span`, {
                  className: `text-sm text-secondary`,
                  children: (0, oi.jsx)(J, { ...t.description }),
                }),
              ],
            }),
          },
          e,
        );
      })),
      (t[4] = r),
      (t[5] = c));
  let l;
  return (
    t[6] !== s || t[7] !== c
      ? ((l = (0, oi.jsx)(Te, {
          label: i,
          description: a,
          control: (0, oi.jsx)(Ee, { align: `end`, contentWidth: `menuWide`, triggerButton: s, children: c }),
        })),
        (t[6] = s),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
var ai, oi, si;
function ci() {
  return (ci = e(() => {
    ((ai = A()),
      we(),
      R(),
      K(),
      Oe(),
      _t(),
      yr(),
      (oi = C()),
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
    t = ce.codexMicro;
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
    { codexMicro: n } = e,
    r = o(M),
    a = ve(),
    s = se(ct),
    l = se(zt),
    u = se(Mt),
    d = se(Yt),
    f = se(Ht),
    p = se(Xt),
    m = se(Cn),
    h = se(En) ?? wn,
    g = se(At),
    { platform: _ } = St(),
    v = oe(q.layout),
    y = oe(q.agentSource),
    b = oe(q.singleTapAgentKeys),
    x = oe(q.lightingBrightness),
    S = oe(q.lightingAutoOff),
    C;
  t[0] === v ? (C = t[1]) : ((C = mn(v)), (t[0] = v), (t[1] = C));
  let w = C,
    T;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { name: `automations.local` }), (t[2] = T))
    : (T = t[2]);
  let O = he(Kt, T).isCapable,
    k;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = { name: `automations.cloud` }), (t[3] = k))
    : (k = t[3]);
  let A = he(Kt, k).isCapable,
    ee = Re(`1372061905`),
    N = vt(),
    P = N ? w.voiceButtonMode : `push-to-talk`,
    F = d === `creator-micro-v2` ? `Creator Micro` : `Codex Micro`,
    I;
  t[4] !== A || t[5] !== s || t[6] !== p || t[7] !== ee || t[8] !== g || t[9] !== N || t[10] !== O
    ? ((I = un.filter(
        (e) =>
          (e.requiredAccess == null || s) &&
          (e.id !== `manageTasks` || O || A) &&
          (e.id !== `hotkeyWindow` || ee) &&
          (e.id !== `toggleSidebar` || g) &&
          (e.id !== `composer.captureAppshot` || p) &&
          (!Wt(e.id) || N),
      )),
      (t[4] = A),
      (t[5] = s),
      (t[6] = p),
      (t[7] = ee),
      (t[8] = g),
      (t[9] = N),
      (t[10] = O),
      (t[11] = I))
    : (I = t[11]);
  let L = I,
    { skills: te } = mt(),
    [R, z] = (0, ki.useState)(null),
    [B, V] = (0, ki.useState)(null),
    [H, U] = (0, ki.useState)(!1),
    W = _ === `macOS`,
    G;
  t[12] === n ? (G = t[13]) : ((G = () => n.getInputMonitoringPermissionStatus()), (t[12] = n), (t[13] = G));
  let K;
  t[14] !== W || t[15] !== G
    ? ((K = {
        enabled: W,
        queryFn: G,
        queryKey: Pn,
        refetchInterval: Fn,
        refetchIntervalInBackground: !0,
        refetchOnMount: `always`,
        staleTime: Me.FIVE_SECONDS,
      }),
      (t[14] = W),
      (t[15] = G),
      (t[16] = K))
    : (K = t[16]);
  let { data: re } = E(K),
    ie;
  t[17] === d
    ? (ie = t[18])
    : ((ie =
        d === `creator-micro-v2`
          ? (0, $.jsx)(J, { ...et.creatorMicro })
          : (0, $.jsx)(J, { ...tn(`codex-micro`) })),
      (t[17] = d),
      (t[18] = ie));
  let ae;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, $.jsx)(J, { ...X.connection })), (t[19] = ae))
    : (ae = t[19]);
  let ce;
  t[20] !== F || t[21] !== l.controlPlaneStatus || t[22] !== l.error || t[23] !== l.status
    ? ((ce =
        l.status === `error` || l.controlPlaneStatus === `unavailable`
          ? (0, $.jsx)(gi, { controlPlaneStatus: l.controlPlaneStatus, deviceName: F, error: l.error })
          : void 0),
      (t[20] = F),
      (t[21] = l.controlPlaneStatus),
      (t[22] = l.error),
      (t[23] = l.status),
      (t[24] = ce))
    : (ce = t[24]);
  let le;
  t[25] !== l.controlPlaneStatus || t[26] !== l.error || t[27] !== l.status
    ? ((le = (0, $.jsx)(mi, { controlPlaneStatus: l.controlPlaneStatus, error: l.error, status: l.status })),
      (t[25] = l.controlPlaneStatus),
      (t[26] = l.error),
      (t[27] = l.status),
      (t[28] = le))
    : (le = t[28]);
  let de;
  t[29] !== u || t[30] !== F || t[31] !== r
    ? ((de = u
        ? (0, $.jsx)(ne, {
            color: `danger`,
            size: `toolbar`,
            onClick: () => {
              Pe(r, Mr, {
                deviceName: F,
                onConfirm: () => {
                  r.get(Mt) && rn(r);
                },
              });
            },
            children: (0, $.jsx)(J, {
              id: `settings.codexMicro.connection.remove`,
              defaultMessage: `Remove`,
              description: `Button that removes an unavailable Codex Micro or Creator Micro connection from Codex`,
            }),
          })
        : null),
      (t[29] = u),
      (t[30] = F),
      (t[31] = r),
      (t[32] = de))
    : (de = t[32]);
  let me;
  t[33] !== le || t[34] !== de
    ? ((me = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [le, de] })),
      (t[33] = le),
      (t[34] = de),
      (t[35] = me))
    : (me = t[35]);
  let ge;
  t[36] !== ce || t[37] !== me
    ? ((ge = (0, $.jsx)(Te, { label: ae, description: ce, control: me })),
      (t[36] = ce),
      (t[37] = me),
      (t[38] = ge))
    : (ge = t[38]);
  let _e;
  t[39] !== l.battery || t[40] !== l.status
    ? ((_e =
        l.status === `connected` && l.battery != null
          ? (0, $.jsx)(Te, {
              label: (0, $.jsx)(J, {
                id: `settings.codexMicro.battery`,
                defaultMessage: `Battery`,
                description: `Label for the Codex Micro battery status`,
              }),
              control: (0, $.jsx)(We, { ...l.battery }),
            })
          : null),
      (t[39] = l.battery),
      (t[40] = l.status),
      (t[41] = _e))
    : (_e = t[41]);
  let ye;
  t[42] !== n || t[43] !== F || t[44] !== re || t[45] !== _
    ? ((ye =
        _ === `macOS`
          ? (0, $.jsx)(Te, {
              label: (0, $.jsx)(J, { ...X.inputMonitoring }),
              description: (0, $.jsx)(J, {
                id: `settings.codexMicro.inputMonitoring.descriptionByDevice`,
                defaultMessage: `Required for {deviceName} key presses on macOS`,
                description: `Description for the macOS Input Monitoring permission state for Codex Micro or Creator Micro`,
                values: { deviceName: F },
              }),
              control: (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, $.jsx)(pi, { status: re }),
                  re === `denied`
                    ? (0, $.jsx)(ne, {
                        color: `secondary`,
                        onClick: () => {
                          n.openInputMonitoringSettings();
                        },
                        children: (0, $.jsx)(J, {
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
      (t[42] = n),
      (t[43] = F),
      (t[44] = re),
      (t[45] = _),
      (t[46] = ye))
    : (ye = t[46]);
  let be;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, $.jsx)(J, { ...X.lightingBrightness })), (t[47] = be))
    : (be = t[47]);
  let xe;
  t[48] === F
    ? (xe = t[49])
    : ((xe = (0, $.jsx)(J, { ...X.lightingBrightnessDescription, values: { deviceName: F } })),
      (t[48] = F),
      (t[49] = xe));
  let Se;
  t[50] === r
    ? (Se = t[51])
    : ((Se = (e) => {
        fe(r, q.lightingBrightness, e);
      }),
      (t[50] = r),
      (t[51] = Se));
  let we;
  t[52] !== x || t[53] !== Se
    ? ((we = (0, $.jsx)(fi, { value: x, onChange: Se })), (t[52] = x), (t[53] = Se), (t[54] = we))
    : (we = t[54]);
  let De;
  t[55] !== xe || t[56] !== we
    ? ((De = (0, $.jsx)(Te, { label: be, description: xe, control: we })),
      (t[55] = xe),
      (t[56] = we),
      (t[57] = De))
    : (De = t[57]);
  let Oe;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, $.jsx)(J, { ...X.lightingAutoOff })), (t[58] = Oe))
    : (Oe = t[58]);
  let ke;
  t[59] === F
    ? (ke = t[60])
    : ((ke = (0, $.jsx)(J, { ...X.lightingAutoOffDescription, values: { deviceName: F } })),
      (t[59] = F),
      (t[60] = ke));
  let Ae = ji[S],
    je;
  t[61] === Ae
    ? (je = t[62])
    : ((je = (0, $.jsx)(Ue, { className: `w-42!`, children: (0, $.jsx)(J, { ...Ae }) })),
      (t[61] = Ae),
      (t[62] = je));
  let Ne;
  t[63] === r
    ? (Ne = t[64])
    : ((Ne = j.options.map((e) =>
        (0, $.jsx)(
          Ce.Item,
          {
            onSelect: () => {
              fe(r, q.lightingAutoOff, e);
            },
            children: (0, $.jsx)(J, { ...ji[e] }),
          },
          e,
        ),
      )),
      (t[63] = r),
      (t[64] = Ne));
  let Fe;
  t[65] !== je || t[66] !== Ne
    ? ((Fe = (0, $.jsx)(Ee, { align: `end`, contentWidth: `xs`, triggerButton: je, children: Ne })),
      (t[65] = je),
      (t[66] = Ne),
      (t[67] = Fe))
    : (Fe = t[67]);
  let Ie;
  t[68] !== ke || t[69] !== Fe
    ? ((Ie = (0, $.jsx)(Te, { label: Oe, description: ke, control: Fe })),
      (t[68] = ke),
      (t[69] = Fe),
      (t[70] = Ie))
    : (Ie = t[70]);
  let Le;
  t[71] !== ge || t[72] !== _e || t[73] !== ye || t[74] !== De || t[75] !== Ie
    ? ((Le = (0, $.jsx)(Gt, {
        children: (0, $.jsx)(Gt.Content, { children: (0, $.jsxs)(i, { children: [ge, _e, ye, De, Ie] }) }),
      })),
      (t[71] = ge),
      (t[72] = _e),
      (t[73] = ye),
      (t[74] = De),
      (t[75] = Ie),
      (t[76] = Le))
    : (Le = t[76]);
  let ze;
  t[77] === r
    ? (ze = t[78])
    : ((ze = () => {
        Pe(r, kr, {
          onConfirm: () => {
            fe(r, q.layout, c);
          },
        });
      }),
      (t[77] = r),
      (t[78] = ze));
  let Be;
  t[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (0, $.jsx)(J, {
        id: `settings.codexMicro.keyboardLayout.reset`,
        defaultMessage: `Reset layout`,
        description: `Button that restores the default Codex Micro action-key layout`,
      })),
      (t[79] = Be))
    : (Be = t[79]);
  let Ve;
  t[80] === ze
    ? (Ve = t[81])
    : ((Ve = (0, $.jsx)(ne, { color: `ghost`, size: `toolbar`, onClick: ze, children: Be })),
      (t[80] = ze),
      (t[81] = Ve));
  let He;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (0, $.jsx)(J, { ...X.keyboardLayout })), (t[82] = He))
    : (He = t[82]);
  let Ge;
  t[83] === Ve
    ? (Ge = t[84])
    : ((Ge = (0, $.jsx)(Gt.Header, { actions: Ve, title: He })), (t[83] = Ve), (t[84] = Ge));
  let Ke = y === `custom` ? h : void 0,
    qe = y === `custom` ? V : void 0,
    Je,
    Ye;
  t[85] !== w || t[86] !== r
    ? ((Je = (e, t) => {
        fe(r, q.layout, yn(w, e, t));
      }),
      (Ye = (e, t) => {
        fe(r, q.layout, dn(w, e, t));
      }),
      (t[85] = w),
      (t[86] = r),
      (t[87] = Je),
      (t[88] = Ye))
    : ((Je = t[87]), (Ye = t[88]));
  let Xe, Ze;
  t[89] === r
    ? ((Xe = t[90]), (Ze = t[91]))
    : ((Xe = (e) => {
        Ft(r, e);
      }),
      (Ze = (e) => {
        Dt(r, e);
      }),
      (t[89] = r),
      (t[90] = Xe),
      (t[91] = Ze));
  let Qe;
  t[92] !== m ||
  t[93] !== L ||
  t[94] !== F ||
  t[95] !== H ||
  t[96] !== w ||
  t[97] !== f ||
  t[98] !== te ||
  t[99] !== Ke ||
  t[100] !== qe ||
  t[101] !== Je ||
  t[102] !== Ye ||
  t[103] !== Xe ||
  t[104] !== Ze ||
  t[105] !== P
    ? ((Qe = (0, $.jsx)(Gt.Content, {
        children: (0, $.jsx)(i, {
          children: (0, $.jsx)(bi, {
            agentSlots: m,
            commands: L,
            customAgentAssignments: Ke,
            deviceName: F,
            isEncoderEditorOpen: H,
            layout: w,
            previewState: f,
            skills: te,
            voiceButtonMode: P,
            onEditSlot: z,
            onEditAgentKey: qe,
            onEncoderEditorOpenChange: U,
            onSetAnalogAction: Je,
            onSetEncoderAction: Ye,
            onSelectAnalogDirection: Xe,
            onSetAnalogEditorOpen: Ze,
          }),
        }),
      })),
      (t[92] = m),
      (t[93] = L),
      (t[94] = F),
      (t[95] = H),
      (t[96] = w),
      (t[97] = f),
      (t[98] = te),
      (t[99] = Ke),
      (t[100] = qe),
      (t[101] = Je),
      (t[102] = Ye),
      (t[103] = Xe),
      (t[104] = Ze),
      (t[105] = P),
      (t[106] = Qe))
    : (Qe = t[106]);
  let $e;
  t[107] !== Ge || t[108] !== Qe
    ? (($e = (0, $.jsxs)(Gt, { children: [Ge, Qe] })), (t[107] = Ge), (t[108] = Qe), (t[109] = $e))
    : ($e = t[109]);
  let tt;
  t[110] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((tt = (0, $.jsx)(Gt.Header, { title: (0, $.jsx)(J, { ...X.options }) })), (t[110] = tt))
    : (tt = t[110]);
  let nt, rt;
  t[111] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((nt = (0, $.jsx)(J, { ...X.agentKeys })),
      (rt = (0, $.jsx)(J, {
        id: `settings.codexMicro.agentKeys.description`,
        defaultMessage: `Choose what the six agent keys follow or trigger`,
        description: `Description for the Codex Micro agent-key task source setting`,
      })),
      (t[111] = nt),
      (t[112] = rt))
    : ((nt = t[111]), (rt = t[112]));
  let it = Ai[y],
    at;
  t[113] === it.label
    ? (at = t[114])
    : ((at = (0, $.jsx)(Ue, { children: (0, $.jsx)(J, { ...it.label }) })),
      (t[113] = it.label),
      (t[114] = at));
  let ot;
  t[115] === r
    ? (ot = t[116])
    : ((ot = ue.options.map((e) => {
        let t = Ai[e];
        return (0, $.jsx)(
          Ce.Item,
          {
            allowWrap: !0,
            onSelect: () => {
              (V(null), fe(r, q.agentSource, e));
            },
            children: (0, $.jsxs)(`div`, {
              className: `flex min-w-0 flex-col gap-0.5`,
              children: [
                (0, $.jsx)(`span`, { className: `truncate`, children: (0, $.jsx)(J, { ...t.label }) }),
                (0, $.jsx)(`span`, {
                  className: `text-sm text-secondary`,
                  children: (0, $.jsx)(J, { ...t.description }),
                }),
              ],
            }),
          },
          e,
        );
      })),
      (t[115] = r),
      (t[116] = ot));
  let st;
  t[117] !== at || t[118] !== ot
    ? ((st = (0, $.jsx)(Te, {
        label: nt,
        description: rt,
        control: (0, $.jsx)(Ee, { align: `end`, contentWidth: `menuWide`, triggerButton: at, children: ot }),
      })),
      (t[117] = at),
      (t[118] = ot),
      (t[119] = st))
    : (st = t[119]);
  let lt, ut;
  t[120] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, $.jsx)(J, { ...X.knob })),
      (ut = (0, $.jsx)(J, { ...X.knobDescription })),
      (t[120] = lt),
      (t[121] = ut))
    : ((lt = t[120]), (ut = t[121]));
  let dt = Mi[w.encoderMode],
    ft;
  t[122] === dt.label
    ? (ft = t[123])
    : ((ft = (0, $.jsx)(Ue, { children: (0, $.jsx)(J, { ...dt.label }) })),
      (t[122] = dt.label),
      (t[123] = ft));
  let pt;
  t[124] !== w || t[125] !== r
    ? ((pt = D.options.map((e) => {
        let t = Mi[e];
        return (0, $.jsx)(
          Ce.Item,
          {
            allowWrap: !0,
            onSelect: () => {
              (U(e === `custom`), fe(r, q.layout, { ...w, encoderMode: e }));
            },
            children: (0, $.jsxs)(`div`, {
              className: `flex min-w-0 flex-col gap-0.5`,
              children: [
                (0, $.jsx)(`span`, { className: `truncate`, children: (0, $.jsx)(J, { ...t.label }) }),
                (0, $.jsx)(`span`, {
                  className: `text-sm text-secondary`,
                  children: (0, $.jsx)(J, { ...t.description }),
                }),
              ],
            }),
          },
          e,
        );
      })),
      (t[124] = w),
      (t[125] = r),
      (t[126] = pt))
    : (pt = t[126]);
  let gt;
  t[127] !== ft || t[128] !== pt
    ? ((gt = (0, $.jsx)(Te, {
        label: lt,
        description: ut,
        control: (0, $.jsx)(Ee, { align: `end`, contentWidth: `menuWide`, triggerButton: ft, children: pt }),
      })),
      (t[127] = ft),
      (t[128] = pt),
      (t[129] = gt))
    : (gt = t[129]);
  let _t;
  t[130] !== N || t[131] !== w || t[132] !== r
    ? ((_t = N
        ? (0, $.jsx)(ii, {
            mode: w.voiceButtonMode,
            onChange: (e) => {
              fe(r, q.layout, { ...w, voiceButtonMode: e });
            },
          })
        : null),
      (t[130] = N),
      (t[131] = w),
      (t[132] = r),
      (t[133] = _t))
    : (_t = t[133]);
  let yt, bt;
  t[134] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((yt = (0, $.jsx)(J, { ...X.separateMicrophoneKeys })),
      (bt = (0, $.jsx)(J, { ...X.separateMicrophoneKeysDescription })),
      (t[134] = yt),
      (t[135] = bt))
    : ((yt = t[134]), (bt = t[135]));
  let xt = w.separateMicrophoneKeys,
    Ct;
  t[136] === a
    ? (Ct = t[137])
    : ((Ct = a.formatMessage(X.separateMicrophoneKeys)), (t[136] = a), (t[137] = Ct));
  let wt;
  t[138] !== w || t[139] !== r
    ? ((wt = (e) => {
        fe(r, q.layout, { ...w, separateMicrophoneKeys: e });
      }),
      (t[138] = w),
      (t[139] = r),
      (t[140] = wt))
    : (wt = t[140]);
  let Tt;
  t[141] !== w.separateMicrophoneKeys || t[142] !== Ct || t[143] !== wt
    ? ((Tt = (0, $.jsx)(Te, {
        label: yt,
        description: bt,
        control: (0, $.jsx)(pe, { checked: xt, ariaLabel: Ct, onChange: wt }),
      })),
      (t[141] = w.separateMicrophoneKeys),
      (t[142] = Ct),
      (t[143] = wt),
      (t[144] = Tt))
    : (Tt = t[144]);
  let Et, Ot;
  t[145] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Et = (0, $.jsx)(J, { ...X.singleTapAgentKeys })),
      (Ot = (0, $.jsx)(J, { ...X.singleTapAgentKeysDescription })),
      (t[145] = Et),
      (t[146] = Ot))
    : ((Et = t[145]), (Ot = t[146]));
  let kt;
  t[147] === a ? (kt = t[148]) : ((kt = a.formatMessage(X.singleTapAgentKeys)), (t[147] = a), (t[148] = kt));
  let jt;
  t[149] === r
    ? (jt = t[150])
    : ((jt = (e) => {
        fe(r, q.singleTapAgentKeys, e);
      }),
      (t[149] = r),
      (t[150] = jt));
  let Nt;
  t[151] !== b || t[152] !== kt || t[153] !== jt
    ? ((Nt = (0, $.jsx)(Te, {
        label: Et,
        description: Ot,
        control: (0, $.jsx)(pe, { checked: b, ariaLabel: kt, onChange: jt }),
      })),
      (t[151] = b),
      (t[152] = kt),
      (t[153] = jt),
      (t[154] = Nt))
    : (Nt = t[154]);
  let Pt;
  t[155] !== st || t[156] !== gt || t[157] !== _t || t[158] !== Tt || t[159] !== Nt
    ? ((Pt = (0, $.jsxs)(Gt, {
        children: [
          tt,
          (0, $.jsx)(Gt.Content, { children: (0, $.jsxs)(i, { children: [st, gt, _t, Tt, Nt] }) }),
        ],
      })),
      (t[155] = st),
      (t[156] = gt),
      (t[157] = _t),
      (t[158] = Tt),
      (t[159] = Nt),
      (t[160] = Pt))
    : (Pt = t[160]);
  let It;
  t[161] !== L || t[162] !== R || t[163] !== w || t[164] !== r || t[165] !== te || t[166] !== P
    ? ((It =
        R == null
          ? null
          : (0, $.jsx)(
              yi,
              {
                commands: L,
                layout: w,
                skills: te,
                slotId: R,
                voiceButtonMode: P,
                onOpenChange: (e) => {
                  e || z(null);
                },
                onSave: (e) => {
                  fe(r, q.layout, hn(w, R, e)).then(() => {
                    z(null);
                  });
                },
              },
              R,
            )),
      (t[161] = L),
      (t[162] = R),
      (t[163] = w),
      (t[164] = r),
      (t[165] = te),
      (t[166] = P),
      (t[167] = It))
    : (It = t[167]);
  let Lt;
  t[168] !== y || t[169] !== L || t[170] !== B || t[171] !== te
    ? ((Lt =
        y === `custom` && B != null
          ? (0, $.jsx)(
              Jr,
              {
                agentKeyId: B,
                commands: L,
                skills: te,
                onOpenChange: (e) => {
                  e || V(null);
                },
              },
              B,
            )
          : null),
      (t[168] = y),
      (t[169] = L),
      (t[170] = B),
      (t[171] = te),
      (t[172] = Lt))
    : (Lt = t[172]);
  let Rt;
  return (
    t[173] !== Le || t[174] !== $e || t[175] !== Pt || t[176] !== It || t[177] !== Lt || t[178] !== ie
      ? ((Rt = (0, $.jsxs)(ht, { title: ie, children: [Le, $e, Pt, It, Lt] })),
        (t[173] = Le),
        (t[174] = $e),
        (t[175] = Pt),
        (t[176] = It),
        (t[177] = Lt),
        (t[178] = ie),
        (t[179] = Rt))
      : (Rt = t[179]),
    Rt
  );
}
function fi(e) {
  let t = (0, Oi.c)(17),
    { value: n, onChange: r } = e,
    i = ve(),
    a;
  t[0] !== i || t[1] !== n
    ? ((a = i.formatNumber(n / 100, { style: `percent` })), (t[0] = i), (t[1] = n), (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] === i ? (s = t[4]) : ((s = i.formatMessage(X.lightingBrightness)), (t[3] = i), (t[4] = s));
  let c;
  t[5] === r
    ? (c = t[6])
    : ((c = (e) => {
        r(Number(e.currentTarget.value));
      }),
      (t[5] = r),
      (t[6] = c));
  let l;
  t[7] !== o || t[8] !== s || t[9] !== c || t[10] !== n
    ? ((l = (0, $.jsx)(`input`, {
        "aria-label": s,
        "aria-valuetext": o,
        className: `h-0.5 flex-1 cursor-interaction appearance-none rounded-full bg-border text-default outline-none focus-visible:ring-2 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-transparent [&::-moz-range-thumb]:bg-current [&::-moz-range-thumb]:shadow-sm [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-transparent [&::-webkit-slider-thumb]:bg-current [&::-webkit-slider-thumb]:shadow-sm`,
        max: 100,
        min: 0,
        step: 10,
        type: `range`,
        value: n,
        onChange: c,
      })),
      (t[7] = o),
      (t[8] = s),
      (t[9] = c),
      (t[10] = n),
      (t[11] = l))
    : (l = t[11]);
  let u = n / 100,
    d;
  t[12] === u
    ? (d = t[13])
    : ((d = (0, $.jsx)(`span`, {
        className: `w-12 text-end text-sm text-secondary tabular-nums`,
        children: (0, $.jsx)(b, { style: `percent`, value: u }),
      })),
      (t[12] = u),
      (t[13] = d));
  let f;
  return (
    t[14] !== l || t[15] !== d
      ? ((f = (0, $.jsxs)(`div`, { className: `flex h-9 min-w-48 items-center gap-2.5`, children: [l, d] })),
        (t[14] = l),
        (t[15] = d),
        (t[16] = f))
      : (f = t[16]),
    f
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
              children: (0, $.jsx)(J, {
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
              children: (0, $.jsx)(J, {
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
              children: (0, $.jsx)(J, {
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
            ? (0, $.jsx)(J, { ...X.connectionControlUnavailable })
            : (0, $.jsx)(J, {
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
        ? ((e = (0, $.jsx)(J, {
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
        ? ((e = (0, $.jsx)(J, {
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
    ? ((l = T(`text-sm`, { "text-danger": s, "text-warning": a, "text-secondary": c })),
      (t[6] = a),
      (t[7] = s),
      (t[8] = c),
      (t[9] = l))
    : (l = t[9]);
  let u;
  return (
    t[10] !== o || t[11] !== l
      ? ((u = (0, $.jsx)(`span`, { className: l, children: o })), (t[10] = o), (t[11] = l), (t[12] = u))
      : (u = t[12]),
    u
  );
}
function hi(e) {
  let t = (0, Oi.c)(3),
    { error: n } = e;
  if (n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(J, { ...X.connectionProblem })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let r = Ni[n],
    i;
  return (
    t[1] === r.label ? (i = t[2]) : ((i = (0, $.jsx)(J, { ...r.label })), (t[1] = r.label), (t[2] = i)),
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
            children: (0, $.jsx)(J, {
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
              ? (0, $.jsx)(J, { ...X.connectionProblemDescription, values: { deviceName: r } })
              : (0, $.jsx)(J, { ...Ni[i].description, values: { deviceName: r } }),
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
                ? (0, $.jsx)(J, { ...X.microphoneKeyStartVoiceChat })
                : (0, $.jsx)(J, { ...X.microphoneKeyPushToTalk })),
            (t[4] = r),
            (t[5] = e)),
        e
      );
    }
    case `CODEX`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
          ? ((e = (0, $.jsx)(J, {
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
    o = ve(),
    s = i.action?.type === `skill` ? i.action : null,
    c = i.action?.type === `composer-text` ? i.action : null,
    l = i.action?.type === `command` ? i.action.commandId : i.commandId,
    u,
    d,
    f,
    p;
  if (t[0] !== l || t[1] !== c || t[2] !== s || t[3] !== o || t[4] !== n || t[5] !== r || t[6] !== a) {
    p = l == null ? null : ln(l);
    let e = p;
    (e == null && n.action.type === `command` && (e = ln(n.action.command)),
      (f = e == null ? null : kn(e, o).description));
    bb0: switch (n.action.type) {
      case `command`:
        u = null;
        break bb0;
      case `composer-text`: {
        let e;
        (t[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(J, {
              id: `settings.codexMicro.keycaps.composerText.description`,
              defaultMessage: `Available when a composer is active`,
              description: `Availability description for Codex Micro composer text keycaps`,
            })),
            (t[11] = e))
          : (e = t[11]),
          (u = e));
        break bb0;
      }
      case `custom-shortcut`: {
        let e;
        (t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(J, {
              id: `settings.codexMicro.keycaps.custom.description`,
              defaultMessage: `Choose a shortcut to assign`,
              description: `Description for an unassigned Codex Micro custom keycap`,
            })),
            (t[12] = e))
          : (e = t[12]),
          (u = e));
        break bb0;
      }
      case `external-url`: {
        let e;
        (t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(J, {
              id: `settings.codexMicro.keycaps.externalUrl.description`,
              defaultMessage: `Opens in your preferred browser`,
              description: `Description for a Codex Micro external URL keycap`,
            })),
            (t[13] = e))
          : (e = t[13]),
          (u = e));
        break bb0;
      }
      case `named`: {
        let e;
        (t[14] === a
          ? (e = t[15])
          : ((e =
              a === `realtime`
                ? (0, $.jsx)(J, { ...X.microphoneKeyVoiceChatDescription })
                : (0, $.jsx)(J, { ...X.microphoneKeyPushToTalkDescription })),
            (t[14] = a),
            (t[15] = e)),
          (u = e));
      }
    }
    if (c != null) {
      let e;
      (t[16] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(J, {
            id: `settings.codexMicro.keycaps.customComposerText`,
            defaultMessage: `Insert text`,
            description: `Codex Micro action label for a keycap assigned custom composer text`,
          })),
          (t[16] = e))
        : (e = t[16]),
        (d = e));
    } else if (s != null) {
      let e;
      (t[17] !== s || t[18] !== o || t[19] !== r
        ? ((e = jn(s, r, o)), (t[17] = s), (t[18] = o), (t[19] = r), (t[20] = e))
        : (e = t[20]),
        (d = e));
    } else if (p != null) d = Dn(p, o);
    else {
      let e;
      (t[21] !== n || t[22] !== a
        ? ((e = (0, $.jsx)(_i, { keycap: n, voiceButtonMode: a })), (t[21] = n), (t[22] = a), (t[23] = e))
        : (e = t[23]),
        (d = e));
    }
    ((t[0] = l),
      (t[1] = c),
      (t[2] = s),
      (t[3] = o),
      (t[4] = n),
      (t[5] = r),
      (t[6] = a),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p));
  } else ((u = t[7]), (d = t[8]), (f = t[9]), (p = t[10]));
  let m;
  if (c != null) {
    let e;
    (t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(J, {
          id: `settings.codexMicro.keycaps.customComposerText.description`,
          defaultMessage: `Adds custom text to the active prompt without sending it`,
          description: `Description for a Codex Micro keycap assigned custom composer text`,
        })),
        (t[24] = e))
      : (e = t[24]),
      (m = e));
  } else m = s == null ? (f ?? (p == null ? u : null)) : null;
  let h;
  t[25] === n ? (h = t[26]) : ((h = Di(n)), (t[25] = n), (t[26] = h));
  let g;
  t[27] === h
    ? (g = t[28])
    : ((g = (0, $.jsx)(`span`, { className: `font-mono text-xs font-semibold`, children: h })),
      (t[27] = h),
      (t[28] = g));
  let _;
  t[29] === d
    ? (_ = t[30])
    : ((_ = (0, $.jsx)(`span`, { className: `text-xs`, children: d })), (t[29] = d), (t[30] = _));
  let v;
  t[31] === m
    ? (v = t[32])
    : ((v = (0, $.jsx)(`span`, { className: `text-xs opacity-65`, children: m })), (t[31] = m), (t[32] = v));
  let y;
  return (
    t[33] !== g || t[34] !== _ || t[35] !== v
      ? ((y = (0, $.jsxs)(`div`, { className: `flex min-w-32 flex-col gap-0.5`, children: [g, _, v] })),
        (t[33] = g),
        (t[34] = _),
        (t[35] = v),
        (t[36] = y))
      : (y = t[36]),
    y
  );
}
function yi(e) {
  let t = (0, Oi.c)(112),
    { commands: n, layout: r, skills: a, slotId: o, voiceButtonMode: s, onOpenChange: c, onSave: l } = e,
    u = ve(),
    d = r.slots[o],
    [f, p] = (0, ki.useState)(d.keycapId),
    m;
  t[0] !== d.action || t[1] !== d.commandId
    ? ((m = d.action ?? (d.commandId == null ? void 0 : { type: `command`, commandId: d.commandId })),
      (t[0] = d.action),
      (t[1] = d.commandId),
      (t[2] = m))
    : (m = t[2]);
  let [h, g] = (0, ki.useState)(m),
    [v, b] = (0, ki.useState)(``),
    [x, S] = (0, ki.useState)(null),
    C;
  t[3] === f ? (C = t[4]) : ((C = vn(f)), (t[3] = f), (t[4] = C));
  let E = C,
    D,
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    I,
    R,
    z,
    B,
    V,
    H,
    U;
  if (
    t[5] !== u ||
    t[6] !== r ||
    t[7] !== c ||
    t[8] !== l ||
    t[9] !== v ||
    t[10] !== h ||
    t[11] !== E ||
    t[12] !== a ||
    t[13] !== o ||
    t[14] !== s
  ) {
    let e = h?.type === `command` ? ln(h.commandId) : null,
      n;
    (t[31] !== u || t[32] !== E.action.type
      ? ((n =
          E.action.type === `custom-shortcut`
            ? u.formatMessage({
                id: `settings.codexMicro.editor.customShortcut.none`,
                defaultMessage: `Unassigned`,
                description: `Dropdown option that clears a Codex Micro keycap command`,
              })
            : u.formatMessage({
                id: `settings.codexMicro.editor.customShortcut.useDefault`,
                defaultMessage: `Use keycap default`,
                description: `Dropdown option that restores a Codex Micro keycap's predefined action`,
              })),
        (t[31] = u),
        (t[32] = E.action.type),
        (t[33] = n))
      : (n = t[33]),
      (A = n));
    let i = gn(o),
      d;
    t[34] === v ? (d = t[35]) : ((d = (e) => Ei(e, v)), (t[34] = v), (t[35] = d));
    let f = i.filter(d),
      m = li(r);
    if (h?.type === `composer-text`) {
      let e;
      (t[36] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(J, {
            id: `settings.codexMicro.editor.action.insertText.description`,
            defaultMessage: `Add text to the active prompt without sending it`,
            description: `Description of the custom composer text action for a Codex Micro keycap`,
          })),
          (t[36] = e))
        : (e = t[36]),
        (j = e));
    } else if (h?.type === `skill`) {
      let e;
      (t[37] !== u || t[38] !== h || t[39] !== a
        ? ((e = jn(h, a, u)), (t[37] = u), (t[38] = h), (t[39] = a), (t[40] = e))
        : (e = t[40]),
        (j = e));
    } else if (e != null) j = Dn(e, u);
    else if (E.action.type === `custom-shortcut`) {
      let e;
      (t[41] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(J, {
            id: `settings.codexMicro.editor.customShortcut.unassigned`,
            defaultMessage: `Unassigned`,
            description: `Label shown when a Codex Micro keycap has no command assigned`,
          })),
          (t[41] = e))
        : (e = t[41]),
        (j = e));
    } else {
      let e;
      (t[42] !== E || t[43] !== s
        ? ((e = (0, $.jsx)(J, {
            id: `settings.codexMicro.editor.customShortcut.defaultAction`,
            defaultMessage: `Keycap default: {action}`,
            description: `Description shown when a Codex Micro keycap uses its predefined action`,
            values: { action: (0, $.jsx)(_i, { keycap: E, voiceButtonMode: s }, `action`) },
          })),
          (t[42] = E),
          (t[43] = s),
          (t[44] = e))
        : (e = t[44]),
        (j = e));
    }
    ((k = te),
      (N = !0),
      (P = `wide`),
      (F = c),
      (O = _),
      (V = `form`),
      (H = `max-h-[calc(100vh-4rem)] min-h-0 gap-0 overflow-hidden`),
      t[45] !== l || t[46] !== h || t[47] !== e?.id || t[48] !== E.id
        ? ((U = (t) => {
            (t.preventDefault(),
              (h?.type !== `composer-text` || h.text.length !== 0) &&
                l({
                  keycapId: E.id,
                  commandId: e?.id,
                  action: h?.type === `skill` || h?.type === `composer-text` ? h : void 0,
                }));
          }),
          (t[45] = l),
          (t[46] = h),
          (t[47] = e?.id),
          (t[48] = E.id),
          (t[49] = U))
        : (U = t[49]));
    let x;
    (t[50] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((x = (0, $.jsx)(ye, {
          children: (0, $.jsx)(J, {
            id: `settings.codexMicro.editor.title`,
            defaultMessage: `Edit keycap`,
            description: `Title for the Codex Micro keycap slot editor`,
          }),
        })),
        (t[50] = x))
      : (x = t[50]),
      t[51] === o
        ? (M = t[52])
        : ((M = (0, $.jsx)(je, {
            children: (0, $.jsx)(ee, {
              title: x,
              subtitle: (0, $.jsx)(y, {
                children: (0, $.jsx)(J, {
                  id: `settings.codexMicro.editor.subtitle`,
                  defaultMessage: `Choose what appears on {slotId}`,
                  description: `Subtitle for the Codex Micro keycap slot editor`,
                  values: { slotId: o },
                }),
              }),
            }),
          })),
          (t[51] = o),
          (t[52] = M)),
      (D = je),
      (z = `flex min-h-0 flex-1 flex-col gap-3`));
    let S;
    t[53] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((S = (0, $.jsx)(L, { className: `icon-sm shrink-0 text-tertiary` })), (t[53] = S))
      : (S = t[53]);
    let C;
    t[54] === u
      ? (C = t[55])
      : ((C = u.formatMessage({
          id: `settings.codexMicro.editor.searchLabel`,
          defaultMessage: `Search keycaps`,
          description: `Accessible label for searching Codex Micro keycaps in the keycap editor`,
        })),
        (t[54] = u),
        (t[55] = C));
    let w;
    t[56] === u
      ? (w = t[57])
      : ((w = u.formatMessage({
          id: `settings.codexMicro.editor.searchPlaceholder`,
          defaultMessage: `Search keycaps`,
          description: `Placeholder for searching Codex Micro keycaps in the keycap editor`,
        })),
        (t[56] = u),
        (t[57] = w));
    let ne;
    (t[58] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ne = (e) => {
          b(e.currentTarget.value);
        }),
        (t[58] = ne))
      : (ne = t[58]),
      t[59] !== v || t[60] !== C || t[61] !== w
        ? ((B = (0, $.jsxs)(`div`, {
            className: `flex h-10 shrink-0 items-center gap-2 rounded-lg border border-primary-outline bg-background-primary-soft/75 px-3 text-sm text-default`,
            children: [
              S,
              (0, $.jsx)(`input`, {
                autoFocus: !0,
                className: `min-w-0 flex-1 bg-transparent outline-none placeholder:text-tertiary`,
                "aria-label": C,
                placeholder: w,
                value: v,
                onChange: ne,
              }),
            ],
          })),
          (t[59] = v),
          (t[60] = C),
          (t[61] = w),
          (t[62] = B))
        : (B = t[62]),
      (I = `vertical-scroll-fade-mask min-h-0 flex-1 overflow-y-auto px-1 pt-1 pb-1 [--edge-fade-distance:1rem]`),
      (R =
        f.length === 0
          ? (0, $.jsx)(`div`, {
              className: `flex min-h-28 items-center justify-center rounded-lg border border-default px-4 text-sm text-codex-description`,
              children: (0, $.jsx)(J, {
                id: `settings.codexMicro.editor.noKeycaps`,
                defaultMessage: `No matching keycaps`,
                description: `Empty state shown when keycap search returns no results`,
              }),
            })
          : (0, $.jsx)(`div`, {
              className: `grid grid-cols-[repeat(auto-fill,minmax(4.75rem,4.75rem))] justify-between gap-2`,
              children: f.map((e) => {
                let t = e.id === E.id,
                  n = m.find((t) => r.slots[t.slotId].keycapId === e.id);
                return (0, $.jsx)(
                  me,
                  {
                    delayOpen: !0,
                    tooltipContent: (0, $.jsx)(vi, {
                      keycap: e,
                      skills: a,
                      slot: n == null ? { keycapId: e.id } : r.slots[n.slotId],
                      voiceButtonMode: s,
                    }),
                    children: (0, $.jsxs)(`button`, {
                      type: `button`,
                      "aria-pressed": t,
                      className: T(
                        `cursor-interaction relative flex aspect-square w-[4.75rem] flex-col items-center justify-center gap-1.5 rounded-[0.8rem] border border-white/[0.86] bg-[#f7f5f1] px-2 py-2 text-[#171717] shadow-[inset_0_0_0_1px_rgba(228,228,228,0.68),0_1px_2px_rgba(79,72,63,0.18)] outline-none focus-visible:ring-2 focus-visible:ring-ring dark:border-white/[0.14] dark:bg-[#202127] dark:text-default dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.32)]`,
                        t
                          ? `border-chart-blue/60 bg-chart-blue/10 text-info ring-1 ring-chart-blue/40 dark:border-chart-blue/80 dark:bg-chart-blue/20 dark:ring-chart-blue/60 dark:text-info`
                          : null,
                      ),
                      onClick: () => {
                        if (t) return;
                        p(e.id);
                        let i = n == null ? null : r.slots[n.slotId];
                        g(
                          i?.action ??
                            (i?.commandId == null ? void 0 : { type: `command`, commandId: i.commandId }),
                        );
                      },
                      children: [
                        (0, $.jsx)(Ln, { keycap: e, className: `size-4` }),
                        (0, $.jsx)(`span`, { className: `font-mono text-[11px]`, children: Di(e) }),
                      ],
                    }),
                  },
                  e.id,
                );
              }),
            })),
      (t[5] = u),
      (t[6] = r),
      (t[7] = c),
      (t[8] = l),
      (t[9] = v),
      (t[10] = h),
      (t[11] = E),
      (t[12] = a),
      (t[13] = o),
      (t[14] = s),
      (t[15] = D),
      (t[16] = O),
      (t[17] = k),
      (t[18] = A),
      (t[19] = j),
      (t[20] = M),
      (t[21] = N),
      (t[22] = P),
      (t[23] = F),
      (t[24] = I),
      (t[25] = R),
      (t[26] = z),
      (t[27] = B),
      (t[28] = V),
      (t[29] = H),
      (t[30] = U));
  } else
    ((D = t[15]),
      (O = t[16]),
      (k = t[17]),
      (A = t[18]),
      (j = t[19]),
      (M = t[20]),
      (N = t[21]),
      (P = t[22]),
      (F = t[23]),
      (I = t[24]),
      (R = t[25]),
      (z = t[26]),
      (B = t[27]),
      (V = t[28]),
      (H = t[29]),
      (U = t[30]));
  let W;
  t[63] !== I || t[64] !== R
    ? ((W = (0, $.jsx)(`div`, { className: I, children: R })), (t[63] = I), (t[64] = R), (t[65] = W))
    : (W = t[65]);
  let G;
  t[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, $.jsx)(J, {
        id: `settings.codexMicro.editor.action.label`,
        defaultMessage: `Assigned action`,
        description: `Label for choosing the action assigned to a Codex Micro keycap`,
      })),
      (t[66] = G))
    : (G = t[66]);
  let K;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (e) => {
        S(e?.closest(`.codex-dialog`) ?? null);
      }),
      (t[67] = K))
    : (K = t[67]);
  let q;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, $.jsx)(Ue, {
        children: (0, $.jsx)(J, {
          id: `settings.codexMicro.editor.customShortcut.choose`,
          defaultMessage: `Choose`,
          description: `Button label for choosing the action assigned to a Codex Micro keycap`,
        }),
      })),
      (t[68] = q))
    : (q = t[68]);
  let re;
  t[69] !== n || t[70] !== x || t[71] !== A || t[72] !== h || t[73] !== a
    ? ((re = (0, $.jsx)(`div`, {
        ref: K,
        children: (0, $.jsx)(mr, {
          commands: n,
          noActionLabel: A,
          portalContainer: x,
          selectedAction: h,
          skills: a,
          triggerButton: q,
          onActionSelect: g,
        }),
      })),
      (t[69] = n),
      (t[70] = x),
      (t[71] = A),
      (t[72] = h),
      (t[73] = a),
      (t[74] = re))
    : (re = t[74]);
  let ie;
  t[75] !== j || t[76] !== re
    ? ((ie = (0, $.jsx)(Te, { label: G, description: j, control: re })),
      (t[75] = j),
      (t[76] = re),
      (t[77] = ie))
    : (ie = t[77]);
  let ae;
  t[78] !== u || t[79] !== h
    ? ((ae =
        h?.type === `composer-text`
          ? (0, $.jsx)(Te, {
              className: `max-sm:flex-col max-sm:items-stretch`,
              label: (0, $.jsx)(J, {
                id: `settings.codexMicro.editor.composerText.label`,
                defaultMessage: `Text to insert`,
                description: `Label for custom text assigned to a Codex Micro keycap`,
              }),
              description: (0, $.jsx)(J, {
                id: `settings.codexMicro.editor.composerText.description`,
                defaultMessage: `Stored in your local Codex settings`,
                description: `Explanation of where custom text assigned to a Codex Micro keycap is stored`,
              }),
              control: (e) =>
                (0, $.jsx)(`div`, {
                  className: `w-72 max-w-full max-sm:w-full`,
                  children: (0, $.jsx)(gt, {
                    ...e,
                    autoFocus: !0,
                    required: !0,
                    placeholder: u.formatMessage({
                      id: `settings.codexMicro.editor.composerText.placeholder`,
                      defaultMessage: `Enter text`,
                      description: `Placeholder for custom text assigned to a Codex Micro keycap`,
                    }),
                    rows: 3,
                    value: h.text,
                    variant: `settings`,
                    onChange: (e) => {
                      g({ type: `composer-text`, text: e.currentTarget.value });
                    },
                  }),
                }),
            })
          : null),
      (t[78] = u),
      (t[79] = h),
      (t[80] = ae))
    : (ae = t[80]);
  let oe;
  t[81] !== ie || t[82] !== ae
    ? ((oe = (0, $.jsxs)(i, { className: `shrink-0`, children: [ie, ae] })),
      (t[81] = ie),
      (t[82] = ae),
      (t[83] = oe))
    : (oe = t[83]);
  let se;
  t[84] !== D || t[85] !== W || t[86] !== oe || t[87] !== z || t[88] !== B
    ? ((se = (0, $.jsxs)(D, { className: z, children: [B, W, oe] })),
      (t[84] = D),
      (t[85] = W),
      (t[86] = oe),
      (t[87] = z),
      (t[88] = B),
      (t[89] = se))
    : (se = t[89]);
  let ce;
  t[90] === c
    ? (ce = t[91])
    : ((ce = () => {
        c(!1);
      }),
      (t[90] = c),
      (t[91] = ce));
  let le;
  t[92] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, $.jsx)(J, {
        id: `settings.codexMicro.editor.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the Codex Micro keycap slot editor`,
      })),
      (t[92] = le))
    : (le = t[92]);
  let ue;
  t[93] === ce
    ? (ue = t[94])
    : ((ue = (0, $.jsx)(ne, { type: `button`, color: `ghost`, onClick: ce, children: le })),
      (t[93] = ce),
      (t[94] = ue));
  let de;
  t[95] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, $.jsx)(ne, {
        color: `primary`,
        type: `submit`,
        children: (0, $.jsx)(J, {
          id: `settings.codexMicro.editor.save`,
          defaultMessage: `Save`,
          description: `Save button label for the Codex Micro keycap slot editor`,
        }),
      })),
      (t[95] = de))
    : (de = t[95]);
  let fe;
  t[96] === ue
    ? (fe = t[97])
    : ((fe = (0, $.jsx)(je, { children: (0, $.jsxs)(w, { children: [ue, de] }) })),
      (t[96] = ue),
      (t[97] = fe));
  let pe;
  t[98] !== O || t[99] !== M || t[100] !== se || t[101] !== fe || t[102] !== V || t[103] !== H || t[104] !== U
    ? ((pe = (0, $.jsxs)(O, { as: V, className: H, onSubmit: U, children: [M, se, fe] })),
      (t[98] = O),
      (t[99] = M),
      (t[100] = se),
      (t[101] = fe),
      (t[102] = V),
      (t[103] = H),
      (t[104] = U),
      (t[105] = pe))
    : (pe = t[105]);
  let he;
  return (
    t[106] !== k || t[107] !== N || t[108] !== P || t[109] !== F || t[110] !== pe
      ? ((he = (0, $.jsx)(k, { open: N, size: P, onOpenChange: F, children: pe })),
        (t[106] = k),
        (t[107] = N),
        (t[108] = P),
        (t[109] = F),
        (t[110] = pe),
        (t[111] = he))
      : (he = t[111]),
    he
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
    v = ve(),
    [y, b, x, S, C, w] = Pi,
    T;
  t[0] === c.pressedKeys
    ? (T = t[1])
    : ((T = c.pressedKeys.includes(`ENC_PRESS`)), (t[0] = c.pressedKeys), (t[1] = T));
  let E = T,
    D;
  t[2] !== r ||
  t[3] !== a ||
  t[4] !== o ||
  t[5] !== E ||
  t[6] !== s.encoder ||
  t[7] !== s.encoderMode ||
  t[8] !== p ||
  t[9] !== h ||
  t[10] !== c.knobPulse ||
  t[11] !== l
    ? ((D =
        s.encoderMode === `custom`
          ? (0, $.jsx)(br, {
              commands: r,
              deviceName: a,
              isPressed: E,
              mapping: s.encoder,
              open: o,
              pulse: c.knobPulse,
              skills: l,
              onActionChange: h,
              onOpenChange: p,
            })
          : (0, $.jsx)(Ci, { deviceName: a, isPressed: E, mode: s.encoderMode, pulse: c.knobPulse })),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = E),
      (t[6] = s.encoder),
      (t[7] = s.encoderMode),
      (t[8] = p),
      (t[9] = h),
      (t[10] = c.knobPulse),
      (t[11] = l),
      (t[12] = D))
    : (D = t[12]);
  let O;
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
    ? ((O = de.map((e, t) =>
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
              (0, $.jsx)(zn, {
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
      (t[26] = O))
    : (O = t[26]);
  let k = s.slots[y.slotId],
    A = y.slotId,
    j;
  t[27] === c.pressedKeys
    ? (j = t[28])
    : ((j = Ti(c.pressedKeys, y.keys)), (t[27] = c.pressedKeys), (t[28] = j));
  let M;
  t[29] !== f || t[30] !== l || t[31] !== k || t[32] !== j || t[33] !== u
    ? ((M = (0, $.jsx)(wi, {
        slot: k,
        slotId: A,
        isPressed: j,
        skills: l,
        voiceButtonMode: u,
        onEditSlot: f,
      })),
      (t[29] = f),
      (t[30] = l),
      (t[31] = k),
      (t[32] = j),
      (t[33] = u),
      (t[34] = M))
    : (M = t[34]);
  let ee = s.slots[b.slotId],
    N = b.slotId,
    P;
  t[35] === c.pressedKeys
    ? (P = t[36])
    : ((P = Ti(c.pressedKeys, b.keys)), (t[35] = c.pressedKeys), (t[36] = P));
  let F;
  t[37] !== f || t[38] !== l || t[39] !== P || t[40] !== ee || t[41] !== u
    ? ((F = (0, $.jsx)(wi, {
        slot: ee,
        slotId: N,
        isPressed: P,
        skills: l,
        voiceButtonMode: u,
        onEditSlot: f,
      })),
      (t[37] = f),
      (t[38] = l),
      (t[39] = P),
      (t[40] = ee),
      (t[41] = u),
      (t[42] = F))
    : (F = t[42]);
  let I = s.slots[x.slotId],
    L = x.slotId,
    te;
  t[43] === c.pressedKeys
    ? (te = t[44])
    : ((te = Ti(c.pressedKeys, x.keys)), (t[43] = c.pressedKeys), (t[44] = te));
  let R;
  t[45] !== f || t[46] !== l || t[47] !== I || t[48] !== te || t[49] !== u
    ? ((R = (0, $.jsx)(wi, {
        slot: I,
        slotId: L,
        isPressed: te,
        skills: l,
        voiceButtonMode: u,
        onEditSlot: f,
      })),
      (t[45] = f),
      (t[46] = l),
      (t[47] = I),
      (t[48] = te),
      (t[49] = u),
      (t[50] = R))
    : (R = t[50]);
  let ne = s.slots[S.slotId],
    z = S.slotId,
    B;
  t[51] === c.pressedKeys
    ? (B = t[52])
    : ((B = Ti(c.pressedKeys, S.keys)), (t[51] = c.pressedKeys), (t[52] = B));
  let V;
  t[53] !== f || t[54] !== l || t[55] !== ne || t[56] !== B || t[57] !== u
    ? ((V = (0, $.jsx)(wi, {
        slot: ne,
        slotId: z,
        isPressed: B,
        skills: l,
        voiceButtonMode: u,
        onEditSlot: f,
      })),
      (t[53] = f),
      (t[54] = l),
      (t[55] = ne),
      (t[56] = B),
      (t[57] = u),
      (t[58] = V))
    : (V = t[58]);
  let H;
  t[59] === Symbol.for(`react.memo_cache_sentinel`) ? ((H = (0, $.jsx)(Vn, {})), (t[59] = H)) : (H = t[59]);
  let U;
  t[60] !== s.separateMicrophoneKeys ||
  t[61] !== s.slots ||
  t[62] !== f ||
  t[63] !== c.pressedKeys ||
  t[64] !== l ||
  t[65] !== u
    ? ((U = s.separateMicrophoneKeys
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
      (t[66] = U))
    : (U = t[66]);
  let W = s.slots[w.slotId],
    G = w.slotId,
    K;
  t[67] === c.pressedKeys
    ? (K = t[68])
    : ((K = Ti(c.pressedKeys, w.keys)), (t[67] = c.pressedKeys), (t[68] = K));
  let q;
  t[69] !== f || t[70] !== l || t[71] !== W || t[72] !== K || t[73] !== u
    ? ((q = (0, $.jsx)(wi, {
        slot: W,
        slotId: G,
        isPressed: K,
        skills: l,
        voiceButtonMode: u,
        onEditSlot: f,
      })),
      (t[69] = f),
      (t[70] = l),
      (t[71] = W),
      (t[72] = K),
      (t[73] = u),
      (t[74] = q))
    : (q = t[74]);
  let re;
  return (
    t[75] !== F ||
    t[76] !== R ||
    t[77] !== V ||
    t[78] !== D ||
    t[79] !== U ||
    t[80] !== q ||
    t[81] !== O ||
    t[82] !== M
      ? ((re = (0, $.jsx)(`div`, {
          className: `flex justify-center px-4 py-5`,
          children: (0, $.jsxs)(In, { children: [D, O, M, F, R, V, H, U, q] }),
        })),
        (t[75] = F),
        (t[76] = R),
        (t[77] = V),
        (t[78] = D),
        (t[79] = U),
        (t[80] = q),
        (t[81] = O),
        (t[82] = M),
        (t[83] = re))
      : (re = t[83]),
    re
  );
}
function xi(e) {
  return e != null && `type` in e && e.type === `keycap` ? vn(e.keycapId) : void 0;
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
      : jn(e, t, n);
}
function Ci(e) {
  let t = (0, Oi.c)(33),
    { deviceName: n, isPressed: r, mode: i, pulse: a } = e,
    o = ve(),
    s = Mi[i],
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(`span`, {
        className: `text-xs font-semibold`,
        children: (0, $.jsx)(J, {
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
        children: (0, $.jsx)(J, { ...s.description }),
      })),
      (t[1] = s.description),
      (t[2] = l));
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(`dt`, {
        className: `font-medium whitespace-nowrap`,
        children: (0, $.jsx)(J, {
          id: `settings.codexMicro.keyboardLayout.knobTooltip.turnRight`,
          defaultMessage: `Turn right`,
          description: `Label for turning the Codex Micro encoder knob clockwise`,
        }),
      })),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] === s.turnRightAction
    ? (d = t[5])
    : ((d = (0, $.jsx)(`dd`, { className: `opacity-65`, children: (0, $.jsx)(J, { ...s.turnRightAction }) })),
      (t[4] = s.turnRightAction),
      (t[5] = d));
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(`dt`, {
        className: `font-medium whitespace-nowrap`,
        children: (0, $.jsx)(J, {
          id: `settings.codexMicro.keyboardLayout.knobTooltip.turnLeft`,
          defaultMessage: `Turn left`,
          description: `Label for turning the Codex Micro encoder knob counterclockwise`,
        }),
      })),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] === s.turnLeftAction
    ? (p = t[8])
    : ((p = (0, $.jsx)(`dd`, { className: `opacity-65`, children: (0, $.jsx)(J, { ...s.turnLeftAction }) })),
      (t[7] = s.turnLeftAction),
      (t[8] = p));
  let m;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(`dt`, {
        className: `font-medium whitespace-nowrap`,
        children: (0, $.jsx)(J, {
          id: `settings.codexMicro.keyboardLayout.knobTooltip.click`,
          defaultMessage: `Click`,
          description: `Label for clicking the Codex Micro encoder knob once`,
        }),
      })),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] === s.clickAction
    ? (h = t[11])
    : ((h = (0, $.jsx)(`dd`, { className: `opacity-65`, children: (0, $.jsx)(J, { ...s.clickAction }) })),
      (t[10] = s.clickAction),
      (t[11] = h));
  let g;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(`dt`, {
        className: `font-medium whitespace-nowrap`,
        children: (0, $.jsx)(J, {
          id: `settings.codexMicro.keyboardLayout.knobTooltip.pressAndHold`,
          defaultMessage: `Press and hold`,
          description: `Label for pressing and holding the Codex Micro encoder knob`,
        }),
      })),
      (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] === n
    ? (_ = t[14])
    : ((_ = (0, $.jsx)(`dd`, {
        className: `opacity-65`,
        children: (0, $.jsx)(J, {
          id: `settings.codexMicro.keyboardLayout.knobTooltip.pressAndHoldActionByDevice`,
          defaultMessage: `Open {deviceName} settings`,
          description: `Action performed when pressing and holding the Codex Micro or Creator Micro encoder knob`,
          values: { deviceName: n },
        }),
      })),
      (t[13] = n),
      (t[14] = _));
  let v;
  t[15] !== _ || t[16] !== d || t[17] !== p || t[18] !== h
    ? ((v = (0, $.jsxs)(`dl`, {
        className: `grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-xs leading-4`,
        children: [u, d, f, p, m, h, g, _],
      })),
      (t[15] = _),
      (t[16] = d),
      (t[17] = p),
      (t[18] = h),
      (t[19] = v))
    : (v = t[19]);
  let y;
  t[20] !== v || t[21] !== l
    ? ((y = (0, $.jsxs)(`div`, { className: `flex w-64 flex-col gap-2.5 p-3`, children: [c, l, v] })),
      (t[20] = v),
      (t[21] = l),
      (t[22] = y))
    : (y = t[22]);
  let b;
  t[23] !== n || t[24] !== o
    ? ((b = o.formatMessage(
        {
          id: `settings.codexMicro.keyboardLayout.knobByDevice`,
          defaultMessage: `{deviceName} knob`,
          description: `Accessible label for the encoder knob in the Codex Micro or Creator Micro keyboard preview`,
        },
        { deviceName: n },
      )),
      (t[23] = n),
      (t[24] = o),
      (t[25] = b))
    : (b = t[25]);
  let x;
  t[26] !== r || t[27] !== a || t[28] !== b
    ? ((x = (0, $.jsx)(Rn, { ariaLabel: b, isPressed: r, pulse: a })),
      (t[26] = r),
      (t[27] = a),
      (t[28] = b),
      (t[29] = x))
    : (x = t[29]);
  let S;
  return (
    t[30] !== y || t[31] !== x
      ? ((S = (0, $.jsx)(me, {
          align: `start`,
          delayOpen: !0,
          disablePadding: !0,
          tooltipMaxWidth: `18rem`,
          tooltipContent: y,
          children: x,
        })),
        (t[30] = y),
        (t[31] = x),
        (t[32] = S))
      : (S = t[32]),
    S
  );
}
function wi(e) {
  let t = (0, Oi.c)(56),
    { slot: n, slotId: r, className: i, isPressed: a, skills: o, voiceButtonMode: s, onEditSlot: c } = e,
    l;
  t[0] === n.keycapId ? (l = t[1]) : ((l = vn(n.keycapId)), (t[0] = n.keycapId), (t[1] = l));
  let u = l,
    d = ve(),
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
    let e = p == null ? null : ln(p);
    ((h = me),
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
      ? ((b = T(`group relative z-10 cursor-interaction transition-transform duration-basic ease-out`, l, i)),
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
      (m = Nn));
    let w =
      a &&
      `bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.92),0_0_12px_rgba(141,181,255,0.26)] dark:bg-[#282b34] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_0_14px_rgba(141,181,255,0.28)]`;
    (t[34] === w
      ? (v = t[35])
      : ((v = T(
          `size-full transition-[box-shadow,background-color] duration-basic ease-out group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.92),0_0_12px_rgba(141,181,255,0.18)] dark:group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),0_0_12px_rgba(141,181,255,0.24)]`,
          w,
        )),
        (t[34] = w),
        (t[35] = v)),
      (g = `sr-only`),
      (_ =
        f == null ? (e == null ? (0, $.jsx)(_i, { keycap: u, voiceButtonMode: s }) : Dn(e, d)) : jn(f, o, d)),
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
    : ((E = (0, $.jsx)(Ln, { keycap: u, className: `size-5` })), (t[39] = u), (t[40] = E));
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
  return n.length === 0 || [e.id, ...fn(e)].some((e) => e.toLowerCase().includes(n));
}
function Di(e) {
  return e.id === `SPLIT` ? `FORK` : e.id === `BRCH` ? `DRAFT` : e.id;
}
var Oi, ki, $, Ai, ji, Mi, Ni, Pi, Fi;
function Ii() {
  return (Ii = e(() => {
    ((Oi = A()),
      le(),
      O(),
      it(),
      H(),
      we(),
      (ki = m()),
      R(),
      Vt(),
      $t(),
      Bt(),
      rt(),
      cn(),
      pn(),
      _n(),
      It(),
      On(),
      V(),
      v(),
      g(),
      K(),
      Be(),
      Ne(),
      De(),
      Se(),
      Je(),
      p(),
      nt(),
      W(),
      s(),
      _e(),
      Pt(),
      jt(),
      Ie(),
      Oe(),
      _t(),
      ae(),
      lt(),
      Qt(),
      l(),
      Hn(),
      An(),
      pr(),
      Qe(),
      vr(),
      Sn(),
      Ut(),
      Or(),
      Bn(),
      Mn(),
      Wn(),
      on(),
      Fr(),
      jr(),
      yr(),
      Tn(),
      ri(),
      ci(),
      ($ = C()),
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
//# sourceMappingURL=codex-micro-settings-5c4662cce33b.js.map
