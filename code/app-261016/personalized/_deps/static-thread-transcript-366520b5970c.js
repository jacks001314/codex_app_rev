const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./shared-snapshot-visualization-fa8db97ae3b6.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./mcp-sandbox-rpc-251a9f57e376.js",
      "./visualization-sandbox-config-d6a8d5057bf3.js",
      "./dist-15e5c1229202.js",
      "./dist-c49309ceeb35.js",
      "./dist-ad7e2bb8433e.js",
      "./visualization-theme-bedd32a367a0.js",
      "./visualization-sandbox-runtime-b31cac3a956f.js",
      "./shared-snapshot-asset-reference-33214426cc96.js",
      "./shared-snapshot-asset-scope-470027341d3a.js",
      "./mermaid-diagram-974d0529b78b.js",
      "./chatgpt-mermaid-preview-actions-d9f3c972dbb9.js",
      "./preview-bc97f1c7a0a4.js",
      "./image-e9150f0dbb98.js",
      "./chunk-ZW26E7AF-c8fea83f7f61.js",
      "./chart-colors-7214911051c2.js",
      "./dist-6149645654f6.js",
      "./file-diff-presentation-76afb2ae7498.js",
      "./file-diff-presentation-eb82cf883deb.js",
      "./codex-diff-css-38be692bb624.js",
      "./register-pierre-themes-8ff08e47faf4.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  AI as r,
  Bj as i,
  DB as a,
  F3 as o,
  FBt as s,
  Fst as c,
  Gh as l,
  I3 as u,
  Idt as d,
  Kh as f,
  LNt as p,
  Lb as m,
  Lst as h,
  MI as g,
  MNt as _,
  Mw as v,
  NNt as y,
  OB as b,
  OFt as x,
  PBt as S,
  PI as C,
  Uk as w,
  Vk as ee,
  Vyt as te,
  XOt as ne,
  Xd as re,
  Yd as ie,
  ZSt as ae,
  aCt as oe,
  eB as se,
  eL as ce,
  jw as T,
  kFt as le,
  kI as ue,
  l2 as de,
  nL as E,
  okt as D,
  tB as fe,
  tL as pe,
  tkt as O,
  u2 as me,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $g as he,
  BLn as ge,
  Cs as _e,
  Fo as ve,
  Fw as ye,
  ILn as be,
  Io as xe,
  Is as Se,
  Ko as Ce,
  Li as k,
  Ls as we,
  Pw as Te,
  Qg as Ee,
  Ri as De,
  Sh as Oe,
  Ss as ke,
  ULn as Ae,
  Uur as je,
  VLn as Me,
  Vsr as Ne,
  WLn as Pe,
  Xo as Fe,
  Zo as Ie,
  as as A,
  bh as j,
  bur as Le,
  c1r as M,
  da as Re,
  du as ze,
  ec as Be,
  fCt as Ve,
  fa as He,
  is as N,
  jo as Ue,
  ko as We,
  l1r as Ge,
  pCt as Ke,
  qo as qe,
  tc as Je,
  uu as Ye,
  xur as Xe,
  zsr as Ze,
} from "./app-initial-ad16eaadf81f.js";
import { nh as Qe, th as $e, vf as et, yf as tt } from "./app-primary-3e00728c2a4c.js";
import { n as nt, t as rt } from "./collapsible-user-message-content-33e4642ea67c.js";
import { n as it, t as at } from "./conversation-gap-345d1fbb056a.js";
import { n as ot, t as st } from "./timeline-activity-body-68fa32c758c7.js";
import { n as ct, t as lt } from "./collapsed-turn-disclosure-e174a0d7195e.js";
import { i as ut, n as dt, r as ft, t as pt } from "./generated-image-tile-42ff8bafcbda.js";
import { a as mt, i as ht, r as P, t as gt } from "./shared-snapshot-asset-reference-33214426cc96.js";
import { i as _t, n as vt, r as yt, t as F } from "./shared-snapshot-asset-scope-470027341d3a.js";
import { a as bt, c as I, l as xt, t as L } from "./shared-codex-snapshot-23f1f3ddbc30.js";
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
    { assets: n, children: r, shareId: i, previewAssetSources: a, loadAsset: o } = e,
    s = (0, G.useContext)(c),
    l;
  t[0] !== s || t[1] !== i
    ? ((l = i != null && s?.getQueryData([`shared-codex-snapshot`, i])?.isAuthenticated === !0),
      (t[0] = s),
      (t[1] = i),
      (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = new WeakSet()), (t[3] = d)) : (d = t[3]);
  let f = (0, G.useRef)(d),
    [p] = (0, G.useState)(Ct),
    m,
    h;
  (t[4] === p
    ? ((m = t[5]), (h = t[6]))
    : ((m = () => () => p.dispose()), (h = [p]), (t[4] = p), (t[5] = m), (t[6] = h)),
    (0, G.useEffect)(m, h));
  let g = n ?? null,
    _ = i ?? null,
    v = o != null,
    y;
  t[7] === a ? (y = t[8]) : ((y = a == null ? void 0 : Object.fromEntries(a)), (t[7] = a), (t[8] = y));
  let b;
  t[9] !== g || t[10] !== _ || t[11] !== v || t[12] !== y
    ? ((b = { assets: g, shareId: _, usesAssetLoader: v, previewAssetSources: y }),
      (t[9] = g),
      (t[10] = _),
      (t[11] = v),
      (t[12] = y),
      (t[13] = b))
    : (b = t[13]);
  let x;
  t[14] !== p || t[15] !== u || t[16] !== o || t[17] !== i
    ? ((x = (e) => {
        if (!(e.target instanceof HTMLImageElement) || (!u && o == null && mt() == null) || i == null) return;
        let t = e.target,
          n = new URL(t.src),
          r = new URL(P({ assetId: ``, shareId: i }), window.location.href),
          a = o == null ? J.get(t.src) : p.getAssetId(t.src);
        if (
          (n.origin === r.origin &&
            n.pathname.startsWith(r.pathname) &&
            (a = n.pathname.slice(r.pathname.length)),
          a == null || a.length === 0)
        )
          return;
        let s = new URL(P({ assetId: a, shareId: i }), window.location.href).href;
        if (o != null) {
          p.recover({ assetId: a, assetUrl: s, image: t, loadAsset: o, setSource: (e) => H(t, e) }) &&
            e.stopPropagation();
          return;
        }
        if (f.current.has(t)) {
          q.delete(s);
          return;
        }
        (e.stopPropagation(), t.classList.add(`invisible`));
        let c = q.get(s);
        if (n.origin === r.origin && c != null) {
          H(t, c);
          return;
        }
        (f.current.add(t),
          yt(P({ assetId: a, shareId: i }), { headers: { Range: `bytes=0-0` } })
            .then(async (e) => {
              if (!e.ok) throw Error(`Shared thread image is unavailable`);
              (await e.body?.cancel(), q.set(s, e.url), J.set(e.url, a), H(t, e.url));
            })
            .catch(() => {
              (q.delete(s), t.dispatchEvent(new Event(`error`)));
            }));
      }),
      (t[14] = p),
      (t[15] = u),
      (t[16] = o),
      (t[17] = i),
      (t[18] = x))
    : (x = t[18]);
  let S;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (e) => {
        e.target instanceof HTMLImageElement &&
          (e.target.classList.remove(`invisible`), f.current.delete(e.target));
      }),
      (t[19] = S))
    : (S = t[19]);
  let C;
  t[20] !== r || t[21] !== x
    ? ((C = (0, K.jsx)(`span`, { className: `contents`, onErrorCapture: x, onLoadCapture: S, children: r })),
      (t[20] = r),
      (t[21] = x),
      (t[22] = C))
    : (C = t[22]);
  let w;
  return (
    t[23] !== C || t[24] !== b
      ? ((w = (0, K.jsx)(oe, { scope: F, value: b, children: C })), (t[23] = C), (t[24] = b), (t[25] = w))
      : (w = t[25]),
    w
  );
}
function Ct() {
  return new R();
}
function B(e) {
  let t = (0, W.c)(14),
    { images: r } = e,
    { shareId: i, previewAssetSources: a } = n(F).value,
    o,
    s;
  if (t[0] !== r || t[1] !== a || t[2] !== i) {
    ((s = []), (o = new Map()));
    for (let [e, t] of r.entries())
      U(t.src, i, a) != null && (o.set(e, s.length), s.push({ alt: t.alt, src: t.src }));
    ((t[0] = r), (t[1] = a), (t[2] = i), (t[3] = o), (t[4] = s));
  } else ((o = t[3]), (s = t[4]));
  let c;
  if (t[5] !== r || t[6] !== o || t[7] !== s) {
    let e;
    (t[9] !== o || t[10] !== s
      ? ((e = (e, t) => {
          let { alt: n, src: r } = e;
          return (0, K.jsx)(
            Tt,
            { alt: n, filename: n, previewIndex: o.get(t), previewItems: s, src: r },
            `${r}:${t}`,
          );
        }),
        (t[9] = o),
        (t[10] = s),
        (t[11] = e))
      : (e = t[11]),
      (c = r.map(e)),
      (t[5] = r),
      (t[6] = o),
      (t[7] = s),
      (t[8] = c));
  } else c = t[8];
  let l;
  return (
    t[12] === c ? (l = t[13]) : ((l = (0, K.jsx)(K.Fragment, { children: c })), (t[12] = c), (t[13] = l)),
    l
  );
}
function wt(e) {
  let t = (0, W.c)(31),
    { images: r } = e,
    { shareId: i, previewAssetSources: a, usesAssetLoader: o } = n(F).value,
    [s, c] = (0, G.useState)(null),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = new Set()), (t[0] = l)) : (l = t[0]);
  let [u, d] = (0, G.useState)(l),
    f,
    p,
    m,
    h;
  if (t[1] !== u || t[2] !== r || t[3] !== a || t[4] !== s || t[5] !== i || t[6] !== o) {
    let e;
    (t[11] !== a || t[12] !== i
      ? ((e = (e) => {
          let { alt: t, src: n } = e,
            r = U(n, i, a);
          return r == null ? [] : [{ alt: t, src: r }];
        }),
        (t[11] = a),
        (t[12] = i),
        (t[13] = e))
      : (e = t[13]),
      (p = r.flatMap(e)),
      (f = s == null ? null : (p[s] ?? null)),
      (m = f?.src ?? ``),
      o || (m = q.get(m) ?? m));
    let n;
    (t[14] === u
      ? (n = t[15])
      : ((n = (e, t) => {
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
                : (0, K.jsx)(pt, {
                    className: `w-full max-w-[400px]`,
                    "aria-label": n,
                    "aria-haspopup": `dialog`,
                    onClick: () => c(t),
                    children: (0, K.jsx)(ut, {
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
        (t[15] = n)),
      (h = p.map(n)),
      (t[1] = u),
      (t[2] = r),
      (t[3] = a),
      (t[4] = s),
      (t[5] = i),
      (t[6] = o),
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
        e || c(null);
      }),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] === s ? (y = t[18]) : ((y = s != null && s > 0 ? () => c(s - 1) : void 0), (t[17] = s), (t[18] = y));
  let b;
  t[19] !== s || t[20] !== p
    ? ((b = s != null && s + 1 < p.length ? () => c(s + 1) : void 0), (t[19] = s), (t[20] = p), (t[21] = b))
    : (b = t[21]);
  let x;
  t[22] !== m || t[23] !== g || t[24] !== _ || t[25] !== y || t[26] !== b
    ? ((x = (0, K.jsx)(ke, { src: m, alt: g, open: _, onOpenChange: v, onPreviousImage: y, onNextImage: b })),
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
    { shareId: r, previewAssetSources: i, usesAssetLoader: a } = n(F).value,
    [o, s] = (0, G.useState)(!1),
    c;
  t[0] !== i || t[1] !== e.previewItems || t[2] !== r
    ? ((c = () =>
        e.previewItems?.flatMap((e) => {
          let t = U(e.src, r, i);
          return t == null ? [] : [{ ...e, src: t }];
        })),
      (t[0] = i),
      (t[1] = e.previewItems),
      (t[2] = r),
      (t[3] = c))
    : (c = t[3]);
  let [l, u] = (0, G.useState)(c),
    d;
  t[4] !== i || t[5] !== e.src || t[6] !== r
    ? ((d = U(e.src, r, i)), (t[4] = i), (t[5] = e.src), (t[6] = r), (t[7] = d))
    : (d = t[7]);
  let f = d;
  if (f == null) {
    let n;
    return (
      t[8] === e.alt ? (n = t[9]) : ((n = (0, K.jsx)(N, { alt: e.alt, src: L })), (t[8] = e.alt), (t[9] = n)),
      n
    );
  }
  if (o) {
    let e;
    return (
      t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(V, { onRetry: () => s(!1) })), (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  let p;
  t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = () => s(!0)), (t[11] = p)) : (p = t[11]);
  let m;
  t[12] !== e || t[13] !== a
    ? ((m = () => {
        (u((e) => e?.map((e) => ({ ...e, src: a ? e.src : (q.get(e.src) ?? e.src) }))), e.onPreviewOpen?.());
      }),
      (t[12] = e),
      (t[13] = a),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== l || t[16] !== e || t[17] !== f || t[18] !== m
      ? ((h = (0, K.jsx)(`span`, {
          className: `contents`,
          onErrorCapture: p,
          children: (0, K.jsx)(k, { ...e, imageLoading: `lazy`, onPreviewOpen: m, previewItems: l, src: f }),
        })),
        (t[15] = l),
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
    { assets: r, shareId: i, previewAssetSources: a } = n(F).value,
    [o, s] = (0, G.useState)(!1),
    c;
  t[0] !== a || t[1] !== e.src || t[2] !== i
    ? ((c = e.src == null ? null : U(e.src, i, a)), (t[0] = a), (t[1] = e.src), (t[2] = i), (t[3] = c))
    : (c = t[3]);
  let l = c,
    u = e.src == null ? null : gt(e.src),
    d = u == null ? void 0 : r?.[u];
  if (l == null) {
    let n;
    return (t[4] === e ? (n = t[5]) : ((n = (0, K.jsx)(N, { ...e, src: L })), (t[4] = e), (t[5] = n)), n);
  }
  if (e.src != null && a?.[e.src] != null) {
    let n = e.alt ?? ``,
      r;
    return (
      t[6] !== l || t[7] !== n
        ? ((r = (0, K.jsx)(k, { alt: n, src: l, previewEnabled: !1, imageLoading: `lazy` })),
          (t[6] = l),
          (t[7] = n),
          (t[8] = r))
        : (r = t[8]),
      r
    );
  }
  if (o) {
    let e;
    return (
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(V, { onRetry: () => s(!1) })), (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  let f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = () => s(!0)), (t[10] = f)) : (f = t[10]);
  let p = d?.height,
    m = d?.width,
    h;
  return (
    t[11] !== e || t[12] !== l || t[13] !== p || t[14] !== m
      ? ((h = (0, K.jsx)(`span`, {
          className: `contents`,
          onErrorCapture: f,
          children: (0, K.jsx)(N, { ...e, height: p, src: l, width: m }),
        })),
        (t[11] = e),
        (t[12] = l),
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
    ? ((r = (0, K.jsx)(O, {
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
  let i = gt(e);
  return i == null ? null : new URL(P({ assetId: i, shareId: t }), window.location.href).href;
}
var W, G, K, q, J;
function Dt() {
  return (Dt = e(() => {
    ((W = S()),
      ft(),
      h(),
      ae(),
      (G = s()),
      ne(),
      _t(),
      De(),
      dt(),
      _e(),
      A(),
      i(),
      z(),
      bt(),
      ht(),
      vt(),
      (K = p()),
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
      ? ((h = (0, $.jsx)(Te, {
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
    a = I(r);
  if (!i && !a) return null;
  let o;
  t[0] === n ? (o = t[1]) : ((o = _(`text-sm text-secondary select-none`, n)), (t[0] = n), (t[1] = o));
  let s;
  t[2] === i
    ? (s = t[3])
    : ((s = i
        ? (0, $.jsx)(O, {
            id: `codex.sharedSnapshot.viewer.omittedFileChanges`,
            defaultMessage: `{count, plural, one {# file change was omitted} other {# file changes were omitted}} because the chat was too large`,
            description: `Notice shown to recipients of a shared Codex chat when complete file change entries were removed to fit the server's snapshot size limit. Messages remain in the shared chat.`,
            values: { count: i },
          })
        : (0, $.jsx)(O, {
            id: `codex.sharedSnapshot.omissionTranscriptNotice`,
            defaultMessage: `Some file changes were omitted due to the size of this conversation`,
            description: `Generated notice saved at the start of a shared chat, separate from the original conversation. Entire file changes were left out to fit the snapshot size limit; this is not a message authored by the original chat participants.`,
          })),
      (t[2] = i),
      (t[3] = s));
  let c;
  return (
    t[4] !== o || t[5] !== s
      ? ((c = (0, $.jsx)(`p`, { className: o, role: `note`, children: s })),
        (t[4] = o),
        (t[5] = s),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function At(e) {
  let t = (0, X.c)(24),
    { idPrefix: n, initialMessageId: r, initialMessageRef: i, snapshot: a, showOmissionNotice: o } = e,
    s = D(),
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
    _;
  if (t[5] !== n || t[6] !== r || t[7] !== i || t[8] !== p || t[9] !== o || t[10] !== a || t[11] !== d) {
    let e = Bt(a);
    ((m = !0),
      (h = `relative mx-auto flex w-full max-w-3xl flex-1 shrink-0 flex-col gap-4 px-toolbar pt-4 pb-8 text-default`),
      t[16] !== o || t[17] !== a
        ? ((g = o && (0, $.jsx)(kt, { snapshot: a })), (t[16] = o), (t[17] = a), (t[18] = g))
        : (g = t[18]),
      (_ = a.turns.map((t, o) => {
        if (o === 0 && I(a)) return null;
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
      (t[15] = _));
  } else ((m = t[12]), (h = t[13]), (g = t[14]), (_ = t[15]));
  let v;
  return (
    t[19] !== m || t[20] !== h || t[21] !== g || t[22] !== _
      ? ((v = (0, $.jsxs)(`main`, {
          "data-thread-user-message-navigation-content": m,
          className: h,
          children: [g, _],
        })),
        (t[19] = m),
        (t[20] = h),
        (t[21] = g),
        (t[22] = _),
        (t[23] = v))
      : (v = t[23]),
    v
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
    ? ((_ = (0, $.jsx)(lt, {
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
                (0, $.jsx)(at, {}),
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
                          Ee,
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
    c;
  t[0] !== o.role || t[1] !== o.text
    ? ((c = o.role === `user` ? te(o.text) : null), (t[0] = o.role), (t[1] = o.text), (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] !== l?.input || t[4] !== o.role || t[5] !== o.text
    ? ((u = o.role === `user` ? M(l?.input ?? o.text) : o.text),
      (t[3] = l?.input),
      (t[4] = o.role),
      (t[5] = o.text),
      (t[6] = u))
    : (u = t[6]);
  let d = u,
    f = o.role === `user` ? n : void 0,
    p = o.role === `user` ? `items-end justify-end gap-2` : `gap-1`,
    m = a && `scroll-mt-4`,
    h;
  t[7] !== p || t[8] !== m
    ? ((h = _(`flex w-full min-w-0 flex-col`, p, m)), (t[7] = p), (t[8] = m), (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] !== o.images || t[11] !== s
    ? ((g = o.images.length > 0 ? (0, $.jsx)(Gt, { alt: s, images: o.images }) : null),
      (t[10] = o.images),
      (t[11] = s),
      (t[12] = g))
    : (g = t[12]);
  let v;
  t[13] === l
    ? (v = t[14])
    : ((v =
        l == null
          ? null
          : (0, $.jsxs)(`div`, {
              className: `flex items-center gap-1 px-1 py-0.5 text-size-chat-sm text-codex-description`,
              children: [
                (0, $.jsx)(se, { className: `icon-2xs` }),
                (0, $.jsx)(O, {
                  id: `localConversation.codexDelegationUserMessage.app`,
                  defaultMessage: `Sent by {appName} from another chat`,
                  description: `Label shown above a user-message-style prompt delegated from another chat; {appName} is the product name, either ChatGPT or Codex`,
                  values: { appName: `ChatGPT` },
                }),
              ],
            })),
      (t[13] = l),
      (t[14] = v));
  let y = o.role === `user` || void 0,
    b =
      o.role === `user`
        ? `bg-text/5 max-w-[77%] min-w-0 overflow-hidden break-words rounded-2xl px-3 py-2 [&_.contain-inline-size]:[contain:initial]`
        : `group flex min-w-0 flex-col`,
    x;
  t[15] === b ? (x = t[16]) : ((x = _(b)), (t[15] = b), (t[16] = x));
  let S;
  t[17] !== d || t[18] !== n || t[19] !== r || t[20] !== o
    ? ((S =
        o.role === `user`
          ? (0, $.jsx)(rt, {
              text: d,
              textTone: `user-message`,
              children: (e) => (0, $.jsx)(Y, { id: n, imagePreviewsRef: r, message: { ...o, text: e } }),
            })
          : (0, $.jsx)(Y, { id: n, imagePreviewsRef: r, message: o })),
      (t[17] = d),
      (t[18] = n),
      (t[19] = r),
      (t[20] = o),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] !== x || t[23] !== S || t[24] !== y
    ? ((C = (0, $.jsx)(`div`, { "data-user-message-bubble": y, className: x, children: S })),
      (t[22] = x),
      (t[23] = S),
      (t[24] = y),
      (t[25] = C))
    : (C = t[25]);
  let w;
  return (
    t[26] !== n || t[27] !== i || t[28] !== C || t[29] !== f || t[30] !== h || t[31] !== g || t[32] !== v
      ? ((w = (0, $.jsxs)(`article`, {
          id: n,
          ref: i,
          "data-content-search-unit-key": f,
          className: h,
          tabIndex: -1,
          children: [g, v, C],
        })),
        (t[26] = n),
        (t[27] = i),
        (t[28] = C),
        (t[29] = f),
        (t[30] = h),
        (t[31] = g),
        (t[32] = v),
        (t[33] = w))
      : (w = t[33]),
    w
  );
}
function Y(e) {
  let t = (0, X.c)(10),
    { id: n, imagePreviewsRef: r, message: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = { a: cn, code: un, img: (e) => (0, $.jsx)(Et, { ...e, imagePreviewsRef: r }), pre: Q.Fragment }),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = { ...Re(), [Ze]: pn }), (t[2] = o)) : (o = t[2]);
  let s;
  t[3] !== i.role || t[4] !== i.text
    ? ((s = Xe(i.role === `user` ? M(te(i.text)?.input ?? i.text) : i.text, i.role === `user` ? et : void 0, {
        repairOrderedLists: i.role === `assistant`,
      })),
      (t[3] = i.role),
      (t[4] = i.text),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] !== n || t[7] !== a || t[8] !== s
      ? ((c = (0, $.jsx)(Ce, {
          allowWideBlocks: !0,
          className: `[&>*:last-child]:mb-0 [&>ol:first-child]:mt-0 [&>ul:first-child]:mt-0`,
          components: a,
          externalResourcePolicy: `restricted`,
          directiveIdPrefix: n,
          directives: o,
          getDefaultComponents: ln,
          tokens: s,
        })),
        (t[6] = n),
        (t[7] = a),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
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
    r = D(),
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
    r = D(),
    [i, o] = (0, Q.useState)(!1),
    s;
  if (t[0] !== n || t[1] !== r) {
    let e = r.formatMessage({
      id: `localConversation.imageView.previewAlt`,
      defaultMessage: `Inspected image`,
      description: `Alt text for an image inspected by the agent`,
    });
    ((s = n.map((t) => ({ alt: e, src: t }))), (t[0] = n), (t[1] = r), (t[2] = s));
  } else s = t[2];
  let c = s,
    l;
  t[3] !== i || t[4] !== c
    ? ((l = i
        ? (0, $.jsx)(st, {
            className: `min-w-0`,
            children: (0, $.jsx)(`div`, {
              className: `hide-scrollbar flex max-w-full overflow-x-auto pb-1`,
              children: (0, $.jsx)(`div`, {
                className: `flex min-w-max gap-2`,
                children: (0, $.jsx)(B, { images: c }),
              }),
            }),
          })
        : null),
      (t[3] = i),
      (t[4] = c),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === i ? (u = t[7]) : ((u = () => o(!i)), (t[6] = i), (t[7] = u));
  let d;
  t[8] !== i || t[9] !== u
    ? ((d = { expanded: i, onToggle: u }), (t[8] = i), (t[9] = u), (t[10] = d))
    : (d = t[10]);
  let p;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(a, { className: `shrink-0 text-text/60`, asset: f })), (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] === n.length
    ? (m = t[13])
    : ((m = (0, $.jsx)(`span`, {
        className: `block truncate text-text/40`,
        children: (0, $.jsx)(O, {
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
    t[14] !== l || t[15] !== d || t[16] !== m
      ? ((h = (0, $.jsx)($e, { body: l, className: `overflow-clip`, disclosure: d, icon: p, summary: m })),
        (t[14] = l),
        (t[15] = d),
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
    [o, s] = (0, Q.useState)(nn),
    [c, l] = (0, Q.useState)(!1),
    u;
  if (t[0] !== n || t[1] !== o || t[2] !== r || t[3] !== c) {
    let e = n.map($t),
      d = e.reduce(Qt, 0),
      f = e.reduce(Zt, 0),
      p = e.filter(Xt),
      m = c ? p : p.slice(0, 3),
      h = p.length - m.length,
      g;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((g = (0, $.jsx)(Me, { children: (0, $.jsx)(a, { "aria-hidden": !1, asset: re }) })), (t[5] = g))
      : (g = t[5]);
    let v = (0, $.jsx)(Ae, {
      icon: g,
      title:
        p.length === 1
          ? (0, $.jsx)(O, {
              id: `codex.sharedSnapshot.editedFile`,
              defaultMessage: `Edited {filename}`,
              description: `Completed shared-snapshot diff title when one file was edited`,
              values: { filename: p[0]?.fileName },
            })
          : (0, $.jsx)(O, {
              id: `codex.sharedSnapshot.editedFiles`,
              defaultMessage: `{fileCount, plural, one {Edited a file} other {Edited # files}}`,
              description: `Completed shared-snapshot diff title when files were edited`,
              values: { fileCount: Math.max(p.length, e.length) },
            }),
      subtitle: (0, $.jsx)(Ve, { className: `text-size-chat-sm`, linesAdded: d, linesRemoved: f }),
      trailing:
        p.length <= 1
          ? (0, $.jsx)(a, { className: _(`text-tertiary`, r && `rotate-180`), "aria-hidden": !1, asset: de })
          : null,
    });
    ((u = (0, $.jsxs)(be, {
      className: `mb-2 text-base`,
      children: [
        p.length > 1
          ? v
          : (0, $.jsx)(`button`, {
              type: `button`,
              "aria-expanded": r,
              className: `cursor-interaction hover:bg-background-primary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
              onClick: () => i(!r),
              children: v,
            }),
        p.length > 1
          ? (0, $.jsxs)(`div`, {
              className: `flex flex-col border-t border-default`,
              children: [
                m.map((e, t) =>
                  (0, $.jsxs)(
                    Q.Fragment,
                    {
                      children: [
                        (0, $.jsxs)(`button`, {
                          type: `button`,
                          "aria-expanded": o.has(t),
                          className: `flex min-h-9 cursor-interaction items-center gap-2 px-[var(--resource-card-row-padding-x)] py-1 text-start text-size-chat hover:bg-background-primary-ghost-hover/60 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
                          onClick: () =>
                            s((e) => {
                              let n = new Set(e);
                              return (n.delete(t) || n.add(t), n);
                            }),
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `min-w-0 flex-1 truncate text-secondary`,
                              children: e.fileName,
                            }),
                            (0, $.jsx)(Ve, { linesAdded: e.linesAdded, linesRemoved: e.linesRemoved }),
                          ],
                        }),
                        o.has(t) ? (0, $.jsx)(rn, { fileName: e.fileName, lines: e.lines }) : null,
                      ],
                    },
                    `${e.fileName}:${t}`,
                  ),
                ),
                h > 0
                  ? (0, $.jsx)(ge, {
                      isExpanded: !1,
                      onClick: () => l(!0),
                      children: (0, $.jsx)(O, {
                        id: `codex.sharedSnapshot.showMoreFiles`,
                        defaultMessage: `{count, plural, one {Show # more file} other {Show # more files}}`,
                        description: `Button label that expands hidden changed-file rows in a shared-snapshot diff`,
                        values: { count: h },
                      }),
                    })
                  : c && p.length > 3
                    ? (0, $.jsx)(ge, {
                        isExpanded: !0,
                        onClick: () => l(!1),
                        children: (0, $.jsx)(O, {
                          id: `codex.sharedSnapshot.collapseFiles`,
                          defaultMessage: `Collapse files`,
                          description: `Button label that collapses changed-file rows in a shared-snapshot diff`,
                        }),
                      })
                    : null,
              ],
            })
          : null,
        p.length <= 1 && r ? e.map(Yt) : null,
      ],
    })),
      (t[0] = n),
      (t[1] = o),
      (t[2] = r),
      (t[3] = c),
      (t[4] = u));
  } else u = t[4];
  return u;
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
    { children: n, href: i } = e;
  if (i == null) {
    let e;
    return (t[0] === n ? (e = t[1]) : ((e = (0, $.jsx)(`span`, { children: n })), (t[0] = n), (t[1] = e)), e);
  }
  let a, o, s, c, l;
  if (t[2] !== n || t[3] !== i) {
    l = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = E(i);
      if (!(ce(e.path) != null || C(e.path))) {
        let e;
        t[9] === i ? (e = t[10]) : ((e = (0, $.jsx)(Ye, { href: i })), (t[9] = i), (t[10] = e));
        let r;
        t[11] !== n || t[12] !== e
          ? ((r = (0, $.jsx)(j, { icon: e, children: n })), (t[11] = n), (t[12] = e), (t[13] = r))
          : (r = t[13]);
        let a = r;
        try {
          if (!/^https:\/\/[^/\\]/i.test(i) || new URL(i).protocol !== `https:`) {
            l = a;
            break bb0;
          }
        } catch {
          l = a;
          break bb0;
        }
        let o;
        (t[14] !== i || t[15] !== a
          ? ((o = (0, $.jsx)(`a`, { href: i, target: `_blank`, rel: `noopener noreferrer`, children: a })),
            (t[14] = i),
            (t[15] = a),
            (t[16] = o))
          : (o = t[16]),
          (l = o));
        break bb0;
      }
      let u = T(n).trim(),
        d = ce(u) != null || C(u) ? ue(E(u)) : u,
        f = r(e).slice(e.path.length);
      ((a = j), (o = ee(e.path)), (s = d), (c = d.endsWith(f) ? null : f));
    }
    ((t[2] = n), (t[3] = i), (t[4] = a), (t[5] = o), (t[6] = s), (t[7] = c), (t[8] = l));
  } else ((a = t[4]), (o = t[5]), (s = t[6]), (c = t[7]), (l = t[8]));
  if (l !== Symbol.for(`react.early_return_sentinel`)) return l;
  let u;
  return (
    t[17] !== a || t[18] !== o || t[19] !== s || t[20] !== c
      ? ((u = (0, $.jsxs)(a, { icon: o, children: [s, c] })),
        (t[17] = a),
        (t[18] = o),
        (t[19] = s),
        (t[20] = c),
        (t[21] = u))
      : (u = t[21]),
    u
  );
}
function ln({ allowWideBlocks: e }) {
  return Fe({ allowWideBlocks: e, mediaComponent: N });
}
function un(e) {
  let t = (0, X.c)(22),
    { children: n, className: r, inline: i } = e;
  if (i) {
    let e;
    t[0] === r ? (e = t[1]) : ((e = _(`inline-markdown`, r)), (t[0] = r), (t[1] = e));
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
    let e = T(n);
    ((o = r?.split(` `).find(dn)?.slice(9)),
      (a = Se),
      (s = !0),
      (c = e),
      (l = !1),
      (u = !1),
      (d = m(e, o) ? `plaintext` : o),
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
  t[0] === n ? (r = t[1]) : ((r = (0, $.jsx)(Be, { isStreaming: n })), (t[0] = n), (t[1] = r));
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
    ((X = S()),
      me(),
      l(),
      ie(),
      y(),
      (Z = t(d(), 1)),
      pe(),
      Ge(),
      (Q = s()),
      ne(),
      Je(),
      xe(),
      je(),
      nt(),
      b(),
      o(),
      Pe(),
      ze(),
      tt(),
      Ke(),
      w(),
      fe(),
      ct(),
      Qe(),
      it(),
      ot(),
      he(),
      we(),
      A(),
      He(),
      Ie(),
      v(),
      g(),
      qe(),
      Le(),
      Oe(),
      ye(),
      Ne(),
      Ue(),
      Dt(),
      xt(),
      ($ = p()),
      le(),
      (pn = u(
        async () =>
          (
            await x(
              async () => {
                let { SharedSnapshotVisualization: e } = await import(
                  `./shared-snapshot-visualization-fa8db97ae3b6.js`
                );
                return { SharedSnapshotVisualization: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
              import.meta.url,
            )
          ).SharedSnapshotVisualization,
        { fallback: (0, $.jsx)(We, {}), errorFallback: (0, $.jsx)(ve, {}) },
      )),
      (mn = (0, Q.lazy)(async () => ({
        default: (
          await x(
            async () => {
              let { MermaidDiagram: e } = await import(`./mermaid-diagram-974d0529b78b.js`);
              return { MermaidDiagram: e };
            },
            __vite__mapDeps([15, 1, 2, 3, 4, 5, 16, 17, 18, 19, 11, 20]),
            import.meta.url,
          )
        ).MermaidDiagram,
      }))),
      (hn = (0, Q.lazy)(async () => {
        let { parsePatchFiles: e } = await x(
            async () => {
              let { parsePatchFiles: e } = await import(`./dist-6149645654f6.js`);
              return { parsePatchFiles: e };
            },
            __vite__mapDeps([21, 4, 1, 2, 3, 5]),
            import.meta.url,
          ),
          { FileDiffPresentation: t } = await x(
            async () => {
              let { FileDiffPresentation: e } = await import(`./file-diff-presentation-76afb2ae7498.js`);
              return { FileDiffPresentation: e };
            },
            __vite__mapDeps([22, 2, 1, 3, 23, 4, 5, 24, 25]),
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
//# sourceMappingURL=static-thread-transcript-366520b5970c.js.map
