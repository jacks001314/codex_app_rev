import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n } from "./app-shared-2feb3d4c6fcc.js";
import { gb as r, hb as i, ob as a } from "./app-initial-ad16eaadf81f.js";
import { r as o, t as s } from "./artifact-accessories-af67956ed42b.js";
import { n as c, t as l } from "./header-8bb9b418457b.js";
function u(e) {
  let t = (0, f.c)(37),
    {
      accountId: n,
      accessoryOwnerId: r,
      actions: i,
      children: o,
      contentFade: c,
      placement: l,
      controls: u,
      downloadDisabled: m,
      filePreviewKind: h,
      fileInfoSource: g,
      downloadControl: _,
      historyControlGroup: v,
      hideHeader: y,
      headerActions: b,
      leadingActions: x,
      onClose: S,
      onDownload: C,
      onShare: w,
      primaryAction: T,
      shareControl: E,
      shareDisabled: D,
      status: O,
      supplementalActions: k,
      tabId: A,
      title: j,
      userId: M,
      versionHistory: N,
      versionHistoryEnabled: P,
    } = e,
    F = m !== void 0 && m,
    I = y !== void 0 && y,
    L = D !== void 0 && D,
    R = P !== void 0 && P,
    z;
  t[0] === h ? (z = t[1]) : ((z = a(h)), (t[0] = h), (t[1] = z));
  let B = `relative flex h-full min-h-0 flex-col ${z}`,
    V;
  t[2] !== i ||
  t[3] !== c ||
  t[4] !== u ||
  t[5] !== _ ||
  t[6] !== F ||
  t[7] !== b ||
  t[8] !== I ||
  t[9] !== v ||
  t[10] !== x ||
  t[11] !== S ||
  t[12] !== C ||
  t[13] !== w ||
  t[14] !== l ||
  t[15] !== T ||
  t[16] !== E ||
  t[17] !== L ||
  t[18] !== O ||
  t[19] !== k ||
  t[20] !== A ||
  t[21] !== j ||
  t[22] !== N ||
  t[23] !== R
    ? ((V =
        !I &&
        (0, p.jsx)(d, {
          actions: i,
          contentFade: c,
          placement: l,
          controls: u,
          downloadControl: _,
          historyControlGroup: v,
          headerActions: b,
          leadingActions: x,
          status: O,
          downloadDisabled: F,
          onClose: S,
          onDownload: C,
          onShare: w,
          primaryAction: T,
          shareControl: E,
          shareDisabled: L,
          supplementalActions: k,
          tabId: A,
          title: j,
          versionHistory: N,
          versionHistoryEnabled: R,
        })),
      (t[2] = i),
      (t[3] = c),
      (t[4] = u),
      (t[5] = _),
      (t[6] = F),
      (t[7] = b),
      (t[8] = I),
      (t[9] = v),
      (t[10] = x),
      (t[11] = S),
      (t[12] = C),
      (t[13] = w),
      (t[14] = l),
      (t[15] = T),
      (t[16] = E),
      (t[17] = L),
      (t[18] = O),
      (t[19] = k),
      (t[20] = A),
      (t[21] = j),
      (t[22] = N),
      (t[23] = R),
      (t[24] = V))
    : (V = t[24]);
  let H = l === `overlay`,
    U;
  t[25] !== r || t[26] !== n || t[27] !== o || t[28] !== g || t[29] !== H || t[30] !== M || t[31] !== N
    ? ((U = (0, p.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, p.jsx)(s, {
          accountId: n,
          fileInfoSource: g,
          ownerId: r,
          panelClearsHeader: H,
          userId: M,
          versionHistory: N,
          children: o,
        }),
      })),
      (t[25] = r),
      (t[26] = n),
      (t[27] = o),
      (t[28] = g),
      (t[29] = H),
      (t[30] = M),
      (t[31] = N),
      (t[32] = U))
    : (U = t[32]);
  let W;
  return (
    t[33] !== B || t[34] !== V || t[35] !== U
      ? ((W = (0, p.jsxs)(`section`, { className: B, children: [V, U] })),
        (t[33] = B),
        (t[34] = V),
        (t[35] = U),
        (t[36] = W))
      : (W = t[36]),
    W
  );
}
function d(e) {
  let t = (0, f.c)(24),
    {
      actions: n,
      contentFade: r,
      placement: a,
      controls: o,
      downloadDisabled: s,
      downloadControl: c,
      historyControlGroup: u,
      headerActions: d,
      leadingActions: m,
      onClose: h,
      onDownload: g,
      onShare: _,
      primaryAction: v,
      shareControl: y,
      shareDisabled: b,
      status: x,
      supplementalActions: S,
      tabId: C,
      title: w,
      versionHistory: T,
      versionHistoryEnabled: E,
    } = e,
    D = s !== void 0 && s,
    O = b !== void 0 && b,
    k = E !== void 0 && E,
    A = o ?? i,
    j;
  t[0] !== A || t[1] !== S
    ? ((j =
        S == null
          ? A
          : {
              ...A,
              supplementalActions:
                A.supplementalActions == null
                  ? S
                  : (0, p.jsxs)(p.Fragment, { children: [A.supplementalActions, S] }),
            }),
      (t[0] = A),
      (t[1] = S),
      (t[2] = j))
    : (j = t[2]);
  let M;
  return (
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== c ||
    t[6] !== D ||
    t[7] !== d ||
    t[8] !== u ||
    t[9] !== m ||
    t[10] !== h ||
    t[11] !== g ||
    t[12] !== _ ||
    t[13] !== a ||
    t[14] !== v ||
    t[15] !== y ||
    t[16] !== O ||
    t[17] !== x ||
    t[18] !== j ||
    t[19] !== C ||
    t[20] !== w ||
    t[21] !== T ||
    t[22] !== k
      ? ((M = (0, p.jsx)(l, {
          enabled: k,
          actions: n,
          contentFade: r,
          placement: a,
          historyControlGroup: u,
          downloadDisabled: D,
          headerActions: d,
          leadingActions: m,
          controls: j,
          onClose: h,
          downloadControl: c,
          onDownload: g,
          onShare: _,
          primaryAction: v,
          shareControl: y,
          shareDisabled: O,
          status: x,
          tabId: C,
          title: w,
          versionHistory: T,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = c),
        (t[6] = D),
        (t[7] = d),
        (t[8] = u),
        (t[9] = m),
        (t[10] = h),
        (t[11] = g),
        (t[12] = _),
        (t[13] = a),
        (t[14] = v),
        (t[15] = y),
        (t[16] = O),
        (t[17] = x),
        (t[18] = j),
        (t[19] = C),
        (t[20] = w),
        (t[21] = T),
        (t[22] = k),
        (t[23] = M))
      : (M = t[23]),
    M
  );
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = n()), o(), r(), c(), (p = t()));
  }))();
}
export { d as n, m as r, u as t };
//# sourceMappingURL=library-artifact-preview-chrome-696f2d2b7883.js.map
