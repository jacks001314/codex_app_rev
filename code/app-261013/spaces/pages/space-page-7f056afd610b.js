const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./pricing-page-adfb67aeecdb.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./chatgpt_subscription-521a9ceb1ea2.js",
      "./business-checkout-a788e1236aa6.js",
      "./pricing-page-defaults-dc819d9fd5a5.js",
      "./tax-15b33525233d.js",
      "./pricing-promotions-b1ea6c6fec84.js",
      "./queries-9a7ecb201f4e.js",
      "./beacon-renewal-eligibility-2a3d162ee4ea.js",
      "./payment-upgrade-analytics-3a513559b1c0.js",
      "./plan-names-6d43f40b2723.js",
      "./pricing-889ac3693bce.js",
      "./subscription-update-plan-7dcf54a45cb8.js",
      "./pricing-page-b57cb2479cf7.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Cot as n,
  Ext as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  Vxt as s,
  _O as c,
  _xt as l,
  cI as u,
  cSt as d,
  e3 as f,
  fPt as p,
  iI as m,
  iz as h,
  jDt as g,
  kxt as _,
  lI as v,
  mO as y,
  nSt as b,
  oI as ee,
  oxt as x,
  pPt as S,
  rz as C,
  t3 as w,
  vO as T,
  vzt as E,
  wot as te,
  wxt as D,
  xMt as O,
  yzt as k,
  z4 as A,
  zxt as j,
} from "./app-shared-bbfeca5e5737.js";
import {
  ACn as M,
  AI as N,
  Ac as P,
  B3n as F,
  Bar as I,
  Bsn as ne,
  Cwr as re,
  Dor as L,
  Ear as R,
  FFr as ie,
  FGt as ae,
  Fsn as oe,
  GMr as se,
  HCn as ce,
  I2 as le,
  I3n as ue,
  Iar as de,
  Isn as fe,
  JMr as pe,
  Jbn as me,
  Kar as he,
  Kdt as ge,
  Lsn as _e,
  MCr as ve,
  MI as ye,
  MPr as be,
  Mc as xe,
  Mmn as Se,
  OEn as Ce,
  OPr as we,
  P2 as Te,
  PGt as Ee,
  RCr as De,
  Rmt as Oe,
  Rsn as z,
  Tln as ke,
  U8t as Ae,
  UCn as je,
  WCn as Me,
  WMr as Ne,
  XMr as B,
  Xet as Pe,
  YMr as Fe,
  Zet as Ie,
  ak as Le,
  ay as Re,
  bTn as V,
  cqt as ze,
  dwn as Be,
  ek as Ve,
  eor as He,
  fG as Ue,
  gwn as We,
  gwr as H,
  hln as U,
  hwn as Ge,
  ik as Ke,
  iwr as W,
  jCn as G,
  jc as qe,
  jmn as Je,
  kEn as Ye,
  kc as Xe,
  lIr as Ze,
  mln as Qe,
  nk as $e,
  nor as et,
  nw as tt,
  pG as nt,
  qMr as rt,
  qar as it,
  qdt as at,
  rcn as ot,
  rk as st,
  rxn as ct,
  ry as lt,
  sqt as ut,
  tNr as dt,
  tor as ft,
  uIr as pt,
  wln as mt,
  xsn as K,
  yTn as q,
  zFr as ht,
  zar as gt,
  zmt as _t,
} from "./app-initial-5851df3f6cb1.js";
import { a as vt, n as yt } from "./actions-2467c5f5431b.js";
import { i as bt, r as xt } from "./creation-intents-432d9bada664.js";
import { a as St, n as Ct, o as wt, t as Tt } from "./editor-7559e0427500.js";
import { n as Et, t as Dt } from "./layout-1350b9e499a1.js";
import { n as Ot, t as kt } from "./open-e3532d78fe23.js";
import { n as At, t as jt } from "./creation-recovery-acaa722a8b06.js";
import { n as Mt, t as Nt } from "./template-draft-chat-8afe3a02063f.js";
import { n as Pt, t as Ft } from "./onboarding-1ab7fd5fa20d.js";
function It(e) {
  let t = (0, Lt.c)(13),
    { pageId: n } = e,
    r = a(H),
    i = s(L),
    o = D(),
    { data: c } = j(ne, n),
    l = c?.metadata.access.can_read === !0 && c.metadata.deleted_at == null,
    u = o.state?.pageArtifact,
    d;
  t[0] !== i || t[1] !== l || t[2] !== n || t[3] !== r || t[4] !== u
    ? ((d = () => {
        if (!l || i == null || u?.accountId !== i || u.pageId !== n) return;
        let e = new AbortController();
        return (
          Ot(r, u.reference, e.signal, n, { fullWidth: !0 }),
          () => {
            (e.abort(), We(r, !1), F(r, !1, { animate: !1 }));
          }
        );
      }),
      (t[0] = i),
      (t[1] = l),
      (t[2] = n),
      (t[3] = r),
      (t[4] = u),
      (t[5] = d))
    : (d = t[5]);
  let f;
  return (
    t[6] !== i || t[7] !== l || t[8] !== o.key || t[9] !== n || t[10] !== r || t[11] !== u
      ? ((f = [r, i, n, l, u, o.key]),
        (t[6] = i),
        (t[7] = l),
        (t[8] = o.key),
        (t[9] = n),
        (t[10] = r),
        (t[11] = u),
        (t[12] = f))
      : (f = t[12]),
    (0, Rt.useEffect)(d, f),
    null
  );
}
var Lt, Rt;
function zt() {
  return (zt = e(() => {
    ((Lt = E()), o(), (Rt = k()), l(), Ae(), ue(), K(), re(), kt());
  }))();
}
function Bt() {
  let e = (0, Ht.c)(13),
    t = D(),
    n = r();
  if (!h() || !ae(t)) return null;
  let a = (t.state ?? null)?.returnPath ?? `${t.pathname}${t.search}`,
    o;
  e[0] !== n || e[1] !== a
    ? ((o = (e) => {
        e || n(a, { replace: !0 });
      }),
      (e[0] = n),
      (e[1] = a),
      (e[2] = o))
    : (o = e[2]);
  let s;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { "aria-describedby": void 0 }), (e[3] = s))
    : (s = e[3]);
  let l;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, J.jsx)(c, {
        className: `sr-only`,
        children: (0, J.jsx)(i, {
          id: `pricing.comparison.title`,
          defaultMessage: `Upgrade your plan`,
          description: `Heading of the full-screen plan comparison`,
        }),
      })),
      (e[4] = l))
    : (l = e[4]);
  let u;
  e[5] === a ? (u = e[6]) : ((u = (0, J.jsx)(Wt, { modal: !0, returnPath: a })), (e[5] = a), (e[6] = u));
  let d;
  e[7] !== t.key || e[8] !== u
    ? ((d = (0, J.jsx)(ce, { name: `BrowserPricing`, resetKey: t.key, fallback: Vt, children: u })),
      (e[7] = t.key),
      (e[8] = u),
      (e[9] = d))
    : (d = e[9]);
  let f;
  return (
    e[10] !== o || e[11] !== d
      ? ((f = (0, J.jsx)(Ut.Suspense, {
          fallback: null,
          children: (0, J.jsxs)(y, {
            open: !0,
            onOpenChange: o,
            unstyledContent: !0,
            viewportSized: !0,
            showDialogClose: !1,
            contentProps: s,
            children: [l, d],
          }),
        })),
        (e[10] = o),
        (e[11] = d),
        (e[12] = f))
      : (f = e[12]),
    f
  );
}
function Vt(e) {
  return (0, J.jsx)(je, { error: e.error, resetError: () => e.resetError() });
}
var Ht, Ut, J, Wt;
function Gt() {
  return (Gt = e(() => {
    ((Ht = E()),
      (Ut = k()),
      g(),
      l(),
      T(),
      Me(),
      A(),
      C(),
      Ee(),
      (J = O()),
      S(),
      (Wt = t(
        async () =>
          (
            await p(
              async () => {
                let { PricingPlanPage: e } = await import(`./pricing-page-adfb67aeecdb.js`);
                return { PricingPlanPage: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
              import.meta.url,
            )
          ).PricingPlanPage,
        { suspendToParent: !0, propagateLoadError: !0 },
      )));
  }))();
}
function Kt(e) {
  let t = (0, qt.c)(17),
    { pageId: n } = e,
    r = j(he, n),
    a = s(I),
    o = D(),
    c = new URLSearchParams(o.search),
    l = a && !c.has(`invitation_id`),
    u;
  t[0] === l ? (u = t[1]) : ((u = { enabled: l }), (t[0] = l), (t[1] = u));
  let { data: d, isFetching: p } = j(ne, n, u),
    m = `page://${n}${o.hash}`,
    h;
  t[2] === m ? (h = t[3]) : ((h = ee(m)), (t[2] = m), (t[3] = h));
  let g = h,
    _;
  if (r === `loading` || (r === `disabled` && a && p)) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(q, { fillParent: !0 })), (t[4] = e))
      : (e = t[4]),
      (_ = e));
  } else if (r === `enabled`) {
    let e = g?.kind === `page` ? g.blockId : void 0,
      r;
    if (
      (t[5] !== o.key || t[6] !== n || t[7] !== e
        ? ((r = (0, Y.jsx)(Tt, { pageId: n, blockId: e, blockNavigationKey: o.key, viewOnly: !0 }, n)),
          (t[5] = o.key),
          (t[6] = n),
          (t[7] = e),
          (t[8] = r))
        : (r = t[8]),
      (_ = r),
      c.has(`invitation_id`))
    ) {
      let e;
      (t[9] === n ? (e = t[10]) : ((e = { kind: `page`, id: n }), (t[9] = n), (t[10] = e)),
        (_ = (0, Y.jsx)(qe, { target: e, invitationId: c.get(`invitation_id`), viewOnly: !0, children: _ })));
    }
  } else {
    let e = d?.metadata.document_type ?? `page`,
      n;
    (t[11] === e
      ? (n = t[12])
      : ((n = (0, Y.jsx)(M, {
          layout: `page`,
          title: (0, Y.jsx)(i, {
            id: `pages.sharedViewer.unavailable.byDocumentType`,
            values: { documentType: e },
            defaultMessage: `{documentType, select, granola_presentation {This slide is unavailable} granola_workbook {This sheet is unavailable} other {This page is unavailable}}`,
            description: `Generic message shown when a Page cannot be opened because the signed-in account is not eligible or the Page is unavailable, including a missing or deleted Page. Keep the wording neutral: do not imply that requesting access will help or reveal whether the Page exists, was deleted, or is in Trash. documentType selects slide, sheet, or page for the current document.`,
          }),
        })),
        (t[11] = e),
        (t[12] = n)),
      (_ = n));
  }
  let v;
  t[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = (0, Y.jsx)(Bt, {})), (t[13] = v)) : (v = t[13]);
  let y;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Y.jsx)(`div`, {
        className: `flex shrink-0 items-center gap-2 p-3`,
        children: (0, Y.jsx)(f, {
          color: `secondary`,
          href: `/`,
          children: (0, Y.jsx)(i, {
            id: `pages.sharedViewer.returnToChatGPT`,
            defaultMessage: `Back to ChatGPT`,
            description: `Leave the shared Page viewer and return to the normal ChatGPT website`,
          }),
        }),
      })),
      (t[14] = y))
    : (y = t[14]);
  let b;
  return (
    t[15] === _
      ? (b = t[16])
      : ((b = (0, Y.jsxs)(`main`, {
          className: `flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden`,
          children: [
            v,
            y,
            (0, Y.jsx)(`div`, { className: `relative flex min-h-0 flex-1 flex-col`, children: _ }),
          ],
        })),
        (t[15] = _),
        (t[16] = b)),
    b
  );
}
var qt, Y;
function Jt() {
  return (Jt = e(() => {
    ((qt = E()), o(), m(), g(), l(), Gt(), w(), G(), V(), Ct(), R(), xe(), K(), (Y = O()));
  }))();
}
function Yt(e) {
  let t = new URL(window.location.href);
  (t.searchParams.set(`initialRoute`, e),
    window.history.replaceState(window.history.state, ``, t.toString()));
}
var Xt;
function Zt() {
  return (Zt = e(() => {
    (o(),
      Ze(),
      dt(),
      ht(),
      R(),
      Ue(),
      K(),
      te(),
      we(),
      Te(),
      Qe(),
      (Xt = d(n, (e, { scope: t, externalSignal: n }) => {
        let r,
          i,
          a = !1,
          o = !1,
          s = (e) => {
            ((o = !0), a || r?.cancel(e));
          };
        return n(
          () => (o ? `unavailable` : !U(e) || r != null ? `ready` : `loading`),
          ({ get: n, set: c }) => {
            if (!U(e)) return;
            if (r == null && t.get(oe, e) != null) {
              c(`ready`);
              return;
            }
            let l = n(de),
              u = n(B),
              d = n(Fe),
              f = n(rt),
              p = JSON.stringify([l, u, d, f]);
            if (o || (i != null && i !== p)) {
              (s(`account_changed`), c(`unavailable`));
              return;
            }
            if (a) {
              c(`ready`);
              return;
            }
            if (r == null && !n(nt)) {
              if (!n(pe) || n(gt) === `loading` || n(be, `459748632`) || n(be, `1032827878`)) return;
              (s(`creation_unavailable`), c(`unavailable`));
              return;
            }
            let m = n(ie);
            if (m == null) return;
            if (m.pathname !== `/space/${e}`) {
              r == null && t.get(z, e) === e ? (s(`navigation_away`), c(`unavailable`)) : c(`ready`);
              return;
            }
            let h = new URLSearchParams(m.search),
              g = `/space/${e}?window=page`;
            if (r == null) {
              let n = new URL(window.location.href).searchParams.get(`initialRoute`),
                o = n == null ? null : new URL(n, `app://-`),
                u = o?.searchParams ?? h;
              if (
                l == null ||
                d == null ||
                u.get(`creationAccountId`) !== l ||
                u.get(`creationUserId`) !== d
              ) {
                (s(`account_changed`), c(`unavailable`));
                return;
              }
              if (
                h.get(`start`) !== `1` ||
                (o != null && (o.pathname !== m.pathname || o.searchParams.get(`start`) !== `1`))
              ) {
                (s(`creation_unavailable`), c(`unavailable`));
                return;
              }
              ((i = p), Yt(g));
              try {
                ((r = le(t, { localPageId: e }, (e) => {
                  ((a = !0),
                    new URL(window.location.href).searchParams.get(`initialRoute`) === g &&
                      Yt(`/space/${e.metadata.page_id}?window=page`));
                })),
                  r.completion.catch(() => void 0));
              } catch {
                (s(`creation_unavailable`), c(`unavailable`));
                return;
              }
              pt(t, g, { replace: !0, state: { ...m.state, focusPageTitle: !0 } });
            }
            c(`ready`);
          },
        );
      })));
  }))();
}
function Qt(e) {
  let t = (0, $t.c)(4),
    { children: n, pageId: r } = e,
    a = j(Xt, r);
  if (a === `ready`) {
    let e;
    return (
      t[0] === n ? (e = t[1]) : ((e = (0, X.jsx)(X.Fragment, { children: n })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let o;
  return (
    t[2] === a
      ? (o = t[3])
      : ((o =
          a === `unavailable`
            ? (0, X.jsx)(M, {
                layout: `page`,
                title: (0, X.jsx)(i, {
                  id: `pages.newWindow.unavailable`,
                  defaultMessage: `This new Page could not be restored`,
                  description: `Shown when an unsaved Page window cannot safely resume creation after reload or an account change`,
                }),
                description: (0, X.jsx)(i, {
                  id: `pages.newWindow.unavailableDescription`,
                  defaultMessage: `Check Personal for a Page that may already have been created, or open a new Page from Space`,
                  description: `Recovery advice when a new Page window lost its in-memory creation state; Personal and Space name navigation destinations`,
                }),
              })
            : (0, X.jsx)(q, {})),
        (t[2] = a),
        (t[3] = o)),
    o
  );
}
var $t, X;
function en() {
  return (en = e(() => {
    (($t = E()), o(), g(), G(), V(), Zt(), (X = O()));
  }))();
}
function tn(e) {
  let t = (0, rn.c)(18),
    { navigationKey: n, options: r, pageId: i } = e,
    o = a(H),
    s = D(),
    c = (0, Z.useRef)(null),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = () => () => {
        c.current = null;
      }),
      (t[0] = l))
    : (l = t[0]);
  let u;
  (t[1] !== i || t[2] !== o ? ((u = [i, o]), (t[1] = i), (t[2] = o), (t[3] = u)) : (u = t[3]),
    (0, Z.useLayoutEffect)(l, u));
  let d;
  t[4] !== s || t[5] !== n || t[6] !== r || t[7] !== i || t[8] !== o
    ? ((d = () => {
        let e = o.get($e);
        if (e.workspaceId !== i) {
          e.workspaceId != null && U(e.workspaceId) && Le.adoptWorkspaceId(o, e, i);
          return;
        }
        if (
          (Se.panelOwnsRoute(`page`, i),
          lt(s) != null ||
            o.get(Ke) ||
            o.get(ct) ||
            e.clientThreadId !== o.value.clientThreadId ||
            o.get(st) === n ||
            o.get(Ie) === n ||
            (o.get(vt)?.clientThreadId === o.value.clientThreadId && o.get(vt)?.navigationKey === n))
        )
          return;
        let t = c.current;
        if (
          o.get(Ge.tabs$).some(nn) &&
          (t == null || t.key === n) &&
          r.blockId === void 0 &&
          !r.focusTitle &&
          r.navigationTarget == null
        ) {
          c.current = { key: n, clientThreadId: o.value.clientThreadId, selectionVersion: o.get(W) };
          return;
        }
        (t?.key !== n || t.clientThreadId !== o.value.clientThreadId || t.selectionVersion === o.get(W)) &&
          ye(o, i, r).opened &&
          (c.current = { key: n, clientThreadId: o.value.clientThreadId, selectionVersion: o.get(W) });
      }),
      (t[4] = s),
      (t[5] = n),
      (t[6] = r),
      (t[7] = i),
      (t[8] = o),
      (t[9] = d))
    : (d = t[9]);
  let f = (0, Z.useEffectEvent)(d),
    p;
  t[10] !== f || t[11] !== i || t[12] !== o
    ? ((p = () =>
        o.watch((e) => {
          let { get: t } = e;
          (t(ct), t(L) != null && t(I) && t(ve) && (!t(Ke) || t($e).workspaceId !== i) && f());
        })),
      (t[10] = f),
      (t[11] = i),
      (t[12] = o),
      (t[13] = p))
    : (p = t[13]);
  let m;
  return (
    t[14] !== n || t[15] !== i || t[16] !== o
      ? ((m = [n, i, o]), (t[14] = n), (t[15] = i), (t[16] = o), (t[17] = m))
      : (m = t[17]),
    (0, Z.useLayoutEffect)(p, m),
    null
  );
}
function nn(e) {
  return e.isWorkspaceHome;
}
var rn, Z;
function an() {
  return (an = e(() => {
    ((rn = E()),
      o(),
      (Z = k()),
      l(),
      De(),
      Be(),
      Qe(),
      R(),
      Je(),
      N(),
      K(),
      re(),
      me(),
      Pe(),
      Re(),
      yt(),
      Ve());
  }))();
}
function on() {
  let e = (0, Q.c)(39),
    { pageId: t } = _(),
    n = j(_e, t ?? ``),
    r = j(z, t ?? ``),
    a = s(B),
    o = s(L),
    c = s(se),
    l = s(pe),
    u = s(Ne),
    d = D(),
    f = j(it, d.pathname),
    p = s(ze),
    m;
  if (
    e[0] !== o ||
    e[1] !== u ||
    e[2] !== c ||
    e[3] !== l ||
    e[4] !== d.hash ||
    e[5] !== d.pathname ||
    e[6] !== d.search ||
    e[7] !== d.state ||
    e[8] !== t ||
    e[9] !== f ||
    e[10] !== a
  ) {
    m = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let n = new URLSearchParams(d.search),
        r = n.get(`account_id`)?.trim();
      if (r) {
        if (!l) {
          let t;
          (e[12] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((t = (0, $.jsx)(q, {})), (e[12] = t))
            : (t = e[12]),
            (m = t));
          break bb0;
        }
        if (r === `personal` && u.status !== `loaded`) {
          let t;
          (e[13] === u.status
            ? (t = e[14])
            : ((t =
                u.status === `loading`
                  ? (0, $.jsx)(q, {})
                  : (0, $.jsx)(M, {
                      layout: `page`,
                      title: (0, $.jsx)(i, {
                        id: `codex.pages.invitation.accountUnavailable`,
                        defaultMessage: `We couldn’t verify the account for this invitation`,
                        description: `A Page or Space invitation targets a personal account but the signed-in account metadata is unavailable`,
                      }),
                    })),
              (e[13] = u.status),
              (e[14] = t)),
            (m = t));
          break bb0;
        }
        if (
          !(r === `personal` ? u.status === `loaded` && u.structure === `personal` : r === c) ||
          a == null
        ) {
          m = (0, $.jsx)(Xe, { accountId: r }, JSON.stringify([c, a, r]));
          break bb0;
        }
        (n.delete(`account_id`),
          (m = (0, $.jsx)(x, {
            replace: !0,
            state: d.state,
            to: { pathname: d.pathname, search: n.toString(), hash: d.hash },
          })));
        break bb0;
      }
      if (f && t != null) {
        let n = `${a}:${o}:${t}`,
          r;
        (e[15] !== t || e[16] !== n
          ? ((r = (0, $.jsx)(Kt, { pageId: t }, n)), (e[15] = t), (e[16] = n), (e[17] = r))
          : (r = e[17]),
          (m = r));
        break bb0;
      }
      if (n.has(`invitation_id`) && t != null) {
        let r;
        (e[18] === t ? (r = e[19]) : ((r = { kind: `page`, id: t }), (e[18] = t), (e[19] = r)),
          (m = (0, $.jsx)(qe, { target: r, invitationId: n.get(`invitation_id`) })));
        break bb0;
      }
    }
    ((e[0] = o),
      (e[1] = u),
      (e[2] = c),
      (e[3] = l),
      (e[4] = d.hash),
      (e[5] = d.pathname),
      (e[6] = d.search),
      (e[7] = d.state),
      (e[8] = t),
      (e[9] = f),
      (e[10] = a),
      (e[11] = m));
  } else m = e[11];
  if (m !== Symbol.for(`react.early_return_sentinel`)) return m;
  if (ge && t != null) {
    let r = `${a}:${o}:${n}`,
      i;
    e[20] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = (0, $.jsx)(sn, {})), (e[20] = i)) : (i = e[20]);
    let s;
    return (
      e[21] !== t || e[22] !== r
        ? ((s = (0, $.jsx)(Qt, { pageId: t, children: i }, r)), (e[21] = t), (e[22] = r), (e[23] = s))
        : (s = e[23]),
      s
    );
  }
  if (p) {
    let t;
    e[24] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, $.jsx)(jt, {})), (e[24] = t)) : (t = e[24]);
    let r = `${a}:${o}:${n}`,
      i;
    e[25] === r ? (i = e[26]) : ((i = (0, $.jsx)(sn, {}, r)), (e[25] = r), (e[26] = i));
    let s;
    e[27] === d ? (s = e[28]) : ((s = Ce(d) === `space` && (0, $.jsx)(Ft, {})), (e[27] = d), (e[28] = s));
    let c;
    return (
      e[29] !== i || e[30] !== s
        ? ((c = (0, $.jsxs)($.Fragment, { children: [t, i, s] })), (e[29] = i), (e[30] = s), (e[31] = c))
        : (c = e[31]),
      c
    );
  }
  let h = `${a}:${o}`,
    g;
  e[32] !== n || e[33] !== d
    ? ((g = (e) =>
        (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(Nt, {}),
            (0, $.jsx)(jt, {}),
            (0, $.jsx)(sn, { explorer: e ?? void 0 }, n),
            Ce(d) === `space` && (0, $.jsx)(Ft, {}),
          ],
        })),
      (e[32] = n),
      (e[33] = d),
      (e[34] = g))
    : (g = e[34]);
  let v;
  return (
    e[35] !== r || e[36] !== h || e[37] !== g
      ? ((v = (0, $.jsx)(Dt, { pageId: r, children: g }, h)),
        (e[35] = r),
        (e[36] = h),
        (e[37] = g),
        (e[38] = v))
      : (v = e[38]),
    v
  );
}
function sn(e) {
  let t = (0, Q.c)(47),
    { explorer: n } = e,
    r = a(H),
    i = s(ze),
    o = s(ft),
    c = s(et),
    l = s(L),
    u = s(B),
    d = D(),
    { pageId: f } = _(),
    p;
  t[0] === f ? (p = t[1]) : ((p = () => U(f ?? ``)), (t[0] = f), (t[1] = p));
  let [m] = (0, cn.useState)(p),
    h = j(wt, f ?? ``),
    g = j(ln, f ?? ``),
    y = s(bt),
    b = s(ke),
    S = j(z, f ?? ``),
    C =
      d.state?.pagePreview?.accountId === l &&
      d.state.pagePreview.userId === u &&
      d.state.pagePreview.pageId === S
        ? d.state.pagePreview
        : void 0,
    w = `page://${S}${d.hash}`,
    T;
  t[2] === w ? (T = t[3]) : ((T = ee(w)), (t[2] = w), (t[3] = T));
  let E = T,
    te = j(fe, f ?? ``),
    O = s(_t),
    k = j(_e, f ?? ``),
    A = j(un, S);
  if (f == null) {
    let e;
    return (
      t[4] === O ? (e = t[5]) : ((e = (0, $.jsx)(x, { replace: !0, to: O })), (t[4] = O), (t[5] = e)),
      e
    );
  }
  let M = m ? g?.response : void 0;
  if (A != null && M == null && !c && !o) {
    let e = `/spaces/${A}`,
      n;
    t[6] !== d.hash || t[7] !== d.search || t[8] !== e
      ? ((n = { pathname: e, search: d.search, hash: d.hash }),
        (t[6] = d.hash),
        (t[7] = d.search),
        (t[8] = e),
        (t[9] = n))
      : (n = t[9]);
    let r;
    return (
      t[10] !== d.state || t[11] !== n
        ? ((r = (0, $.jsx)(x, { replace: !0, state: d.state, to: n })),
          (t[10] = d.state),
          (t[11] = n),
          (t[12] = r))
        : (r = t[12]),
      r
    );
  }
  if (U(S) && te == null) {
    if (h === `failed`) {
      let e;
      return (t[13] === f ? (e = t[14]) : ((e = (0, $.jsx)(Tt, { pageId: f })), (t[13] = f), (t[14] = e)), e);
    }
    if (
      h === `loading` ||
      b == null ||
      b.some((e) => e.documentId === S) ||
      y == null ||
      y.some((e) => e.localPageId === S && e.accountId === l && e.userId === u)
    ) {
      let e;
      return (
        t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(q, {})), (t[15] = e))
          : (e = t[15]),
        e
      );
    }
    let e;
    return (
      t[16] === O ? (e = t[17]) : ((e = (0, $.jsx)(x, { replace: !0, to: O })), (t[16] = O), (t[17] = e)),
      e
    );
  }
  f !== S && U(f) && Se.skipPromotedPageNavigation(S);
  let N;
  t[18] !== S || t[19] !== d.hash || t[20] !== d.search || t[21] !== d.state || t[22] !== f
    ? ((N =
        f !== S &&
        (0, $.jsx)(x, {
          replace: !0,
          state: {
            ...d.state,
            spaceSidebarRootPageId:
              d.state?.spaceSidebarRootPageId === f ? S : d.state?.spaceSidebarRootPageId,
          },
          to: { pathname: `/space/${S}`, search: d.search, hash: d.hash },
        })),
      (t[18] = S),
      (t[19] = d.hash),
      (t[20] = d.search),
      (t[21] = d.state),
      (t[22] = f),
      (t[23] = N))
    : (N = t[23]);
  let P;
  t[24] !== l || t[25] !== S || t[26] !== d.state
    ? ((P =
        d.state?.pageArtifact?.pageId === S &&
        d.state.pageArtifact.accountId === l &&
        (0, $.jsx)(It, { pageId: S })),
      (t[24] = l),
      (t[25] = S),
      (t[26] = d.state),
      (t[27] = P))
    : (P = t[27]);
  let F;
  t[28] !== l ||
  t[29] !== S ||
  t[30] !== M ||
  t[31] !== g?.backingType ||
  t[32] !== k ||
  t[33] !== n ||
  t[34] !== o ||
  t[35] !== c ||
  t[36] !== d ||
  t[37] !== f ||
  t[38] !== C ||
  t[39] !== E ||
  t[40] !== r ||
  t[41] !== i
    ? ((F =
        i && !ge && M == null
          ? (0, $.jsx)(tn, {
              navigationKey: d.key,
              options: {
                blockId:
                  E?.kind === `page` ? (E.blockId ?? (d.state?.scrollPageToTop ? null : void 0)) : void 0,
                focusTitle: f === S && d.state?.focusPageTitle,
                pagePreview: C,
                navigationTarget: v(d.search, d.key),
              },
              pageId: S,
            })
          : (0, $.jsx)(
              Tt,
              {
                explorer: n,
                blockId:
                  E?.kind === `page` ? (E.blockId ?? (d.state?.scrollPageToTop ? null : void 0)) : void 0,
                blockNavigationKey: d.key,
                focusTitle: f === S && d.state?.focusPageTitle,
                pagePreview: C,
                navigationTarget: v(d.search, d.key),
                onClose: void 0,
                onTitleFocused: () => {
                  pt(r, d, { replace: !0, state: { ...d.state, focusPageTitle: !1, scrollPageToTop: !1 } });
                },
                pageId: S,
                space: M?.backing_type === `drive` ? M : void 0,
                spaceBackingType: g?.backingType,
              },
              `${l ?? `anonymous`}:${k}`,
            )),
      (t[28] = l),
      (t[29] = S),
      (t[30] = M),
      (t[31] = g?.backingType),
      (t[32] = k),
      (t[33] = n),
      (t[34] = o),
      (t[35] = c),
      (t[36] = d),
      (t[37] = f),
      (t[38] = C),
      (t[39] = E),
      (t[40] = r),
      (t[41] = i),
      (t[42] = F))
    : (F = t[42]);
  let I;
  return (
    t[43] !== N || t[44] !== P || t[45] !== F
      ? ((I = (0, $.jsxs)($.Fragment, { children: [N, P, F] })),
        (t[43] = N),
        (t[44] = P),
        (t[45] = F),
        (t[46] = I))
      : (I = t[46]),
    I
  );
}
var Q, cn, $, ln, un;
function dn() {
  return (dn = e(() => {
    ((Q = E()),
      o(),
      u(),
      m(),
      (cn = k()),
      g(),
      l(),
      Ze(),
      dt(),
      G(),
      P(),
      V(),
      zt(),
      Jt(),
      tt(),
      en(),
      Qe(),
      Ct(),
      Et(),
      R(),
      Oe(),
      Je(),
      at(),
      St(),
      K(),
      te(),
      re(),
      He(),
      Ye(),
      xe(),
      Mt(),
      xt(),
      At(),
      mt(),
      ut(),
      Pt(),
      an(),
      ($ = O()),
      (ln = b(n, (e, { get: t }) => t(oe, e)?.space)),
      (un = b(
        n,
        (e, { get: t }) =>
          t(ot).data?.items.find((t) => t.backing_type === `drive` && t.root_page_id === e)?.id,
      )));
  }))();
}
dn();
export { on as SpacePage };
//# sourceMappingURL=space-page-7f056afd610b.js.map
