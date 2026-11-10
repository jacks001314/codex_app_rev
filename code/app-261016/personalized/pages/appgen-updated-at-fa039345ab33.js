import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $O as t,
  $St as n,
  $st as r,
  A6 as i,
  B1 as a,
  BL as o,
  DB as s,
  DK as ee,
  DU as te,
  FBt as c,
  H4 as l,
  JOt as u,
  KH as ne,
  LNt as d,
  M6 as f,
  MNt as re,
  NNt as p,
  NSt as m,
  OB as ie,
  PBt as h,
  Q4 as g,
  Qst as ae,
  Rrt as _,
  TY as v,
  Ty as y,
  UQ as b,
  USt as oe,
  V4 as se,
  VL as x,
  Vrt as S,
  WOt as ce,
  WQ as le,
  Wnt as ue,
  XOt as C,
  Y3 as de,
  Z3 as w,
  Z4 as fe,
  ZSt as T,
  aV as pe,
  bV as me,
  ck as he,
  dV as ge,
  ek as E,
  fK as _e,
  fW as ve,
  gV as ye,
  jK as be,
  nB as xe,
  nCt as Se,
  okt as Ce,
  pkt as D,
  qrt as we,
  rB as O,
  rk as Te,
  tk as Ee,
  tkt as k,
  wy as De,
  z1 as Oe,
  zjt as ke,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  C0 as A,
  CAr as Ae,
  CRn as je,
  Cjr as Me,
  DV as Ne,
  EAr as j,
  EV as M,
  F7n as Pe,
  HW as Fe,
  Jvn as Ie,
  L7n as N,
  S0 as Le,
  SRn as Re,
  UW as ze,
  bAr as Be,
  bRn as Ve,
  hen as He,
  imr as Ue,
  pen as P,
  rmr as We,
  xjr as F,
  yAr as Ge,
  zvn as Ke,
} from "./app-initial-ad16eaadf81f.js";
import { n as I, t as qe } from "./appgen-disabled-tooltip-72287f1924e6.js";
import { l as Je, s as Ye } from "./layout-e3ed084e7c26.js";
import { n as Xe, t as L } from "./open-appgen-share-dialog-ccbe887b06fc.js";
function Ze(e) {
  let t = (0, et.c)(8),
    n,
    r;
  t[0] === e ? ((n = t[1]), (r = t[2])) : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = re(`min-w-36 justify-end empty:hidden`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, R.jsx)(Ye, { className: i, ...r })), (t[5] = r), (t[6] = i), (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Qe(e) {
  let r = (0, et.c)(115),
    {
      children: a,
      canEdit: o,
      canManage: c,
      compact: l,
      disabled: d,
      disabledBy: p,
      hasAutomations: m,
      initialIsOwner: ie,
      isPinned: h,
      liveUrl: g,
      onEdit: _,
      onNavigateToSite: v,
      onPreview: y,
      projectId: b,
      projectTitle: x,
      surface: S,
      unpublished: ce,
      viewMode: C,
    } = e,
    w = o === void 0 || o,
    T = c === void 0 || c,
    he = l !== void 0 && l,
    E = d !== void 0 && d,
    D = m !== void 0 && m,
    O = ce !== void 0 && ce,
    A = n(ae),
    j = Ce(),
    M = oe(),
    [Pe, Fe] = (0, tt.useState)(!1),
    Ie = Me(`262557526`),
    N = Me((S === `sites` || h != null) && `1425956883`),
    { accountId: Le, userId: Ve } = Ue(),
    He;
  r[0] !== Le || r[1] !== b || r[2] !== Ve
    ? ((He = { accountId: Le, userId: Ve, projectId: b }), (r[0] = Le), (r[1] = b), (r[2] = Ve), (r[3] = He))
    : (He = r[3]);
  let { mutateAsync: P, isPending: We } = Se(ze, He),
    F = S === `sites` && C === `grid`,
    Ke;
  r[4] !== b || r[5] !== A || r[6] !== S
    ? ((Ke = (e) => {
        Ne(A, {
          action: e,
          projectId: b,
          source:
            S === `sites`
              ? f.CODEX_APPGEN_INTERACTION_SOURCE_SITES
              : f.CODEX_APPGEN_INTERACTION_SOURCE_LIBRARY,
        });
      }),
      (r[4] = b),
      (r[5] = A),
      (r[6] = S),
      (r[7] = Ke))
    : (Ke = r[7]);
  let I = Ke,
    Je;
  r[8] !== I || r[9] !== _
    ? ((Je = () => {
        (I(i.CODEX_APPGEN_INTERACTION_ACTION_EDIT_WITH_CHAT_CLICKED), _(`edit`));
      }),
      (r[8] = I),
      (r[9] = _),
      (r[10] = Je))
    : (Je = r[10]);
  let L = Je,
    Qe;
  r[11] === _
    ? (Qe = r[12])
    : ((Qe = () => {
        _(`publish`);
      }),
      (r[11] = _),
      (r[12] = Qe));
  let z = Qe,
    B;
  r[13] !== ie || r[14] !== b || r[15] !== x || r[16] !== A || r[17] !== S
    ? ((B = () => {
        Xe(A, b, {
          initialIsOwner: ie,
          initialProjectTitle: x,
          source:
            S === `library` ? ue.CODEX_SITES_SHARING_SOURCE_LIBRARY : ue.CODEX_SITES_SHARING_SOURCE_SITES,
        });
      }),
      (r[13] = ie),
      (r[14] = b),
      (r[15] = x),
      (r[16] = A),
      (r[17] = S),
      (r[18] = B))
    : (B = r[18]);
  let V = B,
    H;
  r[19] !== I || r[20] !== M || r[21] !== v || r[22] !== b
    ? ((H = () => {
        (I(i.CODEX_APPGEN_INTERACTION_ACTION_SETTINGS_OPENED), (v ?? M)(Ae(b)));
      }),
      (r[19] = I),
      (r[20] = M),
      (r[21] = v),
      (r[22] = b),
      (r[23] = H))
    : (H = r[23]);
  let U = H,
    W;
  r[24] !== j || r[25] !== x
    ? ((W = j.formatMessage(
        {
          id: `appgenPage.actions.more`,
          defaultMessage: `More actions for {siteTitle}`,
          description: `Accessible label for opening the actions menu for a site`,
        },
        { siteTitle: x },
      )),
      (r[24] = j),
      (r[25] = x),
      (r[26] = W))
    : (W = r[26]);
  let G = W,
    K;
  r[27] !== E || r[28] !== p
    ? ((K = E ? (0, R.jsx)(qe, { disabledBy: p }) : null), (r[27] = E), (r[28] = p), (r[29] = K))
    : (K = r[29]);
  let q = K,
    nt;
  r[30] === j
    ? (nt = r[31])
    : ((nt = j.formatMessage({
        id: `appgenPage.publish.ownerRequired`,
        defaultMessage: `Only the owner can publish the first version`,
        description: `Tooltip explaining why only the owner can publish a Site`,
      })),
      (r[30] = j),
      (r[31] = nt));
  let J = nt,
    Y;
  r[32] !== T || r[33] !== j || r[34] !== J || r[35] !== O
    ? ((Y =
        O && !T
          ? (0, R.jsx)(xe, {
              tooltipContent: J,
              children: (0, R.jsx)(`span`, {
                "aria-disabled": `true`,
                "aria-label": j.formatMessage({
                  id: `appgenPage.publish.label`,
                  defaultMessage: `Publish`,
                  description: `Button label for publishing an unpublished Site`,
                }),
                className: `inline-flex [@container_(max-width:520px)]:hidden`,
                role: `button`,
                tabIndex: 0,
                children: (0, R.jsxs)(ke, {
                  "aria-hidden": `true`,
                  "aria-label": j.formatMessage({
                    id: `appgenPage.publish.label`,
                    defaultMessage: `Publish`,
                    description: `Button label for publishing an unpublished Site`,
                  }),
                  className: `[@container_(max-width:720px)]:aspect-square [@container_(max-width:720px)]:!px-0`,
                  color: `secondary`,
                  variant: `solid`,
                  pill: !0,
                  iconSize: `sm`,
                  disabled: !0,
                  size: `lg`,
                  children: [
                    (0, R.jsx)(s, {
                      className: `hidden [@container_(max-width:720px)]:block`,
                      asset: fe,
                      "aria-hidden": !0,
                    }),
                    (0, R.jsx)(`span`, {
                      className: `[@container_(max-width:720px)]:hidden`,
                      children: (0, R.jsx)(k, {
                        id: `appgenPage.publish.label`,
                        defaultMessage: `Publish`,
                        description: `Button label for publishing an unpublished Site`,
                      }),
                    }),
                  ],
                }),
              }),
            })
          : null),
      (r[32] = T),
      (r[33] = j),
      (r[34] = J),
      (r[35] = O),
      (r[36] = Y))
    : (Y = r[36]);
  let rt = Y,
    it = E && p === `openai`,
    X;
  r[37] === q
    ? (X = r[38])
    : ((X =
        q ??
        (0, R.jsx)(k, {
          id: `appgenPage.edit.tooltip`,
          defaultMessage: `Edit`,
          description: `Tooltip for starting a new conversation to edit a site`,
        })),
      (r[37] = q),
      (r[38] = X));
  let Z;
  r[39] !== j || r[40] !== x
    ? ((Z = j.formatMessage(
        {
          id: `appgenPage.edit`,
          defaultMessage: `Edit {siteTitle}`,
          description: `Accessible label for starting a new conversation to edit a site from the sites list`,
        },
        { siteTitle: x },
      )),
      (r[39] = j),
      (r[40] = x),
      (r[41] = Z))
    : (Z = r[41]);
  let at = C === `grid` ? `ghost` : `ghostTertiary`,
    ot = C === `grid` ? `full` : void 0,
    st = C === `grid` ? `iconCircle` : `composer`,
    ct;
  r[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (0, R.jsx)(s, { asset: le, "aria-hidden": !0 })), (r[42] = ct))
    : (ct = r[42]);
  let Q;
  r[43] !== E || r[44] !== L || r[45] !== Z || r[46] !== at || r[47] !== ot || r[48] !== st
    ? ((Q = (0, R.jsx)(de, {
        "aria-label": Z,
        color: at,
        disabled: E,
        radius: ot,
        size: st,
        uniform: !0,
        onClick: L,
        children: ct,
      })),
      (r[43] = E),
      (r[44] = L),
      (r[45] = Z),
      (r[46] = at),
      (r[47] = ot),
      (r[48] = st),
      (r[49] = Q))
    : (Q = r[49]);
  let lt;
  r[50] !== it || r[51] !== X || r[52] !== Q
    ? ((lt = (0, R.jsx)(xe, { interactive: it, tooltipContent: X, children: Q })),
      (r[50] = it),
      (r[51] = X),
      (r[52] = Q),
      (r[53] = lt))
    : (lt = r[53]);
  let ut = lt,
    $,
    dt;
  if (
    r[54] !== Ie ||
    r[55] !== w ||
    r[56] !== T ||
    r[57] !== he ||
    r[58] !== E ||
    r[59] !== p ||
    r[60] !== q ||
    r[61] !== ut ||
    r[62] !== L ||
    r[63] !== U ||
    r[64] !== z ||
    r[65] !== V ||
    r[66] !== D ||
    r[67] !== j ||
    r[68] !== We ||
    r[69] !== h ||
    r[70] !== F ||
    r[71] !== g ||
    r[72] !== I ||
    r[73] !== Pe ||
    r[74] !== G ||
    r[75] !== M ||
    r[76] !== v ||
    r[77] !== y ||
    r[78] !== N ||
    r[79] !== b ||
    r[80] !== x ||
    r[81] !== rt ||
    r[82] !== A ||
    r[83] !== P ||
    r[84] !== S ||
    r[85] !== O ||
    r[86] !== C
  ) {
    if ((($ = []), N)) {
      let e;
      (r[89] !== j || r[90] !== h || r[91] !== A || r[92] !== P
        ? ((e = () => {
            h != null &&
              P(!h).catch(() => {
                A.get(we).danger(
                  j.formatMessage({
                    id: `appgenPage.pins.saveError`,
                    defaultMessage: `Unable to update pins. Try again.`,
                    description: `Error shown when saving or removing a pinned site fails`,
                  }),
                  { errorAnalytics: { toastId: `sites_pins_save_error` } },
                );
              });
          }),
          (r[89] = j),
          (r[90] = h),
          (r[91] = A),
          (r[92] = P),
          (r[93] = e))
        : (e = r[93]),
        $.push({
          id: h ? `appgenPage.pins.unpin` : `appgenPage.pins.pin`,
          message: u(
            h
              ? {
                  id: `appgenPage.pins.unpin`,
                  defaultMessage: `Unpin`,
                  description: `Menu action to remove a site from the user's personal Pinned tab`,
                }
              : {
                  id: `appgenPage.pins.pin`,
                  defaultMessage: `Pin`,
                  description: `Menu action to save a site to the user's personal Pinned tab`,
                },
          ),
          icon: h ? be : ee,
          enabled: !We && h != null,
          onSelect: e,
        }));
    }
    if (F && g != null) {
      let e;
      (r[94] !== g || r[95] !== y
        ? ((e = () => {
            if (y != null) {
              y();
              return;
            }
            je({
              href: g,
              initiator: `sites_library`,
              openTarget: `external-browser`,
              disposition: `new-tab`,
            });
          }),
          (r[94] = g),
          (r[95] = y),
          (r[96] = e))
        : (e = r[96]),
        $.push({
          id: `appgenPage.openSite.label`,
          message: u({
            id: `appgenPage.openSite.label`,
            defaultMessage: `Open site`,
            description: `Menu item for opening a published Site`,
          }),
          icon: me,
          enabled: !E,
          onSelect: e,
        }));
    }
    if (
      (O &&
        $.push({
          id: `appgenPage.publish.label`,
          message: u({
            id: `appgenPage.publish.label`,
            defaultMessage: `Publish`,
            description: `Button label for publishing an unpublished Site`,
          }),
          icon: ge,
          onSelect: T ? z : void 0,
          enabled: !E && T,
          tooltipMessage: T
            ? void 0
            : u({
                id: `appgenPage.publish.ownerRequired`,
                defaultMessage: `Only the owner can publish the first version`,
                description: `Tooltip explaining why only the owner can publish a Site`,
              }),
        }),
      ((T && (O || he)) || (S === `sites` && w)) &&
        $.push({
          id: `appgenPage.share.label`,
          message: u({
            id: `appgenPage.share.label`,
            defaultMessage: `Share`,
            description: `Button label for opening site sharing settings`,
          }),
          icon: ye,
          enabled: !E,
          onSelect: V,
        }),
      w &&
        $.push({
          id: `appgenPage.edit.label`,
          message: u({
            id: `appgenPage.edit.label`,
            defaultMessage: `Edit`,
            description: `Menu item for starting a new conversation to edit a site`,
          }),
          icon: _e,
          enabled: !E,
          onSelect: L,
        }),
      D)
    ) {
      let e;
      (r[97] !== M || r[98] !== v || r[99] !== b
        ? ((e = () => void (v ?? M)(Be(b))), (r[97] = M), (r[98] = v), (r[99] = b), (r[100] = e))
        : (e = r[100]),
        $.push({
          id: `appgenPage.schedules.label`,
          message: u({
            id: `appgenPage.schedules.label`,
            defaultMessage: `Schedules`,
            description: `Menu item for viewing a Site's existing schedules`,
          }),
          icon: ne,
          enabled: !E,
          onSelect: e,
        }));
    }
    if (T && Ie) {
      let e;
      (r[101] !== I || r[102] !== M || r[103] !== v || r[104] !== b
        ? ((e = () => {
            (I(i.CODEX_APPGEN_INTERACTION_ACTION_ANALYTICS_OPENED), (v ?? M)(Ge(b)));
          }),
          (r[101] = I),
          (r[102] = M),
          (r[103] = v),
          (r[104] = b),
          (r[105] = e))
        : (e = r[105]),
        $.push({
          id: `appgenPage.analytics.label`,
          message: u({
            id: `appgenPage.analytics.label`,
            defaultMessage: `Analytics`,
            description: `Menu item for opening site analytics`,
          }),
          icon: pe,
          enabled: !E,
          onSelect: e,
        }));
    }
    T &&
      $.push({
        id: `appgenPage.settings.label`,
        message: u({
          id: `appgenPage.settings.label`,
          defaultMessage: `Settings`,
          description: `Menu item for opening site settings`,
        }),
        icon: ve,
        enabled: !E,
        onSelect: U,
      });
    let e = N || (T && (Ie || O)),
      t = () => {
        let e = he
          ? (0, R.jsx)(de, {
              "aria-label": G,
              color: `ghost`,
              size: `actionSm`,
              uniform: !0,
              disabled: E && !N,
              onClick: $e,
              children: (0, R.jsx)(te, {}),
            })
          : (0, R.jsx)(De, {
              disabled: E && !N,
              label: G,
              pill: S === `sites` || C === `grid`,
              size: S === `sites` || C === `grid` ? `lg` : `md`,
            });
        return E && !N
          ? e
          : (0, R.jsx)(Ee, {
              align: `end`,
              contentWidth: `menu`,
              onOpenChange: Fe,
              triggerButton: e,
              children: $.map((e) =>
                (0, R.jsx)(
                  Te.Item,
                  {
                    leftIcon: typeof e.icon == `function` ? (0, tt.createElement)(e.icon) : void 0,
                    disabled: e.enabled === !1,
                    focusableWhenDisabled: e.enabled === !1,
                    tooltipText: e.tooltipMessage ? j.formatMessage(e.tooltipMessage) : void 0,
                    onSelect: e.onSelect,
                    children: (0, R.jsx)(k, { ...e.message }),
                  },
                  e.id,
                ),
              ),
            });
      };
    ((dt = (() => {
      let n = t();
      if (he) return $.length > 0 ? n : (0, R.jsx)(R.Fragment, {});
      let r = (0, R.jsx)(ke, {
        "aria-label": j.formatMessage(
          {
            id: `appgenPage.publish`,
            defaultMessage: `Publish {siteTitle}`,
            description: `Accessible label for publishing an unpublished Site from the Sites list`,
          },
          { siteTitle: x },
        ),
        color: `primary`,
        variant: `solid`,
        size: `lg`,
        pill: !0,
        disabled: E,
        onClick: z,
        children: (0, R.jsx)(`span`, {
          className: `text-sm`,
          children: (0, R.jsx)(k, {
            id: `appgenPage.publish.label`,
            defaultMessage: `Publish`,
            description: `Button label for publishing an unpublished Site`,
          }),
        }),
      });
      if (F) return (0, R.jsx)(R.Fragment, { children: N || w || g != null || D ? n : null });
      if (S === `sites`)
        return (0, R.jsxs)(Ze, {
          className: re(
            !Pe &&
              `opacity-0 group-hover/site-row:opacity-100 group-focus-within/site-row:opacity-100 pointer-coarse:opacity-100`,
          ),
          children: [
            w && O && T ? r : w && rt,
            g != null && !E
              ? (0, R.jsx)(ke, {
                  color: `secondary`,
                  variant: `ghost`,
                  pill: !0,
                  size: `lg`,
                  iconSize: `sm`,
                  uniform: !0,
                  "aria-label":
                    y == null
                      ? j.formatMessage(
                          {
                            id: `appgenPage.openInNewTab`,
                            defaultMessage: `Open {siteTitle} in a new tab`,
                            description: `Accessible label for opening a published Site in a new external browser tab from the Sites list`,
                          },
                          { siteTitle: x },
                        )
                      : j.formatMessage(
                          {
                            id: `appgenPage.visit`,
                            defaultMessage: `Visit {siteTitle}`,
                            description: `Accessible label for opening a live site from the sites list`,
                          },
                          { siteTitle: x },
                        ),
                  onClick: (e) => {
                    if ((e.stopPropagation(), y != null)) {
                      y(e);
                      return;
                    }
                    Re({
                      event: e,
                      href: g,
                      initiator: `sites_library`,
                      openTarget: `external-browser`,
                      disposition: `new-tab`,
                    });
                  },
                  children: (0, R.jsx)(me, {}),
                })
              : null,
            N || w ? n : null,
          ],
        });
      if (!T) {
        let e = (0, R.jsxs)(R.Fragment, { children: [rt, w && ut, N ? n : null] });
        return C === `grid` ? e : (0, R.jsx)(Ye, { children: e });
      }
      let i = (0, R.jsx)(xe, {
          interactive: E && p === `openai`,
          tooltipContent:
            q ??
            (0, R.jsx)(k, {
              id: `appgenPage.settings.tooltip`,
              defaultMessage: `Settings`,
              description: `Tooltip for opening site settings from the sites list`,
            }),
          children: (0, R.jsx)(de, {
            "aria-label": j.formatMessage(
              {
                id: `appgenPage.openSettings`,
                defaultMessage: `Open settings for {siteTitle}`,
                description: `Accessible label for opening site settings from the sites list`,
              },
              { siteTitle: x },
            ),
            color: C === `grid` ? `ghost` : `ghostTertiary`,
            disabled: E,
            radius: C === `grid` ? `full` : void 0,
            size: C === `grid` ? `iconCircle` : `composer`,
            uniform: !0,
            onClick: U,
            children: (0, R.jsx)(s, { asset: Oe, "aria-hidden": !0 }),
          }),
        }),
        a = C === `grid` ? `ghost` : `outline`,
        o = O
          ? r
          : (0, R.jsxs)(de, {
              className:
                C === `list`
                  ? `[@container_(max-width:420px)]:aspect-square [@container_(max-width:420px)]:!px-0`
                  : void 0,
              "aria-label": j.formatMessage(
                {
                  id: `appgenPage.share`,
                  defaultMessage: `Share {siteTitle}`,
                  description: `Accessible label for opening site sharing settings from the sites list`,
                },
                { siteTitle: x },
              ),
              color: a,
              disabled: E,
              radius: C === `grid` ? `full` : void 0,
              size: C === `grid` ? `iconCircle` : `toolbar`,
              uniform: C === `grid`,
              onClick: V,
              children: [
                (0, R.jsx)(s, { asset: se, "aria-hidden": !0 }),
                C === `list`
                  ? (0, R.jsx)(`span`, {
                      className: `[@container_(max-width:520px)]:hidden`,
                      children: (0, R.jsx)(k, {
                        id: `appgenPage.share.label`,
                        defaultMessage: `Share`,
                        description: `Button label for opening site sharing settings`,
                      }),
                    })
                  : null,
              ],
            }),
        ee = (0, R.jsxs)(R.Fragment, {
          children: [
            (0, R.jsx)(xe, {
              interactive: E && p === `openai`,
              tooltipContent:
                q ??
                (O
                  ? (0, R.jsx)(k, {
                      id: `appgenPage.publish.label`,
                      defaultMessage: `Publish`,
                      description: `Button label for publishing an unpublished Site`,
                    })
                  : (0, R.jsx)(k, {
                      id: `appgenPage.share.tooltip`,
                      defaultMessage: `Share`,
                      description: `Tooltip for opening site sharing settings`,
                    })),
              children: o,
            }),
            e ? n : null,
            e ? null : (0, R.jsxs)(R.Fragment, { children: [i, ut] }),
          ],
        });
      return C === `grid` ? ee : (0, R.jsx)(Ye, { children: ee });
    })()),
      (r[54] = Ie),
      (r[55] = w),
      (r[56] = T),
      (r[57] = he),
      (r[58] = E),
      (r[59] = p),
      (r[60] = q),
      (r[61] = ut),
      (r[62] = L),
      (r[63] = U),
      (r[64] = z),
      (r[65] = V),
      (r[66] = D),
      (r[67] = j),
      (r[68] = We),
      (r[69] = h),
      (r[70] = F),
      (r[71] = g),
      (r[72] = I),
      (r[73] = Pe),
      (r[74] = G),
      (r[75] = M),
      (r[76] = v),
      (r[77] = y),
      (r[78] = N),
      (r[79] = b),
      (r[80] = x),
      (r[81] = rt),
      (r[82] = A),
      (r[83] = P),
      (r[84] = S),
      (r[85] = O),
      (r[86] = C),
      (r[87] = $),
      (r[88] = dt));
  } else (($ = r[87]), (dt = r[88]));
  let ft = dt;
  if (a == null) return ft;
  let pt;
  r[106] !== ft || r[107] !== a ? ((pt = a(ft)), (r[106] = ft), (r[107] = a), (r[108] = pt)) : (pt = r[108]);
  let mt = pt,
    ht = F ? N || w || g != null || D : N || w,
    gt;
  return (
    r[109] !== mt || r[110] !== E || r[111] !== ht || r[112] !== $ || r[113] !== N
      ? ((gt =
          (E && !N) || !ht
            ? mt
            : (0, R.jsx)(t, {
                items: $,
                children: (0, R.jsx)(`div`, { className: `contents`, children: mt }),
              })),
        (r[109] = mt),
        (r[110] = E),
        (r[111] = ht),
        (r[112] = $),
        (r[113] = N),
        (r[114] = gt))
      : (gt = r[114]),
    gt
  );
}
function $e(e) {
  return e.stopPropagation();
}
var et, tt, R;
function z() {
  return (z = e(() => {
    ((et = h()),
      _(),
      D(),
      g(),
      l(),
      a(),
      b(),
      p(),
      T(),
      (tt = c()),
      C(),
      m(),
      We(),
      w(),
      E(),
      he(),
      Ve(),
      ie(),
      v(),
      y(),
      S(),
      O(),
      Je(),
      r(),
      F(),
      M(),
      I(),
      j(),
      L(),
      Fe(),
      (R = d()));
  }))();
}
var B, V;
function H() {
  return (H = e(() => {
    (c(),
      (B = d()),
      (V = (e) =>
        (0, B.jsx)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 120,
          height: 75,
          viewBox: `0 0 120 75`,
          fill: `none`,
          ...e,
          children: (0, B.jsxs)(`g`, {
            transform: `translate(48 25.5)`,
            children: [
              (0, B.jsx)(`path`, {
                d: `M22 19.2727C22 20.779 20.779 22 19.2727 22H14.7273C13.221 22 12 20.779 12 19.2727V12H19.2727C20.779 12 22 13.221 22 14.7273V19.2727Z`,
                fill: `#68C4FF`,
              }),
              (0, B.jsx)(`path`, {
                d: `M20 2C21.1046 2 22 2.89543 22 4V7C22 8.10457 21.1046 9 20 9H17C15.8954 9 15 8.10457 15 7V4C15 2.89543 15.8954 2 17 2H20Z`,
                fill: `#0C79D8`,
              }),
              (0, B.jsx)(`path`, {
                d: `M7 15C8.10457 15 9 15.8954 9 17V20C9 21.1046 8.10457 22 7 22H4C2.89543 22 2 21.1046 2 20V17C2 15.8954 2.89543 15 4 15H7Z`,
                fill: `#0C79D8`,
              }),
              (0, B.jsx)(`path`, {
                d: `M12 12H4.72727C3.22104 12 2 10.779 2 9.27273V4.72727C2 3.22104 3.22104 2 4.72727 2H9.27273C10.779 2 12 3.22104 12 4.72727V12Z`,
                fill: `#2E9EFF`,
              }),
            ],
          }),
        })));
  }))();
}
function U(e) {
  let t = (0, W.c)(7),
    { className: n, gallery: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = re(`flex aspect-8/5 items-center justify-center overflow-hidden bg-surface`, n)),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = r ? (0, G.jsx)(V, { className: `size-full` }) : (0, G.jsx)(o, { className: `shrink-0` })),
      (t[2] = r),
      (t[3] = a));
  let s;
  return (
    t[4] !== i || t[5] !== a
      ? ((s = (0, G.jsx)(`span`, { "aria-hidden": !0, className: i, children: a })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var W, G;
function K() {
  return (K = e(() => {
    ((W = h()), p(), x(), H(), (G = d()));
  }))();
}
function q(e) {
  let t = (0, nt.c)(14),
    { screenshotUrl: n, viewMode: r } = e,
    { data: i, isError: a } = Ie(n),
    [o, s] = (0, J.useState)(null),
    [ee, te] = (0, J.useState)(null),
    c = i != null && i === o,
    l = n == null || a || (i != null && i === ee),
    u = !l && `bg-surface-secondary`,
    ne = r === `grid` ? `min-h-0 flex-1` : `h-[50px] w-20 shrink-0 rounded-[6px]`,
    d;
  t[0] !== u || t[1] !== ne
    ? ((d = re(`pointer-events-none relative z-10 overflow-hidden`, u, ne)),
      (t[0] = u),
      (t[1] = ne),
      (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] !== c || t[4] !== i || t[5] !== l || t[6] !== r
    ? ((f = l
        ? (0, Y.jsx)(U, { className: `size-full`, gallery: r === `grid` })
        : (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsx)(Pe, {
                as: `span`,
                animate: !c,
                className: `absolute inset-0 rounded-none`,
                size: `fill`,
                variant: `chatgpt-project`,
              }),
              i == null
                ? null
                : (0, Y.jsx)(`img`, {
                    alt: ``,
                    className: re(
                      `relative size-full object-cover motion-safe:transition-opacity motion-safe:duration-relaxed`,
                      c ? `opacity-100` : `opacity-0`,
                    ),
                    loading: `lazy`,
                    src: i,
                    onLoad: () => s(i),
                    onError: () => te(i),
                  }),
            ],
          })),
      (t[3] = c),
      (t[4] = i),
      (t[5] = l),
      (t[6] = r),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] === r
    ? (p = t[9])
    : ((p =
        r === `list`
          ? (0, Y.jsx)(`span`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-border)]`,
            })
          : null),
      (t[8] = r),
      (t[9] = p));
  let m;
  return (
    t[10] !== d || t[11] !== f || t[12] !== p
      ? ((m = (0, Y.jsxs)(`span`, { className: d, children: [f, p] })),
        (t[10] = d),
        (t[11] = f),
        (t[12] = p),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
var nt, J, Y;
function rt() {
  return (rt = e(() => {
    ((nt = h()), p(), (J = c()), N(), Ke(), K(), (Y = d()));
  }))();
}
function it(e) {
  let t = (0, X.c)(10),
    { dateString: n } = e,
    r = He(),
    i;
  t[0] !== n || t[1] !== r ? ((i = Le(n, r)), (t[0] = n), (t[1] = r), (t[2] = i)) : (i = t[2]);
  let { unit: a, value: o } = i;
  if (a === `minute`) {
    let e;
    return (
      t[3] === o
        ? (e = t[4])
        : ((e = (0, Z.jsx)(k, {
            id: `appgenPage.updatedMinutesAgo`,
            defaultMessage: `{value}m ago`,
            description: `Last edit time for a Site, in minutes; m abbreviates minutes`,
            values: { value: o },
          })),
          (t[3] = o),
          (t[4] = e)),
      e
    );
  }
  if (a === `hour`) {
    let e;
    return (
      t[5] === o
        ? (e = t[6])
        : ((e = (0, Z.jsx)(k, {
            id: `appgenPage.updatedHoursAgo`,
            defaultMessage: `{value}h ago`,
            description: `Last edit time for a Site, in hours; h abbreviates hours`,
            values: { value: o },
          })),
          (t[5] = o),
          (t[6] = e)),
      e
    );
  }
  if (a === `day` && o === 1) {
    let e;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(k, {
            id: `appgenPage.updatedYesterday`,
            defaultMessage: `Yesterday`,
            description: `Last edit time for a Site edited yesterday`,
          })),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let s;
  return (
    t[8] === n
      ? (s = t[9])
      : ((s = (0, Z.jsx)(ce, { value: n, month: `short`, day: `numeric` })), (t[8] = n), (t[9] = s)),
    s
  );
}
var X, Z;
function at() {
  return (at = e(() => {
    ((X = h()), C(), A(), P(), (Z = d()));
  }))();
}
export { U as a, Ze as c, rt as i, z as l, at as n, K as o, q as r, Qe as s, it as t };
//# sourceMappingURL=appgen-updated-at-fa039345ab33.js.map
