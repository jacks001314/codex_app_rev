const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./gpt-report-dialog-ee076582322f.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./report-dialog-bb6e098cc574.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AO as t,
  B4 as n,
  Cot as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  TJ as s,
  TO as c,
  Vxt as l,
  XH as u,
  fPt as d,
  jDt as f,
  pPt as p,
  vzt as m,
  wot as h,
  xMt as g,
  z4 as _,
} from "./app-shared-bbfeca5e5737.js";
import { G4n as v, GMr as y, J4n as b, tNr as x } from "./app-initial-5851df3f6cb1.js";
function S(e) {
  let t = (0, C.c)(9),
    { resource: n, onSelect: o } = e,
    s = a(r),
    d = l(y);
  if (
    d == null ||
    n.gizmo.tags?.includes(`first_party`) ||
    (n.gizmo.share_recipient !== `marketplace` && n.gizmo.share_recipient !== `link`)
  )
    return null;
  let f;
  t[0] !== d || t[1] !== o || t[2] !== n || t[3] !== s
    ? ((f = () => {
        (o?.(), b(s, T, { accountId: d, resource: n }));
      }),
      (t[0] = d),
      (t[1] = o),
      (t[2] = n),
      (t[3] = s),
      (t[4] = f))
    : (f = t[4]);
  let p, m;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, w.jsx)(c.ItemIcon, { children: (0, w.jsx)(u, {}) })),
      (m = (0, w.jsx)(i, {
        id: `chatgptConversations.gpts.report.action`,
        defaultMessage: `Report GPT`,
        description: `Menu action to report a publicly shared third-party GPT`,
      })),
      (t[5] = p),
      (t[6] = m))
    : ((p = t[5]), (m = t[6]));
  let h;
  return (
    t[7] === f
      ? (h = t[8])
      : ((h = (0, w.jsxs)(c.Item, { onSelect: f, children: [p, m] })), (t[7] = f), (t[8] = h)),
    h
  );
}
var C, w, T;
function E() {
  return (E = e(() => {
    ((C = m()),
      o(),
      f(),
      x(),
      t(),
      s(),
      _(),
      v(),
      h(),
      (w = g()),
      p(),
      (T = n(
        async () =>
          (
            await d(
              async () => {
                let { GptReportDialog: e } = await import(`./gpt-report-dialog-ee076582322f.js`);
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
//# sourceMappingURL=gpt-report-menu-item-d6ac971188a2.js.map
