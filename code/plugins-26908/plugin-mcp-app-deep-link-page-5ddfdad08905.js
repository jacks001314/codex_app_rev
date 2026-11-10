import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import { t as n } from "./react-d6ffadc57208.js";
import { t as r } from "./compiler-runtime-292acb85cdd3.js";
import {
  A6t as i,
  B2 as a,
  C6t as o,
  D2 as s,
  FXt as c,
  IYt as l,
  L2 as u,
  LXt as d,
  NXt as f,
  O6t as p,
  ZGt as m,
  bXt as h,
  cU as g,
  eKt as _,
  sU as v,
  t3t as y,
  wXt as b,
  x2 as x,
  y2 as S,
  z2 as C,
} from "./app-initial-bcc2ff475eb6.js";
import { t as w } from "./jsx-runtime-a96621a2647a.js";
import { Er as T, br as E, mr as D, pr as O, t as k } from "./src-996ff3571e1f.js";
import { i as A, r as j } from "./mcp-extension-view-page-2a7778ec979e.js";
import { n as M, r as N } from "./plugin-detail-page-2f770d1328da.js";
function P({ entrypoint: e = `global`, pluginId: t, toolName: n, views: r }) {
  let i = E(t),
    o = i == null ? t : t.slice(0, -(i.length + 1)),
    s = r.filter((r) =>
      r.entrypoint.type !== e || r.tool.name !== n
        ? !1
        : a(r.server)
          ? u(r.server, r.tool) === o
          : r.pluginId === void 0
            ? r.server === o
            : r.pluginId === t,
    );
  return s.length === 1
    ? { kind: `found`, view: s[0] }
    : s.length === 0
      ? { kind: `not-found` }
      : { kind: `ambiguous` };
}
var F = e(() => {
  (k(), C());
});
function I() {
  let e = (0, R.c)(21),
    t = f(),
    n = c(),
    { pluginId: r, toolName: a } = d(),
    o = i(s),
    l = i(x),
    u = p(l ? _ : null, y),
    [m, h] = (0, z.useState)(null),
    g = m != null && m.pluginId === r && m.toolName === a ? m.state : `idle`,
    S,
    C;
  if (e[0] !== l || e[1] !== t.state || e[2] !== r || e[3] !== u || e[4] !== a || e[5] !== o) {
    C = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let n = T.safeParse(t.state).data ?? null,
        i = n?.entrypoint ?? `global`;
      if (!l || u == null || r == null || a == null) {
        let t;
        (e[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, B.jsx)(j, {})), (e[8] = t))
          : (t = e[8]),
          (C = t));
        break bb0;
      }
      if (!u.isError && !u.isSuccess) {
        let t;
        (e[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, B.jsx)(v, { debugName: `PluginMcpAppDeepLink`, fillParent: !0 })), (e[9] = t))
          : (t = e[9]),
          (C = t));
        break bb0;
      }
      if (((S = P({ entrypoint: i, pluginId: r, toolName: a, views: o })), S.kind === `found`)) {
        C = (0, B.jsx)(b, {
          replace: !0,
          to: (i === `settings` ? D : O)(S.view.server, S.view.tool.name),
          state: n,
        });
        break bb0;
      }
    }
    ((e[0] = l),
      (e[1] = t.state),
      (e[2] = r),
      (e[3] = u),
      (e[4] = a),
      (e[5] = o),
      (e[6] = S),
      (e[7] = C));
  } else ((S = e[6]), (C = e[7]));
  if (C !== Symbol.for(`react.early_return_sentinel`)) return C;
  if (S.kind === `ambiguous` || g === `complete`) {
    let t;
    return (
      e[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, B.jsx)(j, {})), (e[10] = t))
        : (t = e[10]),
      t
    );
  }
  if (g === `loading`) {
    let t;
    return (
      e[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, B.jsx)(v, { debugName: `PluginMcpAppDeepLinkRetry`, fillParent: !0 })),
          (e[11] = t))
        : (t = e[11]),
      t
    );
  }
  let w;
  e[12] === n
    ? (w = e[13])
    : ((w = () => {
        n(`/skills`, { state: { initialHostId: y, initialTab: `plugins` } });
      }),
      (e[12] = n),
      (e[13] = w));
  let E;
  e[14] !== r || e[15] !== u || e[16] !== a
    ? ((E = async () => {
        (h({ pluginId: r, state: `loading`, toolName: a }),
          await u.refetch().catch(L),
          h({ pluginId: r, state: `complete`, toolName: a }));
      }),
      (e[14] = r),
      (e[15] = u),
      (e[16] = a),
      (e[17] = E))
    : (E = e[17]);
  let k;
  return (
    e[18] !== w || e[19] !== E
      ? ((k = (0, B.jsx)(M, {
          allowUniqueNameFallback: !0,
          hostId: y,
          onBack: w,
          onPluginActivationComplete: E,
        })),
        (e[18] = w),
        (e[19] = E),
        (e[20] = k))
      : (k = e[20]),
    k
  );
}
function L() {}
var R, z, B;
e(() => {
  ((R = r()), o(), k(), (z = t(n(), 1)), h(), g(), N(), m(), l(), S(), A(), F(), (B = w()));
})();
export { I as PluginMcpAppDeepLinkPage };
//# sourceMappingURL=plugin-mcp-app-deep-link-page-5ddfdad08905.js.map
