import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  B4 as r,
  CB as i,
  CS as a,
  Cot as o,
  Ext as s,
  Fat as c,
  HNt as l,
  IDt as u,
  Ixt as d,
  Mz as f,
  Nz as p,
  Pat as m,
  Pxt as h,
  Rxt as g,
  SY as _,
  TJ as v,
  USt as y,
  VDt as b,
  Vxt as x,
  Xot as S,
  Yot as C,
  _xt as w,
  cSt as T,
  cz as ee,
  fSt as E,
  gSt as D,
  hot as O,
  hrt as k,
  i3 as A,
  jDt as j,
  lot as M,
  mCt as N,
  nE as P,
  nSt as F,
  r3 as I,
  sz as L,
  t3 as R,
  tE as z,
  uCt as B,
  vrt as V,
  vzt as H,
  wot as U,
  xMt as W,
  xY as G,
  yMt as te,
  yzt as K,
  z4 as q,
  zSt as J,
  zxt as Y,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Fn as ne,
  $ln as re,
  Ab as ie,
  Bmt as ae,
  Cwr as X,
  Db as oe,
  Eb as se,
  Fb as ce,
  GMr as le,
  Gy as ue,
  Hln as de,
  Ib as fe,
  J3n as pe,
  JZn as Z,
  Jy as me,
  K$t as he,
  K3n as ge,
  Mb as _e,
  Ob as ve,
  Og as ye,
  Pb as be,
  QDr as xe,
  VZn as Se,
  Vb as Ce,
  Wmt as we,
  XDr as Te,
  XMr as Ee,
  Y$t as De,
  Ymr as Oe,
  _7n as ke,
  aIr as Ae,
  dwn as je,
  eIn as Me,
  eOr as Ne,
  ehr as Pe,
  gp as Fe,
  gwr as Ie,
  hwn as Le,
  kg as Re,
  lS as ze,
  ltt as Be,
  m8 as Ve,
  oIr as He,
  ott as Ue,
  p8 as We,
  pZn as Ge,
  qy as Ke,
  sS as qe,
  sVn as Je,
  stt as Ye,
  tNr as Xe,
  v7n as Ze,
  yVn as Qe,
  yjn as $e,
  yp as et,
  zb as tt,
} from "./app-initial-5851df3f6cb1.js";
import {
  Ba as nt,
  Fa as rt,
  Ga as it,
  Ia as at,
  Ja as ot,
  Ka as st,
  La as ct,
  Na as lt,
  Pa as ut,
  Ra as dt,
  Va as ft,
  Wa as pt,
  fa as mt,
  ma as ht,
  pa as gt,
  za as _t,
} from "./app-primary-fe8a450b3b04.js";
import { n as vt, t as yt } from "./version-history-mutation-9ff287d45642.js";
import { n as bt, t as xt } from "./library-file-metadata-18e455d7ac7c.js";
import { n as St, t as Ct } from "./menu-items-b78a5ea99a11.js";
import { i as wt, r as Tt } from "./writing-block-markdown-editor-367a32b77e05.js";
import { n as Et, t as Dt } from "./editable-writing-block-67c0bb761270.js";
import { n as Ot, t as kt } from "./writing-block-app-capabilities-5b5293feb60d.js";
import { i as At, n as jt, t as Mt } from "./writing-block-surface-635635c06cb8.js";
import { n as Nt, t as Pt } from "./summary-c36930a2d8f3.js";
import { n as Ft, r as It, t as Lt } from "./library-multiplayer-access-d2184d962fe8.js";
import { n as Rt, t as zt } from "./document-card-dfdd2b348ec9.js";
import { a as Bt, i as Vt, r as Ht, t as Ut } from "./library-artifact-preview-chrome-65b42e599b90.js";
import { n as Wt, t as Gt } from "./pending-edits-dialog-dfe25ce77d99.js";
import { i as Kt, n as qt } from "./entry-ef8bf7c3d37d.js";
import { a as Jt, i as Yt, n as Xt, o as Zt, r as Qt, t as $t } from "./preview-b10b7af0f642.js";
function en(e) {
  let t = (0, tn.c)(94),
    { children: n, document: r, frameProps: i, hideHeader: a, onFlush: o, versionHistory: s } = e,
    c = d(Ie),
    l = b(),
    u = x(le),
    p = x(Ee),
    h = x(we),
    [g, v] = (0, nn.useState)(!1),
    { libraryFileId: C } = r,
    w;
  t[0] !== r.editorKey || t[1] !== C
    ? ((w = C == null ? _e(r.editorKey) : be(C)), (t[0] = r.editorKey), (t[1] = C), (t[2] = w))
    : (w = t[2]);
  let T = w,
    ee = Y(ve, T),
    E = s ?? ee,
    D;
  t[3] !== u || t[4] !== C || t[5] !== p
    ? ((D = [`library-api`, u, p, `file`, C]), (t[3] = u), (t[4] = C), (t[5] = p), (t[6] = D))
    : (D = t[6]);
  let k;
  t[7] !== u || t[8] !== C
    ? ((k =
        u != null && C != null
          ? (e) => {
              let { signal: t } = e;
              return xt(C, u, t);
            }
          : y),
      (t[7] = u),
      (t[8] = C),
      (t[9] = k))
    : (k = t[9]);
  let A;
  t[10] !== D || t[11] !== k
    ? ((A = { queryKey: D, queryFn: k, staleTime: m.ONE_MINUTE, retry: !1 }),
      (t[10] = D),
      (t[11] = k),
      (t[12] = A))
    : (A = t[12]);
  let { data: j } = S(A),
    M,
    N,
    P,
    F,
    I,
    L,
    R,
    B,
    V,
    H,
    U,
    W,
    G,
    te,
    K,
    q,
    J;
  if (
    t[13] !== u ||
    t[14] !== j ||
    t[15] !== r.editorKey ||
    t[16] !== r.serverConversationId ||
    t[17] !== r.title ||
    t[18] !== i.actions ||
    t[19] !== i.headerActions ||
    t[20] !== i.style ||
    t[21] !== i.viewerCopyMenuItem ||
    t[22] !== i.viewerDownloadControl ||
    t[23] !== i.viewerEditingControls ||
    t[24] !== i.viewerMenuItems ||
    t[25] !== i.viewerTitleControl ||
    t[26] !== i.viewerVersionHistoryMenuItem ||
    t[27] !== a ||
    t[28] !== l ||
    t[29] !== C ||
    t[30] !== o ||
    t[31] !== T ||
    t[32] !== c ||
    t[33] !== h ||
    t[34] !== p
  ) {
    let e;
    j != null && (e = `kind` in j ? { node: j } : re(j));
    let n;
    (t[52] !== r.title || t[53] !== l
      ? ((n =
          r.title ??
          l.formatMessage({
            id: `codex.writingBlock.documentTabTitle`,
            defaultMessage: `Document`,
            description: `Title of a document writing block tab when the document has no title.`,
          })),
        (t[52] = r.title),
        (t[53] = l),
        (t[54] = n))
      : (n = t[54]),
      (J = n));
    let s;
    t[55] !== r.serverConversationId || t[56] !== C || t[57] !== J
      ? ((s =
          C == null
            ? void 0
            : {
                conversationId: r.serverConversationId,
                identity: { type: `library`, libraryFileId: C },
                mimeType: `text/markdown`,
                name: J,
              }),
        (t[55] = r.serverConversationId),
        (t[56] = C),
        (t[57] = J),
        (t[58] = s))
      : (s = t[58]);
    let d = s;
    ((H = `h-full min-h-0`),
      (U = i.style),
      (M = Ut),
      (W = u),
      (G = T),
      (te =
        i.viewerTitleControl ??
        (e == null
          ? (0, rn.jsx)(z, {
              icon: (0, rn.jsx)(f, { asset: _ }),
              title: J,
              children: (0, rn.jsxs)(Ct, {
                fileInfoSource: d,
                libraryFileId: C,
                versionHistoryAction: i.viewerVersionHistoryMenuItem,
                children: [i.viewerMenuItems, i.viewerCopyMenuItem],
              }),
            })
          : (0, rn.jsxs)(Vt, {
              entry: e,
              versionHistoryAction: i.viewerVersionHistoryMenuItem,
              children: [i.viewerMenuItems, i.viewerCopyMenuItem],
            }))),
      (K = !0),
      t[59] === i.viewerEditingControls
        ? (q = t[60])
        : ((q = { ...Ke, editingControls: i.viewerEditingControls }),
          (t[59] = i.viewerEditingControls),
          (t[60] = q)),
      t[61] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((N = ue(`text-document`)), (t[61] = N))
        : (N = t[61]),
      (P = i.viewerDownloadControl),
      (F = d),
      (I = i.headerActions),
      (L = i.headerActions == null ? i.actions : void 0),
      (R = a),
      t[62] !== r.editorKey || t[63] !== c
        ? ((B = Le.singleTab ? () => lt(c, r.editorKey) : void 0),
          (t[62] = r.editorKey),
          (t[63] = c),
          (t[64] = B))
        : (B = t[64]),
      (V =
        i.headerActions == null && h && u != null && e != null && qe(e)
          ? () => {
              (v(!0),
                Promise.resolve(o?.())
                  .then(() => {
                    if (c.get(le) === u && c.get(Ee) === p) return Ce(c, { accountId: u, entry: e });
                  })
                  .catch(() => {
                    c.get(O).danger(
                      l.formatMessage({
                        id: `codex.writingBlock.share.failed`,
                        defaultMessage: `Couldn’t save this document for sharing. Try again`,
                        description: `Error when pending writing-block edits cannot be saved before opening sharing; local edits are preserved`,
                      }),
                      { errorAnalytics: { toastId: `codex.writingBlock.share.failed` } },
                    );
                  })
                  .finally(() => v(!1)));
            }
          : void 0),
      (t[13] = u),
      (t[14] = j),
      (t[15] = r.editorKey),
      (t[16] = r.serverConversationId),
      (t[17] = r.title),
      (t[18] = i.actions),
      (t[19] = i.headerActions),
      (t[20] = i.style),
      (t[21] = i.viewerCopyMenuItem),
      (t[22] = i.viewerDownloadControl),
      (t[23] = i.viewerEditingControls),
      (t[24] = i.viewerMenuItems),
      (t[25] = i.viewerTitleControl),
      (t[26] = i.viewerVersionHistoryMenuItem),
      (t[27] = a),
      (t[28] = l),
      (t[29] = C),
      (t[30] = o),
      (t[31] = T),
      (t[32] = c),
      (t[33] = h),
      (t[34] = p),
      (t[35] = M),
      (t[36] = N),
      (t[37] = P),
      (t[38] = F),
      (t[39] = I),
      (t[40] = L),
      (t[41] = R),
      (t[42] = B),
      (t[43] = V),
      (t[44] = H),
      (t[45] = U),
      (t[46] = W),
      (t[47] = G),
      (t[48] = te),
      (t[49] = K),
      (t[50] = q),
      (t[51] = J));
  } else
    ((M = t[35]),
      (N = t[36]),
      (P = t[37]),
      (F = t[38]),
      (I = t[39]),
      (L = t[40]),
      (R = t[41]),
      (B = t[42]),
      (V = t[43]),
      (H = t[44]),
      (U = t[45]),
      (W = t[46]),
      (G = t[47]),
      (te = t[48]),
      (K = t[49]),
      (q = t[50]),
      (J = t[51]));
  let ne;
  t[65] === r.editorKey
    ? (ne = t[66])
    : ((ne = Le.singleTab ? at(r.editorKey) : void 0), (t[65] = r.editorKey), (t[66] = ne));
  let ie = E ?? void 0,
    ae;
  t[67] !== M ||
  t[68] !== n ||
  t[69] !== i.status ||
  t[70] !== i.viewerPrimaryAction ||
  t[71] !== g ||
  t[72] !== N ||
  t[73] !== P ||
  t[74] !== F ||
  t[75] !== I ||
  t[76] !== L ||
  t[77] !== R ||
  t[78] !== B ||
  t[79] !== V ||
  t[80] !== ne ||
  t[81] !== ie ||
  t[82] !== W ||
  t[83] !== G ||
  t[84] !== te ||
  t[85] !== K ||
  t[86] !== q ||
  t[87] !== J ||
  t[88] !== p
    ? ((ae = (0, rn.jsx)(M, {
        accountId: W,
        accessoryOwnerId: G,
        actions: te,
        contentFade: K,
        controls: q,
        placement: N,
        downloadControl: P,
        fileInfoSource: F,
        headerActions: I,
        historyControlGroup: L,
        hideHeader: R,
        onClose: B,
        onShare: V,
        primaryAction: i.viewerPrimaryAction,
        shareDisabled: g,
        status: i.status,
        tabId: ne,
        title: J,
        userId: p,
        versionHistory: ie,
        children: n,
      })),
      (t[67] = M),
      (t[68] = n),
      (t[69] = i.status),
      (t[70] = i.viewerPrimaryAction),
      (t[71] = g),
      (t[72] = N),
      (t[73] = P),
      (t[74] = F),
      (t[75] = I),
      (t[76] = L),
      (t[77] = R),
      (t[78] = B),
      (t[79] = V),
      (t[80] = ne),
      (t[81] = ie),
      (t[82] = W),
      (t[83] = G),
      (t[84] = te),
      (t[85] = K),
      (t[86] = q),
      (t[87] = J),
      (t[88] = p),
      (t[89] = ae))
    : (ae = t[89]);
  let X;
  return (
    t[90] !== H || t[91] !== U || t[92] !== ae
      ? ((X = (0, rn.jsx)(`div`, { className: H, style: U, children: ae })),
        (t[90] = H),
        (t[91] = U),
        (t[92] = ae),
        (t[93] = X))
      : (X = t[93]),
    X
  );
}
var tn, nn, rn;
function an() {
  return (an = e(() => {
    ((tn = H()),
      G(),
      J(),
      C(),
      h(),
      (nn = K()),
      j(),
      je(),
      me(),
      Xe(),
      St(),
      ce(),
      p(),
      M(),
      ze(),
      tt(),
      de(),
      bt(),
      Bt(),
      Ht(),
      ae(),
      X(),
      c(),
      a(),
      ct(),
      (rn = W()));
  }))();
}
function on(e) {
  let t = e.proseMirrorStore.getSnapshot().editorView,
    n =
      t != null && !t.isDestroyed
        ? t.state.doc
        : We({ shouldStripDirectives: !0 }).parse(e.displayedContent.slice(0, 65536));
  return n
    .textBetween(
      0,
      Math.min(n.content.size, 600),
      `

`,
      `
`,
    )
    .trim();
}
function sn() {
  return (sn = e(() => {
    Ve();
  }))();
}
function cn(e) {
  let t = (0, fn.c)(110),
    {
      auxiliaryContent: r,
      collapsedContent: a,
      closeTabOnUnmount: o,
      document: s,
      editorState: c,
      frameProps: l,
      hasPendingEdits: u,
      isStreaming: f,
      onClose: p,
      onFlush: m,
      previewOwnsHeader: h,
      previewContent: g,
      versionHistory: _,
    } = e,
    v = o === void 0 || o,
    y = d(Ie),
    x = b(),
    S = Y(_t, s.editorKey),
    C = Y(dt, s.editorKey),
    w = (0, pn.useContext)(ge)?.isContentFullWidth === !0,
    [T, ee] = (0, pn.useState)(null),
    [E, D] = (0, pn.useState)(!1),
    O = (0, pn.useRef)(!1),
    k = (0, pn.useRef)(!1),
    A = (0, pn.useRef)(null),
    j = (0, pn.useRef)(null),
    M = (0, pn.useRef)(null),
    N;
  t[0] !== s.title || t[1] !== l.title
    ? ((N = s.title?.replace(/\.md$/i, ``) || l.title), (t[0] = s.title), (t[1] = l.title), (t[2] = N))
    : (N = t[2]);
  let F = N,
    I;
  t[3] === x
    ? (I = t[4])
    : ((I = x.formatMessage({
        id: `codex.writingBlock.openEditor`,
        defaultMessage: `Open editor`,
        description: `Tooltip and accessible label for expanding a document writing block into the Codex side pane.`,
      })),
      (t[3] = x),
      (t[4] = I));
  let R = I,
    z;
  t[5] !== T || t[6] !== C
    ? ((z = () => {
        let e = (C ? j.current : A.current) ?? M.current;
        if (e != null) {
          if (T == null) {
            let t = e.ownerDocument.createElement(`div`);
            (e.appendChild(t), ee(t));
          } else T.parentElement !== e && e.appendChild(T);
        }
      }),
      (t[5] = T),
      (t[6] = C),
      (t[7] = z))
    : (z = t[7]);
  let V = z,
    H;
  t[8] === V
    ? (H = t[9])
    : ((H = (e) => {
        ((A.current = e), V());
      }),
      (t[8] = V),
      (t[9] = H));
  let U = H,
    W;
  t[10] === V
    ? (W = t[11])
    : ((W = (e) => {
        ((j.current = e), V());
      }),
      (t[10] = V),
      (t[11] = W));
  let G = W,
    te;
  t[12] === V
    ? (te = t[13])
    : ((te = (e) => {
        ((M.current = e), V());
      }),
      (t[12] = V),
      (t[13] = te));
  let K = te,
    q;
  t[14] !== s || t[15] !== m || t[16] !== y
    ? ((q = () => {
        (m?.().catch(dn),
          nt(y, s),
          k.current ||
            ((k.current = !0),
            xe(y, Je, {
              conversationId: s.serverConversationId,
              libraryFileId: s.libraryFileId,
              messageId: s.messageId,
              variant: Object.values(ke).find((e) => e === s.variant) ?? ke.UNKNOWN,
              writingBlockId: s.writingBlockId,
            })));
      }),
      (t[14] = s),
      (t[15] = m),
      (t[16] = y),
      (t[17] = q))
    : (q = t[17]);
  let J = q,
    ne;
  t[18] !== s.editorKey || t[19] !== y
    ? ((ne = () => {
        ((O.current = !0), lt(y, s.editorKey));
      }),
      (t[18] = s.editorKey),
      (t[19] = y),
      (t[20] = ne))
    : (ne = t[20]);
  let re = ne,
    ie = l.inlineControlsAppearance === `viewer`,
    ae = ie ? P : n,
    X = ie ? void 0 : `ghostActive`,
    oe = ie ? void 0 : `imageToolbar`,
    se;
  t[21] === Symbol.for(`react.memo_cache_sentinel`) ? ((se = (0, Q.jsx)(i, {})), (t[21] = se)) : (se = t[21]);
  let ce;
  t[22] !== ae || t[23] !== f || t[24] !== J || t[25] !== R || t[26] !== X || t[27] !== oe
    ? ((ce = (0, Q.jsx)(ae, {
        "aria-label": R,
        color: X,
        disabled: f,
        size: oe,
        uniform: !0,
        onClick: J,
        children: se,
      })),
      (t[22] = ae),
      (t[23] = f),
      (t[24] = J),
      (t[25] = R),
      (t[26] = X),
      (t[27] = oe),
      (t[28] = ce))
    : (ce = t[28]);
  let le;
  t[29] !== R || t[30] !== ce
    ? ((le = (0, Q.jsx)(L, { sideOffset: 0, tooltipContent: R, children: ce })),
      (t[29] = R),
      (t[30] = ce),
      (t[31] = le))
    : (le = t[31]);
  let ue = le,
    de;
  t[32] === Symbol.for(`react.memo_cache_sentinel`) ? ((de = []), (t[32] = de)) : (de = t[32]);
  let fe = g != null,
    pe;
  t[33] === c?.proseMirrorStore
    ? (pe = t[34])
    : ((pe = (e) => {
        let t = c?.proseMirrorStore.getSnapshot().editorView;
        t != null &&
          !t.isDestroyed &&
          t.editable &&
          e.target instanceof Element &&
          e.target !== t.dom &&
          e.target.contains(t.dom) &&
          window.getSelection()?.isCollapsed !== !1 &&
          (t.dispatch(t.state.tr.setSelection(B.atEnd(t.state.doc))), t.focus());
      }),
      (t[33] = c?.proseMirrorStore),
      (t[34] = pe));
  let Z;
  t[35] === w
    ? (Z = t[36])
    : ((Z = w ? { paddingTop: Ye, paddingBottom: Ue } : void 0), (t[35] = w), (t[36] = Z));
  let me;
  t[37] === G ? (me = t[38]) : ((me = (0, Q.jsx)(`div`, { ref: G })), (t[37] = G), (t[38] = me));
  let he;
  t[39] !== l.inlineContent || t[40] !== me
    ? ((he = (0, Q.jsx)(`div`, {
        className: `mx-auto w-full max-w-(--thread-content-max-width) px-toolbar pb-8 browser:p-0`,
        children: (0, Q.jsxs)(`div`, { className: `pt-16`, children: [l.inlineContent, me] }),
      })),
      (t[39] = l.inlineContent),
      (t[40] = me),
      (t[41] = he))
    : (he = t[41]);
  let _e;
  t[42] !== s.editorKey || t[43] !== fe || t[44] !== pe || t[45] !== Z || t[46] !== he
    ? ((_e = (0, Q.jsx)(Mt, {
        className: `min-h-0 flex-1 overflow-y-auto`,
        "data-writing-block-expanded": s.editorKey,
        hidden: fe,
        onClick: pe,
        style: Z,
        children: he,
      })),
      (t[42] = s.editorKey),
      (t[43] = fe),
      (t[44] = pe),
      (t[45] = Z),
      (t[46] = he),
      (t[47] = _e))
    : (_e = t[47]);
  let ve;
  t[48] !== r || t[49] !== g || t[50] !== _e
    ? ((ve = (0, Q.jsxs)(`div`, {
        className: `relative isolate flex h-full min-h-0 flex-col`,
        "data-writing-block-table-controls-container": !0,
        children: [g, r, _e],
      })),
      (t[48] = r),
      (t[49] = g),
      (t[50] = _e),
      (t[51] = ve))
    : (ve = t[51]);
  let ye;
  t[52] !== s || t[53] !== l || t[54] !== m || t[55] !== h || t[56] !== ve || t[57] !== _
    ? ((ye = {
        headerRows: de,
        content: (0, Q.jsx)(en, {
          document: s,
          frameProps: l,
          hideHeader: h,
          onFlush: m,
          versionHistory: _,
          children: ve,
        }),
      }),
      (t[52] = s),
      (t[53] = l),
      (t[54] = m),
      (t[55] = h),
      (t[56] = ve),
      (t[57] = _),
      (t[58] = ye))
    : (ye = t[58]);
  let be = ye,
    Se;
  t[59] !== l.actions || t[60] !== l.headerActions
    ? ((Se = l.actions ?? l.headerActions?.map(un)),
      (t[59] = l.actions),
      (t[60] = l.headerActions),
      (t[61] = Se))
    : (Se = t[61]);
  let Ce;
  t[62] !== ue || t[63] !== Se
    ? ((Ce = (0, Q.jsxs)(Q.Fragment, { children: [Se, ue] })), (t[62] = ue), (t[63] = Se), (t[64] = Ce))
    : (Ce = t[64]);
  let we;
  t[65] === U ? (we = t[66]) : ((we = (0, Q.jsx)(`div`, { ref: U })), (t[65] = U), (t[66] = we));
  let Te;
  t[67] !== r || t[68] !== we
    ? ((Te = (0, Q.jsxs)(Q.Fragment, { children: [r, we] })), (t[67] = r), (t[68] = we), (t[69] = Te))
    : (Te = t[69]);
  let Ee;
  t[70] !== l || t[71] !== Ce || t[72] !== Te
    ? ((Ee = (0, Q.jsx)(jt, { ...l, actions: Ce, children: Te })),
      (t[70] = l),
      (t[71] = Ce),
      (t[72] = Te),
      (t[73] = Ee))
    : (Ee = t[73]);
  let De = Ee,
    Oe;
  (t[74] !== s.editorKey ||
  t[75] !== c ||
  t[76] !== u ||
  t[77] !== De ||
  t[78] !== C ||
  t[79] !== S ||
  t[80] !== V ||
  t[81] !== p ||
  t[82] !== m ||
  t[83] !== be ||
  t[84] !== y
    ? ((Oe = () => {
        (V(),
          y.set(
            ut,
            s.editorKey,
            S
              ? {
                  hasPendingEdits: u,
                  readPreviewText: () => (c == null ? null : on(c)),
                  onBeforeClose: () => (u && !O.current ? (D(!0), !1) : !0),
                  onClose: () => {
                    ((O.current = !1), p?.(), m?.().catch(ln));
                  },
                  slots: be,
                  inlineContent: C ? null : De,
                }
              : null,
          ));
      }),
      (t[74] = s.editorKey),
      (t[75] = c),
      (t[76] = u),
      (t[77] = De),
      (t[78] = C),
      (t[79] = S),
      (t[80] = V),
      (t[81] = p),
      (t[82] = m),
      (t[83] = be),
      (t[84] = y),
      (t[85] = Oe))
    : (Oe = t[85]),
    (0, pn.useLayoutEffect)(Oe));
  let Ae, je;
  (t[86] !== v || t[87] !== s.editorKey || t[88] !== y
    ? ((Ae = () => () => {
        (y.set(ut, s.editorKey, null), v && lt(y, s.editorKey));
      }),
      (je = [y, s.editorKey, v]),
      (t[86] = v),
      (t[87] = s.editorKey),
      (t[88] = y),
      (t[89] = Ae),
      (t[90] = je))
    : ((Ae = t[89]), (je = t[90])),
    (0, pn.useLayoutEffect)(Ae, je));
  let Me;
  t[91] !== a || t[92] !== De || t[93] !== C || t[94] !== K || t[95] !== F
    ? ((Me =
        a != null || C
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [a ?? (0, Q.jsx)(zt, { title: F }), (0, Q.jsx)(`div`, { ref: K, hidden: !0 })],
            })
          : De),
      (t[91] = a),
      (t[92] = De),
      (t[93] = C),
      (t[94] = K),
      (t[95] = F),
      (t[96] = Me))
    : (Me = t[96]);
  let Ne;
  t[97] !== T || t[98] !== l.children
    ? ((Ne = T == null ? null : (0, mn.createPortal)(l.children, T)),
      (t[97] = T),
      (t[98] = l.children),
      (t[99] = Ne))
    : (Ne = t[99]);
  let Pe;
  t[100] === Symbol.for(`react.memo_cache_sentinel`) ? ((Pe = () => D(!1)), (t[100] = Pe)) : (Pe = t[100]);
  let Fe;
  t[101] === re
    ? (Fe = t[102])
    : ((Fe = () => {
        (re(), D(!1));
      }),
      (t[101] = re),
      (t[102] = Fe));
  let Le;
  t[103] !== E || t[104] !== Fe
    ? ((Le = (0, Q.jsx)(Gt, { onCancel: Pe, onConfirm: Fe, open: E })),
      (t[103] = E),
      (t[104] = Fe),
      (t[105] = Le))
    : (Le = t[105]);
  let Re;
  return (
    t[106] !== Me || t[107] !== Ne || t[108] !== Le
      ? ((Re = (0, Q.jsxs)(Q.Fragment, { children: [Me, Ne, Le] })),
        (t[106] = Me),
        (t[107] = Ne),
        (t[108] = Le),
        (t[109] = Re))
      : (Re = t[109]),
    Re
  );
}
function ln() {}
function un(e) {
  let { id: t, content: n } = e;
  return (0, Q.jsx)(pn.Fragment, { children: n }, t);
}
function dn() {}
var fn, pn, mn, Q;
function hn() {
  return (hn = e(() => {
    ((fn = H()),
      Qe(),
      Ze(),
      h(),
      N(),
      (pn = K()),
      (mn = te()),
      j(),
      pe(),
      R(),
      v(),
      ee(),
      Te(),
      X(),
      Be(),
      a(),
      At(),
      an(),
      Rt(),
      Wt(),
      sn(),
      ct(),
      (Q = W()));
  }))();
}
function gn(e) {
  let t = (0, vn.c)(29),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]))
    : (({
        auxiliaryContent: n,
        collapsedContent: i,
        closeTabOnUnmount: r,
        earlierVersion: o,
        document: a,
        onPreviewClose: s,
        previewOwnsHeader: l,
        previewContent: c,
        versionHistory: d,
        ...u
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d));
  let f = (0, yn.useContext)(ge),
    p = x(he);
  if (f == null || a == null || u.variant === `email` || u.variant === `slides`) {
    let e;
    return (
      t[11] !== p || t[12] !== n || t[13] !== i || t[14] !== o || t[15] !== u
        ? ((e =
            o ??
            i ??
            (0, bn.jsxs)(bn.Fragment, {
              children: [(0, bn.jsx)(kt, { ...u, showMagicEditAction: u.showMagicEditAction && !p }), n],
            })),
          (t[11] = p),
          (t[12] = n),
          (t[13] = i),
          (t[14] = o),
          (t[15] = u),
          (t[16] = e))
        : (e = t[16]),
      e
    );
  }
  let m = u.showMagicEditAction && !p,
    h;
  return (
    t[17] !== n ||
    t[18] !== r ||
    t[19] !== i ||
    t[20] !== a ||
    t[21] !== o ||
    t[22] !== s ||
    t[23] !== c ||
    t[24] !== l ||
    t[25] !== u ||
    t[26] !== m ||
    t[27] !== d
      ? ((h = (0, bn.jsx)(_n, {
          ...u,
          auxiliaryContent: n,
          collapsedContent: i,
          closeTabOnUnmount: r,
          document: a,
          earlierVersion: o,
          onPreviewClose: s,
          previewOwnsHeader: l,
          previewContent: c,
          versionHistory: d,
          showMagicEditAction: m,
        })),
        (t[17] = n),
        (t[18] = r),
        (t[19] = i),
        (t[20] = a),
        (t[21] = o),
        (t[22] = s),
        (t[23] = c),
        (t[24] = l),
        (t[25] = u),
        (t[26] = m),
        (t[27] = d),
        (t[28] = h))
      : (h = t[28]),
    h
  );
}
function _n(e) {
  let t = (0, vn.c)(38),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    f;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (f = t[10]))
    : (({
        auxiliaryContent: n,
        collapsedContent: i,
        closeTabOnUnmount: r,
        earlierVersion: o,
        document: a,
        onPreviewClose: s,
        previewOwnsHeader: l,
        previewContent: c,
        versionHistory: f,
        ...u
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = f));
  let p = d(Ie),
    m = Y(_t, a.editorKey),
    h = Y(dt, a.editorKey),
    g,
    _;
  if (
    (t[11] !== a || t[12] !== o || t[13] !== p
      ? ((g = () => {
          o == null && p.value.routeKind === `chatgpt-thread` && rt(p, a);
        }),
        (_ = [a, o, p]),
        (t[11] = a),
        (t[12] = o),
        (t[13] = p),
        (t[14] = g),
        (t[15] = _))
      : ((g = t[14]), (_ = t[15])),
    (0, yn.useLayoutEffect)(g, _),
    p.value.routeKind !== `chatgpt-thread`)
  ) {
    let e;
    return (
      t[16] !== n || t[17] !== i || t[18] !== o || t[19] !== u
        ? ((e = o ?? i ?? (0, bn.jsxs)(bn.Fragment, { children: [(0, bn.jsx)(kt, { ...u }), n] })),
          (t[16] = n),
          (t[17] = i),
          (t[18] = o),
          (t[19] = u),
          (t[20] = e))
        : (e = t[20]),
      e
    );
  }
  if (o != null && !m) return o;
  if (i != null && !m) return i;
  let v;
  t[21] !== n ||
  t[22] !== r ||
  t[23] !== i ||
  t[24] !== a ||
  t[25] !== o ||
  t[26] !== s ||
  t[27] !== c ||
  t[28] !== l ||
  t[29] !== u.context.state ||
  t[30] !== u.isStreaming ||
  t[31] !== u.onBeforeDocumentExport ||
  t[32] !== f
    ? ((v = (e, t, d) =>
        (0, bn.jsx)(cn, {
          auxiliaryContent: n,
          collapsedContent: o ?? i,
          closeTabOnUnmount: r,
          document: a,
          editorState: u.context.state,
          frameProps: e,
          hasPendingEdits: t,
          isStreaming: u.isStreaming,
          onClose: () => {
            (d(), s?.());
          },
          onFlush: u.onBeforeDocumentExport,
          previewOwnsHeader: l,
          previewContent: c,
          versionHistory: f,
        })),
      (t[21] = n),
      (t[22] = r),
      (t[23] = i),
      (t[24] = a),
      (t[25] = o),
      (t[26] = s),
      (t[27] = c),
      (t[28] = l),
      (t[29] = u.context.state),
      (t[30] = u.isStreaming),
      (t[31] = u.onBeforeDocumentExport),
      (t[32] = f),
      (t[33] = v))
    : (v = t[33]);
  let y;
  return (
    t[34] !== h || t[35] !== u || t[36] !== v
      ? ((y = (0, bn.jsx)(kt, { ...u, isExpanded: h, renderFrame: v })),
        (t[34] = h),
        (t[35] = u),
        (t[36] = v),
        (t[37] = y))
      : (y = t[37]),
    y
  );
}
var vn, yn, bn;
function xn() {
  return (xn = e(() => {
    ((vn = H()), h(), (yn = K()), pe(), X(), De(), Ot(), hn(), ct(), (bn = W()));
  }))();
}
function Sn(e) {
  let t = (0, Cn.c)(10),
    { entry: n, onFileInfo: r, versionHistoryAction: i } = e,
    a = d(o),
    s;
  t[0] === n.node.id ? (s = t[1]) : ((s = be(n.node.id)), (t[0] = n.node.id), (t[1] = s));
  let c = s,
    l = Y(se, c),
    u = (0, wn.useRef)(l),
    f;
  t[2] !== r || t[3] !== c || t[4] !== a
    ? ((f = (e) => {
        let t = a.get(se, c);
        e ? (u.current = t) : t !== u.current && t?.accessory === `file-info` && t.phase === `open` && r();
      }),
      (t[2] = r),
      (t[3] = c),
      (t[4] = a),
      (t[5] = f))
    : (f = t[5]);
  let p;
  return (
    t[6] !== n || t[7] !== f || t[8] !== i
      ? ((p = (0, Tn.jsx)(Vt, { entry: n, versionHistoryAction: i, onOpenChange: f })),
        (t[6] = n),
        (t[7] = f),
        (t[8] = i),
        (t[9] = p))
      : (p = t[9]),
    p
  );
}
var Cn, wn, Tn;
function En() {
  return (En = e(() => {
    ((Cn = H()), h(), (wn = K()), ce(), Bt(), U(), (Tn = W()));
  }))();
}
function Dn(e, t) {
  return Promise.resolve(gt(e, t, `library`));
}
var On, kn, An, jn, Mn, Nn, Pn;
function Fn() {
  return (Fn = e(() => {
    (wt(),
      (On = t(l(), 1)),
      h(),
      Pe(),
      $e(),
      st(),
      yt(),
      U(),
      V(),
      ht(),
      Zt(),
      (kn = E(o, null)),
      (An = E(o, null)),
      (jn = F(
        o,
        ({ conversationId: e, libraryFileId: t }, { get: n }) => {
          let r = n(ot, e);
          if (r == null || t == null) return null;
          let i = r.inlineOwnerByLibraryFileId.get(t);
          return i == null ? null : { messageId: i.messageId, instanceId: i.instanceId };
        },
        { isEqual: On.default },
      )),
      (Mn = F(o, (e, { get: t }) => t(ot, e.conversationId)?.latestByLibraryFileId.get(e.libraryFileId), {
        isEqual: On.default,
      })),
      (Nn = F(o, ({ conversationId: e, libraryFileId: t }, { get: n }) => {
        if (t == null || !Z(n(Se, e))) return !1;
        let r = n(ot, e),
          i = r?.latestByLibraryFileId.get(t);
        return r != null && i != null && r.currentTurnMessageIds.has(i.messageId);
      })),
      (Pn = T(
        o,
        (
          {
            initialContent: e = null,
            initialEditorStore: t,
            libraryFileId: n,
            serverConversationId: r,
            conversationId: i,
          },
          { derived: a, signal: o, scope: s },
        ) => {
          if (n == null || r == null) return null;
          let c = { conversationId: i, libraryFileId: n, serverConversationId: r },
            l = !1,
            u,
            d = null,
            f = !1,
            p = !1,
            m = null,
            h = null,
            g = null,
            _ = 0,
            v = o(
              {
                content: e,
                dirty: !1,
                error: null,
                externalUpdateKey: null,
                fileId: null,
                loading: !0,
                restoring: !1,
                saving: !1,
                versionNumber: null,
              },
              {
                onMount: (e) => {
                  l = !0;
                  let t = s.watch(({ get: t }) => {
                    let r = t(Mn, c),
                      a = t(Nn, { conversationId: i, libraryFileId: n }),
                      o =
                        r == null
                          ? `initial`
                          : `${r.messageId}:${r.resourceUpdate?.content_revision_id ?? r.currentContentFileId ?? `current`}`;
                    (d !== o && ((p = r != null && a), (d = o), (u = r), (f = !0), (_ = 0), S()),
                      f && h == null && g == null && C(e));
                  });
                  return () => {
                    ((l = !1),
                      t(),
                      queueMicrotask(() => {
                        l ||
                          (S(),
                          Promise.resolve(gt(s, i))
                            .then(() => {
                              let e = y();
                              !l && !e.dirty && !e.restoring && e.error == null && D(s, Pn, c);
                            })
                            .catch(() => void 0));
                      }));
                  };
                },
              },
            );
          function y() {
            return v.store.get(v.atom);
          }
          async function b(e, t) {
            let n = (
              await Oe.safeGet(`/files/library/files/{library_file_id}/versions`, {
                parameters: { path: { library_file_id: c.libraryFileId }, query: { limit: 1 } },
                signal: e,
              })
            ).items.find((e) => e.is_current);
            if (n == null || (t != null && n.version_number !== t))
              throw Error(`The current Library document revision is unavailable.`);
            return {
              content: await Jt({
                fileId: n.file_id,
                serverConversationId: c.serverConversationId,
                signal: e,
              }),
              fileId: n.file_id,
              versionNumber: n.version_number,
            };
          }
          function x(e, t) {
            l &&
              e != null &&
              t > e &&
              s.queryClient.invalidateQueries({ queryKey: [`writing-block-library-history`, n] });
          }
          function S() {
            (h?.abort(), (h = null), g != null && (clearTimeout(g), (g = null)));
          }
          async function C(e = v.set) {
            let n = y();
            if (!l || !f || n.dirty || n.saving || n.restoring) return;
            S();
            let r = new AbortController();
            h = r;
            let a = u,
              o = a?.resourceUpdate,
              c = d,
              w = p,
              T = n.loading && n.versionNumber != null,
              ee = w && (t == null || n.versionNumber != null);
            e({ ...n, loading: n.loading || n.versionNumber == null, error: null });
            try {
              t != null &&
                ((m ??= Promise.resolve(gt(s, i, `message`)).catch((e) => {
                  throw ((m = null), e);
                })),
                await m,
                r.signal.throwIfAborted());
              let l =
                (!T &&
                ee &&
                o?.content != null &&
                o.content_revision_id != null &&
                o.content_revision_id === a?.currentContentFileId &&
                a.currentVersionNumber != null
                  ? {
                      content: o.content,
                      fileId: o.content_revision_id,
                      versionNumber: a.currentVersionNumber,
                    }
                  : null) ?? (await b(r.signal));
              if (
                (r.signal.throwIfAborted(),
                (w && a?.currentVersionNumber != null && l.versionNumber < a.currentVersionNumber) ||
                  (T && n.versionNumber != null && l.versionNumber < n.versionNumber))
              )
                throw Error(`The observed Library document revision is not available yet.`);
              ((f = !1),
                e((e) => {
                  if (e.versionNumber != null && l.versionNumber < e.versionNumber)
                    return { ...e, loading: !1 };
                  let t = e.externalUpdateKey;
                  return (
                    (e.fileId !== l.fileId ||
                      e.versionNumber !== l.versionNumber ||
                      e.content !== l.content) &&
                      (T ? (t = `current:${l.versionNumber}:${l.fileId}`) : ee && (t = c)),
                    { ...e, ...l, externalUpdateKey: t, loading: !1, error: null }
                  );
                }),
                x(n.versionNumber, l.versionNumber));
            } catch {
              r.signal.aborted ||
                (e((e) => ({ ...e, loading: T, error: `load` })),
                w &&
                  _ < 2 &&
                  ((_ += 1),
                  (g = setTimeout(() => {
                    ((g = null), C());
                  }, 1e3))));
            } finally {
              h === r && (h = null);
            }
          }
          async function w(e) {
            let t = y();
            if (t.restoring) throw Error(`The Library document is being restored.`);
            let r = t.versionNumber;
            if (r == null)
              throw (
                v.set({ ...t, error: `save` }),
                Error(`The Library document has no loaded revision to save against.`)
              );
            if (t.loading) throw Error(`The Library document is still loading.`);
            (S(), v.set({ ...t, saving: !0, error: null }));
            try {
              let t = await vt(s, `create`, () =>
                  Oe.safePatch(`/files/library/files/{library_file_id}`, {
                    parameters: { path: { library_file_id: c.libraryFileId } },
                    requestBody: { inline_content: e },
                  }),
                ),
                n = t.current_version_number;
              if (n == null) {
                let e;
                do {
                  let i = await Oe.safeGet(`/files/library/files/{library_file_id}/versions`, {
                    parameters: {
                      path: { library_file_id: c.libraryFileId },
                      query: { cursor: e, limit: 20 },
                    },
                    signal: void 0,
                  });
                  if (
                    ((n = i.items.find((e) => e.file_id === t.file_id)?.version_number),
                    n != null || i.items.some((e) => e.version_number < r))
                  )
                    break;
                  e = i.cursor ?? void 0;
                } while (e != null);
              }
              if (n == null) throw Error(`The saved Library document revision is unavailable.`);
              (v.set((r) => ({
                ...r,
                fileId: t.file_id,
                versionNumber: n,
                dirty: r.content !== e,
                saving: !1,
              })),
                x(r, n),
                C());
            } catch (e) {
              throw (
                v.set((e) => ({ ...e, saving: !1, error: `save` })),
                e instanceof k &&
                  e.status === 409 &&
                  s.queryClient.invalidateQueries({ queryKey: [`writing-block-library-history`, n] }),
                e
              );
            }
          }
          async function T(e) {
            let t = y(),
              n = t.versionNumber;
            if (n == null || t.loading || t.dirty || t.saving || t.restoring)
              throw Error(`The Library document must finish loading and saving before restoring.`);
            (S(), v.set({ ...t, restoring: !0 }));
            try {
              let t = await vt(s, `restore`, () =>
                Oe.safePost(`/files/library/files/{library_file_id}/versions/{version_number}/restore`, {
                  parameters: { path: { library_file_id: c.libraryFileId, version_number: e } },
                  requestBody: { expected_current_version: n },
                }),
              );
              if (t.current_version_number == null)
                throw Error(`The restored Library document revision is unavailable.`);
              let r = await b(void 0, t.current_version_number);
              (u?.currentVersionNumber != null && u.currentVersionNumber <= r.versionNumber && (f = !1),
                v.set((e) => ({
                  ...e,
                  ...r,
                  dirty: !1,
                  error: null,
                  externalUpdateKey: `restore:${r.versionNumber}:${r.fileId}`,
                  loading: !1,
                  restoring: !1,
                })),
                x(n, r.versionNumber),
                C());
            } catch (e) {
              throw ((f = !0), (p = !1), v.set((e) => ({ ...e, restoring: !1, loading: !0 })), C(), e);
            }
          }
          return {
            state$: v,
            historyRequest$: o(null),
            historySelectedVersion$: o(null),
            historyRestoringVersion$: o(null),
            historyRestoreDisabled$: a((e) => {
              let t = e(v);
              return t.loading || t.restoring;
            }),
            proseMirrorStore: t ?? Tt(),
            document: {
              edit(e) {
                let t = y();
                t.versionNumber == null ||
                  t.loading ||
                  t.restoring ||
                  e === t.content ||
                  (S(),
                  v.set({ ...t, content: e, dirty: !0, error: null }),
                  s.get(mt, `library`).schedule(i, n, n, () => w(e)));
              },
              save: w,
              restore: T,
              retry() {
                ((_ = 0), (f = !0), S(), C());
              },
            },
          };
        },
        { excludeFieldsFromKey: [`initialContent`, `initialEditorStore`] },
      )));
  }))();
}
async function In(e, { conversationId: t, libraryFileId: n, onRestored: r, session: i, version: a }) {
  if (a.is_current || e.get(i.historyRestoringVersion$) != null) return;
  let o = e.get(i.historyRequest$)?.requestId,
    s = e.get(le);
  e.set(i.historyRestoringVersion$, a.version_number);
  try {
    (await Dn(e, t),
      await i.document.restore(a.version_number),
      await Promise.all([
        e.queryClient.invalidateQueries({ queryKey: [`writing-block-library-history`, n] }),
        e.queryClient.invalidateQueries({ queryKey: [`space-asset-files`, s] }),
      ]),
      e.get(i.historyRequest$)?.requestId === o && (e.set(i.historyRequest$, null), r()));
  } catch (t) {
    let r = t instanceof k && t.status === 409;
    (r && (await e.queryClient.invalidateQueries({ queryKey: [`writing-block-library-history`, n] })),
      e
        .get(O)
        .danger(
          e
            .get(He)
            .formatMessage(
              {
                id: `codex.writingBlock.history.restoreError`,
                defaultMessage: `{conflict, select, yes {The document changed. Review the latest version and try again.} other {Could not restore this version. Try again.}}`,
                description: `Error when restoring a saved writing-block revision fails; the selected historical preview stays open`,
              },
              { conflict: r ? `yes` : `no` },
            ),
          { errorAnalytics: { toastId: `codex.writingBlock.history.restoreError` } },
        ));
  } finally {
    e.set(i.historyRestoringVersion$, null);
  }
}
function Ln() {
  return (Ln = e(() => {
    (Xe(), M(), Ae(), V(), Fn());
  }))();
}
function Rn(e) {
  let t = (0, Bn.c)(59),
    {
      conversationId: n,
      isStreaming: r,
      libraryFileId: i,
      ownerId: a,
      requestedVersionNumber: s,
      serverConversationId: c,
      session: l,
      onClose: f,
    } = e,
    p = d(o),
    m = x(l.historySelectedVersion$),
    h = x(l.historyRestoringVersion$),
    g = x(l.historyRestoreDisabled$),
    _;
  t[0] !== i || t[1] !== s || t[2] !== c
    ? ((_ = { libraryFileId: i, requestedVersionNumber: s, serverConversationId: c }),
      (t[0] = i),
      (t[1] = s),
      (t[2] = c),
      (t[3] = _))
    : (_ = t[3]);
  let {
      data: v,
      fetchNextPage: y,
      hasNextPage: b,
      isError: S,
      isFetchNextPageError: C,
      isFetching: w,
      isFetchingNextPage: T,
      isPending: ee,
      refetch: E,
    } = Y(Yt, _),
    D;
  (t[4] === v?.pages ? (D = t[5]) : ((D = () => v?.pages.flatMap(zn)), (t[4] = v?.pages), (t[5] = D)),
    v?.pages);
  let O;
  t[6] === D ? (O = t[7]) : ((O = D()), (t[6] = D), (t[7] = O));
  let k = O,
    A;
  t[8] !== m || t[9] !== k
    ? ((A = k?.find((e) => (m == null ? e.is_current : e.version_number === m))),
      (t[8] = m),
      (t[9] = k),
      (t[10] = A))
    : (A = t[10]);
  let j = A,
    M = h != null,
    N = g || r,
    P = b === !0,
    F;
  t[11] === y ? (F = t[12]) : ((F = () => void y()), (t[11] = y), (t[12] = F));
  let I;
  t[13] !== y || t[14] !== C || t[15] !== E
    ? ((I = () => void (C ? y() : E())), (t[13] = y), (t[14] = C), (t[15] = E), (t[16] = I))
    : (I = t[16]);
  let L;
  t[17] !== n || t[18] !== r || t[19] !== i || t[20] !== f || t[21] !== g || t[22] !== p || t[23] !== l
    ? ((L = (e) => {
        !g && !r && In(p, { conversationId: n, libraryFileId: i, onRestored: f, session: l, version: e });
      }),
      (t[17] = n),
      (t[18] = r),
      (t[19] = i),
      (t[20] = f),
      (t[21] = g),
      (t[22] = p),
      (t[23] = l),
      (t[24] = L))
    : (L = t[24]);
  let R;
  t[25] !== h || t[26] !== p || t[27] !== l.historySelectedVersion$
    ? ((R = (e) => {
        h ??
          (p.get(Ne).trackCounter(ne.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_SELECTED),
          p.set(l.historySelectedVersion$, e.is_current ? null : e.version_number));
      }),
      (t[25] = h),
      (t[26] = p),
      (t[27] = l.historySelectedVersion$),
      (t[28] = R))
    : (R = t[28]);
  let z;
  t[29] !== S ||
  t[30] !== w ||
  t[31] !== T ||
  t[32] !== ee ||
  t[33] !== f ||
  t[34] !== a ||
  t[35] !== j ||
  t[36] !== L ||
  t[37] !== R ||
  t[38] !== M ||
  t[39] !== N ||
  t[40] !== P ||
  t[41] !== F ||
  t[42] !== I ||
  t[43] !== k
    ? ((z = {
        ownerId: a,
        versions: k,
        selectedVersion: j,
        isOpen: !0,
        isPending: ee,
        isError: S,
        isFetching: w,
        isFetchingNextPage: T,
        isRestoring: M,
        restoreDisabled: N,
        hasNextPage: P,
        fetchNextPage: F,
        refetch: I,
        close: f,
        restore: L,
        select: R,
      }),
      (t[29] = S),
      (t[30] = w),
      (t[31] = T),
      (t[32] = ee),
      (t[33] = f),
      (t[34] = a),
      (t[35] = j),
      (t[36] = L),
      (t[37] = R),
      (t[38] = M),
      (t[39] = N),
      (t[40] = P),
      (t[41] = F),
      (t[42] = I),
      (t[43] = k),
      (t[44] = z))
    : (z = t[44]);
  let B = z,
    V,
    H;
  (t[45] !== B || t[46] !== a || t[47] !== p
    ? ((V = () => (
        p.set(ve, a, B),
        () => {
          p.get(ve, a) === B && p.set(ve, a, null);
        }
      )),
      (H = [B, a, p]),
      (t[45] = B),
      (t[46] = a),
      (t[47] = p),
      (t[48] = V),
      (t[49] = H))
    : ((V = t[48]), (H = t[49])),
    (0, Vn.useLayoutEffect)(V, H));
  let U;
  t[50] !== j || t[51] !== c
    ? ((U = j == null ? null : (0, Hn.jsx)($t, { serverConversationId: c, version: j }, j.file_id)),
      (t[50] = j),
      (t[51] = c),
      (t[52] = U))
    : (U = t[52]);
  let W;
  t[53] !== j || t[54] !== k
    ? ((W =
        k != null && j == null
          ? (0, Hn.jsx)(`p`, {
              className: `p-panel text-sm text-secondary select-none`,
              children: (0, Hn.jsx)(u, {
                id: `codex.writingBlock.history.versionUnavailable`,
                defaultMessage: `This version is no longer available`,
                description: `Shown when a requested saved writing-block revision is absent after checking the full version history; the live document is not substituted`,
              }),
            })
          : null),
      (t[53] = j),
      (t[54] = k),
      (t[55] = W))
    : (W = t[55]);
  let G;
  return (
    t[56] !== U || t[57] !== W
      ? ((G = (0, Hn.jsx)(`div`, {
          className: `relative min-h-0 flex-1 overflow-hidden bg-surface`,
          children: (0, Hn.jsxs)(`div`, { className: `h-full overflow-y-auto pt-24`, children: [U, W] }),
        })),
        (t[56] = U),
        (t[57] = W),
        (t[58] = G))
      : (G = t[58]),
    G
  );
}
function zn(e) {
  return e.items;
}
var Bn, Vn, Hn;
function Un() {
  return (Un = e(() => {
    ((Bn = H()), Me(), h(), (Vn = K()), j(), ce(), Te(), U(), Xt(), Qt(), Ln(), (Hn = W()));
  }))();
}
function Wn(e) {
  let t = (0, rr.c)(22),
    n = d(Ie),
    r = e.editorKey ?? `${e.conversationId}\npatch\n${e.messageId}\n${e.instanceId}`,
    i,
    a;
  (t[0] !== r || t[1] !== n
    ? ((i = () => () => {
        (n.set(ut, r, null), lt(n, r));
      }),
      (a = [n, r]),
      (t[0] = r),
      (t[1] = n),
      (t[2] = i),
      (t[3] = a))
    : ((i = t[2]), (a = t[3])),
    (0, ir.useLayoutEffect)(i, a));
  let o;
  t[4] !== e.conversationId || t[5] !== e.instanceId || t[6] !== e.messageId || t[7] !== e.refIndex
    ? ((o = {
        conversationId: e.conversationId,
        messageId: e.messageId,
        instanceId: e.instanceId,
        refIndex: e.refIndex,
      }),
      (t[4] = e.conversationId),
      (t[5] = e.instanceId),
      (t[6] = e.messageId),
      (t[7] = e.refIndex),
      (t[8] = o))
    : (o = t[8]);
  let s = Y(it, o),
    c = Y(et, s?.libraryFileId),
    l = s?.libraryFileId ?? null,
    u;
  t[9] !== e.conversationId || t[10] !== l
    ? ((u = { conversationId: e.conversationId, libraryFileId: l }),
      (t[9] = e.conversationId),
      (t[10] = l),
      (t[11] = u))
    : (u = t[11]);
  let f = Y(jn, u),
    p = x(Ft),
    m = x(It);
  if (c != null && s?.mode !== `collapsed` && f?.messageId === e.messageId && f.instanceId === e.instanceId) {
    let e;
    return (
      t[12] === c.title
        ? (e = t[13])
        : ((e = (0, $.jsx)(zt, { title: c.title })), (t[12] = c.title), (t[13] = e)),
      e
    );
  }
  if (s?.libraryFileId != null) {
    if (m) {
      let n;
      return (
        t[14] !== s.libraryFileId || t[15] !== e
          ? ((n = (0, $.jsx)(qn, { writingBlockProps: e, libraryFileId: s.libraryFileId })),
            (t[14] = s.libraryFileId),
            (t[15] = e),
            (t[16] = n))
          : (n = t[16]),
        n
      );
    }
    if (p) {
      let n;
      return (
        t[17] !== s.libraryFileId || t[18] !== e
          ? ((n = (0, $.jsx)(Gn, { libraryFileId: s.libraryFileId, writingBlockProps: e }, s.libraryFileId)),
            (t[17] = s.libraryFileId),
            (t[18] = e),
            (t[19] = n))
          : (n = t[19]),
        n
      );
    }
  }
  let h;
  return (t[20] === e ? (h = t[21]) : ((h = (0, $.jsx)(Yn, { ...e })), (t[20] = e), (t[21] = h)), h);
}
function Gn(e) {
  let t = (0, rr.c)(31),
    { libraryFileId: n, writingBlockProps: r } = e,
    i = x(le),
    a = x(Ee),
    o;
  t[0] !== i || t[1] !== n || t[2] !== a
    ? ((o = [`library-api`, i, a, `file`, n]), (t[0] = i), (t[1] = n), (t[2] = a), (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== i || t[5] !== n
    ? ((s =
        i == null
          ? y
          : (e) => {
              let { signal: t } = e;
              return xt(n, i, t);
            }),
      (t[4] = i),
      (t[5] = n),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] !== o || t[8] !== s
    ? ((c = { queryKey: o, queryFn: s, staleTime: 0, gcTime: 0, retry: !1 }),
      (t[7] = o),
      (t[8] = s),
      (t[9] = c))
    : (c = t[9]);
  let { data: l, error: u, isPending: d, refetch: f } = S(c);
  if (d) {
    let e;
    return (
      t[10] !== n || t[11] !== r
        ? ((e = (0, $.jsx)(qn, { writingBlockProps: r, libraryFileId: n })),
          (t[10] = n),
          (t[11] = r),
          (t[12] = e))
        : (e = t[12]),
      e
    );
  }
  if (u != null || l == null) {
    let e;
    t[13] === f ? (e = t[14]) : ((e = (0, $.jsx)(nr, { onRetry: () => void f() })), (t[13] = f), (t[14] = e));
    let i;
    t[15] !== e || t[16] !== r.title
      ? ((i = { title: r.title, children: e }), (t[15] = e), (t[16] = r.title), (t[17] = i))
      : (i = t[17]);
    let a;
    return (
      t[18] !== n || t[19] !== i || t[20] !== r
        ? ((a = (0, $.jsx)(Jn, { writingBlockProps: r, libraryFileId: n, frameProps: i })),
          (t[18] = n),
          (t[19] = i),
          (t[20] = r),
          (t[21] = a))
        : (a = t[21]),
      a
    );
  }
  if (l.library_artifact_type !== `writing_block`) {
    let e;
    return (t[22] === r ? (e = t[23]) : ((e = (0, $.jsx)(Yn, { ...r })), (t[22] = r), (t[23] = e)), e);
  }
  let p;
  t[24] === l ? (p = t[25]) : ((p = `kind` in l ? { node: l } : re(l)), (t[24] = l), (t[25] = p));
  let m = `file_name` in l ? l.file_name : l.name,
    h;
  return (
    t[26] !== n || t[27] !== p || t[28] !== m || t[29] !== r
      ? ((h = (0, $.jsx)(Kn, { ...r, entry: p, libraryFileId: n, title: m })),
        (t[26] = n),
        (t[27] = p),
        (t[28] = m),
        (t[29] = r),
        (t[30] = h))
      : (h = t[30]),
    h
  );
}
function Kn(e) {
  let t = (0, rr.c)(61),
    r = d(Ie),
    {
      conversationId: i,
      editorKey: a,
      entry: o,
      instanceId: c,
      libraryFileId: l,
      messageId: f,
      refIndex: p,
      title: m,
      turnId: h,
    } = e,
    g = s(),
    _ = (0, ir.useContext)(ge),
    v = Y(Ge, i),
    y;
  t[0] !== i || t[1] !== c || t[2] !== f || t[3] !== p
    ? ((y = { conversationId: i, messageId: f, instanceId: c, refIndex: p }),
      (t[0] = i),
      (t[1] = c),
      (t[2] = f),
      (t[3] = p),
      (t[4] = y))
    : (y = t[4]);
  let b = Y(it, y),
    x;
  t[5] !== i || t[6] !== l
    ? ((x = { conversationId: i, libraryFileId: l }), (t[5] = i), (t[6] = l), (t[7] = x))
    : (x = t[7]);
  let S = Y(Nn, x),
    C;
  t[8] !== i || t[9] !== l
    ? ((C = { conversationId: i, libraryFileId: l }), (t[8] = i), (t[9] = l), (t[10] = C))
    : (C = t[10]);
  let w = Y(jn, C),
    T;
  t[11] !== i || t[12] !== l
    ? ((T = { conversationId: i, libraryFileId: l }), (t[11] = i), (t[12] = l), (t[13] = T))
    : (T = t[13]);
  let ee = Y(ar, T),
    E = Y(_t, a ?? `${i}\npatch\n${f}\n${c}`),
    D = Y(dt, a ?? `${i}\npatch\n${f}\n${c}`),
    O;
  t[14] !== l || t[15] !== g
    ? ((O = () => {
        g(`/library/file/${encodeURIComponent(l)}`);
      }),
      (t[14] = l),
      (t[15] = g),
      (t[16] = O))
    : (O = t[16]);
  let k = O,
    A;
  if (t[17] !== w || t[18] !== c || t[19] !== f || t[20] !== k || t[21] !== b || t[22] !== m) {
    if (b?.mode === `collapsed`) A = (0, $.jsx)(Pt, { result: b.result, title: m, onView: k });
    else if (w?.messageId !== f || w.instanceId !== c) {
      let e;
      t[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(u, {
            id: `multiplayer.openNote`,
            defaultMessage: `Open note`,
            description: `Open a shared note from an earlier conversation entry in the Library editor`,
          })),
          (t[24] = e))
        : (e = t[24]);
      let r;
      (t[25] === k
        ? (r = t[26])
        : ((r = (0, $.jsx)(n, { color: `ghost`, onClick: k, children: e })), (t[25] = k), (t[26] = r)),
        (A = (0, $.jsx)(zt, { title: m, actions: r })));
    }
    ((t[17] = w), (t[18] = c), (t[19] = f), (t[20] = k), (t[21] = b), (t[22] = m), (t[23] = A));
  } else A = t[23];
  if (!E) {
    if (A != null) return A;
    if (ee != null) {
      let e;
      return (
        t[27] !== ee.editorKey || t[28] !== m
          ? ((e = (0, $.jsx)($n, { editorKey: ee.editorKey, title: m })),
            (t[27] = ee.editorKey),
            (t[28] = m),
            (t[29] = e))
          : (e = t[29]),
        e
      );
    }
  }
  let j;
  t[30] !== A || t[31] !== l || t[32] !== e
    ? ((j = (0, $.jsx)(qn, { collapsedContent: A, writingBlockProps: e, libraryFileId: l })),
      (t[30] = A),
      (t[31] = l),
      (t[32] = e),
      (t[33] = j))
    : (j = t[33]);
  let M = D ? `viewer` : void 0,
    N = e.isStreaming || S,
    P = _ == null || v == null,
    F;
  t[34] !== A ||
  t[35] !== i ||
  t[36] !== a ||
  t[37] !== o ||
  t[38] !== c ||
  t[39] !== _ ||
  t[40] !== l ||
  t[41] !== f ||
  t[42] !== k ||
  t[43] !== e ||
  t[44] !== p ||
  t[45] !== r ||
  t[46] !== v ||
  t[47] !== m ||
  t[48] !== h
    ? ((F = (t, n) =>
        n
          ? (0, $.jsx)(qn, { collapsedContent: A, writingBlockProps: e, libraryFileId: l })
          : (0, $.jsx)(Jn, {
              collapsedContent: A,
              writingBlockProps: e,
              libraryFileId: l,
              frameProps: {
                ...t,
                headerClassName: `ps-2`,
                inlineContent: void 0,
                viewerPrimaryAction: t.inlineContent,
                leadingContent: (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsx)(Sn, {
                      entry: o,
                      onFileInfo: () => {
                        if (_ == null || v == null) {
                          k();
                          return;
                        }
                        nt(r, {
                          conversationId: i,
                          editorKey: a ?? `${i}\npatch\n${f}\n${c}`,
                          libraryFileId: l,
                          messageId: f,
                          serverConversationId: v,
                          title: m,
                          turnId: h,
                          variant: `document`,
                          writingBlockId: c,
                          writingBlockIndex: p,
                        });
                      },
                      versionHistoryAction: t.viewerVersionHistoryMenuItem,
                    }),
                    t.inlineContent,
                  ],
                }),
              },
            })),
      (t[34] = A),
      (t[35] = i),
      (t[36] = a),
      (t[37] = o),
      (t[38] = c),
      (t[39] = _),
      (t[40] = l),
      (t[41] = f),
      (t[42] = k),
      (t[43] = e),
      (t[44] = p),
      (t[45] = r),
      (t[46] = v),
      (t[47] = m),
      (t[48] = h),
      (t[49] = F))
    : (F = t[49]);
  let I;
  t[50] !== D || t[51] !== l || t[52] !== M || t[53] !== N || t[54] !== P || t[55] !== F || t[56] !== m
    ? ((I = (0, $.jsx)(or, {
        appearance: M,
        documentId: l,
        isExpanded: D,
        readOnly: N,
        showOpenNote: P,
        title: m,
        renderFrame: F,
      })),
      (t[50] = D),
      (t[51] = l),
      (t[52] = M),
      (t[53] = N),
      (t[54] = P),
      (t[55] = F),
      (t[56] = m),
      (t[57] = I))
    : (I = t[57]);
  let L;
  return (
    t[58] !== I || t[59] !== j
      ? ((L = (0, $.jsx)(ir.Suspense, { fallback: j, children: I })), (t[58] = I), (t[59] = j), (t[60] = L))
      : (L = t[60]),
    L
  );
}
function qn(e) {
  let t = (0, rr.c)(19),
    { collapsedContent: n, writingBlockProps: r, libraryFileId: i } = e,
    a = Y(dt, r.editorKey ?? `${r.conversationId}\npatch\n${r.messageId}\n${r.instanceId}`);
  if (r.initialContent == null) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(tr, {})), (t[0] = e)) : (e = t[0]);
    let a;
    t[1] === r.title ? (a = t[2]) : ((a = { title: r.title, children: e }), (t[1] = r.title), (t[2] = a));
    let o;
    return (
      t[3] !== n || t[4] !== i || t[5] !== a || t[6] !== r
        ? ((o = (0, $.jsx)(Jn, {
            collapsedContent: n,
            writingBlockProps: r,
            libraryFileId: i,
            frameProps: a,
          })),
          (t[3] = n),
          (t[4] = i),
          (t[5] = a),
          (t[6] = r),
          (t[7] = o))
        : (o = t[7]),
      o
    );
  }
  let o = a ? `viewer` : `inline`,
    s;
  t[8] !== n || t[9] !== i || t[10] !== r
    ? ((s = (e) =>
        (0, $.jsx)(Jn, { collapsedContent: n, writingBlockProps: r, libraryFileId: i, frameProps: e })),
      (t[8] = n),
      (t[9] = i),
      (t[10] = r),
      (t[11] = s))
    : (s = t[11]);
  let c;
  return (
    t[12] !== o ||
    t[13] !== s ||
    t[14] !== r.editorKey ||
    t[15] !== r.initialContent ||
    t[16] !== r.initialEditorStore ||
    t[17] !== r.title
      ? ((c = (0, $.jsx)(Dt, {
          actionsPresentation: o,
          content: r.initialContent,
          editorKey: r.editorKey,
          emailMetadata: void 0,
          hideFormatToolbar: !0,
          hideSlashMenu: !0,
          isEditable: !1,
          proseMirrorStore: r.initialEditorStore,
          testId: `library-writing-block-loading`,
          renderFrame: s,
          title: r.title,
          variant: `document`,
        })),
        (t[12] = o),
        (t[13] = s),
        (t[14] = r.editorKey),
        (t[15] = r.initialContent),
        (t[16] = r.initialEditorStore),
        (t[17] = r.title),
        (t[18] = c))
      : (c = t[18]),
    c
  );
}
function Jn(e) {
  let t = (0, rr.c)(20),
    { collapsedContent: n, writingBlockProps: r, libraryFileId: i, frameProps: a } = e,
    o = (0, ir.useContext)(ge),
    s = Y(Ge, r.conversationId),
    c;
  t[0] !== i || t[1] !== r.conversationId
    ? ((c = { conversationId: r.conversationId, libraryFileId: i }),
      (t[0] = i),
      (t[1] = r.conversationId),
      (t[2] = c))
    : (c = t[2]);
  let l = Y(Nn, c);
  if (o == null || s == null) {
    let e;
    return (t[3] === a ? (e = t[4]) : ((e = (0, $.jsx)(jt, { ...a })), (t[3] = a), (t[4] = e)), e);
  }
  let { conversationId: u, editorKey: d, messageId: f, instanceId: p, refIndex: m, title: h, turnId: g } = r,
    _ = d ?? `${u}\npatch\n${f}\n${p}`,
    v;
  t[5] !== u ||
  t[6] !== p ||
  t[7] !== i ||
  t[8] !== f ||
  t[9] !== m ||
  t[10] !== s ||
  t[11] !== _ ||
  t[12] !== h ||
  t[13] !== g
    ? ((v = {
        conversationId: u,
        editorKey: _,
        libraryFileId: i,
        messageId: f,
        serverConversationId: s,
        title: h,
        turnId: g,
        variant: `document`,
        writingBlockId: p,
        writingBlockIndex: m,
      }),
      (t[5] = u),
      (t[6] = p),
      (t[7] = i),
      (t[8] = f),
      (t[9] = m),
      (t[10] = s),
      (t[11] = _),
      (t[12] = h),
      (t[13] = g),
      (t[14] = v))
    : (v = t[14]);
  let y = r.isStreaming || l,
    b;
  return (
    t[15] !== n || t[16] !== a || t[17] !== v || t[18] !== y
      ? ((b = (0, $.jsx)(cn, {
          collapsedContent: n,
          closeTabOnUnmount: !1,
          document: v,
          editorState: void 0,
          frameProps: a,
          hasPendingEdits: !1,
          isStreaming: y,
          onFlush: void 0,
        })),
        (t[15] = n),
        (t[16] = a),
        (t[17] = v),
        (t[18] = y),
        (t[19] = b))
      : (b = t[19]),
    b
  );
}
function Yn(e) {
  let t = (0, rr.c)(161),
    {
      conversationId: n,
      editorKey: r,
      fallback: i,
      initialContent: a,
      inlineLibraryControls: s,
      initialEditorStore: c,
      instanceId: l,
      isStreaming: u,
      messageId: f,
      onSuggestedFollowup: p,
      refIndex: m,
      suggestedFollowupIneligibilityReason: h,
      title: _,
      turnId: v,
    } = e,
    y = u !== void 0 && u,
    b = d(Ie),
    S = d(o),
    C = (0, ir.useContext)(ge),
    w = r ?? `${n}\npatch\n${f}\n${l}`,
    T = Y(Ge, n),
    ee;
  t[0] !== n || t[1] !== l || t[2] !== f || t[3] !== m
    ? ((ee = { conversationId: n, messageId: f, instanceId: l, refIndex: m }),
      (t[0] = n),
      (t[1] = l),
      (t[2] = f),
      (t[3] = m),
      (t[4] = ee))
    : (ee = t[4]);
  let E = Y(it, ee),
    D = E?.libraryFileId ?? null,
    O;
  t[5] === D ? (O = t[6]) : ((O = D == null ? null : be(D)), (t[5] = D), (t[6] = O));
  let k = O,
    A = Y(k == null ? null : oe, k ?? ``),
    j;
  t[7] !== n || t[8] !== D
    ? ((j = { conversationId: n, libraryFileId: D }), (t[7] = n), (t[8] = D), (t[9] = j))
    : (j = t[9]);
  let M = Y(Nn, j),
    N;
  t[10] !== n || t[11] !== a || t[12] !== c || t[13] !== D || t[14] !== T
    ? ((N = {
        conversationId: n,
        libraryFileId: D,
        serverConversationId: T,
        initialContent: a,
        initialEditorStore: c,
      }),
      (t[10] = n),
      (t[11] = a),
      (t[12] = c),
      (t[13] = D),
      (t[14] = T),
      (t[15] = N))
    : (N = t[15]);
  let P = g(Pn, N),
    F = x(P?.historyRequest$ ?? An),
    I;
  t[16] !== n || t[17] !== D
    ? ((I = { conversationId: n, libraryFileId: D }), (t[16] = n), (t[17] = D), (t[18] = I))
    : (I = t[18]);
  let L = Y(jn, I),
    R;
  t[19] !== n || t[20] !== D
    ? ((R = { conversationId: n, libraryFileId: D }), (t[19] = n), (t[20] = D), (t[21] = R))
    : (R = t[21]);
  let z = Y(ar, R),
    B = Y(_t, w),
    V = Y(dt, w),
    H = L?.messageId === f && L.instanceId === l,
    U = B || (E?.mode !== `collapsed` && H && z == null),
    W = x(U && P != null ? P.state$ : kn),
    [G, te] = (0, ir.useState)(null);
  if (P == null || E == null || T == null || k == null) return i;
  let K = E.result,
    q = K?.fileName ?? E.writingBlock?.title ?? _,
    J;
  t[22] !== n ||
  t[23] !== w ||
  t[24] !== l ||
  t[25] !== f ||
  t[26] !== E.libraryFileId ||
  t[27] !== m ||
  t[28] !== T ||
  t[29] !== q ||
  t[30] !== v
    ? ((J = {
        conversationId: n,
        editorKey: w,
        libraryFileId: E.libraryFileId,
        messageId: f,
        serverConversationId: T,
        title: q,
        turnId: v,
        variant: `document`,
        writingBlockId: l,
        writingBlockIndex: m,
      }),
      (t[22] = n),
      (t[23] = w),
      (t[24] = l),
      (t[25] = f),
      (t[26] = E.libraryFileId),
      (t[27] = m),
      (t[28] = T),
      (t[29] = q),
      (t[30] = v),
      (t[31] = J))
    : (J = t[31]);
  let re = J,
    ae;
  t[32] !== S ||
  t[33] !== n ||
  t[34] !== re ||
  t[35] !== k ||
  t[36] !== C ||
  t[37] !== z ||
  t[38] !== E.libraryFileId ||
  t[39] !== b ||
  t[40] !== T ||
  t[41] !== P ||
  t[42] !== q
    ? ((ae = (e) => {
        if (C == null) return;
        (z == null ? null : b.get(ut, z.editorKey))?.onClose();
        let t = b.get(ot, n)?.latestByLibraryFileId.get(E.libraryFileId),
          r = z ?? re;
        (z == null &&
          t?.resourceUpdate != null &&
          (r = {
            ...re,
            editorKey: `${n}\npatch\n${t.messageId}\n${t.resourceUpdate.presentation.instance_id}`,
            messageId: t.messageId,
            title: t.fileName ?? q,
            writingBlockId: t.resourceUpdate.presentation.instance_id,
            writingBlockIndex: void 0,
          }),
          S.query
            .fetch(Yt, { libraryFileId: E.libraryFileId, requestedVersionNumber: e, serverConversationId: T })
            .catch(Qn),
          b.set(P.historySelectedVersion$, e),
          b.set(P.historyRequest$, { versionNumber: e, requestId: crypto.randomUUID() }),
          fe(S, k, `version-history`),
          nt(b, r),
          b.get(Ne).trackCounter(ne.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_OPENED));
      }),
      (t[32] = S),
      (t[33] = n),
      (t[34] = re),
      (t[35] = k),
      (t[36] = C),
      (t[37] = z),
      (t[38] = E.libraryFileId),
      (t[39] = b),
      (t[40] = T),
      (t[41] = P),
      (t[42] = q),
      (t[43] = ae))
    : (ae = t[43]);
  let X = ae,
    se;
  t[44] !== z || t[45] !== b || t[46] !== X
    ? ((se = (e) => {
        z != null && b.get(ut, z.editorKey)?.hasPendingEdits ? te({ versionNumber: e }) : X(e);
      }),
      (t[44] = z),
      (t[45] = b),
      (t[46] = X),
      (t[47] = se))
    : (se = t[47]);
  let ce = se,
    le = K == null ? 0 : K.currentVersionNumber,
    ue;
  t[48] !== C || t[49] !== ce || t[50] !== le
    ? ((ue = C == null || le == null ? void 0 : () => ce(le)),
      (t[48] = C),
      (t[49] = ce),
      (t[50] = le),
      (t[51] = ue))
    : (ue = t[51]);
  let de = ue,
    pe;
  t[52] !== de || t[53] !== K || t[54] !== q
    ? ((pe = (0, $.jsx)(Pt, { result: K, title: q, onView: de })),
      (t[52] = de),
      (t[53] = K),
      (t[54] = q),
      (t[55] = pe))
    : (pe = t[55]);
  let Z = pe,
    me = G != null,
    he;
  t[56] === Symbol.for(`react.memo_cache_sentinel`) ? ((he = () => te(null)), (t[56] = he)) : (he = t[56]);
  let _e;
  t[57] !== G || t[58] !== X
    ? ((_e = () => {
        G != null && (X(G.versionNumber), te(null));
      }),
      (t[57] = G),
      (t[58] = X),
      (t[59] = _e))
    : (_e = t[59]);
  let ve;
  t[60] !== me || t[61] !== _e
    ? ((ve = (0, $.jsx)(Gt, { open: me, onCancel: he, onConfirm: _e })),
      (t[60] = me),
      (t[61] = _e),
      (t[62] = ve))
    : (ve = t[62]);
  let ye = ve;
  if (E.mode === `collapsed` && !B) {
    let e;
    return (
      t[63] !== ye || t[64] !== Z
        ? ((e = (0, $.jsxs)($.Fragment, { children: [Z, ye] })), (t[63] = ye), (t[64] = Z), (t[65] = e))
        : (e = t[65]),
      e
    );
  }
  if (!B && z != null && H) {
    let e;
    t[66] === q ? (e = t[67]) : ((e = q ?? (0, $.jsx)(er, {})), (t[66] = q), (t[67] = e));
    let n;
    return (
      t[68] !== z.editorKey || t[69] !== e
        ? ((n = (0, $.jsx)($n, { editorKey: z.editorKey, title: e })),
          (t[68] = z.editorKey),
          (t[69] = e),
          (t[70] = n))
        : (n = t[70]),
      n
    );
  }
  if (!B && !H) {
    let e;
    t[71] === q ? (e = t[72]) : ((e = q ?? (0, $.jsx)(er, {})), (t[71] = q), (t[72] = e));
    let n;
    return (t[73] === e ? (n = t[74]) : ((n = (0, $.jsx)(zt, { title: e })), (t[73] = e), (t[74] = n)), n);
  }
  if (W == null) return i;
  if (W.content == null && !B) {
    let e;
    t[75] !== W.error || t[76] !== Z
      ? ((e = W.error === `load` ? Z : (0, $.jsx)(tr, {})), (t[75] = W.error), (t[76] = Z), (t[77] = e))
      : (e = t[77]);
    let n;
    t[78] !== P || t[79] !== W.error
      ? ((n = W.error === `load` ? (0, $.jsx)(nr, { onRetry: () => P.document.retry() }) : null),
        (t[78] = P),
        (t[79] = W.error),
        (t[80] = n))
      : (n = t[80]);
    let r;
    return (
      t[81] !== ye || t[82] !== e || t[83] !== n
        ? ((r = (0, $.jsxs)($.Fragment, { children: [e, n, ye] })),
          (t[81] = ye),
          (t[82] = e),
          (t[83] = n),
          (t[84] = r))
        : (r = t[84]),
      r
    );
  }
  let xe;
  t[85] !== n || t[86] !== b ? ((xe = () => Dn(b, n)), (t[85] = n), (t[86] = b), (t[87] = xe)) : (xe = t[87]);
  let Se = xe,
    Ce = y || M,
    we = E.writingBlock?.metadata,
    Te;
  t[88] === we
    ? (Te = t[89])
    : ((Te = { bcc: void 0, cc: void 0, recipient: void 0, subject: void 0, writingBlockMetadata: we }),
      (t[88] = we),
      (t[89] = Te));
  let Ee = Te,
    De;
  t[90] !== S || t[91] !== k
    ? ((De = () => {
        ie(S, k, `version-history`);
      }),
      (t[90] = S),
      (t[91] = k),
      (t[92] = De))
    : (De = t[92]);
  let Oe = De,
    ke;
  if (t[93] !== H || t[94] !== E.mode || t[95] !== Z || t[96] !== q) {
    if (E.mode === `collapsed`) ke = Z;
    else if (!H) {
      let e;
      (t[98] === q ? (e = t[99]) : ((e = q ?? (0, $.jsx)(er, {})), (t[98] = q), (t[99] = e)),
        (ke = (0, $.jsx)(zt, { title: e })));
    }
    ((t[93] = H), (t[94] = E.mode), (t[95] = Z), (t[96] = q), (t[97] = ke));
  } else ke = t[97];
  let Ae;
  t[100] !== A?.accessory ||
  t[101] !== Oe ||
  t[102] !== n ||
  t[103] !== k ||
  t[104] !== F ||
  t[105] !== Ce ||
  t[106] !== E.libraryFileId ||
  t[107] !== T ||
  t[108] !== P ||
  t[109] !== W.content ||
  t[110] !== W.error ||
  t[111] !== Z
    ? (F != null && A?.accessory === `version-history`
        ? (Ae = (0, $.jsx)(
            Rn,
            {
              conversationId: n,
              isStreaming: Ce,
              libraryFileId: E.libraryFileId,
              ownerId: k,
              requestedVersionNumber: F.versionNumber,
              serverConversationId: T,
              session: P,
              onClose: Oe,
            },
            F.requestId,
          ))
        : (W.content ?? (Ae = W.error === `load` ? Z : (0, $.jsx)(tr, {}))),
      (t[100] = A?.accessory),
      (t[101] = Oe),
      (t[102] = n),
      (t[103] = k),
      (t[104] = F),
      (t[105] = Ce),
      (t[106] = E.libraryFileId),
      (t[107] = T),
      (t[108] = P),
      (t[109] = W.content),
      (t[110] = W.error),
      (t[111] = Z),
      (t[112] = Ae))
    : (Ae = t[112]);
  let je = W.content ?? ``,
    Me;
  t[113] === W.externalUpdateKey
    ? (Me = t[114])
    : ((Me = { key: W.externalUpdateKey }), (t[113] = W.externalUpdateKey), (t[114] = Me));
  let Pe = W.versionNumber != null && !W.loading && !W.restoring && !Ce,
    Fe;
  t[115] === Se ? (Fe = t[116]) : ((Fe = () => void Se().catch(Zn)), (t[115] = Se), (t[116] = Fe));
  let Le;
  t[117] === P.document
    ? (Le = t[118])
    : ((Le = (e) => P.document.edit(e)), (t[117] = P.document), (t[118] = Le));
  let Re;
  t[119] !== Oe ||
  t[120] !== ke ||
  t[121] !== re ||
  t[122] !== w ||
  t[123] !== Ee ||
  t[124] !== Se ||
  t[125] !== s ||
  t[126] !== l ||
  t[127] !== V ||
  t[128] !== Ce ||
  t[129] !== f ||
  t[130] !== p ||
  t[131] !== E.libraryFileId ||
  t[132] !== E.writingBlock ||
  t[133] !== Ae ||
  t[134] !== ce ||
  t[135] !== K ||
  t[136] !== T ||
  t[137] !== P.document ||
  t[138] !== W.content ||
  t[139] !== W.error ||
  t[140] !== W.loading ||
  t[141] !== W.restoring ||
  t[142] !== W.versionNumber ||
  t[143] !== h ||
  t[144] !== q
    ? ((Re = (e) =>
        (0, $.jsx)(gn, {
          closeTabOnUnmount: !1,
          collapsedContent: ke,
          context: e,
          document: re,
          editorKey: W.content == null ? void 0 : w,
          emailMetadata: Ee,
          isReadOnly: W.versionNumber == null || W.loading || W.restoring,
          isStreaming: Ce,
          librarySaveControls: { ...s, libraryFileId: E.libraryFileId },
          messageId: f,
          onBeforeDocumentExport: Se,
          onOpenVersionHistory: () => ce(null),
          onPreviewClose: Oe,
          previewContent: Ae,
          onSuggestedFollowup: p,
          auxiliaryContent:
            !V || W.error == null
              ? void 0
              : (0, $.jsx)(nr, {
                  onRetry:
                    W.error === `save`
                      ? () => {
                          Se().catch(Xn);
                        }
                      : () => P.document.retry(),
                }),
          serverConversationId: T,
          suggestedFollowupIneligibilityReason: h,
          showMagicEditAction: !0,
          title: q,
          userEditedWritingBlock: K == null && E.writingBlock != null && E.writingBlock.edited !== !1,
          variant: `document`,
          writingBlockId: l,
          writingBlockIndex: E.writingBlock?.index ?? 0,
        })),
      (t[119] = Oe),
      (t[120] = ke),
      (t[121] = re),
      (t[122] = w),
      (t[123] = Ee),
      (t[124] = Se),
      (t[125] = s),
      (t[126] = l),
      (t[127] = V),
      (t[128] = Ce),
      (t[129] = f),
      (t[130] = p),
      (t[131] = E.libraryFileId),
      (t[132] = E.writingBlock),
      (t[133] = Ae),
      (t[134] = ce),
      (t[135] = K),
      (t[136] = T),
      (t[137] = P.document),
      (t[138] = W.content),
      (t[139] = W.error),
      (t[140] = W.loading),
      (t[141] = W.restoring),
      (t[142] = W.versionNumber),
      (t[143] = h),
      (t[144] = q),
      (t[145] = Re))
    : (Re = t[145]);
  let ze;
  t[146] !== w ||
  t[147] !== Ee ||
  t[148] !== E.libraryFileId ||
  t[149] !== P.proseMirrorStore ||
  t[150] !== je ||
  t[151] !== Me ||
  t[152] !== Pe ||
  t[153] !== Fe ||
  t[154] !== Le ||
  t[155] !== Re ||
  t[156] !== q
    ? ((ze = (0, $.jsx)(Dt, {
        content: je,
        editorKey: w,
        emailMetadata: Ee,
        externalContentUpdate: Me,
        isEditable: Pe,
        libraryFileId: E.libraryFileId,
        onBlur: Fe,
        onContentChange: Le,
        proseMirrorStore: P.proseMirrorStore,
        render: Re,
        testId: `chatgpt-writing-block`,
        title: q,
        variant: `document`,
      })),
      (t[146] = w),
      (t[147] = Ee),
      (t[148] = E.libraryFileId),
      (t[149] = P.proseMirrorStore),
      (t[150] = je),
      (t[151] = Me),
      (t[152] = Pe),
      (t[153] = Fe),
      (t[154] = Le),
      (t[155] = Re),
      (t[156] = q),
      (t[157] = ze))
    : (ze = t[157]);
  let Be;
  return (
    t[158] !== ye || t[159] !== ze
      ? ((Be = (0, $.jsxs)($.Fragment, { children: [ze, ye] })), (t[158] = ye), (t[159] = ze), (t[160] = Be))
      : (Be = t[160]),
    Be
  );
}
function Xn() {}
function Zn() {}
function Qn() {}
function $n(e) {
  let t = (0, rr.c)(3),
    { editorKey: n, title: r } = e,
    i = Y(ut, n),
    a;
  return (
    t[0] !== i?.inlineContent || t[1] !== r
      ? ((a = i?.inlineContent ?? (0, $.jsx)(zt, { title: r })),
        (t[0] = i?.inlineContent),
        (t[1] = r),
        (t[2] = a))
      : (a = t[2]),
    a
  );
}
function er() {
  let e = (0, rr.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(u, {
          id: `codex.writingBlock.library.document`,
          defaultMessage: `Document`,
          description: `Fallback name for a Library writing block without a document title`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function tr() {
  let e = (0, rr.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(ye, {
          className: `text-secondary`,
          padding: `offset`,
          children: (0, $.jsxs)(`span`, {
            className: `flex items-center gap-2 select-none`,
            role: `status`,
            children: [
              (0, $.jsx)(I, { className: `icon-xs` }),
              (0, $.jsx)(u, {
                id: `codex.writingBlock.library.loading`,
                defaultMessage: `Loading document…`,
                description: `Status while the current saved content of a Library writing block is loading`,
              }),
            ],
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function nr(e) {
  let t = (0, rr.c)(2),
    { onRetry: r } = e,
    i;
  return (
    t[0] === r
      ? (i = t[1])
      : ((i = (0, $.jsx)(ye, {
          className: `text-secondary`,
          padding: `offset`,
          children: (0, $.jsx)(`span`, {
            className: `select-none`,
            role: `alert`,
            children: (0, $.jsx)(u, {
              id: `codex.writingBlock.library.syncError`,
              defaultMessage: `Couldn’t sync this document · <retry>Try again</retry>`,
              description: `A Library writing block could not load or save its current content. Local changes remain in the editor. The retry link repeats the failed operation`,
              values: {
                retry: (e) =>
                  (0, $.jsx)(n, {
                    className: `inline-flex`,
                    color: `ghostTertiary`,
                    size: `inline`,
                    onClick: r,
                    children: e,
                  }),
              },
            }),
          }),
        })),
        (t[0] = r),
        (t[1] = i)),
    i
  );
}
var rr, ir, $, ar, or;
function sr() {
  return (sr = e(() => {
    ((rr = H()),
      qt(),
      Me(),
      J(),
      C(),
      h(),
      (ir = K()),
      j(),
      w(),
      pe(),
      Xe(),
      $e(),
      st(),
      ce(),
      R(),
      q(),
      A(),
      de(),
      bt(),
      Lt(),
      En(),
      Fe(),
      Re(),
      Te(),
      U(),
      X(),
      Et(),
      xn(),
      Rt(),
      hn(),
      Wt(),
      ct(),
      At(),
      Un(),
      Qt(),
      pt(),
      Fn(),
      Nt(),
      ($ = W()),
      (ar = F(Ie, ({ conversationId: e, libraryFileId: t }, { get: n }) =>
        t == null
          ? null
          : (n(ft).find(
              (r) =>
                r.conversationId === e &&
                (r.libraryFileId === t ||
                  n(it, {
                    conversationId: e,
                    messageId: r.messageId,
                    instanceId: r.writingBlockId,
                    refIndex: r.writingBlockIndex,
                  })?.libraryFileId === t),
            ) ?? null),
      )),
      (or = r(Kt, {
        suspendToParent: !0,
        errorFallback: ({ renderFrame: e, title: t }) =>
          e?.(
            {
              title: t,
              children: (0, $.jsx)(u, {
                id: `library.multiplayer.inlineLoadFailed`,
                defaultMessage: `Unable to load this note. Reload to try again`,
                description: `Error when a collaborative Library note in a conversation fails to load its editor`,
              }),
            },
            !1,
          ),
      })));
  }))();
}
export { xn as i, sr as n, gn as r, Wn as t };
//# sourceMappingURL=writing-block-df584077d0bd.js.map
