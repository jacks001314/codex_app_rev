import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  CPt as n,
  Ixt as r,
  Pxt as i,
  SPt as a,
  VDt as o,
  hot as s,
  jDt as c,
  lot as l,
  nSt as u,
  t3 as d,
  vzt as f,
  xMt as p,
  yzt as m,
  zxt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Qn as g,
  $f as _,
  Cwr as v,
  GMr as y,
  I3n as b,
  XHt as x,
  YHt as S,
  YOr as C,
  Ymr as w,
  b3n as T,
  dxn as E,
  e$n as D,
  ehr as O,
  ep as k,
  gwr as A,
  lxn as j,
  pxn as M,
  rkr as N,
  tNr as P,
  tp as F,
  w3n as I,
} from "./app-initial-5851df3f6cb1.js";
import { n as L, t as R } from "./plan-file-96ce4584d7d0.js";
import { i as z, n as B, r as V } from "./plan-model-952842e341e5.js";
function H(e) {
  let n = (0, U.c)(8),
    { title: r, ariaLabel: i, icon: a, onOpen: o, loading: s } = e,
    c = s !== void 0 && s,
    l;
  n[0] === r
    ? (l = n[1])
    : ((l = (0, W.jsx)(`span`, { className: `truncate select-none`, children: r })), (n[0] = r), (n[1] = l));
  let u;
  return (
    n[2] !== i || n[3] !== a || n[4] !== c || n[5] !== o || n[6] !== l
      ? ((u = (0, W.jsxs)(t, {
          className: `max-w-full`,
          color: `ghostActive`,
          size: `toolbar`,
          allowShrink: !0,
          loading: c,
          "aria-label": i,
          onClick: o,
          children: [a, l],
        })),
        (n[2] = i),
        (n[3] = a),
        (n[4] = c),
        (n[5] = o),
        (n[6] = l),
        (n[7] = u))
      : (u = n[7]),
    u
  );
}
var U, W;
function G() {
  return (G = e(() => {
    ((U = f()), d(), (W = p()));
  }))();
}
function K(e) {
  let t = (0, q.c)(21),
    { conversationId: i } = e,
    a = r(A),
    c = o(),
    l = h(B, i),
    u = h(V, i),
    d = h(l == null ? null : C, l ?? ``),
    f;
  t[0] === d?.data?.automation.plan_file_id
    ? (f = t[1])
    : ((f = /^file-inline-(libfile[_-][^~]+)(?:~.*)?$/.exec(d?.data?.automation.plan_file_id ?? ``)?.[1]),
      (t[0] = d?.data?.automation.plan_file_id),
      (t[1] = f));
  let p = f,
    m = h(p == null ? null : R, p ?? ``),
    v = p == null ? null : `chatgpt-file:${i}:automation-plan:${p}`,
    b = h(X, v),
    [x, T] = (0, J.useState)(null),
    E = (0, J.useRef)(null),
    D;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => () => E.current?.abort()), (t[2] = D))
    : (D = t[2]);
  let O;
  if (
    (t[3] !== l || t[4] !== i ? ((O = [i, l]), (t[3] = l), (t[4] = i), (t[5] = O)) : (O = t[5]),
    (0, J.useEffect)(D, O),
    l == null || u == null || m?.data?.mime_type !== `text/markdown` || m.data.access_kind !== `owned`)
  )
    return null;
  let k;
  t[6] !== c || t[7] !== b || t[8] !== u
    ? ((k =
        b == null
          ? c.formatMessage(
              {
                id: `chatgptConversations.automationPlan.openNamedPlan`,
                defaultMessage: `Open plan: {title}`,
                description: `Accessible label for the conversation header shortcut. Title is the Automation's title.`,
              },
              { title: u },
            )
          : c.formatMessage(
              {
                id: `chatgptConversations.automationPlan.closeNamedPlan`,
                defaultMessage: `Close plan: {title}`,
                description: `Accessible label for closing the open plan preview from the conversation header. Title is the Automation's title.`,
              },
              { title: u },
            )),
      (t[6] = c),
      (t[7] = b),
      (t[8] = u),
      (t[9] = k))
    : (k = t[9]);
  let M = x === l,
    N;
  t[10] !== l || t[11] !== i || t[12] !== c || t[13] !== v || t[14] !== a
    ? ((N = () => {
        let e = a.get(y),
          t = a.get(X, v);
        if ((E.current?.abort(), t != null && v != null)) {
          j(t).closeTab(a, v);
          return;
        }
        let r = new AbortController();
        ((E.current = r), T(l));
        let o = () => !r.signal.aborted && a.get(y) === e && a.get(B, i) === l;
        (async () => {
          if (!_({ browserPreview: !0 })) throw Error(`Plan preview is unavailable`);
          let e = await w.safeGet(`/automation/{automation_id}`, {
            parameters: { path: { automation_id: l } },
            signal: r.signal,
          });
          if (!o()) return;
          let t = /^file-inline-(libfile[_-][^~]+)(?:~.*)?$/.exec(e.plan_file_id ?? ``)?.[1];
          if (t == null) throw Error(`Saved plan not found`);
          let n = await w.safeGet(`/files/library/files/{library_file_id}/node`, {
            parameters: { path: { library_file_id: t } },
            signal: r.signal,
          });
          if (o()) {
            if (n.mime_type !== `text/markdown` || n.access_kind !== `owned`)
              throw Error(`Saved plan is inaccessible`);
            await F(a, {
              conversationId: g(i),
              fileName: n.name,
              libraryArtifactType: n.library_artifact_type,
              mimeType: n.mime_type,
              browserPreview: !0,
              fullWidth: !1,
              downloadFallback: !1,
              tabKey: `automation-plan:${n.id}`,
              signal: r.signal,
              isAccessBlocked: (e) => e.get(B, i) !== l,
              target: { type: `file-id`, fileId: `file-inline-${n.id}`, libraryFileId: n.id },
            });
          }
        })()
          .catch((e) => {
            o() &&
              (n.warning(`Automation plan failed to open`, { safe: {}, sensitive: { error: e } }),
              a
                .get(s)
                .danger(
                  c.formatMessage({
                    id: `chatgptConversations.automationPlan.openFailed`,
                    defaultMessage: `Failed to open file`,
                    description: `Error toast when opening the saved plan from the conversation header fails`,
                  }),
                  { errorAnalytics: { toastId: `chatgptConversations.automationPlan.openFailed` } },
                ));
          })
          .finally(() => {
            E.current === r && T(null);
          });
      }),
      (t[10] = l),
      (t[11] = i),
      (t[12] = c),
      (t[13] = v),
      (t[14] = a),
      (t[15] = N))
    : (N = t[15]);
  let P;
  return (
    t[16] !== k || t[17] !== M || t[18] !== N || t[19] !== u
      ? ((P = (0, Y.jsx)(S.HeaderAction, {
          actionId: `automation-plan`,
          align: `start`,
          children: (0, Y.jsx)(H, { title: u, ariaLabel: k, loading: M, onOpen: N }),
        })),
        (t[16] = k),
        (t[17] = M),
        (t[18] = N),
        (t[19] = u),
        (t[20] = P))
      : (P = t[20]),
    P
  );
}
var q, J, Y, X;
function Z() {
  return (Z = e(() => {
    ((q = f()),
      i(),
      (J = m()),
      c(),
      x(),
      b(),
      P(),
      N(),
      l(),
      v(),
      E(),
      a(),
      O(),
      D(),
      G(),
      k(),
      L(),
      z(),
      (Y = p()),
      (X = u(A, (e, { get: t }) => {
        let n = t(M, e);
        return n == null ? null : t(n === `right` ? I : T) && t(j(n).activeTab$)?.tabId === e ? n : null;
      })));
  }))();
}
Z();
export { K as AutomationPlanHeaderShortcut };
//# sourceMappingURL=plan-header-shortcut-da9da52bc656.js.map
