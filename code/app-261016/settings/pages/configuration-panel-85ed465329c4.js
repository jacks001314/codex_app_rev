import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  Bst as i,
  Cit as a,
  Ek as o,
  FBt as s,
  Klt as c,
  LNt as l,
  M$ as u,
  Mmt as d,
  Mst as f,
  NSt as p,
  OS as m,
  PBt as h,
  Qst as g,
  RFt as _,
  Rrt as v,
  Tk as y,
  VSt as b,
  Vrt as x,
  XO as S,
  XOt as C,
  XSt as w,
  Y3 as T,
  YO as E,
  Z3 as D,
  ZSt as O,
  ast as k,
  b2 as A,
  ck as j,
  cmt as M,
  det as N,
  ew as P,
  fet as ee,
  hit as F,
  iCt as te,
  ist as I,
  j$ as L,
  jmt as ne,
  jst as R,
  kS as re,
  lit as ie,
  lk as ae,
  nCt as oe,
  oit as z,
  okt as se,
  pet as B,
  qrt as ce,
  rk as V,
  sct as H,
  sw as le,
  tit as ue,
  tk as de,
  tkt as U,
  uet as fe,
  uk as W,
  uw as pe,
  vD as me,
  vst as G,
  wB as he,
  xB as ge,
  y2 as K,
  yD as _e,
  yit as ve,
  yst as ye,
  zFt as be,
  zmt as xe,
  zst as Se,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $xr as Ce,
  Aj as we,
  Bbr as Te,
  CE as Ee,
  Cjr as De,
  Ejr as Oe,
  FF as ke,
  Ghr as Ae,
  HBr as je,
  IVt as Me,
  Jbr as Ne,
  KBr as Pe,
  KIr as Fe,
  Khr as Ie,
  LF as Le,
  LIr as q,
  NIr as J,
  QF as Re,
  Qxr as ze,
  RF as Be,
  Vbr as Ve,
  Wbr as He,
  _Dn as Ue,
  _Rt as We,
  _p as Ge,
  aIt as Ke,
  aRt as qe,
  aSr as Je,
  axr as Ye,
  bBr as Xe,
  c7t as Ze,
  cA as Qe,
  cKn as $e,
  ch as et,
  dRt as tt,
  eI as nt,
  eer as rt,
  exr as it,
  fxr as at,
  gRt as ot,
  gp as st,
  hRt as ct,
  iIt as lt,
  iRt as ut,
  iSr as dt,
  iat as ft,
  kj as pt,
  l5t as mt,
  lKn as ht,
  la as gt,
  mDn as _t,
  mRt as vt,
  mw as yt,
  nIt as bt,
  nSr as xt,
  njr as St,
  oIt as Ct,
  oa as wt,
  oat as Tt,
  okn as Et,
  oxr as Dt,
  pRt as Ot,
  pw as kt,
  qBr as At,
  rIt as jt,
  rSr as Mt,
  s7t as Nt,
  sA as Y,
  sh as Pt,
  skn as Ft,
  tIt as It,
  tSr as Lt,
  tjr as Rt,
  u5t as zt,
  vBr as Bt,
  vDn as Vt,
  wE as Ht,
  wVt as Ut,
  xMr as Wt,
  xjr as Gt,
  yBr as Kt,
  yMr as qt,
} from "./app-initial-ad16eaadf81f.js";
import { Hy as Jt, Rl as X, Uy as Yt, _h as Xt, vh as Zt, zl as Qt } from "./app-primary-3e00728c2a4c.js";
import { n as $t, t as en } from "./lock-436e4ad12428.js";
import { n as tn, t as nn } from "./model-and-reasoning-effort-translations-ac0973a6e9a8.js";
import { n as rn, t as an } from "./settings-loading-row-1fcc5b514745.js";
import { n as on, t as sn } from "./parse-28efc409234f.js";
import { l as cn, u as ln } from "./settings-route-state-62564494b9d2.js";
import { n as un, t as dn } from "./plugins-settings-row-53ef257a634d.js";
import { n as fn, t as pn } from "./experimental-feature-visibility-2c33544b3214.js";
import { i as mn, n as hn, r as gn } from "./panel-ede8cf50d7fd.js";
function _n({ diagnostics: e, durationMs: t }) {
  return {
    durationMs: t,
    problemCount: e.problems.length,
    status: e.installed
      ? N.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_OK
      : N.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_PROBLEM,
    ...xn(e.bundleVersion),
  };
}
function vn({ durationMs: e }) {
  return { durationMs: e, status: N.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_FAILED };
}
function yn({ bundleVersion: e, durationMs: t, status: n }) {
  return { durationMs: t, status: bn(n), ...xn(e) };
}
function bn(e) {
  switch (e) {
    case `already-current`:
      return B.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_ALREADY_CURRENT;
    case `canceled`:
      return B.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_CANCELED;
    case `failed`:
      return B.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_FAILED;
    case `installed`:
      return B.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_INSTALLED;
  }
}
function xn(e) {
  return e == null || e.length === 0 ? {} : { bundleVersion: e };
}
function Sn() {
  return (Sn = e(() => {
    v();
  }))();
}
function Cn(e) {
  return e instanceof Error || e instanceof DOMException
    ? e.name === `AbortError` || e.message.toLowerCase().includes(`aborted`)
    : !1;
}
var wn;
function Tn() {
  return (Tn = e(() => {
    wn = `3026692602`;
  }))();
}
function En(e) {
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
function Dn(e, t) {
  switch (e?.phase) {
    case void 0:
    case `checking`:
    case `downloading`:
    case `error`:
      return (0, On.jsx)(U, {
        id: `localConversation.primaryRuntimeInstallStatus.downloading`,
        defaultMessage: `Setting up your workspace: {percent}%`,
        description: `Thread status shown while Codex downloads required local runtime tools before starting a response`,
        values: { percent: t },
      });
    case `extracting`:
      return (0, On.jsx)(U, {
        id: `localConversation.primaryRuntimeInstallStatus.extracting`,
        defaultMessage: `Preparing your workspace`,
        description: `Thread status shown while Codex extracts required local runtime tools before starting a response`,
      });
    case `verifying`:
    case `validating`:
    case `installed`:
    case `configuring`:
    case `ready`:
      return (0, On.jsx)(U, {
        id: `localConversation.primaryRuntimeInstallStatus.finalizing`,
        defaultMessage: `Finalizing your workspace`,
        description: `Thread status shown while Codex finalizes required local runtime tools before starting a response`,
      });
  }
}
var On;
function kn() {
  return (kn = e(() => {
    (C(), (On = l()));
  }))();
}
async function An({ filePath: e, hostId: t, keyPath: n, value: r }) {
  let i = jn(n, r);
  if (i == null) throw Error(`Unsupported config key for project config write.`);
  let a = ``;
  try {
    a = (await ve(`read-file`, { params: { hostId: t, path: e } })).contents;
  } catch (e) {
    if (!zn(e)) throw Error(`Failed to read project config.`);
  }
  try {
    on(a);
  } catch {
    throw Error(`The project config.toml file is invalid.`);
  }
  let o = Mn(a, i.name, i.value);
  try {
    on(o);
  } catch {
    throw Error(`The updated project config.toml file is invalid.`);
  }
  if (o !== a)
    try {
      let n = I.workspaceFiles.writeText;
      if (n == null) throw Error(`Text file writes are unavailable in this host.`);
      await ue(n({ path: e, hostId: t, contents: o }));
    } catch {
      throw Error(`Failed to save project config.`);
    }
}
function jn(e, t) {
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
function Mn(e, t, n) {
  return t === `network_access` ? Pn(e, n === !0) : Nn(e, t, n == null ? null : String(n));
}
function Nn(e, t, n) {
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
    let l = Ln(c, a),
      u = a != null;
    if (((a = l.multilineString), u || a != null)) continue;
    let d = In(c);
    if (d != null) {
      (o === -1 && (o = e), (i = d));
      continue;
    }
    if (i == null && RegExp(`^\\s*(?:${t}|"${t}"|'${t}')\\s*=`).test(c)) {
      (n == null
        ? l.commentIndex === -1
          ? r.splice(e, 1)
          : (r[e] = `${c.match(/^\s*/)?.[0] ?? ``}${c.slice(l.commentIndex)}`)
        : (r[e] = Rn(c, `${t} = "${n}"`, l.commentIndex)),
        (s = !0));
      break;
    }
  }
  if (!s) {
    if (n == null) return e;
    let i = o;
    (i === -1 && (i = r.at(-1) === `` ? r.length - 1 : r.length), r.splice(i, 0, `${t} = "${n}"`));
  }
  return Fn(
    r.join(`
`),
  );
}
function Pn(e, t) {
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
    let l = Ln(t, a),
      u = a != null;
    if (((a = l.multilineString), u || a != null)) continue;
    let d = In(t);
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
      ((n[e] = Rn(t, `sandbox_workspace_write.network_access = ${c}`, l.commentIndex)), (s = !0));
      break;
    }
    if (
      i == null &&
      /^\s*(?:sandbox_workspace_write|"sandbox_workspace_write"|'sandbox_workspace_write')\s*=\s*\{/.test(t)
    )
      throw Error(`The sandbox_workspace_write inline table cannot be updated safely.`);
    if (r && /^\s*(?:network_access|"network_access"|'network_access')\s*=/.test(t)) {
      ((n[e] = Rn(t, `network_access = ${c}`, l.commentIndex)), (s = !0));
      break;
    }
  }
  if (r && !s)
    return (
      n.splice(o, 0, `network_access = ${t ? `true` : `false`}`),
      Fn(
        n.join(`
`),
      )
    );
  if (s)
    return Fn(
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
function Fn(e) {
  return e.endsWith(`
`)
    ? e
    : `${e}\n`;
}
function In(e) {
  let { commentIndex: t } = Ln(e, null),
    n = (t === -1 ? e : e.slice(0, t)).match(/^\s*\[(?:\[(.+)\]|(.+))\]\s*$/),
    r = n?.[1] ?? n?.[2];
  return r == null ? null : r.trim().replace(/^(["'])(.*)\1$/, `$2`);
}
function Ln(e, t) {
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
function Rn(e, t, n) {
  let r = e.match(/^\s*/)?.[0] ?? ``;
  return n === -1 ? `${r}${t}` : `${r}${t}${e.slice(0, n).match(/\s*$/)?.[0] ?? ``}${e.slice(n)}`;
}
function zn(e) {
  if (!(e instanceof Error)) return !1;
  let t = e.message.trim().toLowerCase();
  return t === `enoent` || t.includes(`no such file`) || t.includes(`not found`);
}
function Bn() {
  return (Bn = e(() => {
    (sn(), k(), a());
  }))();
}
function Vn(e) {
  let r = (0, Un.c)(29),
    { hostId: i } = e,
    a = n(g),
    o = se();
  (te(_t), te(Ue));
  let [s, l] = (0, Wn.useState)(!1),
    u = te(Te),
    d = F(c.defaultModeRequestUserInput),
    { data: f, isLoading: p } = oe(Bt, i),
    m = f === void 0 ? [] : f,
    h;
  r[0] === i ? (h = r[1]) : ((h = { hostId: i }), (r[0] = i), (r[1] = h));
  let _ = Xe(h),
    v = m.filter(Hn),
    y = u?.[ne] === !0,
    b;
  r[2] === _
    ? (b = r[3])
    : ((b = (e) => ({
        key: e.name,
        label: e.displayName ?? e.name,
        description: e.description ?? void 0,
        enabled: e.enabled,
        onChange: (t) => {
          _.mutate(
            { featureName: e.name, enabled: t },
            {
              onSuccess: () => {
                l(!0);
              },
            },
          );
        },
      })),
      (r[2] = _),
      (r[3] = b));
  let x = [
      ...(y && !p
        ? [
            {
              key: ne,
              label: o.formatMessage({
                id: `settings.general.experimentalFeatures.requestUserInput.label`,
                defaultMessage: `Request user input`,
                description: `Label for the request user input experimental feature toggle`,
              }),
              description: o.formatMessage({
                id: `settings.general.experimentalFeatures.requestUserInput.description`,
                defaultMessage: `Allow Codex to ask questions outside Plan mode. Changes apply only to new chats`,
                description: `Description for the request user input experimental feature toggle`,
              }),
              enabled: d,
              onChange: (e) => {
                ie(a, c.defaultModeRequestUserInput, e).catch((e) => {
                  (be.warning(`Failed to update request-user-input preference`, {
                    safe: {},
                    sensitive: { error: e },
                  }),
                    a
                      .get(ce)
                      .danger(
                        o.formatMessage({
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
      ...v.map(b),
    ],
    S = x.length > 0 || !1,
    C = Y,
    w;
  r[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(U, {
        id: `settings.general.experimentalFeatures`,
        defaultMessage: `Experimental features (Beta)`,
        description: `Heading for beta experimental features settings group`,
      })),
      (r[4] = w))
    : (w = r[4]);
  let T;
  r[5] === s
    ? (T = r[6])
    : ((T = s
        ? (0, Z.jsx)(`div`, {
            className: `mb-2 block font-medium text-danger`,
            children: (0, Z.jsx)(U, {
              id: `settings.general.experimentalFeatures.restartNote`,
              defaultMessage: `Restart {appName} to apply experimental feature changes`,
              description: `Notice shown after changing an experimental feature to indicate restart is required`,
              values: { appName: $e },
            }),
          })
        : void 0),
      (r[5] = s),
      (r[6] = T));
  let E;
  r[7] === T ? (E = r[8]) : ((E = (0, Z.jsx)(Y.Header, { title: w, subtitle: T })), (r[7] = T), (r[8] = E));
  let D = Y,
    O = t,
    k;
  r[9] === !1 ? (k = r[10]) : ((k = null), (r[9] = !1), (r[10] = k));
  let A;
  r[11] === p
    ? (A = r[12])
    : ((A = p
        ? (0, Z.jsx)(an, {
            children: (0, Z.jsx)(U, {
              id: `settings.general.experimentalFeatures.loading`,
              defaultMessage: `Loading experimental features…`,
              description: `Loading label for beta experimental features settings group`,
            }),
          })
        : null),
      (r[11] = p),
      (r[12] = A));
  let j;
  r[13] !== S || r[14] !== p
    ? ((j =
        !p && !S
          ? (0, Z.jsx)(st, {
              layout: `settings-row`,
              children: (0, Z.jsx)(U, {
                id: `settings.general.experimentalFeatures.empty`,
                defaultMessage: `No beta experimental features available`,
                description: `Empty label for beta experimental features settings group`,
              }),
            })
          : null),
      (r[13] = S),
      (r[14] = p),
      (r[15] = j))
    : (j = r[15]);
  let M = x.map((e) =>
      (0, Z.jsx)(
        le,
        {
          label: e.label,
          description: e.description,
          control: (0, Z.jsx)(ae, {
            checked: e.enabled,
            disabled: _.isPending,
            onChange: e.onChange,
            ariaLabel: o.formatMessage(
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
    N;
  r[16] !== O || r[17] !== j || r[18] !== M || r[19] !== k || r[20] !== A
    ? ((N = (0, Z.jsxs)(O, { children: [k, A, j, M] })),
      (r[16] = O),
      (r[17] = j),
      (r[18] = M),
      (r[19] = k),
      (r[20] = A),
      (r[21] = N))
    : (N = r[21]);
  let P;
  r[22] !== N || r[23] !== D.Content
    ? ((P = (0, Z.jsx)(D.Content, { children: N })), (r[22] = N), (r[23] = D.Content), (r[24] = P))
    : (P = r[24]);
  let ee;
  return (
    r[25] !== C || r[26] !== P || r[27] !== E
      ? ((ee = (0, Z.jsxs)(C, { children: [E, P] })), (r[25] = C), (r[26] = P), (r[27] = E), (r[28] = ee))
      : (ee = r[28]),
    ee
  );
}
function Hn(e) {
  return fn(e) && e.name !== `default_mode_request_user_input`;
}
var Un, Wn, Z;
function Gn() {
  return (Gn = e(() => {
    ((Un = h()),
      O(),
      H(),
      xe(),
      (Wn = s()),
      C(),
      ht(),
      Vt(),
      Ge(),
      x(),
      W(),
      Kt(),
      r(),
      z(),
      pn(),
      Qe(),
      rn(),
      pe(),
      P(),
      Ve(),
      _(),
      (Z = l()));
  }))();
}
function Kn(e) {
  let r = (0, Xn.c)(53),
    { hostId: i } = e,
    a = n(g),
    o = se(),
    s = te(ct),
    c;
  r[0] === i ? (c = r[1]) : ((c = { hostId: i }), (r[0] = i), (r[1] = c));
  let { data: l } = Ot(c),
    u,
    d,
    f,
    p,
    m,
    h,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w;
  if (r[2] !== s || r[3] !== i || r[4] !== o || r[5] !== l || r[6] !== a) {
    h = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      r[21] !== l?.hasModelSupportingMaxReasoningEffort || r[22] !== l?.hasModelSupportingUltraReasoningEffort
        ? ((e = (e) =>
            e === `max`
              ? l?.hasModelSupportingMaxReasoningEffort === !0
              : l?.hasModelSupportingUltraReasoningEffort === !0),
          (r[21] = l?.hasModelSupportingMaxReasoningEffort),
          (r[22] = l?.hasModelSupportingUltraReasoningEffort),
          (r[23] = e))
        : (e = r[23]);
      let n = Zn.filter(e),
        c = l?.models.some(Jn);
      if (l == null || (n.length === 0 && !c)) {
        h = null;
        break bb0;
      }
      let g = c ? [...vt, `persistent`] : vt,
        T;
      r[24] === s ? (T = r[25]) : ((T = (e) => s.has(e)), (r[24] = s), (r[25] = T));
      let E = g.length + n.filter(T).length;
      ((m = Y),
        r[26] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((w = (0, Q.jsx)(Y.Header, {
              title: (0, Q.jsx)(U, {
                id: `settings.agent.modelFeatures.title`,
                defaultMessage: `Model features`,
                description: `Title for model feature settings`,
              }),
            })),
            (r[26] = w))
          : (w = r[26]),
        (p = Y.Content),
        (f = t),
        (d = le),
        r[27] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((S = (0, Q.jsx)(U, {
              id: `settings.agent.modelFeatures.reasoningEfforts.label`,
              defaultMessage: `Available reasoning efforts`,
              description: `Label for the available reasoning efforts setting`,
            })),
            (C = (0, Q.jsx)(U, {
              id: `settings.agent.modelFeatures.reasoningEfforts.description`,
              defaultMessage: `Choose which reasoning effort levels appear in model controls. Availability varies by model`,
              description: `Description for the available reasoning efforts setting`,
            })),
            (r[27] = S),
            (r[28] = C))
          : ((S = r[27]), (C = r[28])),
        (u = de),
        (_ = `end`),
        (v = `menuWide`),
        r[29] === E
          ? (y = r[30])
          : ((y = (0, Q.jsx)(ke, {
              children: (0, Q.jsx)(U, {
                id: `settings.agent.modelFeatures.reasoningEfforts.selectedCount`,
                defaultMessage: `{count, plural, one {# selected} other {# selected}}`,
                description: `Number of available reasoning efforts selected`,
                values: { count: E },
              }),
            })),
            (r[29] = E),
            (r[30] = y)),
        (b = g.map(qn)),
        (x = n.map((e) =>
          (0, Q.jsx)(
            V.CheckboxItem,
            {
              checked: s.has(e),
              onCheckedChange: (t) => {
                We(a, { enabled: t, hostId: i, listModelsData: l, reasoningEffort: e }).catch(() => {
                  a.get(ce).danger(
                    o.formatMessage({
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
              children: (0, Q.jsx)(nn, { effort: e }),
            },
            e,
          ),
        )));
    }
    ((r[2] = s),
      (r[3] = i),
      (r[4] = o),
      (r[5] = l),
      (r[6] = a),
      (r[7] = u),
      (r[8] = d),
      (r[9] = f),
      (r[10] = p),
      (r[11] = m),
      (r[12] = h),
      (r[13] = _),
      (r[14] = v),
      (r[15] = y),
      (r[16] = b),
      (r[17] = x),
      (r[18] = S),
      (r[19] = C),
      (r[20] = w));
  } else
    ((u = r[7]),
      (d = r[8]),
      (f = r[9]),
      (p = r[10]),
      (m = r[11]),
      (h = r[12]),
      (_ = r[13]),
      (v = r[14]),
      (y = r[15]),
      (b = r[16]),
      (x = r[17]),
      (S = r[18]),
      (C = r[19]),
      (w = r[20]));
  if (h !== Symbol.for(`react.early_return_sentinel`)) return h;
  let T;
  r[31] !== u || r[32] !== _ || r[33] !== v || r[34] !== y || r[35] !== b || r[36] !== x
    ? ((T = (0, Q.jsxs)(u, { align: _, contentWidth: v, triggerButton: y, children: [b, x] })),
      (r[31] = u),
      (r[32] = _),
      (r[33] = v),
      (r[34] = y),
      (r[35] = b),
      (r[36] = x),
      (r[37] = T))
    : (T = r[37]);
  let E;
  r[38] !== d || r[39] !== T || r[40] !== S || r[41] !== C
    ? ((E = (0, Q.jsx)(d, { label: S, description: C, control: T })),
      (r[38] = d),
      (r[39] = T),
      (r[40] = S),
      (r[41] = C),
      (r[42] = E))
    : (E = r[42]);
  let D;
  r[43] !== f || r[44] !== E
    ? ((D = (0, Q.jsx)(f, { children: E })), (r[43] = f), (r[44] = E), (r[45] = D))
    : (D = r[45]);
  let O;
  r[46] !== p || r[47] !== D
    ? ((O = (0, Q.jsx)(p, { children: D })), (r[46] = p), (r[47] = D), (r[48] = O))
    : (O = r[48]);
  let k;
  return (
    r[49] !== m || r[50] !== O || r[51] !== w
      ? ((k = (0, Q.jsxs)(m, { children: [w, O] })), (r[49] = m), (r[50] = O), (r[51] = w), (r[52] = k))
      : (k = r[52]),
    k
  );
}
function qn(e) {
  return (0, Q.jsx)(
    V.CheckboxItem,
    { checked: !0, disabled: !0, children: (0, Q.jsx)(nn, { effort: e }) },
    e,
  );
}
function Jn(e) {
  return e.supportedReasoningEfforts.some(Yn);
}
function Yn(e) {
  let { reasoningEffort: t } = e;
  return t === `persistent`;
}
var Xn, Q, Zn;
function Qn() {
  return (Qn = e(() => {
    ((Xn = h()),
      O(),
      C(),
      tn(),
      j(),
      x(),
      tt(),
      ot(),
      r(),
      Qe(),
      pe(),
      Be(),
      P(),
      (Q = l()),
      (Zn = [`max`, `ultra`]));
  }))();
}
function $n(e) {
  let t = (0, _r.c)(27),
    { workConfiguration: n } = e,
    { selectedHostId: r } = Tt(),
    i = At(r),
    a = oe(Ee, r),
    o = te(J),
    s = De(wn),
    c = De(`2106641128`),
    l = De(`3693343337`),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(Le, { slug: `agent` })), (t[0] = u))
    : (u = t[0]);
  let d;
  t[1] === n
    ? (d = t[2])
    : ((d =
        n == null
          ? (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)($.Fragment, {
                  children: (0, $.jsx)(U, {
                    id: `settings.agent.configuration.subtitle.summary.electron`,
                    defaultMessage: `Configure permissions, web access, and agent responses for new chats <a>Learn more</a>`,
                    description: `Summary text for the desktop configuration settings subtitle`,
                    values: { a: er },
                  }),
                }),
                null,
              ],
            })
          : (0, $.jsx)(U, {
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
                            (0, $.jsx)($.Fragment, { children: (0, $.jsx)(U, { ...X.agentDefaults }) }),
                            null,
                          ],
                        })
                      : null,
                }),
                (0, $.jsxs)(Y.Content, {
                  children: [
                    (n?.selected ? [] : a).map((e, t) =>
                      (0, $.jsx)(
                        me,
                        {
                          content: (0, $.jsxs)($.Fragment, {
                            children: [
                              (0, $.jsx)(gt, {
                                cwd: null,
                                className: `[&>p]:my-0`,
                                textStyle: { kind: `small` },
                                children: e.summary,
                              }),
                              e.details != null && e.details.length > 0
                                ? (0, $.jsx)(gt, {
                                    cwd: null,
                                    className: `[&>p]:my-0`,
                                    textStyle: { kind: `small` },
                                    children: e.details,
                                  })
                                : null,
                              e.path == null
                                ? null
                                : (0, $.jsx)(U, {
                                    id: `settings.agent.configuration.notice.fileContext`,
                                    defaultMessage: `File: {path}{location}`,
                                    description: `File path and optional location for a config or rules warning shown in settings`,
                                    values: {
                                      path: (0, $.jsx)(`code`, { children: e.path }),
                                      location:
                                        e.range == null
                                          ? ``
                                          : (0, $.jsx)(U, {
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
                          Icon: Xt,
                          onPrimaryCtaClick: () => {
                            e.path != null &&
                              qe({ hostId: r, path: e.path, ...(e.range == null ? {} : { range: e.range }) });
                          },
                          primaryCtaText:
                            e.path == null
                              ? void 0
                              : (0, $.jsx)(U, {
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
                    (0, $.jsx)($.Fragment, { children: (0, $.jsx)(ir, { hostId: r, workConfiguration: n }) }),
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
  let p;
  t[8] !== l || t[9] !== r || t[10] !== n?.selected
    ? ((p = !n?.selected && l ? (0, $.jsx)(Kn, { hostId: r }) : null),
      (t[8] = l),
      (t[9] = r),
      (t[10] = n?.selected),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== c || t[13] !== r || t[14] !== n?.selected
    ? ((m = n?.selected
        ? null
        : (0, $.jsxs)($.Fragment, {
            children: [c ? (0, $.jsx)(`div`, { children: (0, $.jsx)(Vn, { hostId: r }) }) : null, null],
          })),
      (t[12] = c),
      (t[13] = r),
      (t[14] = n?.selected),
      (t[15] = m))
    : (m = t[15]);
  let h;
  t[16] !== s || t[17] !== i || t[18] !== r || t[19] !== n?.selected
    ? ((h = n?.selected
        ? null
        : (0, $.jsx)($.Fragment, {
            children: s && i.kind === `local` ? (0, $.jsx)(tr, { hostId: r }) : null,
          })),
      (t[16] = s),
      (t[17] = i),
      (t[18] = r),
      (t[19] = n?.selected),
      (t[20] = h))
    : (h = t[20]);
  let g;
  return (
    t[21] !== d || t[22] !== f || t[23] !== p || t[24] !== m || t[25] !== h
      ? ((g = (0, $.jsx)($.Fragment, {
          children: (0, $.jsxs)(Re, { title: u, subtitle: d, children: [f, p, m, h] }),
        })),
        (t[21] = d),
        (t[22] = f),
        (t[23] = p),
        (t[24] = m),
        (t[25] = h),
        (t[26] = g))
      : (g = t[26]),
    g
  );
}
function er(e) {
  return (0, $.jsx)(`a`, {
    className: `inline-flex text-info`,
    href: Ut,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function tr(e) {
  let t = (0, _r.c)(2),
    { hostId: n } = e,
    r = I.primaryRuntime;
  if (r == null) return null;
  let i;
  return (
    t[0] === n
      ? (i = t[1])
      : ((i = (0, $.jsx)(nr, { hostId: n, primaryRuntime: r })), (t[0] = n), (t[1] = i)),
    i
  );
}
function nr(e) {
  let r = (0, _r.c)(98),
    { hostId: i, primaryRuntime: a } = e,
    o = n(g),
    s = se(),
    c = Oe(),
    { data: l, isLoading: u } = oe(Bt, i),
    p;
  r[0] === i ? (p = r[1]) : ((p = { hostId: i }), (r[0] = i), (r[1] = p));
  let h = Xe(p),
    _;
  r[2] === l ? (_ = r[3]) : ((_ = l?.find(rr)), (r[2] = l), (r[3] = _));
  let v = _,
    b = v?.enabled === !0,
    x;
  r[4] !== i || r[5] !== a
    ? ((x = () => a.diagnoseDependencies({ hostId: i })), (r[4] = i), (r[5] = a), (r[6] = x))
    : (x = r[6]);
  let S;
  r[7] === i ? (S = r[8]) : ((S = pt(i)), (r[7] = i), (r[8] = S));
  let C;
  r[9] !== x || r[10] !== S
    ? ((C = { queryFn: x, queryKey: S, staleTime: Se.FIVE_SECONDS }), (r[9] = x), (r[10] = S), (r[11] = C))
    : (C = r[11]);
  let w = f(C),
    D;
  r[12] !== i || r[13] !== a
    ? ((D = { mutationFn: () => a.diagnoseDependencies({ hostId: i, probeExecutables: !0 }) }),
      (r[12] = i),
      (r[13] = a),
      (r[14] = D))
    : (D = r[14]);
  let O = ye(D),
    k;
  r[15] !== a || r[16] !== c
    ? ((k = {
        mutationFn: async (e) => {
          let { release: t } = e;
          return (await yt(c), a.runUpdateNow({ release: t }));
        },
      }),
      (r[15] = a),
      (r[16] = c),
      (r[17] = k))
    : (k = r[17]);
  let A = ye(k),
    j;
  r[18] !== i || r[19] !== a || r[20] !== c
    ? ((j = {
        mutationFn: async (e) => {
          let { release: t } = e;
          return (await yt(c), a.resetDependencies({ hostId: i, release: t }));
        },
      }),
      (r[18] = i),
      (r[19] = a),
      (r[20] = c),
      (r[21] = j))
    : (j = r[21]);
  let M = ye(j),
    N;
  r[22] === i ? (N = r[23]) : ((N = { mutationFn: () => Ke({ hostId: i }) }), (r[22] = i), (r[23] = N));
  let P = ye(N),
    F = te(lt),
    I = te(jt),
    L = F?.hostId === i ? F : null,
    ne;
  r[24] === o ? (ne = r[25]) : ((ne = o.get(ce)), (r[24] = o), (r[25] = ne));
  let R = ne,
    re = u || h.isPending || O.isPending || A.isPending || M.isPending || P.isPending,
    ie;
  r[26] === L ? (ie = r[27]) : ((ie = bt(L)), (r[26] = L), (r[27] = ie));
  let z = ie,
    B = w.data?.bundleVersion == null || w.data.bundleVersion.length === 0 ? null : w.data.bundleVersion,
    V;
  r[28] !== O || r[29] !== w || r[30] !== s || r[31] !== o || r[32] !== R
    ? ((V = () => {
        let e = Date.now();
        O.mutateAsync()
          .then((t) => {
            if ((Wt(o, fe, _n({ diagnostics: t, durationMs: Date.now() - e })), w.refetch(), t.installed)) {
              R.success(
                s.formatMessage({
                  id: `settings.agent.dependencies.diagnose.ok`,
                  defaultMessage: `Codex dependencies look healthy`,
                  description: `Toast shown when dependency diagnostics find no problems`,
                }),
              );
              return;
            }
            R.warning(
              s.formatMessage({
                id: `settings.agent.dependencies.diagnose.problem`,
                defaultMessage: `Codex dependencies may need repair. Send /feedback if this keeps happening`,
                description: `Toast shown when dependency diagnostics find problems`,
              }),
            );
          })
          .catch(() => {
            (Wt(o, fe, vn({ durationMs: Date.now() - e })),
              R.danger(
                s.formatMessage({
                  id: `settings.agent.dependencies.diagnose.failed`,
                  defaultMessage: `Couldn’t diagnose Codex dependencies`,
                  description: `Toast shown when dependency diagnostics fail`,
                }),
                { errorAnalytics: { toastId: `settings.agent.dependencies.diagnose.failed` } },
              ));
          });
      }),
      (r[28] = O),
      (r[29] = w),
      (r[30] = s),
      (r[31] = o),
      (r[32] = R),
      (r[33] = V))
    : (V = r[33]);
  let H = V,
    ue;
  r[34] !== w || r[35] !== s || r[36] !== I || r[37] !== M || r[38] !== o || r[39] !== R
    ? ((ue = () => {
        let e = Date.now();
        M.mutateAsync({ release: I })
          .then((t) => {
            (Wt(o, ee, yn({ bundleVersion: t.bundleVersion, durationMs: Date.now() - e, status: t.status })),
              w.refetch(),
              R.success(
                s.formatMessage({
                  id: `settings.agent.dependencies.reset.installed`,
                  defaultMessage: `Codex dependencies were reinstalled`,
                  description: `Toast shown when dependency reset and reinstall succeeds`,
                }),
              ));
          })
          .catch((t) => {
            if (Cn(t)) {
              (o.set(lt, null),
                w.refetch(),
                Wt(o, ee, yn({ bundleVersion: null, durationMs: Date.now() - e, status: `canceled` })),
                R.info(
                  s.formatMessage({
                    id: `settings.agent.dependencies.reset.canceled`,
                    defaultMessage: `Codex dependency download canceled`,
                    description: `Toast shown when dependency reset and reinstall is canceled`,
                  }),
                  { id: `install-primary-runtime` },
                ));
              return;
            }
            (Wt(o, ee, yn({ bundleVersion: null, durationMs: Date.now() - e, status: `failed` })),
              R.danger(
                s.formatMessage({
                  id: `settings.agent.dependencies.reset.failed`,
                  defaultMessage: `Couldn’t reinstall Codex dependencies`,
                  description: `Toast shown when dependency reset fails`,
                }),
                { errorAnalytics: { toastId: `settings.agent.dependencies.reset.failed` } },
              ));
          });
      }),
      (r[34] = w),
      (r[35] = s),
      (r[36] = I),
      (r[37] = M),
      (r[38] = o),
      (r[39] = R),
      (r[40] = ue))
    : (ue = r[40]);
  let de = ue,
    W;
  r[41] !== P || r[42] !== w || r[43] !== s || r[44] !== o || r[45] !== R
    ? ((W = () => {
        P.mutateAsync()
          .then((e) => {
            let { canceled: t } = e;
            if ((o.set(lt, null), w.refetch(), !t)) {
              R.info(
                s.formatMessage({
                  id: `settings.agent.dependencies.cancel.noop`,
                  defaultMessage: `No Codex dependency download is running`,
                  description: `Toast shown when canceling a Codex dependency download but no download is running`,
                }),
              );
              return;
            }
            R.info(
              s.formatMessage({
                id: `settings.agent.dependencies.cancel.canceled`,
                defaultMessage: `Canceling Codex dependency download`,
                description: `Toast shown after requesting cancellation of a Codex dependency download`,
              }),
              { id: `install-primary-runtime` },
            );
          })
          .catch(() => {
            R.danger(
              s.formatMessage({
                id: `settings.agent.dependencies.cancel.failed`,
                defaultMessage: `Couldn’t cancel Codex dependency download`,
                description: `Toast shown when canceling a Codex dependency download fails`,
              }),
              { errorAnalytics: { toastId: `settings.agent.dependencies.cancel.failed` } },
            );
          });
      }),
      (r[41] = P),
      (r[42] = w),
      (r[43] = s),
      (r[44] = o),
      (r[45] = R),
      (r[46] = W))
    : (W = r[46]);
  let pe = W,
    me;
  r[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, $.jsx)(Y.Header, { title: (0, $.jsx)(U, { ...X.workspaceDependencies }) })), (r[47] = me))
    : (me = r[47]);
  let G, he;
  r[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, $.jsx)(U, { ...X.codexDependencies })),
      (he = (0, $.jsx)(U, {
        id: `settings.agent.dependencies.enabled.description`,
        defaultMessage: `Allow ChatGPT to install and expose bundled Node.js and Python tools`,
        description: `Description for the Codex dependencies enabled toggle`,
      })),
      (r[48] = G),
      (r[49] = he))
    : ((G = r[48]), (he = r[49]));
  let ge = u || h.isPending || v == null,
    K;
  r[50] !== I || r[51] !== A || r[52] !== h
    ? ((K = (e) => {
        h.mutate(
          { enabled: e, featureName: d },
          {
            onSuccess: () => {
              e && A.mutate({ release: I });
            },
          },
        );
      }),
      (r[50] = I),
      (r[51] = A),
      (r[52] = h),
      (r[53] = K))
    : (K = r[53]);
  let _e;
  r[54] === s
    ? (_e = r[55])
    : ((_e = s.formatMessage({
        id: `settings.agent.dependencies.enabled.ariaLabel`,
        defaultMessage: `Enable Codex dependencies`,
        description: `Aria label for the Codex dependencies enabled toggle`,
      })),
      (r[54] = s),
      (r[55] = _e));
  let ve;
  r[56] !== b || r[57] !== ge || r[58] !== K || r[59] !== _e
    ? ((ve = (0, $.jsx)(le, {
        label: G,
        description: he,
        control: (0, $.jsx)(ae, { checked: b, disabled: ge, onChange: K, ariaLabel: _e }),
      })),
      (r[56] = b),
      (r[57] = ge),
      (r[58] = K),
      (r[59] = _e),
      (r[60] = ve))
    : (ve = r[60]);
  let be, xe;
  r[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, $.jsx)(U, { ...X.diagnoseWorkspaceDependencies })),
      (xe = (0, $.jsx)(U, {
        id: `settings.agent.dependencies.diagnose.description`,
        defaultMessage: `Checks the current bundle and records diagnostic logs`,
        description: `Description for dependency diagnostics in settings`,
      })),
      (r[61] = be),
      (r[62] = xe))
    : ((be = r[61]), (xe = r[62]));
  let Ce, we;
  r[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, $.jsx)(y, { className: `icon-2xs` })),
      (we = (0, $.jsx)(U, {
        id: `settings.agent.dependencies.diagnose.button`,
        defaultMessage: `Diagnose`,
        description: `Button label for dependency diagnostics`,
      })),
      (r[63] = Ce),
      (r[64] = we))
    : ((Ce = r[63]), (we = r[64]));
  let Te;
  r[65] !== O.isPending || r[66] !== H || r[67] !== M.isPending
    ? ((Te = (0, $.jsx)(le, {
        label: be,
        description: xe,
        control: (0, $.jsxs)(T, {
          color: `secondary`,
          size: `toolbar`,
          loading: O.isPending,
          disabled: M.isPending,
          onClick: H,
          children: [Ce, we],
        }),
      })),
      (r[65] = O.isPending),
      (r[66] = H),
      (r[67] = M.isPending),
      (r[68] = Te))
    : (Te = r[68]);
  let Ee, De;
  r[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, $.jsx)(U, { ...X.resetWorkspaceDependencies })),
      (De = (0, $.jsx)(U, {
        id: `settings.agent.dependencies.reset.description`,
        defaultMessage: `Downloads a fresh bundle, installs it, and reloads tools`,
        description: `Description for resetting and reinstalling dependencies in settings`,
      })),
      (r[69] = Ee),
      (r[70] = De))
    : ((Ee = r[69]), (De = r[70]));
  let ke = z ? P.isPending : M.isPending,
    Ae = !b || (z ? P.isPending : re),
    je = z ? pe : de,
    Me;
  r[71] === z
    ? (Me = r[72])
    : ((Me = z
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(E, { className: `icon-2xs` }),
              (0, $.jsx)(U, {
                id: `settings.agent.dependencies.cancel.button`,
                defaultMessage: `Cancel download`,
                description: `Button label for canceling dependency download`,
              }),
            ],
          })
        : (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(m, { className: `icon-2xs` }),
              (0, $.jsx)(U, {
                id: `settings.agent.dependencies.reset.button`,
                defaultMessage: `Reinstall`,
                description: `Button label for resetting and reinstalling dependencies`,
              }),
            ],
          })),
      (r[71] = z),
      (r[72] = Me));
  let Ne;
  r[73] !== ke || r[74] !== Ae || r[75] !== je || r[76] !== Me
    ? ((Ne = (0, $.jsx)(le, {
        label: Ee,
        description: De,
        control: (0, $.jsx)(T, {
          color: `danger`,
          size: `toolbar`,
          loading: ke,
          disabled: Ae,
          onClick: je,
          children: Me,
        }),
      })),
      (r[73] = ke),
      (r[74] = Ae),
      (r[75] = je),
      (r[76] = Me),
      (r[77] = Ne))
    : (Ne = r[77]);
  let Pe;
  r[78] !== ve || r[79] !== Te || r[80] !== Ne
    ? ((Pe = (0, $.jsx)(Y.Content, { children: (0, $.jsxs)(t, { children: [ve, Te, Ne] }) })),
      (r[78] = ve),
      (r[79] = Te),
      (r[80] = Ne),
      (r[81] = Pe))
    : (Pe = r[81]);
  let Fe;
  r[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = (0, $.jsx)(U, { ...X.currentDependencyVersion })), (r[82] = Fe))
    : (Fe = r[82]);
  let Ie;
  r[83] !== B || r[84] !== w.isLoading || r[85] !== z || r[86] !== L
    ? ((Ie = z
        ? Dn(L, En(L))
        : w.isLoading
          ? (0, $.jsx)(U, {
              id: `settings.agent.dependencies.bundleVersion.loading`,
              defaultMessage: `Checking…`,
              description: `Status while loading the current dependency bundle version`,
            })
          : (B ??
            (0, $.jsx)(U, {
              id: `settings.agent.dependencies.bundleVersion.notInstalled`,
              defaultMessage: `Not installed`,
              description: `Status when dependency bundle version is unavailable`,
            }))),
      (r[83] = B),
      (r[84] = w.isLoading),
      (r[85] = z),
      (r[86] = L),
      (r[87] = Ie))
    : (Ie = r[87]);
  let Le;
  r[88] === Ie
    ? (Le = r[89])
    : ((Le = (0, $.jsxs)(`span`, {
        className: `inline-flex flex-wrap gap-x-1`,
        children: [Fe, (0, $.jsx)(`span`, { children: Ie })],
      })),
      (r[88] = Ie),
      (r[89] = Le));
  let q;
  r[90] === w.data?.problems.length
    ? (q = r[91])
    : ((q = w.data?.problems.length
        ? (0, $.jsx)(`span`, {
            children: (0, $.jsx)(U, {
              id: `settings.agent.dependencies.bundleVersion.problemDescription`,
              defaultMessage: `Run diagnostics or reinstall if tool calls fail`,
              description: `Description shown when dependency diagnostics have problems`,
            }),
          })
        : null),
      (r[90] = w.data?.problems.length),
      (r[91] = q));
  let J;
  r[92] !== Le || r[93] !== q
    ? ((J = (0, $.jsxs)(Y.Footer, { className: `flex flex-col gap-1`, children: [Le, q] })),
      (r[92] = Le),
      (r[93] = q),
      (r[94] = J))
    : (J = r[94]);
  let Re;
  return (
    r[95] !== Pe || r[96] !== J
      ? ((Re = (0, $.jsxs)(Y, { children: [me, Pe, J] })), (r[95] = Pe), (r[96] = J), (r[97] = Re))
      : (Re = r[97]),
    Re
  );
}
function rr(e) {
  return e.name === d;
}
function ir(e) {
  let r = (0, _r.c)(22),
    { hostId: i, workConfiguration: a } = e,
    o = n(g),
    s = se(),
    c = b(),
    [l, u] = (0, vr.useState)(null),
    d;
  r[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = []), (r[0] = d)) : (d = r[0]);
  let [f, p] = (0, vr.useState)(d),
    m;
  r[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = {}), (r[1] = m)) : (m = r[1]);
  let [h, _] = (0, vr.useState)(m),
    v = te(Dt),
    y;
  r[2] === c.state ? (y = r[3]) : ((y = cn(c.state)), (r[2] = c.state), (r[3] = y));
  let x = y,
    S = x.hasValue ? (i === `local` ? x.workspaceRoot : null) : i === `local` ? v : null,
    C = Ie(i),
    w = oe(je, i),
    E = i === `local` ? `fallback-to-workspace` : `preserve-null`,
    D;
  r[4] !== i || r[5] !== E
    ? ((D = { hostId: i, cwdMode: E }), (r[4] = i), (r[5] = E), (r[6] = D))
    : (D = r[6]);
  let { data: O, isPending: k } = it(S, D),
    A;
  r[7] === i ? (A = r[8]) : ((A = { hostId: i }), (r[7] = i), (r[8] = A));
  let { data: j, isPending: N } = oe(He, A),
    P = O?.config ?? null,
    ee = O?.layers ?? null,
    F = O?.origins ?? null,
    I = j?.requirements ?? null,
    L = cr(ee, s),
    ne = ze(ee),
    R = null,
    re = null;
  for (let e of ee ?? []) dt(e.name) ? (R = e) : e.name.type === `enterpriseManaged` && (re = e);
  R ??= re;
  let ie = C == null ? null : `${C}/config.toml`,
    z = ne == null ? ie : xt(ne.name),
    B = {
      key: `user`,
      kind: `user`,
      label:
        a == null
          ? s.formatMessage(X.userConfig)
          : s.formatMessage({
              id: `settings.configuration.codexDefaults`,
              defaultMessage: `Codex`,
              description: `User configuration for Codex on the selected machine in the configuration scope dropdown`,
            }),
      tooltipText: z ?? `~/.codex/config.toml`,
      filePath: z,
      expectedVersion: ne?.version ?? null,
      workspaceRoot: null,
      layer: ne,
    },
    ce =
      R == null
        ? null
        : {
            key: `managed`,
            kind: `managed`,
            label:
              a == null
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
            filePath: xt(R.name),
            expectedVersion: R.version,
            workspaceRoot: null,
            layer: R,
          },
    H = [...L, B, ...(ce == null ? [] : [ce])],
    ue = L.length > 0,
    fe = H[0]?.key ?? null;
  a == null ? S != null && (fe = `project:${S}`) : (fe = `user`);
  let W = H.find((e) => e.key === l) ?? H.find((e) => e.key === fe) ?? H[0] ?? null,
    { data: pe } = oe(Ze, {
      cwd: W?.workspaceRoot == null ? (S == null ? null : M(S)) : M(W.workspaceRoot),
      hostId: i,
    }),
    G = dr(W?.layer?.config ?? null),
    he = gr(P?.approval_policy ?? null) ?? `on-request`,
    ge = P?.sandbox_mode ?? `read-only`,
    _e = G.sandboxMode == null && ge === `workspace-write`,
    ve = G.sandboxMode === `workspace-write` || _e,
    ye = G.approvalPolicy ?? he,
    be = G.sandboxMode ?? ge,
    xe = mr(ye),
    Se = hr(be),
    we = G.networkAccess ?? P?.sandbox_workspace_write?.network_access ?? !1,
    Te = G.webSearch ?? P?.web_search ?? Lt(be),
    Ee = G.modelVerbosity ?? P?.model_verbosity ?? null,
    De = G.reasoningSummary ?? P?.model_reasoning_summary ?? `auto`,
    Oe = F == null ? null : Je(F, `approval_policy`, [`approvalPolicy`]),
    Ae = F == null ? null : Je(F, `sandbox_mode`),
    Me = F == null ? null : Je(F, `sandbox_workspace_write`, [`network_access`]),
    Ne = F == null ? null : Je(F, `web_search`),
    Pe = F == null ? null : Je(F, `model_verbosity`),
    Fe = F == null ? null : Je(F, `model_reasoning_summary`),
    Le = W?.kind === `project` ? (W.layer?.disabledReason ?? null) : null,
    q = fr(W, s),
    J;
  r[9] === I
    ? (J = r[10])
    : ((J = (e) => I?.allowedApprovalPolicies == null || I.allowedApprovalPolicies.includes(e.value)),
      (r[9] = I),
      (r[10] = J));
  let Re = yr.filter(J),
    Be;
  r[11] === I
    ? (Be = r[12])
    : ((Be = (e) => I?.allowedSandboxModes == null || I.allowedSandboxModes.includes(e.value)),
      (r[11] = I),
      (r[12] = Be));
  let Ve = xr.filter(Be),
    Ue;
  if (r[13] !== w || r[14] !== I?.allowedWebSearchModes) {
    let e = Ce({ allowedModes: I?.allowedWebSearchModes ?? null, appServerVersion: w });
    ((Ue = Sr.filter((t) => e.includes(t.value))),
      (r[13] = w),
      (r[14] = I?.allowedWebSearchModes),
      (r[15] = Ue));
  } else Ue = r[15];
  let We = Ue,
    Ge = async function (e, t, n) {
      if (W?.filePath == null || f.includes(e)) return;
      let r = W.filePath;
      (p((t) => [...t, e]),
        _((t) => ({ ...t, [e]: void 0 })),
        await (async () => {
          try {
            await o
              .get(Ye, i)
              .mutateAsync({
                cwd: i === `local` ? (S ?? v) : null,
                expectedVersion: W.expectedVersion,
                filePath: r,
                keyPath: t,
                kind: W.kind,
                projectWrite:
                  W.kind === `project` ? () => An({ filePath: r, hostId: i, keyPath: t, value: n }) : void 0,
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
            _((t) => ({ ...t, [e]: r }));
          }
        })().finally(() => {
          p((t) => t.filter((t) => t !== e));
        }));
    },
    Ke = k || N,
    qe = pr({
      intl: s,
      scopeLockReason: q,
      origin: Oe,
      selectedScope: W,
      hasOptions: Re.length > 0,
      restrictedMessage: s.formatMessage({
        id: `settings.agent.configuration.approval.restricted`,
        defaultMessage: `Approval policy is restricted by this installation.`,
        description: `Restriction message for approval policy in configuration settings`,
      }),
    }),
    Xe = pr({
      intl: s,
      scopeLockReason: q,
      origin: Ae,
      selectedScope: W,
      hasOptions: Ve.length > 0,
      restrictedMessage: s.formatMessage({
        id: `settings.agent.configuration.sandbox.restricted`,
        defaultMessage: `Sandbox mode is restricted by this installation.`,
        description: `Restriction message for sandbox mode in configuration settings`,
      }),
    }),
    Qe = pr({
      intl: s,
      scopeLockReason: q,
      origin: Me,
      selectedScope: W,
      hasOptions: !0,
      restrictedMessage: ``,
    }),
    $e = pr({
      intl: s,
      scopeLockReason: q,
      origin: Ne,
      selectedScope: W,
      hasOptions: We.length > 0,
      restrictedMessage: s.formatMessage({
        id: `settings.agent.configuration.webSearch.restricted`,
        defaultMessage: `Web search is restricted by this installation`,
        description: `Restriction message for web search in configuration settings`,
      }),
    }),
    et = pr({
      intl: s,
      scopeLockReason: q,
      origin: Pe,
      selectedScope: W,
      hasOptions: !0,
      restrictedMessage: ``,
    }),
    tt = pr({
      intl: s,
      scopeLockReason: q,
      origin: Fe,
      selectedScope: W,
      hasOptions: !0,
      restrictedMessage: ``,
    }),
    nt = Ke || Le != null,
    rt = nt || f.includes(`approval`) || qe != null,
    at = nt || f.includes(`sandbox`) || Xe != null,
    ot;
  r[16] === a
    ? (ot = r[17])
    : ((ot = (e) => {
        (u(e), a?.onSelectCodex(), _({}));
      }),
      (r[16] = a),
      (r[17] = ot));
  let st = ot,
    ct;
  r[18] === a
    ? (ct = r[19])
    : ((ct =
        a == null ? (0, $.jsx)(V.SectionLabel, { children: (0, $.jsx)(U, { ...X.globalConfig }) }) : null),
      (r[18] = a),
      (r[19] = ct));
  let lt;
  return (
    r[20] === a
      ? (lt = r[21])
      : ((lt =
          a == null
            ? null
            : (0, $.jsx)(V.Item, {
                rightIconAsset: a.selected ? K : void 0,
                onSelect: a.onSelect,
                children: a.label,
              })),
        (r[20] = a),
        (r[21] = lt)),
    (0, $.jsxs)(Y, {
      children: [
        (0, $.jsx)(Y.Header, {
          title: (0, $.jsxs)(de, {
            align: `start`,
            contentWidth: `menuWide`,
            disabled: H.length === 0,
            triggerButton: (0, $.jsx)(ke, {
              disabled: H.length === 0,
              contentClassName: `truncate`,
              children: a?.selected
                ? a.label
                : (W?.label ??
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
                      (0, $.jsxs)(V.Section, {
                        children: [
                          (0, $.jsx)(V.SectionLabel, { children: (0, $.jsx)(U, { ...X.projectConfig }) }),
                          L.map((e) =>
                            (0, $.jsx)(
                              or,
                              {
                                scopeOption: e,
                                selected: !a?.selected && W?.key === e.key,
                                onSelect: () => {
                                  st(e.key);
                                },
                              },
                              e.key,
                            ),
                          ),
                        ],
                      }),
                      (0, $.jsx)(V.Separator, {}),
                    ],
                  })
                : null,
              (0, $.jsxs)(V.Section, {
                children: [
                  ct,
                  (0, $.jsx)(or, {
                    scopeOption: B,
                    selected: !a?.selected && W?.key === B.key,
                    onSelect: () => {
                      st(B.key);
                    },
                  }),
                  lt,
                  ce == null
                    ? null
                    : (0, $.jsx)(or, {
                        scopeOption: ce,
                        selected: !a?.selected && W?.key === ce.key,
                        onSelect: () => {
                          st(ce.key);
                        },
                      }),
                ],
              }),
            ],
          }),
          actions: a?.selected
            ? null
            : (0, $.jsxs)(T, {
                color: `ghost`,
                size: `toolbar`,
                disabled: W?.filePath == null,
                onClick: () => {
                  W?.filePath != null &&
                    zt({
                      path: W.filePath,
                      cwd: W.workspaceRoot == null ? null : M(W.workspaceRoot),
                      hostId: i,
                      target: pe?.preferredTarget,
                    });
                },
                children: [
                  (0, $.jsx)(U, {
                    id: `settings.agent.configuration.scope.open`,
                    defaultMessage: `Open config.toml`,
                    description: `Button label to open the selected config file`,
                  }),
                  (0, $.jsx)(Pt, { className: `icon-2xs` }),
                ],
              }),
        }),
        a?.selected
          ? a.content
          : (0, $.jsxs)(Y.Content, {
              children: [
                Le == null ? null : (0, $.jsx)(me, { content: Le, Icon: Jt, type: `warning` }),
                (0, $.jsxs)(t, {
                  children: [
                    (0, $.jsx)(le, {
                      label: (0, $.jsx)(U, { ...X.approvalPolicy }),
                      description: (0, $.jsx)(sr, {
                        error: h.approval,
                        lockReason: qe,
                        children: (0, $.jsx)(U, {
                          id: `settings.agent.configuration.approval.definition`,
                          defaultMessage: `Choose when ChatGPT asks for approval`,
                          description: `Definition for approval policy in configuration settings`,
                        }),
                      }),
                      control: (0, $.jsx)(de, {
                        align: `end`,
                        contentWidth: `panelWide`,
                        disabled: rt,
                        triggerButton: (0, $.jsx)(ke, {
                          disabled: rt,
                          contentClassName: `truncate`,
                          children: xe == null ? ye : s.formatMessage(xe.label),
                        }),
                        children: Re.map((e) =>
                          (0, $.jsx)(
                            V.Item,
                            {
                              rightIconAsset: e.value === ye ? K : void 0,
                              subTextAllowWrap: !0,
                              onSelect: () => {
                                Ge(`approval`, `approval_policy`, e.value);
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
                    (0, $.jsx)(le, {
                      label: (0, $.jsx)(U, { ...X.sandboxSettings }),
                      description: (0, $.jsx)(sr, {
                        error: h.sandbox,
                        lockReason: Xe,
                        children: (0, $.jsx)(U, {
                          id: `settings.agent.configuration.sandbox.definition`,
                          defaultMessage: `Choose how much ChatGPT can do when running commands`,
                          description: `Explains that the sandbox setting chooses the file-access permissions used for commands run by ChatGPT`,
                        }),
                      }),
                      control: (0, $.jsx)(de, {
                        align: `end`,
                        contentWidth: `panelWide`,
                        disabled: at,
                        triggerButton: (0, $.jsx)(ke, {
                          disabled: at,
                          contentClassName: `truncate`,
                          children: Se == null ? be : s.formatMessage(Se.label),
                        }),
                        children: Ve.map((e) =>
                          (0, $.jsx)(
                            V.Item,
                            {
                              rightIconAsset: e.value === be ? K : void 0,
                              subTextAllowWrap: !0,
                              onSelect: () => {
                                Ge(`sandbox`, `sandbox_mode`, e.value);
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
                    ve
                      ? (0, $.jsx)(le, {
                          label: (0, $.jsx)(U, { ...X.networkAccess }),
                          description: (0, $.jsx)(sr, {
                            error: h.network,
                            lockReason: Qe,
                            children: (0, $.jsx)(U, {
                              id: `settings.agent.configuration.network.definition`,
                              defaultMessage: `Allow network access when the sandbox is set to workspace write`,
                              description: `Explains that this toggle controls network access specifically while the command sandbox is in workspace-write mode`,
                            }),
                          }),
                          control: (0, $.jsx)(ae, {
                            checked: we,
                            disabled: nt || f.includes(`network`) || Qe != null,
                            onChange: (e) => {
                              Ge(`network`, `sandbox_workspace_write.network_access`, e);
                            },
                            ariaLabel: s.formatMessage({
                              id: `settings.agent.configuration.network.ariaLabel`,
                              defaultMessage: `Allow network access`,
                              description: `Accessible label for toggling network access for commands run in the workspace-write sandbox`,
                            }),
                          }),
                        })
                      : null,
                    (0, $.jsx)(ar, {
                      label: X.webSearch,
                      description: (0, $.jsx)(U, {
                        id: `settings.agent.configuration.webSearch.definition`,
                        defaultMessage: `Choose how ChatGPT accesses the web`,
                        description: `Definition for web search in configuration settings`,
                      }),
                      error: h.webSearch,
                      lockReason: $e,
                      options: We,
                      value: Te,
                      disabled: nt || f.includes(`webSearch`),
                      onSelect: (e) => {
                        Ge(`webSearch`, `web_search`, e);
                      },
                    }),
                    (0, $.jsx)(ar, {
                      label: X.modelVerbosity,
                      description: (0, $.jsx)(U, {
                        id: `settings.agent.configuration.modelVerbosity.definition`,
                        defaultMessage: `Choose how much detail ChatGPT includes in responses`,
                        description: `Definition for model verbosity in configuration settings`,
                      }),
                      error: h.modelVerbosity,
                      lockReason: et,
                      options: Cr,
                      value: Ee,
                      disabled: nt || f.includes(`modelVerbosity`),
                      onSelect: (e) => {
                        Ge(`modelVerbosity`, `model_verbosity`, e);
                      },
                    }),
                    (0, $.jsx)(ar, {
                      label: X.reasoningSummary,
                      description: (0, $.jsx)(U, {
                        id: `settings.agent.configuration.reasoningSummary.definition`,
                        defaultMessage: `Choose how ChatGPT summarizes its reasoning`,
                        description: `Definition for reasoning summary in configuration settings`,
                      }),
                      error: h.reasoningSummary,
                      lockReason: tt,
                      options: wr,
                      value: De,
                      disabled: nt || f.includes(`reasoningSummary`),
                      onSelect: (e) => {
                        Ge(`reasoningSummary`, `model_reasoning_summary`, e);
                      },
                    }),
                    i === `local` ? null : (0, $.jsx)(dn, { hostId: i }),
                  ],
                }),
              ],
            }),
      ],
    })
  );
}
function ar(e) {
  let t = (0, _r.c)(36),
    { description: n, disabled: r, error: i, label: a, lockReason: o, onSelect: s, options: c, value: l } = e,
    u = se(),
    d;
  if (t[0] !== c || t[1] !== l) {
    let e;
    (t[3] === l ? (e = t[4]) : ((e = (e) => e.value === l), (t[3] = l), (t[4] = e)),
      (d = c.find(e)),
      (t[0] = c),
      (t[1] = l),
      (t[2] = d));
  } else d = t[2];
  let f = d,
    p = r || o != null,
    m;
  t[5] === a ? (m = t[6]) : ((m = (0, $.jsx)(U, { ...a })), (t[5] = a), (t[6] = m));
  let h;
  t[7] !== n || t[8] !== i || t[9] !== o
    ? ((h = (0, $.jsx)(sr, { error: i, lockReason: o, children: n })),
      (t[7] = n),
      (t[8] = i),
      (t[9] = o),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] !== u || t[12] !== a
    ? ((g = u.formatMessage(a)), (t[11] = u), (t[12] = a), (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] !== f || t[15] !== l
    ? ((_ = f == null ? l : (0, $.jsx)(U, { ...f.label })), (t[14] = f), (t[15] = l), (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] !== p || t[18] !== g || t[19] !== _
    ? ((v = (0, $.jsx)(ke, { disabled: p, contentClassName: `truncate`, "aria-label": g, children: _ })),
      (t[17] = p),
      (t[18] = g),
      (t[19] = _),
      (t[20] = v))
    : (v = t[20]);
  let y;
  if (t[21] !== s || t[22] !== c || t[23] !== l) {
    let e;
    (t[25] !== s || t[26] !== l
      ? ((e = (e) =>
          (0, $.jsx)(
            V.Item,
            {
              rightIconAsset: e.value === l ? K : void 0,
              subTextAllowWrap: !0,
              onSelect: () => {
                s(e.value);
              },
              SubText:
                e.description == null
                  ? void 0
                  : (0, $.jsx)(`div`, {
                      className: `pt-1 text-sm text-secondary`,
                      children: (0, $.jsx)(U, { ...e.description }),
                    }),
              children: (0, $.jsx)(`span`, { className: `text-sm`, children: (0, $.jsx)(U, { ...e.label }) }),
            },
            e.value ?? `model-default`,
          )),
        (t[25] = s),
        (t[26] = l),
        (t[27] = e))
      : (e = t[27]),
      (y = c.map(e)),
      (t[21] = s),
      (t[22] = c),
      (t[23] = l),
      (t[24] = y));
  } else y = t[24];
  let b;
  t[28] !== p || t[29] !== v || t[30] !== y
    ? ((b = (0, $.jsx)(de, {
        align: `end`,
        contentWidth: `panelWide`,
        disabled: p,
        triggerButton: v,
        children: y,
      })),
      (t[28] = p),
      (t[29] = v),
      (t[30] = y),
      (t[31] = b))
    : (b = t[31]);
  let x;
  return (
    t[32] !== m || t[33] !== h || t[34] !== b
      ? ((x = (0, $.jsx)(le, { label: m, description: h, control: b })),
        (t[32] = m),
        (t[33] = h),
        (t[34] = b),
        (t[35] = x))
      : (x = t[35]),
    x
  );
}
function or(e) {
  let t = (0, _r.c)(7),
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
      ? ((s = (0, $.jsx)(V.Item, {
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
function sr(e) {
  let t = (0, _r.c)(10),
    { children: n, error: r, lockReason: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = (0, $.jsx)(`div`, { children: n })), (t[0] = n), (t[1] = a));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o =
        i == null
          ? null
          : (0, $.jsxs)(`div`, {
              className: `inline-flex items-center gap-1 text-sm text-warning`,
              children: [
                (0, $.jsx)(ge, {
                  "aria-hidden": !1,
                  legacyIcon: en,
                  asset16: u,
                  legacyClassName: `icon-2xs`,
                }),
                (0, $.jsx)(`span`, { children: i }),
              ],
            })),
      (t[2] = i),
      (t[3] = o));
  let s;
  t[4] === r
    ? (s = t[5])
    : ((s = r == null ? null : (0, $.jsx)(`div`, { className: `text-sm text-danger`, children: r })),
      (t[4] = r),
      (t[5] = s));
  let c;
  return (
    t[6] !== a || t[7] !== o || t[8] !== s
      ? ((c = (0, $.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [a, o, s] })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function cr(e, t) {
  if (e == null) return [];
  let n = [];
  for (let r of e) {
    if (r.name.type !== `project`) continue;
    let e = lr(r.name.dotCodexFolder);
    n.push({
      key: `project:${e ?? r.name.dotCodexFolder}`,
      kind: `project`,
      label: t.formatMessage(
        {
          id: `settings.agent.configuration.scope.project`,
          defaultMessage: `{repoName}`,
          description: `Label for a project config scope in configuration settings`,
        },
        { repoName: ur(e ?? r.name.dotCodexFolder) },
      ),
      tooltipText: xt(r.name) ?? r.name.dotCodexFolder,
      filePath: xt(r.name),
      expectedVersion: r.version,
      workspaceRoot: e,
      layer: r,
    });
  }
  return n;
}
function lr(e) {
  return e.endsWith(`/.codex`) || e.endsWith(`\\.codex`) ? e.slice(0, -7) : null;
}
function ur(e) {
  return e.split(/[/\\]/).at(-1) || e;
}
function dr(e) {
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
    approvalPolicy: gr(t ?? null),
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
function fr(e, t) {
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
function pr({
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
      ? r?.kind !== `managed` && n != null && dt(n.name)
        ? e.formatMessage({
            id: `settings.agent.configuration.control.managed`,
            defaultMessage: `This value is managed by admin policy.`,
            description: `Message shown when a configuration control is managed by admin policy`,
          })
        : null
      : a)
  );
}
function mr(e) {
  return yr.find((t) => t.value === e) ?? br.find((t) => t.value === e) ?? null;
}
function hr(e) {
  return xr.find((t) => t.value === e) ?? null;
}
function gr(e) {
  return e === `untrusted` || e === `on-request` || e === `never` || e === `on-failure` ? e : null;
}
var _r, vr, $, yr, br, xr, Sr, Cr, wr;
function Tr() {
  return (Tr = e(() => {
    ((_r = h()),
      v(),
      A(),
      L(),
      G(),
      R(),
      O(),
      H(),
      Mt(),
      (vr = s()),
      C(),
      p(),
      Ht(),
      rt(),
      q(),
      Sn(),
      Tn(),
      Ct(),
      It(),
      kn(),
      we(),
      Me(),
      _e(),
      D(),
      j(),
      he(),
      x(),
      W(),
      Nt(),
      mt(),
      Ae(),
      Zt(),
      et(),
      re(),
      $t(),
      o(),
      Yt(),
      S(),
      wt(),
      qt(),
      Ne(),
      Kt(),
      k(),
      r(),
      at(),
      nt(),
      Qt(),
      Bn(),
      Gn(),
      Qn(),
      un(),
      Qe(),
      ft(),
      ln(),
      pe(),
      Be(),
      P(),
      Pe(),
      kt(),
      Gt(),
      ut(),
      i(),
      ($ = l()),
      (yr = [
        { value: `on-request`, label: X.onRequest, description: `Ask when escalation is requested` },
        {
          value: `never`,
          label: X.never,
          description: `Blocked actions fail instead of requesting approval`,
        },
      ]),
      (br = [
        { value: `on-failure`, label: X.onFailure },
        { value: `untrusted`, label: X.untrusted },
      ]),
      (xr = [
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
      (Sr = [
        { value: `disabled`, label: X.webSearchDisabled, description: X.webSearchDisabledDescription },
        { value: `cached`, label: X.webSearchCached, description: X.webSearchCachedDescription },
        { value: `indexed`, label: X.webSearchIndexed, description: X.webSearchIndexedDescription },
        { value: `live`, label: X.webSearchLive, description: X.webSearchLiveDescription },
      ]),
      (Cr = [
        { value: null, label: X.modelDefault, description: null },
        { value: `low`, label: X.modelVerbosityLow, description: X.modelVerbosityLowDescription },
        { value: `medium`, label: X.modelVerbosityMedium, description: X.modelVerbosityMediumDescription },
        { value: `high`, label: X.modelVerbosityHigh, description: X.modelVerbosityHighDescription },
      ]),
      (wr = [
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
function Er() {
  let e = (0, Dr.c)(13),
    [t] = w(),
    n = te(Ft),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { name: `work.cloud-orchestration.preferences` }), (e[0] = r))
    : (r = e[0]);
  let i = oe(Rt, r),
    a = te(Fe),
    o = te(J),
    [s, c] = (0, Or.useState)(null),
    l;
  e[1] !== n || e[2] !== t || e[3] !== s
    ? ((l = s ?? (t.get(`mode`) === `work` ? `work` : n)), (e[1] = n), (e[2] = t), (e[3] = s), (e[4] = l))
    : (l = e[4]);
  let u = l;
  if (!i.isCapable || a.status !== `allowed`) {
    let t;
    return (
      e[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, kr.jsx)($n, {})), (e[5] = t)) : (t = e[5]),
      t
    );
  }
  if (!o) {
    let t;
    return (
      e[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, kr.jsx)(gn, {})), (e[6] = t)) : (t = e[6]),
      t
    );
  }
  let d;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, kr.jsx)(U, {
        id: `settings.configuration.workDefaults`,
        defaultMessage: `Work`,
        description: `Account-backed defaults for new Work tasks in the configuration scope dropdown`,
      })),
      (e[7] = d))
    : (d = e[7]);
  let f = u === `work`,
    p,
    m,
    h;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = () => c(`work`)),
      (m = () => c(`codex`)),
      (h = (0, kr.jsx)(hn, {})),
      (e[8] = p),
      (e[9] = m),
      (e[10] = h))
    : ((p = e[8]), (m = e[9]), (h = e[10]));
  let g;
  return (
    e[11] === f
      ? (g = e[12])
      : ((g = (0, kr.jsx)($n, {
          workConfiguration: { label: d, selected: f, onSelect: p, onSelectCodex: m, content: h },
        })),
        (e[11] = f),
        (e[12] = g)),
    g
  );
}
var Dr, Or, kr;
function Ar() {
  return (Ar = e(() => {
    ((Dr = h()), O(), (Or = s()), C(), p(), St(), q(), Tr(), Et(), mn(), (kr = l()));
  }))();
}
Ar();
export { Er as ConfigurationPanel };
//# sourceMappingURL=configuration-panel-85ed465329c4.js.map
