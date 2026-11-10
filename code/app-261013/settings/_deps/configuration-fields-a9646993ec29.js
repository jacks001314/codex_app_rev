const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-3ab34542634b.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./error-54a41f068476.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $nt as r,
  $xt as i,
  ADt as a,
  AH as o,
  AO as s,
  BE as c,
  BH as l,
  CO as u,
  Cot as d,
  Fat as f,
  Gs as p,
  HE as m,
  HNt as h,
  IDt as g,
  Iot as _,
  JC as v,
  KU as y,
  Kat as b,
  Ks as x,
  LT as S,
  LZ as C,
  Lot as w,
  MO as T,
  MV as E,
  Ml as D,
  Mz as O,
  NV as k,
  Nz as A,
  Pat as j,
  Pxt as M,
  QJ as N,
  RE as P,
  RT as F,
  RZ as I,
  SJ as L,
  TJ as R,
  TO as z,
  UE as B,
  USt as V,
  Us as H,
  VDt as ee,
  VE as U,
  Vxt as W,
  Wnt as G,
  Ws as K,
  Xot as te,
  Yot as q,
  ZJ as ne,
  _Mt as J,
  _O as re,
  _lt as ie,
  bc as ae,
  bz as oe,
  cL as se,
  cO as ce,
  cz as le,
  dO as ue,
  fO as de,
  fPt as fe,
  fW as pe,
  gMt as me,
  hG as he,
  iw as ge,
  jDt as Y,
  jO as _e,
  jl as ve,
  lO as ye,
  mO as be,
  nst as xe,
  oO as Se,
  oSt as Ce,
  pPt as we,
  qC as Te,
  qG as Ee,
  qat as De,
  rst as Oe,
  sJ as ke,
  sL as Ae,
  sO as je,
  sz as Me,
  t3 as Ne,
  tst as Pe,
  tw as Fe,
  uO as Ie,
  vO as Le,
  vzt as X,
  wot as Re,
  xMt as ze,
  xz as Be,
  yMt as Ve,
  yc as He,
  yzt as Ue,
  zSt as We,
  zxt as Ge,
} from "./app-shared-bbfeca5e5737.js";
import {
  $3n as Ke,
  AZ as qe,
  Ayt as Je,
  BZ as Ye,
  CZ as Xe,
  DPn as Ze,
  EPn as Qe,
  Ek as $e,
  Eyt as et,
  FZ as tt,
  GMr as nt,
  HZ as rt,
  IQ as it,
  JPn as at,
  JQ as ot,
  Jxt as st,
  KIr as ct,
  LZ as lt,
  MRt as ut,
  MZ as dt,
  NRt as ft,
  QMr as pt,
  Qxt as mt,
  RQ as ht,
  SQ as gt,
  TPn as _t,
  TQ as vt,
  Tk as yt,
  UZ as bt,
  Uxt as xt,
  VZ as St,
  WZ as Ct,
  XMr as wt,
  XPn as Tt,
  Zxt as Et,
  d9n as Dt,
  dnn as Ot,
  e6n as kt,
  fMr as At,
  fnn as jt,
  gr as Mt,
  hMr as Nt,
  hr as Pt,
  iOn as Ft,
  iPr as It,
  jZ as Lt,
  lSr as Rt,
  nOn as zt,
  nRr as Bt,
  qQ as Vt,
  rOn as Ht,
  sPr as Ut,
  tNr as Wt,
  u9n as Gt,
  unn as Kt,
  wQ as qt,
  xPn as Jt,
  xQ as Yt,
  xZ as Xt,
  yPn as Zt,
  zZ as Qt,
} from "./app-initial-5851df3f6cb1.js";
import { m as $t, n as en, p as tn, r as nn } from "./codex-diff-css-681a898586a0.js";
import { t as rn } from "./register-pierre-themes-26873099a398.js";
import { n as an, t as on } from "./File-f16a49bb19bf.js";
import { n as sn, t as cn } from "./file-diff-61a6fffbd4c1.js";
import { a as ln, n as un, o as dn, s as fn } from "./result-values-ef2b1cdba93f.js";
import { n as pn, t as mn } from "./editor-a3c5f1bc275b.js";
import { n as hn, r as gn } from "./validation-message-e25ad070fad8.js";
import { n as _n, t as vn } from "./action-button-a78c6866b385.js";
import { n as yn, t as bn } from "./bundle-4201901f1e63.js";
import { n as xn, t as Sn } from "./error-54a41f068476.js";
function Cn(e) {
  let t = (0, kn.c)(45),
    { id: n, issue: r } = e,
    i = ee(),
    a = (0, An.useId)(),
    o = (0, An.useId)(),
    [s, l] = (0, An.useState)(!1),
    u = Mn[`${r.code}Label`],
    d = Mn[`${r.code}Help`],
    f = `${a}-summary`,
    p;
  t[0] === u ? (p = t[1]) : ((p = (0, jn.jsx)(g, { ...u })), (t[0] = u), (t[1] = p));
  let h;
  t[2] !== f || t[3] !== p
    ? ((h = (0, jn.jsx)(`span`, { id: f, className: `select-none`, children: p })),
      (t[2] = f),
      (t[3] = p),
      (t[4] = h))
    : (h = t[4]);
  let _;
  t[5] === d ? (_ = t[6]) : ((_ = (0, jn.jsx)(g, { ...d })), (t[5] = d), (t[6] = _));
  let v;
  t[7] === i ? (v = t[8]) : ((v = i.formatMessage(Mn.details)), (t[7] = i), (t[8] = v));
  let y = `${a}-summary`,
    b;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, jn.jsx)(O, { asset: S })), (t[9] = b))
    : (b = t[9]);
  let x;
  t[10] !== v || t[11] !== y
    ? ((x = (0, jn.jsx)(m, {
        asChild: !0,
        children: (0, jn.jsx)(`button`, {
          "aria-label": v,
          "aria-describedby": y,
          className: `inline-flex cursor-interaction rounded-sm focus-visible:outline-2 focus-visible:outline-ring`,
          type: `button`,
          children: b,
        }),
      })),
      (t[10] = v),
      (t[11] = y),
      (t[12] = x))
    : (x = t[12]);
  let C;
  t[13] !== s || t[14] !== _ || t[15] !== x
    ? ((C = (0, jn.jsx)(Me, { disabled: s, tooltipContent: _, children: x })),
      (t[13] = s),
      (t[14] = _),
      (t[15] = x),
      (t[16] = C))
    : (C = t[16]);
  let w;
  t[17] === u ? (w = t[18]) : ((w = (0, jn.jsx)(g, { ...u })), (t[17] = u), (t[18] = w));
  let T;
  t[19] !== w || t[20] !== a
    ? ((T = (0, jn.jsx)(U, { id: a, children: w })), (t[19] = w), (t[20] = a), (t[21] = T))
    : (T = t[21]);
  let E;
  t[22] === d ? (E = t[23]) : ((E = (0, jn.jsx)(g, { ...d })), (t[22] = d), (t[23] = E));
  let D;
  t[24] !== o || t[25] !== E
    ? ((D = (0, jn.jsx)(`p`, { id: o, children: E })), (t[24] = o), (t[25] = E), (t[26] = D))
    : (D = t[26]);
  let k;
  t[27] === r.valuesSaved
    ? (k = t[28])
    : ((k = r.valuesSaved ? (0, jn.jsx)(`p`, { children: (0, jn.jsx)(g, { ...Mn.valuesSaved }) }) : null),
      (t[27] = r.valuesSaved),
      (t[28] = k));
  let A;
  t[29] !== T || t[30] !== D || t[31] !== k
    ? ((A = (0, jn.jsxs)(`div`, {
        className: `flex flex-col gap-3 p-2 text-sm select-text`,
        children: [T, D, k],
      })),
      (t[29] = T),
      (t[30] = D),
      (t[31] = k),
      (t[32] = A))
    : (A = t[32]);
  let j;
  t[33] !== o || t[34] !== A || t[35] !== a
    ? ((j = (0, jn.jsx)(c, {
        "aria-labelledby": a,
        "aria-describedby": o,
        size: `large`,
        variant: `menu`,
        children: A,
      })),
      (t[33] = o),
      (t[34] = A),
      (t[35] = a),
      (t[36] = j))
    : (j = t[36]);
  let M;
  t[37] !== s || t[38] !== j || t[39] !== C
    ? ((M = (0, jn.jsxs)(P, { open: s, onOpenChange: l, children: [C, j] })),
      (t[37] = s),
      (t[38] = j),
      (t[39] = C),
      (t[40] = M))
    : (M = t[40]);
  let N;
  return (
    t[41] !== n || t[42] !== M || t[43] !== h
      ? ((N = (0, jn.jsxs)(`span`, {
          id: n,
          className: `inline-flex items-center gap-1 text-xs text-danger`,
          children: [h, M],
        })),
        (t[41] = n),
        (t[42] = M),
        (t[43] = h),
        (t[44] = N))
      : (N = t[44]),
    N
  );
}
function wn(e) {
  let t = (0, kn.c)(16),
    { issues: n, announce: r } = e,
    i = r === void 0 || r;
  if (n.length === 0) return null;
  let a;
  t[0] === n ? (a = t[1]) : ((a = n.filter(On)), (t[0] = n), (t[1] = a));
  let o = a,
    s;
  t[2] === n ? (s = t[3]) : ((s = n.filter(Dn)), (t[2] = n), (t[3] = s));
  let c = s,
    l = i ? `alert` : void 0,
    u;
  t[4] === o.length
    ? (u = t[5])
    : ((u =
        o.length > 0
          ? (0, jn.jsx)(g, {
              id: `restricted.environmentSetup.saveErrors.summary.invalid`,
              defaultMessage: `Fix {count, plural, one {# error} other {# errors}} to save`,
              description: `Compact environment save footer counting invalid fields that need correction`,
              values: { count: o.length },
            })
          : null),
      (t[4] = o.length),
      (t[5] = u));
  let d;
  t[6] !== c || t[7] !== o.length
    ? ((d =
        o.length === 0 && c.length > 0
          ? (0, jn.jsx)(g, {
              id: `restricted.environmentSetup.saveErrors.summary.values`,
              defaultMessage: `Check {count, plural, one {# value save} other {# value saves}}`,
              description: `Compact environment footer counting value writes that failed or have an unconfirmed outcome; the input is not necessarily invalid`,
              values: { count: c.length },
            })
          : null),
      (t[6] = c),
      (t[7] = o.length),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === n ? (f = t[10]) : ((f = n.filter(En).map(Tn)), (t[9] = n), (t[10] = f));
  let p;
  return (
    t[11] !== l || t[12] !== u || t[13] !== d || t[14] !== f
      ? ((p = (0, jn.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-1 text-xs text-danger select-none`,
          role: l,
          children: [u, d, f],
        })),
        (t[11] = l),
        (t[12] = u),
        (t[13] = d),
        (t[14] = f),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
function Tn(e, t) {
  return (0, jn.jsx)(Cn, { issue: e }, t);
}
function En(e) {
  let { field: t } = e;
  return t == null;
}
function Dn(e) {
  let { field: t } = e;
  return t != null;
}
function On(e) {
  let { code: t } = e;
  return [`name`, `repository`, `key`, `duplicate`, `reserved`, `domains`, `value`, `connection`].includes(t);
}
var kn, An, jn, Mn;
function Nn() {
  return (Nn = e(() => {
    ((kn = X()),
      F(),
      (An = Ue()),
      Y(),
      A(),
      B(),
      le(),
      (jn = ze()),
      (Mn = a({
        nameLabel: {
          id: `restricted.environmentSetup.saveErrors.name.label`,
          defaultMessage: `Name required`,
          description: `Short field error for an empty environment name`,
        },
        repositoryLabel: {
          id: `restricted.environmentSetup.saveErrors.repository.label`,
          defaultMessage: `Check repository`,
          description: `Short field error for an incomplete environment repository selection`,
        },
        keyLabel: {
          id: `restricted.environmentSetup.saveErrors.key.label`,
          defaultMessage: `Invalid key`,
          description: `Short error beside a malformed cloud environment secret key`,
        },
        duplicateLabel: {
          id: `restricted.environmentSetup.saveErrors.duplicate.label`,
          defaultMessage: `Duplicate key`,
          description: `Short error beside a cloud environment secret whose key is already used`,
        },
        reservedLabel: {
          id: `restricted.environmentSetup.saveErrors.reserved.label`,
          defaultMessage: `Reserved key`,
          description: `Short error beside a proxy secret key reserved for platform configuration`,
        },
        "reserved-targetLabel": {
          id: `restricted.environmentSetup.saveErrors.reservedTarget.label`,
          defaultMessage: `Reserved key`,
          description: `Global environment save error when the server rejects a platform-reserved proxy secret key without identifying the affected field`,
        },
        domainsLabel: {
          id: `restricted.environmentSetup.saveErrors.domains.label`,
          defaultMessage: `Check domains`,
          description: `Short error beside invalid cloud environment allowed domains`,
        },
        valueLabel: {
          id: `restricted.environmentSetup.saveErrors.value.label`,
          defaultMessage: `Value required`,
          description: `Short error for a required secret value before reviewing an environment`,
        },
        connectionLabel: {
          id: `restricted.environmentSetup.saveErrors.connection.label`,
          defaultMessage: `Check connection`,
          description: `Short error beside an invalid environment outbound identity attachment`,
        },
        "save-valueLabel": {
          id: `restricted.environmentSetup.saveErrors.saveValue.label`,
          defaultMessage: `Couldn’t save value`,
          description: `Short service failure beside a specific cloud environment secret; does not imply invalid input`,
        },
        unconfirmedLabel: {
          id: `restricted.environmentSetup.saveErrors.unconfirmed.label`,
          defaultMessage: `Save unconfirmed`,
          description: `Short status for a value creation that may have succeeded without returning its ID`,
        },
        conflictLabel: {
          id: `restricted.environmentSetup.saveErrors.conflict.label`,
          defaultMessage: `Environment changed`,
          description: `Short global save failure when an environment revision changed elsewhere`,
        },
        authenticationLabel: {
          id: `restricted.environmentSetup.saveErrors.authentication.label`,
          defaultMessage: `Check sign-in`,
          description: `Short global environment save failure for missing or changed authentication`,
        },
        permissionLabel: {
          id: `restricted.environmentSetup.saveErrors.permission.label`,
          defaultMessage: `Permission denied`,
          description: `Short global environment save failure when the user lacks access`,
        },
        "not-foundLabel": {
          id: `restricted.environmentSetup.saveErrors.notFound.label`,
          defaultMessage: `No longer available`,
          description: `Short global environment save failure when a server resource is missing`,
        },
        unavailableLabel: {
          id: `restricted.environmentSetup.saveErrors.unavailable.label`,
          defaultMessage: `Save unconfirmed`,
          description: `Short global status when the environment save response was lost or invalid`,
        },
        requestLabel: {
          id: `restricted.environmentSetup.saveErrors.request.label`,
          defaultMessage: `Couldn’t save environment`,
          description: `Short global error when no field-specific cause is known`,
        },
        nameHelp: {
          id: `restricted.environmentSetup.saveErrors.name.help`,
          defaultMessage: `Enter a name for this environment`,
          description: `Explanation for an empty environment name in save-error details`,
        },
        repositoryHelp: {
          id: `restricted.environmentSetup.saveErrors.repository.help`,
          defaultMessage: `Select a repository with an available default branch before saving`,
          description: `Explanation of an incomplete repository selection in environment save-error details`,
        },
        keyHelp: {
          id: `restricted.environmentSetup.saveErrors.key.help`,
          defaultMessage: `Use a letter or underscore first, followed by letters, digits, or underscores, without surrounding spaces`,
          description: `Explanation of the environment variable grammar for a proxy secret key`,
        },
        duplicateHelp: {
          id: `restricted.environmentSetup.saveErrors.duplicate.help`,
          defaultMessage: `Each secret must have a unique key; rename this secret or remove the duplicate`,
          description: `Correction for duplicate secret names or environment variable targets`,
        },
        reservedHelp: {
          id: `restricted.environmentSetup.saveErrors.reserved.help`,
          defaultMessage: `This key is reserved for platform configuration; rename or remove this proxy secret before saving`,
          description: `Explains how to correct a proxy secret that overrides a platform-owned variable`,
        },
        "reserved-targetHelp": {
          id: `restricted.environmentSetup.saveErrors.reservedTarget.help`,
          defaultMessage: `One or more proxy secrets use a key reserved for platform configuration. Rename or remove those secrets before saving; your edits are still here.`,
          description: `Recovery guidance for a server rejection that identifies a reserved proxy secret key but does not identify which field; asks the user to rename or remove the affected secrets and reassures them their edits are preserved`,
        },
        domainsHelp: {
          id: `restricted.environmentSetup.saveErrors.domains.help`,
          defaultMessage: `Use hostnames without URLs, paths, or ports; each proxy secret needs at least one exact hostname, and lists support up to 1,024 domains`,
          description: `Explains invalid allowed-domain input; network rules can use wildcards but proxy secret destinations cannot`,
        },
        valueHelp: {
          id: `restricted.environmentSetup.saveErrors.value.help`,
          defaultMessage: `Enter a value for this required secret before continuing the review`,
          description: `Explains missing values at the environment review boundary; draft saves can retain unresolved requirements`,
        },
        connectionHelp: {
          id: `restricted.environmentSetup.saveErrors.connection.help`,
          defaultMessage: `Use unique connections and aliases, with at most 16 attachments; aliases start with an uppercase letter followed by up to 63 uppercase letters, digits, or underscores`,
          description: `Explains the existing outbound identity attachment validation rules`,
        },
        "save-valueHelp": {
          id: `restricted.environmentSetup.saveErrors.saveValue.help`,
          defaultMessage: `The service couldn’t save this value; your edits are still here, so try saving again`,
          description: `Explanation for a failed value write whose outcome is known, without blaming valid user input`,
        },
        unconfirmedHelp: {
          id: `restricted.environmentSetup.saveErrors.unconfirmed.manualRetryHelp`,
          defaultMessage: `The service didn’t confirm whether this value was saved. Your input is still here. Saving again may create another stored value.`,
          description: `Explanation beside a value in the environment panel after an unconfirmed creation; the existing Save button retries and may create another stored value`,
        },
        conflictHelp: {
          id: `restricted.environmentSetup.saveErrors.conflict.help`,
          defaultMessage: `This environment changed elsewhere. Your edits are still here; review the refreshed configuration before saving again.`,
          description: `Recovery guidance for a stale environment draft revision, with local edits preserved`,
        },
        authenticationHelp: {
          id: `restricted.environmentSetup.saveErrors.authentication.help`,
          defaultMessage: `Sign in to the account that owns these edits, then try saving again`,
          description: `Recovery guidance for an environment save rejected because authentication changed or expired`,
        },
        permissionHelp: {
          id: `restricted.environmentSetup.saveErrors.permission.help`,
          defaultMessage: `You don’t have permission to save these changes; check your account and environment access`,
          description: `Recovery guidance for an environment save denied by authorization`,
        },
        "not-foundHelp": {
          id: `restricted.environmentSetup.saveErrors.notFound.help`,
          defaultMessage: `The environment or a referenced resource is no longer available; reload it to check its current state`,
          description: `Global resource-not-found guidance without guessing which resource is missing`,
        },
        unavailableHelp: {
          id: `restricted.environmentSetup.saveErrors.unavailable.help`,
          defaultMessage: `The service didn’t return a confirmed result. Your edits are still here; reload the environment to check whether it saved before trying again.`,
          description: `Recovery guidance for a lost or invalid environment save response`,
        },
        requestHelp: {
          id: `restricted.environmentSetup.saveErrors.request.explanation`,
          defaultMessage: `The service rejected this save without identifying a field. Your edits are still here.`,
          description: `Explanation in the environment save error popover when the service rejects a save without identifying an invalid field; reassures the user that their edits are preserved`,
        },
        details: {
          id: `restricted.environmentSetup.saveErrors.details.button`,
          defaultMessage: `Error details`,
          description: `Accessible name of the information button next to an environment save error; opens a persistent explanation`,
        },
        valuesSaved: {
          id: `restricted.environmentSetup.saveErrors.valuesSaved.help`,
          defaultMessage: `Some values were saved before this failure and will be reused on retry; updates to existing values already affect other bindings that use them`,
          description: `Explains successful value writes before a later configuration failure and the shared effect of updating an existing value`,
        },
      })));
  }))();
}
function Pn(e) {
  let t = (0, In.c)(39),
    {
      disabled: n,
      domains: r,
      value: i,
      onChange: a,
      onInputChange: o,
      showErrors: s,
      purpose: c,
      readOnly: l,
      otherDomainCount: u,
    } = e,
    d = s !== void 0 && s,
    f = c === void 0 ? `network` : c,
    p = l !== void 0 && l,
    m = u === void 0 ? 0 : u,
    h = ee(),
    _ = (0, Ln.useId)(),
    v = (0, Ln.useId)(),
    [y, b] = (0, Ln.useState)(!1),
    x = (0, Ln.useRef)(null),
    S = (0, Ln.useRef)(r.length),
    C = { allowWildcards: f === `network`, otherDomainCount: m },
    w = f === `secret` || y ? bt(i.split(`,`)[0]?.trim() ?? ``, r, C) : null,
    T,
    E;
  (t[0] === r.length
    ? ((T = t[1]), (E = t[2]))
    : ((T = () => {
        (r.length > S.current && x.current?.scrollIntoView({ block: `nearest` }), (S.current = r.length));
      }),
      (E = [r.length]),
      (t[0] = r.length),
      (t[1] = T),
      (t[2] = E)),
    (0, Ln.useLayoutEffect)(T, E));
  let D = function (e, t) {
      let n = e.split(/[,\r\n]/),
        i = t ? n.pop() : void 0,
        s = [...r],
        c = [];
      for (let e of n) {
        let t = rt(e);
        t == null || bt(e.trim(), s, C) != null ? e.trim() && c.push(e.trim()) : s.push(t);
      }
      (s.length !== r.length && a(s), o([...c, i?.trim()].filter(Fn).join(`, `)), b(c.length > 0));
    },
    O;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Rn.jsx)(g, {
        id: `restricted.environmentSetup.network.domain.help`,
        defaultMessage: `Press Enter to add, or paste a comma- or line-separated list`,
        description: `Instructions for adding one or more allowed cloud environment network domains`,
      })),
      (t[3] = O))
    : (O = t[3]);
  let k = O;
  if (i.trim()) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Rn.jsx)(g, {
          id: `restricted.environmentSetup.network.domain.addBeforeSave`,
          defaultMessage: `Press Enter to add this domain before saving`,
          description: `Help text when a cloud environment domain has been typed but not added yet`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (k = e));
  }
  if (w != null) {
    let e = zn[w],
      n;
    (t[5] === e ? (n = t[6]) : ((n = (0, Rn.jsx)(g, { ...e })), (t[5] = e), (t[6] = n)), (k = n));
  }
  if (f === `secret`) {
    if (w === `invalid`) {
      let e;
      (t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Rn.jsx)(g, {
            id: `environmentSetup.secret.domain.invalid`,
            defaultMessage: `Enter an exact host, such as api.example.com`,
            description: `Validation error for a malformed proxy-secret destination hostname`,
          })),
          (t[7] = e))
        : (e = t[7]),
        (k = e));
    } else if (w === `limit`) {
      let e;
      (t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Rn.jsx)(g, {
            id: `environmentSetup.secret.domain.limit`,
            defaultMessage: `Secrets can have up to 1,024 destinations in total; remove a domain to add another`,
            description: `Validation error when the combined destinations across cloud environment secrets exceed the supported limit`,
          })),
          (t[8] = e))
        : (e = t[8]),
        (k = e));
    } else if (w === `listSize`) {
      let e;
      (t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Rn.jsx)(g, {
            id: `environmentSetup.secret.domain.listSize`,
            defaultMessage: `The domain list is too long; remove some domains`,
            description: `Validation error asking the user to reduce the total size of a proxy secret's destination list`,
          })),
          (t[9] = e))
        : (e = t[9]),
        (k = e));
    }
  }
  let A = r.map((e, t) =>
      (0, Rn.jsxs)(
        ut,
        {
          className: `max-w-full gap-1`,
          variant: `outline`,
          children: [
            (0, Rn.jsx)(`span`, { className: `min-w-0 truncate`, title: e, children: e }),
            d && (!e.trim() || bt(e, f === `secret` ? r.slice(0, t) : [], C) != null || t + m >= 1024)
              ? (0, Rn.jsx)(Cn, { issue: { field: `network-${t}`, code: `domains` } })
              : null,
            !p &&
              (0, Rn.jsx)(`button`, {
                "aria-label": h.formatMessage(
                  {
                    id: `restricted.environmentSetup.network.domain.remove`,
                    defaultMessage: `Remove {domain}`,
                    description: `Button for removing one allowed cloud environment network domain`,
                  },
                  { domain: e },
                ),
                className: `cursor-interaction rounded-sm text-secondary hover:text-default focus-visible:outline-2 focus-visible:outline-ring`,
                disabled: n,
                type: `button`,
                onClick: () => a(r.filter((e, n) => n !== t)),
                children: (0, Rn.jsx)(L, {}),
              }),
          ],
        },
        `${e}-${t}`,
      ),
    ),
    j = !p && `[&>div]:gap-x-2`,
    M;
  t[10] === j ? (M = t[11]) : ((M = me(`flex w-full min-w-0 flex-col gap-1.5`, j)), (t[10] = j), (t[11] = M));
  let N;
  t[12] !== D ||
  t[13] !== n ||
  t[14] !== A ||
  t[15] !== r ||
  t[16] !== w ||
  t[17] !== _ ||
  t[18] !== h ||
  t[19] !== a ||
  t[20] !== o ||
  t[21] !== v ||
  t[22] !== f ||
  t[23] !== p ||
  t[24] !== i
    ? ((N = p
        ? (0, Rn.jsx)(`div`, {
            className: me(
              `flex min-w-0 flex-wrap content-start gap-1 overflow-y-auto`,
              f === `secret` ? `max-h-24` : `h-24`,
            ),
            children:
              r.length > 0
                ? A
                : (0, Rn.jsx)(`p`, {
                    className: `text-xs text-secondary select-none`,
                    children: (0, Rn.jsx)(g, {
                      id: `restricted.environmentSetup.network.domain.emptyList`,
                      defaultMessage: `No domains added yet`,
                      description: `Empty-state message in the cloud environment allowed-domains editor`,
                    }),
                  }),
          })
        : (0, Rn.jsx)(_t, {
            ref: x,
            leadingControl: (0, Rn.jsx)(Rn.Fragment, { children: A }),
            "aria-describedby": f === `network` ? `${_} ${v}` : _,
            "aria-invalid": w != null,
            autoFocus: !0,
            "aria-label":
              f === `secret`
                ? h.formatMessage({
                    id: `environmentSetup.secret.domain.input`,
                    defaultMessage: `Allowed secret domains`,
                    description: `Accessible label for adding exact destination hostnames for a proxy secret`,
                  })
                : h.formatMessage({
                    id: `restricted.environmentSetup.sidePanel.network.domains`,
                    defaultMessage: `Additional allowed domains`,
                    description: `Accessible label for entering individually allowed cloud environment network hosts in addition to the selected preset`,
                  }),
            disabled: n,
            placeholder:
              f === `secret`
                ? h.formatMessage({
                    id: `environmentSetup.secret.domain.placeholder`,
                    defaultMessage: `api.example.com`,
                    description: `Example exact destination hostname for a proxy secret`,
                  })
                : h.formatMessage({
                    id: `restricted.environmentSetup.network.domain.placeholder`,
                    defaultMessage: `example.com or *.example.com`,
                    description: `Example allowed network host or wildcard host in a cloud environment`,
                  }),
            value: i,
            variant: `tags`,
            onBlur: () => b(i.trim().length > 0),
            onChange: (e) => {
              let t = e.currentTarget.value;
              t.includes(`,`) ? D(t, !0) : (o(t), b(!1));
            },
            onKeyDown: (e) => {
              e.nativeEvent.isComposing ||
                (e.key === `Enter` || e.key === `,`
                  ? (e.preventDefault(), i.trim() && D(i, !1))
                  : f === `network` && e.key === `Backspace` && !i && r.length > 0 && a(r.slice(0, -1)));
            },
            onPaste: (e) => {
              let t = e.clipboardData.getData(`text`);
              if (!/[,\r\n]/.test(t)) return;
              e.preventDefault();
              let n = e.currentTarget,
                r = n.selectionStart ?? n.value.length,
                i = n.selectionEnd ?? r;
              D(n.value.slice(0, r) + t + n.value.slice(i), !1);
            },
          })),
      (t[12] = D),
      (t[13] = n),
      (t[14] = A),
      (t[15] = r),
      (t[16] = w),
      (t[17] = _),
      (t[18] = h),
      (t[19] = a),
      (t[20] = o),
      (t[21] = v),
      (t[22] = f),
      (t[23] = p),
      (t[24] = i),
      (t[25] = N))
    : (N = t[25]);
  let P;
  t[26] !== w || t[27] !== k || t[28] !== _ || t[29] !== p
    ? ((P =
        !p &&
        (0, Rn.jsx)(`p`, {
          id: _,
          className: w == null ? `text-xs text-secondary select-none` : `text-xs text-danger select-none`,
          role: w == null ? void 0 : `alert`,
          children: k,
        })),
      (t[26] = w),
      (t[27] = k),
      (t[28] = _),
      (t[29] = p),
      (t[30] = P))
    : (P = t[30]);
  let F;
  t[31] !== v || t[32] !== f
    ? ((F =
        f === `network` &&
        (0, Rn.jsx)(`p`, {
          id: v,
          className: `text-xs text-secondary select-none`,
          children: (0, Rn.jsx)(g, {
            id: `restricted.environmentSetup.network.domain.vpnPolicyHelp`,
            defaultMessage: `For private VPN destinations, add IPv4 addresses or hostnames that resolve to IPv4`,
            description: `Explains in the restricted internet access editor that private VPN destinations must be added as IPv4 addresses or hostnames that resolve to IPv4`,
          }),
        })),
      (t[31] = v),
      (t[32] = f),
      (t[33] = F))
    : (F = t[33]);
  let I;
  return (
    t[34] !== N || t[35] !== P || t[36] !== F || t[37] !== M
      ? ((I = (0, Rn.jsxs)(`div`, { className: M, children: [N, P, F] })),
        (t[34] = N),
        (t[35] = P),
        (t[36] = F),
        (t[37] = M),
        (t[38] = I))
      : (I = t[38]),
    I
  );
}
function Fn(e) {
  return !!e;
}
var In, Ln, Rn, zn;
function Bn() {
  return (Bn = e(() => {
    ((In = X()),
      J(),
      (Ln = Ue()),
      Y(),
      ft(),
      R(),
      Ze(),
      Ct(),
      Nn(),
      (Rn = ze()),
      (zn = a({
        duplicate: {
          id: `restricted.environmentSetup.network.domain.duplicate`,
          defaultMessage: `This domain is already allowed`,
          description: `Validation error when adding a duplicate cloud environment network host`,
        },
        ipv4: {
          id: `restricted.environmentSetup.network.domain.ipv4`,
          defaultMessage: `Use a full IPv4 address, such as 192.0.2.1`,
          description: `Validation error for a noncanonical numeric network host`,
        },
        long: {
          id: `restricted.environmentSetup.network.domain.long`,
          defaultMessage: `Hosts must be at most 253 characters, with labels at most 63 characters`,
          description: `Validation error for a cloud environment network host that exceeds hostname length limits`,
        },
        limit: {
          id: `restricted.environmentSetup.network.domain.limit`,
          defaultMessage: `You can add up to 1,024 domains`,
          description: `Validation error when a cloud environment has too many allowed network hosts`,
        },
        listSize: {
          id: `restricted.environmentSetup.network.domain.listSize`,
          defaultMessage: `The allowed domain list is too long`,
          description: `Validation error when cloud environment allowed network hosts exceed the total supported size`,
        },
        url: {
          id: `restricted.environmentSetup.network.domain.url`,
          defaultMessage: `Enter a host without a URL, path, or port`,
          description: `Validation error when a cloud environment allowed network host contains a URL or port`,
        },
        invalid: {
          id: `restricted.environmentSetup.network.domain.invalid`,
          defaultMessage: `Enter a host such as example.com or *.example.com`,
          description: `Validation error for a malformed cloud environment allowed network hostname`,
        },
        wildcard: {
          id: `environmentSetup.secret.domain.wildcard`,
          defaultMessage: `Wildcards are not supported for secrets; enter an exact host`,
          description: `Validation error explaining that proxy secrets require exact destination hostnames`,
        },
      })));
  }))();
}
function Vn(e) {
  let t = (0, Hn.c)(37),
    { disabled: r, disabledTooltip: i, domains: a, onChange: o, issues: s } = e,
    c;
  t[0] === s ? (c = t[1]) : ((c = s === void 0 ? [] : s), (t[0] = s), (t[1] = c));
  let l = c,
    u = ee(),
    [d, f] = (0, Un.useState)(null);
  r && d != null && f(null);
  let p = l.length > 0,
    m;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Wn.jsx)(`span`, {
        className: `shrink-0 select-none`,
        children: (0, Wn.jsx)(g, { ...Gn.title }),
      })),
      (t[2] = m))
    : (m = t[2]);
  let h;
  t[3] !== a[0] || t[4] !== a.length
    ? ((h = (0, Wn.jsxs)(`div`, {
        className: `flex min-w-0 items-center justify-between gap-3`,
        children: [
          m,
          (0, Wn.jsx)(`span`, {
            className: `truncate text-secondary`,
            children:
              a.length > 0
                ? (0, Wn.jsx)(g, {
                    id: `restricted.environmentSetup.network.domain.summary`,
                    defaultMessage: `{count, plural, one {# domain} other {# domains}} · {firstDomain}`,
                    description: `Compact allowed-domain summary showing the total count and the first allowed host in cloud environment settings`,
                    values: { count: a.length, firstDomain: a[0] },
                  })
                : (0, Wn.jsx)(g, {
                    id: `restricted.environmentSetup.network.domain.empty`,
                    defaultMessage: `No additional domains`,
                    description: `Summary when no individual cloud environment network domains have been allowed`,
                  }),
          }),
        ],
      })),
      (t[3] = a[0]),
      (t[4] = a.length),
      (t[5] = h))
    : (h = t[5]);
  let _;
  t[6] !== a.length || t[7] !== u
    ? ((_ = u.formatMessage(Gn.editLabel, { count: a.length })), (t[6] = a.length), (t[7] = u), (t[8] = _))
    : (_ = t[8]);
  let v = r ? i : null,
    y;
  t[9] === a ? (y = t[10]) : ((y = () => f({ domains: [...a], value: `` })), (t[9] = a), (t[10] = y));
  let b;
  t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = (0, Wn.jsx)(he, {})), (t[11] = b)) : (b = t[11]);
  let x;
  t[12] !== r || t[13] !== _ || t[14] !== v || t[15] !== y
    ? ((x = (0, Wn.jsx)(vn, {
        "aria-label": _,
        color: `ghost`,
        disabled: r,
        tooltipContent: v,
        size: `icon`,
        onClick: y,
        children: b,
      })),
      (t[12] = r),
      (t[13] = _),
      (t[14] = v),
      (t[15] = y),
      (t[16] = x))
    : (x = t[16]);
  let S;
  t[17] !== r || t[18] !== l[0]
    ? ((S = !r && l[0] != null && (0, Wn.jsx)(Cn, { issue: l[0] })), (t[17] = r), (t[18] = l[0]), (t[19] = S))
    : (S = t[19]);
  let C;
  t[20] !== x || t[21] !== S
    ? ((C = (0, Wn.jsxs)(Wn.Fragment, { children: [x, S] })), (t[20] = x), (t[21] = S), (t[22] = C))
    : (C = t[22]);
  let w;
  t[23] !== C || t[24] !== h
    ? ((w = (0, Wn.jsx)(Fe, {
        className: `select-none`,
        controlSizing: `content`,
        variant: `featured`,
        size: `compact`,
        label: h,
        control: C,
      })),
      (t[23] = C),
      (t[24] = h),
      (t[25] = w))
    : (w = t[25]);
  let T;
  t[26] !== w || t[27] !== p
    ? ((T = (0, Wn.jsx)(`div`, { "data-environment-invalid": p, children: w })),
      (t[26] = w),
      (t[27] = p),
      (t[28] = T))
    : (T = t[28]);
  let E;
  t[29] !== r || t[30] !== d || t[31] !== l.length || t[32] !== o
    ? ((E =
        d != null && !r
          ? (0, Wn.jsx)(be, {
              open: !0,
              size: `wide`,
              onOpenChange: (e) => !e && f(null),
              children: (0, Wn.jsxs)(Se, {
                as: `form`,
                size: `viewport`,
                onSubmit: (e) => {
                  (e.preventDefault(), e.stopPropagation(), !d.value.trim() && (o(d.domains), f(null)));
                },
                children: [
                  (0, Wn.jsx)(ye, {
                    children: (0, Wn.jsx)(ce, {
                      title: (0, Wn.jsx)(re, { children: (0, Wn.jsx)(g, { ...Gn.title }) }),
                    }),
                  }),
                  (0, Wn.jsx)(ye, {
                    children: (0, Wn.jsx)(Pn, {
                      disabled: r,
                      domains: d.domains,
                      showErrors: l.length > 0,
                      value: d.value,
                      onChange: (e) => f((t) => (t == null ? null : { ...t, domains: e })),
                      onInputChange: (e) => f((t) => (t == null ? null : { ...t, value: e })),
                    }),
                  }),
                  (0, Wn.jsx)(ye, {
                    children: (0, Wn.jsxs)(je, {
                      children: [
                        (0, Wn.jsx)(n, {
                          color: `secondary`,
                          onClick: () => f(null),
                          children: (0, Wn.jsx)(g, {
                            id: `restricted.environmentSetup.configuration.dialog.cancel`,
                            defaultMessage: `Cancel`,
                            description: `Discard edits in a cloud environment configuration dialog`,
                          }),
                        }),
                        (0, Wn.jsx)(n, {
                          color: `primary`,
                          disabled: !!d.value.trim(),
                          type: `submit`,
                          children: (0, Wn.jsx)(g, {
                            id: `restricted.environmentSetup.configuration.dialog.save`,
                            defaultMessage: `Save`,
                            description: `Apply dialog edits to the cloud environment configuration being edited`,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : null),
      (t[29] = r),
      (t[30] = d),
      (t[31] = l.length),
      (t[32] = o),
      (t[33] = E))
    : (E = t[33]);
  let D;
  return (
    t[34] !== T || t[35] !== E
      ? ((D = (0, Wn.jsxs)(Wn.Fragment, { children: [T, E] })), (t[34] = T), (t[35] = E), (t[36] = D))
      : (D = t[36]),
    D
  );
}
var Hn, Un, Wn, Gn;
function Kn() {
  return (Kn = e(() => {
    ((Hn = X()),
      (Un = Ue()),
      Y(),
      Ne(),
      Le(),
      de(),
      R(),
      ge(),
      _n(),
      Bn(),
      Nn(),
      (Wn = ze()),
      (Gn = a({
        editLabel: {
          id: `restricted.environmentSetup.network.domain.edit`,
          defaultMessage: `Edit additional allowed domains ({count, plural, one {# domain} other {# domains}})`,
          description: `Accessible label for editing individually allowed cloud environment network domains in addition to the selected preset, including their count`,
        },
        title: {
          id: `restricted.environmentSetup.configuration.network.domains`,
          defaultMessage: `Additional allowed domains`,
          description: `Label and editor title for individually allowed cloud environment network domains in addition to the selected preset`,
        },
      })));
  }))();
}
function qn() {
  let e = (0, Jn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Yn.jsx)(`p`, {
          className: `text-sm text-danger select-none`,
          role: `alert`,
          children: (0, Yn.jsx)(g, {
            id: `restricted.environmentSetup.batchSecrets.conflict`,
            defaultMessage: `This environment changed elsewhere. Close and reopen the editor to load the latest version, then re-enter your edits`,
            description: `Explains that private batch edits cannot replace a newer environment configuration and how to reopen the latest version`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Jn, Yn;
function Xn() {
  return (Xn = e(() => {
    ((Jn = X()), Y(), (Yn = ze()));
  }))();
}
function Zn(e) {
  let t = (0, Qn.c)(47),
    { ref: n, limit: r, entryCount: i, onAddKey: a, onImport: o, onPendingChange: s } = e,
    c = ee(),
    l = (0, $n.useId)(),
    [u, d] = (0, $n.useState)(``),
    [f, p] = (0, $n.useState)(null),
    m = (0, $n.useRef)(!1),
    h = (0, $n.useRef)(null),
    _;
  t[0] !== o || t[1] !== s
    ? ((_ = function (e) {
        let t = o(e);
        (p(t), d(t.ok ? `` : e), s(!t.ok && e.trim().length > 0));
      }),
      (t[0] = o),
      (t[1] = s),
      (t[2] = _))
    : (_ = t[2]);
  let v = _,
    y;
  t[3] !== v || t[4] !== u
    ? ((y = function (e) {
        let t = h.current;
        t != null && (v(u.slice(0, t.selectionStart) + e + u.slice(t.selectionEnd)), t.focus());
      }),
      (t[3] = v),
      (t[4] = u),
      (t[5] = y))
    : (y = t[5]);
  let b = y,
    x;
  (t[6] === b ? (x = t[7]) : ((x = () => ({ importText: b })), (t[6] = b), (t[7] = x)),
    (0, $n.useImperativeHandle)(n, x));
  let S;
  t[8] !== i || t[9] !== r || t[10] !== a || t[11] !== s
    ? ((S = function (e) {
        let { value: t, selectionStart: n, selectionEnd: o, selectionDirection: c } = e;
        if ((d(t), p(null), s(t.trim().length > 0), !(m.current || !t || /[=\r\n]/.test(t)))) {
          if (i >= r) {
            p({ ok: !1, reason: `limit`, line: 0 });
            return;
          }
          (a(t, (e) => {
            (e?.focus(), e?.setSelectionRange(n, o, c));
          }),
            d(``),
            s(!1));
        }
      }),
      (t[8] = i),
      (t[9] = r),
      (t[10] = a),
      (t[11] = s),
      (t[12] = S))
    : (S = t[12]);
  let C = S,
    w;
  t[13] === c
    ? (w = t[14])
    : ((w = c.formatMessage({
        id: `environmentSetup.entries.input`,
        defaultMessage: `Paste .env or type a key`,
        description: `Accessible label for adding entries to the network secret or environment variable editor`,
      })),
      (t[13] = c),
      (t[14] = w));
  let T = f?.ok === !1,
    E = f?.ok === !1 ? l : void 0,
    D;
  t[15] === c
    ? (D = t[16])
    : ((D = c.formatMessage({
        id: `environmentSetup.entries.placeholder`,
        defaultMessage: `Paste your .env or type a key`,
        description: `Input accepts dotenv contents to import multiple entries, or a name to add one entry`,
      })),
      (t[15] = c),
      (t[16] = D));
  let O;
  t[17] === C ? (O = t[18]) : ((O = (e) => C(e.currentTarget)), (t[17] = C), (t[18] = O));
  let k;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = () => {
        m.current = !0;
      }),
      (t[19] = k))
    : (k = t[19]);
  let A;
  t[20] === C
    ? (A = t[21])
    : ((A = (e) => {
        ((m.current = !1), C(e.currentTarget));
      }),
      (t[20] = C),
      (t[21] = A));
  let j;
  t[22] !== v || t[23] !== u
    ? ((j = (e) => {
        e.key === `Enter` &&
          !e.shiftKey &&
          !e.nativeEvent.isComposing &&
          (e.preventDefault(), e.stopPropagation(), v(u));
      }),
      (t[22] = v),
      (t[23] = u),
      (t[24] = j))
    : (j = t[24]);
  let M;
  t[25] === b
    ? (M = t[26])
    : ((M = (e) => {
        let t = e.clipboardData.getData(`text/plain`);
        (t.includes(`=`) ||
          t.includes(`
`)) &&
          (e.preventDefault(), b(t));
      }),
      (t[25] = b),
      (t[26] = M));
  let N;
  t[27] !== A ||
  t[28] !== j ||
  t[29] !== M ||
  t[30] !== w ||
  t[31] !== T ||
  t[32] !== E ||
  t[33] !== D ||
  t[34] !== O ||
  t[35] !== u
    ? ((N = (0, er.jsx)(Qe, {
        ref: h,
        "aria-label": w,
        "aria-invalid": T,
        "aria-describedby": E,
        autoComplete: `off`,
        autoFocus: !0,
        focusIndicator: `border`,
        spellCheck: !1,
        placeholder: D,
        rows: 1,
        value: u,
        variant: `compact`,
        onChange: O,
        onCompositionStart: k,
        onCompositionEnd: A,
        onKeyDown: j,
        onPaste: M,
      })),
      (t[27] = A),
      (t[28] = j),
      (t[29] = M),
      (t[30] = w),
      (t[31] = T),
      (t[32] = E),
      (t[33] = D),
      (t[34] = O),
      (t[35] = u),
      (t[36] = N))
    : (N = t[36]);
  let P;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, er.jsx)(`div`, { className: `w-8 shrink-0`, "aria-hidden": !0 })), (t[37] = P))
    : (P = t[37]);
  let F;
  t[38] === N
    ? (F = t[39])
    : ((F = (0, er.jsxs)(`div`, { className: `flex gap-2`, children: [N, P] })), (t[38] = N), (t[39] = F));
  let I;
  t[40] !== f || t[41] !== l || t[42] !== r
    ? ((I =
        f?.ok === !1
          ? (0, er.jsx)(`p`, {
              id: l,
              className: `text-sm text-danger`,
              role: `alert`,
              children:
                f.reason === `limit`
                  ? (0, er.jsx)(g, {
                      id: `environmentSetup.entries.limit`,
                      defaultMessage: `You can add up to {count} entries; nothing was imported`,
                      description: `An atomic import exceeded this editor's entry limit`,
                      values: { count: r },
                    })
                  : (0, er.jsx)(g, {
                      id: `environmentSetup.entries.invalid`,
                      defaultMessage: `Line {line} is invalid or repeats an unavailable key; nothing was imported`,
                      description: `An invalid or duplicate name rejected the entire import without changing any rows`,
                      values: { line: f.line },
                    }),
            })
          : null),
      (t[40] = f),
      (t[41] = l),
      (t[42] = r),
      (t[43] = I))
    : (I = t[43]);
  let L;
  return (
    t[44] !== F || t[45] !== I
      ? ((L = (0, er.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [F, I] })),
        (t[44] = F),
        (t[45] = I),
        (t[46] = L))
      : (L = t[46]),
    L
  );
}
var Qn, $n, er;
function tr() {
  return (tr = e(() => {
    ((Qn = X()), ($n = Ue()), Y(), Ze(), (er = ze()));
  }))();
}
function nr(e) {
  let t = (0, rr.c)(29),
    {
      id: n,
      ariaLabel: r,
      ariaInvalid: i,
      ariaDescribedBy: a,
      onFocus: o,
      onBlur: s,
      hasSavedValue: c,
      optional: l,
      value: u,
      onChange: d,
      scopeControl: f,
    } = e,
    p = l !== void 0 && l,
    m = ee(),
    [h, g] = (0, ir.useState)(!1),
    _;
  t[0] === u
    ? (_ = t[1])
    : ((_ = u.includes(`
`)),
      (t[0] = u),
      (t[1] = _));
  let [v, y] = (0, ir.useState)(_);
  !v &&
    u.includes(`
`) &&
    y(!0);
  let b;
  t[2] === m
    ? (b = t[3])
    : ((b = m.formatMessage({
        id: `environmentSetup.variables.valuePlaceholder`,
        defaultMessage: `Value`,
        description: `Placeholder for a new cloud environment variable value`,
      })),
      (t[2] = m),
      (t[3] = b));
  let x = b;
  if (c) {
    let e;
    (t[4] !== h || t[5] !== m
      ? ((e = h
          ? m.formatMessage({
              id: `restricted.environmentSetup.variables.keepValue`,
              defaultMessage: `Leave blank to keep saved value`,
              description: `Placeholder explaining how to preserve a saved environment variable value while editing its key`,
            })
          : `••••••••`),
        (t[4] = h),
        (t[5] = m),
        (t[6] = e))
      : (e = t[6]),
      (x = e));
  } else if (p) {
    let e;
    (t[7] === m
      ? (e = t[8])
      : ((e = m.formatMessage({
          id: `environmentSetup.secret.optionalValue`,
          defaultMessage: `Your value (optional)`,
          description: `Placeholder for an optional personal secret value belonging to the signed-in user`,
        })),
        (t[7] = m),
        (t[8] = e)),
      (x = e));
  }
  let S;
  t[9] === o
    ? (S = t[10])
    : ((S = () => {
        (g(!0), o?.());
      }),
      (t[9] = o),
      (t[10] = S));
  let C;
  t[11] === s
    ? (C = t[12])
    : ((C = () => {
        (g(!1), s?.());
      }),
      (t[11] = s),
      (t[12] = C));
  let w;
  t[13] !== a ||
  t[14] !== i ||
  t[15] !== r ||
  t[16] !== n ||
  t[17] !== x ||
  t[18] !== S ||
  t[19] !== C ||
  t[20] !== u
    ? ((w = {
        id: n,
        "aria-label": r,
        "aria-invalid": i,
        "aria-describedby": a,
        autoComplete: `off`,
        spellCheck: !1,
        value: u,
        placeholder: x,
        onFocus: S,
        onBlur: C,
      }),
      (t[13] = a),
      (t[14] = i),
      (t[15] = r),
      (t[16] = n),
      (t[17] = x),
      (t[18] = S),
      (t[19] = C),
      (t[20] = u),
      (t[21] = w))
    : (w = t[21]);
  let T = w,
    E;
  return (
    t[22] !== h || t[23] !== v || t[24] !== d || t[25] !== T || t[26] !== f || t[27] !== u
      ? ((E = v
          ? (0, ar.jsx)(Qe, {
              ...T,
              autoFocus: h,
              rows: 3,
              variant: `segmented`,
              trailingControl: f,
              onChange: (e) => d(e.target.value),
            })
          : (0, ar.jsx)(_t, {
              ...T,
              variant: `segmented`,
              trailingControl: f,
              onChange: (e) => d(e.target.value),
              onPaste: (e) => {
                let t = e.clipboardData.getData(`text/plain`);
                if (
                  t.includes(`
`)
                ) {
                  e.preventDefault();
                  let n = e.currentTarget;
                  d(u.slice(0, n.selectionStart ?? 0) + t + u.slice(n.selectionEnd ?? u.length));
                }
              },
            })),
        (t[22] = h),
        (t[23] = v),
        (t[24] = d),
        (t[25] = T),
        (t[26] = f),
        (t[27] = u),
        (t[28] = E))
      : (E = t[28]),
    E
  );
}
var rr, ir, ar;
function or() {
  return (or = e(() => {
    ((rr = X()), (ir = Ue()), Y(), Ze(), (ar = ze()));
  }))();
}
function sr(e) {
  let t = (0, lr.c)(40),
    {
      id: r,
      value: i,
      personal: a,
      onChange: o,
      ariaLabel: s,
      invalid: c,
      describedBy: u,
      saved: d,
      scopeControl: f,
    } = e,
    p = a !== void 0 && a,
    m = d !== void 0 && d,
    h = ee(),
    g = (0, ur.useRef)(null),
    [_, v] = (0, ur.useState)(!1),
    [y, b] = (0, ur.useState)(!1),
    x;
  t[0] === h
    ? (x = t[1])
    : ((x = h.formatMessage({
        id: `environmentSetup.secret.valuePlaceholder`,
        defaultMessage: `Value`,
        description: `Placeholder for a new cloud network secret value`,
      })),
      (t[0] = h),
      (t[1] = x));
  let S = x;
  if (m) {
    let e;
    (t[2] !== y || t[3] !== h
      ? ((e = y
          ? h.formatMessage({
              id: `restricted.environmentSetup.secret.keepValue`,
              defaultMessage: `Leave blank to keep saved value`,
              description: `Placeholder explaining that a blank secret value preserves the existing credential`,
            })
          : `••••••••••••`),
        (t[2] = y),
        (t[3] = h),
        (t[4] = e))
      : (e = t[4]),
      (S = e));
  } else if (p) {
    let e;
    (t[5] === h
      ? (e = t[6])
      : ((e = h.formatMessage({
          id: `environmentSetup.secret.optionalValue`,
          defaultMessage: `Your value (optional)`,
          description: `Placeholder for an optional personal secret value belonging to the signed-in user`,
        })),
        (t[5] = h),
        (t[6] = e)),
      (S = e));
  }
  let C;
  t[7] !== h || t[8] !== _
    ? ((C = _
        ? h.formatMessage({
            id: `restricted.environmentSetup.configuration.secret.dialog.hide`,
            defaultMessage: `Hide secret value`,
            description: `Accessible label for hiding the currently revealed cloud environment secret value`,
          })
        : h.formatMessage({
            id: `restricted.environmentSetup.configuration.secret.dialog.reveal`,
            defaultMessage: `Reveal secret value`,
            description: `Accessible label for showing or hiding a private cloud environment secret value in its native dialog`,
          })),
      (t[7] = h),
      (t[8] = _),
      (t[9] = C))
    : (C = t[9]);
  let w = C,
    T = i.length === 0,
    E;
  t[10] === _
    ? (E = t[11])
    : ((E = () => {
        let e = g.current,
          t = e?.selectionStart ?? null,
          n = e?.selectionEnd ?? null;
        ((0, dr.flushSync)(() => v(!_)), e?.getBoundingClientRect(), e?.setSelectionRange(t, n));
      }),
      (t[10] = _),
      (t[11] = E));
  let D;
  t[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = (0, fr.jsx)(l, {})), (t[12] = D)) : (D = t[12]);
  let O;
  t[13] !== r || t[14] !== T || t[15] !== E || t[16] !== w
    ? ((O = (0, fr.jsx)(n, {
        "aria-label": w,
        "aria-controls": r,
        color: `ghost`,
        disabled: T,
        size: `inputIcon`,
        onMouseDown: cr,
        onClick: E,
        children: D,
      })),
      (t[13] = r),
      (t[14] = T),
      (t[15] = E),
      (t[16] = w),
      (t[17] = O))
    : (O = t[17]);
  let k;
  t[18] !== O || t[19] !== w
    ? ((k = (0, fr.jsx)(Me, { cloneCustomTrigger: !0, tooltipContent: w, children: O })),
      (t[18] = O),
      (t[19] = w),
      (t[20] = k))
    : (k = t[20]);
  let A = k,
    j;
  t[21] !== s || t[22] !== h
    ? ((j =
        s ??
        h.formatMessage({
          id: `restricted.environmentSetup.input.secret.value`,
          defaultMessage: `Secret value`,
          description: `Accessible label for a cloud environment secret value`,
        })),
      (t[21] = s),
      (t[22] = h),
      (t[23] = j))
    : (j = t[23]);
  let M = _ ? `text` : `password`,
    N = f == null ? `default` : `segmented`,
    P = f == null ? void 0 : A,
    F = f ?? A,
    I,
    L;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => b(!0)), (L = () => b(!1)), (t[24] = I), (t[25] = L))
    : ((I = t[24]), (L = t[25]));
  let R;
  t[26] === o ? (R = t[27]) : ((R = (e) => o(e.target.value)), (t[26] = o), (t[27] = R));
  let z;
  return (
    t[28] !== u ||
    t[29] !== r ||
    t[30] !== c ||
    t[31] !== S ||
    t[32] !== j ||
    t[33] !== M ||
    t[34] !== N ||
    t[35] !== P ||
    t[36] !== F ||
    t[37] !== R ||
    t[38] !== i
      ? ((z = (0, fr.jsx)(_t, {
          id: r,
          ref: g,
          "aria-invalid": c,
          "aria-describedby": u,
          "data-environment-invalid": c,
          "aria-label": j,
          autoComplete: `new-password`,
          placeholder: S,
          type: M,
          value: i,
          variant: N,
          trailingInlineControl: P,
          trailingControl: F,
          onFocus: I,
          onBlur: L,
          onChange: R,
        })),
        (t[28] = u),
        (t[29] = r),
        (t[30] = c),
        (t[31] = S),
        (t[32] = j),
        (t[33] = M),
        (t[34] = N),
        (t[35] = P),
        (t[36] = F),
        (t[37] = R),
        (t[38] = i),
        (t[39] = z))
      : (z = t[39]),
    z
  );
}
function cr(e) {
  return e.preventDefault();
}
var lr, ur, dr, fr;
function pr() {
  return (pr = e(() => {
    ((lr = X()), (ur = Ue()), (dr = Ve()), Y(), Ne(), R(), Ze(), le(), (fr = ze()));
  }))();
}
function mr(e) {
  let t = (0, hr.c)(26),
    {
      id: r,
      configuration: i,
      namespace: a,
      name: o,
      value: s,
      saved: c,
      ariaLabel: l,
      invalid: u,
      describedBy: d,
      onChange: f,
      scopeControl: p,
    } = e,
    m = c !== void 0 && c,
    h;
  t[0] !== i || t[1] !== a
    ? ((h = { configuration: i, namespace: a }), (t[0] = i), (t[1] = a), (t[2] = h))
    : (h = t[2]);
  let { data: _, isError: v, refetch: y } = Ge(qe, h),
    b;
  t[3] !== i || t[4] !== _ || t[5] !== o
    ? ((b = _ == null || i == null ? void 0 : Lt(_, o, i.configId)),
      (t[3] = i),
      (t[4] = _),
      (t[5] = o),
      (t[6] = b))
    : (b = t[6]);
  let x = b,
    S = m || (x != null && x !== `ambiguous`),
    C;
  s.length === 0 && !S && (x === `ambiguous` ? (C = _r.ambiguous) : v && (C = _r.unavailable));
  let w;
  t[7] !== l ||
  t[8] !== d ||
  t[9] !== S ||
  t[10] !== r ||
  t[11] !== u ||
  t[12] !== a ||
  t[13] !== f ||
  t[14] !== p ||
  t[15] !== s
    ? ((w =
        a === `sensitive`
          ? (0, gr.jsx)(sr, {
              id: r,
              value: s,
              personal: !0,
              saved: S,
              ariaLabel: l,
              invalid: u,
              describedBy: d,
              onChange: f,
              scopeControl: p,
            })
          : (0, gr.jsx)(nr, {
              id: r,
              value: s,
              optional: !0,
              hasSavedValue: S,
              ariaLabel: l,
              ariaInvalid: u,
              ariaDescribedBy: d,
              onChange: f,
              scopeControl: p,
            })),
      (t[7] = l),
      (t[8] = d),
      (t[9] = S),
      (t[10] = r),
      (t[11] = u),
      (t[12] = a),
      (t[13] = f),
      (t[14] = p),
      (t[15] = s),
      (t[16] = w))
    : (w = t[16]);
  let T;
  t[17] === C
    ? (T = t[18])
    : ((T =
        C == null
          ? null
          : (0, gr.jsx)(`div`, {
              className: `text-xs text-secondary select-none`,
              role: `status`,
              children: (0, gr.jsx)(g, { ...C }),
            })),
      (t[17] = C),
      (t[18] = T));
  let E;
  t[19] !== v || t[20] !== y
    ? ((E = v
        ? (0, gr.jsx)(n, {
            color: `ghost`,
            size: `compact`,
            onClick: () => void y(),
            children: (0, gr.jsx)(g, { ..._r.retry }),
          })
        : null),
      (t[19] = v),
      (t[20] = y),
      (t[21] = E))
    : (E = t[21]);
  let D;
  return (
    t[22] !== w || t[23] !== T || t[24] !== E
      ? ((D = (0, gr.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-1`, children: [w, T, E] })),
        (t[22] = w),
        (t[23] = T),
        (t[24] = E),
        (t[25] = D))
      : (D = t[25]),
    D
  );
}
var hr, gr, _r;
function vr() {
  return (vr = e(() => {
    ((hr = X()),
      M(),
      Y(),
      Ne(),
      or(),
      dt(),
      pr(),
      (gr = ze()),
      (_r = a({
        unavailable: {
          id: `environmentSetup.review.secret.unavailable`,
          defaultMessage: `Saved value status unavailable`,
          description: `Personal vault metadata could not be loaded; this does not mean a value is missing`,
        },
        ambiguous: {
          id: `environmentSetup.review.secret.ambiguous`,
          defaultMessage: `Multiple personal values match`,
          description: `Warning that runtime cannot choose between matching personal credentials`,
        },
        retry: {
          id: `environmentSetup.review.secret.retry`,
          defaultMessage: `Retry checking personal values`,
          description: `Retry loading personal vault metadata after a failed read`,
        },
      })));
  }))();
}
function yr(e) {
  let t = (0, Sr.c)(56),
    {
      name: r,
      value: i,
      otherDomainCount: a,
      disabled: o,
      readOnly: s,
      invalid: l,
      describedBy: u,
      onChange: d,
    } = e,
    f = ee(),
    p = (0, Cr.useId)(),
    [h, _] = (0, Cr.useState)(null);
  o && h != null && _(null);
  let v;
  t[0] === i ? (v = t[1]) : ((v = i.split(`,`).map(xr).filter(br)), (t[0] = i), (t[1] = v));
  let y = v,
    b;
  t[2] !== h || t[3] !== a
    ? ((b =
        h != null &&
        h.domains.length > 0 &&
        !h.input.trim() &&
        h.domains.every(
          (e, t) => bt(e, h.domains.slice(0, t), { allowWildcards: !1, otherDomainCount: a }) == null,
        )),
      (t[2] = h),
      (t[3] = a),
      (t[4] = b))
    : (b = t[4]);
  let x = b,
    S = h != null && !o,
    C;
  t[5] !== o || t[6] !== y
    ? ((C = (e) => {
        _(e && !o ? { domains: y, input: `` } : null);
      }),
      (t[5] = o),
      (t[6] = y),
      (t[7] = C))
    : (C = t[7]);
  let w;
  t[8] !== f || t[9] !== r
    ? ((w = f.formatMessage(
        {
          id: `environmentSetup.review.secret.domainsForSecret`,
          defaultMessage: `Allowed domains for {name}`,
          description: `Accessible label for editing the allowed destinations of a named proxy secret`,
        },
        { name: r },
      )),
      (t[8] = f),
      (t[9] = r),
      (t[10] = w))
    : (w = t[10]);
  let T;
  t[11] === y.length
    ? (T = t[12])
    : ((T = (0, wr.jsx)(g, {
        id: `environmentSetup.review.secret.domainCount`,
        defaultMessage: `{count, plural, =0 {No domains} one {# domain} other {# domains}}`,
        description: `Number of allowed destinations for a proxy secret`,
        values: { count: y.length },
      })),
      (t[11] = y.length),
      (t[12] = T));
  let E;
  t[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((E = (0, wr.jsx)(k, {})), (t[13] = E)) : (E = t[13]);
  let D;
  t[14] !== u || t[15] !== o || t[16] !== l || t[17] !== w || t[18] !== T
    ? ((D = (0, wr.jsx)(m, {
        asChild: !0,
        children: (0, wr.jsxs)(n, {
          className: `w-full justify-between`,
          "aria-label": w,
          "aria-invalid": l,
          "aria-describedby": u,
          "data-environment-invalid": l,
          color: `outline`,
          size: `inputControl`,
          disabled: o,
          children: [T, E],
        }),
      })),
      (t[14] = u),
      (t[15] = o),
      (t[16] = l),
      (t[17] = w),
      (t[18] = T),
      (t[19] = D))
    : (D = t[19]);
  let O;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, wr.jsx)(g, {
        id: `environmentSetup.review.secret.domains`,
        defaultMessage: `Allowed domains`,
        description: `Title and input label for allowed HTTPS destinations for a proxy secret`,
      })),
      (t[20] = O))
    : (O = t[20]);
  let A;
  t[21] === p ? (A = t[22]) : ((A = (0, wr.jsx)(U, { id: p, children: O })), (t[21] = p), (t[22] = A));
  let j;
  t[23] !== o || t[24] !== h || t[25] !== a || t[26] !== s
    ? ((j =
        h != null &&
        (0, wr.jsx)(Pn, {
          purpose: `secret`,
          disabled: o,
          readOnly: s,
          showErrors: !0,
          domains: h.domains,
          value: h.input,
          otherDomainCount: a,
          onChange: (e) => _({ ...h, domains: e }),
          onInputChange: (e) => _((t) => (t == null ? null : { ...t, input: e })),
        })),
      (t[23] = o),
      (t[24] = h),
      (t[25] = a),
      (t[26] = s),
      (t[27] = j))
    : (j = t[27]);
  let M;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, wr.jsx)(`p`, {
        className: `text-secondary`,
        children: (0, wr.jsx)(g, {
          id: `environmentSetup.review.secret.domainsHelp`,
          defaultMessage: `Add at least one exact hostname that can receive this secret`,
          description: `Explains that proxy secrets require at least one exact destination hostname before saving`,
        }),
      })),
      (t[28] = M))
    : (M = t[28]);
  let N;
  t[29] === s
    ? (N = t[30])
    : ((N =
        !s &&
        (0, wr.jsx)(n, {
          color: `secondary`,
          size: `compact`,
          onClick: () => _(null),
          children: (0, wr.jsx)(g, {
            id: `environmentSetup.secret.domainsCancel`,
            defaultMessage: `Cancel`,
            description: `Discard unconfirmed changes to a secret's allowed destinations and close the popover`,
          }),
        })),
      (t[29] = s),
      (t[30] = N));
  let F = !s && !x,
    I;
  t[31] !== x || t[32] !== o || t[33] !== h || t[34] !== d || t[35] !== s
    ? ((I = () => {
        (!s && !o && x && h != null && d(h.domains.join(`, `)), _(null));
      }),
      (t[31] = x),
      (t[32] = o),
      (t[33] = h),
      (t[34] = d),
      (t[35] = s),
      (t[36] = I))
    : (I = t[36]);
  let L;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, wr.jsx)(g, {
        id: `environmentSetup.secret.domainsDone`,
        defaultMessage: `Done`,
        description: `Close the domain picker after editing a secret's allowed hostnames`,
      })),
      (t[37] = L))
    : (L = t[37]);
  let R;
  t[38] !== F || t[39] !== I
    ? ((R = (0, wr.jsx)(n, { color: `primary`, size: `compact`, disabled: F, onClick: I, children: L })),
      (t[38] = F),
      (t[39] = I),
      (t[40] = R))
    : (R = t[40]);
  let z;
  t[41] !== N || t[42] !== R
    ? ((z = (0, wr.jsxs)(`div`, { className: `flex justify-end gap-2`, children: [N, R] })),
      (t[41] = N),
      (t[42] = R),
      (t[43] = z))
    : (z = t[43]);
  let B;
  t[44] !== A || t[45] !== j || t[46] !== z
    ? ((B = (0, wr.jsxs)(`div`, { className: `flex flex-col gap-3 p-2 text-sm`, children: [A, j, M, z] })),
      (t[44] = A),
      (t[45] = j),
      (t[46] = z),
      (t[47] = B))
    : (B = t[47]);
  let V;
  t[48] !== B || t[49] !== p
    ? ((V = (0, wr.jsx)(c, { size: `large`, variant: `menu`, "aria-labelledby": p, children: B })),
      (t[48] = B),
      (t[49] = p),
      (t[50] = V))
    : (V = t[50]);
  let H;
  return (
    t[51] !== V || t[52] !== S || t[53] !== C || t[54] !== D
      ? ((H = (0, wr.jsxs)(P, { open: S, onOpenChange: C, children: [D, V] })),
        (t[51] = V),
        (t[52] = S),
        (t[53] = C),
        (t[54] = D),
        (t[55] = H))
      : (H = t[55]),
    H
  );
}
function br(e) {
  return e.length > 0;
}
function xr(e) {
  return e.trim();
}
var Sr, Cr, wr;
function Tr() {
  return (Tr = e(() => {
    ((Sr = X()), (Cr = Ue()), Y(), Ne(), R(), B(), Bn(), Ct(), (wr = ze()));
  }))();
}
function Er(e) {
  let t = (0, Dr.c)(38),
    { name: r, source: i, disabled: a, attached: o, onChange: s } = e,
    c = o !== void 0 && o,
    l = ee(),
    d = c ? `ghostActive` : `outline`,
    f = c ? `inputSelect` : `settingsSelect`,
    p;
  t[0] !== l || t[1] !== r
    ? ((p = l.formatMessage(
        {
          id: `environmentSetup.review.secret.scope`,
          defaultMessage: `Scope for {name}`,
          description: `Accessible label for choosing Environment or Personal scope for a named secret`,
        },
        { name: r },
      )),
      (t[0] = l),
      (t[1] = r),
      (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] === i
    ? (m = t[4])
    : ((m =
        i === `user_provided`
          ? (0, Or.jsx)(g, {
              id: `environmentSetup.review.secret.personal`,
              defaultMessage: `Personal`,
              description: `Secret scope whose value belongs to the signed-in user`,
            })
          : (0, Or.jsx)(g, {
              id: `environmentSetup.review.secret.environment`,
              defaultMessage: `Environment`,
              description: `Secret scope shared by users of the environment`,
            })),
      (t[3] = i),
      (t[4] = m));
  let h;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = (0, Or.jsx)(k, {})), (t[5] = h)) : (h = t[5]);
  let _;
  t[6] !== a || t[7] !== d || t[8] !== f || t[9] !== p || t[10] !== m
    ? ((_ = (0, Or.jsxs)(n, {
        className: `w-36 justify-between`,
        color: d,
        size: f,
        disabled: a,
        "aria-label": p,
        children: [m, h],
      })),
      (t[6] = a),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Or.jsx)(z.SectionLabel, {
        children: (0, Or.jsx)(g, {
          id: `environmentSetup.secret.typeOfKey`,
          defaultMessage: `Type of key`,
          description: `Heading for choosing Environment or Personal scope for a secret value`,
        }),
      })),
      (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Or.jsx)(O, { asset: I, className: `shrink-0` })), (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] !== s || t[15] !== i
    ? ((b = () => i !== `environment` && s(`environment`)), (t[14] = s), (t[15] = i), (t[16] = b))
    : (b = t[16]);
  let x, S;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Or.jsx)(g, {
        id: `environmentSetup.review.secret.environmentHelp`,
        defaultMessage: `All users of this environment can use this value`,
        description: `Explanation of Environment secret scope`,
      })),
      (S = (0, Or.jsx)(g, {
        id: `environmentSetup.review.secret.environment`,
        defaultMessage: `Environment`,
        description: `Secret scope shared by users of the environment`,
      })),
      (t[17] = x),
      (t[18] = S))
    : ((x = t[17]), (S = t[18]));
  let C;
  t[19] !== a || t[20] !== b
    ? ((C = (0, Or.jsx)(z.RadioItem, {
        variant: `descriptive`,
        disabled: a,
        icon: y,
        value: `environment`,
        onSelect: b,
        SubText: x,
        children: S,
      })),
      (t[19] = a),
      (t[20] = b),
      (t[21] = C))
    : (C = t[21]);
  let w;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Or.jsx)(O, { asset: D, className: `shrink-0` })), (t[22] = w))
    : (w = t[22]);
  let T;
  t[23] !== s || t[24] !== i
    ? ((T = () => i !== `user_provided` && s(`user_provided`)), (t[23] = s), (t[24] = i), (t[25] = T))
    : (T = t[25]);
  let E, A;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Or.jsx)(g, {
        id: `environmentSetup.review.secret.personalHelp`,
        defaultMessage: `Each user can add their own key`,
        description: `Explanation of Personal scope; adding a value is optional`,
      })),
      (A = (0, Or.jsx)(g, {
        id: `environmentSetup.review.secret.personal`,
        defaultMessage: `Personal`,
        description: `Secret scope whose value belongs to the signed-in user`,
      })),
      (t[26] = E),
      (t[27] = A))
    : ((E = t[26]), (A = t[27]));
  let j;
  t[28] !== a || t[29] !== T
    ? ((j = (0, Or.jsx)(z.RadioItem, {
        variant: `descriptive`,
        disabled: a,
        icon: w,
        value: `user_provided`,
        onSelect: T,
        SubText: E,
        children: A,
      })),
      (t[28] = a),
      (t[29] = T),
      (t[30] = j))
    : (j = t[30]);
  let M;
  t[31] !== i || t[32] !== C || t[33] !== j
    ? ((M = (0, Or.jsxs)(z.RadioGroup, { value: i, children: [C, j] })),
      (t[31] = i),
      (t[32] = C),
      (t[33] = j),
      (t[34] = M))
    : (M = t[34]);
  let N;
  return (
    t[35] !== M || t[36] !== _
      ? ((N = (0, Or.jsxs)(u, { contentWidth: `panel`, triggerButton: _, children: [v, M] })),
        (t[35] = M),
        (t[36] = _),
        (t[37] = N))
      : (N = t[37]),
    N
  );
}
var Dr, Or;
function kr() {
  return (kr = e(() => {
    ((Dr = X()), C(), ve(), Y(), Ne(), s(), A(), R(), (Or = ze()));
  }))();
}
function Ar(e) {
  let t = (0, jr.c)(91),
    {
      keyInputRef: r,
      secret: i,
      secrets: a,
      issues: o,
      configuration: s,
      onChange: c,
      onDelete: l,
      readOnly: u,
      disabled: d,
    } = e,
    f = u !== void 0 && u,
    p = d !== void 0 && d,
    m = ee(),
    h = (0, Mr.useId)(),
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E;
  if (
    t[0] !== s ||
    t[1] !== p ||
    t[2] !== h ||
    t[3] !== m ||
    t[4] !== o ||
    t[5] !== r ||
    t[6] !== c ||
    t[7] !== f ||
    t[8] !== i
  ) {
    let e = qt(i);
    E =
      i.injectionTarget ??
      (`environment_variable` in e
        ? {
            type: `environment_variable`,
            name: e.environment_variable,
            domain: e.allowed_domains?.join(`, `) ?? ``,
          }
        : {
            type: `http_header`,
            name: e.http_header.header_name,
            domain: e.http_header.allowed_domains.join(`, `),
          });
    let n;
    if (t[20] !== o || t[21] !== i.id) {
      let e;
      (t[23] === i.id
        ? (e = t[24])
        : ((e = (e) => {
            let { field: t } = e;
            return t === `secret-${i.id}-key`;
          }),
          (t[23] = i.id),
          (t[24] = e)),
        (n = o.find(e)),
        (t[20] = o),
        (t[21] = i.id),
        (t[22] = n));
    } else n = t[22];
    let a = n,
      l;
    if (t[25] !== o || t[26] !== i.id) {
      let e;
      (t[28] === i.id
        ? (e = t[29])
        : ((e = (e) => {
            let { field: t } = e;
            return t === `secret-${i.id}-value`;
          }),
          (t[28] = i.id),
          (t[29] = e)),
        (l = o.find(e)),
        (t[25] = o),
        (t[26] = i.id),
        (t[27] = l));
    } else l = t[27];
    let u = l,
      d;
    if (t[30] !== o || t[31] !== i.id) {
      let e;
      (t[33] === i.id
        ? (e = t[34])
        : ((e = (e) => {
            let { field: t } = e;
            return t === `secret-${i.id}-domains`;
          }),
          (t[33] = i.id),
          (t[34] = e)),
        (d = o.find(e)),
        (t[30] = o),
        (t[31] = i.id),
        (t[32] = d));
    } else d = t[32];
    g = d;
    let D;
    (t[35] !== m || t[36] !== i.source
      ? ((D =
          i.source === `user_provided`
            ? m.formatMessage({
                id: `restricted.environmentSetup.secret.removeRequirement`,
                defaultMessage: `Remove requirement`,
                description: `Button to remove a user-provided requirement from the environment without deleting a saved personal credential`,
              })
            : m.formatMessage({
                id: `restricted.environmentSetup.input.secret.delete`,
                defaultMessage: `Delete secret`,
                description: `Accessible label for removing an environment secret`,
              })),
        (t[35] = m),
        (t[36] = i.source),
        (t[37] = D))
      : (D = t[37]),
      (_ = D));
    let O;
    t[38] !== c || t[39] !== i
      ? ((O = (e) =>
          c({
            ...i,
            source: e,
            optional: e === `user_provided`,
            value: ``,
            serverId: void 0,
            personalSecret: void 0,
            isMissing: e === `environment`,
          })),
        (t[38] = c),
        (t[39] = i),
        (t[40] = O))
      : (O = t[40]);
    let k = (0, Nr.jsx)(Er, {
      attached: !0,
      name: E.name,
      source: i.source ?? `environment`,
      disabled: p || f,
      onChange: O,
    });
    ((w = `flex min-w-0 flex-col gap-2`),
      (T = E.name || i.name),
      (v = `group`),
      (C = `flex min-w-0 items-start gap-2`),
      (x = `flex min-w-0 flex-1 flex-wrap items-start gap-2`));
    let A;
    t[41] === m
      ? (A = t[42])
      : ((A = m.formatMessage({
          id: `restricted.environmentSetup.input.secret.name.placeholder`,
          defaultMessage: `Key`,
          description: `Placeholder for a cloud environment secret key`,
        })),
        (t[41] = m),
        (t[42] = A));
    let j;
    (t[43] === m
      ? (j = t[44])
      : ((j = m.formatMessage({
          id: `restricted.environmentSetup.input.secret.key`,
          defaultMessage: `Secret key`,
          description: `Accessible label for the environment variable key used by a cloud environment proxy secret`,
        })),
        (t[43] = m),
        (t[44] = j)),
      (S = (0, Nr.jsx)(`div`, {
        className: `min-w-0 flex-1 basis-32`,
        children: (0, Nr.jsx)(_t, {
          ref: r,
          placeholder: A,
          "aria-label": j,
          "aria-invalid": a != null,
          "aria-describedby": a == null ? void 0 : `${h}-key`,
          "data-environment-invalid": a != null,
          autoComplete: `off`,
          maxLength: 128,
          readOnly: f,
          value: E.name,
          variant: `segmented`,
          onChange: (e) =>
            c({
              ...i,
              name: e.target.value,
              personalSecret: void 0,
              target: void 0,
              injectionTarget: { ...E, name: e.target.value },
            }),
        }),
      })),
      (y = `min-w-0 flex-2 basis-64`),
      (b =
        i.source === `user_provided`
          ? (0, Nr.jsx)(
              mr,
              {
                id: `${h}-value-input`,
                scopeControl: k,
                ariaLabel: m.formatMessage(
                  {
                    id: `restricted.environmentSetup.batchSecrets.value`,
                    defaultMessage: `Value for {name}`,
                    description: `Accessible name of a secret value input in the batch editor`,
                  },
                  { name: E.name },
                ),
                value: i.value,
                configuration: s,
                namespace: `sensitive`,
                name: E.name,
                saved: i.personalSecret != null,
                invalid: u != null,
                describedBy: u == null ? void 0 : `${h}-value`,
                onChange: (e) => c({ ...i, value: e }),
              },
              i.source,
            )
          : (0, Nr.jsx)(
              sr,
              {
                id: `${h}-value-input`,
                scopeControl: k,
                ariaLabel: m.formatMessage(
                  {
                    id: `restricted.environmentSetup.batchSecrets.value`,
                    defaultMessage: `Value for {name}`,
                    description: `Accessible name of a secret value input in the batch editor`,
                  },
                  { name: E.name },
                ),
                value: i.value,
                saved: i.serverId != null && !i.isMissing,
                invalid: u != null,
                describedBy: u == null ? void 0 : `${h}-value`,
                onChange: (e) => c({ ...i, value: e }),
              },
              i.source,
            )),
      (t[0] = s),
      (t[1] = p),
      (t[2] = h),
      (t[3] = m),
      (t[4] = o),
      (t[5] = r),
      (t[6] = c),
      (t[7] = f),
      (t[8] = i),
      (t[9] = g),
      (t[10] = _),
      (t[11] = v),
      (t[12] = y),
      (t[13] = b),
      (t[14] = x),
      (t[15] = S),
      (t[16] = C),
      (t[17] = w),
      (t[18] = T),
      (t[19] = E));
  } else
    ((g = t[9]),
      (_ = t[10]),
      (v = t[11]),
      (y = t[12]),
      (b = t[13]),
      (x = t[14]),
      (S = t[15]),
      (C = t[16]),
      (w = t[17]),
      (T = t[18]),
      (E = t[19]));
  let D;
  t[45] !== y || t[46] !== b
    ? ((D = (0, Nr.jsx)(`div`, { className: y, children: b })), (t[45] = y), (t[46] = b), (t[47] = D))
    : (D = t[47]);
  let O = E.name,
    k = E.domain ?? ``,
    A;
  if (t[48] !== i.id || t[49] !== a) {
    let e;
    (t[51] === i.id
      ? (e = t[52])
      : ((e = (e, t) => {
          if (t.id === i.id) return e;
          let n = qt(t);
          return e + (`environment_variable` in n ? (n.allowed_domains?.length ?? 0) : 0);
        }),
        (t[51] = i.id),
        (t[52] = e)),
      (A = a.reduce(e, 0)),
      (t[48] = i.id),
      (t[49] = a),
      (t[50] = A));
  } else A = t[50];
  let j = f && (E.type !== `environment_variable` || !i.requested),
    M = g != null,
    N = g == null ? void 0 : `${h}-domains`,
    P;
  t[53] !== c || t[54] !== i || t[55] !== E
    ? ((P = (e) => c({ ...i, target: void 0, injectionTarget: { ...E, domain: e } })),
      (t[53] = c),
      (t[54] = i),
      (t[55] = E),
      (t[56] = P))
    : (P = t[56]);
  let F;
  t[57] !== p ||
  t[58] !== k ||
  t[59] !== A ||
  t[60] !== j ||
  t[61] !== M ||
  t[62] !== N ||
  t[63] !== P ||
  t[64] !== E.name
    ? ((F = (0, Nr.jsx)(`div`, {
        className: `w-36 shrink-0`,
        children: (0, Nr.jsx)(yr, {
          name: O,
          value: k,
          otherDomainCount: A,
          disabled: p,
          readOnly: j,
          invalid: M,
          describedBy: N,
          onChange: P,
        }),
      })),
      (t[57] = p),
      (t[58] = k),
      (t[59] = A),
      (t[60] = j),
      (t[61] = M),
      (t[62] = N),
      (t[63] = P),
      (t[64] = E.name),
      (t[65] = F))
    : (F = t[65]);
  let I;
  t[66] !== D || t[67] !== F || t[68] !== x || t[69] !== S
    ? ((I = (0, Nr.jsxs)(`div`, { className: x, children: [S, D, F] })),
      (t[66] = D),
      (t[67] = F),
      (t[68] = x),
      (t[69] = S),
      (t[70] = I))
    : (I = t[70]);
  let L;
  t[71] === Symbol.for(`react.memo_cache_sentinel`) ? ((L = (0, Nr.jsx)(ke, {})), (t[71] = L)) : (L = t[71]);
  let R;
  t[72] !== l || t[73] !== _
    ? ((R = (0, Nr.jsx)(n, { "aria-label": _, color: `ghost`, size: `icon`, onClick: l, children: L })),
      (t[72] = l),
      (t[73] = _),
      (t[74] = R))
    : (R = t[74]);
  let z;
  t[75] !== _ || t[76] !== R
    ? ((z = (0, Nr.jsx)(`div`, {
        className: `flex h-10 w-8 shrink-0 items-center justify-center`,
        children: (0, Nr.jsx)(Me, { tooltipContent: _, cloneCustomTrigger: !0, children: R }),
      })),
      (t[75] = _),
      (t[76] = R),
      (t[77] = z))
    : (z = t[77]);
  let B;
  t[78] !== I || t[79] !== z || t[80] !== C
    ? ((B = (0, Nr.jsxs)(`div`, { className: C, children: [I, z] })),
      (t[78] = I),
      (t[79] = z),
      (t[80] = C),
      (t[81] = B))
    : (B = t[81]);
  let V;
  t[82] !== h || t[83] !== o
    ? ((V =
        o.length > 0
          ? (0, Nr.jsx)(`div`, {
              className: `flex flex-col gap-2`,
              children: o.map((e) =>
                (0, Nr.jsx)(Cn, { id: `${h}-${e.field?.split(`-`).at(-1)}`, issue: e }, e.field),
              ),
            })
          : null),
      (t[82] = h),
      (t[83] = o),
      (t[84] = V))
    : (V = t[84]);
  let H;
  return (
    t[85] !== v || t[86] !== B || t[87] !== V || t[88] !== w || t[89] !== T
      ? ((H = (0, Nr.jsxs)(`div`, { className: w, "aria-label": T, role: v, children: [B, V] })),
        (t[85] = v),
        (t[86] = B),
        (t[87] = V),
        (t[88] = w),
        (t[89] = T),
        (t[90] = H))
      : (H = t[90]),
    H
  );
}
var jr, Mr, Nr;
function Pr() {
  return (Pr = e(() => {
    ((jr = X()),
      Rt(),
      (Mr = Ue()),
      Y(),
      Ne(),
      R(),
      Ze(),
      le(),
      vt(),
      vr(),
      Nn(),
      pr(),
      Tr(),
      kr(),
      (Nr = ze()));
  }))();
}
function Fr(e, t, n = [], r = []) {
  let i = e.trim(),
    a = /^[A-Za-z_][A-Za-z0-9_]*$/.test(i);
  if (a && (r.includes(i) || n.includes(i))) return { ok: !1, reason: `duplicate`, line: 1 };
  let o = (a ? `${i}=` : e).split(/\r?\n/),
    s = new Map();
  for (let e = 0; e < o.length; e++) {
    let r = o[e].trim(),
      i = e + 1;
    if (r === `` || r.startsWith(`#`) || r.startsWith(`;`)) continue;
    let a = /^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=(.*)$/.exec(r);
    if (a == null || a[1].length > t) return { ok: !1, reason: `malformed`, line: i };
    let c = a[1];
    if (s.has(c) || n.includes(c)) return { ok: !1, reason: `duplicate`, line: i };
    let l = a[2].trim(),
      u = l[0];
    if (u === `"` || u === `'`) {
      let t = 1;
      for (; ; t++) {
        if (t >= l.length) {
          if (++e >= o.length) return { ok: !1, reason: `malformed`, line: i };
          l += `\n${o[e]}`;
        }
        if (l[t] === `\\` && u === `"`) t++;
        else if (l[t] === u) break;
      }
      let n = l.slice(t + 1).trim();
      if (n !== `` && !n.startsWith(`#`)) return { ok: !1, reason: `malformed`, line: i };
      l = l.slice(1, t);
    } else l = l.replace(/\s+#.*$/, ``).trim();
    s.set(c, l);
  }
  return { ok: !0, entries: s };
}
function Ir(e, t) {
  let n = Fr(
    t,
    128,
    e.filter((t, n) => e.some((e, r) => n !== r && e.name === t.name)).map(({ name: e }) => e),
    e.map(({ name: e }) => e),
  );
  if (!n.ok) return n;
  let { entries: r } = n,
    i = Math.max(-1, ...e.map(({ id: e }) => e)) + 1,
    a = e.map((e) => {
      let t = r.get(e.name);
      return (r.delete(e.name), t === void 0 ? e : { ...e, value: t });
    });
  for (let [e, t] of r)
    a.push({
      id: i++,
      name: e,
      value: t,
      source: `environment`,
      injectionTarget: { type: `environment_variable`, name: e },
    });
  return a.length > 20 ? { ok: !1, reason: `limit`, line: 0 } : { ok: !0, secrets: a };
}
function Lr() {
  return (Lr = e(() => {
    Rt();
  }))();
}
function Rr(e) {
  let t = (0, Br.c)(80),
    { hasConflict: r, initialSecrets: i, requireValues: a, configuration: o, onClose: s, onLocalSave: c } = e,
    l = a === void 0 || a,
    u = o === void 0 ? null : o,
    d;
  t[0] === i
    ? (d = t[1])
    : ((d = () => (i.length > 0 ? i : [{ id: 0, name: ``, value: ``, source: `environment` }])),
      (t[0] = i),
      (t[1] = d));
  let [f, p] = (0, Vr.useState)(d),
    [m, h] = (0, Vr.useState)(null),
    _;
  t[2] === f ? (_ = t[3]) : ((_ = Math.max(-1, ...f.map(zr))), (t[2] = f), (t[3] = _));
  let v = (0, Vr.useRef)(_ + 1),
    [y, b] = (0, Vr.useState)(!1),
    [x, S] = (0, Vr.useState)(!1),
    C,
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    I,
    L;
  if (
    t[4] !== u ||
    t[5] !== r ||
    t[6] !== y ||
    t[7] !== i ||
    t[8] !== m ||
    t[9] !== s ||
    t[10] !== c ||
    t[11] !== l ||
    t[12] !== f ||
    t[13] !== x
  ) {
    let e;
    (t[29] === i
      ? (e = t[30])
      : ((e = (e) =>
          i.some((t) => {
            let { id: n } = t;
            return n === e.id;
          }) ||
          e.name.length > 0 ||
          e.value.length > 0 ||
          (e.injectionTarget?.domain?.length ?? 0) > 0 ||
          e.source === `user_provided`),
        (t[29] = i),
        (t[30] = e)),
      (E = f.filter(e)));
    let n;
    t[31] !== l || t[32] !== f
      ? ((n = (e) =>
          Xe(
            e,
            f.some((t) => t.id !== e.id && t.name === e.name),
            l,
          )),
        (t[31] = l),
        (t[32] = f),
        (t[33] = n))
      : (n = t[33]);
    let a = E.flatMap(n),
      o;
    t[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, Ur.jsx)(g, {
          id: `restricted.environmentSetup.batchSecrets.title`,
          defaultMessage: `Manage secrets`,
          description: `Title of the cloud environment batch secret editor`,
        })),
        (t[34] = o))
      : (o = t[34]);
    let d = o;
    ((T = be),
      (A = !0),
      (j = `xxwide`),
      t[35] === s
        ? (M = t[36])
        : ((M = (e) => {
            e || s();
          }),
          (t[35] = s),
          (t[36] = M)),
      (w = Se),
      (F = `form`),
      (I = !0),
      (L = `max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-hidden`),
      (D = (e) => {
        (e.preventDefault(),
          e.stopPropagation(),
          (0, Hr.flushSync)(() => S(!0)),
          tt(e.currentTarget),
          !r && !y && a.length === 0 && (c(E), s()));
      }),
      t[37] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((O = (0, Ur.jsx)(re, { className: `sr-only`, children: d })), (t[37] = O))
        : (O = t[37]),
      t[38] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((k = (0, Ur.jsx)(ye, { className: `shrink-0`, children: (0, Ur.jsx)(ce, { title: d }) })),
          (t[38] = k))
        : (k = t[38]),
      (C = ye),
      (N = `min-h-0 gap-4 overflow-y-auto`),
      (P =
        f.length > 0
          ? (0, Ur.jsx)(`div`, {
              className: `flex flex-col gap-3`,
              children: f.map((e) =>
                (0, Ur.jsx)(
                  Ar,
                  {
                    keyInputRef: m?.id === e.id ? m.ref : void 0,
                    configuration: u,
                    secret: e,
                    secrets: f,
                    readOnly: e.requested || e.injectionTarget?.type === `http_header`,
                    issues: x
                      ? a.filter((t) => {
                          let { field: n } = t;
                          return n?.startsWith(`secret-${e.id}-`);
                        })
                      : [],
                    onChange: (e) => p(f.map((t) => (t.id === e.id ? e : t))),
                    onDelete: () =>
                      p(
                        f.filter((t) => {
                          let { id: n } = t;
                          return n !== e.id;
                        }),
                      ),
                  },
                  e.id,
                ),
              ),
            })
          : null),
      (t[4] = u),
      (t[5] = r),
      (t[6] = y),
      (t[7] = i),
      (t[8] = m),
      (t[9] = s),
      (t[10] = c),
      (t[11] = l),
      (t[12] = f),
      (t[13] = x),
      (t[14] = C),
      (t[15] = w),
      (t[16] = T),
      (t[17] = E),
      (t[18] = D),
      (t[19] = O),
      (t[20] = k),
      (t[21] = A),
      (t[22] = j),
      (t[23] = M),
      (t[24] = N),
      (t[25] = P),
      (t[26] = F),
      (t[27] = I),
      (t[28] = L));
  } else
    ((C = t[14]),
      (w = t[15]),
      (T = t[16]),
      (E = t[17]),
      (D = t[18]),
      (O = t[19]),
      (k = t[20]),
      (A = t[21]),
      (j = t[22]),
      (M = t[23]),
      (N = t[24]),
      (P = t[25]),
      (F = t[26]),
      (I = t[27]),
      (L = t[28]));
  let R;
  t[39] === E
    ? (R = t[40])
    : ((R = (e, t) => {
        v.current += 1;
        let n = v.current;
        (p([
          ...E,
          {
            id: n,
            name: e,
            value: ``,
            source: `environment`,
            injectionTarget: { type: `environment_variable`, name: e },
          },
        ]),
          h({ id: n, ref: t }));
      }),
      (t[39] = E),
      (t[40] = R));
  let z;
  t[41] === E
    ? (z = t[42])
    : ((z = (e) => {
        let t = Ir(E, e);
        return (
          t.ok &&
            (h(null),
            p(t.secrets.map((e, t) => (t < E.length ? e : ((v.current += 1), { ...e, id: v.current }))))),
          t
        );
      }),
      (t[41] = E),
      (t[42] = z));
  let B;
  t[43] !== E.length || t[44] !== R || t[45] !== z
    ? ((B = (0, Ur.jsx)(Zn, {
        limit: 20,
        entryCount: E.length,
        onAddKey: R,
        onPendingChange: b,
        onImport: z,
      })),
      (t[43] = E.length),
      (t[44] = R),
      (t[45] = z),
      (t[46] = B))
    : (B = t[46]);
  let V;
  t[47] === r ? (V = t[48]) : ((V = r ? (0, Ur.jsx)(qn, {}) : null), (t[47] = r), (t[48] = V));
  let H;
  t[49] !== C || t[50] !== B || t[51] !== V || t[52] !== N || t[53] !== P
    ? ((H = (0, Ur.jsxs)(C, { className: N, children: [P, B, V] })),
      (t[49] = C),
      (t[50] = B),
      (t[51] = V),
      (t[52] = N),
      (t[53] = P),
      (t[54] = H))
    : (H = t[54]);
  let ee;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, Ur.jsx)(g, {
        id: `restricted.environmentSetup.batchSecrets.cancel`,
        defaultMessage: `Cancel`,
        description: `Discards unsaved batch secret edits and closes the modal`,
      })),
      (t[55] = ee))
    : (ee = t[55]);
  let U;
  t[56] === s
    ? (U = t[57])
    : ((U = (0, Ur.jsx)(n, { className: `me-auto`, color: `secondary`, onClick: s, children: ee })),
      (t[56] = s),
      (t[57] = U));
  let W = r || y,
    G;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Ur.jsx)(g, {
        id: `restricted.environmentSetup.batchSecrets.save`,
        defaultMessage: `Save`,
        description: `Stages edited cloud environment secrets until the environment panel is saved`,
      })),
      (t[58] = G))
    : (G = t[58]);
  let K;
  t[59] === W
    ? (K = t[60])
    : ((K = (0, Ur.jsx)(n, { color: `primary`, disabled: W, type: `submit`, children: G })),
      (t[59] = W),
      (t[60] = K));
  let te;
  t[61] !== U || t[62] !== K
    ? ((te = (0, Ur.jsx)(ye, { className: `shrink-0`, children: (0, Ur.jsxs)(je, { children: [U, K] }) })),
      (t[61] = U),
      (t[62] = K),
      (t[63] = te))
    : (te = t[63]);
  let q;
  t[64] !== w ||
  t[65] !== D ||
  t[66] !== O ||
  t[67] !== k ||
  t[68] !== H ||
  t[69] !== te ||
  t[70] !== F ||
  t[71] !== I ||
  t[72] !== L
    ? ((q = (0, Ur.jsxs)(w, { as: F, noValidate: I, className: L, onSubmit: D, children: [O, k, H, te] })),
      (t[64] = w),
      (t[65] = D),
      (t[66] = O),
      (t[67] = k),
      (t[68] = H),
      (t[69] = te),
      (t[70] = F),
      (t[71] = I),
      (t[72] = L),
      (t[73] = q))
    : (q = t[73]);
  let ne;
  return (
    t[74] !== T || t[75] !== A || t[76] !== j || t[77] !== M || t[78] !== q
      ? ((ne = (0, Ur.jsx)(T, { open: A, size: j, onOpenChange: M, children: q })),
        (t[74] = T),
        (t[75] = A),
        (t[76] = j),
        (t[77] = M),
        (t[78] = q),
        (t[79] = ne))
      : (ne = t[79]),
    ne
  );
}
function zr(e) {
  let { id: t } = e;
  return t;
}
var Br, Vr, Hr, Ur;
function Wr() {
  return (Wr = e(() => {
    ((Br = X()),
      Rt(),
      (Vr = Ue()),
      (Hr = Ve()),
      Y(),
      Ne(),
      Le(),
      de(),
      Xn(),
      tr(),
      lt(),
      Xt(),
      Pr(),
      Lr(),
      (Ur = ze()));
  }))();
}
var Gr;
function Kr() {
  return (Kr = e(() => {
    (Y(),
      (Gr = a({
        variables: {
          id: `restricted.environmentSetup.changes.variables`,
          defaultMessage: `Environment variables`,
          description: `Changed environment-owned runtime variable names or values in the change summary`,
        },
        tcpAccess: {
          id: `environmentSetup.changes.tcpAccess`,
          defaultMessage: `TCP access`,
          description: `Changed TCP destination grants in the environment change summary`,
        },
        connections: {
          id: `restricted.environmentSetup.changes.connections`,
          defaultMessage: `Outbound identity connections`,
          description: `Changed outbound identity connection attachments or aliases in the environment change summary`,
        },
        name: {
          id: `restricted.environmentSetup.changes.name`,
          defaultMessage: `Environment name`,
          description: `Changed environment name in the change summary`,
        },
        scripts: {
          id: `restricted.environmentSetup.changes.scripts`,
          defaultMessage: `Scripts`,
          description: `Changed install script or start skill in the environment change summary`,
        },
        network: {
          id: `restricted.environmentSetup.changes.network`,
          defaultMessage: `Internet access`,
          description: `Changed internet access policy in the environment change summary`,
        },
        repositories: {
          id: `restricted.environmentSetup.changes.repositories`,
          defaultMessage: `Repositories`,
          description: `Changed repositories in the environment change summary`,
        },
        secrets: {
          id: `restricted.environmentSetup.changes.secrets`,
          defaultMessage: `Secrets`,
          description: `Changed secret requirements or values in the environment change summary`,
        },
        privacy: {
          id: `restricted.environmentSetup.changes.privacy`,
          defaultMessage: `Privacy`,
          description: `Changed sharing settings in the environment change summary`,
        },
      })));
  }))();
}
function qr(e) {
  let t = (0, Jr.c)(13),
    { children: n, reason: r, label: i, className: a } = e,
    o = r ?? ``,
    s = r != null && void 0,
    c;
  t[0] === a
    ? (c = t[1])
    : ((c = me(
        `inline-flex rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
        a,
      )),
      (t[0] = a),
      (t[1] = c));
  let l = r != null || void 0,
    u = r == null ? void 0 : i,
    d = r == null ? void 0 : `group`,
    f = r == null ? void 0 : 0,
    p;
  t[2] !== n || t[3] !== c || t[4] !== l || t[5] !== u || t[6] !== d || t[7] !== f
    ? ((p = (0, Yr.jsx)(`div`, {
        className: c,
        "aria-disabled": l,
        "aria-label": u,
        role: d,
        tabIndex: f,
        children: n,
      })),
      (t[2] = n),
      (t[3] = c),
      (t[4] = l),
      (t[5] = u),
      (t[6] = d),
      (t[7] = f),
      (t[8] = p))
    : (p = t[8]);
  let m;
  return (
    t[9] !== o || t[10] !== s || t[11] !== p
      ? ((m = (0, Yr.jsx)(Me, { color: `inverse`, tooltipContent: o, open: s, children: p })),
        (t[9] = o),
        (t[10] = s),
        (t[11] = p),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
var Jr, Yr;
function Xr() {
  return (Xr = e(() => {
    ((Jr = X()), J(), le(), (Yr = ze()));
  }))();
}
function Zr(e, t) {
  return (
    e?.id !== t?.id ||
    e?.version_id !== t?.version_id ||
    e?.draft?.id !== t?.draft?.id ||
    e?.draft?.revision !== t?.draft?.revision
  );
}
function Qr(e, t, n) {
  let r = Fr(
    t,
    256,
    [...n, ...e.filter((t, n) => e.some((e, r) => n !== r && e.name === t.name)).map(({ name: e }) => e)],
    e.map(({ name: e }) => e),
  );
  if (!r.ok) return r;
  let { entries: i } = r,
    a = e.map((e) => {
      let t = i.get(e.name);
      return (i.delete(e.name), t === void 0 ? e : { ...e, value: t });
    });
  for (let [e, t] of i) a.push({ name: e, value: t, optional: !1 });
  return a.length > 256 ? { ok: !1, reason: `limit`, line: 0 } : { ok: !0, variables: a };
}
function $r() {
  return ($r = e(() => {}))();
}
function ei(e) {
  let t = (0, ti.c)(54),
    {
      keyInputRef: r,
      variable: i,
      keyError: a,
      valueError: o,
      configuration: s,
      disabled: c,
      onChange: l,
      onDelete: u,
    } = e,
    d = c !== void 0 && c,
    f = ee(),
    p = (0, ni.useId)(),
    m = i.source ?? `environment`,
    h;
  t[0] !== l || t[1] !== i
    ? ((h = (e) =>
        l({
          ...i,
          source: e,
          optional: e === `user_provided`,
          value: ``,
          serverId: void 0,
          personalSecret: void 0,
          error: void 0,
        })),
      (t[0] = l),
      (t[1] = i),
      (t[2] = h))
    : (h = t[2]);
  let g;
  t[3] !== d || t[4] !== m || t[5] !== h || t[6] !== i.name
    ? ((g = (0, ri.jsx)(Er, { attached: !0, disabled: d, name: i.name, source: m, onChange: h })),
      (t[3] = d),
      (t[4] = m),
      (t[5] = h),
      (t[6] = i.name),
      (t[7] = g))
    : (g = t[7]);
  let _ = g,
    v = i.name,
    y;
  t[8] === f
    ? (y = t[9])
    : ((y = f.formatMessage({
        id: `environmentSetup.variables.editor.namePlaceholder`,
        defaultMessage: `Key`,
        description: `Placeholder for a new cloud environment variable name`,
      })),
      (t[8] = f),
      (t[9] = y));
  let b;
  t[10] === f
    ? (b = t[11])
    : ((b = f.formatMessage({
        id: `environmentSetup.variables.editor.nameInput`,
        defaultMessage: `Variable key`,
        description: `Accessible label for an editable environment variable name`,
      })),
      (t[10] = f),
      (t[11] = b));
  let x = a != null,
    S = a == null ? void 0 : `${p}-key`,
    C;
  t[12] !== l || t[13] !== i
    ? ((C = (e) => l({ ...i, name: e.target.value, personalSecret: void 0 })),
      (t[12] = l),
      (t[13] = i),
      (t[14] = C))
    : (C = t[14]);
  let w;
  t[15] !== r || t[16] !== C || t[17] !== y || t[18] !== b || t[19] !== x || t[20] !== S || t[21] !== i.name
    ? ((w = (0, ri.jsx)(`div`, {
        className: `min-w-0 flex-1 basis-32`,
        children: (0, ri.jsx)(_t, {
          ref: r,
          variant: `segmented`,
          placeholder: y,
          "aria-label": b,
          "aria-invalid": x,
          "aria-describedby": S,
          autoComplete: `off`,
          maxLength: 256,
          value: i.name,
          onChange: C,
        }),
      })),
      (t[15] = r),
      (t[16] = C),
      (t[17] = y),
      (t[18] = b),
      (t[19] = x),
      (t[20] = S),
      (t[21] = i.name),
      (t[22] = w))
    : (w = t[22]);
  let T;
  t[23] !== s || t[24] !== p || t[25] !== f || t[26] !== l || t[27] !== _ || t[28] !== o || t[29] !== i
    ? ((T = (0, ri.jsx)(`div`, {
        className: `min-w-0 flex-2 basis-64`,
        children:
          i.source === `user_provided`
            ? (0, ri.jsx)(mr, {
                id: `${p}-value-input`,
                scopeControl: _,
                ariaLabel: f.formatMessage(
                  {
                    id: `restricted.environmentSetup.variables.batch.value`,
                    defaultMessage: `Value for {name}`,
                    description: `Accessible name of an environment variable value input in the batch editor`,
                  },
                  { name: i.name },
                ),
                saved: i.personalSecret != null,
                configuration: s,
                namespace: `not_sensitive`,
                name: i.name,
                value: i.value,
                invalid: o != null,
                describedBy: o == null ? void 0 : `${p}-value`,
                onChange: (e) => l({ ...i, value: e }),
              })
            : (0, ri.jsx)(nr, {
                id: `${p}-value-input`,
                scopeControl: _,
                ariaLabel: f.formatMessage(
                  {
                    id: `restricted.environmentSetup.variables.batch.value`,
                    defaultMessage: `Value for {name}`,
                    description: `Accessible name of an environment variable value input in the batch editor`,
                  },
                  { name: i.name },
                ),
                hasSavedValue: i.serverId != null,
                value: i.value,
                ariaInvalid: o != null,
                ariaDescribedBy: o == null ? void 0 : `${p}-value`,
                onChange: (e) => l({ ...i, value: e }),
              }),
      })),
      (t[23] = s),
      (t[24] = p),
      (t[25] = f),
      (t[26] = l),
      (t[27] = _),
      (t[28] = o),
      (t[29] = i),
      (t[30] = T))
    : (T = t[30]);
  let E;
  t[31] !== w || t[32] !== T
    ? ((E = (0, ri.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-wrap items-start gap-2`,
        children: [w, T],
      })),
      (t[31] = w),
      (t[32] = T),
      (t[33] = E))
    : (E = t[33]);
  let D;
  t[34] === f
    ? (D = t[35])
    : ((D = f.formatMessage({
        id: `restricted.environmentSetup.variables.delete`,
        defaultMessage: `Delete variable`,
        description: `Button to remove the variable from this environment`,
      })),
      (t[34] = f),
      (t[35] = D));
  let O;
  t[36] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = (0, ri.jsx)(ke, {})), (t[36] = O)) : (O = t[36]);
  let k;
  t[37] !== u || t[38] !== D
    ? ((k = (0, ri.jsx)(`div`, {
        className: `flex h-10 w-8 shrink-0 items-center justify-center`,
        children: (0, ri.jsx)(n, { "aria-label": D, color: `ghost`, size: `icon`, onClick: u, children: O }),
      })),
      (t[37] = u),
      (t[38] = D),
      (t[39] = k))
    : (k = t[39]);
  let A;
  t[40] !== E || t[41] !== k
    ? ((A = (0, ri.jsxs)(`div`, { className: `flex min-w-0 items-start gap-2`, children: [E, k] })),
      (t[40] = E),
      (t[41] = k),
      (t[42] = A))
    : (A = t[42]);
  let j;
  t[43] !== p || t[44] !== a
    ? ((j =
        a == null
          ? null
          : (0, ri.jsx)(`p`, {
              id: `${p}-key`,
              className: `text-sm text-danger`,
              role: `alert`,
              children: (0, ri.jsx)(hn, { error: a }),
            })),
      (t[43] = p),
      (t[44] = a),
      (t[45] = j))
    : (j = t[45]);
  let M;
  t[46] !== p || t[47] !== o
    ? ((M =
        o == null
          ? null
          : (0, ri.jsx)(`p`, {
              id: `${p}-value`,
              className: `text-sm text-danger`,
              role: `alert`,
              children: (0, ri.jsx)(hn, { error: o }),
            })),
      (t[46] = p),
      (t[47] = o),
      (t[48] = M))
    : (M = t[48]);
  let N;
  return (
    t[49] !== A || t[50] !== j || t[51] !== M || t[52] !== i.name
      ? ((N = (0, ri.jsxs)(`div`, {
          className: `flex min-w-0 flex-col gap-2`,
          "aria-label": v,
          role: `group`,
          children: [A, j, M],
        })),
        (t[49] = A),
        (t[50] = j),
        (t[51] = M),
        (t[52] = i.name),
        (t[53] = N))
      : (N = t[53]),
    N
  );
}
var ti, ni, ri;
function ii() {
  return (ii = e(() => {
    ((ti = X()), (ni = Ue()), Y(), Ne(), R(), Ze(), vr(), kr(), gn(), or(), (ri = ze()));
  }))();
}
function ai(e) {
  let t = (0, pi.c)(85),
    { initialVariables: r, unavailableNames: i, hasConflict: a, configuration: o, onClose: s, onSave: c } = e,
    l = a !== void 0 && a,
    u = o === void 0 ? null : o,
    d;
  t[0] === r
    ? (d = t[1])
    : ((d = () => (r.length > 0 ? r.map(fi) : [{ id: 0, variable: { name: ``, value: ``, optional: !1 } }])),
      (t[0] = r),
      (t[1] = d));
  let [f, p] = (0, mi.useState)(d),
    [m, h] = (0, mi.useState)(null),
    [_, v] = (0, mi.useState)(!1),
    [y, b] = (0, mi.useState)(!1),
    x = (0, mi.useRef)(null),
    S = (0, mi.useRef)(0),
    C = (0, mi.useRef)(0),
    [w, T] = (0, mi.useState)(!1),
    [E, D] = (0, mi.useState)(!1),
    [O, k] = (0, mi.useState)(null),
    A,
    j,
    M,
    N;
  if (t[2] !== r || t[3] !== f || t[4] !== i) {
    let e;
    (t[9] === r.length
      ? (e = t[10])
      : ((e = (e) => {
          let { id: t, variable: n } = e;
          return t < r.length || n.name.length > 0 || n.value.length > 0 || n.source === `user_provided`;
        }),
        (t[9] = r.length),
        (t[10] = e)),
      (A = f.filter(e)),
      (N = A.map(di)));
    let n;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, hi.jsx)(g, {
          id: `restricted.environmentSetup.variables.batch.title`,
          defaultMessage: `Manage environment variables`,
          description: `Title of the batch environment variable editor`,
        })),
        (t[11] = n))
      : (n = t[11]),
      (M = n),
      (j = new Map(
        A.map((e, t) => {
          let { id: n, variable: a } = e;
          return [
            n,
            {
              key: Qt(a.name, [...i, ...N.filter((e, n) => n !== t).map(ui)]),
              value: r.includes(a) ? null : Ye(a.value, a.serverId != null, a.source === `user_provided`),
            },
          ];
        }),
      )),
      (t[2] = r),
      (t[3] = f),
      (t[4] = i),
      (t[5] = A),
      (t[6] = j),
      (t[7] = M),
      (t[8] = N));
  } else ((A = t[5]), (j = t[6]), (M = t[7]), (N = t[8]));
  let P = j,
    F;
  t[12] === l
    ? (F = t[13])
    : ((F = function (e) {
        xt(e.dataTransfer) &&
          (e.preventDefault(),
          e.stopPropagation(),
          (e.dataTransfer.dropEffect = l ? `none` : `copy`),
          e.type === `dragenter` && (S.current += 1),
          T(!l));
      }),
      (t[12] = l),
      (t[13] = F));
  let I = F,
    L;
  t[14] === l
    ? (L = t[15])
    : ((L = async function (e) {
        if (!xt(e.dataTransfer)) return;
        (e.preventDefault(), e.stopPropagation(), (S.current = 0), T(!1));
        let t = (C.current += 1);
        if ((D(!1), l)) return;
        let n = Et(e.dataTransfer);
        if (n.length !== 1 || n[0].isDirectory || !/^(?:\.env(?:\..+)?|.+\.env)$/i.test(n[0].file.name)) {
          k(`unsupported`);
          return;
        }
        let r = e.currentTarget;
        (k(null), D(!0));
        let i = await n[0].file.text().catch(li);
        if (r.isConnected && C.current === t) {
          if ((D(!1), i == null)) {
            k(`read`);
            return;
          }
          x.current?.importText(i);
        }
      }),
      (t[14] = l),
      (t[15] = L));
  let R = L,
    z;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (e) => {
        xt(e.dataTransfer) &&
          (e.stopPropagation(),
          (S.current = Math.max(0, S.current - 1)),
          (S.current === 0 ||
            (e.relatedTarget instanceof Node && !e.currentTarget.contains(e.relatedTarget))) &&
            ((S.current = 0), T(!1)));
      }),
      (t[16] = z))
    : (z = t[16]);
  let B;
  t[17] === R ? (B = t[18]) : ((B = (e) => void R(e)), (t[17] = R), (t[18] = B));
  let V;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = () => {
        ((S.current = 0), T(!1));
      }),
      (t[19] = V))
    : (V = t[19]);
  let H;
  t[20] !== I || t[21] !== B
    ? ((H = { onDragEnter: I, onDragOver: I, onDragLeave: z, onDrop: B, onDragEnd: V }),
      (t[20] = I),
      (t[21] = B),
      (t[22] = H))
    : (H = t[22]);
  let ee;
  t[23] === s
    ? (ee = t[24])
    : ((ee = (e) => {
        e || s();
      }),
      (t[23] = s),
      (t[24] = ee));
  let U;
  t[25] !== P || t[26] !== l || t[27] !== _ || t[28] !== E || t[29] !== c || t[30] !== N
    ? ((U = (e) => {
        (e.preventDefault(), e.stopPropagation(), b(!0), !l && !E && !_ && [...P.values()].every(ci) && c(N));
      }),
      (t[25] = P),
      (t[26] = l),
      (t[27] = _),
      (t[28] = E),
      (t[29] = c),
      (t[30] = N),
      (t[31] = U))
    : (U = t[31]);
  let W;
  t[32] === M
    ? (W = t[33])
    : ((W = (0, hi.jsx)(re, { className: `sr-only`, children: M })), (t[32] = M), (t[33] = W));
  let G;
  t[34] === M
    ? (G = t[35])
    : ((G = (0, hi.jsx)(ye, { className: `shrink-0`, children: (0, hi.jsx)(ce, { title: M }) })),
      (t[34] = M),
      (t[35] = G));
  let K;
  t[36] !== u || t[37] !== P || t[38] !== m || t[39] !== f || t[40] !== y
    ? ((K =
        f.length > 0
          ? (0, hi.jsx)(`div`, {
              className: `flex flex-col gap-3`,
              children: f.map((e) => {
                let { id: t, variable: n } = e;
                return (0, hi.jsx)(
                  ei,
                  {
                    keyInputRef: m?.id === t ? m.ref : void 0,
                    configuration: u,
                    variable: n,
                    keyError: y ? (P.get(t)?.key ?? null) : null,
                    valueError: y ? (P.get(t)?.value ?? null) : null,
                    onChange: (e) => p(f.map((n) => (n.id === t ? { id: t, variable: e } : n))),
                    onDelete: () => p(f.filter((e) => e.id !== t)),
                  },
                  t,
                );
              }),
            })
          : null),
      (t[36] = u),
      (t[37] = P),
      (t[38] = m),
      (t[39] = f),
      (t[40] = y),
      (t[41] = K))
    : (K = t[41]);
  let te;
  t[42] !== A || t[43] !== f
    ? ((te = (e, t) => {
        let n = Math.max(-1, ...f.map(si)) + 1;
        (p([...A, { id: n, variable: { name: e, value: ``, optional: !1 } }]), h({ id: n, ref: t }));
      }),
      (t[42] = A),
      (t[43] = f),
      (t[44] = te))
    : (te = t[44]);
  let q;
  t[45] !== A || t[46] !== f || t[47] !== i || t[48] !== N
    ? ((q = (e) => {
        k(null);
        let t = Qr(N, e, i);
        if (t.ok) {
          h(null);
          let e = Math.max(-1, ...f.map(oi)) + 1;
          p(t.variables.map((t, n) => ({ id: A[n]?.id ?? e + n, variable: t })));
        }
        return t;
      }),
      (t[45] = A),
      (t[46] = f),
      (t[47] = i),
      (t[48] = N),
      (t[49] = q))
    : (q = t[49]);
  let ne;
  t[50] !== A.length || t[51] !== te || t[52] !== q
    ? ((ne = (0, hi.jsx)(Zn, {
        ref: x,
        limit: 256,
        entryCount: A.length,
        onAddKey: te,
        onPendingChange: v,
        onImport: q,
      })),
      (t[50] = A.length),
      (t[51] = te),
      (t[52] = q),
      (t[53] = ne))
    : (ne = t[53]);
  let J;
  t[54] === O
    ? (J = t[55])
    : ((J =
        O == null
          ? null
          : (0, hi.jsx)(`p`, {
              className: `text-sm text-danger`,
              role: `alert`,
              children:
                O === `unsupported`
                  ? (0, hi.jsx)(g, {
                      id: `environmentSetup.variables.fileDrop.unsupported`,
                      defaultMessage: `Drop one .env file at a time`,
                      description: `Error when the environment variable editor receives multiple files, a folder, or a file that is not a dotenv file`,
                    })
                  : (0, hi.jsx)(g, {
                      id: `environmentSetup.variables.fileDrop.readFailed`,
                      defaultMessage: `Could not read this file. Try again or paste its contents`,
                      description: `Error when a dropped environment variable file cannot be read`,
                    }),
            })),
      (t[54] = O),
      (t[55] = J));
  let ie;
  t[56] === l ? (ie = t[57]) : ((ie = l ? (0, hi.jsx)(qn, {}) : null), (t[56] = l), (t[57] = ie));
  let ae;
  t[58] !== K || t[59] !== ne || t[60] !== J || t[61] !== ie
    ? ((ae = (0, hi.jsxs)(ye, { className: `min-h-0 gap-4 overflow-y-auto`, children: [K, ne, J, ie] })),
      (t[58] = K),
      (t[59] = ne),
      (t[60] = J),
      (t[61] = ie),
      (t[62] = ae))
    : (ae = t[62]);
  let oe;
  t[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, hi.jsx)(g, {
        id: `restricted.environmentSetup.variables.batch.cancel`,
        defaultMessage: `Cancel`,
        description: `Discards unsaved batch environment variable edits`,
      })),
      (t[63] = oe))
    : (oe = t[63]);
  let se;
  t[64] === s
    ? (se = t[65])
    : ((se = (0, hi.jsx)(n, { className: `me-auto`, color: `secondary`, onClick: s, children: oe })),
      (t[64] = s),
      (t[65] = se));
  let le = l || _ || E,
    ue;
  t[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, hi.jsx)(g, {
        id: `restricted.environmentSetup.variables.save`,
        defaultMessage: `Save`,
        description: `Button to apply edits to an environment variable`,
      })),
      (t[66] = ue))
    : (ue = t[66]);
  let de;
  t[67] === le
    ? (de = t[68])
    : ((de = (0, hi.jsx)(n, { color: `primary`, disabled: le, type: `submit`, children: ue })),
      (t[67] = le),
      (t[68] = de));
  let fe;
  t[69] !== se || t[70] !== de
    ? ((fe = (0, hi.jsx)(ye, { className: `shrink-0`, children: (0, hi.jsxs)(je, { children: [se, de] }) })),
      (t[69] = se),
      (t[70] = de),
      (t[71] = fe))
    : (fe = t[71]);
  let pe;
  t[72] !== U || t[73] !== W || t[74] !== G || t[75] !== ae || t[76] !== fe
    ? ((pe = (0, hi.jsxs)(Se, {
        as: `form`,
        noValidate: !0,
        className: `max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-hidden`,
        onSubmit: U,
        children: [W, G, ae, fe],
      })),
      (t[72] = U),
      (t[73] = W),
      (t[74] = G),
      (t[75] = ae),
      (t[76] = fe),
      (t[77] = pe))
    : (pe = t[77]);
  let me;
  t[78] === w
    ? (me = t[79])
    : ((me = w
        ? (0, hi.jsx)(Pt, {
            tone: `neutral`,
            inert: !0,
            children: (0, hi.jsx)(g, {
              id: `environmentSetup.variables.fileDrop.prompt`,
              defaultMessage: `Drop .env to import variables`,
              description: `Overlay shown while dragging a file over the environment variable editor; .env is a file extension`,
            }),
          })
        : null),
      (t[78] = w),
      (t[79] = me));
  let he;
  return (
    t[80] !== H || t[81] !== ee || t[82] !== pe || t[83] !== me
      ? ((he = (0, hi.jsxs)(be, {
          open: !0,
          size: `xxwide`,
          contentProps: H,
          onOpenChange: ee,
          children: [pe, me],
        })),
        (t[80] = H),
        (t[81] = ee),
        (t[82] = pe),
        (t[83] = me),
        (t[84] = he))
      : (he = t[84]),
    he
  );
}
function oi(e) {
  let { id: t } = e;
  return t;
}
function si(e) {
  return e.id;
}
function ci(e) {
  let { key: t, value: n } = e;
  return t == null && n == null;
}
function li() {
  return null;
}
function ui(e) {
  let { name: t } = e;
  return t;
}
function di(e) {
  let { variable: t } = e;
  return t;
}
function fi(e, t) {
  return { id: t, variable: e };
}
var pi, mi, hi;
function gi() {
  return (gi = e(() => {
    ((pi = X()),
      (mi = Ue()),
      Y(),
      st(),
      Ne(),
      Mt(),
      Le(),
      de(),
      mt(),
      Xn(),
      tr(),
      $r(),
      ii(),
      St(),
      (hi = ze()));
  }))();
}
function _i(e) {
  let t = (0, bi.c)(34),
    {
      config: n,
      configuration: r,
      variables: i,
      issues: a,
      unavailableNames: o,
      isReadOnly: s,
      readOnlyTooltip: c,
      onChange: l,
      showHeading: u,
    } = e,
    d = u === void 0 || u,
    f = ee(),
    [p, m] = (0, xi.useState)(null);
  s && p != null && m(null);
  let h;
  t[0] === f
    ? (h = t[1])
    : ((h = f.formatMessage({
        id: `environmentSetup.variables.manageLabel`,
        defaultMessage: `Manage environment variables`,
        description: `Accessible label for opening the editor to add, edit, import, or remove environment variables`,
      })),
      (t[0] = f),
      (t[1] = h));
  let _ = s ? c : null,
    v;
  t[2] !== n || t[3] !== i
    ? ((v = () => m({ config: n, variables: i })), (t[2] = n), (t[3] = i), (t[4] = v))
    : (v = t[4]);
  let b;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Si.jsx)(g, {
        id: `environmentSetup.variables.manage`,
        defaultMessage: `Manage`,
        description: `Button to open the editor for adding, editing, importing, and removing environment variables`,
      })),
      (t[5] = b))
    : (b = t[5]);
  let x;
  t[6] !== s || t[7] !== h || t[8] !== _ || t[9] !== v
    ? ((x = (0, Si.jsx)(vn, {
        "aria-label": h,
        color: `secondary`,
        disabled: s,
        tooltipContent: _,
        size: `settingsAction`,
        onClick: v,
        children: b,
      })),
      (t[6] = s),
      (t[7] = h),
      (t[8] = _),
      (t[9] = v),
      (t[10] = x))
    : (x = t[10]);
  let S;
  t[11] === d
    ? (S = t[12])
    : ((S = d
        ? (0, Si.jsx)(g, {
            id: `restricted.environmentSetup.variables.title`,
            defaultMessage: `Environment variables`,
            description: `Heading for values passed directly to programs in a cloud environment`,
          })
        : null),
      (t[11] = d),
      (t[12] = S));
  let C;
  t[13] !== x || t[14] !== S
    ? ((C = (0, Si.jsx)(yt.Header, { actions: x, size: `base`, spacing: `compact`, title: S })),
      (t[13] = x),
      (t[14] = S),
      (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] !== n || t[17] !== s || t[18] !== a || t[19] !== c || t[20] !== i
    ? ((w =
        i.length === 0
          ? (0, Si.jsx)(Fe, {
              variant: `featured`,
              size: `compact`,
              control: null,
              icon: (0, Si.jsx)(y, { className: `text-secondary` }),
              label: (0, Si.jsx)(g, {
                id: `restricted.environmentSetup.variables.empty`,
                defaultMessage: `No environment variables added`,
                description: `Empty state for environment-owned runtime variables`,
              }),
            })
          : i.map((e) =>
              (0, Si.jsx)(
                yi,
                {
                  variable: e,
                  issue: a.find((t) => {
                    let { field: n } = t;
                    return n === `variable-${e.name}`;
                  }),
                  isReadOnly: s,
                  readOnlyTooltip: c,
                  onEdit: () => m({ config: n, variables: i }),
                },
                e.name,
              ),
            )),
      (t[16] = n),
      (t[17] = s),
      (t[18] = a),
      (t[19] = c),
      (t[20] = i),
      (t[21] = w))
    : (w = t[21]);
  let T;
  t[22] === w
    ? (T = t[23])
    : ((T = (0, Si.jsx)(yt.Content, { children: (0, Si.jsx)(Te, { children: w }) })),
      (t[22] = w),
      (t[23] = T));
  let E;
  t[24] !== n || t[25] !== r || t[26] !== p || t[27] !== l || t[28] !== o
    ? ((E =
        p == null
          ? null
          : (0, Si.jsx)(ai, {
              configuration: r,
              initialVariables: p.variables,
              unavailableNames: o,
              hasConflict: Zr(n, p.config),
              onClose: () => m(null),
              onSave: (e) => {
                (l(
                  e,
                  p.variables
                    .filter((t) => {
                      let { name: n } = t;
                      return !e.some((e) => e.name === n);
                    })
                    .map(vi),
                ),
                  m(null));
              },
            })),
      (t[24] = n),
      (t[25] = r),
      (t[26] = p),
      (t[27] = l),
      (t[28] = o),
      (t[29] = E))
    : (E = t[29]);
  let D;
  return (
    t[30] !== T || t[31] !== E || t[32] !== C
      ? ((D = (0, Si.jsxs)(`section`, {
          className: `flex flex-col`,
          "data-environment-section": `variables`,
          children: [C, T, E],
        })),
        (t[30] = T),
        (t[31] = E),
        (t[32] = C),
        (t[33] = D))
      : (D = t[33]),
    D
  );
}
function vi(e) {
  let { name: t } = e;
  return t;
}
function yi(e) {
  let t = (0, bi.c)(28),
    { variable: n, issue: r, isReadOnly: i, readOnlyTooltip: a, onEdit: o } = e,
    s = ee(),
    c = W(nt),
    l = W(wt),
    u = n.serverId ?? ``,
    d;
  t[0] !== c || t[1] !== u || t[2] !== l
    ? ((d = { accountId: c, userId: l, id: u }), (t[0] = c), (t[1] = u), (t[2] = l), (t[3] = d))
    : (d = t[3]);
  let f = Ge(it, d),
    p = n.source !== `user_provided` && n.serverId == null && !n.value && !f && n.error == null,
    m;
  t[4] !== p || t[5] !== f || t[6] !== n.error || t[7] !== n.source || t[8] !== n.value
    ? ((m = (0, Si.jsx)(`span`, { "aria-hidden": `true`, children: `••••••••` })),
      n.source === `user_provided`
        ? (m = (0, Si.jsx)(g, {
            id: `restricted.environmentSetup.variables.source.userProvided`,
            defaultMessage: `User-provided`,
            description: `A cloud environment variable supplied by the executing user`,
          }))
        : !n.value && !f && n.error != null
          ? (m = (0, Si.jsx)(g, {
              id: `restricted.environmentSetup.variables.unavailable`,
              defaultMessage: `Unavailable`,
              description: `An environment variable whose stored value the server could not resolve`,
            }))
          : p &&
            (m = (0, Si.jsx)(g, {
              id: `restricted.environmentSetup.variables.missing`,
              defaultMessage: `Missing`,
              description: `Status for a required environment variable whose value has not been supplied`,
            })),
      (t[4] = p),
      (t[5] = f),
      (t[6] = n.error),
      (t[7] = n.source),
      (t[8] = n.value),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = (0, Si.jsx)(y, {})), (t[10] = h)) : (h = t[10]);
  let _;
  t[11] === n.name
    ? (_ = t[12])
    : ((_ = (0, Si.jsx)(`span`, { className: `block truncate`, children: n.name })),
      (t[11] = n.name),
      (t[12] = _));
  let v;
  t[13] === r
    ? (v = t[14])
    : ((v = r == null ? void 0 : (0, Si.jsx)(Cn, { issue: r })), (t[13] = r), (t[14] = v));
  let b;
  t[15] !== s ||
  t[16] !== p ||
  t[17] !== i ||
  t[18] !== r ||
  t[19] !== o ||
  t[20] !== a ||
  t[21] !== m ||
  t[22] !== n.name
    ? ((b = (e) =>
        (0, Si.jsxs)(Si.Fragment, {
          children: [
            (0, Si.jsx)(`span`, {
              className: me(`text-base select-none`, p ? `text-danger` : `text-secondary`),
              children: m,
            }),
            (0, Si.jsx)(vn, {
              "aria-describedby": e[`aria-describedby`],
              "data-environment-invalid": r != null,
              "aria-label": s.formatMessage(
                {
                  id: `restricted.environmentSetup.variables.edit`,
                  defaultMessage: `Edit {name}`,
                  description: `Accessible label for editing the named environment variable`,
                },
                { name: n.name },
              ),
              color: `ghost`,
              disabled: i,
              tooltipContent: i ? a : null,
              size: `icon`,
              onClick: o,
              children: (0, Si.jsx)(he, {}),
            }),
          ],
        })),
      (t[15] = s),
      (t[16] = p),
      (t[17] = i),
      (t[18] = r),
      (t[19] = o),
      (t[20] = a),
      (t[21] = m),
      (t[22] = n.name),
      (t[23] = b))
    : (b = t[23]);
  let x;
  return (
    t[24] !== _ || t[25] !== v || t[26] !== b
      ? ((x = (0, Si.jsx)(Fe, {
          variant: `featured`,
          size: `compact`,
          icon: h,
          label: _,
          description: v,
          control: b,
        })),
        (t[24] = _),
        (t[25] = v),
        (t[26] = b),
        (t[27] = x))
      : (x = t[27]),
    x
  );
}
var bi, xi, Si;
function Ci() {
  return (Ci = e(() => {
    ((bi = X()), J(), M(), (xi = Ue()), Y(), Wt(), R(), $e(), ge(), v(), _n(), Nn(), gi(), ht(), (Si = ze()));
  }))();
}
function wi(e, t) {
  return new URL(
    `/workspace/${encodeURIComponent(e)}/agent-security?redirectfrom=chatgpt`,
    t ? `https://admin.api.openai.org` : `https://admin.openai.com`,
  ).href;
}
function Ti(e) {
  try {
    let t = e.environment;
    if (t == null) return !1;
    if (t.target.environment_type !== `cloud`) return;
    let n = yn(t).requirements?.network;
    if (n == null) return !1;
    let r =
        n.domains == null
          ? n.allowedDomains
          : Object.entries(n.domains)
              .filter(([, e]) => e === `allow`)
              .map(([e]) => e),
      i = n.domains == null ? (n.deniedDomains?.length ?? 0) > 0 : Object.values(n.domains).includes(`deny`);
    return (
      n.enabled === !1 ||
      n.allowUpstreamProxy === !1 ||
      n.allowLocalBinding === !1 ||
      i ||
      (n.managedAllowedDomainsOnly === !0 && !r?.some((e) => e.trim() === `*`))
    );
  } catch {
    return;
  }
}
function Ei() {
  return (Ei = e(() => {
    bn();
  }))();
}
var Di, Oi, ki;
function Ai() {
  return (Ai = e(() => {
    (We(),
      (Di = t(h(), 1)),
      M(),
      Wt(),
      Dt(),
      Re(),
      f(),
      Ut(),
      Ei(),
      (Oi = Ce(
        d,
        ({ get: e }) => {
          let t = e(pt);
          return !t.authLoading &&
            t.authMethod === `chatgpt` &&
            t.authenticatedAccountId != null &&
            t.authenticatedUserId != null
            ? { accountId: t.authenticatedAccountId, requestUserId: t.authenticatedUserId, userId: t.userId }
            : null;
        },
        { isEqual: Di.default },
      )),
      (ki = i(d, ({ get: e, scope: t }) => {
        let n = e(Oi);
        return {
          queryKey: [`cloud-environment-network-policy`, n?.accountId, n?.requestUserId],
          queryFn:
            n == null
              ? V
              : async ({ signal: e }) => {
                  let r = { accountId: n.accountId, userId: n.requestUserId },
                    i = await Promise.all(
                      [`linux`, `mac_os`, `windows`].map(async (t) =>
                        Ti(
                          await It.safeGet(`/wham/config/agent-bundle`, {
                            parameters: { query: { environment_type: `cloud`, environment_os: t } },
                            expectedIdentity: r,
                            signal: e,
                            retry: !1,
                          }),
                        ),
                      ),
                    );
                  if (!i.every((e) => e === !0))
                    return { restricted: !i.every((e) => e === !1) && void 0, settingsUrl: null };
                  let a = await It.safeGet(`/wham/config/agent-enterprise-managed`, {
                      expectedIdentity: r,
                      signal: e,
                      retry: !1,
                    }).then(
                      (e) => e.delivery_enabled === !0 && e.capabilities?.can_view !== !1,
                      () => !1,
                    ),
                    o = null;
                  return (
                    a &&
                      (o = await t.query.fetch(Gt).then(
                        (e) => e.chatGptDesktopAuthOrigin != null,
                        () => null,
                      )),
                    { restricted: !0, settingsUrl: o == null ? null : wi(n.accountId, o) }
                  );
                },
          staleTime: j.ONE_MINUTE,
          gcTime: 0,
          refetchOnMount: `always`,
          refetchOnWindowFocus: `always`,
          refetchInterval: j.ONE_MINUTE,
          retry: !1,
        };
      })));
  }))();
}
function ji(e) {
  let t = (0, Mi.c)(3),
    { configuration: n } = e,
    r = W(Oi),
    { data: i, isPending: a, isError: o, isPaused: s } = W(ki);
  if (
    r == null ||
    n.accountId !== r.accountId ||
    n.userId !== r.userId ||
    a ||
    o ||
    s ||
    i?.restricted !== !0
  ) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Ni.jsx)(`p`, {
            className: `text-sm text-secondary select-none`,
            children: (0, Ni.jsx)(g, {
              id: `environmentSetup.networkPolicy.description`,
              defaultMessage: `Choose which internet destinations this environment can access.`,
              description: `Description above Internet access controls, shown while organization network policy is loading or when no applicable restriction is confirmed`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let { settingsUrl: c } = i,
    l;
  return (
    t[1] === c
      ? (l = t[2])
      : ((l = (0, Ni.jsx)(`p`, {
          className: `text-sm text-secondary select-none`,
          children:
            c == null
              ? (0, Ni.jsx)(g, {
                  id: `environmentSetup.networkPolicy.contactAdmin`,
                  defaultMessage: `Your organization's Agent Security settings define network access restrictions which apply to this environment. Contact an admin for details.`,
                  description: `Quiet note above Internet access controls in the Cloud environment editor when organization policy restricts networking and the user cannot view Agent Security settings. Editing and publishing remain available.`,
                })
              : (0, Ni.jsx)(g, {
                  id: `environmentSetup.networkPolicy.withSettings`,
                  defaultMessage: `Your organization's <settings>Agent Security settings</settings> define network access restrictions which apply to this environment.`,
                  description: `Quiet note above Internet access controls in the Cloud environment editor when organization policy restricts networking. Editing and publishing remain available. The settings tag links to Agent Security settings for authorized users.`,
                  values: {
                    settings: (e) =>
                      (0, Ni.jsx)(Zt, {
                        className: `text-info`,
                        href: c,
                        initiator: `external_link`,
                        underline: `hover`,
                        children: e,
                      }),
                  },
                }),
        })),
        (t[1] = c),
        (t[2] = l)),
    l
  );
}
var Mi, Ni;
function Pi() {
  return (Pi = e(() => {
    ((Mi = X()), M(), Y(), Jt(), Ai(), (Ni = ze()));
  }))();
}
function Fi(e) {
  let t = (0, Li.c)(8),
    { title: n, actions: r, children: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = (0, Ri.jsx)(`span`, { children: n })), (t[0] = n), (t[1] = a));
  let o;
  t[2] !== r || t[3] !== a
    ? ((o = (0, Ri.jsxs)(`div`, {
        className: `flex min-h-7.5 items-center justify-between gap-2 text-base select-none`,
        children: [a, r],
      })),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (
    t[5] !== i || t[6] !== o
      ? ((s = (0, Ri.jsxs)(`section`, {
          className: `flex flex-col gap-2 border-t border-subtle pt-2.5 first:border-0 first:pt-0`,
          children: [o, i],
        })),
        (t[5] = i),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function Ii(e) {
  let t = (0, Li.c)(20),
    { icon: n, compactIcon: r, name: i, provider: a, actions: o, children: s } = e,
    c = r !== void 0 && r,
    l = c ? `gap-2.5` : `gap-2`,
    u;
  t[0] === l ? (u = t[1]) : ((u = me(`flex min-h-7.5 items-center text-base`, l)), (t[0] = l), (t[1] = u));
  let d = c ? `size-4` : `size-6`,
    f;
  t[2] === d
    ? (f = t[3])
    : ((f = me(`flex shrink-0 items-center justify-center`, d)), (t[2] = d), (t[3] = f));
  let p;
  t[4] !== n || t[5] !== f
    ? ((p = (0, Ri.jsx)(`span`, { className: f, children: n })), (t[4] = n), (t[5] = f), (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] === i
    ? (m = t[8])
    : ((m = (0, Ri.jsx)(`div`, { className: `min-w-0 flex-1 truncate`, children: i })),
      (t[7] = i),
      (t[8] = m));
  let h;
  t[9] === a
    ? (h = t[10])
    : ((h =
        a == null
          ? null
          : (0, Ri.jsx)(`span`, {
              className: `max-w-1/2 min-w-0 truncate px-4 text-tertiary select-none`,
              children: a,
            })),
      (t[9] = a),
      (t[10] = h));
  let g;
  t[11] !== o || t[12] !== u || t[13] !== p || t[14] !== m || t[15] !== h
    ? ((g = (0, Ri.jsxs)(`div`, { className: u, children: [p, m, h, o] })),
      (t[11] = o),
      (t[12] = u),
      (t[13] = p),
      (t[14] = m),
      (t[15] = h),
      (t[16] = g))
    : (g = t[16]);
  let _;
  return (
    t[17] !== s || t[18] !== g
      ? ((_ = (0, Ri.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-2`, children: [g, s] })),
        (t[17] = s),
        (t[18] = g),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
var Li, Ri;
function zi() {
  return (zi = e(() => {
    ((Li = X()), J(), (Ri = ze()));
  }))();
}
function Bi(e) {
  let t = (0, Hi.c)(68),
    {
      connection: n,
      requirement: r,
      issue: i,
      isReadOnly: a,
      isLoading: s,
      isSupported: c,
      onEdit: l,
      onAliasChange: d,
      onDetach: f,
    } = e,
    m = ee(),
    h = (0, Ui.useId)(),
    [_, v] = (0, Ui.useState)(!1),
    b = (0, Ui.useRef)(null),
    x = n?.display_name ?? r.connection_id,
    S;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = {
        azure: {
          icon: (0, Wi.jsx)(O, { asset: K }),
          label: (0, Wi.jsx)(g, {
            id: `restricted.environmentSetup.oic.providerAzure`,
            defaultMessage: `Azure`,
            description: `Microsoft Azure cloud provider preset`,
          }),
        },
        aws: {
          icon: (0, Wi.jsx)(O, { asset: He }),
          label: (0, Wi.jsx)(g, {
            id: `restricted.environmentSetup.oic.providerAws`,
            defaultMessage: `AWS`,
            description: `Amazon Web Services cloud provider preset`,
          }),
        },
        gcp: {
          icon: (0, Wi.jsx)(O, { asset: p }),
          label: (0, Wi.jsx)(g, {
            id: `restricted.environmentSetup.oic.providerGcp`,
            defaultMessage: `Google Cloud`,
            description: `Google Cloud provider preset`,
          }),
        },
      }),
      (t[0] = S))
    : (S = t[0]);
  let C = n == null ? null : S[n.provider_kind],
    w;
  t[1] === C ? (w = t[2]) : ((w = C == null ? (0, Wi.jsx)(y, {}) : C.icon), (t[1] = C), (t[2] = w));
  let T = C?.label,
    E;
  t[3] === x
    ? (E = t[4])
    : ((E = (0, Wi.jsx)(`span`, { className: `min-w-0 truncate text-secondary`, children: x })),
      (t[3] = x),
      (t[4] = E));
  let D;
  t[5] !== n || t[6] !== c
    ? ((D =
        n != null && !c
          ? (0, Wi.jsx)(ut, {
              variant: `outline`,
              children: (0, Wi.jsx)(g, {
                id: `restricted.environmentSetup.oic.unsupportedAttachment`,
                defaultMessage: `Not available`,
                description: `Indicates that the environment's current attachment capabilities do not include this connection's provider`,
              }),
            })
          : null),
      (t[5] = n),
      (t[6] = c),
      (t[7] = D))
    : (D = t[7]);
  let k;
  t[8] !== E || t[9] !== D
    ? ((k = (0, Wi.jsxs)(`div`, {
        className: `flex min-w-0 flex-wrap items-center gap-2`,
        children: [E, D],
      })),
      (t[8] = E),
      (t[9] = D),
      (t[10] = k))
    : (k = t[10]);
  let A;
  t[11] === _
    ? (A = t[12])
    : ((A = (e) => {
        _ && e.preventDefault();
      }),
      (t[11] = _),
      (t[12] = A));
  let j;
  t[13] !== m || t[14] !== x
    ? ((j = m.formatMessage(
        {
          id: `restricted.environmentSetup.oic.connectionActions`,
          defaultMessage: `Actions for {name}`,
          description: `Menu with edit, environment alias, and remove actions for this cloud connection`,
        },
        { name: x },
      )),
      (t[13] = m),
      (t[14] = x),
      (t[15] = j))
    : (j = t[15]);
  let M;
  t[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = (0, Wi.jsx)(o, {})), (t[16] = M)) : (M = t[16]);
  let N;
  t[17] !== a || t[18] !== j
    ? ((N = (0, Wi.jsx)(Vi, {
        ref: b,
        className: `not-disabled:not-aria-disabled:hover:text-default not-disabled:not-aria-disabled:focus-visible:text-default data-[state=open]:text-default`,
        color: `ghostSecondary`,
        size: `inline`,
        disabled: a,
        "aria-label": j,
        children: M,
      })),
      (t[17] = a),
      (t[18] = j),
      (t[19] = N))
    : (N = t[19]);
  let P = s || n?.can_edit !== !0,
    F;
  t[20] !== m || t[21] !== x
    ? ((F = m.formatMessage(
        {
          id: `restricted.environmentSetup.oic.editConnection`,
          defaultMessage: `Edit {name}`,
          description: `Loads saved outbound identity configuration for an authorized workspace member to edit`,
        },
        { name: x },
      )),
      (t[20] = m),
      (t[21] = x),
      (t[22] = F))
    : (F = t[22]);
  let I;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Wi.jsx)(g, {
        id: `restricted.environmentSetup.oic.editConnectionAction`,
        defaultMessage: `Edit connection`,
        description: `Edit the shared cloud identity connection configuration`,
      })),
      (t[23] = I))
    : (I = t[23]);
  let L;
  t[24] !== l || t[25] !== P || t[26] !== F
    ? ((L = (0, Wi.jsx)(z.Item, { disabled: P, "aria-label": F, onSelect: l, children: I })),
      (t[24] = l),
      (t[25] = P),
      (t[26] = F),
      (t[27] = L))
    : (L = t[27]);
  let R;
  t[28] !== m || t[29] !== x
    ? ((R = m.formatMessage(
        {
          id: `restricted.environmentSetup.oic.aliasLabel`,
          defaultMessage: `Environment alias for {name}`,
          description: `Label for the stable per-environment connection alias`,
        },
        { name: x },
      )),
      (t[28] = m),
      (t[29] = x),
      (t[30] = R))
    : (R = t[30]);
  let B, V;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = () => v(!0)),
      (V = (0, Wi.jsx)(g, {
        id: `restricted.environmentSetup.oic.editAliasAction`,
        defaultMessage: `Edit environment alias`,
        description: `Change only this environment's alias for the identity connection`,
      })),
      (t[31] = B),
      (t[32] = V))
    : ((B = t[31]), (V = t[32]));
  let H;
  t[33] === R
    ? (H = t[34])
    : ((H = (0, Wi.jsx)(z.Item, { "aria-label": R, onSelect: B, children: V })), (t[33] = R), (t[34] = H));
  let U;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Wi.jsx)(z.Separator, {})), (t[35] = U))
    : (U = t[35]);
  let W;
  t[36] !== m || t[37] !== x
    ? ((W = m.formatMessage(
        {
          id: `restricted.environmentSetup.oic.detachConnection`,
          defaultMessage: `Detach {name}`,
          description: `Removes the named outbound identity connection from this environment only`,
        },
        { name: x },
      )),
      (t[36] = m),
      (t[37] = x),
      (t[38] = W))
    : (W = t[38]);
  let G;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Wi.jsx)(g, {
        id: `restricted.environmentSetup.oic.removeAttachmentAction`,
        defaultMessage: `Remove from environment`,
        description: `Remove this environment attachment without deleting the shared connection`,
      })),
      (t[39] = G))
    : (G = t[39]);
  let te;
  t[40] !== f || t[41] !== W
    ? ((te = (0, Wi.jsx)(z.Item, { color: `danger`, "aria-label": W, onSelect: f, children: G })),
      (t[40] = f),
      (t[41] = W),
      (t[42] = te))
    : (te = t[42]);
  let q;
  t[43] !== N || t[44] !== L || t[45] !== H || t[46] !== te || t[47] !== A
    ? ((q = (0, Wi.jsxs)(u, {
        align: `end`,
        onCloseAutoFocus: A,
        triggerButton: N,
        children: [L, H, U, te],
      })),
      (t[43] = N),
      (t[44] = L),
      (t[45] = H),
      (t[46] = te),
      (t[47] = A),
      (t[48] = q))
    : (q = t[48]);
  let ne;
  t[49] !== _ ||
  t[50] !== h ||
  t[51] !== m ||
  t[52] !== a ||
  t[53] !== i ||
  t[54] !== x ||
  t[55] !== d ||
  t[56] !== r
    ? ((ne =
        _ || i != null
          ? (0, Wi.jsx)(_t, {
              "aria-describedby": i == null ? void 0 : h,
              "aria-invalid": i != null,
              "data-environment-invalid": i != null,
              "aria-label": m.formatMessage(
                {
                  id: `restricted.environmentSetup.oic.aliasLabel`,
                  defaultMessage: `Environment alias for {name}`,
                  description: `Label for the stable per-environment connection alias`,
                },
                { name: x },
              ),
              autoFocus: i == null,
              onBlur: () => v(!1),
              onKeyDown: (e) => {
                (e.key === `Enter` || e.key === `Escape`) &&
                  (e.preventDefault(), e.stopPropagation(), v(!1), b.current?.focus());
              },
              required: !0,
              pattern: `[A-Z][A-Z0-9_]{0,63}`,
              maxLength: 64,
              disabled: a,
              value: r.alias,
              onChange: (e) => d(e.target.value),
            })
          : null),
      (t[49] = _),
      (t[50] = h),
      (t[51] = m),
      (t[52] = a),
      (t[53] = i),
      (t[54] = x),
      (t[55] = d),
      (t[56] = r),
      (t[57] = ne))
    : (ne = t[57]);
  let J;
  t[58] !== h || t[59] !== i
    ? ((J = i == null ? null : (0, Wi.jsx)(`span`, { id: h, children: (0, Wi.jsx)(Cn, { issue: i }) })),
      (t[58] = h),
      (t[59] = i),
      (t[60] = J))
    : (J = t[60]);
  let re;
  return (
    t[61] !== w || t[62] !== q || t[63] !== ne || t[64] !== J || t[65] !== T || t[66] !== k
      ? ((re = (0, Wi.jsxs)(Ii, { icon: w, provider: T, name: k, actions: q, children: [ne, J] })),
        (t[61] = w),
        (t[62] = q),
        (t[63] = ne),
        (t[64] = J),
        (t[65] = T),
        (t[66] = k),
        (t[67] = re))
      : (re = t[67]),
    re
  );
}
function Vi(e) {
  let t = (0, Hi.c)(8),
    r = e[`aria-expanded`] === !0 ? `open` : `closed`,
    i = e[`aria-label`],
    a = e[`aria-expanded`] === !0,
    o;
  t[0] === e ? (o = t[1]) : ((o = (0, Wi.jsx)(n, { ...e })), (t[0] = e), (t[1] = o));
  let s;
  return (
    t[2] !== e.disabled || t[3] !== r || t[4] !== i || t[5] !== a || t[6] !== o
      ? ((s = (0, Wi.jsx)(Me, {
          cloneCustomTrigger: !0,
          "data-state": r,
          disabled: e.disabled,
          tooltipContent: i,
          triggerPopupOpen: a,
          children: o,
        })),
        (t[2] = e.disabled),
        (t[3] = r),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
var Hi, Ui, Wi;
function Gi() {
  return (Gi = e(() => {
    ((Hi = X()),
      ae(),
      x(),
      H(),
      (Ui = Ue()),
      Y(),
      ft(),
      Ne(),
      s(),
      A(),
      R(),
      Ze(),
      le(),
      zi(),
      Nn(),
      (Wi = ze()));
  }))();
}
function Ki(e) {
  let t = (0, Ji.c)(15),
    { configuration: n, requirements: r, isReadOnly: i, onChange: a, issues: o, showHeading: s } = e,
    c;
  t[0] === o ? (c = t[1]) : ((c = o === void 0 ? [] : o), (t[0] = o), (t[1] = c));
  let l = c,
    u = s === void 0 || s;
  if (n == null || r == null) {
    let e;
    t[2] === u
      ? (e = t[3])
      : ((e = u
          ? (0, Xi.jsx)(g, {
              id: `restricted.environmentSetup.oic.title`,
              defaultMessage: `OIDC`,
              description: `Heading for OIDC connections that authenticate a cloud environment to external systems`,
            })
          : null),
        (t[2] = u),
        (t[3] = e));
    let n;
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Xi.jsx)(`p`, {
          className: `text-sm text-secondary select-none`,
          children: (0, Xi.jsx)(g, {
            id: `restricted.environmentSetup.oic.cloudRequired`,
            defaultMessage: `Open a saved cloud environment to configure its connections`,
            description: `Explains why no connection controls are available before the server-backed configuration loads`,
          }),
        })),
        (t[4] = n))
      : (n = t[4]);
    let r;
    return (
      t[5] === e ? (r = t[6]) : ((r = (0, Xi.jsx)(Fi, { title: e, children: n })), (t[5] = e), (t[6] = r)),
      r
    );
  }
  let d = `${n.accountId}:${n.userId}:${n.configId}`,
    f;
  return (
    t[7] !== n || t[8] !== i || t[9] !== l || t[10] !== a || t[11] !== r || t[12] !== u || t[13] !== d
      ? ((f = (0, Xi.jsx)(
          qi,
          { configuration: n, requirements: r, issues: l, isReadOnly: i, onChange: a, showHeading: u },
          d,
        )),
        (t[7] = n),
        (t[8] = i),
        (t[9] = l),
        (t[10] = a),
        (t[11] = r),
        (t[12] = u),
        (t[13] = d),
        (t[14] = f))
      : (f = t[14]),
    f
  );
}
function qi(e) {
  let t = (0, Ji.c)(108),
    { configuration: r, requirements: i, isReadOnly: a, onChange: o, issues: s, showHeading: c } = e,
    l = ee(),
    d = b?.environmentConfigs,
    [f, p] = (0, Yi.useState)(null),
    [m, h] = (0, Yi.useState)(null),
    [_, v] = (0, Yi.useState)(null),
    y = (0, Yi.useRef)(null),
    x = (0, Yi.useRef)(null),
    { data: S, isPending: C, isFetching: w, isError: T, refetch: E } = Ge(dn, r),
    D = S?.ok ? S.data.items : void 0,
    O = S?.ok ? (S.data.capabilities?.attachment_provider_kinds ?? [`azure`]) : [],
    k;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = () => () => {
        (y.current?.abort(), x.current?.abort());
      }),
      (t[0] = k))
    : (k = t[0]);
  let A;
  (t[1] !== a || t[2] !== i ? ((A = [a, i]), (t[1] = a), (t[2] = i), (t[3] = A)) : (A = t[3]),
    (0, Yi.useLayoutEffect)(k, A));
  let M;
  t[4] === i ? (M = t[5]) : ((M = ot.safeParse(i)), (t[4] = i), (t[5] = M));
  let N = !M.success,
    P;
  if (t[6] !== D || t[7] !== i) {
    let e;
    (t[9] === D
      ? (e = t[10])
      : ((e = (e) => {
          let { connection_id: t } = e;
          return D?.some((e) => e.connection_id === t) === !1 ? [t] : [];
        }),
        (t[9] = D),
        (t[10] = e)),
      (P = i.flatMap(e)),
      (t[6] = D),
      (t[7] = i),
      (t[8] = P));
  } else P = t[8];
  let F = P,
    I;
  t[11] !== r.accountId || t[12] !== r.userId || t[13] !== F
    ? ((I = [`outbound-identity-attachment-edit`, r.accountId, r.userId, F]),
      (t[11] = r.accountId),
      (t[12] = r.userId),
      (t[13] = F),
      (t[14] = I))
    : (I = t[14]);
  let L = d != null && !a && !N && F.length > 0,
    R;
  t[15] !== r.accountId || t[16] !== r.userId || t[17] !== F
    ? ((R = () =>
        Promise.all(
          F.map(async (e) => {
            let t = await d?.requestOutboundIdentityConnection({
              accountId: r.accountId,
              userId: r.userId,
              method: `GET`,
              connectionId: e,
            });
            return t?.ok && t.data.connection_id === e ? t.data : null;
          }),
        )),
      (t[15] = r.accountId),
      (t[16] = r.userId),
      (t[17] = F),
      (t[18] = R))
    : (R = t[18]);
  let B;
  t[19] !== I || t[20] !== L || t[21] !== R
    ? ((B = {
        queryKey: I,
        enabled: L,
        staleTime: j.FIVE_SECONDS,
        refetchOnMount: `always`,
        retry: !1,
        queryFn: R,
      }),
      (t[19] = I),
      (t[20] = L),
      (t[21] = R),
      (t[22] = B))
    : (B = t[22]);
  let { data: V, isFetching: H, isError: U, refetch: W } = te(B),
    G = !a && m?.requirements === i && !m.signal.aborted,
    K = null;
  if (a) {
    let e;
    (t[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Xi.jsx)(g, {
          id: `environmentSetup.oic.add.readOnly`,
          defaultMessage: `Connections cannot be changed while this environment is read-only`,
          description: `Tooltip explaining why Add OIDC connection is disabled in a read-only cloud environment`,
        })),
        (t[23] = e))
      : (e = t[23]),
      (K = e));
  } else if (d == null) {
    let e;
    (t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Xi.jsx)(g, {
          id: `environmentSetup.oic.add.unavailable`,
          defaultMessage: `Connections are unavailable on this host`,
          description: `Tooltip explaining why Add OIDC connection is disabled when the host does not support environment connections`,
        })),
        (t[24] = e))
      : (e = t[24]),
      (K = e));
  } else if (G || w) {
    let e;
    (t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Xi.jsx)(g, {
          id: `environmentSetup.oic.add.loading`,
          defaultMessage: `Wait for connections to finish loading`,
          description: `Tooltip explaining why Add OIDC connection is temporarily disabled while connections load`,
        })),
        (t[25] = e))
      : (e = t[25]),
      (K = e));
  }
  let q;
  t[26] !== V || t[27] !== D || t[28] !== U || t[29] !== H || t[30] !== i
    ? ((q = (e) =>
        i.length < 16 &&
        i.every((t) => {
          let n =
            D?.find((e) => e.connection_id === t.connection_id) ??
            (H || U ? void 0 : V?.find((e) => e?.connection_id === t.connection_id));
          return (
            n != null && (n.provider_kind !== `azure` || n.azure_client_id.toLowerCase() !== e.toLowerCase())
          );
        })),
      (t[26] = V),
      (t[27] = D),
      (t[28] = U),
      (t[29] = H),
      (t[30] = i),
      (t[31] = q))
    : (q = t[31]);
  let ne = q,
    J = (e) =>
      !a &&
      !N &&
      D != null &&
      O.includes(e.provider_kind) &&
      i.length < 16 &&
      !i.some((t) => {
        let { connection_id: n } = t;
        return n === e.connection_id;
      }) &&
      (e.provider_kind !== `azure` || ne(e.azure_client_id)),
    re;
  t[32] !== o || t[33] !== i
    ? ((re = (e) => {
        let t = e.provider_kind.toUpperCase(),
          n = t,
          r = 2;
        for (; i.some((e) => e.alias === n);) n = `${t}_${r++}`;
        o([...i, { connection_id: e.connection_id, alias: n }]);
      }),
      (t[32] = o),
      (t[33] = i),
      (t[34] = re))
    : (re = t[34]);
  let ie = re,
    ae;
  t[35] !== ie || t[36] !== J
    ? ((ae = (e) => {
        J(e) && ie(e);
      }),
      (t[35] = ie),
      (t[36] = J),
      (t[37] = ae))
    : (ae = t[37]);
  let oe = Be(ae),
    se = async (e, t) => {
      if (d == null) return;
      let n = new AbortController();
      (x.current?.abort(), (x.current = n), h({ requirements: i, signal: n.signal }), v(null));
      try {
        let i = await d.requestOutboundIdentityConnection({
          accountId: r.accountId,
          userId: r.userId,
          method: `GET`,
          connectionId: e,
        });
        n.signal.aborted ||
          (i.ok
            ? i.data.provider_kind === t && i.data.connection_id === e
              ? p({ connection: i.data })
              : v({ ok: !1, error: `invalid-response` })
            : v({ ok: !1, error: i.error, status: i.status }));
      } catch {
        n.signal.aborted || v({ ok: !1, error: `unavailable` });
      }
      x.current === n && h(null);
    },
    ce;
  t[38] !== oe || t[39] !== r.accountId || t[40] !== r.userId || t[41] !== f || t[42] !== a
    ? ((ce = async (e) => {
        if (d == null || f == null || a) return { ok: !1, error: `unavailable` };
        let t = new AbortController();
        y.current = t;
        let { display_name: n, subject_template: i, additional_claims: o, include_actor_email: s } = e,
          c = await d.requestOutboundIdentityConnection(
            f.connection == null
              ? { accountId: r.accountId, userId: r.userId, method: `POST`, body: e }
              : {
                  accountId: r.accountId,
                  userId: r.userId,
                  method: `PATCH`,
                  connectionId: f.connection.connection_id,
                  body: {
                    display_name: n,
                    subject_template: i,
                    additional_claims: o,
                    include_actor_email: s,
                    configuration_version: f.connection.configuration_version,
                  },
                },
          );
        return c.ok
          ? c.data.provider_kind === (`target` in e ? e.target.provider_kind : `azure`)
            ? (f.connection == null && !t.signal.aborted && oe(c.data), { ok: !0, data: c.data })
            : { ok: !1, error: `invalid-response` }
          : { ok: !1, error: c.error, status: c.status };
      }),
      (t[38] = oe),
      (t[39] = r.accountId),
      (t[40] = r.userId),
      (t[41] = f),
      (t[42] = a),
      (t[43] = ce))
    : (ce = t[43]);
  let le = ce,
    ue = Fi,
    de;
  t[44] === c
    ? (de = t[45])
    : ((de = c
        ? (0, Xi.jsx)(g, {
            id: `restricted.environmentSetup.oic.title`,
            defaultMessage: `OIDC`,
            description: `Heading for OIDC connections that authenticate a cloud environment to external systems`,
          })
        : null),
      (t[44] = c),
      (t[45] = de));
  let fe = K != null && void 0,
    pe;
  t[46] === K ? (pe = t[47]) : ((pe = (0, Xi.jsx)(Xi.Fragment, { children: K })), (t[46] = K), (t[47] = pe));
  let me = K == null ? void 0 : 0,
    he = K != null,
    ge;
  t[48] === l
    ? (ge = t[49])
    : ((ge = l.formatMessage({
        id: `restricted.environmentSetup.oic.addConnection`,
        defaultMessage: `Add connection`,
        description: `Choose an existing connection or create a real connection to attach`,
      })),
      (t[48] = l),
      (t[49] = ge));
  let Y;
  t[50] === Symbol.for(`react.memo_cache_sentinel`) ? ((Y = (0, Xi.jsx)(Ee, {})), (t[50] = Y)) : (Y = t[50]);
  let _e;
  t[51] === ge
    ? (_e = t[52])
    : ((_e = (0, Xi.jsx)(n, { color: `ghost`, size: `inline`, "aria-label": ge, children: Y })),
      (t[51] = ge),
      (t[52] = _e));
  let ve = D?.filter(
      (e) =>
        !i.some((t) => {
          let { connection_id: n } = t;
          return n === e.connection_id;
        }),
    ).map((e) =>
      (0, Xi.jsx)(
        z.Item,
        {
          disabled: w || T || !J(e),
          focusableWhenDisabled: !O.includes(e.provider_kind),
          tooltipText: O.includes(e.provider_kind)
            ? void 0
            : l.formatMessage({
                id: `restricted.environmentSetup.oic.unsupportedProvider`,
                defaultMessage: `This provider is not available for this environment`,
                description: `Explains that the environment's current attachment capabilities do not include this connection's provider`,
              }),
          onSelect: () => ie(e),
          children: e.display_name,
        },
        e.connection_id,
      ),
    ),
    ye;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, Xi.jsx)(z.Separator, {})), (t[53] = ye))
    : (ye = t[53]);
  let be = w || T || D == null,
    xe,
    Se;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = () => p({ connection: null })),
      (Se = (0, Xi.jsx)(g, {
        id: `restricted.environmentSetup.oic.createNew`,
        defaultMessage: `Create connection…`,
        description: `Opens the cloud provider presets for a new workspace-governed identity connection`,
      })),
      (t[54] = xe),
      (t[55] = Se))
    : ((xe = t[54]), (Se = t[55]));
  let Ce;
  t[56] === be
    ? (Ce = t[57])
    : ((Ce = (0, Xi.jsx)(z.Item, { disabled: be, onSelect: xe, children: Se })), (t[56] = be), (t[57] = Ce));
  let we;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, Xi.jsx)(z.Separator, {})), (t[58] = we))
    : (we = t[58]);
  let Te;
  t[59] !== F || t[60] !== E || t[61] !== W || t[62] !== N
    ? ((Te = () => {
        (v(null), E(), !N && F.length > 0 && W());
      }),
      (t[59] = F),
      (t[60] = E),
      (t[61] = W),
      (t[62] = N),
      (t[63] = Te))
    : (Te = t[63]);
  let De;
  t[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, Xi.jsx)(g, {
        id: `restricted.environmentSetup.oic.reload`,
        defaultMessage: `Reload connections`,
        description: `Reload connections after a failure or an external change`,
      })),
      (t[64] = De))
    : (De = t[64]);
  let Oe;
  t[65] === Te
    ? (Oe = t[66])
    : ((Oe = (0, Xi.jsx)(z.Item, { onSelect: Te, children: De })), (t[65] = Te), (t[66] = Oe));
  let ke;
  t[67] !== he || t[68] !== _e || t[69] !== ve || t[70] !== Ce || t[71] !== Oe
    ? ((ke = (0, Xi.jsxs)(u, {
        contentWidth: `menu`,
        disabled: he,
        triggerButton: _e,
        children: [ve, ye, Ce, we, Oe],
      })),
      (t[67] = he),
      (t[68] = _e),
      (t[69] = ve),
      (t[70] = Ce),
      (t[71] = Oe),
      (t[72] = ke))
    : (ke = t[72]);
  let Ae;
  t[73] !== me || t[74] !== ke
    ? ((Ae = (0, Xi.jsx)(`span`, { tabIndex: me, children: ke })), (t[73] = me), (t[74] = ke), (t[75] = Ae))
    : (Ae = t[75]);
  let je;
  t[76] !== fe || t[77] !== pe || t[78] !== Ae
    ? ((je = (0, Xi.jsx)(Me, { open: fe, tooltipContent: pe, children: Ae })),
      (t[76] = fe),
      (t[77] = pe),
      (t[78] = Ae),
      (t[79] = je))
    : (je = t[79]);
  let Ne;
  t[80] === C
    ? (Ne = t[81])
    : ((Ne =
        C && d != null
          ? (0, Xi.jsx)(`p`, {
              className: `text-sm text-secondary select-none`,
              children: (0, Xi.jsx)(g, {
                id: `restricted.environmentSetup.oic.loading`,
                defaultMessage: `Loading connections…`,
                description: `Loading the workspace connection catalog`,
              }),
            })
          : null),
      (t[80] = C),
      (t[81] = Ne));
  let Pe;
  t[82] !== U || t[83] !== T
    ? ((Pe = T || U || d == null ? (0, Xi.jsx)(Sn, { error: { ok: !1, error: `unavailable` } }) : null),
      (t[82] = U),
      (t[83] = T),
      (t[84] = Pe))
    : (Pe = t[84]);
  let Fe;
  t[85] !== S || t[86] !== T
    ? ((Fe = d != null && !T && S?.ok === !1 ? (0, Xi.jsx)(Sn, { error: S }) : null),
      (t[85] = S),
      (t[86] = T),
      (t[87] = Fe))
    : (Fe = t[87]);
  let Ie;
  t[88] === _
    ? (Ie = t[89])
    : ((Ie = _ == null ? null : (0, Xi.jsx)(Sn, { error: _ })), (t[88] = _), (t[89] = Ie));
  let Le = i.map((e, t) => {
      let n = s.find((e) => {
          let { field: n } = e;
          return n === `connection-${t}`;
        }),
        r =
          D?.find((t) => {
            let { connection_id: n } = t;
            return n === e.connection_id;
          }) ?? V?.find((t) => t?.connection_id === e.connection_id);
      return (0, Xi.jsx)(
        Bi,
        {
          connection: r ?? void 0,
          requirement: e,
          issue: n,
          isReadOnly: a,
          isLoading: G,
          isSupported: r == null || O.includes(r.provider_kind),
          onEdit: () => {
            r != null && se(e.connection_id, r.provider_kind);
          },
          onAliasChange: (t) =>
            o(i.map((n) => (n.connection_id === e.connection_id ? { ...n, alias: t } : n))),
          onDetach: () =>
            o(
              i.filter((t) => {
                let { connection_id: n } = t;
                return n !== e.connection_id;
              }),
            ),
        },
        e.connection_id,
      );
    }),
    X;
  t[90] !== f || t[91] !== a || t[92] !== F || t[93] !== E || t[94] !== W || t[95] !== le || t[96] !== N
    ? ((X =
        f == null
          ? null
          : (0, Xi.jsx)(Yi.Suspense, {
              fallback: null,
              children: (0, Xi.jsx)(
                Zi,
                {
                  isOpen: !a,
                  connection: f.connection,
                  onClose: () => {
                    (p(null), E(), !N && F.length > 0 && W());
                  },
                  onSubmit: le,
                },
                f.connection?.connection_id ?? `create`,
              ),
            })),
      (t[90] = f),
      (t[91] = a),
      (t[92] = F),
      (t[93] = E),
      (t[94] = W),
      (t[95] = le),
      (t[96] = N),
      (t[97] = X))
    : (X = t[97]);
  let Re;
  return (
    t[98] !== ue ||
    t[99] !== de ||
    t[100] !== je ||
    t[101] !== Ne ||
    t[102] !== Pe ||
    t[103] !== Fe ||
    t[104] !== Ie ||
    t[105] !== Le ||
    t[106] !== X
      ? ((Re = (0, Xi.jsxs)(ue, { title: de, actions: je, children: [Ne, Pe, Fe, Ie, Le, X] })),
        (t[98] = ue),
        (t[99] = de),
        (t[100] = je),
        (t[101] = Ne),
        (t[102] = Pe),
        (t[103] = Fe),
        (t[104] = Ie),
        (t[105] = Le),
        (t[106] = X),
        (t[107] = Re))
      : (Re = t[107]),
    Re
  );
}
var Ji, Yi, Xi, Zi;
function Qi() {
  return (Qi = e(() => {
    ((Ji = X()),
      q(),
      M(),
      Vt(),
      (Yi = Ue()),
      Y(),
      Ne(),
      s(),
      R(),
      le(),
      De(),
      f(),
      oe(),
      zi(),
      Gi(),
      fn(),
      xn(),
      (Xi = ze()),
      we(),
      (Zi = (0, Yi.lazy)(async () => ({
        default: (
          await fe(
            async () => {
              let { OutboundIdentityConnectionDialog: e } = await import(`./dialog-3ab34542634b.js`);
              return { OutboundIdentityConnectionDialog: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
            import.meta.url,
          )
        ).OutboundIdentityConnectionDialog,
      }))));
  }))();
}
function $i(e) {
  let t = (0, ea.c)(22),
    { configuration: n, draft: r, panelState: i, issues: a, showHeading: o } = e,
    s;
  t[0] === a ? (s = t[1]) : ((s = a === void 0 ? [] : a), (t[0] = a), (t[1] = s));
  let c = s,
    l = o === void 0 || o,
    u;
  t[2] === l
    ? (u = t[3])
    : ((u = l
        ? (0, ta.jsx)(g, {
            id: `restricted.environmentSetup.sidePanel.repositories`,
            defaultMessage: `Repositories`,
            description: `Heading for repositories in the environment side-panel editor`,
          })
        : null),
      (t[2] = l),
      (t[3] = u));
  let d;
  t[4] === u
    ? (d = t[5])
    : ((d = (0, ta.jsx)(yt.Header, { className: `select-none`, size: `base`, spacing: `compact`, title: u })),
      (t[4] = u),
      (t[5] = d));
  let f;
  t[6] === r.repositories
    ? (f = t[7])
    : ((f = r.repositories.length === 0 ? [``] : r.repositories), (t[6] = r.repositories), (t[7] = f));
  let p;
  if (t[8] !== n?.repositoryNamesById || t[9] !== c || t[10] !== i?.githubRepositories || t[11] !== f) {
    let e;
    (t[13] !== n?.repositoryNamesById || t[14] !== c || t[15] !== i?.githubRepositories
      ? ((e = (e, t) =>
          (0, ta.jsx)(
            Fe,
            {
              className: `select-none`,
              variant: `featured`,
              control: null,
              size: `compact`,
              description:
                c.find((e) => {
                  let { field: n } = e;
                  return n === `repository-${t}`;
                }) == null
                  ? void 0
                  : (0, ta.jsx)(`span`, {
                      tabIndex: -1,
                      "data-environment-invalid": `true`,
                      children: (0, ta.jsx)(Cn, { issue: { field: `repository-${t}`, code: `repository` } }),
                    }),
              icon: (0, ta.jsx)(Ae, { className: `icon-xs` }),
              label:
                (n?.repositoryNamesById[e] ??
                  i?.githubRepositories?.find((t) => {
                    let { repository: n } = t;
                    return n.id === e;
                  })?.repository.repository_full_name ??
                  e) ||
                (0, ta.jsx)(g, {
                  id: `restricted.environmentSetup.configuration.repository.empty`,
                  defaultMessage: `No repository selected`,
                  description: `Description shown when a mocked cloud environment settings panel has no repository yet`,
                }),
            },
            t,
          )),
        (t[13] = n?.repositoryNamesById),
        (t[14] = c),
        (t[15] = i?.githubRepositories),
        (t[16] = e))
      : (e = t[16]),
      (p = f.map(e)),
      (t[8] = n?.repositoryNamesById),
      (t[9] = c),
      (t[10] = i?.githubRepositories),
      (t[11] = f),
      (t[12] = p));
  } else p = t[12];
  let m;
  t[17] === p
    ? (m = t[18])
    : ((m = (0, ta.jsx)(yt.Content, { children: (0, ta.jsx)(Te, { children: p }) })),
      (t[17] = p),
      (t[18] = m));
  let h;
  return (
    t[19] !== d || t[20] !== m
      ? ((h = (0, ta.jsxs)(yt, { children: [d, m] })), (t[19] = d), (t[20] = m), (t[21] = h))
      : (h = t[21]),
    h
  );
}
var ea, ta;
function na() {
  return (na = e(() => {
    ((ea = X()), Y(), se(), $e(), ge(), v(), Nn(), (ta = ze()));
  }))();
}
function ra(e) {
  let t = (0, oa.c)(19),
    { label: n, language: i, value: a, onChange: o } = e,
    s;
  t[0] !== n || t[1] !== i || t[2] !== a
    ? ((s = () => ({ name: n, lang: i, contents: a })), (t[0] = n), (t[1] = i), (t[2] = a), (t[3] = s))
    : (s = t[3]);
  let [c] = (0, sa.useState)(s),
    l = Ot(),
    u = jt(l),
    d = r(ie.lightCodeThemeId),
    f = r(ie.darkCodeThemeId),
    p;
  t[4] !== u || t[5] !== f || t[6] !== d
    ? ((p = u === `light` ? Je(d, `light`) : Je(f, `dark`)), (t[4] = u), (t[5] = f), (t[6] = d), (t[7] = p))
    : (p = t[7]);
  let m = p,
    h;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = { onAttach: ia }), (t[8] = h)) : (h = t[8]);
  let g = m.name,
    _;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = en({
        includeDiffHeader: !1,
        includeSimpleLineSeparators: !1,
        rootSelector: `[data-file]`,
        surface: `var(--color-surface)`,
      })),
      (t[9] = _))
    : (_ = t[9]);
  let v;
  t[10] !== u || t[11] !== m.name
    ? ((v = {
        disableFileHeader: !0,
        overflow: `wrap`,
        theme: g,
        themeType: u,
        useTokenTransformer: !0,
        unsafeCSS: `${_}
              [data-file], [data-code] {
                min-height: inherit;
              }
              [data-code] {
                align-content: start;
              }
              [data-file] {
                /* Align the editor's caret and selection overlays to code rows. */
                --diffs-line-height: round(nearest, calc(var(--diffs-font-size, 12px) * 1.8), 1px);
                line-height: var(--diffs-line-height);
              }
            `,
      }),
      (t[10] = u),
      (t[11] = m.name),
      (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] === o ? (y = t[14]) : ((y = (e) => o(e.file.contents)), (t[13] = o), (t[14] = y));
  let b;
  return (
    t[15] !== c || t[16] !== v || t[17] !== y
      ? ((b = (0, ca.jsx)(`div`, {
          className: `max-h-96 overflow-y-auto`,
          children: (0, ca.jsx)(tn, {
            createEditor: aa,
            children: (0, ca.jsx)(on, {
              className: `min-h-40 [--diffs-dark:currentColor] [--diffs-editor-selection-bg:var(--color-background-info-soft)] [--diffs-light:currentColor] [--diffs-min-number-column-width:1ch]`,
              disableWorkerPool: !0,
              edit: !0,
              editorOptions: h,
              file: c,
              options: v,
              onEditChange: y,
            }),
          }),
        })),
        (t[15] = c),
        (t[16] = v),
        (t[17] = y),
        (t[18] = b))
      : (b = t[18]),
    b
  );
}
function ia(e) {
  return e.focus({ lineNumber: 1 });
}
function aa(e, t, n) {
  return new mn(e, t, n);
}
var oa, sa, ca;
function la() {
  return (la = e(() => {
    ((oa = X()), pn(), $t(), an(), Oe(), (sa = Ue()), nn(), G(), et(), Kt(), rn(), (ca = ze()));
  }))();
}
function ua(e) {
  let t = (0, ma.c)(20),
    { baseline: n, draft: r, isReadOnly: i, readOnlyTooltip: a, showHeading: o, onDraftChange: s } = e,
    c = o === void 0 || o,
    l = ee(),
    [u, d] = (0, ha.useState)(null);
  i && u != null && d(null);
  let f;
  t[0] === c
    ? (f = t[1])
    : ((f =
        c &&
        (0, Z.jsx)(yt.Header, {
          className: `select-none`,
          size: `base`,
          spacing: `compact`,
          title: (0, Z.jsx)(g, { ...ga.scripts }),
        })),
      (t[0] = c),
      (t[1] = f));
  let p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = [`setupScript`, `startSkill`]), (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] !== r || t[4] !== l || t[5] !== i || t[6] !== a
    ? ((m = (0, Z.jsx)(yt.Content, {
        children: (0, Z.jsx)(Te, {
          children: p.map((e) =>
            (0, Z.jsx)(
              Fe,
              {
                className: `select-none`,
                controlSizing: `content`,
                variant: `featured`,
                size: `compact`,
                label: (0, Z.jsxs)(`div`, {
                  className: `flex min-w-0 items-center justify-between gap-3`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `shrink-0 select-none`,
                      children: (0, Z.jsx)(g, { ...ga[e] }),
                    }),
                    (0, Z.jsx)(`span`, {
                      className: me(`truncate text-secondary`, r[e] && `font-mono`),
                      children: r[e] || (0, Z.jsx)(g, { ...ga.empty }),
                    }),
                  ],
                }),
                control: (0, Z.jsx)(vn, {
                  "aria-label": l.formatMessage(ga[e]),
                  color: `ghost`,
                  disabled: i,
                  tooltipContent: i ? a : null,
                  size: `icon`,
                  onClick: () => d(e),
                  children: (0, Z.jsx)(he, {}),
                }),
              },
              e,
            ),
          ),
        }),
      })),
      (t[3] = r),
      (t[4] = l),
      (t[5] = i),
      (t[6] = a),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] !== f || t[9] !== m
    ? ((h = (0, Z.jsxs)(yt, { children: [f, m] })), (t[8] = f), (t[9] = m), (t[10] = h))
    : (h = t[10]);
  let _;
  t[11] !== n || t[12] !== r || t[13] !== u || t[14] !== i || t[15] !== s
    ? ((_ =
        u != null && !i
          ? (0, Z.jsx)(da, {
              field: u,
              baseline:
                n == null ? void 0 : (n[u === `setupScript` ? `install_script` : `start_skill`] ?? ``),
              value: r[u] ?? ``,
              onClose: () => d(null),
              onSave: (e) => {
                (s({ [u]: e }), d(null));
              },
            })
          : null),
      (t[11] = n),
      (t[12] = r),
      (t[13] = u),
      (t[14] = i),
      (t[15] = s),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] !== h || t[18] !== _
      ? ((v = (0, Z.jsxs)(Z.Fragment, { children: [h, _] })), (t[17] = h), (t[18] = _), (t[19] = v))
      : (v = t[19]),
    v
  );
}
function da(e) {
  let t = (0, ma.c)(33),
    { field: r, baseline: i, value: a, onClose: o, onSave: s } = e,
    c = ee(),
    [l, u] = (0, ha.useState)(),
    [d, f] = (0, ha.useState)(i == null || i === a),
    p = l ?? a,
    m = i != null && i !== p,
    h = d || !m,
    _ = r === `setupScript` ? `install.sh` : `SKILL.md`,
    v;
  t[0] === o ? (v = t[1]) : ((v = (e) => !e && o()), (t[0] = o), (t[1] = v));
  let y;
  t[2] !== s || t[3] !== p
    ? ((y = (e) => {
        (e.preventDefault(), e.stopPropagation(), s(p));
      }),
      (t[2] = s),
      (t[3] = p),
      (t[4] = y))
    : (y = t[4]);
  let b = ga[r],
    x;
  t[5] === b
    ? (x = t[6])
    : ((x = (0, Z.jsx)(ye, {
        children: (0, Z.jsx)(ce, { title: (0, Z.jsx)(re, { children: (0, Z.jsx)(g, { ...b }) }) }),
      })),
      (t[5] = b),
      (t[6] = x));
  let S;
  t[7] !== i || t[8] !== r || t[9] !== _ || t[10] !== c || t[11] !== p || t[12] !== h || t[13] !== a
    ? ((S = (0, Z.jsx)(ye, {
        children: (0, Z.jsx)(`div`, {
          className: `overflow-hidden border border-subtle`,
          children: h
            ? (0, Z.jsx)(
                ra,
                {
                  label: c.formatMessage(ga[r]),
                  language: r === `setupScript` ? `bash` : `markdown`,
                  value: p,
                  onChange: u,
                },
                a,
              )
            : (0, Z.jsx)(pa, { baseline: i ?? ``, filename: _, proposed: p }),
        }),
      })),
      (t[7] = i),
      (t[8] = r),
      (t[9] = _),
      (t[10] = c),
      (t[11] = p),
      (t[12] = h),
      (t[13] = a),
      (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] !== m || t[16] !== h
    ? ((C =
        m &&
        (0, Z.jsx)(n, {
          color: `secondary`,
          onClick: () => f(!h),
          children: h
            ? (0, Z.jsx)(g, {
                id: `environmentSetup.script.reviewChanges`,
                defaultMessage: `Review changes`,
                description: `Return from editing the proposed environment script to its diff against the last reviewed script`,
              })
            : (0, Z.jsx)(g, {
                id: `environmentSetup.script.edit`,
                defaultMessage: `Edit`,
                description: `Edit the proposed install script or start skill shown in the environment configuration diff`,
              }),
        })),
      (t[15] = m),
      (t[16] = h),
      (t[17] = C))
    : (C = t[17]);
  let w;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(g, {
        id: `restricted.environmentSetup.configuration.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Discard edits in a cloud environment configuration dialog`,
      })),
      (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] === o
    ? (T = t[20])
    : ((T = (0, Z.jsx)(n, { color: `secondary`, onClick: o, children: w })), (t[19] = o), (t[20] = T));
  let E;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Z.jsx)(n, {
        color: `primary`,
        type: `submit`,
        children: (0, Z.jsx)(g, {
          id: `restricted.environmentSetup.configuration.dialog.save`,
          defaultMessage: `Save`,
          description: `Apply dialog edits to the cloud environment configuration being edited`,
        }),
      })),
      (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] !== C || t[23] !== T
    ? ((D = (0, Z.jsx)(ye, { children: (0, Z.jsxs)(je, { children: [C, T, E] }) })),
      (t[22] = C),
      (t[23] = T),
      (t[24] = D))
    : (D = t[24]);
  let O;
  t[25] !== D || t[26] !== y || t[27] !== x || t[28] !== S
    ? ((O = (0, Z.jsxs)(Se, {
        as: `form`,
        size: `viewport`,
        onKeyDownCapture: fa,
        onSubmit: y,
        children: [x, S, D],
      })),
      (t[25] = D),
      (t[26] = y),
      (t[27] = x),
      (t[28] = S),
      (t[29] = O))
    : (O = t[29]);
  let k;
  return (
    t[30] !== v || t[31] !== O
      ? ((k = (0, Z.jsx)(be, { open: !0, size: `xxwide`, onOpenChange: v, children: O })),
        (t[30] = v),
        (t[31] = O),
        (t[32] = k))
      : (k = t[32]),
    k
  );
}
function fa(e) {
  e.key === `Enter` &&
    (e.metaKey || e.ctrlKey) &&
    (e.preventDefault(), e.stopPropagation(), e.currentTarget.requestSubmit());
}
function pa(e) {
  let t = (0, ma.c)(17),
    { baseline: n, filename: r, proposed: i } = e,
    [a, o] = (0, ha.useState)(!1),
    s;
  t[0] !== n || t[1] !== r || t[2] !== i
    ? ((s = Bt({ name: r, contents: n }, { name: r, contents: i })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = s))
    : (s = t[3]);
  let c = s,
    l = !a,
    u = a ? `relative` : `absolute inset-x-0 top-0`,
    d;
  t[4] === u
    ? (d = t[5])
    : ((d = me(
        `overflow-clip [contain:content] [--codex-diffs-surface:var(--color-surface)] [--diffs-min-number-column-width:1ch]`,
        u,
      )),
      (t[4] = u),
      (t[5] = d));
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (e) => {
        e.shadowRoot?.querySelector(`[data-line], [data-error-wrapper]`) && o(!0);
      }),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== c || t[8] !== d
    ? ((p = (0, Z.jsx)(cn, {
        className: d,
        diffStyle: `unified`,
        expandUnchanged: !0,
        fileDiff: c,
        hunkSeparators: `simple`,
        overflow: `wrap`,
        onPostRender: f,
      })),
      (t[7] = c),
      (t[8] = d),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] !== c || t[11] !== a
    ? ((m =
        !a &&
        (0, Z.jsxs)(`div`, {
          className: `relative bg-surface px-3 pt-2 pb-3 text-sm`,
          role: `status`,
          children: [
            (0, Z.jsx)(`span`, {
              className: `sr-only`,
              children: (0, Z.jsx)(g, {
                id: `codex.review.diff.loading`,
                defaultMessage: `Loading diff`,
                description: `Placeholder text shown while a review file diff is loading`,
              }),
            }),
            (0, Z.jsx)(Ke, { lines: Math.min(c.unifiedLineCount, 12), minWidth: 42, maxWidth: 96 }),
          ],
        })),
      (t[10] = c),
      (t[11] = a),
      (t[12] = m))
    : (m = t[12]);
  let h;
  return (
    t[13] !== l || t[14] !== p || t[15] !== m
      ? ((h = (0, Z.jsxs)(`div`, {
          className: `relative max-h-96 overflow-y-auto`,
          "aria-busy": l,
          children: [p, m],
        })),
        (t[13] = l),
        (t[14] = p),
        (t[15] = m),
        (t[16] = h))
      : (h = t[16]),
    h
  );
}
var ma, ha, Z, ga;
function _a() {
  return (_a = e(() => {
    ((ma = X()),
      ct(),
      J(),
      (ha = Ue()),
      Y(),
      Ne(),
      Le(),
      de(),
      R(),
      kt(),
      sn(),
      $e(),
      ge(),
      v(),
      _n(),
      la(),
      (Z = ze()),
      (ga = a({
        scripts: {
          id: `restricted.environmentSetup.configuration.scripts.title`,
          defaultMessage: `Scripts`,
          description: `Heading for cloud environment install commands and startup instructions`,
        },
        setupScript: {
          id: `restricted.environmentSetup.configuration.installScript.title`,
          defaultMessage: `Install script`,
          description: `Heading for setup commands that install dependencies in a cloud environment`,
        },
        startSkill: {
          id: `restricted.environmentSetup.configuration.startSkill.title`,
          defaultMessage: `Start skill`,
          description: `Heading for the skill used to start a configured cloud environment`,
        },
        empty: {
          id: `restricted.environmentSetup.configuration.script.empty`,
          defaultMessage: `Not set`,
          description: `Preview for cloud environment installation or startup instructions that have not been configured`,
        },
      })));
  }))();
}
function va(e) {
  let t = (0, ba.c)(81),
    { configured: r, initialValue: i, removeControl: a, onClose: o, onSave: s } = e,
    c = ee(),
    u = (0, xa.useId)(),
    d = (0, xa.useId)(),
    f = (0, xa.useId)(),
    p = (0, xa.useId)(),
    m = (0, xa.useId)(),
    h = (0, xa.useId)(),
    [_, v] = (0, xa.useState)(i),
    [y, b] = (0, xa.useState)(!1),
    x;
  t[0] === _
    ? (x = t[1])
    : ((x = _.length > 0 && (_.trim().length > 4096 || !/^tskey-auth-[A-Za-z0-9-]+$/.test(_.trim()))),
      (t[0] = _),
      (t[1] = x));
  let S = x,
    C;
  t[2] === o ? (C = t[3]) : ((C = (e) => !e && o()), (t[2] = o), (t[3] = C));
  let w;
  t[4] !== _ || t[5] !== S || t[6] !== s
    ? ((w = (e) => {
        (e.preventDefault(), e.stopPropagation(), S || s(_));
      }),
      (t[4] = _),
      (t[5] = S),
      (t[6] = s),
      (t[7] = w))
    : (w = t[7]);
  let T;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Sa.jsx)(g, {
        id: `environmentSetup.vpn.keySetupHelp`,
        defaultMessage: `Use a reusable Tailscale auth key so new cloud machines can connect. Saving does not test the connection. <link>Tailscale auth key guide</link>`,
        description: `Guidance beside the Tailscale key input. Each new cloud machine may enroll again, so the key must be reusable. Saving does not validate connectivity. The link opens Tailscale's official key setup, expiry, and access guidance.`,
        values: { link: ya },
      })),
      (t[8] = T))
    : (T = t[8]);
  let E;
  t[9] === d
    ? (E = t[10])
    : ((E = (0, Sa.jsx)(`p`, { id: d, className: `select-none`, children: T })), (t[9] = d), (t[10] = E));
  let D;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Sa.jsx)(re, {
        children: (0, Sa.jsx)(g, {
          id: `environmentSetup.vpn.dialogTitle`,
          defaultMessage: `Tailscale VPN`,
          description: `Title of the dialog for entering a Tailscale VPN authentication key`,
        }),
      })),
      (t[11] = D))
    : (D = t[11]);
  let O;
  t[12] === E
    ? (O = t[13])
    : ((O = (0, Sa.jsx)(ye, {
        children: (0, Sa.jsx)(ce, { subtitleSize: `sm`, subtitleTone: `secondary`, subtitle: E, title: D }),
      })),
      (t[12] = E),
      (t[13] = O));
  let k;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Sa.jsx)(g, {
        id: `restricted.environmentSetup.vpn.key`,
        defaultMessage: `Tailscale auth key`,
        description: `Label for the Tailscale authentication key used by this environment`,
      })),
      (t[14] = k))
    : (k = t[14]);
  let A;
  t[15] === u
    ? (A = t[16])
    : ((A = (0, Sa.jsx)(`label`, { className: `select-none`, htmlFor: u, children: k })),
      (t[15] = u),
      (t[16] = A));
  let j = y ? `text` : `password`,
    M;
  t[17] !== r || t[18] !== f || t[19] !== m || t[20] !== S || t[21] !== d || t[22] !== p || t[23] !== h
    ? ((M = [d, f, r ? h : null, S ? m : null, p].filter(Boolean).join(` `) || void 0),
      (t[17] = r),
      (t[18] = f),
      (t[19] = m),
      (t[20] = S),
      (t[21] = d),
      (t[22] = p),
      (t[23] = h),
      (t[24] = M))
    : (M = t[24]);
  let N = r ? `••••••••` : void 0,
    P;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (e) => {
        (v(e.currentTarget.value), e.currentTarget.value.length === 0 && b(!1));
      }),
      (t[25] = P))
    : (P = t[25]);
  let F;
  t[26] !== _ || t[27] !== S || t[28] !== u || t[29] !== j || t[30] !== M || t[31] !== N
    ? ((F = (0, Sa.jsx)(_t, {
        id: u,
        autoFocus: !0,
        type: j,
        autoComplete: `off`,
        spellCheck: !1,
        maxLength: 4096,
        "aria-describedby": M,
        "aria-invalid": S,
        placeholder: N,
        value: _,
        onChange: P,
      })),
      (t[26] = _),
      (t[27] = S),
      (t[28] = u),
      (t[29] = j),
      (t[30] = M),
      (t[31] = N),
      (t[32] = F))
    : (F = t[32]);
  let I;
  t[33] !== _.length || t[34] !== c || t[35] !== y
    ? ((I =
        _.length > 0
          ? (0, Sa.jsx)(n, {
              "aria-label": y
                ? c.formatMessage({
                    id: `restricted.environmentSetup.vpn.hideTypedKey`,
                    defaultMessage: `Hide entered key`,
                    description: `Hides a newly entered VPN key after revealing it`,
                  })
                : c.formatMessage({
                    id: `restricted.environmentSetup.vpn.showTypedKey`,
                    defaultMessage: `Show entered key`,
                    description: `Reveals a newly entered VPN key, not the saved key`,
                  }),
              color: `ghost`,
              size: `icon`,
              type: `button`,
              onClick: () => b(!y),
              children: (0, Sa.jsx)(l, {}),
            })
          : null),
      (t[33] = _.length),
      (t[34] = c),
      (t[35] = y),
      (t[36] = I))
    : (I = t[36]);
  let L;
  t[37] !== F || t[38] !== I
    ? ((L = (0, Sa.jsxs)(ue, { children: [F, I] })), (t[37] = F), (t[38] = I), (t[39] = L))
    : (L = t[39]);
  let R;
  t[40] !== r || t[41] !== h
    ? ((R = r
        ? (0, Sa.jsx)(`p`, {
            id: h,
            className: `text-sm text-secondary select-none`,
            children: (0, Sa.jsx)(g, {
              id: `restricted.environmentSetup.vpn.savedKeyHint`,
              defaultMessage: `A key is saved; enter a new key to replace it, or leave this blank to keep the saved key`,
              description: `Guidance for an empty VPN key field with a saved key represented by a masked placeholder`,
            }),
          })
        : null),
      (t[40] = r),
      (t[41] = h),
      (t[42] = R))
    : (R = t[42]);
  let z;
  t[43] !== m || t[44] !== S
    ? ((z = S
        ? (0, Sa.jsx)(`p`, {
            id: m,
            className: `text-sm text-secondary select-none`,
            role: `alert`,
            children: (0, Sa.jsx)(g, {
              id: `restricted.environmentSetup.vpn.invalidKeyFormat`,
              defaultMessage: `Enter a Tailscale auth key starting with tskey-auth- and containing only letters, numbers, or hyphens`,
              description: `Shown before saving when a Tailscale auth key has an invalid prefix, character, or length`,
            }),
          })
        : null),
      (t[43] = m),
      (t[44] = S),
      (t[45] = z))
    : (z = t[45]);
  let B;
  t[46] !== L || t[47] !== R || t[48] !== z || t[49] !== A
    ? ((B = (0, Sa.jsx)(ye, { children: (0, Sa.jsxs)(Ie, { children: [A, L, R, z] }) })),
      (t[46] = L),
      (t[47] = R),
      (t[48] = z),
      (t[49] = A),
      (t[50] = B))
    : (B = t[50]);
  let V;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Sa.jsx)(g, {
        id: `environmentSetup.vpn.deviceSetupHelp`,
        defaultMessage: `Cloud machines already use ephemeral Tailscale devices; the key's Ephemeral setting is not required. Follow your tailnet administrator's requirements for tags and device approval.`,
        description: `Explains that the cloud runtime creates temporary Tailscale devices regardless of the auth key's Ephemeral toggle. Tags and device approval depend on the user's tailnet policy, not a universal cloud requirement.`,
      })),
      (t[51] = V))
    : (V = t[51]);
  let H;
  t[52] === f
    ? (H = t[53])
    : ((H = (0, Sa.jsx)(`p`, { id: f, className: `text-sm text-secondary select-none`, children: V })),
      (t[52] = f),
      (t[53] = H));
  let U;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Sa.jsx)(g, {
        id: `environmentSetup.vpn.networkHelp`,
        defaultMessage: `For Package managers or Custom domains only, add private IPv4 addresses or VPN hostnames that resolve to IPv4 under Additional allowed domains`,
        description: `Explains the two internet access presets that require private IPv4 addresses or VPN hostnames that resolve to IPv4 in Additional allowed domains`,
      })),
      (t[54] = U))
    : (U = t[54]);
  let W;
  t[55] === p
    ? (W = t[56])
    : ((W = (0, Sa.jsx)(`p`, { id: p, className: `text-sm text-secondary select-none`, children: U })),
      (t[55] = p),
      (t[56] = W));
  let G;
  t[57] !== H || t[58] !== W
    ? ((G = (0, Sa.jsxs)(ye, { children: [H, W] })), (t[57] = H), (t[58] = W), (t[59] = G))
    : (G = t[59]);
  let K;
  t[60] === a
    ? (K = t[61])
    : ((K = a ? (0, Sa.jsx)(`div`, { className: `me-auto`, children: a }) : null), (t[60] = a), (t[61] = K));
  let te;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Sa.jsx)(g, {
        id: `restricted.environmentSetup.configuration.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Discard edits in a cloud environment configuration dialog`,
      })),
      (t[62] = te))
    : (te = t[62]);
  let q;
  t[63] === o
    ? (q = t[64])
    : ((q = (0, Sa.jsx)(n, { color: `secondary`, onClick: o, children: te })), (t[63] = o), (t[64] = q));
  let ne;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, Sa.jsx)(g, {
        id: `restricted.environmentSetup.configuration.dialog.save`,
        defaultMessage: `Save`,
        description: `Apply dialog edits to the cloud environment configuration being edited`,
      })),
      (t[65] = ne))
    : (ne = t[65]);
  let J;
  t[66] === S
    ? (J = t[67])
    : ((J = (0, Sa.jsx)(n, { color: `primary`, type: `submit`, disabled: S, children: ne })),
      (t[66] = S),
      (t[67] = J));
  let ie;
  t[68] !== K || t[69] !== q || t[70] !== J
    ? ((ie = (0, Sa.jsx)(ye, { children: (0, Sa.jsxs)(je, { children: [K, q, J] }) })),
      (t[68] = K),
      (t[69] = q),
      (t[70] = J),
      (t[71] = ie))
    : (ie = t[71]);
  let ae;
  t[72] !== B || t[73] !== G || t[74] !== w || t[75] !== ie || t[76] !== O
    ? ((ae = (0, Sa.jsxs)(Se, { as: `form`, size: `viewport`, onSubmit: w, children: [O, B, G, ie] })),
      (t[72] = B),
      (t[73] = G),
      (t[74] = w),
      (t[75] = ie),
      (t[76] = O),
      (t[77] = ae))
    : (ae = t[77]);
  let oe;
  return (
    t[78] !== C || t[79] !== ae
      ? ((oe = (0, Sa.jsx)(be, { open: !0, onOpenChange: C, children: ae })),
        (t[78] = C),
        (t[79] = ae),
        (t[80] = oe))
      : (oe = t[80]),
    oe
  );
}
function ya(e) {
  return (0, Sa.jsx)(Zt, {
    appearance: `secondary`,
    href: `https://tailscale.com/docs/features/access-control/auth-keys`,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
    children: e,
  });
}
var ba, xa, Sa;
function Ca() {
  return (Ca = e(() => {
    ((ba = X()), (xa = Ue()), Y(), Ne(), Le(), de(), Jt(), R(), Ze(), (Sa = ze()));
  }))();
}
function wa(e) {
  let t = (0, Da.c)(153),
    { configuration: r, isReadOnly: i, isVisible: a, onDraftSaved: o, onPendingChange: s, ref: c } = e,
    l = a === void 0 || a,
    u = ee(),
    d = (0, Oa.useId)(),
    f = b?.environmentConfigs,
    p = xe(),
    [m, h] = (0, Oa.useState)(``),
    [_, v] = (0, Oa.useState)(!1),
    [y, x] = (0, Oa.useState)(!1),
    S;
  t[0] === m
    ? (S = t[1])
    : ((S = m.trim().length <= 4096 && /^tskey-auth-[A-Za-z0-9-]+$/.test(m.trim())), (t[0] = m), (t[1] = S));
  let C = S,
    [T, E] = (0, Oa.useState)(!1),
    [D, k] = (0, Oa.useState)(!1),
    [A, j] = (0, Oa.useState)(!1),
    [M, P] = (0, Oa.useState)(null),
    F;
  t[2] !== r.accountId || t[3] !== r.configId || t[4] !== r.draftId || t[5] !== r.userId
    ? ((F = Ht(r.accountId, r.userId, r.configId, r.draftId)),
      (t[2] = r.accountId),
      (t[3] = r.configId),
      (t[4] = r.draftId),
      (t[5] = r.userId),
      (t[6] = F))
    : (F = t[6]);
  let I = F,
    L;
  t[7] !== r.accountId || t[8] !== r.configId || t[9] !== r.draftId || t[10] !== r.userId
    ? ((L = [`environment-vpn`, r.accountId, r.userId, r.configId, r.draftId]),
      (t[7] = r.accountId),
      (t[8] = r.configId),
      (t[9] = r.draftId),
      (t[10] = r.userId),
      (t[11] = L))
    : (L = t[11]);
  let R = L,
    z;
  t[12] !== r.accountId || t[13] !== r.configId || t[14] !== r.draftId || t[15] !== r.userId
    ? ((z = { accountId: r.accountId, userId: r.userId, configId: r.configId, draftId: r.draftId }),
      (t[12] = r.accountId),
      (t[13] = r.configId),
      (t[14] = r.draftId),
      (t[15] = r.userId),
      (t[16] = z))
    : (z = t[16]);
  let B = z,
    V;
  t[17] === B
    ? (V = t[18])
    : ((V = async () => {
        if (f?.requestVpn == null) throw Error(`unavailable`);
        let e = await f.requestVpn({ ...B, method: `GET` });
        if (!e.ok) throw Error(e.error);
        return e.data;
      }),
      (t[17] = B),
      (t[18] = V));
  let H;
  t[19] !== R || t[20] !== V
    ? ((H = {
        queryKey: R,
        enabled: f?.requestVpn != null,
        staleTime: 0,
        refetchOnWindowFocus: !1,
        refetchOnMount: `always`,
        retry: !1,
        queryFn: V,
      }),
      (t[19] = R),
      (t[20] = V),
      (t[21] = H))
    : (H = t[21]);
  let { data: U, isPending: W, isError: G, isFetching: K, refetch: q } = te(H),
    ne;
  t[22] !== I ||
  t[23] !== r.accountId ||
  t[24] !== r.configId ||
  t[25] !== r.draftId ||
  t[26] !== r.userId ||
  t[27] !== o ||
  t[28] !== p
    ? ((ne = async () => {
        if (f == null) return null;
        try {
          let e = await zt(f, r.accountId, r.userId, r.configId, r.draftId);
          return (p.setQueryData(I, e), o?.(e), e);
        } catch {
          return null;
        }
      }),
      (t[22] = I),
      (t[23] = r.accountId),
      (t[24] = r.configId),
      (t[25] = r.draftId),
      (t[26] = r.userId),
      (t[27] = o),
      (t[28] = p),
      (t[29] = ne))
    : (ne = t[29]);
  let J = ne,
    re;
  t[30] !== m ||
  t[31] !== r.draftId ||
  t[32] !== U ||
  t[33] !== s ||
  t[34] !== p ||
  t[35] !== R ||
  t[36] !== B
    ? ((re = async (e) => {
        let t = f,
          n = t?.requestVpn;
        if (t == null || n == null || U == null) throw Error(`unavailable`);
        let i = m.trim();
        (h(``), v(!1), s?.(!1, !0));
        let a = await n({ ...B, method: `GET` });
        if (!a.ok) throw Error(`not-saved`);
        if ((p.setQueryData(R, a.data), e)) {
          if (U.connection?.id !== a.data.connection?.id || U.connection?.etag !== a.data.connection?.etag)
            throw Error(`changed`);
          let e = await t.request({
            ...B,
            method: `PATCH`,
            body: {
              base_version_id: a.data.base_version_id,
              expected_revision: a.data.draft_revision ?? void 0,
              vpn_connection_id: ``,
            },
          });
          if (!e.ok) throw Error(e.error);
          return null;
        }
        {
          if (U.connection?.id !== a.data.connection?.id || U.connection?.etag !== a.data.connection?.etag)
            throw Error(`changed`);
          let e = (e) =>
              n({
                ...B,
                method: `POST`,
                body: {
                  provider: `tailscale`,
                  auth_method: `auth_key`,
                  connection_id: r.draftId == null ? e.connection?.id : void 0,
                  expected_etag: r.draftId == null ? e.connection?.etag : void 0,
                  auth_key: i,
                  base_version_id: e.base_version_id,
                  expected_draft_revision: e.draft_revision ?? void 0,
                },
              }),
            t = await e(a.data);
          if (t.ok) return (p.setQueryData(R, t.data), t.data);
          if (t.status === 409 && a.data.connection == null) {
            let t = await n({ ...B, method: `GET` });
            if (!t.ok) throw Error(`not-saved`);
            if ((p.setQueryData(R, t.data), t.data.connection == null)) {
              let n = await e(t.data);
              if (n.ok) return (p.setQueryData(R, n.data), n.data);
              throw Error(n.status === 400 ? `invalid` : n.error);
            }
          }
          throw Error(t.status === 400 ? `invalid` : t.error);
        }
      }),
      (t[30] = m),
      (t[31] = r.draftId),
      (t[32] = U),
      (t[33] = s),
      (t[34] = p),
      (t[35] = R),
      (t[36] = B),
      (t[37] = re))
    : (re = t[37]);
  let ie;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = () => {
        P(null);
      }),
      (t[38] = ie))
    : (ie = t[38]);
  let ae;
  t[39] === q
    ? (ae = t[40])
    : ((ae = async (e, t) => {
        if (e.message === `refresh-failed` || e.message === `mismatch`) return;
        let n = await q();
        if ((E(n.isError), n.isError)) return;
        let r = `uncertain`;
        (e.message === `changed`
          ? (r = `changed`)
          : t
            ? (r = n.data?.connection == null ? null : `remove-failed`)
            : e.message === `invalid`
              ? (r = `invalid`)
              : (e.message === `not-saved` || n.data?.connection == null) && (r = `not-saved`),
          P(r));
      }),
      (t[39] = q),
      (t[40] = ae));
  let oe;
  t[41] !== q || t[42] !== J
    ? ((oe = async (e, t) => {
        P(null);
        let [n, r] = await Promise.all([q(), J()]);
        if ((E(n.isError), k(r == null), r == null || n.isError)) throw Error(`refresh-failed`);
        if (t ? n.data?.connection != null : n.data?.connection?.etag !== e?.connection?.etag)
          throw (P(`mismatch`), Error(`mismatch`));
        return r;
      }),
      (t[41] = q),
      (t[42] = J),
      (t[43] = oe))
    : (oe = t[43]);
  let se;
  t[44] !== ae || t[45] !== oe || t[46] !== re
    ? ((se = { retry: !1, mutationFn: re, onMutate: ie, onError: ae, onSuccess: oe }),
      (t[44] = ae),
      (t[45] = oe),
      (t[46] = re),
      (t[47] = se))
    : (se = t[47]);
  let { mutateAsync: ce, isPending: le } = w(se),
    ue;
  (t[48] !== I ||
  t[49] !== D ||
  t[50] !== U ||
  t[51] !== G ||
  t[52] !== W ||
  t[53] !== le ||
  t[54] !== ce ||
  t[55] !== T ||
  t[56] !== _ ||
  t[57] !== p ||
  t[58] !== C
    ? ((ue = () => ({
        save: async () => {
          if (le || W || G || T || D || U == null || (!_ && !C)) throw Error(`unavailable`);
          await ce(_);
          let e = p.getQueryData(I);
          if (e == null) throw Error(`refresh-failed`);
          return e;
        },
      })),
      (t[48] = I),
      (t[49] = D),
      (t[50] = U),
      (t[51] = G),
      (t[52] = W),
      (t[53] = le),
      (t[54] = ce),
      (t[55] = T),
      (t[56] = _),
      (t[57] = p),
      (t[58] = C),
      (t[59] = ue))
    : (ue = t[59]),
    (0, Oa.useImperativeHandle)(c, ue));
  let de;
  t[60] === U?.capabilities
    ? (de = t[61])
    : ((de = U?.capabilities.some(Ta)), (t[60] = U?.capabilities), (t[61] = de));
  let fe = de;
  if ((y && (!l || !fe || i || le || G) && x(!1), f?.requestVpn == null)) return null;
  let pe;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, Q.jsx)(g, {
        id: `restricted.environmentSetup.vpn.title`,
        defaultMessage: `VPN`,
        description: `Section for a cloud environment VPN connection`,
      })),
      (t[62] = pe))
    : (pe = t[62]);
  let me = pe;
  if (!fe) {
    let e;
    t[63] !== K || t[64] !== W || t[65] !== q
      ? ((e = W
          ? null
          : (0, Q.jsx)(n, {
              color: `ghost`,
              size: `settingsAction`,
              disabled: K,
              onClick: () => void q(),
              children: (0, Q.jsx)(g, {
                id: `restricted.environmentSetup.vpn.refresh`,
                defaultMessage: `Refresh`,
                description: `Reloads saved VPN key metadata and environment settings after an automatic refresh fails`,
              }),
            })),
        (t[63] = K),
        (t[64] = W),
        (t[65] = q),
        (t[66] = e))
      : (e = t[66]);
    let r = G ? `alert` : `status`,
      i;
    t[67] === W
      ? (i = t[68])
      : ((i =
          W &&
          (0, Q.jsx)(g, {
            id: `restricted.environmentSetup.vpn.loading`,
            defaultMessage: `Loading saved key status…`,
            description: `Status while loading whether a VPN key is attached to the environment`,
          })),
        (t[67] = W),
        (t[68] = i));
    let a;
    t[69] !== G || t[70] !== W
      ? ((a =
          !W &&
          G &&
          (0, Q.jsx)(g, {
            id: `restricted.environmentSetup.vpn.loadFailed`,
            defaultMessage: `Couldn't refresh saved key status`,
            description: `The latest VPN key attachment metadata could not be loaded`,
          })),
        (t[69] = G),
        (t[70] = W),
        (t[71] = a))
      : (a = t[71]);
    let o;
    t[72] !== G || t[73] !== W
      ? ((o =
          !W &&
          !G &&
          (0, Q.jsx)(g, {
            id: `environmentSetup.vpn.unsupported`,
            defaultMessage: `VPN isn’t available for this environment`,
            description: `The environment service does not offer a supported VPN authentication method`,
          })),
        (t[72] = G),
        (t[73] = W),
        (t[74] = o))
      : (o = t[74]);
    let s;
    t[75] !== r || t[76] !== i || t[77] !== a || t[78] !== o
      ? ((s = (0, Q.jsxs)(`p`, {
          className: `text-sm text-secondary select-none`,
          role: r,
          children: [i, a, o],
        })),
        (t[75] = r),
        (t[76] = i),
        (t[77] = a),
        (t[78] = o),
        (t[79] = s))
      : (s = t[79]);
    let c;
    return (
      t[80] !== e || t[81] !== s
        ? ((c = (0, Q.jsx)(Fi, { title: me, actions: e, children: s })),
          (t[80] = e),
          (t[81] = s),
          (t[82] = c))
        : (c = t[82]),
      c
    );
  }
  let ge = i || le || W || G || T || D || !fe,
    Y = U?.connection?.configured === !0 && !_,
    _e = G || T || D || M != null || (m.length > 0 && !C),
    ve;
  t[83] !== U?.connection ||
  t[84] !== ge ||
  t[85] !== u ||
  t[86] !== i ||
  t[87] !== T ||
  t[88] !== s ||
  t[89] !== _
    ? ((ve =
        U?.connection != null && !_ && !T && !i
          ? (0, Q.jsx)(Me, {
              cloneCustomTrigger: !0,
              tooltipContent: (0, Q.jsx)(g, {
                id: `restricted.environmentSetup.vpn.removeHelp`,
                defaultMessage: `Removes VPN from this draft. Published versions may still use the saved key.`,
                description: `Clarifies that removing the draft VPN attachment does not delete credentials needed by older published versions`,
              }),
              children: (0, Q.jsx)(n, {
                "aria-label": u.formatMessage({
                  id: `restricted.environmentSetup.vpn.remove`,
                  defaultMessage: `Remove VPN from draft`,
                  description: `Detaches the VPN from the draft without deleting its stored credentials`,
                }),
                color: `ghost`,
                size: `icon`,
                type: `button`,
                disabled: ge,
                onClick: () => {
                  (h(``), v(!0), x(!1), P(null), s?.(!0, !0));
                },
                children: (0, Q.jsx)(O, { asset: N }),
              }),
            })
          : null),
      (t[83] = U?.connection),
      (t[84] = ge),
      (t[85] = u),
      (t[86] = i),
      (t[87] = T),
      (t[88] = s),
      (t[89] = _),
      (t[90] = ve))
    : (ve = t[90]);
  let ye = ve,
    be;
  t[91] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, Q.jsxs)(`span`, {
        className: `flex items-center gap-2.5`,
        children: [
          (0, Q.jsx)(Ea, {}),
          (0, Q.jsx)(g, {
            id: `restricted.environmentSetup.vpn.provider`,
            defaultMessage: `Tailscale`,
            description: `Name of the Tailscale VPN provider`,
          }),
        ],
      })),
      (t[91] = be))
    : (be = t[91]);
  let Se;
  t[92] === _
    ? (Se = t[93])
    : ((Se =
        _ &&
        (0, Q.jsx)(g, {
          id: `environmentSetup.vpn.removalPending`,
          defaultMessage: `Removal pending`,
          description: `The VPN will be detached when the environment is saved`,
        })),
      (t[92] = _),
      (t[93] = Se));
  let Ce;
  t[94] !== m.length || t[95] !== _
    ? ((Ce =
        !_ &&
        m.length > 0 &&
        (0, Q.jsx)(g, {
          id: `environmentSetup.vpn.keyEntered`,
          defaultMessage: `Key entered`,
          description: `A Tailscale key has been entered but the environment has not been saved yet`,
        })),
      (t[94] = m.length),
      (t[95] = _),
      (t[96] = Ce))
    : (Ce = t[96]);
  let we;
  t[97] !== m.length || t[98] !== Y || t[99] !== _
    ? ((we =
        !_ &&
        m.length === 0 &&
        (Y
          ? (0, Q.jsx)(g, {
              id: `environmentSetup.vpn.configured`,
              defaultMessage: `Configured`,
              description: `A Tailscale key is attached to the environment; this does not indicate a tested connection`,
            })
          : (0, Q.jsx)(g, {
              id: `environmentSetup.vpn.notSet`,
              defaultMessage: `Not set`,
              description: `No Tailscale key is attached to the environment`,
            }))),
      (t[97] = m.length),
      (t[98] = Y),
      (t[99] = _),
      (t[100] = we))
    : (we = t[100]);
  let Te;
  t[101] !== Se || t[102] !== Ce || t[103] !== we
    ? ((Te = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 items-center justify-between gap-3`,
        children: [be, (0, Q.jsxs)(`span`, { className: `truncate text-secondary`, children: [Se, Ce, we] })],
      })),
      (t[101] = Se),
      (t[102] = Ce),
      (t[103] = we),
      (t[104] = Te))
    : (Te = t[104]);
  let Ee;
  t[105] !== ge || t[106] !== s || t[107] !== _
    ? ((Ee = _
        ? (0, Q.jsx)(n, {
            color: `ghost`,
            size: `compact`,
            type: `button`,
            disabled: ge,
            onClick: () => {
              (v(!1), s?.(!1, !0));
            },
            children: (0, Q.jsx)(g, {
              id: `restricted.environmentSetup.vpn.undoRemove`,
              defaultMessage: `Undo removal`,
              description: `Restores a VPN attachment staged for removal before the environment is saved`,
            }),
          })
        : null),
      (t[105] = ge),
      (t[106] = s),
      (t[107] = _),
      (t[108] = Ee))
    : (Ee = t[108]);
  let De;
  t[109] === u
    ? (De = t[110])
    : ((De = u.formatMessage({
        id: `environmentSetup.vpn.editKey`,
        defaultMessage: `Edit Tailscale auth key`,
        description: `Opens the dialog for entering or replacing the Tailscale VPN key`,
      })),
      (t[109] = u),
      (t[110] = De));
  let Oe, ke;
  t[111] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = () => x(!0)), (ke = (0, Q.jsx)(he, {})), (t[111] = Oe), (t[112] = ke))
    : ((Oe = t[111]), (ke = t[112]));
  let Ae;
  t[113] !== ge || t[114] !== De
    ? ((Ae = (0, Q.jsx)(n, {
        "aria-label": De,
        color: `ghost`,
        size: `icon`,
        type: `button`,
        disabled: ge,
        onClick: Oe,
        children: ke,
      })),
      (t[113] = ge),
      (t[114] = De),
      (t[115] = Ae))
    : (Ae = t[115]);
  let je;
  t[116] !== Ee || t[117] !== Ae
    ? ((je = (0, Q.jsxs)(Q.Fragment, { children: [Ee, Ae] })), (t[116] = Ee), (t[117] = Ae), (t[118] = je))
    : (je = t[118]);
  let Ne;
  t[119] !== Te || t[120] !== je
    ? ((Ne = (0, Q.jsx)(Fe, {
        className: `select-none`,
        controlSizing: `content`,
        inset: !1,
        variant: `featured`,
        size: `compact`,
        label: Te,
        control: je,
      })),
      (t[119] = Te),
      (t[120] = je),
      (t[121] = Ne))
    : (Ne = t[121]);
  let Pe;
  t[122] !== m ||
  t[123] !== Y ||
  t[124] !== ge ||
  t[125] !== y ||
  t[126] !== l ||
  t[127] !== s ||
  t[128] !== ye
    ? ((Pe =
        y && !ge && l
          ? (0, Q.jsx)(va, {
              configured: Y,
              initialValue: m,
              removeControl: ye,
              onClose: () => x(!1),
              onSave: (e) => {
                (h(e), v(!1), P(null), s?.(e.length > 0, !0), x(!1));
              },
            })
          : null),
      (t[122] = m),
      (t[123] = Y),
      (t[124] = ge),
      (t[125] = y),
      (t[126] = l),
      (t[127] = s),
      (t[128] = ye),
      (t[129] = Pe))
    : (Pe = t[129]);
  let Ie;
  t[130] !== m.length ||
  t[131] !== D ||
  t[132] !== d ||
  t[133] !== _e ||
  t[134] !== G ||
  t[135] !== T ||
  t[136] !== M ||
  t[137] !== C
    ? ((Ie = _e
        ? (0, Q.jsxs)(`p`, {
            id: d,
            className: `py-2 text-sm text-secondary select-none`,
            role: `alert`,
            children: [
              !G &&
                !T &&
                !D &&
                m.length > 0 &&
                !C &&
                (0, Q.jsx)(g, {
                  id: `restricted.environmentSetup.vpn.invalidKeyFormat`,
                  defaultMessage: `Enter a Tailscale auth key starting with tskey-auth- and containing only letters, numbers, or hyphens`,
                  description: `Shown before saving when a Tailscale auth key has an invalid prefix, character, or length`,
                }),
              G &&
                (0, Q.jsx)(g, {
                  id: `restricted.environmentSetup.vpn.loadFailed`,
                  defaultMessage: `Couldn't refresh saved key status`,
                  description: `The latest VPN key attachment metadata could not be loaded`,
                }),
              !G &&
                T &&
                (0, Q.jsx)(g, {
                  id: `restricted.environmentSetup.vpn.refreshFailed`,
                  defaultMessage: `Couldn't confirm the saved key status after the change`,
                  description: `The VPN change finished but the automatic read of saved key metadata failed`,
                }),
              !G &&
                !T &&
                D &&
                (0, Q.jsx)(g, {
                  id: `restricted.environmentSetup.vpn.configRefreshFailed`,
                  defaultMessage: `VPN change saved, but the environment settings couldn't refresh`,
                  description: `The VPN change succeeded but the separate environment configuration refresh failed`,
                }),
              !G &&
                !T &&
                !D &&
                M === `not-saved` &&
                (0, Q.jsx)(g, {
                  id: `restricted.environmentSetup.vpn.notSaved`,
                  defaultMessage: `Key wasn't saved. Paste it again and retry`,
                  description: `No VPN key is attached after an attempted key save`,
                }),
              !G &&
                !T &&
                !D &&
                M === `invalid` &&
                (0, Q.jsx)(g, {
                  id: `restricted.environmentSetup.vpn.invalidKey`,
                  defaultMessage: `Couldn't save key. Check that it's a Tailscale auth key and try again`,
                  description: `The VPN key save request was rejected as invalid`,
                }),
              !G &&
                !T &&
                !D &&
                M === `changed` &&
                (0, Q.jsx)(g, {
                  id: `restricted.environmentSetup.vpn.changed`,
                  defaultMessage: `Saved key settings changed. Review them before saving again`,
                  description: `The saved VPN connection changed between opening and submitting the key field`,
                }),
              !G &&
                !T &&
                !D &&
                M === `uncertain` &&
                (0, Q.jsx)(g, {
                  id: `restricted.environmentSetup.vpn.keyUncertain`,
                  defaultMessage: `A key is configured, but we couldn't confirm whether the new key was saved. Re-enter a known key if needed`,
                  description: `A failed replacement may have updated the key, but saved metadata cannot identify which key is stored`,
                }),
              !G &&
                !T &&
                !D &&
                M === `remove-failed` &&
                (0, Q.jsx)(g, {
                  id: `restricted.environmentSetup.vpn.removeFailed`,
                  defaultMessage: `VPN is still attached to this draft. Try removing it again`,
                  description: `The VPN removal failed and a fresh read still shows an attached connection`,
                }),
              !G &&
                !T &&
                !D &&
                M === `mismatch` &&
                (0, Q.jsx)(g, {
                  id: `restricted.environmentSetup.vpn.statusMismatch`,
                  defaultMessage: `The refreshed key status didn't match the saved change`,
                  description: `The VPN save or removal succeeded but a fresh metadata read showed a different attachment`,
                }),
            ],
          })
        : null),
      (t[130] = m.length),
      (t[131] = D),
      (t[132] = d),
      (t[133] = _e),
      (t[134] = G),
      (t[135] = T),
      (t[136] = M),
      (t[137] = C),
      (t[138] = Ie))
    : (Ie = t[138]);
  let Le;
  t[139] !== D ||
  t[140] !== G ||
  t[141] !== K ||
  t[142] !== A ||
  t[143] !== le ||
  t[144] !== T ||
  t[145] !== q ||
  t[146] !== J
    ? ((Le =
        G || T || D
          ? (0, Q.jsx)(`div`, {
              className: `flex justify-end gap-2`,
              children: (0, Q.jsx)(n, {
                color: `secondary`,
                size: `compact`,
                type: `button`,
                disabled: le || K,
                loading: A,
                onClick: () => {
                  (h(``),
                    j(!0),
                    Promise.all([q(), D ? J() : Promise.resolve(null)])
                      .then((e) => {
                        let [t, n] = e;
                        (E(t.isError), k(D && n == null));
                      })
                      .finally(() => j(!1)));
                },
                children: (0, Q.jsx)(g, {
                  id: `restricted.environmentSetup.vpn.refresh`,
                  defaultMessage: `Refresh`,
                  description: `Reloads saved VPN key metadata and environment settings after an automatic refresh fails`,
                }),
              }),
            })
          : null),
      (t[139] = D),
      (t[140] = G),
      (t[141] = K),
      (t[142] = A),
      (t[143] = le),
      (t[144] = T),
      (t[145] = q),
      (t[146] = J),
      (t[147] = Le))
    : (Le = t[147]);
  let X;
  return (
    t[148] !== Ne || t[149] !== Pe || t[150] !== Ie || t[151] !== Le
      ? ((X = (0, Q.jsxs)(Fi, { title: me, children: [Ne, Pe, Ie, Le] })),
        (t[148] = Ne),
        (t[149] = Pe),
        (t[150] = Ie),
        (t[151] = Le),
        (t[152] = X))
      : (X = t[152]),
    X
  );
}
function Ta(e) {
  let { provider: t, auth_methods: n } = e;
  return t === `tailscale` && n.includes(`auth_key`);
}
function Ea() {
  let e = (0, Da.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsxs)(`svg`, {
          width: `16`,
          height: `16`,
          viewBox: `0 0 16 16`,
          fill: `currentColor`,
          "aria-hidden": `true`,
          children: [
            (0, Q.jsx)(`circle`, { cx: `2.5`, cy: `2.5`, r: `1.5`, opacity: `0.2` }),
            (0, Q.jsx)(`circle`, { cx: `8`, cy: `2.5`, r: `1.5`, opacity: `0.2` }),
            (0, Q.jsx)(`circle`, { cx: `13.5`, cy: `2.5`, r: `1.5`, opacity: `0.2` }),
            (0, Q.jsx)(`circle`, { cx: `2.5`, cy: `8`, r: `1.5` }),
            (0, Q.jsx)(`circle`, { cx: `8`, cy: `8`, r: `1.5` }),
            (0, Q.jsx)(`circle`, { cx: `13.5`, cy: `8`, r: `1.5`, opacity: `0.2` }),
            (0, Q.jsx)(`circle`, { cx: `2.5`, cy: `13.5`, r: `1.5`, opacity: `0.2` }),
            (0, Q.jsx)(`circle`, { cx: `8`, cy: `13.5`, r: `1.5` }),
            (0, Q.jsx)(`circle`, { cx: `13.5`, cy: `13.5`, r: `1.5`, opacity: `0.2` }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Da, Oa, Q;
function ka() {
  return (ka = e(() => {
    ((Da = X()),
      ne(),
      _(),
      q(),
      Pe(),
      (Oa = Ue()),
      Y(),
      Ne(),
      A(),
      R(),
      le(),
      De(),
      ge(),
      Ft(),
      zi(),
      Ca(),
      (Q = ze()));
  }))();
}
function Aa(e) {
  let t = (0, Ia.c)(103),
    {
      configuration: r,
      draft: i,
      scriptBaseline: a,
      isReadOnly: o,
      readOnlyTooltip: s,
      onDraftChange: c,
      onDraftSaved: l,
      vpnRef: d,
      onVpnPendingChange: f,
      panelState: p,
      secrets: m,
      config: h,
      serverNetworkPolicy: _,
      setSecrets: v,
      issues: x,
      environmentVariables: C,
      setEnvironmentVariables: w,
      revealConnections: T,
      section: D,
    } = e,
    A;
  t[0] === x ? (A = t[1]) : ((A = x === void 0 ? [] : x), (t[0] = x), (t[1] = A));
  let j = A,
    M = T !== void 0 && T,
    N = W(Nt),
    P = ee(),
    F;
  t[2] === P
    ? (F = t[3])
    : ((F = P.formatMessage({
        id: `restricted.environmentSetup.configuration.network.toggle`,
        defaultMessage: `Allow Codex to access internet`,
        description: `Accessible label for enabling internet access in a mocked cloud environment settings panel`,
      })),
      (t[2] = P),
      (t[3] = F));
  let I = F,
    L = (h?.draft ?? h)?.tcp_network_access,
    R;
  t[4] === L?.ip_ranges ? (R = t[5]) : ((R = L?.ip_ranges ?? []), (t[4] = L?.ip_ranges), (t[5] = R));
  let B;
  t[6] === L?.domains ? (B = t[7]) : ((B = L?.domains ?? []), (t[6] = L?.domains), (t[7] = B));
  let V;
  t[8] !== R || t[9] !== B ? ((V = [...R, ...B]), (t[8] = R), (t[9] = B), (t[10] = V)) : (V = t[10]);
  let H = V,
    U = W(gt),
    G = (0, La.useId)(),
    K = (0, La.useId)(),
    te;
  t[11] === M ? (te = t[12]) : ((te = { revealConnections: M, open: M }), (t[11] = M), (t[12] = te));
  let [q, ne] = (0, La.useState)(te);
  q.revealConnections !== M && ne({ revealConnections: M, open: q.open || M });
  let J;
  t[13] === j ? (J = t[14]) : ((J = j.filter(Fa)), (t[13] = j), (t[14] = J));
  let re = J,
    ie = q.open || M || re.length > 0,
    [ae, oe] = (0, La.useState)(null),
    se;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, $.jsx)(g, {
        id: `restricted.environmentSetup.configuration.network.preset.common`,
        defaultMessage: `Package managers`,
        description: `Package manager cloud environment network preset`,
      })),
      (t[15] = se))
    : (se = t[15]);
  let ce = se;
  if (i.networkPreset === `all`) {
    let e;
    (t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(g, {
          id: `restricted.environmentSetup.configuration.network.preset.all`,
          defaultMessage: `All (unrestricted)`,
          description: `Unrestricted cloud environment network preset`,
        })),
        (t[16] = e))
      : (e = t[16]),
      (ce = e));
  } else if (i.networkPreset === `none`) {
    let e;
    (t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(g, {
          id: `restricted.environmentSetup.configuration.network.preset.none`,
          defaultMessage: `Custom domains only`,
          description: `Cloud environment network preset that allows only individually configured domains`,
        })),
        (t[17] = e))
      : (e = t[17]),
      (ce = e));
  }
  o && ae != null && oe(null);
  let le;
  t[18] !== r || t[19] !== i || t[20] !== j || t[21] !== p || t[22] !== D
    ? ((le =
        D == null || D === `repositories`
          ? (0, $.jsx)(`div`, {
              "data-environment-section": `repositories`,
              children: (0, $.jsx)($i, {
                configuration: r,
                draft: i,
                panelState: p,
                issues: j,
                showHeading: D == null,
              }),
            })
          : null),
      (t[18] = r),
      (t[19] = i),
      (t[20] = j),
      (t[21] = p),
      (t[22] = D),
      (t[23] = le))
    : (le = t[23]);
  let ue;
  t[24] !== h?.tcp_network_access ||
  t[25] !== r?.reviewedDraft?.tcp_network_access ||
  t[26] !== D ||
  t[27] !== H ||
  t[28] !== L
    ? ((ue =
        D === `tcpAccess` ||
        (D == null &&
          (L != null || h?.tcp_network_access != null || r?.reviewedDraft?.tcp_network_access != null))
          ? (0, $.jsx)(`section`, {
              className: `flex flex-col`,
              "data-environment-section": `tcpAccess`,
              children: (0, $.jsx)(yt.Content, {
                children: (0, $.jsx)(Te, {
                  children: (0, $.jsx)(Fe, {
                    label: (0, $.jsx)(g, { ...Gr.tcpAccess }),
                    description: (0, $.jsxs)($.Fragment, {
                      children: [
                        (0, $.jsx)(`p`, {
                          children:
                            H.length > 0
                              ? H.join(`, `)
                              : (0, $.jsx)(g, {
                                  id: `environmentSetup.configuration.tcpAccess.empty`,
                                  defaultMessage: `No TCP destinations allowed`,
                                  description: `Read-only summary when a cloud environment has no TCP destination grants`,
                                }),
                        }),
                        H.length > 0
                          ? (0, $.jsx)(g, {
                              id: `environmentSetup.configuration.tcpAccess.apiOnly`,
                              defaultMessage: `These grants allow all TCP ports on the listed destinations. TCP access is configured through the API. Clear these grants before disconnecting the VPN`,
                              description: `Explains that TCP destination grants allow all ports and must be edited through the API and cleared before removing the environment VPN connection`,
                            })
                          : null,
                      ],
                    }),
                    control: null,
                  }),
                }),
              }),
            })
          : null),
      (t[24] = h?.tcp_network_access),
      (t[25] = r?.reviewedDraft?.tcp_network_access),
      (t[26] = D),
      (t[27] = H),
      (t[28] = L),
      (t[29] = ue))
    : (ue = t[29]);
  let de;
  t[30] !== i || t[31] !== o || t[32] !== c || t[33] !== s || t[34] !== a || t[35] !== D
    ? ((de =
        D == null || D === `scripts`
          ? (0, $.jsx)(`div`, {
              "data-environment-section": `scripts`,
              children: (0, $.jsx)(ua, {
                baseline: a,
                draft: i,
                isReadOnly: o,
                readOnlyTooltip: s,
                onDraftChange: c,
              }),
            })
          : null),
      (t[30] = i),
      (t[31] = o),
      (t[32] = c),
      (t[33] = s),
      (t[34] = a),
      (t[35] = D),
      (t[36] = de))
    : (de = t[36]);
  let fe;
  t[37] !== h ||
  t[38] !== r ||
  t[39] !== i.networkDomains ||
  t[40] !== i.networkEnabled ||
  t[41] !== i.networkHttpsMethods ||
  t[42] !== i.networkPreset ||
  t[43] !== P ||
  t[44] !== o ||
  t[45] !== j ||
  t[46] !== I ||
  t[47] !== ce ||
  t[48] !== c ||
  t[49] !== s ||
  t[50] !== K ||
  t[51] !== m ||
  t[52] !== D ||
  t[53] !== _
    ? ((fe =
        D == null || D === `network` || D === `secrets`
          ? (0, $.jsx)(yt, {
              children: (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-6`,
                children: [
                  D == null || D === `network`
                    ? (0, $.jsxs)(`section`, {
                        className: `flex flex-col`,
                        "data-environment-section": `network`,
                        children: [
                          (0, $.jsx)(yt.Header, {
                            className: `select-none`,
                            size: `base`,
                            spacing: `compact`,
                            title: (0, $.jsx)(g, {
                              id: `restricted.environmentSetup.configuration.network.title`,
                              defaultMessage: `Internet access`,
                              description: `Heading for internet access controls in a mocked cloud environment settings panel`,
                            }),
                          }),
                          (0, $.jsxs)(yt.Content, {
                            children: [
                              r == null ? null : (0, $.jsx)(ji, { configuration: r }),
                              (0, $.jsxs)(Te, {
                                children: [
                                  (0, $.jsx)(Fe, {
                                    className: `select-none`,
                                    controlSizing: `content`,
                                    variant: `featured`,
                                    size: `compact`,
                                    control: (0, $.jsx)(qr, {
                                      label: I,
                                      reason: o ? s : null,
                                      children: (0, $.jsx)(_e, {
                                        ariaLabel: I,
                                        checked: i.networkEnabled === !0,
                                        disabled: o,
                                        onChange: (e) => {
                                          c({
                                            networkEnabled: e,
                                            networkPreset: i.networkPreset ?? `package_managers`,
                                          });
                                        },
                                      }),
                                    }),
                                    label: (0, $.jsx)(g, {
                                      id: `restricted.environmentSetup.configuration.network.label`,
                                      defaultMessage: `Allow Codex to access internet`,
                                      description: `Label for the internet access toggle in a mocked cloud environment settings panel`,
                                    }),
                                  }),
                                  i.networkEnabled === !0
                                    ? (0, $.jsx)(Fe, {
                                        className: `select-none`,
                                        controlSizing: `content`,
                                        variant: `featured`,
                                        size: `compact`,
                                        control: (0, $.jsxs)(u, {
                                          contentWidth: `menu`,
                                          triggerButton: (0, $.jsxs)(vn, {
                                            tooltipContent: o ? s : null,
                                            "aria-label": P.formatMessage({
                                              id: `restricted.environmentSetup.configuration.network.preset.trigger`,
                                              defaultMessage: `Allow domains`,
                                              description: `Accessible label for selecting the cloud environment internet access preset`,
                                            }),
                                            color: `outline`,
                                            disabled: o,
                                            size: `settingsAction`,
                                            children: [ce, (0, $.jsx)(E, {})],
                                          }),
                                          children: [
                                            (0, $.jsx)(z.Item, {
                                              disabled: o,
                                              onSelect: () => c({ networkPreset: `all` }),
                                              children: (0, $.jsx)(g, {
                                                id: `restricted.environmentSetup.configuration.network.preset.all`,
                                                defaultMessage: `All (unrestricted)`,
                                                description: `Unrestricted cloud environment network preset`,
                                              }),
                                            }),
                                            (0, $.jsx)(z.Item, {
                                              disabled: o,
                                              onSelect: () => c({ networkPreset: `package_managers` }),
                                              children: (0, $.jsx)(g, {
                                                id: `restricted.environmentSetup.configuration.network.preset.common`,
                                                defaultMessage: `Package managers`,
                                                description: `Package manager cloud environment network preset`,
                                              }),
                                            }),
                                            (0, $.jsx)(z.Item, {
                                              disabled: o,
                                              onSelect: () => c({ networkPreset: `none` }),
                                              children: (0, $.jsx)(g, {
                                                id: `restricted.environmentSetup.configuration.network.preset.none`,
                                                defaultMessage: `Custom domains only`,
                                                description: `Cloud environment network preset that allows only individually configured domains`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        label: (0, $.jsxs)(`span`, {
                                          className: `flex items-center gap-1`,
                                          children: [
                                            (0, $.jsx)(g, {
                                              id: `restricted.environmentSetup.configuration.network.allowlist`,
                                              defaultMessage: `Allow domains`,
                                              description: `Label for choosing the allowed domain preset for cloud environment internet access`,
                                            }),
                                            (0, $.jsx)(Me, {
                                              cloneCustomTrigger: !0,
                                              tooltipContent: (0, $.jsx)(g, {
                                                id: `environmentSetup.configuration.network.presets.tooltip`,
                                                defaultMessage: `View domain presets`,
                                                description: `Tooltip for the link to documentation listing the domains allowed by each network preset`,
                                              }),
                                              children: (0, $.jsx)(n, {
                                                "aria-label": P.formatMessage({
                                                  id: `environmentSetup.configuration.network.presets.about`,
                                                  defaultMessage: `About allowed domain presets`,
                                                  description: `Accessible label for the information button that opens documentation about allowed domain presets`,
                                                }),
                                                color: `ghostSecondary`,
                                                size: `inline`,
                                                type: `button`,
                                                onClick: Pa,
                                                children: (0, $.jsx)(O, { asset: S }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      })
                                    : null,
                                  i.networkEnabled === !0 && i.networkPreset !== `all`
                                    ? (0, $.jsx)(Vn, {
                                        disabled: o,
                                        disabledTooltip: s,
                                        domains: i.networkDomains ?? [],
                                        issues: j.filter(Na),
                                        onChange: (e) => c({ networkDomains: e }),
                                      })
                                    : null,
                                  _ == null
                                    ? (0, $.jsx)(Fe, {
                                        className: `select-none`,
                                        controlSizing: `content`,
                                        variant: `featured`,
                                        size: `compact`,
                                        control: (0, $.jsxs)(u, {
                                          contentWidth: `menu`,
                                          triggerButton: (0, $.jsxs)(vn, {
                                            tooltipContent: o ? s : null,
                                            "aria-label": P.formatMessage({
                                              id: `restricted.environmentSetup.configuration.network.methods.trigger`,
                                              defaultMessage: `Allowed HTTPS methods`,
                                              description: `Accessible label for choosing simulated cloud environment HTTPS methods`,
                                            }),
                                            color: `outline`,
                                            disabled: o || i.networkEnabled !== !0,
                                            size: `settingsAction`,
                                            children: [
                                              i.networkHttpsMethods == null || i.networkHttpsMethods === `all`
                                                ? (0, $.jsx)(g, {
                                                    id: `restricted.environmentSetup.configuration.network.methods.all`,
                                                    defaultMessage: `All`,
                                                    description: `Option allowing all HTTPS methods in a simulated cloud environment`,
                                                  })
                                                : i.networkHttpsMethods,
                                              (0, $.jsx)(E, {}),
                                            ],
                                          }),
                                          children: [
                                            (0, $.jsx)(z.Item, {
                                              disabled: o,
                                              onSelect: () => c({ networkHttpsMethods: `all` }),
                                              children: (0, $.jsx)(g, {
                                                id: `restricted.environmentSetup.configuration.network.methods.all`,
                                                defaultMessage: `All`,
                                                description: `Option allowing all HTTPS methods in a simulated cloud environment`,
                                              }),
                                            }),
                                            (0, $.jsx)(z.Item, {
                                              disabled: o,
                                              onSelect: () => c({ networkHttpsMethods: `GET` }),
                                              children: (0, $.jsx)(g, {
                                                id: `environmentSetup.network.methods.get`,
                                                defaultMessage: `GET`,
                                                description: `The HTTP GET method name; preserve the protocol name`,
                                              }),
                                            }),
                                            (0, $.jsx)(z.Item, {
                                              disabled: o,
                                              onSelect: () => c({ networkHttpsMethods: `GET, POST` }),
                                              children: (0, $.jsx)(g, {
                                                id: `environmentSetup.network.methods.getPost`,
                                                defaultMessage: `GET, POST`,
                                                description: `The HTTP GET and POST method names; preserve the protocol names`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        label: (0, $.jsx)(g, {
                                          id: `restricted.environmentSetup.configuration.network.methods`,
                                          defaultMessage: `Allowed HTTPS methods`,
                                          description: `Label for allowed HTTPS methods in a mocked cloud environment settings panel`,
                                        }),
                                      })
                                    : null,
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : null,
                  D == null || D === `secrets`
                    ? (0, $.jsxs)(`section`, {
                        className: `flex flex-col`,
                        "data-environment-section": `secrets`,
                        children: [
                          (0, $.jsx)(yt.Header, {
                            className: `select-none`,
                            actions: (0, $.jsx)(vn, {
                              tooltipContent: o ? s : null,
                              "aria-describedby": D == null ? K : void 0,
                              "aria-label": P.formatMessage({
                                id: `environmentSetup.secrets.manageLabel`,
                                defaultMessage: `Manage secrets`,
                                description: `Accessible label for opening the editor to add, edit, import, or remove network secrets`,
                              }),
                              color: `secondary`,
                              disabled: o,
                              size: `settingsAction`,
                              onClick: () => oe({ config: h, secrets: m }),
                              children: (0, $.jsx)(g, {
                                id: `environmentSetup.secrets.manage`,
                                defaultMessage: `Manage`,
                                description: `Button to open the editor for adding, editing, importing, and removing network secrets`,
                              }),
                            }),
                            size: `base`,
                            spacing: `compact`,
                            subtitlePlacement: `below-header`,
                            subtitle:
                              D == null
                                ? (0, $.jsx)(`span`, {
                                    id: K,
                                    children: (0, $.jsx)(g, {
                                      id: `environmentSetup.networkSecrets.domainAccess`,
                                      defaultMessage: `Saving a network secret also allows access to its domains`,
                                      description: `Explanation beside Add in environment network settings that saving a network secret grants Internet access to its destination domains`,
                                    }),
                                  })
                                : null,
                            title:
                              D == null
                                ? (0, $.jsxs)(`div`, {
                                    className: `flex items-center gap-1`,
                                    children: [
                                      (0, $.jsx)(g, {
                                        id: `environmentSetup.networkSecrets.title`,
                                        defaultMessage: `Network secrets`,
                                        description: `Heading for the network secrets subsection within environment network settings`,
                                      }),
                                      (0, $.jsx)(Me, {
                                        cloneCustomTrigger: !0,
                                        tooltipContent: (0, $.jsx)(g, {
                                          id: `restricted.environmentSetup.sidePanel.secrets.tooltip`,
                                          defaultMessage: `Secrets stay outside the environment. Code receives a placeholder that is replaced only for requests to allowed HTTPS domains.`,
                                          description: `Tooltip explaining how proxy secrets are protected and delivered`,
                                        }),
                                        children: (0, $.jsx)(n, {
                                          "aria-label": P.formatMessage({
                                            id: `restricted.environmentSetup.sidePanel.secrets.tooltip.label`,
                                            defaultMessage: `About network secrets`,
                                            description: `Accessible label for the network secrets information tooltip`,
                                          }),
                                          color: `ghostSecondary`,
                                          size: `inline`,
                                          type: `button`,
                                          children: (0, $.jsx)(O, { asset: S }),
                                        }),
                                      }),
                                    ],
                                  })
                                : null,
                          }),
                          (0, $.jsx)(yt.Content, {
                            children: (0, $.jsx)(Te, {
                              children:
                                m.length === 0
                                  ? (0, $.jsx)(Fe, {
                                      className: `select-none`,
                                      controlSizing: `content`,
                                      variant: `featured`,
                                      size: `compact`,
                                      control: null,
                                      icon: (0, $.jsx)(y, { className: `text-secondary` }),
                                      label: (0, $.jsx)(g, {
                                        id: `restricted.environmentSetup.configuration.secret.empty`,
                                        defaultMessage: `No proxy secrets added`,
                                        description: `Description shown when a cloud environment has no proxy secret declarations`,
                                      }),
                                    })
                                  : m.map((e) => {
                                      let t = j.filter((t) => {
                                          let { field: n } = t;
                                          return n?.startsWith(`secret-${e.id}-`);
                                        }),
                                        n =
                                          e.isMissing === !0 &&
                                          e.source !== `user_provided` &&
                                          e.serverId == null &&
                                          e.value.length === 0,
                                        r = (0, $.jsx)(`span`, {
                                          "aria-hidden": `true`,
                                          children: (0, $.jsx)(g, {
                                            id: `environmentSetup.secret.mask`,
                                            defaultMessage: `••••••••`,
                                            description: `Eight bullet characters masking a saved or staged secret; preserve these masking characters`,
                                          }),
                                        });
                                      return (
                                        n
                                          ? (r = (0, $.jsx)(g, {
                                              id: `restricted.environmentSetup.configuration.secret.missing`,
                                              defaultMessage: `Missing`,
                                              description: `Status for a cloud environment secret requirement with no saved or staged value`,
                                            }))
                                          : e.source === `user_provided`
                                            ? (r = (0, $.jsx)(g, {
                                                id: `restricted.environmentSetup.configuration.secret.source.userProvided`,
                                                defaultMessage: `User-provided`,
                                                description: `A cloud environment secret supplied by the executing user`,
                                              }))
                                            : e.value.length === 0 &&
                                              e.serverId == null &&
                                              !(o && e.source === `environment`) &&
                                              (r = (0, $.jsx)(g, {
                                                id: `restricted.environmentSetup.configuration.secret.noValue`,
                                                defaultMessage: `No value`,
                                                description: `Status for an environment secret with no value stored in the current mock editor`,
                                              })),
                                        (0, $.jsx)(
                                          Fe,
                                          {
                                            className: `select-none`,
                                            controlSizing: `content`,
                                            variant: `featured`,
                                            size: `compact`,
                                            control: (e) =>
                                              (0, $.jsxs)($.Fragment, {
                                                children: [
                                                  (0, $.jsx)(`span`, {
                                                    className: me(
                                                      `text-base select-none`,
                                                      n ? `text-danger` : `text-secondary`,
                                                    ),
                                                    children: r,
                                                  }),
                                                  (0, $.jsx)(vn, {
                                                    tooltipContent: o ? s : null,
                                                    "aria-describedby": e[`aria-describedby`],
                                                    "data-environment-invalid": t.length > 0,
                                                    "aria-label": P.formatMessage({
                                                      id: `restricted.environmentSetup.configuration.secret.edit`,
                                                      defaultMessage: `Edit secret`,
                                                      description: `Accessible label for editing a simulated cloud environment secret declaration`,
                                                    }),
                                                    color: `ghost`,
                                                    size: `icon`,
                                                    disabled: o,
                                                    onClick: () => oe({ config: h, secrets: m }),
                                                    children: (0, $.jsx)(he, {}),
                                                  }),
                                                ],
                                              }),
                                            icon: (0, $.jsx)(y, {}),
                                            label: (0, $.jsx)(`span`, {
                                              className: `block truncate`,
                                              children: e.injectionTarget?.name ?? e.name,
                                            }),
                                            description:
                                              t.length === 0
                                                ? void 0
                                                : (0, $.jsx)(`div`, {
                                                    className: `flex flex-col gap-1`,
                                                    children: t.map(Ma),
                                                  }),
                                          },
                                          e.id,
                                        )
                                      );
                                    }),
                            }),
                          }),
                        ],
                      })
                    : null,
                ],
              }),
            })
          : null),
      (t[37] = h),
      (t[38] = r),
      (t[39] = i.networkDomains),
      (t[40] = i.networkEnabled),
      (t[41] = i.networkHttpsMethods),
      (t[42] = i.networkPreset),
      (t[43] = P),
      (t[44] = o),
      (t[45] = j),
      (t[46] = I),
      (t[47] = ce),
      (t[48] = c),
      (t[49] = s),
      (t[50] = K),
      (t[51] = m),
      (t[52] = D),
      (t[53] = _),
      (t[54] = fe))
    : (fe = t[54]);
  let ge;
  t[55] !== h ||
  t[56] !== r ||
  t[57] !== C ||
  t[58] !== o ||
  t[59] !== j ||
  t[60] !== s ||
  t[61] !== m ||
  t[62] !== D ||
  t[63] !== w
    ? ((ge =
        w == null || (D != null && D !== `variables`)
          ? null
          : (0, $.jsx)(_i, {
              configuration: r,
              config: h,
              variables: C ?? [],
              issues: j,
              unavailableNames: m.flatMap(ja),
              isReadOnly: o,
              readOnlyTooltip: s,
              onChange: w,
              showHeading: D == null,
            })),
      (t[55] = h),
      (t[56] = r),
      (t[57] = C),
      (t[58] = o),
      (t[59] = j),
      (t[60] = s),
      (t[61] = m),
      (t[62] = D),
      (t[63] = w),
      (t[64] = ge))
    : (ge = t[64]);
  let Y;
  t[65] !== N ||
  t[66] !== h?.is_owner ||
  t[67] !== i.access ||
  t[68] !== P ||
  t[69] !== o ||
  t[70] !== c ||
  t[71] !== s ||
  t[72] !== D
    ? ((Y =
        D == null || D === `privacy`
          ? (0, $.jsxs)(`section`, {
              className: `flex flex-col`,
              "data-environment-section": `privacy`,
              children: [
                (0, $.jsx)(yt.Header, {
                  className: `select-none`,
                  size: `base`,
                  spacing: `compact`,
                  title: (0, $.jsx)(g, {
                    id: `restricted.environmentSetup.configuration.privacy.title`,
                    defaultMessage: `Privacy`,
                    description: `Heading for privacy controls in a mocked cloud environment settings panel`,
                  }),
                }),
                (0, $.jsx)(yt.Content, {
                  children: (0, $.jsx)(Te, {
                    children: (0, $.jsx)(Fe, {
                      className: `select-none`,
                      controlSizing: `content`,
                      variant: `featured`,
                      size: `compact`,
                      control: (0, $.jsxs)(u, {
                        contentWidth: `menu`,
                        triggerButton: (0, $.jsxs)(vn, {
                          tooltipContent: o ? s : null,
                          color: `outline`,
                          disabled: o,
                          size: `settingsAction`,
                          children: [
                            (0, $.jsx)(pe, {}),
                            i.access === `organization`
                              ? (0, $.jsx)(un, {})
                              : (0, $.jsx)(g, {
                                  id: `restricted.environmentSetup.configuration.privacy.private`,
                                  defaultMessage: `Only me`,
                                  description: `Privacy option limiting a simulated cloud environment to its creator`,
                                }),
                            (0, $.jsx)(E, {}),
                          ],
                        }),
                        children: [
                          (0, $.jsx)(z.Item, {
                            disabled: o || h?.is_owner === !1,
                            focusableWhenDisabled: !0,
                            tooltipText:
                              h?.is_owner === !1
                                ? P.formatMessage({
                                    id: `environmentSetup.sharing.ownerOnlyTooltip`,
                                    defaultMessage: `Ask the environment owner to make it private`,
                                    description: `Tooltip on the disabled Only me sharing option when someone other than the environment owner is editing a shared environment`,
                                  })
                                : void 0,
                            onSelect: () => c({ access: `private` }),
                            children: (0, $.jsx)(g, {
                              id: `restricted.environmentSetup.configuration.privacy.private`,
                              defaultMessage: `Only me`,
                              description: `Privacy option limiting a simulated cloud environment to its creator`,
                            }),
                          }),
                          N &&
                            (0, $.jsx)(z.Item, {
                              disabled: o,
                              onSelect: () => c({ access: `organization` }),
                              children: (0, $.jsx)(un, {}),
                            }),
                        ],
                      }),
                      label: (0, $.jsx)(g, {
                        id: `restricted.environmentSetup.configuration.privacy.label`,
                        defaultMessage: `Who can use`,
                        description: `Label for choosing who can use a simulated cloud environment`,
                      }),
                    }),
                  }),
                }),
              ],
            })
          : null),
      (t[65] = N),
      (t[66] = h?.is_owner),
      (t[67] = i.access),
      (t[68] = P),
      (t[69] = o),
      (t[70] = c),
      (t[71] = s),
      (t[72] = D),
      (t[73] = Y))
    : (Y = t[73]);
  let ve;
  t[74] !== G ||
  t[75] !== r ||
  t[76] !== re ||
  t[77] !== i.outboundIdentityRequirements ||
  t[78] !== o ||
  t[79] !== c ||
  t[80] !== l ||
  t[81] !== f ||
  t[82] !== U ||
  t[83] !== M ||
  t[84] !== D ||
  t[85] !== ie ||
  t[86] !== d
    ? ((ve =
        (D == null || D === `connections`) &&
        (U || (D == null && r != null && b?.environmentConfigs?.requestVpn != null))
          ? (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-2`,
              "data-environment-section": `connections`,
              children: [
                D == null
                  ? (0, $.jsxs)(n, {
                      className: `gap-2 self-start text-base`,
                      "aria-controls": G,
                      "aria-expanded": ie,
                      color: `ghostMuted`,
                      size: `inline`,
                      onClick: () => ne({ revealConnections: M, open: !ie }),
                      children: [
                        (0, $.jsx)(g, {
                          id: `restricted.environmentSetup.oic.advanced`,
                          defaultMessage: `Advanced`,
                          description: `Disclosure for advanced environment configuration`,
                        }),
                        (0, $.jsx)(k, { className: me(!ie && `-rotate-90`) }),
                      ],
                    })
                  : null,
                (0, $.jsx)(`div`, {
                  id: G,
                  hidden: !ie,
                  children: (0, $.jsx)(Te, {
                    dividers: !1,
                    children: (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-2.5 px-4 py-3`,
                      children: [
                        U && ie
                          ? (0, $.jsx)(
                              Ki,
                              {
                                configuration: r,
                                requirements: i.outboundIdentityRequirements,
                                issues: re,
                                isReadOnly: o,
                                showHeading: D == null,
                                onChange: (e) => c({ outboundIdentityRequirements: e }),
                              },
                              r == null
                                ? `local-environment`
                                : `oic:${r.accountId}:${r.userId}:${r.configId}`,
                            )
                          : null,
                        D == null && r != null
                          ? (0, $.jsx)(
                              wa,
                              {
                                ref: d,
                                configuration: r,
                                isReadOnly: o,
                                isVisible: ie,
                                onDraftSaved: l,
                                onPendingChange: f,
                              },
                              `vpn:${r.accountId}:${r.userId}:${r.configId}:${r.draftId ?? ``}`,
                            )
                          : null,
                      ],
                    }),
                  }),
                }),
              ],
            })
          : null),
      (t[74] = G),
      (t[75] = r),
      (t[76] = re),
      (t[77] = i.outboundIdentityRequirements),
      (t[78] = o),
      (t[79] = c),
      (t[80] = l),
      (t[81] = f),
      (t[82] = U),
      (t[83] = M),
      (t[84] = D),
      (t[85] = ie),
      (t[86] = d),
      (t[87] = ve))
    : (ve = t[87]);
  let ye;
  t[88] !== h || t[89] !== r || t[90] !== ae || t[91] !== o || t[92] !== v
    ? ((ye =
        ae == null || o
          ? null
          : (0, $.jsx)(Rr, {
              configuration: r,
              initialSecrets: ae.secrets,
              hasConflict: Zr(h, ae.config),
              requireValues: !1,
              onClose: () => oe(null),
              onLocalSave: v,
            })),
      (t[88] = h),
      (t[89] = r),
      (t[90] = ae),
      (t[91] = o),
      (t[92] = v),
      (t[93] = ye))
    : (ye = t[93]);
  let be;
  return (
    t[94] !== le ||
    t[95] !== ue ||
    t[96] !== de ||
    t[97] !== fe ||
    t[98] !== ge ||
    t[99] !== Y ||
    t[100] !== ve ||
    t[101] !== ye
      ? ((be = (0, $.jsxs)($.Fragment, { children: [le, ue, de, fe, ge, Y, ve, ye] })),
        (t[94] = le),
        (t[95] = ue),
        (t[96] = de),
        (t[97] = fe),
        (t[98] = ge),
        (t[99] = Y),
        (t[100] = ve),
        (t[101] = ye),
        (t[102] = be))
      : (be = t[102]),
    be
  );
}
function ja(e) {
  let t = e.injectionTarget;
  return t?.type === `environment_variable` ? [t.name] : [];
}
function Ma(e) {
  return (0, $.jsx)(Cn, { issue: e }, e.field);
}
function Na(e) {
  let { field: t } = e;
  return t?.startsWith(`network-`);
}
function Pa(e) {
  Tt({
    event: e,
    href: `https://learn.chatgpt.com/docs/environments/cloud-environments#connect-to-services`,
    initiator: `external_link`,
  });
}
function Fa(e) {
  let { field: t } = e;
  return t?.startsWith(`connection-`);
}
var Ia, La, $;
function Ra() {
  return (Ra = e(() => {
    ((Ia = X()),
      F(),
      J(),
      M(),
      (La = Ue()),
      Y(),
      At(),
      Ne(),
      s(),
      at(),
      A(),
      R(),
      T(),
      le(),
      De(),
      $e(),
      ge(),
      v(),
      _n(),
      Kn(),
      Wr(),
      Kr(),
      Xr(),
      Ci(),
      Pi(),
      Yt(),
      Qi(),
      na(),
      ln(),
      Nn(),
      _a(),
      ka(),
      ($ = ze()));
  }))();
}
export {
  Nn as _,
  ei as a,
  Xr as c,
  Ar as d,
  Pr as f,
  wn as g,
  Cn as h,
  _a as i,
  Gr as l,
  Kn as m,
  Ra as n,
  ii as o,
  Vn as p,
  ua as r,
  qr as s,
  Aa as t,
  Kr as u,
};
//# sourceMappingURL=configuration-fields-a9646993ec29.js.map
