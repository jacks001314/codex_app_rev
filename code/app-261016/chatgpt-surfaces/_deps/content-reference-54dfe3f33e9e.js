import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  DB as n,
  FBt as r,
  LNt as i,
  Mst as a,
  OB as o,
  PBt as s,
  Pq as c,
  TY as l,
  Vrt as u,
  XOt as d,
  Y3 as f,
  Z3 as p,
  ZSt as m,
  aD as h,
  cwt as g,
  iCt as _,
  iD as v,
  iwt as y,
  jst as b,
  nB as ee,
  nCt as x,
  okt as te,
  qrt as S,
  rB as C,
  tCt as w,
  tkt as T,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $l as E,
  BRr as ne,
  BYn as D,
  Ejr as re,
  HYn as ie,
  Kht as O,
  MOr as k,
  Ql as A,
  SLn as j,
  Uht as M,
  cc as N,
  iRr as ae,
  oS as oe,
  sS as P,
  sc as F,
  tyr as I,
  vLn as L,
  wLr as R,
  xYn as z,
  xjr as B,
  yYn as V,
  zOr as H,
  zRr as U,
} from "./app-initial-ad16eaadf81f.js";
import {
  ao as W,
  co as G,
  lo as K,
  no as se,
  oo as ce,
  ro as le,
  so as ue,
} from "./app-primary-3e00728c2a4c.js";
import { n as q, t as de } from "./inline-34068e44e480.js";
import { n as fe, t as J } from "./code-execution-account-policy-8682cbed64b4.js";
import { n as Y, t as pe } from "./summary-6c36343d5090.js";
import { n as me } from "./gating-aa49ce8f8b88.js";
import { n as he, r as ge, t as _e } from "./open-preview-d930be69e89c.js";
import { a as ve, i as ye, n as be, o as xe, r as Se, s as Ce, t as we } from "./dropdown-6c3f6bdb91ed.js";
function Te(e) {
  let t = (0, Ee.c)(3),
    { title: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(`span`, {
        className: `flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary-soft`,
        children: (0, X.jsx)(c, { className: `text-secondary` }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, X.jsx)(`div`, {
          className: `not-prose relative clear-both my-4 w-full max-w-full`,
          children: (0, X.jsxs)(`div`, {
            className: `flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border border-default bg-surface p-4 text-default shadow-xs select-none`,
            children: [
              r,
              (0, X.jsx)(`span`, {
                className: `min-w-0 truncate text-base leading-6 font-medium`,
                children: n,
              }),
            ],
          }),
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
var Ee, X;
function De() {
  return (De = e(() => {
    ((Ee = s()), l(), (X = i()));
  }))();
}
function Oe(e) {
  let t = (0, Z.c)(7),
    { reference: n, isStreaming: r, patchResult: i, turnContext: a } = e,
    o = N(),
    s = a ?? o,
    c = (0, Q.useContext)(A),
    l;
  t[0] === n ? (l = t[1]) : ((l = K.safeParse(n)), (t[0] = n), (t[1] = l));
  let u = l;
  if (!u.success || s == null || s.shouldBlockExternalEgress || c === `restricted`) return null;
  let d = r ?? s.isStreaming,
    f;
  return (
    t[2] !== u.data.data || t[3] !== i || t[4] !== d || t[5] !== s
      ? ((f = (0, $.jsx)(ke, { data: u.data.data, isStreaming: d, patchResult: i, turnContext: s })),
        (t[2] = u.data.data),
        (t[3] = i),
        (t[4] = d),
        (t[5] = s),
        (t[6] = f))
      : (f = t[6]),
    f
  );
}
function ke(e) {
  let t = (0, Z.c)(66),
    { data: n, isStreaming: r, patchResult: i, turnContext: o } = e,
    s = te(),
    c = _(U),
    l = _(ne),
    u = (0, Q.useId)(),
    d;
  t[0] === n ? (d = t[1]) : ((d = ce(n)), (t[0] = n), (t[1] = d));
  let p = d,
    m = i?.libraryFileId ?? p.libraryFileId,
    h;
  t[2] !== c || t[3] !== u || t[4] !== m || t[5] !== l
    ? ((h = c != null && l != null && m != null ? ue(c, l, m, u) : void 0),
      (t[2] = c),
      (t[3] = u),
      (t[4] = m),
      (t[5] = l),
      (t[6] = h))
    : (h = t[6]);
  let v = h,
    y = x(he, m),
    b;
  t[7] !== m || t[8] !== o.conversationId
    ? ((b = { conversationId: o.conversationId, libraryFileId: m }),
      (t[7] = m),
      (t[8] = o.conversationId),
      (t[9] = b))
    : (b = t[9]);
  let ee = x(W, b),
    S =
      (i == null ? n.presentation_display?.mode : i.appBlockResourceUpdate?.presentation.mode) ===
        `collapsed` ||
      (ee?.latestPatch != null && ee.latestPatch.messageId !== i?.messageId),
    C = x(le, { conversationId: o.conversationId, libraryFileId: m }) ?? i,
    w = C == null ? (p.contentFileId ?? m) : (C.currentContentFileId ?? `file-inline-${C.libraryFileId}`),
    E = C == null ? p.versionNumber : (C.currentVersionNumber ?? void 0),
    D = C == null ? n.content : C.appBlockResourceUpdate?.content,
    re = C?.currentContentFileId ?? C?.messageId ?? w,
    O;
  t[10] !== c || t[11] !== m || t[12] !== re || t[13] !== l
    ? ((O = [`sites-preview-inline-html`, c, l, m, re]),
      (t[10] = c),
      (t[11] = m),
      (t[12] = re),
      (t[13] = l),
      (t[14] = O))
    : (O = t[14]);
  let k;
  t[15] !== c ||
  t[16] !== D ||
  t[17] !== C ||
  t[18] !== m ||
  t[19] !== w ||
  t[20] !== E ||
  t[21] !== S ||
  t[22] !== o.browserConversationId ||
  t[23] !== o.conversationId ||
  t[24] !== l
    ? ((k =
        !S && w != null && c != null && l != null
          ? async (e) => {
              let { signal: t } = e,
                n = w,
                r = E;
              if (m != null) {
                let e = (
                  await ae.safeGet(`/files/library/files/{library_file_id}/versions`, {
                    parameters: { path: { library_file_id: m }, query: { limit: 1 } },
                    additionalHeaders: { "ChatGPT-Account-ID": c },
                    expectedErrorStatuses: [403, 404],
                    signal: t,
                  })
                ).items.find(Ae);
                if (e?.library_artifact_type !== `site_preview`)
                  throw Error(`The current site preview is unavailable.`);
                (r == null || e.version_number >= r) && ((n = e.file_id), (r = e.version_number));
              }
              let i;
              if (n === w && D) i = D;
              else if (C != null && n === `file-inline-${C.libraryFileId}`) {
                let e = await ie(n, {
                  checkContextScopesForConversationId: o.browserConversationId ?? o.conversationId,
                  downloadIntent: !1,
                  showInline: !0,
                  signal: t,
                });
                i = await (await V(e, t)).text();
              } else i = await oe({ file_id: n, browserLibraryFileId: null }, t);
              return { content: i, contentFileId: n, versionNumber: r };
            }
          : g),
      (t[15] = c),
      (t[16] = D),
      (t[17] = C),
      (t[18] = m),
      (t[19] = w),
      (t[20] = E),
      (t[21] = S),
      (t[22] = o.browserConversationId),
      (t[23] = o.conversationId),
      (t[24] = l),
      (t[25] = k))
    : (k = t[25]);
  let A;
  t[26] !== O || t[27] !== k
    ? ((A = {
        queryKey: O,
        queryFn: k,
        staleTime: 3e5,
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (t[26] = O),
      (t[27] = k),
      (t[28] = A))
    : (A = t[28]);
  let { data: j, isError: N, isFetching: P, refetch: F } = a(A),
    I;
  t[29] !== n || t[30] !== s || t[31] !== i
    ? ((I =
        (i?.fileName == null ? void 0 : M(i.fileName, `site_preview`, s)) ??
        n.display_name ??
        n.title ??
        s.formatMessage({
          id: `sitesPreview.title`,
          defaultMessage: `Site preview`,
          description: `Fallback title for an inline interactive website preview`,
        })),
      (t[29] = n),
      (t[30] = s),
      (t[31] = i),
      (t[32] = I))
    : (I = t[32]);
  let L = I;
  if (S) {
    let e;
    return (
      t[33] !== i || t[34] !== L
        ? ((e = (0, $.jsx)(pe, { result: i, title: L })), (t[33] = i), (t[34] = L), (t[35] = e))
        : (e = t[35]),
      e
    );
  }
  let R = j?.content ?? D,
    z = j?.contentFileId ?? w,
    B;
  t[36] !== N || t[37] !== P || t[38] !== F
    ? ((B = N
        ? (0, $.jsxs)(`div`, {
            role: `status`,
            className: `text-size-chat-sm text-codex-description`,
            children: [
              (0, $.jsx)(T, {
                id: `sitesPreview.loadFailed`,
                defaultMessage: `The site preview couldn’t load`,
                description: `Error when the saved HTML for an inline website preview fails to download`,
              }),
              (0, $.jsx)(f, {
                color: `ghost`,
                size: `compact`,
                disabled: P,
                onClick: () => void F(),
                children: (0, $.jsx)(T, {
                  id: `sitesPreview.retry`,
                  defaultMessage: `Try again`,
                  description: `Retries downloading the saved website preview`,
                }),
              }),
            ],
          })
        : null),
      (t[36] = N),
      (t[37] = P),
      (t[38] = F),
      (t[39] = B))
    : (B = t[39]);
  let H = B;
  if (!R && H != null) return H;
  if (!R || (r && m == null)) {
    if (r || z != null) {
      let e;
      t[40] === L ? (e = t[41]) : ((e = (0, $.jsx)(Ne, { title: L })), (t[40] = L), (t[41] = e));
      let n;
      return (
        t[42] !== e || t[43] !== L || t[44] !== o
          ? ((n = (0, $.jsx)(de, {
              content: ``,
              header: e,
              isStreaming: !1,
              loading: !0,
              title: L,
              turnContext: o,
            })),
            (t[42] = e),
            (t[43] = L),
            (t[44] = o),
            (t[45] = n))
          : (n = t[45]),
        n
      );
    }
    let e;
    return (
      t[46] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            role: `status`,
            className: `text-size-chat-sm text-codex-description`,
            children: (0, $.jsx)(T, {
              id: `sitesPreview.unavailable`,
              defaultMessage: `The site preview isn’t available`,
              description: `Status shown in a completed ChatGPT response when no saved website preview or HTML content is available`,
            }),
          })),
          (t[46] = e))
        : (e = t[46]),
      e
    );
  }
  if (c == null || l == null) {
    let e;
    return (
      t[47] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)($.Fragment, {})), (t[47] = e))
        : (e = t[47]),
      e
    );
  }
  let G = m ?? null,
    K = z ?? u,
    se = j?.versionNumber ?? E,
    q;
  t[48] !== c || t[49] !== R || t[50] !== G || t[51] !== K || t[52] !== se || t[53] !== l
    ? ((q = { accountId: c, userId: l, libraryFileId: G, contentFileId: K, versionNumber: se, content: R }),
      (t[48] = c),
      (t[49] = R),
      (t[50] = G),
      (t[51] = K),
      (t[52] = se),
      (t[53] = l),
      (t[54] = q))
    : (q = t[54]);
  let fe = i?.fileName,
    J;
  t[55] !== y || t[56] !== P || t[57] !== v || t[58] !== q || t[59] !== fe || t[60] !== L || t[61] !== o
    ? ((J = (0, $.jsx)(je, {
        source: q,
        expanded: y,
        fileName: fe,
        resolving: P,
        sharedFrameKey: v,
        title: L,
        turnContext: o,
      })),
      (t[55] = y),
      (t[56] = P),
      (t[57] = v),
      (t[58] = q),
      (t[59] = fe),
      (t[60] = L),
      (t[61] = o),
      (t[62] = J))
    : (J = t[62]);
  let Y;
  return (
    t[63] !== H || t[64] !== J
      ? ((Y = (0, $.jsxs)($.Fragment, { children: [H, J] })), (t[63] = H), (t[64] = J), (t[65] = Y))
      : (Y = t[65]),
    Y
  );
}
function Ae(e) {
  return e.is_current;
}
function je(e) {
  let r = (0, Z.c)(51),
    { source: i, expanded: a, fileName: o, resolving: s, sharedFrameKey: c, title: l, turnContext: u } = e,
    d = t(k),
    p = j(),
    m = te(),
    h = _(J),
    g = re(),
    y;
  r[0] === g ? (y = r[1]) : ((y = me(g)), (r[0] = g), (r[1] = y));
  let b = y,
    x = (0, Q.useId)(),
    [C, T] = (0, Q.useState)(i),
    E = w(ye, C),
    ne = (0, Q.useRef)(E),
    D = _(E.savedVersion$),
    ie = _(E.documentState$),
    [O, A] = (0, Q.useState)(!1),
    M,
    N;
  (r[2] === E
    ? ((M = r[3]), (N = r[4]))
    : ((M = () => {
        ne.current !== E && (ne.current.cancelPendingSave(), (ne.current = E));
      }),
      (N = [E]),
      (r[2] = E),
      (r[3] = M),
      (r[4] = N)),
    (0, Q.useEffect)(M, N));
  let ae = C.accountId !== i.accountId || C.userId !== i.userId || C.libraryFileId !== i.libraryFileId,
    oe = D != null && i.versionNumber != null ? i.versionNumber > D : C.contentFileId !== i.contentFileId;
  (ae || oe) && T(i);
  let { libraryFileId: P, contentFileId: F, versionNumber: I, content: L } = C,
    R;
  r[5] === m
    ? (R = r[6])
    : ((R = m.formatMessage({
        id: `sitesPreview.expand`,
        defaultMessage: `Expand site preview`,
        description: `Opens the inline website in the shared Library viewer with sharing and publishing controls`,
      })),
      (r[5] = m),
      (r[6] = R));
  let z = R,
    B;
  r[7] === l ? (B = r[8]) : ((B = (0, $.jsx)(Te, { title: l })), (r[7] = l), (r[8] = B));
  let V = h.status === `allowed` && !h.networkAccessEnabled ? Ce : xe,
    H;
  r[9] !== b || r[10] !== x || r[11] !== c
    ? ((H = b
        ? { widgetId: c ?? x, state: { mode: `interact`, revision: 0, targets: [] }, update: Me }
        : void 0),
      (r[9] = b),
      (r[10] = x),
      (r[11] = c),
      (r[12] = H))
    : (H = r[12]);
  let U;
  r[13] !== b || r[14] !== a || r[15] !== O || r[16] !== h.status || r[17] !== s || r[18] !== C
    ? ((U = !a && b && h.status === `allowed` ? (0, $.jsx)(we, { source: C, disabled: O || s }) : null),
      (r[13] = b),
      (r[14] = a),
      (r[15] = O),
      (r[16] = h.status),
      (r[17] = s),
      (r[18] = C),
      (r[19] = U))
    : (U = r[19]);
  let W;
  r[20] !== L ||
  r[21] !== F ||
  r[22] !== z ||
  r[23] !== o ||
  r[24] !== m ||
  r[25] !== p ||
  r[26] !== P ||
  r[27] !== O ||
  r[28] !== s ||
  r[29] !== d ||
  r[30] !== c ||
  r[31] !== l ||
  r[32] !== u ||
  r[33] !== I
    ? ((W =
        P != null &&
        (0, $.jsx)(ee, {
          tooltipContent: z,
          children: (0, $.jsx)(f, {
            color: `ghostActive`,
            size: `imageToolbar`,
            "aria-label": z,
            disabled: O || s,
            loading: O,
            onClick: () => {
              let e = F ?? P;
              (d.queryClient.setQueryData([`library-file-preview-text`, P, e], L),
                A(!0),
                ge(d, P, {
                  sharedFrameKey: c,
                  file: {
                    id: P,
                    browserLibraryFileId: null,
                    file_id: e,
                    current_version_number: I,
                    file_name: o ?? (/\.html?$/i.test(l) ? l : `${l}.html`),
                    library_file_category: `text`,
                    library_artifact_type: `site_preview`,
                    mime_type: `text/html`,
                    origination_thread_id: u.browserConversationId ?? u.conversationId,
                    origination_message_id: u.messageId,
                  },
                })
                  .then((e) => {
                    e ||
                      d
                        .get(S)
                        .danger(
                          p
                            ? m.formatMessage({
                                id: `sitesPreview.publish.sourceChanged.space`,
                                defaultMessage: `This saved preview is no longer available. Reopen it from Space and try again`,
                                description: `Shown when a Sites preview has been deleted, changed type, or is inaccessible. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                              })
                            : m.formatMessage({
                                id: `sitesPreview.publish.sourceChanged`,
                                defaultMessage: `This saved preview is no longer available. Reopen it from Library and try again`,
                                description: `Shown when a Sites preview has been deleted, changed type, or is inaccessible`,
                              }),
                          { errorAnalytics: { toastId: `sitesPreview.publish.sourceChanged` } },
                        );
                  })
                  .catch(() => {
                    d.get(S).danger(
                      m.formatMessage({
                        id: `sitesPreview.openFailed`,
                        defaultMessage: `Couldn’t open the site preview. Try again`,
                        description: `Toast when expanding an inline website preview fails unexpectedly`,
                      }),
                      { errorAnalytics: { toastId: `sitesPreview.openFailed` } },
                    );
                  })
                  .finally(() => A(!1)));
            },
            children: (0, $.jsx)(n, { asset: v }),
          }),
        })),
      (r[20] = L),
      (r[21] = F),
      (r[22] = z),
      (r[23] = o),
      (r[24] = m),
      (r[25] = p),
      (r[26] = P),
      (r[27] = O),
      (r[28] = s),
      (r[29] = d),
      (r[30] = c),
      (r[31] = l),
      (r[32] = u),
      (r[33] = I),
      (r[34] = W))
    : (W = r[34]);
  let G;
  r[35] !== U || r[36] !== W || r[37] !== l
    ? ((G = (0, $.jsxs)(Ne, { title: l, children: [U, W] })),
      (r[35] = U),
      (r[36] = W),
      (r[37] = l),
      (r[38] = G))
    : (G = r[38]);
  let K;
  return (
    r[39] !== F ||
    r[40] !== ie ||
    r[41] !== a ||
    r[42] !== E.content ||
    r[43] !== c ||
    r[44] !== G ||
    r[45] !== B ||
    r[46] !== V ||
    r[47] !== H ||
    r[48] !== l ||
    r[49] !== u
      ? ((K = (0, $.jsx)(de, {
          collapsed: a,
          collapsedPreview: B,
          content: E.content,
          isStreaming: !1,
          sandboxDocument: V,
          sandboxDocumentState: ie,
          sharedFrameKey: c,
          sharedFrameSourceRevision: F,
          sharedWidgetState: H,
          title: l,
          turnContext: u,
          header: G,
        })),
        (r[39] = F),
        (r[40] = ie),
        (r[41] = a),
        (r[42] = E.content),
        (r[43] = c),
        (r[44] = G),
        (r[45] = B),
        (r[46] = V),
        (r[47] = H),
        (r[48] = l),
        (r[49] = u),
        (r[50] = K))
      : (K = r[50]),
    K
  );
}
function Me() {
  return !1;
}
function Ne(e) {
  let t = (0, Z.c)(8),
    { title: n, children: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = (0, $.jsx)(c, {})), (t[0] = i)) : (i = t[0]);
  let a;
  t[1] === n
    ? (a = t[2])
    : ((a = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-3`,
        children: [i, (0, $.jsx)(`span`, { className: `truncate text-base font-semibold`, children: n })],
      })),
      (t[1] = n),
      (t[2] = a));
  let o;
  t[3] === r
    ? (o = t[4])
    : ((o =
        r == null ? null : (0, $.jsx)(`div`, { className: `flex shrink-0 items-center gap-1`, children: r })),
      (t[3] = r),
      (t[4] = o));
  let s;
  return (
    t[5] !== a || t[6] !== o
      ? ((s = (0, $.jsxs)(`div`, {
          className: `flex min-h-13 shrink-0 items-center justify-between gap-3 py-2 ps-4 pe-2 select-none`,
          children: [a, o],
        })),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
var Z, Q, $;
function Pe() {
  return (Pe = e(() => {
    ((Z = s()),
      h(),
      y(),
      b(),
      m(),
      (Q = r()),
      d(),
      R(),
      q(),
      I(),
      F(),
      fe(),
      se(),
      D(),
      p(),
      o(),
      l(),
      u(),
      C(),
      L(),
      E(),
      H(),
      B(),
      z(),
      Y(),
      _e(),
      O(),
      P(),
      De(),
      ve(),
      be(),
      Se(),
      G(),
      ($ = i()));
  }))();
}
export { Pe as n, Oe as t };
//# sourceMappingURL=content-reference-54dfe3f33e9e.js.map
