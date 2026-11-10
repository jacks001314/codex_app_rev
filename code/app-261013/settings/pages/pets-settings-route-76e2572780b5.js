import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $R as n,
  $nt as r,
  A6 as i,
  AO as a,
  CM as o,
  CO as s,
  CPt as c,
  Cot as l,
  D2 as u,
  Ez as d,
  F2 as f,
  Fct as p,
  Hnt as m,
  I2 as h,
  IDt as g,
  Ixt as _,
  JC as v,
  Mz as y,
  N6 as b,
  Nz as x,
  O2 as S,
  PV as C,
  Pxt as w,
  QR as T,
  Rnt as E,
  SPt as D,
  TJ as O,
  TM as k,
  TO as A,
  VDt as j,
  Vxt as M,
  Wnt as N,
  _Mt as P,
  _O as F,
  _wt as I,
  cO as L,
  cz as R,
  dJ as z,
  fO as B,
  gMt as V,
  gPt as ee,
  gwt as H,
  hPt as U,
  hot as W,
  iot as G,
  irt as K,
  iw as q,
  jDt as J,
  k6 as te,
  kz as ne,
  lM as re,
  lO as ie,
  lgt as ae,
  lot as oe,
  lrt as se,
  mO as ce,
  nq as le,
  nst as ue,
  oO as de,
  pM as fe,
  qC as pe,
  qnt as me,
  rrt as he,
  rst as ge,
  srt as _e,
  sz as ve,
  t3 as ye,
  tst as be,
  tw as xe,
  vO as Se,
  vzt as Ce,
  wot as we,
  xMt as Te,
  yzt as Ee,
  zxt as De,
} from "./app-shared-bbfeca5e5737.js";
import {
  $7 as Oe,
  A7 as ke,
  BPr as Ae,
  BYt as je,
  C2 as Me,
  C7 as Ne,
  D7 as Pe,
  Dkn as Fe,
  ESn as Ie,
  Ek as Le,
  HPr as Re,
  Hm as ze,
  ISn as Be,
  IYt as Ve,
  Icr as He,
  Idn as Ue,
  J7 as We,
  K7 as Ge,
  Lcr as Ke,
  Ldn as qe,
  OPr as Je,
  Ocr as Ye,
  QOn as Xe,
  QP as Ze,
  R7 as Qe,
  S7 as $e,
  Skn as et,
  Tdn as tt,
  Tk as Y,
  Vm as nt,
  X7 as rt,
  XDr as it,
  XPr as at,
  Y7 as ot,
  YPr as st,
  Ycr as ct,
  ZOn as lt,
  _F as ut,
  _Vt as dt,
  alr as ft,
  bf as pt,
  cN as mt,
  dAn as ht,
  dN as gt,
  dxt as _t,
  e9 as vt,
  eDr as yt,
  eF as bt,
  eOr as xt,
  fAn as St,
  fSn as Ct,
  gOr as wt,
  gP as Tt,
  hF as Et,
  hOr as Dt,
  hP as Ot,
  i9 as kt,
  j7 as At,
  jEr as jt,
  jdn as Mt,
  kEr as Nt,
  kPr as Pt,
  kcr as Ft,
  lSn as It,
  lxt as Lt,
  nDr as Rt,
  oFr as zt,
  oSn as Bt,
  pN as Vt,
  sDr as Ht,
  t9 as Ut,
  tF as Wt,
  uN as Gt,
  vSn as Kt,
  vVt as qt,
  w2 as Jt,
  wf as Yt,
  wk as Xt,
  zEr as Zt,
} from "./app-initial-5851df3f6cb1.js";
import { n as Qt, t as $t } from "./use-avatar-options-56495836bfd6.js";
import { n as en, t as tn } from "./settings-loading-row-bf72bf2df25d.js";
import { D as nn, O as rn, k as an, n as on, t as sn } from "./controls-a9a41029c5b0.js";
import { f as cn, r as ln, t as un, u as dn } from "./avatar-mascot-button-8eddbeaf6243.js";
import { r as fn, t as pn } from "./command-messages-54cbbed1e112.js";
import { n as mn, t as hn } from "./command-row-7d549d934763.js";
import { n as gn, r as _n, t as vn } from "./recommended-skill-statsig-overrides-446bdc28c39a.js";
function yn(e) {
  let t = (0, bn.c)(13),
    { avatar: n, className: r, size: i, source: a } = e,
    o = i === void 0 ? `md` : i,
    s = o === `sm` ? `size-8` : `size-16`,
    c;
  t[0] !== r || t[1] !== s
    ? ((c = V(`flex shrink-0 items-center justify-center overflow-hidden rounded-lg`, s, r)),
      (t[0] = r),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l = n?.id ?? `default`,
    u = o === `sm` ? `scale-[0.42]` : `scale-75`,
    d;
  t[3] !== n || t[4] !== a
    ? ((d = a ?? (n == null ? { assetRef: `codex` } : We(n))), (t[3] = n), (t[4] = a), (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] !== u || t[7] !== d
    ? ((f = (0, xn.jsx)(kt, { assetMap: Oe, className: u, source: d })), (t[6] = u), (t[7] = d), (t[8] = f))
    : (f = t[8]);
  let p;
  return (
    t[9] !== c || t[10] !== l || t[11] !== f
      ? ((p = (0, xn.jsx)(`div`, { className: c, "data-avatar-id": l, children: f })),
        (t[9] = c),
        (t[10] = l),
        (t[11] = f),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
var bn, xn;
function Sn() {
  return (Sn = e(() => {
    ((bn = Ce()), Ut(), P(), vt(), ot(), (xn = Te()));
  }))();
}
function Cn(e) {
  let n = (0, wn.c)(17),
    { avatarDirectory: r } = e,
    i = _(l),
    a = j(),
    o;
  n[0] !== a || n[1] !== i
    ? ((o = () => {
        i.get(W).danger(
          a.formatMessage({
            id: `settings.pets.custom.openFolderError`,
            defaultMessage: `Unable to open pet folder`,
            description: `Toast shown when opening the custom pet folder fails`,
          }),
          { errorAnalytics: { toastId: `settings.pets.custom.openFolderError` } },
        );
      }),
      (n[0] = a),
      (n[1] = i),
      (n[2] = o))
    : (o = n[2]);
  let s = o,
    c;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Tn.jsx)(g, {
        id: `settings.pets.custom.title`,
        defaultMessage: `Custom pets`,
        description: `Heading for custom pet settings`,
      })),
      (n[3] = c))
    : (c = n[3]);
  let u;
  n[4] === r
    ? (u = n[5])
    : ((u = (0, Tn.jsx)(`span`, { className: `font-mono text-xs [text-wrap:wrap] break-all`, children: r })),
      (n[4] = r),
      (n[5] = u));
  let p;
  n[6] !== r || n[7] !== i || n[8] !== s
    ? ((p = () => {
        i.get(qt).mutate(
          { path: r, cwd: null, target: `fileManager`, openMode: `workspace` },
          {
            onSuccess: (e) => {
              e.success || s();
            },
            onError: s,
          },
        );
      }),
      (n[6] = r),
      (n[7] = i),
      (n[8] = s),
      (n[9] = p))
    : (p = n[9]);
  let m, h;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Tn.jsx)(g, {
        id: `settings.pets.custom.openFolder`,
        defaultMessage: `Open folder`,
        description: `Button label to open the local custom pet folder`,
      })),
      (h = (0, Tn.jsx)(d, { "aria-hidden": !1, legacyIcon: nt, asset16: f, legacyClassName: `icon-2xs` })),
      (n[10] = m),
      (n[11] = h))
    : ((m = n[10]), (h = n[11]));
  let v;
  n[12] === p
    ? (v = n[13])
    : ((v = (0, Tn.jsxs)(t, { color: `ghost`, onClick: p, size: `toolbar`, children: [m, h] })),
      (n[12] = p),
      (n[13] = v));
  let y;
  return (
    n[14] !== u || n[15] !== v
      ? ((y = (0, Tn.jsx)(xe, { label: c, description: u, control: v })),
        (n[14] = u),
        (n[15] = v),
        (n[16] = y))
      : (y = n[16]),
    y
  );
}
var wn, Tn;
function En() {
  return (En = e(() => {
    ((wn = Ce()), h(), w(), J(), ye(), ne(), oe(), dt(), ze(), we(), q(), (Tn = Te()));
  }))();
}
function Dn(e) {
  let t = (0, Mn.c)(9),
    {
      avatarDirectory: n,
      avatarOptions: r,
      isCreatingCustomAvatar: i,
      isCustomAvatarLoadError: a,
      isLoadingCustomAvatars: o,
      onCreateCustomAvatar: s,
      onRefreshCustomAvatars: c,
      onUpgradeCustomAvatar: l,
    } = e,
    u = r === void 0 ? Ge : r,
    d = i !== void 0 && i,
    f = a !== void 0 && a,
    p = o !== void 0 && o,
    m;
  return (
    t[0] !== n ||
    t[1] !== u ||
    t[2] !== d ||
    t[3] !== f ||
    t[4] !== p ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== l
      ? ((m = (0, X.jsx)(X.Fragment, {
          children: (0, X.jsx)(On, {
            avatarDirectory: n,
            avatarOptions: u,
            isCreatingCustomAvatar: d,
            isCustomAvatarLoadError: f,
            isLoadingCustomAvatars: p,
            onCreateCustomAvatar: s,
            onRefreshCustomAvatars: c,
            onUpgradeCustomAvatar: l,
          }),
        })),
        (t[0] = n),
        (t[1] = u),
        (t[2] = d),
        (t[3] = f),
        (t[4] = p),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l),
        (t[8] = m))
      : (m = t[8]),
    m
  );
}
function On(e) {
  let n = (0, Mn.c)(95),
    {
      avatarDirectory: a,
      avatarOptions: o,
      isCreatingCustomAvatar: s,
      isCustomAvatarLoadError: c,
      isLoadingCustomAvatars: d,
      onCreateCustomAvatar: f,
      onRefreshCustomAvatars: m,
      onUpgradeCustomAvatar: h,
    } = e,
    v = _(l),
    x = j(),
    S = M(Ot),
    C = Rt(`188145323`),
    w = M(xt),
    T = r(p.petSize),
    { selectedAvatar: E, setSelectedAvatarId: D } = Gt(o),
    O = ((T - 80) / 144) * 100,
    k,
    A,
    N,
    P,
    F,
    I,
    L;
  if (
    n[0] !== o ||
    n[1] !== S ||
    n[2] !== x ||
    n[3] !== s ||
    n[4] !== C ||
    n[5] !== c ||
    n[6] !== d ||
    n[7] !== f ||
    n[8] !== m ||
    n[9] !== h ||
    n[10] !== w ||
    n[11] !== E ||
    n[12] !== D
  ) {
    let e = o.filter(An),
      r = o.filter(kn),
      a;
    n[20] === x
      ? (a = n[21])
      : ((a = x.formatMessage({
          id: `settings.pets.custom.create.label`,
          defaultMessage: `Create your own pet`,
          description: `Accessible label for creating a custom Codex pet from settings`,
        })),
        (n[20] = x),
        (n[21] = a));
    let l = a,
      p;
    n[22] === x
      ? (p = n[23])
      : ((p = x.formatMessage({
          id: `settings.pets.refresh`,
          defaultMessage: `Refresh`,
          description: `Button label to refresh custom pets from local manifests`,
        })),
        (n[22] = x),
        (n[23] = p));
    let _ = p,
      v;
    n[24] === w
      ? (v = n[25])
      : ((v = (e, t) => {
          w.logProductEvent(
            i,
            gt({ action: e, selectedAvatar: t, source: b.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS }),
          );
        }),
        (n[24] = w),
        (n[25] = v));
    let T = v,
      O;
    n[26] !== D || n[27] !== T
      ? ((O = (e) => {
          (D(e.id), T(te.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e));
        }),
        (n[26] = D),
        (n[27] = T),
        (n[28] = O))
      : (O = n[28]);
    let j = O;
    N = Y;
    let M;
    n[29] !== m || n[30] !== _
      ? ((M = m
          ? (0, X.jsx)(ve, {
              tooltipContent: _,
              children: (0, X.jsx)(t, {
                "aria-label": _,
                color: `ghost`,
                onClick: m,
                size: `icon`,
                children: (0, X.jsx)(y, { "aria-hidden": !1, asset: u }),
              }),
            })
          : null),
        (n[29] = m),
        (n[30] = _),
        (n[31] = M))
      : (M = n[31]);
    let R;
    n[32] !== l || n[33] !== s || n[34] !== f || n[35] !== E || n[36] !== T
      ? ((R = f
          ? (0, X.jsx)(t, {
              "aria-label": l,
              color: `secondary`,
              loading: s,
              onClick: () => {
                (T(te.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED, E), f());
              },
              size: `toolbar`,
              children: (0, X.jsx)(g, {
                id: `settings.pets.custom.create.title`,
                defaultMessage: `Create`,
                description: `Button label for creating a custom Codex pet from settings`,
              }),
            })
          : null),
        (n[32] = l),
        (n[33] = s),
        (n[34] = f),
        (n[35] = E),
        (n[36] = T),
        (n[37] = R))
      : (R = n[37]);
    let z;
    n[38] !== S || n[39] !== E || n[40] !== T
      ? ((z = () => {
          (T(
            S
              ? te.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
              : te.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
            E,
          ),
            ee.dispatchMessage(`avatar-overlay-open`, {}));
        }),
        (n[38] = S),
        (n[39] = E),
        (n[40] = T),
        (n[41] = z))
      : (z = n[41]);
    let B;
    n[42] === S
      ? (B = n[43])
      : ((B = S
          ? (0, X.jsx)(g, {
              id: `settings.personalization.mini.tuckAway`,
              defaultMessage: `Tuck Away Mini`,
              description: `Button that closes Mini, the floating compact panel`,
            })
          : (0, X.jsx)(g, {
              id: `settings.personalization.mini.wake`,
              defaultMessage: `Wake Mini`,
              description: `Button that opens Mini, the floating compact Codex panel`,
            })),
        (n[42] = S),
        (n[43] = B));
    let V;
    n[44] !== z || n[45] !== B
      ? ((V = (0, X.jsx)(t, { color: `secondary`, onClick: z, size: `toolbar`, children: B })),
        (n[44] = z),
        (n[45] = B),
        (n[46] = V))
      : (V = n[46]);
    let H;
    n[47] !== R || n[48] !== V || n[49] !== M
      ? ((H = (0, X.jsxs)(X.Fragment, { children: [M, R, V] })),
        (n[47] = R),
        (n[48] = V),
        (n[49] = M),
        (n[50] = H))
      : (H = n[50]);
    let U, W;
    (n[51] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((U = (0, X.jsx)(g, {
          id: `settings.pets.pickPet.title`,
          defaultMessage: `Pick a pet`,
          description: `Title inviting the user to select the optional character shown with Mini`,
        })),
        (W = (0, X.jsx)(g, {
          id: `settings.pets.pickPet.miniDescription`,
          defaultMessage: `Mini manages chats and surfaces what needs attention`,
          description: `Description explaining in settings what Mini, the floating compact Codex panel, does`,
        })),
        (n[51] = U),
        (n[52] = W))
      : ((U = n[51]), (W = n[52])),
      n[53] === H
        ? (L = n[54])
        : ((L = (0, X.jsx)(Y.Header, { actions: H, title: U, subtitle: W })), (n[53] = H), (n[54] = L)),
      (A = Y.Content),
      (k = pe),
      n[55] !== c || n[56] !== d
        ? ((P = d
            ? (0, X.jsx)(tn, {
                children: (0, X.jsx)(g, {
                  id: `settings.pets.loadingCustom`,
                  defaultMessage: `Loading custom pets…`,
                  description: `Message shown while loading custom pet manifests`,
                }),
              })
            : c
              ? (0, X.jsx)(xe, {
                  label: (0, X.jsx)(g, {
                    id: `settings.pets.loadCustomError`,
                    defaultMessage: `Unable to load custom pets`,
                    description: `Message shown when custom pet manifests fail to load`,
                  }),
                  control: null,
                })
              : null),
          (n[55] = c),
          (n[56] = d),
          (n[57] = P))
        : (P = n[57]));
    let G;
    (n[58] !== C || n[59] !== h || n[60] !== j || n[61] !== E
      ? ((G = (e) =>
          (0, X.jsx)(
            jn,
            { avatar: e, isSelected: e.id === E.id, onSelectAvatar: j, onUpgradeAvatar: C ? h : void 0 },
            e.id,
          )),
        (n[58] = C),
        (n[59] = h),
        (n[60] = j),
        (n[61] = E),
        (n[62] = G))
      : (G = n[62]),
      (F = r.map(G)));
    let K;
    (n[63] !== j || n[64] !== E
      ? ((K = (e) => (0, X.jsx)(jn, { avatar: e, isSelected: e.id === E.id, onSelectAvatar: j }, e.id)),
        (n[63] = j),
        (n[64] = E),
        (n[65] = K))
      : (K = n[65]),
      (I = e.map(K)),
      (n[0] = o),
      (n[1] = S),
      (n[2] = x),
      (n[3] = s),
      (n[4] = C),
      (n[5] = c),
      (n[6] = d),
      (n[7] = f),
      (n[8] = m),
      (n[9] = h),
      (n[10] = w),
      (n[11] = E),
      (n[12] = D),
      (n[13] = k),
      (n[14] = A),
      (n[15] = N),
      (n[16] = P),
      (n[17] = F),
      (n[18] = I),
      (n[19] = L));
  } else ((k = n[13]), (A = n[14]), (N = n[15]), (P = n[16]), (F = n[17]), (I = n[18]), (L = n[19]));
  let R;
  n[66] === a
    ? (R = n[67])
    : ((R = a == null ? null : (0, X.jsx)(Cn, { avatarDirectory: a })), (n[66] = a), (n[67] = R));
  let z;
  n[68] !== k || n[69] !== P || n[70] !== F || n[71] !== I || n[72] !== R
    ? ((z = (0, X.jsxs)(k, { children: [P, F, I, R] })),
      (n[68] = k),
      (n[69] = P),
      (n[70] = F),
      (n[71] = I),
      (n[72] = R),
      (n[73] = z))
    : (z = n[73]);
  let B;
  n[74] !== A || n[75] !== z
    ? ((B = (0, X.jsx)(A, { children: z })), (n[74] = A), (n[75] = z), (n[76] = B))
    : (B = n[76]);
  let V;
  n[77] !== N || n[78] !== L || n[79] !== B
    ? ((V = (0, X.jsxs)(N, { children: [L, B] })), (n[77] = N), (n[78] = L), (n[79] = B), (n[80] = V))
    : (V = n[80]);
  let H;
  n[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, X.jsx)(Y.Header, {
        title: (0, X.jsx)(g, {
          id: `settings.pets.appearance.title`,
          defaultMessage: `Appearance`,
          description: `Heading above pet appearance settings`,
        }),
      })),
      (n[81] = H))
    : (H = n[81]);
  let U, W;
  n[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, X.jsx)(`label`, {
        htmlFor: `pet-size`,
        children: (0, X.jsx)(g, {
          id: `settings.pets.size`,
          defaultMessage: `Pet size`,
          description: `Label for the floating pet size setting`,
        }),
      })),
      (W = (0, X.jsx)(g, {
        id: `settings.pets.size.description`,
        defaultMessage: `Adjust the size of your pet`,
        description: `Description for the floating pet size setting`,
      })),
      (n[82] = U),
      (n[83] = W))
    : ((U = n[82]), (W = n[83]));
  let G;
  n[84] === v
    ? (G = n[85])
    : ((G = (e) => {
        me(v, p.petSize, Number(e.currentTarget.value));
      }),
      (n[84] = v),
      (n[85] = G));
  let K = `linear-gradient(to right, var(--color-text-info) ${O}%, var(--color-border-subtle) ${O}%)`,
    q;
  n[86] === K ? (q = n[87]) : ((q = { background: K }), (n[86] = K), (n[87] = q));
  let J;
  n[88] !== T || n[89] !== G || n[90] !== q
    ? ((J = (0, X.jsxs)(Y, {
        children: [
          H,
          (0, X.jsx)(Y.Content, {
            children: (0, X.jsx)(pe, {
              children: (0, X.jsx)(xe, {
                label: U,
                description: W,
                control: (0, X.jsx)(`input`, {
                  id: `pet-size`,
                  className: `h-0.5 w-40 cursor-interaction appearance-none rounded-full [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:cursor-interaction [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-strong [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:cursor-interaction [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-strong [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger`,
                  max: 224,
                  min: 80,
                  onInput: G,
                  style: q,
                  type: `range`,
                  value: T,
                }),
              }),
            }),
          }),
        ],
      })),
      (n[88] = T),
      (n[89] = G),
      (n[90] = q),
      (n[91] = J))
    : (J = n[91]);
  let ne;
  return (
    n[92] !== J || n[93] !== V
      ? ((ne = (0, X.jsxs)(X.Fragment, { children: [V, J] })), (n[92] = J), (n[93] = V), (n[94] = ne))
      : (ne = n[94]),
    ne
  );
}
function kn(e) {
  return rt(e.id);
}
function An(e) {
  return !rt(e.id);
}
function jn(e) {
  let n = (0, Mn.c)(22),
    { avatar: r, isSelected: i, onSelectAvatar: a, onUpgradeAvatar: o } = e,
    s = j(),
    c = r.upgradeDirectoryPath,
    l;
  n[0] !== r.displayName || n[1] !== s
    ? ((l = s.formatMessage(
        {
          id: `settings.pets.custom.update.accessibleLabel`,
          defaultMessage: `Update {petName}`,
          description: `Accessible label for updating an outdated custom pet`,
        },
        { petName: r.displayName },
      )),
      (n[0] = r.displayName),
      (n[1] = s),
      (n[2] = l))
    : (l = n[2]);
  let u = l,
    d;
  n[3] === r ? (d = n[4]) : ((d = (0, X.jsx)(yn, { avatar: r })), (n[3] = r), (n[4] = d));
  let f;
  n[5] !== r.displayName || n[6] !== o || n[7] !== u || n[8] !== c
    ? ((f =
        c != null && o != null
          ? (0, X.jsx)(ve, {
              tooltipContent: u,
              children: (0, X.jsx)(t, {
                "aria-label": u,
                color: `accent`,
                onClick: () => {
                  o(r.displayName, c);
                },
                size: `toolbar`,
                children: (0, X.jsx)(g, {
                  id: `settings.pets.custom.update`,
                  defaultMessage: `Update`,
                  description: `Button label for updating an outdated custom pet`,
                }),
              }),
            })
          : null),
      (n[5] = r.displayName),
      (n[6] = o),
      (n[7] = u),
      (n[8] = c),
      (n[9] = f))
    : (f = n[9]);
  let p;
  n[10] !== r || n[11] !== i || n[12] !== a
    ? ((p = i
        ? (0, X.jsx)(t, {
            color: `secondary`,
            disabled: !0,
            size: `toolbar`,
            children: (0, X.jsx)(g, {
              id: `settings.personalization.avatars.selected`,
              defaultMessage: `Selected`,
              description: `Label for the selected avatar`,
            }),
          })
        : (0, X.jsx)(t, {
            color: `secondary`,
            size: `toolbar`,
            onClick: () => {
              a(r);
            },
            children: (0, X.jsx)(g, {
              id: `settings.personalization.avatars.select`,
              defaultMessage: `Select`,
              description: `Button label to select an avatar`,
            }),
          })),
      (n[10] = r),
      (n[11] = i),
      (n[12] = a),
      (n[13] = p))
    : (p = n[13]);
  let m;
  n[14] !== f || n[15] !== p
    ? ((m = (0, X.jsxs)(X.Fragment, { children: [f, p] })), (n[14] = f), (n[15] = p), (n[16] = m))
    : (m = n[16]);
  let h;
  return (
    n[17] !== r.description || n[18] !== r.displayName || n[19] !== d || n[20] !== m
      ? ((h = (0, X.jsx)(xe, { icon: d, label: r.displayName, description: r.description, control: m })),
        (n[17] = r.description),
        (n[18] = r.displayName),
        (n[19] = d),
        (n[20] = m),
        (n[21] = h))
      : (h = n[21]),
    h
  );
}
var Mn, X;
function Nn() {
  return (Nn = e(() => {
    ((Mn = Ce()),
      E(),
      S(),
      w(),
      ge(),
      J(),
      Sn(),
      Vt(),
      an(),
      Tt(),
      ye(),
      x(),
      R(),
      U(),
      it(),
      we(),
      N(),
      Le(),
      en(),
      q(),
      v(),
      yt(),
      ot(),
      mt(),
      En(),
      (X = Te()));
  }))();
}
async function Pn(e) {
  return `pluginId` in e
    ? Lt({
        defaultPrompt: `Use your create-pet skill to create and select a pet based on what you know about me`,
        pluginDisplayName: e.pluginDisplayName,
        pluginId: e.pluginId,
      })
    : `${await In(e)} create a pet based on what you know about me`;
}
async function Fn({
  scope: e,
  forceReloadSkills: t,
  petDirectoryPath: n,
  petName: r,
  skillStatsigOverride: i,
}) {
  return `${await In({ scope: e, forceReloadSkills: t, skillStatsigOverride: i })} upgrade the existing pet at ${k(r.replaceAll(/[\r\n]+/g, ` `), n)} to the latest pet version with looking directions`;
}
async function In({ scope: e, forceReloadSkills: t, skillStatsigOverride: n }) {
  let r = await he(`install-recommended-skill`, {
    params: {
      forceReinstall: !0,
      hostId: G,
      installRoot: null,
      repoPath: Rn,
      skillId: Ln,
      skillStatsigOverride: n,
      source: `bundled`,
    },
  });
  if (!r.success || r.destination == null) throw Error(r.error ?? `Unable to install Hatch Pet`);
  let i = Xt(r.destination, `SKILL.md`),
    { effectiveEnabled: a } = await st(e, G).sendRequest(`skills/config/write`, { enabled: !0, path: i });
  if (!a) throw Error(`Hatch Pet is disabled`);
  return (await t(), re({ name: Ln, path: i }));
}
var Ln, Rn;
function zn() {
  return (zn = e(() => {
    (at(), o(), _t(), zt(), fe(), _e(), (Ln = `hatch-pet`), (Rn = `skills/.curated/hatch-pet`));
  }))();
}
function Bn(e) {
  let t = (0, Un.c)(6),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { collectionSection: r, onCreateStart: i, onCreateCloudPet: a } = n,
    o = r === void 0 ? Dn : r,
    s;
  return (
    t[2] !== o || t[3] !== a || t[4] !== i
      ? ((s = (0, Gn.jsx)(Gn.Fragment, {
          children: (0, Gn.jsx)(Vn, { CollectionSection: o, onCreateStart: i, onCreateCloudPet: a }),
        })),
        (t[2] = o),
        (t[3] = a),
        (t[4] = i),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function Vn(e) {
  let t = (0, Un.c)(44),
    { CollectionSection: n, onCreateStart: r, onCreateCloudPet: i } = e,
    a = _(l),
    [o, s] = (0, Wn.useState)(!1),
    { avatarDirectory: u, avatarOptions: d, isError: f, isLoading: p } = Qt(),
    m = De(Pt, `1655510532`),
    h = i == null ? G : ae,
    { installPlugin: v } = Mt(),
    y;
  t[0] === h ? (y = t[1]) : ((y = { hostId: h }), (t[0] = h), (t[1] = y));
  let { setPluginEnabled: b } = Fe(y),
    x = Re(),
    S = je(),
    { forceReload: C } = St(void 0, G),
    w = _n(),
    T;
  t[2] === w ? (T = t[3]) : ((T = vn(w, `hatch-pet`)), (t[2] = w), (t[3] = T));
  let E = T,
    D;
  t[4] === C
    ? (D = t[5])
    : ((D = async () => {
        await C();
      }),
      (t[4] = C),
      (t[5] = D));
  let O = D,
    k;
  t[6] === a
    ? (k = t[7])
    : ((k = () => {
        a.get(W).danger(
          (0, Gn.jsx)(g, {
            id: `settings.pets.createCustom.error`,
            defaultMessage: `Unable to start pet creation`,
            description: `Toast shown when the pet creation skill or plugin cannot be prepared`,
          }),
          { errorAnalytics: { toastId: `settings.pets.createCustom.error` } },
        );
      }),
      (t[6] = a),
      (t[7] = k));
  let A = k,
    j;
  t[8] !== O ||
  t[9] !== E ||
  t[10] !== v ||
  t[11] !== m ||
  t[12] !== i ||
  t[13] !== h ||
  t[14] !== a ||
  t[15] !== b ||
  t[16] !== A ||
  t[17] !== S
    ? ((j = async () => {
        (s(!0),
          await (async () => {
            try {
              let e = i == null ? null : a.get(wt);
              if (i != null && e == null) {
                A();
                return;
              }
              let t = m
                  ? (
                      await a.queryClient.fetchQuery({
                        ...a.query.getOptions(Ke, { accountId: e, hostId: h, roots: [] }),
                        staleTime: 0,
                        retry: !1,
                      })
                    ).find(Hn)
                  : void 0,
                n = m
                  ? (t ??
                    ct(
                      await a.queryClient.fetchQuery({
                        ...a.query.getOptions(Ft, {
                          hostId: h,
                          marketplacePath: null,
                          pluginName: Kn,
                          remoteMarketplaceName: `openai-curated-remote`,
                        }),
                        staleTime: 0,
                        retry: !1,
                      }),
                    ))
                  : void 0;
              if (n != null && Jt(n.plugin)) {
                A();
                return;
              }
              let r = await Pn(
                n == null
                  ? { scope: a, forceReloadSkills: O, skillStatsigOverride: E }
                  : { pluginDisplayName: Ue(n), pluginId: n.plugin.id },
              );
              if (i != null && a.get(wt) !== e) return;
              if ((i ?? (await jt(a, Zt)), n != null && !n.plugin.installed)) {
                v(n, {
                  hostId: h,
                  hostedAccountId: e ?? void 0,
                  marketplaceAnalytics: Xe.settings,
                  postInstallComposerPrefill: i == null ? r : void 0,
                  postInstallNewConversation: i == null ? { activeProject: null } : void 0,
                  onSuccess: i == null ? void 0 : () => i(r),
                }) || A();
                return;
              }
              if (
                (n != null &&
                  !n.plugin.enabled &&
                  (await b({
                    enabled: !0,
                    plugin: n.plugin,
                    pluginDisplayName: Ue(n),
                    pluginId: n.plugin.id,
                  })),
                i != null)
              ) {
                if (a.get(wt) !== e) return;
                i(r);
              } else
                S({
                  activeProject: null,
                  prefillComposerMode: n == null ? `local` : void 0,
                  prefillPrompt: r,
                });
            } catch (e) {
              let t = e;
              (c.warning(`[pets] Unable to start pet creation`, {
                safe: { cloudPetCreationEnabled: m },
                sensitive: { error: t },
              }),
                A());
            }
          })().finally(() => {
            s(!1);
          }));
      }),
      (t[8] = O),
      (t[9] = E),
      (t[10] = v),
      (t[11] = m),
      (t[12] = i),
      (t[13] = h),
      (t[14] = a),
      (t[15] = b),
      (t[16] = A),
      (t[17] = S),
      (t[18] = j))
    : (j = t[18]);
  let M = j,
    N;
  t[19] !== O || t[20] !== E || t[21] !== a || t[22] !== S
    ? ((N = async (e, t) => {
        try {
          S({
            prefillPrompt: await Fn({
              scope: a,
              forceReloadSkills: O,
              petDirectoryPath: t,
              petName: e,
              skillStatsigOverride: E,
            }),
          });
        } catch {
          a.get(W).danger(
            (0, Gn.jsx)(g, {
              id: `settings.pets.upgradeCustom.error`,
              defaultMessage: `Unable to start pet upgrade`,
              description: `Toast shown when the Hatch Pet skill cannot be installed for a pet upgrade`,
            }),
            { errorAnalytics: { toastId: `settings.pets.upgradeCustom.error` } },
          );
        }
      }),
      (t[19] = O),
      (t[20] = E),
      (t[21] = a),
      (t[22] = S),
      (t[23] = N))
    : (N = t[23]);
  let P = N,
    F = m ? null : u,
    I;
  t[24] !== M || t[25] !== m || t[26] !== i || t[27] !== r
    ? ((I =
        i != null && !m
          ? void 0
          : () => {
              (r?.(), M());
            }),
      (t[24] = M),
      (t[25] = m),
      (t[26] = i),
      (t[27] = r),
      (t[28] = I))
    : (I = t[28]);
  let L;
  t[29] === x
    ? (L = t[30])
    : ((L = () => {
        (x(Pe), x(At), x($e));
      }),
      (t[29] = x),
      (t[30] = L));
  let R;
  t[31] !== m || t[32] !== P
    ? ((R = m
        ? void 0
        : (e, t) => {
            P(e, t);
          }),
      (t[31] = m),
      (t[32] = P),
      (t[33] = R))
    : (R = t[33]);
  let z;
  return (
    t[34] !== n ||
    t[35] !== d ||
    t[36] !== o ||
    t[37] !== f ||
    t[38] !== p ||
    t[39] !== R ||
    t[40] !== F ||
    t[41] !== I ||
    t[42] !== L
      ? ((z = (0, Gn.jsx)(n, {
          avatarDirectory: F,
          avatarOptions: d,
          isCreatingCustomAvatar: o,
          isCustomAvatarLoadError: f,
          isLoadingCustomAvatars: p,
          onCreateCustomAvatar: I,
          onRefreshCustomAvatars: L,
          onUpgradeCustomAvatar: R,
        })),
        (t[34] = n),
        (t[35] = d),
        (t[36] = o),
        (t[37] = f),
        (t[38] = p),
        (t[39] = R),
        (t[40] = F),
        (t[41] = I),
        (t[42] = L),
        (t[43] = z))
      : (z = t[43]),
    z
  );
}
function Hn(e) {
  let { marketplaceName: t, plugin: n } = e;
  return n.installed && n.name === `work-pets` && (t === `openai-curated` || t === `openai-curated-remote`);
}
var Un, Wn, Gn, Kn;
function qn() {
  return (qn = e(() => {
    ((Un = Ce()),
      w(),
      ge(),
      qe(),
      (Wn = Ee()),
      J(),
      Dt(),
      oe(),
      Ve(),
      Me(),
      lt(),
      tt(),
      et(),
      Ye(),
      He(),
      ft(),
      Ae(),
      we(),
      Nt(),
      zt(),
      gn(),
      ht(),
      Je(),
      D(),
      Nn(),
      Ne(),
      Qe(),
      zn(),
      ke(),
      $t(),
      (Gn = Te()),
      (Kn = `plugin_connector_1p_bccf6c8660c08191ae4470d9ae4877fa`));
  }))();
}
function Jn() {
  let e = (0, Yn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Xn.jsx)(Et, { title: (0, Xn.jsx)(bt, { slug: `pets` }), children: (0, Xn.jsx)(Bn, {}) })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Yn, Xn;
function Zn() {
  return (Zn = e(() => {
    ((Yn = Ce()), qn(), ut(), Wt(), (Xn = Te()));
  }))();
}
function Qn(e) {
  let r = (0, $n.c)(45),
    { petSize: i, petSizeSetting: a, selectedAvatar: o } = e,
    s = M(n),
    [c, l] = (0, er.useState)(!1),
    u = i / nn,
    d = u + 40,
    f = (c ? 224 / nn : u) + 40,
    p = (tr - i) / 2,
    m;
  r[0] !== u || r[1] !== i || r[2] !== p
    ? ((m = { height: u, left: p, top: 0, width: i }), (r[0] = u), (r[1] = i), (r[2] = p), (r[3] = m))
    : (m = r[3]);
  let h = m,
    _,
    v;
  r[4] === d
    ? ((_ = r[5]), (v = r[6]))
    : ((_ = { height: d, left: 0, top: 0, width: tr }),
      (v = { height: d, width: tr }),
      (r[4] = d),
      (r[5] = _),
      (r[6] = v));
  let y;
  r[7] !== h || r[8] !== _ || r[9] !== v
    ? ((y = { mascot: h, placement: `bottom-end`, tray: null, visibleBounds: _, viewport: v }),
      (r[7] = h),
      (r[8] = _),
      (r[9] = v),
      (r[10] = y))
    : (y = r[10]);
  let b = y,
    x;
  r[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsx)(t, {
        className: `absolute right-4 bottom-4`,
        color: `outline`,
        size: `medium`,
        children: (0, Z.jsx)(g, {
          id: `settings.pets.preview.customize`,
          defaultMessage: `Customize`,
          description: `Button that opens floating Codex pet customization options`,
        }),
      })),
      (r[11] = x))
    : (x = r[11]);
  let S = x,
    C;
  r[12] === f ? (C = r[13]) : ((C = { height: f }), (r[12] = f), (r[13] = C));
  let w;
  r[14] === s ? (w = r[15]) : ((w = s ? { duration: 0 } : dn), (r[14] = s), (r[15] = w));
  let T;
  r[16] === d ? (T = r[17]) : ((T = { height: d }), (r[16] = d), (r[17] = T));
  let E;
  r[18] === o ? (E = r[19]) : ((E = We(o)), (r[18] = o), (r[19] = E));
  let D;
  r[20] === i ? (D = r[21]) : ((D = rn(i)), (r[20] = i), (r[21] = D));
  let O;
  r[22] !== E || r[23] !== D
    ? ((O = (0, Z.jsx)(un, { className: `pointer-events-none`, source: E, state: `idle`, style: D })),
      (r[22] = E),
      (r[23] = D),
      (r[24] = O))
    : (O = r[24]);
  let k;
  r[25] !== h || r[26] !== O
    ? ((k = (0, Z.jsx)(`div`, { className: `absolute`, style: h, children: O })),
      (r[25] = h),
      (r[26] = O),
      (r[27] = k))
    : (k = r[27]);
  let A;
  r[28] !== b || r[29] !== k
    ? ((A = (0, Z.jsx)(sn, {
        areActivityPillsVisible: !0,
        canStartVoice: !0,
        draft: ``,
        hasNotifications: !0,
        isExpanded: !1,
        isVoiceSelected: !1,
        layout: b,
        petAccessory: k,
      })),
      (r[28] = b),
      (r[29] = k),
      (r[30] = A))
    : (A = r[30]);
  let j;
  r[31] !== A || r[32] !== T
    ? ((j = (0, Z.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `pointer-events-none relative w-96 max-w-full select-none`,
        inert: !0,
        style: T,
        children: A,
      })),
      (r[31] = A),
      (r[32] = T),
      (r[33] = j))
    : (j = r[33]);
  let N;
  r[34] !== j || r[35] !== C || r[36] !== w
    ? ((N = (0, Z.jsx)(I.div, {
        animate: C,
        className: `flex items-center justify-center`,
        initial: !1,
        transition: w,
        children: j,
      })),
      (r[34] = j),
      (r[35] = C),
      (r[36] = w),
      (r[37] = N))
    : (N = r[37]);
  let P;
  r[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = { "aria-describedby": void 0 }), (r[38] = P))
    : (P = r[38]);
  let R;
  r[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Z.jsx)(ie, {
        children: (0, Z.jsx)(L, {
          className: `pe-8`,
          title: (0, Z.jsx)(F, {
            children: (0, Z.jsx)(g, {
              id: `settings.pets.preview.customize.title`,
              defaultMessage: `Customize pet`,
              description: `Title of the dialog for customizing the selected floating Codex pet`,
            }),
          }),
        }),
      })),
      (r[39] = R))
    : (R = r[39]);
  let z;
  r[40] === a
    ? (z = r[41])
    : ((z = (0, Z.jsx)(ce, {
        contentProps: P,
        onOpenChange: l,
        size: `compact`,
        triggerContent: S,
        children: (0, Z.jsxs)(de, {
          className: `select-none`,
          children: [R, (0, Z.jsx)(ie, { children: a })],
        }),
      })),
      (r[40] = a),
      (r[41] = z));
  let B;
  return (
    r[42] !== N || r[43] !== z
      ? ((B = (0, Z.jsx)(Y, {
          className: `select-none`,
          children: (0, Z.jsx)(Y.Content, {
            children: (0, Z.jsx)(pe, {
              children: (0, Z.jsxs)(`div`, { className: `relative p-6`, children: [N, z] }),
            }),
          }),
        })),
        (r[42] = N),
        (r[43] = z),
        (r[44] = B))
      : (B = r[44]),
    B
  );
}
var $n, er, Z, tr;
function nr() {
  return (nr = e(() => {
    (($n = Ce()),
      H(),
      w(),
      (er = Ee()),
      J(),
      cn(),
      ln(),
      an(),
      on(),
      ye(),
      Se(),
      B(),
      T(),
      Le(),
      v(),
      ot(),
      (Z = Te()),
      (tr = 384));
  }))();
}
function rr(e) {
  let t = (0, cr.c)(8),
    {
      avatarOptions: n,
      isCreatingCustomAvatar: r,
      isCustomAvatarLoadError: i,
      isLoadingCustomAvatars: a,
      onCreateCustomAvatar: o,
      onRefreshCustomAvatars: s,
      onUpgradeCustomAvatar: c,
    } = e,
    l = n === void 0 ? Ge : n,
    u = r !== void 0 && r,
    d = i !== void 0 && i,
    f = a !== void 0 && a,
    p;
  return (
    t[0] !== l || t[1] !== u || t[2] !== d || t[3] !== f || t[4] !== o || t[5] !== s || t[6] !== c
      ? ((p = (0, Q.jsx)(Q.Fragment, {
          children: (0, Q.jsx)(ir, {
            avatarOptions: l,
            isCreatingCustomAvatar: u,
            isCustomAvatarLoadError: d,
            isLoadingCustomAvatars: f,
            onCreateCustomAvatar: o,
            onRefreshCustomAvatars: s,
            onUpgradeCustomAvatar: c,
          }),
        })),
        (t[0] = l),
        (t[1] = u),
        (t[2] = d),
        (t[3] = f),
        (t[4] = o),
        (t[5] = s),
        (t[6] = c),
        (t[7] = p))
      : (p = t[7]),
    p
  );
}
function ir(e) {
  let n = (0, cr.c)(83),
    {
      avatarOptions: a,
      isCreatingCustomAvatar: o,
      isCustomAvatarLoadError: s,
      isLoadingCustomAvatars: c,
      onCreateCustomAvatar: d,
      onRefreshCustomAvatars: f,
      onUpgradeCustomAvatar: m,
    } = e,
    h = _(l),
    v = j(),
    x = Rt(`188145323`),
    S = M(xt),
    C = r(p.petSize),
    w = r(p.petVisible),
    { selectedAvatar: T, setSelectedAvatarId: E } = Gt(a),
    D = w,
    O = ((C - 80) / 144) * 100,
    k;
  n[0] === v
    ? (k = n[1])
    : ((k = v.formatMessage({
        id: `settings.mini.pets.create.accessibleLabel`,
        defaultMessage: `Create pet`,
        description: `Accessible label for creating a custom pet from Mini & Pets settings`,
      })),
      (n[0] = v),
      (n[1] = k));
  let A = k,
    N;
  n[2] === v
    ? (N = n[3])
    : ((N = v.formatMessage({
        id: `settings.pets.refresh`,
        defaultMessage: `Refresh`,
        description: `Button label to refresh custom pets from local manifests`,
      })),
      (n[2] = v),
      (n[3] = N));
  let P = N,
    F;
  n[4] === S
    ? (F = n[5])
    : ((F = (e, t) => {
        S.logProductEvent(
          i,
          gt({ action: e, selectedAvatar: t, source: b.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS }),
        );
      }),
      (n[4] = S),
      (n[5] = F));
  let I = F,
    L;
  n[6] !== D || n[7] !== h || n[8] !== T || n[9] !== E || n[10] !== I
    ? ((L = (e) => {
        (D && e.id === T.id) ||
          (E(e.id), D || me(h, p.petVisible, !0), I(te.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e));
      }),
      (n[6] = D),
      (n[7] = h),
      (n[8] = T),
      (n[9] = E),
      (n[10] = I),
      (n[11] = L))
    : (L = n[11]);
  let R = L,
    z;
  n[12] !== D || n[13] !== h
    ? ((z = () => {
        D && me(h, p.petVisible, !1);
      }),
      (n[12] = D),
      (n[13] = h),
      (n[14] = z))
    : (z = n[14]);
  let B = z,
    V,
    ee;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Q.jsx)(`label`, {
        htmlFor: `pet-size`,
        children: (0, Q.jsx)(g, {
          id: `settings.pets.size`,
          defaultMessage: `Pet size`,
          description: `Label for the floating pet size setting`,
        }),
      })),
      (ee = (0, Q.jsx)(g, {
        id: `settings.pets.size.description`,
        defaultMessage: `Adjust the size of your pet`,
        description: `Description for the floating pet size setting`,
      })),
      (n[15] = V),
      (n[16] = ee))
    : ((V = n[15]), (ee = n[16]));
  let H;
  n[17] === h
    ? (H = n[18])
    : ((H = (e) => {
        me(h, p.petSize, Number(e.currentTarget.value));
      }),
      (n[17] = h),
      (n[18] = H));
  let U = `linear-gradient(to right, var(--color-text-info) ${O}%, var(--color-border-subtle) ${O}%)`,
    W;
  n[19] === U ? (W = n[20]) : ((W = { background: U }), (n[19] = U), (n[20] = W));
  let G;
  n[21] !== C || n[22] !== W || n[23] !== H
    ? ((G = (0, Q.jsx)(`input`, {
        id: `pet-size`,
        className: `h-0.5 w-40 cursor-interaction appearance-none rounded-full [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:cursor-interaction [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-strong [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:cursor-interaction [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-strong [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger`,
        max: 224,
        min: 80,
        onInput: H,
        style: W,
        type: `range`,
        value: C,
      })),
      (n[21] = C),
      (n[22] = W),
      (n[23] = H),
      (n[24] = G))
    : (G = n[24]);
  let K = C === p.petSize.default,
    q;
  n[25] === h
    ? (q = n[26])
    : ((q = () => {
        me(h, p.petSize, p.petSize.default);
      }),
      (n[25] = h),
      (n[26] = q));
  let J;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, Q.jsx)(g, {
        id: `settings.pets.size.reset`,
        defaultMessage: `Reset`,
        description: `Button that restores the floating pet to its default size`,
      })),
      (n[27] = J))
    : (J = n[27]);
  let ne;
  n[28] !== K || n[29] !== q
    ? ((ne = (0, Q.jsx)(t, {
        type: `button`,
        color: `ghost`,
        size: `toolbar`,
        disabled: K,
        onClick: q,
        children: J,
      })),
      (n[28] = K),
      (n[29] = q),
      (n[30] = ne))
    : (ne = n[30]);
  let re;
  n[31] !== G || n[32] !== ne
    ? ((re = (0, Q.jsx)(xe, {
        label: V,
        description: ee,
        control: (0, Q.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [G, ne] }),
      })),
      (n[31] = G),
      (n[32] = ne),
      (n[33] = re))
    : (re = n[33]);
  let ie = re,
    ae;
  n[34] !== D || n[35] !== C || n[36] !== ie || n[37] !== T
    ? ((ae = D ? (0, Q.jsx)(Qn, { petSize: C, petSizeSetting: ie, selectedAvatar: T }) : null),
      (n[34] = D),
      (n[35] = C),
      (n[36] = ie),
      (n[37] = T),
      (n[38] = ae))
    : (ae = n[38]);
  let oe;
  n[39] !== f || n[40] !== P
    ? ((oe = f
        ? (0, Q.jsx)(ve, {
            tooltipContent: P,
            children: (0, Q.jsx)(t, {
              "aria-label": P,
              color: `ghost`,
              onClick: f,
              size: `icon`,
              children: (0, Q.jsx)(y, { "aria-hidden": !1, asset: u }),
            }),
          })
        : null),
      (n[39] = f),
      (n[40] = P),
      (n[41] = oe))
    : (oe = n[41]);
  let se;
  n[42] !== A || n[43] !== o || n[44] !== d || n[45] !== T || n[46] !== I
    ? ((se = d
        ? (0, Q.jsx)(t, {
            "aria-label": A,
            color: `secondary`,
            loading: o,
            onClick: () => {
              (I(te.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED, T), d());
            },
            size: `toolbar`,
            children: (0, Q.jsx)(g, {
              id: `settings.mini.pets.create.title`,
              defaultMessage: `Create pet`,
              description: `Button label for creating a custom Codex pet from Mini & Pets settings`,
            }),
          })
        : null),
      (n[42] = A),
      (n[43] = o),
      (n[44] = d),
      (n[45] = T),
      (n[46] = I),
      (n[47] = se))
    : (se = n[47]);
  let ce;
  n[48] !== oe || n[49] !== se
    ? ((ce = (0, Q.jsxs)(Q.Fragment, { children: [oe, se] })), (n[48] = oe), (n[49] = se), (n[50] = ce))
    : (ce = n[50]);
  let le;
  n[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, Q.jsx)(g, {
        id: `settings.mini.pets.title`,
        defaultMessage: `My pets`,
        description: `Title above the pet selection grid in Mini & Pets settings`,
      })),
      (n[51] = le))
    : (le = n[51]);
  let ue;
  n[52] === ce
    ? (ue = n[53])
    : ((ue = (0, Q.jsx)(Y.Header, { actions: ce, title: le })), (n[52] = ce), (n[53] = ue));
  let de = !D,
    fe;
  n[54] !== B || n[55] !== de
    ? ((fe = (0, Q.jsx)(ar, { isSelected: de, onSelect: B })), (n[54] = B), (n[55] = de), (n[56] = fe))
    : (fe = n[56]);
  let pe;
  n[57] !== s || n[58] !== c
    ? ((pe = c
        ? (0, Q.jsx)(`div`, {
            className: `col-span-full`,
            children: (0, Q.jsx)(tn, {
              children: (0, Q.jsx)(g, {
                id: `settings.pets.loadingCustom`,
                defaultMessage: `Loading custom pets…`,
                description: `Message shown while loading custom pet manifests`,
              }),
            }),
          })
        : s
          ? (0, Q.jsx)(xe, {
              className: `col-span-full`,
              label: (0, Q.jsx)(g, {
                id: `settings.pets.loadCustomError`,
                defaultMessage: `Unable to load custom pets`,
                description: `Message shown when custom pet manifests fail to load`,
              }),
              control: null,
            })
          : null),
      (n[57] = s),
      (n[58] = c),
      (n[59] = pe))
    : (pe = n[59]);
  let he;
  if (n[60] !== a || n[61] !== x || n[62] !== D || n[63] !== m || n[64] !== R || n[65] !== T) {
    let e;
    (n[67] !== x || n[68] !== D || n[69] !== m || n[70] !== R || n[71] !== T
      ? ((e = (e) =>
          (0, Q.jsx)(
            or,
            { avatar: e, isSelected: D && e.id === T.id, onSelectAvatar: R, onUpgradeAvatar: x ? m : void 0 },
            e.id,
          )),
        (n[67] = x),
        (n[68] = D),
        (n[69] = m),
        (n[70] = R),
        (n[71] = T),
        (n[72] = e))
      : (e = n[72]),
      (he = a.map(e)),
      (n[60] = a),
      (n[61] = x),
      (n[62] = D),
      (n[63] = m),
      (n[64] = R),
      (n[65] = T),
      (n[66] = he));
  } else he = n[66];
  let ge;
  n[73] !== fe || n[74] !== pe || n[75] !== he
    ? ((ge = (0, Q.jsx)(Y.Content, {
        children: (0, Q.jsxs)(`div`, {
          className: `grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3`,
          children: [fe, pe, he],
        }),
      })),
      (n[73] = fe),
      (n[74] = pe),
      (n[75] = he),
      (n[76] = ge))
    : (ge = n[76]);
  let _e;
  n[77] !== ue || n[78] !== ge
    ? ((_e = (0, Q.jsx)(`fieldset`, {
        className: `m-0 min-w-0 border-0 p-0`,
        children: (0, Q.jsxs)(Y, { children: [ue, ge] }),
      })),
      (n[77] = ue),
      (n[78] = ge),
      (n[79] = _e))
    : (_e = n[79]);
  let ye;
  return (
    n[80] !== ae || n[81] !== _e
      ? ((ye = (0, Q.jsxs)(Q.Fragment, { children: [ae, _e] })), (n[80] = ae), (n[81] = _e), (n[82] = ye))
      : (ye = n[82]),
    ye
  );
}
function ar(e) {
  let t = (0, cr.c)(10),
    { isSelected: n, onSelect: r } = e,
    i,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(`span`, {
        className: `flex flex-1 items-center justify-center`,
        children: (0, Q.jsx)(le, {}),
      })),
      (a = (0, Q.jsx)(`span`, { className: `h-5 w-px bg-border` })),
      (t[0] = i),
      (t[1] = a))
    : ((i = t[0]), (a = t[1]));
  let o, s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(`span`, {
        className: `flex flex-1 items-center justify-center`,
        children: (0, Q.jsx)(z, {}),
      })),
      (s = (0, Q.jsx)(`span`, { className: `h-5 w-px bg-border` })),
      (t[2] = o),
      (t[3] = s))
    : ((o = t[2]), (s = t[3]));
  let c, l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `pointer-events-none flex h-24 w-30 items-center`,
        children: (0, Q.jsxs)(pt, {
          className: `flex items-center`,
          nativeSurfaceId: `mini-tile-preview`,
          variant: `quick-chat-voice`,
          children: [
            i,
            a,
            o,
            s,
            (0, Q.jsx)(`span`, {
              className: `flex flex-1 items-center justify-center`,
              children: (0, Q.jsx)(C, {}),
            }),
          ],
        }),
      })),
      (l = (0, Q.jsx)(g, {
        id: `settings.mini.pets.barOnly.description`,
        defaultMessage: `The lightweight Codex companion`,
        description: `Subtitle for the bar-only Mini option in the pet selection grid`,
      })),
      (t[4] = c),
      (t[5] = l))
    : ((c = t[4]), (l = t[5]));
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(g, {
        id: `settings.mini.pets.none.title`,
        defaultMessage: `None`,
        description: `Label for selecting the bar-only Mini mode without a pet`,
      })),
      (t[6] = u))
    : (u = t[6]);
  let d;
  return (
    t[7] !== n || t[8] !== r
      ? ((d = (0, Q.jsx)(sr, { artwork: c, description: l, isSelected: n, label: u, onSelect: r })),
        (t[7] = n),
        (t[8] = r),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
function or(e) {
  let n = (0, cr.c)(20),
    { avatar: r, isSelected: i, onSelectAvatar: a, onUpgradeAvatar: o } = e,
    s = r.upgradeDirectoryPath,
    c = j(),
    l;
  n[0] !== r.displayName || n[1] !== c
    ? ((l = c.formatMessage(
        {
          id: `settings.pets.custom.update.accessibleLabel`,
          defaultMessage: `Update {petName}`,
          description: `Accessible label for updating an outdated custom pet`,
        },
        { petName: r.displayName },
      )),
      (n[0] = r.displayName),
      (n[1] = c),
      (n[2] = l))
    : (l = n[2]);
  let u = l,
    d;
  n[3] !== r.displayName || n[4] !== o || n[5] !== u || n[6] !== s
    ? ((d =
        s != null && o != null
          ? (0, Q.jsx)(ve, {
              tooltipContent: u,
              children: (0, Q.jsx)(t, {
                "aria-label": u,
                color: `accent`,
                onClick: () => {
                  o(r.displayName, s);
                },
                size: `toolbar`,
                children: (0, Q.jsx)(g, {
                  id: `settings.pets.custom.update`,
                  defaultMessage: `Update`,
                  description: `Button label for updating an outdated custom pet`,
                }),
              }),
            })
          : null),
      (n[3] = r.displayName),
      (n[4] = o),
      (n[5] = u),
      (n[6] = s),
      (n[7] = d))
    : (d = n[7]);
  let f;
  n[8] === r
    ? (f = n[9])
    : ((f = (0, Q.jsx)(yn, { className: `size-24 rounded-none`, avatar: r })), (n[8] = r), (n[9] = f));
  let p;
  n[10] !== r || n[11] !== a
    ? ((p = () => {
        a(r);
      }),
      (n[10] = r),
      (n[11] = a),
      (n[12] = p))
    : (p = n[12]);
  let m;
  return (
    n[13] !== r.description ||
    n[14] !== r.displayName ||
    n[15] !== i ||
    n[16] !== d ||
    n[17] !== f ||
    n[18] !== p
      ? ((m = (0, Q.jsx)(sr, {
          actions: d,
          artwork: f,
          description: r.description,
          isSelected: i,
          label: r.displayName,
          onSelect: p,
        })),
        (n[13] = r.description),
        (n[14] = r.displayName),
        (n[15] = i),
        (n[16] = d),
        (n[17] = f),
        (n[18] = p),
        (n[19] = m))
      : (m = n[19]),
    m
  );
}
function sr(e) {
  let t = (0, cr.c)(20),
    { actions: n, artwork: r, description: i, isSelected: a, label: o, onSelect: s } = e,
    c = a ? `border-strong ring-1 ring-border-strong` : `border-default`,
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = V(
        `relative flex min-h-56 flex-col items-center justify-center rounded-2xl border bg-surface text-center`,
        c,
      )),
      (t[0] = c),
      (t[1] = l));
  let u;
  t[2] === o
    ? (u = t[3])
    : ((u = (0, Q.jsx)(`div`, { className: `text-sm font-medium text-default`, children: o })),
      (t[2] = o),
      (t[3] = u));
  let d;
  t[4] === i
    ? (d = t[5])
    : ((d = (0, Q.jsx)(`div`, { className: `text-sm text-secondary`, children: i })), (t[4] = i), (t[5] = d));
  let f;
  t[6] !== u || t[7] !== d
    ? ((f = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [u, d] })),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] !== r || t[10] !== a || t[11] !== s || t[12] !== f
    ? ((p = (0, Q.jsxs)(`button`, {
        "aria-pressed": a,
        className: `flex size-full min-h-56 cursor-interaction flex-col items-center justify-center gap-3 rounded-2xl p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring`,
        onClick: s,
        type: `button`,
        children: [r, f],
      })),
      (t[9] = r),
      (t[10] = a),
      (t[11] = s),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] === n
    ? (m = t[15])
    : ((m = n == null ? null : (0, Q.jsx)(`div`, { className: `absolute top-3 right-3`, children: n })),
      (t[14] = n),
      (t[15] = m));
  let h;
  return (
    t[16] !== l || t[17] !== p || t[18] !== m
      ? ((h = (0, Q.jsxs)(`div`, { className: l, children: [p, m] })),
        (t[16] = l),
        (t[17] = p),
        (t[18] = m),
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
var cr, Q;
function lr() {
  return (lr = e(() => {
    ((cr = Ce()),
      E(),
      S(),
      P(),
      w(),
      ge(),
      J(),
      Sn(),
      Vt(),
      an(),
      Yt(),
      ye(),
      x(),
      O(),
      R(),
      it(),
      we(),
      N(),
      Le(),
      en(),
      q(),
      yt(),
      ot(),
      nr(),
      mt(),
      (Q = Te()));
  }))();
}
function ur() {
  let e = (0, pr.c)(12),
    t = _(l),
    n = Rt(`2635985366`),
    i = Ht(),
    a = r(p.petVisibility),
    o = De(It, `openAvatarOverlay`),
    c,
    u,
    d;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(fr, {})),
      (u = (0, $.jsx)(dr, {})),
      (d = (0, $.jsx)(bt, { slug: `pets` })),
      (e[0] = c),
      (e[1] = u),
      (e[2] = d))
    : ((c = e[0]), (u = e[1]), (d = e[2]));
  let f;
  e[3] !== i || e[4] !== n || e[5] !== t || e[6] !== o || e[7] !== a
    ? ((f =
        n &&
        !i &&
        (0, $.jsx)($.Fragment, {
          children: (0, $.jsx)(pe, {
            children: (0, $.jsx)(xe, {
              label: (0, $.jsx)(g, {
                id: `settings.pets.visibility`,
                defaultMessage: `Visibility`,
                description: `Label for how the floating Mini panel appears on the desktop`,
              }),
              description: (0, $.jsx)(g, {
                id: `settings.pets.visibility.description`,
                defaultMessage: `Choose whether your Mini stays on your desktop or appears on demand`,
                description: `Description for the Mini visibility preference`,
              }),
              control: (0, $.jsx)(s, {
                align: `end`,
                triggerButton: (0, $.jsx)(Ze, {
                  children:
                    a === `on-demand`
                      ? (0, $.jsx)(g, {
                          id: `settings.pets.visibility.onDemand`,
                          defaultMessage: `On demand`,
                          description: `Mini visibility option that hides the panel after an outside click`,
                        })
                      : (0, $.jsx)(g, {
                          id: `settings.pets.visibility.alwaysVisible`,
                          defaultMessage: `Always visible`,
                          description: `Mini visibility option that keeps the panel on the desktop`,
                        }),
                }),
                children: (0, $.jsxs)(A.RadioGroup, {
                  value: a,
                  onValueChange: (e) => {
                    let n = p.petVisibility.schema.parse(e);
                    me(t, p.petVisibility, n).catch(() => {
                      t.get(W).danger(
                        (0, $.jsx)(g, {
                          id: `settings.pets.visibility.saveError`,
                          defaultMessage: `Could not save Mini visibility`,
                          description: `Error toast shown when the Mini visibility preference cannot be saved`,
                        }),
                        { errorAnalytics: { toastId: `settings.pets.visibility.saveError` } },
                      );
                    });
                  },
                  children: [
                    (0, $.jsx)(A.RadioItem, {
                      value: `always-visible`,
                      children: (0, $.jsxs)(`div`, {
                        children: [
                          (0, $.jsx)(g, {
                            id: `settings.pets.visibility.alwaysVisible`,
                            defaultMessage: `Always visible`,
                            description: `Mini visibility option that keeps the panel on the desktop`,
                          }),
                          (0, $.jsx)(`div`, {
                            className: `text-sm text-secondary`,
                            children: (0, $.jsx)(g, {
                              id: `settings.pets.visibility.alwaysVisible.description`,
                              defaultMessage: `Keep your Mini on your desktop`,
                              description: `Description of the always visible Mini option`,
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, $.jsx)(A.RadioItem, {
                      value: `on-demand`,
                      children: (0, $.jsxs)(`div`, {
                        children: [
                          (0, $.jsx)(g, {
                            id: `settings.pets.visibility.onDemand`,
                            defaultMessage: `On demand`,
                            description: `Mini visibility option that hides the panel after an outside click`,
                          }),
                          (0, $.jsx)(`div`, {
                            className: `text-sm text-secondary`,
                            children:
                              o == null
                                ? (0, $.jsx)(g, {
                                    id: `settings.pets.visibility.onDemand.descriptionWithoutShortcut`,
                                    defaultMessage: `Show from the menu. Hide when you click away.`,
                                    description: `Description of on demand Mini visibility when the user has no assigned shortcut`,
                                  })
                                : (0, $.jsx)(g, {
                                    id: `settings.pets.visibility.onDemand.descriptionWithShortcut`,
                                    defaultMessage: `Show with {shortcut}. Hide when you click away.`,
                                    description: `Description of on demand Mini visibility using the user's configured shortcut`,
                                    values: { shortcut: o },
                                  }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        })),
      (e[3] = i),
      (e[4] = n),
      (e[5] = t),
      (e[6] = o),
      (e[7] = a),
      (e[8] = f))
    : (f = e[8]);
  let m;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(Bn, { collectionSection: rr })), (e[9] = m))
    : (m = e[9]);
  let h;
  return (
    e[10] === f
      ? (h = e[11])
      : ((h = (0, $.jsxs)(Et, { action: c, subtitle: u, title: d, children: [f, m] })),
        (e[10] = f),
        (e[11] = h)),
    h
  );
}
function dr() {
  let e = (0, pr.c)(33),
    t = j(),
    n = De(It, `openAvatarOverlay`),
    r = M(Bt),
    i = ue(),
    a = Re(),
    o;
  e[0] !== a || e[1] !== i
    ? ((o = {
        onSuccess: (e) => {
          let t = K(`codex-command-keymap-state`);
          (i.setQueryData(t, e), a(t));
        },
      }),
      (e[0] = a),
      (e[1] = i),
      (e[2] = o))
    : (o = e[2]);
  let s = se(`set-codex-command-keybinding`, o),
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    _,
    v;
  if (e[3] !== t || e[4] !== r || e[5] !== s) {
    v = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((l = Ie(`openAvatarOverlay`)), r == null || l == null || !Be(l))) {
        let t;
        (e[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, $.jsx)(g, {
              id: `settings.mini.descriptionWithoutShortcut`,
              defaultMessage: `Pets give you quick access to ChatGPT`,
              description: `Description below the Mini & Pets settings page title when no keyboard shortcut is assigned`,
            })),
            (e[16] = t))
          : (t = e[16]),
          (v = t));
        break bb0;
      }
      ((c = hn),
        (u = l),
        (d = `chatgpt`),
        (f = ``),
        (p = !0),
        (m = s.isPending),
        (h = r),
        (_ = pn(l, t, void 0, !0)));
    }
    ((e[3] = t),
      (e[4] = r),
      (e[5] = s),
      (e[6] = c),
      (e[7] = l),
      (e[8] = u),
      (e[9] = d),
      (e[10] = f),
      (e[11] = p),
      (e[12] = m),
      (e[13] = h),
      (e[14] = _),
      (e[15] = v));
  } else
    ((c = e[6]),
      (l = e[7]),
      (u = e[8]),
      (d = e[9]),
      (f = e[10]),
      (p = e[11]),
      (m = e[12]),
      (h = e[13]),
      (_ = e[14]),
      (v = e[15]));
  if (v !== Symbol.for(`react.early_return_sentinel`)) return v;
  let y;
  e[17] !== l.id || e[18] !== s
    ? ((y = async (e) => {
        await s.mutateAsync({ commandId: l.id, update: e });
      }),
      (e[17] = l.id),
      (e[18] = s),
      (e[19] = y))
    : (y = e[19]);
  let b;
  e[20] !== c ||
  e[21] !== u ||
  e[22] !== d ||
  e[23] !== f ||
  e[24] !== p ||
  e[25] !== m ||
  e[26] !== h ||
  e[27] !== _.title ||
  e[28] !== y
    ? ((b = (0, $.jsx)(c, {
        command: u,
        presentation: d,
        description: f,
        inline: p,
        isPending: m,
        keymapState: h,
        title: _.title,
        onUpdate: y,
      })),
      (e[20] = c),
      (e[21] = u),
      (e[22] = d),
      (e[23] = f),
      (e[24] = p),
      (e[25] = m),
      (e[26] = h),
      (e[27] = _.title),
      (e[28] = y),
      (e[29] = b))
    : (b = e[29]);
  let x = b,
    S;
  return (
    e[30] !== n || e[31] !== x
      ? ((S =
          n == null
            ? (0, $.jsx)(g, {
                id: `settings.mini.descriptionWithUnassignedShortcutEditor`,
                defaultMessage: `Set a shortcut to show and focus your pet: <shortcut></shortcut>`,
                description: `Description below the Mini & Pets settings page title when no shortcut is assigned. The shortcut tag renders a control for assigning a keyboard shortcut.`,
                values: { shortcut: () => x },
              })
            : (0, $.jsx)(g, {
                id: `settings.mini.descriptionWithShortcutEditor`,
                defaultMessage: `Show and focus your pet by pressing <shortcut></shortcut>`,
                description: `Description below the Mini & Pets settings page title. The shortcut tag renders an editable keyboard shortcut for showing and focusing the floating Mini panel.`,
                values: { shortcut: () => x },
              })),
        (e[30] = n),
        (e[31] = x),
        (e[32] = S))
      : (S = e[32]),
    S
  );
}
function fr() {
  let e = (0, pr.c)(8),
    n = _(l),
    r = M(Ot),
    a;
  e[0] !== r || e[1] !== n
    ? ((a = () => {
        (n
          .get(xt)
          .logProductEvent(
            i,
            gt({
              action: r
                ? te.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
                : te.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
              selectedAvatar: { id: m(n.get, p.selectedAvatarId) ?? Ge[0].id },
              source: b.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
            }),
          ),
          ee.dispatchMessage(`avatar-overlay-open`, {}));
      }),
      (e[0] = r),
      (e[1] = n),
      (e[2] = a))
    : (a = e[2]);
  let o;
  e[3] === r
    ? (o = e[4])
    : ((o = r
        ? (0, $.jsx)(g, {
            id: `settings.mini.hide`,
            defaultMessage: `Hide mini`,
            description: `Button that hides Mini, the floating compact panel`,
          })
        : (0, $.jsx)(g, {
            id: `settings.mini.show`,
            defaultMessage: `Show mini`,
            description: `Button that shows Mini, the floating compact panel`,
          })),
      (e[3] = r),
      (e[4] = o));
  let s;
  return (
    e[5] !== a || e[6] !== o
      ? ((s = (0, $.jsx)(t, { color: `secondary`, onClick: a, size: `toolbar`, children: o })),
        (e[5] = a),
        (e[6] = o),
        (e[7] = s))
      : (s = e[7]),
    s
  );
}
var pr, $;
function mr() {
  return (mr = e(() => {
    ((pr = Ce()),
      E(),
      be(),
      Kt(),
      w(),
      ge(),
      J(),
      Vt(),
      Tt(),
      ot(),
      qn(),
      lr(),
      Ct(),
      fn(),
      ye(),
      a(),
      oe(),
      U(),
      it(),
      Ae(),
      we(),
      N(),
      ut(),
      q(),
      Wt(),
      v(),
      yt(),
      _e(),
      mn(),
      ($ = Te()));
  }))();
}
function hr() {
  return Rt(`1532120159`) ? (0, gr.jsx)(ur, {}) : (0, gr.jsx)(Jn, {});
}
var gr;
function _r() {
  return (_r = e(() => {
    (yt(), Zn(), mr(), (gr = Te()));
  }))();
}
_r();
export { hr as PetsSettingsRoute };
//# sourceMappingURL=pets-settings-route-76e2572780b5.js.map
