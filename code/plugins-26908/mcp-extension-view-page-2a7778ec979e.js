import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import { t as n } from "./react-d6ffadc57208.js";
import { t as r } from "./compiler-runtime-292acb85cdd3.js";
import {
  A6t as i,
  BG as a,
  C2 as o,
  C6t as s,
  IYt as c,
  LXt as l,
  NXt as u,
  O6t as d,
  QO as f,
  Son as p,
  T2 as m,
  XH as h,
  XPt as g,
  YPt as _,
  ZGt as v,
  ZH as y,
  ZPt as b,
  _on as x,
  bXt as S,
  eKt as C,
  ek as w,
  gon as T,
  m5 as E,
  nnn as D,
  o5 as O,
  qPt as ee,
  s5 as te,
  t3t as ne,
  w5 as re,
  wXt as ie,
  wnn as ae,
  x2 as oe,
  y2 as k,
  zG as A,
} from "./app-initial-bcc2ff475eb6.js";
import { t as j } from "./jsx-runtime-a96621a2647a.js";
import { ST as M, xT as N } from "./app-primary-b36a719dba75.js";
import { Cf as se, Er as ce, do as le, t as P } from "./src-996ff3571e1f.js";
import { n as F, t as I } from "./button-6325b3939f12.js";
import { n as L, t as R } from "./mcp-extension-view-frame-672ca3de66f6.js";
import { n as z, t as B } from "./surface-3337737accfb.js";
function V(e) {
  let t = (0, W.c)(6),
    { children: n, locationState: r, view: i } = e,
    a;
  t[0] === r ? (a = t[1]) : ((a = N(r)), (t[0] = r), (t[1] = a));
  let o = a,
    s;
  return (
    t[2] !== n || t[3] !== o || t[4] !== i
      ? ((s =
          o == null || o.pluginId !== i.pluginId
            ? (0, K.jsx)(K.Fragment, { children: n })
            : (0, K.jsx)(H, { url: o.url })),
        (t[2] = n),
        (t[3] = o),
        (t[4] = i),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function H(e) {
  let t = (0, W.c)(3),
    { url: n } = e,
    { locale: r } = p(),
    i;
  return (
    t[0] !== r || t[1] !== n
      ? ((i = (0, K.jsx)(U, { locale: r, url: n }, r)), (t[0] = r), (t[1] = n), (t[2] = i))
      : (i = t[2]),
    i
  );
}
function U(e) {
  let t = (0, W.c)(26),
    { locale: n, url: r } = e,
    { isLoading: i } = b(),
    { data: a, isLoading: o } = _(),
    s = a?.accountId,
    [c, l] = (0, G.useState)(!1),
    [u, d] = (0, G.useState)(!0),
    [f] = (0, G.useState)(ue),
    [p, m] = (0, G.useState)(null),
    g,
    v;
  if (
    (t[0] === p
      ? ((g = t[1]), (v = t[2]))
      : ((g = () => {
          if (p == null) return;
          let e = null,
            t = () => {
              e != null && (window.clearTimeout(e), (e = null));
            },
            n = () => {
              (t(), l(!0));
            },
            r = () => {
              (t(), (e = window.setTimeout(n, Y)));
            },
            i = () => {
              let e = fe(p);
              e?.origin === q && !e.pathname.startsWith(J) && (t(), d(!1));
            },
            a = (e) => {
              e.isMainFrame !== !1 && r();
            },
            o = (e) => {
              let t = e;
              if (t.isMainFrame !== !1) {
                if (t.errorCode === -3) {
                  i();
                  return;
                }
                n();
              }
            };
          return (
            p.addEventListener(`dom-ready`, i),
            p.addEventListener(`did-start-navigation`, a),
            p.addEventListener(`did-fail-load`, o),
            p.addEventListener(`did-finish-load`, i),
            p.addEventListener(`did-stop-loading`, i),
            p.addEventListener(`did-navigate-in-page`, i),
            r(),
            i(),
            () => {
              (t(),
                p.removeEventListener(`dom-ready`, i),
                p.removeEventListener(`did-start-navigation`, a),
                p.removeEventListener(`did-fail-load`, o),
                p.removeEventListener(`did-finish-load`, i),
                p.removeEventListener(`did-stop-loading`, i),
                p.removeEventListener(`did-navigate-in-page`, i));
            }
          );
        }),
        (v = [p]),
        (t[0] = p),
        (t[1] = g),
        (t[2] = v)),
    (0, G.useEffect)(g, v),
    i || o)
  )
    return null;
  if (s == null) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(ie, { to: `/`, replace: !0 })), (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let y, S, C, w, T, E;
  if (t[4] !== s || t[5] !== c || t[6] !== u || t[7] !== n || t[8] !== f || t[9] !== r) {
    E = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = de(r, n);
      if (c || e == null) {
        let e, n;
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, K.jsx)(I, {
              color: `secondary`,
              onClick: () => {
                (l(!1), d(!0));
              },
              children: (0, K.jsx)(x, {
                id: `firstPartyPluginAuthenticatedChatGptWebview.retry`,
                defaultMessage: `Try again`,
                description: `Button that retries loading a first-party plugin's authenticated ChatGPT page`,
              }),
            })),
            (n = (0, K.jsx)(x, {
              id: `firstPartyPluginAuthenticatedChatGptWebview.errorDescription`,
              defaultMessage: `Check your connection and try again`,
              description: `Description shown when a first-party plugin's authenticated ChatGPT page fails to load`,
            })),
            (t[16] = e),
            (t[17] = n))
          : ((e = t[16]), (n = t[17]));
        let r;
        (t[18] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((r = (0, K.jsx)(h, {
              actions: e,
              description: n,
              layout: `page`,
              title: (0, K.jsx)(x, {
                id: `firstPartyPluginAuthenticatedChatGptWebview.errorTitle`,
                defaultMessage: `Unable to load this page`,
                description: `Title shown when a first-party plugin's authenticated ChatGPT page fails to load`,
              }),
            })),
            (t[18] = r))
          : (r = t[18]),
          (E = r));
        break bb0;
      }
      let i = new URL(`about:blank`);
      (i.searchParams.set(`toUrl`, e),
        i.searchParams.set(`accountId`, s),
        (y = B),
        (S = u),
        (C = f),
        (w = !1),
        (T = i.toString()));
    }
    ((t[4] = s),
      (t[5] = c),
      (t[6] = u),
      (t[7] = n),
      (t[8] = f),
      (t[9] = r),
      (t[10] = y),
      (t[11] = S),
      (t[12] = C),
      (t[13] = w),
      (t[14] = T),
      (t[15] = E));
  } else ((y = t[10]), (S = t[11]), (C = t[12]), (w = t[13]), (T = t[14]), (E = t[15]));
  if (E !== Symbol.for(`react.early_return_sentinel`)) return E;
  let D;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (e) => {
        m(pe(e) ? e : null);
      }),
      (t[19] = D))
    : (D = t[19]);
  let O;
  return (
    t[20] !== y || t[21] !== S || t[22] !== C || t[23] !== w || t[24] !== T
      ? ((O = (0, K.jsx)(y, {
          isLoading: S,
          partition: C,
          showBackButton: w,
          src: T,
          webviewRef: D,
        })),
        (t[20] = y),
        (t[21] = S),
        (t[22] = C),
        (t[23] = w),
        (t[24] = T),
        (t[25] = O))
      : (O = t[25]),
    O
  );
}
function ue() {
  return `${le}${crypto.randomUUID()}`;
}
function de(e, t) {
  try {
    let n = new URL(e, q);
    return (n.searchParams.set(`locale`, t), n.toString());
  } catch {
    return null;
  }
}
function fe(e) {
  try {
    return new URL(e.getURL());
  } catch {
    return null;
  }
}
function pe(e) {
  return e != null && `getURL` in e && typeof e.getURL == `function`;
}
var W,
  G,
  K,
  q,
  J,
  Y,
  me = e(() => {
    ((W = r()),
      P(),
      (G = t(n(), 1)),
      T(),
      S(),
      g(),
      ee(),
      F(),
      y(),
      z(),
      M(),
      (K = j()),
      (q = new URL(se).origin),
      (J = `/api/auth/`),
      (Y = 3e4));
  });
