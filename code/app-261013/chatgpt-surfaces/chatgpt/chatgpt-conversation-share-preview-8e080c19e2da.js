const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./writing-block-directive-renderer-a10d236aa53c.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./writing-block-directive-renderer-1ef8ad424e85.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./editable-writing-block-67c0bb761270.js",
      "./menu-items-b78a5ea99a11.js",
      "./query-4ecbf204b1e6.js",
      "./library-file-metadata-18e455d7ac7c.js",
      "./writing-block-markdown-editor-367a32b77e05.js",
      "./writing-block-theme-61c0ed2a12ed.js",
      "./writing-block-editor-styles-90146127a9c9.js",
      "./writing-block-editor-styles-4dc32da811e5.css",
      "./writing-block-floating-slash-menu-1d629aa81df2.js",
      "./writing-block-editor-5c2b4ee54b30.js",
      "./types-b46e00871847.js",
      "./writing-block-surface-635635c06cb8.js",
      "./writing-block-surface-21d6bd89b8c7.css",
      "./writing-block-copy-button-6291ce056717.js",
      "./inline-61a2c2e3dd06.js",
      "./browser-3b4e0de870ed.js",
      "./color-palette-f2eb706d849c.js",
      "./browser-8d1b02c868ea.css",
      "./editable-writing-block-ab7b5ef2685d.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $j as t,
  B4 as n,
  CM as r,
  Cat as i,
  DM as a,
  Ew as o,
  IDt as s,
  QA as c,
  QI as l,
  TM as u,
  Tw as d,
  ZA as f,
  ZI as p,
  _Mt as m,
  fPt as h,
  gMt as ee,
  i3 as g,
  iot as _,
  jDt as te,
  lw as v,
  pPt as ne,
  qj as re,
  r3 as ie,
  sw as y,
  vzt as ae,
  xMt as oe,
  xat as se,
  yat as ce,
  yzt as le,
  z4 as ue,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Gn as de,
  Fnn as fe,
  Hqn as pe,
  Inn as me,
  Ko as he,
  Ls as ge,
  QGn as _e,
  QQn as b,
  Rs as x,
  SG as S,
  Ui as C,
  Uqn as w,
  Wi as T,
  Wqn as E,
  Xl as D,
  Zl as O,
  e$n as k,
  eh as A,
  fyr as j,
  g7n as M,
  lyr as N,
  mYr as P,
  nKn as F,
  nc as I,
  nh as ve,
  oFr as ye,
  pYr as be,
  qo as xe,
  rc as Se,
  uyr as L,
  v7n as Ce,
  xG as we,
  zqn as Te,
} from "./app-initial-5851df3f6cb1.js";
import { af as Ee, of as De } from "./app-primary-fe8a450b3b04.js";
import { n as Oe, t as ke } from "./composer-scope-provider-cb17532fb9ac.js";
import { n as Ae, t as R } from "./chatgpt-assistant-message-content-657f67d40f20.js";
import { n as je, t as Me } from "./thread-preview-be8c5b151e0c.js";
var z, B;
function V() {
  return (V = e(() => {
    ((z = `_responseTypography_vn997_1`), (B = { responseTypography: z }));
  }))();
}
function Ne(e) {
  let t = (0, q.c)(25),
    { prompt: n, response: r, serverConversationId: i, turns: a } = e,
    o = (0, J.useContext)(D) !== `restricted`,
    s = r != null,
    c = `default`,
    l;
  if (n != null) {
    let e;
    (t[0] !== n.renderMarkdown || t[1] !== n.text
      ? ((e = (0, Y.jsx)(G, { renderMarkdown: n.renderMarkdown, text: n.text })),
        (t[0] = n.renderMarkdown),
        (t[1] = n.text),
        (t[2] = e))
      : (e = t[2]),
      (l = e));
  } else if (r != null) {
    c = `response`;
    let e;
    t[3] === i ? (e = t[4]) : ((e = b(i)), (t[3] = i), (t[4] = e));
    let n = o ? `share` : void 0,
      a;
    (t[5] !== r || t[6] !== e || t[7] !== n
      ? ((a = (0, Y.jsx)(R, {
          conversationId: e,
          cwd: null,
          hostId: _,
          item: r,
          isReadOnly: !0,
          preview: n,
          trackShownImpressions: !1,
          turnId: `share-preview`,
        })),
        (t[5] = r),
        (t[6] = e),
        (t[7] = n),
        (t[8] = a))
      : (a = t[8]),
      (l = a));
  } else {
    a?.some(Pe) && (c = `transcript`);
    let e;
    (t[9] !== o || t[10] !== i || t[11] !== a
      ? ((e =
          a == null
            ? null
            : (0, Y.jsx)(U, { preview: o ? `share` : void 0, serverConversationId: i, turns: a })),
        (t[9] = o),
        (t[10] = i),
        (t[11] = a),
        (t[12] = e))
      : (e = t[12]),
      (l = e));
  }
  let u = n == null && r == null && a == null,
    d = c,
    f = s ? B.responseTypography : `p-4`,
    p;
  t[13] === f ? (p = t[14]) : ((p = ee(`flex min-w-0 flex-col gap-4`, f)), (t[13] = f), (t[14] = p));
  let m;
  t[15] !== l || t[16] !== p
    ? ((m = (0, Y.jsx)(`div`, { className: p, children: l })), (t[15] = l), (t[16] = p), (t[17] = m))
    : (m = t[17]);
  let h;
  t[18] !== i || t[19] !== m
    ? ((h = (0, Y.jsx)(H, { serverConversationId: i, children: m })), (t[18] = i), (t[19] = m), (t[20] = h))
    : (h = t[20]);
  let g;
  return (
    t[21] !== u || t[22] !== h || t[23] !== c
      ? ((g = (0, Y.jsx)(Me, { isLoading: u, variant: d, children: h })),
        (t[21] = u),
        (t[22] = h),
        (t[23] = c),
        (t[24] = g))
      : (g = t[24]),
    g
  );
}
function Pe(e) {
  let { turn: t } = e;
  return t.items.some(Fe);
}
function Fe(e) {
  return e.type === `generated-image`;
}
function Ie(e) {
  let t = (0, q.c)(7),
    { preview: n, serverConversationId: r, turns: i } = e,
    a;
  t[0] !== n || t[1] !== r || t[2] !== i
    ? ((a = (0, Y.jsx)(`div`, {
        className: `flex min-w-0 flex-col gap-4 p-4`,
        children: (0, Y.jsx)(U, { markdownDirectives: Z, preview: n, serverConversationId: r, turns: i }),
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] !== r || t[5] !== a
      ? ((o = (0, Y.jsx)(H, { serverConversationId: r, children: a })), (t[4] = r), (t[5] = a), (t[6] = o))
      : (o = t[6]),
    o
  );
}
function H(e) {
  let t = (0, q.c)(10),
    { children: n, serverConversationId: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = se(r)), (t[0] = r), (t[1] = i));
  let a;
  t[2] !== r || t[3] !== i
    ? ((a = { conversationId: r, pathname: i, routeKind: `chatgpt-thread`, routeTemplate: ce }),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a))
    : (a = t[4]);
  let o;
  t[5] === n
    ? (o = t[6])
    : ((o = (0, Y.jsx)(D.Provider, { value: `restricted`, children: (0, Y.jsx)(ke, { children: n }) })),
      (t[5] = n),
      (t[6] = o));
  let s;
  return (
    t[7] !== a || t[8] !== o
      ? ((s = (0, Y.jsx)(we, { route: a, children: o })), (t[7] = a), (t[8] = o), (t[9] = s))
      : (s = t[9]),
    s
  );
}
function U({ preview: e, markdownDirectives: t, serverConversationId: n, turns: r }) {
  return r.map(({ id: r, turn: i }) =>
    (0, Y.jsx)(
      `div`,
      {
        className: `flex min-w-0 flex-col gap-4`,
        children: i.items.map((i, a) =>
          i.type === `user-message`
            ? (0, Y.jsxs)(
                `div`,
                {
                  className: `flex min-w-0 flex-col items-end gap-2`,
                  children: [
                    i.images.map((e) => (0, Y.jsx)(K, { src: e, serverConversationId: n }, e)),
                    i.message.trim()
                      ? (0, Y.jsx)(G, { item: i, renderMarkdown: i.renderMarkdown, text: be(i.message) })
                      : null,
                  ],
                },
                a,
              )
            : i.type === `assistant-message`
              ? (0, Y.jsx)(
                  R,
                  {
                    conversationId: b(n),
                    cwd: null,
                    hostId: _,
                    item: i,
                    isReadOnly: !0,
                    preview: e,
                    markdownDirectives: t,
                    trackShownImpressions: !1,
                    turnId: r,
                  },
                  a,
                )
              : i.type === `generated-image` && i.src != null
                ? (0, Y.jsx)(K, { isGenerated: !0, src: i.src, serverConversationId: n }, a)
                : null,
        ),
      },
      r,
    ),
  );
}
function W(e) {
  let t = (0, q.c)(3),
    n = Se()?.contentReferences,
    r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = (0, Y.jsx)(X, {
          ...e,
          contentReferences: n,
          isStreaming: !1,
          testId: `chatgpt-writing-block`,
        })),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
