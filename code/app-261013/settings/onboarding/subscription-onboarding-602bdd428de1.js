import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $Ct as n,
  CJ as r,
  Cot as i,
  Cz as a,
  Ext as o,
  Fz as s,
  Irt as c,
  Ixt as l,
  Pxt as u,
  Pz as d,
  QCt as f,
  TJ as p,
  Tz as m,
  VDt as h,
  Vxt as g,
  Xot as _,
  Yot as v,
  Z4 as ee,
  _Mt as y,
  _wt as b,
  _xt as x,
  awt as S,
  fwt as C,
  gMt as w,
  gwt as T,
  iot as E,
  iwt as D,
  jDt as O,
  mO as k,
  nz as A,
  oSt as j,
  pwt as M,
  t3 as N,
  tz as P,
  vO as F,
  vwt as I,
  vzt as L,
  wot as R,
  wxt as z,
  xMt as B,
  ywt as V,
  yzt as H,
  zxt as U,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Er as W,
  BYt as G,
  E$n as K,
  EEr as q,
  FEr as te,
  FFr as J,
  G4n as Y,
  IYt as X,
  Jlr as ne,
  LHn as re,
  LTn as ie,
  PEr as ae,
  QDr as oe,
  RTn as se,
  TEr as ce,
  XDr as le,
  Z4n as ue,
  ZEr as de,
  _5t as fe,
  _Bn as Z,
  bBn as Q,
  e$n as pe,
  eDr as me,
  fMr as he,
  fur as ge,
  i1n as _e,
  iDr as ve,
  nDr as ye,
  nT as be,
  oFr as xe,
  ocr as Se,
  pur as Ce,
  qlr as we,
  rT as Te,
  sCr as Ee,
  sMr as De,
  t$n as Oe,
  v5t as ke,
  vBn as Ae,
  vEr as je,
  xBn as Me,
  yBn as Ne,
  yCr as Pe,
  yVn as Fe,
  zFr as Ie,
  zHn as Le,
} from "./app-initial-5851df3f6cb1.js";
import { a_ as Re, i_ as ze } from "./app-primary-fe8a450b3b04.js";
import { i as Be, t as Ve } from "./queries-9a7ecb201f4e.js";
import {
  a as He,
  d as Ue,
  g as We,
  h as Ge,
  l as Ke,
  n as qe,
  p as Je,
  r as Ye,
  s as Xe,
  t as Ze,
  v as Qe,
} from "./subscription-onboarding-d163a90cda59.js";
var $e, et;
function tt() {
  return (tt = e(() => {
    (($e = `_overlay_ownp3_2`), (et = { overlay: $e }));
  }))();
}
function nt(e) {
  let i = (0, rt.c)(82),
    {
      open: a,
      onOpenChange: o,
      onCloseComplete: c,
      onPresented: l,
      titleId: u,
      descriptionId: d,
      closeButtonClassName: f,
      presentation: p,
      children: g,
    } = e,
    _ = h(),
    v = m(),
    ee = s(),
    y = A(`(min-width: 640px)`),
    x = A(`(prefers-reduced-motion: reduce)`),
    S = n(),
    C = M(0),
    T = (0, it.useRef)(null),
    E = (0, it.useRef)(null),
    O = (0, it.useRef)(!1),
    j = (0, it.useRef)(!1),
    N;
  i[0] === x ? (N = i[1]) : ((N = x ? { duration: 0 } : ot), (i[0] = x), (i[1] = N));
  let P = N,
    F,
    L;
  (i[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = () => () => {
        E.current?.stop();
      }),
      (L = []),
      (i[2] = F),
      (i[3] = L))
    : ((F = i[2]), (L = i[3])),
    (0, it.useEffect)(F, L));
  let R;
  i[4] !== y || i[5] !== C || i[6] !== o || i[7] !== P
    ? ((R = async () => {
        O.current ||
          ((O.current = !0),
          !y && T.current != null && ((E.current = D(C, T.current.offsetHeight, P)), await E.current),
          o(!1));
      }),
      (i[4] = y),
      (i[5] = C),
      (i[6] = o),
      (i[7] = P),
      (i[8] = R))
    : (R = i[8]);
  let z = R,
    B;
  i[9] === v
    ? (B = i[10])
    : ((B = (e) => {
        let { x: t, y: n } = e;
        return { x: t / v, y: n / v };
      }),
      (i[9] = v),
      (i[10] = B));
  let V;
  i[11] === z
    ? (V = i[12])
    : ((V = (e) => {
        e || z();
      }),
      (i[11] = z),
      (i[12] = V));
  let H = p === `no_payment_trial` ? `confirmation` : `default`,
    U = p === `no_payment_trial` ? void 0 : et.overlay,
    W = y
      ? `left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl`
      : `bottom-2 left-1/2 -translate-x-1/2 rounded-[36px_36px_55px_55px]`,
    G;
  i[13] === W
    ? (G = i[14])
    : ((G = w(
        `max-h-[calc(100dvh-16px)] w-[calc(100vw-16px)] max-w-[480px] overflow-hidden shadow-elevation-03`,
        W,
      )),
      (i[13] = W),
      (i[14] = G));
  let K;
  i[15] !== l || i[16] !== x || i[17] !== u
    ? ((K = (e) => {
        ((O.current = !1),
          (j.current = !1),
          e.preventDefault(),
          document.getElementById(u)?.focus({ preventScroll: !0 }),
          x && ((j.current = !0), l()));
      }),
      (i[15] = l),
      (i[16] = x),
      (i[17] = u),
      (i[18] = K))
    : (K = i[18]);
  let q;
  i[19] === c ? (q = i[20]) : ((q = () => c()), (i[19] = c), (i[20] = q));
  let te;
  i[21] !== d || i[22] !== K || i[23] !== q || i[24] !== u
    ? ((te = {
        asChild: !0,
        "aria-labelledby": u,
        "aria-describedby": d,
        onOpenAutoFocus: K,
        onCloseAutoFocus: q,
      }),
      (i[21] = d),
      (i[22] = K),
      (i[23] = q),
      (i[24] = u),
      (i[25] = te))
    : (te = i[25]);
  let J;
  i[26] !== y || i[27] !== x
    ? ((J = !x && (y ? { opacity: 0 } : { y: `100%` })), (i[26] = y), (i[27] = x), (i[28] = J))
    : (J = i[28]);
  let Y;
  i[29] === y ? (Y = i[30]) : ((Y = y ? { opacity: 1 } : { y: 0 }), (i[29] = y), (i[30] = Y));
  let X;
  i[31] !== l || i[32] !== a
    ? ((X = () => {
        a && !O.current && !j.current && ((j.current = !0), l());
      }),
      (i[31] = l),
      (i[32] = a),
      (i[33] = X))
    : (X = i[33]);
  let ne;
  i[34] !== y || i[35] !== C
    ? ((ne = y ? void 0 : { y: C }), (i[34] = y), (i[35] = C), (i[36] = ne))
    : (ne = i[36]);
  let re = !y && `y`,
    ie;
  i[37] === Symbol.for(`react.memo_cache_sentinel`) ? ((ie = { top: 0 }), (i[37] = ie)) : (ie = i[37]);
  let ae;
  i[38] !== y || i[39] !== S
    ? ((ae = (e) => {
        !y &&
          j.current &&
          e.isPrimary &&
          !(e.target instanceof Element && e.target.closest(`button,a,input,select,textarea`)) &&
          S.start(e);
      }),
      (i[38] = y),
      (i[39] = S),
      (i[40] = ae))
    : (ae = i[40]);
  let oe;
  i[41] !== z || i[42] !== C || i[43] !== P
    ? ((oe = (e, t) => {
        C.get() > (T.current?.offsetHeight ?? 0) / 2 || t.velocity.y > 500 ? z() : (E.current = D(C, 0, P));
      }),
      (i[41] = z),
      (i[42] = C),
      (i[43] = P),
      (i[44] = oe))
    : (oe = i[44]);
  let se = !!ee,
    ce;
  i[45] === _
    ? (ce = i[46])
    : ((ce = _.formatMessage({
        id: `codex.dialog.closeButton`,
        defaultMessage: `Close dialog`,
        description: `Accessible label for the button that closes a dialog`,
      })),
      (i[45] = _),
      (i[46] = ce));
  let le = !(p === `no_payment_trial` && y) && (f ?? `max-sm:bg-token-bg-tertiary`),
    ue;
  i[47] === le
    ? (ue = i[48])
    : ((ue = w(
        `absolute end-1.5 top-1.5 z-10 size-9 justify-center rounded-full text-default hover:bg-primary-ghost-hover max-sm:end-5 max-sm:top-5 max-sm:size-7`,
        le,
      )),
      (i[47] = le),
      (i[48] = ue));
  let de;
  i[49] === z
    ? (de = i[50])
    : ((de = (e) => {
        (e.stopPropagation(), z());
      }),
      (i[49] = z),
      (i[50] = de));
  let fe;
  i[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, at.jsx)(r, {})), (i[51] = fe))
    : (fe = i[51]);
  let Z;
  i[52] !== ce || i[53] !== ue || i[54] !== de
    ? ((Z = (0, at.jsx)(t, {
        type: `button`,
        unstyled: !0,
        "aria-label": ce,
        className: ue,
        onClick: de,
        children: fe,
      })),
      (i[52] = ce),
      (i[53] = ue),
      (i[54] = de),
      (i[55] = Z))
    : (Z = i[55]);
  let Q;
  i[56] !== g || i[57] !== se || i[58] !== Z
    ? ((Q = (0, at.jsxs)(Ue, {
        isDarkMode: se,
        className: `max-h-[calc(100dvh-16px)] overflow-y-auto`,
        children: [Z, g],
      })),
      (i[56] = g),
      (i[57] = se),
      (i[58] = Z),
      (i[59] = Q))
    : (Q = i[59]);
  let pe;
  i[60] !== S ||
  i[61] !== J ||
  i[62] !== Y ||
  i[63] !== X ||
  i[64] !== ne ||
  i[65] !== re ||
  i[66] !== ae ||
  i[67] !== oe ||
  i[68] !== Q ||
  i[69] !== P
    ? ((pe = (0, at.jsx)(b.div, {
        ref: T,
        initial: J,
        animate: Y,
        transition: P,
        onAnimationComplete: X,
        style: ne,
        drag: re,
        dragControls: S,
        dragConstraints: ie,
        dragElastic: 0,
        dragListener: !1,
        dragMomentum: !1,
        onPointerDown: ae,
        onDragEnd: oe,
        children: Q,
      })),
      (i[60] = S),
      (i[61] = J),
      (i[62] = Y),
      (i[63] = X),
      (i[64] = ne),
      (i[65] = re),
      (i[66] = ae),
      (i[67] = oe),
      (i[68] = Q),
      (i[69] = P),
      (i[70] = pe))
    : (pe = i[70]);
  let me;
  i[71] !== a || i[72] !== G || i[73] !== te || i[74] !== pe || i[75] !== V || i[76] !== H || i[77] !== U
    ? ((me = (0, at.jsx)(k, {
        open: a,
        onOpenChange: V,
        unstyledContent: !0,
        showDialogClose: !1,
        contentPosition: `anchored`,
        variant: H,
        overlayClassName: U,
        contentClassName: G,
        contentProps: te,
        children: pe,
      })),
      (i[71] = a),
      (i[72] = G),
      (i[73] = te),
      (i[74] = pe),
      (i[75] = V),
      (i[76] = H),
      (i[77] = U),
      (i[78] = me))
    : (me = i[78]);
  let he;
  return (
    i[79] !== me || i[80] !== B
      ? ((he = (0, at.jsx)(I, { transformPagePoint: B, children: me })),
        (i[79] = me),
        (i[80] = B),
        (i[81] = he))
      : (he = i[81]),
    he
  );
}
var rt, it, at, ot;
function st() {
  return (st = e(() => {
    ((rt = L()),
      Ze(),
      y(),
      S(),
      T(),
      V(),
      f(),
      C(),
      (it = H()),
      O(),
      a(),
      N(),
      F(),
      p(),
      P(),
      d(),
      tt(),
      (at = B()),
      (ot = { type: `spring`, stiffness: 350, damping: 28, mass: 0.65 }));
  }))();
}
function ct(e) {
  let t = (0, ft.c)(12),
    { canStart: n, onStart: r } = e,
    a = l(i),
    s = z(),
    c = o(),
    u = (0, pt.useRef)(!1),
    d;
  t[0] !== n || t[1] !== s || t[2] !== c || t[3] !== r
    ? ((d = () => {
        n &&
          !u.current &&
          ((u.current = !0),
          r(() => {
            c({ pathname: s.pathname, search: ``, hash: `` }, { replace: !0, state: s.state });
          }).catch(lt));
      }),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c),
      (t[3] = r),
      (t[4] = d))
    : (d = t[4]);
  let f = (0, pt.useEffectEvent)(d),
    p,
    m;
  (t[5] === a
    ? ((p = t[6]), (m = t[7]))
    : ((p = () => {
        ce(a, `chat`);
      }),
      (m = [a]),
      (t[5] = a),
      (t[6] = p),
      (t[7] = m)),
    (0, pt.useEffect)(p, m));
  let h;
  t[8] === f
    ? (h = t[9])
    : ((h = () => {
        f();
      }),
      (t[8] = f),
      (t[9] = h));
  let g;
  return (t[10] === n ? (g = t[11]) : ((g = [n]), (t[10] = n), (t[11] = g)), (0, pt.useEffect)(h, g), null);
}
function lt() {}
function ut(e) {
  let t = (0, ft.c)(49),
    {
      account: n,
      automatic: r,
      alreadyPresented: a,
      onCreateImage: s,
      canCreateImage: u,
      onStartVoice: d,
      onOpenFileDialog: f,
      onStartSite: p,
      onPrefill: m,
      onPresented: v,
      onClosed: y,
    } = e,
    b = l(i),
    x = h(),
    S = o(),
    C = ye(`2272277762`),
    w = A(`(min-width: 640px)`),
    T;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T =
        !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) &&
        !(/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1)),
      (t[0] = T))
    : (T = t[0]);
  let D = T,
    O = g(q),
    k;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = { hostId: E }), (t[1] = k)) : (k = t[1]);
  let j = ne(k),
    M = (0, pt.useRef)(!1),
    N;
  t[2] !== n.accountUserId || t[3] !== n.id
    ? ((N = [`student-onboarding-handoff`, n.id, n.accountUserId]),
      (t[2] = n.accountUserId),
      (t[3] = n.id),
      (t[4] = N))
    : (N = t[4]);
  let P;
  t[5] !== n || t[6] !== r
    ? ((P = () => r || M.current || Ye(n)), (t[5] = n), (t[6] = r), (t[7] = P))
    : (P = t[7]);
  let F;
  t[8] !== N || t[9] !== P
    ? ((F = {
        queryKey: N,
        queryFn: P,
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (t[8] = N),
      (t[9] = P),
      (t[10] = F))
    : (F = t[10]);
  let { data: I } = _(F),
    [L, R] = (0, pt.useState)(!0),
    z = (0, pt.useRef)(null),
    B;
  t[11] === y
    ? (B = t[12])
    : ((B = () => {
        y();
      }),
      (t[11] = y),
      (t[12] = B));
  let V = (0, pt.useEffectEvent)(B),
    H;
  t[13] !== V || t[14] !== I
    ? ((H = () => {
        I === !1 && V();
      }),
      (t[13] = V),
      (t[14] = I),
      (t[15] = H))
    : (H = t[15]);
  let U;
  (t[16] === I ? (U = t[17]) : ((U = [I]), (t[16] = I), (t[17] = U)), (0, pt.useEffect)(H, U));
  let W;
  t[18] !== j ||
  t[19] !== x ||
  t[20] !== S ||
  t[21] !== y ||
  t[22] !== s ||
  t[23] !== m ||
  t[24] !== p ||
  t[25] !== d ||
  t[26] !== b
    ? ((W = async () => {
        let e = z.current;
        z.current = null;
        let t = y(e === `work` || e === `voice`);
        switch (e) {
          case `plugins`:
            j && S(`/plugins`);
            return;
          case `work`:
            if (!(await t)) return;
            b.get(q)
              ? ce(b, `work`)
              : D &&
                m(
                  x.formatMessage({
                    id: `chatgpt.students.back_to_school_2026.onboarding.work.fallback_prompt`,
                    defaultMessage: `Help me plan a presentation about ...`,
                    description: `Prefilled normal-chat prompt after a college student selects Try ChatGPT Work from the 2026 student Plus onboarding carousel when ChatGPT Work is temporarily unavailable. It gives the student an actionable school-project starting point without implying access to the Work product.`,
                  }),
                  `chat`,
                );
            return;
          case `sites`:
            p?.() !== !0 &&
              D &&
              m(
                x.formatMessage({
                  id: `chatgpt.students.back_to_school_2026.onboarding.sites.fallback_prompt`,
                  defaultMessage: `Help me plan a website about ...`,
                  description: `Prefilled normal-chat prompt after a college student selects Build a site from the 2026 student Plus onboarding carousel when the ChatGPT Sites website-building tool is unavailable. It asks ChatGPT to help plan a website without selecting or implying access to the Sites tool.`,
                }),
                `chat`,
              );
            return;
          case `images`:
            s();
            return;
          case `voice`:
            (await t) && d?.();
            return;
          case `files`:
          case null:
            return;
        }
      }),
      (t[18] = j),
      (t[19] = x),
      (t[20] = S),
      (t[21] = y),
      (t[22] = s),
      (t[23] = m),
      (t[24] = p),
      (t[25] = d),
      (t[26] = b),
      (t[27] = W))
    : (W = t[27]);
  let G = W,
    K;
  t[28] !== n || t[29] !== v || t[30] !== b
    ? ((K = (e) => {
        (!M.current && e.action === `step_viewed` && ((M.current = !0), He(n), v()),
          oe(b, Ne, {
            action: ht[e.action],
            step: gt[e.pageId],
            entryPoint: Ae.CHATGPT_SUBSCRIPTION_ONBOARDING_ENTRY_POINT_STUDENTS_2026,
            stepPosition: c(e.pageIndex + 1),
            presentedSteps: e.presentedPageIds.map(dt),
          }));
      }),
      (t[28] = n),
      (t[29] = v),
      (t[30] = b),
      (t[31] = K))
    : (K = t[31]);
  let te = K,
    J;
  t[32] === x.locale ? (J = t[33]) : ((J = ee(x.locale)), (t[32] = x.locale), (t[33] = J));
  let Y;
  t[34] !== G || t[35] !== te || t[36] !== w || t[37] !== L || t[38] !== J
    ? ((Y = {
        Frame: nt,
        isScreenAtLeastSm: w,
        direction: J,
        open: L,
        onOpenChange: R,
        onCloseComplete: G,
        onInteraction: te,
      }),
      (t[34] = G),
      (t[35] = te),
      (t[36] = w),
      (t[37] = L),
      (t[38] = J),
      (t[39] = Y))
    : (Y = t[39]);
  let X = Y;
  if (I !== !0 && !a) return null;
  let re;
  return (
    t[40] !== u ||
    t[41] !== j ||
    t[42] !== O ||
    t[43] !== X ||
    t[44] !== f ||
    t[45] !== p ||
    t[46] !== d ||
    t[47] !== C
      ? ((re = C
          ? (0, mt.jsx)(Ke, {
              ...X,
              showPluginsAction: j,
              showWorkAction: D || O,
              showSitesAction: D || p != null,
              showVoiceAction: d != null,
              onAction: (e) => {
                z.current = e;
              },
            })
          : (0, mt.jsx)(Xe, {
              ...X,
              showWorkAction: O,
              showFilesAction: f != null,
              showImagesAction: u,
              showVoiceAction: d != null,
              onAction: (e) => {
                e === `files` ? f?.() : (z.current = e);
              },
            })),
        (t[40] = u),
        (t[41] = j),
        (t[42] = O),
        (t[43] = X),
        (t[44] = f),
        (t[45] = p),
        (t[46] = d),
        (t[47] = C),
        (t[48] = re))
      : (re = t[48]),
    re
  );
}
function dt(e) {
  return gt[e];
}
var ft, pt, mt, ht, gt;
function _t() {
  return (_t = e(() => {
    ((ft = L()),
      Ze(),
      Se(),
      Fe(),
      v(),
      u(),
      (pt = H()),
      O(),
      x(),
      je(),
      st(),
      we(),
      P(),
      le(),
      R(),
      xe(),
      me(),
      (mt = B()),
      (ht = {
        step_viewed: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_STEP_VIEWED,
        continue_tapped: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_CONTINUE_TAPPED,
        try_feature_tapped: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_TRY_FEATURE_TAPPED,
        close_tapped: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_CLOSE_TAPPED,
        completed: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_COMPLETED,
      }),
      (gt = {
        welcome: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_WELCOME,
        files: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_FILES,
        images: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_IMAGE_GENERATION,
        plugins: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_PLUGINS,
        work: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_WORK,
        sites: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_SITES,
        voice: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_VOICE,
      }));
  }))();
}
function vt(e) {
  let t = (0, St.c)(60),
    n = l(i),
    r = l(Ee),
    a = g(wt),
    s;
  t[0] !== a || t[1] !== e.onStartVoice
    ? ((s = e.onStartVoice), (t[0] = a), (t[1] = e.onStartVoice), (t[2] = s))
    : (s = t[2]);
  let c = Ce(),
    u = c.accountId != null,
    d;
  t[3] === u ? (d = t[4]) : ((d = { enabled: u }), (t[3] = u), (t[4] = d));
  let { data: f, isPending: p, isError: m } = U(Ve, c.accountId ?? ``, d),
    h = z(),
    _ = o(),
    [v, ee] = (0, Ct.useState)(null),
    y;
  t[5] !== r.value.conversationId ||
  t[6] !== r.value.kind ||
  t[7] !== h.key ||
  t[8] !== h.pathname ||
  t[9] !== h.state ||
  t[10] !== _ ||
  t[11] !== n
    ? ((y = async (e) => {
        let t = e !== void 0 && e;
        ee(null);
        let i = r.value.kind === `chatgpt` ? r.value.conversationId : null,
          a = _(
            { pathname: h.pathname, search: ``, hash: `` },
            {
              replace: !0,
              state: {
                ...h.state,
                focusComposerNonce: Date.now(),
                initialChatGptConversationId: i != null && Oe(i) ? i : h.state?.initialChatGptConversationId,
              },
            },
          );
        if (!t) return !0;
        (await a,
          await n.when((e) => {
            let t = e.get(J);
            return t != null && t.key !== h.key;
          }));
        let o = n.get(J);
        return o?.pathname === h.pathname && o.search === `` && o.hash === ``;
      }),
      (t[5] = r.value.conversationId),
      (t[6] = r.value.kind),
      (t[7] = h.key),
      (t[8] = h.pathname),
      (t[9] = h.state),
      (t[10] = _),
      (t[11] = n),
      (t[12] = y))
    : (y = t[12]);
  let b = y,
    x = `${c.userId}:${c.accountId}:student`,
    S = ue(),
    C = f?.account,
    w = h.hash === `#plus_onboarding` && h.search === `?plus_onboarding_origin=homepage`,
    T = h.search === `` || h.search === `?refresh_account=true`,
    E = h.search === `?refresh_account=true&campaign=students_2026` || h.search === `?campaign=students_2026`,
    D =
      (h.hash === `#plus_onboarding` ? T || w || E : h.hash === `#pro_onboarding` && T) &&
      (c.isLoading || (c.accountId != null && c.userId != null && p)),
    O = C?.account_id ?? ``,
    k = c.userId ?? ``,
    A =
      C?.structure === `personal` && C.plan_type === `plus` && f?.entitlement.has_active_subscription === !0,
    j = f?.entitlement.discount,
    M,
    N;
  t[13] !== h.hash ||
  t[14] !== h.search ||
  t[15] !== T ||
  t[16] !== O ||
  t[17] !== k ||
  t[18] !== A ||
  t[19] !== j
    ? ((M = { id: O, accountUserId: k, isPaidPlus: A, discount: j }),
      (N =
        T &&
        (h.hash === `` || (h.hash === `#plus_onboarding` && h.search === `?refresh_account=true`)) &&
        qe(M)),
      (t[13] = h.hash),
      (t[14] = h.search),
      (t[15] = T),
      (t[16] = O),
      (t[17] = k),
      (t[18] = A),
      (t[19] = j),
      (t[20] = M),
      (t[21] = N))
    : ((M = t[20]), (N = t[21]));
  let P = ye(N ? `1139852989` : !1),
    F = M.isPaidPlus && (v === x || P || (E && h.hash === `#plus_onboarding`)),
    I = h.hash === `#plus_onboarding` ? `plus` : `pro`,
    L = F ? x : `${c.userId}:${c.accountId}:${I}`;
  if (!(
    !c.isLoading &&
    !p &&
    !m &&
    f?.can_access_with_session !== !1 &&
    c.userId != null &&
    C?.account_id === c.accountId &&
    C?.structure === `personal` &&
    (v === L || (e.canPresent && !S)) &&
    (F ||
      ((T || w) &&
        (h.hash === `#plus_onboarding` || h.hash === `#pro_onboarding`) &&
        (I === `plus` ? C.plan_type === `plus` : Le(C.plan_type))))
  )) {
    if (D) {
      let n;
      t[22] === e
        ? (n = t[23])
        : ((n = (t) =>
            e.renderCandidates([
              ...t,
              { id: `subscription-onboarding`, isEligible: !1, isLoading: !0, content: null },
            ])),
          (t[22] = e),
          (t[23] = n));
      let r = n,
        i;
      t[24] === L
        ? (i = t[25])
        : ((i = (0, $.jsx)(xt, { id: L, status: `loading` })), (t[24] = L), (t[25] = i));
      let a;
      t[26] !== e.homeCandidates || t[27] !== r
        ? ((a = e.homeCandidates == null ? r([]) : e.homeCandidates(r)),
          (t[26] = e.homeCandidates),
          (t[27] = r),
          (t[28] = a))
        : (a = t[28]);
      let o;
      return (
        t[29] !== a || t[30] !== i
          ? ((o = (0, $.jsxs)($.Fragment, { children: [i, a] })), (t[29] = a), (t[30] = i), (t[31] = o))
          : (o = t[31]),
        o
      );
    }
    let n;
    return (
      t[32] !== e.homeCandidates || t[33] !== e.renderCandidates
        ? ((n = e.homeCandidates == null ? e.renderCandidates([]) : e.homeCandidates(e.renderCandidates)),
          (t[32] = e.homeCandidates),
          (t[33] = e.renderCandidates),
          (t[34] = n))
        : (n = t[34]),
      n
    );
  }
  if (F) {
    let n;
    t[35] !== C.account_id ||
    t[36] !== c.userId ||
    t[37] !== P ||
    t[38] !== b ||
    t[39] !== s ||
    t[40] !== L ||
    t[41] !== v ||
    t[42] !== e ||
    t[43] !== M
      ? ((n = (t) =>
          e.renderCandidates([
            ...t,
            {
              id: `subscription-onboarding`,
              isEligible: !0,
              isLoading: !1,
              trackVisibility: !0,
              content: (0, $.jsx)(xt, {
                id: L,
                children: (0, $.jsx)(
                  ut,
                  {
                    ...e,
                    onStartVoice: s,
                    account: M,
                    automatic: P,
                    alreadyPresented: v === L,
                    onPresented: () => ee(L),
                    onClosed: b,
                  },
                  `${c.userId}:${C.account_id}`,
                ),
              }),
            },
          ])),
        (t[35] = C.account_id),
        (t[36] = c.userId),
        (t[37] = P),
        (t[38] = b),
        (t[39] = s),
        (t[40] = L),
        (t[41] = v),
        (t[42] = e),
        (t[43] = M),
        (t[44] = n))
      : (n = t[44]);
    let r = n,
      i;
    return (
      t[45] !== e.homeCandidates || t[46] !== r
        ? ((i = e.homeCandidates == null ? r([]) : e.homeCandidates(r)),
          (t[45] = e.homeCandidates),
          (t[46] = r),
          (t[47] = i))
        : (i = t[47]),
      i
    );
  }
  let R = `${c.userId}:${C.account_id}:${I}`,
    B;
  t[48] === L ? (B = t[49]) : ((B = () => ee(L)), (t[48] = L), (t[49] = B));
  let V = f?.entitlement.has_active_subscription === !0,
    H;
  return (
    t[50] !== w ||
    t[51] !== b ||
    t[52] !== s ||
    t[53] !== I ||
    t[54] !== L ||
    t[55] !== e ||
    t[56] !== V ||
    t[57] !== R ||
    t[58] !== B
      ? ((H = (0, $.jsx)(
          yt,
          {
            ...e,
            onStartVoice: s,
            plan: I,
            presentationOwner: L,
            onPresented: B,
            onClosed: b,
            isHomepageEntry: w,
            hasPaidSubscription: V,
          },
          R,
        )),
        (t[50] = w),
        (t[51] = b),
        (t[52] = s),
        (t[53] = I),
        (t[54] = L),
        (t[55] = e),
        (t[56] = V),
        (t[57] = R),
        (t[58] = B),
        (t[59] = H))
      : (H = t[59]),
    H
  );
}
function yt(e) {
  let t = (0, St.c)(66),
    {
      renderCandidates: n,
      homeCandidates: r,
      onSelectIntelligence: a,
      onCreateImage: s,
      onStartVoice: u,
      onStartConversation: d,
      canStartConversation: f,
      hasPaidSubscription: p,
      plan: m,
      presentationOwner: _,
      onPresented: v,
      onClosed: y,
      isHomepageEntry: b,
    } = e,
    x = l(i),
    { client: S, isLoading: C } = ve(),
    w = h(),
    T = o(),
    E = G(),
    D = g(q),
    O;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = { name: `codex.browser` }), (t[0] = O))
    : (O = t[0]);
  let k = U(ae, O),
    j = A(`(min-width: 640px)`),
    [M, N] = (0, Ct.useState)(!0),
    P = Te(),
    F = m === `pro` && j && k.isCapable,
    I = (0, Ct.useRef)(null),
    L,
    R;
  if (
    t[1] !== f ||
    t[2] !== D ||
    t[3] !== p ||
    t[4] !== r ||
    t[5] !== w ||
    t[6] !== b ||
    t[7] !== P ||
    t[8] !== j ||
    t[9] !== T ||
    t[10] !== y ||
    t[11] !== s ||
    t[12] !== v ||
    t[13] !== a ||
    t[14] !== d ||
    t[15] !== u ||
    t[16] !== M ||
    t[17] !== m ||
    t[18] !== _ ||
    t[19] !== n ||
    t[20] !== x ||
    t[21] !== F ||
    t[22] !== E ||
    t[23] !== S ||
    t[24] !== C
  ) {
    let e,
      i = !1,
      o = m === `plus` && !b && C;
    if (m === `pro`) {
      let n;
      (t[27] === S
        ? (n = t[28])
        : ((n = W(S, `1895559448`).get(`onboarding_variant`, `off`)), (t[27] = S), (t[28] = n)),
        (e = n === `carousel_v1`));
    } else if (b) e = !0;
    else if (C) e = !1;
    else if (p && de(S, `489096038`)) ((e = !0), (i = !0));
    else if (W(S, `823322201`).get(`enabled`, !1)) {
      let n;
      (t[29] === S
        ? (n = t[30])
        : ((n = W(S, `3081805378`).get(`carousel_onboarding_variant`, `off`)), (t[29] = S), (t[30] = n)),
        (e = n === `carousel_v1`));
    } else e = !1;
    let l;
    t[31] !== b || t[32] !== v || t[33] !== m || t[34] !== x
      ? ((l = (e) => {
          (e.action === `step_viewed` && v(),
            oe(x, Ne, {
              action: Tt[e.action],
              step: Et[e.pageId],
              entryPoint: b
                ? Ae.CHATGPT_SUBSCRIPTION_ONBOARDING_ENTRY_POINT_ANNOUNCEMENT_UNIVERSAL_LINK
                : Ae.CHATGPT_SUBSCRIPTION_ONBOARDING_ENTRY_POINT_ACCOUNT_PLAN_TRANSITION,
              stepPosition: c(e.pageIndex + 1),
              presentedSteps: e.presentedPageIds.map(bt),
              ...(m === `pro` ? { variant: Me.CHATGPT_SUBSCRIPTION_ONBOARDING_VARIANT_PRO } : {}),
            }));
        }),
        (t[31] = b),
        (t[32] = v),
        (t[33] = m),
        (t[34] = x),
        (t[35] = l))
      : (l = t[35]);
    let h = l,
      g;
    t[36] === P
      ? (g = t[37])
      : ((g = (e) => {
          let { action: t, pageId: n } = e;
          t === `try_feature` && P() && (I.current = n);
        }),
        (t[36] = P),
        (t[37] = g));
    let O = g,
      k;
    t[38] !== P ||
    t[39] !== T ||
    t[40] !== y ||
    t[41] !== s ||
    t[42] !== a ||
    t[43] !== u ||
    t[44] !== m ||
    t[45] !== x ||
    t[46] !== F ||
    t[47] !== E
      ? ((k = async () => {
          if (!P()) return;
          let e = I.current;
          I.current = null;
          let t = y(e === `work` || e === `codex` || e === `voice`);
          switch (e) {
            case `intelligence`:
              a(m === `pro` ? `pro` : `standard`);
              return;
            case `images`:
              s();
              return;
            case `personalization`:
              T(`/plugins`);
              return;
            case `work`:
              (await t) && x.get(q) && ce(x, `work`);
              return;
            case `voice`:
              (await t) && u?.();
              return;
            case `codex`:
              (await t) &&
                F &&
                ke(x, {
                  codexLocalAccessStatus: x.get(De).status,
                  currentMode: x.get(se),
                  navigate: T,
                  nextMode: `codex`,
                  openHome: !0,
                  startNewConversation: E,
                });
              return;
            case null:
              return;
          }
        }),
        (t[38] = P),
        (t[39] = T),
        (t[40] = y),
        (t[41] = s),
        (t[42] = a),
        (t[43] = u),
        (t[44] = m),
        (t[45] = x),
        (t[46] = F),
        (t[47] = E),
        (t[48] = k))
      : (k = t[48]);
    let A = k,
      z;
    t[49] === w.locale ? (z = t[50]) : ((z = ee(w.locale)), (t[49] = w.locale), (t[50] = z));
    let B;
    t[51] !== j || t[52] !== O || t[53] !== A || t[54] !== h || t[55] !== M || t[56] !== z
      ? ((B = {
          Frame: nt,
          isScreenAtLeastSm: j,
          direction: z,
          open: M,
          onOpenChange: N,
          onCloseComplete: A,
          onAction: O,
          onInteraction: h,
        }),
        (t[51] = j),
        (t[52] = O),
        (t[53] = A),
        (t[54] = h),
        (t[55] = M),
        (t[56] = z),
        (t[57] = B))
      : (B = t[57]);
    let V = B,
      H;
    if (i) H = (0, $.jsx)(ct, { canStart: f, onStart: d });
    else if (m === `plus`) H = (0, $.jsx)(Qe, { ...V });
    else {
      let e;
      (t[58] === w
        ? (e = t[59])
        : ((e = w.formatMessage({
            id: `chatgpt.pro_onboarding.carousel.page.codex.open_button.label`,
            defaultMessage: `Try Codex`,
            description: `Button in the Pro onboarding tour that closes the tour and opens Codex in the current app.`,
          })),
          (t[58] = w),
          (t[59] = e)),
        (H = (0, $.jsx)(Je, {
          ...V,
          codexActionLabel: e,
          featurePageIds: F ? Ge : We,
          canStartVoice: u != null,
          canStartWork: D,
        })));
    }
    i || (H = (0, $.jsx)(xt, { id: _, children: H }));
    let U = (t) =>
      n([
        ...t,
        {
          id: `subscription-onboarding`,
          isEligible: e,
          isLoading: o,
          content: e ? H : null,
          trackVisibility: !0,
        },
      ]);
    (t[60] !== _ || t[61] !== o
      ? ((L = o && (0, $.jsx)(xt, { id: _, status: `loading` })), (t[60] = _), (t[61] = o), (t[62] = L))
      : (L = t[62]),
      (R = r == null ? U([]) : r(U)),
      (t[1] = f),
      (t[2] = D),
      (t[3] = p),
      (t[4] = r),
      (t[5] = w),
      (t[6] = b),
      (t[7] = P),
      (t[8] = j),
      (t[9] = T),
      (t[10] = y),
      (t[11] = s),
      (t[12] = v),
      (t[13] = a),
      (t[14] = d),
      (t[15] = u),
      (t[16] = M),
      (t[17] = m),
      (t[18] = _),
      (t[19] = n),
      (t[20] = x),
      (t[21] = F),
      (t[22] = E),
      (t[23] = S),
      (t[24] = C),
      (t[25] = L),
      (t[26] = R));
  } else ((L = t[25]), (R = t[26]));
  let z;
  return (
    t[63] !== L || t[64] !== R
      ? ((z = (0, $.jsxs)($.Fragment, { children: [L, R] })), (t[63] = L), (t[64] = R), (t[65] = z))
      : (z = t[65]),
    z
  );
}
function bt(e) {
  return Et[e];
}
function xt(e) {
  let t = (0, St.c)(6),
    { id: n, status: r, children: i } = e,
    a = r === void 0 ? `eligible` : r,
    o = `subscription-onboarding:${n}`,
    s;
  t[0] === i ? (s = t[1]) : ((s = () => i), (t[0] = i), (t[1] = s));
  let c;
  return (
    t[2] !== a || t[3] !== o || t[4] !== s
      ? ((c = (0, $.jsx)(ze, {
          source: `subscription-onboarding`,
          candidate: { id: o, status: a, render: s },
        })),
        (t[2] = a),
        (t[3] = o),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
var St, Ct, $, wt, Tt, Et;
function Dt() {
  return (Dt = e(() => {
    ((St = L()),
      re(),
      Ze(),
      Se(),
      Fe(),
      u(),
      (Ct = H()),
      O(),
      x(),
      Re(),
      te(),
      he(),
      ge(),
      pe(),
      _e(),
      K(),
      je(),
      Y(),
      Be(),
      st(),
      P(),
      X(),
      Ie(),
      le(),
      R(),
      Pe(),
      fe(),
      ie(),
      me(),
      be(),
      _t(),
      ($ = B()),
      (wt = j(i, ({ get: e }) => !1)),
      (Tt = {
        step_viewed: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_STEP_VIEWED,
        continue_tapped: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_CONTINUE_TAPPED,
        try_feature_tapped: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_TRY_FEATURE_TAPPED,
        close_tapped: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_CLOSE_TAPPED,
        completed: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_COMPLETED,
      }),
      (Et = {
        welcome: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_WELCOME,
        intelligence: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_INTELLIGENCE,
        images: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_IMAGE_GENERATION,
        personalization: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_PERSONALIZATION,
        work: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_WORK,
        codex: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_UNSPECIFIED,
        voice: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_VOICE,
        trial_extension: Q.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_TRIAL_EXPIRY,
      }));
  }))();
}
Dt();
export { vt as SubscriptionOnboarding };
//# sourceMappingURL=subscription-onboarding-602bdd428de1.js.map
