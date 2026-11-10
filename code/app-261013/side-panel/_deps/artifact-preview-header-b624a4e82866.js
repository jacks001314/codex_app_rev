import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  AR as r,
  CO as i,
  CS as a,
  Cot as o,
  Dz as s,
  FR as c,
  FV as l,
  IDt as u,
  Ixt as d,
  Kat as f,
  LR as p,
  ME as m,
  NE as h,
  Pxt as g,
  Rnt as _,
  Rot as v,
  TJ as y,
  TO as b,
  VDt as ee,
  Vxt as te,
  aE as ne,
  eU as re,
  gE as x,
  hot as ie,
  i5 as ae,
  jDt as oe,
  kz as se,
  lgt as ce,
  lot as le,
  qat as S,
  rst as ue,
  t3 as de,
  t6 as C,
  tE as fe,
  tU as pe,
  vzt as me,
  wot as he,
  xMt as ge,
  yzt as _e,
  znt as ve,
  zot as ye,
  zxt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  $lr as be,
  BTt as xe,
  B_n as T,
  Cb as Se,
  Cwr as E,
  FO as Ce,
  HTt as we,
  IO as Te,
  JPn as Ee,
  JTt as De,
  Os as Oe,
  RSr as ke,
  Rwt as D,
  Sb as Ae,
  VTt as je,
  V_n as O,
  ZPn as Me,
  _Vt as Ne,
  eDr as k,
  eur as Pe,
  gwr as Fe,
  jwt as A,
  nDr as Ie,
  oFr as Le,
  qTt as Re,
  sFr as ze,
  vVt as Be,
  vwr as Ve,
  xb as He,
  zSr as Ue,
  zTt as We,
} from "./app-initial-5851df3f6cb1.js";
import { Uh as Ge, Wh as j } from "./app-primary-fe8a450b3b04.js";
import { n as Ke, t as M } from "./use-app-connect-flow-7088479fda99.js";
import {
  a as qe,
  c as N,
  n as Je,
  o as P,
  r as Ye,
  s as Xe,
  t as Ze,
} from "./download-submenu-2fee9f2333f7.js";
import { n as Qe, r as $e, t as et } from "./save-cloud-file-copy-a8fdb6c780fc.js";
import { n as tt, t as nt } from "./download-file-manager-message-b11c6f057796.js";
import { i as rt, r as it, t as at } from "./use-target-apps-df427db284a8.js";
import { n as ot, r as F } from "./artifact-originating-turn-4517ac8fac03.js";
function I(e) {
  let n = (0, ft.c)(157),
    {
      analyticsContext: a,
      artifactKind: p,
      children: h,
      cwd: g,
      disabled: _,
      editorMenuItems: v,
      downloadAnalyticsMetadata: y,
      downloadId: oe,
      downloadMenuItems: se,
      downloadPending: le,
      environmentId: S,
      exportFile: ue,
      getAnalyticsContext: de,
      hostId: C,
      isDirectory: me,
      libraryBreadcrumb: he,
      tooltipBreadcrumb: ge,
      onDownload: _e,
      onDownloadAttempt: ve,
      onBeforeFileAction: w,
      onBeforeOpen: be,
      getCurrentFile: T,
      readUploadFile: Se,
      path: E,
      tabId: we,
      persistPreferredTarget: Te,
      showDownloadAction: Ee,
      showLabel: De,
      title: Oe,
      variant: ke,
      renderTitleMenu: D,
      renderMenuItems: O,
      open: Me,
      onOpenChange: Ne,
    } = e,
    k = g === void 0 ? null : g,
    A = me !== void 0 && me,
    Le = Te !== void 0 && Te,
    Re = Ee === void 0 || Ee,
    Ge = De !== void 0 && De,
    j = ke === void 0 ? `default` : ke,
    M = d(o),
    N = d(Fe),
    Je = (0, R.useId)(),
    P = oe ?? Je,
    Qe;
  n[0] === P ? (Qe = n[1]) : ((Qe = { mutationKey: [`artifact-download`, P] }), (n[0] = P), (n[1] = Qe));
  let tt = ye(Qe) > 0,
    { platform: it } = Pe(),
    ot = te(Ce),
    F = ee(),
    I = ze(C),
    L = C === ce,
    [B, mt] = (0, R.useState)(!1),
    [ht, gt] = (0, R.useState)(!1),
    V = Me ?? ht,
    _t;
  n[2] !== Me || n[3] !== Ne
    ? ((_t = (e) => {
        (Me ?? gt(e), Ne?.(e));
      }),
      (n[2] = Me),
      (n[3] = Ne),
      (n[4] = _t))
    : (_t = n[4]);
  let H = _t,
    [vt, yt] = (0, R.useState)(!1),
    bt;
  n[5] === C ? (bt = n[6]) : ((bt = { hostId: C }), (n[5] = C), (n[6] = bt));
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
  n[9] !== k || n[10] !== U || n[11] !== C || n[12] !== E
    ? ((Et = { cwd: k, getOpenPath: U, hostId: C, openPath: E }),
      (n[9] = k),
      (n[10] = U),
      (n[11] = C),
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
    G = c(E),
    Pt;
  n[14] !== k || n[15] !== E ? ((Pt = k ?? r(E)), (n[14] = k), (n[15] = E), (n[16] = Pt)) : (Pt = n[16]);
  let Ft = Pt,
    It = xe({ targets: Ot, availableTargets: kt, includeHiddenTargets: !0, mode: At }),
    K = L ? null : je({ preferredTarget: Dt, targets: Ot, availableTargets: kt, mode: At }),
    Lt = It.filter(lt),
    Rt;
  n[17] === Ot ? (Rt = n[18]) : ((Rt = Ot.find(ct)), (n[17] = Ot), (n[18] = Rt));
  let zt = Rt,
    Bt = j === `title` || j === `download` ? `base` : `sm`,
    Vt = Ie(`2546594521`),
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
  n[24] === w
    ? (qt = n[25])
    : ((qt = (e) => {
        let t = w?.();
        if (t == null) {
          e();
          return;
        }
        Promise.resolve(t).then((t) => {
          t !== !1 && e();
        }, st);
      }),
      (n[24] = w),
      (n[25] = qt));
  let q = qt,
    Jt;
  n[26] !== T || n[27] !== C || n[28] !== F || n[29] !== be || n[30] !== E || n[31] !== q || n[32] !== M
    ? ((Jt = (e) => {
        q(() => {
          let t = () => {
              if (T == null) {
                e({ hostId: C, path: E });
                return;
              }
              T()
                .then(e)
                .catch(() => {
                  M.get(ie).danger(
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
      (n[27] = C),
      (n[28] = F),
      (n[29] = be),
      (n[30] = E),
      (n[31] = q),
      (n[32] = M),
      (n[33] = Jt))
    : (Jt = n[33]);
  let J = Jt,
    Yt;
  n[34] !== k || n[35] !== S || n[36] !== J || n[37] !== N || n[38] !== M
    ? ((Yt = () => {
        J((e) => {
          M.get(Be).mutate({
            cwd: k,
            conversationId: Ve(N.value) ?? void 0,
            environmentId: S,
            hostId: e.hostId,
            path: e.path,
            target: `fileManager`,
          });
        });
      }),
      (n[34] = k),
      (n[35] = S),
      (n[36] = J),
      (n[37] = N),
      (n[38] = M),
      (n[39] = Yt))
    : (Yt = n[39]);
  let Xt = Yt,
    Zt;
  n[40] !== S || n[41] !== Nt || n[42] !== J
    ? ((Zt = (e, t) => {
        J((n) => {
          Nt(e.target, { appPath: e.appPath, environmentId: S, path: n.path, persistPreferred: t && We(e) });
        });
      }),
      (n[40] = S),
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
  n[50] !== C ||
  n[51] !== L ||
  n[52] !== Mt ||
  n[53] !== E ||
  n[54] !== B ||
  n[55] !== j
    ? ((en =
        j !== `title` && !L && W && (B || (T == null && (!jt || Mt)))
          ? (0, z.jsx)(at, { cwd: k, getOpenPath: U, delayMs: B ? 0 : pt, hostId: C, openPath: E })
          : null),
      (n[45] = W),
      (n[46] = k),
      (n[47] = T),
      (n[48] = U),
      (n[49] = jt),
      (n[50] = C),
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
  n[60] !== y ||
  n[61] !== S ||
  n[62] !== I ||
  n[63] !== C ||
  n[64] !== F ||
  n[65] !== L ||
  n[66] !== _e ||
  n[67] !== E ||
  n[68] !== N ||
  n[69] !== M
    ? ((cn =
        _e ??
        (L
          ? async () => {
              await $e(
                M,
                et(M, { conversationId: Ve(N.value) ?? void 0, cwd: k, environmentId: S, path: E }),
              );
            }
          : void 0) ??
        (f?.workspaceFiles?.saveCopy == null
          ? void 0
          : () => {
              if (y != null) {
                dt({
                  scope: N,
                  analyticsMetadata: y,
                  downloadFailureLabel: F.formatMessage({
                    id: `artifactTab.preview.downloadFailure`,
                    defaultMessage: `Could not download artifact`,
                    description: `Error shown when an artifact download fails`,
                  }),
                  hostId: C,
                  hostKind: I.kind,
                  path: E,
                });
                return;
              }
              f.workspaceFiles?.saveCopy?.({ hostId: C, path: E }).catch(() => {
                M.get(ie).danger(
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
      (n[60] = y),
      (n[61] = S),
      (n[62] = I),
      (n[63] = C),
      (n[64] = F),
      (n[65] = L),
      (n[66] = _e),
      (n[67] = E),
      (n[68] = N),
      (n[69] = M),
      (n[70] = cn))
    : (cn = n[70]);
  let ln = cn,
    un;
  n[71] !== ln ||
  n[72] !== C ||
  n[73] !== F ||
  n[74] !== A ||
  n[75] !== ve ||
  n[76] !== E ||
  n[77] !== q ||
  n[78] !== M
    ? ((un =
        A || ln == null
          ? void 0
          : () => {
              (ve?.(),
                q(() => {
                  Promise.resolve(ln({ hostId: C, path: E })).catch(() => {
                    M.get(ie).danger(
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
      (n[72] = C),
      (n[73] = F),
      (n[74] = A),
      (n[75] = ve),
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
              ae.CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_ARTIFACT_PREVIEW_EXPORT_MENU,
            analyticsContext: a,
            getAnalyticsContext: de,
            handleConnectApp: wt,
            hostId: C,
            iconSize: Bt,
            isOpening: vt,
            keepOpenWhileOpening: !0,
            onCloseDropdown: () => {
              H(!1);
            },
            onOpeningChange: yt,
            onBeforeFileRead: w,
            ...(Se == null ? { path: E } : { readUploadFile: Se, sourceId: E, targetType: Ut }),
            title: G,
          }),
    pn = L
      ? (0, z.jsx)(b.Item, { onSelect: Xt, children: Kt })
      : (0, z.jsxs)(z.Fragment, {
          children: [
            j === `download` ? fn : null,
            !A && T == null && ot?.({ hostId: C, path: E, tabId: we, withPreparedFile: J }),
            Lt.map((e) =>
              (0, z.jsx)(
                b.Item,
                {
                  disabled: _ || tt || vt,
                  leftIcon: (0, z.jsx)(x, {
                    size: Bt,
                    children: (0, z.jsx)(`img`, { alt: ``, src: e.icon, className: `size-full` }),
                  }),
                  onSelect: () => {
                    (Qt(e, Le), H(!1));
                  },
                  children: e.label,
                },
                e.id,
              ),
            ),
            nn
              ? (0, z.jsx)(b.Message, {
                  compact: !0,
                  children: (0, z.jsx)(u, {
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
                    rn && j !== `download` ? (0, z.jsx)(b.Separator, {}) : null,
                    (0, z.jsx)(b.Item, {
                      disabled: _ || tt || vt,
                      leftIcon:
                        j === `download`
                          ? (0, z.jsx)(x, {
                              size: Bt,
                              children:
                                zt == null
                                  ? (0, z.jsx)(s, { icon: { 16: re, 20: pe } })
                                  : (0, z.jsx)(`img`, { alt: ``, src: zt.icon, className: `size-full` }),
                            })
                          : void 0,
                      onSelect: () => {
                        (Xt(), H(!1));
                      },
                      children:
                        j === `download`
                          ? (0, z.jsx)(u, { ...nt(it) })
                          : (0, z.jsx)(u, {
                              id: `artifactTab.preview.openInFolder`,
                              defaultMessage: `Open in folder`,
                              description: `Dropdown item for revealing an artifact in the system file manager`,
                            }),
                    }),
                  ],
                })
              : null,
            T == null && B && Ft != null
              ? (0, z.jsx)(ut, { onSelect: () => H(!1), cwd: Ft, hostId: C, path: E })
              : null,
          ],
        }),
    mn = null;
  dn != null &&
    (mn =
      j === `download`
        ? (0, z.jsx)(Ae, { fileName: G, disabled: _, onSelect: dn })
        : (0, z.jsx)(b.Item, {
            disabled: _,
            onSelect: dn,
            children: (0, z.jsx)(u, {
              id: `artifactTab.preview.downloadCopy`,
              defaultMessage: `Save as…`,
              description: `Dropdown item for saving an artifact to a user-selected location`,
            }),
          }));
  let X;
  if (
    (G.toLowerCase().endsWith(`.pptx`) ? (X = `pptx`) : G.toLowerCase().endsWith(`.xlsx`) && (X = `xlsx`),
    j === `download` && X != null && ue !== void 0)
  ) {
    let e = _ || vt,
      t =
        ue == null
          ? null
          : async (e) => (
              ve?.(),
              { bytes: await ue(e), fileName: e === `office` ? G : G.replace(/\.(pptx|xlsx)$/i, `.pdf`) }
            ),
      r;
    n[80] !== y || n[81] !== I || n[82] !== C || n[83] !== F || n[84] !== E || n[85] !== N
      ? ((r =
          y == null
            ? void 0
            : (e) =>
                dt({
                  scope: N,
                  analyticsMetadata: y,
                  downloadFailureLabel: F.formatMessage({
                    id: `artifactTab.preview.downloadFailure`,
                    defaultMessage: `Could not download artifact`,
                    description: `Error shown when an artifact download fails`,
                  }),
                  file: e,
                  hostId: C,
                  hostKind: I.kind,
                  path: E,
                })),
        (n[80] = y),
        (n[81] = I),
        (n[82] = C),
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
  let hn = Re ? mn : null,
    gn;
  n[93] !== h || n[94] !== pn || n[95] !== hn
    ? ((gn = (0, z.jsxs)(z.Fragment, { children: [pn, hn, h] })),
      (n[93] = h),
      (n[94] = pn),
      (n[95] = hn),
      (n[96] = gn))
    : (gn = n[96]);
  let _n = gn,
    vn;
  n[97] !== O || n[98] !== _n
    ? ((vn = O == null ? _n : O(_n)), (n[97] = O), (n[98] = _n), (n[99] = vn))
    : (vn = n[99]);
  let Z = vn,
    Q;
  if (j === `download`) {
    let e = le || tt || vt,
      t;
    n[100] === H
      ? (t = n[101])
      : ((t = (e) => {
          (H(e), e && Y());
        }),
        (n[100] = H),
        (n[101] = t));
    let r = se ?? mn,
      i = L || T == null || W || Wt ? pn : void 0,
      a;
    (n[102] !== _ || n[103] !== V || n[104] !== e || n[105] !== t || n[106] !== r || n[107] !== i
      ? ((a = (0, z.jsx)(He, {
          disabled: _,
          pending: e,
          open: V,
          onOpenChange: t,
          downloadItems: r,
          openItems: i,
        })),
        (n[102] = _),
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
      artifactKind: p,
      editorMenuItems: v,
      fileName: G,
      libraryBreadcrumb: he,
      tooltipBreadcrumb: ge,
      title: Oe ?? G,
      open: V,
      onOpenChange: H,
      children: O == null ? h : O(h),
    };
    Q = D == null ? (0, z.jsx)(fe, { ...e }) : D(e);
  } else if (j === `menu`) {
    let e;
    n[109] === H
      ? (e = n[110])
      : ((e = (e) => {
          (H(e), e && Y());
        }),
        (n[109] = H),
        (n[110] = e));
    let r, a;
    n[111] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, z.jsx)(u, {
          id: `artifactTab.preview.openIn`,
          defaultMessage: `Open in`,
          description: `Button that opens the menu of apps and export actions for an artifact`,
        })),
        (a = (0, z.jsx)(l, {})),
        (n[111] = r),
        (n[112] = a))
      : ((r = n[111]), (a = n[112]));
    let o;
    n[113] === _
      ? (o = n[114])
      : ((o = (0, z.jsxs)(t, {
          className: `pointer-events-auto shrink-0`,
          color: `outline`,
          size: `toolbar`,
          disabled: _,
          onFocus: Y,
          onMouseEnter: Y,
          children: [r, a],
        })),
        (n[113] = _),
        (n[114] = o));
    let s;
    (n[115] !== V || n[116] !== Z || n[117] !== e || n[118] !== o
      ? ((s = (0, z.jsx)(i, {
          align: `end`,
          surface: `opaque`,
          open: V,
          onOpenChange: e,
          triggerButton: o,
          children: Z,
        })),
        (n[115] = V),
        (n[116] = Z),
        (n[117] = e),
        (n[118] = o),
        (n[119] = s))
      : (s = n[119]),
      (Q = s));
  } else {
    let e = `toolbar`;
    j === `imageTools` ? (e = `imageToolbar`) : j === `compact` && (e = `composerSm`);
    let t = j === `viewer` ? ne : m,
      r = j === "default" ? `outline` : `ghostActive`,
      i = K == null ? Kt : an,
      a;
    n[120] === H
      ? (a = n[121])
      : ((a = (e) => {
          (H(e), e && Y());
        }),
        (n[120] = H),
        (n[121] = a));
    let o;
    n[122] !== Xt || n[123] !== Qt || n[124] !== K
      ? ((o = () => {
          if (K == null) {
            Xt();
            return;
          }
          Qt(K, !1);
        }),
        (n[122] = Xt),
        (n[123] = Qt),
        (n[124] = K),
        (n[125] = o))
      : (o = n[125]);
    let s;
    n[126] === K
      ? (s = n[127])
      : ((s = K == null ? null : (0, z.jsx)(`img`, { alt: ``, src: K.icon, className: `icon-sm` })),
        (n[126] = K),
        (n[127] = s));
    let c;
    n[128] !== K || n[129] !== Ge
      ? ((c =
          K == null || Ge
            ? (0, z.jsx)(`span`, {
                className: `whitespace-nowrap`,
                children: (0, z.jsx)(u, {
                  id: `artifactTab.preview.open`,
                  defaultMessage: `Open`,
                  description: `Button label that opens an artifact`,
                }),
              })
            : null),
        (n[128] = K),
        (n[129] = Ge),
        (n[130] = c))
      : (c = n[130]);
    let l;
    n[131] !== s || n[132] !== c
      ? ((l = (0, z.jsxs)(`span`, { className: `flex items-center gap-1.5`, children: [s, c] })),
        (n[131] = s),
        (n[132] = c),
        (n[133] = l))
      : (l = n[133]);
    let d;
    (n[134] !== t ||
    n[135] !== e ||
    n[136] !== _ ||
    n[137] !== V ||
    n[138] !== Z ||
    n[139] !== sn ||
    n[140] !== an ||
    n[141] !== r ||
    n[142] !== i ||
    n[143] !== a ||
    n[144] !== o ||
    n[145] !== l
      ? ((d = (0, z.jsx)(t, {
          color: r,
          size: e,
          className: `shrink-0`,
          disabled: _,
          dropdownOpen: V,
          dropdownAlign: `end`,
          dropdownContentClassName: `pt-2`,
          primaryAriaLabel: i,
          secondaryAriaLabel: sn,
          secondaryTooltipContent: sn,
          tooltipContent: an,
          dropdownContent: Z,
          onFocus: Y,
          onMouseEnter: Y,
          onDropdownOpenChange: a,
          onClick: o,
          children: l,
        })),
        (n[134] = t),
        (n[135] = e),
        (n[136] = _),
        (n[137] = V),
        (n[138] = Z),
        (n[139] = sn),
        (n[140] = an),
        (n[141] = r),
        (n[142] = i),
        (n[143] = a),
        (n[144] = o),
        (n[145] = l),
        (n[146] = d))
      : (d = n[146]),
      (Q = d));
  }
  if (A && (L || (S != null && Ue(C)))) return null;
  let $;
  n[147] !== Wt || n[148] !== xt || n[149] !== St || n[150] !== Ct || n[151] !== C
    ? (($ =
        Wt && St != null ? (0, z.jsx)(Ye, { app: St, hostId: C, onClose: xt, onOAuthStarted: Ct }) : null),
      (n[147] = Wt),
      (n[148] = xt),
      (n[149] = St),
      (n[150] = Ct),
      (n[151] = C),
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
    { data: s } = j(r, o, `artifact_preview`),
    c;
  t[0] === r ? (c = t[1]) : ((c = [r]), (t[0] = r), (t[1] = c));
  let l;
  t[2] !== i || t[3] !== c
    ? ((l = { params: { dirs: c, hostId: i }, source: `artifact_preview` }),
      (t[2] = i),
      (t[3] = c),
      (t[4] = l))
    : (l = t[4]);
  let { data: d } = w(T, l),
    f = d?.origins[0],
    p;
  t[5] !== s || t[6] !== r || t[7] !== f || t[8] !== a
    ? ((p = f == null ? null : Re({ branch: s, cwd: r, path: a, remoteUrl: f.originUrl, root: f.root })),
      (t[5] = s),
      (t[6] = r),
      (t[7] = f),
      (t[8] = a),
      (t[9] = p))
    : (p = t[9]);
  let m = p;
  if (m == null) return null;
  let h;
  t[10] !== m || t[11] !== i || t[12] !== n
    ? ((h = () => {
        (Me({ href: m, initiator: `side_panel_menu`, originHostId: i }), n());
      }),
      (t[10] = m),
      (t[11] = i),
      (t[12] = n),
      (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, z.jsx)(u, {
        id: `artifactTab.preview.openInGitHub`,
        defaultMessage: `Open in GitHub`,
        description: `Dropdown item for opening an artifact in its GitHub repository`,
      })),
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] === h
      ? (_ = t[16])
      : ((_ = (0, z.jsx)(b.Item, { onSelect: h, children: g })), (t[15] = h), (t[16] = _)),
    _
  );
}
function L(e) {
  let t = (0, ft.c)(26),
    {
      analyticsMetadata: n,
      hostId: r,
      onBeforeDownload: i,
      onDownload: a,
      onDownloadAttempt: o,
      onBeforeOpen: s,
      analyticsContext: c,
      getAnalyticsContext: l,
      environmentId: u,
      tabId: p,
      path: m,
    } = e,
    h = d(Fe),
    g = ee(),
    _ = ze(r),
    [v, y] = (0, R.useState)(!1),
    b;
  t[0] === g
    ? (b = t[1])
    : ((b = g.formatMessage({
        id: `artifactTab.preview.downloadFailure`,
        defaultMessage: `Could not download artifact`,
        description: `Error shown when an artifact download fails`,
      })),
      (t[0] = g),
      (t[1] = b));
  let te = b;
  if (a == null && f?.workspaceFiles?.saveCopy == null) return null;
  let ne;
  t[2] !== n ||
  t[3] !== te ||
  t[4] !== _ ||
  t[5] !== r ||
  t[6] !== i ||
  t[7] !== a ||
  t[8] !== o ||
  t[9] !== m ||
  t[10] !== h
    ? ((ne = () => {
        (o?.(),
          y(!0),
          (async () => {
            a == null
              ? n != null &&
                (await dt({
                  scope: h,
                  analyticsMetadata: n,
                  downloadFailureLabel: te,
                  hostId: r,
                  hostKind: _.kind,
                  onBeforeDownload: i,
                  path: m,
                }))
              : (i == null || (await i()) !== !1) && (await a({ hostId: r, path: m }));
          })()
            .catch(() => {
              h.get(ie).danger(te, { errorAnalytics: { toastId: `artifactTab.preview.downloadFailure` } });
            })
            .finally(() => {
              y(!1);
            }));
      }),
      (t[2] = n),
      (t[3] = te),
      (t[4] = _),
      (t[5] = r),
      (t[6] = i),
      (t[7] = a),
      (t[8] = o),
      (t[9] = m),
      (t[10] = h),
      (t[11] = ne))
    : (ne = t[11]);
  let re = ne,
    x;
  t[12] !== re || t[13] !== m
    ? ((x = (0, z.jsx)(Ae, { fileName: m, onSelect: re })), (t[12] = re), (t[13] = m), (t[14] = x))
    : (x = t[14]);
  let ae;
  return (
    t[15] !== c ||
    t[16] !== u ||
    t[17] !== l ||
    t[18] !== r ||
    t[19] !== v ||
    t[20] !== i ||
    t[21] !== s ||
    t[22] !== m ||
    t[23] !== x ||
    t[24] !== p
      ? ((ae = (0, z.jsx)(I, {
          hostId: r,
          path: m,
          variant: `download`,
          downloadPending: v,
          onBeforeFileAction: i,
          onBeforeOpen: s,
          analyticsContext: c,
          getAnalyticsContext: l,
          environmentId: u,
          tabId: p,
          downloadMenuItems: x,
        })),
        (t[15] = c),
        (t[16] = u),
        (t[17] = l),
        (t[18] = r),
        (t[19] = v),
        (t[20] = i),
        (t[21] = s),
        (t[22] = m),
        (t[23] = x),
        (t[24] = p),
        (t[25] = ae))
      : (ae = t[25]),
    ae
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
  D(s, u, { hostKind: i, operationId: d, outcome: C.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_ATTEMPT });
  try {
    if (a != null && (await a()) === !1) {
      D(s, u, { hostKind: i, operationId: d, outcome: C.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_BLOCKED });
      return;
    }
    let e = f.workspaceFiles?.saveCopy?.(n ?? { hostId: r, path: o }),
      t = e == null ? void 0 : (await ve(e)).path;
    D(s, u, {
      hostKind: i,
      operationId: d,
      outcome:
        t == null ? C.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_CANCEL : C.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_SUCCESS,
    });
  } catch {
    (D(s, u, { hostKind: i, operationId: d, outcome: C.CODEX_ARTIFACT_DOWNLOAD_OUTCOME_ERROR }),
      s
        .get(ie)
        .danger(t, { errorAnalytics: { toastId: `artifactPreviewHeader.saveArtifactCopyWithAnalytics` } }));
  }
}
var ft, R, z, pt;
function B() {
  return (B = e(() => {
    ((ft = me()),
      _(),
      v(),
      g(),
      ue(),
      (R = _e()),
      oe(),
      tt(),
      ke(),
      M(),
      N(),
      P(),
      de(),
      h(),
      n(),
      Ee(),
      y(),
      se(),
      le(),
      Te(),
      Qe(),
      Ne(),
      O(),
      De(),
      Ge(),
      be(),
      we(),
      it(),
      S(),
      he(),
      E(),
      Le(),
      k(),
      p(),
      a(),
      A(),
      ot(),
      Se(),
      Je(),
      (z = ge()),
      Oe(),
      (pt = 150));
  }))();
}
export { I as n, B as r, L as t };
//# sourceMappingURL=artifact-preview-header-b624a4e82866.js.map
