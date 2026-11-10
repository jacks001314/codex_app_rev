const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chatgpt-code-block-editor-12487f3ae6bf.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./chatgpt-code-block-editor-d00ca372ec72.js",
      "./dist-50497e5dc1f8.js",
      "./dist-c49309ceeb35.js",
      "./dist-fbd30d85c8f5.js",
      "./text-file-editor-search-panel-ab7444d105ea.js",
      "./text-file-editor-search-panel-875fcdb810ae.css",
      "./chatgpt-code-block-editor-theme-d17565c90d9d.js",
      "./chatgpt-code-block-highlighting-72144295f264.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./languages-6665b0380ca0.js",
      "./preview-db72c692612f.js",
      "./preview-6b6855feea38.js",
      "./image-bad1bfca04dc.js",
      "./chunk-ZW26E7AF-c8fea83f7f61.js",
      "./visualization-theme-bedd32a367a0.js",
      "./chart-colors-7214911051c2.js",
      "./entry-e75df665957c.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  A8 as r,
  B4 as i,
  BE as a,
  BU as o,
  Brt as s,
  Cot as c,
  Dz as l,
  Fw as u,
  HE as d,
  Hq as f,
  IDt as p,
  Irt as m,
  Ixt as h,
  JR as g,
  OA as _,
  Pxt as v,
  Qb as y,
  RE as b,
  Rnt as x,
  SD as S,
  TJ as C,
  UE as w,
  VDt as ee,
  VE as T,
  Vxt as E,
  YR as D,
  Zb as O,
  _Mt as k,
  bB as A,
  bz as j,
  cz as M,
  fPt as N,
  gMt as P,
  hot as te,
  i3 as F,
  iB as I,
  iO as L,
  jDt as R,
  kA as z,
  kz as B,
  lMt as V,
  lot as H,
  mZ as ne,
  nH as re,
  ob as ie,
  pPt as ae,
  pZ as oe,
  r3 as se,
  rB as ce,
  rO as le,
  sb as U,
  sz as ue,
  t3 as W,
  tH as de,
  vzt as G,
  wot as K,
  xB as fe,
  xMt as q,
  xz as J,
  yD as pe,
  yzt as Y,
  z4 as me,
  zU as X,
  zxt as he,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Rn as ge,
  AUn as _e,
  Cwr as ve,
  DPn as ye,
  EPn as be,
  Eo as xe,
  HCn as Se,
  Js as Ce,
  Ms as we,
  Nl as Te,
  Pl as Ee,
  QDr as De,
  QRn as Oe,
  WCn as ke,
  XDr as Ae,
  XRn as je,
  Xs as Me,
  Ymr as Ne,
  Ys as Pe,
  ZRn as Fe,
  _u as Ie,
  dH as Le,
  eDr as Re,
  ehr as ze,
  ezn as Be,
  gu as Ve,
  gwr as He,
  hA as Ue,
  js as We,
  mA as Ge,
  nDr as Ke,
  oDr as qe,
  pZn as Je,
  qs as Ye,
  uH as Xe,
  wo as Ze,
  xUn as Qe,
  yVn as $e,
  yjn as et,
} from "./app-initial-5851df3f6cb1.js";
import { n as tt, r as nt } from "./dist-c49309ceeb35.js";
import {
  ai as rt,
  ci as it,
  ii as at,
  li as ot,
  ni as st,
  oi as ct,
  ri as lt,
  si as ut,
  ti as dt,
} from "./app-primary-fe8a450b3b04.js";
import { n as ft, t as pt } from "./inline-1d98feb8d7b7.js";
import { n as mt, t as ht } from "./code-execution-account-policy-dfe8d762999e.js";
import { l as gt, u as _t } from "./visualization-sandbox-config-193a3a874c91.js";
import { n as vt, t as yt } from "./chatgpt-code-block-highlighting-72144295f264.js";
import { i as bt, n as xt, r as St, t as Ct } from "./languages-6665b0380ca0.js";
import { n as wt, t as Tt } from "./document-card-dfdd2b348ec9.js";
import { i as Et, n as Dt, r as Ot, t as kt } from "./chatgpt-mermaid-preview-actions-e5e94205d584.js";
function At(e) {
  let t = (0, jt.c)(18),
    { document: r } = e,
    i = h(He),
    a = he(rt, r),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Mt.jsx)(f, { className: `text-info` })), (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] !== r || t[2] !== a || t[3] !== i
    ? ((s =
        a == null
          ? null
          : (0, Mt.jsx)(n, {
              color: `primary`,
              size: `toolbar`,
              onClick: () => {
                let e = i.get(ct, r);
                e != null && (i.set(at, a.document, { before: a.before, after: e }), st(i, a.document));
              },
              children: (0, Mt.jsx)(p, {
                id: `chatgpt.latex.reviewConversationRevision`,
                defaultMessage: `Review revision`,
                description: `Offers a LaTeX document returned in chat as a proposed replacement for the document used in that request, requiring review before applying it.`,
              }),
            })),
      (t[1] = r),
      (t[2] = a),
      (t[3] = i),
      (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] !== r || t[6] !== i ? ((c = () => st(i, r)), (t[5] = r), (t[6] = i), (t[7] = c)) : (c = t[7]);
  let l;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Mt.jsx)(p, {
        id: `chatgpt.latex.openDocument`,
        defaultMessage: `Open document`,
        description: `Opens a generated LaTeX document in an editor beside the current ChatGPT conversation.`,
      })),
      (t[8] = l))
    : (l = t[8]);
  let u;
  t[9] === c
    ? (u = t[10])
    : ((u = (0, Mt.jsx)(n, { color: `secondary`, size: `toolbar`, onClick: c, children: l })),
      (t[9] = c),
      (t[10] = u));
  let d;
  t[11] !== s || t[12] !== u
    ? ((d = (0, Mt.jsxs)(`div`, { className: `flex flex-wrap gap-2`, children: [s, u] })),
      (t[11] = s),
      (t[12] = u),
      (t[13] = d))
    : (d = t[13]);
  let m;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Mt.jsx)(`p`, {
        className: `px-4 pb-4 text-sm text-secondary select-none`,
        children: (0, Mt.jsx)(p, {
          id: `chatgpt.latex.documentCard.description`,
          defaultMessage: `LaTeX document · Edit, preview, and download PDF`,
          description: `Description of a LaTeX document card in a ChatGPT conversation. LaTeX and PDF are format names.`,
        }),
      })),
      (t[14] = m))
    : (m = t[14]);
  let g;
  return (
    t[15] !== r.title || t[16] !== d
      ? ((g = (0, Mt.jsx)(Tt, { icon: o, title: r.title, actions: d, children: m })),
        (t[15] = r.title),
        (t[16] = d),
        (t[17] = g))
      : (g = t[17]),
    g
  );
}
var jt, Mt;
function Nt() {
  return (Nt = e(() => {
    ((jt = G()), v(), R(), W(), C(), ve(), wt(), lt(), dt(), (Mt = q()));
  }))();
}
function Pt(e, t, n) {
  if (n.length === 0) return;
  let r = e[e.length - 1];
  r?.className === t ? (r.text += n) : e.push({ className: t, text: n });
}
function Ft(e) {
  return e.length === 0 ? [] : [{ className: null, text: e }];
}
function It(e, t, n, r) {
  if (n >= r) return [];
  let i = [],
    a = n;
  return (
    tt(
      t,
      yt,
      (t, n, r) => {
        i.length > zt || (t > a && Pt(i, null, e.slice(a, t)), n > t && Pt(i, r, e.slice(t, n)), (a = n));
      },
      n,
      r,
    ),
    i.length > zt
      ? Ft(e.slice(n, r))
      : (a < r && Pt(i, null, e.slice(a, r)), i.length > zt ? Ft(e.slice(n, r)) : i)
  );
}
var Lt, Rt, zt, Bt;
function Vt() {
  return (Vt = e(() => {
    (nt(),
      vt(),
      bt(),
      (Lt = 500),
      (Rt = 65536),
      (zt = 1e4),
      (Bt = class {
        code = ``;
        language;
        languageSupport = null;
        languageRequestId = 0;
        parsedCode = null;
        renderState = { code: ``, highlightedSegments: [], pending: !0 };
        languagePending = !1;
        timeout = null;
        listeners = new Set();
        getSnapshot = () => this.renderState;
        subscribe = (e) => (
          this.listeners.add(e),
          () => {
            (this.listeners.delete(e),
              this.listeners.size === 0 &&
                (this.cancelScheduledHighlight(), this.languageRequestId++, (this.language = void 0)));
          }
        );
        setInput(e, t, n) {
          let r = t !== this.language;
          if (((this.code = e), (this.language = t), r)) {
            ((this.parsedCode = null),
              this.cancelScheduledHighlight(),
              (this.languageSupport = t == null ? null : xt(t)));
            let e = ++this.languageRequestId;
            ((this.languagePending = t != null && this.languageSupport == null),
              t != null &&
                this.languageSupport == null &&
                Ct(t).then((t) => {
                  e === this.languageRequestId &&
                    ((this.languageSupport = t), (this.languagePending = !1), this.highlightAllCode());
                }),
              this.highlightAllCode());
            return;
          }
          this.parser == null ||
          !n ||
          !e.startsWith(this.renderState.code) ||
          this.renderState.code.length === 0
            ? this.highlightAllCode()
            : e !== this.renderState.code &&
              this.timeout == null &&
              (this.timeout = setTimeout(() => {
                ((this.timeout = null), this.flushStreamingHighlights());
              }, Lt));
        }
        get parser() {
          return this.code.length <= Rt ? (this.languageSupport?.language.parser ?? null) : null;
        }
        cancelScheduledHighlight() {
          this.timeout != null && (clearTimeout(this.timeout), (this.timeout = null));
        }
        updateRenderState(e) {
          this.renderState = { code: this.code, highlightedSegments: e, pending: this.languagePending };
          for (let e of this.listeners) e();
        }
        highlightAllCode() {
          this.cancelScheduledHighlight();
          let e = this.parser;
          if (e == null) {
            ((this.parsedCode = null), this.updateRenderState(Ft(this.code)));
            return;
          }
          let t = e.parse(this.code);
          ((this.parsedCode = this.code), this.updateRenderState(It(this.code, t, 0, this.code.length)));
        }
        flushStreamingHighlights() {
          let e = this.parser,
            t = this.code,
            n = this.renderState.code.length;
          if (e == null || t.length <= n) {
            this.highlightAllCode();
            return;
          }
          let r = e.parse(t),
            i = this.parsedCode != null && t.startsWith(this.parsedCode);
          if (((this.parsedCode = t), !i || n === 0)) {
            this.updateRenderState(It(t, r, 0, t.length));
            return;
          }
          let a = this.renderState.highlightedSegments.map((e) => ({ ...e }));
          for (let e of It(t, r, n, t.length))
            if ((Pt(a, e.className, e.text), a.length > zt)) {
              this.updateRenderState(Ft(t));
              return;
            }
          this.updateRenderState(a);
        }
      }));
  }))();
}
function Ht(e) {
  let t = (0, Gt.c)(35),
    { className: n, code: r, language: i, isStreaming: a, isFullscreen: o, wrapLines: s } = e,
    c = a !== void 0 && a,
    l = o !== void 0 && o,
    u = s !== void 0 && s,
    [d] = (0, Kt.useState)(Wt),
    f = (0, Kt.useSyncExternalStore)(d.subscribe, d.getSnapshot, d.getSnapshot),
    p,
    m;
  (t[0] !== r || t[1] !== d || t[2] !== c || t[3] !== i
    ? ((p = () => {
        d.setInput(r, i ?? null, c);
      }),
      (m = [r, d, c, i]),
      (t[0] = r),
      (t[1] = d),
      (t[2] = c),
      (t[3] = i),
      (t[4] = p),
      (t[5] = m))
    : ((p = t[4]), (m = t[5])),
    (0, Kt.useEffect)(p, m));
  let h;
  t[6] !== r || t[7] !== f.code || t[8] !== f.highlightedSegments
    ? ((h = r.startsWith(f.code) ? f.highlightedSegments : []),
      (t[6] = r),
      (t[7] = f.code),
      (t[8] = f.highlightedSegments),
      (t[9] = h))
    : (h = t[9]);
  let g = h,
    _;
  t[10] !== r || t[11] !== f.code
    ? ((_ = r.startsWith(f.code) ? r.slice(f.code.length) : r), (t[10] = r), (t[11] = f.code), (t[12] = _))
    : (_ = t[12]);
  let v = _,
    y;
  t[13] === n
    ? (y = t[14])
    : ((y = P(`relative z-0 flex max-w-full`, We.Viewer, n)), (t[13] = n), (t[14] = y));
  let b = f.pending || f.code !== r ? `` : void 0,
    x = u ? `overflow-x-hidden` : `overflow-x-auto`,
    S;
  t[15] === x
    ? (S = t[16])
    : ((S = P(`chatgpt-code-scrollport flex w-full items-stretch overscroll-x-contain`, We.Scrollport, x)),
      (t[15] = x),
      (t[16] = S));
  let C = l ? `pt-3` : `pt-0`,
    w = u ? `min-w-0 whitespace-pre-wrap wrap-anywhere` : `min-w-max whitespace-pre`,
    ee;
  t[17] !== C || t[18] !== w
    ? ((ee = P(
        `m-0 flex-1 cursor-text px-4 pb-3 font-mono text-size-code text-default md:px-5`,
        We.ViewerContent,
        C,
        w,
      )),
      (t[17] = C),
      (t[18] = w),
      (t[19] = ee))
    : (ee = t[19]);
  let T;
  t[20] === g ? (T = t[21]) : ((T = g.map(Ut)), (t[20] = g), (t[21] = T));
  let E;
  t[22] !== T || t[23] !== v
    ? ((E = (0, qt.jsxs)(`code`, { children: [T, v] })), (t[22] = T), (t[23] = v), (t[24] = E))
    : (E = t[24]);
  let D;
  t[25] !== ee || t[26] !== E
    ? ((D = (0, qt.jsx)(`pre`, { className: ee, children: E })), (t[25] = ee), (t[26] = E), (t[27] = D))
    : (D = t[27]);
  let O;
  t[28] !== S || t[29] !== D
    ? ((O = (0, qt.jsx)(`div`, { className: S, children: D })), (t[28] = S), (t[29] = D), (t[30] = O))
    : (O = t[30]);
  let k;
  return (
    t[31] !== O || t[32] !== y || t[33] !== b
      ? ((k = (0, qt.jsx)(`div`, { className: y, dir: `ltr`, "data-search-result-pending": b, children: O })),
        (t[31] = O),
        (t[32] = y),
        (t[33] = b),
        (t[34] = k))
      : (k = t[34]),
    k
  );
}
function Ut(e, t) {
  return (0, qt.jsx)(`span`, { className: e.className ?? void 0, children: e.text }, t);
}
function Wt() {
  return new Bt();
}
var Gt, Kt, qt;
function Jt() {
  return (Jt = e(() => {
    ((Gt = G()), k(), (Kt = Y()), Vt(), we(), (qt = q()));
  }))();
}
function Yt(e) {
  let t = (0, Qt.c)(72),
    {
      className: n,
      autoFocus: r,
      code: i,
      language: a,
      isFullscreen: o,
      isReadonly: s,
      isStreaming: c,
      isPreviewing: l,
      useFixedInlineHeight: u,
      wrapLines: d,
      editorRef: f,
      editorStateRef: p,
      onChange: m,
      onBlur: h,
    } = e,
    g = r === void 0 || r,
    _ = ee(),
    v = D(),
    y = (0, Z.useRef)(null),
    b = (0, Z.useRef)(!0),
    x = (0, Z.useRef)(c),
    S = (0, Z.useRef)(i),
    C = (0, Z.useRef)(!1),
    w = (0, Z.useRef)(null),
    T = (0, Z.useRef)(null),
    [E, O] = (0, Z.useState)(null),
    [k, A] = (0, Z.useState)(!1);
  !c && (E != null || k) && (O(null), A(!1));
  let j = E != null && E !== i && !k,
    M;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = function () {
        ((b.current = !0), (C.current = !1), (T.current = null));
      }),
      (t[0] = M))
    : (M = t[0]);
  let N = M,
    te;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = function () {
        (w.current != null && (window.cancelAnimationFrame(w.current), (w.current = null)),
          (T.current = null));
      }),
      (t[1] = te))
    : (te = t[1]);
  let F = te,
    I;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = function () {
        let e = y.current;
        return e == null
          ? (N(), !0)
          : Zt(e)
            ? (C.current && ((e.scrollTop = Xt(e)), F()), N(), !0)
            : ((b.current = !1), !1);
      }),
      (t[2] = I))
    : (I = t[2]);
  let L = I,
    R;
  t[3] === i
    ? (R = t[4])
    : ((R = function () {
        L() ? (O(null), A(!1)) : O((e) => e ?? i);
      }),
      (t[3] = i),
      (t[4] = R));
  let z = R,
    B;
  t[5] === z
    ? (B = t[6])
    : ((B = function () {
        if (w.current != null) return;
        function e(t) {
          w.current = null;
          let n = y.current;
          if (n == null || !C.current) {
            T.current = null;
            return;
          }
          let r = Xt(n),
            i = r - n.scrollTop;
          if (Zt(n)) {
            ((n.scrollTop = r), z());
            return;
          }
          let a = T.current ?? t - 16,
            o = Math.min(rn, Math.max(0, t - a));
          T.current = t;
          let s = i * (1 - Math.exp(-o / nn)),
            c = Math.sign(i) * Math.min(Math.abs(i), 1);
          ((n.scrollTop += Math.abs(s) < 1 ? c : s), (w.current = window.requestAnimationFrame(e)));
        }
        w.current = window.requestAnimationFrame(e);
      }),
      (t[5] = z),
      (t[6] = B));
  let V = B,
    H;
  t[7] !== v || t[8] !== V
    ? ((H = function () {
        let e = y.current;
        if (e != null && w.current == null) {
          if (v) {
            ((e.scrollTop = Xt(e)), N());
            return;
          }
          V();
        }
      }),
      (t[7] = v),
      (t[8] = V),
      (t[9] = H))
    : (H = t[9]);
  let ne = H,
    re;
  t[10] === z
    ? (re = t[11])
    : ((re = function () {
        (A(!1), (C.current = !1), F(), z());
      }),
      (t[10] = z),
      (t[11] = re));
  let ie = re,
    ae;
  t[12] !== z || t[13] !== ne
    ? ((ae = function () {
        y.current != null && (A(!0), (C.current = !0), F(), ne(), z());
      }),
      (t[12] = z),
      (t[13] = ne),
      (t[14] = ae))
    : (ae = t[14]);
  let oe = ae,
    se;
  t[15] !== i || t[16] !== c || t[17] !== ne
    ? ((se = () => {
        let e = x.current,
          t = S.current !== i;
        if (((x.current = c), (S.current = i), !c)) {
          let n = y.current;
          (n != null && e && (C.current || (t && b.current)) && (n.scrollTop = Xt(n)), F(), N());
          return;
        }
        let n = y.current;
        if (n == null) {
          (N(), F());
          return;
        }
        (C.current ? ne() : (F(), t && b.current && (n.scrollTop = n.scrollHeight)), L());
      }),
      (t[15] = i),
      (t[16] = c),
      (t[17] = ne),
      (t[18] = se))
    : (se = t[18]);
  let ce = (0, Z.useEffectEvent)(se),
    le = (0, Z.useEffectEvent)(F),
    U;
  t[19] === ce
    ? (U = t[20])
    : ((U = () => {
        ce();
      }),
      (t[19] = ce),
      (t[20] = U));
  let ue;
  (t[21] !== i || t[22] !== c ? ((ue = [i, c]), (t[21] = i), (t[22] = c), (t[23] = ue)) : (ue = t[23]),
    (0, Z.useLayoutEffect)(U, ue));
  let W;
  t[24] === le
    ? (W = t[25])
    : ((W = () => () => {
        le();
      }),
      (t[24] = le),
      (t[25] = W));
  let de;
  (t[26] === Symbol.for(`react.memo_cache_sentinel`) ? ((de = []), (t[26] = de)) : (de = t[26]),
    (0, Z.useLayoutEffect)(W, de));
  let G;
  t[27] !== i || t[28] !== o || t[29] !== c || t[30] !== a || t[31] !== d
    ? ((G = (0, $t.jsx)(Ht, { code: i, language: a, isStreaming: c, isFullscreen: o, wrapLines: d })),
      (t[27] = i),
      (t[28] = o),
      (t[29] = c),
      (t[30] = a),
      (t[31] = d),
      (t[32] = G))
    : (G = t[32]);
  let K = G,
    fe = o && `flex h-full min-h-0 w-full flex-col`,
    q = !o && u && `[container-type:inline-size]`,
    J;
  t[33] !== fe || t[34] !== q
    ? ((J = P(`relative`, fe, q)), (t[33] = fe), (t[34] = q), (t[35] = J))
    : (J = t[35]);
  let pe = o && `flex h-full min-h-0 w-full flex-col overflow-y-auto`,
    Y = !o && l && `absolute inset-0 overflow-hidden`,
    me = !o && u && We.InlineCodePane,
    X = !o && u && `w-full overflow-x-hidden`,
    he = o && !l && `mx-auto grow`,
    ge;
  t[36] !== n || t[37] !== pe || t[38] !== Y || t[39] !== me || t[40] !== X || t[41] !== he
    ? ((ge = P(pe, Y, me, X, he, n)),
      (t[36] = n),
      (t[37] = pe),
      (t[38] = Y),
      (t[39] = me),
      (t[40] = X),
      (t[41] = he),
      (t[42] = ge))
    : (ge = t[42]);
  let _e = c ? ie : void 0,
    ve = c ? z : void 0,
    ye = c ? ie : void 0,
    be = c ? ie : void 0,
    xe;
  t[43] !== g ||
  t[44] !== i ||
  t[45] !== f ||
  t[46] !== p ||
  t[47] !== o ||
  t[48] !== s ||
  t[49] !== a ||
  t[50] !== h ||
  t[51] !== m ||
  t[52] !== K ||
  t[53] !== d
    ? ((xe = s
        ? K
        : (0, $t.jsx)(Z.Suspense, {
            fallback: (0, $t.jsxs)($t.Fragment, {
              children: [(0, $t.jsx)(`span`, { hidden: !0, "data-search-result-pending": !0 }), K],
            }),
            children: (0, $t.jsx)(en, {
              ref: f,
              className: o ? `h-full` : void 0,
              autoFocus: g,
              code: i,
              language: a,
              editorStateRef: p,
              wrapLines: d,
              onChange: m,
              onBlur: h,
            }),
          })),
      (t[43] = g),
      (t[44] = i),
      (t[45] = f),
      (t[46] = p),
      (t[47] = o),
      (t[48] = s),
      (t[49] = a),
      (t[50] = h),
      (t[51] = m),
      (t[52] = K),
      (t[53] = d),
      (t[54] = xe))
    : (xe = t[54]);
  let Se;
  t[55] !== ge || t[56] !== _e || t[57] !== ve || t[58] !== ye || t[59] !== be || t[60] !== xe
    ? ((Se = (0, $t.jsx)(`div`, {
        ref: y,
        className: ge,
        onPointerDown: _e,
        onScroll: ve,
        onTouchMove: ye,
        onWheel: be,
        children: xe,
      })),
      (t[55] = ge),
      (t[56] = _e),
      (t[57] = ve),
      (t[58] = ye),
      (t[59] = be),
      (t[60] = xe),
      (t[61] = Se))
    : (Se = t[61]);
  let Ce;
  t[62] === _
    ? (Ce = t[63])
    : ((Ce = _.formatMessage({
        id: `chatgpt.codeBlocks.editorPane.scrollToBottom`,
        defaultMessage: `Scroll to bottom`,
        description: `Accessible label for the button that returns to the latest code while ChatGPT is still generating a code block`,
      })),
      (t[62] = _),
      (t[63] = Ce));
  let we = c && j,
    Te;
  t[64] !== oe || t[65] !== Ce || t[66] !== we
    ? ((Te = (0, $t.jsx)(Ge, { className: `bottom-4`, label: Ce, show: we, onClick: oe })),
      (t[64] = oe),
      (t[65] = Ce),
      (t[66] = we),
      (t[67] = Te))
    : (Te = t[67]);
  let Ee;
  return (
    t[68] !== J || t[69] !== Se || t[70] !== Te
      ? ((Ee = (0, $t.jsxs)(`div`, { className: J, children: [Se, Te] })),
        (t[68] = J),
        (t[69] = Se),
        (t[70] = Te),
        (t[71] = Ee))
      : (Ee = t[71]),
    Ee
  );
}
function Xt(e) {
  return Math.max(0, e.scrollHeight - e.clientHeight);
}
function Zt(e) {
  return Math.max(0, Xt(e) - e.scrollTop) <= tn;
}
var Qt, Z, $t, en, tn, nn, rn;
function an() {
  return (an = e(() => {
    ((Qt = G()),
      k(),
      (Z = Y()),
      R(),
      me(),
      Ue(),
      g(),
      Jt(),
      we(),
      ($t = q()),
      ae(),
      (en = i(
        async () =>
          (
            await N(
              async () => {
                let { ChatGptCodeBlockEditor: e } = await import(
                  `./chatgpt-code-block-editor-12487f3ae6bf.js`
                );
                return { ChatGptCodeBlockEditor: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
              import.meta.url,
            )
          ).ChatGptCodeBlockEditor,
        {
          suspendToParent: !0,
          errorFallback: ({ code: e, language: t, wrapLines: n }) =>
            (0, $t.jsx)(Ht, { code: e, language: t, wrapLines: n }),
        },
      )),
      (tn = 3),
      (nn = 75),
      (rn = 64));
  }))();
}
function on(e) {
  let t = (0, sn.c)(42),
    {
      codeBlockIndex: r,
      codeBlockType: i,
      language: s,
      messageId: u,
      serverConversationId: f,
      userEditedCodeBlock: m,
    } = e,
    g = h(c),
    _ = ee(),
    v = (0, cn.useId)(),
    [y, x] = (0, cn.useState)(``),
    [S, C] = (0, cn.useState)(!1),
    [w, E] = (0, cn.useState)(!1),
    [D, O] = (0, cn.useState)(!1),
    k;
  t[0] === _
    ? (k = t[1])
    : ((k = _.formatMessage({
        id: `chatgpt.codeBlocks.feedback.open`,
        defaultMessage: `Give feedback`,
        description: `Accessible label and visible action text for opening or submitting written feedback about a chart or interactive app shown in a ChatGPT code block`,
      })),
      (t[0] = _),
      (t[1] = k));
  let A = k;
  if (D) return null;
  let j;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Q.jsx)(l, { icon: { 16: X, 20: o } })), (t[2] = j))
    : (j = t[2]);
  let M;
  t[3] === A
    ? (M = t[4])
    : ((M = (0, Q.jsx)(d, {
        asChild: !0,
        children: (0, Q.jsx)(n, {
          "aria-label": A,
          color: `ghostActive`,
          size: `imageToolbar`,
          uniform: !0,
          children: j,
        }),
      })),
      (t[3] = A),
      (t[4] = M));
  let N;
  t[5] !== r ||
  t[6] !== i ||
  t[7] !== y ||
  t[8] !== w ||
  t[9] !== s ||
  t[10] !== u ||
  t[11] !== g ||
  t[12] !== f ||
  t[13] !== m
    ? ((N = (e) => {
        e.preventDefault();
        let t = y.trim();
        t &&
          !w &&
          (E(!0),
          Ne.safePost(`/conversation/message/code-blocks/feedback`, {
            requestBody: {
              code_block_index: String(r),
              code_block_type: i,
              conversation_id: f,
              feedback: t,
              language: s,
              message_id: u,
              user_edited_code_block: m,
            },
          })
            .then(() => {
              (O(!0),
                C(!1),
                g
                  .get(te)
                  .success(
                    (0, Q.jsx)(p, {
                      id: `chatgpt.codeBlocks.feedback.success`,
                      defaultMessage: `Your feedback has been submitted`,
                      description: `Success toast shown after submitting written feedback about a chart or interactive app generated in a ChatGPT code block`,
                    }),
                  ));
            })
            .catch(() => {
              g.get(te).danger(
                (0, Q.jsx)(p, {
                  id: `chatgpt.codeBlocks.feedback.error`,
                  defaultMessage: `Couldn’t submit feedback`,
                  description: `Error toast shown when written feedback about a chart or interactive app generated in a ChatGPT code block cannot be submitted`,
                }),
                { errorAnalytics: { toastId: `chatgpt.codeBlocks.feedback.error` } },
              );
            })
            .finally(() => E(!1)));
      }),
      (t[5] = r),
      (t[6] = i),
      (t[7] = y),
      (t[8] = w),
      (t[9] = s),
      (t[10] = u),
      (t[11] = g),
      (t[12] = f),
      (t[13] = m),
      (t[14] = N))
    : (N = t[14]);
  let P;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Q.jsx)(T, {
        children: (0, Q.jsx)(p, {
          id: `chatgpt.codeBlocks.feedback.title`,
          defaultMessage: `This is a visualization, a new feature we’re testing`,
          description: `Heading of a feedback popover that explains a chart or interactive app in a ChatGPT code block is an experimental visualization`,
        }),
      })),
      (t[15] = P))
    : (P = t[15]);
  let F;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Q.jsx)(p, {
        id: `chatgpt.codeBlocks.feedback.description`,
        defaultMessage: `Tell us what’s working and what’s not about this visualization. The more specific the feedback, the better.`,
        description: `Field label asking a ChatGPT user to describe positive or negative feedback about a chart or interactive app shown inside a code block`,
      })),
      (t[16] = F))
    : (F = t[16]);
  let I;
  t[17] === v
    ? (I = t[18])
    : ((I = (0, Q.jsx)(`label`, { htmlFor: v, children: F })), (t[17] = v), (t[18] = I));
  let L;
  t[19] === _
    ? (L = t[20])
    : ((L = _.formatMessage({
        id: `chatgpt.codeBlocks.feedback.placeholder`,
        defaultMessage: `What did you like or dislike about this visualization?`,
        description: `Placeholder for the multiline feedback field about a chart or interactive app shown in a ChatGPT code block`,
      })),
      (t[19] = _),
      (t[20] = L));
  let R;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (e) => x(e.target.value)), (t[21] = R))
    : (R = t[21]);
  let z;
  t[22] !== y || t[23] !== v || t[24] !== L
    ? ((z = (0, Q.jsx)(be, {
        autoFocus: !0,
        id: v,
        name: `block-feedback-text`,
        placeholder: L,
        rows: 3,
        value: y,
        onChange: R,
      })),
      (t[22] = y),
      (t[23] = v),
      (t[24] = L),
      (t[25] = z))
    : (z = t[25]);
  let B;
  t[26] !== y || t[27] !== w ? ((B = !y.trim() || w), (t[26] = y), (t[27] = w), (t[28] = B)) : (B = t[28]);
  let V;
  t[29] !== A || t[30] !== w || t[31] !== B
    ? ((V = (0, Q.jsx)(n, {
        color: `secondary`,
        disabled: B,
        loading: w,
        size: `compact`,
        type: `submit`,
        children: A,
      })),
      (t[29] = A),
      (t[30] = w),
      (t[31] = B),
      (t[32] = V))
    : (V = t[32]);
  let H;
  t[33] !== z || t[34] !== V || t[35] !== N || t[36] !== I
    ? ((H = (0, Q.jsx)(a, {
        align: `end`,
        side: `top`,
        children: (0, Q.jsxs)(`form`, {
          className: `flex flex-col gap-2 p-2`,
          onSubmit: N,
          children: [P, I, z, V],
        }),
      })),
      (t[33] = z),
      (t[34] = V),
      (t[35] = N),
      (t[36] = I),
      (t[37] = H))
    : (H = t[37]);
  let ne;
  return (
    t[38] !== S || t[39] !== H || t[40] !== M
      ? ((ne = (0, Q.jsxs)(b, { open: S, onOpenChange: C, children: [M, H] })),
        (t[38] = S),
        (t[39] = H),
        (t[40] = M),
        (t[41] = ne))
      : (ne = t[41]),
    ne
  );
}
var sn, cn, Q;
function ln() {
  return (ln = e(() => {
    ((sn = G()), v(), (cn = Y()), R(), ze(), W(), C(), w(), B(), ye(), H(), K(), (Q = q()));
  }))();
}
function un({ spec: e, mode: t }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background: white;
      }

      #vis {
        width: 100%;
        height: 100%;
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        box-sizing: border-box;
      }

      #vis > .vega-embed {
        max-width: 100%;
        max-height: 100%;
      }

      #vis svg,
      #vis canvas {
        max-width: 100%;
        max-height: 100%;
      }

      pre {
        margin: 0;
        padding: 16px;
        white-space: pre-wrap;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 12px;
      }
    </style>
    <script src="${dn}"><\/script>
    <script src="${fn}"><\/script>
    <script src="${pn}"><\/script>
  </head>
  <body>
    <div id="vis"></div>
    <script>
      (() => {
        const container = document.getElementById("vis");
        if (!container) return;

        const showError = (message) => {
          container.innerHTML = "<pre>" + message + "</pre>";
        };

        if (typeof window.vegaEmbed !== "function") {
          showError("Vega runtime failed to load.");
          return;
        }

        let spec;
        try {
          spec = JSON.parse(decodeURIComponent(${JSON.stringify(encodeURIComponent(e))}));
        } catch (error) {
          showError("Invalid Vega spec JSON.");
          console.error(error);
          return;
        }

        const mode = ${JSON.stringify(t)};
        const schemaByMode = {
          vega: "https://vega.github.io/schema/vega/v5.json",
          "vega-lite": "https://vega.github.io/schema/vega-lite/v5.json",
        };

        if (
          spec &&
          typeof spec === "object" &&
          !Object.prototype.hasOwnProperty.call(spec, "$schema")
        ) {
          spec.$schema = schemaByMode[mode];
        }

        window
          .vegaEmbed("#vis", spec, {
            mode,
            actions: false,
            renderer: "svg",
          })
          .catch((error) => {
            showError("Unable to render Vega chart.");
            console.error(error);
          });
      })();
    <\/script>
  </body>
