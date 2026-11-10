import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A5t as t,
  CE as n,
  Gin as r,
  Hin as i,
  N5t as ee,
  O5t as a,
  SE as o,
  Uin as te,
  Vin as s,
  Win as c,
  Wrn as l,
  Yrn as ne,
  _dn as u,
  bE as d,
  c$ as f,
  ein as p,
  mcn as m,
  ncn as h,
  rcn as g,
  t$ as _,
  vdn as v,
  wE as y,
} from "./app-shared-7552fc8d5d82.js";
import {
  FDn as b,
  IDn as x,
  JCn as S,
  LDn as re,
  Mbn as C,
  NDn as ie,
  U2 as ae,
  W2 as oe,
  ZCn as se,
  wOn as ce,
} from "./app-initial-3916b423772b.js";
import { Fo as w, Lo as le, Ro as T } from "./app-primary-7b889402e22e.js";
var ue, de, E, D, O, k;
function A() {
  return (A = e(() => {
    ((ue = `_preview_1t5j6_2`),
      (de = `_controls_1t5j6_2`),
      (E = `_hostname_1t5j6_2`),
      (D = `_surface_1t5j6_2`),
      (O = `_loading_1t5j6_2`),
      (k = {
        preview: ue,
        controls: de,
        hostname: E,
        surface: D,
        loading: O,
        "show-loading": `_show-loading_1t5j6_2`,
      }));
  }))();
}
function j(e) {
  let t = (0, fe.c)(71),
    {
      activeIndex: r,
      conversationId: a,
      isLive: o,
      liveButton: l,
      liveView: u,
      onOpen: d,
      onSelect: f,
      screenshots: m,
      variant: g,
    } = e,
    _ = p(),
    v = ee(ce, a),
    y = m[r],
    x = y?.browser_conversation_id ?? v,
    S = y?.image_asset_pointer.asset_pointer ?? ``,
    C;
  t[0] === x ? (C = t[1]) : ((C = x == null ? void 0 : ae(x)), (t[0] = x), (t[1] = C));
  let { dataUrl: oe, isError: w, src: le } = se(S, C),
    [T, ue] = (0, pe.useState)(null),
    [de, E] = (0, pe.useState)(null),
    [D, O] = (0, pe.useState)(!1),
    A = y != null && x != null;
  if (!A && g === `compact`) return u ?? l;
  let j = oe ?? le,
    N = w || de === S,
    P = u == null ? T?.current.screenshot : y,
    F;
  t[2] === P ? (F = t[3]) : ((F = P == null ? null : ie(P)), (t[2] = P), (t[3] = F));
  let I = F,
    L;
  t[4] === P ? (L = t[5]) : ((L = P != null && re(P)), (t[4] = P), (t[5] = L));
  let R = L,
    me = !N && P?.image_asset_pointer.asset_pointer !== S,
    z = m.length - +(g === `compact`),
    B = g === `expanded` ? P?.tool_summary : void 0,
    V;
  t[6] !== r ||
  t[7] !== A ||
  t[8] !== _ ||
  t[9] !== o ||
  t[10] !== D ||
  t[11] !== z ||
  t[12] !== f ||
  t[13] !== m ||
  t[14] !== g
    ? ((V =
        A && z > 0
          ? (0, M.jsxs)(s, {
              className: `relative flex h-6 w-full touch-none items-center`,
              dir: `ltr`,
              max: z,
              min: 0,
              step: 1,
              value: [g === `expanded` && o ? z : r],
              onBlur: () => O(!1),
              onKeyDown: () => O(!1),
              onPointerDown: () => O(!0),
              onValueChange: (e) => {
                let [t] = e;
                t != null && f(t);
              },
              children: [
                (0, M.jsxs)(c, {
                  className: `relative h-2 grow cursor-interaction rounded-full bg-media-foreground/40`,
                  children: [
                    (0, M.jsx)(`span`, {
                      "aria-hidden": !0,
                      className: `pointer-events-none absolute inset-x-2 top-1/2`,
                      children: b(m).map((e) =>
                        (0, M.jsx)(
                          `span`,
                          {
                            className: `absolute size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-media-foreground/75`,
                            style: { left: `${(e / z) * 100}%` },
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, M.jsx)(i, {
                      className: `absolute h-full rounded-full bg-media-foreground/90`,
                    }),
                  ],
                }),
                (0, M.jsx)(te, {
                  "aria-label": _.formatMessage({
                    id: `chatgptConversations.cloudBrowser.preview.timeline`,
                    defaultMessage: `Cloud browser activity timeline`,
                    description: `Accessible label for the slider that replays screenshots captured while a ChatGPT Work task uses its cloud browser`,
                  }),
                  className: h(
                    `block size-4 cursor-interaction rounded-full border border-default bg-media-foreground shadow-md transition-transform duration-basic focus-visible:outline-none active:scale-110 motion-reduce:transition-none`,
                    !D && `focus-visible:ring-2 focus-visible:ring-ring`,
                  ),
                }),
              ],
            })
          : null),
      (t[6] = r),
      (t[7] = A),
      (t[8] = _),
      (t[9] = o),
      (t[10] = D),
      (t[11] = z),
      (t[12] = f),
      (t[13] = m),
      (t[14] = g),
      (t[15] = V))
    : (V = t[15]);
  let H = V,
    U;
  t[16] !== A ||
  t[17] !== I ||
  t[18] !== _ ||
  t[19] !== o ||
  t[20] !== me ||
  t[21] !== R ||
  t[22] !== S ||
  t[23] !== B ||
  t[24] !== g
    ? ((U =
        A && !(g === `expanded` && o) && (I != null || R || B != null)
          ? (0, M.jsx)(`div`, {
              className: h(
                k.hostname,
                `pointer-events-none absolute start-2 end-2 bottom-2 flex min-w-0 transition-transform duration-relaxed ease-enter motion-reduce:transition-none`,
              ),
              children: (0, M.jsxs)(`span`, {
                className: `flex min-w-0 items-center rounded-md bg-media-background/50 px-2 py-1 text-xs font-medium text-media-foreground/70 shadow-sm`,
                children: [
                  (0, M.jsxs)(`span`, {
                    className: `flex min-w-0 items-center gap-2`,
                    children: [
                      I != null || R
                        ? (0, M.jsx)(`span`, {
                            className: `truncate`,
                            children: R
                              ? (0, M.jsx)(ne, {
                                  id: `chatgptConversations.cloudBrowser.preview.sites`,
                                  defaultMessage: `Sites`,
                                  description: `Product name shown below a cloud-browser preview of an unpublished ChatGPT Sites website`,
                                })
                              : I,
                          })
                        : null,
                      B == null
                        ? null
                        : (0, M.jsxs)(M.Fragment, {
                            children: [
                              I != null || R
                                ? (0, M.jsx)(`span`, {
                                    "aria-hidden": !0,
                                    className: `before:content-['·']`,
                                  })
                                : null,
                              (0, M.jsx)(`span`, {
                                className: `truncate text-media-foreground`,
                                children: B,
                              }),
                            ],
                          }),
                    ],
                  }),
                  me
                    ? (0, M.jsx)(
                        `span`,
                        {
                          "aria-label": _.formatMessage({
                            id: `chatgptConversations.cloudBrowser.preview.loading`,
                            defaultMessage: `Loading browser screenshot`,
                            description: `Accessible status beside the cloud browser hostname while the selected replay screenshot loads; the previous screenshot stays visible`,
                          }),
                          className: h(
                            k.loading,
                            `flex w-0 shrink-0 overflow-hidden text-media-foreground`,
                          ),
                          role: `status`,
                          children: (0, M.jsx)(n, { className: `icon-2xs` }),
                        },
                        S,
                      )
                    : null,
                ],
              }),
            })
          : null),
      (t[16] = A),
      (t[17] = I),
      (t[18] = _),
      (t[19] = o),
      (t[20] = me),
      (t[21] = R),
      (t[22] = S),
      (t[23] = B),
      (t[24] = g),
      (t[25] = U))
    : (U = t[25]);
  let he = U,
    ge = g === `compact` ? `w-full rounded-xl` : `h-full`,
    W;
  t[26] === ge
    ? (W = t[27])
    : ((W = h(k.preview, `relative flex min-h-0 min-w-0 flex-col select-none`, ge)),
      (t[26] = ge),
      (t[27] = W));
  let _e = H != null || void 0,
    ve = g === `compact` ? `border border-default bg-surface` : `bg-media-background`,
    G;
  t[28] === ve
    ? (G = t[29])
    : ((G = h(k.surface, `relative flex min-h-0 flex-1 flex-col overflow-clip`, ve)),
      (t[28] = ve),
      (t[29] = G));
  let ye = g === `compact` ? `absolute inset-0` : `relative flex min-h-0 flex-1`,
    K;
  t[30] !== A || t[31] !== T || t[32] !== N || t[33] !== u || t[34] !== g
    ? ((K =
        u ??
        (A &&
          (T == null
            ? (0, M.jsx)(`div`, {
                className: h(
                  `absolute inset-0 flex items-center justify-center p-4 text-center text-xs`,
                  g === `compact` ? `text-secondary` : `text-media-foreground/70`,
                ),
                role: `status`,
                children: N
                  ? (0, M.jsx)(ne, {
                      id: `chatgptConversations.cloudBrowser.preview.loadFailed`,
                      defaultMessage: `Couldn’t load browser screenshot`,
                      description: `Status inside the cloud browser preview when its first screenshot cannot be downloaded or decoded`,
                    })
                  : (0, M.jsx)(n, { className: `icon-sm` }),
              })
            : [T.previous, T.current].map((e) =>
                e == null
                  ? null
                  : (0, M.jsx)(
                      `img`,
                      {
                        alt: ``,
                        className: h(
                          `absolute inset-0 size-full`,
                          g === `compact`
                            ? `object-cover object-top`
                            : `bg-media-background object-contain`,
                        ),
                        decoding: `async`,
                        draggable: !1,
                        src: e.src,
                      },
                      e.screenshot.image_asset_pointer.asset_pointer,
                    ),
              )))),
      (t[30] = A),
      (t[31] = T),
      (t[32] = N),
      (t[33] = u),
      (t[34] = g),
      (t[35] = K))
    : (K = t[35]);
  let q;
  t[36] !== A || t[37] !== j || t[38] !== S || t[39] !== y
    ? ((q =
        j == null || !A
          ? null
          : (0, M.jsx)(
              `img`,
              {
                alt: ``,
                "aria-hidden": !0,
                className: `pointer-events-none absolute size-px opacity-0`,
                decoding: `async`,
                src: j,
                onError: () => E(S),
                onLoad: (e) => {
                  let t = e.currentTarget;
                  t.decode().then(
                    () => {
                      t.isConnected &&
                        (E(null),
                        ue((e) =>
                          e?.current.screenshot.image_asset_pointer.asset_pointer === S
                            ? e
                            : { current: { screenshot: y, src: j }, previous: e?.current ?? null },
                        ));
                    },
                    () => {
                      t.isConnected && E(S);
                    },
                  );
                },
              },
              S,
            )),
      (t[36] = A),
      (t[37] = j),
      (t[38] = S),
      (t[39] = y),
      (t[40] = q))
    : (q = t[40]);
  let J;
  t[41] !== _ || t[42] !== u || t[43] !== d
    ? ((J =
        d == null || u != null
          ? null
          : (0, M.jsx)(`button`, {
              "aria-label": _.formatMessage({
                id: `chatgptConversations.cloudBrowser.preview.open`,
                defaultMessage: `Open cloud browser`,
                description: `Accessible label for the cloud-browser screenshot preview; activating it opens the larger browser side panel`,
              }),
              className: `absolute inset-0 cursor-interaction focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
              type: `button`,
              onClick: d,
            })),
      (t[41] = _),
      (t[42] = u),
      (t[43] = d),
      (t[44] = J))
    : (J = t[44]);
  let Y;
  t[45] !== ye || t[46] !== K || t[47] !== q || t[48] !== J
    ? ((Y = (0, M.jsxs)(`div`, { className: ye, children: [K, q, J] })),
      (t[45] = ye),
      (t[46] = K),
      (t[47] = q),
      (t[48] = J),
      (t[49] = Y))
    : (Y = t[49]);
  let X;
  t[50] !== A || t[51] !== g
    ? ((X = g === `expanded` ? h(`relative shrink-0`, A && `h-16`) : `contents`),
      (t[50] = A),
      (t[51] = g),
      (t[52] = X))
    : (X = t[52]);
  let Z;
  t[53] !== A || t[54] !== l || t[55] !== u || t[56] !== H
    ? ((Z =
        (A || u == null) &&
        (H == null
          ? l
          : (0, M.jsxs)(`div`, {
              className: h(
                k.controls,
                `absolute inset-x-0 bottom-0 flex min-w-0 items-center gap-2 px-4 pb-2 text-media-foreground`,
              ),
              children: [(0, M.jsx)(`div`, { className: `min-w-0 flex-1`, children: H }), l],
            }))),
      (t[53] = A),
      (t[54] = l),
      (t[55] = u),
      (t[56] = H),
      (t[57] = Z))
    : (Z = t[57]);
  let Q;
  t[58] !== he || t[59] !== X || t[60] !== Z
    ? ((Q = (0, M.jsxs)(`div`, { className: X, children: [Z, he] })),
      (t[58] = he),
      (t[59] = X),
      (t[60] = Z),
      (t[61] = Q))
    : (Q = t[61]);
  let $;
  t[62] !== G || t[63] !== Y || t[64] !== Q
    ? (($ = (0, M.jsxs)(`div`, { className: G, children: [Y, Q] })),
      (t[62] = G),
      (t[63] = Y),
      (t[64] = Q),
      (t[65] = $))
    : ($ = t[65]);
  let be;
  return (
    t[66] !== $ || t[67] !== W || t[68] !== _e || t[69] !== g
      ? ((be = (0, M.jsx)(`div`, {
          className: W,
          "data-has-timeline": _e,
          "data-variant": g,
          children: $,
        })),
        (t[66] = $),
        (t[67] = W),
        (t[68] = _e),
        (t[69] = g),
        (t[70] = be))
      : (be = t[70]),
    be
  );
}
var fe, pe, M;
function N() {
  return (N = e(() => {
    ((fe = u()), r(), g(), a(), (pe = v()), l(), y(), S(), oe(), C(), x(), A(), (M = m()));
  }))();
}
function P(e) {
  let n = (0, F.c)(29),
    { conversationId: r, liveView: i, onOpen: a, screenshots: o, variant: te } = e,
    s = te === void 0 ? `compact` : te,
    c = t(_),
    l = ee(w, r),
    u;
  n[0] !== l || n[1] !== o ? ((u = le(l, o)), (n[0] = l), (n[1] = o), (n[2] = u)) : (u = n[2]);
  let f = u,
    p;
  n[3] !== r || n[4] !== l || n[5] !== c || n[6] !== s
    ? ((p =
        s === `expanded`
          ? (0, I.jsx)(d, {
              className: `relative`,
              "aria-pressed": l.mode === `live`,
              color: l.mode === `live` ? `mediaSolid` : `mediaSubtle`,
              size: `compact`,
              onClick: () => {
                c.set(w, r, { mode: `live` });
              },
              children: (0, I.jsx)(ne, {
                id: `chatgptConversations.cloudBrowser.sidePanel.live`,
                defaultMessage: `LIVE`,
                description: `Short uppercase button beside the cloud-browser activity timeline that switches from screenshot replay back to the live interactive browser`,
              }),
            })
          : null),
      (n[3] = r),
      (n[4] = l),
      (n[5] = c),
      (n[6] = s),
      (n[7] = p))
    : (p = n[7]);
  let m = p;
  if (o.length === 0 && s === `compact`) return i ?? m;
  let h;
  n[8] !== r || n[9] !== c || n[10] !== o || n[11] !== s
    ? ((h = (e) => {
        if (e === o.length || (s === `compact` && e === o.length - 1)) {
          c.set(w, r, { mode: `live` });
          return;
        }
        let t = o[e];
        t != null &&
          c.set(w, r, {
            mode: `replay`,
            selectedAssetPointer: t.image_asset_pointer.asset_pointer,
          });
      }),
      (n[8] = r),
      (n[9] = c),
      (n[10] = o),
      (n[11] = s),
      (n[12] = h))
    : (h = n[12]);
  let g = h,
    v = l.mode === `live`,
    y;
  n[13] !== f || n[14] !== r || n[15] !== a || n[16] !== c || n[17] !== o.length
    ? ((y =
        a == null
          ? void 0
          : () => {
              (f === o.length - 1 && c.set(w, r, { mode: `live` }), a());
            }),
      (n[13] = f),
      (n[14] = r),
      (n[15] = a),
      (n[16] = c),
      (n[17] = o.length),
      (n[18] = y))
    : (y = n[18]);
  let b;
  return (
    n[19] !== f ||
    n[20] !== r ||
    n[21] !== m ||
    n[22] !== i ||
    n[23] !== o ||
    n[24] !== g ||
    n[25] !== v ||
    n[26] !== y ||
    n[27] !== s
      ? ((b = (0, I.jsx)(
          j,
          {
            activeIndex: f,
            conversationId: r,
            isLive: v,
            liveButton: m,
            liveView: i,
            onOpen: y,
            onSelect: g,
            screenshots: o,
            variant: s,
          },
          r,
        )),
        (n[19] = f),
        (n[20] = r),
        (n[21] = m),
        (n[22] = i),
        (n[23] = o),
        (n[24] = g),
        (n[25] = v),
        (n[26] = y),
        (n[27] = s),
        (n[28] = b))
      : (b = n[28]),
    b
  );
}
var F, I;
function L() {
  return (L = e(() => {
    ((F = u()), a(), l(), o(), f(), N(), T(), (I = m()));
  }))();
}
export { L as n, P as t };
//# sourceMappingURL=cloud-browser-preview-98ee27022f4c.js.map
