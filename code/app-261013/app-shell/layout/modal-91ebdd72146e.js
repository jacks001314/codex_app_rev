import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CJ as t,
  Cot as n,
  EPt as r,
  Ext as i,
  Fz as a,
  IDt as ee,
  Ixt as te,
  Pxt as o,
  Pz as s,
  TJ as c,
  TLt as l,
  VDt as ne,
  _Mt as u,
  _O as re,
  _xt as ie,
  fO as ae,
  gMt as d,
  gO as oe,
  jDt as f,
  mO as se,
  oO as ce,
  pLt as p,
  vO as m,
  vzt as h,
  wot as g,
  xMt as _,
  yzt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  BIr as y,
  EQt as le,
  IIr as b,
  JPn as x,
  XPn as ue,
  Ymr as S,
  e$t as C,
  ehr as w,
  ejt as T,
  t$t as E,
  tjt as D,
  wQt as O,
  xPn as k,
  yPn as A,
} from "./app-initial-5851df3f6cb1.js";
import { Fv as de, Iv as fe, Nv as j } from "./app-primary-fe8a450b3b04.js";
import { n as M, t as pe } from "./actions-e5d1d3a8760e.js";
function N(e) {
  return [
    `financial_services_terms_homepage_modal`,
    `financial_services_terms_work_tab_home_modal`,
    `financial_services_terms_codex_home_modal`,
  ].includes(e);
}
function P(e) {
  let t = (0, V.c)(7),
    { text: n, allowExternalActions: r } = e,
    i;
  if (t[0] !== r || t[1] !== n) {
    let e;
    (t[3] === r
      ? (e = t[4])
      : ((e = (e) => {
          let { children: t, href: n } = e;
          return r && n?.startsWith(`https://`)
            ? (0, H.jsx)(A, {
                href: n,
                openTarget: `external-browser`,
                initiator: `open_in_browser_bridge`,
                underline: `always`,
                children: t,
              })
            : (0, H.jsx)(H.Fragment, { children: t });
        }),
        (t[3] = r),
        (t[4] = e)),
      (i = D(U.lexer(n), {
        components: {
          blockquote: B,
          code: B,
          del: B,
          h1: B,
          h2: B,
          h3: B,
          h4: B,
          h5: B,
          h6: B,
          pre: B,
          hr: z,
          img: R,
          ul: L,
          ol: I,
          p: F,
          a: e,
        },
      })),
      (t[0] = r),
      (t[1] = n),
      (t[2] = i));
  } else i = t[2];
  let a;
  return (
    t[5] === i ? (a = t[6]) : ((a = (0, H.jsx)(H.Fragment, { children: i })), (t[5] = i), (t[6] = a)),
    a
  );
}
function F(e) {
  let { children: t } = e;
  return (0, H.jsx)(`p`, { className: `m-0`, children: t });
}
function I(e) {
  let { children: t } = e;
  return (0, H.jsx)(`ol`, { className: `list-decimal ps-5 text-start`, children: t });
}
function L(e) {
  let { children: t } = e;
  return (0, H.jsx)(`ul`, { className: `list-disc ps-5 text-start`, children: t });
}
function R() {
  return null;
}
function z() {
  return null;
}
function B(e) {
  let t = (0, V.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n ? (r = t[1]) : ((r = (0, H.jsx)(H.Fragment, { children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
var V, H, U;
function W() {
  return (W = e(() => {
    ((V = h()), y(), k(), T(), (H = _()), (U = new b({ gfm: !1 })));
  }))();
}
var G, me, he, ge, K, q, _e, J, ve, ye, be, Y, xe, Se, Ce, we, X;
function Te() {
  return (Te = e(() => {
    ((G = `_surface_2gpyy_2`),
      (me = `_header_2gpyy_2`),
      (he = `_background_2gpyy_2`),
      (ge = `_cards_2gpyy_2`),
      (K = `_backCard_2gpyy_2`),
      (q = `_middleCard_2gpyy_2`),
      (_e = `_frontCard_2gpyy_2`),
      (J = `_cardHeading_2gpyy_2`),
      (ve = `_cardIcon_2gpyy_2`),
      (ye = `_cardTitle_2gpyy_2`),
      (be = `_cardDescription_2gpyy_2`),
      (Y = `_close_2gpyy_2`),
      (xe = `_body_2gpyy_2`),
      (Se = `_title_2gpyy_2`),
      (Ce = `_description_2gpyy_2`),
      (we = `_actions_2gpyy_2`),
      (X = {
        surface: G,
        header: me,
        background: he,
        cards: ge,
        backCard: K,
        middleCard: q,
        frontCard: _e,
        cardHeading: J,
        cardIcon: ve,
        cardTitle: ye,
        cardDescription: be,
        close: Y,
        body: xe,
        title: Se,
        description: Ce,
        actions: we,
      }));
  }))();
}
function Ee(e) {
  let n = (0, De.c)(108),
    r,
    i,
    te,
    o,
    s,
    c,
    l;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (te = n[3]), (o = n[4]), (s = n[5]), (c = n[6]), (l = n[7]))
    : (({
        beacon: i,
        allowRemoteImages: l,
        onDismiss: o,
        onOpen: s,
        onResolve: c,
        onCompleted: te,
        ...r
      } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = i),
      (n[3] = te),
      (n[4] = o),
      (n[5] = s),
      (n[6] = c),
      (n[7] = l));
  let u = l === void 0 || l,
    ie = ne(),
    ae = (0, Oe.useRef)(!1),
    d;
  n[8] === te
    ? (d = n[9])
    : ((d = () => {
        ae.current || ((ae.current = !0), te?.());
      }),
      (n[8] = te),
      (n[9] = d));
  let f = d,
    ce;
  n[10] !== f || n[11] !== o
    ? ((ce = () => {
        (o(), f());
      }),
      (n[10] = f),
      (n[11] = o),
      (n[12] = ce))
    : (ce = n[12]);
  let p = ce,
    m = a(),
    h,
    g,
    _,
    v,
    y,
    le,
    b,
    x,
    ue,
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    k;
  if (
    n[13] !== u ||
    n[14] !== i.custom_fields?.task_card ||
    n[15] !== i.ui_info.header_image_url ||
    n[16] !== i.ui_info.header_image_url_dark ||
    n[17] !== p ||
    n[18] !== m ||
    n[19] !== s
  ) {
    g = ke.safeParse(i.custom_fields?.task_card);
    let e = g.success ? g.data.icon_image_url : void 0,
      t = m ? (i.ui_info.header_image_url_dark ?? i.ui_info.header_image_url) : i.ui_info.header_image_url;
    ((h = se),
      (y = !0),
      (le = `beacon`),
      (b = `chatgptConfirmation`),
      (x = !1),
      (ue = !0),
      n[37] === s
        ? (S = n[38])
        : ((S = { className: X.surface, onOpenAutoFocus: s }), (n[37] = s), (n[38] = S)),
      n[39] === p
        ? (C = n[40])
        : ((C = (e) => {
            e || p();
          }),
          (n[39] = p),
          (n[40] = C)),
      (_ = X.header),
      n[41] !== u || n[42] !== t
        ? ((v =
            u && t != null && fe(t)
              ? (0, Z.jsx)(`div`, {
                  "aria-hidden": `true`,
                  className: X.background,
                  style: { backgroundImage: `url(${t})` },
                })
              : null),
          (n[41] = u),
          (n[42] = t),
          (n[43] = v))
        : (v = n[43]),
      (D = X.cards),
      n[44] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((O = (0, Z.jsx)(`div`, { className: X.backCard })),
          (k = (0, Z.jsx)(`div`, { className: X.middleCard })),
          (n[44] = O),
          (n[45] = k))
        : ((O = n[44]), (k = n[45])),
      (E = X.frontCard),
      (w = X.cardHeading),
      (T =
        u && e != null && fe(e)
          ? (0, Z.jsx)(`img`, { src: e, alt: ``, "aria-hidden": !0, draggable: !1, className: X.cardIcon })
          : null),
      (n[13] = u),
      (n[14] = i.custom_fields?.task_card),
      (n[15] = i.ui_info.header_image_url),
      (n[16] = i.ui_info.header_image_url_dark),
      (n[17] = p),
      (n[18] = m),
      (n[19] = s),
      (n[20] = h),
      (n[21] = g),
      (n[22] = _),
      (n[23] = v),
      (n[24] = y),
      (n[25] = le),
      (n[26] = b),
      (n[27] = x),
      (n[28] = ue),
      (n[29] = S),
      (n[30] = C),
      (n[31] = w),
      (n[32] = T),
      (n[33] = E),
      (n[34] = D),
      (n[35] = O),
      (n[36] = k));
  } else
    ((h = n[20]),
      (g = n[21]),
      (_ = n[22]),
      (v = n[23]),
      (y = n[24]),
      (le = n[25]),
      (b = n[26]),
      (x = n[27]),
      (ue = n[28]),
      (S = n[29]),
      (C = n[30]),
      (w = n[31]),
      (T = n[32]),
      (E = n[33]),
      (D = n[34]),
      (O = n[35]),
      (k = n[36]));
  let A;
  n[46] !== g.data || n[47] !== g.success
    ? ((A = g.success
        ? g.data.title
        : (0, Z.jsx)(ee, {
            id: `chatgpt.tasks.nux.task_card.title.flight_tracker`,
            defaultMessage: `Flight tracker`,
            description: `Short title on the Flight Tracker example card in the Tasks onboarding modal. The control treatment shows ChatGPT monitoring flight options. The client also uses this copy if server-provided card fields are unavailable.`,
          })),
      (n[46] = g.data),
      (n[47] = g.success),
      (n[48] = A))
    : (A = n[48]);
  let de;
  n[49] === A
    ? (de = n[50])
    : ((de = (0, Z.jsx)(`div`, { className: X.cardTitle, children: A })), (n[49] = A), (n[50] = de));
  let j;
  n[51] !== de || n[52] !== w || n[53] !== T
    ? ((j = (0, Z.jsxs)(`div`, { className: w, children: [T, de] })),
      (n[51] = de),
      (n[52] = w),
      (n[53] = T),
      (n[54] = j))
    : (j = n[54]);
  let M;
  n[55] !== g.data || n[56] !== g.success
    ? ((M = g.success
        ? g.data.description
        : (0, Z.jsx)(ee, {
            id: `chatgpt.tasks.nux.task_card.description.flight_tracker`,
            defaultMessage: `Help me find flights within my budget for a specific time.`,
            description: `One-sentence example request on a task card in the Tasks onboarding modal. The control treatment demonstrates ChatGPT monitoring flight options. The client also uses this copy if server-provided card fields are unavailable.`,
          })),
      (n[55] = g.data),
      (n[56] = g.success),
      (n[57] = M))
    : (M = n[57]);
  let N;
  n[58] === M
    ? (N = n[59])
    : ((N = (0, Z.jsx)(`div`, { className: X.cardDescription, children: M })), (n[58] = M), (n[59] = N));
  let P;
  n[60] !== j || n[61] !== N || n[62] !== E
    ? ((P = (0, Z.jsxs)(`div`, { className: E, children: [j, N] })),
      (n[60] = j),
      (n[61] = N),
      (n[62] = E),
      (n[63] = P))
    : (P = n[63]);
  let F;
  n[64] !== P || n[65] !== D || n[66] !== O || n[67] !== k
    ? ((F = (0, Z.jsxs)(`div`, { className: D, children: [O, k, P] })),
      (n[64] = P),
      (n[65] = D),
      (n[66] = O),
      (n[67] = k),
      (n[68] = F))
    : (F = n[68]);
  let I;
  n[69] === ie
    ? (I = n[70])
    : ((I = ie.formatMessage({
        id: `TasksNuxModal.closeButton.ariaLabel`,
        defaultMessage: `Close`,
        description: `Accessible label for the circular icon-only close button in the Tasks onboarding modal shown to eligible ChatGPT users on the home screen. Activating it dismisses the modal. Keep this label concise; it is announced by assistive technology and is not visible on screen.`,
      })),
      (n[69] = ie),
      (n[70] = I));
  let L;
  n[71] === Symbol.for(`react.memo_cache_sentinel`) ? ((L = (0, Z.jsx)(t, {})), (n[71] = L)) : (L = n[71]);
  let R;
  n[72] !== p || n[73] !== I
    ? ((R = (0, Z.jsx)(`button`, {
        type: `button`,
        className: X.close,
        "aria-label": I,
        onClick: p,
        children: L,
      })),
      (n[72] = p),
      (n[73] = I),
      (n[74] = R))
    : (R = n[74]);
  let z;
  n[75] !== _ || n[76] !== v || n[77] !== F || n[78] !== R
    ? ((z = (0, Z.jsxs)(`div`, { className: _, children: [v, F, R] })),
      (n[75] = _),
      (n[76] = v),
      (n[77] = F),
      (n[78] = R),
      (n[79] = z))
    : (z = n[79]);
  let B;
  n[80] === i.ui_info.title
    ? (B = n[81])
    : ((B = (0, Z.jsx)(re, { className: X.title, children: i.ui_info.title })),
      (n[80] = i.ui_info.title),
      (n[81] = B));
  let V;
  n[82] === i.ui_info.description
    ? (V = n[83])
    : ((V = (0, Z.jsx)(oe, { className: X.description, children: i.ui_info.description })),
      (n[82] = i.ui_info.description),
      (n[83] = V));
  let H;
  n[84] !== f || n[85] !== c
    ? ((H = (e, t) => {
        e.type !== `copy` && (c(e, t), f());
      }),
      (n[84] = f),
      (n[85] = c),
      (n[86] = H))
    : (H = n[86]);
  let U;
  n[87] !== r || n[88] !== u || n[89] !== i || n[90] !== p || n[91] !== H
    ? ((U = (0, Z.jsx)(`div`, {
        className: X.actions,
        children: (0, Z.jsx)(pe, {
          ...r,
          beacon: i,
          actionItems: i.action_items,
          allowRemoteImages: u,
          onActionComplete: H,
          onDismiss: p,
          useExternalBrowser: !0,
          variant: `tasksNux`,
        }),
      })),
      (n[87] = r),
      (n[88] = u),
      (n[89] = i),
      (n[90] = p),
      (n[91] = H),
      (n[92] = U))
    : (U = n[92]);
  let W;
  n[93] !== B || n[94] !== V || n[95] !== U
    ? ((W = (0, Z.jsxs)(`div`, { className: X.body, children: [B, V, U] })),
      (n[93] = B),
      (n[94] = V),
      (n[95] = U),
      (n[96] = W))
    : (W = n[96]);
  let G;
  return (
    n[97] !== h ||
    n[98] !== y ||
    n[99] !== le ||
    n[100] !== b ||
    n[101] !== x ||
    n[102] !== ue ||
    n[103] !== S ||
    n[104] !== C ||
    n[105] !== z ||
    n[106] !== W
      ? ((G = (0, Z.jsxs)(h, {
          open: y,
          size: le,
          variant: b,
          showDialogClose: x,
          shouldIgnoreClickOutside: ue,
          contentProps: S,
          onOpenChange: C,
          children: [z, W],
        })),
        (n[97] = h),
        (n[98] = y),
        (n[99] = le),
        (n[100] = b),
        (n[101] = x),
        (n[102] = ue),
        (n[103] = S),
        (n[104] = C),
        (n[105] = z),
        (n[106] = W),
        (n[107] = G))
      : (G = n[107]),
    G
  );
}
var De, Oe, Z, Q, ke;
function Ae() {
  return (Ae = e(() => {
    ((De = h()),
      (Oe = v()),
      f(),
      r(),
      m(),
      c(),
      s(),
      M(),
      j(),
      Te(),
      (Z = _()),
      (Q = l().refine((e) => e.trim().length > 0)),
      (ke = p({ title: Q, description: Q, icon_image_url: Q.optional().catch(void 0) })));
  }))();
}
var je, Me;
function Ne() {
  return (Ne = e(() => {
    ((je = `_informationalDescription_9xcds_3`), (Me = { informationalDescription: je }));
  }))();
}
function Pe(e) {
  let t = (0, Le.c)(12);
  if (e.beacon.beacon_id === `tasks_nux_modal` && e.beacon.ui_info.web_design === `announcement_nux`) {
    let n;
    return (t[0] === e ? (n = t[1]) : ((n = (0, $.jsx)(Ee, { ...e })), (t[0] = e), (t[1] = n)), n);
  }
  let n = e.eventAccountId;
  if (n != null && N(e.beacon.beacon_id)) {
    let r = `${n}:${e.beacon.beacon_id}`,
      i;
    t[2] !== n || t[3] !== e.beacon.beacon_id || t[4] !== e.eventMetadata?.suppressLifecycle
      ? ((i = () => {
          !E(e.beacon.beacon_id) &&
            e.eventMetadata?.suppressLifecycle !== !0 &&
            S.safePost(`/settings/announcement_viewed`, {
              additionalHeaders: { "ChatGPT-Account-ID": n },
              parameters: { query: { announcement_id: `oai/apps/hasSeenFinancialServicesTerms` } },
            }).catch(Fe);
        }),
        (t[2] = n),
        (t[3] = e.beacon.beacon_id),
        (t[4] = e.eventMetadata?.suppressLifecycle),
        (t[5] = i))
      : (i = t[5]);
    let a;
    return (
      t[6] !== e || t[7] !== r || t[8] !== i
        ? ((a = (0, $.jsx)(Ie, { ...e, onCompleted: i }, r)), (t[6] = e), (t[7] = r), (t[8] = i), (t[9] = a))
        : (a = t[9]),
      a
    );
  }
  let r;
  return (t[10] === e ? (r = t[11]) : ((r = (0, $.jsx)(Ie, { ...e })), (t[10] = e), (t[11] = r)), r);
}
function Fe() {}
function Ie(e) {
  let t = (0, Le.c)(93),
    {
      actionOverrides: r,
      allowExternalActions: ee,
      allowRemoteImages: o,
      analyticsContext: s,
      beacon: c,
      eventAccountId: l,
      eventMetadata: ne,
      getActionOverride: u,
      onComposerText: ie,
      onCompleted: ae,
      onDismiss: f,
      onOpen: p,
      onResolve: m,
      onSendPrompt: h,
      onStartVoice: g,
    } = e,
    _ = ee === void 0 || ee,
    v = o === void 0 || o,
    y = te(n),
    b = c.ui_info,
    x = c.custom_fields?.modal_presentation === `expressive`,
    S = (0, Re.useRef)(!1),
    C;
  t[0] === ae
    ? (C = t[1])
    : ((C = () => {
        S.current || ((S.current = !0), ae?.());
      }),
      (t[0] = ae),
      (t[1] = C));
  let w = C,
    T;
  t[2] !== w || t[3] !== f
    ? ((T = () => {
        (f(), w());
      }),
      (t[2] = w),
      (t[3] = f),
      (t[4] = T))
    : (T = t[4]);
  let E = T,
    D = i(),
    O = a(),
    [k, A] = (0, Re.useState)(null),
    j = O ? (b.header_image_url_dark ?? b.header_image_url) : b.header_image_url,
    M = b.footer_link,
    N = v && j != null && fe(j) ? j : null,
    F = N != null && N !== k,
    I = F && c.custom_fields?.close_button_on_media === !0,
    L = c.action_items.length === 0,
    { alignment: R, supporting_text: z, supporting_text_format: B } = b,
    V = M != null && de(M.url) && (_ || M.url.startsWith(`/`)) ? M : null,
    H;
  t[5] !== s?.suppressLifecycle || t[6] !== c || t[7] !== D || t[8] !== y || t[9] !== V
    ? ((H = (e) => {
        if (V != null) {
          if ((s?.suppressLifecycle !== !0 && le(y, c, V), V.url.startsWith(`/`))) {
            (e.preventDefault(), D(V.url));
            return;
          }
          ue({ event: e, href: V.url, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
        }
      }),
      (t[5] = s?.suppressLifecycle),
      (t[6] = c),
      (t[7] = D),
      (t[8] = y),
      (t[9] = V),
      (t[10] = H))
    : (H = t[10]);
  let U = H,
    W = I ? `mediaOverlay` : `default`,
    G;
  t[11] === p ? (G = t[12]) : ((G = { onOpenAutoFocus: p }), (t[11] = p), (t[12] = G));
  let me = `beacon-modal-${c.beacon_id}`,
    he = `beacon-modal-${c.beacon_id}`,
    ge = x ? `expressiveBeacon` : `beaconModal`,
    K;
  t[13] === E
    ? (K = t[14])
    : ((K = (e) => {
        e || E();
      }),
      (t[13] = E),
      (t[14] = K));
  let q;
  t[15] !== I || t[16] !== F || t[17] !== N || t[18] !== x || t[19] !== b.header_image_alt
    ? ((q = F
        ? (0, $.jsx)(
            `img`,
            {
              alt: b.header_image_alt ?? ``,
              className: d(`w-full object-contain object-bottom`, x && !I && `aspect-[478/232]`),
              draggable: !1,
              src: N,
              onError: () => A(N),
            },
            N,
          )
        : null),
      (t[15] = I),
      (t[16] = F),
      (t[17] = N),
      (t[18] = x),
      (t[19] = b.header_image_alt),
      (t[20] = q))
    : (q = t[20]);
  let _e = x ? `gap-1 px-6 pt-5 pb-6` : `px-8`,
    J;
  t[21] !== R ||
  t[22] !== c.action_items.length ||
  t[23] !== F ||
  t[24] !== x ||
  t[25] !== L ||
  t[26] !== z ||
  t[27] !== _e
    ? ((J = d(
        `flex flex-col select-none`,
        _e,
        !x && [
          F ? `gap-2 pt-10` : `gap-6 pt-12`,
          z && `pb-4`,
          !z && F && L && `pb-16`,
          !z && F && !L && `pb-6`,
          !z && !F && `pb-8`,
        ],
        R === `center` || (R == null && (F || c.action_items.length === 0)) ? `text-center` : `text-start`,
      )),
      (t[21] = R),
      (t[22] = c.action_items.length),
      (t[23] = F),
      (t[24] = x),
      (t[25] = L),
      (t[26] = z),
      (t[27] = _e),
      (t[28] = J))
    : (J = t[28]);
  let ve = x ? `expressiveBeacon` : `default`,
    ye = !x && (L ? `heading-lg leading-7` : `heading-dialog`),
    be = F && `text-balance`,
    Y;
  t[29] !== ye || t[30] !== be ? ((Y = d(ye, be)), (t[29] = ye), (t[30] = be), (t[31] = Y)) : (Y = t[31]);
  let xe;
  t[32] !== ve || t[33] !== Y || t[34] !== b.title
    ? ((xe = (0, $.jsx)(re, { variant: ve, className: Y, children: b.title })),
      (t[32] = ve),
      (t[33] = Y),
      (t[34] = b.title),
      (t[35] = xe))
    : (xe = t[35]);
  let Se = x ? `text-document leading-5 whitespace-pre-line text-default` : `leading-normal text-secondary`,
    Ce = !x && (L ? Me.informationalDescription : `text-base`),
    we;
  t[36] !== Se || t[37] !== Ce ? ((we = d(Se, Ce)), (t[36] = Se), (t[37] = Ce), (t[38] = we)) : (we = t[38]);
  let X;
  t[39] !== _ || t[40] !== b.description || t[41] !== b.description_format
    ? ((X =
        b.description_format === `markdown`
          ? (0, $.jsx)(P, { text: b.description, allowExternalActions: _ })
          : b.description),
      (t[39] = _),
      (t[40] = b.description),
      (t[41] = b.description_format),
      (t[42] = X))
    : (X = t[42]);
  let Te;
  t[43] !== we || t[44] !== X
    ? ((Te = (0, $.jsx)(oe, { asChild: !0, children: (0, $.jsx)(`div`, { className: we, children: X }) })),
      (t[43] = we),
      (t[44] = X),
      (t[45] = Te))
    : (Te = t[45]);
  let Ee;
  t[46] !== J || t[47] !== xe || t[48] !== Te
    ? ((Ee = (0, $.jsxs)(`div`, { className: J, children: [xe, Te] })),
      (t[46] = J),
      (t[47] = xe),
      (t[48] = Te),
      (t[49] = Ee))
    : (Ee = t[49]);
  let De;
  t[50] !== R || t[51] !== _ || t[52] !== c.action_items.length || t[53] !== F || t[54] !== z || t[55] !== B
    ? ((De = z
        ? (0, $.jsx)(`div`, {
            className: d(
              `px-8 pb-6 text-sm text-secondary select-none`,
              R === `center` || (R == null && (F || c.action_items.length === 0))
                ? `text-center`
                : `text-start`,
            ),
            children: B === `markdown` ? (0, $.jsx)(P, { text: z, allowExternalActions: _ }) : z,
          })
        : null),
      (t[50] = R),
      (t[51] = _),
      (t[52] = c.action_items.length),
      (t[53] = F),
      (t[54] = z),
      (t[55] = B),
      (t[56] = De))
    : (De = t[56]);
  let Oe;
  t[57] !== r ||
  t[58] !== R ||
  t[59] !== _ ||
  t[60] !== v ||
  t[61] !== s ||
  t[62] !== c ||
  t[63] !== w ||
  t[64] !== E ||
  t[65] !== l ||
  t[66] !== ne ||
  t[67] !== u ||
  t[68] !== x ||
  t[69] !== ie ||
  t[70] !== m ||
  t[71] !== h ||
  t[72] !== g
    ? ((Oe =
        c.action_items.length > 0
          ? (0, $.jsx)(`div`, {
              className: d(
                `flex flex-col gap-3`,
                x ? `pb-6` : `pb-8`,
                c.custom_fields?.stack_actions !== !0 && `sm:flex-row sm:flex-wrap sm:items-center`,
                R === `start` ? `items-start justify-start px-8` : `items-stretch justify-center px-6`,
              ),
              children: (0, $.jsx)(pe, {
                actionItems: c.action_items,
                actionOverrides: r,
                allowExternalActions: _,
                allowRemoteImages: v,
                analyticsContext: s,
                beacon: c,
                eventAccountId: l,
                eventMetadata: ne,
                getActionOverride: u,
                onActionComplete: (e, t) => {
                  e.type !== `copy` && (m(e, t), w());
                },
                onComposerText: ie,
                onDismiss: E,
                onSendPrompt: h,
                onStartVoice: g,
                useExternalBrowser: !0,
                variant: x ? `expressiveModal` : `modal`,
              }),
            })
          : null),
      (t[57] = r),
      (t[58] = R),
      (t[59] = _),
      (t[60] = v),
      (t[61] = s),
      (t[62] = c),
      (t[63] = w),
      (t[64] = E),
      (t[65] = l),
      (t[66] = ne),
      (t[67] = u),
      (t[68] = x),
      (t[69] = ie),
      (t[70] = m),
      (t[71] = h),
      (t[72] = g),
      (t[73] = Oe))
    : (Oe = t[73]);
  let Z;
  t[74] !== R || t[75] !== U || t[76] !== V || t[77] !== b.footer_text
    ? ((Z =
        b.footer_text == null
          ? null
          : (0, $.jsx)(`div`, {
              className: d(`px-8 pb-10 text-sm text-secondary select-none`, R === `center` && `text-center`),
              children: (0, $.jsxs)(`span`, {
                children: [
                  b.footer_text,
                  V == null
                    ? null
                    : (0, $.jsxs)($.Fragment, {
                        children: [
                          ` `,
                          (0, $.jsx)(`a`, {
                            className: `underline`,
                            href: V.url,
                            onClick: U,
                            children: V.text,
                          }),
                        ],
                      }),
                ],
              }),
            })),
      (t[74] = R),
      (t[75] = U),
      (t[76] = V),
      (t[77] = b.footer_text),
      (t[78] = Z))
    : (Z = t[78]);
  let Q;
  t[79] !== q || t[80] !== Ee || t[81] !== De || t[82] !== Oe || t[83] !== Z
    ? ((Q = (0, $.jsxs)(ce, { variant: `chatgpt`, children: [q, Ee, De, Oe, Z] })),
      (t[79] = q),
      (t[80] = Ee),
      (t[81] = De),
      (t[82] = Oe),
      (t[83] = Z),
      (t[84] = Q))
    : (Q = t[84]);
  let ke;
  return (
    t[85] !== ge || t[86] !== K || t[87] !== Q || t[88] !== W || t[89] !== G || t[90] !== me || t[91] !== he
      ? ((ke = (0, $.jsx)(se, {
          open: !0,
          closeButtonVariant: W,
          contentProps: G,
          contentClassName: me,
          overlayClassName: he,
          size: `beacon`,
          variant: ge,
          onOpenChange: K,
          children: Q,
        })),
        (t[85] = ge),
        (t[86] = K),
        (t[87] = Q),
        (t[88] = W),
        (t[89] = G),
        (t[90] = me),
        (t[91] = he),
        (t[92] = ke))
      : (ke = t[92]),
    ke
  );
}
var Le, Re, $;
function ze() {
  return (ze = e(() => {
    ((Le = h()),
      u(),
      o(),
      (Re = v()),
      ie(),
      O(),
      w(),
      C(),
      m(),
      ae(),
      x(),
      g(),
      s(),
      M(),
      W(),
      Ae(),
      j(),
      Ne(),
      ($ = _()));
  }))();
}
export { ze as n, Pe as t };
//# sourceMappingURL=modal-91ebdd72146e.js.map
