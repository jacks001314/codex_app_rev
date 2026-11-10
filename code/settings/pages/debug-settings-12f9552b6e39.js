import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as t,
  A3t as n,
  Amn as r,
  B6t as i,
  BS as a,
  Cpn as o,
  F3t as s,
  Fi as c,
  Hu as l,
  Ii as u,
  JS as d,
  Li as f,
  O3t as p,
  Opn as m,
  QG as h,
  QKt as g,
  Qu as _,
  Spn as v,
  VS as y,
  Vu as b,
  XS as x,
  Xu as S,
  YKt as C,
  Zu as w,
  a3t as T,
  hmn as E,
  kmn as D,
  o3t as O,
  qKt as k,
  qu as A,
  ttn as j,
  z8t as M,
} from "./app-initial-f094ef01c64d.js";
function N() {
  let e = (0, I.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = j.allowDebugMenu(`prod`)), (e[0] = t))
    : (t = e[0]);
  let n = t,
    r;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, L.jsxs)(d, {
          title: (0, L.jsx)(a, { slug: `debug` }),
          children: [n && (0, L.jsx)(P, {}), null, (0, L.jsx)(F, {})],
        })),
        (e[1] = r))
      : (r = e[1]),
    r
  );
}
function P() {
  let e = (0, I.c)(14),
    t = n(T),
    r = m(),
    i = g(M.debugChromePagesEnabled),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, L.jsx)(w.Header, {
        title: (0, L.jsx)(o, {
          id: `settings.debug.chromePages.title`,
          defaultMessage: `Chrome debug pages`,
          description: `Heading for the debug-only Chrome pages setting`,
        }),
        subtitle: (0, L.jsx)(o, {
          id: `settings.debug.chromePages.subtitle`,
          defaultMessage: `Allow Browser Use to open trusted chrome:// diagnostics such as version and histograms. chrome-untrusted:// stays blocked.`,
          description: `Description of the debug-only Chrome pages setting`,
        }),
      })),
      (e[0] = a))
    : (a = e[0]);
  let s;
  e[1] === r
    ? (s = e[2])
    : ((s = r.formatMessage({
        id: `settings.debug.chromePages.label`,
        defaultMessage: `Enable Chrome debug pages`,
        description: `Label for the debug-only Chrome pages toggle`,
      })),
      (e[1] = r),
      (e[2] = s));
  let c;
  e[3] === t
    ? (c = e[4])
    : ((c = (e) => {
        C(t, M.debugChromePagesEnabled, e);
      }),
      (e[3] = t),
      (e[4] = c));
  let l;
  e[5] === r
    ? (l = e[6])
    : ((l = r.formatMessage({
        id: `settings.debug.chromePages.toggle`,
        defaultMessage: `Toggle Chrome debug pages`,
        description: `Aria label for the Chrome debug pages toggle`,
      })),
      (e[5] = r),
      (e[6] = l));
  let u;
  e[7] !== i || e[8] !== c || e[9] !== l
    ? ((u = (0, L.jsx)(h, { checked: i, onChange: c, ariaLabel: l })),
      (e[7] = i),
      (e[8] = c),
      (e[9] = l),
      (e[10] = u))
    : (u = e[10]);
  let d;
  return (
    e[11] !== s || e[12] !== u
      ? ((d = (0, L.jsxs)(w, {
          children: [
            a,
            (0, L.jsx)(w.Content, {
              children: (0, L.jsx)(b, { children: (0, L.jsx)(A, { label: s, control: u }) }),
            }),
          ],
        })),
        (e[11] = s),
        (e[12] = u),
        (e[13] = d))
      : (d = e[13]),
    d
  );
}
function F() {
  let e = (0, I.c)(19),
    t = n(T),
    r = m(),
    i = s(c),
    a,
    l,
    u,
    d,
    p;
  if (e[0] !== r || e[1] !== t || e[2] !== i) {
    let n = [
      {
        settingKey: `disableScrollFadeMask`,
        label: r.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMask.label`,
          defaultMessage: `Disable scroll fade mask`,
          description: `Label for GPU tearing debug setting that disables scroll fade masks`,
        }),
        description: r.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMask.description`,
          defaultMessage: `Removes scroll-edge fade masks entirely to isolate mask compositing as a tearing trigger`,
          description: `Description for GPU tearing debug setting that disables scroll fade masks`,
        }),
      },
      {
        settingKey: `disableScrollFadeMaskAnimation`,
        label: r.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMaskAnimation.label`,
          defaultMessage: `Disable scroll fade animation`,
          description: `Label for GPU tearing debug setting that disables scroll fade mask animation`,
        }),
        description: r.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMaskAnimation.description`,
          defaultMessage: `Keeps static fade masks but removes the scroll-linked animation timeline`,
          description: `Description for GPU tearing debug setting that disables scroll fade mask animation`,
        }),
      },
      {
        settingKey: `disableBackdropBlur`,
        label: r.formatMessage({
          id: `settings.general.gpuTearingDebug.disableBackdropBlur.label`,
          defaultMessage: `Disable backdrop blur`,
          description: `Label for GPU tearing debug setting that disables backdrop blur`,
        }),
        description: r.formatMessage({
          id: `settings.general.gpuTearingDebug.disableBackdropBlur.description`,
          defaultMessage: `Forces backdrop filters off across the web UI to reduce layered blur composition`,
          description: `Description for GPU tearing debug setting that disables backdrop blur`,
        }),
      },
      {
        settingKey: `disableCssMotion`,
        label: r.formatMessage({
          id: `settings.general.gpuTearingDebug.disableCssMotion.label`,
          defaultMessage: `Disable CSS motion`,
          description: `Label for GPU tearing debug setting that disables CSS animations and transitions`,
        }),
        description: r.formatMessage({
          id: `settings.general.gpuTearingDebug.disableCssMotion.description`,
          defaultMessage: `Turns off CSS animations and transitions to isolate compositor animation work`,
          description: `Description for GPU tearing debug setting that disables CSS animations and transitions`,
        }),
      },
      {
        settingKey: `disableSquircles`,
        label: r.formatMessage({
          id: `settings.general.gpuTearingDebug.disableSquircles.label`,
          defaultMessage: `Disable squircles`,
          description: `Label for a GPU debug switch that replaces CSS superellipse (squircle) corners with ordinary rounded corners`,
        }),
        description: r.formatMessage({
          id: `settings.general.gpuTearingDebug.disableSquircles.description`,
          defaultMessage: `Uses standard round corners instead of CSS superellipses to isolate squircle rendering cost`,
          description: `Explains a GPU debug switch; squircle refers to the interface's CSS superellipse corner shape`,
        }),
      },
      {
        settingKey: `forceOpaqueRendererBackground`,
        label: r.formatMessage({
          id: `settings.general.gpuTearingDebug.forceOpaqueRendererBackground.label`,
          defaultMessage: `Force opaque web background`,
          description: `Label for GPU tearing debug setting that forces an opaque web background`,
        }),
        description: r.formatMessage({
          id: `settings.general.gpuTearingDebug.forceOpaqueRendererBackground.description`,
          defaultMessage: `Paints the renderer root and body with opaque backgrounds to isolate transparent-window composition`,
          description: `Description for GPU tearing debug setting that forces an opaque web background`,
        }),
      },
    ];
    ((u = w),
      e[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((p = (0, L.jsx)(w.Header, {
            title: (0, L.jsx)(o, {
              id: `settings.general.gpuTearingDebug`,
              defaultMessage: `GPU Tearing Debug`,
              description: `Heading for GPU tearing debug settings group`,
            }),
            subtitle: (0, L.jsx)(o, {
              id: `settings.general.gpuTearingDebug.subtitle`,
              defaultMessage: `Temporary compositor isolation toggles. Changes apply immediately and are only active while the debug gate is enabled.`,
              description: `Subtitle for GPU tearing debug settings group`,
            }),
          })),
          (e[8] = p))
        : (p = e[8]),
      (l = w.Content),
      (a = b),
      (d = n.map((e) =>
        (0, L.jsx)(
          A,
          {
            label: e.label,
            description: e.description,
            control: (0, L.jsx)(h, {
              checked: i[e.settingKey],
              onChange: (n) => {
                f(t, e.settingKey, n);
              },
              ariaLabel: r.formatMessage(
                {
                  id: `settings.general.gpuTearingDebug.toggle`,
                  defaultMessage: `Toggle {settingName}`,
                  description: `Aria label for toggling a GPU tearing debug setting`,
                },
                { settingName: e.label },
              ),
            }),
          },
          e.settingKey,
        ),
      )),
      (e[0] = r),
      (e[1] = t),
      (e[2] = i),
      (e[3] = a),
      (e[4] = l),
      (e[5] = u),
      (e[6] = d),
      (e[7] = p));
  } else ((a = e[3]), (l = e[4]), (u = e[5]), (d = e[6]), (p = e[7]));
  let g;
  e[9] !== a || e[10] !== d
    ? ((g = (0, L.jsx)(a, { children: d })), (e[9] = a), (e[10] = d), (e[11] = g))
    : (g = e[11]);
  let _;
  e[12] !== l || e[13] !== g
    ? ((_ = (0, L.jsx)(l, { children: g })), (e[12] = l), (e[13] = g), (e[14] = _))
    : (_ = e[14]);
  let v;
  return (
    e[15] !== u || e[16] !== p || e[17] !== _
      ? ((v = (0, L.jsxs)(u, { children: [p, _] })),
        (e[15] = u),
        (e[16] = p),
        (e[17] = _),
        (e[18] = v))
      : (v = e[18]),
    v
  );
}
var I, L;
e(() => {
  ((I = D()), p(), i(), r(), v(), t(), O(), u(), k(), x(), _(), S(), y(), l(), (L = E()));
})();
export { N as DebugSettings };
//# sourceMappingURL=debug-settings-12f9552b6e39.js.map
