import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  AB as r,
  CCt as i,
  CTt as a,
  CY as o,
  FBt as s,
  FTt as c,
  ITt as l,
  JO as u,
  LNt as d,
  LTt as f,
  MNt as p,
  MTt as m,
  Mst as h,
  NNt as g,
  NSt as _,
  PBt as v,
  Qit as ee,
  Qst as te,
  RTt as y,
  TY as b,
  USt as x,
  VSt as S,
  WO as C,
  XOt as w,
  Xz as T,
  Y3 as E,
  Yst as D,
  Z3 as O,
  ZSt as k,
  Zz as ne,
  _Tt as A,
  bB as j,
  iCt as M,
  jTt as N,
  jst as P,
  kB as F,
  nCt as I,
  okt as L,
  q3 as R,
  vB as z,
  vTt as B,
  wTt as V,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as re,
  CDr as H,
  Cjr as ie,
  Cqt as U,
  D5n as W,
  Dqt as G,
  FDr as K,
  FUn as ae,
  IAr as q,
  IUn as oe,
  IWn as J,
  Ipr as Y,
  KBr as se,
  KIr as ce,
  LIr as le,
  LUn as X,
  Lpr as ue,
  M4n as de,
  MIr as fe,
  MT as pe,
  N5n as me,
  O2n as he,
  PUn as Z,
  R9t as ge,
  RUn as _e,
  Tjr as ve,
  UAr as ye,
  WAr as be,
  Ycr as xe,
  Ydr as Se,
  bjr as Ce,
  e4n as we,
  eKn as Te,
  imr as Ee,
  jT as De,
  k2n as Oe,
  nKn as ke,
  njr as Ae,
  okn as je,
  rmr as Me,
  skn as Ne,
  tjr as Pe,
  vjr as Fe,
  xMr as Ie,
  xjr as Le,
  yMr as Re,
  z9t as ze,
} from "./app-initial-ad16eaadf81f.js";
import { Gb as Be, Wb as Ve } from "./app-primary-3e00728c2a4c.js";
import { i as He, t as Ue } from "./queries-ea9f18d3fc31.js";
import {
  a as We,
  d as Ge,
  g as Ke,
  h as qe,
  l as Je,
  n as Ye,
  p as Xe,
  r as Ze,
  s as Qe,
  t as $e,
  v as et,
} from "./subscription-onboarding-28a41aaa0c18.js";
var tt, nt;
function rt() {
  return (rt = e(() => {
    ((tt = `_overlay_ownp3_2`), (nt = { overlay: tt }));
  }))();
}
function it(e) {
  let t = (0, at.c)(82),
    {
      open: n,
      onOpenChange: i,
      onCloseComplete: s,
      onPresented: c,
      titleId: u,
      descriptionId: d,
      closeButtonClassName: h,
      presentation: g,
      children: _,
    } = e,
    v = L(),
    ee = j(),
    te = r(),
    y = ne(`(min-width: 640px)`),
    b = ne(`(prefers-reduced-motion: reduce)`),
    x = B(),
    S = m(0),
    w = (0, ot.useRef)(null),
    T = (0, ot.useRef)(null),
    D = (0, ot.useRef)(!1),
    O = (0, ot.useRef)(!1),
    k;
  t[0] === b ? (k = t[1]) : ((k = b ? { duration: 0 } : ct), (t[0] = b), (t[1] = k));
  let A = k,
    M,
    N;
  (t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = () => () => {
        T.current?.stop();
      }),
      (N = []),
      (t[2] = M),
      (t[3] = N))
    : ((M = t[2]), (N = t[3])),
    (0, ot.useEffect)(M, N));
  let P;
  t[4] !== y || t[5] !== S || t[6] !== i || t[7] !== A
    ? ((P = async () => {
        D.current ||
          ((D.current = !0),
          !y && w.current != null && ((T.current = a(S, w.current.offsetHeight, A)), await T.current),
          i(!1));
      }),
      (t[4] = y),
      (t[5] = S),
      (t[6] = i),
      (t[7] = A),
      (t[8] = P))
    : (P = t[8]);
  let F = P,
    I;
  t[9] === ee
    ? (I = t[10])
    : ((I = (e) => {
        let { x: t, y: n } = e;
        return { x: t / ee, y: n / ee };
      }),
      (t[9] = ee),
      (t[10] = I));
  let R;
  t[11] === F
    ? (R = t[12])
    : ((R = (e) => {
        e || F();
      }),
      (t[11] = F),
      (t[12] = R));
  let z = g === `no_payment_trial` ? `confirmation` : `default`,
    V = g === `no_payment_trial` ? void 0 : nt.overlay,
    re = y
      ? `left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl`
      : `bottom-2 left-1/2 -translate-x-1/2 rounded-[36px_36px_55px_55px]`,
    H;
  t[13] === re
    ? (H = t[14])
    : ((H = p(
        `max-h-[calc(100dvh-16px)] w-[calc(100vw-16px)] max-w-[480px] overflow-hidden shadow-elevation-03`,
        re,
      )),
      (t[13] = re),
      (t[14] = H));
  let ie;
  t[15] !== c || t[16] !== b || t[17] !== u
    ? ((ie = (e) => {
        ((D.current = !1),
          (O.current = !1),
          e.preventDefault(),
          document.getElementById(u)?.focus({ preventScroll: !0 }),
          b && ((O.current = !0), c()));
      }),
      (t[15] = c),
      (t[16] = b),
      (t[17] = u),
      (t[18] = ie))
    : (ie = t[18]);
  let U;
  t[19] === s ? (U = t[20]) : ((U = () => s()), (t[19] = s), (t[20] = U));
  let W;
  t[21] !== d || t[22] !== ie || t[23] !== U || t[24] !== u
    ? ((W = {
        asChild: !0,
        "aria-labelledby": u,
        "aria-describedby": d,
        onOpenAutoFocus: ie,
        onCloseAutoFocus: U,
      }),
      (t[21] = d),
      (t[22] = ie),
      (t[23] = U),
      (t[24] = u),
      (t[25] = W))
    : (W = t[25]);
  let G;
  t[26] !== y || t[27] !== b
    ? ((G = !b && (y ? { opacity: 0 } : { y: `100%` })), (t[26] = y), (t[27] = b), (t[28] = G))
    : (G = t[28]);
  let K;
  t[29] === y ? (K = t[30]) : ((K = y ? { opacity: 1 } : { y: 0 }), (t[29] = y), (t[30] = K));
  let ae;
  t[31] !== c || t[32] !== n
    ? ((ae = () => {
        n && !D.current && !O.current && ((O.current = !0), c());
      }),
      (t[31] = c),
      (t[32] = n),
      (t[33] = ae))
    : (ae = t[33]);
  let q;
  t[34] !== y || t[35] !== S
    ? ((q = y ? void 0 : { y: S }), (t[34] = y), (t[35] = S), (t[36] = q))
    : (q = t[36]);
  let oe = !y && `y`,
    J;
  t[37] === Symbol.for(`react.memo_cache_sentinel`) ? ((J = { top: 0 }), (t[37] = J)) : (J = t[37]);
  let Y;
  t[38] !== y || t[39] !== x
    ? ((Y = (e) => {
        !y &&
          O.current &&
          e.isPrimary &&
          !(e.target instanceof Element && e.target.closest(`button,a,input,select,textarea`)) &&
          x.start(e);
      }),
      (t[38] = y),
      (t[39] = x),
      (t[40] = Y))
    : (Y = t[40]);
  let se;
  t[41] !== F || t[42] !== S || t[43] !== A
    ? ((se = (e, t) => {
        S.get() > (w.current?.offsetHeight ?? 0) / 2 || t.velocity.y > 500 ? F() : (T.current = a(S, 0, A));
      }),
      (t[41] = F),
      (t[42] = S),
      (t[43] = A),
      (t[44] = se))
    : (se = t[44]);
  let ce = !!te,
    le;
  t[45] === v
    ? (le = t[46])
    : ((le = v.formatMessage({
        id: `codex.dialog.closeButton`,
        defaultMessage: `Close dialog`,
        description: `Accessible label for the button that closes a dialog`,
      })),
      (t[45] = v),
      (t[46] = le));
  let X = !(g === `no_payment_trial` && y) && (h ?? `max-sm:bg-token-bg-tertiary`),
    ue;
  t[47] === X
    ? (ue = t[48])
    : ((ue = p(
        `absolute end-1.5 top-1.5 z-10 size-9 justify-center rounded-full text-default hover:bg-primary-ghost-hover max-sm:end-5 max-sm:top-5 max-sm:size-7`,
        X,
      )),
      (t[47] = X),
      (t[48] = ue));
  let de;
  t[49] === F
    ? (de = t[50])
    : ((de = (e) => {
        (e.stopPropagation(), F());
      }),
      (t[49] = F),
      (t[50] = de));
  let fe;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, st.jsx)(o, {})), (t[51] = fe))
    : (fe = t[51]);
  let pe;
  t[52] !== le || t[53] !== ue || t[54] !== de
    ? ((pe = (0, st.jsx)(E, {
        type: `button`,
        unstyled: !0,
        "aria-label": le,
        className: ue,
        onClick: de,
        children: fe,
      })),
      (t[52] = le),
      (t[53] = ue),
      (t[54] = de),
      (t[55] = pe))
    : (pe = t[55]);
  let me;
  t[56] !== _ || t[57] !== ce || t[58] !== pe
    ? ((me = (0, st.jsxs)(Ge, {
        isDarkMode: ce,
        className: `max-h-[calc(100dvh-16px)] overflow-y-auto`,
        children: [pe, _],
      })),
      (t[56] = _),
      (t[57] = ce),
      (t[58] = pe),
      (t[59] = me))
    : (me = t[59]);
  let he;
  t[60] !== x ||
  t[61] !== G ||
  t[62] !== K ||
  t[63] !== ae ||
  t[64] !== q ||
  t[65] !== oe ||
  t[66] !== Y ||
  t[67] !== se ||
  t[68] !== me ||
  t[69] !== A
    ? ((he = (0, st.jsx)(l.div, {
        ref: w,
        initial: G,
        animate: K,
        transition: A,
        onAnimationComplete: ae,
        style: q,
        drag: oe,
        dragControls: x,
        dragConstraints: J,
        dragElastic: 0,
        dragListener: !1,
        dragMomentum: !1,
        onPointerDown: Y,
        onDragEnd: se,
        children: me,
      })),
      (t[60] = x),
      (t[61] = G),
      (t[62] = K),
      (t[63] = ae),
      (t[64] = q),
      (t[65] = oe),
      (t[66] = Y),
      (t[67] = se),
      (t[68] = me),
      (t[69] = A),
      (t[70] = he))
    : (he = t[70]);
  let Z;
  t[71] !== n || t[72] !== H || t[73] !== W || t[74] !== he || t[75] !== R || t[76] !== z || t[77] !== V
    ? ((Z = (0, st.jsx)(C, {
        open: n,
        onOpenChange: R,
        unstyledContent: !0,
        showDialogClose: !1,
        contentPosition: `anchored`,
        variant: z,
        overlayClassName: V,
        contentClassName: H,
        contentProps: W,
        children: he,
      })),
      (t[71] = n),
      (t[72] = H),
      (t[73] = W),
      (t[74] = he),
      (t[75] = R),
      (t[76] = z),
      (t[77] = V),
      (t[78] = Z))
    : (Z = t[78]);
  let ge;
  return (
    t[79] !== Z || t[80] !== I
      ? ((ge = (0, st.jsx)(f, { transformPagePoint: I, children: Z })),
        (t[79] = Z),
        (t[80] = I),
        (t[81] = ge))
      : (ge = t[81]),
    ge
  );
}
var at, ot, st, ct;
function lt() {
  return (lt = e(() => {
    ((at = v()),
      $e(),
      g(),
      V(),
      c(),
      y(),
      A(),
      N(),
      (ot = s()),
      w(),
      z(),
      O(),
      u(),
      b(),
      T(),
      F(),
      rt(),
      (st = d()),
      (ct = { type: `spring`, stiffness: 350, damping: 28, mass: 0.65 }));
  }))();
}
function ut(e) {
  let n = (0, mt.c)(12),
    { canStart: r, onStart: i } = e,
    a = t(te),
    o = S(),
    s = x(),
    c = (0, Q.useRef)(!1),
    l;
  n[0] !== r || n[1] !== o || n[2] !== s || n[3] !== i
    ? ((l = () => {
        r &&
          !c.current &&
          ((c.current = !0),
          i(() => {
            s({ pathname: o.pathname, search: ``, hash: `` }, { replace: !0, state: o.state });
          }).catch(dt));
      }),
      (n[0] = r),
      (n[1] = o),
      (n[2] = s),
      (n[3] = i),
      (n[4] = l))
    : (l = n[4]);
  let u = (0, Q.useEffectEvent)(l),
    d,
    f;
  (n[5] === a
    ? ((d = n[6]), (f = n[7]))
    : ((d = () => {
        ye(a, `chat`);
      }),
      (f = [a]),
      (n[5] = a),
      (n[6] = d),
      (n[7] = f)),
    (0, Q.useEffect)(d, f));
  let p;
  n[8] === u
    ? (p = n[9])
    : ((p = () => {
        u();
      }),
      (n[8] = u),
      (n[9] = p));
  let m;
  return (n[10] === r ? (m = n[11]) : ((m = [r]), (n[10] = r), (n[11] = m)), (0, Q.useEffect)(p, m), null);
}
function dt() {}
function ft(e) {
  let n = (0, mt.c)(51),
    {
      account: r,
      automatic: i,
      alreadyPresented: a,
      onCreateImage: o,
      canCreateImage: s,
      onStartVoice: c,
      onOpenFileDialog: l,
      onStartSite: u,
      onPrefill: d,
      onPresented: f,
      onClosed: p,
    } = e,
    m = t(te),
    g = L(),
    _ = x(),
    v = ie(`2272277762`),
    y = ne(`(min-width: 640px)`),
    b;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b =
        !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) &&
        !(/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1)),
      (n[0] = b))
    : (b = n[0]);
  let S = b,
    C = M(ce).status === `allowed`,
    w;
  n[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = { hostId: D }), (n[1] = w)) : (w = n[1]);
  let T = ue(w),
    E = (0, Q.useId)(),
    O = (0, Q.useRef)(!1),
    k;
  n[2] !== r.accountUserId || n[3] !== r.id || n[4] !== E
    ? ((k = [`student-onboarding-handoff`, r.id, r.accountUserId, E]),
      (n[2] = r.accountUserId),
      (n[3] = r.id),
      (n[4] = E),
      (n[5] = k))
    : (k = n[5]);
  let A;
  n[6] !== r || n[7] !== i
    ? ((A = () => i || O.current || Ze(r)), (n[6] = r), (n[7] = i), (n[8] = A))
    : (A = n[8]);
  let j;
  n[9] !== k || n[10] !== A
    ? ((j = {
        queryKey: k,
        queryFn: A,
        staleTime: 1 / 0,
        gcTime: 0,
        retry: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (n[9] = k),
      (n[10] = A),
      (n[11] = j))
    : (j = n[11]);
  let { data: N } = h(j),
    [P, F] = (0, Q.useState)(!0),
    I = (0, Q.useRef)(null),
    z;
  n[12] === p
    ? (z = n[13])
    : ((z = () => {
        p();
      }),
      (n[12] = p),
      (n[13] = z));
  let B = (0, Q.useEffectEvent)(z),
    V;
  n[14] !== B || n[15] !== N
    ? ((V = () => {
        N === !1 && B();
      }),
      (n[14] = B),
      (n[15] = N),
      (n[16] = V))
    : (V = n[16]);
  let re;
  (n[17] === N ? (re = n[18]) : ((re = [N]), (n[17] = N), (n[18] = re)), (0, Q.useEffect)(V, re));
  let H;
  n[19] !== T ||
  n[20] !== g ||
  n[21] !== _ ||
  n[22] !== p ||
  n[23] !== o ||
  n[24] !== d ||
  n[25] !== u ||
  n[26] !== c ||
  n[27] !== v ||
  n[28] !== m
    ? ((H = async () => {
        let e = I.current;
        I.current = null;
        let t = p(e === `work` || e === `voice`);
        switch (e) {
          case `plugins`:
            T && _(`/plugins`);
            return;
          case `work`:
            if (!(await t)) return;
            m.get(ce).status === `allowed`
              ? ye(m, `work`)
              : v &&
                S &&
                d(
                  g.formatMessage({
                    id: `chatgpt.students.back_to_school_2026.onboarding.work.fallback_prompt`,
                    defaultMessage: `Help me plan a presentation about ...`,
                    description: `Prefilled normal-chat prompt after a college student selects Try ChatGPT Work from the 2026 student Plus onboarding carousel when ChatGPT Work is temporarily unavailable. It gives the student an actionable school-project starting point without implying access to the Work product.`,
                  }),
                  `chat`,
                );
            return;
          case `sites`:
            u?.() !== !0 &&
              S &&
              d(
                g.formatMessage({
                  id: `chatgpt.students.back_to_school_2026.onboarding.sites.fallback_prompt`,
                  defaultMessage: `Help me plan a website about ...`,
                  description: `Prefilled normal-chat prompt after a college student selects Build a site from the 2026 student Plus onboarding carousel when the ChatGPT Sites website-building tool is unavailable. It asks ChatGPT to help plan a website without selecting or implying access to the Sites tool.`,
                }),
                `chat`,
              );
            return;
          case `images`:
            o();
            return;
          case `voice`:
            (await t) && c?.();
            return;
          case `files`:
          case null:
            return;
        }
      }),
      (n[19] = T),
      (n[20] = g),
      (n[21] = _),
      (n[22] = p),
      (n[23] = o),
      (n[24] = d),
      (n[25] = u),
      (n[26] = c),
      (n[27] = v),
      (n[28] = m),
      (n[29] = H))
    : (H = n[29]);
  let U = H,
    W;
  n[30] !== r || n[31] !== f || n[32] !== m
    ? ((W = (e) => {
        (!O.current && e.action === `step_viewed` && ((O.current = !0), We(r), f()),
          Ie(m, oe, {
            action: gt[e.action],
            step: _t[e.pageId],
            entryPoint: ae.CHATGPT_SUBSCRIPTION_ONBOARDING_ENTRY_POINT_STUDENTS_2026,
            stepPosition: ee(e.pageIndex + 1),
            presentedSteps: e.presentedPageIds.map(pt),
          }));
      }),
      (n[30] = r),
      (n[31] = f),
      (n[32] = m),
      (n[33] = W))
    : (W = n[33]);
  let G = W,
    K;
  n[34] === g.locale ? (K = n[35]) : ((K = R(g.locale)), (n[34] = g.locale), (n[35] = K));
  let q;
  n[36] !== U || n[37] !== G || n[38] !== y || n[39] !== P || n[40] !== K
    ? ((q = {
        Frame: it,
        isScreenAtLeastSm: y,
        direction: K,
        open: P,
        onOpenChange: F,
        onCloseComplete: U,
        onInteraction: G,
      }),
      (n[36] = U),
      (n[37] = G),
      (n[38] = y),
      (n[39] = P),
      (n[40] = K),
      (n[41] = q))
    : (q = n[41]);
  let J = q;
  if (N !== !0 && !a) return null;
  let Y;
  return (
    n[42] !== s ||
    n[43] !== T ||
    n[44] !== C ||
    n[45] !== J ||
    n[46] !== l ||
    n[47] !== u ||
    n[48] !== c ||
    n[49] !== v
      ? ((Y = v
          ? (0, ht.jsx)(Je, {
              ...J,
              showPluginsAction: T,
              showWorkAction: S || C,
              showSitesAction: S || u != null,
              showVoiceAction: c != null,
              onAction: (e) => {
                I.current = e;
              },
            })
          : (0, ht.jsx)(Qe, {
              ...J,
              showWorkAction: C,
              showFilesAction: l != null,
              showImagesAction: s,
              showVoiceAction: c != null,
              onAction: (e) => {
                e === `files` ? l?.() : (I.current = e);
              },
            })),
        (n[42] = s),
        (n[43] = T),
        (n[44] = C),
        (n[45] = J),
        (n[46] = l),
        (n[47] = u),
        (n[48] = c),
        (n[49] = v),
        (n[50] = Y))
      : (Y = n[50]),
    Y
  );
}
function pt(e) {
  return _t[e];
}
var mt, Q, ht, gt, _t;
function vt() {
  return (vt = e(() => {
    ((mt = v()),
      $e(),
      Se(),
      J(),
      P(),
      k(),
      (Q = s()),
      w(),
      _(),
      le(),
      q(),
      lt(),
      Y(),
      T(),
      Re(),
      n(),
      se(),
      Le(),
      (ht = d()),
      (gt = {
        step_viewed: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_STEP_VIEWED,
        continue_tapped: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_CONTINUE_TAPPED,
        try_feature_tapped: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_TRY_FEATURE_TAPPED,
        close_tapped: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_CLOSE_TAPPED,
        completed: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_COMPLETED,
      }),
      (_t = {
        welcome: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_WELCOME,
        files: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_FILES,
        images: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_IMAGE_GENERATION,
        plugins: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_PLUGINS,
        work: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_WORK,
        sites: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_SITES,
        voice: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_VOICE,
      }));
  }))();
}
function yt(e) {
  let n = (0, Ct.c)(60),
    r = t(te),
    i = t(H),
    a = M(Tt),
    o;
  n[0] !== a || n[1] !== e.onStartVoice
    ? ((o = e.onStartVoice), (n[0] = a), (n[1] = e.onStartVoice), (n[2] = o))
    : (o = n[2]);
  let s = Ee(),
    c = s.accountId != null,
    l;
  n[3] === c ? (l = n[4]) : ((l = { enabled: c }), (n[3] = c), (n[4] = l));
  let { data: u, isPending: d, isError: f } = I(Ue, s.accountId ?? ``, l),
    p = S(),
    m = x(),
    [h, g] = (0, wt.useState)(null),
    _;
  n[5] !== i.value.conversationId ||
  n[6] !== i.value.kind ||
  n[7] !== p.key ||
  n[8] !== p.pathname ||
  n[9] !== p.state ||
  n[10] !== m ||
  n[11] !== r
    ? ((_ = async (e) => {
        let t = e !== void 0 && e;
        g(null);
        let n = i.value.kind === `chatgpt` ? i.value.conversationId : null,
          a = m(
            { pathname: p.pathname, search: ``, hash: `` },
            {
              replace: !0,
              state: {
                ...p.state,
                focusComposerNonce: Date.now(),
                initialChatGptConversationId: n != null && Oe(n) ? n : p.state?.initialChatGptConversationId,
              },
            },
          );
        if (!t) return !0;
        (await a,
          await r.when((e) => {
            let t = e.get(xe);
            return t != null && t.key !== p.key;
          }));
        let o = r.get(xe);
        return o?.pathname === p.pathname && o.search === `` && o.hash === ``;
      }),
      (n[5] = i.value.conversationId),
      (n[6] = i.value.kind),
      (n[7] = p.key),
      (n[8] = p.pathname),
      (n[9] = p.state),
      (n[10] = m),
      (n[11] = r),
      (n[12] = _))
    : (_ = n[12]);
  let v = _,
    ee = `${s.userId}:${s.accountId}:student`,
    y = me(),
    b = u?.account,
    C = p.hash === `#plus_onboarding` && p.search === `?plus_onboarding_origin=homepage`,
    w = p.search === `` || p.search === `?refresh_account=true`,
    T = p.search === `?refresh_account=true&campaign=students_2026` || p.search === `?campaign=students_2026`,
    E =
      (p.hash === `#plus_onboarding` ? w || C || T : p.hash === `#pro_onboarding` && w) &&
      (s.isLoading || (s.accountId != null && s.userId != null && d)),
    D = b?.account_id ?? ``,
    O = s.userId ?? ``,
    k =
      b?.structure === `personal` && b.plan_type === `plus` && u?.entitlement.has_active_subscription === !0,
    ne = u?.entitlement.discount,
    A,
    j;
  n[13] !== p.hash ||
  n[14] !== p.search ||
  n[15] !== w ||
  n[16] !== D ||
  n[17] !== O ||
  n[18] !== k ||
  n[19] !== ne
    ? ((A = { id: D, accountUserId: O, isPaidPlus: k, discount: ne }),
      (j =
        w &&
        (p.hash === `` || (p.hash === `#plus_onboarding` && p.search === `?refresh_account=true`)) &&
        Ye(A)),
      (n[13] = p.hash),
      (n[14] = p.search),
      (n[15] = w),
      (n[16] = D),
      (n[17] = O),
      (n[18] = k),
      (n[19] = ne),
      (n[20] = A),
      (n[21] = j))
    : ((A = n[20]), (j = n[21]));
  let N = ie(j ? `1139852989` : !1),
    P = A.isPaidPlus && (h === ee || N || (T && p.hash === `#plus_onboarding`)),
    F = p.hash === `#plus_onboarding` ? `plus` : `pro`,
    L = P ? ee : `${s.userId}:${s.accountId}:${F}`;
  if (!(
    !s.isLoading &&
    !d &&
    !f &&
    u?.can_access_with_session !== !1 &&
    s.userId != null &&
    b?.account_id === s.accountId &&
    b?.structure === `personal` &&
    (h === L || (e.canPresent && !y)) &&
    (P ||
      ((w || C) &&
        (p.hash === `#plus_onboarding` || p.hash === `#pro_onboarding`) &&
        (F === `plus` ? b.plan_type === `plus` : ke(b.plan_type))))
  )) {
    if (E) {
      let t;
      n[22] === e
        ? (t = n[23])
        : ((t = (t) =>
            e.renderCandidates([
              ...t,
              { id: `subscription-onboarding`, isEligible: !1, isLoading: !0, content: null },
            ])),
          (n[22] = e),
          (n[23] = t));
      let r = t,
        i;
      n[24] === L
        ? (i = n[25])
        : ((i = (0, $.jsx)(St, { id: L, status: `loading` })), (n[24] = L), (n[25] = i));
      let a;
      n[26] !== e.homeCandidates || n[27] !== r
        ? ((a = e.homeCandidates == null ? r([]) : e.homeCandidates(r)),
          (n[26] = e.homeCandidates),
          (n[27] = r),
          (n[28] = a))
        : (a = n[28]);
      let o;
      return (
        n[29] !== a || n[30] !== i
          ? ((o = (0, $.jsxs)($.Fragment, { children: [i, a] })), (n[29] = a), (n[30] = i), (n[31] = o))
          : (o = n[31]),
        o
      );
    }
    let t;
    return (
      n[32] !== e.homeCandidates || n[33] !== e.renderCandidates
        ? ((t = e.homeCandidates == null ? e.renderCandidates([]) : e.homeCandidates(e.renderCandidates)),
          (n[32] = e.homeCandidates),
          (n[33] = e.renderCandidates),
          (n[34] = t))
        : (t = n[34]),
      t
    );
  }
  if (P) {
    let t;
    n[35] !== b.account_id ||
    n[36] !== s.userId ||
    n[37] !== N ||
    n[38] !== v ||
    n[39] !== o ||
    n[40] !== L ||
    n[41] !== h ||
    n[42] !== e ||
    n[43] !== A
      ? ((t = (t) =>
          e.renderCandidates([
            ...t,
            {
              id: `subscription-onboarding`,
              isEligible: !0,
              isLoading: !1,
              trackVisibility: !0,
              content: (0, $.jsx)(St, {
                id: L,
                children: (0, $.jsx)(
                  ft,
                  {
                    ...e,
                    onStartVoice: o,
                    account: A,
                    automatic: N,
                    alreadyPresented: h === L,
                    onPresented: () => g(L),
                    onClosed: v,
                  },
                  `${s.userId}:${b.account_id}`,
                ),
              }),
            },
          ])),
        (n[35] = b.account_id),
        (n[36] = s.userId),
        (n[37] = N),
        (n[38] = v),
        (n[39] = o),
        (n[40] = L),
        (n[41] = h),
        (n[42] = e),
        (n[43] = A),
        (n[44] = t))
      : (t = n[44]);
    let r = t,
      i;
    return (
      n[45] !== e.homeCandidates || n[46] !== r
        ? ((i = e.homeCandidates == null ? r([]) : e.homeCandidates(r)),
          (n[45] = e.homeCandidates),
          (n[46] = r),
          (n[47] = i))
        : (i = n[47]),
      i
    );
  }
  let R = `${s.userId}:${b.account_id}:${F}`,
    z;
  n[48] === L ? (z = n[49]) : ((z = () => g(L)), (n[48] = L), (n[49] = z));
  let B = u?.entitlement.has_active_subscription === !0,
    V;
  return (
    n[50] !== C ||
    n[51] !== v ||
    n[52] !== o ||
    n[53] !== F ||
    n[54] !== L ||
    n[55] !== e ||
    n[56] !== B ||
    n[57] !== R ||
    n[58] !== z
      ? ((V = (0, $.jsx)(
          bt,
          {
            ...e,
            onStartVoice: o,
            plan: F,
            presentationOwner: L,
            onPresented: z,
            onClosed: v,
            isHomepageEntry: C,
            hasPaidSubscription: B,
          },
          R,
        )),
        (n[50] = C),
        (n[51] = v),
        (n[52] = o),
        (n[53] = F),
        (n[54] = L),
        (n[55] = e),
        (n[56] = B),
        (n[57] = R),
        (n[58] = z),
        (n[59] = V))
      : (V = n[59]),
    V
  );
}
function bt(e) {
  let n = (0, Ct.c)(66),
    {
      renderCandidates: r,
      homeCandidates: i,
      onSelectIntelligence: a,
      onCreateImage: o,
      onStartVoice: s,
      onStartConversation: c,
      canStartConversation: l,
      hasPaidSubscription: u,
      plan: d,
      presentationOwner: f,
      onPresented: p,
      onClosed: m,
      isHomepageEntry: h,
    } = e,
    g = t(te),
    { client: _, isLoading: v } = ve(),
    y = L(),
    b = x(),
    S = G(),
    C = M(be),
    w;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = { name: `codex.browser` }), (n[0] = w))
    : (w = n[0]);
  let T = I(Pe, w),
    E = ne(`(min-width: 640px)`),
    [D, O] = (0, wt.useState)(!0),
    k = pe(),
    A = d === `pro` && E && T.isCapable,
    j = (0, wt.useRef)(null),
    N,
    P;
  if (
    n[1] !== l ||
    n[2] !== C ||
    n[3] !== u ||
    n[4] !== i ||
    n[5] !== y ||
    n[6] !== h ||
    n[7] !== k ||
    n[8] !== E ||
    n[9] !== b ||
    n[10] !== m ||
    n[11] !== o ||
    n[12] !== p ||
    n[13] !== a ||
    n[14] !== c ||
    n[15] !== s ||
    n[16] !== D ||
    n[17] !== d ||
    n[18] !== f ||
    n[19] !== r ||
    n[20] !== g ||
    n[21] !== A ||
    n[22] !== S ||
    n[23] !== _ ||
    n[24] !== v
  ) {
    let e,
      t = !1,
      te = d === `plus` && !h && v;
    if (d === `pro`) {
      let t;
      (n[27] === _
        ? (t = n[28])
        : ((t = Ce(_, `1895559448`).get(`onboarding_variant`, `off`)), (n[27] = _), (n[28] = t)),
        (e = t === `carousel_v1`));
    } else if (h) e = !0;
    else if (v) e = !1;
    else if (u && Fe(_, `489096038`)) ((e = !0), (t = !0));
    else if (Ce(_, `823322201`).get(`enabled`, !1)) {
      let t;
      (n[29] === _
        ? (t = n[30])
        : ((t = Ce(_, `3081805378`).get(`carousel_onboarding_variant`, `off`)), (n[29] = _), (n[30] = t)),
        (e = t === `carousel_v1`));
    } else e = !1;
    let x;
    n[31] !== h || n[32] !== p || n[33] !== d || n[34] !== g
      ? ((x = (e) => {
          (e.action === `step_viewed` && p(),
            Ie(g, oe, {
              action: Et[e.action],
              step: Dt[e.pageId],
              entryPoint: h
                ? ae.CHATGPT_SUBSCRIPTION_ONBOARDING_ENTRY_POINT_ANNOUNCEMENT_UNIVERSAL_LINK
                : ae.CHATGPT_SUBSCRIPTION_ONBOARDING_ENTRY_POINT_ACCOUNT_PLAN_TRANSITION,
              stepPosition: ee(e.pageIndex + 1),
              presentedSteps: e.presentedPageIds.map(xt),
              ...(d === `pro` ? { variant: _e.CHATGPT_SUBSCRIPTION_ONBOARDING_VARIANT_PRO } : {}),
            }));
        }),
        (n[31] = h),
        (n[32] = p),
        (n[33] = d),
        (n[34] = g),
        (n[35] = x))
      : (x = n[35]);
    let w = x,
      T;
    n[36] === k
      ? (T = n[37])
      : ((T = (e) => {
          let { action: t, pageId: n } = e;
          t === `try_feature` && k() && (j.current = n);
        }),
        (n[36] = k),
        (n[37] = T));
    let ne = T,
      M;
    n[38] !== k ||
    n[39] !== b ||
    n[40] !== m ||
    n[41] !== o ||
    n[42] !== a ||
    n[43] !== s ||
    n[44] !== d ||
    n[45] !== g ||
    n[46] !== A ||
    n[47] !== S
      ? ((M = async () => {
          if (!k()) return;
          let e = j.current;
          j.current = null;
          let t = m(e === `work` || e === `codex` || e === `voice`);
          switch (e) {
            case `intelligence`:
              a(d === `pro` ? `pro` : `standard`);
              return;
            case `images`:
              o();
              return;
            case `personalization`:
              b(`/plugins`);
              return;
            case `work`:
              (await t) && g.get(be) && ye(g, `work`);
              return;
            case `voice`:
              (await t) && s?.();
              return;
            case `codex`:
              (await t) &&
                A &&
                ze(g, {
                  codexLocalAccessStatus: g.get(fe).status,
                  currentMode: g.get(Ne),
                  navigate: b,
                  nextMode: `codex`,
                  openHome: !0,
                  startNewConversation: S,
                });
              return;
            case null:
              return;
          }
        }),
        (n[38] = k),
        (n[39] = b),
        (n[40] = m),
        (n[41] = o),
        (n[42] = a),
        (n[43] = s),
        (n[44] = d),
        (n[45] = g),
        (n[46] = A),
        (n[47] = S),
        (n[48] = M))
      : (M = n[48]);
    let F = M,
      I;
    n[49] === y.locale ? (I = n[50]) : ((I = R(y.locale)), (n[49] = y.locale), (n[50] = I));
    let L;
    n[51] !== E || n[52] !== ne || n[53] !== F || n[54] !== w || n[55] !== D || n[56] !== I
      ? ((L = {
          Frame: it,
          isScreenAtLeastSm: E,
          direction: I,
          open: D,
          onOpenChange: O,
          onCloseComplete: F,
          onAction: ne,
          onInteraction: w,
        }),
        (n[51] = E),
        (n[52] = ne),
        (n[53] = F),
        (n[54] = w),
        (n[55] = D),
        (n[56] = I),
        (n[57] = L))
      : (L = n[57]);
    let z = L,
      B;
    if (t) B = (0, $.jsx)(ut, { canStart: l, onStart: c });
    else if (d === `plus`) B = (0, $.jsx)(et, { ...z });
    else {
      let e;
      (n[58] === y
        ? (e = n[59])
        : ((e = y.formatMessage({
            id: `chatgpt.pro_onboarding.carousel.page.codex.open_button.label`,
            defaultMessage: `Try Codex`,
            description: `Button in the Pro onboarding tour that closes the tour and opens Codex in the current app.`,
          })),
          (n[58] = y),
          (n[59] = e)),
        (B = (0, $.jsx)(Xe, {
          ...z,
          codexActionLabel: e,
          featurePageIds: A ? qe : Ke,
          canStartVoice: s != null,
          canStartWork: C,
        })));
    }
    t || (B = (0, $.jsx)(St, { id: f, children: B }));
    let V = (t) =>
      r([
        ...t,
        {
          id: `subscription-onboarding`,
          isEligible: e,
          isLoading: te,
          content: e ? B : null,
          trackVisibility: !0,
        },
      ]);
    (n[60] !== f || n[61] !== te
      ? ((N = te && (0, $.jsx)(St, { id: f, status: `loading` })), (n[60] = f), (n[61] = te), (n[62] = N))
      : (N = n[62]),
      (P = i == null ? V([]) : i(V)),
      (n[1] = l),
      (n[2] = C),
      (n[3] = u),
      (n[4] = i),
      (n[5] = y),
      (n[6] = h),
      (n[7] = k),
      (n[8] = E),
      (n[9] = b),
      (n[10] = m),
      (n[11] = o),
      (n[12] = p),
      (n[13] = a),
      (n[14] = c),
      (n[15] = s),
      (n[16] = D),
      (n[17] = d),
      (n[18] = f),
      (n[19] = r),
      (n[20] = g),
      (n[21] = A),
      (n[22] = S),
      (n[23] = _),
      (n[24] = v),
      (n[25] = N),
      (n[26] = P));
  } else ((N = n[25]), (P = n[26]));
  let F;
  return (
    n[63] !== N || n[64] !== P
      ? ((F = (0, $.jsxs)($.Fragment, { children: [N, P] })), (n[63] = N), (n[64] = P), (n[65] = F))
      : (F = n[65]),
    F
  );
}
function xt(e) {
  return Dt[e];
}
function St(e) {
  let t = (0, Ct.c)(6),
    { id: n, status: r, children: i } = e,
    a = r === void 0 ? `eligible` : r,
    o = `subscription-onboarding:${n}`,
    s;
  t[0] === i ? (s = t[1]) : ((s = () => i), (t[0] = i), (t[1] = s));
  let c;
  return (
    t[2] !== a || t[3] !== o || t[4] !== s
      ? ((c = (0, $.jsx)(Ve, {
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
var Ct, wt, $, Tt, Et, Dt;
function Ot() {
  return (Ot = e(() => {
    ((Ct = v()),
      Te(),
      $e(),
      Se(),
      J(),
      k(),
      (wt = s()),
      w(),
      _(),
      Be(),
      Ae(),
      le(),
      Me(),
      he(),
      de(),
      we(),
      q(),
      W(),
      He(),
      lt(),
      T(),
      U(),
      re(),
      Re(),
      n(),
      K(),
      ge(),
      je(),
      Le(),
      De(),
      vt(),
      ($ = d()),
      (Tt = i(te, ({ get: e }) => !1)),
      (Et = {
        step_viewed: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_STEP_VIEWED,
        continue_tapped: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_CONTINUE_TAPPED,
        try_feature_tapped: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_TRY_FEATURE_TAPPED,
        close_tapped: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_CLOSE_TAPPED,
        completed: Z.CHATGPT_SUBSCRIPTION_ONBOARDING_ACTION_COMPLETED,
      }),
      (Dt = {
        welcome: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_WELCOME,
        intelligence: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_INTELLIGENCE,
        images: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_IMAGE_GENERATION,
        personalization: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_PERSONALIZATION,
        work: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_WORK,
        codex: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_UNSPECIFIED,
        voice: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_VOICE,
        trial_extension: X.CHATGPT_SUBSCRIPTION_ONBOARDING_STEP_TRIAL_EXPIRY,
      }));
  }))();
}
Ot();
export { yt as SubscriptionOnboarding };
//# sourceMappingURL=subscription-onboarding-20b9c80e0090.js.map
