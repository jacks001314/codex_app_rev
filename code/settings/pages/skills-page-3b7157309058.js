import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A1t as n,
  A3t as r,
  A7 as i,
  AMt as a,
  Amn as o,
  Ayt as s,
  Cpn as c,
  E7 as l,
  F3t as u,
  Fw as d,
  Fx as f,
  GL as p,
  IXt as m,
  Ix as h,
  KO as g,
  KS as _,
  KXt as v,
  KYt as y,
  Mbt as b,
  Mw as x,
  N3t as S,
  Nbt as ee,
  Nw as te,
  O3t as C,
  OC as ne,
  Opn as re,
  Pw as ie,
  Q5 as ae,
  QXt as w,
  Spn as oe,
  UO as T,
  WL as E,
  X2t as se,
  Y2t as ce,
  a3t as le,
  aYt as ue,
  amt as de,
  bpt as fe,
  byt as pe,
  dNt as me,
  e0t as D,
  e4t as he,
  e7 as O,
  eZt as ge,
  fbt as _e,
  gMt as ve,
  hMt as ye,
  hmn as be,
  i7 as k,
  imt as xe,
  kC as Se,
  kMt as Ce,
  kmn as we,
  kyt as Te,
  lw as Ee,
  lxt as De,
  o3t as A,
  pNt as j,
  qS as Oe,
  rq as ke,
  sYt as M,
  sxt as Ae,
  ubt as je,
  uq as Me,
  uw as Ne,
  xyt as Pe,
  ypt as Fe,
  zXt as Ie,
} from "./app-initial-f094ef01c64d.js";
import {
  Go as Le,
  Jw as Re,
  Wo as ze,
  _x as Be,
  gx as Ve,
  qw as He,
  yx as Ue,
} from "./app-primary-4c40d73a1074.js";
import { a as We, t as Ge } from "./computer-history-suggestions-7b96a293b088.js";
import { n as Ke, t as N } from "./use-element-in-view-a1799199db67.js";
import { n as P, r as qe, t as Je } from "./skills-page-grid-8e6b72ab693e.js";
import {
  C as F,
  E as Ye,
  M as Xe,
  N as Ze,
  P as Qe,
  S as I,
  T as L,
} from "./plugin-request-empty-state-41e04cfd3e39.js";
import { i as R, n as z, r as B, t as V } from "./plugins-store-page-dac62b2aebdd.js";
import { d as $e, m as H } from "./plugins-page-section-651a6ff2d45b.js";
import {
  C as et,
  S as tt,
  b as nt,
  f as U,
  p as W,
  w as rt,
  x as it,
} from "./plugin-detail-page-eb5ff5839527.js";
import { n as G, t as at } from "./settings-host-dropdown-a80e924edf7c.js";
import { i as ot, n as st, r as ct, t as K } from "./plugins-page-275f0d3fc353.js";
function q() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsxs)($.Fragment, {
          children: [null, (0, $.jsx)($.Fragment, { children: (0, $.jsx)(J, {}) })],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function J() {
  let e = (0, Z.c)(5),
    t = v(),
    n = dt(),
    r;
  e[0] === t.search ? (r = e[1]) : ((r = O(t.search)), (e[0] = t.search), (e[1] = r));
  let i = r;
  if (n) {
    let t;
    return (
      e[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(Y, {})), (e[2] = t))
        : (t = e[2]),
      t
    );
  }
  let a;
  return (
    e[3] === i
      ? (a = e[4])
      : ((a = (0, $.jsx)(ft, { initialSearchQuery: i })), (e[3] = i), (e[4] = a)),
    a
  );
}
function Y() {
  let e = (0, Z.c)(21),
    t = v(),
    n;
  e[0] === t.state ? (n = e[1]) : ((n = ae(t.state)), (e[0] = t.state), (e[1] = n));
  let r = n,
    i = S(Ye, t.key),
    a = i == null && r.initialTab === `skills` ? `skills` : `plugins`,
    o;
  e[2] !== a || e[3] !== t.key
    ? ((o = { historyKey: t.key, initialTab: a }), (e[2] = a), (e[3] = t.key), (e[4] = o))
    : (o = e[4]);
  let s = S(F, o),
    c = i?.selectedHostId ?? r.initialHostId ?? `local`,
    l;
  e[5] !== c || e[6] !== t.key
    ? ((l = { historyKey: t.key, initialHostId: c }), (e[5] = c), (e[6] = t.key), (e[7] = l))
    : (l = e[7]);
  let f = S(L, l),
    p = d(u(ee) ?? []),
    m;
  e[8] !== p || e[9] !== f ? ((m = te(f, p)), (e[8] = p), (e[9] = f), (e[10] = m)) : (m = e[10]);
  let h = m,
    g = h === he,
    _ =
      M(`3413548395`) &&
      r.resumePluginInstallId == null &&
      s === `plugins` &&
      (r.initialTab === `plugins` || r.initialTab === `skills`),
    y;
  e[11] !== s || e[12] !== g
    ? ((y = s === `skills` && g ? (0, $.jsx)(lt, {}) : null), (e[11] = s), (e[12] = g), (e[13] = y))
    : (y = e[13]);
  let b;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, $.jsx)(B, {})), (e[14] = b))
    : (b = e[14]);
  let x;
  e[15] !== h || e[16] !== _
    ? ((x = (0, $.jsx)(X, { hostId: h, showRemoteBasedStorePage: _ }, h)),
      (e[15] = h),
      (e[16] = _),
      (e[17] = x))
    : (x = e[17]);
  let C;
  return (
    e[18] !== y || e[19] !== x
      ? ((C = (0, $.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col`,
          children: [y, b, x],
        })),
        (e[18] = y),
        (e[19] = x),
        (e[20] = C))
      : (C = e[20]),
    C
  );
}
function X(e) {
  let t = (0, Z.c)(4),
    { hostId: n, showRemoteBasedStorePage: r } = e,
    i = _e(n),
    a;
  return (
    t[0] !== i?.authMethod || t[1] !== n || t[2] !== r
      ? ((a = r && pe(i?.authMethod ?? null) ? (0, $.jsx)(V, {}) : (0, $.jsx)(K, {})),
        (t[0] = i?.authMethod),
        (t[1] = n),
        (t[2] = r),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function lt() {
  return u(Ge);
}
function ut() {
  let e = (0, Z.c)(2),
    t = dt(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = t
          ? (0, $.jsx)(K, { mode: `manage` })
          : (0, $.jsx)(Ie, { replace: !0, to: `/skills` })),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
function dt() {
  let e = (0, Z.c)(5),
    t = v(),
    n;
  e[0] === t.state
    ? (n = e[1])
    : ((n = ae(t.state).initialHostId ?? `local`), (e[0] = t.state), (e[1] = n));
  let r = n;
  u(Ae);
  let i;
  return (
    e[2] !== r || e[3] !== !0
      ? ((i = { enabled: !0, hostId: r }), (e[2] = r), (e[3] = !0), (e[4] = i))
      : (i = e[4]),
    s(i)
  );
}
function ft(e) {
  let t = (0, Z.c)(97),
    { initialSearchQuery: i } = e,
    a = i === void 0 ? `` : i,
    o = r(le),
    s = re(),
    { data: l } = Me(),
    f = g(),
    p = d(u(ee)),
    [m, _] = (0, Q.useState)(he),
    v;
  t[0] !== p || t[1] !== m ? ((v = te(m, p)), (t[0] = p), (t[1] = m), (t[2] = v)) : (v = t[2]);
  let y = v,
    [b, x] = (0, Q.useState)(null),
    [S, C] = (0, Q.useState)(null),
    ie;
  t[3] !== S || t[4] !== b
    ? ((ie = { container: b, target: S }), (t[3] = S), (t[4] = b), (t[5] = ie))
    : (ie = t[5]);
  let ae = Ke(ie),
    [w, oe] = (0, Q.useState)(a),
    [T, E] = (0, Q.useState)(!1),
    se = u(Ze) ?? ce(`has-opened-skill-creator-prefill-v1`, !1),
    {
      forceReloadSkills: ue,
      installedSkillMatchKeys: de,
      isFetching: fe,
      isLoading: pe,
      markSkillsUpdated: D,
      standaloneInstalledSkills: O,
      workspaceRoots: _e,
    } = tt(y),
    {
      canInstallRecommendedSkills: ve,
      defaultRecommendedRepoRoot: be,
      skillCreatorPath: k,
    } = rt(y),
    { errorMessage: Se, isLoading: we, refresh: Te, repoRoot: Ee, skills: De } = et(be, y, ve),
    A;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = () => {
        E(!0);
      }),
      (t[6] = A))
    : (A = t[6]);
  let j;
  t[7] !== ue || t[8] !== y
    ? ((j = { forceReloadSkills: ue, hostId: y, onInstalled: A }),
      (t[7] = ue),
      (t[8] = y),
      (t[9] = j))
    : (j = t[9]);
  let { installRecommendedSkill: Oe, installingSkillId: ke } = it(j),
    M;
  t[10] === s ? (M = t[11]) : ((M = Ve({ scope: `repo`, intl: s })), (t[10] = s), (t[11] = M));
  let Ae = M,
    je = l?.name ?? void 0,
    Ne;
  t[12] !== s || t[13] !== je
    ? ((Ne = Ve({ scope: `admin`, intl: s, adminLabel: je })),
      (t[12] = s),
      (t[13] = je),
      (t[14] = Ne))
    : (Ne = t[14]);
  let Pe = Ne,
    Ie;
  t[15] !== s || t[16] !== Pe || t[17] !== Ae || t[18] !== _e
    ? ((Ie = (e) => {
        let { scope: t, skillPath: n } = e;
        return Ve({
          scope: t,
          intl: s,
          repoLabel: Be({ skillPath: n, roots: _e, fallbackLabel: Ae }),
          adminLabel: Pe,
        });
      }),
      (t[15] = s),
      (t[16] = Pe),
      (t[17] = Ae),
      (t[18] = _e),
      (t[19] = Ie))
    : (Ie = t[19]);
  let Le = Ie,
    Re;
  if (t[20] !== w || t[21] !== O) {
    let e = w.trim().toLowerCase();
    ((Re = O.filter((t) => {
      let { skill: n } = t;
      if (e.length === 0) return !0;
      let r = xe(n).toLowerCase(),
        i = me(n).toLowerCase();
      return n.name.toLowerCase().includes(e) || i.includes(e) || r.includes(e);
    })),
      (t[20] = w),
      (t[21] = O),
      (t[22] = Re));
  } else Re = t[22];
  let ze = Re,
    Ue;
  t[23] !== D || t[24] !== Te
    ? ((Ue = async () => {
        (D(), await Te(), E(!1));
      }),
      (t[23] = D),
      (t[24] = Te),
      (t[25] = Ue))
    : (Ue = t[25]);
  let We = Ue,
    Ge;
  (t[26] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ge = []), (t[26] = Ge)) : (Ge = t[26]),
    (0, Q.useEffect)(mt, Ge));
  let N;
  t[27] === ae
    ? (N = t[28])
    : ((N = ae
        ? null
        : (0, $.jsx)(c, {
            id: `skills.page.heading`,
            defaultMessage: `Skills`,
            description: `Header title for the skills page`,
          })),
      (t[27] = ae),
      (t[28] = N));
  let P;
  t[29] !== p || t[30] !== y
    ? ((P =
        p != null && p.length > 0
          ? (0, $.jsx)(at, { connectedRemoteConnections: p, onSelectHost: _, selectedHostId: y })
          : null),
      (t[29] = p),
      (t[30] = y),
      (t[31] = P))
    : (P = t[31]);
  let qe = T ? `secondary` : `ghost`,
    F;
  t[32] === We
    ? (F = t[33])
    : ((F = () => {
        We();
      }),
      (t[32] = We),
      (t[33] = F));
  let Ye = pe || fe,
    Qe;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qe = (0, $.jsx)(ye, { "aria-hidden": !1, asset: Fe })), (t[34] = Qe))
    : (Qe = t[34]);
  let I;
  t[35] === T
    ? (I = t[36])
    : ((I = (0, $.jsx)(`span`, {
        className: `hidden lg:inline`,
        children: T
          ? (0, $.jsx)(c, {
              id: `skills.page.refreshSkillsToUseNew`,
              defaultMessage: `Refresh to use new skill(s)`,
              description: `Button label shown when newly installed skills require a refresh before they can be used in the composer`,
            })
          : (0, $.jsx)(c, {
              id: `skills.page.refreshSkills`,
              defaultMessage: `Refresh`,
              description: `Button label for reloading skills list`,
            }),
      })),
      (t[35] = T),
      (t[36] = I));
  let L;
  t[37] !== qe || t[38] !== F || t[39] !== Ye || t[40] !== I
    ? ((L = (0, $.jsxs)(Ce, {
        color: qe,
        size: `toolbar`,
        onClick: F,
        disabled: Ye,
        children: [Qe, I],
      })),
      (t[37] = qe),
      (t[38] = F),
      (t[39] = Ye),
      (t[40] = I),
      (t[41] = L))
    : (L = t[41]);
  let R;
  t[42] === s
    ? (R = t[43])
    : ((R = s.formatMessage({
        id: `skills.page.search.label`,
        defaultMessage: `Search skills`,
        description: `Label for the skills page search input`,
      })),
      (t[42] = s),
      (t[43] = R));
  let z;
  t[44] === s
    ? (z = t[45])
    : ((z = s.formatMessage({
        id: `skills.page.search`,
        defaultMessage: `Search skills`,
        description: `Placeholder for the skills page search input`,
      })),
      (t[44] = s),
      (t[45] = z));
  let B;
  t[46] !== w || t[47] !== R || t[48] !== z
    ? ((B = (0, $.jsx)(`div`, {
        className: `hidden min-w-[160px] flex-1 lg:flex lg:w-[220px] lg:flex-none`,
        children: (0, $.jsx)(ne, {
          id: `skills-search`,
          autoFocus: !0,
          label: R,
          placeholder: z,
          searchQuery: w,
          onSearchQueryChange: oe,
        }),
      })),
      (t[46] = w),
      (t[47] = R),
      (t[48] = z),
      (t[49] = B))
    : (B = t[49]);
  let V;
  t[50] !== se || t[51] !== o || t[52] !== k || t[53] !== f
    ? ((V = () => {
        if (!k) return;
        ge(o, n, {});
        let e = Xe({ creatorPath: k, isFirstOpen: !se, kind: `skill` });
        (se || o.set(Ze, !0), f({ prefillPrompt: e, startInSidebar: !0 }));
      }),
      (t[50] = se),
      (t[51] = o),
      (t[52] = k),
      (t[53] = f),
      (t[54] = V))
    : (V = t[54]);
  let $e = !k,
    H,
    nt;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(ye, { "aria-hidden": !1, asset: h })),
      (nt = (0, $.jsx)(c, {
        id: `skills.page.createSkill`,
        defaultMessage: `New skill`,
        description: `Button label for creating a new skill`,
      })),
      (t[55] = H),
      (t[56] = nt))
    : ((H = t[55]), (nt = t[56]));
  let U;
  t[57] !== V || t[58] !== $e
    ? ((U = (0, $.jsxs)(Ce, {
        color: `primary`,
        size: `toolbar`,
        onClick: V,
        disabled: $e,
        children: [H, nt],
      })),
      (t[57] = V),
      (t[58] = $e),
      (t[59] = U))
    : (U = t[59]);
  let W;
  t[60] !== P || t[61] !== L || t[62] !== B || t[63] !== U
    ? ((W = (0, $.jsxs)(`div`, {
        className: `flex flex-nowrap items-center gap-1.5`,
        children: [P, L, B, U],
      })),
      (t[60] = P),
      (t[61] = L),
      (t[62] = B),
      (t[63] = U),
      (t[64] = W))
    : (W = t[64]);
  let G;
  t[65] !== N || t[66] !== W
    ? ((G = (0, $.jsx)(He, { start: N, trailing: W })), (t[65] = N), (t[66] = W), (t[67] = G))
    : (G = t[67]);
  let ot;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (e) => {
        x(e);
      }),
      (t[68] = ot))
    : (ot = t[68]);
  let st;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (e) => {
        C(e);
      }),
      (t[69] = st))
    : (st = t[69]);
  let ct;
  t[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (0, $.jsx)(`div`, {
        className: `heading-xl font-normal text-default`,
        children: (0, $.jsx)(c, {
          id: `skills.page.heading`,
          defaultMessage: `Skills`,
          description: `Header title for the skills page`,
        }),
      })),
      (t[70] = ct))
    : (ct = t[70]);
  let K;
  t[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, $.jsx)(`div`, {
        className: `flex items-end justify-between gap-4`,
        children: (0, $.jsxs)(`div`, {
          className: `flex flex-col gap-1`,
          ref: st,
          children: [
            ct,
            (0, $.jsx)(`div`, {
              className: `text-lg font-normal text-codex-description`,
              children: (0, $.jsx)(c, {
                id: `skills.page.subheading`,
                defaultMessage: `Add reusable workflows with Skills. <link>Learn more</link>`,
                description: `Subheading shown above the skills sections`,
                values: { link: pt },
              }),
            }),
          ],
        }),
      })),
      (t[71] = K))
    : (K = t[71]);
  let q;
  t[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, $.jsx)(c, {
        id: `skills.section.installed`,
        defaultMessage: `Installed`,
        description: `Heading for the installed skills section`,
      })),
      (t[72] = q))
    : (q = t[72]);
  let J;
  t[73] !== ze || t[74] !== Le || t[75] !== pe || t[76] !== D || t[77] !== y || t[78] !== O.length
    ? ((J = (0, $.jsx)(gt, {
        title: q,
        children: (0, $.jsx)(_t, {
          hostId: y,
          isLoading: pe,
          uniqueSkillCount: O.length,
          filteredSkills: ze,
          getScopeBadgeLabel: Le,
          onSkillsUpdated: D,
        }),
      })),
      (t[73] = ze),
      (t[74] = Le),
      (t[75] = pe),
      (t[76] = D),
      (t[77] = y),
      (t[78] = O.length),
      (t[79] = J))
    : (J = t[79]);
  let Y;
  t[80] !== ve ||
  t[81] !== Oe ||
  t[82] !== de ||
  t[83] !== ke ||
  t[84] !== we ||
  t[85] !== Ee ||
  t[86] !== De ||
  t[87] !== Se ||
  t[88] !== w ||
  t[89] !== y
    ? ((Y = ve
        ? (0, $.jsx)(gt, {
            title: (0, $.jsx)(c, {
              id: `skills.section.recommended`,
              defaultMessage: `Recommended`,
              description: `Heading for the recommended skills section`,
            }),
            children: (0, $.jsx)(yt, {
              hostId: y,
              isLoading: we,
              errorMessage: Se,
              skills: De,
              searchQuery: w,
              canInstall: !0,
              repoRoot: Ee,
              onInstall: Oe,
              installedSkillMatchKeys: de,
              installingSkillId: ke,
            }),
          })
        : null),
      (t[80] = ve),
      (t[81] = Oe),
      (t[82] = de),
      (t[83] = ke),
      (t[84] = we),
      (t[85] = Ee),
      (t[86] = De),
      (t[87] = Se),
      (t[88] = w),
      (t[89] = y),
      (t[90] = Y))
    : (Y = t[90]);
  let X;
  t[91] !== J || t[92] !== Y
    ? ((X = (0, $.jsx)(`div`, {
        className: `flex-1 overflow-y-auto p-panel`,
        ref: ot,
        children: (0, $.jsxs)(Je, {
          className: `mx-auto flex min-h-full w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col gap-8`,
          children: [
            K,
            (0, $.jsx)(`div`, {
              className: `flex min-h-0 w-full flex-1`,
              children: (0, $.jsxs)(`div`, {
                className: `flex min-h-0 flex-1 flex-col gap-9 pb-10`,
                children: [J, Y],
              }),
            }),
          ],
        }),
      })),
      (t[91] = J),
      (t[92] = Y),
      (t[93] = X))
    : (X = t[93]);
  let lt;
  return (
    t[94] !== G || t[95] !== X
      ? ((lt = (0, $.jsxs)(`div`, {
          className: `me-4 flex h-full flex-col text-base`,
          children: [G, X],
        })),
        (t[94] = G),
        (t[95] = X),
        (t[96] = lt))
      : (lt = t[96]),
    lt
  );
}
function pt(e) {
  return (0, $.jsx)(`a`, {
    href: l,
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `text-info`,
    children: e,
  });
}
function mt() {
  return ((document.documentElement.dataset.hideHeaderDivider = `true`), ht);
}
function ht() {
  delete document.documentElement.dataset.hideHeaderDivider;
}
function gt(e) {
  let t = (0, Z.c)(5),
    { title: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, $.jsx)(`div`, {
        className: `ps-2 pe-0.5 text-base font-medium text-default opacity-75`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, $.jsxs)(`section`, { className: `flex flex-col gap-4`, children: [i, r] })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function _t(e) {
  let t = (0, Z.c)(14),
    {
      hostId: n,
      isLoading: r,
      uniqueSkillCount: i,
      filteredSkills: a,
      getScopeBadgeLabel: o,
      onSkillsUpdated: s,
    } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, $.jsx)(_, {
              children: (0, $.jsx)(c, {
                id: `skills.page.loading`,
                defaultMessage: `Loading skills…`,
                description: `Loading label on the skills page`,
              }),
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (i === 0) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, $.jsx)(E, {
              title: (0, $.jsx)(c, {
                id: `skills.page.empty`,
                defaultMessage: `No skills found`,
                description: `Empty state on the skills page`,
              }),
            }),
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (a.length === 0) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, $.jsx)(E, {
              title: (0, $.jsx)(c, {
                id: `skills.page.filteredEmpty`,
                defaultMessage: `No skills match your filters`,
                description: `Empty state when filters hide all skills`,
              }),
              description: (0, $.jsx)(c, {
                id: `skills.page.filteredEmptyDescription`,
                defaultMessage: `Try adjusting your search or scope filters`,
                description: `Description for filtered skills empty state`,
              }),
            }),
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let l;
  if (t[3] !== a || t[4] !== o || t[5] !== n || t[6] !== s) {
    let e;
    (t[8] !== o || t[9] !== n || t[10] !== s
      ? ((e = (e) => {
          let { skill: t } = e,
            r =
              t.scope === `repo`
                ? [
                    (0, $.jsx)(
                      vt,
                      { label: o({ scope: `repo`, skillPath: t.path }) },
                      `${t.path}-repo`,
                    ),
                  ]
                : [];
          return (0, $.jsx)(
            U,
            { skill: t, displayName: me(t), hostId: n, scopeBadges: r, onSkillsUpdated: s },
            t.path,
          );
        }),
        (t[8] = o),
        (t[9] = n),
        (t[10] = s),
        (t[11] = e))
      : (e = t[11]),
      (l = a.map(e)),
      (t[3] = a),
      (t[4] = o),
      (t[5] = n),
      (t[6] = s),
      (t[7] = l));
  } else l = t[7];
  let u;
  return (
    t[12] === l ? (u = t[13]) : ((u = (0, $.jsx)(P, { children: l })), (t[12] = l), (t[13] = u)), u
  );
}
function vt(e) {
  let t = (0, Z.c)(2),
    { label: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(`span`, { className: `text-codex-description`, children: n })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function yt(e) {
  let t = (0, Z.c)(31),
    {
      hostId: n,
      isLoading: r,
      errorMessage: i,
      skills: a,
      searchQuery: o,
      canInstall: s,
      repoRoot: l,
      onInstall: u,
      installedSkillMatchKeys: d,
      installingSkillId: f,
    } = e,
    p,
    m,
    h;
  if (
    t[0] !== s ||
    t[1] !== i ||
    t[2] !== n ||
    t[3] !== d ||
    t[4] !== f ||
    t[5] !== r ||
    t[6] !== u ||
    t[7] !== l ||
    t[8] !== o ||
    t[9] !== a
  ) {
    h = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[13] === d
        ? (e = t[14])
        : ((e = (e) => !H({ installedSkillMatchKeys: d, skill: e })), (t[13] = d), (t[14] = e));
      let g = a.filter(e),
        v = o.trim().toLowerCase(),
        y = g.filter(
          (e) =>
            v.length === 0 ||
            [e.name, e.description, e.shortDescription ?? ``].join(` `).toLowerCase().includes(v),
        );
      if (r) {
        let e;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, $.jsx)(_, {
                children: (0, $.jsx)(c, {
                  id: `skills.page.loading`,
                  defaultMessage: `Loading skills…`,
                  description: `Loading label on the skills page`,
                }),
              }),
            })),
            (t[15] = e))
          : (e = t[15]),
          (h = e));
        break bb0;
      }
      if (i) {
        let e;
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(c, {
              id: `skills.recommended.error`,
              defaultMessage: `Unable to load recommended skills`,
              description: `Error title when recommended skills fail to load`,
            })),
            (t[16] = e))
          : (e = t[16]);
        let n;
        (t[17] === i
          ? (n = t[18])
          : ((n = (0, $.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, $.jsx)(E, { title: e, description: i }),
            })),
            (t[17] = i),
            (t[18] = n)),
          (h = n));
        break bb0;
      }
      if (g.length === 0) {
        let e;
        (t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, $.jsx)(E, {
                title: (0, $.jsx)(c, {
                  id: `skills.page.empty`,
                  defaultMessage: `No skills found`,
                  description: `Empty state on the skills page`,
                }),
              }),
            })),
            (t[19] = e))
          : (e = t[19]),
          (h = e));
        break bb0;
      }
      if (y.length === 0) {
        let e;
        (t[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, $.jsx)(E, {
                title: (0, $.jsx)(c, {
                  id: `skills.page.filteredEmpty`,
                  defaultMessage: `No skills match your filters`,
                  description: `Empty state when filters hide all skills`,
                }),
                description: (0, $.jsx)(c, {
                  id: `skills.page.filteredEmptyDescription`,
                  defaultMessage: `Try adjusting your search or scope filters`,
                  description: `Description for filtered skills empty state`,
                }),
              }),
            })),
            (t[20] = e))
          : (e = t[20]),
          (h = e));
        break bb0;
      }
      p = P;
      let b;
      (t[21] !== s || t[22] !== n || t[23] !== d || t[24] !== f || t[25] !== u || t[26] !== l
        ? ((b = (e) => {
            let t = H({ installedSkillMatchKeys: d, skill: e }),
              r = f === e.id;
            return (0, $.jsx)(
              ct,
              {
                skill: e,
                canInstall: s,
                hostId: n,
                isInstalled: t,
                isInstalling: r,
                repoRoot: l,
                onInstall: u,
              },
              e.id,
            );
          }),
          (t[21] = s),
          (t[22] = n),
          (t[23] = d),
          (t[24] = f),
          (t[25] = u),
          (t[26] = l),
          (t[27] = b))
        : (b = t[27]),
        (m = y.map(b)));
    }
    ((t[0] = s),
      (t[1] = i),
      (t[2] = n),
      (t[3] = d),
      (t[4] = f),
      (t[5] = r),
      (t[6] = u),
      (t[7] = l),
      (t[8] = o),
      (t[9] = a),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h));
  } else ((p = t[10]), (m = t[11]), (h = t[12]));
  if (h !== Symbol.for(`react.early_return_sentinel`)) return h;
  let g;
  return (
    t[28] !== p || t[29] !== m
      ? ((g = (0, $.jsx)(p, { children: m })), (t[28] = p), (t[29] = m), (t[30] = g))
      : (g = t[30]),
    g
  );
}
var Z,
  Q,
  $,
  bt = e(() => {
    ((Z = we()),
      ze(),
      D(),
      fe(),
      f(),
      C(),
      (Q = t(o(), 1)),
      oe(),
      m(),
      ie(),
      De(),
      je(),
      ke(),
      We(),
      i(),
      a(),
      ve(),
      p(),
      Se(),
      Te(),
      T(),
      Ee(),
      Pe(),
      R(),
      z(),
      w(),
      b(),
      A(),
      G(),
      x(),
      Oe(),
      y(),
      Ue(),
      de(),
      st(),
      I(),
      $e(),
      k(),
      ot(),
      W(),
      j(),
      qe(),
      nt(),
      ue(),
      Re(),
      se(),
      N(),
      Qe(),
      ($ = be()),
      Ne(Le));
  });
export { q as n, bt as r, ut as t };
//# sourceMappingURL=skills-page-3b7157309058.js.map
