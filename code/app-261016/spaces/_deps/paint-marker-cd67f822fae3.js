import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  NSt as a,
  PBt as o,
  PSt as s,
  Qst as c,
  ZSt as l,
  nCt as u,
  yCt as d,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Air as f,
  BRr as p,
  DW as m,
  Mir as h,
  Qgn as g,
  Xz as _,
  Zz as v,
  e_n as y,
  fpn as b,
  gur as x,
  hdn as S,
  kW as C,
  kdn as w,
  lpn as T,
  wLr as E,
} from "./app-initial-ad16eaadf81f.js";
import { n as D, t as O } from "./space-e4040a2fa18d.js";
function k(e) {
  let t = (0, N.c)(3),
    { pageId: n, ready: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, F.jsx)(j, { pageId: n, ready: r })), (t[0] = n), (t[1] = r), (t[2] = i))
      : (i = t[2]),
    i
  );
}
function A(e) {
  let t = (0, N.c)(4),
    { pageId: n, ready: r, spaceId: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = (0, F.jsx)(j, { pageId: n, ready: r, spaceId: i })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function j(e) {
  let n = (0, N.c)(19),
    { pageId: r, ready: i, spaceId: a } = e,
    o = t(c),
    s;
  n[0] !== r || n[1] !== a
    ? ((s = { pageId: r, spaceId: a }), (n[0] = r), (n[1] = a), (n[2] = s))
    : (s = n[2]);
  let l = u(I, s),
    d = l?.emptyDraft,
    p,
    m;
  (n[3] === d
    ? ((p = n[4]), (m = n[5]))
    : ((p = () => d?.retain()), (m = [d]), (n[3] = d), (n[4] = p), (n[5] = m)),
    (0, P.useLayoutEffect)(p, m));
  let h = a == null || l?.metrics?.documentType === `space` ? l?.metrics : void 0,
    g,
    v;
  if (
    (n[6] !== h || n[7] !== r || n[8] !== o || n[9] !== a
      ? ((g = () => {
          if (h == null) return;
          let e = o.get(f).pathname,
            t = h.observeEditor(a == null ? `editor` : `content`);
          return () => {
            (t(),
              queueMicrotask(() => {
                let t = o.get(f).pathname;
                if (e == null || t == null || t === e) return;
                let n = o.get(I, { pageId: r, spaceId: a });
                if (
                  !M(
                    t,
                    n,
                    o.get(C).find((e) => e.localPageId === n?.localPageId),
                  )
                ) {
                  h.observationLost();
                  return;
                }
                h.retainObservation(
                  o.watch((e) => {
                    let { get: t } = e,
                      n = t(f).pathname,
                      i = t(I, { pageId: r, spaceId: a }),
                      o = t(C).find((e) => e.localPageId === i?.localPageId);
                    (n == null || !M(n, i, o)) && h.observationLost();
                  }),
                );
              }));
          };
        }),
        (v = [h, r, a, o]),
        (n[6] = h),
        (n[7] = r),
        (n[8] = o),
        (n[9] = a),
        (n[10] = g),
        (n[11] = v))
      : ((g = n[10]), (v = n[11])),
    (0, P.useLayoutEffect)(g, v),
    l == null || h == null || (a == null && l.serverPageId == null) || !i)
  )
    return null;
  let y;
  n[12] !== h || n[13] !== r || n[14] !== a
    ? ((y = () => h.paintOpportunity(a == null ? void 0 : r)),
      (n[12] = h),
      (n[13] = r),
      (n[14] = a),
      (n[15] = y))
    : (y = n[15]);
  let b;
  return (
    n[16] !== l.localPageId || n[17] !== y
      ? ((b = (0, F.jsx)(_, { requireVisibleAtPaint: !0, onPaint: y }, l.localPageId)),
        (n[16] = l.localPageId),
        (n[17] = y),
        (n[18] = b))
      : (b = n[18]),
    b
  );
}
function M(e, t, n) {
  let r = g(e);
  if (r != null)
    return new Set([t?.localPageId, t?.serverPageId ?? t?.pendingServerPageId, n?.space?.rootPageId]).has(r);
  let i = s(`/spaces/:spaceId`, e)?.params.spaceId,
    a = new Set([t?.space?.serverSpaceId, t?.space?.response?.id, n?.space?.spaceId]);
  return i != null && a.has(i);
}
var N, P, F, I;
function L() {
  return (L = e(() => {
    ((N = o()),
      l(),
      (P = r()),
      a(),
      h(),
      E(),
      v(),
      n(),
      S(),
      y(),
      O(),
      m(),
      T(),
      (F = i()),
      (I = d(c, ({ pageId: e, spaceId: t }, { get: n }) => {
        if (t == null) return n(w, e);
        let r = n(D, t);
        if (r?.response != null)
          return {
            localPageId: r.localPageId,
            serverPageId: r.response.root_page_id,
            status: `created`,
            unlistedMetadata: null,
            metrics: r.metrics,
            space: { name: r.name, userId: r.userId, response: r.response },
          };
        let i = n(x),
          a = n(p),
          o = n(C).find((n) => n.space?.spaceId === t && n.space.rootPageId === e);
        return i == null
          ? void 0
          : n(b, i).find(
              (n) =>
                n.space?.userId === a &&
                (n.localPageId === o?.localPageId ||
                  (n.serverPageId ?? n.pendingServerPageId) === e ||
                  n.space?.serverSpaceId === t ||
                  n.space?.response?.id === t),
            );
      })));
  }))();
}
export { A as n, L as r, k as t };
//# sourceMappingURL=paint-marker-cd67f822fae3.js.map
