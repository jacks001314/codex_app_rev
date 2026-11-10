import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $2 as t,
  $4 as n,
  $v as r,
  AG as i,
  AH as a,
  AO as o,
  CO as s,
  Cot as ee,
  Ext as te,
  HZ as ne,
  I3 as c,
  IDt as l,
  Ixt as re,
  JDt as u,
  L$ as d,
  Mz as f,
  Nz as p,
  P3 as ie,
  PG as ae,
  Pxt as oe,
  QI as se,
  Qv as ce,
  R$ as m,
  Rnt as le,
  SO as ue,
  TDt as h,
  TJ as g,
  TO as de,
  U2 as fe,
  VDt as pe,
  VZ as _,
  W2 as v,
  Wtt as me,
  XV as he,
  ZI as y,
  _Mt as b,
  _xt as x,
  bB as ge,
  cz as S,
  e4 as _e,
  gMt as ve,
  gU as ye,
  hB as be,
  hG as xe,
  hot as Se,
  jDt as C,
  kDt as w,
  lot as T,
  sz as Ce,
  t3 as E,
  uB as we,
  vzt as D,
  wB as Te,
  wot as O,
  xMt as k,
  xO as Ee,
  yAt as De,
  yzt as A,
  zxt as Oe,
} from "./app-shared-bbfeca5e5737.js";
import {
  F$ as j,
  FB as M,
  IB as ke,
  J5t as N,
  JPn as Ae,
  K5t as je,
  OU as Me,
  Ogn as P,
  P$ as Ne,
  Q3n as Pe,
  XPn as Fe,
  ZPn as Ie,
  aEr as Le,
  cEr as Re,
  e6n as F,
  eDr as ze,
  fur as Be,
  kU as Ve,
  nDr as He,
  nEr as Ue,
  pur as We,
  tEr as Ge,
  ygn as Ke,
} from "./app-initial-5851df3f6cb1.js";
import { n as I, t as qe } from "./appgen-disabled-tooltip-1654c4d763a0.js";
import { l as Je, s as Ye } from "./layout-eabb971533f7.js";
import { n as Xe, t as L } from "./open-appgen-share-dialog-8d437cfd3c67.js";
function Ze(e) {
  let t = (0, et.c)(8),
    n,
    r;
  t[0] === e ? ((n = t[1]), (r = t[2])) : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = ve(`min-w-36 justify-end empty:hidden`, n)), (t[3] = n), (t[4] = i));
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
      children: o,
      canEdit: u,
      canManage: p,
      compact: oe,
      disabled: se,
      disabledBy: m,
      hasAutomations: le,
      initialIsOwner: ue,
      isPinned: h,
      liveUrl: g,
      onEdit: _,
      onNavigateToSite: v,
      onPreview: y,
      projectId: b,
      projectTitle: x,
      surface: S,
      unpublished: _e,
      viewMode: C,
    } = e,
    T = u === void 0 || u,
    E = p === void 0 || p,
    D = oe !== void 0 && oe,
    O = se !== void 0 && se,
    k = le !== void 0 && le,
    A = _e !== void 0 && _e,
    j = re(ee),
    M = pe(),
    N = te(),
    [Ae, je] = (0, tt.useState)(!1),
    Me = He(`262557526`),
    P = He((S === `sites` || h != null) && `1425956883`),
    { accountId: Ne, userId: Pe } = We(),
    Re;
  r[0] !== Ne || r[1] !== b || r[2] !== Pe
    ? ((Re = { accountId: Ne, userId: Pe, projectId: b }), (r[0] = Ne), (r[1] = b), (r[2] = Pe), (r[3] = Re))
    : (Re = r[3]);
  let { mutateAsync: F, isPending: ze } = Oe(Ve, Re),
    Be = S === `sites` && C === `grid`,
    Ke;
  r[4] !== b || r[5] !== j || r[6] !== S
    ? ((Ke = (e) => {
        ke(j, {
          action: e,
          projectId: b,
          source:
            S === `sites`
              ? c.CODEX_APPGEN_INTERACTION_SOURCE_SITES
              : c.CODEX_APPGEN_INTERACTION_SOURCE_LIBRARY,
        });
      }),
      (r[4] = b),
      (r[5] = j),
      (r[6] = S),
      (r[7] = Ke))
    : (Ke = r[7]);
  let I = Ke,
    Je;
  r[8] !== I || r[9] !== _
    ? ((Je = () => {
        (I(ie.CODEX_APPGEN_INTERACTION_ACTION_EDIT_WITH_CHAT_CLICKED), _(`edit`));
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
  r[13] !== ue || r[14] !== b || r[15] !== x || r[16] !== j || r[17] !== S
    ? ((B = () => {
        Xe(j, b, {
          initialIsOwner: ue,
          initialProjectTitle: x,
          source:
            S === `library` ? me.CODEX_SITES_SHARING_SOURCE_LIBRARY : me.CODEX_SITES_SHARING_SOURCE_SITES,
        });
      }),
      (r[13] = ue),
      (r[14] = b),
      (r[15] = x),
      (r[16] = j),
      (r[17] = S),
      (r[18] = B))
    : (B = r[18]);
  let V = B,
    H;
  r[19] !== I || r[20] !== N || r[21] !== v || r[22] !== b
    ? ((H = () => {
        (I(ie.CODEX_APPGEN_INTERACTION_ACTION_SETTINGS_OPENED), (v ?? N)(Le(b)));
      }),
      (r[19] = I),
      (r[20] = N),
      (r[21] = v),
      (r[22] = b),
      (r[23] = H))
    : (H = r[23]);
  let U = H,
    W;
  r[24] !== M || r[25] !== x
    ? ((W = M.formatMessage(
        {
          id: `appgenPage.actions.more`,
          defaultMessage: `More actions for {siteTitle}`,
          description: `Accessible label for opening the actions menu for a site`,
        },
        { siteTitle: x },
      )),
      (r[24] = M),
      (r[25] = x),
      (r[26] = W))
    : (W = r[26]);
  let G = W,
    K;
  r[27] !== O || r[28] !== m
    ? ((K = O ? (0, R.jsx)(qe, { disabledBy: m }) : null), (r[27] = O), (r[28] = m), (r[29] = K))
    : (K = r[29]);
  let q = K,
    J;
  r[30] === M
    ? (J = r[31])
    : ((J = M.formatMessage({
        id: `appgenPage.publish.ownerRequired`,
        defaultMessage: `Only the owner can publish the first version`,
        description: `Tooltip explaining why only the owner can publish a Site`,
      })),
      (r[30] = M),
      (r[31] = J));
  let Y = J,
    X;
  r[32] !== E || r[33] !== M || r[34] !== Y || r[35] !== A
    ? ((X =
        A && !E
          ? (0, R.jsx)(Ce, {
              tooltipContent: Y,
              children: (0, R.jsx)(`span`, {
                "aria-disabled": `true`,
                "aria-label": M.formatMessage({
                  id: `appgenPage.publish.label`,
                  defaultMessage: `Publish`,
                  description: `Button label for publishing an unpublished Site`,
                }),
                className: `inline-flex [@container_(max-width:520px)]:hidden`,
                role: `button`,
                tabIndex: 0,
                children: (0, R.jsxs)(De, {
                  "aria-hidden": `true`,
                  "aria-label": M.formatMessage({
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
                    (0, R.jsx)(f, {
                      className: `hidden [@container_(max-width:720px)]:block`,
                      asset: t,
                      "aria-hidden": !0,
                    }),
                    (0, R.jsx)(`span`, {
                      className: `[@container_(max-width:720px)]:hidden`,
                      children: (0, R.jsx)(l, {
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
      (r[32] = E),
      (r[33] = M),
      (r[34] = Y),
      (r[35] = A),
      (r[36] = X))
    : (X = r[36]);
  let nt = X,
    rt = O && m === `openai`,
    Z;
  r[37] === q
    ? (Z = r[38])
    : ((Z =
        q ??
        (0, R.jsx)(l, {
          id: `appgenPage.edit.tooltip`,
          defaultMessage: `Edit`,
          description: `Tooltip for starting a new conversation to edit a site`,
        })),
      (r[37] = q),
      (r[38] = Z));
  let Q;
  r[39] !== M || r[40] !== x
    ? ((Q = M.formatMessage(
        {
          id: `appgenPage.edit`,
          defaultMessage: `Edit {siteTitle}`,
          description: `Accessible label for starting a new conversation to edit a site from the sites list`,
        },
        { siteTitle: x },
      )),
      (r[39] = M),
      (r[40] = x),
      (r[41] = Q))
    : (Q = r[41]);
  let it = C === `grid` ? `ghost` : `ghostTertiary`,
    at = C === `grid` ? `full` : void 0,
    ot = C === `grid` ? `iconCircle` : `composer`,
    st;
  r[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (0, R.jsx)(f, { asset: ne, "aria-hidden": !0 })), (r[42] = st))
    : (st = r[42]);
  let ct;
  r[43] !== O || r[44] !== L || r[45] !== Q || r[46] !== it || r[47] !== at || r[48] !== ot
    ? ((ct = (0, R.jsx)(n, {
        "aria-label": Q,
        color: it,
        disabled: O,
        radius: at,
        size: ot,
        uniform: !0,
        onClick: L,
        children: st,
      })),
      (r[43] = O),
      (r[44] = L),
      (r[45] = Q),
      (r[46] = it),
      (r[47] = at),
      (r[48] = ot),
      (r[49] = ct))
    : (ct = r[49]);
  let lt;
  r[50] !== rt || r[51] !== Z || r[52] !== ct
    ? ((lt = (0, R.jsx)(Ce, { interactive: rt, tooltipContent: Z, children: ct })),
      (r[50] = rt),
      (r[51] = Z),
      (r[52] = ct),
      (r[53] = lt))
    : (lt = r[53]);
  let ut = lt,
    $,
    dt;
  if (
    r[54] !== Me ||
    r[55] !== T ||
    r[56] !== E ||
    r[57] !== D ||
    r[58] !== O ||
    r[59] !== m ||
    r[60] !== q ||
    r[61] !== ut ||
    r[62] !== L ||
    r[63] !== U ||
    r[64] !== z ||
    r[65] !== V ||
    r[66] !== k ||
    r[67] !== M ||
    r[68] !== ze ||
    r[69] !== h ||
    r[70] !== Be ||
    r[71] !== g ||
    r[72] !== I ||
    r[73] !== Ae ||
    r[74] !== G ||
    r[75] !== N ||
    r[76] !== v ||
    r[77] !== y ||
    r[78] !== P ||
    r[79] !== b ||
    r[80] !== x ||
    r[81] !== nt ||
    r[82] !== j ||
    r[83] !== F ||
    r[84] !== S ||
    r[85] !== A ||
    r[86] !== C
  ) {
    if ((($ = []), P)) {
      let e;
      (r[89] !== M || r[90] !== h || r[91] !== j || r[92] !== F
        ? ((e = () => {
            h != null &&
              F(!h).catch(() => {
                j.get(Se).danger(
                  M.formatMessage({
                    id: `appgenPage.pins.saveError`,
                    defaultMessage: `Unable to update pins. Try again.`,
                    description: `Error shown when saving or removing a pinned site fails`,
                  }),
                  { errorAnalytics: { toastId: `sites_pins_save_error` } },
                );
              });
          }),
          (r[89] = M),
          (r[90] = h),
          (r[91] = j),
          (r[92] = F),
          (r[93] = e))
        : (e = r[93]),
        $.push({
          id: h ? `appgenPage.pins.unpin` : `appgenPage.pins.pin`,
          message: w(
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
          icon: h ? ae : i,
          enabled: !ze && h != null,
          onSelect: e,
        }));
    }
    if (Be && g != null) {
      let e;
      (r[94] !== g || r[95] !== y
        ? ((e = () => {
            if (y != null) {
              y();
              return;
            }
            Ie({
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
          message: w({
            id: `appgenPage.openSite.label`,
            defaultMessage: `Open site`,
            description: `Menu item for opening a published Site`,
          }),
          icon: Te,
          enabled: !O,
          onSelect: e,
        }));
    }
    if (
      (A &&
        $.push({
          id: `appgenPage.publish.label`,
          message: w({
            id: `appgenPage.publish.label`,
            defaultMessage: `Publish`,
            description: `Button label for publishing an unpublished Site`,
          }),
          icon: be,
          onSelect: E ? z : void 0,
          enabled: !O && E,
          tooltipMessage: E
            ? void 0
            : w({
                id: `appgenPage.publish.ownerRequired`,
                defaultMessage: `Only the owner can publish the first version`,
                description: `Tooltip explaining why only the owner can publish a Site`,
              }),
        }),
      ((E && (A || D)) || (S === `sites` && T)) &&
        $.push({
          id: `appgenPage.share.label`,
          message: w({
            id: `appgenPage.share.label`,
            defaultMessage: `Share`,
            description: `Button label for opening site sharing settings`,
          }),
          icon: ge,
          enabled: !O,
          onSelect: V,
        }),
      T &&
        $.push({
          id: `appgenPage.edit.label`,
          message: w({
            id: `appgenPage.edit.label`,
            defaultMessage: `Edit`,
            description: `Menu item for starting a new conversation to edit a site`,
          }),
          icon: xe,
          enabled: !O,
          onSelect: L,
        }),
      k)
    ) {
      let e;
      (r[97] !== N || r[98] !== v || r[99] !== b
        ? ((e = () => void (v ?? N)(Ue(b))), (r[97] = N), (r[98] = v), (r[99] = b), (r[100] = e))
        : (e = r[100]),
        $.push({
          id: `appgenPage.schedules.label`,
          message: w({
            id: `appgenPage.schedules.label`,
            defaultMessage: `Schedules`,
            description: `Menu item for viewing a Site's existing schedules`,
          }),
          icon: he,
          enabled: !O,
          onSelect: e,
        }));
    }
    if (E && Me) {
      let e;
      (r[101] !== I || r[102] !== N || r[103] !== v || r[104] !== b
        ? ((e = () => {
            (I(ie.CODEX_APPGEN_INTERACTION_ACTION_ANALYTICS_OPENED), (v ?? N)(Ge(b)));
          }),
          (r[101] = I),
          (r[102] = N),
          (r[103] = v),
          (r[104] = b),
          (r[105] = e))
        : (e = r[105]),
        $.push({
          id: `appgenPage.analytics.label`,
          message: w({
            id: `appgenPage.analytics.label`,
            defaultMessage: `Analytics`,
            description: `Menu item for opening site analytics`,
          }),
          icon: we,
          enabled: !O,
          onSelect: e,
        }));
    }
    E &&
      $.push({
        id: `appgenPage.settings.label`,
        message: w({
          id: `appgenPage.settings.label`,
          defaultMessage: `Settings`,
          description: `Menu item for opening site settings`,
        }),
        icon: ye,
        enabled: !O,
        onSelect: U,
      });
    let e = P || (E && (Me || A)),
      t = () => {
        let e = D
          ? (0, R.jsx)(n, {
              "aria-label": G,
              color: `ghost`,
              size: `actionSm`,
              uniform: !0,
              disabled: O && !P,
              onClick: $e,
              children: (0, R.jsx)(a, {}),
            })
          : (0, R.jsx)(ce, {
              disabled: O && !P,
              label: G,
              pill: S === `sites` || C === `grid`,
              size: S === `sites` || C === `grid` ? `lg` : `md`,
            });
        return O && !P
          ? e
          : (0, R.jsx)(s, {
              align: `end`,
              contentWidth: `menu`,
              onOpenChange: je,
              triggerButton: e,
              children: $.map((e) =>
                (0, R.jsx)(
                  de.Item,
                  {
                    leftIcon: typeof e.icon == `function` ? (0, tt.createElement)(e.icon) : void 0,
                    disabled: e.enabled === !1,
                    focusableWhenDisabled: e.enabled === !1,
                    tooltipText: e.tooltipMessage ? M.formatMessage(e.tooltipMessage) : void 0,
                    onSelect: e.onSelect,
                    children: (0, R.jsx)(l, { ...e.message }),
                  },
                  e.id,
                ),
              ),
            });
      };
    ((dt = (() => {
      let r = t();
      if (D) return $.length > 0 ? r : (0, R.jsx)(R.Fragment, {});
      let i = (0, R.jsx)(De, {
        "aria-label": M.formatMessage(
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
        disabled: O,
        onClick: z,
        children: (0, R.jsx)(`span`, {
          className: `text-sm`,
          children: (0, R.jsx)(l, {
            id: `appgenPage.publish.label`,
            defaultMessage: `Publish`,
            description: `Button label for publishing an unpublished Site`,
          }),
        }),
      });
      if (Be) return (0, R.jsx)(R.Fragment, { children: P || T || g != null || k ? r : null });
      if (S === `sites`)
        return (0, R.jsxs)(Ze, {
          className: ve(
            !Ae &&
              `opacity-0 group-hover/site-row:opacity-100 group-focus-within/site-row:opacity-100 pointer-coarse:opacity-100`,
          ),
          children: [
            T && A && E ? i : T && nt,
            g != null && !O
              ? (0, R.jsx)(De, {
                  color: `secondary`,
                  variant: `ghost`,
                  pill: !0,
                  size: `lg`,
                  iconSize: `sm`,
                  uniform: !0,
                  "aria-label":
                    y == null
                      ? M.formatMessage(
                          {
                            id: `appgenPage.openInNewTab`,
                            defaultMessage: `Open {siteTitle} in a new tab`,
                            description: `Accessible label for opening a published Site in a new external browser tab from the Sites list`,
                          },
                          { siteTitle: x },
                        )
                      : M.formatMessage(
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
                    Fe({
                      event: e,
                      href: g,
                      initiator: `sites_library`,
                      openTarget: `external-browser`,
                      disposition: `new-tab`,
                    });
                  },
                  children: (0, R.jsx)(Te, {}),
                })
              : null,
            P || T ? r : null,
          ],
        });
      if (!E) {
        let e = (0, R.jsxs)(R.Fragment, { children: [nt, T && ut, P ? r : null] });
        return C === `grid` ? e : (0, R.jsx)(Ye, { children: e });
      }
      let a = (0, R.jsx)(Ce, {
          interactive: O && m === `openai`,
          tooltipContent:
            q ??
            (0, R.jsx)(l, {
              id: `appgenPage.settings.tooltip`,
              defaultMessage: `Settings`,
              description: `Tooltip for opening site settings from the sites list`,
            }),
          children: (0, R.jsx)(n, {
            "aria-label": M.formatMessage(
              {
                id: `appgenPage.openSettings`,
                defaultMessage: `Open settings for {siteTitle}`,
                description: `Accessible label for opening site settings from the sites list`,
              },
              { siteTitle: x },
            ),
            color: C === `grid` ? `ghost` : `ghostTertiary`,
            disabled: O,
            radius: C === `grid` ? `full` : void 0,
            size: C === `grid` ? `iconCircle` : `composer`,
            uniform: !0,
            onClick: U,
            children: (0, R.jsx)(f, { asset: d, "aria-hidden": !0 }),
          }),
        }),
        o = C === `grid` ? `ghost` : `outline`,
        s = A
          ? i
          : (0, R.jsxs)(n, {
              className:
                C === `list`
                  ? `[@container_(max-width:420px)]:aspect-square [@container_(max-width:420px)]:!px-0`
                  : void 0,
              "aria-label": M.formatMessage(
                {
                  id: `appgenPage.share`,
                  defaultMessage: `Share {siteTitle}`,
                  description: `Accessible label for opening site sharing settings from the sites list`,
                },
                { siteTitle: x },
              ),
              color: o,
              disabled: O,
              radius: C === `grid` ? `full` : void 0,
              size: C === `grid` ? `iconCircle` : `toolbar`,
              uniform: C === `grid`,
              onClick: V,
              children: [
                (0, R.jsx)(f, { asset: fe, "aria-hidden": !0 }),
                C === `list`
                  ? (0, R.jsx)(`span`, {
                      className: `[@container_(max-width:520px)]:hidden`,
                      children: (0, R.jsx)(l, {
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
            (0, R.jsx)(Ce, {
              interactive: O && m === `openai`,
              tooltipContent:
                q ??
                (A
                  ? (0, R.jsx)(l, {
                      id: `appgenPage.publish.label`,
                      defaultMessage: `Publish`,
                      description: `Button label for publishing an unpublished Site`,
                    })
                  : (0, R.jsx)(l, {
                      id: `appgenPage.share.tooltip`,
                      defaultMessage: `Share`,
                      description: `Tooltip for opening site sharing settings`,
                    })),
              children: s,
            }),
            e ? r : null,
            e ? null : (0, R.jsxs)(R.Fragment, { children: [a, ut] }),
          ],
        });
      return C === `grid` ? ee : (0, R.jsx)(Ye, { children: ee });
    })()),
      (r[54] = Me),
      (r[55] = T),
      (r[56] = E),
      (r[57] = D),
      (r[58] = O),
      (r[59] = m),
      (r[60] = q),
      (r[61] = ut),
      (r[62] = L),
      (r[63] = U),
      (r[64] = z),
      (r[65] = V),
      (r[66] = k),
      (r[67] = M),
      (r[68] = ze),
      (r[69] = h),
      (r[70] = Be),
      (r[71] = g),
      (r[72] = I),
      (r[73] = Ae),
      (r[74] = G),
      (r[75] = N),
      (r[76] = v),
      (r[77] = y),
      (r[78] = P),
      (r[79] = b),
      (r[80] = x),
      (r[81] = nt),
      (r[82] = j),
      (r[83] = F),
      (r[84] = S),
      (r[85] = A),
      (r[86] = C),
      (r[87] = $),
      (r[88] = dt));
  } else (($ = r[87]), (dt = r[88]));
  let ft = dt;
  if (o == null) return ft;
  let pt;
  r[106] !== ft || r[107] !== o ? ((pt = o(ft)), (r[106] = ft), (r[107] = o), (r[108] = pt)) : (pt = r[108]);
  let mt = pt,
    ht = Be ? P || T || g != null || k : P || T,
    gt;
  return (
    r[109] !== mt || r[110] !== O || r[111] !== ht || r[112] !== $ || r[113] !== P
      ? ((gt =
          (O && !P) || !ht
            ? mt
            : (0, R.jsx)(Ee, {
                items: $,
                children: (0, R.jsx)(`div`, { className: `contents`, children: mt }),
              })),
        (r[109] = mt),
        (r[110] = O),
        (r[111] = ht),
        (r[112] = $),
        (r[113] = P),
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
    ((et = D()),
      le(),
      u(),
      _e(),
      v(),
      m(),
      _(),
      b(),
      oe(),
      (tt = A()),
      C(),
      x(),
      Be(),
      E(),
      ue(),
      o(),
      Ae(),
      p(),
      g(),
      r(),
      T(),
      S(),
      Je(),
      O(),
      ze(),
      M(),
      I(),
      Re(),
      L(),
      Me(),
      (R = k()));
  }))();
}
var B, V;
function H() {
  return (H = e(() => {
    (A(),
      (B = k()),
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
    : ((i = ve(`flex aspect-8/5 items-center justify-center overflow-hidden bg-surface`, n)),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = r ? (0, G.jsx)(V, { className: `size-full` }) : (0, G.jsx)(y, { className: `shrink-0` })),
      (t[2] = r),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, G.jsx)(`span`, { "aria-hidden": !0, className: i, children: a })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
var W, G;
function K() {
  return (K = e(() => {
    ((W = D()), b(), se(), H(), (G = k()));
  }))();
}
function q(e) {
  let t = (0, J.c)(14),
    { screenshotUrl: n, viewMode: r } = e,
    { data: i, isError: a } = P(n),
    [o, s] = (0, Y.useState)(null),
    [ee, te] = (0, Y.useState)(null),
    ne = i != null && i === o,
    c = n == null || a || (i != null && i === ee),
    l = !c && `bg-surface-secondary`,
    re = r === `grid` ? `min-h-0 flex-1` : `h-[50px] w-20 shrink-0 rounded-[6px]`,
    u;
  t[0] !== l || t[1] !== re
    ? ((u = ve(`pointer-events-none relative z-10 overflow-hidden`, l, re)),
      (t[0] = l),
      (t[1] = re),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== ne || t[4] !== i || t[5] !== c || t[6] !== r
    ? ((d = c
        ? (0, X.jsx)(U, { className: `size-full`, gallery: r === `grid` })
        : (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(Pe, {
                as: `span`,
                animate: !ne,
                className: `absolute inset-0 rounded-none`,
                size: `fill`,
                variant: `chatgpt-project`,
              }),
              i == null
                ? null
                : (0, X.jsx)(`img`, {
                    alt: ``,
                    className: ve(
                      `relative size-full object-cover motion-safe:transition-opacity motion-safe:duration-relaxed`,
                      ne ? `opacity-100` : `opacity-0`,
                    ),
                    loading: `lazy`,
                    src: i,
                    onLoad: () => s(i),
                    onError: () => te(i),
                  }),
            ],
          })),
      (t[3] = ne),
      (t[4] = i),
      (t[5] = c),
      (t[6] = r),
      (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] === r
    ? (f = t[9])
    : ((f =
        r === `list`
          ? (0, X.jsx)(`span`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-border)]`,
            })
          : null),
      (t[8] = r),
      (t[9] = f));
  let p;
  return (
    t[10] !== u || t[11] !== d || t[12] !== f
      ? ((p = (0, X.jsxs)(`span`, { className: u, children: [d, f] })),
        (t[10] = u),
        (t[11] = d),
        (t[12] = f),
        (t[13] = p))
      : (p = t[13]),
    p
  );
}
var J, Y, X;
function nt() {
  return (nt = e(() => {
    ((J = D()), b(), (Y = A()), F(), Ke(), K(), (X = k()));
  }))();
}
function rt(e) {
  let t = (0, Z.c)(10),
    { dateString: n } = e,
    r = N(),
    i;
  t[0] !== n || t[1] !== r ? ((i = Ne(n, r)), (t[0] = n), (t[1] = r), (t[2] = i)) : (i = t[2]);
  let { unit: a, value: o } = i;
  if (a === `minute`) {
    let e;
    return (
      t[3] === o
        ? (e = t[4])
        : ((e = (0, Q.jsx)(l, {
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
        : ((e = (0, Q.jsx)(l, {
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
        ? ((e = (0, Q.jsx)(l, {
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
      : ((s = (0, Q.jsx)(h, { value: n, month: `short`, day: `numeric` })), (t[8] = n), (t[9] = s)),
    s
  );
}
var Z, Q;
function it() {
  return (it = e(() => {
    ((Z = D()), C(), j(), je(), (Q = k()));
  }))();
}
export { U as a, Ze as c, nt as i, z as l, it as n, K as o, q as r, Qe as s, rt as t };
//# sourceMappingURL=appgen-updated-at-e59785444f71.js.map
