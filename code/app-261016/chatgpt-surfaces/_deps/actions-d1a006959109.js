import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  BSt as r,
  FBt as i,
  LNt as a,
  NSt as o,
  PBt as s,
  Qst as c,
  TY as l,
  USt as u,
  VSt as d,
  XOt as f,
  ZSt as p,
  bD as m,
  ck as h,
  iCt as g,
  jH as _,
  nCt as v,
  rk as y,
  tk as b,
  tkt as x,
  xD as S,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  JOt as C,
  VRr as w,
  WOt as T,
  YOt as E,
  a$t as ee,
  b$t as te,
  i$t as D,
  wLr as O,
  y$t as k,
} from "./app-initial-ad16eaadf81f.js";
import {
  Av as ne,
  Dv as re,
  Gv as ie,
  Hv as A,
  J_ as j,
  Ov as ae,
  Tv as M,
  Uv as oe,
  Wv as se,
  Xv as ce,
  Y_ as N,
  Yv as P,
  iy as F,
  jv as I,
  ty as L,
  wv as le,
} from "./app-primary-3e00728c2a4c.js";
function ue(e) {
  let t = (0, R.c)(25),
    { action: n, disabled: r, variant: i, onCopy: a } = e,
    [o, s] = (0, z.useState)(!1),
    c,
    l;
  if (
    (t[0] === o
      ? ((c = t[1]), (l = t[2]))
      : ((c = () => {
          if (!o) return;
          let e = window.setTimeout(() => {
            s(!1);
          }, de);
          return () => {
            window.clearTimeout(e);
          };
        }),
        (l = [o]),
        (t[0] = o),
        (t[1] = c),
        (t[2] = l)),
    (0, z.useEffect)(c, l),
    n.action_v2.action_enum !== `copy_to_clipboard`)
  )
    return null;
  let u;
  t[3] === a
    ? (u = t[4])
    : ((u = (e) => {
        a(e).then((e) => {
          e && s(!0);
        });
      }),
      (t[3] = a),
      (t[4] = u));
  let d = u,
    f = i === `modal` ? `dialogAction` : `composerSmLabel`,
    p = i === `banner` ? m.actions : `flex max-w-full min-w-0 items-center justify-center gap-1`,
    h = i === `banner` ? `secondary` : void 0,
    g;
  t[5] === n.action_v2.copy_text
    ? (g = t[6])
    : ((g = (0, B.jsx)(`code`, { className: `truncate font-normal`, children: n.action_v2.copy_text })),
      (t[5] = n.action_v2.copy_text),
      (t[6] = g));
  let _;
  t[7] !== r || t[8] !== d || t[9] !== f || t[10] !== h || t[11] !== g
    ? ((_ = (0, B.jsx)(j, {
        appearance: h,
        allowShrink: !0,
        className: `min-w-0`,
        color: `outlineGhost`,
        disabled: r,
        size: f,
        onClick: d,
        children: g,
      })),
      (t[7] = r),
      (t[8] = d),
      (t[9] = f),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _))
    : (_ = t[12]);
  let v = i === `banner` ? `primary` : void 0,
    y;
  t[13] === o
    ? (y = t[14])
    : ((y = o
        ? (0, B.jsx)(x, {
            id: `beacons.copyAction.copied`,
            defaultMessage: `Copied`,
            description: `Short confirmation on the Beacon copy button after the displayed snippet was successfully copied to the clipboard`,
          })
        : (0, B.jsx)(x, {
            id: `beacons.copyAction.copy`,
            defaultMessage: `Copy`,
            description: `Short button label that copies the adjacent code or text snippet shown in a ChatGPT Beacon banner or modal`,
          })),
      (t[13] = o),
      (t[14] = y));
  let b;
  t[15] !== r || t[16] !== d || t[17] !== f || t[18] !== v || t[19] !== y
    ? ((b = (0, B.jsx)(j, { appearance: v, disabled: r, size: f, onClick: d, children: y })),
      (t[15] = r),
      (t[16] = d),
      (t[17] = f),
      (t[18] = v),
      (t[19] = y),
      (t[20] = b))
    : (b = t[20]);
  let S;
  return (
    t[21] !== b || t[22] !== p || t[23] !== _
      ? ((S = (0, B.jsxs)(`div`, { className: p, children: [_, b] })),
        (t[21] = b),
        (t[22] = p),
        (t[23] = _),
        (t[24] = S))
      : (S = t[24]),
    S
  );
}
var R, z, B, de;
function V() {
  return (V = e(() => {
    ((R = s()), (z = i()), f(), N(), S(), (B = a()), (de = 5e3));
  }))();
}
function fe(e, t) {
  let n = !0,
    r = new Set();
  return {
    activate: () => {
      n = !0;
    },
    invalidate: () => {
      if (n) {
        n = !1;
        for (let e of r) e();
        r.clear();
      }
    },
    isCurrent: (r, i) => n && e === r && t === i,
    onInvalidate: (e) => (n ? (r.add(e), () => r.delete(e)) : (e(), () => {})),
  };
}
function pe(e) {
  let n = (0, we.c)(84),
    {
      actionItems: i,
      actionOverrides: a,
      allowExternalActions: o,
      allowRemoteImages: s,
      analyticsContext: l,
      beacon: f,
      eventAccountId: p,
      eventMetadata: m,
      fallback: h,
      getActionButtonClassName: _,
      getActionOverride: y,
      maxActions: b,
      onActionComplete: x,
      onComposerText: S,
      onDismiss: T,
      onSendPrompt: te,
      onStartVoice: D,
      primaryActionLabel: O,
      showDescriptions: k,
      useExternalBrowser: re,
      variant: A,
    } = e,
    j = o === void 0 || o,
    M = s === void 0 || s,
    se = h === void 0 ? null : h,
    N = k !== void 0 && k,
    P = re !== void 0 && re,
    F = t(c),
    I = g(ne),
    L = g(w),
    R;
  n[0] === i ? (R = n[1]) : ((R = i.some(ye)), (n[0] = i), (n[1] = R));
  let z = R,
    B;
  n[2] !== L.authenticatedAccountId || n[3] !== L.authenticatedUserId || n[4] !== L.userId || n[5] !== z
    ? ((B =
        z && L.authenticatedAccountId != null
          ? {
              accountId: L.authenticatedAccountId,
              userId: L.userId ?? null,
              requestUserId: L.authenticatedUserId ?? null,
            }
          : null),
      (n[2] = L.authenticatedAccountId),
      (n[3] = L.authenticatedUserId),
      (n[4] = L.userId),
      (n[5] = z),
      (n[6] = B))
    : (B = n[6]);
  let de = B,
    V = v(E, de?.accountId ?? null),
    pe = v(C, de),
    H;
  n[7] !== pe || n[8] !== V
    ? ((H = (e) =>
        e.action_v2.action_enum === `request_workspace_credits` && (V == null || (V && pe.disabled))),
      (n[7] = pe),
      (n[8] = V),
      (n[9] = H))
    : (H = n[9]);
  let U = H,
    W = v(i.some(ve) ? oe : null, m),
    G = d(),
    K;
  n[10] !== f || n[11] !== G.key
    ? ((K = fe(f, G.key)), (n[10] = f), (n[11] = G.key), (n[12] = K))
    : (K = n[12]);
  let J = K,
    Ee,
    De;
  (n[13] === J
    ? ((Ee = n[14]), (De = n[15]))
    : ((Ee = () => (
        J.activate(),
        () => {
          J.invalidate();
        }
      )),
      (De = [J]),
      (n[13] = J),
      (n[14] = Ee),
      (n[15] = De)),
    (0, Te.useEffect)(Ee, De));
  let Y = u(),
    Oe = r(`/`),
    ke =
      !L.accountLoading &&
      !L.authLoading &&
      L.authMethod === `chatgpt` &&
      L.supportedSurface === !0 &&
      L.accountId != null &&
      L.accountId === L.authenticatedAccountId
        ? L.accountId
        : null,
    [X, Ae] = (0, Te.useState)(null),
    Z,
    Q,
    $;
  if (
    n[16] !== i ||
    n[17] !== a ||
    n[18] !== j ||
    n[19] !== M ||
    n[20] !== l ||
    n[21] !== f ||
    n[22] !== p ||
    n[23] !== m ||
    n[24] !== se ||
    n[25] !== L ||
    n[26] !== _ ||
    n[27] !== y ||
    n[28] !== U ||
    n[29] !== G.hash ||
    n[30] !== G.key ||
    n[31] !== G.pathname ||
    n[32] !== G.search ||
    n[33] !== b ||
    n[34] !== Y ||
    n[35] !== x ||
    n[36] !== S ||
    n[37] !== T ||
    n[38] !== te ||
    n[39] !== D ||
    n[40] !== X ||
    n[41] !== W ||
    n[42] !== J ||
    n[43] !== O ||
    n[44] !== Oe ||
    n[45] !== F ||
    n[46] !== N ||
    n[47] !== ke ||
    n[48] !== I ||
    n[49] !== P ||
    n[50] !== A
  ) {
    $ = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      n[54] !== f || n[55] !== G.key || n[56] !== J
        ? ((e = () => J.isCurrent(f, G.key)), (n[54] = f), (n[55] = G.key), (n[56] = J), (n[57] = e))
        : (e = n[57]);
      let t;
      n[58] === Y
        ? (t = n[59])
        : ((t = (e, t, n) => {
            Y(e, { state: t, replace: n });
          }),
          (n[58] = Y),
          (n[59] = t));
      let r;
      n[60] !== T || n[61] !== J
        ? ((r = () => {
            (J.invalidate(), T());
          }),
          (n[60] = T),
          (n[61] = J),
          (n[62] = r))
        : (r = n[62]);
      let o = {
          scope: F,
          beacon: f,
          appBaseUrl: new URL(Oe, window.location.origin),
          actionOverrides: a,
          allowExternalActions: j,
          analyticsContext: l,
          currentPath: `${G.pathname}${G.search}${G.hash}`,
          isCurrentPresentation: e,
          onPresentationInvalidated: J.onInvalidate,
          eventMetadata: m,
          featureAccessInputs: L,
          presencePromptId: W,
          eventAccountId: p,
          getActionOverride: y,
          navigate: t,
          onActionComplete: x,
          onComposerText: S,
          onDismiss: r,
          onSendPrompt: te,
          onStartVoice: D,
          upsellHoldoutLayer: I,
          upgradeAccountId: ke,
          useExternalBrowser: P,
        },
        s = b == null ? i : i.slice(0, b),
        c = A === `inline` || A === `takeover` || A === `takeoverHero` ? void 0 : s.find(_e),
        u = c == null ? void 0 : le(c, o),
        d = c == null || u == null ? void 0 : { action: c, handler: u },
        h = A === `inline` || A === `takeover` || A === `takeoverHero` || d != null ? void 0 : s.find(ge),
        g =
          h?.action_v2.action_enum === `dropdown`
            ? h.action_v2.items.flatMap((e) => {
                let t = e;
                if (!ae(t)) return [];
                let n = le(t, o);
                return n == null ? [] : [{ action: t, handler: n }];
              })
            : [],
        v =
          d != null || (h != null && (A === `banner` || g.length > 0))
            ? []
            : s.flatMap((e) => {
                if (!ae(e)) return [];
                let t = le(e, o);
                return t == null ? [] : [{ action: e, handler: t }];
              }),
        C;
      n[63] !== l ||
      n[64] !== f ||
      n[65] !== p ||
      n[66] !== m ||
      n[67] !== U ||
      n[68] !== x ||
      n[69] !== X ||
      n[70] !== F
        ? ((C = async (e, t, n) => {
            let { action: r, handler: i } = e;
            if (X != null || U(r)) return !1;
            Ae(r.id);
            let a = Ce(r),
              o = ie(r, f) || r.action_v2.action_enum === `create_presence_session`;
            !a && !o && Se(F, f, r, l);
            let s = (r.type === `copy` || ce(r)) && !o;
            s && ee({ beacon: f, eventType: `click`, eventCtaId: r.id, metadata: m, accountId: p });
            let c = await i(t)
              .catch(he)
              .finally(() => Ae(null));
            return (typeof c == `boolean` ? c : c.didComplete)
              ? (a &&
                  (r.action_v2.action_enum !== `invite_domain_members` ||
                    typeof c == `boolean` ||
                    c.shouldResolve) &&
                  Se(F, f, r, l),
                !s &&
                  !o &&
                  ee(
                    typeof c == `boolean`
                      ? { beacon: f, eventType: `click`, eventCtaId: r.id, metadata: m, accountId: p }
                      : {
                          beacon: f,
                          eventType: `click`,
                          eventCtaId: r.id,
                          metadata: m,
                          accountId: c.eventAccountId ?? p,
                        },
                  ),
                (typeof c != `boolean` && !c.shouldResolve) || (n === `dropdown` ? x?.(r, n) : x?.(r)),
                !0)
              : !1;
          }),
          (n[63] = l),
          (n[64] = f),
          (n[65] = p),
          (n[66] = m),
          (n[67] = U),
          (n[68] = x),
          (n[69] = X),
          (n[70] = F),
          (n[71] = C))
        : (C = n[71]);
      let w = C;
      if (d != null && A !== `inline`) {
        $ = (0, q.jsx)(ue, {
          action: d.action,
          disabled: X != null,
          variant: A === `banner` ? `banner` : `modal`,
          onCopy: (e) => w(d, e),
        });
        break bb0;
      }
      if (v.length === 0 && g.length === 0) {
        $ = se;
        break bb0;
      }
      let E = A === `banner` ? v.toSorted(me) : v;
      Z =
        h == null || g.length === 0
          ? null
          : (0, q.jsx)(xe, {
              className: _?.(h),
              action: h,
              disabled: X != null,
              entries: g,
              isActionDisabled: U,
              variant: A,
              onOpen: () => Se(F, f, h, l),
              onRunAction: (e) => void w(e, void 0, `dropdown`),
            });
      let k;
      (n[72] !== M ||
      n[73] !== _ ||
      n[74] !== U ||
      n[75] !== X ||
      n[76] !== O ||
      n[77] !== w ||
      n[78] !== N ||
      n[79] !== A
        ? ((k = (e) =>
            (0, q.jsx)(
              be,
              {
                className: _?.(e.action),
                action: e.action,
                allowRemoteImages: M,
                disabled: X != null || U(e.action),
                loading: X === e.action.id,
                primaryActionLabel: O,
                showDescription: N,
                variant: A,
                onClick: (t) => void w(e, t),
              },
              e.action.id,
            )),
          (n[72] = M),
          (n[73] = _),
          (n[74] = U),
          (n[75] = X),
          (n[76] = O),
          (n[77] = w),
          (n[78] = N),
          (n[79] = A),
          (n[80] = k))
        : (k = n[80]),
        (Q = E.map(k)));
    }
    ((n[16] = i),
      (n[17] = a),
      (n[18] = j),
      (n[19] = M),
      (n[20] = l),
      (n[21] = f),
      (n[22] = p),
      (n[23] = m),
      (n[24] = se),
      (n[25] = L),
      (n[26] = _),
      (n[27] = y),
      (n[28] = U),
      (n[29] = G.hash),
      (n[30] = G.key),
      (n[31] = G.pathname),
      (n[32] = G.search),
      (n[33] = b),
      (n[34] = Y),
      (n[35] = x),
      (n[36] = S),
      (n[37] = T),
      (n[38] = te),
      (n[39] = D),
      (n[40] = X),
      (n[41] = W),
      (n[42] = J),
      (n[43] = O),
      (n[44] = Oe),
      (n[45] = F),
      (n[46] = N),
      (n[47] = ke),
      (n[48] = I),
      (n[49] = P),
      (n[50] = A),
      (n[51] = Z),
      (n[52] = Q),
      (n[53] = $));
  } else ((Z = n[51]), (Q = n[52]), ($ = n[53]));
  if ($ !== Symbol.for(`react.early_return_sentinel`)) return $;
  let je;
  return (
    n[81] !== Z || n[82] !== Q
      ? ((je = (0, q.jsxs)(q.Fragment, { children: [Z, Q] })), (n[81] = Z), (n[82] = Q), (n[83] = je))
      : (je = n[83]),
    je
  );
}
function me(e, t) {
  return (
    Number(e.action.type == null || e.action.type === `primary`) -
    Number(t.action.type == null || t.action.type === `primary`)
  );
}
function he() {
  return !1;
}
function ge(e) {
  return e.action_v2.action_enum === `dropdown` && ae(e);
}
function _e(e) {
  return e.type === `copy` && e.action_v2.action_enum === `copy_to_clipboard` && ae(e);
}
function ve(e) {
  return e.action_v2.action_enum === `create_presence_session`;
}
function ye(e) {
  return e.action_v2.action_enum === `request_workspace_credits`;
}
function be(e) {
  let t = (0, we.c)(27),
    {
      className: n,
      action: r,
      allowRemoteImages: i,
      disabled: a,
      loading: o,
      primaryActionLabel: s,
      showDescription: c,
      variant: l,
      onClick: u,
    } = e,
    d;
  t[0] === r ? (d = t[1]) : ((d = H(r)), (t[0] = r), (t[1] = d));
  let f = d;
  if (r.type === `primary` && s != null) f = s;
  else if (l === `workNux` && r.type === `primary`) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, q.jsx)(x, {
          id: `chatgpt.tpp.nux_modal.try_it.button.label`,
          defaultMessage: `Try it`,
          description: `Primary button in the ChatGPT Work introduction modal. Opens Work so the user can try a task.`,
        })),
        (t[2] = e))
      : (e = t[2]),
      (f = e));
  }
  if (f == null) return null;
  let p;
  t[3] !== r || t[4] !== i ? ((p = U(r, i)), (t[3] = r), (t[4] = i), (t[5] = p)) : (p = t[5]);
  let m = p,
    h;
  t[6] === r ? (h = t[7]) : ((h = W(r)), (t[6] = r), (t[7] = h));
  let g = l === `banner` ? h : void 0,
    _;
  t[8] !== r || t[9] !== l ? ((_ = G(r, l)), (t[8] = r), (t[9] = l), (t[10] = _)) : (_ = t[10]);
  let v;
  t[11] === l ? (v = t[12]) : ((v = K(l)), (t[11] = l), (t[12] = v));
  let y;
  t[13] !== r.description || t[14] !== f || t[15] !== c
    ? ((y =
        c && r.description != null
          ? (0, q.jsxs)(`span`, {
              className: `flex min-w-0 flex-col items-start text-start`,
              children: [
                (0, q.jsx)(`span`, { children: f }),
                (0, q.jsx)(`span`, { className: `text-xs text-secondary`, children: r.description }),
              ],
            })
          : f),
      (t[13] = r.description),
      (t[14] = f),
      (t[15] = c),
      (t[16] = y))
    : (y = t[16]);
  let b;
  return (
    t[17] !== n ||
    t[18] !== a ||
    t[19] !== m ||
    t[20] !== o ||
    t[21] !== u ||
    t[22] !== g ||
    t[23] !== _ ||
    t[24] !== v ||
    t[25] !== y
      ? ((b = (0, q.jsxs)(j, {
          className: n,
          appearance: g,
          color: _,
          disabled: a,
          loading: o,
          size: v,
          onClick: u,
          children: [m, y],
        })),
        (t[17] = n),
        (t[18] = a),
        (t[19] = m),
        (t[20] = o),
        (t[21] = u),
        (t[22] = g),
        (t[23] = _),
        (t[24] = v),
        (t[25] = y),
        (t[26] = b))
      : (b = t[26]),
    b
  );
}
function xe(e) {
  let t = (0, we.c)(36),
    {
      className: n,
      action: r,
      disabled: i,
      entries: a,
      isActionDisabled: o,
      variant: s,
      onOpen: c,
      onRunAction: l,
    } = e;
  if (r.action_v2.action_enum !== `dropdown`) return null;
  let u;
  t[0] === r ? (u = t[1]) : ((u = H(r)), (t[0] = r), (t[1] = u));
  let d = u;
  if (d == null) return null;
  let f;
  t[2] === r ? (f = t[3]) : ((f = W(r)), (t[2] = r), (t[3] = f));
  let p = f,
    m;
  t[4] === c
    ? (m = t[5])
    : ((m = (e) => {
        e && c();
      }),
      (t[4] = c),
      (t[5] = m));
  let h = s === `banner` ? p : void 0,
    g = r.type === `primary` ? `primary` : `secondary`,
    v;
  t[6] === s ? (v = t[7]) : ((v = K(s)), (t[6] = s), (t[7] = v));
  let x;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = (0, q.jsx)(_, {})), (t[8] = x)) : (x = t[8]);
  let S;
  t[9] !== n || t[10] !== i || t[11] !== d || t[12] !== h || t[13] !== g || t[14] !== v
    ? ((S = (0, q.jsxs)(j, {
        className: n,
        appearance: h,
        color: g,
        disabled: i,
        size: v,
        children: [d, x],
      })),
      (t[9] = n),
      (t[10] = i),
      (t[11] = d),
      (t[12] = h),
      (t[13] = g),
      (t[14] = v),
      (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] === r.action_v2.header_text
    ? (C = t[17])
    : ((C =
        r.action_v2.header_text == null ? null : (0, q.jsx)(y.Title, { children: r.action_v2.header_text })),
      (t[16] = r.action_v2.header_text),
      (t[17] = C));
  let w;
  if (t[18] !== i || t[19] !== a || t[20] !== o || t[21] !== l) {
    let e;
    (t[23] !== i || t[24] !== o || t[25] !== l
      ? ((e = (e) =>
          (0, q.jsx)(
            y.Item,
            {
              disabled: i || o(e.action),
              subTextAllowWrap: !0,
              SubText:
                e.action.description == null
                  ? void 0
                  : (0, q.jsx)(`span`, { children: e.action.description }),
              onSelect: () => l(e),
              children: H(e.action),
            },
            e.action.id,
          )),
        (t[23] = i),
        (t[24] = o),
        (t[25] = l),
        (t[26] = e))
      : (e = t[26]),
      (w = a.map(e)),
      (t[18] = i),
      (t[19] = a),
      (t[20] = o),
      (t[21] = l),
      (t[22] = w));
  } else w = t[22];
  let T;
  t[27] === r.action_v2.footer_text
    ? (T = t[28])
    : ((T =
        r.action_v2.footer_text == null
          ? null
          : (0, q.jsx)(y.Message, { children: r.action_v2.footer_text })),
      (t[27] = r.action_v2.footer_text),
      (t[28] = T));
  let E;
  return (
    t[29] !== i || t[30] !== w || t[31] !== T || t[32] !== m || t[33] !== S || t[34] !== C
      ? ((E = (0, q.jsxs)(b, {
          align: `end`,
          disabled: i,
          onOpenChange: m,
          surface: `chatgpt`,
          triggerButton: S,
          children: [C, w, T],
        })),
        (t[29] = i),
        (t[30] = w),
        (t[31] = T),
        (t[32] = m),
        (t[33] = S),
        (t[34] = C),
        (t[35] = E))
      : (E = t[35]),
    E
  );
}
function H(e) {
  return M(e);
}
function Se(e, t, n, r) {
  r != null &&
    te(e, {
      action: `click`,
      actionId: n.id,
      actionType: n.type,
      beacon: t,
      destinationAction: n.action_v2.action_enum,
      ...r,
    });
}
function Ce(e) {
  return (
    e.action_v2.action_enum === `open_work_tab_and_send_prompt` ||
    e.action_v2.action_enum === `age_verification` ||
    e.action_v2.action_enum === `invite_domain_members` ||
    e.action_v2.action_enum === `request_account_team_contact` ||
    e.action_v2.action_enum === `request_workspace_credits` ||
    e.action_v2.action_enum === `request_premium_seat` ||
    e.action_v2.action_enum === `request_workspace_upgrade_seat` ||
    (e.action_v2.action_enum === `get_team` && e.action_v2.checkout_mode === `direct`) ||
    e.action_v2.action_enum === `update_user_personalization_setting`
  );
}
function U(e, t) {
  return t && e.icon_url != null && F(e.icon_url)
    ? (0, q.jsx)(`img`, { alt: ``, className: `size-4`, src: e.icon_url })
    : null;
}
function W(e) {
  return e.appearance === `accent`
    ? `accent`
    : e.type == null || e.type === `primary`
      ? `primary`
      : `secondary`;
}
function G(e, t) {
  return t === `takeover` || t === `takeoverHero`
    ? `secondary`
    : e.type == null || e.type === `primary`
      ? t === `tasksNux`
        ? `chatgptPrimary`
        : `primary`
      : t === `inline`
        ? `ghost`
        : `outlineGhost`;
}
function K(e) {
  return e === `takeover` || e === `takeoverHero`
    ? e === `takeoverHero`
      ? `takeoverHeroAction`
      : `large`
    : e === `workNux` || e === `tasksNux`
      ? `workNux`
      : e === `expressiveModal`
        ? `expressiveBeaconAction`
        : e === `modal`
          ? `beaconAction`
          : e === `banner`
            ? `dialog`
            : e === `inline`
              ? `composerSm`
              : `beaconCarousel`;
}
var we, Te, q;
function J() {
  return (J = e(() => {
    ((we = s()),
      p(),
      (Te = i()),
      f(),
      o(),
      O(),
      D(),
      k(),
      N(),
      h(),
      l(),
      T(),
      n(),
      re(),
      P(),
      V(),
      se(),
      A(),
      I(),
      L(),
      (q = a()));
  }))();
}
export { J as n, pe as t };
//# sourceMappingURL=actions-d1a006959109.js.map
