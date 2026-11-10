const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-b64c321178c1.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./error-13f3381c14b1.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as n,
  $c as r,
  $st as i,
  BO as a,
  BQ as o,
  Bst as s,
  CCt as c,
  DB as l,
  DU as u,
  Dc as d,
  Ec as f,
  FBt as p,
  FNt as m,
  HO as h,
  HW as g,
  IO as _,
  JO as v,
  LNt as y,
  LO as b,
  LU as x,
  Lst as S,
  MNt as C,
  Mst as w,
  NNt as T,
  OB as E,
  OFt as D,
  OH as O,
  Oc as k,
  PBt as A,
  QY as j,
  Qst as M,
  RO as N,
  Rst as P,
  SY as F,
  TY as I,
  Tc as L,
  VO as R,
  WK as z,
  WO as ee,
  XL as B,
  XOt as V,
  Y3 as H,
  YOt as U,
  Z3 as W,
  ZL as G,
  ZSt as K,
  ZY as q,
  _D as J,
  ast as te,
  cG as ne,
  ck as re,
  cwt as ie,
  el as ae,
  ew as Y,
  fD as oe,
  fK as se,
  gB as ce,
  gCt as le,
  gD as ue,
  gu as de,
  hB as fe,
  hD as pe,
  hit as me,
  hu as he,
  iCt as ge,
  iFt as _e,
  ist as ve,
  iwt as ye,
  jst as be,
  kFt as xe,
  kH as Se,
  lk as Ce,
  mD as we,
  nB as Te,
  nCt as Ee,
  oit as De,
  okt as Oe,
  qO as ke,
  rB as Ae,
  rk as je,
  sY as Me,
  sct as Ne,
  sw as Pe,
  tk as Fe,
  tkt as X,
  uk as Ie,
  uw as Le,
  vT as Re,
  vst as ze,
  xut as Be,
  yT as Ve,
  yst as He,
  zO as Ue,
  zQ as We,
  zst as Ge,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as Ke,
  A$ as qe,
  A3t as Je,
  BFt as Ye,
  BIr as Xe,
  BRr as Ze,
  BVr as Qe,
  Bbt as $e,
  C$ as et,
  D$ as tt,
  Djn as nt,
  E1 as rt,
  Ejn as it,
  Er as at,
  F1 as ot,
  GLn as st,
  I1 as ct,
  I7n as lt,
  L7n as ut,
  LIr as dt,
  M$ as ft,
  Man as pt,
  Mnr as mt,
  N3t as ht,
  Nan as gt,
  O$ as _t,
  P3t as vt,
  QLn as yt,
  SRn as bt,
  T$ as xt,
  T3t as St,
  Tjn as Ct,
  Tr as wt,
  VRr as Tt,
  Wbt as Et,
  XHr as Dt,
  ZLn as Ot,
  b$ as kt,
  bRn as At,
  cA as jt,
  d$ as Mt,
  f1 as Nt,
  iRr as Pt,
  j$ as Ft,
  jan as It,
  jnr as Lt,
  k$ as Rt,
  kEr as zt,
  l$ as Bt,
  l1 as Vt,
  p1 as Ht,
  qLn as Ut,
  sA as Wt,
  sRr as Gt,
  u1 as Kt,
  v$ as qt,
  w1 as Jt,
  wLr as Yt,
  y$ as Xt,
  zFt as Zt,
  zRr as Qt,
} from "./app-initial-ad16eaadf81f.js";
import { m as $t, n as en, p as tn, r as nn } from "./codex-diff-css-38be692bb624.js";
import { t as rn } from "./register-pierre-themes-8ff08e47faf4.js";
import { n as an, t as on } from "./File-329c9a75680b.js";
import { n as sn, t as cn } from "./file-diff-232655eefd3e.js";
import { a as ln, n as un, o as dn, s as fn } from "./result-values-2e370121bb68.js";
import { n as pn, t as mn } from "./editor-b9c6e6605cfe.js";
import { n as hn, r as gn } from "./validation-message-bccaffa8ccca.js";
import { n as _n, t as vn } from "./action-button-b7d90e9023c0.js";
import { n as yn, t as bn } from "./bundle-6d4b2de4bbf6.js";
import { n as xn, t as Sn } from "./error-13f3381c14b1.js";
function Cn(e) {
  let t = (0, kn.c)(45),
    { id: n, issue: r } = e,
    i = Oe(),
    a = (0, An.useId)(),
    o = (0, An.useId)(),
    [s, c] = (0, An.useState)(!1),
    u = Mn[`${r.code}Label`],
    d = Mn[`${r.code}Help`],
    f = `${a}-summary`,
    p;
  t[0] === u ? (p = t[1]) : ((p = (0, jn.jsx)(X, { ...u })), (t[0] = u), (t[1] = p));
  let m;
  t[2] !== f || t[3] !== p
    ? ((m = (0, jn.jsx)(`span`, { id: f, className: `select-none`, children: p })),
      (t[2] = f),
      (t[3] = p),
      (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] === d ? (h = t[6]) : ((h = (0, jn.jsx)(X, { ...d })), (t[5] = d), (t[6] = h));
  let g;
  t[7] === i ? (g = t[8]) : ((g = i.formatMessage(Mn.details)), (t[7] = i), (t[8] = g));
  let _ = `${a}-summary`,
    v;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, jn.jsx)(l, { asset: Re })), (t[9] = v))
    : (v = t[9]);
  let y;
  t[10] !== g || t[11] !== _
    ? ((y = (0, jn.jsx)(ue, {
        asChild: !0,
        children: (0, jn.jsx)(`button`, {
          "aria-label": g,
          "aria-describedby": _,
          className: `inline-flex cursor-interaction rounded-sm focus-visible:outline-2 focus-visible:outline-ring`,
          type: `button`,
          children: v,
        }),
      })),
      (t[10] = g),
      (t[11] = _),
      (t[12] = y))
    : (y = t[12]);
  let b;
  t[13] !== s || t[14] !== h || t[15] !== y
    ? ((b = (0, jn.jsx)(Te, { disabled: s, tooltipContent: h, children: y })),
      (t[13] = s),
      (t[14] = h),
      (t[15] = y),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] === u ? (x = t[18]) : ((x = (0, jn.jsx)(X, { ...u })), (t[17] = u), (t[18] = x));
  let S;
  t[19] !== x || t[20] !== a
    ? ((S = (0, jn.jsx)(pe, { id: a, children: x })), (t[19] = x), (t[20] = a), (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] === d ? (C = t[23]) : ((C = (0, jn.jsx)(X, { ...d })), (t[22] = d), (t[23] = C));
  let w;
  t[24] !== o || t[25] !== C
    ? ((w = (0, jn.jsx)(`p`, { id: o, children: C })), (t[24] = o), (t[25] = C), (t[26] = w))
    : (w = t[26]);
  let T;
  t[27] === r.valuesSaved
    ? (T = t[28])
    : ((T = r.valuesSaved ? (0, jn.jsx)(`p`, { children: (0, jn.jsx)(X, { ...Mn.valuesSaved }) }) : null),
      (t[27] = r.valuesSaved),
      (t[28] = T));
  let E;
  t[29] !== S || t[30] !== w || t[31] !== T
    ? ((E = (0, jn.jsxs)(`div`, {
        className: `flex flex-col gap-3 p-2 text-sm select-text`,
        children: [S, w, T],
      })),
      (t[29] = S),
      (t[30] = w),
      (t[31] = T),
      (t[32] = E))
    : (E = t[32]);
  let D;
  t[33] !== o || t[34] !== E || t[35] !== a
    ? ((D = (0, jn.jsx)(we, {
        "aria-labelledby": a,
        "aria-describedby": o,
        size: `large`,
        variant: `menu`,
        children: E,
      })),
      (t[33] = o),
      (t[34] = E),
      (t[35] = a),
      (t[36] = D))
    : (D = t[36]);
  let O;
  t[37] !== s || t[38] !== D || t[39] !== b
    ? ((O = (0, jn.jsxs)(oe, { open: s, onOpenChange: c, children: [b, D] })),
      (t[37] = s),
      (t[38] = D),
      (t[39] = b),
      (t[40] = O))
    : (O = t[40]);
  let k;
  return (
    t[41] !== n || t[42] !== O || t[43] !== m
      ? ((k = (0, jn.jsxs)(`span`, {
          id: n,
          className: `inline-flex items-center gap-1 text-xs text-danger`,
          children: [m, O],
        })),
        (t[41] = n),
        (t[42] = O),
        (t[43] = m),
        (t[44] = k))
      : (k = t[44]),
    k
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
          ? (0, jn.jsx)(X, {
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
          ? (0, jn.jsx)(X, {
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
    ((kn = A()),
      Ve(),
      (An = p()),
      V(),
      E(),
      J(),
      Ae(),
      (jn = y()),
      (Mn = U({
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
    h = Oe(),
    g = (0, Ln.useId)(),
    _ = (0, Ln.useId)(),
    [v, y] = (0, Ln.useState)(!1),
    b = (0, Ln.useRef)(null),
    x = (0, Ln.useRef)(r.length),
    S = { allowWildcards: f === `network`, otherDomainCount: m },
    w = f === `secret` || v ? Ft(i.split(`,`)[0]?.trim() ?? ``, r, S) : null,
    T,
    E;
  (t[0] === r.length
    ? ((T = t[1]), (E = t[2]))
    : ((T = () => {
        (r.length > x.current && b.current?.scrollIntoView({ block: `nearest` }), (x.current = r.length));
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
        let t = qe(e);
        t == null || Ft(e.trim(), s, S) != null ? e.trim() && c.push(e.trim()) : s.push(t);
      }
      (s.length !== r.length && a(s), o([...c, i?.trim()].filter(Fn).join(`, `)), y(c.length > 0));
    },
    O;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Rn.jsx)(X, {
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
      ? ((e = (0, Rn.jsx)(X, {
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
    (t[5] === e ? (n = t[6]) : ((n = (0, Rn.jsx)(X, { ...e })), (t[5] = e), (t[6] = n)), (k = n));
  }
  if (f === `secret`) {
    if (w === `invalid`) {
      let e;
      (t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Rn.jsx)(X, {
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
        ? ((e = (0, Rn.jsx)(X, {
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
        ? ((e = (0, Rn.jsx)(X, {
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
        Zt,
        {
          className: `max-w-full gap-1`,
          variant: `outline`,
          children: [
            (0, Rn.jsx)(`span`, { className: `min-w-0 truncate`, title: e, children: e }),
            d && (!e.trim() || Ft(e, f === `secret` ? r.slice(0, t) : [], S) != null || t + m >= 1024)
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
                children: (0, Rn.jsx)(F, {}),
              }),
          ],
        },
        `${e}-${t}`,
      ),
    ),
    j = !p && `[&>div]:gap-x-2`,
    M;
  t[10] === j ? (M = t[11]) : ((M = C(`flex w-full min-w-0 flex-col gap-1.5`, j)), (t[10] = j), (t[11] = M));
  let N;
  t[12] !== D ||
  t[13] !== n ||
  t[14] !== A ||
  t[15] !== r ||
  t[16] !== w ||
  t[17] !== g ||
  t[18] !== h ||
  t[19] !== a ||
  t[20] !== o ||
  t[21] !== _ ||
  t[22] !== f ||
  t[23] !== p ||
  t[24] !== i
    ? ((N = p
        ? (0, Rn.jsx)(`div`, {
            className: C(
              `flex min-w-0 flex-wrap content-start gap-1 overflow-y-auto`,
              f === `secret` ? `max-h-24` : `h-24`,
            ),
            children:
              r.length > 0
                ? A
                : (0, Rn.jsx)(`p`, {
                    className: `text-xs text-secondary select-none`,
                    children: (0, Rn.jsx)(X, {
                      id: `restricted.environmentSetup.network.domain.emptyList`,
                      defaultMessage: `No domains added yet`,
                      description: `Empty-state message in the cloud environment allowed-domains editor`,
                    }),
                  }),
          })
        : (0, Rn.jsx)(Ot, {
            ref: b,
            leadingControl: (0, Rn.jsx)(Rn.Fragment, { children: A }),
            "aria-describedby": f === `network` ? `${g} ${_}` : g,
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
            onBlur: () => y(i.trim().length > 0),
            onChange: (e) => {
              let t = e.currentTarget.value;
              t.includes(`,`) ? D(t, !0) : (o(t), y(!1));
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
      (t[17] = g),
      (t[18] = h),
      (t[19] = a),
      (t[20] = o),
      (t[21] = _),
      (t[22] = f),
      (t[23] = p),
      (t[24] = i),
      (t[25] = N))
    : (N = t[25]);
  let P;
  t[26] !== w || t[27] !== k || t[28] !== g || t[29] !== p
    ? ((P =
        !p &&
        (0, Rn.jsx)(`p`, {
          id: g,
          className: w == null ? `text-xs text-secondary select-none` : `text-xs text-danger select-none`,
          role: w == null ? void 0 : `alert`,
          children: k,
        })),
      (t[26] = w),
      (t[27] = k),
      (t[28] = g),
      (t[29] = p),
      (t[30] = P))
    : (P = t[30]);
  let I;
  t[31] !== _ || t[32] !== f
    ? ((I =
        f === `network` &&
        (0, Rn.jsx)(`p`, {
          id: _,
          className: `text-xs text-secondary select-none`,
          children: (0, Rn.jsx)(X, {
            id: `restricted.environmentSetup.network.domain.vpnPolicyHelp`,
            defaultMessage: `For private VPN destinations, add IPv4 addresses or hostnames that resolve to IPv4`,
            description: `Explains in the restricted internet access editor that private VPN destinations must be added as IPv4 addresses or hostnames that resolve to IPv4`,
          }),
        })),
      (t[31] = _),
      (t[32] = f),
      (t[33] = I))
    : (I = t[33]);
  let L;
  return (
    t[34] !== N || t[35] !== P || t[36] !== I || t[37] !== M
      ? ((L = (0, Rn.jsxs)(`div`, { className: M, children: [N, P, I] })),
        (t[34] = N),
        (t[35] = P),
        (t[36] = I),
        (t[37] = M),
        (t[38] = L))
      : (L = t[38]),
    L
  );
}
function Fn(e) {
  return !!e;
}
var In, Ln, Rn, zn;
function Bn() {
  return (Bn = e(() => {
    ((In = A()),
      T(),
      (Ln = p()),
      V(),
      Ye(),
      I(),
      Ke(),
      ft(),
      Nn(),
      (Rn = y()),
      (zn = U({
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
    { disabled: n, disabledTooltip: r, domains: i, onChange: a, issues: o } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = o === void 0 ? [] : o), (t[0] = o), (t[1] = s));
  let c = s,
    l = Oe(),
    [u, d] = (0, Un.useState)(null);
  n && u != null && d(null);
  let f = c.length > 0,
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Wn.jsx)(`span`, {
        className: `shrink-0 select-none`,
        children: (0, Wn.jsx)(X, { ...Gn.title }),
      })),
      (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] !== i[0] || t[4] !== i.length
    ? ((m = (0, Wn.jsxs)(`div`, {
        className: `flex min-w-0 items-center justify-between gap-3`,
        children: [
          p,
          (0, Wn.jsx)(`span`, {
            className: `truncate text-secondary`,
            children:
              i.length > 0
                ? (0, Wn.jsx)(X, {
                    id: `restricted.environmentSetup.network.domain.summary`,
                    defaultMessage: `{count, plural, one {# domain} other {# domains}} · {firstDomain}`,
                    description: `Compact allowed-domain summary showing the total count and the first allowed host in cloud environment settings`,
                    values: { count: i.length, firstDomain: i[0] },
                  })
                : (0, Wn.jsx)(X, {
                    id: `restricted.environmentSetup.network.domain.empty`,
                    defaultMessage: `No additional domains`,
                    description: `Summary when no individual cloud environment network domains have been allowed`,
                  }),
          }),
        ],
      })),
      (t[3] = i[0]),
      (t[4] = i.length),
      (t[5] = m))
    : (m = t[5]);
  let h;
  t[6] !== i.length || t[7] !== l
    ? ((h = l.formatMessage(Gn.editLabel, { count: i.length })), (t[6] = i.length), (t[7] = l), (t[8] = h))
    : (h = t[8]);
  let g = n ? r : null,
    v;
  t[9] === i ? (v = t[10]) : ((v = () => d({ domains: [...i], value: `` })), (t[9] = i), (t[10] = v));
  let y;
  t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = (0, Wn.jsx)(se, {})), (t[11] = y)) : (y = t[11]);
  let x;
  t[12] !== n || t[13] !== h || t[14] !== g || t[15] !== v
    ? ((x = (0, Wn.jsx)(vn, {
        "aria-label": h,
        color: `ghost`,
        disabled: n,
        tooltipContent: g,
        size: `icon`,
        onClick: v,
        children: y,
      })),
      (t[12] = n),
      (t[13] = h),
      (t[14] = g),
      (t[15] = v),
      (t[16] = x))
    : (x = t[16]);
  let S;
  t[17] !== n || t[18] !== c[0]
    ? ((S = !n && c[0] != null && (0, Wn.jsx)(Cn, { issue: c[0] })), (t[17] = n), (t[18] = c[0]), (t[19] = S))
    : (S = t[19]);
  let C;
  t[20] !== x || t[21] !== S
    ? ((C = (0, Wn.jsxs)(Wn.Fragment, { children: [x, S] })), (t[20] = x), (t[21] = S), (t[22] = C))
    : (C = t[22]);
  let w;
  t[23] !== C || t[24] !== m
    ? ((w = (0, Wn.jsx)(Pe, {
        className: `select-none`,
        controlSizing: `content`,
        variant: `featured`,
        size: `compact`,
        label: m,
        control: C,
      })),
      (t[23] = C),
      (t[24] = m),
      (t[25] = w))
    : (w = t[25]);
  let T;
  t[26] !== w || t[27] !== f
    ? ((T = (0, Wn.jsx)(`div`, { "data-environment-invalid": f, children: w })),
      (t[26] = w),
      (t[27] = f),
      (t[28] = T))
    : (T = t[28]);
  let E;
  t[29] !== n || t[30] !== u || t[31] !== c.length || t[32] !== a
    ? ((E =
        u != null && !n
          ? (0, Wn.jsx)(ee, {
              open: !0,
              size: `wide`,
              onOpenChange: (e) => !e && d(null),
              children: (0, Wn.jsxs)(_, {
                as: `form`,
                size: `viewport`,
                onSubmit: (e) => {
                  (e.preventDefault(), e.stopPropagation(), !u.value.trim() && (a(u.domains), d(null)));
                },
                children: [
                  (0, Wn.jsx)(Ue, {
                    children: (0, Wn.jsx)(N, {
                      title: (0, Wn.jsx)(ke, { children: (0, Wn.jsx)(X, { ...Gn.title }) }),
                    }),
                  }),
                  (0, Wn.jsx)(Ue, {
                    children: (0, Wn.jsx)(Pn, {
                      disabled: n,
                      domains: u.domains,
                      showErrors: c.length > 0,
                      value: u.value,
                      onChange: (e) => d((t) => (t == null ? null : { ...t, domains: e })),
                      onInputChange: (e) => d((t) => (t == null ? null : { ...t, value: e })),
                    }),
                  }),
                  (0, Wn.jsx)(Ue, {
                    children: (0, Wn.jsxs)(b, {
                      children: [
                        (0, Wn.jsx)(H, {
                          color: `secondary`,
                          onClick: () => d(null),
                          children: (0, Wn.jsx)(X, {
                            id: `restricted.environmentSetup.configuration.dialog.cancel`,
                            defaultMessage: `Cancel`,
                            description: `Discard edits in a cloud environment configuration dialog`,
                          }),
                        }),
                        (0, Wn.jsx)(H, {
                          color: `primary`,
                          disabled: !!u.value.trim(),
                          type: `submit`,
                          children: (0, Wn.jsx)(X, {
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
      (t[29] = n),
      (t[30] = u),
      (t[31] = c.length),
      (t[32] = a),
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
    ((Hn = A()),
      (Un = p()),
      V(),
      W(),
      v(),
      h(),
      I(),
      Le(),
      _n(),
      Bn(),
      Nn(),
      (Wn = y()),
      (Gn = U({
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
          children: (0, Yn.jsx)(X, {
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
    ((Jn = A()), V(), (Yn = y()));
  }))();
}
function Zn(e) {
  let t = (0, Qn.c)(47),
    { ref: n, limit: r, entryCount: i, onAddKey: a, onImport: o, onPendingChange: s } = e,
    c = Oe(),
    l = (0, $n.useId)(),
    [u, d] = (0, $n.useState)(``),
    [f, p] = (0, $n.useState)(null),
    m = (0, $n.useRef)(!1),
    h = (0, $n.useRef)(null),
    g;
  t[0] !== o || t[1] !== s
    ? ((g = function (e) {
        let t = o(e);
        (p(t), d(t.ok ? `` : e), s(!t.ok && e.trim().length > 0));
      }),
      (t[0] = o),
      (t[1] = s),
      (t[2] = g))
    : (g = t[2]);
  let _ = g,
    v;
  t[3] !== _ || t[4] !== u
    ? ((v = function (e) {
        let t = h.current;
        t != null && (_(u.slice(0, t.selectionStart) + e + u.slice(t.selectionEnd)), t.focus());
      }),
      (t[3] = _),
      (t[4] = u),
      (t[5] = v))
    : (v = t[5]);
  let y = v,
    b;
  (t[6] === y ? (b = t[7]) : ((b = () => ({ importText: y })), (t[6] = y), (t[7] = b)),
    (0, $n.useImperativeHandle)(n, b));
  let x;
  t[8] !== i || t[9] !== r || t[10] !== a || t[11] !== s
    ? ((x = function (e) {
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
      (t[12] = x))
    : (x = t[12]);
  let S = x,
    C;
  t[13] === c
    ? (C = t[14])
    : ((C = c.formatMessage({
        id: `environmentSetup.entries.input`,
        defaultMessage: `Paste .env or type a key`,
        description: `Accessible label for adding entries to the network secret or environment variable editor`,
      })),
      (t[13] = c),
      (t[14] = C));
  let w = f?.ok === !1,
    T = f?.ok === !1 ? l : void 0,
    E;
  t[15] === c
    ? (E = t[16])
    : ((E = c.formatMessage({
        id: `environmentSetup.entries.placeholder`,
        defaultMessage: `Paste your .env or type a key`,
        description: `Input accepts dotenv contents to import multiple entries, or a name to add one entry`,
      })),
      (t[15] = c),
      (t[16] = E));
  let D;
  t[17] === S ? (D = t[18]) : ((D = (e) => S(e.currentTarget)), (t[17] = S), (t[18] = D));
  let O;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = () => {
        m.current = !0;
      }),
      (t[19] = O))
    : (O = t[19]);
  let k;
  t[20] === S
    ? (k = t[21])
    : ((k = (e) => {
        ((m.current = !1), S(e.currentTarget));
      }),
      (t[20] = S),
      (t[21] = k));
  let A;
  t[22] !== _ || t[23] !== u
    ? ((A = (e) => {
        e.key === `Enter` &&
          !e.shiftKey &&
          !e.nativeEvent.isComposing &&
          (e.preventDefault(), e.stopPropagation(), _(u));
      }),
      (t[22] = _),
      (t[23] = u),
      (t[24] = A))
    : (A = t[24]);
  let j;
  t[25] === y
    ? (j = t[26])
    : ((j = (e) => {
        let t = e.clipboardData.getData(`text/plain`);
        (t.includes(`=`) ||
          t.includes(`
`)) &&
          (e.preventDefault(), y(t));
      }),
      (t[25] = y),
      (t[26] = j));
  let M;
  t[27] !== k ||
  t[28] !== A ||
  t[29] !== j ||
  t[30] !== C ||
  t[31] !== w ||
  t[32] !== T ||
  t[33] !== E ||
  t[34] !== D ||
  t[35] !== u
    ? ((M = (0, er.jsx)(yt, {
        ref: h,
        "aria-label": C,
        "aria-invalid": w,
        "aria-describedby": T,
        autoComplete: `off`,
        autoFocus: !0,
        focusIndicator: `border`,
        spellCheck: !1,
        placeholder: E,
        rows: 1,
        value: u,
        variant: `compact`,
        onChange: D,
        onCompositionStart: O,
        onCompositionEnd: k,
        onKeyDown: A,
        onPaste: j,
      })),
      (t[27] = k),
      (t[28] = A),
      (t[29] = j),
      (t[30] = C),
      (t[31] = w),
      (t[32] = T),
      (t[33] = E),
      (t[34] = D),
      (t[35] = u),
      (t[36] = M))
    : (M = t[36]);
  let N;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, er.jsx)(`div`, { className: `w-8 shrink-0`, "aria-hidden": !0 })), (t[37] = N))
    : (N = t[37]);
  let P;
  t[38] === M
    ? (P = t[39])
    : ((P = (0, er.jsxs)(`div`, { className: `flex gap-2`, children: [M, N] })), (t[38] = M), (t[39] = P));
  let F;
  t[40] !== f || t[41] !== l || t[42] !== r
    ? ((F =
        f?.ok === !1
          ? (0, er.jsx)(`p`, {
              id: l,
              className: `text-sm text-danger`,
              role: `alert`,
              children:
                f.reason === `limit`
                  ? (0, er.jsx)(X, {
                      id: `environmentSetup.entries.limit`,
                      defaultMessage: `You can add up to {count} entries; nothing was imported`,
                      description: `An atomic import exceeded this editor's entry limit`,
                      values: { count: r },
                    })
                  : (0, er.jsx)(X, {
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
      (t[43] = F))
    : (F = t[43]);
  let I;
  return (
    t[44] !== P || t[45] !== F
      ? ((I = (0, er.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [P, F] })),
        (t[44] = P),
        (t[45] = F),
        (t[46] = I))
      : (I = t[46]),
    I
  );
}
var Qn, $n, er;
function tr() {
  return (tr = e(() => {
    ((Qn = A()), ($n = p()), V(), Ke(), (er = y()));
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
    m = Oe(),
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
          ? (0, ar.jsx)(yt, {
              ...T,
              autoFocus: h,
              rows: 3,
              variant: `segmented`,
              trailingControl: f,
              onChange: (e) => d(e.target.value),
            })
          : (0, ar.jsx)(Ot, {
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
    ((rr = A()), (ir = p()), V(), Ke(), (ar = y()));
  }))();
}
function sr(e) {
  let t = (0, lr.c)(40),
    {
      id: n,
      value: r,
      personal: i,
      onChange: a,
      ariaLabel: o,
      invalid: s,
      describedBy: c,
      saved: l,
      scopeControl: u,
    } = e,
    d = i !== void 0 && i,
    f = l !== void 0 && l,
    p = Oe(),
    m = (0, ur.useRef)(null),
    [h, g] = (0, ur.useState)(!1),
    [_, v] = (0, ur.useState)(!1),
    y;
  t[0] === p
    ? (y = t[1])
    : ((y = p.formatMessage({
        id: `environmentSetup.secret.valuePlaceholder`,
        defaultMessage: `Value`,
        description: `Placeholder for a new cloud network secret value`,
      })),
      (t[0] = p),
      (t[1] = y));
  let b = y;
  if (f) {
    let e;
    (t[2] !== _ || t[3] !== p
      ? ((e = _
          ? p.formatMessage({
              id: `restricted.environmentSetup.secret.keepValue`,
              defaultMessage: `Leave blank to keep saved value`,
              description: `Placeholder explaining that a blank secret value preserves the existing credential`,
            })
          : `••••••••••••`),
        (t[2] = _),
        (t[3] = p),
        (t[4] = e))
      : (e = t[4]),
      (b = e));
  } else if (d) {
    let e;
    (t[5] === p
      ? (e = t[6])
      : ((e = p.formatMessage({
          id: `environmentSetup.secret.optionalValue`,
          defaultMessage: `Your value (optional)`,
          description: `Placeholder for an optional personal secret value belonging to the signed-in user`,
        })),
        (t[5] = p),
        (t[6] = e)),
      (b = e));
  }
  let S;
  t[7] !== p || t[8] !== h
    ? ((S = h
        ? p.formatMessage({
            id: `restricted.environmentSetup.configuration.secret.dialog.hide`,
            defaultMessage: `Hide secret value`,
            description: `Accessible label for hiding the currently revealed cloud environment secret value`,
          })
        : p.formatMessage({
            id: `restricted.environmentSetup.configuration.secret.dialog.reveal`,
            defaultMessage: `Reveal secret value`,
            description: `Accessible label for showing or hiding a private cloud environment secret value in its native dialog`,
          })),
      (t[7] = p),
      (t[8] = h),
      (t[9] = S))
    : (S = t[9]);
  let C = S,
    w = r.length === 0,
    T;
  t[10] === h
    ? (T = t[11])
    : ((T = () => {
        let e = m.current,
          t = e?.selectionStart ?? null,
          n = e?.selectionEnd ?? null;
        ((0, dr.flushSync)(() => g(!h)), e?.getBoundingClientRect(), e?.setSelectionRange(t, n));
      }),
      (t[10] = h),
      (t[11] = T));
  let E;
  t[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((E = (0, fr.jsx)(x, {})), (t[12] = E)) : (E = t[12]);
  let D;
  t[13] !== n || t[14] !== w || t[15] !== T || t[16] !== C
    ? ((D = (0, fr.jsx)(H, {
        "aria-label": C,
        "aria-controls": n,
        color: `ghost`,
        disabled: w,
        size: `inputIcon`,
        onMouseDown: cr,
        onClick: T,
        children: E,
      })),
      (t[13] = n),
      (t[14] = w),
      (t[15] = T),
      (t[16] = C),
      (t[17] = D))
    : (D = t[17]);
  let O;
  t[18] !== D || t[19] !== C
    ? ((O = (0, fr.jsx)(Te, { cloneCustomTrigger: !0, tooltipContent: C, children: D })),
      (t[18] = D),
      (t[19] = C),
      (t[20] = O))
    : (O = t[20]);
  let k = O,
    A;
  t[21] !== o || t[22] !== p
    ? ((A =
        o ??
        p.formatMessage({
          id: `restricted.environmentSetup.input.secret.value`,
          defaultMessage: `Secret value`,
          description: `Accessible label for a cloud environment secret value`,
        })),
      (t[21] = o),
      (t[22] = p),
      (t[23] = A))
    : (A = t[23]);
  let j = h ? `text` : `password`,
    M = u == null ? `default` : `segmented`,
    N = u == null ? void 0 : k,
    P = u ?? k,
    F,
    I;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = () => v(!0)), (I = () => v(!1)), (t[24] = F), (t[25] = I))
    : ((F = t[24]), (I = t[25]));
  let L;
  t[26] === a ? (L = t[27]) : ((L = (e) => a(e.target.value)), (t[26] = a), (t[27] = L));
  let R;
  return (
    t[28] !== c ||
    t[29] !== n ||
    t[30] !== s ||
    t[31] !== b ||
    t[32] !== A ||
    t[33] !== j ||
    t[34] !== M ||
    t[35] !== N ||
    t[36] !== P ||
    t[37] !== L ||
    t[38] !== r
      ? ((R = (0, fr.jsx)(Ot, {
          id: n,
          ref: m,
          "aria-invalid": s,
          "aria-describedby": c,
          "data-environment-invalid": s,
          "aria-label": A,
          autoComplete: `new-password`,
          placeholder: b,
          type: j,
          value: r,
          variant: M,
          trailingInlineControl: N,
          trailingControl: P,
          onFocus: F,
          onBlur: I,
          onChange: L,
        })),
        (t[28] = c),
        (t[29] = n),
        (t[30] = s),
        (t[31] = b),
        (t[32] = A),
        (t[33] = j),
        (t[34] = M),
        (t[35] = N),
        (t[36] = P),
        (t[37] = L),
        (t[38] = r),
        (t[39] = R))
      : (R = t[39]),
    R
  );
}
function cr(e) {
  return e.preventDefault();
}
var lr, ur, dr, fr;
function pr() {
  return (pr = e(() => {
    ((lr = A()), (ur = p()), (dr = m()), V(), W(), I(), Ke(), Ae(), (fr = y()));
  }))();
}
function mr(e) {
  let t = (0, hr.c)(26),
    {
      id: n,
      configuration: r,
      namespace: i,
      name: a,
      value: o,
      saved: s,
      ariaLabel: c,
      invalid: l,
      describedBy: u,
      onChange: d,
      scopeControl: f,
    } = e,
    p = s !== void 0 && s,
    m;
  t[0] !== r || t[1] !== i
    ? ((m = { configuration: r, namespace: i }), (t[0] = r), (t[1] = i), (t[2] = m))
    : (m = t[2]);
  let { data: h, isError: g, refetch: _ } = Ee(qt, m),
    v;
  t[3] !== r || t[4] !== h || t[5] !== a
    ? ((v = h == null || r == null ? void 0 : Xt(h, a, r.configId)),
      (t[3] = r),
      (t[4] = h),
      (t[5] = a),
      (t[6] = v))
    : (v = t[6]);
  let y = v,
    b = p || (y != null && y !== `ambiguous`),
    x;
  o.length === 0 && !b && (y === `ambiguous` ? (x = _r.ambiguous) : g && (x = _r.unavailable));
  let S;
  t[7] !== c ||
  t[8] !== u ||
  t[9] !== b ||
  t[10] !== n ||
  t[11] !== l ||
  t[12] !== i ||
  t[13] !== d ||
  t[14] !== f ||
  t[15] !== o
    ? ((S =
        i === `sensitive`
          ? (0, gr.jsx)(sr, {
              id: n,
              value: o,
              personal: !0,
              saved: b,
              ariaLabel: c,
              invalid: l,
              describedBy: u,
              onChange: d,
              scopeControl: f,
            })
          : (0, gr.jsx)(nr, {
              id: n,
              value: o,
              optional: !0,
              hasSavedValue: b,
              ariaLabel: c,
              ariaInvalid: l,
              ariaDescribedBy: u,
              onChange: d,
              scopeControl: f,
            })),
      (t[7] = c),
      (t[8] = u),
      (t[9] = b),
      (t[10] = n),
      (t[11] = l),
      (t[12] = i),
      (t[13] = d),
      (t[14] = f),
      (t[15] = o),
      (t[16] = S))
    : (S = t[16]);
  let C;
  t[17] === x
    ? (C = t[18])
    : ((C =
        x == null
          ? null
          : (0, gr.jsx)(`div`, {
              className: `text-xs text-secondary select-none`,
              role: `status`,
              children: (0, gr.jsx)(X, { ...x }),
            })),
      (t[17] = x),
      (t[18] = C));
  let w;
  t[19] !== g || t[20] !== _
    ? ((w = g
        ? (0, gr.jsx)(H, {
            color: `ghost`,
            size: `compact`,
            onClick: () => void _(),
            children: (0, gr.jsx)(X, { ..._r.retry }),
          })
        : null),
      (t[19] = g),
      (t[20] = _),
      (t[21] = w))
    : (w = t[21]);
  let T;
  return (
    t[22] !== S || t[23] !== C || t[24] !== w
      ? ((T = (0, gr.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-1`, children: [S, C, w] })),
        (t[22] = S),
        (t[23] = C),
        (t[24] = w),
        (t[25] = T))
      : (T = t[25]),
    T
  );
}
var hr, gr, _r;
function vr() {
  return (vr = e(() => {
    ((hr = A()),
      K(),
      V(),
      W(),
      or(),
      kt(),
      pr(),
      (gr = y()),
      (_r = U({
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
      name: n,
      value: r,
      otherDomainCount: i,
      disabled: a,
      readOnly: o,
      invalid: s,
      describedBy: c,
      onChange: l,
    } = e,
    u = Oe(),
    d = (0, Cr.useId)(),
    [f, p] = (0, Cr.useState)(null);
  a && f != null && p(null);
  let m;
  t[0] === r ? (m = t[1]) : ((m = r.split(`,`).map(xr).filter(br)), (t[0] = r), (t[1] = m));
  let h = m,
    g;
  t[2] !== f || t[3] !== i
    ? ((g =
        f != null &&
        f.domains.length > 0 &&
        !f.input.trim() &&
        f.domains.every(
          (e, t) => Ft(e, f.domains.slice(0, t), { allowWildcards: !1, otherDomainCount: i }) == null,
        )),
      (t[2] = f),
      (t[3] = i),
      (t[4] = g))
    : (g = t[4]);
  let _ = g,
    v = f != null && !a,
    y;
  t[5] !== a || t[6] !== h
    ? ((y = (e) => {
        p(e && !a ? { domains: h, input: `` } : null);
      }),
      (t[5] = a),
      (t[6] = h),
      (t[7] = y))
    : (y = t[7]);
  let b;
  t[8] !== u || t[9] !== n
    ? ((b = u.formatMessage(
        {
          id: `environmentSetup.review.secret.domainsForSecret`,
          defaultMessage: `Allowed domains for {name}`,
          description: `Accessible label for editing the allowed destinations of a named proxy secret`,
        },
        { name: n },
      )),
      (t[8] = u),
      (t[9] = n),
      (t[10] = b))
    : (b = t[10]);
  let x;
  t[11] === h.length
    ? (x = t[12])
    : ((x = (0, wr.jsx)(X, {
        id: `environmentSetup.review.secret.domainCount`,
        defaultMessage: `{count, plural, =0 {No domains} one {# domain} other {# domains}}`,
        description: `Number of allowed destinations for a proxy secret`,
        values: { count: h.length },
      })),
      (t[11] = h.length),
      (t[12] = x));
  let S;
  t[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = (0, wr.jsx)(Se, {})), (t[13] = S)) : (S = t[13]);
  let C;
  t[14] !== c || t[15] !== a || t[16] !== s || t[17] !== b || t[18] !== x
    ? ((C = (0, wr.jsx)(ue, {
        asChild: !0,
        children: (0, wr.jsxs)(H, {
          className: `w-full justify-between`,
          "aria-label": b,
          "aria-invalid": s,
          "aria-describedby": c,
          "data-environment-invalid": s,
          color: `outline`,
          size: `inputControl`,
          disabled: a,
          children: [x, S],
        }),
      })),
      (t[14] = c),
      (t[15] = a),
      (t[16] = s),
      (t[17] = b),
      (t[18] = x),
      (t[19] = C))
    : (C = t[19]);
  let w;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, wr.jsx)(X, {
        id: `environmentSetup.review.secret.domains`,
        defaultMessage: `Allowed domains`,
        description: `Title and input label for allowed HTTPS destinations for a proxy secret`,
      })),
      (t[20] = w))
    : (w = t[20]);
  let T;
  t[21] === d ? (T = t[22]) : ((T = (0, wr.jsx)(pe, { id: d, children: w })), (t[21] = d), (t[22] = T));
  let E;
  t[23] !== a || t[24] !== f || t[25] !== i || t[26] !== o
    ? ((E =
        f != null &&
        (0, wr.jsx)(Pn, {
          purpose: `secret`,
          disabled: a,
          readOnly: o,
          showErrors: !0,
          domains: f.domains,
          value: f.input,
          otherDomainCount: i,
          onChange: (e) => p({ ...f, domains: e }),
          onInputChange: (e) => p((t) => (t == null ? null : { ...t, input: e })),
        })),
      (t[23] = a),
      (t[24] = f),
      (t[25] = i),
      (t[26] = o),
      (t[27] = E))
    : (E = t[27]);
  let D;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, wr.jsx)(`p`, {
        className: `text-secondary`,
        children: (0, wr.jsx)(X, {
          id: `environmentSetup.review.secret.domainsHelp`,
          defaultMessage: `Add at least one exact hostname that can receive this secret`,
          description: `Explains that proxy secrets require at least one exact destination hostname before saving`,
        }),
      })),
      (t[28] = D))
    : (D = t[28]);
  let O;
  t[29] === o
    ? (O = t[30])
    : ((O =
        !o &&
        (0, wr.jsx)(H, {
          color: `secondary`,
          size: `compact`,
          onClick: () => p(null),
          children: (0, wr.jsx)(X, {
            id: `environmentSetup.secret.domainsCancel`,
            defaultMessage: `Cancel`,
            description: `Discard unconfirmed changes to a secret's allowed destinations and close the popover`,
          }),
        })),
      (t[29] = o),
      (t[30] = O));
  let k = !o && !_,
    A;
  t[31] !== _ || t[32] !== a || t[33] !== f || t[34] !== l || t[35] !== o
    ? ((A = () => {
        (!o && !a && _ && f != null && l(f.domains.join(`, `)), p(null));
      }),
      (t[31] = _),
      (t[32] = a),
      (t[33] = f),
      (t[34] = l),
      (t[35] = o),
      (t[36] = A))
    : (A = t[36]);
  let j;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, wr.jsx)(X, {
        id: `environmentSetup.secret.domainsDone`,
        defaultMessage: `Done`,
        description: `Close the domain picker after editing a secret's allowed hostnames`,
      })),
      (t[37] = j))
    : (j = t[37]);
  let M;
  t[38] !== k || t[39] !== A
    ? ((M = (0, wr.jsx)(H, { color: `primary`, size: `compact`, disabled: k, onClick: A, children: j })),
      (t[38] = k),
      (t[39] = A),
      (t[40] = M))
    : (M = t[40]);
  let N;
  t[41] !== O || t[42] !== M
    ? ((N = (0, wr.jsxs)(`div`, { className: `flex justify-end gap-2`, children: [O, M] })),
      (t[41] = O),
      (t[42] = M),
      (t[43] = N))
    : (N = t[43]);
  let P;
  t[44] !== T || t[45] !== E || t[46] !== N
    ? ((P = (0, wr.jsxs)(`div`, { className: `flex flex-col gap-3 p-2 text-sm`, children: [T, E, D, N] })),
      (t[44] = T),
      (t[45] = E),
      (t[46] = N),
      (t[47] = P))
    : (P = t[47]);
  let F;
  t[48] !== P || t[49] !== d
    ? ((F = (0, wr.jsx)(we, { size: `large`, variant: `menu`, "aria-labelledby": d, children: P })),
      (t[48] = P),
      (t[49] = d),
      (t[50] = F))
    : (F = t[50]);
  let I;
  return (
    t[51] !== F || t[52] !== v || t[53] !== y || t[54] !== C
      ? ((I = (0, wr.jsxs)(oe, { open: v, onOpenChange: y, children: [C, F] })),
        (t[51] = F),
        (t[52] = v),
        (t[53] = y),
        (t[54] = C),
        (t[55] = I))
      : (I = t[55]),
    I
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
    ((Sr = A()), (Cr = p()), V(), W(), I(), J(), Bn(), ft(), (wr = y()));
  }))();
}
function Er(e) {
  let t = (0, Dr.c)(38),
    { name: n, source: r, disabled: i, attached: a, onChange: s } = e,
    c = a !== void 0 && a,
    u = Oe(),
    d = c ? `ghostActive` : `outline`,
    f = c ? `inputSelect` : `settingsSelect`,
    p;
  t[0] !== u || t[1] !== n
    ? ((p = u.formatMessage(
        {
          id: `environmentSetup.review.secret.scope`,
          defaultMessage: `Scope for {name}`,
          description: `Accessible label for choosing Environment or Personal scope for a named secret`,
        },
        { name: n },
      )),
      (t[0] = u),
      (t[1] = n),
      (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] === r
    ? (m = t[4])
    : ((m =
        r === `user_provided`
          ? (0, Or.jsx)(X, {
              id: `environmentSetup.review.secret.personal`,
              defaultMessage: `Personal`,
              description: `Secret scope whose value belongs to the signed-in user`,
            })
          : (0, Or.jsx)(X, {
              id: `environmentSetup.review.secret.environment`,
              defaultMessage: `Environment`,
              description: `Secret scope shared by users of the environment`,
            })),
      (t[3] = r),
      (t[4] = m));
  let h;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = (0, Or.jsx)(Se, {})), (t[5] = h)) : (h = t[5]);
  let g;
  t[6] !== i || t[7] !== d || t[8] !== f || t[9] !== p || t[10] !== m
    ? ((g = (0, Or.jsxs)(H, {
        className: `w-36 justify-between`,
        color: d,
        size: f,
        disabled: i,
        "aria-label": p,
        children: [m, h],
      })),
      (t[6] = i),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m),
      (t[11] = g))
    : (g = t[11]);
  let _;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Or.jsx)(je.SectionLabel, {
        children: (0, Or.jsx)(X, {
          id: `environmentSetup.secret.typeOfKey`,
          defaultMessage: `Type of key`,
          description: `Heading for choosing Environment or Personal scope for a secret value`,
        }),
      })),
      (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Or.jsx)(l, { asset: o, className: `shrink-0` })), (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] !== s || t[15] !== r
    ? ((y = () => r !== `environment` && s(`environment`)), (t[14] = s), (t[15] = r), (t[16] = y))
    : (y = t[16]);
  let b, x;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Or.jsx)(X, {
        id: `environmentSetup.review.secret.environmentHelp`,
        defaultMessage: `All users of this environment can use this value`,
        description: `Explanation of Environment secret scope`,
      })),
      (x = (0, Or.jsx)(X, {
        id: `environmentSetup.review.secret.environment`,
        defaultMessage: `Environment`,
        description: `Secret scope shared by users of the environment`,
      })),
      (t[17] = b),
      (t[18] = x))
    : ((b = t[17]), (x = t[18]));
  let S;
  t[19] !== i || t[20] !== y
    ? ((S = (0, Or.jsx)(je.RadioItem, {
        variant: `descriptive`,
        disabled: i,
        icon: v,
        value: `environment`,
        onSelect: y,
        SubText: b,
        children: x,
      })),
      (t[19] = i),
      (t[20] = y),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Or.jsx)(l, { asset: de, className: `shrink-0` })), (t[22] = C))
    : (C = t[22]);
  let w;
  t[23] !== s || t[24] !== r
    ? ((w = () => r !== `user_provided` && s(`user_provided`)), (t[23] = s), (t[24] = r), (t[25] = w))
    : (w = t[25]);
  let T, E;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Or.jsx)(X, {
        id: `environmentSetup.review.secret.personalHelp`,
        defaultMessage: `Each user can add their own key`,
        description: `Explanation of Personal scope; adding a value is optional`,
      })),
      (E = (0, Or.jsx)(X, {
        id: `environmentSetup.review.secret.personal`,
        defaultMessage: `Personal`,
        description: `Secret scope whose value belongs to the signed-in user`,
      })),
      (t[26] = T),
      (t[27] = E))
    : ((T = t[26]), (E = t[27]));
  let D;
  t[28] !== i || t[29] !== w
    ? ((D = (0, Or.jsx)(je.RadioItem, {
        variant: `descriptive`,
        disabled: i,
        icon: C,
        value: `user_provided`,
        onSelect: w,
        SubText: T,
        children: E,
      })),
      (t[28] = i),
      (t[29] = w),
      (t[30] = D))
    : (D = t[30]);
  let O;
  t[31] !== r || t[32] !== S || t[33] !== D
    ? ((O = (0, Or.jsxs)(je.RadioGroup, { value: r, children: [S, D] })),
      (t[31] = r),
      (t[32] = S),
      (t[33] = D),
      (t[34] = O))
    : (O = t[34]);
  let k;
  return (
    t[35] !== O || t[36] !== g
      ? ((k = (0, Or.jsxs)(Fe, { contentWidth: `panel`, triggerButton: g, children: [_, O] })),
        (t[35] = O),
        (t[36] = g),
        (t[37] = k))
      : (k = t[37]),
    k
  );
}
var Dr, Or;
function kr() {
  return (kr = e(() => {
    ((Dr = A()), We(), he(), V(), W(), re(), E(), I(), (Or = y()));
  }))();
}
function Ar(e) {
  let t = (0, jr.c)(91),
    {
      keyInputRef: n,
      secret: r,
      secrets: i,
      issues: a,
      configuration: o,
      onChange: s,
      onDelete: c,
      readOnly: l,
      disabled: u,
    } = e,
    d = l !== void 0 && l,
    f = u !== void 0 && u,
    p = Oe(),
    m = (0, Mr.useId)(),
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T;
  if (
    t[0] !== o ||
    t[1] !== f ||
    t[2] !== m ||
    t[3] !== p ||
    t[4] !== a ||
    t[5] !== n ||
    t[6] !== s ||
    t[7] !== d ||
    t[8] !== r
  ) {
    let e = Nt(r);
    T =
      r.injectionTarget ??
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
    let i;
    if (t[20] !== a || t[21] !== r.id) {
      let e;
      (t[23] === r.id
        ? (e = t[24])
        : ((e = (e) => {
            let { field: t } = e;
            return t === `secret-${r.id}-key`;
          }),
          (t[23] = r.id),
          (t[24] = e)),
        (i = a.find(e)),
        (t[20] = a),
        (t[21] = r.id),
        (t[22] = i));
    } else i = t[22];
    let c = i,
      l;
    if (t[25] !== a || t[26] !== r.id) {
      let e;
      (t[28] === r.id
        ? (e = t[29])
        : ((e = (e) => {
            let { field: t } = e;
            return t === `secret-${r.id}-value`;
          }),
          (t[28] = r.id),
          (t[29] = e)),
        (l = a.find(e)),
        (t[25] = a),
        (t[26] = r.id),
        (t[27] = l));
    } else l = t[27];
    let u = l,
      E;
    if (t[30] !== a || t[31] !== r.id) {
      let e;
      (t[33] === r.id
        ? (e = t[34])
        : ((e = (e) => {
            let { field: t } = e;
            return t === `secret-${r.id}-domains`;
          }),
          (t[33] = r.id),
          (t[34] = e)),
        (E = a.find(e)),
        (t[30] = a),
        (t[31] = r.id),
        (t[32] = E));
    } else E = t[32];
    h = E;
    let D;
    (t[35] !== p || t[36] !== r.source
      ? ((D =
          r.source === `user_provided`
            ? p.formatMessage({
                id: `restricted.environmentSetup.secret.removeRequirement`,
                defaultMessage: `Remove requirement`,
                description: `Button to remove a user-provided requirement from the environment without deleting a saved personal credential`,
              })
            : p.formatMessage({
                id: `restricted.environmentSetup.input.secret.delete`,
                defaultMessage: `Delete secret`,
                description: `Accessible label for removing an environment secret`,
              })),
        (t[35] = p),
        (t[36] = r.source),
        (t[37] = D))
      : (D = t[37]),
      (g = D));
    let O;
    t[38] !== s || t[39] !== r
      ? ((O = (e) =>
          s({
            ...r,
            source: e,
            optional: e === `user_provided`,
            value: ``,
            serverId: void 0,
            personalSecret: void 0,
            isMissing: e === `environment`,
          })),
        (t[38] = s),
        (t[39] = r),
        (t[40] = O))
      : (O = t[40]);
    let k = (0, Nr.jsx)(Er, {
      attached: !0,
      name: T.name,
      source: r.source ?? `environment`,
      disabled: f || d,
      onChange: O,
    });
    ((C = `flex min-w-0 flex-col gap-2`),
      (w = T.name || r.name),
      (_ = `group`),
      (S = `flex min-w-0 items-start gap-2`),
      (b = `flex min-w-0 flex-1 flex-wrap items-start gap-2`));
    let A;
    t[41] === p
      ? (A = t[42])
      : ((A = p.formatMessage({
          id: `restricted.environmentSetup.input.secret.name.placeholder`,
          defaultMessage: `Key`,
          description: `Placeholder for a cloud environment secret key`,
        })),
        (t[41] = p),
        (t[42] = A));
    let j;
    (t[43] === p
      ? (j = t[44])
      : ((j = p.formatMessage({
          id: `restricted.environmentSetup.input.secret.key`,
          defaultMessage: `Secret key`,
          description: `Accessible label for the environment variable key used by a cloud environment proxy secret`,
        })),
        (t[43] = p),
        (t[44] = j)),
      (x = (0, Nr.jsx)(`div`, {
        className: `min-w-0 flex-1 basis-32`,
        children: (0, Nr.jsx)(Ot, {
          ref: n,
          placeholder: A,
          "aria-label": j,
          "aria-invalid": c != null,
          "aria-describedby": c == null ? void 0 : `${m}-key`,
          "data-environment-invalid": c != null,
          autoComplete: `off`,
          maxLength: 128,
          readOnly: d,
          value: T.name,
          variant: `segmented`,
          onChange: (e) =>
            s({
              ...r,
              name: e.target.value,
              personalSecret: void 0,
              target: void 0,
              injectionTarget: { ...T, name: e.target.value },
            }),
        }),
      })),
      (v = `min-w-0 flex-2 basis-64`),
      (y =
        r.source === `user_provided`
          ? (0, Nr.jsx)(
              mr,
              {
                id: `${m}-value-input`,
                scopeControl: k,
                ariaLabel: p.formatMessage(
                  {
                    id: `restricted.environmentSetup.batchSecrets.value`,
                    defaultMessage: `Value for {name}`,
                    description: `Accessible name of a secret value input in the batch editor`,
                  },
                  { name: T.name },
                ),
                value: r.value,
                configuration: o,
                namespace: `sensitive`,
                name: T.name,
                saved: r.personalSecret != null,
                invalid: u != null,
                describedBy: u == null ? void 0 : `${m}-value`,
                onChange: (e) => s({ ...r, value: e }),
              },
              r.source,
            )
          : (0, Nr.jsx)(
              sr,
              {
                id: `${m}-value-input`,
                scopeControl: k,
                ariaLabel: p.formatMessage(
                  {
                    id: `restricted.environmentSetup.batchSecrets.value`,
                    defaultMessage: `Value for {name}`,
                    description: `Accessible name of a secret value input in the batch editor`,
                  },
                  { name: T.name },
                ),
                value: r.value,
                saved: r.serverId != null && !r.isMissing,
                invalid: u != null,
                describedBy: u == null ? void 0 : `${m}-value`,
                onChange: (e) => s({ ...r, value: e }),
              },
              r.source,
            )),
      (t[0] = o),
      (t[1] = f),
      (t[2] = m),
      (t[3] = p),
      (t[4] = a),
      (t[5] = n),
      (t[6] = s),
      (t[7] = d),
      (t[8] = r),
      (t[9] = h),
      (t[10] = g),
      (t[11] = _),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S),
      (t[17] = C),
      (t[18] = w),
      (t[19] = T));
  } else
    ((h = t[9]),
      (g = t[10]),
      (_ = t[11]),
      (v = t[12]),
      (y = t[13]),
      (b = t[14]),
      (x = t[15]),
      (S = t[16]),
      (C = t[17]),
      (w = t[18]),
      (T = t[19]));
  let E;
  t[45] !== v || t[46] !== y
    ? ((E = (0, Nr.jsx)(`div`, { className: v, children: y })), (t[45] = v), (t[46] = y), (t[47] = E))
    : (E = t[47]);
  let D = T.name,
    O = T.domain ?? ``,
    k;
  if (t[48] !== r.id || t[49] !== i) {
    let e;
    (t[51] === r.id
      ? (e = t[52])
      : ((e = (e, t) => {
          if (t.id === r.id) return e;
          let n = Nt(t);
          return e + (`environment_variable` in n ? (n.allowed_domains?.length ?? 0) : 0);
        }),
        (t[51] = r.id),
        (t[52] = e)),
      (k = i.reduce(e, 0)),
      (t[48] = r.id),
      (t[49] = i),
      (t[50] = k));
  } else k = t[50];
  let A = d && (T.type !== `environment_variable` || !r.requested),
    j = h != null,
    M = h == null ? void 0 : `${m}-domains`,
    N;
  t[53] !== s || t[54] !== r || t[55] !== T
    ? ((N = (e) => s({ ...r, target: void 0, injectionTarget: { ...T, domain: e } })),
      (t[53] = s),
      (t[54] = r),
      (t[55] = T),
      (t[56] = N))
    : (N = t[56]);
  let P;
  t[57] !== f ||
  t[58] !== O ||
  t[59] !== k ||
  t[60] !== A ||
  t[61] !== j ||
  t[62] !== M ||
  t[63] !== N ||
  t[64] !== T.name
    ? ((P = (0, Nr.jsx)(`div`, {
        className: `w-36 shrink-0`,
        children: (0, Nr.jsx)(yr, {
          name: D,
          value: O,
          otherDomainCount: k,
          disabled: f,
          readOnly: A,
          invalid: j,
          describedBy: M,
          onChange: N,
        }),
      })),
      (t[57] = f),
      (t[58] = O),
      (t[59] = k),
      (t[60] = A),
      (t[61] = j),
      (t[62] = M),
      (t[63] = N),
      (t[64] = T.name),
      (t[65] = P))
    : (P = t[65]);
  let F;
  t[66] !== E || t[67] !== P || t[68] !== b || t[69] !== x
    ? ((F = (0, Nr.jsxs)(`div`, { className: b, children: [x, E, P] })),
      (t[66] = E),
      (t[67] = P),
      (t[68] = b),
      (t[69] = x),
      (t[70] = F))
    : (F = t[70]);
  let I;
  t[71] === Symbol.for(`react.memo_cache_sentinel`) ? ((I = (0, Nr.jsx)(Me, {})), (t[71] = I)) : (I = t[71]);
  let L;
  t[72] !== c || t[73] !== g
    ? ((L = (0, Nr.jsx)(H, { "aria-label": g, color: `ghost`, size: `icon`, onClick: c, children: I })),
      (t[72] = c),
      (t[73] = g),
      (t[74] = L))
    : (L = t[74]);
  let R;
  t[75] !== g || t[76] !== L
    ? ((R = (0, Nr.jsx)(`div`, {
        className: `flex h-10 w-8 shrink-0 items-center justify-center`,
        children: (0, Nr.jsx)(Te, { tooltipContent: g, cloneCustomTrigger: !0, children: L }),
      })),
      (t[75] = g),
      (t[76] = L),
      (t[77] = R))
    : (R = t[77]);
  let z;
  t[78] !== F || t[79] !== R || t[80] !== S
    ? ((z = (0, Nr.jsxs)(`div`, { className: S, children: [F, R] })),
      (t[78] = F),
      (t[79] = R),
      (t[80] = S),
      (t[81] = z))
    : (z = t[81]);
  let ee;
  t[82] !== m || t[83] !== a
    ? ((ee =
        a.length > 0
          ? (0, Nr.jsx)(`div`, {
              className: `flex flex-col gap-2`,
              children: a.map((e) =>
                (0, Nr.jsx)(Cn, { id: `${m}-${e.field?.split(`-`).at(-1)}`, issue: e }, e.field),
              ),
            })
          : null),
      (t[82] = m),
      (t[83] = a),
      (t[84] = ee))
    : (ee = t[84]);
  let B;
  return (
    t[85] !== _ || t[86] !== z || t[87] !== ee || t[88] !== C || t[89] !== w
      ? ((B = (0, Nr.jsxs)(`div`, { className: C, "aria-label": w, role: _, children: [z, ee] })),
        (t[85] = _),
        (t[86] = z),
        (t[87] = ee),
        (t[88] = C),
        (t[89] = w),
        (t[90] = B))
      : (B = t[90]),
    B
  );
}
var jr, Mr, Nr;
function Pr() {
  return (Pr = e(() => {
    ((jr = A()), zt(), (Mr = p()), V(), W(), I(), Ke(), Ae(), Ht(), vr(), Nn(), pr(), Tr(), kr(), (Nr = y()));
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
    zt();
  }))();
}
function Rr(e) {
  let t = (0, Br.c)(80),
    { hasConflict: n, initialSecrets: r, requireValues: i, configuration: a, onClose: o, onLocalSave: s } = e,
    c = i === void 0 || i,
    l = a === void 0 ? null : a,
    u;
  t[0] === r
    ? (u = t[1])
    : ((u = () => (r.length > 0 ? r : [{ id: 0, name: ``, value: ``, source: `environment` }])),
      (t[0] = r),
      (t[1] = u));
  let [d, f] = (0, Vr.useState)(u),
    [p, m] = (0, Vr.useState)(null),
    h;
  t[2] === d ? (h = t[3]) : ((h = Math.max(-1, ...d.map(zr))), (t[2] = d), (t[3] = h));
  let g = (0, Vr.useRef)(h + 1),
    [v, y] = (0, Vr.useState)(!1),
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
    P,
    F,
    I,
    L,
    R;
  if (
    t[4] !== l ||
    t[5] !== n ||
    t[6] !== v ||
    t[7] !== r ||
    t[8] !== p ||
    t[9] !== o ||
    t[10] !== s ||
    t[11] !== c ||
    t[12] !== d ||
    t[13] !== x
  ) {
    let e;
    (t[29] === r
      ? (e = t[30])
      : ((e = (e) =>
          r.some((t) => {
            let { id: n } = t;
            return n === e.id;
          }) ||
          e.name.length > 0 ||
          e.value.length > 0 ||
          (e.injectionTarget?.domain?.length ?? 0) > 0 ||
          e.source === `user_provided`),
        (t[29] = r),
        (t[30] = e)),
      (E = d.filter(e)));
    let i;
    t[31] !== c || t[32] !== d
      ? ((i = (e) =>
          Mt(
            e,
            d.some((t) => t.id !== e.id && t.name === e.name),
            c,
          )),
        (t[31] = c),
        (t[32] = d),
        (t[33] = i))
      : (i = t[33]);
    let a = E.flatMap(i),
      u;
    t[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, Ur.jsx)(X, {
          id: `restricted.environmentSetup.batchSecrets.title`,
          defaultMessage: `Manage secrets`,
          description: `Title of the cloud environment batch secret editor`,
        })),
        (t[34] = u))
      : (u = t[34]);
    let m = u;
    ((T = ee),
      (A = !0),
      (j = `xxwide`),
      t[35] === o
        ? (M = t[36])
        : ((M = (e) => {
            e || o();
          }),
          (t[35] = o),
          (t[36] = M)),
      (w = _),
      (I = `form`),
      (L = !0),
      (R = `max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-hidden`),
      (D = (e) => {
        (e.preventDefault(),
          e.stopPropagation(),
          (0, Hr.flushSync)(() => S(!0)),
          et(e.currentTarget),
          !n && !v && a.length === 0 && (s(E), o()));
      }),
      t[37] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((O = (0, Ur.jsx)(ke, { className: `sr-only`, children: m })), (t[37] = O))
        : (O = t[37]),
      t[38] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((k = (0, Ur.jsx)(Ue, { className: `shrink-0`, children: (0, Ur.jsx)(N, { title: m }) })),
          (t[38] = k))
        : (k = t[38]),
      (C = Ue),
      (P = `min-h-0 gap-4 overflow-y-auto`),
      (F =
        d.length > 0
          ? (0, Ur.jsx)(`div`, {
              className: `flex flex-col gap-3`,
              children: d.map((e) =>
                (0, Ur.jsx)(
                  Ar,
                  {
                    keyInputRef: p?.id === e.id ? p.ref : void 0,
                    configuration: l,
                    secret: e,
                    secrets: d,
                    readOnly: e.requested || e.injectionTarget?.type === `http_header`,
                    issues: x
                      ? a.filter((t) => {
                          let { field: n } = t;
                          return n?.startsWith(`secret-${e.id}-`);
                        })
                      : [],
                    onChange: (e) => f(d.map((t) => (t.id === e.id ? e : t))),
                    onDelete: () =>
                      f(
                        d.filter((t) => {
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
      (t[4] = l),
      (t[5] = n),
      (t[6] = v),
      (t[7] = r),
      (t[8] = p),
      (t[9] = o),
      (t[10] = s),
      (t[11] = c),
      (t[12] = d),
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
      (t[24] = P),
      (t[25] = F),
      (t[26] = I),
      (t[27] = L),
      (t[28] = R));
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
      (P = t[24]),
      (F = t[25]),
      (I = t[26]),
      (L = t[27]),
      (R = t[28]));
  let z;
  t[39] === E
    ? (z = t[40])
    : ((z = (e, t) => {
        g.current += 1;
        let n = g.current;
        (f([
          ...E,
          {
            id: n,
            name: e,
            value: ``,
            source: `environment`,
            injectionTarget: { type: `environment_variable`, name: e },
          },
        ]),
          m({ id: n, ref: t }));
      }),
      (t[39] = E),
      (t[40] = z));
  let B;
  t[41] === E
    ? (B = t[42])
    : ((B = (e) => {
        let t = Ir(E, e);
        return (
          t.ok &&
            (m(null),
            f(t.secrets.map((e, t) => (t < E.length ? e : ((g.current += 1), { ...e, id: g.current }))))),
          t
        );
      }),
      (t[41] = E),
      (t[42] = B));
  let V;
  t[43] !== E.length || t[44] !== z || t[45] !== B
    ? ((V = (0, Ur.jsx)(Zn, {
        limit: 20,
        entryCount: E.length,
        onAddKey: z,
        onPendingChange: y,
        onImport: B,
      })),
      (t[43] = E.length),
      (t[44] = z),
      (t[45] = B),
      (t[46] = V))
    : (V = t[46]);
  let U;
  t[47] === n ? (U = t[48]) : ((U = n ? (0, Ur.jsx)(qn, {}) : null), (t[47] = n), (t[48] = U));
  let W;
  t[49] !== C || t[50] !== V || t[51] !== U || t[52] !== P || t[53] !== F
    ? ((W = (0, Ur.jsxs)(C, { className: P, children: [F, V, U] })),
      (t[49] = C),
      (t[50] = V),
      (t[51] = U),
      (t[52] = P),
      (t[53] = F),
      (t[54] = W))
    : (W = t[54]);
  let G;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Ur.jsx)(X, {
        id: `restricted.environmentSetup.batchSecrets.cancel`,
        defaultMessage: `Cancel`,
        description: `Discards unsaved batch secret edits and closes the modal`,
      })),
      (t[55] = G))
    : (G = t[55]);
  let K;
  t[56] === o
    ? (K = t[57])
    : ((K = (0, Ur.jsx)(H, { className: `me-auto`, color: `secondary`, onClick: o, children: G })),
      (t[56] = o),
      (t[57] = K));
  let q = n || v,
    J;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, Ur.jsx)(X, {
        id: `restricted.environmentSetup.batchSecrets.save`,
        defaultMessage: `Save`,
        description: `Stages edited cloud environment secrets until the environment panel is saved`,
      })),
      (t[58] = J))
    : (J = t[58]);
  let te;
  t[59] === q
    ? (te = t[60])
    : ((te = (0, Ur.jsx)(H, { color: `primary`, disabled: q, type: `submit`, children: J })),
      (t[59] = q),
      (t[60] = te));
  let ne;
  t[61] !== K || t[62] !== te
    ? ((ne = (0, Ur.jsx)(Ue, { className: `shrink-0`, children: (0, Ur.jsxs)(b, { children: [K, te] }) })),
      (t[61] = K),
      (t[62] = te),
      (t[63] = ne))
    : (ne = t[63]);
  let re;
  t[64] !== w ||
  t[65] !== D ||
  t[66] !== O ||
  t[67] !== k ||
  t[68] !== W ||
  t[69] !== ne ||
  t[70] !== I ||
  t[71] !== L ||
  t[72] !== R
    ? ((re = (0, Ur.jsxs)(w, { as: I, noValidate: L, className: R, onSubmit: D, children: [O, k, W, ne] })),
      (t[64] = w),
      (t[65] = D),
      (t[66] = O),
      (t[67] = k),
      (t[68] = W),
      (t[69] = ne),
      (t[70] = I),
      (t[71] = L),
      (t[72] = R),
      (t[73] = re))
    : (re = t[73]);
  let ie;
  return (
    t[74] !== T || t[75] !== A || t[76] !== j || t[77] !== M || t[78] !== re
      ? ((ie = (0, Ur.jsx)(T, { open: A, size: j, onOpenChange: M, children: re })),
        (t[74] = T),
        (t[75] = A),
        (t[76] = j),
        (t[77] = M),
        (t[78] = re),
        (t[79] = ie))
      : (ie = t[79]),
    ie
  );
}
function zr(e) {
  let { id: t } = e;
  return t;
}
var Br, Vr, Hr, Ur;
function Wr() {
  return (Wr = e(() => {
    ((Br = A()),
      zt(),
      (Vr = p()),
      (Hr = m()),
      V(),
      W(),
      v(),
      h(),
      Xn(),
      tr(),
      xt(),
      Bt(),
      Pr(),
      Lr(),
      (Ur = y()));
  }))();
}
var Gr;
function Kr() {
  return (Kr = e(() => {
    (V(),
      (Gr = U({
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
    : ((c = C(
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
      ? ((m = (0, Yr.jsx)(Te, { color: `inverse`, tooltipContent: o, open: s, children: p })),
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
    ((Jr = A()), T(), Ae(), (Yr = y()));
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
      keyInputRef: n,
      variable: r,
      keyError: i,
      valueError: a,
      configuration: o,
      disabled: s,
      onChange: c,
      onDelete: l,
    } = e,
    u = s !== void 0 && s,
    d = Oe(),
    f = (0, ni.useId)(),
    p = r.source ?? `environment`,
    m;
  t[0] !== c || t[1] !== r
    ? ((m = (e) =>
        c({
          ...r,
          source: e,
          optional: e === `user_provided`,
          value: ``,
          serverId: void 0,
          personalSecret: void 0,
          error: void 0,
        })),
      (t[0] = c),
      (t[1] = r),
      (t[2] = m))
    : (m = t[2]);
  let h;
  t[3] !== u || t[4] !== p || t[5] !== m || t[6] !== r.name
    ? ((h = (0, ri.jsx)(Er, { attached: !0, disabled: u, name: r.name, source: p, onChange: m })),
      (t[3] = u),
      (t[4] = p),
      (t[5] = m),
      (t[6] = r.name),
      (t[7] = h))
    : (h = t[7]);
  let g = h,
    _ = r.name,
    v;
  t[8] === d
    ? (v = t[9])
    : ((v = d.formatMessage({
        id: `environmentSetup.variables.editor.namePlaceholder`,
        defaultMessage: `Key`,
        description: `Placeholder for a new cloud environment variable name`,
      })),
      (t[8] = d),
      (t[9] = v));
  let y;
  t[10] === d
    ? (y = t[11])
    : ((y = d.formatMessage({
        id: `environmentSetup.variables.editor.nameInput`,
        defaultMessage: `Variable key`,
        description: `Accessible label for an editable environment variable name`,
      })),
      (t[10] = d),
      (t[11] = y));
  let b = i != null,
    x = i == null ? void 0 : `${f}-key`,
    S;
  t[12] !== c || t[13] !== r
    ? ((S = (e) => c({ ...r, name: e.target.value, personalSecret: void 0 })),
      (t[12] = c),
      (t[13] = r),
      (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] !== n || t[16] !== S || t[17] !== v || t[18] !== y || t[19] !== b || t[20] !== x || t[21] !== r.name
    ? ((C = (0, ri.jsx)(`div`, {
        className: `min-w-0 flex-1 basis-32`,
        children: (0, ri.jsx)(Ot, {
          ref: n,
          variant: `segmented`,
          placeholder: v,
          "aria-label": y,
          "aria-invalid": b,
          "aria-describedby": x,
          autoComplete: `off`,
          maxLength: 256,
          value: r.name,
          onChange: S,
        }),
      })),
      (t[15] = n),
      (t[16] = S),
      (t[17] = v),
      (t[18] = y),
      (t[19] = b),
      (t[20] = x),
      (t[21] = r.name),
      (t[22] = C))
    : (C = t[22]);
  let w;
  t[23] !== o || t[24] !== f || t[25] !== d || t[26] !== c || t[27] !== g || t[28] !== a || t[29] !== r
    ? ((w = (0, ri.jsx)(`div`, {
        className: `min-w-0 flex-2 basis-64`,
        children:
          r.source === `user_provided`
            ? (0, ri.jsx)(mr, {
                id: `${f}-value-input`,
                scopeControl: g,
                ariaLabel: d.formatMessage(
                  {
                    id: `restricted.environmentSetup.variables.batch.value`,
                    defaultMessage: `Value for {name}`,
                    description: `Accessible name of an environment variable value input in the batch editor`,
                  },
                  { name: r.name },
                ),
                saved: r.personalSecret != null,
                configuration: o,
                namespace: `not_sensitive`,
                name: r.name,
                value: r.value,
                invalid: a != null,
                describedBy: a == null ? void 0 : `${f}-value`,
                onChange: (e) => c({ ...r, value: e }),
              })
            : (0, ri.jsx)(nr, {
                id: `${f}-value-input`,
                scopeControl: g,
                ariaLabel: d.formatMessage(
                  {
                    id: `restricted.environmentSetup.variables.batch.value`,
                    defaultMessage: `Value for {name}`,
                    description: `Accessible name of an environment variable value input in the batch editor`,
                  },
                  { name: r.name },
                ),
                hasSavedValue: r.serverId != null,
                value: r.value,
                ariaInvalid: a != null,
                ariaDescribedBy: a == null ? void 0 : `${f}-value`,
                onChange: (e) => c({ ...r, value: e }),
              }),
      })),
      (t[23] = o),
      (t[24] = f),
      (t[25] = d),
      (t[26] = c),
      (t[27] = g),
      (t[28] = a),
      (t[29] = r),
      (t[30] = w))
    : (w = t[30]);
  let T;
  t[31] !== C || t[32] !== w
    ? ((T = (0, ri.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-wrap items-start gap-2`,
        children: [C, w],
      })),
      (t[31] = C),
      (t[32] = w),
      (t[33] = T))
    : (T = t[33]);
  let E;
  t[34] === d
    ? (E = t[35])
    : ((E = d.formatMessage({
        id: `restricted.environmentSetup.variables.delete`,
        defaultMessage: `Delete variable`,
        description: `Button to remove the variable from this environment`,
      })),
      (t[34] = d),
      (t[35] = E));
  let D;
  t[36] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = (0, ri.jsx)(Me, {})), (t[36] = D)) : (D = t[36]);
  let O;
  t[37] !== l || t[38] !== E
    ? ((O = (0, ri.jsx)(`div`, {
        className: `flex h-10 w-8 shrink-0 items-center justify-center`,
        children: (0, ri.jsx)(H, { "aria-label": E, color: `ghost`, size: `icon`, onClick: l, children: D }),
      })),
      (t[37] = l),
      (t[38] = E),
      (t[39] = O))
    : (O = t[39]);
  let k;
  t[40] !== T || t[41] !== O
    ? ((k = (0, ri.jsxs)(`div`, { className: `flex min-w-0 items-start gap-2`, children: [T, O] })),
      (t[40] = T),
      (t[41] = O),
      (t[42] = k))
    : (k = t[42]);
  let A;
  t[43] !== f || t[44] !== i
    ? ((A =
        i == null
          ? null
          : (0, ri.jsx)(`p`, {
              id: `${f}-key`,
              className: `text-sm text-danger`,
              role: `alert`,
              children: (0, ri.jsx)(hn, { error: i }),
            })),
      (t[43] = f),
      (t[44] = i),
      (t[45] = A))
    : (A = t[45]);
  let j;
  t[46] !== f || t[47] !== a
    ? ((j =
        a == null
          ? null
          : (0, ri.jsx)(`p`, {
              id: `${f}-value`,
              className: `text-sm text-danger`,
              role: `alert`,
              children: (0, ri.jsx)(hn, { error: a }),
            })),
      (t[46] = f),
      (t[47] = a),
      (t[48] = j))
    : (j = t[48]);
  let M;
  return (
    t[49] !== k || t[50] !== A || t[51] !== j || t[52] !== r.name
      ? ((M = (0, ri.jsxs)(`div`, {
          className: `flex min-w-0 flex-col gap-2`,
          "aria-label": _,
          role: `group`,
          children: [k, A, j],
        })),
        (t[49] = k),
        (t[50] = A),
        (t[51] = j),
        (t[52] = r.name),
        (t[53] = M))
      : (M = t[53]),
    M
  );
}
var ti, ni, ri;
function ii() {
  return (ii = e(() => {
    ((ti = A()), (ni = p()), V(), W(), I(), Ke(), vr(), kr(), gn(), or(), (ri = y()));
  }))();
}
function ai(e) {
  let t = (0, pi.c)(85),
    { initialVariables: n, unavailableNames: r, hasConflict: i, configuration: a, onClose: o, onSave: s } = e,
    c = i !== void 0 && i,
    l = a === void 0 ? null : a,
    u;
  t[0] === n
    ? (u = t[1])
    : ((u = () => (n.length > 0 ? n.map(fi) : [{ id: 0, variable: { name: ``, value: ``, optional: !1 } }])),
      (t[0] = n),
      (t[1] = u));
  let [d, f] = (0, mi.useState)(u),
    [p, m] = (0, mi.useState)(null),
    [h, g] = (0, mi.useState)(!1),
    [v, y] = (0, mi.useState)(!1),
    x = (0, mi.useRef)(null),
    S = (0, mi.useRef)(0),
    C = (0, mi.useRef)(0),
    [w, T] = (0, mi.useState)(!1),
    [E, D] = (0, mi.useState)(!1),
    [O, k] = (0, mi.useState)(null),
    A,
    j,
    M,
    P;
  if (t[2] !== n || t[3] !== d || t[4] !== r) {
    let e;
    (t[9] === n.length
      ? (e = t[10])
      : ((e = (e) => {
          let { id: t, variable: r } = e;
          return t < n.length || r.name.length > 0 || r.value.length > 0 || r.source === `user_provided`;
        }),
        (t[9] = n.length),
        (t[10] = e)),
      (A = d.filter(e)),
      (P = A.map(di)));
    let i;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, hi.jsx)(X, {
          id: `restricted.environmentSetup.variables.batch.title`,
          defaultMessage: `Manage environment variables`,
          description: `Title of the batch environment variable editor`,
        })),
        (t[11] = i))
      : (i = t[11]),
      (M = i),
      (j = new Map(
        A.map((e, t) => {
          let { id: i, variable: a } = e;
          return [
            i,
            {
              key: tt(a.name, [...r, ...P.filter((e, n) => n !== t).map(ui)]),
              value: n.includes(a) ? null : _t(a.value, a.serverId != null, a.source === `user_provided`),
            },
          ];
        }),
      )),
      (t[2] = n),
      (t[3] = d),
      (t[4] = r),
      (t[5] = A),
      (t[6] = j),
      (t[7] = M),
      (t[8] = P));
  } else ((A = t[5]), (j = t[6]), (M = t[7]), (P = t[8]));
  let F = j,
    I;
  t[12] === c
    ? (I = t[13])
    : ((I = function (e) {
        St(e.dataTransfer) &&
          (e.preventDefault(),
          e.stopPropagation(),
          (e.dataTransfer.dropEffect = c ? `none` : `copy`),
          e.type === `dragenter` && (S.current += 1),
          T(!c));
      }),
      (t[12] = c),
      (t[13] = I));
  let L = I,
    R;
  t[14] === c
    ? (R = t[15])
    : ((R = async function (e) {
        if (!St(e.dataTransfer)) return;
        (e.preventDefault(), e.stopPropagation(), (S.current = 0), T(!1));
        let t = (C.current += 1);
        if ((D(!1), c)) return;
        let n = ht(e.dataTransfer);
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
      (t[14] = c),
      (t[15] = R));
  let z = R,
    B;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => {
        St(e.dataTransfer) &&
          (e.stopPropagation(),
          (S.current = Math.max(0, S.current - 1)),
          (S.current === 0 ||
            (e.relatedTarget instanceof Node && !e.currentTarget.contains(e.relatedTarget))) &&
            ((S.current = 0), T(!1)));
      }),
      (t[16] = B))
    : (B = t[16]);
  let V;
  t[17] === z ? (V = t[18]) : ((V = (e) => void z(e)), (t[17] = z), (t[18] = V));
  let U;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = () => {
        ((S.current = 0), T(!1));
      }),
      (t[19] = U))
    : (U = t[19]);
  let W;
  t[20] !== L || t[21] !== V
    ? ((W = { onDragEnter: L, onDragOver: L, onDragLeave: B, onDrop: V, onDragEnd: U }),
      (t[20] = L),
      (t[21] = V),
      (t[22] = W))
    : (W = t[22]);
  let G;
  t[23] === o
    ? (G = t[24])
    : ((G = (e) => {
        e || o();
      }),
      (t[23] = o),
      (t[24] = G));
  let K;
  t[25] !== F || t[26] !== c || t[27] !== h || t[28] !== E || t[29] !== s || t[30] !== P
    ? ((K = (e) => {
        (e.preventDefault(), e.stopPropagation(), y(!0), !c && !E && !h && [...F.values()].every(ci) && s(P));
      }),
      (t[25] = F),
      (t[26] = c),
      (t[27] = h),
      (t[28] = E),
      (t[29] = s),
      (t[30] = P),
      (t[31] = K))
    : (K = t[31]);
  let q;
  t[32] === M
    ? (q = t[33])
    : ((q = (0, hi.jsx)(ke, { className: `sr-only`, children: M })), (t[32] = M), (t[33] = q));
  let J;
  t[34] === M
    ? (J = t[35])
    : ((J = (0, hi.jsx)(Ue, { className: `shrink-0`, children: (0, hi.jsx)(N, { title: M }) })),
      (t[34] = M),
      (t[35] = J));
  let te;
  t[36] !== l || t[37] !== F || t[38] !== p || t[39] !== d || t[40] !== v
    ? ((te =
        d.length > 0
          ? (0, hi.jsx)(`div`, {
              className: `flex flex-col gap-3`,
              children: d.map((e) => {
                let { id: t, variable: n } = e;
                return (0, hi.jsx)(
                  ei,
                  {
                    keyInputRef: p?.id === t ? p.ref : void 0,
                    configuration: l,
                    variable: n,
                    keyError: v ? (F.get(t)?.key ?? null) : null,
                    valueError: v ? (F.get(t)?.value ?? null) : null,
                    onChange: (e) => f(d.map((n) => (n.id === t ? { id: t, variable: e } : n))),
                    onDelete: () => f(d.filter((e) => e.id !== t)),
                  },
                  t,
                );
              }),
            })
          : null),
      (t[36] = l),
      (t[37] = F),
      (t[38] = p),
      (t[39] = d),
      (t[40] = v),
      (t[41] = te))
    : (te = t[41]);
  let ne;
  t[42] !== A || t[43] !== d
    ? ((ne = (e, t) => {
        let n = Math.max(-1, ...d.map(si)) + 1;
        (f([...A, { id: n, variable: { name: e, value: ``, optional: !1 } }]), m({ id: n, ref: t }));
      }),
      (t[42] = A),
      (t[43] = d),
      (t[44] = ne))
    : (ne = t[44]);
  let re;
  t[45] !== A || t[46] !== d || t[47] !== r || t[48] !== P
    ? ((re = (e) => {
        k(null);
        let t = Qr(P, e, r);
        if (t.ok) {
          m(null);
          let e = Math.max(-1, ...d.map(oi)) + 1;
          f(t.variables.map((t, n) => ({ id: A[n]?.id ?? e + n, variable: t })));
        }
        return t;
      }),
      (t[45] = A),
      (t[46] = d),
      (t[47] = r),
      (t[48] = P),
      (t[49] = re))
    : (re = t[49]);
  let ie;
  t[50] !== A.length || t[51] !== ne || t[52] !== re
    ? ((ie = (0, hi.jsx)(Zn, {
        ref: x,
        limit: 256,
        entryCount: A.length,
        onAddKey: ne,
        onPendingChange: g,
        onImport: re,
      })),
      (t[50] = A.length),
      (t[51] = ne),
      (t[52] = re),
      (t[53] = ie))
    : (ie = t[53]);
  let ae;
  t[54] === O
    ? (ae = t[55])
    : ((ae =
        O == null
          ? null
          : (0, hi.jsx)(`p`, {
              className: `text-sm text-danger`,
              role: `alert`,
              children:
                O === `unsupported`
                  ? (0, hi.jsx)(X, {
                      id: `environmentSetup.variables.fileDrop.unsupported`,
                      defaultMessage: `Drop one .env file at a time`,
                      description: `Error when the environment variable editor receives multiple files, a folder, or a file that is not a dotenv file`,
                    })
                  : (0, hi.jsx)(X, {
                      id: `environmentSetup.variables.fileDrop.readFailed`,
                      defaultMessage: `Could not read this file. Try again or paste its contents`,
                      description: `Error when a dropped environment variable file cannot be read`,
                    }),
            })),
      (t[54] = O),
      (t[55] = ae));
  let Y;
  t[56] === c ? (Y = t[57]) : ((Y = c ? (0, hi.jsx)(qn, {}) : null), (t[56] = c), (t[57] = Y));
  let oe;
  t[58] !== te || t[59] !== ie || t[60] !== ae || t[61] !== Y
    ? ((oe = (0, hi.jsxs)(Ue, { className: `min-h-0 gap-4 overflow-y-auto`, children: [te, ie, ae, Y] })),
      (t[58] = te),
      (t[59] = ie),
      (t[60] = ae),
      (t[61] = Y),
      (t[62] = oe))
    : (oe = t[62]);
  let se;
  t[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, hi.jsx)(X, {
        id: `restricted.environmentSetup.variables.batch.cancel`,
        defaultMessage: `Cancel`,
        description: `Discards unsaved batch environment variable edits`,
      })),
      (t[63] = se))
    : (se = t[63]);
  let ce;
  t[64] === o
    ? (ce = t[65])
    : ((ce = (0, hi.jsx)(H, { className: `me-auto`, color: `secondary`, onClick: o, children: se })),
      (t[64] = o),
      (t[65] = ce));
  let le = c || h || E,
    ue;
  t[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, hi.jsx)(X, {
        id: `restricted.environmentSetup.variables.save`,
        defaultMessage: `Save`,
        description: `Button to apply edits to an environment variable`,
      })),
      (t[66] = ue))
    : (ue = t[66]);
  let de;
  t[67] === le
    ? (de = t[68])
    : ((de = (0, hi.jsx)(H, { color: `primary`, disabled: le, type: `submit`, children: ue })),
      (t[67] = le),
      (t[68] = de));
  let fe;
  t[69] !== ce || t[70] !== de
    ? ((fe = (0, hi.jsx)(Ue, { className: `shrink-0`, children: (0, hi.jsxs)(b, { children: [ce, de] }) })),
      (t[69] = ce),
      (t[70] = de),
      (t[71] = fe))
    : (fe = t[71]);
  let pe;
  t[72] !== K || t[73] !== q || t[74] !== J || t[75] !== oe || t[76] !== fe
    ? ((pe = (0, hi.jsxs)(_, {
        as: `form`,
        noValidate: !0,
        className: `max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-hidden`,
        onSubmit: K,
        children: [q, J, oe, fe],
      })),
      (t[72] = K),
      (t[73] = q),
      (t[74] = J),
      (t[75] = oe),
      (t[76] = fe),
      (t[77] = pe))
    : (pe = t[77]);
  let me;
  t[78] === w
    ? (me = t[79])
    : ((me = w
        ? (0, hi.jsx)(wt, {
            tone: `neutral`,
            inert: !0,
            children: (0, hi.jsx)(X, {
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
    t[80] !== W || t[81] !== G || t[82] !== pe || t[83] !== me
      ? ((he = (0, hi.jsxs)(ee, {
          open: !0,
          size: `xxwide`,
          contentProps: W,
          onOpenChange: G,
          children: [pe, me],
        })),
        (t[80] = W),
        (t[81] = G),
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
    ((pi = A()), (mi = p()), V(), Je(), W(), at(), v(), h(), vt(), Xn(), tr(), $r(), ii(), Rt(), (hi = y()));
  }))();
}
function _i(e) {
  let t = (0, bi.c)(34),
    {
      config: r,
      configuration: i,
      variables: a,
      issues: o,
      unavailableNames: s,
      isReadOnly: c,
      readOnlyTooltip: l,
      onChange: u,
      showHeading: d,
    } = e,
    f = d === void 0 || d,
    p = Oe(),
    [m, h] = (0, xi.useState)(null);
  c && m != null && h(null);
  let _;
  t[0] === p
    ? (_ = t[1])
    : ((_ = p.formatMessage({
        id: `environmentSetup.variables.manageLabel`,
        defaultMessage: `Manage environment variables`,
        description: `Accessible label for opening the editor to add, edit, import, or remove environment variables`,
      })),
      (t[0] = p),
      (t[1] = _));
  let v = c ? l : null,
    y;
  t[2] !== r || t[3] !== a
    ? ((y = () => h({ config: r, variables: a })), (t[2] = r), (t[3] = a), (t[4] = y))
    : (y = t[4]);
  let b;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Si.jsx)(X, {
        id: `environmentSetup.variables.manage`,
        defaultMessage: `Manage`,
        description: `Button to open the editor for adding, editing, importing, and removing environment variables`,
      })),
      (t[5] = b))
    : (b = t[5]);
  let x;
  t[6] !== c || t[7] !== _ || t[8] !== v || t[9] !== y
    ? ((x = (0, Si.jsx)(vn, {
        "aria-label": _,
        color: `secondary`,
        disabled: c,
        tooltipContent: v,
        size: `settingsAction`,
        onClick: y,
        children: b,
      })),
      (t[6] = c),
      (t[7] = _),
      (t[8] = v),
      (t[9] = y),
      (t[10] = x))
    : (x = t[10]);
  let S;
  t[11] === f
    ? (S = t[12])
    : ((S = f
        ? (0, Si.jsx)(X, {
            id: `restricted.environmentSetup.variables.title`,
            defaultMessage: `Environment variables`,
            description: `Heading for values passed directly to programs in a cloud environment`,
          })
        : null),
      (t[11] = f),
      (t[12] = S));
  let C;
  t[13] !== x || t[14] !== S
    ? ((C = (0, Si.jsx)(Wt.Header, { actions: x, size: `base`, spacing: `compact`, title: S })),
      (t[13] = x),
      (t[14] = S),
      (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] !== r || t[17] !== c || t[18] !== o || t[19] !== l || t[20] !== a
    ? ((w =
        a.length === 0
          ? (0, Si.jsx)(Pe, {
              variant: `featured`,
              size: `compact`,
              control: null,
              icon: (0, Si.jsx)(g, { className: `text-secondary` }),
              label: (0, Si.jsx)(X, {
                id: `restricted.environmentSetup.variables.empty`,
                defaultMessage: `No environment variables added`,
                description: `Empty state for environment-owned runtime variables`,
              }),
            })
          : a.map((e) =>
              (0, Si.jsx)(
                yi,
                {
                  variable: e,
                  issue: o.find((t) => {
                    let { field: n } = t;
                    return n === `variable-${e.name}`;
                  }),
                  isReadOnly: c,
                  readOnlyTooltip: l,
                  onEdit: () => h({ config: r, variables: a }),
                },
                e.name,
              ),
            )),
      (t[16] = r),
      (t[17] = c),
      (t[18] = o),
      (t[19] = l),
      (t[20] = a),
      (t[21] = w))
    : (w = t[21]);
  let T;
  t[22] === w
    ? (T = t[23])
    : ((T = (0, Si.jsx)(Wt.Content, { children: (0, Si.jsx)(n, { children: w }) })),
      (t[22] = w),
      (t[23] = T));
  let E;
  t[24] !== r || t[25] !== i || t[26] !== m || t[27] !== u || t[28] !== s
    ? ((E =
        m == null
          ? null
          : (0, Si.jsx)(ai, {
              configuration: i,
              initialVariables: m.variables,
              unavailableNames: s,
              hasConflict: Zr(r, m.config),
              onClose: () => h(null),
              onSave: (e) => {
                (u(
                  e,
                  m.variables
                    .filter((t) => {
                      let { name: n } = t;
                      return !e.some((e) => e.name === n);
                    })
                    .map(vi),
                ),
                  h(null));
              },
            })),
      (t[24] = r),
      (t[25] = i),
      (t[26] = m),
      (t[27] = u),
      (t[28] = s),
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
    s = Oe(),
    c = ge(Qt),
    l = ge(Ze),
    u = n.serverId ?? ``,
    d;
  t[0] !== c || t[1] !== u || t[2] !== l
    ? ((d = { accountId: c, userId: l, id: u }), (t[0] = c), (t[1] = u), (t[2] = l), (t[3] = d))
    : (d = t[3]);
  let f = Ee(Jt, d),
    p = n.source !== `user_provided` && n.serverId == null && !n.value && !f && n.error == null,
    m;
  t[4] !== p || t[5] !== f || t[6] !== n.error || t[7] !== n.source || t[8] !== n.value
    ? ((m = (0, Si.jsx)(`span`, { "aria-hidden": `true`, children: `••••••••` })),
      n.source === `user_provided`
        ? (m = (0, Si.jsx)(X, {
            id: `restricted.environmentSetup.variables.source.userProvided`,
            defaultMessage: `User-provided`,
            description: `A cloud environment variable supplied by the executing user`,
          }))
        : !n.value && !f && n.error != null
          ? (m = (0, Si.jsx)(X, {
              id: `restricted.environmentSetup.variables.unavailable`,
              defaultMessage: `Unavailable`,
              description: `An environment variable whose stored value the server could not resolve`,
            }))
          : p &&
            (m = (0, Si.jsx)(X, {
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
  t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = (0, Si.jsx)(g, {})), (t[10] = h)) : (h = t[10]);
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
  let y;
  t[15] !== s ||
  t[16] !== p ||
  t[17] !== i ||
  t[18] !== r ||
  t[19] !== o ||
  t[20] !== a ||
  t[21] !== m ||
  t[22] !== n.name
    ? ((y = (e) =>
        (0, Si.jsxs)(Si.Fragment, {
          children: [
            (0, Si.jsx)(`span`, {
              className: C(`text-base select-none`, p ? `text-danger` : `text-secondary`),
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
              children: (0, Si.jsx)(se, {}),
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
      (t[23] = y))
    : (y = t[23]);
  let b;
  return (
    t[24] !== _ || t[25] !== v || t[26] !== y
      ? ((b = (0, Si.jsx)(Pe, {
          variant: `featured`,
          size: `compact`,
          icon: h,
          label: _,
          description: v,
          control: y,
        })),
        (t[24] = _),
        (t[25] = v),
        (t[26] = y),
        (t[27] = b))
      : (b = t[27]),
    b
  );
}
var bi, xi, Si;
function Ci() {
  return (Ci = e(() => {
    ((bi = A()), T(), K(), (xi = p()), V(), Yt(), I(), jt(), Le(), Y(), _n(), Nn(), gi(), rt(), (Si = y()));
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
    (ye(),
      (Di = t(_e(), 1)),
      K(),
      Yt(),
      mt(),
      i(),
      s(),
      Gt(),
      Ei(),
      (Oi = c(
        M,
        ({ get: e }) => {
          let t = e(Tt);
          return !t.authLoading &&
            t.authMethod === `chatgpt` &&
            t.authenticatedAccountId != null &&
            t.authenticatedUserId != null
            ? { accountId: t.authenticatedAccountId, requestUserId: t.authenticatedUserId, userId: t.userId }
            : null;
        },
        { isEqual: Di.default },
      )),
      (ki = le(M, ({ get: e, scope: t }) => {
        let n = e(Oi);
        return {
          queryKey: [`cloud-environment-network-policy`, n?.accountId, n?.requestUserId],
          queryFn:
            n == null
              ? ie
              : async ({ signal: e }) => {
                  let r = { accountId: n.accountId, userId: n.requestUserId },
                    i = await Promise.all(
                      [`linux`, `mac_os`, `windows`].map(async (t) =>
                        Ti(
                          await Pt.safeGet(`/wham/config/agent-bundle`, {
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
                  let a = await Pt.safeGet(`/wham/config/agent-enterprise-managed`, {
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
                      (o = await t.query.fetch(Lt).then(
                        (e) => e.chatGptDesktopAuthOrigin != null,
                        () => null,
                      )),
                    { restricted: !0, settingsUrl: o == null ? null : wi(n.accountId, o) }
                  );
                },
          staleTime: Ge.ONE_MINUTE,
          gcTime: 0,
          refetchOnMount: `always`,
          refetchOnWindowFocus: `always`,
          refetchInterval: Ge.ONE_MINUTE,
          retry: !1,
        };
      })));
  }))();
}
function ji(e) {
  let t = (0, Mi.c)(3),
    { configuration: n } = e,
    r = ge(Oi),
    { data: i, isPending: a, isError: o, isPaused: s } = ge(ki);
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
            children: (0, Ni.jsx)(X, {
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
              ? (0, Ni.jsx)(X, {
                  id: `environmentSetup.networkPolicy.contactAdmin`,
                  defaultMessage: `Your organization's Agent Security settings define network access restrictions which apply to this environment. Contact an admin for details.`,
                  description: `Quiet note above Internet access controls in the Cloud environment editor when organization policy restricts networking and the user cannot view Agent Security settings. Editing and publishing remain available.`,
                })
              : (0, Ni.jsx)(X, {
                  id: `environmentSetup.networkPolicy.withSettings`,
                  defaultMessage: `Your organization's <settings>Agent Security settings</settings> define network access restrictions which apply to this environment.`,
                  description: `Quiet note above Internet access controls in the Cloud environment editor when organization policy restricts networking. Editing and publishing remain available. The settings tag links to Agent Security settings for authorized users.`,
                  values: {
                    settings: (e) =>
                      (0, Ni.jsx)(st, {
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
    ((Mi = A()), K(), V(), Ut(), Ai(), (Ni = y()));
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
  t[0] === l ? (u = t[1]) : ((u = C(`flex min-h-7.5 items-center text-base`, l)), (t[0] = l), (t[1] = u));
  let d = c ? `size-4` : `size-6`,
    f;
  t[2] === d ? (f = t[3]) : ((f = C(`flex shrink-0 items-center justify-center`, d)), (t[2] = d), (t[3] = f));
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
    ((Li = A()), T(), (Ri = y()));
  }))();
}
function Bi(e) {
  let t = (0, Hi.c)(68),
    {
      connection: n,
      requirement: i,
      issue: a,
      isReadOnly: o,
      isLoading: s,
      isSupported: c,
      onEdit: p,
      onAliasChange: m,
      onDetach: h,
    } = e,
    _ = Oe(),
    v = (0, Ui.useId)(),
    [y, b] = (0, Ui.useState)(!1),
    x = (0, Ui.useRef)(null),
    S = n?.display_name ?? i.connection_id,
    C;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = {
        azure: {
          icon: (0, Wi.jsx)(l, { asset: f }),
          label: (0, Wi.jsx)(X, {
            id: `restricted.environmentSetup.oic.providerAzure`,
            defaultMessage: `Azure`,
            description: `Microsoft Azure cloud provider preset`,
          }),
        },
        aws: {
          icon: (0, Wi.jsx)(l, { asset: r }),
          label: (0, Wi.jsx)(X, {
            id: `restricted.environmentSetup.oic.providerAws`,
            defaultMessage: `AWS`,
            description: `Amazon Web Services cloud provider preset`,
          }),
        },
        gcp: {
          icon: (0, Wi.jsx)(l, { asset: d }),
          label: (0, Wi.jsx)(X, {
            id: `restricted.environmentSetup.oic.providerGcp`,
            defaultMessage: `Google Cloud`,
            description: `Google Cloud provider preset`,
          }),
        },
      }),
      (t[0] = C))
    : (C = t[0]);
  let w = n == null ? null : C[n.provider_kind],
    T;
  t[1] === w ? (T = t[2]) : ((T = w == null ? (0, Wi.jsx)(g, {}) : w.icon), (t[1] = w), (t[2] = T));
  let E = w?.label,
    D;
  t[3] === S
    ? (D = t[4])
    : ((D = (0, Wi.jsx)(`span`, { className: `min-w-0 truncate text-secondary`, children: S })),
      (t[3] = S),
      (t[4] = D));
  let O;
  t[5] !== n || t[6] !== c
    ? ((O =
        n != null && !c
          ? (0, Wi.jsx)(Zt, {
              variant: `outline`,
              children: (0, Wi.jsx)(X, {
                id: `restricted.environmentSetup.oic.unsupportedAttachment`,
                defaultMessage: `Not available`,
                description: `Indicates that the environment's current attachment capabilities do not include this connection's provider`,
              }),
            })
          : null),
      (t[5] = n),
      (t[6] = c),
      (t[7] = O))
    : (O = t[7]);
  let k;
  t[8] !== D || t[9] !== O
    ? ((k = (0, Wi.jsxs)(`div`, {
        className: `flex min-w-0 flex-wrap items-center gap-2`,
        children: [D, O],
      })),
      (t[8] = D),
      (t[9] = O),
      (t[10] = k))
    : (k = t[10]);
  let A;
  t[11] === y
    ? (A = t[12])
    : ((A = (e) => {
        y && e.preventDefault();
      }),
      (t[11] = y),
      (t[12] = A));
  let j;
  t[13] !== _ || t[14] !== S
    ? ((j = _.formatMessage(
        {
          id: `restricted.environmentSetup.oic.connectionActions`,
          defaultMessage: `Actions for {name}`,
          description: `Menu with edit, environment alias, and remove actions for this cloud connection`,
        },
        { name: S },
      )),
      (t[13] = _),
      (t[14] = S),
      (t[15] = j))
    : (j = t[15]);
  let M;
  t[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = (0, Wi.jsx)(u, {})), (t[16] = M)) : (M = t[16]);
  let N;
  t[17] !== o || t[18] !== j
    ? ((N = (0, Wi.jsx)(Vi, {
        ref: x,
        className: `not-disabled:not-aria-disabled:hover:text-default not-disabled:not-aria-disabled:focus-visible:text-default data-[state=open]:text-default`,
        color: `ghostSecondary`,
        size: `inline`,
        disabled: o,
        "aria-label": j,
        children: M,
      })),
      (t[17] = o),
      (t[18] = j),
      (t[19] = N))
    : (N = t[19]);
  let P = s || n?.can_edit !== !0,
    F;
  t[20] !== _ || t[21] !== S
    ? ((F = _.formatMessage(
        {
          id: `restricted.environmentSetup.oic.editConnection`,
          defaultMessage: `Edit {name}`,
          description: `Loads saved outbound identity configuration for an authorized workspace member to edit`,
        },
        { name: S },
      )),
      (t[20] = _),
      (t[21] = S),
      (t[22] = F))
    : (F = t[22]);
  let I;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Wi.jsx)(X, {
        id: `restricted.environmentSetup.oic.editConnectionAction`,
        defaultMessage: `Edit connection`,
        description: `Edit the shared cloud identity connection configuration`,
      })),
      (t[23] = I))
    : (I = t[23]);
  let L;
  t[24] !== p || t[25] !== P || t[26] !== F
    ? ((L = (0, Wi.jsx)(je.Item, { disabled: P, "aria-label": F, onSelect: p, children: I })),
      (t[24] = p),
      (t[25] = P),
      (t[26] = F),
      (t[27] = L))
    : (L = t[27]);
  let R;
  t[28] !== _ || t[29] !== S
    ? ((R = _.formatMessage(
        {
          id: `restricted.environmentSetup.oic.aliasLabel`,
          defaultMessage: `Environment alias for {name}`,
          description: `Label for the stable per-environment connection alias`,
        },
        { name: S },
      )),
      (t[28] = _),
      (t[29] = S),
      (t[30] = R))
    : (R = t[30]);
  let z, ee;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = () => b(!0)),
      (ee = (0, Wi.jsx)(X, {
        id: `restricted.environmentSetup.oic.editAliasAction`,
        defaultMessage: `Edit environment alias`,
        description: `Change only this environment's alias for the identity connection`,
      })),
      (t[31] = z),
      (t[32] = ee))
    : ((z = t[31]), (ee = t[32]));
  let B;
  t[33] === R
    ? (B = t[34])
    : ((B = (0, Wi.jsx)(je.Item, { "aria-label": R, onSelect: z, children: ee })), (t[33] = R), (t[34] = B));
  let V;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Wi.jsx)(je.Separator, {})), (t[35] = V))
    : (V = t[35]);
  let H;
  t[36] !== _ || t[37] !== S
    ? ((H = _.formatMessage(
        {
          id: `restricted.environmentSetup.oic.detachConnection`,
          defaultMessage: `Detach {name}`,
          description: `Removes the named outbound identity connection from this environment only`,
        },
        { name: S },
      )),
      (t[36] = _),
      (t[37] = S),
      (t[38] = H))
    : (H = t[38]);
  let U;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Wi.jsx)(X, {
        id: `restricted.environmentSetup.oic.removeAttachmentAction`,
        defaultMessage: `Remove from environment`,
        description: `Remove this environment attachment without deleting the shared connection`,
      })),
      (t[39] = U))
    : (U = t[39]);
  let W;
  t[40] !== h || t[41] !== H
    ? ((W = (0, Wi.jsx)(je.Item, { color: `danger`, "aria-label": H, onSelect: h, children: U })),
      (t[40] = h),
      (t[41] = H),
      (t[42] = W))
    : (W = t[42]);
  let G;
  t[43] !== N || t[44] !== L || t[45] !== B || t[46] !== W || t[47] !== A
    ? ((G = (0, Wi.jsxs)(Fe, {
        align: `end`,
        onCloseAutoFocus: A,
        triggerButton: N,
        children: [L, B, V, W],
      })),
      (t[43] = N),
      (t[44] = L),
      (t[45] = B),
      (t[46] = W),
      (t[47] = A),
      (t[48] = G))
    : (G = t[48]);
  let K;
  t[49] !== y ||
  t[50] !== v ||
  t[51] !== _ ||
  t[52] !== o ||
  t[53] !== a ||
  t[54] !== S ||
  t[55] !== m ||
  t[56] !== i
    ? ((K =
        y || a != null
          ? (0, Wi.jsx)(Ot, {
              "aria-describedby": a == null ? void 0 : v,
              "aria-invalid": a != null,
              "data-environment-invalid": a != null,
              "aria-label": _.formatMessage(
                {
                  id: `restricted.environmentSetup.oic.aliasLabel`,
                  defaultMessage: `Environment alias for {name}`,
                  description: `Label for the stable per-environment connection alias`,
                },
                { name: S },
              ),
              autoFocus: a == null,
              onBlur: () => b(!1),
              onKeyDown: (e) => {
                (e.key === `Enter` || e.key === `Escape`) &&
                  (e.preventDefault(), e.stopPropagation(), b(!1), x.current?.focus());
              },
              required: !0,
              pattern: `[A-Z][A-Z0-9_]{0,63}`,
              maxLength: 64,
              disabled: o,
              value: i.alias,
              onChange: (e) => m(e.target.value),
            })
          : null),
      (t[49] = y),
      (t[50] = v),
      (t[51] = _),
      (t[52] = o),
      (t[53] = a),
      (t[54] = S),
      (t[55] = m),
      (t[56] = i),
      (t[57] = K))
    : (K = t[57]);
  let q;
  t[58] !== v || t[59] !== a
    ? ((q = a == null ? null : (0, Wi.jsx)(`span`, { id: v, children: (0, Wi.jsx)(Cn, { issue: a }) })),
      (t[58] = v),
      (t[59] = a),
      (t[60] = q))
    : (q = t[60]);
  let J;
  return (
    t[61] !== T || t[62] !== G || t[63] !== K || t[64] !== q || t[65] !== E || t[66] !== k
      ? ((J = (0, Wi.jsxs)(Ii, { icon: T, provider: E, name: k, actions: G, children: [K, q] })),
        (t[61] = T),
        (t[62] = G),
        (t[63] = K),
        (t[64] = q),
        (t[65] = E),
        (t[66] = k),
        (t[67] = J))
      : (J = t[67]),
    J
  );
}
function Vi(e) {
  let t = (0, Hi.c)(8),
    n = e[`aria-expanded`] === !0 ? `open` : `closed`,
    r = e[`aria-label`],
    i = e[`aria-expanded`] === !0,
    a;
  t[0] === e ? (a = t[1]) : ((a = (0, Wi.jsx)(H, { ...e })), (t[0] = e), (t[1] = a));
  let o;
  return (
    t[2] !== e.disabled || t[3] !== n || t[4] !== r || t[5] !== i || t[6] !== a
      ? ((o = (0, Wi.jsx)(Te, {
          cloneCustomTrigger: !0,
          "data-state": n,
          disabled: e.disabled,
          tooltipContent: r,
          triggerPopupOpen: i,
          children: a,
        })),
        (t[2] = e.disabled),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
var Hi, Ui, Wi;
function Gi() {
  return (Gi = e(() => {
    ((Hi = A()),
      ae(),
      k(),
      L(),
      (Ui = p()),
      V(),
      Ye(),
      W(),
      re(),
      E(),
      I(),
      Ke(),
      Ae(),
      zi(),
      Nn(),
      (Wi = y()));
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
          ? (0, Xi.jsx)(X, {
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
          children: (0, Xi.jsx)(X, {
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
    { configuration: n, requirements: r, isReadOnly: i, onChange: a, issues: o, showHeading: s } = e,
    c = Oe(),
    l = ve?.environmentConfigs,
    [u, d] = (0, Yi.useState)(null),
    [f, p] = (0, Yi.useState)(null),
    [m, h] = (0, Yi.useState)(null),
    g = (0, Yi.useRef)(null),
    _ = (0, Yi.useRef)(null),
    { data: v, isPending: y, isFetching: b, isError: x, refetch: S } = Ee(dn, n),
    C = v?.ok ? v.data.items : void 0,
    T = v?.ok ? (v.data.capabilities?.attachment_provider_kinds ?? [`azure`]) : [],
    E;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = () => () => {
        (g.current?.abort(), _.current?.abort());
      }),
      (t[0] = E))
    : (E = t[0]);
  let D;
  (t[1] !== i || t[2] !== r ? ((D = [i, r]), (t[1] = i), (t[2] = r), (t[3] = D)) : (D = t[3]),
    (0, Yi.useLayoutEffect)(E, D));
  let O;
  t[4] === r ? (O = t[5]) : ((O = ct.safeParse(r)), (t[4] = r), (t[5] = O));
  let k = !O.success,
    A;
  if (t[6] !== C || t[7] !== r) {
    let e;
    (t[9] === C
      ? (e = t[10])
      : ((e = (e) => {
          let { connection_id: t } = e;
          return C?.some((e) => e.connection_id === t) === !1 ? [t] : [];
        }),
        (t[9] = C),
        (t[10] = e)),
      (A = r.flatMap(e)),
      (t[6] = C),
      (t[7] = r),
      (t[8] = A));
  } else A = t[8];
  let j = A,
    M;
  t[11] !== n.accountId || t[12] !== n.userId || t[13] !== j
    ? ((M = [`outbound-identity-attachment-edit`, n.accountId, n.userId, j]),
      (t[11] = n.accountId),
      (t[12] = n.userId),
      (t[13] = j),
      (t[14] = M))
    : (M = t[14]);
  let N = l != null && !i && !k && j.length > 0,
    P;
  t[15] !== n.accountId || t[16] !== n.userId || t[17] !== j
    ? ((P = () =>
        Promise.all(
          j.map(async (e) => {
            let t = await l?.requestOutboundIdentityConnection({
              accountId: n.accountId,
              userId: n.userId,
              method: `GET`,
              connectionId: e,
            });
            return t?.ok && t.data.connection_id === e ? t.data : null;
          }),
        )),
      (t[15] = n.accountId),
      (t[16] = n.userId),
      (t[17] = j),
      (t[18] = P))
    : (P = t[18]);
  let F;
  t[19] !== M || t[20] !== N || t[21] !== P
    ? ((F = {
        queryKey: M,
        enabled: N,
        staleTime: Ge.FIVE_SECONDS,
        refetchOnMount: `always`,
        retry: !1,
        queryFn: P,
      }),
      (t[19] = M),
      (t[20] = N),
      (t[21] = P),
      (t[22] = F))
    : (F = t[22]);
  let { data: I, isFetching: L, isError: R, refetch: ee } = w(F),
    B = !i && f?.requirements === r && !f.signal.aborted,
    V = null;
  if (i) {
    let e;
    (t[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Xi.jsx)(X, {
          id: `environmentSetup.oic.add.readOnly`,
          defaultMessage: `Connections cannot be changed while this environment is read-only`,
          description: `Tooltip explaining why Add OIDC connection is disabled in a read-only cloud environment`,
        })),
        (t[23] = e))
      : (e = t[23]),
      (V = e));
  } else if (l == null) {
    let e;
    (t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Xi.jsx)(X, {
          id: `environmentSetup.oic.add.unavailable`,
          defaultMessage: `Connections are unavailable on this host`,
          description: `Tooltip explaining why Add OIDC connection is disabled when the host does not support environment connections`,
        })),
        (t[24] = e))
      : (e = t[24]),
      (V = e));
  } else if (B || b) {
    let e;
    (t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Xi.jsx)(X, {
          id: `environmentSetup.oic.add.loading`,
          defaultMessage: `Wait for connections to finish loading`,
          description: `Tooltip explaining why Add OIDC connection is temporarily disabled while connections load`,
        })),
        (t[25] = e))
      : (e = t[25]),
      (V = e));
  }
  let U;
  t[26] !== I || t[27] !== C || t[28] !== R || t[29] !== L || t[30] !== r
    ? ((U = (e) =>
        r.length < 16 &&
        r.every((t) => {
          let n =
            C?.find((e) => e.connection_id === t.connection_id) ??
            (L || R ? void 0 : I?.find((e) => e?.connection_id === t.connection_id));
          return (
            n != null && (n.provider_kind !== `azure` || n.azure_client_id.toLowerCase() !== e.toLowerCase())
          );
        })),
      (t[26] = I),
      (t[27] = C),
      (t[28] = R),
      (t[29] = L),
      (t[30] = r),
      (t[31] = U))
    : (U = t[31]);
  let W = U,
    G = (e) =>
      !i &&
      !k &&
      C != null &&
      T.includes(e.provider_kind) &&
      r.length < 16 &&
      !r.some((t) => {
        let { connection_id: n } = t;
        return n === e.connection_id;
      }) &&
      (e.provider_kind !== `azure` || W(e.azure_client_id)),
    K;
  t[32] !== a || t[33] !== r
    ? ((K = (e) => {
        let t = e.provider_kind.toUpperCase(),
          n = t,
          i = 2;
        for (; r.some((e) => e.alias === n);) n = `${t}_${i++}`;
        a([...r, { connection_id: e.connection_id, alias: n }]);
      }),
      (t[32] = a),
      (t[33] = r),
      (t[34] = K))
    : (K = t[34]);
  let q = K,
    J;
  t[35] !== q || t[36] !== G
    ? ((J = (e) => {
        G(e) && q(e);
      }),
      (t[35] = q),
      (t[36] = G),
      (t[37] = J))
    : (J = t[37]);
  let te = ce(J),
    ne = async (e, t) => {
      if (l == null) return;
      let i = new AbortController();
      (_.current?.abort(), (_.current = i), p({ requirements: r, signal: i.signal }), h(null));
      try {
        let r = await l.requestOutboundIdentityConnection({
          accountId: n.accountId,
          userId: n.userId,
          method: `GET`,
          connectionId: e,
        });
        i.signal.aborted ||
          (r.ok
            ? r.data.provider_kind === t && r.data.connection_id === e
              ? d({ connection: r.data })
              : h({ ok: !1, error: `invalid-response` })
            : h({ ok: !1, error: r.error, status: r.status }));
      } catch {
        i.signal.aborted || h({ ok: !1, error: `unavailable` });
      }
      _.current === i && p(null);
    },
    re;
  t[38] !== te || t[39] !== n.accountId || t[40] !== n.userId || t[41] !== u || t[42] !== i
    ? ((re = async (e) => {
        if (l == null || u == null || i) return { ok: !1, error: `unavailable` };
        let t = new AbortController();
        g.current = t;
        let { display_name: r, subject_template: a, additional_claims: o, include_actor_email: s } = e,
          c = await l.requestOutboundIdentityConnection(
            u.connection == null
              ? { accountId: n.accountId, userId: n.userId, method: `POST`, body: e }
              : {
                  accountId: n.accountId,
                  userId: n.userId,
                  method: `PATCH`,
                  connectionId: u.connection.connection_id,
                  body: {
                    display_name: r,
                    subject_template: a,
                    additional_claims: o,
                    include_actor_email: s,
                    configuration_version: u.connection.configuration_version,
                  },
                },
          );
        return c.ok
          ? c.data.provider_kind === (`target` in e ? e.target.provider_kind : `azure`)
            ? (u.connection == null && !t.signal.aborted && te(c.data), { ok: !0, data: c.data })
            : { ok: !1, error: `invalid-response` }
          : { ok: !1, error: c.error, status: c.status };
      }),
      (t[38] = te),
      (t[39] = n.accountId),
      (t[40] = n.userId),
      (t[41] = u),
      (t[42] = i),
      (t[43] = re))
    : (re = t[43]);
  let ie = re,
    ae = Fi,
    Y;
  t[44] === s
    ? (Y = t[45])
    : ((Y = s
        ? (0, Xi.jsx)(X, {
            id: `restricted.environmentSetup.oic.title`,
            defaultMessage: `OIDC`,
            description: `Heading for OIDC connections that authenticate a cloud environment to external systems`,
          })
        : null),
      (t[44] = s),
      (t[45] = Y));
  let oe = V != null && void 0,
    se;
  t[46] === V ? (se = t[47]) : ((se = (0, Xi.jsx)(Xi.Fragment, { children: V })), (t[46] = V), (t[47] = se));
  let le = V == null ? void 0 : 0,
    ue = V != null,
    de;
  t[48] === c
    ? (de = t[49])
    : ((de = c.formatMessage({
        id: `restricted.environmentSetup.oic.addConnection`,
        defaultMessage: `Add connection`,
        description: `Choose an existing connection or create a real connection to attach`,
      })),
      (t[48] = c),
      (t[49] = de));
  let fe;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, Xi.jsx)(z, {})), (t[50] = fe))
    : (fe = t[50]);
  let pe;
  t[51] === de
    ? (pe = t[52])
    : ((pe = (0, Xi.jsx)(H, { color: `ghost`, size: `inline`, "aria-label": de, children: fe })),
      (t[51] = de),
      (t[52] = pe));
  let me = C?.filter(
      (e) =>
        !r.some((t) => {
          let { connection_id: n } = t;
          return n === e.connection_id;
        }),
    ).map((e) =>
      (0, Xi.jsx)(
        je.Item,
        {
          disabled: b || x || !G(e),
          focusableWhenDisabled: !T.includes(e.provider_kind),
          tooltipText: T.includes(e.provider_kind)
            ? void 0
            : c.formatMessage({
                id: `restricted.environmentSetup.oic.unsupportedProvider`,
                defaultMessage: `This provider is not available for this environment`,
                description: `Explains that the environment's current attachment capabilities do not include this connection's provider`,
              }),
          onSelect: () => q(e),
          children: e.display_name,
        },
        e.connection_id,
      ),
    ),
    he;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, Xi.jsx)(je.Separator, {})), (t[53] = he))
    : (he = t[53]);
  let ge = b || x || C == null,
    _e,
    ye;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = () => d({ connection: null })),
      (ye = (0, Xi.jsx)(X, {
        id: `restricted.environmentSetup.oic.createNew`,
        defaultMessage: `Create connection…`,
        description: `Opens the cloud provider presets for a new workspace-governed identity connection`,
      })),
      (t[54] = _e),
      (t[55] = ye))
    : ((_e = t[54]), (ye = t[55]));
  let be;
  t[56] === ge
    ? (be = t[57])
    : ((be = (0, Xi.jsx)(je.Item, { disabled: ge, onSelect: _e, children: ye })), (t[56] = ge), (t[57] = be));
  let xe;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (0, Xi.jsx)(je.Separator, {})), (t[58] = xe))
    : (xe = t[58]);
  let Se;
  t[59] !== j || t[60] !== S || t[61] !== ee || t[62] !== k
    ? ((Se = () => {
        (h(null), S(), !k && j.length > 0 && ee());
      }),
      (t[59] = j),
      (t[60] = S),
      (t[61] = ee),
      (t[62] = k),
      (t[63] = Se))
    : (Se = t[63]);
  let Ce;
  t[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, Xi.jsx)(X, {
        id: `restricted.environmentSetup.oic.reload`,
        defaultMessage: `Reload connections`,
        description: `Reload connections after a failure or an external change`,
      })),
      (t[64] = Ce))
    : (Ce = t[64]);
  let we;
  t[65] === Se
    ? (we = t[66])
    : ((we = (0, Xi.jsx)(je.Item, { onSelect: Se, children: Ce })), (t[65] = Se), (t[66] = we));
  let De;
  t[67] !== ue || t[68] !== pe || t[69] !== me || t[70] !== be || t[71] !== we
    ? ((De = (0, Xi.jsxs)(Fe, {
        contentWidth: `menu`,
        disabled: ue,
        triggerButton: pe,
        children: [me, he, be, xe, we],
      })),
      (t[67] = ue),
      (t[68] = pe),
      (t[69] = me),
      (t[70] = be),
      (t[71] = we),
      (t[72] = De))
    : (De = t[72]);
  let ke;
  t[73] !== le || t[74] !== De
    ? ((ke = (0, Xi.jsx)(`span`, { tabIndex: le, children: De })), (t[73] = le), (t[74] = De), (t[75] = ke))
    : (ke = t[75]);
  let Ae;
  t[76] !== oe || t[77] !== se || t[78] !== ke
    ? ((Ae = (0, Xi.jsx)(Te, { open: oe, tooltipContent: se, children: ke })),
      (t[76] = oe),
      (t[77] = se),
      (t[78] = ke),
      (t[79] = Ae))
    : (Ae = t[79]);
  let Me;
  t[80] === y
    ? (Me = t[81])
    : ((Me =
        y && l != null
          ? (0, Xi.jsx)(`p`, {
              className: `text-sm text-secondary select-none`,
              children: (0, Xi.jsx)(X, {
                id: `restricted.environmentSetup.oic.loading`,
                defaultMessage: `Loading connections…`,
                description: `Loading the workspace connection catalog`,
              }),
            })
          : null),
      (t[80] = y),
      (t[81] = Me));
  let Ne;
  t[82] !== R || t[83] !== x
    ? ((Ne = x || R || l == null ? (0, Xi.jsx)(Sn, { error: { ok: !1, error: `unavailable` } }) : null),
      (t[82] = R),
      (t[83] = x),
      (t[84] = Ne))
    : (Ne = t[84]);
  let Pe;
  t[85] !== v || t[86] !== x
    ? ((Pe = l != null && !x && v?.ok === !1 ? (0, Xi.jsx)(Sn, { error: v }) : null),
      (t[85] = v),
      (t[86] = x),
      (t[87] = Pe))
    : (Pe = t[87]);
  let Ie;
  t[88] === m
    ? (Ie = t[89])
    : ((Ie = m == null ? null : (0, Xi.jsx)(Sn, { error: m })), (t[88] = m), (t[89] = Ie));
  let Le = r.map((e, t) => {
      let n = o.find((e) => {
          let { field: n } = e;
          return n === `connection-${t}`;
        }),
        s =
          C?.find((t) => {
            let { connection_id: n } = t;
            return n === e.connection_id;
          }) ?? I?.find((t) => t?.connection_id === e.connection_id);
      return (0, Xi.jsx)(
        Bi,
        {
          connection: s ?? void 0,
          requirement: e,
          issue: n,
          isReadOnly: i,
          isLoading: B,
          isSupported: s == null || T.includes(s.provider_kind),
          onEdit: () => {
            s != null && ne(e.connection_id, s.provider_kind);
          },
          onAliasChange: (t) =>
            a(r.map((n) => (n.connection_id === e.connection_id ? { ...n, alias: t } : n))),
          onDetach: () =>
            a(
              r.filter((t) => {
                let { connection_id: n } = t;
                return n !== e.connection_id;
              }),
            ),
        },
        e.connection_id,
      );
    }),
    Re;
  t[90] !== u || t[91] !== i || t[92] !== j || t[93] !== S || t[94] !== ee || t[95] !== ie || t[96] !== k
    ? ((Re =
        u == null
          ? null
          : (0, Xi.jsx)(Yi.Suspense, {
              fallback: null,
              children: (0, Xi.jsx)(
                Zi,
                {
                  isOpen: !i,
                  connection: u.connection,
                  onClose: () => {
                    (d(null), S(), !k && j.length > 0 && ee());
                  },
                  onSubmit: ie,
                },
                u.connection?.connection_id ?? `create`,
              ),
            })),
      (t[90] = u),
      (t[91] = i),
      (t[92] = j),
      (t[93] = S),
      (t[94] = ee),
      (t[95] = ie),
      (t[96] = k),
      (t[97] = Re))
    : (Re = t[97]);
  let ze;
  return (
    t[98] !== ae ||
    t[99] !== Y ||
    t[100] !== Ae ||
    t[101] !== Me ||
    t[102] !== Ne ||
    t[103] !== Pe ||
    t[104] !== Ie ||
    t[105] !== Le ||
    t[106] !== Re
      ? ((ze = (0, Xi.jsxs)(ae, { title: Y, actions: Ae, children: [Me, Ne, Pe, Ie, Le, Re] })),
        (t[98] = ae),
        (t[99] = Y),
        (t[100] = Ae),
        (t[101] = Me),
        (t[102] = Ne),
        (t[103] = Pe),
        (t[104] = Ie),
        (t[105] = Le),
        (t[106] = Re),
        (t[107] = ze))
      : (ze = t[107]),
    ze
  );
}
var Ji, Yi, Xi, Zi;
function Qi() {
  return (Qi = e(() => {
    ((Ji = A()),
      be(),
      K(),
      ot(),
      (Yi = p()),
      V(),
      W(),
      re(),
      I(),
      Ae(),
      te(),
      s(),
      fe(),
      zi(),
      Gi(),
      fn(),
      xn(),
      (Xi = y()),
      xe(),
      (Zi = (0, Yi.lazy)(async () => ({
        default: (
          await D(
            async () => {
              let { OutboundIdentityConnectionDialog: e } = await import(`./dialog-b64c321178c1.js`);
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
    { configuration: r, draft: i, panelState: a, issues: o, showHeading: s } = e,
    c;
  t[0] === o ? (c = t[1]) : ((c = o === void 0 ? [] : o), (t[0] = o), (t[1] = c));
  let l = c,
    u = s === void 0 || s,
    d;
  t[2] === u
    ? (d = t[3])
    : ((d = u
        ? (0, ta.jsx)(X, {
            id: `restricted.environmentSetup.sidePanel.repositories`,
            defaultMessage: `Repositories`,
            description: `Heading for repositories in the environment side-panel editor`,
          })
        : null),
      (t[2] = u),
      (t[3] = d));
  let f;
  t[4] === d
    ? (f = t[5])
    : ((f = (0, ta.jsx)(Wt.Header, { className: `select-none`, size: `base`, spacing: `compact`, title: d })),
      (t[4] = d),
      (t[5] = f));
  let p;
  t[6] === i.repositories
    ? (p = t[7])
    : ((p = i.repositories.length === 0 ? [``] : i.repositories), (t[6] = i.repositories), (t[7] = p));
  let m;
  if (t[8] !== r?.repositoryNamesById || t[9] !== l || t[10] !== a?.githubRepositories || t[11] !== p) {
    let e;
    (t[13] !== r?.repositoryNamesById || t[14] !== l || t[15] !== a?.githubRepositories
      ? ((e = (e, t) =>
          (0, ta.jsx)(
            Pe,
            {
              className: `select-none`,
              variant: `featured`,
              control: null,
              size: `compact`,
              description:
                l.find((e) => {
                  let { field: n } = e;
                  return n === `repository-${t}`;
                }) == null
                  ? void 0
                  : (0, ta.jsx)(`span`, {
                      tabIndex: -1,
                      "data-environment-invalid": `true`,
                      children: (0, ta.jsx)(Cn, { issue: { field: `repository-${t}`, code: `repository` } }),
                    }),
              icon: (0, ta.jsx)(B, { className: `icon-xs` }),
              label:
                (r?.repositoryNamesById[e] ??
                  a?.githubRepositories?.find((t) => {
                    let { repository: n } = t;
                    return n.id === e;
                  })?.repository.repository_full_name ??
                  e) ||
                (0, ta.jsx)(X, {
                  id: `restricted.environmentSetup.configuration.repository.empty`,
                  defaultMessage: `No repository selected`,
                  description: `Description shown when a mocked cloud environment settings panel has no repository yet`,
                }),
            },
            t,
          )),
        (t[13] = r?.repositoryNamesById),
        (t[14] = l),
        (t[15] = a?.githubRepositories),
        (t[16] = e))
      : (e = t[16]),
      (m = p.map(e)),
      (t[8] = r?.repositoryNamesById),
      (t[9] = l),
      (t[10] = a?.githubRepositories),
      (t[11] = p),
      (t[12] = m));
  } else m = t[12];
  let h;
  t[17] === m
    ? (h = t[18])
    : ((h = (0, ta.jsx)(Wt.Content, { children: (0, ta.jsx)(n, { children: m }) })),
      (t[17] = m),
      (t[18] = h));
  let g;
  return (
    t[19] !== f || t[20] !== h
      ? ((g = (0, ta.jsxs)(Wt, { children: [f, h] })), (t[19] = f), (t[20] = h), (t[21] = g))
      : (g = t[21]),
    g
  );
}
var ea, ta;
function na() {
  return (na = e(() => {
    ((ea = A()), V(), G(), jt(), Le(), Y(), Nn(), (ta = y()));
  }))();
}
function ra(e) {
  let t = (0, oa.c)(19),
    { label: n, language: r, value: i, onChange: a } = e,
    o;
  t[0] !== n || t[1] !== r || t[2] !== i
    ? ((o = () => ({ name: n, lang: r, contents: i })), (t[0] = n), (t[1] = r), (t[2] = i), (t[3] = o))
    : (o = t[3]);
  let [s] = (0, sa.useState)(o),
    c = pt(),
    l = gt(c),
    u = me(Be.lightCodeThemeId),
    d = me(Be.darkCodeThemeId),
    f;
  t[4] !== l || t[5] !== d || t[6] !== u
    ? ((f = l === `light` ? Et(u, `light`) : Et(d, `dark`)), (t[4] = l), (t[5] = d), (t[6] = u), (t[7] = f))
    : (f = t[7]);
  let p = f,
    m;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = { onAttach: ia }), (t[8] = m)) : (m = t[8]);
  let h = p.name,
    g;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = en({
        includeDiffHeader: !1,
        includeSimpleLineSeparators: !1,
        rootSelector: `[data-file]`,
        surface: `var(--color-surface)`,
      })),
      (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] !== l || t[11] !== p.name
    ? ((_ = {
        disableFileHeader: !0,
        overflow: `wrap`,
        theme: h,
        themeType: l,
        useTokenTransformer: !0,
        unsafeCSS: `${g}
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
      (t[10] = l),
      (t[11] = p.name),
      (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] === a ? (v = t[14]) : ((v = (e) => a(e.file.contents)), (t[13] = a), (t[14] = v));
  let y;
  return (
    t[15] !== s || t[16] !== _ || t[17] !== v
      ? ((y = (0, ca.jsx)(`div`, {
          className: `max-h-96 overflow-y-auto`,
          children: (0, ca.jsx)(tn, {
            createEditor: aa,
            children: (0, ca.jsx)(on, {
              className: `min-h-40 [--diffs-dark:currentColor] [--diffs-editor-selection-bg:var(--color-background-info-soft)] [--diffs-light:currentColor] [--diffs-min-number-column-width:1ch]`,
              disableWorkerPool: !0,
              edit: !0,
              editorOptions: m,
              file: s,
              options: _,
              onEditChange: v,
            }),
          }),
        })),
        (t[15] = s),
        (t[16] = _),
        (t[17] = v),
        (t[18] = y))
      : (y = t[18]),
    y
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
    ((oa = A()), pn(), $t(), an(), Ne(), (sa = p()), nn(), De(), $e(), It(), rn(), (ca = y()));
  }))();
}
function ua(e) {
  let t = (0, ma.c)(20),
    { baseline: r, draft: i, isReadOnly: a, readOnlyTooltip: o, showHeading: s, onDraftChange: c } = e,
    l = s === void 0 || s,
    u = Oe(),
    [d, f] = (0, ha.useState)(null);
  a && d != null && f(null);
  let p;
  t[0] === l
    ? (p = t[1])
    : ((p =
        l &&
        (0, Z.jsx)(Wt.Header, {
          className: `select-none`,
          size: `base`,
          spacing: `compact`,
          title: (0, Z.jsx)(X, { ...ga.scripts }),
        })),
      (t[0] = l),
      (t[1] = p));
  let m;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = [`setupScript`, `startSkill`]), (t[2] = m))
    : (m = t[2]);
  let h;
  t[3] !== i || t[4] !== u || t[5] !== a || t[6] !== o
    ? ((h = (0, Z.jsx)(Wt.Content, {
        children: (0, Z.jsx)(n, {
          children: m.map((e) =>
            (0, Z.jsx)(
              Pe,
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
                      children: (0, Z.jsx)(X, { ...ga[e] }),
                    }),
                    (0, Z.jsx)(`span`, {
                      className: C(`truncate text-secondary`, i[e] && `font-mono`),
                      children: i[e] || (0, Z.jsx)(X, { ...ga.empty }),
                    }),
                  ],
                }),
                control: (0, Z.jsx)(vn, {
                  "aria-label": u.formatMessage(ga[e]),
                  color: `ghost`,
                  disabled: a,
                  tooltipContent: a ? o : null,
                  size: `icon`,
                  onClick: () => f(e),
                  children: (0, Z.jsx)(se, {}),
                }),
              },
              e,
            ),
          ),
        }),
      })),
      (t[3] = i),
      (t[4] = u),
      (t[5] = a),
      (t[6] = o),
      (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] !== p || t[9] !== h
    ? ((g = (0, Z.jsxs)(Wt, { children: [p, h] })), (t[8] = p), (t[9] = h), (t[10] = g))
    : (g = t[10]);
  let _;
  t[11] !== r || t[12] !== i || t[13] !== d || t[14] !== a || t[15] !== c
    ? ((_ =
        d != null && !a
          ? (0, Z.jsx)(da, {
              field: d,
              baseline:
                r == null ? void 0 : (r[d === `setupScript` ? `install_script` : `start_skill`] ?? ``),
              value: i[d] ?? ``,
              onClose: () => f(null),
              onSave: (e) => {
                (c({ [d]: e }), f(null));
              },
            })
          : null),
      (t[11] = r),
      (t[12] = i),
      (t[13] = d),
      (t[14] = a),
      (t[15] = c),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] !== g || t[18] !== _
      ? ((v = (0, Z.jsxs)(Z.Fragment, { children: [g, _] })), (t[17] = g), (t[18] = _), (t[19] = v))
      : (v = t[19]),
    v
  );
}
function da(e) {
  let t = (0, ma.c)(33),
    { field: n, baseline: r, value: i, onClose: a, onSave: o } = e,
    s = Oe(),
    [c, l] = (0, ha.useState)(),
    [u, d] = (0, ha.useState)(r == null || r === i),
    f = c ?? i,
    p = r != null && r !== f,
    m = u || !p,
    h = n === `setupScript` ? `install.sh` : `SKILL.md`,
    g;
  t[0] === a ? (g = t[1]) : ((g = (e) => !e && a()), (t[0] = a), (t[1] = g));
  let v;
  t[2] !== o || t[3] !== f
    ? ((v = (e) => {
        (e.preventDefault(), e.stopPropagation(), o(f));
      }),
      (t[2] = o),
      (t[3] = f),
      (t[4] = v))
    : (v = t[4]);
  let y = ga[n],
    x;
  t[5] === y
    ? (x = t[6])
    : ((x = (0, Z.jsx)(Ue, {
        children: (0, Z.jsx)(N, { title: (0, Z.jsx)(ke, { children: (0, Z.jsx)(X, { ...y }) }) }),
      })),
      (t[5] = y),
      (t[6] = x));
  let S;
  t[7] !== r || t[8] !== n || t[9] !== h || t[10] !== s || t[11] !== f || t[12] !== m || t[13] !== i
    ? ((S = (0, Z.jsx)(Ue, {
        children: (0, Z.jsx)(`div`, {
          className: `overflow-hidden border border-subtle`,
          children: m
            ? (0, Z.jsx)(
                ra,
                {
                  label: s.formatMessage(ga[n]),
                  language: n === `setupScript` ? `bash` : `markdown`,
                  value: f,
                  onChange: l,
                },
                i,
              )
            : (0, Z.jsx)(pa, { baseline: r ?? ``, filename: h, proposed: f }),
        }),
      })),
      (t[7] = r),
      (t[8] = n),
      (t[9] = h),
      (t[10] = s),
      (t[11] = f),
      (t[12] = m),
      (t[13] = i),
      (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] !== p || t[16] !== m
    ? ((C =
        p &&
        (0, Z.jsx)(H, {
          color: `secondary`,
          onClick: () => d(!m),
          children: m
            ? (0, Z.jsx)(X, {
                id: `environmentSetup.script.reviewChanges`,
                defaultMessage: `Review changes`,
                description: `Return from editing the proposed environment script to its diff against the last reviewed script`,
              })
            : (0, Z.jsx)(X, {
                id: `environmentSetup.script.edit`,
                defaultMessage: `Edit`,
                description: `Edit the proposed install script or start skill shown in the environment configuration diff`,
              }),
        })),
      (t[15] = p),
      (t[16] = m),
      (t[17] = C))
    : (C = t[17]);
  let w;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(X, {
        id: `restricted.environmentSetup.configuration.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Discard edits in a cloud environment configuration dialog`,
      })),
      (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] === a
    ? (T = t[20])
    : ((T = (0, Z.jsx)(H, { color: `secondary`, onClick: a, children: w })), (t[19] = a), (t[20] = T));
  let E;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Z.jsx)(H, {
        color: `primary`,
        type: `submit`,
        children: (0, Z.jsx)(X, {
          id: `restricted.environmentSetup.configuration.dialog.save`,
          defaultMessage: `Save`,
          description: `Apply dialog edits to the cloud environment configuration being edited`,
        }),
      })),
      (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] !== C || t[23] !== T
    ? ((D = (0, Z.jsx)(Ue, { children: (0, Z.jsxs)(b, { children: [C, T, E] }) })),
      (t[22] = C),
      (t[23] = T),
      (t[24] = D))
    : (D = t[24]);
  let O;
  t[25] !== D || t[26] !== v || t[27] !== x || t[28] !== S
    ? ((O = (0, Z.jsxs)(_, {
        as: `form`,
        size: `viewport`,
        onKeyDownCapture: fa,
        onSubmit: v,
        children: [x, S, D],
      })),
      (t[25] = D),
      (t[26] = v),
      (t[27] = x),
      (t[28] = S),
      (t[29] = O))
    : (O = t[29]);
  let k;
  return (
    t[30] !== g || t[31] !== O
      ? ((k = (0, Z.jsx)(ee, { open: !0, size: `xxwide`, onOpenChange: g, children: O })),
        (t[30] = g),
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
    ? ((s = Dt({ name: r, contents: n }, { name: r, contents: i })),
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
    : ((d = C(
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
              children: (0, Z.jsx)(X, {
                id: `codex.review.diff.loading`,
                defaultMessage: `Loading diff`,
                description: `Placeholder text shown while a review file diff is loading`,
              }),
            }),
            (0, Z.jsx)(lt, { lines: Math.min(c.unifiedLineCount, 12), minWidth: 42, maxWidth: 96 }),
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
    ((ma = A()),
      Qe(),
      T(),
      (ha = p()),
      V(),
      W(),
      v(),
      h(),
      I(),
      ut(),
      sn(),
      jt(),
      Le(),
      Y(),
      _n(),
      la(),
      (Z = y()),
      (ga = U({
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
    { configured: n, initialValue: r, removeControl: i, onClose: o, onSave: s } = e,
    c = Oe(),
    l = (0, xa.useId)(),
    u = (0, xa.useId)(),
    d = (0, xa.useId)(),
    f = (0, xa.useId)(),
    p = (0, xa.useId)(),
    m = (0, xa.useId)(),
    [h, g] = (0, xa.useState)(r),
    [v, y] = (0, xa.useState)(!1),
    S;
  t[0] === h
    ? (S = t[1])
    : ((S = h.length > 0 && (h.trim().length > 4096 || !/^tskey-auth-[A-Za-z0-9-]+$/.test(h.trim()))),
      (t[0] = h),
      (t[1] = S));
  let C = S,
    w;
  t[2] === o ? (w = t[3]) : ((w = (e) => !e && o()), (t[2] = o), (t[3] = w));
  let T;
  t[4] !== h || t[5] !== C || t[6] !== s
    ? ((T = (e) => {
        (e.preventDefault(), e.stopPropagation(), C || s(h));
      }),
      (t[4] = h),
      (t[5] = C),
      (t[6] = s),
      (t[7] = T))
    : (T = t[7]);
  let E;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Sa.jsx)(X, {
        id: `environmentSetup.vpn.keySetupHelp`,
        defaultMessage: `Use a reusable Tailscale auth key so new cloud machines can connect. Saving does not test the connection. <link>Tailscale auth key guide</link>`,
        description: `Guidance beside the Tailscale key input. Each new cloud machine may enroll again, so the key must be reusable. Saving does not validate connectivity. The link opens Tailscale's official key setup, expiry, and access guidance.`,
        values: { link: ya },
      })),
      (t[8] = E))
    : (E = t[8]);
  let D;
  t[9] === u
    ? (D = t[10])
    : ((D = (0, Sa.jsx)(`p`, { id: u, className: `select-none`, children: E })), (t[9] = u), (t[10] = D));
  let O;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Sa.jsx)(ke, {
        children: (0, Sa.jsx)(X, {
          id: `environmentSetup.vpn.dialogTitle`,
          defaultMessage: `Tailscale VPN`,
          description: `Title of the dialog for entering a Tailscale VPN authentication key`,
        }),
      })),
      (t[11] = O))
    : (O = t[11]);
  let k;
  t[12] === D
    ? (k = t[13])
    : ((k = (0, Sa.jsx)(Ue, {
        children: (0, Sa.jsx)(N, { subtitleSize: `sm`, subtitleTone: `secondary`, subtitle: D, title: O }),
      })),
      (t[12] = D),
      (t[13] = k));
  let A;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Sa.jsx)(X, {
        id: `restricted.environmentSetup.vpn.key`,
        defaultMessage: `Tailscale auth key`,
        description: `Label for the Tailscale authentication key used by this environment`,
      })),
      (t[14] = A))
    : (A = t[14]);
  let j;
  t[15] === l
    ? (j = t[16])
    : ((j = (0, Sa.jsx)(`label`, { className: `select-none`, htmlFor: l, children: A })),
      (t[15] = l),
      (t[16] = j));
  let M = v ? `text` : `password`,
    P;
  t[17] !== n || t[18] !== d || t[19] !== p || t[20] !== C || t[21] !== u || t[22] !== f || t[23] !== m
    ? ((P = [u, d, n ? m : null, C ? p : null, f].filter(Boolean).join(` `) || void 0),
      (t[17] = n),
      (t[18] = d),
      (t[19] = p),
      (t[20] = C),
      (t[21] = u),
      (t[22] = f),
      (t[23] = m),
      (t[24] = P))
    : (P = t[24]);
  let F = n ? `••••••••` : void 0,
    I;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (e) => {
        (g(e.currentTarget.value), e.currentTarget.value.length === 0 && y(!1));
      }),
      (t[25] = I))
    : (I = t[25]);
  let L;
  t[26] !== h || t[27] !== C || t[28] !== l || t[29] !== M || t[30] !== P || t[31] !== F
    ? ((L = (0, Sa.jsx)(Ot, {
        id: l,
        autoFocus: !0,
        type: M,
        autoComplete: `off`,
        spellCheck: !1,
        maxLength: 4096,
        "aria-describedby": P,
        "aria-invalid": C,
        placeholder: F,
        value: h,
        onChange: I,
      })),
      (t[26] = h),
      (t[27] = C),
      (t[28] = l),
      (t[29] = M),
      (t[30] = P),
      (t[31] = F),
      (t[32] = L))
    : (L = t[32]);
  let z;
  t[33] !== h.length || t[34] !== c || t[35] !== v
    ? ((z =
        h.length > 0
          ? (0, Sa.jsx)(H, {
              "aria-label": v
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
              onClick: () => y(!v),
              children: (0, Sa.jsx)(x, {}),
            })
          : null),
      (t[33] = h.length),
      (t[34] = c),
      (t[35] = v),
      (t[36] = z))
    : (z = t[36]);
  let B;
  t[37] !== L || t[38] !== z
    ? ((B = (0, Sa.jsxs)(R, { children: [L, z] })), (t[37] = L), (t[38] = z), (t[39] = B))
    : (B = t[39]);
  let V;
  t[40] !== n || t[41] !== m
    ? ((V = n
        ? (0, Sa.jsx)(`p`, {
            id: m,
            className: `text-sm text-secondary select-none`,
            children: (0, Sa.jsx)(X, {
              id: `restricted.environmentSetup.vpn.savedKeyHint`,
              defaultMessage: `A key is saved; enter a new key to replace it, or leave this blank to keep the saved key`,
              description: `Guidance for an empty VPN key field with a saved key represented by a masked placeholder`,
            }),
          })
        : null),
      (t[40] = n),
      (t[41] = m),
      (t[42] = V))
    : (V = t[42]);
  let U;
  t[43] !== p || t[44] !== C
    ? ((U = C
        ? (0, Sa.jsx)(`p`, {
            id: p,
            className: `text-sm text-secondary select-none`,
            role: `alert`,
            children: (0, Sa.jsx)(X, {
              id: `restricted.environmentSetup.vpn.invalidKeyFormat`,
              defaultMessage: `Enter a Tailscale auth key starting with tskey-auth- and containing only letters, numbers, or hyphens`,
              description: `Shown before saving when a Tailscale auth key has an invalid prefix, character, or length`,
            }),
          })
        : null),
      (t[43] = p),
      (t[44] = C),
      (t[45] = U))
    : (U = t[45]);
  let W;
  t[46] !== B || t[47] !== V || t[48] !== U || t[49] !== j
    ? ((W = (0, Sa.jsx)(Ue, { children: (0, Sa.jsxs)(a, { children: [j, B, V, U] }) })),
      (t[46] = B),
      (t[47] = V),
      (t[48] = U),
      (t[49] = j),
      (t[50] = W))
    : (W = t[50]);
  let G;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Sa.jsx)(X, {
        id: `environmentSetup.vpn.deviceSetupHelp`,
        defaultMessage: `Cloud machines already use ephemeral Tailscale devices; the key's Ephemeral setting is not required. Follow your tailnet administrator's requirements for tags and device approval.`,
        description: `Explains that the cloud runtime creates temporary Tailscale devices regardless of the auth key's Ephemeral toggle. Tags and device approval depend on the user's tailnet policy, not a universal cloud requirement.`,
      })),
      (t[51] = G))
    : (G = t[51]);
  let K;
  t[52] === d
    ? (K = t[53])
    : ((K = (0, Sa.jsx)(`p`, { id: d, className: `text-sm text-secondary select-none`, children: G })),
      (t[52] = d),
      (t[53] = K));
  let q;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, Sa.jsx)(X, {
        id: `environmentSetup.vpn.networkHelp`,
        defaultMessage: `For Package managers or Custom domains only, add private IPv4 addresses or VPN hostnames that resolve to IPv4 under Additional allowed domains`,
        description: `Explains the two internet access presets that require private IPv4 addresses or VPN hostnames that resolve to IPv4 in Additional allowed domains`,
      })),
      (t[54] = q))
    : (q = t[54]);
  let J;
  t[55] === f
    ? (J = t[56])
    : ((J = (0, Sa.jsx)(`p`, { id: f, className: `text-sm text-secondary select-none`, children: q })),
      (t[55] = f),
      (t[56] = J));
  let te;
  t[57] !== K || t[58] !== J
    ? ((te = (0, Sa.jsxs)(Ue, { children: [K, J] })), (t[57] = K), (t[58] = J), (t[59] = te))
    : (te = t[59]);
  let ne;
  t[60] === i
    ? (ne = t[61])
    : ((ne = i ? (0, Sa.jsx)(`div`, { className: `me-auto`, children: i }) : null),
      (t[60] = i),
      (t[61] = ne));
  let re;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, Sa.jsx)(X, {
        id: `restricted.environmentSetup.configuration.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Discard edits in a cloud environment configuration dialog`,
      })),
      (t[62] = re))
    : (re = t[62]);
  let ie;
  t[63] === o
    ? (ie = t[64])
    : ((ie = (0, Sa.jsx)(H, { color: `secondary`, onClick: o, children: re })), (t[63] = o), (t[64] = ie));
  let ae;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, Sa.jsx)(X, {
        id: `restricted.environmentSetup.configuration.dialog.save`,
        defaultMessage: `Save`,
        description: `Apply dialog edits to the cloud environment configuration being edited`,
      })),
      (t[65] = ae))
    : (ae = t[65]);
  let Y;
  t[66] === C
    ? (Y = t[67])
    : ((Y = (0, Sa.jsx)(H, { color: `primary`, type: `submit`, disabled: C, children: ae })),
      (t[66] = C),
      (t[67] = Y));
  let oe;
  t[68] !== ne || t[69] !== ie || t[70] !== Y
    ? ((oe = (0, Sa.jsx)(Ue, { children: (0, Sa.jsxs)(b, { children: [ne, ie, Y] }) })),
      (t[68] = ne),
      (t[69] = ie),
      (t[70] = Y),
      (t[71] = oe))
    : (oe = t[71]);
  let se;
  t[72] !== W || t[73] !== te || t[74] !== T || t[75] !== oe || t[76] !== k
    ? ((se = (0, Sa.jsxs)(_, { as: `form`, size: `viewport`, onSubmit: T, children: [k, W, te, oe] })),
      (t[72] = W),
      (t[73] = te),
      (t[74] = T),
      (t[75] = oe),
      (t[76] = k),
      (t[77] = se))
    : (se = t[77]);
  let ce;
  return (
    t[78] !== w || t[79] !== se
      ? ((ce = (0, Sa.jsx)(ee, { open: !0, onOpenChange: w, children: se })),
        (t[78] = w),
        (t[79] = se),
        (t[80] = ce))
      : (ce = t[80]),
    ce
  );
}
function ya(e) {
  return (0, Sa.jsx)(st, {
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
    ((ba = A()), (xa = p()), V(), W(), v(), h(), Ut(), I(), Ke(), (Sa = y()));
  }))();
}
function wa(e) {
  let t = (0, Da.c)(153),
    { configuration: n, isReadOnly: r, isVisible: i, onDraftSaved: a, onPendingChange: o, ref: s } = e,
    c = i === void 0 || i,
    u = Oe(),
    d = (0, Oa.useId)(),
    f = ve?.environmentConfigs,
    p = P(),
    [m, h] = (0, Oa.useState)(``),
    [g, _] = (0, Oa.useState)(!1),
    [v, y] = (0, Oa.useState)(!1),
    b;
  t[0] === m
    ? (b = t[1])
    : ((b = m.trim().length <= 4096 && /^tskey-auth-[A-Za-z0-9-]+$/.test(m.trim())), (t[0] = m), (t[1] = b));
  let x = b,
    [S, C] = (0, Oa.useState)(!1),
    [T, E] = (0, Oa.useState)(!1),
    [D, O] = (0, Oa.useState)(!1),
    [k, A] = (0, Oa.useState)(null),
    M;
  t[2] !== n.accountId || t[3] !== n.configId || t[4] !== n.draftId || t[5] !== n.userId
    ? ((M = it(n.accountId, n.userId, n.configId, n.draftId)),
      (t[2] = n.accountId),
      (t[3] = n.configId),
      (t[4] = n.draftId),
      (t[5] = n.userId),
      (t[6] = M))
    : (M = t[6]);
  let N = M,
    F;
  t[7] !== n.accountId || t[8] !== n.configId || t[9] !== n.draftId || t[10] !== n.userId
    ? ((F = [`environment-vpn`, n.accountId, n.userId, n.configId, n.draftId]),
      (t[7] = n.accountId),
      (t[8] = n.configId),
      (t[9] = n.draftId),
      (t[10] = n.userId),
      (t[11] = F))
    : (F = t[11]);
  let I = F,
    L;
  t[12] !== n.accountId || t[13] !== n.configId || t[14] !== n.draftId || t[15] !== n.userId
    ? ((L = { accountId: n.accountId, userId: n.userId, configId: n.configId, draftId: n.draftId }),
      (t[12] = n.accountId),
      (t[13] = n.configId),
      (t[14] = n.draftId),
      (t[15] = n.userId),
      (t[16] = L))
    : (L = t[16]);
  let R = L,
    z;
  t[17] === R
    ? (z = t[18])
    : ((z = async () => {
        if (f?.requestVpn == null) throw Error(`unavailable`);
        let e = await f.requestVpn({ ...R, method: `GET` });
        if (!e.ok) throw Error(e.error);
        return e.data;
      }),
      (t[17] = R),
      (t[18] = z));
  let ee;
  t[19] !== I || t[20] !== z
    ? ((ee = {
        queryKey: I,
        enabled: f?.requestVpn != null,
        staleTime: 0,
        refetchOnWindowFocus: !1,
        refetchOnMount: `always`,
        retry: !1,
        queryFn: z,
      }),
      (t[19] = I),
      (t[20] = z),
      (t[21] = ee))
    : (ee = t[21]);
  let { data: B, isPending: V, isError: U, isFetching: W, refetch: G } = w(ee),
    K;
  t[22] !== N ||
  t[23] !== n.accountId ||
  t[24] !== n.configId ||
  t[25] !== n.draftId ||
  t[26] !== n.userId ||
  t[27] !== a ||
  t[28] !== p
    ? ((K = async () => {
        if (f == null) return null;
        try {
          let e = await Ct(f, n.accountId, n.userId, n.configId, n.draftId);
          return (p.setQueryData(N, e), a?.(e), e);
        } catch {
          return null;
        }
      }),
      (t[22] = N),
      (t[23] = n.accountId),
      (t[24] = n.configId),
      (t[25] = n.draftId),
      (t[26] = n.userId),
      (t[27] = a),
      (t[28] = p),
      (t[29] = K))
    : (K = t[29]);
  let q = K,
    J;
  t[30] !== m ||
  t[31] !== n.draftId ||
  t[32] !== B ||
  t[33] !== o ||
  t[34] !== p ||
  t[35] !== I ||
  t[36] !== R
    ? ((J = async (e) => {
        let t = f,
          r = t?.requestVpn;
        if (t == null || r == null || B == null) throw Error(`unavailable`);
        let i = m.trim();
        (h(``), _(!1), o?.(!1, !0));
        let a = await r({ ...R, method: `GET` });
        if (!a.ok) throw Error(`not-saved`);
        if ((p.setQueryData(I, a.data), e)) {
          if (B.connection?.id !== a.data.connection?.id || B.connection?.etag !== a.data.connection?.etag)
            throw Error(`changed`);
          let e = await t.request({
            ...R,
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
          if (B.connection?.id !== a.data.connection?.id || B.connection?.etag !== a.data.connection?.etag)
            throw Error(`changed`);
          let e = (e) =>
              r({
                ...R,
                method: `POST`,
                body: {
                  provider: `tailscale`,
                  auth_method: `auth_key`,
                  connection_id: n.draftId == null ? e.connection?.id : void 0,
                  expected_etag: n.draftId == null ? e.connection?.etag : void 0,
                  auth_key: i,
                  base_version_id: e.base_version_id,
                  expected_draft_revision: e.draft_revision ?? void 0,
                },
              }),
            t = await e(a.data);
          if (t.ok) return (p.setQueryData(I, t.data), t.data);
          if (t.status === 409 && a.data.connection == null) {
            let t = await r({ ...R, method: `GET` });
            if (!t.ok) throw Error(`not-saved`);
            if ((p.setQueryData(I, t.data), t.data.connection == null)) {
              let n = await e(t.data);
              if (n.ok) return (p.setQueryData(I, n.data), n.data);
              throw Error(n.status === 400 ? `invalid` : n.error);
            }
          }
          throw Error(t.status === 400 ? `invalid` : t.error);
        }
      }),
      (t[30] = m),
      (t[31] = n.draftId),
      (t[32] = B),
      (t[33] = o),
      (t[34] = p),
      (t[35] = I),
      (t[36] = R),
      (t[37] = J))
    : (J = t[37]);
  let te;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = () => {
        A(null);
      }),
      (t[38] = te))
    : (te = t[38]);
  let ne;
  t[39] === G
    ? (ne = t[40])
    : ((ne = async (e, t) => {
        if (e.message === `refresh-failed` || e.message === `mismatch`) return;
        let n = await G();
        if ((C(n.isError), n.isError)) return;
        let r = `uncertain`;
        (e.message === `changed`
          ? (r = `changed`)
          : t
            ? (r = n.data?.connection == null ? null : `remove-failed`)
            : e.message === `invalid`
              ? (r = `invalid`)
              : (e.message === `not-saved` || n.data?.connection == null) && (r = `not-saved`),
          A(r));
      }),
      (t[39] = G),
      (t[40] = ne));
  let re;
  t[41] !== G || t[42] !== q
    ? ((re = async (e, t) => {
        A(null);
        let [n, r] = await Promise.all([G(), q()]);
        if ((C(n.isError), E(r == null), r == null || n.isError)) throw Error(`refresh-failed`);
        if (t ? n.data?.connection != null : n.data?.connection?.etag !== e?.connection?.etag)
          throw (A(`mismatch`), Error(`mismatch`));
        return r;
      }),
      (t[41] = G),
      (t[42] = q),
      (t[43] = re))
    : (re = t[43]);
  let ie;
  t[44] !== ne || t[45] !== re || t[46] !== J
    ? ((ie = { retry: !1, mutationFn: J, onMutate: te, onError: ne, onSuccess: re }),
      (t[44] = ne),
      (t[45] = re),
      (t[46] = J),
      (t[47] = ie))
    : (ie = t[47]);
  let { mutateAsync: ae, isPending: Y } = He(ie),
    oe;
  (t[48] !== N ||
  t[49] !== T ||
  t[50] !== B ||
  t[51] !== U ||
  t[52] !== V ||
  t[53] !== Y ||
  t[54] !== ae ||
  t[55] !== S ||
  t[56] !== g ||
  t[57] !== p ||
  t[58] !== x
    ? ((oe = () => ({
        save: async () => {
          if (Y || V || U || S || T || B == null || (!g && !x)) throw Error(`unavailable`);
          await ae(g);
          let e = p.getQueryData(N);
          if (e == null) throw Error(`refresh-failed`);
          return e;
        },
      })),
      (t[48] = N),
      (t[49] = T),
      (t[50] = B),
      (t[51] = U),
      (t[52] = V),
      (t[53] = Y),
      (t[54] = ae),
      (t[55] = S),
      (t[56] = g),
      (t[57] = p),
      (t[58] = x),
      (t[59] = oe))
    : (oe = t[59]),
    (0, Oa.useImperativeHandle)(s, oe));
  let ce;
  t[60] === B?.capabilities
    ? (ce = t[61])
    : ((ce = B?.capabilities.some(Ta)), (t[60] = B?.capabilities), (t[61] = ce));
  let le = ce;
  if ((v && (!c || !le || r || Y || U) && y(!1), f?.requestVpn == null)) return null;
  let ue;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, Q.jsx)(X, {
        id: `restricted.environmentSetup.vpn.title`,
        defaultMessage: `VPN`,
        description: `Section for a cloud environment VPN connection`,
      })),
      (t[62] = ue))
    : (ue = t[62]);
  let de = ue;
  if (!le) {
    let e;
    t[63] !== W || t[64] !== V || t[65] !== G
      ? ((e = V
          ? null
          : (0, Q.jsx)(H, {
              color: `ghost`,
              size: `settingsAction`,
              disabled: W,
              onClick: () => void G(),
              children: (0, Q.jsx)(X, {
                id: `restricted.environmentSetup.vpn.refresh`,
                defaultMessage: `Refresh`,
                description: `Reloads saved VPN key metadata and environment settings after an automatic refresh fails`,
              }),
            })),
        (t[63] = W),
        (t[64] = V),
        (t[65] = G),
        (t[66] = e))
      : (e = t[66]);
    let n = U ? `alert` : `status`,
      r;
    t[67] === V
      ? (r = t[68])
      : ((r =
          V &&
          (0, Q.jsx)(X, {
            id: `restricted.environmentSetup.vpn.loading`,
            defaultMessage: `Loading saved key status…`,
            description: `Status while loading whether a VPN key is attached to the environment`,
          })),
        (t[67] = V),
        (t[68] = r));
    let i;
    t[69] !== U || t[70] !== V
      ? ((i =
          !V &&
          U &&
          (0, Q.jsx)(X, {
            id: `restricted.environmentSetup.vpn.loadFailed`,
            defaultMessage: `Couldn't refresh saved key status`,
            description: `The latest VPN key attachment metadata could not be loaded`,
          })),
        (t[69] = U),
        (t[70] = V),
        (t[71] = i))
      : (i = t[71]);
    let a;
    t[72] !== U || t[73] !== V
      ? ((a =
          !V &&
          !U &&
          (0, Q.jsx)(X, {
            id: `environmentSetup.vpn.unsupported`,
            defaultMessage: `VPN isn’t available for this environment`,
            description: `The environment service does not offer a supported VPN authentication method`,
          })),
        (t[72] = U),
        (t[73] = V),
        (t[74] = a))
      : (a = t[74]);
    let o;
    t[75] !== n || t[76] !== r || t[77] !== i || t[78] !== a
      ? ((o = (0, Q.jsxs)(`p`, {
          className: `text-sm text-secondary select-none`,
          role: n,
          children: [r, i, a],
        })),
        (t[75] = n),
        (t[76] = r),
        (t[77] = i),
        (t[78] = a),
        (t[79] = o))
      : (o = t[79]);
    let s;
    return (
      t[80] !== e || t[81] !== o
        ? ((s = (0, Q.jsx)(Fi, { title: de, actions: e, children: o })),
          (t[80] = e),
          (t[81] = o),
          (t[82] = s))
        : (s = t[82]),
      s
    );
  }
  let fe = r || Y || V || U || S || T || !le,
    pe = B?.connection?.configured === !0 && !g,
    me = U || S || T || k != null || (m.length > 0 && !x),
    he;
  t[83] !== B?.connection ||
  t[84] !== fe ||
  t[85] !== u ||
  t[86] !== r ||
  t[87] !== S ||
  t[88] !== o ||
  t[89] !== g
    ? ((he =
        B?.connection != null && !g && !S && !r
          ? (0, Q.jsx)(Te, {
              cloneCustomTrigger: !0,
              tooltipContent: (0, Q.jsx)(X, {
                id: `restricted.environmentSetup.vpn.removeHelp`,
                defaultMessage: `Removes VPN from this draft. Published versions may still use the saved key.`,
                description: `Clarifies that removing the draft VPN attachment does not delete credentials needed by older published versions`,
              }),
              children: (0, Q.jsx)(H, {
                "aria-label": u.formatMessage({
                  id: `restricted.environmentSetup.vpn.remove`,
                  defaultMessage: `Remove VPN from draft`,
                  description: `Detaches the VPN from the draft without deleting its stored credentials`,
                }),
                color: `ghost`,
                size: `icon`,
                type: `button`,
                disabled: fe,
                onClick: () => {
                  (h(``), _(!0), y(!1), A(null), o?.(!0, !0));
                },
                children: (0, Q.jsx)(l, { asset: j }),
              }),
            })
          : null),
      (t[83] = B?.connection),
      (t[84] = fe),
      (t[85] = u),
      (t[86] = r),
      (t[87] = S),
      (t[88] = o),
      (t[89] = g),
      (t[90] = he))
    : (he = t[90]);
  let ge = he,
    _e;
  t[91] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, Q.jsxs)(`span`, {
        className: `flex items-center gap-2.5`,
        children: [
          (0, Q.jsx)(Ea, {}),
          (0, Q.jsx)(X, {
            id: `restricted.environmentSetup.vpn.provider`,
            defaultMessage: `Tailscale`,
            description: `Name of the Tailscale VPN provider`,
          }),
        ],
      })),
      (t[91] = _e))
    : (_e = t[91]);
  let ye;
  t[92] === g
    ? (ye = t[93])
    : ((ye =
        g &&
        (0, Q.jsx)(X, {
          id: `environmentSetup.vpn.removalPending`,
          defaultMessage: `Removal pending`,
          description: `The VPN will be detached when the environment is saved`,
        })),
      (t[92] = g),
      (t[93] = ye));
  let be;
  t[94] !== m.length || t[95] !== g
    ? ((be =
        !g &&
        m.length > 0 &&
        (0, Q.jsx)(X, {
          id: `environmentSetup.vpn.keyEntered`,
          defaultMessage: `Key entered`,
          description: `A Tailscale key has been entered but the environment has not been saved yet`,
        })),
      (t[94] = m.length),
      (t[95] = g),
      (t[96] = be))
    : (be = t[96]);
  let xe;
  t[97] !== m.length || t[98] !== pe || t[99] !== g
    ? ((xe =
        !g &&
        m.length === 0 &&
        (pe
          ? (0, Q.jsx)(X, {
              id: `environmentSetup.vpn.configured`,
              defaultMessage: `Configured`,
              description: `A Tailscale key is attached to the environment; this does not indicate a tested connection`,
            })
          : (0, Q.jsx)(X, {
              id: `environmentSetup.vpn.notSet`,
              defaultMessage: `Not set`,
              description: `No Tailscale key is attached to the environment`,
            }))),
      (t[97] = m.length),
      (t[98] = pe),
      (t[99] = g),
      (t[100] = xe))
    : (xe = t[100]);
  let Se;
  t[101] !== ye || t[102] !== be || t[103] !== xe
    ? ((Se = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 items-center justify-between gap-3`,
        children: [_e, (0, Q.jsxs)(`span`, { className: `truncate text-secondary`, children: [ye, be, xe] })],
      })),
      (t[101] = ye),
      (t[102] = be),
      (t[103] = xe),
      (t[104] = Se))
    : (Se = t[104]);
  let Ce;
  t[105] !== fe || t[106] !== o || t[107] !== g
    ? ((Ce = g
        ? (0, Q.jsx)(H, {
            color: `ghost`,
            size: `compact`,
            type: `button`,
            disabled: fe,
            onClick: () => {
              (_(!1), o?.(!1, !0));
            },
            children: (0, Q.jsx)(X, {
              id: `restricted.environmentSetup.vpn.undoRemove`,
              defaultMessage: `Undo removal`,
              description: `Restores a VPN attachment staged for removal before the environment is saved`,
            }),
          })
        : null),
      (t[105] = fe),
      (t[106] = o),
      (t[107] = g),
      (t[108] = Ce))
    : (Ce = t[108]);
  let we;
  t[109] === u
    ? (we = t[110])
    : ((we = u.formatMessage({
        id: `environmentSetup.vpn.editKey`,
        defaultMessage: `Edit Tailscale auth key`,
        description: `Opens the dialog for entering or replacing the Tailscale VPN key`,
      })),
      (t[109] = u),
      (t[110] = we));
  let Ee, De;
  t[111] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = () => y(!0)), (De = (0, Q.jsx)(se, {})), (t[111] = Ee), (t[112] = De))
    : ((Ee = t[111]), (De = t[112]));
  let ke;
  t[113] !== fe || t[114] !== we
    ? ((ke = (0, Q.jsx)(H, {
        "aria-label": we,
        color: `ghost`,
        size: `icon`,
        type: `button`,
        disabled: fe,
        onClick: Ee,
        children: De,
      })),
      (t[113] = fe),
      (t[114] = we),
      (t[115] = ke))
    : (ke = t[115]);
  let Ae;
  t[116] !== Ce || t[117] !== ke
    ? ((Ae = (0, Q.jsxs)(Q.Fragment, { children: [Ce, ke] })), (t[116] = Ce), (t[117] = ke), (t[118] = Ae))
    : (Ae = t[118]);
  let je;
  t[119] !== Se || t[120] !== Ae
    ? ((je = (0, Q.jsx)(Pe, {
        className: `select-none`,
        controlSizing: `content`,
        inset: !1,
        variant: `featured`,
        size: `compact`,
        label: Se,
        control: Ae,
      })),
      (t[119] = Se),
      (t[120] = Ae),
      (t[121] = je))
    : (je = t[121]);
  let Me;
  t[122] !== m ||
  t[123] !== pe ||
  t[124] !== fe ||
  t[125] !== v ||
  t[126] !== c ||
  t[127] !== o ||
  t[128] !== ge
    ? ((Me =
        v && !fe && c
          ? (0, Q.jsx)(va, {
              configured: pe,
              initialValue: m,
              removeControl: ge,
              onClose: () => y(!1),
              onSave: (e) => {
                (h(e), _(!1), A(null), o?.(e.length > 0, !0), y(!1));
              },
            })
          : null),
      (t[122] = m),
      (t[123] = pe),
      (t[124] = fe),
      (t[125] = v),
      (t[126] = c),
      (t[127] = o),
      (t[128] = ge),
      (t[129] = Me))
    : (Me = t[129]);
  let Ne;
  t[130] !== m.length ||
  t[131] !== T ||
  t[132] !== d ||
  t[133] !== me ||
  t[134] !== U ||
  t[135] !== S ||
  t[136] !== k ||
  t[137] !== x
    ? ((Ne = me
        ? (0, Q.jsxs)(`p`, {
            id: d,
            className: `py-2 text-sm text-secondary select-none`,
            role: `alert`,
            children: [
              !U &&
                !S &&
                !T &&
                m.length > 0 &&
                !x &&
                (0, Q.jsx)(X, {
                  id: `restricted.environmentSetup.vpn.invalidKeyFormat`,
                  defaultMessage: `Enter a Tailscale auth key starting with tskey-auth- and containing only letters, numbers, or hyphens`,
                  description: `Shown before saving when a Tailscale auth key has an invalid prefix, character, or length`,
                }),
              U &&
                (0, Q.jsx)(X, {
                  id: `restricted.environmentSetup.vpn.loadFailed`,
                  defaultMessage: `Couldn't refresh saved key status`,
                  description: `The latest VPN key attachment metadata could not be loaded`,
                }),
              !U &&
                S &&
                (0, Q.jsx)(X, {
                  id: `restricted.environmentSetup.vpn.refreshFailed`,
                  defaultMessage: `Couldn't confirm the saved key status after the change`,
                  description: `The VPN change finished but the automatic read of saved key metadata failed`,
                }),
              !U &&
                !S &&
                T &&
                (0, Q.jsx)(X, {
                  id: `restricted.environmentSetup.vpn.configRefreshFailed`,
                  defaultMessage: `VPN change saved, but the environment settings couldn't refresh`,
                  description: `The VPN change succeeded but the separate environment configuration refresh failed`,
                }),
              !U &&
                !S &&
                !T &&
                k === `not-saved` &&
                (0, Q.jsx)(X, {
                  id: `restricted.environmentSetup.vpn.notSaved`,
                  defaultMessage: `Key wasn't saved. Paste it again and retry`,
                  description: `No VPN key is attached after an attempted key save`,
                }),
              !U &&
                !S &&
                !T &&
                k === `invalid` &&
                (0, Q.jsx)(X, {
                  id: `restricted.environmentSetup.vpn.invalidKey`,
                  defaultMessage: `Couldn't save key. Check that it's a Tailscale auth key and try again`,
                  description: `The VPN key save request was rejected as invalid`,
                }),
              !U &&
                !S &&
                !T &&
                k === `changed` &&
                (0, Q.jsx)(X, {
                  id: `restricted.environmentSetup.vpn.changed`,
                  defaultMessage: `Saved key settings changed. Review them before saving again`,
                  description: `The saved VPN connection changed between opening and submitting the key field`,
                }),
              !U &&
                !S &&
                !T &&
                k === `uncertain` &&
                (0, Q.jsx)(X, {
                  id: `restricted.environmentSetup.vpn.keyUncertain`,
                  defaultMessage: `A key is configured, but we couldn't confirm whether the new key was saved. Re-enter a known key if needed`,
                  description: `A failed replacement may have updated the key, but saved metadata cannot identify which key is stored`,
                }),
              !U &&
                !S &&
                !T &&
                k === `remove-failed` &&
                (0, Q.jsx)(X, {
                  id: `restricted.environmentSetup.vpn.removeFailed`,
                  defaultMessage: `VPN is still attached to this draft. Try removing it again`,
                  description: `The VPN removal failed and a fresh read still shows an attached connection`,
                }),
              !U &&
                !S &&
                !T &&
                k === `mismatch` &&
                (0, Q.jsx)(X, {
                  id: `restricted.environmentSetup.vpn.statusMismatch`,
                  defaultMessage: `The refreshed key status didn't match the saved change`,
                  description: `The VPN save or removal succeeded but a fresh metadata read showed a different attachment`,
                }),
            ],
          })
        : null),
      (t[130] = m.length),
      (t[131] = T),
      (t[132] = d),
      (t[133] = me),
      (t[134] = U),
      (t[135] = S),
      (t[136] = k),
      (t[137] = x),
      (t[138] = Ne))
    : (Ne = t[138]);
  let Fe;
  t[139] !== T ||
  t[140] !== U ||
  t[141] !== W ||
  t[142] !== D ||
  t[143] !== Y ||
  t[144] !== S ||
  t[145] !== G ||
  t[146] !== q
    ? ((Fe =
        U || S || T
          ? (0, Q.jsx)(`div`, {
              className: `flex justify-end gap-2`,
              children: (0, Q.jsx)(H, {
                color: `secondary`,
                size: `compact`,
                type: `button`,
                disabled: Y || W,
                loading: D,
                onClick: () => {
                  (h(``),
                    O(!0),
                    Promise.all([G(), T ? q() : Promise.resolve(null)])
                      .then((e) => {
                        let [t, n] = e;
                        (C(t.isError), E(T && n == null));
                      })
                      .finally(() => O(!1)));
                },
                children: (0, Q.jsx)(X, {
                  id: `restricted.environmentSetup.vpn.refresh`,
                  defaultMessage: `Refresh`,
                  description: `Reloads saved VPN key metadata and environment settings after an automatic refresh fails`,
                }),
              }),
            })
          : null),
      (t[139] = T),
      (t[140] = U),
      (t[141] = W),
      (t[142] = D),
      (t[143] = Y),
      (t[144] = S),
      (t[145] = G),
      (t[146] = q),
      (t[147] = Fe))
    : (Fe = t[147]);
  let Ie;
  return (
    t[148] !== je || t[149] !== Me || t[150] !== Ne || t[151] !== Fe
      ? ((Ie = (0, Q.jsxs)(Fi, { title: de, children: [je, Me, Ne, Fe] })),
        (t[148] = je),
        (t[149] = Me),
        (t[150] = Ne),
        (t[151] = Fe),
        (t[152] = Ie))
      : (Ie = t[152]),
    Ie
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
    ((Da = A()),
      q(),
      ze(),
      be(),
      S(),
      (Oa = p()),
      V(),
      W(),
      E(),
      I(),
      Ae(),
      te(),
      Le(),
      nt(),
      zi(),
      Ca(),
      (Q = y()));
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
      onDraftSaved: u,
      vpnRef: d,
      onVpnPendingChange: f,
      panelState: p,
      secrets: m,
      config: h,
      serverNetworkPolicy: _,
      setSecrets: v,
      issues: y,
      environmentVariables: b,
      setEnvironmentVariables: x,
      revealConnections: S,
      section: w,
    } = e,
    T;
  t[0] === y ? (T = t[1]) : ((T = y === void 0 ? [] : y), (t[0] = y), (t[1] = T));
  let E = T,
    D = S !== void 0 && S,
    k = ge(Xe),
    A = Oe(),
    j;
  t[2] === A
    ? (j = t[3])
    : ((j = A.formatMessage({
        id: `restricted.environmentSetup.configuration.network.toggle`,
        defaultMessage: `Allow Codex to access internet`,
        description: `Accessible label for enabling internet access in a mocked cloud environment settings panel`,
      })),
      (t[2] = A),
      (t[3] = j));
  let M = j,
    N = (h?.draft ?? h)?.tcp_network_access,
    P;
  t[4] === N?.ip_ranges ? (P = t[5]) : ((P = N?.ip_ranges ?? []), (t[4] = N?.ip_ranges), (t[5] = P));
  let F;
  t[6] === N?.domains ? (F = t[7]) : ((F = N?.domains ?? []), (t[6] = N?.domains), (t[7] = F));
  let I;
  t[8] !== P || t[9] !== F ? ((I = [...P, ...F]), (t[8] = P), (t[9] = F), (t[10] = I)) : (I = t[10]);
  let L = I,
    R = ge(Kt),
    z = (0, La.useId)(),
    ee = (0, La.useId)(),
    B;
  t[11] === D ? (B = t[12]) : ((B = { revealConnections: D, open: D }), (t[11] = D), (t[12] = B));
  let [V, U] = (0, La.useState)(B);
  V.revealConnections !== D && U({ revealConnections: D, open: V.open || D });
  let W;
  t[13] === E ? (W = t[14]) : ((W = E.filter(Fa)), (t[13] = E), (t[14] = W));
  let G = W,
    K = V.open || D || G.length > 0,
    [q, J] = (0, La.useState)(null),
    te;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, $.jsx)(X, {
        id: `restricted.environmentSetup.configuration.network.preset.common`,
        defaultMessage: `Package managers`,
        description: `Package manager cloud environment network preset`,
      })),
      (t[15] = te))
    : (te = t[15]);
  let re = te;
  if (i.networkPreset === `all`) {
    let e;
    (t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(X, {
          id: `restricted.environmentSetup.configuration.network.preset.all`,
          defaultMessage: `All (unrestricted)`,
          description: `Unrestricted cloud environment network preset`,
        })),
        (t[16] = e))
      : (e = t[16]),
      (re = e));
  } else if (i.networkPreset === `none`) {
    let e;
    (t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(X, {
          id: `restricted.environmentSetup.configuration.network.preset.none`,
          defaultMessage: `Custom domains only`,
          description: `Cloud environment network preset that allows only individually configured domains`,
        })),
        (t[17] = e))
      : (e = t[17]),
      (re = e));
  }
  o && q != null && J(null);
  let ie;
  t[18] !== r || t[19] !== i || t[20] !== E || t[21] !== p || t[22] !== w
    ? ((ie =
        w == null || w === `repositories`
          ? (0, $.jsx)(`div`, {
              "data-environment-section": `repositories`,
              children: (0, $.jsx)($i, {
                configuration: r,
                draft: i,
                panelState: p,
                issues: E,
                showHeading: w == null,
              }),
            })
          : null),
      (t[18] = r),
      (t[19] = i),
      (t[20] = E),
      (t[21] = p),
      (t[22] = w),
      (t[23] = ie))
    : (ie = t[23]);
  let ae;
  t[24] !== h?.tcp_network_access ||
  t[25] !== r?.reviewedDraft?.tcp_network_access ||
  t[26] !== w ||
  t[27] !== L ||
  t[28] !== N
    ? ((ae =
        w === `tcpAccess` ||
        (w == null &&
          (N != null || h?.tcp_network_access != null || r?.reviewedDraft?.tcp_network_access != null))
          ? (0, $.jsx)(`section`, {
              className: `flex flex-col`,
              "data-environment-section": `tcpAccess`,
              children: (0, $.jsx)(Wt.Content, {
                children: (0, $.jsx)(n, {
                  children: (0, $.jsx)(Pe, {
                    label: (0, $.jsx)(X, { ...Gr.tcpAccess }),
                    description: (0, $.jsxs)($.Fragment, {
                      children: [
                        (0, $.jsx)(`p`, {
                          children:
                            L.length > 0
                              ? L.join(`, `)
                              : (0, $.jsx)(X, {
                                  id: `environmentSetup.configuration.tcpAccess.empty`,
                                  defaultMessage: `No TCP destinations allowed`,
                                  description: `Read-only summary when a cloud environment has no TCP destination grants`,
                                }),
                        }),
                        L.length > 0
                          ? (0, $.jsx)(X, {
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
      (t[26] = w),
      (t[27] = L),
      (t[28] = N),
      (t[29] = ae))
    : (ae = t[29]);
  let Y;
  t[30] !== i || t[31] !== o || t[32] !== c || t[33] !== s || t[34] !== a || t[35] !== w
    ? ((Y =
        w == null || w === `scripts`
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
      (t[35] = w),
      (t[36] = Y))
    : (Y = t[36]);
  let oe;
  t[37] !== h ||
  t[38] !== r ||
  t[39] !== i.networkDomains ||
  t[40] !== i.networkEnabled ||
  t[41] !== i.networkHttpsMethods ||
  t[42] !== i.networkPreset ||
  t[43] !== A ||
  t[44] !== o ||
  t[45] !== E ||
  t[46] !== M ||
  t[47] !== re ||
  t[48] !== c ||
  t[49] !== s ||
  t[50] !== ee ||
  t[51] !== m ||
  t[52] !== w ||
  t[53] !== _
    ? ((oe =
        w == null || w === `network` || w === `secrets`
          ? (0, $.jsx)(Wt, {
              children: (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-6`,
                children: [
                  w == null || w === `network`
                    ? (0, $.jsxs)(`section`, {
                        className: `flex flex-col`,
                        "data-environment-section": `network`,
                        children: [
                          (0, $.jsx)(Wt.Header, {
                            className: `select-none`,
                            size: `base`,
                            spacing: `compact`,
                            title: (0, $.jsx)(X, {
                              id: `restricted.environmentSetup.configuration.network.title`,
                              defaultMessage: `Internet access`,
                              description: `Heading for internet access controls in a mocked cloud environment settings panel`,
                            }),
                          }),
                          (0, $.jsxs)(Wt.Content, {
                            children: [
                              r == null ? null : (0, $.jsx)(ji, { configuration: r }),
                              (0, $.jsxs)(n, {
                                children: [
                                  (0, $.jsx)(Pe, {
                                    className: `select-none`,
                                    controlSizing: `content`,
                                    variant: `featured`,
                                    size: `compact`,
                                    control: (0, $.jsx)(qr, {
                                      label: M,
                                      reason: o ? s : null,
                                      children: (0, $.jsx)(Ce, {
                                        ariaLabel: M,
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
                                    label: (0, $.jsx)(X, {
                                      id: `restricted.environmentSetup.configuration.network.label`,
                                      defaultMessage: `Allow Codex to access internet`,
                                      description: `Label for the internet access toggle in a mocked cloud environment settings panel`,
                                    }),
                                  }),
                                  i.networkEnabled === !0
                                    ? (0, $.jsx)(Pe, {
                                        className: `select-none`,
                                        controlSizing: `content`,
                                        variant: `featured`,
                                        size: `compact`,
                                        control: (0, $.jsxs)(Fe, {
                                          contentWidth: `menu`,
                                          triggerButton: (0, $.jsxs)(vn, {
                                            tooltipContent: o ? s : null,
                                            "aria-label": A.formatMessage({
                                              id: `restricted.environmentSetup.configuration.network.preset.trigger`,
                                              defaultMessage: `Allow domains`,
                                              description: `Accessible label for selecting the cloud environment internet access preset`,
                                            }),
                                            color: `outline`,
                                            disabled: o,
                                            size: `settingsAction`,
                                            children: [re, (0, $.jsx)(O, {})],
                                          }),
                                          children: [
                                            (0, $.jsx)(je.Item, {
                                              disabled: o,
                                              onSelect: () => c({ networkPreset: `all` }),
                                              children: (0, $.jsx)(X, {
                                                id: `restricted.environmentSetup.configuration.network.preset.all`,
                                                defaultMessage: `All (unrestricted)`,
                                                description: `Unrestricted cloud environment network preset`,
                                              }),
                                            }),
                                            (0, $.jsx)(je.Item, {
                                              disabled: o,
                                              onSelect: () => c({ networkPreset: `package_managers` }),
                                              children: (0, $.jsx)(X, {
                                                id: `restricted.environmentSetup.configuration.network.preset.common`,
                                                defaultMessage: `Package managers`,
                                                description: `Package manager cloud environment network preset`,
                                              }),
                                            }),
                                            (0, $.jsx)(je.Item, {
                                              disabled: o,
                                              onSelect: () => c({ networkPreset: `none` }),
                                              children: (0, $.jsx)(X, {
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
                                            (0, $.jsx)(X, {
                                              id: `restricted.environmentSetup.configuration.network.allowlist`,
                                              defaultMessage: `Allow domains`,
                                              description: `Label for choosing the allowed domain preset for cloud environment internet access`,
                                            }),
                                            (0, $.jsx)(Te, {
                                              cloneCustomTrigger: !0,
                                              tooltipContent: (0, $.jsx)(X, {
                                                id: `environmentSetup.configuration.network.presets.tooltip`,
                                                defaultMessage: `View domain presets`,
                                                description: `Tooltip for the link to documentation listing the domains allowed by each network preset`,
                                              }),
                                              children: (0, $.jsx)(H, {
                                                "aria-label": A.formatMessage({
                                                  id: `environmentSetup.configuration.network.presets.about`,
                                                  defaultMessage: `About allowed domain presets`,
                                                  description: `Accessible label for the information button that opens documentation about allowed domain presets`,
                                                }),
                                                color: `ghostSecondary`,
                                                size: `inline`,
                                                type: `button`,
                                                onClick: Pa,
                                                children: (0, $.jsx)(l, { asset: Re }),
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
                                        issues: E.filter(Na),
                                        onChange: (e) => c({ networkDomains: e }),
                                      })
                                    : null,
                                  _ == null
                                    ? (0, $.jsx)(Pe, {
                                        className: `select-none`,
                                        controlSizing: `content`,
                                        variant: `featured`,
                                        size: `compact`,
                                        control: (0, $.jsxs)(Fe, {
                                          contentWidth: `menu`,
                                          triggerButton: (0, $.jsxs)(vn, {
                                            tooltipContent: o ? s : null,
                                            "aria-label": A.formatMessage({
                                              id: `restricted.environmentSetup.configuration.network.methods.trigger`,
                                              defaultMessage: `Allowed HTTPS methods`,
                                              description: `Accessible label for choosing simulated cloud environment HTTPS methods`,
                                            }),
                                            color: `outline`,
                                            disabled: o || i.networkEnabled !== !0,
                                            size: `settingsAction`,
                                            children: [
                                              i.networkHttpsMethods == null || i.networkHttpsMethods === `all`
                                                ? (0, $.jsx)(X, {
                                                    id: `restricted.environmentSetup.configuration.network.methods.all`,
                                                    defaultMessage: `All`,
                                                    description: `Option allowing all HTTPS methods in a simulated cloud environment`,
                                                  })
                                                : i.networkHttpsMethods,
                                              (0, $.jsx)(O, {}),
                                            ],
                                          }),
                                          children: [
                                            (0, $.jsx)(je.Item, {
                                              disabled: o,
                                              onSelect: () => c({ networkHttpsMethods: `all` }),
                                              children: (0, $.jsx)(X, {
                                                id: `restricted.environmentSetup.configuration.network.methods.all`,
                                                defaultMessage: `All`,
                                                description: `Option allowing all HTTPS methods in a simulated cloud environment`,
                                              }),
                                            }),
                                            (0, $.jsx)(je.Item, {
                                              disabled: o,
                                              onSelect: () => c({ networkHttpsMethods: `GET` }),
                                              children: (0, $.jsx)(X, {
                                                id: `environmentSetup.network.methods.get`,
                                                defaultMessage: `GET`,
                                                description: `The HTTP GET method name; preserve the protocol name`,
                                              }),
                                            }),
                                            (0, $.jsx)(je.Item, {
                                              disabled: o,
                                              onSelect: () => c({ networkHttpsMethods: `GET, POST` }),
                                              children: (0, $.jsx)(X, {
                                                id: `environmentSetup.network.methods.getPost`,
                                                defaultMessage: `GET, POST`,
                                                description: `The HTTP GET and POST method names; preserve the protocol names`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        label: (0, $.jsx)(X, {
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
                  w == null || w === `secrets`
                    ? (0, $.jsxs)(`section`, {
                        className: `flex flex-col`,
                        "data-environment-section": `secrets`,
                        children: [
                          (0, $.jsx)(Wt.Header, {
                            className: `select-none`,
                            actions: (0, $.jsx)(vn, {
                              tooltipContent: o ? s : null,
                              "aria-describedby": w == null ? ee : void 0,
                              "aria-label": A.formatMessage({
                                id: `environmentSetup.secrets.manageLabel`,
                                defaultMessage: `Manage secrets`,
                                description: `Accessible label for opening the editor to add, edit, import, or remove network secrets`,
                              }),
                              color: `secondary`,
                              disabled: o,
                              size: `settingsAction`,
                              onClick: () => J({ config: h, secrets: m }),
                              children: (0, $.jsx)(X, {
                                id: `environmentSetup.secrets.manage`,
                                defaultMessage: `Manage`,
                                description: `Button to open the editor for adding, editing, importing, and removing network secrets`,
                              }),
                            }),
                            size: `base`,
                            spacing: `compact`,
                            subtitlePlacement: `below-header`,
                            subtitle:
                              w == null
                                ? (0, $.jsx)(`span`, {
                                    id: ee,
                                    children: (0, $.jsx)(X, {
                                      id: `environmentSetup.networkSecrets.domainAccess`,
                                      defaultMessage: `Saving a network secret also allows access to its domains`,
                                      description: `Explanation beside Add in environment network settings that saving a network secret grants Internet access to its destination domains`,
                                    }),
                                  })
                                : null,
                            title:
                              w == null
                                ? (0, $.jsxs)(`div`, {
                                    className: `flex items-center gap-1`,
                                    children: [
                                      (0, $.jsx)(X, {
                                        id: `environmentSetup.networkSecrets.title`,
                                        defaultMessage: `Network secrets`,
                                        description: `Heading for the network secrets subsection within environment network settings`,
                                      }),
                                      (0, $.jsx)(Te, {
                                        cloneCustomTrigger: !0,
                                        tooltipContent: (0, $.jsx)(X, {
                                          id: `restricted.environmentSetup.sidePanel.secrets.tooltip`,
                                          defaultMessage: `Secrets stay outside the environment. Code receives a placeholder that is replaced only for requests to allowed HTTPS domains.`,
                                          description: `Tooltip explaining how proxy secrets are protected and delivered`,
                                        }),
                                        children: (0, $.jsx)(H, {
                                          "aria-label": A.formatMessage({
                                            id: `restricted.environmentSetup.sidePanel.secrets.tooltip.label`,
                                            defaultMessage: `About network secrets`,
                                            description: `Accessible label for the network secrets information tooltip`,
                                          }),
                                          color: `ghostSecondary`,
                                          size: `inline`,
                                          type: `button`,
                                          children: (0, $.jsx)(l, { asset: Re }),
                                        }),
                                      }),
                                    ],
                                  })
                                : null,
                          }),
                          (0, $.jsx)(Wt.Content, {
                            children: (0, $.jsx)(n, {
                              children:
                                m.length === 0
                                  ? (0, $.jsx)(Pe, {
                                      className: `select-none`,
                                      controlSizing: `content`,
                                      variant: `featured`,
                                      size: `compact`,
                                      control: null,
                                      icon: (0, $.jsx)(g, { className: `text-secondary` }),
                                      label: (0, $.jsx)(X, {
                                        id: `restricted.environmentSetup.configuration.secret.empty`,
                                        defaultMessage: `No proxy secrets added`,
                                        description: `Description shown when a cloud environment has no proxy secret declarations`,
                                      }),
                                    })
                                  : m.map((e) => {
                                      let t = E.filter((t) => {
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
                                          children: (0, $.jsx)(X, {
                                            id: `environmentSetup.secret.mask`,
                                            defaultMessage: `••••••••`,
                                            description: `Eight bullet characters masking a saved or staged secret; preserve these masking characters`,
                                          }),
                                        });
                                      return (
                                        n
                                          ? (r = (0, $.jsx)(X, {
                                              id: `restricted.environmentSetup.configuration.secret.missing`,
                                              defaultMessage: `Missing`,
                                              description: `Status for a cloud environment secret requirement with no saved or staged value`,
                                            }))
                                          : e.source === `user_provided`
                                            ? (r = (0, $.jsx)(X, {
                                                id: `restricted.environmentSetup.configuration.secret.source.userProvided`,
                                                defaultMessage: `User-provided`,
                                                description: `A cloud environment secret supplied by the executing user`,
                                              }))
                                            : e.value.length === 0 &&
                                              e.serverId == null &&
                                              !(o && e.source === `environment`) &&
                                              (r = (0, $.jsx)(X, {
                                                id: `restricted.environmentSetup.configuration.secret.noValue`,
                                                defaultMessage: `No value`,
                                                description: `Status for an environment secret with no value stored in the current mock editor`,
                                              })),
                                        (0, $.jsx)(
                                          Pe,
                                          {
                                            className: `select-none`,
                                            controlSizing: `content`,
                                            variant: `featured`,
                                            size: `compact`,
                                            control: (e) =>
                                              (0, $.jsxs)($.Fragment, {
                                                children: [
                                                  (0, $.jsx)(`span`, {
                                                    className: C(
                                                      `text-base select-none`,
                                                      n ? `text-danger` : `text-secondary`,
                                                    ),
                                                    children: r,
                                                  }),
                                                  (0, $.jsx)(vn, {
                                                    tooltipContent: o ? s : null,
                                                    "aria-describedby": e[`aria-describedby`],
                                                    "data-environment-invalid": t.length > 0,
                                                    "aria-label": A.formatMessage({
                                                      id: `restricted.environmentSetup.configuration.secret.edit`,
                                                      defaultMessage: `Edit secret`,
                                                      description: `Accessible label for editing a simulated cloud environment secret declaration`,
                                                    }),
                                                    color: `ghost`,
                                                    size: `icon`,
                                                    disabled: o,
                                                    onClick: () => J({ config: h, secrets: m }),
                                                    children: (0, $.jsx)(se, {}),
                                                  }),
                                                ],
                                              }),
                                            icon: (0, $.jsx)(g, {}),
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
      (t[43] = A),
      (t[44] = o),
      (t[45] = E),
      (t[46] = M),
      (t[47] = re),
      (t[48] = c),
      (t[49] = s),
      (t[50] = ee),
      (t[51] = m),
      (t[52] = w),
      (t[53] = _),
      (t[54] = oe))
    : (oe = t[54]);
  let ce;
  t[55] !== h ||
  t[56] !== r ||
  t[57] !== b ||
  t[58] !== o ||
  t[59] !== E ||
  t[60] !== s ||
  t[61] !== m ||
  t[62] !== w ||
  t[63] !== x
    ? ((ce =
        x == null || (w != null && w !== `variables`)
          ? null
          : (0, $.jsx)(_i, {
              configuration: r,
              config: h,
              variables: b ?? [],
              issues: E,
              unavailableNames: m.flatMap(ja),
              isReadOnly: o,
              readOnlyTooltip: s,
              onChange: x,
              showHeading: w == null,
            })),
      (t[55] = h),
      (t[56] = r),
      (t[57] = b),
      (t[58] = o),
      (t[59] = E),
      (t[60] = s),
      (t[61] = m),
      (t[62] = w),
      (t[63] = x),
      (t[64] = ce))
    : (ce = t[64]);
  let le;
  t[65] !== k ||
  t[66] !== h?.is_owner ||
  t[67] !== i.access ||
  t[68] !== A ||
  t[69] !== o ||
  t[70] !== c ||
  t[71] !== s ||
  t[72] !== w
    ? ((le =
        w == null || w === `privacy`
          ? (0, $.jsxs)(`section`, {
              className: `flex flex-col`,
              "data-environment-section": `privacy`,
              children: [
                (0, $.jsx)(Wt.Header, {
                  className: `select-none`,
                  size: `base`,
                  spacing: `compact`,
                  title: (0, $.jsx)(X, {
                    id: `restricted.environmentSetup.configuration.privacy.title`,
                    defaultMessage: `Privacy`,
                    description: `Heading for privacy controls in a mocked cloud environment settings panel`,
                  }),
                }),
                (0, $.jsx)(Wt.Content, {
                  children: (0, $.jsx)(n, {
                    children: (0, $.jsx)(Pe, {
                      className: `select-none`,
                      controlSizing: `content`,
                      variant: `featured`,
                      size: `compact`,
                      control: (0, $.jsxs)(Fe, {
                        contentWidth: `menu`,
                        triggerButton: (0, $.jsxs)(vn, {
                          tooltipContent: o ? s : null,
                          color: `outline`,
                          disabled: o,
                          size: `settingsAction`,
                          children: [
                            (0, $.jsx)(ne, {}),
                            i.access === `organization`
                              ? (0, $.jsx)(un, {})
                              : (0, $.jsx)(X, {
                                  id: `restricted.environmentSetup.configuration.privacy.private`,
                                  defaultMessage: `Only me`,
                                  description: `Privacy option limiting a simulated cloud environment to its creator`,
                                }),
                            (0, $.jsx)(O, {}),
                          ],
                        }),
                        children: [
                          (0, $.jsx)(je.Item, {
                            disabled: o || h?.is_owner === !1,
                            focusableWhenDisabled: !0,
                            tooltipText:
                              h?.is_owner === !1
                                ? A.formatMessage({
                                    id: `environmentSetup.sharing.ownerOnlyTooltip`,
                                    defaultMessage: `Ask the environment owner to make it private`,
                                    description: `Tooltip on the disabled Only me sharing option when someone other than the environment owner is editing a shared environment`,
                                  })
                                : void 0,
                            onSelect: () => c({ access: `private` }),
                            children: (0, $.jsx)(X, {
                              id: `restricted.environmentSetup.configuration.privacy.private`,
                              defaultMessage: `Only me`,
                              description: `Privacy option limiting a simulated cloud environment to its creator`,
                            }),
                          }),
                          k &&
                            (0, $.jsx)(je.Item, {
                              disabled: o,
                              onSelect: () => c({ access: `organization` }),
                              children: (0, $.jsx)(un, {}),
                            }),
                        ],
                      }),
                      label: (0, $.jsx)(X, {
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
      (t[65] = k),
      (t[66] = h?.is_owner),
      (t[67] = i.access),
      (t[68] = A),
      (t[69] = o),
      (t[70] = c),
      (t[71] = s),
      (t[72] = w),
      (t[73] = le))
    : (le = t[73]);
  let ue;
  t[74] !== z ||
  t[75] !== r ||
  t[76] !== G ||
  t[77] !== i.outboundIdentityRequirements ||
  t[78] !== o ||
  t[79] !== c ||
  t[80] !== u ||
  t[81] !== f ||
  t[82] !== R ||
  t[83] !== D ||
  t[84] !== w ||
  t[85] !== K ||
  t[86] !== d
    ? ((ue =
        (w == null || w === `connections`) &&
        (R || (w == null && r != null && ve?.environmentConfigs?.requestVpn != null))
          ? (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-2`,
              "data-environment-section": `connections`,
              children: [
                w == null
                  ? (0, $.jsxs)(H, {
                      className: `gap-2 self-start text-base`,
                      "aria-controls": z,
                      "aria-expanded": K,
                      color: `ghostMuted`,
                      size: `inline`,
                      onClick: () => U({ revealConnections: D, open: !K }),
                      children: [
                        (0, $.jsx)(X, {
                          id: `restricted.environmentSetup.oic.advanced`,
                          defaultMessage: `Advanced`,
                          description: `Disclosure for advanced environment configuration`,
                        }),
                        (0, $.jsx)(Se, { className: C(!K && `-rotate-90`) }),
                      ],
                    })
                  : null,
                (0, $.jsx)(`div`, {
                  id: z,
                  hidden: !K,
                  children: (0, $.jsx)(n, {
                    dividers: !1,
                    children: (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-2.5 px-4 py-3`,
                      children: [
                        R && K
                          ? (0, $.jsx)(
                              Ki,
                              {
                                configuration: r,
                                requirements: i.outboundIdentityRequirements,
                                issues: G,
                                isReadOnly: o,
                                showHeading: w == null,
                                onChange: (e) => c({ outboundIdentityRequirements: e }),
                              },
                              r == null
                                ? `local-environment`
                                : `oic:${r.accountId}:${r.userId}:${r.configId}`,
                            )
                          : null,
                        w == null && r != null
                          ? (0, $.jsx)(
                              wa,
                              {
                                ref: d,
                                configuration: r,
                                isReadOnly: o,
                                isVisible: K,
                                onDraftSaved: u,
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
      (t[74] = z),
      (t[75] = r),
      (t[76] = G),
      (t[77] = i.outboundIdentityRequirements),
      (t[78] = o),
      (t[79] = c),
      (t[80] = u),
      (t[81] = f),
      (t[82] = R),
      (t[83] = D),
      (t[84] = w),
      (t[85] = K),
      (t[86] = d),
      (t[87] = ue))
    : (ue = t[87]);
  let de;
  t[88] !== h || t[89] !== r || t[90] !== q || t[91] !== o || t[92] !== v
    ? ((de =
        q == null || o
          ? null
          : (0, $.jsx)(Rr, {
              configuration: r,
              initialSecrets: q.secrets,
              hasConflict: Zr(h, q.config),
              requireValues: !1,
              onClose: () => J(null),
              onLocalSave: v,
            })),
      (t[88] = h),
      (t[89] = r),
      (t[90] = q),
      (t[91] = o),
      (t[92] = v),
      (t[93] = de))
    : (de = t[93]);
  let fe;
  return (
    t[94] !== ie ||
    t[95] !== ae ||
    t[96] !== Y ||
    t[97] !== oe ||
    t[98] !== ce ||
    t[99] !== le ||
    t[100] !== ue ||
    t[101] !== de
      ? ((fe = (0, $.jsxs)($.Fragment, { children: [ie, ae, Y, oe, ce, le, ue, de] })),
        (t[94] = ie),
        (t[95] = ae),
        (t[96] = Y),
        (t[97] = oe),
        (t[98] = ce),
        (t[99] = le),
        (t[100] = ue),
        (t[101] = de),
        (t[102] = fe))
      : (fe = t[102]),
    fe
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
  bt({
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
    ((Ia = A()),
      Ve(),
      T(),
      K(),
      (La = p()),
      V(),
      dt(),
      W(),
      re(),
      At(),
      E(),
      I(),
      Ie(),
      Ae(),
      te(),
      jt(),
      Le(),
      Y(),
      _n(),
      Kn(),
      Wr(),
      Kr(),
      Xr(),
      Ci(),
      Pi(),
      Vt(),
      Qi(),
      na(),
      ln(),
      Nn(),
      _a(),
      ka(),
      ($ = y()));
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
//# sourceMappingURL=configuration-fields-14404446a1e8.js.map
