import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  $St as r,
  $st as i,
  Bst as a,
  DB as o,
  F3 as s,
  FBt as c,
  FNt as l,
  I3 as u,
  LNt as d,
  Mst as f,
  NCt as p,
  NSt as m,
  Nwt as h,
  OB as g,
  PBt as _,
  Pit as v,
  Qst as y,
  SX as b,
  TCt as x,
  TE as S,
  TY as C,
  USt as w,
  Vrt as T,
  XOt as E,
  XS as D,
  Y3 as O,
  Z3 as k,
  ZSt as A,
  cwt as j,
  e6 as M,
  iCt as N,
  iFt as P,
  iwt as F,
  jit as I,
  jst as L,
  kCt as R,
  kwt as z,
  nB as B,
  nCt as V,
  okt as ee,
  qrt as H,
  rB as U,
  tCt as W,
  tkt as G,
  wE as te,
  xX as ne,
  yCt as K,
  yV as q,
  zst as re,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $b as ie,
  $g as ae,
  $tr as oe,
  ADn as J,
  B1n as se,
  BRr as ce,
  CIr as le,
  CMr as ue,
  Dzn as de,
  Fnt as fe,
  G1t as pe,
  H1t as me,
  I5 as he,
  IS as Y,
  IWn as ge,
  Jpn as _e,
  L5 as ve,
  Lpn as ye,
  MOr as be,
  Mnt as xe,
  Nnt as Se,
  Ozn as X,
  PDn as Ce,
  Qb as we,
  Qg as Te,
  RS as Ee,
  SIr as De,
  VPn as Oe,
  Zht as ke,
  cx as Ae,
  dx as je,
  enr as Me,
  ex as Ne,
  gb as Pe,
  hb as Fe,
  iRr as Ie,
  ix as Le,
  j7n as Z,
  k7n as Re,
  m0n as ze,
  nx as Be,
  ox as Ve,
  pb as He,
  px as Ue,
  sx as We,
  tgt as Ge,
  tyr as Ke,
  vp as qe,
  wLr as Je,
  wWn as Ye,
  x0n as Xe,
  xMr as Ze,
  xp as Qe,
  yMr as $e,
  zOr as et,
  zRr as tt,
} from "./app-initial-ad16eaadf81f.js";
import {
  Ca as nt,
  Ga as rt,
  Ja as it,
  Ka as at,
  Sa as ot,
  Ua as st,
  Wa as ct,
  Xa as lt,
  Ya as ut,
  Za as dt,
  eo as ft,
  io as pt,
  no as mt,
  qa as ht,
  to as gt,
  wa as _t,
} from "./app-primary-3e00728c2a4c.js";
import { n as vt, t as yt } from "./version-history-mutation-c3d1e9519c5d.js";
import { n as bt, t as xt } from "./library-file-metadata-fa02ef64bd6d.js";
import { n as St, t as Ct } from "./menu-items-83f6bf1513b1.js";
import { i as wt, r as Tt } from "./writing-block-markdown-editor-a92619787108.js";
import { n as Et, t as Dt } from "./editable-writing-block-c63092446a34.js";
import { n as Ot, t as kt } from "./writing-block-app-capabilities-80d71e437b42.js";
import { i as At, n as jt, t as Mt } from "./writing-block-surface-2bef314d86c0.js";
import { n as Nt, t as Pt } from "./summary-6c36343d5090.js";
import { n as Ft, r as It, t as Lt } from "./library-multiplayer-access-eac3de12d373.js";
import { n as Rt, t as zt } from "./document-card-68dcf18a748a.js";
import { n as Bt, t as Vt } from "./file-actions-menu-6e870edcf7c5.js";
import { r as Ht, t as Ut } from "./library-artifact-preview-chrome-696f2d2b7883.js";
import { n as Wt, t as Gt } from "./pending-edits-dialog-9c6af36d7219.js";
import { i as Kt, n as qt } from "./entry-d53dfcb57e93.js";
import { a as Jt, i as Yt, n as Xt, o as Zt, r as Qt, t as $t } from "./preview-262cc6ad6e97.js";
function en(e) {
  let t = (0, tn.c)(94),
    { children: n, document: i, frameProps: a, hideHeader: s, onFlush: c, versionHistory: l } = e,
    u = r(be),
    d = ee(),
    p = N(tt),
    m = N(ce),
    h = N(Ge),
    [g, _] = (0, nn.useState)(!1),
    { libraryFileId: v } = i,
    y;
  t[0] !== i.editorKey || t[1] !== v
    ? ((y = v == null ? Le(i.editorKey) : Ve(v)), (t[0] = i.editorKey), (t[1] = v), (t[2] = y))
    : (y = t[2]);
  let x = y,
    S = V(Ne, x),
    C = l ?? S,
    w;
  t[3] !== p || t[4] !== v || t[5] !== m
    ? ((w = [`library-api`, p, m, `file`, v]), (t[3] = p), (t[4] = v), (t[5] = m), (t[6] = w))
    : (w = t[6]);
  let T;
  t[7] !== p || t[8] !== v
    ? ((T =
        p != null && v != null
          ? (e) => {
              let { signal: t } = e;
              return xt(v, p, t);
            }
          : j),
      (t[7] = p),
      (t[8] = v),
      (t[9] = T))
    : (T = t[9]);
  let E;
  t[10] !== w || t[11] !== T
    ? ((E = { queryKey: w, queryFn: T, staleTime: re.ONE_MINUTE, retry: !1 }),
      (t[10] = w),
      (t[11] = T),
      (t[12] = E))
    : (E = t[12]);
  let { data: D } = f(E),
    O,
    k,
    A,
    M,
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    U,
    W,
    G,
    ne,
    K,
    q;
  if (
    t[13] !== p ||
    t[14] !== D ||
    t[15] !== i.editorKey ||
    t[16] !== i.serverConversationId ||
    t[17] !== i.title ||
    t[18] !== a.actions ||
    t[19] !== a.headerActions ||
    t[20] !== a.style ||
    t[21] !== a.viewerCopyMenuItem ||
    t[22] !== a.viewerDownloadControl ||
    t[23] !== a.viewerEditingControls ||
    t[24] !== a.viewerMenuItems ||
    t[25] !== a.viewerTitleControl ||
    t[26] !== a.viewerVersionHistoryMenuItem ||
    t[27] !== s ||
    t[28] !== d ||
    t[29] !== v ||
    t[30] !== c ||
    t[31] !== x ||
    t[32] !== u ||
    t[33] !== h ||
    t[34] !== m
  ) {
    let e;
    D != null && (e = `kind` in D ? { node: D } : _e(D));
    let n;
    (t[52] !== i.title || t[53] !== d
      ? ((n =
          i.title ??
          d.formatMessage({
            id: `codex.writingBlock.documentTabTitle`,
            defaultMessage: `Document`,
            description: `Title of a document writing block tab when the document has no title.`,
          })),
        (t[52] = i.title),
        (t[53] = d),
        (t[54] = n))
      : (n = t[54]),
      (q = n));
    let r;
    t[55] !== i.serverConversationId || t[56] !== v || t[57] !== q
      ? ((r =
          v == null
            ? void 0
            : {
                conversationId: i.serverConversationId,
                identity: { type: `library`, libraryFileId: v },
                mimeType: `text/markdown`,
                name: q,
              }),
        (t[55] = i.serverConversationId),
        (t[56] = v),
        (t[57] = q),
        (t[58] = r))
      : (r = t[58]);
    let l = r;
    ((z = `h-full min-h-0`),
      (B = a.style),
      (O = Ut),
      (U = p),
      (W = x),
      (G =
        a.viewerTitleControl ??
        (e == null
          ? (0, rn.jsx)(te, {
              icon: (0, rn.jsx)(o, { asset: b }),
              title: q,
              children: (0, rn.jsxs)(Ct, {
                fileInfoSource: l,
                libraryFileId: v,
                versionHistoryAction: a.viewerVersionHistoryMenuItem,
                children: [a.viewerMenuItems, a.viewerCopyMenuItem],
              }),
            })
          : (0, rn.jsxs)(Vt, {
              entry: e,
              versionHistoryAction: a.viewerVersionHistoryMenuItem,
              children: [a.viewerMenuItems, a.viewerCopyMenuItem],
            }))),
      (ne = !0),
      t[59] === a.viewerEditingControls
        ? (K = t[60])
        : ((K = { ...Fe, editingControls: a.viewerEditingControls }),
          (t[59] = a.viewerEditingControls),
          (t[60] = K)),
      t[61] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((k = He(`text-document`)), (t[61] = k))
        : (k = t[61]),
      (A = a.viewerDownloadControl),
      (M = l),
      (P = a.headerActions),
      (F = a.headerActions == null ? a.actions : void 0),
      (I = s),
      t[62] !== i.editorKey || t[63] !== u
        ? ((L = Ce.singleTab ? () => st(u, i.editorKey) : void 0),
          (t[62] = i.editorKey),
          (t[63] = u),
          (t[64] = L))
        : (L = t[64]),
      (R =
        a.headerActions == null && h && p != null && e != null && Y(e)
          ? () => {
              (_(!0),
                Promise.resolve(c?.())
                  .then(() => {
                    if (u.get(tt) === p && u.get(ce) === m) return Ue(u, { accountId: p, entry: e });
                  })
                  .catch(() => {
                    u.get(H).danger(
                      d.formatMessage({
                        id: `codex.writingBlock.share.failed`,
                        defaultMessage: `Couldn’t save this document for sharing. Try again`,
                        description: `Error when pending writing-block edits cannot be saved before opening sharing; local edits are preserved`,
                      }),
                      { errorAnalytics: { toastId: `codex.writingBlock.share.failed` } },
                    );
                  })
                  .finally(() => _(!1)));
            }
          : void 0),
      (t[13] = p),
      (t[14] = D),
      (t[15] = i.editorKey),
      (t[16] = i.serverConversationId),
      (t[17] = i.title),
      (t[18] = a.actions),
      (t[19] = a.headerActions),
      (t[20] = a.style),
      (t[21] = a.viewerCopyMenuItem),
      (t[22] = a.viewerDownloadControl),
      (t[23] = a.viewerEditingControls),
      (t[24] = a.viewerMenuItems),
      (t[25] = a.viewerTitleControl),
      (t[26] = a.viewerVersionHistoryMenuItem),
      (t[27] = s),
      (t[28] = d),
      (t[29] = v),
      (t[30] = c),
      (t[31] = x),
      (t[32] = u),
      (t[33] = h),
      (t[34] = m),
      (t[35] = O),
      (t[36] = k),
      (t[37] = A),
      (t[38] = M),
      (t[39] = P),
      (t[40] = F),
      (t[41] = I),
      (t[42] = L),
      (t[43] = R),
      (t[44] = z),
      (t[45] = B),
      (t[46] = U),
      (t[47] = W),
      (t[48] = G),
      (t[49] = ne),
      (t[50] = K),
      (t[51] = q));
  } else
    ((O = t[35]),
      (k = t[36]),
      (A = t[37]),
      (M = t[38]),
      (P = t[39]),
      (F = t[40]),
      (I = t[41]),
      (L = t[42]),
      (R = t[43]),
      (z = t[44]),
      (B = t[45]),
      (U = t[46]),
      (W = t[47]),
      (G = t[48]),
      (ne = t[49]),
      (K = t[50]),
      (q = t[51]));
  let ie;
  t[65] === i.editorKey
    ? (ie = t[66])
    : ((ie = Ce.singleTab ? at(i.editorKey) : void 0), (t[65] = i.editorKey), (t[66] = ie));
  let ae = C ?? void 0,
    oe;
  t[67] !== O ||
  t[68] !== n ||
  t[69] !== a.status ||
  t[70] !== a.viewerPrimaryAction ||
  t[71] !== g ||
  t[72] !== k ||
  t[73] !== A ||
  t[74] !== M ||
  t[75] !== P ||
  t[76] !== F ||
  t[77] !== I ||
  t[78] !== L ||
  t[79] !== R ||
  t[80] !== ie ||
  t[81] !== ae ||
  t[82] !== U ||
  t[83] !== W ||
  t[84] !== G ||
  t[85] !== ne ||
  t[86] !== K ||
  t[87] !== q ||
  t[88] !== m
    ? ((oe = (0, rn.jsx)(O, {
        accountId: U,
        accessoryOwnerId: W,
        actions: G,
        contentFade: ne,
        controls: K,
        placement: k,
        downloadControl: A,
        fileInfoSource: M,
        headerActions: P,
        historyControlGroup: F,
        hideHeader: I,
        onClose: L,
        onShare: R,
        primaryAction: a.viewerPrimaryAction,
        shareDisabled: g,
        status: a.status,
        tabId: ie,
        title: q,
        userId: m,
        versionHistory: ae,
        children: n,
      })),
      (t[67] = O),
      (t[68] = n),
      (t[69] = a.status),
      (t[70] = a.viewerPrimaryAction),
      (t[71] = g),
      (t[72] = k),
      (t[73] = A),
      (t[74] = M),
      (t[75] = P),
      (t[76] = F),
      (t[77] = I),
      (t[78] = L),
      (t[79] = R),
      (t[80] = ie),
      (t[81] = ae),
      (t[82] = U),
      (t[83] = W),
      (t[84] = G),
      (t[85] = ne),
      (t[86] = K),
      (t[87] = q),
      (t[88] = m),
      (t[89] = oe))
    : (oe = t[89]);
  let J;
  return (
    t[90] !== z || t[91] !== B || t[92] !== oe
      ? ((J = (0, rn.jsx)(`div`, { className: z, style: B, children: oe })),
        (t[90] = z),
        (t[91] = B),
        (t[92] = oe),
        (t[93] = J))
      : (J = t[93]),
    J
  );
}
var tn, nn, rn;
function an() {
  return (an = e(() => {
    ((tn = _()),
      ne(),
      F(),
      L(),
      A(),
      (nn = c()),
      E(),
      J(),
      Pe(),
      Je(),
      St(),
      We(),
      g(),
      T(),
      Ee(),
      je(),
      ye(),
      bt(),
      Bt(),
      Ht(),
      ke(),
      et(),
      a(),
      D(),
      ht(),
      (rn = d()));
  }))();
}
function on(e) {
  let t = e.proseMirrorStore.getSnapshot().editorView,
    n =
      t != null && !t.isDestroyed
        ? t.state.doc
        : he({ shouldStripDirectives: !0 }).parse(e.displayedContent.slice(0, 65536));
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
    ve();
  }))();
}
function cn(e) {
  let t = (0, fn.c)(110),
    {
      auxiliaryContent: n,
      collapsedContent: i,
      closeTabOnUnmount: a,
      document: o,
      editorState: s,
      frameProps: c,
      hasPendingEdits: l,
      isStreaming: u,
      onClose: d,
      onFlush: f,
      previewOwnsHeader: p,
      previewContent: m,
      versionHistory: h,
    } = e,
    g = a === void 0 || a,
    _ = r(be),
    v = ee(),
    y = V(ut, o.editorKey),
    b = V(it, o.editorKey),
    x = (0, pn.useContext)(Re)?.isContentFullWidth === !0,
    [C, w] = (0, pn.useState)(null),
    [T, E] = (0, pn.useState)(!1),
    D = (0, pn.useRef)(!1),
    k = (0, pn.useRef)(!1),
    A = (0, pn.useRef)(null),
    j = (0, pn.useRef)(null),
    M = (0, pn.useRef)(null),
    N;
  t[0] !== o.title || t[1] !== c.title
    ? ((N = o.title?.replace(/\.md$/i, ``) || c.title), (t[0] = o.title), (t[1] = c.title), (t[2] = N))
    : (N = t[2]);
  let P = N,
    F;
  t[3] === v
    ? (F = t[4])
    : ((F = v.formatMessage({
        id: `codex.writingBlock.openEditor`,
        defaultMessage: `Open editor`,
        description: `Tooltip and accessible label for expanding a document writing block into the Codex side pane.`,
      })),
      (t[3] = v),
      (t[4] = F));
  let I = F,
    L;
  t[5] !== C || t[6] !== b
    ? ((L = () => {
        let e = (b ? j.current : A.current) ?? M.current;
        if (e != null) {
          if (C == null) {
            let t = e.ownerDocument.createElement(`div`);
            (e.appendChild(t), w(t));
          } else C.parentElement !== e && e.appendChild(C);
        }
      }),
      (t[5] = C),
      (t[6] = b),
      (t[7] = L))
    : (L = t[7]);
  let R = L,
    H;
  t[8] === R
    ? (H = t[9])
    : ((H = (e) => {
        ((A.current = e), R());
      }),
      (t[8] = R),
      (t[9] = H));
  let U = H,
    W;
  t[10] === R
    ? (W = t[11])
    : ((W = (e) => {
        ((j.current = e), R());
      }),
      (t[10] = R),
      (t[11] = W));
  let G = W,
    te;
  t[12] === R
    ? (te = t[13])
    : ((te = (e) => {
        ((M.current = e), R());
      }),
      (t[12] = R),
      (t[13] = te));
  let ne = te,
    K;
  t[14] !== o || t[15] !== f || t[16] !== _
    ? ((K = () => {
        (f?.().catch(dn),
          lt(_, o),
          k.current ||
            ((k.current = !0),
            Ze(_, Ye, {
              conversationId: o.serverConversationId,
              libraryFileId: o.libraryFileId,
              messageId: o.messageId,
              variant: Object.values(oe).find((e) => e === o.variant) ?? oe.UNKNOWN,
              writingBlockId: o.writingBlockId,
            })));
      }),
      (t[14] = o),
      (t[15] = f),
      (t[16] = _),
      (t[17] = K))
    : (K = t[17]);
  let re = K,
    ie;
  t[18] !== o.editorKey || t[19] !== _
    ? ((ie = () => {
        ((D.current = !0), st(_, o.editorKey));
      }),
      (t[18] = o.editorKey),
      (t[19] = _),
      (t[20] = ie))
    : (ie = t[20]);
  let ae = ie,
    J = c.inlineControlsAppearance === `viewer`,
    se = J ? S : O,
    ce = J ? void 0 : `ghostActive`,
    le = J ? void 0 : `imageToolbar`,
    ue;
  t[21] === Symbol.for(`react.memo_cache_sentinel`) ? ((ue = (0, Q.jsx)(q, {})), (t[21] = ue)) : (ue = t[21]);
  let de;
  t[22] !== se || t[23] !== u || t[24] !== re || t[25] !== I || t[26] !== ce || t[27] !== le
    ? ((de = (0, Q.jsx)(se, {
        "aria-label": I,
        color: ce,
        disabled: u,
        size: le,
        uniform: !0,
        onClick: re,
        children: ue,
      })),
      (t[22] = se),
      (t[23] = u),
      (t[24] = re),
      (t[25] = I),
      (t[26] = ce),
      (t[27] = le),
      (t[28] = de))
    : (de = t[28]);
  let fe;
  t[29] !== I || t[30] !== de
    ? ((fe = (0, Q.jsx)(B, { sideOffset: 0, tooltipContent: I, children: de })),
      (t[29] = I),
      (t[30] = de),
      (t[31] = fe))
    : (fe = t[31]);
  let pe = fe,
    me;
  t[32] === Symbol.for(`react.memo_cache_sentinel`) ? ((me = []), (t[32] = me)) : (me = t[32]);
  let he = m != null,
    Y;
  t[33] === s?.proseMirrorStore
    ? (Y = t[34])
    : ((Y = (e) => {
        let t = s?.proseMirrorStore.getSnapshot().editorView;
        t != null &&
          !t.isDestroyed &&
          t.editable &&
          e.target instanceof Element &&
          e.target !== t.dom &&
          e.target.contains(t.dom) &&
          window.getSelection()?.isCollapsed !== !1 &&
          (t.dispatch(t.state.tr.setSelection(z.atEnd(t.state.doc))), t.focus());
      }),
      (t[33] = s?.proseMirrorStore),
      (t[34] = Y));
  let ge;
  t[35] === x
    ? (ge = t[36])
    : ((ge = x ? { paddingTop: Se, paddingBottom: xe } : void 0), (t[35] = x), (t[36] = ge));
  let _e;
  t[37] === G ? (_e = t[38]) : ((_e = (0, Q.jsx)(`div`, { ref: G })), (t[37] = G), (t[38] = _e));
  let ve;
  t[39] !== c.inlineContent || t[40] !== _e
    ? ((ve = (0, Q.jsx)(`div`, {
        className: `mx-auto w-full max-w-(--thread-content-max-width) px-toolbar pb-8 browser:p-0`,
        children: (0, Q.jsxs)(`div`, { className: `pt-16`, children: [c.inlineContent, _e] }),
      })),
      (t[39] = c.inlineContent),
      (t[40] = _e),
      (t[41] = ve))
    : (ve = t[41]);
  let ye;
  t[42] !== o.editorKey || t[43] !== he || t[44] !== Y || t[45] !== ge || t[46] !== ve
    ? ((ye = (0, Q.jsx)(Mt, {
        className: `min-h-0 flex-1 overflow-y-auto`,
        "data-writing-block-expanded": o.editorKey,
        hidden: he,
        onClick: Y,
        style: ge,
        children: ve,
      })),
      (t[42] = o.editorKey),
      (t[43] = he),
      (t[44] = Y),
      (t[45] = ge),
      (t[46] = ve),
      (t[47] = ye))
    : (ye = t[47]);
  let X;
  t[48] !== n || t[49] !== m || t[50] !== ye
    ? ((X = (0, Q.jsxs)(`div`, {
        className: `relative isolate flex h-full min-h-0 flex-col`,
        "data-writing-block-table-controls-container": !0,
        children: [m, n, ye],
      })),
      (t[48] = n),
      (t[49] = m),
      (t[50] = ye),
      (t[51] = X))
    : (X = t[51]);
  let Ce;
  t[52] !== o || t[53] !== c || t[54] !== f || t[55] !== p || t[56] !== X || t[57] !== h
    ? ((Ce = {
        headerRows: me,
        content: (0, Q.jsx)(en, {
          document: o,
          frameProps: c,
          hideHeader: p,
          onFlush: f,
          versionHistory: h,
          children: X,
        }),
      }),
      (t[52] = o),
      (t[53] = c),
      (t[54] = f),
      (t[55] = p),
      (t[56] = X),
      (t[57] = h),
      (t[58] = Ce))
    : (Ce = t[58]);
  let we = Ce,
    Te;
  t[59] !== c.actions || t[60] !== c.headerActions
    ? ((Te = c.actions ?? c.headerActions?.map(un)),
      (t[59] = c.actions),
      (t[60] = c.headerActions),
      (t[61] = Te))
    : (Te = t[61]);
  let Ee;
  t[62] !== pe || t[63] !== Te
    ? ((Ee = (0, Q.jsxs)(Q.Fragment, { children: [Te, pe] })), (t[62] = pe), (t[63] = Te), (t[64] = Ee))
    : (Ee = t[64]);
  let De;
  t[65] === U ? (De = t[66]) : ((De = (0, Q.jsx)(`div`, { ref: U })), (t[65] = U), (t[66] = De));
  let Oe;
  t[67] !== n || t[68] !== De
    ? ((Oe = (0, Q.jsxs)(Q.Fragment, { children: [n, De] })), (t[67] = n), (t[68] = De), (t[69] = Oe))
    : (Oe = t[69]);
  let ke;
  t[70] !== c || t[71] !== Ee || t[72] !== Oe
    ? ((ke = (0, Q.jsx)(jt, { ...c, actions: Ee, children: Oe })),
      (t[70] = c),
      (t[71] = Ee),
      (t[72] = Oe),
      (t[73] = ke))
    : (ke = t[73]);
  let Ae = ke,
    je;
  (t[74] !== o.editorKey ||
  t[75] !== s ||
  t[76] !== l ||
  t[77] !== Ae ||
  t[78] !== b ||
  t[79] !== y ||
  t[80] !== R ||
  t[81] !== d ||
  t[82] !== f ||
  t[83] !== we ||
  t[84] !== _
    ? ((je = () => {
        (R(),
          _.set(
            ct,
            o.editorKey,
            y
              ? {
                  hasPendingEdits: l,
                  readPreviewText: () => (s == null ? null : on(s)),
                  onBeforeClose: () => (l && !D.current ? (E(!0), !1) : !0),
                  onClose: () => {
                    ((D.current = !1), d?.(), f?.().catch(ln));
                  },
                  slots: we,
                  inlineContent: b ? null : Ae,
                }
              : null,
          ));
      }),
      (t[74] = o.editorKey),
      (t[75] = s),
      (t[76] = l),
      (t[77] = Ae),
      (t[78] = b),
      (t[79] = y),
      (t[80] = R),
      (t[81] = d),
      (t[82] = f),
      (t[83] = we),
      (t[84] = _),
      (t[85] = je))
    : (je = t[85]),
    (0, pn.useLayoutEffect)(je));
  let Me, Ne;
  (t[86] !== g || t[87] !== o.editorKey || t[88] !== _
    ? ((Me = () => () => {
        (_.set(ct, o.editorKey, null), g && st(_, o.editorKey));
      }),
      (Ne = [_, o.editorKey, g]),
      (t[86] = g),
      (t[87] = o.editorKey),
      (t[88] = _),
      (t[89] = Me),
      (t[90] = Ne))
    : ((Me = t[89]), (Ne = t[90])),
    (0, pn.useLayoutEffect)(Me, Ne));
  let Pe;
  t[91] !== i || t[92] !== Ae || t[93] !== b || t[94] !== ne || t[95] !== P
    ? ((Pe =
        i != null || b
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [i ?? (0, Q.jsx)(zt, { title: P }), (0, Q.jsx)(`div`, { ref: ne, hidden: !0 })],
            })
          : Ae),
      (t[91] = i),
      (t[92] = Ae),
      (t[93] = b),
      (t[94] = ne),
      (t[95] = P),
      (t[96] = Pe))
    : (Pe = t[96]);
  let Fe;
  t[97] !== C || t[98] !== c.children
    ? ((Fe = C == null ? null : (0, mn.createPortal)(c.children, C)),
      (t[97] = C),
      (t[98] = c.children),
      (t[99] = Fe))
    : (Fe = t[99]);
  let Ie;
  t[100] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ie = () => E(!1)), (t[100] = Ie)) : (Ie = t[100]);
  let Le;
  t[101] === ae
    ? (Le = t[102])
    : ((Le = () => {
        (ae(), E(!1));
      }),
      (t[101] = ae),
      (t[102] = Le));
  let Z;
  t[103] !== T || t[104] !== Le
    ? ((Z = (0, Q.jsx)(Gt, { onCancel: Ie, onConfirm: Le, open: T })),
      (t[103] = T),
      (t[104] = Le),
      (t[105] = Z))
    : (Z = t[105]);
  let ze;
  return (
    t[106] !== Pe || t[107] !== Fe || t[108] !== Z
      ? ((ze = (0, Q.jsxs)(Q.Fragment, { children: [Pe, Fe, Z] })),
        (t[106] = Pe),
        (t[107] = Fe),
        (t[108] = Z),
        (t[109] = ze))
      : (ze = t[109]),
    ze
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
    ((fn = _()),
      ge(),
      Me(),
      A(),
      h(),
      (pn = c()),
      (mn = l()),
      E(),
      Z(),
      k(),
      C(),
      U(),
      $e(),
      et(),
      fe(),
      D(),
      At(),
      an(),
      Rt(),
      Wt(),
      sn(),
      ht(),
      (Q = d()));
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
  let f = (0, yn.useContext)(Re),
    p = N(me);
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
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f;
  t[0] === e
    ? ((n = t[1]),
      (i = t[2]),
      (a = t[3]),
      (o = t[4]),
      (s = t[5]),
      (c = t[6]),
      (l = t[7]),
      (u = t[8]),
      (d = t[9]),
      (f = t[10]))
    : (({
        auxiliaryContent: n,
        collapsedContent: a,
        closeTabOnUnmount: i,
        earlierVersion: s,
        document: o,
        onPreviewClose: c,
        previewOwnsHeader: u,
        previewContent: l,
        versionHistory: f,
        ...d
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f));
  let p = r(be),
    m = V(ut, o.editorKey),
    h = V(it, o.editorKey),
    g,
    _;
  if (
    (t[11] !== o || t[12] !== s || t[13] !== p
      ? ((g = () => {
          s == null && p.value.routeKind === `chatgpt-thread` && rt(p, o);
        }),
        (_ = [o, s, p]),
        (t[11] = o),
        (t[12] = s),
        (t[13] = p),
        (t[14] = g),
        (t[15] = _))
      : ((g = t[14]), (_ = t[15])),
    (0, yn.useLayoutEffect)(g, _),
    p.value.routeKind !== `chatgpt-thread`)
  ) {
    let e;
    return (
      t[16] !== n || t[17] !== a || t[18] !== s || t[19] !== d
        ? ((e = s ?? a ?? (0, bn.jsxs)(bn.Fragment, { children: [(0, bn.jsx)(kt, { ...d }), n] })),
          (t[16] = n),
          (t[17] = a),
          (t[18] = s),
          (t[19] = d),
          (t[20] = e))
        : (e = t[20]),
      e
    );
  }
  if (s != null && !m) return s;
  if (a != null && !m) return a;
  let v;
  t[21] !== n ||
  t[22] !== i ||
  t[23] !== a ||
  t[24] !== o ||
  t[25] !== s ||
  t[26] !== c ||
  t[27] !== l ||
  t[28] !== u ||
  t[29] !== d.context.state ||
  t[30] !== d.isStreaming ||
  t[31] !== d.onBeforeDocumentExport ||
  t[32] !== f
    ? ((v = (e, t, r) =>
        (0, bn.jsx)(cn, {
          auxiliaryContent: n,
          collapsedContent: s ?? a,
          closeTabOnUnmount: i,
          document: o,
          editorState: d.context.state,
          frameProps: e,
          hasPendingEdits: t,
          isStreaming: d.isStreaming,
          onClose: () => {
            (r(), c?.());
          },
          onFlush: d.onBeforeDocumentExport,
          previewOwnsHeader: u,
          previewContent: l,
          versionHistory: f,
        })),
      (t[21] = n),
      (t[22] = i),
      (t[23] = a),
      (t[24] = o),
      (t[25] = s),
      (t[26] = c),
      (t[27] = l),
      (t[28] = u),
      (t[29] = d.context.state),
      (t[30] = d.isStreaming),
      (t[31] = d.onBeforeDocumentExport),
      (t[32] = f),
      (t[33] = v))
    : (v = t[33]);
  let y;
  return (
    t[34] !== h || t[35] !== d || t[36] !== v
      ? ((y = (0, bn.jsx)(kt, { ...d, isExpanded: h, renderFrame: v })),
        (t[34] = h),
        (t[35] = d),
        (t[36] = v),
        (t[37] = y))
      : (y = t[37]),
    y
  );
}
var vn, yn, bn;
function xn() {
  return (xn = e(() => {
    ((vn = _()), A(), (yn = c()), Z(), et(), pe(), Ot(), hn(), ht(), (bn = d()));
  }))();
}
function Sn(e) {
  let t = (0, Cn.c)(10),
    { entry: n, onFileInfo: i, versionHistoryAction: a } = e,
    o = r(y),
    s;
  t[0] === n.node.id ? (s = t[1]) : ((s = Ve(n.node.id)), (t[0] = n.node.id), (t[1] = s));
  let c = s,
    l = V(we, c),
    u = (0, wn.useRef)(l),
    d;
  t[2] !== i || t[3] !== c || t[4] !== o
    ? ((d = (e) => {
        let t = o.get(we, c);
        e ? (u.current = t) : t !== u.current && t?.accessory === `file-info` && t.phase === `open` && i();
      }),
      (t[2] = i),
      (t[3] = c),
      (t[4] = o),
      (t[5] = d))
    : (d = t[5]);
  let f;
  return (
    t[6] !== n || t[7] !== d || t[8] !== a
      ? ((f = (0, Tn.jsx)(Vt, { entry: n, versionHistoryAction: a, onOpenChange: d })),
        (t[6] = n),
        (t[7] = d),
        (t[8] = a),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
var Cn, wn, Tn;
function En() {
  return (En = e(() => {
    ((Cn = _()), A(), (wn = c()), We(), Bt(), i(), (Tn = d()));
  }))();
}
function Dn(e, t) {
  return Promise.resolve(nt(e, t, `library`));
}
var On, kn, An, jn, Mn, Nn, Pn;
function Fn() {
  return (Fn = e(() => {
    (wt(),
      (On = t(P(), 1)),
      A(),
      Ke(),
      Oe(),
      mt(),
      yt(),
      i(),
      v(),
      _t(),
      Zt(),
      (kn = R(y, null)),
      (An = R(y, null)),
      (jn = K(
        y,
        ({ conversationId: e, libraryFileId: t }, { get: n }) => {
          let r = n(pt, e);
          if (r == null || t == null) return null;
          let i = r.inlineOwnerByLibraryFileId.get(t);
          return i == null ? null : { messageId: i.messageId, instanceId: i.instanceId };
        },
        { isEqual: On.default },
      )),
      (Mn = K(y, (e, { get: t }) => t(pt, e.conversationId)?.latestByLibraryFileId.get(e.libraryFileId), {
        isEqual: On.default,
      })),
      (Nn = K(y, ({ conversationId: e, libraryFileId: t }, { get: n }) => {
        if (t == null || !Xe(n(ze, e))) return !1;
        let r = n(pt, e),
          i = r?.latestByLibraryFileId.get(t);
        return r != null && i != null && r.currentTurnMessageIds.has(i.messageId);
      })),
      (Pn = x(
        y,
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
            m = !1,
            h = null,
            g = null,
            _ = null,
            v = 0,
            y = o(
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
                    (d !== o && ((m = r != null && a), (d = o), (u = r), (f = !0), (v = 0), C()),
                      f && g == null && _ == null && w(e));
                  });
                  return () => {
                    ((l = !1),
                      t(),
                      queueMicrotask(() => {
                        l ||
                          (C(),
                          Promise.resolve(nt(s, i))
                            .then(() => {
                              let e = b();
                              !l && !e.dirty && !e.restoring && e.error == null && p(s, Pn, c);
                            })
                            .catch(() => void 0));
                      }));
                  };
                },
              },
            );
          function b() {
            return y.store.get(y.atom);
          }
          async function x(e, t) {
            let n = (
              await Ie.safeGet(`/files/library/files/{library_file_id}/versions`, {
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
          function S(e, t) {
            l &&
              e != null &&
              t > e &&
              s.queryClient.invalidateQueries({ queryKey: [`writing-block-library-history`, n] });
          }
          function C() {
            (g?.abort(), (g = null), _ != null && (clearTimeout(_), (_ = null)));
          }
          async function w(e = y.set) {
            let n = b();
            if (!l || !f || n.dirty || n.saving || n.restoring) return;
            C();
            let r = new AbortController();
            g = r;
            let a = u,
              o = a?.resourceUpdate,
              c = d,
              p = m,
              T = n.loading && n.versionNumber != null,
              E = p && (t == null || n.versionNumber != null);
            e({ ...n, loading: n.loading || n.versionNumber == null, error: null });
            try {
              t != null &&
                ((h ??= Promise.resolve(nt(s, i, `message`)).catch((e) => {
                  throw ((h = null), e);
                })),
                await h,
                r.signal.throwIfAborted());
              let l =
                (!T &&
                E &&
                o?.content != null &&
                o.content_revision_id != null &&
                o.content_revision_id === a?.currentContentFileId &&
                a.currentVersionNumber != null
                  ? {
                      content: o.content,
                      fileId: o.content_revision_id,
                      versionNumber: a.currentVersionNumber,
                    }
                  : null) ?? (await x(r.signal));
              if (
                (r.signal.throwIfAborted(),
                (p && a?.currentVersionNumber != null && l.versionNumber < a.currentVersionNumber) ||
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
                      (T ? (t = `current:${l.versionNumber}:${l.fileId}`) : E && (t = c)),
                    { ...e, ...l, externalUpdateKey: t, loading: !1, error: null }
                  );
                }),
                S(n.versionNumber, l.versionNumber));
            } catch {
              r.signal.aborted ||
                (e((e) => ({ ...e, loading: T, error: `load` })),
                p &&
                  v < 2 &&
                  ((v += 1),
                  (_ = setTimeout(() => {
                    ((_ = null), w());
                  }, 1e3))));
            } finally {
              g === r && (g = null);
            }
          }
          async function T(e) {
            let t = b();
            if (t.restoring) throw Error(`The Library document is being restored.`);
            let r = t.versionNumber;
            if (r == null)
              throw (
                y.set({ ...t, error: `save` }),
                Error(`The Library document has no loaded revision to save against.`)
              );
            if (t.loading) throw Error(`The Library document is still loading.`);
            (C(), y.set({ ...t, saving: !0, error: null }));
            try {
              let t = await vt(s, `create`, () =>
                  Ie.safePatch(`/files/library/files/{library_file_id}`, {
                    parameters: { path: { library_file_id: c.libraryFileId } },
                    requestBody: { inline_content: e },
                  }),
                ),
                n = t.current_version_number;
              if (n == null) {
                let e;
                do {
                  let i = await Ie.safeGet(`/files/library/files/{library_file_id}/versions`, {
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
              (y.set((r) => ({
                ...r,
                fileId: t.file_id,
                versionNumber: n,
                dirty: r.content !== e,
                saving: !1,
              })),
                S(r, n),
                w());
            } catch (e) {
              throw (
                y.set((e) => ({ ...e, saving: !1, error: `save` })),
                e instanceof I &&
                  e.status === 409 &&
                  s.queryClient.invalidateQueries({ queryKey: [`writing-block-library-history`, n] }),
                e
              );
            }
          }
          async function E(e) {
            let t = b(),
              n = t.versionNumber;
            if (n == null || t.loading || t.dirty || t.saving || t.restoring)
              throw Error(`The Library document must finish loading and saving before restoring.`);
            (C(), y.set({ ...t, restoring: !0 }));
            try {
              let t = await vt(s, `restore`, () =>
                Ie.safePost(`/files/library/files/{library_file_id}/versions/{version_number}/restore`, {
                  parameters: { path: { library_file_id: c.libraryFileId, version_number: e } },
                  requestBody: { expected_current_version: n },
                }),
              );
              if (t.current_version_number == null)
                throw Error(`The restored Library document revision is unavailable.`);
              let r = await x(void 0, t.current_version_number);
              (u?.currentVersionNumber != null && u.currentVersionNumber <= r.versionNumber && (f = !1),
                y.set((e) => ({
                  ...e,
                  ...r,
                  dirty: !1,
                  error: null,
                  externalUpdateKey: `restore:${r.versionNumber}:${r.fileId}`,
                  loading: !1,
                  restoring: !1,
                })),
                S(n, r.versionNumber),
                w());
            } catch (e) {
              throw ((f = !0), (m = !1), y.set((e) => ({ ...e, restoring: !1, loading: !0 })), w(), e);
            }
          }
          return {
            state$: y,
            historyRequest$: o(null),
            historySelectedVersion$: o(null),
            historyRestoringVersion$: o(null),
            historyRestoreDisabled$: a((e) => {
              let t = e(y);
              return t.loading || t.restoring;
            }),
            proseMirrorStore: t ?? Tt(),
            document: {
              edit(e) {
                let t = b();
                t.versionNumber == null ||
                  t.loading ||
                  t.restoring ||
                  e === t.content ||
                  (C(),
                  y.set({ ...t, content: e, dirty: !0, error: null }),
                  s.get(ot, `library`).schedule(i, n, n, () => T(e)));
              },
              save: T,
              restore: E,
              retry() {
                ((v = 0), (f = !0), C(), w());
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
    s = e.get(tt);
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
    let r = t instanceof I && t.status === 409;
    (r && (await e.queryClient.invalidateQueries({ queryKey: [`writing-block-library-history`, n] })),
      e
        .get(H)
        .danger(
          e
            .get(le)
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
    (Je(), T(), De(), v(), Fn());
  }))();
}
function Rn(e) {
  let t = (0, Bn.c)(59),
    {
      conversationId: n,
      isStreaming: i,
      libraryFileId: a,
      ownerId: o,
      requestedVersionNumber: s,
      serverConversationId: c,
      session: l,
      onClose: u,
    } = e,
    d = r(y),
    f = N(l.historySelectedVersion$),
    p = N(l.historyRestoringVersion$),
    m = N(l.historyRestoreDisabled$),
    h;
  t[0] !== a || t[1] !== s || t[2] !== c
    ? ((h = { libraryFileId: a, requestedVersionNumber: s, serverConversationId: c }),
      (t[0] = a),
      (t[1] = s),
      (t[2] = c),
      (t[3] = h))
    : (h = t[3]);
  let {
      data: g,
      fetchNextPage: _,
      hasNextPage: v,
      isError: b,
      isFetchNextPageError: x,
      isFetching: S,
      isFetchingNextPage: C,
      isPending: w,
      refetch: T,
    } = V(Yt, h),
    E;
  (t[4] === g?.pages ? (E = t[5]) : ((E = () => g?.pages.flatMap(zn)), (t[4] = g?.pages), (t[5] = E)),
    g?.pages);
  let D;
  t[6] === E ? (D = t[7]) : ((D = E()), (t[6] = E), (t[7] = D));
  let O = D,
    k;
  t[8] !== f || t[9] !== O
    ? ((k = O?.find((e) => (f == null ? e.is_current : e.version_number === f))),
      (t[8] = f),
      (t[9] = O),
      (t[10] = k))
    : (k = t[10]);
  let A = k,
    j = p != null,
    M = m || i,
    P = v === !0,
    F;
  t[11] === _ ? (F = t[12]) : ((F = () => void _()), (t[11] = _), (t[12] = F));
  let I;
  t[13] !== _ || t[14] !== x || t[15] !== T
    ? ((I = () => void (x ? _() : T())), (t[13] = _), (t[14] = x), (t[15] = T), (t[16] = I))
    : (I = t[16]);
  let L;
  t[17] !== n || t[18] !== i || t[19] !== a || t[20] !== u || t[21] !== m || t[22] !== d || t[23] !== l
    ? ((L = (e) => {
        !m && !i && In(d, { conversationId: n, libraryFileId: a, onRestored: u, session: l, version: e });
      }),
      (t[17] = n),
      (t[18] = i),
      (t[19] = a),
      (t[20] = u),
      (t[21] = m),
      (t[22] = d),
      (t[23] = l),
      (t[24] = L))
    : (L = t[24]);
  let R;
  t[25] !== p || t[26] !== d || t[27] !== l.historySelectedVersion$
    ? ((R = (e) => {
        p ??
          (d.get(ue).trackCounter(de.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_SELECTED),
          d.set(l.historySelectedVersion$, e.is_current ? null : e.version_number));
      }),
      (t[25] = p),
      (t[26] = d),
      (t[27] = l.historySelectedVersion$),
      (t[28] = R))
    : (R = t[28]);
  let z;
  t[29] !== b ||
  t[30] !== S ||
  t[31] !== C ||
  t[32] !== w ||
  t[33] !== u ||
  t[34] !== o ||
  t[35] !== A ||
  t[36] !== L ||
  t[37] !== R ||
  t[38] !== j ||
  t[39] !== M ||
  t[40] !== P ||
  t[41] !== F ||
  t[42] !== I ||
  t[43] !== O
    ? ((z = {
        ownerId: o,
        versions: O,
        selectedVersion: A,
        isOpen: !0,
        isPending: w,
        isError: b,
        isFetching: S,
        isFetchingNextPage: C,
        isRestoring: j,
        restoreDisabled: M,
        hasNextPage: P,
        fetchNextPage: F,
        refetch: I,
        close: u,
        restore: L,
        select: R,
      }),
      (t[29] = b),
      (t[30] = S),
      (t[31] = C),
      (t[32] = w),
      (t[33] = u),
      (t[34] = o),
      (t[35] = A),
      (t[36] = L),
      (t[37] = R),
      (t[38] = j),
      (t[39] = M),
      (t[40] = P),
      (t[41] = F),
      (t[42] = I),
      (t[43] = O),
      (t[44] = z))
    : (z = t[44]);
  let B = z,
    ee,
    H;
  (t[45] !== B || t[46] !== o || t[47] !== d
    ? ((ee = () => (
        d.set(Ne, o, B),
        () => {
          d.get(Ne, o) === B && d.set(Ne, o, null);
        }
      )),
      (H = [B, o, d]),
      (t[45] = B),
      (t[46] = o),
      (t[47] = d),
      (t[48] = ee),
      (t[49] = H))
    : ((ee = t[48]), (H = t[49])),
    (0, Vn.useLayoutEffect)(ee, H));
  let U;
  t[50] !== A || t[51] !== c
    ? ((U = A == null ? null : (0, Hn.jsx)($t, { serverConversationId: c, version: A }, A.file_id)),
      (t[50] = A),
      (t[51] = c),
      (t[52] = U))
    : (U = t[52]);
  let W;
  t[53] !== A || t[54] !== O
    ? ((W =
        O != null && A == null
          ? (0, Hn.jsx)(`p`, {
              className: `p-panel text-sm text-secondary select-none`,
              children: (0, Hn.jsx)(G, {
                id: `codex.writingBlock.history.versionUnavailable`,
                defaultMessage: `This version is no longer available`,
                description: `Shown when a requested saved writing-block revision is absent after checking the full version history; the live document is not substituted`,
              }),
            })
          : null),
      (t[53] = A),
      (t[54] = O),
      (t[55] = W))
    : (W = t[55]);
  let te;
  return (
    t[56] !== U || t[57] !== W
      ? ((te = (0, Hn.jsx)(`div`, {
          className: `relative min-h-0 flex-1 overflow-hidden bg-surface`,
          children: (0, Hn.jsxs)(`div`, { className: `h-full overflow-y-auto pt-24`, children: [U, W] }),
        })),
        (t[56] = U),
        (t[57] = W),
        (t[58] = te))
      : (te = t[58]),
    te
  );
}
function zn(e) {
  return e.items;
}
var Bn, Vn, Hn;
function Un() {
  return (Un = e(() => {
    ((Bn = _()), X(), A(), (Vn = c()), E(), We(), $e(), i(), Xt(), Qt(), Ln(), (Hn = d()));
  }))();
}
function Wn(e) {
  let t = (0, rr.c)(22),
    n = r(be),
    i = e.editorKey ?? `${e.conversationId}\npatch\n${e.messageId}\n${e.instanceId}`,
    a,
    o;
  (t[0] !== i || t[1] !== n
    ? ((a = () => () => {
        (n.set(ct, i, null), st(n, i));
      }),
      (o = [n, i]),
      (t[0] = i),
      (t[1] = n),
      (t[2] = a),
      (t[3] = o))
    : ((a = t[2]), (o = t[3])),
    (0, ir.useLayoutEffect)(a, o));
  let s;
  t[4] !== e.conversationId || t[5] !== e.instanceId || t[6] !== e.messageId || t[7] !== e.refIndex
    ? ((s = {
        conversationId: e.conversationId,
        messageId: e.messageId,
        instanceId: e.instanceId,
        refIndex: e.refIndex,
      }),
      (t[4] = e.conversationId),
      (t[5] = e.instanceId),
      (t[6] = e.messageId),
      (t[7] = e.refIndex),
      (t[8] = s))
    : (s = t[8]);
  let c = V(gt, s),
    l = V(Qe, c?.libraryFileId),
    u = c?.libraryFileId ?? null,
    d;
  t[9] !== e.conversationId || t[10] !== u
    ? ((d = { conversationId: e.conversationId, libraryFileId: u }),
      (t[9] = e.conversationId),
      (t[10] = u),
      (t[11] = d))
    : (d = t[11]);
  let f = V(jn, d),
    p = N(Ft),
    m = N(It);
  if (l != null && c?.mode !== `collapsed` && f?.messageId === e.messageId && f.instanceId === e.instanceId) {
    let e;
    return (
      t[12] === l.title
        ? (e = t[13])
        : ((e = (0, $.jsx)(zt, { title: l.title })), (t[12] = l.title), (t[13] = e)),
      e
    );
  }
  if (c?.libraryFileId != null) {
    if (m) {
      let n;
      return (
        t[14] !== c.libraryFileId || t[15] !== e
          ? ((n = (0, $.jsx)(qn, { writingBlockProps: e, libraryFileId: c.libraryFileId })),
            (t[14] = c.libraryFileId),
            (t[15] = e),
            (t[16] = n))
          : (n = t[16]),
        n
      );
    }
    if (p) {
      let n;
      return (
        t[17] !== c.libraryFileId || t[18] !== e
          ? ((n = (0, $.jsx)(Gn, { libraryFileId: c.libraryFileId, writingBlockProps: e }, c.libraryFileId)),
            (t[17] = c.libraryFileId),
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
    i = N(tt),
    a = N(ce),
    o;
  t[0] !== i || t[1] !== n || t[2] !== a
    ? ((o = [`library-api`, i, a, `file`, n]), (t[0] = i), (t[1] = n), (t[2] = a), (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== i || t[5] !== n
    ? ((s =
        i == null
          ? j
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
  let { data: l, error: u, isPending: d, refetch: p } = f(c);
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
    t[13] === p ? (e = t[14]) : ((e = (0, $.jsx)(nr, { onRetry: () => void p() })), (t[13] = p), (t[14] = e));
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
  let m;
  t[24] === l ? (m = t[25]) : ((m = `kind` in l ? { node: l } : _e(l)), (t[24] = l), (t[25] = m));
  let h = `file_name` in l ? l.file_name : l.name,
    g;
  return (
    t[26] !== n || t[27] !== m || t[28] !== h || t[29] !== r
      ? ((g = (0, $.jsx)(Kn, { ...r, entry: m, libraryFileId: n, title: h })),
        (t[26] = n),
        (t[27] = m),
        (t[28] = h),
        (t[29] = r),
        (t[30] = g))
      : (g = t[30]),
    g
  );
}
function Kn(e) {
  let t = (0, rr.c)(61),
    n = r(be),
    {
      conversationId: i,
      editorKey: a,
      entry: o,
      instanceId: s,
      libraryFileId: c,
      messageId: l,
      refIndex: u,
      title: d,
      turnId: f,
    } = e,
    p = w(),
    m = (0, ir.useContext)(Re),
    h = V(se, i),
    g;
  t[0] !== i || t[1] !== s || t[2] !== l || t[3] !== u
    ? ((g = { conversationId: i, messageId: l, instanceId: s, refIndex: u }),
      (t[0] = i),
      (t[1] = s),
      (t[2] = l),
      (t[3] = u),
      (t[4] = g))
    : (g = t[4]);
  let _ = V(gt, g),
    v;
  t[5] !== i || t[6] !== c
    ? ((v = { conversationId: i, libraryFileId: c }), (t[5] = i), (t[6] = c), (t[7] = v))
    : (v = t[7]);
  let y = V(Nn, v),
    b;
  t[8] !== i || t[9] !== c
    ? ((b = { conversationId: i, libraryFileId: c }), (t[8] = i), (t[9] = c), (t[10] = b))
    : (b = t[10]);
  let x = V(jn, b),
    S;
  t[11] !== i || t[12] !== c
    ? ((S = { conversationId: i, libraryFileId: c }), (t[11] = i), (t[12] = c), (t[13] = S))
    : (S = t[13]);
  let C = V(ar, S),
    T = V(ut, a ?? `${i}\npatch\n${l}\n${s}`),
    E = V(it, a ?? `${i}\npatch\n${l}\n${s}`),
    D;
  t[14] !== c || t[15] !== p
    ? ((D = () => {
        p(`/library/file/${encodeURIComponent(c)}`);
      }),
      (t[14] = c),
      (t[15] = p),
      (t[16] = D))
    : (D = t[16]);
  let k = D,
    A;
  if (t[17] !== x || t[18] !== s || t[19] !== l || t[20] !== k || t[21] !== _ || t[22] !== d) {
    if (_?.mode === `collapsed`) A = (0, $.jsx)(Pt, { result: _.result, title: d, onView: k });
    else if (x?.messageId !== l || x.instanceId !== s) {
      let e;
      t[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(G, {
            id: `multiplayer.openNote`,
            defaultMessage: `Open note`,
            description: `Open a shared note from an earlier conversation entry in the Library editor`,
          })),
          (t[24] = e))
        : (e = t[24]);
      let n;
      (t[25] === k
        ? (n = t[26])
        : ((n = (0, $.jsx)(O, { color: `ghost`, onClick: k, children: e })), (t[25] = k), (t[26] = n)),
        (A = (0, $.jsx)(zt, { title: d, actions: n })));
    }
    ((t[17] = x), (t[18] = s), (t[19] = l), (t[20] = k), (t[21] = _), (t[22] = d), (t[23] = A));
  } else A = t[23];
  if (!T) {
    if (A != null) return A;
    if (C != null) {
      let e;
      return (
        t[27] !== C.editorKey || t[28] !== d
          ? ((e = (0, $.jsx)($n, { editorKey: C.editorKey, title: d })),
            (t[27] = C.editorKey),
            (t[28] = d),
            (t[29] = e))
          : (e = t[29]),
        e
      );
    }
  }
  let j;
  t[30] !== A || t[31] !== c || t[32] !== e
    ? ((j = (0, $.jsx)(qn, { collapsedContent: A, writingBlockProps: e, libraryFileId: c })),
      (t[30] = A),
      (t[31] = c),
      (t[32] = e),
      (t[33] = j))
    : (j = t[33]);
  let M = E ? `viewer` : void 0,
    N = e.isStreaming || y,
    P = m == null || h == null,
    F;
  t[34] !== A ||
  t[35] !== i ||
  t[36] !== a ||
  t[37] !== o ||
  t[38] !== s ||
  t[39] !== m ||
  t[40] !== c ||
  t[41] !== l ||
  t[42] !== k ||
  t[43] !== e ||
  t[44] !== u ||
  t[45] !== n ||
  t[46] !== h ||
  t[47] !== d ||
  t[48] !== f
    ? ((F = (t, r) =>
        r
          ? (0, $.jsx)(qn, { collapsedContent: A, writingBlockProps: e, libraryFileId: c })
          : (0, $.jsx)(Jn, {
              collapsedContent: A,
              writingBlockProps: e,
              libraryFileId: c,
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
                        if (m == null || h == null) {
                          k();
                          return;
                        }
                        lt(n, {
                          conversationId: i,
                          editorKey: a ?? `${i}\npatch\n${l}\n${s}`,
                          libraryFileId: c,
                          messageId: l,
                          serverConversationId: h,
                          title: d,
                          turnId: f,
                          variant: `document`,
                          writingBlockId: s,
                          writingBlockIndex: u,
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
      (t[38] = s),
      (t[39] = m),
      (t[40] = c),
      (t[41] = l),
      (t[42] = k),
      (t[43] = e),
      (t[44] = u),
      (t[45] = n),
      (t[46] = h),
      (t[47] = d),
      (t[48] = f),
      (t[49] = F))
    : (F = t[49]);
  let I;
  t[50] !== E || t[51] !== c || t[52] !== M || t[53] !== N || t[54] !== P || t[55] !== F || t[56] !== d
    ? ((I = (0, $.jsx)(or, {
        appearance: M,
        documentId: c,
        isExpanded: E,
        readOnly: N,
        showOpenNote: P,
        title: d,
        renderFrame: F,
      })),
      (t[50] = E),
      (t[51] = c),
      (t[52] = M),
      (t[53] = N),
      (t[54] = P),
      (t[55] = F),
      (t[56] = d),
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
    a = V(it, r.editorKey ?? `${r.conversationId}\npatch\n${r.messageId}\n${r.instanceId}`);
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
    o = (0, ir.useContext)(Re),
    s = V(se, r.conversationId),
    c;
  t[0] !== i || t[1] !== r.conversationId
    ? ((c = { conversationId: r.conversationId, libraryFileId: i }),
      (t[0] = i),
      (t[1] = r.conversationId),
      (t[2] = c))
    : (c = t[2]);
  let l = V(Nn, c);
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
      editorKey: i,
      fallback: a,
      initialContent: o,
      inlineLibraryControls: s,
      initialEditorStore: c,
      instanceId: l,
      isStreaming: u,
      messageId: d,
      onSuggestedFollowup: f,
      refIndex: p,
      suggestedFollowupIneligibilityReason: m,
      title: h,
      turnId: g,
    } = e,
    _ = u !== void 0 && u,
    v = r(be),
    b = r(y),
    x = (0, ir.useContext)(Re),
    S = i ?? `${n}\npatch\n${d}\n${l}`,
    C = V(se, n),
    w;
  t[0] !== n || t[1] !== l || t[2] !== d || t[3] !== p
    ? ((w = { conversationId: n, messageId: d, instanceId: l, refIndex: p }),
      (t[0] = n),
      (t[1] = l),
      (t[2] = d),
      (t[3] = p),
      (t[4] = w))
    : (w = t[4]);
  let T = V(gt, w),
    E = T?.libraryFileId ?? null,
    D;
  t[5] === E ? (D = t[6]) : ((D = E == null ? null : Ve(E)), (t[5] = E), (t[6] = D));
  let O = D,
    k = V(O == null ? null : ie, O ?? ``),
    A;
  t[7] !== n || t[8] !== E
    ? ((A = { conversationId: n, libraryFileId: E }), (t[7] = n), (t[8] = E), (t[9] = A))
    : (A = t[9]);
  let j = V(Nn, A),
    M;
  t[10] !== n || t[11] !== o || t[12] !== c || t[13] !== E || t[14] !== C
    ? ((M = {
        conversationId: n,
        libraryFileId: E,
        serverConversationId: C,
        initialContent: o,
        initialEditorStore: c,
      }),
      (t[10] = n),
      (t[11] = o),
      (t[12] = c),
      (t[13] = E),
      (t[14] = C),
      (t[15] = M))
    : (M = t[15]);
  let P = W(Pn, M),
    F = N(P?.historyRequest$ ?? An),
    I;
  t[16] !== n || t[17] !== E
    ? ((I = { conversationId: n, libraryFileId: E }), (t[16] = n), (t[17] = E), (t[18] = I))
    : (I = t[18]);
  let L = V(jn, I),
    R;
  t[19] !== n || t[20] !== E
    ? ((R = { conversationId: n, libraryFileId: E }), (t[19] = n), (t[20] = E), (t[21] = R))
    : (R = t[21]);
  let z = V(ar, R),
    B = V(ut, S),
    ee = V(it, S),
    H = L?.messageId === d && L.instanceId === l,
    U = B || (T?.mode !== `collapsed` && H && z == null),
    G = N(U && P != null ? P.state$ : kn),
    [te, ne] = (0, ir.useState)(null);
  if (P == null || T == null || C == null || O == null) return a;
  let K = T.result,
    q = K?.fileName ?? T.writingBlock?.title ?? h,
    re;
  t[22] !== n ||
  t[23] !== S ||
  t[24] !== l ||
  t[25] !== d ||
  t[26] !== T.libraryFileId ||
  t[27] !== p ||
  t[28] !== C ||
  t[29] !== q ||
  t[30] !== g
    ? ((re = {
        conversationId: n,
        editorKey: S,
        libraryFileId: T.libraryFileId,
        messageId: d,
        serverConversationId: C,
        title: q,
        turnId: g,
        variant: `document`,
        writingBlockId: l,
        writingBlockIndex: p,
      }),
      (t[22] = n),
      (t[23] = S),
      (t[24] = l),
      (t[25] = d),
      (t[26] = T.libraryFileId),
      (t[27] = p),
      (t[28] = C),
      (t[29] = q),
      (t[30] = g),
      (t[31] = re))
    : (re = t[31]);
  let ae = re,
    oe;
  t[32] !== b ||
  t[33] !== n ||
  t[34] !== ae ||
  t[35] !== O ||
  t[36] !== x ||
  t[37] !== z ||
  t[38] !== T.libraryFileId ||
  t[39] !== v ||
  t[40] !== C ||
  t[41] !== P ||
  t[42] !== q
    ? ((oe = (e) => {
        if (x == null) return;
        (z == null ? null : v.get(ct, z.editorKey))?.onClose();
        let t = v.get(pt, n)?.latestByLibraryFileId.get(T.libraryFileId),
          r = z ?? ae;
        (z == null &&
          t?.resourceUpdate != null &&
          (r = {
            ...ae,
            editorKey: `${n}\npatch\n${t.messageId}\n${t.resourceUpdate.presentation.instance_id}`,
            messageId: t.messageId,
            title: t.fileName ?? q,
            writingBlockId: t.resourceUpdate.presentation.instance_id,
            writingBlockIndex: void 0,
          }),
          b.query
            .fetch(Yt, { libraryFileId: T.libraryFileId, requestedVersionNumber: e, serverConversationId: C })
            .catch(Qn),
          v.set(P.historySelectedVersion$, e),
          v.set(P.historyRequest$, { versionNumber: e, requestId: crypto.randomUUID() }),
          Ae(b, O, `version-history`),
          lt(v, r),
          v.get(ue).trackCounter(de.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_OPENED));
      }),
      (t[32] = b),
      (t[33] = n),
      (t[34] = ae),
      (t[35] = O),
      (t[36] = x),
      (t[37] = z),
      (t[38] = T.libraryFileId),
      (t[39] = v),
      (t[40] = C),
      (t[41] = P),
      (t[42] = q),
      (t[43] = oe))
    : (oe = t[43]);
  let J = oe,
    ce;
  t[44] !== z || t[45] !== v || t[46] !== J
    ? ((ce = (e) => {
        z != null && v.get(ct, z.editorKey)?.hasPendingEdits ? ne({ versionNumber: e }) : J(e);
      }),
      (t[44] = z),
      (t[45] = v),
      (t[46] = J),
      (t[47] = ce))
    : (ce = t[47]);
  let le = ce,
    fe = K == null ? 0 : K.currentVersionNumber,
    pe;
  t[48] !== x || t[49] !== le || t[50] !== fe
    ? ((pe = x == null || fe == null ? void 0 : () => le(fe)),
      (t[48] = x),
      (t[49] = le),
      (t[50] = fe),
      (t[51] = pe))
    : (pe = t[51]);
  let me = pe,
    he;
  t[52] !== me || t[53] !== K || t[54] !== q
    ? ((he = (0, $.jsx)(Pt, { result: K, title: q, onView: me })),
      (t[52] = me),
      (t[53] = K),
      (t[54] = q),
      (t[55] = he))
    : (he = t[55]);
  let Y = he,
    ge = te != null,
    _e;
  t[56] === Symbol.for(`react.memo_cache_sentinel`) ? ((_e = () => ne(null)), (t[56] = _e)) : (_e = t[56]);
  let ve;
  t[57] !== te || t[58] !== J
    ? ((ve = () => {
        te != null && (J(te.versionNumber), ne(null));
      }),
      (t[57] = te),
      (t[58] = J),
      (t[59] = ve))
    : (ve = t[59]);
  let ye;
  t[60] !== ge || t[61] !== ve
    ? ((ye = (0, $.jsx)(Gt, { open: ge, onCancel: _e, onConfirm: ve })),
      (t[60] = ge),
      (t[61] = ve),
      (t[62] = ye))
    : (ye = t[62]);
  let xe = ye;
  if (T.mode === `collapsed` && !B) {
    let e;
    return (
      t[63] !== xe || t[64] !== Y
        ? ((e = (0, $.jsxs)($.Fragment, { children: [Y, xe] })), (t[63] = xe), (t[64] = Y), (t[65] = e))
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
  if (G == null) return a;
  if (G.content == null && !B) {
    let e;
    t[75] !== G.error || t[76] !== Y
      ? ((e = G.error === `load` ? Y : (0, $.jsx)(tr, {})), (t[75] = G.error), (t[76] = Y), (t[77] = e))
      : (e = t[77]);
    let n;
    t[78] !== P || t[79] !== G.error
      ? ((n = G.error === `load` ? (0, $.jsx)(nr, { onRetry: () => P.document.retry() }) : null),
        (t[78] = P),
        (t[79] = G.error),
        (t[80] = n))
      : (n = t[80]);
    let r;
    return (
      t[81] !== xe || t[82] !== e || t[83] !== n
        ? ((r = (0, $.jsxs)($.Fragment, { children: [e, n, xe] })),
          (t[81] = xe),
          (t[82] = e),
          (t[83] = n),
          (t[84] = r))
        : (r = t[84]),
      r
    );
  }
  let Se;
  t[85] !== n || t[86] !== v ? ((Se = () => Dn(v, n)), (t[85] = n), (t[86] = v), (t[87] = Se)) : (Se = t[87]);
  let X = Se,
    Ce = _ || j,
    we = T.writingBlock?.metadata,
    Te;
  t[88] === we
    ? (Te = t[89])
    : ((Te = { bcc: void 0, cc: void 0, recipient: void 0, subject: void 0, writingBlockMetadata: we }),
      (t[88] = we),
      (t[89] = Te));
  let Ee = Te,
    De;
  t[90] !== b || t[91] !== O
    ? ((De = () => {
        Be(b, O, `version-history`);
      }),
      (t[90] = b),
      (t[91] = O),
      (t[92] = De))
    : (De = t[92]);
  let Oe = De,
    ke;
  if (t[93] !== H || t[94] !== T.mode || t[95] !== Y || t[96] !== q) {
    if (T.mode === `collapsed`) ke = Y;
    else if (!H) {
      let e;
      (t[98] === q ? (e = t[99]) : ((e = q ?? (0, $.jsx)(er, {})), (t[98] = q), (t[99] = e)),
        (ke = (0, $.jsx)(zt, { title: e })));
    }
    ((t[93] = H), (t[94] = T.mode), (t[95] = Y), (t[96] = q), (t[97] = ke));
  } else ke = t[97];
  let je;
  t[100] !== k?.accessory ||
  t[101] !== Oe ||
  t[102] !== n ||
  t[103] !== O ||
  t[104] !== F ||
  t[105] !== Ce ||
  t[106] !== T.libraryFileId ||
  t[107] !== C ||
  t[108] !== P ||
  t[109] !== G.content ||
  t[110] !== G.error ||
  t[111] !== Y
    ? (F != null && k?.accessory === `version-history`
        ? (je = (0, $.jsx)(
            Rn,
            {
              conversationId: n,
              isStreaming: Ce,
              libraryFileId: T.libraryFileId,
              ownerId: O,
              requestedVersionNumber: F.versionNumber,
              serverConversationId: C,
              session: P,
              onClose: Oe,
            },
            F.requestId,
          ))
        : (G.content ?? (je = G.error === `load` ? Y : (0, $.jsx)(tr, {}))),
      (t[100] = k?.accessory),
      (t[101] = Oe),
      (t[102] = n),
      (t[103] = O),
      (t[104] = F),
      (t[105] = Ce),
      (t[106] = T.libraryFileId),
      (t[107] = C),
      (t[108] = P),
      (t[109] = G.content),
      (t[110] = G.error),
      (t[111] = Y),
      (t[112] = je))
    : (je = t[112]);
  let Me = G.content ?? ``,
    Ne;
  t[113] === G.externalUpdateKey
    ? (Ne = t[114])
    : ((Ne = { key: G.externalUpdateKey }), (t[113] = G.externalUpdateKey), (t[114] = Ne));
  let Pe = G.versionNumber != null && !G.loading && !G.restoring && !Ce,
    Fe;
  t[115] === X ? (Fe = t[116]) : ((Fe = () => void X().catch(Zn)), (t[115] = X), (t[116] = Fe));
  let Ie;
  t[117] === P.document
    ? (Ie = t[118])
    : ((Ie = (e) => P.document.edit(e)), (t[117] = P.document), (t[118] = Ie));
  let Le;
  t[119] !== Oe ||
  t[120] !== ke ||
  t[121] !== ae ||
  t[122] !== S ||
  t[123] !== Ee ||
  t[124] !== X ||
  t[125] !== s ||
  t[126] !== l ||
  t[127] !== ee ||
  t[128] !== Ce ||
  t[129] !== d ||
  t[130] !== f ||
  t[131] !== T.libraryFileId ||
  t[132] !== T.writingBlock ||
  t[133] !== je ||
  t[134] !== le ||
  t[135] !== K ||
  t[136] !== C ||
  t[137] !== P.document ||
  t[138] !== G.content ||
  t[139] !== G.error ||
  t[140] !== G.loading ||
  t[141] !== G.restoring ||
  t[142] !== G.versionNumber ||
  t[143] !== m ||
  t[144] !== q
    ? ((Le = (e) =>
        (0, $.jsx)(gn, {
          closeTabOnUnmount: !1,
          collapsedContent: ke,
          context: e,
          document: ae,
          editorKey: G.content == null ? void 0 : S,
          emailMetadata: Ee,
          isReadOnly: G.versionNumber == null || G.loading || G.restoring,
          isStreaming: Ce,
          librarySaveControls: { ...s, libraryFileId: T.libraryFileId },
          messageId: d,
          onBeforeDocumentExport: X,
          onOpenVersionHistory: () => le(null),
          onPreviewClose: Oe,
          previewContent: je,
          onSuggestedFollowup: f,
          auxiliaryContent:
            !ee || G.error == null
              ? void 0
              : (0, $.jsx)(nr, {
                  onRetry:
                    G.error === `save`
                      ? () => {
                          X().catch(Xn);
                        }
                      : () => P.document.retry(),
                }),
          serverConversationId: C,
          suggestedFollowupIneligibilityReason: m,
          showMagicEditAction: !0,
          title: q,
          userEditedWritingBlock: K == null && T.writingBlock != null && T.writingBlock.edited !== !1,
          variant: `document`,
          writingBlockId: l,
          writingBlockIndex: T.writingBlock?.index ?? 0,
        })),
      (t[119] = Oe),
      (t[120] = ke),
      (t[121] = ae),
      (t[122] = S),
      (t[123] = Ee),
      (t[124] = X),
      (t[125] = s),
      (t[126] = l),
      (t[127] = ee),
      (t[128] = Ce),
      (t[129] = d),
      (t[130] = f),
      (t[131] = T.libraryFileId),
      (t[132] = T.writingBlock),
      (t[133] = je),
      (t[134] = le),
      (t[135] = K),
      (t[136] = C),
      (t[137] = P.document),
      (t[138] = G.content),
      (t[139] = G.error),
      (t[140] = G.loading),
      (t[141] = G.restoring),
      (t[142] = G.versionNumber),
      (t[143] = m),
      (t[144] = q),
      (t[145] = Le))
    : (Le = t[145]);
  let Z;
  t[146] !== S ||
  t[147] !== Ee ||
  t[148] !== T.libraryFileId ||
  t[149] !== P.proseMirrorStore ||
  t[150] !== Me ||
  t[151] !== Ne ||
  t[152] !== Pe ||
  t[153] !== Fe ||
  t[154] !== Ie ||
  t[155] !== Le ||
  t[156] !== q
    ? ((Z = (0, $.jsx)(Dt, {
        content: Me,
        editorKey: S,
        emailMetadata: Ee,
        externalContentUpdate: Ne,
        isEditable: Pe,
        libraryFileId: T.libraryFileId,
        onBlur: Fe,
        onContentChange: Ie,
        proseMirrorStore: P.proseMirrorStore,
        render: Le,
        testId: `chatgpt-writing-block`,
        title: q,
        variant: `document`,
      })),
      (t[146] = S),
      (t[147] = Ee),
      (t[148] = T.libraryFileId),
      (t[149] = P.proseMirrorStore),
      (t[150] = Me),
      (t[151] = Ne),
      (t[152] = Pe),
      (t[153] = Fe),
      (t[154] = Ie),
      (t[155] = Le),
      (t[156] = q),
      (t[157] = Z))
    : (Z = t[157]);
  let ze;
  return (
    t[158] !== xe || t[159] !== Z
      ? ((ze = (0, $.jsxs)($.Fragment, { children: [Z, xe] })), (t[158] = xe), (t[159] = Z), (t[160] = ze))
      : (ze = t[160]),
    ze
  );
}
function Xn() {}
function Zn() {}
function Qn() {}
function $n(e) {
  let t = (0, rr.c)(3),
    { editorKey: n, title: r } = e,
    i = V(ct, n),
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
      ? ((t = (0, $.jsx)(G, {
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
      ? ((t = (0, $.jsx)(Te, {
          className: `text-secondary`,
          padding: `offset`,
          children: (0, $.jsxs)(`span`, {
            className: `flex items-center gap-2 select-none`,
            role: `status`,
            children: [
              (0, $.jsx)(n, { className: `icon-xs` }),
              (0, $.jsx)(G, {
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
    { onRetry: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(Te, {
          className: `text-secondary`,
          padding: `offset`,
          children: (0, $.jsx)(`span`, {
            className: `select-none`,
            role: `alert`,
            children: (0, $.jsx)(G, {
              id: `codex.writingBlock.library.syncError`,
              defaultMessage: `Couldn’t sync this document · <retry>Try again</retry>`,
              description: `A Library writing block could not load or save its current content. Local changes remain in the editor. The retry link repeats the failed operation`,
              values: {
                retry: (e) =>
                  (0, $.jsx)(O, {
                    className: `inline-flex`,
                    color: `ghostTertiary`,
                    size: `inline`,
                    onClick: n,
                    children: e,
                  }),
              },
            }),
          }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var rr, ir, $, ar, or;
function sr() {
  return (sr = e(() => {
    ((rr = _()),
      qt(),
      X(),
      F(),
      L(),
      A(),
      (ir = c()),
      E(),
      m(),
      Z(),
      Je(),
      Oe(),
      mt(),
      We(),
      k(),
      s(),
      M(),
      ye(),
      bt(),
      Lt(),
      En(),
      qe(),
      ae(),
      $e(),
      i(),
      et(),
      Et(),
      xn(),
      Rt(),
      hn(),
      Wt(),
      ht(),
      At(),
      Un(),
      Qt(),
      ft(),
      Fn(),
      Nt(),
      ($ = d()),
      (ar = K(be, ({ conversationId: e, libraryFileId: t }, { get: n }) =>
        t == null
          ? null
          : (n(dt).find(
              (r) =>
                r.conversationId === e &&
                (r.libraryFileId === t ||
                  n(gt, {
                    conversationId: e,
                    messageId: r.messageId,
                    instanceId: r.writingBlockId,
                    refIndex: r.writingBlockIndex,
                  })?.libraryFileId === t),
            ) ?? null),
      )),
      (or = u(Kt, {
        suspendToParent: !0,
        errorFallback: ({ renderFrame: e, title: t }) =>
          e?.(
            {
              title: t,
              children: (0, $.jsx)(G, {
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
//# sourceMappingURL=writing-block-ce9d40eb9a3d.js.map
