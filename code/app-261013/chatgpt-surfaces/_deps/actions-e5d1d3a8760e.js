import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AO as t,
  CO as n,
  Cot as r,
  Cxt as i,
  Ext as a,
  FV as o,
  IDt as s,
  Ixt as c,
  KE as l,
  Pxt as u,
  TJ as d,
  TO as f,
  Vxt as p,
  _xt as m,
  jDt as h,
  qE as g,
  vzt as _,
  wot as v,
  wxt as y,
  xMt as b,
  yzt as x,
  zxt as S,
} from "./app-shared-bbfeca5e5737.js";
import { QMr as C, TQt as w, lQt as T, tNr as E, uQt as ee, wQt as D } from "./app-initial-5851df3f6cb1.js";
import {
  A_ as O,
  Cv as te,
  Dv as k,
  Iv as A,
  Nv as j,
  Ov as ne,
  Sv as M,
  av as re,
  bv as N,
  cv as P,
  j_ as F,
  lv as I,
  nv as ie,
  ov as L,
  rv as ae,
  xv as oe,
} from "./app-primary-fe8a450b3b04.js";
function se(e) {
  let t = (0, R.c)(25),
    { action: n, disabled: r, variant: i, onCopy: a } = e,
    [o, c] = (0, z.useState)(!1),
    u,
    d;
  if (
    (t[0] === o
      ? ((u = t[1]), (d = t[2]))
      : ((u = () => {
          if (!o) return;
          let e = window.setTimeout(() => {
            c(!1);
          }, V);
          return () => {
            window.clearTimeout(e);
          };
        }),
        (d = [o]),
        (t[0] = o),
        (t[1] = u),
        (t[2] = d)),
    (0, z.useEffect)(u, d),
    n.action_v2.action_enum !== `copy_to_clipboard`)
  )
    return null;
  let f;
  t[3] === a
    ? (f = t[4])
    : ((f = (e) => {
        a(e).then((e) => {
          e && c(!0);
        });
      }),
      (t[3] = a),
      (t[4] = f));
  let p = f,
    m = i === `modal` ? `dialogAction` : `composerSmLabel`,
    h = i === `banner` ? l.actions : `flex max-w-full min-w-0 items-center justify-center gap-1`,
    g = i === `banner` ? `secondary` : void 0,
    _;
  t[5] === n.action_v2.copy_text
    ? (_ = t[6])
    : ((_ = (0, B.jsx)(`code`, { className: `truncate font-normal`, children: n.action_v2.copy_text })),
      (t[5] = n.action_v2.copy_text),
      (t[6] = _));
  let v;
  t[7] !== r || t[8] !== p || t[9] !== m || t[10] !== g || t[11] !== _
    ? ((v = (0, B.jsx)(O, {
        appearance: g,
        allowShrink: !0,
        className: `min-w-0`,
        color: `outlineGhost`,
        disabled: r,
        size: m,
        onClick: p,
        children: _,
      })),
      (t[7] = r),
      (t[8] = p),
      (t[9] = m),
      (t[10] = g),
      (t[11] = _),
      (t[12] = v))
    : (v = t[12]);
  let y = i === `banner` ? `primary` : void 0,
    b;
  t[13] === o
    ? (b = t[14])
    : ((b = o
        ? (0, B.jsx)(s, {
            id: `beacons.copyAction.copied`,
            defaultMessage: `Copied`,
            description: `Short confirmation on the Beacon copy button after the displayed snippet was successfully copied to the clipboard`,
          })
        : (0, B.jsx)(s, {
            id: `beacons.copyAction.copy`,
            defaultMessage: `Copy`,
            description: `Short button label that copies the adjacent code or text snippet shown in a ChatGPT Beacon banner or modal`,
          })),
      (t[13] = o),
      (t[14] = b));
  let x;
  t[15] !== r || t[16] !== p || t[17] !== m || t[18] !== y || t[19] !== b
    ? ((x = (0, B.jsx)(O, { appearance: y, disabled: r, size: m, onClick: p, children: b })),
      (t[15] = r),
      (t[16] = p),
      (t[17] = m),
      (t[18] = y),
      (t[19] = b),
      (t[20] = x))
    : (x = t[20]);
  let S;
  return (
    t[21] !== x || t[22] !== h || t[23] !== v
      ? ((S = (0, B.jsxs)(`div`, { className: h, children: [v, x] })),
        (t[21] = x),
        (t[22] = h),
        (t[23] = v),
        (t[24] = S))
      : (S = t[24]),
    S
  );
}
var R, z, B, V;
function H() {
  return (H = e(() => {
    ((R = _()), (z = x()), h(), F(), g(), (B = b()), (V = 5e3));
  }))();
}
function ce(e, t) {
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
function U(e) {
  let t = (0, ve.c)(71),
    {
      actionItems: n,
      actionOverrides: o,
      allowExternalActions: s,
      allowRemoteImages: l,
      analyticsContext: u,
      beacon: d,
      eventAccountId: f,
      eventMetadata: m,
      fallback: h,
      getActionButtonClassName: g,
      getActionOverride: _,
      maxActions: v,
      onActionComplete: b,
      onComposerText: x,
      onDismiss: w,
      onSendPrompt: T,
      onStartVoice: E,
      primaryActionLabel: D,
      showDescriptions: O,
      useExternalBrowser: k,
      variant: A,
    } = e,
    j = s === void 0 || s,
    M = l === void 0 || l,
    re = h === void 0 ? null : h,
    N = O !== void 0 && O,
    F = k !== void 0 && k,
    I = c(r),
    ae = p(P),
    R = p(C),
    z = S(n.some(pe) ? oe : null, m),
    B = y(),
    V;
  t[0] !== d || t[1] !== B.key ? ((V = ce(d, B.key)), (t[0] = d), (t[1] = B.key), (t[2] = V)) : (V = t[2]);
  let H = V,
    U,
    W;
  (t[3] === H
    ? ((U = t[4]), (W = t[5]))
    : ((U = () => (
        H.activate(),
        () => {
          H.invalidate();
        }
      )),
      (W = [H]),
      (t[3] = H),
      (t[4] = U),
      (t[5] = W)),
    (0, ye.useEffect)(U, W));
  let G = a(),
    K = i(`/`),
    q =
      !R.accountLoading &&
      !R.authLoading &&
      R.authMethod === `chatgpt` &&
      R.supportedSurface === !0 &&
      R.accountId != null &&
      R.accountId === R.authenticatedAccountId
        ? R.accountId
        : null,
    [J, X] = (0, ye.useState)(null),
    Z,
    Q,
    $;
  if (
    t[6] !== n ||
    t[7] !== o ||
    t[8] !== j ||
    t[9] !== M ||
    t[10] !== u ||
    t[11] !== d ||
    t[12] !== f ||
    t[13] !== m ||
    t[14] !== re ||
    t[15] !== R ||
    t[16] !== g ||
    t[17] !== _ ||
    t[18] !== B.hash ||
    t[19] !== B.key ||
    t[20] !== B.pathname ||
    t[21] !== B.search ||
    t[22] !== v ||
    t[23] !== G ||
    t[24] !== b ||
    t[25] !== x ||
    t[26] !== w ||
    t[27] !== T ||
    t[28] !== E ||
    t[29] !== J ||
    t[30] !== z ||
    t[31] !== H ||
    t[32] !== D ||
    t[33] !== K ||
    t[34] !== I ||
    t[35] !== N ||
    t[36] !== q ||
    t[37] !== ae ||
    t[38] !== F ||
    t[39] !== A
  ) {
    Q = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[43] !== d || t[44] !== B.key || t[45] !== H
        ? ((e = () => H.isCurrent(d, B.key)), (t[43] = d), (t[44] = B.key), (t[45] = H), (t[46] = e))
        : (e = t[46]);
      let r;
      t[47] === G
        ? (r = t[48])
        : ((r = (e, t, n) => {
            G(e, { state: t, replace: n });
          }),
          (t[47] = G),
          (t[48] = r));
      let i;
      t[49] !== w || t[50] !== H
        ? ((i = () => {
            (H.invalidate(), w());
          }),
          (t[49] = w),
          (t[50] = H),
          (t[51] = i))
        : (i = t[51]);
      let a = {
          scope: I,
          beacon: d,
          appBaseUrl: new URL(K, window.location.origin),
          actionOverrides: o,
          allowExternalActions: j,
          analyticsContext: u,
          currentPath: `${B.pathname}${B.search}${B.hash}`,
          isCurrentPresentation: e,
          onPresentationInvalidated: H.onInvalidate,
          eventMetadata: m,
          featureAccessInputs: R,
          presencePromptId: z,
          eventAccountId: f,
          getActionOverride: _,
          navigate: r,
          onActionComplete: b,
          onComposerText: x,
          onDismiss: i,
          onSendPrompt: T,
          onStartVoice: E,
          upsellHoldoutLayer: ae,
          upgradeAccountId: q,
          useExternalBrowser: F,
        },
        s = v == null ? n : n.slice(0, v),
        c = A === `inline` || A === `takeover` || A === `takeoverHero` ? void 0 : s.find(fe),
        l = c == null ? void 0 : ie(c, a),
        p = c == null || l == null ? void 0 : { action: c, handler: l },
        h = A === `inline` || A === `takeover` || A === `takeoverHero` || p != null ? void 0 : s.find(de),
        y =
          h?.action_v2.action_enum === `dropdown`
            ? h.action_v2.items.flatMap((e) => {
                let t = e;
                if (!L(t)) return [];
                let n = ie(t, a);
                return n == null ? [] : [{ action: t, handler: n }];
              })
            : [],
        S =
          p != null || (h != null && (A === `banner` || y.length > 0))
            ? []
            : s.flatMap((e) => {
                if (!L(e)) return [];
                let t = ie(e, a);
                return t == null ? [] : [{ action: e, handler: t }];
              }),
        C;
      t[52] !== u || t[53] !== d || t[54] !== f || t[55] !== m || t[56] !== b || t[57] !== J || t[58] !== I
        ? ((C = async (e, t, n) => {
            let { action: r, handler: i } = e;
            if (J != null) return !1;
            X(r.id);
            let a = _e(r),
              o = te(r, d) || r.action_v2.action_enum === `create_presence_session`;
            !a && !o && ge(I, d, r, u);
            let s = (r.type === `copy` || ne(r)) && !o;
            s && ee({ beacon: d, eventType: `click`, eventCtaId: r.id, metadata: m, accountId: f });
            let c = await i(t)
              .catch(ue)
              .finally(() => X(null));
            return (typeof c == `boolean` ? c : c.didComplete)
              ? (a && ge(I, d, r, u),
                !s &&
                  !o &&
                  ee(
                    typeof c == `boolean`
                      ? { beacon: d, eventType: `click`, eventCtaId: r.id, metadata: m, accountId: f }
                      : {
                          beacon: d,
                          eventType: `click`,
                          eventCtaId: r.id,
                          metadata: m,
                          accountId: c.eventAccountId ?? f,
                        },
                  ),
                (typeof c != `boolean` && !c.shouldResolve) || (n === `dropdown` ? b?.(r, n) : b?.(r)),
                !0)
              : !1;
          }),
          (t[52] = u),
          (t[53] = d),
          (t[54] = f),
          (t[55] = m),
          (t[56] = b),
          (t[57] = J),
          (t[58] = I),
          (t[59] = C))
        : (C = t[59]);
      let O = C;
      if (p != null && A !== `inline`) {
        Q = (0, Y.jsx)(se, {
          action: p.action,
          disabled: J != null,
          variant: A === `banner` ? `banner` : `modal`,
          onCopy: (e) => O(p, e),
        });
        break bb0;
      }
      if (S.length === 0 && y.length === 0) {
        Q = re;
        break bb0;
      }
      let k = A === `banner` ? S.toSorted(le) : S;
      $ =
        h == null || y.length === 0
          ? null
          : (0, Y.jsx)(he, {
              className: g?.(h),
              action: h,
              disabled: J != null,
              entries: y,
              variant: A,
              onOpen: () => ge(I, d, h, u),
              onRunAction: (e) => void O(e, void 0, `dropdown`),
            });
      let P;
      (t[60] !== M || t[61] !== g || t[62] !== J || t[63] !== D || t[64] !== O || t[65] !== N || t[66] !== A
        ? ((P = (e) =>
            (0, Y.jsx)(
              me,
              {
                className: g?.(e.action),
                action: e.action,
                allowRemoteImages: M,
                disabled: J != null,
                loading: J === e.action.id,
                primaryActionLabel: D,
                showDescription: N,
                variant: A,
                onClick: (t) => void O(e, t),
              },
              e.action.id,
            )),
          (t[60] = M),
          (t[61] = g),
          (t[62] = J),
          (t[63] = D),
          (t[64] = O),
          (t[65] = N),
          (t[66] = A),
          (t[67] = P))
        : (P = t[67]),
        (Z = k.map(P)));
    }
    ((t[6] = n),
      (t[7] = o),
      (t[8] = j),
      (t[9] = M),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f),
      (t[13] = m),
      (t[14] = re),
      (t[15] = R),
      (t[16] = g),
      (t[17] = _),
      (t[18] = B.hash),
      (t[19] = B.key),
      (t[20] = B.pathname),
      (t[21] = B.search),
      (t[22] = v),
      (t[23] = G),
      (t[24] = b),
      (t[25] = x),
      (t[26] = w),
      (t[27] = T),
      (t[28] = E),
      (t[29] = J),
      (t[30] = z),
      (t[31] = H),
      (t[32] = D),
      (t[33] = K),
      (t[34] = I),
      (t[35] = N),
      (t[36] = q),
      (t[37] = ae),
      (t[38] = F),
      (t[39] = A),
      (t[40] = Z),
      (t[41] = Q),
      (t[42] = $));
  } else ((Z = t[40]), (Q = t[41]), ($ = t[42]));
  if (Q !== Symbol.for(`react.early_return_sentinel`)) return Q;
  let be;
  return (
    t[68] !== Z || t[69] !== $
      ? ((be = (0, Y.jsxs)(Y.Fragment, { children: [$, Z] })), (t[68] = Z), (t[69] = $), (t[70] = be))
      : (be = t[70]),
    be
  );
}
function le(e, t) {
  return (
    Number(e.action.type == null || e.action.type === `primary`) -
    Number(t.action.type == null || t.action.type === `primary`)
  );
}
function ue() {
  return !1;
}
function de(e) {
  return e.action_v2.action_enum === `dropdown` && L(e);
}
function fe(e) {
  return e.type === `copy` && e.action_v2.action_enum === `copy_to_clipboard` && L(e);
}
function pe(e) {
  return e.action_v2.action_enum === `create_presence_session`;
}
function me(e) {
  let t = (0, ve.c)(27),
    {
      className: n,
      action: r,
      allowRemoteImages: i,
      disabled: a,
      loading: o,
      primaryActionLabel: c,
      showDescription: l,
      variant: u,
      onClick: d,
    } = e,
    f;
  t[0] === r ? (f = t[1]) : ((f = W(r)), (t[0] = r), (t[1] = f));
  let p = f;
  if (r.type === `primary` && c != null) p = c;
  else if (u === `workNux` && r.type === `primary`) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(s, {
          id: `chatgpt.tpp.nux_modal.try_it.button.label`,
          defaultMessage: `Try it`,
          description: `Primary button in the ChatGPT Work introduction modal. Opens Work so the user can try a task.`,
        })),
        (t[2] = e))
      : (e = t[2]),
      (p = e));
  }
  if (p == null) return null;
  let m;
  t[3] !== r || t[4] !== i ? ((m = G(r, i)), (t[3] = r), (t[4] = i), (t[5] = m)) : (m = t[5]);
  let h = m,
    g;
  t[6] === r ? (g = t[7]) : ((g = K(r)), (t[6] = r), (t[7] = g));
  let _ = u === `banner` ? g : void 0,
    v;
  t[8] !== r || t[9] !== u ? ((v = q(r, u)), (t[8] = r), (t[9] = u), (t[10] = v)) : (v = t[10]);
  let y;
  t[11] === u ? (y = t[12]) : ((y = J(u)), (t[11] = u), (t[12] = y));
  let b;
  t[13] !== r.description || t[14] !== p || t[15] !== l
    ? ((b =
        l && r.description != null
          ? (0, Y.jsxs)(`span`, {
              className: `flex min-w-0 flex-col items-start text-start`,
              children: [
                (0, Y.jsx)(`span`, { children: p }),
                (0, Y.jsx)(`span`, { className: `text-xs text-secondary`, children: r.description }),
              ],
            })
          : p),
      (t[13] = r.description),
      (t[14] = p),
      (t[15] = l),
      (t[16] = b))
    : (b = t[16]);
  let x;
  return (
    t[17] !== n ||
    t[18] !== a ||
    t[19] !== h ||
    t[20] !== o ||
    t[21] !== d ||
    t[22] !== _ ||
    t[23] !== v ||
    t[24] !== y ||
    t[25] !== b
      ? ((x = (0, Y.jsxs)(O, {
          className: n,
          appearance: _,
          color: v,
          disabled: a,
          loading: o,
          size: y,
          onClick: d,
          children: [h, b],
        })),
        (t[17] = n),
        (t[18] = a),
        (t[19] = h),
        (t[20] = o),
        (t[21] = d),
        (t[22] = _),
        (t[23] = v),
        (t[24] = y),
        (t[25] = b),
        (t[26] = x))
      : (x = t[26]),
    x
  );
}
function he(e) {
  let t = (0, ve.c)(32),
    { className: r, action: i, disabled: a, entries: s, variant: c, onOpen: l, onRunAction: u } = e;
  if (i.action_v2.action_enum !== `dropdown`) return null;
  let d;
  t[0] === i ? (d = t[1]) : ((d = W(i)), (t[0] = i), (t[1] = d));
  let p = d;
  if (p == null) return null;
  let m;
  t[2] === i ? (m = t[3]) : ((m = K(i)), (t[2] = i), (t[3] = m));
  let h = m,
    g;
  t[4] === l
    ? (g = t[5])
    : ((g = (e) => {
        e && l();
      }),
      (t[4] = l),
      (t[5] = g));
  let _ = c === `banner` ? h : void 0,
    v = i.type === `primary` ? `primary` : `secondary`,
    y;
  t[6] === c ? (y = t[7]) : ((y = J(c)), (t[6] = c), (t[7] = y));
  let b;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = (0, Y.jsx)(o, {})), (t[8] = b)) : (b = t[8]);
  let x;
  t[9] !== r || t[10] !== a || t[11] !== p || t[12] !== _ || t[13] !== v || t[14] !== y
    ? ((x = (0, Y.jsxs)(O, {
        className: r,
        appearance: _,
        color: v,
        disabled: a,
        size: y,
        children: [p, b],
      })),
      (t[9] = r),
      (t[10] = a),
      (t[11] = p),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y),
      (t[15] = x))
    : (x = t[15]);
  let S;
  t[16] === i.action_v2.header_text
    ? (S = t[17])
    : ((S =
        i.action_v2.header_text == null ? null : (0, Y.jsx)(f.Title, { children: i.action_v2.header_text })),
      (t[16] = i.action_v2.header_text),
      (t[17] = S));
  let C;
  if (t[18] !== s || t[19] !== u) {
    let e;
    (t[21] === u
      ? (e = t[22])
      : ((e = (e) =>
          (0, Y.jsx)(
            f.Item,
            {
              subTextAllowWrap: !0,
              SubText:
                e.action.description == null
                  ? void 0
                  : (0, Y.jsx)(`span`, { children: e.action.description }),
              onSelect: () => u(e),
              children: W(e.action),
            },
            e.action.id,
          )),
        (t[21] = u),
        (t[22] = e)),
      (C = s.map(e)),
      (t[18] = s),
      (t[19] = u),
      (t[20] = C));
  } else C = t[20];
  let w;
  t[23] === i.action_v2.footer_text
    ? (w = t[24])
    : ((w =
        i.action_v2.footer_text == null
          ? null
          : (0, Y.jsx)(f.Message, { children: i.action_v2.footer_text })),
      (t[23] = i.action_v2.footer_text),
      (t[24] = w));
  let T;
  return (
    t[25] !== a || t[26] !== C || t[27] !== w || t[28] !== g || t[29] !== x || t[30] !== S
      ? ((T = (0, Y.jsxs)(n, {
          align: `end`,
          disabled: a,
          onOpenChange: g,
          surface: `chatgpt`,
          triggerButton: x,
          children: [S, C, w],
        })),
        (t[25] = a),
        (t[26] = C),
        (t[27] = w),
        (t[28] = g),
        (t[29] = x),
        (t[30] = S),
        (t[31] = T))
      : (T = t[31]),
    T
  );
}
function W(e) {
  return ae(e);
}
function ge(e, t, n, r) {
  r != null &&
    w(e, {
      action: `click`,
      actionId: n.id,
      actionType: n.type,
      beacon: t,
      destinationAction: n.action_v2.action_enum,
      ...r,
    });
}
function _e(e) {
  return (
    e.action_v2.action_enum === `open_work_tab_and_send_prompt` ||
    e.action_v2.action_enum === `age_verification` ||
    e.action_v2.action_enum === `request_account_team_contact` ||
    e.action_v2.action_enum === `request_workspace_credits` ||
    e.action_v2.action_enum === `request_premium_seat` ||
    e.action_v2.action_enum === `request_workspace_upgrade_seat` ||
    (e.action_v2.action_enum === `get_team` && e.action_v2.checkout_mode === `direct`) ||
    e.action_v2.action_enum === `update_user_personalization_setting`
  );
}
function G(e, t) {
  return t && e.icon_url != null && A(e.icon_url)
    ? (0, Y.jsx)(`img`, { alt: ``, className: `size-4`, src: e.icon_url })
    : null;
}
function K(e) {
  return e.appearance === `accent`
    ? `accent`
    : e.type == null || e.type === `primary`
      ? `primary`
      : `secondary`;
}
function q(e, t) {
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
function J(e) {
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
var ve, ye, Y;
function X() {
  return (X = e(() => {
    ((ve = _()),
      u(),
      (ye = x()),
      h(),
      m(),
      E(),
      T(),
      D(),
      F(),
      t(),
      d(),
      v(),
      re(),
      k(),
      H(),
      M(),
      N(),
      I(),
      j(),
      (Y = b()));
  }))();
}
export { X as n, U as t };
//# sourceMappingURL=actions-e5d1d3a8760e.js.map
