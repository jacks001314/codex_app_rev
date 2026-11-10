import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  _xt as i,
  nSt as a,
  vxt as o,
  vzt as s,
  wot as c,
  xMt as l,
  yzt as u,
  zxt as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  Dor as f,
  Fmn as p,
  Fsn as m,
  Nmn as h,
  XMr as g,
  XR as _,
  YR as v,
  _ln as y,
  hU as b,
  lIr as x,
  mln as S,
  pU as C,
  sIr as w,
  tNr as T,
  xsn as E,
} from "./app-initial-5851df3f6cb1.js";
import { n as D, t as O } from "./space-1fd481862d3e.js";
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
  let r = (0, N.c)(19),
    { pageId: i, ready: a, spaceId: o } = e,
    s = n(t),
    c;
  r[0] !== i || r[1] !== o
    ? ((c = { pageId: i, spaceId: o }), (r[0] = i), (r[1] = o), (r[2] = c))
    : (c = r[2]);
  let l = d(I, c),
    u = l?.emptyDraft,
    f,
    p;
  (r[3] === u
    ? ((f = r[4]), (p = r[5]))
    : ((f = () => u?.retain()), (p = [u]), (r[3] = u), (r[4] = f), (r[5] = p)),
    (0, P.useLayoutEffect)(f, p));
  let m = o == null || l?.metrics?.documentType === `space` ? l?.metrics : void 0,
    h,
    g;
  if (
    (r[6] !== m || r[7] !== i || r[8] !== s || r[9] !== o
      ? ((h = () => {
          if (m == null) return;
          let e = s.get(w).pathname,
            t = m.observeEditor(o == null ? `editor` : `content`);
          return () => {
            (t(),
              queueMicrotask(() => {
                let t = s.get(w).pathname;
                if (e == null || t == null || t === e) return;
                let n = s.get(I, { pageId: i, spaceId: o });
                if (
                  !M(
                    t,
                    n,
                    s.get(b).find((e) => e.localPageId === n?.localPageId),
                  )
                ) {
                  m.observationLost();
                  return;
                }
                m.retainObservation(
                  s.watch((e) => {
                    let { get: t } = e,
                      n = t(w).pathname,
                      r = t(I, { pageId: i, spaceId: o }),
                      a = t(b).find((e) => e.localPageId === r?.localPageId);
                    (n == null || !M(n, r, a)) && m.observationLost();
                  }),
                );
              }));
          };
        }),
        (g = [m, i, o, s]),
        (r[6] = m),
        (r[7] = i),
        (r[8] = s),
        (r[9] = o),
        (r[10] = h),
        (r[11] = g))
      : ((h = r[10]), (g = r[11])),
    (0, P.useLayoutEffect)(h, g),
    l == null || m == null || (o == null && l.serverPageId == null) || !a)
  )
    return null;
  let _;
  r[12] !== m || r[13] !== i || r[14] !== o
    ? ((_ = () => m.paintOpportunity(o == null ? void 0 : i)),
      (r[12] = m),
      (r[13] = i),
      (r[14] = o),
      (r[15] = _))
    : (_ = r[15]);
  let y;
  return (
    r[16] !== l.localPageId || r[17] !== _
      ? ((y = (0, F.jsx)(v, { requireVisibleAtPaint: !0, onPaint: _ }, l.localPageId)),
        (r[16] = l.localPageId),
        (r[17] = _),
        (r[18] = y))
      : (y = r[18]),
    y
  );
}
function M(e, t, n) {
  let r = h(e);
  if (r != null)
    return new Set([t?.localPageId, t?.serverPageId ?? t?.pendingServerPageId, n?.space?.rootPageId]).has(r);
  let i = o(`/spaces/:spaceId`, e)?.params.spaceId,
    a = new Set([t?.space?.serverSpaceId, t?.space?.response?.id, n?.space?.spaceId]);
  return i != null && a.has(i);
}
var N, P, F, I;
function L() {
  return (L = e(() => {
    ((N = s()),
      r(),
      (P = u()),
      i(),
      x(),
      T(),
      _(),
      c(),
      E(),
      p(),
      O(),
      C(),
      S(),
      (F = l()),
      (I = a(t, ({ pageId: e, spaceId: t }, { get: n }) => {
        if (t == null) return n(m, e);
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
        let i = n(f),
          a = n(g),
          o = n(b).find((n) => n.space?.spaceId === t && n.space.rootPageId === e);
        return i == null
          ? void 0
          : n(y, i).find(
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
//# sourceMappingURL=paint-marker-e3ad0035e126.js.map
