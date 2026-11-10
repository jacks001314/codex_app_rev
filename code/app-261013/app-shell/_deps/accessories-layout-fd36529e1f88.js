import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as n,
  Ixt as r,
  Pxt as i,
  Vxt as a,
  lMt as o,
  vzt as s,
  wot as c,
  xMt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  Eo as u,
  Fb as d,
  Nb as f,
  Pb as p,
  QDr as m,
  XDr as h,
  ZRn as g,
  wo as _,
  yVn as v,
} from "./app-initial-5851df3f6cb1.js";
import { r as y, t as b } from "./artifact-accessories-fe3be839fff5.js";
import { n as x, r as S } from "./scope-fb5d3b4015cc.js";
import { n as C, t as w } from "./execution-policy-status-30311e210db4.js";
import { n as T, t as E } from "./code-execution-account-policy-dfe8d762999e.js";
import { n as D, r as O, t as k } from "./document-4b4a17f977a4.js";
function A(e) {
  let t = (0, j.c)(15),
    { fileName: i, content: o, sharedFrameKey: s } = e,
    c = r(n),
    l = a(E);
  if (l.status !== `allowed`) {
    let e;
    return (
      t[0] === l.status
        ? (e = t[1])
        : ((e = (0, N.jsx)(w, { status: l.status })), (t[0] = l.status), (t[1] = e)),
      e
    );
  }
  let u;
  t[2] === i ? (u = t[3]) : ((u = { path: i }), (t[2] = i), (t[3] = u));
  let d;
  t[4] === c
    ? (d = t[5])
    : ((d = () => ({
        onRunStart: (e) => {
          let { signal: t } = e,
            n = (e) => {
              m(c, g, { category: e, previewHost: `apps`, previewLanguage: `html` });
            };
          n(`html.file_preview_started`);
          let r = !1;
          return {
            onReady: M.default,
            onComplete: M.default,
            onContentMeasured: M.default,
            onContentUpdated: M.default,
            onFailure: () => {
              t.aborted || r || ((r = !0), n(`html.file_preview_failed`));
            },
          };
        },
      })),
      (t[4] = c),
      (t[5] = d));
  let f = l.networkAccessEnabled ? D : O,
    p;
  t[6] === s ? (p = t[7]) : ((p = s == null ? void 0 : { key: s, surface: `panel` }), (t[6] = s), (t[7] = p));
  let h;
  return (
    t[8] !== o || t[9] !== i || t[10] !== u || t[11] !== d || t[12] !== f || t[13] !== p
      ? ((h = (0, N.jsx)(_, {
          attributes: u,
          createRenderObserver: d,
          embeddedHtml: o,
          embeddedFillContainer: !0,
          presentation: `app-block`,
          sandboxDocument: f,
          sharedFrame: p,
          onSendFollowUpMessage: null,
          title: i,
        })),
        (t[8] = o),
        (t[9] = i),
        (t[10] = u),
        (t[11] = d),
        (t[12] = f),
        (t[13] = p),
        (t[14] = h))
      : (h = t[14]),
    h
  );
}
var j, M, N;
function P() {
  return (P = e(() => {
    ((j = s()), v(), (M = t(o(), 1)), i(), C(), T(), h(), c(), u(), k(), (N = l()));
  }))();
}
function F(e) {
  let t = (0, I.c)(12),
    { accountId: n, children: r, fileInfoSource: i, ownerId: o, panelClearsHeader: s, userId: c } = e,
    l = a(S),
    u = o;
  if (u == null && i != null) {
    let e;
    (t[0] === i ? (e = t[1]) : ((e = f(i)), (t[0] = i), (t[1] = e)), (u = e));
  } else if (u == null && l != null) {
    let e;
    (t[2] === l.file.libraryFileId
      ? (e = t[3])
      : ((e = p(l.file.libraryFileId)), (t[2] = l.file.libraryFileId), (t[3] = e)),
      (u = e));
  }
  let d = l ?? void 0,
    m;
  return (
    t[4] !== n || t[5] !== r || t[6] !== i || t[7] !== u || t[8] !== s || t[9] !== d || t[10] !== c
      ? ((m = (0, L.jsx)(b, {
          accountId: n,
          fileInfoSource: i,
          ownerId: u,
          panelClearsHeader: s,
          userId: c,
          versionHistory: d,
          children: r,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = i),
        (t[7] = u),
        (t[8] = s),
        (t[9] = d),
        (t[10] = c),
        (t[11] = m))
      : (m = t[11]),
    m
  );
}
var I, L;
function R() {
  return (R = e(() => {
    ((I = s()), i(), y(), d(), x(), (L = l()));
  }))();
}
export { P as i, R as n, A as r, F as t };
//# sourceMappingURL=accessories-layout-fd36529e1f88.js.map
