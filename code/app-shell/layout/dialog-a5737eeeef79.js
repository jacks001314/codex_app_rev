import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  $V as r,
  A3t as i,
  AMt as a,
  Amn as o,
  Cpn as s,
  Cx as c,
  Dx as l,
  Eln as u,
  Ex as d,
  FO as f,
  Hu as p,
  JG as m,
  JK as h,
  Jrt as g,
  KG as _,
  MMt as v,
  N3t as y,
  Nd as b,
  O3t as x,
  OL as S,
  PO as C,
  Pd as w,
  QG as T,
  RS as ee,
  Rpn as te,
  S3t as E,
  Spn as D,
  Sx as ne,
  Tx as re,
  VS as ie,
  Vu as ae,
  Xrt as oe,
  Xu as O,
  Yrt as se,
  ZG as k,
  Zrt as A,
  a3t as ce,
  d3t as le,
  eH as j,
  eit as M,
  hYt as N,
  hmn as P,
  iit as F,
  jMt as I,
  kL as L,
  kMt as ue,
  kmn as R,
  mYt as z,
  nV as B,
  nit as de,
  nln as V,
  o3t as H,
  qK as U,
  qrt as fe,
  qu as W,
  rV as G,
  rit as pe,
  s3t as K,
  tit as me,
  wx as he,
  xpn as q,
  zpn as ge,
} from "./app-initial-f094ef01c64d.js";
import { Rs as J, zs as _e } from "./app-primary-4c40d73a1074.js";
import { a as ve, i as ye, l as be, o as xe, r as Se, u as Ce } from "./cookies-35a81e307103.js";
import {
  a as we,
  c as Te,
  d as Ee,
  i as De,
  l as Oe,
  s as ke,
  t as Ae,
  u as Y,
} from "./query-9d5dcdeccdca.js";
function je(e) {
  let t = (0, Pe.c)(8),
    { result: n } = e;
  if (n?.failures != null && n.failures.length > 0) {
    let e;
    t[0] === n.failures ? (e = t[1]) : ((e = n.failures.map(Me)), (t[0] = n.failures), (t[1] = e));
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
        ? ((e = (0, X.jsx)(s, {
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
        ? ((e = (0, X.jsx)(Ne, { reason: `copy_failed` })), (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (n?.status === `failed_to_initialize`) {
    let e;
    return (
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(Ne, { reason: `initialization_failed` })), (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  let r;
  return (
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, X.jsx)(s, {
          id: `settings.browserUse.profileImport.extensionsError`,
          defaultMessage: `Some extensions couldn’t be imported`,
          description: `Error shown when an older runtime does not provide individual extension import failures`,
        })),
        (t[7] = r))
      : (r = t[7]),
    r
  );
}
function Me(e, t) {
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
            (0, X.jsx)(s, {
              id: `settings.browserUse.profileImport.unknownExtension`,
              defaultMessage: `Unknown extension`,
              description: `Label for an extension import failure whose source metadata has neither a usable name nor a valid extension ID`,
            }),
        }),
        (0, X.jsx)(Ne, { reason: e.reason }),
      ],
    },
    e.id ?? t,
  );
}
function Ne(e) {
  let t = (0, Pe.c)(17),
    { reason: n } = e;
  switch (n) {
    case `unsupported_installation`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(s, {
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
          ? ((e = (0, X.jsx)(s, {
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
          ? ((e = (0, X.jsx)(s, {
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
          ? ((e = (0, X.jsx)(s, {
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
          ? ((e = (0, X.jsx)(s, {
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
          ? ((e = (0, X.jsx)(s, {
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
          ? ((e = (0, X.jsx)(s, {
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
          ? ((e = (0, X.jsx)(s, {
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
          ? ((e = (0, X.jsx)(s, {
              id: `settings.browserUse.profileImport.extensionUnsupportedPermissions`,
              defaultMessage: `The saved site-access restrictions can’t be preserved in Codex`,
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
          ? ((e = (0, X.jsx)(s, {
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
          ? ((e = (0, X.jsx)(s, {
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
          ? ((e = (0, X.jsx)(s, {
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
          ? ((e = (0, X.jsx)(s, {
              id: `settings.browserUse.profileImport.extensionUnsupportedRequirements`,
              defaultMessage: `This extension requires features that aren’t available in Codex`,
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
          ? ((e = (0, X.jsx)(s, {
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
          ? ((e = (0, X.jsx)(s, {
              id: `settings.browserUse.profileImport.extensionInitializationFailed`,
              defaultMessage: `Codex couldn’t start extension import. Restart Codex and try again.`,
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
          ? ((e = (0, X.jsx)(s, {
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
          ? ((e = (0, X.jsx)(s, {
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
var Pe,
  X,
  Fe = e(() => {
    ((Pe = R()), D(), (X = P()));
  });
function Ie(e) {
  let t = (0, rt.c)(76),
    {
      activeImportRequest: n,
      cookieAccessFailureMessage: r,
      confirmExtensionImport: i,
      elevatedChromeConsent: a,
      extensionsAvailable: o,
      importCookies: c,
      importExtensions: l,
      importHistory: u,
      importPasswords: d,
      isImporting: f,
      isLoadingProfiles: p,
      showCloseBrowserGuidance: m,
      profilePickerOpen: h,
      profiles: _,
      profilesHaveError: v,
      revealedImportResultRowCount: y,
      requiresElevatedChromeConsent: b,
      result: x,
      selectedProfile: S,
      onCancel: C,
      onElevatedChromeConsentChange: w,
      onImport: T,
      onImportCookiesChange: ee,
      onImportExtensionsChange: te,
      onImportHistoryChange: E,
      onImportPasswordsChange: D,
      onProfilePickerOpenChange: ne,
      onRetry: re,
      onSelectProfile: ie,
    } = e;
  if (i !== void 0 && i && S != null) {
    let e;
    return (
      t[0] !== C || t[1] !== T || t[2] !== S
        ? ((e = (0, Z.jsx)(ze, { profile: S, onCancel: C, onImport: T })),
          (t[0] = C),
          (t[1] = T),
          (t[2] = S),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let O = S != null && c,
    k = S != null && d,
    ce = S?.source === `chrome` && u,
    le = o && l;
  if (f || x != null) {
    let e = x?.extensions != null || (n?.importExtensions ?? le),
      i;
    return (
      t[4] !== n ||
      t[5] !== r ||
      t[6] !== O ||
      t[7] !== ce ||
      t[8] !== k ||
      t[9] !== f ||
      t[10] !== C ||
      t[11] !== re ||
      t[12] !== x ||
      t[13] !== y ||
      t[14] !== m ||
      t[15] !== e
        ? ((i = (0, Z.jsx)(He, {
            activeImportRequest: n,
            cookieAccessFailureMessage: r,
            importCookies: O,
            importExtensions: e,
            importHistory: ce,
            importPasswords: k,
            isImporting: f,
            revealedImportResultRowCount: y,
            showCloseBrowserGuidance: m,
            result: x,
            onDone: C,
            onRetry: re,
          })),
          (t[4] = n),
          (t[5] = r),
          (t[6] = O),
          (t[7] = ce),
          (t[8] = k),
          (t[9] = f),
          (t[10] = C),
          (t[11] = re),
          (t[12] = x),
          (t[13] = y),
          (t[14] = m),
          (t[15] = e),
          (t[16] = i))
        : (i = t[16]),
      i
    );
  }
  let j = S == null || (!O && !k && !ce && !le) || (b && !a),
    M;
  t[17] === T
    ? (M = t[18])
    : ((M = (e) => {
        (e.preventDefault(), T());
      }),
      (t[17] = T),
      (t[18] = M));
  let N;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Z.jsx)(pe, {
        asChild: !0,
        children: (0, Z.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, Z.jsx)(s, { ...Te.title }),
        }),
      })),
      (t[19] = N))
    : (N = t[19]);
  let P;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Z.jsx)(s, { ...Te.title })), (t[20] = P))
    : (P = t[20]);
  let F;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Z.jsxs)(A, {
        children: [
          N,
          (0, Z.jsx)(oe, {
            title: P,
            subtitle: (0, Z.jsx)(de, {
              asChild: !0,
              children: (0, Z.jsx)(`div`, {
                children: (0, Z.jsx)(s, {
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
  let I = f || !_?.length,
    L;
  t[22] !== p ||
  t[23] !== ne ||
  t[24] !== ie ||
  t[25] !== h ||
  t[26] !== _ ||
  t[27] !== S ||
  t[28] !== I
    ? ((L = (0, Z.jsx)(Le, {
        disabled: I,
        isLoading: p,
        open: h,
        profiles: _,
        selectedProfile: S,
        onOpenChange: ne,
        onSelectProfile: ie,
      })),
      (t[22] = p),
      (t[23] = ne),
      (t[24] = ie),
      (t[25] = h),
      (t[26] = _),
      (t[27] = S),
      (t[28] = I),
      (t[29] = L))
    : (L = t[29]);
  let R;
  t[30] === _?.length
    ? (R = t[31])
    : ((R =
        _?.length === 0 &&
        (0, Z.jsx)(`p`, {
          className: `text-sm text-codex-description`,
          children: (0, Z.jsx)(s, {
            id: `settings.browserUse.profileImport.noProfilesDescription`,
            defaultMessage: `No Chrome or Atlas profiles were found on this device`,
            description: `Message shown when no importable browser profiles are found`,
          }),
        })),
      (t[30] = _?.length),
      (t[31] = R));
  let z;
  t[32] !== S || t[33] !== m
    ? ((z =
        m &&
        S != null &&
        (0, Z.jsx)(`p`, {
          className: `text-sm text-codex-description`,
          children: (0, Z.jsx)(s, {
            id: `settings.browserUse.profileImport.closeBrowser`,
            defaultMessage: `Close {browserName} completely before importing`,
            description: `Instruction to close the source browser before importing its profile data`,
            values: { browserName: S.appName },
          }),
        })),
      (t[32] = S),
      (t[33] = m),
      (t[34] = z))
    : (z = t[34]);
  let B;
  t[35] !== O ||
  t[36] !== le ||
  t[37] !== ce ||
  t[38] !== k ||
  t[39] !== o ||
  t[40] !== f ||
  t[41] !== ee ||
  t[42] !== te ||
  t[43] !== E ||
  t[44] !== D ||
  t[45] !== S
    ? ((B =
        S != null &&
        (0, Z.jsxs)(ae, {
          children: [
            (0, Z.jsx)(Be, { checked: k, disabled: f, kind: `passwords`, onChange: D }),
            (0, Z.jsx)(Be, { checked: O, disabled: f, kind: `cookies`, onChange: ee }),
            S.source === `chrome` &&
              (0, Z.jsx)(Be, { checked: ce, disabled: f, kind: `history`, onChange: E }),
            o && (0, Z.jsx)(Be, { checked: le, disabled: f, kind: `extensions`, onChange: te }),
          ],
        })),
      (t[35] = O),
      (t[36] = le),
      (t[37] = ce),
      (t[38] = k),
      (t[39] = o),
      (t[40] = f),
      (t[41] = ee),
      (t[42] = te),
      (t[43] = E),
      (t[44] = D),
      (t[45] = S),
      (t[46] = B))
    : (B = t[46]);
  let V;
  t[47] !== a || t[48] !== f || t[49] !== w || t[50] !== b
    ? ((V = b && (0, Z.jsx)(Ve, { checked: a, disabled: f, onChange: w })),
      (t[47] = a),
      (t[48] = f),
      (t[49] = w),
      (t[50] = b),
      (t[51] = V))
    : (V = t[51]);
  let H;
  t[52] === v
    ? (H = t[53])
    : ((H =
        v &&
        (0, Z.jsx)(`p`, {
          className: `px-3 text-sm text-danger`,
          role: `alert`,
          children: (0, Z.jsx)(s, {
            id: `settings.browserUse.profileImport.profilesError`,
            defaultMessage: `We couldn't load browser profiles. Close and reopen this dialog to try again`,
            description: `Error shown when browser profiles cannot be loaded for import`,
          }),
        })),
      (t[52] = v),
      (t[53] = H));
  let U;
  t[54] !== B || t[55] !== V || t[56] !== H || t[57] !== L || t[58] !== R || t[59] !== z
    ? ((U = (0, Z.jsxs)(A, { className: `gap-3`, children: [L, R, z, B, V, H] })),
      (t[54] = B),
      (t[55] = V),
      (t[56] = H),
      (t[57] = L),
      (t[58] = R),
      (t[59] = z),
      (t[60] = U))
    : (U = t[60]);
  let W;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, Z.jsx)(s, { ...Q.cancel })), (t[61] = W))
    : (W = t[61]);
  let G;
  t[62] !== f || t[63] !== C
    ? ((G = (0, Z.jsx)(ue, {
        color: `secondary`,
        disabled: f,
        onClick: C,
        type: `button`,
        children: W,
      })),
      (t[62] = f),
      (t[63] = C),
      (t[64] = G))
    : (G = t[64]);
  let K;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, Z.jsx)(s, { ...Q.import })), (t[65] = K))
    : (K = t[65]);
  let me;
  t[66] !== j || t[67] !== f
    ? ((me = (0, Z.jsx)(ue, {
        color: `primary`,
        disabled: j,
        loading: f,
        type: `submit`,
        children: K,
      })),
      (t[66] = j),
      (t[67] = f),
      (t[68] = me))
    : (me = t[68]);
  let he;
  t[69] !== G || t[70] !== me
    ? ((he = (0, Z.jsx)(A, { children: (0, Z.jsxs)(se, { className: fe, children: [G, me] }) })),
      (t[69] = G),
      (t[70] = me),
      (t[71] = he))
    : (he = t[71]);
  let q;
  return (
    t[72] !== U || t[73] !== he || t[74] !== M
      ? ((q = (0, Z.jsxs)(g, { as: `form`, onSubmit: M, children: [F, U, he] })),
        (t[72] = U),
        (t[73] = he),
        (t[74] = M),
        (t[75] = q))
      : (q = t[75]),
    q
  );
}
function Le(e) {
  let t = (0, rt.c)(27),
    {
      disabled: n,
      isLoading: r,
      open: i,
      profiles: a,
      selectedProfile: o,
      onOpenChange: c,
      onSelectProfile: l,
    } = e,
    u;
  t[0] === o ? (u = t[1]) : ((u = o ? tt(o) : null), (t[0] = o), (t[1] = u));
  let d = u,
    f;
  t[2] === o ? (f = t[3]) : ((f = o ? nt(o) : void 0), (t[2] = o), (t[3] = f));
  let p = f,
    h = a?.length === 1,
    g = h || void 0,
    v = h && `pointer-events-none`,
    y;
  t[4] === v ? (y = t[5]) : ((y = te(`min-w-0 flex-1`, v)), (t[4] = v), (t[5] = y));
  let b = h ? `hidden` : void 0,
    x = h ? void 0 : n,
    S = h ? -1 : void 0,
    C;
  t[6] !== r || t[7] !== o
    ? ((C = (0, Z.jsx)(Re, { isLoading: r, selectedProfile: o })),
      (t[6] = r),
      (t[7] = o),
      (t[8] = C))
    : (C = t[8]);
  let w;
  t[9] !== p ||
  t[10] !== g ||
  t[11] !== y ||
  t[12] !== b ||
  t[13] !== x ||
  t[14] !== S ||
  t[15] !== C
    ? ((w = (0, Z.jsx)(ee, {
        "aria-disabled": g,
        "aria-label": p,
        className: y,
        chevronClassName: b,
        disabled: x,
        tabIndex: S,
        children: C,
      })),
      (t[9] = p),
      (t[10] = g),
      (t[11] = y),
      (t[12] = b),
      (t[13] = x),
      (t[14] = S),
      (t[15] = C),
      (t[16] = w))
    : (w = t[16]);
  let T = w,
    E;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Z.jsx)(`span`, {
        className: `shrink-0 text-sm text-codex-description`,
        children: (0, Z.jsx)(s, {
          id: `settings.browserUse.profileImport.from`,
          defaultMessage: `From`,
          description: `Label before the browser profile selector`,
        }),
      })),
      (t[17] = E))
    : (E = t[17]);
  let D;
  return (
    t[18] !== n ||
    t[19] !== c ||
    t[20] !== l ||
    t[21] !== i ||
    t[22] !== a ||
    t[23] !== d ||
    t[24] !== h ||
    t[25] !== T
      ? ((D = (0, Z.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            E,
            h
              ? T
              : (0, Z.jsx)(_, {
                  align: `end`,
                  contentWidth: `menuWide`,
                  disabled: n,
                  open: i,
                  triggerButton: T,
                  onOpenChange: c,
                  children: (0, Z.jsx)(m.Section, {
                    className: `max-h-[250px] overflow-y-auto`,
                    children: a?.map((e) => {
                      let t = tt(e);
                      return (0, Z.jsx)(
                        m.Item,
                        {
                          "aria-label": nt(e),
                          RightIcon: t === d ? U : void 0,
                          onSelect: () => l(e),
                          children: (0, Z.jsx)(Qe, { profile: e }),
                        },
                        t,
                      );
                    }),
                  }),
                }),
          ],
        })),
        (t[18] = n),
        (t[19] = c),
        (t[20] = l),
        (t[21] = i),
        (t[22] = a),
        (t[23] = d),
        (t[24] = h),
        (t[25] = T),
        (t[26] = D))
      : (D = t[26]),
    D
  );
}
function Re(e) {
  let t = (0, rt.c)(4),
    { isLoading: n, selectedProfile: r } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)(I, { className: `icon-2xs` }),
              (0, Z.jsx)(s, {
                id: `settings.browserUse.profileImport.loadingProfiles`,
                defaultMessage: `Loading profiles…`,
                description: `Placeholder shown while importable browser profiles load`,
              }),
            ],
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r == null) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(s, {
            id: `settings.browserUse.profileImport.noProfiles`,
            defaultMessage: `No profiles found`,
            description: `Placeholder shown when no importable browser profiles are found`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i;
  return (
    t[2] === r ? (i = t[3]) : ((i = (0, Z.jsx)(Qe, { profile: r })), (t[2] = r), (t[3] = i)), i
  );
}
function ze(e) {
  let t = (0, rt.c)(22),
    { profile: n, onCancel: r, onImport: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(s, {
        id: `settings.browserUse.profileImport.extensionsConfirmationTitle`,
        defaultMessage: `Import unverified extensions?`,
        description: `Title asking for fresh consent before importing unauthenticated extension packages and saved permissions from a Chrome profile`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o = a,
    c;
  t[1] !== n.appName || t[2] !== n.profileName
    ? ((c = (0, Z.jsx)(s, {
        id: `settings.browserUse.profileImport.extensionsConfirmationDescription`,
        defaultMessage: `Codex can’t verify extensions or saved permissions from this {appName} profile “{profileName}”. If imported, these extensions may run code or access data in Codex. Continue only if you trust the profile.`,
        description: `Security warning that the selected browser profile's extension packages and saved permission grants cannot be authenticated and may access data in Codex`,
        values: { appName: n.appName, profileName: n.profileName },
      })),
      (t[1] = n.appName),
      (t[2] = n.profileName),
      (t[3] = c))
    : (c = t[3]);
  let l = c,
    u;
  t[4] === i
    ? (u = t[5])
    : ((u = (e) => {
        (e.preventDefault(), i());
      }),
      (t[4] = i),
      (t[5] = u));
  let d;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(pe, { className: `sr-only`, children: o })), (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === l
    ? (f = t[8])
    : ((f = (0, Z.jsx)(de, { className: `sr-only`, children: l })), (t[7] = l), (t[8] = f));
  let p;
  t[9] === l
    ? (p = t[10])
    : ((p = (0, Z.jsx)(A, { children: (0, Z.jsx)(oe, { title: o, subtitle: l }) })),
      (t[9] = l),
      (t[10] = p));
  let m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(s, { ...Q.cancel })), (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === r
    ? (h = t[13])
    : ((h = (0, Z.jsx)(ue, {
        autoFocus: !0,
        color: `secondary`,
        onClick: r,
        type: `button`,
        children: m,
      })),
      (t[12] = r),
      (t[13] = h));
  let _;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsx)(ue, {
        type: `submit`,
        children: (0, Z.jsx)(s, {
          id: `settings.browserUse.profileImport.extensionsConfirmationAction`,
          defaultMessage: `Import extensions`,
          description: `Button granting explicit consent to import unverified extension packages and their saved permissions from the selected profile`,
        }),
      })),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] === h
    ? (v = t[16])
    : ((v = (0, Z.jsx)(A, { children: (0, Z.jsxs)(se, { children: [h, _] }) })),
      (t[15] = h),
      (t[16] = v));
  let y;
  return (
    t[17] !== v || t[18] !== u || t[19] !== f || t[20] !== p
      ? ((y = (0, Z.jsxs)(g, { as: `form`, onSubmit: u, children: [d, f, p, v] })),
        (t[17] = v),
        (t[18] = u),
        (t[19] = f),
        (t[20] = p),
        (t[21] = y))
      : (y = t[21]),
    y
  );
}
function Be(e) {
  let t = (0, rt.c)(12),
    { checked: n, disabled: r, kind: i, onChange: a } = e,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = (0, Z.jsx)(Y, { className: `size-5 text-secondary`, kind: i })),
      (t[0] = i),
      (t[1] = o));
  let c = Te[i],
    l;
  t[2] === c
    ? (l = t[3])
    : ((l = (0, Z.jsx)(`span`, { className: `select-none`, children: (0, Z.jsx)(s, { ...c }) })),
      (t[2] = c),
      (t[3] = l));
  let u;
  t[4] !== n || t[5] !== r || t[6] !== a
    ? ((u = (e) => (0, Z.jsx)(T, { ...e, checked: n, disabled: r, onChange: a })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = a),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== o || t[9] !== l || t[10] !== u
      ? ((d = (0, Z.jsx)(W, { icon: o, label: l, control: u })),
        (t[8] = o),
        (t[9] = l),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function Ve(e) {
  let t = (0, rt.c)(9),
    { checked: n, disabled: r, onChange: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(`p`, {
        className: `font-medium text-default`,
        children: (0, Z.jsx)(s, {
          id: `settings.browserUse.profileImport.windowsChrome.title`,
          defaultMessage: `Administrator approval required`,
          description: `Title for the Windows Chrome browser import consent notice`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(`p`, {
        className: `text-codex-description`,
        children: (0, Z.jsx)(s, {
          id: `settings.browserUse.profileImport.windowsChrome.description`,
          defaultMessage: `Windows protects Chrome cookies and passwords with App-Bound Encryption, so ChatGPT also needs administrator approval`,
          description: `Description for the Windows Chrome browser import consent notice`,
        }),
      })),
      (t[1] = o))
    : (o = t[1]);
  let c;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((c = (0, Z.jsx)(B, { checked: n, disabled: r, onCheckedChange: i })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(`span`, {
        children: (0, Z.jsx)(s, {
          id: `settings.browserUse.profileImport.windowsChrome.consent`,
          defaultMessage: `I understand the app will request administrator approval to import this Chrome data`,
          description: `Consent label for elevated Windows Chrome browser data import`,
        }),
      })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] === c
      ? (u = t[8])
      : ((u = (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-2 rounded-lg border border-primary-outline bg-text/[0.025] p-3 text-sm`,
          children: [
            a,
            o,
            (0, Z.jsxs)(`label`, {
              className: `relative flex cursor-interaction items-start gap-2`,
              children: [c, l],
            }),
          ],
        })),
        (t[7] = c),
        (t[8] = u)),
    u
  );
}
function He(e) {
  let t = (0, rt.c)(142),
    {
      activeImportRequest: n,
      cookieAccessFailureMessage: r,
      importCookies: i,
      importExtensions: a,
      importHistory: o,
      importPasswords: l,
      isImporting: u,
      revealedImportResultRowCount: d,
      showCloseBrowserGuidance: f,
      result: p,
      onDone: m,
      onRetry: h,
    } = e,
    _ = u || d != null,
    v = _ ? l : p?.passwords != null,
    y = _ ? i : p?.cookies != null,
    b = _ ? o : p?.history != null,
    x = _ ? a : p?.extensions != null,
    S = u && v && (n?.importPasswords ?? l),
    C = u && y && (n?.importCookies ?? i),
    w = u && b && (n?.importHistory ?? o),
    T = u && x && (n?.importExtensions ?? a),
    ee = p?.cookies?.status === `failed_to_copy`,
    te;
  t[0] !== p || t[1] !== y
    ? ((te = y && p != null && (p.cookies == null || ne(p.cookies))),
      (t[0] = p),
      (t[1] = y),
      (t[2] = te))
    : (te = t[2]);
  let E = te,
    D =
      E &&
      ((p?.cookies?.imported ?? 0) > 0 ||
        (p?.cookies?.status === `partial-success` && p.cookies.imported == null)),
    ie =
      D &&
      p?.cookies?.error == null &&
      (p?.cookies?.status === `success` || p?.cookies?.status === `partial-success`),
    O = p?.passwords,
    k = p?.passwords?.profile,
    ce = p?.passwords?.account,
    le,
    j,
    M,
    N,
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    V;
  if (
    t[3] !== E ||
    t[4] !== S ||
    t[5] !== p ||
    t[6] !== x ||
    t[7] !== b ||
    t[8] !== v ||
    t[9] !== O ||
    t[10] !== k ||
    t[11] !== ce
  ) {
    let e = [O, k, ce],
      n = v && p != null && (p.passwords == null || e.some(ne)),
      r = e.some(Ye),
      i = n && e.some(c);
    L = i && (e.some(Je) || e.some(qe)) && e.every(Ke);
    let a;
    (t[24] !== p || t[25] !== b
      ? ((a = b && p != null && (p.history == null || ne(p.history))),
        (t[24] = p),
        (t[25] = b),
        (t[26] = a))
      : (a = t[26]),
      (F = a),
      (I = F && (p?.history?.imported ?? 0) > 0 && p?.history?.status === `success`));
    let o;
    (t[27] !== p || t[28] !== x
      ? ((o = x && p != null && (p.extensions == null || ne(p.extensions))),
        (t[27] = p),
        (t[28] = x),
        (t[29] = o))
      : (o = t[29]),
      (j = o),
      (M = x && (p?.extensions?.skippedInvalid ?? 0) > 0),
      (P = E || n || F || j));
    let s = P || M,
      l;
    (t[30] === p ? (l = t[31]) : ((l = p != null && re(p)), (t[30] = p), (t[31] = l)),
      (N = l),
      (le = s && !N),
      t[32] !== r || t[33] !== n || t[34] !== i
        ? ((R = n ? (0, Z.jsx)(Ze, { accessFailed: r, partiallyFailed: i }) : void 0),
          (t[32] = r),
          (t[33] = n),
          (t[34] = i),
          (t[35] = R))
        : (R = t[35]),
      (z = S),
      (B = `passwords`),
      (V = e.some(c)),
      (t[3] = E),
      (t[4] = S),
      (t[5] = p),
      (t[6] = x),
      (t[7] = b),
      (t[8] = v),
      (t[9] = O),
      (t[10] = k),
      (t[11] = ce),
      (t[12] = le),
      (t[13] = j),
      (t[14] = M),
      (t[15] = N),
      (t[16] = P),
      (t[17] = F),
      (t[18] = I),
      (t[19] = L),
      (t[20] = R),
      (t[21] = z),
      (t[22] = B),
      (t[23] = V));
  } else
    ((le = t[12]),
      (j = t[13]),
      (M = t[14]),
      (N = t[15]),
      (P = t[16]),
      (F = t[17]),
      (I = t[18]),
      (L = t[19]),
      (R = t[20]),
      (z = t[21]),
      (B = t[22]),
      (V = t[23]));
  let H;
  t[36] !== L || t[37] !== v || t[38] !== R || t[39] !== z || t[40] !== B || t[41] !== V
    ? ((H = { failureMessage: R, importing: z, kind: B, succeeded: V, visible: v, warning: L }),
      (t[36] = L),
      (t[37] = v),
      (t[38] = R),
      (t[39] = z),
      (t[40] = B),
      (t[41] = V),
      (t[42] = H))
    : (H = t[42]);
  let U;
  t[43] !== ee || t[44] !== r || t[45] !== E || t[46] !== D || t[47] !== p || t[48] !== f
    ? ((U =
        p != null && E
          ? (0, Z.jsx)(Xe, {
              accessFailed: ee,
              showCloseBrowserGuidance: f,
              message: r,
              partiallyFailed: D,
              source: p.source,
            })
          : void 0),
      (t[43] = ee),
      (t[44] = r),
      (t[45] = E),
      (t[46] = D),
      (t[47] = p),
      (t[48] = f),
      (t[49] = U))
    : (U = t[49]);
  let W = p?.cookies,
    G;
  t[50] === W ? (G = t[51]) : ((G = c(W)), (t[50] = W), (t[51] = G));
  let K;
  t[52] !== ie || t[53] !== C || t[54] !== y || t[55] !== U || t[56] !== G
    ? ((K = {
        failureMessage: U,
        importing: C,
        kind: `cookies`,
        succeeded: G,
        visible: y,
        warning: ie,
      }),
      (t[52] = ie),
      (t[53] = C),
      (t[54] = y),
      (t[55] = U),
      (t[56] = G),
      (t[57] = K))
    : (K = t[57]);
  let me;
  t[58] === F
    ? (me = t[59])
    : ((me = F
        ? (0, Z.jsx)(s, {
            id: `settings.browserUse.profileImport.historyRetryGuidance`,
            defaultMessage: `Make sure Chrome is fully closed`,
            description: `Recovery guidance shown when Chrome browsing history could not be imported completely`,
          })
        : void 0),
      (t[58] = F),
      (t[59] = me));
  let he = p?.history,
    q;
  t[60] === he ? (q = t[61]) : ((q = c(he)), (t[60] = he), (t[61] = q));
  let ge;
  t[62] !== I || t[63] !== w || t[64] !== b || t[65] !== me || t[66] !== q
    ? ((ge = {
        failureMessage: me,
        importing: w,
        kind: `history`,
        succeeded: q,
        visible: b,
        warning: I,
      }),
      (t[62] = I),
      (t[63] = w),
      (t[64] = b),
      (t[65] = me),
      (t[66] = q),
      (t[67] = ge))
    : (ge = t[67]);
  let J;
  t[68] !== j || t[69] !== M || t[70] !== p?.extensions
    ? ((J = j || M ? (0, Z.jsx)(je, { result: p?.extensions }) : void 0),
      (t[68] = j),
      (t[69] = M),
      (t[70] = p?.extensions),
      (t[71] = J))
    : (J = t[71]);
  let _e = p?.extensions,
    ve;
  t[72] === _e ? (ve = t[73]) : ((ve = c(_e)), (t[72] = _e), (t[73] = ve));
  let ye = p?.extensions,
    be;
  t[74] === ye ? (be = t[75]) : ((be = c(ye)), (t[74] = ye), (t[75] = be));
  let xe;
  t[76] !== T || t[77] !== x || t[78] !== J || t[79] !== ve || t[80] !== be
    ? ((xe = {
        failureMessage: J,
        importing: T,
        kind: `extensions`,
        succeeded: ve,
        visible: x,
        warning: be,
      }),
      (t[76] = T),
      (t[77] = x),
      (t[78] = J),
      (t[79] = ve),
      (t[80] = be),
      (t[81] = xe))
    : (xe = t[81]);
  let Se;
  t[82] !== K || t[83] !== ge || t[84] !== xe || t[85] !== H
    ? ((Se = [H, K, ge, xe].filter(Ge)),
      (t[82] = K),
      (t[83] = ge),
      (t[84] = xe),
      (t[85] = H),
      (t[86] = Se))
    : (Se = t[86]);
  let Ce = Se,
    we;
  t[87] !== N || t[88] !== u || t[89] !== Ce
    ? ((we = !u && N && Ce.some(We)), (t[87] = N), (t[88] = u), (t[89] = Ce), (t[90] = we))
    : (we = t[90]);
  let Ee = we,
    De;
  t[91] === Ce ? (De = t[92]) : ((De = Ce.filter(Ue)), (t[91] = Ce), (t[92] = De));
  let Oe = De,
    ke = d ?? 0,
    Ae = Q.complete;
  u ? (Ae = Te.title) : le && (Ae = Q.failed);
  let Y;
  if (u) {
    let e = Oe[Math.min(ke, Oe.length - 1)]?.kind ?? `passwords`,
      n;
    t[93] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = {
          cookies: Q.importingCookies,
          history: Q.importingHistory,
          passwords: Q.importingPasswords,
          extensions: Q.importingExtensions,
        }),
        (t[93] = n))
      : (n = t[93]);
    let r = n[e],
      i;
    (t[94] === r ? (i = t[95]) : ((i = (0, Z.jsx)(s, { ...r })), (t[94] = r), (t[95] = i)),
      (Y = i));
  } else if (le) {
    let e;
    (t[96] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(s, {
          id: `settings.browserUse.profileImport.failedSummary`,
          defaultMessage: `We were unable to import your browsing data`,
          description: `Description shown when every selected category of browser data fails to import`,
        })),
        (t[96] = e))
      : (e = t[96]),
      (Y = e));
  } else if (N) {
    let e;
    (t[97] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(s, {
          id: `settings.browserUse.profileImport.completeDescription`,
          defaultMessage: `Your data is now available in the built-in browser`,
          description: `Description shown after browser data import completes`,
        })),
        (t[97] = e))
      : (e = t[97]),
      (Y = e));
  } else {
    let e;
    (t[98] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(s, {
          id: `settings.browserUse.profileImport.noDataDescription`,
          defaultMessage: `No browser data was available to import`,
          description: `Description shown when browser profile import finds no available data in any selected category`,
        })),
        (t[98] = e))
      : (e = t[98]),
      (Y = e));
  }
  let Me;
  t[99] === Ae
    ? (Me = t[100])
    : ((Me = (0, Z.jsx)(pe, {
        asChild: !0,
        children: (0, Z.jsx)(`h2`, { className: `sr-only`, children: (0, Z.jsx)(s, { ...Ae }) }),
      })),
      (t[99] = Ae),
      (t[100] = Me));
  let Ne;
  t[101] !== Ee || t[102] !== Y
    ? ((Ne =
        Ee &&
        (0, Z.jsx)(de, {
          asChild: !0,
          children: (0, Z.jsx)(`div`, { className: `sr-only`, children: Y }),
        })),
      (t[101] = Ee),
      (t[102] = Y),
      (t[103] = Ne))
    : (Ne = t[103]);
  let Pe;
  t[104] === Ae ? (Pe = t[105]) : ((Pe = (0, Z.jsx)(s, { ...Ae })), (t[104] = Ae), (t[105] = Pe));
  let X;
  t[106] !== Ee || t[107] !== Y
    ? ((X = Ee
        ? void 0
        : (0, Z.jsx)(de, { asChild: !0, children: (0, Z.jsx)(`div`, { children: Y }) })),
      (t[106] = Ee),
      (t[107] = Y),
      (t[108] = X))
    : (X = t[108]);
  let Fe;
  t[109] !== Pe || t[110] !== X
    ? ((Fe = (0, Z.jsx)(oe, { title: Pe, subtitle: X })),
      (t[109] = Pe),
      (t[110] = X),
      (t[111] = Fe))
    : (Fe = t[111]);
  let Ie;
  t[112] !== Me || t[113] !== Ne || t[114] !== Fe
    ? ((Ie = (0, Z.jsxs)(A, { children: [Me, Ne, Fe] })),
      (t[112] = Me),
      (t[113] = Ne),
      (t[114] = Fe),
      (t[115] = Ie))
    : (Ie = t[115]);
  let Le;
  t[116] !== Oe || t[117] !== d || t[118] !== ke || t[119] !== Ce
    ? ((Le = (0, Z.jsx)(A, {
        className: `max-h-80 overflow-y-auto`,
        children: (0, Z.jsx)(ae, {
          className: `shrink-0`,
          children: Ce.map((e, t) => {
            let n = e.importing && ke <= Oe.indexOf(e);
            return (0, Z.jsx)(
              $e,
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
      (t[116] = Oe),
      (t[117] = d),
      (t[118] = ke),
      (t[119] = Ce),
      (t[120] = Le))
    : (Le = t[120]);
  let Re;
  t[121] !== u || t[122] !== m
    ? ((Re =
        u &&
        (0, Z.jsx)(ue, {
          color: `secondary`,
          disabled: !0,
          onClick: m,
          type: `button`,
          children: (0, Z.jsx)(s, { ...Q.cancel }),
        })),
      (t[121] = u),
      (t[122] = m),
      (t[123] = Re))
    : (Re = t[123]);
  let ze;
  t[124] !== P || t[125] !== u || t[126] !== h
    ? ((ze =
        !u &&
        P &&
        h != null &&
        (0, Z.jsx)(ue, {
          color: `secondary`,
          onClick: h,
          type: `button`,
          children: (0, Z.jsx)(s, { ...Q.retry }),
        })),
      (t[124] = P),
      (t[125] = u),
      (t[126] = h),
      (t[127] = ze))
    : (ze = t[127]);
  let Be = u ? Q.import : Q.done,
    Ve;
  t[128] === Be ? (Ve = t[129]) : ((Ve = (0, Z.jsx)(s, { ...Be })), (t[128] = Be), (t[129] = Ve));
  let He;
  t[130] !== u || t[131] !== m || t[132] !== Ve
    ? ((He = (0, Z.jsx)(ue, {
        color: `primary`,
        disabled: u,
        loading: u,
        onClick: m,
        type: `button`,
        children: Ve,
      })),
      (t[130] = u),
      (t[131] = m),
      (t[132] = Ve),
      (t[133] = He))
    : (He = t[133]);
  let Qe;
  t[134] !== Re || t[135] !== ze || t[136] !== He
    ? ((Qe = (0, Z.jsx)(A, {
        children: (0, Z.jsxs)(se, {
          className: fe,
          expandSingleButton: !1,
          children: [Re, ze, He],
        }),
      })),
      (t[134] = Re),
      (t[135] = ze),
      (t[136] = He),
      (t[137] = Qe))
    : (Qe = t[137]);
  let et;
  return (
    t[138] !== Ie || t[139] !== Le || t[140] !== Qe
      ? ((et = (0, Z.jsxs)(g, { children: [Ie, Le, Qe] })),
        (t[138] = Ie),
        (t[139] = Le),
        (t[140] = Qe),
        (t[141] = et))
      : (et = t[141]),
    et
  );
}
function Ue(e) {
  let { importing: t } = e;
  return t;
}
function We(e) {
  let { failureMessage: t, warning: n } = e;
  return t != null && !n;
}
function Ge(e) {
  let { visible: t } = e;
  return t;
}
function Ke(e) {
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
function qe(e) {
  return e?.status === `partial-success` && e.imported == null;
}
function Je(e) {
  return (e?.imported ?? 0) > 0;
}
function Ye(e) {
  return e?.status === `failed_to_copy`;
}
function Xe(e) {
  let t = (0, rt.c)(7),
    { accessFailed: n, showCloseBrowserGuidance: r, message: i, partiallyFailed: a, source: o } = e;
  if (n) {
    if (i != null) {
      let e;
      return (
        t[0] === i
          ? (e = t[1])
          : ((e = (0, Z.jsx)(Z.Fragment, { children: i })), (t[0] = i), (t[1] = e)),
        e
      );
    }
    if (!r) {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(s, {
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
            ? ((e = (0, Z.jsx)(s, {
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
            ? ((e = (0, Z.jsx)(s, {
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
        ? ((e = (0, Z.jsx)(s, {
            id: `settings.browserUse.profileImport.cookiesPartialError`,
            defaultMessage: `Some cookies couldn’t be imported`,
            description: `Error shown when some cookies could not be imported from a browser profile`,
          })),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let c;
  return (
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, Z.jsx)(s, {
          id: `settings.browserUse.profileImport.cookiesError`,
          defaultMessage: `Cookies couldn’t be imported`,
          description: `Error shown when cookies could not be imported from a browser profile`,
        })),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function Ze(e) {
  let t = (0, rt.c)(3),
    { accessFailed: n, partiallyFailed: r } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(s, {
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
        ? ((e = (0, Z.jsx)(s, {
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
      ? ((i = (0, Z.jsx)(s, {
          id: `settings.browserUse.profileImport.passwordsError`,
          defaultMessage: `Passwords couldn’t be imported`,
          description: `Error shown when passwords could not be imported from a browser profile`,
        })),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Qe(e) {
  let t = (0, rt.c)(13),
    { profile: n } = e,
    r = n.source === `atlas` && `rounded-[22%]`,
    i;
  t[0] === r ? (i = t[1]) : ((i = te(`size-4 shrink-0`, r)), (t[0] = r), (t[1] = i));
  let a;
  t[2] !== n.source || t[3] !== i
    ? ((a = (0, Z.jsx)(we, { className: i, source: n.source })),
      (t[2] = n.source),
      (t[3] = i),
      (t[4] = a))
    : (a = t[4]);
  let o;
  t[5] === n.appName
    ? (o = t[6])
    : ((o = (0, Z.jsx)(`span`, {
        className: `min-w-0 truncate text-default`,
        children: n.appName,
      })),
      (t[5] = n.appName),
      (t[6] = o));
  let s = n.profileName || n.profileDirectoryName,
    c;
  t[7] === s
    ? (c = t[8])
    : ((c = (0, Z.jsx)(`span`, { className: `min-w-0 truncate text-tertiary`, children: s })),
      (t[7] = s),
      (t[8] = c));
  let l;
  return (
    t[9] !== a || t[10] !== o || t[11] !== c
      ? ((l = (0, Z.jsxs)(`span`, {
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
function $e(e) {
  let t = (0, rt.c)(38),
    { animationDelay: n, failureMessage: i, kind: a, succeeded: o, showSpinner: c, warning: l } = e,
    u = `browser-profile-import-${a}-result-label`,
    d = `browser-profile-import-${a}-result-description`,
    f;
  t[0] === o
    ? (f = t[1])
    : ((f = o
        ? (0, Z.jsx)(b, { className: `size-5 text-chart-green` })
        : (0, Z.jsx)(r, { className: `size-5 text-tertiary` })),
      (t[0] = o),
      (t[1] = f));
  let p = f;
  if (i != null) {
    let e;
    (t[2] === l
      ? (e = t[3])
      : ((e = l
          ? (0, Z.jsx)(C, { className: `size-5 text-warning` })
          : (0, Z.jsx)(J, { className: `size-5 text-danger` })),
        (t[2] = l),
        (t[3] = e)),
      (p = e));
  }
  let m = o || i != null,
    h;
  t[4] !== n || t[5] !== p || t[6] !== m
    ? ((h = (0, Z.jsx)(et, { animationDelay: n, rotate: m, children: p })),
      (t[4] = n),
      (t[5] = p),
      (t[6] = m),
      (t[7] = h))
    : (h = t[7]);
  let g = h;
  if (c) {
    let e;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(I, { className: `size-5` })), (t[8] = e))
      : (e = t[8]);
    let n;
    (t[9] === u
      ? (n = t[10])
      : ((n = (0, Z.jsx)(`span`, {
          className: `inline-flex size-5 items-center justify-center`,
          "aria-labelledby": u,
          role: `status`,
          children: e,
        })),
        (t[9] = u),
        (t[10] = n)),
      (g = n));
  } else if (!o && i == null) {
    let e;
    (t[11] !== d || t[12] !== u || t[13] !== g
      ? ((e = (0, Z.jsx)(`span`, {
          className: `inline-flex size-5 items-center justify-center`,
          "aria-describedby": d,
          "aria-labelledby": u,
          role: `status`,
          children: g,
        })),
        (t[11] = d),
        (t[12] = u),
        (t[13] = g),
        (t[14] = e))
      : (e = t[14]),
      (g = e));
  }
  let _;
  if (i != null) {
    let e = l ? `text-warning` : `text-danger`,
      n = l ? `status` : `alert`,
      r;
    (t[15] !== i || t[16] !== e || t[17] !== n
      ? ((r = (0, Z.jsx)(`div`, { className: e, role: n, children: i })),
        (t[15] = i),
        (t[16] = e),
        (t[17] = n),
        (t[18] = r))
      : (r = t[18]),
      (_ = r));
  } else if (!o && !c) {
    let e;
    t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(s, {
          id: `settings.browserUse.profileImport.noDataStatus`,
          defaultMessage: `No data was found to import`,
          description: `Visible description for a selected browser data type that has no source data available to import`,
        })),
        (t[19] = e))
      : (e = t[19]);
    let n;
    (t[20] === d
      ? (n = t[21])
      : ((n = (0, Z.jsx)(`span`, { id: d, className: `text-tertiary`, children: e })),
        (t[20] = d),
        (t[21] = n)),
      (_ = n));
  }
  let v;
  t[22] === a
    ? (v = t[23])
    : ((v = (0, Z.jsx)(Y, { className: `size-5 text-secondary`, kind: a })),
      (t[22] = a),
      (t[23] = v));
  let y = Te[a],
    x;
  t[24] === y ? (x = t[25]) : ((x = (0, Z.jsx)(s, { ...y })), (t[24] = y), (t[25] = x));
  let S;
  t[26] !== u || t[27] !== x
    ? ((S = (0, Z.jsx)(`span`, { id: u, children: x })), (t[26] = u), (t[27] = x), (t[28] = S))
    : (S = t[28]);
  let w;
  t[29] !== g || t[30] !== v || t[31] !== S
    ? ((w = (0, Z.jsx)(W, { control: g, icon: v, label: S })),
      (t[29] = g),
      (t[30] = v),
      (t[31] = S),
      (t[32] = w))
    : (w = t[32]);
  let T;
  t[33] === _
    ? (T = t[34])
    : ((T =
        _ != null &&
        (0, Z.jsx)(`div`, {
          className: `min-w-0 px-4 pb-3 text-xs leading-4 text-balance text-secondary`,
          children: _,
        })),
      (t[33] = _),
      (t[34] = T));
  let ee;
  return (
    t[35] !== w || t[36] !== T
      ? ((ee = (0, Z.jsxs)(`div`, { children: [w, T] })), (t[35] = w), (t[36] = T), (t[37] = ee))
      : (ee = t[37]),
    ee
  );
}
function et(e) {
  let t = (0, rt.c)(22),
    { animationDelay: n, children: r, rotate: i } = e,
    a = L(),
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
  let d = a ? 0 : 0.5,
    f = a ? 0 : n,
    p;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = [0, 0.38, 0.62, 0.82, 1]), (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== d || t[9] !== f
    ? ((m = { duration: d, delay: f, times: p, ease: `easeInOut` }),
      (t[8] = d),
      (t[9] = f),
      (t[10] = m))
    : (m = t[10]);
  let h = a ? 0 : 0.18,
    g = a ? 0 : n,
    _;
  t[11] !== g || t[12] !== h
    ? ((_ = { duration: h, delay: g }), (t[11] = g), (t[12] = h), (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== _ || t[15] !== m
    ? ((v = { transform: m, opacity: _ }), (t[14] = _), (t[15] = m), (t[16] = v))
    : (v = t[16]);
  let y;
  return (
    t[17] !== r || t[18] !== v || t[19] !== c || t[20] !== l
      ? ((y = (0, Z.jsx)(u.span, {
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
function tt(e) {
  return `${e.source}:${e.profilePath}`;
}
function nt(e) {
  let t = e.profileName || e.profileDirectoryName;
  return `${e.appName} ${t}`;
}
var rt,
  Z,
  Q,
  it = e(() => {
    ((rt = R()),
      ge(),
      V(),
      D(),
      a(),
      G(),
      F(),
      M(),
      k(),
      v(),
      n(),
      S(),
      w(),
      h(),
      j(),
      f(),
      _e(),
      O(),
      ie(),
      p(),
      Ee(),
      Fe(),
      Oe(),
      ke(),
      d(),
      (Z = P()),
      (Q = q({
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
  });
function at(e) {
  let t = (0, dt.c)(105),
    { entryPoint: n, flowId: r, onClose: a, service: o } = e,
    s = i(ce),
    [c, u] = (0, $.useState)(``),
    [d, f] = (0, $.useState)(!0),
    [p, m] = (0, $.useState)(!0),
    [h, g] = (0, $.useState)(!0),
    [_, v] = (0, $.useState)(!1),
    [b, x] = (0, $.useState)(null),
    S = y(N, `2982604767`),
    [C, w] = (0, $.useState)(void 0),
    [T, ee] = (0, $.useState)(null),
    te = (0, $.useRef)(`before-attempt`),
    D = (0, $.useRef)(!1),
    ne = (0, $.useRef)(`close-button`),
    ie = (0, $.useRef)(!1),
    ae = (0, $.useRef)(!1),
    oe = (0, $.useRef)(null),
    O;
  t[0] === o ? (O = t[1]) : ((O = Ae(o, !0)), (t[0] = o), (t[1] = O));
  let se = E(O),
    k;
  t[2] === o
    ? (k = t[3])
    : ((k = (e) => {
        let { request: t } = e;
        return o.importBrowserProfile(t);
      }),
      (t[2] = o),
      (t[3] = k));
  let A, j;
  t[4] !== n || t[5] !== s
    ? ((A = (e, t) => {
        let { context: r, request: i } = t;
        ((te.current = `after-request-error`), ye(s, n, i, r));
      }),
      (j = async (e, t) => {
        let { context: r, previousResult: i, request: a, startedAt: o } = t;
        te.current = `after-result`;
        let c =
            i == null
              ? e
              : {
                  ...i,
                  ...e,
                  cookies: ct(i.cookies, e.cookies),
                  passwords: ct(i.passwords, e.passwords),
                  history: ct(i.history, e.history),
                  extensions: ct(i.extensions, e.extensions),
                },
          u = re(c);
        (u && s.set(he, !0), re(e) && s.set(l, Date.now()), ye(s, n, a, r, e));
        let d = [a.importPasswords, a.importCookies, a.importHistory, a.importExtensions].filter(
          ot,
        ).length;
        if (!u) {
          w({ result: c, revealedRowCount: d });
          return;
        }
        w({ result: c, revealedRowCount: 0 });
        let f = Math.max(0, pt - (performance.now() - o));
        await Promise.all(
          Array.from({ length: d }, async (e, t) => {
            let n = f + t * mt;
            (n > 0 &&
              (await new Promise((e) => {
                setTimeout(e, n);
              })),
              w({ result: c, revealedRowCount: t + 1 }));
          }),
        );
      }),
      (t[4] = n),
      (t[5] = s),
      (t[6] = A),
      (t[7] = j))
    : ((A = t[6]), (j = t[7]));
  let M;
  t[8] !== k || t[9] !== A || t[10] !== j
    ? ((M = { mutationFn: k, onError: A, onSuccess: j }),
      (t[8] = k),
      (t[9] = A),
      (t[10] = j),
      (t[11] = M))
    : (M = t[11]);
  let P = le(M),
    F = se.data,
    I;
  t[12] !== F || t[13] !== c
    ? ((I = F?.find((e) => ut(e) === c) ?? F?.[0] ?? null), (t[12] = F), (t[13] = c), (t[14] = I))
    : (I = t[14]);
  let L = I,
    ue = L != null && d,
    R = L != null && p,
    z = L?.source === `chrome` && h,
    B = S && L?.source === `chrome` && L.hasExtensions != null,
    de = B && _,
    V = typeof document < `u` && document.documentElement.dataset.codexOs === `win32`,
    H = V || (typeof document < `u` && document.documentElement.dataset.codexOs === `darwin`),
    U = V && L?.source === `chrome` && (ue || R),
    fe;
  t[15] === L ? (fe = t[16]) : ((fe = L ? ut(L) : null), (t[15] = L), (t[16] = fe));
  let W = fe,
    G = W != null && T === W,
    pe;
  t[17] !== P.isError || t[18] !== P.variables || t[19] !== C?.result
    ? ((pe =
        P.isError && P.variables != null
          ? {
              source: P.variables.request.source,
              profilePath: P.variables.request.profilePath,
              ...(P.variables.request.importCookies === !1
                ? {}
                : { cookies: { ...C?.result.cookies, status: `failed` } }),
              ...(P.variables.request.importPasswords === !1
                ? {}
                : { passwords: { ...C?.result.passwords, status: `failed` } }),
              ...(P.variables.request.importHistory === !0
                ? {
                    history: {
                      discovered: 0,
                      imported: 0,
                      skippedExisting: 0,
                      skippedInvalid: 0,
                      failed: 0,
                      ...C?.result.history,
                      status: `failed`,
                    },
                  }
                : {}),
              ...(P.variables.request.importExtensions === !0
                ? { extensions: { ...C?.result.extensions, status: `failed` } }
                : {}),
            }
          : null),
      (t[17] = P.isError),
      (t[18] = P.variables),
      (t[19] = C?.result),
      (t[20] = pe))
    : (pe = t[20]);
  let K = pe,
    q;
  t[21] !== K || t[22] !== P.data || t[23] !== P.isError || t[24] !== C?.result
    ? ((q = P.isError && K != null ? { ...C?.result, ...K } : (C?.result ?? P.data)),
      (t[21] = K),
      (t[22] = P.data),
      (t[23] = P.isError),
      (t[24] = C?.result),
      (t[25] = q))
    : (q = t[25]);
  let ge = q,
    J = ge ?? null,
    _e;
  t[26] !== n || t[27] !== r || t[28] !== P.isPending || t[29] !== s || t[30] !== L?.source
    ? ((_e = (e) => {
        D.current ||
          ((D.current = !0),
          xe(s, n, {
            flowId: r,
            attemptIndex: oe.current?.context.attemptIndex,
            source: oe.current?.request.source ?? (ae.current ? `chrome` : L?.source),
            windowsChromeAdminApprovalNoticeRequired:
              oe.current?.context.windowsChromeAdminApprovalNoticeRequired ?? ae.current,
            windowsChromeAdminApprovalNoticeAcknowledged:
              oe.current?.context.windowsChromeAdminApprovalNoticeAcknowledged ?? ie.current,
            exitState: P.isPending ? void 0 : te.current,
            dismissalReason: e,
          }));
      }),
      (t[26] = n),
      (t[27] = r),
      (t[28] = P.isPending),
      (t[29] = s),
      (t[30] = L?.source),
      (t[31] = _e))
    : (_e = t[31]);
  let Se = _e,
    we,
    Te;
  (t[32] !== W || t[33] !== n || t[34] !== r || t[35] !== U || t[36] !== s
    ? ((we = () => {
        !U || W == null || ae.current || ((ae.current = !0), Ce(s, n, r));
      }),
      (Te = [W, n, r, U, s]),
      (t[32] = W),
      (t[33] = n),
      (t[34] = r),
      (t[35] = U),
      (t[36] = s),
      (t[37] = we),
      (t[38] = Te))
    : ((we = t[37]), (Te = t[38])),
    (0, $.useEffect)(we, Te));
  let Ee;
  t[39] !== P.isPending || t[40] !== Se || t[41] !== a
    ? ((Ee = (e) => {
        P.isPending || (Se(e), a());
      }),
      (t[39] = P.isPending),
      (t[40] = Se),
      (t[41] = a),
      (t[42] = Ee))
    : (Ee = t[42]);
  let De = Ee,
    Oe;
  t[43] !== n || t[44] !== r || t[45] !== G || t[46] !== P || t[47] !== U || t[48] !== s
    ? ((Oe = (e, t, i) => {
        if (e.importExtensions === !0 && !s.get(N, `2982604767`)) return;
        let a = {
          flowId: r,
          attemptIndex: (oe.current?.context.attemptIndex ?? 0) + 1,
          windowsChromeAdminApprovalNoticeRequired:
            t?.windowsChromeAdminApprovalNoticeRequired ?? U,
          windowsChromeAdminApprovalNoticeAcknowledged:
            t?.windowsChromeAdminApprovalNoticeAcknowledged ?? G,
        };
        ((oe.current = { context: a, previousResult: i, request: e, startedAt: performance.now() }),
          w(i == null ? void 0 : { result: i, revealedRowCount: 0 }),
          P.reset(),
          ve(s, n, e, a),
          P.mutate(oe.current));
      }),
      (t[43] = n),
      (t[44] = r),
      (t[45] = G),
      (t[46] = P),
      (t[47] = U),
      (t[48] = s),
      (t[49] = Oe))
    : (Oe = t[49]);
  let ke = Oe,
    Y;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = {
        onEscapeKeyDown: () => {
          ne.current = `escape-key`;
        },
        onPointerDownOutside: () => {
          ne.current = `backdrop`;
        },
      }),
      (t[50] = Y))
    : (Y = t[50]);
  let je;
  t[51] === De
    ? (je = t[52])
    : ((je = (e) => {
        e || De(ne.current);
      }),
      (t[51] = De),
      (t[52] = je));
  let Me = !P.isPending && J == null,
    Ne = P.variables?.request,
    Pe = b != null,
    X;
  t[53] === ge ? (X = t[54]) : ((X = void 0), (t[53] = ge), (t[54] = X));
  let Fe = C?.revealedRowCount,
    Le = b?.profile ?? L,
    Re;
  t[55] !== De || t[56] !== b || t[57] !== J
    ? ((Re = () => {
        b == null ? De(J == null ? `secondary-button` : `done-button`) : x(null);
      }),
      (t[55] = De),
      (t[56] = b),
      (t[57] = J),
      (t[58] = Re))
    : (Re = t[58]);
  let ze;
  t[59] !== W || t[60] !== n || t[61] !== r || t[62] !== s
    ? ((ze = (e) => {
        (e && !ie.current && ((ie.current = !0), be(s, n, r)), ee(e ? W : null));
      }),
      (t[59] = W),
      (t[60] = n),
      (t[61] = r),
      (t[62] = s),
      (t[63] = ze))
    : (ze = t[63]);
  let Be;
  t[64] !== b ||
  t[65] !== ue ||
  t[66] !== de ||
  t[67] !== z ||
  t[68] !== R ||
  t[69] !== U ||
  t[70] !== L ||
  t[71] !== ke
    ? ((Be = () => {
        if (b != null) {
          (ke({ ...b.request, allowUnverifiedExtensions: !0 }), x(null));
          return;
        }
        if (L == null) return;
        let e = st(L, ue, R, z, de, U);
        e.importExtensions ? x({ profile: L, request: e }) : ke(e);
      }),
      (t[64] = b),
      (t[65] = ue),
      (t[66] = de),
      (t[67] = z),
      (t[68] = R),
      (t[69] = U),
      (t[70] = L),
      (t[71] = ke),
      (t[72] = Be))
    : (Be = t[72]);
  let Ve;
  t[73] !== J || t[74] !== ke
    ? ((Ve =
        J == null
          ? void 0
          : () => {
              let e = oe.current;
              if (e != null) {
                let t = [J.passwords, J.passwords?.profile, J.passwords?.account],
                  n = {
                    ...e.request,
                    importCookies: e.request.importCookies !== !1 && lt(J.cookies),
                    importPasswords: e.request.importPasswords !== !1 && lt(...t),
                    importHistory: e.request.importHistory === !0 && lt(J.history),
                    importExtensions: e.request.importExtensions === !0 && lt(J.extensions),
                  };
                (n.importCookies || delete n.cookieDomainAllowlist, ke(n, e.context, J));
              }
            }),
      (t[73] = J),
      (t[74] = ke),
      (t[75] = Ve))
    : (Ve = t[75]);
  let He;
  t[76] === P
    ? (He = t[77])
    : ((He = (e) => {
        (u(ut(e)), ee(null), w(void 0), P.reset());
      }),
      (t[76] = P),
      (t[77] = He));
  let Ue;
  t[78] !== B ||
  t[79] !== G ||
  t[80] !== d ||
  t[81] !== _ ||
  t[82] !== h ||
  t[83] !== P.isPending ||
  t[84] !== p ||
  t[85] !== F ||
  t[86] !== se.isError ||
  t[87] !== se.isLoading ||
  t[88] !== U ||
  t[89] !== J ||
  t[90] !== Ne ||
  t[91] !== Pe ||
  t[92] !== X ||
  t[93] !== Fe ||
  t[94] !== Le ||
  t[95] !== Re ||
  t[96] !== ze ||
  t[97] !== Be ||
  t[98] !== Ve ||
  t[99] !== He
    ? ((Ue = (0, ft.jsx)(Ie, {
        activeImportRequest: Ne,
        confirmExtensionImport: Pe,
        cookieAccessFailureMessage: X,
        elevatedChromeConsent: G,
        extensionsAvailable: B,
        importCookies: d,
        importExtensions: _,
        importHistory: h,
        importPasswords: p,
        isImporting: P.isPending,
        isLoadingProfiles: se.isLoading,
        showCloseBrowserGuidance: H,
        profiles: F,
        profilesHaveError: se.isError,
        requiresElevatedChromeConsent: U,
        result: J,
        revealedImportResultRowCount: Fe,
        selectedProfile: Le,
        onCancel: Re,
        onElevatedChromeConsentChange: ze,
        onImport: Be,
        onImportCookiesChange: f,
        onImportExtensionsChange: v,
        onImportHistoryChange: g,
        onImportPasswordsChange: m,
        onRetry: Ve,
        onSelectProfile: He,
      })),
      (t[78] = B),
      (t[79] = G),
      (t[80] = d),
      (t[81] = _),
      (t[82] = h),
      (t[83] = P.isPending),
      (t[84] = p),
      (t[85] = F),
      (t[86] = se.isError),
      (t[87] = se.isLoading),
      (t[88] = U),
      (t[89] = J),
      (t[90] = Ne),
      (t[91] = Pe),
      (t[92] = X),
      (t[93] = Fe),
      (t[94] = Le),
      (t[95] = Re),
      (t[96] = ze),
      (t[97] = Be),
      (t[98] = Ve),
      (t[99] = He),
      (t[100] = Ue))
    : (Ue = t[100]);
  let We;
  return (
    t[101] !== je || t[102] !== Me || t[103] !== Ue
      ? ((We = (0, ft.jsx)(me, {
          contentProps: Y,
          open: !0,
          onOpenChange: je,
          showDialogClose: Me,
          size: `default`,
          children: Ue,
        })),
        (t[101] = je),
        (t[102] = Me),
        (t[103] = Ue),
        (t[104] = We))
      : (We = t[104]),
    We
  );
}
function ot(e) {
  return e === !0;
}
function st(e, t, n, r, i, a) {
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
function ct(e, t) {
  if (t == null) return e;
  let n = e?.imported ?? 0;
  return n === 0 ? t : { ...t, imported: n + (t.imported ?? 0) };
}
function lt(...e) {
  return !e.some(c) || e.some(ne);
}
function ut(e) {
  return `${e.source}:${e.profilePath}`;
}
var dt, $, ft, pt, mt;
e(() => {
  ((dt = R()),
    K(),
    x(),
    ($ = t(o(), 1)),
    F(),
    H(),
    z(),
    Se(),
    it(),
    De(),
    d(),
    (ft = P()),
    (pt = 750),
    (mt = 500));
})();
export { at as BrowserProfileImportDialogModal };
//# sourceMappingURL=dialog-a5737eeeef79.js.map
