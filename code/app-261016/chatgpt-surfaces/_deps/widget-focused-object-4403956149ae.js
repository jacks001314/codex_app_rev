import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BA as t,
  Ept as n,
  FBt as r,
  HA as i,
  HFt as a,
  LNt as o,
  NSt as s,
  PBt as c,
  VRt as l,
  VSt as u,
  ZSt as d,
  kRt as f,
  nCt as p,
  sct as m,
  uRt as h,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A6t as g,
  ADn as _,
  FFn as v,
  IFn as y,
  K3t as b,
  MDn as x,
  PDn as S,
  PFn as C,
  QCn as w,
  XDn as T,
  Y3t as E,
  ZDn as D,
  twn as O,
} from "./app-initial-ad16eaadf81f.js";
import { n as k, t as A } from "./widget-focused-object-transfer-942a157a7ac8.js";
import { n as j, r as M, t as N } from "./chatgpt-ecosystem-widget-modal-7538ac98c49e.js";
function P(e, { id: t, payload: n, signal: r, releaseOwner: a, revealAndFocus: o = !0, ...s }) {
  if (
    (r.throwIfAborted(),
    s.result.mcpAppHostAdapter.assertActive?.(),
    s.result.widget.is_verified_first_party !== !0)
  )
    throw Error(`Focused objects require a first-party widget`);
  let c = V.parse(n);
  if (i()) {
    M(e, { ...s, payload: c, signal: r }, t);
    return;
  }
  o ? I(e, t) : e.get(S.tabById$, t)?.onClose?.(e, `right`);
  let l = () => I(e, t);
  (x(e, H, {
    id: t,
    title: c.title,
    revealAndFocus: o,
    onClose: () => {
      (r.removeEventListener(`abort`, l), a?.());
    },
    props: {
      ...s,
      pathname: e.value.pathname,
      result: {
        ...s.result,
        modalOwner: s.result.modalOwner ?? { result: s.result, signal: r },
        request: { ...s.result.request, mode: void 0, viewParams: c.params },
        title: c.title,
      },
    },
  }),
    r.addEventListener(`abort`, l, { once: !0 }),
    o && O(e));
}
function F(e, t, n) {
  let r = `ecosystem-focused:${t}`,
    i = e.get(S.tabById$, r);
  if (!k(i) || i.props.pendingSourceId !== t) return;
  if (
    n.widget.is_verified_first_party !== !0 ||
    !v(n.resourceIdentity.identity, i.props.result.resourceIdentity.identity) ||
    n.request.appUri !== i.props.result.request.appUri ||
    n.request.template !== i.props.result.request.template
  ) {
    I(e, r);
    return;
  }
  if (e.get(E, t) == null) return;
  try {
    n.mcpAppHostAdapter.assertActive?.();
  } catch {
    I(e, r);
    return;
  }
  let a = new AbortController(),
    o = e.watch(({ get: e }) => {
      let n = e(E, t);
      (n == null || n.content.mcpAppHostAdapter?.isTombstone === !0) && a.abort();
    });
  P(e, {
    ...i.props,
    pendingSourceId: void 0,
    id: r,
    result: n,
    signal: a.signal,
    payload: { title: i.title, params: i.props.result.request.viewParams },
    releaseOwner: () => {
      (o(), a.abort());
    },
    revealAndFocus: !1,
  });
}
function I(e, t) {
  if (i()) {
    N(e, t);
    return;
  }
  e.get(S.tabById$, t) != null && (S.closeTab(e, t), e.get(S.tabs$).length === 0 && w(e));
}
function L(e) {
  let t = (0, R.c)(34),
    r,
    i,
    a,
    o,
    s,
    c,
    l;
  if (t[0] !== e) {
    let {
      WidgetContent: n,
      WidgetDialog: u,
      result: d,
      pathname: f,
      pendingSourceId: p,
      onClose: m,
      renderSlots: h,
      ...g
    } = e;
    ((r = n),
      (l = d),
      (a = f),
      (o = p),
      (i = m),
      (c = h),
      (s = g),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l));
  } else ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]), (l = t[7]));
  let [d] = (0, z.useState)(n),
    f = p(y, l.resourceIdentity.context),
    m;
  t[8] !== f || t[9] !== l.resourceIdentity.identity
    ? ((m = v(f, l.resourceIdentity.identity)), (t[8] = f), (t[9] = l.resourceIdentity.identity), (t[10] = m))
    : (m = t[10]);
  let h = m,
    g = u(),
    _,
    b;
  (t[11] !== h || t[12] !== g.pathname || t[13] !== i || t[14] !== a
    ? ((_ = () => {
        (!h || g.pathname !== a) && i();
      }),
      (b = [h, g.pathname, a, i]),
      (t[11] = h),
      (t[12] = g.pathname),
      (t[13] = i),
      (t[14] = a),
      (t[15] = _),
      (t[16] = b))
    : ((_ = t[15]), (b = t[16])),
    (0, z.useEffect)(_, b));
  let x;
  if (
    t[17] !== r ||
    t[18] !== h ||
    t[19] !== d ||
    t[20] !== i ||
    t[21] !== o ||
    t[22] !== s ||
    t[23] !== c ||
    t[24] !== l
  ) {
    let e;
    (t[26] !== r || t[27] !== h || t[28] !== d || t[29] !== i || t[30] !== o || t[31] !== s || t[32] !== l
      ? ((e =
          !h || o != null
            ? null
            : (0, B.jsx)(r, {
                ...s,
                fullSurface: !0,
                hostDisplayModes: [`inline`],
                lifetime: `component`,
                mcpAppId: d,
                result: {
                  ...l,
                  mcpAppHostAdapter: { ...l.mcpAppHostAdapter, displayMode: `sidebar`, onRequestClose: i },
                },
              })),
        (t[26] = r),
        (t[27] = h),
        (t[28] = d),
        (t[29] = i),
        (t[30] = o),
        (t[31] = s),
        (t[32] = l),
        (t[33] = e))
      : (e = t[33]),
      (x = c({ headerRows: [], content: e })),
      (t[17] = r),
      (t[18] = h),
      (t[19] = d),
      (t[20] = i),
      (t[21] = o),
      (t[22] = s),
      (t[23] = c),
      (t[24] = l),
      (t[25] = x));
  } else x = t[25];
  return x;
}
var R, z, B, V, H;
function U() {
  return (U = e(() => {
    ((R = c()),
      t(),
      d(),
      m(),
      (z = r()),
      s(),
      a(),
      C(),
      _(),
      T(),
      b(),
      g(),
      j(),
      A(),
      (B = o()),
      (V = f({ title: l(), params: h() })),
      (H = D(`ecosystem-focused-object`, L, { isAvailable: () => !1, open: P, closeOnEscape: !0 })));
  }))();
}
U();
export {
  I as closeEcosystemWidgetFocusedObject,
  F as completeEcosystemWidgetFocusedObjectTransfer,
  P as openEcosystemWidgetFocusedObject,
};
//# sourceMappingURL=widget-focused-object-4403956149ae.js.map
