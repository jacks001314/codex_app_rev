const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./cloud-browser-local-live-view-212c73f0d734.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-7552fc8d5d82.js",
      "./app-shared-342447930c78.css",
      "./app-initial-3916b423772b.js",
      "./app-initial-e55cd978d577.css",
      "./cloud-browser-control-overlay-6f0a679921a7.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CE as t,
  N5t as n,
  NAt as r,
  O5t as i,
  PAt as a,
  QAt as o,
  Wrn as s,
  XAt as c,
  Yrn as l,
  _dn as u,
  cun as d,
  ein as f,
  fE as p,
  lun as m,
  mcn as h,
  ncn as g,
  pE as _,
  rcn as v,
  vdn as y,
  wE as b,
} from "./app-shared-7552fc8d5d82.js";
import { Mbn as x, wOn as S } from "./app-initial-3916b423772b.js";
import { Fo as C, Io as w, Lo as T, Ro as E } from "./app-primary-7b889402e22e.js";
import { n as ee, t as te } from "./cloud-browser-control-overlay-6f0a679921a7.js";
import { i as ne, n as D, r as O, t as k } from "./src-51803043763e.js";
import { n as A, t as j } from "./cloud-browser-preview-98ee27022f4c.js";
var M, N, P, F;
function I() {
  return (I = e(() => {
    ((M = `_viewport_y8jv9_2`),
      (N = `_loadingOverlay_y8jv9_2`),
      (P = `_videoFrame_y8jv9_2`),
      (F = { viewport: M, loadingOverlay: N, videoFrame: P }));
  }))();
}
function L(e) {
  let t = (0, z.c)(4),
    n;
  return (t[2] === e ? (n = t[3]) : ((n = (0, V.jsx)(R, { ...e })), (t[2] = e), (t[3] = n)), n);
}
function R(e) {
  let r = (0, z.c)(45),
    {
      conversationId: i,
      browserOwnerConversationId: a,
      connectionErrorLabel: o,
      controlLabel: s,
      isControlActivated: c,
      onControlActivation: u,
      peerUrl: d,
      targetTabId: p,
    } = e,
    m = f(),
    h = n(S, i),
    _ = a ?? h,
    v = (0, B.useRef)(null),
    y = (0, B.useRef)(null),
    b = (0, B.useRef)(!1),
    x = (0, B.useRef)(c),
    C = (0, B.useRef)(!1),
    [w, T] = (0, B.useState)(`connecting`),
    [E, ee] = (0, B.useState)(1.3333333333333333),
    k;
  r[0] === c
    ? (k = r[1])
    : ((k = () => {
        ((x.current = c), (C.current = c));
      }),
      (r[0] = c),
      (r[1] = k));
  let A = (0, B.useEffectEvent)(k),
    j;
  r[2] !== d || r[3] !== A || r[4] !== _ || r[5] !== p
    ? ((j = () => {
        let e = v.current;
        if (e == null || _ == null) return;
        A();
        let t = !1,
          n = !1,
          r = !1,
          i = !1,
          a = !1,
          o = p == null,
          s = null,
          c = null,
          l = () => {
            if (!t && n && r && o && !i && s != null)
              try {
                (s.send(
                  JSON.stringify({
                    client: `codex`,
                    event: `browser/client_outcome`,
                    outcome: `success`,
                    reason: `video_playing`,
                  }),
                ),
                  (i = !0));
              } catch {}
          },
          u = () => {
            n && r && o && T(ie);
          },
          f = () => {
            ((r = !0), u(), l());
          },
          m = (e) => {
            if (((C.current = !1), (b.current = !1), t || a || s == null)) return !1;
            try {
              return (
                s.send(
                  JSON.stringify({
                    client: `codex`,
                    event: `browser/client_outcome`,
                    outcome: `error`,
                    reason: e,
                  }),
                ),
                (a = !0),
                !0
              );
            } catch {
              return !1;
            }
          },
          h = () => {
            if (!a) {
              S.disconnect();
              return;
            }
            c = setTimeout(() => {
              t || S.disconnect();
            }, U);
          },
          g = () => {
            t || (T(`connection-error`), m(`video_error`) && h());
          };
        (e.addEventListener(`playing`, f), e.addEventListener(`error`, g));
        let S = new ne(d ?? ae(_), null, re);
        y.current = S;
        let w = () => {
          C.current && b.current && ((C.current = !1), S.setMode(O.CONTROL));
        };
        return (
          S.addEventListener(D.STREAMING, (r) => {
            t || ((e.srcObject = r), (n = !0), u(), l());
          }),
          S.addEventListener(D.DATA_OPENED, (e) => {
            t ||
              ((s = e),
              (b.current = o),
              p != null &&
                e.send(JSON.stringify({ conversation_id: _, event: `browser/handoff`, tab_id: p })),
              l(),
              w());
          }),
          S.addEventListener(D.DATA_CLOSED, () => {
            t || ((s = null), (b.current = !1));
          }),
          S.addEventListener(D.MESSAGE, (e) => {
            if (!t) {
              if (e.event === `browser/client_outcome/ack`) {
                c != null && (clearTimeout(c), (c = null), S.disconnect());
                return;
              }
              p != null &&
                (e.event === `browser/handoff/ready`
                  ? ((o = !0), (b.current = s != null), w(), u(), l())
                  : e.event === `browser/handoff/error` &&
                    (T(`handoff-error`), m(`handoff_error`), h()));
            }
          }),
          S.addEventListener(D.MODE_CHANGE, (n) => {
            if (t) return;
            let r = n === `control` && b.current && x.current;
            (S.setKeyEventSource(r ? e : null), S.setMouseEventSource(r ? e : null));
          }),
          S.addEventListener(D.ERROR, () => {
            t || (T(`connection-error`), m(`connection_error`) && h());
          }),
          S.connect(H).catch(() => {
            t || (T(`connection-error`), m(`connection_error`) && h());
          }),
          () => {
            ((t = !0),
              e.removeEventListener(`playing`, f),
              e.removeEventListener(`error`, g),
              c != null && clearTimeout(c),
              (s = null),
              (b.current = !1),
              (C.current = !1),
              (e.srcObject = null),
              S.setKeyEventSource(null),
              S.setMouseEventSource(null),
              S.disconnect(),
              (y.current = null));
          }
        );
      }),
      (r[2] = d),
      (r[3] = A),
      (r[4] = _),
      (r[5] = p),
      (r[6] = j))
    : (j = r[6]);
  let M;
  (r[7] !== d || r[8] !== _ || r[9] !== p
    ? ((M = [d, _, p]), (r[7] = d), (r[8] = _), (r[9] = p), (r[10] = M))
    : (M = r[10]),
    (0, B.useEffect)(j, M));
  let N = w === `connection-error` || w === `handoff-error` || _ == null,
    P;
  if (N) {
    let e;
    if (w === `handoff-error`) {
      let t;
      (r[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, V.jsx)(l, {
            id: `chatgptConversations.cloudBrowser.liveView.tabUnavailable`,
            defaultMessage: `This browser tab is no longer available`,
            description: `Error shown when an assistant's secure cloud-browser handoff targets a tab that has closed or does not belong to this conversation`,
          })),
          (r[11] = t))
        : (t = r[11]),
        (e = t));
    } else {
      let t;
      (r[12] === o
        ? (t = r[13])
        : ((t =
            o ??
            (0, V.jsx)(l, {
              id: `chatgptConversations.cloudBrowser.liveView.unavailable`,
              defaultMessage: `Cloud browser is unavailable`,
              description: `Error shown when an interactive ChatGPT cloud browser session cannot be opened`,
            })),
          (r[12] = o),
          (r[13] = t)),
        (e = t));
    }
    let t;
    (r[14] === e
      ? (t = r[15])
      : ((t = (0, V.jsx)(`div`, {
          className: `absolute inset-0 flex items-center justify-center bg-media-background text-sm text-media-foreground/70`,
          children: e,
        })),
        (r[14] = e),
        (r[15] = t)),
      (P = t));
  } else {
    let e = w === `streaming`,
      n;
    r[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = g(
          F.loadingOverlay,
          `absolute inset-0 flex items-center justify-center gap-2 text-sm text-media-foreground/70 duration-relaxed ease-enter motion-reduce:transition-none`,
        )),
        (r[16] = n))
      : (n = r[16]);
    let i, a;
    r[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, V.jsx)(t, { className: `icon-sm` })),
        (a = (0, V.jsx)(l, {
          id: `chatgptConversations.cloudBrowser.liveView.connecting`,
          defaultMessage: `Connecting to cloud browser…`,
          description: `Loading status shown while an interactive ChatGPT cloud browser session connects`,
        })),
        (r[17] = i),
        (r[18] = a))
      : ((i = r[17]), (a = r[18]));
    let o;
    (r[19] === e
      ? (o = r[20])
      : ((o = (0, V.jsxs)(`div`, {
          "aria-hidden": e,
          className: n,
          role: `status`,
          children: [i, a],
        })),
        (r[19] = e),
        (r[20] = o)),
      (P = o));
  }
  let I;
  r[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (e) => {
        let { videoWidth: t, videoHeight: n } = e.currentTarget;
        t > 0 && n > 0 && ee(t / n);
      }),
      (r[21] = I))
    : (I = r[21]);
  let L = I,
    R;
  r[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = g(
        F.viewport,
        `relative flex min-h-0 flex-1 items-center justify-center bg-media-background pb-12`,
      )),
      (r[22] = R))
    : (R = r[22]);
  let W;
  r[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = g(F.videoFrame, `relative`)), (r[23] = W))
    : (W = r[23]);
  let G = w === `streaming` || void 0,
    K = `min(100cqw, ${100 * E}cqh)`,
    q = `min(100cqh, ${100 / E}cqw)`,
    J;
  r[24] !== K || r[25] !== q
    ? ((J = { width: K, height: q }), (r[24] = K), (r[25] = q), (r[26] = J))
    : (J = r[26]);
  let Y;
  r[27] === m
    ? (Y = r[28])
    : ((Y = m.formatMessage({
        id: `chatgptConversations.cloudBrowser.liveView.ariaLabel`,
        defaultMessage: `Live cloud browser`,
        description: `Accessible label for the interactive video of the cloud browser used by a ChatGPT Work task`,
      })),
      (r[27] = m),
      (r[28] = Y));
  let X;
  r[29] === c
    ? (X = r[30])
    : ((X = (e) => {
        (e.currentTarget.focus(), c && b.current && y.current?.setMode(O.CONTROL));
      }),
      (r[29] = c),
      (r[30] = X));
  let Z;
  r[31] !== Y || r[32] !== X
    ? ((Z = (0, V.jsx)(`video`, {
        ref: v,
        "aria-label": Y,
        className: `size-full object-contain transition-opacity duration-relaxed ease-enter focus-visible:outline-none motion-reduce:transition-none`,
        autoPlay: !0,
        muted: !0,
        playsInline: !0,
        tabIndex: 0,
        onLoadedMetadata: L,
        onResize: L,
        onPointerDown: X,
      })),
      (r[31] = Y),
      (r[32] = X),
      (r[33] = Z))
    : (Z = r[33]);
  let Q;
  r[34] !== s || r[35] !== c || r[36] !== N || r[37] !== u
    ? ((Q =
        !N && !c
          ? (0, V.jsx)(te, {
              label: s,
              onActivate: () => {
                ((x.current = !0), u(), v.current?.focus());
                let e = y.current;
                e == null || !b.current ? (C.current = !0) : e.setMode(O.CONTROL);
              },
            })
          : null),
      (r[34] = s),
      (r[35] = c),
      (r[36] = N),
      (r[37] = u),
      (r[38] = Q))
    : (Q = r[38]);
  let $;
  return (
    r[39] !== P || r[40] !== J || r[41] !== Z || r[42] !== Q || r[43] !== G
      ? (($ = (0, V.jsx)(`div`, {
          className: R,
          "data-codex-cloud-browser": !0,
          children: (0, V.jsxs)(`div`, {
            className: W,
            "data-streaming": G,
            style: J,
            children: [Z, P, Q],
          }),
        })),
        (r[39] = P),
        (r[40] = J),
        (r[41] = Z),
        (r[42] = Q),
        (r[43] = G),
        (r[44] = $))
      : ($ = r[44]),
    $
  );
}
async function re(e, t) {
  let { body: n, headers: i } = t;
  return c.getInstance().fetch(e, { method: `POST`, body: n, headers: { ...i, ...r() } });
}
function ie(e) {
  return e === `connection-error` || e === `handoff-error` ? e : `streaming`;
}
function ae(e) {
  let t = new URL(
    `https://chatgpt.com/backend-api`.includes(`chatgpt-staging.com`)
      ? `https://realtime.chatgpt-staging.com/v1/cua`
      : `https://realtime.chatgpt.com/v1/cua`,
  );
  return (t.searchParams.set(`cid`, e), t.searchParams.set(`source`, `flora`), t.toString());
}
var z, B, V, H, U;
function W() {
  return (W = e(() => {
    ((z = u()),
      k(),
      v(),
      i(),
      (B = y()),
      s(),
      p(),
      b(),
      a(),
      o(),
      x(),
      ee(),
      I(),
      (V = h()),
      m(),
      (H = 2e4),
      (U = 1e3),
      _(async () => {
        let { LocalCloudBrowserLiveView: e } = await d(
          async () => {
            let { LocalCloudBrowserLiveView: e } = await import(
              `./cloud-browser-local-live-view-212c73f0d734.js`
            );
            return { LocalCloudBrowserLiveView: e };
          },
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
          import.meta.url,
        );
        return e;
      }));
  }))();
}
function G(e) {
  let t = (0, K.c)(20),
    { conversationId: r, browserOwnerConversationId: i, renderSlots: a, targetTabId: o } = e,
    [s, c] = (0, q.useState)(!1),
    l = n(w, r),
    u = n(C, r),
    d = l[T(u, l)],
    f;
  if (
    t[0] !== d?.browser_conversation_id ||
    t[1] !== i ||
    t[2] !== r ||
    t[3] !== s ||
    t[4] !== a ||
    t[5] !== u.mode ||
    t[6] !== l ||
    t[7] !== o
  ) {
    let e;
    t[9] !== d?.browser_conversation_id ||
    t[10] !== i ||
    t[11] !== r ||
    t[12] !== s ||
    t[13] !== u.mode ||
    t[14] !== o
      ? ((e =
          u.mode === `live`
            ? (0, J.jsx)(
                L,
                {
                  conversationId: r,
                  browserOwnerConversationId: i ?? d?.browser_conversation_id,
                  isControlActivated: s,
                  onControlActivation: () => c(!0),
                  targetTabId: o,
                },
                o ?? `active-browser-tab`,
              )
            : void 0),
        (t[9] = d?.browser_conversation_id),
        (t[10] = i),
        (t[11] = r),
        (t[12] = s),
        (t[13] = u.mode),
        (t[14] = o),
        (t[15] = e))
      : (e = t[15]);
    let n;
    (t[16] !== r || t[17] !== l || t[18] !== e
      ? ((n = (0, J.jsx)(j, {
          conversationId: r,
          liveView: e,
          screenshots: l,
          variant: `expanded`,
        })),
        (t[16] = r),
        (t[17] = l),
        (t[18] = e),
        (t[19] = n))
      : (n = t[19]),
      (f = a({ headerRows: [], content: n })),
      (t[0] = d?.browser_conversation_id),
      (t[1] = i),
      (t[2] = r),
      (t[3] = s),
      (t[4] = a),
      (t[5] = u.mode),
      (t[6] = l),
      (t[7] = o),
      (t[8] = f));
  } else f = t[8];
  return f;
}
var K, q, J;
function Y() {
  return (Y = e(() => {
    ((K = u()), i(), (q = y()), W(), A(), E(), (J = h()));
  }))();
}
Y();
export { G as ChatGptCloudBrowserSidePanel };
//# sourceMappingURL=cloud-browser-side-panel-390f805a5bb0.js.map
