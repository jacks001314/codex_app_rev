import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  AO as r,
  CJ as i,
  CO as a,
  CS as o,
  Cot as s,
  Cxt as c,
  D2 as l,
  DIt as u,
  Dz as d,
  EPt as f,
  FD as p,
  I3 as m,
  ID as h,
  IDt as g,
  Ixt as _,
  L$ as v,
  M5 as y,
  Mz as b,
  N5 as x,
  ND as S,
  Nz as C,
  O2 as w,
  P3 as T,
  Pxt as E,
  Qht as D,
  R$ as O,
  Rnt as k,
  TJ as A,
  TLt as j,
  TO as M,
  UD as N,
  VDt as ee,
  Vxt as te,
  Wtt as ne,
  XV as P,
  _It as F,
  _O as re,
  _xt as ie,
  bB as ae,
  cB as oe,
  cE as se,
  cO as ce,
  cSt as I,
  cz as L,
  fLt as R,
  fO as z,
  gO as le,
  i4 as B,
  iot as ue,
  jDt as de,
  jH as fe,
  k5 as pe,
  kz as me,
  lO as he,
  mO as ge,
  nE as _e,
  nSt as ve,
  oB as V,
  oIt as H,
  oO as ye,
  oot as be,
  pIt as xe,
  pLt as U,
  r4 as Se,
  rSt as Ce,
  rst as we,
  sE as Te,
  sO as Ee,
  sz as De,
  t3 as W,
  vO as G,
  vzt as K,
  wB as Oe,
  wIt as ke,
  wS as Ae,
  wot as q,
  xB as je,
  xMt as J,
  yMt as Y,
  yzt as Me,
  zLt as Ne,
  zxt as Pe,
} from "./app-shared-bbfeca5e5737.js";
import {
  Agn as Fe,
  Byr as Ie,
  Cen as Le,
  Cwr as Re,
  EC as ze,
  FB as Be,
  Ftr as Ve,
  H8t as He,
  Hwr as Ue,
  IB as We,
  JPn as Ge,
  Jyr as Ke,
  KB as X,
  Kh as qe,
  Kwr as Je,
  LB as Ye,
  Nbr as Xe,
  Nfr as Ze,
  Ngn as Qe,
  O0n as $e,
  Pbr as et,
  Pen as tt,
  Pgn as nt,
  QDr as rt,
  SZn as it,
  Su as at,
  TC as ot,
  V8t as st,
  VQn as ct,
  VZn as lt,
  XDr as ut,
  XPn as dt,
  Yh as ft,
  _an as pt,
  _wr as mt,
  aEr as ht,
  bTn as gt,
  bu as _t,
  cEr as vt,
  ca as yt,
  cnr as bt,
  eDr as xt,
  fvr as St,
  gan as Ct,
  gvr as wt,
  gwr as Tt,
  hp as Et,
  iI as Dt,
  jgn as Ot,
  kZn as kt,
  kfr as At,
  kvr as jt,
  la as Mt,
  lnr as Nt,
  mXn as Pt,
  mnr as Ft,
  mp as It,
  mvr as Lt,
  nDr as Rt,
  nN as zt,
  oI as Bt,
  pXn as Vt,
  pnr as Ht,
  qh as Ut,
  qwr as Wt,
  rTr as Gt,
  tDn as Kt,
  tEr as qt,
  tN as Jt,
  uDn as Yt,
  ugn as Xt,
  unr as Zt,
  vCr as Qt,
  vu as $t,
  wvr as en,
  xNn as tn,
  xu as nn,
  xwr as rn,
  yCr as an,
  yTn as on,
  yan as sn,
  ygn as cn,
  yjn as ln,
} from "./app-initial-5851df3f6cb1.js";
import { el as un, tl as dn } from "./app-primary-fe8a450b3b04.js";
import { a as fn, t as pn } from "./PopcornManualEditHeaderControls-e0458d509e7c.js";
import { n as mn, t as hn } from "./open-appgen-share-dialog-8d437cfd3c67.js";
import { o as gn, t as _n } from "./artifact-annotation-batch-controls-58c22049fec2.js";
import { n as vn, t as yn } from "./annotation-mode-icon-c9f59d42793c.js";
import { n as bn, t as xn } from "./annotation-mode-analytics-883da7ddba89.js";
async function Sn(e) {
  if (!kn.safeParse(e).success) throw Error(`Invalid Site annotation capture`);
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
function Cn(e, t, n, r) {
  if (!e.isTrusted || e.source !== t || !n.includes(e.origin)) return null;
  let i = jn.safeParse(e.data);
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
function wn(e) {
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
var Tn, En, Dn, On, kn, An, jn;
function Mn() {
  return (Mn = e(() => {
    (f(),
      (Tn = `sites-preview-annotations`),
      (En = j().min(1).max(128)),
      (Dn = R().min(-1e7).max(1e7)),
      (On = R().nonnegative().max(1e7)),
      (kn = U({
        blob: ke((e) => e instanceof Blob && e.type === `image/png` && e.size > 0 && e.size <= 4194304),
        width: R().int().positive().max(1600),
        height: R().int().positive().max(1600),
      })),
      (An = U({
        id: En,
        revision: R()
          .int()
          .positive()
          .max(2 ** 53 - 1),
        text: j().trim().min(1).max(4e3),
        target: U({
          url: Ne().max(8192),
          selector: j().min(1).max(4e3),
          tagName: j().min(1).max(128),
          text: j().max(2e3),
          bounds: U({ x: Dn, y: Dn, width: On, height: On }),
          point: U({ x: Dn, y: Dn }).optional(),
          viewport: U({ width: On, height: On, scrollX: Dn, scrollY: Dn }),
        }),
        capture: kn.optional(),
      })),
      (jn = U({
        channel: n(Tn),
        version: n(1),
        sessionId: En,
        event: u(`type`, [
          U({
            type: n(`state`),
            mode: H([`interact`, `annotate`]),
            annotations: ke((e) => Array.isArray(e) && e.length <= 100).pipe(xe(An)),
          }),
          U({ type: n(`request-mode`), mode: H([`interact`, `annotate`]) }),
          U({ type: n(`navigation-state`), canGoBack: F(), canGoForward: F() }),
        ]),
      })));
  }))();
}
function Nn({
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
    p = () => (t?.value.kind === `local` ? t.get(Le) : e.get(ct, n)),
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
      (i(), sn(e, n, (e) => e.filter((e) => !S(e))));
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
            a = Math.max(0, ...e.get(Ct, n).map((e) => e.position.line));
          for (let e of t) {
            if (g || !d) break;
            if (o(e.id, e.revision)) continue;
            let t = m.get(e.id);
            if (t && t.annotation.revision >= e.revision) {
              i.set(e.id, t);
              continue;
            }
            let n = Fn(e, r, y(e.id), t?.comment.position.line ?? ++a);
            (e.capture && (n.localBrowserScreenshot = await In(e.capture, y(e.id))),
              !o(e.id, e.revision) && i.set(e.id, { annotation: e, comment: n }));
          }
          if (!d || p() || g || t !== h) continue;
          let s = new Set([...m.keys(), ...i.keys()].map(y));
          m.clear();
          for (let [e, t] of i) o(e, t.annotation.revision) || m.set(e, t);
          sn(e, n, (e) => [
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
        ? t.watch((e) => w(e.get(Le), e.get(Ct, n)))
        : e.watch((e) => w(e.get(ct, n), e.get(Ct, n)));
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
function Pn(e) {
  return e.replace(/[\r\n\u2028\u2029]/g, ` `);
}
function Fn(e, t, n, r) {
  let i = new URL(e.target.url);
  return (
    (i.search = ``),
    (i.hash = ``),
    (i.username = ``),
    (i.password = ``),
    D({
      annotationId: n,
      artifactKind: `site`,
      body: e.text,
      label: $t(e.target),
      line: r,
      path: i.origin + i.pathname,
      title: Pn(t.title ?? i.hostname),
      metadata: {
        target: { ...e.target, url: i.toString(), type: `site-element-selection`, projectId: t.projectId },
      },
    })
  );
}
async function In(e, t) {
  try {
    return (await Sn(e), { commentId: t, dataUrl: await $e(e.blob), width: e.width, height: e.height });
  } catch {
    return;
  }
}
async function Ln(e, t, n, r) {
  let i = n[0];
  if (!i) return;
  let a = e.get(un, t);
  await a?.submit({
    type: `artifact-annotation-direct-submit`,
    body: n.map(Xe).join(`

`),
    comment: i,
    comments: n,
    isCurrent: () => e.get(un, t) === a,
    onAccepted: (i) => {
      r();
      let a = new Set(n);
      for (let n of new Set([t, i])) n != null && sn(e, n, (e) => e.filter((e) => !a.has(e)));
    },
  });
}
function Rn() {
  return (Rn = e(() => {
    (we(), et(), tn(), pt(), dn(), tt(), Mn());
  }))();
}
function zn(e = ``) {
  return new Bn(e);
}
var Bn;
function Vn() {
  return (Vn = e(() => {
    Bn = class {
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
function Hn({
  scope: e,
  composerScope: t,
  wrapper: n,
  conversationId: r,
  resource: i,
  canAnnotate: a = !0,
  hasPendingAnnotations: o = () => !1,
  annotationLifecycle: s = zn(),
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
      let S = Un(n),
        C = S?.contentWindow;
      if (!S || !C) return;
      s.resetDocument(S);
      let w = S.src,
        T = wn(w);
      if (T.length === 0) return;
      let E = crypto.randomUUID(),
        D,
        O = { canGoBack: !1, canGoForward: !1 },
        k = !1,
        A = !0,
        j = 1e3,
        M,
        N = (e) => {
          if (A)
            for (let t of D ? [D] : T)
              C.postMessage({ channel: Tn, version: 1, sessionId: E, command: e }, t);
        },
        ee = () => {
          (s.discardCurrentBatch(),
            re?.discardAll(),
            (h = !1),
            u(!1),
            clearTimeout(M),
            D ? N({ type: `cancel` }) : ((k = !0), F()));
        };
      v = (e) => {
        if (!(!A || !D || g || h || o())) {
          if (Un(n) !== S || S.src !== w) {
            x();
            return;
          }
          (e === `back` ? O.canGoBack : O.canGoForward) &&
            (N({ type: e === `back` ? `navigate-back` : `navigate-forward` }), C.focus());
        }
      };
      let te = (e) => (g || k || (e === `interact` && o()) ? !1 : (y(e === `annotate`), !0)),
        ne = (e) => {
          e.key === `Escape` &&
            !e.defaultPrevented &&
            !e.isComposing &&
            h &&
            te(`interact`) &&
            (e.preventDefault(), e.stopPropagation());
        },
        P = (e) => {
          if (!A || Un(n) !== S || S.src !== w) return;
          let t = Cn(e, C, D ? [D] : T, E);
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
              te(t.mode);
              return;
            }
            if (t.mode === (h ? `annotate` : `interact`) && (clearTimeout(M), k)) {
              ((k = !1), N({ type: `cancel` }), h && F());
              return;
            }
            if (!g && h && t.mode === `annotate`) {
              for (let e of s.observeSnapshot(t.annotations)) c(e);
              re?.reconcile(t.annotations);
            }
          }
        },
        F = () => {
          if ((clearTimeout(M), A)) {
            if (Un(n) !== S || S.src !== w) {
              x();
              return;
            }
            (N({ type: `set-mode`, mode: h ? `annotate` : `interact` }),
              (M = setTimeout(F, j)),
              (j = Math.min(j * 2, 5e3)));
          }
        },
        re =
          a && r != null
            ? Nn({
                scope: e,
                composerScope: t,
                conversationId: r,
                resource: i,
                cancelPreview: ee,
                getComposerAnnotationIds: () => s.getComposerAnnotationIds(),
                isAnnotationConsumed: (e, t) => s.isConsumed(e, t),
                removePreviewAnnotation: (e) => N({ type: `remove`, annotationId: e }),
                onAnnotationAdmitted: (e) => s.admitToComposer(e),
                onAnnotationsDetached: _,
                onSendingChange: (e) => {
                  ((g = e), e && ((h = !1), u(!1), m?.()), f(e));
                },
              })
            : null;
      ((b = () => {
        re?.cancel();
      }),
        (m = () => {
          ((j = 1e3), F());
        }),
        window.addEventListener(`message`, P),
        window.addEventListener(`keydown`, ne));
      let ie = () => {
        (s.resetDocument(), x());
      };
      (S.addEventListener(`load`, ie),
        a &&
          r != null &&
          e.set(
            at,
            { conversationId: r, projectId: i.projectId },
            {
              focus: (e) => {
                !g && D && ((h = !0), u(!0), F(), N({ type: `focus`, annotationId: e }));
              },
            },
          ),
        (p = () => {
          (a && r != null && e.set(at, { conversationId: r, projectId: i.projectId }, null),
            N({ type: `set-mode`, mode: `interact` }),
            (A = !1),
            clearTimeout(M),
            re?.dispose(),
            window.removeEventListener(`message`, P),
            window.removeEventListener(`keydown`, ne),
            S.removeEventListener(`load`, ie));
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
function Un(e) {
  try {
    return e.contentDocument?.querySelector(`iframe`) ?? null;
  } catch {
    return null;
  }
}
function Wn() {
  return (Wn = e(() => {
    (xn(), Rn(), nn(), Vn(), Mn());
  }))();
}
function Gn(e) {
  let t = (0, Zn.c)(5),
    n = _(Tt),
    r;
  t[0] === n.value ? (r = t[1]) : ((r = rn(n.value)), (t[0] = n.value), (t[1] = r));
  let i = r,
    a;
  return (
    t[2] !== i || t[3] !== e
      ? ((a = (0, Q.jsx)(Kn, { ...e, conversationId: i })), (t[2] = i), (t[3] = e), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Kn(e) {
  let n = (0, Zn.c)(106),
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
    p = _(Tt),
    m = ee(),
    [h, v] = (0, Z.useState)(null),
    [y, b] = (0, Z.useState)(!1),
    [x, S] = (0, Z.useState)(!1),
    [C, w] = (0, Z.useState)(!1),
    T;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { canGoBack: !1, canGoForward: !1 }), (n[0] = T))
    : (T = n[0]);
  let [E, D] = (0, Z.useState)(T),
    [O, k] = (0, Z.useState)(null),
    A = i?.parentElement,
    j = (0, Z.useRef)(null),
    M;
  n[1] !== a || n[2] !== r.projectId
    ? ((M = JSON.stringify([a, r.projectId])), (n[1] = a), (n[2] = r.projectId), (n[3] = M))
    : (M = n[3]);
  let N = M,
    te = (0, Z.useRef)(null),
    ne;
  n[4] !== a || n[5] !== r.projectId
    ? ((ne = { conversationId: a, projectId: r.projectId }), (n[4] = a), (n[5] = r.projectId), (n[6] = ne))
    : (ne = n[6]);
  let P = Pe(er, ne),
    F;
  n[7] === p ? (F = n[8]) : ((F = At(p)), (n[7] = p), (n[8] = F));
  let ie;
  n[9] !== a || n[10] !== F
    ? ((ie = { conversationId: a, browserConversationId: F }), (n[9] = a), (n[10] = F), (n[11] = ie))
    : (ie = n[11]);
  let ae = Pe($n, ie),
    oe;
  n[12] !== a || n[13] !== r.projectId || n[14] !== p
    ? ((oe = (e) => {
        let t = p.get(er, { conversationId: a, projectId: r.projectId }).length;
        (j.current?.cancel(),
          a != null &&
            (sn(p, a, (e) =>
              e.filter((e) => {
                let t = e.localArtifactAnnotationMetadata?.target;
                return t?.type !== `site-element-selection` || t.projectId !== r.projectId;
              }),
            ),
            e &&
              t > 0 &&
              Ye(p, {
                annotationCount: t,
                conversationId: a,
                interactionType: X.CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_BATCH_DISCARDED,
                projectId: r.projectId,
              })));
      }),
      (n[12] = a),
      (n[13] = r.projectId),
      (n[14] = p),
      (n[15] = oe))
    : (oe = n[15]);
  let se = oe,
    I;
  n[16] === se ? (I = n[17]) : ((I = () => se(!0)), (n[16] = se), (n[17] = I));
  let L = I,
    R;
  n[18] !== a || n[19] !== r.projectId || n[20] !== p || n[21] !== C
    ? ((R = (e) =>
        C ? !1 : p.get(er, { conversationId: a, projectId: r.projectId }).length > 0 ? (k(() => e), !1) : !0),
      (n[18] = a),
      (n[19] = r.projectId),
      (n[20] = p),
      (n[21] = C),
      (n[22] = R))
    : (R = n[22]);
  let z = R,
    B;
  n[23] !== P.length || n[24] !== p || n[25] !== C
    ? ((B = (e) => {
        let { currentLocation: t, nextLocation: n } = e;
        if (p.value.routeKind === `home` && t.pathname !== n.pathname) {
          let e = mt({ pathname: n.pathname, routeTemplate: n.pathname, search: n.search });
          if (p.get(Ue, Je(e)) === p.value.clientThreadId) return !1;
        }
        return (P.length > 0 || C) && (t.pathname !== n.pathname || t.search !== n.search);
      }),
      (n[23] = P.length),
      (n[24] = p),
      (n[25] = C),
      (n[26] = B))
    : (B = n[26]);
  let de;
  n[27] !== L || n[28] !== C
    ? ((de = () => {
        if (C) throw Error(`Cannot discard Site annotations while submitting`);
        L();
      }),
      (n[27] = L),
      (n[28] = C),
      (n[29] = de))
    : (de = n[29]);
  let fe = zt(B, 10, de),
    pe;
  n[30] === fe
    ? (pe = n[31])
    : ((pe = () => {
        (fe.state === `blocked` && fe.reset(), k(null));
      }),
      (n[30] = fe),
      (n[31] = pe));
  let me = pe,
    _e;
  n[32] === se ? (_e = n[33]) : ((_e = () => se(!1)), (n[32] = se), (n[33] = _e));
  let ve = (0, Z.useEffectEvent)(_e),
    V = P.length > 0,
    H;
  n[34] !== a || n[35] !== r.projectId || n[36] !== p
    ? ((H = (e) => {
        let { annotationCount: t, changeType: n } = e;
        if (a == null) return;
        let i = X.CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_REMOVED;
        (n === `added`
          ? (i = X.CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_ADDED)
          : n === `edited` && (i = X.CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_EDITED),
          Ye(p, { annotationCount: t, conversationId: a, interactionType: i, projectId: r.projectId }));
      }),
      (n[34] = a),
      (n[35] = r.projectId),
      (n[36] = p),
      (n[37] = H))
    : (H = n[37]);
  let be = (0, Z.useEffectEvent)(H),
    xe;
  n[38] !== ve || n[39] !== V
    ? ((xe = () => {
        if (!V) return;
        let e = Jn,
          t = () => ve();
        return (
          window.addEventListener(`beforeunload`, e),
          window.addEventListener(`pagehide`, t),
          () => {
            (window.removeEventListener(`beforeunload`, e), window.removeEventListener(`pagehide`, t));
          }
        );
      }),
      (n[38] = ve),
      (n[39] = V),
      (n[40] = xe))
    : (xe = n[40]);
  let U;
  (n[41] === V ? (U = n[42]) : ((U = [V]), (n[41] = V), (n[42] = U)), (0, Z.useEffect)(xe, U));
  let Se;
  (n[43] === z ? (Se = n[44]) : ((Se = () => ({ confirmAction: z })), (n[43] = z), (n[44] = Se)),
    (0, Z.useImperativeHandle)(c, Se));
  let Ce;
  n[45] === z
    ? (Ce = n[46])
    : ((Ce = (e) => {
        let t = () => {
          (j.current?.setMode(!1), j.current?.navigate(e));
        };
        z(t) && t();
      }),
      (n[45] = z),
      (n[46] = Ce));
  let we = Ce,
    Te;
  n[47] !== N || n[48] !== d || n[49] !== a || n[50] !== be || n[51] !== r || n[52] !== p || n[53] !== i
    ? ((Te = () => {
        if (!i) return;
        let e = te.current?.scopeKey === N ? te.current : zn(N);
        te.current = e;
        let t = Hn({
          scope: p,
          composerScope: Qt(p),
          wrapper: i,
          conversationId: a,
          resource: r,
          canAnnotate: d,
          annotationLifecycle: e,
          hasPendingAnnotations: () => p.get(er, { conversationId: a, projectId: r.projectId }).length > 0,
          onAnnotationChange: be,
          onNavigationChange: D,
          onModeChange: b,
          onReadyChange: S,
          onSendingChange: w,
        });
        return (
          (j.current = t),
          () => {
            (t.dispose(), (j.current = null));
          }
        );
      }),
      (n[47] = N),
      (n[48] = d),
      (n[49] = a),
      (n[50] = be),
      (n[51] = r),
      (n[52] = p),
      (n[53] = i),
      (n[54] = Te))
    : (Te = n[54]);
  let De;
  (n[55] !== N || n[56] !== d || n[57] !== a || n[58] !== r || n[59] !== p || n[60] !== i
    ? ((De = [N, i, p, a, r, d]),
      (n[55] = N),
      (n[56] = d),
      (n[57] = a),
      (n[58] = r),
      (n[59] = p),
      (n[60] = i),
      (n[61] = De))
    : (De = n[61]),
    (0, Z.useEffect)(Te, De));
  let W = x && !C && E.canGoBack,
    G = x && !C && E.canGoForward,
    K,
    Oe;
  n[62] === we
    ? ((K = n[63]), (Oe = n[64]))
    : ((K = () => we(`back`)), (Oe = () => we(`forward`)), (n[62] = we), (n[63] = K), (n[64] = Oe));
  let ke = u || C,
    q;
  n[65] !== f || n[66] !== l || n[67] !== W || n[68] !== G || n[69] !== K || n[70] !== Oe || n[71] !== ke
    ? ((q = (0, Q.jsx)(Xn, {
        compact: f,
        canGoBack: W,
        canGoForward: G,
        onBack: K,
        onForward: Oe,
        onRefresh: l,
        refreshDisabled: ke,
      })),
      (n[65] = f),
      (n[66] = l),
      (n[67] = W),
      (n[68] = G),
      (n[69] = K),
      (n[70] = Oe),
      (n[71] = ke),
      (n[72] = q))
    : (q = n[72]);
  let je;
  n[73] !== y ||
  n[74] !== d ||
  n[75] !== f ||
  n[76] !== a ||
  n[77] !== x ||
  n[78] !== r.projectId ||
  n[79] !== p ||
  n[80] !== C
    ? ((je =
        d && a != null
          ? (0, Q.jsx)(Yn, {
              annotating: y,
              compact: f,
              disabled: !x || C,
              onToggle: () => {
                let e = !y;
                (j.current?.setMode(e),
                  Ye(p, {
                    conversationId: a,
                    interactionType: e
                      ? X.CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_MODE_ENABLE_CLICKED
                      : X.CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_MODE_DISABLE_CLICKED,
                    projectId: r.projectId,
                  }));
              },
            })
          : null),
      (n[73] = y),
      (n[74] = d),
      (n[75] = f),
      (n[76] = a),
      (n[77] = x),
      (n[78] = r.projectId),
      (n[79] = p),
      (n[80] = C),
      (n[81] = je))
    : (je = n[81]);
  let J;
  n[82] !== y ||
  n[83] !== d ||
  n[84] !== ae ||
  n[85] !== P ||
  n[86] !== a ||
  n[87] !== L ||
  n[88] !== m ||
  n[89] !== A ||
  n[90] !== r.projectId ||
  n[91] !== p ||
  n[92] !== C ||
  n[93] !== h
    ? ((J =
        d && a != null && A && !C && (y || P.length > 0)
          ? (0, Qn.createPortal)(
              (0, Q.jsx)(Ae, {
                variant: `annotation`,
                enterFromBottom: y && P.length === 0,
                attention: y && P.length === 0,
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
                position: h,
                onPositionChange: v,
                children: (e) =>
                  (0, Q.jsx)(_n, {
                    previewDisabled: e,
                    annotationCount: P.length,
                    embedded: !0,
                    isAnnotating: y,
                    previewContent: (0, Q.jsx)(yt, {
                      commentAttachments: P,
                      onEditAnnotation: (e) => _t(p, a, e),
                      onRemoveAnnotation: (e) => {
                        sn(p, a, (t) =>
                          t.filter(
                            (t) =>
                              t.localArtifactAnnotationContext?.annotationId !==
                              e.localArtifactAnnotationContext?.annotationId,
                          ),
                        );
                      },
                      cwd: null,
                      hostId: `hostId` in p.value ? (p.value.hostId ?? `local`) : ue,
                    }),
                    phase: `idle`,
                    isSubmitting: C,
                    sendDisabled: !ae,
                    onCancel: L,
                    onSend: () => {
                      if (!ae || C) return;
                      let e = p.get(er, { conversationId: a, projectId: r.projectId });
                      if (e.length === 0) return;
                      let t = j.current,
                        n = `site:${r.projectId}:`,
                        i = e.flatMap((e) => {
                          let t = e.localArtifactAnnotationContext?.annotationId;
                          return t?.startsWith(n) ? [t.slice(n.length)] : [];
                        });
                      (t?.setMode(!1),
                        w(!0),
                        Ye(p, {
                          annotationCount: e.length,
                          conversationId: a,
                          interactionType: X.CHATGPT_SITES_INTERACTION_TYPE_ANNOTATION_BATCH_SUBMIT_CLICKED,
                          projectId: r.projectId,
                        }),
                        Ln(p, a, e, () => t?.detachSubmittedAnnotations(i))
                          .catch(qn)
                          .finally(() => w(!1)));
                    },
                  }),
              }),
              A,
            )
          : null),
      (n[82] = y),
      (n[83] = d),
      (n[84] = ae),
      (n[85] = P),
      (n[86] = a),
      (n[87] = L),
      (n[88] = m),
      (n[89] = A),
      (n[90] = r.projectId),
      (n[91] = p),
      (n[92] = C),
      (n[93] = h),
      (n[94] = J))
    : (J = n[94]);
  let Y;
  n[95] !== fe || n[96] !== L || n[97] !== me || n[98] !== O || n[99] !== C
    ? ((Y =
        O != null || fe.state === `blocked`
          ? (0, Q.jsx)(ge, {
              open: !0,
              size: `compact`,
              onOpenChange: (e) => {
                e || me();
              },
              children: (0, Q.jsxs)(ye, {
                as: `form`,
                onSubmit: (e) => {
                  (e.preventDefault(),
                    !C && (fe.state === `blocked` ? (k(null), fe.proceed()) : (L(), k(null), O?.())));
                },
                children: [
                  (0, Q.jsx)(he, {
                    children: (0, Q.jsx)(ce, {
                      title: (0, Q.jsx)(re, {
                        children: (0, Q.jsx)(g, {
                          id: `sites.preview.discardAnnotations.title`,
                          defaultMessage: `Discard annotations?`,
                          description: `Confirmation title before closing, refreshing, or navigating a Site preview with pending comments`,
                        }),
                      }),
                      subtitle: (0, Q.jsx)(le, {
                        children: (0, Q.jsx)(g, {
                          id: `sites.preview.discardAnnotations.description`,
                          defaultMessage: `Your annotations haven’t been sent yet.`,
                          description: `Reminds the user that their annotations have not been sent yet before they choose whether to discard them.`,
                        }),
                      }),
                    }),
                  }),
                  (0, Q.jsx)(he, {
                    children: (0, Q.jsxs)(Ee, {
                      children: [
                        (0, Q.jsx)(t, {
                          color: `outline`,
                          onClick: me,
                          children: (0, Q.jsx)(g, {
                            id: `sites.preview.discardAnnotations.cancel`,
                            defaultMessage: `Keep editing`,
                            description: `Cancels the requested preview action and preserves pending annotations`,
                          }),
                        }),
                        (0, Q.jsx)(t, {
                          type: `submit`,
                          color: `dangerSolid`,
                          disabled: C,
                          children: (0, Q.jsx)(g, {
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
      (n[95] = fe),
      (n[96] = L),
      (n[97] = me),
      (n[98] = O),
      (n[99] = C),
      (n[100] = Y))
    : (Y = n[100]);
  let Me;
  return (
    n[101] !== q || n[102] !== je || n[103] !== J || n[104] !== Y
      ? ((Me = (0, Q.jsxs)(Q.Fragment, { children: [q, je, J, Y] })),
        (n[101] = q),
        (n[102] = je),
        (n[103] = J),
        (n[104] = Y),
        (n[105] = Me))
      : (Me = n[105]),
    Me
  );
}
function qn() {}
function Jn(e) {
  e.preventDefault();
}
function Yn(e) {
  let t = (0, Zn.c)(17),
    { annotating: n, compact: r, disabled: i, onToggle: a } = e,
    o = r !== void 0 && r,
    s = ee(),
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
    d = o ? void 0 : l,
    f;
  t[2] === n ? (f = t[3]) : ((f = (0, Q.jsx)(yn, { active: n })), (t[2] = n), (t[3] = f));
  let p;
  t[4] !== n || t[5] !== i || t[6] !== l || t[7] !== a || t[8] !== d || t[9] !== f
    ? ((p = (0, Q.jsx)(pn, {
        "aria-label": l,
        label: d,
        pressed: n,
        size: `default`,
        variant: `annotation`,
        disabled: i,
        onClick: a,
        children: f,
      })),
      (t[4] = n),
      (t[5] = i),
      (t[6] = l),
      (t[7] = a),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== u || t[12] !== p
    ? ((m = (0, Q.jsx)(De, { tooltipContent: u, delayOpen: !0, children: p })),
      (t[11] = u),
      (t[12] = p),
      (t[13] = m))
    : (m = t[13]);
  let h;
  return (
    t[14] !== l || t[15] !== m
      ? ((h = (0, Q.jsx)(se, { label: l, children: m })), (t[14] = l), (t[15] = m), (t[16] = h))
      : (h = t[16]),
    h
  );
}
function Xn(e) {
  let t = (0, Zn.c)(29),
    {
      compact: n,
      canGoBack: r,
      canGoForward: i,
      onBack: o,
      onForward: s,
      onRefresh: c,
      refreshDisabled: u,
      showNavigation: d,
    } = e,
    f = n !== void 0 && n,
    p = d === void 0 || d,
    m = ee(),
    h;
  t[0] === m
    ? (h = t[1])
    : ((h = m.formatMessage({
        id: `sites.preview.back`,
        defaultMessage: `Go back`,
        description: `Navigate back within the Site preview`,
      })),
      (t[0] = m),
      (t[1] = h));
  let _ = h,
    v;
  t[2] === m
    ? (v = t[3])
    : ((v = m.formatMessage({
        id: `sites.preview.forward`,
        defaultMessage: `Go forward`,
        description: `Navigate forward within the Site preview`,
      })),
      (t[2] = m),
      (t[3] = v));
  let y = v,
    x;
  t[4] === m
    ? (x = t[5])
    : ((x = m.formatMessage({
        id: `sites.preview.refresh`,
        defaultMessage: `Refresh preview`,
        description: `Button to reload the generated Site preview or retry after an error`,
      })),
      (t[4] = m),
      (t[5] = x));
  let S = x,
    C;
  t[6] === m
    ? (C = t[7])
    : ((C = m.formatMessage({
        id: `sites.preview.history`,
        defaultMessage: `Navigation history`,
        description: `Accessible label for a menu containing back and forward navigation options in a narrow Site preview header`,
      })),
      (t[6] = m),
      (t[7] = C));
  let w = C,
    T;
  t[8] === m
    ? (T = t[9])
    : ((T = m.formatMessage({
        id: `sites.preview.navigationControls`,
        defaultMessage: `Preview navigation`,
        description: `Accessible label for Site preview back, forward, and refresh controls`,
      })),
      (t[8] = m),
      (t[9] = T));
  let E;
  t[10] !== _ ||
  t[11] !== r ||
  t[12] !== i ||
  t[13] !== f ||
  t[14] !== y ||
  t[15] !== w ||
  t[16] !== o ||
  t[17] !== s ||
  t[18] !== p
    ? ((E =
        p &&
        (f
          ? (0, Q.jsxs)(a, {
              align: `start`,
              contentWidth: `menu`,
              triggerButton: (0, Q.jsx)(_e, { "aria-label": w, uniform: !0, children: (0, Q.jsx)(P, {}) }),
              children: [
                (0, Q.jsx)(M.Item, {
                  disabled: !r,
                  leftIcon: (0, Q.jsx)(V, {}),
                  onSelect: o,
                  children: (0, Q.jsx)(g, {
                    id: `sites.preview.history.back`,
                    defaultMessage: `Back`,
                    description: `Menu item that navigates backward within the Site preview history`,
                  }),
                }),
                (0, Q.jsx)(M.Item, {
                  disabled: !i,
                  leftIcon: (0, Q.jsx)(oe, {}),
                  onSelect: s,
                  children: (0, Q.jsx)(g, {
                    id: `sites.preview.history.forward`,
                    defaultMessage: `Forward`,
                    description: `Menu item that navigates forward within the Site preview history`,
                  }),
                }),
              ],
            })
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(_e, {
                  "aria-label": _,
                  uniform: !0,
                  disabled: !r,
                  onClick: o,
                  children: (0, Q.jsx)(V, {}),
                }),
                (0, Q.jsx)(_e, {
                  "aria-label": y,
                  uniform: !0,
                  disabled: !i,
                  onClick: s,
                  children: (0, Q.jsx)(oe, {}),
                }),
                (0, Q.jsx)(Te, {}),
              ],
            }))),
      (t[10] = _),
      (t[11] = r),
      (t[12] = i),
      (t[13] = f),
      (t[14] = y),
      (t[15] = w),
      (t[16] = o),
      (t[17] = s),
      (t[18] = p),
      (t[19] = E))
    : (E = t[19]);
  let D;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Q.jsx)(b, { asset: l })), (t[20] = D))
    : (D = t[20]);
  let O;
  t[21] !== c || t[22] !== S || t[23] !== u
    ? ((O = (0, Q.jsx)(_e, { "aria-label": S, uniform: !0, disabled: u, onClick: c, children: D })),
      (t[21] = c),
      (t[22] = S),
      (t[23] = u),
      (t[24] = O))
    : (O = t[24]);
  let k;
  return (
    t[25] !== O || t[26] !== T || t[27] !== E
      ? ((k = (0, Q.jsxs)(se, { variant: `window`, label: T, children: [E, O] })),
        (t[25] = O),
        (t[26] = T),
        (t[27] = E),
        (t[28] = k))
      : (k = t[28]),
    k
  );
}
var Zn, Z, Qn, Q, $n, er;
function tr() {
  return (tr = e(() => {
    ((Zn = K()),
      w(),
      fn(),
      E(),
      (Z = Me()),
      (Qn = Y()),
      de(),
      gn(),
      Ze(),
      Ut(),
      vn(),
      pt(),
      dn(),
      W(),
      G(),
      z(),
      r(),
      C(),
      A(),
      L(),
      Mt(),
      q(),
      an(),
      Re(),
      Wt(),
      be(),
      Jt(),
      o(),
      Be(),
      Rn(),
      Wn(),
      nn(),
      (Q = J()),
      ($n = Ce(
        Tt,
        (e) => !1,
        ({ conversationId: e, browserConversationId: t }, { get: n, set: r }) => {
          if (e == null || t == null || n(un, e) == null) return;
          let i = () => r(qe(t) ?? !1),
            a = ft(t, i);
          return (i(), a);
        },
      )),
      (er = ve(
        s,
        (e, { get: t }) =>
          e.conversationId == null
            ? []
            : t(Ct, e.conversationId).filter((t) => {
                let n = t.localArtifactAnnotationMetadata?.target;
                return n?.type === `site-element-selection` && n.projectId === e.projectId;
              }),
        { isEqual: (e, t) => e.length === t.length && e.every((e, n) => e === t[n]) },
      )));
  }))();
}
var nr;
function rr() {
  return (rr = e(() => {
    (E(),
      Ke(),
      St(),
      ln(),
      Pt(),
      Ht(),
      Re(),
      Kt(),
      Wt(),
      Zt(),
      ze(),
      (nr = I(
        Tt,
        (e, { scope: t, derived: n }) =>
          n((n, { scope: { get: r } }) => {
            if (t.value.routeKind === `local-thread` || t.value.routeKind === `client-local-thread`) {
              let n = r(Gt);
              if (n == null) return null;
              let i = r(en, { hostId: r(Yt), threadId: n });
              for (let n of i?.slice().reverse() ?? []) {
                r(jt, n);
                let i = wt(t, n);
                if (i != null)
                  for (let t of Ve(i.items).reverse()) {
                    if (t.type !== `mcpToolCall`) continue;
                    let a = r(Lt, { ...n, itemId: t.id });
                    if (a?.type !== `mcpToolCall`) continue;
                    let o = Nt([Ft(i, a)])[0];
                    if (o?.projectId === e && o.publishedRevision != null) return o.publishedRevision;
                  }
              }
              return null;
            }
            if (t.value.routeKind !== `chatgpt-thread`) return null;
            let i = t.value.conversationId,
              a = r(it, i);
            r(lt, i);
            let o = t.get(kt, i);
            if (a == null || o == null) return null;
            let s = Ie({ current_node: a, mapping: o });
            for (let t of s.reverse()) {
              if (t.author.role !== `tool`) continue;
              let n = Vt(t)?.item,
                r = n?.type === `mcp-tool-call` ? n : ot([t])[0];
              if (r?.type !== `mcp-tool-call`) continue;
              let i = Nt([r])[0];
              if (i?.projectId === e && i.publishedRevision != null) return i.publishedRevision;
            }
            return null;
          }),
        { autoDispose: 6e4 },
      )));
  }))();
}
function ir(e) {
  let t = (0, cr.c)(6),
    { resource: n, onClose: r, controlsRef: i, onNavigateToSite: a } = e,
    o = te(Ot),
    s = Pe(o ? null : nr, n.projectId) ?? n.publishedRevision ?? n.projectId,
    c;
  return (
    t[0] !== i || t[1] !== r || t[2] !== a || t[3] !== n || t[4] !== s
      ? ((c = (0, $.jsx)(ar, { resource: n, controlsRef: i, onClose: r, onNavigateToSite: a }, s)),
        (t[0] = i),
        (t[1] = r),
        (t[2] = a),
        (t[3] = n),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function ar(e) {
  let t = (0, cr.c)(25),
    { resource: n, onClose: r, controlsRef: i, onNavigateToSite: a } = e,
    o = ee(),
    s = c(`/sites/${encodeURIComponent(n.projectId)}/preview`),
    [l, u] = (0, lr.useState)(0),
    d = (0, lr.useRef)(null),
    f = i ?? d,
    p;
  t[0] === f.current
    ? (p = t[1])
    : ((p = (e) => {
        f.current?.confirmAction(e) !== !1 && e();
      }),
      (t[0] = f.current),
      (t[1] = p));
  let m = p,
    [h, g] = (0, lr.useState)(null),
    [_, v] = (0, lr.useState)(`loading`),
    y;
  t[2] !== o || t[3] !== n.title
    ? ((y =
        n.title ??
        o.formatMessage({
          id: `sites.preview.title`,
          defaultMessage: `Site preview`,
          description: `Accessible title of the generated Site preview iframe`,
        })),
      (t[2] = o),
      (t[3] = n.title),
      (t[4] = y))
    : (y = t[4]);
  let b = y,
    x;
  t[5] !== r || t[6] !== m ? ((x = () => m(r)), (t[5] = r), (t[6] = m), (t[7] = x)) : (x = t[7]);
  let S;
  t[8] === m
    ? (S = t[9])
    : ((S = () =>
        m(() => {
          (v(`loading`), u(or));
        })),
      (t[8] = m),
      (t[9] = S));
  let C, w;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => v(`error`)),
      (w = (e) => {
        v(e.currentTarget.contentDocument?.querySelector(`iframe`) == null ? `error` : `ready`);
      }),
      (t[10] = C),
      (t[11] = w))
    : ((C = t[10]), (w = t[11]));
  let T;
  t[12] !== s || t[13] !== b
    ? ((T = (0, $.jsx)(`iframe`, {
        ref: g,
        allow: `clipboard-write`,
        className: `min-h-0 w-full flex-1 border-0`,
        title: b,
        src: s,
        referrerPolicy: `no-referrer`,
        onError: C,
        onLoad: w,
      })),
      (t[12] = s),
      (t[13] = b),
      (t[14] = T))
    : (T = t[14]);
  let E;
  return (
    t[15] !== f ||
    t[16] !== a ||
    t[17] !== l ||
    t[18] !== n ||
    t[19] !== _ ||
    t[20] !== x ||
    t[21] !== S ||
    t[22] !== T ||
    t[23] !== h
      ? ((E = (0, $.jsx)(
          sr,
          {
            controlsRef: f,
            wrapper: h,
            resource: n,
            status: _,
            onClose: x,
            onNavigateToSite: a,
            onRefresh: S,
            children: T,
          },
          l,
        )),
        (t[15] = f),
        (t[16] = a),
        (t[17] = l),
        (t[18] = n),
        (t[19] = _),
        (t[20] = x),
        (t[21] = S),
        (t[22] = T),
        (t[23] = h),
        (t[24] = E))
      : (E = t[24]),
    E
  );
}
function or(e) {
  return e + 1;
}
function sr(e) {
  let t = (0, cr.c)(154),
    {
      annotationControl: n,
      controlsRef: r,
      wrapper: o,
      children: s,
      resource: l,
      status: u,
      onRefresh: f,
      onClose: b,
      onNavigateToSite: S,
    } = e,
    C = o === void 0 ? null : o,
    w = _(Tt),
    E = ee(),
    D;
  t[0] === l.projectId ? (D = t[1]) : ((D = qt(l.projectId)), (t[0] = l.projectId), (t[1] = D));
  let O = c(D),
    k;
  t[2] === l.projectId ? (k = t[3]) : ((k = ht(l.projectId)), (t[2] = l.projectId), (t[3] = k));
  let A = c(k),
    [j, te] = (0, lr.useState)(!1),
    P;
  t[4] === j
    ? (P = t[5])
    : ((P = (e) => {
        let t = N(e).width <= 720;
        t !== j && te(t);
      }),
      (t[4] = j),
      (t[5] = P));
  let F = p(P),
    [re, ie] = h(),
    [oe, ce] = h(),
    I = Math.max(ie ?? 0, ce ?? 0),
    { data: L } = Pe(Xt, l.projectId),
    R;
  t[6] === L ? (R = t[7]) : ((R = Qe(L)), (t[6] = L), (t[7] = R));
  let z = R,
    le;
  t[8] === L ? (le = t[9]) : ((le = nt(L)), (t[8] = L), (t[9] = le));
  let B = le,
    ue = z || L?.current_user_role === `editor`,
    de = Rt(`262557526`),
    me = Rt(`3051515858`),
    he,
    ge,
    ve,
    V,
    H,
    ye,
    be,
    xe,
    U,
    Ce,
    we,
    Te,
    Ee,
    W,
    G,
    K,
    ke,
    Ae,
    q,
    J;
  if (
    t[10] !== de ||
    t[11] !== O ||
    t[12] !== n ||
    t[13] !== me ||
    t[14] !== ue ||
    t[15] !== z ||
    t[16] !== B ||
    t[17] !== j ||
    t[18] !== r ||
    t[19] !== E ||
    t[20] !== re ||
    t[21] !== S ||
    t[22] !== f ||
    t[23] !== F ||
    t[24] !== L?.current_live_url ||
    t[25] !== L?.title ||
    t[26] !== l ||
    t[27] !== w ||
    t[28] !== A ||
    t[29] !== I ||
    t[30] !== u ||
    t[31] !== C
  ) {
    let e = bt(l, L?.current_live_url),
      i = l.title ?? new URL(e.url).hostname,
      o;
    t[52] === E
      ? (o = t[53])
      : ((o = E.formatMessage({
          id: `sites.preview.visit`,
          defaultMessage: `Open site in browser`,
          description: `Tooltip and accessible label for the title bar button that opens the published Site in a new browser tab`,
        })),
        (t[52] = E),
        (t[53] = o));
    let s = o,
      c;
    (t[54] === E
      ? (c = t[55])
      : ((c = E.formatMessage({
          id: `sites.preview.moreActions`,
          defaultMessage: `More site actions`,
          description: `Accessible label for the Site preview menu containing sharing, settings, and analytics actions`,
        })),
        (t[54] = E),
        (t[55] = c)),
      (V = c));
    let d;
    (t[56] === E
      ? (d = t[57])
      : ((d = E.formatMessage({
          id: `sites.preview.close`,
          defaultMessage: `Close site preview`,
          description: `Accessible label for the close button in the Site preview header. Closes the preview panel, not the website itself.`,
        })),
        (t[56] = E),
        (t[57] = d)),
      (he = d));
    let p;
    (t[58] === E
      ? (p = t[59])
      : ((p = E.formatMessage({
          id: `sites.preview.share.label`,
          defaultMessage: `Share`,
          description: `Short label for the Share button in the Site preview header and its narrow-view menu item. Opens sharing controls for the current website.`,
        })),
        (t[58] = E),
        (t[59] = p)),
      (H = p));
    let h;
    (t[60] !== L?.title || t[61] !== l.projectId || t[62] !== l.title || t[63] !== w
      ? ((h = () => {
          (rt(w, y, { action: x.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_SITES_SHARE_CLICKED }),
            mn(w, l.projectId, {
              initialProjectTitle: l.title ?? L?.title,
              source: ne.CODEX_SITES_SHARING_SOURCE_IN_APP_BROWSER,
            }));
        }),
        (t[60] = L?.title),
        (t[61] = l.projectId),
        (t[62] = l.title),
        (t[63] = w),
        (t[64] = h))
      : (h = t[64]),
      (ge = h));
    let _;
    (t[65] !== de ||
    t[66] !== O ||
    t[67] !== z ||
    t[68] !== B ||
    t[69] !== j ||
    t[70] !== ge ||
    t[71] !== V ||
    t[72] !== S ||
    t[73] !== l.projectId ||
    t[74] !== w ||
    t[75] !== A ||
    t[76] !== H
      ? ((_ =
          z || (j && B)
            ? (0, $.jsxs)(a, {
                align: `end`,
                contentWidth: `menu`,
                triggerButton: (0, $.jsx)(pn, {
                  "aria-label": V,
                  size: `default`,
                  children: (0, $.jsx)(fe, {}),
                }),
                children: [
                  j && B
                    ? (0, $.jsx)(M.Item, { leftIcon: (0, $.jsx)(je, {}), onSelect: ge, children: H })
                    : null,
                  z && de
                    ? (0, $.jsx)(M.Item, {
                        asChild: !0,
                        leftIconAsset: Se,
                        onSelect: () => {
                          (We(w, {
                            action: T.CODEX_APPGEN_INTERACTION_ACTION_ANALYTICS_OPENED,
                            projectId: l.projectId,
                            source:
                              S == null
                                ? m.CODEX_APPGEN_INTERACTION_SOURCE_RESPONSE_CARD
                                : m.CODEX_APPGEN_INTERACTION_SOURCE_SITES,
                          }),
                            S?.(qt(l.projectId)));
                        },
                        children: (0, $.jsx)(`a`, {
                          href: S == null ? O : void 0,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          children: (0, $.jsx)(g, {
                            id: `appgenPage.analytics.label`,
                            defaultMessage: `Analytics`,
                            description: `Menu item for opening site analytics`,
                          }),
                        }),
                      })
                    : null,
                  z
                    ? (0, $.jsx)(M.Item, {
                        asChild: !0,
                        leftIconAsset: v,
                        onSelect: () => {
                          (rt(w, y, {
                            action: x.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_SITES_SETTINGS_CLICKED,
                          }),
                            S?.(ht(l.projectId)));
                        },
                        children: (0, $.jsx)(`a`, {
                          href: S == null ? A : void 0,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          children: (0, $.jsx)(g, {
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
        (t[65] = de),
        (t[66] = O),
        (t[67] = z),
        (t[68] = B),
        (t[69] = j),
        (t[70] = ge),
        (t[71] = V),
        (t[72] = S),
        (t[73] = l.projectId),
        (t[74] = w),
        (t[75] = A),
        (t[76] = H),
        (t[77] = _))
      : (_ = t[77]),
      (ve = _),
      (K = F),
      (ke = `@container/site-preview flex h-full min-h-0 flex-col bg-surface`),
      (Ee = `grid min-h-toolbar shrink-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-toolbar py-2 draggable @max-[560px]/site-preview:gap-1 @max-[560px]/site-preview:px-2`),
      t[78] === I
        ? (W = t[79])
        : ((W = I ? { gridTemplateColumns: `${I}px minmax(0, 1fr) ${I}px` } : void 0),
          (t[78] = I),
          (t[79] = W)));
    let b;
    (t[80] !== n ||
    t[81] !== me ||
    t[82] !== ue ||
    t[83] !== j ||
    t[84] !== r ||
    t[85] !== f ||
    t[86] !== l ||
    t[87] !== u ||
    t[88] !== C
      ? ((b = me
          ? (n?.(j) ??
            (0, $.jsx)(Gn, {
              controlsRef: r,
              compact: j,
              resource: l,
              wrapper: C,
              canAnnotate: ue,
              onRefresh: f,
              refreshDisabled: u === `loading`,
            }))
          : (0, $.jsx)(Xn, {
              compact: j,
              showNavigation: !1,
              canGoBack: !1,
              canGoForward: !1,
              onRefresh: f,
              refreshDisabled: u === `loading`,
            })),
        (t[80] = n),
        (t[81] = me),
        (t[82] = ue),
        (t[83] = j),
        (t[84] = r),
        (t[85] = f),
        (t[86] = l),
        (t[87] = u),
        (t[88] = C),
        (t[89] = b))
      : (b = t[89]),
      t[90] !== re || t[91] !== b
        ? ((G = (0, $.jsx)(`div`, { ref: re, className: `flex w-max items-center gap-1.5`, children: b })),
          (t[90] = re),
          (t[91] = b),
          (t[92] = G))
        : (G = t[92]),
      (we = `flex max-w-full min-w-0 flex-col items-center justify-self-center text-center`),
      (Te = (0, $.jsx)(`span`, { className: `w-full truncate text-sm font-medium`, children: i })),
      (J = s),
      (ye = e.url),
      (be = `_blank`),
      (xe = `noopener noreferrer`),
      (U = `group/site-url inline-flex max-w-full min-w-0 items-center gap-1 rounded-sm text-xs text-secondary no-drag`),
      (Ce = (t) => {
        (rt(w, pe, {}),
          rt(w, y, { action: x.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_OPENED_IN_EXTERNAL_BROWSER }),
          dt({ event: t, href: e.url, initiator: `mcp_app_resource`, openTarget: `external-browser` }));
      }),
      (Ae = `min-w-0 truncate pb-0.5 leading-5 underline-offset-2 group-hover/site-url:underline group-focus-visible/site-url:underline`),
      (q = Dt(e.url)),
      (t[10] = de),
      (t[11] = O),
      (t[12] = n),
      (t[13] = me),
      (t[14] = ue),
      (t[15] = z),
      (t[16] = B),
      (t[17] = j),
      (t[18] = r),
      (t[19] = E),
      (t[20] = re),
      (t[21] = S),
      (t[22] = f),
      (t[23] = F),
      (t[24] = L?.current_live_url),
      (t[25] = L?.title),
      (t[26] = l),
      (t[27] = w),
      (t[28] = A),
      (t[29] = I),
      (t[30] = u),
      (t[31] = C),
      (t[32] = he),
      (t[33] = ge),
      (t[34] = ve),
      (t[35] = V),
      (t[36] = H),
      (t[37] = ye),
      (t[38] = be),
      (t[39] = xe),
      (t[40] = U),
      (t[41] = Ce),
      (t[42] = we),
      (t[43] = Te),
      (t[44] = Ee),
      (t[45] = W),
      (t[46] = G),
      (t[47] = K),
      (t[48] = ke),
      (t[49] = Ae),
      (t[50] = q),
      (t[51] = J));
  } else
    ((he = t[32]),
      (ge = t[33]),
      (ve = t[34]),
      (V = t[35]),
      (H = t[36]),
      (ye = t[37]),
      (be = t[38]),
      (xe = t[39]),
      (U = t[40]),
      (Ce = t[41]),
      (we = t[42]),
      (Te = t[43]),
      (Ee = t[44]),
      (W = t[45]),
      (G = t[46]),
      (K = t[47]),
      (ke = t[48]),
      (Ae = t[49]),
      (q = t[50]),
      (J = t[51]));
  let Y;
  t[93] !== Ae || t[94] !== q
    ? ((Y = (0, $.jsx)(`span`, { className: Ae, children: q })), (t[93] = Ae), (t[94] = q), (t[95] = Y))
    : (Y = t[95]);
  let Me;
  t[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = (0, $.jsx)(Oe, { className: `size-3.5` })), (t[96] = Me))
    : (Me = t[96]);
  let Ne;
  t[97] !== ye ||
  t[98] !== be ||
  t[99] !== xe ||
  t[100] !== U ||
  t[101] !== Ce ||
  t[102] !== Y ||
  t[103] !== J
    ? ((Ne = (0, $.jsxs)(`a`, {
        "aria-label": J,
        href: ye,
        target: be,
        rel: xe,
        className: U,
        onClick: Ce,
        children: [Y, Me],
      })),
      (t[97] = ye),
      (t[98] = be),
      (t[99] = xe),
      (t[100] = U),
      (t[101] = Ce),
      (t[102] = Y),
      (t[103] = J),
      (t[104] = Ne))
    : (Ne = t[104]);
  let Fe;
  t[105] !== we || t[106] !== Te || t[107] !== Ne
    ? ((Fe = (0, $.jsxs)(`div`, { className: we, children: [Te, Ne] })),
      (t[105] = we),
      (t[106] = Te),
      (t[107] = Ne),
      (t[108] = Fe))
    : (Fe = t[108]);
  let Ie;
  t[109] !== B || t[110] !== j || t[111] !== ge || t[112] !== H
    ? ((Ie =
        B && !j
          ? (0, $.jsx)(se, {
              label: H,
              children: (0, $.jsxs)(_e, {
                "aria-label": H,
                onClick: ge,
                children: [(0, $.jsx)(d, { icon: { 16: ae, 20: je } }), (0, $.jsx)(`span`, { children: H })],
              }),
            })
          : null),
      (t[109] = B),
      (t[110] = j),
      (t[111] = ge),
      (t[112] = H),
      (t[113] = Ie))
    : (Ie = t[113]);
  let Le;
  t[114] !== ve || t[115] !== V
    ? ((Le = ve && (0, $.jsx)(se, { label: V, children: ve })), (t[114] = ve), (t[115] = V), (t[116] = Le))
    : (Le = t[116]);
  let Re;
  t[117] === E
    ? (Re = t[118])
    : ((Re = E.formatMessage({
        id: `sites.preview.windowControls`,
        defaultMessage: `Preview controls`,
        description: `Accessible label for the group of buttons that expand or close the Site preview panel.`,
      })),
      (t[117] = E),
      (t[118] = Re));
  let ze;
  t[119] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = (0, $.jsx)(st, { appearance: `viewer` })), (t[119] = ze))
    : (ze = t[119]);
  let Be;
  t[120] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (0, $.jsx)(i, {})), (t[120] = Be))
    : (Be = t[120]);
  let Ve;
  t[121] !== he || t[122] !== b
    ? ((Ve = (0, $.jsx)(_e, { "aria-label": he, uniform: !0, onClick: b, children: Be })),
      (t[121] = he),
      (t[122] = b),
      (t[123] = Ve))
    : (Ve = t[123]);
  let He;
  t[124] !== he || t[125] !== Ve
    ? ((He = (0, $.jsx)(De, { tooltipContent: he, delayOpen: !0, children: Ve })),
      (t[124] = he),
      (t[125] = Ve),
      (t[126] = He))
    : (He = t[126]);
  let Ue;
  t[127] !== Re || t[128] !== He
    ? ((Ue = (0, $.jsxs)(se, { variant: `window`, label: Re, children: [ze, He] })),
      (t[127] = Re),
      (t[128] = He),
      (t[129] = Ue))
    : (Ue = t[129]);
  let Ge;
  t[130] !== oe || t[131] !== Ie || t[132] !== Le || t[133] !== Ue
    ? ((Ge = (0, $.jsxs)(`div`, {
        ref: oe,
        className: `flex w-max items-center gap-1.5 justify-self-end`,
        children: [Ie, Le, Ue],
      })),
      (t[130] = oe),
      (t[131] = Ie),
      (t[132] = Le),
      (t[133] = Ue),
      (t[134] = Ge))
    : (Ge = t[134]);
  let Ke;
  t[135] !== Ee || t[136] !== W || t[137] !== G || t[138] !== Fe || t[139] !== Ge
    ? ((Ke = (0, $.jsxs)(`header`, { className: Ee, style: W, children: [G, Fe, Ge] })),
      (t[135] = Ee),
      (t[136] = W),
      (t[137] = G),
      (t[138] = Fe),
      (t[139] = Ge),
      (t[140] = Ke))
    : (Ke = t[140]);
  let X;
  t[141] === u
    ? (X = t[142])
    : ((X =
        u === `loading`
          ? (0, $.jsxs)(`div`, {
              className: `absolute inset-0 z-10 bg-surface`,
              role: `status`,
              children: [
                (0, $.jsx)(on, { debugName: `SitePreview`, fillParent: !0 }),
                (0, $.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, $.jsx)(g, {
                    id: `sites.preview.loading`,
                    defaultMessage: `Loading preview…`,
                    description: `Status announced to assistive technology while the hosted website opens or reloads in the Site preview. No placeholders.`,
                  }),
                }),
              ],
            })
          : null),
      (t[141] = u),
      (t[142] = X));
  let qe;
  t[143] === u
    ? (qe = t[144])
    : ((qe =
        u === `error`
          ? (0, $.jsx)(`div`, {
              className: `absolute inset-0 z-10 bg-surface`,
              role: `alert`,
              children: (0, $.jsx)(It, {
                className: `h-full`,
                children: (0, $.jsx)(`p`, {
                  className: `max-w-md text-balance`,
                  children: (0, $.jsx)(g, {
                    id: `sites.preview.error`,
                    defaultMessage: `Couldn’t load the site preview. Refresh to try again, or open the site in a new tab.`,
                    description: `Error shown when the Site preview cannot be loaded`,
                  }),
                }),
              }),
            })
          : null),
      (t[143] = u),
      (t[144] = qe));
  let Je;
  t[145] !== s || t[146] !== X || t[147] !== qe
    ? ((Je = (0, $.jsxs)(`div`, {
        className: `relative flex min-h-0 flex-1 flex-col`,
        children: [X, qe, s],
      })),
      (t[145] = s),
      (t[146] = X),
      (t[147] = qe),
      (t[148] = Je))
    : (Je = t[148]);
  let Ye;
  return (
    t[149] !== K || t[150] !== ke || t[151] !== Ke || t[152] !== Je
      ? ((Ye = (0, $.jsxs)(`div`, { ref: K, className: ke, children: [Ke, Je] })),
        (t[149] = K),
        (t[150] = ke),
        (t[151] = Ke),
        (t[152] = Je),
        (t[153] = Ye))
      : (Ye = t[153]),
    Ye
  );
}
var cr, lr, $;
function ur() {
  return (ur = e(() => {
    ((cr = K()),
      k(),
      B(),
      O(),
      fn(),
      E(),
      (lr = Me()),
      de(),
      ie(),
      He(),
      r(),
      Ge(),
      A(),
      Et(),
      me(),
      L(),
      gt(),
      ut(),
      S(),
      Re(),
      xt(),
      o(),
      tr(),
      Be(),
      Zt(),
      cn(),
      vt(),
      Bt(),
      hn(),
      Fe(),
      rr(),
      ($ = J()));
  }))();
}
ur();
export { ir as SitePreview };
//# sourceMappingURL=site-preview-b3f7240c9856.js.map