function he() {
  let e = (0, Q.c)(2),
    t = i(o),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = (0, $.jsx)(X, { hostId: ne, views: t })), (e[0] = t), (e[1] = n)),
    n
  );
}
function ge() {
  let e = (0, Q.c)(3),
    { selectedHostId: t } = w(),
    n = d(m, t),
    r;
  return (
    e[0] !== t || e[1] !== n
      ? ((r = (0, $.jsx)(X, { hostId: t, views: n })), (e[0] = t), (e[1] = n), (e[2] = r))
      : (r = e[2]),
    r
  );
}
function X(e) {
  let t = (0, Q.c)(20),
    { hostId: n, views: r } = e,
    a = u(),
    { server: o, toolName: s } = l(),
    c = i(oe),
    f;
  t[0] === c ? (f = t[1]) : ((f = { enabled: c }), (t[0] = c), (t[1] = f));
  let { isPending: p } = d(C, n, f),
    m;
  t[2] !== o || t[3] !== s || t[4] !== r
    ? ((m =
        o == null || s == null
          ? null
          : (r.find((e) => e.server === o && e.tool.name === s) ?? null)),
      (t[2] = o),
      (t[3] = s),
      (t[4] = r),
      (t[5] = m))
    : (m = t[5]);
  let h = m,
    g;
  if (t[6] !== a.state) {
    let e = ce.safeParse(a.state).data?.mcpAppDeepLink ?? null,
      n = new URLSearchParams(e?.query).toString();
    ((g =
      e == null
        ? null
        : { ...e, url: `/${e.path.map(encodeURIComponent).join(`/`)}${n ? `?${n}` : ``}` }),
      (t[6] = a.state),
      (t[7] = g));
  } else g = t[7];
  let _ = g;
  if (c && p) {
    let e;
    return (
      t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(A, { className: `size-full` })), (t[8] = e))
        : (e = t[8]),
      e
    );
  }
  if (h == null) {
    let e;
    return (
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(Z, {})), (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  if (h.entrypoint.type !== `settings`) {
    let e;
    return (
      t[10] !== _ || t[11] !== h
        ? ((e = (0, $.jsx)(_e, { deepLink: _, view: h })), (t[10] = _), (t[11] = h), (t[12] = e))
        : (e = t[12]),
      e
    );
  }
  let v;
  t[13] !== _ || t[14] !== h
    ? ((v = (0, $.jsx)(R, { deepLink: _, view: h })), (t[13] = _), (t[14] = h), (t[15] = v))
    : (v = t[15]);
  let y = v,
    b;
  return (
    t[16] !== a.state || t[17] !== h || t[18] !== y
      ? ((b = (0, $.jsx)(V, { locationState: a.state, view: h, children: y })),
        (t[16] = a.state),
        (t[17] = h),
        (t[18] = y),
        (t[19] = b))
      : (b = t[19]),
    b
  );
}
function _e(e) {
  let t = (0, Q.c)(8),
    { deepLink: n, view: r } = e,
    a = i(E),
    { titleBarLeftInset: o } = te(),
    s = ae(o, ve),
    c = R,
    l = a != null,
    u = a === void 0,
    d;
  t[0] !== l || t[1] !== u || t[2] !== s
    ? ((d = { windowControlsClipPath: s, hasTitleBar: l, isPending: u }),
      (t[0] = l),
      (t[1] = u),
      (t[2] = s),
      (t[3] = d))
    : (d = t[3]);
  let f;
  return (
    t[4] !== n || t[5] !== d || t[6] !== r
      ? ((f = (0, $.jsx)(c, { customTitleBar: d, deepLink: n, view: r })),
        (t[4] = n),
        (t[5] = d),
        (t[6] = r),
        (t[7] = f))
      : (f = t[7]),
    f
  );
}
function ve(e) {
  return `polygon(${e}px 0, 100% 0, 100% 100%, 0 100%, 0 var(--height-toolbar), ${e}px var(--height-toolbar))`;
}
function Z() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex h-full min-h-0 items-center justify-center`,
          children: (0, $.jsx)(h, {
            title: (0, $.jsx)(x, {
              id: `openaiMcpCapabilities.view.notFound`,
              defaultMessage: `MCP app view not found`,
              description: `Title shown when an MCP app view route does not match an available server tool`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Q,
  $,
  ye = e(() => {
    ((Q = r()),
      D(),
      s(),
      P(),
      T(),
      S(),
      O(),
      re(),
      y(),
      a(),
      me(),
      v(),
      f(),
      c(),
      k(),
      L(),
      ($ = j()));
  });
export { ye as i, ge as n, Z as r, he as t };
//# sourceMappingURL=mcp-extension-view-page-2a7778ec979e.js.map
