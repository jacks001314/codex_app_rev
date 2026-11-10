import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  F3 as i,
  FBt as a,
  LNt as o,
  PBt as s,
  Qst as c,
  Ugt as l,
  XOt as u,
  ZSt as d,
  ew as f,
  gut as p,
  hit as m,
  iCt as h,
  lit as g,
  lk as _,
  oit as v,
  okt as y,
  sct as b,
  sw as x,
  tkt as S,
  uk as C,
  uw as w,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Ew as T,
  LF as E,
  QF as D,
  RF as O,
  Tw as k,
  cA as A,
  eI as j,
  sA as M,
  ww as N,
} from "./app-initial-ad16eaadf81f.js";
function P() {
  let e = (0, L.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = l.allowDebugMenu(`prod`)), (e[0] = t))
    : (t = e[0]);
  let n = t,
    r;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, R.jsxs)(D, {
          title: (0, R.jsx)(E, { slug: `debug` }),
          children: [n && (0, R.jsx)(F, {}), null, null, (0, R.jsx)(I, {})],
        })),
        (e[1] = r))
      : (r = e[1]),
    r
  );
}
function F() {
  let e = (0, L.c)(14),
    r = n(c),
    i = y(),
    a = m(p.debugChromePagesEnabled),
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, R.jsx)(M.Header, {
        title: (0, R.jsx)(S, {
          id: `settings.debug.chromePages.title`,
          defaultMessage: `Chrome debug pages`,
          description: `Heading for the debug-only Chrome pages setting`,
        }),
        subtitle: (0, R.jsx)(S, {
          id: `settings.debug.chromePages.subtitle`,
          defaultMessage: `Allow Browser Use to open trusted chrome:// diagnostics such as version and histograms. chrome-untrusted:// stays blocked.`,
          description: `Description of the debug-only Chrome pages setting`,
        }),
      })),
      (e[0] = o))
    : (o = e[0]);
  let s;
  e[1] === i
    ? (s = e[2])
    : ((s = i.formatMessage({
        id: `settings.debug.chromePages.label`,
        defaultMessage: `Enable Chrome debug pages`,
        description: `Label for the debug-only Chrome pages toggle`,
      })),
      (e[1] = i),
      (e[2] = s));
  let l;
  e[3] === r
    ? (l = e[4])
    : ((l = (e) => {
        g(r, p.debugChromePagesEnabled, e);
      }),
      (e[3] = r),
      (e[4] = l));
  let u;
  e[5] === i
    ? (u = e[6])
    : ((u = i.formatMessage({
        id: `settings.debug.chromePages.toggle`,
        defaultMessage: `Toggle Chrome debug pages`,
        description: `Aria label for the Chrome debug pages toggle`,
      })),
      (e[5] = i),
      (e[6] = u));
  let d;
  e[7] !== a || e[8] !== l || e[9] !== u
    ? ((d = (0, R.jsx)(_, { checked: a, onChange: l, ariaLabel: u })),
      (e[7] = a),
      (e[8] = l),
      (e[9] = u),
      (e[10] = d))
    : (d = e[10]);
  let f;
  return (
    e[11] !== s || e[12] !== d
      ? ((f = (0, R.jsxs)(M, {
          children: [
            o,
            (0, R.jsx)(M.Content, {
              children: (0, R.jsx)(t, { children: (0, R.jsx)(x, { label: s, control: d }) }),
            }),
          ],
        })),
        (e[11] = s),
        (e[12] = d),
        (e[13] = f))
      : (f = e[13]),
    f
  );
}
function I() {
  let e = (0, L.c)(19),
    r = n(c),
    i = y(),
    a = h(N),
    o,
    s,
    l,
    u,
    d;
  if (e[0] !== i || e[1] !== r || e[2] !== a) {
    let n = [
      {
        settingKey: `disableScrollFadeMask`,
        label: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMask.label`,
          defaultMessage: `Disable scroll fade mask`,
          description: `Label for GPU tearing debug setting that disables scroll fade masks`,
        }),
        description: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMask.description`,
          defaultMessage: `Removes scroll-edge fade masks entirely to isolate mask compositing as a tearing trigger`,
          description: `Description for GPU tearing debug setting that disables scroll fade masks`,
        }),
      },
      {
        settingKey: `disableScrollFadeMaskAnimation`,
        label: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMaskAnimation.label`,
          defaultMessage: `Disable scroll fade animation`,
          description: `Label for GPU tearing debug setting that disables scroll fade mask animation`,
        }),
        description: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableScrollFadeMaskAnimation.description`,
          defaultMessage: `Keeps static fade masks but removes the scroll-linked animation timeline`,
          description: `Description for GPU tearing debug setting that disables scroll fade mask animation`,
        }),
      },
      {
        settingKey: `disableBackdropBlur`,
        label: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableBackdropBlur.label`,
          defaultMessage: `Disable backdrop blur`,
          description: `Label for GPU tearing debug setting that disables backdrop blur`,
        }),
        description: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableBackdropBlur.description`,
          defaultMessage: `Forces backdrop filters off across the web UI to reduce layered blur composition`,
          description: `Description for GPU tearing debug setting that disables backdrop blur`,
        }),
      },
      {
        settingKey: `disableCssMotion`,
        label: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableCssMotion.label`,
          defaultMessage: `Disable CSS motion`,
          description: `Label for GPU tearing debug setting that disables CSS animations and transitions`,
        }),
        description: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableCssMotion.description`,
          defaultMessage: `Turns off CSS animations and transitions to isolate compositor animation work`,
          description: `Description for GPU tearing debug setting that disables CSS animations and transitions`,
        }),
      },
      {
        settingKey: `disableSquircles`,
        label: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableSquircles.label`,
          defaultMessage: `Disable squircles`,
          description: `Label for a GPU debug switch that replaces CSS superellipse (squircle) corners with ordinary rounded corners`,
        }),
        description: i.formatMessage({
          id: `settings.general.gpuTearingDebug.disableSquircles.description`,
          defaultMessage: `Uses standard round corners instead of CSS superellipses to isolate squircle rendering cost`,
          description: `Explains a GPU debug switch; squircle refers to the interface's CSS superellipse corner shape`,
        }),
      },
      {
        settingKey: `forceOpaqueRendererBackground`,
        label: i.formatMessage({
          id: `settings.general.gpuTearingDebug.forceOpaqueRendererBackground.label`,
          defaultMessage: `Force opaque web background`,
          description: `Label for GPU tearing debug setting that forces an opaque web background`,
        }),
        description: i.formatMessage({
          id: `settings.general.gpuTearingDebug.forceOpaqueRendererBackground.description`,
          defaultMessage: `Paints the renderer root and body with opaque backgrounds to isolate transparent-window composition`,
          description: `Description for GPU tearing debug setting that forces an opaque web background`,
        }),
      },
    ];
    ((l = M),
      e[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((d = (0, R.jsx)(M.Header, {
            title: (0, R.jsx)(S, {
              id: `settings.general.gpuTearingDebug`,
              defaultMessage: `GPU Tearing Debug`,
              description: `Heading for GPU tearing debug settings group`,
            }),
            subtitle: (0, R.jsx)(S, {
              id: `settings.general.gpuTearingDebug.subtitle`,
              defaultMessage: `Temporary compositor isolation toggles. Changes apply immediately and are only active while the debug gate is enabled.`,
              description: `Subtitle for GPU tearing debug settings group`,
            }),
          })),
          (e[8] = d))
        : (d = e[8]),
      (s = M.Content),
      (o = t),
      (u = n.map((e) =>
        (0, R.jsx)(
          x,
          {
            label: e.label,
            description: e.description,
            control: (0, R.jsx)(_, {
              checked: a[e.settingKey],
              onChange: (t) => {
                T(r, e.settingKey, t);
              },
              ariaLabel: i.formatMessage(
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
      (e[0] = i),
      (e[1] = r),
      (e[2] = a),
      (e[3] = o),
      (e[4] = s),
      (e[5] = l),
      (e[6] = u),
      (e[7] = d));
  } else ((o = e[3]), (s = e[4]), (l = e[5]), (u = e[6]), (d = e[7]));
  let f;
  e[9] !== o || e[10] !== u
    ? ((f = (0, R.jsx)(o, { children: u })), (e[9] = o), (e[10] = u), (e[11] = f))
    : (f = e[11]);
  let p;
  e[12] !== s || e[13] !== f
    ? ((p = (0, R.jsx)(s, { children: f })), (e[12] = s), (e[13] = f), (e[14] = p))
    : (p = e[14]);
  let m;
  return (
    e[15] !== l || e[16] !== d || e[17] !== p
      ? ((m = (0, R.jsxs)(l, { children: [d, p] })), (e[15] = l), (e[16] = d), (e[17] = p), (e[18] = m))
      : (m = e[18]),
    m
  );
}
var L, R;
function z() {
  return (z = e(() => {
    ((L = s()), d(), b(), a(), u(), i(), C(), r(), k(), v(), j(), A(), w(), O(), f(), (R = o()));
  }))();
}
z();
export { P as DebugSettings };
//# sourceMappingURL=debug-settings-e2cafc2cf54e.js.map