</html>`;
}
var dn, fn, pn;
function mn() {
  return (mn = e(() => {
    ((dn = `https://cdn.jsdelivr.net/npm/vega@5/build/vega.min.js`),
      (fn = `https://cdn.jsdelivr.net/npm/vega-lite@5/build/vega-lite.min.js`),
      (pn = `https://cdn.jsdelivr.net/npm/vega-embed@6/build/vega-embed.min.js`));
  }))();
}
function hn(e, t) {
  let n = e?.trim().toLowerCase(),
    r = vn.test(t);
  switch (n) {
    case `html`:
    case `xhtml`:
      return r ? `svg` : `html`;
    case `xml`:
      return r ? `svg` : null;
    case `svg`:
    case `mermaid`:
    case `recharts`:
    case `threejs`:
    case `vega`:
    case `vega-lite`:
      return n;
    case `vegalite`:
      return `vega-lite`;
    case `json`: {
      let e = yn.exec(t)?.[1];
      return e === `vega` || e === `vega-lite` ? e : null;
    }
    case `react`:
      return _n.test(t) ? `react` : null;
    case `js`:
    case `jsx`:
    case `mjs`:
    case `cjs`:
    case `javascript`:
    case `ts`:
    case `tsx`:
    case `cts`:
    case `mts`:
    case `typescript`:
      return /(?:['"]react['"])/.test(t) && _n.test(t) ? `react` : null;
    case void 0:
      return r ? `svg` : null;
    default:
      return null;
  }
}
function gn(e, t) {
  if (e === `html`) return t;
  if (e === `vega` || e === `vega-lite`) return un({ mode: e, spec: t });
  let n = JSON.stringify(t).replaceAll(`<`, `\\u003c`),
    r = e === `recharts` || /from\s+["']recharts["']/.test(t),
    i = e === `threejs` || /from\s+["']three["']/.test(t);
  return `<div id="chatgpt-code-block-preview"></div>
<script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7/babel.min.js"><\/script>
<script type="module">
import React from "https://esm.sh/react@19";
import * as ReactDOM from "https://esm.sh/react-dom@19/client";
${r ? `import * as Recharts from "https://esm.sh/recharts@3?deps=react@19,react-dom@19";` : `const Recharts={};`}
${i ? `import * as THREE from "https://esm.sh/three@0.179";` : `const THREE={};`}
const source=${n};
const transformed=Babel.transform(source,{filename:"preview.tsx",presets:[["react",{runtime:"classic"}],["typescript",{isTSX:true,allExtensions:true}]],plugins:["transform-modules-commonjs"]}).code;
const module={exports:{}};
const require=(name)=>name==="react"?React:name==="react-dom"||name==="react-dom/client"?ReactDOM:name==="recharts"?Recharts:name==="three"?THREE:(()=>{throw new Error("Unsupported preview dependency: "+name)})();
new Function("React","ReactDOM","Recharts","THREE","module","exports","require",transformed)(React,ReactDOM,Recharts,THREE,module,module.exports,require);
const Component=module.exports.default;
if(typeof Component==="function")ReactDOM.createRoot(document.getElementById("chatgpt-code-block-preview")).render(React.createElement(Component));
// Match Classic's React initialization grace period before reporting success.
// https://github.com/openai/openai/blob/master/chatgpt/web-sandbox/src/react/get-index-file.ts
requestAnimationFrame(()=>requestAnimationFrame(()=>{
  void globalThis.openai.callTool("${gt}",{}).catch(()=>{});
}));
<\/script>`;
}
var _n, vn, yn;
function bn() {
  return (bn = e(() => {
    (_t(),
      mn(),
      (_n = /\bexport\s+default\b/),
      (vn = /^\uFEFF?\s*(?:<\?xml\b[\s\S]*?\?>\s*)?(?:<!doctype\s+svg\b[^>]*>\s*)?<svg\b/i),
      (yn =
        /["']\$schema["']\s*:\s*["']https:\/\/vega\.github\.io\/schema\/(vega-lite|vega)\/v\d+(?:\.\d+)?\.json["']/i));
  }))();
}
function xn(e) {
  let t = (0, Sn.c)(60),
    {
      code: n,
      codeBlockIndex: r,
      hostId: i,
      isCodeFenceOpen: a,
      mermaidDiagramId: o,
      onFailure: s,
      onMermaidCodeChange: l,
      onMermaidCodeBlur: u,
      previewLanguage: d,
      previewRef: f,
      startMode: p,
      threadId: m,
      title: g,
      turnId: v,
    } = e,
    y = p === void 0 ? `visible` : p,
    b = h(c),
    x = ee(),
    [S] = (0, wn.useState)(y),
    C = (0, wn.useRef)(null),
    w;
  t[0] !== n || t[1] !== s || t[2] !== d
    ? ((w = (e) => {
        (C.current?.code !== n || C.current.previewLanguage !== d) &&
          ((C.current = { code: n, previewLanguage: d }), e === `failure` && s?.());
      }),
      (t[0] = n),
      (t[1] = s),
      (t[2] = d),
      (t[3] = w))
    : (w = t[3]);
  let T = w,
    E;
  t[4] !== n || t[5] !== S || t[6] !== d || t[7] !== T || t[8] !== b
    ? ((E = (e) => {
        let { signal: t } = e,
          r = C.current?.code === n && C.current.previewLanguage === d,
          i = !1,
          a = (e) => {
            t.aborted ||
              (!i &&
                r &&
                e === `failure` &&
                De(b, Fe, {
                  category: `preview_failure_suppressed`,
                  previewHost: `apps`,
                  previewLanguage: d,
                  startMode: S,
                }),
              (i = !0),
              T(e));
          };
        return {
          onReady: () => {
            d === `html` && a(`success`);
          },
          onComplete: () => {
            (d === `html` || d === `vega` || d === `vega-lite`) && a(`success`);
          },
          onDocumentReady: () => {
            a(`success`);
          },
          onFailure: () => {
            a(`failure`);
          },
          onContentMeasured: Cn.default,
          onContentUpdated: Cn.default,
        };
      }),
      (t[4] = n),
      (t[5] = S),
      (t[6] = d),
      (t[7] = T),
      (t[8] = b),
      (t[9] = E))
    : (E = t[9]);
  let D = J(E),
    O;
  if (d === `svg`) {
    let e;
    t[10] === x
      ? (e = t[11])
      : ((e = x.formatMessage({
          id: `chatgpt.codeBlocks.svg.ariaLabel`,
          defaultMessage: `Image generated by the assistant`,
          description: `Accessible description of an SVG image preview rendered from a ChatGPT code block`,
        })),
        (t[10] = x),
        (t[11] = e));
    let r, i;
    t[12] === T
      ? ((r = t[13]), (i = t[14]))
      : ((r = () => T(`failure`)), (i = () => T(`success`)), (t[12] = T), (t[13] = r), (t[14] = i));
    let a;
    (t[15] !== n || t[16] !== e || t[17] !== r || t[18] !== i
      ? ((a = (0, Tn.jsx)(_, {
          alt: e,
          className: `block min-h-24 w-full object-contain`,
          onError: r,
          onLoad: i,
          svgString: n,
        })),
        (t[15] = n),
        (t[16] = e),
        (t[17] = r),
        (t[18] = i),
        (t[19] = a))
      : (a = t[19]),
      (O = a));
  } else if (d === `mermaid`) {
    let e;
    t[20] === a ? (e = t[21]) : ((e = (0, Tn.jsx)(Pe, { isStreaming: a })), (t[20] = a), (t[21] = e));
    let r;
    t[22] !== n || t[23] !== a || t[24] !== o || t[25] !== u || t[26] !== l || t[27] !== f || t[28] !== T
      ? ((r = (0, Tn.jsx)(En, {
          ref: f,
          code: n,
          diagramId: o,
          isStreaming: a,
          onCodeChange: l,
          onCodeBlur: u,
          onRenderOutcome: T,
        })),
        (t[22] = n),
        (t[23] = a),
        (t[24] = o),
        (t[25] = u),
        (t[26] = l),
        (t[27] = f),
        (t[28] = T),
        (t[29] = r))
      : (r = t[29]);
    let i;
    (t[30] !== e || t[31] !== r
      ? ((i = (0, Tn.jsx)(wn.Suspense, { fallback: e, children: r })), (t[30] = e), (t[31] = r), (t[32] = i))
      : (i = t[32]),
      (O = i));
  } else {
    let e = `code-block-${r}.html`,
      a;
    t[33] === e ? (a = t[34]) : ((a = { path: e }), (t[33] = e), (t[34] = a));
    let o;
    t[35] === D ? (o = t[36]) : ((o = () => ({ onRunStart: D })), (t[35] = D), (t[36] = o));
    let s;
    t[37] !== n || t[38] !== d ? ((s = gn(d, n)), (t[37] = n), (t[38] = d), (t[39] = s)) : (s = t[39]);
    let c;
    t[40] === T
      ? (c = t[41])
      : ((c = (e) => {
          e === `failed` && T(`failure`);
        }),
        (t[40] = T),
        (t[41] = c));
    let l;
    (t[42] !== i ||
    t[43] !== S ||
    t[44] !== d ||
    t[45] !== a ||
    t[46] !== o ||
    t[47] !== s ||
    t[48] !== c ||
    t[49] !== m ||
    t[50] !== g ||
    t[51] !== v
      ? ((l = (0, Tn.jsx)(`div`, {
          className: `relative h-full w-full overflow-y-auto`,
          children: (0, Tn.jsx)(Ze, {
            attributes: a,
            codePreviewLanguage: d,
            codePreviewStartMode: S,
            createRenderObserver: o,
            embeddedHtml: s,
            hostId: i,
            onEmbeddedStatusChange: c,
            presentation: `code-preview`,
            threadId: m,
            title: g,
            turnId: v,
          }),
        })),
        (t[42] = i),
        (t[43] = S),
        (t[44] = d),
        (t[45] = a),
        (t[46] = o),
        (t[47] = s),
        (t[48] = c),
        (t[49] = m),
        (t[50] = g),
        (t[51] = v),
        (t[52] = l))
      : (l = t[52]),
      (O = l));
  }
  let k = d === `svg` && `min-h-24`,
    A = d !== `svg` && d !== `mermaid` && `aspect-video`,
    j;
  t[53] !== k || t[54] !== A
    ? ((j = P(`group pointer-events-auto flex w-full overflow-hidden`, k, A)),
      (t[53] = k),
      (t[54] = A),
      (t[55] = j))
    : (j = t[55]);
  let M;
  return (
    t[56] !== O || t[57] !== d || t[58] !== j
      ? ((M = (0, Tn.jsx)(`div`, { "data-code-block-preview-pane": d, className: j, children: O })),
        (t[56] = O),
        (t[57] = d),
        (t[58] = j),
        (t[59] = M))
      : (M = t[59]),
    M
  );
}
var Sn, Cn, wn, Tn, En;
function Dn() {
  return (Dn = e(() => {
    ((Sn = G()),
      $e(),
      k(),
      (Cn = t(V(), 1)),
      v(),
      (wn = Y()),
      R(),
      Ae(),
      K(),
      j(),
      xe(),
      z(),
      bn(),
      Me(),
      (Tn = q()),
      ae(),
      (En = (0, wn.lazy)(async () => ({
        default: (
          await N(
            async () => {
              let { ChatGptMermaidPreview: e } = await import(`./preview-db72c692612f.js`);
              return { ChatGptMermaidPreview: e };
            },
            __vite__mapDeps([15, 1, 2, 3, 16, 12, 13, 17, 18, 19, 20]),
            import.meta.url,
          )
        ).ChatGptMermaidPreview,
      }))));
  }))();
}
function On(e) {
  let t = (0, kn.c)(23),
    { codeBlockIndex: r, conversationId: i, language: a, messageId: o, serverConversationId: s } = e,
    u = h(c),
    d = ee(),
    [f, m] = (0, An.useState)(!1),
    g;
  t[0] === d
    ? (g = t[1])
    : ((g = d.formatMessage({
        id: `chatgpt.codeBlocks.share.ariaLabel`,
        defaultMessage: `Share code block`,
        description: `Accessible label and tooltip for a button that creates and copies a shareable read-only link to one code block in a ChatGPT conversation`,
      })),
      (t[0] = d),
      (t[1] = g));
  let _ = g,
    v;
  t[2] !== r || t[3] !== i || t[4] !== a || t[5] !== o || t[6] !== u || t[7] !== s
    ? ((v = async () => {
        let e = await Ne.safePost(`/share/post`, {
          requestBody: {
            attachments_to_create: [{ code_index: r, conversation_id: s, kind: `code_block`, message_id: o }],
          },
        });
        De(u, Be, { conversationId: i, language: a, messageId: o, postId: e.post.id });
        let t = e.post.permalink ?? `https://chatgpt.com/s/${encodeURIComponent(e.post.id)}`;
        (await le(t)) && Le(u);
      }),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = u),
      (t[7] = s),
      (t[8] = v))
    : (v = t[8]);
  let y = v,
    b;
  t[9] !== y || t[10] !== f || t[11] !== u
    ? ((b = () => {
        f ||
          (m(!0),
          y()
            .catch(() => {
              u.get(te).danger(
                (0, jn.jsx)(p, {
                  id: `chatgpt.codeBlocks.share.error`,
                  defaultMessage: `Failed to create share link`,
                  description: `Error toast displayed when a shareable code block link cannot be created`,
                }),
                { errorAnalytics: { toastId: `chatgpt.codeBlocks.share.error` } },
              );
            })
            .finally(() => m(!1)));
      }),
      (t[9] = y),
      (t[10] = f),
      (t[11] = u),
      (t[12] = b))
    : (b = t[12]);
  let x;
  t[13] === f
    ? (x = t[14])
    : ((x = !f && (0, jn.jsx)(l, { icon: { 16: A, 20: fe } })), (t[13] = f), (t[14] = x));
  let S;
  t[15] !== f || t[16] !== _ || t[17] !== b || t[18] !== x
    ? ((S = (0, jn.jsx)(n, {
        "aria-label": _,
        color: `ghostActive`,
        disabled: f,
        loading: f,
        size: `imageToolbar`,
        uniform: !0,
        onClick: b,
        children: x,
      })),
      (t[15] = f),
      (t[16] = _),
      (t[17] = b),
      (t[18] = x),
      (t[19] = S))
    : (S = t[19]);
  let C;
  return (
    t[20] !== _ || t[21] !== S
      ? ((C = (0, jn.jsx)(ue, { tooltipContent: _, children: S })), (t[20] = _), (t[21] = S), (t[22] = C))
      : (C = t[22]),
    C
  );
}
var kn, An, jn;
function Mn() {
  return (Mn = e(() => {
    ((kn = G()), $e(), v(), (An = Y()), R(), ze(), W(), C(), B(), H(), M(), Ae(), K(), Xe(), L(), (jn = q()));
  }))();
}
var Nn;
function Pn() {
  return (Pn = e(() => {
    Nn = {
      arduino: { language: `cpp`, label: `Arduino` },
      ino: { language: `cpp`, label: `Arduino` },
      bash: { language: `bash`, label: `Bash` },
      sh: { language: `bash`, label: `Bash` },
      zsh: { language: `zsh`, label: `Zsh` },
      c: { language: `c`, label: `C` },
      h: { language: `c`, label: `C` },
      cpp: { language: `cpp`, label: `C++` },
      "c++": { language: `cpp`, label: `C++` },
      cc: { language: `cpp`, label: `C++` },
      cxx: { language: `cpp`, label: `C++` },
      "h++": { language: `cpp`, label: `C++` },
      hh: { language: `cpp`, label: `C++` },
      hpp: { language: `cpp`, label: `C++` },
      hxx: { language: `cpp`, label: `C++` },
      csharp: { language: `csharp`, label: `C#` },
      "c#": { language: `csharp`, label: `C#` },
      cs: { language: `csharp`, label: `C#` },
      css: { language: `css`, label: `CSS` },
      diff: { language: `other`, label: `Diff` },
      patch: { language: `other`, label: `Diff` },
      go: { language: `go`, label: `Go` },
      golang: { language: `go`, label: `Go` },
      graphql: { language: `other`, label: `GraphQL` },
      gql: { language: `other`, label: `GraphQL` },
      ini: { language: `other`, label: `INI` },
      toml: { language: `other`, label: `TOML` },
      java: { language: `java`, label: `Java` },
      jsp: { language: `html`, label: `JSP` },
      javascript: { language: `javascript`, label: `JavaScript` },
      js: { language: `javascript`, label: `JavaScript` },
      jsx: { language: `javascript`, label: `JavaScript` },
      mjs: { language: `javascript`, label: `JavaScript` },
      cjs: { language: `javascript`, label: `JavaScript` },
      json: { language: `json`, label: `JSON` },
      jsonc: { language: `json`, label: `JSON` },
      kotlin: { language: `kotlin`, label: `Kotlin` },
      kt: { language: `kotlin`, label: `Kotlin` },
      kts: { language: `kotlin`, label: `Kotlin` },
      latex: { language: `other`, label: `LaTeX` },
      tex: { language: `other`, label: `TeX` },
      less: { language: `css`, label: `Less` },
      lua: { language: `lua`, label: `Lua` },
      pluto: { language: `lua`, label: `Lua` },
      makefile: { language: `other`, label: `Makefile` },
      mak: { language: `other`, label: `Makefile` },
      make: { language: `other`, label: `Makefile` },
      mk: { language: `other`, label: `Makefile` },
      markdown: { language: `other`, label: `Markdown` },
      md: { language: `other`, label: `Markdown` },
      mkd: { language: `other`, label: `Markdown` },
      mkdown: { language: `other`, label: `Markdown` },
      mathematica: { language: `other`, label: `Mathematica` },
      mma: { language: `other`, label: `Mathematica` },
      wl: { language: `other`, label: `Wolfram Language` },
      wolfram: { language: `other`, label: `Wolfram Language` },
      matlab: { language: `other`, label: `MATLAB` },
      mermaid: { language: `mermaid`, label: `Mermaid` },
      nginx: { language: `other`, label: `Nginx` },
      nginxconf: { language: `other`, label: `Nginx` },
      objectivec: { language: `objectivec`, label: `Objective-C` },
      mm: { language: `objectivec`, label: `Objective-C` },
      "obj-c": { language: `objectivec`, label: `Objective-C` },
      "obj-c++": { language: `objectivec`, label: `Objective-C++` },
      objc: { language: `objectivec`, label: `Objective-C` },
      "objective-c++": { language: `objectivec`, label: `Objective-C++` },
      perl: { language: `perl`, label: `Perl` },
      pl: { language: `perl`, label: `Perl` },
      pm: { language: `perl`, label: `Perl` },
      pgsql: { language: `sql`, label: `PostgreSQL` },
      postgres: { language: `sql`, label: `PostgreSQL` },
      postgresql: { language: `sql`, label: `PostgreSQL` },
      php: { language: `php`, label: `PHP` },
      "php-template": { language: `php`, label: `PHP` },
      plaintext: { language: `other`, label: `Plain text`, inlineCopyOnly: !0 },
      text: { language: `other`, label: `Plain text`, inlineCopyOnly: !0 },
      txt: { language: `other`, label: `Plain text`, inlineCopyOnly: !0 },
      powershell: { language: `powershell`, label: `PowerShell` },
      ps: { language: `powershell`, label: `PowerShell` },
      ps1: { language: `powershell`, label: `PowerShell` },
      pwsh: { language: `powershell`, label: `PowerShell` },
      python: { language: `python`, label: `Python` },
      py: { language: `python`, label: `Python` },
      ipython: { language: `python`, label: `Python` },
      gyp: { language: `python`, label: `Python` },
      recharts: { language: `typescript`, label: `Recharts`, previewLanguage: `recharts` },
      "python-repl": { language: `python`, label: `Python REPL` },
      pycon: { language: `python`, label: `Python REPL` },
      r: { language: `r`, label: `R` },
      ruby: { language: `ruby`, label: `Ruby` },
      rb: { language: `ruby`, label: `Ruby` },
      irb: { language: `ruby`, label: `Ruby` },
      gemspec: { language: `ruby`, label: `Ruby` },
      podspec: { language: `ruby`, label: `Ruby` },
      thor: { language: `ruby`, label: `Ruby` },
      rust: { language: `rust`, label: `Rust` },
      rs: { language: `rust`, label: `Rust` },
      scss: { language: `css`, label: `SCSS` },
      shell: { language: `bash`, label: `Shell` },
      console: { language: `bash`, label: `Shell` },
      shellsession: { language: `bash`, label: `Shell` },
      sql: { language: `sql`, label: `SQL` },
      swift: { language: `swift`, label: `Swift` },
      threejs: { language: `javascript`, label: `Three.js`, previewLanguage: `threejs` },
      typescript: { language: `typescript`, label: `TypeScript` },
      ts: { language: `typescript`, label: `TypeScript` },
      tsx: { language: `typescript`, label: `TypeScript` },
      cts: { language: `typescript`, label: `TypeScript` },
      mts: { language: `typescript`, label: `TypeScript` },
      vega: { language: `vega`, label: `Vega` },
      "vega-lite": { language: `vega-lite`, label: `Vega-Lite` },
      vegalite: { language: `vega-lite`, label: `Vega-Lite` },
      vbnet: { language: `vb`, label: `VB.NET` },
      vb: { language: `vb`, label: `VB` },
      wasm: { language: `other`, label: `WebAssembly` },
      xml: { language: `xml`, label: `XML` },
      html: { language: `html`, label: `HTML` },
      xhtml: { language: `html`, label: `XHTML` },
      atom: { language: `xml`, label: `XML` },
      rss: { language: `xml`, label: `XML` },
      svg: { language: `xml`, label: `XML` },
      plist: { language: `xml`, label: `XML` },
      wsf: { language: `xml`, label: `XML` },
      xjb: { language: `xml`, label: `XML` },
      xsd: { language: `xml`, label: `XML` },
      xsl: { language: `xml`, label: `XML` },
      yaml: { language: `yaml`, label: `YAML` },
      yml: { language: `yaml`, label: `YAML` },
    };
  }))();
}
function Fn(e) {
  let t = (0, Ln.c)(76),
    {
      codeBlockIndex: i,
      codeBlockInfo: a,
      clipboardContent: o,
      content: s,
      editable: d,
      forceCodeBlockWordWrap: f,
      isCodeFenceOpen: p,
      isInteractive: g,
      language: _,
      renderMath: v,
      stickyHeader: b,
      turnContext: x,
    } = e,
    S = d === void 0 || d,
    C = g === void 0 || g,
    w = v === void 0 || v,
    T = h(c),
    D = ee(),
    O = (0, Rn.useId)(),
    k = he(Je, x.conversationId),
    A = E(Ce),
    j = qe(`3336871980`),
    M = Ke(`110872417`),
    N = x.codeBlocks?.[String(i)],
    F;
  t[0] !== i || t[1] !== x.conversationId || t[2] !== x.messageId
    ? ((F =
        x.messageId == null
          ? null
          : { conversationId: x.conversationId, messageId: x.messageId, codeBlockIndex: i }),
      (t[0] = i),
      (t[1] = x.conversationId),
      (t[2] = x.messageId),
      (t[3] = F))
    : (F = t[3]);
  let L = he(it, F),
    R = L ?? N?.content ?? s,
    z = L ?? N?.content ?? o ?? s,
    B = hn(_, R);
  N?.render_mode === `app_block` ? (B = `html`) : u(_, p) && (B = `mermaid`);
  let V = E(N?.render_mode !== `app_block` && B != null && B !== `svg` ? ht : null),
    H = N?.render_mode === `app_block` || /\bpreview\b/.test(a ?? ``),
    ae = B === `svg` || B === `mermaid`,
    oe = B != null && (V?.status === `allowed` || B === `svg`) && (ae || !x.shouldBlockExternalEgress),
    U = _?.trim().toLowerCase(),
    W = U === `python` || U === `py`,
    G = !x.shouldBlockExternalEgress && k != null && x.messageId != null,
    K = S && C && !x.isReadOnly,
    fe =
      oe &&
      (!p || B === `mermaid`) &&
      (ae ||
        B === `vega` ||
        B === `vega-lite` ||
        H ||
        (j.get(`code_blocks_auto_preview`, !1) &&
          (B === `react` || (B === `html` && /<html(?:\s|>)/i.test(R))))),
    [q, J] = (0, Rn.useState)(!1),
    [Y, me] = (0, Rn.useState)(null),
    X = oe ? (Y ?? (fe ? `preview` : `code`)) : `code`,
    _e = (0, Rn.useRef)(null),
    ve = (0, Rn.useRef)(0),
    ye = (0, Rn.useRef)(null),
    be = U === `latex` || U === `tex`,
    xe = Nn[U ?? ``]?.language ?? U,
    we;
  t[4] !== D || t[5] !== _
    ? ((we = _ == null ? void 0 : pe(_, D)), (t[4] = D), (t[5] = _), (t[6] = we))
    : (we = t[6]);
  let Te = we,
    ke = Te?.value ?? _,
    Ae;
  t[7] !== D || t[8] !== _ || t[9] !== Te?.label || t[10] !== N?.title
    ? ((Ae =
        N?.title ??
        (_ === `html` ? _.toUpperCase() : Te?.label) ??
        _ ??
        D.formatMessage({
          id: `chatgpt.codeBlocks.language.fallback`,
          defaultMessage: `Code`,
          description: `Fallback header title for a ChatGPT code block when the fenced code does not specify a programming language`,
        })),
      (t[7] = D),
      (t[8] = _),
      (t[9] = Te?.label),
      (t[10] = N?.title),
      (t[11] = Ae))
    : (Ae = t[11]);
  let Me = Ae,
    Pe = {
      clientPreviewable: oe,
      conversationId: x.conversationId,
      language: _,
      messageId: x.messageId,
      modelPreviewable: H,
    };
  if (N?.render_mode === `app_block`) {
    if (x.shouldBlockExternalEgress && x.renderRestrictedWidgets !== !0) return null;
    let e = N.content == null && p,
      n = x.isReadOnly || !C,
      r;
    t[12] !== R || t[13] !== N.title || t[14] !== e || t[15] !== n || t[16] !== x
      ? ((r = (0, $.jsx)(pt, { content: R, isStreaming: e, readOnly: n, title: N.title, turnContext: x })),
        (t[12] = R),
        (t[13] = N.title),
        (t[14] = e),
        (t[15] = n),
        (t[16] = x),
        (t[17] = r))
      : (r = t[17]);
    let a;
    t[18] !== G ||
    t[19] !== M ||
    t[20] !== i ||
    t[21] !== p ||
    t[22] !== C ||
    t[23] !== k ||
    t[24] !== x.isReadOnly ||
    t[25] !== x.isStreaming ||
    t[26] !== x.messageId
      ? ((a =
          M && C && !x.isReadOnly && !p && !x.isStreaming && G && x.messageId != null
            ? (0, $.jsx)(on, {
                codeBlockIndex: i,
                codeBlockType: `app_block`,
                language: `html`,
                messageId: x.messageId,
                serverConversationId: k,
                userEditedCodeBlock: !1,
              })
            : null),
        (t[18] = G),
        (t[19] = M),
        (t[20] = i),
        (t[21] = p),
        (t[22] = C),
        (t[23] = k),
        (t[24] = x.isReadOnly),
        (t[25] = x.isStreaming),
        (t[26] = x.messageId),
        (t[27] = a))
      : (a = t[27]);
    let o;
    return (
      t[28] !== a || t[29] !== r
        ? ((o = (0, $.jsxs)($.Fragment, { children: [r, a] })), (t[28] = a), (t[29] = r), (t[30] = o))
        : (o = t[30]),
      o
    );
  }
  let Fe;
  t[31] !== G ||
  t[32] !== z.length ||
  t[33] !== T ||
  t[34] !== k ||
  t[35] !== x.conversationOrigin ||
  t[36] !== x.isTemporaryChat ||
  t[37] !== x.messageId ||
  t[38] !== x.suppressCopyTurnToClipboardAnalytics
    ? ((Fe = () => {
        let e;
        (x.conversationOrigin === `tpp`
          ? (e = r.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_WORK)
          : (x.conversationOrigin ?? (e = r.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT)),
          De(T, Qe, { characterCount: m(z.length), productExperience: e }),
          !(x.isTemporaryChat || x.suppressCopyTurnToClipboardAnalytics || !G || x.messageId == null) &&
            Ne.safePost(`/conversation/implicit_message_feedback`, {
              requestBody: {
                conversation_id: k,
                feedback: { feedback_type: `copy`, selected_text_length: z.length },
                location: `code-block`,
                message_id: x.messageId,
                source: `mouse`,
              },
            }).catch(In));
      }),
      (t[31] = G),
      (t[32] = z.length),
      (t[33] = T),
      (t[34] = k),
      (t[35] = x.conversationOrigin),
      (t[36] = x.isTemporaryChat),
      (t[37] = x.messageId),
      (t[38] = x.suppressCopyTurnToClipboardAnalytics),
      (t[39] = Fe))
    : (Fe = t[39]);
  let Le = Fe,
    Re;
  t[40] === D
    ? (Re = t[41])
    : ((Re = D.formatMessage({
        id: `chatgpt.codeBlocks.preview.ariaLabel`,
        defaultMessage: `Preview`,
        description: `Accessible label and tooltip for a button that switches a ChatGPT code block from source code to its interactive preview`,
      })),
      (t[40] = D),
      (t[41] = Re));
  let ze = Re,
    Be;
  t[42] === D
    ? (Be = t[43])
    : ((Be = D.formatMessage({
        id: `chatgpt.codeBlocks.showCode.ariaLabel`,
        defaultMessage: `Code`,
        description: `Accessible label and tooltip for a button that switches an interactive ChatGPT code block from preview back to its source code`,
      })),
      (t[42] = D),
      (t[43] = Be));
  let Ve = Be,
    He;
  if (oe && B != null && (X === `preview` || (q && !p))) {
    let e = Y == null && (B === `html` || B === `react`) ? `auto` : `visible`,
      n;
    t[44] !== K ||
    t[45] !== i ||
    t[46] !== p ||
    t[47] !== _ ||
    t[48] !== T ||
    t[49] !== k ||
    t[50] !== x.conversationId ||
    t[51] !== x.messageId
      ? ((n =
          k != null && x.messageId != null && K && !p
            ? (e) => {
                x.messageId != null &&
                  T.get(ut, {
                    conversationId: x.conversationId,
                    messageId: x.messageId,
                    codeBlockIndex: i,
                  }).requestSave(e, _);
              }
            : void 0),
        (t[44] = K),
        (t[45] = i),
        (t[46] = p),
        (t[47] = _),
        (t[48] = T),
        (t[49] = k),
        (t[50] = x.conversationId),
        (t[51] = x.messageId),
        (t[52] = n))
      : (n = t[52]);
    let r;
    (t[53] !== K || t[54] !== i || t[55] !== T || t[56] !== x.conversationId || t[57] !== x.messageId
      ? ((r = () => {
          K &&
            x.messageId != null &&
            T.get(ut, {
              conversationId: x.conversationId,
              messageId: x.messageId,
              codeBlockIndex: i,
            }).flushSave();
        }),
        (t[53] = K),
        (t[54] = i),
        (t[55] = T),
        (t[56] = x.conversationId),
        (t[57] = x.messageId),
        (t[58] = r))
      : (r = t[58]),
      (He = (0, $.jsx)(xn, {
        code: R,
        codeBlockIndex: i,
        hostId: x.hostId,
        isCodeFenceOpen: p,
        mermaidDiagramId: O,
        startMode: X === `preview` ? e : `hover`,
        onFailure: () => {
          De(T, Oe, {
            conversationId: k ?? x.conversationId,
            messageId: x.messageId,
            codeBlockLanguage: B,
            operation: `preview`,
            isEdited: R !== s,
          });
        },
        previewLanguage: B,
        previewRef: ye,
        onMermaidCodeChange: n,
        onMermaidCodeBlur: r,
        threadId: x.browserConversationId ?? x.conversationId,
        title: N?.title ?? ze,
        turnId: x.turnId,
      })));
  }
  let Ue = G && !x.isStreaming,
    Ge = (e) => {
      Ot({
        code: R,
        language: _,
        previewLanguage: e,
        captureScreenshotDataUrl: async () => ye.current?.captureScreenshotDataUrl() ?? null,
      }).catch(() => {
        T.get(te).danger(
          D.formatMessage({
            id: `chatgpt.codeBlocks.download.error`,
            defaultMessage: `Couldn’t download preview`,
            description: `Error toast shown when exporting an interactive ChatGPT code-block preview or Mermaid diagram fails`,
          }),
          { errorAnalytics: { toastId: `code_block_preview_export_failed` } },
        );
      });
    };
  if (B === `mermaid` && X === `preview`) {
    let e;
    t[59] === R
      ? (e = t[60])
      : ((e = (e) => {
          if (e != null) return Ie(e, { text: R, highlight: `block` });
        }),
        (t[59] = R),
        (t[60] = e));
    let n = p
        ? null
        : (0, $.jsx)(kt, {
            onDownload: () => Ge(`mermaid`),
            onCopyCode: () => {
              le(z, void 0, Le);
            },
            onExpand: () => {
              ye.current?.openFullscreen();
            },
          }),
      r = He,
      i;
    return (
      t[61] !== e || t[62] !== n || t[63] !== r
        ? ((i = (0, $.jsxs)(`div`, {
            ref: e,
            className: `group/app-widget relative`,
            "data-chatgpt-mermaid-preview": ``,
            children: [n, r],
          })),
          (t[61] = e),
          (t[62] = n),
          (t[63] = r),
          (t[64] = i))
        : (i = t[64]),
      i
    );
  }
  if (
    be &&
    x.conversationOrigin === `tpp` &&
    K &&
    Ue &&
    !p &&
    k != null &&
    x.messageId != null &&
    /\\begin\{document\}/.test(R)
  ) {
    let e;
    t[65] !== R || t[66] !== D || t[67] !== N?.title
      ? ((e =
          N?.title ??
          /\\title\{([^{}]+)\}/.exec(R)?.[1] ??
          D.formatMessage({
            id: `chatgpt.latex.untitled`,
            defaultMessage: `LaTeX document`,
            description: `Fallback title for a generated LaTeX document without a title.`,
          })),
        (t[65] = R),
        (t[66] = D),
        (t[67] = N?.title),
        (t[68] = e))
      : (e = t[68]);
    let n;
    return (
      t[69] !== R ||
      t[70] !== i ||
      t[71] !== k ||
      t[72] !== e ||
      t[73] !== x.conversationId ||
      t[74] !== x.messageId
        ? ((n = (0, $.jsx)(At, {
            document: {
              conversationId: x.conversationId,
              serverConversationId: k,
              messageId: x.messageId,
              codeBlockIndex: i,
              initialSource: R,
              title: e,
            },
          })),
          (t[69] = R),
          (t[70] = i),
          (t[71] = k),
          (t[72] = e),
          (t[73] = x.conversationId),
          (t[74] = x.messageId),
          (t[75] = n))
        : (n = t[75]),
      n
    );
  }
  let Ye = (e, t, r) => {
    let a = K && W && G && r !== void 0 && r,
      o =
        X === `code` && xe != null && St(xe)
          ? (0, $.jsx)(Yt, {
              autoFocus: !1,
              code: R,
              language: xe,
              isFullscreen: !1,
              isReadonly: !a,
              isStreaming: p,
              isPreviewing: !1,
              useFixedInlineHeight: !0,
              wrapLines: f || A,
              editorStateRef: _e,
              onBlur: () => {
                a &&
                  x.messageId != null &&
                  T.get(ut, {
                    conversationId: x.conversationId,
                    messageId: x.messageId,
                    codeBlockIndex: i,
                  }).flushSave();
              },
              onChange: (e) => {
                a &&
                  x.messageId != null &&
                  T.get(ut, {
                    conversationId: x.conversationId,
                    messageId: x.messageId,
                    codeBlockIndex: i,
                  }).requestSave(e, _);
              },
            })
          : void 0;
    return (0, $.jsx)(`div`, {
      className: P(Ee.CodeBlock, t != null && `rounded-(--radius-3xl-base) bg-surface-elevated`),
      children: (0, $.jsx)(ie, {
        ref: (e) => {
          if (e != null) return Ie(e, { text: R, highlight: `block` });
        },
        actionButtons: (0, $.jsxs)($.Fragment, {
          children: [
            p ? (0, $.jsx)(se, { className: `icon-xs` }) : null,
            Ue && K && oe && j.get(`code_blocks_sharing_enabled`, !1) && k != null && x.messageId != null
              ? (0, $.jsx)(On, {
                  codeBlockIndex: i,
                  conversationId: x.conversationId,
                  language: _,
                  messageId: x.messageId,
                  serverConversationId: k,
                })
              : null,
            oe && !p && X === `preview` && (B === `html` || B === `react`)
              ? (0, $.jsx)(ue, {
                  tooltipContent: D.formatMessage({
                    id: `chatgpt.codeBlocks.download.ariaLabel`,
                    defaultMessage: `Download code`,
                    description: `Accessible label and tooltip for a button that downloads the source of an interactive ChatGPT code block`,
                  }),
                  children: (0, $.jsx)(n, {
                    "aria-label": D.formatMessage({
                      id: `chatgpt.codeBlocks.download.button.ariaLabel`,
                      defaultMessage: `Download code`,
                      description: `Accessible label for a button that downloads the source of an interactive ChatGPT code block`,
                    }),
                    color: `ghostActive`,
                    size: `imageToolbar`,
                    uniform: !0,
                    onClick: () => Ge(B),
                    children: (0, $.jsx)(l, { icon: { 16: ce, 20: I } }),
                  }),
                })
              : null,
          ],
        }),
        alternateContent: W
          ? (0, $.jsxs)(`div`, {
              ref: (e) => {
                if (e == null) return;
                e.style.minHeight = `min(${ve.current}px, 56.25cqw)`;
                let t = new ResizeObserver((t) => {
                  let [n] = t;
                  n.contentRect.height > ve.current &&
                    ((ve.current = n.contentRect.height),
                    (e.style.minHeight = `min(${ve.current}px, 56.25cqw)`));
                });
                return (t.observe(e), () => t.disconnect());
              },
              className: `grid`,
              children: [
                (0, $.jsx)(`div`, {
                  className: P(`col-start-1 row-start-1 min-w-0`, t != null && `invisible`),
                  "aria-hidden": t != null,
                  "data-markdown-copy": t == null ? void 0 : `exclude`,
                  inert: t != null,
                  children: o,
                }),
                t == null
                  ? null
                  : (0, $.jsx)(`div`, {
                      className: P(`col-start-1 row-start-1 min-w-0 bg-surface-elevated`, We.InlineCodePane),
                      children: t,
                    }),
              ],
            })
          : o,
        previewContent:
          He == null
            ? void 0
            : (0, $.jsx)(`div`, {
                className: P(X !== `preview` && `pointer-events-none absolute inset-x-0 top-0 opacity-0`),
                "aria-hidden": X !== `preview`,
                inert: X !== `preview`,
                "data-markdown-copy": X === `preview` ? void 0 : `exclude`,
                children: He,
              }),
        clipboardContent: z,
        codeCopyText: t == null ? void 0 : R,
        codeClassName: f || A ? void 0 : `min-w-max`,
        codeContainerClassName: P(`chatgpt-code-scrollport`, We.InlineCodePane),
        content: R,
        allowPreview: w && !p,
        isShowingPreview: X === `preview` || t != null,
        language: ke,
        onCopyCode: Le,
        onToggleWrapCode: f || X !== `code` || t != null ? void 0 : () => T.set(Ce, !A),
        renderSvgAsImage: X !== `code`,
        shouldWrapCode: f || A,
        showCopyButton: !p && X !== `preview`,
        stickyHeader: b,
        title: Me,
        trailingActionButtons: (0, $.jsxs)($.Fragment, {
          children: [
            oe && !p
              ? (0, $.jsx)(ue, {
                  tooltipContent: X === `preview` ? Ve : ze,
                  children: (0, $.jsx)(n, {
                    "aria-label": X === `preview` ? Ve : ze,
                    color: `ghostActive`,
                    size: `imageToolbar`,
                    uniform: !0,
                    onPointerEnter: (e) => {
                      e.pointerType === `mouse` && X !== `preview` && J(!0);
                    },
                    onPointerLeave: () => J(!1),
                    onPointerCancel: () => J(!1),
                    onClick: () => {
                      if ((J(!1), X === `preview`)) {
                        me(`code`);
                        return;
                      }
                      (De(T, je, Pe), me(`preview`));
                    },
                    children: (0, $.jsx)(l, {
                      icon: X === `preview` ? { 16: de, 20: re } : { assets: { 16: y, 20: ne } },
                    }),
                  }),
                })
              : null,
            e,
          ],
        }),
        wrapperClassName: `@container`,
      }),
    });
  };
  return C && W && !x.shouldBlockExternalEgress
    ? (0, $.jsx)(Se, {
        name: `code-block-execution`,
        fallback: () => Ye(),
        children: (0, $.jsx)(Rn.Suspense, {
          fallback: Ye(),
          children: (0, $.jsx)(zn, {
            code: R,
            codeBlockIndex: i,
            disabled: p || x.isStreaming,
            isEdited: R !== s,
            turnContext: x,
            onRun: () => {
              De(T, ge, Pe);
            },
            children: Ye,
          }),
        }),
      })
    : Ye();
}
function In() {}
var Ln, Rn, $, zn;
function Bn() {
  return (Bn = e(() => {
    ((Ln = G()),
      $e(),
      x(),
      _e(),
      s(),
      O(),
      oe(),
      k(),
      v(),
      (Rn = Y()),
      R(),
      ze(),
      S(),
      Ve(),
      W(),
      U(),
      ke(),
      C(),
      me(),
      F(),
      B(),
      H(),
      M(),
      Ye(),
      Ae(),
      K(),
      Re(),
      L(),
      ft(),
      et(),
      Nt(),
      ot(),
      an(),
      Et(),
      ln(),
      bn(),
      Dn(),
      Mn(),
      Dt(),
      mt(),
      bt(),
      Pn(),
      we(),
      Te(),
      ($ = q()),
      ae(),
      (zn = i(
        async () => {
          let { loadCodeBlockExecution: e } = await N(
            async () => {
              let { loadCodeBlockExecution: e } = await import(`./entry-e75df665957c.js`);
              return { loadCodeBlockExecution: e };
            },
            __vite__mapDeps([21, 2, 1, 3]),
            import.meta.url,
          );
          return e();
        },
        { suspendToParent: !0, propagateLoadError: !0 },
      )));
  }))();
}
Bn();
export { Fn as ChatGptCodeBlock };
//# sourceMappingURL=chatgpt-code-block-d92f3a4029b6.js.map
