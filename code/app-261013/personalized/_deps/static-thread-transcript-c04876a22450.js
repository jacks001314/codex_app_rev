const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./shared-snapshot-visualization-4165d356fb0f.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./mcp-sandbox-rpc-ca8003ff80ff.js",
      "./visualization-sandbox-config-193a3a874c91.js",
      "./visualization-theme-bedd32a367a0.js",
      "./visualization-sandbox-runtime-95a625b0fe0d.js",
      "./shared-snapshot-asset-reference-33214426cc96.js",
      "./shared-snapshot-asset-scope-4757eb6c87d3.js",
      "./mermaid-diagram-a084a3ee2c7b.js",
      "./chatgpt-mermaid-preview-actions-e5e94205d584.js",
      "./preview-6b6855feea38.js",
      "./image-bad1bfca04dc.js",
      "./chunk-ZW26E7AF-c8fea83f7f61.js",
      "./chart-colors-7214911051c2.js",
      "./dist-abd340759e1c.js",
      "./file-diff-presentation-2b85fdb739e2.js",
      "./file-diff-presentation-b6cc0ce0d4c4.js",
      "./codex-diff-css-681a898586a0.js",
      "./register-pierre-themes-26873099a398.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $ot as n,
  B4 as r,
  BF as i,
  Ew as a,
  GF as o,
  Hxt as s,
  IDt as c,
  Ixt as l,
  Mz as u,
  Nz as d,
  Out as f,
  Pxt as p,
  Tvt as m,
  Tw as h,
  UF as g,
  VDt as _,
  VF as v,
  ZA as y,
  _Mt as b,
  az as x,
  dI as S,
  dk as C,
  fI as w,
  fPt as T,
  gMt as E,
  jDt as D,
  l0 as ee,
  lb as te,
  lk as ne,
  md as re,
  mh as ie,
  oz as ae,
  pI as O,
  pPt as oe,
  pd as se,
  ph as ce,
  tst as le,
  u0 as ue,
  vzt as k,
  xMt as A,
  yzt as de,
  z4 as fe,
} from "./app-shared-bbfeca5e5737.js";
import {
  Do as pe,
  EEt as me,
  Go as he,
  Jo as ge,
  Mor as _e,
  No as ve,
  Ns as ye,
  Og as be,
  Po as xe,
  Ps as Se,
  Ss as Ce,
  TEt as we,
  Ui as j,
  Wi as Te,
  Wo as Ee,
  Xs as De,
  Yo as Oe,
  Ys as ke,
  _Pn as Ae,
  _a as je,
  aw as Me,
  cu as Ne,
  dir as Pe,
  eh as M,
  esr as Fe,
  hPn as Ie,
  jor as Le,
  kg as Re,
  ko as ze,
  lu as Be,
  mPn as N,
  mYr as Ve,
  nh as He,
  ns as P,
  ow as Ue,
  pYr as We,
  pir as Ge,
  rs as Ke,
  uPn as qe,
  vPn as Je,
  va as Ye,
  xs as Xe,
} from "./app-initial-5851df3f6cb1.js";
import { Gm as Ze, Wm as Qe, cf as $e, sf as et } from "./app-primary-fe8a450b3b04.js";
import { n as tt, t as nt } from "./collapsible-user-message-content-53649d62c3a8.js";
import { n as rt, t as it } from "./conversation-gap-f75c434d4ee7.js";
import { n as at, t as ot } from "./timeline-activity-body-20adff28ef8e.js";
import { n as st, t as ct } from "./collapsed-turn-disclosure-5a24f5665073.js";
import { i as lt, n as ut, r as dt, t as ft } from "./generated-image-tile-1521d453343d.js";
import { a as pt, i as mt, r as F, t as ht } from "./shared-snapshot-asset-reference-33214426cc96.js";
import { i as gt, n as _t, r as vt, t as I } from "./shared-snapshot-asset-scope-4757eb6c87d3.js";
import { a as yt, c as bt, l as xt, t as L } from "./shared-codex-snapshot-b6a27b298fc6.js";
var R;
function z() {
  return (z = e(() => {
    R = class {
      #e = new Map();
      #t = new Map();
      #n = new Map();
      #r = new WeakSet();
      getAssetId(e) {
        return this.#t.get(e);
      }
      recover({ assetId: e, assetUrl: t, image: n, loadAsset: r, setSource: i }) {
        if (this.#r.has(n)) {
          let e = this.#e.get(t);
          return (e != null && (URL.revokeObjectURL(e), this.#e.delete(t), this.#t.delete(e)), !1);
        }
        (n.classList.add(`invisible`), this.#r.add(n));
        let a = this.#e.get(t);
        if (a != null) return (i(a), !0);
        let o = this.#n.get(t);
        if (o == null) {
          let n = new AbortController();
          ((o = {
            controller: n,
            source: (async () => {
              try {
                let i = await r(e, n.signal);
                n.signal.throwIfAborted();
                let a = URL.createObjectURL(i);
                return (this.#e.set(t, a), this.#t.set(a, e), a);
              } finally {
                this.#n.get(t)?.controller === n && this.#n.delete(t);
              }
            })(),
          }),
            this.#n.set(t, o));
        }
        let { controller: s } = o;
        return (
          o.source
            .then((e) => {
              n.isConnected && i(e);
            })
            .catch(() => {
              n.isConnected && !s.signal.aborted && n.dispatchEvent(new Event(`error`));
            }),
          !0
        );
      }
      dispose() {
        for (let { controller: e } of this.#n.values()) e.abort();
        for (let e of this.#e.values()) URL.revokeObjectURL(e);
        (this.#n.clear(), this.#e.clear(), this.#t.clear());
      }
    };
  }))();
}
function St(e) {
  let t = (0, W.c)(26),
    { assets: r, children: i, shareId: a, previewAssetSources: o, loadAsset: c } = e,
    l = (0, G.useContext)(n),
    u;
  t[0] !== l || t[1] !== a
    ? ((u = a != null && l?.getQueryData([`shared-codex-snapshot`, a])?.isAuthenticated === !0),
      (t[0] = l),
      (t[1] = a),
      (t[2] = u))
    : (u = t[2]);
  let d = u,
    f;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = new WeakSet()), (t[3] = f)) : (f = t[3]);
  let p = (0, G.useRef)(f),
    [m] = (0, G.useState)(Ct),
    h,
    g;
  (t[4] === m
    ? ((h = t[5]), (g = t[6]))
    : ((h = () => () => m.dispose()), (g = [m]), (t[4] = m), (t[5] = h), (t[6] = g)),
    (0, G.useEffect)(h, g));
  let _ = r ?? null,
    v = a ?? null,
    y = c != null,
    b;
  t[7] === o ? (b = t[8]) : ((b = o == null ? void 0 : Object.fromEntries(o)), (t[7] = o), (t[8] = b));
  let x;
  t[9] !== _ || t[10] !== v || t[11] !== y || t[12] !== b
    ? ((x = { assets: _, shareId: v, usesAssetLoader: y, previewAssetSources: b }),
      (t[9] = _),
      (t[10] = v),
      (t[11] = y),
      (t[12] = b),
      (t[13] = x))
    : (x = t[13]);
  let S;
  t[14] !== m || t[15] !== d || t[16] !== c || t[17] !== a
    ? ((S = (e) => {
        if (!(e.target instanceof HTMLImageElement) || (!d && c == null && pt() == null) || a == null) return;
        let t = e.target,
          n = new URL(t.src),
          r = new URL(F({ assetId: ``, shareId: a }), window.location.href),
          i = c == null ? J.get(t.src) : m.getAssetId(t.src);
        if (
          (n.origin === r.origin &&
            n.pathname.startsWith(r.pathname) &&
            (i = n.pathname.slice(r.pathname.length)),
          i == null || i.length === 0)
        )
          return;
        let o = new URL(F({ assetId: i, shareId: a }), window.location.href).href;
        if (c != null) {
          m.recover({ assetId: i, assetUrl: o, image: t, loadAsset: c, setSource: (e) => H(t, e) }) &&
            e.stopPropagation();
          return;
        }
        if (p.current.has(t)) {
          q.delete(o);
          return;
        }
        (e.stopPropagation(), t.classList.add(`invisible`));
        let s = q.get(o);
        if (n.origin === r.origin && s != null) {
          H(t, s);
          return;
        }
        (p.current.add(t),
          vt(F({ assetId: i, shareId: a }), { headers: { Range: `bytes=0-0` } })
            .then(async (e) => {
              if (!e.ok) throw Error(`Shared thread image is unavailable`);
              (await e.body?.cancel(), q.set(o, e.url), J.set(e.url, i), H(t, e.url));
            })
            .catch(() => {
              (q.delete(o), t.dispatchEvent(new Event(`error`)));
            }));
      }),
      (t[14] = m),
      (t[15] = d),
      (t[16] = c),
      (t[17] = a),
      (t[18] = S))
    : (S = t[18]);
  let C;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (e) => {
        e.target instanceof HTMLImageElement &&
          (e.target.classList.remove(`invisible`), p.current.delete(e.target));
      }),
      (t[19] = C))
    : (C = t[19]);
  let w;
  t[20] !== i || t[21] !== S
    ? ((w = (0, K.jsx)(`span`, { className: `contents`, onErrorCapture: S, onLoadCapture: C, children: i })),
      (t[20] = i),
      (t[21] = S),
      (t[22] = w))
    : (w = t[22]);
  let T;
  return (
    t[23] !== w || t[24] !== x
      ? ((T = (0, K.jsx)(s, { scope: I, value: x, children: w })), (t[23] = w), (t[24] = x), (t[25] = T))
      : (T = t[25]),
    T
  );
}
function Ct() {
  return new R();
}
function B(e) {
  let t = (0, W.c)(14),
    { images: n } = e,
    { shareId: r, previewAssetSources: i } = l(I).value,
    a,
    o;
  if (t[0] !== n || t[1] !== i || t[2] !== r) {
    ((o = []), (a = new Map()));
    for (let [e, t] of n.entries())
      U(t.src, r, i) != null && (a.set(e, o.length), o.push({ alt: t.alt, src: t.src }));
    ((t[0] = n), (t[1] = i), (t[2] = r), (t[3] = a), (t[4] = o));
  } else ((a = t[3]), (o = t[4]));
  let s;
  if (t[5] !== n || t[6] !== a || t[7] !== o) {
    let e;
    (t[9] !== a || t[10] !== o
      ? ((e = (e, t) => {
          let { alt: n, src: r } = e;
          return (0, K.jsx)(
            Tt,
            { alt: n, filename: n, previewIndex: a.get(t), previewItems: o, src: r },
            `${r}:${t}`,
          );
        }),
        (t[9] = a),
        (t[10] = o),
        (t[11] = e))
      : (e = t[11]),
      (s = n.map(e)),
      (t[5] = n),
      (t[6] = a),
      (t[7] = o),
      (t[8] = s));
  } else s = t[8];
  let c;
  return (
    t[12] === s ? (c = t[13]) : ((c = (0, K.jsx)(K.Fragment, { children: s })), (t[12] = s), (t[13] = c)),
    c
  );
}
function wt(e) {
  let t = (0, W.c)(31),
    { images: n } = e,
    { shareId: r, previewAssetSources: i, usesAssetLoader: a } = l(I).value,
    [o, s] = (0, G.useState)(null),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = new Set()), (t[0] = c)) : (c = t[0]);
  let [u, d] = (0, G.useState)(c),
    f,
    p,
    m,
    h;
  if (t[1] !== u || t[2] !== n || t[3] !== i || t[4] !== o || t[5] !== r || t[6] !== a) {
    let e;
    (t[11] !== i || t[12] !== r
      ? ((e = (e) => {
          let { alt: t, src: n } = e,
            a = U(n, r, i);
          return a == null ? [] : [{ alt: t, src: a }];
        }),
        (t[11] = i),
        (t[12] = r),
        (t[13] = e))
      : (e = t[13]),
      (p = n.flatMap(e)),
      (f = o == null ? null : (p[o] ?? null)),
      (m = f?.src ?? ``),
      a || (m = q.get(m) ?? m));
    let c;
    (t[14] === u
      ? (c = t[15])
      : ((c = (e, t) => {
          let { alt: n, src: r } = e;
          return (0, K.jsx)(
            `span`,
            {
              className: `contents`,
              onErrorCapture: () => {
                d((e) => new Set(e).add(r));
              },
              children: u.has(r)
                ? (0, K.jsx)(V, {
                    onRetry: () => {
                      d((e) => {
                        let t = new Set(e);
                        return (t.delete(r), t);
                      });
                    },
                  })
                : (0, K.jsx)(ft, {
                    className: `w-full max-w-[400px]`,
                    "aria-label": n,
                    "aria-haspopup": `dialog`,
                    onClick: () => s(t),
                    children: (0, K.jsx)(lt, {
                      className: `block h-auto w-full object-contain image-transparency-backdrop`,
                      src: r,
                      alt: n,
                      loading: `lazy`,
                    }),
                  }),
            },
            `${r}:${t}`,
          );
        }),
        (t[14] = u),
        (t[15] = c)),
      (h = p.map(c)),
      (t[1] = u),
      (t[2] = n),
      (t[3] = i),
      (t[4] = o),
      (t[5] = r),
      (t[6] = a),
      (t[7] = f),
      (t[8] = p),
      (t[9] = m),
      (t[10] = h));
  } else ((f = t[7]), (p = t[8]), (m = t[9]), (h = t[10]));
  let g = f?.alt ?? ``,
    _ = f != null,
    v;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (e) => {
        e || s(null);
      }),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] === o ? (y = t[18]) : ((y = o != null && o > 0 ? () => s(o - 1) : void 0), (t[17] = o), (t[18] = y));
  let b;
  t[19] !== o || t[20] !== p
    ? ((b = o != null && o + 1 < p.length ? () => s(o + 1) : void 0), (t[19] = o), (t[20] = p), (t[21] = b))
    : (b = t[21]);
  let x;
  t[22] !== m || t[23] !== g || t[24] !== _ || t[25] !== y || t[26] !== b
    ? ((x = (0, K.jsx)(Xe, { src: m, alt: g, open: _, onOpenChange: v, onPreviousImage: y, onNextImage: b })),
      (t[22] = m),
      (t[23] = g),
      (t[24] = _),
      (t[25] = y),
      (t[26] = b),
      (t[27] = x))
    : (x = t[27]);
  let S;
  return (
    t[28] !== h || t[29] !== x
      ? ((S = (0, K.jsxs)(K.Fragment, { children: [h, x] })), (t[28] = h), (t[29] = x), (t[30] = S))
      : (S = t[30]),
    S
  );
}
function Tt(e) {
  let t = (0, W.c)(20),
    { shareId: n, previewAssetSources: r, usesAssetLoader: i } = l(I).value,
    [a, o] = (0, G.useState)(!1),
    s;
  t[0] !== r || t[1] !== e.previewItems || t[2] !== n
    ? ((s = () =>
        e.previewItems?.flatMap((e) => {
          let t = U(e.src, n, r);
          return t == null ? [] : [{ ...e, src: t }];
        })),
      (t[0] = r),
      (t[1] = e.previewItems),
      (t[2] = n),
      (t[3] = s))
    : (s = t[3]);
  let [c, u] = (0, G.useState)(s),
    d;
  t[4] !== r || t[5] !== e.src || t[6] !== n
    ? ((d = U(e.src, n, r)), (t[4] = r), (t[5] = e.src), (t[6] = n), (t[7] = d))
    : (d = t[7]);
  let f = d;
  if (f == null) {
    let n;
    return (
      t[8] === e.alt ? (n = t[9]) : ((n = (0, K.jsx)(P, { alt: e.alt, src: L })), (t[8] = e.alt), (t[9] = n)),
      n
    );
  }
  if (a) {
    let e;
    return (
      t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(V, { onRetry: () => o(!1) })), (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  let p;
  t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = () => o(!0)), (t[11] = p)) : (p = t[11]);
  let m;
  t[12] !== e || t[13] !== i
    ? ((m = () => {
        (u((e) => e?.map((e) => ({ ...e, src: i ? e.src : (q.get(e.src) ?? e.src) }))), e.onPreviewOpen?.());
      }),
      (t[12] = e),
      (t[13] = i),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== c || t[16] !== e || t[17] !== f || t[18] !== m
      ? ((h = (0, K.jsx)(`span`, {
          className: `contents`,
          onErrorCapture: p,
          children: (0, K.jsx)(j, { ...e, imageLoading: `lazy`, onPreviewOpen: m, previewItems: c, src: f }),
        })),
        (t[15] = c),
        (t[16] = e),
        (t[17] = f),
        (t[18] = m),
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
function Et(e) {
  let t = (0, W.c)(16),
    { assets: n, shareId: r, previewAssetSources: i } = l(I).value,
    [a, o] = (0, G.useState)(!1),
    s;
  t[0] !== i || t[1] !== e.src || t[2] !== r
    ? ((s = e.src == null ? null : U(e.src, r, i)), (t[0] = i), (t[1] = e.src), (t[2] = r), (t[3] = s))
    : (s = t[3]);
  let c = s,
    u = e.src == null ? null : ht(e.src),
    d = u == null ? void 0 : n?.[u];
  if (c == null) {
    let n;
    return (t[4] === e ? (n = t[5]) : ((n = (0, K.jsx)(P, { ...e, src: L })), (t[4] = e), (t[5] = n)), n);
  }
  if (e.src != null && i?.[e.src] != null) {
    let n = e.alt ?? ``,
      r;
    return (
      t[6] !== c || t[7] !== n
        ? ((r = (0, K.jsx)(j, { alt: n, src: c, previewEnabled: !1, imageLoading: `lazy` })),
          (t[6] = c),
          (t[7] = n),
          (t[8] = r))
        : (r = t[8]),
      r
    );
  }
  if (a) {
    let e;
    return (
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(V, { onRetry: () => o(!1) })), (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  let f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = () => o(!0)), (t[10] = f)) : (f = t[10]);
  let p = d?.height,
    m = d?.width,
    h;
  return (
    t[11] !== e || t[12] !== c || t[13] !== p || t[14] !== m
      ? ((h = (0, K.jsx)(`span`, {
          className: `contents`,
          onErrorCapture: f,
          children: (0, K.jsx)(P, { ...e, height: p, src: c, width: m }),
        })),
        (t[11] = e),
        (t[12] = c),
        (t[13] = p),
        (t[14] = m),
        (t[15] = h))
      : (h = t[15]),
    h
  );
}
function V(e) {
  let t = (0, W.c)(3),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, K.jsx)(c, {
        id: `codex.sharedSnapshot.imageRetry`,
        defaultMessage: `Retry image`,
        description: `Button shown when a shared thread image fails to load`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, K.jsx)(`span`, {
          className: `flex size-20 shrink-0 items-center justify-center rounded-lg border border-default bg-surface-secondary/92 px-2 text-center text-size-chat-sm text-secondary`,
          children: (0, K.jsx)(`button`, { type: `button`, onClick: n, children: r }),
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function H(e, t) {
  ((e.src = t), e.closest(`[role="dialog"]`)?.querySelector(`a[download]`)?.setAttribute(`href`, t));
}
function U(e, t, n) {
  let r = n?.[e];
  if (r != null) return r;
  if (t == null) return null;
  let i = ht(e);
  return i == null ? null : new URL(F({ assetId: i, shareId: t }), window.location.href).href;
}
var W, G, K, q, J;
function Dt() {
  return (Dt = e(() => {
    ((W = k()),
      dt(),
      le(),
      p(),
      (G = de()),
      D(),
      gt(),
      Te(),
      ut(),
      Ce(),
      Ke(),
      y(),
      z(),
      yt(),
      mt(),
      _t(),
      (K = A()),
      (q = new Map()),
      (J = new Map()));
  }))();
}
function Ot(e) {
  let t = (0, X.c)(14),
    {
      idPrefix: n,
      initialMessageId: r,
      initialMessageRef: i,
      shareId: a,
      snapshot: o,
      previewAssetSources: s,
      showOmissionNotice: c,
      loadAsset: l,
    } = e,
    u = n === void 0 ? `` : n,
    d;
  t[0] === r ? (d = t[1]) : ((d = r === void 0 ? window.location.hash.slice(1) : r), (t[0] = r), (t[1] = d));
  let f = d,
    p = c === void 0 || c,
    m;
  t[2] !== u || t[3] !== f || t[4] !== i || t[5] !== p || t[6] !== o
    ? ((m = (0, $.jsx)(At, {
        idPrefix: u,
        initialMessageId: f,
        initialMessageRef: i,
        snapshot: o,
        showOmissionNotice: p,
      })),
      (t[2] = u),
      (t[3] = f),
      (t[4] = i),
      (t[5] = p),
      (t[6] = o),
      (t[7] = m))
    : (m = t[7]);
  let h;
  return (
    t[8] !== l || t[9] !== s || t[10] !== a || t[11] !== o.assets || t[12] !== m
      ? ((h = (0, $.jsx)(Me, {
          children: (0, $.jsx)(St, {
            assets: o.assets,
            shareId: a,
            previewAssetSources: s,
            loadAsset: l,
            children: m,
          }),
        })),
        (t[8] = l),
        (t[9] = s),
        (t[10] = a),
        (t[11] = o.assets),
        (t[12] = m),
        (t[13] = h))
      : (h = t[13]),
    h
  );
}
function kt(e) {
  let t = (0, X.c)(7),
    { className: n, snapshot: r } = e,
    i = r?.omittedFileChangeCount,
    a = bt(r);
  if (!i && !a) return null;
  let o;
  t[0] === n ? (o = t[1]) : ((o = E(`text-sm text-secondary select-none`, n)), (t[0] = n), (t[1] = o));
  let s;
  t[2] === i
    ? (s = t[3])
    : ((s = i
        ? (0, $.jsx)(c, {
            id: `codex.sharedSnapshot.viewer.omittedFileChanges`,
            defaultMessage: `{count, plural, one {# file change was omitted} other {# file changes were omitted}} because the chat was too large`,
            description: `Notice shown to recipients of a shared Codex chat when complete file change entries were removed to fit the server's snapshot size limit. Messages remain in the shared chat.`,
            values: { count: i },
          })
        : (0, $.jsx)(c, {
            id: `codex.sharedSnapshot.omissionTranscriptNotice`,
            defaultMessage: `Some file changes were omitted due to the size of this conversation`,
            description: `Generated notice saved at the start of a shared chat, separate from the original conversation. Entire file changes were left out to fit the snapshot size limit; this is not a message authored by the original chat participants.`,
          })),
      (t[2] = i),
      (t[3] = s));
  let l;
  return (
    t[4] !== o || t[5] !== s
      ? ((l = (0, $.jsx)(`p`, { className: o, role: `note`, children: s })),
        (t[4] = o),
        (t[5] = s),
        (t[6] = l))
      : (l = t[6]),
    l
  );
}
function At(e) {
  let t = (0, X.c)(24),
    { idPrefix: n, initialMessageId: r, initialMessageRef: i, snapshot: a, showOmissionNotice: o } = e,
    s = _(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = new Map()), (t[0] = c)) : (c = t[0]);
  let l = (0, Q.useRef)(c),
    u;
  t[1] === s
    ? (u = t[2])
    : ((u = s.formatMessage({
        id: `codex.localConversation.userImageAttachment`,
        defaultMessage: `User attachment`,
        description: `Alt text for user image attachment in local conversation`,
      })),
      (t[1] = s),
      (t[2] = u));
  let d = u,
    f;
  t[3] === a.turns ? (f = t[4]) : ((f = (0, Z.default)(a.turns, Rt)), (t[3] = a.turns), (t[4] = f));
  let p = f,
    m,
    h,
    g,
    v;
  if (t[5] !== n || t[6] !== r || t[7] !== i || t[8] !== p || t[9] !== o || t[10] !== a || t[11] !== d) {
    let e = Bt(a);
    ((m = !0),
      (h = `relative mx-auto flex w-full max-w-3xl flex-1 shrink-0 flex-col gap-4 px-toolbar pt-4 pb-8 text-default`),
      t[16] !== o || t[17] !== a
        ? ((g = o && (0, $.jsx)(kt, { snapshot: a })), (t[16] = o), (t[17] = a), (t[18] = g))
        : (g = t[18]),
      (v = a.turns.map((t, o) => {
        if (o === 0 && bt(a)) return null;
        let s = e[o],
          c = t.items.flatMap(Lt),
          u = t.items.flatMap(It),
          f = t.items.flatMap(Pt),
          m = s.findIndex(Nt),
          h = o === p ? (0, Z.default)(s, jt) : -1;
        return (0, $.jsxs)(
          `section`,
          {
            "data-turn-key": `turn-${o}`,
            className: `flex flex-col gap-4`,
            children: [
              s.map((e, a) =>
                (0, $.jsxs)(
                  Q.Fragment,
                  {
                    children: [
                      a === m && c.length > 0 ? (0, $.jsx)(qt, { images: c }) : null,
                      e.type === `work`
                        ? (0, $.jsx)(Vt, {
                            durationMs: t.durationMs,
                            idPrefix: n,
                            imagePreviewsRef: l,
                            initialMessageId: r,
                            initialMessageRef: (
                              r.length > 0 ? e.items.some((e) => e.type === `message` && r === e.id) : a === h
                            )
                              ? i
                              : void 0,
                            items: e.items,
                            userImageAlt: d,
                          })
                        : (0, $.jsx)(Wt, {
                            id: `${n}${e.id}`,
                            imagePreviewsRef: l,
                            initialMessageRef: (r.length > 0 ? r === e.id : a === h) ? i : void 0,
                            isInitialUserMessage: a === h,
                            message: e.message,
                            userImageAlt: d,
                          }),
                    ],
                  },
                  a,
                ),
              ),
              m === -1 && c.length > 0 ? (0, $.jsx)(qt, { images: c }) : null,
              u.length > 0 ? (0, $.jsx)(Kt, { images: u }) : null,
              f.length > 0 ? (0, $.jsx)(Jt, { diffs: f }) : null,
            ],
          },
          o,
        );
      })),
      (t[5] = n),
      (t[6] = r),
      (t[7] = i),
      (t[8] = p),
      (t[9] = o),
      (t[10] = a),
      (t[11] = d),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g),
      (t[15] = v));
  } else ((m = t[12]), (h = t[13]), (g = t[14]), (v = t[15]));
  let y;
  return (
    t[19] !== m || t[20] !== h || t[21] !== g || t[22] !== v
      ? ((y = (0, $.jsxs)(`main`, {
          "data-thread-user-message-navigation-content": m,
          className: h,
          children: [g, v],
        })),
        (t[19] = m),
        (t[20] = h),
        (t[21] = g),
        (t[22] = v),
        (t[23] = y))
      : (y = t[23]),
    y
  );
}
function jt(e) {
  return e.type === `message` ? e.message.role === `user` : e.items.some(Mt);
}
function Mt(e) {
  return e.type === `message` && e.message.role === `user`;
}
function Nt(e) {
  return e.type === `message` && e.message.role === `assistant`;
}
function Pt(e) {
  return e.type === `fileChange` ? e.changes.map(Ft) : [];
}
function Ft(e) {
  let { path: t, diff: n } = e;
  return { fileName: t, text: n };
}
function It(e) {
  return e.type === `imageGeneration` ? [e.result] : [];
}
function Lt(e) {
  return e.type === `imageView` ? [e.url] : [];
}
function Rt(e) {
  return e.items.some(zt);
}
function zt(e) {
  return e.type === `userMessage`;
}
function Bt(e) {
  let t = 0;
  return e.turns.map((e, n) => {
    let r = [];
    for (let [i, a] of e.items.entries()) {
      if (a.type === `reasoning` || (a.type === `agentMessage` && a.phase === `commentary`)) {
        let e =
            a.type === `reasoning`
              ? { type: `reasoning`, id: `item-${n}-${i}`, text: a.summary }
              : { type: `commentary`, id: `item-${n}-${i}`, text: a.text },
          t = r.at(-1);
        t?.type === `work` ? t.items.push(e) : r.push({ type: `work`, items: [e] });
        continue;
      }
      if (a.type === `agentMessage`) {
        ((t += 1),
          r.push({
            type: `message`,
            id: `message-${t}`,
            message: { role: `assistant`, text: a.text, images: [] },
          }));
        continue;
      }
      a.type === `userMessage` &&
        ((t += 1),
        r.push({
          type: `message`,
          id: `message-${t}`,
          message: {
            role: `user`,
            text: a.content.flatMap((e) => (e.type === `text` ? [e.text] : [])).join(`
`),
            images: a.content.flatMap((e) => (e.type === `image` ? [e.url] : [])),
          },
        }));
    }
    let i = r.findIndex((e) => e.type === `work`),
      a = r.reduce((e, t, n) => (t.type === `work` ? n : e), -1);
    return (
      a > i &&
        r.splice(i, a - i + 1, {
          type: `work`,
          items: r
            .slice(i, a + 1)
            .flatMap((e) =>
              e.type === `work` ? e.items : [{ type: `message`, id: e.id, message: e.message }],
            ),
        }),
      r
    );
  });
}
function Vt(e) {
  let t = (0, X.c)(24),
    {
      durationMs: n,
      idPrefix: r,
      imagePreviewsRef: i,
      initialMessageId: a,
      initialMessageRef: o,
      items: s,
      userImageAlt: c,
    } = e,
    l;
  t[0] !== a || t[1] !== s
    ? ((l = () => !s.some((e) => e.type === `message` && e.message.role === `assistant` && a === e.id)),
      (t[0] = a),
      (t[1] = s),
      (t[2] = l))
    : (l = t[2]);
  let [u, d] = (0, Q.useState)(l),
    f;
  t[3] !== u || t[4] !== s ? ((f = u ? s.filter(Ut) : s), (t[3] = u), (t[4] = s), (t[5] = f)) : (f = t[5]);
  let p = f,
    m = s[(0, Z.default)(s, Ht)],
    h = n ?? null,
    g;
  t[6] === u ? (g = t[7]) : ((g = () => d(!u)), (t[6] = u), (t[7] = g));
  let _;
  t[8] !== u || t[9] !== s.length || t[10] !== h || t[11] !== g
    ? ((_ = (0, $.jsx)(ct, {
        collapsedMessageCount: s.length,
        workedDurationMs: h,
        workedForItem: null,
        isCollapsed: u,
        onToggle: g,
      })),
      (t[8] = u),
      (t[9] = s.length),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] !== r || t[14] !== i || t[15] !== a || t[16] !== o || t[17] !== m || t[18] !== c || t[19] !== p
    ? ((v =
        p.length > 0
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(it, {}),
                (0, $.jsx)(`div`, {
                  className: `flex flex-col gap-[var(--conversation-item-gap,16px)]`,
                  children: p.map((e, t) =>
                    e.type === `message`
                      ? (0, $.jsx)(
                          Wt,
                          {
                            id: `${r}${e.id}`,
                            imagePreviewsRef: i,
                            initialMessageRef: (a.length > 0 ? a === e.id : e === m) ? o : void 0,
                            isInitialUserMessage: e === m && o != null && a.length === 0,
                            message: e.message,
                            userImageAlt: c,
                          },
                          t,
                        )
                      : (0, $.jsx)(
                          be,
                          {
                            className: e.type === `reasoning` ? `text-secondary` : void 0,
                            children: (0, $.jsx)(Y, {
                              id: `${r}${e.id}`,
                              imagePreviewsRef: i,
                              message: { role: `assistant`, text: e.text, images: [] },
                            }),
                          },
                          t,
                        ),
                  ),
                }),
              ],
            })
          : null),
      (t[13] = r),
      (t[14] = i),
      (t[15] = a),
      (t[16] = o),
      (t[17] = m),
      (t[18] = c),
      (t[19] = p),
      (t[20] = v))
    : (v = t[20]);
  let y;
  return (
    t[21] !== _ || t[22] !== v
      ? ((y = (0, $.jsxs)(`div`, { children: [_, v] })), (t[21] = _), (t[22] = v), (t[23] = y))
      : (y = t[23]),
    y
  );
}
function Ht(e) {
  return e.type === `message` && e.message.role === `user`;
}
function Ut(e) {
  return e.type === `message` && e.message.role === `user`;
}
function Wt(e) {
  let t = (0, X.c)(34),
    {
      id: n,
      imagePreviewsRef: r,
      initialMessageRef: i,
      isInitialUserMessage: a,
      message: o,
      userImageAlt: s,
    } = e,
    l;
  t[0] !== o.role || t[1] !== o.text
    ? ((l = o.role === `user` ? m(o.text) : null), (t[0] = o.role), (t[1] = o.text), (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  t[3] !== u?.input || t[4] !== o.role || t[5] !== o.text
    ? ((d = o.role === `user` ? We(u?.input ?? o.text) : o.text),
      (t[3] = u?.input),
      (t[4] = o.role),
      (t[5] = o.text),
      (t[6] = d))
    : (d = t[6]);
  let f = d,
    p = o.role === `user` ? n : void 0,
    h = o.role === `user` ? `items-end justify-end gap-2` : `gap-1`,
    g = a && `scroll-mt-4`,
    _;
  t[7] !== h || t[8] !== g
    ? ((_ = E(`flex w-full min-w-0 flex-col`, h, g)), (t[7] = h), (t[8] = g), (t[9] = _))
    : (_ = t[9]);
  let v;
  t[10] !== o.images || t[11] !== s
    ? ((v = o.images.length > 0 ? (0, $.jsx)(Gt, { alt: s, images: o.images }) : null),
      (t[10] = o.images),
      (t[11] = s),
      (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] === u
    ? (y = t[14])
    : ((y =
        u == null
          ? null
          : (0, $.jsxs)(`div`, {
              className: `flex items-center gap-1 px-1 py-0.5 text-size-chat-sm text-codex-description`,
              children: [
                (0, $.jsx)(x, { className: `icon-2xs` }),
                (0, $.jsx)(c, {
                  id: `localConversation.codexDelegationUserMessage.app`,
                  defaultMessage: `Sent by {appName} from another chat`,
                  description: `Label shown above a user-message-style prompt delegated from another chat; {appName} is the product name, either ChatGPT or Codex`,
                  values: { appName: `ChatGPT` },
                }),
              ],
            })),
      (t[13] = u),
      (t[14] = y));
  let b = o.role === `user` || void 0,
    S =
      o.role === `user`
        ? `bg-text/5 max-w-[77%] min-w-0 overflow-hidden break-words rounded-2xl px-3 py-2 [&_.contain-inline-size]:[contain:initial]`
        : `group flex min-w-0 flex-col`,
    C;
  t[15] === S ? (C = t[16]) : ((C = E(S)), (t[15] = S), (t[16] = C));
  let w;
  t[17] !== f || t[18] !== n || t[19] !== r || t[20] !== o
    ? ((w =
        o.role === `user`
          ? (0, $.jsx)(nt, {
              text: f,
              children: (e) => (0, $.jsx)(Y, { id: n, imagePreviewsRef: r, message: { ...o, text: e } }),
            })
          : (0, $.jsx)(Y, { id: n, imagePreviewsRef: r, message: o })),
      (t[17] = f),
      (t[18] = n),
      (t[19] = r),
      (t[20] = o),
      (t[21] = w))
    : (w = t[21]);
  let T;
  t[22] !== C || t[23] !== w || t[24] !== b
    ? ((T = (0, $.jsx)(`div`, { "data-user-message-bubble": b, className: C, children: w })),
      (t[22] = C),
      (t[23] = w),
      (t[24] = b),
      (t[25] = T))
    : (T = t[25]);
  let D;
  return (
    t[26] !== n || t[27] !== i || t[28] !== T || t[29] !== p || t[30] !== _ || t[31] !== v || t[32] !== y
      ? ((D = (0, $.jsxs)(`article`, {
          id: n,
          ref: i,
          "data-content-search-unit-key": p,
          className: _,
          tabIndex: -1,
          children: [v, y, T],
        })),
        (t[26] = n),
        (t[27] = i),
        (t[28] = T),
        (t[29] = p),
        (t[30] = _),
        (t[31] = v),
        (t[32] = y),
        (t[33] = D))
      : (D = t[33]),
    D
  );
}
function Y(e) {
  let t = (0, X.c)(14),
    { id: n, imagePreviewsRef: r, message: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = { a: cn, code: un, img: (e) => (0, $.jsx)(Et, { ...e, imagePreviewsRef: r }), pre: Q.Fragment }),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = { ...je(), [Pe]: pn }), (t[2] = o)) : (o = t[2]);
  let s;
  t[3] !== i.role || t[4] !== i.text
    ? ((s = i.role === `user` ? We(m(i.text)?.input ?? i.text) : i.text),
      (t[3] = i.role),
      (t[4] = i.text),
      (t[5] = s))
    : (s = t[5]);
  let c = i.role === `user` ? et : void 0,
    l = i.role === `assistant`,
    u;
  t[6] !== s || t[7] !== c || t[8] !== l
    ? ((u = _e(s, c, l)), (t[6] = s), (t[7] = c), (t[8] = l), (t[9] = u))
    : (u = t[9]);
  let d;
  return (
    t[10] !== n || t[11] !== a || t[12] !== u
      ? ((d = (0, $.jsx)(Ee, {
          allowWideBlocks: !0,
          className: `[&>*:last-child]:mb-0 [&>ol:first-child]:mt-0 [&>ul:first-child]:mt-0`,
          components: a,
          externalResourcePolicy: `restricted`,
          directiveIdPrefix: n,
          directives: o,
          getDefaultComponents: ln,
          tokens: u,
        })),
        (t[10] = n),
        (t[11] = a),
        (t[12] = u),
        (t[13] = d))
      : (d = t[13]),
    d
  );
}
function Gt(e) {
  let t = (0, X.c)(7),
    { alt: n, images: r } = e,
    i;
  if (t[0] !== n || t[1] !== r) {
    let e;
    (t[3] === n ? (e = t[4]) : ((e = (e) => ({ alt: n, src: e })), (t[3] = n), (t[4] = e)),
      (i = r.map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i));
  } else i = t[2];
  let a;
  return (
    t[5] === i
      ? (a = t[6])
      : ((a = (0, $.jsx)(`div`, {
          className: `hide-scrollbar flex max-w-full flex-row-reverse self-end overflow-x-auto`,
          children: (0, $.jsx)(`div`, {
            className: `flex min-w-max items-end gap-2`,
            children: (0, $.jsx)(B, { images: i }),
          }),
        })),
        (t[5] = i),
        (t[6] = a)),
    a
  );
}
function Kt(e) {
  let t = (0, X.c)(7),
    { images: n } = e,
    r = _(),
    i;
  if (t[0] !== n || t[1] !== r) {
    let e;
    (t[3] === r
      ? (e = t[4])
      : ((e = (e, t) => ({
          alt: r.formatMessage(
            {
              id: `codex.localConversation.generatedImage`,
              defaultMessage: `Generated image {imageNumber}`,
              description: `Alt text for an assistant-generated image shown in the final response`,
            },
            { imageNumber: t + 1 },
          ),
          src: e,
        })),
        (t[3] = r),
        (t[4] = e)),
      (i = n.map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i));
  } else i = t[2];
  let a = i,
    o;
  return (
    t[5] === a
      ? (o = t[6])
      : ((o = (0, $.jsx)(`div`, {
          className: `hide-scrollbar flex max-w-full overflow-x-auto pb-1`,
          children: (0, $.jsx)(`div`, {
            className: `flex min-w-max items-end gap-2`,
            children: (0, $.jsx)(wt, { images: a }),
          }),
        })),
        (t[5] = a),
        (t[6] = o)),
    o
  );
}
function qt(e) {
  let t = (0, X.c)(18),
    { images: n } = e,
    r = _(),
    [i, a] = (0, Q.useState)(!1),
    o;
  if (t[0] !== n || t[1] !== r) {
    let e = r.formatMessage({
      id: `localConversation.imageView.previewAlt`,
      defaultMessage: `Inspected image`,
      description: `Alt text for an image inspected by the agent`,
    });
    ((o = n.map((t) => ({ alt: e, src: t }))), (t[0] = n), (t[1] = r), (t[2] = o));
  } else o = t[2];
  let s = o,
    l;
  t[3] !== i || t[4] !== s
    ? ((l = i
        ? (0, $.jsx)(ot, {
            className: `min-w-0`,
            children: (0, $.jsx)(`div`, {
              className: `hide-scrollbar flex max-w-full overflow-x-auto pb-1`,
              children: (0, $.jsx)(`div`, {
                className: `flex min-w-max gap-2`,
                children: (0, $.jsx)(B, { images: s }),
              }),
            }),
          })
        : null),
      (t[3] = i),
      (t[4] = s),
      (t[5] = l))
    : (l = t[5]);
  let d;
  t[6] === i ? (d = t[7]) : ((d = () => a(!i)), (t[6] = i), (t[7] = d));
  let f;
  t[8] !== i || t[9] !== d
    ? ((f = { expanded: i, onToggle: d }), (t[8] = i), (t[9] = d), (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(u, { className: `shrink-0 text-text/60`, asset: ie })), (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] === n.length
    ? (m = t[13])
    : ((m = (0, $.jsx)(`span`, {
        className: `block truncate text-text/40`,
        children: (0, $.jsx)(c, {
          id: `localConversation.imageView.summary`,
          defaultMessage: `{imageCount, plural, one {Viewed an image} other {Viewed # images}}`,
          description: `Summary label for images inspected by the agent`,
          values: { imageCount: n.length },
        }),
      })),
      (t[12] = n.length),
      (t[13] = m));
  let h;
  return (
    t[14] !== l || t[15] !== f || t[16] !== m
      ? ((h = (0, $.jsx)(Qe, { body: l, className: `overflow-clip`, disclosure: f, icon: p, summary: m })),
        (t[14] = l),
        (t[15] = f),
        (t[16] = m),
        (t[17] = h))
      : (h = t[17]),
    h
  );
}
function Jt(e) {
  let t = (0, X.c)(6),
    { diffs: n } = e,
    [r, i] = (0, Q.useState)(!1),
    [a, o] = (0, Q.useState)(nn),
    [s, l] = (0, Q.useState)(!1),
    d;
  if (t[0] !== n || t[1] !== a || t[2] !== r || t[3] !== s) {
    let e = n.map($t),
      f = e.reduce(Qt, 0),
      p = e.reduce(Zt, 0),
      m = e.filter(Xt),
      h = s ? m : m.slice(0, 3),
      g = m.length - h.length,
      _;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((_ = (0, $.jsx)(Ie, { children: (0, $.jsx)(u, { "aria-hidden": !1, asset: re }) })), (t[5] = _))
      : (_ = t[5]);
    let v = (0, $.jsx)(Ae, {
      icon: _,
      title:
        m.length === 1
          ? (0, $.jsx)(c, {
              id: `codex.sharedSnapshot.editedFile`,
              defaultMessage: `Edited {filename}`,
              description: `Completed shared-snapshot diff title when one file was edited`,
              values: { filename: m[0]?.fileName },
            })
          : (0, $.jsx)(c, {
              id: `codex.sharedSnapshot.editedFiles`,
              defaultMessage: `{fileCount, plural, one {Edited a file} other {Edited # files}}`,
              description: `Completed shared-snapshot diff title when files were edited`,
              values: { fileCount: Math.max(m.length, e.length) },
            }),
      subtitle: (0, $.jsx)(we, { className: `text-size-chat-sm`, linesAdded: f, linesRemoved: p }),
      trailing:
        m.length <= 1
          ? (0, $.jsx)(u, { className: E(`text-tertiary`, r && `rotate-180`), "aria-hidden": !1, asset: ee })
          : null,
    });
    ((d = (0, $.jsxs)(qe, {
      className: `mb-2 text-base`,
      children: [
        m.length > 1
          ? v
          : (0, $.jsx)(`button`, {
              type: `button`,
              "aria-expanded": r,
              className: `cursor-interaction hover:bg-background-primary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
              onClick: () => i(!r),
              children: v,
            }),
        m.length > 1
          ? (0, $.jsxs)(`div`, {
              className: `flex flex-col border-t border-default`,
              children: [
                h.map((e, t) =>
                  (0, $.jsxs)(
                    Q.Fragment,
                    {
                      children: [
                        (0, $.jsxs)(`button`, {
                          type: `button`,
                          "aria-expanded": a.has(t),
                          className: `flex min-h-9 cursor-interaction items-center gap-2 px-[var(--resource-card-row-padding-x)] py-1 text-start text-size-chat hover:bg-background-primary-ghost-hover/60 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
                          onClick: () =>
                            o((e) => {
                              let n = new Set(e);
                              return (n.delete(t) || n.add(t), n);
                            }),
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `min-w-0 flex-1 truncate text-secondary`,
                              children: e.fileName,
                            }),
                            (0, $.jsx)(we, { linesAdded: e.linesAdded, linesRemoved: e.linesRemoved }),
                          ],
                        }),
                        a.has(t) ? (0, $.jsx)(rn, { fileName: e.fileName, lines: e.lines }) : null,
                      ],
                    },
                    `${e.fileName}:${t}`,
                  ),
                ),
                g > 0
                  ? (0, $.jsx)(N, {
                      isExpanded: !1,
                      onClick: () => l(!0),
                      children: (0, $.jsx)(c, {
                        id: `codex.sharedSnapshot.showMoreFiles`,
                        defaultMessage: `{count, plural, one {Show # more file} other {Show # more files}}`,
                        description: `Button label that expands hidden changed-file rows in a shared-snapshot diff`,
                        values: { count: g },
                      }),
                    })
                  : s && m.length > 3
                    ? (0, $.jsx)(N, {
                        isExpanded: !0,
                        onClick: () => l(!1),
                        children: (0, $.jsx)(c, {
                          id: `codex.sharedSnapshot.collapseFiles`,
                          defaultMessage: `Collapse files`,
                          description: `Button label that collapses changed-file rows in a shared-snapshot diff`,
                        }),
                      })
                    : null,
              ],
            })
          : null,
        m.length <= 1 && r ? e.map(Yt) : null,
      ],
    })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = r),
      (t[3] = s),
      (t[4] = d));
  } else d = t[4];
  return d;
}
function Yt(e, t) {
  return (0, $.jsx)(rn, { fileName: e.fileName, lines: e.lines }, t);
}
function Xt(e) {
  return e.fileName != null;
}
function Zt(e, t) {
  return e + t.linesRemoved;
}
function Qt(e, t) {
  return e + t.linesAdded;
}
function $t(e) {
  let t = e.text.split(`
`);
  return { ...e, lines: t, linesAdded: t.filter(tn).length, linesRemoved: t.filter(en).length };
}
function en(e) {
  return e.startsWith(`-`) && !e.startsWith(`---`);
}
function tn(e) {
  return e.startsWith(`+`) && !e.startsWith(`+++`);
}
function nn() {
  return new Set();
}
function rn(e) {
  let t = (0, X.c)(17),
    { fileName: n, lines: r } = e,
    i = n ?? `file`,
    a;
  t[0] === r ? (a = t[1]) : ((a = r.some(sn)), (t[0] = r), (t[1] = a));
  let o = a,
    s;
  t[2] === r ? (s = t[3]) : ((s = r.filter(on)), (t[2] = r), (t[3] = s));
  let c = s.length,
    l;
  t[4] === r ? (l = t[5]) : ((l = r.filter(an)), (t[4] = r), (t[5] = l));
  let u = l.length,
    d = r.length - c - u,
    f = u + d,
    p = c + d,
    m = `@@ -${f === 0 ? 0 : 1},${f} +${p === 0 ? 0 : 1},${p} @@`,
    h = `diff --git a/${i} b/${i}`,
    g = `--- a/${i}`,
    _ = `+++ b/${i}`,
    v;
  t[6] !== o || t[7] !== m || t[8] !== r
    ? ((v = o ? r : [m, ...r]), (t[6] = o), (t[7] = m), (t[8] = r), (t[9] = v))
    : (v = t[9]);
  let y;
  t[10] !== h || t[11] !== g || t[12] !== _ || t[13] !== v
    ? ((y = [h, g, _, ...v]), (t[10] = h), (t[11] = g), (t[12] = _), (t[13] = v), (t[14] = y))
    : (y = t[14]);
  let b = y.join(`
`),
    x;
  return (
    t[15] === b
      ? (x = t[16])
      : ((x = (0, $.jsx)(Q.Suspense, { fallback: null, children: (0, $.jsx)(hn, { patch: b }) })),
        (t[15] = b),
        (t[16] = x)),
    x
  );
}
function an(e) {
  return e.startsWith(`-`);
}
function on(e) {
  return e.startsWith(`+`);
}
function sn(e) {
  return e.startsWith(`@@ `);
}
function cn(e) {
  let t = (0, X.c)(22),
    { children: n, href: r } = e;
  if (r == null) {
    let e;
    return (t[0] === n ? (e = t[1]) : ((e = (0, $.jsx)(`span`, { children: n })), (t[0] = n), (t[1] = e)), e);
  }
  let a, s, c, l, u;
  if (t[2] !== n || t[3] !== r) {
    u = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = O(r);
      if (!(S(e.path) != null || o(e.path))) {
        let e;
        t[9] === r ? (e = t[10]) : ((e = (0, $.jsx)(Ne, { href: r })), (t[9] = r), (t[10] = e));
        let i;
        t[11] !== n || t[12] !== e
          ? ((i = (0, $.jsx)(M, { icon: e, children: n })), (t[11] = n), (t[12] = e), (t[13] = i))
          : (i = t[13]);
        let a = i;
        try {
          if (!/^https:\/\/[^/\\]/i.test(r) || new URL(r).protocol !== `https:`) {
            u = a;
            break bb0;
          }
        } catch {
          u = a;
          break bb0;
        }
        let o;
        (t[14] !== r || t[15] !== a
          ? ((o = (0, $.jsx)(`a`, { href: r, target: `_blank`, rel: `noopener noreferrer`, children: a })),
            (t[14] = r),
            (t[15] = a),
            (t[16] = o))
          : (o = t[16]),
          (u = o));
        break bb0;
      }
      let d = h(n).trim(),
        f = S(d) != null || o(d) ? i(O(d)) : d,
        p = v(e).slice(e.path.length);
      ((a = M), (s = ne(e.path)), (c = f), (l = f.endsWith(p) ? null : p));
    }
    ((t[2] = n), (t[3] = r), (t[4] = a), (t[5] = s), (t[6] = c), (t[7] = l), (t[8] = u));
  } else ((a = t[4]), (s = t[5]), (c = t[6]), (l = t[7]), (u = t[8]));
  if (u !== Symbol.for(`react.early_return_sentinel`)) return u;
  let d;
  return (
    t[17] !== a || t[18] !== s || t[19] !== c || t[20] !== l
      ? ((d = (0, $.jsxs)(a, { icon: s, children: [c, l] })),
        (t[17] = a),
        (t[18] = s),
        (t[19] = c),
        (t[20] = l),
        (t[21] = d))
      : (d = t[21]),
    d
  );
}
function ln({ allowWideBlocks: e }) {
  return ge({ allowWideBlocks: e, mediaComponent: P });
}
function un(e) {
  let t = (0, X.c)(22),
    { children: n, className: r, inline: i } = e;
  if (i) {
    let e;
    t[0] === r ? (e = t[1]) : ((e = E(`inline-markdown`, r)), (t[0] = r), (t[1] = e));
    let i;
    return (
      t[2] !== n || t[3] !== e
        ? ((i = (0, $.jsx)(`span`, { className: e, "data-markdown-copy": `inline-code`, children: n })),
          (t[2] = n),
          (t[3] = e),
          (t[4] = i))
        : (i = t[4]),
      i
    );
  }
  let a, o, s, c, l, u, d;
  if (t[5] !== n || t[6] !== r) {
    let e = h(n);
    ((o = r?.split(` `).find(dn)?.slice(9)),
      (a = ye),
      (s = !0),
      (c = e),
      (l = !1),
      (u = !1),
      (d = te(e, o) ? `plaintext` : o),
      (t[5] = n),
      (t[6] = r),
      (t[7] = a),
      (t[8] = o),
      (t[9] = s),
      (t[10] = c),
      (t[11] = l),
      (t[12] = u),
      (t[13] = d));
  } else ((a = t[7]), (o = t[8]), (s = t[9]), (c = t[10]), (l = t[11]), (u = t[12]), (d = t[13]));
  let f = o !== `mermaid`,
    p;
  return (
    t[14] !== a || t[15] !== s || t[16] !== c || t[17] !== l || t[18] !== u || t[19] !== d || t[20] !== f
      ? ((p = (0, $.jsx)(a, {
          allowWideBlocks: s,
          content: c,
          forceCodeBlockWordWrap: l,
          isCodeFenceOpen: u,
          language: d,
          mermaidDiagram: fn,
          renderImmediately: f,
        })),
        (t[14] = a),
        (t[15] = s),
        (t[16] = c),
        (t[17] = l),
        (t[18] = u),
        (t[19] = d),
        (t[20] = f),
        (t[21] = p))
      : (p = t[21]),
    p
  );
}
function dn(e) {
  return e.startsWith(`language-`);
}
function fn(e) {
  let t = (0, X.c)(7),
    n = e.isCodeFenceOpen ?? !1,
    r;
  t[0] === n ? (r = t[1]) : ((r = (0, $.jsx)(ke, { isStreaming: n })), (t[0] = n), (t[1] = r));
  let i;
  t[2] === e ? (i = t[3]) : ((i = (0, $.jsx)(mn, { ...e, chatTheme: `default` })), (t[2] = e), (t[3] = i));
  let a;
  return (
    t[4] !== r || t[5] !== i
      ? ((a = (0, $.jsx)(Q.Suspense, { fallback: r, children: i })), (t[4] = r), (t[5] = i), (t[6] = a))
      : (a = t[6]),
    a
  );
}
var X, Z, Q, $, pn, mn, hn;
function gn() {
  return (gn = e(() => {
    ((X = k()),
      ue(),
      ce(),
      se(),
      b(),
      (Z = t(f(), 1)),
      w(),
      Ve(),
      (Q = de()),
      D(),
      De(),
      xe(),
      Fe(),
      tt(),
      d(),
      fe(),
      Je(),
      Be(),
      $e(),
      me(),
      C(),
      ae(),
      st(),
      Ze(),
      rt(),
      at(),
      Re(),
      Se(),
      Ke(),
      Ye(),
      Oe(),
      a(),
      g(),
      he(),
      Le(),
      He(),
      Ue(),
      Ge(),
      ze(),
      Dt(),
      xt(),
      ($ = A()),
      oe(),
      (pn = r(
        async () =>
          (
            await T(
              async () => {
                let { SharedSnapshotVisualization: e } = await import(
                  `./shared-snapshot-visualization-4165d356fb0f.js`
                );
                return { SharedSnapshotVisualization: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
              import.meta.url,
            )
          ).SharedSnapshotVisualization,
        { fallback: (0, $.jsx)(pe, {}), errorFallback: (0, $.jsx)(ve, {}) },
      )),
      (mn = (0, Q.lazy)(async () => ({
        default: (
          await T(
            async () => {
              let { MermaidDiagram: e } = await import(`./mermaid-diagram-a084a3ee2c7b.js`);
              return { MermaidDiagram: e };
            },
            __vite__mapDeps([12, 1, 2, 3, 4, 5, 13, 14, 15, 16, 8, 17]),
            import.meta.url,
          )
        ).MermaidDiagram,
      }))),
      (hn = (0, Q.lazy)(async () => {
        let { parsePatchFiles: e } = await T(
            async () => {
              let { parsePatchFiles: e } = await import(`./dist-abd340759e1c.js`);
              return { parsePatchFiles: e };
            },
            __vite__mapDeps([18, 4, 1, 2, 3, 5]),
            import.meta.url,
          ),
          { FileDiffPresentation: t } = await T(
            async () => {
              let { FileDiffPresentation: e } = await import(`./file-diff-presentation-2b85fdb739e2.js`);
              return { FileDiffPresentation: e };
            },
            __vite__mapDeps([19, 2, 1, 3, 20, 4, 5, 21, 22]),
            import.meta.url,
          );
        return {
          default: function ({ patch: n }) {
            let r = e(n)[0]?.files[0];
            return r == null
              ? (0, $.jsx)($.Fragment, {})
              : (0, $.jsx)(t, {
                  className: `composer-diff-simple-line relative overflow-clip border-t border-default [contain:content]`,
                  diffStyle: `unified`,
                  fileDiff: r,
                  hunkSeparators: `simple`,
                });
          },
        };
      })));
  }))();
}
export { Ot as n, gn as r, kt as t };
//# sourceMappingURL=static-thread-transcript-c04876a22450.js.map
