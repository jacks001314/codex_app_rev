import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  CPt as ee,
  Cot as te,
  IDt as r,
  Ixt as i,
  JR as a,
  Mz as o,
  Nz as s,
  Pxt as c,
  SPt as l,
  VDt as ne,
  Vxt as u,
  YR as re,
  _Mt as d,
  _O as ie,
  _xt as f,
  cO as p,
  fO as m,
  gMt as h,
  hot as ae,
  jDt as g,
  lO as oe,
  lot as _,
  mO as se,
  n4 as ce,
  oO as le,
  t3 as ue,
  t4 as de,
  uO as fe,
  vO as v,
  vzt as y,
  wot as b,
  wxt as x,
  xMt as S,
  yzt as C,
  zxt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as T,
  B5 as E,
  CCt as D,
  Cwr as O,
  DPn as k,
  EPn as pe,
  GMr as A,
  Hor as me,
  Ian as he,
  Ipr as ge,
  Khr as _e,
  L5 as ve,
  Lan as ye,
  MCt as j,
  NCt as be,
  Opr as M,
  Ppr as N,
  SCt as P,
  TPn as xe,
  Vor as Se,
  Whr as Ce,
  XMr as F,
  Xer as we,
  _wr as I,
  a7 as Te,
  abn as Ee,
  b5 as De,
  bgr as Oe,
  dbn as L,
  dgr as ke,
  etr as Ae,
  fbn as je,
  fgr as Me,
  gCt as R,
  ggr as Ne,
  i7 as Pe,
  jCt as Fe,
  lbn as Ie,
  mCt as Le,
  n7 as z,
  o7 as Re,
  obn as B,
  pCt as ze,
  pbn as Be,
  r7 as Ve,
  s7 as He,
  tNr as Ue,
  v8n as V,
  vgr as We,
  vwr as Ge,
  w8n as Ke,
  wpr as H,
  x5 as U,
  xFr as W,
  yFr as G,
  zor as qe,
} from "./app-initial-5851df3f6cb1.js";
import { n as Je, o as Ye, s as K, t as Xe } from "./editor-placeholder-af27987d8f40.js";
import { n as q, t as Ze } from "./appearance-picker-button-c44f9fe2eb96.js";
import { i as Qe, n as J, r as $e, t as et } from "./editor-lazy-b79b8e73f0c9.js";
import { n as tt, r as nt } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
import {
  a as rt,
  c as it,
  i as Y,
  n as at,
  o as ot,
  r as st,
  s as ct,
  t as lt,
} from "./appearance-edit-badge-a9ccad21cf47.js";
function X(e) {
  let n = (0, pt.c)(118),
    {
      ref: ee,
      appearance: a,
      name: s,
      namePending: c,
      identity: l,
      petId: u,
      characterConversationId: d,
      onSave: f,
      variant: m,
      disabled: ae,
      readOnlyName: g,
      onClose: _,
      defaultOpen: ce,
      triggerContent: ue,
      onCloseAutoFocus: v,
      onTrigger: y,
    } = e,
    b = c !== void 0 && c,
    x = l === void 0 ? `orbit-draft` : l,
    S = m === void 0 ? `toolbar` : m,
    C = ae !== void 0 && ae,
    T = g !== void 0 && g,
    E = ce !== void 0 && ce,
    D = i(te),
    O = (0, Z.useContext)(ve),
    k = O == null ? Qe : $e,
    A = ne(),
    me = (0, Z.useId)(),
    he = (0, Z.useId)(),
    ge = s != null && !Be(s) ? s : `dot`,
    _e;
  n[0] !== a || n[1] !== E || n[2] !== _
    ? ((_e = () => (E || _ != null ? { appearance: a, name: null } : null)),
      (n[0] = a),
      (n[1] = E),
      (n[2] = _),
      (n[3] = _e))
    : (_e = n[3]);
  let [j, M] = (0, Z.useState)(_e),
    N = j?.name ?? ge,
    [P, Se] = (0, Z.useState)(!1),
    [Ce, F] = (0, Z.useState)(null),
    [I, Te] = (0, Z.useState)(!1),
    Ee = (0, Z.useRef)(null),
    Oe = (0, Z.useRef)(null),
    L = (0, Z.useRef)(null),
    Ae = (0, Z.useRef)(null),
    je = (0, Z.useRef)(null),
    R = (0, Z.useRef)(!1),
    Ie = re(),
    Le = O == null,
    z;
  n[4] === Le ? (z = n[5]) : ((z = { afterAnimation: Le }), (n[4] = Le), (n[5] = z));
  let B = nt(z),
    [ze, Ve] = (0, Z.useState)(!1),
    Ue = w(x !== `orbit-draft` && Pe, x),
    V = d != null && !Ue,
    We = w(j?.appearance?.avatar === `pet` && u == null ? Re : null, d ?? x),
    Ge = w(a?.avatar === `pet` || j?.appearance?.avatar === `pet` ? He : null, u),
    Ke = u == null ? We?.pet : Ge,
    H = j?.pet === void 0 ? Ke : j.pet,
    U = a?.avatar === `pet` ? Ge : null,
    W = a?.avatar === `pet` && u != null ? null : (a?.avatar ?? null),
    G = j?.appearance?.avatar === `pet` ? H : null,
    qe = j?.appearance?.avatar === `pet` && u != null ? null : (j?.appearance?.avatar ?? null),
    Je = j?.pet === void 0 && j?.appearance?.avatar === `pet` && a?.avatar === `pet`,
    K = !b && (!V || Je || (j?.appearance?.avatar === `pet` ? H != null : ze)),
    q = S === `profile` || S === `hero`,
    J = S === `name` || S === `compact-name`,
    tt;
  n[6] !== x || n[7] !== W || n[8] !== U
    ? ((tt =
        U == null
          ? (0, Q.jsx)(De, { className: `size-full`, avatar: W, identity: x, animated: !1 })
          : (0, Q.jsx)(Ye, { pet: U })),
      (n[6] = x),
      (n[7] = W),
      (n[8] = U),
      (n[9] = tt))
    : (tt = n[9]);
  let rt = tt;
  C && j != null && M(null);
  let it;
  n[10] !== a || n[11] !== C || n[12] !== V || n[13] !== q || n[14] !== _ || n[15] !== Ie || n[16] !== S
    ? ((it = (e) => {
        ot({
          source: e ? Ae.current : je.current,
          destination: () => (e ? je.current : Ae.current),
          reducedMotion: Ie || !R.current || (!q && S !== `compact`) || !V,
          update: () => {
            (M(e && !C ? { appearance: a, name: null } : null), F(null), Te(!1), Ve(!1), e || _?.());
          },
        });
      }),
      (n[10] = a),
      (n[11] = C),
      (n[12] = V),
      (n[13] = q),
      (n[14] = _),
      (n[15] = Ie),
      (n[16] = S),
      (n[17] = it))
    : (it = n[17]);
  let Y = it,
    at;
  (n[18] !== Y || n[19] !== C || n[20] !== V || n[21] !== P || n[22] !== k
    ? ((at = () => ({
        open(e) {
          C || P || ((R.current = e.detail > 0), (L.current = e.currentTarget), V && k(), Y(!0));
        },
      })),
      (n[18] = Y),
      (n[19] = C),
      (n[20] = V),
      (n[21] = P),
      (n[22] = k),
      (n[23] = at))
    : (at = n[23]),
    (0, Z.useImperativeHandle)(ee, at));
  let X;
  n[24] === Y
    ? (X = n[25])
    : ((X = function (e) {
        (Se(!0),
          F(null),
          Promise.resolve()
            .then(e)
            .then(
              (e) => {
                e ? Y(!1) : F(`save`);
              },
              (e) => F(be(e) ? `name` : `save`),
            )
            .finally(() => Se(!1)));
      }),
      (n[24] = Y),
      (n[25] = X));
  let ht = X,
    gt;
  n[26] !== d || n[27] !== C || n[28] !== A || n[29] !== P || n[30] !== _ || n[31] !== T || n[32] !== D
    ? ((gt = function () {
        d == null ||
          P ||
          C ||
          T ||
          (M(null),
          _?.(),
          ye(D, we(d), {
            prefillPrompt: A.formatMessage({
              id: `restricted.aeonAppearancePicker.createPetPrompt`,
              defaultMessage: `Make a pet avatar for yourself based on something you know about me`,
              description: `Draft message placed in the dot assistant's composer when the user chooses to create a pet avatar in its appearance editor. The user can edit it before sending.`,
            }),
            focusComposerNonce: Date.now(),
          }));
      }),
      (n[26] = d),
      (n[27] = C),
      (n[28] = A),
      (n[29] = P),
      (n[30] = _),
      (n[31] = T),
      (n[32] = D),
      (n[33] = gt))
    : (gt = n[33]);
  let _t = gt,
    vt = V ? pe : xe,
    yt;
  n[34] !== vt ||
  n[35] !== j ||
  n[36] !== N ||
  n[37] !== V ||
  n[38] !== A ||
  n[39] !== P ||
  n[40] !== he ||
  n[41] !== me ||
  n[42] !== I ||
  n[43] !== T ||
  n[44] !== D
    ? ((yt =
        j == null
          ? null
          : (0, Q.jsxs)(fe, {
              children: [
                (0, Q.jsx)(`label`, {
                  className: V ? `sr-only` : `text-sm font-medium select-none`,
                  htmlFor: me,
                  children: (0, Q.jsx)(r, {
                    id: `restricted.aeonAppearancePicker.name`,
                    defaultMessage: `Nickname`,
                    description: `Label for the assistant's private nickname in the appearance dialog`,
                  }),
                }),
                (0, Q.jsx)(vt, {
                  id: me,
                  ref: (e) => {
                    e != null && D.set(st, !0);
                  },
                  name: `nickname`,
                  variant: V ? `display` : `default`,
                  "aria-describedby": I ? he : void 0,
                  "aria-invalid": I,
                  autoFocus: !0,
                  onFocus: ft,
                  value: N,
                  placeholder: A.formatMessage({
                    id: `restricted.aeonAppearancePicker.namePlaceholder`,
                    defaultMessage: `Your dot`,
                    description: `Placeholder in the empty nickname field in the dot's appearance editor and character studio. A dot is the user's customizable assistant character. Keep the singular term dot untranslated.`,
                  }),
                  maxLength: 24,
                  rows: V ? 1 : void 0,
                  readOnly: T,
                  disabled: P,
                  onChange: (e) => {
                    (M({ ...j, name: e.target.value.replace(/[\r\n]/g, ``) }), Te(!1));
                  },
                  onKeyDown: (e) => {
                    V &&
                      e.key === `Enter` &&
                      !e.nativeEvent.isComposing &&
                      (e.preventDefault(), e.currentTarget.form?.requestSubmit());
                  },
                  onInvalid: (e) => {
                    (e.preventDefault(), Te(!0), e.currentTarget.focus());
                  },
                }),
                (0, Q.jsx)(`p`, {
                  id: he,
                  className: h(`text-sm text-danger select-none`, !I && (V ? `hidden` : `invisible`)),
                  role: `alert`,
                  children: (0, Q.jsx)(r, {
                    id: `restricted.aeonAppearancePicker.nameFormatError`,
                    defaultMessage: `Use up to 24 characters without backslashes`,
                    description: `Inline error for an invalid assistant nickname. Names can use up to 24 characters but cannot include a backslash.`,
                  }),
                }),
              ],
            })),
      (n[34] = vt),
      (n[35] = j),
      (n[36] = N),
      (n[37] = V),
      (n[38] = A),
      (n[39] = P),
      (n[40] = he),
      (n[41] = me),
      (n[42] = I),
      (n[43] = T),
      (n[44] = D),
      (n[45] = yt))
    : (yt = n[45]);
  let bt = yt,
    xt;
  n[46] !== K || n[47] !== j || n[48] !== N || n[49] !== V || n[50] !== P || n[51] !== Ce
    ? ((xt =
        j == null
          ? null
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                Ce
                  ? (0, Q.jsx)(`p`, {
                      role: `alert`,
                      className: `text-sm text-danger`,
                      children:
                        Ce === `name`
                          ? (0, Q.jsx)(r, { ...Fe.rejected })
                          : (0, Q.jsx)(r, {
                              id: `restricted.aeonAppearancePicker.saveFailed`,
                              defaultMessage: `Couldn’t save your changes. Try again.`,
                              description: `Failure message in the appearance dialog when saving the assistant name and avatar fails. The draft is kept for retry.`,
                            }),
                    })
                  : null,
                (0, Q.jsx)(t, {
                  className: `justify-center`,
                  type: `submit`,
                  color: `primary`,
                  size: `dialog`,
                  loading: P,
                  disabledAppearance: V ? `unchanged` : `dimmed`,
                  disabled: P || N.trim().length === 0 || !K,
                  children: (0, Q.jsx)(r, {
                    id: `restricted.aeonAppearancePicker.save`,
                    defaultMessage: `Save`,
                    description: `Confirm the assistant name and appearance changes`,
                  }),
                }),
                !V &&
                  (0, Q.jsxs)(t, {
                    className: `justify-center`,
                    type: `button`,
                    color: `secondary`,
                    size: `dialog`,
                    disabled: P,
                    onClick: () => M({ ...j, appearance: Ne(j.appearance) }),
                    children: [
                      (0, Q.jsx)(o, { asset: de }),
                      (0, Q.jsx)(r, {
                        id: `restricted.aeonAppearancePicker.randomize`,
                        defaultMessage: `Randomize`,
                        description: `Preview a random assistant appearance without changing its name or saving it`,
                      }),
                    ],
                  }),
              ],
            })),
      (n[46] = K),
      (n[47] = j),
      (n[48] = N),
      (n[49] = V),
      (n[50] = P),
      (n[51] = Ce),
      (n[52] = xt))
    : (xt = n[52]);
  let St = xt,
    Ct = j != null && !C,
    wt;
  n[53] !== Y || n[54] !== V || n[55] !== P || n[56] !== k
    ? ((wt = (e) => {
        P || (e && V && k(), Y(e));
      }),
      (n[53] = Y),
      (n[54] = V),
      (n[55] = P),
      (n[56] = k),
      (n[57] = wt))
    : (wt = n[57]);
  let Tt = V ? `scrollable` : `centered`,
    Et = V ? `mediaDetail` : `default`,
    Dt = !P,
    Ot;
  n[58] === v
    ? (Ot = n[59])
    : ((Ot = (e) => {
        (v?.(e),
          !e.defaultPrevented && L.current?.isConnected && (e.preventDefault(), L.current.focus()),
          (L.current = null));
      }),
      (n[58] = v),
      (n[59] = Ot));
  let kt, At, jt;
  n[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((kt = () => {
        R.current = !0;
      }),
      (At = () => {
        R.current = !0;
      }),
      (jt = () => {
        R.current = !1;
      }),
      (n[60] = kt),
      (n[61] = At),
      (n[62] = jt))
    : ((kt = n[60]), (At = n[61]), (jt = n[62]));
  let Mt;
  n[63] === P
    ? (Mt = n[64])
    : ((Mt = (e) => {
        ((R.current = !1), P && e.preventDefault());
      }),
      (n[63] = P),
      (n[64] = Mt));
  let Nt;
  n[65] !== Ot || n[66] !== Mt
    ? ((Nt = {
        "aria-describedby": void 0,
        onCloseAutoFocus: Ot,
        onPointerDownCapture: kt,
        onPointerDownOutside: At,
        onKeyDownCapture: jt,
        onClick: dt,
        onEscapeKeyDown: Mt,
      }),
      (n[65] = Ot),
      (n[66] = Mt),
      (n[67] = Nt))
    : (Nt = n[67]);
  let Pt;
  n[68] !== C ||
  n[69] !== j ||
  n[70] !== V ||
  n[71] !== x ||
  n[72] !== ge ||
  n[73] !== A ||
  n[74] !== J ||
  n[75] !== B ||
  n[76] !== q ||
  n[77] !== _ ||
  n[78] !== y ||
  n[79] !== k ||
  n[80] !== W ||
  n[81] !== ue ||
  n[82] !== U ||
  n[83] !== S
    ? ((Pt =
        ue ??
        (0, Q.jsx)(t, {
          ref: Oe,
          "aria-label": J
            ? void 0
            : A.formatMessage(
                {
                  id: `restricted.aeonAppearancePicker.trigger.productName.dot`,
                  defaultMessage: `Change your {productName}’s appearance`,
                  description: `Accessible label for changing an assistant's appearance; productName is the untranslated term for the user's agent, not the assistant's custom name`,
                },
                { productName: `dot` },
              ),
          className: h(
            _ != null && `hidden`,
            q && `group/avatar relative touch-none`,
            S === `profile` && `-ms-1`,
            J && `max-w-full [text-align:inherit]`,
          ),
          color: q ? `ghostTertiary` : `ghostActive`,
          radius: J ? `small` : `default`,
          size: S === `toolbar` ? `icon` : `inline`,
          disabled: C,
          onPointerEnter: () => {
            V && B && k();
          },
          onFocus: () => {
            V && B && k();
          },
          onClick: (e) => {
            ((R.current = e.detail > 0),
              e.stopPropagation(),
              y == null ? (L.current = null) : (e.preventDefault(), y(e)));
          },
          children: J
            ? (0, Q.jsx)(`span`, {
                className: h(
                  `px-2.5 py-0.5`,
                  S === `compact-name` ? `truncate` : `line-clamp-3 break-words whitespace-normal`,
                ),
                children: ge,
              })
            : (0, Q.jsxs)(`span`, {
                className: h(
                  `relative flex items-center justify-center`,
                  j != null && (q || S === `compact`) && `invisible`,
                  S === `hero` && `size-16`,
                  S === `compact` && `size-5`,
                  S === `profile` && `size-12`,
                  S === `toolbar` && `size-full`,
                ),
                children: [
                  (0, Q.jsx)(`span`, {
                    ref: Ae,
                    className: `block size-full`,
                    "data-character-artwork": !0,
                    children:
                      U == null
                        ? (0, Q.jsx)(De, {
                            className: `size-full`,
                            avatar: W,
                            identity: x,
                            active: j == null && B,
                            interactionTarget: Oe,
                          })
                        : (0, Q.jsx)(Ye, { pet: U }),
                  }),
                  q ? (0, Q.jsx)(lt, { identity: x, variant: S }) : null,
                ],
              }),
        })),
      (n[68] = C),
      (n[69] = j),
      (n[70] = V),
      (n[71] = x),
      (n[72] = ge),
      (n[73] = A),
      (n[74] = J),
      (n[75] = B),
      (n[76] = q),
      (n[77] = _),
      (n[78] = y),
      (n[79] = k),
      (n[80] = W),
      (n[81] = ue),
      (n[82] = U),
      (n[83] = S),
      (n[84] = Pt))
    : (Pt = n[84]);
  let $;
  n[85] !== K ||
  n[86] !== d ||
  n[87] !== _t ||
  n[88] !== C ||
  n[89] !== j ||
  n[90] !== N ||
  n[91] !== H ||
  n[92] !== V ||
  n[93] !== x ||
  n[94] !== A ||
  n[95] !== P ||
  n[96] !== s ||
  n[97] !== bt ||
  n[98] !== f ||
  n[99] !== qe ||
  n[100] !== rt ||
  n[101] !== G ||
  n[102] !== T ||
  n[103] !== St ||
  n[104] !== ht ||
  n[105] !== Je ||
  n[106] !== Ue
    ? (($ =
        j == null
          ? null
          : (0, Q.jsxs)(le, {
              as: `form`,
              size: V ? void 0 : `viewport`,
              variant: V ? `chatgpt` : `default`,
              onKeyDown: ut,
              onSubmit: (e) => {
                if ((e.preventDefault(), N !== s && (N.length > 24 || N.includes(`\\`)))) {
                  Te(!0);
                  let t = e.currentTarget.elements.namedItem(`nickname`);
                  t instanceof HTMLElement && t.focus();
                  return;
                }
                P ||
                  C ||
                  N.trim().length === 0 ||
                  !K ||
                  ht(async () =>
                    Je
                      ? f(j.appearance, N.trim())
                      : V
                        ? j.appearance?.avatar === `pet` && H != null
                          ? (await f(j.appearance, N.trim(), H))
                            ? (Ee.current?.saveCustom(), !0)
                            : !1
                          : Ee.current
                            ? (await Ee.current.save(T || N.trim() === s ? void 0 : N.trim()), !0)
                            : !1
                        : j.appearance?.avatar === `pet` && H != null
                          ? f(j.appearance, N.trim(), H)
                          : f(j.appearance, N.trim()),
                  );
              },
              children: [
                (0, Q.jsx)(p, {
                  className: V ? `sr-only` : `select-none`,
                  title: (0, Q.jsx)(ie, {
                    children: (0, Q.jsx)(r, {
                      id: `restricted.aeonAppearancePicker.header.productName.dot`,
                      defaultMessage: `Customize your {productName}`,
                      description: `Heading in the assistant appearance picker; productName is the untranslated term for the user's agent, not the assistant's custom name`,
                      values: { productName: (0, Q.jsx)(`strong`, { children: `dot` }) },
                    }),
                  }),
                }),
                V
                  ? (0, Q.jsx)(Z.Suspense, {
                      fallback: (0, Q.jsx)(Xe, {
                        title: bt,
                        footer: St,
                        previewRef: je,
                        previewFallback: rt,
                        onCreatePet: T ? void 0 : _t,
                      }),
                      children: (0, Q.jsx)(et, {
                        ref: Ee,
                        previewRef: je,
                        previewFallback: rt,
                        conversationId: d,
                        onReady: Ve,
                        onCreatePet: T ? void 0 : _t,
                        disabled: P,
                        pet: H,
                        onSelectPet: (e) =>
                          M({
                            ...j,
                            pet: e,
                            appearance: e == null ? null : { avatar: `pet`, color: Me.pet },
                          }),
                        title: bt,
                        footer: St,
                      }),
                    })
                  : (0, Q.jsx)(oe, {
                      spacing: `large`,
                      children: (0, Q.jsxs)(`div`, {
                        className: `grid grid-cols-1 gap-6 sm:grid-cols-2`,
                        children: [
                          (0, Q.jsx)(`div`, { className: `sm:col-start-2 sm:row-start-1`, children: bt }),
                          (0, Q.jsx)(`div`, {
                            className: `flex items-center justify-center sm:col-start-2 sm:row-start-2`,
                            children:
                              G == null
                                ? (0, Q.jsx)(De, {
                                    className: `size-32 sm:size-48`,
                                    avatar: qe,
                                    identity: x,
                                    useSavedAvatar: !1,
                                  })
                                : (0, Q.jsx)(`div`, {
                                    className: `size-32 sm:size-48`,
                                    children: (0, Q.jsx)(Ye, { pet: G }),
                                  }),
                          }),
                          (0, Q.jsx)(Ze, {
                            className: `sm:col-start-1 sm:row-span-3 sm:row-start-1`,
                            "aria-label": A.formatMessage(
                              {
                                id: `restricted.aeonAppearancePicker.avatarGroup.productName.dot`,
                                defaultMessage: `Your {productName}’s avatar`,
                                description: `Accessible label for the assistant avatar picker group; productName is the untranslated term for the user's agent, not the assistant's custom name`,
                              },
                              { productName: `dot` },
                            ),
                            variant: `artwork`,
                            disabled: P,
                            options: ke.map((e, t) => ({
                              id: e,
                              icon: (0, Q.jsx)(De, {
                                className: `size-full`,
                                avatar: e,
                                identity: x,
                                useSavedAvatar: !1,
                              }),
                              label: Ue
                                ? A.formatMessage(
                                    {
                                      id: `restricted.aeonAppearancePicker.legacyAvatar`,
                                      defaultMessage: `Use avatar {number}`,
                                      description: `Accessible label for choosing a numbered abstract avatar for a legacy agent`,
                                    },
                                    { number: t + 1 },
                                  )
                                : A.formatMessage(mt[e]),
                            })),
                            selectedId: j.appearance?.avatar ?? null,
                            onChange: (e) => M({ ...j, appearance: { color: Me[e], avatar: e } }),
                          }),
                          (0, Q.jsx)(`div`, {
                            className: `flex flex-col justify-end gap-3 sm:col-start-2 sm:row-start-3`,
                            children: St,
                          }),
                        ],
                      }),
                    }),
              ],
            })),
      (n[85] = K),
      (n[86] = d),
      (n[87] = _t),
      (n[88] = C),
      (n[89] = j),
      (n[90] = N),
      (n[91] = H),
      (n[92] = V),
      (n[93] = x),
      (n[94] = A),
      (n[95] = P),
      (n[96] = s),
      (n[97] = bt),
      (n[98] = f),
      (n[99] = qe),
      (n[100] = rt),
      (n[101] = G),
      (n[102] = T),
      (n[103] = St),
      (n[104] = ht),
      (n[105] = Je),
      (n[106] = Ue),
      (n[107] = $))
    : ($ = n[107]);
  let Ft;
  return (
    n[108] !== P ||
    n[109] !== Ct ||
    n[110] !== wt ||
    n[111] !== Tt ||
    n[112] !== Et ||
    n[113] !== Dt ||
    n[114] !== Nt ||
    n[115] !== Pt ||
    n[116] !== $
      ? ((Ft = (0, Q.jsx)(se, {
          open: Ct,
          onOpenChange: wt,
          size: `xxwide`,
          contentClassName: ct.modal,
          overlayClassName: ct.backdrop,
          contentPosition: Tt,
          variant: Et,
          showDialogClose: Dt,
          shouldIgnoreClickOutside: P,
          contentProps: Nt,
          triggerContent: Pt,
          children: $,
        })),
        (n[108] = P),
        (n[109] = Ct),
        (n[110] = wt),
        (n[111] = Tt),
        (n[112] = Et),
        (n[113] = Dt),
        (n[114] = Nt),
        (n[115] = Pt),
        (n[116] = $),
        (n[117] = Ft))
      : (Ft = n[117]),
    Ft
  );
}
function ut(e) {
  e.key === `Enter` && e.nativeEvent.isComposing && e.preventDefault();
}
function dt(e) {
  return e.stopPropagation();
}
function ft(e) {
  let t = e.currentTarget.value.length;
  e.currentTarget.setSelectionRange(t, t);
}
var pt, Z, Q, mt;
function ht() {
  return (ht = e(() => {
    ((pt = y()),
      ce(),
      d(),
      c(),
      (Z = C()),
      g(),
      ue(),
      v(),
      m(),
      s(),
      k(),
      a(),
      q(),
      b(),
      Ae(),
      tt(),
      rt(),
      J(),
      Je(),
      E(),
      K(),
      We(),
      U(),
      j(),
      Te(),
      at(),
      Y(),
      je(),
      Ve(),
      he(),
      it(),
      (Q = S()),
      (mt = n({
        sunglasses: {
          id: `restricted.aeonAppearancePicker.avatar.sunglasses`,
          defaultMessage: `Use the sunglasses avatar`,
          description: `Accessible label for selecting the dot avatar with sunglasses`,
        },
        "bow-tie": {
          id: `restricted.aeonAppearancePicker.avatar.bow-tie`,
          defaultMessage: `Use the bow tie avatar`,
          description: `Accessible label for selecting the dot avatar with a bow tie`,
        },
        "balancing-ball": {
          id: `restricted.aeonAppearancePicker.avatar.balancing-ball`,
          defaultMessage: `Use the blossom avatar`,
          description: `Accessible label for selecting the blossom-shaped dot avatar`,
        },
        cowboy: {
          id: `restricted.aeonAppearancePicker.avatar.cowboy`,
          defaultMessage: `Use the cowboy hat avatar`,
          description: `Accessible label for selecting the dot avatar with a cowboy hat`,
        },
        beanie: {
          id: `restricted.aeonAppearancePicker.avatar.beanie`,
          defaultMessage: `Use the beanie avatar`,
          description: `Accessible label for selecting the dot avatar with a beanie`,
        },
        mustache: {
          id: `restricted.aeonAppearancePicker.avatar.mustache`,
          defaultMessage: `Use the red avatar`,
          description: `Accessible label for selecting the red circular dot avatar`,
        },
        pirate: {
          id: `restricted.aeonAppearancePicker.avatar.pirate`,
          defaultMessage: `Use the pirate avatar`,
          description: `Accessible label for selecting the dot avatar with an eye patch`,
        },
        feather: {
          id: `restricted.aeonAppearancePicker.avatar.feather`,
          defaultMessage: `Use the feather avatar`,
          description: `Accessible label for selecting the dot avatar with a feather`,
        },
        monocle: {
          id: `restricted.aeonAppearancePicker.avatar.monocle`,
          defaultMessage: `Use the monocle avatar`,
          description: `Accessible label for selecting the dot avatar with a monocle`,
        },
        "party-hat": {
          id: `restricted.aeonAppearancePicker.avatar.party-hat`,
          defaultMessage: `Use the triangle avatar`,
          description: `Accessible label for selecting the triangular dot avatar`,
        },
        bowler: {
          id: `restricted.aeonAppearancePicker.avatar.bowler`,
          defaultMessage: `Use the bowler hat avatar`,
          description: `Accessible label for selecting the dot avatar with a bowler hat`,
        },
        headphones: {
          id: `restricted.aeonAppearancePicker.avatar.headphones`,
          defaultMessage: `Use the blob avatar`,
          description: `Accessible label for selecting the blob-shaped dot avatar`,
        },
      })));
  }))();
}
function gt(e) {
  let t = (0, _t.c)(40),
    {
      ref: n,
      conversationId: r,
      hostId: a,
      variant: o,
      onClose: s,
      triggerContent: c,
      onCloseAutoFocus: l,
      onTrigger: re,
    } = e,
    d = i(te),
    ie = ne(),
    { renameThread: f } = R(),
    p = x(),
    m = u(A),
    h = u(F),
    g = w(a ?? T, r),
    oe;
  t[0] === g ? (oe = t[1]) : ((oe = Ce(g)), (t[0] = g), (t[1] = oe));
  let _ = oe === `durable`,
    { data: se } = w(H, _ ? r : null),
    ce = w(B, r),
    le;
  t[2] !== r || t[3] !== g
    ? ((le = { hostId: g, threadId: r }), (t[2] = r), (t[3] = g), (t[4] = le))
    : (le = t[4]);
  let ue = w(Ie, le) ?? ce,
    de = w(Ke, r),
    fe;
  t[5] !== r || t[6] !== de || t[7] !== p
    ? ((fe =
        de ||
        (p.state?.archivedConversationPreview === !0 &&
          Ge(I({ pathname: p.pathname, routeTemplate: p.pathname })) === r)),
      (t[5] = r),
      (t[6] = de),
      (t[7] = p),
      (t[8] = fe))
    : (fe = t[8]);
  let v = fe,
    y = w(z, r),
    b;
  t[9] !== m ||
  t[10] !== r ||
  t[11] !== g ||
  t[12] !== ie ||
  t[13] !== _ ||
  t[14] !== a ||
  t[15] !== v ||
  t[16] !== f ||
  t[17] !== d ||
  t[18] !== h
    ? ((b = async function (e, t, n) {
        let te = G(),
          i = () => d.get(A) === m && d.get(F) === h && (a ?? d.get(T, r)) === g && G() === te;
        if (!i()) return !1;
        let o = d.get(Ie, { hostId: g, threadId: r }) ?? d.get(B, r);
        if (
          (!v &&
            t !== o &&
            (_
              ? await D(d, { conversationId: r, hostId: g, title: t, undoLabel: Le.renameThreadUndone })
              : await f({
                  conversationId: r,
                  hostId: g,
                  previousTitle: o ?? void 0,
                  title: t,
                  showErrorToast: !1,
                })),
          !i())
        )
          return !1;
        let s = d.get(z, r);
        if (e == null || (n == null && e.avatar === s?.avatar && e.color === s.color)) return !0;
        if (!_) return (Oe(r, e), !0);
        let c = d.query.snapshot(H, r),
          l = d.query.snapshot(Se);
        try {
          let t = await d.query.getOrFetch(H, r);
          if (!i() || t == null) return !1;
          let ee = await ge(d, r, e, { pet: n, profile: t, onlyIfDefault: !1 });
          if (ee != null) {
            if ((await Promise.all([c.cancel(), l.cancel()]), !i())) return !1;
            (qe(d, r, ee), l.invalidate());
          }
          return i();
        } catch (e) {
          let t = e;
          return i()
            ? (ee.warning(`Failed to update an Orbit avatar`, { safe: {}, sensitive: { error: t } }),
              d
                .get(ae)
                .danger(
                  ie.formatMessage({
                    id: `restricted.aeonAppearancePicker.saveError.dot`,
                    defaultMessage: `Unable to save your dot’s avatar`,
                    description: `Error toast when a selected dot avatar could not be saved. Keep the singular term dot untranslated.`,
                  }),
                  { errorAnalytics: { toastId: `restricted.aeonAppearancePicker.saveError` } },
                ),
              !1)
            : !1;
        }
      }),
      (t[9] = m),
      (t[10] = r),
      (t[11] = g),
      (t[12] = ie),
      (t[13] = _),
      (t[14] = a),
      (t[15] = v),
      (t[16] = f),
      (t[17] = d),
      (t[18] = h),
      (t[19] = b))
    : (b = t[19]);
  let S = b,
    C;
  t[20] !== m || t[21] !== r || t[22] !== g || t[23] !== h
    ? ((C = JSON.stringify([m, h, g, r])), (t[20] = m), (t[21] = r), (t[22] = g), (t[23] = h), (t[24] = C))
    : (C = t[24]);
  let E = ue ?? null,
    O = _ && se == null,
    k = _ ? r : void 0,
    pe;
  return (
    t[25] !== y ||
    t[26] !== r ||
    t[27] !== s ||
    t[28] !== l ||
    t[29] !== re ||
    t[30] !== v ||
    t[31] !== n ||
    t[32] !== S ||
    t[33] !== C ||
    t[34] !== E ||
    t[35] !== O ||
    t[36] !== k ||
    t[37] !== c ||
    t[38] !== o
      ? ((pe = (0, vt.jsx)(
          X,
          {
            ref: n,
            appearance: y,
            name: E,
            namePending: O,
            identity: r,
            characterConversationId: k,
            variant: o,
            triggerContent: c,
            onCloseAutoFocus: l,
            onTrigger: re,
            readOnlyName: v,
            onClose: s,
            onSave: S,
          },
          C,
        )),
        (t[25] = y),
        (t[26] = r),
        (t[27] = s),
        (t[28] = l),
        (t[29] = re),
        (t[30] = v),
        (t[31] = n),
        (t[32] = S),
        (t[33] = C),
        (t[34] = E),
        (t[35] = O),
        (t[36] = k),
        (t[37] = c),
        (t[38] = o),
        (t[39] = pe))
      : (pe = t[39]),
    pe
  );
}
var _t, vt;
function yt() {
  return (yt = e(() => {
    ((_t = y()),
      c(),
      g(),
      f(),
      V(),
      Ue(),
      _(),
      Ee(),
      ze(),
      b(),
      O(),
      l(),
      W(),
      ht(),
      We(),
      _e(),
      N(),
      P(),
      L(),
      me(),
      M(),
      Ve(),
      (vt = S()));
  }))();
}
export { ht as i, yt as n, X as r, gt as t };
//# sourceMappingURL=aeon-appearance-picker-37d157024d1d.js.map
