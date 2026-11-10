import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  $h as r,
  $nn as i,
  A3t as a,
  A4 as o,
  AMt as s,
  Amn as c,
  B6t as l,
  Byt as u,
  C_ as d,
  Cpn as f,
  Cq as p,
  DKt as m,
  Dbt as h,
  Dit as g,
  EK as _,
  Ebt as v,
  Eit as y,
  Ept as b,
  F3t as x,
  F_ as S,
  Fw as C,
  GS as w,
  Gj as T,
  HS as E,
  Hu as D,
  I7 as O,
  J7 as k,
  JG as A,
  JS as j,
  Jit as M,
  Jnn as N,
  Jrt as ee,
  K7 as P,
  KG as F,
  KYt as I,
  Kit as L,
  Kj as R,
  L7 as z,
  L8t as B,
  M4 as V,
  MDt as H,
  MMt as U,
  Mv as W,
  N3t as G,
  O3t as K,
  OKt as te,
  Obt as ne,
  Opn as re,
  P_ as q,
  Pw as ie,
  QG as ae,
  QKt as oe,
  Qh as se,
  Qnn as ce,
  Qu as le,
  RS as ue,
  RWt as de,
  Rpn as fe,
  S3t as pe,
  S_ as me,
  Spn as he,
  Sq as ge,
  TJt as _e,
  TK as ve,
  Tpt as ye,
  US as be,
  Uat as xe,
  VS as Se,
  Vat as Ce,
  Vu as we,
  WS as Te,
  X7 as Ee,
  XS as De,
  Xnn as Oe,
  Xrt as ke,
  Xu as Ae,
  YKt as je,
  Ynn as Me,
  Yrt as Ne,
  ZG as Pe,
  Zh as Fe,
  Zrt as Ie,
  Zu as Le,
  _K as Re,
  a3t as ze,
  aYt as Be,
  amt as Ve,
  cKt as He,
  cv as Ue,
  dNt as We,
  dit as Ge,
  e4t as Ke,
  eg as qe,
  eit as Je,
  fKt as Ye,
  fit as Xe,
  fo as Ze,
  gMt as Qe,
  gkt as $e,
  hMt as et,
  hmn as tt,
  hv as nt,
  hz as rt,
  i3t as it,
  iit as at,
  imt as ot,
  j3 as st,
  jDt as ct,
  jMt as lt,
  jv as ut,
  kMt as dt,
  kmn as ft,
  kv as pt,
  lv as mt,
  mR as ht,
  mt as gt,
  mv as _t,
  mz as vt,
  nit as yt,
  o3t as bt,
  pNt as xt,
  pR as St,
  po as Ct,
  pt as wt,
  qKt as Tt,
  qnn as Et,
  qu as Dt,
  r3t as Ot,
  rit as kt,
  rxt as At,
  s3t as jt,
  sYt as Mt,
  tit as Nt,
  vK as Pt,
  vpn as Ft,
  wJt as It,
  w_ as Lt,
  xbt as Rt,
  xpn as zt,
  zK as Bt,
  zpn as Vt,
  zyt as Ht,
} from "./app-initial-f094ef01c64d.js";
import {
  Dd as Ut,
  Dv as Wt,
  Ed as Gt,
  Qu as Kt,
  Tv as qt,
  Uh as Jt,
  Wh as Yt,
  Zu as Xt,
  bv as Zt,
  cc as Qt,
  dv as $t,
  fv as en,
  gv as tn,
  lc as nn,
  nS as rn,
  pv as an,
  tS as on,
  vv as sn,
  yv as cn,
} from "./app-primary-4c40d73a1074.js";
import { n as ln, t as un } from "./cursor-interactive-light-16-68e3de2313db.js";
import { i as dn, n as fn, t as pn } from "./codex-micro-commands-86f6cdcdb48d.js";
import {
  c as mn,
  d as hn,
  f as gn,
  i as _n,
  l as vn,
  n as yn,
  o as bn,
  r as xn,
  s as Sn,
  u as Cn,
} from "./codex-micro-layout-45f0a143dc6c.js";
import {
  c as wn,
  f as Tn,
  n as En,
  o as Dn,
  r as On,
  u as kn,
} from "./codex-micro-slot-signals-3a7fc1172911.js";
import { n as An, t as jn } from "./codex-micro-analog-action-title-dd9a4b370f08.js";
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
} from "./codex-micro-keyboard-surface-edf52db34789.js";
import { n as Gn, t as Kn } from "./keyboard-shortcuts-search-input-be03b5a70e1b.js";
function qn(e, t, n) {
  let r = t.trim(),
    i = (0, Yn.default)(
      e.flatMap((e) => {
        if (e.id === `personalitySettings`) return [];
        let { description: t, title: i } = me(e, n);
        return r.length > 0 && ![e.id, i, t].some((e) => S(e, r) > 0)
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
  return _.flatMap((e) => {
    let t = i.filter((t) => t.group === e);
    return t.length === 0 ? [] : [{ id: e, label: n.formatMessage(Zn[e]), options: t }];
  });
}
function Jn(e) {
  let t = m();
  return (0, Yn.default)(
    (0, Xn.default)(
      e.filter((e) => e.enabled && rn(e, t)),
      (e) => e.path,
    ),
    (e) => We(e).toLowerCase(),
  );
}
var Yn,
  Xn,
  Zn,
  Qn = e(() => {
    (ve(),
      (Yn = t(At(), 1)),
      (Xn = t(de(), 1)),
      he(),
      Lt(),
      q(),
      on(),
      xt(),
      te(),
      (Zn = zt({
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
  });
function $n(e) {
  let t = (0, nr.c)(46),
    {
      commands: n,
      heading: r,
      searchAriaLabel: i,
      searchQuery: a,
      selectedAction: o,
      skills: s,
      onActionChange: c,
      onSearchQueryChange: l,
    } = e,
    u = re(),
    d,
    p,
    m,
    h,
    g,
    _;
  if (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== u ||
    t[3] !== c ||
    t[4] !== l ||
    t[5] !== i ||
    t[6] !== a ||
    t[7] !== o ||
    t[8] !== s
  ) {
    let e = Jn(s),
      v = a.trim(),
      y;
    t[15] === o
      ? (y = t[16])
      : ((y = o?.type === `command` ? fn(o.commandId)?.id : null), (t[15] = o), (t[16] = y));
    let b = y,
      x =
        o == null
          ? u.formatMessage({
              id: `settings.codexMicro.actionPicker.none`,
              defaultMessage: `None`,
              description: `Short label for a Codex Micro control with no action assigned`,
            })
          : jn(o, e, u),
      C = e.filter((e) => v.length === 0 || [e.name, We(e), ot(e)].some((e) => S(e, v) > 0)),
      w = qn(n, v, u),
      T;
    t[17] === u
      ? (T = t[18])
      : ((T = u.formatMessage({
          id: `settings.codexMicro.analog.clearAssignment`,
          defaultMessage: `Clear assignment`,
          description: `Accessible label and tooltip for clearing a Codex Micro control action assignment`,
        })),
        (t[17] = u),
        (t[18] = T));
    let E = T;
    ((d = Ie), (h = `flex min-h-0 flex-1 flex-col gap-3`));
    let D;
    t[19] === r
      ? (D = t[20])
      : ((D = (0, J.jsx)(`span`, { className: `font-medium`, children: r })),
        (t[19] = r),
        (t[20] = D));
    let O;
    t[21] === u
      ? (O = t[22])
      : ((O = u.formatMessage({
          id: `settings.codexMicro.analog.currentAssignment`,
          defaultMessage: `Current assignment`,
          description: `Accessible label for the current Codex Micro control action assignment`,
        })),
        (t[21] = u),
        (t[22] = O));
    let k;
    t[23] !== E || t[24] !== c || t[25] !== o
      ? ((k =
          o == null
            ? null
            : (0, J.jsx)(L, {
                tooltipContent: E,
                children: (0, J.jsx)(dt, {
                  uniform: !0,
                  "aria-label": E,
                  className: `shrink-0`,
                  color: `ghost`,
                  size: `iconMd`,
                  onClick: () => {
                    c(null);
                  },
                  children: (0, J.jsx)(Ge, { "aria-hidden": !0 }),
                }),
              })),
        (t[23] = E),
        (t[24] = c),
        (t[25] = o),
        (t[26] = k))
      : (k = t[26]);
    let A = (0, J.jsxs)(`div`, {
      "aria-label": O,
      className: `flex max-w-[60%] min-w-0 items-center gap-1`,
      role: `group`,
      children: [(0, J.jsx)(er, { title: x, unassigned: o == null }), k],
    });
    t[27] !== A || t[28] !== D
      ? ((g = (0, J.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4 text-sm`,
          children: [D, A],
        })),
        (t[27] = A),
        (t[28] = D),
        (t[29] = g))
      : (g = t[29]);
    let j;
    (t[30] === u
      ? (j = t[31])
      : ((j = u.formatMessage({
          id: `settings.codexMicro.analog.search.placeholder`,
          defaultMessage: `Search actions and skills`,
          description: `Placeholder for searching actions and skills in a Codex Micro control mapping dialog`,
        })),
        (t[30] = u),
        (t[31] = j)),
      t[32] !== l || t[33] !== i || t[34] !== a || t[35] !== j
        ? ((_ = (0, J.jsx)(Kn, { ariaLabel: i, placeholder: j, value: a, onValueChange: l })),
          (t[32] = l),
          (t[33] = i),
          (t[34] = a),
          (t[35] = j),
          (t[36] = _))
        : (_ = t[36]),
      (p = `vertical-scroll-fade-mask min-h-0 flex-1 overflow-y-auto pe-1 [--edge-fade-distance:1rem]`),
      (m =
        C.length === 0 && w.length === 0
          ? (0, J.jsx)(`div`, {
              className: `py-2 text-sm text-secondary`,
              children: (0, J.jsx)(f, {
                id: `settings.codexMicro.analog.noResults`,
                defaultMessage: `No matching actions or skills`,
                description: `Empty search state for Codex Micro control action choices`,
              }),
            })
          : (0, J.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [
                C.length === 0
                  ? null
                  : (0, J.jsxs)(Le, {
                      children: [
                        (0, J.jsx)(Le.Header, {
                          title: (0, J.jsx)(f, {
                            id: `settings.codexMicro.analog.skills`,
                            defaultMessage: `Skills`,
                            description: `Section heading for Codex Micro control skill choices`,
                          }),
                        }),
                        (0, J.jsx)(Le.Content, {
                          children: C.map((e) =>
                            (0, J.jsx)(
                              tr,
                              {
                                description: ot(e),
                                isSelected:
                                  o?.type === `skill` &&
                                  o.skillName === e.name &&
                                  o.skillPath === e.path,
                                onSelect: () => {
                                  c({ type: `skill`, skillName: e.name, skillPath: e.path });
                                },
                                title: We(e),
                              },
                              e.path,
                            ),
                          ),
                        }),
                      ],
                    }),
                w.map((e) =>
                  (0, J.jsxs)(
                    Le,
                    {
                      children: [
                        (0, J.jsx)(Le.Header, { title: e.label }),
                        (0, J.jsx)(Le.Content, {
                          children: e.options.map((e) => {
                            let { command: t, description: n, title: r } = e;
                            return (0, J.jsx)(
                              tr,
                              {
                                description: n || null,
                                isSelected: b === t.id,
                                onSelect: () => {
                                  c({ type: `command`, commandId: t.id });
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
      (t[2] = u),
      (t[3] = c),
      (t[4] = l),
      (t[5] = i),
      (t[6] = a),
      (t[7] = o),
      (t[8] = s),
      (t[9] = d),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _));
  } else ((d = t[9]), (p = t[10]), (m = t[11]), (h = t[12]), (g = t[13]), (_ = t[14]));
  let v;
  t[37] !== p || t[38] !== m
    ? ((v = (0, J.jsx)(`div`, { className: p, children: m })),
      (t[37] = p),
      (t[38] = m),
      (t[39] = v))
    : (v = t[39]);
  let y;
  return (
    t[40] !== d || t[41] !== h || t[42] !== g || t[43] !== _ || t[44] !== v
      ? ((y = (0, J.jsxs)(d, { className: h, children: [g, _, v] })),
        (t[40] = d),
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
    ? ((l = fe(`block truncate`, s, c)), (t[0] = s), (t[1] = c), (t[2] = l))
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
function tr(e) {
  let t = (0, nr.c)(11),
    { description: n, isSelected: r, onSelect: i, title: a } = e,
    o = r ? `true` : void 0,
    s;
  t[0] === r
    ? (s = t[1])
    : ((s = r
        ? (0, J.jsx)(et, { className: `shrink-0 text-info`, "aria-hidden": !1, asset: Gt })
        : null),
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
      ? ((l = (0, J.jsx)(Xt, {
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
var nr,
  J,
  rr = e(() => {
    ((nr = ft()),
      Ut(),
      Vt(),
      he(),
      dn(),
      q(),
      s(),
      Je(),
      Qe(),
      Kt(),
      M(),
      Xe(),
      Gn(),
      le(),
      Ve(),
      xt(),
      An(),
      Qn(),
      (J = tt()));
  });
function ir(e) {
  let t = (0, sr.c)(62),
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
    u = re(),
    [d, p] = (0, cr.useState)(!1),
    [m, h] = (0, cr.useState)(``),
    g;
  t[0] === o ? (g = t[1]) : ((g = Jn(o)), (t[0] = o), (t[1] = g));
  let _ = g,
    v;
  t[2] === l
    ? (v = t[3])
    : ((v = () => {
        l(!1);
      }),
      (t[2] = l),
      (t[3] = v));
  let y = (0, cr.useEffectEvent)(v),
    b;
  t[4] === y
    ? (b = t[5])
    : ((b = () => () => {
        y();
      }),
      (t[4] = y),
      (t[5] = b));
  let x;
  (t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = []), (t[6] = x)) : (x = t[6]),
    (0, cr.useEffect)(b, x));
  let S;
  t[7] === l
    ? (S = t[8])
    : ((S = function (e) {
        (p(e), l(e), e || h(``));
      }),
      (t[7] = l),
      (t[8] = S));
  let C = S,
    w;
  t[9] === u
    ? (w = t[10])
    : ((w = u.formatMessage({
        id: `settings.codexMicro.keyboardLayout.analog.configure`,
        defaultMessage: `Configure analog stick actions`,
        description: `Accessible label for opening the Codex Micro analog stick action mapping editor`,
      })),
      (t[9] = u),
      (t[10] = w));
  let T;
  t[11] === i
    ? (T = t[12])
    : ((T = (0, Y.jsx)(Un, {
        className: `size-full group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.82),0_0_12px_rgba(141,181,255,0.2)] dark:group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_0_12px_rgba(141,181,255,0.24)]`,
        joystick: i,
      })),
      (t[11] = i),
      (t[12] = T));
  let E;
  t[13] !== w || t[14] !== T
    ? ((E = (0, Y.jsx)(`button`, {
        type: `button`,
        "aria-label": w,
        className: `group relative z-10 m-auto size-[92%] cursor-interaction`,
        children: T,
      })),
      (t[13] = w),
      (t[14] = T),
      (t[15] = E))
    : (E = t[15]);
  let D;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Y.jsx)(kt, {
        children: (0, Y.jsx)(f, {
          id: `settings.codexMicro.analog.title`,
          defaultMessage: `Analog stick`,
          description: `Title of the Codex Micro analog stick action mapping dialog`,
        }),
      })),
      (t[16] = D))
    : (D = t[16]);
  let O;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Y.jsx)(Ie, {
        children: (0, Y.jsx)(ke, {
          title: D,
          subtitle: (0, Y.jsx)(yt, {
            children: (0, Y.jsx)(f, {
              id: `settings.codexMicro.analog.description`,
              defaultMessage: `Choose what each direction triggers`,
              description: `Description of the Codex Micro analog stick action mapping dialog`,
            }),
          }),
        }),
      })),
      (t[17] = O))
    : (O = t[17]);
  let k;
  t[18] === i
    ? (k = t[19])
    : ((k = (0, Y.jsx)(Un, { className: `size-20 justify-self-center`, joystick: i })),
      (t[18] = i),
      (t[19] = k));
  let A;
  t[20] === u
    ? (A = t[21])
    : ((A = u.formatMessage({
        id: `settings.codexMicro.analog.directionGroup.label`,
        defaultMessage: `Analog direction mappings`,
        description: `Accessible label for the Codex Micro analog direction mapping group`,
      })),
      (t[20] = u),
      (t[21] = A));
  let j;
  t[22] !== r || t[23] !== c || t[24] !== _ || t[25] !== a
    ? ((j = lr.map((e) =>
        (0, Y.jsx)(
          ar,
          {
            action: r[e],
            direction: e,
            isSelected: a === e,
            skills: _,
            onSelect: () => {
              c(e);
            },
          },
          e,
        ),
      )),
      (t[22] = r),
      (t[23] = c),
      (t[24] = _),
      (t[25] = a),
      (t[26] = j))
    : (j = t[26]);
  let M;
  t[27] !== A || t[28] !== j
    ? ((M = (0, Y.jsx)(`div`, {
        "aria-label": A,
        className: `flex min-w-0 flex-col gap-1`,
        role: `group`,
        children: j,
      })),
      (t[27] = A),
      (t[28] = j),
      (t[29] = M))
    : (M = t[29]);
  let N;
  t[30] !== k || t[31] !== M
    ? ((N = (0, Y.jsx)(Ie, {
        children: (0, Y.jsxs)(`div`, {
          className: `grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-5`,
          children: [k, M],
        }),
      })),
      (t[30] = k),
      (t[31] = M),
      (t[32] = N))
    : (N = t[32]);
  let P;
  t[33] === a
    ? (P = t[34])
    : ((P = (0, Y.jsx)(f, {
        id: `settings.codexMicro.analog.assignDirection`,
        defaultMessage: `Assign {direction}`,
        description: `Label above Codex Micro analog direction action choices`,
        values: { direction: (0, Y.jsx)(or, { direction: a, lowercase: !0 }, `direction`) },
      })),
      (t[33] = a),
      (t[34] = P));
  let F;
  t[35] === u
    ? (F = t[36])
    : ((F = u.formatMessage({
        id: `settings.codexMicro.analog.search.label`,
        defaultMessage: `Search analog actions and skills`,
        description: `Accessible label for searching actions and skills in the Codex Micro analog mapping dialog`,
      })),
      (t[35] = u),
      (t[36] = F));
  let I = r[a],
    L;
  t[37] !== s || t[38] !== a
    ? ((L = (e) => {
        s(a, e);
      }),
      (t[37] = s),
      (t[38] = a),
      (t[39] = L))
    : (L = t[39]);
  let R;
  t[40] !== n ||
  t[41] !== m ||
  t[42] !== o ||
  t[43] !== P ||
  t[44] !== F ||
  t[45] !== I ||
  t[46] !== L
    ? ((R = (0, Y.jsx)($n, {
        commands: n,
        heading: P,
        searchAriaLabel: F,
        searchQuery: m,
        selectedAction: I,
        skills: o,
        onActionChange: L,
        onSearchQueryChange: h,
      })),
      (t[40] = n),
      (t[41] = m),
      (t[42] = o),
      (t[43] = P),
      (t[44] = F),
      (t[45] = I),
      (t[46] = L),
      (t[47] = R))
    : (R = t[47]);
  let z;
  t[48] === C
    ? (z = t[49])
    : ((z = () => {
        C(!1);
      }),
      (t[48] = C),
      (t[49] = z));
  let B;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Y.jsx)(f, {
        id: `settings.codexMicro.analog.done`,
        defaultMessage: `Done`,
        description: `Button that closes the Codex Micro analog action mapping dialog`,
      })),
      (t[50] = B))
    : (B = t[50]);
  let V;
  t[51] === z
    ? (V = t[52])
    : ((V = (0, Y.jsx)(Ie, {
        children: (0, Y.jsx)(Ne, {
          children: (0, Y.jsx)(dt, { color: `primary`, onClick: z, children: B }),
        }),
      })),
      (t[51] = z),
      (t[52] = V));
  let H;
  t[53] !== N || t[54] !== R || t[55] !== V
    ? ((H = (0, Y.jsxs)(ee, {
        className: `max-h-[min(680px,calc(100vh-4rem))] min-h-0 gap-0 overflow-hidden`,
        children: [O, N, R, V],
      })),
      (t[53] = N),
      (t[54] = R),
      (t[55] = V),
      (t[56] = H))
    : (H = t[56]);
  let U;
  return (
    t[57] !== d || t[58] !== C || t[59] !== H || t[60] !== E
      ? ((U = (0, Y.jsx)(Nt, {
          open: d,
          size: `wide`,
          onOpenChange: C,
          triggerContent: E,
          children: H,
        })),
        (t[57] = d),
        (t[58] = C),
        (t[59] = H),
        (t[60] = E),
        (t[61] = U))
      : (U = t[61]),
    U
  );
}
function ar(e) {
  let t = (0, sr.c)(35),
    { action: n, direction: r, isSelected: i, skills: a, onSelect: o } = e,
    s = re(),
    c,
    l,
    u,
    d,
    f,
    p,
    m;
  if (t[0] !== n || t[1] !== r || t[2] !== s || t[3] !== i || t[4] !== a) {
    u = n == null ? s.formatMessage(dr.none) : jn(n, a, s);
    let e = s.formatMessage(dr[r]);
    ((l = L),
      (p = `trigger-overflows`),
      (m = u),
      (c = Xt),
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
  let h = ur[r],
    g;
  t[12] === h ? (g = t[13]) : ((g = fe(`size-4 shrink-0`, h)), (t[12] = h), (t[13] = g));
  let _;
  t[14] === g ? (_ = t[15]) : ((_ = (0, Y.jsx)(Ue, { className: g })), (t[14] = g), (t[15] = _));
  let v = n == null,
    y;
  t[16] !== u || t[17] !== v
    ? ((y = (0, Y.jsx)(er, { compact: !0, title: u, unassigned: v })),
      (t[16] = u),
      (t[17] = v),
      (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] === r ? (b = t[20]) : ((b = (0, Y.jsx)(or, { direction: r })), (t[19] = r), (t[20] = b));
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
function or(e) {
  let t = (0, sr.c)(6),
    { direction: n, lowercase: r } = e;
  if (!(r !== void 0 && r)) {
    let e = dr[n],
      r;
    return (t[0] === e ? (r = t[1]) : ((r = (0, Y.jsx)(f, { ...e })), (t[0] = e), (t[1] = r)), r);
  }
  switch (n) {
    case `up`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(f, { ...dr.upLowercase })), (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `right`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(f, { ...dr.rightLowercase })), (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `down`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(f, { ...dr.downLowercase })), (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `left`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(f, { ...dr.leftLowercase })), (t[5] = e))
          : (e = t[5]),
        e
      );
    }
  }
}
var sr,
  cr,
  Y,
  lr,
  ur,
  dr,
  fr = e(() => {
    ((sr = ft()),
      Vt(),
      (cr = t(c(), 1)),
      he(),
      s(),
      at(),
      Je(),
      Kt(),
      M(),
      mt(),
      rr(),
      An(),
      Qn(),
      Mn(),
      (Y = tt()),
      (lr = [`up`, `right`, `down`, `left`]),
      (ur = { up: ``, right: `rotate-90`, down: `rotate-180`, left: `-rotate-90` }),
      (dr = zt({
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
  });
function pr(e) {
  let t = (0, mr.c)(25),
    {
      commands: n,
      noActionLabel: r,
      portalContainer: i,
      selectedAction: a,
      skills: o,
      triggerButton: s,
      onActionSelect: c,
    } = e,
    l = re(),
    [u, d] = (0, hr.useState)(``),
    p;
  if (
    t[0] !== n ||
    t[1] !== l ||
    t[2] !== r ||
    t[3] !== c ||
    t[4] !== i?.ownerDocument.body ||
    t[5] !== u ||
    t[6] !== a ||
    t[7] !== o ||
    t[8] !== s
  ) {
    let e = qn(n, u, l),
      m;
    t[10] === u
      ? (m = t[11])
      : ((m = (e) => u.trim().length === 0 || [e.name, We(e), ot(e)].some((e) => S(e, u) > 0)),
        (t[10] = u),
        (t[11] = m));
    let h = Jn(o).filter(m),
      g;
    t[12] !== r || t[13] !== u
      ? ((g = u.trim().length === 0 || S(r, u) > 0), (t[12] = r), (t[13] = u), (t[14] = g))
      : (g = t[14]);
    let _ = g,
      v;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (e) => {
          e || d(``);
        }),
        (t[15] = v))
      : (v = t[15]);
    let y;
    t[16] === l
      ? (y = t[17])
      : ((y = l.formatMessage({
          id: `settings.codexMicro.editor.customShortcut.search.label`,
          defaultMessage: `Search shortcuts and skills for keycap`,
          description: `Accessible label for searching shortcuts and skills assignable to a Codex Micro keycap`,
        })),
        (t[16] = l),
        (t[17] = y));
    let b;
    t[18] === l
      ? (b = t[19])
      : ((b = l.formatMessage({
          id: `settings.codexMicro.editor.customShortcut.search.placeholder`,
          defaultMessage: `Search shortcuts or skills`,
          description: `Placeholder for searching shortcuts and skills assignable to a Codex Micro keycap`,
        })),
        (t[18] = l),
        (t[19] = b));
    let x;
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((x = (e) => {
          d(e.currentTarget.value);
        }),
        (t[20] = x))
      : (x = t[20]);
    let C;
    (t[21] !== u || t[22] !== y || t[23] !== b
      ? ((C = (0, gr.jsx)(A.SearchInput, {
          className: `shrink-0`,
          "aria-label": y,
          placeholder: b,
          value: u,
          onChange: x,
        })),
        (t[21] = u),
        (t[22] = y),
        (t[23] = b),
        (t[24] = C))
      : (C = t[24]),
      (p = (0, gr.jsxs)(F, {
        align: `end`,
        side: `top`,
        contentClassName: `overflow-hidden`,
        contentMaxHeight: `tall`,
        contentWidth: `panelWide`,
        portalContainer: i?.ownerDocument.body ?? null,
        onOpenChange: v,
        triggerButton: s,
        children: [
          C,
          _ || h.length > 0 || e.length > 0
            ? (0, gr.jsxs)(A.Section, {
                className: `min-h-0 flex-1 overflow-y-auto`,
                children: [
                  _
                    ? (0, gr.jsx)(A.Item, {
                        rightIcon:
                          a == null
                            ? (0, gr.jsx)(et, {
                                className: `text-info`,
                                "aria-hidden": !1,
                                asset: Gt,
                              })
                            : null,
                        onSelect: () => {
                          c(void 0);
                        },
                        children: r,
                      })
                    : null,
                  e.map((e, t) =>
                    (0, gr.jsxs)(
                      hr.Fragment,
                      {
                        children: [
                          _ || t > 0 ? (0, gr.jsx)(A.Separator, {}) : null,
                          (0, gr.jsx)(A.SectionLabel, { children: e.label }),
                          e.options.map((e) => {
                            let { command: t, description: n, title: r } = e;
                            return (0, gr.jsx)(
                              A.Item,
                              {
                                rightIcon:
                                  a?.type === `command` && t.id === a.commandId
                                    ? (0, gr.jsx)(et, {
                                        className: `text-info`,
                                        "aria-hidden": !1,
                                        asset: Gt,
                                      })
                                    : null,
                                SubText:
                                  n.length === 0
                                    ? null
                                    : (0, gr.jsx)(`span`, {
                                        className: `text-xs text-codex-description`,
                                        children: n,
                                      }),
                                onSelect: () => {
                                  c({ type: `command`, commandId: t.id });
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
                  h.length === 0
                    ? null
                    : (0, gr.jsxs)(gr.Fragment, {
                        children: [
                          _ || e.length > 0 ? (0, gr.jsx)(A.Separator, {}) : null,
                          (0, gr.jsx)(A.SectionLabel, {
                            children: (0, gr.jsx)(f, {
                              id: `settings.codexMicro.editor.customShortcut.skills`,
                              defaultMessage: `Skills`,
                              description: `Section heading for skills assignable to a Codex Micro keycap`,
                            }),
                          }),
                          h.map((e) =>
                            (0, gr.jsx)(
                              A.Item,
                              {
                                rightIcon:
                                  a?.type === `skill` && a.skillPath === e.path
                                    ? (0, gr.jsx)(et, {
                                        className: `text-info`,
                                        "aria-hidden": !1,
                                        asset: Gt,
                                      })
                                    : null,
                                SubText: (0, gr.jsx)(`span`, {
                                  className: `text-xs text-codex-description`,
                                  children: ot(e),
                                }),
                                onSelect: () => {
                                  c({ type: `skill`, skillName: e.name, skillPath: e.path });
                                },
                                children: We(e),
                              },
                              e.path,
                            ),
                          ),
                        ],
                      }),
                ],
              })
            : (0, gr.jsx)(A.Message, {
                centered: !0,
                children: (0, gr.jsx)(f, {
                  id: `settings.codexMicro.editor.customShortcut.search.noResults`,
                  defaultMessage: `No matching shortcuts or skills`,
                  description: `Empty state shown when searching shortcuts and skills assignable to a Codex Micro keycap`,
                }),
              }),
        ],
      })),
      (t[0] = n),
      (t[1] = l),
      (t[2] = r),
      (t[3] = c),
      (t[4] = i?.ownerDocument.body),
      (t[5] = u),
      (t[6] = a),
      (t[7] = o),
      (t[8] = s),
      (t[9] = p));
  } else p = t[9];
  return p;
}
var mr,
  hr,
  gr,
  _r = e(() => {
    ((mr = ft()), Ut(), (hr = t(c(), 1)), he(), q(), Pe(), Qe(), Ve(), xt(), Qn(), (gr = tt()));
  }),
  X,
  vr = e(() => {
    (he(),
      (X = zt({
        options: {
          id: `settings.codexMicro.options`,
          defaultMessage: `Options`,
          description: `Heading for Codex Micro device options`,
        },
        agentKeys: {
          id: `settings.codexMicro.agentKeys.label`,
          defaultMessage: `Agent keys`,
          description: `Label for choosing which tasks Codex Micro agent keys open`,
        },
        singleTapAgentKeys: {
          id: `settings.codexMicro.agentKeys.singleTap.label`,
          defaultMessage: `Focus Codex with a single tap`,
          description: `Label for the setting that focuses Codex and opens an assigned task with one agent-key tap`,
        },
        singleTapAgentKeysDescription: {
          id: `settings.codexMicro.agentKeys.singleTap.description`,
          defaultMessage: `Open the assigned task and focus the Codex window with a single tap instead of a double tap`,
          description: `Description for the setting that changes Codex Micro agent-key task navigation and window focus from double-tap to single-tap`,
        },
        customChats: {
          id: `settings.codexMicro.agentKeys.customChats`,
          defaultMessage: `Custom assignments`,
          description: `Option for assigning Codex Micro agent keys to individual tasks or actions`,
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
          defaultMessage: `Codex found your {deviceName} but couldn't connect. Codex is reconnecting automatically. If the problem continues, reconnect it and check whether a keyboard remapper or security tool is blocking access.`,
          description: `Troubleshooting guidance shown when Codex cannot connect to a detected Codex Micro or Creator Micro`,
        },
        connectionProblem: {
          id: `settings.codexMicro.connection.problem`,
          defaultMessage: `Connection problem`,
          description: `Fallback Codex Micro error status`,
        },
        connectionProblemDescription: {
          id: `settings.codexMicro.connection.problemDescriptionByDevice`,
          defaultMessage: `Codex couldn't communicate with your {deviceName}. Codex is reconnecting automatically. If the problem continues, reconnect it and try again.`,
          description: `Fallback troubleshooting guidance for a Codex Micro or Creator Micro connection error`,
        },
        discoveryFailed: {
          id: `settings.codexMicro.connection.discoveryFailed`,
          defaultMessage: `Discovery failed`,
          description: `Codex Micro status when device discovery fails`,
        },
        discoveryFailedDescription: {
          id: `settings.codexMicro.connection.discoveryFailedDescriptionByDevice`,
          defaultMessage: `Codex couldn't check for your {deviceName}. Codex will try again automatically. If the problem continues, reconnect the device or restart Codex.`,
          description: `Troubleshooting guidance shown when Codex Micro or Creator Micro device discovery fails`,
        },
        transportUnavailable: {
          id: `settings.codexMicro.connection.transportUnavailable`,
          defaultMessage: `Connection interrupted`,
          description: `Codex Micro status when an active device connection becomes unusable`,
        },
        transportUnavailableDescription: {
          id: `settings.codexMicro.connection.transportUnavailableDescriptionByDevice`,
          defaultMessage: `Codex lost communication with your {deviceName} and is reconnecting automatically. If your computer still shows the device and the problem continues, a keyboard remapper or security tool may be blocking access. Check that tool's device rules, reconnect {deviceName}, or contact IT if it is managed.`,
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
          description: `Option for mapping Codex Micro agent keys to pinned tasks`,
        },
        pinnedChatsDescription: {
          id: `settings.codexMicro.agentKeys.pinnedChatsDescription`,
          defaultMessage: `First six chats in Pinned`,
          description: `Explanation of the Codex Micro pinned tasks agent source`,
        },
        priorityChats: {
          id: `settings.codexMicro.agentKeys.priorityChats`,
          defaultMessage: `Priority chats`,
          description: `Option for mapping Codex Micro agent keys to priority tasks`,
        },
        priorityChatsDescription: {
          id: `settings.codexMicro.agentKeys.priorityChatsDescription`,
          defaultMessage: `Waiting, unread, and active chats first`,
          description: `Explanation of the Codex Micro priority tasks agent source`,
        },
        recentChats: {
          id: `settings.codexMicro.agentKeys.recentChats`,
          defaultMessage: `Most recent chats`,
          description: `Option for mapping Codex Micro agent keys to the most recently updated tasks`,
        },
        recentChatsDescription: {
          id: `settings.codexMicro.agentKeys.recentChatsDescription`,
          defaultMessage: `First six recently updated chats, pinned or unpinned`,
          description: `Explanation of the Codex Micro most recent tasks agent source`,
        },
      })));
  });
function yr(e) {
  let t = (0, Sr.c)(66),
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
    p = r !== void 0 && r,
    m = re(),
    [h, g] = (0, Cr.useState)(p),
    [_, v] = (0, Cr.useState)(``),
    [y, b] = (0, Cr.useState)(`left`),
    x = s ?? h,
    S;
  t[0] === l ? (S = t[1]) : ((S = Jn(l)), (t[0] = l), (t[1] = S));
  let C = S,
    w;
  t[2] !== s || t[3] !== d
    ? ((w = function (e) {
        (s ?? g(e), d?.(e), e || v(``));
      }),
      (t[2] = s),
      (t[3] = d),
      (t[4] = w))
    : (w = t[4]);
  let T = w,
    E;
  t[5] !== o || t[6] !== C
    ? ((E = (0, Z.jsx)(br, { mapping: o, skills: C })), (t[5] = o), (t[6] = C), (t[7] = E))
    : (E = t[7]);
  let D;
  t[8] !== i || t[9] !== m
    ? ((D = m.formatMessage(
        {
          id: `settings.codexMicro.keyboardLayout.knob.configureByDevice`,
          defaultMessage: `Configure {deviceName} knob actions`,
          description: `Accessible label for opening the Codex Micro or Creator Micro knob action mapping editor`,
        },
        { deviceName: i },
      )),
      (t[8] = i),
      (t[9] = m),
      (t[10] = D))
    : (D = t[10]);
  let O;
  t[11] !== a || t[12] !== c
    ? ((O = (0, Z.jsx)(Rn, { isPressed: a, pulse: c })), (t[11] = a), (t[12] = c), (t[13] = O))
    : (O = t[13]);
  let k;
  t[14] !== D || t[15] !== O
    ? ((k = (0, Z.jsx)(`button`, {
        type: `button`,
        "aria-label": D,
        className: `group relative z-10 m-auto size-full cursor-interaction`,
        children: O,
      })),
      (t[14] = D),
      (t[15] = O),
      (t[16] = k))
    : (k = t[16]);
  let A;
  t[17] !== E || t[18] !== k
    ? ((A = (0, Z.jsx)(L, {
        align: `start`,
        delayOpen: !0,
        disablePadding: !0,
        tooltipMaxWidth: `18rem`,
        tooltipContent: E,
        children: k,
      })),
      (t[17] = E),
      (t[18] = k),
      (t[19] = A))
    : (A = t[19]);
  let j;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Z.jsx)(kt, {
        children: (0, Z.jsx)(f, {
          id: `settings.codexMicro.encoder.title`,
          defaultMessage: `Knob`,
          description: `Title of the Codex Micro knob action mapping dialog`,
        }),
      })),
      (t[20] = j))
    : (j = t[20]);
  let M;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Z.jsx)(Ie, {
        children: (0, Z.jsx)(ke, {
          title: j,
          subtitle: (0, Z.jsx)(yt, {
            children: (0, Z.jsx)(f, {
              id: `settings.codexMicro.encoder.description`,
              defaultMessage: `Choose what each knob gesture triggers`,
              description: `Description of the Codex Micro knob action mapping dialog`,
            }),
          }),
        }),
      })),
      (t[21] = M))
    : (M = t[21]);
  let N;
  t[22] !== a || t[23] !== c
    ? ((N = (0, Z.jsx)(`div`, {
        className: `size-20 justify-self-center`,
        children: (0, Z.jsx)(Rn, { isPressed: a, pulse: c }),
      })),
      (t[22] = a),
      (t[23] = c),
      (t[24] = N))
    : (N = t[24]);
  let P;
  t[25] === m
    ? (P = t[26])
    : ((P = m.formatMessage({
        id: `settings.codexMicro.encoder.inputGroup.label`,
        defaultMessage: `Knob gesture mappings`,
        description: `Accessible label for the Codex Micro knob gesture mapping group`,
      })),
      (t[25] = m),
      (t[26] = P));
  let F;
  t[27] !== o || t[28] !== C || t[29] !== y
    ? ((F = wr.map((e) =>
        (0, Z.jsx)(
          xr,
          {
            action: o[e],
            input: e,
            isSelected: y === e,
            skills: C,
            onSelect: () => {
              b(e);
            },
          },
          e,
        ),
      )),
      (t[27] = o),
      (t[28] = C),
      (t[29] = y),
      (t[30] = F))
    : (F = t[30]);
  let I;
  t[31] !== P || t[32] !== F
    ? ((I = (0, Z.jsx)(`div`, {
        "aria-label": P,
        className: `flex min-w-0 flex-col gap-1`,
        role: `group`,
        children: F,
      })),
      (t[31] = P),
      (t[32] = F),
      (t[33] = I))
    : (I = t[33]);
  let R;
  t[34] !== N || t[35] !== I
    ? ((R = (0, Z.jsx)(Ie, {
        children: (0, Z.jsxs)(`div`, {
          className: `grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-5`,
          children: [N, I],
        }),
      })),
      (t[34] = N),
      (t[35] = I),
      (t[36] = R))
    : (R = t[36]);
  let z;
  t[37] === y
    ? (z = t[38])
    : ((z = (0, Z.jsx)(f, {
        id: `settings.codexMicro.encoder.assign`,
        defaultMessage: `{input, select, left {Assign left turn} right {Assign right turn} click {Assign click} longPress {Assign long press} other {Assign knob gesture}}`,
        description: `Label above action choices for a Codex Micro knob gesture`,
        values: { input: y },
      })),
      (t[37] = y),
      (t[38] = z));
  let B;
  t[39] === m
    ? (B = t[40])
    : ((B = m.formatMessage({
        id: `settings.codexMicro.encoder.search.label`,
        defaultMessage: `Search knob actions and skills`,
        description: `Accessible label for searching actions and skills in the Codex Micro knob mapping dialog`,
      })),
      (t[39] = m),
      (t[40] = B));
  let V = o[y],
    H;
  t[41] !== u || t[42] !== y
    ? ((H = (e) => {
        u(y, e);
      }),
      (t[41] = u),
      (t[42] = y),
      (t[43] = H))
    : (H = t[43]);
  let U;
  t[44] !== n ||
  t[45] !== _ ||
  t[46] !== l ||
  t[47] !== z ||
  t[48] !== B ||
  t[49] !== V ||
  t[50] !== H
    ? ((U = (0, Z.jsx)($n, {
        commands: n,
        heading: z,
        searchAriaLabel: B,
        searchQuery: _,
        selectedAction: V,
        skills: l,
        onActionChange: H,
        onSearchQueryChange: v,
      })),
      (t[44] = n),
      (t[45] = _),
      (t[46] = l),
      (t[47] = z),
      (t[48] = B),
      (t[49] = V),
      (t[50] = H),
      (t[51] = U))
    : (U = t[51]);
  let W;
  t[52] === T
    ? (W = t[53])
    : ((W = () => {
        T(!1);
      }),
      (t[52] = T),
      (t[53] = W));
  let G;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Z.jsx)(f, {
        id: `settings.codexMicro.encoder.done`,
        defaultMessage: `Done`,
        description: `Button that closes the Codex Micro knob action mapping dialog`,
      })),
      (t[54] = G))
    : (G = t[54]);
  let K;
  t[55] === W
    ? (K = t[56])
    : ((K = (0, Z.jsx)(Ie, {
        children: (0, Z.jsx)(Ne, {
          children: (0, Z.jsx)(dt, { color: `primary`, onClick: W, children: G }),
        }),
      })),
      (t[55] = W),
      (t[56] = K));
  let te;
  t[57] !== R || t[58] !== U || t[59] !== K
    ? ((te = (0, Z.jsxs)(ee, {
        className: `max-h-[min(680px,calc(100vh-4rem))] min-h-0 gap-0 overflow-hidden`,
        children: [M, R, U, K],
      })),
      (t[57] = R),
      (t[58] = U),
      (t[59] = K),
      (t[60] = te))
    : (te = t[60]);
  let ne;
  return (
    t[61] !== x || t[62] !== T || t[63] !== te || t[64] !== A
      ? ((ne = (0, Z.jsx)(Nt, {
          open: x,
          size: `wide`,
          onOpenChange: T,
          triggerContent: A,
          children: te,
        })),
        (t[61] = x),
        (t[62] = T),
        (t[63] = te),
        (t[64] = A),
        (t[65] = ne))
      : (ne = t[65]),
    ne
  );
}
function br(e) {
  let t = (0, Sr.c)(8),
    { mapping: n, skills: r } = e,
    i = re(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(`span`, {
        className: `text-xs font-semibold`,
        children: (0, Z.jsx)(f, {
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
        children: (0, Z.jsx)(f, { ...X.knobCustomDescription }),
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] !== i || t[3] !== n || t[4] !== r
    ? ((s = wr.map((e) =>
        (0, Z.jsxs)(
          Cr.Fragment,
          {
            children: [
              (0, Z.jsx)(`dt`, {
                className: `font-medium whitespace-nowrap`,
                children: (0, Z.jsx)(f, { ...Er.gesture, values: { input: e } }),
              }),
              (0, Z.jsx)(`dd`, {
                className: `opacity-65`,
                children: n[e] == null ? i.formatMessage(Er.none) : jn(n[e], r, i),
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
function xr(e) {
  let t = (0, Sr.c)(31),
    { action: n, input: r, isSelected: i, skills: a, onSelect: o } = e,
    s = re(),
    c,
    l,
    u,
    d,
    p,
    m,
    h;
  t[0] !== n || t[1] !== r || t[2] !== s || t[3] !== i || t[4] !== a
    ? ((u = n == null ? s.formatMessage(Er.none) : jn(n, a, s)),
      (l = L),
      (m = `trigger-overflows`),
      (h = u),
      (c = Xt),
      (d = i ? `true` : void 0),
      (p = s.formatMessage(
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
      (t[9] = p),
      (t[10] = m),
      (t[11] = h))
    : ((c = t[5]), (l = t[6]), (u = t[7]), (d = t[8]), (p = t[9]), (m = t[10]), (h = t[11]));
  let g = Tr[r],
    _ = n == null,
    v;
  t[12] !== u || t[13] !== _
    ? ((v = (0, Z.jsx)(er, { compact: !0, title: u, unassigned: _ })),
      (t[12] = u),
      (t[13] = _),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] === r
    ? (y = t[16])
    : ((y = (0, Z.jsx)(f, { ...Er.gesture, values: { input: r } })), (t[15] = r), (t[16] = y));
  let b;
  t[17] !== c ||
  t[18] !== i ||
  t[19] !== o ||
  t[20] !== d ||
  t[21] !== p ||
  t[22] !== g ||
  t[23] !== v ||
  t[24] !== y
    ? ((b = (0, Z.jsx)(c, {
        ariaCurrent: d,
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
      (t[20] = d),
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
var Sr,
  Cr,
  Z,
  wr,
  Tr,
  Er,
  Dr = e(() => {
    ((Sr = ft()),
      b(),
      ln(),
      (Cr = t(c(), 1)),
      he(),
      s(),
      at(),
      Je(),
      Qe(),
      Kt(),
      M(),
      gt(),
      rr(),
      An(),
      Qn(),
      Mn(),
      vr(),
      (Z = tt()),
      (wr = [`left`, `right`, `click`, `longPress`]),
      (Tr = {
        left: (0, Z.jsx)(et, { className: `shrink-0`, "aria-hidden": !1, asset: ye }),
        right: (0, Z.jsx)(et, { className: `shrink-0 -scale-x-100`, "aria-hidden": !1, asset: ye }),
        click: (0, Z.jsx)(et, { className: `shrink-0`, "aria-hidden": !1, asset: un }),
        longPress: (0, Z.jsx)(wt, { className: `size-4 shrink-0` }),
      }),
      (Er = zt({
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
  });
function Or({
  onClose: e,
  onConfirm: t,
  title: n = (0, kr.jsx)(f, {
    id: `settings.codexMicro.keyboardLayout.resetConfirmation.title`,
    defaultMessage: `Reset keyboard layout?`,
    description: `Title for the dialog confirming a Codex Micro keyboard layout reset`,
  }),
  description: r = (0, kr.jsx)(f, {
    id: `settings.codexMicro.keyboardLayout.resetConfirmation.description`,
    defaultMessage: `This restores the command keys and analog stick to their default assignments without changing your agent key mode or custom chat assignments`,
    description: `Explanation shown before resetting the Codex Micro keyboard layout`,
  }),
  cancel: i = (0, kr.jsx)(f, {
    id: `settings.codexMicro.keyboardLayout.resetConfirmation.cancel`,
    defaultMessage: `Cancel`,
    description: `Button that cancels resetting the Codex Micro keyboard layout`,
  }),
  confirm: a = (0, kr.jsx)(f, {
    id: `settings.codexMicro.keyboardLayout.resetConfirmation.confirm`,
    defaultMessage: `Reset layout`,
    description: `Button that confirms resetting the Codex Micro keyboard layout`,
  }),
}) {
  return (0, kr.jsx)(Nt, {
    open: !0,
    showDialogClose: !1,
    size: `compact`,
    onOpenChange: (t) => {
      t || e();
    },
    children: (0, kr.jsxs)(ee, {
      as: `form`,
      onSubmit: (n) => {
        (n.preventDefault(), t(), e());
      },
      children: [
        (0, kr.jsx)(kt, { className: `sr-only`, children: n }),
        (0, kr.jsx)(yt, { className: `sr-only`, children: r }),
        (0, kr.jsx)(Ie, { children: (0, kr.jsx)(ke, { title: n, subtitle: r }) }),
        (0, kr.jsx)(Ie, {
          children: (0, kr.jsxs)(Ne, {
            children: [
              (0, kr.jsx)(dt, { color: `secondary`, onClick: e, children: i }),
              (0, kr.jsx)(dt, { color: `danger`, type: `submit`, children: a }),
            ],
          }),
        }),
      ],
    }),
  });
}
var kr,
  Ar = e(() => {
    (he(), s(), at(), Je(), (kr = tt()));
  });
function jr(e) {
  let t = (0, Mr.c)(11),
    { deviceName: n, onClose: r, onConfirm: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (0, Nr.jsx)(f, {
        id: `settings.codexMicro.connection.removeConfirmation.title`,
        defaultMessage: `Remove {deviceName}?`,
        description: `Title for the dialog confirming removal of an unavailable Codex Micro or Creator Micro connection from Codex`,
        values: { deviceName: n },
      })),
      (t[0] = n),
      (t[1] = a));
  let o;
  t[2] === n
    ? (o = t[3])
    : ((o = (0, Nr.jsx)(f, {
        id: `settings.codexMicro.connection.removeConfirmation.description`,
        defaultMessage: `This removes {deviceName} from Codex without changing its preferences, custom chat assignments, or Bluetooth pairing. Reconnect the device to add it again.`,
        description: `Explanation shown before removing an unavailable Codex Micro or Creator Micro connection from Codex`,
        values: { deviceName: n },
      })),
      (t[2] = n),
      (t[3] = o));
  let s, c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Nr.jsx)(f, {
        id: `settings.codexMicro.connection.removeConfirmation.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels removing an unavailable Codex Micro or Creator Micro connection`,
      })),
      (c = (0, Nr.jsx)(f, {
        id: `settings.codexMicro.connection.removeConfirmation.confirm`,
        defaultMessage: `Remove connection`,
        description: `Button that confirms removing an unavailable Codex Micro or Creator Micro connection from Codex`,
      })),
      (t[4] = s),
      (t[5] = c))
    : ((s = t[4]), (c = t[5]));
  let l;
  return (
    t[6] !== r || t[7] !== i || t[8] !== a || t[9] !== o
      ? ((l = (0, Nr.jsx)(Or, {
          onClose: r,
          onConfirm: i,
          title: a,
          description: o,
          cancel: s,
          confirm: c,
        })),
        (t[6] = r),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
var Mr,
  Nr,
  Pr = e(() => {
    ((Mr = ft()), he(), Ar(), (Nr = tt()));
  });
function Fr(e) {
  let t = (0, Br.c)(5),
    n = a(ze),
    { data: r, isLoading: i } = v(),
    o = r === void 0 ? [] : r,
    { remoteConnections: s } = ne(),
    c = C(s) ?? [],
    { data: l } = x($e),
    u = x(V),
    d;
  t[0] === e ? (d = t[1]) : ((d = e.trim()), (t[0] = e), (t[1] = d));
  let f = d,
    m = p(f, Hr),
    h = [Ke, ...c.map(Rr).sort(Lr)],
    { data: g, isFetching: _ } = pe({
      queryKey: [`codex-micro-custom-thread-search`, h, m],
      queryFn: async () =>
        (
          await Promise.allSettled(h.map((e) => Ot(n, e).searchThreads({ query: m, limit: Vr })))
        ).flatMap(Ir),
      enabled: m.length > 0,
      staleTime: It.THIRTY_SECONDS,
    }),
    y = m === f,
    b = i || (f.length > 0 && (!y || _)),
    S = zr({
      asyncResults: y ? g : void 0,
      cloudTasks: l,
      conversationsMeta: o,
      hostIds: new Set(h),
      projectLabelByThreadKey: u,
      query: f,
      limit: Vr,
    }),
    w;
  return (
    t[2] !== b || t[3] !== S
      ? ((w = { loading: b, options: S }), (t[2] = b), (t[3] = S), (t[4] = w))
      : (w = t[4]),
    w
  );
}
function Ir(e) {
  return e.status === `fulfilled` ? e.value : [];
}
function Lr(e, t) {
  return e.localeCompare(t);
}
function Rr(e) {
  return e.hostId;
}
function zr({
  asyncResults: e,
  cloudTasks: t,
  conversationsMeta: n,
  hostIds: i,
  limit: a,
  projectLabelByThreadKey: o,
  query: s,
}) {
  let c = se({ cloudTasks: t, conversationsMeta: n, hostIds: i, projectLabelByThreadKey: o });
  return (
    s.length === 0
      ? [...c].sort((e, t) => t.updatedAt - e.updatedAt).slice(0, a)
      : r({ asyncResults: e ?? [], loadedChatSearchResults: c, limit: a, query: s })
  ).flatMap((e) =>
    e.kind === `chatgpt`
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
var Br,
  Vr,
  Hr,
  Ur = e(() => {
    ((Br = ft()),
      jt(),
      K(),
      it(),
      Rt(),
      ie(),
      qe(),
      h(),
      bt(),
      I(),
      st(),
      o(),
      _e(),
      ge(),
      (Vr = 30),
      (Hr = 150));
  });
function Wr(e) {
  let t = (0, Yr.c)(103),
    { agentKeyId: n, commands: r, skills: i, onOpenChange: o } = e,
    s = a(ze),
    c = re(),
    l = x(kn) ?? Dn,
    u = l[n],
    [d, p] = (0, Xr.useState)(
      u == null || `threadKey` in u ? `chat` : u.type === `command` ? `shortcut` : u.type,
    ),
    [m, h] = (0, Xr.useState)(``),
    g;
  t[0] === m ? (g = t[1]) : ((g = m.trim()), (t[0] = m), (t[1] = g));
  let _ = g,
    { loading: v, options: b } = Fr(d === `chat` ? _ : ``),
    C,
    w,
    E,
    D,
    O,
    k,
    j,
    M,
    N,
    P,
    I,
    L,
    R,
    z,
    B,
    V,
    H,
    U;
  if (
    t[2] !== n ||
    t[3] !== d ||
    t[4] !== l ||
    t[5] !== b ||
    t[6] !== r ||
    t[7] !== c ||
    t[8] !== v ||
    t[9] !== o ||
    t[10] !== s ||
    t[11] !== m ||
    t[12] !== u ||
    t[13] !== i ||
    t[14] !== _
  ) {
    let e = [];
    bb0: switch (d) {
      case `chat`:
        break bb0;
      case `shortcut`:
        e = qn(r, _, c).map(Kr);
        break bb0;
      case `keycap`: {
        let n;
        (t[33] !== c || t[34] !== _
          ? ((n = (e) => {
              if (e.action.type === `custom-shortcut`) return [];
              let t = Jr(e, c);
              return _.length > 0 && ![e.id, t, ...hn(e)].some((e) => S(e, _) > 0)
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
            (t[33] = c),
            (t[34] = _),
            (t[35] = n))
          : (n = t[35]),
          (e = [{ id: d, label: c.formatMessage(Qr.keycap), options: Cn.flatMap(n) }]));
        break bb0;
      }
      case `skill`: {
        let n = Jn(i),
          r;
        (t[36] === _
          ? (r = t[37])
          : ((r = (e) => {
              let t = We(e),
                n = ot(e);
              return _.length > 0 && ![e.name, t, n].some((e) => S(e, _) > 0)
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
            (t[36] = _),
            (t[37] = r)),
          (e = [{ id: d, label: c.formatMessage(Qr.skill), options: n.flatMap(r) }]));
      }
    }
    e = e.filter(Gr);
    let a =
        u == null || !(`type` in u)
          ? null
          : u.type === `command`
            ? u.commandId
            : u.type === `skill`
              ? u.skillPath
              : u.keycapId,
      p;
    t[38] !== d || t[39] !== c
      ? ((p = c.formatMessage(
          {
            id: `settings.codexMicro.customAgent.search.labelByType`,
            defaultMessage: `Search {type, select, chat {chats} shortcut {shortcuts} keycap {keycaps} skill {skills} other {assignments}} to assign`,
            description: `Accessible label for searching Codex Micro agent-key assignments by assignment type`,
          },
          { type: d },
        )),
        (t[38] = d),
        (t[39] = c),
        (t[40] = p))
      : (p = t[40]);
    let g = p,
      x = Et.indexOf(n) + 1,
      A;
    (t[41] !== n || t[42] !== o || t[43] !== s
      ? ((A = function (e) {
          (wn(s, n, e), o(!1));
        }),
        (t[41] = n),
        (t[42] = o),
        (t[43] = s),
        (t[44] = A))
      : (A = t[44]),
      (k = A),
      (O = Nt),
      (M = !0),
      (N = `wide`),
      (P = o),
      (D = ee),
      (U = `max-h-[calc(100vh-4rem)] min-h-0 gap-0 overflow-hidden`));
    let F;
    t[45] === x
      ? (F = t[46])
      : ((F = (0, Q.jsx)(kt, {
          children: (0, Q.jsx)(f, {
            id: `settings.codexMicro.customAgent.title`,
            defaultMessage: `Assign agent key {position}`,
            description: `Title of the dialog for assigning a task to a numbered physical Agent Key on the Codex Micro hardware keypad`,
            values: { position: x },
          }),
        })),
        (t[45] = x),
        (t[46] = F));
    let W;
    (t[47] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((W = (0, Q.jsx)(yt, {
          children: (0, Q.jsx)(f, {
            id: `settings.codexMicro.customAgent.description`,
            defaultMessage: `Choose a chat, shortcut, keycap, or skill for this key`,
            description: `Description of the Codex Micro custom agent-key assignment dialog`,
          }),
        })),
        (t[47] = W))
      : (W = t[47]),
      t[48] === F
        ? (j = t[49])
        : ((j = (0, Q.jsx)(Ie, { children: (0, Q.jsx)(ke, { title: F, subtitle: W }) })),
          (t[48] = F),
          (t[49] = j)),
      (E = Ie),
      (H = `min-h-0 flex-1`),
      (w = ut),
      (R = !1),
      (z = g),
      (B = `min-h-0 overflow-hidden rounded-lg`));
    let G;
    (t[50] !== d || t[51] !== c
      ? ((G = c.formatMessage(
          {
            id: `settings.codexMicro.customAgent.search.placeholderByType`,
            defaultMessage: `Search {type, select, chat {chats} shortcut {shortcuts} keycap {keycaps} skill {skills} other {assignments}}`,
            description: `Placeholder for searching Codex Micro agent-key assignments by assignment type`,
          },
          { type: d },
        )),
        (t[50] = d),
        (t[51] = c),
        (t[52] = G))
      : (G = t[52]),
      t[53] !== m || t[54] !== g || t[55] !== G
        ? ((V = (0, Q.jsx)(ut.Input, {
            autoFocus: !0,
            "aria-label": g,
            placeholder: G,
            value: m,
            onValueChange: h,
          })),
          (t[53] = m),
          (t[54] = g),
          (t[55] = G),
          (t[56] = V))
        : (V = t[56]),
      (C = ut.List),
      (I = `max-h-[min(360px,50vh)]!`),
      (L =
        d === `chat` && v
          ? (0, Q.jsx)(`div`, {
              className: `flex h-24 items-center justify-center text-secondary`,
              children: (0, Q.jsx)(lt, { className: `icon-xs` }),
            })
          : d === `chat` && b.length === 0
            ? (0, Q.jsx)(ut.Empty, {
                children: (0, Q.jsx)(f, {
                  id: `settings.codexMicro.customAgent.search.empty`,
                  defaultMessage: `No active chats found`,
                  description: `Empty state for the Codex Micro custom agent-key task search`,
                }),
              })
            : d === `chat`
              ? (0, Q.jsx)(ut.Group, {
                  heading: (0, Q.jsx)(`span`, {
                    className: `block px-2 pt-2 text-sm text-codex-description`,
                    children:
                      _.length === 0
                        ? (0, Q.jsx)(f, {
                            id: `settings.codexMicro.customAgent.recent`,
                            defaultMessage: `Recent chats`,
                            description: `Heading for recent tasks in the Codex Micro custom assignment dialog`,
                          })
                        : (0, Q.jsx)(f, {
                            id: `settings.codexMicro.customAgent.results`,
                            defaultMessage: `Search results`,
                            description: `Heading for task search results in the Codex Micro custom assignment dialog`,
                          }),
                  }),
                  children: b.map((e) => {
                    let { assignment: t, result: r } = e,
                      { threadKey: i } = t,
                      a = Fe(r),
                      o = Et.find((e) => {
                        let n = l[e];
                        return (
                          n != null &&
                          `threadKey` in n &&
                          n.threadKey === i &&
                          n.hostId === t.hostId
                        );
                      }),
                      s = o == null ? null : Et.indexOf(o) + 1,
                      u =
                        r.title ??
                        c.formatMessage({
                          id: `settings.codexMicro.customAgent.untitled`,
                          defaultMessage: `Untitled chat`,
                          description: `Fallback title for an untitled task in the Codex Micro custom assignment dialog`,
                        }),
                      d =
                        r.kind === `local`
                          ? (r.projectLabel ?? r.cwd)
                          : (r.projectLabel ?? r.environmentLabel);
                    return (0, Q.jsx)(
                      _t,
                      {
                        value: a,
                        title: u,
                        description: d,
                        titleTooltipContent: u,
                        descriptionTooltipContent: d,
                        LeftIcon: T,
                        rightAccessory:
                          o === n
                            ? (0, Q.jsx)(et, {
                                className: `text-default`,
                                "aria-hidden": !1,
                                asset: Gt,
                              })
                            : s == null
                              ? null
                              : (0, Q.jsx)(`span`, {
                                  className: `text-xs text-secondary`,
                                  children: (0, Q.jsx)(f, {
                                    id: `settings.codexMicro.customAgent.assignedKey`,
                                    defaultMessage: `Key {position}`,
                                    description: `Label identifying the numbered physical Agent Key on the Codex Micro hardware keypad currently assigned to a task`,
                                    values: { position: s },
                                  }),
                                }),
                        onSelect: () => k(t),
                      },
                      a,
                    );
                  }),
                })
              : e.length === 0
                ? (0, Q.jsx)(ut.Empty, {
                    children: (0, Q.jsx)(f, {
                      id: `settings.codexMicro.customAgent.actions.empty`,
                      defaultMessage: `No matching {type, select, shortcut {shortcuts} keycap {keycaps} skill {skills} other {actions}}`,
                      description: `Empty state when searching actions for a Codex Micro agent key`,
                      values: { type: d },
                    }),
                  })
                : e.map((e) =>
                    (0, Q.jsx)(
                      ut.Group,
                      {
                        heading: (0, Q.jsx)(`span`, {
                          className: `block px-2 pt-2 text-sm text-codex-description`,
                          children: e.label,
                        }),
                        children: e.options.map((e) =>
                          (0, Q.jsx)(
                            _t,
                            {
                              value: e.value,
                              title: e.title,
                              description: e.description,
                              LeftIcon:
                                e.assignment.type === `skill`
                                  ? y
                                  : e.assignment.type === `command`
                                    ? Qt
                                    : void 0,
                              leftAccessory:
                                e.keycap == null
                                  ? void 0
                                  : (0, Q.jsx)(Ln, {
                                      keycap: e.keycap,
                                      className: `icon-xs shrink-0`,
                                    }),
                              rightAccessory:
                                u != null &&
                                `type` in u &&
                                u.type === e.assignment.type &&
                                a === e.value
                                  ? (0, Q.jsx)(et, {
                                      className: `text-default`,
                                      "aria-hidden": !1,
                                      asset: Gt,
                                    })
                                  : null,
                              onSelect: () => k(e.assignment),
                            },
                            e.value,
                          ),
                        ),
                      },
                      e.id,
                    ),
                  )),
      (t[2] = n),
      (t[3] = d),
      (t[4] = l),
      (t[5] = b),
      (t[6] = r),
      (t[7] = c),
      (t[8] = v),
      (t[9] = o),
      (t[10] = s),
      (t[11] = m),
      (t[12] = u),
      (t[13] = i),
      (t[14] = _),
      (t[15] = C),
      (t[16] = w),
      (t[17] = E),
      (t[18] = D),
      (t[19] = O),
      (t[20] = k),
      (t[21] = j),
      (t[22] = M),
      (t[23] = N),
      (t[24] = P),
      (t[25] = I),
      (t[26] = L),
      (t[27] = R),
      (t[28] = z),
      (t[29] = B),
      (t[30] = V),
      (t[31] = H),
      (t[32] = U));
  } else
    ((C = t[15]),
      (w = t[16]),
      (E = t[17]),
      (D = t[18]),
      (O = t[19]),
      (k = t[20]),
      (j = t[21]),
      (M = t[22]),
      (N = t[23]),
      (P = t[24]),
      (I = t[25]),
      (L = t[26]),
      (R = t[27]),
      (z = t[28]),
      (B = t[29]),
      (V = t[30]),
      (H = t[31]),
      (U = t[32]));
  let W;
  t[57] !== C || t[58] !== I || t[59] !== L
    ? ((W = (0, Q.jsx)(C, { className: I, children: L })),
      (t[57] = C),
      (t[58] = I),
      (t[59] = L),
      (t[60] = W))
    : (W = t[60]);
  let G;
  t[61] !== w || t[62] !== W || t[63] !== R || t[64] !== z || t[65] !== B || t[66] !== V
    ? ((G = (0, Q.jsxs)(w, { shouldFilter: R, label: z, className: B, children: [V, W] })),
      (t[61] = w),
      (t[62] = W),
      (t[63] = R),
      (t[64] = z),
      (t[65] = B),
      (t[66] = V),
      (t[67] = G))
    : (G = t[67]);
  let K;
  t[68] !== E || t[69] !== G || t[70] !== H
    ? ((K = (0, Q.jsx)(E, { className: H, children: G })),
      (t[68] = E),
      (t[69] = G),
      (t[70] = H),
      (t[71] = K))
    : (K = t[71]);
  let te = Qr[d],
    ne;
  t[72] === te
    ? (ne = t[73])
    : ((ne = (0, Q.jsx)(ue, { className: `w-36`, children: (0, Q.jsx)(f, { ...te }) })),
      (t[72] = te),
      (t[73] = ne));
  let q;
  t[74] === d
    ? (q = t[75])
    : ((q = Zr.map((e) =>
        (0, Q.jsx)(
          A.Item,
          {
            rightIcon:
              d === e
                ? (0, Q.jsx)(et, { className: `text-info`, "aria-hidden": !1, asset: Gt })
                : null,
            onSelect: () => {
              (p(e), h(``));
            },
            children: (0, Q.jsx)(f, { ...Qr[e] }),
          },
          e,
        ),
      )),
      (t[74] = d),
      (t[75] = q));
  let ie;
  t[76] !== ne || t[77] !== q
    ? ((ie = (0, Q.jsx)(`div`, {
        className: `me-auto`,
        children: (0, Q.jsx)(F, { align: `start`, side: `top`, triggerButton: ne, children: q }),
      })),
      (t[76] = ne),
      (t[77] = q),
      (t[78] = ie))
    : (ie = t[78]);
  let ae;
  t[79] !== k || t[80] !== u
    ? ((ae =
        u == null
          ? null
          : (0, Q.jsx)(dt, {
              color: `secondary`,
              onClick: () => k(null),
              children: (0, Q.jsx)(f, {
                id: `settings.codexMicro.customAgent.remove`,
                defaultMessage: `Remove assignment`,
                description: `Button that removes a custom Codex Micro agent-key assignment`,
              }),
            })),
      (t[79] = k),
      (t[80] = u),
      (t[81] = ae))
    : (ae = t[81]);
  let oe;
  t[82] === o ? (oe = t[83]) : ((oe = () => o(!1)), (t[82] = o), (t[83] = oe));
  let se;
  t[84] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, Q.jsx)(f, {
        id: `settings.codexMicro.customAgent.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the Codex Micro custom agent-key assignment dialog`,
      })),
      (t[84] = se))
    : (se = t[84]);
  let ce;
  t[85] === oe
    ? (ce = t[86])
    : ((ce = (0, Q.jsx)(dt, { color: `ghost`, onClick: oe, children: se })),
      (t[85] = oe),
      (t[86] = ce));
  let le;
  t[87] !== ie || t[88] !== ae || t[89] !== ce
    ? ((le = (0, Q.jsx)(Ie, {
        children: (0, Q.jsxs)(Ne, { expandSingleButton: !1, children: [ie, ae, ce] }),
      })),
      (t[87] = ie),
      (t[88] = ae),
      (t[89] = ce),
      (t[90] = le))
    : (le = t[90]);
  let de;
  t[91] !== D || t[92] !== j || t[93] !== K || t[94] !== le || t[95] !== U
    ? ((de = (0, Q.jsxs)(D, { className: U, children: [j, K, le] })),
      (t[91] = D),
      (t[92] = j),
      (t[93] = K),
      (t[94] = le),
      (t[95] = U),
      (t[96] = de))
    : (de = t[96]);
  let fe;
  return (
    t[97] !== O || t[98] !== M || t[99] !== N || t[100] !== P || t[101] !== de
      ? ((fe = (0, Q.jsx)(O, { open: M, size: N, onOpenChange: P, children: de })),
        (t[97] = O),
        (t[98] = M),
        (t[99] = N),
        (t[100] = P),
        (t[101] = de),
        (t[102] = fe))
      : (fe = t[102]),
    fe
  );
}
function Gr(e) {
  return e.options.length > 0;
}
function Kr(e) {
  let { id: t, label: n, options: r } = e;
  return { id: t, label: n, options: r.map(qr) };
}
function qr(e) {
  let { command: t, description: n, title: r } = e;
  return {
    assignment: { type: `command`, commandId: t.id },
    description: n,
    title: r,
    value: t.id,
  };
}
function Jr(e, t) {
  switch (e.action.type) {
    case `command`: {
      let n = fn(e.action.command);
      return n == null ? e.action.command : d(n, t);
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
var Yr,
  Xr,
  Q,
  Zr,
  Qr,
  $r = e(() => {
    ((Yr = ft()),
      Ut(),
      W(),
      K(),
      l(),
      (Xr = t(c(), 1)),
      pt(),
      he(),
      Lt(),
      qe(),
      q(),
      nt(),
      s(),
      at(),
      Je(),
      Pe(),
      Qe(),
      U(),
      R(),
      nn(),
      g(),
      bt(),
      Se(),
      Ve(),
      xt(),
      Qn(),
      dn(),
      Tn(),
      Wn(),
      gn(),
      Ur(),
      (Q = tt()),
      (Zr = [`chat`, `shortcut`, `keycap`, `skill`]),
      (Qr = zt({
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
  });
function ei(e) {
  let t = (0, ti.c)(9),
    { mode: n, onChange: r } = e,
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, ni.jsx)(f, { ...X.microphoneKey })),
      (o = (0, ni.jsx)(f, { ...X.microphoneKeyDescription })),
      (t[0] = a),
      (t[1] = o))
    : ((a = t[0]), (o = t[1]));
  let s = ri[n],
    c;
  t[2] === s.label
    ? (c = t[3])
    : ((c = (0, ni.jsx)(ue, { children: (0, ni.jsx)(f, { ...s.label }) })),
      (t[2] = s.label),
      (t[3] = c));
  let l;
  t[4] === r
    ? (l = t[5])
    : ((l = i.options.map((e) => {
        let t = ri[e];
        return (0, ni.jsx)(
          A.Item,
          {
            allowWrap: !0,
            onSelect: () => r(e),
            children: (0, ni.jsxs)(`div`, {
              className: `flex min-w-0 flex-col gap-0.5`,
              children: [
                (0, ni.jsx)(`span`, {
                  className: `truncate`,
                  children: (0, ni.jsx)(f, { ...t.label }),
                }),
                (0, ni.jsx)(`span`, {
                  className: `text-sm text-secondary`,
                  children: (0, ni.jsx)(f, { ...t.description }),
                }),
              ],
            }),
          },
          e,
        );
      })),
      (t[4] = r),
      (t[5] = l));
  let u;
  return (
    t[6] !== c || t[7] !== l
      ? ((u = (0, ni.jsx)(Dt, {
          label: a,
          description: o,
          control: (0, ni.jsx)(F, {
            align: `end`,
            contentWidth: `menuWide`,
            triggerButton: c,
            children: l,
          }),
        })),
        (t[6] = c),
        (t[7] = l),
        (t[8] = u))
      : (u = t[8]),
    u
  );
}
var ti,
  ni,
  ri,
  ii = e(() => {
    ((ti = ft()),
      l(),
      he(),
      Pe(),
      Ae(),
      Se(),
      vr(),
      (ni = tt()),
      (ri = {
        "push-to-talk": {
          label: X.microphoneKeyPushToTalk,
          description: X.microphoneKeyPushToTalkDescription,
        },
        realtime: {
          label: X.microphoneKeyVoiceChat,
          description: X.microphoneKeyVoiceChatDescription,
        },
      }));
  });
function ai(e) {
  return Ai.flatMap((t) => (t.slotId === `ACT10_ACT11` && e.separateMicrophoneKeys ? ji : t));
}
function oi() {
  let e = (0, wi.c)(1),
    t = vt.codexMicro;
  if (t == null) return null;
  let n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(si, { codexMicro: t })), (e[0] = n))
      : (n = e[0]),
    n
  );
}
function si(e) {
  let t = (0, wi.c)(180),
    { codexMicro: n } = e,
    r = a(ze),
    i = re(),
    o = x(He),
    s = x(en),
    c = x($t),
    l = x(an),
    d = x(tn),
    p = x(H),
    m = x(En),
    h = x(kn) ?? Dn,
    g = x(Ee),
    { platform: _ } = u(),
    v = oe(B.layout),
    y = oe(B.agentSource),
    b = oe(B.singleTapAgentKeys),
    S = oe(B.lightingBrightness),
    C = oe(B.lightingAutoOff),
    w;
  t[0] === v ? (w = t[1]) : ((w = _n(v)), (t[0] = v), (t[1] = w));
  let T = w,
    D = P(g, `quickChat`) > 0,
    O;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { name: `automations.local` }), (t[2] = O))
    : (O = t[2]);
  let k = G(St, O).isCapable,
    M;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = { name: `automations.cloud` }), (t[3] = M))
    : (M = t[3]);
  let ee = G(St, M).isCapable,
    I = Mt(`1372061905`),
    L = Ct(),
    R = L ? T.voiceButtonMode : `push-to-talk`,
    V = l === `creator-micro-v2` ? `Creator Micro` : `Codex Micro`,
    U;
  t[4] !== ee || t[5] !== o || t[6] !== p || t[7] !== I || t[8] !== D || t[9] !== L || t[10] !== k
    ? ((U = pn.filter(
        (e) =>
          (e.requiredAccess == null || o) &&
          (e.id !== `manageTasks` || k || ee) &&
          (e.id !== `hotkeyWindow` || I) &&
          (e.id !== `quickChat` || D) &&
          (e.id !== `composer.captureAppshot` || p) &&
          (!Bt(e.id) || L),
      )),
      (t[4] = ee),
      (t[5] = o),
      (t[6] = p),
      (t[7] = I),
      (t[8] = D),
      (t[9] = L),
      (t[10] = k),
      (t[11] = U))
    : (U = t[11]);
  let W = U,
    { skills: K } = z(),
    [te, ne] = (0, Ti.useState)(null),
    [q, ie] = (0, Ti.useState)(null),
    [se, le] = (0, Ti.useState)(!1),
    de = _ === `macOS`,
    fe;
  t[12] === n
    ? (fe = t[13])
    : ((fe = () => n.getInputMonitoringPermissionStatus()), (t[12] = n), (t[13] = fe));
  let me;
  t[14] !== de || t[15] !== fe
    ? ((me = {
        enabled: de,
        queryFn: fe,
        queryKey: Pn,
        refetchInterval: Fn,
        refetchIntervalInBackground: !0,
        refetchOnMount: `always`,
        staleTime: It.FIVE_SECONDS,
      }),
      (t[14] = de),
      (t[15] = fe),
      (t[16] = me))
    : (me = t[16]);
  let { data: he } = pe(me),
    ge;
  t[17] === l
    ? (ge = t[18])
    : ((ge =
        l === `creator-micro-v2`
          ? (0, $.jsx)(f, { ...Te.creatorMicro })
          : (0, $.jsx)(f, { ...E(`codex-micro`) })),
      (t[17] = l),
      (t[18] = ge));
  let _e;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, $.jsx)(f, { ...X.connection })), (t[19] = _e))
    : (_e = t[19]);
  let ve;
  t[20] !== V || t[21] !== s.controlPlaneStatus || t[22] !== s.error || t[23] !== s.status
    ? ((ve =
        s.status === `error` || s.controlPlaneStatus === `unavailable`
          ? (0, $.jsx)(fi, {
              controlPlaneStatus: s.controlPlaneStatus,
              deviceName: V,
              error: s.error,
            })
          : void 0),
      (t[20] = V),
      (t[21] = s.controlPlaneStatus),
      (t[22] = s.error),
      (t[23] = s.status),
      (t[24] = ve))
    : (ve = t[24]);
  let ye;
  t[25] !== s.controlPlaneStatus || t[26] !== s.error || t[27] !== s.status
    ? ((ye = (0, $.jsx)(ui, {
        controlPlaneStatus: s.controlPlaneStatus,
        error: s.error,
        status: s.status,
      })),
      (t[25] = s.controlPlaneStatus),
      (t[26] = s.error),
      (t[27] = s.status),
      (t[28] = ye))
    : (ye = t[28]);
  let be;
  t[29] !== c || t[30] !== V || t[31] !== r
    ? ((be = c
        ? (0, $.jsx)(dt, {
            color: `danger`,
            size: `toolbar`,
            onClick: () => {
              xe(r, jr, {
                deviceName: V,
                onConfirm: () => {
                  r.get($t) && Wt(r);
                },
              });
            },
            children: (0, $.jsx)(f, {
              id: `settings.codexMicro.connection.remove`,
              defaultMessage: `Remove`,
              description: `Button that removes an unavailable Codex Micro or Creator Micro connection from Codex`,
            }),
          })
        : null),
      (t[29] = c),
      (t[30] = V),
      (t[31] = r),
      (t[32] = be))
    : (be = t[32]);
  let Se;
  t[33] !== ye || t[34] !== be
    ? ((Se = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [ye, be] })),
      (t[33] = ye),
      (t[34] = be),
      (t[35] = Se))
    : (Se = t[35]);
  let Ce;
  t[36] !== ve || t[37] !== Se
    ? ((Ce = (0, $.jsx)(Dt, { label: _e, description: ve, control: Se })),
      (t[36] = ve),
      (t[37] = Se),
      (t[38] = Ce))
    : (Ce = t[38]);
  let De;
  t[39] !== s.battery || t[40] !== s.status
    ? ((De =
        s.status === `connected` && s.battery != null
          ? (0, $.jsx)(Dt, {
              label: (0, $.jsx)(f, {
                id: `settings.codexMicro.battery`,
                defaultMessage: `Battery`,
                description: `Label for the Codex Micro battery status`,
              }),
              control: (0, $.jsx)(Jt, { ...s.battery }),
            })
          : null),
      (t[39] = s.battery),
      (t[40] = s.status),
      (t[41] = De))
    : (De = t[41]);
  let ke;
  t[42] !== n || t[43] !== V || t[44] !== he || t[45] !== _
    ? ((ke =
        _ === `macOS`
          ? (0, $.jsx)(Dt, {
              label: (0, $.jsx)(f, { ...X.inputMonitoring }),
              description: (0, $.jsx)(f, {
                id: `settings.codexMicro.inputMonitoring.descriptionByDevice`,
                defaultMessage: `Required for {deviceName} key presses on macOS`,
                description: `Description for the macOS Input Monitoring permission state for Codex Micro or Creator Micro`,
                values: { deviceName: V },
              }),
              control: (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, $.jsx)(li, { status: he }),
                  he === `denied`
                    ? (0, $.jsx)(dt, {
                        color: `secondary`,
                        onClick: () => {
                          n.openInputMonitoringSettings();
                        },
                        children: (0, $.jsx)(f, {
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
      (t[43] = V),
      (t[44] = he),
      (t[45] = _),
      (t[46] = ke))
    : (ke = t[46]);
  let Ae;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, $.jsx)(f, { ...X.lightingBrightness })), (t[47] = Ae))
    : (Ae = t[47]);
  let Ne;
  t[48] === V
    ? (Ne = t[49])
    : ((Ne = (0, $.jsx)(f, { ...X.lightingBrightnessDescription, values: { deviceName: V } })),
      (t[48] = V),
      (t[49] = Ne));
  let Pe;
  t[50] === r
    ? (Pe = t[51])
    : ((Pe = (e) => {
        je(r, B.lightingBrightness, e);
      }),
      (t[50] = r),
      (t[51] = Pe));
  let Fe;
  t[52] !== S || t[53] !== Pe
    ? ((Fe = (0, $.jsx)(ci, { value: S, onChange: Pe })), (t[52] = S), (t[53] = Pe), (t[54] = Fe))
    : (Fe = t[54]);
  let Ie;
  t[55] !== Ne || t[56] !== Fe
    ? ((Ie = (0, $.jsx)(Dt, { label: Ae, description: Ne, control: Fe })),
      (t[55] = Ne),
      (t[56] = Fe),
      (t[57] = Ie))
    : (Ie = t[57]);
  let Re;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = (0, $.jsx)(f, { ...X.lightingAutoOff })), (t[58] = Re))
    : (Re = t[58]);
  let Be;
  t[59] === V
    ? (Be = t[60])
    : ((Be = (0, $.jsx)(f, { ...X.lightingAutoOffDescription, values: { deviceName: V } })),
      (t[59] = V),
      (t[60] = Be));
  let Ve = Di[C],
    Ue;
  t[61] === Ve
    ? (Ue = t[62])
    : ((Ue = (0, $.jsx)(ue, { className: `w-42!`, children: (0, $.jsx)(f, { ...Ve }) })),
      (t[61] = Ve),
      (t[62] = Ue));
  let We;
  t[63] === r
    ? (We = t[64])
    : ((We = ce.options.map((e) =>
        (0, $.jsx)(
          A.Item,
          {
            onSelect: () => {
              je(r, B.lightingAutoOff, e);
            },
            children: (0, $.jsx)(f, { ...Di[e] }),
          },
          e,
        ),
      )),
      (t[63] = r),
      (t[64] = We));
  let Ge;
  t[65] !== Ue || t[66] !== We
    ? ((Ge = (0, $.jsx)(F, { align: `end`, contentWidth: `xs`, triggerButton: Ue, children: We })),
      (t[65] = Ue),
      (t[66] = We),
      (t[67] = Ge))
    : (Ge = t[67]);
  let Ke;
  t[68] !== Be || t[69] !== Ge
    ? ((Ke = (0, $.jsx)(Dt, { label: Re, description: Be, control: Ge })),
      (t[68] = Be),
      (t[69] = Ge),
      (t[70] = Ke))
    : (Ke = t[70]);
  let qe;
  t[71] !== Ce || t[72] !== De || t[73] !== ke || t[74] !== Ie || t[75] !== Ke
    ? ((qe = (0, $.jsx)(Le, {
        children: (0, $.jsx)(Le.Content, {
          children: (0, $.jsxs)(we, { children: [Ce, De, ke, Ie, Ke] }),
        }),
      })),
      (t[71] = Ce),
      (t[72] = De),
      (t[73] = ke),
      (t[74] = Ie),
      (t[75] = Ke),
      (t[76] = qe))
    : (qe = t[76]);
  let Je;
  t[77] === r
    ? (Je = t[78])
    : ((Je = () => {
        xe(r, Or, {
          onConfirm: () => {
            je(r, B.layout, N);
          },
        });
      }),
      (t[77] = r),
      (t[78] = Je));
  let Ye;
  t[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = (0, $.jsx)(f, {
        id: `settings.codexMicro.keyboardLayout.reset`,
        defaultMessage: `Reset layout`,
        description: `Button that restores the default Codex Micro action-key layout`,
      })),
      (t[79] = Ye))
    : (Ye = t[79]);
  let Xe;
  t[80] === Je
    ? (Xe = t[81])
    : ((Xe = (0, $.jsx)(dt, { color: `ghost`, size: `toolbar`, onClick: Je, children: Ye })),
      (t[80] = Je),
      (t[81] = Xe));
  let Ze;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ze = (0, $.jsx)(f, { ...X.keyboardLayout })), (t[82] = Ze))
    : (Ze = t[82]);
  let Qe;
  t[83] === Xe
    ? (Qe = t[84])
    : ((Qe = (0, $.jsx)(Le.Header, { actions: Xe, title: Ze })), (t[83] = Xe), (t[84] = Qe));
  let $e = y === `custom` ? h : void 0,
    et = y === `custom` ? ie : void 0,
    tt,
    nt;
  t[85] !== T || t[86] !== r
    ? ((tt = (e, t) => {
        je(r, B.layout, Sn(T, e, t));
      }),
      (nt = (e, t) => {
        je(r, B.layout, mn(T, e, t));
      }),
      (t[85] = T),
      (t[86] = r),
      (t[87] = tt),
      (t[88] = nt))
    : ((tt = t[87]), (nt = t[88]));
  let rt, it;
  t[89] === r
    ? ((rt = t[90]), (it = t[91]))
    : ((rt = (e) => {
        cn(r, e);
      }),
      (it = (e) => {
        Zt(r, e);
      }),
      (t[89] = r),
      (t[90] = rt),
      (t[91] = it));
  let at;
  t[92] !== m ||
  t[93] !== W ||
  t[94] !== V ||
  t[95] !== se ||
  t[96] !== T ||
  t[97] !== d ||
  t[98] !== K ||
  t[99] !== $e ||
  t[100] !== et ||
  t[101] !== tt ||
  t[102] !== nt ||
  t[103] !== rt ||
  t[104] !== it ||
  t[105] !== R
    ? ((at = (0, $.jsx)(Le.Content, {
        children: (0, $.jsx)(we, {
          children: (0, $.jsx)(gi, {
            agentSlots: m,
            commands: W,
            customAgentAssignments: $e,
            deviceName: V,
            isEncoderEditorOpen: se,
            layout: T,
            previewState: d,
            skills: K,
            voiceButtonMode: R,
            onEditSlot: ne,
            onEditAgentKey: et,
            onEncoderEditorOpenChange: le,
            onSetAnalogAction: tt,
            onSetEncoderAction: nt,
            onSelectAnalogDirection: rt,
            onSetAnalogEditorOpen: it,
          }),
        }),
      })),
      (t[92] = m),
      (t[93] = W),
      (t[94] = V),
      (t[95] = se),
      (t[96] = T),
      (t[97] = d),
      (t[98] = K),
      (t[99] = $e),
      (t[100] = et),
      (t[101] = tt),
      (t[102] = nt),
      (t[103] = rt),
      (t[104] = it),
      (t[105] = R),
      (t[106] = at))
    : (at = t[106]);
  let ot;
  t[107] !== Qe || t[108] !== at
    ? ((ot = (0, $.jsxs)(Le, { children: [Qe, at] })), (t[107] = Qe), (t[108] = at), (t[109] = ot))
    : (ot = t[109]);
  let st;
  t[110] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (0, $.jsx)(Le.Header, { title: (0, $.jsx)(f, { ...X.options }) })), (t[110] = st))
    : (st = t[110]);
  let ct, lt;
  t[111] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (0, $.jsx)(f, { ...X.agentKeys })),
      (lt = (0, $.jsx)(f, {
        id: `settings.codexMicro.agentKeys.description`,
        defaultMessage: `Choose what the six agent keys follow or trigger`,
        description: `Description for the Codex Micro agent-key task source setting`,
      })),
      (t[111] = ct),
      (t[112] = lt))
    : ((ct = t[111]), (lt = t[112]));
  let ut = Ei[y],
    ft;
  t[113] === ut.label
    ? (ft = t[114])
    : ((ft = (0, $.jsx)(ue, { children: (0, $.jsx)(f, { ...ut.label }) })),
      (t[113] = ut.label),
      (t[114] = ft));
  let pt;
  t[115] === r
    ? (pt = t[116])
    : ((pt = Me.options.map((e) => {
        let t = Ei[e];
        return (0, $.jsx)(
          A.Item,
          {
            allowWrap: !0,
            onSelect: () => {
              (ie(null), je(r, B.agentSource, e));
            },
            children: (0, $.jsxs)(`div`, {
              className: `flex min-w-0 flex-col gap-0.5`,
              children: [
                (0, $.jsx)(`span`, {
                  className: `truncate`,
                  children: (0, $.jsx)(f, { ...t.label }),
                }),
                (0, $.jsx)(`span`, {
                  className: `text-sm text-secondary`,
                  children: (0, $.jsx)(f, { ...t.description }),
                }),
              ],
            }),
          },
          e,
        );
      })),
      (t[115] = r),
      (t[116] = pt));
  let mt;
  t[117] !== ft || t[118] !== pt
    ? ((mt = (0, $.jsx)(Dt, {
        label: ct,
        description: lt,
        control: (0, $.jsx)(F, {
          align: `end`,
          contentWidth: `menuWide`,
          triggerButton: ft,
          children: pt,
        }),
      })),
      (t[117] = ft),
      (t[118] = pt),
      (t[119] = mt))
    : (mt = t[119]);
  let ht, gt;
  t[120] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = (0, $.jsx)(f, { ...X.knob })),
      (gt = (0, $.jsx)(f, { ...X.knobDescription })),
      (t[120] = ht),
      (t[121] = gt))
    : ((ht = t[120]), (gt = t[121]));
  let _t = Oi[T.encoderMode],
    vt;
  t[122] === _t.label
    ? (vt = t[123])
    : ((vt = (0, $.jsx)(ue, { children: (0, $.jsx)(f, { ..._t.label }) })),
      (t[122] = _t.label),
      (t[123] = vt));
  let yt;
  t[124] !== T || t[125] !== r
    ? ((yt = Oe.options.map((e) => {
        let t = Oi[e];
        return (0, $.jsx)(
          A.Item,
          {
            allowWrap: !0,
            onSelect: () => {
              (le(e === `custom`), je(r, B.layout, { ...T, encoderMode: e }));
            },
            children: (0, $.jsxs)(`div`, {
              className: `flex min-w-0 flex-col gap-0.5`,
              children: [
                (0, $.jsx)(`span`, {
                  className: `truncate`,
                  children: (0, $.jsx)(f, { ...t.label }),
                }),
                (0, $.jsx)(`span`, {
                  className: `text-sm text-secondary`,
                  children: (0, $.jsx)(f, { ...t.description }),
                }),
              ],
            }),
          },
          e,
        );
      })),
      (t[124] = T),
      (t[125] = r),
      (t[126] = yt))
    : (yt = t[126]);
  let bt;
  t[127] !== vt || t[128] !== yt
    ? ((bt = (0, $.jsx)(Dt, {
        label: ht,
        description: gt,
        control: (0, $.jsx)(F, {
          align: `end`,
          contentWidth: `menuWide`,
          triggerButton: vt,
          children: yt,
        }),
      })),
      (t[127] = vt),
      (t[128] = yt),
      (t[129] = bt))
    : (bt = t[129]);
  let xt;
  t[130] !== L || t[131] !== T || t[132] !== r
    ? ((xt = L
        ? (0, $.jsx)(ei, {
            mode: T.voiceButtonMode,
            onChange: (e) => {
              je(r, B.layout, { ...T, voiceButtonMode: e });
            },
          })
        : null),
      (t[130] = L),
      (t[131] = T),
      (t[132] = r),
      (t[133] = xt))
    : (xt = t[133]);
  let wt, Tt;
  t[134] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((wt = (0, $.jsx)(f, { ...X.separateMicrophoneKeys })),
      (Tt = (0, $.jsx)(f, { ...X.separateMicrophoneKeysDescription })),
      (t[134] = wt),
      (t[135] = Tt))
    : ((wt = t[134]), (Tt = t[135]));
  let Et = T.separateMicrophoneKeys,
    Ot;
  t[136] === i
    ? (Ot = t[137])
    : ((Ot = i.formatMessage(X.separateMicrophoneKeys)), (t[136] = i), (t[137] = Ot));
  let kt;
  t[138] !== T || t[139] !== r
    ? ((kt = (e) => {
        je(r, B.layout, { ...T, separateMicrophoneKeys: e });
      }),
      (t[138] = T),
      (t[139] = r),
      (t[140] = kt))
    : (kt = t[140]);
  let At;
  t[141] !== T.separateMicrophoneKeys || t[142] !== Ot || t[143] !== kt
    ? ((At = (0, $.jsx)(Dt, {
        label: wt,
        description: Tt,
        control: (0, $.jsx)(ae, { checked: Et, ariaLabel: Ot, onChange: kt }),
      })),
      (t[141] = T.separateMicrophoneKeys),
      (t[142] = Ot),
      (t[143] = kt),
      (t[144] = At))
    : (At = t[144]);
  let jt, Nt;
  t[145] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((jt = (0, $.jsx)(f, { ...X.singleTapAgentKeys })),
      (Nt = (0, $.jsx)(f, { ...X.singleTapAgentKeysDescription })),
      (t[145] = jt),
      (t[146] = Nt))
    : ((jt = t[145]), (Nt = t[146]));
  let Pt;
  t[147] === i
    ? (Pt = t[148])
    : ((Pt = i.formatMessage(X.singleTapAgentKeys)), (t[147] = i), (t[148] = Pt));
  let Ft;
  t[149] === r
    ? (Ft = t[150])
    : ((Ft = (e) => {
        je(r, B.singleTapAgentKeys, e);
      }),
      (t[149] = r),
      (t[150] = Ft));
  let Lt;
  t[151] !== b || t[152] !== Pt || t[153] !== Ft
    ? ((Lt = (0, $.jsx)(Dt, {
        label: jt,
        description: Nt,
        control: (0, $.jsx)(ae, { checked: b, ariaLabel: Pt, onChange: Ft }),
      })),
      (t[151] = b),
      (t[152] = Pt),
      (t[153] = Ft),
      (t[154] = Lt))
    : (Lt = t[154]);
  let Rt;
  t[155] !== mt || t[156] !== bt || t[157] !== xt || t[158] !== At || t[159] !== Lt
    ? ((Rt = (0, $.jsxs)(Le, {
        children: [
          st,
          (0, $.jsx)(Le.Content, { children: (0, $.jsxs)(we, { children: [mt, bt, xt, At, Lt] }) }),
        ],
      })),
      (t[155] = mt),
      (t[156] = bt),
      (t[157] = xt),
      (t[158] = At),
      (t[159] = Lt),
      (t[160] = Rt))
    : (Rt = t[160]);
  let zt;
  t[161] !== W || t[162] !== te || t[163] !== T || t[164] !== r || t[165] !== K || t[166] !== R
    ? ((zt =
        te == null
          ? null
          : (0, $.jsx)(
              hi,
              {
                commands: W,
                layout: T,
                skills: K,
                slotId: te,
                voiceButtonMode: R,
                onOpenChange: (e) => {
                  e || ne(null);
                },
                onSave: (e) => {
                  je(r, B.layout, vn(T, te, e)).then(() => {
                    ne(null);
                  });
                },
              },
              te,
            )),
      (t[161] = W),
      (t[162] = te),
      (t[163] = T),
      (t[164] = r),
      (t[165] = K),
      (t[166] = R),
      (t[167] = zt))
    : (zt = t[167]);
  let Vt;
  t[168] !== y || t[169] !== W || t[170] !== q || t[171] !== K
    ? ((Vt =
        y === `custom` && q != null
          ? (0, $.jsx)(
              Wr,
              {
                agentKeyId: q,
                commands: W,
                skills: K,
                onOpenChange: (e) => {
                  e || ie(null);
                },
              },
              q,
            )
          : null),
      (t[168] = y),
      (t[169] = W),
      (t[170] = q),
      (t[171] = K),
      (t[172] = Vt))
    : (Vt = t[172]);
  let Ht;
  return (
    t[173] !== qe ||
    t[174] !== ot ||
    t[175] !== Rt ||
    t[176] !== zt ||
    t[177] !== Vt ||
    t[178] !== ge
      ? ((Ht = (0, $.jsxs)(j, { title: ge, children: [qe, ot, Rt, zt, Vt] })),
        (t[173] = qe),
        (t[174] = ot),
        (t[175] = Rt),
        (t[176] = zt),
        (t[177] = Vt),
        (t[178] = ge),
        (t[179] = Ht))
      : (Ht = t[179]),
    Ht
  );
}
function ci(e) {
  let t = (0, wi.c)(17),
    { value: n, onChange: r } = e,
    i = re(),
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
        children: (0, $.jsx)(Ft, { style: `percent`, value: u }),
      })),
      (t[12] = u),
      (t[13] = d));
  let f;
  return (
    t[14] !== l || t[15] !== d
      ? ((f = (0, $.jsxs)(`div`, {
          className: `flex h-9 min-w-48 items-center gap-2.5`,
          children: [l, d],
        })),
        (t[14] = l),
        (t[15] = d),
        (t[16] = f))
      : (f = t[16]),
    f
  );
}
function li(e) {
  let t = (0, wi.c)(3),
    { status: n } = e;
  switch (n) {
    case `granted`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(`span`, {
              className: `text-sm text-chart-green`,
              children: (0, $.jsx)(f, {
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
              children: (0, $.jsx)(f, {
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
              children: (0, $.jsx)(f, {
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
function ui(e) {
  let t = (0, wi.c)(13),
    { controlPlaneStatus: n, error: r, status: i } = e,
    a = i === `connected` && n === `unavailable`,
    o;
  bb0: switch (i) {
    case `connected`: {
      let e;
      (t[0] === a
        ? (e = t[1])
        : ((e = a
            ? (0, $.jsx)(f, { ...X.connectionControlUnavailable })
            : (0, $.jsx)(f, {
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
        ? ((e = (0, $.jsx)(f, {
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
        ? ((e = (0, $.jsx)(f, {
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
      (t[4] === r ? (e = t[5]) : ((e = (0, $.jsx)(di, { error: r })), (t[4] = r), (t[5] = e)),
        (o = e));
    }
  }
  let s = i === `error`,
    c = i !== `error` && !a,
    l;
  t[6] !== a || t[7] !== s || t[8] !== c
    ? ((l = fe(`text-sm`, { "text-danger": s, "text-warning": a, "text-secondary": c })),
      (t[6] = a),
      (t[7] = s),
      (t[8] = c),
      (t[9] = l))
    : (l = t[9]);
  let u;
  return (
    t[10] !== o || t[11] !== l
      ? ((u = (0, $.jsx)(`span`, { className: l, children: o })),
        (t[10] = o),
        (t[11] = l),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
function di(e) {
  let t = (0, wi.c)(3),
    { error: n } = e;
  if (n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(f, { ...X.connectionProblem })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let r = ki[n],
    i;
  return (
    t[1] === r.label
      ? (i = t[2])
      : ((i = (0, $.jsx)(f, { ...r.label })), (t[1] = r.label), (t[2] = i)),
    i
  );
}
function fi(e) {
  let t = (0, wi.c)(5),
    { controlPlaneStatus: n, deviceName: r, error: i } = e;
  if (n === `unavailable`) {
    let e;
    return (
      t[0] === r
        ? (e = t[1])
        : ((e = (0, $.jsx)(`span`, {
            className: `text-warning`,
            children: (0, $.jsx)(f, {
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
              ? (0, $.jsx)(f, { ...X.connectionProblemDescription, values: { deviceName: r } })
              : (0, $.jsx)(f, { ...ki[i].description, values: { deviceName: r } }),
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function pi(e) {
  let t = (0, wi.c)(34),
    { keycap: n, voiceButtonMode: r } = e;
  switch (n.id) {
    case `FAST`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(f, {
              id: `settings.codexMicro.keycaps.fast`,
              defaultMessage: `Toggle Fast mode`,
              description: `Codex Micro action label for the FAST keycap`,
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
                ? (0, $.jsx)(f, { ...X.microphoneKeyStartVoiceChat })
                : (0, $.jsx)(f, { ...X.microphoneKeyPushToTalk })),
            (t[4] = r),
            (t[5] = e)),
        e
      );
    }
    case `CODEX`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
              id: `settings.codexMicro.keycaps.review`,
              defaultMessage: `Toggle review`,
              description: `Codex Micro action label for the DIFF keycap`,
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
          ? ((e = (0, $.jsx)(f, {
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
function mi(e) {
  let t = (0, wi.c)(32),
    { keycap: n, skills: r, slot: i, voiceButtonMode: a } = e,
    o = re(),
    s = i.action?.type === `skill` ? i.action : null,
    c = i.action?.type === `command` ? i.action.commandId : i.commandId,
    l,
    u,
    p,
    m,
    h,
    g,
    _;
  if (t[0] !== c || t[1] !== s || t[2] !== o || t[3] !== n || t[4] !== r || t[5] !== a) {
    p = c == null ? null : fn(c);
    let e = p;
    (e == null && n.action.type === `command` && (e = fn(n.action.command)),
      (u = e == null ? null : me(e, o).description));
    bb0: switch (n.action.type) {
      case `command`:
        l = null;
        break bb0;
      case `composer-text`: {
        let e;
        (t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(f, {
              id: `settings.codexMicro.keycaps.composerText.description`,
              defaultMessage: `Available when a composer is active`,
              description: `Availability description for Codex Micro composer text keycaps`,
            })),
            (t[13] = e))
          : (e = t[13]),
          (l = e));
        break bb0;
      }
      case `custom-shortcut`: {
        let e;
        (t[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(f, {
              id: `settings.codexMicro.keycaps.custom.description`,
              defaultMessage: `Choose a shortcut to assign`,
              description: `Description for an unassigned Codex Micro custom keycap`,
            })),
            (t[14] = e))
          : (e = t[14]),
          (l = e));
        break bb0;
      }
      case `external-url`: {
        let e;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(f, {
              id: `settings.codexMicro.keycaps.externalUrl.description`,
              defaultMessage: `Opens in your preferred browser`,
              description: `Description for a Codex Micro external URL keycap`,
            })),
            (t[15] = e))
          : (e = t[15]),
          (l = e));
        break bb0;
      }
      case `named`: {
        let e;
        (t[16] === a
          ? (e = t[17])
          : ((e =
              a === `realtime`
                ? (0, $.jsx)(f, { ...X.microphoneKeyVoiceChatDescription })
                : (0, $.jsx)(f, { ...X.microphoneKeyPushToTalkDescription })),
            (t[16] = a),
            (t[17] = e)),
          (l = e));
      }
    }
    g = `flex min-w-32 flex-col gap-0.5`;
    let i;
    (t[18] === n ? (i = t[19]) : ((i = Ci(n)), (t[18] = n), (t[19] = i)),
      t[20] === i
        ? (_ = t[21])
        : ((_ = (0, $.jsx)(`span`, { className: `font-mono text-xs font-semibold`, children: i })),
          (t[20] = i),
          (t[21] = _)),
      (m = `text-xs`),
      (h =
        s == null
          ? p == null
            ? (0, $.jsx)(pi, { keycap: n, voiceButtonMode: a })
            : d(p, o)
          : jn(s, r, o)),
      (t[0] = c),
      (t[1] = s),
      (t[2] = o),
      (t[3] = n),
      (t[4] = r),
      (t[5] = a),
      (t[6] = l),
      (t[7] = u),
      (t[8] = p),
      (t[9] = m),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _));
  } else ((l = t[6]), (u = t[7]), (p = t[8]), (m = t[9]), (h = t[10]), (g = t[11]), (_ = t[12]));
  let v;
  t[22] !== m || t[23] !== h
    ? ((v = (0, $.jsx)(`span`, { className: m, children: h })),
      (t[22] = m),
      (t[23] = h),
      (t[24] = v))
    : (v = t[24]);
  let y = s == null ? (u ?? (p == null ? l : null)) : null,
    b;
  t[25] === y
    ? (b = t[26])
    : ((b = (0, $.jsx)(`span`, { className: `text-xs opacity-65`, children: y })),
      (t[25] = y),
      (t[26] = b));
  let x;
  return (
    t[27] !== g || t[28] !== _ || t[29] !== v || t[30] !== b
      ? ((x = (0, $.jsxs)(`div`, { className: g, children: [_, v, b] })),
        (t[27] = g),
        (t[28] = _),
        (t[29] = v),
        (t[30] = b),
        (t[31] = x))
      : (x = t[31]),
    x
  );
}
function hi(e) {
  let t = (0, wi.c)(93),
    {
      commands: n,
      layout: r,
      skills: i,
      slotId: a,
      voiceButtonMode: o,
      onOpenChange: s,
      onSave: c,
    } = e,
    l = re(),
    u = r.slots[a],
    [p, m] = (0, Ti.useState)(u.keycapId),
    h;
  t[0] !== u.action || t[1] !== u.commandId
    ? ((h =
        u.action ?? (u.commandId == null ? void 0 : { type: `command`, commandId: u.commandId })),
      (t[0] = u.action),
      (t[1] = u.commandId),
      (t[2] = h))
    : (h = t[2]);
  let [g, _] = (0, Ti.useState)(h),
    [v, y] = (0, Ti.useState)(``),
    [b, x] = (0, Ti.useState)(null),
    S,
    C,
    w,
    T,
    E,
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
    B;
  if (
    t[3] !== l ||
    t[4] !== p ||
    t[5] !== r ||
    t[6] !== s ||
    t[7] !== c ||
    t[8] !== v ||
    t[9] !== g ||
    t[10] !== i ||
    t[11] !== a ||
    t[12] !== o
  ) {
    let e = xn(p),
      n = g?.type === `command` ? fn(g.commandId) : null;
    D =
      e.action.type === `custom-shortcut`
        ? l.formatMessage({
            id: `settings.codexMicro.editor.customShortcut.none`,
            defaultMessage: `Unassigned`,
            description: `Dropdown option that clears a Codex Micro keycap command`,
          })
        : l.formatMessage({
            id: `settings.codexMicro.editor.customShortcut.useDefault`,
            defaultMessage: `Use keycap default`,
            description: `Dropdown option that restores a Codex Micro keycap's predefined action`,
          });
    let u = yn(a),
      h;
    t[31] === v ? (h = t[32]) : ((h = (e) => Si(e, v)), (t[31] = v), (t[32] = h));
    let b = u.filter(h),
      x = ai(r);
    ((E = Nt),
      (k = !0),
      (A = `wide`),
      (j = s),
      (T = ee),
      (R = `form`),
      (z = `max-h-[calc(100vh-4rem)] min-h-0 gap-0 overflow-hidden`),
      (B = (t) => {
        (t.preventDefault(),
          c({ keycapId: e.id, commandId: n?.id, action: g?.type === `skill` ? g : void 0 }));
      }));
    let V;
    (t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((V = (0, $.jsx)(kt, {
          children: (0, $.jsx)(f, {
            id: `settings.codexMicro.editor.title`,
            defaultMessage: `Edit keycap`,
            description: `Title for the Codex Micro keycap slot editor`,
          }),
        })),
        (t[33] = V))
      : (V = t[33]),
      t[34] === a
        ? (O = t[35])
        : ((O = (0, $.jsx)(Ie, {
            children: (0, $.jsx)(ke, {
              title: V,
              subtitle: (0, $.jsx)(yt, {
                children: (0, $.jsx)(f, {
                  id: `settings.codexMicro.editor.subtitle`,
                  defaultMessage: `Choose what appears on {slotId}`,
                  description: `Subtitle for the Codex Micro keycap slot editor`,
                  values: { slotId: a },
                }),
              }),
            }),
          })),
          (t[34] = a),
          (t[35] = O)),
      (w = Ie),
      (P = `flex min-h-0 flex-1 flex-col gap-3`));
    let H;
    t[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((H = (0, $.jsx)(Re, { className: `icon-sm shrink-0 text-tertiary` })), (t[36] = H))
      : (H = t[36]);
    let U;
    t[37] === l
      ? (U = t[38])
      : ((U = l.formatMessage({
          id: `settings.codexMicro.editor.searchLabel`,
          defaultMessage: `Search keycaps`,
          description: `Accessible label for searching Codex Micro keycaps in the keycap editor`,
        })),
        (t[37] = l),
        (t[38] = U));
    let W;
    t[39] === l
      ? (W = t[40])
      : ((W = l.formatMessage({
          id: `settings.codexMicro.editor.searchPlaceholder`,
          defaultMessage: `Search keycaps`,
          description: `Placeholder for searching Codex Micro keycaps in the keycap editor`,
        })),
        (t[39] = l),
        (t[40] = W));
    let G;
    (t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((G = (e) => {
          y(e.currentTarget.value);
        }),
        (t[41] = G))
      : (G = t[41]),
      t[42] !== v || t[43] !== U || t[44] !== W
        ? ((F = (0, $.jsxs)(`div`, {
            className: `flex h-10 shrink-0 items-center gap-2 rounded-lg border border-primary-outline bg-background-primary-soft/75 px-3 text-sm text-default`,
            children: [
              H,
              (0, $.jsx)(`input`, {
                autoFocus: !0,
                className: `min-w-0 flex-1 bg-transparent outline-none placeholder:text-tertiary`,
                "aria-label": U,
                placeholder: W,
                value: v,
                onChange: G,
              }),
            ],
          })),
          (t[42] = v),
          (t[43] = U),
          (t[44] = W),
          (t[45] = F))
        : (F = t[45]));
    let K =
      b.length === 0
        ? (0, $.jsx)(`div`, {
            className: `flex min-h-28 items-center justify-center rounded-lg border border-default px-4 text-sm text-codex-description`,
            children: (0, $.jsx)(f, {
              id: `settings.codexMicro.editor.noKeycaps`,
              defaultMessage: `No matching keycaps`,
              description: `Empty state shown when keycap search returns no results`,
            }),
          })
        : (0, $.jsx)(`div`, {
            className: `grid grid-cols-[repeat(auto-fill,minmax(4.75rem,4.75rem))] justify-between gap-2`,
            children: b.map((t) => {
              let n = t.id === e.id,
                a = x.find((e) => r.slots[e.slotId].keycapId === t.id);
              return (0, $.jsx)(
                L,
                {
                  delayOpen: !0,
                  tooltipContent: (0, $.jsx)(mi, {
                    keycap: t,
                    skills: i,
                    slot: a == null ? { keycapId: t.id } : r.slots[a.slotId],
                    voiceButtonMode: o,
                  }),
                  children: (0, $.jsxs)(`button`, {
                    type: `button`,
                    "aria-pressed": n,
                    className: fe(
                      `cursor-interaction relative flex aspect-square w-[4.75rem] flex-col items-center justify-center gap-1.5 rounded-[0.8rem] border border-white/[0.86] bg-[#f7f5f1] px-2 py-2 text-[#171717] shadow-[inset_0_0_0_1px_rgba(228,228,228,0.68),0_1px_2px_rgba(79,72,63,0.18)] outline-none focus-visible:ring-2 focus-visible:ring-ring dark:border-white/[0.14] dark:bg-[#202127] dark:text-default dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.32)]`,
                      n
                        ? `border-chart-blue/60 bg-chart-blue/10 text-info ring-1 ring-chart-blue/40 dark:border-chart-blue/80 dark:bg-chart-blue/20 dark:ring-chart-blue/60 dark:text-info`
                        : null,
                    ),
                    onClick: () => {
                      if (n) return;
                      m(t.id);
                      let e = a == null ? null : r.slots[a.slotId];
                      _(
                        e?.action ??
                          (e?.commandId == null
                            ? void 0
                            : { type: `command`, commandId: e.commandId }),
                      );
                    },
                    children: [
                      (0, $.jsx)(Ln, { keycap: t, className: `size-4` }),
                      (0, $.jsx)(`span`, { className: `font-mono text-[11px]`, children: Ci(t) }),
                    ],
                  }),
                },
                t.id,
              );
            }),
          });
    (t[46] === K
      ? (I = t[47])
      : ((I = (0, $.jsx)(`div`, {
          className: `vertical-scroll-fade-mask min-h-0 flex-1 overflow-y-auto px-1 pt-1 pb-1 [--edge-fade-distance:1rem]`,
          children: K,
        })),
        (t[46] = K),
        (t[47] = I)),
      (C = we),
      (S = Dt),
      t[48] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((M = (0, $.jsx)(f, {
            id: `settings.codexMicro.editor.customShortcut.label`,
            defaultMessage: `Assigned shortcut or skill`,
            description: `Label for choosing the shortcut or skill assigned to a Codex Micro keycap`,
          })),
          (t[48] = M))
        : (M = t[48]),
      (N =
        g?.type === `skill`
          ? jn(g, i, l)
          : n == null
            ? e.action.type === `custom-shortcut`
              ? (0, $.jsx)(f, {
                  id: `settings.codexMicro.editor.customShortcut.unassigned`,
                  defaultMessage: `Unassigned`,
                  description: `Label shown when a Codex Micro keycap has no command assigned`,
                })
              : (0, $.jsx)(f, {
                  id: `settings.codexMicro.editor.customShortcut.defaultAction`,
                  defaultMessage: `Keycap default: {action}`,
                  description: `Description shown when a Codex Micro keycap uses its predefined action`,
                  values: { action: (0, $.jsx)(pi, { keycap: e, voiceButtonMode: o }, `action`) },
                })
            : d(n, l)),
      (t[3] = l),
      (t[4] = p),
      (t[5] = r),
      (t[6] = s),
      (t[7] = c),
      (t[8] = v),
      (t[9] = g),
      (t[10] = i),
      (t[11] = a),
      (t[12] = o),
      (t[13] = S),
      (t[14] = C),
      (t[15] = w),
      (t[16] = T),
      (t[17] = E),
      (t[18] = D),
      (t[19] = O),
      (t[20] = k),
      (t[21] = A),
      (t[22] = j),
      (t[23] = M),
      (t[24] = N),
      (t[25] = P),
      (t[26] = F),
      (t[27] = I),
      (t[28] = R),
      (t[29] = z),
      (t[30] = B));
  } else
    ((S = t[13]),
      (C = t[14]),
      (w = t[15]),
      (T = t[16]),
      (E = t[17]),
      (D = t[18]),
      (O = t[19]),
      (k = t[20]),
      (A = t[21]),
      (j = t[22]),
      (M = t[23]),
      (N = t[24]),
      (P = t[25]),
      (F = t[26]),
      (I = t[27]),
      (R = t[28]),
      (z = t[29]),
      (B = t[30]));
  let V;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (e) => {
        x(e?.closest(`.codex-dialog`) ?? null);
      }),
      (t[49] = V))
    : (V = t[49]);
  let H;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(ue, {
        children: (0, $.jsx)(f, {
          id: `settings.codexMicro.editor.customShortcut.choose`,
          defaultMessage: `Choose`,
          description: `Button label for choosing the command assigned to a Codex Micro keycap`,
        }),
      })),
      (t[50] = H))
    : (H = t[50]);
  let U;
  t[51] !== n || t[52] !== b || t[53] !== D || t[54] !== g || t[55] !== i
    ? ((U = (0, $.jsx)(`div`, {
        ref: V,
        children: (0, $.jsx)(pr, {
          commands: n,
          noActionLabel: D,
          portalContainer: b,
          selectedAction: g,
          skills: i,
          triggerButton: H,
          onActionSelect: _,
        }),
      })),
      (t[51] = n),
      (t[52] = b),
      (t[53] = D),
      (t[54] = g),
      (t[55] = i),
      (t[56] = U))
    : (U = t[56]);
  let W;
  t[57] !== S || t[58] !== U || t[59] !== M || t[60] !== N
    ? ((W = (0, $.jsx)(S, { label: M, description: N, control: U })),
      (t[57] = S),
      (t[58] = U),
      (t[59] = M),
      (t[60] = N),
      (t[61] = W))
    : (W = t[61]);
  let G;
  t[62] !== C || t[63] !== W
    ? ((G = (0, $.jsx)(C, { children: W })), (t[62] = C), (t[63] = W), (t[64] = G))
    : (G = t[64]);
  let K;
  t[65] !== w || t[66] !== G || t[67] !== P || t[68] !== F || t[69] !== I
    ? ((K = (0, $.jsxs)(w, { className: P, children: [F, I, G] })),
      (t[65] = w),
      (t[66] = G),
      (t[67] = P),
      (t[68] = F),
      (t[69] = I),
      (t[70] = K))
    : (K = t[70]);
  let te;
  t[71] === s
    ? (te = t[72])
    : ((te = () => {
        s(!1);
      }),
      (t[71] = s),
      (t[72] = te));
  let ne;
  t[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, $.jsx)(f, {
        id: `settings.codexMicro.editor.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the Codex Micro keycap slot editor`,
      })),
      (t[73] = ne))
    : (ne = t[73]);
  let q;
  t[74] === te
    ? (q = t[75])
    : ((q = (0, $.jsx)(dt, { type: `button`, color: `ghost`, onClick: te, children: ne })),
      (t[74] = te),
      (t[75] = q));
  let ie;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, $.jsx)(dt, {
        color: `primary`,
        type: `submit`,
        children: (0, $.jsx)(f, {
          id: `settings.codexMicro.editor.save`,
          defaultMessage: `Save`,
          description: `Save button label for the Codex Micro keycap slot editor`,
        }),
      })),
      (t[76] = ie))
    : (ie = t[76]);
  let ae;
  t[77] === q
    ? (ae = t[78])
    : ((ae = (0, $.jsx)(Ie, { children: (0, $.jsxs)(Ne, { children: [q, ie] }) })),
      (t[77] = q),
      (t[78] = ae));
  let oe;
  t[79] !== T ||
  t[80] !== O ||
  t[81] !== K ||
  t[82] !== ae ||
  t[83] !== R ||
  t[84] !== z ||
  t[85] !== B
    ? ((oe = (0, $.jsxs)(T, { as: R, className: z, onSubmit: B, children: [O, K, ae] })),
      (t[79] = T),
      (t[80] = O),
      (t[81] = K),
      (t[82] = ae),
      (t[83] = R),
      (t[84] = z),
      (t[85] = B),
      (t[86] = oe))
    : (oe = t[86]);
  let se;
  return (
    t[87] !== E || t[88] !== k || t[89] !== A || t[90] !== j || t[91] !== oe
      ? ((se = (0, $.jsx)(E, { open: k, size: A, onOpenChange: j, children: oe })),
        (t[87] = E),
        (t[88] = k),
        (t[89] = A),
        (t[90] = j),
        (t[91] = oe),
        (t[92] = se))
      : (se = t[92]),
    se
  );
}
function gi(e) {
  let t = (0, wi.c)(84),
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
    v = re(),
    [y, b, x, S, C, w] = Ai,
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
          ? (0, $.jsx)(yr, {
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
          : (0, $.jsx)(yi, {
              deviceName: a,
              isPressed: E,
              mode: s.encoderMode,
              pulse: c.knobPulse,
            })),
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
    ? ((O = Et.map((e, t) =>
        (0, $.jsxs)(
          Ti.Fragment,
          {
            children: [
              t === 2
                ? (0, $.jsx)(ir, {
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
                assignmentTitle: vi(i?.[e], l, v),
                keycap: _i(i?.[e]),
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
    : ((j = xi(c.pressedKeys, y.keys)), (t[27] = c.pressedKeys), (t[28] = j));
  let M;
  t[29] !== f || t[30] !== l || t[31] !== k || t[32] !== j || t[33] !== u
    ? ((M = (0, $.jsx)(bi, {
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
  let N = s.slots[b.slotId],
    ee = b.slotId,
    P;
  t[35] === c.pressedKeys
    ? (P = t[36])
    : ((P = xi(c.pressedKeys, b.keys)), (t[35] = c.pressedKeys), (t[36] = P));
  let F;
  t[37] !== f || t[38] !== l || t[39] !== P || t[40] !== N || t[41] !== u
    ? ((F = (0, $.jsx)(bi, {
        slot: N,
        slotId: ee,
        isPressed: P,
        skills: l,
        voiceButtonMode: u,
        onEditSlot: f,
      })),
      (t[37] = f),
      (t[38] = l),
      (t[39] = P),
      (t[40] = N),
      (t[41] = u),
      (t[42] = F))
    : (F = t[42]);
  let I = s.slots[x.slotId],
    L = x.slotId,
    R;
  t[43] === c.pressedKeys
    ? (R = t[44])
    : ((R = xi(c.pressedKeys, x.keys)), (t[43] = c.pressedKeys), (t[44] = R));
  let z;
  t[45] !== f || t[46] !== l || t[47] !== I || t[48] !== R || t[49] !== u
    ? ((z = (0, $.jsx)(bi, {
        slot: I,
        slotId: L,
        isPressed: R,
        skills: l,
        voiceButtonMode: u,
        onEditSlot: f,
      })),
      (t[45] = f),
      (t[46] = l),
      (t[47] = I),
      (t[48] = R),
      (t[49] = u),
      (t[50] = z))
    : (z = t[50]);
  let B = s.slots[S.slotId],
    V = S.slotId,
    H;
  t[51] === c.pressedKeys
    ? (H = t[52])
    : ((H = xi(c.pressedKeys, S.keys)), (t[51] = c.pressedKeys), (t[52] = H));
  let U;
  t[53] !== f || t[54] !== l || t[55] !== B || t[56] !== H || t[57] !== u
    ? ((U = (0, $.jsx)(bi, {
        slot: B,
        slotId: V,
        isPressed: H,
        skills: l,
        voiceButtonMode: u,
        onEditSlot: f,
      })),
      (t[53] = f),
      (t[54] = l),
      (t[55] = B),
      (t[56] = H),
      (t[57] = u),
      (t[58] = U))
    : (U = t[58]);
  let W;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, $.jsx)(Vn, {})), (t[59] = W))
    : (W = t[59]);
  let G;
  t[60] !== s.separateMicrophoneKeys ||
  t[61] !== s.slots ||
  t[62] !== f ||
  t[63] !== c.pressedKeys ||
  t[64] !== l ||
  t[65] !== u
    ? ((G = s.separateMicrophoneKeys
        ? ji.map((e) =>
            (0, $.jsx)(
              bi,
              {
                slot: s.slots[e.slotId],
                slotId: e.slotId,
                isPressed: xi(c.pressedKeys, e.keys),
                skills: l,
                voiceButtonMode: u,
                onEditSlot: f,
              },
              e.slotId,
            ),
          )
        : (0, $.jsx)(bi, {
            slot: s.slots[C.slotId],
            slotId: C.slotId,
            className: `col-span-2`,
            isPressed: xi(c.pressedKeys, C.keys),
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
      (t[66] = G))
    : (G = t[66]);
  let K = s.slots[w.slotId],
    te = w.slotId,
    ne;
  t[67] === c.pressedKeys
    ? (ne = t[68])
    : ((ne = xi(c.pressedKeys, w.keys)), (t[67] = c.pressedKeys), (t[68] = ne));
  let q;
  t[69] !== f || t[70] !== l || t[71] !== K || t[72] !== ne || t[73] !== u
    ? ((q = (0, $.jsx)(bi, {
        slot: K,
        slotId: te,
        isPressed: ne,
        skills: l,
        voiceButtonMode: u,
        onEditSlot: f,
      })),
      (t[69] = f),
      (t[70] = l),
      (t[71] = K),
      (t[72] = ne),
      (t[73] = u),
      (t[74] = q))
    : (q = t[74]);
  let ie;
  return (
    t[75] !== F ||
    t[76] !== z ||
    t[77] !== U ||
    t[78] !== D ||
    t[79] !== G ||
    t[80] !== q ||
    t[81] !== O ||
    t[82] !== M
      ? ((ie = (0, $.jsx)(`div`, {
          className: `flex justify-center px-4 py-5`,
          children: (0, $.jsxs)(In, { children: [D, O, M, F, z, U, W, G, q] }),
        })),
        (t[75] = F),
        (t[76] = z),
        (t[77] = U),
        (t[78] = D),
        (t[79] = G),
        (t[80] = q),
        (t[81] = O),
        (t[82] = M),
        (t[83] = ie))
      : (ie = t[83]),
    ie
  );
}
function _i(e) {
  return e != null && `type` in e && e.type === `keycap` ? xn(e.keycapId) : void 0;
}
function vi(e, t, n) {
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
function yi(e) {
  let t = (0, wi.c)(33),
    { deviceName: n, isPressed: r, mode: i, pulse: a } = e,
    o = re(),
    s = Oi[i],
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(`span`, {
        className: `text-xs font-semibold`,
        children: (0, $.jsx)(f, {
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
        children: (0, $.jsx)(f, { ...s.description }),
      })),
      (t[1] = s.description),
      (t[2] = l));
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(`dt`, {
        className: `font-medium whitespace-nowrap`,
        children: (0, $.jsx)(f, {
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
    : ((d = (0, $.jsx)(`dd`, {
        className: `opacity-65`,
        children: (0, $.jsx)(f, { ...s.turnRightAction }),
      })),
      (t[4] = s.turnRightAction),
      (t[5] = d));
  let p;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(`dt`, {
        className: `font-medium whitespace-nowrap`,
        children: (0, $.jsx)(f, {
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
    : ((m = (0, $.jsx)(`dd`, {
        className: `opacity-65`,
        children: (0, $.jsx)(f, { ...s.turnLeftAction }),
      })),
      (t[7] = s.turnLeftAction),
      (t[8] = m));
  let h;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(`dt`, {
        className: `font-medium whitespace-nowrap`,
        children: (0, $.jsx)(f, {
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
    : ((g = (0, $.jsx)(`dd`, {
        className: `opacity-65`,
        children: (0, $.jsx)(f, { ...s.clickAction }),
      })),
      (t[10] = s.clickAction),
      (t[11] = g));
  let _;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, $.jsx)(`dt`, {
        className: `font-medium whitespace-nowrap`,
        children: (0, $.jsx)(f, {
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
        children: (0, $.jsx)(f, {
          id: `settings.codexMicro.keyboardLayout.knobTooltip.pressAndHoldActionByDevice`,
          defaultMessage: `Open {deviceName} settings`,
          description: `Action performed when pressing and holding the Codex Micro or Creator Micro encoder knob`,
          values: { deviceName: n },
        }),
      })),
      (t[13] = n),
      (t[14] = v));
  let y;
  t[15] !== v || t[16] !== d || t[17] !== m || t[18] !== g
    ? ((y = (0, $.jsxs)(`dl`, {
        className: `grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-xs leading-4`,
        children: [u, d, p, m, h, g, _, v],
      })),
      (t[15] = v),
      (t[16] = d),
      (t[17] = m),
      (t[18] = g),
      (t[19] = y))
    : (y = t[19]);
  let b;
  t[20] !== y || t[21] !== l
    ? ((b = (0, $.jsxs)(`div`, {
        className: `flex w-64 flex-col gap-2.5 p-3`,
        children: [c, l, y],
      })),
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
    ? ((S = (0, $.jsx)(Rn, { ariaLabel: x, isPressed: r, pulse: a })),
      (t[26] = r),
      (t[27] = a),
      (t[28] = x),
      (t[29] = S))
    : (S = t[29]);
  let C;
  return (
    t[30] !== b || t[31] !== S
      ? ((C = (0, $.jsx)(L, {
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
function bi(e) {
  let t = (0, wi.c)(56),
    {
      slot: n,
      slotId: r,
      className: i,
      isPressed: a,
      skills: o,
      voiceButtonMode: s,
      onEditSlot: c,
    } = e,
    l;
  t[0] === n.keycapId ? (l = t[1]) : ((l = xn(n.keycapId)), (t[0] = n.keycapId), (t[1] = l));
  let u = l,
    f = re(),
    p = n.action?.type === `skill` ? n.action : null,
    m = n.action?.type === `command` ? n.action.commandId : n.commandId,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w;
  if (
    t[2] !== i ||
    t[3] !== m ||
    t[4] !== p ||
    t[5] !== f ||
    t[6] !== a ||
    t[7] !== u ||
    t[8] !== c ||
    t[9] !== o ||
    t[10] !== n ||
    t[11] !== r ||
    t[12] !== s
  ) {
    let e = m == null ? null : fn(m);
    ((g = L),
      (C = !0),
      t[23] !== u || t[24] !== o || t[25] !== n || t[26] !== s
        ? ((w = (0, $.jsx)(mi, { keycap: u, skills: o, slot: n, voiceButtonMode: s })),
          (t[23] = u),
          (t[24] = o),
          (t[25] = n),
          (t[26] = s),
          (t[27] = w))
        : (w = t[27]),
      (b = `button`));
    let l = a && `translate-y-px scale-[0.985]`;
    (t[28] !== i || t[29] !== l
      ? ((x = fe(
          `group relative z-10 cursor-interaction transition-transform duration-basic ease-out`,
          l,
          i,
        )),
        (t[28] = i),
        (t[29] = l),
        (t[30] = x))
      : (x = t[30]),
      t[31] !== c || t[32] !== r
        ? ((S = () => {
            c(r);
          }),
          (t[31] = c),
          (t[32] = r),
          (t[33] = S))
        : (S = t[33]),
      (h = Nn));
    let T =
      a &&
      `bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.92),0_0_12px_rgba(141,181,255,0.26)] dark:bg-[#282b34] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_0_14px_rgba(141,181,255,0.28)]`;
    (t[34] === T
      ? (y = t[35])
      : ((y = fe(
          `size-full transition-[box-shadow,background-color] duration-basic ease-out group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.92),0_0_12px_rgba(141,181,255,0.18)] dark:group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),0_0_12px_rgba(141,181,255,0.24)]`,
          T,
        )),
        (t[34] = T),
        (t[35] = y)),
      (_ = `sr-only`),
      (v =
        p == null
          ? e == null
            ? (0, $.jsx)(pi, { keycap: u, voiceButtonMode: s })
            : d(e, f)
          : jn(p, o, f)),
      (t[2] = i),
      (t[3] = m),
      (t[4] = p),
      (t[5] = f),
      (t[6] = a),
      (t[7] = u),
      (t[8] = c),
      (t[9] = o),
      (t[10] = n),
      (t[11] = r),
      (t[12] = s),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y),
      (t[18] = b),
      (t[19] = x),
      (t[20] = S),
      (t[21] = C),
      (t[22] = w));
  } else
    ((h = t[13]),
      (g = t[14]),
      (_ = t[15]),
      (v = t[16]),
      (y = t[17]),
      (b = t[18]),
      (x = t[19]),
      (S = t[20]),
      (C = t[21]),
      (w = t[22]));
  let T;
  t[36] !== _ || t[37] !== v
    ? ((T = (0, $.jsx)(`span`, { className: _, children: v })),
      (t[36] = _),
      (t[37] = v),
      (t[38] = T))
    : (T = t[38]);
  let E;
  t[39] === u
    ? (E = t[40])
    : ((E = (0, $.jsx)(Ln, { keycap: u, className: `size-5` })), (t[39] = u), (t[40] = E));
  let D;
  t[41] !== h || t[42] !== T || t[43] !== E || t[44] !== y
    ? ((D = (0, $.jsxs)(h, { className: y, children: [T, E] })),
      (t[41] = h),
      (t[42] = T),
      (t[43] = E),
      (t[44] = y),
      (t[45] = D))
    : (D = t[45]);
  let O;
  t[46] !== D || t[47] !== b || t[48] !== x || t[49] !== S
    ? ((O = (0, $.jsx)(`button`, { type: b, className: x, onClick: S, children: D })),
      (t[46] = D),
      (t[47] = b),
      (t[48] = x),
      (t[49] = S),
      (t[50] = O))
    : (O = t[50]);
  let k;
  return (
    t[51] !== g || t[52] !== O || t[53] !== C || t[54] !== w
      ? ((k = (0, $.jsx)(g, { delayOpen: C, tooltipContent: w, children: O })),
        (t[51] = g),
        (t[52] = O),
        (t[53] = C),
        (t[54] = w),
        (t[55] = k))
      : (k = t[55]),
    k
  );
}
function xi(e, t) {
  return t.some((t) => e.includes(t));
}
function Si(e, t) {
  let n = t.trim().toLowerCase();
  return n.length === 0 || [e.id, ...hn(e)].some((e) => e.toLowerCase().includes(n));
}
function Ci(e) {
  return e.id === `SPLIT` ? `FORK` : e.id === `BRCH` ? `DRAFT` : e.id;
}
var wi, Ti, $, Ei, Di, Oi, ki, Ai, ji;
e(() => {
  ((wi = ft()),
    jt(),
    Vt(),
    ve(),
    K(),
    l(),
    (Ti = t(c(), 1)),
    he(),
    ht(),
    ct(),
    Ye(),
    dn(),
    gn(),
    bn(),
    sn(),
    k(),
    Lt(),
    s(),
    at(),
    Je(),
    Pe(),
    Ce(),
    n(),
    M(),
    Ht(),
    Pt(),
    Ze(),
    rt(),
    bt(),
    Tt(),
    De(),
    le(),
    be(),
    Ae(),
    Se(),
    D(),
    O(),
    Be(),
    _e(),
    Hn(),
    An(),
    fr(),
    Yt(),
    _r(),
    Tn(),
    w(),
    Dr(),
    Bn(),
    Mn(),
    Wn(),
    qt(),
    Pr(),
    Ar(),
    vr(),
    On(),
    $r(),
    ii(),
    ($ = tt()),
    (Ei = {
      pinned: { label: X.pinnedChats, description: X.pinnedChatsDescription },
      recent: { label: X.recentChats, description: X.recentChatsDescription },
      priority: { label: X.priorityChats, description: X.priorityChatsDescription },
      custom: { label: X.customChats, description: X.customChatsDescription },
    }),
    (Di = {
      off: X.lightingAutoOffOff,
      "30-seconds": X.lightingAutoOff30Seconds,
      "1-minute": X.lightingAutoOff1Minute,
      "3-minutes": X.lightingAutoOff3Minutes,
      "10-minutes": X.lightingAutoOff10Minutes,
      "30-minutes": X.lightingAutoOff30Minutes,
      "1-hour": X.lightingAutoOff1Hour,
    }),
    (Oi = {
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
    (ki = {
      "connection-failed": {
        description: X.connectionFailedDescription,
        label: X.connectionFailed,
      },
      "discovery-failed": { description: X.discoveryFailedDescription, label: X.discoveryFailed },
      "transport-unavailable": {
        description: X.transportUnavailableDescription,
        label: X.transportUnavailable,
      },
    }),
    (Ai = [
      { slotId: `ACT06`, keys: [`ACT06`] },
      { slotId: `ACT07`, keys: [`ACT07`] },
      { slotId: `ACT08`, keys: [`ACT08`] },
      { slotId: `ACT09`, keys: [`ACT09`] },
      { slotId: `ACT10_ACT11`, keys: [`ACT10`, `ACT11`] },
      { slotId: `ACT12`, keys: [`ACT12`] },
    ]),
    (ji = [
      { slotId: `ACT10`, keys: [`ACT10`] },
      { slotId: `ACT11`, keys: [`ACT11`] },
    ]));
})();
export { oi as CodexMicroSettings };
//# sourceMappingURL=codex-micro-settings-4c6e164f0143.js.map
