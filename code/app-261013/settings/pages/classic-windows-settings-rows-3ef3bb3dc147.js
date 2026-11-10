import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Iot as r,
  Lot as i,
  VDt as ee,
  XO as te,
  Xot as ne,
  Yot as a,
  ZO as o,
  e3 as re,
  iw as s,
  jDt as c,
  nst as ie,
  t3 as l,
  tst as u,
  tw as d,
  vzt as f,
  xMt as p,
  yzt as m,
} from "./app-shared-bbfeca5e5737.js";
import { JPn as h, XPn as g } from "./app-initial-5851df3f6cb1.js";
import { d_ as _, u_ as ae } from "./app-primary-fe8a450b3b04.js";
var v;
function y() {
  return (y = e(() => {
    v = [`classic-windows-settings`];
  }))();
}
function b(e) {
  let r = (0, x.c)(63),
    { service: a } = e,
    o = ee(),
    s = ie(),
    [c, l] = (0, S.useState)(!1),
    [u, f] = (0, S.useState)(!1),
    [p, m] = (0, S.useState)(!1),
    h;
  r[0] === a
    ? (h = r[1])
    : ((h = { queryKey: v, queryFn: () => a.get(), staleTime: 0, retry: !1, refetchOnWindowFocus: `always` }),
      (r[0] = a),
      (r[1] = h));
  let { data: g, isError: _, refetch: y } = ne(h),
    b;
  r[2] === a ? (b = r[3]) : ((b = { mutationFn: () => a.checkForUpdates() }), (r[2] = a), (r[3] = b));
  let { mutate: w, isPending: T, isError: E } = i(b),
    D;
  r[4] === a ? (D = r[5]) : ((D = (e) => a.setCompanionWindowShortcut(e)), (r[4] = a), (r[5] = D));
  let O;
  r[6] === s
    ? (O = r[7])
    : ((O = (e, t) => {
        s.setQueryData(v, (e) => (e == null ? e : { ...e, companionWindowShortcut: t }));
      }),
      (r[6] = s),
      (r[7] = O));
  let k;
  r[8] !== D || r[9] !== O
    ? ((k = { mutationFn: D, onSuccess: O }), (r[8] = D), (r[9] = O), (r[10] = k))
    : (k = r[10]);
  let { mutate: A, isPending: j, isError: M } = i(k),
    N;
  r[11] === y
    ? (N = r[12])
    : ((N = () => {
        y();
      }),
      (r[11] = y),
      (r[12] = N));
  let P = (0, S.useEffectEvent)(N),
    F;
  r[13] !== P || r[14] !== a
    ? ((F = () => {
        let e = () => P();
        return (
          window.addEventListener(`focus`, e),
          () => {
            (window.removeEventListener(`focus`, e), a.setHotkeyRecording(!1).catch(se));
          }
        );
      }),
      (r[13] = P),
      (r[14] = a),
      (r[15] = F))
    : (F = r[15]);
  let I;
  (r[16] === a ? (I = r[17]) : ((I = [a]), (r[16] = a), (r[17] = I)), (0, S.useEffect)(F, I));
  let L;
  r[18] === a
    ? (L = r[19])
    : ((L = function () {
        (l(!1), f(!1), a.setHotkeyRecording(!1).catch(() => m(!0)));
      }),
      (r[18] = a),
      (r[19] = L));
  let R = L,
    z;
  r[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, C.jsx)(n, {
        id: `settings.classicWindows.updates`,
        defaultMessage: `Updates`,
        description: `Label for checking for Classic Windows app updates`,
      })),
      (r[20] = z))
    : (z = r[20]);
  let B;
  r[21] === w ? (B = r[22]) : ((B = () => w()), (r[21] = w), (r[22] = B));
  let V;
  r[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, C.jsx)(n, {
        id: `settings.classicWindows.checkForUpdates`,
        defaultMessage: `Check for updates`,
        description: `Button that invokes the Classic Windows app's native update check`,
      })),
      (r[23] = V))
    : (V = r[23]);
  let H;
  r[24] !== T || r[25] !== B
    ? ((H = (0, C.jsx)(d, {
        className: `select-none`,
        label: z,
        control: (0, C.jsx)(t, { loading: T, onClick: B, children: V }),
      })),
      (r[24] = T),
      (r[25] = B),
      (r[26] = H))
    : (H = r[26]);
  let U;
  r[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, C.jsx)(n, {
        id: `settings.classicWindows.launchAtLogin`,
        defaultMessage: `Launch at Login`,
        description: `Setting for starting the Classic Windows app when signing in to Windows`,
      })),
      (r[27] = U))
    : (U = r[27]);
  let W;
  r[28] === g
    ? (W = r[29])
    : ((W =
        g == null
          ? (0, C.jsx)(n, {
              id: `settings.classicWindows.startupSettings`,
              defaultMessage: `Open Windows settings`,
              description: `Link to Windows Startup Apps settings when the app's startup status is unavailable`,
            })
          : null),
      (r[28] = g),
      (r[29] = W));
  let G;
  r[30] === g?.autoLaunch
    ? (G = r[31])
    : ((G =
        g?.autoLaunch === !0
          ? (0, C.jsx)(n, {
              id: `settings.classicWindows.startupOn`,
              defaultMessage: `On`,
              description: `Link to Windows Startup Apps settings indicating that launch at login is enabled`,
            })
          : null),
      (r[30] = g?.autoLaunch),
      (r[31] = G));
  let K;
  r[32] === g?.autoLaunch
    ? (K = r[33])
    : ((K =
        g?.autoLaunch === !1
          ? (0, C.jsx)(n, {
              id: `settings.classicWindows.startupOff`,
              defaultMessage: `Off`,
              description: `Link to Windows Startup Apps settings indicating that launch at login is disabled`,
            })
          : null),
      (r[32] = g?.autoLaunch),
      (r[33] = K));
  let q;
  r[34] !== W || r[35] !== G || r[36] !== K
    ? ((q = (0, C.jsx)(d, {
        className: `select-none`,
        label: U,
        control: (0, C.jsxs)(re, { href: `ms-settings:startupapps`, onClick: oe, children: [W, G, K] }),
      })),
      (r[34] = W),
      (r[35] = G),
      (r[36] = K),
      (r[37] = q))
    : (q = r[37]);
  let J;
  r[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, C.jsx)(n, {
        id: `settings.classicWindows.companionHotkey`,
        defaultMessage: `Companion window hotkey`,
        description: `Label for the global shortcut that opens the Classic Windows companion window`,
      })),
      (r[38] = J))
    : (J = r[38]);
  let Y;
  r[39] !== o || r[40] !== c || r[41] !== A || r[42] !== j || r[43] !== a || r[44] !== g || r[45] !== R
    ? ((Y = (0, C.jsx)(d, {
        className: `select-none`,
        label: J,
        control: (e) =>
          (0, C.jsx)(ae, {
            accelerator: g?.companionWindowShortcut || null,
            acceleratorLabel: g?.companionWindowShortcut ? te(g.companionWindowShortcut, !1, !1) : null,
            ariaLabelledBy: e[`aria-labelledby`],
            captureAriaLabel: o.formatMessage({
              id: `settings.classicWindows.captureCompanionHotkey`,
              defaultMessage: `Companion window hotkey capture`,
              description: `Accessible label for the input that records the Classic Windows companion window shortcut`,
            }),
            disabled: g == null || j,
            emptyLabel:
              g == null
                ? (0, C.jsx)(n, {
                    id: `settings.classicWindows.shortcutUnavailable`,
                    defaultMessage: `Unavailable`,
                    description: `Companion shortcut value is unavailable while native settings load or fail`,
                  })
                : void 0,
            hotkeyName: o.formatMessage({
              id: `settings.classicWindows.companionHotkey`,
              defaultMessage: `Companion window hotkey`,
              description: `Label for the global shortcut that opens the Classic Windows companion window`,
            }),
            isCapturing: c,
            onCancelCapture: R,
            onCapture: (e) => {
              if (!e.includes(`+`)) {
                f(!0);
                return;
              }
              (A(e), R());
            },
            onClear: () => A(``),
            onStartCapture: () => {
              (f(!1),
                m(!1),
                a
                  .setHotkeyRecording(!0)
                  .then(() => l(!0))
                  .catch(() => m(!0)));
            },
          }),
      })),
      (r[39] = o),
      (r[40] = c),
      (r[41] = A),
      (r[42] = j),
      (r[43] = a),
      (r[44] = g),
      (r[45] = R),
      (r[46] = Y))
    : (Y = r[46]);
  let X;
  r[47] === u
    ? (X = r[48])
    : ((X = u
        ? (0, C.jsx)(d, {
            className: `select-none`,
            label: (0, C.jsx)(n, {
              id: `settings.classicWindows.modifierRequired`,
              defaultMessage: `Include Ctrl, Alt, Shift, or the Windows key in your shortcut`,
              description: `Instruction shown when a user tries to assign a plain key to the Classic Windows companion shortcut, which must include a modifier to avoid interfering with ordinary typing`,
            }),
            control: null,
          })
        : null),
      (r[47] = u),
      (r[48] = X));
  let Z;
  r[49] !== _ || r[50] !== y
    ? ((Z = _
        ? (0, C.jsx)(d, {
            className: `select-none`,
            label: (0, C.jsx)(n, {
              id: `settings.classicWindows.readError`,
              defaultMessage: `Could not load desktop settings`,
              description: `Error when reading native Classic Windows app settings fails`,
            }),
            control: (0, C.jsx)(t, {
              onClick: () => void y(),
              children: (0, C.jsx)(n, {
                id: `settings.classicWindows.retry`,
                defaultMessage: `Retry`,
                description: `Button to retry loading native Classic Windows app settings`,
              }),
            }),
          })
        : null),
      (r[49] = _),
      (r[50] = y),
      (r[51] = Z))
    : (Z = r[51]);
  let Q;
  r[52] !== p || r[53] !== M || r[54] !== E
    ? ((Q =
        E || M || p
          ? (0, C.jsx)(d, {
              className: `select-none`,
              label: (0, C.jsx)(n, {
                id: `settings.classicWindows.actionError`,
                defaultMessage: `Could not complete this action`,
                description: `Error when a native Classic Windows settings action fails; the user can retry the action`,
              }),
              control: null,
            })
          : null),
      (r[52] = p),
      (r[53] = M),
      (r[54] = E),
      (r[55] = Q))
    : (Q = r[55]);
  let $;
  return (
    r[56] !== H || r[57] !== q || r[58] !== Y || r[59] !== X || r[60] !== Z || r[61] !== Q
      ? (($ = (0, C.jsxs)(C.Fragment, { children: [H, q, Y, X, Z, Q] })),
        (r[56] = H),
        (r[57] = q),
        (r[58] = Y),
        (r[59] = X),
        (r[60] = Z),
        (r[61] = Q),
        (r[62] = $))
      : ($ = r[62]),
    $
  );
}
function oe(e) {
  g({ event: e, href: `ms-settings:startupapps`, initiator: `open_in_browser_bridge` });
}
function se() {}
var x, S, C;
function w() {
  return (w = e(() => {
    ((x = f()), r(), a(), u(), (S = m()), c(), l(), h(), o(), _(), s(), y(), (C = p()));
  }))();
}
w();
export { b as ClassicWindowsSettingsRows };
//# sourceMappingURL=classic-windows-settings-rows-3ef3bb3dc147.js.map
