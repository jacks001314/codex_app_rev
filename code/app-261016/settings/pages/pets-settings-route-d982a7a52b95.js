import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  AH as i,
  D4 as a,
  DB as o,
  E8 as s,
  F4 as c,
  FBt as l,
  FTt as u,
  HO as d,
  I4 as f,
  IO as p,
  ITt as m,
  JO as h,
  Jz as g,
  LNt as _,
  Lst as v,
  MFt as y,
  MNt as b,
  NNt as x,
  O4 as S,
  OB as C,
  PBt as w,
  QM as T,
  Qst as E,
  RFt as D,
  RO as O,
  Rrt as k,
  Rst as A,
  T8 as j,
  TY as M,
  Vrt as N,
  WO as P,
  XOt as F,
  Y3 as I,
  Yst as L,
  Z3 as R,
  ZSt as z,
  ck as B,
  dY as V,
  ew as H,
  fN as U,
  hit as ee,
  iCt as te,
  iit as W,
  jFt as G,
  k8 as ne,
  lit as re,
  mN as ie,
  nB as ae,
  nCt as oe,
  nJ as se,
  nN as ce,
  oit as le,
  okt as ue,
  qO as de,
  qrt as fe,
  qz as pe,
  rB as me,
  rk as he,
  sct as K,
  sw as ge,
  tk as _e,
  tkt as q,
  uw as ve,
  vst as ye,
  wB as be,
  w_t as xe,
  xB as Se,
  yst as Ce,
  zFt as we,
  zO as Te,
  zlt as J,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $9 as Ee,
  $P as De,
  CBr as Oe,
  CMr as ke,
  CTn as Ae,
  Cet as je,
  Cjr as Me,
  Cqt as Ne,
  Dqt as Pe,
  Eet as Fe,
  Ef as Ie,
  Efr as Le,
  Enn as Re,
  FBr as ze,
  FF as Be,
  G9 as Ve,
  GN as He,
  GTn as Ue,
  IBr as We,
  Ia as Ge,
  JN as Ke,
  Jfr as qe,
  K4 as Je,
  K9 as Ye,
  KBr as Xe,
  LF as Ze,
  LTn as Qe,
  La as $e,
  NNn as et,
  Ojr as tt,
  PNn as nt,
  Q9 as rt,
  QAr as it,
  QF as at,
  QP as ot,
  RF as st,
  RMr as ct,
  Rfr as lt,
  SSt as ut,
  Set as dt,
  Sf as ft,
  Tfr as pt,
  Tnn as mt,
  WMn as ht,
  XAr as gt,
  XN as _t,
  Y9 as vt,
  YMn as yt,
  _et as bt,
  _fr as xt,
  bMn as St,
  bnn as Ct,
  cA as wt,
  ch as Tt,
  eI as Et,
  fTn as Dt,
  get as Ot,
  hTn as kt,
  lBr as At,
  met as jt,
  mnn as Mt,
  oA as Nt,
  oet as Pt,
  ojr as Ft,
  q4 as It,
  qN as Lt,
  sA as Y,
  sh as Rt,
  tEn as zt,
  uBr as Bt,
  v5t as Vt,
  vTn as Ht,
  vet as Ut,
  vfr as Wt,
  wSt as Gt,
  xBr as Kt,
  xTn as qt,
  xet as Jt,
  xjr as Yt,
  y5t as Xt,
  yMn as Zt,
  yMr as Qt,
  zMr as $t,
} from "./app-initial-ad16eaadf81f.js";
import { n as en, t as tn } from "./use-avatar-options-38297e1d0f5d.js";
import { n as nn, t as rn } from "./settings-loading-row-1fcc5b514745.js";
import { D as an, O as on, k as sn, n as cn, t as ln } from "./controls-5f9dd12a86e3.js";
import { f as un, r as dn, t as fn, u as pn } from "./avatar-mascot-button-e7fcb276ea86.js";
import { r as mn, t as hn } from "./command-messages-4a21e8f833a2.js";
import { n as gn, t as _n } from "./command-row-96aff854219b.js";
import { n as vn, r as yn, t as bn } from "./recommended-skill-statsig-overrides-f64ac1cdca6d.js";
function xn(e) {
  let t = (0, Sn.c)(13),
    { avatar: n, className: r, size: i, source: a } = e,
    o = i === void 0 ? `md` : i,
    s = o === `sm` ? `size-8` : `size-16`,
    c;
  t[0] !== r || t[1] !== s
    ? ((c = b(`flex shrink-0 items-center justify-center overflow-hidden rounded-lg`, s, r)),
      (t[0] = r),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l = n?.id ?? `default`,
    u = o === `sm` ? `scale-[0.42]` : `scale-75`,
    d;
  t[3] !== n || t[4] !== a
    ? ((d = a ?? (n == null ? { assetRef: `codex` } : Ot(n))), (t[3] = n), (t[4] = a), (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] !== u || t[7] !== d
    ? ((f = (0, Cn.jsx)(Fe, { assetMap: Jt, className: u, source: d })), (t[6] = u), (t[7] = d), (t[8] = f))
    : (f = t[8]);
  let p;
  return (
    t[9] !== c || t[10] !== l || t[11] !== f
      ? ((p = (0, Cn.jsx)(`div`, { className: c, "data-avatar-id": l, children: f })),
        (t[9] = c),
        (t[10] = l),
        (t[11] = f),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
var Sn, Cn;
function wn() {
  return (wn = e(() => {
    ((Sn = w()), je(), x(), dt(), bt(), (Cn = _()));
  }))();
}
function Tn(e) {
  let t = (0, En.c)(17),
    { avatarDirectory: r } = e,
    i = n(E),
    a = ue(),
    o;
  t[0] !== a || t[1] !== i
    ? ((o = () => {
        i.get(fe).danger(
          a.formatMessage({
            id: `settings.pets.custom.openFolderError`,
            defaultMessage: `Unable to open pet folder`,
            description: `Toast shown when opening the custom pet folder fails`,
          }),
          { errorAnalytics: { toastId: `settings.pets.custom.openFolderError` } },
        );
      }),
      (t[0] = a),
      (t[1] = i),
      (t[2] = o))
    : (o = t[2]);
  let s = o,
    l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Dn.jsx)(q, {
        id: `settings.pets.custom.title`,
        defaultMessage: `Custom pets`,
        description: `Heading for custom pet settings`,
      })),
      (t[3] = l))
    : (l = t[3]);
  let u;
  t[4] === r
    ? (u = t[5])
    : ((u = (0, Dn.jsx)(`span`, { className: `font-mono text-xs [text-wrap:wrap] break-all`, children: r })),
      (t[4] = r),
      (t[5] = u));
  let d;
  t[6] !== r || t[7] !== i || t[8] !== s
    ? ((d = () => {
        i.get(Xt).mutate(
          { path: r, cwd: null, target: `fileManager`, openMode: `workspace` },
          {
            onSuccess: (e) => {
              e.success || s();
            },
            onError: s,
          },
        );
      }),
      (t[6] = r),
      (t[7] = i),
      (t[8] = s),
      (t[9] = d))
    : (d = t[9]);
  let f, p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Dn.jsx)(q, {
        id: `settings.pets.custom.openFolder`,
        defaultMessage: `Open folder`,
        description: `Button label to open the local custom pet folder`,
      })),
      (p = (0, Dn.jsx)(Se, { "aria-hidden": !1, legacyIcon: Rt, asset16: c, legacyClassName: `icon-2xs` })),
      (t[10] = f),
      (t[11] = p))
    : ((f = t[10]), (p = t[11]));
  let m;
  t[12] === d
    ? (m = t[13])
    : ((m = (0, Dn.jsxs)(I, { color: `ghost`, onClick: d, size: `toolbar`, children: [f, p] })),
      (t[12] = d),
      (t[13] = m));
  let h;
  return (
    t[14] !== u || t[15] !== m
      ? ((h = (0, Dn.jsx)(ge, { label: l, description: u, control: m })),
        (t[14] = u),
        (t[15] = m),
        (t[16] = h))
      : (h = t[16]),
    h
  );
}
var En, Dn;
function On() {
  return (On = e(() => {
    ((En = w()), f(), z(), F(), R(), be(), N(), Vt(), Tt(), r(), ve(), (Dn = _()));
  }))();
}
function kn(e) {
  let t = (0, Pn.c)(9),
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
    u = r === void 0 ? jt : r,
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
          children: (0, X.jsx)(An, {
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
function An(e) {
  let r = (0, Pn.c)(95),
    {
      avatarDirectory: i,
      avatarOptions: c,
      isCreatingCustomAvatar: l,
      isCustomAvatarLoadError: u,
      isLoadingCustomAvatars: d,
      onCreateCustomAvatar: f,
      onRefreshCustomAvatars: p,
      onUpgradeCustomAvatar: m,
    } = e,
    h = n(E),
    g = ue(),
    _ = te(ot),
    v = Me(`188145323`),
    b = te(ke),
    x = ee(J.petSize),
    { selectedAvatar: S, setSelectedAvatarId: C } = Lt(c),
    w = ((x - 80) / 144) * 100,
    T,
    D,
    O,
    k,
    A,
    M,
    N;
  if (
    r[0] !== c ||
    r[1] !== _ ||
    r[2] !== g ||
    r[3] !== l ||
    r[4] !== v ||
    r[5] !== u ||
    r[6] !== d ||
    r[7] !== f ||
    r[8] !== p ||
    r[9] !== m ||
    r[10] !== b ||
    r[11] !== S ||
    r[12] !== C
  ) {
    let e = c.filter(Mn),
      n = c.filter(jn),
      i;
    r[20] === g
      ? (i = r[21])
      : ((i = g.formatMessage({
          id: `settings.pets.custom.create.label`,
          defaultMessage: `Create your own pet`,
          description: `Accessible label for creating a custom Codex pet from settings`,
        })),
        (r[20] = g),
        (r[21] = i));
    let h = i,
      x;
    r[22] === g
      ? (x = r[23])
      : ((x = g.formatMessage({
          id: `settings.pets.refresh`,
          defaultMessage: `Refresh`,
          description: `Button label to refresh custom pets from local manifests`,
        })),
        (r[22] = g),
        (r[23] = x));
    let w = x,
      E;
    r[24] === b
      ? (E = r[25])
      : ((E = (e, t) => {
          b.logProductEvent(
            s,
            Ke({ action: e, selectedAvatar: t, source: ne.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS }),
          );
        }),
        (r[24] = b),
        (r[25] = E));
    let P = E,
      F;
    r[26] !== C || r[27] !== P
      ? ((F = (e) => {
          (C(e.id), P(j.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e));
        }),
        (r[26] = C),
        (r[27] = P),
        (r[28] = F))
      : (F = r[28]);
    let L = F;
    O = Y;
    let R;
    r[29] !== p || r[30] !== w
      ? ((R = p
          ? (0, X.jsx)(ae, {
              tooltipContent: w,
              children: (0, X.jsx)(I, {
                "aria-label": w,
                color: `ghost`,
                onClick: p,
                size: `icon`,
                children: (0, X.jsx)(o, { "aria-hidden": !1, asset: a }),
              }),
            })
          : null),
        (r[29] = p),
        (r[30] = w),
        (r[31] = R))
      : (R = r[31]);
    let z;
    r[32] !== h || r[33] !== l || r[34] !== f || r[35] !== S || r[36] !== P
      ? ((z = f
          ? (0, X.jsx)(I, {
              "aria-label": h,
              color: `secondary`,
              loading: l,
              onClick: () => {
                (P(j.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED, S), f());
              },
              size: `toolbar`,
              children: (0, X.jsx)(q, {
                id: `settings.pets.custom.create.title`,
                defaultMessage: `Create`,
                description: `Button label for creating a custom Codex pet from settings`,
              }),
            })
          : null),
        (r[32] = h),
        (r[33] = l),
        (r[34] = f),
        (r[35] = S),
        (r[36] = P),
        (r[37] = z))
      : (z = r[37]);
    let B;
    r[38] !== _ || r[39] !== S || r[40] !== P
      ? ((B = () => {
          (P(
            _ ? j.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED : j.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
            S,
          ),
            y.dispatchMessage(`avatar-overlay-open`, {}));
        }),
        (r[38] = _),
        (r[39] = S),
        (r[40] = P),
        (r[41] = B))
      : (B = r[41]);
    let V;
    r[42] === _
      ? (V = r[43])
      : ((V = _
          ? (0, X.jsx)(q, {
              id: `settings.personalization.mini.tuckAway`,
              defaultMessage: `Tuck Away Mini`,
              description: `Button that closes Mini, the floating compact panel`,
            })
          : (0, X.jsx)(q, {
              id: `settings.personalization.mini.wake`,
              defaultMessage: `Wake Mini`,
              description: `Button that opens Mini, the floating compact Codex panel`,
            })),
        (r[42] = _),
        (r[43] = V));
    let H;
    r[44] !== B || r[45] !== V
      ? ((H = (0, X.jsx)(I, { color: `secondary`, onClick: B, size: `toolbar`, children: V })),
        (r[44] = B),
        (r[45] = V),
        (r[46] = H))
      : (H = r[46]);
    let U;
    r[47] !== z || r[48] !== H || r[49] !== R
      ? ((U = (0, X.jsxs)(X.Fragment, { children: [R, z, H] })),
        (r[47] = z),
        (r[48] = H),
        (r[49] = R),
        (r[50] = U))
      : (U = r[50]);
    let ee, te;
    (r[51] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ee = (0, X.jsx)(q, {
          id: `settings.pets.pickPet.title`,
          defaultMessage: `Pick a pet`,
          description: `Title inviting the user to select the optional character shown with Mini`,
        })),
        (te = (0, X.jsx)(q, {
          id: `settings.pets.pickPet.miniDescription`,
          defaultMessage: `Mini manages chats and surfaces what needs attention`,
          description: `Description explaining in settings what Mini, the floating compact Codex panel, does`,
        })),
        (r[51] = ee),
        (r[52] = te))
      : ((ee = r[51]), (te = r[52])),
      r[53] === U
        ? (N = r[54])
        : ((N = (0, X.jsx)(Y.Header, { actions: U, title: ee, subtitle: te })), (r[53] = U), (r[54] = N)),
      (D = Y.Content),
      (T = t),
      r[55] !== u || r[56] !== d
        ? ((k = d
            ? (0, X.jsx)(rn, {
                children: (0, X.jsx)(q, {
                  id: `settings.pets.loadingCustom`,
                  defaultMessage: `Loading custom pets…`,
                  description: `Message shown while loading custom pet manifests`,
                }),
              })
            : u
              ? (0, X.jsx)(ge, {
                  label: (0, X.jsx)(q, {
                    id: `settings.pets.loadCustomError`,
                    defaultMessage: `Unable to load custom pets`,
                    description: `Message shown when custom pet manifests fail to load`,
                  }),
                  control: null,
                })
              : null),
          (r[55] = u),
          (r[56] = d),
          (r[57] = k))
        : (k = r[57]));
    let W;
    (r[58] !== v || r[59] !== m || r[60] !== L || r[61] !== S
      ? ((W = (e) =>
          (0, X.jsx)(
            Nn,
            { avatar: e, isSelected: e.id === S.id, onSelectAvatar: L, onUpgradeAvatar: v ? m : void 0 },
            e.id,
          )),
        (r[58] = v),
        (r[59] = m),
        (r[60] = L),
        (r[61] = S),
        (r[62] = W))
      : (W = r[62]),
      (A = n.map(W)));
    let G;
    (r[63] !== L || r[64] !== S
      ? ((G = (e) => (0, X.jsx)(Nn, { avatar: e, isSelected: e.id === S.id, onSelectAvatar: L }, e.id)),
        (r[63] = L),
        (r[64] = S),
        (r[65] = G))
      : (G = r[65]),
      (M = e.map(G)),
      (r[0] = c),
      (r[1] = _),
      (r[2] = g),
      (r[3] = l),
      (r[4] = v),
      (r[5] = u),
      (r[6] = d),
      (r[7] = f),
      (r[8] = p),
      (r[9] = m),
      (r[10] = b),
      (r[11] = S),
      (r[12] = C),
      (r[13] = T),
      (r[14] = D),
      (r[15] = O),
      (r[16] = k),
      (r[17] = A),
      (r[18] = M),
      (r[19] = N));
  } else ((T = r[13]), (D = r[14]), (O = r[15]), (k = r[16]), (A = r[17]), (M = r[18]), (N = r[19]));
  let P;
  r[66] === i
    ? (P = r[67])
    : ((P = i == null ? null : (0, X.jsx)(Tn, { avatarDirectory: i })), (r[66] = i), (r[67] = P));
  let F;
  r[68] !== T || r[69] !== k || r[70] !== A || r[71] !== M || r[72] !== P
    ? ((F = (0, X.jsxs)(T, { children: [k, A, M, P] })),
      (r[68] = T),
      (r[69] = k),
      (r[70] = A),
      (r[71] = M),
      (r[72] = P),
      (r[73] = F))
    : (F = r[73]);
  let L;
  r[74] !== D || r[75] !== F
    ? ((L = (0, X.jsx)(D, { children: F })), (r[74] = D), (r[75] = F), (r[76] = L))
    : (L = r[76]);
  let R;
  r[77] !== O || r[78] !== N || r[79] !== L
    ? ((R = (0, X.jsxs)(O, { children: [N, L] })), (r[77] = O), (r[78] = N), (r[79] = L), (r[80] = R))
    : (R = r[80]);
  let z;
  r[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, X.jsx)(Y.Header, {
        title: (0, X.jsx)(q, {
          id: `settings.pets.appearance.title`,
          defaultMessage: `Appearance`,
          description: `Heading above pet appearance settings`,
        }),
      })),
      (r[81] = z))
    : (z = r[81]);
  let B, V;
  r[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, X.jsx)(`label`, {
        htmlFor: `pet-size`,
        children: (0, X.jsx)(q, {
          id: `settings.pets.size`,
          defaultMessage: `Pet size`,
          description: `Label for the floating pet size setting`,
        }),
      })),
      (V = (0, X.jsx)(q, {
        id: `settings.pets.size.description`,
        defaultMessage: `Adjust the size of your pet`,
        description: `Description for the floating pet size setting`,
      })),
      (r[82] = B),
      (r[83] = V))
    : ((B = r[82]), (V = r[83]));
  let H;
  r[84] === h
    ? (H = r[85])
    : ((H = (e) => {
        re(h, J.petSize, Number(e.currentTarget.value));
      }),
      (r[84] = h),
      (r[85] = H));
  let U = `linear-gradient(to right, var(--color-text-info) ${w}%, var(--color-border-subtle) ${w}%)`,
    W;
  r[86] === U ? (W = r[87]) : ((W = { background: U }), (r[86] = U), (r[87] = W));
  let G;
  r[88] !== x || r[89] !== H || r[90] !== W
    ? ((G = (0, X.jsxs)(Y, {
        children: [
          z,
          (0, X.jsx)(Y.Content, {
            children: (0, X.jsx)(t, {
              children: (0, X.jsx)(ge, {
                label: B,
                description: V,
                control: (0, X.jsx)(`input`, {
                  id: `pet-size`,
                  className: `h-0.5 w-40 cursor-interaction appearance-none rounded-full [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:cursor-interaction [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-strong [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:cursor-interaction [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-strong [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger`,
                  max: 224,
                  min: 80,
                  onInput: H,
                  style: W,
                  type: `range`,
                  value: x,
                }),
              }),
            }),
          }),
        ],
      })),
      (r[88] = x),
      (r[89] = H),
      (r[90] = W),
      (r[91] = G))
    : (G = r[91]);
  let ie;
  return (
    r[92] !== G || r[93] !== R
      ? ((ie = (0, X.jsxs)(X.Fragment, { children: [R, G] })), (r[92] = G), (r[93] = R), (r[94] = ie))
      : (ie = r[94]),
    ie
  );
}
function jn(e) {
  return Ut(e.id);
}
function Mn(e) {
  return !Ut(e.id);
}
function Nn(e) {
  let t = (0, Pn.c)(22),
    { avatar: n, isSelected: r, onSelectAvatar: i, onUpgradeAvatar: a } = e,
    o = ue(),
    s = n.upgradeDirectoryPath,
    c;
  t[0] !== n.displayName || t[1] !== o
    ? ((c = o.formatMessage(
        {
          id: `settings.pets.custom.update.accessibleLabel`,
          defaultMessage: `Update {petName}`,
          description: `Accessible label for updating an outdated custom pet`,
        },
        { petName: n.displayName },
      )),
      (t[0] = n.displayName),
      (t[1] = o),
      (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] === n ? (u = t[4]) : ((u = (0, X.jsx)(xn, { avatar: n })), (t[3] = n), (t[4] = u));
  let d;
  t[5] !== n.displayName || t[6] !== a || t[7] !== l || t[8] !== s
    ? ((d =
        s != null && a != null
          ? (0, X.jsx)(ae, {
              tooltipContent: l,
              children: (0, X.jsx)(I, {
                "aria-label": l,
                color: `accent`,
                onClick: () => {
                  a(n.displayName, s);
                },
                size: `toolbar`,
                children: (0, X.jsx)(q, {
                  id: `settings.pets.custom.update`,
                  defaultMessage: `Update`,
                  description: `Button label for updating an outdated custom pet`,
                }),
              }),
            })
          : null),
      (t[5] = n.displayName),
      (t[6] = a),
      (t[7] = l),
      (t[8] = s),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] !== n || t[11] !== r || t[12] !== i
    ? ((f = r
        ? (0, X.jsx)(I, {
            color: `secondary`,
            disabled: !0,
            size: `toolbar`,
            children: (0, X.jsx)(q, {
              id: `settings.personalization.avatars.selected`,
              defaultMessage: `Selected`,
              description: `Label for the selected avatar`,
            }),
          })
        : (0, X.jsx)(I, {
            color: `secondary`,
            size: `toolbar`,
            onClick: () => {
              i(n);
            },
            children: (0, X.jsx)(q, {
              id: `settings.personalization.avatars.select`,
              defaultMessage: `Select`,
              description: `Button label to select an avatar`,
            }),
          })),
      (t[10] = n),
      (t[11] = r),
      (t[12] = i),
      (t[13] = f))
    : (f = t[13]);
  let p;
  t[14] !== d || t[15] !== f
    ? ((p = (0, X.jsxs)(X.Fragment, { children: [d, f] })), (t[14] = d), (t[15] = f), (t[16] = p))
    : (p = t[16]);
  let m;
  return (
    t[17] !== n.description || t[18] !== n.displayName || t[19] !== u || t[20] !== p
      ? ((m = (0, X.jsx)(ge, { icon: u, label: n.displayName, description: n.description, control: p })),
        (t[17] = n.description),
        (t[18] = n.displayName),
        (t[19] = u),
        (t[20] = p),
        (t[21] = m))
      : (m = t[21]),
    m
  );
}
var Pn, X;
function Fn() {
  return (Fn = e(() => {
    ((Pn = w()),
      k(),
      S(),
      z(),
      K(),
      F(),
      wn(),
      _t(),
      sn(),
      De(),
      R(),
      C(),
      me(),
      G(),
      Qt(),
      r(),
      le(),
      wt(),
      nn(),
      ve(),
      H(),
      Yt(),
      bt(),
      He(),
      On(),
      (X = _()));
  }))();
}
async function In(e) {
  return `pluginId` in e
    ? ut({
        defaultPrompt: `Use your create-pet skill to create and select a pet based on what you know about me`,
        pluginDisplayName: e.pluginDisplayName,
        pluginId: e.pluginId,
      })
    : `${await Rn(e)} create a pet based on what you know about me`;
}
async function Ln({
  scope: e,
  forceReloadSkills: t,
  petDirectoryPath: n,
  petName: r,
  skillStatsigOverride: i,
}) {
  return `${await Rn({ scope: e, forceReloadSkills: t, skillStatsigOverride: i })} upgrade the existing pet at ${ie(r.replaceAll(/[\r\n]+/g, ` `), n)} to the latest pet version with looking directions`;
}
async function Rn({ scope: e, forceReloadSkills: t, skillStatsigOverride: n }) {
  let r = await $e({
    forceReinstall: !0,
    hostId: L,
    installRoot: null,
    repoPath: Bn,
    skillId: zn,
    skillStatsigOverride: n,
    source: `bundled`,
  });
  if (!r.success || r.destination == null) throw Error(r.error ?? `Unable to install Hatch Pet`);
  let i = Nt(r.destination, `SKILL.md`),
    { effectiveEnabled: a } = await ze(e, L).sendRequest(`skills/config/write`, { enabled: !0, path: i });
  if (!a) throw Error(`Hatch Pet is disabled`);
  return (await t(), T({ name: zn, path: i }));
}
var zn, Bn;
function Vn() {
  return (Vn = e(() => {
    (We(), U(), Gt(), Xe(), Ge(), ce(), (zn = `hatch-pet`), (Bn = `skills/.curated/hatch-pet`));
  }))();
}
function Hn(e) {
  let t = (0, Gn.c)(6),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { collectionSection: r, onCreateStart: i, onCreateCloudPet: a } = n,
    o = r === void 0 ? kn : r,
    s;
  return (
    t[2] !== o || t[3] !== a || t[4] !== i
      ? ((s = (0, qn.jsx)(qn.Fragment, {
          children: (0, qn.jsx)(Un, { CollectionSection: o, onCreateStart: i, onCreateCloudPet: a }),
        })),
        (t[2] = o),
        (t[3] = a),
        (t[4] = i),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function Un(e) {
  let t = (0, Gn.c)(44),
    { CollectionSection: r, onCreateStart: i, onCreateCloudPet: a } = e,
    o = n(E),
    [s, c] = (0, Kn.useState)(!1),
    { avatarDirectory: l, avatarOptions: u, isError: d, isLoading: f } = en(),
    p = oe(Bt, `1655510532`),
    m = a == null ? L : xe,
    { installPlugin: h } = Ct(),
    g;
  t[0] === m ? (g = t[1]) : ((g = { hostId: m }), (t[0] = m), (t[1] = g));
  let { setPluginEnabled: _ } = yt(g),
    v = Oe(),
    y = Pe(),
    { forceReload: b } = nt(void 0, L),
    x = yn(),
    S;
  t[2] === x ? (S = t[3]) : ((S = bn(x, `hatch-pet`)), (t[2] = x), (t[3] = S));
  let C = S,
    w;
  t[4] === b
    ? (w = t[5])
    : ((w = async () => {
        await b();
      }),
      (t[4] = b),
      (t[5] = w));
  let T = w,
    D;
  t[6] === o
    ? (D = t[7])
    : ((D = () => {
        o.get(fe).danger(
          (0, qn.jsx)(q, {
            id: `settings.pets.createCustom.error`,
            defaultMessage: `Unable to start pet creation`,
            description: `Toast shown when the pet creation skill or plugin cannot be prepared`,
          }),
          { errorAnalytics: { toastId: `settings.pets.createCustom.error` } },
        );
      }),
      (t[6] = o),
      (t[7] = D));
  let O = D,
    k;
  t[8] !== T ||
  t[9] !== C ||
  t[10] !== h ||
  t[11] !== p ||
  t[12] !== a ||
  t[13] !== m ||
  t[14] !== o ||
  t[15] !== _ ||
  t[16] !== O ||
  t[17] !== y
    ? ((k = async () => {
        (c(!0),
          await (async () => {
            try {
              let e = a == null ? null : o.get($t);
              if (a != null && e == null) {
                O();
                return;
              }
              let t = p
                  ? (
                      await o.queryClient.fetchQuery({
                        ...o.query.getOptions(Le, { accountId: e, hostId: m, roots: [] }),
                        staleTime: 0,
                        retry: !1,
                      })
                    ).find(Wn)
                  : void 0,
                n = p
                  ? (t ??
                    lt(
                      await o.queryClient.fetchQuery({
                        ...o.query.getOptions(Wt, {
                          hostId: m,
                          marketplacePath: null,
                          pluginName: Jn,
                          remoteMarketplaceName: `openai-curated-remote`,
                        }),
                        staleTime: 0,
                        retry: !1,
                      }),
                    ))
                  : void 0;
              if (n != null && It(n.plugin)) {
                O();
                return;
              }
              let r = await In(
                n == null
                  ? { scope: o, forceReloadSkills: T, skillStatsigOverride: C }
                  : { pluginDisplayName: mt(n), pluginId: n.plugin.id },
              );
              if (a != null && o.get($t) !== e) return;
              if ((a ?? (await it(o, Ft)), n != null && !n.plugin.installed)) {
                h(n, {
                  hostId: m,
                  hostedAccountId: e ?? void 0,
                  marketplaceAnalytics: St.settings,
                  postInstallComposerPrefill: a == null ? r : void 0,
                  postInstallNewConversation: a == null ? { activeProject: null } : void 0,
                  onSuccess: a == null ? void 0 : () => a(r),
                }) || O();
                return;
              }
              if (
                (n != null &&
                  !n.plugin.enabled &&
                  (await _({
                    enabled: !0,
                    plugin: n.plugin,
                    pluginDisplayName: mt(n),
                    pluginId: n.plugin.id,
                  })),
                a != null)
              ) {
                if (o.get($t) !== e) return;
                a(r);
              } else
                y({
                  activeProject: null,
                  prefillComposerMode: n == null ? `local` : void 0,
                  prefillPrompt: r,
                });
            } catch (e) {
              let t = e;
              (we.warning(`[pets] Unable to start pet creation`, {
                safe: { cloudPetCreationEnabled: p },
                sensitive: { error: t },
              }),
                O());
            }
          })().finally(() => {
            c(!1);
          }));
      }),
      (t[8] = T),
      (t[9] = C),
      (t[10] = h),
      (t[11] = p),
      (t[12] = a),
      (t[13] = m),
      (t[14] = o),
      (t[15] = _),
      (t[16] = O),
      (t[17] = y),
      (t[18] = k))
    : (k = t[18]);
  let A = k,
    j;
  t[19] !== T || t[20] !== C || t[21] !== o || t[22] !== y
    ? ((j = async (e, t) => {
        try {
          y({
            prefillPrompt: await Ln({
              scope: o,
              forceReloadSkills: T,
              petDirectoryPath: t,
              petName: e,
              skillStatsigOverride: C,
            }),
          });
        } catch {
          o.get(fe).danger(
            (0, qn.jsx)(q, {
              id: `settings.pets.upgradeCustom.error`,
              defaultMessage: `Unable to start pet upgrade`,
              description: `Toast shown when the Hatch Pet skill cannot be installed for a pet upgrade`,
            }),
            { errorAnalytics: { toastId: `settings.pets.upgradeCustom.error` } },
          );
        }
      }),
      (t[19] = T),
      (t[20] = C),
      (t[21] = o),
      (t[22] = y),
      (t[23] = j))
    : (j = t[23]);
  let M = j,
    N = p ? null : l,
    P;
  t[24] !== A || t[25] !== p || t[26] !== a || t[27] !== i
    ? ((P =
        a != null && !p
          ? void 0
          : () => {
              (i?.(), A());
            }),
      (t[24] = A),
      (t[25] = p),
      (t[26] = a),
      (t[27] = i),
      (t[28] = P))
    : (P = t[28]);
  let F;
  t[29] === v
    ? (F = t[30])
    : ((F = () => {
        (v(vt), v(Ee), v(Ve));
      }),
      (t[29] = v),
      (t[30] = F));
  let I;
  t[31] !== p || t[32] !== M
    ? ((I = p
        ? void 0
        : (e, t) => {
            M(e, t);
          }),
      (t[31] = p),
      (t[32] = M),
      (t[33] = I))
    : (I = t[33]);
  let R;
  return (
    t[34] !== r ||
    t[35] !== u ||
    t[36] !== s ||
    t[37] !== d ||
    t[38] !== f ||
    t[39] !== I ||
    t[40] !== N ||
    t[41] !== P ||
    t[42] !== F
      ? ((R = (0, qn.jsx)(r, {
          avatarDirectory: N,
          avatarOptions: u,
          isCreatingCustomAvatar: s,
          isCustomAvatarLoadError: d,
          isLoadingCustomAvatars: f,
          onCreateCustomAvatar: P,
          onRefreshCustomAvatars: F,
          onUpgradeCustomAvatar: I,
        })),
        (t[34] = r),
        (t[35] = u),
        (t[36] = s),
        (t[37] = d),
        (t[38] = f),
        (t[39] = I),
        (t[40] = N),
        (t[41] = P),
        (t[42] = F),
        (t[43] = R))
      : (R = t[43]),
    R
  );
}
function Wn(e) {
  let { marketplaceName: t, plugin: n } = e;
  return n.installed && n.name === `work-pets` && (t === `openai-curated` || t === `openai-curated-remote`);
}
var Gn, Kn, qn, Jn;
function Yn() {
  return (Yn = e(() => {
    ((Gn = w()),
      z(),
      K(),
      Re(),
      (Kn = l()),
      F(),
      ct(),
      N(),
      Ne(),
      Je(),
      Zt(),
      Mt(),
      ht(),
      xt(),
      pt(),
      qe(),
      Kt(),
      r(),
      gt(),
      Xe(),
      vn(),
      et(),
      At(),
      D(),
      Fn(),
      Ye(),
      Pt(),
      Vn(),
      rt(),
      tn(),
      (qn = _()),
      (Jn = `plugin_connector_1p_bccf6c8660c08191ae4470d9ae4877fa`));
  }))();
}
function Xn() {
  let e = (0, Zn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Qn.jsx)(at, { title: (0, Qn.jsx)(Ze, { slug: `pets` }), children: (0, Qn.jsx)(Hn, {}) })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Zn, Qn;
function $n() {
  return ($n = e(() => {
    ((Zn = w()), Yn(), Et(), st(), (Qn = _()));
  }))();
}
function er(e) {
  let n = (0, tr.c)(45),
    { petSize: r, petSizeSetting: i, selectedAvatar: a } = e,
    o = te(g),
    [s, c] = (0, nr.useState)(!1),
    l = r / an,
    u = l + 40,
    d = (s ? 224 / an : l) + 40,
    f = (rr - r) / 2,
    h;
  n[0] !== l || n[1] !== r || n[2] !== f
    ? ((h = { height: l, left: f, top: 0, width: r }), (n[0] = l), (n[1] = r), (n[2] = f), (n[3] = h))
    : (h = n[3]);
  let _ = h,
    v,
    y;
  n[4] === u
    ? ((v = n[5]), (y = n[6]))
    : ((v = { height: u, left: 0, top: 0, width: rr }),
      (y = { height: u, width: rr }),
      (n[4] = u),
      (n[5] = v),
      (n[6] = y));
  let b;
  n[7] !== _ || n[8] !== v || n[9] !== y
    ? ((b = { mascot: _, placement: `bottom-end`, tray: null, visibleBounds: v, viewport: y }),
      (n[7] = _),
      (n[8] = v),
      (n[9] = y),
      (n[10] = b))
    : (b = n[10]);
  let x = b,
    S;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Z.jsx)(I, {
        className: `absolute right-4 bottom-4`,
        color: `outline`,
        size: `medium`,
        children: (0, Z.jsx)(q, {
          id: `settings.pets.preview.customize`,
          defaultMessage: `Customize`,
          description: `Button that opens floating Codex pet customization options`,
        }),
      })),
      (n[11] = S))
    : (S = n[11]);
  let C = S,
    w;
  n[12] === d ? (w = n[13]) : ((w = { height: d }), (n[12] = d), (n[13] = w));
  let T;
  n[14] === o ? (T = n[15]) : ((T = o ? { duration: 0 } : pn), (n[14] = o), (n[15] = T));
  let E;
  n[16] === u ? (E = n[17]) : ((E = { height: u }), (n[16] = u), (n[17] = E));
  let D;
  n[18] === a ? (D = n[19]) : ((D = Ot(a)), (n[18] = a), (n[19] = D));
  let k;
  n[20] === r ? (k = n[21]) : ((k = on(r)), (n[20] = r), (n[21] = k));
  let A;
  n[22] !== D || n[23] !== k
    ? ((A = (0, Z.jsx)(fn, { className: `pointer-events-none`, source: D, state: `idle`, style: k })),
      (n[22] = D),
      (n[23] = k),
      (n[24] = A))
    : (A = n[24]);
  let j;
  n[25] !== _ || n[26] !== A
    ? ((j = (0, Z.jsx)(`div`, { className: `absolute`, style: _, children: A })),
      (n[25] = _),
      (n[26] = A),
      (n[27] = j))
    : (j = n[27]);
  let M;
  n[28] !== x || n[29] !== j
    ? ((M = (0, Z.jsx)(ln, {
        areActivityPillsVisible: !0,
        canStartVoice: !0,
        draft: ``,
        hasNotifications: !0,
        isExpanded: !1,
        isVoiceSelected: !1,
        layout: x,
        petAccessory: j,
      })),
      (n[28] = x),
      (n[29] = j),
      (n[30] = M))
    : (M = n[30]);
  let N;
  n[31] !== M || n[32] !== E
    ? ((N = (0, Z.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `pointer-events-none relative w-96 max-w-full select-none`,
        inert: !0,
        style: E,
        children: M,
      })),
      (n[31] = M),
      (n[32] = E),
      (n[33] = N))
    : (N = n[33]);
  let F;
  n[34] !== N || n[35] !== w || n[36] !== T
    ? ((F = (0, Z.jsx)(m.div, {
        animate: w,
        className: `flex items-center justify-center`,
        initial: !1,
        transition: T,
        children: N,
      })),
      (n[34] = N),
      (n[35] = w),
      (n[36] = T),
      (n[37] = F))
    : (F = n[37]);
  let L;
  n[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = { "aria-describedby": void 0 }), (n[38] = L))
    : (L = n[38]);
  let R;
  n[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Z.jsx)(Te, {
        children: (0, Z.jsx)(O, {
          className: `pe-8`,
          title: (0, Z.jsx)(de, {
            children: (0, Z.jsx)(q, {
              id: `settings.pets.preview.customize.title`,
              defaultMessage: `Customize pet`,
              description: `Title of the dialog for customizing the selected floating Codex pet`,
            }),
          }),
        }),
      })),
      (n[39] = R))
    : (R = n[39]);
  let z;
  n[40] === i
    ? (z = n[41])
    : ((z = (0, Z.jsx)(P, {
        contentProps: L,
        onOpenChange: c,
        size: `compact`,
        triggerContent: C,
        children: (0, Z.jsxs)(p, {
          className: `select-none`,
          children: [R, (0, Z.jsx)(Te, { children: i })],
        }),
      })),
      (n[40] = i),
      (n[41] = z));
  let B;
  return (
    n[42] !== F || n[43] !== z
      ? ((B = (0, Z.jsx)(Y, {
          className: `select-none`,
          children: (0, Z.jsx)(Y.Content, {
            children: (0, Z.jsx)(t, {
              children: (0, Z.jsxs)(`div`, { className: `relative p-6`, children: [F, z] }),
            }),
          }),
        })),
        (n[42] = F),
        (n[43] = z),
        (n[44] = B))
      : (B = n[44]),
    B
  );
}
var tr, nr, Z, rr;
function ir() {
  return (ir = e(() => {
    ((tr = w()),
      u(),
      z(),
      (nr = l()),
      F(),
      un(),
      dn(),
      sn(),
      cn(),
      R(),
      h(),
      d(),
      pe(),
      wt(),
      H(),
      bt(),
      (Z = _()),
      (rr = 384));
  }))();
}
function ar(e) {
  let t = (0, ur.c)(8),
    {
      avatarOptions: n,
      isCreatingCustomAvatar: r,
      isCustomAvatarLoadError: i,
      isLoadingCustomAvatars: a,
      onCreateCustomAvatar: o,
      onRefreshCustomAvatars: s,
      onUpgradeCustomAvatar: c,
    } = e,
    l = n === void 0 ? jt : n,
    u = r !== void 0 && r,
    d = i !== void 0 && i,
    f = a !== void 0 && a,
    p;
  return (
    t[0] !== l || t[1] !== u || t[2] !== d || t[3] !== f || t[4] !== o || t[5] !== s || t[6] !== c
      ? ((p = (0, Q.jsx)(Q.Fragment, {
          children: (0, Q.jsx)(or, {
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
function or(e) {
  let t = (0, ur.c)(83),
    {
      avatarOptions: r,
      isCreatingCustomAvatar: i,
      isCustomAvatarLoadError: c,
      isLoadingCustomAvatars: l,
      onCreateCustomAvatar: u,
      onRefreshCustomAvatars: d,
      onUpgradeCustomAvatar: f,
    } = e,
    p = n(E),
    m = ue(),
    h = Me(`188145323`),
    g = te(ke),
    _ = ee(J.petSize),
    v = ee(J.petVisible),
    { selectedAvatar: y, setSelectedAvatarId: b } = Lt(r),
    x = v,
    S = ((_ - 80) / 144) * 100,
    C;
  t[0] === m
    ? (C = t[1])
    : ((C = m.formatMessage({
        id: `settings.mini.pets.create.accessibleLabel`,
        defaultMessage: `Create pet`,
        description: `Accessible label for creating a custom pet from Mini & Pets settings`,
      })),
      (t[0] = m),
      (t[1] = C));
  let w = C,
    T;
  t[2] === m
    ? (T = t[3])
    : ((T = m.formatMessage({
        id: `settings.pets.refresh`,
        defaultMessage: `Refresh`,
        description: `Button label to refresh custom pets from local manifests`,
      })),
      (t[2] = m),
      (t[3] = T));
  let D = T,
    O;
  t[4] === g
    ? (O = t[5])
    : ((O = (e, t) => {
        g.logProductEvent(
          s,
          Ke({ action: e, selectedAvatar: t, source: ne.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS }),
        );
      }),
      (t[4] = g),
      (t[5] = O));
  let k = O,
    A;
  t[6] !== x || t[7] !== p || t[8] !== y || t[9] !== b || t[10] !== k
    ? ((A = (e) => {
        (x && e.id === y.id) ||
          (b(e.id), x || re(p, J.petVisible, !0), k(j.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e));
      }),
      (t[6] = x),
      (t[7] = p),
      (t[8] = y),
      (t[9] = b),
      (t[10] = k),
      (t[11] = A))
    : (A = t[11]);
  let M = A,
    N;
  t[12] !== x || t[13] !== p
    ? ((N = () => {
        x && re(p, J.petVisible, !1);
      }),
      (t[12] = x),
      (t[13] = p),
      (t[14] = N))
    : (N = t[14]);
  let P = N,
    F,
    L;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Q.jsx)(`label`, {
        htmlFor: `pet-size`,
        children: (0, Q.jsx)(q, {
          id: `settings.pets.size`,
          defaultMessage: `Pet size`,
          description: `Label for the floating pet size setting`,
        }),
      })),
      (L = (0, Q.jsx)(q, {
        id: `settings.pets.size.description`,
        defaultMessage: `Adjust the size of your pet`,
        description: `Description for the floating pet size setting`,
      })),
      (t[15] = F),
      (t[16] = L))
    : ((F = t[15]), (L = t[16]));
  let R;
  t[17] === p
    ? (R = t[18])
    : ((R = (e) => {
        re(p, J.petSize, Number(e.currentTarget.value));
      }),
      (t[17] = p),
      (t[18] = R));
  let z = `linear-gradient(to right, var(--color-text-info) ${S}%, var(--color-border-subtle) ${S}%)`,
    B;
  t[19] === z ? (B = t[20]) : ((B = { background: z }), (t[19] = z), (t[20] = B));
  let V;
  t[21] !== _ || t[22] !== B || t[23] !== R
    ? ((V = (0, Q.jsx)(`input`, {
        id: `pet-size`,
        className: `h-0.5 w-40 cursor-interaction appearance-none rounded-full [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:cursor-interaction [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-strong [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:cursor-interaction [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-strong [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger`,
        max: 224,
        min: 80,
        onInput: R,
        style: B,
        type: `range`,
        value: _,
      })),
      (t[21] = _),
      (t[22] = B),
      (t[23] = R),
      (t[24] = V))
    : (V = t[24]);
  let H = _ === J.petSize.default,
    U;
  t[25] === p
    ? (U = t[26])
    : ((U = () => {
        re(p, J.petSize, J.petSize.default);
      }),
      (t[25] = p),
      (t[26] = U));
  let W;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, Q.jsx)(q, {
        id: `settings.pets.size.reset`,
        defaultMessage: `Reset`,
        description: `Button that restores the floating pet to its default size`,
      })),
      (t[27] = W))
    : (W = t[27]);
  let G;
  t[28] !== H || t[29] !== U
    ? ((G = (0, Q.jsx)(I, {
        type: `button`,
        color: `ghost`,
        size: `toolbar`,
        disabled: H,
        onClick: U,
        children: W,
      })),
      (t[28] = H),
      (t[29] = U),
      (t[30] = G))
    : (G = t[30]);
  let ie;
  t[31] !== V || t[32] !== G
    ? ((ie = (0, Q.jsx)(ge, {
        label: F,
        description: L,
        control: (0, Q.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [V, G] }),
      })),
      (t[31] = V),
      (t[32] = G),
      (t[33] = ie))
    : (ie = t[33]);
  let oe = ie,
    se;
  t[34] !== x || t[35] !== _ || t[36] !== oe || t[37] !== y
    ? ((se = x ? (0, Q.jsx)(er, { petSize: _, petSizeSetting: oe, selectedAvatar: y }) : null),
      (t[34] = x),
      (t[35] = _),
      (t[36] = oe),
      (t[37] = y),
      (t[38] = se))
    : (se = t[38]);
  let ce;
  t[39] !== d || t[40] !== D
    ? ((ce = d
        ? (0, Q.jsx)(ae, {
            tooltipContent: D,
            children: (0, Q.jsx)(I, {
              "aria-label": D,
              color: `ghost`,
              onClick: d,
              size: `icon`,
              children: (0, Q.jsx)(o, { "aria-hidden": !1, asset: a }),
            }),
          })
        : null),
      (t[39] = d),
      (t[40] = D),
      (t[41] = ce))
    : (ce = t[41]);
  let le;
  t[42] !== w || t[43] !== i || t[44] !== u || t[45] !== y || t[46] !== k
    ? ((le = u
        ? (0, Q.jsx)(I, {
            "aria-label": w,
            color: `secondary`,
            loading: i,
            onClick: () => {
              (k(j.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED, y), u());
            },
            size: `toolbar`,
            children: (0, Q.jsx)(q, {
              id: `settings.mini.pets.create.title`,
              defaultMessage: `Create pet`,
              description: `Button label for creating a custom Codex pet from Mini & Pets settings`,
            }),
          })
        : null),
      (t[42] = w),
      (t[43] = i),
      (t[44] = u),
      (t[45] = y),
      (t[46] = k),
      (t[47] = le))
    : (le = t[47]);
  let de;
  t[48] !== ce || t[49] !== le
    ? ((de = (0, Q.jsxs)(Q.Fragment, { children: [ce, le] })), (t[48] = ce), (t[49] = le), (t[50] = de))
    : (de = t[50]);
  let fe;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, Q.jsx)(q, {
        id: `settings.mini.pets.title`,
        defaultMessage: `My pets`,
        description: `Title above the pet selection grid in Mini & Pets settings`,
      })),
      (t[51] = fe))
    : (fe = t[51]);
  let pe;
  t[52] === de
    ? (pe = t[53])
    : ((pe = (0, Q.jsx)(Y.Header, { actions: de, title: fe })), (t[52] = de), (t[53] = pe));
  let me = !x,
    he;
  t[54] !== P || t[55] !== me
    ? ((he = (0, Q.jsx)(sr, { isSelected: me, onSelect: P })), (t[54] = P), (t[55] = me), (t[56] = he))
    : (he = t[56]);
  let K;
  t[57] !== c || t[58] !== l
    ? ((K = l
        ? (0, Q.jsx)(`div`, {
            className: `col-span-full`,
            children: (0, Q.jsx)(rn, {
              children: (0, Q.jsx)(q, {
                id: `settings.pets.loadingCustom`,
                defaultMessage: `Loading custom pets…`,
                description: `Message shown while loading custom pet manifests`,
              }),
            }),
          })
        : c
          ? (0, Q.jsx)(ge, {
              className: `col-span-full`,
              label: (0, Q.jsx)(q, {
                id: `settings.pets.loadCustomError`,
                defaultMessage: `Unable to load custom pets`,
                description: `Message shown when custom pet manifests fail to load`,
              }),
              control: null,
            })
          : null),
      (t[57] = c),
      (t[58] = l),
      (t[59] = K))
    : (K = t[59]);
  let _e;
  if (t[60] !== r || t[61] !== h || t[62] !== x || t[63] !== f || t[64] !== M || t[65] !== y) {
    let e;
    (t[67] !== h || t[68] !== x || t[69] !== f || t[70] !== M || t[71] !== y
      ? ((e = (e) =>
          (0, Q.jsx)(
            cr,
            { avatar: e, isSelected: x && e.id === y.id, onSelectAvatar: M, onUpgradeAvatar: h ? f : void 0 },
            e.id,
          )),
        (t[67] = h),
        (t[68] = x),
        (t[69] = f),
        (t[70] = M),
        (t[71] = y),
        (t[72] = e))
      : (e = t[72]),
      (_e = r.map(e)),
      (t[60] = r),
      (t[61] = h),
      (t[62] = x),
      (t[63] = f),
      (t[64] = M),
      (t[65] = y),
      (t[66] = _e));
  } else _e = t[66];
  let ve;
  t[73] !== he || t[74] !== K || t[75] !== _e
    ? ((ve = (0, Q.jsx)(Y.Content, {
        children: (0, Q.jsxs)(`div`, {
          className: `grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3`,
          children: [he, K, _e],
        }),
      })),
      (t[73] = he),
      (t[74] = K),
      (t[75] = _e),
      (t[76] = ve))
    : (ve = t[76]);
  let ye;
  t[77] !== pe || t[78] !== ve
    ? ((ye = (0, Q.jsx)(`fieldset`, {
        className: `m-0 min-w-0 border-0 p-0`,
        children: (0, Q.jsxs)(Y, { children: [pe, ve] }),
      })),
      (t[77] = pe),
      (t[78] = ve),
      (t[79] = ye))
    : (ye = t[79]);
  let be;
  return (
    t[80] !== se || t[81] !== ye
      ? ((be = (0, Q.jsxs)(Q.Fragment, { children: [se, ye] })), (t[80] = se), (t[81] = ye), (t[82] = be))
      : (be = t[82]),
    be
  );
}
function sr(e) {
  let t = (0, ur.c)(10),
    { isSelected: n, onSelect: r } = e,
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(`span`, {
        className: `flex flex-1 items-center justify-center`,
        children: (0, Q.jsx)(se, {}),
      })),
      (o = (0, Q.jsx)(`span`, { className: `h-5 w-px bg-border` })),
      (t[0] = a),
      (t[1] = o))
    : ((a = t[0]), (o = t[1]));
  let s, c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(`span`, {
        className: `flex flex-1 items-center justify-center`,
        children: (0, Q.jsx)(V, {}),
      })),
      (c = (0, Q.jsx)(`span`, { className: `h-5 w-px bg-border` })),
      (t[2] = s),
      (t[3] = c))
    : ((s = t[2]), (c = t[3]));
  let l, u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `pointer-events-none flex h-24 w-30 items-center`,
        children: (0, Q.jsxs)(ft, {
          className: `flex items-center`,
          nativeSurfaceId: `mini-tile-preview`,
          variant: `quick-chat-voice`,
          children: [
            a,
            o,
            s,
            c,
            (0, Q.jsx)(`span`, {
              className: `flex flex-1 items-center justify-center`,
              children: (0, Q.jsx)(i, {}),
            }),
          ],
        }),
      })),
      (u = (0, Q.jsx)(q, {
        id: `settings.mini.pets.barOnly.description`,
        defaultMessage: `The lightweight Codex companion`,
        description: `Subtitle for the bar-only Mini option in the pet selection grid`,
      })),
      (t[4] = l),
      (t[5] = u))
    : ((l = t[4]), (u = t[5]));
  let d;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(q, {
        id: `settings.mini.pets.none.title`,
        defaultMessage: `None`,
        description: `Label for selecting the bar-only Mini mode without a pet`,
      })),
      (t[6] = d))
    : (d = t[6]);
  let f;
  return (
    t[7] !== n || t[8] !== r
      ? ((f = (0, Q.jsx)(lr, { artwork: l, description: u, isSelected: n, label: d, onSelect: r })),
        (t[7] = n),
        (t[8] = r),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
function cr(e) {
  let t = (0, ur.c)(20),
    { avatar: n, isSelected: r, onSelectAvatar: i, onUpgradeAvatar: a } = e,
    o = n.upgradeDirectoryPath,
    s = ue(),
    c;
  t[0] !== n.displayName || t[1] !== s
    ? ((c = s.formatMessage(
        {
          id: `settings.pets.custom.update.accessibleLabel`,
          defaultMessage: `Update {petName}`,
          description: `Accessible label for updating an outdated custom pet`,
        },
        { petName: n.displayName },
      )),
      (t[0] = n.displayName),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] !== n.displayName || t[4] !== a || t[5] !== l || t[6] !== o
    ? ((u =
        o != null && a != null
          ? (0, Q.jsx)(ae, {
              tooltipContent: l,
              children: (0, Q.jsx)(I, {
                "aria-label": l,
                color: `accent`,
                onClick: () => {
                  a(n.displayName, o);
                },
                size: `toolbar`,
                children: (0, Q.jsx)(q, {
                  id: `settings.pets.custom.update`,
                  defaultMessage: `Update`,
                  description: `Button label for updating an outdated custom pet`,
                }),
              }),
            })
          : null),
      (t[3] = n.displayName),
      (t[4] = a),
      (t[5] = l),
      (t[6] = o),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] === n
    ? (d = t[9])
    : ((d = (0, Q.jsx)(xn, { className: `size-24 rounded-none`, avatar: n })), (t[8] = n), (t[9] = d));
  let f;
  t[10] !== n || t[11] !== i
    ? ((f = () => {
        i(n);
      }),
      (t[10] = n),
      (t[11] = i),
      (t[12] = f))
    : (f = t[12]);
  let p;
  return (
    t[13] !== n.description ||
    t[14] !== n.displayName ||
    t[15] !== r ||
    t[16] !== u ||
    t[17] !== d ||
    t[18] !== f
      ? ((p = (0, Q.jsx)(lr, {
          actions: u,
          artwork: d,
          description: n.description,
          isSelected: r,
          label: n.displayName,
          onSelect: f,
        })),
        (t[13] = n.description),
        (t[14] = n.displayName),
        (t[15] = r),
        (t[16] = u),
        (t[17] = d),
        (t[18] = f),
        (t[19] = p))
      : (p = t[19]),
    p
  );
}
function lr(e) {
  let t = (0, ur.c)(20),
    { actions: n, artwork: r, description: i, isSelected: a, label: o, onSelect: s } = e,
    c = a ? `border-strong ring-1 ring-border-strong` : `border-default`,
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = b(
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
var ur, Q;
function dr() {
  return (dr = e(() => {
    ((ur = w()),
      k(),
      S(),
      x(),
      z(),
      K(),
      F(),
      wn(),
      _t(),
      sn(),
      Ie(),
      R(),
      C(),
      M(),
      me(),
      Qt(),
      r(),
      le(),
      wt(),
      nn(),
      ve(),
      Yt(),
      bt(),
      ir(),
      He(),
      (Q = _()));
  }))();
}
function fr() {
  let e = (0, hr.c)(12),
    r = n(E),
    i = Me(`2635985366`),
    a = tt(),
    o = ee(J.petVisibility),
    s = oe(Ht, `openAvatarOverlay`),
    c,
    l,
    u;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(mr, {})),
      (l = (0, $.jsx)(pr, {})),
      (u = (0, $.jsx)(Ze, { slug: `pets` })),
      (e[0] = c),
      (e[1] = l),
      (e[2] = u))
    : ((c = e[0]), (l = e[1]), (u = e[2]));
  let d;
  e[3] !== a || e[4] !== i || e[5] !== r || e[6] !== s || e[7] !== o
    ? ((d =
        i &&
        !a &&
        (0, $.jsx)($.Fragment, {
          children: (0, $.jsx)(t, {
            children: (0, $.jsx)(ge, {
              label: (0, $.jsx)(q, {
                id: `settings.pets.visibility`,
                defaultMessage: `Visibility`,
                description: `Label for how the floating Mini panel appears on the desktop`,
              }),
              description: (0, $.jsx)(q, {
                id: `settings.pets.visibility.description`,
                defaultMessage: `Choose whether your Mini stays on your desktop or appears on demand`,
                description: `Description for the Mini visibility preference`,
              }),
              control: (0, $.jsx)(_e, {
                align: `end`,
                triggerButton: (0, $.jsx)(Be, {
                  children:
                    o === `on-demand`
                      ? (0, $.jsx)(q, {
                          id: `settings.pets.visibility.onDemand`,
                          defaultMessage: `On demand`,
                          description: `Mini visibility option that hides the panel after an outside click`,
                        })
                      : (0, $.jsx)(q, {
                          id: `settings.pets.visibility.alwaysVisible`,
                          defaultMessage: `Always visible`,
                          description: `Mini visibility option that keeps the panel on the desktop`,
                        }),
                }),
                children: (0, $.jsxs)(he.RadioGroup, {
                  value: o,
                  onValueChange: (e) => {
                    let t = J.petVisibility.schema.parse(e);
                    re(r, J.petVisibility, t).catch(() => {
                      r.get(fe).danger(
                        (0, $.jsx)(q, {
                          id: `settings.pets.visibility.saveError`,
                          defaultMessage: `Could not save Mini visibility`,
                          description: `Error toast shown when the Mini visibility preference cannot be saved`,
                        }),
                        { errorAnalytics: { toastId: `settings.pets.visibility.saveError` } },
                      );
                    });
                  },
                  children: [
                    (0, $.jsx)(he.RadioItem, {
                      value: `always-visible`,
                      children: (0, $.jsxs)(`div`, {
                        children: [
                          (0, $.jsx)(q, {
                            id: `settings.pets.visibility.alwaysVisible`,
                            defaultMessage: `Always visible`,
                            description: `Mini visibility option that keeps the panel on the desktop`,
                          }),
                          (0, $.jsx)(`div`, {
                            className: `text-sm text-secondary`,
                            children: (0, $.jsx)(q, {
                              id: `settings.pets.visibility.alwaysVisible.description`,
                              defaultMessage: `Keep your Mini on your desktop`,
                              description: `Description of the always visible Mini option`,
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, $.jsx)(he.RadioItem, {
                      value: `on-demand`,
                      children: (0, $.jsxs)(`div`, {
                        children: [
                          (0, $.jsx)(q, {
                            id: `settings.pets.visibility.onDemand`,
                            defaultMessage: `On demand`,
                            description: `Mini visibility option that hides the panel after an outside click`,
                          }),
                          (0, $.jsx)(`div`, {
                            className: `text-sm text-secondary`,
                            children:
                              s == null
                                ? (0, $.jsx)(q, {
                                    id: `settings.pets.visibility.onDemand.descriptionWithoutShortcut`,
                                    defaultMessage: `Show from the menu. Hide when you click away.`,
                                    description: `Description of on demand Mini visibility when the user has no assigned shortcut`,
                                  })
                                : (0, $.jsx)(q, {
                                    id: `settings.pets.visibility.onDemand.descriptionWithShortcut`,
                                    defaultMessage: `Show with {shortcut}. Hide when you click away.`,
                                    description: `Description of on demand Mini visibility using the user's configured shortcut`,
                                    values: { shortcut: s },
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
      (e[3] = a),
      (e[4] = i),
      (e[5] = r),
      (e[6] = s),
      (e[7] = o),
      (e[8] = d))
    : (d = e[8]);
  let f;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(Hn, { collectionSection: ar })), (e[9] = f))
    : (f = e[9]);
  let p;
  return (
    e[10] === d
      ? (p = e[11])
      : ((p = (0, $.jsxs)(at, { action: c, subtitle: l, title: u, children: [d, f] })),
        (e[10] = d),
        (e[11] = p)),
    p
  );
}
function pr() {
  let e = (0, hr.c)(33),
    t = ue(),
    n = oe(Ht, `openAvatarOverlay`),
    r = te(kt),
    i = A(),
    a = Oe(),
    o;
  e[0] !== a || e[1] !== i
    ? ((o = {
        mutationFn: Ae,
        networkMode: `always`,
        onSuccess: (e) => {
          (i.setQueryData(Dt, e), a(Dt));
        },
      }),
      (e[0] = a),
      (e[1] = i),
      (e[2] = o))
    : (o = e[2]);
  let s = Ce(o),
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _;
  if (e[3] !== t || e[4] !== r || e[5] !== s) {
    _ = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((l = Ue(`openAvatarOverlay`)), r == null || l == null || !zt(l))) {
        let t;
        (e[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, $.jsx)(q, {
              id: `settings.mini.descriptionWithoutShortcut`,
              defaultMessage: `Pets give you quick access to ChatGPT`,
              description: `Description below the Mini & Pets settings page title when no keyboard shortcut is assigned`,
            })),
            (e[16] = t))
          : (t = e[16]),
          (_ = t));
        break bb0;
      }
      ((c = _n),
        (u = l),
        (d = `chatgpt`),
        (f = ``),
        (p = !0),
        (m = s.isPending),
        (h = r),
        (g = hn(l, t, void 0, !0)));
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
      (e[14] = g),
      (e[15] = _));
  } else
    ((c = e[6]),
      (l = e[7]),
      (u = e[8]),
      (d = e[9]),
      (f = e[10]),
      (p = e[11]),
      (m = e[12]),
      (h = e[13]),
      (g = e[14]),
      (_ = e[15]));
  if (_ !== Symbol.for(`react.early_return_sentinel`)) return _;
  let v;
  e[17] !== l.id || e[18] !== s
    ? ((v = async (e) => {
        await s.mutateAsync({ commandId: l.id, update: e });
      }),
      (e[17] = l.id),
      (e[18] = s),
      (e[19] = v))
    : (v = e[19]);
  let y;
  e[20] !== c ||
  e[21] !== u ||
  e[22] !== d ||
  e[23] !== f ||
  e[24] !== p ||
  e[25] !== m ||
  e[26] !== h ||
  e[27] !== g.title ||
  e[28] !== v
    ? ((y = (0, $.jsx)(c, {
        command: u,
        presentation: d,
        description: f,
        inline: p,
        isPending: m,
        keymapState: h,
        title: g.title,
        onUpdate: v,
      })),
      (e[20] = c),
      (e[21] = u),
      (e[22] = d),
      (e[23] = f),
      (e[24] = p),
      (e[25] = m),
      (e[26] = h),
      (e[27] = g.title),
      (e[28] = v),
      (e[29] = y))
    : (y = e[29]);
  let b = y,
    x;
  return (
    e[30] !== n || e[31] !== b
      ? ((x =
          n == null
            ? (0, $.jsx)(q, {
                id: `settings.mini.descriptionWithUnassignedShortcutEditor`,
                defaultMessage: `Set a shortcut to show and focus your pet: <shortcut></shortcut>`,
                description: `Description below the Mini & Pets settings page title when no shortcut is assigned. The shortcut tag renders a control for assigning a keyboard shortcut.`,
                values: { shortcut: () => b },
              })
            : (0, $.jsx)(q, {
                id: `settings.mini.descriptionWithShortcutEditor`,
                defaultMessage: `Show and focus your pet by pressing <shortcut></shortcut>`,
                description: `Description below the Mini & Pets settings page title. The shortcut tag renders an editable keyboard shortcut for showing and focusing the floating Mini panel.`,
                values: { shortcut: () => b },
              })),
        (e[30] = n),
        (e[31] = b),
        (e[32] = x))
      : (x = e[32]),
    x
  );
}
function mr() {
  let e = (0, hr.c)(8),
    t = n(E),
    r = te(ot),
    i;
  e[0] !== r || e[1] !== t
    ? ((i = () => {
        (t
          .get(ke)
          .logProductEvent(
            s,
            Ke({
              action: r
                ? j.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
                : j.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
              selectedAvatar: { id: W(t.get, J.selectedAvatarId) ?? jt[0].id },
              source: ne.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
            }),
          ),
          y.dispatchMessage(`avatar-overlay-open`, {}));
      }),
      (e[0] = r),
      (e[1] = t),
      (e[2] = i))
    : (i = e[2]);
  let a;
  e[3] === r
    ? (a = e[4])
    : ((a = r
        ? (0, $.jsx)(q, {
            id: `settings.mini.hide`,
            defaultMessage: `Hide mini`,
            description: `Button that hides Mini, the floating compact panel`,
          })
        : (0, $.jsx)(q, {
            id: `settings.mini.show`,
            defaultMessage: `Show mini`,
            description: `Button that shows Mini, the floating compact panel`,
          })),
      (e[3] = r),
      (e[4] = a));
  let o;
  return (
    e[5] !== i || e[6] !== a
      ? ((o = (0, $.jsx)(I, { color: `secondary`, onClick: i, size: `toolbar`, children: a })),
        (e[5] = i),
        (e[6] = a),
        (e[7] = o))
      : (o = e[7]),
    o
  );
}
var hr, $;
function gr() {
  return (gr = e(() => {
    ((hr = w()),
      k(),
      ye(),
      v(),
      Qe(),
      z(),
      K(),
      F(),
      _t(),
      De(),
      bt(),
      Yn(),
      dr(),
      qt(),
      mn(),
      R(),
      B(),
      N(),
      G(),
      Qt(),
      Kt(),
      r(),
      le(),
      Et(),
      ve(),
      st(),
      H(),
      Yt(),
      gn(),
      ($ = _()));
  }))();
}
function _r() {
  return Me(`1532120159`) ? (0, vr.jsx)(fr, {}) : (0, vr.jsx)(Xn, {});
}
var vr;
function yr() {
  return (yr = e(() => {
    (Yt(), $n(), gr(), (vr = _()));
  }))();
}
yr();
export { _r as PetsSettingsRoute };
//# sourceMappingURL=pets-settings-route-d982a7a52b95.js.map
