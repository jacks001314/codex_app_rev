const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chatgpt-code-block-editor-c53b88966141.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-295ec67e1c5d.css",
      "./chatgpt-code-block-editor-b095e99a4c54.js",
      "./dist-d2c4a7b52e66.js",
      "./dist-c49309ceeb35.js",
      "./dist-8fceb96a6fc9.js",
      "./text-file-editor-search-panel-9630a5900918.js",
      "./text-file-editor-search-panel-875fcdb810ae.css",
      "./chatgpt-code-block-editor-theme-1c863168c4d4.js",
      "./chatgpt-code-block-highlighting-cd6d73ebd0d5.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./languages-13cd015eff70.js",
      "./preview-85b93e888cc5.js",
      "./preview-bc97f1c7a0a4.js",
      "./image-e9150f0dbb98.js",
      "./chunk-ZW26E7AF-c8fea83f7f61.js",
      "./visualization-theme-bedd32a367a0.js",
      "./chart-colors-7214911051c2.js",
      "./entry-b5e62f2ab090.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  $B as r,
  $St as i,
  $st as a,
  A5 as o,
  Dx as s,
  Ex as c,
  F3 as l,
  FBt as u,
  FW as d,
  Fb as f,
  HJ as p,
  I3 as m,
  IW as h,
  LNt as g,
  MNt as _,
  NNt as v,
  NO as y,
  OFt as b,
  PBt as x,
  PO as S,
  Pb as C,
  QB as w,
  QH as T,
  Qit as E,
  Qst as D,
  Rrt as O,
  SB as k,
  TNt as A,
  TY as j,
  Uz as M,
  Vrt as N,
  Vw as P,
  Wz as F,
  XD as I,
  XOt as L,
  Y3 as ee,
  Z3 as R,
  ZH as z,
  ZSt as B,
  _D as te,
  _V as ne,
  _j as V,
  e6 as H,
  fD as U,
  gB as re,
  gD as ie,
  gQ as ae,
  gV as oe,
  hB as W,
  hD as se,
  hQ as ce,
  iCt as le,
  kFt as G,
  mD as K,
  nB as ue,
  nCt as de,
  nat as fe,
  okt as pe,
  qD as me,
  qrt as he,
  rB as ge,
  tkt as q,
  vj as _e,
  wB as ve,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as J,
  $s as ye,
  B1n as be,
  Cjr as xe,
  Djr as Se,
  Eo as Y,
  Fl as Ce,
  Fs as we,
  IWn as Te,
  Il as Ee,
  MOr as De,
  Oo as Oe,
  Ps as ke,
  QLn as Ae,
  Qs as je,
  RKn as Me,
  VPn as Ne,
  XA as Pe,
  Xs as Fe,
  ZA as Ie,
  Zs as Le,
  _Hn as Re,
  cH as ze,
  ec as Be,
  gHn as Ve,
  hHn as He,
  iRr as Ue,
  lDn as We,
  mHn as Ge,
  pHn as Ke,
  qKn as qe,
  sDn as Je,
  sH as Ye,
  tc as Xe,
  tyr as Ze,
  vu as Qe,
  xMr as $e,
  xjr as et,
  yMr as tt,
  yu as nt,
  zOr as rt,
} from "./app-initial-ad16eaadf81f.js";
import { n as it, r as at } from "./dist-c49309ceeb35.js";
import {
  _i as ot,
  di as st,
  fi as ct,
  gi as lt,
  hi as ut,
  mi as dt,
  pi as ft,
  vi as pt,
  yi as mt,
} from "./app-primary-3e00728c2a4c.js";
import { n as ht, t as gt } from "./inline-34068e44e480.js";
import { n as _t, t as vt } from "./code-execution-account-policy-8682cbed64b4.js";
import { l as yt, u as bt } from "./visualization-sandbox-config-d6a8d5057bf3.js";
import { n as xt, t as St } from "./chatgpt-code-block-highlighting-cd6d73ebd0d5.js";
import { i as Ct, n as wt, r as Tt, t as Et } from "./languages-13cd015eff70.js";
import { n as Dt, t as Ot } from "./document-card-68dcf18a748a.js";
import { i as kt, n as At, r as jt, t as Mt } from "./chatgpt-mermaid-preview-actions-d9f3c972dbb9.js";
function Nt(e) {
  let t = (0, Pt.c)(18),
    { document: n } = e,
    r = i(De),
    a = de(ut, n),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Ft.jsx)(p, { className: `text-info` })), (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] !== n || t[2] !== a || t[3] !== r
    ? ((s =
        a == null
          ? null
          : (0, Ft.jsx)(ee, {
              color: `primary`,
              size: `toolbar`,
              onClick: () => {
                let e = r.get(lt, n);
                e != null && (r.set(dt, a.document, { before: a.before, after: e }), ct(r, a.document));
              },
              children: (0, Ft.jsx)(q, {
                id: `chatgpt.latex.reviewConversationRevision`,
                defaultMessage: `Review revision`,
                description: `Offers a LaTeX document returned in chat as a proposed replacement for the document used in that request, requiring review before applying it.`,
              }),
            })),
      (t[1] = n),
      (t[2] = a),
      (t[3] = r),
      (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] !== n || t[6] !== r ? ((c = () => ct(r, n)), (t[5] = n), (t[6] = r), (t[7] = c)) : (c = t[7]);
  let l;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Ft.jsx)(q, {
        id: `chatgpt.latex.openDocument`,
        defaultMessage: `Open document`,
        description: `Opens a generated LaTeX document in an editor beside the current ChatGPT conversation.`,
      })),
      (t[8] = l))
    : (l = t[8]);
  let u;
  t[9] === c
    ? (u = t[10])
    : ((u = (0, Ft.jsx)(ee, { color: `secondary`, size: `toolbar`, onClick: c, children: l })),
      (t[9] = c),
      (t[10] = u));
  let d;
  t[11] !== s || t[12] !== u
    ? ((d = (0, Ft.jsxs)(`div`, { className: `flex flex-wrap gap-2`, children: [s, u] })),
      (t[11] = s),
      (t[12] = u),
      (t[13] = d))
    : (d = t[13]);
  let f;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Ft.jsx)(`p`, {
        className: `px-4 pb-4 text-sm text-secondary select-none`,
        children: (0, Ft.jsx)(q, {
          id: `chatgpt.latex.documentCard.description`,
          defaultMessage: `LaTeX document · Edit, preview, and download PDF`,
          description: `Description of a LaTeX document card in a ChatGPT conversation. LaTeX and PDF are format names.`,
        }),
      })),
      (t[14] = f))
    : (f = t[14]);
  let m;
  return (
    t[15] !== n.title || t[16] !== d
      ? ((m = (0, Ft.jsx)(Ot, { icon: o, title: n.title, actions: d, children: f })),
        (t[15] = n.title),
        (t[16] = d),
        (t[17] = m))
      : (m = t[17]),
    m
  );
}
var Pt, Ft;
function It() {
  return (It = e(() => {
    ((Pt = x()), B(), L(), R(), j(), rt(), Dt(), ft(), st(), (Ft = g()));
  }))();
}
function Lt(e, t, n) {
  if (n.length === 0) return;
  let r = e[e.length - 1];
  r?.className === t ? (r.text += n) : e.push({ className: t, text: n });
}
function Rt(e) {
  return e.length === 0 ? [] : [{ className: null, text: e }];
}
function zt(e, t, n, r) {
  if (n >= r) return [];
  let i = [],
    a = n;
  return (
    it(
      t,
      St,
      (t, n, r) => {
        i.length > Ht || (t > a && Lt(i, null, e.slice(a, t)), n > t && Lt(i, r, e.slice(t, n)), (a = n));
      },
      n,
      r,
    ),
    i.length > Ht
      ? Rt(e.slice(n, r))
      : (a < r && Lt(i, null, e.slice(a, r)), i.length > Ht ? Rt(e.slice(n, r)) : i)
  );
}
var Bt, Vt, Ht, Ut;
function Wt() {
  return (Wt = e(() => {
    (at(),
      xt(),
      Ct(),
      (Bt = 500),
      (Vt = 65536),
      (Ht = 1e4),
      (Ut = class {
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
              (this.languageSupport = t == null ? null : wt(t)));
            let e = ++this.languageRequestId;
            ((this.languagePending = t != null && this.languageSupport == null),
              t != null &&
                this.languageSupport == null &&
                Et(t).then((t) => {
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
              }, Bt));
        }
        get parser() {
          return this.code.length <= Vt ? (this.languageSupport?.language.parser ?? null) : null;
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
            ((this.parsedCode = null), this.updateRenderState(Rt(this.code)));
            return;
          }
          let t = e.parse(this.code);
          ((this.parsedCode = this.code), this.updateRenderState(zt(this.code, t, 0, this.code.length)));
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
            this.updateRenderState(zt(t, r, 0, t.length));
            return;
          }
          let a = this.renderState.highlightedSegments.map((e) => ({ ...e }));
          for (let e of zt(t, r, n, t.length))
            if ((Lt(a, e.className, e.text), a.length > Ht)) {
              this.updateRenderState(Rt(t));
              return;
            }
          this.updateRenderState(a);
        }
      }));
  }))();
}
function Gt(e) {
  let t = (0, Jt.c)(35),
    { className: n, code: r, language: i, isStreaming: a, isFullscreen: o, wrapLines: s } = e,
    c = a !== void 0 && a,
    l = o !== void 0 && o,
    u = s !== void 0 && s,
    [d] = (0, Yt.useState)(qt),
    f = (0, Yt.useSyncExternalStore)(d.subscribe, d.getSnapshot, d.getSnapshot),
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
    (0, Yt.useEffect)(p, m));
  let h;
  t[6] !== r || t[7] !== f.code || t[8] !== f.highlightedSegments
    ? ((h = r.startsWith(f.code) ? f.highlightedSegments : []),
      (t[6] = r),
      (t[7] = f.code),
      (t[8] = f.highlightedSegments),
      (t[9] = h))
    : (h = t[9]);
  let g = h,
    v;
  t[10] !== r || t[11] !== f.code
    ? ((v = r.startsWith(f.code) ? r.slice(f.code.length) : r), (t[10] = r), (t[11] = f.code), (t[12] = v))
    : (v = t[12]);
  let y = v,
    b;
  t[13] === n
    ? (b = t[14])
    : ((b = _(`relative z-0 flex max-w-full`, ke.Viewer, n)), (t[13] = n), (t[14] = b));
  let x = f.pending || f.code !== r ? `` : void 0,
    S = u ? `overflow-x-hidden` : `overflow-x-auto`,
    C;
  t[15] === S
    ? (C = t[16])
    : ((C = _(`chatgpt-code-scrollport flex w-full items-stretch overscroll-x-contain`, ke.Scrollport, S)),
      (t[15] = S),
      (t[16] = C));
  let w = l ? `pt-3` : `pt-0`,
    T = u ? `min-w-0 whitespace-pre-wrap wrap-anywhere` : `min-w-max whitespace-pre`,
    E;
  t[17] !== w || t[18] !== T
    ? ((E = _(
        `m-0 flex-1 cursor-text px-4 pb-3 font-mono text-size-code text-default md:px-5`,
        ke.ViewerContent,
        w,
        T,
      )),
      (t[17] = w),
      (t[18] = T),
      (t[19] = E))
    : (E = t[19]);
  let D;
  t[20] === g ? (D = t[21]) : ((D = g.map(Kt)), (t[20] = g), (t[21] = D));
  let O;
  t[22] !== D || t[23] !== y
    ? ((O = (0, Xt.jsxs)(`code`, { children: [D, y] })), (t[22] = D), (t[23] = y), (t[24] = O))
    : (O = t[24]);
  let k;
  t[25] !== E || t[26] !== O
    ? ((k = (0, Xt.jsx)(`pre`, { className: E, children: O })), (t[25] = E), (t[26] = O), (t[27] = k))
    : (k = t[27]);
  let A;
  t[28] !== C || t[29] !== k
    ? ((A = (0, Xt.jsx)(`div`, { className: C, children: k })), (t[28] = C), (t[29] = k), (t[30] = A))
    : (A = t[30]);
  let j;
  return (
    t[31] !== A || t[32] !== b || t[33] !== x
      ? ((j = (0, Xt.jsx)(`div`, { className: b, dir: `ltr`, "data-search-result-pending": x, children: A })),
        (t[31] = A),
        (t[32] = b),
        (t[33] = x),
        (t[34] = j))
      : (j = t[34]),
    j
  );
}
function Kt(e, t) {
  return (0, Xt.jsx)(`span`, { className: e.className ?? void 0, children: e.text }, t);
}
function qt() {
  return new Ut();
}
var Jt, Yt, Xt;
function Zt() {
  return (Zt = e(() => {
    ((Jt = x()), v(), (Yt = u()), Wt(), we(), (Xt = g()));
  }))();
}
function Qt(e) {
  let t = (0, tn.c)(72),
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
    v = pe(),
    y = F(),
    b = (0, X.useRef)(null),
    x = (0, X.useRef)(!0),
    S = (0, X.useRef)(c),
    C = (0, X.useRef)(i),
    w = (0, X.useRef)(!1),
    T = (0, X.useRef)(null),
    E = (0, X.useRef)(null),
    [D, O] = (0, X.useState)(null),
    [k, A] = (0, X.useState)(!1);
  !c && (D != null || k) && (O(null), A(!1));
  let j = D != null && D !== i && !k,
    M;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = function () {
        ((x.current = !0), (w.current = !1), (E.current = null));
      }),
      (t[0] = M))
    : (M = t[0]);
  let N = M,
    P;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = function () {
        (T.current != null && (window.cancelAnimationFrame(T.current), (T.current = null)),
          (E.current = null));
      }),
      (t[1] = P))
    : (P = t[1]);
  let I = P,
    L;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = function () {
        let e = b.current;
        return e == null
          ? (N(), !0)
          : en(e)
            ? (w.current && ((e.scrollTop = $t(e)), I()), N(), !0)
            : ((x.current = !1), !1);
      }),
      (t[2] = L))
    : (L = t[2]);
  let ee = L,
    R;
  t[3] === i
    ? (R = t[4])
    : ((R = function () {
        ee() ? (O(null), A(!1)) : O((e) => e ?? i);
      }),
      (t[3] = i),
      (t[4] = R));
  let z = R,
    B;
  t[5] === z
    ? (B = t[6])
    : ((B = function () {
        if (T.current != null) return;
        function e(t) {
          T.current = null;
          let n = b.current;
          if (n == null || !w.current) {
            E.current = null;
            return;
          }
          let r = $t(n),
            i = r - n.scrollTop;
          if (en(n)) {
            ((n.scrollTop = r), z());
            return;
          }
          let a = E.current ?? t - 16,
            o = Math.min(on, Math.max(0, t - a));
          E.current = t;
          let s = i * (1 - Math.exp(-o / an)),
            c = Math.sign(i) * Math.min(Math.abs(i), 1);
          ((n.scrollTop += Math.abs(s) < 1 ? c : s), (T.current = window.requestAnimationFrame(e)));
        }
        T.current = window.requestAnimationFrame(e);
      }),
      (t[5] = z),
      (t[6] = B));
  let te = B,
    ne;
  t[7] !== y || t[8] !== te
    ? ((ne = function () {
        let e = b.current;
        if (e != null && T.current == null) {
          if (y) {
            ((e.scrollTop = $t(e)), N());
            return;
          }
          te();
        }
      }),
      (t[7] = y),
      (t[8] = te),
      (t[9] = ne))
    : (ne = t[9]);
  let V = ne,
    H;
  t[10] === z
    ? (H = t[11])
    : ((H = function () {
        (A(!1), (w.current = !1), I(), z());
      }),
      (t[10] = z),
      (t[11] = H));
  let U = H,
    re;
  t[12] !== z || t[13] !== V
    ? ((re = function () {
        b.current != null && (A(!0), (w.current = !0), I(), V(), z());
      }),
      (t[12] = z),
      (t[13] = V),
      (t[14] = re))
    : (re = t[14]);
  let ie = re,
    ae;
  t[15] !== i || t[16] !== c || t[17] !== V
    ? ((ae = () => {
        let e = S.current,
          t = C.current !== i;
        if (((S.current = c), (C.current = i), !c)) {
          let n = b.current;
          (n != null && e && (w.current || (t && x.current)) && (n.scrollTop = $t(n)), I(), N());
          return;
        }
        let n = b.current;
        if (n == null) {
          (N(), I());
          return;
        }
        (w.current ? V() : (I(), t && x.current && (n.scrollTop = n.scrollHeight)), ee());
      }),
      (t[15] = i),
      (t[16] = c),
      (t[17] = V),
      (t[18] = ae))
    : (ae = t[18]);
  let oe = (0, X.useEffectEvent)(ae),
    W = (0, X.useEffectEvent)(I),
    se;
  t[19] === oe
    ? (se = t[20])
    : ((se = () => {
        oe();
      }),
      (t[19] = oe),
      (t[20] = se));
  let ce;
  (t[21] !== i || t[22] !== c ? ((ce = [i, c]), (t[21] = i), (t[22] = c), (t[23] = ce)) : (ce = t[23]),
    (0, X.useLayoutEffect)(se, ce));
  let le;
  t[24] === W
    ? (le = t[25])
    : ((le = () => () => {
        W();
      }),
      (t[24] = W),
      (t[25] = le));
  let G;
  (t[26] === Symbol.for(`react.memo_cache_sentinel`) ? ((G = []), (t[26] = G)) : (G = t[26]),
    (0, X.useLayoutEffect)(le, G));
  let K;
  t[27] !== i || t[28] !== o || t[29] !== c || t[30] !== a || t[31] !== d
    ? ((K = (0, Z.jsx)(Gt, { code: i, language: a, isStreaming: c, isFullscreen: o, wrapLines: d })),
      (t[27] = i),
      (t[28] = o),
      (t[29] = c),
      (t[30] = a),
      (t[31] = d),
      (t[32] = K))
    : (K = t[32]);
  let ue = K,
    de = o && `flex h-full min-h-0 w-full flex-col`,
    fe = !o && u && `[container-type:inline-size]`,
    me;
  t[33] !== de || t[34] !== fe
    ? ((me = _(`relative`, de, fe)), (t[33] = de), (t[34] = fe), (t[35] = me))
    : (me = t[35]);
  let he = o && `flex h-full min-h-0 w-full flex-col overflow-y-auto`,
    ge = !o && l && `absolute inset-0 overflow-hidden`,
    q = !o && u && ke.InlineCodePane,
    _e = !o && u && `w-full overflow-x-hidden`,
    ve = o && !l && `mx-auto grow`,
    J;
  t[36] !== n || t[37] !== he || t[38] !== ge || t[39] !== q || t[40] !== _e || t[41] !== ve
    ? ((J = _(he, ge, q, _e, ve, n)),
      (t[36] = n),
      (t[37] = he),
      (t[38] = ge),
      (t[39] = q),
      (t[40] = _e),
      (t[41] = ve),
      (t[42] = J))
    : (J = t[42]);
  let ye = c ? U : void 0,
    be = c ? z : void 0,
    xe = c ? U : void 0,
    Se = c ? U : void 0,
    Y;
  t[43] !== g ||
  t[44] !== i ||
  t[45] !== f ||
  t[46] !== p ||
  t[47] !== o ||
  t[48] !== s ||
  t[49] !== a ||
  t[50] !== h ||
  t[51] !== m ||
  t[52] !== ue ||
  t[53] !== d
    ? ((Y = s
        ? ue
        : (0, Z.jsx)(X.Suspense, {
            fallback: (0, Z.jsxs)(Z.Fragment, {
              children: [(0, Z.jsx)(`span`, { hidden: !0, "data-search-result-pending": !0 }), ue],
            }),
            children: (0, Z.jsx)(nn, {
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
      (t[52] = ue),
      (t[53] = d),
      (t[54] = Y))
    : (Y = t[54]);
  let Ce;
  t[55] !== J || t[56] !== ye || t[57] !== be || t[58] !== xe || t[59] !== Se || t[60] !== Y
    ? ((Ce = (0, Z.jsx)(`div`, {
        ref: b,
        className: J,
        onPointerDown: ye,
        onScroll: be,
        onTouchMove: xe,
        onWheel: Se,
        children: Y,
      })),
      (t[55] = J),
      (t[56] = ye),
      (t[57] = be),
      (t[58] = xe),
      (t[59] = Se),
      (t[60] = Y),
      (t[61] = Ce))
    : (Ce = t[61]);
  let we;
  t[62] === v
    ? (we = t[63])
    : ((we = v.formatMessage({
        id: `chatgpt.codeBlocks.editorPane.scrollToBottom`,
        defaultMessage: `Scroll to bottom`,
        description: `Accessible label for the button that returns to the latest code while ChatGPT is still generating a code block`,
      })),
      (t[62] = v),
      (t[63] = we));
  let Te = c && j,
    Ee;
  t[64] !== ie || t[65] !== we || t[66] !== Te
    ? ((Ee = (0, Z.jsx)(Pe, { className: `bottom-4`, label: we, show: Te, onClick: ie })),
      (t[64] = ie),
      (t[65] = we),
      (t[66] = Te),
      (t[67] = Ee))
    : (Ee = t[67]);
  let De;
  return (
    t[68] !== me || t[69] !== Ce || t[70] !== Ee
      ? ((De = (0, Z.jsxs)(`div`, { className: me, children: [Ce, Ee] })),
        (t[68] = me),
        (t[69] = Ce),
        (t[70] = Ee),
        (t[71] = De))
      : (De = t[71]),
    De
  );
}
function $t(e) {
  return Math.max(0, e.scrollHeight - e.clientHeight);
}
function en(e) {
  return Math.max(0, $t(e) - e.scrollTop) <= rn;
}
var tn, X, Z, nn, rn, an, on;
function sn() {
  return (sn = e(() => {
    ((tn = x()),
      v(),
      (X = u()),
      L(),
      l(),
      Ie(),
      M(),
      Zt(),
      we(),
      (Z = g()),
      G(),
      (nn = m(
        async () =>
          (
            await b(
              async () => {
                let { ChatGptCodeBlockEditor: e } = await import(
                  `./chatgpt-code-block-editor-c53b88966141.js`
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
            (0, Z.jsx)(Gt, { code: e, language: t, wrapLines: n }),
        },
      )),
      (rn = 3),
      (an = 75),
      (on = 64));
  }))();
}
function cn(e) {
  let t = (0, ln.c)(42),
    {
      codeBlockIndex: n,
      codeBlockType: r,
      language: a,
      messageId: o,
      serverConversationId: s,
      userEditedCodeBlock: c,
    } = e,
    l = i(D),
    u = pe(),
    f = (0, un.useId)(),
    [p, m] = (0, un.useState)(``),
    [g, _] = (0, un.useState)(!1),
    [v, y] = (0, un.useState)(!1),
    [b, x] = (0, un.useState)(!1),
    S;
  t[0] === u
    ? (S = t[1])
    : ((S = u.formatMessage({
        id: `chatgpt.codeBlocks.feedback.open`,
        defaultMessage: `Give feedback`,
        description: `Accessible label and visible action text for opening or submitting written feedback about a chart or interactive app shown in a ChatGPT code block`,
      })),
      (t[0] = u),
      (t[1] = S));
  let C = S;
  if (b) return null;
  let w;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Q.jsx)(k, { icon: { 16: d, 20: h } })), (t[2] = w))
    : (w = t[2]);
  let T;
  t[3] === C
    ? (T = t[4])
    : ((T = (0, Q.jsx)(ie, {
        asChild: !0,
        children: (0, Q.jsx)(ee, {
          "aria-label": C,
          color: `ghostActive`,
          size: `imageToolbar`,
          uniform: !0,
          children: w,
        }),
      })),
      (t[3] = C),
      (t[4] = T));
  let E;
  t[5] !== n ||
  t[6] !== r ||
  t[7] !== p ||
  t[8] !== v ||
  t[9] !== a ||
  t[10] !== o ||
  t[11] !== l ||
  t[12] !== s ||
  t[13] !== c
    ? ((E = (e) => {
        e.preventDefault();
        let t = p.trim();
        t &&
          !v &&
          (y(!0),
          Ue.safePost(`/conversation/message/code-blocks/feedback`, {
            requestBody: {
              code_block_index: String(n),
              code_block_type: r,
              conversation_id: s,
              feedback: t,
              language: a,
              message_id: o,
              user_edited_code_block: c,
            },
          })
            .then(() => {
              (x(!0),
                _(!1),
                l
                  .get(he)
                  .success(
                    (0, Q.jsx)(q, {
                      id: `chatgpt.codeBlocks.feedback.success`,
                      defaultMessage: `Your feedback has been submitted`,
                      description: `Success toast shown after submitting written feedback about a chart or interactive app generated in a ChatGPT code block`,
                    }),
                  ));
            })
            .catch(() => {
              l.get(he).danger(
                (0, Q.jsx)(q, {
                  id: `chatgpt.codeBlocks.feedback.error`,
                  defaultMessage: `Couldn’t submit feedback`,
                  description: `Error toast shown when written feedback about a chart or interactive app generated in a ChatGPT code block cannot be submitted`,
                }),
                { errorAnalytics: { toastId: `chatgpt.codeBlocks.feedback.error` } },
              );
            })
            .finally(() => y(!1)));
      }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = p),
      (t[8] = v),
      (t[9] = a),
      (t[10] = o),
      (t[11] = l),
      (t[12] = s),
      (t[13] = c),
      (t[14] = E))
    : (E = t[14]);
  let O;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Q.jsx)(se, {
        children: (0, Q.jsx)(q, {
          id: `chatgpt.codeBlocks.feedback.title`,
          defaultMessage: `This is a visualization, a new feature we’re testing`,
          description: `Heading of a feedback popover that explains a chart or interactive app in a ChatGPT code block is an experimental visualization`,
        }),
      })),
      (t[15] = O))
    : (O = t[15]);
  let A;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(q, {
        id: `chatgpt.codeBlocks.feedback.description`,
        defaultMessage: `Tell us what’s working and what’s not about this visualization. The more specific the feedback, the better.`,
        description: `Field label asking a ChatGPT user to describe positive or negative feedback about a chart or interactive app shown inside a code block`,
      })),
      (t[16] = A))
    : (A = t[16]);
  let j;
  t[17] === f
    ? (j = t[18])
    : ((j = (0, Q.jsx)(`label`, { htmlFor: f, children: A })), (t[17] = f), (t[18] = j));
  let M;
  t[19] === u
    ? (M = t[20])
    : ((M = u.formatMessage({
        id: `chatgpt.codeBlocks.feedback.placeholder`,
        defaultMessage: `What did you like or dislike about this visualization?`,
        description: `Placeholder for the multiline feedback field about a chart or interactive app shown in a ChatGPT code block`,
      })),
      (t[19] = u),
      (t[20] = M));
  let N;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (e) => m(e.target.value)), (t[21] = N))
    : (N = t[21]);
  let P;
  t[22] !== p || t[23] !== f || t[24] !== M
    ? ((P = (0, Q.jsx)(Ae, {
        autoFocus: !0,
        id: f,
        name: `block-feedback-text`,
        placeholder: M,
        rows: 3,
        value: p,
        onChange: N,
      })),
      (t[22] = p),
      (t[23] = f),
      (t[24] = M),
      (t[25] = P))
    : (P = t[25]);
  let F;
  t[26] !== p || t[27] !== v ? ((F = !p.trim() || v), (t[26] = p), (t[27] = v), (t[28] = F)) : (F = t[28]);
  let I;
  t[29] !== C || t[30] !== v || t[31] !== F
    ? ((I = (0, Q.jsx)(ee, {
        color: `secondary`,
        disabled: F,
        loading: v,
        size: `compact`,
        type: `submit`,
        children: C,
      })),
      (t[29] = C),
      (t[30] = v),
      (t[31] = F),
      (t[32] = I))
    : (I = t[32]);
  let L;
  t[33] !== P || t[34] !== I || t[35] !== E || t[36] !== j
    ? ((L = (0, Q.jsx)(K, {
        align: `end`,
        side: `top`,
        children: (0, Q.jsxs)(`form`, {
          className: `flex flex-col gap-2 p-2`,
          onSubmit: E,
          children: [O, j, P, I],
        }),
      })),
      (t[33] = P),
      (t[34] = I),
      (t[35] = E),
      (t[36] = j),
      (t[37] = L))
    : (L = t[37]);
  let R;
  return (
    t[38] !== g || t[39] !== L || t[40] !== T
      ? ((R = (0, Q.jsxs)(U, { open: g, onOpenChange: _, children: [T, L] })),
        (t[38] = g),
        (t[39] = L),
        (t[40] = T),
        (t[41] = R))
      : (R = t[41]),
    R
  );
}
var ln, un, Q;
function dn() {
  return (dn = e(() => {
    ((ln = x()), B(), (un = u()), L(), Ze(), R(), j(), te(), ve(), J(), N(), a(), (Q = g()));
  }))();
}
function fn({ spec: e, mode: t }) {
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
    <script src="${pn}"><\/script>
    <script src="${mn}"><\/script>
    <script src="${hn}"><\/script>
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
var pn, mn, hn;
function gn() {
  return (gn = e(() => {
    ((pn = `https://cdn.jsdelivr.net/npm/vega@5/build/vega.min.js`),
      (mn = `https://cdn.jsdelivr.net/npm/vega-lite@5/build/vega-lite.min.js`),
      (hn = `https://cdn.jsdelivr.net/npm/vega-embed@6/build/vega-embed.min.js`));
  }))();
}
function _n(e, t) {
  let n = e?.trim().toLowerCase(),
    r = bn.test(t);
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
      let e = xn.exec(t)?.[1];
      return e === `vega` || e === `vega-lite` ? e : null;
    }
    case `react`:
      return yn.test(t) ? `react` : null;
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
      return /(?:['"]react['"])/.test(t) && yn.test(t) ? `react` : null;
    case void 0:
      return r ? `svg` : null;
    default:
      return null;
  }
}
function vn(e, t) {
  if (e === `html`) return t;
  if (e === `vega` || e === `vega-lite`) return fn({ mode: e, spec: t });
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
  void globalThis.openai.callTool("${yt}",{}).catch(()=>{});
}));
<\/script>`;
}
var yn, bn, xn;
function Sn() {
  return (Sn = e(() => {
    (bt(),
      gn(),
      (yn = /\bexport\s+default\b/),
      (bn = /^\uFEFF?\s*(?:<\?xml\b[\s\S]*?\?>\s*)?(?:<!doctype\s+svg\b[^>]*>\s*)?<svg\b/i),
      (xn =
        /["']\$schema["']\s*:\s*["']https:\/\/vega\.github\.io\/schema\/(vega-lite|vega)\/v\d+(?:\.\d+)?\.json["']/i));
  }))();
}
function Cn(e) {
  let t = (0, wn.c)(60),
    {
      code: n,
      codeBlockIndex: r,
      hostId: a,
      isCodeFenceOpen: o,
      mermaidDiagramId: s,
      onFailure: c,
      onMermaidCodeChange: l,
      onMermaidCodeBlur: u,
      previewLanguage: d,
      previewRef: f,
      startMode: p,
      threadId: m,
      title: h,
      turnId: g,
    } = e,
    v = p === void 0 ? `visible` : p,
    y = i(D),
    b = pe(),
    [x] = (0, En.useState)(v),
    S = (0, En.useRef)(null),
    C;
  t[0] !== n || t[1] !== c || t[2] !== d
    ? ((C = (e) => {
        (S.current?.code !== n || S.current.previewLanguage !== d) &&
          ((S.current = { code: n, previewLanguage: d }), e === `failure` && c?.());
      }),
      (t[0] = n),
      (t[1] = c),
      (t[2] = d),
      (t[3] = C))
    : (C = t[3]);
  let w = C,
    T;
  t[4] !== n || t[5] !== x || t[6] !== d || t[7] !== w || t[8] !== y
    ? ((T = (e) => {
        let { signal: t } = e,
          r = S.current?.code === n && S.current.previewLanguage === d,
          i = !1,
          a = (e) => {
            t.aborted ||
              (!i &&
                r &&
                e === `failure` &&
                $e(y, Ge, {
                  category: `preview_failure_suppressed`,
                  previewHost: `apps`,
                  previewLanguage: d,
                  startMode: x,
                }),
              (i = !0),
              w(e));
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
          onContentMeasured: Tn.default,
          onContentUpdated: Tn.default,
        };
      }),
      (t[4] = n),
      (t[5] = x),
      (t[6] = d),
      (t[7] = w),
      (t[8] = y),
      (t[9] = T))
    : (T = t[9]);
  let E = re(T),
    O;
  if (d === `svg`) {
    let e;
    t[10] === b
      ? (e = t[11])
      : ((e = b.formatMessage({
          id: `chatgpt.codeBlocks.svg.ariaLabel`,
          defaultMessage: `Image generated by the assistant`,
          description: `Accessible description of an SVG image preview rendered from a ChatGPT code block`,
        })),
        (t[10] = b),
        (t[11] = e));
    let r, i;
    t[12] === w
      ? ((r = t[13]), (i = t[14]))
      : ((r = () => w(`failure`)), (i = () => w(`success`)), (t[12] = w), (t[13] = r), (t[14] = i));
    let a;
    (t[15] !== n || t[16] !== e || t[17] !== r || t[18] !== i
      ? ((a = (0, Dn.jsx)(V, {
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
    t[20] === o ? (e = t[21]) : ((e = (0, Dn.jsx)(Be, { isStreaming: o })), (t[20] = o), (t[21] = e));
    let r;
    t[22] !== n || t[23] !== o || t[24] !== s || t[25] !== u || t[26] !== l || t[27] !== f || t[28] !== w
      ? ((r = (0, Dn.jsx)(On, {
          ref: f,
          code: n,
          diagramId: s,
          isStreaming: o,
          onCodeChange: l,
          onCodeBlur: u,
          onRenderOutcome: w,
        })),
        (t[22] = n),
        (t[23] = o),
        (t[24] = s),
        (t[25] = u),
        (t[26] = l),
        (t[27] = f),
        (t[28] = w),
        (t[29] = r))
      : (r = t[29]);
    let i;
    (t[30] !== e || t[31] !== r
      ? ((i = (0, Dn.jsx)(En.Suspense, { fallback: e, children: r })), (t[30] = e), (t[31] = r), (t[32] = i))
      : (i = t[32]),
      (O = i));
  } else {
    let e = `code-block-${r}.html`,
      i;
    t[33] === e ? (i = t[34]) : ((i = { path: e }), (t[33] = e), (t[34] = i));
    let o;
    t[35] === E ? (o = t[36]) : ((o = () => ({ onRunStart: E })), (t[35] = E), (t[36] = o));
    let s;
    t[37] !== n || t[38] !== d ? ((s = vn(d, n)), (t[37] = n), (t[38] = d), (t[39] = s)) : (s = t[39]);
    let c;
    t[40] === w
      ? (c = t[41])
      : ((c = (e) => {
          e === `failed` && w(`failure`);
        }),
        (t[40] = w),
        (t[41] = c));
    let l;
    (t[42] !== a ||
    t[43] !== x ||
    t[44] !== d ||
    t[45] !== i ||
    t[46] !== o ||
    t[47] !== s ||
    t[48] !== c ||
    t[49] !== m ||
    t[50] !== h ||
    t[51] !== g
      ? ((l = (0, Dn.jsx)(`div`, {
          className: `relative h-full w-full overflow-y-auto`,
          children: (0, Dn.jsx)(Y, {
            attributes: i,
            codePreviewLanguage: d,
            codePreviewStartMode: x,
            createRenderObserver: o,
            embeddedHtml: s,
            hostId: a,
            onEmbeddedStatusChange: c,
            presentation: `code-preview`,
            threadId: m,
            title: h,
            turnId: g,
          }),
        })),
        (t[42] = a),
        (t[43] = x),
        (t[44] = d),
        (t[45] = i),
        (t[46] = o),
        (t[47] = s),
        (t[48] = c),
        (t[49] = m),
        (t[50] = h),
        (t[51] = g),
        (t[52] = l))
      : (l = t[52]),
      (O = l));
  }
  let k = d === `svg` && `min-h-24`,
    A = d !== `svg` && d !== `mermaid` && `aspect-video`,
    j;
  t[53] !== k || t[54] !== A
    ? ((j = _(`group pointer-events-auto flex w-full overflow-hidden`, k, A)),
      (t[53] = k),
      (t[54] = A),
      (t[55] = j))
    : (j = t[55]);
  let M;
  return (
    t[56] !== O || t[57] !== d || t[58] !== j
      ? ((M = (0, Dn.jsx)(`div`, { "data-code-block-preview-pane": d, className: j, children: O })),
        (t[56] = O),
        (t[57] = d),
        (t[58] = j),
        (t[59] = M))
      : (M = t[59]),
    M
  );
}
var wn, Tn, En, Dn, On;
function kn() {
  return (kn = e(() => {
    ((wn = x()),
      Te(),
      v(),
      (Tn = t(A(), 1)),
      B(),
      (En = u()),
      L(),
      tt(),
      a(),
      W(),
      Oe(),
      _e(),
      Sn(),
      Xe(),
      (Dn = g()),
      G(),
      (On = (0, En.lazy)(async () => ({
        default: (
          await b(
            async () => {
              let { ChatGptMermaidPreview: e } = await import(`./preview-85b93e888cc5.js`);
              return { ChatGptMermaidPreview: e };
            },
            __vite__mapDeps([15, 1, 2, 3, 16, 12, 13, 17, 18, 19, 20]),
            import.meta.url,
          )
        ).ChatGptMermaidPreview,
      }))));
  }))();
}
function An(e) {
  let t = (0, jn.c)(23),
    { codeBlockIndex: n, conversationId: r, language: a, messageId: o, serverConversationId: s } = e,
    c = i(D),
    l = pe(),
    [u, d] = (0, Mn.useState)(!1),
    f;
  t[0] === l
    ? (f = t[1])
    : ((f = l.formatMessage({
        id: `chatgpt.codeBlocks.share.ariaLabel`,
        defaultMessage: `Share code block`,
        description: `Accessible label and tooltip for a button that creates and copies a shareable read-only link to one code block in a ChatGPT conversation`,
      })),
      (t[0] = l),
      (t[1] = f));
  let p = f,
    m;
  t[2] !== n || t[3] !== r || t[4] !== a || t[5] !== o || t[6] !== c || t[7] !== s
    ? ((m = async () => {
        let e = await Ue.safePost(`/share/post`, {
          requestBody: {
            attachments_to_create: [{ code_index: n, conversation_id: s, kind: `code_block`, message_id: o }],
          },
        });
        $e(c, Re, { conversationId: r, language: a, messageId: o, postId: e.post.id });
        let t = e.post.permalink ?? `https://chatgpt.com/s/${encodeURIComponent(e.post.id)}`;
        (await y(t)) && ze(c);
      }),
      (t[2] = n),
      (t[3] = r),
      (t[4] = a),
      (t[5] = o),
      (t[6] = c),
      (t[7] = s),
      (t[8] = m))
    : (m = t[8]);
  let h = m,
    g;
  t[9] !== h || t[10] !== u || t[11] !== c
    ? ((g = () => {
        u ||
          (d(!0),
          h()
            .catch(() => {
              c.get(he).danger(
                (0, Nn.jsx)(q, {
                  id: `chatgpt.codeBlocks.share.error`,
                  defaultMessage: `Failed to create share link`,
                  description: `Error toast displayed when a shareable code block link cannot be created`,
                }),
                { errorAnalytics: { toastId: `chatgpt.codeBlocks.share.error` } },
              );
            })
            .finally(() => d(!1)));
      }),
      (t[9] = h),
      (t[10] = u),
      (t[11] = c),
      (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] === u
    ? (_ = t[14])
    : ((_ = !u && (0, Nn.jsx)(k, { icon: { 16: oe, 20: ne } })), (t[13] = u), (t[14] = _));
  let v;
  t[15] !== u || t[16] !== p || t[17] !== g || t[18] !== _
    ? ((v = (0, Nn.jsx)(ee, {
        "aria-label": p,
        color: `ghostActive`,
        disabled: u,
        loading: u,
        size: `imageToolbar`,
        uniform: !0,
        onClick: g,
        children: _,
      })),
      (t[15] = u),
      (t[16] = p),
      (t[17] = g),
      (t[18] = _),
      (t[19] = v))
    : (v = t[19]);
  let b;
  return (
    t[20] !== p || t[21] !== v
      ? ((b = (0, Nn.jsx)(ue, { tooltipContent: p, children: v })), (t[20] = p), (t[21] = v), (t[22] = b))
      : (b = t[22]),
    b
  );
}
var jn, Mn, Nn;
function Pn() {
  return (Pn = e(() => {
    ((jn = x()),
      Te(),
      B(),
      (Mn = u()),
      L(),
      Ze(),
      R(),
      j(),
      ve(),
      N(),
      ge(),
      tt(),
      a(),
      Ye(),
      S(),
      (Nn = g()));
  }))();
}
var Fn;
function In() {
  return (In = e(() => {
    Fn = {
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
function Ln(e) {
  let t = (0, zn.c)(76),
    {
      streamingBuffer: a,
      codeBlockIndex: c,
      codeBlockInfo: l,
      clipboardContent: u,
      content: d,
      editable: f,
      forceCodeBlockWordWrap: p,
      isCodeFenceOpen: m,
      isInteractive: h,
      language: g,
      renderMath: v,
      stickyHeader: b,
      turnContext: x,
    } = e,
    S = f === void 0 || f,
    O = h === void 0 || h,
    A = v === void 0 || v,
    j = i(D),
    M = pe(),
    N = (0, Bn.useId)(),
    F = de(be, x.conversationId),
    I = le(Le),
    L = Se(`3336871980`),
    R = xe(`110872417`),
    B = x.codeBlocks?.[String(c)],
    te;
  t[0] !== c || t[1] !== x.conversationId || t[2] !== x.messageId
    ? ((te =
        x.messageId == null
          ? null
          : { conversationId: x.conversationId, messageId: x.messageId, codeBlockIndex: c }),
      (t[0] = c),
      (t[1] = x.conversationId),
      (t[2] = x.messageId),
      (t[3] = te))
    : (te = t[3]);
  let ne = de(pt, te),
    V = ne ?? B?.content ?? d,
    H = ne ?? B?.content ?? u ?? d,
    U = _n(g, V);
  B?.render_mode === `app_block` ? (U = `html`) : P(g, m) && (U = `mermaid`);
  let re = le(B?.render_mode !== `app_block` && U != null && U !== `svg` ? vt : null),
    ie = B?.render_mode === `app_block` || /\bpreview\b/.test(l ?? ``),
    oe = U === `svg` || U === `mermaid`,
    W = U != null && (re?.status === `allowed` || U === `svg`) && (oe || !x.shouldBlockExternalEgress),
    se = g?.trim().toLowerCase(),
    ce = se === `python` || se === `py`,
    G = !x.shouldBlockExternalEgress && F != null && x.messageId != null,
    K = S && O && !x.isReadOnly,
    fe =
      W &&
      (!m || U === `mermaid`) &&
      (oe ||
        U === `vega` ||
        U === `vega-lite` ||
        ie ||
        (L.get(`code_blocks_auto_preview`, !1) &&
          (U === `react` || (U === `html` && /<html(?:\s|>)/i.test(V))))),
    [ge, q] = (0, Bn.useState)(!1),
    [_e, ve] = (0, Bn.useState)(null),
    J = W ? (_e ?? (fe ? `preview` : `code`)) : `code`,
    ye = (0, Bn.useRef)(null),
    Y = (0, Bn.useRef)(0),
    Ce = (0, Bn.useRef)(null),
    we = se === `latex` || se === `tex`,
    Te = Fn[se ?? ``]?.language ?? se,
    De;
  t[4] !== M || t[5] !== g
    ? ((De = g == null ? void 0 : me(g, M)), (t[4] = M), (t[5] = g), (t[6] = De))
    : (De = t[6]);
  let Oe = De,
    Ae = Oe?.value ?? g,
    Ne;
  t[7] !== M || t[8] !== g || t[9] !== Oe?.label || t[10] !== B?.title
    ? ((Ne =
        B?.title ??
        (g === `html` ? g.toUpperCase() : Oe?.label) ??
        g ??
        M.formatMessage({
          id: `chatgpt.codeBlocks.language.fallback`,
          defaultMessage: `Code`,
          description: `Fallback header title for a ChatGPT code block when the fenced code does not specify a programming language`,
        })),
      (t[7] = M),
      (t[8] = g),
      (t[9] = Oe?.label),
      (t[10] = B?.title),
      (t[11] = Ne))
    : (Ne = t[11]);
  let Pe = Ne,
    Fe = {
      clientPreviewable: W,
      conversationId: x.conversationId,
      language: g,
      messageId: x.messageId,
      modelPreviewable: ie,
    };
  if (B?.render_mode === `app_block`) {
    if (x.shouldBlockExternalEgress && x.renderRestrictedWidgets !== !0) return null;
    let e = B.content == null && m,
      n = x.isReadOnly || !O,
      r;
    t[12] !== V || t[13] !== B.title || t[14] !== e || t[15] !== n || t[16] !== x
      ? ((r = (0, $.jsx)(gt, { content: V, isStreaming: e, readOnly: n, title: B.title, turnContext: x })),
        (t[12] = V),
        (t[13] = B.title),
        (t[14] = e),
        (t[15] = n),
        (t[16] = x),
        (t[17] = r))
      : (r = t[17]);
    let i;
    t[18] !== G ||
    t[19] !== R ||
    t[20] !== c ||
    t[21] !== m ||
    t[22] !== O ||
    t[23] !== F ||
    t[24] !== x.isReadOnly ||
    t[25] !== x.isStreaming ||
    t[26] !== x.messageId
      ? ((i =
          R && O && !x.isReadOnly && !m && !x.isStreaming && G && x.messageId != null
            ? (0, $.jsx)(cn, {
                codeBlockIndex: c,
                codeBlockType: `app_block`,
                language: `html`,
                messageId: x.messageId,
                serverConversationId: F,
                userEditedCodeBlock: !1,
              })
            : null),
        (t[18] = G),
        (t[19] = R),
        (t[20] = c),
        (t[21] = m),
        (t[22] = O),
        (t[23] = F),
        (t[24] = x.isReadOnly),
        (t[25] = x.isStreaming),
        (t[26] = x.messageId),
        (t[27] = i))
      : (i = t[27]);
    let a;
    return (
      t[28] !== i || t[29] !== r
        ? ((a = (0, $.jsxs)($.Fragment, { children: [r, i] })), (t[28] = i), (t[29] = r), (t[30] = a))
        : (a = t[30]),
      a
    );
  }
  let Ie;
  t[31] !== G ||
  t[32] !== H.length ||
  t[33] !== j ||
  t[34] !== F ||
  t[35] !== x.conversationOrigin ||
  t[36] !== x.isTemporaryChat ||
  t[37] !== x.messageId ||
  t[38] !== x.suppressCopyTurnToClipboardAnalytics
    ? ((Ie = () => {
        let e;
        (x.conversationOrigin === `tpp`
          ? (e = o.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_WORK)
          : (x.conversationOrigin ?? (e = o.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT)),
          $e(j, Me, { characterCount: E(H.length), productExperience: e }),
          !(x.isTemporaryChat || x.suppressCopyTurnToClipboardAnalytics || !G || x.messageId == null) &&
            Ue.safePost(`/conversation/implicit_message_feedback`, {
              requestBody: {
                conversation_id: F,
                feedback: { feedback_type: `copy`, selected_text_length: H.length },
                location: `code-block`,
                message_id: x.messageId,
                source: `mouse`,
              },
            }).catch(Rn));
      }),
      (t[31] = G),
      (t[32] = H.length),
      (t[33] = j),
      (t[34] = F),
      (t[35] = x.conversationOrigin),
      (t[36] = x.isTemporaryChat),
      (t[37] = x.messageId),
      (t[38] = x.suppressCopyTurnToClipboardAnalytics),
      (t[39] = Ie))
    : (Ie = t[39]);
  let Re = Ie,
    ze;
  t[40] === M
    ? (ze = t[41])
    : ((ze = M.formatMessage({
        id: `chatgpt.codeBlocks.preview.ariaLabel`,
        defaultMessage: `Preview`,
        description: `Accessible label and tooltip for a button that switches a ChatGPT code block from source code to its interactive preview`,
      })),
      (t[40] = M),
      (t[41] = ze));
  let Be = ze,
    We;
  t[42] === M
    ? (We = t[43])
    : ((We = M.formatMessage({
        id: `chatgpt.codeBlocks.showCode.ariaLabel`,
        defaultMessage: `Code`,
        description: `Accessible label and tooltip for a button that switches an interactive ChatGPT code block from preview back to its source code`,
      })),
      (t[42] = M),
      (t[43] = We));
  let Ge = We,
    qe;
  if (W && U != null && (J === `preview` || (ge && !m))) {
    let e = _e == null && (U === `html` || U === `react`) ? `auto` : `visible`,
      n;
    t[44] !== K ||
    t[45] !== c ||
    t[46] !== m ||
    t[47] !== g ||
    t[48] !== j ||
    t[49] !== F ||
    t[50] !== x.conversationId ||
    t[51] !== x.messageId
      ? ((n =
          F != null && x.messageId != null && K && !m
            ? (e) => {
                x.messageId != null &&
                  j
                    .get(ot, { conversationId: x.conversationId, messageId: x.messageId, codeBlockIndex: c })
                    .requestSave(e, g);
              }
            : void 0),
        (t[44] = K),
        (t[45] = c),
        (t[46] = m),
        (t[47] = g),
        (t[48] = j),
        (t[49] = F),
        (t[50] = x.conversationId),
        (t[51] = x.messageId),
        (t[52] = n))
      : (n = t[52]);
    let r;
    (t[53] !== K || t[54] !== c || t[55] !== j || t[56] !== x.conversationId || t[57] !== x.messageId
      ? ((r = () => {
          K &&
            x.messageId != null &&
            j
              .get(ot, { conversationId: x.conversationId, messageId: x.messageId, codeBlockIndex: c })
              .flushSave();
        }),
        (t[53] = K),
        (t[54] = c),
        (t[55] = j),
        (t[56] = x.conversationId),
        (t[57] = x.messageId),
        (t[58] = r))
      : (r = t[58]),
      (qe = (0, $.jsx)(Cn, {
        code: V,
        codeBlockIndex: c,
        hostId: x.hostId,
        isCodeFenceOpen: m,
        mermaidDiagramId: N,
        startMode: J === `preview` ? e : `hover`,
        onFailure: () => {
          $e(j, He, {
            conversationId: F ?? x.conversationId,
            messageId: x.messageId,
            codeBlockLanguage: U,
            operation: `preview`,
            isEdited: V !== d,
          });
        },
        previewLanguage: U,
        previewRef: Ce,
        onMermaidCodeChange: n,
        onMermaidCodeBlur: r,
        threadId: x.browserConversationId ?? x.conversationId,
        title: B?.title ?? Be,
        turnId: x.turnId,
      })));
  }
  let Ye = G && !x.isStreaming,
    Xe = (e) => {
      jt({
        code: V,
        language: g,
        previewLanguage: e,
        captureScreenshotDataUrl: async () => Ce.current?.captureScreenshotDataUrl() ?? null,
      }).catch(() => {
        j.get(he).danger(
          M.formatMessage({
            id: `chatgpt.codeBlocks.download.error`,
            defaultMessage: `Couldn’t download preview`,
            description: `Error toast shown when exporting an interactive ChatGPT code-block preview or Mermaid diagram fails`,
          }),
          { errorAnalytics: { toastId: `code_block_preview_export_failed` } },
        );
      });
    };
  if (U === `mermaid` && J === `preview`) {
    let e;
    t[59] === V
      ? (e = t[60])
      : ((e = (e) => {
          if (e != null) return nt(e, { text: V, highlight: `block` });
        }),
        (t[59] = V),
        (t[60] = e));
    let n = m
        ? null
        : (0, $.jsx)(Mt, {
            onDownload: () => Xe(`mermaid`),
            onCopyCode: () => {
              y(H, void 0, Re);
            },
            onExpand: () => {
              Ce.current?.openFullscreen();
            },
          }),
      r = qe,
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
    we &&
    x.conversationOrigin === `tpp` &&
    K &&
    Ye &&
    !m &&
    F != null &&
    x.messageId != null &&
    /\\begin\{document\}/.test(V)
  ) {
    let e;
    t[65] !== V || t[66] !== M || t[67] !== B?.title
      ? ((e =
          B?.title ??
          /\\title\{([^{}]+)\}/.exec(V)?.[1] ??
          M.formatMessage({
            id: `chatgpt.latex.untitled`,
            defaultMessage: `LaTeX document`,
            description: `Fallback title for a generated LaTeX document without a title.`,
          })),
        (t[65] = V),
        (t[66] = M),
        (t[67] = B?.title),
        (t[68] = e))
      : (e = t[68]);
    let n;
    return (
      t[69] !== V ||
      t[70] !== c ||
      t[71] !== F ||
      t[72] !== e ||
      t[73] !== x.conversationId ||
      t[74] !== x.messageId
        ? ((n = (0, $.jsx)(Nt, {
            document: {
              conversationId: x.conversationId,
              serverConversationId: F,
              messageId: x.messageId,
              codeBlockIndex: c,
              initialSource: V,
              title: e,
            },
          })),
          (t[69] = V),
          (t[70] = c),
          (t[71] = F),
          (t[72] = e),
          (t[73] = x.conversationId),
          (t[74] = x.messageId),
          (t[75] = n))
        : (n = t[75]),
      n
    );
  }
  let Ze = (e, t, i, a) => {
      let o = i !== void 0 && i,
        l = a === void 0 ? V : a,
        u = K && ce && G && o,
        d =
          J === `code` && Te != null && Tt(Te)
            ? (0, $.jsx)(Qt, {
                autoFocus: !1,
                code: l,
                language: Te,
                isFullscreen: !1,
                isReadonly: !u,
                isStreaming: m,
                isPreviewing: !1,
                useFixedInlineHeight: !0,
                wrapLines: p || I,
                editorStateRef: ye,
                onBlur: () => {
                  u &&
                    x.messageId != null &&
                    j
                      .get(ot, {
                        conversationId: x.conversationId,
                        messageId: x.messageId,
                        codeBlockIndex: c,
                      })
                      .flushSave();
                },
                onChange: (e) => {
                  u &&
                    x.messageId != null &&
                    j
                      .get(ot, {
                        conversationId: x.conversationId,
                        messageId: x.messageId,
                        codeBlockIndex: c,
                      })
                      .requestSave(e, g);
                },
              })
            : void 0;
      return (0, $.jsx)(`div`, {
        className: _(Ee.CodeBlock, t != null && `rounded-(--radius-3xl-base) bg-surface-elevated`),
        children: (0, $.jsx)(C, {
          ref: (e) => {
            if (e != null) return nt(e, { text: V, highlight: `block` });
          },
          actionButtons: (0, $.jsxs)($.Fragment, {
            children: [
              m ? (0, $.jsx)(n, { className: `icon-xs` }) : null,
              Ye && K && W && L.get(`code_blocks_sharing_enabled`, !1) && F != null && x.messageId != null
                ? (0, $.jsx)(An, {
                    codeBlockIndex: c,
                    conversationId: x.conversationId,
                    language: g,
                    messageId: x.messageId,
                    serverConversationId: F,
                  })
                : null,
              W && !m && J === `preview` && (U === `html` || U === `react`)
                ? (0, $.jsx)(ue, {
                    tooltipContent: M.formatMessage({
                      id: `chatgpt.codeBlocks.download.ariaLabel`,
                      defaultMessage: `Download code`,
                      description: `Accessible label and tooltip for a button that downloads the source of an interactive ChatGPT code block`,
                    }),
                    children: (0, $.jsx)(ee, {
                      "aria-label": M.formatMessage({
                        id: `chatgpt.codeBlocks.download.button.ariaLabel`,
                        defaultMessage: `Download code`,
                        description: `Accessible label for a button that downloads the source of an interactive ChatGPT code block`,
                      }),
                      color: `ghostActive`,
                      size: `imageToolbar`,
                      uniform: !0,
                      onClick: () => Xe(U),
                      children: (0, $.jsx)(k, { icon: { 16: w, 20: r } }),
                    }),
                  })
                : null,
            ],
          }),
          alternateContent: ce
            ? (0, $.jsxs)(`div`, {
                ref: (e) => {
                  if (e == null) return;
                  e.style.minHeight = `min(${Y.current}px, 56.25cqw)`;
                  let t = new ResizeObserver((t) => {
                    let [n] = t;
                    n.contentRect.height > Y.current &&
                      ((Y.current = n.contentRect.height),
                      (e.style.minHeight = `min(${Y.current}px, 56.25cqw)`));
                  });
                  return (t.observe(e), () => t.disconnect());
                },
                className: `grid`,
                children: [
                  (0, $.jsx)(`div`, {
                    className: _(`col-start-1 row-start-1 min-w-0`, t != null && `invisible`),
                    "aria-hidden": t != null,
                    "data-markdown-copy": t == null ? void 0 : `exclude`,
                    inert: t != null,
                    children: d,
                  }),
                  t == null
                    ? null
                    : (0, $.jsx)(`div`, {
                        className: _(
                          `col-start-1 row-start-1 min-w-0 bg-surface-elevated`,
                          ke.InlineCodePane,
                        ),
                        children: t,
                      }),
                ],
              })
            : d,
          previewContent:
            qe == null
              ? void 0
              : (0, $.jsx)(`div`, {
                  className: _(J !== `preview` && `pointer-events-none absolute inset-x-0 top-0 opacity-0`),
                  "aria-hidden": J !== `preview`,
                  inert: J !== `preview`,
                  "data-markdown-copy": J === `preview` ? void 0 : `exclude`,
                  children: qe,
                }),
          clipboardContent: H,
          codeCopyText: t == null ? void 0 : V,
          codeClassName: p || I ? void 0 : `min-w-max`,
          codeContainerClassName: _(`chatgpt-code-scrollport`, ke.InlineCodePane),
          content: l,
          allowPreview: A && !m,
          isShowingPreview: J === `preview` || t != null,
          language: Ae,
          onCopyCode: Re,
          onToggleWrapCode: p || J !== `code` || t != null ? void 0 : () => j.set(Le, !I),
          renderSvgAsImage: J !== `code`,
          shouldWrapCode: p || I,
          showCopyButton: !m && J !== `preview`,
          stickyHeader: b,
          title: Pe,
          trailingActionButtons: (0, $.jsxs)($.Fragment, {
            children: [
              W && !m
                ? (0, $.jsx)(ue, {
                    tooltipContent: J === `preview` ? Ge : Be,
                    children: (0, $.jsx)(ee, {
                      "aria-label": J === `preview` ? Ge : Be,
                      color: `ghostActive`,
                      size: `imageToolbar`,
                      uniform: !0,
                      onPointerEnter: (e) => {
                        e.pointerType === `mouse` && J !== `preview` && q(!0);
                      },
                      onPointerLeave: () => q(!1),
                      onPointerCancel: () => q(!1),
                      onClick: () => {
                        if ((q(!1), J === `preview`)) {
                          ve(`code`);
                          return;
                        }
                        ($e(j, Ke, Fe), ve(`preview`));
                      },
                      children: (0, $.jsx)(k, {
                        icon: J === `preview` ? { 16: z, 20: T } : { assets: { 16: s, 20: ae } },
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
    },
    Qe = (e, t, n) => {
      let r = n !== void 0 && n;
      return a == null
        ? Ze(e, t, r)
        : (0, $.jsx)(je, {
            buffer: a,
            enabled: m,
            streamId: `${x.conversationId}:${x.messageId ?? ``}:${c}`,
            text: V,
            children: (n) => Ze(e, t, r, n),
          });
    };
  return O && ce && !x.shouldBlockExternalEgress
    ? (0, $.jsx)(Je, {
        name: `code-block-execution`,
        fallback: () => Qe(),
        children: (0, $.jsx)(Bn.Suspense, {
          fallback: Qe(),
          children: (0, $.jsx)(Vn, {
            code: V,
            codeBlockIndex: c,
            disabled: m || x.isStreaming,
            isEdited: V !== d,
            turnContext: x,
            onRun: () => {
              $e(j, Ve, Fe);
            },
            children: Qe,
          }),
        }),
      })
    : Qe();
}
function Rn() {}
var zn, Bn, $, Vn;
function Hn() {
  return (Hn = e(() => {
    ((zn = x()),
      Te(),
      O(),
      qe(),
      fe(),
      c(),
      ce(),
      v(),
      B(),
      (Bn = u()),
      L(),
      Ze(),
      I(),
      Qe(),
      R(),
      f(),
      We(),
      j(),
      l(),
      H(),
      ve(),
      N(),
      ge(),
      ye(),
      Fe(),
      tt(),
      a(),
      et(),
      S(),
      ht(),
      Ne(),
      It(),
      mt(),
      sn(),
      kt(),
      dn(),
      Sn(),
      kn(),
      Pn(),
      At(),
      _t(),
      Ct(),
      In(),
      we(),
      Ce(),
      ($ = g()),
      G(),
      (Vn = m(
        async () => {
          let { loadCodeBlockExecution: e } = await b(
            async () => {
              let { loadCodeBlockExecution: e } = await import(`./entry-b5e62f2ab090.js`);
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
Hn();
export { Ln as ChatGptCodeBlock };
//# sourceMappingURL=chatgpt-code-block-c5c3d1d7da0d.js.map
