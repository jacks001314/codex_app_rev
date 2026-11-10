import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BJ as n,
  Mz as r,
  Nz as i,
  VDt as a,
  _Mt as o,
  gMt as s,
  jDt as c,
  t3 as l,
  vzt as u,
  xMt as d,
  yzt as f,
  zJ as p,
} from "./app-shared-bbfeca5e5737.js";
import { Y8t as m, q8t as h } from "./app-initial-5851df3f6cb1.js";
import { hl as g, ml as _ } from "./app-primary-fe8a450b3b04.js";
import { n as v, t as y } from "./content-quick-chat-overlay-fae2ee1c31a8.js";
import { r as b, t as x } from "./composer-replacement-2714774d7ad3.js";
function S(e) {
  let i = (0, T.c)(29),
    {
      assetName: o,
      bottomContent: c,
      children: l,
      composerPresentation: u,
      contentOwnsHeader: d,
      contentRef: f,
      endContent: p,
      headerVariant: m,
      onClose: h,
      reserveBottomContentSpace: g,
      titleEndContent: v,
    } = e,
    y = d !== void 0 && d,
    b = g === void 0 || g,
    x = a(),
    S;
  i[0] === h ? (S = i[1]) : ((S = () => h()), (i[0] = h), (i[1] = S));
  let C = (0, E.useEffectEvent)(S),
    w;
  i[2] === C
    ? (w = i[3])
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
      (i[2] = C),
      (i[3] = w));
  let O;
  (i[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = []), (i[4] = O)) : (O = i[4]),
    (0, E.useEffect)(w, O));
  let k =
      u === `inline` &&
      `pt-[var(--right-panel-composer-overlay-top-reserve,0px)] pb-[var(--right-panel-composer-overlay-reserve,0px)]`,
    A;
  i[5] === k
    ? (A = i[6])
    : ((A = s(`relative flex h-full min-h-0 flex-col bg-surface`, k)), (i[5] = k), (i[6] = A));
  let j;
  i[7] !== o || i[8] !== y || i[9] !== p || i[10] !== m || i[11] !== x || i[12] !== h || i[13] !== v
    ? ((j = y
        ? null
        : (0, D.jsxs)(`div`, {
            className: s(
              `flex h-toolbar shrink-0 items-center justify-between gap-4 border-b border-subtle px-3`,
              m === `document` && `bg-surface-elevated-secondary`,
            ),
            children: [
              (0, D.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  (0, D.jsx)(t, {
                    "aria-label": x.formatMessage({
                      id: `appgenPage.filePreview.close`,
                      defaultMessage: `Close preview`,
                      description: `Accessible label for closing a Library file preview`,
                    }),
                    color: `ghost`,
                    size: `toolbar`,
                    uniform: !0,
                    onClick: h,
                    children: (0, D.jsx)(r, { asset: n }),
                  }),
                  (0, D.jsx)(`div`, { className: `truncate text-sm font-medium text-default`, children: o }),
                  v,
                ],
              }),
              p,
            ],
          })),
      (i[7] = o),
      (i[8] = y),
      (i[9] = p),
      (i[10] = m),
      (i[11] = x),
      (i[12] = h),
      (i[13] = v),
      (i[14] = j))
    : (j = i[14]);
  let M =
      c == null || u !== `overlay` || !b
        ? `h-full`
        : `h-[calc(100%_-_var(--right-panel-composer-overlay-reserve,0px))]`,
    N;
  i[15] === M ? (N = i[16]) : ((N = s(`min-h-0`, M)), (i[15] = M), (i[16] = N));
  let P;
  i[17] !== l || i[18] !== f || i[19] !== N
    ? ((P = (0, D.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, D.jsx)(`div`, { ref: f, className: N, children: l }),
      })),
      (i[17] = l),
      (i[18] = f),
      (i[19] = N),
      (i[20] = P))
    : (P = i[20]);
  let F;
  i[21] !== c || i[22] !== P || i[23] !== A || i[24] !== j
    ? ((F = (0, D.jsxs)(`div`, { className: A, children: [j, P, c] })),
      (i[21] = c),
      (i[22] = P),
      (i[23] = A),
      (i[24] = j),
      (i[25] = F))
    : (F = i[25]);
  let I;
  return (
    i[26] !== h || i[27] !== F
      ? ((I = (0, D.jsx)(_, { value: h, children: F })), (i[26] = h), (i[27] = F), (i[28] = I))
      : (I = i[28]),
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
    a;
  t[0] === i ? (a = t[1]) : ((a = s(`shrink-0`, i)), (t[0] = i), (t[1] = a));
  let o = r === `overlay` ? `floating` : `pane`,
    c;
  t[2] !== n || t[3] !== o
    ? ((c = (0, D.jsx)(y, { composerOnly: !0, placement: o, children: n })),
      (t[2] = n),
      (t[3] = o),
      (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] !== a || t[6] !== c
      ? ((l = (0, D.jsx)(`div`, { className: a, children: c })), (t[5] = a), (t[6] = c), (t[7] = l))
      : (l = t[7]),
    l
  );
}
var T, E, D;
function O() {
  return (O = e(() => {
    ((T = u()), p(), o(), (E = f()), c(), m(), g(), l(), i(), v(), b(), (D = d()));
  }))();
}
export { O as i, C as n, S as r, w as t };
//# sourceMappingURL=preview-layout-654555235726.js.map
