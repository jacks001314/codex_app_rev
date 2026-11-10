import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Gt as n,
  $Nt as r,
  A3t as i,
  AMt as a,
  Amn as o,
  B6t as s,
  B9 as c,
  BS as l,
  Bu as u,
  C1 as d,
  C8t as f,
  CPt as p,
  Cpn as m,
  E5 as h,
  EJt as g,
  Eln as _,
  F3t as v,
  Gb as y,
  Hb as b,
  Hu as x,
  I7 as S,
  JS as C,
  Jit as w,
  Jrt as T,
  KKt as E,
  KO as D,
  KYt as O,
  Kb as k,
  Kit as A,
  L7 as j,
  Lo as M,
  Ms as N,
  N3t as P,
  O3t as F,
  OJt as I,
  Opn as L,
  Ps as R,
  QKt as z,
  QXt as B,
  Qu as V,
  Ro as H,
  Rpn as U,
  SPt as W,
  SZt as ee,
  Spn as G,
  UO as te,
  V9 as ne,
  VS as re,
  Vu as ie,
  Wb as K,
  XNt as ae,
  XS as q,
  Xrt as oe,
  Xu as se,
  YGt as ce,
  YKt as le,
  YNt as ue,
  ZGt as de,
  Zrt as fe,
  Zu as J,
  _Jt as pe,
  a3t as me,
  aYt as he,
  ayt as ge,
  bPt as _e,
  bZt as ve,
  bmn as ye,
  bpt as be,
  cjt as xe,
  dyt as Se,
  e0t as Ce,
  e4t as we,
  eit as Te,
  fs as Ee,
  gMt as De,
  gln as Oe,
  hMt as ke,
  hYt as Ae,
  hmn as je,
  iit as Me,
  jXt as Ne,
  k5 as Pe,
  kMt as Y,
  kXt as Fe,
  kmn as Ie,
  lPt as Le,
  lWt as Re,
  mYt as ze,
  nPt as Be,
  nZt as Ve,
  nln as He,
  o3t as Ue,
  pJt as We,
  pNt as Ge,
  ps as Ke,
  qKt as qe,
  qu as Je,
  rPt as Ye,
  rit as Xe,
  sYt as Ze,
  sjt as Qe,
  tit as $e,
  uNt as et,
  uWt as tt,
  w1 as nt,
  wPt as rt,
  xZt as it,
  xmn as at,
  ypt as ot,
  zpn as st,
  zu as ct,
} from "./app-initial-f094ef01c64d.js";
import { fE as lt, mE as ut, pE as dt, sE as ft } from "./app-primary-4c40d73a1074.js";
import {
  A as pt,
  j as mt,
  k as ht,
  n as gt,
  t as _t,
} from "./avatar-overlay-quick-chat-bar-6faa49a506f3.js";
import { f as vt, m as yt, r as bt, t as xt } from "./avatar-mascot-button-13f6c2a71e01.js";
import { n as St, t as Ct } from "./settings-loading-row-de4ab81779d6.js";
import { n as wt, r as Tt, t as Et } from "./recommended-skill-statsig-overrides-f5eb16d6092b.js";
import { n as Dt, t as Ot } from "./use-avatar-options-25c4fda3035d.js";
import { n as kt, t as At } from "./avatar-artwork-a609915b617a.js";
function jt(e) {
  let t = (0, Mt.c)(17),
    { avatarDirectory: n } = e,
    r = i(me),
    a = L(),
    o;
  t[0] !== a || t[1] !== r
    ? ((o = () => {
        r.get(Ne).danger(
          a.formatMessage({
            id: `settings.pets.custom.openFolderError`,
            defaultMessage: `Unable to open pet folder`,
            description: `Toast shown when opening the custom pet folder fails`,
          }),
        );
      }),
      (t[0] = a),
      (t[1] = r),
      (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Nt.jsx)(m, {
        id: `settings.pets.custom.title`,
        defaultMessage: `Custom pets`,
        description: `Heading for custom pet settings`,
      })),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] === n
    ? (l = t[5])
    : ((l = (0, Nt.jsx)(`span`, {
        className: `font-mono text-xs [text-wrap:wrap] break-all`,
        children: n,
      })),
      (t[4] = n),
      (t[5] = l));
  let u;
  t[6] !== n || t[7] !== r || t[8] !== s
    ? ((u = () => {
        r.get(nt).mutate(
          { path: n, cwd: null, target: `fileManager`, openMode: `workspace` },
          {
            onSuccess: (e) => {
              e.success || s();
            },
            onError: s,
          },
        );
      }),
      (t[6] = n),
      (t[7] = r),
      (t[8] = s),
      (t[9] = u))
    : (u = t[9]);
  let d, f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Nt.jsx)(m, {
        id: `settings.pets.custom.openFolder`,
        defaultMessage: `Open folder`,
        description: `Button label to open the local custom pet folder`,
      })),
      (f = (0, Nt.jsx)(Ee, { className: `icon-2xs` })),
      (t[10] = d),
      (t[11] = f))
    : ((d = t[10]), (f = t[11]));
  let p;
  t[12] === u
    ? (p = t[13])
    : ((p = (0, Nt.jsxs)(Y, { color: `ghost`, onClick: u, size: `toolbar`, children: [d, f] })),
      (t[12] = u),
      (t[13] = p));
  let h;
  return (
    t[14] !== l || t[15] !== p
      ? ((h = (0, Nt.jsx)(Je, { label: c, description: l, control: p })),
        (t[14] = l),
        (t[15] = p),
        (t[16] = h))
      : (h = t[16]),
    h
  );
}
var Mt,
  Nt,
  Pt = e(() => {
    ((Mt = Ie()), F(), G(), a(), Fe(), d(), Ke(), Ue(), se(), (Nt = je()));
  });
