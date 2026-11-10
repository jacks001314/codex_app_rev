const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./setup-dialog-2848c63a37b4.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./formatIncompletePhoneNumber-64e801fcc109.js",
      "./parsePhoneNumber-d60824298d64.js",
      "./text-message-instructions-c51c87e9d826.js",
      "./parsePhoneNumber-1c038b3a80d8.js",
      "./withMetadataArgument-66f337837d55.js",
      "./text-unavailable-dbb0ec617d46.js",
      "./setup-dialog-60a51bf046e2.js",
      "./contact-ready-7c923836a87f.js",
      "./contact-ready-dfd7fa950fe1.css",
      "./rate-limit-523c452e35b8.js",
      "./setup-dialog-63e184716e35.css",
      "./setup-dialog-317db5aaf031.js",
      "./microsoft-oauth-bundle-e77977413c17.js",
      "./use-app-connect-flow-7088479fda99.js",
      "./app-connect-queries-d683cc7b9c3b.js",
      "./availability-7c47246e0e1c.js",
      "./plugin-connected-account-links-8dea8c830000.js",
      "./api-cb8c565797b5.js",
      "./oauth-resume-2fd1853f367b.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  AO as r,
  B4 as i,
  CO as a,
  Cot as o,
  Ext as s,
  GY as c,
  Gd as l,
  IDt as u,
  Iot as d,
  Ixt as f,
  Jbt as p,
  Jd as m,
  KY as h,
  Kd as g,
  Kot as _,
  Lot as v,
  Mz as y,
  Nz as b,
  OO as x,
  Pxt as S,
  Rot as C,
  TJ as w,
  TO as T,
  Ud as E,
  VDt as D,
  Vxt as O,
  Wd as k,
  XJ as A,
  Xd as j,
  Xot as ee,
  YJ as M,
  Yd as N,
  Yot as P,
  _Nt as F,
  _O as te,
  _xt as I,
  af as L,
  cO as ne,
  fO as R,
  fPt as re,
  fSt as ie,
  gO as ae,
  hV as oe,
  hot as z,
  i3 as B,
  iO as V,
  jDt as H,
  kO as U,
  lO as W,
  lot as G,
  mO as K,
  nSt as q,
  nst as se,
  oO as ce,
  of as le,
  pPt as ue,
  qd as de,
  r3 as fe,
  rO as J,
  rst as pe,
  sO as me,
  t3 as he,
  tst as Y,
  vO as ge,
  vzt as X,
  wG as _e,
  wot as ve,
  wxt as ye,
  xMt as be,
  yzt as xe,
  z4 as Se,
  zot as Ce,
  zxt as we,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as Te,
  $pr as Ee,
  A5t as De,
  D5t as Oe,
  DCt as ke,
  ECt as Ae,
  GMr as je,
  Hmr as Me,
  Hpr as Ne,
  JPn as Pe,
  Kpr as Fe,
  Kur as Ie,
  L5t as Le,
  O5t as Re,
  OCt as ze,
  Opr as Be,
  Qpr as Ve,
  R5t as He,
  TCt as Ue,
  Upr as We,
  Vmr as Ge,
  XMr as Ke,
  XPn as qe,
  Xpr as Je,
  ZPn as Ye,
  abn as Xe,
  adr as Ze,
  cbn as Qe,
  dbn as $e,
  eDr as et,
  fbn as tt,
  idr as nt,
  j5t as rt,
  k5t as it,
  kCt as at,
  nDr as ot,
  obn as st,
  odr as ct,
  pbn as lt,
  tNr as ut,
  v8n as dt,
  wpr as ft,
} from "./app-initial-5851df3f6cb1.js";
import { n as pt, t as mt } from "./use-app-connect-flow-7088479fda99.js";
import { n as ht, t as gt } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
import { n as _t, t as vt } from "./channel-button-bad94b04d4c2.js";
import { n as yt, t as bt } from "./contact-ready-7c923836a87f.js";
import { a as xt, i as St, s as Ct } from "./text-message-instructions-c51c87e9d826.js";
import { n as wt, t as Tt } from "./parsePhoneNumber-1c038b3a80d8.js";
import { n as Et, t as Dt } from "./text-unavailable-dbb0ec617d46.js";
import { a as Ot, i as kt, n as At, o as jt, s as Mt, t as Nt } from "./oauth-resume-a80cf97b183d.js";
import { a as Pt, i as Ft, n as It, o as Lt, s as Rt, t as zt } from "./rate-limit-523c452e35b8.js";
import { n as Bt, r as Vt, t as Ht } from "./api-cb8c565797b5.js";
import { n as Ut, r as Wt } from "./oauth-resume-2fd1853f367b.js";
function Gt(e) {
  let t = (0, Yt.c)(13),
    { children: n, conversationId: r, isVisible: i, mode: a, onSetup: o, onClose: s } = e,
    c = a === void 0 ? `section` : a,
    l = O(He) !== `disabled`,
    u = O(rt),
    d = O(je),
    f = O(Ke);
  if (!u) return null;
  if (!l && (c === `shortcut` || c === `setup`)) {
    let e;
    return (
      t[0] === n ? (e = t[1]) : ((e = (0, Z.jsx)(Z.Fragment, { children: n })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let p = `${d}:${f}:${r}:${l}`,
    m;
  return (
    t[2] !== d ||
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== i ||
    t[6] !== l ||
    t[7] !== c ||
    t[8] !== s ||
    t[9] !== o ||
    t[10] !== p ||
    t[11] !== f
      ? ((m = (0, Z.jsx)(
          Kt,
          {
            accountId: d,
            conversationId: r,
            isVisible: i,
            messagingEnabled: l,
            mode: c,
            userId: f,
            onSetup: o,
            onClose: s,
            children: n,
          },
          p,
        )),
        (t[2] = d),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = l),
        (t[7] = c),
        (t[8] = s),
        (t[9] = o),
        (t[10] = p),
        (t[11] = f),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
function Kt(e) {
  let t = (0, Yt.c)(92),
    {
      accountId: r,
      children: i,
      conversationId: a,
      isVisible: s,
      messagingEnabled: c,
      mode: l,
      userId: d,
      onSetup: p,
      onClose: m,
    } = e,
    h = f(o),
    g = D(),
    _ = se(),
    v = we(st, a),
    y = we(Qe, a) ?? v,
    b = (0, Xt.useRef)(null),
    [x, S] = (0, Xt.useState)(null),
    C;
  t[0] !== r || t[1] !== d
    ? ((C = [`aeon-messaging-phone`, r, d]), (t[0] = r), (t[1] = d), (t[2] = C))
    : (C = t[2]);
  let w = C,
    T;
  t[3] === s ? (T = t[4]) : ((T = { enabled: s }), (t[3] = s), (t[4] = T));
  let E = we(Re, a, T),
    O = we(s ? De : `unavailable`, a),
    k =
      O === `complete` ||
      O === `incomplete` ||
      O === `capacity` ||
      (E.data?.binding?.state === `active` &&
        (!c || (E.data.texting_eligible === !1 && (l === `section` || l === `content`)))),
    A = O === `capacity`,
    j;
  t[5] !== E || t[6] !== h
    ? ((j = () => {
        Promise.all([E.refetch(), Je(h)]);
      }),
      (t[5] = E),
      (t[6] = h),
      (t[7] = j))
    : (j = t[7]);
  let ee = j,
    M;
  t[8] !== r || t[9] !== a || t[10] !== h || t[11] !== d
    ? ((M = () => h.get(it, a) && h.get(je) === r && h.get(Ke) === d),
      (t[8] = r),
      (t[9] = a),
      (t[10] = h),
      (t[11] = d),
      (t[12] = M))
    : (M = t[12]);
  let N = M,
    P;
  t[13] !== r || t[14] !== N || t[15] !== a || t[16] !== h || t[17] !== d
    ? ((P = async () => {
        if (r == null || d == null || !N()) throw Error(`Your dot’s phone setup account changed`);
        let e = h.get(Fe);
        if (!e.isSuccess) throw Error(`Your primary dot is unavailable`);
        let t = e.data.selection;
        if (t != null && (t.thread_id !== a || !t.available))
          throw Error(`Your primary dot changed during phone setup`);
        if (t?.aeon_id != null) return t.aeon_id;
        let n = await h.get(Ne).mutateAsync({ accountId: r, userId: d, threadId: a });
        if (n.selection?.thread_id !== a || !n.selection.available || n.selection.aeon_id == null)
          throw Error(`Your primary dot changed during phone setup`);
        return n.selection.aeon_id;
      }),
      (t[13] = r),
      (t[14] = N),
      (t[15] = a),
      (t[16] = h),
      (t[17] = d),
      (t[18] = P))
    : (P = t[18]);
  let F = P,
    te;
  t[19] !== r || t[20] !== _ || t[21] !== w || t[22] !== h || t[23] !== d
    ? ((te = () => {
        _.invalidateQueries({
          exact: !0,
          queryKey: w,
          refetchType: h.get(je) === r && h.get(Ke) === d ? `active` : `none`,
        });
      }),
      (t[19] = r),
      (t[20] = _),
      (t[21] = w),
      (t[22] = h),
      (t[23] = d),
      (t[24] = te))
    : (te = t[24]);
  let I = te,
    L;
  t[25] === m
    ? (L = t[26])
    : ((L = () => {
        (S(null), m?.());
      }),
      (t[25] = m),
      (t[26] = L));
  let ne = L,
    R;
  t[27] === p
    ? (R = t[28])
    : ((R = () => {
        p == null ? S(`settings`) : p(b.current);
      }),
      (t[27] = p),
      (t[28] = R));
  let re = R,
    ie = l !== `section` && (O === `loading` || O === `error`);
  if (l === `setup` && ie) {
    if (O === `loading`) {
      let e;
      return (
        t[29] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(xt, {})), (t[29] = e))
          : (e = t[29]),
        e
      );
    }
    let e;
    t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(St, {
          role: `alert`,
          title: (0, Z.jsx)(u, {
            id: `restricted.aeon.messaging.summary.loadError`,
            defaultMessage: `Couldn’t load text settings`,
            description: `Error in the Text setup card when phone or primary dot settings could not be loaded`,
          }),
          description: (0, Z.jsx)(u, {
            id: `restricted.aeon.messaging.summary.loadErrorDescription`,
            defaultMessage: `Try again to load your phone number and texting settings`,
            description: `Recovery guidance below the Text settings load error heading`,
          }),
        })),
        (t[30] = e))
      : (e = t[30]);
    let r;
    t[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Z.jsx)(u, {
          id: `restricted.aeon.messaging.summary.tryAgain`,
          defaultMessage: `Try again`,
          description: `Button to retry loading phone and primary dot settings in the Text setup card`,
        })),
        (t[31] = r))
      : (r = t[31]);
    let i;
    return (
      t[32] === ee
        ? (i = t[33])
        : ((i = (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-6`,
            children: [
              e,
              (0, Z.jsx)(n, { color: `primary`, size: `detailAction`, onClick: ee, children: r }),
            ],
          })),
          (t[32] = ee),
          (t[33] = i)),
      i
    );
  }
  let ae;
  t[34] !== A ||
  t[35] !== a ||
  t[36] !== k ||
  t[37] !== l ||
  t[38] !== p ||
  t[39] !== x ||
  t[40] !== re ||
  t[41] !== E.data ||
  t[42] !== O
    ? ((ae =
        l !== `setup` && k
          ? (0, Z.jsx)(qt, {
              conversationId: a,
              binding: A ? null : (E.data?.binding ?? null),
              destinationPhoneNumber:
                O === `complete` && E.data?.texting?.thread_id === a
                  ? E.data.texting.destination_phone_number
                  : null,
              mode: l,
              open: p != null && (A || O === `incomplete`) ? void 0 : x != null,
              triggerRef: b,
              onOpen: () => {
                (A || O === `incomplete`) && (l === `shortcut` || E.data?.binding?.state !== `active`)
                  ? re()
                  : S(`settings`);
              },
            })
          : null),
      (t[34] = A),
      (t[35] = a),
      (t[36] = k),
      (t[37] = l),
      (t[38] = p),
      (t[39] = x),
      (t[40] = re),
      (t[41] = E.data),
      (t[42] = O),
      (t[43] = ae))
    : (ae = t[43]);
  let z;
  t[44] !== g || t[45] !== l || t[46] !== O || t[47] !== ee || t[48] !== ie
    ? ((z = ie
        ? (0, Z.jsx)(vt, {
            ref: b,
            mode: l === `setup` ? `content` : l,
            icon: l === `shortcut` ? (0, Z.jsx)(oe, {}) : (0, Z.jsx)(_e, {}),
            disabled: O === `loading`,
            loading: O === `loading`,
            "aria-busy": O === `loading`,
            title:
              O === `error`
                ? g.formatMessage({
                    id: `restricted.aeon.messaging.summary.retry`,
                    defaultMessage: `Couldn’t load text settings. Try again`,
                    description: `Tooltip for the dot Text action when its phone or primary dot settings failed to load`,
                  })
                : g.formatMessage({
                    id: `orbit.messaging.summary.loadingAction`,
                    defaultMessage: `Loading text settings…`,
                    description: `Tooltip for the dot Text action while phone settings are loading`,
                  }),
            onClick: ee,
            children: (0, Z.jsx)(u, {
              id: `restricted.aeonMessaging.textShortcut`,
              defaultMessage: `Text`,
              description: `Button opening the dot's text messaging phone settings`,
            }),
          })
        : null),
      (t[44] = g),
      (t[45] = l),
      (t[46] = O),
      (t[47] = ee),
      (t[48] = ie),
      (t[49] = z))
    : (z = t[49]);
  let B;
  t[50] !== i || t[51] !== z || t[52] !== ae
    ? ((B = (0, Z.jsxs)(Z.Fragment, { children: [ae, z, i] })),
      (t[50] = i),
      (t[51] = z),
      (t[52] = ae),
      (t[53] = B))
    : (B = t[53]);
  let V = B,
    H = null;
  if (k || i != null || ie) {
    let e;
    (t[54] !== V || t[55] !== l
      ? ((e =
          l === `section`
            ? (0, Z.jsx)(gt.Section, {
                sectionKey: `aeon-messaging-channels`,
                mode: `headerless`,
                children: V,
              })
            : V),
        (t[54] = V),
        (t[55] = l),
        (t[56] = e))
      : (e = t[56]),
      (H = e));
  }
  let U;
  t[57] !== r ||
  t[58] !== A ||
  t[59] !== N ||
  t[60] !== ne ||
  t[61] !== a ||
  t[62] !== F ||
  t[63] !== k ||
  t[64] !== c ||
  t[65] !== l ||
  t[66] !== x ||
  t[67] !== y ||
  t[68] !== E.data?.binding ||
  t[69] !== O ||
  t[70] !== _ ||
  t[71] !== w ||
  t[72] !== I ||
  t[73] !== d
    ? ((U =
        ((l === `setup` && O !== `complete`) || x != null) && k && r != null && d != null
          ? (0, Z.jsx)(
              Zt,
              {
                accountId: r,
                atCapacity: A,
                canStartSetup: N,
                initialBinding: E.data?.binding ?? null,
                initialStep: c && (l === `setup` || x === `activation`) ? `phone` : void 0,
                presentation: l === `setup` ? `embedded` : `dialog`,
                orbitName: y,
                ensureCurrentOrbitIsPrimary: F,
                onBindingChange: (e) => {
                  _.setQueryData(w, (t) => ({
                    texting_eligible: t?.texting_eligible,
                    texting_can_setup: t?.texting_can_setup,
                    ...e,
                  }));
                },
                onActivated: (e) => {
                  (_.setQueryData(w, (t) =>
                    t?.binding?.state === `active` &&
                    t.binding.generation === e.binding?.generation &&
                    e.texting?.destination_phone_number != null
                      ? e
                      : t,
                  ),
                    I());
                },
                onCloseAutoFocus: () => b.current?.focus(),
                onClose: ne,
                onRefresh: I,
              },
              `${r}:${d}:${a}`,
            )
          : null),
      (t[57] = r),
      (t[58] = A),
      (t[59] = N),
      (t[60] = ne),
      (t[61] = a),
      (t[62] = F),
      (t[63] = k),
      (t[64] = c),
      (t[65] = l),
      (t[66] = x),
      (t[67] = y),
      (t[68] = E.data?.binding),
      (t[69] = O),
      (t[70] = _),
      (t[71] = w),
      (t[72] = I),
      (t[73] = d),
      (t[74] = U))
    : (U = t[74]);
  let W = U,
    G;
  t[75] !== a || t[76] !== l || t[77] !== E.data || t[78] !== O
    ? ((G =
        l === `setup` && O === `complete` && E.data?.texting != null
          ? (0, Z.jsx)(bt, {
              conversationId: a,
              method: `text`,
              destination: E.data.texting.destination_phone_number,
            })
          : null),
      (t[75] = a),
      (t[76] = l),
      (t[77] = E.data),
      (t[78] = O),
      (t[79] = G))
    : (G = t[79]);
  let K;
  t[80] !== k || t[81] !== l || t[82] !== O
    ? ((K = l === `setup` && O === `unavailable` && !k ? (0, Z.jsx)(Dt, {}) : null),
      (t[80] = k),
      (t[81] = l),
      (t[82] = O),
      (t[83] = K))
    : (K = t[83]);
  let q;
  t[84] !== l || t[85] !== W
    ? ((q = l === `setup` ? W : (0, Z.jsx)(Xt.Suspense, { fallback: null, children: W })),
      (t[84] = l),
      (t[85] = W),
      (t[86] = q))
    : (q = t[86]);
  let ce;
  return (
    t[87] !== H || t[88] !== G || t[89] !== K || t[90] !== q
      ? ((ce = (0, Z.jsxs)(Z.Fragment, { children: [H, G, K, q] })),
        (t[87] = H),
        (t[88] = G),
        (t[89] = K),
        (t[90] = q),
        (t[91] = ce))
      : (ce = t[91]),
    ce
  );
}
function qt(e) {
  let t = (0, Yt.c)(32),
    {
      binding: n,
      conversationId: r,
      destinationPhoneNumber: i,
      mode: o,
      onOpen: s,
      open: c,
      triggerRef: l,
    } = e,
    d = D(),
    f = we(st, r),
    p = we(Qe, r) ?? f,
    m = o === `shortcut` ? i : n?.phone_number,
    g,
    _,
    v,
    y;
  if (t[0] !== n?.state || t[1] !== m || t[2] !== d || t[3] !== o) {
    if (
      ((v = n?.state === `active` && m != null ? (wt(m)?.formatInternational() ?? m) : null),
      (_ = v != null),
      (y = o === `shortcut` && _),
      o === `shortcut`)
    ) {
      let e;
      (t[8] === d
        ? (e = t[9])
        : ((e = d.formatMessage({
            id: `restricted.aeonMessaging.textShortcutLabel`,
            defaultMessage: `Text messaging settings`,
            description: `Accessible label for the Text button in the dot profile`,
          })),
          (t[8] = d),
          (t[9] = e)),
        (g = e));
    } else
      _ &&
        (g = d.formatMessage(
          {
            id: `restricted.aeon.messaging.summary.remove`,
            defaultMessage: `Remove phone number {phoneNumber}`,
            description: `Accessible label for a verified phone number that opens its removal confirmation`,
          },
          { phoneNumber: v },
        ));
    ((t[0] = n?.state), (t[1] = m), (t[2] = d), (t[3] = o), (t[4] = g), (t[5] = _), (t[6] = v), (t[7] = y));
  } else ((g = t[4]), (_ = t[5]), (v = t[6]), (y = t[7]));
  let b;
  if (o === `shortcut`) {
    let e;
    (t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(u, {
          id: `restricted.aeonMessaging.textShortcut`,
          defaultMessage: `Text`,
          description: `Button opening the dot's text messaging phone settings`,
        })),
        (t[10] = e))
      : (e = t[10]),
      (b = e));
  } else if (_) b = v;
  else {
    let e;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(u, {
          id: `restricted.aeon.messaging.summary.setup`,
          defaultMessage: `Set up phone number`,
          description: `Action on a dot summary card that begins phone setup for text messaging`,
        })),
        (t[11] = e))
      : (e = t[11]),
      (b = e));
  }
  let x;
  t[12] === o
    ? (x = t[13])
    : ((x = o === `shortcut` ? (0, Z.jsx)(oe, {}) : (0, Z.jsx)(_e, {})), (t[12] = o), (t[13] = x));
  let S = y ? void 0 : c,
    C = y ? void 0 : `dialog`,
    w = y ? void 0 : s,
    E;
  t[14] !== g ||
  t[15] !== _ ||
  t[16] !== b ||
  t[17] !== o ||
  t[18] !== x ||
  t[19] !== S ||
  t[20] !== C ||
  t[21] !== w ||
  t[22] !== l
    ? ((E = (0, Z.jsx)(vt, {
        ref: l,
        mode: o,
        icon: x,
        selectable: _,
        "aria-label": g,
        "aria-expanded": S,
        "aria-haspopup": C,
        onClick: w,
        children: b,
      })),
      (t[14] = g),
      (t[15] = _),
      (t[16] = b),
      (t[17] = o),
      (t[18] = x),
      (t[19] = S),
      (t[20] = C),
      (t[21] = w),
      (t[22] = l),
      (t[23] = E))
    : (E = t[23]);
  let O = E,
    k;
  return (
    t[24] !== i || t[25] !== s || t[26] !== c || t[27] !== p || t[28] !== v || t[29] !== y || t[30] !== O
      ? ((k = y
          ? (0, Z.jsxs)(a, {
              side: `bottom`,
              align: `center`,
              contentWidth: `menu`,
              triggerButton: O,
              onCloseAutoFocus: (e) => {
                c && e.preventDefault();
              },
              children: [
                (0, Z.jsx)(T.SectionLabel, {
                  children: (0, Z.jsxs)(`div`, {
                    className: `flex min-w-0 flex-col gap-1 whitespace-normal`,
                    children: [
                      (0, Z.jsx)(`span`, {
                        children: (0, Z.jsx)(u, {
                          id: `restricted.aeon.messaging.summary.textTitle.namedDot`,
                          defaultMessage: `Text {hasOrbitName, select, true {<b>{orbitName}</b>} other {your <b>dot</b>}}`,
                          description: `Heading above the assistant's destination phone number in its action menu. Use its private nickname when present; dot is the untranslated term for the user's agent. The b tag makes the name bold.`,
                          values: { orbitName: p, hasOrbitName: !lt(p), b: Jt },
                        }),
                      }),
                      (0, Z.jsx)(`span`, {
                        className: `text-base font-semibold break-all text-default select-text`,
                        children: v,
                      }),
                    ],
                  }),
                }),
                (0, Z.jsx)(T.Item, {
                  leftIconAsset: h,
                  onClick: (e) => void J(i ?? v, e),
                  children: (0, Z.jsx)(u, {
                    id: `restricted.aeon.messaging.summary.copyOrbitPhone`,
                    defaultMessage: `Copy number`,
                    description: `Copies the dot's destination phone number from the Text menu`,
                  }),
                }),
                (0, Z.jsx)(T.Item, {
                  leftIconAsset: L,
                  href: `sms:${i}`,
                  onClick: (e) => qe({ event: e, href: `sms:${i}`, initiator: `side_panel_menu` }),
                  children: (0, Z.jsx)(u, {
                    id: `orbit.messaging.openMessages`,
                    defaultMessage: `Open Messages`,
                    description: `Opens the device messaging app addressed to the provider-owned dot phone number returned by activation`,
                  }),
                }),
                (0, Z.jsx)(T.Separator, {}),
                (0, Z.jsx)(T.Item, {
                  leftIconAsset: A,
                  onSelect: s,
                  children: (0, Z.jsx)(u, {
                    id: `restricted.aeon.messaging.summary.removePhone`,
                    defaultMessage: `Remove texting`,
                    description: `Opens confirmation to remove the user's verified phone number from dot messaging`,
                  }),
                }),
              ],
            })
          : O),
        (t[24] = i),
        (t[25] = s),
        (t[26] = c),
        (t[27] = p),
        (t[28] = v),
        (t[29] = y),
        (t[30] = O),
        (t[31] = k))
      : (k = t[31]),
    k
  );
}
function Jt(e) {
  return (0, Z.jsx)(`strong`, { children: e });
}
var Yt, Xt, Z, Zt;
function Qt() {
  return (Qt = e(() => {
    ((Yt = X()),
      le(),
      c(),
      M(),
      Y(),
      Tt(),
      S(),
      (Xt = xe()),
      H(),
      ut(),
      he(),
      r(),
      Pe(),
      w(),
      Xe(),
      ve(),
      ht(),
      V(),
      tt(),
      $e(),
      We(),
      Le(),
      _t(),
      Oe(),
      yt(),
      Ct(),
      Et(),
      (Z = be()),
      ue(),
      (Zt = (0, Xt.lazy)(async () => ({
        default: (
          await re(
            async () => {
              let { AeonMessagingPhoneSetupDialog: e } = await import(`./setup-dialog-2848c63a37b4.js`);
              return { AeonMessagingPhoneSetupDialog: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
            import.meta.url,
          )
        ).AeonMessagingPhoneSetupDialog,
      }))));
  }))();
}
var $t;
function en() {
  return (en = e(() => {
    (S(),
      pe(),
      dt(),
      ve(),
      Me(),
      Be(),
      Ee(),
      ($t = q(o, (e, { get: t }) => {
        let n = p(e);
        if (!t(Ge)) return !1;
        let r = t(Ve, { hostId: t(Te, n), threadId: n });
        if (r === !1) return !1;
        let { data: i, isPending: a } = t(ft, n);
        if (!(i === void 0 && a)) return r === !0 && i?.aeon_kind === `orbit`;
      })));
  }))();
}
function tn(e) {
  let t = (0, nn.c)(35),
    {
      ref: n,
      icon: r,
      iconOnly: i,
      label: s,
      handle: c,
      menuLabel: l,
      url: d,
      openLabel: p,
      pending: m,
      onRemove: g,
    } = e,
    _ = l === void 0 ? s : l,
    v = f(o),
    [y, b] = (0, rn.useState)(!1),
    S;
  t[0] !== c || t[1] !== i || t[2] !== s
    ? ((S = !i && c != null ? (0, an.jsx)(`span`, { className: `truncate`, children: c }) : s),
      (t[0] = c),
      (t[1] = i),
      (t[2] = s),
      (t[3] = S))
    : (S = t[3]);
  let C;
  t[4] !== r || t[5] !== i || t[6] !== m || t[7] !== n || t[8] !== S
    ? ((C = (0, an.jsx)(vt, {
        ref: n,
        mode: `shortcut`,
        iconOnly: i,
        icon: r,
        disabled: m,
        "aria-busy": m,
        children: S,
      })),
      (t[4] = r),
      (t[5] = i),
      (t[6] = m),
      (t[7] = n),
      (t[8] = S),
      (t[9] = C))
    : (C = t[9]);
  let w;
  t[10] !== c || t[11] !== _
    ? ((w = c == null ? _ : (0, an.jsx)(`span`, { className: `break-all select-text`, children: c })),
      (t[10] = c),
      (t[11] = _),
      (t[12] = w))
    : (w = t[12]);
  let E;
  t[13] === w ? (E = t[14]) : ((E = (0, an.jsx)(T.SectionLabel, { children: w })), (t[13] = w), (t[14] = E));
  let D;
  t[15] !== c || t[16] !== v
    ? ((D =
        c == null
          ? null
          : (0, an.jsx)(x, {
              leftIconAsset: h,
              onClick: (e) => {
                J(c, e).then((e) => {
                  e &&
                    v
                      .get(z)
                      .info(
                        (0, an.jsx)(u, {
                          id: `orbit.messaging.contact.copyHandleSuccess`,
                          defaultMessage: `Handle copied`,
                          description: `Toast confirming the connected dot's Slack or Microsoft Teams handle was copied to the clipboard`,
                        }),
                      );
                });
              },
              children: (0, an.jsx)(u, {
                id: `orbit.messaging.contact.copyHandle`,
                defaultMessage: `Copy handle`,
                description: `Copies the connected dot's messaging display name, including the at sign`,
              }),
            })),
      (t[15] = c),
      (t[16] = v),
      (t[17] = D))
    : (D = t[17]);
  let O;
  t[18] !== p || t[19] !== d
    ? ((O = d
        ? (0, an.jsx)(x, {
            leftIconAsset: L,
            href: d,
            onClick: (e) => {
              (b(!1), qe({ event: e, href: d, initiator: `side_panel_menu` }));
            },
            children: p,
          })
        : null),
      (t[18] = p),
      (t[19] = d),
      (t[20] = O))
    : (O = t[20]);
  let k;
  t[21] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = (0, an.jsx)(U, {})), (t[21] = k)) : (k = t[21]);
  let j;
  t[22] === g
    ? (j = t[23])
    : ((j = () => {
        (b(!1), g());
      }),
      (t[22] = g),
      (t[23] = j));
  let ee;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, an.jsx)(u, {
        id: `orbit.messaging.contact.remove`,
        defaultMessage: `Remove`,
        description: `Removes the dot's connection to this messaging service without deleting the dot or its conversation history`,
      })),
      (t[24] = ee))
    : (ee = t[24]);
  let M;
  t[25] === j
    ? (M = t[26])
    : ((M = (0, an.jsx)(x, { leftIconAsset: A, tone: `destructive`, onSelect: j, children: ee })),
      (t[25] = j),
      (t[26] = M));
  let N;
  return (
    t[27] !== y || t[28] !== m || t[29] !== M || t[30] !== C || t[31] !== E || t[32] !== D || t[33] !== O
      ? ((N = (0, an.jsxs)(a, {
          disabled: m,
          open: y,
          onOpenChange: b,
          side: `bottom`,
          align: `center`,
          contentWidth: `menu`,
          triggerButton: C,
          children: [E, D, O, k, M],
        })),
        (t[27] = y),
        (t[28] = m),
        (t[29] = M),
        (t[30] = C),
        (t[31] = E),
        (t[32] = D),
        (t[33] = O),
        (t[34] = N))
      : (N = t[34]),
    N
  );
}
var nn, rn, an;
function on() {
  return (on = e(() => {
    ((nn = X()), le(), c(), M(), S(), (rn = xe()), H(), r(), Pe(), G(), ve(), V(), _t(), (an = be()));
  }))();
}
function sn(e) {
  let t = (0, pn.c)(12),
    { api: r, iconOnly: i, mode: a, onSetup: o, threadId: s } = e,
    c = a === void 0 ? `section` : a,
    l = we($t, s);
  if (l == null && c === `setup`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Q.jsx)(xt, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  if (!l) {
    let e;
    return (
      t[1] === c
        ? (e = t[2])
        : ((e =
            c === `setup`
              ? (0, Q.jsxs)(`div`, {
                  className: `flex flex-col gap-6`,
                  children: [
                    (0, Q.jsx)(St, {
                      description: (0, Q.jsx)(u, {
                        id: `restricted.aeon.slack.setup.unavailable.dot`,
                        defaultMessage: `Slack is unavailable for this dot`,
                        description: `Explains that this dot cannot currently be connected to Slack. A dot is an always-on agent; use dot as a common noun and preserve user-chosen names. Keep the singular term dot untranslated.`,
                      }),
                      title: (0, Q.jsx)(u, {
                        id: `restricted.aeon.slack.setup.unavailableTitle`,
                        defaultMessage: `Slack unavailable`,
                        description: `Heading when this dot cannot use Slack contact setup`,
                      }),
                    }),
                    (0, Q.jsx)(n, {
                      color: `primary`,
                      size: `detailAction`,
                      disabled: !0,
                      children: (0, Q.jsx)(u, {
                        id: `restricted.aeon.slack.addAction`,
                        defaultMessage: `Add to Slack`,
                        description: `Action in dot details that opens setup for direct messaging the dot in Slack`,
                      }),
                    }),
                  ],
                })
              : null),
          (t[1] = c),
          (t[2] = e)),
      e
    );
  }
  let d;
  t[3] !== r || t[4] !== i || t[5] !== c || t[6] !== o || t[7] !== s
    ? ((d = (0, Q.jsx)(cn, { threadId: s, api: r, iconOnly: i, mode: c, onSetup: o })),
      (t[3] = r),
      (t[4] = i),
      (t[5] = c),
      (t[6] = o),
      (t[7] = s),
      (t[8] = d))
    : (d = t[8]);
  let f = d,
    p;
  return (
    t[9] !== f || t[10] !== c
      ? ((p =
          c === `section`
            ? (0, Q.jsx)(gt.Section, { sectionKey: `aeon-slack`, mode: `headerless`, children: f })
            : f),
        (t[9] = f),
        (t[10] = c),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
function cn(e) {
  let t = (0, pn.c)(9),
    { api: n, iconOnly: r, mode: i, onSetup: a, threadId: o } = e,
    s = n === void 0 ? ze : n,
    c = i === void 0 ? `section` : i,
    l = O(je),
    u = O(Ke),
    d = `${l}:${u}:${o}`,
    f;
  return (
    t[0] !== l ||
    t[1] !== s ||
    t[2] !== r ||
    t[3] !== c ||
    t[4] !== a ||
    t[5] !== d ||
    t[6] !== o ||
    t[7] !== u
      ? ((f = (0, Q.jsx)(
          ln,
          { accountId: l, api: s, iconOnly: r, mode: c, onSetup: a, threadId: o, userId: u },
          d,
        )),
        (t[0] = l),
        (t[1] = s),
        (t[2] = r),
        (t[3] = c),
        (t[4] = a),
        (t[5] = d),
        (t[6] = o),
        (t[7] = u),
        (t[8] = f))
      : (f = t[8]),
    f
  );
}
function ln(e) {
  let t = (0, pn.c)(154),
    { accountId: n, api: r, iconOnly: i, mode: a, onSetup: s, threadId: c, userId: l } = e,
    d = f(o),
    h = (0, mn.useRef)(null),
    _ = (0, mn.useRef)(null),
    b = (0, mn.useRef)(null),
    x,
    S;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => () => {
        (_.current?.abort(), b.current?.abort());
      }),
      (S = []),
      (t[0] = x),
      (t[1] = S))
    : ((x = t[0]), (S = t[1])),
    (0, mn.useEffect)(x, S));
  let C = ye(),
    w;
  t[2] === C.state ? (w = t[3]) : ((w = Nt(C.state)), (t[2] = C.state), (t[3] = w));
  let T = w,
    E =
      T?.orbitSlackSetup.accountId === n && T.orbitSlackSetup.userId === l && T.orbitSlackSetup.threadId === c
        ? T
        : null,
    D =
      typeof E?.slackSetupFailure == `object`
        ? (E.slackSetupFailure.retryAtMs ?? E.slackSetupRetryAtMs)
        : E?.slackSetupRetryAtMs,
    [O, k] = (0, mn.useState)(s == null && E?.slackSetupFailure != null),
    [A, M] = (0, mn.useState)(E?.slackSetupFailure),
    [N, P] = (0, mn.useState)(!1),
    F = se(),
    { handleAppConnectOAuthStarted: te } = pt(),
    I,
    L,
    ne;
  t[4] !== n || t[5] !== r || t[6] !== c || t[7] !== l
    ? ((L = Ae(n, l, c, r)),
      ({ queryKey: I } = L),
      (ne = [...I, `connect`]),
      (t[4] = n),
      (t[5] = r),
      (t[6] = c),
      (t[7] = l),
      (t[8] = I),
      (t[9] = L),
      (t[10] = ne))
    : ((I = t[8]), (L = t[9]), (ne = t[10]));
  let R = ne,
    re;
  t[11] === R ? (re = t[12]) : ((re = { mutationKey: R, exact: !0 }), (t[11] = R), (t[12] = re));
  let ie = Ce(re) > 0,
    ae = we(Mt, I),
    oe = a === `shortcut` ? 1 / 0 : L.staleTime,
    z = a !== `shortcut`,
    B;
  t[13] !== L || t[14] !== oe || t[15] !== z
    ? ((B = { ...L, staleTime: oe, retryOnMount: z }), (t[13] = L), (t[14] = oe), (t[15] = z), (t[16] = B))
    : (B = t[16]);
  let { data: V, isLoading: H, isError: U, refetch: W } = ee(B),
    G;
  t[17] === r
    ? (G = t[18])
    : ((G = (e) => {
        let { threadId: t, workspace: n, installTarget: i } = e;
        return r.connect(t, n.parent_link_id, i);
      }),
      (t[17] = r),
      (t[18] = G));
  let K;
  t[19] === d
    ? (K = t[20])
    : ((K = (e, t) => {
        It(d, t.queryKey, at(e));
      }),
      (t[19] = d),
      (t[20] = K));
  let q;
  t[21] !== F || t[22] !== d
    ? ((q = (e, t) => {
        (F.setQueryData(t.queryKey, e), e.status === `connected` && e.available && jt(d, t.queryKey));
      }),
      (t[21] = F),
      (t[22] = d),
      (t[23] = q))
    : (q = t[23]);
  let ce;
  t[24] !== R || t[25] !== K || t[26] !== q || t[27] !== G
    ? ((ce = { mutationKey: R, mutationFn: G, onError: K, onSuccess: q }),
      (t[24] = R),
      (t[25] = K),
      (t[26] = q),
      (t[27] = G),
      (t[28] = ce))
    : (ce = t[28]);
  let { mutate: le, error: ue, reset: de } = v(ce),
    fe;
  t[29] !== n ||
  t[30] !== te ||
  t[31] !== a ||
  t[32] !== F ||
  t[33] !== I ||
  t[34] !== D ||
  t[35] !== d ||
  t[36] !== c ||
  t[37] !== l
    ? ((fe = {
        mutationFn: async (e) => {
          let {
            connectorId: t,
            workspaceId: r,
            enterpriseId: i,
            parentLinkId: o,
            reconnectParent: s,
            authorizationTeamId: u,
          } = e;
          if (n == null || l == null) throw Error(`Sign in to connect your dot`);
          let f = new AbortController();
          (b.current?.abort(), (b.current = f));
          let p = () => !f.signal.aborted && d.get(je) === n && d.get(Ke) === l;
          if (!p()) return;
          let m = {
              orbitContactSetup: a === `setup` || void 0,
              slackSetupRetryAtMs: d.get(Ft, I) ?? D,
              orbitSlackSetup: {
                accountId: n,
                userId: l,
                threadId: c,
                parentLinkId: o,
                workspaceId: r,
                enterpriseId: i,
                reconnectParent: s,
              },
            },
            h = o == null ? (u ?? (s ? null : r)) : (i ?? r),
            g = {
              scope: d,
              app: { id: t, name: `Slack`, installUrl: null },
              queryClient: F,
              allowBrowserFallback: !1,
              onOAuthStarted: (e) => {
                p() &&
                  te({
                    app: { id: t, name: `Slack` },
                    redirectUrl: e,
                    resumeTarget: {
                      kind: `return-to-location-state`,
                      successState: m,
                      failureState: { ...m, slackSetupFailure: `authorization` },
                    },
                  });
              },
              openInBrowser: (e) => {
                if (!p()) return;
                let t = e,
                  n = new URL(e);
                return (
                  n.origin === `https://slack.com` &&
                    n.pathname === `/oauth/v2/authorize` &&
                    (h ? n.searchParams.set(`team`, h) : n.searchParams.delete(`team`), (t = n.toString())),
                  Ye({
                    disposition: void 0,
                    href: t,
                    initiator: `side_panel_menu`,
                    openTarget: `external-browser`,
                  })
                );
              },
            },
            _ =
              o == null
                ? await Ze({
                    ...g,
                    linkParams: { orbit_setup: !0, authorization_url_params: { team: h ?? `` } },
                  })
                : await ct({ ...g, linkId: o, fallbackUrl: `` });
          if (p() && _.kind === `failed`) throw Error(`Slack authorization could not be started`);
        },
      }),
      (t[29] = n),
      (t[30] = te),
      (t[31] = a),
      (t[32] = F),
      (t[33] = I),
      (t[34] = D),
      (t[35] = d),
      (t[36] = c),
      (t[37] = l),
      (t[38] = fe))
    : (fe = t[38]);
  let { mutate: J, isPending: pe, isError: me, reset: he } = v(fe),
    Y = V?.status === `connected` && V.available,
    ge = H || N || ie || ae || pe,
    X = V?.status === `connected` ? V.parentReconnect : null;
  O && Y && k(!1);
  let _e;
  t[39] !== J || t[40] !== X || t[41] !== he
    ? ((_e = () => {
        X != null &&
          (he(),
          M(void 0),
          J({
            connectorId: X.connectorId,
            parentLinkId: X.parentLinkId,
            workspaceId: X.installationId.startsWith(`T`) ? X.installationId : null,
            enterpriseId: X.installationId.startsWith(`E`) ? X.installationId : null,
            reconnectParent: !0,
          }));
      }),
      (t[39] = J),
      (t[40] = X),
      (t[41] = he),
      (t[42] = _e))
    : (_e = t[42]);
  let ve = _e,
    be;
  t[43] !== me || t[44] !== ue || t[45] !== U || t[46] !== A
    ? ((be = ue == null ? (A ?? (U || me ? `failed` : void 0)) : at(ue)),
      (t[43] = me),
      (t[44] = ue),
      (t[45] = U),
      (t[46] = A),
      (t[47] = be))
    : (be = t[47]);
  let xe = be;
  Y && !U && (xe = void 0);
  let Se = a === `setup` ? `setup` : `dialog`,
    Te;
  t[48] === c ? (Te = t[49]) : ((Te = p(c)), (t[48] = c), (t[49] = Te));
  let Ee = X == null ? null : ve,
    De;
  t[50] === V ? (De = t[51]) : ((De = V ?? { status: `unavailable` }), (t[50] = V), (t[51] = De));
  let Oe = E?.orbitSlackSetup.parentLinkId ?? void 0,
    ke,
    Me;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = () => {
        (_.current?.abort(), b.current?.abort(), (_.current = null), P(!1), k(!1));
      }),
      (Me = (e) => {
        h.current != null && (e.preventDefault(), h.current.focus());
      }),
      (t[52] = ke),
      (t[53] = Me))
    : ((ke = t[52]), (Me = t[53]));
  let Ne;
  t[54] !== U || t[55] !== W
    ? ((Ne = U
        ? () => {
            (P(!0), W().finally(() => P(!1)));
          }
        : null),
      (t[54] = U),
      (t[55] = W),
      (t[56] = Ne))
    : (Ne = t[56]);
  let Pe;
  t[57] !== r || t[58] !== d || t[59] !== c
    ? ((Pe = () => kt(d, c, r)), (t[57] = r), (t[58] = d), (t[59] = c), (t[60] = Pe))
    : (Pe = t[60]);
  let Fe;
  t[61] !== n ||
  t[62] !== J ||
  t[63] !== le ||
  t[64] !== V ||
  t[65] !== R ||
  t[66] !== F ||
  t[67] !== I ||
  t[68] !== W ||
  t[69] !== he ||
  t[70] !== de ||
  t[71] !== D ||
  t[72] !== d ||
  t[73] !== c ||
  t[74] !== l
    ? ((Fe = async (e) => {
        if (
          (V?.status === `setup` &&
            V.workspaces.includes(e) &&
            Lt(e) != null &&
            (d.get(Ft, I) ?? D ?? 0) > Date.now()) ||
          _.current != null ||
          F.isMutating({ mutationKey: R, exact: !0 }) > 0
        )
          return;
        let t = new AbortController();
        _.current = t;
        let r = e.parent_link_id;
        if ((de(), he(), M(void 0), P(!0), t.signal.aborted || d.get(je) !== n || d.get(Ke) !== l)) return;
        let i = await W();
        if (
          t.signal.aborted ||
          ((_.current = null), P(!1), d.get(je) !== n || d.get(Ke) !== l || i.isError) ||
          (i.data?.status === `connected` && i.data.available && jt(d, I), i.data?.status !== `setup`)
        )
          return;
        let a = [...i.data.workspaces, ...i.data.reconnectWorkspaces].find((e) => e.parent_link_id === r);
        if (a == null || a.workspace_id !== e.workspace_id || a.enterprise_id !== e.enterprise_id) {
          M(`workspace`);
          return;
        }
        let o = Lt(a);
        if (i.data.workspaces.includes(a) && o != null) {
          let e = d.get(Ft, I) ?? D;
          if (e != null && Date.now() < e) {
            M({ kind: `rate-limited`, retryAtMs: e });
            return;
          }
          le({ threadId: c, queryKey: I, workspace: a, installTarget: o });
        } else
          J({
            connectorId: i.data.authorizationConnectorId,
            parentLinkId: r,
            enterpriseId: o?.kind === `organization` ? o.enterpriseId : null,
            workspaceId: o?.kind === `workspace` ? o.workspaceId : null,
          });
      }),
      (t[61] = n),
      (t[62] = J),
      (t[63] = le),
      (t[64] = V),
      (t[65] = R),
      (t[66] = F),
      (t[67] = I),
      (t[68] = W),
      (t[69] = he),
      (t[70] = de),
      (t[71] = D),
      (t[72] = d),
      (t[73] = c),
      (t[74] = l),
      (t[75] = Fe))
    : (Fe = t[75]);
  let Ie;
  t[76] !== J || t[77] !== V
    ? ((Ie = () => {
        if ((M(void 0), V?.status === `setup`)) {
          let e = [...V.workspaces, ...V.reconnectWorkspaces],
            t = e.flatMap(fn).find(dn),
            n = Pt(e.filter(un));
          J({
            connectorId: V.authorizationConnectorId,
            authorizationTeamId: t ?? n?.workspace_id,
            workspaceId: null,
            enterpriseId: null,
            parentLinkId: null,
          });
        }
      }),
      (t[76] = J),
      (t[77] = V),
      (t[78] = Ie))
    : (Ie = t[78]);
  let Le;
  t[79] !== xe ||
  t[80] !== ge ||
  t[81] !== I ||
  t[82] !== D ||
  t[83] !== Se ||
  t[84] !== Te ||
  t[85] !== Ee ||
  t[86] !== De ||
  t[87] !== Oe ||
  t[88] !== Ne ||
  t[89] !== Pe ||
  t[90] !== Fe ||
  t[91] !== Ie ||
  t[92] !== c
    ? ((Le = (0, Q.jsx)(
        hn,
        {
          mode: Se,
          conversationId: Te,
          onReconnect: Ee,
          connection: De,
          initialParentLinkId: Oe,
          pending: ge,
          queryKey: I,
          resumedRetryAtMs: D,
          failure: xe,
          onClose: ke,
          onCloseAutoFocus: Me,
          onRetry: Ne,
          onDisconnect: Pe,
          onConnect: Fe,
          onAuthorize: Ie,
        },
        c,
      )),
      (t[79] = xe),
      (t[80] = ge),
      (t[81] = I),
      (t[82] = D),
      (t[83] = Se),
      (t[84] = Te),
      (t[85] = Ee),
      (t[86] = De),
      (t[87] = Oe),
      (t[88] = Ne),
      (t[89] = Pe),
      (t[90] = Fe),
      (t[91] = Ie),
      (t[92] = c),
      (t[93] = Le))
    : (Le = t[93]);
  let Re = Le;
  if (a === `setup`) {
    if (V == null && (H || N)) {
      let e;
      return (
        t[94] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(xt, {})), (t[94] = e))
          : (e = t[94]),
        e
      );
    }
    return Re;
  }
  if (a === `shortcut` && (n == null || l == null || V?.status === `unavailable`)) return null;
  let ze;
  if (a === `shortcut`) {
    let e;
    (t[95] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(u, {
          id: `restricted.aeonMessaging.slackShortcut`,
          defaultMessage: `Slack`,
          description: `Button opening the dot in Slack or setting up its Slack connection`,
        })),
        (t[95] = e))
      : (e = t[95]),
      (ze = e));
  } else {
    let e;
    t[96] !== me || t[97] !== X || t[98] !== A
      ? ((e =
          X == null
            ? null
            : (0, Q.jsx)(u, {
                id: `restricted.aeon.slack.reconnectAction`,
                defaultMessage: `{failed, select, true {Slack reconnect failed. Try again} other {Reconnect Slack}}`,
                description: `Action in dot details to reconnect its Slack authorization or retry a failed reconnect`,
                values: { failed: String(me || A != null) },
              })),
        (t[96] = me),
        (t[97] = X),
        (t[98] = A),
        (t[99] = e))
      : (e = t[99]);
    let n;
    t[100] !== Y || t[101] !== V
      ? ((n =
          Y && V.workspaceName
            ? (0, Q.jsx)(u, {
                id: `restricted.aeon.slack.openWorkspaceAction`,
                defaultMessage: `Open in Slack ({workspaceName})`,
                description: `Opens the dot's Slack direct message in the named Slack workspace`,
                values: { workspaceName: V.workspaceName },
              })
            : null),
        (t[100] = Y),
        (t[101] = V),
        (t[102] = n))
      : (n = t[102]);
    let r;
    t[103] !== Y || t[104] !== V
      ? ((r =
          Y && !V.workspaceName
            ? (0, Q.jsx)(u, {
                id: `restricted.aeon.slack.openAction`,
                defaultMessage: `Open in Slack`,
                description: `Action in dot details that opens its Slack direct message`,
              })
            : null),
        (t[103] = Y),
        (t[104] = V),
        (t[105] = r))
      : (r = t[105]);
    let i;
    t[106] !== Y || t[107] !== X
      ? ((i =
          !Y && X == null
            ? (0, Q.jsx)(u, {
                id: `restricted.aeon.slack.addAction`,
                defaultMessage: `Add to Slack`,
                description: `Action in dot details that opens setup for direct messaging the dot in Slack`,
              })
            : null),
        (t[106] = Y),
        (t[107] = X),
        (t[108] = i))
      : (i = t[108]);
    let a;
    (t[109] !== e || t[110] !== n || t[111] !== r || t[112] !== i
      ? ((a = (0, Q.jsxs)(Q.Fragment, { children: [e, n, r, i] })),
        (t[109] = e),
        (t[110] = n),
        (t[111] = r),
        (t[112] = i),
        (t[113] = a))
      : (a = t[113]),
      (ze = a));
  }
  if (a === `shortcut` && Y && X == null) {
    let e;
    t[114] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(y, { asset: j })), (t[114] = e))
      : (e = t[114]);
    let n = V.slackDisplayName == null ? null : `@${V.slackDisplayName}`,
      a = V.workspaceName ?? ze,
      o;
    t[115] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, Q.jsx)(u, {
          id: `restricted.aeon.slack.actions.open`,
          defaultMessage: `Open in Slack`,
          description: `Action in dot details that opens its Slack direct message`,
        })),
        (t[115] = o))
      : (o = t[115]);
    let s;
    t[116] !== r || t[117] !== d || t[118] !== c
      ? ((s = () => void kt(d, c, r)), (t[116] = r), (t[117] = d), (t[118] = c), (t[119] = s))
      : (s = t[119]);
    let l;
    return (
      t[120] !== V.slackUrl ||
      t[121] !== i ||
      t[122] !== ze ||
      t[123] !== ge ||
      t[124] !== n ||
      t[125] !== a ||
      t[126] !== s
        ? ((l = (0, Q.jsx)(tn, {
            ref: h,
            icon: e,
            iconOnly: i,
            label: ze,
            handle: n,
            menuLabel: a,
            url: V.slackUrl,
            openLabel: o,
            pending: ge,
            onRemove: s,
          })),
          (t[120] = V.slackUrl),
          (t[121] = i),
          (t[122] = ze),
          (t[123] = ge),
          (t[124] = n),
          (t[125] = a),
          (t[126] = s),
          (t[127] = l))
        : (l = t[127]),
      l
    );
  }
  let Be;
  t[128] === a
    ? (Be = t[129])
    : ((Be =
        a === `shortcut`
          ? (0, Q.jsx)(y, { asset: j })
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                null,
                (0, Q.jsx)(Q.Fragment, {
                  children: (0, Q.jsx)(y, { asset: a === `content` ? g : m, "aria-hidden": !1 }),
                }),
              ],
            })),
      (t[128] = a),
      (t[129] = Be));
  let Ve = Y || X != null ? void 0 : `dialog`,
    He = Y || X != null ? void 0 : O,
    Ue;
  t[130] !== Y || t[131] !== V || t[132] !== s || t[133] !== X || t[134] !== ve || t[135] !== W
    ? ((Ue = (e) => {
        s != null && !Y
          ? s(e.currentTarget)
          : X == null
            ? V?.status === `connected` && V.available
              ? qe({ event: e, href: V.slackUrl, initiator: `side_panel_menu` })
              : (k(!0), W())
            : ve();
      }),
      (t[130] = Y),
      (t[131] = V),
      (t[132] = s),
      (t[133] = X),
      (t[134] = ve),
      (t[135] = W),
      (t[136] = Ue))
    : (Ue = t[136]);
  let We;
  t[137] !== i ||
  t[138] !== ze ||
  t[139] !== a ||
  t[140] !== ge ||
  t[141] !== Be ||
  t[142] !== Ve ||
  t[143] !== He ||
  t[144] !== Ue
    ? ((We = (0, Q.jsx)(vt, {
        ref: h,
        mode: a,
        iconOnly: i,
        icon: Be,
        disabled: ge,
        "aria-busy": ge,
        "aria-haspopup": Ve,
        "aria-expanded": He,
        onClick: Ue,
        children: ze,
      })),
      (t[137] = i),
      (t[138] = ze),
      (t[139] = a),
      (t[140] = ge),
      (t[141] = Be),
      (t[142] = Ve),
      (t[143] = He),
      (t[144] = Ue),
      (t[145] = We))
    : (We = t[145]);
  let Ge;
  t[146] !== Y || t[147] !== O || t[148] !== X || t[149] !== Re
    ? ((Ge = O && !Y && X == null ? (0, Q.jsx)(mn.Suspense, { fallback: null, children: Re }) : null),
      (t[146] = Y),
      (t[147] = O),
      (t[148] = X),
      (t[149] = Re),
      (t[150] = Ge))
    : (Ge = t[150]);
  let Je;
  return (
    t[151] !== We || t[152] !== Ge
      ? ((Je = (0, Q.jsxs)(Q.Fragment, { children: [We, Ge] })), (t[151] = We), (t[152] = Ge), (t[153] = Je))
      : (Je = t[153]),
    Je
  );
}
function un(e) {
  return Lt(e) != null;
}
function dn(e) {
  return e?.startsWith(`E`);
}
function fn(e) {
  return [e.enterprise_id_hint, e.enterprise_id];
}
var pn, mn, Q, hn;
function gn() {
  return (gn = e(() => {
    ((pn = X()),
      N(),
      de(),
      l(),
      C(),
      d(),
      P(),
      Y(),
      S(),
      pe(),
      (mn = xe()),
      H(),
      I(),
      nt(),
      mt(),
      ut(),
      he(),
      Pe(),
      b(),
      ve(),
      ht(),
      en(),
      _t(),
      on(),
      Ct(),
      Ot(),
      ke(),
      Rt(),
      At(),
      Ue(),
      zt(),
      (Q = be()),
      ue(),
      (hn = (0, mn.lazy)(async () => ({
        default: (
          await re(
            async () => {
              let { SlackSetupDialog: e } = await import(`./setup-dialog-60a51bf046e2.js`);
              return { SlackSetupDialog: e };
            },
            __vite__mapDeps([12, 1, 2, 3, 4, 5, 13, 8, 9, 7, 10, 14, 15, 16]),
            import.meta.url,
          )
        ).SlackSetupDialog,
      }))));
  }))();
}
var _n, vn;
function yn() {
  return (yn = e(() => {
    (xe(),
      (_n = be()),
      (vn = (e) =>
        (0, _n.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `currentColor`,
          ...e,
          children: [
            (0, _n.jsx)(`defs`, {
              children: (0, _n.jsxs)(`mask`, {
                id: `teams-tile-cutout-16`,
                x: 0,
                y: 0,
                width: 16,
                height: 16,
                maskUnits: `userSpaceOnUse`,
                children: [
                  (0, _n.jsx)(`rect`, { width: 16, height: 16, fill: `white` }),
                  (0, _n.jsx)(`rect`, { x: 1, y: 4, width: 7.5, height: 7.5, rx: 1.25, fill: `black` }),
                ],
              }),
            }),
            (0, _n.jsxs)(`g`, {
              mask: `url(#teams-tile-cutout-16)`,
              children: [
                (0, _n.jsx)(`path`, {
                  d: `M12.5 6H14a.5.5 0 0 1 .5.5v4a1.25 1.25 0 0 1-2.5 0v-4a.5.5 0 0 1 .5-.5Z`,
                }),
                (0, _n.jsx)(`circle`, { cx: 12.75, cy: 4, r: 1.5 }),
                (0, _n.jsx)(`circle`, { cx: 8.5, cy: 3.5, r: 2 }),
                (0, _n.jsx)(`path`, { d: `M6 6h5a.5.5 0 0 1 .5.5v4a3 3 0 0 1-6 0v-4A.5.5 0 0 1 6 6Z` }),
              ],
            }),
            (0, _n.jsx)(`path`, {
              fillRule: `evenodd`,
              d: `M2.25 4.5h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75ZM3 6h3.5v1H5.25v2.5h-1V7H3Z`,
            }),
          ],
        })));
  }))();
}
var bn, xn;
function Sn() {
  return (Sn = e(() => {
    (xe(),
      (bn = be()),
      (xn = (e) =>
        (0, bn.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          ...e,
          children: [
            (0, bn.jsx)(`path`, {
              d: `M11.1856 6.79704C11.6348 6.7138 12.0513 6.5051 12.3869 6.19508C12.7224 5.88507 12.9634 5.4864 13.0819 5.04518C13.2003 4.60396 13.1915 4.13822 13.0564 3.7018C12.9213 3.26539 12.6654 2.87614 12.3183 2.57907C11.9712 2.282 11.5472 2.08923 11.0951 2.02307C10.6431 1.95691 10.1816 2.02005 9.76391 2.2052C9.34625 2.39035 8.98954 2.68994 8.73502 3.06932C8.4805 3.4487 8.33856 3.89238 8.32563 4.34904H9.50363C10.4326 4.34904 11.1856 5.10204 11.1856 6.03104V6.79704ZM6.89062 14.535H9.50363C10.4326 14.535 11.1856 13.782 11.1856 12.853V7.58004H13.9686C14.1539 7.58476 14.3298 7.66279 14.4577 7.79702C14.5855 7.93125 14.6549 8.11072 14.6506 8.29604V12.59C14.6764 13.7019 14.2598 14.7785 13.4924 15.5834C12.725 16.3884 11.6694 16.8558 10.5576 16.883C8.93962 16.843 7.55762 15.893 6.89062 14.533V14.535ZM17.6276 5.16304C17.6276 5.38294 17.5843 5.60069 17.5002 5.80385C17.416 6.00701 17.2927 6.1916 17.1372 6.34709C16.9817 6.50259 16.7971 6.62593 16.5939 6.71008C16.3908 6.79423 16.173 6.83754 15.9531 6.83754C15.7332 6.83754 15.5155 6.79423 15.3123 6.71008C15.1092 6.62593 14.9246 6.50259 14.7691 6.34709C14.6136 6.1916 14.4902 6.00701 14.4061 5.80385C14.3219 5.60069 14.2786 5.38294 14.2786 5.16304C14.2786 4.71894 14.455 4.29302 14.7691 3.97899C15.0831 3.66496 15.509 3.48854 15.9531 3.48854C16.3972 3.48854 16.8231 3.66496 17.1372 3.97899C17.4512 4.29302 17.6276 4.71894 17.6276 5.16304ZM15.3896 14.651L15.2696 14.649C15.5364 13.9922 15.6661 13.2878 15.6506 12.579V8.30604C15.6545 8.05629 15.6033 7.80876 15.5006 7.58104H17.2926C17.6826 7.58104 17.9996 7.89804 17.9996 8.28804V12.053C17.9991 12.7419 17.7252 13.4024 17.2381 13.8895C16.751 14.3766 16.0905 14.6505 15.4016 14.651H15.3896Z`,
            }),
            (0, bn.jsx)(`path`, {
              d: `M2.682 5.3489H9.504C9.881 5.3489 10.186 5.6539 10.186 6.0309V12.8529C10.1863 12.9425 10.1688 13.0313 10.1346 13.1142C10.1004 13.1971 10.0502 13.2724 9.98684 13.3357C9.92346 13.3991 9.84817 13.4493 9.76531 13.4835C9.68244 13.5177 9.59364 13.5352 9.504 13.5349H2.682C2.59237 13.5352 2.50356 13.5177 2.4207 13.4835C2.33784 13.4493 2.26255 13.3991 2.19917 13.3357C2.13579 13.2724 2.08556 13.1971 2.05138 13.1142C2.0172 13.0313 1.99974 12.9425 2 12.8529V6.0299C2 5.6529 2.305 5.3489 2.682 5.3489ZM7.888 7.9449V7.2249H4.298V7.9449H5.655V11.6599H6.525V7.9449H7.888Z`,
            }),
          ],
        })));
  }))();
}
function Cn(e, t, n) {
  return _({
    queryKey: [`teams-orbit`, e, t, n],
    queryFn: ({ signal: e }) => Vt.status(n, e),
    enabled: e != null && t != null,
    staleTime: 1e4,
    retry: !1,
  });
}
function wn() {
  return (wn = e(() => {
    Bt();
  }))();
}
async function Tn(e, t) {
  let n = e.get(je),
    r = e.get(Ke),
    i = Cn(n, r, t);
  if (n == null || r == null || e.get(On, i.queryKey)) return;
  let a = JSON.stringify(i.queryKey);
  e.set(Dn, (e) => [...e, a]);
  let o = e.get(z),
    s = o.info(
      (0, En.jsx)(u, {
        id: `orbit.teams.removing`,
        defaultMessage: `Removing Teams…`,
        description: `Progress while removing the user's dot installation from Microsoft Teams`,
      }),
      { id: a, duration: 0, hasCloseButton: !1, leading: (0, En.jsx)(fe, {}) },
    ),
    c = !1,
    l = e.watch((e) => {
      (e.get(je) !== n || e.get(Ke) !== r) && ((c = !0), s.close());
    });
  try {
    let n = await e.queryClient.fetchQuery({ ...i, staleTime: 0 });
    if (c) return;
    let r = n.connections?.find((e) => e.team_id == null);
    if (r != null) {
      if ((await Vt.disconnect(t, r.binding_id, r.binding_version), c)) return;
      e.queryClient.resetQueries({ queryKey: i.queryKey, exact: !0 }, { throwOnError: !1 });
    }
    o.success(
      (0, En.jsx)(u, {
        id: `orbit.teams.removed`,
        defaultMessage: `Teams removed`,
        description: `Confirmation after removing the user's dot installation from Microsoft Teams`,
      }),
      { id: a },
    );
  } catch {
    c ||
      o.danger(
        (0, En.jsx)(u, {
          id: `orbit.teams.removeFailed`,
          defaultMessage: `Couldn’t finish removing Teams. Please try again`,
          description: `Error when removing a dot installation from Microsoft Teams fails or is incomplete; the user can retry Remove`,
        }),
        { id: a, errorAnalytics: { toastId: `orbit.teams.removeFailed` } },
      );
  } finally {
    (l(), s.close(), e.set(Dn, (e) => e.filter((e) => e !== a)));
  }
}
var En, Dn, On;
function kn() {
  return (kn = e(() => {
    (S(),
      H(),
      ut(),
      B(),
      G(),
      ve(),
      Bt(),
      wn(),
      (En = be()),
      (Dn = ie(o, [])),
      (On = q(o, (e, { get: t }) => t(Dn).includes(JSON.stringify(e)))));
  }))();
}
function An(e) {
  let t = (0, jn.c)(16),
    { threadId: n, displayName: r, url: i, iconOnly: a } = e,
    s = f(o),
    c = O(je),
    l = O(Ke),
    d;
  t[0] !== c || t[1] !== n || t[2] !== l
    ? ((d = Cn(c, l, n)), (t[0] = c), (t[1] = n), (t[2] = l), (t[3] = d))
    : (d = t[3]);
  let p = we(On, d.queryKey),
    m;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Mn.jsx)(y, { asset: k })), (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Mn.jsx)(u, {
        id: `orbit.teams.contact.label`,
        defaultMessage: `Teams`,
        description: `Label for the Microsoft Teams contact menu in the dot profile`,
      })),
      (t[5] = h))
    : (h = t[5]);
  let g = r ? `@${r}` : null,
    _;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Mn.jsx)(u, {
        id: `orbit.teams.contact.open`,
        defaultMessage: `Open in Teams`,
        description: `Opens the connected dot's personal chat in Microsoft Teams`,
      })),
      (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] !== s || t[8] !== n ? ((v = () => void Tn(s, n)), (t[7] = s), (t[8] = n), (t[9] = v)) : (v = t[9]);
  let b;
  return (
    t[10] !== a || t[11] !== p || t[12] !== g || t[13] !== v || t[14] !== i
      ? ((b = (0, Mn.jsx)(tn, {
          icon: m,
          iconOnly: a,
          label: h,
          handle: g,
          url: i,
          openLabel: _,
          pending: p,
          onRemove: v,
        })),
        (t[10] = a),
        (t[11] = p),
        (t[12] = g),
        (t[13] = v),
        (t[14] = i),
        (t[15] = b))
      : (b = t[15]),
    b
  );
}
var jn, Mn;
function Nn() {
  return (Nn = e(() => {
    ((jn = X()), E(), S(), H(), ut(), b(), ve(), on(), kn(), wn(), (Mn = be()));
  }))();
}
function Pn(e) {
  let t = (0, Bn.c)(8),
    { threadId: r, mode: i, onClose: a, onSetup: o } = e,
    s = i === void 0 ? `section` : i,
    c = we($t, r),
    l = ot(`1329052020`);
  if (c == null && l && s === `setup`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(xt, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  if (!c || !l) {
    let e;
    return (
      t[1] === s
        ? (e = t[2])
        : ((e =
            s === `setup`
              ? (0, $.jsxs)(`div`, {
                  className: `flex flex-col gap-6`,
                  children: [
                    (0, $.jsx)(St, {
                      description: (0, $.jsx)(u, {
                        id: `restricted.aeon.teams.setup.unavailable.dot`,
                        defaultMessage: `Teams is unavailable for this dot`,
                        description: `Explains that this dot cannot currently be connected to Microsoft Teams. A dot is an always-on agent; use dot as a common noun and preserve user-chosen names. Keep the singular term dot untranslated.`,
                      }),
                      title: (0, $.jsx)(u, {
                        id: `restricted.aeon.teams.setup.unavailableTitle`,
                        defaultMessage: `Teams unavailable`,
                        description: `Heading when this dot cannot use Teams contact setup`,
                      }),
                    }),
                    (0, $.jsx)(n, {
                      color: `primary`,
                      size: `detailAction`,
                      disabled: !0,
                      children: (0, $.jsx)(u, {
                        id: `restricted.aeon.teams.add`,
                        defaultMessage: `Add to Teams`,
                        description: `Opens Microsoft Teams installation for this dot`,
                      }),
                    }),
                  ],
                })
              : null),
          (t[1] = s),
          (t[2] = e)),
      e
    );
  }
  let d;
  return (
    t[3] !== s || t[4] !== a || t[5] !== o || t[6] !== r
      ? ((d = (0, $.jsx)(Fn, { threadId: r, mode: s, onClose: a, onSetup: o }, r)),
        (t[3] = s),
        (t[4] = a),
        (t[5] = o),
        (t[6] = r),
        (t[7] = d))
      : (d = t[7]),
    d
  );
}
function Fn(e) {
  let t = (0, Bn.c)(74),
    { threadId: n, mode: r, iconOnly: i, onClose: a, onSetup: o } = e,
    [c, l] = (0, Hn.useState)(!1),
    d = O(je),
    f = O(Ke),
    p = ye(),
    m = s(),
    h;
  t[0] === p.state ? (h = t[1]) : ((h = Ut(p.state)), (t[0] = p.state), (t[1] = h));
  let g = h,
    _ = g?.orbitTeamsSetup,
    v = _?.accountId === d && _?.userId === f && _?.threadId === n,
    b = c || (v && g?.orbitContactSetup !== !0),
    x;
  t[2] !== d || t[3] !== n || t[4] !== f
    ? ((x = Cn(d, f, n)), (t[2] = d), (t[3] = n), (t[4] = f), (t[5] = x))
    : (x = t[5]);
  let S = r !== `setup` && d != null && f != null,
    C = r === `shortcut` ? 1 / 0 : 1e4,
    w = r !== `shortcut`,
    T;
  t[6] !== x || t[7] !== S || t[8] !== C || t[9] !== w
    ? ((T = { ...x, enabled: S, staleTime: C, retryOnMount: w }),
      (t[6] = x),
      (t[7] = S),
      (t[8] = C),
      (t[9] = w),
      (t[10] = T))
    : (T = t[10]);
  let { data: E, isPending: D, isError: A, refetch: j } = ee(T),
    M = E?.authorization_connector_id,
    N,
    P,
    F;
  if (t[11] !== d || t[12] !== M || t[13] !== f) {
    let e = Ie(M ?? ``, { includeActions: !0, productSku: `AEON` });
    ((F = ee),
      (N = e),
      (P = [...e.queryKey, d, f]),
      (t[11] = d),
      (t[12] = M),
      (t[13] = f),
      (t[14] = N),
      (t[15] = P),
      (t[16] = F));
  } else ((N = t[14]), (P = t[15]), (F = t[16]));
  let te = r !== `setup` && r !== `shortcut` && d != null && f != null && M != null,
    I;
  t[17] !== te || t[18] !== N || t[19] !== P
    ? ((I = { ...N, queryKey: P, enabled: te, staleTime: 1e4, retry: !1, select: Ln }),
      (t[17] = te),
      (t[18] = N),
      (t[19] = P),
      (t[20] = I))
    : (I = t[20]);
  let { data: L, status: ne, isFetching: R, refetch: re } = F(I),
    ie;
  t[21] !== p || t[22] !== r || t[23] !== m || t[24] !== a || t[25] !== v
    ? ((ie = () => {
        if ((l(!1), r === `setup` && a != null)) {
          a();
          return;
        }
        v && m(p, { replace: !0, state: (0, Vn.default)(p.state, `orbitTeamsSetup`) });
      }),
      (t[21] = p),
      (t[22] = r),
      (t[23] = m),
      (t[24] = a),
      (t[25] = v),
      (t[26] = ie))
    : (ie = t[26]);
  let ae = ie,
    oe =
      r !== `setup` &&
      r !== `shortcut` &&
      !E?.connections?.length &&
      E?.installation == null &&
      E?.personal_installation !== `accepted` &&
      !b;
  if (oe && !A && (M == null || (ne === `success` && !L))) return null;
  let z;
  t[27] !== ne || t[28] !== A || t[29] !== r || t[30] !== oe || t[31] !== j || t[32] !== re
    ? ((z = null),
      A && r !== `shortcut` ? (z = j) : oe && ne === `error` && (z = re),
      (t[27] = ne),
      (t[28] = A),
      (t[29] = r),
      (t[30] = oe),
      (t[31] = j),
      (t[32] = re),
      (t[33] = z))
    : (z = t[33]);
  let B = r !== `shortcut` && (D || (oe && !A && (ne === `pending` || R))),
    V = null;
  if (z != null) {
    let e;
    (t[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(u, {
          id: `restricted.aeon.teams.setup.refresh`,
          defaultMessage: `Try again`,
          description: `Retries loading the Teams setup`,
        })),
        (t[34] = e))
      : (e = t[34]),
      (V = e));
  } else if (oe && B) {
    let e;
    (t[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(u, {
          id: `restricted.aeon.teams.setup.checkingPermissions`,
          defaultMessage: `Checking Teams permissions…`,
          description: `Disabled button label in the dot's Teams setup while checking whether the ChatGPT workspace permits installation. Replaced by Add to Teams when installation is allowed. No placeholders.`,
        })),
        (t[35] = e))
      : (e = t[35]),
      (V = e));
  }
  let H;
  t[36] !== o || t[37] !== z
    ? ((H = (e) => {
        z == null ? (o == null ? l(!0) : o(e)) : z();
      }),
      (t[36] = o),
      (t[37] = z),
      (t[38] = H))
    : (H = t[38]);
  let U = H,
    W = `${d}:${f}:${n}:${v ? _.linkId : ``}`,
    G = r === `setup` ? `setup` : `dialog`,
    K = v ? _.linkId : void 0,
    q = v ? _.displayName : void 0,
    se = v ? _.originalDisplayName : void 0,
    ce;
  t[39] !== d ||
  t[40] !== ae ||
  t[41] !== W ||
  t[42] !== G ||
  t[43] !== K ||
  t[44] !== q ||
  t[45] !== se ||
  t[46] !== n ||
  t[47] !== f
    ? ((ce = (0, $.jsx)(
        Un,
        {
          mode: G,
          threadId: n,
          accountId: d,
          userId: f,
          initialLinkId: K,
          initialDisplayName: q,
          initialOriginalDisplayName: se,
          onClose: ae,
        },
        W,
      )),
      (t[39] = d),
      (t[40] = ae),
      (t[41] = W),
      (t[42] = G),
      (t[43] = K),
      (t[44] = q),
      (t[45] = se),
      (t[46] = n),
      (t[47] = f),
      (t[48] = ce))
    : (ce = t[48]);
  let le = ce;
  if (r === `setup`) return le;
  let ue;
  t[49] === E?.connections
    ? (ue = t[50])
    : ((ue = E?.connections?.find(In)), (t[49] = E?.connections), (t[50] = ue));
  let de = ue,
    fe;
  if (V != null) fe = V;
  else if (r === `shortcut`) {
    let e;
    (t[51] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(u, {
          id: `restricted.aeonMessaging.teamsShortcut`,
          defaultMessage: `Teams`,
          description: `Button opening the settings for the dot's Microsoft Teams installation`,
        })),
        (t[51] = e))
      : (e = t[51]),
      (fe = e));
  } else if (E?.connections?.length) {
    let e;
    (t[52] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(u, {
          id: `restricted.aeon.teams.manage`,
          defaultMessage: `Teams connection`,
          description: `Opens the settings for this dot's Microsoft Teams installation`,
        })),
        (t[52] = e))
      : (e = t[52]),
      (fe = e));
  } else {
    let e;
    (t[53] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(u, {
          id: `restricted.aeon.teams.add`,
          defaultMessage: `Add to Teams`,
          description: `Opens Microsoft Teams installation for this dot`,
        })),
        (t[53] = e))
      : (e = t[53]),
      (fe = e));
  }
  let J = r === `section` ? vn : xn,
    pe;
  t[54] !== J ||
  t[55] !== d ||
  t[56] !== b ||
  t[57] !== U ||
  t[58] !== i ||
  t[59] !== fe ||
  t[60] !== B ||
  t[61] !== r ||
  t[62] !== de ||
  t[63] !== z ||
  t[64] !== n ||
  t[65] !== f
    ? ((pe =
        r === `shortcut` && de != null
          ? (0, $.jsx)(
              An,
              { threadId: n, displayName: de.orbit_display_name ?? null, url: de.teams_url, iconOnly: i },
              `${d}:${f}`,
            )
          : (0, $.jsx)(vt, {
              mode: r,
              iconOnly: i,
              icon:
                r === `shortcut`
                  ? (0, $.jsx)(y, { asset: k })
                  : (0, $.jsx)(J, { "aria-hidden": `true`, focusable: `false` }),
              iconVariant: r === `shortcut` ? void 0 : `custom`,
              loading: B,
              disabled: B || d == null || f == null,
              "aria-haspopup": z == null ? `dialog` : void 0,
              "aria-expanded": z == null ? b : void 0,
              onClick: (e) => U(e.currentTarget),
              children: fe,
            })),
      (t[54] = J),
      (t[55] = d),
      (t[56] = b),
      (t[57] = U),
      (t[58] = i),
      (t[59] = fe),
      (t[60] = B),
      (t[61] = r),
      (t[62] = de),
      (t[63] = z),
      (t[64] = n),
      (t[65] = f),
      (t[66] = pe))
    : (pe = t[66]);
  let me;
  t[67] !== ae || t[68] !== b || t[69] !== le
    ? ((me = b ? (0, $.jsx)(Hn.Suspense, { fallback: (0, $.jsx)(Rn, { onClose: ae }), children: le }) : null),
      (t[67] = ae),
      (t[68] = b),
      (t[69] = le),
      (t[70] = me))
    : (me = t[70]);
  let he;
  return (
    t[71] !== pe || t[72] !== me
      ? ((he = (0, $.jsxs)($.Fragment, { children: [pe, me] })), (t[71] = pe), (t[72] = me), (t[73] = he))
      : (he = t[73]),
    he
  );
}
function In(e) {
  return e.team_id == null;
}
function Ln(e) {
  return (
    e.status !== `DISABLED_BY_ADMIN` &&
    Ht.every((t) => e.actions.some((e) => e.name === t && e.is_enabled !== !1))
  );
}
function Rn(e) {
  let t = (0, Bn.c)(24),
    { failed: r, mode: i, onClose: a } = e,
    o = r !== void 0 && r;
  if ((i === void 0 ? `dialog` : i) === `setup`) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(St, {
          role: `alert`,
          title: (0, $.jsx)(u, {
            id: `restricted.aeon.teams.setup.codeLoadFailedTitle`,
            defaultMessage: `Couldn’t open Teams setup`,
            description: `Heading when the Teams setup code could not be downloaded`,
          }),
          description: (0, $.jsx)(u, {
            id: `restricted.aeon.teams.setup.codeLoadFailedDescription`,
            defaultMessage: `Reload the page to try again`,
            description: `Recovery guidance for a failed download of the Teams setup code`,
          }),
        })),
        (t[0] = e))
      : (e = t[0]);
    let r;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-6`,
            children: [
              e,
              (0, $.jsx)(n, {
                color: `primary`,
                size: `detailAction`,
                onClick: zn,
                children: (0, $.jsx)(u, {
                  id: `restricted.aeon.teams.setup.reloadPage`,
                  defaultMessage: `Reload page`,
                  description: `Reloads the page to retry downloading the Teams setup dialog`,
                }),
              }),
            ],
          })),
          (t[1] = r))
        : (r = t[1]),
      r
    );
  }
  let s;
  t[2] === a
    ? (s = t[3])
    : ((s = (e) => {
        e || a();
      }),
      (t[2] = a),
      (t[3] = s));
  let c;
  t[4] === o
    ? (c = t[5])
    : ((c = (e) => {
        (e.preventDefault(), o && window.location.reload());
      }),
      (t[4] = o),
      (t[5] = c));
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(te, {
        children: (0, $.jsx)(u, {
          id: `restricted.aeon.teams.setup.title`,
          defaultMessage: `Add to Teams`,
          description: `Title of the Microsoft Teams installation dialog for a dot`,
        }),
      })),
      (t[6] = l))
    : (l = t[6]);
  let d;
  t[7] === o
    ? (d = t[8])
    : ((d = (0, $.jsx)(W, {
        children: (0, $.jsx)(ne, {
          title: l,
          subtitle: (0, $.jsx)(ae, {
            className: `select-none`,
            children: o
              ? (0, $.jsx)(`span`, {
                  role: `alert`,
                  children: (0, $.jsx)(u, {
                    id: `restricted.aeon.teams.setup.codeLoadFailed`,
                    defaultMessage: `Could not open Teams setup. Reload the page and try again`,
                    description: `The Teams setup dialog could not be downloaded. Reloading the page retries loading its code`,
                  }),
                })
              : (0, $.jsx)(`span`, {
                  role: `status`,
                  className: `loading-shimmer-pure-text`,
                  children: (0, $.jsx)(u, {
                    id: `restricted.aeon.teams.setup.loading`,
                    defaultMessage: `Loading Teams setup…`,
                    description: `Shown while loading the dot's Teams installation and account information`,
                  }),
                }),
          }),
        }),
      })),
      (t[7] = o),
      (t[8] = d));
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(u, {
        id: `restricted.aeon.teams.setup.cancel`,
        defaultMessage: `Cancel`,
        description: `Closes Teams setup without starting another installation`,
      })),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === a
    ? (p = t[11])
    : ((p = (0, $.jsx)(n, {
        type: `button`,
        color: `secondary`,
        size: `dialogAction`,
        onClick: a,
        children: f,
      })),
      (t[10] = a),
      (t[11] = p));
  let m;
  t[12] === o
    ? (m = t[13])
    : ((m = o
        ? (0, $.jsx)(n, {
            type: `submit`,
            color: `primary`,
            size: `dialogAction`,
            children: (0, $.jsx)(u, {
              id: `restricted.aeon.teams.setup.reloadPage`,
              defaultMessage: `Reload page`,
              description: `Reloads the page to retry downloading the Teams setup dialog`,
            }),
          })
        : null),
      (t[12] = o),
      (t[13] = m));
  let h;
  t[14] !== p || t[15] !== m
    ? ((h = (0, $.jsx)(W, { children: (0, $.jsxs)(me, { expandSingleButton: !1, children: [p, m] }) })),
      (t[14] = p),
      (t[15] = m),
      (t[16] = h))
    : (h = t[16]);
  let g;
  t[17] !== h || t[18] !== c || t[19] !== d
    ? ((g = (0, $.jsxs)(ce, { as: `form`, onSubmit: c, children: [d, h] })),
      (t[17] = h),
      (t[18] = c),
      (t[19] = d),
      (t[20] = g))
    : (g = t[20]);
  let _;
  return (
    t[21] !== g || t[22] !== s
      ? ((_ = (0, $.jsx)(K, { open: !0, size: `compact`, onOpenChange: s, children: g })),
        (t[21] = g),
        (t[22] = s),
        (t[23] = _))
      : (_ = t[23]),
    _
  );
}
function zn() {
  return window.location.reload();
}
var Bn, Vn, Hn, $, Un;
function Wn() {
  return (Wn = e(() => {
    ((Bn = X()),
      E(),
      P(),
      (Vn = t(F(), 1)),
      S(),
      (Hn = xe()),
      H(),
      I(),
      nt(),
      ut(),
      he(),
      ge(),
      R(),
      b(),
      Se(),
      yn(),
      Sn(),
      et(),
      en(),
      _t(),
      Ct(),
      Bt(),
      Nn(),
      Wt(),
      wn(),
      ($ = be()),
      ue(),
      (Un = i(
        async () =>
          (
            await re(
              async () => {
                let { TeamsSetupDialog: e } = await import(`./setup-dialog-317db5aaf031.js`);
                return { TeamsSetupDialog: e };
              },
              __vite__mapDeps([17, 1, 2, 3, 4, 5, 18, 19, 20, 21, 22, 13, 8, 9, 7, 10, 14, 23, 24]),
              import.meta.url,
            )
          ).TeamsSetupDialog,
        {
          suspendToParent: !0,
          errorFallback: ({ mode: e, onClose: t }) => (0, $.jsx)(Rn, { failed: !0, mode: e, onClose: t }),
        },
      )));
  }))();
}
export {
  Cn as a,
  cn as c,
  $t as d,
  en as f,
  wn as i,
  sn as l,
  Qt as m,
  Pn as n,
  xn as o,
  Gt as p,
  Wn as r,
  Sn as s,
  Fn as t,
  gn as u,
};
//# sourceMappingURL=section-408a5a6e1535.js.map
