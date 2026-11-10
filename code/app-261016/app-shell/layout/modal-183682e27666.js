const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./personalization-entry-cad206990905.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Cq as r,
  FBt as i,
  HO as a,
  IO as ee,
  JO as o,
  KO as s,
  LNt as c,
  NSt as l,
  OFt as u,
  PBt as d,
  Qst as te,
  TY as f,
  USt as ne,
  WO as re,
  XOt as p,
  Y3 as m,
  YOt as ie,
  Z3 as h,
  ZSt as g,
  ck as _,
  iCt as ae,
  kFt as oe,
  okt as se,
  qO as ce,
  rk as le,
  tk as ue,
  tkt as v,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CRn as de,
  IMr as y,
  Lbt as fe,
  Man as pe,
  Nan as me,
  Rbt as b,
  Tjr as x,
  bRn as S,
  bjr as he,
  eMr as ge,
  jan as C,
  lMr as _e,
  nMr as w,
  uMr as T,
  vj as E,
  xMr as ve,
  xjr as D,
  yMr as O,
  yj as ye,
} from "./app-initial-ad16eaadf81f.js";
import { n as k, t as A } from "./persona-3c2782a99524.js";
import { a as j, c as M, i as be, o as N, r as P, s as xe } from "./chatgpt_family-e849ec087b1a.js";
import { n as F, t as I } from "./chatgpt-accent-messages-9fa1e1df93a1.js";
function Se(e) {
  let n = (0, we.c)(54),
    { accountId: r, onClose: i, onComplete: a } = e,
    o = t(te),
    s = se(),
    c = ae(y),
    { data: l, isError: u, refetch: d } = ae(ge),
    f = me(pe()),
    { setAccountAccent: ne } = ye(f),
    [p, ie] = (0, L.useState)(null),
    [h, g] = (0, L.useState)(!1),
    [_, oe] = (0, L.useState)(!1),
    [de, b] = (0, L.useState)(null),
    x = p ?? l?.chatTheme;
  if (c !== r) return null;
  if (de != null) {
    let e;
    n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = () => b(null)), (n[0] = e)) : (e = n[0]);
    let t;
    return (
      n[1] !== de || n[2] !== r || n[3] !== i || n[4] !== a
        ? ((t = (0, R.jsx)(de, { accountId: r, onBack: e, onClose: i, onComplete: a })),
          (n[1] = de),
          (n[2] = r),
          (n[3] = i),
          (n[4] = a),
          (n[5] = t))
        : (t = n[5]),
      t
    );
  }
  let S;
  n[6] !== r || n[7] !== u || n[8] !== h || n[9] !== o || n[10] !== x || n[11] !== ne || n[12] !== l
    ? ((S = async () => {
        if (!(h || u || x == null || l == null || o.get(y) !== r)) {
          (g(!0), oe(!1), x !== l.chatTheme && ve(o, xe, { accentColor: x }));
          try {
            if ((await ne(x), o.get(y) === r)) {
              let e = await Ce();
              o.get(y) === r && b(() => e);
            }
          } catch {
            o.get(y) === r && oe(!0);
          }
          g(!1);
        }
      }),
      (n[6] = r),
      (n[7] = u),
      (n[8] = h),
      (n[9] = o),
      (n[10] = x),
      (n[11] = ne),
      (n[12] = l),
      (n[13] = S))
    : (S = n[13]);
  let he = S,
    C;
  n[14] !== i || n[15] !== h
    ? ((C = (e) => {
        !e && !h && i();
      }),
      (n[14] = i),
      (n[15] = h),
      (n[16] = C))
    : (C = n[16]);
  let w = !h,
    T;
  n[17] === s
    ? (T = n[18])
    : ((T = s.formatMessage({
        id: `chatgpt.pepper.personalization.accent_color.close.button.label`,
        defaultMessage: `Close theme color selection`,
        description: `Accessible label for closing teen theme selection without saving an unconfirmed color`,
      })),
      (n[17] = s),
      (n[18] = T));
  let E;
  n[19] === he
    ? (E = n[20])
    : ((E = (e) => {
        (e.preventDefault(), he());
      }),
      (n[19] = he),
      (n[20] = E));
  let D;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, R.jsx)(ce, {
        className: `heading-dialog`,
        children: (0, R.jsx)(v, {
          id: `chatgpt.pepper.personalization.accent_color.title`,
          defaultMessage: `Choose a theme color`,
          description: `Heading in teen onboarding where the user chooses an account accent color`,
        }),
      })),
      (n[21] = D))
    : (D = n[21]);
  let O;
  n[22] !== u || n[23] !== d
    ? ((O =
        u &&
        (0, R.jsx)(m, {
          type: `button`,
          color: `secondary`,
          onClick: () => void d(),
          children: (0, R.jsx)(v, {
            id: `chatgpt.pepper.personalization.accent_color.retry`,
            defaultMessage: `Couldn’t load your color. Try again`,
            description: `Button that retries loading saved account accent settings in teen onboarding`,
          }),
        })),
      (n[22] = u),
      (n[23] = d),
      (n[24] = O))
    : (O = n[24]);
  let k;
  n[25] !== u || n[26] !== x
    ? ((k =
        !u &&
        x == null &&
        (0, R.jsx)(`p`, {
          role: `status`,
          className: `text-sm text-secondary`,
          children: (0, R.jsx)(v, {
            id: `chatgpt.pepper.personalization.accent_color.loading`,
            defaultMessage: `Loading your color…`,
            description: `Loading state while the saved account accent is fetched for teen onboarding`,
          }),
        })),
      (n[25] = u),
      (n[26] = x),
      (n[27] = k))
    : (k = n[27]);
  let A;
  n[28] !== s || n[29] !== u || n[30] !== h || n[31] !== x || n[32] !== f
    ? ((A =
        !u &&
        x != null &&
        (0, R.jsx)(ue, {
          triggerButton: (0, R.jsx)(m, {
            type: `button`,
            color: `secondary`,
            disabled: h,
            "aria-label": s.formatMessage({
              id: `chatgpt.pepper.personalization.accent_color.options.group.label`,
              defaultMessage: `Theme color options`,
              description: `Accessible label for the existing account accent choices in teen onboarding`,
            }),
            children: (0, R.jsx)(v, { ...F[x === `black` && f === `dark` ? `white` : x] }),
          }),
          children: _e.options.map((e) =>
            (0, R.jsx)(
              le.Item,
              {
                onSelect: () => {
                  (ie(e), oe(!1));
                },
                children: (0, R.jsxs)(`span`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, R.jsx)(`span`, {
                      "aria-hidden": !0,
                      className: `size-3 shrink-0 rounded-full border border-default`,
                      style: { backgroundColor: fe(e, f) },
                    }),
                    (0, R.jsx)(v, { ...F[e === `black` && f === `dark` ? `white` : e] }),
                  ],
                }),
              },
              e,
            ),
          ),
        })),
      (n[28] = s),
      (n[29] = u),
      (n[30] = h),
      (n[31] = x),
      (n[32] = f),
      (n[33] = A))
    : (A = n[33]);
  let j;
  n[34] === _
    ? (j = n[35])
    : ((j =
        _ &&
        (0, R.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-secondary`,
          children: (0, R.jsx)(v, {
            id: `chatgpt.pepper.personalization.accent_color.continue.error`,
            defaultMessage: `We couldn’t continue. Try again`,
            description: `Error when saving an account color or loading the next voice selection step fails; the user can retry Continue`,
          }),
        })),
      (n[34] = _),
      (n[35] = j));
  let M = u || x == null,
    be;
  n[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, R.jsx)(v, {
        id: `chatgpt.pepper.personalization.accent_color.continue.button.label`,
        defaultMessage: `Continue`,
        description: `Saves the selected account accent color and advances to voice selection in teen onboarding`,
      })),
      (n[36] = be))
    : (be = n[36]);
  let N;
  n[37] !== h || n[38] !== M
    ? ((N = (0, R.jsx)(m, { type: `submit`, color: `primary`, disabled: M, loading: h, children: be })),
      (n[37] = h),
      (n[38] = M),
      (n[39] = N))
    : (N = n[39]);
  let P;
  n[40] !== j || n[41] !== N || n[42] !== O || n[43] !== k || n[44] !== A
    ? ((P = (0, R.jsxs)(`div`, { className: `flex flex-col gap-6 p-6`, children: [D, O, k, A, j, N] })),
      (n[40] = j),
      (n[41] = N),
      (n[42] = O),
      (n[43] = k),
      (n[44] = A),
      (n[45] = P))
    : (P = n[45]);
  let I;
  n[46] !== P || n[47] !== E
    ? ((I = (0, R.jsx)(ee, {
        className: `select-none`,
        as: `form`,
        variant: `chatgpt`,
        onSubmit: E,
        children: P,
      })),
      (n[46] = P),
      (n[47] = E),
      (n[48] = I))
    : (I = n[48]);
  let Se;
  return (
    n[49] !== I || n[50] !== C || n[51] !== w || n[52] !== T
      ? ((Se = (0, R.jsx)(re, {
          open: !0,
          onOpenChange: C,
          size: `beacon`,
          variant: `chatgpt`,
          shouldIgnoreClickOutside: !0,
          showDialogClose: w,
          dialogCloseLabel: T,
          children: I,
        })),
        (n[49] = I),
        (n[50] = C),
        (n[51] = w),
        (n[52] = T),
        (n[53] = Se))
      : (Se = n[53]),
    Se
  );
}
async function Ce() {
  let { loadVoicePersonalizationDialog: e } = await u(
    async () => {
      let { loadVoicePersonalizationDialog: e } = await import(`./personalization-entry-cad206990905.js`);
      return { loadVoicePersonalizationDialog: e };
    },
    __vite__mapDeps([0, 1, 2, 3]),
    import.meta.url,
  );
  return e();
}
var we, L, R;
function Te() {
  return (Te = e(() => {
    ((we = d()),
      M(),
      g(),
      (L = i()),
      p(),
      T(),
      w(),
      h(),
      o(),
      a(),
      _(),
      O(),
      n(),
      E(),
      I(),
      b(),
      C(),
      (R = c()),
      oe());
  }))();
}
function Ee(e) {
  let t = (0, Oe.c)(2),
    { isLoading: n } = x(),
    r = ae(y);
  if (n || r !== e.accountId) return null;
  let i;
  return (t[0] === e ? (i = t[1]) : ((i = (0, B.jsx)(De, { ...e }, e.accountId)), (t[0] = e), (t[1] = i)), i);
}
function De(e) {
  let n = (0, Oe.c)(77),
    { accountId: i, illustrationSrc: a, includeIntro: o, onClose: c, onComplete: l } = e,
    u = o !== void 0 && o,
    d = t(te),
    f = ae(y),
    p = se(),
    ie = ne(),
    { client: h } = x(),
    [g, _] = (0, z.useState)(0),
    [oe, le] = (0, z.useState)(!1),
    [ue, fe] = (0, z.useState)(!1),
    [pe, me] = (0, z.useState)(!1),
    b = (0, z.useRef)(null),
    S = (0, z.useRef)(!1),
    ge;
  n[0] === h
    ? (ge = n[1])
    : ((ge = () => he(h, `67629032`).get(`disable_homework_helper_onboarding`, !1)), (n[0] = h), (n[1] = ge));
  let [C] = (0, z.useState)(ge),
    _e;
  n[2] !== C || n[3] !== u
    ? ((_e = (e) => (u || e.id !== `intro`) && (!C || e.id !== `learn`)), (n[2] = C), (n[3] = u), (n[4] = _e))
    : (_e = n[4]);
  let w = ke.filter(_e),
    T = w[g] ?? w[0],
    E,
    D;
  (n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = () => () => {
        b.current?.();
      }),
      (D = []),
      (n[5] = E),
      (n[6] = D))
    : ((E = n[5]), (D = n[6])),
    (0, z.useEffect)(E, D));
  let O, ye;
  if (
    (n[7] !== i || n[8] !== f
      ? ((O = () => {
          f !== i && (b.current?.(), (b.current = null));
        }),
        (ye = [i, f]),
        (n[7] = i),
        (n[8] = f),
        (n[9] = O),
        (n[10] = ye))
      : ((O = n[9]), (ye = n[10])),
    (0, z.useEffect)(O, ye),
    (0, z.useEffect)(() => {
      T != null && f === i && ve(d, N, { step: T.step });
    }, [i, f, T, d]),
    T == null || f !== i)
  )
    return null;
  let A = (e) => {
      ve(d, be, { step: T.step, action: e });
    },
    j;
  n[11] !== c || n[12] !== l
    ? ((j = () => {
        (l?.(), c());
      }),
      (n[11] = c),
      (n[12] = l),
      (n[13] = j))
    : (j = n[13]);
  let M = j,
    xe = () => {
      T.id === `learn`
        ? (A(P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_GET_HOMEWORK_HELP_CLICKED),
          M(),
          ie(`/`, {
            state: {
              prefillPrompt: p.formatMessage({
                id: `chatgpt.pepper.onboarding.learn.prompt`,
                defaultMessage: `Help me solve 3(2x-5)=4x+8?`,
                description: `Draft chat prompt inserted into the composer when a teen selects Get homework help in ChatGPT onboarding. Preserve the sample algebra equation; the user can edit the prompt before sending it.`,
              }),
            },
          }))
        : T.id === `create`
          ? (A(P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_CREATE_IMAGE_CLICKED), M(), ie(`/images`))
          : T.id === `personalize`
            ? (A(P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_ADD_PERSONALIZATION_CLICKED), le(!0))
            : T.id === `wellbeing`
              ? (A(P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_LEARN_MORE_CLICKED),
                de({
                  href: `https://chatgpt.com/parent-resources/safety-protections/`,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                }))
              : T.id === `intro` &&
                (A(P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_VERIFY_AGE_CLICKED),
                me(!0),
                (b.current = k({
                  accountId: i,
                  onLoad: () => {
                    (me(!1), (S.current = !0), fe(!0));
                  },
                  onComplete: M,
                  onCancel: () => {
                    ((S.current = !1), me(!1), fe(!1));
                  },
                  onError: () => {
                    ((S.current = !1), me(!1), fe(!1));
                  },
                })));
    };
  if (oe) {
    let e;
    return (
      n[14] !== i || n[15] !== M
        ? ((e = (0, B.jsx)(Se, { accountId: i, onClose: M, onComplete: M })),
          (n[14] = i),
          (n[15] = M),
          (n[16] = e))
        : (e = n[16]),
      e
    );
  }
  let F = V.next;
  T.id === `intro` ? (F = V.explore) : T.id === `wellbeing` && (F = u ? V.done : V.returnToChat);
  let I = V.learnMore;
  T.id === `intro`
    ? (I = V.verifyAge)
    : T.id === `learn`
      ? (I = V.getHomeworkHelp)
      : T.id === `create`
        ? (I = V.createImage)
        : T.id === `personalize` && (I = V.addPersonalization);
  let Ce = re,
    we = !ue,
    L;
  n[17] !== M || n[18] !== A
    ? ((L = (e) => {
        !e && !S.current && (A(P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_CLOSE_CLICKED), M());
      }),
      (n[17] = M),
      (n[18] = A),
      (n[19] = L))
    : (L = n[19]);
  let R;
  n[20] === p ? (R = n[21]) : ((R = p.formatMessage(V.close)), (n[20] = p), (n[21] = R));
  let Te = ee,
    Ee = a ?? T.image,
    De = p.formatMessage(T.imageAlt),
    H;
  n[22] !== Ee || n[23] !== De
    ? ((H = (0, B.jsx)(`img`, { src: Ee, alt: De, className: `w-full object-cover`, draggable: !1 })),
      (n[22] = Ee),
      (n[23] = De),
      (n[24] = H))
    : (H = n[24]);
  let Ae =
      T.id === `wellbeing` &&
      (0, B.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `pointer-events-none absolute inset-0 flex items-center justify-center`,
        children: (0, B.jsx)(r, { className: `text-default` }),
      }),
    U;
  n[25] !== H || n[26] !== Ae
    ? ((U = (0, B.jsxs)(`div`, { className: `relative w-full`, children: [H, Ae] })),
      (n[25] = H),
      (n[26] = Ae),
      (n[27] = U))
    : (U = n[27]);
  let W;
  n[28] === T.title
    ? (W = n[29])
    : ((W = (0, B.jsx)(`span`, {
        role: `status`,
        "aria-live": `polite`,
        className: `sr-only`,
        children: (0, B.jsx)(v, { ...T.title }),
      })),
      (n[28] = T.title),
      (n[29] = W));
  let G;
  n[30] === T.title
    ? (G = n[31])
    : ((G = (0, B.jsx)(ce, { className: `heading-dialog`, children: (0, B.jsx)(v, { ...T.title }) })),
      (n[30] = T.title),
      (n[31] = G));
  let K;
  n[32] === T.description
    ? (K = n[33])
    : ((K = (0, B.jsx)(s, {
        className: `text-base text-secondary`,
        children: (0, B.jsx)(v, { ...T.description }),
      })),
      (n[32] = T.description),
      (n[33] = K));
  let q;
  n[34] !== W || n[35] !== G || n[36] !== K
    ? ((q = (0, B.jsxs)(`div`, {
        className: `flex flex-col gap-2 px-8 pt-10 pb-6 text-center select-none`,
        children: [W, G, K],
      })),
      (n[34] = W),
      (n[35] = G),
      (n[36] = K),
      (n[37] = q))
    : (q = n[37]);
  let J;
  n[38] === p ? (J = n[39]) : ((J = p.formatMessage(V.progress)), (n[38] = p), (n[39] = J));
  let je;
  n[40] !== p || n[41] !== g
    ? ((je = (e, t) =>
        (0, B.jsx)(
          m,
          {
            color: `ghost`,
            size: `paginationDot`,
            type: `button`,
            "aria-current": t === g ? `page` : void 0,
            "aria-label": p.formatMessage(V.progressPage, { pageNumber: t + 1 }),
            onClick: () => _(t),
            children: (0, B.jsx)(`span`, {
              "aria-hidden": `true`,
              className: `size-1.5 rounded-full ${t === g ? `bg-text` : `bg-text/30`}`,
            }),
          },
          e.id,
        )),
      (n[40] = p),
      (n[41] = g),
      (n[42] = je))
    : (je = n[42]);
  let Me = w.map(je),
    Y;
  n[43] !== J || n[44] !== Me
    ? ((Y = (0, B.jsx)(`div`, {
        role: `group`,
        "aria-label": J,
        className: `flex items-center justify-center pb-6`,
        children: Me,
      })),
      (n[43] = J),
      (n[44] = Me),
      (n[45] = Y))
    : (Y = n[45]);
  let X;
  n[46] !== M || n[47] !== A || n[48] !== g || n[49] !== T.id
    ? ((X = () => {
        T.id === `wellbeing`
          ? (A(P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_RETURN_TO_CHAT_CLICKED), M())
          : (A(
              T.id === `intro`
                ? P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_EXPLORE_CLICKED
                : P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_NEXT_CLICKED,
            ),
            _(g + 1));
      }),
      (n[46] = M),
      (n[47] = A),
      (n[48] = g),
      (n[49] = T.id),
      (n[50] = X))
    : (X = n[50]);
  let Z;
  n[51] === F ? (Z = n[52]) : ((Z = (0, B.jsx)(v, { ...F })), (n[51] = F), (n[52] = Z));
  let Q;
  n[53] !== X || n[54] !== Z
    ? ((Q = (0, B.jsx)(m, {
        color: `primary`,
        size: `beaconCarousel`,
        radius: `full`,
        className: `sm:order-2`,
        onClick: X,
        children: Z,
      })),
      (n[53] = X),
      (n[54] = Z),
      (n[55] = Q))
    : (Q = n[55]);
  let Ne = T.id === `intro` && pe,
    Pe;
  n[56] === I ? (Pe = n[57]) : ((Pe = (0, B.jsx)(v, { ...I })), (n[56] = I), (n[57] = Pe));
  let Fe;
  n[58] !== xe || n[59] !== Ne || n[60] !== Pe
    ? ((Fe = (0, B.jsx)(m, {
        color: `secondary`,
        size: `beaconCarousel`,
        radius: `full`,
        loading: Ne,
        className: `sm:order-1`,
        onClick: xe,
        children: Pe,
      })),
      (n[58] = xe),
      (n[59] = Ne),
      (n[60] = Pe),
      (n[61] = Fe))
    : (Fe = n[61]);
  let Ie;
  n[62] !== Q || n[63] !== Fe
    ? ((Ie = (0, B.jsxs)(`div`, {
        className: `flex flex-col items-stretch justify-center gap-3 px-6 pb-8 sm:flex-row sm:flex-wrap sm:items-center`,
        children: [Q, Fe],
      })),
      (n[62] = Q),
      (n[63] = Fe),
      (n[64] = Ie))
    : (Ie = n[64]);
  let $;
  n[65] !== Te || n[66] !== U || n[67] !== q || n[68] !== Y || n[69] !== Ie
    ? (($ = (0, B.jsxs)(Te, { variant: `chatgpt`, size: `viewport`, children: [U, q, Y, Ie] })),
      (n[65] = Te),
      (n[66] = U),
      (n[67] = q),
      (n[68] = Y),
      (n[69] = Ie),
      (n[70] = $))
    : ($ = n[70]);
  let Le;
  return (
    n[71] !== Ce || n[72] !== L || n[73] !== R || n[74] !== $ || n[75] !== we
      ? ((Le = (0, B.jsx)(Ce, {
          open: we,
          onOpenChange: L,
          size: `beacon`,
          variant: `beacon`,
          dialogCloseLabel: R,
          children: $,
        })),
        (n[71] = Ce),
        (n[72] = L),
        (n[73] = R),
        (n[74] = $),
        (n[75] = we),
        (n[76] = Le))
      : (Le = n[76]),
    Le
  );
}
var Oe, z, B, V, ke;
function H() {
  return (H = e(() => {
    ((Oe = d()),
      M(),
      g(),
      (z = i()),
      p(),
      l(),
      w(),
      h(),
      o(),
      a(),
      S(),
      f(),
      O(),
      n(),
      A(),
      D(),
      Te(),
      (B = c()),
      (V = ie({
        introTitle: {
          id: `chatgpt.pepper.onboarding.intro.title`,
          defaultMessage: `About your ChatGPT experience`,
          description: `Heading in the first page of a teen's ChatGPT onboarding dialog, introducing the experience after sign-up.`,
        },
        introDescription: {
          id: `chatgpt.pepper.onboarding.intro.description`,
          defaultMessage: `Your experience includes extra tools and settings for teens that support learning, creativity, and everyday life.`,
          description: `Description on the first page of ChatGPT for Teens onboarding, explaining which areas of life the new tools support.`,
        },
        introImageAlt: {
          id: `chatgpt.pepper.onboarding.intro.image.alt`,
          defaultMessage: `A collage of ChatGPT features available to teens`,
          description: `Alternative text for the illustration on the first page of ChatGPT for Teens onboarding, showing several learning and creative features.`,
        },
        learnTitle: {
          id: `chatgpt.pepper.onboarding.learn.title`,
          defaultMessage: `Learn it your way`,
          description: `Heading on the learning page of ChatGPT for Teens onboarding, introducing guided homework help.`,
        },
        learnDescription: {
          id: `chatgpt.pepper.onboarding.learn.description`,
          defaultMessage: `When you want to figure it out yourself, ChatGPT can guide you with questions and steps along the way.`,
          description: `Description on the learning page of ChatGPT for Teens onboarding, explaining step-by-step support rather than a direct answer.`,
        },
        learnImageAlt: {
          id: `chatgpt.pepper.onboarding.learn.image.alt`,
          defaultMessage: `ChatGPT offering step-by-step help with learning`,
          description: `Alternative text for the illustration on the learning page of ChatGPT for Teens onboarding.`,
        },
        createTitle: {
          id: `chatgpt.pepper.onboarding.create.title`,
          defaultMessage: `Create images worth sharing`,
          description: `Heading on the image creation page of ChatGPT for Teens onboarding.`,
        },
        createDescription: {
          id: `chatgpt.pepper.onboarding.create.description`,
          defaultMessage: `Design a custom emoji, explore a new style, or refresh your room in seconds.`,
          description: `Description on the image creation page of ChatGPT for Teens onboarding, listing examples of creative image ideas.`,
        },
        createImageAlt: {
          id: `chatgpt.pepper.onboarding.create.image.alt`,
          defaultMessage: `A collage of images created with ChatGPT`,
          description: `Alternative text for the illustration on the image creation page of ChatGPT for Teens onboarding.`,
        },
        personalizeTitle: {
          id: `chatgpt.pepper.onboarding.personalize.title`,
          defaultMessage: `Personalize ChatGPT`,
          description: `Heading on the personalization page of ChatGPT for Teens onboarding.`,
        },
        personalizeDescription: {
          id: `chatgpt.pepper.onboarding.personalize.description`,
          defaultMessage: `Choose a color and voice that matches your vibe.`,
          description: `Description on the personalization page of ChatGPT for Teens onboarding, encouraging a teen to change ChatGPT's color and voice.`,
        },
        personalizeImageAlt: {
          id: `chatgpt.pepper.onboarding.personalize.image.alt`,
          defaultMessage: `Three colorful ChatGPT themes on a pastel background`,
          description: `Alternative text for the illustration on the personalization page of ChatGPT for Teens onboarding.`,
        },
        wellbeingTitle: {
          id: `chatgpt.pepper.onboarding.wellbeing.title`,
          defaultMessage: `Supporting your wellbeing`,
          description: `Heading on the final page of ChatGPT for Teens onboarding, introducing safety and wellbeing features.`,
        },
        wellbeingDescription: {
          id: `chatgpt.pepper.onboarding.wellbeing.description`,
          defaultMessage: `ChatGPT takes extra care with sensitive topics, especially for teens, and may remind you to take a break when helpful.`,
          description: `Description on the final page of ChatGPT for Teens onboarding, explaining sensitive-topic care and occasional break reminders.`,
        },
        wellbeingImageAlt: {
          id: `chatgpt.pepper.onboarding.wellbeing.image.alt`,
          defaultMessage: `A shield representing ChatGPT safety protections`,
          description: `Alternative text for the safety illustration on the final wellbeing page of ChatGPT for Teens onboarding.`,
        },
        close: {
          id: `chatgpt.pepper.onboarding.close.button.label`,
          defaultMessage: `Close teen onboarding`,
          description: `Accessible label for closing the ChatGPT for Teens onboarding dialog and acknowledging it as completed.`,
        },
        progress: {
          id: `chatgpt.pepper.onboarding.progress.group.label`,
          defaultMessage: `Onboarding progress`,
          description: `Accessible label for the group of page-navigation controls in the ChatGPT for Teens onboarding dialog.`,
        },
        progressPage: {
          id: `chatgpt.pepper.onboarding.progress.page.button.label`,
          defaultMessage: `Go to page {pageNumber}`,
          description: `Accessible label for a page-navigation button in ChatGPT for Teens onboarding. {pageNumber} is the one-based page number.`,
        },
        explore: {
          id: `chatgpt.pepper.onboarding.explore.button.label`,
          defaultMessage: `Explore`,
          description: `Primary button on the first page of ChatGPT for Teens onboarding; advances to the first feature page.`,
        },
        getHomeworkHelp: {
          id: `chatgpt.pepper.onboarding.learn.action.button.label`,
          defaultMessage: `Get homework help`,
          description: `Secondary button on the learning page of ChatGPT for Teens onboarding; starts a draft chat with a sample math problem.`,
        },
        createImage: {
          id: `chatgpt.pepper.onboarding.create.action.button.label`,
          defaultMessage: `Create an image`,
          description: `Secondary button on the image creation page of ChatGPT for Teens onboarding; opens the Images page.`,
        },
        addPersonalization: {
          id: `chatgpt.pepper.onboarding.personalize.action.button.label`,
          defaultMessage: `Add personalization`,
          description: `Secondary button on the personalization page of ChatGPT for Teens onboarding; opens the guided color and voice selection steps.`,
        },
        learnMore: {
          id: `chatgpt.pepper.onboarding.learn_more.button.label`,
          defaultMessage: `Learn more`,
          description: `Secondary button on the wellbeing page of ChatGPT for Teens onboarding; opens the teen safety protections resource in a browser.`,
        },
        next: {
          id: `chatgpt.pepper.onboarding.next.button.label`,
          defaultMessage: `Next`,
          description: `Primary button on a feature page of ChatGPT for Teens onboarding; advances to the next page.`,
        },
        done: {
          id: `chatgpt.pepper.onboarding.done.button.label`,
          defaultMessage: `Done`,
          description: `Primary button on the final page of new-teen ChatGPT onboarding; completes and closes the dialog.`,
        },
        returnToChat: {
          id: `chatgpt.pepper.onboarding.return_to_chat.button.label`,
          defaultMessage: `Return to Chat`,
          description: `Primary button on the final page of existing-teen ChatGPT onboarding; closes the dialog and returns to chat.`,
        },
        verifyAge: {
          id: `chatgpt.pepper.onboarding.verify_age.button.label`,
          defaultMessage: `I’m 18 or older`,
          description: `Secondary button on the first page of ChatGPT for Teens onboarding for existing users; opens age verification.`,
        },
      })),
      (ke = [
        {
          id: `intro`,
          step: j.CHATGPT_FAMILY_TEEN_ONBOARDING_STEP_SIGNUP_INTRO,
          title: V.introTitle,
          description: V.introDescription,
          image: `https://cdn.openai.com/chatgpt/client/onboarding/pepper_2x.png`,
          imageAlt: V.introImageAlt,
        },
        {
          id: `learn`,
          step: j.CHATGPT_FAMILY_TEEN_ONBOARDING_STEP_GUIDED_LEARNING,
          title: V.learnTitle,
          description: V.learnDescription,
          image: `https://cdn.openai.com/chatgpt/client/onboarding/pepper_2_2x.png`,
          imageAlt: V.learnImageAlt,
        },
        {
          id: `create`,
          step: j.CHATGPT_FAMILY_TEEN_ONBOARDING_STEP_IMAGE_CREATION,
          title: V.createTitle,
          description: V.createDescription,
          image: `https://cdn.openai.com/chatgpt/client/onboarding/pepper_3_2x.png`,
          imageAlt: V.createImageAlt,
        },
        {
          id: `personalize`,
          step: j.CHATGPT_FAMILY_TEEN_ONBOARDING_STEP_PERSONALIZATION,
          title: V.personalizeTitle,
          description: V.personalizeDescription,
          image: `https://cdn.openai.com/chatgpt/client/onboarding/pepper_4_2x.png`,
          imageAlt: V.personalizeImageAlt,
        },
        {
          id: `wellbeing`,
          step: j.CHATGPT_FAMILY_TEEN_ONBOARDING_STEP_WELLBEING,
          title: V.wellbeingTitle,
          description: V.wellbeingDescription,
          image: `https://cdn.openai.com/chatgpt/client/onboarding/pepper_5_2x.png`,
          imageAlt: V.wellbeingImageAlt,
        },
      ]));
  }))();
}
H();
export { Ee as PepperOnboardingModal };
//# sourceMappingURL=modal-183682e27666.js.map
