import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  AB as r,
  CY as i,
  DB as a,
  FBt as o,
  HFt as s,
  HO as c,
  IO as l,
  JO as u,
  KO as ee,
  LNt as d,
  MNt as f,
  NNt as te,
  NSt as p,
  OB as m,
  PBt as h,
  QO as g,
  Qst as _,
  TY as v,
  USt as y,
  VRt as b,
  WO as ne,
  XOt as x,
  ZO as S,
  ZSt as C,
  kB as w,
  kRt as T,
  okt as E,
  qO as re,
  tkt as ie,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $$t as D,
  AVr as O,
  GLn as k,
  HDt as ae,
  LDt as A,
  PVr as j,
  RDt as M,
  SRn as N,
  VDt as P,
  bRn as F,
  e1t as I,
  iRr as L,
  qLn as R,
  tyr as z,
  x$t as B,
  y$t as V,
} from "./app-initial-ad16eaadf81f.js";
import { iy as oe, ry as se, ty as H } from "./app-primary-3e00728c2a4c.js";
import { n as U, t as ce } from "./actions-d1a006959109.js";
import { n as W, t as le } from "./badge-5893e67ab2af.js";
function G(e) {
  return [
    `financial_services_terms_homepage_modal`,
    `financial_services_terms_work_tab_home_modal`,
    `financial_services_terms_codex_home_modal`,
  ].includes(e);
}
var K;
function ue() {
  return (ue = e(() => {
    K = `` + new URL(`business-domain-members-gradient-14db7185a28c.png`, import.meta.url).href;
  }))();
}
var de, q, fe, pe, me, he, ge, _e, ve, ye, be, J;
function xe() {
  return (xe = e(() => {
    ((de = `_hero_pz7pz_2`),
      (q = `_artwork_pz7pz_2`),
      (fe = `_imageCrop_pz7pz_2`),
      (pe = `_image_pz7pz_2`),
      (me = `_workspaceSwitch_pz7pz_2`),
      (he = `_personalWorkspace_pz7pz_2`),
      (ge = `_businessWorkspace_pz7pz_2`),
      (_e = `_close_pz7pz_2`),
      (ve = `_reward_pz7pz_2`),
      (ye = `_title_pz7pz_2`),
      (be = `_description_pz7pz_2`),
      (J = {
        hero: de,
        artwork: q,
        imageCrop: fe,
        image: pe,
        workspaceSwitch: me,
        personalWorkspace: he,
        businessWorkspace: ge,
        close: _e,
        reward: ve,
        title: ye,
        description: be,
      }));
  }))();
}
function Se(e) {
  let t = (0, Te.c)(68),
    n,
    r,
    i,
    o,
    s,
    c,
    l;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (o = t[4]), (s = t[5]), (c = t[6]), (l = t[7]))
    : (({ beacon: r, onDismiss: s, onOpen: c, onResolve: l, onCompleted: o, getActionOverride: i, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l));
  let u = E(),
    [d, f] = (0, Ee.useState)(!0),
    te = (0, Ee.useRef)(!1),
    p;
  t[8] === o
    ? (p = t[9])
    : ((p = () => {
        te.current || ((te.current = !0), o?.());
      }),
      (t[8] = o),
      (t[9] = p));
  let m = p,
    h;
  t[10] !== m || t[11] !== s
    ? ((h = () => {
        (s(), m());
      }),
      (t[10] = m),
      (t[11] = s),
      (t[12] = h))
    : (h = t[12]);
  let _ = h,
    v;
  t[13] === c
    ? (v = t[14])
    : ((v = { className: `rounded-3xl`, onOpenAutoFocus: c }), (t[13] = c), (t[14] = v));
  let y;
  t[15] === _
    ? (y = t[16])
    : ((y = (e) => {
        e || _();
      }),
      (t[15] = _),
      (t[16] = y));
  let b;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Y.jsx)(`div`, {
        "aria-hidden": !0,
        className: J.artwork,
        children: (0, Y.jsx)(`div`, {
          className: J.imageCrop,
          children: (0, Y.jsx)(`img`, { alt: ``, src: K, className: J.image, style: { maxHeight: `none` } }),
        }),
      })),
      (t[17] = b))
    : (b = t[17]);
  let x;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Y.jsx)(`span`, {
        className: J.personalWorkspace,
        children: (0, Y.jsx)(ie, {
          id: `chatgpt.business_domain_members.modal.hero.personal.label`,
          defaultMessage: `Personal`,
          description: `Short label in the decorative workspace switch shown above the invitation modal for ChatGPT Business workspace owners. It depicts a personal workspace beside the selected Business workspace; the illustration is not an interactive switch.`,
        }),
      })),
      (t[18] = x))
    : (x = t[18]);
  let S;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Y.jsxs)(`div`, {
        "aria-hidden": !0,
        className: J.workspaceSwitch,
        children: [
          x,
          (0, Y.jsx)(`span`, {
            className: J.businessWorkspace,
            children: (0, Y.jsx)(ie, {
              id: `chatgpt.business_domain_members.modal.hero.business.label`,
              defaultMessage: `Business`,
              description: `Short selected label in the decorative workspace switch above the invitation modal for ChatGPT Business workspace owners. Business refers to the ChatGPT Business plan, depicted beside a Personal workspace; the illustration is not interactive.`,
            }),
          }),
        ],
      })),
      (t[19] = S))
    : (S = t[19]);
  let C;
  t[20] === u
    ? (C = t[21])
    : ((C = u.formatMessage({
        id: `chatgpt.business_domain_members.modal.close_button.aria_label`,
        defaultMessage: `Close`,
        description: `Accessible label for the icon-only close button on the Business workspace invitation modal. Dismisses the modal without sending invitations.`,
      })),
      (t[20] = u),
      (t[21] = C));
  let w;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Y.jsx)(a, { asset: g })), (t[22] = w))
    : (w = t[22]);
  let T;
  t[23] !== _ || t[24] !== C
    ? ((T = (0, Y.jsxs)(`div`, {
        className: J.hero,
        children: [
          b,
          S,
          (0, Y.jsx)(`button`, {
            type: `button`,
            className: J.close,
            "aria-label": C,
            onClick: _,
            children: w,
          }),
        ],
      })),
      (t[23] = _),
      (t[24] = C),
      (t[25] = T))
    : (T = t[25]);
  let D;
  t[26] === r.ui_info.supporting_text
    ? (D = t[27])
    : ((D =
        r.ui_info.supporting_text &&
        (0, Y.jsx)(`div`, {
          className: `max-w-full px-8`,
          children: (0, Y.jsx)(W, {
            color: `success`,
            variant: `soft`,
            size: `lg`,
            pill: !1,
            className: J.reward,
            children: r.ui_info.supporting_text,
          }),
        })),
      (t[26] = r.ui_info.supporting_text),
      (t[27] = D));
  let O;
  t[28] === r.ui_info.title
    ? (O = t[29])
    : ((O = (0, Y.jsx)(re, { className: J.title, children: r.ui_info.title })),
      (t[28] = r.ui_info.title),
      (t[29] = O));
  let k;
  t[30] === r.ui_info.description
    ? (k = t[31])
    : ((k = (0, Y.jsx)(ee, { className: J.description, children: r.ui_info.description })),
      (t[30] = r.ui_info.description),
      (t[31] = k));
  let A;
  t[32] !== O || t[33] !== k
    ? ((A = (0, Y.jsxs)(`div`, { className: `flex w-full flex-col gap-2`, children: [O, k] })),
      (t[32] = O),
      (t[33] = k),
      (t[34] = A))
    : (A = t[34]);
  let j;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Y.jsx)(ie, {
        id: `chatgpt.business_domain_members.modal.auto_join.checkbox.label`,
        defaultMessage: `Auto-approve join requests from members on your domain`,
        description: `Default-checked consent checkbox in a ChatGPT Business workspace owner's invitation modal. Checking it authorizes automatic approval of workspace join requests from people with the company's email domain. The Send invites button is disabled while unchecked. The label may wrap on narrow screens.`,
      })),
      (t[35] = j))
    : (j = t[35]);
  let M;
  t[36] === d
    ? (M = t[37])
    : ((M = (0, Y.jsx)(ae, {
        checked: d,
        onCheckedChange: f,
        required: !0,
        labelClassName: `text-start text-sm leading-5 tracking-[-0.15px] text-secondary`,
        label: j,
      })),
      (t[36] = d),
      (t[37] = M));
  let N = !d,
    P;
  t[38] !== d || t[39] !== i
    ? ((P = (e) => (!d && e.action_v2.action_enum === `invite_domain_members` ? Ce : i?.(e))),
      (t[38] = d),
      (t[39] = i),
      (t[40] = P))
    : (P = t[40]);
  let F;
  t[41] !== m || t[42] !== l
    ? ((F = (e, t) => {
        (l(e, t), m());
      }),
      (t[41] = m),
      (t[42] = l),
      (t[43] = F))
    : (F = t[43]);
  let I;
  t[44] !== n || t[45] !== r || t[46] !== _ || t[47] !== P || t[48] !== F
    ? ((I = (0, Y.jsx)(ce, {
        ...n,
        beacon: r,
        actionItems: r.action_items,
        getActionButtonClassName: we,
        getActionOverride: P,
        onActionComplete: F,
        onDismiss: _,
        useExternalBrowser: !0,
        variant: `modal`,
      })),
      (t[44] = n),
      (t[45] = r),
      (t[46] = _),
      (t[47] = P),
      (t[48] = F),
      (t[49] = I))
    : (I = t[49]);
  let L;
  t[50] !== N || t[51] !== I
    ? ((L = (0, Y.jsx)(`fieldset`, { className: `flex w-full justify-center`, disabled: N, children: I })),
      (t[50] = N),
      (t[51] = I),
      (t[52] = L))
    : (L = t[52]);
  let R;
  t[53] === r.ui_info.footer_text
    ? (R = t[54])
    : ((R =
        r.ui_info.footer_text &&
        (0, Y.jsx)(`p`, { className: `text-xs leading-4 text-secondary`, children: r.ui_info.footer_text })),
      (t[53] = r.ui_info.footer_text),
      (t[54] = R));
  let z;
  t[55] !== A || t[56] !== M || t[57] !== L || t[58] !== R
    ? ((z = (0, Y.jsxs)(`div`, {
        className: `flex w-full flex-col items-center gap-6 px-8`,
        children: [A, M, L, R],
      })),
      (t[55] = A),
      (t[56] = M),
      (t[57] = L),
      (t[58] = R),
      (t[59] = z))
    : (z = t[59]);
  let B;
  t[60] !== T || t[61] !== D || t[62] !== z
    ? ((B = (0, Y.jsxs)(`div`, {
        className: `flex flex-col items-center gap-6 pb-10 text-center`,
        children: [T, D, z],
      })),
      (t[60] = T),
      (t[61] = D),
      (t[62] = z),
      (t[63] = B))
    : (B = t[63]);
  let V;
  return (
    t[64] !== B || t[65] !== v || t[66] !== y
      ? ((V = (0, Y.jsx)(ne, {
          open: !0,
          size: `beacon`,
          variant: `chatgptConfirmation`,
          showDialogClose: !1,
          shouldIgnoreClickOutside: !0,
          contentProps: v,
          onOpenChange: y,
          children: B,
        })),
        (t[64] = B),
        (t[65] = v),
        (t[66] = y),
        (t[67] = V))
      : (V = t[67]),
    V
  );
}
async function Ce() {
  return !1;
}
function we() {
  return `w-full`;
}
var Te, Ee, Y;
function De() {
  return (De = e(() => {
    ((Te = h()), le(), P(), S(), (Ee = o()), x(), ue(), u(), m(), U(), xe(), (Y = d()));
  }))();
}
function Oe(e) {
  let t = (0, Pe.c)(7),
    { text: n, allowExternalActions: r } = e,
    i;
  if (t[0] !== r || t[1] !== n) {
    let e;
    (t[3] === r
      ? (e = t[4])
      : ((e = (e) => {
          let { children: t, href: n } = e;
          return r && n?.startsWith(`https://`)
            ? (0, Fe.jsx)(k, {
                href: n,
                openTarget: `external-browser`,
                initiator: `open_in_browser_bridge`,
                underline: `always`,
                children: t,
              })
            : (0, Fe.jsx)(Fe.Fragment, { children: t });
        }),
        (t[3] = r),
        (t[4] = e)),
      (i = M(Ie.lexer(n), {
        components: {
          blockquote: X,
          code: X,
          del: X,
          h1: X,
          h2: X,
          h3: X,
          h4: X,
          h5: X,
          h6: X,
          pre: X,
          hr: Ne,
          img: Me,
          ul: je,
          ol: Ae,
          p: ke,
          a: e,
        },
      })),
      (t[0] = r),
      (t[1] = n),
      (t[2] = i));
  } else i = t[2];
  let a;
  return (
    t[5] === i ? (a = t[6]) : ((a = (0, Fe.jsx)(Fe.Fragment, { children: i })), (t[5] = i), (t[6] = a)),
    a
  );
}
function ke(e) {
  let { children: t } = e;
  return (0, Fe.jsx)(`p`, { className: `m-0`, children: t });
}
function Ae(e) {
  let { children: t } = e;
  return (0, Fe.jsx)(`ol`, { className: `list-decimal ps-5 text-start`, children: t });
}
function je(e) {
  let { children: t } = e;
  return (0, Fe.jsx)(`ul`, { className: `list-disc ps-5 text-start`, children: t });
}
function Me() {
  return null;
}
function Ne() {
  return null;
}
function X(e) {
  let t = (0, Pe.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n ? (r = t[1]) : ((r = (0, Fe.jsx)(Fe.Fragment, { children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
var Pe, Fe, Ie;
function Le() {
  return (Le = e(() => {
    ((Pe = h()), j(), R(), A(), (Fe = d()), (Ie = new O({ gfm: !1 })));
  }))();
}
var Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, Z;
function et() {
  return (et = e(() => {
    ((Re = `_surface_2gpyy_2`),
      (ze = `_header_2gpyy_2`),
      (Be = `_background_2gpyy_2`),
      (Ve = `_cards_2gpyy_2`),
      (He = `_backCard_2gpyy_2`),
      (Ue = `_middleCard_2gpyy_2`),
      (We = `_frontCard_2gpyy_2`),
      (Ge = `_cardHeading_2gpyy_2`),
      (Ke = `_cardIcon_2gpyy_2`),
      (qe = `_cardTitle_2gpyy_2`),
      (Je = `_cardDescription_2gpyy_2`),
      (Ye = `_close_2gpyy_2`),
      (Xe = `_body_2gpyy_2`),
      (Ze = `_title_2gpyy_2`),
      (Qe = `_description_2gpyy_2`),
      ($e = `_actions_2gpyy_2`),
      (Z = {
        surface: Re,
        header: ze,
        background: Be,
        cards: Ve,
        backCard: He,
        middleCard: Ue,
        frontCard: We,
        cardHeading: Ge,
        cardIcon: Ke,
        cardTitle: qe,
        cardDescription: Je,
        close: Ye,
        body: Xe,
        title: Ze,
        description: Qe,
        actions: $e,
      }));
  }))();
}
function tt(e) {
  let t = (0, nt.c)(108),
    n,
    a,
    o,
    s,
    c,
    l,
    u;
  t[0] === e
    ? ((n = t[1]), (a = t[2]), (o = t[3]), (s = t[4]), (c = t[5]), (l = t[6]), (u = t[7]))
    : (({ beacon: a, allowRemoteImages: u, onDismiss: s, onOpen: c, onResolve: l, onCompleted: o, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u));
  let d = u === void 0 || u,
    f = E(),
    te = (0, rt.useRef)(!1),
    p;
  t[8] === o
    ? (p = t[9])
    : ((p = () => {
        te.current || ((te.current = !0), o?.());
      }),
      (t[8] = o),
      (t[9] = p));
  let m = p,
    h;
  t[10] !== m || t[11] !== s
    ? ((h = () => {
        (s(), m());
      }),
      (t[10] = m),
      (t[11] = s),
      (t[12] = h))
    : (h = t[12]);
  let g = h,
    _ = r(),
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    D,
    O,
    k,
    ae,
    A,
    j,
    M,
    N,
    P;
  if (
    t[13] !== d ||
    t[14] !== a.custom_fields?.task_card ||
    t[15] !== a.ui_info.header_image_url ||
    t[16] !== a.ui_info.header_image_url_dark ||
    t[17] !== g ||
    t[18] !== _ ||
    t[19] !== c
  ) {
    y = at.safeParse(a.custom_fields?.task_card);
    let e = y.success ? y.data.icon_image_url : void 0,
      n = _ ? (a.ui_info.header_image_url_dark ?? a.ui_info.header_image_url) : a.ui_info.header_image_url;
    ((v = ne),
      (S = !0),
      (C = `beacon`),
      (w = `chatgptConfirmation`),
      (T = !1),
      (D = !0),
      t[37] === c
        ? (O = t[38])
        : ((O = { className: Z.surface, onOpenAutoFocus: c }), (t[37] = c), (t[38] = O)),
      t[39] === g
        ? (k = t[40])
        : ((k = (e) => {
            e || g();
          }),
          (t[39] = g),
          (t[40] = k)),
      (b = Z.header),
      t[41] !== d || t[42] !== n
        ? ((x =
            d && n != null && oe(n)
              ? (0, Q.jsx)(`div`, {
                  "aria-hidden": `true`,
                  className: Z.background,
                  style: { backgroundImage: `url(${n})` },
                })
              : null),
          (t[41] = d),
          (t[42] = n),
          (t[43] = x))
        : (x = t[43]),
      (M = Z.cards),
      t[44] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((N = (0, Q.jsx)(`div`, { className: Z.backCard })),
          (P = (0, Q.jsx)(`div`, { className: Z.middleCard })),
          (t[44] = N),
          (t[45] = P))
        : ((N = t[44]), (P = t[45])),
      (j = Z.frontCard),
      (ae = Z.cardHeading),
      (A =
        d && e != null && oe(e)
          ? (0, Q.jsx)(`img`, { src: e, alt: ``, "aria-hidden": !0, draggable: !1, className: Z.cardIcon })
          : null),
      (t[13] = d),
      (t[14] = a.custom_fields?.task_card),
      (t[15] = a.ui_info.header_image_url),
      (t[16] = a.ui_info.header_image_url_dark),
      (t[17] = g),
      (t[18] = _),
      (t[19] = c),
      (t[20] = v),
      (t[21] = y),
      (t[22] = b),
      (t[23] = x),
      (t[24] = S),
      (t[25] = C),
      (t[26] = w),
      (t[27] = T),
      (t[28] = D),
      (t[29] = O),
      (t[30] = k),
      (t[31] = ae),
      (t[32] = A),
      (t[33] = j),
      (t[34] = M),
      (t[35] = N),
      (t[36] = P));
  } else
    ((v = t[20]),
      (y = t[21]),
      (b = t[22]),
      (x = t[23]),
      (S = t[24]),
      (C = t[25]),
      (w = t[26]),
      (T = t[27]),
      (D = t[28]),
      (O = t[29]),
      (k = t[30]),
      (ae = t[31]),
      (A = t[32]),
      (j = t[33]),
      (M = t[34]),
      (N = t[35]),
      (P = t[36]));
  let F;
  t[46] !== y.data || t[47] !== y.success
    ? ((F = y.success
        ? y.data.title
        : (0, Q.jsx)(ie, {
            id: `chatgpt.tasks.nux.task_card.title.flight_tracker`,
            defaultMessage: `Flight tracker`,
            description: `Short title on the Flight Tracker example card in the Tasks onboarding modal. The control treatment shows ChatGPT monitoring flight options. The client also uses this copy if server-provided card fields are unavailable.`,
          })),
      (t[46] = y.data),
      (t[47] = y.success),
      (t[48] = F))
    : (F = t[48]);
  let I;
  t[49] === F
    ? (I = t[50])
    : ((I = (0, Q.jsx)(`div`, { className: Z.cardTitle, children: F })), (t[49] = F), (t[50] = I));
  let L;
  t[51] !== I || t[52] !== ae || t[53] !== A
    ? ((L = (0, Q.jsxs)(`div`, { className: ae, children: [A, I] })),
      (t[51] = I),
      (t[52] = ae),
      (t[53] = A),
      (t[54] = L))
    : (L = t[54]);
  let R;
  t[55] !== y.data || t[56] !== y.success
    ? ((R = y.success
        ? y.data.description
        : (0, Q.jsx)(ie, {
            id: `chatgpt.tasks.nux.task_card.description.flight_tracker`,
            defaultMessage: `Help me find flights within my budget for a specific time.`,
            description: `One-sentence example request on a task card in the Tasks onboarding modal. The control treatment demonstrates ChatGPT monitoring flight options. The client also uses this copy if server-provided card fields are unavailable.`,
          })),
      (t[55] = y.data),
      (t[56] = y.success),
      (t[57] = R))
    : (R = t[57]);
  let z;
  t[58] === R
    ? (z = t[59])
    : ((z = (0, Q.jsx)(`div`, { className: Z.cardDescription, children: R })), (t[58] = R), (t[59] = z));
  let B;
  t[60] !== L || t[61] !== z || t[62] !== j
    ? ((B = (0, Q.jsxs)(`div`, { className: j, children: [L, z] })),
      (t[60] = L),
      (t[61] = z),
      (t[62] = j),
      (t[63] = B))
    : (B = t[63]);
  let V;
  t[64] !== B || t[65] !== M || t[66] !== N || t[67] !== P
    ? ((V = (0, Q.jsxs)(`div`, { className: M, children: [N, P, B] })),
      (t[64] = B),
      (t[65] = M),
      (t[66] = N),
      (t[67] = P),
      (t[68] = V))
    : (V = t[68]);
  let se;
  t[69] === f
    ? (se = t[70])
    : ((se = f.formatMessage({
        id: `TasksNuxModal.closeButton.ariaLabel`,
        defaultMessage: `Close`,
        description: `Accessible label for the circular icon-only close button in the Tasks onboarding modal shown to eligible ChatGPT users on the home screen. Activating it dismisses the modal. Keep this label concise; it is announced by assistive technology and is not visible on screen.`,
      })),
      (t[69] = f),
      (t[70] = se));
  let H;
  t[71] === Symbol.for(`react.memo_cache_sentinel`) ? ((H = (0, Q.jsx)(i, {})), (t[71] = H)) : (H = t[71]);
  let U;
  t[72] !== g || t[73] !== se
    ? ((U = (0, Q.jsx)(`button`, {
        type: `button`,
        className: Z.close,
        "aria-label": se,
        onClick: g,
        children: H,
      })),
      (t[72] = g),
      (t[73] = se),
      (t[74] = U))
    : (U = t[74]);
  let W;
  t[75] !== b || t[76] !== x || t[77] !== V || t[78] !== U
    ? ((W = (0, Q.jsxs)(`div`, { className: b, children: [x, V, U] })),
      (t[75] = b),
      (t[76] = x),
      (t[77] = V),
      (t[78] = U),
      (t[79] = W))
    : (W = t[79]);
  let le;
  t[80] === a.ui_info.title
    ? (le = t[81])
    : ((le = (0, Q.jsx)(re, { className: Z.title, children: a.ui_info.title })),
      (t[80] = a.ui_info.title),
      (t[81] = le));
  let G;
  t[82] === a.ui_info.description
    ? (G = t[83])
    : ((G = (0, Q.jsx)(ee, { className: Z.description, children: a.ui_info.description })),
      (t[82] = a.ui_info.description),
      (t[83] = G));
  let K;
  t[84] !== m || t[85] !== l
    ? ((K = (e, t) => {
        e.type !== `copy` && (l(e, t), m());
      }),
      (t[84] = m),
      (t[85] = l),
      (t[86] = K))
    : (K = t[86]);
  let ue;
  t[87] !== n || t[88] !== d || t[89] !== a || t[90] !== g || t[91] !== K
    ? ((ue = (0, Q.jsx)(`div`, {
        className: Z.actions,
        children: (0, Q.jsx)(ce, {
          ...n,
          beacon: a,
          actionItems: a.action_items,
          allowRemoteImages: d,
          onActionComplete: K,
          onDismiss: g,
          useExternalBrowser: !0,
          variant: `tasksNux`,
        }),
      })),
      (t[87] = n),
      (t[88] = d),
      (t[89] = a),
      (t[90] = g),
      (t[91] = K),
      (t[92] = ue))
    : (ue = t[92]);
  let de;
  t[93] !== le || t[94] !== G || t[95] !== ue
    ? ((de = (0, Q.jsxs)(`div`, { className: Z.body, children: [le, G, ue] })),
      (t[93] = le),
      (t[94] = G),
      (t[95] = ue),
      (t[96] = de))
    : (de = t[96]);
  let q;
  return (
    t[97] !== v ||
    t[98] !== S ||
    t[99] !== C ||
    t[100] !== w ||
    t[101] !== T ||
    t[102] !== D ||
    t[103] !== O ||
    t[104] !== k ||
    t[105] !== W ||
    t[106] !== de
      ? ((q = (0, Q.jsxs)(v, {
          open: S,
          size: C,
          variant: w,
          showDialogClose: T,
          shouldIgnoreClickOutside: D,
          contentProps: O,
          onOpenChange: k,
          children: [W, de],
        })),
        (t[97] = v),
        (t[98] = S),
        (t[99] = C),
        (t[100] = w),
        (t[101] = T),
        (t[102] = D),
        (t[103] = O),
        (t[104] = k),
        (t[105] = W),
        (t[106] = de),
        (t[107] = q))
      : (q = t[107]),
    q
  );
}
var nt, rt, Q, it, at;
function ot() {
  return (ot = e(() => {
    ((nt = h()),
      (rt = o()),
      x(),
      s(),
      u(),
      v(),
      w(),
      U(),
      H(),
      et(),
      (Q = d()),
      (it = b().refine((e) => e.trim().length > 0)),
      (at = T({ title: it, description: it, icon_image_url: it.optional().catch(void 0) })));
  }))();
}
var st, ct;
function lt() {
  return (lt = e(() => {
    ((st = `_informationalDescription_9xcds_3`), (ct = { informationalDescription: st }));
  }))();
}
function ut(e) {
  let t = (0, pt.c)(14);
  if (e.beacon.beacon_id === `tasks_nux_modal` && e.beacon.ui_info.web_design === `announcement_nux`) {
    let n;
    return (t[0] === e ? (n = t[1]) : ((n = (0, $.jsx)(tt, { ...e })), (t[0] = e), (t[1] = n)), n);
  }
  if (e.beacon.beacon_id === `business_domain_coworkers`) {
    let n;
    return (
      t[2] === e ? (n = t[3]) : ((n = (0, $.jsx)(Se, { ...e }, e.eventAccountId)), (t[2] = e), (t[3] = n)),
      n
    );
  }
  let n = e.eventAccountId;
  if (n != null && G(e.beacon.beacon_id)) {
    let r = `${n}:${e.beacon.beacon_id}`,
      i;
    t[4] !== n || t[5] !== e.beacon.beacon_id || t[6] !== e.eventMetadata?.suppressLifecycle
      ? ((i = () => {
          !I(e.beacon.beacon_id) &&
            e.eventMetadata?.suppressLifecycle !== !0 &&
            L.safePost(`/settings/announcement_viewed`, {
              additionalHeaders: { "ChatGPT-Account-ID": n },
              parameters: { query: { announcement_id: `oai/apps/hasSeenFinancialServicesTerms` } },
            }).catch(dt);
        }),
        (t[4] = n),
        (t[5] = e.beacon.beacon_id),
        (t[6] = e.eventMetadata?.suppressLifecycle),
        (t[7] = i))
      : (i = t[7]);
    let a;
    return (
      t[8] !== e || t[9] !== r || t[10] !== i
        ? ((a = (0, $.jsx)(ft, { ...e, onCompleted: i }, r)),
          (t[8] = e),
          (t[9] = r),
          (t[10] = i),
          (t[11] = a))
        : (a = t[11]),
      a
    );
  }
  let r;
  return (t[12] === e ? (r = t[13]) : ((r = (0, $.jsx)(ft, { ...e })), (t[12] = e), (t[13] = r)), r);
}
function dt() {}
function ft(e) {
  let n = (0, pt.c)(96),
    {
      actionOverrides: i,
      allowExternalActions: a,
      allowRemoteImages: o,
      analyticsContext: s,
      beacon: c,
      eventAccountId: u,
      eventMetadata: d,
      getActionOverride: te,
      onComposerText: p,
      onCompleted: m,
      onDismiss: h,
      onOpen: g,
      onResolve: v,
      onSendPrompt: b,
      onStartVoice: x,
    } = e,
    S = a === void 0 || a,
    C = o === void 0 || o,
    w = t(_),
    T = c.ui_info,
    E = c.custom_fields?.modal_presentation === `expressive`,
    ie = (0, mt.useRef)(null),
    D = (0, mt.useRef)(!1),
    O;
  n[0] === m
    ? (O = n[1])
    : ((O = () => {
        D.current || ((D.current = !0), m?.());
      }),
      (n[0] = m),
      (n[1] = O));
  let k = O,
    ae;
  n[2] !== k || n[3] !== h
    ? ((ae = () => {
        (h(), k());
      }),
      (n[2] = k),
      (n[3] = h),
      (n[4] = ae))
    : (ae = n[4]);
  let A = ae,
    j = y(),
    M = r(),
    [P, F] = (0, mt.useState)(null),
    I = M ? (T.header_image_url_dark ?? T.header_image_url) : T.header_image_url,
    L = T.footer_link,
    R = C && I != null && oe(I) ? I : null,
    z = R != null && R !== P,
    V = z && c.custom_fields?.close_button_on_media === !0,
    H = c.action_items.length === 0,
    { alignment: U, supporting_text: W, supporting_text_format: le } = T,
    G = L != null && se(L.url) && (S || L.url.startsWith(`/`)) ? L : null,
    K;
  n[5] !== s?.suppressLifecycle || n[6] !== c || n[7] !== j || n[8] !== w || n[9] !== G
    ? ((K = (e) => {
        if (G != null) {
          if ((s?.suppressLifecycle !== !0 && B(w, c, G), G.url.startsWith(`/`))) {
            (e.preventDefault(), j(G.url));
            return;
          }
          N({ event: e, href: G.url, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
        }
      }),
      (n[5] = s?.suppressLifecycle),
      (n[6] = c),
      (n[7] = j),
      (n[8] = w),
      (n[9] = G),
      (n[10] = K))
    : (K = n[10]);
  let ue = K,
    de = V ? `mediaOverlay` : `default`,
    q;
  n[11] === p
    ? (q = n[12])
    : ((q = (e) => {
        ie.current != null && (e.preventDefault(), p?.(ie.current));
      }),
      (n[11] = p),
      (n[12] = q));
  let fe;
  n[13] !== g || n[14] !== q
    ? ((fe = { onOpenAutoFocus: g, onCloseAutoFocus: q }), (n[13] = g), (n[14] = q), (n[15] = fe))
    : (fe = n[15]);
  let pe = `beacon-modal-${c.beacon_id}`,
    me = `beacon-modal-${c.beacon_id}`,
    he = E ? `expressiveBeacon` : `beaconModal`,
    ge;
  n[16] === A
    ? (ge = n[17])
    : ((ge = (e) => {
        e || A();
      }),
      (n[16] = A),
      (n[17] = ge));
  let _e;
  n[18] !== V || n[19] !== z || n[20] !== R || n[21] !== E || n[22] !== T.header_image_alt
    ? ((_e = z
        ? (0, $.jsx)(
            `img`,
            {
              alt: T.header_image_alt ?? ``,
              className: f(`w-full object-contain object-bottom`, E && !V && `aspect-[478/232]`),
              draggable: !1,
              src: R,
              onError: () => F(R),
            },
            R,
          )
        : null),
      (n[18] = V),
      (n[19] = z),
      (n[20] = R),
      (n[21] = E),
      (n[22] = T.header_image_alt),
      (n[23] = _e))
    : (_e = n[23]);
  let ve = E ? `gap-1 px-6 pt-5 pb-6` : `px-8`,
    ye;
  n[24] !== U ||
  n[25] !== c.action_items.length ||
  n[26] !== z ||
  n[27] !== E ||
  n[28] !== H ||
  n[29] !== W ||
  n[30] !== ve
    ? ((ye = f(
        `flex flex-col select-none`,
        ve,
        !E && [
          z ? `gap-2 pt-10` : `gap-6 pt-12`,
          W && `pb-4`,
          !W && z && H && `pb-16`,
          !W && z && !H && `pb-6`,
          !W && !z && `pb-8`,
        ],
        U === `center` || (U == null && (z || c.action_items.length === 0)) ? `text-center` : `text-start`,
      )),
      (n[24] = U),
      (n[25] = c.action_items.length),
      (n[26] = z),
      (n[27] = E),
      (n[28] = H),
      (n[29] = W),
      (n[30] = ve),
      (n[31] = ye))
    : (ye = n[31]);
  let be = E ? `expressiveBeacon` : `default`,
    J = !E && (H ? `heading-lg leading-7` : `heading-dialog`),
    xe = z && `text-balance`,
    Se;
  n[32] !== J || n[33] !== xe ? ((Se = f(J, xe)), (n[32] = J), (n[33] = xe), (n[34] = Se)) : (Se = n[34]);
  let Ce;
  n[35] !== be || n[36] !== Se || n[37] !== T.title
    ? ((Ce = (0, $.jsx)(re, { variant: be, className: Se, children: T.title })),
      (n[35] = be),
      (n[36] = Se),
      (n[37] = T.title),
      (n[38] = Ce))
    : (Ce = n[38]);
  let we = E ? `text-document leading-5 whitespace-pre-line text-default` : `leading-normal text-secondary`,
    Te = !E && (H ? ct.informationalDescription : `text-base`),
    Ee;
  n[39] !== we || n[40] !== Te ? ((Ee = f(we, Te)), (n[39] = we), (n[40] = Te), (n[41] = Ee)) : (Ee = n[41]);
  let Y;
  n[42] !== S || n[43] !== T.description || n[44] !== T.description_format
    ? ((Y =
        T.description_format === `markdown`
          ? (0, $.jsx)(Oe, { text: T.description, allowExternalActions: S })
          : T.description),
      (n[42] = S),
      (n[43] = T.description),
      (n[44] = T.description_format),
      (n[45] = Y))
    : (Y = n[45]);
  let De;
  n[46] !== Ee || n[47] !== Y
    ? ((De = (0, $.jsx)(ee, { asChild: !0, children: (0, $.jsx)(`div`, { className: Ee, children: Y }) })),
      (n[46] = Ee),
      (n[47] = Y),
      (n[48] = De))
    : (De = n[48]);
  let ke;
  n[49] !== ye || n[50] !== Ce || n[51] !== De
    ? ((ke = (0, $.jsxs)(`div`, { className: ye, children: [Ce, De] })),
      (n[49] = ye),
      (n[50] = Ce),
      (n[51] = De),
      (n[52] = ke))
    : (ke = n[52]);
  let Ae;
  n[53] !== U || n[54] !== S || n[55] !== c.action_items.length || n[56] !== z || n[57] !== W || n[58] !== le
    ? ((Ae = W
        ? (0, $.jsx)(`div`, {
            className: f(
              `px-8 pb-6 text-sm text-secondary select-none`,
              U === `center` || (U == null && (z || c.action_items.length === 0))
                ? `text-center`
                : `text-start`,
            ),
            children: le === `markdown` ? (0, $.jsx)(Oe, { text: W, allowExternalActions: S }) : W,
          })
        : null),
      (n[53] = U),
      (n[54] = S),
      (n[55] = c.action_items.length),
      (n[56] = z),
      (n[57] = W),
      (n[58] = le),
      (n[59] = Ae))
    : (Ae = n[59]);
  let je;
  n[60] !== i ||
  n[61] !== U ||
  n[62] !== S ||
  n[63] !== C ||
  n[64] !== s ||
  n[65] !== c ||
  n[66] !== k ||
  n[67] !== A ||
  n[68] !== u ||
  n[69] !== d ||
  n[70] !== te ||
  n[71] !== E ||
  n[72] !== p ||
  n[73] !== v ||
  n[74] !== b ||
  n[75] !== x
    ? ((je =
        c.action_items.length > 0
          ? (0, $.jsx)(`div`, {
              className: f(
                `flex flex-col gap-3`,
                E ? `pb-6` : `pb-8`,
                c.custom_fields?.stack_actions !== !0 && `sm:flex-row sm:flex-wrap sm:items-center`,
                U === `start` ? `items-start justify-start px-8` : `items-stretch justify-center px-6`,
              ),
              children: (0, $.jsx)(ce, {
                actionItems: c.action_items,
                actionOverrides: i,
                allowExternalActions: S,
                allowRemoteImages: C,
                analyticsContext: s,
                beacon: c,
                eventAccountId: u,
                eventMetadata: d,
                getActionOverride: te,
                onActionComplete: (e, t) => {
                  e.type !== `copy` && (v(e, t), k());
                },
                onComposerText:
                  p == null
                    ? void 0
                    : (e) => {
                        ie.current = e;
                      },
                onDismiss: A,
                onSendPrompt: b,
                onStartVoice: x,
                useExternalBrowser: !0,
                variant: E ? `expressiveModal` : `modal`,
              }),
            })
          : null),
      (n[60] = i),
      (n[61] = U),
      (n[62] = S),
      (n[63] = C),
      (n[64] = s),
      (n[65] = c),
      (n[66] = k),
      (n[67] = A),
      (n[68] = u),
      (n[69] = d),
      (n[70] = te),
      (n[71] = E),
      (n[72] = p),
      (n[73] = v),
      (n[74] = b),
      (n[75] = x),
      (n[76] = je))
    : (je = n[76]);
  let Me;
  n[77] !== U || n[78] !== ue || n[79] !== G || n[80] !== T.footer_text
    ? ((Me =
        T.footer_text == null
          ? null
          : (0, $.jsx)(`div`, {
              className: f(`px-8 pb-10 text-sm text-secondary select-none`, U === `center` && `text-center`),
              children: (0, $.jsxs)(`span`, {
                children: [
                  T.footer_text,
                  G == null
                    ? null
                    : (0, $.jsxs)($.Fragment, {
                        children: [
                          ` `,
                          (0, $.jsx)(`a`, {
                            className: `underline`,
                            href: G.url,
                            onClick: ue,
                            children: G.text,
                          }),
                        ],
                      }),
                ],
              }),
            })),
      (n[77] = U),
      (n[78] = ue),
      (n[79] = G),
      (n[80] = T.footer_text),
      (n[81] = Me))
    : (Me = n[81]);
  let Ne;
  n[82] !== _e || n[83] !== ke || n[84] !== Ae || n[85] !== je || n[86] !== Me
    ? ((Ne = (0, $.jsxs)(l, { variant: `chatgpt`, children: [_e, ke, Ae, je, Me] })),
      (n[82] = _e),
      (n[83] = ke),
      (n[84] = Ae),
      (n[85] = je),
      (n[86] = Me),
      (n[87] = Ne))
    : (Ne = n[87]);
  let X;
  return (
    n[88] !== me ||
    n[89] !== he ||
    n[90] !== ge ||
    n[91] !== Ne ||
    n[92] !== de ||
    n[93] !== fe ||
    n[94] !== pe
      ? ((X = (0, $.jsx)(ne, {
          open: !0,
          closeButtonVariant: de,
          contentProps: fe,
          contentClassName: pe,
          overlayClassName: me,
          size: `beacon`,
          variant: he,
          onOpenChange: ge,
          children: Ne,
        })),
        (n[88] = me),
        (n[89] = he),
        (n[90] = ge),
        (n[91] = Ne),
        (n[92] = de),
        (n[93] = fe),
        (n[94] = pe),
        (n[95] = X))
      : (X = n[95]),
    X
  );
}
var pt, mt, $;
function ht() {
  return (ht = e(() => {
    ((pt = h()),
      te(),
      C(),
      (mt = o()),
      p(),
      V(),
      z(),
      D(),
      u(),
      c(),
      F(),
      n(),
      w(),
      U(),
      De(),
      Le(),
      ot(),
      H(),
      lt(),
      ($ = d()));
  }))();
}
export { ht as n, ut as t };
//# sourceMappingURL=modal-2b04eeed83a6.js.map
