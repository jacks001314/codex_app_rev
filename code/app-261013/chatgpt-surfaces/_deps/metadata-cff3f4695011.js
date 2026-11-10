import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  BV as n,
  Bh as r,
  Ch as i,
  Dh as a,
  EPt as o,
  Eh as s,
  Fz as c,
  IDt as l,
  Mz as u,
  Nz as d,
  Oh as f,
  PV as p,
  Pxt as m,
  Pz as h,
  Sh as g,
  TJ as _,
  TLt as v,
  Th as y,
  VDt as b,
  Vxt as x,
  XA as S,
  YA as C,
  ZA as ee,
  _Mt as w,
  _h as T,
  bh as te,
  cz as E,
  gMt as D,
  gh as O,
  hh as k,
  jDt as A,
  oIt as j,
  pLt as M,
  sz as N,
  vh as P,
  vzt as F,
  wh as ne,
  xMt as I,
  xh as L,
  yh as R,
  yzt as z,
  z4 as B,
  zh as V,
  zxt as re,
} from "./app-shared-bbfeca5e5737.js";
import {
  AOn as H,
  Aut as U,
  B1t as W,
  GMr as G,
  I1t as ie,
  L1t as ae,
  OPr as K,
  P1t as q,
  Qb as J,
  R1t as oe,
  Xb as se,
  Xl as ce,
  Zl as Y,
  eDr as le,
  jut as ue,
  kOn as de,
  kPr as fe,
  kut as pe,
  nDr as me,
  nc as he,
  ox as ge,
  rc as _e,
  tNr as ve,
  z1t as ye,
} from "./app-initial-5851df3f6cb1.js";
import { Us as be, Ws as xe } from "./app-primary-fe8a450b3b04.js";
import { n as Se, t as Ce } from "./parsePhoneNumber-4ef2d042ec5d.js";
import { n as we, t as Te } from "./open-status-531dd613a4a6.js";
import { n as Ee, r as De, t as Oe } from "./quote-action-5a2dc8ce8a55.js";
var ke, Ae, je, Me;
function Ne() {
  return (Ne = e(() => {
    ((ke = `_tooltip_13lhw_2`),
      (Ae = `_body_13lhw_11`),
      (je = `_caret_13lhw_24`),
      (Me = { tooltip: ke, body: Ae, caret: je }));
  }))();
}
function Pe(e) {
  let t = (0, Fe.c)(11),
    { children: n, className: r, label: i, showTooltip: a } = e,
    o =
      a &&
      `shrink-0 rounded-sm select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
    s;
  t[0] !== r || t[1] !== o
    ? ((s = D(`inline-flex align-middle`, o, r)), (t[0] = r), (t[1] = o), (t[2] = s))
    : (s = t[2]);
  let c = a ? 0 : void 0,
    u;
  t[3] !== n || t[4] !== i || t[5] !== s || t[6] !== c
    ? ((u = (0, Ie.jsx)(`span`, { className: s, "aria-label": i, role: `img`, tabIndex: c, children: n })),
      (t[3] = n),
      (t[4] = i),
      (t[5] = s),
      (t[6] = c),
      (t[7] = u))
    : (u = t[7]);
  let d = u;
  if (!a) return d;
  let f;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Ie.jsxs)(`div`, {
        className: Me.tooltip,
        children: [
          (0, Ie.jsx)(`div`, {
            className: Me.body,
            children: (0, Ie.jsx)(l, {
              id: `businessProfiles.claimedBadge.tooltip`,
              defaultMessage: `OpenAI verified that this profile is managed by an owner or authorized representative.`,
              description: `Tooltip on the blue claimed-business badge beside a business name. It explains that OpenAI verified who manages the business profile, not the quality of the business.`,
            }),
          }),
          (0, Ie.jsx)(`span`, { className: Me.caret, "aria-hidden": `true` }),
        ],
      })),
      (t[8] = f))
    : (f = t[8]);
  let p;
  return (
    t[9] === d
      ? (p = t[10])
      : ((p = (0, Ie.jsx)(N, {
          disablePadding: !0,
          side: `top`,
          sideOffset: 0,
          tooltipMaxWidth: `min(215px, calc(100vw - 16px))`,
          variant: `unstyled`,
          tooltipContent: f,
          children: d,
        })),
        (t[9] = d),
        (t[10] = p)),
    p
  );
}
var Fe, Ie;
function Le() {
  return (Le = e(() => {
    ((Fe = F()), w(), A(), E(), Ne(), (Ie = I()));
  }))();
}
function Re(e) {
  let t = (0, Ve.c)(18),
    { business: n } = e,
    r = b(),
    i = (0, He.useId)(),
    [o, s] = (0, He.useState)(!1),
    c = !!n.hours?.length,
    d = n.is_open != null || n.is_closed_permanently;
  if (!c && !d) return null;
  let f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(u, { asset: a, className: `shrink-0` })), (t[0] = f))
    : (f = t[0]);
  let m;
  t[1] !== n || t[2] !== d
    ? ((m = (0, X.jsxs)(X.Fragment, {
        children: [
          f,
          (0, X.jsx)(`span`, {
            className: `min-w-0 flex-1 text-base font-medium`,
            children: d
              ? (0, X.jsx)(Te, { business: n, showHourDetail: !0 })
              : (0, X.jsx)(l, {
                  id: `chatgpt.localBusiness.hours.label`,
                  defaultMessage: `Hours`,
                  description: `Short label in a local business profile when its weekly opening schedule is available but its current open or closed status is unknown. Selecting the row shows the schedule.`,
                }),
          }),
        ],
      })),
      (t[1] = n),
      (t[2] = d),
      (t[3] = m))
    : (m = t[3]);
  let h = m,
    g;
  t[4] !== o || t[5] !== c || t[6] !== i || t[7] !== h
    ? ((g = c
        ? (0, X.jsxs)(`button`, {
            type: `button`,
            "aria-controls": i,
            "aria-expanded": o,
            className: `flex min-h-11 w-full cursor-interaction items-center gap-4 py-2 text-start select-none hover:bg-primary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
            onClick: () => s(!o),
            children: [h, (0, X.jsx)(p, { className: D(`text-secondary`, o && `rotate-180`) })],
          })
        : (0, X.jsx)(`div`, { className: `flex min-h-11 items-center gap-4 py-2`, children: h })),
      (t[4] = o),
      (t[5] = c),
      (t[6] = i),
      (t[7] = h),
      (t[8] = g))
    : (g = t[8]);
  let _;
  t[9] !== n.hours || t[10] !== o || t[11] !== c || t[12] !== r || t[13] !== i
    ? ((_ =
        c &&
        (0, X.jsx)(`dl`, {
          id: i,
          hidden: !o,
          className: `ms-10 pb-2 text-sm select-text`,
          children: [1, 2, 3, 4, 5, 6, 0].map((e) => {
            let t = n.hours?.filter((t) => t.day === e).sort(ze);
            return (0, X.jsxs)(
              `div`,
              {
                className: `flex gap-4 py-2`,
                children: [
                  (0, X.jsx)(`dt`, {
                    className: `w-28 shrink-0`,
                    children: r.formatDate(new Date(Date.UTC(2026, 0, 4 + e)), {
                      weekday: `long`,
                      timeZone: `UTC`,
                    }),
                  }),
                  (0, X.jsx)(`dd`, {
                    children: t?.length
                      ? t.map((e, t) =>
                          (0, X.jsx)(
                            `div`,
                            {
                              children: (0, X.jsx)(l, {
                                id: `chatgpt.localBusiness.hours.interval`,
                                defaultMessage: `{start} – {end}`,
                                description: `One opening interval in a local business profile's weekly schedule. The start and end placeholders are locale-formatted business-local opening and closing times. An end earlier than the start is the following day. Keep this compact; multiple intervals may appear for one day.`,
                                values: { start: Be(r, e.start), end: Be(r, e.end) },
                              }),
                            },
                            t,
                          ),
                        )
                      : (0, X.jsx)(l, {
                          id: `chatgpt.localBusiness.hours.closed`,
                          defaultMessage: `Closed`,
                          description: `Status for a weekday with no opening intervals in a known weekly schedule on a local business profile. This is never used when the entire schedule is unknown.`,
                        }),
                  }),
                ],
              },
              e,
            );
          }),
        })),
      (t[9] = n.hours),
      (t[10] = o),
      (t[11] = c),
      (t[12] = r),
      (t[13] = i),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  return (
    t[15] !== g || t[16] !== _
      ? ((v = (0, X.jsxs)(`div`, { children: [g, _] })), (t[15] = g), (t[16] = _), (t[17] = v))
      : (v = t[17]),
    v
  );
}
function ze(e, t) {
  return e.start.localeCompare(t.start);
}
function Be(e, t) {
  return e.formatTime(new Date(Date.UTC(2026, 0, 4, Number(t.slice(0, 2)), Number(t.slice(2, 4)))), {
    hour: `numeric`,
    minute: `2-digit`,
    timeZone: `UTC`,
  });
}
var Ve, He, X;
function Ue() {
  return (Ue = e(() => {
    ((Ve = F()), f(), w(), (He = z()), A(), d(), _(), we(), (X = I()));
  }))();
}
function We(e) {
  let t = (0, Z.c)(12),
    { reference: n, actions: r, claimActions: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = q(n)), (t[0] = n), (t[1] = a));
  let o = a,
    s;
  t[2] === n ? (s = t[3]) : ((s = ut.safeParse(n)), (t[2] = n), (t[3] = s));
  let c = s;
  if (o == null) {
    let e;
    return (
      t[4] === r
        ? (e = t[5])
        : ((e = r == null ? null : (0, $.jsx)($.Fragment, { children: r })), (t[4] = r), (t[5] = e)),
      e
    );
  }
  let l = c.success ? c.data.metadata?.map_url : null,
    u = (c.success ? c.data.layout : null) ?? `sidebar`,
    d;
  return (
    t[6] !== r || t[7] !== o || t[8] !== i || t[9] !== l || t[10] !== u
      ? ((d = (0, $.jsx)(Ge, {
          actions: r,
          business: o,
          directionsUrl: l,
          layout: u,
          renderActions: !1,
          claimActions: i,
        })),
        (t[6] = r),
        (t[7] = o),
        (t[8] = i),
        (t[9] = l),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function Ge(e) {
  let t = (0, Z.c)(16);
  if (
    re(fe, `2789236610`) &&
    !e.readOnly &&
    !e.claimActions &&
    (e.layout == null || e.layout === `sidebar`)
  ) {
    let n;
    t[0] === e ? (n = t[1]) : ((n = (0, $.jsx)(qe, { ...e })), (t[0] = e), (t[1] = n));
    let r;
    t[2] === e
      ? (r = t[3])
      : ((r = (t, n) => (0, $.jsx)(qe, { ...e, verified: t, claimAction: n })), (t[2] = e), (t[3] = r));
    let i;
    t[4] !== e.business || t[5] !== e.onAction
      ? ((i = (t) =>
          (0, $.jsx)(qe, { business: e.business, onAction: e.onAction, verified: t, readOnly: !0 })),
        (t[4] = e.business),
        (t[5] = e.onAction),
        (t[6] = i))
      : (i = t[6]);
    let a;
    t[7] !== e.business || t[8] !== r || t[9] !== i
      ? ((a = (0, $.jsx)(ct, {
          business: e.business,
          renderMetadata: r,
          renderClaimButton: Ke,
          businessPreview: i,
        })),
        (t[7] = e.business),
        (t[8] = r),
        (t[9] = i),
        (t[10] = a))
      : (a = t[10]);
    let o;
    return (
      t[11] !== n || t[12] !== a
        ? ((o = (0, $.jsx)(Q.Suspense, { fallback: n, children: a })), (t[11] = n), (t[12] = a), (t[13] = o))
        : (o = t[13]),
      o
    );
  }
  let n;
  return (t[14] === e ? (n = t[15]) : ((n = (0, $.jsx)(qe, { ...e })), (t[14] = e), (t[15] = n)), n);
}
function Ke(e, t) {
  return (0, $.jsx)(Ye, { onClick: e, request: t });
}
function qe(e) {
  let t = (0, Z.c)(60),
    {
      actions: n,
      business: r,
      directionsUrl: i,
      isOptimistic: a,
      layout: o,
      onAction: s,
      claimActions: c,
      renderActions: l,
      readOnly: d,
      fullWidth: f,
      showTitle: p,
      verified: m,
      claimAction: h,
      showClaimedBusinessTooltip: _,
    } = e,
    v = a !== void 0 && a,
    y = o === void 0 ? `sidebar` : o,
    x = l === void 0 || l,
    S = d !== void 0 && d,
    ee = f !== void 0 && f,
    w = p === void 0 || p,
    T = m !== void 0 && m,
    te = _ !== void 0 && _,
    [E, O] = (0, Q.useState)(!1),
    [k, A] = (0, Q.useState)(!1),
    j = _e(),
    M = (0, Q.useContext)(ce),
    N = b(),
    P;
  t[0] === r.phone
    ? (P = t[1])
    : ((P = r.phone?.trim() ? C(`tel:${r.phone.trim()}`) : null), (t[0] = r.phone), (t[1] = P));
  let F = P,
    I;
  t[2] === r.phone
    ? (I = t[3])
    : ((I = r.phone ? Se(r.phone, `US`)?.formatNational() : null), (t[2] = r.phone), (t[3] = I));
  let L = I,
    R;
  t[4] === r.address ? (R = t[5]) : ((R = r.address?.trim()), (t[4] = r.address), (t[5] = R));
  let z = R,
    B = y === `sidebar`,
    V;
  t[6] !== z || t[7] !== r.name
    ? ((V = [r.name, z].filter(Boolean)), (t[6] = z), (t[7] = r.name), (t[8] = V))
    : (V = t[8]);
  let re = V.join(`, `),
    H = !ee && `max-w-md`,
    U;
  t[9] === H ? (U = t[10]) : ((U = D(`not-prose mb-4 text-base text-default`, H)), (t[9] = H), (t[10] = U));
  let W = v ? `status` : void 0,
    G;
  t[11] !== r.name ||
  t[12] !== k ||
  t[13] !== N ||
  t[14] !== B ||
  t[15] !== S ||
  t[16] !== te ||
  t[17] !== w ||
  t[18] !== j?.imageEngagementContext?.surfaceLocation ||
  t[19] !== T
    ? ((G =
        B && w
          ? (0, $.jsxs)(`h2`, {
              className: `mb-1 text-[22px] leading-7 font-medium break-words`,
              children: [
                r.name,
                (T || k) &&
                  (0, $.jsx)(Pe, {
                    className: `ms-2`,
                    showTooltip:
                      !S &&
                      B &&
                      (te ||
                        j?.imageEngagementContext?.surfaceLocation ===
                          se.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR),
                    label: N.formatMessage({
                      id: `chatgpt.localBusiness.claim.verified.label`,
                      defaultMessage: `Verified business`,
                      description: `Accessible label for the blue badge beside a business name after ownership approval`,
                    }),
                    children: (0, $.jsx)(u, { asset: ne }),
                  }),
              ],
            })
          : null),
      (t[11] = r.name),
      (t[12] = k),
      (t[13] = N),
      (t[14] = B),
      (t[15] = S),
      (t[16] = te),
      (t[17] = w),
      (t[18] = j?.imageEngagementContext?.surfaceLocation),
      (t[19] = T),
      (t[20] = G))
    : (G = t[20]);
  let ie = !S,
    K;
  t[21] !== r || t[22] !== B || t[23] !== ie
    ? ((K = (0, $.jsx)(Xe, { business: r, showPrice: B, linkRating: ie, wrap: B })),
      (t[21] = r),
      (t[22] = B),
      (t[23] = ie),
      (t[24] = K))
    : (K = t[24]);
  let q;
  t[25] !== r || t[26] !== i || t[27] !== y || t[28] !== s || t[29] !== S || t[30] !== x
    ? ((q =
        x && y !== `one-line`
          ? (0, $.jsx)(`div`, {
              className: `mt-3`,
              children: (0, $.jsx)(et, {
                allowQuoteAction: !S,
                business: r,
                directionsUrl: i,
                onAction: s,
                openTarget: S ? `external-browser` : void 0,
              }),
            })
          : null),
      (t[25] = r),
      (t[26] = i),
      (t[27] = y),
      (t[28] = s),
      (t[29] = S),
      (t[30] = x),
      (t[31] = q))
    : (q = t[31]);
  let J;
  t[32] !== r ||
  t[33] !== h ||
  t[34] !== c ||
  t[35] !== k ||
  t[36] !== i ||
  t[37] !== L ||
  t[38] !== v ||
  t[39] !== B ||
  t[40] !== S ||
  t[41] !== F
    ? ((J = B
        ? (0, $.jsxs)(`div`, {
            className: `mt-3 divide-y divide-border border-t border-default`,
            children: [
              (0, $.jsx)(Re, { business: r }),
              (0, $.jsx)(Je, { business: r, directionsUrl: i, readOnly: S }),
              F != null && L != null
                ? (0, $.jsx)(it, {
                    icon: (0, $.jsx)(u, { asset: g }),
                    children: (0, $.jsx)(be, {
                      className: `cursor-interaction hover:underline`,
                      href: F,
                      initiator: `markdown_link_click`,
                      openTarget: S ? `external-browser` : void 0,
                      children: L,
                    }),
                  })
                : null,
              h,
              !v && !S && !k && c != null ? (0, $.jsx)(Ye, { onClick: () => O(!0) }) : null,
            ],
          })
        : null),
      (t[32] = r),
      (t[33] = h),
      (t[34] = c),
      (t[35] = k),
      (t[36] = i),
      (t[37] = L),
      (t[38] = v),
      (t[39] = B),
      (t[40] = S),
      (t[41] = F),
      (t[42] = J))
    : (J = t[42]);
  let oe;
  t[43] !== r || t[44] !== c || t[45] !== E || t[46] !== M || t[47] !== s || t[48] !== j
    ? ((oe =
        E &&
        c != null &&
        (0, $.jsx)(st, {
          business: {
            ...r,
            photoUrl:
              M === `restricted` || j?.shouldBlockExternalEgress
                ? void 0
                : (ae(r, j?.conversationType === `sidebar` ? j.contentReferences : void 0) ?? void 0),
          },
          businessPreview: (e) => (0, $.jsx)(Ge, { business: r, onAction: s, verified: e, readOnly: !0 }),
          businessHours: (0, $.jsx)(Te, { business: r, showHourDetail: !0 }),
          actions: {
            ...c,
            onCheckDomain: c.onCheckDomain
              ? async () => {
                  let e = (await c.onCheckDomain?.()) ?? { step: `review` };
                  return (e.step === `success` && A(!0), e);
                }
              : void 0,
            onCheckClaim: c.onCheckClaim
              ? async () => {
                  let e = (await c.onCheckClaim?.()) ?? { step: `review` };
                  return (e.step === `success` && A(!0), e);
                }
              : void 0,
            onManageProfile: c.onManageProfile
              ? () => {
                  (O(!1), c.onManageProfile?.());
                }
              : void 0,
            onEditHours: c.onEditHours
              ? () => {
                  (O(!1), c.onEditHours?.());
                }
              : void 0,
            onEditDescription: c.onEditDescription
              ? () => {
                  (O(!1), c.onEditDescription?.());
                }
              : void 0,
          },
          onClose: () => O(!1),
        })),
      (t[43] = r),
      (t[44] = c),
      (t[45] = E),
      (t[46] = M),
      (t[47] = s),
      (t[48] = j),
      (t[49] = oe))
    : (oe = t[49]);
  let Y;
  return (
    t[50] !== n ||
    t[51] !== re ||
    t[52] !== U ||
    t[53] !== W ||
    t[54] !== G ||
    t[55] !== K ||
    t[56] !== q ||
    t[57] !== J ||
    t[58] !== oe
      ? ((Y = (0, $.jsxs)(`section`, {
          "aria-label": re,
          className: U,
          role: W,
          children: [G, K, n, q, J, oe],
        })),
        (t[50] = n),
        (t[51] = re),
        (t[52] = U),
        (t[53] = W),
        (t[54] = G),
        (t[55] = K),
        (t[56] = q),
        (t[57] = J),
        (t[58] = oe),
        (t[59] = Y))
      : (Y = t[59]),
    Y
  );
}
function Je(e) {
  let t = (0, Z.c)(13),
    { business: n, directionsUrl: i, readOnly: a } = e,
    o = a !== void 0 && a,
    s;
  t[0] === n.address ? (s = t[1]) : ((s = n.address?.trim()), (t[0] = n.address), (t[1] = s));
  let c = s;
  if (!c) return null;
  let l;
  t[2] !== n || t[3] !== i
    ? ((l = C(i ?? ie(n) ?? ``) || null), (t[2] = n), (t[3] = i), (t[4] = l))
    : (l = t[4]);
  let d = l,
    f = !o,
    p;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(u, { asset: r })), (t[5] = p))
    : (p = t[5]);
  let m;
  t[6] !== c || t[7] !== o || t[8] !== d
    ? ((m =
        d == null
          ? c
          : (0, $.jsx)(be, {
              className: `cursor-interaction hover:underline`,
              href: d,
              initiator: `markdown_link_click`,
              openTarget: o ? `external-browser` : void 0,
              children: c,
            })),
      (t[6] = c),
      (t[7] = o),
      (t[8] = d),
      (t[9] = m))
    : (m = t[9]);
  let h;
  return (
    t[10] !== f || t[11] !== m
      ? ((h = (0, $.jsx)(it, { truncate: f, icon: p, children: m })), (t[10] = f), (t[11] = m), (t[12] = h))
      : (h = t[12]),
    h
  );
}
function Ye(e) {
  let t = (0, Z.c)(18),
    { onClick: r, request: i } = e;
  if (i?.status === `under_review`) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(u, { className: `text-tertiary`, asset: O })), (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(it, {
          icon: e,
          children: (0, $.jsx)(`span`, {
            className: `text-secondary`,
            children: (0, $.jsx)(l, {
              id: `chatgpt.localBusiness.claim.status.under_review`,
              defaultMessage: `Your claim is under review`,
              description: `Status action beneath a business's contact details, shown to the person whose ownership claim is awaiting review. Opens the existing claim so they can check its status or withdraw it. Keep this label short; it does not mean ownership is approved.`,
            }),
          }),
        })),
        (t[1] = n))
      : (n = t[1]);
    let i;
    return (
      t[2] === r
        ? (i = t[3])
        : ((i = (0, $.jsx)(`button`, {
            type: `button`,
            onClick: r,
            className: `w-full cursor-interaction text-start focus-visible:outline-ring`,
            children: n,
          })),
          (t[2] = r),
          (t[3] = i)),
      i
    );
  }
  let o = !i || i.status === `in_progress` ? `text-business-claim` : `text-default`,
    s;
  t[4] === o
    ? (s = t[5])
    : ((s = D(
        `flex min-h-12 w-full cursor-interaction items-center gap-4 py-3 text-start text-base font-medium select-none hover:underline focus-visible:outline-ring`,
        o,
      )),
      (t[4] = o),
      (t[5] = s));
  let c = i?.status === `needs_information` ? `text-warning` : void 0,
    d;
  t[6] === i
    ? (d = t[7])
    : ((d = i ? { pending: a, in_progress: P, needs_information: y }[i.status] : P), (t[6] = i), (t[7] = d));
  let f;
  t[8] !== c || t[9] !== d
    ? ((f = (0, $.jsx)(`span`, {
        className: `flex size-6 shrink-0 items-center justify-center`,
        children: (0, $.jsx)(u, { className: c, asset: d }),
      })),
      (t[8] = c),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] === i
    ? (p = t[12])
    : ((p = i
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsxs)(`span`, {
                className: `min-w-0 flex-1`,
                children: [
                  (0, $.jsx)(`span`, {
                    className: `block`,
                    children: (0, $.jsx)(l, {
                      id: `chatgpt.localBusiness.claim.status.title`,
                      defaultMessage: `{status, select, in_progress {Finish verifying your business} needs_information {Your claim needs more information} under_review {Claim under review} other {Claim started}}`,
                      description: `Claim status row in the business sidebar. Status is pending, in_progress, needs_information or under_review. Opens the existing claim.`,
                      values: { status: i.status },
                    }),
                  }),
                  (0, $.jsx)(`span`, {
                    className: `block text-sm font-normal text-secondary`,
                    children: (0, $.jsx)(l, {
                      id: `chatgpt.localBusiness.claim.status.subtitle`,
                      defaultMessage: `{status, select, in_progress {Continue your business verification} needs_information {Review what’s needed to continue} under_review {Your claim is being reviewed} other {View your claim and next steps}}`,
                      description: `Supporting text beneath the business sidebar claim status. Status is pending, in_progress, needs_information or under_review.`,
                      values: { status: i.status },
                    }),
                  }),
                ],
              }),
              (0, $.jsx)(n, {}),
            ],
          })
        : (0, $.jsx)(l, {
            id: `chatgpt.localBusiness.claim.button.label`,
            defaultMessage: `Claim this profile`,
            description: `Action below the phone number in the business sidebar that starts ownership verification`,
          })),
      (t[11] = i),
      (t[12] = p));
  let m;
  return (
    t[13] !== r || t[14] !== s || t[15] !== f || t[16] !== p
      ? ((m = (0, $.jsxs)(`button`, { className: s, type: `button`, onClick: r, children: [f, p] })),
        (t[13] = r),
        (t[14] = s),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m))
      : (m = t[17]),
    m
  );
}
function Xe(e) {
  let t = (0, Z.c)(23),
    { business: n, showPrice: r, linkRating: i, shouldBlockExternalEgress: a, wrap: o } = e,
    s = r !== void 0 && r,
    c = i === void 0 || i,
    l = a !== void 0 && a,
    u = o !== void 0 && o,
    d;
  t[0] === n.categories ? (d = t[1]) : ((d = n.categories?.find($e)), (t[0] = n.categories), (t[1] = d));
  let f = d,
    p;
  t[2] !== n || t[3] !== c || t[4] !== l
    ? ((p =
        n.rating == null && lt[n.provider ?? ``] == null
          ? null
          : (0, $.jsx)(rt, { business: n, linkRating: c, shouldBlockExternalEgress: l }, `rating`)),
      (t[2] = n),
      (t[3] = c),
      (t[4] = l),
      (t[5] = p))
    : (p = t[5]);
  let m;
  t[6] === f
    ? (m = t[7])
    : ((m = f ? (0, $.jsx)(`span`, { className: `min-w-0 truncate`, children: f }, `category`) : null),
      (t[6] = f),
      (t[7] = m));
  let h;
  t[8] !== n.price_str || t[9] !== s
    ? ((h = s && n.price_str ? (0, $.jsx)(`span`, { children: n.price_str }, `price`) : null),
      (t[8] = n.price_str),
      (t[9] = s),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] !== p || t[12] !== m || t[13] !== h
    ? ((g = [p, m, h].filter(Qe)), (t[11] = p), (t[12] = m), (t[13] = h), (t[14] = g))
    : (g = t[14]);
  let _ = g,
    v = u ? `text-base` : `text-sm`,
    y = u ? `flex-wrap` : `flex-nowrap`,
    b;
  t[15] !== v || t[16] !== y
    ? ((b = D(`flex min-w-0 items-center leading-5 font-normal text-default`, v, y)),
      (t[15] = v),
      (t[16] = y),
      (t[17] = b))
    : (b = t[17]);
  let x;
  t[18] === _ ? (x = t[19]) : ((x = _.map(Ze)), (t[18] = _), (t[19] = x));
  let S;
  return (
    t[20] !== b || t[21] !== x
      ? ((S = (0, $.jsx)(`span`, { className: b, children: x })), (t[20] = b), (t[21] = x), (t[22] = S))
      : (S = t[22]),
    S
  );
}
function Ze(e, t) {
  return (0, $.jsxs)(
    Q.Fragment,
    {
      children: [
        t === 0 ? null : (0, $.jsx)(`span`, { className: `mx-1 shrink-0`, "aria-hidden": !0, children: ot }),
        e,
      ],
    },
    e.key,
  );
}
function Qe(e) {
  return e != null;
}
function $e(e) {
  return e.trim().length > 0 && e !== `Point`;
}
function et(e) {
  let t = (0, Z.c)(68),
    {
      allowQuoteAction: n,
      analyticsMessageId: r,
      business: i,
      directionsUrl: a,
      onAction: o,
      onQuoteInteractionOpenChange: s,
      openTarget: c,
      presentation: u,
      primaryActionsOnly: d,
      reservationAction: f,
    } = e,
    p = n === void 0 || n,
    m = u === void 0 ? `sidebar` : u,
    h = d !== void 0 && d,
    g = x(G),
    _ = _e(),
    v = (0, Q.useContext)(ce),
    y;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = de()), (t[0] = y)) : (y = t[0]);
  let b = me(y),
    S = re(fe, at),
    ee;
  t[1] !== i || t[2] !== m || t[3] !== S
    ? ((ee = C(S && m === `sidebar` ? (oe(i) ?? ``) : ``) || null),
      (t[1] = i),
      (t[2] = m),
      (t[3] = S),
      (t[4] = ee))
    : (ee = t[4]);
  let w = ee,
    T;
  t[5] !== i || t[6] !== a
    ? ((T = C(a ?? ie(i) ?? ``) || null), (t[5] = i), (t[6] = a), (t[7] = T))
    : (T = t[7]);
  let te = T,
    E;
  t[8] === i.website_url
    ? (E = t[9])
    : ((E = C(i.website_url?.trim() ?? ``) || null), (t[8] = i.website_url), (t[9] = E));
  let O = E,
    k;
  t[10] === i.phone
    ? (k = t[11])
    : ((k = i.phone?.trim() ? C(`tel:${i.phone.trim()}`) : null), (t[10] = i.phone), (t[11] = k));
  let A = k,
    j;
  t[12] === i.service_providers
    ? (j = t[13])
    : ((j = ye(i.service_providers)), (t[12] = i.service_providers), (t[13] = j));
  let M = j,
    N;
  t[14] !== g ||
  t[15] !== p ||
  t[16] !== i.reservation_providers ||
  t[17] !== b ||
  t[18] !== v ||
  t[19] !== M ||
  t[20] !== w ||
  t[21] !== _
    ? ((N =
        p &&
        g != null &&
        _?.shouldBlockExternalEgress === !1 &&
        (_.canRequestQuote ?? !_.isReadOnly) &&
        v !== `restricted` &&
        b &&
        w == null &&
        !i.reservation_providers?.some(nt) &&
        M.length > 0),
      (t[14] = g),
      (t[15] = p),
      (t[16] = i.reservation_providers),
      (t[17] = b),
      (t[18] = v),
      (t[19] = M),
      (t[20] = w),
      (t[21] = _),
      (t[22] = N))
    : (N = t[22]);
  let P = N,
    F;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(l, {
        id: `chatgpt.localBusiness.reserve`,
        defaultMessage: `Reserve`,
        description: `Short button label in a local restaurant sidebar that opens the reservation provider website`,
      })),
      (t[23] = F))
    : (F = t[23]);
  let ne;
  t[24] === w
    ? (ne = t[25])
    : ((ne = { key: J.CHATGPT_ENTITY_AFFORDANCE_RESERVE, href: w, label: F }), (t[24] = w), (t[25] = ne));
  let I;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(l, {
        id: `chatgpt.localBusiness.directions`,
        defaultMessage: `Directions`,
        description: `Short button label in a local business sidebar that opens directions to the business`,
      })),
      (t[26] = I))
    : (I = t[26]);
  let L;
  t[27] === te
    ? (L = t[28])
    : ((L = { key: J.CHATGPT_ENTITY_AFFORDANCE_DIRECTIONS, href: te, label: I }), (t[27] = te), (t[28] = L));
  let R;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, $.jsx)(l, {
        id: `chatgpt.localBusiness.website`,
        defaultMessage: `Website`,
        description: `Short button label in a local business sidebar that opens the business website`,
      })),
      (t[29] = R))
    : (R = t[29]);
  let z;
  t[30] === O
    ? (z = t[31])
    : ((z = { key: J.CHATGPT_ENTITY_AFFORDANCE_WEBSITE, href: O, label: R }), (t[30] = O), (t[31] = z));
  let B;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, $.jsx)(l, {
        id: `chatgpt.localBusiness.call`,
        defaultMessage: `Call`,
        description: `Short button label in a local business sidebar that calls the business phone number`,
      })),
      (t[32] = B))
    : (B = t[32]);
  let V;
  t[33] === A
    ? (V = t[34])
    : ((V = { key: J.CHATGPT_ENTITY_AFFORDANCE_CALL, href: A, label: B }), (t[33] = A), (t[34] = V));
  let H;
  t[35] !== ne || t[36] !== L || t[37] !== z || t[38] !== V
    ? ((H = [ne, L, z, V].filter(tt)), (t[35] = ne), (t[36] = L), (t[37] = z), (t[38] = V), (t[39] = H))
    : (H = t[39]);
  let U;
  t[40] !== P || t[41] !== h || t[42] !== f || t[43] !== H
    ? ((U = H.slice(0, h ? 0 : 3 - Number(P) - Number(f != null))),
      (t[40] = P),
      (t[41] = h),
      (t[42] = f),
      (t[43] = H),
      (t[44] = U))
    : (U = t[44]);
  let W = U;
  if (!P && W.length === 0 && f == null) return null;
  let ae;
  t[45] === m
    ? (ae = t[46])
    : ((ae = (e) =>
        D(
          `no-drag relative flex cursor-interaction items-center justify-center rounded-full border after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] hover:after:bg-media-background/5 text-sm leading-4 font-medium whitespace-nowrap select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring`,
          m === `sidebar` ? `h-9 px-5` : `h-7.5 flex-auto px-4`,
          e === 0
            ? `border-transparent bg-primary-solid text-primary-solid`
            : `border-default bg-transparent text-default`,
        )),
      (t[45] = m),
      (t[46] = ae));
  let K = ae,
    q;
  t[47] !== K ||
  t[48] !== r ||
  t[49] !== i.id ||
  t[50] !== P ||
  t[51] !== o ||
  t[52] !== s ||
  t[53] !== m ||
  t[54] !== M ||
  t[55] !== _
    ? ((q =
        P &&
        (0, $.jsx)(Oe, {
          analyticsMessageId: r,
          businessId: typeof i.id == `string` ? i.id : void 0,
          ctaSurface: m === `hover` ? `map_card` : `business_sidebar`,
          onAction: () => o?.(J.CHATGPT_ENTITY_AFFORDANCE_REQUEST_QUOTE),
          onInteractionOpenChange: s,
          providers: M,
          trigger: (0, $.jsx)(`button`, { className: K(0), type: `button`, children: (0, $.jsx)(Ee, {}) }),
          turnContext: _,
        })),
      (t[47] = K),
      (t[48] = r),
      (t[49] = i.id),
      (t[50] = P),
      (t[51] = o),
      (t[52] = s),
      (t[53] = m),
      (t[54] = M),
      (t[55] = _),
      (t[56] = q))
    : (q = t[56]);
  let se;
  t[57] !== K || t[58] !== W || t[59] !== P || t[60] !== o || t[61] !== c || t[62] !== f
    ? ((se = W.map((e, t) =>
        (0, $.jsx)(
          be,
          {
            className: K(t + Number(P) + Number(f != null)),
            href: e.href,
            initiator: `markdown_link_click`,
            openTarget: c,
            onClick: () => o?.(e.key),
            children: e.label,
          },
          e.key,
        ),
      )),
      (t[57] = K),
      (t[58] = W),
      (t[59] = P),
      (t[60] = o),
      (t[61] = c),
      (t[62] = f),
      (t[63] = se))
    : (se = t[63]);
  let Y;
  return (
    t[64] !== f || t[65] !== q || t[66] !== se
      ? ((Y = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-wrap gap-2`, children: [q, f, se] })),
        (t[64] = f),
        (t[65] = q),
        (t[66] = se),
        (t[67] = Y))
      : (Y = t[67]),
    Y
  );
}
function tt(e) {
  return e.href != null;
}
function nt(e) {
  return e.launcherPayload != null;
}
function rt(e) {
  let t = (0, Z.c)(27),
    { business: n, linkRating: r, shouldBlockExternalEgress: i } = e,
    a = b(),
    o = c(),
    s = _e(),
    l = (0, Q.useContext)(ce),
    d = !i && s?.shouldBlockExternalEgress !== !0 && l !== `restricted`,
    f,
    p,
    m;
  if (
    t[0] !== d ||
    t[1] !== n.provider ||
    t[2] !== n.provider_logo_dark_url ||
    t[3] !== n.provider_logo_dark_url_short ||
    t[4] !== n.provider_logo_url ||
    t[5] !== n.provider_logo_url_short ||
    t[6] !== n.provider_url ||
    t[7] !== n.rating ||
    t[8] !== a ||
    t[9] !== o ||
    t[10] !== r
  ) {
    let e = n.provider_logo_url_short?.trim() || n.provider_logo_url?.trim(),
      i = (o && (n.provider_logo_dark_url_short?.trim() || n.provider_logo_dark_url?.trim())) || e,
      s = d && i ? S(i) : null,
      c;
    (t[14] !== d || t[15] !== n.provider_url || t[16] !== r
      ? ((c = (r && d && C(n.provider_url?.trim() ?? ``)) || null),
        (t[14] = d),
        (t[15] = n.provider_url),
        (t[16] = r),
        (t[17] = c))
      : (c = t[17]),
      (f = c));
    let l = lt[n.provider ?? ``] ?? n.provider ?? ``;
    (t[18] !== n.rating || t[19] !== a
      ? ((p =
          n.rating == null
            ? null
            : (0, $.jsxs)($.Fragment, {
                children: [
                  (0, $.jsx)(u, { asset: te, className: `size-3.5 shrink-0` }),
                  (0, $.jsx)(`span`, {
                    children: a.formatNumber(n.rating, {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    }),
                  }),
                ],
              })),
        (t[18] = n.rating),
        (t[19] = a),
        (t[20] = p))
      : (p = t[20]),
      (m = s
        ? (0, $.jsx)(`img`, {
            alt: l,
            className: D(
              `w-auto max-w-18 shrink-0 object-contain`,
              s.toLowerCase().includes(`tripadvisor_ollie`) ? `h-3` : `h-3.5`,
            ),
            src: s,
          })
        : (lt[n.provider ?? ``] ?? null)),
      (t[0] = d),
      (t[1] = n.provider),
      (t[2] = n.provider_logo_dark_url),
      (t[3] = n.provider_logo_dark_url_short),
      (t[4] = n.provider_logo_url),
      (t[5] = n.provider_logo_url_short),
      (t[6] = n.provider_url),
      (t[7] = n.rating),
      (t[8] = a),
      (t[9] = o),
      (t[10] = r),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m));
  } else ((f = t[11]), (p = t[12]), (m = t[13]));
  let h;
  t[21] !== p || t[22] !== m
    ? ((h = (0, $.jsxs)($.Fragment, { children: [p, m] })), (t[21] = p), (t[22] = m), (t[23] = h))
    : (h = t[23]);
  let g = h,
    _;
  return (
    t[24] !== g || t[25] !== f
      ? ((_ =
          f == null
            ? (0, $.jsx)(`span`, { className: `inline-flex shrink-0 items-center gap-1`, children: g })
            : (0, $.jsx)(be, {
                className: `inline-flex shrink-0 cursor-interaction items-center gap-1 hover:text-secondary`,
                href: f,
                initiator: `markdown_link_click`,
                children: g,
              })),
        (t[24] = g),
        (t[25] = f),
        (t[26] = _))
      : (_ = t[26]),
    _
  );
}
function it(e) {
  let t = (0, Z.c)(10),
    { icon: n, children: r, truncate: i } = e,
    a = i !== void 0 && i,
    o;
  t[0] === n
    ? (o = t[1])
    : ((o = (0, $.jsx)(`span`, {
        className: `flex size-6 shrink-0 items-center justify-center`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = o));
  let s = a && `truncate`,
    c;
  t[2] === s
    ? (c = t[3])
    : ((c = D(`min-w-0 flex-1 text-base font-medium select-text`, s)), (t[2] = s), (t[3] = c));
  let l;
  t[4] !== r || t[5] !== c
    ? ((l = (0, $.jsx)(`span`, { className: c, children: r })), (t[4] = r), (t[5] = c), (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] !== o || t[8] !== l
      ? ((u = (0, $.jsxs)(`div`, { className: `flex min-h-11 items-center gap-4 py-2`, children: [o, l] })),
        (t[7] = o),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
var Z, Q, $, at, ot, st, ct, lt, ut;
function dt() {
  return (dt = e(() => {
    ((Z = F()),
      pe(),
      ge(),
      f(),
      s(),
      V(),
      i(),
      L(),
      R(),
      T(),
      k(),
      w(),
      Ce(),
      m(),
      (Q = z()),
      A(),
      o(),
      ve(),
      d(),
      _(),
      B(),
      H(),
      ee(),
      Y(),
      le(),
      K(),
      h(),
      xe(),
      he(),
      Le(),
      W(),
      Ue(),
      we(),
      De(),
      ($ = I()),
      (at = `2673474834`),
      (ot = `•`),
      (st = t(U)),
      (ct = t(ue, { suspendToParent: !0, errorFallback: ({ renderMetadata: e }) => e(!1, null) })),
      (lt = {
        yelp: `Yelp`,
        "yelp-feed": `Yelp`,
        tripadvisor: `Tripadvisor`,
        "tripadvisor-feed": `Tripadvisor`,
        "opentable-feed": `OpenTable`,
      }),
      (ut = M({
        layout: j([`one-line`, `two-lines`]).nullable().optional(),
        metadata: M({ map_url: v().nullable().optional() }).nullable().optional(),
      }).loose()));
  }))();
}
export { dt as a, Xe as i, Ge as n, We as r, et as t };
//# sourceMappingURL=metadata-cff3f4695011.js.map
