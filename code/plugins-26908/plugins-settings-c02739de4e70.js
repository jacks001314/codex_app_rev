import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import { t as n } from "./react-d6ffadc57208.js";
import { t as r } from "./compiler-runtime-292acb85cdd3.js";
import {
  DE as i,
  FXt as a,
  QO as o,
  RQt as s,
  UQt as c,
  X1t as l,
  _on as u,
  bE as d,
  bXt as f,
  ek as p,
  gon as m,
  kE as h,
  yE as g,
} from "./app-initial-bcc2ff475eb6.js";
import { t as _ } from "./jsx-runtime-a96621a2647a.js";
import { n as v, t as y } from "./button-6325b3939f12.js";
import { D as b, O as x } from "./plugin-request-empty-state-e0c7cff2d8cb.js";
import { n as S, t as C } from "./plugins-page-6d15a974f108.js";
function w(e) {
  let t = (0, T.c)(27),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { manageOnly: r } = n,
    o = r !== void 0 && r,
    { selectedHostId: l } = p(),
    d = a(),
    [f, m] = (0, E.useState)(`plugins`),
    [h, _] = (0, E.useState)(!1),
    v = o ? `mcps` : `plugins`,
    x;
  t[2] !== h || t[3] !== o
    ? ((x = o ? void 0 : { isAdding: h, onClose: () => _(!1) }), (t[2] = h), (t[3] = o), (t[4] = x))
    : (x = t[4]);
  let S;
  t[5] !== l || t[6] !== v || t[7] !== x
    ? ((S = (0, D.jsx)(C, {
        directoryEntrypoint: s.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS,
        hostId: l,
        initialManageTab: v,
        manageOnly: !0,
        mcpServerCreation: x,
        onManageTabSelect: m,
      })),
      (t[5] = l),
      (t[6] = v),
      (t[7] = x),
      (t[8] = S))
    : (S = t[8]);
  let w = S;
  if (o) return w;
  let O, k;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, D.jsx)(g, { slug: `plugins-settings` })),
      (k = (0, D.jsx)(u, {
        id: `settings.section.plugins-settings.subtitle`,
        defaultMessage: `Manage plugins, skills, and MCPs`,
        description: `Subtitle for the combined plugins settings section`,
      })),
      (t[9] = O),
      (t[10] = k))
    : ((O = t[9]), (k = t[10]));
  let A;
  t[11] !== d || t[12] !== l || t[13] !== f
    ? ((A = () => {
        d(`/plugins`, {
          state: {
            initialHostId: l,
            initialTab: f === `skills` ? `skills` : `plugins`,
            pluginDirectoryEntrypoint: s.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS,
          },
        });
      }),
      (t[11] = d),
      (t[12] = l),
      (t[13] = f),
      (t[14] = A))
    : (A = t[14]);
  let j;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, D.jsx)(u, {
        id: `settings.section.plugins-settings.browseDirectory`,
        defaultMessage: `Browse directory`,
        description: `Button for browsing the plugin or skill directory from Plugins settings`,
      })),
      (t[15] = j))
    : (j = t[15]);
  let M;
  t[16] === A
    ? (M = t[17])
    : ((M = (0, D.jsx)(y, { color: `outline`, size: `toolbar`, onClick: A, children: j })),
      (t[16] = A),
      (t[17] = M));
  let N;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = () => _(!0)), (t[18] = N))
    : (N = t[18]);
  let P;
  t[19] === l
    ? (P = t[20])
    : ((P = (0, D.jsx)(b, {
        mode: `manage`,
        hostId: l,
        onAddMcpServer: N,
        source: c.CODEX_PLUGIN_SOURCE_OTHER,
      })),
      (t[19] = l),
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
      ? ((I = (0, D.jsx)(i, { title: O, subtitle: k, action: F, children: w })),
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
    ((T = r()), l(), (E = t(n(), 1)), m(), f(), v(), x(), S(), h(), o(), d(), (D = _()));
  });
export { O as n, w as t };
//# sourceMappingURL=plugins-settings-c02739de4e70.js.map
