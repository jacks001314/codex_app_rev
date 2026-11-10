import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  $St as r,
  $st as i,
  AT as a,
  DS as o,
  ES as s,
  FBt as c,
  FO as l,
  FTt as u,
  Gb as d,
  HO as f,
  IO as p,
  ITt as m,
  JO as h,
  KO as g,
  LNt as _,
  LO as v,
  MNt as y,
  Mst as b,
  NNt as x,
  OT as S,
  PBt as C,
  Qst as w,
  RO as ee,
  Uz as T,
  WO as te,
  Wb as ne,
  Wz as re,
  XOt as ie,
  Y3 as ae,
  YOt as E,
  Z3 as D,
  ZSt as oe,
  b2 as se,
  ck as ce,
  e6 as le,
  ew as O,
  jT as k,
  jst as A,
  kT as j,
  lk as M,
  nB as N,
  nCt as ue,
  qO as de,
  rB as P,
  rk as F,
  sw as I,
  tk as L,
  tkt as R,
  uk as z,
  uw as B,
  vst as V,
  y2 as H,
  yst as fe,
  zO as pe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  FF as U,
  RF as W,
  _P as me,
  gP as he,
  hP as G,
  lBr as K,
  mP as q,
  uBr as ge,
  vP as _e,
  yP as ve,
} from "./app-initial-ad16eaadf81f.js";
import { Hy as ye, Uy as be } from "./app-primary-3e00728c2a4c.js";
import { c as xe, i as Se, n as Ce, r as we, s as Te, t as Ee } from "./analytics-7a15d48cae72.js";
import {
  a as De,
  c as Oe,
  d as ke,
  i as Ae,
  l as je,
  s as J,
  t as Me,
  u as Ne,
} from "./query-17e618b0e4ab.js";
function Pe(e) {
  let t = (0, Ie.c)(8),
    { result: n } = e;
  if (n?.failures != null && n.failures.length > 0) {
    let e;
    t[0] === n.failures ? (e = t[1]) : ((e = n.failures.map(Fe)), (t[0] = n.failures), (t[1] = e));
    let r;
    return (
      t[2] === e
        ? (r = t[3])
        : ((r = (0, X.jsx)(`ul`, { className: `flex flex-col gap-3 select-text`, children: e })),
          (t[2] = e),
          (t[3] = r)),
      r
    );
  }
  if (n?.status === `failed_to_read`) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(R, {
            id: `settings.browserUse.profileImport.extensionSettingsUnreadable`,
            defaultMessage: `Chrome’s extension settings couldn’t be read. Close Chrome and try again.`,
            description: `Recovery guidance when the importer cannot read the source profile and therefore cannot identify individual extensions`,
          })),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  if (n?.status === `failed_to_copy`) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(Y, { reason: `copy_failed` })), (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (n?.status === `failed_to_initialize`) {
    let e;
    return (
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(Y, { reason: `initialization_failed` })), (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  let r;
  return (
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, X.jsx)(R, {
          id: `settings.browserUse.profileImport.extensionsError`,
          defaultMessage: `Some extensions couldn’t be imported`,
          description: `Error shown when an older runtime does not provide individual extension import failures`,
        })),
        (t[7] = r))
      : (r = t[7]),
    r
  );
}
function Fe(e, t) {
  return (0, X.jsxs)(
    `li`,
    {
      className: `flex min-w-0 flex-col gap-1`,
      children: [
        (0, X.jsx)(`div`, {
          className: `font-medium wrap-anywhere text-default`,
          children:
            e.name ||
            e.id ||
            (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.unknownExtension`,
              defaultMessage: `Unknown extension`,
              description: `Label for an extension import failure whose source metadata has neither a usable name nor a valid extension ID`,
            }),
        }),
        (0, X.jsx)(Y, { reason: e.reason }),
      ],
    },
    e.id ?? t,
  );
}
function Y(e) {
  let t = (0, Ie.c)(17),
    { reason: n } = e;
  switch (n) {
    case `unsupported_installation`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionUnsupportedInstallation`,
              defaultMessage: `This type of extension installation isn’t supported`,
              description: `Reason an extension cannot be imported because it is not a regular installed extension, such as an unpacked development extension, app, or theme`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `managed_extension`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionManaged`,
              defaultMessage: `Managed extensions must be installed by your administrator`,
              description: `Reason an extension installed by Chrome enterprise policy cannot be copied into Codex`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `chrome_component`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionChromeComponent`,
              defaultMessage: `Built-in Chrome components can’t be imported`,
              description: `Reason a built-in Chrome component extension cannot be copied into Codex`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `invalid_metadata`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionInvalidMetadata`,
              defaultMessage: `Chrome’s installation details are missing or invalid`,
              description: `Reason a Chrome extension record cannot be imported because its ID, path, or installation metadata is missing or invalid`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `missing_files`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionMissingFiles`,
              defaultMessage: `The extension’s files are missing from this Chrome profile`,
              description: `Reason an extension cannot be imported because the source profile no longer contains its installation directory`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `invalid_files`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionInvalidFiles`,
              defaultMessage: `The extension’s files couldn’t be safely read`,
              description: `Reason an extension cannot be imported because its files contain symbolic links or are unreadable or invalid`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `invalid_manifest`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionInvalidManifest`,
              defaultMessage: `The extension’s manifest is invalid or doesn’t match its installation`,
              description: `Reason an extension cannot be imported because its manifest, identity key, or version is invalid or inconsistent`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `invalid_permissions`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionInvalidPermissions`,
              defaultMessage: `The saved permissions or enabled state couldn’t be read safely`,
              description: `Reason an extension cannot be imported because Chrome’s saved permissions or enabled and disabled state cannot be interpreted safely`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `unsupported_permissions`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionUnsupportedPermissions`,
              defaultMessage: `The saved site-access restrictions can’t be preserved in ChatGPT`,
              description: `Reason an extension is not imported because doing so would lose a source site restriction or broaden its permissions in the target profile`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case `copy_failed`: {
      let e;
      return (
        t[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionCopyFailed`,
              defaultMessage: `The extension’s files couldn’t be copied. Check available disk space and try again.`,
              description: `Recovery guidance when extension import cannot create temporary files or copy the installation into Codex`,
            })),
            (t[9] = e))
          : (e = t[9]),
        e
      );
    }
    case `blocked_by_policy`: {
      let e;
      return (
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionBlockedByPolicy`,
              defaultMessage: `Blocked by your administrator`,
              description: `Reason an extension import was rejected by the target browser’s managed installation policy`,
            })),
            (t[10] = e))
          : (e = t[10]),
        e
      );
    }
    case `blocked_by_security`: {
      let e;
      return (
        t[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionBlockedBySecurity`,
              defaultMessage: `Blocked by browser security checks`,
              description: `Reason an extension import was rejected because the extension is blocklisted or fails browser security checks`,
            })),
            (t[11] = e))
          : (e = t[11]),
        e
      );
    }
    case `unsupported_requirements`: {
      let e;
      return (
        t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionUnsupportedRequirements`,
              defaultMessage: `This extension requires features that aren’t available in ChatGPT`,
              description: `Reason an extension import was rejected because its runtime requirements are unsupported`,
            })),
            (t[12] = e))
          : (e = t[12]),
        e
      );
    }
    case `dependency_failed`: {
      let e;
      return (
        t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionDependencyFailed`,
              defaultMessage: `A required shared module is missing or incompatible`,
              description: `Reason an extension cannot be installed because another extension it depends on is missing, incompatible, or does not allow this extension to use it`,
            })),
            (t[13] = e))
          : (e = t[13]),
        e
      );
    }
    case `initialization_failed`: {
      let e;
      return (
        t[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionInitializationFailed`,
              defaultMessage: `ChatGPT couldn’t start extension import. Restart ChatGPT and try again.`,
              description: `Recovery guidance when the target profile’s extension system could not be initialized`,
            })),
            (t[14] = e))
          : (e = t[14]),
        e
      );
    }
    case `profile_closed`: {
      let e;
      return (
        t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionProfileClosed`,
              defaultMessage: `The browser profile closed before import finished`,
              description: `Reason an extension import was interrupted by the target profile shutting down`,
            })),
            (t[15] = e))
          : (e = t[15]),
        e
      );
    }
    default: {
      let e;
      return (
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(R, {
              id: `settings.browserUse.profileImport.extensionInstallFailed`,
              defaultMessage: `The extension couldn’t be installed`,
              description: `Reason shown for an extension installation error that has no more specific supported explanation, including unfamiliar reasons from newer runtimes`,
            })),
            (t[16] = e))
          : (e = t[16]),
        e
      );
    }
  }
}
var Ie, X;
function Le() {
  return (Le = e(() => {
    ((Ie = C()), ie(), (X = _()));
  }))();
}
function Re(e) {
  let t = (0, at.c)(76),
    {
      activeImportRequest: r,
      cookieAccessFailureMessage: i,
      confirmExtensionImport: a,
      elevatedChromeConsent: o,
      extensionsAvailable: s,
      importCookies: c,
      importExtensions: u,
      importHistory: d,
      importPasswords: f,
      isImporting: m,
      isLoadingProfiles: h,
      showCloseBrowserGuidance: _,
      profilePickerOpen: y,
      profiles: b,
      profilesHaveError: x,
      revealedImportResultRowCount: S,
      requiresElevatedChromeConsent: C,
      result: w,
      selectedProfile: T,
      onCancel: te,
      onElevatedChromeConsentChange: ne,
      onImport: re,
      onImportCookiesChange: ie,
      onImportExtensionsChange: E,
      onImportHistoryChange: D,
      onImportPasswordsChange: oe,
      onProfilePickerOpenChange: se,
      onRetry: ce,
      onSelectProfile: le,
    } = e;
  if (a !== void 0 && a && T != null) {
    let e;
    return (
      t[0] !== te || t[1] !== re || t[2] !== T
        ? ((e = (0, Q.jsx)(He, { profile: T, onCancel: te, onImport: re })),
          (t[0] = te),
          (t[1] = re),
          (t[2] = T),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let O = T != null && c,
    k = T != null && f,
    A = T?.source === `chrome` && d,
    j = s && u;
  if (m || w != null) {
    let e = w?.extensions != null || (r?.importExtensions ?? j),
      n;
    return (
      t[4] !== r ||
      t[5] !== i ||
      t[6] !== O ||
      t[7] !== A ||
      t[8] !== k ||
      t[9] !== m ||
      t[10] !== te ||
      t[11] !== ce ||
      t[12] !== w ||
      t[13] !== S ||
      t[14] !== _ ||
      t[15] !== e
        ? ((n = (0, Q.jsx)(We, {
            activeImportRequest: r,
            cookieAccessFailureMessage: i,
            importCookies: O,
            importExtensions: e,
            importHistory: A,
            importPasswords: k,
            isImporting: m,
            revealedImportResultRowCount: S,
            showCloseBrowserGuidance: _,
            result: w,
            onDone: te,
            onRetry: ce,
          })),
          (t[4] = r),
          (t[5] = i),
          (t[6] = O),
          (t[7] = A),
          (t[8] = k),
          (t[9] = m),
          (t[10] = te),
          (t[11] = ce),
          (t[12] = w),
          (t[13] = S),
          (t[14] = _),
          (t[15] = e),
          (t[16] = n))
        : (n = t[16]),
      n
    );
  }
  let M = T == null || (!O && !k && !A && !j) || (C && !o),
    N;
  t[17] === re
    ? (N = t[18])
    : ((N = (e) => {
        (e.preventDefault(), re());
      }),
      (t[17] = re),
      (t[18] = N));
  let ue;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, Q.jsx)(de, {
        asChild: !0,
        children: (0, Q.jsx)(`h2`, { className: `sr-only`, children: (0, Q.jsx)(R, { ...Oe.title }) }),
      })),
      (t[19] = ue))
    : (ue = t[19]);
  let P;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Q.jsx)(R, { ...Oe.title })), (t[20] = P))
    : (P = t[20]);
  let F;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Q.jsxs)(pe, {
        children: [
          ue,
          (0, Q.jsx)(ee, {
            title: P,
            subtitle: (0, Q.jsx)(g, {
              asChild: !0,
              children: (0, Q.jsx)(`div`, {
                children: (0, Q.jsx)(R, {
                  id: `settings.browserUse.profileImport.subtitle`,
                  defaultMessage: `Choose data to bring over to the built-in browser`,
                  description: `Subtitle for the browser data import dialog`,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[21] = F))
    : (F = t[21]);
  let I = m || !b?.length,
    L;
  t[22] !== h || t[23] !== se || t[24] !== le || t[25] !== y || t[26] !== b || t[27] !== T || t[28] !== I
    ? ((L = (0, Q.jsx)(ze, {
        disabled: I,
        isLoading: h,
        open: y,
        profiles: b,
        selectedProfile: T,
        onOpenChange: se,
        onSelectProfile: le,
      })),
      (t[22] = h),
      (t[23] = se),
      (t[24] = le),
      (t[25] = y),
      (t[26] = b),
      (t[27] = T),
      (t[28] = I),
      (t[29] = L))
    : (L = t[29]);
  let z;
  t[30] === b?.length
    ? (z = t[31])
    : ((z =
        b?.length === 0 &&
        (0, Q.jsx)(`p`, {
          className: `text-sm text-codex-description`,
          children: (0, Q.jsx)(R, {
            id: `settings.browserUse.profileImport.noProfilesDescription`,
            defaultMessage: `No Chrome or Atlas profiles were found on this device`,
            description: `Message shown when no importable browser profiles are found`,
          }),
        })),
      (t[30] = b?.length),
      (t[31] = z));
  let B;
  t[32] !== T || t[33] !== _
    ? ((B =
        _ &&
        T != null &&
        (0, Q.jsx)(`p`, {
          className: `text-sm text-codex-description`,
          children: (0, Q.jsx)(R, {
            id: `settings.browserUse.profileImport.closeBrowser`,
            defaultMessage: `Close {browserName} completely before importing`,
            description: `Instruction to close the source browser before importing its profile data`,
            values: { browserName: T.appName },
          }),
        })),
      (t[32] = T),
      (t[33] = _),
      (t[34] = B))
    : (B = t[34]);
  let V;
  t[35] !== O ||
  t[36] !== j ||
  t[37] !== A ||
  t[38] !== k ||
  t[39] !== s ||
  t[40] !== m ||
  t[41] !== ie ||
  t[42] !== E ||
  t[43] !== D ||
  t[44] !== oe ||
  t[45] !== T
    ? ((V =
        T != null &&
        (0, Q.jsxs)(n, {
          children: [
            (0, Q.jsx)(Z, { checked: k, disabled: m, kind: `passwords`, onChange: oe }),
            (0, Q.jsx)(Z, { checked: O, disabled: m, kind: `cookies`, onChange: ie }),
            T.source === `chrome` && (0, Q.jsx)(Z, { checked: A, disabled: m, kind: `history`, onChange: D }),
            s && (0, Q.jsx)(Z, { checked: j, disabled: m, kind: `extensions`, onChange: E }),
          ],
        })),
      (t[35] = O),
      (t[36] = j),
      (t[37] = A),
      (t[38] = k),
      (t[39] = s),
      (t[40] = m),
      (t[41] = ie),
      (t[42] = E),
      (t[43] = D),
      (t[44] = oe),
      (t[45] = T),
      (t[46] = V))
    : (V = t[46]);
  let H;
  t[47] !== o || t[48] !== m || t[49] !== ne || t[50] !== C
    ? ((H = C && (0, Q.jsx)(Ue, { checked: o, disabled: m, onChange: ne })),
      (t[47] = o),
      (t[48] = m),
      (t[49] = ne),
      (t[50] = C),
      (t[51] = H))
    : (H = t[51]);
  let fe;
  t[52] === x
    ? (fe = t[53])
    : ((fe =
        x &&
        (0, Q.jsx)(`p`, {
          className: `px-3 text-sm text-danger`,
          role: `alert`,
          children: (0, Q.jsx)(R, {
            id: `settings.browserUse.profileImport.profilesError`,
            defaultMessage: `We couldn't load browser profiles. Close and reopen this dialog to try again`,
            description: `Error shown when browser profiles cannot be loaded for import`,
          }),
        })),
      (t[52] = x),
      (t[53] = fe));
  let U;
  t[54] !== V || t[55] !== H || t[56] !== fe || t[57] !== L || t[58] !== z || t[59] !== B
    ? ((U = (0, Q.jsxs)(pe, { className: `gap-3`, children: [L, z, B, V, H, fe] })),
      (t[54] = V),
      (t[55] = H),
      (t[56] = fe),
      (t[57] = L),
      (t[58] = z),
      (t[59] = B),
      (t[60] = U))
    : (U = t[60]);
  let W;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, Q.jsx)(R, { ...ot.cancel })), (t[61] = W))
    : (W = t[61]);
  let me;
  t[62] !== m || t[63] !== te
    ? ((me = (0, Q.jsx)(ae, { color: `secondary`, disabled: m, onClick: te, type: `button`, children: W })),
      (t[62] = m),
      (t[63] = te),
      (t[64] = me))
    : (me = t[64]);
  let he;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, Q.jsx)(R, { ...ot.import })), (t[65] = he))
    : (he = t[65]);
  let G;
  t[66] !== M || t[67] !== m
    ? ((G = (0, Q.jsx)(ae, { color: `primary`, disabled: M, loading: m, type: `submit`, children: he })),
      (t[66] = M),
      (t[67] = m),
      (t[68] = G))
    : (G = t[68]);
  let K;
  t[69] !== me || t[70] !== G
    ? ((K = (0, Q.jsx)(pe, { children: (0, Q.jsxs)(v, { className: l, children: [me, G] }) })),
      (t[69] = me),
      (t[70] = G),
      (t[71] = K))
    : (K = t[71]);
  let q;
  return (
    t[72] !== U || t[73] !== K || t[74] !== N
      ? ((q = (0, Q.jsxs)(p, { as: `form`, onSubmit: N, children: [F, U, K] })),
        (t[72] = U),
        (t[73] = K),
        (t[74] = N),
        (t[75] = q))
      : (q = t[75]),
    q
  );
}
function ze(e) {
  let t = (0, at.c)(29),
    {
      disabled: n,
      isLoading: r,
      open: i,
      profiles: a,
      selectedProfile: o,
      onOpenChange: s,
      onSelectProfile: c,
    } = e,
    l;
  t[0] === o ? (l = t[1]) : ((l = o ? rt(o) : null), (t[0] = o), (t[1] = l));
  let u = l,
    d;
  t[2] === o ? (d = t[3]) : ((d = o ? it(o) : void 0), (t[2] = o), (t[3] = d));
  let f = d,
    p = a?.length === 1,
    m = p || void 0,
    h = p && `pointer-events-none`,
    g;
  t[4] === h ? (g = t[5]) : ((g = y(`min-w-0 flex-1`, h)), (t[4] = h), (t[5] = g));
  let _ = p ? `hidden` : void 0,
    v = p ? void 0 : n,
    b = p ? -1 : void 0,
    x;
  t[6] !== r || t[7] !== o
    ? ((x = (0, Q.jsx)(Ve, { isLoading: r, selectedProfile: o })), (t[6] = r), (t[7] = o), (t[8] = x))
    : (x = t[8]);
  let S;
  t[9] !== f || t[10] !== m || t[11] !== g || t[12] !== _ || t[13] !== v || t[14] !== b || t[15] !== x
    ? ((S = (0, Q.jsx)(U, {
        "aria-disabled": m,
        "aria-label": f,
        className: g,
        chevronClassName: _,
        disabled: v,
        tabIndex: b,
        children: x,
      })),
      (t[9] = f),
      (t[10] = m),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S))
    : (S = t[16]);
  let C = S,
    w;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Q.jsx)(`span`, {
        className: `shrink-0 text-sm text-codex-description`,
        children: (0, Q.jsx)(R, {
          id: `settings.browserUse.profileImport.from`,
          defaultMessage: `From`,
          description: `Label before the browser profile selector`,
        }),
      })),
      (t[17] = w))
    : (w = t[17]);
  let ee;
  return (
    t[18] !== n ||
    t[19] !== r ||
    t[20] !== s ||
    t[21] !== c ||
    t[22] !== i ||
    t[23] !== a ||
    t[24] !== u ||
    t[25] !== f ||
    t[26] !== p ||
    t[27] !== C
      ? ((ee = (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            w,
            p
              ? C
              : (0, Q.jsx)(L, {
                  align: `end`,
                  contentWidth: `menuWide`,
                  disabled: n,
                  open: i,
                  triggerButton:
                    n || r || f == null
                      ? C
                      : (0, Q.jsx)(Be, {
                          cloneCustomTrigger: !0,
                          tooltipContent: f,
                          openWhen: `trigger-overflows`,
                          children: C,
                        }),
                  onOpenChange: s,
                  children: (0, Q.jsx)(F.Section, {
                    className: `max-h-[250px] overflow-y-auto`,
                    children: a?.map((e) => {
                      let t = rt(e);
                      return (0, Q.jsx)(
                        F.Item,
                        {
                          "aria-label": it(e),
                          rightIconAsset: t === u ? H : void 0,
                          tooltipText: it(e),
                          onSelect: () => c(e),
                          children: (0, Q.jsx)(et, { profile: e }),
                        },
                        t,
                      );
                    }),
                  }),
                }),
          ],
        })),
        (t[18] = n),
        (t[19] = r),
        (t[20] = s),
        (t[21] = c),
        (t[22] = i),
        (t[23] = a),
        (t[24] = u),
        (t[25] = f),
        (t[26] = p),
        (t[27] = C),
        (t[28] = ee))
      : (ee = t[28]),
    ee
  );
}
function Be(e) {
  let t = (0, at.c)(3),
    n = e[`aria-expanded`] === !0,
    r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = (0, Q.jsx)(N, { ...e, triggerPopupOpen: n })), (t[0] = e), (t[1] = n), (t[2] = r))
      : (r = t[2]),
    r
  );
}
function Ve(e) {
  let n = (0, at.c)(4),
    { isLoading: r, selectedProfile: i } = e;
  if (r) {
    let e;
    return (
      n[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(t, { className: `icon-2xs` }),
              (0, Q.jsx)(R, {
                id: `settings.browserUse.profileImport.loadingProfiles`,
                defaultMessage: `Loading profiles…`,
                description: `Placeholder shown while importable browser profiles load`,
              }),
            ],
          })),
          (n[0] = e))
        : (e = n[0]),
      e
    );
  }
  if (i == null) {
    let e;
    return (
      n[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(R, {
            id: `settings.browserUse.profileImport.noProfiles`,
            defaultMessage: `No profiles found`,
            description: `Placeholder shown when no importable browser profiles are found`,
          })),
          (n[1] = e))
        : (e = n[1]),
      e
    );
  }
  let a;
  return (n[2] === i ? (a = n[3]) : ((a = (0, Q.jsx)(et, { profile: i })), (n[2] = i), (n[3] = a)), a);
}
function He(e) {
  let t = (0, at.c)(22),
    { profile: n, onCancel: r, onImport: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(R, {
        id: `settings.browserUse.profileImport.extensionsConfirmationTitle`,
        defaultMessage: `Import unverified extensions?`,
        description: `Title asking for fresh consent before importing unauthenticated extension packages and saved permissions from a Chrome profile`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o = a,
    s;
  t[1] !== n.appName || t[2] !== n.profileName
    ? ((s = (0, Q.jsx)(R, {
        id: `settings.browserUse.profileImport.extensionsConfirmationDescription`,
        defaultMessage: `ChatGPT can’t verify extensions or saved permissions from this {appName} profile “{profileName}”. If imported, these extensions may run code or access data in ChatGPT. Continue only if you trust the profile.`,
        description: `Security warning that the selected browser profile's extension packages and saved permission grants cannot be authenticated and may access data in ChatGPT`,
        values: { appName: n.appName, profileName: n.profileName },
      })),
      (t[1] = n.appName),
      (t[2] = n.profileName),
      (t[3] = s))
    : (s = t[3]);
  let c = s,
    l;
  t[4] === i
    ? (l = t[5])
    : ((l = (e) => {
        (e.preventDefault(), i());
      }),
      (t[4] = i),
      (t[5] = l));
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(de, { className: `sr-only`, children: o })), (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === c
    ? (d = t[8])
    : ((d = (0, Q.jsx)(g, { className: `sr-only`, children: c })), (t[7] = c), (t[8] = d));
  let f;
  t[9] === c
    ? (f = t[10])
    : ((f = (0, Q.jsx)(pe, { children: (0, Q.jsx)(ee, { title: o, subtitle: c }) })),
      (t[9] = c),
      (t[10] = f));
  let m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(R, { ...ot.cancel })), (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === r
    ? (h = t[13])
    : ((h = (0, Q.jsx)(ae, { autoFocus: !0, color: `secondary`, onClick: r, type: `button`, children: m })),
      (t[12] = r),
      (t[13] = h));
  let _;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(ae, {
        type: `submit`,
        children: (0, Q.jsx)(R, {
          id: `settings.browserUse.profileImport.extensionsConfirmationAction`,
          defaultMessage: `Import extensions`,
          description: `Button granting explicit consent to import unverified extension packages and their saved permissions from the selected profile`,
        }),
      })),
      (t[14] = _))
    : (_ = t[14]);
  let y;
  t[15] === h
    ? (y = t[16])
    : ((y = (0, Q.jsx)(pe, { children: (0, Q.jsxs)(v, { children: [h, _] }) })), (t[15] = h), (t[16] = y));
  let b;
  return (
    t[17] !== y || t[18] !== l || t[19] !== d || t[20] !== f
      ? ((b = (0, Q.jsxs)(p, { as: `form`, onSubmit: l, children: [u, d, f, y] })),
        (t[17] = y),
        (t[18] = l),
        (t[19] = d),
        (t[20] = f),
        (t[21] = b))
      : (b = t[21]),
    b
  );
}
function Z(e) {
  let t = (0, at.c)(12),
    { checked: n, disabled: r, kind: i, onChange: a } = e,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = (0, Q.jsx)(Ne, { className: `size-5 text-secondary`, kind: i })), (t[0] = i), (t[1] = o));
  let s = Oe[i],
    c;
  t[2] === s
    ? (c = t[3])
    : ((c = (0, Q.jsx)(`span`, { className: `select-none`, children: (0, Q.jsx)(R, { ...s }) })),
      (t[2] = s),
      (t[3] = c));
  let l;
  t[4] !== n || t[5] !== r || t[6] !== a
    ? ((l = (e) => (0, Q.jsx)(M, { ...e, checked: n, disabled: r, onChange: a })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = a),
      (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] !== o || t[9] !== c || t[10] !== l
      ? ((u = (0, Q.jsx)(I, { icon: o, label: c, control: l })),
        (t[8] = o),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function Ue(e) {
  let t = (0, at.c)(9),
    { checked: n, disabled: r, onChange: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(`p`, {
        className: `font-medium text-default`,
        children: (0, Q.jsx)(R, {
          id: `settings.browserUse.profileImport.windowsChrome.title`,
          defaultMessage: `Administrator approval required`,
          description: `Title for the Windows Chrome browser import consent notice`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(`p`, {
        className: `text-codex-description`,
        children: (0, Q.jsx)(R, {
          id: `settings.browserUse.profileImport.windowsChrome.description`,
          defaultMessage: `Windows protects Chrome cookies and passwords with App-Bound Encryption, so ChatGPT also needs administrator approval`,
          description: `Description for the Windows Chrome browser import consent notice`,
        }),
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((s = (0, Q.jsx)(S, { checked: n, disabled: r, onCheckedChange: i })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(`span`, {
        children: (0, Q.jsx)(R, {
          id: `settings.browserUse.profileImport.windowsChrome.consent`,
          defaultMessage: `I understand the app will request administrator approval to import this Chrome data`,
          description: `Consent label for elevated Windows Chrome browser data import`,
        }),
      })),
      (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] === s
      ? (l = t[8])
      : ((l = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-2 rounded-lg border border-primary-outline bg-text/[0.025] p-3 text-sm`,
          children: [
            a,
            o,
            (0, Q.jsxs)(`label`, {
              className: `relative flex cursor-interaction items-start gap-2`,
              children: [s, c],
            }),
          ],
        })),
        (t[7] = s),
        (t[8] = l)),
    l
  );
}
function We(e) {
  let t = (0, at.c)(142),
    {
      activeImportRequest: r,
      cookieAccessFailureMessage: i,
      importCookies: a,
      importExtensions: o,
      importHistory: s,
      importPasswords: c,
      isImporting: u,
      revealedImportResultRowCount: d,
      showCloseBrowserGuidance: f,
      result: m,
      onDone: h,
      onRetry: _,
    } = e,
    y = u || d != null,
    b = y ? c : m?.passwords != null,
    x = y ? a : m?.cookies != null,
    S = y ? s : m?.history != null,
    C = y ? o : m?.extensions != null,
    w = u && b && (r?.importPasswords ?? c),
    T = u && x && (r?.importCookies ?? a),
    te = u && S && (r?.importHistory ?? s),
    ne = u && C && (r?.importExtensions ?? o),
    re = m?.cookies?.status === `failed_to_copy`,
    ie;
  t[0] !== m || t[1] !== x
    ? ((ie = x && m != null && (m.cookies == null || q(m.cookies))), (t[0] = m), (t[1] = x), (t[2] = ie))
    : (ie = t[2]);
  let E = ie,
    D =
      E &&
      ((m?.cookies?.imported ?? 0) > 0 ||
        (m?.cookies?.status === `partial-success` && m.cookies.imported == null)),
    oe =
      D &&
      m?.cookies?.error == null &&
      (m?.cookies?.status === `success` || m?.cookies?.status === `partial-success`),
    se = m?.passwords,
    ce = m?.passwords?.profile,
    le = m?.passwords?.account,
    O,
    k,
    A,
    j,
    M,
    N,
    ue,
    P,
    F,
    I,
    L,
    z;
  if (
    t[3] !== E ||
    t[4] !== w ||
    t[5] !== m ||
    t[6] !== C ||
    t[7] !== S ||
    t[8] !== b ||
    t[9] !== se ||
    t[10] !== ce ||
    t[11] !== le
  ) {
    let e = [se, ce, le],
      n = b && m != null && (m.passwords == null || e.some(q)),
      r = e.some(Ze),
      i = n && e.some(G);
    P = i && (e.some(Xe) || e.some(Ye)) && e.every(Je);
    let a;
    (t[24] !== m || t[25] !== S
      ? ((a = S && m != null && (m.history == null || q(m.history))), (t[24] = m), (t[25] = S), (t[26] = a))
      : (a = t[26]),
      (N = a),
      (ue = N && (m?.history?.imported ?? 0) > 0 && m?.history?.status === `success`));
    let o;
    (t[27] !== m || t[28] !== C
      ? ((o = C && m != null && (m.extensions == null || q(m.extensions))),
        (t[27] = m),
        (t[28] = C),
        (t[29] = o))
      : (o = t[29]),
      (k = o),
      (A = C && (m?.extensions?.skippedInvalid ?? 0) > 0),
      (M = E || n || N || k));
    let s = M || A,
      c;
    (t[30] === m ? (c = t[31]) : ((c = m != null && me(m)), (t[30] = m), (t[31] = c)),
      (j = c),
      (O = s && !j),
      t[32] !== r || t[33] !== n || t[34] !== i
        ? ((F = n ? (0, Q.jsx)($e, { accessFailed: r, partiallyFailed: i }) : void 0),
          (t[32] = r),
          (t[33] = n),
          (t[34] = i),
          (t[35] = F))
        : (F = t[35]),
      (I = w),
      (L = `passwords`),
      (z = e.some(G)),
      (t[3] = E),
      (t[4] = w),
      (t[5] = m),
      (t[6] = C),
      (t[7] = S),
      (t[8] = b),
      (t[9] = se),
      (t[10] = ce),
      (t[11] = le),
      (t[12] = O),
      (t[13] = k),
      (t[14] = A),
      (t[15] = j),
      (t[16] = M),
      (t[17] = N),
      (t[18] = ue),
      (t[19] = P),
      (t[20] = F),
      (t[21] = I),
      (t[22] = L),
      (t[23] = z));
  } else
    ((O = t[12]),
      (k = t[13]),
      (A = t[14]),
      (j = t[15]),
      (M = t[16]),
      (N = t[17]),
      (ue = t[18]),
      (P = t[19]),
      (F = t[20]),
      (I = t[21]),
      (L = t[22]),
      (z = t[23]));
  let B;
  t[36] !== P || t[37] !== b || t[38] !== F || t[39] !== I || t[40] !== L || t[41] !== z
    ? ((B = { failureMessage: F, importing: I, kind: L, succeeded: z, visible: b, warning: P }),
      (t[36] = P),
      (t[37] = b),
      (t[38] = F),
      (t[39] = I),
      (t[40] = L),
      (t[41] = z),
      (t[42] = B))
    : (B = t[42]);
  let V;
  t[43] !== re || t[44] !== i || t[45] !== E || t[46] !== D || t[47] !== m || t[48] !== f
    ? ((V =
        m != null && E
          ? (0, Q.jsx)(Qe, {
              accessFailed: re,
              showCloseBrowserGuidance: f,
              message: i,
              partiallyFailed: D,
              source: m.source,
            })
          : void 0),
      (t[43] = re),
      (t[44] = i),
      (t[45] = E),
      (t[46] = D),
      (t[47] = m),
      (t[48] = f),
      (t[49] = V))
    : (V = t[49]);
  let H = m?.cookies,
    fe;
  t[50] === H ? (fe = t[51]) : ((fe = G(H)), (t[50] = H), (t[51] = fe));
  let U;
  t[52] !== oe || t[53] !== T || t[54] !== x || t[55] !== V || t[56] !== fe
    ? ((U = { failureMessage: V, importing: T, kind: `cookies`, succeeded: fe, visible: x, warning: oe }),
      (t[52] = oe),
      (t[53] = T),
      (t[54] = x),
      (t[55] = V),
      (t[56] = fe),
      (t[57] = U))
    : (U = t[57]);
  let W;
  t[58] === N
    ? (W = t[59])
    : ((W = N
        ? (0, Q.jsx)(R, {
            id: `settings.browserUse.profileImport.historyRetryGuidance`,
            defaultMessage: `Make sure Chrome is fully closed`,
            description: `Recovery guidance shown when Chrome browsing history could not be imported completely`,
          })
        : void 0),
      (t[58] = N),
      (t[59] = W));
  let he = m?.history,
    K;
  t[60] === he ? (K = t[61]) : ((K = G(he)), (t[60] = he), (t[61] = K));
  let ge;
  t[62] !== ue || t[63] !== te || t[64] !== S || t[65] !== W || t[66] !== K
    ? ((ge = { failureMessage: W, importing: te, kind: `history`, succeeded: K, visible: S, warning: ue }),
      (t[62] = ue),
      (t[63] = te),
      (t[64] = S),
      (t[65] = W),
      (t[66] = K),
      (t[67] = ge))
    : (ge = t[67]);
  let _e;
  t[68] !== k || t[69] !== A || t[70] !== m?.extensions
    ? ((_e = k || A ? (0, Q.jsx)(Pe, { result: m?.extensions }) : void 0),
      (t[68] = k),
      (t[69] = A),
      (t[70] = m?.extensions),
      (t[71] = _e))
    : (_e = t[71]);
  let ve = m?.extensions,
    ye;
  t[72] === ve ? (ye = t[73]) : ((ye = G(ve)), (t[72] = ve), (t[73] = ye));
  let be = m?.extensions,
    xe;
  t[74] === be ? (xe = t[75]) : ((xe = G(be)), (t[74] = be), (t[75] = xe));
  let Se;
  t[76] !== ne || t[77] !== C || t[78] !== _e || t[79] !== ye || t[80] !== xe
    ? ((Se = {
        failureMessage: _e,
        importing: ne,
        kind: `extensions`,
        succeeded: ye,
        visible: C,
        warning: xe,
      }),
      (t[76] = ne),
      (t[77] = C),
      (t[78] = _e),
      (t[79] = ye),
      (t[80] = xe),
      (t[81] = Se))
    : (Se = t[81]);
  let Ce;
  t[82] !== U || t[83] !== ge || t[84] !== Se || t[85] !== B
    ? ((Ce = [B, U, ge, Se].filter(qe)), (t[82] = U), (t[83] = ge), (t[84] = Se), (t[85] = B), (t[86] = Ce))
    : (Ce = t[86]);
  let we = Ce,
    Te;
  t[87] !== j || t[88] !== u || t[89] !== we
    ? ((Te = !u && j && we.some(Ke)), (t[87] = j), (t[88] = u), (t[89] = we), (t[90] = Te))
    : (Te = t[90]);
  let Ee = Te,
    De;
  t[91] === we ? (De = t[92]) : ((De = we.filter(Ge)), (t[91] = we), (t[92] = De));
  let ke = De,
    Ae = d ?? 0,
    je = ot.complete;
  u ? (je = Oe.title) : O && (je = ot.failed);
  let J;
  if (u) {
    let e = ke[Math.min(Ae, ke.length - 1)]?.kind ?? `passwords`,
      n;
    t[93] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = {
          cookies: ot.importingCookies,
          history: ot.importingHistory,
          passwords: ot.importingPasswords,
          extensions: ot.importingExtensions,
        }),
        (t[93] = n))
      : (n = t[93]);
    let r = n[e],
      i;
    (t[94] === r ? (i = t[95]) : ((i = (0, Q.jsx)(R, { ...r })), (t[94] = r), (t[95] = i)), (J = i));
  } else if (O) {
    let e;
    (t[96] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(R, {
          id: `settings.browserUse.profileImport.failedSummary`,
          defaultMessage: `We were unable to import your browsing data`,
          description: `Description shown when every selected category of browser data fails to import`,
        })),
        (t[96] = e))
      : (e = t[96]),
      (J = e));
  } else if (j) {
    let e;
    (t[97] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(R, {
          id: `settings.browserUse.profileImport.completeDescription`,
          defaultMessage: `Your data is now available in the built-in browser`,
          description: `Description shown after browser data import completes`,
        })),
        (t[97] = e))
      : (e = t[97]),
      (J = e));
  } else {
    let e;
    (t[98] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(R, {
          id: `settings.browserUse.profileImport.noDataDescription`,
          defaultMessage: `No browser data was available to import`,
          description: `Description shown when browser profile import finds no available data in any selected category`,
        })),
        (t[98] = e))
      : (e = t[98]),
      (J = e));
  }
  let Me;
  t[99] === je
    ? (Me = t[100])
    : ((Me = (0, Q.jsx)(de, {
        asChild: !0,
        children: (0, Q.jsx)(`h2`, { className: `sr-only`, children: (0, Q.jsx)(R, { ...je }) }),
      })),
      (t[99] = je),
      (t[100] = Me));
  let Ne;
  t[101] !== Ee || t[102] !== J
    ? ((Ne =
        Ee &&
        (0, Q.jsx)(g, { asChild: !0, children: (0, Q.jsx)(`div`, { className: `sr-only`, children: J }) })),
      (t[101] = Ee),
      (t[102] = J),
      (t[103] = Ne))
    : (Ne = t[103]);
  let Fe;
  t[104] === je ? (Fe = t[105]) : ((Fe = (0, Q.jsx)(R, { ...je })), (t[104] = je), (t[105] = Fe));
  let Y;
  t[106] !== Ee || t[107] !== J
    ? ((Y = Ee ? void 0 : (0, Q.jsx)(g, { asChild: !0, children: (0, Q.jsx)(`div`, { children: J }) })),
      (t[106] = Ee),
      (t[107] = J),
      (t[108] = Y))
    : (Y = t[108]);
  let Ie;
  t[109] !== Fe || t[110] !== Y
    ? ((Ie = (0, Q.jsx)(ee, { title: Fe, subtitle: Y })), (t[109] = Fe), (t[110] = Y), (t[111] = Ie))
    : (Ie = t[111]);
  let X;
  t[112] !== Me || t[113] !== Ne || t[114] !== Ie
    ? ((X = (0, Q.jsxs)(pe, { children: [Me, Ne, Ie] })),
      (t[112] = Me),
      (t[113] = Ne),
      (t[114] = Ie),
      (t[115] = X))
    : (X = t[115]);
  let Le;
  t[116] !== ke || t[117] !== d || t[118] !== Ae || t[119] !== we
    ? ((Le = (0, Q.jsx)(pe, {
        className: `max-h-80 overflow-y-auto`,
        children: (0, Q.jsx)(n, {
          className: `shrink-0`,
          children: we.map((e, t) => {
            let n = e.importing && Ae <= ke.indexOf(e);
            return (0, Q.jsx)(
              tt,
              {
                animationDelay: d == null ? t * 0.25 : 0,
                failureMessage: n ? void 0 : e.failureMessage,
                kind: e.kind,
                showSpinner: n,
                succeeded: e.succeeded,
                warning: e.warning,
              },
              e.kind,
            );
          }),
        }),
      })),
      (t[116] = ke),
      (t[117] = d),
      (t[118] = Ae),
      (t[119] = we),
      (t[120] = Le))
    : (Le = t[120]);
  let Re;
  t[121] !== u || t[122] !== h
    ? ((Re =
        u &&
        (0, Q.jsx)(ae, {
          color: `secondary`,
          disabled: !0,
          onClick: h,
          type: `button`,
          children: (0, Q.jsx)(R, { ...ot.cancel }),
        })),
      (t[121] = u),
      (t[122] = h),
      (t[123] = Re))
    : (Re = t[123]);
  let ze;
  t[124] !== M || t[125] !== u || t[126] !== _
    ? ((ze =
        !u &&
        M &&
        _ != null &&
        (0, Q.jsx)(ae, {
          color: `secondary`,
          onClick: _,
          type: `button`,
          children: (0, Q.jsx)(R, { ...ot.retry }),
        })),
      (t[124] = M),
      (t[125] = u),
      (t[126] = _),
      (t[127] = ze))
    : (ze = t[127]);
  let Be = u ? ot.import : ot.done,
    Ve;
  t[128] === Be ? (Ve = t[129]) : ((Ve = (0, Q.jsx)(R, { ...Be })), (t[128] = Be), (t[129] = Ve));
  let He;
  t[130] !== u || t[131] !== h || t[132] !== Ve
    ? ((He = (0, Q.jsx)(ae, {
        color: `primary`,
        disabled: u,
        loading: u,
        onClick: h,
        type: `button`,
        children: Ve,
      })),
      (t[130] = u),
      (t[131] = h),
      (t[132] = Ve),
      (t[133] = He))
    : (He = t[133]);
  let Z;
  t[134] !== Re || t[135] !== ze || t[136] !== He
    ? ((Z = (0, Q.jsx)(pe, {
        children: (0, Q.jsxs)(v, { className: l, expandSingleButton: !1, children: [Re, ze, He] }),
      })),
      (t[134] = Re),
      (t[135] = ze),
      (t[136] = He),
      (t[137] = Z))
    : (Z = t[137]);
  let Ue;
  return (
    t[138] !== X || t[139] !== Le || t[140] !== Z
      ? ((Ue = (0, Q.jsxs)(p, { children: [X, Le, Z] })),
        (t[138] = X),
        (t[139] = Le),
        (t[140] = Z),
        (t[141] = Ue))
      : (Ue = t[141]),
    Ue
  );
}
function Ge(e) {
  let { importing: t } = e;
  return t;
}
function Ke(e) {
  let { failureMessage: t, warning: n } = e;
  return t != null && !n;
}
function qe(e) {
  let { visible: t } = e;
  return t;
}
function Je(e) {
  return (
    e?.error == null &&
    (e?.status == null ||
      e.status === `success` ||
      e.status === `missing` ||
      e.status === `partial` ||
      e.status === `partial-success`) &&
    (e?.status !== `missing` || (e.failed ?? 0) === 0)
  );
}
function Ye(e) {
  return e?.status === `partial-success` && e.imported == null;
}
function Xe(e) {
  return (e?.imported ?? 0) > 0;
}
function Ze(e) {
  return e?.status === `failed_to_copy`;
}
function Qe(e) {
  let t = (0, at.c)(7),
    { accessFailed: n, showCloseBrowserGuidance: r, message: i, partiallyFailed: a, source: o } = e;
  if (n) {
    if (i != null) {
      let e;
      return (
        t[0] === i ? (e = t[1]) : ((e = (0, Q.jsx)(Q.Fragment, { children: i })), (t[0] = i), (t[1] = e)),
        e
      );
    }
    if (!r) {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(R, {
              id: `settings.browserUse.profileImport.cookieAccessError`,
              defaultMessage: `ChatGPT couldn’t access this profile’s cookies. A device security policy may be blocking access`,
              description: `Error shown when device security may have blocked access to cookies during browser profile import`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    switch (o) {
      case `chrome`: {
        let e;
        return (
          t[3] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, Q.jsx)(R, {
                id: `settings.browserUse.profileImport.chromeCookieAccessError`,
                defaultMessage: `ChatGPT couldn’t access this profile’s cookies. Chrome may still be running in the background. Close Chrome completely and try again. A device security policy may also block access`,
                description: `Error shown when Chrome or device security may have blocked access to cookies during browser profile import`,
              })),
              (t[3] = e))
            : (e = t[3]),
          e
        );
      }
      case `atlas`: {
        let e;
        return (
          t[4] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, Q.jsx)(R, {
                id: `settings.browserUse.profileImport.atlasCookieAccessError`,
                defaultMessage: `ChatGPT couldn’t access this profile’s cookies. Atlas may still be running in the background. Close Atlas completely and try again. A device security policy may also block access`,
                description: `Error shown when Atlas or device security may have blocked access to cookies during browser profile import`,
              })),
              (t[4] = e))
            : (e = t[4]),
          e
        );
      }
    }
  }
  if (a) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(R, {
            id: `settings.browserUse.profileImport.cookiesPartialError`,
            defaultMessage: `Some cookies couldn’t be imported`,
            description: `Error shown when some cookies could not be imported from a browser profile`,
          })),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let s;
  return (
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, Q.jsx)(R, {
          id: `settings.browserUse.profileImport.cookiesError`,
          defaultMessage: `Cookies couldn’t be imported`,
          description: `Error shown when cookies could not be imported from a browser profile`,
        })),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function $e(e) {
  let t = (0, at.c)(3),
    { accessFailed: n, partiallyFailed: r } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(R, {
            id: `settings.browserUse.profileImport.passwordsPartialError`,
            defaultMessage: `Some passwords couldn’t be imported`,
            description: `Error shown when some passwords could not be imported from a browser profile`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(R, {
            id: `settings.browserUse.profileImport.passwordAccessError`,
            defaultMessage: `ChatGPT couldn’t access this profile’s passwords. A device security policy may be blocking access`,
            description: `Error shown when device security may have blocked access to passwords during browser profile import`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(R, {
          id: `settings.browserUse.profileImport.passwordsError`,
          defaultMessage: `Passwords couldn’t be imported`,
          description: `Error shown when passwords could not be imported from a browser profile`,
        })),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function et(e) {
  let t = (0, at.c)(13),
    { profile: n } = e,
    r = n.source === `atlas` && `rounded-[22%]`,
    i;
  t[0] === r ? (i = t[1]) : ((i = y(`size-4 shrink-0`, r)), (t[0] = r), (t[1] = i));
  let a;
  t[2] !== n.source || t[3] !== i
    ? ((a = (0, Q.jsx)(De, { className: i, source: n.source })), (t[2] = n.source), (t[3] = i), (t[4] = a))
    : (a = t[4]);
  let o;
  t[5] === n.appName
    ? (o = t[6])
    : ((o = (0, Q.jsx)(`span`, { className: `min-w-0 truncate text-default`, children: n.appName })),
      (t[5] = n.appName),
      (t[6] = o));
  let s = n.profileName || n.profileDirectoryName,
    c;
  t[7] === s
    ? (c = t[8])
    : ((c = (0, Q.jsx)(`span`, {
        className: `min-w-0 truncate text-tertiary`,
        "data-tooltip-overflow-target": !0,
        children: s,
      })),
      (t[7] = s),
      (t[8] = c));
  let l;
  return (
    t[9] !== a || t[10] !== o || t[11] !== c
      ? ((l = (0, Q.jsxs)(`span`, {
          className: `flex min-w-0 flex-1 items-center gap-1.5`,
          children: [a, o, c],
        })),
        (t[9] = a),
        (t[10] = o),
        (t[11] = c),
        (t[12] = l))
      : (l = t[12]),
    l
  );
}
function tt(e) {
  let n = (0, at.c)(38),
    { animationDelay: r, failureMessage: i, kind: o, succeeded: c, showSpinner: l, warning: u } = e,
    d = `browser-profile-import-${o}-result-label`,
    f = `browser-profile-import-${o}-result-description`,
    p;
  n[0] === c
    ? (p = n[1])
    : ((p = c
        ? (0, Q.jsx)(s, { className: `size-5 text-chart-green` })
        : (0, Q.jsx)(a, { className: `size-5 text-tertiary` })),
      (n[0] = c),
      (n[1] = p));
  let m = p;
  if (i != null) {
    let e;
    (n[2] === u
      ? (e = n[3])
      : ((e = u
          ? (0, Q.jsx)(ye, { className: `size-5 text-warning` })
          : (0, Q.jsx)(ne, { className: `size-5 text-danger` })),
        (n[2] = u),
        (n[3] = e)),
      (m = e));
  }
  let h = c || i != null,
    g;
  n[4] !== r || n[5] !== m || n[6] !== h
    ? ((g = (0, Q.jsx)(nt, { animationDelay: r, rotate: h, children: m })),
      (n[4] = r),
      (n[5] = m),
      (n[6] = h),
      (n[7] = g))
    : (g = n[7]);
  let _ = g;
  if (l) {
    let e;
    n[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(t, { className: `size-5` })), (n[8] = e))
      : (e = n[8]);
    let r;
    (n[9] === d
      ? (r = n[10])
      : ((r = (0, Q.jsx)(`span`, {
          className: `inline-flex size-5 items-center justify-center`,
          "aria-labelledby": d,
          role: `status`,
          children: e,
        })),
        (n[9] = d),
        (n[10] = r)),
      (_ = r));
  } else if (!c && i == null) {
    let e;
    (n[11] !== f || n[12] !== d || n[13] !== _
      ? ((e = (0, Q.jsx)(`span`, {
          className: `inline-flex size-5 items-center justify-center`,
          "aria-describedby": f,
          "aria-labelledby": d,
          role: `status`,
          children: _,
        })),
        (n[11] = f),
        (n[12] = d),
        (n[13] = _),
        (n[14] = e))
      : (e = n[14]),
      (_ = e));
  }
  let v;
  if (i != null) {
    let e = u ? `text-warning` : `text-danger`,
      t = u ? `status` : `alert`,
      r;
    (n[15] !== i || n[16] !== e || n[17] !== t
      ? ((r = (0, Q.jsx)(`div`, { className: e, role: t, children: i })),
        (n[15] = i),
        (n[16] = e),
        (n[17] = t),
        (n[18] = r))
      : (r = n[18]),
      (v = r));
  } else if (!c && !l) {
    let e;
    n[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(R, {
          id: `settings.browserUse.profileImport.noDataStatus`,
          defaultMessage: `No data was found to import`,
          description: `Visible description for a selected browser data type that has no source data available to import`,
        })),
        (n[19] = e))
      : (e = n[19]);
    let t;
    (n[20] === f
      ? (t = n[21])
      : ((t = (0, Q.jsx)(`span`, { id: f, className: `text-tertiary`, children: e })),
        (n[20] = f),
        (n[21] = t)),
      (v = t));
  }
  let y;
  n[22] === o
    ? (y = n[23])
    : ((y = (0, Q.jsx)(Ne, { className: `size-5 text-secondary`, kind: o })), (n[22] = o), (n[23] = y));
  let b = Oe[o],
    x;
  n[24] === b ? (x = n[25]) : ((x = (0, Q.jsx)(R, { ...b })), (n[24] = b), (n[25] = x));
  let S;
  n[26] !== d || n[27] !== x
    ? ((S = (0, Q.jsx)(`span`, { id: d, children: x })), (n[26] = d), (n[27] = x), (n[28] = S))
    : (S = n[28]);
  let C;
  n[29] !== _ || n[30] !== y || n[31] !== S
    ? ((C = (0, Q.jsx)(I, { control: _, icon: y, label: S })),
      (n[29] = _),
      (n[30] = y),
      (n[31] = S),
      (n[32] = C))
    : (C = n[32]);
  let w;
  n[33] === v
    ? (w = n[34])
    : ((w =
        v != null &&
        (0, Q.jsx)(`div`, {
          className: `min-w-0 px-4 pb-3 text-xs leading-4 text-balance text-secondary`,
          children: v,
        })),
      (n[33] = v),
      (n[34] = w));
  let ee;
  return (
    n[35] !== C || n[36] !== w
      ? ((ee = (0, Q.jsxs)(`div`, { children: [C, w] })), (n[35] = C), (n[36] = w), (n[37] = ee))
      : (ee = n[37]),
    ee
  );
}
function nt(e) {
  let t = (0, at.c)(22),
    { animationDelay: n, children: r, rotate: i } = e,
    a = re(),
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = i
        ? [
            `scale(0.9) rotate(-14deg)`,
            `scale(1.16) rotate(6deg)`,
            `scale(0.94) rotate(-3deg)`,
            `scale(1.04) rotate(1deg)`,
            `scale(1) rotate(0deg)`,
          ]
        : [`scale(0.9)`, `scale(1.16)`, `scale(0.94)`, `scale(1.04)`, `scale(1)`]),
      (t[0] = i),
      (t[1] = o));
  let s = a ? `scale(1) rotate(0deg)` : o,
    c;
  t[2] === s ? (c = t[3]) : ((c = { opacity: 1, transform: s }), (t[2] = s), (t[3] = c));
  let l;
  t[4] !== a || t[5] !== i
    ? ((l = !a && { opacity: 0, transform: i ? `scale(0.9) rotate(-14deg)` : `scale(0.9)` }),
      (t[4] = a),
      (t[5] = i),
      (t[6] = l))
    : (l = t[6]);
  let u = a ? 0 : 0.5,
    d = a ? 0 : n,
    f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = [0, 0.38, 0.62, 0.82, 1]), (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== u || t[9] !== d
    ? ((p = { duration: u, delay: d, times: f, ease: `easeInOut` }), (t[8] = u), (t[9] = d), (t[10] = p))
    : (p = t[10]);
  let h = a ? 0 : 0.18,
    g = a ? 0 : n,
    _;
  t[11] !== g || t[12] !== h
    ? ((_ = { duration: h, delay: g }), (t[11] = g), (t[12] = h), (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== _ || t[15] !== p
    ? ((v = { transform: p, opacity: _ }), (t[14] = _), (t[15] = p), (t[16] = v))
    : (v = t[16]);
  let y;
  return (
    t[17] !== r || t[18] !== v || t[19] !== c || t[20] !== l
      ? ((y = (0, Q.jsx)(m.span, {
          className: `inline-flex`,
          animate: c,
          initial: l,
          transition: v,
          "aria-hidden": `true`,
          children: r,
        })),
        (t[17] = r),
        (t[18] = v),
        (t[19] = c),
        (t[20] = l),
        (t[21] = y))
      : (y = t[21]),
    y
  );
}
function rt(e) {
  return `${e.source}:${e.profilePath}`;
}
function it(e) {
  let t = e.profileName || e.profileDirectoryName;
  return `${e.appName} ${t}`;
}
var at, Q, ot;
function st() {
  return (st = e(() => {
    ((at = C()),
      se(),
      x(),
      u(),
      ie(),
      D(),
      j(),
      h(),
      f(),
      ce(),
      le(),
      z(),
      P(),
      T(),
      o(),
      k(),
      be(),
      d(),
      B(),
      W(),
      O(),
      ke(),
      Le(),
      je(),
      J(),
      _e(),
      (Q = _()),
      (ot = E({
        cancel: {
          id: `settings.browserUse.profileImport.cancel`,
          defaultMessage: `Cancel`,
          description: `Button that closes the browser data import dialog`,
        },
        complete: {
          id: `settings.browserUse.profileImport.complete`,
          defaultMessage: `Import complete`,
          description: `Title shown after browser data import completes`,
        },
        done: {
          id: `settings.browserUse.profileImport.done`,
          defaultMessage: `Done`,
          description: `Button that closes the browser data import dialog`,
        },
        failed: {
          id: `settings.browserUse.profileImport.failed`,
          defaultMessage: `Import failed`,
          description: `Title shown when browser data import fails`,
        },
        import: {
          id: `settings.browserUse.profileImport.import`,
          defaultMessage: `Import`,
          description: `Button that starts importing browser data`,
        },
        importingCookies: {
          id: `settings.browserUse.profileImport.importingCookies`,
          defaultMessage: `Importing cookies…`,
          description: `Progress description shown while cookies are being imported from a browser profile`,
        },
        importingHistory: {
          id: `settings.browserUse.profileImport.importingHistory`,
          defaultMessage: `Importing browsing history…`,
          description: `Progress description shown while browsing history is being imported from a browser profile`,
        },
        importingPasswords: {
          id: `settings.browserUse.profileImport.importingPasswords`,
          defaultMessage: `Importing saved passwords…`,
          description: `Progress description shown while saved passwords are being imported from a browser profile`,
        },
        importingExtensions: {
          id: `settings.browserUse.profileImport.importingExtensions`,
          defaultMessage: `Importing extensions…`,
          description: `Progress description shown while Chrome extensions, pins, and permissions are being imported`,
        },
        retry: {
          id: `settings.browserUse.profileImport.retry`,
          defaultMessage: `Retry`,
          description: `Button that retries browser data import`,
        },
      })));
  }))();
}
function ct(e) {
  let t = (0, mt.c)(105),
    { entryPoint: n, flowId: i, onClose: a, service: o } = e,
    s = r(w),
    [c, l] = (0, $.useState)(``),
    [u, d] = (0, $.useState)(!0),
    [f, p] = (0, $.useState)(!0),
    [m, h] = (0, $.useState)(!0),
    [g, _] = (0, $.useState)(!1),
    [v, y] = (0, $.useState)(null),
    x = ue(ge, `2982604767`),
    [S, C] = (0, $.useState)(void 0),
    [ee, T] = (0, $.useState)(null),
    ne = (0, $.useRef)(`before-attempt`),
    re = (0, $.useRef)(!1),
    ie = (0, $.useRef)(`close-button`),
    ae = (0, $.useRef)(!1),
    E = (0, $.useRef)(!1),
    D = (0, $.useRef)(null),
    oe;
  t[0] === o ? (oe = t[1]) : ((oe = Me(o, !0)), (t[0] = o), (t[1] = oe));
  let se = b(oe),
    ce;
  t[2] === o
    ? (ce = t[3])
    : ((ce = (e) => {
        let { request: t } = e;
        return o.importBrowserProfile(t);
      }),
      (t[2] = o),
      (t[3] = ce));
  let le, O;
  t[4] !== n || t[5] !== s
    ? ((le = (e, t) => {
        let { context: r, request: i } = t;
        ((ne.current = `after-request-error`), Ce(s, n, i, r));
      }),
      (O = async (e, t) => {
        let { context: r, previousResult: i, request: a, startedAt: o } = t;
        ne.current = `after-result`;
        let c =
            i == null
              ? e
              : {
                  ...i,
                  ...e,
                  cookies: dt(i.cookies, e.cookies),
                  passwords: dt(i.passwords, e.passwords),
                  history: dt(i.history, e.history),
                  extensions: dt(i.extensions, e.extensions),
                },
          l = me(c);
        (l && s.set(he, !0), me(e) && s.set(ve, Date.now()), Ce(s, n, a, r, e));
        let u = [a.importPasswords, a.importCookies, a.importHistory, a.importExtensions].filter(lt).length;
        if (!l) {
          C({ result: c, revealedRowCount: u });
          return;
        }
        C({ result: c, revealedRowCount: 0 });
        let d = Math.max(0, gt - (performance.now() - o));
        await Promise.all(
          Array.from({ length: u }, async (e, t) => {
            let n = d + t * _t;
            (n > 0 &&
              (await new Promise((e) => {
                setTimeout(e, n);
              })),
              C({ result: c, revealedRowCount: t + 1 }));
          }),
        );
      }),
      (t[4] = n),
      (t[5] = s),
      (t[6] = le),
      (t[7] = O))
    : ((le = t[6]), (O = t[7]));
  let k;
  t[8] !== ce || t[9] !== le || t[10] !== O
    ? ((k = { mutationFn: ce, onError: le, onSuccess: O }),
      (t[8] = ce),
      (t[9] = le),
      (t[10] = O),
      (t[11] = k))
    : (k = t[11]);
  let A = fe(k),
    j = se.data,
    M;
  t[12] !== j || t[13] !== c
    ? ((M = j?.find((e) => pt(e) === c) ?? j?.[0] ?? null), (t[12] = j), (t[13] = c), (t[14] = M))
    : (M = t[14]);
  let N = M,
    de = N != null && u,
    P = N != null && f,
    F = N?.source === `chrome` && m,
    I = x && N?.source === `chrome` && N.hasExtensions != null,
    L = I && g,
    R = typeof document < `u` && document.documentElement.dataset.codexOs === `win32`,
    z = R || (typeof document < `u` && document.documentElement.dataset.codexOs === `darwin`),
    B = R && N?.source === `chrome` && (de || P),
    V;
  t[15] === N ? (V = t[16]) : ((V = N ? pt(N) : null), (t[15] = N), (t[16] = V));
  let H = V,
    pe = H != null && ee === H,
    U;
  t[17] !== A.isError || t[18] !== A.variables || t[19] !== S?.result
    ? ((U =
        A.isError && A.variables != null
          ? {
              source: A.variables.request.source,
              profilePath: A.variables.request.profilePath,
              ...(A.variables.request.importCookies === !1
                ? {}
                : { cookies: { ...S?.result.cookies, status: `failed` } }),
              ...(A.variables.request.importPasswords === !1
                ? {}
                : { passwords: { ...S?.result.passwords, status: `failed` } }),
              ...(A.variables.request.importHistory === !0
                ? {
                    history: {
                      discovered: 0,
                      imported: 0,
                      skippedExisting: 0,
                      skippedInvalid: 0,
                      failed: 0,
                      ...S?.result.history,
                      status: `failed`,
                    },
                  }
                : {}),
              ...(A.variables.request.importExtensions === !0
                ? { extensions: { ...S?.result.extensions, status: `failed` } }
                : {}),
            }
          : null),
      (t[17] = A.isError),
      (t[18] = A.variables),
      (t[19] = S?.result),
      (t[20] = U))
    : (U = t[20]);
  let W = U,
    G;
  t[21] !== W || t[22] !== A.data || t[23] !== A.isError || t[24] !== S?.result
    ? ((G = A.isError && W != null ? { ...S?.result, ...W } : (S?.result ?? A.data)),
      (t[21] = W),
      (t[22] = A.data),
      (t[23] = A.isError),
      (t[24] = S?.result),
      (t[25] = G))
    : (G = t[25]);
  let K = G,
    q = K ?? null,
    _e;
  t[26] !== n || t[27] !== i || t[28] !== A.isPending || t[29] !== s || t[30] !== N?.source
    ? ((_e = (e) => {
        re.current ||
          ((re.current = !0),
          Se(s, n, {
            flowId: i,
            attemptIndex: D.current?.context.attemptIndex,
            source: D.current?.request.source ?? (E.current ? `chrome` : N?.source),
            windowsChromeAdminApprovalNoticeRequired:
              D.current?.context.windowsChromeAdminApprovalNoticeRequired ?? E.current,
            windowsChromeAdminApprovalNoticeAcknowledged:
              D.current?.context.windowsChromeAdminApprovalNoticeAcknowledged ?? ae.current,
            exitState: A.isPending ? void 0 : ne.current,
            dismissalReason: e,
          }));
      }),
      (t[26] = n),
      (t[27] = i),
      (t[28] = A.isPending),
      (t[29] = s),
      (t[30] = N?.source),
      (t[31] = _e))
    : (_e = t[31]);
  let ye = _e,
    be,
    Ee;
  (t[32] !== H || t[33] !== n || t[34] !== i || t[35] !== B || t[36] !== s
    ? ((be = () => {
        B && H != null && !E.current && ((E.current = !0), xe(s, n, i));
      }),
      (Ee = [H, n, i, B, s]),
      (t[32] = H),
      (t[33] = n),
      (t[34] = i),
      (t[35] = B),
      (t[36] = s),
      (t[37] = be),
      (t[38] = Ee))
    : ((be = t[37]), (Ee = t[38])),
    (0, $.useEffect)(be, Ee));
  let De;
  t[39] !== A.isPending || t[40] !== ye || t[41] !== a
    ? ((De = (e) => {
        A.isPending || (ye(e), a());
      }),
      (t[39] = A.isPending),
      (t[40] = ye),
      (t[41] = a),
      (t[42] = De))
    : (De = t[42]);
  let Oe = De,
    ke;
  t[43] !== n || t[44] !== i || t[45] !== pe || t[46] !== A || t[47] !== B || t[48] !== s
    ? ((ke = (e, t, r) => {
        if (e.importExtensions === !0 && !s.get(ge, `2982604767`)) return;
        let a = {
          flowId: i,
          attemptIndex: (D.current?.context.attemptIndex ?? 0) + 1,
          windowsChromeAdminApprovalNoticeRequired: t?.windowsChromeAdminApprovalNoticeRequired ?? B,
          windowsChromeAdminApprovalNoticeAcknowledged: t?.windowsChromeAdminApprovalNoticeAcknowledged ?? pe,
        };
        ((D.current = { context: a, previousResult: r, request: e, startedAt: performance.now() }),
          C(r == null ? void 0 : { result: r, revealedRowCount: 0 }),
          A.reset(),
          we(s, n, e, a),
          A.mutate(D.current));
      }),
      (t[43] = n),
      (t[44] = i),
      (t[45] = pe),
      (t[46] = A),
      (t[47] = B),
      (t[48] = s),
      (t[49] = ke))
    : (ke = t[49]);
  let Ae = ke,
    je;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = {
        onEscapeKeyDown: () => {
          ie.current = `escape-key`;
        },
        onPointerDownOutside: () => {
          ie.current = `backdrop`;
        },
      }),
      (t[50] = je))
    : (je = t[50]);
  let J;
  t[51] === Oe
    ? (J = t[52])
    : ((J = (e) => {
        e || Oe(ie.current);
      }),
      (t[51] = Oe),
      (t[52] = J));
  let Ne = !A.isPending && q == null,
    Pe = A.variables?.request,
    Fe = v != null,
    Y;
  t[53] === K ? (Y = t[54]) : ((Y = void 0), (t[53] = K), (t[54] = Y));
  let Ie = S?.revealedRowCount,
    X = v?.profile ?? N,
    Le;
  t[55] !== Oe || t[56] !== v || t[57] !== q
    ? ((Le = () => {
        v == null ? Oe(q == null ? `secondary-button` : `done-button`) : y(null);
      }),
      (t[55] = Oe),
      (t[56] = v),
      (t[57] = q),
      (t[58] = Le))
    : (Le = t[58]);
  let ze;
  t[59] !== H || t[60] !== n || t[61] !== i || t[62] !== s
    ? ((ze = (e) => {
        (e && !ae.current && ((ae.current = !0), Te(s, n, i)), T(e ? H : null));
      }),
      (t[59] = H),
      (t[60] = n),
      (t[61] = i),
      (t[62] = s),
      (t[63] = ze))
    : (ze = t[63]);
  let Be;
  t[64] !== v ||
  t[65] !== de ||
  t[66] !== L ||
  t[67] !== F ||
  t[68] !== P ||
  t[69] !== B ||
  t[70] !== N ||
  t[71] !== Ae
    ? ((Be = () => {
        if (v != null) {
          (Ae({ ...v.request, allowUnverifiedExtensions: !0 }), y(null));
          return;
        }
        if (N == null) return;
        let e = ut(N, de, P, F, L, B);
        e.importExtensions ? y({ profile: N, request: e }) : Ae(e);
      }),
      (t[64] = v),
      (t[65] = de),
      (t[66] = L),
      (t[67] = F),
      (t[68] = P),
      (t[69] = B),
      (t[70] = N),
      (t[71] = Ae),
      (t[72] = Be))
    : (Be = t[72]);
  let Ve;
  t[73] !== q || t[74] !== Ae
    ? ((Ve =
        q == null
          ? void 0
          : () => {
              let e = D.current;
              if (e != null) {
                let t = [q.passwords, q.passwords?.profile, q.passwords?.account],
                  n = {
                    ...e.request,
                    importCookies: e.request.importCookies !== !1 && ft(q.cookies),
                    importPasswords: e.request.importPasswords !== !1 && ft(...t),
                    importHistory: e.request.importHistory === !0 && ft(q.history),
                    importExtensions: e.request.importExtensions === !0 && ft(q.extensions),
                  };
                (n.importCookies || delete n.cookieDomainAllowlist, Ae(n, e.context, q));
              }
            }),
      (t[73] = q),
      (t[74] = Ae),
      (t[75] = Ve))
    : (Ve = t[75]);
  let He;
  t[76] === A
    ? (He = t[77])
    : ((He = (e) => {
        (l(pt(e)), T(null), C(void 0), A.reset());
      }),
      (t[76] = A),
      (t[77] = He));
  let Z;
  t[78] !== I ||
  t[79] !== pe ||
  t[80] !== u ||
  t[81] !== g ||
  t[82] !== m ||
  t[83] !== A.isPending ||
  t[84] !== f ||
  t[85] !== j ||
  t[86] !== se.isError ||
  t[87] !== se.isLoading ||
  t[88] !== B ||
  t[89] !== q ||
  t[90] !== Pe ||
  t[91] !== Fe ||
  t[92] !== Y ||
  t[93] !== Ie ||
  t[94] !== X ||
  t[95] !== Le ||
  t[96] !== ze ||
  t[97] !== Be ||
  t[98] !== Ve ||
  t[99] !== He
    ? ((Z = (0, ht.jsx)(Re, {
        activeImportRequest: Pe,
        confirmExtensionImport: Fe,
        cookieAccessFailureMessage: Y,
        elevatedChromeConsent: pe,
        extensionsAvailable: I,
        importCookies: u,
        importExtensions: g,
        importHistory: m,
        importPasswords: f,
        isImporting: A.isPending,
        isLoadingProfiles: se.isLoading,
        showCloseBrowserGuidance: z,
        profiles: j,
        profilesHaveError: se.isError,
        requiresElevatedChromeConsent: B,
        result: q,
        revealedImportResultRowCount: Ie,
        selectedProfile: X,
        onCancel: Le,
        onElevatedChromeConsentChange: ze,
        onImport: Be,
        onImportCookiesChange: d,
        onImportExtensionsChange: _,
        onImportHistoryChange: h,
        onImportPasswordsChange: p,
        onRetry: Ve,
        onSelectProfile: He,
      })),
      (t[78] = I),
      (t[79] = pe),
      (t[80] = u),
      (t[81] = g),
      (t[82] = m),
      (t[83] = A.isPending),
      (t[84] = f),
      (t[85] = j),
      (t[86] = se.isError),
      (t[87] = se.isLoading),
      (t[88] = B),
      (t[89] = q),
      (t[90] = Pe),
      (t[91] = Fe),
      (t[92] = Y),
      (t[93] = Ie),
      (t[94] = X),
      (t[95] = Le),
      (t[96] = ze),
      (t[97] = Be),
      (t[98] = Ve),
      (t[99] = He),
      (t[100] = Z))
    : (Z = t[100]);
  let Ue;
  return (
    t[101] !== J || t[102] !== Ne || t[103] !== Z
      ? ((Ue = (0, ht.jsx)(te, {
          contentProps: je,
          open: !0,
          onOpenChange: J,
          showDialogClose: Ne,
          size: `default`,
          children: Z,
        })),
        (t[101] = J),
        (t[102] = Ne),
        (t[103] = Z),
        (t[104] = Ue))
      : (Ue = t[104]),
    Ue
  );
}
function lt(e) {
  return e === !0;
}
function ut(e, t, n, r, i, a) {
  let o = {
    source: e.source,
    profilePath: e.profilePath,
    importCookies: t,
    importPasswords: n,
    importHistory: r,
    importExtensions: i,
  };
  return a ? { ...o, allowElevatedChromeDecryption: !0 } : o;
}
function dt(e, t) {
  if (t == null) return e;
  let n = e?.imported ?? 0;
  return n === 0 ? t : { ...t, imported: n + (t.imported ?? 0) };
}
function ft(...e) {
  return !e.some(G) || e.some(q);
}
function pt(e) {
  return `${e.source}:${e.profilePath}`;
}
var mt, $, ht, gt, _t;
function vt() {
  return (vt = e(() => {
    ((mt = C()),
      V(),
      A(),
      oe(),
      ($ = c()),
      h(),
      i(),
      K(),
      Ee(),
      st(),
      Ae(),
      _e(),
      (ht = _()),
      (gt = 750),
      (_t = 500));
  }))();
}
vt();
export { ct as BrowserProfileImportDialogModal };
//# sourceMappingURL=dialog-d8677da91aae.js.map
