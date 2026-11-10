import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  EPt as t,
  JIt as n,
  Pxt as r,
  TLt as i,
  _xt as a,
  dft as o,
  pLt as s,
  rst as c,
  vzt as l,
  wxt as u,
  xMt as d,
  yzt as f,
  zxt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  Mwn as m,
  ULn as h,
  Vbn as g,
  WLn as _,
  WSt as v,
  Wbn as y,
  dMn as b,
  dwn as x,
  fMn as S,
  hwn as C,
  jwn as w,
  pSt as T,
  pwn as E,
  uMn as D,
  uSt as O,
} from "./app-initial-5851df3f6cb1.js";
import { n as k, t as A } from "./widget-focused-object-transfer-78a1edf05794.js";
import { n as j, r as M, t as N } from "./chatgpt-ecosystem-widget-modal-78b0f8d9ccae.js";
function P(e, { id: t, payload: n, signal: r, releaseOwner: i, revealAndFocus: a = !0, ...o }) {
  if (
    (r.throwIfAborted(),
    o.result.mcpAppHostAdapter.assertActive?.(),
    o.result.widget.is_verified_first_party !== !0)
  )
    throw Error(`Focused objects require a first-party widget`);
  let s = V.parse(n);
  if (_()) {
    M(e, { ...o, payload: s, signal: r }, t);
    return;
  }
  a ? I(e, t) : e.get(C.tabById$, t)?.onClose?.(e, `right`);
  let c = () => I(e, t);
  (E(e, H, {
    id: t,
    title: s.title,
    revealAndFocus: a,
    onClose: () => {
      (r.removeEventListener(`abort`, c), i?.());
    },
    props: {
      ...o,
      pathname: e.value.pathname,
      result: {
        ...o.result,
        modalOwner: o.result.modalOwner ?? { result: o.result, signal: r },
        request: { ...o.result.request, mode: void 0, viewParams: s.params },
        title: s.title,
      },
    },
  }),
    r.addEventListener(`abort`, c, { once: !0 }),
    a && y(e));
}
function F(e, t, n) {
  let r = `ecosystem-focused:${t}`,
    i = e.get(C.tabById$, r);
  if (!k(i) || i.props.pendingSourceId !== t) return;
  if (
    n.widget.is_verified_first_party !== !0 ||
    !b(n.resourceIdentity.identity, i.props.result.resourceIdentity.identity) ||
    n.request.appUri !== i.props.result.request.appUri ||
    n.request.template !== i.props.result.request.template
  ) {
    I(e, r);
    return;
  }
  if (e.get(T, t) == null) return;
  try {
    n.mcpAppHostAdapter.assertActive?.();
  } catch {
    I(e, r);
    return;
  }
  let a = new AbortController(),
    o = e.watch(({ get: e }) => {
      let n = e(T, t);
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
  if (_()) {
    N(e, t);
    return;
  }
  e.get(C.tabById$, t) != null && (C.closeTab(e, t), e.get(C.tabs$).length === 0 && g(e));
}
function L(e) {
  let t = (0, R.c)(34),
    n,
    r,
    i,
    a,
    s,
    c,
    l;
  if (t[0] !== e) {
    let {
      WidgetContent: o,
      WidgetDialog: u,
      result: d,
      pathname: f,
      pendingSourceId: p,
      onClose: m,
      renderSlots: h,
      ...g
    } = e;
    ((n = o),
      (l = d),
      (i = f),
      (a = p),
      (r = m),
      (c = h),
      (s = g),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l));
  } else ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (s = t[5]), (c = t[6]), (l = t[7]));
  let [d] = (0, z.useState)(o),
    f = p(S, l.resourceIdentity.context),
    m;
  t[8] !== f || t[9] !== l.resourceIdentity.identity
    ? ((m = b(f, l.resourceIdentity.identity)), (t[8] = f), (t[9] = l.resourceIdentity.identity), (t[10] = m))
    : (m = t[10]);
  let h = m,
    g = u(),
    _,
    v;
  (t[11] !== h || t[12] !== g.pathname || t[13] !== r || t[14] !== i
    ? ((_ = () => {
        (!h || g.pathname !== i) && r();
      }),
      (v = [h, g.pathname, i, r]),
      (t[11] = h),
      (t[12] = g.pathname),
      (t[13] = r),
      (t[14] = i),
      (t[15] = _),
      (t[16] = v))
    : ((_ = t[15]), (v = t[16])),
    (0, z.useEffect)(_, v));
  let y;
  if (
    t[17] !== n ||
    t[18] !== h ||
    t[19] !== d ||
    t[20] !== r ||
    t[21] !== a ||
    t[22] !== s ||
    t[23] !== c ||
    t[24] !== l
  ) {
    let e;
    (t[26] !== n || t[27] !== h || t[28] !== d || t[29] !== r || t[30] !== a || t[31] !== s || t[32] !== l
      ? ((e =
          !h || a != null
            ? null
            : (0, B.jsx)(n, {
                ...s,
                fullSurface: !0,
                hostDisplayModes: [`inline`],
                lifetime: `component`,
                mcpAppId: d,
                result: {
                  ...l,
                  mcpAppHostAdapter: { ...l.mcpAppHostAdapter, displayMode: `sidebar`, onRequestClose: r },
                },
              })),
        (t[26] = n),
        (t[27] = h),
        (t[28] = d),
        (t[29] = r),
        (t[30] = a),
        (t[31] = s),
        (t[32] = l),
        (t[33] = e))
      : (e = t[33]),
      (y = c({ headerRows: [], content: e })),
      (t[17] = n),
      (t[18] = h),
      (t[19] = d),
      (t[20] = r),
      (t[21] = a),
      (t[22] = s),
      (t[23] = c),
      (t[24] = l),
      (t[25] = y));
  } else y = t[25];
  return y;
}
var R, z, B, V, H;
function U() {
  return (U = e(() => {
    ((R = l()),
      h(),
      r(),
      c(),
      (z = f()),
      a(),
      t(),
      D(),
      x(),
      w(),
      O(),
      v(),
      j(),
      A(),
      (B = d()),
      (V = s({ title: i(), params: n() })),
      (H = m(`ecosystem-focused-object`, L, { isAvailable: () => !1, open: P, closeOnEscape: !0 })));
  }))();
}
U();
export {
  I as closeEcosystemWidgetFocusedObject,
  F as completeEcosystemWidgetFocusedObjectTransfer,
  P as openEcosystemWidgetFocusedObject,
};
//# sourceMappingURL=widget-focused-object-63f668fa1062.js.map
