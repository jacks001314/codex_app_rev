const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./personalization-entry-c6d379c547c0.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AO as r,
  CO as i,
  Cot as ee,
  EK as a,
  Ext as te,
  IDt as o,
  Ixt as ne,
  Pxt as s,
  TJ as c,
  TO as re,
  VDt as ie,
  Vxt as ae,
  _O as oe,
  _xt as l,
  fO as u,
  fPt as d,
  gO as se,
  jDt as f,
  mO as ce,
  oO as le,
  pPt as p,
  t3 as m,
  vO as h,
  vzt as g,
  wot as ue,
  xMt as _,
  yzt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Er as de,
  BDr as fe,
  Cyt as pe,
  JPn as y,
  MA as b,
  NA as me,
  NDr as x,
  QDr as he,
  VDr as S,
  XDr as C,
  ZPn as ge,
  dnn as _e,
  eDr as w,
  fnn as ve,
  iDr as T,
  jDr as ye,
  pOr as E,
  unn as D,
  wyt as O,
} from "./app-initial-5851df3f6cb1.js";
import { n as k, t as A } from "./persona-f5b97c8374bd.js";
import { a as j, c as M, i as be, o as N, r as P, s as xe } from "./chatgpt_family-e849ec087b1a.js";
import { n as F, t as I } from "./chatgpt-accent-messages-b26f4e5e9b2a.js";
function Se(e) {
  let n = (0, we.c)(54),
    { accountId: r, onClose: a, onComplete: te } = e,
    s = ne(ee),
    c = ie(),
    l = ae(E),
    { data: u, isError: d, refetch: se } = ae(ye),
    f = ve(_e()),
    { setAccountAccent: p } = me(f),
    [m, h] = (0, L.useState)(null),
    [g, ue] = (0, L.useState)(!1),
    [_, v] = (0, L.useState)(!1),
    [de, y] = (0, L.useState)(null),
    b = m ?? u?.chatTheme;
  if (l !== r) return null;
  if (de != null) {
    let e;
    n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = () => y(null)), (n[0] = e)) : (e = n[0]);
    let t;
    return (
      n[1] !== de || n[2] !== r || n[3] !== a || n[4] !== te
        ? ((t = (0, R.jsx)(de, { accountId: r, onBack: e, onClose: a, onComplete: te })),
          (n[1] = de),
          (n[2] = r),
          (n[3] = a),
          (n[4] = te),
          (n[5] = t))
        : (t = n[5]),
      t
    );
  }
  let x;
  n[6] !== r || n[7] !== d || n[8] !== g || n[9] !== s || n[10] !== b || n[11] !== p || n[12] !== u
    ? ((x = async () => {
        if (!(g || d || b == null || u == null || s.get(E) !== r)) {
          (ue(!0), v(!1), b !== u.chatTheme && he(s, xe, { accentColor: b }));
          try {
            if ((await p(b), s.get(E) === r)) {
              let e = await Ce();
              s.get(E) === r && y(() => e);
            }
          } catch {
            s.get(E) === r && v(!0);
          }
          ue(!1);
        }
      }),
      (n[6] = r),
      (n[7] = d),
      (n[8] = g),
      (n[9] = s),
      (n[10] = b),
      (n[11] = p),
      (n[12] = u),
      (n[13] = x))
    : (x = n[13]);
  let S = x,
    C;
  n[14] !== a || n[15] !== g
    ? ((C = (e) => {
        !e && !g && a();
      }),
      (n[14] = a),
      (n[15] = g),
      (n[16] = C))
    : (C = n[16]);
  let ge = !g,
    w;
  n[17] === c
    ? (w = n[18])
    : ((w = c.formatMessage({
        id: `chatgpt.pepper.personalization.accent_color.close.button.label`,
        defaultMessage: `Close theme color selection`,
        description: `Accessible label for closing teen theme selection without saving an unconfirmed color`,
      })),
      (n[17] = c),
      (n[18] = w));
  let T;
  n[19] === S
    ? (T = n[20])
    : ((T = (e) => {
        (e.preventDefault(), S());
      }),
      (n[19] = S),
      (n[20] = T));
  let D;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, R.jsx)(oe, {
        className: `heading-dialog`,
        children: (0, R.jsx)(o, {
          id: `chatgpt.pepper.personalization.accent_color.title`,
          defaultMessage: `Choose a theme color`,
          description: `Heading in teen onboarding where the user chooses an account accent color`,
        }),
      })),
      (n[21] = D))
    : (D = n[21]);
  let O;
  n[22] !== d || n[23] !== se
    ? ((O =
        d &&
        (0, R.jsx)(t, {
          type: `button`,
          color: `secondary`,
          onClick: () => void se(),
          children: (0, R.jsx)(o, {
            id: `chatgpt.pepper.personalization.accent_color.retry`,
            defaultMessage: `Couldn’t load your color. Try again`,
            description: `Button that retries loading saved account accent settings in teen onboarding`,
          }),
        })),
      (n[22] = d),
      (n[23] = se),
      (n[24] = O))
    : (O = n[24]);
  let k;
  n[25] !== d || n[26] !== b
    ? ((k =
        !d &&
        b == null &&
        (0, R.jsx)(`p`, {
          role: `status`,
          className: `text-sm text-secondary`,
          children: (0, R.jsx)(o, {
            id: `chatgpt.pepper.personalization.accent_color.loading`,
            defaultMessage: `Loading your color…`,
            description: `Loading state while the saved account accent is fetched for teen onboarding`,
          }),
        })),
      (n[25] = d),
      (n[26] = b),
      (n[27] = k))
    : (k = n[27]);
  let A;
  n[28] !== c || n[29] !== d || n[30] !== g || n[31] !== b || n[32] !== f
    ? ((A =
        !d &&
        b != null &&
        (0, R.jsx)(i, {
          triggerButton: (0, R.jsx)(t, {
            type: `button`,
            color: `secondary`,
            disabled: g,
            "aria-label": c.formatMessage({
              id: `chatgpt.pepper.personalization.accent_color.options.group.label`,
              defaultMessage: `Theme color options`,
              description: `Accessible label for the existing account accent choices in teen onboarding`,
            }),
            children: (0, R.jsx)(o, { ...F[b === `black` && f === `dark` ? `white` : b] }),
          }),
          children: fe.options.map((e) =>
            (0, R.jsx)(
              re.Item,
              {
                onSelect: () => {
                  (h(e), v(!1));
                },
                children: (0, R.jsxs)(`span`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, R.jsx)(`span`, {
                      "aria-hidden": !0,
                      className: `size-3 shrink-0 rounded-full border border-default`,
                      style: { backgroundColor: pe(e, f) },
                    }),
                    (0, R.jsx)(o, { ...F[e === `black` && f === `dark` ? `white` : e] }),
                  ],
                }),
              },
              e,
            ),
          ),
        })),
      (n[28] = c),
      (n[29] = d),
      (n[30] = g),
      (n[31] = b),
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
          children: (0, R.jsx)(o, {
            id: `chatgpt.pepper.personalization.accent_color.continue.error`,
            defaultMessage: `We couldn’t continue. Try again`,
            description: `Error when saving an account color or loading the next voice selection step fails; the user can retry Continue`,
          }),
        })),
      (n[34] = _),
      (n[35] = j));
  let M = d || b == null,
    be;
  n[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, R.jsx)(o, {
        id: `chatgpt.pepper.personalization.accent_color.continue.button.label`,
        defaultMessage: `Continue`,
        description: `Saves the selected account accent color and advances to voice selection in teen onboarding`,
      })),
      (n[36] = be))
    : (be = n[36]);
  let N;
  n[37] !== g || n[38] !== M
    ? ((N = (0, R.jsx)(t, { type: `submit`, color: `primary`, disabled: M, loading: g, children: be })),
      (n[37] = g),
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
  n[46] !== P || n[47] !== T
    ? ((I = (0, R.jsx)(le, {
        className: `select-none`,
        as: `form`,
        variant: `chatgpt`,
        onSubmit: T,
        children: P,
      })),
      (n[46] = P),
      (n[47] = T),
      (n[48] = I))
    : (I = n[48]);
  let Se;
  return (
    n[49] !== I || n[50] !== C || n[51] !== ge || n[52] !== w
      ? ((Se = (0, R.jsx)(ce, {
          open: !0,
          onOpenChange: C,
          size: `beacon`,
          variant: `chatgpt`,
          shouldIgnoreClickOutside: !0,
          showDialogClose: ge,
          dialogCloseLabel: w,
          children: I,
        })),
        (n[49] = I),
        (n[50] = C),
        (n[51] = ge),
        (n[52] = w),
        (n[53] = Se))
      : (Se = n[53]),
    Se
  );
}
async function Ce() {
  let { loadVoicePersonalizationDialog: e } = await d(
    async () => {
      let { loadVoicePersonalizationDialog: e } = await import(`./personalization-entry-c6d379c547c0.js`);
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
    ((we = g()),
      M(),
      s(),
      (L = v()),
      f(),
      S(),
      x(),
      m(),
      h(),
      u(),
      r(),
      C(),
      ue(),
      b(),
      I(),
      O(),
      D(),
      (R = _()),
      p());
  }))();
}
function Ee(e) {
  let t = (0, Oe.c)(2),
    { isLoading: n } = T(),
    r = ae(E);
  if (n || r !== e.accountId) return null;
  let i;
  return (t[0] === e ? (i = t[1]) : ((i = (0, B.jsx)(De, { ...e }, e.accountId)), (t[0] = e), (t[1] = i)), i);
}
function De(e) {
  let n = (0, Oe.c)(77),
    { accountId: r, illustrationSrc: i, includeIntro: s, onClose: c, onComplete: re } = e,
    l = s !== void 0 && s,
    u = ne(ee),
    d = ae(E),
    f = ie(),
    p = te(),
    { client: m } = T(),
    [h, g] = (0, z.useState)(0),
    [ue, _] = (0, z.useState)(!1),
    [v, fe] = (0, z.useState)(!1),
    [pe, y] = (0, z.useState)(!1),
    b = (0, z.useRef)(null),
    me = (0, z.useRef)(!1),
    x;
  n[0] === m
    ? (x = n[1])
    : ((x = () => de(m, `67629032`).get(`disable_homework_helper_onboarding`, !1)), (n[0] = m), (n[1] = x));
  let [S] = (0, z.useState)(x),
    C;
  n[2] !== S || n[3] !== l
    ? ((C = (e) => (l || e.id !== `intro`) && (!S || e.id !== `learn`)), (n[2] = S), (n[3] = l), (n[4] = C))
    : (C = n[4]);
  let _e = ke.filter(C),
    w = _e[h] ?? _e[0],
    ve,
    ye;
  (n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = () => () => {
        b.current?.();
      }),
      (ye = []),
      (n[5] = ve),
      (n[6] = ye))
    : ((ve = n[5]), (ye = n[6])),
    (0, z.useEffect)(ve, ye));
  let D, O;
  if (
    (n[7] !== r || n[8] !== d
      ? ((D = () => {
          d !== r && (b.current?.(), (b.current = null));
        }),
        (O = [r, d]),
        (n[7] = r),
        (n[8] = d),
        (n[9] = D),
        (n[10] = O))
      : ((D = n[9]), (O = n[10])),
    (0, z.useEffect)(D, O),
    (0, z.useEffect)(() => {
      w != null && d === r && he(u, N, { step: w.step });
    }, [r, d, w, u]),
    w == null || d !== r)
  )
    return null;
  let A = (e) => {
      he(u, be, { step: w.step, action: e });
    },
    j;
  n[11] !== c || n[12] !== re
    ? ((j = () => {
        (re?.(), c());
      }),
      (n[11] = c),
      (n[12] = re),
      (n[13] = j))
    : (j = n[13]);
  let M = j,
    xe = () => {
      w.id === `learn`
        ? (A(P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_GET_HOMEWORK_HELP_CLICKED),
          M(),
          p(`/`, {
            state: {
              prefillPrompt: f.formatMessage({
                id: `chatgpt.pepper.onboarding.learn.prompt`,
                defaultMessage: `Help me solve 3(2x-5)=4x+8?`,
                description: `Draft chat prompt inserted into the composer when a teen selects Get homework help in ChatGPT onboarding. Preserve the sample algebra equation; the user can edit the prompt before sending it.`,
              }),
            },
          }))
        : w.id === `create`
          ? (A(P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_CREATE_IMAGE_CLICKED), M(), p(`/images`))
          : w.id === `personalize`
            ? (A(P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_ADD_PERSONALIZATION_CLICKED), _(!0))
            : w.id === `wellbeing`
              ? (A(P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_LEARN_MORE_CLICKED),
                ge({
                  href: `https://chatgpt.com/parent-resources/safety-protections/`,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                }))
              : w.id === `intro` &&
                (A(P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_VERIFY_AGE_CLICKED),
                y(!0),
                (b.current = k({
                  accountId: r,
                  onLoad: () => {
                    (y(!1), (me.current = !0), fe(!0));
                  },
                  onComplete: M,
                  onCancel: () => {
                    ((me.current = !1), y(!1), fe(!1));
                  },
                  onError: () => {
                    ((me.current = !1), y(!1), fe(!1));
                  },
                })));
    };
  if (ue) {
    let e;
    return (
      n[14] !== r || n[15] !== M
        ? ((e = (0, B.jsx)(Se, { accountId: r, onClose: M, onComplete: M })),
          (n[14] = r),
          (n[15] = M),
          (n[16] = e))
        : (e = n[16]),
      e
    );
  }
  let F = V.next;
  w.id === `intro` ? (F = V.explore) : w.id === `wellbeing` && (F = l ? V.done : V.returnToChat);
  let I = V.learnMore;
  w.id === `intro`
    ? (I = V.verifyAge)
    : w.id === `learn`
      ? (I = V.getHomeworkHelp)
      : w.id === `create`
        ? (I = V.createImage)
        : w.id === `personalize` && (I = V.addPersonalization);
  let Ce = ce,
    we = !v,
    L;
  n[17] !== M || n[18] !== A
    ? ((L = (e) => {
        !e && !me.current && (A(P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_CLOSE_CLICKED), M());
      }),
      (n[17] = M),
      (n[18] = A),
      (n[19] = L))
    : (L = n[19]);
  let R;
  n[20] === f ? (R = n[21]) : ((R = f.formatMessage(V.close)), (n[20] = f), (n[21] = R));
  let Te = le,
    Ee = i ?? w.image,
    De = f.formatMessage(w.imageAlt),
    H;
  n[22] !== Ee || n[23] !== De
    ? ((H = (0, B.jsx)(`img`, { src: Ee, alt: De, className: `w-full object-cover`, draggable: !1 })),
      (n[22] = Ee),
      (n[23] = De),
      (n[24] = H))
    : (H = n[24]);
  let Ae =
      w.id === `wellbeing` &&
      (0, B.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `pointer-events-none absolute inset-0 flex items-center justify-center`,
        children: (0, B.jsx)(a, { className: `text-default` }),
      }),
    U;
  n[25] !== H || n[26] !== Ae
    ? ((U = (0, B.jsxs)(`div`, { className: `relative w-full`, children: [H, Ae] })),
      (n[25] = H),
      (n[26] = Ae),
      (n[27] = U))
    : (U = n[27]);
  let W;
  n[28] === w.title
    ? (W = n[29])
    : ((W = (0, B.jsx)(`span`, {
        role: `status`,
        "aria-live": `polite`,
        className: `sr-only`,
        children: (0, B.jsx)(o, { ...w.title }),
      })),
      (n[28] = w.title),
      (n[29] = W));
  let G;
  n[30] === w.title
    ? (G = n[31])
    : ((G = (0, B.jsx)(oe, { className: `heading-dialog`, children: (0, B.jsx)(o, { ...w.title }) })),
      (n[30] = w.title),
      (n[31] = G));
  let K;
  n[32] === w.description
    ? (K = n[33])
    : ((K = (0, B.jsx)(se, {
        className: `text-base text-secondary`,
        children: (0, B.jsx)(o, { ...w.description }),
      })),
      (n[32] = w.description),
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
  n[38] === f ? (J = n[39]) : ((J = f.formatMessage(V.progress)), (n[38] = f), (n[39] = J));
  let je;
  n[40] !== f || n[41] !== h
    ? ((je = (e, n) =>
        (0, B.jsx)(
          t,
          {
            color: `ghost`,
            size: `paginationDot`,
            type: `button`,
            "aria-current": n === h ? `page` : void 0,
            "aria-label": f.formatMessage(V.progressPage, { pageNumber: n + 1 }),
            onClick: () => g(n),
            children: (0, B.jsx)(`span`, {
              "aria-hidden": `true`,
              className: `size-1.5 rounded-full ${n === h ? `bg-text` : `bg-text/30`}`,
            }),
          },
          e.id,
        )),
      (n[40] = f),
      (n[41] = h),
      (n[42] = je))
    : (je = n[42]);
  let Me = _e.map(je),
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
  n[46] !== M || n[47] !== A || n[48] !== h || n[49] !== w.id
    ? ((X = () => {
        w.id === `wellbeing`
          ? (A(P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_RETURN_TO_CHAT_CLICKED), M())
          : (A(
              w.id === `intro`
                ? P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_EXPLORE_CLICKED
                : P.CHATGPT_FAMILY_TEEN_ONBOARDING_ACTION_NEXT_CLICKED,
            ),
            g(h + 1));
      }),
      (n[46] = M),
      (n[47] = A),
      (n[48] = h),
      (n[49] = w.id),
      (n[50] = X))
    : (X = n[50]);
  let Z;
  n[51] === F ? (Z = n[52]) : ((Z = (0, B.jsx)(o, { ...F })), (n[51] = F), (n[52] = Z));
  let Q;
  n[53] !== X || n[54] !== Z
    ? ((Q = (0, B.jsx)(t, {
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
  let Ne = w.id === `intro` && pe,
    Pe;
  n[56] === I ? (Pe = n[57]) : ((Pe = (0, B.jsx)(o, { ...I })), (n[56] = I), (n[57] = Pe));
  let Fe;
  n[58] !== xe || n[59] !== Ne || n[60] !== Pe
    ? ((Fe = (0, B.jsx)(t, {
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
    ((Oe = g()),
      M(),
      s(),
      (z = v()),
      f(),
      l(),
      x(),
      m(),
      h(),
      u(),
      y(),
      c(),
      C(),
      ue(),
      A(),
      w(),
      Te(),
      (B = _()),
      (V = n({
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
//# sourceMappingURL=modal-975d96e52028.js.map
