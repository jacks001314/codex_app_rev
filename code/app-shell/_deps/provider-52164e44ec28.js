import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  B6t as t,
  Cpn as n,
  DXt as r,
  Fft as i,
  IG as a,
  Ift as o,
  Itn as s,
  J2t as c,
  OXt as l,
  QXt as u,
  RG as d,
  Rpn as f,
  Spn as p,
  _Yt as m,
  e0t as h,
  eZt as g,
  gMt as _,
  hMt as v,
  hmn as y,
  hz as b,
  iQt as x,
  kmn as ee,
  mR as te,
  mYt as S,
  mz as C,
  pR as w,
  q2t as T,
  snn as E,
  tQt as D,
  zG as O,
  zpn as k,
} from "./app-initial-f094ef01c64d.js";
import { Kb as A, qb as j } from "./app-primary-4c40d73a1074.js";
function M(e) {
  return e.matches.slice(0, L);
}
function N(e, t) {
  if (e?.defaultMatch == null) return -1;
  let n = e.defaultMatch,
    r = e.matches.findIndex(
      (e) => e.destinationURL === n.destinationURL && e.fillIntoEdit === n.fillIntoEdit,
    );
  return r >= 0 && r < L && I(t, e.matches[r]) ? r : -1;
}
function P(e, t, n) {
  if (n && t.inlineAutocompletion.length > 0)
    return {
      selectionEnd: e.length + t.inlineAutocompletion.length,
      selectionStart: e.length,
      value: `${e}${t.inlineAutocompletion}`,
    };
  let r = t.fillIntoEdit.toLowerCase().startsWith(e.toLowerCase());
  return {
    selectionEnd: t.fillIntoEdit.length,
    selectionStart: r ? e.length : 0,
    value: t.fillIntoEdit,
  };
}
function F(e, t) {
  if (e.length === 0) return [];
  let n = [],
    r = t[0];
  return (
    (r == null || r.offset > 0) && n.push({ offset: 0, style: 0, text: e.slice(0, r?.offset) }),
    t.forEach((r, i) => {
      let a = e.slice(r.offset, t[i + 1]?.offset);
      a.length > 0 && n.push({ ...r, text: a });
    }),
    n
  );
}
function I(e, t) {
  if (t == null) return !1;
  if (t.inlineAutocompletion.length === 0) return t.acceptToken == null;
  let n = `${e}${t.inlineAutocompletion}`.match(R)?.[0];
  return n == null || e.toLowerCase().startsWith(n.toLowerCase());
}
var L,
  R,
  z = e(() => {
    ((L = 8), (R = /^[a-z][a-z\d+.-]*:(?:\/\/)?/i));
  });
