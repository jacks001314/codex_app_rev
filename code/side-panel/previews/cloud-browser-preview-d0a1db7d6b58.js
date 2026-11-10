import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as ee,
  AMt as n,
  Amn as r,
  Cpn as te,
  Dmt as i,
  MMt as a,
  N3t as ne,
  O3t as o,
  Opn as s,
  Rht as c,
  Rpn as l,
  Spn as u,
  _gt as d,
  d_t as f,
  f_t as p,
  fxt as m,
  gRt as re,
  hmn as h,
  jMt as g,
  kMt as _,
  kmn as v,
  kmt as y,
  l_t as ie,
  mxt as b,
  p_t as ae,
  xRt as x,
  zpn as S,
} from "./app-initial-f094ef01c64d.js";
import {
  GE as oe,
  JE as C,
  KE as se,
  WE as ce,
  Xl as le,
  Yl as ue,
  gl as w,
  qE as de,
  vl as fe,
  yl as T,
} from "./app-primary-4c40d73a1074.js";
var pe,
  me,
  E,
  D,
  O,
  k,
  A = e(() => {
    ((pe = `_preview_14i6q_2`),
      (me = `_controls_14i6q_2`),
      (E = `_hostname_14i6q_2`),
      (D = `_surface_14i6q_2`),
      (O = `_loading_14i6q_2`),
      (k = {
        preview: pe,
        controls: me,
        hostname: E,
        surface: D,
        loading: O,
        "show-loading": `_show-loading_14i6q_1`,
      }));
  });
