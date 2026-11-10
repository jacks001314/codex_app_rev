import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BR as n,
  Cht as r,
  Cot as i,
  EPt as a,
  IDt as o,
  Ixt as s,
  J7 as c,
  LR as l,
  Pxt as u,
  Rnt as d,
  SJ as f,
  SU as p,
  TJ as m,
  TLt as h,
  VDt as g,
  Vxt as _,
  XU as v,
  Xot as y,
  YU as b,
  Yot as x,
  _Mt as S,
  bG as C,
  cV as w,
  cz as T,
  eU as E,
  gMt as D,
  jDt as O,
  jR as k,
  lV as A,
  nSt as j,
  oSt as M,
  oV as N,
  pIt as P,
  sV as F,
  sz as I,
  t3 as L,
  tU as ee,
  vzt as R,
  wot as z,
  xG as B,
  xMt as V,
  xU as H,
  yzt as U,
  zxt as W,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fin as te,
  Fur as ne,
  Ggr as re,
  Hin as ie,
  Jsr as ae,
  Ksr as oe,
  Nur as se,
  Qsr as ce,
  S0n as G,
  Udr as le,
  Usr as ue,
  Wsr as K,
  Xsr as de,
  Ysr as q,
  Zsr as fe,
  __r as J,
  alr as pe,
  ao as me,
  d_r as he,
  e2 as ge,
  f2 as _e,
  iNr as ve,
  io as ye,
  m_r as be,
  oFr as xe,
  p_r as Se,
  rNr as Ce,
  slr as we,
  t2 as Te,
  t_r as Ee,
  x0n as De,
  y2 as Oe,
} from "./app-initial-5851df3f6cb1.js";
import { n as ke, t as Ae } from "./badge-c44d63c703d3.js";
import { n as je, o as Me } from "./plugins-page-selectors-463d7aa7d76e.js";
function Ne(e) {
  let t = (0, Ie.c)(8),
    { container: n, sectionIds: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = {}), (t[0] = i)) : (i = t[0]);
  let a = (0, Le.useRef)(i),
    o;
  t[1] !== n || t[2] !== r
    ? ((o = { container: n, sectionElementsRef: a, sectionIds: r }), (t[1] = n), (t[2] = r), (t[3] = o))
    : (o = t[3]);
  let s = Pe(o),
    c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (e, t) => {
        if (t == null) {
          delete a.current[e];
          return;
        }
        a.current[e] = t;
      }),
      (t[4] = c))
    : (c = t[4]);
  let l = c,
    u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (e) => {
        a.current[e]?.scrollIntoView({ behavior: `smooth`, block: `start` });
      }),
      (t[5] = u))
    : (u = t[5]);
  let d = u,
    f;
  return (
    t[6] === s
      ? (f = t[7])
      : ((f = { activeSectionId: s, scrollToSection: d, setSectionElement: l }), (t[6] = s), (t[7] = f)),
    f
  );
}
function Pe(e) {
  let t = (0, Ie.c)(8),
    { container: n, sectionElementsRef: r, sectionIds: i } = e,
    a;
  t[0] !== n || t[1] !== r || t[2] !== i
    ? ((a = (e) => {
        if (n == null) return Fe;
        let t = () => {
          e();
        };
        n.addEventListener(`scroll`, t, { passive: !0 });
        let a = typeof ResizeObserver > `u` ? null : new ResizeObserver(t);
        if (a != null) {
          a.observe(n);
          for (let e of i) {
            let t = r.current[e];
            t != null && a.observe(t);
          }
        }
        return () => {
          (n.removeEventListener(`scroll`, t), a?.disconnect());
        };
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a))
    : (a = t[3]);
  let o = a,
    s;
  t[4] !== n || t[5] !== r || t[6] !== i
    ? ((s = () => {
        if (i.length === 0) return null;
        if (n == null) return i[0];
        let e = n.getBoundingClientRect().top + Re,
          t = i[0];
        for (let n of i) {
          let i = r.current[n];
          if (i != null) {
            if (i.getBoundingClientRect().top <= e) t = n;
            else break;
          }
        }
        return t;
      }),
      (t[4] = n),
      (t[5] = r),
      (t[6] = i),
      (t[7] = s))
    : (s = t[7]);
  let c = s;
  return (0, Le.useSyncExternalStore)(o, c, c);
}
function Fe() {}
var Ie, Le, Re;
function ze() {
  return (ze = e(() => {
    ((Ie = R()), (Le = U()), (Re = 96));
  }))();
}
function Be(e) {
  let t = (0, Y.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, X.jsx)(`div`, {
          className: `mx-auto flex w-full max-w-[var(--thread-content-max-width)] flex-col gap-1 px-panel pt-panel`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ve(e) {
  let t = (0, Y.c)(46),
    {
      ariaLabel: n,
      sections: r,
      children: i,
      className: a,
      contentInnerClassName: o,
      scrollContainerClassName: s,
      disableScrollFade: c,
      header: l,
      navOrientation: u,
      navAccessory: d,
      navFooter: f,
      navSections: p,
      onSelectNavSection: m,
      showNav: h,
    } = e,
    g = c !== void 0 && c,
    _ = u === void 0 ? `vertical` : u,
    v = h === void 0 || h,
    y = (0, Ge.useRef)(null),
    [b, x] = (0, Ge.useState)(null),
    S;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (e) => {
        y.current !== e && ((y.current = e), x(e));
      }),
      (t[0] = S))
    : (S = t[0]);
  let C = S,
    w;
  t[1] === r ? (w = t[2]) : ((w = r.map(He)), (t[1] = r), (t[2] = w));
  let T;
  t[3] !== b || t[4] !== w
    ? ((T = { container: b, sectionIds: w }), (t[3] = b), (t[4] = w), (t[5] = T))
    : (T = t[5]);
  let { activeSectionId: E, scrollToSection: O, setSectionElement: k } = Ne(T),
    A = p ?? r,
    j = v && A.length > 0,
    M;
  t[6] === a
    ? (M = t[7])
    : ((M = D(`flex min-h-0 w-full flex-1 flex-col gap-8 [--sectioned-page-leading-inset:0.5rem]`, a)),
      (t[6] = a),
      (t[7] = M));
  let N;
  t[8] === l
    ? (N = t[9])
    : ((N = l == null ? null : (0, X.jsx)(Be, { children: l })), (t[8] = l), (t[9] = N));
  let P = j
      ? _ === `vertical`
        ? `flex min-h-0 w-full flex-1 flex-col gap-8 lg:grid lg:grid-cols-[theme(spacing.32)_minmax(0,1fr)] lg:items-start lg:gap-10`
        : `flex min-h-0 w-full flex-1 flex-col gap-8`
      : `flex min-h-0 w-full flex-1 flex-col`,
    F;
  t[10] === P ? (F = t[11]) : ((F = D(P)), (t[10] = P), (t[11] = F));
  let I;
  t[12] !== E ||
  t[13] !== n ||
  t[14] !== d ||
  t[15] !== f ||
  t[16] !== _ ||
  t[17] !== m ||
  t[18] !== O ||
  t[19] !== j ||
  t[20] !== A
    ? ((I = j
        ? (0, X.jsx)(We, {
            activeSectionId: E,
            accessory: d,
            ariaLabel: n,
            footer: f,
            orientation: _,
            onSelectSection: m ?? O,
            sections: A,
          })
        : null),
      (t[12] = E),
      (t[13] = n),
      (t[14] = d),
      (t[15] = f),
      (t[16] = _),
      (t[17] = m),
      (t[18] = O),
      (t[19] = j),
      (t[20] = A),
      (t[21] = I))
    : (I = t[21]);
  let L;
  t[22] === k ? (L = t[23]) : ((L = { setSectionElement: k }), (t[22] = k), (t[23] = L));
  let ee = !g && `vertical-scroll-fade-mask [--edge-fade-distance:1rem]`,
    R;
  t[24] !== s || t[25] !== ee
    ? ((R = D(`relative min-h-0 w-full flex-1 overflow-y-auto [scrollbar-gutter:stable] lg:h-full`, ee, s)),
      (t[24] = s),
      (t[25] = ee),
      (t[26] = R))
    : (R = t[26]);
  let z;
  t[27] === o
    ? (z = t[28])
    : ((z = D(`mx-auto w-full max-w-[var(--thread-content-max-width)]`, o)), (t[27] = o), (t[28] = z));
  let B;
  t[29] !== i || t[30] !== z
    ? ((B = (0, X.jsx)(`div`, { className: z, children: i })), (t[29] = i), (t[30] = z), (t[31] = B))
    : (B = t[31]);
  let V;
  t[32] !== R || t[33] !== B
    ? ((V = (0, X.jsx)(`div`, { className: R, ref: C, children: B })), (t[32] = R), (t[33] = B), (t[34] = V))
    : (V = t[34]);
  let H;
  t[35] !== L || t[36] !== V
    ? ((H = (0, X.jsx)(Ke.Provider, { value: L, children: V })), (t[35] = L), (t[36] = V), (t[37] = H))
    : (H = t[37]);
  let U;
  t[38] !== F || t[39] !== I || t[40] !== H
    ? ((U = (0, X.jsxs)(`div`, { className: F, children: [I, H] })),
      (t[38] = F),
      (t[39] = I),
      (t[40] = H),
      (t[41] = U))
    : (U = t[41]);
  let W;
  return (
    t[42] !== U || t[43] !== M || t[44] !== N
      ? ((W = (0, X.jsxs)(`div`, { className: M, children: [N, U] })),
        (t[42] = U),
        (t[43] = M),
        (t[44] = N),
        (t[45] = W))
      : (W = t[45]),
    W
  );
}
function He(e) {
  return e.id;
}
function Ue(e) {
  let t = (0, Y.c)(14),
    { id: n, title: r, action: i, count: a, stickyHeader: o, showDivider: s, children: c } = e,
    l = o !== void 0 && o,
    u = s === void 0 || s,
    d = (0, Ge.useContext)(Ke),
    f;
  t[0] !== n || t[1] !== d
    ? ((f = (e) => {
        d?.setSectionElement(n, e);
      }),
      (t[0] = n),
      (t[1] = d),
      (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] !== i || t[4] !== a || t[5] !== u || t[6] !== l || t[7] !== r
    ? ((p =
        r == null && i == null && a == null
          ? null
          : (0, X.jsx)(ye, { action: i, count: a, showDivider: u, sticky: l, title: r })),
      (t[3] = i),
      (t[4] = a),
      (t[5] = u),
      (t[6] = l),
      (t[7] = r),
      (t[8] = p))
    : (p = t[8]);
  let m;
  return (
    t[9] !== c || t[10] !== n || t[11] !== f || t[12] !== p
      ? ((m = (0, X.jsxs)(`section`, { className: `flex flex-col gap-4`, id: n, ref: f, children: [p, c] })),
        (t[9] = c),
        (t[10] = n),
        (t[11] = f),
        (t[12] = p),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
function We(e) {
  let n = (0, Y.c)(11),
    {
      activeSectionId: r,
      accessory: i,
      ariaLabel: a,
      footer: o,
      orientation: s,
      onSelectSection: c,
      sections: l,
    } = e,
    u = s === `vertical` ? `hidden lg:block lg:self-start` : `w-full`,
    d;
  n[0] !== i || n[1] !== r || n[2] !== o || n[3] !== c || n[4] !== s || n[5] !== l
    ? ((d =
        s === `vertical`
          ? (0, X.jsx)(`div`, {
              className: `flex flex-col gap-1`,
              children: l.map((e) =>
                (0, X.jsx)(
                  `a`,
                  {
                    href: `#${e.id}`,
                    className: D(
                      `text-start text-lg leading-6 transition-colors`,
                      r === e.id ? `text-default` : `text-secondary hover:text-default`,
                    ),
                    onClick: (t) => {
                      (t.preventDefault(), c(e.id));
                    },
                    children: e.title,
                  },
                  e.id,
                ),
              ),
            })
          : (0, X.jsx)(`div`, {
              className: `flex w-full flex-col gap-8`,
              children: (0, X.jsxs)(`div`, {
                className: `mx-auto flex w-full flex-col gap-8 px-panel lg:max-w-none`,
                children: [
                  o,
                  (0, X.jsxs)(`div`, {
                    className: `flex w-full min-w-0 flex-wrap items-center justify-center gap-3`,
                    children: [
                      l.map((e) =>
                        (0, X.jsx)(
                          t,
                          {
                            color: r === e.id ? `secondary` : `ghost`,
                            size: `toolbar`,
                            onClick: () => {
                              c(e.id);
                            },
                            "aria-pressed": r === e.id,
                            children: e.title,
                          },
                          e.id,
                        ),
                      ),
                      i == null
                        ? null
                        : (0, X.jsxs)(`div`, {
                            className: `flex items-center gap-3`,
                            children: [(0, X.jsx)(`div`, { className: `h-6 w-px bg-border-subtle` }), i],
                          }),
                    ],
                  }),
                ],
              }),
            })),
      (n[0] = i),
      (n[1] = r),
      (n[2] = o),
      (n[3] = c),
      (n[4] = s),
      (n[5] = l),
      (n[6] = d))
    : (d = n[6]);
  let f;
  return (
    n[7] !== a || n[8] !== u || n[9] !== d
      ? ((f = (0, X.jsx)(`nav`, { "aria-label": a, className: u, children: d })),
        (n[7] = a),
        (n[8] = u),
        (n[9] = d),
        (n[10] = f))
      : (f = n[10]),
    f
  );
}
var Y, Ge, X, Ke;
function qe() {
  return (qe = e(() => {
    ((Y = R()), S(), (Ge = U()), L(), me(), ze(), (X = V()), (Ke = (0, Ge.createContext)(null)));
  }))();
}
function Je(e) {
  let t = (0, Ze.c)(11),
    { hostId: n, pluginIds: r, pluginName: i, surface: a, isConnectionReady: o, children: s } = e,
    c = o !== void 0 && o,
    l = _(K),
    u = _(oe),
    d;
  if (
    t[0] !== l ||
    t[1] !== s ||
    t[2] !== n ||
    t[3] !== u ||
    t[4] !== c ||
    t[5] !== r ||
    t[6] !== i ||
    t[7] !== a
  ) {
    let e;
    t[9] === r ? (e = t[10]) : ((e = (e) => r.includes(e.plugin_id)), (t[9] = r), (t[10] = e));
    let o = l.find(e);
    ((d =
      o == null || u == null
        ? s
        : (0, Q.jsx)(
            Ye,
            {
              campaignId: o.campaign_id,
              hostId: n,
              identity: u,
              pluginName: i,
              surface: a,
              isConnectionReady: c,
              children: s,
            },
            JSON.stringify([u.userId, u.accountId, o.campaign_id, n, a]),
          )),
      (t[0] = l),
      (t[1] = s),
      (t[2] = n),
      (t[3] = u),
      (t[4] = c),
      (t[5] = r),
      (t[6] = i),
      (t[7] = a),
      (t[8] = d));
  } else d = t[8];
  return d;
}
function Ye(e) {
  let n = (0, Ze.c)(67),
    {
      campaignId: r,
      hostId: a,
      identity: c,
      pluginName: l,
      surface: u,
      isConnectionReady: d,
      children: p,
    } = e,
    m = s(i),
    h = g(),
    v;
  n[0] !== a || n[1] !== r
    ? ((v = { campaignId: r, hostId: a }), (n[0] = a), (n[1] = r), (n[2] = v))
    : (v = n[2]);
  let { data: b, isError: x } = W(ce, v),
    S = _(ae),
    C =
      b?.kind === `offer` && (!x || b.offer.claim_status != null || b.offer.reward_granted_at != null)
        ? b.offer
        : null,
    w = C?.campaign_id ?? r,
    T;
  n[3] !== S || n[4] !== C
    ? ((T = C == null ? null : ue(C, S)), (n[3] = S), (n[4] = C), (n[5] = T))
    : (T = n[5]);
  let E = T,
    D = c?.accountId,
    O = c?.userId,
    k;
  n[6] !== D || n[7] !== O
    ? ((k = se({ accountId: D, userId: O })), (n[6] = D), (n[7] = O), (n[8] = k))
    : (k = n[8]);
  let A = k,
    j = p != null && E === `pending` && d && c != null,
    M;
  n[9] !== A || n[10] !== j
    ? ((M = { ...A, staleTime: A.staleTime, enabled: j }), (n[9] = A), (n[10] = j), (n[11] = M))
    : (M = n[11]);
  let { data: N, isError: P, isFetching: F } = y(M),
    L;
  n[12] !== N || n[13] !== P || n[14] !== F || n[15] !== C
    ? ((L =
        C != null &&
        !P &&
        !F &&
        N?.some(
          (e) =>
            le(e.connector_id) === le(C.connector_id) &&
            e.auth_status === `ACTIVE` &&
            e.visibility !== `HIDDEN`,
        )),
      (n[12] = N),
      (n[13] = P),
      (n[14] = F),
      (n[15] = C),
      (n[16] = L))
    : (L = n[16]);
  let ee = L,
    R;
  n[17] !== w || n[18] !== c?.accountId || n[19] !== c?.userId || n[20] !== C?.claim_expires_at
    ? ((R = JSON.stringify([c?.userId, c?.accountId, w, C?.claim_expires_at])),
      (n[17] = w),
      (n[18] = c?.accountId),
      (n[19] = c?.userId),
      (n[20] = C?.claim_expires_at),
      (n[21] = R))
    : (R = n[21]);
  let z = R,
    B = W(tt, z),
    V = (0, Z.useRef)(null),
    H = (0, Z.useRef)(null),
    U = p == null && E === `available`,
    te;
  n[22] !== w || n[23] !== c || n[24] !== C || n[25] !== m || n[26] !== E || n[27] !== u
    ? ((te = () =>
        C == null || E !== `available` || !de(m, c)
          ? !1
          : (fe(m, w, c, `impression`, { surface: nt[u] }), !0)),
      (n[22] = w),
      (n[23] = c),
      (n[24] = C),
      (n[25] = m),
      (n[26] = E),
      (n[27] = u),
      (n[28] = te))
    : (te = n[28]);
  let ne = (0, Z.useEffectEvent)(te),
    re;
  n[29] !== w || n[30] !== U || n[31] !== ne
    ? ((re = () => {
        let e = V.current;
        if (!U || e == null || typeof IntersectionObserver > `u`) return;
        let t = !1,
          n = !0,
          r = () => {
            n && t && document.visibilityState === `visible` && H.current !== w && ne() && (H.current = w);
          },
          i = new IntersectionObserver(
            (e) => {
              ((t = e.some(Xe)), r());
            },
            { threshold: 0.5 },
          );
        return (
          i.observe(e),
          document.addEventListener(`visibilitychange`, r),
          () => {
            ((n = !1), i.disconnect(), document.removeEventListener(`visibilitychange`, r));
          }
        );
      }),
      (n[29] = w),
      (n[30] = U),
      (n[31] = ne),
      (n[32] = re))
    : (re = n[32]);
  let ie;
  if (
    (n[33] !== w || n[34] !== U ? ((ie = [U, w]), (n[33] = w), (n[34] = U), (n[35] = ie)) : (ie = n[35]),
    (0, Z.useEffect)(re, ie),
    p != null)
  ) {
    let e = E === `pending` && d && !!ee && B === !1,
      r;
    n[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(`span`, {
          className: `min-w-0 flex-1 text-base font-semibold`,
          children: (0, Q.jsx)(o, {
            id: `plugins.incentive.almostThere`,
            defaultMessage: `Almost there!`,
            description: `Heading of the credit reminder after installing a promotional plugin`,
          }),
        })),
        (n[36] = r))
      : (r = n[36]);
    let i;
    n[37] === h
      ? (i = n[38])
      : ((i = h.formatMessage({
          id: `plugins.incentive.dismissCreditTip`,
          defaultMessage: `Dismiss credit tip`,
          description: `Accessible label for the close button on the promotional plugin credit reminder`,
        })),
        (n[37] = h),
        (n[38] = i));
    let a;
    n[39] !== z || n[40] !== m
      ? ((a = () => {
          let e = m.get(et);
          e != null && m.set(Qe, [...e.slice(-99), z]);
        }),
        (n[39] = z),
        (n[40] = m),
        (n[41] = a))
      : (a = n[41]);
    let s;
    n[42] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = (0, Q.jsx)(f, {})), (n[42] = s)) : (s = n[42]);
    let c;
    n[43] !== i || n[44] !== a
      ? ((c = (0, Q.jsxs)(`div`, {
          className: `flex items-start gap-3`,
          children: [
            r,
            (0, Q.jsx)(t, {
              color: `ghostMuted`,
              size: `iconCircleSm`,
              "aria-label": i,
              onClick: a,
              children: s,
            }),
          ],
        })),
        (n[43] = i),
        (n[44] = a),
        (n[45] = c))
      : (c = n[45]);
    let l;
    n[46] !== w || n[47] !== C?.reward_credits
      ? ((l =
          w === `hubspot-2026-09`
            ? (0, Q.jsx)(o, {
                id: `plugins.incentive.hubspot.tryForWorkspaceCredits`,
                defaultMessage: `Try this plugin to earn {credits, plural, one {# credit} other {# credits}} for your workspace`,
                description: `Reminder for the independent HubSpot promotion, where successful use in Chat, Work, or Codex qualifies. credits is the server-provided reward amount.`,
                values: { credits: C?.reward_credits },
              })
            : (0, Q.jsx)(o, {
                id: `plugins.incentive.tryPluginForWorkspaceCredits`,
                defaultMessage: `Try this plugin in Work or Codex to earn {credits, plural, one {# credit} other {# credits}} for your workspace.`,
                description: `Post-install reminder to try the installed plugin in Work or Codex to earn credits for the workspace. Work and Codex are mode names; ordinary ChatGPT chats do not qualify. credits is the server-provided reward amount.`,
                values: { credits: C?.reward_credits },
              })),
        (n[46] = w),
        (n[47] = C?.reward_credits),
        (n[48] = l))
      : (l = n[48]);
    let u;
    n[49] !== c || n[50] !== l
      ? ((u = (0, Q.jsxs)(`div`, {
          className: `flex w-full min-w-0 flex-col gap-1 text-sm`,
          children: [c, l],
        })),
        (n[49] = c),
        (n[50] = l),
        (n[51] = u))
      : (u = n[51]);
    let g;
    return (
      n[52] !== p || n[53] !== e || n[54] !== u
        ? ((g = (0, Q.jsx)(I, {
            open: e,
            side: `top`,
            sideOffset: 20,
            align: `center`,
            variant: `coachmark`,
            tooltipMaxWidth: `min(16rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))`,
            interactive: !0,
            disableHoverOpen: !0,
            closeOnTriggerBlur: !1,
            tooltipContent: u,
            children: p,
          })),
          (n[52] = p),
          (n[53] = e),
          (n[54] = u),
          (n[55] = g))
        : (g = n[55]),
      g
    );
  }
  let oe;
  n[56] !== C || n[57] !== E || n[58] !== u
    ? ((oe =
        C != null && E === `available`
          ? (0, Q.jsx)(Ae, { ref: V, credits: C.reward_credits, showRequirements: u === `detail` })
          : null),
      (n[56] = C),
      (n[57] = E),
      (n[58] = u),
      (n[59] = oe))
    : (oe = n[59]);
  let G = oe;
  if (u !== `detail` || G == null) return G;
  let K;
  n[60] === l
    ? (K = n[61])
    : ((K = (0, Q.jsx)(o, {
        id: `plugins.incentive.rewardRequirements`,
        defaultMessage: `Earn workspace credits by installing and successfully using the {pluginName} plugin`,
        description: `Requirements shown on hover or focus of the promotional credit badge on plugin details; pluginName is the plugin's display name. Installation and successful use are both required.`,
        values: { pluginName: l },
      })),
      (n[60] = l),
      (n[61] = K));
  let q;
  n[62] === G
    ? (q = n[63])
    : ((q = (0, Q.jsx)(`span`, { className: `inline-flex`, children: G })), (n[62] = G), (n[63] = q));
  let J;
  return (
    n[64] !== K || n[65] !== q
      ? ((J = (0, Q.jsx)(`div`, {
          className: `flex max-w-sm flex-col items-start gap-2 select-none`,
          children: (0, Q.jsx)(I, { tabIndex: 0, tooltipContent: K, children: q }),
        })),
        (n[64] = K),
        (n[65] = q),
        (n[66] = J))
      : (J = n[66]),
    J
  );
}
function Xe(e) {
  return e.isIntersecting && e.intersectionRatio >= 0.5;
}
var Ze, Z, Q, Qe, $e, et, tt, nt;
function rt() {
  return (rt = e(() => {
    ((Ze = R()),
      d(),
      x(),
      u(),
      (Z = U()),
      O(),
      a(),
      ne(),
      L(),
      m(),
      T(),
      z(),
      Ce(),
      ke(),
      q(),
      (Q = V()),
      (Qe = ve(`plugin-credit-coachmark-dismissals-v1`, [])),
      ($e = P(h()).max(100).catch([]).optional()),
      (et = M(i, ({ get: e }) => $e.parse(e(Qe)))),
      (tt = j(i, (e, { get: t }) => t(et)?.includes(e))),
      (nt = {
        directory: c.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY,
        search: c.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY_SEARCH,
        detail: c.CODEX_PLUGIN_MARKETPLACE_SURFACE_DETAILS,
      }));
  }))();
}
function it(e) {
  let t = (0, lt.c)(42),
    { hostId: n, plugin: r, size: i } = e,
    a = i === void 0 ? `default` : i,
    s = g(),
    c = r.origin == null ? r.marketplaceName : null,
    l;
  t[0] !== n || t[1] !== r.marketplacePath || t[2] !== r.pluginSourceType || t[3] !== c
    ? ((l = {
        hostId: n,
        marketplaceName: c,
        marketplacePath: r.marketplacePath,
        sourceType: r.pluginSourceType,
      }),
      (t[0] = n),
      (t[1] = r.marketplacePath),
      (t[2] = r.pluginSourceType),
      (t[3] = c),
      (t[4] = l))
    : (l = t[4]);
  let u = W(ut, l),
    d = r.origin;
  if (
    ((d ??=
      r.scope === `WORKSPACE` || r.marketplaceName?.startsWith(`workspace-`)
        ? `workspace`
        : r.scope === `USER` || r.marketplaceName === `created-by-me-remote`
          ? `user-cloud`
          : u),
    d == null)
  )
    return null;
  let f, m, h;
  bb0: switch (d) {
    case `workspace`: {
      let e;
      (t[5] === s
        ? (e = t[6])
        : ((e = s.formatMessage({
            id: `plugins.card.workspacePlugin`,
            defaultMessage: `Workspace plugin`,
            description: `Accessible label for the building icon identifying a plugin provided by the user's workspace`,
          })),
          (t[5] = s),
          (t[6] = e)),
        (f = e),
        (m = a === `large` ? A : w));
      let n;
      (t[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = (0, $.jsx)(ct, {})), (t[7] = n)) : (n = t[7]),
        (h = n));
      break bb0;
    }
    case `git-marketplace`: {
      let e;
      (t[8] === s
        ? (e = t[9])
        : ((e = s.formatMessage({
            id: `plugins.card.gitMarketplacePlugin`,
            defaultMessage: `Git marketplace plugin`,
            description: `Accessible label for the branch icon identifying a plugin provided by a Git-backed marketplace`,
          })),
          (t[8] = s),
          (t[9] = e)),
        (f = e),
        (m = a === `large` ? F : N));
      let i;
      (t[10] !== n || t[11] !== d || t[12] !== r
        ? ((i = (0, $.jsx)(st, { hostId: n, origin: d, plugin: r })),
          (t[10] = n),
          (t[11] = d),
          (t[12] = r),
          (t[13] = i))
        : (i = t[13]),
        (h = i));
      break bb0;
    }
    case `folder-marketplace`: {
      let e;
      (t[14] === s
        ? (e = t[15])
        : ((e = s.formatMessage({
            id: `plugins.card.folderMarketplacePlugin`,
            defaultMessage: `Folder marketplace plugin`,
            description: `Accessible label for the folder icon identifying a plugin provided by a marketplace discovered from a local project directory`,
          })),
          (t[14] = s),
          (t[15] = e)),
        (f = e),
        (m = a === `large` ? ee : E));
      let i;
      (t[16] !== n || t[17] !== d || t[18] !== r
        ? ((i = (0, $.jsx)(st, { hostId: n, origin: d, plugin: r })),
          (t[16] = n),
          (t[17] = d),
          (t[18] = r),
          (t[19] = i))
        : (i = t[19]),
        (h = i));
      break bb0;
    }
    case `local`:
      if (n === `local`) {
        let e;
        (t[20] === s
          ? (e = t[21])
          : ((e = s.formatMessage({
              id: `plugins.card.localPlugin`,
              defaultMessage: `Local plugin`,
              description: `Accessible label for the laptop icon identifying a plugin stored locally on the user's machine`,
            })),
            (t[20] = s),
            (t[21] = e)),
          (f = e),
          (m = a === `large` ? v : b));
        let n;
        (t[22] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsx)(o, {
              id: `plugins.card.localPluginTooltip`,
              defaultMessage: `From your personal marketplace on this machine`,
              description: `Tooltip identifying a plugin from the user's personal marketplace on their local machine`,
            })),
            (t[22] = n))
          : (n = t[22]),
          (h = n));
      } else {
        let e;
        (t[23] === s
          ? (e = t[24])
          : ((e = s.formatMessage({
              id: `plugins.card.remoteHostPlugin`,
              defaultMessage: `Remote host plugin`,
              description: `Accessible label for the globe icon identifying a plugin stored on the selected remote development host`,
            })),
            (t[23] = s),
            (t[24] = e)),
          (f = e),
          (m = a === `large` ? p : H));
        let n;
        (t[25] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsx)(o, {
              id: `plugins.card.remoteHostPluginTooltip`,
              defaultMessage: `From your remote host`,
              description: `Tooltip identifying a plugin stored on the user's selected remote development host`,
            })),
            (t[25] = n))
          : (n = t[25]),
          (h = n));
      }
      break bb0;
    case `user-cloud`: {
      let e;
      (t[26] === s
        ? (e = t[27])
        : ((e = s.formatMessage({
            id: `plugins.card.userCloudPlugin`,
            defaultMessage: `Your cloud plugin`,
            description: `Accessible label for the person icon identifying a cloud-based plugin created by the current user`,
          })),
          (t[26] = s),
          (t[27] = e)),
        (f = e),
        (m = a === `large` ? B : C));
      let n;
      (t[28] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(o, {
            id: `plugins.card.userCloudPluginTooltip`,
            defaultMessage: `Created by you in the cloud`,
            description: `Tooltip identifying a cloud-based plugin created by the current user`,
          })),
          (t[28] = n))
        : (n = t[28]),
        (h = n));
    }
  }
  let _;
  t[29] !== n || t[30] !== d || t[31] !== r.marketplacePath || t[32] !== h
    ? ((_ =
        (d === `folder-marketplace` || (d === `local` && n === `local`)) && r.marketplacePath != null
          ? (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-1`,
              children: [h, (0, $.jsx)(ot, { hostId: n, marketplacePath: r.marketplacePath })],
            })
          : h),
      (t[29] = n),
      (t[30] = d),
      (t[31] = r.marketplacePath),
      (t[32] = h),
      (t[33] = _))
    : (_ = t[33]);
  let y;
  t[34] === m
    ? (y = t[35])
    : ((y = (0, $.jsx)(m, { className: `text-secondary` })), (t[34] = m), (t[35] = y));
  let x;
  t[36] !== f || t[37] !== y
    ? ((x = (0, $.jsx)(`button`, {
        type: `button`,
        onClick: at,
        children: (0, $.jsx)(`span`, { "aria-label": f, role: `img`, children: y }),
      })),
      (t[36] = f),
      (t[37] = y),
      (t[38] = x))
    : (x = t[38]);
  let S;
  return (
    t[39] !== _ || t[40] !== x
      ? ((S = (0, $.jsx)(I, { tooltipContent: _, children: x })), (t[39] = _), (t[40] = x), (t[41] = S))
      : (S = t[41]),
    S
  );
}
function at(e) {
  return e.stopPropagation();
}
function ot(e) {
  let t = (0, lt.c)(5),
    { hostId: i, marketplacePath: a } = e,
    o = W(Se, { hostId: i }).data?.homeDirectory,
    s;
  t[0] !== o || t[1] !== a
    ? ((s = o != null && k([o], a) === 0 ? r(`~`, n(a).slice(n(o).length)) : a),
      (t[0] = o),
      (t[1] = a),
      (t[2] = s))
    : (s = t[2]);
  let c;
  return (
    t[3] === s
      ? (c = t[4])
      : ((c = (0, $.jsx)(`span`, { className: `opacity-70`, children: s })), (t[3] = s), (t[4] = c)),
    c
  );
}
function st(e) {
  let t = (0, lt.c)(11),
    { hostId: n, origin: r, plugin: i } = e,
    a;
  t[0] !== n || t[1] !== i.marketplacePath
    ? ((a = { hostId: n, marketplacePath: i.marketplacePath }),
      (t[0] = n),
      (t[1] = i.marketplacePath),
      (t[2] = a))
    : (a = t[2]);
  let s = W(dt, a),
    c;
  t[3] !== s || t[4] !== i.marketplaceDisplayName || t[5] !== i.marketplaceName
    ? ((c = s || i.marketplaceDisplayName?.trim() || i.marketplaceName),
      (t[3] = s),
      (t[4] = i.marketplaceDisplayName),
      (t[5] = i.marketplaceName),
      (t[6] = c))
    : (c = t[6]);
  let l = c;
  if (r === `git-marketplace`) {
    let e;
    return (
      t[7] === l
        ? (e = t[8])
        : ((e =
            l == null
              ? (0, $.jsx)(o, {
                  id: `plugins.card.gitMarketplacePluginTooltip`,
                  defaultMessage: `From a Git marketplace`,
                  description: `Tooltip identifying a plugin provided by a Git-backed plugin marketplace`,
                })
              : (0, $.jsx)(o, {
                  id: `plugins.card.namedGitMarketplacePluginTooltip`,
                  defaultMessage: `From the {marketplaceName} Git marketplace`,
                  description: `Tooltip identifying a plugin provided by a Git-backed marketplace; {marketplaceName} is the name of that marketplace`,
                  values: { marketplaceName: l },
                })),
          (t[7] = l),
          (t[8] = e)),
      e
    );
  }
  let u;
  return (
    t[9] === l
      ? (u = t[10])
      : ((u =
          l == null
            ? (0, $.jsx)(o, {
                id: `plugins.card.folderMarketplacePluginTooltip`,
                defaultMessage: `From a folder marketplace`,
                description: `Tooltip identifying a plugin provided by a folder-backed plugin marketplace when the marketplace name is unavailable`,
              })
            : (0, $.jsx)(o, {
                id: `plugins.card.namedFolderMarketplacePluginTooltip`,
                defaultMessage: `From {marketplaceName}`,
                description: `Tooltip identifying a plugin provided by a folder-backed plugin marketplace; {marketplaceName} is the name of that marketplace`,
                values: { marketplaceName: l },
              })),
        (t[9] = l),
        (t[10] = u)),
    u
  );
}
function ct() {
  let e = (0, lt.c)(4),
    { data: t } = ie(),
    n;
  e[0] === t?.name ? (n = e[1]) : ((n = t?.name?.trim() || null), (e[0] = t?.name), (e[1] = n));
  let r = n,
    i;
  return (
    e[2] === r
      ? (i = e[3])
      : ((i =
          r == null
            ? (0, $.jsx)(o, {
                id: `plugins.card.workspacePluginTooltip`,
                defaultMessage: `From your workspace`,
                description: `Tooltip identifying a plugin provided by the user's workspace when the workspace name is unavailable`,
              })
            : (0, $.jsx)(o, {
                id: `plugins.card.namedWorkspacePluginTooltip`,
                defaultMessage: `From your {workspaceName} workspace`,
                description: `Tooltip identifying a plugin provided by the user's workspace; {workspaceName} is the name of the current workspace`,
                values: { workspaceName: r },
              })),
        (e[2] = r),
        (e[3] = i)),
    i
  );
}
var lt, $, ut, dt;
function ft() {
  return (ft = e(() => {
    ((lt = R()),
      u(),
      O(),
      te(),
      m(),
      T(),
      De(),
      _e(),
      pe(),
      re(),
      z(),
      be(),
      xe(),
      Me(),
      l(),
      ge(),
      ($ = V()),
      (ut = j(i, ({ hostId: e, marketplaceName: t, marketplacePath: n, sourceType: i }, { get: a }) => {
        if (t == null || n == null || i == null || i === `remote` || we(t)) return;
        let o = a(Ee, e).data;
        if (o == null || !o.configReadSucceeded) return;
        let s = a(Se, { hostId: e }).data;
        if (s != null) {
          if (je(o.config).has(t)) {
            let t = a(he, { hostId: e }).data,
              i = a(J, { hostId: e }).data;
            if (t == null || i == null || (t.codexHome == null && s.homeDirectory == null)) return;
            if (k([t.codexHome ?? r(s.homeDirectory, `.codex`), ...i.roots], n) === 0)
              return `git-marketplace`;
          }
          return G(s.homeDirectory, n) ? `local` : `folder-marketplace`;
        }
      })),
      (dt = j(i, ({ hostId: e, marketplacePath: t }, { get: n }) => {
        if (t == null) return null;
        let r = n(Te, e).data?.plugins;
        if (r == null) return null;
        let i = Oe(r).find(({ value: e }) => e === t);
        return i == null ? null : i.subLabel == null ? i.label : `${i.label} · ${i.subLabel}`;
      })));
  }))();
}
export { Ve as a, rt as i, ft as n, Ue as o, Je as r, qe as s, it as t };
//# sourceMappingURL=plugin-origin-badge-1e1f880d2dac.js.map
