import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Aen as i,
  Amn as a,
  B4t as o,
  B6t as s,
  B8 as c,
  C1 as l,
  Cpn as u,
  H4t as d,
  JG as f,
  Jit as p,
  KYt as m,
  Kit as h,
  M6t as g,
  N3t as _,
  O3t as v,
  Opn as y,
  P6t as b,
  Spn as x,
  U4t as S,
  UZ as C,
  XZ as w,
  YHt as T,
  ZG as E,
  ZZt as ee,
  _1 as te,
  a3t as D,
  e0t as ne,
  g1 as re,
  gRt as O,
  h1 as ie,
  hmn as ae,
  hz as oe,
  jXt as se,
  jen as k,
  kMt as ce,
  kXt as A,
  kmn as j,
  lH as M,
  mz as le,
  nH as N,
  o3t as ue,
  qYt as P,
  tH as F,
  v1 as I,
  vZt as L,
  w1 as de,
  xRt as R,
  z8 as z,
} from "./app-initial-f094ef01c64d.js";
import {
  GT as fe,
  WT as B,
  cw as V,
  lw as H,
  sw as pe,
  uw as me,
} from "./app-primary-4c40d73a1074.js";
import {
  a as he,
  d as U,
  i as ge,
  n as _e,
  o as ve,
  r as W,
  s as ye,
  u as be,
} from "./artifact-originating-turn-1d99e170e424.js";
import { n as G, r as K } from "./github-file-url-de7160c14b01.js";
import { n as q, r as xe, t as Se } from "./use-target-apps-964e2197265b.js";
function J(e) {
  let t = (0, X.c)(96),
    {
      analyticsContext: r,
      cwd: i,
      disabled: a,
      downloadAnalyticsMetadata: s,
      getAnalyticsContext: c,
      hostId: l,
      onDownload: d,
      onBeforeFileAction: p,
      onBeforeOpen: m,
      path: h,
      persistPreferredTarget: g,
      showLabel: _,
    } = e,
    v = i === void 0 ? null : i,
    b = g !== void 0 && g,
    x = _ !== void 0 && _,
    S = n(D),
    C = n(O),
    w = y(),
    T = P(l),
    [E, ne] = (0, Q.useState)(!1),
    [ae, oe] = (0, Q.useState)(!1),
    [k, ce] = (0, Q.useState)(!1),
    A;
  t[0] === l ? (A = t[1]) : ((A = { hostId: l }), (t[0] = l), (t[1] = A));
  let {
      clearConnectingApp: j,
      connectingApp: M,
      handleAppConnectOAuthStarted: N,
      handleConnectApp: ue,
    } = me(A),
    F;
  t[2] !== v || t[3] !== l || t[4] !== h
    ? ((F = { cwd: v, hostId: l, openPath: h }), (t[2] = v), (t[3] = l), (t[4] = h), (t[5] = F))
    : (F = t[5]);
  let {
      canLoadTargets: I,
      preferredTarget: L,
      targets: R,
      availableTargets: z,
      mode: fe,
      hasLoadedTargets: B,
      isLoadingTargets: V,
      open: H,
    } = xe(F),
    U;
  t[6] === h ? (U = t[7]) : ((U = o(h)), (t[6] = h), (t[7] = U));
  let _e = U,
    W;
  t[8] !== v || t[9] !== h ? ((W = v ?? Ee(h)), (t[8] = v), (t[9] = h), (t[10] = W)) : (W = t[10]);
  let ye = W,
    G,
    K,
    q;
  if (
    t[11] !== r ||
    t[12] !== z ||
    t[13] !== I ||
    t[14] !== v ||
    t[15] !== a ||
    t[16] !== s ||
    t[17] !== _e ||
    t[18] !== c ||
    t[19] !== ye ||
    t[20] !== ue ||
    t[21] !== B ||
    t[22] !== T ||
    t[23] !== l ||
    t[24] !== w ||
    t[25] !== ae ||
    t[26] !== V ||
    t[27] !== k ||
    t[28] !== fe ||
    t[29] !== p ||
    t[30] !== m ||
    t[31] !== d ||
    t[32] !== H ||
    t[33] !== h ||
    t[34] !== b ||
    t[35] !== L ||
    t[36] !== C ||
    t[37] !== S ||
    t[38] !== E ||
    t[39] !== x ||
    t[40] !== R
  ) {
    let e = re({ targets: R, availableTargets: z, includeHiddenTargets: !0, mode: fe }),
      n = te({ preferredTarget: L, targets: R, availableTargets: z, mode: fe }),
      i = e.filter(we),
      o;
    (t[44] === h ? (o = t[45]) : ((o = be(h)), (t[44] = h), (t[45] = o)), (G = o != null));
    let g;
    t[46] === w
      ? (g = t[47])
      : ((g = w.formatMessage({
          id: `artifactTab.preview.open`,
          defaultMessage: `Open`,
          description: `Button label that opens an artifact`,
        })),
        (t[46] = w),
        (t[47] = g));
    let _ = g,
      y;
    t[48] === p
      ? (y = t[49])
      : ((y = (e) => {
          let t = p?.();
          if (t == null) {
            e();
            return;
          }
          Promise.resolve(t).then((t) => {
            t !== !1 && e();
          }, Ce);
        }),
        (t[48] = p),
        (t[49] = y));
    let D = y,
      O;
    t[50] !== m || t[51] !== D
      ? ((O = (e) => {
          D(() => {
            let t = m?.();
            if (t == null) {
              e();
              return;
            }
            Promise.resolve(t).then(e, e);
          });
        }),
        (t[50] = m),
        (t[51] = D),
        (t[52] = O))
      : (O = t[52]);
    let A = O,
      j;
    t[53] !== v || t[54] !== l || t[55] !== A || t[56] !== h || t[57] !== S
      ? ((j = () => {
          A(() => {
            S.get(de).mutate({ cwd: v, hostId: l, path: h, target: `fileManager` });
          });
        }),
        (t[53] = v),
        (t[54] = l),
        (t[55] = A),
        (t[56] = h),
        (t[57] = S),
        (t[58] = j))
      : (j = t[58]);
    let M = j,
      N;
    t[59] !== H || t[60] !== A || t[61] !== h
      ? ((N = (e, t) => {
          A(() => {
            H(e.target, { appPath: e.appPath, path: h, persistPreferred: t && ie(e) });
          });
        }),
        (t[59] = H),
        (t[60] = A),
        (t[61] = h),
        (t[62] = N))
      : (N = t[62]);
    let P = N,
      F;
    t[63] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((F = () => {
          ne(!0);
        }),
        (t[63] = F))
      : (F = t[63]);
    let me = F,
      U;
    t[64] !== I ||
    t[65] !== v ||
    t[66] !== B ||
    t[67] !== l ||
    t[68] !== V ||
    t[69] !== h ||
    t[70] !== E
      ? ((U =
          I && (E || !B || V)
            ? (0, $.jsx)(Se, { cwd: v, delayMs: E ? 0 : Oe, hostId: l, openPath: h })
            : null),
        (t[64] = I),
        (t[65] = v),
        (t[66] = B),
        (t[67] = l),
        (t[68] = V),
        (t[69] = h),
        (t[70] = E),
        (t[71] = U))
      : (U = t[71]);
    let ge = U,
      W = I && E && V,
      xe = W || i.length > 0 || G,
      J =
        n == null
          ? _
          : w.formatMessage(
              {
                id: `artifactTab.preview.openPrimaryTarget.tooltip`,
                defaultMessage: `Open in {target}`,
                description: `Tooltip for opening an artifact in the primary app`,
              },
              { target: n.label },
            ),
      Ee;
    t[72] === w
      ? (Ee = t[73])
      : ((Ee = w.formatMessage({
          id: `artifactTab.preview.openOptions`,
          defaultMessage: `Open options`,
          description: `Tooltip and accessible label for opening the artifact open options menu`,
        })),
        (t[72] = w),
        (t[73] = Ee));
    let Y = Ee,
      X;
    t[74] !== s ||
    t[75] !== T ||
    t[76] !== l ||
    t[77] !== w ||
    t[78] !== d ||
    t[79] !== h ||
    t[80] !== C ||
    t[81] !== S
      ? ((X =
          d ??
          (le?.workspaceFiles?.saveCopy == null
            ? void 0
            : () => {
                if (s != null) {
                  De({
                    scope: C,
                    analyticsMetadata: s,
                    downloadFailureLabel: w.formatMessage({
                      id: `artifactTab.preview.downloadFailure`,
                      defaultMessage: `Could not download artifact`,
                      description: `Error shown when an artifact download fails`,
                    }),
                    hostId: l,
                    hostKind: T.kind,
                    path: h,
                  });
                  return;
                }
                le.workspaceFiles?.saveCopy?.({ hostId: l, path: h }).catch(() => {
                  S.get(se).danger(
                    w.formatMessage({
                      id: `artifactTab.preview.downloadFailure`,
                      defaultMessage: `Could not download artifact`,
                      description: `Error shown when an artifact download fails`,
                    }),
                  );
                });
              })),
        (t[74] = s),
        (t[75] = T),
        (t[76] = l),
        (t[77] = w),
        (t[78] = d),
        (t[79] = h),
        (t[80] = C),
        (t[81] = S),
        (t[82] = X))
      : (X = t[82]);
    let Z = X,
      Q;
    t[83] !== Z || t[84] !== D
      ? ((Q =
          Z == null
            ? void 0
            : () => {
                D(Z);
              }),
        (t[83] = Z),
        (t[84] = D),
        (t[85] = Q))
      : (Q = t[85]);
    let ke = Q;
    ((K = ge),
      (q = k
        ? (0, $.jsx)(he, {})
        : (0, $.jsx)(pe, {
            color: `outline`,
            size: `toolbar`,
            className: `shrink-0`,
            disabled: a,
            dropdownOpen: ae,
            dropdownAlign: `end`,
            dropdownContentClassName: `pt-2`,
            primaryAriaLabel: n == null ? _ : J,
            secondaryAriaLabel: Y,
            secondaryTooltipContent: Y,
            tooltipContent: J,
            dropdownContent: (0, $.jsxs)($.Fragment, {
              children: [
                i.map((e) =>
                  (0, $.jsxs)(
                    f.Item,
                    {
                      onSelect: () => {
                        P(e, b);
                      },
                      children: [
                        (0, $.jsx)(f.ItemIcon, {
                          children: (0, $.jsx)(`img`, {
                            alt: ``,
                            src: e.icon,
                            className: `icon-sm`,
                          }),
                        }),
                        e.label,
                      ],
                    },
                    e.id,
                  ),
                ),
                W
                  ? (0, $.jsx)(f.Message, {
                      compact: !0,
                      children: (0, $.jsx)(u, {
                        id: `artifactTab.preview.loadingAvailableApps`,
                        defaultMessage: `Loading available apps…`,
                        description: `Dropdown item shown while loading apps that can open an artifact`,
                      }),
                    })
                  : null,
                G
                  ? (0, $.jsx)(ve, {
                      analyticsClickSource:
                        ee.CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_ARTIFACT_PREVIEW_EXPORT_MENU,
                      analyticsContext: r,
                      getAnalyticsContext: c,
                      handleConnectApp: ue,
                      hostId: l,
                      isOpening: k,
                      onCloseDropdown: () => {
                        oe(!1);
                      },
                      onOpeningChange: ce,
                      onBeforeFileRead: p,
                      path: h,
                      title: _e,
                    })
                  : null,
                xe ? (0, $.jsx)(f.Separator, {}) : null,
                (0, $.jsx)(f.Item, {
                  onSelect: M,
                  children: (0, $.jsx)(u, {
                    id: `artifactTab.preview.openInFolder`,
                    defaultMessage: `Open in folder`,
                    description: `Dropdown item for revealing an artifact in the system file manager`,
                  }),
                }),
                E && ye != null ? (0, $.jsx)(Te, { cwd: ye, hostId: l, path: h }) : null,
                ke == null
                  ? null
                  : (0, $.jsx)(f.Item, {
                      onSelect: ke,
                      children: (0, $.jsx)(u, {
                        id: `artifactTab.preview.downloadCopy`,
                        defaultMessage: `Save as…`,
                        description: `Dropdown item for saving an artifact to a user-selected location`,
                      }),
                    }),
              ],
            }),
            onFocus: me,
            onMouseEnter: me,
            onDropdownOpenChange: (e) => {
              (oe(e), e && me());
            },
            onClick: () => {
              if (n == null) {
                M();
                return;
              }
              P(n, !1);
            },
            children: (0, $.jsxs)(`span`, {
              className: `flex items-center gap-1.5`,
              children: [
                n == null
                  ? null
                  : (0, $.jsx)(`img`, { alt: ``, src: n.icon, className: `icon-sm` }),
                n == null || x
                  ? (0, $.jsx)(`span`, {
                      className: `whitespace-nowrap`,
                      children: (0, $.jsx)(u, {
                        id: `artifactTab.preview.open`,
                        defaultMessage: `Open`,
                        description: `Button label that opens an artifact`,
                      }),
                    })
                  : null,
              ],
            }),
          })),
      (t[11] = r),
      (t[12] = z),
      (t[13] = I),
      (t[14] = v),
      (t[15] = a),
      (t[16] = s),
      (t[17] = _e),
      (t[18] = c),
      (t[19] = ye),
      (t[20] = ue),
      (t[21] = B),
      (t[22] = T),
      (t[23] = l),
      (t[24] = w),
      (t[25] = ae),
      (t[26] = V),
      (t[27] = k),
      (t[28] = fe),
      (t[29] = p),
      (t[30] = m),
      (t[31] = d),
      (t[32] = H),
      (t[33] = h),
      (t[34] = b),
      (t[35] = L),
      (t[36] = C),
      (t[37] = S),
      (t[38] = E),
      (t[39] = x),
      (t[40] = R),
      (t[41] = G),
      (t[42] = K),
      (t[43] = q));
  } else ((G = t[41]), (K = t[42]), (q = t[43]));
  let J;
  t[86] !== G || t[87] !== j || t[88] !== M || t[89] !== N || t[90] !== l
    ? ((J =
        G && M != null
          ? (0, $.jsx)(ge, { app: M, hostId: l, onClose: j, onOAuthStarted: N })
          : null),
      (t[86] = G),
      (t[87] = j),
      (t[88] = M),
      (t[89] = N),
      (t[90] = l),
      (t[91] = J))
    : (J = t[91]);
  let Y;
  return (
    t[92] !== J || t[93] !== K || t[94] !== q
      ? ((Y = (0, $.jsxs)($.Fragment, { children: [K, q, J] })),
        (t[92] = J),
        (t[93] = K),
        (t[94] = q),
        (t[95] = Y))
      : (Y = t[95]),
    Y
  );
}
function Ce() {}
function we(e) {
  return e.target !== `fileManager`;
}
function Te(e) {
  let t = (0, X.c)(16),
    { cwd: n, hostId: r, path: i } = e,
    { data: a } = fe(n, P(r), `artifact_preview`),
    o;
  t[0] === n ? (o = t[1]) : ((o = [n]), (t[0] = n), (t[1] = o));
  let s;
  t[2] !== r || t[3] !== o
    ? ((s = { params: { dirs: o, hostId: r }, source: `artifact_preview` }),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s))
    : (s = t[4]);
  let { data: c } = _(z, s),
    l = c?.origins[0],
    d;
  t[5] !== a || t[6] !== n || t[7] !== l || t[8] !== i
    ? ((d =
        l == null ? null : G({ branch: a, cwd: n, path: i, remoteUrl: l.originUrl, root: l.root })),
      (t[5] = a),
      (t[6] = n),
      (t[7] = l),
      (t[8] = i),
      (t[9] = d))
    : (d = t[9]);
  let p = d;
  if (p == null) return null;
  let m;
  t[10] !== p || t[11] !== r
    ? ((m = () => {
        b({ href: p, initiator: `side_panel_menu`, originHostId: r });
      }),
      (t[10] = p),
      (t[11] = r),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(u, {
        id: `artifactTab.preview.openInGitHub`,
        defaultMessage: `Open in GitHub`,
        description: `Dropdown item for opening an artifact in its GitHub repository`,
      })),
      (t[13] = h))
    : (h = t[13]);
  let g;
  return (
    t[14] === m
      ? (g = t[15])
      : ((g = (0, $.jsx)(f.Item, { onSelect: m, children: h })), (t[14] = m), (t[15] = g)),
    g
  );
}
function Ee(e) {
  return S(e) ? (i(e) || k(e) ? Z.default.win32.dirname(e) : Z.default.posix.dirname(e)) : null;
}
function Y(e) {
  let t = (0, X.c)(26),
    { analyticsMetadata: r, hostId: i, onBeforeDownload: a, path: o } = e,
    s = n(O),
    c = y(),
    l = P(i),
    [u, d] = (0, Q.useState)(!1),
    f;
  t[0] === c
    ? (f = t[1])
    : ((f = c.formatMessage({
        id: `artifactTab.preview.download`,
        defaultMessage: `Download`,
        description: `Button label that saves an artifact to a user-selected location on the local computer`,
      })),
      (t[0] = c),
      (t[1] = f));
  let p = f,
    m;
  t[2] === c
    ? (m = t[3])
    : ((m = c.formatMessage({
        id: `artifactTab.preview.downloading`,
        defaultMessage: `Downloading…`,
        description: `Tooltip shown while an artifact download is running`,
      })),
      (t[2] = c),
      (t[3] = m));
  let g = m,
    _;
  t[4] === c
    ? (_ = t[5])
    : ((_ = c.formatMessage({
        id: `artifactTab.preview.downloadFailure`,
        defaultMessage: `Could not download artifact`,
        description: `Error shown when an artifact download fails`,
      })),
      (t[4] = c),
      (t[5] = _));
  let v = _;
  if (le?.workspaceFiles?.saveCopy == null) return null;
  let b;
  t[6] !== r ||
  t[7] !== v ||
  t[8] !== l.kind ||
  t[9] !== i ||
  t[10] !== a ||
  t[11] !== o ||
  t[12] !== s
    ? ((b = async () => {
        (d(!0),
          await De({
            scope: s,
            analyticsMetadata: r,
            downloadFailureLabel: v,
            hostId: i,
            hostKind: l.kind,
            onBeforeDownload: a,
            path: o,
          }).finally(() => {
            d(!1);
          }));
      }),
      (t[6] = r),
      (t[7] = v),
      (t[8] = l.kind),
      (t[9] = i),
      (t[10] = a),
      (t[11] = o),
      (t[12] = s),
      (t[13] = b))
    : (b = t[13]);
  let x = b,
    S = u ? g : p,
    C;
  t[14] === x
    ? (C = t[15])
    : ((C = () => {
        x();
      }),
      (t[14] = x),
      (t[15] = C));
  let w;
  t[16] === u
    ? (w = t[17])
    : ((w = u ? null : (0, $.jsx)(F, { className: `icon-sm` })), (t[16] = u), (t[17] = w));
  let T;
  t[18] !== u || t[19] !== p || t[20] !== C || t[21] !== w
    ? ((T = (0, $.jsx)(ce, {
        "aria-label": p,
        "aria-busy": u,
        color: `ghost`,
        loading: u,
        size: `toolbar`,
        uniform: !0,
        onClick: C,
        children: w,
      })),
      (t[18] = u),
      (t[19] = p),
      (t[20] = C),
      (t[21] = w),
      (t[22] = T))
    : (T = t[22]);
  let E;
  return (
    t[23] !== S || t[24] !== T
      ? ((E = (0, $.jsx)(h, { tooltipContent: S, children: T })),
        (t[23] = S),
        (t[24] = T),
        (t[25] = E))
      : (E = t[25]),
    E
  );
}
async function De({
  analyticsMetadata: e,
  downloadFailureLabel: t,
  hostId: n,
  hostKind: r,
  onBeforeDownload: i,
  path: a,
  scope: o,
}) {
  let s = o.value,
    c =
      s.routeKind === `local-thread`
        ? W(o, {
            conversationId: s.conversationId,
            fallback: e.originatingTurn,
            hostId: n,
            path: a,
          })
        : void 0,
    l = { ...e, originatingTurn: c },
    u = globalThis.crypto.randomUUID();
  w(o, l, { hostKind: r, operationId: u, outcome: L.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_ATTEMPT });
  try {
    if (i != null && (await i()) === !1) return;
    let e = (await le.workspaceFiles?.saveCopy?.({ hostId: n, path: a }))?.path;
    w(o, l, {
      hostKind: r,
      operationId: u,
      outcome:
        e == null
          ? L.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_CANCEL
          : L.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_SUCCESS,
    });
  } catch {
    (w(o, l, { hostKind: r, operationId: u, outcome: L.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_ERROR }),
      o.get(se).danger(t));
  }
}
var X,
  Z,
  Q,
  $,
  Oe,
  ke = e(() => {
    ((X = j()),
      ne(),
      v(),
      (Z = t(T(), 1)),
      s(),
      (Q = t(a(), 1)),
      x(),
      H(),
      U(),
      ye(),
      r(),
      V(),
      E(),
      g(),
      A(),
      p(),
      l(),
      c(),
      K(),
      B(),
      N(),
      I(),
      q(),
      oe(),
      ue(),
      R(),
      m(),
      d(),
      C(),
      _e(),
      ($ = ae()),
      M(),
      (Oe = 150));
  });
export { J as n, ke as r, Y as t };
//# sourceMappingURL=artifact-preview-header-abbff5f8a3ae.js.map
