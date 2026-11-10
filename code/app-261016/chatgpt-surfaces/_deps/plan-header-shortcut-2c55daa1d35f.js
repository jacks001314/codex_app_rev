import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  FBt as n,
  LNt as r,
  PBt as i,
  RFt as a,
  Vrt as o,
  XOt as s,
  Y3 as c,
  Z3 as l,
  ZSt as u,
  nCt as d,
  okt as f,
  qrt as p,
  yCt as m,
  zFt as h,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  D2n as g,
  DNr as _,
  JRt as v,
  MOr as y,
  O2n as b,
  Swn as x,
  YRt as S,
  bwn as C,
  iRr as w,
  n7n as T,
  np as E,
  rp as D,
  s7n as O,
  tp as k,
  tyr as A,
  wLr as j,
  wwn as M,
  y7n as N,
  yNr as P,
  zOr as F,
  zRr as I,
} from "./app-initial-ad16eaadf81f.js";
import { n as L, t as R } from "./plan-file-4ed41883a51a.js";
import { i as z, n as B, r as V } from "./plan-model-ad9ea6b59c2a.js";
function H(e) {
  let t = (0, U.c)(8),
    { title: n, ariaLabel: r, icon: i, onOpen: a, loading: o } = e,
    s = o !== void 0 && o,
    l;
  t[0] === n
    ? (l = t[1])
    : ((l = (0, W.jsx)(`span`, { className: `truncate select-none`, children: n })), (t[0] = n), (t[1] = l));
  let u;
  return (
    t[2] !== r || t[3] !== i || t[4] !== s || t[5] !== a || t[6] !== l
      ? ((u = (0, W.jsxs)(c, {
          className: `max-w-full`,
          color: `ghostActive`,
          size: `toolbar`,
          allowShrink: !0,
          loading: s,
          "aria-label": r,
          onClick: a,
          children: [i, l],
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = s),
        (t[5] = a),
        (t[6] = l),
        (t[7] = u))
      : (u = t[7]),
    u
  );
}
var U, W;
function G() {
  return (G = e(() => {
    ((U = i()), l(), (W = r()));
  }))();
}
function K(e) {
  let n = (0, q.c)(21),
    { conversationId: r } = e,
    i = t(y),
    a = f(),
    o = d(B, r),
    s = d(V, r),
    c = d(o == null ? null : P, o ?? ``),
    l;
  n[0] === c?.data?.automation.plan_file_id
    ? (l = n[1])
    : ((l = /^file-inline-(libfile[_-][^~]+)(?:~.*)?$/.exec(c?.data?.automation.plan_file_id ?? ``)?.[1]),
      (n[0] = c?.data?.automation.plan_file_id),
      (n[1] = l));
  let u = l,
    m = d(u == null ? null : R, u ?? ``),
    _ = u == null ? null : `chatgpt-file:${r}:automation-plan:${u}`,
    b = d(X, _),
    [x, S] = (0, J.useState)(null),
    T = (0, J.useRef)(null),
    E;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = () => () => T.current?.abort()), (n[2] = E))
    : (E = n[2]);
  let O;
  if (
    (n[3] !== o || n[4] !== r ? ((O = [r, o]), (n[3] = o), (n[4] = r), (n[5] = O)) : (O = n[5]),
    (0, J.useEffect)(E, O),
    o == null || s == null || m?.data?.mime_type !== `text/markdown` || m.data.access_kind !== `owned`)
  )
    return null;
  let A;
  n[6] !== a || n[7] !== b || n[8] !== s
    ? ((A =
        b == null
          ? a.formatMessage(
              {
                id: `chatgptConversations.automationPlan.openNamedPlan`,
                defaultMessage: `Open plan: {title}`,
                description: `Accessible label for the conversation header shortcut. Title is the Automation's title.`,
              },
              { title: s },
            )
          : a.formatMessage(
              {
                id: `chatgptConversations.automationPlan.closeNamedPlan`,
                defaultMessage: `Close plan: {title}`,
                description: `Accessible label for closing the open plan preview from the conversation header. Title is the Automation's title.`,
              },
              { title: s },
            )),
      (n[6] = a),
      (n[7] = b),
      (n[8] = s),
      (n[9] = A))
    : (A = n[9]);
  let j = x === o,
    M;
  n[10] !== o || n[11] !== r || n[12] !== a || n[13] !== _ || n[14] !== i
    ? ((M = () => {
        let e = i.get(I),
          t = i.get(X, _);
        if ((T.current?.abort(), t != null && _ != null)) {
          C(t).closeTab(i, _);
          return;
        }
        let n = new AbortController();
        ((T.current = n), S(o));
        let s = () => !n.signal.aborted && i.get(I) === e && i.get(B, r) === o;
        (async () => {
          if (!k({ browserPreview: !0 })) throw Error(`Plan preview is unavailable`);
          let e = await w.safeGet(`/automation/{automation_id}`, {
            parameters: { path: { automation_id: o } },
            signal: n.signal,
          });
          if (!s()) return;
          let t = /^file-inline-(libfile[_-][^~]+)(?:~.*)?$/.exec(e.plan_file_id ?? ``)?.[1];
          if (t == null) throw Error(`Saved plan not found`);
          let a = await w.safeGet(`/files/library/files/{library_file_id}/node`, {
            parameters: { path: { library_file_id: t } },
            signal: n.signal,
          });
          if (s()) {
            if (a.mime_type !== `text/markdown` || a.access_kind !== `owned`)
              throw Error(`Saved plan is inaccessible`);
            await D(i, {
              conversationId: g(r),
              fileName: a.name,
              libraryArtifactType: a.library_artifact_type,
              mimeType: a.mime_type,
              browserPreview: !0,
              fullWidth: !1,
              downloadFallback: !1,
              tabKey: `automation-plan:${a.id}`,
              signal: n.signal,
              isAccessBlocked: (e) => e.get(B, r) !== o,
              target: { type: `file-id`, fileId: `file-inline-${a.id}`, libraryFileId: a.id },
            });
          }
        })()
          .catch((e) => {
            s() &&
              (h.warning(`Automation plan failed to open`, { safe: {}, sensitive: { error: e } }),
              i
                .get(p)
                .danger(
                  a.formatMessage({
                    id: `chatgptConversations.automationPlan.openFailed`,
                    defaultMessage: `Failed to open file`,
                    description: `Error toast when opening the saved plan from the conversation header fails`,
                  }),
                  { errorAnalytics: { toastId: `chatgptConversations.automationPlan.openFailed` } },
                ));
          })
          .finally(() => {
            T.current === n && S(null);
          });
      }),
      (n[10] = o),
      (n[11] = r),
      (n[12] = a),
      (n[13] = _),
      (n[14] = i),
      (n[15] = M))
    : (M = n[15]);
  let N;
  return (
    n[16] !== A || n[17] !== j || n[18] !== M || n[19] !== s
      ? ((N = (0, Y.jsx)(v.HeaderAction, {
          actionId: `automation-plan`,
          align: `start`,
          children: (0, Y.jsx)(H, { title: s, ariaLabel: A, loading: j, onOpen: M }),
        })),
        (n[16] = A),
        (n[17] = j),
        (n[18] = M),
        (n[19] = s),
        (n[20] = N))
      : (N = n[20]),
    N
  );
}
var q, J, Y, X;
function Z() {
  return (Z = e(() => {
    ((q = i()),
      u(),
      (J = n()),
      s(),
      S(),
      N(),
      j(),
      _(),
      o(),
      F(),
      x(),
      a(),
      A(),
      b(),
      G(),
      E(),
      L(),
      z(),
      (Y = r()),
      (X = m(y, (e, { get: t }) => {
        let n = t(M, e);
        return n == null ? null : t(n === `right` ? O : T) && t(C(n).activeTab$)?.tabId === e ? n : null;
      })));
  }))();
}
Z();
export { K as AutomationPlanHeaderShortcut };
//# sourceMappingURL=plan-header-shortcut-2c55daa1d35f.js.map
