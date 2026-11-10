import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Bst as r,
  Dwt as i,
  FBt as a,
  FNt as o,
  LNt as s,
  MNt as c,
  Mst as l,
  NNt as u,
  Nwt as d,
  PBt as f,
  Qst as p,
  TY as m,
  XOt as h,
  Y3 as g,
  Z3 as _,
  ZSt as v,
  gB as y,
  hB as b,
  iCt as x,
  iwt as S,
  jst as C,
  kV as w,
  okt as T,
  owt as E,
  tkt as D,
  wK as ee,
  zst as O,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as k,
  F7n as A,
  L7n as j,
  Olr as M,
  Thn as N,
  X8 as P,
  bhn as F,
  d8 as I,
  e5 as L,
  f8 as R,
  fhn as z,
  gur as B,
  hdn as V,
  hhn as H,
  lhn as U,
  mlr as te,
  pdn as ne,
  u8 as re,
  wLr as ie,
  whn as ae,
  yhn as oe,
} from "./app-initial-ad16eaadf81f.js";
import { b as se, d as ce, f as W, i as le, r as ue, t as de, y as fe } from "./url-56322ec4aaae.js";
import { r as pe, t as me } from "./page-metadata-e5ef71bd716c.js";
import { c as he, i as ge } from "./assets-4f7817c757db.js";
var G;
function K() {
  return (K = e(() => {
    (L(),
      d(),
      N(),
      U(),
      I(),
      (G = class {
        entries = [];
        snapshot = [];
        listeners = new Set();
        getSnapshot = () => this.snapshot;
        subscribe = (e) => (this.listeners.add(e), () => this.listeners.delete(e));
        plugin = new i({
          props: {
            nodeViews: {
              [re]: (e, t, n) => {
                let r = t.dom.ownerDocument.createElement(`span`);
                r.className = `inline-block max-w-full align-bottom`;
                let i = n(),
                  a = i == null ? null : t.state.doc.resolve(i),
                  o = a?.parent,
                  s = a != null && P(a) != null,
                  c = !s && o?.type === t.state.schema.nodes.paragraph && o.childCount === 1;
                (r.classList.toggle(`w-full`, c || s), r.classList.toggle(`my-0.75`, c));
                let l = {
                  container: r,
                  attrs: R.parse(e.attrs),
                  geometry: z(e.attrs.geometry),
                  layout: s ? `normal` : ae(o?.attrs.pageLayout),
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
function _e(e) {
  let t = (0, q.c)(58),
    {
      entry: n,
      data: r,
      isError: i,
      isFetching: a,
      isVisible: o,
      unavailable: s,
      onRetry: l,
      onImageError: u,
    } = e,
    d = T(),
    { attrs: f, geometry: p, layout: m, standalone: h } = n,
    _ = r?.blob,
    v = y(u),
    [b, x] = (0, J.useState)(null),
    S;
  t[0] !== _ || t[1] !== v
    ? ((S = (e) => {
        if (e == null || _ == null) return;
        let t = new AbortController(),
          n = null;
        return (
          de(_, t.signal).then(
            (r) => {
              if (t.signal.aborted) {
                URL.revokeObjectURL(r);
                return;
              }
              ((n = r), (e.src = r));
            },
            () => {
              t.signal.aborted || (x({ blob: _, size: null }), v());
            },
          ),
          () => {
            (t.abort(), e.removeAttribute(`src`), n != null && URL.revokeObjectURL(n));
          }
        );
      }),
      (t[0] = _),
      (t[1] = v),
      (t[2] = S))
    : (S = t[2]);
  let C = S,
    E = r != null && b?.blob === r.blob && b.size != null,
    O = i || (r != null && b?.blob === r.blob && b.size == null),
    k = f.src == null,
    j = !k && !s && !E && (!O || a),
    M = null;
  if (j) {
    let e = o ? `status` : void 0,
      n;
    t[3] === o
      ? (n = t[4])
      : ((n = o ? (0, Y.jsx)(A, { as: `span`, size: `fill` }) : null), (t[3] = o), (t[4] = n));
    let r;
    t[5] === o
      ? (r = t[6])
      : ((r = o
          ? null
          : (0, Y.jsx)(`span`, { className: `block size-full bg-secondary-soft-alpha`, "aria-hidden": !0 })),
        (t[5] = o),
        (t[6] = r));
    let i;
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Y.jsx)(`span`, {
          className: `sr-only`,
          children: (0, Y.jsx)(D, {
            id: `codex.page.preview.imageLoading`,
            defaultMessage: `Loading image…`,
            description: `Accessible status while an image in a Page hover preview downloads or decodes`,
          }),
        })),
        (t[7] = i))
      : (i = t[7]);
    let a;
    (t[8] !== e || t[9] !== n || t[10] !== r
      ? ((a = (0, Y.jsxs)(`span`, { className: `absolute inset-0`, role: e, children: [n, r, i] })),
        (t[8] = e),
        (t[9] = n),
        (t[10] = r),
        (t[11] = a))
      : (a = t[11]),
      (M = a));
  } else if (!E) {
    let e;
    t[12] !== k || t[13] !== l
      ? ((e = k || l == null ? (0, Y.jsx)(ee, {}) : null), (t[12] = k), (t[13] = l), (t[14] = e))
      : (e = t[14]);
    let n = h ? void 0 : `sr-only`,
      r;
    t[15] === k
      ? (r = t[16])
      : ((r = k
          ? (0, Y.jsx)(D, {
              id: `codex.page.preview.imageEmpty`,
              defaultMessage: `No image added`,
              description: `An empty image block in a Page hover preview, with no file to load`,
            })
          : (0, Y.jsx)(D, {
              id: `codex.page.preview.imageUnavailable`,
              defaultMessage: `Image unavailable`,
              description: `An image in a Page hover preview could not be downloaded or decoded`,
            })),
        (t[15] = k),
        (t[16] = r));
    let i;
    t[17] !== n || t[18] !== r
      ? ((i = (0, Y.jsx)(`span`, { role: `status`, className: n, children: r })),
        (t[17] = n),
        (t[18] = r),
        (t[19] = i))
      : (i = t[19]);
    let a;
    t[20] !== k || t[21] !== d || t[22] !== l || t[23] !== h
      ? ((a =
          !k && l != null
            ? (0, Y.jsx)(g, {
                "aria-label": d.formatMessage({
                  id: `codex.page.preview.retryImage`,
                  defaultMessage: `Retry loading image`,
                  description: `Retry button for an image that failed to load in a Page hover preview`,
                }),
                color: `ghostSecondary`,
                size: `compact`,
                uniform: !h,
                onClick: l,
                children: h
                  ? (0, Y.jsx)(D, {
                      id: `codex.page.preview.imageRetry`,
                      defaultMessage: `Try again`,
                      description: `Retry loading an image in a Page hover preview`,
                    })
                  : (0, Y.jsx)(w, {}),
              })
            : null),
        (t[20] = k),
        (t[21] = d),
        (t[22] = l),
        (t[23] = h),
        (t[24] = a))
      : (a = t[24]);
    let o;
    (t[25] !== e || t[26] !== i || t[27] !== a
      ? ((o = (0, Y.jsxs)(`span`, {
          className: `absolute inset-0 flex flex-col items-center justify-center gap-2 overflow-hidden bg-secondary-soft-alpha p-2 text-center text-sm text-secondary select-none`,
          children: [e, i, a],
        })),
        (t[25] = e),
        (t[26] = i),
        (t[27] = a),
        (t[28] = o))
      : (o = t[28]),
      (M = o));
  }
  let N = n.inTableCell && W.tableCell,
    P;
  t[29] === N ? (P = t[30]) : ((P = c(`block`, N)), (t[29] = N), (t[30] = P));
  let F = (j && o) || void 0,
    I = p?.alignment,
    L;
  t[31] === f.src
    ? (L = t[32])
    : ((L = f.src == null ? `full` : (oe(f.src) ?? `full`)), (t[31] = f.src), (t[32] = L));
  let R = p ?? (E ? b.size : null),
    z = p?.crop ?? null,
    B;
  t[33] === n.container
    ? (B = t[34])
    : ((B = () => n.container.focus({ preventScroll: !0 })), (t[33] = n.container), (t[34] = B));
  let V;
  t[35] !== f.alt ||
  t[36] !== f.title ||
  t[37] !== r ||
  t[38] !== C ||
  t[39] !== o ||
  t[40] !== E ||
  t[41] !== u ||
  t[42] !== s
    ? ((V =
        o && !s && r != null
          ? (0, Y.jsx)(`img`, {
              ref: C,
              alt: f.alt,
              className: c(W.image, `col-start-1 row-start-1 block size-full object-fill`, !E && `opacity-0`),
              draggable: !1,
              title: f.title ?? void 0,
              onLoad: (e) =>
                x({
                  blob: r.blob,
                  size: { width: e.currentTarget.naturalWidth, height: e.currentTarget.naturalHeight },
                }),
              onError: () => {
                (x({ blob: r.blob, size: null }), u());
              },
            })
          : null),
      (t[35] = f.alt),
      (t[36] = f.title),
      (t[37] = r),
      (t[38] = C),
      (t[39] = o),
      (t[40] = E),
      (t[41] = u),
      (t[42] = s),
      (t[43] = V))
    : (V = t[43]);
  let H;
  t[44] !== f.src ||
  t[45] !== m ||
  t[46] !== M ||
  t[47] !== V ||
  t[48] !== I ||
  t[49] !== L ||
  t[50] !== R ||
  t[51] !== z ||
  t[52] !== B
    ? ((H = (0, Y.jsx)(ue, {
        alignment: I,
        source: f.src,
        layout: m,
        overlay: M,
        display: L,
        placeholder: !1,
        size: R,
        crop: z,
        onResize: null,
        onCrop: null,
        onRestoreFocus: B,
        children: V,
      })),
      (t[44] = f.src),
      (t[45] = m),
      (t[46] = M),
      (t[47] = V),
      (t[48] = I),
      (t[49] = L),
      (t[50] = R),
      (t[51] = z),
      (t[52] = B),
      (t[53] = H))
    : (H = t[53]);
  let U;
  return (
    t[54] !== H || t[55] !== P || t[56] !== F
      ? ((U = (0, Y.jsx)(`span`, { className: P, "aria-busy": F, children: H })),
        (t[54] = H),
        (t[55] = P),
        (t[56] = F),
        (t[57] = U))
      : (U = t[57]),
    U
  );
}
var q, J, Y;
function ve() {
  return (ve = e(() => {
    ((q = f()), u(), (J = a()), h(), _(), m(), j(), le(), H(), b(), ce(), (Y = s()));
  }))();
}
function ye(e) {
  let t = (0, X.c)(9),
    { pageId: n, registry: r, active: i } = e,
    a = i === void 0 || i,
    o = (0, Z.useSyncExternalStore)(r.subscribe, r.getSnapshot),
    s;
  if (t[0] !== a || t[1] !== o || t[2] !== n) {
    let e;
    (t[4] !== a || t[5] !== n
      ? ((e = (e, t) =>
          (0, Te.createPortal)((0, Q.jsx)(be, { entry: e, pageId: n, active: a }), e.container, String(t))),
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
    t[7] === s ? (c = t[8]) : ((c = (0, Q.jsx)(Q.Fragment, { children: s })), (t[7] = s), (t[8] = c)),
    c
  );
}
function be(e) {
  let n = (0, X.c)(38),
    { entry: r, pageId: i, active: a } = e,
    o = t(p),
    s = x(B),
    c = x(k),
    l = x(M),
    [u, d] = (0, Z.useState)(Se),
    [f, m] = (0, Z.useState)(!0),
    h,
    g;
  (n[0] !== r.container || n[1] !== u
    ? ((h = () => {
        if (u || typeof IntersectionObserver > `u`) return;
        let e = new IntersectionObserver((t) => {
          t.some(xe) && (d(!0), e.disconnect());
        });
        return (e.observe(r.container), () => e.disconnect());
      }),
      (g = [r.container, u]),
      (n[0] = r.container),
      (n[1] = u),
      (n[2] = h),
      (n[3] = g))
    : ((h = n[2]), (g = n[3])),
    (0, Z.useEffect)(h, g));
  let { attrs: _ } = r,
    v = l && s != null,
    y;
  n[4] === _.src ? (y = n[5]) : ((y = _.src == null ? null : F(_.src)), (n[4] = _.src), (n[5] = y));
  let b = y,
    S;
  n[6] !== s || n[7] !== b || n[8] !== i || n[9] !== f || n[10] !== c
    ? ((S = [...ne(s, i), `preview`, c, `image`, b, f]),
      (n[6] = s),
      (n[7] = b),
      (n[8] = i),
      (n[9] = f),
      (n[10] = c),
      (n[11] = S))
    : (S = n[11]);
  let C = S,
    w;
  n[12] !== C || n[13] !== o.queryClient
    ? ((w = (e) =>
        o.queryClient.getQueryCache().subscribe((t) => {
          (t.type === `added` || t.type === `updated` || t.type === `removed`) &&
            E({ queryKey: C, exact: !0 }, t.query) &&
            e();
        })),
      (n[12] = C),
      (n[13] = o.queryClient),
      (n[14] = w))
    : (w = n[14]);
  let T = w,
    D;
  n[15] !== C || n[16] !== o.queryClient
    ? ((D = () => o.queryClient.getQueryData(C) != null), (n[15] = C), (n[16] = o.queryClient), (n[17] = D))
    : (D = n[17]);
  let ee = (0, Z.useSyncExternalStore)(T, D),
    O;
  n[18] !== a || n[19] !== v || n[20] !== b || n[21] !== u || n[22] !== i || n[23] !== C || n[24] !== f
    ? ((O = a && u && v && b != null && (0, Q.jsx)(we, { pageId: i, fileId: b, thumbnail: f, queryKey: C })),
      (n[18] = a),
      (n[19] = v),
      (n[20] = b),
      (n[21] = u),
      (n[22] = i),
      (n[23] = C),
      (n[24] = f),
      (n[25] = O))
    : (O = n[25]);
  let A = ee ? `image` : `empty`,
    j = a && v && b != null,
    N;
  n[26] === Symbol.for(`react.memo_cache_sentinel`) ? ((N = () => m(!1)), (n[26] = N)) : (N = n[26]);
  let P;
  n[27] !== v || n[28] !== r || n[29] !== u || n[30] !== C || n[31] !== T || n[32] !== A || n[33] !== j
    ? ((P = (0, Q.jsx)(
        Ce,
        { entry: r, queryKey: C, subscribe: T, canRead: v, canRetry: j, isVisible: u, onThumbnailError: N },
        A,
      )),
      (n[27] = v),
      (n[28] = r),
      (n[29] = u),
      (n[30] = C),
      (n[31] = T),
      (n[32] = A),
      (n[33] = j),
      (n[34] = P))
    : (P = n[34]);
  let I;
  return (
    n[35] !== P || n[36] !== O
      ? ((I = (0, Q.jsxs)(Q.Fragment, { children: [O, P] })), (n[35] = P), (n[36] = O), (n[37] = I))
      : (I = n[37]),
    I
  );
}
function xe(e) {
  return e.isIntersecting;
}
function Se() {
  return typeof IntersectionObserver > `u`;
}
function Ce(e) {
  let n = (0, X.c)(21),
    { entry: r, queryKey: i, subscribe: a, canRead: o, canRetry: s, isVisible: c, onThumbnailError: l } = e,
    u = t(p),
    d;
  n[0] !== i || n[1] !== u.queryClient
    ? ((d = () => u.queryClient.getQueryState(i)), (n[0] = i), (n[1] = u.queryClient), (n[2] = d))
    : (d = n[2]);
  let f = (0, Z.useSyncExternalStore)(a, d),
    m = f?.data,
    h = o ? (m ?? void 0) : void 0,
    g = f?.status === `error`,
    _ = f?.fetchStatus === `fetching`,
    v = !o,
    y;
  n[3] !== s || n[4] !== i || n[5] !== u.queryClient
    ? ((y = s ? () => void u.queryClient.refetchQueries({ queryKey: i, exact: !0 }) : void 0),
      (n[3] = s),
      (n[4] = i),
      (n[5] = u.queryClient),
      (n[6] = y))
    : (y = n[6]);
  let b;
  n[7] !== m?.isThumbnail || n[8] !== l || n[9] !== i || n[10] !== u.queryClient
    ? ((b = () => {
        (u.queryClient.invalidateQueries({ exact: !0, queryKey: i, refetchType: `none` }),
          m?.isThumbnail && l());
      }),
      (n[7] = m?.isThumbnail),
      (n[8] = l),
      (n[9] = i),
      (n[10] = u.queryClient),
      (n[11] = b))
    : (b = n[11]);
  let x;
  return (
    n[12] !== r ||
    n[13] !== c ||
    n[14] !== h ||
    n[15] !== g ||
    n[16] !== _ ||
    n[17] !== v ||
    n[18] !== y ||
    n[19] !== b
      ? ((x = (0, Q.jsx)(_e, {
          entry: r,
          data: h,
          isError: g,
          isFetching: _,
          isVisible: c,
          unavailable: v,
          onRetry: y,
          onImageError: b,
        })),
        (n[12] = r),
        (n[13] = c),
        (n[14] = h),
        (n[15] = g),
        (n[16] = _),
        (n[17] = v),
        (n[18] = y),
        (n[19] = b),
        (n[20] = x))
      : (x = n[20]),
    x
  );
}
function we(e) {
  let n = (0, X.c)(11),
    { pageId: r, fileId: i, thumbnail: a, queryKey: o } = e,
    s = t(p),
    c = x(B),
    u = x(k),
    d;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { pageHoverPreviewImage: !0 }), (n[0] = d))
    : (d = n[0]);
  let f;
  n[1] !== c || n[2] !== i || n[3] !== r || n[4] !== s || n[5] !== a || n[6] !== u
    ? ((f = async (e) => {
        let { signal: t } = e,
          n = () => {
            if ((t.throwIfAborted(), !s.get(M) || s.get(B) !== c || s.get(k) !== u))
              throw Error(`The Page preview is no longer active`);
          };
        if ((n(), i === `page-asset:welcome-banner-v1`)) {
          let e = await fetch(he, { signal: t });
          if (!e.ok) throw Error(`Could not load the built-in Page banner`);
          let r = await e.blob();
          return (n(), { blob: r, isThumbnail: !1 });
        }
        let o = await fe({
          assertReadable: n,
          fileId: i,
          getPageMetadata: () => me(s, r),
          pageId: r,
          signal: t,
          thumbnail: a,
        });
        return (n(), o);
      }),
      (n[1] = c),
      (n[2] = i),
      (n[3] = r),
      (n[4] = s),
      (n[5] = a),
      (n[6] = u),
      (n[7] = f))
    : (f = n[7]);
  let m;
  return (
    n[8] !== o || n[9] !== f
      ? ((m = {
          queryKey: o,
          gcTime: O.FIVE_MINUTES,
          meta: d,
          retry: !1,
          staleTime: O.FIVE_MINUTES,
          queryFn: f,
        }),
        (n[8] = o),
        (n[9] = f),
        (n[10] = m))
      : (m = n[10]),
    l(m),
    null
  );
}
var X, Z, Te, Q;
function $() {
  return ($ = e(() => {
    ((X = f()),
      S(),
      C(),
      v(),
      (Z = a()),
      (Te = o()),
      ie(),
      te(),
      se(),
      pe(),
      H(),
      ge(),
      V(),
      n(),
      r(),
      ve(),
      (Q = s()));
  }))();
}
export { K as i, $ as n, G as r, ye as t };
//# sourceMappingURL=images-8ae6089f5332.js.map
