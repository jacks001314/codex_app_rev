const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./local-conversation-sources-side-panel-tab-5249bb6f5cea.js",
      "./rolldown-runtime-c05d78c594d1.js",
      "./app-initial-f094ef01c64d.js",
      "./app-initial-49fc08c26651.css",
      "./app-primary-4c40d73a1074.js",
      "./app-primary-d815831c9bad.css",
      "./artifact-file-preview-icon-70a3fde11749.js",
      "./local-conversation-webmcp-tools-model-40d1a7153ca0.js",
      "./webmcp-tool-calls-f4b709411704.js",
      "./mcp-tool-item-content-5427b9fecd85.js",
      "./automation-status-messages-8323ed1c597b.js",
      "./open-automation-side-panel-tab-3dba1f01fdd9.js",
      "./cursor-interactive-light-16-68e3de2313db.js",
      "./computer-use-native-app-metadata-ce3a8605f5bd.js",
      "./tool-activity-disclosure-6103c5aa72b1.js",
      "./is-available-f419fd226def.js",
      "./use-local-conversation-sources-733990c21ff1.js",
      "./local-conversation-sources-signals-4de97ec9f993.js",
      "./local-conversation-summary-panel-sources-model-aebd81465a06.js",
      "./mcp-app-analytics-d4aac36ba72c.js",
      "./registered-sources-f4ac743012d6.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Bt as n,
  $Z as r,
  $zt as i,
  B4t as a,
  B6t as o,
  Bn as s,
  CIt as c,
  Cen as l,
  FEt as u,
  FTt as d,
  H4t as f,
  IFt as p,
  J4t as m,
  Jen as ee,
  K4t as h,
  KHt as te,
  LFt as ne,
  O3t as re,
  PEt as g,
  QBt as ie,
  QZ as ae,
  SIt as oe,
  Szt as se,
  TEt as ce,
  TTt as _,
  Vn as le,
  Vnn as ue,
  WHt as de,
  Yzt as fe,
  _mn as pe,
  a3t as v,
  aBt as me,
  b2t as he,
  bIt as ge,
  d9 as _e,
  e9t as ve,
  eIt as y,
  gmn as b,
  hmn as ye,
  i6t as x,
  iBt as be,
  o$ as xe,
  o3t as Se,
  oBt as Ce,
  rBt as we,
  rTt as Te,
  s$ as Ee,
  tIt as De,
  vIt as Oe,
  wzt as S,
  y2t as C,
  y9 as w,
  yIt as T,
  yen as ke,
} from "./app-initial-f094ef01c64d.js";
import {
  a as Ae,
  c as E,
  o as D,
  s as je,
} from "./local-conversation-webmcp-tools-model-40d1a7153ca0.js";
import { n as Me, r as O } from "./local-conversation-sources-signals-4de97ec9f993.js";
import { n as Ne, t as k } from "./open-sources-side-panel-tab-a9204e8bb500.js";
function A(e, t = {}) {
  return M(j(e, t));
}
function j(
  e,
  {
    apps: t,
    includeGeneratedImages: n = !1,
    includePages: r = !1,
    projectlessOutputDirectory: i = null,
  } = {},
) {
  let a =
      t == null
        ? null
        : new Map(
            D(e, t, r)
              .filter(E)
              .map((e) => [e.key, e]),
          ),
    o = [];
  for (let s = e.length - 1; s >= 0; --s) {
    let c = e[s],
      l =
        t == null || a == null
          ? []
          : D([c], t, r)
              .filter(E)
              .map((e) => ({ type: `external-resource`, resource: a.get(e.key) ?? e }));
    o.push([...l, ...Ie(c, i, n)]);
  }
  return o;
}
function Pe(e, t) {
  if (t == null) return e;
  let n = new Set(Array.from(t, h));
  return e.filter((e) => {
    switch (e.type) {
      case `file`:
      case `generated-image`:
        return n.has(h(e.path));
      case `external-resource`:
      case `google-drive`:
      case `appgen-app`:
      case `website`:
        return !0;
    }
  });
}
function M(e) {
  let t = [],
    n = new Map();
  for (let r of e)
    for (let e of r) {
      let r = N(e),
        i = n.get(r);
      if (i != null) {
        t[i]?.type === `file` && e.type === `generated-image` && (t[i] = e);
        continue;
      }
      (n.set(r, t.length), t.push(e));
    }
  return t;
}
function Fe(e) {
  return P.test(a(e));
}
function Ie(e, t, n) {
  let r = i(e.status),
    a = we(e),
    o = e.params.cwd == null ? null : ve(e.params.cwd);
  return Re({
    assistantContent: r === `complete` ? Le(e) : null,
    cwd: o,
    includeGeneratedImages: n,
    projectlessOutputDirectory: t,
    status: r,
    turn: e,
    turnArtifacts: a,
  });
}
function Le(e) {
  for (let t = e.items.length - 1; t >= 0; --t) {
    let r = e.items[t];
    if (r?.type === `agentMessage`) {
      let t = me(r.text, !1);
      return t.removed && t.content.length === 0
        ? null
        : C({ content: t.content, isHeartbeatAutomationTurn: n(e) }).artifactScanContent;
    }
  }
  return null;
}
function Re({
  assistantContent: e,
  cwd: t,
  includeGeneratedImages: n,
  projectlessOutputDirectory: r,
  status: i,
  turn: a,
  turnArtifacts: o,
}) {
  let s = [],
    u = new Map(),
    d = (e) => {
      let t = N(e),
        n = u.get(t);
      if (n == null) {
        (u.set(t, s.length), s.push(e));
        return;
      }
      (s[n]?.type === `file` || s[n]?.type === `generated-image`) &&
        (e.type === `website` || e.type === `generated-image`) &&
        (s[n] = e);
    },
    f = n ? a.items.slice().reverse() : a.items;
  for (let e of f)
    if (
      e?.type === `imageGeneration` &&
      e.src != null &&
      te(e.src) &&
      !ge({ cwd: t, resourcePath: e.src }) &&
      (n || c({ cwd: t, projectlessOutputDirectory: r, resourcePath: e.src }))
    ) {
      let r = t == null ? e.src : m(t, e.src);
      d(
        n
          ? { type: `generated-image`, imageGenerationItemId: e.id, path: r }
          : { type: `file`, path: r },
      );
    }
  if (i !== `complete`) return s;
  let p = Oe({
    assistantContent: e,
    includeAppgenResources: !0,
    projectlessOutputDirectory: r,
    turn: {
      artifacts: o,
      collaborationMode: a.params.collaborationMode ?? null,
      cwd: t,
      items: S(a, [], { includeTurnDiff: !1 }).items,
      status: i,
    },
  });
  for (let e of p)
    switch (e.type) {
      case `file`:
        d({ type: `file`, path: t == null ? e.path : m(t, e.path) });
        break;
      case `google-drive`:
      case `appgen-app`:
        d(e);
        break;
      case `website`:
        d({ type: `website`, target: l(e.target) || t == null ? e.target : m(t, e.target) });
        break;
    }
  return s;
}
function N(e) {
  switch (e.type) {
    case `file`:
    case `generated-image`:
      return `path:${h(e.path)}`;
    case `external-resource`:
      return e.resource.key;
    case `google-drive`:
      return Ae(e.url) ?? `google-drive:${e.url}`;
    case `appgen-app`:
      return `appgen-app:${e.projectId}`;
    case `website`:
      return l(e.target) ? `url:${ke(e.target)}` : `path:${h(e.target)}`;
  }
}
var P,
  F = e(() => {
    (o(),
      he(),
      ie(),
      be(),
      Ce(),
      fe(),
      se(),
      T(),
      oe(),
      de(),
      f(),
      je(),
      (P =
        /^(?:ig_[a-f0-9]{32,}|exec-[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12})\.(?:avif|gif|jpeg|jpg|png|webp)$/i));
  });
