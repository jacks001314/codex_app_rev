import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $nt as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  JC as a,
  MO as o,
  Oht as s,
  Pxt as c,
  VDt as l,
  Vxt as u,
  Wnt as d,
  flt as f,
  iw as p,
  jDt as m,
  jO as h,
  qC as g,
  qnt as _,
  rst as v,
  tw as y,
  vzt as b,
  wot as x,
  xMt as S,
  yzt as C,
  z4 as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ek as T,
  Tk as E,
  XC as D,
  YC as O,
  ZC as k,
  _F as A,
  eF as j,
  hF as M,
  tF as N,
} from "./app-initial-5851df3f6cb1.js";
function P() {
  let e = (0, L.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = s.allowDebugMenu(`prod`)), (e[0] = t))
    : (t = e[0]);
  let n = t,
    r;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, R.jsxs)(M, {
          title: (0, R.jsx)(j, { slug: `debug` }),
          children: [n && (0, R.jsx)(F, {}), null, null, (0, R.jsx)(I, {})],
        })),
        (e[1] = r))
      : (r = e[1]),
    r
  );
}
function F() {
  let e = (0, L.c)(14),
    a = i(n),
    o = l(),
    s = t(f.debugChromePagesEnabled),
    c;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, R.jsx)(E.Header, {
        title: (0, R.jsx)(r, {
          id: `settings.debug.chromePages.title`,
          defaultMessage: `Chrome debug pages`,
          description: `Heading for the debug-only Chrome pages setting`,
        }),
        subtitle: (0, R.jsx)(r, {
          id: `settings.debug.chromePages.subtitle`,
          defaultMessage: `Allow Browser Use to open trusted chrome:// diagnostics such as version and histograms. chrome-untrusted:// stays blocked.`,
          description: `Description of the debug-only Chrome pages setting`,
        }),
      })),
      (e[0] = c))
    : (c = e[0]);
  let u;
  e[1] === o
    ? (u = e[2])
    : ((u = o.formatMessage({
        id: `settings.debug.chromePages.label`,
        defaultMessage: `Enable Chrome debug pages`,
        description: `Label for the debug-only Chrome pages toggle`,
      })),
      (e[1] = o),
      (e[2] = u));
  let d;
  e[3] === a
    ? (d = e[4])
    : ((d = (e) => {
        _(a, f.debugChromePagesEnabled, e);
      }),
      (e[3] = a),
      (e[4] = d));
  let p;
  e[5] === o
    ? (p = e[6])
    : ((p = o.formatMessage({
        id: `settings.debug.chromePages.toggle`,
        defaultMessage: `Toggle Chrome debug pages`,
        description: `Aria label for the Chrome debug pages toggle`,
      })),
      (e[5] = o),
      (e[6] = p));
  let m;
  e[7] !== s || e[8] !== d || e[9] !== p
    ? ((m = (0, R.jsx)(h, { checked: s, onChange: d, ariaLabel: p })),
      (e[7] = s),
      (e[8] = d),
      (e[9] = p),
      (e[10] = m))
    : (m = e[10]);
  let v;
  return (
    e[11] !== u || e[12] !== m
      ? ((v = (0, R.jsxs)(E, {
          children: [
            c,
            (0, R.jsx)(E.Content, {
              children: (0, R.jsx)(g, { children: (0, R.jsx)(y, { label: u, control: m }) }),
            }),
          ],
        })),
        (e[11] = u),
        (e[12] = m),
        (e[13] = v))
      : (v = e[13]),
    v
  );
}
function I() {
  let e = (0, L.c)(19),
    t = i(n),
    a = l(),
    o = u(O),
    s,
    c,
    d,
    f,
    p;
  if (e[0] !== a || e[1] !== t || e[2] !== o) {
    let n = [
      {
        settingKey: `disableScrollFadeMask`,
        label: a.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMask.label`,
          defaultMessage: `Disable scroll fade mask`,
          description: `Label for GPU tearing debug setting that disables scroll fade masks`,
        }),
        description: a.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMask.description`,
          defaultMessage: `Removes scroll-edge fade masks entirely to isolate mask compositing as a tearing trigger`,
          description: `Description for GPU tearing debug setting that disables scroll fade masks`,
        }),
      },
      {
        settingKey: `disableScrollFadeMaskAnimation`,
        label: a.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMaskAnimation.label`,
          defaultMessage: `Disable scroll fade animation`,
          description: `Label for GPU tearing debug setting that disables scroll fade mask animation`,
        }),
        description: a.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMaskAnimation.description`,
          defaultMessage: `Keeps static fade masks but removes the scroll-linked animation timeline`,
          description: `Description for GPU tearing debug setting that disables scroll fade mask animation`,
        }),
      },
      {
        settingKey: `disableBackdropBlur`,
        label: a.formatMessage({
          id: `settings.general.gpuTearingDebug.disableBackdropBlur.label`,
          defaultMessage: `Disable backdrop blur`,
          description: `Label for GPU tearing debug setting that disables backdrop blur`,
        }),
        description: a.formatMessage({
          id: `settings.general.gpuTearingDebug.disableBackdropBlur.description`,
          defaultMessage: `Forces backdrop filters off across the web UI to reduce layered blur composition`,
          description: `Description for GPU tearing debug setting that disables backdrop blur`,
        }),
      },
      {
        settingKey: `disableCssMotion`,
        label: a.formatMessage({
          id: `settings.general.gpuTearingDebug.disableCssMotion.label`,
          defaultMessage: `Disable CSS motion`,
          description: `Label for GPU tearing debug setting that disables CSS animations and transitions`,
        }),
        description: a.formatMessage({
          id: `settings.general.gpuTearingDebug.disableCssMotion.description`,
          defaultMessage: `Turns off CSS animations and transitions to isolate compositor animation work`,
          description: `Description for GPU tearing debug setting that disables CSS animations and transitions`,
        }),
      },
      {
        settingKey: `disableSquircles`,
        label: a.formatMessage({
          id: `settings.general.gpuTearingDebug.disableSquircles.label`,
          defaultMessage: `Disable squircles`,
          description: `Label for a GPU debug switch that replaces CSS superellipse (squircle) corners with ordinary rounded corners`,
        }),
        description: a.formatMessage({
          id: `settings.general.gpuTearingDebug.disableSquircles.description`,
          defaultMessage: `Uses standard round corners instead of CSS superellipses to isolate squircle rendering cost`,
          description: `Explains a GPU debug switch; squircle refers to the interface's CSS superellipse corner shape`,
        }),
      },
      {
        settingKey: `forceOpaqueRendererBackground`,
        label: a.formatMessage({
          id: `settings.general.gpuTearingDebug.forceOpaqueRendererBackground.label`,
          defaultMessage: `Force opaque web background`,
          description: `Label for GPU tearing debug setting that forces an opaque web background`,
        }),
        description: a.formatMessage({
          id: `settings.general.gpuTearingDebug.forceOpaqueRendererBackground.description`,
          defaultMessage: `Paints the renderer root and body with opaque backgrounds to isolate transparent-window composition`,
          description: `Description for GPU tearing debug setting that forces an opaque web background`,
        }),
      },
    ];
    ((d = E),
      e[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((p = (0, R.jsx)(E.Header, {
            title: (0, R.jsx)(r, {
              id: `settings.general.gpuTearingDebug`,
              defaultMessage: `GPU Tearing Debug`,
              description: `Heading for GPU tearing debug settings group`,
            }),
            subtitle: (0, R.jsx)(r, {
              id: `settings.general.gpuTearingDebug.subtitle`,
              defaultMessage: `Temporary compositor isolation toggles. Changes apply immediately and are only active while the debug gate is enabled.`,
              description: `Subtitle for GPU tearing debug settings group`,
            }),
          })),
          (e[8] = p))
        : (p = e[8]),
      (c = E.Content),
      (s = g),
      (f = n.map((e) =>
        (0, R.jsx)(
          y,
          {
            label: e.label,
            description: e.description,
            control: (0, R.jsx)(h, {
              checked: o[e.settingKey],
              onChange: (n) => {
                k(t, e.settingKey, n);
              },
              ariaLabel: a.formatMessage(
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
      (e[0] = a),
      (e[1] = t),
      (e[2] = o),
      (e[3] = s),
      (e[4] = c),
      (e[5] = d),
      (e[6] = f),
      (e[7] = p));
  } else ((s = e[3]), (c = e[4]), (d = e[5]), (f = e[6]), (p = e[7]));
  let m;
  e[9] !== s || e[10] !== f
    ? ((m = (0, R.jsx)(s, { children: f })), (e[9] = s), (e[10] = f), (e[11] = m))
    : (m = e[11]);
  let _;
  e[12] !== c || e[13] !== m
    ? ((_ = (0, R.jsx)(c, { children: m })), (e[12] = c), (e[13] = m), (e[14] = _))
    : (_ = e[14]);
  let v;
  return (
    e[15] !== d || e[16] !== p || e[17] !== _
      ? ((v = (0, R.jsxs)(d, { children: [p, _] })), (e[15] = d), (e[16] = p), (e[17] = _), (e[18] = v))
      : (v = e[18]),
    v
  );
}
var L, R;
function z() {
  return (z = e(() => {
    ((L = b()), c(), v(), C(), m(), w(), o(), x(), D(), d(), A(), T(), p(), N(), a(), (R = S()));
  }))();
}
z();
export { P as DebugSettings };
//# sourceMappingURL=debug-settings-746984af2654.js.map
