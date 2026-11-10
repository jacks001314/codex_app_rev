import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, cSt as n, fSt as r, nSt as i } from "./app-shared-bbfeca5e5737.js";
import {
  Dor as a,
  EH as o,
  Ear as s,
  Ez as c,
  HH as l,
  MH as u,
  Oz as d,
  PH as f,
  SH as p,
  TH as m,
  VH as h,
  XMr as g,
  bH as _,
  eln as v,
  iU as y,
  jar as b,
  kH as x,
  nU as S,
  tNr as C,
  wor as w,
  wpt as T,
  xH as E,
} from "./app-initial-5851df3f6cb1.js";
function D(e, t, n) {
  return {
    onDragStartCapture: (n) => V.start(e, n, t),
    onDragEndCapture: () => V.end(e, t),
    onDragOverCapture: (r) => V.over(e, r, t, n),
    onDragLeaveCapture: (n) => V.leave(e, n, t),
    onDropCapture: (n) => V.drop(e, n, t),
  };
}
function O(e) {
  let t = e.get(F);
  if (
    t != null &&
    e.get(b) &&
    e.get(u) == null &&
    e.get(R) == null &&
    t.accountId === e.get(a) &&
    t.userId === e.get(g)
  )
    return t;
}
async function k(e, t) {
  let n = O(e);
  if ((j(e), !(n == null || n.pageId === t || E(h(e).get(n.pageId), t)))) {
    e.set(R, n);
    try {
      let [r, i] = await Promise.all([
        c(e, n.pageId, n.accountId, n.userId),
        t == null ? null : c(e, t, n.accountId, n.userId),
      ]);
      if (!e.get(b) || e.get(u) != null || n.accountId !== e.get(a) || n.userId !== e.get(g) || E(r, t))
        return;
      if (r == null || (t != null && i == null)) {
        (y(e), o(e));
        return;
      }
      p(e, { pageId: n.pageId, parentPageId: t, beforePageId: void 0 });
    } finally {
      e.set(R, null);
    }
  }
}
function A(e, t) {
  e.value.pageCollection != null &&
    e.value.directoryId == null &&
    !e.value.deleted &&
    e.value.search === `` &&
    !t.defaultPrevented &&
    t.target instanceof Element &&
    t.currentTarget.contains(t.target) &&
    t.target.closest(`[data-library-item]`) == null &&
    O(e) != null &&
    (t.preventDefault(),
    t.stopPropagation(),
    (t.dataTransfer.dropEffect = `move`),
    e.set(I, null),
    M(e),
    t.type === `drop` && k(e, null));
}
function j(e) {
  (M(e), e.set(F, null), e.set(I, null));
}
function M(e) {
  let t = e.get(P, null);
  (clearTimeout(t.timeout), (t.timeout = void 0), (t.pageId = null));
}
var N, P, F, I, L, R, z, B, V;
function H() {
  return (H = e(() => {
    (t(),
      C(),
      T(),
      w(),
      s(),
      x(),
      m(),
      l(),
      d(),
      S(),
      _(),
      (N = 500),
      (P = n(v, (e) => ({ pageId: null, timeout: void 0 }))),
      (F = r(v, null)),
      (I = r(v, null)),
      (L = i(v, (e, { get: t }) => {
        let n = t(F);
        return t(b) && t(I) === e && n?.accountId === t(a) && n?.userId === t(g);
      })),
      (R = r(v, null)),
      (z = i(v, (e, { get: t }) => {
        let n = t(R);
        return t(b) && n?.pageId === e && n.accountId === t(a) && n.userId === t(g);
      })),
      (B = i(v, (e, { get: t, scope: n }) => t(b) && !n.value.deleted && !t(f, e) && !t(z, e))),
      (V = {
        start(e, t, n) {
          if ((j(e), e.get(b))) {
            if (!e.get(B, n)) {
              t.preventDefault();
              return;
            }
            (e.set(F, { pageId: n, accountId: e.get(a), userId: e.get(g) }),
              t.dataTransfer.clearData(),
              (t.dataTransfer.effectAllowed = `move`),
              t.dataTransfer.setData(`application/x-codex-page-move`, n));
          }
        },
        end(e, t) {
          e.get(F)?.pageId === t ? j(e) : e.get(I) === t && (e.set(I, null), M(e));
        },
        over(e, t, n, r) {
          let i = O(e);
          if (i == null) return;
          (t.preventDefault(), t.stopPropagation(), (t.dataTransfer.dropEffect = `move`), e.set(I, n));
          let a = e.get(P, null);
          if (a.pageId === n || (M(e), i.pageId === n || r?.expanded !== !1 || r.onToggle == null)) return;
          let o = r.onToggle;
          ((a.pageId = n),
            (a.timeout = setTimeout(() => {
              (M(e), O(e) === i && e.get(I) === n && o(!0));
            }, N)));
        },
        leave(e, t, n) {
          (t.relatedTarget instanceof Node && t.currentTarget.contains(t.relatedTarget)) ||
            (e.get(I) === n && (e.set(I, null), M(e)));
        },
        drop(e, t, n) {
          O(e) != null && (t.preventDefault(), t.stopPropagation(), k(e, n));
        },
        expandDrop(e, t, n, r) {
          n != null &&
            e.get(b) &&
            t.dataTransfer.types.includes(`application/x-codex-page-move`) &&
            t.dataTransfer.getData(`application/x-codex-page-move`) !== n &&
            r();
        },
        root: A,
      }));
  }))();
}
export { V as a, H as i, z as n, D as o, L as r, B as t };
//# sourceMappingURL=native-drag-0315af0f8adc.js.map