function j(e) {
  let t = (0, he.c)(63),
    {
      activeIndex: n,
      conversationId: r,
      isLive: i,
      liveButton: a,
      liveView: o,
      onOpen: u,
      onSelect: d,
      screenshots: p,
      variant: h,
    } = e,
    _ = ee(re),
    v = s(),
    b = ne(c, r),
    x = p[n],
    S = x?.image_asset_pointer.asset_pointer ?? ``,
    C;
  t[0] !== _ || t[1] !== b
    ? ((C = b == null ? void 0 : ue(_.get(m), b)), (t[0] = _), (t[1] = b), (t[2] = C))
    : (C = t[2]);
  let { dataUrl: le, isError: w, src: fe } = y(S, C),
    [T, pe] = (0, M.useState)(null),
    [me, E] = (0, M.useState)(null),
    [D, O] = (0, M.useState)(!1);
  if (x == null || b == null) return o ?? a;
  let A = le ?? fe,
    j = w || me === S,
    P = o == null ? T?.current.screenshot : x,
    F;
  t[3] === P ? (F = t[4]) : ((F = P == null ? null : ie(P)), (t[3] = P), (t[4] = F));
  let I = F,
    L;
  t[5] === P ? (L = t[6]) : ((L = P != null && ae(P)), (t[5] = P), (t[6] = L));
  let R = L,
    ge = !j && P?.image_asset_pointer.asset_pointer !== S,
    z = p.length - +(h === `compact`),
    B = h === `expanded` ? P?.tool_summary : void 0,
    V;
  t[7] !== n ||
  t[8] !== v ||
  t[9] !== i ||
  t[10] !== D ||
  t[11] !== z ||
  t[12] !== d ||
  t[13] !== p ||
  t[14] !== h
    ? ((V =
        z > 0
          ? (0, N.jsxs)(oe, {
              className: `relative flex h-6 w-full touch-none items-center`,
              max: z,
              min: 0,
              step: 1,
              value: [h === `expanded` && i ? z : n],
              onBlur: () => O(!1),
              onKeyDown: () => O(!1),
              onPointerDown: () => O(!0),
              onValueChange: (e) => {
                let [t] = e;
                t != null && d(t);
              },
              children: [
                (0, N.jsxs)(de, {
                  className: `relative h-2 grow cursor-interaction rounded-full bg-media-foreground/40`,
                  children: [
                    (0, N.jsx)(`span`, {
                      "aria-hidden": !0,
                      className: `pointer-events-none absolute inset-x-2 top-1/2`,
                      children: f(p).map((e) =>
                        (0, N.jsx)(
                          `span`,
                          {
                            className: `absolute size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-media-foreground/75`,
                            style: { left: `${(e / z) * 100}%` },
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, N.jsx)(ce, {
                      className: `absolute h-full rounded-full bg-media-foreground/90`,
                    }),
                  ],
                }),
                (0, N.jsx)(se, {
                  "aria-label": v.formatMessage({
                    id: `chatgptConversations.cloudBrowser.preview.timeline`,
                    defaultMessage: `Cloud browser activity timeline`,
                    description: `Accessible label for the slider that replays screenshots captured while a ChatGPT Work task uses its cloud browser`,
                  }),
                  className: l(
                    `block size-4 cursor-interaction rounded-full border border-default bg-media-foreground shadow-md transition-transform duration-basic focus-visible:outline-none active:scale-110 motion-reduce:transition-none`,
                    !D && `focus-visible:ring-2 focus-visible:ring-ring`,
                  ),
                }),
              ],
            })
          : null),
      (t[7] = n),
      (t[8] = v),
      (t[9] = i),
      (t[10] = D),
      (t[11] = z),
      (t[12] = d),
      (t[13] = p),
      (t[14] = h),
      (t[15] = V))
    : (V = t[15]);
  let H = V,
    U;
  t[16] !== I ||
  t[17] !== v ||
  t[18] !== i ||
  t[19] !== ge ||
  t[20] !== R ||
  t[21] !== S ||
  t[22] !== B ||
  t[23] !== h
    ? ((U =
        !(h === `expanded` && i) && (I != null || R || B != null)
          ? (0, N.jsx)(`div`, {
              className: l(
                k.hostname,
                `pointer-events-none absolute start-2 end-2 bottom-2 flex min-w-0 transition-transform duration-relaxed ease-enter motion-reduce:transition-none`,
              ),
              children: (0, N.jsxs)(`span`, {
                className: `flex min-w-0 items-center rounded-md bg-media-background/50 px-2 py-1 text-xs font-medium text-media-foreground/70 shadow-sm backdrop-blur-sm`,
                children: [
                  (0, N.jsxs)(`span`, {
                    className: `flex min-w-0 items-center gap-2`,
                    children: [
                      I != null || R
                        ? (0, N.jsx)(`span`, {
                            className: `truncate`,
                            children: R
                              ? (0, N.jsx)(te, {
                                  id: `chatgptConversations.cloudBrowser.preview.sites`,
                                  defaultMessage: `Sites`,
                                  description: `Product name shown below a cloud-browser preview of an unpublished ChatGPT Sites website`,
                                })
                              : I,
                          })
                        : null,
                      B == null
                        ? null
                        : (0, N.jsxs)(N.Fragment, {
                            children: [
                              I != null || R
                                ? (0, N.jsx)(`span`, {
                                    "aria-hidden": !0,
                                    className: `before:content-['·']`,
                                  })
                                : null,
                              (0, N.jsx)(`span`, {
                                className: `truncate text-media-foreground`,
                                children: B,
                              }),
                            ],
                          }),
                    ],
                  }),
                  ge
                    ? (0, N.jsx)(
                        `span`,
                        {
                          "aria-label": v.formatMessage({
                            id: `chatgptConversations.cloudBrowser.preview.loading`,
                            defaultMessage: `Loading browser screenshot`,
                            description: `Accessible status beside the cloud browser hostname while the selected replay screenshot loads; the previous screenshot stays visible`,
                          }),
                          className: l(
                            k.loading,
                            `flex w-0 shrink-0 overflow-hidden text-media-foreground`,
                          ),
                          role: `status`,
                          children: (0, N.jsx)(g, { className: `icon-2xs` }),
                        },
                        S,
                      )
                    : null,
                ],
              }),
            })
          : null),
      (t[16] = I),
      (t[17] = v),
      (t[18] = i),
      (t[19] = ge),
      (t[20] = R),
      (t[21] = S),
      (t[22] = B),
      (t[23] = h),
      (t[24] = U))
    : (U = t[24]);
  let _e = U,
    ve = h === `compact` ? `w-full rounded-xl` : `flex-1`,
    W;
  t[25] === ve
    ? (W = t[26])
    : ((W = l(k.preview, `relative flex min-h-0 min-w-0 flex-col select-none`, ve)),
      (t[25] = ve),
      (t[26] = W));
  let ye = H != null || void 0,
    be = h === `compact` ? `border border-default bg-surface` : `bg-media-background`,
    G;
  t[27] === be
    ? (G = t[28])
    : ((G = l(k.surface, `relative flex min-h-0 flex-1 flex-col overflow-clip`, be)),
      (t[27] = be),
      (t[28] = G));
  let xe = h === `compact` ? `absolute inset-0` : `relative flex min-h-0 flex-1`,
    K;
  t[29] !== T || t[30] !== j || t[31] !== o || t[32] !== h
    ? ((K =
        o ??
        (T == null
          ? (0, N.jsx)(`div`, {
              className: l(
                `absolute inset-0 flex items-center justify-center p-4 text-center text-xs`,
                h === `compact` ? `text-secondary` : `text-media-foreground/70`,
              ),
              role: `status`,
              children: j
                ? (0, N.jsx)(te, {
                    id: `chatgptConversations.cloudBrowser.preview.loadFailed`,
                    defaultMessage: `Couldn’t load browser screenshot`,
                    description: `Status inside the cloud browser preview when its first screenshot cannot be downloaded or decoded`,
                  })
                : (0, N.jsx)(g, { className: `icon-sm` }),
            })
          : [T.previous, T.current].map((e) =>
              e == null
                ? null
                : (0, N.jsx)(
                    `img`,
                    {
                      alt: ``,
                      className: l(
                        `absolute inset-0 size-full`,
                        h === `compact`
                          ? `object-cover object-top`
                          : `bg-media-background object-contain`,
                      ),
                      decoding: `async`,
                      draggable: !1,
                      src: e.src,
                    },
                    e.screenshot.image_asset_pointer.asset_pointer,
                  ),
            ))),
      (t[29] = T),
      (t[30] = j),
      (t[31] = o),
      (t[32] = h),
      (t[33] = K))
    : (K = t[33]);
  let q;
  t[34] !== A || t[35] !== S || t[36] !== x
    ? ((q =
        A == null
          ? null
          : (0, N.jsx)(
              `img`,
              {
                alt: ``,
                "aria-hidden": !0,
                className: `pointer-events-none absolute size-px opacity-0`,
                decoding: `async`,
                src: A,
                onError: () => E(S),
                onLoad: (e) => {
                  let t = e.currentTarget;
                  t.decode().then(
                    () => {
                      t.isConnected &&
                        (E(null),
                        pe((e) =>
                          e?.current.screenshot.image_asset_pointer.asset_pointer === S
                            ? e
                            : { current: { screenshot: x, src: A }, previous: e?.current ?? null },
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
      (t[34] = A),
      (t[35] = S),
      (t[36] = x),
      (t[37] = q))
    : (q = t[37]);
  let J;
  t[38] !== v || t[39] !== o || t[40] !== u
    ? ((J =
        u == null || o != null
          ? null
          : (0, N.jsx)(`button`, {
              "aria-label": v.formatMessage({
                id: `chatgptConversations.cloudBrowser.preview.open`,
                defaultMessage: `Open cloud browser`,
                description: `Accessible label for the cloud-browser screenshot preview; activating it opens the larger browser side panel`,
              }),
              className: `absolute inset-0 cursor-interaction focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
              type: `button`,
              onClick: u,
            })),
      (t[38] = v),
      (t[39] = o),
      (t[40] = u),
      (t[41] = J))
    : (J = t[41]);
  let Y;
  t[42] !== xe || t[43] !== K || t[44] !== q || t[45] !== J
    ? ((Y = (0, N.jsxs)(`div`, { className: xe, children: [K, q, J] })),
      (t[42] = xe),
      (t[43] = K),
      (t[44] = q),
      (t[45] = J),
      (t[46] = Y))
    : (Y = t[46]);
  let Se = h === `expanded` ? `relative h-16 shrink-0` : `contents`,
    X;
  t[47] !== a || t[48] !== H
    ? ((X =
        H == null
          ? a
          : (0, N.jsxs)(`div`, {
              className: l(
                k.controls,
                `absolute inset-x-0 bottom-0 flex min-w-0 items-center gap-2 px-4 pb-2 text-media-foreground`,
              ),
              children: [(0, N.jsx)(`div`, { className: `min-w-0 flex-1`, children: H }), a],
            })),
      (t[47] = a),
      (t[48] = H),
      (t[49] = X))
    : (X = t[49]);
  let Z;
  t[50] !== _e || t[51] !== Se || t[52] !== X
    ? ((Z = (0, N.jsxs)(`div`, { className: Se, children: [X, _e] })),
      (t[50] = _e),
      (t[51] = Se),
      (t[52] = X),
      (t[53] = Z))
    : (Z = t[53]);
  let Q;
  t[54] !== G || t[55] !== Y || t[56] !== Z
    ? ((Q = (0, N.jsxs)(`div`, { className: G, children: [Y, Z] })),
      (t[54] = G),
      (t[55] = Y),
      (t[56] = Z),
      (t[57] = Q))
    : (Q = t[57]);
  let $;
  return (
    t[58] !== Q || t[59] !== W || t[60] !== ye || t[61] !== h
      ? (($ = (0, N.jsx)(`div`, {
          className: W,
          "data-has-timeline": ye,
          "data-variant": h,
          children: Q,
        })),
        (t[58] = Q),
        (t[59] = W),
        (t[60] = ye),
        (t[61] = h),
        (t[62] = $))
      : ($ = t[62]),
    $
  );
}
var he,
  M,
  N,
  P = e(() => {
    ((he = v()),
      C(),
      S(),
      o(),
      (M = t(r(), 1)),
      u(),
      a(),
      x(),
      i(),
      b(),
      le(),
      d(),
      p(),
      A(),
      (N = h()));
  });
function F(e) {
  let t = (0, I.c)(29),
    { conversationId: n, liveView: r, onOpen: i, screenshots: a, variant: o } = e,
    s = o === void 0 ? `compact` : o,
    c = ee(re),
    l = ne(w, n),
    u;
  t[0] !== l || t[1] !== a ? ((u = fe(l, a)), (t[0] = l), (t[1] = a), (t[2] = u)) : (u = t[2]);
  let d = u,
    f;
  t[3] !== n || t[4] !== l || t[5] !== c || t[6] !== s
    ? ((f =
        s === `expanded`
          ? (0, L.jsx)(_, {
              className: `relative`,
              "aria-pressed": l.mode === `live`,
              color: l.mode === `live` ? `mediaSolid` : `mediaSubtle`,
              size: `compact`,
              onClick: () => {
                c.set(w, n, { mode: `live` });
              },
              children: (0, L.jsx)(te, {
                id: `chatgptConversations.cloudBrowser.sidePanel.live`,
                defaultMessage: `LIVE`,
                description: `Short uppercase button beside the cloud-browser activity timeline that switches from screenshot replay back to the live interactive browser`,
              }),
            })
          : null),
      (t[3] = n),
      (t[4] = l),
      (t[5] = c),
      (t[6] = s),
      (t[7] = f))
    : (f = t[7]);
  let p = f;
  if (a.length === 0) return r ?? p;
  let m;
  t[8] !== n || t[9] !== c || t[10] !== a || t[11] !== s
    ? ((m = (e) => {
        if (e === a.length || (s === `compact` && e === a.length - 1)) {
          c.set(w, n, { mode: `live` });
          return;
        }
        let t = a[e];
        t != null &&
          c.set(w, n, {
            mode: `replay`,
            selectedAssetPointer: t.image_asset_pointer.asset_pointer,
          });
      }),
      (t[8] = n),
      (t[9] = c),
      (t[10] = a),
      (t[11] = s),
      (t[12] = m))
    : (m = t[12]);
  let h = m,
    g = l.mode === `live`,
    v;
  t[13] !== d || t[14] !== n || t[15] !== i || t[16] !== c || t[17] !== a.length
    ? ((v =
        i == null
          ? void 0
          : () => {
              (d === a.length - 1 && c.set(w, n, { mode: `live` }), i());
            }),
      (t[13] = d),
      (t[14] = n),
      (t[15] = i),
      (t[16] = c),
      (t[17] = a.length),
      (t[18] = v))
    : (v = t[18]);
  let y;
  return (
    t[19] !== d ||
    t[20] !== n ||
    t[21] !== p ||
    t[22] !== r ||
    t[23] !== a ||
    t[24] !== h ||
    t[25] !== g ||
    t[26] !== v ||
    t[27] !== s
      ? ((y = (0, L.jsx)(
          j,
          {
            activeIndex: d,
            conversationId: n,
            isLive: g,
            liveButton: p,
            liveView: r,
            onOpen: v,
            onSelect: h,
            screenshots: a,
            variant: s,
          },
          n,
        )),
        (t[19] = d),
        (t[20] = n),
        (t[21] = p),
        (t[22] = r),
        (t[23] = a),
        (t[24] = h),
        (t[25] = g),
        (t[26] = v),
        (t[27] = s),
        (t[28] = y))
      : (y = t[28]),
    y
  );
}
var I,
  L,
  R = e(() => {
    ((I = v()), o(), u(), n(), x(), P(), T(), (L = h()));
  });
export { R as n, F as t };
//# sourceMappingURL=cloud-browser-preview-d0a1db7d6b58.js.map
