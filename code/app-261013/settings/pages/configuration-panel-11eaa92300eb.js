import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $nt as n,
  $x as r,
  AO as i,
  AQ as a,
  CO as o,
  CPt as s,
  Cot as c,
  Ez as l,
  Fat as u,
  GE as d,
  Hct as f,
  IDt as p,
  Iot as m,
  Ixt as h,
  JC as g,
  JO as _,
  Kat as v,
  Lot as y,
  MO as b,
  Nxt as x,
  Pat as S,
  Pxt as C,
  Rnt as w,
  SPt as T,
  TO as E,
  VDt as ee,
  Vxt as D,
  WE as O,
  Wnt as k,
  Xot as A,
  Yot as j,
  _pt as te,
  _xt as M,
  b0 as N,
  bO as P,
  d9 as F,
  eS as I,
  f9 as L,
  gpt as R,
  hot as ne,
  iw as z,
  jDt as B,
  jO as re,
  kQ as ie,
  kz as ae,
  lot as V,
  p9 as oe,
  qC as se,
  qO as ce,
  qat as H,
  qft as le,
  qnt as ue,
  rrt as de,
  rst as U,
  srt as fe,
  t3 as W,
  tw as pe,
  u9 as me,
  vzt as he,
  wot as ge,
  wpt as _e,
  wxt as ve,
  xMt as G,
  y0 as K,
  yO as ye,
  yzt as be,
  zxt as xe,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Cn as Se,
  $_r as Ce,
  BKt as we,
  Brt as Te,
  Ek as Ee,
  FEr as De,
  GHn as Oe,
  Ggr as ke,
  Hm as Ae,
  JRt as je,
  Jdr as Me,
  KHn as Ne,
  KRt as Pe,
  LPr as Fe,
  LTn as Ie,
  OKt as Le,
  PEr as q,
  QCn as Re,
  QDr as ze,
  QP as J,
  RC as Be,
  RPr as Ve,
  RTn as He,
  Rrt as Ue,
  Tk as Y,
  UA as We,
  UT as Ge,
  Vgr as Ke,
  Vm as qe,
  WA as Je,
  WT as Ye,
  XDr as Xe,
  XRt as Ze,
  X_r as Qe,
  YCn as $e,
  YRt as et,
  Ydr as tt,
  ZRt as nt,
  Z_r as rt,
  Zgr as it,
  _F as at,
  _Ht as ot,
  aDr as st,
  aVt as ct,
  cMr as lt,
  cVt as ut,
  c_r as dt,
  dFr as ft,
  eDr as pt,
  eF as mt,
  evr as ht,
  fMr as gt,
  fa as _t,
  gHt as vt,
  hF as yt,
  hHt as bt,
  ha as xt,
  hp as St,
  lVt as Ct,
  m_r as wt,
  mp as Tt,
  nDr as Et,
  nFr as Dt,
  n_r as Ot,
  nvr as kt,
  oFr as At,
  oHt as jt,
  oVt as Mt,
  pHt as Nt,
  qRt as Pt,
  rvr as Ft,
  sFr as It,
  sHt as Lt,
  tF as Rt,
  tvr as zt,
  uFr as Bt,
  v8n as Vt,
  vHt as Ht,
  xMr as Ut,
  yHt as Wt,
  zC as Gt,
  zPr as Kt,
} from "./app-initial-5851df3f6cb1.js";
import { Dl as X, Ol as qt, by as Jt, oh as Yt, sh as Xt, xy as Zt } from "./app-primary-fe8a450b3b04.js";
import { n as Qt, t as $t } from "./lock-41bc3a009808.js";
import { n as en, t as tn } from "./model-and-reasoning-effort-translations-96be4f100801.js";
import { n as nn, t as rn } from "./settings-loading-row-bf72bf2df25d.js";
import { n as an, t as on } from "./parse-28efc409234f.js";
import { l as sn, u as cn } from "./settings-route-state-b6ca0f4e071e.js";
import { n as ln, t as un } from "./plugins-settings-row-65fe7d48ee44.js";
import { n as dn, t as fn } from "./experimental-feature-visibility-ea6bb142bf6f.js";
import { i as pn, n as mn, r as hn } from "./panel-8ba44374bdf7.js";
function gn({ diagnostics: e, durationMs: t }) {
  return {
    durationMs: t,
    problemCount: e.problems.length,
    status: e.installed
      ? F.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_OK
      : F.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_PROBLEM,
    ...bn(e.bundleVersion),
  };
}
function _n({ durationMs: e }) {
  return { durationMs: e, status: F.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_FAILED };
}
function vn({ bundleVersion: e, durationMs: t, status: n }) {
  return { durationMs: t, status: yn(n), ...bn(e) };
}
function yn(e) {
  switch (e) {
    case `already-current`:
      return oe.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_ALREADY_CURRENT;
    case `canceled`:
      return oe.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_CANCELED;
    case `failed`:
      return oe.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_FAILED;
    case `installed`:
      return oe.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_INSTALLED;
  }
}
function bn(e) {
  return e == null || e.length === 0 ? {} : { bundleVersion: e };
}
function xn() {
  return (xn = e(() => {
    w();
  }))();
}
function Sn(e) {
  return e instanceof Error || e instanceof DOMException
    ? e.name === `AbortError` || e.message.toLowerCase().includes(`aborted`)
    : !1;
}
var Cn;
function wn() {
  return (wn = e(() => {
    Cn = `3026692602`;
  }))();
}
function Tn(e) {
  if (e == null) return 0;
  switch (e.phase) {
    case `checking`:
      return 0;
    case `downloading`:
      return e.downloadedBytes == null || e.totalBytes == null
        ? 0
        : Math.floor(Math.min((e.downloadedBytes / e.totalBytes) * 100, 100));
    case `verifying`:
    case `extracting`:
      return 98;
    case `validating`:
    case `installed`:
    case `configuring`:
    case `ready`:
      return 100;
    case `error`:
      return 0;
  }
}
function En(e, t) {
  switch (e?.phase) {
    case void 0:
    case `checking`:
    case `downloading`:
    case `error`:
      return (0, Dn.jsx)(p, {
        id: `localConversation.primaryRuntimeInstallStatus.downloading`,
        defaultMessage: `Setting up your workspace: {percent}%`,
        description: `Thread status shown while Codex downloads required local runtime tools before starting a response`,
        values: { percent: t },
      });
    case `extracting`:
      return (0, Dn.jsx)(p, {
        id: `localConversation.primaryRuntimeInstallStatus.extracting`,
        defaultMessage: `Preparing your workspace`,
        description: `Thread status shown while Codex extracts required local runtime tools before starting a response`,
      });
    case `verifying`:
    case `validating`:
    case `installed`:
    case `configuring`:
    case `ready`:
      return (0, Dn.jsx)(p, {
        id: `localConversation.primaryRuntimeInstallStatus.finalizing`,
        defaultMessage: `Finalizing your workspace`,
        description: `Thread status shown while Codex finalizes required local runtime tools before starting a response`,
      });
  }
}
var Dn;
function On() {
  return (On = e(() => {
    (B(), (Dn = G()));
  }))();
}
async function kn({ filePath: e, hostId: t, keyPath: n, value: r }) {
  let i = An(n, r);
  if (i == null) throw Error(`Unsupported config key for project config write.`);
  let a = ``;
  try {
    a = (await de(`read-file`, { params: { hostId: t, path: e } })).contents;
  } catch (e) {
    if (!Rn(e)) throw Error(`Failed to read project config.`);
  }
  try {
    an(a);
  } catch {
    throw Error(`The project config.toml file is invalid.`);
  }
  let o = jn(a, i.name, i.value);
  try {
    an(o);
  } catch {
    throw Error(`The updated project config.toml file is invalid.`);
  }
  if (o !== a)
    try {
      await de(`local-environment-config-save`, { params: { configPath: e, hostId: t, raw: o } });
    } catch {
      throw Error(`Failed to save project config.`);
    }
}
function An(e, t) {
  return e === `approval_policy` && (t === `on-request` || t === `never`)
    ? { name: `approval_policy`, value: t }
    : e === `sandbox_mode` && (t === `read-only` || t === `workspace-write` || t === `danger-full-access`)
      ? { name: `sandbox_mode`, value: t }
      : e === `web_search` &&
          (t === `disabled` || t === `cached` || t === `indexed` || t === `live` || t == null)
        ? { name: `web_search`, value: t }
        : e === `model_verbosity` && (t === `low` || t === `medium` || t === `high` || t == null)
          ? { name: `model_verbosity`, value: t }
          : e === `model_reasoning_summary` &&
              (t === `auto` || t === `concise` || t === `detailed` || t === `none` || t == null)
            ? { name: `model_reasoning_summary`, value: t }
            : e === `sandbox_workspace_write.network_access` && typeof t == `boolean`
              ? { name: `network_access`, value: t }
              : null;
}
function jn(e, t, n) {
  return t === `network_access` ? Nn(e, n === !0) : Mn(e, t, n == null ? null : String(n));
}
function Mn(e, t, n) {
  let r =
      e.length > 0
        ? e.split(`
`)
        : [],
    i = null,
    a = null,
    o = -1,
    s = !1;
  for (let [e, c] of r.entries()) {
    let l = In(c, a),
      u = a != null;
    if (((a = l.multilineString), u || a != null)) continue;
    let d = Fn(c);
    if (d != null) {
      (o === -1 && (o = e), (i = d));
      continue;
    }
    if (i == null && RegExp(`^\\s*(?:${t}|"${t}"|'${t}')\\s*=`).test(c)) {
      (n == null
        ? l.commentIndex === -1
          ? r.splice(e, 1)
          : (r[e] = `${c.match(/^\s*/)?.[0] ?? ``}${c.slice(l.commentIndex)}`)
        : (r[e] = Ln(c, `${t} = "${n}"`, l.commentIndex)),
        (s = !0));
      break;
    }
  }
  if (!s) {
    if (n == null) return e;
    let i = o;
    (i === -1 && (i = r.at(-1) === `` ? r.length - 1 : r.length), r.splice(i, 0, `${t} = "${n}"`));
  }
  return Pn(
    r.join(`
`),
  );
}
function Nn(e, t) {
  let n =
      e.length > 0
        ? e.split(`
`)
        : [],
    r = !1,
    i = null,
    a = null,
    o = n.length,
    s = !1,
    c = t ? `true` : `false`;
  for (let [e, t] of n.entries()) {
    let l = In(t, a),
      u = a != null;
    if (((a = l.multilineString), u || a != null)) continue;
    let d = Fn(t);
    if (d != null) {
      if (r) {
        o = e;
        break;
      }
      (d === `sandbox_workspace_write` && (r = !0), (i = d));
      continue;
    }
    if (
      i == null &&
      /^\s*(?:sandbox_workspace_write|"sandbox_workspace_write"|'sandbox_workspace_write')\s*\.\s*(?:network_access|"network_access"|'network_access')\s*=/.test(
        t,
      )
    ) {
      ((n[e] = Ln(t, `sandbox_workspace_write.network_access = ${c}`, l.commentIndex)), (s = !0));
      break;
    }
    if (
      i == null &&
      /^\s*(?:sandbox_workspace_write|"sandbox_workspace_write"|'sandbox_workspace_write')\s*=\s*\{/.test(t)
    )
      throw Error(`The sandbox_workspace_write inline table cannot be updated safely.`);
    if (r && /^\s*(?:network_access|"network_access"|'network_access')\s*=/.test(t)) {
      ((n[e] = Ln(t, `network_access = ${c}`, l.commentIndex)), (s = !0));
      break;
    }
  }
  if (r && !s)
    return (
      n.splice(o, 0, `network_access = ${t ? `true` : `false`}`),
      Pn(
        n.join(`
`),
      )
    );
  if (s)
    return Pn(
      n.join(`
`),
    );
  let l =
    e.length > 0 &&
    !e.endsWith(`
`)
      ? `${e}\n`
      : e;
  return `${l}${
    l.trim().length === 0
      ? ``
      : `
`
  }[sandbox_workspace_write]\nnetwork_access = ${t ? `true` : `false`}\n`;
}
function Pn(e) {
  return e.endsWith(`
`)
    ? e
    : `${e}\n`;
}
function Fn(e) {
  let { commentIndex: t } = In(e, null),
    n = (t === -1 ? e : e.slice(0, t)).match(/^\s*\[(?:\[(.+)\]|(.+))\]\s*$/),
    r = n?.[1] ?? n?.[2];
  return r == null ? null : r.trim().replace(/^(["'])(.*)\1$/, `$2`);
}
function In(e, t) {
  let n = t;
  for (let t = 0; t < e.length; t += 1) {
    let r = e[t];
    if (n != null) {
      if (n === `"""` || n === `'''`) {
        if (n === `"""` && r === `\\`) {
          t += 1;
          continue;
        }
        e.startsWith(n, t) && ((t += 2), (n = null));
        continue;
      }
      if (n === `"` && r === `\\`) {
        t += 1;
        continue;
      }
      r === n && (n = null);
      continue;
    }
    if (r === `#`) return { multilineString: null, commentIndex: t };
    if (e.startsWith(`"""`, t)) {
      ((n = `"""`), (t += 2));
      continue;
    }
    if (e.startsWith(`'''`, t)) {
      ((n = `'''`), (t += 2));
      continue;
    }
    (r === `"` || r === `'`) && (n = r);
  }
  return { multilineString: n === `"""` || n === `'''` ? n : null, commentIndex: -1 };
}
function Ln(e, t, n) {
  let r = e.match(/^\s*/)?.[0] ?? ``;
  return n === -1 ? `${r}${t}` : `${r}${t}${e.slice(0, n).match(/\s*$/)?.[0] ?? ``}${e.slice(n)}`;
}
function Rn(e) {
  if (!(e instanceof Error)) return !1;
  let t = e.message.trim().toLowerCase();
  return t === `enoent` || t.includes(`no such file`) || t.includes(`not found`);
}
function zn() {
  return (zn = e(() => {
    (on(), fe());
  }))();
}
function Bn(e) {
  let t = (0, Hn.c)(29),
    { hostId: r } = e,
    i = h(c),
    a = ee();
  (D($e), D(Re));
  let [o, l] = (0, Un.useState)(!1),
    [u] = ft(`statsig_default_enable_features`),
    d = u?.features,
    m = n(f.defaultModeRequestUserInput),
    { data: g, isLoading: _ } = xe(Fe, r),
    v = g === void 0 ? [] : g,
    y;
  t[0] === r ? (y = t[1]) : ((y = { hostId: r }), (t[0] = r), (t[1] = y));
  let b = Kt(y),
    x = v.filter(Vn),
    S = d?.[R] === !0,
    C;
  t[2] === b
    ? (C = t[3])
    : ((C = (e) => ({
        key: e.name,
        label: e.displayName ?? e.name,
        description: e.description ?? void 0,
        enabled: e.enabled,
        onChange: (t) => {
          b.mutate(
            { featureName: e.name, enabled: t },
            {
              onSuccess: () => {
                l(!0);
              },
            },
          );
        },
      })),
      (t[2] = b),
      (t[3] = C));
  let w = [
      ...(S && !_
        ? [
            {
              key: R,
              label: a.formatMessage({
                id: `settings.general.experimentalFeatures.requestUserInput.label`,
                defaultMessage: `Request user input`,
                description: `Label for the request user input experimental feature toggle`,
              }),
              description: a.formatMessage({
                id: `settings.general.experimentalFeatures.requestUserInput.description`,
                defaultMessage: `Allow Codex to ask questions outside Plan mode. Changes apply only to new chats`,
                description: `Description for the request user input experimental feature toggle`,
              }),
              enabled: m,
              onChange: (e) => {
                ue(i, f.defaultModeRequestUserInput, e).catch((e) => {
                  (s.warning(`Failed to update request-user-input preference`, {
                    safe: {},
                    sensitive: { error: e },
                  }),
                    i
                      .get(ne)
                      .danger(
                        a.formatMessage({
                          id: `settings.general.experimentalFeatures.requestUserInput.saveError`,
                          defaultMessage: `Could not save Request user input. Try again`,
                          description: `Error shown when the request user input preference cannot be saved`,
                        }),
                        {
                          errorAnalytics: {
                            toastId: `settings.general.experimentalFeatures.requestUserInput.saveError`,
                          },
                        },
                      ));
                });
              },
            },
          ]
        : []),
      ...x.map(C),
    ],
    T = w.length > 0 || !1,
    E = Y,
    O;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Z.jsx)(p, {
        id: `settings.general.experimentalFeatures`,
        defaultMessage: `Experimental features (Beta)`,
        description: `Heading for beta experimental features settings group`,
      })),
      (t[4] = O))
    : (O = t[4]);
  let k;
  t[5] === o
    ? (k = t[6])
    : ((k = o
        ? (0, Z.jsx)(`div`, {
            className: `mb-2 block font-medium text-danger`,
            children: (0, Z.jsx)(p, {
              id: `settings.general.experimentalFeatures.restartNote`,
              defaultMessage: `Restart {appName} to apply experimental feature changes`,
              description: `Notice shown after changing an experimental feature to indicate restart is required`,
              values: { appName: Oe },
            }),
          })
        : void 0),
      (t[5] = o),
      (t[6] = k));
  let A;
  t[7] === k ? (A = t[8]) : ((A = (0, Z.jsx)(Y.Header, { title: O, subtitle: k })), (t[7] = k), (t[8] = A));
  let j = Y,
    te = se,
    M;
  t[9] === !1 ? (M = t[10]) : ((M = null), (t[9] = !1), (t[10] = M));
  let N;
  t[11] === _
    ? (N = t[12])
    : ((N = _
        ? (0, Z.jsx)(rn, {
            children: (0, Z.jsx)(p, {
              id: `settings.general.experimentalFeatures.loading`,
              defaultMessage: `Loading experimental features…`,
              description: `Loading label for beta experimental features settings group`,
            }),
          })
        : null),
      (t[11] = _),
      (t[12] = N));
  let P;
  t[13] !== T || t[14] !== _
    ? ((P =
        !_ && !T
          ? (0, Z.jsx)(Tt, {
              layout: `settings-row`,
              children: (0, Z.jsx)(p, {
                id: `settings.general.experimentalFeatures.empty`,
                defaultMessage: `No beta experimental features available`,
                description: `Empty label for beta experimental features settings group`,
              }),
            })
          : null),
      (t[13] = T),
      (t[14] = _),
      (t[15] = P))
    : (P = t[15]);
  let F = w.map((e) =>
      (0, Z.jsx)(
        pe,
        {
          label: e.label,
          description: e.description,
          control: (0, Z.jsx)(re, {
            checked: e.enabled,
            disabled: b.isPending,
            onChange: e.onChange,
            ariaLabel: a.formatMessage(
              {
                id: `settings.general.experimentalFeatures.toggle`,
                defaultMessage: `Toggle {featureName}`,
                description: `Aria label for toggling a beta experimental feature`,
              },
              { featureName: e.label },
            ),
          }),
        },
        e.key,
      ),
    ),
    I;
  t[16] !== te || t[17] !== P || t[18] !== F || t[19] !== M || t[20] !== N
    ? ((I = (0, Z.jsxs)(te, { children: [M, N, P, F] })),
      (t[16] = te),
      (t[17] = P),
      (t[18] = F),
      (t[19] = M),
      (t[20] = N),
      (t[21] = I))
    : (I = t[21]);
  let L;
  t[22] !== I || t[23] !== j.Content
    ? ((L = (0, Z.jsx)(j.Content, { children: I })), (t[22] = I), (t[23] = j.Content), (t[24] = L))
    : (L = t[24]);
  let z;
  return (
    t[25] !== E || t[26] !== L || t[27] !== A
      ? ((z = (0, Z.jsxs)(E, { children: [A, L] })), (t[25] = E), (t[26] = L), (t[27] = A), (t[28] = z))
      : (z = t[28]),
    z
  );
}
function Vn(e) {
  return dn(e) && e.name !== `default_mode_request_user_input`;
}
var Hn, Un, Z;
function Wn() {
  return (Wn = e(() => {
    ((Hn = he()),
      C(),
      U(),
      _e(),
      (Un = be()),
      B(),
      Ne(),
      Se(),
      St(),
      V(),
      b(),
      Ve(),
      ge(),
      k(),
      fn(),
      Ee(),
      nn(),
      z(),
      g(),
      Bt(),
      T(),
      (Z = G()));
  }))();
}
function Gn(e) {
  let t = (0, Yn.c)(53),
    { hostId: n } = e,
    r = h(c),
    i = ee(),
    a = D(ot),
    s;
  t[0] === n ? (s = t[1]) : ((s = { hostId: n }), (t[0] = n), (t[1] = s));
  let { data: l } = bt(s),
    u,
    d,
    f,
    m,
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
  if (t[2] !== a || t[3] !== n || t[4] !== i || t[5] !== l || t[6] !== r) {
    _ = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[21] !== l?.hasModelSupportingMaxReasoningEffort || t[22] !== l?.hasModelSupportingUltraReasoningEffort
        ? ((e = (e) =>
            e === `max`
              ? l?.hasModelSupportingMaxReasoningEffort === !0
              : l?.hasModelSupportingUltraReasoningEffort === !0),
          (t[21] = l?.hasModelSupportingMaxReasoningEffort),
          (t[22] = l?.hasModelSupportingUltraReasoningEffort),
          (t[23] = e))
        : (e = t[23]);
      let s = Xn.filter(e),
        c = l?.models.some(qn);
      if (l == null || (s.length === 0 && !c)) {
        _ = null;
        break bb0;
      }
      let h = c ? [...vt, `persistent`] : vt,
        ee;
      t[24] === a ? (ee = t[25]) : ((ee = (e) => a.has(e)), (t[24] = a), (t[25] = ee));
      let D = h.length + s.filter(ee).length;
      ((g = Y),
        t[26] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((T = (0, Q.jsx)(Y.Header, {
              title: (0, Q.jsx)(p, {
                id: `settings.agent.modelFeatures.title`,
                defaultMessage: `Model features`,
                description: `Title for model feature settings`,
              }),
            })),
            (t[26] = T))
          : (T = t[26]),
        (m = Y.Content),
        (f = se),
        (d = pe),
        t[27] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((C = (0, Q.jsx)(p, {
              id: `settings.agent.modelFeatures.reasoningEfforts.label`,
              defaultMessage: `Available reasoning efforts`,
              description: `Label for the available reasoning efforts setting`,
            })),
            (w = (0, Q.jsx)(p, {
              id: `settings.agent.modelFeatures.reasoningEfforts.description`,
              defaultMessage: `Choose which reasoning effort levels appear in model controls. Availability varies by model`,
              description: `Description for the available reasoning efforts setting`,
            })),
            (t[27] = C),
            (t[28] = w))
          : ((C = t[27]), (w = t[28])),
        (u = o),
        (v = `end`),
        (y = `menuWide`),
        t[29] === D
          ? (b = t[30])
          : ((b = (0, Q.jsx)(J, {
              children: (0, Q.jsx)(p, {
                id: `settings.agent.modelFeatures.reasoningEfforts.selectedCount`,
                defaultMessage: `{count, plural, one {# selected} other {# selected}}`,
                description: `Number of available reasoning efforts selected`,
                values: { count: D },
              }),
            })),
            (t[29] = D),
            (t[30] = b)),
        (x = h.map(Kn)),
        (S = s.map((e) =>
          (0, Q.jsx)(
            E.CheckboxItem,
            {
              checked: a.has(e),
              onCheckedChange: (t) => {
                Wt(r, { enabled: t, hostId: n, listModelsData: l, reasoningEffort: e }).catch(() => {
                  r.get(ne).danger(
                    i.formatMessage({
                      id: `settings.agent.modelFeatures.reasoningEfforts.saveError`,
                      defaultMessage: `Could not save reasoning effort preferences`,
                      description: `Error shown when saving which reasoning effort levels are available fails`,
                    }),
                    {
                      errorAnalytics: { toastId: `settings.agent.modelFeatures.reasoningEfforts.saveError` },
                    },
                  );
                });
              },
              children: (0, Q.jsx)(tn, { effort: e }),
            },
            e,
          ),
        )));
    }
    ((t[2] = a),
      (t[3] = n),
      (t[4] = i),
      (t[5] = l),
      (t[6] = r),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = m),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y),
      (t[15] = b),
      (t[16] = x),
      (t[17] = S),
      (t[18] = C),
      (t[19] = w),
      (t[20] = T));
  } else
    ((u = t[7]),
      (d = t[8]),
      (f = t[9]),
      (m = t[10]),
      (g = t[11]),
      (_ = t[12]),
      (v = t[13]),
      (y = t[14]),
      (b = t[15]),
      (x = t[16]),
      (S = t[17]),
      (C = t[18]),
      (w = t[19]),
      (T = t[20]));
  if (_ !== Symbol.for(`react.early_return_sentinel`)) return _;
  let O;
  t[31] !== u || t[32] !== v || t[33] !== y || t[34] !== b || t[35] !== x || t[36] !== S
    ? ((O = (0, Q.jsxs)(u, { align: v, contentWidth: y, triggerButton: b, children: [x, S] })),
      (t[31] = u),
      (t[32] = v),
      (t[33] = y),
      (t[34] = b),
      (t[35] = x),
      (t[36] = S),
      (t[37] = O))
    : (O = t[37]);
  let k;
  t[38] !== d || t[39] !== O || t[40] !== C || t[41] !== w
    ? ((k = (0, Q.jsx)(d, { label: C, description: w, control: O })),
      (t[38] = d),
      (t[39] = O),
      (t[40] = C),
      (t[41] = w),
      (t[42] = k))
    : (k = t[42]);
  let A;
  t[43] !== f || t[44] !== k
    ? ((A = (0, Q.jsx)(f, { children: k })), (t[43] = f), (t[44] = k), (t[45] = A))
    : (A = t[45]);
  let j;
  t[46] !== m || t[47] !== A
    ? ((j = (0, Q.jsx)(m, { children: A })), (t[46] = m), (t[47] = A), (t[48] = j))
    : (j = t[48]);
  let te;
  return (
    t[49] !== g || t[50] !== j || t[51] !== T
      ? ((te = (0, Q.jsxs)(g, { children: [T, j] })), (t[49] = g), (t[50] = j), (t[51] = T), (t[52] = te))
      : (te = t[52]),
    te
  );
}
function Kn(e) {
  return (0, Q.jsx)(
    E.CheckboxItem,
    { checked: !0, disabled: !0, children: (0, Q.jsx)(tn, { effort: e }) },
    e,
  );
}
function qn(e) {
  return e.supportedReasoningEfforts.some(Jn);
}
function Jn(e) {
  let { reasoningEffort: t } = e;
  return t === `persistent`;
}
var Yn, Q, Xn;
function Zn() {
  return (Zn = e(() => {
    ((Yn = he()),
      C(),
      B(),
      en(),
      i(),
      V(),
      Nt(),
      Ht(),
      ge(),
      Ee(),
      z(),
      Rt(),
      g(),
      (Q = G()),
      (Xn = [`max`, `ultra`]));
  }))();
}
function Qn(e) {
  let t = (0, gr.c)(27),
    { workConfiguration: n } = e,
    { selectedHostId: r } = Te(),
    i = It(r),
    a = xe(Ge, r),
    o = D(lt),
    s = Et(Cn),
    c = Et(`2106641128`),
    l = Et(`3693343337`),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(mt, { slug: `agent` })), (t[0] = u))
    : (u = t[0]);
  let d;
  t[1] === n
    ? (d = t[2])
    : ((d =
        n == null
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)($.Fragment, {
                  children: (0, $.jsx)(p, {
                    id: `settings.agent.configuration.subtitle.summary.electron`,
                    defaultMessage: `Configure permissions, web access, and agent responses for new chats <a>Learn more</a>`,
                    description: `Summary text for the desktop configuration settings subtitle`,
                    values: { a: $n },
                  }),
                }),
                null,
              ],
            })
          : (0, $.jsx)(p, {
              id: `settings.configuration.subtitle`,
              defaultMessage: `Choose how ChatGPT works on your tasks`,
              description: `Summary for the unified configuration page whose dropdown selects Codex defaults, Work defaults, project configuration, or admin policy`,
            })),
      (t[1] = n),
      (t[2] = d));
  let f;
  t[3] !== o || t[4] !== a || t[5] !== r || t[6] !== n
    ? ((f =
        o || n != null
          ? (0, $.jsxs)(Y, {
              children: [
                (0, $.jsx)(Y.Header, {
                  title:
                    n == null
                      ? (0, $.jsxs)($.Fragment, {
                          children: [
                            (0, $.jsx)($.Fragment, { children: (0, $.jsx)(p, { ...X.agentDefaults }) }),
                            null,
                          ],
                        })
                      : null,
                }),
                (0, $.jsxs)(Y.Content, {
                  children: [
                    (n?.selected ? [] : a).map((e, t) =>
                      (0, $.jsx)(
                        O,
                        {
                          content: (0, $.jsxs)($.Fragment, {
                            children: [
                              (0, $.jsx)(xt, {
                                cwd: null,
                                className: `[&>p]:my-0`,
                                textStyle: { kind: `small` },
                                children: e.summary,
                              }),
                              e.details != null && e.details.length > 0
                                ? (0, $.jsx)(xt, {
                                    cwd: null,
                                    className: `[&>p]:my-0`,
                                    textStyle: { kind: `small` },
                                    children: e.details,
                                  })
                                : null,
                              e.path == null
                                ? null
                                : (0, $.jsx)(p, {
                                    id: `settings.agent.configuration.notice.fileContext`,
                                    defaultMessage: `File: {path}{location}`,
                                    description: `File path and optional location for a config or rules warning shown in settings`,
                                    values: {
                                      path: (0, $.jsx)(`code`, { children: e.path }),
                                      location:
                                        e.range == null
                                          ? ``
                                          : (0, $.jsx)(p, {
                                              id: `settings.agent.configuration.notice.fileLocationSuffix`,
                                              defaultMessage: ` (line {line}, column {column})`,
                                              description: `Suffix showing the line and column for a config warning in settings`,
                                              values: {
                                                line: e.range.start.line,
                                                column: e.range.start.column,
                                              },
                                            }),
                                    },
                                  }),
                            ],
                          }),
                          Icon: Yt,
                          onPrimaryCtaClick: () => {
                            e.path != null &&
                              Mt({ hostId: r, path: e.path, ...(e.range == null ? {} : { range: e.range }) });
                          },
                          primaryCtaText:
                            e.path == null
                              ? void 0
                              : (0, $.jsx)(p, {
                                  id: `settings.agent.configuration.notice.openFile`,
                                  defaultMessage: `Open file`,
                                  description: `Button label to open the file associated with a config or rules warning`,
                                }),
                          role: `alert`,
                          type: `warning`,
                        },
                        `${t}:${e.kind}:${e.summary}:${e.path ?? ``}`,
                      ),
                    ),
                    (0, $.jsx)($.Fragment, { children: (0, $.jsx)(rr, { hostId: r, workConfiguration: n }) }),
                    null,
                  ],
                }),
              ],
            })
          : null),
      (t[3] = o),
      (t[4] = a),
      (t[5] = r),
      (t[6] = n),
      (t[7] = f))
    : (f = t[7]);
  let m;
  t[8] !== l || t[9] !== r || t[10] !== n?.selected
    ? ((m = !n?.selected && l ? (0, $.jsx)(Gn, { hostId: r }) : null),
      (t[8] = l),
      (t[9] = r),
      (t[10] = n?.selected),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] !== c || t[13] !== r || t[14] !== n?.selected
    ? ((h = n?.selected
        ? null
        : (0, $.jsxs)($.Fragment, {
            children: [c ? (0, $.jsx)(`div`, { children: (0, $.jsx)(Bn, { hostId: r }) }) : null, null],
          })),
      (t[12] = c),
      (t[13] = r),
      (t[14] = n?.selected),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] !== s || t[17] !== i || t[18] !== r || t[19] !== n?.selected
    ? ((g = n?.selected
        ? null
        : (0, $.jsx)($.Fragment, {
            children: s && i.kind === `local` ? (0, $.jsx)(er, { hostId: r }) : null,
          })),
      (t[16] = s),
      (t[17] = i),
      (t[18] = r),
      (t[19] = n?.selected),
      (t[20] = g))
    : (g = t[20]);
  let _;
  return (
    t[21] !== d || t[22] !== f || t[23] !== m || t[24] !== h || t[25] !== g
      ? ((_ = (0, $.jsx)($.Fragment, {
          children: (0, $.jsxs)(yt, { title: u, subtitle: d, children: [f, m, h, g] }),
        })),
        (t[21] = d),
        (t[22] = f),
        (t[23] = m),
        (t[24] = h),
        (t[25] = g),
        (t[26] = _))
      : (_ = t[26]),
    _
  );
}
function $n(e) {
  return (0, $.jsx)(`a`, {
    className: `inline-flex text-info`,
    href: Le,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function er(e) {
  let t = (0, gr.c)(2),
    { hostId: n } = e,
    r = v.primaryRuntime;
  if (r == null) return null;
  let i;
  return (
    t[0] === n
      ? (i = t[1])
      : ((i = (0, $.jsx)(tr, { hostId: n, primaryRuntime: r })), (t[0] = n), (t[1] = i)),
    i
  );
}
function tr(e) {
  let n = (0, gr.c)(98),
    { hostId: i, primaryRuntime: a } = e,
    o = h(c),
    s = ee(),
    l = st(),
    { data: u, isLoading: d } = xe(Fe, i),
    f;
  n[0] === i ? (f = n[1]) : ((f = { hostId: i }), (n[0] = i), (n[1] = f));
  let m = Kt(f),
    g;
  n[2] === u ? (g = n[3]) : ((g = u?.find(nr)), (n[2] = u), (n[3] = g));
  let _ = g,
    v = _?.enabled === !0,
    b;
  n[4] !== i || n[5] !== a
    ? ((b = () => a.diagnoseDependencies({ hostId: i })), (n[4] = i), (n[5] = a), (n[6] = b))
    : (b = n[6]);
  let x;
  n[7] === i ? (x = n[8]) : ((x = We(i)), (n[7] = i), (n[8] = x));
  let C;
  n[9] !== b || n[10] !== x
    ? ((C = { queryFn: b, queryKey: x, staleTime: S.FIVE_SECONDS }), (n[9] = b), (n[10] = x), (n[11] = C))
    : (C = n[11]);
  let w = A(C),
    T;
  n[12] !== i || n[13] !== a
    ? ((T = { mutationFn: () => a.diagnoseDependencies({ hostId: i, probeExecutables: !0 }) }),
      (n[12] = i),
      (n[13] = a),
      (n[14] = T))
    : (T = n[14]);
  let E = y(T),
    O;
  n[15] !== a || n[16] !== l
    ? ((O = {
        mutationFn: async (e) => {
          let { release: t } = e;
          return (await Gt(l), a.runUpdateNow({ release: t }));
        },
      }),
      (n[15] = a),
      (n[16] = l),
      (n[17] = O))
    : (O = n[17]);
  let k = y(O),
    j;
  n[18] !== i || n[19] !== a || n[20] !== l
    ? ((j = {
        mutationFn: async (e) => {
          let { release: t } = e;
          return (await Gt(l), a.resetDependencies({ hostId: i, release: t }));
        },
      }),
      (n[18] = i),
      (n[19] = a),
      (n[20] = l),
      (n[21] = j))
    : (j = n[21]);
  let M = y(j),
    N;
  n[22] === i ? (N = n[23]) : ((N = { mutationFn: () => Ze({ hostId: i }) }), (n[22] = i), (n[23] = N));
  let P = y(N),
    F = D(et),
    I = D(je),
    R = F?.hostId === i ? F : null,
    z;
  n[24] === o ? (z = n[25]) : ((z = o.get(ne)), (n[24] = o), (n[25] = z));
  let B = z,
    ie = d || m.isPending || E.isPending || k.isPending || M.isPending || P.isPending,
    ae;
  n[26] === R ? (ae = n[27]) : ((ae = Pt(R)), (n[26] = R), (n[27] = ae));
  let V = ae,
    oe = w.data?.bundleVersion == null || w.data.bundleVersion.length === 0 ? null : w.data.bundleVersion,
    H;
  n[28] !== E || n[29] !== w || n[30] !== s || n[31] !== o || n[32] !== B
    ? ((H = () => {
        let e = Date.now();
        E.mutateAsync()
          .then((t) => {
            if ((ze(o, me, gn({ diagnostics: t, durationMs: Date.now() - e })), w.refetch(), t.installed)) {
              B.success(
                s.formatMessage({
                  id: `settings.agent.dependencies.diagnose.ok`,
                  defaultMessage: `Codex dependencies look healthy`,
                  description: `Toast shown when dependency diagnostics find no problems`,
                }),
              );
              return;
            }
            B.warning(
              s.formatMessage({
                id: `settings.agent.dependencies.diagnose.problem`,
                defaultMessage: `Codex dependencies may need repair. Send /feedback if this keeps happening`,
                description: `Toast shown when dependency diagnostics find problems`,
              }),
            );
          })
          .catch(() => {
            (ze(o, me, _n({ durationMs: Date.now() - e })),
              B.danger(
                s.formatMessage({
                  id: `settings.agent.dependencies.diagnose.failed`,
                  defaultMessage: `Couldn’t diagnose Codex dependencies`,
                  description: `Toast shown when dependency diagnostics fail`,
                }),
                { errorAnalytics: { toastId: `settings.agent.dependencies.diagnose.failed` } },
              ));
          });
      }),
      (n[28] = E),
      (n[29] = w),
      (n[30] = s),
      (n[31] = o),
      (n[32] = B),
      (n[33] = H))
    : (H = n[33]);
  let le = H,
    ue;
  n[34] !== w || n[35] !== s || n[36] !== I || n[37] !== M || n[38] !== o || n[39] !== B
    ? ((ue = () => {
        let e = Date.now();
        M.mutateAsync({ release: I })
          .then((t) => {
            (ze(o, L, vn({ bundleVersion: t.bundleVersion, durationMs: Date.now() - e, status: t.status })),
              w.refetch(),
              B.success(
                s.formatMessage({
                  id: `settings.agent.dependencies.reset.installed`,
                  defaultMessage: `Codex dependencies were reinstalled`,
                  description: `Toast shown when dependency reset and reinstall succeeds`,
                }),
              ));
          })
          .catch((t) => {
            if (Sn(t)) {
              (o.set(et, null),
                w.refetch(),
                ze(o, L, vn({ bundleVersion: null, durationMs: Date.now() - e, status: `canceled` })),
                B.info(
                  s.formatMessage({
                    id: `settings.agent.dependencies.reset.canceled`,
                    defaultMessage: `Codex dependency download canceled`,
                    description: `Toast shown when dependency reset and reinstall is canceled`,
                  }),
                  { id: `install-primary-runtime` },
                ));
              return;
            }
            (ze(o, L, vn({ bundleVersion: null, durationMs: Date.now() - e, status: `failed` })),
              B.danger(
                s.formatMessage({
                  id: `settings.agent.dependencies.reset.failed`,
                  defaultMessage: `Couldn’t reinstall Codex dependencies`,
                  description: `Toast shown when dependency reset fails`,
                }),
                { errorAnalytics: { toastId: `settings.agent.dependencies.reset.failed` } },
              ));
          });
      }),
      (n[34] = w),
      (n[35] = s),
      (n[36] = I),
      (n[37] = M),
      (n[38] = o),
      (n[39] = B),
      (n[40] = ue))
    : (ue = n[40]);
  let de = ue,
    U;
  n[41] !== P || n[42] !== w || n[43] !== s || n[44] !== o || n[45] !== B
    ? ((U = () => {
        P.mutateAsync()
          .then((e) => {
            let { canceled: t } = e;
            if ((o.set(et, null), w.refetch(), !t)) {
              B.info(
                s.formatMessage({
                  id: `settings.agent.dependencies.cancel.noop`,
                  defaultMessage: `No Codex dependency download is running`,
                  description: `Toast shown when canceling a Codex dependency download but no download is running`,
                }),
              );
              return;
            }
            B.info(
              s.formatMessage({
                id: `settings.agent.dependencies.cancel.canceled`,
                defaultMessage: `Canceling Codex dependency download`,
                description: `Toast shown after requesting cancellation of a Codex dependency download`,
              }),
              { id: `install-primary-runtime` },
            );
          })
          .catch(() => {
            B.danger(
              s.formatMessage({
                id: `settings.agent.dependencies.cancel.failed`,
                defaultMessage: `Couldn’t cancel Codex dependency download`,
                description: `Toast shown when canceling a Codex dependency download fails`,
              }),
              { errorAnalytics: { toastId: `settings.agent.dependencies.cancel.failed` } },
            );
          });
      }),
      (n[41] = P),
      (n[42] = w),
      (n[43] = s),
      (n[44] = o),
      (n[45] = B),
      (n[46] = U))
    : (U = n[46]);
  let fe = U,
    W;
  n[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, $.jsx)(Y.Header, { title: (0, $.jsx)(p, { ...X.workspaceDependencies }) })), (n[47] = W))
    : (W = n[47]);
  let he, ge;
  n[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, $.jsx)(p, { ...X.codexDependencies })),
      (ge = (0, $.jsx)(p, {
        id: `settings.agent.dependencies.enabled.description`,
        defaultMessage: `Allow ChatGPT to install and expose bundled Node.js and Python tools`,
        description: `Description for the Codex dependencies enabled toggle`,
      })),
      (n[48] = he),
      (n[49] = ge))
    : ((he = n[48]), (ge = n[49]));
  let _e = d || m.isPending || _ == null,
    ve;
  n[50] !== I || n[51] !== k || n[52] !== m
    ? ((ve = (e) => {
        m.mutate(
          { enabled: e, featureName: te },
          {
            onSuccess: () => {
              e && k.mutate({ release: I });
            },
          },
        );
      }),
      (n[50] = I),
      (n[51] = k),
      (n[52] = m),
      (n[53] = ve))
    : (ve = n[53]);
  let G;
  n[54] === s
    ? (G = n[55])
    : ((G = s.formatMessage({
        id: `settings.agent.dependencies.enabled.ariaLabel`,
        defaultMessage: `Enable Codex dependencies`,
        description: `Aria label for the Codex dependencies enabled toggle`,
      })),
      (n[54] = s),
      (n[55] = G));
  let K;
  n[56] !== v || n[57] !== _e || n[58] !== ve || n[59] !== G
    ? ((K = (0, $.jsx)(pe, {
        label: he,
        description: ge,
        control: (0, $.jsx)(re, { checked: v, disabled: _e, onChange: ve, ariaLabel: G }),
      })),
      (n[56] = v),
      (n[57] = _e),
      (n[58] = ve),
      (n[59] = G),
      (n[60] = K))
    : (K = n[60]);
  let be, Se;
  n[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, $.jsx)(p, { ...X.diagnoseWorkspaceDependencies })),
      (Se = (0, $.jsx)(p, {
        id: `settings.agent.dependencies.diagnose.description`,
        defaultMessage: `Checks the current bundle and records diagnostic logs`,
        description: `Description for dependency diagnostics in settings`,
      })),
      (n[61] = be),
      (n[62] = Se))
    : ((be = n[61]), (Se = n[62]));
  let Ce, we;
  n[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, $.jsx)(ce, { className: `icon-2xs` })),
      (we = (0, $.jsx)(p, {
        id: `settings.agent.dependencies.diagnose.button`,
        defaultMessage: `Diagnose`,
        description: `Button label for dependency diagnostics`,
      })),
      (n[63] = Ce),
      (n[64] = we))
    : ((Ce = n[63]), (we = n[64]));
  let Te;
  n[65] !== E.isPending || n[66] !== le || n[67] !== M.isPending
    ? ((Te = (0, $.jsx)(pe, {
        label: be,
        description: Se,
        control: (0, $.jsxs)(t, {
          color: `secondary`,
          size: `toolbar`,
          loading: E.isPending,
          disabled: M.isPending,
          onClick: le,
          children: [Ce, we],
        }),
      })),
      (n[65] = E.isPending),
      (n[66] = le),
      (n[67] = M.isPending),
      (n[68] = Te))
    : (Te = n[68]);
  let Ee, De;
  n[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, $.jsx)(p, { ...X.resetWorkspaceDependencies })),
      (De = (0, $.jsx)(p, {
        id: `settings.agent.dependencies.reset.description`,
        defaultMessage: `Downloads a fresh bundle, installs it, and reloads tools`,
        description: `Description for resetting and reinstalling dependencies in settings`,
      })),
      (n[69] = Ee),
      (n[70] = De))
    : ((Ee = n[69]), (De = n[70]));
  let Oe = V ? P.isPending : M.isPending,
    ke = !v || (V ? P.isPending : ie),
    Ae = V ? fe : de,
    Me;
  n[71] === V
    ? (Me = n[72])
    : ((Me = V
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(ye, { className: `icon-2xs` }),
              (0, $.jsx)(p, {
                id: `settings.agent.dependencies.cancel.button`,
                defaultMessage: `Cancel download`,
                description: `Button label for canceling dependency download`,
              }),
            ],
          })
        : (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(r, { className: `icon-2xs` }),
              (0, $.jsx)(p, {
                id: `settings.agent.dependencies.reset.button`,
                defaultMessage: `Reinstall`,
                description: `Button label for resetting and reinstalling dependencies`,
              }),
            ],
          })),
      (n[71] = V),
      (n[72] = Me));
  let Ne;
  n[73] !== Oe || n[74] !== ke || n[75] !== Ae || n[76] !== Me
    ? ((Ne = (0, $.jsx)(pe, {
        label: Ee,
        description: De,
        control: (0, $.jsx)(t, {
          color: `danger`,
          size: `toolbar`,
          loading: Oe,
          disabled: ke,
          onClick: Ae,
          children: Me,
        }),
      })),
      (n[73] = Oe),
      (n[74] = ke),
      (n[75] = Ae),
      (n[76] = Me),
      (n[77] = Ne))
    : (Ne = n[77]);
  let Pe;
  n[78] !== K || n[79] !== Te || n[80] !== Ne
    ? ((Pe = (0, $.jsx)(Y.Content, { children: (0, $.jsxs)(se, { children: [K, Te, Ne] }) })),
      (n[78] = K),
      (n[79] = Te),
      (n[80] = Ne),
      (n[81] = Pe))
    : (Pe = n[81]);
  let Ie;
  n[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (0, $.jsx)(p, { ...X.currentDependencyVersion })), (n[82] = Ie))
    : (Ie = n[82]);
  let Le;
  n[83] !== oe || n[84] !== w.isLoading || n[85] !== V || n[86] !== R
    ? ((Le = V
        ? En(R, Tn(R))
        : w.isLoading
          ? (0, $.jsx)(p, {
              id: `settings.agent.dependencies.bundleVersion.loading`,
              defaultMessage: `Checking…`,
              description: `Status while loading the current dependency bundle version`,
            })
          : (oe ??
            (0, $.jsx)(p, {
              id: `settings.agent.dependencies.bundleVersion.notInstalled`,
              defaultMessage: `Not installed`,
              description: `Status when dependency bundle version is unavailable`,
            }))),
      (n[83] = oe),
      (n[84] = w.isLoading),
      (n[85] = V),
      (n[86] = R),
      (n[87] = Le))
    : (Le = n[87]);
  let q;
  n[88] === Le
    ? (q = n[89])
    : ((q = (0, $.jsxs)(`span`, {
        className: `inline-flex flex-wrap gap-x-1`,
        children: [Ie, (0, $.jsx)(`span`, { children: Le })],
      })),
      (n[88] = Le),
      (n[89] = q));
  let Re;
  n[90] === w.data?.problems.length
    ? (Re = n[91])
    : ((Re = w.data?.problems.length
        ? (0, $.jsx)(`span`, {
            children: (0, $.jsx)(p, {
              id: `settings.agent.dependencies.bundleVersion.problemDescription`,
              defaultMessage: `Run diagnostics or reinstall if tool calls fail`,
              description: `Description shown when dependency diagnostics have problems`,
            }),
          })
        : null),
      (n[90] = w.data?.problems.length),
      (n[91] = Re));
  let J;
  n[92] !== q || n[93] !== Re
    ? ((J = (0, $.jsxs)(Y.Footer, { className: `flex flex-col gap-1`, children: [q, Re] })),
      (n[92] = q),
      (n[93] = Re),
      (n[94] = J))
    : (J = n[94]);
  let Be;
  return (
    n[95] !== Pe || n[96] !== J
      ? ((Be = (0, $.jsxs)(Y, { children: [W, Pe, J] })), (n[95] = Pe), (n[96] = J), (n[97] = Be))
      : (Be = n[97]),
    Be
  );
}
function nr(e) {
  return e.name === te;
}
function rr(e) {
  let n = (0, gr.c)(22),
    { hostId: r, workConfiguration: i } = e,
    a = h(c),
    s = ee(),
    l = ve(),
    [u, d] = (0, _r.useState)(null),
    f;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = []), (n[0] = f)) : (f = n[0]);
  let [m, g] = (0, _r.useState)(f),
    _;
  n[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = {}), (n[1] = _)) : (_ = n[1]);
  let [v, y] = (0, _r.useState)(_),
    b = D(dt),
    x;
  n[2] === l.state ? (x = n[3]) : ((x = sn(l.state)), (n[2] = l.state), (n[3] = x));
  let S = x,
    C = S.hasValue ? (r === `local` ? S.workspaceRoot : null) : r === `local` ? b : null,
    w = tt(r),
    T = xe(Dt, r),
    k = r === `local` ? `fallback-to-workspace` : `preserve-null`,
    A;
  n[4] !== r || n[5] !== k
    ? ((A = { hostId: r, cwdMode: k }), (n[4] = r), (n[5] = k), (n[6] = A))
    : (A = n[6]);
  let { data: j, isPending: te } = it(C, A),
    M;
  n[7] === r ? (M = n[8]) : ((M = { hostId: r }), (n[7] = r), (n[8] = M));
  let { data: N, isPending: P } = xe(Ke, M),
    F = j?.config ?? null,
    I = j?.layers ?? null,
    L = j?.origins ?? null,
    R = N?.requirements ?? null,
    ne = sr(I, s),
    z = Qe(I),
    B = null,
    ie = null;
  for (let e of I ?? []) kt(e.name) ? (B = e) : e.name.type === `enterpriseManaged` && (ie = e);
  B ??= ie;
  let ae = w == null ? null : `${w}/config.toml`,
    V = z == null ? ae : ht(z.name),
    oe = {
      key: `user`,
      kind: `user`,
      label:
        i == null
          ? s.formatMessage(X.userConfig)
          : s.formatMessage({
              id: `settings.configuration.codexDefaults`,
              defaultMessage: `Codex`,
              description: `User configuration for Codex on the selected machine in the configuration scope dropdown`,
            }),
      tooltipText: V ?? `~/.codex/config.toml`,
      filePath: V,
      expectedVersion: z?.version ?? null,
      workspaceRoot: null,
      layer: z,
    },
    ce =
      B == null
        ? null
        : {
            key: `managed`,
            kind: `managed`,
            label:
              i == null
                ? s.formatMessage(X.adminConfig)
                : s.formatMessage({
                    id: `settings.configuration.admin`,
                    defaultMessage: `Admin`,
                    description: `Organization-managed configuration in the configuration scope dropdown`,
                  }),
            tooltipText: s.formatMessage({
              id: `settings.agent.configuration.scope.managedDescription`,
              defaultMessage: `Managed by admin policy`,
              description: `Tooltip text for the admin config scope in configuration settings`,
            }),
            filePath: ht(B.name),
            expectedVersion: B.version,
            workspaceRoot: null,
            layer: B,
          },
    H = [...ne, oe, ...(ce == null ? [] : [ce])],
    ue = ne.length > 0,
    de = H[0]?.key ?? null;
  i == null ? C != null && (de = `project:${C}`) : (de = `user`);
  let U = H.find((e) => e.key === u) ?? H.find((e) => e.key === de) ?? H[0] ?? null,
    { data: fe } = xe(Lt, {
      cwd: U?.workspaceRoot == null ? (C == null ? null : le(C)) : le(U.workspaceRoot),
      hostId: r,
    }),
    W = ur(U?.layer?.config ?? null),
    me = hr(F?.approval_policy ?? null) ?? `on-request`,
    he = F?.sandbox_mode ?? `read-only`,
    ge = W.sandboxMode == null && he === `workspace-write`,
    _e = W.sandboxMode === `workspace-write` || ge,
    G = W.approvalPolicy ?? me,
    ye = W.sandboxMode ?? he,
    be = pr(G),
    Se = mr(ye),
    we = W.networkAccess ?? F?.sandbox_workspace_write?.network_access ?? !1,
    Te = W.webSearch ?? F?.web_search ?? Ce(ye),
    Ee = W.modelVerbosity ?? F?.model_verbosity ?? null,
    De = W.reasoningSummary ?? F?.model_reasoning_summary ?? `auto`,
    Oe = L == null ? null : Ft(L, `approval_policy`, [`approvalPolicy`]),
    ke = L == null ? null : Ft(L, `sandbox_mode`),
    Ae = L == null ? null : Ft(L, `sandbox_workspace_write`, [`network_access`]),
    je = L == null ? null : Ft(L, `web_search`),
    Me = L == null ? null : Ft(L, `model_verbosity`),
    Ne = L == null ? null : Ft(L, `model_reasoning_summary`),
    Pe = U?.kind === `project` ? (U.layer?.disabledReason ?? null) : null,
    Fe = dr(U, s),
    Ie;
  n[9] === R
    ? (Ie = n[10])
    : ((Ie = (e) => R?.allowedApprovalPolicies == null || R.allowedApprovalPolicies.includes(e.value)),
      (n[9] = R),
      (n[10] = Ie));
  let Le = vr.filter(Ie),
    q;
  n[11] === R
    ? (q = n[12])
    : ((q = (e) => R?.allowedSandboxModes == null || R.allowedSandboxModes.includes(e.value)),
      (n[11] = R),
      (n[12] = q));
  let Re = br.filter(q),
    ze;
  if (n[13] !== T || n[14] !== R?.allowedWebSearchModes) {
    let e = rt({ allowedModes: R?.allowedWebSearchModes ?? null, appServerVersion: T });
    ((ze = xr.filter((t) => e.includes(t.value))),
      (n[13] = T),
      (n[14] = R?.allowedWebSearchModes),
      (n[15] = ze));
  } else ze = n[15];
  let Be = ze,
    Ve = async function (e, t, n) {
      if (U?.filePath == null || m.includes(e)) return;
      let i = U.filePath;
      (g((t) => [...t, e]),
        y((t) => ({ ...t, [e]: void 0 })),
        await (async () => {
          try {
            await a
              .get(Ot, r)
              .mutateAsync({
                cwd: r === `local` ? (C ?? b) : null,
                expectedVersion: U.expectedVersion,
                filePath: i,
                keyPath: t,
                kind: U.kind,
                projectWrite:
                  U.kind === `project` ? () => kn({ filePath: i, hostId: r, keyPath: t, value: n }) : void 0,
                value: n,
              });
          } catch (t) {
            let n = t,
              r =
                n instanceof Error &&
                n.message === `The sandbox_workspace_write inline table cannot be updated safely.`
                  ? s.formatMessage({
                      id: `settings.agent.configuration.inlineSandboxWriteError`,
                      defaultMessage: `This project uses an inline sandbox table. Edit config.toml directly to change network access`,
                      description: `Error shown when a project uses an inline sandbox table that cannot be edited safely`,
                    })
                  : s.formatMessage({
                      id: `settings.agent.configuration.writeError`,
                      defaultMessage: `Couldn't update this setting. Check config.toml for errors and try again`,
                      description: `Error shown when a configuration setting cannot be saved`,
                    });
            y((t) => ({ ...t, [e]: r }));
          }
        })().finally(() => {
          g((t) => t.filter((t) => t !== e));
        }));
    },
    He = te || P,
    Ue = fr({
      intl: s,
      scopeLockReason: Fe,
      origin: Oe,
      selectedScope: U,
      hasOptions: Le.length > 0,
      restrictedMessage: s.formatMessage({
        id: `settings.agent.configuration.approval.restricted`,
        defaultMessage: `Approval policy is restricted by this installation.`,
        description: `Restriction message for approval policy in configuration settings`,
      }),
    }),
    We = fr({
      intl: s,
      scopeLockReason: Fe,
      origin: ke,
      selectedScope: U,
      hasOptions: Re.length > 0,
      restrictedMessage: s.formatMessage({
        id: `settings.agent.configuration.sandbox.restricted`,
        defaultMessage: `Sandbox mode is restricted by this installation.`,
        description: `Restriction message for sandbox mode in configuration settings`,
      }),
    }),
    Ge = fr({
      intl: s,
      scopeLockReason: Fe,
      origin: Ae,
      selectedScope: U,
      hasOptions: !0,
      restrictedMessage: ``,
    }),
    Je = fr({
      intl: s,
      scopeLockReason: Fe,
      origin: je,
      selectedScope: U,
      hasOptions: Be.length > 0,
      restrictedMessage: s.formatMessage({
        id: `settings.agent.configuration.webSearch.restricted`,
        defaultMessage: `Web search is restricted by this installation`,
        description: `Restriction message for web search in configuration settings`,
      }),
    }),
    Ye = fr({
      intl: s,
      scopeLockReason: Fe,
      origin: Me,
      selectedScope: U,
      hasOptions: !0,
      restrictedMessage: ``,
    }),
    Xe = fr({
      intl: s,
      scopeLockReason: Fe,
      origin: Ne,
      selectedScope: U,
      hasOptions: !0,
      restrictedMessage: ``,
    }),
    Ze = He || Pe != null,
    $e = Ze || m.includes(`approval`) || Ue != null,
    et = Ze || m.includes(`sandbox`) || We != null,
    nt;
  n[16] === i
    ? (nt = n[17])
    : ((nt = (e) => {
        (d(e), i?.onSelectCodex(), y({}));
      }),
      (n[16] = i),
      (n[17] = nt));
  let at = nt,
    ot;
  n[18] === i
    ? (ot = n[19])
    : ((ot =
        i == null ? (0, $.jsx)(E.SectionLabel, { children: (0, $.jsx)(p, { ...X.globalConfig }) }) : null),
      (n[18] = i),
      (n[19] = ot));
  let st;
  return (
    n[20] === i
      ? (st = n[21])
      : ((st =
          i == null
            ? null
            : (0, $.jsx)(E.Item, {
                rightIconAsset: i.selected ? K : void 0,
                onSelect: i.onSelect,
                children: i.label,
              })),
        (n[20] = i),
        (n[21] = st)),
    (0, $.jsxs)(Y, {
      children: [
        (0, $.jsx)(Y.Header, {
          title: (0, $.jsxs)(o, {
            align: `start`,
            contentWidth: `menuWide`,
            disabled: H.length === 0,
            triggerButton: (0, $.jsx)(J, {
              disabled: H.length === 0,
              contentClassName: `truncate`,
              children: i?.selected
                ? i.label
                : (U?.label ??
                  s.formatMessage({
                    id: `settings.agent.configuration.scope.loading`,
                    defaultMessage: `Loading…`,
                    description: `Fallback label while config scope options are loading`,
                  })),
            }),
            children: [
              ue
                ? (0, $.jsxs)($.Fragment, {
                    children: [
                      (0, $.jsxs)(E.Section, {
                        children: [
                          (0, $.jsx)(E.SectionLabel, { children: (0, $.jsx)(p, { ...X.projectConfig }) }),
                          ne.map((e) =>
                            (0, $.jsx)(
                              ar,
                              {
                                scopeOption: e,
                                selected: !i?.selected && U?.key === e.key,
                                onSelect: () => {
                                  at(e.key);
                                },
                              },
                              e.key,
                            ),
                          ),
                        ],
                      }),
                      (0, $.jsx)(E.Separator, {}),
                    ],
                  })
                : null,
              (0, $.jsxs)(E.Section, {
                children: [
                  ot,
                  (0, $.jsx)(ar, {
                    scopeOption: oe,
                    selected: !i?.selected && U?.key === oe.key,
                    onSelect: () => {
                      at(oe.key);
                    },
                  }),
                  st,
                  ce == null
                    ? null
                    : (0, $.jsx)(ar, {
                        scopeOption: ce,
                        selected: !i?.selected && U?.key === ce.key,
                        onSelect: () => {
                          at(ce.key);
                        },
                      }),
                ],
              }),
            ],
          }),
          actions: i?.selected
            ? null
            : (0, $.jsxs)(t, {
                color: `ghost`,
                size: `toolbar`,
                disabled: U?.filePath == null,
                onClick: () => {
                  U?.filePath != null &&
                    Ct({
                      path: U.filePath,
                      cwd: U.workspaceRoot == null ? null : le(U.workspaceRoot),
                      hostId: r,
                      target: fe?.preferredTarget,
                    });
                },
                children: [
                  (0, $.jsx)(p, {
                    id: `settings.agent.configuration.scope.open`,
                    defaultMessage: `Open config.toml`,
                    description: `Button label to open the selected config file`,
                  }),
                  (0, $.jsx)(qe, { className: `icon-2xs` }),
                ],
              }),
        }),
        i?.selected
          ? i.content
          : (0, $.jsxs)(Y.Content, {
              children: [
                Pe == null ? null : (0, $.jsx)(O, { content: Pe, Icon: Jt, type: `warning` }),
                (0, $.jsxs)(se, {
                  children: [
                    (0, $.jsx)(pe, {
                      label: (0, $.jsx)(p, { ...X.approvalPolicy }),
                      description: (0, $.jsx)(or, {
                        error: v.approval,
                        lockReason: Ue,
                        children: (0, $.jsx)(p, {
                          id: `settings.agent.configuration.approval.definition`,
                          defaultMessage: `Choose when ChatGPT asks for approval`,
                          description: `Definition for approval policy in configuration settings`,
                        }),
                      }),
                      control: (0, $.jsx)(o, {
                        align: `end`,
                        contentWidth: `panelWide`,
                        disabled: $e,
                        triggerButton: (0, $.jsx)(J, {
                          disabled: $e,
                          contentClassName: `truncate`,
                          children: be == null ? G : s.formatMessage(be.label),
                        }),
                        children: Le.map((e) =>
                          (0, $.jsx)(
                            E.Item,
                            {
                              rightIconAsset: e.value === G ? K : void 0,
                              subTextAllowWrap: !0,
                              onSelect: () => {
                                Ve(`approval`, `approval_policy`, e.value);
                              },
                              SubText: (0, $.jsx)(`div`, {
                                className: `pt-1 text-sm text-secondary`,
                                children: e.description,
                              }),
                              children: (0, $.jsx)(`span`, {
                                className: `text-sm`,
                                children: s.formatMessage(e.label),
                              }),
                            },
                            e.value,
                          ),
                        ),
                      }),
                    }),
                    (0, $.jsx)(pe, {
                      label: (0, $.jsx)(p, { ...X.sandboxSettings }),
                      description: (0, $.jsx)(or, {
                        error: v.sandbox,
                        lockReason: We,
                        children: (0, $.jsx)(p, {
                          id: `settings.agent.configuration.sandbox.definition`,
                          defaultMessage: `Choose how much ChatGPT can do when running commands`,
                          description: `Explains that the sandbox setting chooses the file-access permissions used for commands run by ChatGPT`,
                        }),
                      }),
                      control: (0, $.jsx)(o, {
                        align: `end`,
                        contentWidth: `panelWide`,
                        disabled: et,
                        triggerButton: (0, $.jsx)(J, {
                          disabled: et,
                          contentClassName: `truncate`,
                          children: Se == null ? ye : s.formatMessage(Se.label),
                        }),
                        children: Re.map((e) =>
                          (0, $.jsx)(
                            E.Item,
                            {
                              rightIconAsset: e.value === ye ? K : void 0,
                              subTextAllowWrap: !0,
                              onSelect: () => {
                                Ve(`sandbox`, `sandbox_mode`, e.value);
                              },
                              SubText: (0, $.jsx)(`div`, {
                                className: `pt-1 text-sm text-secondary`,
                                children: e.description,
                              }),
                              children: (0, $.jsx)(`span`, {
                                className: `text-sm`,
                                children: s.formatMessage(e.label),
                              }),
                            },
                            e.value,
                          ),
                        ),
                      }),
                    }),
                    _e
                      ? (0, $.jsx)(pe, {
                          label: (0, $.jsx)(p, { ...X.networkAccess }),
                          description: (0, $.jsx)(or, {
                            error: v.network,
                            lockReason: Ge,
                            children: (0, $.jsx)(p, {
                              id: `settings.agent.configuration.network.definition`,
                              defaultMessage: `Allow network access when the sandbox is set to workspace write`,
                              description: `Explains that this toggle controls network access specifically while the command sandbox is in workspace-write mode`,
                            }),
                          }),
                          control: (0, $.jsx)(re, {
                            checked: we,
                            disabled: Ze || m.includes(`network`) || Ge != null,
                            onChange: (e) => {
                              Ve(`network`, `sandbox_workspace_write.network_access`, e);
                            },
                            ariaLabel: s.formatMessage({
                              id: `settings.agent.configuration.network.ariaLabel`,
                              defaultMessage: `Allow network access`,
                              description: `Accessible label for toggling network access for commands run in the workspace-write sandbox`,
                            }),
                          }),
                        })
                      : null,
                    (0, $.jsx)(ir, {
                      label: X.webSearch,
                      description: (0, $.jsx)(p, {
                        id: `settings.agent.configuration.webSearch.definition`,
                        defaultMessage: `Choose how ChatGPT accesses the web`,
                        description: `Definition for web search in configuration settings`,
                      }),
                      error: v.webSearch,
                      lockReason: Je,
                      options: Be,
                      value: Te,
                      disabled: Ze || m.includes(`webSearch`),
                      onSelect: (e) => {
                        Ve(`webSearch`, `web_search`, e);
                      },
                    }),
                    (0, $.jsx)(ir, {
                      label: X.modelVerbosity,
                      description: (0, $.jsx)(p, {
                        id: `settings.agent.configuration.modelVerbosity.definition`,
                        defaultMessage: `Choose how much detail ChatGPT includes in responses`,
                        description: `Definition for model verbosity in configuration settings`,
                      }),
                      error: v.modelVerbosity,
                      lockReason: Ye,
                      options: Sr,
                      value: Ee,
                      disabled: Ze || m.includes(`modelVerbosity`),
                      onSelect: (e) => {
                        Ve(`modelVerbosity`, `model_verbosity`, e);
                      },
                    }),
                    (0, $.jsx)(ir, {
                      label: X.reasoningSummary,
                      description: (0, $.jsx)(p, {
                        id: `settings.agent.configuration.reasoningSummary.definition`,
                        defaultMessage: `Choose how ChatGPT summarizes its reasoning`,
                        description: `Definition for reasoning summary in configuration settings`,
                      }),
                      error: v.reasoningSummary,
                      lockReason: Xe,
                      options: Cr,
                      value: De,
                      disabled: Ze || m.includes(`reasoningSummary`),
                      onSelect: (e) => {
                        Ve(`reasoningSummary`, `model_reasoning_summary`, e);
                      },
                    }),
                    r === `local` ? null : (0, $.jsx)(un, { hostId: r }),
                  ],
                }),
              ],
            }),
      ],
    })
  );
}
function ir(e) {
  let t = (0, gr.c)(36),
    { description: n, disabled: r, error: i, label: a, lockReason: s, onSelect: c, options: l, value: u } = e,
    d = ee(),
    f;
  if (t[0] !== l || t[1] !== u) {
    let e;
    (t[3] === u ? (e = t[4]) : ((e = (e) => e.value === u), (t[3] = u), (t[4] = e)),
      (f = l.find(e)),
      (t[0] = l),
      (t[1] = u),
      (t[2] = f));
  } else f = t[2];
  let m = f,
    h = r || s != null,
    g;
  t[5] === a ? (g = t[6]) : ((g = (0, $.jsx)(p, { ...a })), (t[5] = a), (t[6] = g));
  let _;
  t[7] !== n || t[8] !== i || t[9] !== s
    ? ((_ = (0, $.jsx)(or, { error: i, lockReason: s, children: n })),
      (t[7] = n),
      (t[8] = i),
      (t[9] = s),
      (t[10] = _))
    : (_ = t[10]);
  let v;
  t[11] !== d || t[12] !== a
    ? ((v = d.formatMessage(a)), (t[11] = d), (t[12] = a), (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] !== m || t[15] !== u
    ? ((y = m == null ? u : (0, $.jsx)(p, { ...m.label })), (t[14] = m), (t[15] = u), (t[16] = y))
    : (y = t[16]);
  let b;
  t[17] !== h || t[18] !== v || t[19] !== y
    ? ((b = (0, $.jsx)(J, { disabled: h, contentClassName: `truncate`, "aria-label": v, children: y })),
      (t[17] = h),
      (t[18] = v),
      (t[19] = y),
      (t[20] = b))
    : (b = t[20]);
  let x;
  if (t[21] !== c || t[22] !== l || t[23] !== u) {
    let e;
    (t[25] !== c || t[26] !== u
      ? ((e = (e) =>
          (0, $.jsx)(
            E.Item,
            {
              rightIconAsset: e.value === u ? K : void 0,
              subTextAllowWrap: !0,
              onSelect: () => {
                c(e.value);
              },
              SubText:
                e.description == null
                  ? void 0
                  : (0, $.jsx)(`div`, {
                      className: `pt-1 text-sm text-secondary`,
                      children: (0, $.jsx)(p, { ...e.description }),
                    }),
              children: (0, $.jsx)(`span`, { className: `text-sm`, children: (0, $.jsx)(p, { ...e.label }) }),
            },
            e.value ?? `model-default`,
          )),
        (t[25] = c),
        (t[26] = u),
        (t[27] = e))
      : (e = t[27]),
      (x = l.map(e)),
      (t[21] = c),
      (t[22] = l),
      (t[23] = u),
      (t[24] = x));
  } else x = t[24];
  let S;
  t[28] !== h || t[29] !== b || t[30] !== x
    ? ((S = (0, $.jsx)(o, {
        align: `end`,
        contentWidth: `panelWide`,
        disabled: h,
        triggerButton: b,
        children: x,
      })),
      (t[28] = h),
      (t[29] = b),
      (t[30] = x),
      (t[31] = S))
    : (S = t[31]);
  let C;
  return (
    t[32] !== g || t[33] !== _ || t[34] !== S
      ? ((C = (0, $.jsx)(pe, { label: g, description: _, control: S })),
        (t[32] = g),
        (t[33] = _),
        (t[34] = S),
        (t[35] = C))
      : (C = t[35]),
    C
  );
}
function ar(e) {
  let t = (0, gr.c)(7),
    { onSelect: n, scopeOption: r, selected: i } = e,
    a = i ? K : void 0,
    o;
  t[0] === r.label
    ? (o = t[1])
    : ((o = (0, $.jsx)(`span`, { className: `truncate text-sm`, children: r.label })),
      (t[0] = r.label),
      (t[1] = o));
  let s;
  return (
    t[2] !== n || t[3] !== r.tooltipText || t[4] !== a || t[5] !== o
      ? ((s = (0, $.jsx)(E.Item, {
          rightIconAsset: a,
          tooltipText: r.tooltipText,
          tooltipSide: `right`,
          onSelect: n,
          children: o,
        })),
        (t[2] = n),
        (t[3] = r.tooltipText),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function or(e) {
  let t = (0, gr.c)(10),
    { children: n, error: r, lockReason: i } = e,
    o;
  t[0] === n ? (o = t[1]) : ((o = (0, $.jsx)(`div`, { children: n })), (t[0] = n), (t[1] = o));
  let s;
  t[2] === i
    ? (s = t[3])
    : ((s =
        i == null
          ? null
          : (0, $.jsxs)(`div`, {
              className: `inline-flex items-center gap-1 text-sm text-warning`,
              children: [
                (0, $.jsx)(l, { "aria-hidden": !1, legacyIcon: $t, asset16: a, legacyClassName: `icon-2xs` }),
                (0, $.jsx)(`span`, { children: i }),
              ],
            })),
      (t[2] = i),
      (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = r == null ? null : (0, $.jsx)(`div`, { className: `text-sm text-danger`, children: r })),
      (t[4] = r),
      (t[5] = c));
  let u;
  return (
    t[6] !== o || t[7] !== s || t[8] !== c
      ? ((u = (0, $.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [o, s, c] })),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function sr(e, t) {
  if (e == null) return [];
  let n = [];
  for (let r of e) {
    if (r.name.type !== `project`) continue;
    let e = cr(r.name.dotCodexFolder);
    n.push({
      key: `project:${e ?? r.name.dotCodexFolder}`,
      kind: `project`,
      label: t.formatMessage(
        {
          id: `settings.agent.configuration.scope.project`,
          defaultMessage: `{repoName}`,
          description: `Label for a project config scope in configuration settings`,
        },
        { repoName: lr(e ?? r.name.dotCodexFolder) },
      ),
      tooltipText: ht(r.name) ?? r.name.dotCodexFolder,
      filePath: ht(r.name),
      expectedVersion: r.version,
      workspaceRoot: e,
      layer: r,
    });
  }
  return n;
}
function cr(e) {
  return e.endsWith(`/.codex`) || e.endsWith(`\\.codex`) ? e.slice(0, -7) : null;
}
function lr(e) {
  return e.split(/[/\\]/).at(-1) || e;
}
function ur(e) {
  if (typeof e != `object` || !e || Array.isArray(e))
    return {
      approvalPolicy: null,
      sandboxMode: null,
      networkAccess: null,
      webSearch: null,
      modelVerbosity: null,
      reasoningSummary: null,
    };
  let t = e.approval_policy,
    n = e.sandbox_mode,
    r = e.sandbox_workspace_write,
    i = e.web_search,
    a = e.model_verbosity,
    o = e.model_reasoning_summary;
  return {
    approvalPolicy: hr(t ?? null),
    sandboxMode: n === `read-only` || n === `workspace-write` || n === `danger-full-access` ? n : null,
    networkAccess:
      typeof r == `object` && r && !Array.isArray(r) && typeof r.network_access == `boolean`
        ? r.network_access
        : null,
    webSearch: i === `disabled` || i === `cached` || i === `indexed` || i === `live` ? i : null,
    modelVerbosity: a === `low` || a === `medium` || a === `high` ? a : null,
    reasoningSummary: o === `auto` || o === `concise` || o === `detailed` || o === `none` ? o : null,
  };
}
function dr(e, t) {
  return e == null
    ? t.formatMessage({
        id: `settings.agent.configuration.scope.unavailable`,
        defaultMessage: `Config scope unavailable.`,
        description: `Message shown when no config scope is available in configuration settings`,
      })
    : e.kind === `managed` || e.filePath == null
      ? t.formatMessage({
          id: `settings.agent.configuration.scope.readOnly`,
          defaultMessage: `This config source cannot be edited here.`,
          description: `Message shown when the selected config scope cannot be edited`,
        })
      : null;
}
function fr({
  intl: e,
  scopeLockReason: t,
  origin: n,
  selectedScope: r,
  hasOptions: i,
  restrictedMessage: a,
}) {
  return (
    t ??
    (i
      ? r?.kind !== `managed` && n != null && kt(n.name)
        ? e.formatMessage({
            id: `settings.agent.configuration.control.managed`,
            defaultMessage: `This value is managed by admin policy.`,
            description: `Message shown when a configuration control is managed by admin policy`,
          })
        : null
      : a)
  );
}
function pr(e) {
  return vr.find((t) => t.value === e) ?? yr.find((t) => t.value === e) ?? null;
}
function mr(e) {
  return br.find((t) => t.value === e) ?? null;
}
function hr(e) {
  return e === `untrusted` || e === `on-request` || e === `never` || e === `on-failure` ? e : null;
}
var gr, _r, $, vr, yr, br, xr, Sr, Cr;
function wr() {
  return (wr = e(() => {
    ((gr = he()),
      w(),
      N(),
      ie(),
      m(),
      j(),
      C(),
      U(),
      zt(),
      (_r = be()),
      B(),
      M(),
      Ye(),
      Vt(),
      gt(),
      xn(),
      wn(),
      nt(),
      Pe(),
      On(),
      Je(),
      we(),
      d(),
      W(),
      i(),
      ae(),
      V(),
      b(),
      jt(),
      ut(),
      Me(),
      Xt(),
      Ae(),
      I(),
      Qt(),
      _(),
      Zt(),
      P(),
      _t(),
      Xe(),
      ke(),
      Ve(),
      H(),
      ge(),
      wt(),
      at(),
      qt(),
      zn(),
      Wn(),
      Zn(),
      ln(),
      Ee(),
      Ue(),
      cn(),
      z(),
      Rt(),
      g(),
      At(),
      Be(),
      pt(),
      ct(),
      u(),
      ($ = G()),
      (vr = [
        { value: `on-request`, label: X.onRequest, description: `Ask when escalation is requested` },
        {
          value: `never`,
          label: X.never,
          description: `Blocked actions fail instead of requesting approval`,
        },
      ]),
      (yr = [
        { value: `on-failure`, label: X.onFailure },
        { value: `untrusted`, label: X.untrusted },
      ]),
      (br = [
        { value: `read-only`, label: X.readOnly, description: `Can read files, but cannot edit them` },
        {
          value: `workspace-write`,
          label: X.workspaceWrite,
          description: `Can edit files, but only in this workspace`,
        },
        {
          value: `danger-full-access`,
          label: X.fullAccess,
          description: `Can edit files outside this workspace`,
        },
      ]),
      (xr = [
        { value: `disabled`, label: X.webSearchDisabled, description: X.webSearchDisabledDescription },
        { value: `cached`, label: X.webSearchCached, description: X.webSearchCachedDescription },
        { value: `indexed`, label: X.webSearchIndexed, description: X.webSearchIndexedDescription },
        { value: `live`, label: X.webSearchLive, description: X.webSearchLiveDescription },
      ]),
      (Sr = [
        { value: null, label: X.modelDefault, description: null },
        { value: `low`, label: X.modelVerbosityLow, description: X.modelVerbosityLowDescription },
        { value: `medium`, label: X.modelVerbosityMedium, description: X.modelVerbosityMediumDescription },
        { value: `high`, label: X.modelVerbosityHigh, description: X.modelVerbosityHighDescription },
      ]),
      (Cr = [
        { value: `auto`, label: X.reasoningSummaryAuto, description: X.reasoningSummaryAutoDescription },
        {
          value: `concise`,
          label: X.reasoningSummaryConcise,
          description: X.reasoningSummaryConciseDescription,
        },
        {
          value: `detailed`,
          label: X.reasoningSummaryDetailed,
          description: X.reasoningSummaryDetailedDescription,
        },
        { value: `none`, label: X.reasoningSummaryNone, description: X.reasoningSummaryNoneDescription },
      ]));
  }))();
}
function Tr() {
  let e = (0, Er.c)(13),
    [t] = x(),
    n = D(He),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { name: `work.cloud-orchestration.preferences` }), (e[0] = r))
    : (r = e[0]);
  let i = xe(q, r),
    a = D(Ut),
    o = D(lt),
    [s, c] = (0, Dr.useState)(null),
    l;
  e[1] !== n || e[2] !== t || e[3] !== s
    ? ((l = s ?? (t.get(`mode`) === `work` ? `work` : n)), (e[1] = n), (e[2] = t), (e[3] = s), (e[4] = l))
    : (l = e[4]);
  let u = l;
  if (!i.isCapable || a.status !== `allowed`) {
    let t;
    return (
      e[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, Or.jsx)(Qn, {})), (e[5] = t)) : (t = e[5]),
      t
    );
  }
  if (!o) {
    let t;
    return (
      e[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, Or.jsx)(hn, {})), (e[6] = t)) : (t = e[6]),
      t
    );
  }
  let d;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Or.jsx)(p, {
        id: `settings.configuration.workDefaults`,
        defaultMessage: `Work`,
        description: `Account-backed defaults for new Work tasks in the configuration scope dropdown`,
      })),
      (e[7] = d))
    : (d = e[7]);
  let f = u === `work`,
    m,
    h,
    g;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = () => c(`work`)),
      (h = () => c(`codex`)),
      (g = (0, Or.jsx)(mn, {})),
      (e[8] = m),
      (e[9] = h),
      (e[10] = g))
    : ((m = e[8]), (h = e[9]), (g = e[10]));
  let _;
  return (
    e[11] === f
      ? (_ = e[12])
      : ((_ = (0, Or.jsx)(Qn, {
          workConfiguration: { label: d, selected: f, onSelect: m, onSelectCodex: h, content: g },
        })),
        (e[11] = f),
        (e[12] = _)),
    _
  );
}
var Er, Dr, Or;
function kr() {
  return (kr = e(() => {
    ((Er = he()), C(), (Dr = be()), B(), M(), De(), gt(), wr(), Ie(), pn(), (Or = G()));
  }))();
}
kr();
export { Tr as ConfigurationPanel };
//# sourceMappingURL=configuration-panel-11eaa92300eb.js.map
