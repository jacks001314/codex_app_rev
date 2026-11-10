import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Ixt as r,
  LK as i,
  Mz as a,
  Nz as o,
  Pxt as s,
  TJ as c,
  USt as l,
  VDt as u,
  Vxt as d,
  Xot as f,
  Yot as p,
  co as m,
  cz as h,
  hot as ee,
  jDt as te,
  lot as g,
  so as ne,
  sz as re,
  t3 as _,
  vzt as v,
  xMt as y,
  yzt as b,
  zSt as x,
  zxt as ie,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as S,
  Fmt as ae,
  GMr as oe,
  KNn as se,
  Mmt as ce,
  Mx as le,
  Nx as C,
  QGn as w,
  XGn as ue,
  XMr as de,
  XNn as fe,
  Xl as pe,
  Zl as T,
  _Kn as me,
  aDr as he,
  eDr as E,
  gwr as ge,
  nc as D,
  rc as O,
  tNr as k,
  yKn as _e,
} from "./app-initial-5851df3f6cb1.js";
import {
  $a as A,
  Ka as ve,
  Qa as j,
  Xa as ye,
  Ya as be,
  Za as xe,
  qa as Se,
} from "./app-primary-fe8a450b3b04.js";
import { n as M, t as Ce } from "./inline-1d98feb8d7b7.js";
import { n as N, t as we } from "./code-execution-account-policy-dfe8d762999e.js";
import { n as Te, r as Ee, t as P } from "./document-4b4a17f977a4.js";
import { n as F, t as De } from "./summary-c36930a2d8f3.js";
import { n as Oe } from "./gating-aa49ce8f8b88.js";
import { n as ke, r as Ae, t as I } from "./open-preview-9504043595a2.js";
import { n as je, r as Me, t as L } from "./runtime-3e1a91466d71.js";
function Ne(e) {
  let t = (0, R.c)(3),
    { title: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, z.jsx)(`span`, {
        className: `flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary-soft`,
        children: (0, z.jsx)(i, { className: `text-secondary` }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let a;
  return (
    t[1] === n
      ? (a = t[2])
      : ((a = (0, z.jsx)(`div`, {
          className: `not-prose relative clear-both my-4 w-full max-w-full`,
          children: (0, z.jsxs)(`div`, {
            className: `flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border border-default bg-surface p-4 text-default shadow-xs select-none`,
            children: [
              r,
              (0, z.jsx)(`span`, {
                className: `min-w-0 truncate text-base leading-6 font-medium`,
                children: n,
              }),
            ],
          }),
        })),
        (t[1] = n),
        (t[2] = a)),
    a
  );
}
var R, z;
function Pe() {
  return (Pe = e(() => {
    ((R = v()), c(), (z = y()));
  }))();
}
function B(e) {
  let t = (0, Ie.c)(7),
    { reference: n, isStreaming: r, patchResult: i, turnContext: a } = e,
    o = O(),
    s = a ?? o,
    c = (0, H.useContext)(pe),
    l;
  t[0] === n ? (l = t[1]) : ((l = A.safeParse(n)), (t[0] = n), (t[1] = l));
  let u = l;
  if (!u.success || s == null || s.shouldBlockExternalEgress || c === `restricted`) return null;
  let d = r ?? s.isStreaming,
    f;
  return (
    t[2] !== u.data.data || t[3] !== i || t[4] !== d || t[5] !== s
      ? ((f = (0, U.jsx)(V, { data: u.data.data, isStreaming: d, patchResult: i, turnContext: s })),
        (t[2] = u.data.data),
        (t[3] = i),
        (t[4] = d),
        (t[5] = s),
        (t[6] = f))
      : (f = t[6]),
    f
  );
}
function V(e) {
  let o = (0, Ie.c)(85),
    { data: s, isStreaming: c, patchResult: p, turnContext: m } = e,
    h = r(ge),
    te = fe(),
    g = u(),
    _ = d(oe),
    v = d(de),
    y = d(we),
    b = he(),
    x;
  o[0] === b ? (x = o[1]) : ((x = Oe(b)), (o[0] = b), (o[1] = x));
  let S = x,
    ae = S ? je : Te,
    se = S ? Me : Ee,
    C = (0, H.useId)(),
    [w, pe] = (0, H.useState)(!1),
    T;
  o[2] === s ? (T = o[3]) : ((T = ye(s)), (o[2] = s), (o[3] = T));
  let me = T,
    E = p?.libraryFileId ?? me.libraryFileId,
    D;
  o[4] !== _ || o[5] !== C || o[6] !== E || o[7] !== v
    ? ((D = _ != null && v != null && E != null ? xe(_, v, E, C) : void 0),
      (o[4] = _),
      (o[5] = C),
      (o[6] = E),
      (o[7] = v),
      (o[8] = D))
    : (D = o[8]);
  let O = D,
    k = ie(ke, E),
    A;
  o[9] !== E || o[10] !== m.conversationId
    ? ((A = { conversationId: m.conversationId, libraryFileId: E }),
      (o[9] = E),
      (o[10] = m.conversationId),
      (o[11] = A))
    : (A = o[11]);
  let ve = ie(be, A),
    j =
      (p == null ? s.presentation_display?.mode : p.appBlockResourceUpdate?.presentation.mode) ===
        `collapsed` ||
      (ve?.latestPatch != null && ve.latestPatch.messageId !== p?.messageId),
    M = ie(Se, { conversationId: m.conversationId, libraryFileId: E }) ?? p,
    N = M == null ? (me.contentFileId ?? E) : (M.currentContentFileId ?? `file-inline-${M.libraryFileId}`),
    P = M == null ? s.content : M.appBlockResourceUpdate?.content,
    F = M?.currentContentFileId ?? M?.messageId ?? N,
    I;
  o[12] !== _ || o[13] !== E || o[14] !== F || o[15] !== v
    ? ((I = [`sites-preview-inline-html`, _, v, E, F]),
      (o[12] = _),
      (o[13] = E),
      (o[14] = F),
      (o[15] = v),
      (o[16] = I))
    : (I = o[16]);
  let L;
  o[17] !== _ ||
  o[18] !== N ||
  o[19] !== P ||
  o[20] !== M ||
  o[21] !== j ||
  o[22] !== m.browserConversationId ||
  o[23] !== m.conversationId ||
  o[24] !== v
    ? ((L =
        !j && !P && N != null && _ != null && v != null
          ? async (e) => {
              let { signal: t } = e;
              if (M == null) return le({ file_id: N }, t);
              let n = await _e(`file-inline-${M.libraryFileId}`, {
                checkContextScopesForConversationId: m.browserConversationId ?? m.conversationId,
                downloadIntent: !1,
                showInline: !0,
                signal: t,
              });
              return (await ue(n, t)).text();
            }
          : l),
      (o[17] = _),
      (o[18] = N),
      (o[19] = P),
      (o[20] = M),
      (o[21] = j),
      (o[22] = m.browserConversationId),
      (o[23] = m.conversationId),
      (o[24] = v),
      (o[25] = L))
    : (L = o[25]);
  let R;
  o[26] !== I || o[27] !== L
    ? ((R = { queryKey: I, queryFn: L, staleTime: 3e5 }), (o[26] = I), (o[27] = L), (o[28] = R))
    : (R = o[28]);
  let { data: z, isError: Pe, isFetching: B, refetch: V } = f(R),
    W;
  o[29] !== s || o[30] !== g || o[31] !== p
    ? ((W =
        (p?.fileName == null ? void 0 : ce(p.fileName, `site_preview`, g)) ??
        s.display_name ??
        s.title ??
        g.formatMessage({
          id: `sitesPreview.title`,
          defaultMessage: `Site preview`,
          description: `Fallback title for an inline interactive website preview`,
        })),
      (o[29] = s),
      (o[30] = g),
      (o[31] = p),
      (o[32] = W))
    : (W = o[32]);
  let G = W;
  if (j) {
    let e;
    return (
      o[33] !== p || o[34] !== G
        ? ((e = (0, U.jsx)(De, { result: p, title: G })), (o[33] = p), (o[34] = G), (o[35] = e))
        : (e = o[35]),
      e
    );
  }
  let K = P || z;
  if (!K && Pe) {
    let e;
    o[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, U.jsx)(n, {
          id: `sitesPreview.loadFailed`,
          defaultMessage: `The site preview couldn’t load`,
          description: `Error when the saved HTML for an inline website preview fails to download`,
        })),
        (o[36] = e))
      : (e = o[36]);
    let r;
    o[37] === V ? (r = o[38]) : ((r = () => void V()), (o[37] = V), (o[38] = r));
    let i;
    o[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, U.jsx)(n, {
          id: `sitesPreview.retry`,
          defaultMessage: `Try again`,
          description: `Retries downloading the saved website preview`,
        })),
        (o[39] = i))
      : (i = o[39]);
    let a;
    return (
      o[40] !== B || o[41] !== r
        ? ((a = (0, U.jsxs)(`div`, {
            role: `status`,
            className: `text-size-chat-sm text-codex-description`,
            children: [
              e,
              (0, U.jsx)(t, { color: `ghost`, size: `compact`, disabled: B, onClick: r, children: i }),
            ],
          })),
          (o[40] = B),
          (o[41] = r),
          (o[42] = a))
        : (a = o[42]),
      a
    );
  }
  if (!K || (c && E == null)) {
    let e;
    return (
      o[43] !== N || o[44] !== c
        ? ((e = (0, U.jsx)(`div`, {
            role: `status`,
            className: `text-size-chat-sm text-codex-description`,
            children:
              c || N != null
                ? (0, U.jsx)(n, {
                    id: `sitesPreview.building`,
                    defaultMessage: `Building your site…`,
                    description: `Loading status while ChatGPT saves a website preview before it can be opened`,
                  })
                : (0, U.jsx)(n, {
                    id: `sitesPreview.unavailable`,
                    defaultMessage: `The site preview isn’t available`,
                    description: `Status shown in a completed ChatGPT response when no saved website preview or HTML content is available`,
                  }),
          })),
          (o[43] = N),
          (o[44] = c),
          (o[45] = e))
        : (e = o[45]),
      e
    );
  }
  let q;
  o[46] === g
    ? (q = o[47])
    : ((q = g.formatMessage({
        id: `sitesPreview.expand`,
        defaultMessage: `Expand site preview`,
        description: `Opens the inline website in the shared Library viewer with sharing and publishing controls`,
      })),
      (o[46] = g),
      (o[47] = q));
  let Le = q,
    J;
  o[48] === G ? (J = o[49]) : ((J = (0, U.jsx)(Ne, { title: G })), (o[48] = G), (o[49] = J));
  let Re = y.status === `allowed` && !y.networkAccessEnabled ? se : ae,
    Y;
  o[50] !== S || o[51] !== C || o[52] !== O
    ? ((Y = S
        ? { widgetId: O ?? C, state: { mode: `interact`, revision: 0, targets: [] }, update: Fe }
        : void 0),
      (o[50] = S),
      (o[51] = C),
      (o[52] = O),
      (o[53] = Y))
    : (Y = o[53]);
  let ze;
  o[54] === Symbol.for(`react.memo_cache_sentinel`) ? ((ze = (0, U.jsx)(i, {})), (o[54] = ze)) : (ze = o[54]);
  let X;
  o[55] === G
    ? (X = o[56])
    : ((X = (0, U.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-3`,
        children: [ze, (0, U.jsx)(`span`, { className: `truncate text-base font-semibold`, children: G })],
      })),
      (o[55] = G),
      (o[56] = X));
  let Z;
  o[57] !== K ||
  o[58] !== N ||
  o[59] !== Le ||
  o[60] !== g ||
  o[61] !== te ||
  o[62] !== E ||
  o[63] !== w ||
  o[64] !== p?.fileName ||
  o[65] !== h ||
  o[66] !== O ||
  o[67] !== G ||
  o[68] !== m.browserConversationId ||
  o[69] !== m.conversationId ||
  o[70] !== m.messageId
    ? ((Z =
        E != null &&
        (0, U.jsx)(re, {
          tooltipContent: Le,
          children: (0, U.jsx)(t, {
            color: `ghostActive`,
            size: `imageToolbar`,
            "aria-label": Le,
            disabled: w,
            loading: w,
            onClick: () => {
              let e = N ?? E;
              (h.queryClient.setQueryData([`library-file-preview-text`, E, e], K),
                pe(!0),
                Ae(h, E, {
                  sharedFrameKey: O,
                  file: {
                    id: E,
                    browserLibraryFileId: null,
                    file_id: e,
                    file_name: p?.fileName ?? (/\.html?$/i.test(G) ? G : `${G}.html`),
                    library_file_category: `text`,
                    library_artifact_type: `site_preview`,
                    mime_type: `text/html`,
                    origination_thread_id: m.browserConversationId ?? m.conversationId,
                    origination_message_id: m.messageId,
                  },
                })
                  .then((e) => {
                    e ||
                      h
                        .get(ee)
                        .danger(
                          te
                            ? g.formatMessage({
                                id: `sitesPreview.publish.sourceChanged.space`,
                                defaultMessage: `This saved preview is no longer available. Reopen it from Space and try again`,
                                description: `Shown when a Sites preview has been deleted, changed type, or is inaccessible. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                              })
                            : g.formatMessage({
                                id: `sitesPreview.publish.sourceChanged`,
                                defaultMessage: `This saved preview is no longer available. Reopen it from Library and try again`,
                                description: `Shown when a Sites preview has been deleted, changed type, or is inaccessible`,
                              }),
                          { errorAnalytics: { toastId: `sitesPreview.publish.sourceChanged` } },
                        );
                  })
                  .catch(() => {
                    h.get(ee).danger(
                      g.formatMessage({
                        id: `sitesPreview.openFailed`,
                        defaultMessage: `Couldn’t open the site preview. Try again`,
                        description: `Toast when expanding an inline website preview fails unexpectedly`,
                      }),
                      { errorAnalytics: { toastId: `sitesPreview.openFailed` } },
                    );
                  })
                  .finally(() => pe(!1)));
            },
            children: (0, U.jsx)(a, { asset: ne }),
          }),
        })),
      (o[57] = K),
      (o[58] = N),
      (o[59] = Le),
      (o[60] = g),
      (o[61] = te),
      (o[62] = E),
      (o[63] = w),
      (o[64] = p?.fileName),
      (o[65] = h),
      (o[66] = O),
      (o[67] = G),
      (o[68] = m.browserConversationId),
      (o[69] = m.conversationId),
      (o[70] = m.messageId),
      (o[71] = Z))
    : (Z = o[71]);
  let Q;
  o[72] !== X || o[73] !== Z
    ? ((Q = (0, U.jsxs)(`div`, {
        className: `flex min-h-13 shrink-0 items-center justify-between gap-3 py-2 ps-4 pe-2 select-none`,
        children: [X, Z],
      })),
      (o[72] = X),
      (o[73] = Z),
      (o[74] = Q))
    : (Q = o[74]);
  let $;
  return (
    o[75] !== K ||
    o[76] !== k ||
    o[77] !== O ||
    o[78] !== J ||
    o[79] !== Re ||
    o[80] !== Y ||
    o[81] !== Q ||
    o[82] !== G ||
    o[83] !== m
      ? (($ = (0, U.jsx)(Ce, {
          collapsed: k,
          collapsedPreview: J,
          content: K,
          isStreaming: !1,
          sandboxDocument: Re,
          sharedFrameKey: O,
          sharedWidgetState: Y,
          title: G,
          turnContext: m,
          header: Q,
        })),
        (o[75] = K),
        (o[76] = k),
        (o[77] = O),
        (o[78] = J),
        (o[79] = Re),
        (o[80] = Y),
        (o[81] = Q),
        (o[82] = G),
        (o[83] = m),
        (o[84] = $))
      : ($ = o[84]),
    $
  );
}
function Fe() {
  return !1;
}
var Ie, H, U;
function W() {
  return (W = e(() => {
    ((Ie = v()),
      m(),
      x(),
      p(),
      s(),
      (H = b()),
      te(),
      k(),
      M(),
      D(),
      N(),
      ve(),
      me(),
      _(),
      o(),
      c(),
      g(),
      h(),
      se(),
      T(),
      S(),
      E(),
      w(),
      F(),
      P(),
      I(),
      ae(),
      C(),
      Pe(),
      j(),
      L(),
      (U = y()));
  }))();
}
export { W as n, B as t };
//# sourceMappingURL=content-reference-b728d37a71e6.js.map
