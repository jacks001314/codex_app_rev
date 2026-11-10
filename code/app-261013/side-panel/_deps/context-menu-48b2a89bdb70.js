import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  BE as n,
  Cot as r,
  FO as i,
  GO as a,
  IDt as o,
  Ixt as s,
  KO as c,
  Mz as l,
  Nz as u,
  Pxt as d,
  RE as f,
  RO as p,
  TJ as m,
  Tv as h,
  UE as g,
  VDt as _,
  hot as v,
  iO as y,
  jDt as b,
  lot as x,
  oot as S,
  rO as ee,
  sq as C,
  vzt as w,
  wot as T,
  wv as E,
  xMt as D,
  yzt as O,
  zE as te,
} from "./app-shared-bbfeca5e5737.js";
import {
  Au as k,
  Brn as A,
  G7t as j,
  Hrn as M,
  Mu as N,
  Urn as P,
  W7t as ne,
  ju as F,
  ku as I,
} from "./app-initial-5851df3f6cb1.js";
import { n as L, r as R, t as z } from "./copy-generated-image-to-clipboard-bbf8cd2a0fd7.js";
import { n as B, t as re } from "./picker-3113c46a7ad4.js";
function ie(e) {
  let t = (0, V.c)(15),
    { image: n, onSelect: a } = e,
    c = s(r),
    u = _(),
    d;
  t[0] !== n.alt || t[1] !== n.src || t[2] !== u || t[3] !== a || t[4] !== c
    ? ((d =
        z() &&
        (0, H.jsx)(i, {
          leftIcon: (0, H.jsx)(C, {}),
          onClick: () => {
            (L({
              conversationId: null,
              filename: n.alt || `image.png`,
              hostId: `local`,
              queryClient: c.queryClient,
              src: n.src,
              onFailure: () => {
                c.get(v).danger(
                  u.formatMessage({
                    id: `messageActions.copyImageFailure`,
                    defaultMessage: `Could not copy image`,
                    description: `Error when copying a message's image to the clipboard fails`,
                  }),
                  { errorAnalytics: { toastId: `messageActions.copyImageFailure` } },
                );
              },
            }),
              a());
          },
          children: (0, H.jsx)(o, {
            id: `messageActions.copyImage`,
            defaultMessage: `Copy image`,
            description: `Context menu action to copy the selected message image to the clipboard`,
          }),
        })),
      (t[0] = n.alt),
      (t[1] = n.src),
      (t[2] = u),
      (t[3] = a),
      (t[4] = c),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] !== n.canDownload || t[7] !== n.src || t[8] !== u || t[9] !== a || t[10] !== c
    ? ((f =
        n.canDownload &&
        (0, H.jsx)(i, {
          leftIcon: (0, H.jsx)(l, { className: `shrink-0`, asset: E, focusable: `false` }),
          onClick: () => {
            (N({ downloadSrc: n.src, suggestedFilename: I(u, k(n.src) ?? `png`) }).then((e) => {
              e ||
                c
                  .get(v)
                  .danger(
                    u.formatMessage({
                      id: `messageActions.downloadImageFailure`,
                      defaultMessage: `Could not download image`,
                      description: `Error when downloading a message's image fails`,
                    }),
                    { errorAnalytics: { toastId: `messageActions.downloadImageFailure` } },
                  );
            }),
              a());
          },
          children: (0, H.jsx)(o, {
            id: `messageActions.downloadImage`,
            defaultMessage: `Download image`,
            description: `Context menu action to download the selected message image`,
          }),
        })),
      (t[6] = n.canDownload),
      (t[7] = n.src),
      (t[8] = u),
      (t[9] = a),
      (t[10] = c),
      (t[11] = f))
    : (f = t[11]);
  let p;
  return (
    t[12] !== d || t[13] !== f
      ? ((p = (0, H.jsxs)(H.Fragment, { children: [d, f] })), (t[12] = d), (t[13] = f), (t[14] = p))
      : (p = t[14]),
    p
  );
}
var V, H;
function U() {
  return (U = e(() => {
    ((V = w()), h(), d(), b(), u(), m(), p(), x(), R(), F(), T(), S(), (H = D()));
  }))();
}
function W(e) {
  let t = (0, G.c)(44),
    { children: r, reactions: a, reactionPending: s, onReact: l, onReply: u } = e,
    d = s !== void 0 && s,
    p = _(),
    [m, h] = (0, K.useState)(null),
    [g, v] = (0, K.useState)(null),
    [y, b] = (0, K.useState)(null),
    [x, S] = (0, K.useState)(null),
    w = (0, K.useRef)(null),
    T = (0, K.useRef)(null),
    E = l != null || u != null,
    D = a.find(ae)?.emoji ?? null,
    O;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (e) => {
        (!e && !document.hasFocus() && (T.current = null), h(e ? `quick` : null));
      }),
      (t[0] = O))
    : (O = t[0]);
  let { open: k, handleOpenChange: A } = c((E || x != null || y != null) && m != null, O),
    j;
  t[1] !== l || t[2] !== d
    ? ((j = (e) => {
        (d || l?.(e), h(null));
      }),
      (t[1] = l),
      (t[2] = d),
      (t[3] = j))
    : (j = t[3]);
  let M = j,
    N;
  t[4] !== p || t[5] !== D
    ? ((N = (e) => p.formatMessage(D === e ? Y.remove : Y.react, { emoji: e })),
      (t[4] = p),
      (t[5] = D),
      (t[6] = N))
    : (N = t[6]);
  let P = N,
    F;
  t[7] === E
    ? (F = t[8])
    : ((F = (e, t) => {
        if (e.defaultPrevented || (e.target instanceof Element && e.target.closest(J))) return;
        let n = oe(e.currentTarget),
          r = se(e.target);
        (E || n != null || r != null) &&
          (e.preventDefault(), e.stopPropagation(), S(n), b(r), v(t), h(`quick`));
      }),
      (t[7] = E),
      (t[8] = F));
  let I = F,
    L;
  t[9] === g
    ? (L = t[10])
    : ((L = g != null && (0, q.jsx)(te, { virtualRef: { current: { getBoundingClientRect: () => g } } })),
      (t[9] = g),
      (t[10] = L));
  let R, z;
  t[11] !== r || t[12] !== I
    ? ((R = (e) => {
        (r.props.onContextMenu?.(e), I(e, new DOMRect(e.clientX, e.clientY)));
      }),
      (z = (e) => {
        if ((r.props.onKeyDown?.(e), e.key === `ContextMenu` || (e.shiftKey && e.key === `F10`))) {
          let t = e.currentTarget.getBoundingClientRect();
          I(e, new DOMRect(t.left, t.bottom));
        }
      }),
      (t[11] = r),
      (t[12] = I),
      (t[13] = R),
      (t[14] = z))
    : ((R = t[13]), (z = t[14]));
  let B;
  t[15] !== r || t[16] !== R || t[17] !== z
    ? ((B = (0, K.cloneElement)(r, { onContextMenu: R, onKeyDown: z })),
      (t[15] = r),
      (t[16] = R),
      (t[17] = z),
      (t[18] = B))
    : (B = t[18]);
  let V;
  t[19] === p
    ? (V = t[20])
    : ((V = p.formatMessage({
        id: `messageActions.title`,
        defaultMessage: `Message actions`,
        description: `Title of the context menu with copy, reaction, and reply actions`,
      })),
      (t[19] = p),
      (t[20] = V));
  let H = m === `all` ? `top` : `bottom`,
    U,
    W,
    X;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = () => {
        T.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      }),
      (W = () => {
        T.current = null;
      }),
      (X = (e) => {
        e.preventDefault();
        let t = w.current;
        ((w.current = null), t ? t() : T.current?.focus({ preventScroll: !0 }));
      }),
      (t[21] = U),
      (t[22] = W),
      (t[23] = X))
    : ((U = t[21]), (W = t[22]), (X = t[23]));
  let Z;
  t[24] !== M ||
  t[25] !== x ||
  t[26] !== y ||
  t[27] !== l ||
  t[28] !== u ||
  t[29] !== m ||
  t[30] !== D ||
  t[31] !== P ||
  t[32] !== d
    ? ((Z =
        m === `all`
          ? (0, q.jsx)(ne, {
              capabilities: { emoji: { selectedEmojis: D == null ? [] : [D], getEmojiLabel: P } },
              onClear: D == null ? void 0 : () => M(D),
              onSelect: (e) => {
                e.kind === `emoji` && M(e.value);
              },
            })
          : (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsx)(re, {
                  reaction: D,
                  showReactions: l != null,
                  reactionsEnabled: !d,
                  onSelect: M,
                  onMore: () => h(`all`),
                  onReply:
                    u == null
                      ? void 0
                      : () => {
                          ((w.current = u), h(null));
                        },
                }),
                x != null &&
                  y == null &&
                  (0, q.jsx)(i, {
                    leftIcon: (0, q.jsx)(C, {}),
                    onClick: (e) => {
                      (ee({ "text/plain": x.plainText, "text/html": x.htmlText }, e), h(null));
                    },
                    children: (0, q.jsx)(o, {
                      id: `messageActions.copyText`,
                      defaultMessage: `Copy`,
                      description: `Copy selected text, or the whole message when no text is selected, to the clipboard`,
                    }),
                  }),
                y != null && (0, q.jsx)(ie, { image: y, onSelect: () => h(null) }),
              ],
            })),
      (t[24] = M),
      (t[25] = x),
      (t[26] = y),
      (t[27] = l),
      (t[28] = u),
      (t[29] = m),
      (t[30] = D),
      (t[31] = P),
      (t[32] = d),
      (t[33] = Z))
    : (Z = t[33]);
  let Q;
  t[34] !== V || t[35] !== H || t[36] !== Z
    ? ((Q = (0, q.jsx)(n, {
        "aria-label": V,
        variant: `menu`,
        size: `content`,
        side: H,
        className: `select-none`,
        disablePadding: !0,
        onOpenAutoFocus: U,
        onInteractOutside: W,
        onCloseAutoFocus: X,
        children: Z,
      })),
      (t[34] = V),
      (t[35] = H),
      (t[36] = Z),
      (t[37] = Q))
    : (Q = t[37]);
  let $;
  return (
    t[38] !== A || t[39] !== k || t[40] !== Q || t[41] !== L || t[42] !== B
      ? (($ = (0, q.jsxs)(f, { open: k, onOpenChange: A, children: [L, B, Q] })),
        (t[38] = A),
        (t[39] = k),
        (t[40] = Q),
        (t[41] = L),
        (t[42] = B),
        (t[43] = $))
      : ($ = t[43]),
    $
  );
}
function ae(e) {
  return e.reacted;
}
function oe(e) {
  let t = e.ownerDocument.getSelection(),
    n = t?.rangeCount ? t.getRangeAt(0) : null;
  return n != null && !n.collapsed && n.intersectsNode(e)
    ? M(e.ownerDocument.body, t)
    : A(e, { includeCollapsedContent: !0 });
}
function se(e) {
  let t = e instanceof Element ? e.closest(`[data-message-image]`) : null,
    n = t?.querySelector(`img`);
  return n?.getAttribute(`src`)
    ? { src: n.currentSrc || n.src, alt: n.alt, canDownload: t?.dataset.messageImage === `original` }
    : null;
}
var G, K, q, J, Y;
function X() {
  return (X = e(() => {
    ((G = w()),
      (K = O()),
      b(),
      a(),
      m(),
      p(),
      g(),
      P(),
      j(),
      y(),
      U(),
      B(),
      (q = D()),
      (J = `input, textarea, select, [contenteditable='true']`),
      (Y = t({
        react: {
          id: `messageActions.react`,
          defaultMessage: `React with {emoji}`,
          description: `Label for adding the given emoji reaction to a message`,
        },
        remove: {
          id: `messageActions.remove`,
          defaultMessage: `Remove {emoji} reaction`,
          description: `Label for removing the selected emoji reaction from a message`,
        },
      })));
  }))();
}
export { X as n, W as t };
//# sourceMappingURL=context-menu-48b2a89bdb70.js.map
