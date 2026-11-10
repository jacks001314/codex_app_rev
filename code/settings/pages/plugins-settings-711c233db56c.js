import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Qt as n,
  AMt as r,
  Amn as i,
  Aw as a,
  BS as o,
  Cpn as s,
  IXt as c,
  JQt as l,
  JS as u,
  JXt as d,
  Ow as f,
  Spn as p,
  VS as m,
  XS as h,
  e0t as g,
  hmn as _,
  kMt as v,
  kmn as y,
} from "./app-initial-f094ef01c64d.js";
import { D as b, O as x } from "./plugin-request-empty-state-41e04cfd3e39.js";
import { n as S, t as C } from "./plugins-page-275f0d3fc353.js";
function w(e) {
  let t = (0, T.c)(27),
    r;
  t[0] === e ? (r = t[1]) : ((r = e === void 0 ? {} : e), (t[0] = e), (t[1] = r));
  let { manageOnly: i } = r,
    c = i !== void 0 && i,
    { selectedHostId: f } = a(),
    p = d(),
    [m, h] = (0, E.useState)(`plugins`),
    [g, _] = (0, E.useState)(!1),
    y = c ? `mcps` : `plugins`,
    x;
  t[2] !== g || t[3] !== c
    ? ((x = c ? void 0 : { isAdding: g, onClose: () => _(!1) }), (t[2] = g), (t[3] = c), (t[4] = x))
    : (x = t[4]);
  let S;
  t[5] !== f || t[6] !== y || t[7] !== x
    ? ((S = (0, D.jsx)(C, {
        directoryEntrypoint: l.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS,
        hostId: f,
        initialManageTab: y,
        manageOnly: !0,
        mcpServerCreation: x,
        onManageTabSelect: h,
      })),
      (t[5] = f),
      (t[6] = y),
      (t[7] = x),
      (t[8] = S))
    : (S = t[8]);
  let w = S;
  if (c) return w;
  let O, k;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, D.jsx)(o, { slug: `plugins-settings` })),
      (k = (0, D.jsx)(s, {
        id: `settings.section.plugins-settings.subtitle`,
        defaultMessage: `Manage plugins, skills, and MCPs`,
        description: `Subtitle for the combined plugins settings section`,
      })),
      (t[9] = O),
      (t[10] = k))
    : ((O = t[9]), (k = t[10]));
  let A;
  t[11] !== p || t[12] !== f || t[13] !== m
    ? ((A = () => {
        p(`/plugins`, {
          state: {
            initialHostId: f,
            initialTab: m === `skills` ? `skills` : `plugins`,
            pluginDirectoryEntrypoint: l.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS,
          },
        });
      }),
      (t[11] = p),
      (t[12] = f),
      (t[13] = m),
      (t[14] = A))
    : (A = t[14]);
  let j;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, D.jsx)(s, {
        id: `settings.section.plugins-settings.browseDirectory`,
        defaultMessage: `Browse directory`,
        description: `Button for browsing the plugin or skill directory from Plugins settings`,
      })),
      (t[15] = j))
    : (j = t[15]);
  let M;
  t[16] === A
    ? (M = t[17])
    : ((M = (0, D.jsx)(v, { color: `outline`, size: `toolbar`, onClick: A, children: j })),
      (t[16] = A),
      (t[17] = M));
  let N;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = () => _(!0)), (t[18] = N))
    : (N = t[18]);
  let P;
  t[19] === f
    ? (P = t[20])
    : ((P = (0, D.jsx)(b, {
        mode: `manage`,
        hostId: f,
        onAddMcpServer: N,
        source: n.CODEX_PLUGIN_SOURCE_OTHER,
      })),
      (t[19] = f),
      (t[20] = P));
  let F;
  t[21] !== M || t[22] !== P
    ? ((F = (0, D.jsxs)(`div`, { className: `flex items-center gap-2`, children: [M, P] })),
      (t[21] = M),
      (t[22] = P),
      (t[23] = F))
    : (F = t[23]);
  let I;
  return (
    t[24] !== w || t[25] !== F
      ? ((I = (0, D.jsx)(u, { title: O, subtitle: k, action: F, children: w })),
        (t[24] = w),
        (t[25] = F),
        (t[26] = I))
      : (I = t[26]),
    I
  );
}
var T,
  E,
  D,
  O = e(() => {
    ((T = y()), g(), (E = t(i(), 1)), p(), c(), r(), x(), S(), h(), f(), m(), (D = _()));
  });
export { O as n, w as t };
//# sourceMappingURL=plugins-settings-711c233db56c.js.map
