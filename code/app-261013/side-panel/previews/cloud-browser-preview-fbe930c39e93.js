import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  COt as n,
  IDt as ee,
  Ixt as r,
  Pxt as i,
  SOt as a,
  TOt as o,
  VDt as s,
  _Mt as c,
  gMt as l,
  i3 as u,
  jDt as d,
  r3 as f,
  t3 as p,
  vzt as m,
  wOt as h,
  xMt as g,
  xOt as te,
  yzt as _,
  zxt as ne,
} from "./app-shared-bbfeca5e5737.js";
import {
  AXn as v,
  Cwr as y,
  Fnn as re,
  Inn as b,
  MXn as ie,
  OXn as ae,
  QGn as x,
  gwr as S,
  jXn as C,
  nKn as oe,
  pZn as se,
  yjn as ce,
} from "./app-initial-5851df3f6cb1.js";
import { Is as le, Ls as ue, Ps as w } from "./app-primary-fe8a450b3b04.js";
var de, fe, T, E, D, O;
function k() {
  return (k = e(() => {
    ((de = `_preview_1t5j6_2`),
      (fe = `_controls_1t5j6_2`),
      (T = `_hostname_1t5j6_2`),
      (E = `_surface_1t5j6_2`),
      (D = `_loading_1t5j6_2`),
      (O = {
        preview: de,
        controls: fe,
        hostname: T,
        surface: E,
        loading: D,
        "show-loading": `_show-loading_1t5j6_2`,
      }));
  }))();
}
function A(e) {
  let t = (0, pe.c)(79),
    {
      activeIndex: r,
      conversationId: i,
      isLive: o,
      liveButton: c,
      liveView: u,
      onOpen: d,
      onSelect: p,
      screenshots: m,
      variant: g,
    } = e,
    _ = s(),
    y = ne(se, i),
    b = m[r],
    x = b?.browser_conversation_id ?? y,
    S = b?.image_asset_pointer.asset_pointer ?? ``,
    C;
  t[0] === x ? (C = t[1]) : ((C = x == null ? void 0 : re(x)), (t[0] = x), (t[1] = C));
  let { dataUrl: ce, isError: le, src: ue } = oe(S, C),
    [w, de] = (0, j.useState)(null),
    [fe, T] = (0, j.useState)(null),
    [E, D] = (0, j.useState)(!1),
    k = b != null && x != null;
  if (!k && g === `compact`) return u ?? c;
  let A = ce ?? ue,
    N = le || fe === S,
    P = u == null ? w?.current.screenshot : b,
    F;
  t[2] === P ? (F = t[3]) : ((F = P == null ? null : ae(P)), (t[2] = P), (t[3] = F));
  let I = F,
    L;
  t[4] === P ? (L = t[5]) : ((L = P != null && ie(P)), (t[4] = P), (t[5] = L));
  let R = L,
    me = !N && P?.image_asset_pointer.asset_pointer !== S,
    z = m.length - +(g === `compact`),
    B = g === `expanded` ? P?.tool_summary : void 0,
    he;
  t[6] !== r ||
  t[7] !== k ||
  t[8] !== _ ||
  t[9] !== o ||
  t[10] !== E ||
  t[11] !== z ||
  t[12] !== p ||
  t[13] !== m ||
  t[14] !== g
    ? ((he =
        k && z > 0
          ? (0, M.jsxs)(te, {
              className: `relative flex h-6 w-full touch-none items-center`,
              dir: `ltr`,
              max: z,
              min: 0,
              step: 1,
              value: [g === `expanded` && o ? z : r],
              onBlur: () => D(!1),
              onKeyDown: () => D(!1),
              onPointerDown: () => D(!0),
              onValueChange: (e) => {
                let [t] = e;
                t != null && p(t);
              },
              children: [
                (0, M.jsxs)(h, {
                  className: l(
                    `relative h-2 grow cursor-interaction rounded-full`,
                    g === `compact` ? `bg-media-foreground/40` : `bg-border`,
                  ),
                  children: [
                    (0, M.jsx)(`span`, {
                      "aria-hidden": !0,
                      className: `pointer-events-none absolute inset-x-2 top-1/2`,
                      children: v(m).map((e) =>
                        (0, M.jsx)(
                          `span`,
                          {
                            className: l(
                              `absolute size-1 -translate-x-1/2 -translate-y-1/2 rounded-full`,
                              g === `compact` ? `bg-media-foreground/75` : `bg-text/50`,
                            ),
                            style: { left: `${(e / z) * 100}%` },
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, M.jsx)(a, {
                      className: l(
                        `absolute h-full rounded-full`,
                        g === `compact` ? `bg-media-foreground/90` : `bg-text`,
                      ),
                    }),
                  ],
                }),
                (0, M.jsx)(n, {
                  "aria-label": _.formatMessage({
                    id: `chatgptConversations.cloudBrowser.preview.timeline`,
                    defaultMessage: `Cloud browser activity timeline`,
                    description: `Accessible label for the slider that replays screenshots captured while a ChatGPT Work task uses its cloud browser`,
                  }),
                  className: l(
                    `block size-4 cursor-interaction rounded-full border border-default shadow-md transition-transform duration-basic focus-visible:outline-none active:scale-110 motion-reduce:transition-none`,
                    g === `compact` ? `bg-media-foreground` : `bg-surface`,
                    !E && `focus-visible:ring-2 focus-visible:ring-ring`,
                  ),
                }),
              ],
            })
          : null),
      (t[6] = r),
      (t[7] = k),
      (t[8] = _),
      (t[9] = o),
      (t[10] = E),
      (t[11] = z),
      (t[12] = p),
      (t[13] = m),
      (t[14] = g),
      (t[15] = he))
    : (he = t[15]);
  let V = he,
    ge;
  t[16] !== k ||
  t[17] !== I ||
  t[18] !== _ ||
  t[19] !== o ||
  t[20] !== me ||
  t[21] !== R ||
  t[22] !== S ||
  t[23] !== B ||
  t[24] !== g
    ? ((ge =
        k && !(g === `expanded` && o) && (I != null || R || B != null)
          ? (0, M.jsx)(`div`, {
              className: l(
                O.hostname,
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
                              ? (0, M.jsx)(ee, {
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
                                ? (0, M.jsx)(`span`, { "aria-hidden": !0, className: `before:content-['·']` })
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
                          className: l(O.loading, `flex w-0 shrink-0 overflow-hidden text-media-foreground`),
                          role: `status`,
                          children: (0, M.jsx)(f, { className: `icon-2xs` }),
                        },
                        S,
                      )
                    : null,
                ],
              }),
            })
          : null),
      (t[16] = k),
      (t[17] = I),
      (t[18] = _),
      (t[19] = o),
      (t[20] = me),
      (t[21] = R),
      (t[22] = S),
      (t[23] = B),
      (t[24] = g),
      (t[25] = ge))
    : (ge = t[25]);
  let _e = ge,
    ve = g === `compact` ? `w-full rounded-xl` : `h-full`,
    H;
  t[26] === ve
    ? (H = t[27])
    : ((H = l(O.preview, `relative flex min-h-0 min-w-0 flex-col select-none`, ve)),
      (t[26] = ve),
      (t[27] = H));
  let ye = V != null || void 0,
    be = g === `compact` && `border border-default`,
    U;
  t[28] === be
    ? (U = t[29])
    : ((U = l(O.surface, `relative flex min-h-0 flex-1 flex-col overflow-clip bg-surface`, be)),
      (t[28] = be),
      (t[29] = U));
  let W;
  t[30] !== u || t[31] !== g
    ? ((W =
        g === `compact`
          ? `absolute inset-0`
          : l(`relative flex min-h-0 flex-1`, u == null && `m-4 overflow-hidden rounded-xl`)),
      (t[30] = u),
      (t[31] = g),
      (t[32] = W))
    : (W = t[32]);
  let G;
  t[33] !== k || t[34] !== w || t[35] !== N || t[36] !== u || t[37] !== g
    ? ((G =
        u ??
        (k &&
          (w == null
            ? (0, M.jsx)(`div`, {
                className: `absolute inset-0 flex items-center justify-center p-4 text-center text-xs text-secondary`,
                role: `status`,
                children: N
                  ? (0, M.jsx)(ee, {
                      id: `chatgptConversations.cloudBrowser.preview.loadFailed`,
                      defaultMessage: `Couldn’t load browser screenshot`,
                      description: `Status inside the cloud browser preview when its first screenshot cannot be downloaded or decoded`,
                    })
                  : (0, M.jsx)(f, { className: `icon-sm` }),
              })
            : [w.previous, w.current].map((e) =>
                e == null
                  ? null
                  : (0, M.jsx)(
                      `img`,
                      {
                        alt: ``,
                        className: l(
                          `absolute inset-0 size-full`,
                          g === `compact` ? `object-cover object-top` : `bg-surface object-contain`,
                        ),
                        decoding: `async`,
                        draggable: !1,
                        src: e.src,
                      },
                      e.screenshot.image_asset_pointer.asset_pointer,
                    ),
              )))),
      (t[33] = k),
      (t[34] = w),
      (t[35] = N),
      (t[36] = u),
      (t[37] = g),
      (t[38] = G))
    : (G = t[38]);
  let K;
  t[39] !== k || t[40] !== A || t[41] !== S || t[42] !== b
    ? ((K =
        A == null || !k
          ? null
          : (0, M.jsx)(
              `img`,
              {
                alt: ``,
                "aria-hidden": !0,
                className: `pointer-events-none absolute size-px opacity-0`,
                decoding: `async`,
                src: A,
                onError: () => T(S),
                onLoad: (e) => {
                  let t = e.currentTarget;
                  t.decode().then(
                    () => {
                      t.isConnected &&
                        (T(null),
                        de((e) =>
                          e?.current.screenshot.image_asset_pointer.asset_pointer === S
                            ? e
                            : { current: { screenshot: b, src: A }, previous: e?.current ?? null },
                        ));
                    },
                    () => {
                      t.isConnected && T(S);
                    },
                  );
                },
              },
              S,
            )),
      (t[39] = k),
      (t[40] = A),
      (t[41] = S),
      (t[42] = b),
      (t[43] = K))
    : (K = t[43]);
  let q;
  t[44] !== _ || t[45] !== u || t[46] !== d
    ? ((q =
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
      (t[44] = _),
      (t[45] = u),
      (t[46] = d),
      (t[47] = q))
    : (q = t[47]);
  let J;
  t[48] !== u || t[49] !== g
    ? ((J =
        g === `expanded` && u == null
          ? (0, M.jsx)(`div`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute inset-0 rounded-xl ring-1 ring-border ring-inset`,
            })
          : null),
      (t[48] = u),
      (t[49] = g),
      (t[50] = J))
    : (J = t[50]);
  let Y;
  t[51] !== W || t[52] !== G || t[53] !== K || t[54] !== q || t[55] !== J
    ? ((Y = (0, M.jsxs)(`div`, { className: W, children: [G, K, q, J] })),
      (t[51] = W),
      (t[52] = G),
      (t[53] = K),
      (t[54] = q),
      (t[55] = J),
      (t[56] = Y))
    : (Y = t[56]);
  let X;
  t[57] !== k || t[58] !== g
    ? ((X = g === `expanded` ? l(`relative shrink-0`, k && `h-16`) : `contents`),
      (t[57] = k),
      (t[58] = g),
      (t[59] = X))
    : (X = t[59]);
  let Z;
  t[60] !== k || t[61] !== c || t[62] !== u || t[63] !== V || t[64] !== g
    ? ((Z =
        (k || u == null) &&
        (V == null
          ? c
          : (0, M.jsxs)(`div`, {
              className: l(
                g === `compact` && O.controls,
                `absolute inset-x-0 bottom-0 flex min-w-0 items-center gap-2 px-4 pb-2`,
                g === `compact` ? `text-media-foreground` : `text-default`,
              ),
              children: [(0, M.jsx)(`div`, { className: `min-w-0 flex-1`, children: V }), c],
            }))),
      (t[60] = k),
      (t[61] = c),
      (t[62] = u),
      (t[63] = V),
      (t[64] = g),
      (t[65] = Z))
    : (Z = t[65]);
  let Q;
  t[66] !== _e || t[67] !== X || t[68] !== Z
    ? ((Q = (0, M.jsxs)(`div`, { className: X, children: [Z, _e] })),
      (t[66] = _e),
      (t[67] = X),
      (t[68] = Z),
      (t[69] = Q))
    : (Q = t[69]);
  let $;
  t[70] !== U || t[71] !== Y || t[72] !== Q
    ? (($ = (0, M.jsxs)(`div`, { className: U, children: [Y, Q] })),
      (t[70] = U),
      (t[71] = Y),
      (t[72] = Q),
      (t[73] = $))
    : ($ = t[73]);
  let xe;
  return (
    t[74] !== $ || t[75] !== H || t[76] !== ye || t[77] !== g
      ? ((xe = (0, M.jsx)(`div`, { className: H, "data-has-timeline": ye, "data-variant": g, children: $ })),
        (t[74] = $),
        (t[75] = H),
        (t[76] = ye),
        (t[77] = g),
        (t[78] = xe))
      : (xe = t[78]),
    xe
  );
}
var pe, j, M;
function N() {
  return (N = e(() => {
    ((pe = m()), o(), c(), i(), (j = _()), d(), u(), x(), b(), ce(), C(), k(), (M = g()));
  }))();
}
function P(e) {
  let n = (0, F.c)(29),
    { conversationId: i, liveView: a, onOpen: o, screenshots: s, variant: c } = e,
    l = c === void 0 ? `compact` : c,
    u = r(S),
    d = ne(w, i),
    f;
  n[0] !== d || n[1] !== s ? ((f = le(d, s)), (n[0] = d), (n[1] = s), (n[2] = f)) : (f = n[2]);
  let p = f,
    m;
  n[3] !== i || n[4] !== d || n[5] !== u || n[6] !== l
    ? ((m =
        l === `expanded`
          ? (0, I.jsx)(t, {
              className: `relative`,
              "aria-pressed": d.mode === `live`,
              color: d.mode === `live` ? `primary` : `secondary`,
              size: `compact`,
              onClick: () => {
                u.set(w, i, { mode: `live` });
              },
              children: (0, I.jsx)(ee, {
                id: `chatgptConversations.cloudBrowser.sidePanel.live`,
                defaultMessage: `LIVE`,
                description: `Short uppercase button beside the cloud-browser activity timeline that switches from screenshot replay back to the live interactive browser`,
              }),
            })
          : null),
      (n[3] = i),
      (n[4] = d),
      (n[5] = u),
      (n[6] = l),
      (n[7] = m))
    : (m = n[7]);
  let h = m;
  if (s.length === 0 && l === `compact`) return a ?? h;
  let g;
  n[8] !== i || n[9] !== u || n[10] !== s || n[11] !== l
    ? ((g = (e) => {
        if (e === s.length || (l === `compact` && e === s.length - 1)) {
          u.set(w, i, { mode: `live` });
          return;
        }
        let t = s[e];
        t != null &&
          u.set(w, i, { mode: `replay`, selectedAssetPointer: t.image_asset_pointer.asset_pointer });
      }),
      (n[8] = i),
      (n[9] = u),
      (n[10] = s),
      (n[11] = l),
      (n[12] = g))
    : (g = n[12]);
  let te = g,
    _ = d.mode === `live`,
    v;
  n[13] !== p || n[14] !== i || n[15] !== o || n[16] !== u || n[17] !== s.length
    ? ((v =
        o == null
          ? void 0
          : () => {
              (p === s.length - 1 && u.set(w, i, { mode: `live` }), o());
            }),
      (n[13] = p),
      (n[14] = i),
      (n[15] = o),
      (n[16] = u),
      (n[17] = s.length),
      (n[18] = v))
    : (v = n[18]);
  let y;
  return (
    n[19] !== p ||
    n[20] !== i ||
    n[21] !== h ||
    n[22] !== a ||
    n[23] !== s ||
    n[24] !== te ||
    n[25] !== _ ||
    n[26] !== v ||
    n[27] !== l
      ? ((y = (0, I.jsx)(
          A,
          {
            activeIndex: p,
            conversationId: i,
            isLive: _,
            liveButton: h,
            liveView: a,
            onOpen: v,
            onSelect: te,
            screenshots: s,
            variant: l,
          },
          i,
        )),
        (n[19] = p),
        (n[20] = i),
        (n[21] = h),
        (n[22] = a),
        (n[23] = s),
        (n[24] = te),
        (n[25] = _),
        (n[26] = v),
        (n[27] = l),
        (n[28] = y))
      : (y = n[28]),
    y
  );
}
var F, I;
function L() {
  return (L = e(() => {
    ((F = m()), i(), d(), p(), y(), N(), ue(), (I = g()));
  }))();
}
export { L as n, P as t };
//# sourceMappingURL=cloud-browser-preview-fbe930c39e93.js.map
