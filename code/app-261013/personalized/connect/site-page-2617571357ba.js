import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cxt as n,
  IDt as r,
  Iot as i,
  Ixt as a,
  Lot as o,
  Pxt as s,
  VDt as ee,
  Vxt as te,
  Xot as ne,
  Yot as c,
  _xt as l,
  cI as u,
  frt as d,
  hrt as re,
  jDt as f,
  t3 as p,
  vzt as m,
  xMt as h,
  yzt as g,
  zxt as _,
} from "./app-shared-bbfeca5e5737.js";
import {
  $H as v,
  ACn as ie,
  Bsn as ae,
  Cwr as y,
  Ear as b,
  FEr as x,
  GMr as S,
  JPn as C,
  Jar as w,
  Nfr as T,
  Oor as oe,
  PEr as se,
  QI as E,
  ZH as D,
  ZPn as ce,
  bTn as O,
  bgn as le,
  dxn as k,
  eL as ue,
  gwr as de,
  iPr as fe,
  jCn as A,
  kfr as pe,
  lIr as j,
  lxn as me,
  sPr as M,
  tNr as N,
  wsn as he,
  xsn as P,
  ygn as F,
} from "./app-initial-5851df3f6cb1.js";
import { n as I } from "./page-ancestry-completion-a7a03b946b26.js";
import { a as ge, c as L, g as R, h as _e, u as z } from "./filename-menu-actions-c1dd81b47dd6.js";
import { n as B, t as ve } from "./pending-4692967c2dbe.js";
import { r as V } from "./sharing-1780db7b1f52.js";
function ye(e) {
  let i = (0, be.c)(105),
    s = a(de);
  ee();
  let { pageId: c, title: l, isActive: u, surface: d, canWritePage: f, projectId: p, panelTabId: m } = e,
    h = u === void 0 || u,
    g = d === `side-panel` ? e.panelTarget : null,
    y = te(S),
    b = te(w),
    x = _(v, c),
    C = _(he, c),
    T;
  i[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { name: `browser.in-app` }), (i[0] = T))
    : (T = i[0]);
  let E = _(se, T),
    D = !E.isLoading && !E.isCapable,
    O;
  i[1] !== y || i[2] !== c
    ? ((O = [`space`, `site-page`, y, c]), (i[1] = y), (i[2] = c), (i[3] = O))
    : (O = i[3]);
  let k;
  i[4] === c
    ? (k = i[5])
    : ((k = (e) => {
        let { signal: t } = e;
        return fe.safeGet(`/wham/sites/space/{page_id}`, {
          parameters: { path: { page_id: c } },
          expectedErrorStatuses: [404],
          signal: t,
        });
      }),
      (i[4] = c),
      (i[5] = k));
  let A = h && b,
    j;
  i[6] !== O || i[7] !== k || i[8] !== A
    ? ((j = {
        queryKey: O,
        queryFn: k,
        enabled: A,
        refetchOnMount: `always`,
        refetchOnReconnect: !1,
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: 0,
      }),
      (i[6] = O),
      (i[7] = k),
      (i[8] = A),
      (i[9] = j))
    : (j = i[9]);
  let { data: M, error: N, isFetching: P, refetch: F } = ne(j),
    I = b && N == null && !P && M?.page_id === c,
    L = I ? M.live_url : null,
    R;
  i[10] !== y || i[11] !== c || i[12] !== p || i[13] !== F || i[14] !== s
    ? ((R = {
        mutationFn: async () => {
          if (y == null || !s.get(w) || s.get(v, c) === `request_changes`) return;
          let e = oe(s, y),
            t = new AbortController(),
            n = s.watch((e) => {
              let { get: n } = e;
              (!n(w) || n(v, c) === `request_changes`) && t.abort();
            }),
            r = AbortSignal.any([e.signal, t.signal]);
          (await fe
            .safePut(`/wham/sites/space/{page_id}`, {
              parameters: { path: { page_id: c } },
              requestBody: { project_id: p },
              expectedErrorStatuses: [403, 404, 409, 503],
              signal: r,
            })
            .finally(() => {
              (r.aborted || (s.query.invalidate(ae, c), le(s.queryClient, [p])), n(), e.stop());
            }),
            r.throwIfAborted(),
            await F());
        },
        retry: !1,
      }),
      (i[10] = y),
      (i[11] = c),
      (i[12] = p),
      (i[13] = F),
      (i[14] = s),
      (i[15] = R))
    : (R = i[15]);
  let { mutate: z, isPending: B, error: V } = o(R);
  n(`/sites/${encodeURIComponent(M?.project_id ?? ``)}/preview?page_id=${encodeURIComponent(c)}`);
  let [ye, W] = (0, H.useState)(null),
    xe = `${y}:${c}:${L}`,
    G,
    K;
  (i[16] !== y || i[17] !== I || i[18] !== h || i[19] !== c || i[20] !== s || i[21] !== l
    ? ((G = () => {
        h && I && s.get(S) === y && ue(s, c, l?.trim() || c);
      }),
      (K = [y, I, h, c, s, l]),
      (i[16] = y),
      (i[17] = I),
      (i[18] = h),
      (i[19] = c),
      (i[20] = s),
      (i[21] = l),
      (i[22] = G),
      (i[23] = K))
    : ((G = i[22]), (K = i[23])),
    (0, H.useEffect)(G, K));
  let q, J;
  (i[24] !== y ||
  i[25] !== E.isCapable ||
  i[26] !== h ||
  i[27] !== m ||
  i[28] !== g ||
  i[29] !== s ||
  i[30] !== d ||
  i[31] !== L
    ? ((J = () => {
        if (
          d !== `inline` &&
          h &&
          L != null &&
          E.isCapable &&
          s.get(S) === y &&
          s.get(w) &&
          ce({
            conversationId: pe(s) ?? void 0,
            href: L,
            initiator: `sites_library`,
            openTarget: `in-app-browser`,
            presentationIntent: `full-width`,
          }) &&
          g != null &&
          m != null
        ) {
          let e = me(g);
          s.get(e.tabById$, m)?.isWorkspaceHome
            ? e.closeWorkspaceHomeTab(s, m)
            : e.closeTab(s, m, { recordCloseUndo: !1 });
        }
      }),
      (q = [y, E.isCapable, h, m, g, s, d, L]),
      (i[24] = y),
      (i[25] = E.isCapable),
      (i[26] = h),
      (i[27] = m),
      (i[28] = g),
      (i[29] = s),
      (i[30] = d),
      (i[31] = L),
      (i[32] = q),
      (i[33] = J))
    : ((q = i[32]), (J = i[33])),
    (0, H.useEffect)(J, q));
  let Y;
  i[34] !== e.onClose || i[35] !== e.panelTabId || i[36] !== d
    ? ((Y =
        e.onClose != null && d !== `inline`
          ? (0, U.jsx)(ge, {
              surface: d,
              tabId: e.panelTabId,
              separator: !1,
              navigation: null,
              actions: null,
              sharing: null,
              onClose: e.onClose,
            })
          : null),
      (i[34] = e.onClose),
      (i[35] = e.panelTabId),
      (i[36] = d),
      (i[37] = Y))
    : (Y = i[37]);
  let X = Y;
  if (!b || D || N != null || ye === xe || (M != null && M.page_id !== c)) {
    let e;
    i[38] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, U.jsx)(r, {
          id: `codex.space.sitePage.unavailable`,
          defaultMessage: `This Site could not be opened`,
          description: `Shown when the attached Site or its Page access is unavailable`,
        })),
        (i[38] = e))
      : (e = i[38]);
    let n;
    i[39] === V
      ? (n = i[40])
      : ((n =
          V == null
            ? void 0
            : (0, U.jsx)(`p`, {
                className: `select-none`,
                role: `alert`,
                children: (0, U.jsx)(r, {
                  id: `codex.space.sitePage.attach.resumeFailed`,
                  defaultMessage: `Couldn’t finish adding Site. Check that you own the Site and can edit this Page, then try again.`,
                  description: `Shown after the same Site and Page attachment could not be completed; ownership and Page editing permission are required`,
                }),
              })),
        (i[39] = V),
        (i[40] = n));
    let a;
    i[41] !== B ||
    i[42] !== D ||
    i[43] !== f ||
    i[44] !== N ||
    i[45] !== x ||
    i[46] !== F ||
    i[47] !== z ||
    i[48] !== b
      ? ((a = b
          ? (0, U.jsxs)(U.Fragment, {
              children: [
                (0, U.jsx)(t, {
                  color: `secondary`,
                  onClick: () => {
                    (W(null), F());
                  },
                  children: (0, U.jsx)(r, {
                    id: `codex.space.page.retry`,
                    defaultMessage: `Try again`,
                    description: `Button that retries loading shared Pages after a failure`,
                  }),
                }),
                N instanceof re && N.status === 404 && f && x !== `request_changes` && !D
                  ? (0, U.jsx)(t, {
                      disabled: B,
                      onClick: () => z(),
                      children: (0, U.jsx)(r, {
                        id: `codex.space.sitePage.attach.resume`,
                        defaultMessage: `Finish adding Site`,
                        description: `Retries the same Site and Page attachment after an interrupted addition; the server requires the Site owner`,
                      }),
                    })
                  : null,
              ],
            })
          : void 0),
        (i[41] = B),
        (i[42] = D),
        (i[43] = f),
        (i[44] = N),
        (i[45] = x),
        (i[46] = F),
        (i[47] = z),
        (i[48] = b),
        (i[49] = a))
      : (a = i[49]);
    let o;
    i[50] !== n || i[51] !== a
      ? ((o = (0, U.jsx)(ie, { title: e, description: n, actions: a })),
        (i[50] = n),
        (i[51] = a),
        (i[52] = o))
      : (o = i[52]);
    let s;
    return (
      i[53] !== X || i[54] !== o
        ? ((s = (0, U.jsxs)(U.Fragment, { children: [X, o] })), (i[53] = X), (i[54] = o), (i[55] = s))
        : (s = i[55]),
      s
    );
  }
  if (M != null && L != null && E.isCapable && h) {
    if (d === `inline`) {
      let t = l ?? ``,
        n = C?.symbol,
        r = C?.document_type,
        a;
      i[56] !== c || i[57] !== e
        ? ((a = () => e.onOpenPage(c)), (i[56] = c), (i[57] = e), (i[58] = a))
        : (a = i[58]);
      let o;
      return (
        i[59] !== c || i[60] !== t || i[61] !== n || i[62] !== r || i[63] !== a
          ? ((o = (0, U.jsx)(_e, {
              pageId: c,
              title: t,
              symbol: n,
              documentType: r,
              people: null,
              overflow: null,
              onExpand: a,
            })),
            (i[59] = c),
            (i[60] = t),
            (i[61] = n),
            (i[62] = r),
            (i[63] = a),
            (i[64] = o))
          : (o = i[64]),
        o
      );
    }
    {
      let t;
      return (i[65] === e ? (t = i[66]) : ((t = (0, U.jsx)(ve, { ...e })), (i[65] = e), (i[66] = t)), t);
    }
  }
  if (M == null || P || L != null) {
    let t;
    return (i[97] === e ? (t = i[98]) : ((t = (0, U.jsx)(ve, { ...e })), (i[97] = e), (i[98] = t)), t);
  }
  let Z;
  i[99] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, U.jsx)(r, {
        id: `codex.space.sitePage.unpublished`,
        defaultMessage: `This Site hasn’t been published yet`,
        description: `Shown for an attached Site with no published version`,
      })),
      (i[99] = Z))
    : (Z = i[99]);
  let Q;
  i[100] === l ? (Q = i[101]) : ((Q = (0, U.jsx)(ie, { title: l, actions: Z })), (i[100] = l), (i[101] = Q));
  let $;
  return (
    i[102] !== X || i[103] !== Q
      ? (($ = (0, U.jsxs)(U.Fragment, { children: [X, Q] })), (i[102] = X), (i[103] = Q), (i[104] = $))
      : ($ = i[104]),
    $
  );
}
var be, H, U;
function W() {
  return (W = e(() => {
    ((be = m()),
      i(),
      c(),
      s(),
      u(),
      (H = g()),
      f(),
      l(),
      x(),
      j(),
      F(),
      N(),
      T(),
      p(),
      C(),
      A(),
      O(),
      b(),
      y(),
      k(),
      M(),
      d(),
      B(),
      z(),
      L(),
      V(),
      R(),
      D(),
      I(),
      E(),
      P(),
      (U = h()));
  }))();
}
W();
export { ye as SitePage };
//# sourceMappingURL=site-page-2617571357ba.js.map
