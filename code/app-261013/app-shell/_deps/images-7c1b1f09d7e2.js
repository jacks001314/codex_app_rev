import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  DG as r,
  Fat as i,
  IDt as a,
  Ixt as o,
  NB as s,
  Pat as c,
  Pxt as l,
  TJ as u,
  VDt as d,
  VSt as f,
  Vxt as p,
  Xot as m,
  Yot as h,
  _Mt as g,
  bz as _,
  cCt as v,
  gMt as y,
  jDt as b,
  mCt as x,
  t3 as S,
  vzt as C,
  wot as w,
  xMt as T,
  xz as E,
  yMt as D,
  yzt as O,
  zSt as k,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bar as A,
  D6 as j,
  Dor as M,
  Ear as N,
  H3 as P,
  Jfn as F,
  Q3n as I,
  U3 as L,
  V3 as R,
  XMr as z,
  Zfn as B,
  apn as V,
  e6n as H,
  epn as U,
  ipn as ee,
  j6 as W,
  lpn as te,
  tNr as ne,
  upn as re,
  xsn as ie,
  ysn as ae,
} from "./app-initial-5851df3f6cb1.js";
import { b as oe, d as se, f as G, i as ce, r as le, t as ue, y as de } from "./url-4698e75f04db.js";
import { r as fe, t as pe } from "./page-metadata-2ff7f696ceb6.js";
import { c as me, i as he } from "./assets-4f7817c757db.js";
var K;
function q() {
  return (q = e(() => {
    (W(),
      x(),
      re(),
      F(),
      P(),
      (K = class {
        entries = [];
        snapshot = [];
        listeners = new Set();
        getSnapshot = () => this.snapshot;
        subscribe = (e) => (this.listeners.add(e), () => this.listeners.delete(e));
        plugin = new v({
          props: {
            nodeViews: {
              [R]: (e, t, n) => {
                let r = t.dom.ownerDocument.createElement(`span`);
                r.className = `inline-block max-w-full align-bottom`;
                let i = n(),
                  a = i == null ? null : t.state.doc.resolve(i),
                  o = a?.parent,
                  s = a != null && j(a) != null,
                  c = !s && o?.type === t.state.schema.nodes.paragraph && o.childCount === 1;
                (r.classList.toggle(`w-full`, c || s), r.classList.toggle(`my-0.75`, c));
                let l = {
                  container: r,
                  attrs: L.parse(e.attrs),
                  geometry: B(e.attrs.geometry),
                  layout: s ? `normal` : te(o?.attrs.pageLayout),
                  standalone: c,
                  inTableCell: s,
                };
                return (
                  this.entries.push(l),
                  {
                    dom: r,
                    ignoreMutation: () => !0,
                    destroy: () => {
                      this.entries = this.entries.filter((e) => e !== l);
                    },
                  }
                );
              },
            },
          },
          view: () => (
            this.publish(),
            {
              update: () => this.publish(),
              destroy: () => {
                ((this.entries = []), this.publish());
              },
            }
          ),
        });
        publish() {
          (this.entries.length === this.snapshot.length &&
            this.entries.every((e, t) => e === this.snapshot[t])) ||
            ((this.snapshot = [...this.entries]), this.listeners.forEach((e) => e()));
        }
      }));
  }))();
}
function ge(e) {
  let n = (0, J.c)(58),
    {
      entry: i,
      data: o,
      isError: c,
      isFetching: l,
      isVisible: u,
      unavailable: f,
      onRetry: p,
      onImageError: m,
    } = e,
    h = d(),
    { attrs: g, geometry: _, layout: v, standalone: b } = i,
    x = o?.blob,
    S = E(m),
    [C, w] = (0, Y.useState)(null),
    T;
  n[0] !== x || n[1] !== S
    ? ((T = (e) => {
        if (e == null || x == null) return;
        let t = new AbortController(),
          n = null;
        return (
          ue(x, t.signal).then(
            (r) => {
              if (t.signal.aborted) {
                URL.revokeObjectURL(r);
                return;
              }
              ((n = r), (e.src = r));
            },
            () => {
              t.signal.aborted || (w({ blob: x, size: null }), S());
            },
          ),
          () => {
            (t.abort(), e.removeAttribute(`src`), n != null && URL.revokeObjectURL(n));
          }
        );
      }),
      (n[0] = x),
      (n[1] = S),
      (n[2] = T))
    : (T = n[2]);
  let D = T,
    O = o != null && C?.blob === o.blob && C.size != null,
    k = c || (o != null && C?.blob === o.blob && C.size == null),
    A = g.src == null,
    j = !A && !f && !O && (!k || l),
    M = null;
  if (j) {
    let e = u ? `status` : void 0,
      t;
    n[3] === u
      ? (t = n[4])
      : ((t = u ? (0, X.jsx)(I, { as: `span`, size: `fill` }) : null), (n[3] = u), (n[4] = t));
    let r;
    n[5] === u
      ? (r = n[6])
      : ((r = u
          ? null
          : (0, X.jsx)(`span`, { className: `block size-full bg-secondary-soft-alpha`, "aria-hidden": !0 })),
        (n[5] = u),
        (n[6] = r));
    let i;
    n[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, X.jsx)(`span`, {
          className: `sr-only`,
          children: (0, X.jsx)(a, {
            id: `codex.page.preview.imageLoading`,
            defaultMessage: `Loading image…`,
            description: `Accessible status while an image in a Page hover preview downloads or decodes`,
          }),
        })),
        (n[7] = i))
      : (i = n[7]);
    let o;
    (n[8] !== e || n[9] !== t || n[10] !== r
      ? ((o = (0, X.jsxs)(`span`, { className: `absolute inset-0`, role: e, children: [t, r, i] })),
        (n[8] = e),
        (n[9] = t),
        (n[10] = r),
        (n[11] = o))
      : (o = n[11]),
      (M = o));
  } else if (!O) {
    let e;
    n[12] !== A || n[13] !== p
      ? ((e = A || p == null ? (0, X.jsx)(r, {}) : null), (n[12] = A), (n[13] = p), (n[14] = e))
      : (e = n[14]);
    let i = b ? void 0 : `sr-only`,
      o;
    n[15] === A
      ? (o = n[16])
      : ((o = A
          ? (0, X.jsx)(a, {
              id: `codex.page.preview.imageEmpty`,
              defaultMessage: `No image added`,
              description: `An empty image block in a Page hover preview, with no file to load`,
            })
          : (0, X.jsx)(a, {
              id: `codex.page.preview.imageUnavailable`,
              defaultMessage: `Image unavailable`,
              description: `An image in a Page hover preview could not be downloaded or decoded`,
            })),
        (n[15] = A),
        (n[16] = o));
    let c;
    n[17] !== i || n[18] !== o
      ? ((c = (0, X.jsx)(`span`, { role: `status`, className: i, children: o })),
        (n[17] = i),
        (n[18] = o),
        (n[19] = c))
      : (c = n[19]);
    let l;
    n[20] !== A || n[21] !== h || n[22] !== p || n[23] !== b
      ? ((l =
          !A && p != null
            ? (0, X.jsx)(t, {
                "aria-label": h.formatMessage({
                  id: `codex.page.preview.retryImage`,
                  defaultMessage: `Retry loading image`,
                  description: `Retry button for an image that failed to load in a Page hover preview`,
                }),
                color: `ghostSecondary`,
                size: `compact`,
                uniform: !b,
                onClick: p,
                children: b
                  ? (0, X.jsx)(a, {
                      id: `codex.page.preview.imageRetry`,
                      defaultMessage: `Try again`,
                      description: `Retry loading an image in a Page hover preview`,
                    })
                  : (0, X.jsx)(s, {}),
              })
            : null),
        (n[20] = A),
        (n[21] = h),
        (n[22] = p),
        (n[23] = b),
        (n[24] = l))
      : (l = n[24]);
    let u;
    (n[25] !== e || n[26] !== c || n[27] !== l
      ? ((u = (0, X.jsxs)(`span`, {
          className: `absolute inset-0 flex flex-col items-center justify-center gap-2 overflow-hidden bg-secondary-soft-alpha p-2 text-center text-sm text-secondary select-none`,
          children: [e, c, l],
        })),
        (n[25] = e),
        (n[26] = c),
        (n[27] = l),
        (n[28] = u))
      : (u = n[28]),
      (M = u));
  }
  let N = i.inTableCell && G.tableCell,
    P;
  n[29] === N ? (P = n[30]) : ((P = y(`block`, N)), (n[29] = N), (n[30] = P));
  let F = (j && u) || void 0,
    L = _?.alignment,
    R;
  n[31] === g.src
    ? (R = n[32])
    : ((R = g.src == null ? `full` : (ee(g.src) ?? `full`)), (n[31] = g.src), (n[32] = R));
  let z = _ ?? (O ? C.size : null),
    B = _?.crop ?? null,
    V;
  n[33] === i.container
    ? (V = n[34])
    : ((V = () => i.container.focus({ preventScroll: !0 })), (n[33] = i.container), (n[34] = V));
  let H;
  n[35] !== g.alt ||
  n[36] !== g.title ||
  n[37] !== o ||
  n[38] !== D ||
  n[39] !== u ||
  n[40] !== O ||
  n[41] !== m ||
  n[42] !== f
    ? ((H =
        u && !f && o != null
          ? (0, X.jsx)(`img`, {
              ref: D,
              alt: g.alt,
              className: y(G.image, `col-start-1 row-start-1 block size-full object-fill`, !O && `opacity-0`),
              draggable: !1,
              title: g.title ?? void 0,
              onLoad: (e) =>
                w({
                  blob: o.blob,
                  size: { width: e.currentTarget.naturalWidth, height: e.currentTarget.naturalHeight },
                }),
              onError: () => {
                (w({ blob: o.blob, size: null }), m());
              },
            })
          : null),
      (n[35] = g.alt),
      (n[36] = g.title),
      (n[37] = o),
      (n[38] = D),
      (n[39] = u),
      (n[40] = O),
      (n[41] = m),
      (n[42] = f),
      (n[43] = H))
    : (H = n[43]);
  let U;
  n[44] !== g.src ||
  n[45] !== v ||
  n[46] !== M ||
  n[47] !== H ||
  n[48] !== L ||
  n[49] !== R ||
  n[50] !== z ||
  n[51] !== B ||
  n[52] !== V
    ? ((U = (0, X.jsx)(le, {
        alignment: L,
        source: g.src,
        layout: v,
        overlay: M,
        display: R,
        placeholder: !1,
        size: z,
        crop: B,
        onResize: null,
        onCrop: null,
        onRestoreFocus: V,
        children: H,
      })),
      (n[44] = g.src),
      (n[45] = v),
      (n[46] = M),
      (n[47] = H),
      (n[48] = L),
      (n[49] = R),
      (n[50] = z),
      (n[51] = B),
      (n[52] = V),
      (n[53] = U))
    : (U = n[53]);
  let W;
  return (
    n[54] !== U || n[55] !== P || n[56] !== F
      ? ((W = (0, X.jsx)(`span`, { className: P, "aria-busy": F, children: U })),
        (n[54] = U),
        (n[55] = P),
        (n[56] = F),
        (n[57] = W))
      : (W = n[57]),
    W
  );
}
var J, Y, X;
function _e() {
  return (_e = e(() => {
    ((J = C()), g(), (Y = O()), b(), S(), u(), H(), ce(), U(), _(), se(), (X = T()));
  }))();
}
function ve(e) {
  let t = (0, Z.c)(9),
    { pageId: n, registry: r, active: i } = e,
    a = i === void 0 || i,
    o = (0, Q.useSyncExternalStore)(r.subscribe, r.getSnapshot),
    s;
  if (t[0] !== a || t[1] !== o || t[2] !== n) {
    let e;
    (t[4] !== a || t[5] !== n
      ? ((e = (e, t) =>
          (0, we.createPortal)((0, $.jsx)(ye, { entry: e, pageId: n, active: a }), e.container, String(t))),
        (t[4] = a),
        (t[5] = n),
        (t[6] = e))
      : (e = t[6]),
      (s = o.map(e)),
      (t[0] = a),
      (t[1] = o),
      (t[2] = n),
      (t[3] = s));
  } else s = t[3];
  let c;
  return (
    t[7] === s ? (c = t[8]) : ((c = (0, $.jsx)($.Fragment, { children: s })), (t[7] = s), (t[8] = c)),
    c
  );
}
function ye(e) {
  let t = (0, Z.c)(38),
    { entry: r, pageId: i, active: a } = e,
    s = o(n),
    c = p(M),
    l = p(z),
    u = p(A),
    [d, m] = (0, Q.useState)(xe),
    [h, g] = (0, Q.useState)(!0),
    _,
    v;
  (t[0] !== r.container || t[1] !== d
    ? ((_ = () => {
        if (d || typeof IntersectionObserver > `u`) return;
        let e = new IntersectionObserver((t) => {
          t.some(be) && (m(!0), e.disconnect());
        });
        return (e.observe(r.container), () => e.disconnect());
      }),
      (v = [r.container, d]),
      (t[0] = r.container),
      (t[1] = d),
      (t[2] = _),
      (t[3] = v))
    : ((_ = t[2]), (v = t[3])),
    (0, Q.useEffect)(_, v));
  let { attrs: y } = r,
    b = u && c != null,
    x;
  t[4] === y.src ? (x = t[5]) : ((x = y.src == null ? null : V(y.src)), (t[4] = y.src), (t[5] = x));
  let S = x,
    C;
  t[6] !== c || t[7] !== S || t[8] !== i || t[9] !== h || t[10] !== l
    ? ((C = [...ae(c, i), `preview`, l, `image`, S, h]),
      (t[6] = c),
      (t[7] = S),
      (t[8] = i),
      (t[9] = h),
      (t[10] = l),
      (t[11] = C))
    : (C = t[11]);
  let w = C,
    T;
  t[12] !== w || t[13] !== s.queryClient
    ? ((T = (e) =>
        s.queryClient.getQueryCache().subscribe((t) => {
          (t.type === `added` || t.type === `updated` || t.type === `removed`) &&
            f({ queryKey: w, exact: !0 }, t.query) &&
            e();
        })),
      (t[12] = w),
      (t[13] = s.queryClient),
      (t[14] = T))
    : (T = t[14]);
  let E = T,
    D;
  t[15] !== w || t[16] !== s.queryClient
    ? ((D = () => s.queryClient.getQueryData(w) != null), (t[15] = w), (t[16] = s.queryClient), (t[17] = D))
    : (D = t[17]);
  let O = (0, Q.useSyncExternalStore)(E, D),
    k;
  t[18] !== a || t[19] !== b || t[20] !== S || t[21] !== d || t[22] !== i || t[23] !== w || t[24] !== h
    ? ((k = a && d && b && S != null && (0, $.jsx)(Ce, { pageId: i, fileId: S, thumbnail: h, queryKey: w })),
      (t[18] = a),
      (t[19] = b),
      (t[20] = S),
      (t[21] = d),
      (t[22] = i),
      (t[23] = w),
      (t[24] = h),
      (t[25] = k))
    : (k = t[25]);
  let j = O ? `image` : `empty`,
    N = a && b && S != null,
    P;
  t[26] === Symbol.for(`react.memo_cache_sentinel`) ? ((P = () => g(!1)), (t[26] = P)) : (P = t[26]);
  let F;
  t[27] !== b || t[28] !== r || t[29] !== d || t[30] !== w || t[31] !== E || t[32] !== j || t[33] !== N
    ? ((F = (0, $.jsx)(
        Se,
        { entry: r, queryKey: w, subscribe: E, canRead: b, canRetry: N, isVisible: d, onThumbnailError: P },
        j,
      )),
      (t[27] = b),
      (t[28] = r),
      (t[29] = d),
      (t[30] = w),
      (t[31] = E),
      (t[32] = j),
      (t[33] = N),
      (t[34] = F))
    : (F = t[34]);
  let I;
  return (
    t[35] !== F || t[36] !== k
      ? ((I = (0, $.jsxs)($.Fragment, { children: [k, F] })), (t[35] = F), (t[36] = k), (t[37] = I))
      : (I = t[37]),
    I
  );
}
function be(e) {
  return e.isIntersecting;
}
function xe() {
  return typeof IntersectionObserver > `u`;
}
function Se(e) {
  let t = (0, Z.c)(21),
    { entry: r, queryKey: i, subscribe: a, canRead: s, canRetry: c, isVisible: l, onThumbnailError: u } = e,
    d = o(n),
    f;
  t[0] !== i || t[1] !== d.queryClient
    ? ((f = () => d.queryClient.getQueryState(i)), (t[0] = i), (t[1] = d.queryClient), (t[2] = f))
    : (f = t[2]);
  let p = (0, Q.useSyncExternalStore)(a, f),
    m = p?.data,
    h = s ? (m ?? void 0) : void 0,
    g = p?.status === `error`,
    _ = p?.fetchStatus === `fetching`,
    v = !s,
    y;
  t[3] !== c || t[4] !== i || t[5] !== d.queryClient
    ? ((y = c ? () => void d.queryClient.refetchQueries({ queryKey: i, exact: !0 }) : void 0),
      (t[3] = c),
      (t[4] = i),
      (t[5] = d.queryClient),
      (t[6] = y))
    : (y = t[6]);
  let b;
  t[7] !== m?.isThumbnail || t[8] !== u || t[9] !== i || t[10] !== d.queryClient
    ? ((b = () => {
        (d.queryClient.invalidateQueries({ exact: !0, queryKey: i, refetchType: `none` }),
          m?.isThumbnail && u());
      }),
      (t[7] = m?.isThumbnail),
      (t[8] = u),
      (t[9] = i),
      (t[10] = d.queryClient),
      (t[11] = b))
    : (b = t[11]);
  let x;
  return (
    t[12] !== r ||
    t[13] !== l ||
    t[14] !== h ||
    t[15] !== g ||
    t[16] !== _ ||
    t[17] !== v ||
    t[18] !== y ||
    t[19] !== b
      ? ((x = (0, $.jsx)(ge, {
          entry: r,
          data: h,
          isError: g,
          isFetching: _,
          isVisible: l,
          unavailable: v,
          onRetry: y,
          onImageError: b,
        })),
        (t[12] = r),
        (t[13] = l),
        (t[14] = h),
        (t[15] = g),
        (t[16] = _),
        (t[17] = v),
        (t[18] = y),
        (t[19] = b),
        (t[20] = x))
      : (x = t[20]),
    x
  );
}
function Ce(e) {
  let t = (0, Z.c)(11),
    { pageId: r, fileId: i, thumbnail: a, queryKey: s } = e,
    l = o(n),
    u = p(M),
    d = p(z),
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = { pageHoverPreviewImage: !0 }), (t[0] = f))
    : (f = t[0]);
  let h;
  t[1] !== u || t[2] !== i || t[3] !== r || t[4] !== l || t[5] !== a || t[6] !== d
    ? ((h = async (e) => {
        let { signal: t } = e,
          n = () => {
            if ((t.throwIfAborted(), !l.get(A) || l.get(M) !== u || l.get(z) !== d))
              throw Error(`The Page preview is no longer active`);
          };
        if ((n(), i === `page-asset:welcome-banner-v1`)) {
          let e = await fetch(me, { signal: t });
          if (!e.ok) throw Error(`Could not load the built-in Page banner`);
          let r = await e.blob();
          return (n(), { blob: r, isThumbnail: !1 });
        }
        let o = await de({
          assertReadable: n,
          fileId: i,
          getPageMetadata: () => pe(l, r),
          pageId: r,
          signal: t,
          thumbnail: a,
        });
        return (n(), o);
      }),
      (t[1] = u),
      (t[2] = i),
      (t[3] = r),
      (t[4] = l),
      (t[5] = a),
      (t[6] = d),
      (t[7] = h))
    : (h = t[7]);
  let g;
  return (
    t[8] !== s || t[9] !== h
      ? ((g = {
          queryKey: s,
          gcTime: c.FIVE_MINUTES,
          meta: f,
          retry: !1,
          staleTime: c.FIVE_MINUTES,
          queryFn: h,
        }),
        (t[8] = s),
        (t[9] = h),
        (t[10] = g))
      : (g = t[10]),
    m(g),
    null
  );
}
var Z, Q, we, $;
function Te() {
  return (Te = e(() => {
    ((Z = C()),
      k(),
      h(),
      l(),
      (Q = O()),
      (we = D()),
      ne(),
      N(),
      oe(),
      fe(),
      U(),
      he(),
      ie(),
      w(),
      i(),
      _e(),
      ($ = T()));
  }))();
}
export { q as i, Te as n, K as r, ve as t };
//# sourceMappingURL=images-7c1b1f09d7e2.js.map
