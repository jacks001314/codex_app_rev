import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  TJ as n,
  cz as r,
  iO as i,
  rO as a,
  sz as o,
  t3 as s,
  vzt as c,
  xB as l,
  xMt as u,
  yzt as d,
} from "./app-shared-bbfeca5e5737.js";
function f(e) {
  let n = (0, p.c)(19),
    { label: r, getUrl: i, onCopied: s, onCopyFailed: c, color: u, radius: d, size: f } = e,
    g = u === void 0 ? `ghostActive` : u,
    _ = d === void 0 ? `default` : d,
    v = f === void 0 ? `entityHeader` : f,
    y = (0, m.useRef)(null),
    [b, x] = (0, m.useState)(!1),
    S,
    C;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = () => () => {
        y.current?.abort();
      }),
      (C = []),
      (n[0] = S),
      (n[1] = C))
    : ((S = n[0]), (C = n[1])),
    (0, m.useEffect)(S, C));
  let w;
  n[2] !== i || n[3] !== s || n[4] !== c
    ? ((w = (e) => {
        if (y.current != null) return;
        let t = new AbortController();
        ((y.current = t),
          x(!0),
          (async () => {
            try {
              let n = i(t.signal),
                r = typeof n == `string` ? n : n.then((e) => (t.signal.throwIfAborted(), e)),
                o = await a(r, e);
              t.signal.aborted || (o ? s() : c?.());
            } catch {
              t.signal.aborted || c?.();
            }
          })().finally(() => {
            t.signal.aborted || ((y.current = null), x(!1));
          }));
      }),
      (n[2] = i),
      (n[3] = s),
      (n[4] = c),
      (n[5] = w))
    : (w = n[5]);
  let T;
  n[6] === b ? (T = n[7]) : ((T = !b && (0, h.jsx)(l, {})), (n[6] = b), (n[7] = T));
  let E;
  n[8] !== g || n[9] !== b || n[10] !== r || n[11] !== _ || n[12] !== v || n[13] !== w || n[14] !== T
    ? ((E = (0, h.jsx)(t, {
        type: `button`,
        color: g,
        radius: _,
        size: v,
        loading: b,
        "aria-label": r,
        "aria-busy": b,
        onClick: w,
        children: T,
      })),
      (n[8] = g),
      (n[9] = b),
      (n[10] = r),
      (n[11] = _),
      (n[12] = v),
      (n[13] = w),
      (n[14] = T),
      (n[15] = E))
    : (E = n[15]);
  let D;
  return (
    n[16] !== r || n[17] !== E
      ? ((D = (0, h.jsx)(o, { tooltipContent: r, children: E })), (n[16] = r), (n[17] = E), (n[18] = D))
      : (D = n[18]),
    D
  );
}
var p, m, h;
function g() {
  return (g = e(() => {
    ((p = c()), (m = d()), s(), n(), r(), i(), (h = u()));
  }))();
}
export { g as n, f as t };
//# sourceMappingURL=entity-share-button-2ff5da23da52.js.map
