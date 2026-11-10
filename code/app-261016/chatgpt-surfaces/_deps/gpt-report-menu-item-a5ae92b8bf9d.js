const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./gpt-report-dialog-6ad900e584d9.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./report-dialog-a40f359edbd2.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  F3 as r,
  I3 as i,
  LNt as a,
  OFt as o,
  PBt as s,
  Qst as c,
  TY as l,
  XOt as u,
  ZSt as d,
  ck as f,
  iCt as p,
  kFt as m,
  qU as h,
  rk as g,
  tkt as _,
} from "./app-shared-2feb3d4c6fcc.js";
import { A5n as v, D5n as y, wLr as b, zRr as x } from "./app-initial-ad16eaadf81f.js";
function S(e) {
  let n = (0, C.c)(9),
    { resource: r, onSelect: i } = e,
    a = t(c),
    o = p(x);
  if (
    o == null ||
    r.gizmo.tags?.includes(`first_party`) ||
    (r.gizmo.share_recipient !== `marketplace` && r.gizmo.share_recipient !== `link`)
  )
    return null;
  let s;
  n[0] !== o || n[1] !== i || n[2] !== r || n[3] !== a
    ? ((s = () => {
        (i?.(), v(a, T, { accountId: o, resource: r }));
      }),
      (n[0] = o),
      (n[1] = i),
      (n[2] = r),
      (n[3] = a),
      (n[4] = s))
    : (s = n[4]);
  let l, u;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, w.jsx)(g.ItemIcon, { children: (0, w.jsx)(h, {}) })),
      (u = (0, w.jsx)(_, {
        id: `chatgptConversations.gpts.report.action`,
        defaultMessage: `Report GPT`,
        description: `Menu action to report a publicly shared third-party GPT`,
      })),
      (n[5] = l),
      (n[6] = u))
    : ((l = n[5]), (u = n[6]));
  let d;
  return (
    n[7] === s
      ? (d = n[8])
      : ((d = (0, w.jsxs)(g.Item, { onSelect: s, children: [l, u] })), (n[7] = s), (n[8] = d)),
    d
  );
}
var C, w, T;
function E() {
  return (E = e(() => {
    ((C = s()),
      d(),
      u(),
      b(),
      f(),
      l(),
      r(),
      y(),
      n(),
      (w = a()),
      m(),
      (T = i(
        async () =>
          (
            await o(
              async () => {
                let { GptReportDialog: e } = await import(`./gpt-report-dialog-6ad900e584d9.js`);
                return { GptReportDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
              import.meta.url,
            )
          ).GptReportDialog,
      )));
  }))();
}
export { E as n, S as t };
//# sourceMappingURL=gpt-report-menu-item-a5ae92b8bf9d.js.map