function G(e) {
  let t = (0, q.c)(7),
    { item: n, renderMarkdown: r, text: i } = e,
    a;
  t[0] !== n || t[1] !== i ? ((a = Re(i, n)), (t[0] = n), (t[1] = i), (t[2] = a)) : (a = t[2]);
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = { a: Le }), (t[3] = o)) : (o = t[3]);
  let s = r === !0,
    c;
  return (
    t[4] !== a || t[5] !== s
      ? ((c = (0, Y.jsx)(`div`, {
          className: `max-w-[77%] min-w-0 self-end overflow-hidden rounded-2xl bg-text/5 px-3 py-2 break-words`,
          children: (0, Y.jsx)(Ee, {
            text: a,
            components: o,
            cwd: null,
            hasSerializedParagraphs: s,
            hostId: _,
            renderMath: !1,
            variant: `user-message`,
          }),
        })),
        (t[4] = a),
        (t[5] = s),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function Le(e) {
  let t = (0, q.c)(10);
  if (e.href !== L) {
    let n = e[y],
      r;
    return (
      t[0] !== e.children || t[1] !== e.href || t[2] !== e.title || t[3] !== n
        ? ((r = (0, Y.jsx)(Q, {
            href: e.href,
            title: e.title,
            "data-markdown-raw-link-label": n,
            children: e.children,
          })),
          (t[0] = e.children),
          (t[1] = e.href),
          (t[2] = e.title),
          (t[3] = n),
          (t[4] = r))
        : (r = t[4]),
      r
    );
  }
  let n = e[y],
    r;
  t[5] !== e.children || t[6] !== n
    ? ((r = typeof n == `string` ? a(n) : d(e.children)), (t[5] = e.children), (t[6] = n), (t[7] = r))
    : (r = t[7]);
  let i;
  return (
    t[8] === r
      ? (i = t[9])
      : ((i = (0, Y.jsx)(A, { icon: p, layout: `selection-pill`, children: r })), (t[8] = r), (t[9] = i)),
    i
  );
}
function Re(e, t) {
  let n = t?.chatGptSystemHintMentions ?? Te([], e),
    r = e;
  for (let e of n.toReversed()) {
    let t = e.id.replace(/^(?:connector|plugin):/u, ``);
    (t === N || w.has(t) || re(e.id) != null) &&
      (r = r.slice(0, e.startIndex) + u(e.label, L) + r.slice(e.endIndex));
  }
  return r;
}
function K(e) {
  let t = (0, q.c)(7),
    { isGenerated: n, src: r, serverConversationId: i } = e,
    a = n !== void 0 && n,
    o = de(r) ? r : ``,
    l;
  t[0] === i ? (l = t[1]) : ((l = fe(b(i))), (t[0] = i), (t[1] = l));
  let { src: u, isLoading: d } = F(o, l),
    f = c(r) ? r : null;
  if ((o && (f = u), d)) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(ie, { className: `icon-sm` })), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (f == null) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(`span`, {
            className: `text-sm text-secondary`,
            children: (0, Y.jsx)(s, {
              id: `chatgptConversations.shareDialog.imageUnavailable`,
              defaultMessage: `Image preview unavailable`,
              description: `Placeholder inside the cropped ChatGPT sharing preview when an image cannot be loaded safely. This does not change whether the image is included in the shared chat.`,
            }),
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let p;
  return (
    t[4] !== f || t[5] !== a
      ? ((p = a
          ? (0, Y.jsx)(`img`, {
              alt: ``,
              className: `block max-h-56 max-w-full self-start rounded-2xl object-contain`,
              loading: `lazy`,
              referrerPolicy: `no-referrer`,
              src: f,
            })
          : (0, Y.jsx)(C, { src: f, previewEnabled: !1, imageLoading: `lazy` })),
        (t[4] = f),
        (t[5] = a),
        (t[6] = p))
      : (p = t[6]),
    p
  );
}
var q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((q = ae()),
      Ce(),
      m(),
      P(),
      (J = le()),
      te(),
      T(),
      t(),
      r(),
      ue(),
      g(),
      De(),
      l(),
      Oe(),
      v(),
      xe(),
      f(),
      o(),
      O(),
      ve(),
      j(),
      S(),
      ye(),
      je(),
      _e(),
      ge(),
      Ae(),
      me(),
      E(),
      k(),
      I(),
      pe(),
      i(),
      V(),
      (Y = oe()),
      ne(),
      (X = n(
        async () =>
          (
            await h(
              async () => {
                let { WritingBlockDirectiveRenderer: e } = await import(
                  `./writing-block-directive-renderer-a10d236aa53c.js`
                );
                return { WritingBlockDirectiveRenderer: e };
              },
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
              ]),
              import.meta.url,
            )
          ).WritingBlockDirectiveRenderer,
        x,
      )),
      (Z = { [M]: W }),
      (Q = he({
        conversationId: null,
        externalResourcePolicy: `restricted`,
        isBrowserEnabled: !1,
        openFileLinksInSidePanel: !1,
      })));
  }))();
}
export { Ne as n, $ as r, Ie as t };
//# sourceMappingURL=chatgpt-conversation-share-preview-8e080c19e2da.js.map
