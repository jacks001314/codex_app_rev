import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A5t as t,
  C0t as n,
  Cg as r,
  Hk as i,
  Jh as a,
  Kh as o,
  M0t as s,
  O5t as c,
  Og as l,
  RJt as u,
  SRt as d,
  Vk as f,
  W8t as p,
  Wrn as m,
  X6t as h,
  XT as g,
  Yh as _,
  ZT as ee,
  _Rt as v,
  _dn as y,
  c$ as b,
  cMt as x,
  ein as te,
  k0t as S,
  k6t as C,
  mcn as w,
  t$ as ne,
  uMt as T,
  vMt as E,
  vdn as D,
  w0t as O,
  wg as k,
  xMt as re,
  zCt as A,
} from "./app-shared-7552fc8d5d82.js";
import {
  $t as j,
  BUt as M,
  Crt as N,
  Dan as P,
  Fat as F,
  JPn as I,
  KNn as L,
  Pat as ie,
  Qt as ae,
  Trt as R,
  b4t as z,
  dF as B,
  eFn as V,
  h_ as H,
  m_ as U,
  oFn as W,
  qNn as G,
  qPn as K,
  uF as q,
  xan as J,
  y4t as oe,
  yF as se,
  zUt as Y,
} from "./app-initial-3916b423772b.js";
import { i as ce, n as le, r as ue, t as de } from "./popup-11718d0a1a4c.js";
function fe(
  e,
  { browserTabId: t, composerController: r, composerId: i, conversationId: a, match: o },
) {
  let c = O.safeParse({
    browserId: a,
    pluginId: n.browser,
    snapshot: { title: o.description || o.contents || o.destinationURL, url: o.destinationURL },
    source: `iab`,
    tabId: t,
  });
  if (!c.success) return null;
  let l = { ...c.data, faviconUrl: o.faviconDataURL },
    u = S(c.data),
    d = R(e, {
      browserConversationId: a,
      browserTabId: t,
      initialUrl: o.destinationURL,
      initiator: `address_bar`,
      source: `search`,
    });
  if (d == null) return null;
  (e.set(W, `full`),
    e.set(I, !0),
    e.set(se, !0),
    B(e, { prefersReducedMotion: !0 }),
    e.set(G, d),
    V(e, `main`),
    J(i));
  let f = null,
    p = !1,
    m = () => {
      if (f == null) return;
      if (r.view.isDestroyed) {
        f?.();
        return;
      }
      let e = Y.getSnapshot(a, d);
      if (e == null) {
        Y.getExistingBrowserStorageId(a, d) ?? f?.();
        return;
      }
      if (e.isLoading || e.isWaitingForResponse) return;
      if (e.tabType !== C.WEB || e.url.length === 0 || e.url === `about:blank`) {
        f?.();
        return;
      }
      if (e.title.trim().length === 0 || (e.title === `New tab` && l.snapshot.title !== `New tab`))
        return;
      let t = O.safeParse({ ...c.data, snapshot: { title: e.title, url: e.url } });
      if (!t.success) {
        f?.();
        return;
      }
      r.updateBrowserAutocompleteMention({
        ...t.data,
        faviconUrl: s(e.faviconUrl) ?? l.faviconUrl,
      }) && f?.();
    },
    h = Y.subscribe(m),
    g = oe(r.view, (e) => {
      if (!e) return;
      let t = !1;
      (r.view.state.doc.descendants((e) =>
        e.type.name === `browserTabMention` && e.attrs.path === u ? ((t = !0), !1) : !0,
      ),
        t ? (p = !0) : p && f?.());
    }),
    _ = window.setTimeout(() => {
      f?.();
    }, pe);
  return (
    (f = r.trackBrowserAutocompleteMentionMetadata(() => {
      (window.clearTimeout(_), h(), g(), (f = null));
    })),
    queueMicrotask(m),
    l
  );
}
var pe;
function me() {
  return (me = e(() => {
    (A(), u(), K(), M(), N(), P(), z(), L(), q(), (pe = 3e4));
  }))();
}
function he(e) {
  let t = (0, X.c)(6),
    {
      browserConversationId: n,
      composerId: r,
      composerController: i,
      placement: a,
      suggestionState: o,
    } = e,
    s = a === void 0 ? `top` : a,
    c = f?.browserAutocomplete,
    l = T(`2002769348`);
  if (
    c == null ||
    n == null ||
    !o.active ||
    o.kind !== `browser-autocomplete` ||
    (o.query.length === 0 && !l)
  )
    return null;
  let u;
  return (
    t[0] !== n || t[1] !== i || t[2] !== r || t[3] !== s || t[4] !== o
      ? ((u = (0, Q.jsx)(U, {
          name: `browser.in-app`,
          children: (0, Q.jsx)(
            ge,
            {
              autocompleteService: c,
              browserConversationId: n,
              composerId: r,
              composerController: i,
              placement: s,
              suggestionState: o,
            },
            n,
          ),
        })),
        (t[0] = n),
        (t[1] = i),
        (t[2] = r),
        (t[3] = s),
        (t[4] = o),
        (t[5] = u))
      : (u = t[5]),
    u
  );
}
function ge(e) {
  let n = (0, X.c)(68),
    {
      autocompleteService: i,
      browserConversationId: a,
      composerId: s,
      composerController: c,
      placement: l,
      suggestionState: u,
    } = e,
    f = t(ne),
    m = te(),
    [h] = (0, Z.useState)(ve),
    [g] = (0, Z.useState)(_e),
    v;
  n[0] !== h || n[1] !== a || n[2] !== g || n[3] !== c || n[4] !== s || n[5] !== f
    ? ((v = (e, t) => {
        let n = o.getState(c.view.state);
        if (n == null) return !1;
        h.stop(`interaction`, !0);
        let i = fe(f, {
          browserTabId: g,
          composerController: c,
          composerId: s,
          conversationId: a,
          match: e,
        });
        return (
          i != null &&
          (f.get(d).logProductEvent(r, {
            action: k.CODEX_BROWSER_INTERACTIONS_ADDRESS_SHORTCUT_ACTION_OPENED,
            selectionMethod: t === `suggestion_click` ? `click` : `keyboard`,
          }),
          c.insertBrowserTabMention(i, n),
          !0)
        );
      }),
      (n[0] = h),
      (n[1] = a),
      (n[2] = g),
      (n[3] = c),
      (n[4] = s),
      (n[5] = f),
      (n[6] = v))
    : (v = n[6]);
  let y = ee(v),
    b;
  n[7] !== i || n[8] !== a || n[9] !== g || n[10] !== f || n[11] !== y
    ? ((b = () => [
        ie(f, i, {
          getRequestContext: () => ({ browserTabId: g, conversationId: p(a), surface: `composer` }),
          allowDeletion: !1,
          onSelect: y,
        }),
      ]),
      (n[7] = i),
      (n[8] = a),
      (n[9] = g),
      (n[10] = f),
      (n[11] = y),
      (n[12] = b))
    : (b = n[12]);
  let [x] = (0, Z.useState)(b),
    S;
  n[13] !== h || n[14] !== c || n[15] !== f || n[16] !== x
    ? ((S = (e) => {
        let t = null,
          n = () => {
            let e = o.getState(c.view.state),
              n = c.getBrowserAutocompleteRuntime();
            if (e?.active !== !0 || e.kind !== `browser-autocomplete`) {
              n != null && $.delete(n);
              return;
            }
            if (e.query !== t) {
              if (
                ((t = e.query),
                t.length === 0 &&
                  f.get(re)?.checkGate(`2002769348`, { disableExposureLog: !0 }) !== !0)
              ) {
                h.stop(`clobbered`, !1);
                return;
              }
              h.start(
                {
                  preventInlineAutocomplete: !0,
                  selectionEnd: t.length,
                  selectionStart: t.length,
                  value: t,
                },
                x,
              );
            }
          },
          r = h.subscribe(e, x),
          i = oe(c.view, n);
        return (
          n(),
          () => {
            (i(), r(), h.stop(`interaction`, !0));
          }
        );
      }),
      (n[13] = h),
      (n[14] = c),
      (n[15] = f),
      (n[16] = x),
      (n[17] = S))
    : (S = n[17]);
  let C = S,
    w;
  n[18] !== h || n[19] !== x
    ? ((w = () => h.getSnapshot(x)), (n[18] = h), (n[19] = x), (n[20] = w))
    : (w = n[20]);
  let T = (0, Z.useSyncExternalStore)(C, w),
    {
      displayedSelectedIndex: E,
      suggestions: D,
      selectedIndex: O,
      isSelectedSuggestionMissing: A,
      isPending: j,
    } = T,
    M = E < 0 && D.length > 0 && !A ? 0 : E,
    N = `composer-browser-address-suggestions-${g}`,
    P = M < 0 ? null : `${N}-option-${M}`,
    F,
    I;
  (n[21] !== P || n[22] !== c || n[23] !== N || n[24] !== f || n[25] !== D.length
    ? ((F = () => {
        let e = c.getBrowserAutocompleteRuntime();
        D.length > 0 &&
          e != null &&
          !$.has(e) &&
          ($.add(e),
          f
            .get(d)
            .logProductEvent(r, {
              action: k.CODEX_BROWSER_INTERACTIONS_ADDRESS_SHORTCUT_ACTION_ACTIVATED,
            }));
        let t = c.view.dom,
          n = new Map([
            [`role`, t.getAttribute(`role`)],
            [`aria-autocomplete`, t.getAttribute(`aria-autocomplete`)],
            [`aria-controls`, t.getAttribute(`aria-controls`)],
            [`aria-expanded`, t.getAttribute(`aria-expanded`)],
            [`aria-activedescendant`, t.getAttribute(`aria-activedescendant`)],
          ]);
        return (
          t.setAttribute(`role`, `combobox`),
          t.setAttribute(`aria-autocomplete`, `list`),
          t.setAttribute(`aria-expanded`, String(D.length > 0)),
          D.length > 0 ? t.setAttribute(`aria-controls`, N) : t.removeAttribute(`aria-controls`),
          P == null
            ? t.removeAttribute(`aria-activedescendant`)
            : t.setAttribute(`aria-activedescendant`, P),
          () => {
            for (let [e, r] of n) r == null ? t.removeAttribute(e) : t.setAttribute(e, r);
          }
        );
      }),
      (I = [P, c, N, f, D.length]),
      (n[21] = P),
      (n[22] = c),
      (n[23] = N),
      (n[24] = f),
      (n[25] = D.length),
      (n[26] = F),
      (n[27] = I))
    : ((F = n[26]), (I = n[27])),
    (0, Z.useLayoutEffect)(F, I));
  let L;
  n[28] !== h || n[29] !== M || n[30] !== D
    ? ((L = (e) => {
        if (
          !_(e) ||
          e.kind !== `browser-autocomplete` ||
          e.type !== `submit` ||
          e.action !== `insert-mention`
        )
          return;
        let t = D[M];
        t != null && h.acceptSuggestion(t.id, `suggestion_keyboard`);
      }),
      (n[28] = h),
      (n[29] = M),
      (n[30] = D),
      (n[31] = L))
    : (L = n[31]);
  let R = (0, Z.useEffectEvent)(L),
    z;
  n[32] !== c || n[33] !== R || n[34] !== j || n[35] !== D.length
    ? ((z = () => {
        let e = (e) => {
          j || D.length === 0 || (c.consumeBrowserAutocompleteSubmission(), R(e));
        };
        c.eventEmitter.addListener(`composer-suggestion-ui-event`, e);
        let t = j || D.length === 0 ? null : c.consumeBrowserAutocompleteSubmission();
        return (
          t != null && R(t),
          () => {
            c.eventEmitter.removeListener(`composer-suggestion-ui-event`, e);
          }
        );
      }),
      (n[32] = c),
      (n[33] = R),
      (n[34] = j),
      (n[35] = D.length),
      (n[36] = z))
    : (z = n[36]);
  let B;
  (n[37] !== c || n[38] !== j || n[39] !== D.length
    ? ((B = [c, j, D.length]), (n[37] = c), (n[38] = j), (n[39] = D.length), (n[40] = B))
    : (B = n[40]),
    (0, Z.useEffect)(z, B));
  let V;
  n[41] !== h ||
  n[42] !== c ||
  n[43] !== M ||
  n[44] !== j ||
  n[45] !== N ||
  n[46] !== O ||
  n[47] !== u ||
  n[48] !== D
    ? ((V = (e) => {
        if (e.isComposing || D.length === 0) return;
        if (
          e.key === `Enter` &&
          u.query.length === 0 &&
          !e.altKey &&
          !e.ctrlKey &&
          !e.metaKey &&
          !e.shiftKey
        ) {
          let t = D[M];
          t != null &&
            (e.preventDefault(),
            e.stopPropagation(),
            j
              ? c.queueBrowserAutocompleteSubmission({
                  action: `insert-mention`,
                  kind: `browser-autocomplete`,
                  type: `submit`,
                })
              : h.acceptSuggestion(t.id, `suggestion_keyboard`));
          return;
        }
        if (e.key !== `ArrowDown` && e.key !== `ArrowUp`) return;
        (e.preventDefault(), e.stopPropagation());
        let t = e.key === `ArrowDown` ? 1 : -1;
        (O < 0 && M >= 0 && h.moveSelection(1),
          h.moveSelection(t),
          requestAnimationFrame(() => {
            let e = h.getSnapshot().selectedIndex,
              t = `${N}-option-${e}`;
            document.getElementById(t)?.scrollIntoView?.({ block: `nearest` });
          }));
      }),
      (n[41] = h),
      (n[42] = c),
      (n[43] = M),
      (n[44] = j),
      (n[45] = N),
      (n[46] = O),
      (n[47] = u),
      (n[48] = D),
      (n[49] = V))
    : (V = n[49]);
  let H = (0, Z.useEffectEvent)(V),
    U;
  n[50] !== c.view.dom || n[51] !== H
    ? ((U = () => {
        let e = c.view.dom,
          t = (e) => {
            H(e);
          };
        return (
          e.addEventListener(`keydown`, t, !0),
          () => {
            e.removeEventListener(`keydown`, t, !0);
          }
        );
      }),
      (n[50] = c.view.dom),
      (n[51] = H),
      (n[52] = U))
    : (U = n[52]);
  let W;
  if (
    (n[53] === c ? (W = n[54]) : ((W = [c]), (n[53] = c), (n[54] = W)),
    (0, Z.useEffect)(U, W),
    D.length === 0)
  )
    return null;
  let G;
  n[55] === m
    ? (G = n[56])
    : ((G = m.formatMessage({
        id: `thread.browser.addressSuggestions`,
        defaultMessage: `Address suggestions`,
        description: `Accessible label for browser address bar suggestions`,
      })),
      (n[55] = m),
      (n[56] = G));
  let K;
  n[57] === h
    ? (K = n[58])
    : ((K = (e) => {
        h.acceptSuggestion(e.id, `suggestion_click`);
      }),
      (n[57] = h),
      (n[58] = K));
  let q;
  n[59] !== T.suggestions || n[60] !== M || n[61] !== N || n[62] !== G || n[63] !== K
    ? ((q = (0, Q.jsx)(de, {
        label: G,
        listboxId: N,
        suggestions: T.suggestions,
        selectedIndex: M,
        onSelect: K,
      })),
      (n[59] = T.suggestions),
      (n[60] = M),
      (n[61] = N),
      (n[62] = G),
      (n[63] = K),
      (n[64] = q))
    : (q = n[64]);
  let J;
  return (
    n[65] !== l || n[66] !== q
      ? ((J = (0, Q.jsx)(ae, { isActive: !0, placement: l, spacing: `compact`, children: q })),
        (n[65] = l),
        (n[66] = q),
        (n[67] = J))
      : (J = n[67]),
    J
  );
}
function _e() {
  return h(crypto.randomUUID());
}
function ve() {
  return new ue();
}
var X, Z, Q, $;
function ye() {
  return (ye = e(() => {
    ((X = y()),
      l(),
      c(),
      u(),
      (Z = D()),
      m(),
      ce(),
      le(),
      H(),
      j(),
      a(),
      z(),
      v(),
      i(),
      b(),
      x(),
      E(),
      g(),
      F(),
      me(),
      (Q = w()),
      ($ = new WeakSet()));
  }))();
}
ye();
export { he as BrowserAddressSuggestionOverlay };
//# sourceMappingURL=browser-address-suggestion-overlay-b5748ee4533d.js.map
