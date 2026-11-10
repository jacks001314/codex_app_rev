const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./pricing-page-bccfea83a0fe.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./marketing-pixels-871dfebeb13e.js",
      "./chatgpt_subscription-521a9ceb1ea2.js",
      "./business-checkout-a788e1236aa6.js",
      "./pricing-page-defaults-74410a227dce.js",
      "./tax-e50b6a7c0765.js",
      "./pricing-promotions-5aab26ebeddd.js",
      "./queries-ea9f18d3fc31.js",
      "./beacon-renewal-eligibility-eae3ca54d5ad.js",
      "./payment-upgrade-analytics-c3815a3f6b6a.js",
      "./tax-information-2fee61dff4f7.js",
      "./tax-information-da907f8feffb.css",
      "./plan-names-711c0863dd98.js",
      "./pricing-889ac3693bce.js",
      "./subscription-update-plan-b5de7979cb69.js",
      "./pricing-page-e5d70234942c.css",
      "./dialog-14df32bcde97.js",
      "./prompt-chat-bcb03ce4ce0e.js",
      "./error-21e6fb16598c.js",
      "./actions-e51654d88035.js",
      "./outgoing-chat-checkpoint-ef81080d85b5.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  $z as r,
  F3 as i,
  FBt as a,
  I3 as o,
  JO as s,
  KSt as c,
  LNt as l,
  NSt as u,
  OFt as d,
  PBt as f,
  Pit as p,
  QI as m,
  Qst as h,
  Qz as g,
  SSt as _,
  TCt as v,
  USt as ee,
  VSt as y,
  WO as te,
  X3 as b,
  XOt as x,
  YI as ne,
  Z3 as S,
  ZI as C,
  ZSt as w,
  iCt as T,
  jit as re,
  kFt as E,
  nCt as D,
  qI as O,
  qO as ie,
  tkt as k,
  yCt as A,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as j,
  ABt as M,
  ADn as N,
  Adn as ae,
  BRr as P,
  Bfn as F,
  Bk as oe,
  C7n as se,
  CK as ce,
  Cnt as le,
  Cy as ue,
  Dlr as de,
  Ey as fe,
  FDn as pe,
  Fc as me,
  Flr as he,
  HOn as I,
  Hlr as ge,
  I2n as _e,
  Ic as ve,
  Ik as ye,
  JDr as be,
  Lc as xe,
  MOr as L,
  Mdn as R,
  Mir as z,
  N2n as Se,
  NOn as Ce,
  Nir as B,
  Olr as we,
  PDn as Te,
  POn as Ee,
  Pc as De,
  Pdn as V,
  Plr as Oe,
  QVt as ke,
  Qkn as Ae,
  Rk as je,
  Snt as Me,
  UOn as Ne,
  Ulr as Pe,
  Vk as Fe,
  Wlr as Ie,
  XEn as Le,
  Xgn as Re,
  Xht as ze,
  YEn as H,
  Ycr as Be,
  Yht as Ve,
  ZVt as He,
  Zdn as Ue,
  Zgn as We,
  Zkn as Ge,
  a3 as Ke,
  awn as qe,
  bLr as Je,
  bOr as U,
  bpn as Ye,
  cDn as Xe,
  eOr as Ze,
  elr as Qe,
  f9t as $e,
  gLr as et,
  gur as W,
  hL as tt,
  hdn as G,
  jBt as nt,
  jdn as rt,
  jw as it,
  kdn as at,
  lBr as ot,
  lDn as st,
  lpn as K,
  mlr as q,
  mwn as ct,
  npt as lt,
  pBr as ut,
  pL as dt,
  r3 as ft,
  sDn as pt,
  tpt as mt,
  upn as J,
  vLr as ht,
  wK as gt,
  wLr as _t,
  wlr as vt,
  y7n as yt,
  yLr as bt,
  ypn as xt,
  zOr as St,
  zRr as Ct,
  zfn as wt,
  zk as Tt,
} from "./app-initial-ad16eaadf81f.js";
import { a as Et, n as Dt } from "./actions-e51654d88035.js";
import { i as Ot, r as kt } from "./creation-intents-51ddf095b952.js";
import { a as At, n as jt, o as Mt, t as Nt } from "./editor-9b1f5c42c48b.js";
import { n as Pt, t as Ft } from "./layout-e024e43f5b5b.js";
import { n as It, t as Lt } from "./open-e59c2dc64ba2.js";
import { n as Rt, t as zt } from "./creation-recovery-48644367c50a.js";
import { n as Bt, t as Vt } from "./template-draft-chat-b75e6459498c.js";
import { n as Ht, t as Ut } from "./onboarding-30caadff656c.js";
function Wt(e) {
  let n = (0, Gt.c)(13),
    { pageId: r } = e,
    i = t(L),
    a = T(W),
    o = y(),
    { data: s } = D(V, r),
    c = s?.metadata.access.can_read === !0 && s.metadata.deleted_at == null,
    l = o.state?.pageArtifact,
    u;
  n[0] !== a || n[1] !== c || n[2] !== r || n[3] !== i || n[4] !== l
    ? ((u = () => {
        if (!c || a == null || l?.accountId !== a || l.pageId !== r) return;
        let e = new AbortController();
        return (
          It(i, l.reference, e.signal, r, { fullWidth: !0 }),
          () => {
            (e.abort(), pe(i, !1), se(i, !1, { animate: !1 }));
          }
        );
      }),
      (n[0] = a),
      (n[1] = c),
      (n[2] = r),
      (n[3] = i),
      (n[4] = l),
      (n[5] = u))
    : (u = n[5]);
  let d;
  return (
    n[6] !== a || n[7] !== c || n[8] !== o.key || n[9] !== r || n[10] !== i || n[11] !== l
      ? ((d = [i, a, r, c, l, o.key]),
        (n[6] = a),
        (n[7] = c),
        (n[8] = o.key),
        (n[9] = r),
        (n[10] = i),
        (n[11] = l),
        (n[12] = d))
      : (d = n[12]),
    (0, Kt.useEffect)(u, d),
    null
  );
}
var Gt, Kt;
function qt() {
  return (qt = e(() => {
    ((Gt = f()), w(), (Kt = a()), u(), $e(), yt(), G(), St(), Lt());
  }))();
}
function Jt() {
  let e = (0, Xt.c)(13),
    t = y(),
    n = ee();
  if (!r() || !nt(t)) return null;
  let i = (t.state ?? null)?.returnPath ?? `${t.pathname}${t.search}`,
    a;
  e[0] !== n || e[1] !== i
    ? ((a = (e) => {
        e || n(i, { replace: !0 });
      }),
      (e[0] = n),
      (e[1] = i),
      (e[2] = a))
    : (a = e[2]);
  let o;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { "aria-describedby": void 0 }), (e[3] = o))
    : (o = e[3]);
  let s;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(ie, {
        className: `sr-only`,
        children: (0, Y.jsx)(k, {
          id: `pricing.comparison.title`,
          defaultMessage: `Upgrade your plan`,
          description: `Heading of the full-screen plan comparison`,
        }),
      })),
      (e[4] = s))
    : (s = e[4]);
  let c;
  e[5] === i ? (c = e[6]) : ((c = (0, Y.jsx)(Qt, { modal: !0, returnPath: i })), (e[5] = i), (e[6] = c));
  let l;
  e[7] !== t.key || e[8] !== c
    ? ((l = (0, Y.jsx)(pt, { name: `BrowserPricing`, resetKey: t.key, fallback: Yt, children: c })),
      (e[7] = t.key),
      (e[8] = c),
      (e[9] = l))
    : (l = e[9]);
  let u;
  return (
    e[10] !== a || e[11] !== l
      ? ((u = (0, Y.jsx)(Zt.Suspense, {
          fallback: null,
          children: (0, Y.jsxs)(te, {
            open: !0,
            onOpenChange: a,
            unstyledContent: !0,
            viewportSized: !0,
            showDialogClose: !1,
            contentProps: o,
            children: [s, l],
          }),
        })),
        (e[10] = a),
        (e[11] = l),
        (e[12] = u))
      : (u = e[12]),
    u
  );
}
function Yt(e) {
  return (0, Y.jsx)(Xe, { error: e.error, resetError: () => e.resetError() });
}
var Xt, Zt, Y, Qt;
function $t() {
  return ($t = e(() => {
    ((Xt = f()),
      (Zt = a()),
      x(),
      u(),
      s(),
      st(),
      i(),
      g(),
      M(),
      (Y = l()),
      E(),
      (Qt = o(
        async () =>
          (
            await d(
              async () => {
                let { PricingPlanPage: e } = await import(`./pricing-page-bccfea83a0fe.js`);
                return { PricingPlanPage: e };
              },
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
              ]),
              import.meta.url,
            )
          ).PricingPlanPage,
        { suspendToParent: !0, propagateLoadError: !0 },
      )));
  }))();
}
function en(e) {
  let t = (0, tn.c)(17),
    { pageId: n } = e,
    r = D(Oe, n),
    i = T(we),
    a = y(),
    o = new URLSearchParams(a.search),
    s = i && !o.has(`invitation_id`),
    c;
  t[0] === s ? (c = t[1]) : ((c = { enabled: s }), (t[0] = s), (t[1] = c));
  let { data: l, isFetching: u } = D(V, n, c),
    d = `page://${n}${a.hash}`,
    f;
  t[2] === d ? (f = t[3]) : ((f = ne(d)), (t[2] = d), (t[3] = f));
  let p = f,
    m;
  if (r === `loading` || (r === `disabled` && i && u)) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(I, { fillParent: !0 })), (t[4] = e))
      : (e = t[4]),
      (m = e));
  } else if (r === `enabled`) {
    let e = p?.kind === `page` ? p.blockId : void 0,
      r;
    if (
      (t[5] !== a.key || t[6] !== n || t[7] !== e
        ? ((r = (0, X.jsx)(Nt, { pageId: n, blockId: e, blockNavigationKey: a.key, viewOnly: !0 }, n)),
          (t[5] = a.key),
          (t[6] = n),
          (t[7] = e),
          (t[8] = r))
        : (r = t[8]),
      (m = r),
      o.has(`invitation_id`))
    ) {
      let e;
      (t[9] === n ? (e = t[10]) : ((e = { kind: `page`, id: n }), (t[9] = n), (t[10] = e)),
        (m = (0, X.jsx)(ve, { target: e, invitationId: o.get(`invitation_id`), viewOnly: !0, children: m })));
    }
  } else {
    let e = l?.metadata.document_type ?? `page`,
      n;
    (t[11] === e
      ? (n = t[12])
      : ((n = (0, X.jsx)(H, {
          layout: `page`,
          title: (0, X.jsx)(k, {
            id: `pages.sharedViewer.unavailable.byDocumentType`,
            values: { documentType: e },
            defaultMessage: `{documentType, select, granola_presentation {This slide is unavailable} granola_workbook {This sheet is unavailable} other {This page is unavailable}}`,
            description: `Generic message shown when a Page cannot be opened because the signed-in account is not eligible or the Page is unavailable, including a missing or deleted Page. Keep the wording neutral: do not imply that requesting access will help or reveal whether the Page exists, was deleted, or is in Trash. documentType selects slide, sheet, or page for the current document.`,
          }),
        })),
        (t[11] = e),
        (t[12] = n)),
      (m = n));
  }
  let h;
  t[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = (0, X.jsx)(Jt, {})), (t[13] = h)) : (h = t[13]);
  let g;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(`div`, {
        className: `flex shrink-0 items-center gap-2 p-3`,
        children: (0, X.jsx)(b, {
          color: `secondary`,
          href: `/`,
          children: (0, X.jsx)(k, {
            id: `pages.sharedViewer.returnToChatGPT`,
            defaultMessage: `Back to ChatGPT`,
            description: `Leave the shared Page viewer and return to the normal ChatGPT website`,
          }),
        }),
      })),
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] === m
      ? (_ = t[16])
      : ((_ = (0, X.jsxs)(`main`, {
          className: `flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden`,
          children: [
            h,
            g,
            (0, X.jsx)(`div`, { className: `relative flex min-h-0 flex-1 flex-col`, children: m }),
          ],
        })),
        (t[15] = m),
        (t[16] = _)),
    _
  );
}
var tn, X;
function nn() {
  return (nn = e(() => {
    ((tn = f()), w(), O(), x(), u(), $t(), S(), Le(), Ne(), jt(), q(), xe(), G(), (X = l()));
  }))();
}
function rn(e) {
  let t = new URL(window.location.href);
  (t.searchParams.set(`initialRoute`, e),
    window.history.replaceState(window.history.state, ``, t.toString()));
}
var an;
function on() {
  return (on = e(() => {
    (w(),
      z(),
      _t(),
      j(),
      q(),
      ce(),
      G(),
      n(),
      ot(),
      ft(),
      K(),
      (an = v(h, (e, { scope: t, externalSignal: n }) => {
        let r,
          i,
          a = !1,
          o = !1,
          s = (e) => {
            ((o = !0), a || r?.cancel(e));
          };
        return n(
          () => (o ? `unavailable` : !J(e) || r != null ? `ready` : `loading`),
          ({ get: n, set: c }) => {
            if (!J(e)) return;
            if (r == null && t.get(at, e) != null) {
              c(`ready`);
              return;
            }
            let l = n(vt),
              u = n(P),
              d = n(Je),
              f = n(ht),
              p = JSON.stringify([l, u, d, f]);
            if (o || (i != null && i !== p)) {
              (s(`account_changed`), c(`unavailable`));
              return;
            }
            if (a) {
              c(`ready`);
              return;
            }
            if (r == null && !n(gt)) {
              if (!n(bt) || n(de) === `loading` || n(ut, `459748632`) || n(ut, `1032827878`)) return;
              (s(`creation_unavailable`), c(`unavailable`));
              return;
            }
            let m = n(Be);
            if (m == null) return;
            if (m.pathname !== `/space/${e}`) {
              r == null && t.get(R, e) === e ? (s(`navigation_away`), c(`unavailable`)) : c(`ready`);
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
              ((i = p), rn(g));
              try {
                ((r = Ke(t, { localPageId: e }, (e) => {
                  ((a = !0),
                    new URL(window.location.href).searchParams.get(`initialRoute`) === g &&
                      rn(`/space/${e.metadata.page_id}?window=page`));
                })),
                  r.completion.catch(() => void 0));
              } catch {
                (s(`creation_unavailable`), c(`unavailable`));
                return;
              }
              B(t, g, { replace: !0, state: { ...m.state, focusPageTitle: !0 } });
            }
            c(`ready`);
          },
        );
      })));
  }))();
}
function sn(e) {
  let t = (0, cn.c)(4),
    { children: n, pageId: r } = e,
    i = D(an, r);
  if (i === `ready`) {
    let e;
    return (
      t[0] === n ? (e = t[1]) : ((e = (0, Z.jsx)(Z.Fragment, { children: n })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let a;
  return (
    t[2] === i
      ? (a = t[3])
      : ((a =
          i === `unavailable`
            ? (0, Z.jsx)(H, {
                layout: `page`,
                title: (0, Z.jsx)(k, {
                  id: `pages.newWindow.unavailable`,
                  defaultMessage: `This new Page could not be restored`,
                  description: `Shown when an unsaved Page window cannot safely resume creation after reload or an account change`,
                }),
                description: (0, Z.jsx)(k, {
                  id: `pages.newWindow.unavailableDescription`,
                  defaultMessage: `Check Personal for a Page that may already have been created, or open a new Page from Space`,
                  description: `Recovery advice when a new Page window lost its in-memory creation state; Personal and Space name navigation destinations`,
                }),
              })
            : (0, Z.jsx)(I, {})),
        (t[2] = i),
        (t[3] = a)),
    a
  );
}
var cn, Z;
function ln() {
  return (ln = e(() => {
    ((cn = f()), w(), x(), Le(), Ne(), on(), (Z = l()));
  }))();
}
var un;
function dn() {
  return (dn = e(() => {
    (i(),
      E(),
      (un = o(
        async () =>
          (
            await d(
              async () => {
                let { PresentationQuickStartDialog: e } = await import(`./dialog-14df32bcde97.js`);
                return { PresentationQuickStartDialog: e };
              },
              __vite__mapDeps([23, 1, 2, 3, 4, 5, 6, 7, 24, 25, 26, 27]),
              import.meta.url,
            )
          ).PresentationQuickStartDialog,
      )));
  }))();
}
function fn(e) {
  let n = (0, mn.c)(18),
    { navigationKey: r, options: i, pageId: a } = e,
    o = t(L),
    s = y(),
    c = (0, Q.useRef)(null),
    l;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = () => () => {
        c.current = null;
      }),
      (n[0] = l))
    : (l = n[0]);
  let u;
  (n[1] !== a || n[2] !== o ? ((u = [a, o]), (n[1] = a), (n[2] = o), (n[3] = u)) : (u = n[3]),
    (0, Q.useLayoutEffect)(l, u));
  let d;
  n[4] !== s || n[5] !== r || n[6] !== i || n[7] !== a || n[8] !== o
    ? ((d = (e) => {
        let t = o.get(je);
        if (t.workspaceId !== a) {
          t.workspaceId != null && J(t.workspaceId) && Fe.adoptWorkspaceId(o, t, a);
          return;
        }
        if (
          (We.panelOwnsRoute(`page`, a),
          o.get(oe) ||
            o.get(ct) ||
            t.clientThreadId !== o.value.clientThreadId ||
            (o.get(Et)?.clientThreadId === o.value.clientThreadId && o.get(Et)?.navigationKey === r))
        )
          return;
        if (e) {
          let e = o.get(Te.activeTab$);
          if (e != null && !e.isWorkspaceHome) return;
          Qe(o) && B(o, `/space?tab=all`, { replace: !0 });
          return;
        }
        if (ue(s) != null || o.get(Tt) === r || o.get(le) === r) return;
        let n = c.current;
        if (
          o.get(Te.tabs$).some(pn) &&
          (n == null || n.key === r) &&
          i.blockId === void 0 &&
          !i.focusTitle &&
          i.navigationTarget == null
        ) {
          c.current = { key: r, clientThreadId: o.value.clientThreadId, selectionVersion: o.get(U) };
          return;
        }
        if (n?.key === r && n.clientThreadId === o.value.clientThreadId && n.selectionVersion !== o.get(U))
          return;
        let { opened: l } = Ee(o, `restore`, () => tt(o, a, i));
        l && (c.current = { key: r, clientThreadId: o.value.clientThreadId, selectionVersion: o.get(U) });
      }),
      (n[4] = s),
      (n[5] = r),
      (n[6] = i),
      (n[7] = a),
      (n[8] = o),
      (n[9] = d))
    : (d = n[9]);
  let f = (0, Q.useEffectEvent)(d),
    p;
  n[10] !== f || n[11] !== a || n[12] !== o
    ? ((p = () => {
        let e = !0;
        return o.watch((t) => {
          let { get: n } = t;
          if ((n(ct), n(W) != null && n(we) && n(be) && (!n(oe) || n(je).workspaceId !== a))) {
            let { error: t, isFetching: r, refetch: i } = n(V, a),
              o = t instanceof re && (t.status === 410 || Se(t) === `page_trashed`);
            if (e && ((e = !1), o && !n(F, a))) {
              i();
              return;
            }
            let s = n(F, a) || (!r && o);
            (s && n(Te.activeTab$), f(s));
          }
        });
      }),
      (n[10] = f),
      (n[11] = a),
      (n[12] = o),
      (n[13] = p))
    : (p = n[13]);
  let m;
  return (
    n[14] !== r || n[15] !== a || n[16] !== o
      ? ((m = [r, a, o]), (n[14] = r), (n[15] = a), (n[16] = o), (n[17] = m))
      : (m = n[17]),
    (0, Q.useLayoutEffect)(p, m),
    null
  );
}
function pn(e) {
  return e.isWorkspaceHome;
}
var mn, Q;
function hn() {
  return (hn = e(() => {
    ((mn = f()),
      w(),
      (Q = a()),
      u(),
      z(),
      Ze(),
      N(),
      _e(),
      j(),
      wt(),
      K(),
      q(),
      Re(),
      dt(),
      G(),
      St(),
      qe(),
      Ce(),
      Me(),
      fe(),
      p(),
      Dt(),
      ye());
  }))();
}
function gn() {
  let e = (0, vn.c)(39),
    { pageId: t } = c(),
    n = D(rt, t ?? ``),
    r = D(R, t ?? ``),
    i = T(P),
    a = T(W),
    o = T(Ct),
    s = T(bt),
    l = T(et),
    u = y(),
    d = D(he, u.pathname),
    f = T(ke),
    p;
  if (
    e[0] !== a ||
    e[1] !== l ||
    e[2] !== o ||
    e[3] !== s ||
    e[4] !== u.hash ||
    e[5] !== u.pathname ||
    e[6] !== u.search ||
    e[7] !== u.state ||
    e[8] !== t ||
    e[9] !== d ||
    e[10] !== i
  ) {
    p = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let n = new URLSearchParams(u.search),
        r = n.get(`account_id`)?.trim();
      if (r) {
        if (!s) {
          let t;
          (e[12] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((t = (0, $.jsx)(I, {})), (e[12] = t))
            : (t = e[12]),
            (p = t));
          break bb0;
        }
        if (r === `personal` && l.status !== `loaded`) {
          let t;
          (e[13] === l.status
            ? (t = e[14])
            : ((t =
                l.status === `loading`
                  ? (0, $.jsx)(I, {})
                  : (0, $.jsx)(H, {
                      layout: `page`,
                      title: (0, $.jsx)(k, {
                        id: `codex.pages.invitation.accountUnavailable`,
                        defaultMessage: `We couldn’t verify the account for this invitation`,
                        description: `A Page or Space invitation targets a personal account but the signed-in account metadata is unavailable`,
                      }),
                    })),
              (e[13] = l.status),
              (e[14] = t)),
            (p = t));
          break bb0;
        }
        if (
          !(r === `personal` ? l.status === `loaded` && l.structure === `personal` : r === o) ||
          i == null
        ) {
          p = (0, $.jsx)(De, { accountId: r }, JSON.stringify([o, i, r]));
          break bb0;
        }
        (n.delete(`account_id`),
          (p = (0, $.jsx)(_, {
            replace: !0,
            state: u.state,
            to: { pathname: u.pathname, search: n.toString(), hash: u.hash },
          })));
        break bb0;
      }
      if (d && t != null) {
        let n = `${i}:${a}:${t}`,
          r;
        (e[15] !== t || e[16] !== n
          ? ((r = (0, $.jsx)(en, { pageId: t }, n)), (e[15] = t), (e[16] = n), (e[17] = r))
          : (r = e[17]),
          (p = r));
        break bb0;
      }
      if (n.has(`invitation_id`) && t != null) {
        let r;
        (e[18] === t ? (r = e[19]) : ((r = { kind: `page`, id: t }), (e[18] = t), (e[19] = r)),
          (p = (0, $.jsx)(ve, { target: r, invitationId: n.get(`invitation_id`) })));
        break bb0;
      }
    }
    ((e[0] = a),
      (e[1] = l),
      (e[2] = o),
      (e[3] = s),
      (e[4] = u.hash),
      (e[5] = u.pathname),
      (e[6] = u.search),
      (e[7] = u.state),
      (e[8] = t),
      (e[9] = d),
      (e[10] = i),
      (e[11] = p));
  } else p = e[11];
  if (p !== Symbol.for(`react.early_return_sentinel`)) return p;
  if (mt && t != null) {
    let r = `${i}:${a}:${n}`,
      o;
    e[20] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = (0, $.jsx)(_n, {})), (e[20] = o)) : (o = e[20]);
    let s;
    return (
      e[21] !== t || e[22] !== r
        ? ((s = (0, $.jsx)(sn, { pageId: t, children: o }, r)), (e[21] = t), (e[22] = r), (e[23] = s))
        : (s = e[23]),
      s
    );
  }
  if (f) {
    let t;
    e[24] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, $.jsx)(zt, {})), (e[24] = t)) : (t = e[24]);
    let r = `${i}:${a}:${n}`,
      o;
    e[25] === r ? (o = e[26]) : ((o = (0, $.jsx)(_n, {}, r)), (e[25] = r), (e[26] = o));
    let s;
    e[27] === u ? (s = e[28]) : ((s = Ge(u) === `space` && (0, $.jsx)(Ut, {})), (e[27] = u), (e[28] = s));
    let c;
    return (
      e[29] !== o || e[30] !== s
        ? ((c = (0, $.jsxs)($.Fragment, { children: [t, o, s] })), (e[29] = o), (e[30] = s), (e[31] = c))
        : (c = e[31]),
      c
    );
  }
  let m = `${i}:${a}`,
    h;
  e[32] !== n || e[33] !== u
    ? ((h = (e) =>
        (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(Vt, {}),
            (0, $.jsx)(zt, {}),
            (0, $.jsx)(_n, { explorer: e ?? void 0 }, n),
            Ge(u) === `space` && (0, $.jsx)(Ut, {}),
          ],
        })),
      (e[32] = n),
      (e[33] = u),
      (e[34] = h))
    : (h = e[34]);
  let g;
  return (
    e[35] !== r || e[36] !== m || e[37] !== h
      ? ((g = (0, $.jsx)(Ft, { pageId: r, children: h }, m)),
        (e[35] = r),
        (e[36] = m),
        (e[37] = h),
        (e[38] = g))
      : (g = e[38]),
    g
  );
}
function _n(e) {
  let n = (0, vn.c)(53),
    { explorer: r } = e,
    i = t(L),
    a = T(ke),
    o = T(Pe),
    s = T(Ie),
    l = T(W),
    u = T(P),
    d = y(),
    { pageId: f } = c(),
    p;
  n[0] === f ? (p = n[1]) : ((p = () => J(f ?? ``)), (n[0] = f), (n[1] = p));
  let [h] = (0, yn.useState)(p),
    g = D(Mt, f ?? ``),
    v = D(bn, f ?? ``),
    ee = T(Ot),
    te = T(Ye),
    b = D(R, f ?? ``),
    x =
      d.state?.pagePreview?.accountId === l &&
      d.state.pagePreview.userId === u &&
      d.state.pagePreview.pageId === b
        ? d.state.pagePreview
        : void 0,
    S = `page://${b}${d.hash}`,
    C;
  n[2] === S ? (C = n[3]) : ((C = ne(S)), (n[2] = S), (n[3] = C));
  let w = C,
    re = D(ae, f ?? ``),
    E = T(ze),
    O = D(rt, f ?? ``),
    ie = D(xn, b);
  if (f == null) {
    let e;
    return (
      n[4] === E ? (e = n[5]) : ((e = (0, $.jsx)(_, { replace: !0, to: E })), (n[4] = E), (n[5] = e)),
      e
    );
  }
  let k = h ? v?.response : void 0;
  if (ie != null && k == null && !s && !o) {
    let e = `/spaces/${ie}`,
      t;
    n[6] !== d.hash || n[7] !== d.search || n[8] !== e
      ? ((t = { pathname: e, search: d.search, hash: d.hash }),
        (n[6] = d.hash),
        (n[7] = d.search),
        (n[8] = e),
        (n[9] = t))
      : (t = n[9]);
    let r;
    return (
      n[10] !== d.state || n[11] !== t
        ? ((r = (0, $.jsx)(_, { replace: !0, state: d.state, to: t })),
          (n[10] = d.state),
          (n[11] = t),
          (n[12] = r))
        : (r = n[12]),
      r
    );
  }
  if (J(b) && re == null) {
    if (g === `failed`) {
      let e;
      return (n[13] === f ? (e = n[14]) : ((e = (0, $.jsx)(Nt, { pageId: f })), (n[13] = f), (n[14] = e)), e);
    }
    if (
      g === `loading` ||
      te == null ||
      te.some((e) => e.documentId === b) ||
      ee == null ||
      ee.some((e) => e.localPageId === b && e.accountId === l && e.userId === u)
    ) {
      let e;
      return (
        n[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(I, {})), (n[15] = e))
          : (e = n[15]),
        e
      );
    }
    let e;
    return (
      n[16] === E ? (e = n[17]) : ((e = (0, $.jsx)(_, { replace: !0, to: E })), (n[16] = E), (n[17] = e)),
      e
    );
  }
  f !== b && J(f) && We.skipPromotedPageNavigation(b);
  let A;
  n[18] !== b || n[19] !== d.hash || n[20] !== d.search || n[21] !== d.state || n[22] !== f
    ? ((A =
        f !== b &&
        (0, $.jsx)(_, {
          replace: !0,
          state: {
            ...d.state,
            spaceSidebarRootPageId:
              d.state?.spaceSidebarRootPageId === f ? b : d.state?.spaceSidebarRootPageId,
          },
          to: { pathname: `/space/${b}`, search: d.search, hash: d.hash },
        })),
      (n[18] = b),
      (n[19] = d.hash),
      (n[20] = d.search),
      (n[21] = d.state),
      (n[22] = f),
      (n[23] = A))
    : (A = n[23]);
  let j;
  n[24] !== l || n[25] !== b || n[26] !== d.state
    ? ((j =
        d.state?.pageArtifact?.pageId === b &&
        d.state.pageArtifact.accountId === l &&
        (0, $.jsx)(Wt, { pageId: b })),
      (n[24] = l),
      (n[25] = b),
      (n[26] = d.state),
      (n[27] = j))
    : (j = n[27]);
  let M;
  n[28] !== l ||
  n[29] !== b ||
  n[30] !== k ||
  n[31] !== v?.backingType ||
  n[32] !== O ||
  n[33] !== r ||
  n[34] !== o ||
  n[35] !== s ||
  n[36] !== d ||
  n[37] !== f ||
  n[38] !== x ||
  n[39] !== w ||
  n[40] !== i ||
  n[41] !== a
    ? ((M =
        a && !mt && k == null
          ? (0, $.jsx)(fn, {
              navigationKey: d.key,
              options: {
                blockId:
                  w?.kind === `page` ? (w.blockId ?? (d.state?.scrollPageToTop ? null : void 0)) : void 0,
                focusTitle: f === b && d.state?.focusPageTitle,
                pagePreview: x,
                navigationTarget: m(d.search, d.key),
              },
              pageId: b,
            })
          : (0, $.jsx)(
              Nt,
              {
                explorer: r,
                blockId:
                  w?.kind === `page` ? (w.blockId ?? (d.state?.scrollPageToTop ? null : void 0)) : void 0,
                blockNavigationKey: d.key,
                focusTitle: f === b && d.state?.focusPageTitle,
                pagePreview: x,
                navigationTarget: m(d.search, d.key),
                onClose: void 0,
                onTitleFocused: () => {
                  B(i, d, { replace: !0, state: { ...d.state, focusPageTitle: !1, scrollPageToTop: !1 } });
                },
                pageId: b,
                space: k?.backing_type === `drive` ? k : void 0,
                spaceBackingType: v?.backingType,
              },
              `${l ?? `anonymous`}:${O}`,
            )),
      (n[28] = l),
      (n[29] = b),
      (n[30] = k),
      (n[31] = v?.backingType),
      (n[32] = O),
      (n[33] = r),
      (n[34] = o),
      (n[35] = s),
      (n[36] = d),
      (n[37] = f),
      (n[38] = x),
      (n[39] = w),
      (n[40] = i),
      (n[41] = a),
      (n[42] = M))
    : (M = n[42]);
  let N;
  n[43] !== l || n[44] !== O || n[45] !== d.state || n[46] !== i
    ? ((N =
        d.state?.presentationQuickStart?.accountId === l &&
        d.state.presentationQuickStart.pageId === O &&
        (0, $.jsx)(
          un,
          {
            pageId: O,
            onClose: () => {
              let e = i.get(Be);
              e?.state?.presentationQuickStart?.accountId === l &&
                e.state.presentationQuickStart.pageId === O &&
                B(i, e, { replace: !0, state: { ...e.state, presentationQuickStart: void 0 } });
            },
          },
          `quick-start:${l}:${O}`,
        )),
      (n[43] = l),
      (n[44] = O),
      (n[45] = d.state),
      (n[46] = i),
      (n[47] = N))
    : (N = n[47]);
  let F;
  return (
    n[48] !== A || n[49] !== j || n[50] !== M || n[51] !== N
      ? ((F = (0, $.jsxs)($.Fragment, { children: [A, j, M, N] })),
        (n[48] = A),
        (n[49] = j),
        (n[50] = M),
        (n[51] = N),
        (n[52] = F))
      : (F = n[52]),
    F
  );
}
var vn, yn, $, bn, xn;
function Sn() {
  return (Sn = e(() => {
    ((vn = f()),
      w(),
      C(),
      O(),
      (yn = a()),
      x(),
      u(),
      z(),
      _t(),
      Le(),
      me(),
      Ne(),
      j(),
      qt(),
      nn(),
      it(),
      ln(),
      K(),
      jt(),
      Pt(),
      q(),
      Ve(),
      Re(),
      lt(),
      At(),
      G(),
      n(),
      St(),
      ge(),
      Ae(),
      xe(),
      Bt(),
      kt(),
      Rt(),
      dn(),
      xt(),
      He(),
      Ht(),
      hn(),
      ($ = l()),
      (bn = A(h, (e, { get: t }) => t(at, e)?.space)),
      (xn = A(
        h,
        (e, { get: t }) =>
          t(Ue).data?.items.find((t) => t.backing_type === `drive` && t.root_page_id === e)?.id,
      )));
  }))();
}
Sn();
export { gn as SpacePage };
//# sourceMappingURL=space-page-15df017942a9.js.map
