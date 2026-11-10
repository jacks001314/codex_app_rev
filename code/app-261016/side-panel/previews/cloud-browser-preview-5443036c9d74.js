import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  Bkt as r,
  FBt as i,
  Hkt as a,
  LNt as o,
  MNt as s,
  NNt as c,
  PBt as l,
  Ukt as u,
  Vkt as d,
  Wkt as f,
  XOt as p,
  Y3 as ee,
  Z3 as m,
  ZSt as h,
  e6 as g,
  nCt as te,
  okt as ne,
  tkt as re,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as _,
  MOr as ie,
  TYn as v,
  VPn as y,
  X$n as b,
  Y$n as ae,
  Z$n as oe,
  non as se,
  q$n as ce,
  ron as x,
  xYn as S,
  zOr as le,
} from "./app-initial-ad16eaadf81f.js";
import { Gs as C, Js as ue, qs as w } from "./app-primary-3e00728c2a4c.js";
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
  let n = (0, pe.c)(79),
    {
      activeIndex: i,
      conversationId: o,
      isLive: c,
      liveButton: l,
      liveView: f,
      onOpen: p,
      onSelect: ee,
      screenshots: m,
      variant: h,
    } = e,
    g = ne(),
    ie = te(_, o),
    y = m[i],
    b = y?.browser_conversation_id ?? ie,
    x = y?.image_asset_pointer.asset_pointer ?? ``,
    S;
  n[0] === b ? (S = n[1]) : ((S = b == null ? void 0 : se(b)), (n[0] = b), (n[1] = S));
  let { dataUrl: le, isError: C, src: ue } = v(x, S),
    [w, de] = (0, j.useState)(null),
    [fe, T] = (0, j.useState)(null),
    [E, D] = (0, j.useState)(!1),
    k = y != null && b != null;
  if (!k && h === `compact`) return f ?? l;
  let A = le ?? ue,
    N = C || fe === x,
    P = f == null ? w?.current.screenshot : y,
    F;
  n[2] === P ? (F = n[3]) : ((F = P == null ? null : ce(P)), (n[2] = P), (n[3] = F));
  let I = F,
    L;
  n[4] === P ? (L = n[5]) : ((L = P != null && oe(P)), (n[4] = P), (n[5] = L));
  let R = L,
    me = !N && P?.image_asset_pointer.asset_pointer !== x,
    z = m.length - +(h === `compact`),
    B = h === `expanded` ? P?.tool_summary : void 0,
    he;
  n[6] !== i ||
  n[7] !== k ||
  n[8] !== g ||
  n[9] !== c ||
  n[10] !== E ||
  n[11] !== z ||
  n[12] !== ee ||
  n[13] !== m ||
  n[14] !== h
    ? ((he =
        k && z > 0
          ? (0, M.jsxs)(r, {
              className: `relative flex h-6 w-full touch-none items-center`,
              dir: `ltr`,
              max: z,
              min: 0,
              step: 1,
              value: [h === `expanded` && c ? z : i],
              onBlur: () => D(!1),
              onKeyDown: () => D(!1),
              onPointerDown: () => D(!0),
              onValueChange: (e) => {
                let [t] = e;
                t != null && ee(t);
              },
              children: [
                (0, M.jsxs)(u, {
                  className: s(
                    `relative h-2 grow cursor-interaction rounded-full`,
                    h === `compact` ? `bg-media-foreground/40` : `bg-border`,
                  ),
                  children: [
                    (0, M.jsx)(`span`, {
                      "aria-hidden": !0,
                      className: `pointer-events-none absolute inset-x-2 top-1/2`,
                      children: ae(m).map((e) =>
                        (0, M.jsx)(
                          `span`,
                          {
                            className: s(
                              `absolute size-1 -translate-x-1/2 -translate-y-1/2 rounded-full`,
                              h === `compact` ? `bg-media-foreground/75` : `bg-text/50`,
                            ),
                            style: { left: `${(e / z) * 100}%` },
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, M.jsx)(d, {
                      className: s(
                        `absolute h-full rounded-full`,
                        h === `compact` ? `bg-media-foreground/90` : `bg-text`,
                      ),
                    }),
                  ],
                }),
                (0, M.jsx)(a, {
                  "aria-label": g.formatMessage({
                    id: `chatgptConversations.cloudBrowser.preview.timeline`,
                    defaultMessage: `Cloud browser activity timeline`,
                    description: `Accessible label for the slider that replays screenshots captured while a ChatGPT Work task uses its cloud browser`,
                  }),
                  className: s(
                    `block size-4 cursor-interaction rounded-full border border-default shadow-md transition-transform duration-basic focus-visible:outline-none active:scale-110 motion-reduce:transition-none`,
                    h === `compact` ? `bg-media-foreground` : `bg-surface`,
                    !E && `focus-visible:ring-2 focus-visible:ring-ring`,
                  ),
                }),
              ],
            })
          : null),
      (n[6] = i),
      (n[7] = k),
      (n[8] = g),
      (n[9] = c),
      (n[10] = E),
      (n[11] = z),
      (n[12] = ee),
      (n[13] = m),
      (n[14] = h),
      (n[15] = he))
    : (he = n[15]);
  let V = he,
    ge;
  n[16] !== k ||
  n[17] !== I ||
  n[18] !== g ||
  n[19] !== c ||
  n[20] !== me ||
  n[21] !== R ||
  n[22] !== x ||
  n[23] !== B ||
  n[24] !== h
    ? ((ge =
        k && !(h === `expanded` && c) && (I != null || R || B != null)
          ? (0, M.jsx)(`div`, {
              className: s(
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
                              ? (0, M.jsx)(re, {
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
                          "aria-label": g.formatMessage({
                            id: `chatgptConversations.cloudBrowser.preview.loading`,
                            defaultMessage: `Loading browser screenshot`,
                            description: `Accessible status beside the cloud browser hostname while the selected replay screenshot loads; the previous screenshot stays visible`,
                          }),
                          className: s(O.loading, `flex w-0 shrink-0 overflow-hidden text-media-foreground`),
                          role: `status`,
                          children: (0, M.jsx)(t, { className: `icon-2xs` }),
                        },
                        x,
                      )
                    : null,
                ],
              }),
            })
          : null),
      (n[16] = k),
      (n[17] = I),
      (n[18] = g),
      (n[19] = c),
      (n[20] = me),
      (n[21] = R),
      (n[22] = x),
      (n[23] = B),
      (n[24] = h),
      (n[25] = ge))
    : (ge = n[25]);
  let _e = ge,
    ve = h === `compact` ? `w-full rounded-xl` : `h-full`,
    H;
  n[26] === ve
    ? (H = n[27])
    : ((H = s(O.preview, `relative flex min-h-0 min-w-0 flex-col select-none`, ve)),
      (n[26] = ve),
      (n[27] = H));
  let ye = V != null || void 0,
    be = h === `compact` && `border border-default`,
    U;
  n[28] === be
    ? (U = n[29])
    : ((U = s(O.surface, `relative flex min-h-0 flex-1 flex-col overflow-clip bg-surface`, be)),
      (n[28] = be),
      (n[29] = U));
  let W;
  n[30] !== f || n[31] !== h
    ? ((W =
        h === `compact`
          ? `absolute inset-0`
          : s(`relative flex min-h-0 flex-1`, f == null && `m-4 overflow-hidden rounded-xl`)),
      (n[30] = f),
      (n[31] = h),
      (n[32] = W))
    : (W = n[32]);
  let G;
  n[33] !== k || n[34] !== w || n[35] !== N || n[36] !== f || n[37] !== h
    ? ((G =
        f ??
        (k &&
          (w == null
            ? (0, M.jsx)(`div`, {
                className: `absolute inset-0 flex items-center justify-center p-4 text-center text-xs text-secondary`,
                role: `status`,
                children: N
                  ? (0, M.jsx)(re, {
                      id: `chatgptConversations.cloudBrowser.preview.loadFailed`,
                      defaultMessage: `Couldn’t load browser screenshot`,
                      description: `Status inside the cloud browser preview when its first screenshot cannot be downloaded or decoded`,
                    })
                  : (0, M.jsx)(t, { className: `icon-sm` }),
              })
            : [w.previous, w.current].map((e) =>
                e == null
                  ? null
                  : (0, M.jsx)(
                      `img`,
                      {
                        alt: ``,
                        className: s(
                          `absolute inset-0 size-full`,
                          h === `compact` ? `object-cover object-top` : `bg-surface object-contain`,
                        ),
                        decoding: `async`,
                        draggable: !1,
                        src: e.src,
                      },
                      e.screenshot.image_asset_pointer.asset_pointer,
                    ),
              )))),
      (n[33] = k),
      (n[34] = w),
      (n[35] = N),
      (n[36] = f),
      (n[37] = h),
      (n[38] = G))
    : (G = n[38]);
  let K;
  n[39] !== k || n[40] !== A || n[41] !== x || n[42] !== y
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
                onError: () => T(x),
                onLoad: (e) => {
                  let t = e.currentTarget;
                  t.decode().then(
                    () => {
                      t.isConnected &&
                        (T(null),
                        de((e) =>
                          e?.current.screenshot.image_asset_pointer.asset_pointer === x
                            ? e
                            : { current: { screenshot: y, src: A }, previous: e?.current ?? null },
                        ));
                    },
                    () => {
                      t.isConnected && T(x);
                    },
                  );
                },
              },
              x,
            )),
      (n[39] = k),
      (n[40] = A),
      (n[41] = x),
      (n[42] = y),
      (n[43] = K))
    : (K = n[43]);
  let q;
  n[44] !== g || n[45] !== f || n[46] !== p
    ? ((q =
        p == null || f != null
          ? null
          : (0, M.jsx)(`button`, {
              "aria-label": g.formatMessage({
                id: `chatgptConversations.cloudBrowser.preview.open`,
                defaultMessage: `Open cloud browser`,
                description: `Accessible label for the cloud-browser screenshot preview; activating it opens the larger browser side panel`,
              }),
              className: `absolute inset-0 cursor-interaction focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
              type: `button`,
              onClick: p,
            })),
      (n[44] = g),
      (n[45] = f),
      (n[46] = p),
      (n[47] = q))
    : (q = n[47]);
  let J;
  n[48] !== f || n[49] !== h
    ? ((J =
        h === `expanded` && f == null
          ? (0, M.jsx)(`div`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute inset-0 rounded-xl ring-1 ring-border ring-inset`,
            })
          : null),
      (n[48] = f),
      (n[49] = h),
      (n[50] = J))
    : (J = n[50]);
  let Y;
  n[51] !== W || n[52] !== G || n[53] !== K || n[54] !== q || n[55] !== J
    ? ((Y = (0, M.jsxs)(`div`, { className: W, children: [G, K, q, J] })),
      (n[51] = W),
      (n[52] = G),
      (n[53] = K),
      (n[54] = q),
      (n[55] = J),
      (n[56] = Y))
    : (Y = n[56]);
  let X;
  n[57] !== k || n[58] !== h
    ? ((X = h === `expanded` ? s(`relative shrink-0`, k && `h-16`) : `contents`),
      (n[57] = k),
      (n[58] = h),
      (n[59] = X))
    : (X = n[59]);
  let Z;
  n[60] !== k || n[61] !== l || n[62] !== f || n[63] !== V || n[64] !== h
    ? ((Z =
        (k || f == null) &&
        (V == null
          ? l
          : (0, M.jsxs)(`div`, {
              className: s(
                h === `compact` && O.controls,
                `absolute inset-x-0 bottom-0 flex min-w-0 items-center gap-2 px-4 pb-2`,
                h === `compact` ? `text-media-foreground` : `text-default`,
              ),
              children: [(0, M.jsx)(`div`, { className: `min-w-0 flex-1`, children: V }), l],
            }))),
      (n[60] = k),
      (n[61] = l),
      (n[62] = f),
      (n[63] = V),
      (n[64] = h),
      (n[65] = Z))
    : (Z = n[65]);
  let Q;
  n[66] !== _e || n[67] !== X || n[68] !== Z
    ? ((Q = (0, M.jsxs)(`div`, { className: X, children: [Z, _e] })),
      (n[66] = _e),
      (n[67] = X),
      (n[68] = Z),
      (n[69] = Q))
    : (Q = n[69]);
  let $;
  n[70] !== U || n[71] !== Y || n[72] !== Q
    ? (($ = (0, M.jsxs)(`div`, { className: U, children: [Y, Q] })),
      (n[70] = U),
      (n[71] = Y),
      (n[72] = Q),
      (n[73] = $))
    : ($ = n[73]);
  let xe;
  return (
    n[74] !== $ || n[75] !== H || n[76] !== ye || n[77] !== h
      ? ((xe = (0, M.jsx)(`div`, { className: H, "data-has-timeline": ye, "data-variant": h, children: $ })),
        (n[74] = $),
        (n[75] = H),
        (n[76] = ye),
        (n[77] = h),
        (n[78] = xe))
      : (xe = n[78]),
    xe
  );
}
var pe, j, M;
function N() {
  return (N = e(() => {
    ((pe = l()), f(), c(), h(), (j = i()), p(), g(), S(), x(), y(), b(), k(), (M = o()));
  }))();
}
function P(e) {
  let t = (0, F.c)(29),
    { conversationId: r, liveView: i, onOpen: a, screenshots: o, variant: s } = e,
    c = s === void 0 ? `compact` : s,
    l = n(ie),
    u = te(C, r),
    d;
  t[0] !== u || t[1] !== o ? ((d = w(u, o)), (t[0] = u), (t[1] = o), (t[2] = d)) : (d = t[2]);
  let f = d,
    p;
  t[3] !== r || t[4] !== u || t[5] !== l || t[6] !== c
    ? ((p =
        c === `expanded`
          ? (0, I.jsx)(ee, {
              className: `relative`,
              "aria-pressed": u.mode === `live`,
              color: u.mode === `live` ? `primary` : `secondary`,
              size: `compact`,
              onClick: () => {
                l.set(C, r, { mode: `live` });
              },
              children: (0, I.jsx)(re, {
                id: `chatgptConversations.cloudBrowser.sidePanel.live`,
                defaultMessage: `LIVE`,
                description: `Short uppercase button beside the cloud-browser activity timeline that switches from screenshot replay back to the live interactive browser`,
              }),
            })
          : null),
      (t[3] = r),
      (t[4] = u),
      (t[5] = l),
      (t[6] = c),
      (t[7] = p))
    : (p = t[7]);
  let m = p;
  if (o.length === 0 && c === `compact`) return i ?? m;
  let h;
  t[8] !== r || t[9] !== l || t[10] !== o || t[11] !== c
    ? ((h = (e) => {
        if (e === o.length || (c === `compact` && e === o.length - 1)) {
          l.set(C, r, { mode: `live` });
          return;
        }
        let t = o[e];
        t != null &&
          l.set(C, r, { mode: `replay`, selectedAssetPointer: t.image_asset_pointer.asset_pointer });
      }),
      (t[8] = r),
      (t[9] = l),
      (t[10] = o),
      (t[11] = c),
      (t[12] = h))
    : (h = t[12]);
  let g = h,
    ne = u.mode === `live`,
    _;
  t[13] !== f || t[14] !== r || t[15] !== a || t[16] !== l || t[17] !== o.length
    ? ((_ =
        a == null
          ? void 0
          : () => {
              (f === o.length - 1 && l.set(C, r, { mode: `live` }), a());
            }),
      (t[13] = f),
      (t[14] = r),
      (t[15] = a),
      (t[16] = l),
      (t[17] = o.length),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  return (
    t[19] !== f ||
    t[20] !== r ||
    t[21] !== m ||
    t[22] !== i ||
    t[23] !== o ||
    t[24] !== g ||
    t[25] !== ne ||
    t[26] !== _ ||
    t[27] !== c
      ? ((v = (0, I.jsx)(
          A,
          {
            activeIndex: f,
            conversationId: r,
            isLive: ne,
            liveButton: m,
            liveView: i,
            onOpen: _,
            onSelect: g,
            screenshots: o,
            variant: c,
          },
          r,
        )),
        (t[19] = f),
        (t[20] = r),
        (t[21] = m),
        (t[22] = i),
        (t[23] = o),
        (t[24] = g),
        (t[25] = ne),
        (t[26] = _),
        (t[27] = c),
        (t[28] = v))
      : (v = t[28]),
    v
  );
}
var F, I;
function L() {
  return (L = e(() => {
    ((F = l()), h(), p(), m(), le(), N(), ue(), (I = o()));
  }))();
}
export { L as n, P as t };
//# sourceMappingURL=cloud-browser-preview-5443036c9d74.js.map
