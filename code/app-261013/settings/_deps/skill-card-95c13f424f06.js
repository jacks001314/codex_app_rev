import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $tt as n,
  $v as r,
  ADt as i,
  AO as a,
  BV as o,
  CO as s,
  CPt as c,
  Cot as l,
  D0 as u,
  IDt as d,
  IF as f,
  Iot as p,
  Ixt as m,
  Lot as h,
  MO as g,
  Mz as ee,
  Nz as _,
  O0 as v,
  Pxt as y,
  QC as te,
  Qv as ne,
  Rnt as b,
  SPt as x,
  TJ as re,
  TO as S,
  VDt as ie,
  _Mt as C,
  bz as w,
  cz as T,
  fM as ae,
  gMt as oe,
  hot as E,
  iO as D,
  irt as se,
  iw as O,
  jDt as k,
  jO as ce,
  lot as A,
  lrt as j,
  pM as M,
  rO as N,
  srt as P,
  sz as le,
  t3 as ue,
  vzt as F,
  wot as de,
  xMt as fe,
  xz as pe,
  yzt as I,
} from "./app-shared-bbfeca5e5737.js";
import {
  $a as L,
  $lr as R,
  BYt as me,
  Bun as z,
  Cwr as B,
  IYt as he,
  Ja as V,
  Ka as ge,
  MRt as _e,
  NRt as H,
  QDr as ve,
  Qa as U,
  Run as ye,
  S_r as be,
  Stn as W,
  XDr as xe,
  XPr as G,
  Xa as Se,
  YPr as Ce,
  Za as K,
  btn as we,
  cVt as Te,
  eur as Ee,
  gwr as De,
  lVt as Oe,
  m_r as ke,
  oFr as Ae,
  sFr as je,
  ytn as Me,
} from "./app-initial-5851df3f6cb1.js";
import { n as Ne, t as Pe } from "./skill-contents-modal-52141f15cafc.js";
import { n as Fe, t as q } from "./card-tile-a92df345e9ab.js";
import { n as J, t as Ie } from "./installed-card-actions-6e3c5fc1435c.js";
function Le(e) {
  let t = (0, Y.c)(10),
    { children: n, className: r, isExpanded: i, onClick: a } = e,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = oe(
        `flex min-h-[var(--height-token-row)] w-full cursor-interaction items-center rounded-[var(--radius-token-row)] px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-start text-sm leading-relaxed font-normal text-codex-description outline-hidden hover:text-default focus-visible:text-default`,
        r,
      )),
      (t[0] = r),
      (t[1] = o));
  let s;
  t[2] !== n || t[3] !== i
    ? ((s = i
        ? (0, X.jsx)(d, {
            id: `skills.appsPage.section.showLess`,
            defaultMessage: `Show less`,
            description: `Label for the row that collapses an expanded plugins page section`,
          })
        : n),
      (t[2] = n),
      (t[3] = i),
      (t[4] = s))
    : (s = t[4]);
  let c;
  return (
    t[5] !== i || t[6] !== a || t[7] !== o || t[8] !== s
      ? ((c = (0, X.jsx)(`button`, {
          className: o,
          type: `button`,
          "aria-expanded": i,
          onClick: a,
          children: s,
        })),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function Re(e) {
  let t = (0, Y.c)(12),
    { children: n, items: r, batchSize: i, pinnedItem: a, renderExpandRow: o, visibleItemLimit: s } = e,
    [c, l] = (0, ze.useState)(0),
    u = s + c * (i ?? r.length),
    d,
    f;
  if (t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== o || t[4] !== c || t[5] !== u || t[6] !== s) {
    let e = r.slice(0, u),
      i = r.slice(u),
      p = a != null && i.includes(a),
      m = p ? i.filter((e) => e !== a) : i,
      h = c > 0 && m.length === 0;
    ((d = n(p ? [...e, a] : e)),
      (f =
        r.length > s && (h || m.length > 0)
          ? o({ hiddenItems: m, isExpanded: h, onToggle: () => l((e) => (h ? 0 : e + 1)) })
          : null),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o),
      (t[4] = c),
      (t[5] = u),
      (t[6] = s),
      (t[7] = d),
      (t[8] = f));
  } else ((d = t[7]), (f = t[8]));
  let p;
  return (
    t[9] !== d || t[10] !== f
      ? ((p = (0, X.jsxs)(X.Fragment, { children: [d, f] })), (t[9] = d), (t[10] = f), (t[11] = p))
      : (p = t[11]),
    p
  );
}
var Y, ze, X;
function Be() {
  return (Be = e(() => {
    ((Y = F()), C(), (ze = I()), k(), (X = fe()));
  }))();
}
function Ve(e) {
  let t = (0, He.c)(42),
    {
      cardIcon: n,
      cardIconContainer: r,
      cardIconContainerVariant: i,
      cardTitle: a,
      cardDescription: s,
      cardDescriptionPlacement: c,
      cardBadges: l,
      cardActions: u,
      isHighlighted: d,
      isContentDimmed: f,
      presentation: p,
      modalIconShape: m,
      modalTitle: h,
      modalTitleText: g,
      modalName: ee,
      modalHeaderActions: _,
      modalDescription: v,
      modalBody: y,
      modalFooter: ne,
    } = e,
    [b, x] = (0, Ue.useState)(!1),
    re = (0, Ue.useRef)(!1),
    S;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = () => {
        if (re.current) {
          re.current = !1;
          return;
        }
        x(!0);
      }),
      (t[0] = S))
    : (S = t[0]);
  let ie = pe(S),
    C;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        re.current = !0;
      }),
      (t[1] = C))
    : (C = t[1]);
  let w = pe(C),
    T;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => {
        x(!1);
      }),
      (t[2] = T))
    : (T = t[2]);
  let ae = T,
    E = n ?? null,
    D;
  t[3] === _
    ? (D = t[4])
    : ((D = typeof _ == `function` ? _({ closePreview: ae }) : _), (t[3] = _), (t[4] = D));
  let se;
  t[5] === ne
    ? (se = t[6])
    : ((se = typeof ne == `function` ? ne({ closePreview: ae }) : ne), (t[5] = ne), (t[6] = se));
  let O;
  t[7] !== b || t[8] !== y
    ? ((O = typeof y == `function` ? y({ isOpen: b }) : y), (t[7] = b), (t[8] = y), (t[9] = O))
    : (O = t[9]);
  let k;
  t[10] !== b || t[11] !== v || t[12] !== h || t[13] !== E || t[14] !== D || t[15] !== se || t[16] !== O
    ? ((k = {
        icon: E,
        title: h,
        description: v,
        isOpen: b,
        onOpenChange: x,
        headerActions: D,
        footer: se,
        children: O,
      }),
      (t[10] = b),
      (t[11] = v),
      (t[12] = h),
      (t[13] = E),
      (t[14] = D),
      (t[15] = se),
      (t[16] = O),
      (t[17] = k))
    : (k = t[17]);
  let ce = k,
    A;
  t[18] !== u ||
  t[19] !== l ||
  t[20] !== s ||
  t[21] !== c ||
  t[22] !== n ||
  t[23] !== r ||
  t[24] !== i ||
  t[25] !== a ||
  t[26] !== w ||
  t[27] !== f ||
  t[28] !== d ||
  t[29] !== ie ||
  t[30] !== p
    ? ((A =
        p === `settings`
          ? (0, Z.jsx)(te, {
              edgeRounding: `surface`,
              label: a,
              description: s,
              trailing: (0, Z.jsx)(o, {}),
              actionsPlacement: `before-trailing`,
              actions: typeof u == `function` ? u({ ignoreNextPreview: w, openPreview: ie }) : u,
              onClick: ie,
            })
          : (0, Z.jsx)(q, {
              className: oe(`justify-center border-none text-base select-none`, u != null && `group`),
              contentClassName: oe(f && `opacity-60`),
              icon: n,
              iconContainer: r,
              iconContainerVariant: i,
              title: a,
              description: s,
              descriptionClassName: `line-clamp-1 text-codex-description`,
              descriptionPlacement: c,
              badges: l,
              isHighlighted: d,
              presentation: p,
              actions: typeof u == `function` ? u({ ignoreNextPreview: w, openPreview: ie }) : u,
              actionsPlacement: `center`,
              onClick: ie,
            })),
      (t[18] = u),
      (t[19] = l),
      (t[20] = s),
      (t[21] = c),
      (t[22] = n),
      (t[23] = r),
      (t[24] = i),
      (t[25] = a),
      (t[26] = w),
      (t[27] = f),
      (t[28] = d),
      (t[29] = ie),
      (t[30] = p),
      (t[31] = A))
    : (A = t[31]);
  let j;
  t[32] !== m || t[33] !== ee || t[34] !== ce || t[35] !== h || t[36] !== g || t[37] !== p
    ? ((j =
        p === `settings`
          ? (0, Z.jsx)(Pe, { ...ce, name: ee, title: g ?? h })
          : (0, Z.jsx)(V, { ...ce, iconShape: m, titleText: g })),
      (t[32] = m),
      (t[33] = ee),
      (t[34] = ce),
      (t[35] = h),
      (t[36] = g),
      (t[37] = p),
      (t[38] = j))
    : (j = t[38]);
  let M;
  return (
    t[39] !== j || t[40] !== A
      ? ((M = (0, Z.jsxs)(Z.Fragment, { children: [A, j] })), (t[39] = j), (t[40] = A), (t[41] = M))
      : (M = t[41]),
    M
  );
}
var He, Ue, Z;
function We() {
  return (We = e(() => {
    ((He = F()), C(), (Ue = I()), re(), Fe(), O(), Ne(), K(), w(), (Z = fe()));
  }))();
}
function Ge({
  size: e,
  hasLargeIcon: t,
  smallClassName: n = `icon-md`,
  largeFallbackClassName: r = `h-5 w-5`,
}) {
  return e === `large` ? (t ? `h-full w-full` : r) : n;
}
function Ke() {
  return (Ke = e(() => {}))();
}
function qe(e) {
  let t = (0, Qe.c)(124),
    {
      actionLabel: r,
      cardIcon: i,
      cardIconContainer: a,
      cardIconContainerVariant: o,
      cardDescriptionPlacement: u,
      cardTitle: p,
      hostId: g,
      hideCardActions: ee,
      isHighlighted: _,
      presentation: v,
      skill: y,
      displayName: te,
      installedStateAction: b,
      modalIconShape: x,
      showModalUninstall: re,
      toggleOnly: C,
      scopeBadges: w,
      onSkillsUpdated: T,
    } = e,
    oe = a === void 0 || a,
    D = ee !== void 0 && ee,
    O = _ !== void 0 && _,
    k = b === void 0 ? `check` : b,
    A = re === void 0 || re,
    M = C !== void 0 && C,
    N = m(l),
    P = m(De),
    { platform: ue } = Ee(),
    F = ie(),
    de = me(),
    [fe, pe] = (0, $e.useState)(null),
    I = je(g).kind !== `local`,
    L = te ?? y.name,
    R;
  t[0] !== T || t[1] !== N.queryClient
    ? ((R = (e) => {
        (T?.(e?.success === !0), N.queryClient.invalidateQueries({ queryKey: se(`recommended-skills`) }));
      }),
      (t[0] = T),
      (t[1] = N.queryClient),
      (t[2] = R))
    : (R = t[2]);
  let z;
  t[3] !== L || t[4] !== F || t[5] !== N
    ? ((z = (e) => {
        let { success: t } = e;
        if (!t) {
          N.get(E).danger(
            F.formatMessage({
              id: `skills.card.removeFailed`,
              defaultMessage: `Failed to uninstall skill`,
              description: `Toast message shown when uninstalling a skill fails`,
            }),
            { errorAnalytics: { toastId: `skills.card.removeFailed` } },
          );
          return;
        }
        N.get(E).success(
          (0, Q.jsx)(d, {
            id: `skills.card.removeSuccess`,
            defaultMessage: `{skillName} skill uninstalled`,
            description: `Toast shown after successfully uninstalling a skill`,
            values: { skillName: (0, Q.jsx)(`span`, { className: `font-medium`, children: L }) },
          }),
        );
      }),
      (t[3] = L),
      (t[4] = F),
      (t[5] = N),
      (t[6] = z))
    : (z = t[6]);
  let B;
  t[7] !== F || t[8] !== N
    ? ((B = () => {
        N.get(E).danger(
          F.formatMessage({
            id: `skills.card.removeFailed`,
            defaultMessage: `Failed to uninstall skill`,
            description: `Toast message shown when uninstalling a skill fails`,
          }),
          { errorAnalytics: { toastId: `skills.card.removeFailed` } },
        );
      }),
      (t[7] = F),
      (t[8] = N),
      (t[9] = B))
    : (B = t[9]);
  let he;
  t[10] !== R || t[11] !== z || t[12] !== B
    ? ((he = { onSettled: R, onSuccess: z, onError: B }), (t[10] = R), (t[11] = z), (t[12] = B), (t[13] = he))
    : (he = t[13]);
  let V = j(`remove-skill`, he),
    H;
  t[14] !== g || t[15] !== N || t[16] !== y.name || t[17] !== y.path
    ? ((H = (e) =>
        Ce(N, g).sendRequest(
          `skills/config/write`,
          y.name.includes(`:`) ? { name: y.name, enabled: e } : { path: y.path, enabled: e },
        )),
      (t[14] = g),
      (t[15] = N),
      (t[16] = y.name),
      (t[17] = y.path),
      (t[18] = H))
    : (H = t[18]);
  let U;
  t[19] !== L || t[20] !== T || t[21] !== N
    ? ((U = (e, t) => {
        T?.(!0);
        let n = t
          ? (0, Q.jsx)(d, {
              id: `skills.card.enableSuccess`,
              defaultMessage: `{skillName} skill enabled`,
              description: `Toast shown after successfully enabling a skill`,
              values: { skillName: (0, Q.jsx)(`span`, { className: `font-medium`, children: L }) },
            })
          : (0, Q.jsx)(d, {
              id: `skills.card.disableSuccess`,
              defaultMessage: `{skillName} skill disabled`,
              description: `Toast shown after successfully disabling a skill`,
              values: { skillName: (0, Q.jsx)(`span`, { className: `font-medium`, children: L }) },
            });
        N.get(E).success(n);
      }),
      (t[19] = L),
      (t[20] = T),
      (t[21] = N),
      (t[22] = U))
    : (U = t[22]);
  let W;
  t[23] !== F || t[24] !== N
    ? ((W = (e) => {
        (pe(null),
          c.error(`Failed to update skill enabled state`, { safe: {}, sensitive: { error: e } }),
          N.get(E).danger(
            F.formatMessage({
              id: `skills.card.toggleEnabledError`,
              defaultMessage: `Failed to update skill`,
              description: `Toast message shown when enabling or disabling a skill fails`,
            }),
            { errorAnalytics: { toastId: `skills.card.toggleEnabledError` } },
          ));
      }),
      (t[23] = F),
      (t[24] = N),
      (t[25] = W))
    : (W = t[25]);
  let xe;
  t[26] !== H || t[27] !== U || t[28] !== W
    ? ((xe = { mutationFn: H, onSuccess: U, onError: W }),
      (t[26] = H),
      (t[27] = U),
      (t[28] = W),
      (t[29] = xe))
    : (xe = t[29]);
  let G = h(xe),
    K = fe != null && (G.isPending || y.enabled !== fe) ? fe : y.enabled,
    we;
  t[30] === y ? (we = t[31]) : ((we = f(y)), (t[30] = y), (t[31] = we));
  let Te = we,
    ke;
  t[32] === K
    ? (ke = t[33])
    : ((ke = K
        ? null
        : (0, Q.jsx)(_e, {
            variant: `outline`,
            children: (0, Q.jsx)(d, {
              id: `skills.card.disabledBadge`,
              defaultMessage: `Disabled`,
              description: `Label shown next to the skill name when a skill is disabled`,
            }),
          })),
      (t[32] = K),
      (t[33] = ke));
  let Ae;
  t[34] !== L || t[35] !== ke
    ? ((Ae = (0, Q.jsx)(Se, { kind: `Skill`, title: L, badge: ke })), (t[34] = L), (t[35] = ke), (t[36] = Ae))
    : (Ae = t[36]);
  let Me = Ae,
    Ne;
  t[37] !== i || t[38] !== y
    ? ((Ne =
        i === void 0 ? (0, Q.jsx)(Ze, { skill: y, size: y.interface?.iconLarge ? `large` : `small` }) : i),
      (t[37] = i),
      (t[38] = y),
      (t[39] = Ne))
    : (Ne = t[39]);
  let Pe = Ne,
    Fe = !I && y.scope !== `admin`,
    q = V.isPending && V.variables?.skillPath === y.path,
    J = G.isPending,
    Le = !K,
    Re;
  t[40] !== g || t[41] !== P || t[42] !== y.path
    ? ((Re = () => {
        Oe({ scope: P, path: y.path, cwd: null, hostId: g, openInSidePanel: !0 });
      }),
      (t[40] = g),
      (t[41] = P),
      (t[42] = y.path),
      (t[43] = Re))
    : (Re = t[43]);
  let Y = Re,
    ze;
  t[44] !== N || t[45] !== y || t[46] !== de
    ? ((ze = () => {
        (ve(N, n, {}), de({ activeProject: ye(N.get(be)), prefillPrompt: ae(y), startInSidebar: !0 }));
      }),
      (t[44] = N),
      (t[45] = y),
      (t[46] = de),
      (t[47] = ze))
    : (ze = t[47]);
  let X = ze,
    Be = K ? $.disableSkill : $.enableSkill,
    He;
  t[48] !== K ||
  t[49] !== Y ||
  t[50] !== D ||
  t[51] !== g ||
  t[52] !== F ||
  t[53] !== I ||
  t[54] !== J ||
  t[55] !== Be ||
  t[56] !== ue ||
  t[57] !== P ||
  t[58] !== y.path ||
  t[59] !== G
    ? ((He = (e) => {
        let { closePreview: t } = e;
        return (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            !D &&
              (0, Q.jsx)(le, {
                tooltipContent: (0, Q.jsx)(d, { ...Be }),
                children: (0, Q.jsx)(`div`, {
                  className: `flex items-center`,
                  children: (0, Q.jsx)(ce, {
                    className: `h-token-button-composer`,
                    checked: K,
                    disabled: J,
                    ariaLabel: F.formatMessage(Be),
                    onChange: (e) => {
                      (pe(e), G.mutate(e));
                    },
                  }),
                }),
              }),
            (0, Q.jsxs)(s, {
              align: `end`,
              contentWidth: `icon`,
              triggerButton: (0, Q.jsx)(ne, {
                pill: !0,
                label: F.formatMessage({
                  id: `skills.card.moreActions`,
                  defaultMessage: `More actions`,
                  description: `Aria label for the more actions menu in the skill preview modal`,
                }),
              }),
              children: [
                (0, Q.jsx)(S.Item, {
                  disabled: I,
                  onSelect: () => {
                    (Y(), t());
                  },
                  children: (0, Q.jsx)(d, {
                    id: `skills.card.open`,
                    defaultMessage: `Open`,
                    description: `Button label to open a skill's files`,
                  }),
                }),
                (0, Q.jsxs)(S.Item, {
                  disabled: I,
                  onSelect: () => {
                    Oe({ scope: P, path: y.path, cwd: null, hostId: g, target: `fileManager` });
                  },
                  children: [
                    ue === `macOS` &&
                      (0, Q.jsx)(d, {
                        id: `skills.card.revealInFinder`,
                        defaultMessage: `Reveal in Finder`,
                        description: `Menu item to reveal an installed skill's file in Finder on macOS`,
                      }),
                    ue === `windows` &&
                      (0, Q.jsx)(d, {
                        id: `skills.card.revealInFileExplorer`,
                        defaultMessage: `Reveal in File Explorer`,
                        description: `Menu item to reveal an installed skill's file in File Explorer on Windows`,
                      }),
                    ue === `linux` &&
                      (0, Q.jsx)(d, {
                        id: `skills.card.revealInFileManager`,
                        defaultMessage: `Reveal in File Manager`,
                        description: `Menu item to reveal an installed skill's file in the system file manager on Linux`,
                      }),
                  ],
                }),
                (0, Q.jsx)(Ye, { hostId: g, path: y.path }),
              ],
            }),
          ],
        });
      }),
      (t[48] = K),
      (t[49] = Y),
      (t[50] = D),
      (t[51] = g),
      (t[52] = F),
      (t[53] = I),
      (t[54] = J),
      (t[55] = Be),
      (t[56] = ue),
      (t[57] = P),
      (t[58] = y.path),
      (t[59] = G),
      (t[60] = He))
    : (He = t[60]);
  let Ue = He,
    Z = K ? $.disableSkill : $.enableSkill,
    We;
  t[61] !== K || t[62] !== G
    ? ((We = K
        ? () => {
            (pe(!1), G.mutate(!1));
          }
        : void 0),
      (t[61] = K),
      (t[62] = G),
      (t[63] = We))
    : (We = t[63]);
  let Ge = We,
    Ke;
  t[64] !== Le || t[65] !== G
    ? ((Ke = Le
        ? () => {
            (pe(!0), G.mutate(!0));
          }
        : void 0),
      (t[64] = Le),
      (t[65] = G),
      (t[66] = Ke))
    : (Ke = t[66]);
  let qe = Ke,
    et;
  t[67] !== Fe || t[68] !== g || t[69] !== V || t[70] !== y.path
    ? ((et = Fe
        ? () => {
            V.mutate({ hostId: g, skillPath: y.path });
          }
        : void 0),
      (t[67] = Fe),
      (t[68] = g),
      (t[69] = V),
      (t[70] = y.path),
      (t[71] = et))
    : (et = t[71]);
  let tt = et,
    nt;
  t[72] !== r ||
  t[73] !== K ||
  t[74] !== Ge ||
  t[75] !== qe ||
  t[76] !== Y ||
  t[77] !== tt ||
  t[78] !== D ||
  t[79] !== k ||
  t[80] !== F ||
  t[81] !== I ||
  t[82] !== q ||
  t[83] !== J ||
  t[84] !== v ||
  t[85] !== Z ||
  t[86] !== M ||
  t[87] !== G
    ? ((nt = D
        ? void 0
        : k === `toggle`
          ? (e) => {
              let { ignoreNextPreview: t, openPreview: n } = e;
              return (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  r ? (0, Q.jsx)(`div`, { className: `text-sm text-secondary`, children: r }) : null,
                  M
                    ? null
                    : (0, Q.jsx)(`div`, {
                        className: `invisible opacity-0 transition-opacity group-hover:visible group-hover:opacity-100`,
                        children: (0, Q.jsxs)(s, {
                          align: `end`,
                          contentWidth: `icon`,
                          triggerButton: (0, Q.jsx)(ne, {
                            pill: !0,
                            label: F.formatMessage({
                              id: `skills.card.moreActions`,
                              defaultMessage: `More actions`,
                              description: `Aria label for the more actions menu in the skill preview modal`,
                            }),
                          }),
                          children: [
                            (0, Q.jsx)(S.Item, {
                              disabled: I,
                              onSelect: () => {
                                (t(), Y());
                              },
                              children: (0, Q.jsx)(d, {
                                id: `skills.card.open`,
                                defaultMessage: `Open`,
                                description: `Button label to open a skill's files`,
                              }),
                            }),
                            (0, Q.jsx)(S.Item, {
                              onSelect: n,
                              children: (0, Q.jsx)(d, {
                                id: `skills.card.details`,
                                defaultMessage: `Details`,
                                description: `Dropdown item label to open the skill details modal`,
                              }),
                            }),
                          ],
                        }),
                      }),
                  (0, Q.jsx)(le, {
                    tooltipContent: (0, Q.jsx)(d, { ...Z }),
                    children: (0, Q.jsx)(ce, {
                      checked: K,
                      disabled: J,
                      size: M && v !== `settings` ? `sm` : `default`,
                      ariaLabel: F.formatMessage(Z),
                      onClick: Je,
                      onChange: (e) => {
                        (pe(e), G.mutate(e));
                      },
                    }),
                  }),
                ],
              });
            }
          : k === `menu`
            ? (0, Q.jsx)(Ie, {
                disableMenuLabel: (0, Q.jsx)(d, {
                  id: `skills.card.disableMenuItem`,
                  defaultMessage: `Disable`,
                  description: `Menu item label for disabling a skill from a skill card`,
                }),
                enableButtonLabel: (0, Q.jsx)(d, { ...$.enableButton }),
                enabledStatusAriaLabel: F.formatMessage($.enabledStatus),
                isEnabled: K,
                isUninstalling: q,
                isUpdating: J,
                menuLabel: F.formatMessage({
                  id: `skills.card.actionsMenu`,
                  defaultMessage: `Skill actions`,
                  description: `Aria label for the skill card actions menu trigger`,
                }),
                onDisable: Ge,
                onEnable: qe,
                onUninstall: tt,
                uninstallMenuLabel: (0, Q.jsx)(d, {
                  id: `skills.card.uninstallMenuItem`,
                  defaultMessage: `Uninstall`,
                  description: `Menu item label for uninstalling a skill from a skill card`,
                }),
              })
            : (0, Q.jsx)(Ie, {
                enabledStatusAriaLabel: F.formatMessage($.enabledStatus),
                isEnabled: K,
                isUninstalling: q,
                isUpdating: J,
              })),
      (t[72] = r),
      (t[73] = K),
      (t[74] = Ge),
      (t[75] = qe),
      (t[76] = Y),
      (t[77] = tt),
      (t[78] = D),
      (t[79] = k),
      (t[80] = F),
      (t[81] = I),
      (t[82] = q),
      (t[83] = J),
      (t[84] = v),
      (t[85] = Z),
      (t[86] = M),
      (t[87] = G),
      (t[88] = nt))
    : (nt = t[88]);
  let rt = nt,
    it = p ?? L,
    at = v === `settings` ? y.description : Te,
    ot;
  t[89] !== L || t[90] !== g || t[91] !== v || t[92] !== y.path
    ? ((ot = (e) => {
        let { isOpen: t } = e;
        return (0, Q.jsx)(ge, {
          hostId: g,
          isOpen: t,
          skillPath: y.path,
          titleText: L,
          presentation: v === `settings` ? `contents` : `preview`,
        });
      }),
      (t[89] = L),
      (t[90] = g),
      (t[91] = v),
      (t[92] = y.path),
      (t[93] = ot))
    : (ot = t[93]);
  let st;
  t[94] !== Fe ||
  t[95] !== K ||
  t[96] !== X ||
  t[97] !== g ||
  t[98] !== q ||
  t[99] !== J ||
  t[100] !== V ||
  t[101] !== A ||
  t[102] !== y.path
    ? ((st = (e) => {
        let { closePreview: t } = e;
        return (0, Q.jsx)(Xe, {
          canRemoveSkill: Fe && A,
          isRemoving: q,
          isUpdatingEnabled: J,
          effectiveSkillEnabled: K,
          onUninstall: () => {
            (V.mutate({ hostId: g, skillPath: y.path }), t());
          },
          onTryInThread: X,
        });
      }),
      (t[94] = Fe),
      (t[95] = K),
      (t[96] = X),
      (t[97] = g),
      (t[98] = q),
      (t[99] = J),
      (t[100] = V),
      (t[101] = A),
      (t[102] = y.path),
      (t[103] = st))
    : (st = t[103]);
  let ct;
  return (
    t[104] !== rt ||
    t[105] !== u ||
    t[106] !== oe ||
    t[107] !== o ||
    t[108] !== Te ||
    t[109] !== L ||
    t[110] !== Le ||
    t[111] !== O ||
    t[112] !== Ue ||
    t[113] !== x ||
    t[114] !== v ||
    t[115] !== w ||
    t[116] !== y.name ||
    t[117] !== Pe ||
    t[118] !== it ||
    t[119] !== at ||
    t[120] !== ot ||
    t[121] !== st ||
    t[122] !== Me
      ? ((ct = (0, Q.jsx)(Ve, {
          cardIcon: Pe,
          cardIconContainer: oe,
          cardIconContainerVariant: o,
          cardTitle: it,
          cardDescription: Te,
          cardDescriptionPlacement: u,
          cardBadges: w,
          cardActions: rt,
          isHighlighted: O,
          isContentDimmed: Le,
          presentation: v,
          modalIconShape: x,
          modalTitle: Me,
          modalTitleText: L,
          modalName: y.name,
          modalHeaderActions: Ue,
          modalDescription: at,
          modalBody: ot,
          modalFooter: st,
        })),
        (t[104] = rt),
        (t[105] = u),
        (t[106] = oe),
        (t[107] = o),
        (t[108] = Te),
        (t[109] = L),
        (t[110] = Le),
        (t[111] = O),
        (t[112] = Ue),
        (t[113] = x),
        (t[114] = v),
        (t[115] = w),
        (t[116] = y.name),
        (t[117] = Pe),
        (t[118] = it),
        (t[119] = at),
        (t[120] = ot),
        (t[121] = st),
        (t[122] = Me),
        (t[123] = ct))
      : (ct = t[123]),
    ct
  );
}
function Je(e) {
  e.stopPropagation();
}
function Ye(e) {
  let t = (0, Qe.c)(10),
    { hostId: n, path: r } = e,
    i = m(l),
    a;
  t[0] !== n || t[1] !== r ? ((a = { hostId: n, path: r }), (t[0] = n), (t[1] = r), (t[2] = a)) : (a = t[2]);
  let { contents: o, error: s } = L(a),
    c = o === void 0 || s != null,
    u;
  t[3] !== o || t[4] !== i
    ? ((u = () => {
        o !== void 0 &&
          N(o).then((e) => {
            e &&
              i
                .get(E)
                .success(
                  (0, Q.jsx)(d, {
                    id: `skills.card.copiedSkillMarkdown`,
                    defaultMessage: `Copied SKILL.md`,
                    description: `Toast shown after copying an installed skill's original SKILL.md file`,
                  }),
                );
          });
      }),
      (t[3] = o),
      (t[4] = i),
      (t[5] = u))
    : (u = t[5]);
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(d, {
        id: `skills.card.copySkillMarkdown`,
        defaultMessage: `Copy Markdown`,
        description: `Menu item for copying an installed skill's original SKILL.md file`,
      })),
      (t[6] = f))
    : (f = t[6]);
  let p;
  return (
    t[7] !== c || t[8] !== u
      ? ((p = (0, Q.jsx)(S.Item, { disabled: c, onSelect: u, children: f })),
        (t[7] = c),
        (t[8] = u),
        (t[9] = p))
      : (p = t[9]),
    p
  );
}
function Xe(e) {
  let n = (0, Qe.c)(14),
    {
      canRemoveSkill: r,
      isRemoving: i,
      isUpdatingEnabled: a,
      effectiveSkillEnabled: o,
      onUninstall: s,
      onTryInThread: c,
    } = e,
    l;
  n[0] !== r || n[1] !== i || n[2] !== s
    ? ((l = r
        ? (0, Q.jsx)(t, {
            radius: `full`,
            color: `danger`,
            size: `toolbar`,
            disabled: i,
            onClick: s,
            children: (0, Q.jsx)(d, {
              id: `skills.card.uninstall`,
              defaultMessage: `Uninstall`,
              description: `Button label to remove a skill`,
            }),
          })
        : null),
      (n[0] = r),
      (n[1] = i),
      (n[2] = s),
      (n[3] = l))
    : (l = n[3]);
  let f;
  n[4] === l
    ? (f = n[5])
    : ((f = (0, Q.jsx)(`div`, { className: `flex items-center gap-2`, children: l })),
      (n[4] = l),
      (n[5] = f));
  let p = !o || a,
    m,
    h;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(ee, { "aria-hidden": !1, asset: u })),
      (h = (0, Q.jsx)(d, {
        id: `skills.card.try`,
        defaultMessage: `Try now`,
        description: `Button label to start a new task with a skill`,
      })),
      (n[6] = m),
      (n[7] = h))
    : ((m = n[6]), (h = n[7]));
  let g;
  n[8] !== c || n[9] !== p
    ? ((g = (0, Q.jsx)(`div`, {
        className: `flex items-center gap-2`,
        children: (0, Q.jsxs)(t, {
          radius: `full`,
          color: `primary`,
          size: `toolbar`,
          disabled: p,
          onClick: c,
          children: [m, h],
        }),
      })),
      (n[8] = c),
      (n[9] = p),
      (n[10] = g))
    : (g = n[10]);
  let _;
  return (
    n[11] !== f || n[12] !== g
      ? ((_ = (0, Q.jsxs)(`div`, {
          className: `flex w-full items-center justify-between gap-2`,
          children: [f, g],
        })),
        (n[11] = f),
        (n[12] = g),
        (n[13] = _))
      : (_ = n[13]),
    _
  );
}
function Ze(e) {
  let t = (0, Qe.c)(12),
    { skill: n, size: r } = e,
    i = r === void 0 ? `small` : r,
    a = !!n.interface?.iconLarge,
    o;
  i === `small` ? (o = 24) : a || (o = 20);
  let s, c;
  if (t[0] !== o || t[1] !== a || t[2] !== i || t[3] !== n) {
    let e = Me(n, { size: i, fallbackSize: o, fallbackClassName: `text-secondary` }),
      r;
    t[6] !== a || t[7] !== i
      ? ((r = Ge({ size: i, hasLargeIcon: a, largeFallbackClassName: `h-5 w-5` })),
        (t[6] = a),
        (t[7] = i),
        (t[8] = r))
      : (r = t[8]);
    let l = `${r} text-secondary`;
    ((s = e),
      (c = we(e, l, `text-secondary`)),
      (t[0] = o),
      (t[1] = a),
      (t[2] = i),
      (t[3] = n),
      (t[4] = s),
      (t[5] = c));
  } else ((s = t[4]), (c = t[5]));
  let l;
  return (
    t[9] !== s || t[10] !== c
      ? ((l = (0, Q.jsx)(s, { ...c })), (t[9] = s), (t[10] = c), (t[11] = l))
      : (l = t[11]),
    l
  );
}
var Qe, $e, Q, $;
function et() {
  return (et = e(() => {
    ((Qe = F()),
      b(),
      v(),
      p(),
      y(),
      ($e = I()),
      k(),
      G(),
      H(),
      ue(),
      a(),
      _(),
      r(),
      A(),
      g(),
      T(),
      Te(),
      R(),
      he(),
      J(),
      xe(),
      z(),
      de(),
      B(),
      ke(),
      Ae(),
      W(),
      We(),
      K(),
      M(),
      U(),
      D(),
      x(),
      P(),
      (Q = fe()),
      ($ = i({
        disableSkill: {
          id: `skills.card.disableSkill`,
          defaultMessage: `Disable skill`,
          description: `Label for the disable skill toggle on skill cards`,
        },
        enableSkill: {
          id: `skills.card.enableSkill`,
          defaultMessage: `Enable skill`,
          description: `Label for the enable skill toggle on skill cards`,
        },
        enabledStatus: {
          id: `skills.card.enabledStatus`,
          defaultMessage: `Skill enabled`,
          description: `Status label for an installed skill that is enabled`,
        },
        disabledStatus: {
          id: `skills.card.disabledStatus`,
          defaultMessage: `Skill disabled`,
          description: `Status label for an installed skill that is disabled`,
        },
        enableButton: {
          id: `skills.card.enableButton`,
          defaultMessage: `Enable`,
          description: `Button label for enabling a disabled skill from a skill card`,
        },
        uninstallSkill: {
          id: `skills.card.uninstallSkill`,
          defaultMessage: `Uninstall skill`,
          description: `Tooltip label for uninstalling a skill from a skill card`,
        },
      })));
  }))();
}
export { Ve as a, Re as c, Ke as i, Be as l, et as n, We as o, Ge as r, Le as s, qe as t };
//# sourceMappingURL=skill-card-95c13f424f06.js.map