function Ft(e) {
  let t = (0, Bt.c)(9),
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
    u = r === void 0 ? _e : r,
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
          children: (0, X.jsx)(It, {
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
function It(e) {
  let t = (0, Bt.c)(95),
    {
      avatarDirectory: n,
      avatarOptions: r,
      isCreatingCustomAvatar: a,
      isCustomAvatarLoadError: o,
      isLoadingCustomAvatars: s,
      onCreateCustomAvatar: c,
      onRefreshCustomAvatars: l,
      onUpgradeCustomAvatar: u,
    } = e,
    d = i(me),
    p = L(),
    h = v(Qe),
    g = Ze(`188145323`),
    _ = v(Ve),
    b = z(f.petSize),
    { selectedAvatar: x, setSelectedAvatarId: S } = K(r),
    C = ((b - 80) / 144) * 100,
    w,
    T,
    E,
    D,
    O,
    k,
    j;
  if (
    t[0] !== r ||
    t[1] !== h ||
    t[2] !== p ||
    t[3] !== a ||
    t[4] !== g ||
    t[5] !== o ||
    t[6] !== s ||
    t[7] !== c ||
    t[8] !== l ||
    t[9] !== u ||
    t[10] !== _ ||
    t[11] !== x ||
    t[12] !== S
  ) {
    let e = r.filter(Rt),
      n = r.filter(Lt),
      i;
    t[20] === p
      ? (i = t[21])
      : ((i = p.formatMessage({
          id: `settings.pets.custom.create.label`,
          defaultMessage: `Create your own pet`,
          description: `Accessible label for creating a custom Codex pet from settings`,
        })),
        (t[20] = p),
        (t[21] = i));
    let d = i,
      f;
    t[22] === p
      ? (f = t[23])
      : ((f = p.formatMessage({
          id: `settings.pets.refresh`,
          defaultMessage: `Refresh`,
          description: `Button label to refresh custom pets from local manifests`,
        })),
        (t[22] = p),
        (t[23] = f));
    let v = f,
      b;
    t[24] === _
      ? (b = t[25])
      : ((b = (e, t) => {
          _.logProductEvent(
            it,
            y({ action: e, selectedAvatar: t, source: ee.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS }),
          );
        }),
        (t[24] = _),
        (t[25] = b));
    let C = b,
      M;
    t[26] !== S || t[27] !== C
      ? ((M = (e) => {
          (S(e.id), C(ve.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e));
        }),
        (t[26] = S),
        (t[27] = C),
        (t[28] = M))
      : (M = t[28]);
    let N = M;
    E = J;
    let P;
    t[29] !== l || t[30] !== v
      ? ((P = l
          ? (0, X.jsx)(A, {
              tooltipContent: v,
              children: (0, X.jsx)(Y, {
                "aria-label": v,
                color: `ghost`,
                onClick: l,
                size: `icon`,
                children: (0, X.jsx)(ke, { "aria-hidden": !1, asset: ot }),
              }),
            })
          : null),
        (t[29] = l),
        (t[30] = v),
        (t[31] = P))
      : (P = t[31]);
    let F;
    t[32] !== d || t[33] !== a || t[34] !== c || t[35] !== x || t[36] !== C
      ? ((F = c
          ? (0, X.jsx)(Y, {
              "aria-label": d,
              color: `secondary`,
              loading: a,
              onClick: () => {
                (C(ve.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED, x), c());
              },
              size: `toolbar`,
              children: (0, X.jsx)(m, {
                id: `settings.pets.custom.create.title`,
                defaultMessage: `Create`,
                description: `Button label for creating a custom Codex pet from settings`,
              }),
            })
          : null),
        (t[32] = d),
        (t[33] = a),
        (t[34] = c),
        (t[35] = x),
        (t[36] = C),
        (t[37] = F))
      : (F = t[37]);
    let I;
    t[38] !== h || t[39] !== x || t[40] !== C
      ? ((I = () => {
          (C(
            h
              ? ve.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
              : ve.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
            x,
          ),
            at.dispatchMessage(`avatar-overlay-open`, {}));
        }),
        (t[38] = h),
        (t[39] = x),
        (t[40] = C),
        (t[41] = I))
      : (I = t[41]);
    let L;
    t[42] === h
      ? (L = t[43])
      : ((L = h
          ? (0, X.jsx)(m, {
              id: `settings.personalization.pets.tuckAwayPet`,
              defaultMessage: `Tuck Away Pet`,
              description: `Button that closes the floating pet overlay`,
            })
          : (0, X.jsx)(m, {
              id: `settings.personalization.pets.openPet.v2`,
              defaultMessage: `Wake Pet`,
              description: `Button that opens the floating Codex pet overlay. In French, translate 'pet' as 'compagnon' (not 'mascotte') to match the Pets settings page.`,
            })),
        (t[42] = h),
        (t[43] = L));
    let R;
    t[44] !== I || t[45] !== L
      ? ((R = (0, X.jsx)(Y, { color: `secondary`, onClick: I, size: `toolbar`, children: L })),
        (t[44] = I),
        (t[45] = L),
        (t[46] = R))
      : (R = t[46]);
    let z;
    t[47] !== F || t[48] !== R || t[49] !== P
      ? ((z = (0, X.jsxs)(X.Fragment, { children: [P, F, R] })),
        (t[47] = F),
        (t[48] = R),
        (t[49] = P),
        (t[50] = z))
      : (z = t[50]);
    let B, V;
    (t[51] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((B = (0, X.jsx)(m, {
          id: `settings.pets.pickPet.title`,
          defaultMessage: `Pick a pet`,
          description: `Title for the Pets settings explainer`,
        })),
        (V = (0, X.jsx)(m, {
          id: `settings.pets.pickPet.description`,
          defaultMessage: `Pets manage threads and surface what needs attention`,
          description: `Description explaining what Codex pets do in settings`,
        })),
        (t[51] = B),
        (t[52] = V))
      : ((B = t[51]), (V = t[52])),
      t[53] === z
        ? (j = t[54])
        : ((j = (0, X.jsx)(J.Header, { actions: z, title: B, subtitle: V })),
          (t[53] = z),
          (t[54] = j)),
      (T = J.Content),
      (w = ie),
      t[55] !== o || t[56] !== s
        ? ((D = s
            ? (0, X.jsx)(Ct, {
                children: (0, X.jsx)(m, {
                  id: `settings.pets.loadingCustom`,
                  defaultMessage: `Loading custom pets…`,
                  description: `Message shown while loading custom pet manifests`,
                }),
              })
            : o
              ? (0, X.jsx)(Je, {
                  label: (0, X.jsx)(m, {
                    id: `settings.pets.loadCustomError`,
                    defaultMessage: `Unable to load custom pets`,
                    description: `Message shown when custom pet manifests fail to load`,
                  }),
                  control: null,
                })
              : null),
          (t[55] = o),
          (t[56] = s),
          (t[57] = D))
        : (D = t[57]));
    let H;
    (t[58] !== g || t[59] !== u || t[60] !== N || t[61] !== x
      ? ((H = (e) =>
          (0, X.jsx)(
            zt,
            {
              avatar: e,
              isSelected: e.id === x.id,
              onSelectAvatar: N,
              onUpgradeAvatar: g ? u : void 0,
            },
            e.id,
          )),
        (t[58] = g),
        (t[59] = u),
        (t[60] = N),
        (t[61] = x),
        (t[62] = H))
      : (H = t[62]),
      (O = n.map(H)));
    let U;
    (t[63] !== N || t[64] !== x
      ? ((U = (e) =>
          (0, X.jsx)(zt, { avatar: e, isSelected: e.id === x.id, onSelectAvatar: N }, e.id)),
        (t[63] = N),
        (t[64] = x),
        (t[65] = U))
      : (U = t[65]),
      (k = e.map(U)),
      (t[0] = r),
      (t[1] = h),
      (t[2] = p),
      (t[3] = a),
      (t[4] = g),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = _),
      (t[11] = x),
      (t[12] = S),
      (t[13] = w),
      (t[14] = T),
      (t[15] = E),
      (t[16] = D),
      (t[17] = O),
      (t[18] = k),
      (t[19] = j));
  } else
    ((w = t[13]), (T = t[14]), (E = t[15]), (D = t[16]), (O = t[17]), (k = t[18]), (j = t[19]));
  let M;
  t[66] === n
    ? (M = t[67])
    : ((M = n == null ? null : (0, X.jsx)(jt, { avatarDirectory: n })), (t[66] = n), (t[67] = M));
  let N;
  t[68] !== w || t[69] !== D || t[70] !== O || t[71] !== k || t[72] !== M
    ? ((N = (0, X.jsxs)(w, { children: [D, O, k, M] })),
      (t[68] = w),
      (t[69] = D),
      (t[70] = O),
      (t[71] = k),
      (t[72] = M),
      (t[73] = N))
    : (N = t[73]);
  let P;
  t[74] !== T || t[75] !== N
    ? ((P = (0, X.jsx)(T, { children: N })), (t[74] = T), (t[75] = N), (t[76] = P))
    : (P = t[76]);
  let F;
  t[77] !== E || t[78] !== j || t[79] !== P
    ? ((F = (0, X.jsxs)(E, { children: [j, P] })),
      (t[77] = E),
      (t[78] = j),
      (t[79] = P),
      (t[80] = F))
    : (F = t[80]);
  let I;
  t[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, X.jsx)(J.Header, {
        title: (0, X.jsx)(m, {
          id: `settings.pets.appearance.title`,
          defaultMessage: `Appearance`,
          description: `Heading above pet appearance settings`,
        }),
      })),
      (t[81] = I))
    : (I = t[81]);
  let R, B;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, X.jsx)(`label`, {
        htmlFor: `pet-size`,
        children: (0, X.jsx)(m, {
          id: `settings.pets.size`,
          defaultMessage: `Pet size`,
          description: `Label for the floating pet size setting`,
        }),
      })),
      (B = (0, X.jsx)(m, {
        id: `settings.pets.size.description`,
        defaultMessage: `Adjust the size of your pet`,
        description: `Description for the floating pet size setting`,
      })),
      (t[82] = R),
      (t[83] = B))
    : ((R = t[82]), (B = t[83]));
  let V;
  t[84] === d
    ? (V = t[85])
    : ((V = (e) => {
        le(d, f.petSize, Number(e.currentTarget.value));
      }),
      (t[84] = d),
      (t[85] = V));
  let H = `linear-gradient(to right, var(--color-text-info) ${C}%, var(--color-border-subtle) ${C}%)`,
    U;
  t[86] === H ? (U = t[87]) : ((U = { background: H }), (t[86] = H), (t[87] = U));
  let W;
  t[88] !== b || t[89] !== V || t[90] !== U
    ? ((W = (0, X.jsxs)(J, {
        children: [
          I,
          (0, X.jsx)(J.Content, {
            children: (0, X.jsx)(ie, {
              children: (0, X.jsx)(Je, {
                label: R,
                description: B,
                control: (0, X.jsx)(`input`, {
                  id: `pet-size`,
                  className: `h-0.5 w-40 cursor-interaction appearance-none rounded-full [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:cursor-interaction [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-strong [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:cursor-interaction [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-strong [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger`,
                  max: 224,
                  min: 80,
                  onInput: V,
                  style: U,
                  type: `range`,
                  value: b,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[88] = b),
      (t[89] = V),
      (t[90] = U),
      (t[91] = W))
    : (W = t[91]);
  let G;
  return (
    t[92] !== W || t[93] !== F
      ? ((G = (0, X.jsxs)(X.Fragment, { children: [F, W] })), (t[92] = W), (t[93] = F), (t[94] = G))
      : (G = t[94]),
    G
  );
}
function Lt(e) {
  return rt(e.id);
}
function Rt(e) {
  return !rt(e.id);
}
function zt(e) {
  let t = (0, Bt.c)(22),
    { avatar: n, isSelected: r, onSelectAvatar: i, onUpgradeAvatar: a } = e,
    o = L(),
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
  t[3] === n ? (u = t[4]) : ((u = (0, X.jsx)(At, { avatar: n })), (t[3] = n), (t[4] = u));
  let d;
  t[5] !== n.displayName || t[6] !== a || t[7] !== l || t[8] !== s
    ? ((d =
        s != null && a != null
          ? (0, X.jsx)(A, {
              tooltipContent: l,
              children: (0, X.jsx)(Y, {
                "aria-label": l,
                color: `accent`,
                onClick: () => {
                  a(n.displayName, s);
                },
                size: `toolbar`,
                children: (0, X.jsx)(m, {
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
        ? (0, X.jsx)(Y, {
            color: `secondary`,
            disabled: !0,
            size: `toolbar`,
            children: (0, X.jsx)(m, {
              id: `settings.personalization.avatars.selected`,
              defaultMessage: `Selected`,
              description: `Label for the selected avatar`,
            }),
          })
        : (0, X.jsx)(Y, {
            color: `secondary`,
            size: `toolbar`,
            onClick: () => {
              i(n);
            },
            children: (0, X.jsx)(m, {
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
  let h;
  return (
    t[17] !== n.description || t[18] !== n.displayName || t[19] !== u || t[20] !== p
      ? ((h = (0, X.jsx)(Je, {
          icon: u,
          label: n.displayName,
          description: n.description,
          control: p,
        })),
        (t[17] = n.description),
        (t[18] = n.displayName),
        (t[19] = u),
        (t[20] = p),
        (t[21] = h))
      : (h = t[21]),
    h
  );
}
var Bt,
  X,
  Vt = e(() => {
    ((Bt = Ie()),
      Ce(),
      be(),
      F(),
      s(),
      G(),
      kt(),
      k(),
      mt(),
      xe(),
      a(),
      De(),
      w(),
      ye(),
      B(),
      Ue(),
      qe(),
      V(),
      St(),
      se(),
      x(),
      he(),
      p(),
      b(),
      Pt(),
      (X = je()));
  });
async function Ht(e) {
  return `pluginId` in e
    ? N({
        defaultPrompt: `Use your create-pet skill to create and select a pet based on what you know about me`,
        pluginDisplayName: e.pluginDisplayName,
        pluginId: e.pluginId,
      })
    : `${await Wt(e)} create a pet based on what you know about me`;
}
async function Ut({
  forceReloadSkills: e,
  petDirectoryPath: t,
  petName: n,
  skillStatsigOverride: r,
}) {
  return `${await Wt({ forceReloadSkills: e, skillStatsigOverride: r })} upgrade the existing pet at ${tt(n.replaceAll(/[\r\n]+/g, ` `), t)} to the latest pet version with looking directions`;
}
async function Wt({ forceReloadSkills: e, skillStatsigOverride: t }) {
  let n = await We(`install-recommended-skill`, {
    params: {
      forceReinstall: !0,
      hostId: we,
      installRoot: null,
      repoPath: Kt,
      skillId: Gt,
      skillStatsigOverride: t,
      source: `bundled`,
    },
  });
  if (!n.success || n.destination == null) throw Error(n.error ?? `Unable to install Hatch Pet`);
  return (await e(), et({ name: Gt, path: u(n.destination, `SKILL.md`) }));
}
var Gt,
  Kt,
  qt = e(() => {
    (Re(), ct(), R(), O(), Ge(), pe(), (Gt = `hatch-pet`), (Kt = `skills/.curated/hatch-pet`));
  });
function Jt(e) {
  let t = (0, Zt.c)(4),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { collectionSection: r } = n,
    i = r === void 0 ? Ft : r,
    a;
  return (
    t[2] === i
      ? (a = t[3])
      : ((a = (0, $t.jsx)($t.Fragment, { children: (0, $t.jsx)(Yt, { CollectionSection: i }) })),
        (t[2] = i),
        (t[3] = a)),
    a
  );
}
function Yt(e) {
  let t = (0, Zt.c)(41),
    { CollectionSection: a } = e,
    o = i(me),
    [s, l] = (0, Qt.useState)(!1),
    { avatarDirectory: u, avatarOptions: d, isError: f, isLoading: p } = Dt(),
    h = P(Ae, `1655510532`),
    g;
  t[0] === h ? (g = t[1]) : ((g = { enabled: h }), (t[0] = h), (t[1] = g));
  let { availablePlugins: _ } = Se(we, void 0, g),
    { installPlugin: v } = lt(),
    y;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { hostId: we }), (t[2] = y))
    : (y = t[2]);
  let { setPluginEnabled: b } = Pe(y),
    x = I(),
    S = D(),
    { forceReload: C } = j(void 0, we),
    w = Tt(),
    T;
  t[3] === w ? (T = t[4]) : ((T = Et(w, `hatch-pet`)), (t[3] = w), (t[4] = T));
  let E = T,
    O;
  t[5] === C
    ? (O = t[6])
    : ((O = async () => {
        await C();
      }),
      (t[5] = C),
      (t[6] = O));
  let k = O,
    A;
  t[7] === o
    ? (A = t[8])
    : ((A = () => {
        o.get(Ne).danger(
          (0, $t.jsx)(m, {
            id: `settings.pets.createCustom.error`,
            defaultMessage: `Unable to start pet creation`,
            description: `Toast shown when the pet creation skill or plugin cannot be prepared`,
          }),
        );
      }),
      (t[7] = o),
      (t[8] = A));
  let M = A,
    N;
  t[9] !== _ ||
  t[10] !== k ||
  t[11] !== E ||
  t[12] !== v ||
  t[13] !== h ||
  t[14] !== o ||
  t[15] !== b ||
  t[16] !== M ||
  t[17] !== S
    ? ((N = async () => {
        (l(!0),
          await (async () => {
            try {
              let e = h ? _.find(Xt) : void 0;
              if (h && (e == null || H(e.plugin))) {
                M();
                return;
              }
              let t = await Ht(
                e == null
                  ? { forceReloadSkills: k, skillStatsigOverride: E }
                  : { pluginDisplayName: c(e), pluginId: e.plugin.id },
              );
              if ((await n(o, ce), e != null && !e.plugin.installed)) {
                v(e, {
                  hostId: `local`,
                  marketplaceAnalytics: ut.settings,
                  postInstallComposerPrefill: t,
                  postInstallNewConversation: { activeProject: null },
                }) || M();
                return;
              }
              (e != null &&
                !e.plugin.enabled &&
                (await b({
                  enabled: !0,
                  plugin: e.plugin,
                  pluginDisplayName: c(e),
                  pluginId: e.plugin.id,
                })),
                S({
                  activeProject: null,
                  prefillComposerMode: e == null ? `local` : void 0,
                  prefillPrompt: t,
                }));
            } catch {
              M();
            }
          })().finally(() => {
            l(!1);
          }));
      }),
      (t[9] = _),
      (t[10] = k),
      (t[11] = E),
      (t[12] = v),
      (t[13] = h),
      (t[14] = o),
      (t[15] = b),
      (t[16] = M),
      (t[17] = S),
      (t[18] = N))
    : (N = t[18]);
  let F = N,
    L;
  t[19] !== k || t[20] !== E || t[21] !== o || t[22] !== S
    ? ((L = async (e, t) => {
        try {
          S({
            prefillPrompt: await Ut({
              forceReloadSkills: k,
              petDirectoryPath: t,
              petName: e,
              skillStatsigOverride: E,
            }),
          });
        } catch {
          o.get(Ne).danger(
            (0, $t.jsx)(m, {
              id: `settings.pets.upgradeCustom.error`,
              defaultMessage: `Unable to start pet upgrade`,
              description: `Toast shown when the Hatch Pet skill cannot be installed for a pet upgrade`,
            }),
          );
        }
      }),
      (t[19] = k),
      (t[20] = E),
      (t[21] = o),
      (t[22] = S),
      (t[23] = L))
    : (L = t[23]);
  let R = L,
    z = h ? null : u,
    B;
  t[24] === F
    ? (B = t[25])
    : ((B = () => {
        F();
      }),
      (t[24] = F),
      (t[25] = B));
  let V;
  t[26] === x
    ? (V = t[27])
    : ((V = () => {
        (x(r), x(Ye), x(ue));
      }),
      (t[26] = x),
      (t[27] = V));
  let U;
  t[28] !== h || t[29] !== R
    ? ((U = h
        ? void 0
        : (e, t) => {
            R(e, t);
          }),
      (t[28] = h),
      (t[29] = R),
      (t[30] = U))
    : (U = t[30]);
  let W;
  return (
    t[31] !== a ||
    t[32] !== d ||
    t[33] !== s ||
    t[34] !== f ||
    t[35] !== p ||
    t[36] !== V ||
    t[37] !== U ||
    t[38] !== z ||
    t[39] !== B
      ? ((W = (0, $t.jsx)(a, {
          avatarDirectory: z,
          avatarOptions: d,
          isCreatingCustomAvatar: s,
          isCustomAvatarLoadError: f,
          isLoadingCustomAvatars: p,
          onCreateCustomAvatar: B,
          onRefreshCustomAvatars: V,
          onUpgradeCustomAvatar: U,
        })),
        (t[31] = a),
        (t[32] = d),
        (t[33] = s),
        (t[34] = f),
        (t[35] = p),
        (t[36] = V),
        (t[37] = U),
        (t[38] = z),
        (t[39] = B),
        (t[40] = W))
      : (W = t[40]),
    W
  );
}
function Xt(e) {
  let { marketplaceName: t, plugin: n } = e;
  return n.name === `work-pets` && (t === `openai-curated` || t === `openai-curated-remote`);
}
var Zt,
  Qt,
  $t,
  en = e(() => {
    ((Zt = Ie()),
      F(),
      s(),
      (Qt = t(o(), 1)),
      G(),
      Fe(),
      te(),
      M(),
      ne(),
      dt(),
      ft(),
      h(),
      ge(),
      g(),
      Ue(),
      de(),
      O(),
      wt(),
      S(),
      ze(),
      Vt(),
      ae(),
      Le(),
      qt(),
      Be(),
      Ot(),
      ($t = je()));
  });
function tn() {
  let e = (0, nn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, rn.jsx)(C, {
          title: (0, rn.jsx)(l, { slug: `pets` }),
          children: (0, rn.jsx)(Jt, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var nn,
  rn,
  an = e(() => {
    ((nn = Ie()), en(), q(), re(), (rn = je()));
  });
function on(e) {
  let t = (0, sn.c)(56),
    { isPetVisible: n, petSize: r, petSizeSetting: i, selectedAvatar: a } = e,
    o = Oe(),
    s = r / ht,
    c = s + 40,
    l = (cn - r) / 2,
    u;
  t[0] !== s || t[1] !== r || t[2] !== l
    ? ((u = { height: s, left: l, top: 0, width: r }),
      (t[0] = s),
      (t[1] = r),
      (t[2] = l),
      (t[3] = u))
    : (u = t[3]);
  let d = u,
    f,
    p;
  t[4] === c
    ? ((f = t[5]), (p = t[6]))
    : ((f = { height: c, left: 0, top: 0, width: cn }),
      (p = { height: c, width: cn }),
      (t[4] = c),
      (t[5] = f),
      (t[6] = p));
  let h;
  t[7] !== d || t[8] !== f || t[9] !== p
    ? ((h = { mascot: d, placement: `bottom-end`, tray: null, visibleBounds: f, viewport: p }),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p),
      (t[10] = h))
    : (h = t[10]);
  let g = h,
    v = !n,
    y;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsx)(m, {
        id: `settings.pets.preview.customize`,
        defaultMessage: `Customize`,
        description: `Button that opens floating Codex pet customization options`,
      })),
      (t[11] = y))
    : (y = t[11]);
  let b;
  t[12] === v
    ? (b = t[13])
    : ((b = (0, Z.jsx)(Y, {
        className: `absolute right-4 bottom-4`,
        color: `outline`,
        disabled: v,
        size: `medium`,
        children: y,
      })),
      (t[12] = v),
      (t[13] = b));
  let x = b,
    S;
  t[14] === c ? (S = t[15]) : ((S = { height: c }), (t[14] = c), (t[15] = S));
  let C = `translateY(${n ? 0 : -s / 2}px)`,
    w;
  t[16] === C ? (w = t[17]) : ((w = { transform: C }), (t[16] = C), (t[17] = w));
  let E;
  t[18] === o ? (E = t[19]) : ((E = o ? { duration: 0 } : vt), (t[18] = o), (t[19] = E));
  let D = +!!n,
    O = `translateY(${n ? 0 : s / 2}px)`,
    k;
  t[20] !== D || t[21] !== O
    ? ((k = { opacity: D, transform: O }), (t[20] = D), (t[21] = O), (t[22] = k))
    : (k = t[22]);
  let A;
  t[23] === o ? (A = t[24]) : ((A = o ? { duration: 0 } : vt), (t[23] = o), (t[24] = A));
  let j;
  t[25] === A ? (j = t[26]) : ((j = { opacity: vt, transform: A }), (t[25] = A), (t[26] = j));
  let M;
  t[27] === a ? (M = t[28]) : ((M = W(a)), (t[27] = a), (t[28] = M));
  let N;
  t[29] === r ? (N = t[30]) : ((N = pt(r)), (t[29] = r), (t[30] = N));
  let P;
  t[31] !== M || t[32] !== N
    ? ((P = (0, Z.jsx)(xt, {
        className: `pointer-events-none`,
        source: M,
        state: `idle`,
        style: N,
      })),
      (t[31] = M),
      (t[32] = N),
      (t[33] = P))
    : (P = t[33]);
  let F;
  t[34] !== d || t[35] !== k || t[36] !== j || t[37] !== P
    ? ((F = (0, Z.jsx)(_.div, {
        animate: k,
        className: `absolute`,
        initial: !1,
        style: d,
        transition: j,
        children: P,
      })),
      (t[34] = d),
      (t[35] = k),
      (t[36] = j),
      (t[37] = P),
      (t[38] = F))
    : (F = t[38]);
  let I;
  t[39] !== g || t[40] !== F
    ? ((I = (0, Z.jsx)(_t, {
        areActivityPillsVisible: !0,
        canStartVoice: !0,
        draft: ``,
        hasNotifications: !0,
        isExpanded: !1,
        isVoiceSelected: !1,
        layout: g,
        petAccessory: F,
      })),
      (t[39] = g),
      (t[40] = F),
      (t[41] = I))
    : (I = t[41]);
  let L;
  t[42] !== w || t[43] !== E || t[44] !== I
    ? ((L = (0, Z.jsx)(_.div, {
        animate: w,
        className: `absolute inset-0`,
        initial: !1,
        transition: E,
        children: I,
      })),
      (t[42] = w),
      (t[43] = E),
      (t[44] = I),
      (t[45] = L))
    : (L = t[45]);
  let R;
  t[46] !== L || t[47] !== S
    ? ((R = (0, Z.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `pointer-events-none relative w-96 max-w-full select-none`,
        inert: !0,
        style: S,
        children: L,
      })),
      (t[46] = L),
      (t[47] = S),
      (t[48] = R))
    : (R = t[48]);
  let z;
  t[49] !== x || t[50] !== n || t[51] !== i
    ? ((z = n
        ? (0, Z.jsx)($e, {
            contentProps: { "aria-describedby": void 0 },
            size: `compact`,
            triggerContent: x,
            children: (0, Z.jsxs)(T, {
              className: `select-none`,
              children: [
                (0, Z.jsx)(fe, {
                  children: (0, Z.jsx)(oe, {
                    className: `pe-8`,
                    title: (0, Z.jsx)(Xe, {
                      children: (0, Z.jsx)(m, {
                        id: `settings.pets.preview.customize.title`,
                        defaultMessage: `Customize pet`,
                        description: `Title of the dialog for customizing the selected floating Codex pet`,
                      }),
                    }),
                  }),
                }),
                (0, Z.jsx)(fe, { children: i }),
              ],
            }),
          })
        : null),
      (t[49] = x),
      (t[50] = n),
      (t[51] = i),
      (t[52] = z))
    : (z = t[52]);
  let B;
  return (
    t[53] !== R || t[54] !== z
      ? ((B = (0, Z.jsx)(J, {
          className: `select-none`,
          children: (0, Z.jsx)(J.Content, {
            children: (0, Z.jsx)(ie, {
              children: (0, Z.jsxs)(`div`, {
                className: `relative flex min-h-80 items-center justify-center p-6`,
                children: [R, z],
              }),
            }),
          }),
        })),
        (t[53] = R),
        (t[54] = z),
        (t[55] = B))
      : (B = t[55]),
    B
  );
}
var sn,
  Z,
  cn,
  ln = e(() => {
    ((sn = Ie()),
      He(),
      G(),
      yt(),
      bt(),
      mt(),
      gt(),
      a(),
      Me(),
      Te(),
      V(),
      x(),
      p(),
      (Z = je()),
      (cn = 384));
  });
function un(e) {
  let t = (0, _n.c)(8),
    {
      avatarOptions: n,
      isCreatingCustomAvatar: r,
      isCustomAvatarLoadError: i,
      isLoadingCustomAvatars: a,
      onCreateCustomAvatar: o,
      onRefreshCustomAvatars: s,
      onUpgradeCustomAvatar: c,
    } = e,
    l = n === void 0 ? _e : n,
    u = r !== void 0 && r,
    d = i !== void 0 && i,
    f = a !== void 0 && a,
    p;
  return (
    t[0] !== l || t[1] !== u || t[2] !== d || t[3] !== f || t[4] !== o || t[5] !== s || t[6] !== c
      ? ((p = (0, Q.jsx)(Q.Fragment, {
          children: (0, Q.jsx)(dn, {
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
function dn(e) {
  let t = (0, _n.c)(106),
    {
      avatarOptions: n,
      isCreatingCustomAvatar: r,
      isCustomAvatarLoadError: a,
      isLoadingCustomAvatars: o,
      onCreateCustomAvatar: s,
      onRefreshCustomAvatars: c,
      onUpgradeCustomAvatar: l,
    } = e,
    u = i(me),
    d = L(),
    p = Ze(`188145323`),
    h = v(Ve),
    g = z(f.petSize),
    _ = z(f.petVisible),
    { selectedAvatar: b, setSelectedAvatarId: x } = K(n),
    S = _,
    C = ((g - 80) / 144) * 100,
    w,
    T,
    E,
    D,
    O,
    k,
    j,
    M,
    N,
    P;
  if (
    t[0] !== n ||
    t[1] !== d ||
    t[2] !== r ||
    t[3] !== p ||
    t[4] !== a ||
    t[5] !== o ||
    t[6] !== S ||
    t[7] !== s ||
    t[8] !== c ||
    t[9] !== l ||
    t[10] !== g ||
    t[11] !== C ||
    t[12] !== h ||
    t[13] !== u ||
    t[14] !== b ||
    t[15] !== x
  ) {
    let e = n.filter(pn),
      i = n.filter(fn),
      _;
    t[26] === d
      ? (_ = t[27])
      : ((_ = d.formatMessage({
          id: `settings.mini.pets.create.accessibleLabel`,
          defaultMessage: `Create pet`,
          description: `Accessible label for creating a custom pet from Mini settings`,
        })),
        (t[26] = d),
        (t[27] = _));
    let v = _,
      F;
    t[28] === d
      ? (F = t[29])
      : ((F = d.formatMessage({
          id: `settings.pets.refresh`,
          defaultMessage: `Refresh`,
          description: `Button label to refresh custom pets from local manifests`,
        })),
        (t[28] = d),
        (t[29] = F));
    let I = F,
      L;
    t[30] === h
      ? (L = t[31])
      : ((L = (e, t) => {
          h.logProductEvent(
            it,
            y({ action: e, selectedAvatar: t, source: ee.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS }),
          );
        }),
        (t[30] = h),
        (t[31] = L));
    let R = L,
      z;
    t[32] !== S || t[33] !== u || t[34] !== b || t[35] !== x || t[36] !== R
      ? ((z = (e) => {
          (S && e.id === b.id) ||
            (x(e.id),
            S || le(u, f.petVisible, !0),
            R(ve.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e));
        }),
        (t[32] = S),
        (t[33] = u),
        (t[34] = b),
        (t[35] = x),
        (t[36] = R),
        (t[37] = z))
      : (z = t[37]);
    let B = z,
      V;
    t[38] !== S || t[39] !== u
      ? ((V = () => {
          S && le(u, f.petVisible, !1);
        }),
        (t[38] = S),
        (t[39] = u),
        (t[40] = V))
      : (V = t[40]);
    let H = V,
      U,
      W;
    t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((U = (0, Q.jsx)(`label`, {
          htmlFor: `pet-size`,
          children: (0, Q.jsx)(m, {
            id: `settings.pets.size`,
            defaultMessage: `Pet size`,
            description: `Label for the floating pet size setting`,
          }),
        })),
        (W = (0, Q.jsx)(m, {
          id: `settings.pets.size.description`,
          defaultMessage: `Adjust the size of your pet`,
          description: `Description for the floating pet size setting`,
        })),
        (t[41] = U),
        (t[42] = W))
      : ((U = t[41]), (W = t[42]));
    let G;
    t[43] === u
      ? (G = t[44])
      : ((G = (e) => {
          le(u, f.petSize, Number(e.currentTarget.value));
        }),
        (t[43] = u),
        (t[44] = G));
    let te = `linear-gradient(to right, var(--color-text-info) ${C}%, var(--color-border-subtle) ${C}%)`,
      ne;
    t[45] === te ? (ne = t[46]) : ((ne = { background: te }), (t[45] = te), (t[46] = ne));
    let re;
    t[47] !== g || t[48] !== G || t[49] !== ne
      ? ((re = (0, Q.jsx)(Je, {
          label: U,
          description: W,
          control: (0, Q.jsx)(`input`, {
            id: `pet-size`,
            className: `h-0.5 w-40 cursor-interaction appearance-none rounded-full [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:cursor-interaction [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-strong [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:cursor-interaction [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-strong [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger`,
            max: 224,
            min: 80,
            onInput: G,
            style: ne,
            type: `range`,
            value: g,
          }),
        })),
        (t[47] = g),
        (t[48] = G),
        (t[49] = ne),
        (t[50] = re))
      : (re = t[50]);
    let ie = re;
    (t[51] !== S || t[52] !== g || t[53] !== ie || t[54] !== b
      ? ((P = (0, Q.jsx)(on, {
          isPetVisible: S,
          petSize: g,
          petSizeSetting: ie,
          selectedAvatar: b,
        })),
        (t[51] = S),
        (t[52] = g),
        (t[53] = ie),
        (t[54] = b),
        (t[55] = P))
      : (P = t[55]),
      (N = `m-0 min-w-0 border-0 p-0`),
      (T = J));
    let K;
    t[56] !== c || t[57] !== I
      ? ((K = c
          ? (0, Q.jsx)(A, {
              tooltipContent: I,
              children: (0, Q.jsx)(Y, {
                "aria-label": I,
                color: `ghost`,
                onClick: c,
                size: `icon`,
                children: (0, Q.jsx)(ke, { "aria-hidden": !1, asset: ot }),
              }),
            })
          : null),
        (t[56] = c),
        (t[57] = I),
        (t[58] = K))
      : (K = t[58]);
    let ae;
    t[59] !== v || t[60] !== r || t[61] !== s || t[62] !== b || t[63] !== R
      ? ((ae = s
          ? (0, Q.jsx)(Y, {
              "aria-label": v,
              color: `secondary`,
              loading: r,
              onClick: () => {
                (R(ve.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED, b), s());
              },
              size: `toolbar`,
              children: (0, Q.jsx)(m, {
                id: `settings.mini.pets.create.title`,
                defaultMessage: `Create pet`,
                description: `Button label for creating a custom Codex pet from Mini settings`,
              }),
            })
          : null),
        (t[59] = v),
        (t[60] = r),
        (t[61] = s),
        (t[62] = b),
        (t[63] = R),
        (t[64] = ae))
      : (ae = t[64]);
    let q;
    t[65] !== K || t[66] !== ae
      ? ((q = (0, Q.jsxs)(Q.Fragment, { children: [K, ae] })),
        (t[65] = K),
        (t[66] = ae),
        (t[67] = q))
      : (q = t[67]);
    let oe;
    (t[68] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((oe = (0, Q.jsx)(m, {
          id: `settings.mini.pets.title`,
          defaultMessage: `My pets`,
          description: `Title above the pet selection grid in Mini settings`,
        })),
        (t[68] = oe))
      : (oe = t[68]),
      t[69] === q
        ? (M = t[70])
        : ((M = (0, Q.jsx)(J.Header, { actions: q, title: oe })), (t[69] = q), (t[70] = M)),
      (w = J.Content),
      (E = `grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3`));
    let se = !S;
    (t[71] !== H || t[72] !== se
      ? ((D = (0, Q.jsx)(mn, { isSelected: se, onSelect: H })),
        (t[71] = H),
        (t[72] = se),
        (t[73] = D))
      : (D = t[73]),
      t[74] !== a || t[75] !== o
        ? ((O = o
            ? (0, Q.jsx)(`div`, {
                className: `col-span-full`,
                children: (0, Q.jsx)(Ct, {
                  children: (0, Q.jsx)(m, {
                    id: `settings.pets.loadingCustom`,
                    defaultMessage: `Loading custom pets…`,
                    description: `Message shown while loading custom pet manifests`,
                  }),
                }),
              })
            : a
              ? (0, Q.jsx)(Je, {
                  className: `col-span-full`,
                  label: (0, Q.jsx)(m, {
                    id: `settings.pets.loadCustomError`,
                    defaultMessage: `Unable to load custom pets`,
                    description: `Message shown when custom pet manifests fail to load`,
                  }),
                  control: null,
                })
              : null),
          (t[74] = a),
          (t[75] = o),
          (t[76] = O))
        : (O = t[76]));
    let ce;
    (t[77] !== S || t[78] !== B || t[79] !== b
      ? ((ce = (e) =>
          (0, Q.jsx)(hn, { avatar: e, isSelected: S && e.id === b.id, onSelectAvatar: B }, e.id)),
        (t[77] = S),
        (t[78] = B),
        (t[79] = b),
        (t[80] = ce))
      : (ce = t[80]),
      (k = e.map(ce)));
    let ue;
    (t[81] !== p || t[82] !== S || t[83] !== l || t[84] !== B || t[85] !== b
      ? ((ue = (e) =>
          (0, Q.jsx)(
            hn,
            {
              avatar: e,
              isSelected: S && e.id === b.id,
              onSelectAvatar: B,
              onUpgradeAvatar: p ? l : void 0,
            },
            e.id,
          )),
        (t[81] = p),
        (t[82] = S),
        (t[83] = l),
        (t[84] = B),
        (t[85] = b),
        (t[86] = ue))
      : (ue = t[86]),
      (j = i.map(ue)),
      (t[0] = n),
      (t[1] = d),
      (t[2] = r),
      (t[3] = p),
      (t[4] = a),
      (t[5] = o),
      (t[6] = S),
      (t[7] = s),
      (t[8] = c),
      (t[9] = l),
      (t[10] = g),
      (t[11] = C),
      (t[12] = h),
      (t[13] = u),
      (t[14] = b),
      (t[15] = x),
      (t[16] = w),
      (t[17] = T),
      (t[18] = E),
      (t[19] = D),
      (t[20] = O),
      (t[21] = k),
      (t[22] = j),
      (t[23] = M),
      (t[24] = N),
      (t[25] = P));
  } else
    ((w = t[16]),
      (T = t[17]),
      (E = t[18]),
      (D = t[19]),
      (O = t[20]),
      (k = t[21]),
      (j = t[22]),
      (M = t[23]),
      (N = t[24]),
      (P = t[25]));
  let F;
  t[87] !== E || t[88] !== D || t[89] !== O || t[90] !== k || t[91] !== j
    ? ((F = (0, Q.jsxs)(`div`, { className: E, children: [D, O, k, j] })),
      (t[87] = E),
      (t[88] = D),
      (t[89] = O),
      (t[90] = k),
      (t[91] = j),
      (t[92] = F))
    : (F = t[92]);
  let I;
  t[93] !== w || t[94] !== F
    ? ((I = (0, Q.jsx)(w, { children: F })), (t[93] = w), (t[94] = F), (t[95] = I))
    : (I = t[95]);
  let R;
  t[96] !== T || t[97] !== I || t[98] !== M
    ? ((R = (0, Q.jsxs)(T, { children: [M, I] })),
      (t[96] = T),
      (t[97] = I),
      (t[98] = M),
      (t[99] = R))
    : (R = t[99]);
  let B;
  t[100] !== R || t[101] !== N
    ? ((B = (0, Q.jsx)(`fieldset`, { className: N, children: R })),
      (t[100] = R),
      (t[101] = N),
      (t[102] = B))
    : (B = t[102]);
  let V;
  return (
    t[103] !== B || t[104] !== P
      ? ((V = (0, Q.jsxs)(Q.Fragment, { children: [P, B] })),
        (t[103] = B),
        (t[104] = P),
        (t[105] = V))
      : (V = t[105]),
    V
  );
}
function fn(e) {
  return e.id.startsWith(`custom:`);
}
function pn(e) {
  return !e.id.startsWith(`custom:`);
}
function mn(e) {
  let t = (0, _n.c)(6),
    { isSelected: n, onSelect: r } = e,
    i,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(`div`, {
        className: `flex size-24 items-center justify-center rounded-full border border-dashed border-default`,
        children: (0, Q.jsxs)(`div`, {
          className: `flex translate-x-4 gap-1.5`,
          children: [
            (0, Q.jsx)(`span`, { className: `size-1.5 rounded-full bg-text/25` }),
            (0, Q.jsx)(`span`, { className: `size-1.5 rounded-full bg-text/25` }),
          ],
        }),
      })),
      (a = (0, Q.jsx)(m, {
        id: `settings.mini.pets.none.description`,
        defaultMessage: `Use Mini without a pet`,
        description: `Description of the bar-only option in the Mini pet grid`,
      })),
      (t[0] = i),
      (t[1] = a))
    : ((i = t[0]), (a = t[1]));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(m, {
        id: `settings.mini.pets.none.title`,
        defaultMessage: `None`,
        description: `Label for selecting the bar-only Mini mode without a pet`,
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  return (
    t[3] !== n || t[4] !== r
      ? ((s = (0, Q.jsx)(gn, { artwork: i, description: a, isSelected: n, label: o, onSelect: r })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function hn(e) {
  let t = (0, _n.c)(20),
    { avatar: n, isSelected: r, onSelectAvatar: i, onUpgradeAvatar: a } = e,
    o = n.upgradeDirectoryPath,
    s = L(),
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
          ? (0, Q.jsx)(A, {
              tooltipContent: l,
              children: (0, Q.jsx)(Y, {
                "aria-label": l,
                color: `accent`,
                onClick: () => {
                  a(n.displayName, o);
                },
                size: `toolbar`,
                children: (0, Q.jsx)(m, {
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
    : ((d = (0, Q.jsx)(At, { className: `size-24 rounded-none`, avatar: n })),
      (t[8] = n),
      (t[9] = d));
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
      ? ((p = (0, Q.jsx)(gn, {
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
function gn(e) {
  let t = (0, _n.c)(20),
    { actions: n, artwork: r, description: i, isSelected: a, label: o, onSelect: s } = e,
    c = a ? `border-strong ring-1 ring-border-strong` : `border-default`,
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = U(
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
    : ((d = (0, Q.jsx)(`div`, { className: `text-sm text-secondary`, children: i })),
      (t[4] = i),
      (t[5] = d));
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
    : ((m =
        n == null ? null : (0, Q.jsx)(`div`, { className: `absolute top-3 right-3`, children: n })),
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
var _n,
  Q,
  vn = e(() => {
    ((_n = Ie()),
      Ce(),
      be(),
      st(),
      F(),
      s(),
      G(),
      kt(),
      k(),
      mt(),
      a(),
      De(),
      w(),
      B(),
      Ue(),
      qe(),
      V(),
      St(),
      se(),
      he(),
      p(),
      ln(),
      b(),
      (Q = je()));
  });
function yn() {
  let e = (0, xn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(C, {
          action: (0, $.jsx)(bn, {}),
          subtitle: (0, $.jsx)(m, {
            id: `settings.mini.description`,
            defaultMessage: `Choose how Codex keeps you in the loop`,
            description: `Description below the Mini settings page title`,
          }),
          title: (0, $.jsx)(m, {
            id: `settings.mini.title`,
            defaultMessage: `Mini`,
            description: `Title for the flag-gated Mini settings page`,
          }),
          children: (0, $.jsx)(Jt, { collectionSection: un }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function bn() {
  let e = (0, xn.c)(8),
    t = i(me),
    n = v(Qe),
    r;
  e[0] !== n || e[1] !== t
    ? ((r = () => {
        (t.get(Ve).logProductEvent(
          it,
          y({
            action: n
              ? ve.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
              : ve.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
            selectedAvatar: { id: E(t.get, f.selectedAvatarId) ?? _e[0].id },
            source: ee.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
          }),
        ),
          at.dispatchMessage(`avatar-overlay-open`, {}));
      }),
      (e[0] = n),
      (e[1] = t),
      (e[2] = r))
    : (r = e[2]);
  let a;
  e[3] === n
    ? (a = e[4])
    : ((a = n
        ? (0, $.jsx)(m, {
            id: `settings.mini.hide`,
            defaultMessage: `Hide Mini`,
            description: `Button that hides the floating Mini overlay`,
          })
        : (0, $.jsx)(m, {
            id: `settings.mini.show`,
            defaultMessage: `Show Mini`,
            description: `Button that shows the floating Mini overlay`,
          })),
      (e[3] = n),
      (e[4] = a));
  let o;
  return (
    e[5] !== r || e[6] !== a
      ? ((o = (0, $.jsx)(Y, { color: `secondary`, onClick: r, size: `toolbar`, children: a })),
        (e[5] = r),
        (e[6] = a),
        (e[7] = o))
      : (o = e[7]),
    o
  );
}
var xn,
  $,
  Sn = e(() => {
    ((xn = Ie()),
      Ce(),
      F(),
      s(),
      G(),
      k(),
      xe(),
      p(),
      en(),
      vn(),
      a(),
      ye(),
      B(),
      Ue(),
      qe(),
      q(),
      ($ = je()));
  });
function Cn() {
  return Ze(`1532120159`) ? (0, wn.jsx)(yn, {}) : (0, wn.jsx)(tn, {});
}
var wn;
e(() => {
  (he(), an(), Sn(), (wn = je()));
})();
export { Cn as PetsSettingsRoute };
//# sourceMappingURL=pets-settings-route-c75a444800aa.js.map