function B(e) {
  let t = (0, W.c)(34),
    { match: r, isZeroState: a } = e,
    o = r.isSearch && r.acceptToken == null,
    s = o ? r.fillIntoEdit : r.description || r.contents || r.fillIntoEdit,
    c,
    l,
    u,
    d,
    f;
  if (
    t[0] !== o ||
    t[1] !== a ||
    t[2] !== r.contents ||
    t[3] !== r.contentsClass ||
    t[4] !== r.description ||
    t[5] !== r.descriptionClass ||
    t[6] !== r.faviconDataURL ||
    t[7] !== r.fillIntoEdit ||
    t[8] !== r.type ||
    t[9] !== s
  ) {
    let e = o ? [] : r.descriptionClass;
    !o && !r.description && (e = r.contents ? r.contentsClass : []);
    let p = !o && r.description ? r.contents || r.fillIntoEdit : null,
      m = r.contents ? r.contentsClass : [],
      h;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = (0, G.jsx)(v, { className: `text-codex-description`, "aria-hidden": !1, asset: i })),
        (t[15] = h))
      : (h = t[15]);
    let g = h;
    if (o) {
      let e;
      (t[16] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(v, {
            className: `shrink-0 text-codex-description`,
            "aria-hidden": !1,
            asset: j,
          })),
          (t[16] = e))
        : (e = t[16]),
        (g = e));
    } else if (r.faviconDataURL != null) {
      let e;
      (t[17] === r.faviconDataURL
        ? (e = t[18])
        : ((e = (0, G.jsx)(`img`, {
            alt: ``,
            className: `size-4 rounded-2xs object-contain`,
            src: r.faviconDataURL,
          })),
          (t[17] = r.faviconDataURL),
          (t[18] = e)),
        (g = e));
    }
    ((f = g), (c = `flex min-w-0 flex-1 items-baseline gap-1`));
    let _ = o
        ? `min-w-0 flex-1 truncate text-default`
        : `max-w-[60%] shrink-0 truncate text-default`,
      y = F(s, e).map(H);
    (t[19] !== _ || t[20] !== y
      ? ((l = (0, G.jsx)(`span`, { className: _, children: y })),
        (t[19] = _),
        (t[20] = y),
        (t[21] = l))
      : (l = t[21]),
      t[22] !== o || t[23] !== a || t[24] !== r.type
        ? ((u =
            o && (!a || r.type !== `search-history`)
              ? (0, G.jsx)(`span`, {
                  className: `shrink-0 text-codex-description`,
                  children: (0, G.jsx)(n, {
                    id: `thread.browser.search`,
                    defaultMessage: `Search the web`,
                    description: `Search action shown after the query in the browser address bar autocomplete option.`,
                  }),
                })
              : null),
          (t[22] = o),
          (t[23] = a),
          (t[24] = r.type),
          (t[25] = u))
        : (u = t[25]),
      (d =
        p == null
          ? null
          : (0, G.jsxs)(G.Fragment, {
              children: [
                (0, G.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `shrink-0 text-codex-description before:content-['—']`,
                }),
                (0, G.jsx)(`span`, {
                  className: `min-w-0 flex-1 truncate text-codex-description`,
                  children: F(p, m).map(V),
                }),
              ],
            })),
      (t[0] = o),
      (t[1] = a),
      (t[2] = r.contents),
      (t[3] = r.contentsClass),
      (t[4] = r.description),
      (t[5] = r.descriptionClass),
      (t[6] = r.faviconDataURL),
      (t[7] = r.fillIntoEdit),
      (t[8] = r.type),
      (t[9] = s),
      (t[10] = c),
      (t[11] = l),
      (t[12] = u),
      (t[13] = d),
      (t[14] = f));
  } else ((c = t[10]), (l = t[11]), (u = t[12]), (d = t[13]), (f = t[14]));
  let p;
  t[26] !== c || t[27] !== l || t[28] !== u || t[29] !== d
    ? ((p = (0, G.jsxs)(`span`, { className: c, children: [l, u, d] })),
      (t[26] = c),
      (t[27] = l),
      (t[28] = u),
      (t[29] = d),
      (t[30] = p))
    : (p = t[30]);
  let m;
  return (
    t[31] !== f || t[32] !== p
      ? ((m = (0, G.jsxs)(G.Fragment, { children: [f, p] })), (t[31] = f), (t[32] = p), (t[33] = m))
      : (m = t[33]),
    m
  );
}
function V(e) {
  return (0, G.jsx)(`span`, { className: U(e.style), children: e.text }, e.offset);
}
function H(e) {
  return (0, G.jsx)(`span`, { className: U(e.style), children: e.text }, e.offset);
}
function U(e) {
  return f({ "font-semibold": !!(e & K), "text-codex-description": !!(e & 5) });
}
var W,
  G,
  K,
  q = e(() => {
    ((W = ee()), o(), A(), k(), p(), _(), z(), (G = y()), (K = 2));
  });
