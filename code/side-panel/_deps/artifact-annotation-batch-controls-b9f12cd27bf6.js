import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  AQ as i,
  Amn as a,
  B6t as o,
  BYt as s,
  Cpn as c,
  D3t as l,
  FPt as u,
  FQ as d,
  KIt as f,
  MMt as p,
  MPt as m,
  MQ as h,
  N3t as g,
  NQ as _,
  O3t as v,
  OY as y,
  Odt as b,
  Opn as ee,
  PQ as x,
  Spn as S,
  UZ as C,
  VYt as w,
  WZ as T,
  Xdt as E,
  aG as D,
  bRt as te,
  bmn as O,
  d3t as k,
  dQ as ne,
  dit as A,
  eQ as re,
  fTt as ie,
  fit as j,
  gEt as M,
  gRt as ae,
  hmn as oe,
  iQ as N,
  jMt as P,
  jXt as F,
  kMt as I,
  kQ as se,
  kXt as L,
  kY as R,
  kmn as z,
  lG as B,
  mlt as V,
  nQ as ce,
  oQ as le,
  qIt as H,
  rQ as ue,
  rTt as U,
  s3t as W,
  sG as G,
  sQ as de,
  snn as fe,
  tQ as pe,
  uG as me,
  uQ as K,
  xEt as q,
  xRt as J,
  xmn as he,
  yEt as Y,
} from "./app-initial-f094ef01c64d.js";
import { Cy as X, Sy as ge, Tw as _e, ww as ve } from "./app-primary-4c40d73a1074.js";
function ye(e) {
  let t = (0, Se.c)(10),
    { batchKey: n, onCancel: r, onNavigate: i, onSend: a } = e,
    o = g(ue, n),
    s = g(N, n),
    c = g(le, n),
    l = o.size === 0 && s.size > 0,
    u;
  t[0] !== n || t[1] !== c
    ? ((u = c == null ? void 0 : { hostId: n.hostId, turn: c }), (t[0] = n), (t[1] = c), (t[2] = u))
    : (u = t[2]);
  let d;
  return (
    t[3] !== r || t[4] !== i || t[5] !== a || t[6] !== o.size || t[7] !== l || t[8] !== u
      ? ((d = (0, Z.jsx)(be, {
          count: o.size,
          kind: `comment`,
          working: l,
          stopTurn: u,
          onCancel: r,
          onNavigate: i,
          onSend: a,
        })),
        (t[3] = r),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o.size),
        (t[7] = l),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
function be(e) {
  let t = (0, Se.c)(19),
    { count: n, kind: r, working: i, onCancel: a, onNavigate: o, onSend: s, stopTurn: l } = e,
    u = i !== void 0 && i,
    d = ee();
  if (!u && n === 0) return null;
  let f = `artifact-${r}-review-bar`,
    p;
  t[0] === d
    ? (p = t[1])
    : ((p = d.formatMessage({
        id: `artifactReviewBar.label`,
        defaultMessage: `Artifact review`,
        description: `Review and send artifact annotations or comments`,
      })),
      (t[0] = d),
      (t[1] = p));
  let m;
  t[2] !== l || t[3] !== u
    ? ((m =
        u &&
        (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsxs)(`span`, {
              className: `flex items-center gap-2 px-2`,
              role: `status`,
              children: [
                (0, Z.jsx)(P, { className: `size-3.5` }),
                (0, Z.jsx)(c, {
                  id: `artifactAnnotationBatch.working`,
                  defaultMessage: `Working`,
                  description: `Artifact annotation batch status while Codex is processing the saved annotations`,
                }),
              ],
            }),
            l != null && (0, Z.jsx)(xe, { ...l }),
          ],
        })),
      (t[2] = l),
      (t[3] = u),
      (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] !== n || t[6] !== d || t[7] !== r || t[8] !== a || t[9] !== o || t[10] !== s || t[11] !== u
    ? ((h =
        !u &&
        (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsxs)(`span`, {
              className: `min-w-0 truncate px-2 tabular-nums`,
              children: [
                r === `annotation` &&
                  (0, Z.jsx)(c, {
                    id: `artifactAnnotationBatch.annotationCount`,
                    defaultMessage: `{count, plural, one {# annotation} other {# annotations}}`,
                    description: `Number of distinct artifact annotations saved in the current unsent batch`,
                    values: { count: n },
                  }),
                r === `comment` &&
                  (0, Z.jsx)(c, {
                    id: `artifactReviewBar.commentCount`,
                    defaultMessage: `{count, plural, one {# comment} other {# comments}}`,
                    description: `Number of artifact comment threads queued for ChatGPT in the bottom review bar`,
                    values: { count: n },
                  }),
              ],
            }),
            n > 1 &&
              o != null &&
              (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-1`,
                children: [
                  (0, Z.jsx)(I, {
                    "aria-label": d.formatMessage({
                      id: `artifactReviewBar.previous`,
                      defaultMessage: `Previous request`,
                      description: `Navigate to the previous queued annotation or comment on the artifact`,
                    }),
                    color: `tinted`,
                    size: `composerSm`,
                    onClick: () => o(-1),
                    children: (0, Z.jsx)(V, { className: `rotate-180` }),
                  }),
                  (0, Z.jsx)(I, {
                    "aria-label": d.formatMessage({
                      id: `artifactReviewBar.next`,
                      defaultMessage: `Next request`,
                      description: `Navigate to the next queued annotation or comment on the artifact`,
                    }),
                    color: `tinted`,
                    size: `composerSm`,
                    onClick: () => o(1),
                    children: (0, Z.jsx)(V, {}),
                  }),
                ],
              }),
            (0, Z.jsx)(`span`, {
              "aria-hidden": !0,
              className: `h-4 w-px shrink-0 bg-media-foreground/20`,
            }),
            (0, Z.jsx)(I, {
              color: `mediaOverlay`,
              size: `compact`,
              onClick: a,
              children: (0, Z.jsx)(c, {
                id: `artifactReviewBar.cancel`,
                defaultMessage: `Cancel`,
                description: `Cancel the queued artifact requests without sending them to ChatGPT`,
              }),
            }),
            (0, Z.jsx)(I, {
              color: `accent`,
              size: `compact`,
              onClick: s,
              children: (0, Z.jsx)(c, {
                id: `artifactAnnotationBatch.send`,
                defaultMessage: `Send`,
                description: `Action to submit all saved artifact annotations together in the existing conversation`,
              }),
            }),
          ],
        })),
      (t[5] = n),
      (t[6] = d),
      (t[7] = r),
      (t[8] = a),
      (t[9] = o),
      (t[10] = s),
      (t[11] = u),
      (t[12] = h))
    : (h = t[12]);
  let g;
  return (
    t[13] !== r || t[14] !== f || t[15] !== p || t[16] !== m || t[17] !== h
      ? ((g = (0, Z.jsxs)(`div`, {
          className: `pointer-events-auto flex min-h-9 max-w-full items-center gap-2 rounded-xl bg-media-background p-1.5 text-sm font-medium text-media-foreground shadow-md ring-1 ring-media-foreground/10 select-none`,
          "data-artifact-review-bar": r,
          "data-testid": f,
          role: `toolbar`,
          "aria-label": p,
          children: [m, h],
        })),
        (t[13] = r),
        (t[14] = f),
        (t[15] = p),
        (t[16] = m),
        (t[17] = h),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
function xe(e) {
  let t = (0, Se.c)(25),
    { hostId: r, turn: i } = e,
    a = n(ae),
    o = ee(),
    s;
  t[0] !== r || t[1] !== i.threadId
    ? ((s = i.threadId == null ? null : { hostId: r, threadId: i.threadId }),
      (t[0] = r),
      (t[1] = i.threadId),
      (t[2] = s))
    : (s = t[2]);
  let c = s,
    l = g(M, c),
    u;
  t[3] === l ? (u = t[4]) : ((u = l?.at(-1) ?? null), (t[3] = l), (t[4] = u));
  let d = u,
    f = g(Y, d),
    p = g(q, d),
    m;
  t[5] !== r || t[6] !== a || t[7] !== c || t[8] !== i.turnId
    ? ((m = async () => {
        if (c == null) return;
        let e = a.get(M, c)?.at(-1) ?? null;
        a.get(Y, e) !== i.turnId ||
          a.get(q, e) !== `inProgress` ||
          (await R(a, { conversationId: c.threadId, hostId: r, initiatedBy: `user` }));
      }),
      (t[5] = r),
      (t[6] = a),
      (t[7] = c),
      (t[8] = i.turnId),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] !== o || t[11] !== a
    ? ((h = () => {
        a.get(F).danger(
          o.formatMessage({
            id: `artifactReviewBar.stopFailed`,
            defaultMessage: `Could not stop this turn`,
            description: `Error shown when stopping the conversation turn for an artifact review fails`,
          }),
        );
      }),
      (t[10] = o),
      (t[11] = a),
      (t[12] = h))
    : (h = t[12]);
  let _;
  t[13] !== m || t[14] !== h
    ? ((_ = { mutationFn: m, onError: h }), (t[13] = m), (t[14] = h), (t[15] = _))
    : (_ = t[15]);
  let { mutate: v, isPending: y } = k(_);
  if (i.turnId == null || f !== i.turnId || p !== `inProgress`) return null;
  let x;
  t[16] === o
    ? (x = t[17])
    : ((x = o.formatMessage({
        id: `artifactReviewBar.stop`,
        defaultMessage: `Stop`,
        description: `Stop the conversation turn processing these artifact annotations`,
      })),
      (t[16] = o),
      (t[17] = x));
  let S;
  t[18] === v ? (S = t[19]) : ((S = () => v()), (t[18] = v), (t[19] = S));
  let C;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(b, {})), (t[20] = C))
    : (C = t[20]);
  let w;
  return (
    t[21] !== y || t[22] !== x || t[23] !== S
      ? ((w = (0, Z.jsx)(I, {
          "aria-label": x,
          color: `tinted`,
          size: `composerSm`,
          disabled: y,
          onClick: S,
          children: C,
        })),
        (t[21] = y),
        (t[22] = x),
        (t[23] = S),
        (t[24] = w))
      : (w = t[24]),
    w
  );
}
var Se,
  Z,
  Ce = e(() => {
    ((Se = z()), W(), v(), S(), y(), U(), r(), E(), p(), L(), J(), K(), (Z = oe()));
  });
function we(e) {
  let t = (0, Oe.c)(36),
    {
      annotationCount: n,
      phase: r,
      previewContent: i,
      previewOpen: a,
      stopTurn: o,
      onCancel: s,
      onDismissLatestChanges: l,
      onNavigate: u,
      onSeeLatestChanges: d,
      onSend: f,
    } = e,
    p = ee();
  if (u != null && r !== `latest`) {
    let e = r === `working`,
      i;
    return (
      t[0] !== n || t[1] !== s || t[2] !== u || t[3] !== f || t[4] !== o || t[5] !== e
        ? ((i = (0, $.jsx)(be, {
            count: n,
            kind: `annotation`,
            working: e,
            stopTurn: o,
            onNavigate: u,
            onCancel: s,
            onSend: f,
          })),
          (t[0] = n),
          (t[1] = s),
          (t[2] = u),
          (t[3] = f),
          (t[4] = o),
          (t[5] = e),
          (t[6] = i))
        : (i = t[6]),
      i
    );
  }
  if (r === `working`) {
    let e;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsxs)(`div`, {
            className: `pointer-events-auto flex h-7 items-center gap-1.5 rounded-full bg-surface-elevated-secondary px-3 text-xs font-medium text-default shadow-md ring-1 ring-border select-none`,
            "data-testid": `artifact-annotation-batch-working`,
            role: `status`,
            children: [
              (0, $.jsx)(P, { className: `size-3.5` }),
              (0, $.jsx)(c, {
                id: `artifactAnnotationBatch.working`,
                defaultMessage: `Working`,
                description: `Artifact annotation batch status while Codex is processing the saved annotations`,
              }),
            ],
          })),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  if (r === `latest`) {
    let e, n;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(ve, { className: `size-3.5` })),
        (n = (0, $.jsx)(c, {
          id: `artifactAnnotationBatch.seeLatestChanges`,
          defaultMessage: `See latest changes`,
          description: `Artifact preview action shown when the file has changed after submitting a batch of annotations`,
        })),
        (t[8] = e),
        (t[9] = n))
      : ((e = t[8]), (n = t[9]));
    let r;
    t[10] === d
      ? (r = t[11])
      : ((r = (0, $.jsxs)(`button`, {
          type: `button`,
          className: `flex h-full cursor-interaction items-center gap-1.5 px-2`,
          onClick: d,
          children: [e, n],
        })),
        (t[10] = d),
        (t[11] = r));
    let i;
    t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(`div`, { className: `h-full w-px bg-white/20` })), (t[12] = i))
      : (i = t[12]);
    let a;
    t[13] === p
      ? (a = t[14])
      : ((a = p.formatMessage({
          id: `artifactAnnotationBatch.dismissLatestChanges`,
          defaultMessage: `Dismiss latest changes`,
          description: `Accessible label for dismissing the completed artifact annotation batch action`,
        })),
        (t[13] = p),
        (t[14] = a));
    let o;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, $.jsx)(A, { className: `size-3.5` })), (t[15] = o))
      : (o = t[15]);
    let s;
    t[16] !== l || t[17] !== a
      ? ((s = (0, $.jsx)(`button`, {
          type: `button`,
          "aria-label": a,
          className: `flex h-full w-6 cursor-interaction items-center justify-center`,
          onClick: l,
          children: o,
        })),
        (t[16] = l),
        (t[17] = a),
        (t[18] = s))
      : (s = t[18]);
    let u;
    return (
      t[19] !== r || t[20] !== s
        ? ((u = (0, $.jsxs)(`div`, {
            className: `pointer-events-auto flex h-7 items-center overflow-hidden rounded-full bg-chart-blue text-xs font-medium text-white shadow-md select-none`,
            "data-testid": `artifact-annotation-batch-latest`,
            children: [r, i, s],
          })),
          (t[19] = r),
          (t[20] = s),
          (t[21] = u))
        : (u = t[21]),
      u
    );
  }
  if (n === 0) return null;
  let m;
  t[22] !== n || t[23] !== i || t[24] !== a
    ? ((m = (0, $.jsx)(Te, { annotationCount: n, previewContent: i, previewOpen: a })),
      (t[22] = n),
      (t[23] = i),
      (t[24] = a),
      (t[25] = m))
    : (m = t[25]);
  let h;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(c, {
        id: `artifactAnnotationBatch.cancel`,
        defaultMessage: `Cancel`,
        description: `Action to discard the current batch of saved artifact annotations`,
      })),
      (t[26] = h))
    : (h = t[26]);
  let g;
  t[27] === s
    ? (g = t[28])
    : ((g = (0, $.jsx)(I, { color: `ghost`, size: `compact`, onClick: s, children: h })),
      (t[27] = s),
      (t[28] = g));
  let _;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, $.jsx)(c, {
        id: `artifactAnnotationBatch.send`,
        defaultMessage: `Send`,
        description: `Action to submit all saved artifact annotations together in the existing conversation`,
      })),
      (t[29] = _))
    : (_ = t[29]);
  let v;
  t[30] === f
    ? (v = t[31])
    : ((v = (0, $.jsx)(I, { color: `accent`, size: `compact`, onClick: f, children: _ })),
      (t[30] = f),
      (t[31] = v));
  let y;
  return (
    t[32] !== m || t[33] !== g || t[34] !== v
      ? ((y = (0, $.jsxs)(`div`, {
          className: `pointer-events-auto flex h-8 items-center gap-1 rounded-full bg-surface-elevated-secondary p-1 text-xs font-medium text-default shadow-md ring-1 ring-border select-none`,
          "data-testid": `artifact-annotation-batch-controls`,
          children: [m, g, v],
        })),
        (t[32] = m),
        (t[33] = g),
        (t[34] = v),
        (t[35] = y))
      : (y = t[35]),
    y
  );
}
function Te(e) {
  let t = (0, Oe.c)(29),
    { annotationCount: n, previewContent: r, previewOpen: i } = e,
    a = ee(),
    [o, s] = (0, Q.useState)(!1),
    l = (0, Q.useRef)(null),
    u = (0, Q.useRef)(null),
    d = (0, Q.useRef)(!1),
    f,
    p;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = () => () => {
        u.current != null && window.clearTimeout(u.current);
      }),
      (p = []),
      (t[0] = f),
      (t[1] = p))
    : ((f = t[0]), (p = t[1])),
    (0, Q.useEffect)(f, p));
  let m;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => {
        u.current != null && (window.clearTimeout(u.current), (u.current = null));
      }),
      (t[2] = m))
    : (m = t[2]);
  let h = m,
    g;
  t[3] === r
    ? (g = t[4])
    : ((g = () => {
        (h(), r != null && s(!0));
      }),
      (t[3] = r),
      (t[4] = g));
  let _ = g,
    v;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => {
        (h(),
          (u.current = window.setTimeout(() => {
            ((u.current = null), l.current?.contains(document.activeElement) || s(!1));
          }, ke)));
      }),
      (t[5] = v))
    : (v = t[5]);
  let y = v,
    b = r != null && (i ?? o),
    x;
  t[6] === _
    ? (x = t[7])
    : ((x = (e) => {
        if (d.current) {
          d.current = !1;
          return;
        }
        e.currentTarget.matches(`:focus-visible`) && _();
      }),
      (t[6] = _),
      (t[7] = x));
  let S;
  t[8] === b
    ? (S = t[9])
    : ((S = (e) => {
        e.key === `Tab` && !e.shiftKey && b && (e.preventDefault(), l.current?.focus());
      }),
      (t[8] = b),
      (t[9] = S));
  let C;
  t[10] === n
    ? (C = t[11])
    : ((C = (0, $.jsx)(c, {
        id: `artifactAnnotationBatch.annotationCount`,
        defaultMessage: `{count, plural, one {# annotation} other {# annotations}}`,
        description: `Number of distinct artifact annotations saved in the current unsent batch`,
        values: { count: n },
      })),
      (t[10] = n),
      (t[11] = C));
  let w;
  t[12] !== _ || t[13] !== x || t[14] !== S || t[15] !== C
    ? ((w = (0, $.jsx)(B, {
        asChild: !0,
        children: (0, $.jsx)(`button`, {
          type: `button`,
          className: `min-w-24 shrink-0 ps-2 pe-1 text-center tabular-nums`,
          onFocus: x,
          onKeyDown: S,
          onMouseEnter: _,
          onMouseLeave: y,
          onPointerMove: _,
          children: C,
        }),
      })),
      (t[12] = _),
      (t[13] = x),
      (t[14] = S),
      (t[15] = C),
      (t[16] = w))
    : (w = t[16]);
  let T;
  t[17] === a
    ? (T = t[18])
    : ((T = a.formatMessage({
        id: `artifactAnnotationBatch.annotationPreview`,
        defaultMessage: `Annotation preview`,
        description: `Accessible label for the focus-managed preview of pending artifact annotations shown before sending a batch`,
      })),
      (t[17] = a),
      (t[18] = T));
  let E, te;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (e) => {
        !d.current && document.activeElement !== document.body && e.preventDefault();
      }),
      (te = () => {
        d.current = !0;
      }),
      (t[19] = E),
      (t[20] = te))
    : ((E = t[19]), (te = t[20]));
  let O;
  t[21] !== _ || t[22] !== r || t[23] !== T
    ? ((O = (0, $.jsx)(G, {
        ref: l,
        "aria-label": T,
        align: `center`,
        disablePadding: !0,
        side: `bottom`,
        size: `large`,
        tabIndex: 0,
        onCloseAutoFocus: E,
        onEscapeKeyDown: te,
        onMouseEnter: _,
        onMouseLeave: y,
        onOpenAutoFocus: Ee,
        children: r,
      })),
      (t[21] = _),
      (t[22] = r),
      (t[23] = T),
      (t[24] = O))
    : (O = t[24]);
  let k;
  return (
    t[25] !== b || t[26] !== O || t[27] !== w
      ? ((k = (0, $.jsxs)(D, { open: b, onOpenChange: s, children: [w, O] })),
        (t[25] = b),
        (t[26] = O),
        (t[27] = w),
        (t[28] = k))
      : (k = t[28]),
    k
  );
}
function Ee(e) {
  e.preventDefault();
}
function De(e) {
  let t = (0, Oe.c)(82),
    {
      annotationCount: r,
      conversationId: i,
      hostId: a,
      onDismissAnnotations: o,
      onRefresh: s,
      path: c,
      refreshQueryCacheKey: u,
      onNavigate: p,
    } = e,
    v = n(ae),
    y = ee(),
    b = l(),
    S;
  t[0] !== i || t[1] !== a || t[2] !== c
    ? ((S = { conversationId: i, hostId: a, path: c }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = c),
      (t[3] = S))
    : (S = t[3]);
  let C = S,
    E = g(re, C),
    D = g(pe, C),
    O = g(ce, C),
    A = O?.turn ?? O?.queuedBehindTurn,
    j = A?.turnId,
    M;
  t[4] !== i || t[5] !== A?.threadId
    ? ((M = A?.threadId ?? fe(i)), (t[4] = i), (t[5] = A?.threadId), (t[6] = M))
    : (M = t[6]);
  let oe = M,
    N = g(ie, oe),
    P = g(w, oe),
    F = g(m, oe),
    I;
  t[7] !== a || t[8] !== c
    ? ((I = se({ hostId: a, path: c })), (t[7] = a), (t[8] = c), (t[9] = I))
    : (I = t[9]);
  let L = g(d, I),
    R;
  t[10] !== a || t[11] !== s || t[12] !== c || t[13] !== b || t[14] !== u
    ? ((R =
        s ??
        (() =>
          x({
            cacheKey: u,
            openFiles: [{ hostId: a, path: c }],
            queryClient: b,
            throwOnError: !0,
          }))),
      (t[10] = a),
      (t[11] = s),
      (t[12] = c),
      (t[13] = b),
      (t[14] = u),
      (t[15] = R))
    : (R = t[15]);
  let z;
  t[16] !== a || t[17] !== c || t[18] !== v
    ? ((z = () => {
        h(v, { hostId: a, path: c });
      }),
      (t[16] = a),
      (t[17] = c),
      (t[18] = v),
      (t[19] = z))
    : (z = t[19]);
  let B;
  t[20] !== C || t[21] !== a || t[22] !== c || t[23] !== v
    ? ((B = () => {
        (_(v, { hostId: a, path: c }), ne(v, C));
      }),
      (t[20] = C),
      (t[21] = a),
      (t[22] = c),
      (t[23] = v),
      (t[24] = B))
    : (B = t[24]);
  let V;
  t[25] !== R || t[26] !== z || t[27] !== B
    ? ((V = { mutationFn: R, onError: z, onSuccess: B }),
      (t[25] = R),
      (t[26] = z),
      (t[27] = B),
      (t[28] = V))
    : (V = t[28]);
  let le = k(V),
    H,
    ue;
  (t[29] !== C ||
  t[30] !== E.length ||
  t[31] !== P ||
  t[32] !== L ||
  t[33] !== N ||
  t[34] !== F ||
  t[35] !== D ||
  t[36] !== j ||
  t[37] !== v
    ? ((H = () => {
        let e = E.length > 0 && j != null && P.has(j);
        D !== `working` || (!e && (E.length !== 0 || L)) || N !== !1 || F != null || ne(v, C);
      }),
      (ue = [E.length, C, P, L, N, F, D, j, v]),
      (t[29] = C),
      (t[30] = E.length),
      (t[31] = P),
      (t[32] = L),
      (t[33] = N),
      (t[34] = F),
      (t[35] = D),
      (t[36] = j),
      (t[37] = v),
      (t[38] = H),
      (t[39] = ue))
    : ((H = t[38]), (ue = t[39])),
    (0, Q.useEffect)(H, ue));
  let U;
  t[40] !== C || t[41] !== v
    ? ((U = () => {
        ne(v, C);
      }),
      (t[40] = C),
      (t[41] = v),
      (t[42] = U))
    : (U = t[42]);
  let W = U,
    G;
  t[43] !== a || t[44] !== O
    ? ((G = O?.turn == null ? void 0 : { turn: O.turn, hostId: a }),
      (t[43] = a),
      (t[44] = O),
      (t[45] = G))
    : (G = t[45]);
  let me = D === `working` && L && N === !1 && F == null ? `latest` : D,
    K;
  t[46] !== E || t[47] !== a
    ? ((K =
        E.length > 0 ? (0, $.jsx)(ge, { commentAttachments: E, cwd: null, hostId: a }) : void 0),
      (t[46] = E),
      (t[47] = a),
      (t[48] = K))
    : (K = t[48]);
  let q;
  t[49] !== E.length || t[50] !== o || t[51] !== c || t[52] !== W || t[53] !== v
    ? ((q = () => {
        let e = f(c);
        (e != null &&
          E.length > 0 &&
          T(v, { ...e, threadId: te(v.value) }, { annotationCount: E.length, outcome: `canceled` }),
          o(),
          W());
      }),
      (t[49] = E.length),
      (t[50] = o),
      (t[51] = c),
      (t[52] = W),
      (t[53] = v),
      (t[54] = q))
    : (q = t[54]);
  let J;
  t[55] !== a || t[56] !== c || t[57] !== W || t[58] !== v
    ? ((J = () => {
        (_(v, { hostId: a, path: c }), W());
      }),
      (t[55] = a),
      (t[56] = c),
      (t[57] = W),
      (t[58] = v),
      (t[59] = J))
    : (J = t[59]);
  let Y;
  t[60] === le
    ? (Y = t[61])
    : ((Y = () => {
        le.mutate();
      }),
      (t[60] = le),
      (t[61] = Y));
  let X;
  t[62] !== C ||
  t[63] !== E ||
  t[64] !== i ||
  t[65] !== a ||
  t[66] !== y ||
  t[67] !== c ||
  t[68] !== D ||
  t[69] !== W ||
  t[70] !== v
    ? ((X = () => {
        let e = E[0];
        if (e == null || D !== `idle`) return;
        let t = globalThis.crypto.randomUUID();
        de(v, { ...C, sessionId: t });
        try {
          he.dispatchHostMessage({
            type: `artifact-direct-comment`,
            artifactBatch: { hostId: a, path: c },
            body: y.formatMessage(
              {
                id: `artifactAnnotationBatch.applyAnnotationsPrompt`,
                defaultMessage: `Apply {count, plural, one {this annotation} other {these # annotations}}`,
                description: `Prompt submitted to the existing conversation when the user applies a batch of artifact annotations`,
              },
              { count: E.length },
            ),
            comment: e,
            comments: E,
            conversationId: i,
            sessionId: t,
          });
        } catch (e) {
          let t = e;
          throw (W(), t);
        }
      }),
      (t[62] = C),
      (t[63] = E),
      (t[64] = i),
      (t[65] = a),
      (t[66] = y),
      (t[67] = c),
      (t[68] = D),
      (t[69] = W),
      (t[70] = v),
      (t[71] = X))
    : (X = t[71]);
  let _e;
  return (
    t[72] !== r ||
    t[73] !== p ||
    t[74] !== G ||
    t[75] !== me ||
    t[76] !== K ||
    t[77] !== q ||
    t[78] !== J ||
    t[79] !== Y ||
    t[80] !== X
      ? ((_e = (0, $.jsx)(we, {
          annotationCount: r,
          stopTurn: G,
          onNavigate: p,
          phase: me,
          previewContent: K,
          onCancel: q,
          onDismissLatestChanges: J,
          onSeeLatestChanges: Y,
          onSend: X,
        })),
        (t[72] = r),
        (t[73] = p),
        (t[74] = G),
        (t[75] = me),
        (t[76] = K),
        (t[77] = q),
        (t[78] = J),
        (t[79] = Y),
        (t[80] = X),
        (t[81] = _e))
      : (_e = t[81]),
    _e
  );
}
var Oe,
  Q,
  $,
  ke,
  Ae = e(() => {
    ((Oe = z()),
      W(),
      v(),
      o(),
      (Q = t(a(), 1)),
      S(),
      U(),
      s(),
      C(),
      K(),
      H(),
      r(),
      me(),
      p(),
      _e(),
      j(),
      u(),
      X(),
      O(),
      i(),
      J(),
      Ce(),
      ($ = oe()),
      (ke = 100));
  });
export { Ce as i, Ae as n, ye as r, De as t };
//# sourceMappingURL=artifact-annotation-batch-controls-b9f12cd27bf6.js.map
