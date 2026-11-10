import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AO as r,
  CO as i,
  Cot as a,
  HT as o,
  IDt as s,
  Iot as c,
  Ixt as l,
  JC as u,
  JR as d,
  Lot as f,
  MO as p,
  Pxt as m,
  TO as h,
  UT as g,
  VT as _,
  WT as v,
  Xot as y,
  Xx as b,
  YR as x,
  Yot as S,
  Yx as C,
  _Mt as w,
  _O as T,
  _b as E,
  _wt as D,
  aO as ee,
  b0 as te,
  cO as ne,
  cz as re,
  fO as ie,
  gMt as O,
  gO as ae,
  gb as oe,
  gwt as se,
  i3 as k,
  iw as A,
  jDt as j,
  jO as M,
  lO as N,
  mO as ce,
  oO as le,
  qC as P,
  r3 as F,
  sO as ue,
  sz as de,
  t3 as I,
  tw as L,
  vO as fe,
  vzt as R,
  wot as z,
  xMt as B,
  y0 as V,
  yzt as H,
  zxt as pe,
} from "./app-shared-bbfeca5e5737.js";
import {
  FN as me,
  IN as he,
  LN as U,
  NN as ge,
  OPr as W,
  PN as G,
  QP as K,
  RN as _e,
  kPr as ve,
  tF as ye,
} from "./app-initial-5851df3f6cb1.js";
import { by as be, xy as xe } from "./app-primary-fe8a450b3b04.js";
import { c as Se, i as Ce, n as we, r as Te, s as Ee, t as De } from "./analytics-5ad18191f6b9.js";
import {
  a as Oe,
  c as ke,
  d as Ae,
  i as je,
  l as Me,
  s as q,
  t as Ne,
  u as Pe,
} from "./query-e80b55bdefca.js";
function Fe(e) {
  let t = (0, Le.c)(8),
    { result: n } = e;
  if (n?.failures != null && n.failures.length > 0) {
    let e;
    t[0] === n.failures ? (e = t[1]) : ((e = n.failures.map(Ie)), (t[0] = n.failures), (t[1] = e));
    let r;
    return (
      t[2] === e
        ? (r = t[3])
        : ((r = (0, Y.jsx)(`ul`, { className: `flex flex-col gap-3 select-text`, children: e })),
          (t[2] = e),
          (t[3] = r)),
      r
    );
  }
  if (n?.status === `failed_to_read`) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(s, {
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
        ? ((e = (0, Y.jsx)(J, { reason: `copy_failed` })), (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (n?.status === `failed_to_initialize`) {
    let e;
    return (
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(J, { reason: `initialization_failed` })), (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  let r;
  return (
    t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Y.jsx)(s, {
          id: `settings.browserUse.profileImport.extensionsError`,
          defaultMessage: `Some extensions couldn’t be imported`,
          description: `Error shown when an older runtime does not provide individual extension import failures`,
        })),
        (t[7] = r))
      : (r = t[7]),
    r
  );
}
function Ie(e, t) {
  return (0, Y.jsxs)(
    `li`,
    {
      className: `flex min-w-0 flex-col gap-1`,
      children: [
        (0, Y.jsx)(`div`, {
          className: `font-medium wrap-anywhere text-default`,
          children:
            e.name ||
            e.id ||
            (0, Y.jsx)(s, {
              id: `settings.browserUse.profileImport.unknownExtension`,
              defaultMessage: `Unknown extension`,
              description: `Label for an extension import failure whose source metadata has neither a usable name nor a valid extension ID`,
            }),
        }),
        (0, Y.jsx)(J, { reason: e.reason }),
      ],
    },
    e.id ?? t,
  );
}
function J(e) {
  let t = (0, Le.c)(17),
    { reason: n } = e;
  switch (n) {
    case `unsupported_installation`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
          ? ((e = (0, Y.jsx)(s, {
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
var Le, Y;
function X() {
  return (X = e(() => {
    ((Le = R()), j(), (Y = B()));
  }))();
}
function Re(e) {
  let n = (0, at.c)(76),
    {
      activeImportRequest: r,
      cookieAccessFailureMessage: i,
      confirmExtensionImport: a,
      elevatedChromeConsent: o,
      extensionsAvailable: c,
      importCookies: l,
      importExtensions: u,
      importHistory: d,
      importPasswords: f,
      isImporting: p,
      isLoadingProfiles: m,
      showCloseBrowserGuidance: h,
      profilePickerOpen: g,
      profiles: _,
      profilesHaveError: v,
      revealedImportResultRowCount: y,
      requiresElevatedChromeConsent: b,
      result: x,
      selectedProfile: S,
      onCancel: C,
      onElevatedChromeConsentChange: w,
      onImport: E,
      onImportCookiesChange: D,
      onImportExtensionsChange: te,
      onImportHistoryChange: re,
      onImportPasswordsChange: ie,
      onProfilePickerOpenChange: O,
      onRetry: oe,
      onSelectProfile: se,
    } = e;
  if (a !== void 0 && a && S != null) {
    let e;
    return (
      n[0] !== C || n[1] !== E || n[2] !== S
        ? ((e = (0, Q.jsx)(He, { profile: S, onCancel: C, onImport: E })),
          (n[0] = C),
          (n[1] = E),
          (n[2] = S),
          (n[3] = e))
        : (e = n[3]),
      e
    );
  }
  let k = S != null && l,
    A = S != null && f,
    j = S?.source === `chrome` && d,
    M = c && u;
  if (p || x != null) {
    let e = x?.extensions != null || (r?.importExtensions ?? M),
      t;
    return (
      n[4] !== r ||
      n[5] !== i ||
      n[6] !== k ||
      n[7] !== j ||
      n[8] !== A ||
      n[9] !== p ||
      n[10] !== C ||
      n[11] !== oe ||
      n[12] !== x ||
      n[13] !== y ||
      n[14] !== h ||
      n[15] !== e
        ? ((t = (0, Q.jsx)(We, {
            activeImportRequest: r,
            cookieAccessFailureMessage: i,
            importCookies: k,
            importExtensions: e,
            importHistory: j,
            importPasswords: A,
            isImporting: p,
            revealedImportResultRowCount: y,
            showCloseBrowserGuidance: h,
            result: x,
            onDone: C,
            onRetry: oe,
          })),
          (n[4] = r),
          (n[5] = i),
          (n[6] = k),
          (n[7] = j),
          (n[8] = A),
          (n[9] = p),
          (n[10] = C),
          (n[11] = oe),
          (n[12] = x),
          (n[13] = y),
          (n[14] = h),
          (n[15] = e),
          (n[16] = t))
        : (t = n[16]),
      t
    );
  }
  let ce = S == null || (!k && !A && !j && !M) || (b && !o),
    F;
  n[17] === E
    ? (F = n[18])
    : ((F = (e) => {
        (e.preventDefault(), E());
      }),
      (n[17] = E),
      (n[18] = F));
  let de;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, Q.jsx)(T, {
        asChild: !0,
        children: (0, Q.jsx)(`h2`, { className: `sr-only`, children: (0, Q.jsx)(s, { ...ke.title }) }),
      })),
      (n[19] = de))
    : (de = n[19]);
  let I;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(s, { ...ke.title })), (n[20] = I))
    : (I = n[20]);
  let L;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Q.jsxs)(N, {
        children: [
          de,
          (0, Q.jsx)(ne, {
            title: I,
            subtitle: (0, Q.jsx)(ae, {
              asChild: !0,
              children: (0, Q.jsx)(`div`, {
                children: (0, Q.jsx)(s, {
                  id: `settings.browserUse.profileImport.subtitle`,
                  defaultMessage: `Choose data to bring over to the built-in browser`,
                  description: `Subtitle for the browser data import dialog`,
                }),
              }),
            }),
          }),
        ],
      })),
      (n[21] = L))
    : (L = n[21]);
  let fe = p || !_?.length,
    R;
  n[22] !== m || n[23] !== O || n[24] !== se || n[25] !== g || n[26] !== _ || n[27] !== S || n[28] !== fe
    ? ((R = (0, Q.jsx)(ze, {
        disabled: fe,
        isLoading: m,
        open: g,
        profiles: _,
        selectedProfile: S,
        onOpenChange: O,
        onSelectProfile: se,
      })),
      (n[22] = m),
      (n[23] = O),
      (n[24] = se),
      (n[25] = g),
      (n[26] = _),
      (n[27] = S),
      (n[28] = fe),
      (n[29] = R))
    : (R = n[29]);
  let z;
  n[30] === _?.length
    ? (z = n[31])
    : ((z =
        _?.length === 0 &&
        (0, Q.jsx)(`p`, {
          className: `text-sm text-codex-description`,
          children: (0, Q.jsx)(s, {
            id: `settings.browserUse.profileImport.noProfilesDescription`,
            defaultMessage: `No Chrome or Atlas profiles were found on this device`,
            description: `Message shown when no importable browser profiles are found`,
          }),
        })),
      (n[30] = _?.length),
      (n[31] = z));
  let B;
  n[32] !== S || n[33] !== h
    ? ((B =
        h &&
        S != null &&
        (0, Q.jsx)(`p`, {
          className: `text-sm text-codex-description`,
          children: (0, Q.jsx)(s, {
            id: `settings.browserUse.profileImport.closeBrowser`,
            defaultMessage: `Close {browserName} completely before importing`,
            description: `Instruction to close the source browser before importing its profile data`,
            values: { browserName: S.appName },
          }),
        })),
      (n[32] = S),
      (n[33] = h),
      (n[34] = B))
    : (B = n[34]);
  let V;
  n[35] !== k ||
  n[36] !== M ||
  n[37] !== j ||
  n[38] !== A ||
  n[39] !== c ||
  n[40] !== p ||
  n[41] !== D ||
  n[42] !== te ||
  n[43] !== re ||
  n[44] !== ie ||
  n[45] !== S
    ? ((V =
        S != null &&
        (0, Q.jsxs)(P, {
          children: [
            (0, Q.jsx)(Z, { checked: A, disabled: p, kind: `passwords`, onChange: ie }),
            (0, Q.jsx)(Z, { checked: k, disabled: p, kind: `cookies`, onChange: D }),
            S.source === `chrome` &&
              (0, Q.jsx)(Z, { checked: j, disabled: p, kind: `history`, onChange: re }),
            c && (0, Q.jsx)(Z, { checked: M, disabled: p, kind: `extensions`, onChange: te }),
          ],
        })),
      (n[35] = k),
      (n[36] = M),
      (n[37] = j),
      (n[38] = A),
      (n[39] = c),
      (n[40] = p),
      (n[41] = D),
      (n[42] = te),
      (n[43] = re),
      (n[44] = ie),
      (n[45] = S),
      (n[46] = V))
    : (V = n[46]);
  let H;
  n[47] !== o || n[48] !== p || n[49] !== w || n[50] !== b
    ? ((H = b && (0, Q.jsx)(Ue, { checked: o, disabled: p, onChange: w })),
      (n[47] = o),
      (n[48] = p),
      (n[49] = w),
      (n[50] = b),
      (n[51] = H))
    : (H = n[51]);
  let pe;
  n[52] === v
    ? (pe = n[53])
    : ((pe =
        v &&
        (0, Q.jsx)(`p`, {
          className: `px-3 text-sm text-danger`,
          role: `alert`,
          children: (0, Q.jsx)(s, {
            id: `settings.browserUse.profileImport.profilesError`,
            defaultMessage: `We couldn't load browser profiles. Close and reopen this dialog to try again`,
            description: `Error shown when browser profiles cannot be loaded for import`,
          }),
        })),
      (n[52] = v),
      (n[53] = pe));
  let me;
  n[54] !== V || n[55] !== H || n[56] !== pe || n[57] !== R || n[58] !== z || n[59] !== B
    ? ((me = (0, Q.jsxs)(N, { className: `gap-3`, children: [R, z, B, V, H, pe] })),
      (n[54] = V),
      (n[55] = H),
      (n[56] = pe),
      (n[57] = R),
      (n[58] = z),
      (n[59] = B),
      (n[60] = me))
    : (me = n[60]);
  let he;
  n[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, Q.jsx)(s, { ...ot.cancel })), (n[61] = he))
    : (he = n[61]);
  let U;
  n[62] !== p || n[63] !== C
    ? ((U = (0, Q.jsx)(t, { color: `secondary`, disabled: p, onClick: C, type: `button`, children: he })),
      (n[62] = p),
      (n[63] = C),
      (n[64] = U))
    : (U = n[64]);
  let ge;
  n[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, Q.jsx)(s, { ...ot.import })), (n[65] = ge))
    : (ge = n[65]);
  let W;
  n[66] !== ce || n[67] !== p
    ? ((W = (0, Q.jsx)(t, { color: `primary`, disabled: ce, loading: p, type: `submit`, children: ge })),
      (n[66] = ce),
      (n[67] = p),
      (n[68] = W))
    : (W = n[68]);
  let G;
  n[69] !== U || n[70] !== W
    ? ((G = (0, Q.jsx)(N, { children: (0, Q.jsxs)(ue, { className: ee, children: [U, W] }) })),
      (n[69] = U),
      (n[70] = W),
      (n[71] = G))
    : (G = n[71]);
  let K;
  return (
    n[72] !== me || n[73] !== G || n[74] !== F
      ? ((K = (0, Q.jsxs)(le, { as: `form`, onSubmit: F, children: [L, me, G] })),
        (n[72] = me),
        (n[73] = G),
        (n[74] = F),
        (n[75] = K))
      : (K = n[75]),
    K
  );
}
function ze(e) {
  let t = (0, at.c)(29),
    {
      disabled: n,
      isLoading: r,
      open: a,
      profiles: o,
      selectedProfile: c,
      onOpenChange: l,
      onSelectProfile: u,
    } = e,
    d;
  t[0] === c ? (d = t[1]) : ((d = c ? rt(c) : null), (t[0] = c), (t[1] = d));
  let f = d,
    p;
  t[2] === c ? (p = t[3]) : ((p = c ? it(c) : void 0), (t[2] = c), (t[3] = p));
  let m = p,
    g = o?.length === 1,
    _ = g || void 0,
    v = g && `pointer-events-none`,
    y;
  t[4] === v ? (y = t[5]) : ((y = O(`min-w-0 flex-1`, v)), (t[4] = v), (t[5] = y));
  let b = g ? `hidden` : void 0,
    x = g ? void 0 : n,
    S = g ? -1 : void 0,
    C;
  t[6] !== r || t[7] !== c
    ? ((C = (0, Q.jsx)(Ve, { isLoading: r, selectedProfile: c })), (t[6] = r), (t[7] = c), (t[8] = C))
    : (C = t[8]);
  let w;
  t[9] !== m || t[10] !== _ || t[11] !== y || t[12] !== b || t[13] !== x || t[14] !== S || t[15] !== C
    ? ((w = (0, Q.jsx)(K, {
        "aria-disabled": _,
        "aria-label": m,
        className: y,
        chevronClassName: b,
        disabled: x,
        tabIndex: S,
        children: C,
      })),
      (t[9] = m),
      (t[10] = _),
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
    ? ((E = (0, Q.jsx)(`span`, {
        className: `shrink-0 text-sm text-codex-description`,
        children: (0, Q.jsx)(s, {
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
    t[19] !== r ||
    t[20] !== l ||
    t[21] !== u ||
    t[22] !== a ||
    t[23] !== o ||
    t[24] !== f ||
    t[25] !== m ||
    t[26] !== g ||
    t[27] !== T
      ? ((D = (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            E,
            g
              ? T
              : (0, Q.jsx)(i, {
                  align: `end`,
                  contentWidth: `menuWide`,
                  disabled: n,
                  open: a,
                  triggerButton:
                    n || r || m == null
                      ? T
                      : (0, Q.jsx)(Be, {
                          cloneCustomTrigger: !0,
                          tooltipContent: m,
                          openWhen: `trigger-overflows`,
                          children: T,
                        }),
                  onOpenChange: l,
                  children: (0, Q.jsx)(h.Section, {
                    className: `max-h-[250px] overflow-y-auto`,
                    children: o?.map((e) => {
                      let t = rt(e);
                      return (0, Q.jsx)(
                        h.Item,
                        {
                          "aria-label": it(e),
                          rightIconAsset: t === f ? V : void 0,
                          tooltipText: it(e),
                          onSelect: () => u(e),
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
        (t[20] = l),
        (t[21] = u),
        (t[22] = a),
        (t[23] = o),
        (t[24] = f),
        (t[25] = m),
        (t[26] = g),
        (t[27] = T),
        (t[28] = D))
      : (D = t[28]),
    D
  );
}
function Be(e) {
  let t = (0, at.c)(3),
    n = e[`aria-expanded`] === !0,
    r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = (0, Q.jsx)(de, { ...e, triggerPopupOpen: n })), (t[0] = e), (t[1] = n), (t[2] = r))
      : (r = t[2]),
    r
  );
}
function Ve(e) {
  let t = (0, at.c)(4),
    { isLoading: n, selectedProfile: r } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(F, { className: `icon-2xs` }),
              (0, Q.jsx)(s, {
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
        ? ((e = (0, Q.jsx)(s, {
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
  return (t[2] === r ? (i = t[3]) : ((i = (0, Q.jsx)(et, { profile: r })), (t[2] = r), (t[3] = i)), i);
}
function He(e) {
  let n = (0, at.c)(22),
    { profile: r, onCancel: i, onImport: a } = e,
    o;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(s, {
        id: `settings.browserUse.profileImport.extensionsConfirmationTitle`,
        defaultMessage: `Import unverified extensions?`,
        description: `Title asking for fresh consent before importing unauthenticated extension packages and saved permissions from a Chrome profile`,
      })),
      (n[0] = o))
    : (o = n[0]);
  let c = o,
    l;
  n[1] !== r.appName || n[2] !== r.profileName
    ? ((l = (0, Q.jsx)(s, {
        id: `settings.browserUse.profileImport.extensionsConfirmationDescription`,
        defaultMessage: `ChatGPT can’t verify extensions or saved permissions from this {appName} profile “{profileName}”. If imported, these extensions may run code or access data in ChatGPT. Continue only if you trust the profile.`,
        description: `Security warning that the selected browser profile's extension packages and saved permission grants cannot be authenticated and may access data in ChatGPT`,
        values: { appName: r.appName, profileName: r.profileName },
      })),
      (n[1] = r.appName),
      (n[2] = r.profileName),
      (n[3] = l))
    : (l = n[3]);
  let u = l,
    d;
  n[4] === a
    ? (d = n[5])
    : ((d = (e) => {
        (e.preventDefault(), a());
      }),
      (n[4] = a),
      (n[5] = d));
  let f;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(T, { className: `sr-only`, children: c })), (n[6] = f))
    : (f = n[6]);
  let p;
  n[7] === u
    ? (p = n[8])
    : ((p = (0, Q.jsx)(ae, { className: `sr-only`, children: u })), (n[7] = u), (n[8] = p));
  let m;
  n[9] === u
    ? (m = n[10])
    : ((m = (0, Q.jsx)(N, { children: (0, Q.jsx)(ne, { title: c, subtitle: u }) })), (n[9] = u), (n[10] = m));
  let h;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(s, { ...ot.cancel })), (n[11] = h))
    : (h = n[11]);
  let g;
  n[12] === i
    ? (g = n[13])
    : ((g = (0, Q.jsx)(t, { autoFocus: !0, color: `secondary`, onClick: i, type: `button`, children: h })),
      (n[12] = i),
      (n[13] = g));
  let _;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(t, {
        type: `submit`,
        children: (0, Q.jsx)(s, {
          id: `settings.browserUse.profileImport.extensionsConfirmationAction`,
          defaultMessage: `Import extensions`,
          description: `Button granting explicit consent to import unverified extension packages and their saved permissions from the selected profile`,
        }),
      })),
      (n[14] = _))
    : (_ = n[14]);
  let v;
  n[15] === g
    ? (v = n[16])
    : ((v = (0, Q.jsx)(N, { children: (0, Q.jsxs)(ue, { children: [g, _] }) })), (n[15] = g), (n[16] = v));
  let y;
  return (
    n[17] !== v || n[18] !== d || n[19] !== p || n[20] !== m
      ? ((y = (0, Q.jsxs)(le, { as: `form`, onSubmit: d, children: [f, p, m, v] })),
        (n[17] = v),
        (n[18] = d),
        (n[19] = p),
        (n[20] = m),
        (n[21] = y))
      : (y = n[21]),
    y
  );
}
function Z(e) {
  let t = (0, at.c)(12),
    { checked: n, disabled: r, kind: i, onChange: a } = e,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = (0, Q.jsx)(Pe, { className: `size-5 text-secondary`, kind: i })), (t[0] = i), (t[1] = o));
  let c = ke[i],
    l;
  t[2] === c
    ? (l = t[3])
    : ((l = (0, Q.jsx)(`span`, { className: `select-none`, children: (0, Q.jsx)(s, { ...c }) })),
      (t[2] = c),
      (t[3] = l));
  let u;
  t[4] !== n || t[5] !== r || t[6] !== a
    ? ((u = (e) => (0, Q.jsx)(M, { ...e, checked: n, disabled: r, onChange: a })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = a),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== o || t[9] !== l || t[10] !== u
      ? ((d = (0, Q.jsx)(L, { icon: o, label: l, control: u })),
        (t[8] = o),
        (t[9] = l),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function Ue(e) {
  let t = (0, at.c)(9),
    { checked: n, disabled: r, onChange: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(`p`, {
        className: `font-medium text-default`,
        children: (0, Q.jsx)(s, {
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
        children: (0, Q.jsx)(s, {
          id: `settings.browserUse.profileImport.windowsChrome.description`,
          defaultMessage: `Windows protects Chrome cookies and passwords with App-Bound Encryption, so ChatGPT also needs administrator approval`,
          description: `Description for the Windows Chrome browser import consent notice`,
        }),
      })),
      (t[1] = o))
    : (o = t[1]);
  let c;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((c = (0, Q.jsx)(_, { checked: n, disabled: r, onCheckedChange: i })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(`span`, {
        children: (0, Q.jsx)(s, {
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
      : ((u = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-2 rounded-lg border border-primary-outline bg-text/[0.025] p-3 text-sm`,
          children: [
            a,
            o,
            (0, Q.jsxs)(`label`, {
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
function We(e) {
  let n = (0, at.c)(142),
    {
      activeImportRequest: r,
      cookieAccessFailureMessage: i,
      importCookies: a,
      importExtensions: o,
      importHistory: c,
      importPasswords: l,
      isImporting: u,
      revealedImportResultRowCount: d,
      showCloseBrowserGuidance: f,
      result: p,
      onDone: m,
      onRetry: h,
    } = e,
    g = u || d != null,
    _ = g ? l : p?.passwords != null,
    v = g ? a : p?.cookies != null,
    y = g ? c : p?.history != null,
    b = g ? o : p?.extensions != null,
    x = u && _ && (r?.importPasswords ?? l),
    S = u && v && (r?.importCookies ?? a),
    C = u && y && (r?.importHistory ?? c),
    w = u && b && (r?.importExtensions ?? o),
    E = p?.cookies?.status === `failed_to_copy`,
    D;
  n[0] !== p || n[1] !== v
    ? ((D = v && p != null && (p.cookies == null || ge(p.cookies))), (n[0] = p), (n[1] = v), (n[2] = D))
    : (D = n[2]);
  let te = D,
    re =
      te &&
      ((p?.cookies?.imported ?? 0) > 0 ||
        (p?.cookies?.status === `partial-success` && p.cookies.imported == null)),
    ie =
      re &&
      p?.cookies?.error == null &&
      (p?.cookies?.status === `success` || p?.cookies?.status === `partial-success`),
    O = p?.passwords,
    oe = p?.passwords?.profile,
    se = p?.passwords?.account,
    k,
    A,
    j,
    M,
    ce,
    F,
    de,
    I,
    L,
    fe,
    R,
    z;
  if (
    n[3] !== te ||
    n[4] !== x ||
    n[5] !== p ||
    n[6] !== b ||
    n[7] !== y ||
    n[8] !== _ ||
    n[9] !== O ||
    n[10] !== oe ||
    n[11] !== se
  ) {
    let e = [O, oe, se],
      t = _ && p != null && (p.passwords == null || e.some(ge)),
      r = e.some(Ze),
      i = t && e.some(G);
    I = i && (e.some(Xe) || e.some(Ye)) && e.every(Je);
    let a;
    (n[24] !== p || n[25] !== y
      ? ((a = y && p != null && (p.history == null || ge(p.history))), (n[24] = p), (n[25] = y), (n[26] = a))
      : (a = n[26]),
      (F = a),
      (de = F && (p?.history?.imported ?? 0) > 0 && p?.history?.status === `success`));
    let o;
    (n[27] !== p || n[28] !== b
      ? ((o = b && p != null && (p.extensions == null || ge(p.extensions))),
        (n[27] = p),
        (n[28] = b),
        (n[29] = o))
      : (o = n[29]),
      (A = o),
      (j = b && (p?.extensions?.skippedInvalid ?? 0) > 0),
      (ce = te || t || F || A));
    let s = ce || j,
      c;
    (n[30] === p ? (c = n[31]) : ((c = p != null && he(p)), (n[30] = p), (n[31] = c)),
      (M = c),
      (k = s && !M),
      n[32] !== r || n[33] !== t || n[34] !== i
        ? ((L = t ? (0, Q.jsx)($e, { accessFailed: r, partiallyFailed: i }) : void 0),
          (n[32] = r),
          (n[33] = t),
          (n[34] = i),
          (n[35] = L))
        : (L = n[35]),
      (fe = x),
      (R = `passwords`),
      (z = e.some(G)),
      (n[3] = te),
      (n[4] = x),
      (n[5] = p),
      (n[6] = b),
      (n[7] = y),
      (n[8] = _),
      (n[9] = O),
      (n[10] = oe),
      (n[11] = se),
      (n[12] = k),
      (n[13] = A),
      (n[14] = j),
      (n[15] = M),
      (n[16] = ce),
      (n[17] = F),
      (n[18] = de),
      (n[19] = I),
      (n[20] = L),
      (n[21] = fe),
      (n[22] = R),
      (n[23] = z));
  } else
    ((k = n[12]),
      (A = n[13]),
      (j = n[14]),
      (M = n[15]),
      (ce = n[16]),
      (F = n[17]),
      (de = n[18]),
      (I = n[19]),
      (L = n[20]),
      (fe = n[21]),
      (R = n[22]),
      (z = n[23]));
  let B;
  n[36] !== I || n[37] !== _ || n[38] !== L || n[39] !== fe || n[40] !== R || n[41] !== z
    ? ((B = { failureMessage: L, importing: fe, kind: R, succeeded: z, visible: _, warning: I }),
      (n[36] = I),
      (n[37] = _),
      (n[38] = L),
      (n[39] = fe),
      (n[40] = R),
      (n[41] = z),
      (n[42] = B))
    : (B = n[42]);
  let V;
  n[43] !== E || n[44] !== i || n[45] !== te || n[46] !== re || n[47] !== p || n[48] !== f
    ? ((V =
        p != null && te
          ? (0, Q.jsx)(Qe, {
              accessFailed: E,
              showCloseBrowserGuidance: f,
              message: i,
              partiallyFailed: re,
              source: p.source,
            })
          : void 0),
      (n[43] = E),
      (n[44] = i),
      (n[45] = te),
      (n[46] = re),
      (n[47] = p),
      (n[48] = f),
      (n[49] = V))
    : (V = n[49]);
  let H = p?.cookies,
    pe;
  n[50] === H ? (pe = n[51]) : ((pe = G(H)), (n[50] = H), (n[51] = pe));
  let me;
  n[52] !== ie || n[53] !== S || n[54] !== v || n[55] !== V || n[56] !== pe
    ? ((me = { failureMessage: V, importing: S, kind: `cookies`, succeeded: pe, visible: v, warning: ie }),
      (n[52] = ie),
      (n[53] = S),
      (n[54] = v),
      (n[55] = V),
      (n[56] = pe),
      (n[57] = me))
    : (me = n[57]);
  let U;
  n[58] === F
    ? (U = n[59])
    : ((U = F
        ? (0, Q.jsx)(s, {
            id: `settings.browserUse.profileImport.historyRetryGuidance`,
            defaultMessage: `Make sure Chrome is fully closed`,
            description: `Recovery guidance shown when Chrome browsing history could not be imported completely`,
          })
        : void 0),
      (n[58] = F),
      (n[59] = U));
  let W = p?.history,
    K;
  n[60] === W ? (K = n[61]) : ((K = G(W)), (n[60] = W), (n[61] = K));
  let _e;
  n[62] !== de || n[63] !== C || n[64] !== y || n[65] !== U || n[66] !== K
    ? ((_e = { failureMessage: U, importing: C, kind: `history`, succeeded: K, visible: y, warning: de }),
      (n[62] = de),
      (n[63] = C),
      (n[64] = y),
      (n[65] = U),
      (n[66] = K),
      (n[67] = _e))
    : (_e = n[67]);
  let ve;
  n[68] !== A || n[69] !== j || n[70] !== p?.extensions
    ? ((ve = A || j ? (0, Q.jsx)(Fe, { result: p?.extensions }) : void 0),
      (n[68] = A),
      (n[69] = j),
      (n[70] = p?.extensions),
      (n[71] = ve))
    : (ve = n[71]);
  let ye = p?.extensions,
    be;
  n[72] === ye ? (be = n[73]) : ((be = G(ye)), (n[72] = ye), (n[73] = be));
  let xe = p?.extensions,
    Se;
  n[74] === xe ? (Se = n[75]) : ((Se = G(xe)), (n[74] = xe), (n[75] = Se));
  let Ce;
  n[76] !== w || n[77] !== b || n[78] !== ve || n[79] !== be || n[80] !== Se
    ? ((Ce = {
        failureMessage: ve,
        importing: w,
        kind: `extensions`,
        succeeded: be,
        visible: b,
        warning: Se,
      }),
      (n[76] = w),
      (n[77] = b),
      (n[78] = ve),
      (n[79] = be),
      (n[80] = Se),
      (n[81] = Ce))
    : (Ce = n[81]);
  let we;
  n[82] !== me || n[83] !== _e || n[84] !== Ce || n[85] !== B
    ? ((we = [B, me, _e, Ce].filter(qe)), (n[82] = me), (n[83] = _e), (n[84] = Ce), (n[85] = B), (n[86] = we))
    : (we = n[86]);
  let Te = we,
    Ee;
  n[87] !== M || n[88] !== u || n[89] !== Te
    ? ((Ee = !u && M && Te.some(Ke)), (n[87] = M), (n[88] = u), (n[89] = Te), (n[90] = Ee))
    : (Ee = n[90]);
  let De = Ee,
    Oe;
  n[91] === Te ? (Oe = n[92]) : ((Oe = Te.filter(Ge)), (n[91] = Te), (n[92] = Oe));
  let Ae = Oe,
    je = d ?? 0,
    Me = ot.complete;
  u ? (Me = ke.title) : k && (Me = ot.failed);
  let q;
  if (u) {
    let e = Ae[Math.min(je, Ae.length - 1)]?.kind ?? `passwords`,
      t;
    n[93] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = {
          cookies: ot.importingCookies,
          history: ot.importingHistory,
          passwords: ot.importingPasswords,
          extensions: ot.importingExtensions,
        }),
        (n[93] = t))
      : (t = n[93]);
    let r = t[e],
      i;
    (n[94] === r ? (i = n[95]) : ((i = (0, Q.jsx)(s, { ...r })), (n[94] = r), (n[95] = i)), (q = i));
  } else if (k) {
    let e;
    (n[96] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(s, {
          id: `settings.browserUse.profileImport.failedSummary`,
          defaultMessage: `We were unable to import your browsing data`,
          description: `Description shown when every selected category of browser data fails to import`,
        })),
        (n[96] = e))
      : (e = n[96]),
      (q = e));
  } else if (M) {
    let e;
    (n[97] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(s, {
          id: `settings.browserUse.profileImport.completeDescription`,
          defaultMessage: `Your data is now available in the built-in browser`,
          description: `Description shown after browser data import completes`,
        })),
        (n[97] = e))
      : (e = n[97]),
      (q = e));
  } else {
    let e;
    (n[98] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(s, {
          id: `settings.browserUse.profileImport.noDataDescription`,
          defaultMessage: `No browser data was available to import`,
          description: `Description shown when browser profile import finds no available data in any selected category`,
        })),
        (n[98] = e))
      : (e = n[98]),
      (q = e));
  }
  let Ne;
  n[99] === Me
    ? (Ne = n[100])
    : ((Ne = (0, Q.jsx)(T, {
        asChild: !0,
        children: (0, Q.jsx)(`h2`, { className: `sr-only`, children: (0, Q.jsx)(s, { ...Me }) }),
      })),
      (n[99] = Me),
      (n[100] = Ne));
  let Pe;
  n[101] !== De || n[102] !== q
    ? ((Pe =
        De &&
        (0, Q.jsx)(ae, { asChild: !0, children: (0, Q.jsx)(`div`, { className: `sr-only`, children: q }) })),
      (n[101] = De),
      (n[102] = q),
      (n[103] = Pe))
    : (Pe = n[103]);
  let Ie;
  n[104] === Me ? (Ie = n[105]) : ((Ie = (0, Q.jsx)(s, { ...Me })), (n[104] = Me), (n[105] = Ie));
  let J;
  n[106] !== De || n[107] !== q
    ? ((J = De ? void 0 : (0, Q.jsx)(ae, { asChild: !0, children: (0, Q.jsx)(`div`, { children: q }) })),
      (n[106] = De),
      (n[107] = q),
      (n[108] = J))
    : (J = n[108]);
  let Le;
  n[109] !== Ie || n[110] !== J
    ? ((Le = (0, Q.jsx)(ne, { title: Ie, subtitle: J })), (n[109] = Ie), (n[110] = J), (n[111] = Le))
    : (Le = n[111]);
  let Y;
  n[112] !== Ne || n[113] !== Pe || n[114] !== Le
    ? ((Y = (0, Q.jsxs)(N, { children: [Ne, Pe, Le] })),
      (n[112] = Ne),
      (n[113] = Pe),
      (n[114] = Le),
      (n[115] = Y))
    : (Y = n[115]);
  let X;
  n[116] !== Ae || n[117] !== d || n[118] !== je || n[119] !== Te
    ? ((X = (0, Q.jsx)(N, {
        className: `max-h-80 overflow-y-auto`,
        children: (0, Q.jsx)(P, {
          className: `shrink-0`,
          children: Te.map((e, t) => {
            let n = e.importing && je <= Ae.indexOf(e);
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
      (n[116] = Ae),
      (n[117] = d),
      (n[118] = je),
      (n[119] = Te),
      (n[120] = X))
    : (X = n[120]);
  let Re;
  n[121] !== u || n[122] !== m
    ? ((Re =
        u &&
        (0, Q.jsx)(t, {
          color: `secondary`,
          disabled: !0,
          onClick: m,
          type: `button`,
          children: (0, Q.jsx)(s, { ...ot.cancel }),
        })),
      (n[121] = u),
      (n[122] = m),
      (n[123] = Re))
    : (Re = n[123]);
  let ze;
  n[124] !== ce || n[125] !== u || n[126] !== h
    ? ((ze =
        !u &&
        ce &&
        h != null &&
        (0, Q.jsx)(t, {
          color: `secondary`,
          onClick: h,
          type: `button`,
          children: (0, Q.jsx)(s, { ...ot.retry }),
        })),
      (n[124] = ce),
      (n[125] = u),
      (n[126] = h),
      (n[127] = ze))
    : (ze = n[127]);
  let Be = u ? ot.import : ot.done,
    Ve;
  n[128] === Be ? (Ve = n[129]) : ((Ve = (0, Q.jsx)(s, { ...Be })), (n[128] = Be), (n[129] = Ve));
  let He;
  n[130] !== u || n[131] !== m || n[132] !== Ve
    ? ((He = (0, Q.jsx)(t, {
        color: `primary`,
        disabled: u,
        loading: u,
        onClick: m,
        type: `button`,
        children: Ve,
      })),
      (n[130] = u),
      (n[131] = m),
      (n[132] = Ve),
      (n[133] = He))
    : (He = n[133]);
  let Z;
  n[134] !== Re || n[135] !== ze || n[136] !== He
    ? ((Z = (0, Q.jsx)(N, {
        children: (0, Q.jsxs)(ue, { className: ee, expandSingleButton: !1, children: [Re, ze, He] }),
      })),
      (n[134] = Re),
      (n[135] = ze),
      (n[136] = He),
      (n[137] = Z))
    : (Z = n[137]);
  let Ue;
  return (
    n[138] !== Y || n[139] !== X || n[140] !== Z
      ? ((Ue = (0, Q.jsxs)(le, { children: [Y, X, Z] })),
        (n[138] = Y),
        (n[139] = X),
        (n[140] = Z),
        (n[141] = Ue))
      : (Ue = n[141]),
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
          ? ((e = (0, Q.jsx)(s, {
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
            ? ((e = (0, Q.jsx)(s, {
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
            ? ((e = (0, Q.jsx)(s, {
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
        ? ((e = (0, Q.jsx)(s, {
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
      ? ((c = (0, Q.jsx)(s, {
          id: `settings.browserUse.profileImport.cookiesError`,
          defaultMessage: `Cookies couldn’t be imported`,
          description: `Error shown when cookies could not be imported from a browser profile`,
        })),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function $e(e) {
  let t = (0, at.c)(3),
    { accessFailed: n, partiallyFailed: r } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(s, {
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
        ? ((e = (0, Q.jsx)(s, {
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
      ? ((i = (0, Q.jsx)(s, {
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
  t[0] === r ? (i = t[1]) : ((i = O(`size-4 shrink-0`, r)), (t[0] = r), (t[1] = i));
  let a;
  t[2] !== n.source || t[3] !== i
    ? ((a = (0, Q.jsx)(Oe, { className: i, source: n.source })), (t[2] = n.source), (t[3] = i), (t[4] = a))
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
  let t = (0, at.c)(38),
    { animationDelay: n, failureMessage: r, kind: i, succeeded: a, showSpinner: o, warning: c } = e,
    l = `browser-profile-import-${i}-result-label`,
    u = `browser-profile-import-${i}-result-description`,
    d;
  t[0] === a
    ? (d = t[1])
    : ((d = a
        ? (0, Q.jsx)(C, { className: `size-5 text-chart-green` })
        : (0, Q.jsx)(g, { className: `size-5 text-tertiary` })),
      (t[0] = a),
      (t[1] = d));
  let f = d;
  if (r != null) {
    let e;
    (t[2] === c
      ? (e = t[3])
      : ((e = c
          ? (0, Q.jsx)(be, { className: `size-5 text-warning` })
          : (0, Q.jsx)(oe, { className: `size-5 text-danger` })),
        (t[2] = c),
        (t[3] = e)),
      (f = e));
  }
  let p = a || r != null,
    m;
  t[4] !== n || t[5] !== f || t[6] !== p
    ? ((m = (0, Q.jsx)(nt, { animationDelay: n, rotate: p, children: f })),
      (t[4] = n),
      (t[5] = f),
      (t[6] = p),
      (t[7] = m))
    : (m = t[7]);
  let h = m;
  if (o) {
    let e;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(F, { className: `size-5` })), (t[8] = e))
      : (e = t[8]);
    let n;
    (t[9] === l
      ? (n = t[10])
      : ((n = (0, Q.jsx)(`span`, {
          className: `inline-flex size-5 items-center justify-center`,
          "aria-labelledby": l,
          role: `status`,
          children: e,
        })),
        (t[9] = l),
        (t[10] = n)),
      (h = n));
  } else if (!a && r == null) {
    let e;
    (t[11] !== u || t[12] !== l || t[13] !== h
      ? ((e = (0, Q.jsx)(`span`, {
          className: `inline-flex size-5 items-center justify-center`,
          "aria-describedby": u,
          "aria-labelledby": l,
          role: `status`,
          children: h,
        })),
        (t[11] = u),
        (t[12] = l),
        (t[13] = h),
        (t[14] = e))
      : (e = t[14]),
      (h = e));
  }
  let _;
  if (r != null) {
    let e = c ? `text-warning` : `text-danger`,
      n = c ? `status` : `alert`,
      i;
    (t[15] !== r || t[16] !== e || t[17] !== n
      ? ((i = (0, Q.jsx)(`div`, { className: e, role: n, children: r })),
        (t[15] = r),
        (t[16] = e),
        (t[17] = n),
        (t[18] = i))
      : (i = t[18]),
      (_ = i));
  } else if (!a && !o) {
    let e;
    t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(s, {
          id: `settings.browserUse.profileImport.noDataStatus`,
          defaultMessage: `No data was found to import`,
          description: `Visible description for a selected browser data type that has no source data available to import`,
        })),
        (t[19] = e))
      : (e = t[19]);
    let n;
    (t[20] === u
      ? (n = t[21])
      : ((n = (0, Q.jsx)(`span`, { id: u, className: `text-tertiary`, children: e })),
        (t[20] = u),
        (t[21] = n)),
      (_ = n));
  }
  let v;
  t[22] === i
    ? (v = t[23])
    : ((v = (0, Q.jsx)(Pe, { className: `size-5 text-secondary`, kind: i })), (t[22] = i), (t[23] = v));
  let y = ke[i],
    b;
  t[24] === y ? (b = t[25]) : ((b = (0, Q.jsx)(s, { ...y })), (t[24] = y), (t[25] = b));
  let x;
  t[26] !== l || t[27] !== b
    ? ((x = (0, Q.jsx)(`span`, { id: l, children: b })), (t[26] = l), (t[27] = b), (t[28] = x))
    : (x = t[28]);
  let S;
  t[29] !== h || t[30] !== v || t[31] !== x
    ? ((S = (0, Q.jsx)(L, { control: h, icon: v, label: x })),
      (t[29] = h),
      (t[30] = v),
      (t[31] = x),
      (t[32] = S))
    : (S = t[32]);
  let w;
  t[33] === _
    ? (w = t[34])
    : ((w =
        _ != null &&
        (0, Q.jsx)(`div`, {
          className: `min-w-0 px-4 pb-3 text-xs leading-4 text-balance text-secondary`,
          children: _,
        })),
      (t[33] = _),
      (t[34] = w));
  let T;
  return (
    t[35] !== S || t[36] !== w
      ? ((T = (0, Q.jsxs)(`div`, { children: [S, w] })), (t[35] = S), (t[36] = w), (t[37] = T))
      : (T = t[37]),
    T
  );
}
function nt(e) {
  let t = (0, at.c)(22),
    { animationDelay: n, children: r, rotate: i } = e,
    a = x(),
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
  let m = a ? 0 : 0.18,
    h = a ? 0 : n,
    g;
  t[11] !== h || t[12] !== m
    ? ((g = { duration: m, delay: h }), (t[11] = h), (t[12] = m), (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] !== g || t[15] !== p
    ? ((_ = { transform: p, opacity: g }), (t[14] = g), (t[15] = p), (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] !== r || t[18] !== _ || t[19] !== c || t[20] !== l
      ? ((v = (0, Q.jsx)(D.span, {
          className: `inline-flex`,
          animate: c,
          initial: l,
          transition: _,
          "aria-hidden": `true`,
          children: r,
        })),
        (t[17] = r),
        (t[18] = _),
        (t[19] = c),
        (t[20] = l),
        (t[21] = v))
      : (v = t[21]),
    v
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
    ((at = R()),
      te(),
      w(),
      se(),
      j(),
      I(),
      o(),
      fe(),
      ie(),
      r(),
      k(),
      p(),
      re(),
      d(),
      b(),
      v(),
      xe(),
      E(),
      A(),
      ye(),
      u(),
      Ae(),
      X(),
      Me(),
      q(),
      U(),
      (Q = B()),
      (ot = n({
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
    { entryPoint: n, flowId: r, onClose: i, service: o } = e,
    s = l(a),
    [c, u] = (0, $.useState)(``),
    [d, p] = (0, $.useState)(!0),
    [m, h] = (0, $.useState)(!0),
    [g, _] = (0, $.useState)(!0),
    [v, b] = (0, $.useState)(!1),
    [x, S] = (0, $.useState)(null),
    C = pe(ve, `2982604767`),
    [w, T] = (0, $.useState)(void 0),
    [E, D] = (0, $.useState)(null),
    ee = (0, $.useRef)(`before-attempt`),
    te = (0, $.useRef)(!1),
    ne = (0, $.useRef)(`close-button`),
    re = (0, $.useRef)(!1),
    ie = (0, $.useRef)(!1),
    O = (0, $.useRef)(null),
    ae;
  t[0] === o ? (ae = t[1]) : ((ae = Ne(o, !0)), (t[0] = o), (t[1] = ae));
  let oe = y(ae),
    se;
  t[2] === o
    ? (se = t[3])
    : ((se = (e) => {
        let { request: t } = e;
        return o.importBrowserProfile(t);
      }),
      (t[2] = o),
      (t[3] = se));
  let k, A;
  t[4] !== n || t[5] !== s
    ? ((k = (e, t) => {
        let { context: r, request: i } = t;
        ((ee.current = `after-request-error`), we(s, n, i, r));
      }),
      (A = async (e, t) => {
        let { context: r, previousResult: i, request: a, startedAt: o } = t;
        ee.current = `after-result`;
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
          l = he(c);
        (l && s.set(me, !0), he(e) && s.set(_e, Date.now()), we(s, n, a, r, e));
        let u = [a.importPasswords, a.importCookies, a.importHistory, a.importExtensions].filter(lt).length;
        if (!l) {
          T({ result: c, revealedRowCount: u });
          return;
        }
        T({ result: c, revealedRowCount: 0 });
        let d = Math.max(0, gt - (performance.now() - o));
        await Promise.all(
          Array.from({ length: u }, async (e, t) => {
            let n = d + t * _t;
            (n > 0 &&
              (await new Promise((e) => {
                setTimeout(e, n);
              })),
              T({ result: c, revealedRowCount: t + 1 }));
          }),
        );
      }),
      (t[4] = n),
      (t[5] = s),
      (t[6] = k),
      (t[7] = A))
    : ((k = t[6]), (A = t[7]));
  let j;
  t[8] !== se || t[9] !== k || t[10] !== A
    ? ((j = { mutationFn: se, onError: k, onSuccess: A }), (t[8] = se), (t[9] = k), (t[10] = A), (t[11] = j))
    : (j = t[11]);
  let M = f(j),
    N = oe.data,
    le;
  t[12] !== N || t[13] !== c
    ? ((le = N?.find((e) => pt(e) === c) ?? N?.[0] ?? null), (t[12] = N), (t[13] = c), (t[14] = le))
    : (le = t[14]);
  let P = le,
    F = P != null && d,
    ue = P != null && m,
    de = P?.source === `chrome` && g,
    I = C && P?.source === `chrome` && P.hasExtensions != null,
    L = I && v,
    fe = typeof document < `u` && document.documentElement.dataset.codexOs === `win32`,
    R = fe || (typeof document < `u` && document.documentElement.dataset.codexOs === `darwin`),
    z = fe && P?.source === `chrome` && (F || ue),
    B;
  t[15] === P ? (B = t[16]) : ((B = P ? pt(P) : null), (t[15] = P), (t[16] = B));
  let V = B,
    H = V != null && E === V,
    U;
  t[17] !== M.isError || t[18] !== M.variables || t[19] !== w?.result
    ? ((U =
        M.isError && M.variables != null
          ? {
              source: M.variables.request.source,
              profilePath: M.variables.request.profilePath,
              ...(M.variables.request.importCookies === !1
                ? {}
                : { cookies: { ...w?.result.cookies, status: `failed` } }),
              ...(M.variables.request.importPasswords === !1
                ? {}
                : { passwords: { ...w?.result.passwords, status: `failed` } }),
              ...(M.variables.request.importHistory === !0
                ? {
                    history: {
                      discovered: 0,
                      imported: 0,
                      skippedExisting: 0,
                      skippedInvalid: 0,
                      failed: 0,
                      ...w?.result.history,
                      status: `failed`,
                    },
                  }
                : {}),
              ...(M.variables.request.importExtensions === !0
                ? { extensions: { ...w?.result.extensions, status: `failed` } }
                : {}),
            }
          : null),
      (t[17] = M.isError),
      (t[18] = M.variables),
      (t[19] = w?.result),
      (t[20] = U))
    : (U = t[20]);
  let ge = U,
    W;
  t[21] !== ge || t[22] !== M.data || t[23] !== M.isError || t[24] !== w?.result
    ? ((W = M.isError && ge != null ? { ...w?.result, ...ge } : (w?.result ?? M.data)),
      (t[21] = ge),
      (t[22] = M.data),
      (t[23] = M.isError),
      (t[24] = w?.result),
      (t[25] = W))
    : (W = t[25]);
  let G = W,
    K = G ?? null,
    ye;
  t[26] !== n || t[27] !== r || t[28] !== M.isPending || t[29] !== s || t[30] !== P?.source
    ? ((ye = (e) => {
        te.current ||
          ((te.current = !0),
          Ce(s, n, {
            flowId: r,
            attemptIndex: O.current?.context.attemptIndex,
            source: O.current?.request.source ?? (ie.current ? `chrome` : P?.source),
            windowsChromeAdminApprovalNoticeRequired:
              O.current?.context.windowsChromeAdminApprovalNoticeRequired ?? ie.current,
            windowsChromeAdminApprovalNoticeAcknowledged:
              O.current?.context.windowsChromeAdminApprovalNoticeAcknowledged ?? re.current,
            exitState: M.isPending ? void 0 : ee.current,
            dismissalReason: e,
          }));
      }),
      (t[26] = n),
      (t[27] = r),
      (t[28] = M.isPending),
      (t[29] = s),
      (t[30] = P?.source),
      (t[31] = ye))
    : (ye = t[31]);
  let be = ye,
    xe,
    De;
  (t[32] !== V || t[33] !== n || t[34] !== r || t[35] !== z || t[36] !== s
    ? ((xe = () => {
        z && V != null && !ie.current && ((ie.current = !0), Se(s, n, r));
      }),
      (De = [V, n, r, z, s]),
      (t[32] = V),
      (t[33] = n),
      (t[34] = r),
      (t[35] = z),
      (t[36] = s),
      (t[37] = xe),
      (t[38] = De))
    : ((xe = t[37]), (De = t[38])),
    (0, $.useEffect)(xe, De));
  let Oe;
  t[39] !== M.isPending || t[40] !== be || t[41] !== i
    ? ((Oe = (e) => {
        M.isPending || (be(e), i());
      }),
      (t[39] = M.isPending),
      (t[40] = be),
      (t[41] = i),
      (t[42] = Oe))
    : (Oe = t[42]);
  let ke = Oe,
    Ae;
  t[43] !== n || t[44] !== r || t[45] !== H || t[46] !== M || t[47] !== z || t[48] !== s
    ? ((Ae = (e, t, i) => {
        if (e.importExtensions === !0 && !s.get(ve, `2982604767`)) return;
        let a = {
          flowId: r,
          attemptIndex: (O.current?.context.attemptIndex ?? 0) + 1,
          windowsChromeAdminApprovalNoticeRequired: t?.windowsChromeAdminApprovalNoticeRequired ?? z,
          windowsChromeAdminApprovalNoticeAcknowledged: t?.windowsChromeAdminApprovalNoticeAcknowledged ?? H,
        };
        ((O.current = { context: a, previousResult: i, request: e, startedAt: performance.now() }),
          T(i == null ? void 0 : { result: i, revealedRowCount: 0 }),
          M.reset(),
          Te(s, n, e, a),
          M.mutate(O.current));
      }),
      (t[43] = n),
      (t[44] = r),
      (t[45] = H),
      (t[46] = M),
      (t[47] = z),
      (t[48] = s),
      (t[49] = Ae))
    : (Ae = t[49]);
  let je = Ae,
    Me;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = {
        onEscapeKeyDown: () => {
          ne.current = `escape-key`;
        },
        onPointerDownOutside: () => {
          ne.current = `backdrop`;
        },
      }),
      (t[50] = Me))
    : (Me = t[50]);
  let q;
  t[51] === ke
    ? (q = t[52])
    : ((q = (e) => {
        e || ke(ne.current);
      }),
      (t[51] = ke),
      (t[52] = q));
  let Pe = !M.isPending && K == null,
    Fe = M.variables?.request,
    Ie = x != null,
    J;
  t[53] === G ? (J = t[54]) : ((J = void 0), (t[53] = G), (t[54] = J));
  let Le = w?.revealedRowCount,
    Y = x?.profile ?? P,
    X;
  t[55] !== ke || t[56] !== x || t[57] !== K
    ? ((X = () => {
        x == null ? ke(K == null ? `secondary-button` : `done-button`) : S(null);
      }),
      (t[55] = ke),
      (t[56] = x),
      (t[57] = K),
      (t[58] = X))
    : (X = t[58]);
  let ze;
  t[59] !== V || t[60] !== n || t[61] !== r || t[62] !== s
    ? ((ze = (e) => {
        (e && !re.current && ((re.current = !0), Ee(s, n, r)), D(e ? V : null));
      }),
      (t[59] = V),
      (t[60] = n),
      (t[61] = r),
      (t[62] = s),
      (t[63] = ze))
    : (ze = t[63]);
  let Be;
  t[64] !== x ||
  t[65] !== F ||
  t[66] !== L ||
  t[67] !== de ||
  t[68] !== ue ||
  t[69] !== z ||
  t[70] !== P ||
  t[71] !== je
    ? ((Be = () => {
        if (x != null) {
          (je({ ...x.request, allowUnverifiedExtensions: !0 }), S(null));
          return;
        }
        if (P == null) return;
        let e = ut(P, F, ue, de, L, z);
        e.importExtensions ? S({ profile: P, request: e }) : je(e);
      }),
      (t[64] = x),
      (t[65] = F),
      (t[66] = L),
      (t[67] = de),
      (t[68] = ue),
      (t[69] = z),
      (t[70] = P),
      (t[71] = je),
      (t[72] = Be))
    : (Be = t[72]);
  let Ve;
  t[73] !== K || t[74] !== je
    ? ((Ve =
        K == null
          ? void 0
          : () => {
              let e = O.current;
              if (e != null) {
                let t = [K.passwords, K.passwords?.profile, K.passwords?.account],
                  n = {
                    ...e.request,
                    importCookies: e.request.importCookies !== !1 && ft(K.cookies),
                    importPasswords: e.request.importPasswords !== !1 && ft(...t),
                    importHistory: e.request.importHistory === !0 && ft(K.history),
                    importExtensions: e.request.importExtensions === !0 && ft(K.extensions),
                  };
                (n.importCookies || delete n.cookieDomainAllowlist, je(n, e.context, K));
              }
            }),
      (t[73] = K),
      (t[74] = je),
      (t[75] = Ve))
    : (Ve = t[75]);
  let He;
  t[76] === M
    ? (He = t[77])
    : ((He = (e) => {
        (u(pt(e)), D(null), T(void 0), M.reset());
      }),
      (t[76] = M),
      (t[77] = He));
  let Z;
  t[78] !== I ||
  t[79] !== H ||
  t[80] !== d ||
  t[81] !== v ||
  t[82] !== g ||
  t[83] !== M.isPending ||
  t[84] !== m ||
  t[85] !== N ||
  t[86] !== oe.isError ||
  t[87] !== oe.isLoading ||
  t[88] !== z ||
  t[89] !== K ||
  t[90] !== Fe ||
  t[91] !== Ie ||
  t[92] !== J ||
  t[93] !== Le ||
  t[94] !== Y ||
  t[95] !== X ||
  t[96] !== ze ||
  t[97] !== Be ||
  t[98] !== Ve ||
  t[99] !== He
    ? ((Z = (0, ht.jsx)(Re, {
        activeImportRequest: Fe,
        confirmExtensionImport: Ie,
        cookieAccessFailureMessage: J,
        elevatedChromeConsent: H,
        extensionsAvailable: I,
        importCookies: d,
        importExtensions: v,
        importHistory: g,
        importPasswords: m,
        isImporting: M.isPending,
        isLoadingProfiles: oe.isLoading,
        showCloseBrowserGuidance: R,
        profiles: N,
        profilesHaveError: oe.isError,
        requiresElevatedChromeConsent: z,
        result: K,
        revealedImportResultRowCount: Le,
        selectedProfile: Y,
        onCancel: X,
        onElevatedChromeConsentChange: ze,
        onImport: Be,
        onImportCookiesChange: p,
        onImportExtensionsChange: b,
        onImportHistoryChange: _,
        onImportPasswordsChange: h,
        onRetry: Ve,
        onSelectProfile: He,
      })),
      (t[78] = I),
      (t[79] = H),
      (t[80] = d),
      (t[81] = v),
      (t[82] = g),
      (t[83] = M.isPending),
      (t[84] = m),
      (t[85] = N),
      (t[86] = oe.isError),
      (t[87] = oe.isLoading),
      (t[88] = z),
      (t[89] = K),
      (t[90] = Fe),
      (t[91] = Ie),
      (t[92] = J),
      (t[93] = Le),
      (t[94] = Y),
      (t[95] = X),
      (t[96] = ze),
      (t[97] = Be),
      (t[98] = Ve),
      (t[99] = He),
      (t[100] = Z))
    : (Z = t[100]);
  let Ue;
  return (
    t[101] !== q || t[102] !== Pe || t[103] !== Z
      ? ((Ue = (0, ht.jsx)(ce, {
          contentProps: Me,
          open: !0,
          onOpenChange: q,
          showDialogClose: Pe,
          size: `default`,
          children: Z,
        })),
        (t[101] = q),
        (t[102] = Pe),
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
  return !e.some(G) || e.some(ge);
}
function pt(e) {
  return `${e.source}:${e.profilePath}`;
}
var mt, $, ht, gt, _t;
function vt() {
  return (vt = e(() => {
    ((mt = R()),
      c(),
      S(),
      m(),
      ($ = H()),
      fe(),
      z(),
      W(),
      De(),
      st(),
      je(),
      U(),
      (ht = B()),
      (gt = 750),
      (_t = 500));
  }))();
}
vt();
export { ct as BrowserProfileImportDialogModal };
//# sourceMappingURL=dialog-8a3f7d087f97.js.map
