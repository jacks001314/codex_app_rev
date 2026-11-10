import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BY as t,
  DB as n,
  FBt as r,
  LNt as i,
  MNt as a,
  NNt as o,
  OB as s,
  PBt as c,
  XOt as l,
  Y3 as u,
  Z3 as d,
  okt as f,
  zY as p,
} from "./app-shared-2feb3d4c6fcc.js";
import { g9t as m, m9t as h } from "./app-initial-ad16eaadf81f.js";
import { El as g, Tl as _ } from "./app-primary-3e00728c2a4c.js";
import { n as v, t as y } from "./content-chat-surface-4e82aae84549.js";
import { r as b, t as x } from "./composer-replacement-2e2906141020.js";
function S(e) {
  let r = (0, T.c)(29),
    {
      assetName: i,
      bottomContent: o,
      children: s,
      composerPresentation: c,
      contentOwnsHeader: l,
      contentRef: d,
      endContent: p,
      headerVariant: m,
      onClose: h,
      reserveBottomContentSpace: g,
      titleEndContent: v,
    } = e,
    y = l !== void 0 && l,
    b = g === void 0 || g,
    x = f(),
    S;
  r[0] === h ? (S = r[1]) : ((S = () => h()), (r[0] = h), (r[1] = S));
  let C = (0, E.useEffectEvent)(S),
    w;
  r[2] === C
    ? (w = r[3])
    : ((w = () => {
        let e,
          t = (t) => {
            t.key !== `Escape` ||
              t.isComposing ||
              t.keyCode === 229 ||
              (clearTimeout(e),
              (e = setTimeout(() => {
                ((e = void 0), t.defaultPrevented || C());
              }, 0)));
          };
        return (
          window.addEventListener(`keydown`, t, { capture: !0 }),
          () => {
            (window.removeEventListener(`keydown`, t, { capture: !0 }), clearTimeout(e));
          }
        );
      }),
      (r[2] = C),
      (r[3] = w));
  let O;
  (r[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = []), (r[4] = O)) : (O = r[4]),
    (0, E.useEffect)(w, O));
  let k =
      c === `inline` &&
      `pt-[var(--right-panel-composer-overlay-top-reserve,0px)] pb-[var(--right-panel-composer-overlay-reserve,0px)]`,
    A;
  r[5] === k
    ? (A = r[6])
    : ((A = a(`relative flex h-full min-h-0 flex-col bg-surface`, k)), (r[5] = k), (r[6] = A));
  let j;
  r[7] !== i || r[8] !== y || r[9] !== p || r[10] !== m || r[11] !== x || r[12] !== h || r[13] !== v
    ? ((j = y
        ? null
        : (0, D.jsxs)(`div`, {
            className: a(
              `flex h-toolbar shrink-0 items-center justify-between gap-4 border-b border-subtle px-3`,
              m === `document` && `bg-surface-elevated-secondary`,
            ),
            children: [
              (0, D.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  (0, D.jsx)(u, {
                    "aria-label": x.formatMessage({
                      id: `appgenPage.filePreview.close`,
                      defaultMessage: `Close preview`,
                      description: `Accessible label for closing a Library file preview`,
                    }),
                    color: `ghost`,
                    size: `toolbar`,
                    uniform: !0,
                    onClick: h,
                    children: (0, D.jsx)(n, { asset: t }),
                  }),
                  (0, D.jsx)(`div`, { className: `truncate text-sm font-medium text-default`, children: i }),
                  v,
                ],
              }),
              p,
            ],
          })),
      (r[7] = i),
      (r[8] = y),
      (r[9] = p),
      (r[10] = m),
      (r[11] = x),
      (r[12] = h),
      (r[13] = v),
      (r[14] = j))
    : (j = r[14]);
  let M =
      o == null || c !== `overlay` || !b
        ? `h-full`
        : `h-[calc(100%_-_var(--right-panel-composer-overlay-reserve,0px))]`,
    N;
  r[15] === M ? (N = r[16]) : ((N = a(`min-h-0`, M)), (r[15] = M), (r[16] = N));
  let P;
  r[17] !== s || r[18] !== d || r[19] !== N
    ? ((P = (0, D.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, D.jsx)(`div`, { ref: d, className: N, children: s }),
      })),
      (r[17] = s),
      (r[18] = d),
      (r[19] = N),
      (r[20] = P))
    : (P = r[20]);
  let F;
  r[21] !== o || r[22] !== P || r[23] !== A || r[24] !== j
    ? ((F = (0, D.jsxs)(`div`, { className: A, children: [j, P, o] })),
      (r[21] = o),
      (r[22] = P),
      (r[23] = A),
      (r[24] = j),
      (r[25] = F))
    : (F = r[25]);
  let I;
  return (
    r[26] !== h || r[27] !== F
      ? ((I = (0, D.jsx)(_, { value: h, children: F })), (r[26] = h), (r[27] = F), (r[28] = I))
      : (I = r[28]),
    I
  );
}
function C(e) {
  let t = (0, T.c)(4),
    { children: n, isHidden: r } = e,
    i = r !== void 0 && r,
    a = (0, E.useContext)(h),
    o;
  return (
    t[0] !== n || t[1] !== i || t[2] !== a
      ? ((o = (0, D.jsx)(x, {
          children: (e) => {
            let t = i || !e;
            return a == null
              ? (0, D.jsx)(`div`, { className: `shrink-0 p-3`, hidden: t, inert: t, children: n(void 0) })
              : (0, D.jsx)(y, {
                  composerOnly: !0,
                  isHidden: t,
                  persistPresentation: !1,
                  reserveContent: !1,
                  children: n,
                });
          },
        })),
        (t[0] = n),
        (t[1] = i),
        (t[2] = a),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function w(e) {
  let t = (0, T.c)(8),
    { children: n, presentation: r } = e,
    i = r === `footer` ? `bg-surface-card px-3 pt-1 pb-4 sm:px-6 sm:pt-4 sm:pb-6` : r === `inline` && `p-3`,
    o;
  t[0] === i ? (o = t[1]) : ((o = a(`shrink-0`, i)), (t[0] = i), (t[1] = o));
  let s = r === `overlay` ? `floating` : `pane`,
    c;
  t[2] !== n || t[3] !== s
    ? ((c = (0, D.jsx)(y, { composerOnly: !0, placement: s, children: n })),
      (t[2] = n),
      (t[3] = s),
      (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] !== o || t[6] !== c
      ? ((l = (0, D.jsx)(`div`, { className: o, children: c })), (t[5] = o), (t[6] = c), (t[7] = l))
      : (l = t[7]),
    l
  );
}
var T, E, D;
function O() {
  return (O = e(() => {
    ((T = c()), p(), o(), (E = r()), l(), m(), v(), g(), d(), s(), b(), (D = i()));
  }))();
}
export { O as i, C as n, S as r, w as t };
//# sourceMappingURL=preview-layout-ada06d877162.js.map
