import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $X as r,
  ADt as i,
  IDt as a,
  Mz as o,
  Nz as s,
  Pxt as c,
  VDt as l,
  Vxt as u,
  cz as d,
  eZ as f,
  hk as p,
  jDt as m,
  ldt as h,
  mk as g,
  pM as _,
  sz as v,
  t3 as y,
  uM as b,
  vF as x,
  vzt as S,
  xMt as C,
  yF as w,
  yzt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  ACn as E,
  BYt as D,
  IYt as O,
  Ka as k,
  Stn as A,
  Xa as j,
  Za as M,
  btn as N,
  co as ee,
  jCn as P,
  lo as te,
  mF as ne,
  pF as F,
  ytn as I,
} from "./app-initial-5851df3f6cb1.js";
import { ou as L, su as R } from "./app-primary-fe8a450b3b04.js";
import { n as z, r as B } from "./computer-history-suggestion-prompt-64e6bcbf5cac.js";
import { a as V, n as H } from "./computer-history-suggestions-1ba6cfc98a5b.js";
import { n as U, r as re } from "./skills-page-grid-5f717c30cada.js";
import { o as W, s as ie } from "./plugin-origin-badge-1e1f880d2dac.js";
import { n as ae, t as oe } from "./installed-card-actions-6e3c5fc1435c.js";
import { i as se, o as ce } from "./plugins-page-selectors-463d7aa7d76e.js";
import {
  a as le,
  c as ue,
  l as de,
  n as fe,
  o as pe,
  r as me,
  s as he,
  t as ge,
} from "./skill-card-95c13f424f06.js";
function _e(e) {
  let t = (0, G.c)(37),
    {
      skill: r,
      canInstall: i,
      hostId: o,
      isHighlighted: s,
      isInstalled: c,
      isInstalling: u,
      repoRoot: d,
      onInstall: f,
    } = e,
    p = s !== void 0 && s,
    m = l(),
    h = r.shortDescription && r.shortDescription.length > 0 ? r.shortDescription : r.description,
    g;
  t[0] !== d || t[1] !== r.repoPath
    ? ((g = ye({ repoRoot: d, repoPath: r.repoPath })), (t[0] = d), (t[1] = r.repoPath), (t[2] = g))
    : (g = t[2]);
  let _ = g,
    y;
  t[3] === r.name ? (y = t[4]) : ((y = x(r.name)), (t[3] = r.name), (t[4] = y));
  let b = y,
    S = r.iconLarge ? `large` : `small`,
    C;
  t[5] !== r || t[6] !== _ || t[7] !== S
    ? ((C = (0, q.jsx)(be, { skill: r, size: S, basePath: _ })),
      (t[5] = r),
      (t[6] = _),
      (t[7] = S),
      (t[8] = C))
    : (C = t[8]);
  let w = C,
    T = c || !i || u,
    E;
  t[9] !== m || t[10] !== T || t[11] !== c || t[12] !== u || t[13] !== f || t[14] !== r
    ? ((E = c
        ? (0, q.jsx)(oe, {
            enabledStatusAriaLabel: m.formatMessage(J.installed),
            isEnabled: !0,
            isUninstalling: !1,
            isUpdating: !1,
          })
        : (0, q.jsx)(v, {
            tooltipContent: (0, q.jsx)(a, { ...J.installSkill }),
            children: (0, q.jsx)(n, {
              "aria-label": m.formatMessage(J.installSkill),
              color: `secondary`,
              size: `composer`,
              disabled: T,
              loading: u,
              onClick: (e) => {
                (e.stopPropagation(), !T && f(r, null));
              },
              children: (0, q.jsx)(a, { ...J.installSkill }),
            }),
          })),
      (t[9] = m),
      (t[10] = T),
      (t[11] = c),
      (t[12] = u),
      (t[13] = f),
      (t[14] = r),
      (t[15] = E))
    : (E = t[15]);
  let D = E,
    O;
  t[16] === b ? (O = t[17]) : ((O = (0, q.jsx)(j, { kind: `Skill`, title: b })), (t[16] = b), (t[17] = O));
  let A;
  t[18] !== b || t[19] !== o || t[20] !== _
    ? ((A = (e) => {
        let { isOpen: t } = e;
        return (0, q.jsx)(k, { hostId: o, isOpen: t, skillPath: _, titleText: b });
      }),
      (t[18] = b),
      (t[19] = o),
      (t[20] = _),
      (t[21] = A))
    : (A = t[21]);
  let M;
  t[22] !== i || t[23] !== c || t[24] !== u || t[25] !== f || t[26] !== r
    ? ((M = (0, q.jsx)(ve, { canInstall: i, installing: u, isInstalled: c, onInstall: f, skill: r })),
      (t[22] = i),
      (t[23] = c),
      (t[24] = u),
      (t[25] = f),
      (t[26] = r),
      (t[27] = M))
    : (M = t[27]);
  let N;
  return (
    t[28] !== D ||
    t[29] !== h ||
    t[30] !== b ||
    t[31] !== p ||
    t[32] !== w ||
    t[33] !== O ||
    t[34] !== A ||
    t[35] !== M
      ? ((N = (0, q.jsx)(le, {
          cardIcon: w,
          cardTitle: b,
          cardDescription: h,
          cardActions: D,
          isHighlighted: p,
          modalTitle: O,
          modalTitleText: b,
          modalDescription: h,
          modalBody: A,
          modalFooter: M,
        })),
        (t[28] = D),
        (t[29] = h),
        (t[30] = b),
        (t[31] = p),
        (t[32] = w),
        (t[33] = O),
        (t[34] = A),
        (t[35] = M),
        (t[36] = N))
      : (N = t[36]),
    N
  );
}
function ve(e) {
  let t = (0, G.c)(13),
    { canInstall: r, installing: i, isInstalled: s, onInstall: c, skill: l } = e,
    u = s || !r || i,
    d;
  t[0] !== c || t[1] !== l
    ? ((d = (e) => {
        (e.stopPropagation(), c(l, null));
      }),
      (t[0] = c),
      (t[1] = l),
      (t[2] = d))
    : (d = t[2]);
  let p;
  t[3] === u
    ? (p = t[4])
    : ((p = u ? null : (0, q.jsx)(o, { "aria-hidden": !1, asset: f })), (t[3] = u), (t[4] = p));
  let m;
  t[5] === s
    ? (m = t[6])
    : ((m = s
        ? (0, q.jsx)(a, { ...J.installed })
        : (0, q.jsx)(a, {
            id: `skills.recommended.install`,
            defaultMessage: `Install skill`,
            description: `Button label to install a recommended skill`,
          })),
      (t[5] = s),
      (t[6] = m));
  let h;
  return (
    t[7] !== i || t[8] !== u || t[9] !== d || t[10] !== p || t[11] !== m
      ? ((h = (0, q.jsx)(`div`, {
          className: `flex w-full justify-end`,
          children: (0, q.jsxs)(n, {
            color: `primary`,
            size: `toolbar`,
            disabled: u,
            loading: i,
            onClick: d,
            children: [p, m],
          }),
        })),
        (t[7] = i),
        (t[8] = u),
        (t[9] = d),
        (t[10] = p),
        (t[11] = m),
        (t[12] = h))
      : (h = t[12]),
    h
  );
}
function ye({ repoRoot: e, repoPath: t }) {
  if (!e) return null;
  let n = t.split(`/`).join(K.default.sep),
    r = K.default.join(e, n);
  return r.toLowerCase().endsWith(`.md`) ? r : K.default.join(r, `SKILL.md`);
}
function be(e) {
  let t = (0, G.c)(16),
    { skill: n, size: r, basePath: i } = e,
    a = r === void 0 ? `small` : r,
    o = !!n.iconLarge,
    s;
  a === `small` ? (s = 24) : o || (s = 20);
  let c, l;
  if (
    t[0] !== i ||
    t[1] !== s ||
    t[2] !== o ||
    t[3] !== a ||
    t[4] !== n.description ||
    t[5] !== n.iconLarge ||
    t[6] !== n.iconSmall ||
    t[7] !== n.name
  ) {
    let e = I(null, {
        size: a,
        fallbackSize: s,
        fallbackClassName: `text-secondary`,
        iconSmall: n.iconSmall,
        iconLarge: n.iconLarge,
        basePath: i,
        alt: n.name,
        fallbackName: n.name,
        fallbackDescription: n.description,
      }),
      r;
    t[10] !== o || t[11] !== a
      ? ((r = me({ size: a, hasLargeIcon: o, largeFallbackClassName: `h-5 w-5` })),
        (t[10] = o),
        (t[11] = a),
        (t[12] = r))
      : (r = t[12]);
    let u = `${r} text-secondary`;
    ((c = e),
      (l = N(e, u, `text-secondary`)),
      (t[0] = i),
      (t[1] = s),
      (t[2] = o),
      (t[3] = a),
      (t[4] = n.description),
      (t[5] = n.iconLarge),
      (t[6] = n.iconSmall),
      (t[7] = n.name),
      (t[8] = c),
      (t[9] = l));
  } else ((c = t[8]), (l = t[9]));
  let u;
  return (
    t[13] !== c || t[14] !== l
      ? ((u = (0, q.jsx)(c, { ...l })), (t[13] = c), (t[14] = l), (t[15] = u))
      : (u = t[15]),
    u
  );
}
var G, K, q, J;
function Y() {
  return (Y = e(() => {
    ((G = S()),
      r(),
      (K = t(h(), 1)),
      w(),
      m(),
      y(),
      s(),
      d(),
      ae(),
      A(),
      pe(),
      M(),
      (q = C()),
      (J = i({
        installSkill: {
          id: `skills.recommended.connectSkill`,
          defaultMessage: `Install skill`,
          description: `Button label for installing a recommended skill`,
        },
        installed: {
          id: `skills.recommended.installed`,
          defaultMessage: `Installed`,
          description: `Label for installed recommended skills`,
        },
      })));
  }))();
}
function xe(e) {
  let t = (0, Se.c)(25),
    { isHighlighted: r, suggestion: i } = e,
    o = r !== void 0 && r,
    s = l(),
    c = D(),
    u;
  t[0] !== s || t[1] !== c || t[2] !== i
    ? ((u = () => {
        c({ prefillPrompt: z({ intl: s, memoryFilePath: i.memoryFilePath, suggestion: i }) });
      }),
      (t[0] = s),
      (t[1] = c),
      (t[2] = i),
      (t[3] = u))
    : (u = t[3]);
  let d = u,
    f;
  t[4] !== i.description || t[5] !== i.name
    ? ((f = (0, Ce.createElement)(I(null, { fallbackDescription: i.description, fallbackName: i.name }), {
        className: `icon-sm`,
      })),
      (t[4] = i.description),
      (t[5] = i.name),
      (t[6] = f))
    : (f = t[6]);
  let p = f,
    m;
  t[7] === d
    ? (m = t[8])
    : ((m = (e) => {
        (e.stopPropagation(), d());
      }),
      (t[7] = d),
      (t[8] = m));
  let h;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, X.jsx)(a, {
        id: `skills.computerHistorySuggestions.createSkill`,
        defaultMessage: `Create skill`,
        description: `Button for creating a skill suggested from Computer History`,
      })),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] === m
    ? (g = t[11])
    : ((g = (0, X.jsx)(n, { color: `secondary`, size: `composer`, onClick: m, children: h })),
      (t[10] = m),
      (t[11] = g));
  let _;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, X.jsx)(a, {
        id: `skills.computerHistorySuggestions.createSkill`,
        defaultMessage: `Create skill`,
        description: `Button for creating a skill suggested from Computer History`,
      })),
      (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] === d
    ? (v = t[14])
    : ((v = (0, X.jsx)(`div`, {
        className: `flex w-full justify-end`,
        children: (0, X.jsx)(n, { color: `primary`, size: `toolbar`, onClick: d, children: _ }),
      })),
      (t[13] = d),
      (t[14] = v));
  let y;
  t[15] === i.name
    ? (y = t[16])
    : ((y = (0, X.jsx)(j, { kind: `Skill`, title: i.name })), (t[15] = i.name), (t[16] = y));
  let b;
  return (
    t[17] !== o ||
    t[18] !== p ||
    t[19] !== i.description ||
    t[20] !== i.name ||
    t[21] !== g ||
    t[22] !== v ||
    t[23] !== y
      ? ((b = (0, X.jsx)(le, {
          cardActions: g,
          cardDescription: i.description,
          cardIcon: p,
          cardTitle: i.name,
          isHighlighted: o,
          modalBody: null,
          modalDescription: i.description,
          modalFooter: v,
          modalTitle: y,
          modalTitleText: i.name,
        })),
        (t[17] = o),
        (t[18] = p),
        (t[19] = i.description),
        (t[20] = i.name),
        (t[21] = g),
        (t[22] = v),
        (t[23] = y),
        (t[24] = b))
      : (b = t[24]),
    b
  );
}
var Se, Ce, X;
function we() {
  return (we = e(() => {
    ((Se = S()), (Ce = T()), m(), B(), y(), O(), A(), pe(), M(), (X = C()));
  }))();
}
function Te(e) {
  let t = (0, Q.c)(96),
    {
      canInstallRecommendedSkills: n,
      errorMessage: r,
      installedStateAction: i,
      installedSkillGroups: o,
      installedSkills: s,
      installedSkillsForRecommendedActions: c,
      installedRecommendedSkillIds: u,
      highlightedInstalledSkillPath: d,
      highlightedRecommendedSkillId: f,
      highlightedSuggestedSkillId: p,
      hostId: m,
      installingSkillId: h,
      isLoadingInstalledSkills: g,
      isLoadingRecommendedSkills: _,
      onInstallRecommendedSkill: v,
      onInstalledRecommendedSkillUpdated: y,
      onSelectSection: b,
      onSkillsUpdated: x,
      recommendedRepoRoot: S,
      recommendedSkills: C,
      roots: w,
      selectedSectionId: T,
      suggestedSkills: D,
      searchResultsTitle: O,
      installedSection: k,
      recommendedSection: A,
    } = e,
    j = i === void 0 ? `check` : i,
    M = l(),
    N;
  if (t[0] !== u || t[1] !== c || t[2] !== C) {
    let e;
    (t[4] !== u || t[5] !== c
      ? ((e = (e) => {
          let t = u.has(e.id);
          return {
            installedSkill: t ? se({ installedSkills: c, skill: e }) : null,
            isInstalled: t,
            skill: e,
          };
        }),
        (t[4] = u),
        (t[5] = c),
        (t[6] = e))
      : (e = t[6]),
      (N = C.map(e)),
      (t[0] = u),
      (t[1] = c),
      (t[2] = C),
      (t[3] = N));
  } else N = t[3];
  let P = N,
    te = k != null && (o.length > 0 || s.length > 0),
    ne = A != null && P.length > 0;
  if (!g && !_ && r == null && !te && !ne && D.length === 0) {
    let e;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center py-8`,
            children: (0, $.jsx)(E, {
              title: (0, $.jsx)(a, {
                id: `skills.appsPage.empty.skills`,
                defaultMessage: `No skills found`,
                description: `Empty state title when no skills match filters on the Skills & Apps page`,
              }),
            }),
          })),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  if (O != null) {
    let e;
    t[8] !== p || t[9] !== D
      ? ((e = (0, $.jsx)(De, { highlightedSuggestionId: p, suggestions: D })),
        (t[8] = p),
        (t[9] = D),
        (t[10] = e))
      : (e = t[10]);
    let i;
    t[11] !== n ||
    t[12] !== r ||
    t[13] !== d ||
    t[14] !== f ||
    t[15] !== m ||
    t[16] !== s ||
    t[17] !== j ||
    t[18] !== h ||
    t[19] !== g ||
    t[20] !== _ ||
    t[21] !== v ||
    t[22] !== y ||
    t[23] !== x ||
    t[24] !== S ||
    t[25] !== P ||
    t[26] !== w ||
    t[27] !== O
      ? ((i =
          s.length > 0 || P.length > 0
            ? (0, $.jsx)(W, {
                count: s.length + P.length,
                id: `skills-search-results`,
                title: O,
                children: (0, $.jsxs)(`div`, {
                  className: `flex flex-col gap-3`,
                  children: [
                    s.length > 0
                      ? (0, $.jsx)(Z, {
                          hostId: m,
                          installedStateAction: j,
                          highlightedSkillPath: d,
                          isLoading: g,
                          roots: w,
                          skillEntries: s,
                          onSkillsUpdated: x,
                        })
                      : null,
                    P.length > 0
                      ? (0, $.jsx)(Pe, {
                          canInstall: n,
                          errorMessage: r,
                          highlightInstalledSkills: !1,
                          hostId: m,
                          highlightedSkillId: f,
                          entries: P,
                          installingSkillId: h,
                          isLoading: _,
                          onInstall: v,
                          onSkillsUpdated: y,
                          repoRoot: S,
                          roots: w,
                          showAll: !0,
                        })
                      : null,
                  ],
                }),
              })
            : null),
        (t[11] = n),
        (t[12] = r),
        (t[13] = d),
        (t[14] = f),
        (t[15] = m),
        (t[16] = s),
        (t[17] = j),
        (t[18] = h),
        (t[19] = g),
        (t[20] = _),
        (t[21] = v),
        (t[22] = y),
        (t[23] = x),
        (t[24] = S),
        (t[25] = P),
        (t[26] = w),
        (t[27] = O),
        (t[28] = i))
      : (i = t[28]);
    let a;
    return (
      t[29] !== e || t[30] !== i
        ? ((a = (0, $.jsxs)(`div`, { className: `flex flex-1 flex-col gap-8 pb-panel`, children: [e, i] })),
          (t[29] = e),
          (t[30] = i),
          (t[31] = a))
        : (a = t[31]),
      a
    );
  }
  let F, I, L, R, z;
  if (
    t[32] !== p ||
    t[33] !== m ||
    t[34] !== k ||
    t[35] !== o ||
    t[36] !== s ||
    t[37] !== j ||
    t[38] !== M ||
    t[39] !== g ||
    t[40] !== b ||
    t[41] !== x ||
    t[42] !== A ||
    t[43] !== w ||
    t[44] !== T ||
    t[45] !== D
  ) {
    let e = Be(o, A),
      n;
    if (t[51] !== o || t[52] !== T) {
      let e;
      (t[54] === T ? (e = t[55]) : ((e = (e) => e.id === T), (t[54] = T), (t[55] = e)),
        (n = o.find(e)),
        (t[51] = o),
        (t[52] = T),
        (t[53] = n));
    } else n = t[53];
    ((F = n),
      (I = `flex flex-1 flex-col gap-8 pb-panel`),
      t[56] !== p || t[57] !== D
        ? ((L = (0, $.jsx)(De, { highlightedSuggestionId: p, suggestions: D })),
          (t[56] = p),
          (t[57] = D),
          (t[58] = L))
        : (L = t[58]),
      t[59] !== m || t[60] !== k || t[61] !== s || t[62] !== j || t[63] !== g || t[64] !== x || t[65] !== w
        ? ((R =
            k == null
              ? null
              : (0, $.jsx)(W, {
                  id: k.id,
                  title: (0, $.jsx)(a, {
                    id: `skills.appsPage.section.installedSkillsOverview`,
                    defaultMessage: `Installed`,
                    description: `Heading for skills installed in Codex`,
                  }),
                  children: (0, $.jsx)(Z, {
                    hostId: m,
                    installedStateAction: j,
                    isLoading: g,
                    maxVisibleSkills: 6,
                    roots: w,
                    skillEntries: s,
                    onSkillsUpdated: x,
                  }),
                })),
          (t[59] = m),
          (t[60] = k),
          (t[61] = s),
          (t[62] = j),
          (t[63] = g),
          (t[64] = x),
          (t[65] = w),
          (t[66] = R))
        : (R = t[66]),
      (z =
        e.length > 0 && T != null
          ? (0, $.jsx)(ee, {
              className: `mb-2`,
              variant: `browse`,
              scrollable: !0,
              ariaLabel: M.formatMessage({
                id: `skills.appsPage.skillDirectoryTabs.ariaLabel`,
                defaultMessage: `Skill directory`,
                description: `Accessible label for skill sections on the Skills page`,
              }),
              tabs: e.map(Ee),
              selectedKey: T,
              onSelect: b,
            })
          : null),
      (t[32] = p),
      (t[33] = m),
      (t[34] = k),
      (t[35] = o),
      (t[36] = s),
      (t[37] = j),
      (t[38] = M),
      (t[39] = g),
      (t[40] = b),
      (t[41] = x),
      (t[42] = A),
      (t[43] = w),
      (t[44] = T),
      (t[45] = D),
      (t[46] = F),
      (t[47] = I),
      (t[48] = L),
      (t[49] = R),
      (t[50] = z));
  } else ((F = t[46]), (I = t[47]), (L = t[48]), (R = t[49]), (z = t[50]));
  let B;
  t[67] !== d || t[68] !== m || t[69] !== j || t[70] !== g || t[71] !== x || t[72] !== w || t[73] !== F
    ? ((B =
        F == null
          ? null
          : (0, $.jsx)(Z, {
              hostId: m,
              installedStateAction: j,
              highlightedSkillPath: d,
              isLoading: g,
              maxVisibleSkills: 6,
              onSkillsUpdated: x,
              roots: w,
              skillEntries: F.skillEntries,
            })),
      (t[67] = d),
      (t[68] = m),
      (t[69] = j),
      (t[70] = g),
      (t[71] = x),
      (t[72] = w),
      (t[73] = F),
      (t[74] = B))
    : (B = t[74]);
  let V;
  t[75] !== n ||
  t[76] !== r ||
  t[77] !== f ||
  t[78] !== m ||
  t[79] !== h ||
  t[80] !== _ ||
  t[81] !== v ||
  t[82] !== y ||
  t[83] !== S ||
  t[84] !== A?.id ||
  t[85] !== P ||
  t[86] !== w ||
  t[87] !== T
    ? ((V =
        A?.id === T
          ? (0, $.jsx)(Pe, {
              canInstall: n,
              errorMessage: r,
              highlightInstalledSkills: !0,
              hostId: m,
              highlightedSkillId: f,
              entries: P,
              installingSkillId: h,
              isLoading: _,
              onInstall: v,
              onSkillsUpdated: y,
              repoRoot: S,
              roots: w,
            })
          : null),
      (t[75] = n),
      (t[76] = r),
      (t[77] = f),
      (t[78] = m),
      (t[79] = h),
      (t[80] = _),
      (t[81] = v),
      (t[82] = y),
      (t[83] = S),
      (t[84] = A?.id),
      (t[85] = P),
      (t[86] = w),
      (t[87] = T),
      (t[88] = V))
    : (V = t[88]);
  let H;
  return (
    t[89] !== I || t[90] !== L || t[91] !== R || t[92] !== z || t[93] !== B || t[94] !== V
      ? ((H = (0, $.jsxs)(`div`, { className: I, children: [L, R, z, B, V] })),
        (t[89] = I),
        (t[90] = L),
        (t[91] = R),
        (t[92] = z),
        (t[93] = B),
        (t[94] = V),
        (t[95] = H))
      : (H = t[95]),
    H
  );
}
function Ee(e) {
  let { id: t, label: n } = e;
  return { key: t, name: n };
}
function De(e) {
  let t = (0, Q.c)(24),
    { highlightedSuggestionId: n, suggestions: r } = e,
    { unreadSkillsSuggestions: i } = u(H),
    o;
  t[0] === i ? (o = t[1]) : ((o = () => new Set(i.map(Oe))), (t[0] = i), (t[1] = o));
  let [s] = (0, Ve.useState)(o);
  if (r.length === 0) return null;
  let c;
  if (t[2] !== s || t[3] !== r || t[4] !== i) {
    let e;
    (t[6] !== s || t[7] !== i
      ? ((e = (e) => {
          let { id: t } = e;
          return s.has(t) || i.some((e) => e.id === t);
        }),
        (t[6] = s),
        (t[7] = i),
        (t[8] = e))
      : (e = t[8]),
      (c = r.some(e)),
      (t[2] = s),
      (t[3] = r),
      (t[4] = i),
      (t[5] = c));
  } else c = t[5];
  let l = c,
    d;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(a, {
        id: `skills.computerHistorySuggestions.sectionTitle`,
        defaultMessage: `Based on your Computer History`,
        description: `Heading for personalized skills suggested from the user's Computer History`,
      })),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === l
    ? (f = t[11])
    : ((f = l
        ? (0, $.jsx)(`span`, {
            "aria-hidden": !0,
            className: `ms-0.5 size-1.5 shrink-0 rounded-full bg-text-info`,
          })
        : null),
      (t[10] = l),
      (t[11] = f));
  let p;
  t[12] === f ? (p = t[13]) : ((p = (0, $.jsxs)($.Fragment, { children: [d, f] })), (t[12] = f), (t[13] = p));
  let m;
  if (t[14] !== n || t[15] !== r) {
    let e;
    (t[17] === n
      ? (e = t[18])
      : ((e = (e) => (0, $.jsx)(xe, { isHighlighted: e.id === n, suggestion: e }, e.id)),
        (t[17] = n),
        (t[18] = e)),
      (m = r.map(e)),
      (t[14] = n),
      (t[15] = r),
      (t[16] = m));
  } else m = t[16];
  let h;
  t[19] === m ? (h = t[20]) : ((h = (0, $.jsx)(U, { children: m })), (t[19] = m), (t[20] = h));
  let g;
  return (
    t[21] !== p || t[22] !== h
      ? ((g = (0, $.jsx)(W, { id: `computer-history-suggested-skills`, title: p, children: h })),
        (t[21] = p),
        (t[22] = h),
        (t[23] = g))
      : (g = t[23]),
    g
  );
}
function Oe(e) {
  let { id: t } = e;
  return t;
}
function Z(e) {
  let t = (0, Q.c)(36),
    {
      gap: n,
      hostId: r,
      highlightedSkillPath: i,
      installedStateAction: o,
      isLoading: s,
      isSingleColumn: c,
      maxVisibleSkills: l,
      roots: u,
      skillEntries: d,
      useCompactEmptyState: f,
      onSkillsUpdated: p,
    } = e,
    m = o === void 0 ? `check` : o,
    h = c !== void 0 && c,
    g = f !== void 0 && f;
  if (s) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center py-8`,
            children: (0, $.jsx)(F, {
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
  if (d.length === 0) {
    let e;
    return (
      t[1] === g
        ? (e = t[2])
        : ((e = (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center py-8`,
            children: g
              ? (0, $.jsx)(`div`, {
                  className: `text-sm text-secondary`,
                  children: (0, $.jsx)(a, {
                    id: `skills.appsPage.empty.skills`,
                    defaultMessage: `No skills found`,
                    description: `Empty state title when no skills match filters on the Skills & Apps page`,
                  }),
                })
              : (0, $.jsx)(E, {
                  title: (0, $.jsx)(a, {
                    id: `skills.appsPage.empty.skills`,
                    defaultMessage: `No skills found`,
                    description: `Empty state title when no skills match filters on the Skills & Apps page`,
                  }),
                }),
          })),
          (t[1] = g),
          (t[2] = e)),
      e
    );
  }
  if (l == null) {
    let e = n ?? `default`,
      a;
    return (
      t[3] !== i ||
      t[4] !== r ||
      t[5] !== m ||
      t[6] !== h ||
      t[7] !== p ||
      t[8] !== u ||
      t[9] !== d ||
      t[10] !== e
        ? ((a = (0, $.jsx)(je, {
            gap: e,
            hostId: r,
            highlightedSkillPath: i,
            installedStateAction: m,
            isSingleColumn: h,
            roots: u,
            skillEntries: d,
            onSkillsUpdated: p,
          })),
          (t[3] = i),
          (t[4] = r),
          (t[5] = m),
          (t[6] = h),
          (t[7] = p),
          (t[8] = u),
          (t[9] = d),
          (t[10] = e),
          (t[11] = a))
        : (a = t[11]),
      a
    );
  }
  let _;
  t[12] !== l || t[13] !== d.length
    ? ((_ = ze({ itemCount: d.length, visibleItemLimit: l })), (t[12] = l), (t[13] = d.length), (t[14] = _))
    : (_ = t[14]);
  let v = _;
  if (v == null) {
    let e = n ?? `default`,
      a;
    return (
      t[15] !== i ||
      t[16] !== r ||
      t[17] !== m ||
      t[18] !== h ||
      t[19] !== p ||
      t[20] !== u ||
      t[21] !== d ||
      t[22] !== e
        ? ((a = (0, $.jsx)(je, {
            gap: e,
            hostId: r,
            highlightedSkillPath: i,
            installedStateAction: m,
            isSingleColumn: h,
            roots: u,
            skillEntries: d,
            onSkillsUpdated: p,
          })),
          (t[15] = i),
          (t[16] = r),
          (t[17] = m),
          (t[18] = h),
          (t[19] = p),
          (t[20] = u),
          (t[21] = d),
          (t[22] = e),
          (t[23] = a))
        : (a = t[23]),
      a
    );
  }
  let y;
  t[24] !== n || t[25] !== i || t[26] !== r || t[27] !== m || t[28] !== h || t[29] !== p || t[30] !== u
    ? ((y = (e) =>
        (0, $.jsx)(je, {
          gap: n ?? `compact`,
          hostId: r,
          highlightedSkillPath: i,
          installedStateAction: m,
          isSingleColumn: h,
          roots: u,
          skillEntries: e,
          onSkillsUpdated: p,
        })),
      (t[24] = n),
      (t[25] = i),
      (t[26] = r),
      (t[27] = m),
      (t[28] = h),
      (t[29] = p),
      (t[30] = u),
      (t[31] = y))
    : (y = t[31]);
  let b;
  return (
    t[32] !== d || t[33] !== y || t[34] !== v
      ? ((b = (0, $.jsx)(ue, { items: d, visibleItemLimit: v, renderExpandRow: ke, children: y })),
        (t[32] = d),
        (t[33] = y),
        (t[34] = v),
        (t[35] = b))
      : (b = t[35]),
    b
  );
}
function ke(e) {
  let { hiddenItems: t, isExpanded: n, onToggle: r } = e;
  return (0, $.jsx)(Re, { isExpanded: n, skillNames: t.map(Ae), onClick: r });
}
function Ae(e) {
  let { skill: t } = e;
  return b(t);
}
function je(e) {
  let t = (0, Q.c)(17),
    {
      gap: n,
      hostId: r,
      highlightedSkillPath: i,
      installedStateAction: a,
      isSingleColumn: o,
      roots: s,
      skillEntries: c,
      onSkillsUpdated: l,
    } = e,
    u = n === void 0 ? `default` : n,
    d;
  if (t[0] !== i || t[1] !== r || t[2] !== a || t[3] !== l || t[4] !== s || t[5] !== c) {
    let e;
    (t[7] !== i || t[8] !== r || t[9] !== a || t[10] !== l || t[11] !== s
      ? ((e = (e) => {
          let { skill: t } = e;
          return (0, $.jsx)(
            Me,
            {
              installedStateAction: a,
              hostId: r,
              isHighlighted: i === t.path,
              onSkillsUpdated: l,
              roots: s,
              skill: t,
            },
            t.path,
          );
        }),
        (t[7] = i),
        (t[8] = r),
        (t[9] = a),
        (t[10] = l),
        (t[11] = s),
        (t[12] = e))
      : (e = t[12]),
      (d = c.map(e)),
      (t[0] = i),
      (t[1] = r),
      (t[2] = a),
      (t[3] = l),
      (t[4] = s),
      (t[5] = c),
      (t[6] = d));
  } else d = t[6];
  let f;
  return (
    t[13] !== u || t[14] !== o || t[15] !== d
      ? ((f = (0, $.jsx)(U, { gap: u, isSingleColumn: o, children: d })),
        (t[13] = u),
        (t[14] = o),
        (t[15] = d),
        (t[16] = f))
      : (f = t[16]),
    f
  );
}
function Me(e) {
  let t = (0, Q.c)(20),
    { hostId: n, installedStateAction: r, isHighlighted: i, onSkillsUpdated: a, roots: o, skill: s } = e,
    c = l(),
    u;
  t[0] !== r || t[1] !== c || t[2] !== o || t[3] !== s
    ? ((u = r === `toggle` ? L({ skill: s, roots: o, intl: c }) : void 0),
      (t[0] = r),
      (t[1] = c),
      (t[2] = o),
      (t[3] = s),
      (t[4] = u))
    : (u = t[4]);
  let d = u,
    f;
  t[5] === r ? (f = t[6]) : ((f = r === `toggle` ? (0, $.jsx)(Ne, {}) : void 0), (t[5] = r), (t[6] = f));
  let p = r !== `toggle`,
    m;
  t[7] === s ? (m = t[8]) : ((m = b(s)), (t[7] = s), (t[8] = m));
  let h;
  t[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = []), (t[9] = h)) : (h = t[9]);
  let g;
  return (
    t[10] !== d ||
    t[11] !== n ||
    t[12] !== r ||
    t[13] !== i ||
    t[14] !== a ||
    t[15] !== s ||
    t[16] !== f ||
    t[17] !== p ||
    t[18] !== m
      ? ((g = (0, $.jsx)(ge, {
          cardIcon: f,
          cardIconContainer: p,
          actionLabel: d,
          displayName: m,
          hostId: n,
          installedStateAction: r,
          isHighlighted: i,
          onSkillsUpdated: a,
          scopeBadges: h,
          skill: s,
        })),
        (t[10] = d),
        (t[11] = n),
        (t[12] = r),
        (t[13] = i),
        (t[14] = a),
        (t[15] = s),
        (t[16] = f),
        (t[17] = p),
        (t[18] = m),
        (t[19] = g))
      : (g = t[19]),
    g
  );
}
function Ne() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`span`, {
          className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-default text-secondary`,
          children: (0, $.jsx)(g, { className: `icon-sm` }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Pe(e) {
  let t = (0, Q.c)(17),
    {
      canInstall: n,
      entries: r,
      errorMessage: i,
      highlightInstalledSkills: o,
      hostId: s,
      highlightedSkillId: c,
      installingSkillId: l,
      isLoading: u,
      onInstall: d,
      onSkillsUpdated: f,
      repoRoot: p,
      roots: m,
      showAll: h,
    } = e,
    g = h !== void 0 && h;
  if (u) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center py-8`,
            children: (0, $.jsx)(F, {
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
  if (i) {
    let e;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(a, {
          id: `skills.recommended.error`,
          defaultMessage: `Unable to load recommended skills`,
          description: `Error title when recommended skills fail to load`,
        })),
        (t[1] = e))
      : (e = t[1]);
    let n;
    return (
      t[2] === i
        ? (n = t[3])
        : ((n = (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center py-8`,
            children: (0, $.jsx)(E, { title: e, description: i }),
          })),
          (t[2] = i),
          (t[3] = n)),
      n
    );
  }
  if (r.length === 0) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center py-8`,
            children: (0, $.jsx)(E, {
              title: (0, $.jsx)(a, {
                id: `skills.appsPage.empty.skills`,
                defaultMessage: `No skills found`,
                description: `Empty state title when no skills match filters on the Skills & Apps page`,
              }),
            }),
          })),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let _;
  return (
    t[5] !== n ||
    t[6] !== r ||
    t[7] !== o ||
    t[8] !== c ||
    t[9] !== s ||
    t[10] !== l ||
    t[11] !== d ||
    t[12] !== f ||
    t[13] !== p ||
    t[14] !== m ||
    t[15] !== g
      ? ((_ = (0, $.jsx)($.Fragment, {
          children: g
            ? (0, $.jsx)(Le, {
                canInstall: n,
                entries: r,
                highlightInstalledSkills: o,
                hostId: s,
                highlightedSkillId: c,
                installingSkillId: l,
                onInstall: d,
                onSkillsUpdated: f,
                repoRoot: p,
                roots: m,
              })
            : (0, $.jsx)(ue, {
                items: r,
                visibleItemLimit: ze({ itemCount: r.length, visibleItemLimit: 6 }) ?? r.length,
                renderExpandRow: Fe,
                children: (e) =>
                  (0, $.jsx)(Le, {
                    canInstall: n,
                    entries: e,
                    highlightInstalledSkills: o,
                    hostId: s,
                    highlightedSkillId: c,
                    installingSkillId: l,
                    onInstall: d,
                    onSkillsUpdated: f,
                    repoRoot: p,
                    roots: m,
                  }),
              }),
        })),
        (t[5] = n),
        (t[6] = r),
        (t[7] = o),
        (t[8] = c),
        (t[9] = s),
        (t[10] = l),
        (t[11] = d),
        (t[12] = f),
        (t[13] = p),
        (t[14] = m),
        (t[15] = g),
        (t[16] = _))
      : (_ = t[16]),
    _
  );
}
function Fe(e) {
  let { hiddenItems: t, isExpanded: n, onToggle: r } = e;
  return (0, $.jsx)(Re, { isExpanded: n, skillNames: t.map(Ie), onClick: r });
}
function Ie(e) {
  let { skill: t } = e;
  return t.name;
}
function Le(e) {
  let t = (0, Q.c)(23),
    {
      canInstall: n,
      entries: r,
      highlightInstalledSkills: i,
      hostId: a,
      highlightedSkillId: o,
      installingSkillId: s,
      onInstall: c,
      onSkillsUpdated: l,
      repoRoot: u,
      roots: d,
    } = e,
    f;
  if (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== i ||
    t[3] !== o ||
    t[4] !== a ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== l ||
    t[8] !== u ||
    t[9] !== d
  ) {
    let e;
    (t[11] !== n ||
    t[12] !== i ||
    t[13] !== o ||
    t[14] !== a ||
    t[15] !== s ||
    t[16] !== c ||
    t[17] !== l ||
    t[18] !== u ||
    t[19] !== d
      ? ((e = (e) => {
          let { installedSkill: t, isInstalled: r, skill: f } = e;
          return t == null
            ? (0, $.jsx)(
                _e,
                {
                  canInstall: n,
                  hostId: a,
                  isHighlighted: r || o === f.id,
                  isInstalled: r,
                  isInstalling: s === f.id,
                  onInstall: c,
                  repoRoot: u,
                  skill: f,
                },
                f.id,
              )
            : (0, $.jsx)(
                Me,
                {
                  hostId: a,
                  installedStateAction: `menu`,
                  isHighlighted: i || o === f.id,
                  onSkillsUpdated: (e) => {
                    e && l();
                  },
                  roots: d,
                  skill: t,
                },
                f.id,
              );
        }),
        (t[11] = n),
        (t[12] = i),
        (t[13] = o),
        (t[14] = a),
        (t[15] = s),
        (t[16] = c),
        (t[17] = l),
        (t[18] = u),
        (t[19] = d),
        (t[20] = e))
      : (e = t[20]),
      (f = r.map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o),
      (t[4] = a),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f));
  } else f = t[10];
  let p;
  return (
    t[21] === f
      ? (p = t[22])
      : ((p = (0, $.jsx)(U, { gap: `compact`, children: f })), (t[21] = f), (t[22] = p)),
    p
  );
}
function Re(e) {
  let t = (0, Q.c)(9),
    { isExpanded: n, skillNames: r, onClick: i } = e,
    o;
  t[0] === r ? (o = t[1]) : ((o = r.slice(0, 2).join(`, `)), (t[0] = r), (t[1] = o));
  let s = Math.max(r.length - 2, 0),
    c;
  t[2] !== o || t[3] !== s
    ? ((c = (0, $.jsx)(a, {
        id: `skills.appsPage.section.seeAllSkillsDescription`,
        defaultMessage: `See {skillNames}{remainingCount, plural, =0 {} one {, and # more} other {, and # more}}`,
        description: `Label for the row that expands a skill section, previewing the next skills and the number of additional skills`,
        values: { skillNames: o, remainingCount: s },
      })),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] !== n || t[6] !== i || t[7] !== c
      ? ((l = (0, $.jsx)(he, { isExpanded: n, onClick: i, children: c })),
        (t[5] = n),
        (t[6] = i),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
function ze({ itemCount: e, visibleItemLimit: t }) {
  return e - t >= 3 ? t : void 0;
}
function Be(e, t) {
  let n = [];
  for (let t of e) n.push({ id: t.id, label: t.title });
  return (t != null && n.push({ id: t.id, label: t.title }), n);
}
var Q, Ve, $;
function He() {
  return (He = e(() => {
    ((Q = S()),
      c(),
      (Ve = T()),
      m(),
      V(),
      P(),
      ie(),
      te(),
      p(),
      ne(),
      R(),
      Y(),
      fe(),
      _(),
      re(),
      we(),
      de(),
      ce(),
      ($ = C()));
  }))();
}
export { Y as a, _e as i, Te as n, He as r, Z as t };
//# sourceMappingURL=skills-tab-content-e1cab3761bee.js.map
