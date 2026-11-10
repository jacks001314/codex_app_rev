import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  BSt as n,
  FBt as r,
  LNt as i,
  Mst as a,
  NSt as o,
  Oit as s,
  PBt as c,
  XOt as l,
  Y3 as ee,
  Z3 as u,
  ZI as d,
  ZSt as f,
  iCt as p,
  jit as te,
  jst as m,
  nCt as h,
  okt as ne,
  tkt as g,
  vst as _,
  yst as re,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Bvn as ie,
  CRn as ae,
  Dgr as oe,
  FL as v,
  Ilr as y,
  LL as se,
  MOr as ce,
  Mir as b,
  Pdn as le,
  Swn as x,
  UOn as S,
  XEn as C,
  YEn as ue,
  _ur as de,
  bRn as w,
  bwn as fe,
  dW as T,
  hdn as E,
  iRr as pe,
  jgr as D,
  mlr as O,
  njr as k,
  pW as A,
  sRr as j,
  tjr as me,
  vdn as he,
  wLr as M,
  zOr as N,
  zRr as P,
  zvn as F,
} from "./app-initial-ad16eaadf81f.js";
import { n as I } from "./site-session-preview-frame-30d701c04518.js";
import { n as L } from "./page-ancestry-completion-11a1b143a7b0.js";
import { a as ge, c as R, g as z, h as _e, u as B } from "./filename-menu-actions-39e6b8a922f7.js";
import { n as V, t as ve } from "./pending-ab5af760fea1.js";
import { r as ye } from "./sharing-6c4d609745aa.js";
function be(e) {
  let r = (0, xe.c)(105),
    i = t(ce);
  ne();
  let { pageId: o, title: s, isActive: c, surface: l, canWritePage: u, projectId: d, panelTabId: f } = e,
    m = c === void 0 || c,
    _ = l === `side-panel` ? e.panelTarget : null,
    v = p(P),
    b = p(y),
    x = h(A, o),
    S = h(he, o),
    C;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { name: `browser.in-app` }), (r[0] = C))
    : (C = r[0]);
  let w = h(me, C),
    T = !w.isLoading && !w.isCapable,
    E;
  r[1] !== v || r[2] !== o
    ? ((E = [`space`, `site-page`, v, o]), (r[1] = v), (r[2] = o), (r[3] = E))
    : (E = r[3]);
  let D;
  r[4] === o
    ? (D = r[5])
    : ((D = (e) => {
        let { signal: t } = e;
        return pe.safeGet(`/codex/sites/space/{page_id}`, {
          parameters: { path: { page_id: o } },
          expectedErrorStatuses: [404],
          signal: t,
        });
      }),
      (r[4] = o),
      (r[5] = D));
  let O = m && b,
    k;
  r[6] !== E || r[7] !== D || r[8] !== O
    ? ((k = {
        queryKey: E,
        queryFn: D,
        enabled: O,
        refetchOnMount: `always`,
        refetchOnReconnect: !1,
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: 0,
      }),
      (r[6] = E),
      (r[7] = D),
      (r[8] = O),
      (r[9] = k))
    : (k = r[9]);
  let { data: j, error: M, isFetching: N, refetch: F } = a(k),
    I = b && M == null && !N && j?.page_id === o,
    L = I ? j.live_url : null,
    R;
  r[10] !== v || r[11] !== o || r[12] !== d || r[13] !== F || r[14] !== i
    ? ((R = {
        mutationFn: async () => {
          if (v == null || !i.get(y) || i.get(A, o) === `request_changes`) return;
          let e = de(i, v),
            t = new AbortController(),
            n = i.watch((e) => {
              let { get: n } = e;
              (!n(y) || n(A, o) === `request_changes`) && t.abort();
            }),
            r = AbortSignal.any([e.signal, t.signal]);
          (await pe
            .safePut(`/codex/sites/space/{page_id}`, {
              parameters: { path: { page_id: o } },
              requestBody: { project_id: d },
              expectedErrorStatuses: [403, 404, 409, 503],
              signal: r,
            })
            .finally(() => {
              (r.aborted || (i.query.invalidate(le, o), ie(i.queryClient, [d])), n(), e.stop());
            }),
            r.throwIfAborted(),
            await F());
        },
        retry: !1,
      }),
      (r[10] = v),
      (r[11] = o),
      (r[12] = d),
      (r[13] = F),
      (r[14] = i),
      (r[15] = R))
    : (R = r[15]);
  let { mutate: z, isPending: B, error: V } = re(R);
  n(`/sites/${encodeURIComponent(j?.project_id ?? ``)}/preview?page_id=${encodeURIComponent(o)}`);
  let [ye, be] = (0, H.useState)(null),
    W = `${v}:${o}:${L}`,
    G,
    K;
  (r[16] !== v || r[17] !== I || r[18] !== m || r[19] !== o || r[20] !== i || r[21] !== s
    ? ((G = () => {
        m && I && i.get(P) === v && se(i, o, s?.trim() || o);
      }),
      (K = [v, I, m, o, i, s]),
      (r[16] = v),
      (r[17] = I),
      (r[18] = m),
      (r[19] = o),
      (r[20] = i),
      (r[21] = s),
      (r[22] = G),
      (r[23] = K))
    : ((G = r[22]), (K = r[23])),
    (0, H.useEffect)(G, K));
  let q, J;
  (r[24] !== v ||
  r[25] !== w.isCapable ||
  r[26] !== m ||
  r[27] !== f ||
  r[28] !== _ ||
  r[29] !== i ||
  r[30] !== l ||
  r[31] !== L
    ? ((J = () => {
        if (
          l !== `inline` &&
          m &&
          L != null &&
          w.isCapable &&
          i.get(P) === v &&
          i.get(y) &&
          ae({
            conversationId: oe(i) ?? void 0,
            href: L,
            initiator: `sites_library`,
            openTarget: `in-app-browser`,
            presentationIntent: `full-width`,
          }) &&
          _ != null &&
          f != null
        ) {
          let e = fe(_);
          i.get(e.tabById$, f)?.isWorkspaceHome
            ? e.closeWorkspaceHomeTab(i, f)
            : e.closeTab(i, f, { recordCloseUndo: !1 });
        }
      }),
      (q = [v, w.isCapable, m, f, _, i, l, L]),
      (r[24] = v),
      (r[25] = w.isCapable),
      (r[26] = m),
      (r[27] = f),
      (r[28] = _),
      (r[29] = i),
      (r[30] = l),
      (r[31] = L),
      (r[32] = q),
      (r[33] = J))
    : ((q = r[32]), (J = r[33])),
    (0, H.useEffect)(J, q));
  let Y;
  r[34] !== e.onClose || r[35] !== e.panelTabId || r[36] !== l
    ? ((Y =
        e.onClose != null && l !== `inline`
          ? (0, U.jsx)(ge, {
              surface: l,
              tabId: e.panelTabId,
              separator: !1,
              navigation: null,
              actions: null,
              sharing: null,
              onClose: e.onClose,
            })
          : null),
      (r[34] = e.onClose),
      (r[35] = e.panelTabId),
      (r[36] = l),
      (r[37] = Y))
    : (Y = r[37]);
  let X = Y;
  if (!b || T || M != null || ye === W || (j != null && j.page_id !== o)) {
    let e;
    r[38] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, U.jsx)(g, {
          id: `codex.space.sitePage.unavailable`,
          defaultMessage: `This Site could not be opened`,
          description: `Shown when the attached Site or its Page access is unavailable`,
        })),
        (r[38] = e))
      : (e = r[38]);
    let t;
    r[39] === V
      ? (t = r[40])
      : ((t =
          V == null
            ? void 0
            : (0, U.jsx)(`p`, {
                className: `select-none`,
                role: `alert`,
                children: (0, U.jsx)(g, {
                  id: `codex.space.sitePage.attach.resumeFailed`,
                  defaultMessage: `Couldn’t finish adding Site. Check that you own the Site and can edit this Page, then try again.`,
                  description: `Shown after the same Site and Page attachment could not be completed; ownership and Page editing permission are required`,
                }),
              })),
        (r[39] = V),
        (r[40] = t));
    let n;
    r[41] !== B ||
    r[42] !== T ||
    r[43] !== u ||
    r[44] !== M ||
    r[45] !== x ||
    r[46] !== F ||
    r[47] !== z ||
    r[48] !== b
      ? ((n = b
          ? (0, U.jsxs)(U.Fragment, {
              children: [
                (0, U.jsx)(ee, {
                  color: `secondary`,
                  onClick: () => {
                    (be(null), F());
                  },
                  children: (0, U.jsx)(g, {
                    id: `codex.space.page.retry`,
                    defaultMessage: `Try again`,
                    description: `Button that retries loading shared Pages after a failure`,
                  }),
                }),
                M instanceof te && M.status === 404 && u && x !== `request_changes` && !T
                  ? (0, U.jsx)(ee, {
                      disabled: B,
                      onClick: () => z(),
                      children: (0, U.jsx)(g, {
                        id: `codex.space.sitePage.attach.resume`,
                        defaultMessage: `Finish adding Site`,
                        description: `Retries the same Site and Page attachment after an interrupted addition; the server requires the Site owner`,
                      }),
                    })
                  : null,
              ],
            })
          : void 0),
        (r[41] = B),
        (r[42] = T),
        (r[43] = u),
        (r[44] = M),
        (r[45] = x),
        (r[46] = F),
        (r[47] = z),
        (r[48] = b),
        (r[49] = n))
      : (n = r[49]);
    let i;
    r[50] !== t || r[51] !== n
      ? ((i = (0, U.jsx)(ue, { title: e, description: t, actions: n })),
        (r[50] = t),
        (r[51] = n),
        (r[52] = i))
      : (i = r[52]);
    let a;
    return (
      r[53] !== X || r[54] !== i
        ? ((a = (0, U.jsxs)(U.Fragment, { children: [X, i] })), (r[53] = X), (r[54] = i), (r[55] = a))
        : (a = r[55]),
      a
    );
  }
  if (j != null && L != null && w.isCapable && m) {
    if (l === `inline`) {
      let t = s ?? ``,
        n = S?.symbol,
        i = S?.document_type,
        a;
      r[56] !== o || r[57] !== e
        ? ((a = () => e.onOpenPage(o)), (r[56] = o), (r[57] = e), (r[58] = a))
        : (a = r[58]);
      let c;
      return (
        r[59] !== o || r[60] !== t || r[61] !== n || r[62] !== i || r[63] !== a
          ? ((c = (0, U.jsx)(_e, {
              pageId: o,
              title: t,
              symbol: n,
              documentType: i,
              people: null,
              overflow: null,
              onExpand: a,
            })),
            (r[59] = o),
            (r[60] = t),
            (r[61] = n),
            (r[62] = i),
            (r[63] = a),
            (r[64] = c))
          : (c = r[64]),
        c
      );
    }
    {
      let t;
      return (r[65] === e ? (t = r[66]) : ((t = (0, U.jsx)(ve, { ...e })), (r[65] = e), (r[66] = t)), t);
    }
  }
  if (j == null || N || L != null) {
    let t;
    return (r[97] === e ? (t = r[98]) : ((t = (0, U.jsx)(ve, { ...e })), (r[97] = e), (r[98] = t)), t);
  }
  let Z;
  r[99] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, U.jsx)(g, {
        id: `codex.space.sitePage.unpublished`,
        defaultMessage: `This Site hasn’t been published yet`,
        description: `Shown for an attached Site with no published version`,
      })),
      (r[99] = Z))
    : (Z = r[99]);
  let Q;
  r[100] === s ? (Q = r[101]) : ((Q = (0, U.jsx)(ue, { title: s, actions: Z })), (r[100] = s), (r[101] = Q));
  let $;
  return (
    r[102] !== X || r[103] !== Q
      ? (($ = (0, U.jsxs)(U.Fragment, { children: [X, Q] })), (r[102] = X), (r[103] = Q), (r[104] = $))
      : ($ = r[104]),
    $
  );
}
var xe, H, U;
function W() {
  return (W = e(() => {
    ((xe = c()),
      _(),
      m(),
      f(),
      d(),
      (H = r()),
      l(),
      o(),
      k(),
      b(),
      F(),
      I(),
      M(),
      D(),
      u(),
      w(),
      C(),
      S(),
      O(),
      N(),
      x(),
      j(),
      s(),
      V(),
      B(),
      R(),
      ye(),
      z(),
      T(),
      L(),
      v(),
      E(),
      (U = i()));
  }))();
}
W();
export { be as SitePage };
//# sourceMappingURL=site-page-82b9abc12f2b.js.map
