import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $G as n,
  $st as r,
  CH as i,
  FBt as a,
  HFt as o,
  LNt as s,
  MNt as c,
  NE as l,
  NNt as u,
  ORt as d,
  PBt as f,
  Pit as p,
  QG as m,
  Qst as h,
  SB as g,
  SLt as _,
  TCt as v,
  TE as y,
  TY as b,
  VRt as x,
  XOt as S,
  Y3 as C,
  YOt as w,
  Z3 as T,
  ZSt as E,
  _D as D,
  ck as ee,
  fD as te,
  gD as ne,
  hD as re,
  iCt as O,
  iFt as ie,
  jit as ae,
  kH as oe,
  kRt as se,
  mD as ce,
  nB as le,
  okt as k,
  rB as ue,
  rk as de,
  tCt as A,
  tk as fe,
  tkt as j,
  wB as pe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as me,
  _Nr as he,
  hNr as ge,
  iRr as M,
  tyr as _e,
  wLr as ve,
  zRr as ye,
} from "./app-initial-ad16eaadf81f.js";
import { n as be, t as xe } from "./version-history-mutation-c3d1e9519c5d.js";
import { n as Se, r as Ce } from "./inspector-color-field-eb70b6035b23.js";
import { n as we, t as Te } from "./range-slider-d313bf266f03.js";
import { n as N, t as Ee } from "./runtime-7c1bd5d08a7b.js";
function De(e) {
  return `<script>
(() => {
  const style = document.createElement("style");
  style.dataset.sitesPreviewTheme = "live";
  document.body.append(style);
  const update = (state) => {
    if (state && typeof state.css === "string") style.textContent = state.css;
  };
  update(${JSON.stringify(e ?? null).replaceAll(`<`, `\\u003c`)});
  window.addEventListener("openai:set_globals", (event) => {
    if (event.detail && event.detail.globals) update(event.detail.globals.sandboxDocumentState);
  });
})();
<\/script>`;
}
var P, F;
function I() {
  return (I = e(() => {
    (Ee(),
      (P = {
        ...N,
        buildHtml(e, t, n, r) {
          let i =
            (e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i) ?? e.match(/<\/html\s*>\s*$/i))?.index ??
            e.length;
          return N.buildHtml(e.slice(0, i) + De(r) + e.slice(i), t, n);
        },
      }),
      (F = { ...P, csp: { ...P.csp, disableNetworkRequests: !0 } }));
  }))();
}
function Oe(e) {
  let t = document.createElement(`template`);
  t.innerHTML = e;
  let n = ke(t.content.querySelector(`script[type="application/json"][data-sites-preview-theme]`)),
    r = new Map(),
    i = new Set(),
    a = [];
  for (let e of t.content.querySelectorAll(`style:not([data-sites-preview-theme])`)) {
    let t = new CSSStyleSheet(),
      n = e.textContent ?? ``;
    t.replaceSync(n);
    let o = z(t.cssRules),
      s = e.getAttribute(`media`);
    if ((a.push(s ? `@media ${s}{${o}}` : o), !e.hasAttribute(`media`))) {
      for (let e of Array.from(t.cssRules))
        if (e instanceof CSSStyleRule && e.selectorText === `:root`)
          for (let t of Array.from(e.style)) r.set(t, e.style.getPropertyValue(t).trim());
    }
    let c = n.replace(/\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, ``);
    for (let e of c.matchAll(/var\(\s*(--site-[\w-]+)\s*[,)]/g)) i.add(e[1]);
  }
  function o(e) {
    return i.has(e) ? r.get(e) : void 0;
  }
  let s = [`--site-font-body`, `--site-font-heading`].filter((e) => {
      let t = o(e);
      return t != null && CSS.supports(`font-family`, t) && !t.includes(`var(`);
    }),
    c = V.safeParse(o(`--site-primary`)),
    l = V.safeParse(o(`--site-secondary`)),
    u = V.safeParse(o(`--site-background`)),
    d = {
      appearance: `custom`,
      primary: c.success ? c.data : null,
      secondary: l.success ? l.data : null,
      background: u.success ? u.data : null,
      typography: s.length > 0 ? `original` : null,
      spacing: o(`--site-spacing-scale`) === `1` ? 1 : null,
      roundness: o(`--site-radius-scale`) === `1` ? 1 : null,
      headingScale: o(`--site-heading-scale`) === `1` ? 1 : null,
      decorationOpacity: o(`--site-decoration-opacity`) === `1` ? 1 : null,
    };
  return {
    content: Object.entries(d).some(([e, t]) => e !== `appearance` && t != null) ? e.replace(Ne, ``) : e,
    fontVariables: s,
    simpleCss: a.join(`
`),
    contrastColors: [`primary`, `secondary`, `background`].filter(
      (e) => V.safeParse(o(`--site-on-${e}`)).success,
    ),
    original: d,
    saved: L(n ?? d, d),
    presets: { custom: d, simple: L(Me, d) },
  };
}
function ke(e) {
  let t = e?.textContent;
  if (t)
    try {
      let e = H.safeParse(JSON.parse(t));
      if (e.success) return e.data;
    } catch {}
}
function L(e, t) {
  return {
    appearance: e.appearance,
    primary: t.primary == null ? null : (e.primary ?? t.primary),
    secondary: t.secondary == null ? null : (e.secondary ?? t.secondary),
    background: t.background == null ? null : (e.background ?? t.background),
    typography: t.typography == null ? null : (e.typography ?? t.typography),
    spacing: t.spacing == null ? null : (e.spacing ?? t.spacing),
    roundness: t.roundness == null ? null : (e.roundness ?? t.roundness),
    headingScale: t.headingScale == null ? null : (e.headingScale ?? t.headingScale),
    decorationOpacity: t.decorationOpacity == null ? null : (e.decorationOpacity ?? t.decorationOpacity),
  };
}
function Ae(e, t, n, r, i) {
  let a = [];
  for (let e of [`primary`, `secondary`, `background`])
    if (
      t[e] != null &&
      n[e] != null &&
      (n.appearance === `simple` || n[e] !== t[e]) &&
      (a.push(`--site-${e}:${R(n, e)}`), r.includes(e))
    ) {
      let t = B(n[e]);
      a.push(
        `--site-on-${e}:${n.appearance === `simple` ? `light-dark(${t},${e === `primary` ? `#000` : `#fff`})` : t}`,
      );
    }
  if (
    (t.spacing != null && n.spacing != null && n.spacing !== 1 && a.push(`--site-spacing-scale:${n.spacing}`),
    t.roundness != null &&
      n.roundness != null &&
      n.roundness !== 1 &&
      a.push(`--site-radius-scale:${n.roundness}`),
    n.typography != null && n.typography !== `original`)
  ) {
    let t = n.typography === `technical` ? `ui-monospace,monospace` : `system-ui,sans-serif`,
      r = n.typography === `editorial` ? `Georgia,serif` : t;
    for (let n of e) a.push(`${n}:${n === `--site-font-heading` ? r : t}`);
  }
  (t.decorationOpacity != null &&
    n.decorationOpacity != null &&
    n.decorationOpacity !== 1 &&
    a.push(`--site-decoration-opacity:${n.decorationOpacity}`),
    t.headingScale != null &&
      n.headingScale != null &&
      n.headingScale !== 1 &&
      a.push(`--site-heading-scale:${n.headingScale}`));
  let o = a.length === 0 ? `` : `:root{${a.map((e) => `${e} !important`).join(`;`)}}`;
  return n.appearance === `simple`
    ? `${o}\n${i}\nhtml,body{background-color:light-dark(#fff,#000) !important;color:light-dark(#000,#fff) !important}`
    : o;
}
function R(e, t) {
  let n = e[t];
  return e.appearance === `simple` && n != null ? `light-dark(${n},${t === `primary` ? `#fff` : `#000`})` : n;
}
function z(e) {
  return Array.from(e).map((e) => {
    if (e instanceof CSSGroupingRule)
      return `${e.cssText.slice(0, e.cssText.indexOf(`{`))}{${z(e.cssRules)}}`;
    if (!(e instanceof CSSStyleRule)) return ``;
    let t = [],
      n = e.style;
    if (n.getPropertyValue(`background`) || n.backgroundColor) {
      let n =
        e.selectorText.includes(`::-webkit-progress-value`) || e.selectorText.includes(`::-moz-progress-bar`);
      t.push(n ? `background-color:light-dark(#000,#fff)` : `background-color:light-dark(#fff,#000)`);
    }
    ((n.getPropertyValue(`background`) || n.backgroundImage) && t.push(`background-image:none`),
      n.color && t.push(`color:light-dark(#000,#fff)`),
      n.boxShadow && t.push(`box-shadow:none`),
      n.textShadow && t.push(`text-shadow:none`),
      (n.border || n.borderColor) && t.push(`border-color:light-dark(#e5e5e5,#333)`));
    let r = t.length === 0 ? `` : `${e.selectorText}{${t.map((e) => `${e} !important`).join(`;`)}}`,
      i = z(e.cssRules);
    return i ? `${r}\n${e.selectorText}{${i}}` : r;
  }).join(`
`);
}
function B(e) {
  let t = [1, 3, 5].map((t) => {
      let n = parseInt(e.slice(t, t + 2), 16) / 255;
      return n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
    }),
    n = 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
  return (n + 0.05) / 0.05 >= 1.05 / (n + 0.05) ? `#000000` : `#ffffff`;
}
function je(e, t, n) {
  let r = `\n<!--sites-preview-theme:start-->\n<style data-sites-preview-theme>${n.replaceAll(`<`, `\\3c `)}</style>\n<script type="application/json" data-sites-preview-theme>${JSON.stringify(t)}<\/script>\n<!--sites-preview-theme:end-->\n`,
    i = e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i) ?? e.match(/<\/html\s*>\s*$/i);
  return i?.index == null ? e + r : e.slice(0, i.index) + r + e.slice(i.index);
}
var V, H, Me, Ne;
function U() {
  return (U = e(() => {
    (o(),
      (V = x()
        .regex(/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i)
        .transform((e) => {
          let t = e.slice(1).toLowerCase();
          return `#${
            t.length === 3
              ? t
                  .split(``)
                  .map((e) => e + e)
                  .join(``)
              : t
          }`;
        })
        .nullable()),
      (H = se({
        appearance: _([`custom`, `simple`]).default(`custom`),
        primary: V,
        secondary: V,
        background: V.default(null),
        typography: _([`original`, `modern`, `editorial`, `technical`]).nullable(),
        spacing: d().min(0.5).max(1.5).nullable(),
        roundness: d().min(0).max(2).nullable(),
        headingScale: d().min(0.75).max(1.5).nullable().default(null),
        decorationOpacity: d().min(0).max(1).nullable().default(null),
      })),
      (Me = {
        appearance: `simple`,
        primary: `#000000`,
        secondary: `#ffffff`,
        background: `#ffffff`,
        typography: `modern`,
        headingScale: 0.9,
        spacing: 1.25,
        roundness: 0.5,
        decorationOpacity: 0,
      }),
      (Ne = /\n?<!--sites-preview-theme:start-->[\s\S]*?<!--sites-preview-theme:end-->\n?/g));
  }))();
}
var W, G;
function K() {
  return (K = e(() => {
    ((W = t(ie(), 1)),
      E(),
      ve(),
      _e(),
      xe(),
      r(),
      ge(),
      p(),
      U(),
      (G = v(
        h,
        (e, { signal: t, derived: n, scope: r }) => {
          let i = Oe(e.content),
            a = t({ theme: i.saved, savedTheme: i.saved, saving: !1, error: null }),
            o = e.contentFileId,
            s = e.versionNumber,
            c = t(e.versionNumber),
            l = null,
            u,
            d = n((e) => {
              let t = e(a);
              return !(0, W.default)(t.theme, t.savedTheme);
            }),
            f = n((e) => ({ css: p(e(a).theme) }));
          function p(e) {
            return Ae(i.fontVariables, i.original, L(e, i.original), i.contrastColors, i.simpleCss);
          }
          function m() {
            let t = r.get(a).theme;
            return (0, W.default)(t, i.saved) ? e.content : je(i.content, t, p(t));
          }
          function h() {
            return r.get(ye) === e.accountId && r.get(me) === e.userId;
          }
          async function g() {
            let t = e.libraryFileId;
            if (t == null) return !1;
            if (!r.get(d)) return !0;
            r.set(a, (e) => ({ ...e, saving: !0, error: null }));
            try {
              if (!h()) return !1;
              if (s == null) {
                let n = await M.safeGet(`/files/library/files/{library_file_id}/versions`, {
                  parameters: { path: { library_file_id: t }, query: { limit: 1 } },
                  additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
                  expectedErrorStatuses: [403, 404],
                  signal: void 0,
                });
                if (!h()) return !1;
                let i = n.items[0];
                if (
                  i == null ||
                  !i.is_current ||
                  i.library_artifact_type !== `site_preview` ||
                  i.file_id !== o
                )
                  return (r.set(a, (e) => ({ ...e, error: `conflict` })), !1);
                ((s = i.version_number), r.set(c, s));
              }
              for (; r.get(d);) {
                if (!h()) return !1;
                let n = r.get(a).theme,
                  i = m(),
                  l = await be(r, `create`, () =>
                    M.safePatch(`/files/library/files/{library_file_id}`, {
                      parameters: { path: { library_file_id: t } },
                      additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
                      expectedErrorStatuses: [403, 404, 409, 413],
                      requestBody: { inline_content: i, expected_current_version: s },
                    }),
                  );
                if (!h()) return !1;
                ((o = l.file_id),
                  (s = l.current_version_number == null ? 0 : l.current_version_number),
                  r.set(a, (e) => ({ ...e, savedTheme: n })),
                  r.set(c, s),
                  r.queryClient.setQueryData([`library-file-preview-text`, e.libraryFileId, l.file_id], i));
              }
              return (
                Promise.all([
                  r.queryClient.invalidateQueries({
                    queryKey: [`chatgpt-file-preview-version-history`, e.accountId, e.libraryFileId],
                  }),
                  r.queryClient.invalidateQueries({ queryKey: [`library-api`, e.accountId] }),
                  r.queryClient.invalidateQueries({
                    queryKey: [`sites-preview-inline-html`, e.accountId, e.userId, e.libraryFileId],
                    refetchType: `none`,
                  }),
                ]),
                !0
              );
            } catch (e) {
              let t = `save`;
              return (
                e instanceof ae && e.status === 409 && (t = `conflict`),
                r.set(a, (e) => ({ ...e, error: t })),
                !1
              );
            } finally {
              (r.get(a).error != null && clearTimeout(u), r.set(a, (e) => ({ ...e, saving: !1 })));
            }
          }
          function _() {
            return (
              clearTimeout(u),
              (l ??= g().finally(() => {
                l = null;
              })),
              l
            );
          }
          function v() {
            (clearTimeout(u),
              e.libraryFileId != null &&
                r.get(a).error == null &&
                (u = setTimeout(() => {
                  _();
                }, 500)));
          }
          return {
            state$: a,
            dirty$: d,
            savedVersion$: c,
            documentState$: f,
            content: i.content,
            original: i.original,
            presets: i.presets,
            canCustomize$: n(
              (e, { scope: { get: t } }) =>
                Object.entries(i.original).some(([e, t]) => e !== `appearance` && t != null) &&
                t(he, { layer: `933354605`, parameter: `enable_customization_controls` }),
            ),
            canSave: e.libraryFileId != null,
            getContent: m,
            getThemeCss: p,
            cancelPendingSave() {
              clearTimeout(u);
            },
            change(e) {
              let t = H.safeParse(e),
                n = r.get(a);
              if (!t.success) return;
              let o = L(t.data, i.original);
              (0, W.default)(n.theme, o) ||
                (r.set(a, { ...n, theme: o, error: n.error === `save` ? null : n.error }), v());
            },
            save: _,
          };
        },
        { excludeFieldsFromKey: [`content`] },
      )));
  }))();
}
function Pe(e) {
  let t = (0, Fe.c)(8),
    { source: n } = e,
    r = k(),
    i = A(G, n),
    { theme: a } = O(i.state$),
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = r.formatMessage({
        id: `sitesPreview.customization.presets`,
        defaultMessage: `Site appearance`,
        description: `Selects Custom or Simple website appearance, including colors, fonts, and layout scales`,
      })),
      (t[0] = r),
      (t[1] = o));
  let s;
  t[2] !== i || t[3] !== a
    ? ((s = Ie.map((e) => {
        let t = i.presets[e],
          n = e === a.appearance,
          r = e === `custom` ? (t.primary ?? t.background) : null;
        return (0, q.jsx)(
          C,
          {
            className: `min-w-0`,
            color: `selectionTile`,
            size: `panelAction`,
            radius: `large`,
            "aria-pressed": n,
            style: r == null ? void 0 : { backgroundColor: r, color: B(r) },
            onClick: () => {
              n || i.change(t);
            },
            children: (0, q.jsx)(`span`, {
              className: `min-w-0 text-center wrap-anywhere whitespace-normal`,
              children: (0, q.jsx)(j, { ...Le[e] }),
            }),
          },
          e,
        );
      })),
      (t[2] = i),
      (t[3] = a),
      (t[4] = s))
    : (s = t[4]);
  let c;
  return (
    t[5] !== o || t[6] !== s
      ? ((c = (0, q.jsx)(`div`, {
          className: `grid grid-cols-2 gap-2`,
          role: `group`,
          "aria-label": o,
          children: s,
        })),
        (t[5] = o),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
var Fe, q, Ie, Le;
function Re() {
  return (Re = e(() => {
    ((Fe = f()),
      E(),
      S(),
      T(),
      K(),
      U(),
      (q = s()),
      (Ie = [`custom`, `simple`]),
      (Le = w({
        custom: {
          id: `sitesPreview.customization.custom`,
          defaultMessage: `Custom`,
          description: `Website appearance preset restoring all model-authored original colors, fonts, and layout scales`,
        },
        simple: {
          id: `sitesPreview.customization.simple`,
          defaultMessage: `Simple`,
          description: `Website appearance preset applying neutral colors, system fonts, and reduced decoration`,
        },
      })));
  }))();
}
function ze(e) {
  let t = (0, J.c)(27),
    { source: n } = e,
    r = k(),
    a = (0, Be.useId)(),
    o = A(G, n),
    s = O(o.canCustomize$),
    l = O(o.state$),
    u = l.theme.headingScale != null || l.theme.spacing != null || l.theme.roundness != null,
    d = l.theme.primary != null || l.theme.secondary != null || l.theme.background != null;
  if (!s) return null;
  let f;
  t[0] === n ? (f = t[1]) : ((f = (0, Y.jsx)(Pe, { source: n })), (t[0] = n), (t[1] = f));
  let p = u && d && `grid-cols-[minmax(0,1fr)_auto]`,
    m;
  t[2] === p ? (m = t[3]) : ((m = c(`grid gap-4`, p)), (t[2] = p), (t[3] = m));
  let h;
  t[4] !== a || t[5] !== u || t[6] !== r || t[7] !== o || t[8] !== l.theme
    ? ((h = u
        ? (0, Y.jsx)(`div`, {
            className: `flex min-w-0 flex-col gap-2`,
            children: [
              { key: `headingScale`, min: 0.75, max: 1.5 },
              { key: `spacing`, min: 0.5, max: 1.5 },
              { key: `roundness`, min: 0, max: 2 },
            ].map((e) => {
              let { key: t, min: n, max: i } = e,
                s = l.theme[t];
              return s == null
                ? null
                : (0, Y.jsxs)(
                    `label`,
                    {
                      className: `flex min-w-0 flex-col gap-1`,
                      htmlFor: `${a}-${t}`,
                      children: [
                        (0, Y.jsx)(`span`, {
                          className: `text-sm text-secondary`,
                          children: (0, Y.jsx)(j, { ...X[t] }),
                        }),
                        (0, Y.jsx)(`span`, {
                          className: `flex h-4 items-center`,
                          children: (0, Y.jsx)(Te, {
                            id: `${a}-${t}`,
                            "aria-label": r.formatMessage(X[t]),
                            min: n,
                            max: i,
                            step: 0.05,
                            value: s,
                            onChange: (e) => o.change({ ...l.theme, [t]: e.currentTarget.valueAsNumber }),
                          }),
                        }),
                      ],
                    },
                    t,
                  );
            }),
          })
        : null),
      (t[4] = a),
      (t[5] = u),
      (t[6] = r),
      (t[7] = o),
      (t[8] = l.theme),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] !== d || t[11] !== r || t[12] !== o || t[13] !== l.theme
    ? ((g = d
        ? (0, Y.jsxs)(`div`, {
            className: `flex min-w-0 flex-col`,
            children: [
              (0, Y.jsx)(`span`, {
                className: `mb-2 text-sm text-secondary`,
                children: (0, Y.jsx)(j, { ...X.color }),
              }),
              [`primary`, `secondary`, `background`].map((e) => {
                let t = l.theme[e];
                if (t == null) return null;
                let n = r.formatMessage(X[e]);
                return (0, Y.jsxs)(
                  te,
                  {
                    children: [
                      (0, Y.jsx)(ne, {
                        asChild: !0,
                        children: (0, Y.jsxs)(C, {
                          className: `w-full justify-start`,
                          color: `ghostSecondary`,
                          size: `settingsSelect`,
                          radius: `large`,
                          "aria-label": n,
                          children: [
                            (0, Y.jsx)(`span`, {
                              className: `size-6 shrink-0 rounded-full ring-1 ring-border-subtle ring-inset`,
                              style: { backgroundColor: R(l.theme, e) ?? void 0 },
                            }),
                            (0, Y.jsx)(`span`, {
                              className: `text-start text-sm whitespace-nowrap`,
                              children: (0, Y.jsx)(j, { ...X[e] }),
                            }),
                          ],
                        }),
                      }),
                      (0, Y.jsx)(ce, {
                        align: `end`,
                        size: `content`,
                        variant: `menu`,
                        disablePadding: !0,
                        children: (0, Y.jsx)(Se, {
                          color: t,
                          label: n,
                          size: `compact`,
                          onChange: (t) => o.change({ ...l.theme, appearance: `custom`, [e]: t }),
                          onPreviewChange: (t) => o.change({ ...l.theme, appearance: `custom`, [e]: t }),
                        }),
                      }),
                    ],
                  },
                  e,
                );
              }),
            ],
          })
        : null),
      (t[10] = d),
      (t[11] = r),
      (t[12] = o),
      (t[13] = l.theme),
      (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] !== m || t[16] !== h || t[17] !== g
    ? ((_ = (0, Y.jsxs)(`div`, { className: m, children: [h, g] })),
      (t[15] = m),
      (t[16] = h),
      (t[17] = g),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  t[19] !== r || t[20] !== o || t[21] !== l.theme
    ? ((v =
        l.theme.typography == null
          ? null
          : (0, Y.jsx)(`div`, {
              className: `border-t border-default pt-2`,
              children: (0, Y.jsx)(fe, {
                align: `end`,
                triggerButton: (0, Y.jsxs)(C, {
                  className: `w-full`,
                  color: `ghostActive`,
                  size: `default`,
                  radius: `large`,
                  "aria-label": r.formatMessage(X.typography),
                  children: [
                    (0, Y.jsxs)(`span`, {
                      className: `flex min-w-0 flex-1 flex-col items-start text-start`,
                      children: [
                        (0, Y.jsx)(`span`, {
                          className: `text-sm text-secondary`,
                          children: (0, Y.jsx)(j, { ...X.typography }),
                        }),
                        (0, Y.jsx)(`span`, {
                          className: `text-sm font-medium`,
                          children: (0, Y.jsx)(j, { ...X[l.theme.typography] }),
                        }),
                      ],
                    }),
                    (0, Y.jsx)(oe, {}),
                  ],
                }),
                children: [`original`, `modern`, `editorial`, `technical`].map((e) =>
                  (0, Y.jsx)(
                    de.Item,
                    {
                      rightIcon: l.theme.typography === e ? (0, Y.jsx)(i, {}) : void 0,
                      onSelect: () => o.change({ ...l.theme, typography: e }),
                      children: (0, Y.jsx)(j, { ...X[e] }),
                    },
                    e,
                  ),
                ),
              }),
            })),
      (t[19] = r),
      (t[20] = o),
      (t[21] = l.theme),
      (t[22] = v))
    : (v = t[22]);
  let y;
  return (
    t[23] !== f || t[24] !== _ || t[25] !== v
      ? ((y = (0, Y.jsxs)(`div`, {
          className: `flex w-80 max-w-full min-w-0 flex-col gap-3 p-3 font-sans select-none`,
          children: [f, _, v],
        })),
        (t[23] = f),
        (t[24] = _),
        (t[25] = v),
        (t[26] = y))
      : (y = t[26]),
    y
  );
}
var J, Be, Y, X;
function Ve() {
  return (Ve = e(() => {
    ((J = f()),
      u(),
      E(),
      (Be = a()),
      S(),
      Ce(),
      T(),
      ee(),
      b(),
      D(),
      we(),
      Re(),
      K(),
      U(),
      (Y = s()),
      (X = w({
        color: {
          id: `sitesPreview.customization.colors`,
          defaultMessage: `Color`,
          description: `Heading above the site's primary, secondary, and background color swatches in the appearance popover`,
        },
        primary: {
          id: `sitesPreview.customization.primary`,
          defaultMessage: `Primary`,
          description: `Edits the main color found in the site's authored styles`,
        },
        secondary: {
          id: `sitesPreview.customization.secondary`,
          defaultMessage: `Secondary`,
          description: `Edits a second color found in the site's authored styles`,
        },
        background: {
          id: `sitesPreview.customization.background`,
          defaultMessage: `Background`,
          description: `Edits the page background color chosen by the model for the website`,
        },
        typography: {
          id: `sitesPreview.customization.typography`,
          defaultMessage: `Font`,
          description: `Selects a font pairing for the site`,
        },
        spacing: {
          id: `sitesPreview.customization.spacing`,
          defaultMessage: `Spacing`,
          description: `Scales the site's padding and gaps relative to its original spacing`,
        },
        headingScale: {
          id: `sitesPreview.customization.headingScale`,
          defaultMessage: `Header size`,
          description: `Scales the site's display and section headings`,
        },
        roundness: {
          id: `sitesPreview.customization.roundness`,
          defaultMessage: `Roundness`,
          description: `Scales the site's corner radii relative to their original values`,
        },
        original: {
          id: `sitesPreview.customization.original`,
          defaultMessage: `Original`,
          description: `Typography option in the site's appearance dropdown that restores the model-authored font pairing`,
        },
        modern: {
          id: `sitesPreview.customization.modern`,
          defaultMessage: `Modern`,
          description: `Website font pairing using the system sans-serif font`,
        },
        editorial: {
          id: `sitesPreview.customization.classic`,
          defaultMessage: `Classic`,
          description: `Website font pairing with serif headings`,
        },
        technical: {
          id: `sitesPreview.customization.technical`,
          defaultMessage: `Technical`,
          description: `Website font pairing using a monospace font`,
        },
      })));
  }))();
}
var Z;
function He() {
  return (He = e(() => {
    (S(),
      (Z = w({
        appearance: {
          id: `sitesPreview.customization.appearance`,
          defaultMessage: `Appearance`,
          description: `Toolbar button and popover heading for website appearance presets and controls in the inline preview and Library viewer`,
        },
      })));
  }))();
}
function Ue(e) {
  let t = (0, We.c)(23),
    { source: r, disabled: i, surface: a } = e,
    o = i !== void 0 && i,
    s = a === void 0 ? `inline` : a,
    c = k(),
    l = (0, Ge.useId)(),
    u = A(G, r);
  if (!O(u.canCustomize$)) return null;
  let d;
  t[0] === c ? (d = t[1]) : ((d = c.formatMessage(Z.appearance)), (t[0] = c), (t[1] = d));
  let f = d,
    p;
  t[2] !== o || t[3] !== f || t[4] !== s
    ? ((p =
        s === `viewer`
          ? (0, Q.jsx)(y, {
              "aria-label": f,
              disabled: o,
              uniform: !0,
              children: (0, Q.jsx)(g, { icon: { 16: m, 20: n } }),
            })
          : (0, Q.jsx)(C, {
              color: `ghostActive`,
              size: `imageToolbar`,
              "aria-label": f,
              disabled: o,
              children: (0, Q.jsx)(n, {}),
            })),
      (t[2] = o),
      (t[3] = f),
      (t[4] = s),
      (t[5] = p))
    : (p = t[5]);
  let h = p,
    _;
  t[6] === h ? (_ = t[7]) : ((_ = (0, Q.jsx)(ne, { asChild: !0, children: h })), (t[6] = h), (t[7] = _));
  let v;
  t[8] !== f || t[9] !== _
    ? ((v = (0, Q.jsx)(le, { side: `bottom`, tooltipContent: f, children: _ })),
      (t[8] = f),
      (t[9] = _),
      (t[10] = v))
    : (v = t[10]);
  let b;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(j, { ...Z.appearance })), (t[11] = b))
    : (b = t[11]);
  let x;
  t[12] === l
    ? (x = t[13])
    : ((x = (0, Q.jsx)(re, { id: l, className: `sr-only`, children: b })), (t[12] = l), (t[13] = x));
  let S;
  t[14] === r ? (S = t[15]) : ((S = (0, Q.jsx)(ze, { source: r })), (t[14] = r), (t[15] = S));
  let w;
  t[16] !== x || t[17] !== S || t[18] !== l
    ? ((w = (0, Q.jsxs)(ce, {
        align: `end`,
        size: `content`,
        variant: `menu`,
        disablePadding: !0,
        "aria-labelledby": l,
        children: [x, S],
      })),
      (t[16] = x),
      (t[17] = S),
      (t[18] = l),
      (t[19] = w))
    : (w = t[19]);
  let T;
  return (
    t[20] !== w || t[21] !== v
      ? ((T = (0, Q.jsxs)(te, { children: [v, w] })), (t[20] = w), (t[21] = v), (t[22] = T))
      : (T = t[22]),
    T
  );
}
var We, Ge, Q;
function $() {
  return ($ = e(() => {
    ((We = f()), E(), (Ge = a()), S(), T(), b(), D(), pe(), ue(), l(), Ve(), He(), K(), (Q = s()));
  }))();
}
export { I as a, G as i, $ as n, P as o, K as r, F as s, Ue as t };
//# sourceMappingURL=dropdown-6c3f6bdb91ed.js.map