function J(e) {
  return `web:${e.destinationURL}\0${e.fillIntoEdit}`;
}
var Y,
  X,
  Z,
  Q = e(() => {
    (te(),
      r(),
      q(),
      z(),
      (Y = y()),
      c(),
      (X = { request: null, result: null, isRetained: !1 }),
      (Z = class {
        service;
        options;
        id = `browser`;
        submit;
        onRendered;
        editingSessionId = null;
        shownEditingSessionId = null;
        pendingSuggestionsShown = null;
        snapshot = X;
        isEnabled = !0;
        onChange;
        constructor(e, t) {
          ((this.service = e),
            (this.options = t),
            (this.submit = t.submit),
            (this.onRendered = t.onRendered));
        }
        getSuggestions(e) {
          let { scope: t, onSelect: n, allowDeletion: r = !0 } = this.options;
          if (this.service == null || !t.get(w, { name: `browser.in-app` }).isCapable) return null;
          let i = t.get(l),
            { result: a, isRetained: o } = this.snapshot,
            s = !this.isEnabled || a == null ? [] : M(a),
            c = N(a, e);
          return {
            suggestions: s.map((t, a) => ({
              id: J(t),
              canBeDefault: !o && e.length > 0 && a === c,
              renderKey: t.type === `search-what-you-typed` ? t.type : void 0,
              content: (0, Y.jsx)(B, { match: t, isZeroState: e.length === 0 }),
              ariaLabel:
                t.isSearch && t.acceptToken == null
                  ? i.formatMessage(
                      {
                        id: `thread.browser.searchForQuery`,
                        defaultMessage: `Search the web for ‘{query}’`,
                        description: `Accessible label for the search option in the browser address bar.`,
                      },
                      { query: t.fillIntoEdit },
                    )
                  : void 0,
              isEmphasized: t.isSearch && t.acceptToken == null,
              preview: {
                inline: t.inlineAutocompletion.length === 0 ? null : P(e, t, !0),
                selected: P(e, t, !1),
              },
              onSelect: (e, r) => n(t, e, r),
              deleteAction:
                r && t.deletable && t.deleteToken != null
                  ? {
                      label: i.formatMessage(
                        {
                          id: `thread.browser.removeAddressSuggestion`,
                          defaultMessage: `Remove suggestion for {suggestion}`,
                          description: `Accessible label for removing a browser address-bar autocomplete suggestion from its underlying history, search, or extension provider.`,
                        },
                        {
                          suggestion:
                            t.isSearch && t.acceptToken == null
                              ? t.fillIntoEdit
                              : t.description || t.contents || t.fillIntoEdit,
                        },
                      ),
                      run: () => this.deleteMatch(t),
                    }
                  : void 0,
            })),
            isRetained: o,
          };
        }
        getRenderedMatches(e) {
          let t = new Map(this.snapshot.result?.matches.map((e) => [J(e), e]));
          return e.suggestions.flatMap(({ id: e }) => t.get(e) ?? []);
        }
        getEditingSessionId() {
          return this.editingSessionId ?? void 0;
        }
        subscribe(e) {
          return this.options.scope.watch((t) => {
            (this.setEnabled(t.get(w, { name: `browser.in-app` }).isCapable), t.get(l), e());
          });
        }
        start({ value: e, ...t }, n) {
          (this.setEnabled(this.options.scope.get(w, { name: `browser.in-app` }).isCapable),
            this.startRequest({ ...t, query: e, ...this.options.getRequestContext() }, n));
        }
        setEnabled(e) {
          if (this.isEnabled === e) return;
          (this.stopRequest(`interaction`), (this.isEnabled = e));
          let t = this.snapshot.request;
          t != null &&
            ((this.snapshot = { request: t, result: null, isRetained: !1 }), this.startRequest(t));
        }
        startRequest(e, t = this.onChange) {
          try {
            var n = T();
            this.onChange = t;
            let r = this.snapshot.request,
              i =
                r != null &&
                r.browserTabId === e.browserTabId &&
                r.conversationId === e.conversationId &&
                r.surface === e.surface &&
                (r.query.length === 0) == (e.query.length === 0)
                  ? this.snapshot.result
                  : null,
              a = this.editingSessionId ?? crypto.randomUUID();
            this.editingSessionId = a;
            let o = { ...e, editingSessionId: a, requestId: crypto.randomUUID() };
            if (
              (this.setSnapshot({ request: o, result: i, isRetained: i != null }),
              !this.isEnabled || this.service == null)
            ) {
              this.handleResult({ ...o, result: { defaultMatch: null, done: !0, matches: [] } });
              return;
            }
            n.u(
              this.service.start(
                {
                  browserTabId: o.browserTabId,
                  conversationId: o.conversationId,
                  editingSessionId: a,
                  requestId: o.requestId,
                  input: {
                    cursorPosition: o.selectionStart,
                    preventInlineAutocomplete: o.preventInlineAutocomplete,
                    text: o.query,
                  },
                  ...(o.surface == null ? {} : { surface: o.surface }),
                },
                this.handleResult,
              ),
            );
          } catch (e) {
            n.e = e;
          } finally {
            n.d();
          }
        }
        stop(e, t) {
          (this.stopRequest(e),
            this.setSnapshot(X),
            (this.onChange = void 0),
            t && ((this.editingSessionId = null), (this.shownEditingSessionId = null)));
        }
        accept(e) {
          try {
            var t = T();
            let n = this.snapshot.request;
            return !this.isEnabled || n == null || e.acceptToken == null || this.service == null
              ? !1
              : (this.flushPendingSuggestionsShown(),
                t.u(
                  this.service.accept({
                    acceptToken: e.acceptToken,
                    browserTabId: n.browserTabId,
                    conversationId: n.conversationId,
                    editingSessionId: n.editingSessionId,
                    requestId: n.requestId,
                    ...(n.surface == null ? {} : { surface: n.surface }),
                  }),
                ),
                this.setSnapshot(X),
                (this.editingSessionId = null),
                !0);
          } catch (e) {
            t.e = e;
          } finally {
            t.d();
          }
        }
        recordNavigation(e) {
          try {
            var t = T();
            let n = this.snapshot.request;
            if (
              !this.isEnabled ||
              n == null ||
              n.query.length === 0 ||
              e.acceptToken != null ||
              this.service == null
            )
              return;
            t.u(
              this.service.recordNavigation({
                browserTabId: n.browserTabId,
                conversationId: n.conversationId,
                destinationURL: e.destinationURL,
                editingSessionId: n.editingSessionId,
                requestId: n.requestId,
              }),
            );
          } catch (e) {
            t.e = e;
          } finally {
            t.d();
          }
        }
        deleteMatch(e) {
          try {
            var t = T();
            let n = this.snapshot.request;
            return !this.isEnabled ||
              n == null ||
              this.snapshot.isRetained ||
              !e.deletable ||
              e.deleteToken == null ||
              this.service == null
              ? !1
              : (this.flushPendingSuggestionsShown(),
                t.u(
                  this.service.deleteMatch({
                    browserTabId: n.browserTabId,
                    conversationId: n.conversationId,
                    deleteToken: e.deleteToken,
                    editingSessionId: n.editingSessionId,
                    requestId: n.requestId,
                  }),
                ),
                !0);
          } catch (e) {
            t.e = e;
          } finally {
            t.d();
          }
        }
        recordRenderedSuggestions(e, t) {
          let n = this.snapshot.request;
          if (n == null || this.shownEditingSessionId === n.editingSessionId) return;
          let r = this.getRenderedMatches(e);
          if (r.length === 0) return;
          let i = e.preview;
          ((this.pendingSuggestionsShown = {
            metadata: {
              editingSessionId: n.editingSessionId,
              hasInlineCompletion:
                r.some((t) => J(t) === e.selectedSuggestion?.id) &&
                i != null &&
                i.selectionStart === n.query.length &&
                i.selectionEnd > i.selectionStart,
              hasSearchRow: r.some((e) => e.isSearch && e.acceptToken == null),
              inputLength: n.query.length,
              suggestionCount: r.length,
            },
            onSuggestionsShown: t,
          }),
            ((!this.snapshot.isRetained && this.snapshot.result?.done) || e.isKeyboardSelection) &&
              this.flushPendingSuggestionsShown());
        }
        handleResult = (e) => {
          let t = this.snapshot.request;
          t == null ||
            e.browserTabId !== t.browserTabId ||
            e.conversationId !== t.conversationId ||
            e.editingSessionId !== t.editingSessionId ||
            e.requestId !== t.requestId ||
            (this.snapshot.result != null && !e.result.done && e.result.matches.length === 0) ||
            this.setSnapshot({ request: t, result: e.result, isRetained: !1 });
        };
        flushPendingSuggestionsShown() {
          let e = this.pendingSuggestionsShown;
          e != null &&
            ((this.pendingSuggestionsShown = null),
            (this.shownEditingSessionId = e.metadata.editingSessionId),
            e.onSuggestionsShown(e.metadata));
        }
        stopRequest(e) {
          this.flushPendingSuggestionsShown();
          let t = this.snapshot.request;
          if (this.isEnabled && t != null)
            try {
              var n = T();
              n.u(
                this.service?.stop({
                  browserTabId: t.browserTabId,
                  conversationId: t.conversationId,
                  editingSessionId: t.editingSessionId,
                  requestId: t.requestId,
                  reason: e,
                  ...(t.surface == null ? {} : { surface: t.surface }),
                }),
              );
            } catch (e) {
              n.e = e;
            } finally {
              n.d();
            }
        }
        setSnapshot(e) {
          ((this.snapshot = e), this.onChange?.());
        }
      }));
  }),
  $,
  ne = e(() => {
    (h(),
      t(),
      d(),
      u(),
      b(),
      S(),
      Q(),
      ($ = (e, t) => {
        let n = new Z(C?.browserAutocomplete, {
          scope: e,
          getRequestContext: () => {
            let e = t();
            return { browserTabId: s(e.id), conversationId: E(e.conversationId) };
          },
          onSelect: (e, i, a) => (
            i !== `suggestion_click` && n.accept(e)
              ? t().stopEditing()
              : r(e.destinationURL, e, i, a),
            !0
          ),
          submit: (e, t) => (r(e, null, `typed_enter`, t), !0),
          onRendered: (r) =>
            n.recordRenderedSuggestions(r, (n) => {
              g(e, x, { ...n, panelTarget: t().panelTarget });
            }),
        });
        function r(r, i, o, s) {
          let c = t(),
            l = n.getRenderedMatches(s),
            u = {
              acceptanceMethod: o,
              committedLength: i?.fillIntoEdit.length ?? r.length,
              editingSessionId: n.getEditingSessionId(),
              inputLength: c.value.length,
              suggestionCount: l.length,
              suggestionIndex:
                i == null
                  ? void 0
                  : l.findIndex(
                      (e) =>
                        e.destinationURL === i.destinationURL && e.fillIntoEdit === i.fillIntoEdit,
                    ),
            };
          (i != null && n.recordNavigation(i), n.stop(`interaction`, !0), c.stopEditing());
          let d = {
            openAIGoLinksEnabled:
              e.get(m)?.checkGate(`3646210497`, { disableExposureLog: !0 }) === !0,
          };
          if (a(r, d).length > 0) {
            let t = `manual`;
            (i == null ? O(r, d) && (t = `search`) : (t = `typeahead`),
              g(e, D, { ...u, panelTarget: c.panelTarget, source: t }));
          }
          c.navigate(r, i != null);
        }
        return n;
      }));
  });
export { Q as i, ne as n, Z as r, $ as t };
//# sourceMappingURL=provider-52164e44ec28.js.map
