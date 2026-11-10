import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $X as n,
  Cot as r,
  D2 as i,
  IDt as a,
  IF as o,
  Ixt as s,
  Mz as c,
  Nz as l,
  O2 as u,
  Pxt as d,
  Qtt as f,
  Rnt as p,
  VDt as m,
  Vxt as h,
  _Mt as g,
  _xt as _,
  eZ as v,
  gMt as y,
  iot as b,
  jDt as x,
  pM as S,
  t3 as ee,
  uM as te,
  vzt as C,
  wot as w,
  wxt as ne,
  xMt as T,
  yzt as re,
  zxt as ie,
} from "./app-shared-bbfeca5e5737.js";
import {
  ACn as E,
  BKt as ae,
  BYt as oe,
  Fin as D,
  GR as se,
  Grt as ce,
  Hin as le,
  Hrt as ue,
  IYt as de,
  Iut as fe,
  JR as pe,
  Jkn as me,
  KR as he,
  LKt as O,
  LTn as k,
  Mct as ge,
  Mut as _e,
  Pct as ve,
  QDr as ye,
  RTn as be,
  Urt as xe,
  WR as A,
  Wrt as j,
  XDr as M,
  Ykn as Se,
  Zkn as Ce,
  bDn as we,
  bFr as Te,
  eor as Ee,
  jCn as N,
  llt as De,
  mF as P,
  nft as F,
  oFr as I,
  pF as L,
  qR as Oe,
  qkn as ke,
  tft as Ae,
  tor as je,
  ult as R,
  vDn as Me,
  xFr as Ne,
} from "./app-initial-5851df3f6cb1.js";
import { Jt as Pe, Kt as Fe, au as Ie, iu as Le, ou as Re, su as ze } from "./app-primary-fe8a450b3b04.js";
import { a as z, r as Be, t as B } from "./computer-history-suggestions-1ba6cfc98a5b.js";
import { r as Ve, t as He } from "./document-title-1619f32b59ec.js";
import { n as V, r as H, t as Ue } from "./skills-page-grid-5f717c30cada.js";
import { c as U, o as We, s as Ge } from "./plugins-cards-grid-b8ca20fa8bd0.js";
import { a as W, i as G, o as K, r as q, s as J, t as Y } from "./plugins-skills-tabs-a615c21281ec.js";
import {
  _ as Ke,
  b as qe,
  f as Je,
  g as Ye,
  l as X,
  m as Xe,
  o as Ze,
  v as Qe,
} from "./plugins-page-selectors-463d7aa7d76e.js";
import { a as $e, i as et, n as tt, r as nt, t as rt } from "./use-skills-page-data-8427fb73d2f5.js";
import { n as it, t as at } from "./skill-card-95c13f424f06.js";
import { n as ot, t as st } from "./settings-host-dropdown-dff6a23826ad.js";
import { a as ct, i as lt, n as ut, r as dt } from "./skills-tab-content-e1cab3761bee.js";
import { n as ft, t as pt } from "./plugins-route-eligibility-f15139771bcf.js";
function mt(e) {
  let t = (0, gt.c)(6),
    { container: n, target: r } = e,
    i;
  t[0] !== n || t[1] !== r
    ? ((i = (e) => {
        if (!n || !r) return ht;
        let t = () => {
          e();
        };
        n.addEventListener(`scroll`, t, { passive: !0 });
        let i = typeof ResizeObserver > `u` ? null : new ResizeObserver(t);
        return (
          i && (i.observe(n), i.observe(r)),
          () => {
            (n.removeEventListener(`scroll`, t), i && i.disconnect());
          }
        );
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] !== n || t[4] !== r
    ? ((o = () => {
        if (!n || !r) return !0;
        let e = n.getBoundingClientRect(),
          t = r.getBoundingClientRect();
        return t.bottom > e.top && t.top < e.bottom;
      }),
      (t[3] = n),
      (t[4] = r),
      (t[5] = o))
    : (o = t[5]);
  let s = o;
  return (0, _t.useSyncExternalStore)(a, s, s);
}
function ht() {}
var gt, _t;
function vt() {
  return (vt = e(() => {
    ((gt = C()), (_t = re()));
  }))();
}
function yt(e) {
  let t = (0, Dt.c)(37),
    { hostId: n } = e,
    i = s(r),
    o = h(je),
    c = m(),
    l = ne(),
    u = h(be),
    d;
  t[0] === l.state ? (d = t[1]) : ((d = ke(l.state)), (t[0] = l.state), (t[1] = d));
  let f = d,
    p;
  t[2] !== l.search || t[3] !== f
    ? ((p = me(l.search) ?? f.initialSearchQuery ?? ``), (t[2] = l.search), (t[3] = f), (t[4] = p))
    : (p = t[4]);
  let [g, _] = (0, Ot.useState)(p),
    [v, x] = (0, Ot.useState)(0),
    [S, ee] = (0, Ot.useState)(null),
    te = (0, Ot.useRef)(null),
    C = (0, Ot.useRef)(null),
    w = n === b,
    T;
  t[5] === w ? (T = t[6]) : ((T = { enabled: w }), (t[5] = w), (t[6] = T));
  let re = h(Be, T),
    {
      forceReloadSkills: ie,
      installedSkillMatchKeys: E,
      isLoading: ae,
      markSkillsUpdated: oe,
      standaloneInstalledSkills: D,
      workspaceRoots: se,
    } = nt(n),
    { canInstallRecommendedSkills: ce, defaultRecommendedRepoRoot: le } = $e(n),
    { errorMessage: ue, isLoading: de, repoRoot: fe, skills: pe } = et(le, n, ce),
    O;
  t[7] !== l.key || t[8] !== i
    ? ((O = () => {
        i.set(he, l.key, !0);
      }),
      (t[7] = l.key),
      (t[8] = i),
      (t[9] = O))
    : (O = t[9]);
  let k;
  t[10] !== ie || t[11] !== n || t[12] !== O
    ? ((k = { forceReloadSkills: ie, hostId: n, onInstalled: O }),
      (t[10] = ie),
      (t[11] = n),
      (t[12] = O),
      (t[13] = k))
    : (k = t[13]);
  let {
      clearInstalledRecommendedSkills: _e,
      installRecommendedSkill: ve,
      installedRecommendedSkillIds: ye,
      installingSkillId: xe,
    } = tt(k),
    A = Se(c, `skills`),
    j = g.trim().toLowerCase(),
    M = j.length > 0,
    Ce = Xe({ skills: D, query: j }),
    we = Je({ query: j, suggestions: n === `local` ? re : null }),
    Te = Ye({ skills: pe, query: j }),
    Ee = Qe(Te),
    N = qe({ installedRecommendedSkillIds: ye, installedSkillMatchKeys: E, skills: M ? Te : Ee }),
    De = Ke({ installedSkills: Ce, recommendedSkills: N }),
    P = wt({ intl: c, roots: se, skillEntries: De }),
    F = M ? [...we.map(Ct), ...De.map(St), ...N.map(xt)] : [],
    I = F.length === 0 ? null : Math.min(v, F.length - 1),
    L = I == null ? null : (F[I] ?? null),
    Oe = ae || P.length > 0 || De.length > 0,
    Ae = de || ue != null || N.length > 0,
    R = A.sections.at(-1) ?? null,
    Me = [...P.map(bt), ...(Ae && R != null ? [R] : [])],
    Ne = Me.some((e) => e.id === S) ? S : (Me[0]?.id ?? null),
    Pe = Oe ? (A.sections[0] ?? null) : null,
    Fe = Ae ? R : null,
    Ie;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (e) => {
        (_(e), x(0));
      }),
      (t[14] = Ie))
    : (Ie = t[14]);
  let Le = Ie,
    Re = () => {
      window.requestAnimationFrame(() => {
        C.current?.querySelector(`[data-search-result-active='true']`)?.scrollIntoView({ block: `nearest` });
      });
    },
    ze = (e) => {
      if (M && F.length !== 0) {
        if (e.key === `ArrowDown`) {
          (e.preventDefault(), x(Math.min((I ?? 0) + 1, F.length - 1)), Re());
          return;
        }
        if (e.key === `ArrowUp`) {
          (e.preventDefault(), x(Math.max((I ?? 0) - 1, 0)), Re());
          return;
        }
        if (e.key === `Enter`) {
          let t = C.current?.querySelector(`[data-search-result-active='true']`);
          t instanceof HTMLElement && (e.preventDefault(), t.click());
        }
      }
    },
    z;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = () => {
        te.current?.focus();
      }),
      (t[15] = z))
    : (z = t[15]);
  let B = (0, Ot.useEffectEvent)(z),
    Ve;
  t[16] === B
    ? (Ve = t[17])
    : ((Ve = () => {
        let e = (e) => {
          (e.metaKey || e.ctrlKey) &&
            e.key.toLowerCase() === `f` &&
            (Et(e.target) || (e.preventDefault(), B()));
        };
        return (
          window.addEventListener(`keydown`, e),
          () => {
            window.removeEventListener(`keydown`, e);
          }
        );
      }),
      (t[16] = B),
      (t[17] = Ve));
  let V;
  (t[18] === Symbol.for(`react.memo_cache_sentinel`) ? ((V = []), (t[18] = V)) : (V = t[18]),
    (0, Ot.useEffect)(Ve, V));
  let H;
  t[19] === c
    ? (H = t[20])
    : ((H = c.formatMessage({
        id: `skills.appsPage.browseIntro.skillsTitle`,
        defaultMessage: `Skills`,
        description: `Title shown at the top of the skills browse page`,
      })),
      (t[19] = c),
      (t[20] = H));
  let U;
  t[21] === H ? (U = t[22]) : ((U = (0, Z.jsx)(He, { title: H })), (t[21] = H), (t[22] = U));
  let We;
  t[23] === o
    ? (We = t[24])
    : ((We = o ? (0, Z.jsx)(K, { browseTab: `skills`, inline: !0 }) : void 0), (t[23] = o), (t[24] = We));
  let Ge;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ge = (0, Z.jsx)(a, {
        id: `skills.appsPage.browseIntro.skillsTitle`,
        defaultMessage: `Skills`,
        description: `Title shown at the top of the skills browse page`,
      })),
      (t[25] = Ge))
    : (Ge = t[25]);
  let W;
  t[26] === u
    ? (W = t[27])
    : ((W =
        u === `codex`
          ? (0, Z.jsx)(a, {
              id: `skills.appsPage.browseIntro.codexSkillsSubtitle`,
              defaultMessage: `Extend Codex with task-specific skills`,
              description: `Subtitle shown at the top of the skills browse page while the Codex product mode is selected`,
            })
          : (0, Z.jsx)(a, {
              id: `skills.appsPage.browseIntro.skillsSubtitle`,
              defaultMessage: `Extend ChatGPT with task-specific skills`,
              description: `Subtitle shown at the top of the skills browse page`,
            })),
      (t[26] = u),
      (t[27] = W));
  let G = !M && `flex-1`,
    q;
  t[28] === G ? (q = t[29]) : ((q = y(`flex min-h-0 flex-col gap-8`, G)), (t[28] = G), (t[29] = q));
  let J =
      !M || F.length > 0
        ? (0, Z.jsx)(ut, {
            canInstallRecommendedSkills: ce,
            errorMessage: ue,
            hostId: n,
            highlightedInstalledSkillPath: L?.startsWith(`installed-skill:`) ? L.slice(16) : null,
            highlightedRecommendedSkillId: L?.startsWith(`recommended-skill:`) ? L.slice(18) : null,
            highlightedSuggestedSkillId: L?.startsWith(`suggested-skill:`) ? L.slice(16) : null,
            installedSkillGroups: P,
            installedStateAction: `check`,
            installedSection: Pe,
            installedRecommendedSkillIds: ye,
            installedSkills: De,
            installedSkillsForRecommendedActions: D,
            installingSkillId: xe,
            isLoadingInstalledSkills: ae,
            isLoadingRecommendedSkills: de,
            onInstallRecommendedSkill: ve,
            onInstalledRecommendedSkillUpdated: () => {
              (_e(), oe());
            },
            onSelectSection: ee,
            onSkillsUpdated: oe,
            recommendedRepoRoot: fe,
            recommendedSection: Fe,
            recommendedSkills: N,
            roots: se,
            selectedSectionId: Ne,
            suggestedSkills: we,
            searchResultsTitle: M
              ? (0, Z.jsx)(a, {
                  id: `skills.appsPage.skillsFilter.all`,
                  defaultMessage: `Skills`,
                  description: `Label for the Skills option in the browse filter dropdown on the Skills & Apps page`,
                })
              : void 0,
          })
        : null,
    Y;
  t[30] !== M || t[31] !== F
    ? ((Y =
        M && F.length === 0
          ? (0, Z.jsx)(`div`, {
              className: `text-base text-secondary`,
              children: (0, Z.jsx)(a, {
                id: `skills.appsPage.empty.skills`,
                defaultMessage: `No skills found`,
                description: `Empty state title when no skills match filters on the Skills & Apps page`,
              }),
            })
          : null),
      (t[30] = M),
      (t[31] = F),
      (t[32] = Y))
    : (Y = t[32]);
  let X;
  return (
    t[33] !== q || t[34] !== J || t[35] !== Y
      ? ((X = (0, Z.jsxs)(`div`, { className: q, children: [J, Y] })),
        (t[33] = q),
        (t[34] = J),
        (t[35] = Y),
        (t[36] = X))
      : (X = t[36]),
    (0, Z.jsxs)(Ue, {
      className: `flex h-full w-full flex-1 flex-col gap-8`,
      children: [
        U,
        (0, Z.jsx)(ge, {
          animateContentLayout: !1,
          contentClassName: o ? `pt-2` : void 0,
          contentWidth: `medium`,
          headerPlacement: o ? `sticky` : `page`,
          headerVariant: o ? `compact` : `inset`,
          collapseHeaderOnScroll: o,
          expandSearchWhenWrapped: o,
          wrapActionsAtNarrowWidth: o,
          headerAction: We,
          scrollContainerRef: C,
          title: Ge,
          subtitle: W,
          search: {
            variant: o ? `toolbar-compact` : `default`,
            id: `plugins-page-search`,
            inputRef: te,
            label: A.searchLabel,
            onKeyDown: ze,
            onSearchQueryChange: Le,
            placeholder: A.searchPlaceholder,
            searchQuery: g,
          },
          children: X,
        }),
      ],
    })
  );
}
function bt(e) {
  return { id: e.id, title: e.title };
}
function xt(e) {
  return `recommended-skill:${e.id}`;
}
function St(e) {
  let { skill: t } = e;
  return `installed-skill:${t.path}`;
}
function Ct(e) {
  return `suggested-skill:${e.id}`;
}
function wt({ intl: e, roots: t, skillEntries: n }) {
  let r = new Map();
  for (let i of n) {
    let n = Re({ skill: i.skill, roots: t, intl: e }),
      a = r.get(n);
    if (a == null) {
      r.set(n, { id: `skills-installed-${Tt(n)}`, title: n, skillEntries: [i] });
      continue;
    }
    a.skillEntries.push(i);
  }
  return Array.from(r.values());
}
function Tt(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, `-`);
}
function Et(e) {
  if (!(e instanceof HTMLElement)) return !1;
  if (e.isContentEditable) return !0;
  let t = e.tagName.toLowerCase();
  return t === `input` || t === `textarea` || t === `select` || e.closest(`[contenteditable='true']`) != null;
}
var Dt, Ot, Z;
function kt() {
  return (kt = e(() => {
    ((Dt = C()),
      g(),
      d(),
      (Ot = re()),
      x(),
      _(),
      z(),
      ve(),
      Ve(),
      J(),
      w(),
      I(),
      Ee(),
      k(),
      ze(),
      A(),
      Ze(),
      Ce(),
      H(),
      dt(),
      rt(),
      (Z = T()));
  }))();
}
function At(e) {
  let t = (0, Nt.c)(6),
    { navigation: n } = e,
    r = h(je),
    i;
  t[0] !== r || t[1] !== n
    ? ((i = r ? null : (0, Pt.jsx)(K, { browseTab: `plugins`, navigation: n })),
      (t[0] = r),
      (t[1] = n),
      (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = (0, Pt.jsx)(G, {})), (t[3] = a)) : (a = t[3]);
  let o;
  return (
    t[4] === i
      ? (o = t[5])
      : ((o = (0, Pt.jsxs)(`div`, { className: `flex h-full min-h-0 flex-col`, children: [i, a] })),
        (t[4] = i),
        (t[5] = o)),
    o
  );
}
function jt(e) {
  let t = (0, Nt.c)(11),
    { hostId: n, navigation: r } = e,
    i = h(je),
    a;
  t[0] === n ? (a = t[1]) : ((a = n === `local` ? (0, Pt.jsx)(Mt, {}) : null), (t[0] = n), (t[1] = a));
  let o;
  t[2] !== i || t[3] !== r
    ? ((o = i ? null : (0, Pt.jsx)(K, { browseTab: `skills`, navigation: r })),
      (t[2] = i),
      (t[3] = r),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === n ? (s = t[6]) : ((s = (0, Pt.jsx)(yt, { hostId: n })), (t[5] = n), (t[6] = s));
  let c;
  return (
    t[7] !== a || t[8] !== o || t[9] !== s
      ? ((c = (0, Pt.jsxs)(`div`, { className: `flex h-full min-h-0 flex-col`, children: [a, o, s] })),
        (t[7] = a),
        (t[8] = o),
        (t[9] = s),
        (t[10] = c))
      : (c = t[10]),
    c
  );
}
function Mt() {
  return h(B);
}
var Nt, Pt;
function Ft() {
  return (Ft = e(() => {
    ((Nt = C()), d(), z(), J(), W(), I(), Ee(), kt(), (Pt = T()));
  }))();
}
function It() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsxs)($.Fragment, {
          children: [null, (0, $.jsx)($.Fragment, { children: (0, $.jsx)(Lt, {}) })],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Lt() {
  let e = (0, Q.c)(5),
    t = ne(),
    n = ft(),
    r;
  e[0] === t.search ? (r = e[1]) : ((r = me(t.search)), (e[0] = t.search), (e[1] = r));
  let i = r;
  if (n) {
    let t;
    return (
      e[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, $.jsx)(Rt, {})), (e[2] = t)) : (t = e[2]),
      t
    );
  }
  let a;
  return (
    e[3] === i ? (a = e[4]) : ((a = (0, $.jsx)(zt, { initialSearchQuery: i })), (e[3] = i), (e[4] = a)),
    a
  );
}
function Rt() {
  let e = (0, Q.c)(23),
    t = s(r),
    n = h(je),
    i = ne(),
    a;
  e[0] !== i.search || e[1] !== i.state
    ? ((a = ke(i.state, i.search)), (e[0] = i.search), (e[1] = i.state), (e[2] = a))
    : (a = e[2]);
  let o = a,
    c = ie(pe, i.key),
    l = c == null && o.initialTab === `skills` ? `skills` : `plugins`,
    u;
  e[3] !== l || e[4] !== i.key
    ? ((u = { historyKey: i.key, initialTab: l }), (e[3] = l), (e[4] = i.key), (e[5] = u))
    : (u = e[5]);
  let d = ie(se, u),
    f = c?.selectedHostId ?? o.initialHostId ?? `local`,
    p;
  e[6] !== f || e[7] !== i.key
    ? ((p = { historyKey: i.key, initialHostId: f }), (e[6] = f), (e[7] = i.key), (e[8] = p))
    : (p = e[8]);
  let m = ie(Oe, p),
    g = h(we) ?? [],
    _ = ce(g),
    v;
  e[9] !== _ || e[10] !== m ? ((v = xe(m, _)), (e[9] = _), (e[10] = m), (e[11] = v)) : (v = e[11]);
  let y = v,
    b = d;
  n && (b = i.pathname === `/skills` ? `skills` : `plugins`);
  let x;
  e[12] !== b || e[13] !== n || e[14] !== l || e[15] !== i.key || e[16] !== t || e[17] !== y
    ? ((x = n
        ? void 0
        : (0, $.jsx)(Y, {
            currentBrowseTab: b,
            hostId: y,
            onBrowseTabSelect: (e) => {
              t.set(se, { historyKey: i.key, initialTab: l }, e);
            },
          })),
      (e[12] = b),
      (e[13] = n),
      (e[14] = l),
      (e[15] = i.key),
      (e[16] = t),
      (e[17] = y),
      (e[18] = x))
    : (x = e[18]);
  let S = x,
    ee;
  return (
    e[19] !== b || e[20] !== S || e[21] !== y
      ? ((ee =
          b === `skills`
            ? (0, $.jsx)(jt, { hostId: y, navigation: S }, y)
            : (0, $.jsx)(At, { navigation: S }, y)),
        (e[19] = b),
        (e[20] = S),
        (e[21] = y),
        (e[22] = ee))
      : (ee = e[22]),
    ee
  );
}
function zt(e) {
  let n = (0, Q.c)(97),
    { initialSearchQuery: l } = e,
    u = l === void 0 ? `` : l,
    d = s(r),
    p = m(),
    { data: g } = le(),
    _ = oe(),
    y = h(we),
    x = ce(y),
    [S, ee] = (0, qt.useState)(b),
    C;
  n[0] !== x || n[1] !== S ? ((C = xe(S, x)), (n[0] = x), (n[1] = S), (n[2] = C)) : (C = n[2]);
  let w = C,
    [ne, T] = (0, qt.useState)(null),
    [re, ie] = (0, qt.useState)(null),
    E;
  n[3] !== re || n[4] !== ne
    ? ((E = { container: ne, target: re }), (n[3] = re), (n[4] = ne), (n[5] = E))
    : (E = n[5]);
  let ae = mt(E),
    [D, se] = (0, qt.useState)(u),
    [ue, de] = (0, qt.useState)(!1),
    fe = h(Ge) ?? Te(`has-opened-skill-creator-prefill-v1`, !1),
    {
      forceReloadSkills: pe,
      installedSkillMatchKeys: me,
      isFetching: he,
      isLoading: O,
      markSkillsUpdated: k,
      standaloneInstalledSkills: ge,
      workspaceRoots: _e,
    } = nt(w),
    { canInstallRecommendedSkills: ve, defaultRecommendedRepoRoot: be, skillCreatorPath: A } = $e(w),
    { errorMessage: j, isLoading: M, refresh: Se, repoRoot: Ce, skills: Ee } = et(be, w, ve),
    N;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = () => {
        de(!0);
      }),
      (n[6] = N))
    : (N = n[6]);
  let P;
  n[7] !== pe || n[8] !== w
    ? ((P = { forceReloadSkills: pe, hostId: w, onInstalled: N }), (n[7] = pe), (n[8] = w), (n[9] = P))
    : (P = n[9]);
  let { installRecommendedSkill: F, installingSkillId: I } = tt(P),
    L;
  n[10] === p ? (L = n[11]) : ((L = Le({ scope: `repo`, intl: p })), (n[10] = p), (n[11] = L));
  let Oe = L,
    ke = g?.name ?? void 0,
    Ae;
  n[12] !== p || n[13] !== ke
    ? ((Ae = Le({ scope: `admin`, intl: p, adminLabel: ke })), (n[12] = p), (n[13] = ke), (n[14] = Ae))
    : (Ae = n[14]);
  let je = Ae,
    R;
  n[15] !== p || n[16] !== je || n[17] !== Oe || n[18] !== _e
    ? ((R = (e) => {
        let { scope: t, skillPath: n } = e;
        return Le({
          scope: t,
          intl: p,
          repoLabel: Ie({ skillPath: n, roots: _e, fallbackLabel: Oe }),
          adminLabel: je,
        });
      }),
      (n[15] = p),
      (n[16] = je),
      (n[17] = Oe),
      (n[18] = _e),
      (n[19] = R))
    : (R = n[19]);
  let Me = R,
    Ne;
  if (n[20] !== D || n[21] !== ge) {
    let e = D.trim().toLowerCase();
    ((Ne = ge.filter((t) => {
      let { skill: n } = t;
      if (e.length === 0) return !0;
      let r = o(n).toLowerCase(),
        i = te(n).toLowerCase();
      return n.name.toLowerCase().includes(e) || i.includes(e) || r.includes(e);
    })),
      (n[20] = D),
      (n[21] = ge),
      (n[22] = Ne));
  } else Ne = n[22];
  let Pe = Ne,
    Re;
  n[23] !== k || n[24] !== Se
    ? ((Re = async () => {
        (k(), await Se(), de(!1));
      }),
      (n[23] = k),
      (n[24] = Se),
      (n[25] = Re))
    : (Re = n[25]);
  let ze = Re,
    z;
  (n[26] === Symbol.for(`react.memo_cache_sentinel`) ? ((z = []), (n[26] = z)) : (z = n[26]),
    (0, qt.useEffect)(Vt, z));
  let Be;
  n[27] === ae
    ? (Be = n[28])
    : ((Be = ae
        ? null
        : (0, $.jsx)(a, {
            id: `skills.page.heading`,
            defaultMessage: `Skills`,
            description: `Header title for the skills page`,
          })),
      (n[27] = ae),
      (n[28] = Be));
  let B;
  n[29] !== x || n[30] !== w
    ? ((B =
        x != null && x.length > 0
          ? (0, $.jsx)(st, { connectedRemoteConnections: x, onSelectHost: ee, selectedHostId: w })
          : null),
      (n[29] = x),
      (n[30] = w),
      (n[31] = B))
    : (B = n[31]);
  let Ve = ue ? `secondary` : `ghost`,
    He;
  n[32] === ze
    ? (He = n[33])
    : ((He = () => {
        ze();
      }),
      (n[32] = ze),
      (n[33] = He));
  let V = O || he,
    H;
  n[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(c, { "aria-hidden": !1, asset: i })), (n[34] = H))
    : (H = n[34]);
  let U;
  n[35] === ue
    ? (U = n[36])
    : ((U = (0, $.jsx)(`span`, {
        className: `hidden lg:inline`,
        children: ue
          ? (0, $.jsx)(a, {
              id: `skills.page.refreshSkillsToUseNew`,
              defaultMessage: `Refresh to use new skill(s)`,
              description: `Button label shown when newly installed skills require a refresh before they can be used in the composer`,
            })
          : (0, $.jsx)(a, {
              id: `skills.page.refreshSkills`,
              defaultMessage: `Refresh`,
              description: `Button label for reloading skills list`,
            }),
      })),
      (n[35] = ue),
      (n[36] = U));
  let W;
  n[37] !== Ve || n[38] !== He || n[39] !== V || n[40] !== U
    ? ((W = (0, $.jsxs)(t, { color: Ve, size: `toolbar`, onClick: He, disabled: V, children: [H, U] })),
      (n[37] = Ve),
      (n[38] = He),
      (n[39] = V),
      (n[40] = U),
      (n[41] = W))
    : (W = n[41]);
  let G;
  n[42] === p
    ? (G = n[43])
    : ((G = p.formatMessage({
        id: `skills.page.search.label`,
        defaultMessage: `Search skills`,
        description: `Label for the skills page search input`,
      })),
      (n[42] = p),
      (n[43] = G));
  let K;
  n[44] === p
    ? (K = n[45])
    : ((K = p.formatMessage({
        id: `skills.page.search`,
        defaultMessage: `Search skills`,
        description: `Placeholder for the skills page search input`,
      })),
      (n[44] = p),
      (n[45] = K));
  let q;
  n[46] !== D || n[47] !== G || n[48] !== K
    ? ((q = (0, $.jsx)(`div`, {
        className: `hidden min-w-[160px] flex-1 lg:flex lg:w-[220px] lg:flex-none`,
        children: (0, $.jsx)(De, {
          id: `skills-search`,
          autoFocus: !0,
          label: G,
          placeholder: K,
          searchQuery: D,
          onSearchQueryChange: se,
        }),
      })),
      (n[46] = D),
      (n[47] = G),
      (n[48] = K),
      (n[49] = q))
    : (q = n[49]);
  let J;
  n[50] !== fe || n[51] !== d || n[52] !== A || n[53] !== _
    ? ((J = () => {
        if (!A) return;
        ye(d, f, {});
        let e = We({ creatorPath: A, includeStarterPrompt: !fe, kind: `skill` });
        (fe || d.set(Ge, !0), _({ prefillPrompt: e, startInSidebar: !0 }));
      }),
      (n[50] = fe),
      (n[51] = d),
      (n[52] = A),
      (n[53] = _),
      (n[54] = J))
    : (J = n[54]);
  let Y = !A,
    Ke,
    qe;
  n[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ke = (0, $.jsx)(c, { "aria-hidden": !1, asset: v })),
      (qe = (0, $.jsx)(a, {
        id: `skills.page.createSkill`,
        defaultMessage: `New skill`,
        description: `Button label for creating a new skill`,
      })),
      (n[55] = Ke),
      (n[56] = qe))
    : ((Ke = n[55]), (qe = n[56]));
  let Je;
  n[57] !== J || n[58] !== Y
    ? ((Je = (0, $.jsxs)(t, {
        color: `primary`,
        size: `toolbar`,
        onClick: J,
        disabled: Y,
        children: [Ke, qe],
      })),
      (n[57] = J),
      (n[58] = Y),
      (n[59] = Je))
    : (Je = n[59]);
  let Ye;
  n[60] !== B || n[61] !== W || n[62] !== q || n[63] !== Je
    ? ((Ye = (0, $.jsxs)(`div`, {
        className: `flex flex-nowrap items-center gap-1.5`,
        children: [B, W, q, Je],
      })),
      (n[60] = B),
      (n[61] = W),
      (n[62] = q),
      (n[63] = Je),
      (n[64] = Ye))
    : (Ye = n[64]);
  let X;
  n[65] !== Be || n[66] !== Ye
    ? ((X = (0, $.jsx)(Fe, { start: Be, trailing: Ye })), (n[65] = Be), (n[66] = Ye), (n[67] = X))
    : (X = n[67]);
  let Xe;
  n[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = (e) => {
        T(e);
      }),
      (n[68] = Xe))
    : (Xe = n[68]);
  let Ze;
  n[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ze = (e) => {
        ie(e);
      }),
      (n[69] = Ze))
    : (Ze = n[69]);
  let Qe;
  n[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qe = (0, $.jsx)(`div`, {
        className: `heading-xl font-normal text-default`,
        children: (0, $.jsx)(a, {
          id: `skills.page.heading`,
          defaultMessage: `Skills`,
          description: `Header title for the skills page`,
        }),
      })),
      (n[70] = Qe))
    : (Qe = n[70]);
  let rt;
  n[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = (0, $.jsx)(`div`, {
        className: `flex items-end justify-between gap-4`,
        children: (0, $.jsxs)(`div`, {
          className: `flex flex-col gap-1`,
          ref: Ze,
          children: [
            Qe,
            (0, $.jsx)(`div`, {
              className: `text-lg font-normal text-codex-description`,
              children: (0, $.jsx)(a, {
                id: `skills.page.subheading`,
                defaultMessage: `Add reusable workflows with Skills. <link>Learn more</link>`,
                description: `Subheading shown above the skills sections`,
                values: { link: Bt },
              }),
            }),
          ],
        }),
      })),
      (n[71] = rt))
    : (rt = n[71]);
  let it;
  n[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((it = (0, $.jsx)(a, {
        id: `skills.section.installed`,
        defaultMessage: `Installed`,
        description: `Heading for the installed skills section`,
      })),
      (n[72] = it))
    : (it = n[72]);
  let at;
  n[73] !== Pe || n[74] !== Me || n[75] !== O || n[76] !== k || n[77] !== w || n[78] !== ge.length
    ? ((at = (0, $.jsx)(Ut, {
        title: it,
        children: (0, $.jsx)(Wt, {
          hostId: w,
          isLoading: O,
          uniqueSkillCount: ge.length,
          filteredSkills: Pe,
          getScopeBadgeLabel: Me,
          onSkillsUpdated: k,
        }),
      })),
      (n[73] = Pe),
      (n[74] = Me),
      (n[75] = O),
      (n[76] = k),
      (n[77] = w),
      (n[78] = ge.length),
      (n[79] = at))
    : (at = n[79]);
  let ot;
  n[80] !== ve ||
  n[81] !== F ||
  n[82] !== me ||
  n[83] !== I ||
  n[84] !== M ||
  n[85] !== Ce ||
  n[86] !== Ee ||
  n[87] !== j ||
  n[88] !== D ||
  n[89] !== w
    ? ((ot = ve
        ? (0, $.jsx)(Ut, {
            title: (0, $.jsx)(a, {
              id: `skills.section.recommended`,
              defaultMessage: `Recommended`,
              description: `Heading for the recommended skills section`,
            }),
            children: (0, $.jsx)(Kt, {
              hostId: w,
              isLoading: M,
              errorMessage: j,
              skills: Ee,
              searchQuery: D,
              canInstall: !0,
              repoRoot: Ce,
              onInstall: F,
              installedSkillMatchKeys: me,
              installingSkillId: I,
            }),
          })
        : null),
      (n[80] = ve),
      (n[81] = F),
      (n[82] = me),
      (n[83] = I),
      (n[84] = M),
      (n[85] = Ce),
      (n[86] = Ee),
      (n[87] = j),
      (n[88] = D),
      (n[89] = w),
      (n[90] = ot))
    : (ot = n[90]);
  let ct;
  n[91] !== at || n[92] !== ot
    ? ((ct = (0, $.jsx)(`div`, {
        className: `flex-1 overflow-y-auto p-panel`,
        ref: Xe,
        children: (0, $.jsxs)(Ue, {
          className: `mx-auto flex min-h-full w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col gap-8`,
          children: [
            rt,
            (0, $.jsx)(`div`, {
              className: `flex min-h-0 w-full flex-1`,
              children: (0, $.jsxs)(`div`, {
                className: `flex min-h-0 flex-1 flex-col gap-9 pb-10`,
                children: [at, ot],
              }),
            }),
          ],
        }),
      })),
      (n[91] = at),
      (n[92] = ot),
      (n[93] = ct))
    : (ct = n[93]);
  let lt;
  return (
    n[94] !== X || n[95] !== ct
      ? ((lt = (0, $.jsxs)(`div`, { className: `me-4 flex h-full flex-col text-base`, children: [X, ct] })),
        (n[94] = X),
        (n[95] = ct),
        (n[96] = lt))
      : (lt = n[96]),
    lt
  );
}
function Bt(e) {
  return (0, $.jsx)(`a`, {
    href: O,
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `text-info`,
    children: e,
  });
}
function Vt() {
  return ((document.documentElement.dataset.hideHeaderDivider = `true`), Ht);
}
function Ht() {
  delete document.documentElement.dataset.hideHeaderDivider;
}
function Ut(e) {
  let t = (0, Q.c)(5),
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
function Wt(e) {
  let t = (0, Q.c)(14),
    {
      hostId: n,
      isLoading: r,
      uniqueSkillCount: i,
      filteredSkills: o,
      getScopeBadgeLabel: s,
      onSkillsUpdated: c,
    } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, $.jsx)(L, {
              children: (0, $.jsx)(a, {
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
              title: (0, $.jsx)(a, {
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
  if (o.length === 0) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, $.jsx)(E, {
              title: (0, $.jsx)(a, {
                id: `skills.page.filteredEmpty`,
                defaultMessage: `No skills match your filters`,
                description: `Empty state when filters hide all skills`,
              }),
              description: (0, $.jsx)(a, {
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
  if (t[3] !== o || t[4] !== s || t[5] !== n || t[6] !== c) {
    let e;
    (t[8] !== s || t[9] !== n || t[10] !== c
      ? ((e = (e) => {
          let { skill: t } = e,
            r =
              t.scope === `repo`
                ? [(0, $.jsx)(Gt, { label: s({ scope: `repo`, skillPath: t.path }) }, `${t.path}-repo`)]
                : [];
          return (0, $.jsx)(
            at,
            { skill: t, displayName: te(t), hostId: n, scopeBadges: r, onSkillsUpdated: c },
            t.path,
          );
        }),
        (t[8] = s),
        (t[9] = n),
        (t[10] = c),
        (t[11] = e))
      : (e = t[11]),
      (l = o.map(e)),
      (t[3] = o),
      (t[4] = s),
      (t[5] = n),
      (t[6] = c),
      (t[7] = l));
  } else l = t[7];
  let u;
  return (t[12] === l ? (u = t[13]) : ((u = (0, $.jsx)(V, { children: l })), (t[12] = l), (t[13] = u)), u);
}
function Gt(e) {
  let t = (0, Q.c)(2),
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
function Kt(e) {
  let t = (0, Q.c)(31),
    {
      hostId: n,
      isLoading: r,
      errorMessage: i,
      skills: o,
      searchQuery: s,
      canInstall: c,
      repoRoot: l,
      onInstall: u,
      installedSkillMatchKeys: d,
      installingSkillId: f,
    } = e,
    p,
    m,
    h;
  if (
    t[0] !== c ||
    t[1] !== i ||
    t[2] !== n ||
    t[3] !== d ||
    t[4] !== f ||
    t[5] !== r ||
    t[6] !== u ||
    t[7] !== l ||
    t[8] !== s ||
    t[9] !== o
  ) {
    h = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[13] === d
        ? (e = t[14])
        : ((e = (e) => !X({ installedSkillMatchKeys: d, skill: e })), (t[13] = d), (t[14] = e));
      let g = o.filter(e),
        _ = s.trim().toLowerCase(),
        v = g.filter(
          (e) =>
            _.length === 0 ||
            [e.name, e.description, e.shortDescription ?? ``].join(` `).toLowerCase().includes(_),
        );
      if (r) {
        let e;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, $.jsx)(L, {
                children: (0, $.jsx)(a, {
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
          ? ((e = (0, $.jsx)(a, {
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
                title: (0, $.jsx)(a, {
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
      if (v.length === 0) {
        let e;
        (t[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, $.jsx)(E, {
                title: (0, $.jsx)(a, {
                  id: `skills.page.filteredEmpty`,
                  defaultMessage: `No skills match your filters`,
                  description: `Empty state when filters hide all skills`,
                }),
                description: (0, $.jsx)(a, {
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
      p = V;
      let y;
      (t[21] !== c || t[22] !== n || t[23] !== d || t[24] !== f || t[25] !== u || t[26] !== l
        ? ((y = (e) => {
            let t = X({ installedSkillMatchKeys: d, skill: e }),
              r = f === e.id;
            return (0, $.jsx)(
              lt,
              {
                skill: e,
                canInstall: c,
                hostId: n,
                isInstalled: t,
                isInstalling: r,
                repoRoot: l,
                onInstall: u,
              },
              e.id,
            );
          }),
          (t[21] = c),
          (t[22] = n),
          (t[23] = d),
          (t[24] = f),
          (t[25] = u),
          (t[26] = l),
          (t[27] = y))
        : (y = t[27]),
        (m = v.map(y)));
    }
    ((t[0] = c),
      (t[1] = i),
      (t[2] = n),
      (t[3] = d),
      (t[4] = f),
      (t[5] = r),
      (t[6] = u),
      (t[7] = l),
      (t[8] = s),
      (t[9] = o),
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
var Q, qt, $;
function Jt() {
  return (Jt = e(() => {
    ((Q = C()),
      _e(),
      p(),
      u(),
      n(),
      d(),
      (qt = re()),
      x(),
      _(),
      j(),
      D(),
      ae(),
      ee(),
      l(),
      N(),
      R(),
      de(),
      Ae(),
      M(),
      Me(),
      w(),
      ot(),
      ue(),
      P(),
      I(),
      Ee(),
      ze(),
      A(),
      Ze(),
      Ce(),
      ct(),
      it(),
      S(),
      H(),
      rt(),
      Pe(),
      Ne(),
      vt(),
      Ft(),
      U(),
      pt(),
      q(),
      ($ = T()),
      F(fe));
  }))();
}
export { Jt as n, It as t };
//# sourceMappingURL=skills-page-cc58e762964c.js.map
