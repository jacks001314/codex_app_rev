import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  A6 as r,
  B1 as i,
  BLt as a,
  BSt as o,
  CY as s,
  D4 as c,
  DB as l,
  FBt as u,
  FE as d,
  FNt as f,
  HFt as p,
  HO as m,
  IO as h,
  JO as g,
  KH as _,
  KO as v,
  LNt as y,
  LO as b,
  M6 as x,
  M7 as S,
  N7 as C,
  NLt as w,
  NSt as T,
  O4 as E,
  OB as D,
  ORt as O,
  OU as k,
  PBt as A,
  Qst as j,
  RO as ee,
  Rrt as M,
  SB as te,
  SLt as N,
  TCt as P,
  TE as ne,
  TY as F,
  ULt as I,
  VRt as L,
  WO as re,
  Wnt as ie,
  XOt as R,
  XS as ae,
  Y3 as oe,
  Yst as se,
  Z3 as z,
  ZS as ce,
  ZSt as B,
  Zst as V,
  _V as le,
  bCt as H,
  bV as ue,
  ck as U,
  dO as de,
  fO as fe,
  gV as pe,
  hRt as W,
  iCt as G,
  k7 as me,
  kE as he,
  kLt as ge,
  kRt as K,
  lO as _e,
  n3 as ve,
  nB as ye,
  nCt as be,
  okt as xe,
  p_t as q,
  qO as Se,
  rB as Ce,
  rV as we,
  rk as Te,
  sct as J,
  t3 as Ee,
  tV as De,
  tk as Oe,
  tkt as ke,
  tzt as Y,
  wB as X,
  yCt as Ae,
  yO as je,
  z1 as Me,
  zO as Ne,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $vn as Pe,
  AN as Fe,
  Avn as Ie,
  CAr as Le,
  Cjr as Re,
  Cu as ze,
  DV as Be,
  Dgr as Ve,
  EAr as He,
  ESr as Ue,
  EV as We,
  FDr as Ge,
  Far as Ke,
  GIn as qe,
  HOn as Je,
  LOr as Ye,
  LV as Xe,
  M$n as Ze,
  MOr as Qe,
  N$n as $e,
  NAn as et,
  NOr as tt,
  Nar as nt,
  OV as rt,
  PDr as it,
  Par as at,
  QCr as ot,
  Rar as st,
  SRn as ct,
  SWt as lt,
  Su as ut,
  UI as dt,
  UOn as ft,
  VI as pt,
  VPn as mt,
  WCr as ht,
  Wrn as gt,
  Xvn as _t,
  Y1n as vt,
  Zvn as yt,
  _p as bt,
  aar as xt,
  aln as St,
  bRn as Ct,
  bu as wt,
  c6n as Tt,
  ckr as Et,
  cln as Dt,
  ew as Ot,
  eyn as kt,
  fg as At,
  gSr as jt,
  gp as Mt,
  hg as Nt,
  ikr as Pt,
  jSr as Ft,
  jgr as It,
  kN as Lt,
  lkr as Rt,
  m0n as zt,
  m2n as Bt,
  mSr as Vt,
  n0n as Ht,
  nTr as Ut,
  na as Wt,
  oln as Gt,
  pg as Kt,
  rTr as qt,
  ra as Jt,
  tin as Yt,
  tw as Xt,
  vSr as Zt,
  wAn as Qt,
  wu as $t,
  xMr as en,
  xWt as tn,
  xjr as nn,
  yAr as rn,
  yMr as an,
  ykr as on,
  zOr as sn,
  zar as cn,
  zvn as ln,
} from "./app-initial-ad16eaadf81f.js";
import { dl as un, fl as dn } from "./app-primary-3e00728c2a4c.js";
import { a as fn, t as pn } from "./PopcornManualEditHeaderControls-45cc4843f346.js";
import { n as mn, t as hn } from "./open-appgen-share-dialog-ccbe887b06fc.js";
import { o as gn, t as _n } from "./artifact-annotation-batch-controls-a9289185dbeb.js";
import { n as vn, t as yn } from "./annotation-mode-icon-eafbc4a6687a.js";
import { n as bn, t as xn } from "./annotation-mode-analytics-dce005afe0df.js";
import { n as Sn, t as Cn } from "./site-session-preview-frame-30d701c04518.js";
async function wn(e) {
  if (!jn.safeParse(e).success) throw Error(`Invalid Site annotation capture`);
  let t = new DataView(await e.blob.slice(0, 24).arrayBuffer());
  if (
    t.byteLength !== 24 ||
    t.getUint32(0) !== 2303741511 ||
    t.getUint32(4) !== 218765834 ||
    t.getUint32(8) !== 13 ||
    t.getUint32(12) !== 1229472850 ||
    t.getUint32(16) !== e.width ||
    t.getUint32(20) !== e.height
  )
    throw Error(`Invalid Site annotation PNG header`);
}
function Tn(e, t, n, r) {
  if (!e.isTrusted || e.source !== t || !n.includes(e.origin)) return null;
  let i = Nn.safeParse(e.data);
  if (!i.success || i.data.sessionId !== r) return null;
  if (i.data.event.type !== `state`) return i.data.event;
  let { annotations: a } = i.data.event;
  if (
    new Set(a.map((e) => e.id)).size !== a.length ||
    a.some((t) => new URL(t.target.url).origin !== e.origin)
  )
    return null;
  let o = 20971520;
  for (let e of a) {
    let t = e.capture?.blob.size ?? 0;
    t > o ? (e.capture = void 0) : (o -= t);
  }
  return i.data.event;
}
function En(e) {
  try {
    let t = new URL(e);
    if (
      t.protocol !== `https:` ||
      t.username ||
      t.password ||
      t.port ||
      !/^[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:chatgpt\.site|chatgpt-team\.site|appgardenapps\.dev|appgardenapps\.com)$/.test(
        t.hostname,
      )
    )
      return [];
    let n = new URL(t);
    return (
      (n.hostname = t.hostname.replace(/\.chatgpt-team\.site$/, `.chatgpt.site`)),
      [...new Set([t.origin, n.origin])]
    );
  } catch {
    return [];
  }
}
var Dn, On, kn, An, jn, Mn, Nn;
function Pn() {
  return (Pn = e(() => {
    (p(),
      (Dn = `sites-preview-annotations`),
      (On = L().min(1).max(128)),
      (kn = O().min(-1e7).max(1e7)),
      (An = O().nonnegative().max(1e7)),
      (jn = K({
        blob: a((e) => e instanceof Blob && e.type === `image/png` && e.size > 0 && e.size <= 4194304),
        width: O().int().positive().max(1600),
        height: O().int().positive().max(1600),
      })),
      (Mn = K({
        id: On,
        revision: O()
          .int()
          .positive()
          .max(2 ** 53 - 1),
        text: L().trim().min(1).max(4e3),
        target: K({
          url: Y().max(8192),
          selector: L().min(1).max(4e3),
          tagName: L().min(1).max(128),
          text: L().max(2e3),
          bounds: K({ x: kn, y: kn, width: An, height: An }),
          point: K({ x: kn, y: kn }).optional(),
          viewport: K({ width: An, height: An, scrollX: kn, scrollY: kn }),
        }),
        capture: jn.optional(),
      })),
      (Nn = K({
        channel: W(Dn),
        version: W(1),
        sessionId: On,
        event: I(`type`, [
          K({
            type: W(`state`),
            mode: N([`interact`, `annotate`]),
            annotations: a((e) => Array.isArray(e) && e.length <= 100).pipe(ge(Mn)),
          }),
          K({ type: W(`request-mode`), mode: N([`interact`, `annotate`]) }),
          K({ type: W(`navigation-state`), canGoBack: w(), canGoForward: w() }),
          K({
            type: W(`deployment-id`),
            deploymentId: L()
              .regex(/^appgdep_[a-f0-9]{32}$/)
              .nullable(),
          }),
        ]),
      })));
  }))();
}
function Fn({
  scope: e,
  composerScope: t,
  conversationId: n,
  resource: r,
  cancelPreview: i,
  getComposerAnnotationIds: a,
  isAnnotationConsumed: o,
  removePreviewAnnotation: s,
  onAnnotationAdmitted: c,
  onAnnotationsDetached: l,
  onSendingChange: u,
}) {
  let d = !0,
    f,
    p = () => (t?.value.kind === `local` ? t.get(gt) : e.get(Bt, n)),
    m = new Map(),
    h = [],
    g = null,
    _ = !1,
    v = `site:${r.projectId}:`,
    y = (e) => `${v}${e}`,
    b = (e) => {
      for (let t of e) m.delete(t.id);
    },
    x = () => {
      (b([...m.values()].map(({ annotation: e }) => e)), b(h), (h = []), (g = null));
    },
    S = (e) => e.localArtifactAnnotationContext?.annotationId?.startsWith(v) ?? !1,
    C = () => {
      (i(), Dt(e, n, (e) => e.filter((e) => !S(e))));
    },
    w = (e, t) => {
      let n = f === !0 && !e;
      if ((e !== f && ((f = e), f && ((h = []), (g = null)), u(f)), e)) return;
      let r = new Map(t.map((e) => [e.localArtifactAnnotationContext?.annotationId, e])),
        o = [...a()].filter((e) => !r.has(y(e)));
      l(o, n ? `submit` : `user`);
      let c = [];
      for (let [e, t] of m) {
        let n = r.get(y(e));
        n ? (t.comment = n) : c.push(h.find((t) => t.id === e) ?? t.annotation);
      }
      if (c.length > 0) {
        if ((b(c), m.size === 0)) i();
        else for (let e of c) s(e.id);
      }
      if (!n) {
        let e = new Set(c.map((e) => e.id));
        for (let t of o) e.has(t) || s(t);
      }
    },
    T = async () => {
      _ = !0;
      try {
        for (; d && g && !p();) {
          let t = g;
          g = null;
          let i = new Map(),
            a = Math.max(0, ...e.get(St, n).map((e) => e.position.line));
          for (let e of t) {
            if (g || !d) break;
            if (o(e.id, e.revision)) continue;
            let t = m.get(e.id);
            if (t && t.annotation.revision >= e.revision) {
              i.set(e.id, t);
              continue;
            }
            let n = Ln(e, r, y(e.id), t?.comment.position.line ?? ++a);
            (e.capture && (n.localBrowserScreenshot = await Rn(e.capture, y(e.id))),
              !o(e.id, e.revision) && i.set(e.id, { annotation: e, comment: n }));
          }
          if (!d || p() || g || t !== h) continue;
          let s = new Set([...m.keys(), ...i.keys()].map(y));
          m.clear();
          for (let [e, t] of i) o(e, t.annotation.revision) || m.set(e, t);
          Dt(e, n, (e) => [
            ...e.filter((e) => !s.has(e.localArtifactAnnotationContext?.annotationId ?? ``)),
            ...[...m.values()].map(({ comment: e }) => e),
          ]);
          for (let { annotation: e } of m.values()) c(e);
        }
      } finally {
        _ = !1;
      }
    },
    E =
      t?.value.kind === `local`
        ? t.watch((e) => w(e.get(gt), e.get(St, n)))
        : e.watch((e) => w(e.get(Bt, n), e.get(St, n)));
  return {
    reconcile: (e) => {
      p() || ((h = e), (g = h), _ || T());
    },
    discardAll: x,
    cancel: C,
    dispose: () => {
      ((d = !1), (g = null), E());
    },
  };
}
function In(e) {
  return e.replace(/[\r\n\u2028\u2029]/g, ` `);
}
function Ln(e, t, n, r) {
  let i = new URL(e.target.url);
  return (
    (i.search = ``),
    (i.hash = ``),
    (i.username = ``),
    (i.password = ``),
    q({
      annotationId: n,
      artifactKind: `site`,
      body: e.text,
      label: wt(e.target),
      line: r,
      path: i.origin + i.pathname,
      title: In(t.title ?? i.hostname),
      metadata: {
        target: { ...e.target, url: i.toString(), type: `site-element-selection`, projectId: t.projectId },
      },
    })
  );
}
async function Rn(e, t) {
  try {
    return (await wn(e), { commentId: t, dataUrl: await Tt(e.blob), width: e.width, height: e.height });
  } catch {
    return;
  }
}
async function zn(e, t, n, r) {
  let i = n[0];
  if (!i) return;
  let a = e.get(un, t);
  await a?.submit({
    type: `artifact-annotation-direct-submit`,
    body: n.map(Ut).join(`

`),
    comment: i,
    comments: n,
    isCurrent: () => e.get(un, t) === a,
    onAccepted: (i) => {
      r();
      let a = new Set(n);
      for (let n of new Set([t, i])) n != null && Dt(e, n, (e) => e.filter((e) => !a.has(e)));
    },
  });
}
function Bn() {
  return (Bn = e(() => {
    (J(), qt(), qe(), Gt(), dn(), Yt(), Pn());
  }))();
}
function Vn(e = ``) {
  return new Hn(e);
}
var Hn;
function Un() {
  return (Un = e(() => {
    Hn = class {
      scopeKey;
      composerRevisionById = new Map();
      consumedRevisionById = new Map();
      observedRevisionById = new Map();
      presentDocumentIds = new Set();
      snapshotFrame = null;
      constructor(e = ``) {
        this.scopeKey = e;
      }
      resetDocument(e) {
        (e == null || e !== this.snapshotFrame) &&
          (this.presentDocumentIds.clear(), e != null && (this.snapshotFrame = e));
      }
      observeSnapshot(e) {
        let t = new Set(e.map((e) => e.id));
        for (let t of e) {
          let e = this.consumedRevisionById.get(t.id);
          e != null && t.revision > e && this.consumedRevisionById.delete(t.id);
        }
        let n = e.filter(
            (e) => !this.observedRevisionById.has(e.id) && !this.isConsumed(e.id, e.revision),
          ).length,
          r = e.filter((e) => {
            let t = this.observedRevisionById.get(e.id);
            return t != null && e.revision > t && !this.isConsumed(e.id, e.revision);
          }).length,
          i = [...this.presentDocumentIds].filter((e) => !t.has(e)),
          a = i.filter((e) => !this.isConsumed(e, this.observedRevisionById.get(e) ?? 0)).length;
        this.detachFromComposer(i, `remote`);
        for (let t of e)
          this.observedRevisionById.set(t.id, Math.max(t.revision, this.observedRevisionById.get(t.id) ?? 0));
        this.presentDocumentIds.clear();
        for (let e of t) this.presentDocumentIds.add(e);
        let o = [];
        return (
          n > 0 && o.push({ annotationCount: n, changeType: `added` }),
          r > 0 && o.push({ annotationCount: r, changeType: `edited` }),
          a > 0 && o.push({ annotationCount: a, changeType: `removed` }),
          o
        );
      }
      admitToComposer(e) {
        this.isConsumed(e.id, e.revision) || this.composerRevisionById.set(e.id, e.revision);
      }
      discardCurrentBatch() {
        this.detachFromComposer(
          new Set([...this.presentDocumentIds, ...this.composerRevisionById.keys()]),
          `batch-discard`,
        );
      }
      detachFromComposer(e, t) {
        let n = 0;
        for (let r of e) {
          let e = this.composerRevisionById.get(r),
            i = this.observedRevisionById.get(r),
            a = Math.max(e ?? 0, i ?? 0);
          (a > 0 && this.consumedRevisionById.set(r, Math.max(a, this.consumedRevisionById.get(r) ?? 0)),
            this.composerRevisionById.delete(r) && t === `user` && (n += 1));
        }
        return n > 0 ? { annotationCount: n, changeType: `removed` } : null;
      }
      getComposerAnnotationIds() {
        return new Set(this.composerRevisionById.keys());
      }
      isConsumed(e, t) {
        return (this.consumedRevisionById.get(e) ?? 0) >= t;
      }
    };
  }))();
}
function Wn({
  scope: e,
  composerScope: t,
  wrapper: n,
  conversationId: r,
  resource: i,
  canAnnotate: a = !0,
  hasPendingAnnotations: o = () => !1,
  annotationLifecycle: s = Vn(),
  onAnnotationChange: c = () => {},
  onNavigationChange: l,
  onModeChange: u,
  onReadyChange: d,
  onSendingChange: f = () => {},
}) {
  let p,
    m,
    h = !1,
    g = !1,
    _ = (e, t) => {
      let n = s.detachFromComposer(e, t);
      n && c(n);
    },
    v = () => {},
    y = (t) => {
      g || (t && (!a || r == null)) || (t && !h && bn(e, { surface: `site` }), (h = t), u(t), m ? m() : x());
    },
    b = () => {},
    x = () => {
      (p?.(),
        d?.(!1),
        l?.({ canGoBack: !1, canGoForward: !1 }),
        (v = () => {}),
        u(h),
        (m = void 0),
        (b = () => {}));
      let S = Gn(n),
        C = S?.contentWindow;
      if (!S || !C) return;
      s.resetDocument(S);
      let w = S.src,
        T = En(w);
      if (T.length === 0) return;
      let E = crypto.randomUUID(),
        D,
        O = { canGoBack: !1, canGoForward: !1 },
        k = !1,
        A = !0,
        j = 1e3,
        ee,
        M = (e) => {
          if (A)
            for (let t of D ? [D] : T)
              C.postMessage({ channel: Dn, version: 1, sessionId: E, command: e }, t);
        },
        te = () => {
          (s.discardCurrentBatch(),
            I?.discardAll(),
            (h = !1),
            u(!1),
            clearTimeout(ee),
            D ? M({ type: `cancel` }) : ((k = !0), F()));
        };
      v = (e) => {
        if (!(!A || !D || g || h || o())) {
          if (Gn(n) !== S || S.src !== w) {
            x();
            return;
          }
          (e === `back` ? O.canGoBack : O.canGoForward) &&
            (M({ type: e === `back` ? `navigate-back` : `navigate-forward` }), C.focus());
        }
      };
      let N = (e) => (g || k || (e === `interact` && o()) ? !1 : (y(e === `annotate`), !0)),
        P = (e) => {
          e.key === `Escape` &&
            !e.defaultPrevented &&
            !e.isComposing &&
            h &&
            N(`interact`) &&
            (e.preventDefault(), e.stopPropagation());
        },
        ne = (e) => {
          if (!A || Gn(n) !== S || S.src !== w) return;
          let t = Tn(e, C, D ? [D] : T, E);
          if (t) {
            if (!D) {
              if (t.type !== `state` || t.mode !== (h ? `annotate` : `interact`)) return;
              ((D = e.origin), d?.(!0));
            }
            if (t.type === `navigation-state`) {
              ((O = { canGoBack: t.canGoBack, canGoForward: t.canGoForward }), l?.(O));
              return;
            }
            if (t.type === `request-mode`) {
              N(t.mode);
              return;
            }
            if (t.type === `state`) {
              if (t.mode === (h ? `annotate` : `interact`) && (clearTimeout(ee), k)) {
                ((k = !1), M({ type: `cancel` }), h && F());
                return;
              }
              if (!g && h && t.mode === `annotate`) {
                for (let e of s.observeSnapshot(t.annotations)) c(e);
                I?.reconcile(t.annotations);
              }
            }
          }
        },
        F = () => {
          if ((clearTimeout(ee), A)) {
            if (Gn(n) !== S || S.src !== w) {
              x();
              return;
            }
            (M({ type: `set-mode`, mode: h ? `annotate` : `interact` }),
              (ee = setTimeout(F, j)),
              (j = Math.min(j * 2, 5e3)));
          }
        },
        I =
          a && r != null
            ? Fn({
                scope: e,
                composerScope: t,
                conversationId: r,
                resource: i,
                cancelPreview: te,
                getComposerAnnotationIds: () => s.getComposerAnnotationIds(),
                isAnnotationConsumed: (e, t) => s.isConsumed(e, t),
                removePreviewAnnotation: (e) => M({ type: `remove`, annotationId: e }),
                onAnnotationAdmitted: (e) => s.admitToComposer(e),
                onAnnotationsDetached: _,
                onSendingChange: (e) => {
                  ((g = e), e && ((h = !1), u(!1), m?.()), f(e));
                },
              })
            : null;
      ((b = () => {
        I?.cancel();
      }),
        (m = () => {
          ((j = 1e3), F());
        }),
        window.addEventListener(`message`, ne),
        window.addEventListener(`keydown`, P));
      let L = () => {
        (s.resetDocument(), x());
      };
      (S.addEventListener(`load`, L),
        a &&
          r != null &&
          e.set(
            $t,
            { conversationId: r, projectId: i.projectId },
            {
              focus: (e) => {
                !g && D && ((h = !0), u(!0), F(), M({ type: `focus`, annotationId: e }));
              },
            },
          ),
        (p = () => {
          (a && r != null && e.set($t, { conversationId: r, projectId: i.projectId }, null),
            M({ type: `set-mode`, mode: `interact` }),
            (A = !1),
            clearTimeout(ee),
            I?.dispose(),
            window.removeEventListener(`message`, ne),
            window.removeEventListener(`keydown`, P),
            S.removeEventListener(`load`, L));
        }),
        F());
    };
  return (
    n.addEventListener(`load`, x),
    x(),
    {
      setMode: y,
      navigate: (e) => v(e),
      cancel: () => {
        g || b();
      },
      detachSubmittedAnnotations: (e) => {
        _(e, `submit`);
      },
      dispose: () => {
        (d?.(!1), n.removeEventListener(`load`, x), p?.());
      },
    }
  );
}
function Gn(e) {
  try {
    return e.contentDocument?.querySelector(`iframe`) ?? null;
  } catch {
    return null;
  }
}
function Kn() {
  return (Kn = e(() => {
    (xn(), Bn(), ze(), Un(), Pn());
  }))();
}
function qn(e) {
  let n = (0, $n.c)(5),
    r = t(Qe),
    i;
  n[0] === r.value ? (i = n[1]) : ((i = Ye(r.value)), (n[0] = r.value), (n[1] = i));
  let a = i,
    o;
  return (
    n[2] !== a || n[3] !== e
      ? ((o = (0, Q.jsx)(Jn, { ...e, conversationId: a })), (n[2] = a), (n[3] = e), (n[4] = o))
      : (o = n[4]),
    o
  );
}
function Jn(e) {
  let n = (0, $n.c)(106),
    {
      resource: r,
      wrapper: i,
      conversationId: a,
      canAnnotate: o,
      compact: s,
      controlsRef: c,
      onRefresh: l,
      refreshDisabled: u,
    } = e,
    d = o === void 0 || o,
    f = s !== void 0 && s,
    p = t(Qe),
    m = xe(),
    [g, _] = (0, Z.useState)(null),
    [y, x] = (0, Z.useState)(!1),
    [S, C] = (0, Z.useState)(!1),
    [w, T] = (0, Z.useState)(!1),
    E;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = { canGoBack: !1, canGoForward: !1 }), (n[0] = E))
    : (E = n[0]);
  let [D, O] = (0, Z.useState)(E),
    [k, A] = (0, Z.useState)(null),
    j = i?.parentElement,
    M = (0, Z.useRef)(null),
    te;
  n[1] !== a || n[2] !== r.projectId
    ? ((te = JSON.stringify([a, r.projectId])), (n[1] = a), (n[2] = r.projectId), (n[3] = te))
    : (te = n[3]);
  let N = te,
    P = (0, Z.useRef)(null),
    ne;
  n[4] !== a || n[5] !== r.projectId
    ? ((ne = { conversationId: a, projectId: r.projectId }), (n[4] = a), (n[5] = r.projectId), (n[6] = ne))
    : (ne = n[6]);
  let F = be(nr, ne),
    I;
  n[7] === p ? (I = n[8]) : ((I = Ve(p)), (n[7] = p), (n[8] = I));
  let L;
  n[9] !== a || n[10] !== I
    ? ((L = { conversationId: a, browserConversationId: I }), (n[9] = a), (n[10] = I), (n[11] = L))
    : (L = n[11]);
  let ie = be(tr, L),
    R;
  n[12] !== a || n[13] !== r.projectId || n[14] !== p
    ? ((R = (e) => {
        let t = p.get(nr, { conversationId: a, projectId: r.projectId }).length;
        (M.current?.cancel(),
          a != null &&
            (Dt(p, a, (e) =>
              e.filter((e) => {
                let t = e.localArtifactAnnotationMetadata?.target;
                return t?.type !== `site-element-selection` || t.projectId !== r.projectId;
              }),
            ),
            e &&
              t > 0 &&
              rt(p, {
                annotationCount: t,
                conversationId: a,
                interactionType: Xe.CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_BATCH_DISCARDED,
                projectId: r.projectId,
              })));
      }),
      (n[12] = a),
      (n[13] = r.projectId),
      (n[14] = p),
      (n[15] = R))
    : (R = n[15]);
  let ae = R,
    z;
  n[16] === ae ? (z = n[17]) : ((z = () => ae(!0)), (n[16] = ae), (n[17] = z));
  let B = z,
    V;
  n[18] !== a || n[19] !== r.projectId || n[20] !== p || n[21] !== w
    ? ((V = (e) =>
        w ? !1 : p.get(nr, { conversationId: a, projectId: r.projectId }).length > 0 ? (A(() => e), !1) : !0),
      (n[18] = a),
      (n[19] = r.projectId),
      (n[20] = p),
      (n[21] = w),
      (n[22] = V))
    : (V = n[22]);
  let le = V,
    H;
  n[23] !== F.length || n[24] !== p || n[25] !== w
    ? ((H = (e) => {
        let { currentLocation: t, nextLocation: n } = e;
        if (p.value.routeKind === `home` && t.pathname !== n.pathname) {
          let e = tt({ pathname: n.pathname, routeTemplate: n.pathname, search: n.search });
          if (p.get(Pt, Et(e)) === p.value.clientThreadId) return !1;
        }
        return (F.length > 0 || w) && (t.pathname !== n.pathname || t.search !== n.search);
      }),
      (n[23] = F.length),
      (n[24] = p),
      (n[25] = w),
      (n[26] = H))
    : (H = n[26]);
  let ue;
  n[27] !== B || n[28] !== w
    ? ((ue = () => {
        if (w) throw Error(`Cannot discard Site annotations while submitting`);
        B();
      }),
      (n[27] = B),
      (n[28] = w),
      (n[29] = ue))
    : (ue = n[29]);
  let U = Fe(H, 10, ue),
    de;
  n[30] === U
    ? (de = n[31])
    : ((de = () => {
        (U.state === `blocked` && U.reset(), A(null));
      }),
      (n[30] = U),
      (n[31] = de));
  let fe = de,
    pe;
  n[32] === ae ? (pe = n[33]) : ((pe = () => ae(!1)), (n[32] = ae), (n[33] = pe));
  let W = (0, Z.useEffectEvent)(pe),
    G = F.length > 0,
    me;
  n[34] !== a || n[35] !== r.projectId || n[36] !== p
    ? ((me = (e) => {
        let { annotationCount: t, changeType: n } = e;
        if (a == null) return;
        let i = Xe.CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_REMOVED;
        (n === `added`
          ? (i = Xe.CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_ADDED)
          : n === `edited` && (i = Xe.CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_EDITED),
          rt(p, { annotationCount: t, conversationId: a, interactionType: i, projectId: r.projectId }));
      }),
      (n[34] = a),
      (n[35] = r.projectId),
      (n[36] = p),
      (n[37] = me))
    : (me = n[37]);
  let he = (0, Z.useEffectEvent)(me),
    ge;
  n[38] !== W || n[39] !== G
    ? ((ge = () => {
        if (!G) return;
        let e = Xn,
          t = () => W();
        return (
          window.addEventListener(`beforeunload`, e),
          window.addEventListener(`pagehide`, t),
          () => {
            (window.removeEventListener(`beforeunload`, e), window.removeEventListener(`pagehide`, t));
          }
        );
      }),
      (n[38] = W),
      (n[39] = G),
      (n[40] = ge))
    : (ge = n[40]);
  let K;
  (n[41] === G ? (K = n[42]) : ((K = [G]), (n[41] = G), (n[42] = K)), (0, Z.useEffect)(ge, K));
  let _e;
  (n[43] === le ? (_e = n[44]) : ((_e = () => ({ confirmAction: le })), (n[43] = le), (n[44] = _e)),
    (0, Z.useImperativeHandle)(c, _e));
  let ve;
  n[45] === le
    ? (ve = n[46])
    : ((ve = (e) => {
        let t = () => {
          (M.current?.setMode(!1), M.current?.navigate(e));
        };
        le(t) && t();
      }),
      (n[45] = le),
      (n[46] = ve));
  let ye = ve,
    q;
  n[47] !== N || n[48] !== d || n[49] !== a || n[50] !== he || n[51] !== r || n[52] !== p || n[53] !== i
    ? ((q = () => {
        if (!i) return;
        let e = P.current?.scopeKey === N ? P.current : Vn(N);
        P.current = e;
        let t = Wn({
          scope: p,
          composerScope: it(p),
          wrapper: i,
          conversationId: a,
          resource: r,
          canAnnotate: d,
          annotationLifecycle: e,
          hasPendingAnnotations: () => p.get(nr, { conversationId: a, projectId: r.projectId }).length > 0,
          onAnnotationChange: he,
          onNavigationChange: O,
          onModeChange: x,
          onReadyChange: C,
          onSendingChange: T,
        });
        return (
          (M.current = t),
          () => {
            (t.dispose(), (M.current = null));
          }
        );
      }),
      (n[47] = N),
      (n[48] = d),
      (n[49] = a),
      (n[50] = he),
      (n[51] = r),
      (n[52] = p),
      (n[53] = i),
      (n[54] = q))
    : (q = n[54]);
  let Ce;
  (n[55] !== N || n[56] !== d || n[57] !== a || n[58] !== r || n[59] !== p || n[60] !== i
    ? ((Ce = [N, i, p, a, r, d]),
      (n[55] = N),
      (n[56] = d),
      (n[57] = a),
      (n[58] = r),
      (n[59] = p),
      (n[60] = i),
      (n[61] = Ce))
    : (Ce = n[61]),
    (0, Z.useEffect)(q, Ce));
  let we = S && !w && D.canGoBack,
    Te = S && !w && D.canGoForward,
    J,
    Ee;
  n[62] === ye
    ? ((J = n[63]), (Ee = n[64]))
    : ((J = () => ye(`back`)), (Ee = () => ye(`forward`)), (n[62] = ye), (n[63] = J), (n[64] = Ee));
  let De = u || w,
    Oe;
  n[65] !== f || n[66] !== l || n[67] !== we || n[68] !== Te || n[69] !== J || n[70] !== Ee || n[71] !== De
    ? ((Oe = (0, Q.jsx)(Qn, {
        compact: f,
        canGoBack: we,
        canGoForward: Te,
        onBack: J,
        onForward: Ee,
        onRefresh: l,
        refreshDisabled: De,
      })),
      (n[65] = f),
      (n[66] = l),
      (n[67] = we),
      (n[68] = Te),
      (n[69] = J),
      (n[70] = Ee),
      (n[71] = De),
      (n[72] = Oe))
    : (Oe = n[72]);
  let Y;
  n[73] !== y ||
  n[74] !== d ||
  n[75] !== f ||
  n[76] !== a ||
  n[77] !== S ||
  n[78] !== r.projectId ||
  n[79] !== p ||
  n[80] !== w
    ? ((Y =
        d && a != null
          ? (0, Q.jsx)(Zn, {
              annotating: y,
              compact: f,
              disabled: !S || w,
              onToggle: () => {
                let e = !y;
                (M.current?.setMode(e),
                  rt(p, {
                    conversationId: a,
                    interactionType: e
                      ? Xe.CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_MODE_ENABLE_CLICKED
                      : Xe.CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_MODE_DISABLE_CLICKED,
                    projectId: r.projectId,
                  }));
              },
            })
          : null),
      (n[73] = y),
      (n[74] = d),
      (n[75] = f),
      (n[76] = a),
      (n[77] = S),
      (n[78] = r.projectId),
      (n[79] = p),
      (n[80] = w),
      (n[81] = Y))
    : (Y = n[81]);
  let X;
  n[82] !== y ||
  n[83] !== d ||
  n[84] !== ie ||
  n[85] !== F ||
  n[86] !== a ||
  n[87] !== B ||
  n[88] !== m ||
  n[89] !== j ||
  n[90] !== r.projectId ||
  n[91] !== p ||
  n[92] !== w ||
  n[93] !== g
    ? ((X =
        d && a != null && j && !w && (y || F.length > 0)
          ? (0, er.createPortal)(
              (0, Q.jsx)(ce, {
                variant: `annotation`,
                enterFromBottom: y && F.length === 0,
                attention: y && F.length === 0,
                label: m.formatMessage({
                  id: `sites.preview.annotations.toolbar`,
                  defaultMessage: `Site annotations`,
                  description: `Accessible label for the floating Site annotation toolbar`,
                }),
                dragHandleLabel: m.formatMessage({
                  id: `sites.preview.annotations.moveToolbar`,
                  defaultMessage: `Move toolbar`,
                  description: `Accessible label for the Site annotation toolbar drag handle`,
                }),
                position: g,
                onPositionChange: _,
                children: (e) =>
                  (0, Q.jsx)(_n, {
                    previewDisabled: e,
                    annotationCount: F.length,
                    embedded: !0,
                    isAnnotating: y,
                    previewContent: (0, Q.jsx)(Wt, {
                      commentAttachments: F,
                      onEditAnnotation: (e) => ut(p, a, e),
                      onRemoveAnnotation: (e) => {
                        Dt(p, a, (t) =>
                          t.filter(
                            (t) =>
                              t.localArtifactAnnotationContext?.annotationId !==
                              e.localArtifactAnnotationContext?.annotationId,
                          ),
                        );
                      },
                      cwd: null,
                      hostId: `hostId` in p.value ? (p.value.hostId ?? `local`) : se,
                    }),
                    phase: `idle`,
                    isSubmitting: w,
                    sendDisabled: !ie,
                    onCancel: B,
                    onSend: () => {
                      if (!ie || w) return;
                      let e = p.get(nr, { conversationId: a, projectId: r.projectId });
                      if (e.length === 0) return;
                      let t = M.current,
                        n = `site:${r.projectId}:`,
                        i = e.flatMap((e) => {
                          let t = e.localArtifactAnnotationContext?.annotationId;
                          return t?.startsWith(n) ? [t.slice(n.length)] : [];
                        });
                      (t?.setMode(!1),
                        T(!0),
                        rt(p, {
                          annotationCount: e.length,
                          conversationId: a,
                          interactionType: Xe.CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_BATCH_SUBMIT_CLICKED,
                          projectId: r.projectId,
                        }),
                        zn(p, a, e, () => t?.detachSubmittedAnnotations(i))
                          .catch(Yn)
                          .finally(() => T(!1)));
                    },
                  }),
              }),
              j,
            )
          : null),
      (n[82] = y),
      (n[83] = d),
      (n[84] = ie),
      (n[85] = F),
      (n[86] = a),
      (n[87] = B),
      (n[88] = m),
      (n[89] = j),
      (n[90] = r.projectId),
      (n[91] = p),
      (n[92] = w),
      (n[93] = g),
      (n[94] = X))
    : (X = n[94]);
  let Ae;
  n[95] !== U || n[96] !== B || n[97] !== fe || n[98] !== k || n[99] !== w
    ? ((Ae =
        k != null || U.state === `blocked`
          ? (0, Q.jsx)(re, {
              open: !0,
              size: `compact`,
              onOpenChange: (e) => {
                e || fe();
              },
              children: (0, Q.jsxs)(h, {
                as: `form`,
                onSubmit: (e) => {
                  (e.preventDefault(),
                    !w && (U.state === `blocked` ? (A(null), U.proceed()) : (B(), A(null), k?.())));
                },
                children: [
                  (0, Q.jsx)(Ne, {
                    children: (0, Q.jsx)(ee, {
                      title: (0, Q.jsx)(Se, {
                        children: (0, Q.jsx)(ke, {
                          id: `sites.preview.discardAnnotations.title`,
                          defaultMessage: `Discard annotations?`,
                          description: `Confirmation title before closing, refreshing, or navigating a Site preview with pending comments`,
                        }),
                      }),
                      subtitle: (0, Q.jsx)(v, {
                        children: (0, Q.jsx)(ke, {
                          id: `sites.preview.discardAnnotations.description`,
                          defaultMessage: `Your annotations haven’t been sent yet.`,
                          description: `Reminds the user that their annotations have not been sent yet before they choose whether to discard them.`,
                        }),
                      }),
                    }),
                  }),
                  (0, Q.jsx)(Ne, {
                    children: (0, Q.jsxs)(b, {
                      children: [
                        (0, Q.jsx)(oe, {
                          color: `outline`,
                          onClick: fe,
                          children: (0, Q.jsx)(ke, {
                            id: `sites.preview.discardAnnotations.cancel`,
                            defaultMessage: `Keep editing`,
                            description: `Cancels the requested preview action and preserves pending annotations`,
                          }),
                        }),
                        (0, Q.jsx)(oe, {
                          type: `submit`,
                          color: `dangerSolid`,
                          disabled: w,
                          children: (0, Q.jsx)(ke, {
                            id: `sites.preview.discardAnnotations.confirm`,
                            defaultMessage: `Discard`,
                            description: `Discards this Site's pending annotations and continues the requested close, refresh, or navigation`,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : null),
      (n[95] = U),
      (n[96] = B),
      (n[97] = fe),
      (n[98] = k),
      (n[99] = w),
      (n[100] = Ae))
    : (Ae = n[100]);
  let je;
  return (
    n[101] !== Oe || n[102] !== Y || n[103] !== X || n[104] !== Ae
      ? ((je = (0, Q.jsxs)(Q.Fragment, { children: [Oe, Y, X, Ae] })),
        (n[101] = Oe),
        (n[102] = Y),
        (n[103] = X),
        (n[104] = Ae),
        (n[105] = je))
      : (je = n[105]),
    je
  );
}
function Yn() {}
function Xn(e) {
  e.preventDefault();
}
function Zn(e) {
  let t = (0, $n.c)(17),
    { annotating: n, compact: r, disabled: i, onToggle: a } = e,
    o = r !== void 0 && r,
    s = xe(),
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = s.formatMessage({
        id: `sites.preview.annotations.requestEdits`,
        defaultMessage: `Request edits`,
        description: `Button label and collapsed button tooltip in the Site preview toolbar. Toggles selection mode so users can select website content and leave comments requesting edits.`,
      })),
      (t[0] = s),
      (t[1] = c));
  let l = c,
    u = o ? l : null,
    f = o ? void 0 : l,
    p;
  t[2] === n ? (p = t[3]) : ((p = (0, Q.jsx)(yn, { active: n })), (t[2] = n), (t[3] = p));
  let m;
  t[4] !== n || t[5] !== i || t[6] !== l || t[7] !== a || t[8] !== f || t[9] !== p
    ? ((m = (0, Q.jsx)(pn, {
        "aria-label": l,
        label: f,
        pressed: n,
        size: `default`,
        variant: `annotation`,
        disabled: i,
        onClick: a,
        children: p,
      })),
      (t[4] = n),
      (t[5] = i),
      (t[6] = l),
      (t[7] = a),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] !== u || t[12] !== m
    ? ((h = (0, Q.jsx)(ye, { tooltipContent: u, delayOpen: !0, children: m })),
      (t[11] = u),
      (t[12] = m),
      (t[13] = h))
    : (h = t[13]);
  let g;
  return (
    t[14] !== l || t[15] !== h
      ? ((g = (0, Q.jsx)(d, { label: l, children: h })), (t[14] = l), (t[15] = h), (t[16] = g))
      : (g = t[16]),
    g
  );
}
function Qn(e) {
  let t = (0, $n.c)(29),
    {
      compact: n,
      canGoBack: r,
      canGoForward: i,
      onBack: a,
      onForward: o,
      onRefresh: s,
      refreshDisabled: u,
      showNavigation: f,
    } = e,
    p = n !== void 0 && n,
    m = f === void 0 || f,
    h = xe(),
    g;
  t[0] === h
    ? (g = t[1])
    : ((g = h.formatMessage({
        id: `sites.preview.back`,
        defaultMessage: `Go back`,
        description: `Navigate back within the Site preview`,
      })),
      (t[0] = h),
      (t[1] = g));
  let v = g,
    y;
  t[2] === h
    ? (y = t[3])
    : ((y = h.formatMessage({
        id: `sites.preview.forward`,
        defaultMessage: `Go forward`,
        description: `Navigate forward within the Site preview`,
      })),
      (t[2] = h),
      (t[3] = y));
  let b = y,
    x;
  t[4] === h
    ? (x = t[5])
    : ((x = h.formatMessage({
        id: `sites.preview.refresh`,
        defaultMessage: `Refresh preview`,
        description: `Button to reload the generated Site preview or retry after an error`,
      })),
      (t[4] = h),
      (t[5] = x));
  let S = x,
    C;
  t[6] === h
    ? (C = t[7])
    : ((C = h.formatMessage({
        id: `sites.preview.history`,
        defaultMessage: `Navigation history`,
        description: `Accessible label for a menu containing back and forward navigation options in a narrow Site preview header`,
      })),
      (t[6] = h),
      (t[7] = C));
  let w = C,
    T;
  t[8] === h
    ? (T = t[9])
    : ((T = h.formatMessage({
        id: `sites.preview.navigationControls`,
        defaultMessage: `Preview navigation`,
        description: `Accessible label for Site preview back, forward, and refresh controls`,
      })),
      (t[8] = h),
      (t[9] = T));
  let E;
  t[10] !== v ||
  t[11] !== r ||
  t[12] !== i ||
  t[13] !== p ||
  t[14] !== b ||
  t[15] !== w ||
  t[16] !== a ||
  t[17] !== o ||
  t[18] !== m
    ? ((E =
        m &&
        (p
          ? (0, Q.jsxs)(Oe, {
              align: `start`,
              contentWidth: `menu`,
              triggerButton: (0, Q.jsx)(ne, { "aria-label": w, uniform: !0, children: (0, Q.jsx)(_, {}) }),
              children: [
                (0, Q.jsx)(Te.Item, {
                  disabled: !r,
                  leftIcon: (0, Q.jsx)(De, {}),
                  onSelect: a,
                  children: (0, Q.jsx)(ke, {
                    id: `sites.preview.history.back`,
                    defaultMessage: `Back`,
                    description: `Menu item that navigates backward within the Site preview history`,
                  }),
                }),
                (0, Q.jsx)(Te.Item, {
                  disabled: !i,
                  leftIcon: (0, Q.jsx)(we, {}),
                  onSelect: o,
                  children: (0, Q.jsx)(ke, {
                    id: `sites.preview.history.forward`,
                    defaultMessage: `Forward`,
                    description: `Menu item that navigates forward within the Site preview history`,
                  }),
                }),
              ],
            })
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(ne, {
                  "aria-label": v,
                  uniform: !0,
                  disabled: !r,
                  onClick: a,
                  children: (0, Q.jsx)(De, {}),
                }),
                (0, Q.jsx)(ne, {
                  "aria-label": b,
                  uniform: !0,
                  disabled: !i,
                  onClick: o,
                  children: (0, Q.jsx)(we, {}),
                }),
                (0, Q.jsx)(he, {}),
              ],
            }))),
      (t[10] = v),
      (t[11] = r),
      (t[12] = i),
      (t[13] = p),
      (t[14] = b),
      (t[15] = w),
      (t[16] = a),
      (t[17] = o),
      (t[18] = m),
      (t[19] = E))
    : (E = t[19]);
  let D;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Q.jsx)(l, { asset: c })), (t[20] = D))
    : (D = t[20]);
  let O;
  t[21] !== s || t[22] !== S || t[23] !== u
    ? ((O = (0, Q.jsx)(ne, { "aria-label": S, uniform: !0, disabled: u, onClick: s, children: D })),
      (t[21] = s),
      (t[22] = S),
      (t[23] = u),
      (t[24] = O))
    : (O = t[24]);
  let k;
  return (
    t[25] !== O || t[26] !== T || t[27] !== E
      ? ((k = (0, Q.jsxs)(d, { variant: `window`, label: T, children: [E, O] })),
        (t[25] = O),
        (t[26] = T),
        (t[27] = E),
        (t[28] = k))
      : (k = t[28]),
    k
  );
}
var $n, Z, er, Q, tr, nr;
function rr() {
  return (rr = e(() => {
    (($n = A()),
      E(),
      fn(),
      B(),
      (Z = u()),
      (er = f()),
      R(),
      gn(),
      It(),
      Kt(),
      vn(),
      Gt(),
      dn(),
      z(),
      g(),
      m(),
      U(),
      D(),
      F(),
      Ce(),
      Jt(),
      n(),
      Ge(),
      sn(),
      Rt(),
      V(),
      Lt(),
      ae(),
      We(),
      Bn(),
      Kn(),
      ze(),
      (Q = y()),
      (tr = H(
        Qe,
        (e) => !1,
        ({ conversationId: e, browserConversationId: t }, { get: n, set: r }) => {
          if (e == null || t == null || n(un, e) == null) return;
          let i = () => r(At(t) ?? !1),
            a = Nt(t, i);
          return (i(), a);
        },
      )),
      (nr = Ae(
        j,
        (e, { get: t }) =>
          e.conversationId == null
            ? []
            : t(St, e.conversationId).filter((t) => {
                let n = t.localArtifactAnnotationMetadata?.target;
                return n?.type === `site-element-selection` && n.projectId === e.projectId;
              }),
        { isEqual: (e, t) => e.length === t.length && e.every((e, n) => e === t[n]) },
      )));
  }))();
}
function ir(e, t) {
  let n = new Set();
  if (e.value.routeKind === `chatgpt-thread`) {
    let r = e.get(Ht, e.value.conversationId);
    for (let e of Object.values(r ?? {})) {
      if (e.message == null) continue;
      let r = ar(e.message, t);
      r != null && n.add(r);
    }
  } else if (e.value.routeKind === `local-thread` || e.value.routeKind === `client-local-thread`) {
    let r = e.get(on);
    if (r == null) return n;
    let i = e.get(Ue, { hostId: e.get(et), threadId: r });
    for (let r of i ?? []) {
      let i = Zt(e, r);
      if (i != null)
        for (let e of xt(i.items)) {
          if (e.type !== `mcpToolCall`) continue;
          let r = at([cn(i, e)])[0];
          r?.projectId === t && r.publishedRevision != null && n.add(r.publishedRevision);
        }
    }
  }
  return n;
}
function ar(e, t) {
  if (e.author.role !== `tool`) return null;
  let n = Ze(e)?.item,
    r = n?.type === `mcp-tool-call` ? n : Ot([e])[0];
  if (r?.type !== `mcp-tool-call`) return null;
  let i = at([r])[0];
  return i?.projectId === t ? (i.publishedRevision ?? null) : null;
}
var or;
function sr() {
  return (sr = e(() => {
    (B(),
      ot(),
      Vt(),
      mt(),
      $e(),
      st(),
      sn(),
      Qt(),
      Rt(),
      Ke(),
      Xt(),
      (or = P(
        Qe,
        (e, { scope: t, derived: n }) =>
          n((n, { scope: { get: r } }) => {
            if (t.value.routeKind === `local-thread` || t.value.routeKind === `client-local-thread`) {
              let n = r(on);
              if (n == null) return null;
              let i = r(Ue, { hostId: r(et), threadId: n });
              for (let n of i?.slice().reverse() ?? []) {
                r(Ft, n);
                let i = Zt(t, n);
                if (i != null)
                  for (let t of xt(i.items).reverse()) {
                    if (t.type !== `mcpToolCall`) continue;
                    let a = r(jt, { ...n, itemId: t.id });
                    if (a?.type !== `mcpToolCall`) continue;
                    let o = at([cn(i, a)])[0];
                    if (o?.projectId === e && o.publishedRevision != null) return o.publishedRevision;
                  }
              }
              return null;
            }
            if (t.value.routeKind !== `chatgpt-thread`) return null;
            let i = t.value.conversationId,
              a = r(vt, i);
            r(zt, i);
            let o = t.get(Ht, i);
            if (a == null || o == null) return null;
            let s = ht({ current_node: a, mapping: o });
            for (let t of s.reverse()) {
              let n = ar(t, e);
              if (n != null) return n;
            }
            return null;
          }),
        { autoDispose: 6e4 },
      )));
  }))();
}
function cr({ wrapper: e, deploymentId: t, refresh: n, onComplete: r }) {
  let i = !0,
    a = null,
    o,
    s = !1,
    c = !1,
    l,
    u = () => {
      ((i = !1),
        clearTimeout(l),
        clearTimeout(h),
        e.removeEventListener(`load`, p),
        window.removeEventListener(`message`, m),
        document.removeEventListener(`visibilitychange`, f));
    },
    d = () => {
      (u(), r());
    },
    f = () => {
      if ((clearTimeout(l), (o = void 0), !i || c || document.hidden)) return;
      a = e.contentDocument?.querySelector(`iframe`) ?? null;
      let t = a?.contentWindow;
      if (a && t) {
        o = crypto.randomUUID();
        for (let e of En(a.src))
          t.postMessage({ channel: Dn, version: 1, sessionId: o, command: { type: `get-deployment-id` } }, e);
      }
      l = setTimeout(f, 3e3);
    },
    p = () => {
      ((c = !1), f());
    },
    m = (e) => {
      if (!i || c || document.hidden || !a?.contentWindow || !o) return;
      let r = Tn(e, a.contentWindow, En(a.src), o);
      if (r?.type === `deployment-id`) {
        if (((o = void 0), r.deploymentId !== t)) {
          s = !1;
          return;
        }
        if (s) {
          d();
          return;
        }
        ((s = !0), (c = !0), clearTimeout(l), n() || d());
      }
    },
    h = setTimeout(d, 18e4);
  return (
    e.addEventListener(`load`, p),
    window.addEventListener(`message`, m),
    document.addEventListener(`visibilitychange`, f),
    f(),
    u
  );
}
function lr() {
  return (lr = e(() => {
    Pn();
  }))();
}
function ur(e) {
  let n = (0, mr.c)(13),
    { resource: r, onClose: i, controlsRef: a, onNavigateToSite: o, isVisible: s } = e,
    c = s === void 0 || s,
    l = t(Qe),
    u = G(yt),
    d = be(u ? null : or, r.projectId) ?? r.publishedRevision,
    f;
  n[0] !== d || n[1] !== r.projectId || n[2] !== l
    ? ((f = () => {
        let e = ir(l, r.projectId);
        return (d != null && e.add(d), { revision: d, known: e, expectedDeploymentId: void 0 });
      }),
      (n[0] = d),
      (n[1] = r.projectId),
      (n[2] = l),
      (n[3] = f))
    : (f = n[3]);
  let [p, m] = (0, hr.useState)(f);
  if (p.revision !== d) {
    let e = d != null && !p.known.has(d);
    m({
      revision: d,
      known: e ? new Set([...p.known, d]) : p.known,
      expectedDeploymentId: e && d.startsWith(`appgdep_`) ? d : void 0,
    });
  }
  let h = d ?? r.projectId,
    g;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (e) => m((t) => (t.expectedDeploymentId === e ? { ...t, expectedDeploymentId: void 0 } : t))),
      (n[4] = g))
    : (g = n[4]);
  let _;
  return (
    n[5] !== a ||
    n[6] !== c ||
    n[7] !== i ||
    n[8] !== o ||
    n[9] !== p.expectedDeploymentId ||
    n[10] !== r ||
    n[11] !== h
      ? ((_ = (0, $.jsx)(
          dr,
          {
            resource: r,
            isVisible: c,
            expectedDeploymentId: p.expectedDeploymentId,
            onRefreshComplete: g,
            controlsRef: a,
            onClose: i,
            onNavigateToSite: o,
          },
          h,
        )),
        (n[5] = a),
        (n[6] = c),
        (n[7] = i),
        (n[8] = o),
        (n[9] = p.expectedDeploymentId),
        (n[10] = r),
        (n[11] = h),
        (n[12] = _))
      : (_ = n[12]),
    _
  );
}
function dr(e) {
  let t = (0, mr.c)(42),
    {
      resource: n,
      isVisible: r,
      expectedDeploymentId: i,
      onRefreshComplete: a,
      onClose: s,
      controlsRef: c,
      onNavigateToSite: l,
    } = e,
    u = xe(),
    d = o(`/sites/${encodeURIComponent(n.projectId)}/preview`),
    [f, p] = (0, hr.useState)(0),
    m = (0, hr.useRef)(null),
    h = c ?? m,
    g;
  t[0] === h.current
    ? (g = t[1])
    : ((g = (e) => {
        h.current?.confirmAction(e) !== !1 && e();
      }),
      (t[0] = h.current),
      (t[1] = g));
  let _ = g,
    [v, y] = (0, hr.useState)(null),
    [b, x] = (0, hr.useState)(`loading`),
    S;
  t[2] !== h.current || t[3] !== v?.contentWindow
    ? ((S = () => {
        let e = v?.contentWindow;
        if (!e) return !1;
        let t = () => {
          e.location.reload();
        };
        return h.current?.confirmAction(t) !== !1 && (t(), !0);
      }),
      (t[2] = h.current),
      (t[3] = v?.contentWindow),
      (t[4] = S))
    : (S = t[4]);
  let C = (0, hr.useEffectEvent)(S),
    w;
  t[5] === a ? (w = t[6]) : ((w = (e) => a(e)), (t[5] = a), (t[6] = w));
  let T = (0, hr.useEffectEvent)(w),
    E;
  t[7] !== T || t[8] !== i || t[9] !== r || t[10] !== C || t[11] !== v
    ? ((E = () => {
        if (v && r && i)
          return cr({ wrapper: v, deploymentId: i, refresh: () => C(), onComplete: () => T(i) });
      }),
      (t[7] = T),
      (t[8] = i),
      (t[9] = r),
      (t[10] = C),
      (t[11] = v),
      (t[12] = E))
    : (E = t[12]);
  let D;
  (t[13] !== i || t[14] !== r || t[15] !== v
    ? ((D = [v, r, i]), (t[13] = i), (t[14] = r), (t[15] = v), (t[16] = D))
    : (D = t[16]),
    (0, hr.useEffect)(E, D));
  let O;
  t[17] !== u || t[18] !== n.title
    ? ((O =
        n.title ??
        u.formatMessage({
          id: `sites.preview.title`,
          defaultMessage: `Site preview`,
          description: `Accessible title of the generated Site preview iframe`,
        })),
      (t[17] = u),
      (t[18] = n.title),
      (t[19] = O))
    : (O = t[19]);
  let k = O,
    A;
  t[20] !== s || t[21] !== _ ? ((A = () => _(s)), (t[20] = s), (t[21] = _), (t[22] = A)) : (A = t[22]);
  let j;
  t[23] !== i || t[24] !== a || t[25] !== _
    ? ((j = () =>
        _(() => {
          (i && a(i), x(`loading`), p(fr));
        })),
      (t[23] = i),
      (t[24] = a),
      (t[25] = _),
      (t[26] = j))
    : (j = t[26]);
  let ee, M;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = () => x(`error`)),
      (ee = (e) => {
        x(e.currentTarget.contentDocument?.querySelector(`iframe`) == null ? `error` : `ready`);
      }),
      (t[27] = ee),
      (t[28] = M))
    : ((ee = t[27]), (M = t[28]));
  let te;
  t[29] !== d || t[30] !== k
    ? ((te = (0, $.jsx)(Cn, {
        ref: y,
        allow: `clipboard-write`,
        className: `min-h-0 w-full flex-1 border-0`,
        title: k,
        src: d,
        referrerPolicy: `no-referrer`,
        onError: M,
        onLoad: ee,
      })),
      (t[29] = d),
      (t[30] = k),
      (t[31] = te))
    : (te = t[31]);
  let N;
  return (
    t[32] !== h ||
    t[33] !== l ||
    t[34] !== f ||
    t[35] !== n ||
    t[36] !== b ||
    t[37] !== te ||
    t[38] !== A ||
    t[39] !== j ||
    t[40] !== v
      ? ((N = (0, $.jsx)(
          pr,
          {
            controlsRef: h,
            wrapper: v,
            resource: n,
            status: b,
            onClose: A,
            onNavigateToSite: l,
            onRefresh: j,
            children: te,
          },
          f,
        )),
        (t[32] = h),
        (t[33] = l),
        (t[34] = f),
        (t[35] = n),
        (t[36] = b),
        (t[37] = te),
        (t[38] = A),
        (t[39] = j),
        (t[40] = v),
        (t[41] = N))
      : (N = t[41]),
    N
  );
}
function fr(e) {
  return e + 1;
}
function pr(e) {
  let n = (0, mr.c)(154),
    {
      annotationControl: i,
      controlsRef: a,
      wrapper: c,
      children: l,
      resource: u,
      status: f,
      onRefresh: p,
      onClose: m,
      onNavigateToSite: h,
    } = e,
    g = c === void 0 ? null : c,
    _ = t(Qe),
    v = xe(),
    y;
  n[0] === u.projectId ? (y = n[1]) : ((y = rn(u.projectId)), (n[0] = u.projectId), (n[1] = y));
  let b = o(y),
    w;
  n[2] === u.projectId ? (w = n[3]) : ((w = Le(u.projectId)), (n[2] = u.projectId), (n[3] = w));
  let T = o(w),
    [E, D] = (0, hr.useState)(!1),
    O;
  n[4] === E
    ? (O = n[5])
    : ((O = (e) => {
        let t = je(e).width <= 720;
        t !== E && D(t);
      }),
      (n[4] = E),
      (n[5] = O));
  let A = de(O),
    [j, ee] = fe(),
    [M, N] = fe(),
    P = Math.max(ee ?? 0, N ?? 0),
    { data: F } = be(Ie, u.projectId),
    I;
  n[6] === F ? (I = n[7]) : ((I = Pe(F)), (n[6] = F), (n[7] = I));
  let L = I,
    re;
  n[8] === F ? (re = n[9]) : ((re = kt(F)), (n[8] = F), (n[9] = re));
  let R = re,
    ae = L || F?.current_user_role === `editor`,
    oe = Re(`262557526`),
    se = Re(`3051515858`),
    z,
    ce,
    B,
    V,
    H,
    U,
    W,
    G,
    he,
    ge,
    K,
    _e,
    ve,
    q,
    Se,
    Ce,
    we,
    J,
    De,
    Y;
  if (
    n[10] !== oe ||
    n[11] !== b ||
    n[12] !== i ||
    n[13] !== se ||
    n[14] !== ae ||
    n[15] !== L ||
    n[16] !== R ||
    n[17] !== E ||
    n[18] !== a ||
    n[19] !== v ||
    n[20] !== j ||
    n[21] !== h ||
    n[22] !== p ||
    n[23] !== A ||
    n[24] !== F?.current_live_url ||
    n[25] !== F?.title ||
    n[26] !== u ||
    n[27] !== _ ||
    n[28] !== T ||
    n[29] !== P ||
    n[30] !== f ||
    n[31] !== g
  ) {
    let e = nt(u, F?.current_live_url),
      t = u.title ?? new URL(e.url).hostname,
      o;
    n[52] === v
      ? (o = n[53])
      : ((o = v.formatMessage({
          id: `sites.preview.visit`,
          defaultMessage: `Open site in browser`,
          description: `Tooltip and accessible label for the title bar button that opens the published Site in a new browser tab`,
        })),
        (n[52] = v),
        (n[53] = o));
    let s = o,
      c;
    (n[54] === v
      ? (c = n[55])
      : ((c = v.formatMessage({
          id: `sites.preview.moreActions`,
          defaultMessage: `More site actions`,
          description: `Accessible label for the Site preview menu containing sharing, settings, and analytics actions`,
        })),
        (n[54] = v),
        (n[55] = c)),
      (V = c));
    let l;
    (n[56] === v
      ? (l = n[57])
      : ((l = v.formatMessage({
          id: `sites.preview.close`,
          defaultMessage: `Close site preview`,
          description: `Accessible label for the close button in the Site preview header. Closes the preview panel, not the website itself.`,
        })),
        (n[56] = v),
        (n[57] = l)),
      (z = l));
    let d;
    (n[58] === v
      ? (d = n[59])
      : ((d = v.formatMessage({
          id: `sites.preview.share.label`,
          defaultMessage: `Share`,
          description: `Short label for the Share button in the Site preview header and its narrow-view menu item. Opens sharing controls for the current website.`,
        })),
        (n[58] = v),
        (n[59] = d)),
      (H = d));
    let m;
    (n[60] !== F?.title || n[61] !== u.projectId || n[62] !== u.title || n[63] !== _
      ? ((m = () => {
          (en(_, S, { action: C.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_SITES_SHARE_CLICKED }),
            mn(_, u.projectId, {
              initialProjectTitle: u.title ?? F?.title,
              source: ie.CODEX_SITES_SHARING_SOURCE_IN_APP_BROWSER,
            }));
        }),
        (n[60] = F?.title),
        (n[61] = u.projectId),
        (n[62] = u.title),
        (n[63] = _),
        (n[64] = m))
      : (m = n[64]),
      (ce = m));
    let y;
    (n[65] !== oe ||
    n[66] !== b ||
    n[67] !== L ||
    n[68] !== R ||
    n[69] !== E ||
    n[70] !== ce ||
    n[71] !== V ||
    n[72] !== h ||
    n[73] !== u.projectId ||
    n[74] !== _ ||
    n[75] !== T ||
    n[76] !== H
      ? ((y =
          L || (E && R)
            ? (0, $.jsxs)(Oe, {
                align: `end`,
                contentWidth: `menu`,
                triggerButton: (0, $.jsx)(pn, {
                  "aria-label": V,
                  size: `default`,
                  children: (0, $.jsx)(k, {}),
                }),
                children: [
                  E && R
                    ? (0, $.jsx)(Te.Item, { leftIcon: (0, $.jsx)(le, {}), onSelect: ce, children: H })
                    : null,
                  L && oe
                    ? (0, $.jsx)(Te.Item, {
                        asChild: !0,
                        leftIconAsset: Ee,
                        onSelect: () => {
                          (Be(_, {
                            action: r.CODEX_APPGEN_INTERACTION_ACTION_ANALYTICS_OPENED,
                            projectId: u.projectId,
                            source:
                              h == null
                                ? x.CODEX_APPGEN_INTERACTION_SOURCE_RESPONSE_CARD
                                : x.CODEX_APPGEN_INTERACTION_SOURCE_SITES,
                          }),
                            h?.(rn(u.projectId)));
                        },
                        children: (0, $.jsx)(`a`, {
                          href: h == null ? b : void 0,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          children: (0, $.jsx)(ke, {
                            id: `appgenPage.analytics.label`,
                            defaultMessage: `Analytics`,
                            description: `Menu item for opening site analytics`,
                          }),
                        }),
                      })
                    : null,
                  L
                    ? (0, $.jsx)(Te.Item, {
                        asChild: !0,
                        leftIconAsset: Me,
                        onSelect: () => {
                          (en(_, S, {
                            action: C.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_SITES_SETTINGS_CLICKED,
                          }),
                            h?.(Le(u.projectId)));
                        },
                        children: (0, $.jsx)(`a`, {
                          href: h == null ? T : void 0,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          children: (0, $.jsx)(ke, {
                            id: `appgenPage.settings.label`,
                            defaultMessage: `Settings`,
                            description: `Menu item for opening site settings`,
                          }),
                        }),
                      })
                    : null,
                ],
              })
            : null),
        (n[65] = oe),
        (n[66] = b),
        (n[67] = L),
        (n[68] = R),
        (n[69] = E),
        (n[70] = ce),
        (n[71] = V),
        (n[72] = h),
        (n[73] = u.projectId),
        (n[74] = _),
        (n[75] = T),
        (n[76] = H),
        (n[77] = y))
      : (y = n[77]),
      (B = y),
      (Ce = A),
      (we = `@container/site-preview flex h-full min-h-0 flex-col bg-surface`),
      (ve = `grid min-h-toolbar shrink-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-toolbar py-2 draggable @max-[560px]/site-preview:gap-1 @max-[560px]/site-preview:px-2`),
      n[78] === P
        ? (q = n[79])
        : ((q = P ? { gridTemplateColumns: `${P}px minmax(0, 1fr) ${P}px` } : void 0),
          (n[78] = P),
          (n[79] = q)));
    let w;
    (n[80] !== i ||
    n[81] !== se ||
    n[82] !== ae ||
    n[83] !== E ||
    n[84] !== a ||
    n[85] !== p ||
    n[86] !== u ||
    n[87] !== f ||
    n[88] !== g
      ? ((w = se
          ? (i?.(E) ??
            (0, $.jsx)(qn, {
              controlsRef: a,
              compact: E,
              resource: u,
              wrapper: g,
              canAnnotate: ae,
              onRefresh: p,
              refreshDisabled: f === `loading`,
            }))
          : (0, $.jsx)(Qn, {
              compact: E,
              showNavigation: !1,
              canGoBack: !1,
              canGoForward: !1,
              onRefresh: p,
              refreshDisabled: f === `loading`,
            })),
        (n[80] = i),
        (n[81] = se),
        (n[82] = ae),
        (n[83] = E),
        (n[84] = a),
        (n[85] = p),
        (n[86] = u),
        (n[87] = f),
        (n[88] = g),
        (n[89] = w))
      : (w = n[89]),
      n[90] !== j || n[91] !== w
        ? ((Se = (0, $.jsx)(`div`, { ref: j, className: `flex w-max items-center gap-1.5`, children: w })),
          (n[90] = j),
          (n[91] = w),
          (n[92] = Se))
        : (Se = n[92]),
      (K = `flex max-w-full min-w-0 flex-col items-center justify-self-center text-center`),
      (_e = (0, $.jsx)(`span`, { className: `w-full truncate text-sm font-medium`, children: t })),
      (Y = s),
      (U = e.url),
      (W = `_blank`),
      (G = `noopener noreferrer`),
      (he = `group/site-url inline-flex max-w-full min-w-0 items-center gap-1 rounded-sm text-xs text-secondary no-drag`),
      (ge = (t) => {
        (en(_, me, {}),
          en(_, S, { action: C.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_OPENED_IN_EXTERNAL_BROWSER }),
          ct({ event: t, href: e.url, initiator: `mcp_app_resource`, openTarget: `external-browser` }));
      }),
      (J = `min-w-0 truncate pb-0.5 leading-5 underline-offset-2 group-hover/site-url:underline group-focus-visible/site-url:underline`),
      (De = pt(e.url)),
      (n[10] = oe),
      (n[11] = b),
      (n[12] = i),
      (n[13] = se),
      (n[14] = ae),
      (n[15] = L),
      (n[16] = R),
      (n[17] = E),
      (n[18] = a),
      (n[19] = v),
      (n[20] = j),
      (n[21] = h),
      (n[22] = p),
      (n[23] = A),
      (n[24] = F?.current_live_url),
      (n[25] = F?.title),
      (n[26] = u),
      (n[27] = _),
      (n[28] = T),
      (n[29] = P),
      (n[30] = f),
      (n[31] = g),
      (n[32] = z),
      (n[33] = ce),
      (n[34] = B),
      (n[35] = V),
      (n[36] = H),
      (n[37] = U),
      (n[38] = W),
      (n[39] = G),
      (n[40] = he),
      (n[41] = ge),
      (n[42] = K),
      (n[43] = _e),
      (n[44] = ve),
      (n[45] = q),
      (n[46] = Se),
      (n[47] = Ce),
      (n[48] = we),
      (n[49] = J),
      (n[50] = De),
      (n[51] = Y));
  } else
    ((z = n[32]),
      (ce = n[33]),
      (B = n[34]),
      (V = n[35]),
      (H = n[36]),
      (U = n[37]),
      (W = n[38]),
      (G = n[39]),
      (he = n[40]),
      (ge = n[41]),
      (K = n[42]),
      (_e = n[43]),
      (ve = n[44]),
      (q = n[45]),
      (Se = n[46]),
      (Ce = n[47]),
      (we = n[48]),
      (J = n[49]),
      (De = n[50]),
      (Y = n[51]));
  let X;
  n[93] !== J || n[94] !== De
    ? ((X = (0, $.jsx)(`span`, { className: J, children: De })), (n[93] = J), (n[94] = De), (n[95] = X))
    : (X = n[95]);
  let Ae;
  n[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, $.jsx)(ue, { className: `size-3.5` })), (n[96] = Ae))
    : (Ae = n[96]);
  let Ne;
  n[97] !== U || n[98] !== W || n[99] !== G || n[100] !== he || n[101] !== ge || n[102] !== X || n[103] !== Y
    ? ((Ne = (0, $.jsxs)(`a`, {
        "aria-label": Y,
        href: U,
        target: W,
        rel: G,
        className: he,
        onClick: ge,
        children: [X, Ae],
      })),
      (n[97] = U),
      (n[98] = W),
      (n[99] = G),
      (n[100] = he),
      (n[101] = ge),
      (n[102] = X),
      (n[103] = Y),
      (n[104] = Ne))
    : (Ne = n[104]);
  let Fe;
  n[105] !== K || n[106] !== _e || n[107] !== Ne
    ? ((Fe = (0, $.jsxs)(`div`, { className: K, children: [_e, Ne] })),
      (n[105] = K),
      (n[106] = _e),
      (n[107] = Ne),
      (n[108] = Fe))
    : (Fe = n[108]);
  let ze;
  n[109] !== R || n[110] !== E || n[111] !== ce || n[112] !== H
    ? ((ze =
        R && !E
          ? (0, $.jsx)(d, {
              label: H,
              children: (0, $.jsxs)(ne, {
                "aria-label": H,
                onClick: ce,
                children: [(0, $.jsx)(te, { icon: { 16: pe, 20: le } }), (0, $.jsx)(`span`, { children: H })],
              }),
            })
          : null),
      (n[109] = R),
      (n[110] = E),
      (n[111] = ce),
      (n[112] = H),
      (n[113] = ze))
    : (ze = n[113]);
  let Ve;
  n[114] !== B || n[115] !== V
    ? ((Ve = B && (0, $.jsx)(d, { label: V, children: B })), (n[114] = B), (n[115] = V), (n[116] = Ve))
    : (Ve = n[116]);
  let He;
  n[117] === v
    ? (He = n[118])
    : ((He = v.formatMessage({
        id: `sites.preview.windowControls`,
        defaultMessage: `Preview controls`,
        description: `Accessible label for the group of buttons that expand or close the Site preview panel.`,
      })),
      (n[117] = v),
      (n[118] = He));
  let Ue;
  n[119] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = (0, $.jsx)(tn, { surface: `viewer` })), (n[119] = Ue))
    : (Ue = n[119]);
  let We;
  n[120] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = (0, $.jsx)(s, {})), (n[120] = We))
    : (We = n[120]);
  let Ge;
  n[121] !== z || n[122] !== m
    ? ((Ge = (0, $.jsx)(ne, { "aria-label": z, uniform: !0, onClick: m, children: We })),
      (n[121] = z),
      (n[122] = m),
      (n[123] = Ge))
    : (Ge = n[123]);
  let Ke;
  n[124] !== z || n[125] !== Ge
    ? ((Ke = (0, $.jsx)(ye, { tooltipContent: z, delayOpen: !0, children: Ge })),
      (n[124] = z),
      (n[125] = Ge),
      (n[126] = Ke))
    : (Ke = n[126]);
  let qe;
  n[127] !== He || n[128] !== Ke
    ? ((qe = (0, $.jsxs)(d, { variant: `window`, label: He, children: [Ue, Ke] })),
      (n[127] = He),
      (n[128] = Ke),
      (n[129] = qe))
    : (qe = n[129]);
  let Ye;
  n[130] !== M || n[131] !== ze || n[132] !== Ve || n[133] !== qe
    ? ((Ye = (0, $.jsxs)(`div`, {
        ref: M,
        className: `flex w-max items-center gap-1.5 justify-self-end`,
        children: [ze, Ve, qe],
      })),
      (n[130] = M),
      (n[131] = ze),
      (n[132] = Ve),
      (n[133] = qe),
      (n[134] = Ye))
    : (Ye = n[134]);
  let Xe;
  n[135] !== ve || n[136] !== q || n[137] !== Se || n[138] !== Fe || n[139] !== Ye
    ? ((Xe = (0, $.jsxs)(`header`, { className: ve, style: q, children: [Se, Fe, Ye] })),
      (n[135] = ve),
      (n[136] = q),
      (n[137] = Se),
      (n[138] = Fe),
      (n[139] = Ye),
      (n[140] = Xe))
    : (Xe = n[140]);
  let Ze;
  n[141] === f
    ? (Ze = n[142])
    : ((Ze =
        f === `loading`
          ? (0, $.jsxs)(`div`, {
              className: `absolute inset-0 z-10 bg-surface`,
              role: `status`,
              children: [
                (0, $.jsx)(Je, { debugName: `SitePreview`, fillParent: !0 }),
                (0, $.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, $.jsx)(ke, {
                    id: `sites.preview.loading`,
                    defaultMessage: `Loading preview…`,
                    description: `Status announced to assistive technology while the hosted website opens or reloads in the Site preview. No placeholders.`,
                  }),
                }),
              ],
            })
          : null),
      (n[141] = f),
      (n[142] = Ze));
  let $e;
  n[143] === f
    ? ($e = n[144])
    : (($e =
        f === `error`
          ? (0, $.jsx)(`div`, {
              className: `absolute inset-0 z-10 bg-surface`,
              role: `alert`,
              children: (0, $.jsx)(Mt, {
                className: `h-full`,
                children: (0, $.jsx)(`p`, {
                  className: `max-w-md text-balance`,
                  children: (0, $.jsx)(ke, {
                    id: `sites.preview.error`,
                    defaultMessage: `Couldn’t load the site preview. Refresh to try again, or open the site in a new tab.`,
                    description: `Error shown when the Site preview cannot be loaded`,
                  }),
                }),
              }),
            })
          : null),
      (n[143] = f),
      (n[144] = $e));
  let et;
  n[145] !== l || n[146] !== Ze || n[147] !== $e
    ? ((et = (0, $.jsxs)(`div`, {
        className: `relative flex min-h-0 flex-1 flex-col`,
        children: [Ze, $e, l],
      })),
      (n[145] = l),
      (n[146] = Ze),
      (n[147] = $e),
      (n[148] = et))
    : (et = n[148]);
  let tt;
  return (
    n[149] !== Ce || n[150] !== we || n[151] !== Xe || n[152] !== et
      ? ((tt = (0, $.jsxs)(`div`, { ref: Ce, className: we, children: [Xe, et] })),
        (n[149] = Ce),
        (n[150] = we),
        (n[151] = Xe),
        (n[152] = et),
        (n[153] = tt))
      : (tt = n[153]),
    tt
  );
}
var mr, hr, $;
function gr() {
  return (gr = e(() => {
    ((mr = A()),
      M(),
      ve(),
      i(),
      fn(),
      B(),
      (hr = u()),
      R(),
      T(),
      U(),
      Ct(),
      F(),
      bt(),
      X(),
      Ce(),
      ft(),
      an(),
      _e(),
      sn(),
      nn(),
      lt(),
      ae(),
      rr(),
      We(),
      Ke(),
      ln(),
      He(),
      dt(),
      hn(),
      _t(),
      sr(),
      lr(),
      Sn(),
      ($ = y()));
  }))();
}
gr();
export { ur as SitePreview };
//# sourceMappingURL=site-preview-819a29cd08ad.js.map
