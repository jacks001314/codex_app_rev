import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  BR as r,
  Ixt as i,
  LR as a,
  Mz as o,
  Nz as s,
  Pxt as c,
  RR as l,
  TJ as u,
  VDt as d,
  Vxt as f,
  bf as p,
  bht as m,
  cz as h,
  jDt as g,
  ldt as _,
  rst as v,
  sW as ee,
  sz as te,
  t3 as y,
  vzt as b,
  xMt as x,
  xht as S,
  yf as ne,
  yzt as C,
  zxt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  $St as re,
  Bgt as T,
  Cpr as E,
  Cwr as D,
  Cwt as ie,
  Cxt as ae,
  Ext as oe,
  Hgt as se,
  Kwt as ce,
  Opr as O,
  QPr as k,
  Qwr as A,
  Rxt as j,
  Txt as M,
  Upr as N,
  XHt as P,
  YHt as F,
  Ypr as I,
  _fr as L,
  bxt as R,
  cwn as z,
  dwn as B,
  eFr as V,
  fbn as H,
  gwr as U,
  hwn as W,
  nSt as G,
  qwr as le,
  qwt as ue,
  rDn as de,
  tCt as fe,
  tDn as pe,
  uDn as me,
  vwr as he,
  vxt as ge,
  wpr as _e,
  wwt as ve,
  wxt as ye,
  yxt as be,
  zxt as xe,
} from "./app-initial-5851df3f6cb1.js";
import { n as Se, t as Ce } from "./header-action-size-3acfcf69d158.js";
import { n as we, t as Te } from "./open-picker-54a714bb0818.js";
function Ee(e, { sourceWorkspaceRoot: t, targetWorkspaceRoot: n }) {
  for (let r of [W, z])
    for (let i of e.get(r.tabs$)) {
      let { props: a } = i;
      if (
        !(`hostId` in a) ||
        typeof a.hostId != `string` ||
        !(`path` in a) ||
        (typeof a.path != `string` && a.path != null)
      )
        continue;
      let o = a.path == null ? null : De(a.path, t, n);
      if (i.kind === `text-file-editor`) {
        o != null &&
          ye(e, o, {
            revealAndFocus: !1,
            hostId: a.hostId,
            isPreview: i.isPreview,
            line: `line` in a && typeof a.line == `number` ? a.line : void 0,
            tabId: i.tabId,
            target: r.panelId,
          });
        continue;
      }
      if (i.kind?.startsWith(`workspaceFile:`)) {
        if (`artifactType` in a) {
          o != null &&
            ve(e, o, {
              revealAndFocus: !1,
              hostId: a.hostId,
              isPreview: i.isPreview,
              syncOpenTabs: !1,
              tabId: i.tabId,
              target: r.panelId,
            });
          continue;
        }
        xe(e, o, {
          revealAndFocus: !1,
          endLine: `initialEndLine` in a && typeof a.initialEndLine == `number` ? a.initialEndLine : void 0,
          hostId: a.hostId,
          isPreview: i.isPreview,
          line: `initialLine` in a && typeof a.initialLine == `number` ? a.initialLine : void 0,
          syncOpenTabs: !1,
          tabId: i.tabId,
          target: r.panelId,
          workspaceRoot: n,
        });
      }
    }
}
function De(e, t, n) {
  if (!l(e)) return e;
  let i = r(e),
    a = r(t),
    o = m(a) || S(a),
    s = K.default.posix.relative(o ? a.toLowerCase() : a, o ? i.toLowerCase() : i);
  if (s === `..` || s.startsWith(`..${K.default.posix.sep}`) || K.default.posix.isAbsolute(s)) return e;
  let c =
      s === ``
        ? ``
        : i.split(K.default.posix.sep).slice(-s.split(K.default.posix.sep).length).join(K.default.posix.sep),
    u = r(K.default.posix.join(n, c));
  return S(n) ? `//${u.replace(/^\/+/, ``)}` : u;
}
var K;
function q() {
  return (q = e(() => {
    ((K = t(_(), 1)), v(), B(), ie(), j(), L(), ae(), G(), a());
  }))();
}
function Oe(e) {
  let t = (0, J.c)(14),
    { conversationId: n } = e,
    r = i(U),
    a = f(A),
    o = f(de),
    s = w(be, n),
    c,
    l;
  (t[0] !== r || t[1] !== a || t[2] !== o
    ? ((c = () => {
        a != null && o != null && (Ee(r, { sourceWorkspaceRoot: a, targetWorkspaceRoot: o }), r.set(A, null));
      }),
      (l = [r, a, o]),
      (t[0] = r),
      (t[1] = a),
      (t[2] = o),
      (t[3] = c),
      (t[4] = l))
    : ((c = t[3]), (l = t[4])),
    (0, Y.useLayoutEffect)(c, l));
  let u, d;
  (t[5] !== s || t[6] !== r
    ? ((u = () => {
        s != null &&
          R(
            r,
            s,
            (e) => {
              fe(r, e);
            },
            se,
          );
      }),
      (d = [s, r]),
      (t[5] = s),
      (t[6] = r),
      (t[7] = u),
      (t[8] = d))
    : ((u = t[7]), (d = t[8])),
    (0, Y.useLayoutEffect)(u, d));
  let p, m;
  return (
    t[9] !== s || t[10] !== r || t[11] !== a
      ? ((p = () => {
          if (a == null && s == null)
            return r.watch((e) => {
              let { get: t } = e;
              t(k, t(me)) != null && (oe(r), ue(r));
            });
        }),
        (m = [s, r, a]),
        (t[9] = s),
        (t[10] = r),
        (t[11] = a),
        (t[12] = p),
        (t[13] = m))
      : ((p = t[12]), (m = t[13])),
    (0, Y.useEffect)(p, m),
    null
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = b()), c(), (Y = C()), V(), re(), ge(), ce(), D(), pe(), le(), T(), M(), q());
  }))();
}
function ke() {
  let e = (0, Z.c)(20),
    t = i(U),
    r = d(),
    a = f(Se),
    s = f(I),
    c;
  e[0] === s ? (c = e[1]) : ((c = { enabled: s }), (e[0] = s), (e[1] = c));
  let { data: l } = w(E, t.value.orbitId ?? null, c),
    u;
  e[2] === t.value
    ? (u = e[3])
    : ((u = t.value.orbitId == null ? he(t.value) : null), (e[2] = t.value), (e[3] = u));
  let m;
  e[4] === s ? (m = e[5]) : ((m = { enabled: s }), (e[4] = s), (e[5] = m));
  let { data: h } = w(_e, u, m),
    g = t.value.orbitId == null ? h : l;
  if (!s || g == null) return null;
  let _;
  e[6] === r
    ? (_ = e[7])
    : ((_ = r.formatMessage(
        {
          id: `orbit.primary.switch.productName`,
          defaultMessage: `Choose your primary {dot}`,
          description: `Header button opening the primary agent picker. dot is a common noun for the user's agent and must remain untranslated.`,
        },
        { dot: `dot` },
      )),
      (e[6] = r),
      (e[7] = _));
  let v = _,
    y;
  e[8] === t ? (y = e[9]) : ((y = () => void we(t)), (e[8] = t), (e[9] = y));
  let b;
  e[10] === a
    ? (b = e[11])
    : ((b = a === `iconMd` ? (0, Q.jsx)(o, { asset: p }) : (0, Q.jsx)(ee, {})), (e[10] = a), (e[11] = b));
  let x;
  e[12] !== v || e[13] !== a || e[14] !== y || e[15] !== b
    ? ((x = (0, Q.jsx)(n, {
        size: a,
        color: `ghost`,
        uniform: !0,
        "aria-label": v,
        "aria-haspopup": `dialog`,
        onClick: y,
        children: b,
      })),
      (e[12] = v),
      (e[13] = a),
      (e[14] = y),
      (e[15] = b),
      (e[16] = x))
    : (x = e[16]);
  let S;
  return (
    e[17] !== v || e[18] !== x
      ? ((S = (0, Q.jsx)(F.HeaderAction, {
          actionId: `primary-orbit-picker`,
          align: `end`,
          order: -90,
          unifiedSlotPosition: `thread`,
          children: (0, Q.jsx)(te, { tooltipContent: v, delayOpen: !0, children: x }),
        })),
        (e[17] = v),
        (e[18] = x),
        (e[19] = S))
      : (S = e[19]),
    S
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = b()), ne(), c(), g(), P(), y(), s(), u(), h(), H(), D(), Ce(), O(), Te(), N(), (Q = x()));
  }))();
}
export { X as i, $ as n, Oe as r, ke as t };
//# sourceMappingURL=header-action-412a59778d0b.js.map
