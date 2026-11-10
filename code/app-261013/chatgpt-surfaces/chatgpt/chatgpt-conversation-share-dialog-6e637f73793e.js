import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $u as n,
  ADt as r,
  BX as i,
  CPt as a,
  Cot as o,
  Fat as s,
  GE as c,
  Gu as l,
  Hu as u,
  IDt as d,
  Ixt as f,
  Ju as p,
  Ku as m,
  Mz as h,
  Nz as g,
  Pat as _,
  Pxt as v,
  Qu as y,
  SPt as b,
  SU as x,
  TJ as ee,
  Uu as S,
  VDt as te,
  Vu as C,
  Vxt as ne,
  WE as w,
  Wu as T,
  Xot as re,
  Xu as ie,
  Yot as ae,
  Yu as oe,
  Zu as se,
  _J as ce,
  _Mt as le,
  aW as E,
  ed as ue,
  fO as de,
  gMt as D,
  hW as fe,
  hot as pe,
  i3 as O,
  iW as me,
  iot as he,
  jDt as k,
  lO as ge,
  lot as A,
  mK as _e,
  nB as ve,
  oW as ye,
  oot as be,
  pK as xe,
  qu as Se,
  r3 as Ce,
  t3 as we,
  tB as Te,
  vJ as Ee,
  vzt as j,
  wot as De,
  xMt as Oe,
  yzt as ke,
  zX as Ae,
  zxt as je,
} from "./app-shared-bbfeca5e5737.js";
import {
  Au as M,
  BIt as Me,
  CIt as N,
  DIt as Ne,
  Dur as Pe,
  EIt as Fe,
  Eur as Ie,
  FIt as Le,
  Fnn as Re,
  GIt as P,
  GMr as F,
  GOr as ze,
  GUn as Be,
  HIt as Ve,
  IIt as He,
  Ii as Ue,
  Inn as We,
  JIt as Ge,
  JPn as I,
  KIt as Ke,
  KUn as qe,
  Li as Je,
  Mu as Ye,
  OIt as Xe,
  PIt as Ze,
  QDr as Qe,
  QGn as L,
  QPn as $e,
  QQn as et,
  TIt as tt,
  VIt as nt,
  WIt as rt,
  XDr as R,
  XIt as z,
  XPn as it,
  YIt as at,
  _i as ot,
  act as st,
  dH as ct,
  dIt as lt,
  e$n as ut,
  eDr as dt,
  fIt as ft,
  gIt as pt,
  hIt as mt,
  iDr as B,
  iPr as V,
  jIt as ht,
  ju as gt,
  ku as H,
  mIt as _t,
  nKn as vt,
  qIt as yt,
  qOr as bt,
  rct as xt,
  sPr as St,
  tNr as Ct,
  uH as U,
  vi as wt,
  wIt as Tt,
  xIt as Et,
} from "./app-initial-5851df3f6cb1.js";
import { n as W, t as Dt } from "./thread-dialog-3dfc4e247c51.js";
import { n as Ot, t as kt } from "./thread-preview-be8c5b151e0c.js";
import { n as At, r as G } from "./chatgpt-conversation-share-preview-8e080c19e2da.js";
import { f as jt, i as K } from "./chatgpt_image_lightbox-600530866e50.js";
import { a as Mt, n as Nt, r as Pt } from "./image-analytics-e61d1c085ef8.js";
import { n as Ft, t as It } from "./linkedin-2032ee10f5b5.js";
async function Lt(
  e,
  {
    images: t,
    downloadSources: n,
    intl: r,
    serverConversationId: i,
    isParagen: a = !1,
    logIndividualDownloads: o = !0,
  },
) {
  let s = 0;
  for (let [c, l] of t.entries()) {
    if (l.src == null || l.status !== `completed` || l.isPreview) continue;
    i != null && a && Pt(e, i, l, `download`, `paragen`);
    let u = n?.get(l.id) ?? l.src;
    i != null &&
      (u = await wt({
        conversationId: null,
        absoluteImageFilePath: null,
        hostId: he,
        imageAssetResolver: Re(i),
        queryClient: e.queryClient,
        src: u,
      }));
    let d = Ue(l).downloadExtension ?? M(u ?? l.src) ?? `png`,
      f = H(r, d, { title: l.chatGptDisplayTitle, gifSpeed: l.gifPlayback?.speed }),
      p = !1;
    if (
      u != null &&
      (await Ye({
        downloadSrc: u,
        onDownloaded: () => {
          ((p = !0), i != null && !a && o && Pt(e, i, l, `download`));
        },
        suggestedFilename: t.length > 1 ? f.replace(/\.[^.]+$/, `-${c + 1}.${d}`) : f,
      }))
    ) {
      if (!p) return `cancelled`;
      s++;
      continue;
    }
    return (
      e
        .get(pe)
        .danger(
          r.formatMessage({
            id: `imageSidePanel.downloadFailure`,
            defaultMessage: `Could not download image`,
            description: `Error shown when the image toolbar download fails.`,
          }),
          { errorAnalytics: { toastId: `imageSidePanel.downloadFailure` } },
        ),
      `failed`
    );
  }
  return s > 0 ? `downloaded` : `empty`;
}
function Rt() {
  return (Rt = e(() => {
    (A(), ot(), Je(), gt(), be(), We(), Nt());
  }))();
}
function zt(e, t, n) {
  return {
    queryKey: [
      `chatgpt-image-share`,
      t,
      n.item.id,
      n.item.src,
      n.additionalImages?.map((e) => [e.id, e.src]),
    ],
    queryFn: async () => {
      let r = await N({ additionalImages: n.additionalImages, conversationId: t, image: n.item });
      return (n.isDirectLightboxShare && Qe(e, K, {}), r);
    },
    staleTime: 1 / 0,
  };
}
function Bt() {
  return (Bt = e(() => {
    (jt(), R(), Ze());
  }))();
}
function Vt(e = Ut) {
  if (typeof navigator.share != `function`) return !1;
  if (typeof navigator.canShare != `function`) return !0;
  try {
    return navigator.canShare({ url: e });
  } catch {
    return !1;
  }
}
async function Ht(e, t, n, r, i = at.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION) {
  let a = { url: t.shareLinkUrl };
  if (t.isWorkspaceOnly || !Vt(a.url)) return `failed`;
  let o = {
    actor: nt.CHATGPT_SHARE_FLOW_ACTOR_SHARER,
    attachmentType: Ve.CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE,
    contentType: rt.CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE,
    source: i,
    sheetType: Ge.CHATGPT_SHARE_FLOW_SHEET_TYPE_SYSTEM,
    conversationId: n,
    shareSessionId: r,
    shareId: t.shareLinkId,
  };
  try {
    let t = navigator.share(a);
    return (
      Qe(e, Ke, { ...o, action: Me.CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHEET_OPENED }),
      await t,
      Qe(e, Ke, { ...o, action: Me.CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHARE_COMPLETED }),
      `shared`
    );
  } catch (t) {
    let n = t instanceof Error && t.name === `AbortError`;
    return (
      Qe(e, Ke, {
        ...o,
        action: n ? Me.CHATGPT_SHARE_FLOW_ACTION_DISMISSED : Me.CHATGPT_SHARE_FLOW_ACTION_FAILED,
        failureReason: n ? void 0 : yt.CHATGPT_SHARE_FLOW_FAILURE_REASON_UNSPECIFIED,
      }),
      n ? `cancelled` : `failed`
    );
  }
}
var Ut;
function q() {
  return (q = e(() => {
    (z(), R(), (Ut = `https://chatgpt.com/s/native-image-share-capability-check`));
  }))();
}
function Wt(e) {
  let t = (0, J.c)(4),
    { includeConversationAudience: n, linkAppearance: r } = e,
    i = n !== void 0 && n,
    a = r === void 0 ? `secondary` : r;
  if (i) {
    let e;
    return (
      t[0] === a
        ? (e = t[1])
        : ((e = (0, Y.jsx)(d, {
            id: `chatgptConversations.shareDialog.conversationMemoryDisclosure`,
            defaultMessage: `Anyone with this link can access messages up to this point. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>`,
            description: `Audience and privacy explanation in the personal ChatGPT conversation sharing dialog. The link includes messages through the selected point, but does not give viewers access to the underlying Memory sources. The learnMore tag links to the shared-links help article.`,
            values: { learnMore: (e) => (0, Y.jsx)(Gt, { appearance: a, children: e }) },
          })),
          (t[0] = a),
          (t[1] = e)),
      e
    );
  }
  let o;
  return (
    t[2] === a
      ? (o = t[3])
      : ((o = (0, Y.jsx)(d, {
          id: `chatgptConversations.shareDialog.memoryDisclosure`,
          defaultMessage: `Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>`,
          description: `Privacy disclosure in ChatGPT content-sharing dialogs for personal and workspace accounts. Underlying Memory sources are not included in what recipients can view. The learnMore tag links to the shared-links help article.`,
          values: { learnMore: (e) => (0, Y.jsx)(Gt, { appearance: a, children: e }) },
        })),
        (t[2] = a),
        (t[3] = o)),
    o
  );
}
function Gt({ children: e, appearance: t = `secondary` }) {
  return null;
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = j()), k(), (Y = Oe()));
  }))();
}
function Kt(e) {
  let n = (0, qt.c)(22),
    {
      "aria-label": r,
      "data-destination": i,
      disabled: a,
      icons: o,
      isBusy: s,
      label: c,
      announceLabel: l,
      type: u,
      onClick: d,
    } = e,
    f = s !== void 0 && s,
    p = l !== void 0 && l,
    m = u === void 0 ? `button` : u,
    h;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = { layer: `3136899520`, parameter: `large_share_destinations` }), (n[0] = h))
    : (h = n[0]);
  let g = je(bt, h),
    _ = g ? o.large : o.compact,
    v = g ? `size-16` : `size-11`,
    y;
  n[1] === v
    ? (y = n[2])
    : ((y = D(`share-destination-icon flex items-center justify-center rounded-full`, v)),
      (n[1] = v),
      (n[2] = y));
  let b;
  n[3] !== g || n[4] !== _ || n[5] !== f
    ? ((b = f ? (0, Jt.jsx)(Ce, { as: `span`, className: g ? `size-8` : `icon-sm` }) : _),
      (n[3] = g),
      (n[4] = _),
      (n[5] = f),
      (n[6] = b))
    : (b = n[6]);
  let x;
  n[7] !== y || n[8] !== b
    ? ((x = (0, Jt.jsx)(`span`, { className: y, children: b })), (n[7] = y), (n[8] = b), (n[9] = x))
    : (x = n[9]);
  let ee = p ? `polite` : void 0,
    S;
  n[10] !== c || n[11] !== ee
    ? ((S = (0, Jt.jsx)(`span`, {
        className: `w-full text-center text-xs whitespace-nowrap text-default select-none`,
        "aria-live": ee,
        children: c,
      })),
      (n[10] = c),
      (n[11] = ee),
      (n[12] = S))
    : (S = n[12]);
  let te;
  return (
    n[13] !== r ||
    n[14] !== i ||
    n[15] !== a ||
    n[16] !== f ||
    n[17] !== d ||
    n[18] !== S ||
    n[19] !== x ||
    n[20] !== m
      ? ((te = (0, Jt.jsxs)(t, {
          "aria-label": r,
          "aria-busy": f,
          "data-destination": i,
          color: `shareDestination`,
          disabled: a,
          size: `shareDestination`,
          type: m,
          onClick: d,
          children: [x, S],
        })),
        (n[13] = r),
        (n[14] = i),
        (n[15] = a),
        (n[16] = f),
        (n[17] = d),
        (n[18] = S),
        (n[19] = x),
        (n[20] = m),
        (n[21] = te))
      : (te = n[21]),
    te
  );
}
var qt, Jt;
function Yt() {
  return (Yt = e(() => {
    ((qt = j()), le(), v(), we(), O(), ze(), (Jt = Oe()));
  }))();
}
var Xt, Zt, Qt, $t;
function en() {
  return (en = e(() => {
    ((Xt = `_mobileRow_42nx1_2`),
      (Zt = `_mobileDestination_42nx1_2`),
      (Qt = `_destinationIcon_42nx1_2`),
      ($t = { mobileRow: Xt, mobileDestination: Zt, destinationIcon: Qt }));
  }))();
}
function tn(e) {
  let r = (0, nn.c)(72),
    {
      copyLabel: a,
      copyDisabled: o,
      isBusy: s,
      isDownloading: c,
      socialDestinationsDisabled: l,
      showSocialDestinations: d,
      onCopy: f,
      onDownload: g,
      additionalActions: _,
      onSocialShare: v,
      mobileImageActions: y,
    } = e,
    b = c !== void 0 && c,
    x = y != null,
    ee;
  r[0] === x
    ? (ee = r[1])
    : ((ee = { layer: `3136899520`, parameter: `large_share_destinations`, disableExposureLog: x }),
      (r[0] = x),
      (r[1] = ee));
  let S = je(bt, ee),
    C = te(),
    { client: ne } = B(),
    w;
  if (r[2] !== ne || r[3] !== C || r[4] !== v || r[5] !== l) {
    let e = ne.getContext().user?.country?.trim().toUpperCase(),
      t;
    r[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(h, { asset: oe })), (r[7] = t))
      : (t = r[7]);
    let n;
    r[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Z.jsx)(h, { asset: oe })), (r[8] = n))
      : (n = r[8]);
    let i;
    r[9] === v ? (i = r[10]) : ((i = (e) => v(`messages`, e)), (r[9] = v), (r[10] = i));
    let a;
    r[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Z.jsx)(h, { asset: T })), (r[11] = a))
      : (a = r[11]);
    let o;
    r[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, Z.jsx)(h, { asset: T })), (r[12] = o))
      : (o = r[12]);
    let s;
    (r[13] === v ? (s = r[14]) : ((s = (e) => v(`whatsapp`, e)), (r[13] = v), (r[14] = s)),
      (w = [
        {
          id: `messages`,
          largeIcon: t,
          disabled: l,
          icon: n,
          label: C.formatMessage({
            id: `chatgptConversations.mobileImageShare.messages`,
            defaultMessage: `Messages`,
            description: `Destination in the mobile generated-image share sheet that opens a text message containing the image link`,
          }),
          onClick: i,
        },
        {
          id: `whatsapp`,
          largeIcon: a,
          disabled: l,
          icon: o,
          label: C.formatMessage({
            id: `chatgptConversations.mobileImageShare.whatsapp`,
            defaultMessage: `WhatsApp`,
            description: `Destination in the mobile generated-image share sheet that opens WhatsApp with the image link`,
          }),
          onClick: s,
        },
      ]),
      e != null && rn.has(e) && w.reverse(),
      (r[2] = ne),
      (r[3] = C),
      (r[4] = v),
      (r[5] = l),
      (r[6] = w));
  } else w = r[6];
  let re;
  r[15] !== C || r[16] !== s || r[17] !== b || r[18] !== y || r[19] !== g
    ? ((re =
        g == null
          ? []
          : [
              {
                id: `download`,
                largeIcon: (0, Z.jsx)(ve, { "aria-hidden": `true` }),
                disabled: b || (y != null && s),
                icon: y == null ? (0, Z.jsx)(Te, {}) : (0, Z.jsx)(h, { asset: n }),
                label: C.formatMessage({
                  id: `chatgptConversations.shareDialog.destination.download.label`,
                  defaultMessage: `Download`,
                  description: `Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link.`,
                }),
                onClick: g,
              },
            ]),
      (r[15] = C),
      (r[16] = s),
      (r[17] = b),
      (r[18] = y),
      (r[19] = g),
      (r[20] = re))
    : (re = r[20]);
  let ie = re,
    ae;
  r[21] !== ie || r[22] !== y
    ? ((ae = y == null ? [] : ie), (r[21] = ie), (r[22] = y), (r[23] = ae))
    : (ae = r[23]);
  let le;
  r[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, Z.jsx)(E, { "aria-hidden": `true` })), (r[24] = le))
    : (le = r[24]);
  let ue;
  r[25] === y
    ? (ue = r[26])
    : ((ue = y == null ? (0, Z.jsx)(me, {}) : (0, Z.jsx)(h, { asset: p })), (r[25] = y), (r[26] = ue));
  let de;
  r[27] !== o || r[28] !== a || r[29] !== f || r[30] !== ue
    ? ((de = { id: `copy`, largeIcon: le, disabled: o, icon: ue, label: a, onClick: f }),
      (r[27] = o),
      (r[28] = a),
      (r[29] = f),
      (r[30] = ue),
      (r[31] = de))
    : (de = r[31]);
  let fe;
  r[32] !== o || r[33] !== C || r[34] !== y
    ? ((fe = y?.canNativeShare
        ? [
            {
              id: `native`,
              largeIcon: (0, Z.jsx)(h, { asset: se }),
              disabled: o,
              icon: (0, Z.jsx)(h, { asset: se }),
              label: C.formatMessage({
                id: `chatgptConversations.mobileImageShare.native`,
                defaultMessage: `Share to`,
                description: `Action in the mobile generated-image share sheet that opens the operating system share sheet with a link to the image`,
              }),
              onClick: y.onNativeShare,
            },
          ]
        : []),
      (r[32] = o),
      (r[33] = C),
      (r[34] = y),
      (r[35] = fe))
    : (fe = r[35]);
  let pe;
  r[36] !== y || r[37] !== w || r[38] !== d
    ? ((pe = y != null && d ? w : []), (r[36] = y), (r[37] = w), (r[38] = d), (r[39] = pe))
    : (pe = r[39]);
  let O;
  r[40] !== C || r[41] !== y || r[42] !== v || r[43] !== d || r[44] !== l
    ? ((O = d
        ? [
            {
              id: `x`,
              largeIcon: (0, Z.jsx)(Ee, { "aria-hidden": `true` }),
              disabled: l,
              icon: y == null ? (0, Z.jsx)(ce, { "aria-hidden": `true` }) : (0, Z.jsx)(h, { asset: u }),
              label: C.formatMessage({
                id: `chatgptConversations.shareDialog.destination.x.label`,
                defaultMessage: `X`,
                description: `Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL. Other destinations are Copy link, LinkedIn, and Reddit.`,
              }),
              onClick: (e) => v(`x`, e),
            },
            {
              id: `linkedin`,
              largeIcon: (0, Z.jsx)(ye, { "aria-hidden": `true` }),
              disabled: l,
              icon: y == null ? (0, Z.jsx)(It, { "aria-hidden": `true` }) : (0, Z.jsx)(h, { asset: m }),
              label: C.formatMessage({
                id: `chatgptConversations.shareDialog.destination.linkedin.label`,
                defaultMessage: `LinkedIn`,
                description: `Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL. Other destinations are Copy link, X, and Reddit.`,
              }),
              onClick: (e) => v(`linkedin`, e),
            },
            {
              id: `reddit`,
              largeIcon: (0, Z.jsx)(_e, { "aria-hidden": `true` }),
              disabled: l,
              icon: y == null ? (0, Z.jsx)(xe, { "aria-hidden": `true` }) : (0, Z.jsx)(h, { asset: i }),
              label: C.formatMessage({
                id: `chatgptConversations.shareDialog.destination.reddit.label`,
                defaultMessage: `Reddit`,
                description: `Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens Reddit's submission form with the public post URL. Other destinations are Copy link, X, and LinkedIn.`,
              }),
              onClick: (e) => v(`reddit`, e),
            },
          ]
        : []),
      (r[40] = C),
      (r[41] = y),
      (r[42] = v),
      (r[43] = d),
      (r[44] = l),
      (r[45] = O))
    : (O = r[45]);
  let he;
  r[46] !== ie || r[47] !== y
    ? ((he = y == null ? ie : []), (r[46] = ie), (r[47] = y), (r[48] = he))
    : (he = r[48]);
  let k;
  r[49] !== pe || r[50] !== O || r[51] !== he || r[52] !== ae || r[53] !== de || r[54] !== fe
    ? ((k = [...ae, de, ...fe, ...pe, ...O, ...he]),
      (r[49] = pe),
      (r[50] = O),
      (r[51] = he),
      (r[52] = ae),
      (r[53] = de),
      (r[54] = fe),
      (r[55] = k))
    : (k = r[55]);
  let ge = k,
    A = y == null && _ == null && `flex-wrap justify-center gap-x-6 gap-y-4`,
    be = y == null && _ != null && `gap-3`,
    Se = y == null && _ != null && S && `flex-wrap justify-center`,
    we = y == null && _ != null && !S && `justify-start overflow-x-auto sm:justify-center`,
    j = y != null && `gap-x-6`,
    De = y != null && $t.mobileRow,
    Oe;
  r[56] !== A || r[57] !== be || r[58] !== Se || r[59] !== we || r[60] !== j || r[61] !== De
    ? ((Oe = D(`flex w-full`, A, be, Se, we, j, De)),
      (r[56] = A),
      (r[57] = be),
      (r[58] = Se),
      (r[59] = we),
      (r[60] = j),
      (r[61] = De),
      (r[62] = Oe))
    : (Oe = r[62]);
  let ke;
  r[63] !== ge || r[64] !== s || r[65] !== b || r[66] !== y
    ? ((ke = ge.map((e) => {
        let { id: n, disabled: r, icon: i, largeIcon: a, label: o, onClick: c } = e,
          l = (n === `copy` && s) || (n === `download` && b);
        return (0, Z.jsx)(
          xt,
          {
            extension: n === `download`,
            children:
              y == null
                ? (0, Z.jsx)(Kt, {
                    "aria-label": o,
                    "data-destination": n,
                    disabled: r,
                    icons: { compact: i, large: a },
                    isBusy: l,
                    label: o,
                    announceLabel: n === `copy`,
                    type: n === `copy` ? `submit` : `button`,
                    onClick: c,
                  })
                : (0, Z.jsxs)(t, {
                    "aria-label": o,
                    "aria-busy": l,
                    color: `shareDestination`,
                    unstyled: !0,
                    className: $t.mobileDestination,
                    "data-destination": n,
                    disabled: r,
                    size: `shareDestination`,
                    type: n === `copy` ? `submit` : `button`,
                    onClick: c,
                    children: [
                      (0, Z.jsx)(`span`, {
                        className: $t.destinationIcon,
                        children: l ? (0, Z.jsx)(Ce, { as: `span`, className: `icon-sm` }) : i,
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `w-full text-center whitespace-nowrap text-default select-none`,
                        "aria-live": n === `copy` ? `polite` : void 0,
                        children: o,
                      }),
                    ],
                  }),
          },
          n,
        );
      })),
      (r[63] = ge),
      (r[64] = s),
      (r[65] = b),
      (r[66] = y),
      (r[67] = ke))
    : (ke = r[67]);
  let Ae;
  return (
    r[68] !== _ || r[69] !== Oe || r[70] !== ke
      ? ((Ae = (0, Z.jsxs)(`div`, { className: Oe, children: [ke, _] })),
        (r[68] = _),
        (r[69] = Oe),
        (r[70] = ke),
        (r[71] = Ae))
      : (Ae = r[71]),
    Ae
  );
}
var nn, Z, rn;
function an() {
  return (an = e(() => {
    ((nn = j()),
      ue(),
      y(),
      ie(),
      Se(),
      l(),
      Ae(),
      S(),
      C(),
      le(),
      v(),
      k(),
      we(),
      g(),
      ee(),
      O(),
      st(),
      Ft(),
      dt(),
      ze(),
      Yt(),
      en(),
      (Z = Oe()),
      (rn = new Set([`BR`, `DE`, `ES`, `GB`, `IE`, `IT`, `NL`, `PT`])));
  }))();
}
function on(e) {
  let t = (0, vn.c)(12),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ accountId: n, onClose: r, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = ne(F) === n,
    o,
    s;
  (t[4] !== a || t[5] !== r
    ? ((o = () => {
        a || r();
      }),
      (s = [a, r]),
      (t[4] = a),
      (t[5] = r),
      (t[6] = o),
      (t[7] = s))
    : ((o = t[6]), (s = t[7])),
    (0, yn.useEffect)(o, s));
  let c;
  return (
    t[8] !== a || t[9] !== r || t[10] !== i
      ? ((c = a ? (0, Q.jsx)(sn, { ...i, onClose: r }) : null),
        (t[8] = a),
        (t[9] = r),
        (t[10] = i),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function sn(e) {
  let t = (0, vn.c)(290),
    {
      currentNodeId: n,
      image: r,
      imagePromptTemplate: i,
      imageShareOptions: s,
      recoveryShareLink: c,
      messageIds: l,
      mobileImageSheet: u,
      trackMobileImageShareLifecycle: p,
      onClose: m,
      previewTurns: h,
      privacyNotices: g,
      prompt: v,
      receiverShareLink: y,
      response: b,
      serverConversationId: x,
      shareSessionId: ee,
      source: S,
      title: C,
      widget: w,
    } = e,
    T = f(o),
    [ie] = (0, yn.useState)(!1),
    ae = (0, yn.useRef)(null),
    oe,
    se;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = () => () => ae.current?.abort()), (se = []), (t[0] = oe), (t[1] = se))
    : ((oe = t[0]), (se = t[1])),
    (0, yn.useEffect)(oe, se));
  let ce = ne(null),
    le = je(null, x),
    E = te(),
    ue = (0, yn.useContext)(Ie),
    de;
  t[2] !== r || t[3] !== T || t[4] !== x
    ? ((de = r == null ? void 0 : zt(T, x, r)), (t[2] = r), (t[3] = T), (t[4] = x), (t[5] = de))
    : (de = t[5]);
  let D = de,
    fe;
  t[6] !== i || t[7] !== D || t[8] !== y || t[9] !== c || t[10] !== T.queryClient
    ? ((fe = () =>
        y ?? c ?? (D == null || i != null ? null : (T.queryClient.getQueryData(D.queryKey) ?? null))),
      (t[6] = i),
      (t[7] = D),
      (t[8] = y),
      (t[9] = c),
      (t[10] = T.queryClient),
      (t[11] = fe))
    : (fe = t[11]);
  let [O, me] = (0, yn.useState)(fe),
    [he] = (0, yn.useState)(dn),
    k = ee ?? he,
    [A, _e] = (0, yn.useState)(`idle`),
    [ve, ye] = (0, yn.useState)(c == null ? null : `copy-failed`),
    [be, xe] = (0, yn.useState)(!1),
    Se;
  t[12] === x ? (Se = t[13]) : ((Se = [`chatgpt-conversation-share`, x]), (t[12] = x), (t[13] = Se));
  let Ce = Se,
    we = c == null && y == null && v == null && r == null && l == null && w == null,
    Te;
  t[14] !== n || t[15] !== x
    ? ((Te = () => Xe({ conversationId: x, currentNodeId: n })), (t[14] = n), (t[15] = x), (t[16] = Te))
    : (Te = t[16]);
  let Ee;
  t[17] !== Ce || t[18] !== we || t[19] !== Te
    ? ((Ee = { enabled: we, queryFn: Te, queryKey: Ce, retry: !1, staleTime: _.ONE_MINUTE }),
      (t[17] = Ce),
      (t[18] = we),
      (t[19] = Te),
      (t[20] = Ee))
    : (Ee = t[20]);
  let { data: j, error: De, isLoading: Oe } = re(Ee),
    ke;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = { enabled: !1, queryFn: un, queryKey: [`accounts`, `check`], staleTime: _.ONE_MINUTE }),
      (t[21] = ke))
    : (ke = t[21]);
  let { data: Ae } = re(ke),
    M = r != null,
    N = u === !0 && M,
    Pe = N || p === !0,
    P = y != null,
    F = (r?.additionalImages?.length ?? 0) > 0,
    ze;
  t[22] !== r || t[23] !== x || t[24] !== k
    ? ((ze = Re(et(x), void 0, r != null && r.previewSrc == null ? k : void 0)),
      (t[22] = r),
      (t[23] = x),
      (t[24] = k),
      (t[25] = ze))
    : (ze = t[25]);
  let {
      src: He,
      isLoading: Ue,
      onImageError: We,
    } = vt(r != null && (F || r.previewSrc == null) ? (r.item.src ?? ``) : ``, ze),
    I = r != null && r.previewSrc == null && He == null,
    qe = F ? `image_series` : `single_image`,
    Je = l != null || w != null || y?.contentType === `message`,
    Ye = w?.metadata.widgetType === `visualization`,
    Ze =
      w?.metadata.widgetName === `create_interactive_poll` ||
      w?.metadata.widgetName === `CreateInteractivePoll`,
    L = v != null || i != null,
    R = M || Je || L,
    z = R || !1,
    ot = `conversation`;
  Ye
    ? (ot = `widget`)
    : i == null
      ? M
        ? (ot = F ? `images` : `image`)
        : Je
          ? (ot = `message`)
          : L && (ot = `prompt`)
      : (ot = `prompt`);
  let st;
  t[26] !== g || t[27] !== b
    ? ((st = b == null ? g : ht(b)), (t[26] = g), (t[27] = b), (t[28] = st))
    : (st = t[28]);
  let ut = st,
    dt = M || ((!R || Je) && ut?.hasImageReference === !0),
    ft;
  t[29] !== r?.item || t[30] !== F || t[31] !== C
    ? ((ft = (F ? void 0 : r?.item.chatGptDisplayTitle) ?? Be(C)),
      (t[29] = r?.item),
      (t[30] = F),
      (t[31] = C),
      (t[32] = ft))
    : (ft = t[32]);
  let B = ft,
    V = !R && j?.is_public === !0 && j.is_visible === !0,
    gt =
      Ae?.accounts?.find((e) => e.id === (ue?.accountId ?? Ae.account_ordering?.[0]))?.structure ??
      ue?.accountStructureAtLogin,
    H = `unknown`;
  O?.isWorkspaceOnly == null
    ? j != null && !M
      ? (H = j.share_url.includes(`/share/e/`) ? `workspace` : `public`)
      : (gt === `personal` || gt === `workspace`) && (H = gt === `workspace` ? `workspace` : `public`)
    : (H = O.isWorkspaceOnly ? `workspace` : `public`);
  let yt;
  t[33] === D?.queryKey
    ? (yt = t[34])
    : ((yt = D?.queryKey ?? [`disabled-chatgpt-image-share-query`]), (t[33] = D?.queryKey), (t[34] = yt));
  let bt;
  t[35] === D?.queryFn ? (bt = t[36]) : ((bt = D?.queryFn ?? ln), (t[35] = D?.queryFn), (t[36] = bt));
  let xt = N && p === !0 && Vt() && i == null && D != null && H === `public` && O == null,
    St;
  t[37] !== yt || t[38] !== bt || t[39] !== xt
    ? ((St = { queryKey: yt, queryFn: bt, enabled: xt, retry: !1, staleTime: 1 / 0 }),
      (t[37] = yt),
      (t[38] = bt),
      (t[39] = xt),
      (t[40] = St))
    : (St = t[40]);
  let Ct = re(St);
  Ct.data?.isWorkspaceOnly != null && (H = Ct.data.isWorkspaceOnly ? `workspace` : `public`);
  let U = O ?? (i == null ? (Ct.data ?? null) : null),
    wt = U?.shareLinkUrl ?? (V ? j.share_url : null),
    W = !R && U == null && V && j.current_node_id !== n,
    Ot = H === `workspace`,
    G = A === `creating`,
    jt = !R && Oe,
    K;
  t[41] !== ve || t[42] !== De || t[43] !== Ct.error
    ? ((K = ve),
      K == null && De != null && (K = De instanceof Et ? `blocked` : `create-failed`),
      K == null && Ct.error != null && (K = Ct.error instanceof Et ? `blocked` : `create-failed`),
      (t[41] = ve),
      (t[42] = De),
      (t[43] = Ct.error),
      (t[44] = K))
    : (K = t[44]);
  let Nt,
    Pt = $.description,
    Ft = $.publicLinkAudience;
  if (Ye) {
    let e;
    (t[45] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(d, { ...$.widgetTitle })), (t[45] = e))
      : (e = t[45]),
      (Nt = e));
  } else if (i != null && !N) {
    let e;
    (t[46] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(d, {
          id: `chatgptConversations.shareDialog.imagePromptTitle`,
          defaultMessage: `Share prompt with image`,
          description: `Short heading of the generated-image share dialog when Prompt with image is selected. Users share the generated image and its reusable prompt so recipients can try the prompt. The other option is Image only.`,
        })),
        (t[46] = e))
      : (e = t[46]),
      (Nt = e));
  } else if (M) {
    let e;
    (t[47] !== B || t[48] !== s || t[49] !== F || t[50] !== N
      ? ((e =
          N || B == null || s != null
            ? (0, Q.jsx)(d, { ...(F ? $.imagesTitle : $.imageTitle) })
            : (0, Q.jsx)(Q.Fragment, { children: B })),
        (t[47] = B),
        (t[48] = s),
        (t[49] = F),
        (t[50] = N),
        (t[51] = e))
      : (e = t[51]),
      (Nt = e));
  } else if (Ze) {
    let e;
    (t[52] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(d, {
          id: `chatgptConversations.shareDialog.poll.title`,
          defaultMessage: `Share poll`,
          description: `Short heading of the dialog for sharing one interactive poll. The user can create or send a link so other people can vote on the poll.`,
        })),
        (t[52] = e))
      : (e = t[52]),
      (Nt = e));
  } else if (Je) {
    let e;
    (t[53] === B
      ? (e = t[54])
      : ((e = B == null ? (0, Q.jsx)(d, { ...$.messageTitle }) : (0, Q.jsx)(Q.Fragment, { children: B })),
        (t[53] = B),
        (t[54] = e)),
      (Nt = e));
  } else if (L) {
    let e;
    (t[55] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(d, { ...$.promptTitle })), (t[55] = e))
      : (e = t[55]),
      (Nt = e));
  } else {
    if (z) {
      let e;
      (t[56] === B
        ? (e = t[57])
        : ((e = B == null ? void 0 : (0, Q.jsx)(Q.Fragment, { children: B })), (t[56] = B), (t[57] = e)),
        (Nt = e));
    }
    Ot
      ? (Pt = g?.isProjectConversation ? $.workspaceProjectDescription : $.workspaceDescription)
      : j?.is_anonymous === !1
        ? (Pt = $.attributedDescription)
        : g?.isProjectConversation && (Pt = $.projectDescription);
  }
  Ot && (Ft = dt ? $.workspaceImageRightsAudience : $.workspaceLinkAudience);
  let It = A === `copied` ? $.copied : $.copyLink;
  W ? (It = $.updateLink) : wt == null && A !== `copied` && (It = $.createLink);
  let Rt;
  t[58] !== E || t[59] !== A
    ? ((Rt = A === `copied` ? E.formatMessage($.copied) : E.formatMessage($.copyLink)),
      (t[58] = E),
      (t[59] = A),
      (t[60] = Rt))
    : (Rt = t[60]);
  let Bt = Rt,
    Ut;
  t[61] !== E || t[62] !== T
    ? ((Ut = function (e, t) {
        let n = e instanceof Et ? `blocked` : t;
        n !== `blocked` &&
          a.warning(`chatgpt_conversation_share_failed`, { safe: { stage: n }, sensitive: { error: e } });
        let r;
        bb543: switch (n) {
          case `blocked`:
            r = E.formatMessage($.shareBlocked);
            break bb543;
          case `copy-failed`:
            r = E.formatMessage($.shareCopyFailed);
            break bb543;
          case `create-failed`:
            r = E.formatMessage($.shareCreateFailed);
        }
        return (
          ye(n),
          _e(`idle`),
          T.get(pe).danger(r, {
            errorAnalytics: {
              toastId: {
                "copy-failed": `failed_to_copy_share_link`,
                "create-failed": `failed_to_generate_share_link`,
                blocked: `chatgptConversationShareDialog.shareBlocked`,
              }[n],
            },
          }),
          n
        );
      }),
      (t[61] = E),
      (t[62] = T),
      (t[63] = Ut))
    : (Ut = t[63]);
  let q = Ut,
    Gt,
    J,
    Y;
  t[64] !== M || t[65] !== Je || t[66] !== L || t[67] !== P || t[68] !== y || t[69] !== S || t[70] !== w
    ? ((Gt = P ? nt.CHATGPT_SHARE_FLOW_ACTOR_RECEIVER : nt.CHATGPT_SHARE_FLOW_ACTOR_SHARER),
      (Y = P
        ? at.CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER
        : (S ?? at.CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU)),
      y == null
        ? w == null
          ? M
            ? ((J = Ve.CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE),
              (Y = S ?? at.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION))
            : Je
              ? ((J = Ve.CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE),
                (Y = at.CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION))
              : L &&
                ((J = Ve.CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT),
                (Y = S ?? at.CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION))
          : ((J = Ve.CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET),
            (Y = at.CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION))
        : (J = y.attachmentType),
      (t[64] = M),
      (t[65] = Je),
      (t[66] = L),
      (t[67] = P),
      (t[68] = y),
      (t[69] = S),
      (t[70] = w),
      (t[71] = Gt),
      (t[72] = J),
      (t[73] = Y))
    : ((Gt = t[71]), (J = t[72]), (Y = t[73]));
  let X =
      y?.contentType === `message` || R
        ? rt.CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE
        : rt.CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION,
    Kt;
  t[74] !== U ||
  t[75] !== n ||
  t[76] !== V ||
  t[77] !== j ||
  t[78] !== i ||
  t[79] !== D ||
  t[80] !== R ||
  t[81] !== W ||
  t[82] !== l ||
  t[83] !== v ||
  t[84] !== T.queryClient ||
  t[85] !== x ||
  t[86] !== Ce ||
  t[87] !== C ||
  t[88] !== w
    ? ((Kt = async function (e) {
        let t =
          U ??
          (V
            ? { currentNodeId: j.current_node_id, shareLinkId: j.share_id, shareLinkUrl: j.share_url }
            : null);
        if (i == null && t != null && !W) return t;
        let r;
        return (
          (r =
            i == null
              ? D == null
                ? w == null
                  ? l == null
                    ? v == null
                      ? await Ne({ conversationId: x, currentNodeId: n, existingShareLink: j, title: C })
                      : await T.queryClient.fetchQuery({
                          queryFn: () => tt({ conversationId: x, messageId: v.messageId }),
                          queryKey: [`chatgpt-prompt-share`, x, v.messageId],
                          staleTime: 1 / 0,
                        })
                    : await T.queryClient.fetchQuery({
                        queryFn: () => Tt({ conversationId: x, currentNodeId: n, messageIds: l }),
                        queryKey: [`chatgpt-message-share`, x, n],
                        staleTime: 1 / 0,
                      })
                  : await Fe(w.attachment)
                : await T.queryClient.fetchQuery(D)
              : await i.createLink(e)),
          me(r),
          j != null &&
            !R &&
            T.queryClient.setQueryData(Ce, { ...j, current_node_id: n, is_public: !0, is_visible: !0 }),
          r
        );
      }),
      (t[74] = U),
      (t[75] = n),
      (t[76] = V),
      (t[77] = j),
      (t[78] = i),
      (t[79] = D),
      (t[80] = R),
      (t[81] = W),
      (t[82] = l),
      (t[83] = v),
      (t[84] = T.queryClient),
      (t[85] = x),
      (t[86] = Ce),
      (t[87] = C),
      (t[88] = w),
      (t[89] = Kt))
    : (Kt = t[89]);
  let qt = Kt,
    Jt;
  t[90] !== Gt ||
  t[91] !== J ||
  t[92] !== X ||
  t[93] !== U ||
  t[94] !== qt ||
  t[95] !== V ||
  t[96] !== j ||
  t[97] !== i ||
  t[98] !== I ||
  t[99] !== P ||
  t[100] !== W ||
  t[101] !== G ||
  t[102] !== m ||
  t[103] !== q ||
  t[104] !== T ||
  t[105] !== x ||
  t[106] !== wt ||
  t[107] !== k ||
  t[108] !== Y ||
  t[109] !== z ||
  t[110] !== w?.metadata
    ? ((Jt = async function () {
        if (G || I || i?.actionsDisabled) return;
        let e = lt(T, {
          actor: Gt,
          attachmentType: J,
          widgetMetadata: w?.metadata,
          contentType: X,
          conversationId: P ? void 0 : x,
          shareId: U?.shareLinkId ?? (V ? j.share_id : void 0),
          shareSessionId: k,
          source: Y,
          usedExistingLink: wt != null && !W,
        });
        (ye(null), _e(`creating`));
        let t = i != null || wt == null || W ? `create-failed` : `copy-failed`,
          n = U;
        try {
          let r = await qt(`copy`);
          ((n = r), (t = `copy-failed`));
          let i = r.shareLinkUrl,
            a;
          if (((a = await Le(i)), !a)) {
            (e({ result: `copy-failed`, shareId: r.shareLinkId }),
              q(Error(`Failed to copy ChatGPT conversation share link`), `copy-failed`));
            return;
          }
          (e({ result: `link-copied`, shareId: r.shareLinkId }), _e(`copied`), z || (ct(T), m()));
        } catch (r) {
          let i = r,
            a = q(i, t);
          e(a === `create-failed` ? { result: a, error: i } : { result: a, shareId: n?.shareLinkId });
        }
      }),
      (t[90] = Gt),
      (t[91] = J),
      (t[92] = X),
      (t[93] = U),
      (t[94] = qt),
      (t[95] = V),
      (t[96] = j),
      (t[97] = i),
      (t[98] = I),
      (t[99] = P),
      (t[100] = W),
      (t[101] = G),
      (t[102] = m),
      (t[103] = q),
      (t[104] = T),
      (t[105] = x),
      (t[106] = wt),
      (t[107] = k),
      (t[108] = Y),
      (t[109] = z),
      (t[110] = w?.metadata),
      (t[111] = Jt))
    : (Jt = t[111]);
  let Yt = Jt,
    Xt;
  t[112] !== J ||
  t[113] !== X ||
  t[114] !== U?.shareLinkId ||
  t[115] !== T ||
  t[116] !== x ||
  t[117] !== k ||
  t[118] !== Y
    ? ((Xt = function (e) {
        Qe(T, Ke, {
          action: e,
          actor: nt.CHATGPT_SHARE_FLOW_ACTOR_SHARER,
          attachmentType: J,
          contentType: X,
          conversationId: x,
          shareId: U?.shareLinkId,
          shareSessionId: k,
          source: Y,
          sheetType: Ge.CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM,
        });
      }),
      (t[112] = J),
      (t[113] = X),
      (t[114] = U?.shareLinkId),
      (t[115] = T),
      (t[116] = x),
      (t[117] = k),
      (t[118] = Y),
      (t[119] = Xt))
    : (Xt = t[119]);
  let Zt = Xt,
    Qt;
  t[120] !== U ||
  t[121] !== K ||
  t[122] !== qt ||
  t[123] !== D ||
  t[124] !== E ||
  t[125] !== G ||
  t[126] !== m ||
  t[127] !== q ||
  t[128] !== T ||
  t[129] !== x ||
  t[130] !== H ||
  t[131] !== k ||
  t[132] !== Y
    ? ((Qt = async function () {
        if (!(G || D == null || H !== `public` || K === `blocked`)) {
          (ye(null), _e(`creating`));
          try {
            let e = U ?? (await qt(`copy`)),
              t = await Ht(T, e, x, k, Y);
            (_e(`idle`),
              t === `shared` && m(),
              t === `failed` &&
                T.get(pe).danger(
                  E.formatMessage({
                    id: `chatgptConversations.mobileImageShare.nativeFailed`,
                    defaultMessage: `Could not open sharing. Try again or copy the link`,
                    description: `Error in the mobile image share sheet when the device cannot open native link sharing. The user can retry or use Copy link`,
                  }),
                  { errorAnalytics: { toastId: `chatgptConversations.mobileImageShare.nativeFailed` } },
                ));
          } catch (e) {
            q(e, `create-failed`);
          }
        }
      }),
      (t[120] = U),
      (t[121] = K),
      (t[122] = qt),
      (t[123] = D),
      (t[124] = E),
      (t[125] = G),
      (t[126] = m),
      (t[127] = q),
      (t[128] = T),
      (t[129] = x),
      (t[130] = H),
      (t[131] = k),
      (t[132] = Y),
      (t[133] = Qt))
    : (Qt = t[133]);
  let $t = Qt,
    en;
  t[134] !== Gt ||
  t[135] !== J ||
  t[136] !== X ||
  t[137] !== U ||
  t[138] !== B ||
  t[139] !== qt ||
  t[140] !== V ||
  t[141] !== j ||
  t[142] !== i ||
  t[143] !== qe ||
  t[144] !== M ||
  t[145] !== I ||
  t[146] !== L ||
  t[147] !== P ||
  t[148] !== W ||
  t[149] !== G ||
  t[150] !== q ||
  t[151] !== T ||
  t[152] !== H ||
  t[153] !== A ||
  t[154] !== k ||
  t[155] !== Y ||
  t[156] !== w?.metadata
    ? ((en = async function (e, t) {
        if (G || I || H !== `public` || i?.actionsDisabled) return;
        (t.preventDefault(),
          !P && !L && e !== `messages` && e !== `whatsapp` && pt(T, e, M ? qe : void 0),
          mt(T, {
            actor: Gt,
            attachmentType: J,
            widgetMetadata: w?.metadata,
            contentType: X,
            destination: _n(e),
            shareId: U?.shareLinkId ?? (V && !W ? j.share_id : void 0),
            shareSessionId: k,
            source: Y,
          }),
          ye(null));
        let n = A;
        _e(`creating`);
        let r;
        try {
          r = await qt(`social`);
        } catch (e) {
          let t = e;
          (t instanceof Et ||
            _t(T, {
              actor: Gt,
              attachmentType: J,
              widgetMetadata: w?.metadata,
              contentType: X,
              shareSessionId: k,
              source: Y,
            }),
            q(t, `create-failed`));
          return;
        }
        if (r.isWorkspaceOnly === !0) {
          _e(n);
          return;
        }
        let a = gn(e, r.shareLinkUrl, r.title ?? B);
        (e === `messages`
          ? ((window.location.href = a), $e({ href: a, modifiedClick: !1 }))
          : it({ event: t, href: a, initiator: `open_in_browser_bridge`, openTarget: `external-browser` }),
          _e(n));
      }),
      (t[134] = Gt),
      (t[135] = J),
      (t[136] = X),
      (t[137] = U),
      (t[138] = B),
      (t[139] = qt),
      (t[140] = V),
      (t[141] = j),
      (t[142] = i),
      (t[143] = qe),
      (t[144] = M),
      (t[145] = I),
      (t[146] = L),
      (t[147] = P),
      (t[148] = W),
      (t[149] = G),
      (t[150] = q),
      (t[151] = T),
      (t[152] = H),
      (t[153] = A),
      (t[154] = k),
      (t[155] = Y),
      (t[156] = w?.metadata),
      (t[157] = en))
    : (en = t[157]);
  let nn = en,
    Z;
  t[158] !== J ||
  t[159] !== X ||
  t[160] !== r ||
  t[161] !== qe ||
  t[162] !== E ||
  t[163] !== be ||
  t[164] !== I ||
  t[165] !== T ||
  t[166] !== x ||
  t[167] !== k ||
  t[168] !== Y
    ? ((Z = async function () {
        if (r == null || be || I) return;
        pt(T, `download`, qe);
        let e = [r.item, ...(r.additionalImages ?? [])].filter(cn);
        e.length !== 0 &&
          (xe(!0),
          Qe(T, Ke, {
            action: Me.CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED,
            actor: nt.CHATGPT_SHARE_FLOW_ACTOR_SHARER,
            attachmentType: J,
            contentType: X,
            conversationId: x,
            shareSessionId: k,
            sheetType: Ge.CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM,
            source: Y,
          }),
          await Lt(T, { images: e, intl: E, serverConversationId: et(x), logIndividualDownloads: !1 })
            .then((e) => {
              e === `downloaded` && Mt(T, x, r.item);
            })
            .finally(() => {
              xe(!1);
            }));
      }),
      (t[158] = J),
      (t[159] = X),
      (t[160] = r),
      (t[161] = qe),
      (t[162] = E),
      (t[163] = be),
      (t[164] = I),
      (t[165] = T),
      (t[166] = x),
      (t[167] = k),
      (t[168] = Y),
      (t[169] = Z))
    : (Z = t[169]);
  let rn = Z,
    an;
  t[170] !== r?.additionalImages?.length || t[171] !== F
    ? ((an = F
        ? (0, Q.jsx)(d, {
            id: `chatgptConversations.shareDialog.imageSeriesCount`,
            defaultMessage: `Sharing {imageCount} images together`,
            description: `Subtitle beneath the generated-image share modal title after choosing to share a series. imageCount is the number of images included in the link, always greater than one. This informs the user that all listed images are shared together.`,
            values: { imageCount: 1 + (r?.additionalImages?.length ?? 0) },
          })
        : void 0),
      (t[170] = r?.additionalImages?.length),
      (t[171] = F),
      (t[172] = an))
    : (an = t[172]);
  let on = an,
    sn = on;
  if (!F && !z) {
    let e;
    (t[173] === Pt ? (e = t[174]) : ((e = (0, Q.jsx)(d, { ...Pt })), (t[173] = Pt), (t[174] = e)), (sn = e));
  }
  if (i != null) {
    let e;
    (t[175] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(d, {
          id: `imagePromptShare.audience`,
          defaultMessage: `Anyone with the link can try this prompt`,
          description: `Audience description when sharing a generated image as a reusable prompt template`,
        })),
        (t[175] = e))
      : (e = t[175]),
      (sn = e));
  } else if (N) {
    let e;
    t[176] === H
      ? (e = t[177])
      : ((e =
          H === `public`
            ? (0, Q.jsx)(d, {
                id: `chatgptConversations.mobileImageShare.publicAudience`,
                defaultMessage: `Anyone with the link can view`,
                description: `Audience disclosure in the mobile generated-image share sheet for a public link`,
              })
            : null),
        (t[176] = H),
        (t[177] = e));
    let n;
    t[178] === H
      ? (n = t[179])
      : ((n =
          H !== `public` &&
          (0, Q.jsx)(d, {
            id: `chatgptConversations.mobileImageShare.workspaceAudience`,
            defaultMessage: `Only workspace members with the link can view`,
            description: `Audience disclosure below Share image in the mobile image share sheet for a workspace account`,
          })),
        (t[178] = H),
        (t[179] = n));
    let r;
    (t[180] !== e || t[181] !== n
      ? ((r = (0, Q.jsxs)(Q.Fragment, { children: [e, n] })), (t[180] = e), (t[181] = n), (t[182] = r))
      : (r = t[182]),
      (sn = r));
  }
  let bn;
  N ? (bn = `responsiveSheet`) : z && (bn = `share`);
  let xn;
  if (i != null) {
    let e;
    if (t[183] !== r?.previewSrc || t[184] !== i || t[185] !== G || t[186] !== He) {
      let n;
      (t[188] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = () => {
            (ye(null), _e(`idle`));
          }),
          (t[188] = n))
        : (n = t[188]),
        (e = i.preview(G, r?.previewSrc ?? He ?? null, n)),
        (t[183] = r?.previewSrc),
        (t[184] = i),
        (t[185] = G),
        (t[186] = He),
        (t[187] = e));
    } else e = t[187];
    xn = e;
  } else {
    let e;
    (t[189] !== r ||
    t[190] !== E ||
    t[191] !== Ue ||
    t[192] !== F ||
    t[193] !== Ye ||
    t[194] !== We ||
    t[195] !== h ||
    t[196] !== v ||
    t[197] !== He ||
    t[198] !== b ||
    t[199] !== x ||
    t[200] !== N ||
    t[201] !== w
      ? ((e =
          r == null
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  w != null &&
                    Ye &&
                    (0, Q.jsx)(kt, {
                      ariaLabel: E.formatMessage({
                        id: `shareDialog.widget.previewLabel`,
                        defaultMessage: `Preview of the shared widget`,
                        description: `Accessible description of the non-interactive selected-widget preview in a ChatGPT widget sharing dialog.`,
                      }),
                      variant: `response`,
                      children: w.preview,
                    }),
                  w != null && !Ye && (0, Q.jsx)(kt, { variant: `response`, children: w.preview }),
                  w == null && (0, Q.jsx)(At, { prompt: v, response: b, serverConversationId: x, turns: h }),
                ],
              })
            : (0, Q.jsx)(kt, {
                ariaLabel: F ? E.formatMessage($.imagesPreview) : r.alt,
                variant: `image`,
                classicImagePreviewEligible: !F && !N,
                presentation: N ? `imageSheet` : void 0,
                children:
                  F || r.previewSrc == null
                    ? (0, Q.jsx)(pn, { src: He, isLoading: Ue, onImageError: We })
                    : (0, Q.jsx)(`img`, {
                        alt: r.alt,
                        className: N ? void 0 : `block size-full object-contain`,
                        referrerPolicy: `no-referrer`,
                        src: r.previewSrc,
                      }),
              })),
        (t[189] = r),
        (t[190] = E),
        (t[191] = Ue),
        (t[192] = F),
        (t[193] = Ye),
        (t[194] = We),
        (t[195] = h),
        (t[196] = v),
        (t[197] = He),
        (t[198] = b),
        (t[199] = x),
        (t[200] = N),
        (t[201] = w),
        (t[202] = e))
      : (e = t[202]),
      (xn = e));
  }
  if (N) {
    let e;
    t[203] !== i || t[204] !== xn
      ? ((e = i == null ? xn : (0, Q.jsx)(`div`, { className: `px-6`, children: xn })),
        (t[203] = i),
        (t[204] = xn),
        (t[205] = e))
      : (e = t[205]);
    let n;
    t[206] === on
      ? (n = t[207])
      : ((n =
          on != null &&
          (0, Q.jsx)(`p`, { className: `mt-3 text-center text-sm text-secondary`, children: on })),
        (t[206] = on),
        (t[207] = n));
    let r;
    (t[208] !== e || t[209] !== n
      ? ((r = (0, Q.jsxs)(Q.Fragment, { children: [e, n] })), (t[208] = e), (t[209] = n), (t[210] = r))
      : (r = t[210]),
      (xn = r));
  }
  let Sn;
  t[211] !== Ft || t[212] !== z
    ? ((Sn = z ? void 0 : (0, Q.jsx)(d, { ...Ft })), (t[211] = Ft), (t[212] = z), (t[213] = Sn))
    : (Sn = t[213]);
  let Cn;
  t[214] === It ? (Cn = t[215]) : ((Cn = (0, Q.jsx)(d, { ...It })), (t[214] = It), (t[215] = Cn));
  let wn = i?.actionsDisabled || jt || I || K === `blocked`,
    Tn = G || jt || ie,
    En = !z && G,
    Dn;
  t[216] !== Zt || t[217] !== Pe || t[218] !== z
    ? ((Dn = z
        ? (e) => {
            (Pe && Zt(Me.CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED),
              e.preventDefault(),
              e.currentTarget instanceof HTMLElement && e.currentTarget.focus());
          }
        : void 0),
      (t[216] = Zt),
      (t[217] = Pe),
      (t[218] = z),
      (t[219] = Dn))
    : (Dn = t[219]);
  let On = N ? `imageSheet` : void 0,
    kn;
  t[220] !== le ||
  t[221] !== U ||
  t[222] !== ce ||
  t[223] !== K ||
  t[224] !== rn ||
  t[225] !== $t ||
  t[226] !== nn ||
  t[227] !== r ||
  t[228] !== i ||
  t[229] !== qe ||
  t[230] !== be ||
  t[231] !== jt ||
  t[232] !== M ||
  t[233] !== I ||
  t[234] !== ie ||
  t[235] !== L ||
  t[236] !== P ||
  t[237] !== G ||
  t[238] !== v ||
  t[239] !== y ||
  t[240] !== Bt ||
  t[241] !== T ||
  t[242] !== H ||
  t[243] !== p ||
  t[244] !== N ||
  t[245] !== z ||
  t[246] !== w
    ? ((kn = z
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(tn, {
                mobileImageActions: N
                  ? {
                      canNativeShare: H === `public` && (p !== !0 || U != null) && Vt(U?.shareLinkUrl),
                      onNativeShare: () => {
                        $t();
                      },
                    }
                  : void 0,
                copyLabel: Bt,
                copyDisabled: i?.actionsDisabled || jt || G || I || K === `blocked`,
                isBusy: G || jt || ie,
                isDownloading: be,
                socialDestinationsDisabled:
                  i?.actionsDisabled || jt || G || I || H !== `public` || K === `blocked`,
                showSocialDestinations: H === `public`,
                additionalActions: void 0,
                onDownload:
                  i != null || r == null || I
                    ? void 0
                    : () => {
                        rn();
                      },
                onCopy: () => {
                  !P && !L && pt(T, `copy`, M ? qe : void 0);
                },
                onSocialShare: (e, t) => {
                  nn(e, t);
                },
              }),
              N &&
                (0, Q.jsx)(`p`, {
                  className: `mt-7 px-6 text-center text-xs leading-4.5 text-tertiary select-none`,
                  children: (0, Q.jsx)(Wt, { linkAppearance: `inherit` }),
                }),
            ],
          })
        : void 0),
      (t[220] = le),
      (t[221] = U),
      (t[222] = ce),
      (t[223] = K),
      (t[224] = rn),
      (t[225] = $t),
      (t[226] = nn),
      (t[227] = r),
      (t[228] = i),
      (t[229] = qe),
      (t[230] = be),
      (t[231] = jt),
      (t[232] = M),
      (t[233] = I),
      (t[234] = ie),
      (t[235] = L),
      (t[236] = P),
      (t[237] = G),
      (t[238] = v),
      (t[239] = y),
      (t[240] = Bt),
      (t[241] = T),
      (t[242] = H),
      (t[243] = p),
      (t[244] = N),
      (t[245] = z),
      (t[246] = w),
      (t[247] = kn))
    : (kn = t[247]);
  let An;
  t[248] !== s ||
  t[249] !== Ze ||
  t[250] !== G ||
  t[251] !== ot ||
  t[252] !== H ||
  t[253] !== dt ||
  t[254] !== N ||
  t[255] !== z
    ? ((An = z
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              s != null &&
                (N
                  ? (0, Q.jsx)(`div`, { className: `px-6`, children: s(G) })
                  : (0, Q.jsx)(ge, { children: s(G) })),
              !N && (0, Q.jsx)(fn, { audience: H, contentType: ot, isPoll: Ze, showImageRightsNotice: dt }),
            ],
          })
        : void 0),
      (t[248] = s),
      (t[249] = Ze),
      (t[250] = G),
      (t[251] = ot),
      (t[252] = H),
      (t[253] = dt),
      (t[254] = N),
      (t[255] = z),
      (t[256] = An))
    : (An = t[256]);
  let jn;
  t[257] !== K || t[258] !== i || t[259] !== wt
    ? ((jn =
        K == null
          ? void 0
          : {
              content: (0, Q.jsx)(hn, { error: K }),
              copyUrl: K === `copy-failed` ? wt : void 0,
              preventsSharing: K === `blocked` && i == null,
            }),
      (t[257] = K),
      (t[258] = i),
      (t[259] = wt),
      (t[260] = jn))
    : (jn = t[260]);
  let Mn = dt && !Ot && !M,
    Nn = !R || Je,
    Pn;
  t[261] !== ut || t[262] !== Mn || t[263] !== Nn
    ? ((Pn = (0, Q.jsx)(mn, { showImageRightsNotice: Mn, showContentNotices: Nn, privacyNotices: ut })),
      (t[261] = ut),
      (t[262] = Mn),
      (t[263] = Nn),
      (t[264] = Pn))
    : (Pn = t[264]);
  let Fn;
  t[265] !== Zt || t[266] !== m || t[267] !== Pe
    ? ((Fn = () => {
        (Pe && Zt(Me.CHATGPT_SHARE_FLOW_ACTION_DISMISSED), m());
      }),
      (t[265] = Zt),
      (t[266] = m),
      (t[267] = Pe),
      (t[268] = Fn))
    : (Fn = t[268]);
  let In;
  t[269] === Yt
    ? (In = t[270])
    : ((In = () => {
        Yt();
      }),
      (t[269] = Yt),
      (t[270] = In));
  let Ln;
  return (
    t[271] !== bn ||
    t[272] !== Nt ||
    t[273] !== B ||
    t[274] !== xn ||
    t[275] !== sn ||
    t[276] !== Sn ||
    t[277] !== Cn ||
    t[278] !== wn ||
    t[279] !== Tn ||
    t[280] !== En ||
    t[281] !== Dn ||
    t[282] !== On ||
    t[283] !== kn ||
    t[284] !== An ||
    t[285] !== jn ||
    t[286] !== Pn ||
    t[287] !== Fn ||
    t[288] !== In
      ? ((Ln = (0, Q.jsx)(Dt, {
          threadTitle: B,
          title: Nt,
          subtitle: sn,
          audience: Sn,
          actionLabel: Cn,
          actionDisabled: wn,
          isBusy: Tn,
          isDismissalDisabled: En,
          onOpenAutoFocus: Dn,
          size: bn,
          presentation: On,
          footer: kn,
          preview: xn,
          info: An,
          error: jn,
          notices: Pn,
          onClose: Fn,
          onSubmit: In,
        })),
        (t[271] = bn),
        (t[272] = Nt),
        (t[273] = B),
        (t[274] = xn),
        (t[275] = sn),
        (t[276] = Sn),
        (t[277] = Cn),
        (t[278] = wn),
        (t[279] = Tn),
        (t[280] = En),
        (t[281] = Dn),
        (t[282] = On),
        (t[283] = kn),
        (t[284] = An),
        (t[285] = jn),
        (t[286] = Pn),
        (t[287] = Fn),
        (t[288] = In),
        (t[289] = Ln))
      : (Ln = t[289]),
    Ln
  );
}
function cn(e) {
  return e.src != null && e.status === `completed` && !e.isPreview;
}
async function ln() {
  throw Error(`Image share is unavailable`);
}
function un() {
  return V.safeGet(`/wham/accounts/check`);
}
function dn() {
  return crypto.randomUUID();
}
function fn(e) {
  let t = (0, vn.c)(43),
    { audience: n, contentType: r, isPoll: i, showImageRightsNotice: a } = e,
    o = n === `workspace` ? fe : x,
    s,
    c;
  if (n === `workspace`) {
    let e;
    if (
      (t[0] !== r || t[1] !== a
        ? ((e = (0, Q.jsxs)(Q.Fragment, {
            children: [
              null,
              (0, Q.jsx)(Q.Fragment, {
                children: a
                  ? (0, Q.jsx)(d, { ...$.workspaceImageRightsAudience, values: { contentType: r } })
                  : (0, Q.jsx)(d, { ...$.workspaceLinksVisible }),
              }),
            ],
          })),
          (t[0] = r),
          (t[1] = a),
          (t[2] = e))
        : (e = t[2]),
      (c = e),
      r === `widget`)
    ) {
      let e;
      (t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, { ...$.shareLinkToWidget })), (t[3] = e))
        : (e = t[3]),
        (s = e));
    } else if (r === `images`) {
      let e;
      (t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, { ...$.shareLinkToImages })), (t[4] = e))
        : (e = t[4]),
        (s = e));
    } else if (r === `image`) {
      let e;
      (t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, { ...$.shareLinkToImage })), (t[5] = e))
        : (e = t[5]),
        (s = e));
    } else if (r === `message`) {
      let e;
      (t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, { ...$.shareLinkToMessage })), (t[6] = e))
        : (e = t[6]),
        (s = e));
    } else if (r === `prompt`) {
      let e;
      (t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, { ...$.shareLinkToPrompt })), (t[7] = e))
        : (e = t[7]),
        (s = e));
    } else {
      let e;
      (t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, { ...$.shareLinkToConversation })), (t[8] = e))
        : (e = t[8]),
        (s = e));
    }
  } else if (n === `unknown`) {
    if (r === `images`) {
      let e;
      (t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, {
            id: `chatgptConversations.shareDialog.imagesRightsDisclaimer`,
            defaultMessage: `Confirm you have the rights to share these images.`,
            description: `Legal-permission reminder below the heading when sharing a generated-image series before the link audience is known. Asks the user to confirm permission to share every selected image. Shown as a standalone notice.`,
          })),
          (t[9] = e))
        : (e = t[9]),
        (c = e));
    } else if (r === `image`) {
      let e;
      (t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, { ...$.imageLicenseDisclaimer })), (t[10] = e))
        : (e = t[10]),
        (c = e));
    }
    if (r === `widget`) {
      let e;
      (t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, { ...$.shareLinkToWidget })), (t[11] = e))
        : (e = t[11]),
        (s = e));
    } else if (r === `images`) {
      let e;
      (t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, { ...$.shareLinkToImages })), (t[12] = e))
        : (e = t[12]),
        (s = e));
    } else if (r === `image`) {
      let e;
      (t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, { ...$.shareLinkToImage })), (t[13] = e))
        : (e = t[13]),
        (s = e));
    } else if (r === `message`) {
      let e;
      (t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, { ...$.shareLinkToMessage })), (t[14] = e))
        : (e = t[14]),
        (s = e));
    } else if (r === `prompt`) {
      let e;
      (t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, { ...$.shareLinkToPrompt })), (t[15] = e))
        : (e = t[15]),
        (s = e));
    } else {
      let e;
      (t[16] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, { ...$.shareLinkToConversation })), (t[16] = e))
        : (e = t[16]),
        (s = e));
    }
  } else if (r === `widget`) {
    let e;
    (t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(d, { ...$.sharePublicLinkToWidget })), (t[17] = e))
      : (e = t[17]),
      (s = e));
    let n;
    (t[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsxs)(Q.Fragment, {
          children: [
            null,
            (0, Q.jsx)(Q.Fragment, { children: (0, Q.jsx)(d, { ...$.widgetPublicLinkAudience }) }),
          ],
        })),
        (t[18] = n))
      : (n = t[18]),
      (c = n));
  } else if (r === `images`) {
    let e;
    (t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(d, { ...$.sharePublicLinkToImages })), (t[19] = e))
      : (e = t[19]),
      (s = e));
    let n;
    (t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsxs)(Q.Fragment, {
          children: [
            null,
            (0, Q.jsx)(Q.Fragment, { children: (0, Q.jsx)(d, { ...$.imagesPublicLinkAudience }) }),
          ],
        })),
        (t[20] = n))
      : (n = t[20]),
      (c = n));
  } else if (r === `image`) {
    let e;
    (t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(d, { ...$.sharePublicLinkToImage })), (t[21] = e))
      : (e = t[21]),
      (s = e));
    let n;
    (t[22] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsxs)(Q.Fragment, {
          children: [
            null,
            (0, Q.jsx)(Q.Fragment, { children: (0, Q.jsx)(d, { ...$.imagePublicLinkAudience }) }),
          ],
        })),
        (t[22] = n))
      : (n = t[22]),
      (c = n));
  } else if (r === `message`) {
    let e;
    (t[23] === i
      ? (e = t[24])
      : ((e = i
          ? (0, Q.jsx)(d, {
              id: `chatgptConversations.shareDialog.poll.publicLinkTitle`,
              defaultMessage: `Share a public link to this poll`,
              description: `Heading below the poll preview in the public sharing dialog. Tells the person sharing that the link opens this interactive voting poll. Workspace-restricted links use a separate disclosure.`,
            })
          : (0, Q.jsx)(d, { ...$.sharePublicLinkToMessage })),
        (t[23] = i),
        (t[24] = e)),
      (s = e));
    let n;
    (t[25] === i
      ? (n = t[26])
      : ((n = (0, Q.jsxs)(Q.Fragment, {
          children: [
            null,
            (0, Q.jsx)(Q.Fragment, {
              children: i
                ? (0, Q.jsx)(d, {
                    id: `chatgptConversations.shareDialog.poll.publicAudience`,
                    defaultMessage: `Anyone with this link can access and vote on this poll.`,
                    description: `Explanation below a public poll link preview in the desktop or extension sharing dialog. Tells the person sharing that link recipients can open the poll and vote.`,
                  })
                : (0, Q.jsx)(d, { ...$.messagePublicLinkAudience }),
            }),
          ],
        })),
        (t[25] = i),
        (t[26] = n)),
      (c = n));
  } else if (r === `prompt`) {
    let e;
    (t[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(d, {
          id: `chatgptConversations.shareDialog.prompt.info.title.public`,
          defaultMessage: `Share a public link to this prompt`,
          description: `Heading below the prompt preview in the ChatGPT sharing dialog for a personal account. It introduces the public link and social sharing actions for the selected user prompt.`,
        })),
        (t[27] = e))
      : (e = t[27]),
      (s = e));
    let n;
    (t[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsxs)(Q.Fragment, {
          children: [
            null,
            (0, Q.jsx)(Q.Fragment, {
              children: (0, Q.jsx)(d, {
                id: `chatgptConversations.shareDialog.prompt.info.description.public`,
                defaultMessage: `Anyone with this link can access this prompt`,
                description: `Audience explanation below the public-link heading in the ChatGPT prompt sharing dialog in the desktop app and extension. It tells the person sharing that anyone with the link can access the selected user prompt.`,
              }),
            }),
          ],
        })),
        (t[28] = n))
      : (n = t[28]),
      (c = n));
  } else {
    let e;
    (t[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(d, { ...$.sharePublicLinkToConversation })), (t[29] = e))
      : (e = t[29]),
      (s = e));
    let n;
    (t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(Wt, { includeConversationAudience: !0 })), (t[30] = n))
      : (n = t[30]),
      (c = n));
  }
  let l;
  t[31] !== o || t[32] !== n
    ? ((l =
        n === `unknown`
          ? null
          : (0, Q.jsx)(o, {
              className: n === `public` ? `relative -start-px` : void 0,
              "aria-hidden": `true`,
            })),
      (t[31] = o),
      (t[32] = n),
      (t[33] = l))
    : (l = t[33]);
  let u;
  t[34] !== l || t[35] !== s
    ? ((u = (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-1 text-xs leading-4 font-bold text-default`,
        children: [l, s],
      })),
      (t[34] = l),
      (t[35] = s),
      (t[36] = u))
    : (u = t[36]);
  let f;
  t[37] === c
    ? (f = t[38])
    : ((f =
        c == null
          ? null
          : (0, Q.jsx)(`div`, {
              className: `mt-1.5 text-xs leading-4 text-codex-description browser:text-secondary`,
              children: c,
            })),
      (t[37] = c),
      (t[38] = f));
  let p;
  return (
    t[39] !== u || t[40] !== f || t[41] !== null
      ? ((p = (0, Q.jsx)(ge, {
          spacing: `large`,
          children: (0, Q.jsxs)(`div`, {
            className: `w-full text-start select-none`,
            children: [u, f, null],
          }),
        })),
        (t[39] = u),
        (t[40] = f),
        (t[41] = null),
        (t[42] = p))
      : (p = t[42]),
    p
  );
}
function pn(e) {
  let t = (0, vn.c)(5),
    { src: n, isLoading: r, onImageError: i } = e;
  if (n != null) {
    let e;
    return (
      t[0] !== i || t[1] !== n
        ? ((e = (0, Q.jsx)(`img`, {
            alt: ``,
            className: `block size-full object-contain`,
            referrerPolicy: `no-referrer`,
            src: n,
            onError: i,
          })),
          (t[0] = i),
          (t[1] = n),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let a;
  return (
    t[3] === r
      ? (a = t[4])
      : ((a = (0, Q.jsx)(`div`, {
          className: `flex h-full items-center justify-center gap-2 text-sm text-secondary`,
          children: r ? (0, Q.jsx)(Ce, { className: `icon-sm` }) : (0, Q.jsx)(d, { ...$.imageUnavailable }),
        })),
        (t[3] = r),
        (t[4] = a)),
    a
  );
}
function mn(e) {
  let t = (0, vn.c)(16),
    { showImageRightsNotice: n, showContentNotices: r, privacyNotices: i } = e,
    a;
  t[0] !== i?.hasUnsupportedCodeInterpreterContent || t[1] !== r
    ? ((a =
        r && i?.hasUnsupportedCodeInterpreterContent
          ? (0, Q.jsx)(ge, {
              children: (0, Q.jsx)(w, {
                content: (0, Q.jsx)(d, { ...$.filesNotShared }),
                variant: `privacyNotice`,
              }),
            })
          : null),
      (t[0] = i?.hasUnsupportedCodeInterpreterContent),
      (t[1] = r),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] !== i?.hasPersonalizedSources || t[4] !== r
    ? ((o =
        r && i?.hasPersonalizedSources
          ? (0, Q.jsx)(ge, {
              children: (0, Q.jsx)(w, {
                content: (0, Q.jsx)(d, { ...$.personalizedSourcesPrivate }),
                variant: `privacyNotice`,
              }),
            })
          : null),
      (t[3] = i?.hasPersonalizedSources),
      (t[4] = r),
      (t[5] = o))
    : (o = t[5]);
  let s;
  t[6] !== i?.hasScreenshotReference || t[7] !== r
    ? ((s =
        r && i?.hasScreenshotReference
          ? (0, Q.jsx)(ge, {
              children: (0, Q.jsx)(w, {
                content: (0, Q.jsx)(d, { ...$.screenshotDisclaimer }),
                variant: `privacyNotice`,
              }),
            })
          : null),
      (t[6] = i?.hasScreenshotReference),
      (t[7] = r),
      (t[8] = s))
    : (s = t[8]);
  let c;
  t[9] === n
    ? (c = t[10])
    : ((c = n
        ? (0, Q.jsx)(ge, {
            children: (0, Q.jsx)(`p`, {
              className: `text-sm text-secondary select-none`,
              children: (0, Q.jsx)(d, { ...$.imageLicenseDisclaimer }),
            }),
          })
        : null),
      (t[9] = n),
      (t[10] = c));
  let l;
  return (
    t[11] !== a || t[12] !== o || t[13] !== s || t[14] !== c
      ? ((l = (0, Q.jsxs)(Q.Fragment, { children: [a, o, s, c] })),
        (t[11] = a),
        (t[12] = o),
        (t[13] = s),
        (t[14] = c),
        (t[15] = l))
      : (l = t[15]),
    l
  );
}
function hn(e) {
  let t = (0, vn.c)(3),
    { error: n } = e;
  switch (n) {
    case `blocked`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(d, { ...$.shareBlocked })), (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `copy-failed`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(d, { ...$.shareCopyFailed })), (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `create-failed`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(d, { ...$.shareCreateFailed })), (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function gn(e, t, n) {
  let r = encodeURIComponent(t),
    i = encodeURIComponent(n ?? ``);
  switch (e) {
    case `messages`:
      return `sms:${/iPad|iPhone|iPod/.test(navigator.userAgent) ? `&` : `?`}body=${r}`;
    case `whatsapp`:
      return `https://wa.me/?text=${r}`;
    case `linkedin`:
      return `https://www.linkedin.com/shareArticle?url=${r}&text=${i}`;
    case `reddit`:
      return `https://www.reddit.com/submit?url=${r}&title=${i}`;
    case `x`:
      return `https://twitter.com/intent/tweet?url=${r}&text=${i}`;
  }
}
function _n(e) {
  switch (e) {
    case `messages`:
      return P.CHATGPT_SHARE_FLOW_DESTINATION_MESSAGES;
    case `whatsapp`:
      return P.CHATGPT_SHARE_FLOW_DESTINATION_WHATSAPP;
    case `linkedin`:
      return P.CHATGPT_SHARE_FLOW_DESTINATION_LINKEDIN;
    case `reddit`:
      return P.CHATGPT_SHARE_FLOW_DESTINATION_REDDIT;
    case `x`:
      return P.CHATGPT_SHARE_FLOW_DESTINATION_TWITTER;
  }
}
var vn, yn, Q, $;
function bn() {
  return (bn = e(() => {
    ((vn = j()),
      z(),
      ae(),
      v(),
      (yn = ke()),
      k(),
      Pe(),
      Ct(),
      c(),
      de(),
      I(),
      ee(),
      O(),
      A(),
      R(),
      De(),
      U(),
      He(),
      W(),
      Ot(),
      L(),
      b(),
      s(),
      St(),
      We(),
      Ze(),
      G(),
      qe(),
      ft(),
      ut(),
      Rt(),
      Bt(),
      q(),
      Nt(),
      X(),
      an(),
      (Q = Oe()),
      ($ = r({
        widgetTitle: {
          id: `chatgptConversations.widgetShare.title`,
          defaultMessage: `Share this widget`,
          description: `Heading of the dialog opened by Share on a generated Recharts widget. The dialog previews the selected widget and offers actions to share its link.`,
        },
        sharePublicLinkToWidget: {
          id: `chatgptConversations.widgetShare.publicTitle`,
          defaultMessage: `Share a public link to this widget`,
          description: `Public audience disclosure above the sharing actions for a generated Recharts widget. Shown for personal accounts; workspace-only sharing has a separate disclosure.`,
        },
        shareLinkToWidget: {
          id: `chatgptConversations.widgetShare.linkTitle`,
          defaultMessage: `Share a link to this widget`,
          description: `Title in the Recharts widget sharing disclosure when the link is workspace-only or its audience is not yet known. Does not describe the link as public.`,
        },
        widgetPublicLinkAudience: {
          id: `chatgptConversations.widgetShare.publicAudience`,
          defaultMessage: `Anyone with this link can access this widget`,
          description: `Explanation below the public-link disclosure in the Recharts widget sharing dialog. Tells the sender who can view the shared widget.`,
        },
        attributedDescription: {
          id: `chatgptConversations.shareDialog.attributedDescription`,
          defaultMessage: `Your name is visible with this shared chat`,
          description: `Description in the ChatGPT conversation share dialog when an existing shared link includes the author's name instead of being anonymous`,
        },
        copyLink: {
          id: `chatgptConversations.shareDialog.copyLink`,
          defaultMessage: `Copy link`,
          description: `Button label for copying an existing ChatGPT conversation share link`,
        },
        copied: {
          id: `chatgptConversations.shareDialog.destination.copy.copied`,
          defaultMessage: `Copied`,
          description: `Short confirmation label below the copy-link destination in a ChatGPT post sharing dialog after a public conversation, response, or generated-image URL was copied successfully. The other destinations are X, LinkedIn, and Reddit.`,
        },
        createLink: {
          id: `chatgptConversations.shareDialog.createLink`,
          defaultMessage: `Create link`,
          description: `Button label for creating and copying a ChatGPT conversation share link`,
        },
        description: {
          id: `chatgptConversations.shareDialog.description`,
          defaultMessage: `Your name and any messages you add after sharing stay private`,
          description: `Description in the ChatGPT conversation share dialog explaining what stays private`,
        },
        imageLicenseDisclaimer: {
          id: `chatgptConversations.shareDialog.imageLicenseDisclaimer`,
          defaultMessage: `Confirm you have the rights to share this image.`,
          description: `Legal-permission reminder in the ChatGPT conversation or generated-image share dialog. Asks the user to confirm they have the rights to share the image. Shown as a standalone notice with no placeholders.`,
        },
        imageTitle: {
          id: `chatgptConversations.shareDialog.imageTitle`,
          defaultMessage: `Share image`,
          description: `Title of the ChatGPT share dialog when sharing one generated image without the surrounding conversation`,
        },
        imagesTitle: {
          id: `chatgptConversations.shareDialog.imagesTitle`,
          defaultMessage: `Share images`,
          description: `Title of the ChatGPT share dialog when sharing all images from one generation without the surrounding conversation`,
        },
        imagesPreview: {
          id: `chatgptConversations.shareDialog.imagesPreview`,
          defaultMessage: `Preview of the first shared image`,
          description: `Accessible description of the cover image in the dialog for sharing all images from one ChatGPT generation`,
        },
        imageUnavailable: {
          id: `chatgptConversations.shareDialog.imageUnavailable`,
          defaultMessage: `Image preview unavailable`,
          description: `Placeholder inside the cropped ChatGPT sharing preview when an image cannot be loaded safely. This does not change whether the image is included in the shared chat.`,
        },
        sharePublicLinkToImages: {
          id: `chatgptConversations.shareDialog.sharePublicLinkToImages`,
          defaultMessage: `Share a public link to these images`,
          description: `Title in the personal ChatGPT share dialog when sharing all images from one generation`,
        },
        shareLinkToImages: {
          id: `chatgptConversations.shareDialog.shareLinkToImages`,
          defaultMessage: `Share a link to these images`,
          description: `Title in the ChatGPT share dialog when sharing all images from one generation and public access is not confirmed`,
        },
        imagesPublicLinkAudience: {
          id: `chatgptConversations.shareDialog.imagesPublicLinkAudience`,
          defaultMessage: `Anyone with this link can access these images. Confirm you have the rights to share these images.`,
          description: `Audience and legal-permission reminder in the personal ChatGPT dialog for sharing multiple generated images. Explains that anyone with the link can view the images and asks the user to confirm permission to share them. Both sentences appear in one paragraph.`,
        },
        sharePublicLinkToImage: {
          id: `chatgptConversations.shareDialog.sharePublicLinkToImage`,
          defaultMessage: `Share a public link to this image`,
          description: `Title in the redesigned personal ChatGPT image share dialog info block`,
        },
        shareLinkToImage: {
          id: `chatgptConversations.shareDialog.shareLinkToImage`,
          defaultMessage: `Share a link to this image`,
          description: `Title in the redesigned workspace ChatGPT image share dialog info block`,
        },
        sharePublicLinkToMessage: {
          id: `chatgptConversations.shareDialog.sharePublicLinkToMessage`,
          defaultMessage: `Share a public link to this message`,
          description: `Title in the redesigned personal ChatGPT response share dialog info block`,
        },
        sharePublicLinkToConversation: {
          id: `chatgptConversations.shareDialog.sharePublicLinkToConversation`,
          defaultMessage: `Share a public link to this conversation`,
          description: `Title in the redesigned personal ChatGPT conversation share dialog info block`,
        },
        shareLinkToMessage: {
          id: `chatgptConversations.shareDialog.shareLinkToMessage`,
          defaultMessage: `Share a link to this message`,
          description: `Title in the redesigned workspace ChatGPT response share dialog info block`,
        },
        shareLinkToConversation: {
          id: `chatgptConversations.shareDialog.shareLinkToConversation`,
          defaultMessage: `Share a link to this conversation`,
          description: `Title in the redesigned workspace ChatGPT conversation share dialog info block`,
        },
        imagePublicLinkAudience: {
          id: `chatgptConversations.shareDialog.imagePublicLinkAudience`,
          defaultMessage: `Anyone with this link can access this image. Confirm you have the rights to share this image.`,
          description: `Audience and legal-permission reminder below the heading in the personal ChatGPT image-sharing dialog. Explains that anyone with the link can view the image and asks the user to confirm permission to share it. Both sentences appear in one paragraph.`,
        },
        messagePublicLinkAudience: {
          id: `chatgptConversations.shareDialog.messagePublicLinkAudience`,
          defaultMessage: `Anyone with this link can access this message`,
          description: `Audience explanation in the personal ChatGPT share dialog`,
        },
        workspaceImageRightsAudience: {
          id: `chatgptConversations.shareDialog.workspaceImageRightsAudienceWithContentType`,
          defaultMessage: `Links are visible to workspace members only. {contentType, select, images {Confirm you have the rights to share these images.} other {Confirm you have the rights to share this image.}}`,
          description: `Audience and legal-permission reminder in the ChatGPT workspace sharing dialog. Only workspace members can view the link. contentType is images for a generated-image series, image for one generated image, message, or conversation. Both sentences appear in one paragraph.`,
        },
        workspaceLinksVisible: {
          id: `chatgptConversations.shareDialog.workspaceLinksVisible`,
          defaultMessage: `Links are visible to workspace members only`,
          description: `Subtitle in a redesigned workspace ChatGPT post share dialog info block`,
        },
        workspaceLinksVisibleWithLearnMore: {
          id: `chatgptConversations.shareDialog.workspaceLinksVisibleWithLearnMore`,
          defaultMessage: `Links are visible to workspace members only. <learnMore>Learn more</learnMore>`,
          description: `Audience explanation when sharing a response or image within a workspace. The learnMore tag links to shared-links help in merged web.`,
        },
        messageTitle: {
          id: `chatgptConversations.shareDialog.messageTitle`,
          defaultMessage: `Share response`,
          description: `Short title of the ChatGPT response share dialog opened after a user selects Share beneath one completed assistant response. The dialog creates a link to only that response.`,
        },
        shareLinkToPrompt: {
          id: `chatgptConversations.shareDialog.prompt.info.title.restricted`,
          defaultMessage: `Share a link to this prompt`,
          description: `Heading below the prompt preview in the ChatGPT sharing dialog when the link is restricted to workspace members or its audience is not yet known. It introduces the sharing actions for the selected user prompt without claiming public access.`,
        },
        promptTitle: {
          id: `chatgptConversations.shareDialog.promptTitle`,
          defaultMessage: `Share prompt`,
          description: `Title of the ChatGPT share dialog when sharing one selected user prompt without the surrounding conversation`,
        },
        filesNotShared: {
          id: `chatgptConversations.shareDialog.filesNotShared`,
          defaultMessage: `Images and files in this chat won't be shown in the public link.`,
          description: `Privacy notice in the ChatGPT conversation share dialog when the chat contains code-interpreter images or downloadable files that the public link cannot show. Standalone sentence with no placeholders.`,
        },
        personalizedSourcesPrivate: {
          id: `chatgptConversations.shareDialog.personalizedSourcesPrivate`,
          defaultMessage: `Personalized sources used in this chat, like memories, past chats, custom instructions, apps, and files, stay private.`,
          description: `Privacy notice in the ChatGPT conversation share dialog when answers used personalized sources. It reassures the user that those underlying sources are not exposed to link viewers. Standalone sentence with no placeholders.`,
        },
        projectDescription: {
          id: `chatgptConversations.shareDialog.projectDescription`,
          defaultMessage: `Your name, uploaded files, custom instructions, and any messages you add after sharing stay private.`,
          description: `Privacy description in the ChatGPT conversation share dialog for a personal-account project chat. It lists project and author data that a public shared link does not expose. Standalone sentence with no placeholders.`,
        },
        publicLinkAudience: {
          id: `chatgptConversations.shareDialog.publicLinkAudience`,
          defaultMessage: `Anyone with the link can view this chat`,
          description: `Audience note in the ChatGPT conversation share dialog preview card`,
        },
        shareBlocked: {
          id: `chatgptConversations.shareDialog.shareBlocked`,
          defaultMessage: `This conversation can't be shared`,
          description: `Error shown when a ChatGPT conversation share link is blocked by moderation`,
        },
        shareCopyFailed: {
          id: `chatgptConversations.shareDialog.shareCopyFailed`,
          defaultMessage: `Share link created, but it could not be copied`,
          description: `Inline error and toast in the ChatGPT conversation share dialog shown after a public link was created but all clipboard copy methods failed`,
        },
        shareCreateFailed: {
          id: `chatgptConversations.shareDialog.shareCreateFailed`,
          defaultMessage: `Could not create share link`,
          description: `Inline error and toast in the ChatGPT conversation share dialog shown when creating a public link fails before clipboard copying begins`,
        },
        screenshotDisclaimer: {
          id: `chatgptConversations.shareDialog.screenshotDisclaimer`,
          defaultMessage: `Screenshots may contain sensitive information.`,
          description: `Privacy warning in the ChatGPT conversation share dialog when the chat contains screenshot citations. It reminds the user to review sensitive screenshot content before sharing. Standalone sentence with no placeholders.`,
        },
        updateLink: {
          id: `chatgptConversations.shareDialog.updateLink`,
          defaultMessage: `Update link`,
          description: `Button label for updating an existing ChatGPT conversation share link to include the latest visible messages before copying it`,
        },
        workspaceDescription: {
          id: `chatgptConversations.shareDialog.workspaceDescription`,
          defaultMessage: `Any messages you add after sharing will be visible to members of your workspace`,
          description: `Description in the ChatGPT workspace conversation share dialog explaining that later conversation messages remain visible to workspace members`,
        },
        workspaceLinkAudience: {
          id: `chatgptConversations.shareDialog.workspaceLinkAudience`,
          defaultMessage: `Links are visible to workspace members only`,
          description: `Audience note in the ChatGPT workspace conversation or prompt share dialog explaining that the shared link is restricted to members of the current workspace`,
        },
        workspaceProjectDescription: {
          id: `chatgptConversations.shareDialog.workspaceProjectDescription`,
          defaultMessage: `Any messages you add after sharing will be visible to members of your workspace. Project files and custom instructions won’t be accessible via the shared link.`,
          description: `Privacy description in the ChatGPT conversation share dialog for a workspace project chat. It contrasts later-message visibility with project files and custom instructions that link viewers cannot access. Standalone two-sentence notice with no placeholders.`,
        },
      })));
  }))();
}
export { Bt as a, q as i, on as n, Lt as o, bn as r, Rt as s, sn as t };
//# sourceMappingURL=chatgpt-conversation-share-dialog-6e637f73793e.js.map