function I(e) {
  return g(e.items).some((e) => (e.type === `mcpToolCall` && !ee(e.server)) || !1);
}
function ze(e, t) {
  return e == null || t == null
    ? e === t
    : e.turnId === t.turnId &&
        (0, z.default)(e.params.input, t.params.input) &&
        (0, z.default)(L(e), L(t));
}
function L(e) {
  return g(e.items).filter(
    (e) =>
      e.type === `userMessage` ||
      e.type === `steeringUserMessage` ||
      e.type === `webSearch` ||
      e.type === `mcpToolCall`,
  );
}
function R({ artifacts: e, get: t, hostId: n }) {
  let r = e.flatMap((e) => (e.type === `file` || e.type === `generated-image` ? [e.path] : []));
  if (r.length === 0) return e;
  let i = t(xe, { hostId: n, paths: r });
  return i.error == null ? Pe(e, new Set(i.data?.existingPaths ?? [])) : e;
}
var z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Be = e(() => {
    ((z = t(ue(), 1)),
      re(),
      o(),
      Te(),
      u(),
      le(),
      Ee(),
      w(),
      Se(),
      F(),
      Me(),
      (B = x(v, ({ conversationId: e, includeGeneratedImages: t }, { get: n }) => {
        let r = n(O, e);
        return r == null
          ? []
          : A(r, { includeGeneratedImages: t, projectlessOutputDirectory: n(d, e) });
      })),
      (V = x(
        v,
        ({ conversationId: e, includeGeneratedImages: t }, { get: n }) => {
          let r = n(_, e);
          return r == null
            ? []
            : A([r], { includeGeneratedImages: t, projectlessOutputDirectory: n(d, e) });
        },
        { isEqual: z.default },
      )),
      (H = x(
        v,
        ({ conversationId: e, includeGeneratedImages: t }, { get: n }) =>
          M([
            n(V, { conversationId: e, includeGeneratedImages: t }),
            n(B, { conversationId: e, includeGeneratedImages: t }),
          ]),
        { isEqual: z.default },
      )),
      (U = x(v, (e, { get: t }) => t(O, e)?.some(I) ?? !1)),
      (W = x(v, (e, { get: t }) => t(_, e), { isEqual: ze })),
      (G = x(
        v,
        ({ conversationId: e, hostId: t, includeGeneratedImages: n }, { get: r }) => {
          let i = r(W, e);
          if (i == null) return { latestExternalArtifacts: [], priorArtifactsByTurn: [] };
          let a = j([...(r(O, e) ?? []), i], {
            apps: r(_e, t).data ?? [],
            includePages: !1,
            includeGeneratedImages: n,
            projectlessOutputDirectory: r(d, e),
          });
          return {
            latestExternalArtifacts: a[0]?.filter((e) => e.type === `external-resource`) ?? [],
            priorArtifactsByTurn: a.slice(1),
          };
        },
        { isEqual: z.default },
      )),
      (K = x(
        v,
        ({ conversationId: e, hostId: t }, { get: n }) => {
          let r = {
              conversationId: e,
              includeGeneratedImages: n(ce, e) === `projectless` && n(s) !== `disabled`,
            },
            i = n(W, e);
          if ((i == null || !I(i)) && !n(U, e)) return n(H, r);
          let { latestExternalArtifacts: a, priorArtifactsByTurn: o } = n(G, { ...r, hostId: t });
          return M([[...a, ...n(V, r)], ...o]);
        },
        { isEqual: z.default },
      )),
      (q = x(v, ({ conversationId: e, hostId: t }, { get: n }) =>
        R({
          artifacts: n(H, { conversationId: e, includeGeneratedImages: !1 }),
          get: n,
          hostId: t,
        }),
      )),
      (J = x(
        v,
        ({ conversationId: e, hostId: t }, { get: n }) =>
          R({ artifacts: n(K, { conversationId: e, hostId: t }), get: n, hostId: t }),
        { isEqual: z.default },
      )));
  });
