import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  BE as r,
  DE as i,
  Ez as a,
  FBt as o,
  LNt as s,
  Oz as c,
  PBt as l,
  QU as u,
  Qst as d,
  Rrt as f,
  SB as p,
  TY as m,
  Vrt as h,
  XOt as g,
  XS as ee,
  Y3 as te,
  Z3 as _,
  Z6 as v,
  ZSt as y,
  ZU as ne,
  ast as b,
  bst as x,
  ck as re,
  i7 as ie,
  iCt as ae,
  ist as oe,
  jH as se,
  nCt as ce,
  nD as le,
  okt as ue,
  qrt as S,
  rD as de,
  rk as C,
  sct as fe,
  tit as pe,
  tk as me,
  tkt as w,
  wB as he,
  wE as ge,
  w_t as _e,
  xst as ve,
  xz as ye,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CRn as be,
  Cjr as xe,
  E7t as T,
  Gb as Se,
  Hpr as E,
  KBr as Ce,
  MOr as we,
  POr as Te,
  T7t as Ee,
  Ub as De,
  Upr as Oe,
  Wb as ke,
  _7t as Ae,
  _k as je,
  aDr as Me,
  b7t as Ne,
  bRn as Pe,
  dbn as Fe,
  fbn as Ie,
  iDr as Le,
  js as D,
  o8t as Re,
  p8t as O,
  qBr as ze,
  v5t as k,
  v7t as Be,
  vk as A,
  xjr as Ve,
  y5t as He,
  y7t as Ue,
  zOr as We,
} from "./app-initial-ad16eaadf81f.js";
import { ag as Ge, ig as j } from "./app-primary-3e00728c2a4c.js";
import { n as Ke, t as M } from "./use-app-connect-flow-7fc070fa8fd7.js";
import {
  a as qe,
  c as N,
  n as Je,
  o as P,
  r as Ye,
  s as Xe,
  t as Ze,
} from "./download-submenu-1962e2393827.js";
import { n as Qe, r as $e, t as et } from "./save-cloud-file-copy-7b1908f46fa9.js";
import { n as tt, t as nt } from "./download-file-manager-message-fc15b36f8c4f.js";
import { i as rt, r as it, t as at } from "./use-target-apps-cd0cca389b7c.js";
import { n as ot, r as F } from "./artifact-originating-turn-f3d50650c1c0.js";
function I(e) {
  let n = (0, ft.c)(157),
    {
      analyticsContext: o,
      artifactKind: s,
      children: c,
      cwd: l,
      disabled: f,
      editorMenuItems: m,
      downloadAnalyticsMetadata: h,
      downloadId: g,
      downloadMenuItems: ee,
      downloadPending: _,
      environmentId: v,
      exportFile: y,
      getAnalyticsContext: b,
      hostId: x,
      isDirectory: re,
      libraryBreadcrumb: ce,
      tooltipBreadcrumb: de,
      onDownload: fe,
      onDownloadAttempt: pe,
      onBeforeFileAction: he,
      onBeforeOpen: be,
      getCurrentFile: T,
      readUploadFile: Se,
      path: E,
      tabId: Ce,
      persistPreferredTarget: Ee,
      showDownloadAction: Ne,
      showLabel: Pe,
      title: Fe,
      variant: Ie,
      renderTitleMenu: Le,
      renderMenuItems: D,
      open: Re,
      onOpenChange: O,
    } = e,
    k = l === void 0 ? null : l,
    A = re !== void 0 && re,
    Ve = Ee !== void 0 && Ee,
    We = Ne === void 0 || Ne,
    Ge = Pe !== void 0 && Pe,
    j = Ie === void 0 ? `default` : Ie,
    M = t(d),
    N = t(we),
    Je = (0, R.useId)(),
    P = g ?? Je,
    Qe;
  n[0] === P ? (Qe = n[1]) : ((Qe = { mutationKey: [`artifact-download`, P] }), (n[0] = P), (n[1] = Qe));
  let tt = ve(Qe) > 0,
    { platform: it } = Oe(),
    ot = ae(je),
    F = ue(),
    I = ze(x),
    L = x === _e,
    [B, mt] = (0, R.useState)(!1),
    [ht, gt] = (0, R.useState)(!1),
    V = Re ?? ht,
    _t;
  n[2] !== Re || n[3] !== O
    ? ((_t = (e) => {
        (Re ?? gt(e), O?.(e));
      }),
      (n[2] = Re),
      (n[3] = O),
      (n[4] = _t))
    : (_t = n[4]);
  let H = _t,
    [vt, yt] = (0, R.useState)(!1),
    bt;
  n[5] === x ? (bt = n[6]) : ((bt = { hostId: x }), (n[5] = x), (n[6] = bt));
  let {
      clearConnectingApp: xt,
      connectingApp: St,
      handleAppConnectOAuthStarted: Ct,
      handleConnectApp: wt,
    } = Ke(bt),
    Tt;
  n[7] === T
    ? (Tt = n[8])
    : ((Tt = T == null ? void 0 : async () => (await T()).path), (n[7] = T), (n[8] = Tt));
  let U = Tt,
    Et;
  n[9] !== k || n[10] !== U || n[11] !== x || n[12] !== E
    ? ((Et = { cwd: k, getOpenPath: U, hostId: x, openPath: E }),
      (n[9] = k),
      (n[10] = U),
      (n[11] = x),
      (n[12] = E),
      (n[13] = Et))
    : (Et = n[13]);
  let {
      canLoadTargets: W,
      preferredTarget: Dt,
      targets: Ot,
      availableTargets: kt,
      mode: At,
      hasLoadedTargets: jt,
      isLoadingTargets: Mt,
      open: Nt,
    } = rt(Et),
    G = a(E),
    Pt;
  n[14] !== k || n[15] !== E ? ((Pt = k ?? ye(E)), (n[14] = k), (n[15] = E), (n[16] = Pt)) : (Pt = n[16]);
  let Ft = Pt,
    It = Be({ targets: Ot, availableTargets: kt, includeHiddenTargets: !0, mode: At }),
    K = L ? null : Ue({ preferredTarget: Dt, targets: Ot, availableTargets: kt, mode: At }),
    Lt = It.filter(lt),
    Rt;
  n[17] === Ot ? (Rt = n[18]) : ((Rt = Ot.find(ct)), (n[17] = Ot), (n[18] = Rt));
  let zt = Rt,
    Bt = j === `title` || j === `download` ? `base` : `sm`,
    Vt = xe(`2546594521`),
    Ht;
  n[19] !== A || n[20] !== E
    ? ((Ht = A ? null : Xe(E)), (n[19] = A), (n[20] = E), (n[21] = Ht))
    : (Ht = n[21]);
  let Ut = Ht,
    Wt = !Vt && Ut != null,
    Gt;
  n[22] === F
    ? (Gt = n[23])
    : ((Gt = F.formatMessage({
        id: `artifactTab.preview.open`,
        defaultMessage: `Open`,
        description: `Button label that opens an artifact`,
      })),
      (n[22] = F),
      (n[23] = Gt));
  let Kt = Gt,
    qt;
  n[24] === he
    ? (qt = n[25])
    : ((qt = (e) => {
        let t = he?.();
        if (t == null) {
          e();
          return;
        }
        Promise.resolve(t).then((t) => {
          t !== !1 && e();
        }, st);
      }),
      (n[24] = he),
      (n[25] = qt));
  let q = qt,
    Jt;
  n[26] !== T || n[27] !== x || n[28] !== F || n[29] !== be || n[30] !== E || n[31] !== q || n[32] !== M
    ? ((Jt = (e) => {
        q(() => {
          let t = () => {
              if (T == null) {
                e({ hostId: x, path: E });
                return;
              }
              T()
                .then(e)
                .catch(() => {
                  M.get(S).danger(
                    F.formatMessage({
                      id: `artifactTab.preview.exportFailure`,
                      defaultMessage: `Could not export artifact`,
                      description: `Error shown when preparing the current artifact for another app fails`,
                    }),
                    { errorAnalytics: { toastId: `artifactTab.preview.exportFailure` } },
                  );
                });
            },
            n = be?.();
          if (n == null) {
            t();
            return;
          }
          Promise.resolve(n).then(t, t);
        });
      }),
      (n[26] = T),
      (n[27] = x),
      (n[28] = F),
      (n[29] = be),
      (n[30] = E),
      (n[31] = q),
      (n[32] = M),
      (n[33] = Jt))
    : (Jt = n[33]);
  let J = Jt,
    Yt;
  n[34] !== k || n[35] !== v || n[36] !== J || n[37] !== N || n[38] !== M
    ? ((Yt = () => {
        J((e) => {
          M.get(He).mutate({
            cwd: k,
            conversationId: Te(N.value) ?? void 0,
            environmentId: v,
            hostId: e.hostId,
            path: e.path,
            target: `fileManager`,
          });
        });
      }),
      (n[34] = k),
      (n[35] = v),
      (n[36] = J),
      (n[37] = N),
      (n[38] = M),
      (n[39] = Yt))
    : (Yt = n[39]);
  let Xt = Yt,
    Zt;
  n[40] !== v || n[41] !== Nt || n[42] !== J
    ? ((Zt = (e, t) => {
        J((n) => {
          Nt(e.target, { appPath: e.appPath, environmentId: v, path: n.path, persistPreferred: t && Ae(e) });
        });
      }),
      (n[40] = v),
      (n[41] = Nt),
      (n[42] = J),
      (n[43] = Zt))
    : (Zt = n[43]);
  let Qt = Zt,
    $t;
  n[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($t = () => {
        mt(!0);
      }),
      (n[44] = $t))
    : ($t = n[44]);
  let Y = $t,
    en;
  n[45] !== W ||
  n[46] !== k ||
  n[47] !== T ||
  n[48] !== U ||
  n[49] !== jt ||
  n[50] !== x ||
  n[51] !== L ||
  n[52] !== Mt ||
  n[53] !== E ||
  n[54] !== B ||
  n[55] !== j
    ? ((en =
        j !== `title` && !L && W && (B || (T == null && (!jt || Mt)))
          ? (0, z.jsx)(at, { cwd: k, getOpenPath: U, delayMs: B ? 0 : pt, hostId: x, openPath: E })
          : null),
      (n[45] = W),
      (n[46] = k),
      (n[47] = T),
      (n[48] = U),
      (n[49] = jt),
      (n[50] = x),
      (n[51] = L),
      (n[52] = Mt),
      (n[53] = E),
      (n[54] = B),
      (n[55] = j),
      (n[56] = en))
    : (en = n[56]);
  let tn = en,
    nn = W && B && Mt,
    rn = nn || Lt.length > 0 || Wt,
    an =
      K == null
        ? Kt
        : F.formatMessage(
            {
              id: `artifactTab.preview.openPrimaryTarget.tooltip`,
              defaultMessage: `Open in {target}`,
              description: `Tooltip for opening an artifact in the primary app`,
            },
            { target: K.label },
          ),
    on;
  n[57] === F
    ? (on = n[58])
    : ((on = F.formatMessage({
        id: `artifactTab.preview.openOptions`,
        defaultMessage: `Open options`,
        description: `Tooltip and accessible label for opening the artifact open options menu`,
      })),
      (n[57] = F),
      (n[58] = on));
  let sn = on,
    cn;
  n[59] !== k ||
  n[60] !== h ||
  n[61] !== v ||
  n[62] !== I ||
  n[63] !== x ||
  n[64] !== F ||
  n[65] !== L ||
  n[66] !== fe ||
  n[67] !== E ||
  n[68] !== N ||
  n[69] !== M
    ? ((cn =
        fe ??
        (L
          ? async () => {
              await $e(
                M,
                et(M, { conversationId: Te(N.value) ?? void 0, cwd: k, environmentId: v, path: E }),
              );
            }
          : void 0) ??
        (oe?.workspaceFiles?.saveCopy == null
          ? void 0
          : () => {
              if (h != null) {
                dt({
                  scope: N,
                  analyticsMetadata: h,
                  downloadFailureLabel: F.formatMessage({
                    id: `artifactTab.preview.downloadFailure`,
                    defaultMessage: `Could not download artifact`,
                    description: `Error shown when an artifact download fails`,
                  }),
                  hostId: x,
                  hostKind: I.kind,
                  path: E,
                });
                return;
              }
              oe.workspaceFiles?.saveCopy?.({ hostId: x, path: E }).catch(() => {
                M.get(S).danger(
                  F.formatMessage({
                    id: `artifactTab.preview.downloadFailure`,
                    defaultMessage: `Could not download artifact`,
                    description: `Error shown when an artifact download fails`,
                  }),
                  { errorAnalytics: { toastId: `artifactTab.preview.downloadFailure` } },
                );
              });
            })),
      (n[59] = k),
      (n[60] = h),
      (n[61] = v),
      (n[62] = I),
      (n[63] = x),
      (n[64] = F),
      (n[65] = L),
      (n[66] = fe),
      (n[67] = E),
      (n[68] = N),
      (n[69] = M),
      (n[70] = cn))
    : (cn = n[70]);
  let ln = cn,
    un;
  n[71] !== ln ||
  n[72] !== x ||
  n[73] !== F ||
  n[74] !== A ||
  n[75] !== pe ||
  n[76] !== E ||
  n[77] !== q ||
  n[78] !== M
    ? ((un =
        A || ln == null
          ? void 0
          : () => {
              (pe?.(),
                q(() => {
                  Promise.resolve(ln({ hostId: x, path: E })).catch(() => {
                    M.get(S).danger(
                      F.formatMessage({
                        id: `artifactTab.preview.downloadFailure`,
                        defaultMessage: `Could not download artifact`,
                        description: `Error shown when an artifact download fails`,
                      }),
                      { errorAnalytics: { toastId: `artifactTab.preview.downloadFailure` } },
                    );
                  });
                }));
            }),
      (n[71] = ln),
      (n[72] = x),
      (n[73] = F),
      (n[74] = A),
      (n[75] = pe),
      (n[76] = E),
      (n[77] = q),
      (n[78] = M),
      (n[79] = un))
    : (un = n[79]);
  let dn = un,
    fn =
      Ut == null
        ? null
        : (0, z.jsx)(qe, {
            labelVariant: j === `download` ? `app` : `action`,
            analyticsClickSource:
              ie.CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_ARTIFACT_PREVIEW_EXPORT_MENU,
            analyticsContext: o,
            getAnalyticsContext: b,
            handleConnectApp: wt,
            hostId: x,
            iconSize: Bt,
            isOpening: vt,
            keepOpenWhileOpening: !0,
            onCloseDropdown: () => {
              H(!1);
            },
            onOpeningChange: yt,
            onBeforeFileRead: he,
            ...(Se == null ? { path: E } : { readUploadFile: Se, sourceId: E, targetType: Ut }),
            title: G,
          }),
    pn = L
      ? (0, z.jsx)(C.Item, { onSelect: Xt, children: Kt })
      : (0, z.jsxs)(z.Fragment, {
          children: [
            j === `download` ? fn : null,
            !A && T == null && ot?.({ hostId: x, path: E, tabId: Ce, withPreparedFile: J }),
            Lt.map((e) =>
              (0, z.jsx)(
                C.Item,
                {
                  disabled: f || tt || vt,
                  leftIcon: (0, z.jsx)(r, {
                    size: Bt,
                    children: (0, z.jsx)(`img`, { alt: ``, src: e.icon, className: `size-full` }),
                  }),
                  onSelect: () => {
                    (Qt(e, Ve), H(!1));
                  },
                  children: e.label,
                },
                e.id,
              ),
            ),
            nn
              ? (0, z.jsx)(C.Message, {
                  compact: !0,
                  children: (0, z.jsx)(w, {
                    id: `artifactTab.preview.loadingAvailableApps`,
                    defaultMessage: `Loading available apps…`,
                    description: `Dropdown item shown while loading apps that can open an artifact`,
                  }),
                })
              : null,
            j === `download` ? null : fn,
            Se == null || W
              ? (0, z.jsxs)(z.Fragment, {
                  children: [
                    rn && j !== `download` ? (0, z.jsx)(C.Separator, {}) : null,
                    (0, z.jsx)(C.Item, {
                      disabled: f || tt || vt,
                      leftIcon:
                        j === `download`
                          ? (0, z.jsx)(r, {
                              size: Bt,
                              children:
                                zt == null
                                  ? (0, z.jsx)(p, { icon: { 16: ne, 20: u } })
                                  : (0, z.jsx)(`img`, { alt: ``, src: zt.icon, className: `size-full` }),
                            })
                          : void 0,
                      onSelect: () => {
                        (Xt(), H(!1));
                      },
                      children:
                        j === `download`
                          ? (0, z.jsx)(w, { ...nt(it) })
                          : (0, z.jsx)(w, {
                              id: `artifactTab.preview.openInFolder`,
                              defaultMessage: `Open in folder`,
                              description: `Dropdown item for revealing an artifact in the system file manager`,
                            }),
                    }),
                  ],
                })
              : null,
            T == null && B && Ft != null
              ? (0, z.jsx)(ut, { onSelect: () => H(!1), cwd: Ft, hostId: x, path: E })
              : null,
          ],
        }),
    mn = null;
  dn != null &&
    (mn =
      j === `download`
        ? (0, z.jsx)(ke, { fileName: G, disabled: f, onSelect: dn })
        : (0, z.jsx)(C.Item, {
            disabled: f,
            onSelect: dn,
            children: (0, z.jsx)(w, {
              id: `artifactTab.preview.downloadCopy`,
              defaultMessage: `Save as…`,
              description: `Dropdown item for saving an artifact to a user-selected location`,
            }),
          }));
  let X;
  if (
    (G.toLowerCase().endsWith(`.pptx`) ? (X = `pptx`) : G.toLowerCase().endsWith(`.xlsx`) && (X = `xlsx`),
    j === `download` && X != null && y !== void 0)
  ) {
    let e = f || vt,
      t =
        y == null
          ? null
          : async (e) => (
              pe?.(),
              { bytes: await y(e), fileName: e === `office` ? G : G.replace(/\.(pptx|xlsx)$/i, `.pdf`) }
            ),
      r;
    n[80] !== h || n[81] !== I || n[82] !== x || n[83] !== F || n[84] !== E || n[85] !== N
      ? ((r =
          h == null
            ? void 0
            : (e) =>
                dt({
                  scope: N,
                  analyticsMetadata: h,
                  downloadFailureLabel: F.formatMessage({
                    id: `artifactTab.preview.downloadFailure`,
                    defaultMessage: `Could not download artifact`,
                    description: `Error shown when an artifact download fails`,
                  }),
                  file: e,
                  hostId: x,
                  hostKind: I.kind,
                  path: E,
                })),
        (n[80] = h),
        (n[81] = I),
        (n[82] = x),
        (n[83] = F),
        (n[84] = E),
        (n[85] = N),
        (n[86] = r))
      : (r = n[86]);
    let i;
    (n[87] !== X || n[88] !== P || n[89] !== e || n[90] !== t || n[91] !== r
      ? ((i = (0, z.jsx)(Ze, {
          variant: `items`,
          disabled: e,
          downloadId: P,
          format: X,
          exportFile: t,
          saveFile: r,
        })),
        (n[87] = X),
        (n[88] = P),
        (n[89] = e),
        (n[90] = t),
        (n[91] = r),
        (n[92] = i))
      : (i = n[92]),
      (mn = i));
  }
  let hn = We ? mn : null,
    gn;
  n[93] !== c || n[94] !== pn || n[95] !== hn
    ? ((gn = (0, z.jsxs)(z.Fragment, { children: [pn, hn, c] })),
      (n[93] = c),
      (n[94] = pn),
      (n[95] = hn),
      (n[96] = gn))
    : (gn = n[96]);
  let _n = gn,
    vn;
  n[97] !== D || n[98] !== _n
    ? ((vn = D == null ? _n : D(_n)), (n[97] = D), (n[98] = _n), (n[99] = vn))
    : (vn = n[99]);
  let Z = vn,
    Q;
  if (j === `download`) {
    let e = _ || tt || vt,
      t;
    n[100] === H
      ? (t = n[101])
      : ((t = (e) => {
          (H(e), e && Y());
        }),
        (n[100] = H),
        (n[101] = t));
    let r = ee ?? mn,
      i = L || T == null || W || Wt ? pn : void 0,
      a;
    (n[102] !== f || n[103] !== V || n[104] !== e || n[105] !== t || n[106] !== r || n[107] !== i
      ? ((a = (0, z.jsx)(De, {
          disabled: f,
          pending: e,
          open: V,
          onOpenChange: t,
          downloadItems: r,
          openItems: i,
        })),
        (n[102] = f),
        (n[103] = V),
        (n[104] = e),
        (n[105] = t),
        (n[106] = r),
        (n[107] = i),
        (n[108] = a))
      : (a = n[108]),
      (Q = a));
  } else if (j === `title`) {
    let e = {
      artifactKind: s,
      editorMenuItems: m,
      fileName: G,
      libraryBreadcrumb: ce,
      tooltipBreadcrumb: de,
      title: Fe ?? G,
      open: V,
      onOpenChange: H,
      children: D == null ? c : D(c),
    };
    Q = Le == null ? (0, z.jsx)(ge, { ...e }) : Le(e);
  } else if (j === `menu`) {
    let e;
    n[109] === H
      ? (e = n[110])
      : ((e = (e) => {
          (H(e), e && Y());
        }),
        (n[109] = H),
        (n[110] = e));
    let t, r;
    n[111] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, z.jsx)(w, {
          id: `artifactTab.preview.openIn`,
          defaultMessage: `Open in`,
          description: `Button that opens the menu of apps and export actions for an artifact`,
        })),
        (r = (0, z.jsx)(se, {})),
        (n[111] = t),
        (n[112] = r))
      : ((t = n[111]), (r = n[112]));
    let i;
    n[113] === f
      ? (i = n[114])
      : ((i = (0, z.jsxs)(te, {
          className: `pointer-events-auto shrink-0`,
          color: `outline`,
          size: `toolbar`,
          disabled: f,
          onFocus: Y,
          onMouseEnter: Y,
          children: [t, r],
        })),
        (n[113] = f),
        (n[114] = i));
    let a;
    (n[115] !== V || n[116] !== Z || n[117] !== e || n[118] !== i
      ? ((a = (0, z.jsx)(me, {
          align: `end`,
          surface: `opaque`,
          open: V,
          onOpenChange: e,
          triggerButton: i,
          children: Z,
        })),
        (n[115] = V),
        (n[116] = Z),
        (n[117] = e),
        (n[118] = i),
        (n[119] = a))
      : (a = n[119]),
      (Q = a));
  } else {
    let e = `toolbar`;
    j === `imageTools` ? (e = `imageToolbar`) : j === `compact` && (e = `composerSm`);
    let t = j === `viewer` ? i : le,
      r = j === "default" ? `outline` : `ghostActive`,
      a = K == null ? Kt : an,
      o;
    n[120] === H
      ? (o = n[121])
      : ((o = (e) => {
          (H(e), e && Y());
        }),
        (n[120] = H),
        (n[121] = o));
    let s;
    n[122] !== Xt || n[123] !== Qt || n[124] !== K
      ? ((s = () => {
          if (K == null) {
            Xt();
            return;
          }
          Qt(K, !1);
        }),
        (n[122] = Xt),
        (n[123] = Qt),
        (n[124] = K),
        (n[125] = s))
      : (s = n[125]);
    let c;
    n[126] === K
      ? (c = n[127])
      : ((c = K == null ? null : (0, z.jsx)(`img`, { alt: ``, src: K.icon, className: `icon-sm` })),
        (n[126] = K),
        (n[127] = c));
    let l;
    n[128] !== K || n[129] !== Ge
      ? ((l =
          K == null || Ge
            ? (0, z.jsx)(`span`, {
                className: `whitespace-nowrap`,
                children: (0, z.jsx)(w, {
                  id: `artifactTab.preview.open`,
                  defaultMessage: `Open`,
                  description: `Button label that opens an artifact`,
                }),
              })
            : null),
        (n[128] = K),
        (n[129] = Ge),
        (n[130] = l))
      : (l = n[130]);
    let u;
    n[131] !== c || n[132] !== l
      ? ((u = (0, z.jsxs)(`span`, { className: `flex items-center gap-1.5`, children: [c, l] })),
        (n[131] = c),
        (n[132] = l),
        (n[133] = u))
      : (u = n[133]);
    let d;
    (n[134] !== t ||
    n[135] !== e ||
    n[136] !== f ||
    n[137] !== V ||
    n[138] !== Z ||
    n[139] !== sn ||
    n[140] !== an ||
    n[141] !== r ||
    n[142] !== a ||
    n[143] !== o ||
    n[144] !== s ||
    n[145] !== u
      ? ((d = (0, z.jsx)(t, {
          color: r,
          size: e,
          className: `shrink-0`,
          disabled: f,
          dropdownOpen: V,
          dropdownAlign: `end`,
          dropdownContentClassName: `pt-2`,
          primaryAriaLabel: a,
          secondaryAriaLabel: sn,
          secondaryTooltipContent: sn,
          tooltipContent: an,
          dropdownContent: Z,
          onFocus: Y,
          onMouseEnter: Y,
          onDropdownOpenChange: o,
          onClick: s,
          children: u,
        })),
        (n[134] = t),
        (n[135] = e),
        (n[136] = f),
        (n[137] = V),
        (n[138] = Z),
        (n[139] = sn),
        (n[140] = an),
        (n[141] = r),
        (n[142] = a),
        (n[143] = o),
        (n[144] = s),
        (n[145] = u),
        (n[146] = d))
      : (d = n[146]),
      (Q = d));
  }
  if (A && (L || (v != null && Me(x)))) return null;
  let $;
  n[147] !== Wt || n[148] !== xt || n[149] !== St || n[150] !== Ct || n[151] !== x
    ? (($ =
        Wt && St != null ? (0, z.jsx)(Ye, { app: St, hostId: x, onClose: xt, onOAuthStarted: Ct }) : null),
      (n[147] = Wt),
      (n[148] = xt),
      (n[149] = St),
      (n[150] = Ct),
      (n[151] = x),
      (n[152] = $))
    : ($ = n[152]);
  let yn;
  return (
    n[153] !== Q || n[154] !== $ || n[155] !== tn
      ? ((yn = (0, z.jsxs)(z.Fragment, { children: [tn, Q, $] })),
        (n[153] = Q),
        (n[154] = $),
        (n[155] = tn),
        (n[156] = yn))
      : (yn = n[156]),
    yn
  );
}
function st() {}
function ct(e) {
  return e.target === `fileManager`;
}
function lt(e) {
  return e.target !== `fileManager`;
}
function ut(e) {
  let t = (0, ft.c)(17),
    { onSelect: n, cwd: r, hostId: i, path: a } = e,
    o = ze(i),
    { data: s } = Ge(r, o, `artifact_preview`),
    c;
  t[0] === r ? (c = t[1]) : ((c = [r]), (t[0] = r), (t[1] = c));
  let l;
  t[2] !== i || t[3] !== c
    ? ((l = { params: { dirs: c, hostId: i }, source: `artifact_preview` }),
      (t[2] = i),
      (t[3] = c),
      (t[4] = l))
    : (l = t[4]);
  let { data: u } = ce(Fe, l),
    d = u?.origins[0],
    f;
  t[5] !== s || t[6] !== r || t[7] !== d || t[8] !== a
    ? ((f = d == null ? null : Ee({ branch: s, cwd: r, path: a, remoteUrl: d.originUrl, root: d.root })),
      (t[5] = s),
      (t[6] = r),
      (t[7] = d),
      (t[8] = a),
      (t[9] = f))
    : (f = t[9]);
  let p = f;
  if (p == null) return null;
  let m;
  t[10] !== p || t[11] !== i || t[12] !== n
    ? ((m = () => {
        (be({ href: p, initiator: `side_panel_menu`, originHostId: i }), n());
      }),
      (t[10] = p),
      (t[11] = i),
      (t[12] = n),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, z.jsx)(w, {
        id: `artifactTab.preview.openInGitHub`,
        defaultMessage: `Open in GitHub`,
        description: `Dropdown item for opening an artifact in its GitHub repository`,
      })),
      (t[14] = h))
    : (h = t[14]);
  let g;
  return (
    t[15] === m
      ? (g = t[16])
      : ((g = (0, z.jsx)(C.Item, { onSelect: m, children: h })), (t[15] = m), (t[16] = g)),
    g
  );
}
function L(e) {
  let n = (0, ft.c)(26),
    {
      analyticsMetadata: r,
      hostId: i,
      onBeforeDownload: a,
      onDownload: o,
      onDownloadAttempt: s,
      onBeforeOpen: c,
      analyticsContext: l,
      getAnalyticsContext: u,
      environmentId: d,
      tabId: f,
      path: p,
    } = e,
    m = t(we),
    h = ue(),
    g = ze(i),
    [ee, te] = (0, R.useState)(!1),
    _;
  n[0] === h
    ? (_ = n[1])
    : ((_ = h.formatMessage({
        id: `artifactTab.preview.downloadFailure`,
        defaultMessage: `Could not download artifact`,
        description: `Error shown when an artifact download fails`,
      })),
      (n[0] = h),
      (n[1] = _));
  let v = _;
  if (o == null && oe?.workspaceFiles?.saveCopy == null) return null;
  let y;
  n[2] !== r ||
  n[3] !== v ||
  n[4] !== g ||
  n[5] !== i ||
  n[6] !== a ||
  n[7] !== o ||
  n[8] !== s ||
  n[9] !== p ||
  n[10] !== m
    ? ((y = () => {
        (s?.(),
          te(!0),
          (async () => {
            o == null
              ? r != null &&
                (await dt({
                  scope: m,
                  analyticsMetadata: r,
                  downloadFailureLabel: v,
                  hostId: i,
                  hostKind: g.kind,
                  onBeforeDownload: a,
                  path: p,
                }))
              : (a == null || (await a()) !== !1) && (await o({ hostId: i, path: p }));
          })()
            .catch(() => {
              m.get(S).danger(v, { errorAnalytics: { toastId: `artifactTab.preview.downloadFailure` } });
            })
            .finally(() => {
              te(!1);
            }));
      }),
      (n[2] = r),
      (n[3] = v),
      (n[4] = g),
      (n[5] = i),
      (n[6] = a),
      (n[7] = o),
      (n[8] = s),
      (n[9] = p),
      (n[10] = m),
      (n[11] = y))
    : (y = n[11]);
  let ne = y,
    b;
  n[12] !== ne || n[13] !== p
    ? ((b = (0, z.jsx)(ke, { fileName: p, onSelect: ne })), (n[12] = ne), (n[13] = p), (n[14] = b))
    : (b = n[14]);
  let x;
  return (
    n[15] !== l ||
    n[16] !== d ||
    n[17] !== u ||
    n[18] !== i ||
    n[19] !== ee ||
    n[20] !== a ||
    n[21] !== c ||
    n[22] !== p ||
    n[23] !== b ||
    n[24] !== f
      ? ((x = (0, z.jsx)(I, {
          hostId: i,
          path: p,
          variant: `download`,
          downloadPending: ee,
          onBeforeFileAction: a,
          onBeforeOpen: c,
          analyticsContext: l,
          getAnalyticsContext: u,
          environmentId: d,
          tabId: f,
          downloadMenuItems: b,
        })),
        (n[15] = l),
        (n[16] = d),
        (n[17] = u),
        (n[18] = i),
        (n[19] = ee),
        (n[20] = a),
        (n[21] = c),
        (n[22] = p),
        (n[23] = b),
        (n[24] = f),
        (n[25] = x))
      : (x = n[25]),
    x
  );
}
async function dt({
  analyticsMetadata: e,
  downloadFailureLabel: t,
  file: n,
  hostId: r,
  hostKind: i,
  onBeforeDownload: a,
  path: o,
  scope: s,
}) {
  let c = s.value,
    l =
      c.routeKind === `local-thread`
        ? F(s, { conversationId: c.conversationId, fallback: e.originatingTurn, hostId: r, path: o })
        : void 0,
    u = { ...e, originatingTurn: l },
    d = globalThis.crypto.randomUUID();
  O(s, u, { hostKind: i, operationId: d, outcome: v.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_ATTEMPT });
  try {
    if (a != null && (await a()) === !1) {
      O(s, u, { hostKind: i, operationId: d, outcome: v.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_BLOCKED });
      return;
    }
    let e = oe.workspaceFiles?.saveCopy?.(n ?? { hostId: r, path: o }),
      t = e == null ? void 0 : (await pe(e)).path;
    O(s, u, {
      hostKind: i,
      operationId: d,
      outcome:
        t == null ? v.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_CANCEL : v.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_SUCCESS,
    });
  } catch {
    (O(s, u, { hostKind: i, operationId: d, outcome: v.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_ERROR }),
      s
        .get(S)
        .danger(t, { errorAnalytics: { toastId: `artifactPreviewHeader.saveArtifactCopyWithAnalytics` } }));
  }
}
var ft, R, z, pt;
function B() {
  return (B = e(() => {
    ((ft = l()),
      f(),
      x(),
      y(),
      fe(),
      (R = o()),
      g(),
      tt(),
      Le(),
      M(),
      N(),
      P(),
      _(),
      de(),
      re(),
      Pe(),
      m(),
      he(),
      h(),
      A(),
      Qe(),
      k(),
      Ie(),
      T(),
      j(),
      E(),
      Ne(),
      it(),
      b(),
      n(),
      We(),
      Ce(),
      Ve(),
      c(),
      ee(),
      Re(),
      ot(),
      Se(),
      Je(),
      (z = s()),
      D(),
      (pt = 150));
  }))();
}
export { I as n, B as r, L as t };
//# sourceMappingURL=artifact-preview-header-5bfab4685b80.js.map
