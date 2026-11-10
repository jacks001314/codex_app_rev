import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as t,
  AMt as n,
  Amn as r,
  Cpn as i,
  IXt as a,
  JG as o,
  JXt as s,
  Jit as c,
  KG as ee,
  Kit as te,
  O3t as l,
  Oit as ne,
  Opn as re,
  Rpn as u,
  Spn as d,
  ZG as f,
  a3t as ie,
  aYt as ae,
  cpt as p,
  cv as oe,
  dzt as se,
  e0t as m,
  fzt as h,
  gMt as g,
  hMt as _,
  hZt as ce,
  hmn as v,
  k1t as le,
  kMt as ue,
  kit as y,
  kmn as b,
  lHt as x,
  lv as S,
  lzt as de,
  o3t as C,
  pZt as fe,
  sYt as pe,
  spt as me,
  uHt as he,
  zpn as w,
} from "./app-initial-f094ef01c64d.js";
import {
  Gw as ge,
  Hw as T,
  Kw as E,
  Uw as _e,
  Vw as ve,
  Ww as D,
} from "./app-primary-4c40d73a1074.js";
import { a as O, i as ye } from "./start-appgen-conversation-389745f7419d.js";
import { n as k, t as be } from "./trending-topics-fd625d5ea6e1.js";
import { n as xe, t as A } from "./open-appgen-share-dialog-5b55c8a7fe5b.js";
function Se(e) {
  let t = (0, N.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, viewMode: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a =
      i === `list`
        ? `col-span-full grid-cols-subgrid p-3`
        : `grid-rows-[auto_auto] border border-subtle bg-primary-soft-alpha`,
    o;
  t[4] !== n || t[5] !== a
    ? ((o = u(
        `relative grid min-w-0 items-center overflow-hidden rounded-xl hover:bg-background-primary-ghost-hover/50`,
        a,
        n,
      )),
      (t[4] = n),
      (t[5] = a),
      (t[6] = o))
    : (o = t[6]);
  let s;
  return (
    t[7] !== r || t[8] !== o
      ? ((s = (0, P.jsx)(`div`, { className: o, ...r })), (t[7] = r), (t[8] = o), (t[9] = s))
      : (s = t[9]),
    s
  );
}
function Ce(e) {
  let t = (0, N.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ children: n, className: r, viewMode: a, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = a === `list` ? `h-[50px] w-20` : `aspect-square w-full`,
    s;
  t[5] !== r || t[6] !== o
    ? ((s = u(`relative shrink-0 overflow-hidden`, o, r)), (t[5] = r), (t[6] = o), (t[7] = s))
    : (s = t[7]);
  let c;
  return (
    t[8] !== n || t[9] !== i || t[10] !== s
      ? ((c = (0, P.jsx)(`div`, { className: s, ...i, children: n })),
        (t[8] = n),
        (t[9] = i),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function we(e) {
  let t = (0, N.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, viewMode: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = i === `list` ? `text-sm leading-5` : `text-xs leading-[18px]`,
    o;
  t[4] !== n || t[5] !== a
    ? ((o = u(`truncate font-medium text-default`, a, n)), (t[4] = n), (t[5] = a), (t[6] = o))
    : (o = t[6]);
  let s;
  return (
    t[7] !== r || t[8] !== o
      ? ((s = (0, P.jsx)(`div`, { className: o, ...r })), (t[7] = r), (t[8] = o), (t[9] = s))
      : (s = t[9]),
    s
  );
}
function j(e) {
  let t = (0, N.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = u(`text-xs leading-[18px] text-secondary`, n)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, P.jsx)(`div`, { className: i, ...r })), (t[5] = r), (t[6] = i), (t[7] = a))
      : (a = t[7]),
    a
  );
}
function Te(e) {
  let t = (0, N.c)(5),
    { actions: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, P.jsx)(`div`, {
        className: `pointer-events-auto relative z-10 flex items-center gap-1 pe-2`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, P.jsxs)(`div`, {
          className: `pointer-events-none relative z-10 grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center border-t border-subtle`,
          children: [r, i],
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function M(e) {
  let t = (0, N.c)(11),
    { disabled: n, itemName: r, onContinue: a, viewMode: o } = e,
    s = n !== void 0 && n,
    c = re(),
    ee;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, P.jsx)(i, {
        id: `appgenPage.libraryItem.continueChat.tooltip`,
        defaultMessage: `Continue chat`,
        description: `Tooltip for continuing work on a Library item in chat`,
      })),
      (t[0] = ee))
    : (ee = t[0]);
  let l;
  t[1] !== c || t[2] !== r
    ? ((l = c.formatMessage(
        {
          id: `appgenPage.libraryItem.continueChat`,
          defaultMessage: `Continue chat for {itemName}`,
          description: `Accessible label for continuing work on a Library item in chat`,
        },
        { itemName: r },
      )),
      (t[1] = c),
      (t[2] = r),
      (t[3] = l))
    : (l = t[3]);
  let ne = o === `grid` ? `ghost` : `ghostTertiary`,
    u = o === `grid` ? `toolbar` : `composer`,
    d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, P.jsx)(_, { asset: me })), (t[4] = d))
    : (d = t[4]);
  let f;
  return (
    t[5] !== s || t[6] !== a || t[7] !== l || t[8] !== ne || t[9] !== u
      ? ((f = (0, P.jsx)(te, {
          tooltipContent: ee,
          children: (0, P.jsx)(ue, {
            "aria-label": l,
            color: ne,
            disabled: s,
            size: u,
            uniform: !0,
            onClick: a,
            children: d,
          }),
        })),
        (t[5] = s),
        (t[6] = a),
        (t[7] = l),
        (t[8] = ne),
        (t[9] = u),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
function Ee(e) {
  let t = (0, N.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, hideWhenCompact: i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a = i !== void 0 && i && `[@container_(max-width:620px)]:hidden`,
    o;
  t[4] !== n || t[5] !== a
    ? ((o = u(`ps-4 text-xs leading-[18px] text-secondary`, a, n)),
      (t[4] = n),
      (t[5] = a),
      (t[6] = o))
    : (o = t[6]);
  let s;
  return (
    t[7] !== r || t[8] !== o
      ? ((s = (0, P.jsx)(`div`, { className: o, ...r })), (t[7] = r), (t[8] = o), (t[9] = s))
      : (s = t[9]),
    s
  );
}
function De(e) {
  let t = (0, N.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = u(
        `pointer-events-auto relative z-10 flex items-center gap-2 ps-4 [@container_(max-width:420px)]:gap-1 [@container_(max-width:420px)]:ps-2`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, P.jsx)(`div`, { className: i, ...r })), (t[5] = r), (t[6] = i), (t[7] = a))
      : (a = t[7]),
    a
  );
}
var N,
  P,
  F,
  Oe = e(() => {
    ((N = b()),
      p(),
      w(),
      d(),
      n(),
      g(),
      c(),
      (P = v()),
      (F = `absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`));
  });
function I(e) {
  let n = (0, ke.c)(123),
    {
      canManage: r,
      disabled: a,
      disabledBy: c,
      onEdit: l,
      projectId: u,
      projectTitle: d,
      surface: f,
      unpublished: ae,
      viewMode: p,
    } = e,
    m = r === void 0 || r,
    h = a !== void 0 && a,
    g = ae !== void 0 && ae,
    _ = t(ie),
    v = re(),
    y = s(),
    b = pe(`262557526`),
    x = f === `sites` && p === `list`,
    S;
  n[0] !== u || n[1] !== _ || n[2] !== f
    ? ((S = (e) => {
        he(_, {
          action: e,
          projectId: u,
          source:
            f === `sites`
              ? ce.CODEX_APPGEN_INTERACTION_SOURCE_SITES
              : ce.CODEX_APPGEN_INTERACTION_SOURCE_LIBRARY,
        });
      }),
      (n[0] = u),
      (n[1] = _),
      (n[2] = f),
      (n[3] = S))
    : (S = n[3]);
  let C = S,
    me;
  n[4] !== C || n[5] !== l
    ? ((me = () => {
        (C(fe.CODEX_APPGEN_INTERACTION_ACTION_EDIT_WITH_CHAT_CLICKED), l(`edit`));
      }),
      (n[4] = C),
      (n[5] = l),
      (n[6] = me))
    : (me = n[6]);
  let w = me,
    T;
  n[7] === l
    ? (T = n[8])
    : ((T = () => {
        l(`publish`);
      }),
      (n[7] = l),
      (n[8] = T));
  let E = T,
    D;
  n[9] !== u || n[10] !== _ || n[11] !== f
    ? ((D = () => {
        xe(_, u, {
          source:
            f === `library`
              ? le.CODEX_SITES_SHARING_SOURCE_LIBRARY
              : le.CODEX_SITES_SHARING_SOURCE_SITES,
        });
      }),
      (n[9] = u),
      (n[10] = _),
      (n[11] = f),
      (n[12] = D))
    : (D = n[12]);
  let O = D,
    k;
  n[13] !== C || n[14] !== y || n[15] !== u
    ? ((k = () => {
        (C(fe.CODEX_APPGEN_INTERACTION_ACTION_SETTINGS_OPENED), y(se(u)));
      }),
      (n[13] = C),
      (n[14] = y),
      (n[15] = u),
      (n[16] = k))
    : (k = n[16]);
  let A = k,
    Se;
  n[17] !== v || n[18] !== d
    ? ((Se = v.formatMessage(
        {
          id: `appgenPage.actions.more`,
          defaultMessage: `More actions for {siteTitle}`,
          description: `Accessible label for opening the actions menu for a site`,
        },
        { siteTitle: d },
      )),
      (n[17] = v),
      (n[18] = d),
      (n[19] = Se))
    : (Se = n[19]);
  let Ce = Se,
    we;
  n[20] !== h || n[21] !== c
    ? ((we = h ? (0, L.jsx)(ye, { disabledBy: c }) : null), (n[20] = h), (n[21] = c), (n[22] = we))
    : (we = n[22]);
  let j = we,
    Te;
  n[23] === v
    ? (Te = n[24])
    : ((Te = v.formatMessage({
        id: `appgenPage.publish.ownerRequired`,
        defaultMessage: `Only the owner can publish the first version`,
        description: `Tooltip explaining why only the owner can publish a Site`,
      })),
      (n[23] = v),
      (n[24] = Te));
  let M = Te,
    Ee;
  n[25] !== m || n[26] !== v || n[27] !== M || n[28] !== g
    ? ((Ee =
        g && !m
          ? (0, L.jsx)(te, {
              tooltipContent: M,
              children: (0, L.jsx)(`span`, {
                "aria-disabled": `true`,
                "aria-label": v.formatMessage({
                  id: `appgenPage.publish.label`,
                  defaultMessage: `Publish`,
                  description: `Button label for publishing an unpublished Site`,
                }),
                className: `inline-flex [@container_(max-width:520px)]:hidden`,
                role: `button`,
                tabIndex: 0,
                children: (0, L.jsxs)(ue, {
                  "aria-hidden": `true`,
                  "aria-label": v.formatMessage({
                    id: `appgenPage.publish.label`,
                    defaultMessage: `Publish`,
                    description: `Button label for publishing an unpublished Site`,
                  }),
                  className: `[@container_(max-width:720px)]:aspect-square [@container_(max-width:720px)]:!px-0`,
                  color: `secondary`,
                  disabled: !0,
                  size: `toolbar`,
                  children: [
                    (0, L.jsx)(oe, {
                      "aria-hidden": !0,
                      className: `icon-xs hidden [@container_(max-width:720px)]:block`,
                    }),
                    (0, L.jsx)(`span`, {
                      className: `[@container_(max-width:720px)]:hidden`,
                      children: (0, L.jsx)(i, {
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
      (n[25] = m),
      (n[26] = v),
      (n[27] = M),
      (n[28] = g),
      (n[29] = Ee))
    : (Ee = n[29]);
  let N = Ee,
    P = h && c === `openai`,
    F;
  n[30] === j
    ? (F = n[31])
    : ((F =
        j ??
        (0, L.jsx)(i, {
          id: `appgenPage.edit.tooltip`,
          defaultMessage: `Edit`,
          description: `Tooltip for starting a new conversation to edit a site`,
        })),
      (n[30] = j),
      (n[31] = F));
  let Oe = x ? `[@container_(max-width:520px)]:hidden` : void 0,
    I;
  n[32] !== v || n[33] !== d
    ? ((I = v.formatMessage(
        {
          id: `appgenPage.edit`,
          defaultMessage: `Edit {siteTitle}`,
          description: `Accessible label for starting a new conversation to edit a site from the sites list`,
        },
        { siteTitle: d },
      )),
      (n[32] = v),
      (n[33] = d),
      (n[34] = I))
    : (I = n[34]);
  let Ae = p === `grid` ? `ghost` : `ghostTertiary`,
    R = p === `grid` ? `toolbar` : `composer`,
    z;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, L.jsx)(_e, { "aria-hidden": !0, className: `icon-xs` })), (n[35] = z))
    : (z = n[35]);
  let B;
  n[36] !== h || n[37] !== w || n[38] !== Oe || n[39] !== I || n[40] !== Ae || n[41] !== R
    ? ((B = (0, L.jsx)(ue, {
        className: Oe,
        "aria-label": I,
        color: Ae,
        disabled: h,
        size: R,
        uniform: !0,
        onClick: w,
        children: z,
      })),
      (n[36] = h),
      (n[37] = w),
      (n[38] = Oe),
      (n[39] = I),
      (n[40] = Ae),
      (n[41] = R),
      (n[42] = B))
    : (B = n[42]);
  let V;
  n[43] !== P || n[44] !== F || n[45] !== B
    ? ((V = (0, L.jsx)(te, { interactive: P, tooltipContent: F, children: B })),
      (n[43] = P),
      (n[44] = F),
      (n[45] = B),
      (n[46] = V))
    : (V = n[46]);
  let H = V,
    U = m && (b || g),
    je = U ? void 0 : `hidden [@container_(max-width:520px)]:inline-flex`,
    Me;
  n[47] !== b ||
  n[48] !== m ||
  n[49] !== x ||
  n[50] !== h ||
  n[51] !== w ||
  n[52] !== A ||
  n[53] !== E ||
  n[54] !== O ||
  n[55] !== C ||
  n[56] !== Ce ||
  n[57] !== y ||
  n[58] !== je ||
  n[59] !== u ||
  n[60] !== M ||
  n[61] !== g
    ? ((Me = h
        ? (0, L.jsx)(ge, { className: je, disabled: !0, label: Ce })
        : (0, L.jsxs)(ee, {
            align: `end`,
            contentWidth: `menu`,
            triggerButton: (0, L.jsx)(ge, { className: je, label: Ce }),
            children: [
              g
                ? (0, L.jsx)(o.Item, {
                    disabled: !m,
                    focusableWhenDisabled: !m,
                    LeftIcon: oe,
                    onSelect: m ? E : void 0,
                    tooltipText: m ? void 0 : M,
                    children: (0, L.jsx)(i, {
                      id: `appgenPage.publish.label`,
                      defaultMessage: `Publish`,
                      description: `Button label for publishing an unpublished Site`,
                    }),
                  })
                : null,
              m && (g || x)
                ? (0, L.jsx)(o.Item, {
                    LeftIcon: ve,
                    onSelect: O,
                    children: (0, L.jsx)(i, {
                      id: `appgenPage.share.label`,
                      defaultMessage: `Share`,
                      description: `Button label for opening site sharing settings`,
                    }),
                  })
                : null,
              (0, L.jsx)(o.Item, {
                LeftIcon: _e,
                onSelect: w,
                children: (0, L.jsx)(i, {
                  id: `appgenPage.edit.label`,
                  defaultMessage: `Edit`,
                  description: `Menu item for starting a new conversation to edit a site`,
                }),
              }),
              m && b
                ? (0, L.jsx)(o.Item, {
                    LeftIcon: be,
                    onSelect: () => {
                      (C(fe.CODEX_APPGEN_INTERACTION_ACTION_ANALYTICS_OPENED), y(de(u)));
                    },
                    children: (0, L.jsx)(i, {
                      id: `appgenPage.analytics.label`,
                      defaultMessage: `Analytics`,
                      description: `Menu item for opening site analytics`,
                    }),
                  })
                : null,
              m
                ? (0, L.jsx)(o.Item, {
                    LeftIcon: ne,
                    onSelect: A,
                    children: (0, L.jsx)(i, {
                      id: `appgenPage.settings.label`,
                      defaultMessage: `Settings`,
                      description: `Menu item for opening site settings`,
                    }),
                  })
                : null,
            ],
          })),
      (n[47] = b),
      (n[48] = m),
      (n[49] = x),
      (n[50] = h),
      (n[51] = w),
      (n[52] = A),
      (n[53] = E),
      (n[54] = O),
      (n[55] = C),
      (n[56] = Ce),
      (n[57] = y),
      (n[58] = je),
      (n[59] = u),
      (n[60] = M),
      (n[61] = g),
      (n[62] = Me))
    : (Me = n[62]);
  let Ne = Me;
  if (!m) {
    let e = x ? Ne : null,
      t;
    n[63] !== H || n[64] !== N || n[65] !== e
      ? ((t = (0, L.jsxs)(L.Fragment, { children: [N, H, e] })),
        (n[63] = H),
        (n[64] = N),
        (n[65] = e),
        (n[66] = t))
      : (t = n[66]);
    let r = t,
      i;
    return (
      n[67] !== r || n[68] !== p
        ? ((i = p === `grid` ? r : (0, L.jsx)(De, { children: r })),
          (n[67] = r),
          (n[68] = p),
          (n[69] = i))
        : (i = n[69]),
      i
    );
  }
  let Pe = h && c === `openai`,
    W;
  n[70] === j
    ? (W = n[71])
    : ((W =
        j ??
        (0, L.jsx)(i, {
          id: `appgenPage.settings.tooltip`,
          defaultMessage: `Settings`,
          description: `Tooltip for opening site settings from the sites list`,
        })),
      (n[70] = j),
      (n[71] = W));
  let Fe = x ? `[@container_(max-width:520px)]:hidden` : void 0,
    G;
  n[72] !== v || n[73] !== d
    ? ((G = v.formatMessage(
        {
          id: `appgenPage.openSettings`,
          defaultMessage: `Open settings for {siteTitle}`,
          description: `Accessible label for opening site settings from the sites list`,
        },
        { siteTitle: d },
      )),
      (n[72] = v),
      (n[73] = d),
      (n[74] = G))
    : (G = n[74]);
  let Ie = p === `grid` ? `ghost` : `ghostTertiary`,
    Le = p === `grid` ? `toolbar` : `composer`,
    Re;
  n[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = (0, L.jsx)(ne, { "aria-hidden": !0, className: `icon-xs` })), (n[75] = Re))
    : (Re = n[75]);
  let K;
  n[76] !== h || n[77] !== A || n[78] !== Fe || n[79] !== G || n[80] !== Ie || n[81] !== Le
    ? ((K = (0, L.jsx)(ue, {
        className: Fe,
        "aria-label": G,
        color: Ie,
        disabled: h,
        size: Le,
        uniform: !0,
        onClick: A,
        children: Re,
      })),
      (n[76] = h),
      (n[77] = A),
      (n[78] = Fe),
      (n[79] = G),
      (n[80] = Ie),
      (n[81] = Le),
      (n[82] = K))
    : (K = n[82]);
  let ze;
  n[83] !== Pe || n[84] !== W || n[85] !== K
    ? ((ze = (0, L.jsx)(te, { interactive: Pe, tooltipContent: W, children: K })),
      (n[83] = Pe),
      (n[84] = W),
      (n[85] = K),
      (n[86] = ze))
    : (ze = n[86]);
  let Be = ze,
    Ve = p === `grid` ? `ghost` : `outline`,
    He = x
      ? `[@container_(max-width:520px)]:hidden`
      : `[@container_(max-width:420px)]:aspect-square [@container_(max-width:420px)]:!px-0`,
    Ue = h && c === `openai`,
    q;
  n[87] !== j || n[88] !== g
    ? ((q =
        j ??
        (g
          ? (0, L.jsx)(i, {
              id: `appgenPage.publish.label`,
              defaultMessage: `Publish`,
              description: `Button label for publishing an unpublished Site`,
            })
          : (0, L.jsx)(i, {
              id: `appgenPage.share.tooltip`,
              defaultMessage: `Share`,
              description: `Tooltip for opening site sharing settings`,
            }))),
      (n[87] = j),
      (n[88] = g),
      (n[89] = q))
    : (q = n[89]);
  let We = p === `list` ? He : void 0,
    J;
  n[90] !== v || n[91] !== d || n[92] !== g
    ? ((J = g
        ? v.formatMessage(
            {
              id: `appgenPage.publish`,
              defaultMessage: `Publish {siteTitle}`,
              description: `Accessible label for publishing an unpublished Site from the Sites list`,
            },
            { siteTitle: d },
          )
        : v.formatMessage(
            {
              id: `appgenPage.share`,
              defaultMessage: `Share {siteTitle}`,
              description: `Accessible label for opening site sharing settings from the sites list`,
            },
            { siteTitle: d },
          )),
      (n[90] = v),
      (n[91] = d),
      (n[92] = g),
      (n[93] = J))
    : (J = n[93]);
  let Ge = g ? `primary` : Ve,
    Ke = !g && p === `grid`,
    qe = g ? E : O,
    Y;
  n[94] === g
    ? (Y = n[95])
    : ((Y = g
        ? (0, L.jsx)(i, {
            id: `appgenPage.publish.label`,
            defaultMessage: `Publish`,
            description: `Button label for publishing an unpublished Site`,
          })
        : (0, L.jsx)(ve, { "aria-hidden": !0, className: `icon-xs` })),
      (n[94] = g),
      (n[95] = Y));
  let X;
  n[96] !== g || n[97] !== p
    ? ((X =
        !g && p === `list`
          ? (0, L.jsx)(`span`, {
              className: `[@container_(max-width:520px)]:hidden`,
              children: (0, L.jsx)(i, {
                id: `appgenPage.share.label`,
                defaultMessage: `Share`,
                description: `Button label for opening site sharing settings`,
              }),
            })
          : null),
      (n[96] = g),
      (n[97] = p),
      (n[98] = X))
    : (X = n[98]);
  let Z;
  n[99] !== h ||
  n[100] !== We ||
  n[101] !== J ||
  n[102] !== Ge ||
  n[103] !== Ke ||
  n[104] !== qe ||
  n[105] !== Y ||
  n[106] !== X
    ? ((Z = (0, L.jsxs)(ue, {
        className: We,
        "aria-label": J,
        color: Ge,
        disabled: h,
        size: `toolbar`,
        uniform: Ke,
        onClick: qe,
        children: [Y, X],
      })),
      (n[99] = h),
      (n[100] = We),
      (n[101] = J),
      (n[102] = Ge),
      (n[103] = Ke),
      (n[104] = qe),
      (n[105] = Y),
      (n[106] = X),
      (n[107] = Z))
    : (Z = n[107]);
  let Q;
  n[108] !== Ue || n[109] !== q || n[110] !== Z
    ? ((Q = (0, L.jsx)(te, { interactive: Ue, tooltipContent: q, children: Z })),
      (n[108] = Ue),
      (n[109] = q),
      (n[110] = Z),
      (n[111] = Q))
    : (Q = n[111]);
  let Je = U || x ? Ne : null,
    $;
  n[112] !== H || n[113] !== Be || n[114] !== U || n[115] !== f
    ? (($ = U
        ? null
        : (0, L.jsxs)(L.Fragment, { children: [f === `sites` ? H : Be, f === `sites` ? Be : H] })),
      (n[112] = H),
      (n[113] = Be),
      (n[114] = U),
      (n[115] = f),
      (n[116] = $))
    : ($ = n[116]);
  let Ye;
  n[117] !== Q || n[118] !== Je || n[119] !== $
    ? ((Ye = (0, L.jsxs)(L.Fragment, { children: [Q, Je, $] })),
      (n[117] = Q),
      (n[118] = Je),
      (n[119] = $),
      (n[120] = Ye))
    : (Ye = n[120]);
  let Xe = Ye;
  if (p === `grid`) return Xe;
  let Ze;
  return (
    n[121] === Xe
      ? (Ze = n[122])
      : ((Ze = (0, L.jsx)(De, { children: Xe })), (n[121] = Xe), (n[122] = Ze)),
    Ze
  );
}
var ke,
  L,
  Ae = e(() => {
    ((ke = b()),
      m(),
      l(),
      d(),
      a(),
      n(),
      f(),
      E(),
      c(),
      S(),
      D(),
      k(),
      y(),
      T(),
      C(),
      ae(),
      x(),
      O(),
      Oe(),
      h(),
      A(),
      (L = v()));
  }),
  R,
  z,
  B = e(() => {
    (r(),
      (R = v()),
      (z = (e) =>
        (0, R.jsxs)(`svg`, {
          width: 80,
          height: 50,
          viewBox: `0 0 80 50`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, R.jsx)(`rect`, { width: 80, height: 50, fill: `var(--color-surface)` }),
            (0, R.jsx)(`path`, {
              d: `M46.6667 30.8485C46.6667 31.8526 45.8526 32.6667 44.8485 32.6667H41.8182C40.814 32.6667 40 31.8526 40 30.8485V26H44.8485C45.8526 26 46.6667 26.814 46.6667 27.8182V30.8485Z`,
              fill: `var(--color-text-info)`,
            }),
            (0, R.jsx)(`path`, {
              d: `M45.3333 19.3359C46.0697 19.3359 46.6667 19.9329 46.6667 20.6693V22.6693C46.6667 23.4057 46.0697 24.0026 45.3333 24.0026H43.3333C42.597 24.0026 42 23.4057 42 22.6693V20.6693C42 19.9329 42.597 19.3359 43.3333 19.3359H45.3333Z`,
              fill: `var(--color-text-info)`,
              fillOpacity: 0.78,
            }),
            (0, R.jsx)(`path`, {
              d: `M36.6667 28C37.4031 28 38 28.597 38 29.3333V31.3333C38 32.0697 37.4031 32.6667 36.6667 32.6667H34.6667C33.9303 32.6667 33.3334 32.0697 33.3334 31.3333V29.3333C33.3334 28.597 33.9303 28 34.6667 28H36.6667Z`,
              fill: `var(--color-text-info)`,
              fillOpacity: 0.78,
            }),
            (0, R.jsx)(`path`, {
              d: `M40 26.0026H35.1516C34.1474 26.0026 33.3334 25.1886 33.3334 24.1844V21.1541C33.3334 20.15 34.1474 19.3359 35.1516 19.3359H38.1819C39.186 19.3359 40 20.15 40 21.1541V26.0026Z`,
              fill: `var(--color-text-info)`,
            }),
            (0, R.jsx)(`path`, {
              d: `M57.5 7H60.5`,
              stroke: `var(--color-border)`,
              strokeLinecap: `round`,
            }),
            (0, R.jsx)(`rect`, {
              x: 64,
              y: 7,
              width: 2,
              height: 2,
              rx: 0.5,
              fill: `var(--color-border)`,
            }),
            (0, R.jsx)(`path`, {
              d: `M67.5 5C67.7761 5 68 5.22386 68 5.5V7.5C68 7.77614 67.7761 8 67.5 8H67V6H65V5.5C65 5.22386 65.2239 5 65.5 5H67.5Z`,
              fill: `var(--color-border)`,
            }),
            (0, R.jsx)(`path`, {
              d: `M74.1464 5.14645C74.3417 4.95118 74.6582 4.95118 74.8535 5.14645C75.0487 5.34171 75.0487 5.65822 74.8535 5.85348L73.707 6.99996L74.8535 8.14645C75.0487 8.34171 75.0487 8.65822 74.8535 8.85348C74.6582 9.04874 74.3417 9.04874 74.1464 8.85348L73 7.70699L71.8535 8.85348C71.6582 9.04874 71.3417 9.04874 71.1464 8.85348C70.9512 8.65822 70.9512 8.34171 71.1464 8.14645L72.2929 6.99996L71.1464 5.85348C70.9512 5.65822 70.9512 5.34171 71.1464 5.14645C71.3417 4.95118 71.6582 4.95118 71.8535 5.14645L73 6.29293L74.1464 5.14645Z`,
              fill: `var(--color-border)`,
            }),
          ],
        })));
  }),
  V,
  H,
  U = e(() => {
    (r(),
      (V = v()),
      (H = (e) =>
        (0, V.jsxs)(`svg`, {
          width: 80,
          height: 50,
          viewBox: `0 0 80 50`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, V.jsx)(`rect`, { width: 80, height: 50, fill: `var(--color-surface)` }),
            (0, V.jsx)(`rect`, {
              opacity: 0.7,
              x: 5,
              y: 5,
              width: 4,
              height: 4,
              rx: 2,
              fill: `#FF5F57`,
            }),
            (0, V.jsx)(`rect`, {
              opacity: 0.7,
              x: 11,
              y: 5,
              width: 4,
              height: 4,
              rx: 2,
              fill: `#FEBC2E`,
            }),
            (0, V.jsx)(`rect`, {
              opacity: 0.7,
              x: 17,
              y: 5,
              width: 4,
              height: 4,
              rx: 2,
              fill: `#28C840`,
            }),
            (0, V.jsx)(`path`, {
              d: `M46.6667 30.8485C46.6667 31.8526 45.8526 32.6667 44.8485 32.6667H41.8182C40.814 32.6667 40 31.8526 40 30.8485V26H44.8485C45.8526 26 46.6667 26.814 46.6667 27.8182V30.8485Z`,
              fill: `var(--color-text-info)`,
            }),
            (0, V.jsx)(`path`, {
              d: `M45.3333 19.3359C46.0697 19.3359 46.6667 19.9329 46.6667 20.6693V22.6693C46.6667 23.4057 46.0697 24.0026 45.3333 24.0026H43.3333C42.597 24.0026 42 23.4057 42 22.6693V20.6693C42 19.9329 42.597 19.3359 43.3333 19.3359H45.3333Z`,
              fill: `var(--color-text-info)`,
              fillOpacity: 0.78,
            }),
            (0, V.jsx)(`path`, {
              d: `M36.6667 28C37.4031 28 38 28.597 38 29.3333V31.3333C38 32.0697 37.4031 32.6667 36.6667 32.6667H34.6667C33.9303 32.6667 33.3334 32.0697 33.3334 31.3333V29.3333C33.3334 28.597 33.9303 28 34.6667 28H36.6667Z`,
              fill: `var(--color-text-info)`,
              fillOpacity: 0.78,
            }),
            (0, V.jsx)(`path`, {
              d: `M40 26.0026H35.1516C34.1474 26.0026 33.3334 25.1886 33.3334 24.1844V21.1541C33.3334 20.15 34.1474 19.3359 35.1516 19.3359H38.1819C39.186 19.3359 40 20.15 40 21.1541V26.0026Z`,
              fill: `var(--color-text-info)`,
            }),
          ],
        })));
  });
export {
  I as a,
  M as c,
  Ce as d,
  Se as f,
  Oe as g,
  Ee as h,
  B as i,
  Te as l,
  De as m,
  U as n,
  Ae as o,
  we as p,
  z as r,
  F as s,
  H as t,
  j as u,
};
//# sourceMappingURL=sites-default-thumbnail-36d2e0dce693.js.map