function Ve({ open: e }) {
  return ne(y.SOURCES, X, {
    dropDestinations: [`left`, `right`, `bottom`],
    getId: () => y.SOURCES,
    isAvailable: (e) => e.value.routeKind === `local-thread`,
    open: e,
    renderThumbnail: (e, t) =>
      (0, Y.jsx)(Z, { conversationId: e.conversationId, hostId: e.hostId, title: t.title }),
  });
}
var Y,
  X,
  Z,
  He = e(() => {
    (p(),
      ae(),
      De(),
      (Y = ye()),
      pe(),
      (X = r(async () => {
        let { LocalConversationSourcesSidePanelTab: e } = await b(
          async () => {
            let { LocalConversationSourcesSidePanelTab: e } = await import(
              `./local-conversation-sources-side-panel-tab-5249bb6f5cea.js`
            );
            return { LocalConversationSourcesSidePanelTab: e };
          },
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
          import.meta.url,
        );
        return e;
      })),
      (Z = r(async () => {
        let { RegisteredLocalSourcesThumbnail: e } = await b(
          async () => {
            let { RegisteredLocalSourcesThumbnail: e } = await import(
              `./registered-sources-f4ac743012d6.js`
            );
            return { RegisteredLocalSourcesThumbnail: e };
          },
          __vite__mapDeps([20, 1, 2, 3, 7, 8, 15, 18, 19]),
          import.meta.url,
        );
        return e;
      })));
  });
function Q(e, t, n, r) {
  Ne(e, $, t, n, r);
}
var $,
  Ue = e(() => {
    (He(), k(), ($ = Ve({ open: Q })));
  });
export { Be as a, J as i, Q as n, Fe as o, q as r, F as s, Ue as t };
//# sourceMappingURL=open-local-conversation-sources-side-panel-tab-e80692a35ed8.js.map
