const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./browser-address-suggestion-overlay-b5748ee4533d.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-7552fc8d5d82.js",
      "./app-shared-342447930c78.css",
      "./app-initial-3916b423772b.js",
      "./app-initial-e55cd978d577.css",
      "./popup-11718d0a1a4c.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Jh as t,
  Kh as n,
  O0t as r,
  RJt as i,
  _dn as a,
  cun as o,
  dun as s,
  fE as c,
  fun as l,
  k0t as u,
  lun as d,
  mcn as f,
  pE as p,
  vdn as m,
  w0t as h,
  wT as g,
} from "./app-shared-7552fc8d5d82.js";
import { $xt as _, Zxt as v } from "./app-initial-3916b423772b.js";
var y;
function b() {
  return (b = e(() => {
    (i(),
      g(),
      (y = class {
        composerController;
        mentionDismissalFrame = null;
        mentionDismissalTimeout = null;
        mentionPath = null;
        metadataCleanups = new Set();
        prefersReducedMotion = null;
        constructor(e) {
          this.composerController = e;
        }
        subscribeMentionDismissal = (e) => (
          this.composerController.eventEmitter.addListener(
            `browser-autocomplete-mention-dismissal-change`,
            e,
          ),
          () => {
            this.composerController.eventEmitter.removeListener(
              `browser-autocomplete-mention-dismissal-change`,
              e,
            );
          }
        );
        getMentionDismissalSnapshot = () => this.mentionDismissalTimeout != null;
        setReducedMotion(e) {
          this.prefersReducedMotion = e;
        }
        setMentionPath(e) {
          this.mentionPath = e;
        }
        hasStandaloneMention() {
          if (this.mentionPath == null || this.composerController.view.isDestroyed) return !1;
          let e = !1,
            t = !1;
          return (
            this.composerController.view.state.doc.descendants((n) =>
              n.type.name === `browserTabMention` && n.attrs.path === this.mentionPath
                ? ((t ||= e), (e = !0), !1)
                : (n.isText
                    ? (t ||= n.textContent.trim().length > 0)
                    : (n.isInline || (n.isBlock && n.type.name !== `paragraph`)) && (t = !0),
                  !t),
            ),
            e && !t
          );
        }
        dismissStandaloneMentionOnBlur() {
          this.cancelMentionDismissal();
          let e = !0,
            t = () => {
              if (
                ((this.mentionDismissalFrame = null),
                !(
                  this.composerController.view.isDestroyed ||
                  this.composerController.view.hasFocus() ||
                  !this.hasStandaloneMention()
                ))
              ) {
                if (!this.composerController.isInputActive) {
                  e && ((e = !1), (this.mentionDismissalFrame = requestAnimationFrame(t)));
                  return;
                }
                if (
                  this.prefersReducedMotion ??
                  window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches
                ) {
                  this.composerController.setText(``);
                  return;
                }
                ((this.mentionDismissalTimeout = window.setTimeout(() => {
                  this.completeMentionDismissal();
                }, 150)),
                  this.composerController.eventEmitter.emit(
                    `browser-autocomplete-mention-dismissal-change`,
                  ));
              }
            };
          this.mentionDismissalFrame = requestAnimationFrame(t);
        }
        cancelMentionDismissal() {
          (this.mentionDismissalFrame != null &&
            (cancelAnimationFrame(this.mentionDismissalFrame), (this.mentionDismissalFrame = null)),
            this.mentionDismissalTimeout != null &&
              (window.clearTimeout(this.mentionDismissalTimeout),
              (this.mentionDismissalTimeout = null),
              this.composerController.eventEmitter.emit(
                `browser-autocomplete-mention-dismissal-change`,
              )));
        }
        completeMentionDismissal() {
          let e =
            this.composerController.isInputActive &&
            !this.composerController.view.hasFocus() &&
            this.hasStandaloneMention();
          (this.cancelMentionDismissal(), e && this.composerController.setText(``));
        }
        updateMention(e) {
          if (this.composerController.view.isDestroyed) return !1;
          let t = h.safeParse({
            browserId: e.browserId,
            pluginId: e.pluginId,
            source: e.source,
            tabId: e.tabId,
            snapshot: e.snapshot,
          });
          if (!t.success) return !1;
          let n = u(t.data),
            i = e.faviconUrl ?? ``,
            a = this.composerController.view.state.tr,
            o = !1;
          return (
            this.composerController.view.state.doc.descendants((t, s) => {
              if (t.type.name !== `browserTabMention`) return !0;
              let c = typeof t.attrs.path == `string` ? r(t.attrs.path) : null;
              return (
                c == null ||
                c.browserId !== e.browserId ||
                c.pluginId !== e.pluginId ||
                c.source !== e.source ||
                c.tabId !== e.tabId ||
                ((o = !0), t.attrs.path === n && t.attrs.faviconUrl === i) ||
                (this.mentionPath === t.attrs.path && (this.mentionPath = n),
                (a = a.setNodeMarkup(s, void 0, { ...t.attrs, faviconUrl: i, path: n })),
                !0)
              );
            }),
            a.docChanged && this.composerController.view.dispatch(a.setMeta(`addToHistory`, !1)),
            o
          );
        }
        trackMentionMetadata(e) {
          return (
            this.metadataCleanups.add(e),
            () => {
              this.metadataCleanups.delete(e) && e();
            }
          );
        }
        dispose() {
          (this.cancelMentionDismissal(), (this.mentionPath = null));
          for (let e of this.metadataCleanups) e();
          this.metadataCleanups.clear();
        }
      }));
  }))();
}
function x(e) {
  let t = (0, C.c)(21),
    { browserConversationId: n, composerController: r, composerId: i, placement: a } = e,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = () => r.getBrowserAutocompleteRuntime() ?? new y(r)), (t[0] = r), (t[1] = o));
  let [s] = (0, w.useState)(o),
    c = (0, w.useSyncExternalStore)(s.subscribeMentionDismissal, s.getMentionDismissalSnapshot),
    u = _(r, S),
    d,
    f;
  (t[2] !== r || t[3] !== s
    ? ((d = () => {
        r.attachBrowserAutocompleteRuntime(s);
      }),
      (f = [r, s]),
      (t[2] = r),
      (t[3] = s),
      (t[4] = d),
      (t[5] = f))
    : ((d = t[4]), (f = t[5])),
    (0, w.useLayoutEffect)(d, f));
  let p;
  t[6] !== r.view.dom.parentElement || t[7] !== c
    ? ((p = () => {
        let e = r.view.dom.parentElement;
        if (e != null)
          return (
            c
              ? e.setAttribute(`data-dismissing-browser-autocomplete-mention`, ``)
              : e.removeAttribute(`data-dismissing-browser-autocomplete-mention`),
            () => {
              e.removeAttribute(`data-dismissing-browser-autocomplete-mention`);
            }
          );
      }),
      (t[6] = r.view.dom.parentElement),
      (t[7] = c),
      (t[8] = p))
    : (p = t[8]);
  let m;
  (t[9] !== r || t[10] !== c ? ((m = [r, c]), (t[9] = r), (t[10] = c), (t[11] = m)) : (m = t[11]),
    (0, w.useLayoutEffect)(p, m));
  let h, g;
  if (
    (t[12] === r
      ? ((h = t[13]), (g = t[14]))
      : ((h = () =>
          l.subscribe(`browser-sidebar-web-contents-pointer-down`, () => {
            r.view.hasFocus() && r.hasStandaloneBrowserAutocompleteMention() && r.view.dom.blur();
          })),
        (g = [r]),
        (t[12] = r),
        (t[13] = h),
        (t[14] = g)),
    (0, w.useEffect)(h, g),
    u == null)
  )
    return null;
  let v;
  return (
    t[15] !== n || t[16] !== u || t[17] !== r || t[18] !== i || t[19] !== a
      ? ((v = (0, T.jsx)(E, {
          browserConversationId: n,
          composerController: r,
          composerId: i,
          placement: a,
          suggestionState: u,
        })),
        (t[15] = n),
        (t[16] = u),
        (t[17] = r),
        (t[18] = i),
        (t[19] = a),
        (t[20] = v))
      : (v = t[20]),
    v
  );
}
function S(e) {
  let t = n.getState(e.view.state);
  return t?.active === !0 && t.kind === `browser-autocomplete` ? t : null;
}
var C, w, T, E;
function D() {
  return (D = e(() => {
    ((C = a()),
      (w = m()),
      t(),
      v(),
      c(),
      s(),
      b(),
      (T = f()),
      d(),
      (E = p(
        async () =>
          (
            await o(
              async () => {
                let { BrowserAddressSuggestionOverlay: e } = await import(
                  `./browser-address-suggestion-overlay-b5748ee4533d.js`
                );
                return { BrowserAddressSuggestionOverlay: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
              import.meta.url,
            )
          ).BrowserAddressSuggestionOverlay,
        { propagateLoadError: !0 },
      )));
  }))();
}
D();
export { x as BrowserAddressShortcut };
//# sourceMappingURL=browser-address-shortcut-33dfe5fb71b2.js.map
