const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./external-agent-config-import-flow-b0f1d5f24a3f.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  DB as i,
  EO as a,
  FBt as o,
  FTt as s,
  HC as c,
  HO as l,
  HTt as u,
  ITt as d,
  JO as f,
  Jm as p,
  LNt as m,
  MD as h,
  MNt as g,
  ND as _,
  NNt as v,
  OB as y,
  OFt as b,
  PBt as x,
  Qst as S,
  SCt as C,
  SO as w,
  TO as T,
  Ty as E,
  Uz as D,
  VC as O,
  VTt as k,
  Vrt as A,
  Wz as j,
  XOt as M,
  Xj as N,
  Y3 as ee,
  Yst as P,
  Z3 as F,
  ZSt as I,
  _0 as te,
  ast as L,
  ck as R,
  dM as z,
  e6 as B,
  iCt as V,
  ist as ne,
  kFt as H,
  mCt as U,
  mQ as re,
  nCt as W,
  okt as ie,
  pQ as ae,
  qm as oe,
  qrt as se,
  rk as G,
  sct as K,
  tk as q,
  tkt as J,
  uk as ce,
  v0 as le,
  wy as ue,
  xO as de,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ft as fe,
  $Pt as pe,
  AGt as me,
  BPt as he,
  Bst as ge,
  C4 as _e,
  Cjr as ve,
  Cqt as ye,
  Djr as be,
  Dqt as xe,
  Dxt as Se,
  Ejr as Ce,
  Ext as we,
  GPt as Te,
  Hst as Ee,
  Hxt as De,
  IAr as Oe,
  JPt as ke,
  Jst as Ae,
  KBr as je,
  KPt as Me,
  Kst as Ne,
  LPt as Pe,
  M6t as Fe,
  MGt as Ie,
  N6t as Le,
  Nkn as Re,
  Ntn as ze,
  Ptn as Be,
  QFt as Ve,
  Rxt as He,
  S4n as Ue,
  Skn as We,
  Tjr as Ge,
  Tkn as Ke,
  Txt as qe,
  UAr as Je,
  UPt as Ye,
  Uxt as Xe,
  VPt as Y,
  Vst as Ze,
  WPt as Qe,
  Wxt as $e,
  XPt as et,
  YPt as tt,
  Yst as nt,
  aFt as rt,
  bFt as it,
  bjr as at,
  cFt as ot,
  cGt as st,
  dFt as ct,
  dSt as lt,
  eFt as ut,
  eIt as dt,
  eSt as ft,
  fFt as pt,
  fSt as X,
  fVr as mt,
  hkn as ht,
  iFt as gt,
  iSt as _t,
  imr as vt,
  jcn as yt,
  kxt as bt,
  lFt as xt,
  nFt as St,
  nnt as Ct,
  oFt as wt,
  qxt as Tt,
  rFt as Et,
  rSt as Dt,
  rmr as Ot,
  rnt as kt,
  sFt as At,
  sGt as jt,
  tFt as Mt,
  uFt as Nt,
  vBr as Pt,
  vFt as Ft,
  vkn as It,
  vxt as Lt,
  w4 as Rt,
  w4n as zt,
  wcn as Bt,
  wkn as Vt,
  xjr as Ht,
  yBr as Ut,
  yFt as Wt,
  yVr as Gt,
  yjr as Kt,
  ykn as qt,
  yxt as Jt,
  zxt as Yt,
} from "./app-initial-ad16eaadf81f.js";
import { ml as Xt, pl as Zt } from "./app-primary-3e00728c2a4c.js";
import { i as Qt, n as $t, o as en, r as tn, s as nn } from "./onboarding-mail-provider-a8dcd0c12760.js";
import {
  a as rn,
  c as an,
  l as on,
  m as sn,
  o as cn,
  p as ln,
  u as un,
  x as dn,
  y as fn,
} from "./sidebar-onboarding-checklist-task-config-e8a3ac49ae4c.js";
import {
  At as pn,
  Nt as mn,
  Ot as hn,
  c as gn,
  jt as _n,
  kt as vn,
  o as yn,
  r as bn,
} from "./tasks-fe81dbed229b.js";
import {
  c as xn,
  d as Sn,
  f as Cn,
  i as wn,
  l as Tn,
  n as En,
  p as Dn,
  r as On,
  s as kn,
  t as An,
  u as jn,
} from "./use-imported-setup-opportunity-53da455c18d8.js";
import { r as Mn, t as Nn } from "./task-icon-1c5936088108.js";
function Pn({
  scope: e,
  accountId: t,
  checklistStateKey: n = t,
  detectedClaudeImportItems: r,
  importSessionLimits: i,
  intl: a,
  item: o,
  restoreFocus: s,
  startNewConversation: c,
  statsigClient: l,
  navigateToLocalConversation: u,
}) {
  switch (o.action) {
    case `create_project`:
      return (document.querySelector(Ue.sidebarProjectCreate)?.click(), Promise.resolve());
    case `import_claude`:
      return r.length === 0 || Se()
        ? Promise.resolve()
        : b(
            async () => {
              let { openExternalAgentImport: e } = await import(
                `./external-agent-config-import-flow-b0f1d5f24a3f.js`
              );
              return { openExternalAgentImport: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5]),
            import.meta.url,
          )
            .then(async ({ openExternalAgentImport: t }) => {
              let r = { hostId: P, includeHome: !0, providers: De(!1), sessionLimits: i },
                a = [...we(r), `cached`];
              await e.queryClient.cancelQueries({ queryKey: a, exact: !0 });
              let { items: o } = await e.queryClient.fetchQuery({
                queryKey: a,
                queryFn: () => qe({ ...r, cache: `refresh` }),
                staleTime: 0,
              });
              await t(e, {
                hostId: P,
                items: o,
                onImportSuccess: () => {
                  Y(e, n, `claude_import`);
                },
                restoreFocus: s,
                sessionLimits: i,
                source: `onboarding_checklist`,
              });
            })
            .catch(() => void 0);
    case `enable_notifications`: {
      let t = Qe(e.get(Mt), n),
        r = e.get(Et, n);
      return (
        !et(t, `enable_notifications`) && r == null && (gt(e, n), e.set(dn, !0)),
        In(e),
        Promise.resolve()
      );
    }
    case `start_prompt`: {
      let r = Qe(e.get(Mt), n)?.variant,
        i = Cn(o, a),
        s = kn(o),
        d = o.pluginMentions?.map(({ pluginId: e }) => e);
      return o.isAutoSubmitEnabled !== !1 && at(l, `1984032627`).get(`prompt_action`, null) === `submit`
        ? Fn(e, {
            elicitationPluginIds: d,
            instructions: s,
            prompt: i,
            title: typeof o.message == `string` ? o.message : a.formatMessage(o.message),
          })
            .then(async (t) => {
              if (t.status !== `created`) throw Ve(e, t);
              let a = t.conversationId,
                s = Ve(e, t);
              if (s != null) throw (u(a), s);
              let c;
              try {
                let { turn: t } = await he(e, P, a, {
                  request: {
                    turnTrigger: `onboarding_checklist`,
                    threadId: a,
                    input: [{ type: `text`, text: i, text_elements: [] }],
                    serviceTier: await kt(e, P, null),
                  },
                });
                c = t.id;
              } catch (t) {
                throw (await Ie({ scope: e, archived: !0, hostId: P, threadId: a }).catch(() => void 0), t);
              }
              (pt(e, o.id, a, c, r), Y(e, n, o.id), u(a));
            })
            .catch((t) => {
              e.get(se).danger(Zt(t, a), {
                errorAnalytics: {
                  toastId: `sidebarOnboardingChecklistActions.startSidebarOnboardingChecklistItem`,
                },
              });
            })
        : (Je(e, `work`),
          c({
            activeProject: null,
            prefillComposerMode: `local`,
            prefillPrompt: i,
            sidebarOnboardingChecklistCompletionOnSubmit: {
              accountId: t,
              variant: r,
              checklistStateKey: n === t ? void 0 : n,
              additionalDeveloperInstructions: s,
              itemId: o.id,
              elicitationPluginIds: d,
            },
          }),
          Promise.resolve());
    }
  }
}
async function Fn(e, { elicitationPluginIds: t, instructions: n, prompt: r, title: i }) {
  let a = await ze([`~`], { prompt: r });
  if (a.cwd == null) throw Error(`Missing projectless thread cwd`);
  return dt(e, P, {
    additionalDeveloperInstructions: n || void 0,
    collaborationMode: null,
    config:
      t == null || t.length === 0
        ? void 0
        : {
            [mt]: !0,
            "features.auth_elicitation": !0,
            "features.tool_suggest": !0,
            "tool_suggest.discoverables": t.map((e) => ({ type: `plugin`, id: e })),
          },
    cwd: a.cwd,
    initialTitle: i,
    input: [],
    projectlessOutputDirectory: a.projectlessOutputDirectory,
    serviceTier: await kt(e, P, null),
    skipAutoTitleGeneration: !0,
    threadSource: `onboarding_checklist`,
    useAppServerPermissionDefault: !0,
    workspaceKind: `projectless`,
    workspaceRoots: a.workspaceRoots,
  });
}
function In(e) {
  ne.systemPermissions
    ?.openNotificationSettings()
    .finally(() => {
      e.set(dn, !1);
    })
    .catch(() => void 0);
}
function Ln() {
  return (Ln = e(() => {
    (K(),
      Gt(),
      me(),
      zt(),
      fe(),
      Pe(),
      Ct(),
      Xt(),
      Oe(),
      A(),
      bt(),
      Xe(),
      Be(),
      L(),
      je(),
      Ht(),
      Dn(),
      At(),
      Me(),
      fn(),
      sn(),
      H());
  }))();
}
function Rn(e) {
  let t = (0, Vn.c)(5),
    { installedPlugins: n, mailProvider: r, snapshot: i, task: a } = e,
    o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a
      ? ((o =
          i == null
            ? (0, Z.jsx)(zn, { installedPlugins: n, mailProvider: r, task: a })
            : (0, Z.jsx)(Bn, { installedPlugins: n, mailProvider: r, snapshot: i, task: a })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function zn(e) {
  let t = (0, Vn.c)(21),
    { installedPlugins: n, mailProvider: r, task: a } = e,
    o = ie(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { disableExposureLog: !0 }), (t[0] = s))
    : (s = t[0]);
  let c = pn(s),
    l,
    u,
    d,
    f,
    p;
  if (t[1] !== c || t[2] !== n || t[3] !== o || t[4] !== r || t[5] !== a) {
    p = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((u = bn(a, c, o.locale, r)), u == null)) {
        p = null;
        break bb0;
      }
      let e = gn(u) ? u.pluginName : null;
      ((l = e == null ? null : (n.find((t) => t.plugin.name === e) ?? null)),
        (d = u.option.label),
        (f = o.formatMessage(d)));
    }
    ((t[1] = c),
      (t[2] = n),
      (t[3] = o),
      (t[4] = r),
      (t[5] = a),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p));
  } else ((l = t[6]), (u = t[7]), (d = t[8]), (f = t[9]), (p = t[10]));
  if (p !== Symbol.for(`react.early_return_sentinel`)) return p;
  let m = f,
    h;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(i, { className: `mt-0.5 shrink-0 text-default`, asset: oe })), (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] === d
    ? (g = t[13])
    : ((g = (0, Z.jsx)(`span`, {
        className: `min-w-0 flex-1 text-sm leading-5 text-tertiary line-through`,
        children: (0, Z.jsx)(J, { ...d }),
      })),
      (t[12] = d),
      (t[13] = g));
  let _;
  t[14] !== l || t[15] !== u
    ? ((_ = (0, Z.jsx)(Nn, {
        appPlugin: l,
        className: `mt-0.5 size-4 shrink-0 object-contain opacity-40`,
        entry: u,
      })),
      (t[14] = l),
      (t[15] = u),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] !== m || t[18] !== g || t[19] !== _
      ? ((v = (0, Z.jsxs)(`button`, {
          type: `button`,
          "aria-label": m,
          "aria-pressed": !0,
          className: `flex cursor-default items-start gap-2 sidebar-item p-1.5 text-start`,
          disabled: !0,
          children: [h, g, _],
        })),
        (t[17] = m),
        (t[18] = g),
        (t[19] = _),
        (t[20] = v))
      : (v = t[20]),
    v
  );
}
function Bn(e) {
  let t = (0, Vn.c)(19),
    { installedPlugins: n, mailProvider: r, snapshot: a, task: o } = e,
    s;
  t[0] !== n || t[1] !== a.iconAppId
    ? ((s = a.iconAppId == null ? null : (n.find((e) => e.plugin.name === a.iconAppId) ?? null)),
      (t[0] = n),
      (t[1] = a.iconAppId),
      (t[2] = s))
    : (s = t[2]);
  let c = s,
    l;
  t[3] !== r || t[4] !== a.iconAppId || t[5] !== o
    ? ((l = a.iconAppId == null ? bn(o, hn, `en`, r) : null),
      (t[3] = r),
      (t[4] = a.iconAppId),
      (t[5] = o),
      (t[6] = l))
    : (l = t[6]);
  let u = l,
    d;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(i, { className: `mt-0.5 shrink-0 text-default`, asset: oe })), (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] === a.label
    ? (f = t[9])
    : ((f = (0, Z.jsx)(`span`, {
        className: `min-w-0 flex-1 text-sm leading-5 text-tertiary line-through`,
        children: a.label,
      })),
      (t[8] = a.label),
      (t[9] = f));
  let p;
  t[10] !== c?.logoDarkPath || t[11] !== c?.logoPath || t[12] !== u || t[13] !== a.iconAppId
    ? ((p =
        a.iconAppId == null
          ? u == null
            ? null
            : (0, Z.jsx)(Nn, {
                appPlugin: null,
                className: `mt-0.5 size-4 shrink-0 object-contain opacity-40`,
                entry: u,
              })
          : (0, Z.jsx)(Fe, {
              alt: ``,
              className: `mt-0.5 size-4 shrink-0 object-contain opacity-40`,
              knownAppId: a.iconAppId,
              logoDarkUrl: c?.logoDarkPath,
              logoUrl: c?.logoPath,
              fallback: (0, Z.jsx)(i, {
                className: `mt-0.5 shrink-0 opacity-40`,
                "aria-hidden": !1,
                asset: re,
              }),
            })),
      (t[10] = c?.logoDarkPath),
      (t[11] = c?.logoPath),
      (t[12] = u),
      (t[13] = a.iconAppId),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== a.label || t[16] !== f || t[17] !== p
      ? ((m = (0, Z.jsxs)(`button`, {
          type: `button`,
          "aria-label": a.label,
          "aria-pressed": !0,
          className: `flex cursor-default items-start gap-2 sidebar-item p-1.5 text-start`,
          disabled: !0,
          children: [d, f, p],
        })),
        (t[15] = a.label),
        (t[16] = f),
        (t[17] = p),
        (t[18] = m))
      : (m = t[18]),
    m
  );
}
var Vn, Z;
function Hn() {
  return (Hn = e(() => {
    ((Vn = x()), p(), ae(), M(), Le(), y(), vn(), Mn(), yn(), (Z = m()));
  }))();
}
function Un(e) {
  let n = (0, Wn.c)(21),
    {
      isCompleted: r,
      isLoading: a,
      isDisabled: o,
      label: s,
      reducedMotion: c,
      trailingIcon: l,
      onClick: u,
    } = e,
    f = o ? `cursor-default` : `cursor-interaction hover:bg-primary-ghost-hover`,
    p;
  n[0] === f
    ? (p = n[1])
    : ((p = g(
        `sidebar-item flex w-full items-start gap-2 p-1.5 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-border`,
        f,
      )),
      (n[0] = f),
      (n[1] = p));
  let m = !c && `position`,
    h;
  n[2] !== r || n[3] !== a
    ? ((h = a
        ? (0, Gn.jsx)(t, {
            className: `icon-xs scale-[1.2]`,
            containerClassName: `mt-0.5 shrink-0 text-tertiary`,
          })
        : (0, Gn.jsx)(i, {
            className: g(`mt-0.5 shrink-0`, r ? `text-default` : `text-tertiary`),
            asset: r ? oe : O,
          })),
      (n[2] = r),
      (n[3] = a),
      (n[4] = h))
    : (h = n[4]);
  let _ = r && `text-tertiary line-through`,
    v;
  n[5] === _ ? (v = n[6]) : ((v = g(`min-w-0 flex-1 text-sm leading-5`, _)), (n[5] = _), (n[6] = v));
  let y;
  n[7] !== s || n[8] !== v
    ? ((y = (0, Gn.jsx)(`span`, { className: v, children: s })), (n[7] = s), (n[8] = v), (n[9] = y))
    : (y = n[9]);
  let b;
  return (
    n[10] !== r ||
    n[11] !== o ||
    n[12] !== a ||
    n[13] !== s ||
    n[14] !== u ||
    n[15] !== p ||
    n[16] !== m ||
    n[17] !== h ||
    n[18] !== y ||
    n[19] !== l
      ? ((b = (0, Gn.jsxs)(d.button, {
          type: `button`,
          "aria-label": s,
          "aria-busy": a,
          "aria-pressed": r,
          className: p,
          disabled: o,
          layout: m,
          transition: N,
          onClick: u,
          children: [h, y, l],
        })),
        (n[10] = r),
        (n[11] = o),
        (n[12] = a),
        (n[13] = s),
        (n[14] = u),
        (n[15] = p),
        (n[16] = m),
        (n[17] = h),
        (n[18] = y),
        (n[19] = l),
        (n[20] = b))
      : (b = n[20]),
    b
  );
}
var Wn, Gn;
function Kn() {
  return (Kn = e(() => {
    ((Wn = x()), p(), c(), v(), s(), y(), B(), z(), (Gn = m()));
  }))();
}
function qn(e) {
  let t = (0, Jn.c)(20),
    { appByAmbientSuggestionAppId: n, className: r, installedPlugins: i, item: a } = e,
    o,
    s,
    c,
    l,
    u,
    d;
  if (t[0] !== n || t[1] !== i || t[2] !== a) {
    d = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((s = xn(a)), s == null)) {
        d = null;
        break bb0;
      }
      ((c = i?.find((e) => e.plugin.name === s)), (o = Fe), (l = ``), (u = n?.get(s)));
    }
    ((t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d));
  } else ((o = t[3]), (s = t[4]), (c = t[5]), (l = t[6]), (u = t[7]), (d = t[8]));
  if (d !== Symbol.for(`react.early_return_sentinel`)) return d;
  let f = c?.composerIconPath ?? c?.logoDarkPath,
    p = c?.composerIconPath ?? c?.logoPath,
    m;
  t[9] === r
    ? (m = t[10])
    : ((m = (0, Yn.jsx)(h, { "aria-hidden": !0, className: r })), (t[9] = r), (t[10] = m));
  let g;
  return (
    t[11] !== o ||
    t[12] !== s ||
    t[13] !== r ||
    t[14] !== l ||
    t[15] !== u ||
    t[16] !== f ||
    t[17] !== p ||
    t[18] !== m
      ? ((g = (0, Yn.jsx)(o, {
          alt: l,
          appInfo: u,
          className: r,
          knownAppId: s,
          logoDarkUrl: f,
          logoUrl: p,
          fallback: m,
        })),
        (t[11] = o),
        (t[12] = s),
        (t[13] = r),
        (t[14] = l),
        (t[15] = u),
        (t[16] = f),
        (t[17] = p),
        (t[18] = m),
        (t[19] = g))
      : (g = t[19]),
    g
  );
}
var Jn, Yn;
function Xn() {
  return (Xn = e(() => {
    ((Jn = x()), Le(), _(), Dn(), (Yn = m()));
  }))();
}
function Zn(e, t, n) {
  let r = (0, Qn.c)(5),
    i,
    a;
  (r[0] !== t || r[1] !== e || r[2] !== n
    ? ((i = () => {
        Nt(e, t, n);
      }),
      (a = [t, e, n]),
      (r[0] = t),
      (r[1] = e),
      (r[2] = n),
      (r[3] = i),
      (r[4] = a))
    : ((i = r[3]), (a = r[4])),
    (0, $n.useEffect)(i, a));
}
var Qn, $n;
function er() {
  return (er = e(() => {
    ((Qn = x()), ($n = o()), At());
  }))();
}
function tr(e) {
  let t = (0, nr.c)(15),
    {
      installedPlugins: r,
      isCompleted: i,
      isLoading: a,
      item: o,
      label: s,
      reducedMotion: c,
      onClick: l,
      variant: u,
    } = e;
  Zn(n(S), o.id, u);
  let d;
  t[0] === o ? (d = t[1]) : ((d = xn(o)), (t[0] = o), (t[1] = d));
  let f = d,
    p = i && o.action !== `enable_notifications`,
    m;
  t[2] !== f || t[3] !== r || t[4] !== i || t[5] !== o
    ? ((m =
        f == null
          ? null
          : (0, rr.jsx)(qn, {
              className: g(`mt-0.5 size-4 shrink-0`, i && `opacity-40`),
              installedPlugins: r,
              item: o,
            })),
      (t[2] = f),
      (t[3] = r),
      (t[4] = i),
      (t[5] = o),
      (t[6] = m))
    : (m = t[6]);
  let h;
  return (
    t[7] !== i || t[8] !== p || t[9] !== a || t[10] !== s || t[11] !== l || t[12] !== c || t[13] !== m
      ? ((h = (0, rr.jsx)(Un, {
          isCompleted: i,
          isLoading: a,
          isDisabled: p,
          label: s,
          reducedMotion: c,
          onClick: l,
          trailingIcon: m,
        })),
        (t[7] = i),
        (t[8] = p),
        (t[9] = a),
        (t[10] = s),
        (t[11] = l),
        (t[12] = c),
        (t[13] = m),
        (t[14] = h))
      : (h = t[14]),
    h
  );
}
var nr, rr;
function ir() {
  return (ir = e(() => {
    ((nr = x()), v(), I(), Kn(), r(), Xn(), Dn(), er(), (rr = m()));
  }))();
}
function ar(e) {
  let t = (0, or.c)(64),
    {
      children: n,
      beforeHeader: r,
      title: i,
      titleButtonRef: a,
      collapsed: o,
      completedCount: s,
      totalCount: c,
      reducedMotion: l,
      onToggleCollapsed: u,
      onDismiss: f,
    } = e,
    p = ie(),
    m;
  t[0] !== s || t[1] !== c
    ? ((m = Math.round((s / c) * 100)), (t[0] = s), (t[1] = c), (t[2] = m))
    : (m = t[2]);
  let h = m,
    _;
  t[3] !== o || t[4] !== p
    ? ((_ = p.formatMessage(
        o
          ? {
              id: `sidebarOnboardingChecklist.expandChecklist`,
              defaultMessage: `Expand checklist`,
              description: `Accessible label for expanding the onboarding checklist`,
            }
          : {
              id: `sidebarOnboardingChecklist.collapseChecklist`,
              defaultMessage: `Collapse checklist`,
              description: `Accessible label for collapsing the onboarding checklist`,
            },
      )),
      (t[3] = o),
      (t[4] = p),
      (t[5] = _))
    : (_ = t[5]);
  let v = _,
    y;
  t[6] !== s || t[7] !== p || t[8] !== c
    ? ((y = p.formatMessage(
        {
          id: `sidebarOnboardingChecklist.progressCountAriaLabel`,
          defaultMessage: `Onboarding progress: {progressCount} of {totalCount}`,
          description: `Accessible label for the onboarding checklist progress`,
        },
        { progressCount: s, totalCount: c },
      )),
      (t[6] = s),
      (t[7] = p),
      (t[8] = c),
      (t[9] = y))
    : (y = t[9]);
  let b = y,
    x;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = g(
        `ease-basic grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-1 transition-all duration-basic motion-reduce:transition-none`,
      )),
      (t[10] = x))
    : (x = t[10]);
  let S = o ? `col-span-full pe-8` : `col-start-1 ps-1`,
    C;
  t[11] === S
    ? (C = t[12])
    : ((C = g(
        `row-start-1 flex min-w-0 cursor-interaction items-center gap-2 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-border`,
        S,
      )),
      (t[11] = S),
      (t[12] = C));
  let w = !o,
    E;
  t[13] !== o || t[14] !== b || t[15] !== h || t[16] !== l
    ? ((E = o
        ? (0, Q.jsx)(`span`, {
            "aria-label": b,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": h,
            className: `inline-flex size-3.5 shrink-0 items-center justify-center text-tertiary`,
            role: `progressbar`,
            children: (0, Q.jsx)(de, {
              animateOnMount: !0,
              percent: h,
              progressClassName: `text-codex-icon`,
              reducedMotion: l,
              size: 14,
              transitionDurationMs: 300,
            }),
          })
        : null),
      (t[13] = o),
      (t[14] = b),
      (t[15] = h),
      (t[16] = l),
      (t[17] = E))
    : (E = t[17]);
  let D;
  t[18] === i
    ? (D = t[19])
    : ((D = (0, Q.jsx)(Ae, { className: `truncate`, children: i })), (t[18] = i), (t[19] = D));
  let O;
  t[20] !== u || t[21] !== C || t[22] !== w || t[23] !== E || t[24] !== D || t[25] !== i || t[26] !== a
    ? ((O = (0, Q.jsxs)(`button`, {
        ref: a,
        type: `button`,
        className: C,
        "aria-label": i,
        "aria-expanded": w,
        onClick: u,
        children: [E, D],
      })),
      (t[20] = u),
      (t[21] = C),
      (t[22] = w),
      (t[23] = E),
      (t[24] = D),
      (t[25] = i),
      (t[26] = a),
      (t[27] = O))
    : (O = t[27]);
  let A;
  t[28] !== s || t[29] !== c
    ? ((A = (0, Q.jsx)(`span`, {
        className: `pointer-events-none col-start-2 row-start-1 justify-self-end pe-1 text-xs leading-5 font-normal text-tertiary tabular-nums group-hover:opacity-0 group-has-[[data-state=open]]:opacity-0`,
        children: (0, Q.jsx)(J, {
          id: `sidebarOnboardingChecklist.progressCount`,
          defaultMessage: `{progressCount} of {totalCount}`,
          description: `Progress text for the onboarding checklist`,
          values: { progressCount: s, totalCount: c },
        }),
      })),
      (t[28] = s),
      (t[29] = c),
      (t[30] = A))
    : (A = t[30]);
  let j;
  t[31] !== o || t[32] !== p || t[33] !== f
    ? ((j = o
        ? null
        : (0, Q.jsx)(q, {
            align: `start`,
            contentWidth: `sm`,
            triggerButton: (0, Q.jsx)(ue, {
              label: p.formatMessage({
                id: `sidebarOnboardingChecklist.checklistActions`,
                defaultMessage: `Checklist actions`,
                description: `Accessible label for the onboarding checklist actions menu`,
              }),
              size: `xs`,
            }),
            children: (0, Q.jsx)(G.Item, {
              leftIconAsset: te,
              onSelect: f,
              children: (0, Q.jsx)(J, {
                id: `sidebarOnboardingChecklist.hideSetup`,
                defaultMessage: `Hide setup`,
                description: `Menu item label for hiding setup from the sidebar`,
              }),
            }),
          })),
      (t[31] = o),
      (t[32] = p),
      (t[33] = f),
      (t[34] = j))
    : (j = t[34]);
  let M = !o,
    N = o && `-rotate-90`,
    P;
  t[35] === N
    ? (P = t[36])
    : ((P = g(`ease-basic icon-2xs transition-transform duration-basic motion-reduce:transition-none`, N)),
      (t[35] = N),
      (t[36] = P));
  let F;
  t[37] === P
    ? (F = t[38])
    : ((F = (0, Q.jsx)(T, { "aria-hidden": !0, className: P })), (t[37] = P), (t[38] = F));
  let I;
  t[39] !== u || t[40] !== M || t[41] !== F || t[42] !== v
    ? ((I = (0, Q.jsx)(ee, {
        "aria-label": v,
        "aria-expanded": M,
        className: `size-6 rounded-md`,
        color: `ghost`,
        size: `icon`,
        uniform: !0,
        onClick: u,
        children: F,
      })),
      (t[39] = u),
      (t[40] = M),
      (t[41] = F),
      (t[42] = v),
      (t[43] = I))
    : (I = t[43]);
  let L;
  t[44] !== j || t[45] !== I
    ? ((L = (0, Q.jsxs)(`div`, {
        className: `pointer-events-none col-start-2 row-start-1 flex shrink-0 items-center gap-0 justify-self-end opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 has-[[data-state=open]]:pointer-events-auto has-[[data-state=open]]:opacity-100`,
        children: [j, I],
      })),
      (t[44] = j),
      (t[45] = I),
      (t[46] = L))
    : (L = t[46]);
  let R;
  t[47] !== o || t[48] !== O || t[49] !== A || t[50] !== L
    ? ((R = (0, Q.jsxs)(Ne, { compact: o, className: x, children: [O, A, L] })),
      (t[47] = o),
      (t[48] = O),
      (t[49] = A),
      (t[50] = L),
      (t[51] = R))
    : (R = t[51]);
  let z;
  t[52] !== n || t[53] !== o || t[54] !== b || t[55] !== h
    ? ((z = o
        ? null
        : (0, Q.jsx)(
            d.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: `auto`, opacity: 1, transitionEnd: { overflow: `visible` } },
              exit: { height: 0, opacity: 0, overflow: `hidden` },
              transition: sr,
              className: `overflow-hidden`,
              children: (0, Q.jsxs)(`div`, {
                className: `flex flex-col px-2 pb-2`,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: `px-2 pb-3`,
                    children: (0, Q.jsx)(`div`, {
                      "aria-label": b,
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                      "aria-valuenow": h,
                      className: `h-1.5 overflow-hidden rounded-full bg-text/10`,
                      role: `progressbar`,
                      children: (0, Q.jsx)(`div`, {
                        className: `h-full rounded-full bg-primary-solid transition-[width] duration-relaxed ease-enter motion-reduce:transition-none`,
                        style: { width: `${h}%` },
                      }),
                    }),
                  }),
                  n,
                ],
              }),
            },
            `sidebar-onboarding-checklist-content`,
          )),
      (t[52] = n),
      (t[53] = o),
      (t[54] = b),
      (t[55] = h),
      (t[56] = z))
    : (z = t[56]);
  let B;
  t[57] === z ? (B = t[58]) : ((B = (0, Q.jsx)(k, { initial: !1, children: z })), (t[57] = z), (t[58] = B));
  let V;
  return (
    t[59] !== r || t[60] !== R || t[61] !== B || t[62] !== i
      ? ((V = (0, Q.jsxs)(Ee, { "aria-label": i, children: [r, R, B] })),
        (t[59] = r),
        (t[60] = R),
        (t[61] = B),
        (t[62] = i),
        (t[63] = V))
      : (V = t[63]),
    V
  );
}
var or, Q, sr;
function cr() {
  return (cr = e(() => {
    ((or = x()),
      le(),
      v(),
      u(),
      s(),
      M(),
      F(),
      R(),
      E(),
      w(),
      a(),
      nt(),
      z(),
      (Q = m()),
      (sr = { duration: 0.15, ease: N.ease }));
  }))();
}
function lr(e) {
  let t = (0, ur.c)(5),
    r,
    i;
  (t[0] === e ? ((r = t[1]), (i = t[2])) : (({ variant: i, ...r } = e), (t[0] = e), (t[1] = r), (t[2] = i)),
    Zn(n(S), void 0, i));
  let a;
  return (t[3] === r ? (a = t[4]) : ((a = (0, dr.jsx)(ar, { ...r })), (t[3] = r), (t[4] = a)), a);
}
var ur, dr;
function fr() {
  return (fr = e(() => {
    ((ur = x()), I(), cr(), r(), er(), (dr = m()));
  }))();
}
function pr(e) {
  let t = (0, mr.c)(8),
    { initialTab: r, variant: a } = e,
    o = n(S);
  Zn(o, gr, a);
  let s;
  t[0] !== r || t[1] !== o || t[2] !== a
    ? ((s = () => {
        (ct(o, gr, a), wn(o, { hostId: P, initialTab: r }));
      }),
      (t[0] = r),
      (t[1] = o),
      (t[2] = a),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, hr.jsx)(i, { className: `mt-0.5 shrink-0 text-tertiary`, asset: O })), (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, hr.jsx)(`span`, {
        className: `min-w-0 flex-1 text-sm leading-5 select-none`,
        children: (0, hr.jsx)(J, {
          id: `sidebarOnboardingChecklist.finishConnectingImportedTools`,
          defaultMessage: `Connect imported tools`,
          description: `Onboarding checklist item for finishing setup of imported tools`,
        }),
      })),
      (t[5] = l))
    : (l = t[5]);
  let u;
  return (
    t[6] === s
      ? (u = t[7])
      : ((u = (0, hr.jsxs)(`button`, {
          className: `flex w-full cursor-interaction items-start gap-2 rounded-lg p-1.5 text-start hover:bg-primary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-border`,
          type: `button`,
          onClick: s,
          children: [c, l],
        })),
        (t[6] = s),
        (t[7] = u)),
    u
  );
}
var mr, hr, gr;
function _r() {
  return (_r = e(() => {
    ((mr = x()),
      c(),
      I(),
      M(),
      y(),
      On(),
      r(),
      je(),
      At(),
      er(),
      (hr = m()),
      (gr = `finish_connecting_imported_tools`));
  }))();
}
var vr, yr, br;
function xr() {
  return (xr = e(() => {
    (I(),
      L(),
      r(),
      Wt(),
      Me(),
      sn(),
      (vr = 1e3),
      (yr = 6e4),
      (br = U(S, (e, { get: t, scope: n }) => {
        let r = ne.systemPermissions,
          i = Qe(t(Mt), e),
          a = t(Et, e),
          o =
            i?.notificationPermissionItemIncluded == null &&
            i?.items.some((e) => e.id === `enable_notifications` && it(e)) === !0;
        return {
          enabled: r != null && (o || (a != null && !et(i, `enable_notifications`))),
          queryFn: async () => {
            let t;
            return r == null
              ? null
              : ((t = await r.getNotificationPermissionStatus()),
                ke(n, e, t),
                t === `enabled` &&
                  n.get(Et, e) != null &&
                  !et(Qe(n.get(Mt), e), `enable_notifications`) &&
                  Y(n, e, `enable_notifications`),
                t);
          },
          queryKey: [`sidebar-onboarding-checklist`, `notifications-enabled`, e],
          refetchInterval: () => {
            let t = n.get(Et, e);
            return t != null && Date.now() - t < yr && vr;
          },
          refetchIntervalInBackground: !0,
          refetchOnWindowFocus: `always`,
          staleTime: 0,
        };
      })));
  }))();
}
function Sr(e) {
  let { accountId: t } = e;
  return (W(br, t), null);
}
function Cr() {
  return (Cr = e(() => {
    (I(), xr());
  }))();
}
function wr() {
  return (wr = e(() => {
    (x(), I(), M(), F(), f(), l(), ce(), r(), fn(), sn(), m());
  }))();
}
function Tr(e) {
  let t = (0, Er.c)(70),
    {
      accountId: r,
      accountState: i,
      debugOverride: a,
      isClaudeImportInFlight: o,
      isChecklistExpanded: s,
      isChecklistVisible: c,
      mailProvider: l,
      plan: u,
      representativeRole: d,
      roles: f,
      taskDefinitions: p,
    } = e,
    m = n(S),
    h = V(lt) === !0,
    g;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = new Set()), (t[0] = g)) : (g = t[0]);
  let _ = (0, Dr.useRef)(g),
    v = ve(`2073431215`),
    y;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { disableExposureLog: !0 }), (t[1] = y))
    : (y = t[1]);
  let b = be(on, y),
    x = V(We),
    { client: C, isLoading: w } = Ge(),
    T = Yt(),
    E;
  t[2] !== x || t[3] !== l || t[4] !== u || t[5] !== d || t[6] !== f || t[7] !== b || t[8] !== p
    ? ((E = un({
        canEnableNotifications: ne.systemPermissions != null && ne.notificationPermissionsSupported !== !1,
        generalAssignment: b.get(`general`, []),
        hideGoogleWorkspaceItems: x,
        mailProvider: l ?? `other`,
        plan: u,
        representativeRole: d,
        roleAssignment: d == null ? [] : b.get(d, []),
        roles: f,
        taskDefinitions: p,
      })),
      (t[2] = x),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f),
      (t[7] = b),
      (t[8] = p),
      (t[9] = E))
    : (E = t[9]);
  let { itemIds: D } = E,
    O;
  t[10] !== i || t[11] !== a || t[12] !== v || t[13] !== c || t[14] !== l
    ? ((O = v && c && a == null && l != null && tt(i)),
      (t[10] = i),
      (t[11] = a),
      (t[12] = v),
      (t[13] = c),
      (t[14] = l),
      (t[15] = O))
    : (O = t[15]);
  let k = !h && O,
    A;
  t[16] === k ? (A = t[17]) : ((A = { enabled: k }), (t[16] = k), (t[17] = A));
  let { data: j, isError: M, isFetching: N } = W($e, P, A),
    ee;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = { hostId: P, providers: [`claude-cowork`] }), (t[18] = ee))
    : (ee = t[18]);
  let F;
  t[19] === k ? (F = t[20]) : ((F = { enabled: k }), (t[19] = k), (t[20] = F));
  let { data: I, isError: te, isFetching: L } = W(Tt, ee, F),
    R;
  t[21] !== j || t[22] !== I
    ? ((R = j != null && I != null && ft({ histories: j, importStatus: I })),
      (t[21] = j),
      (t[22] = I),
      (t[23] = R))
    : (R = t[23]);
  let z = R,
    B = k && !M && !te && !N && !L && !z,
    H;
  t[24] === Symbol.for(`react.memo_cache_sentinel`) ? ((H = De(!1)), (t[24] = H)) : (H = t[24]);
  let U;
  t[25] !== T || t[26] !== B
    ? ((U = {
        cacheDiscovery: !0,
        enabled: B,
        hostId: P,
        providers: H,
        refetchOnWindowFocus: !0,
        retry: !1,
        sessionLimits: T,
      }),
      (t[25] = T),
      (t[26] = B),
      (t[27] = U))
    : (U = t[27]);
  let {
      detectedItems: re,
      hasDetectionRefreshError: ie,
      hasImportableItems: ae,
      isDetectionFetching: oe,
    } = Jt(U),
    se = k && j != null && I != null && !M && !te && !ie && (ae || (B && !oe)),
    G;
  t[28] !== se || t[29] !== z || t[30] !== ae || t[31] !== h
    ? (h || z ? (G = !1) : se && (G = ae), (t[28] = se), (t[29] = z), (t[30] = ae), (t[31] = h), (t[32] = G))
    : (G = t[32]);
  let K;
  if (t[33] !== G || t[34] !== w || t[35] !== C) {
    if (G !== !0) K = G;
    else if (!w) {
      let e;
      (t[37] === C
        ? (e = t[38])
        : ((e = Kt(C, Or, { disableExposureLog: !0 }).get(`show_task`, !1)), (t[37] = C), (t[38] = e)),
        (K = e === !0));
    }
    ((t[33] = G), (t[34] = w), (t[35] = C), (t[36] = K));
  } else K = t[36];
  let q;
  t[39] !== r || t[40] !== K || t[41] !== D || t[42] !== o || t[43] !== m || t[44] !== k
    ? ((q = () => {
        r != null && !o && k && K != null && rt(m, r, K, D);
      }),
      (t[39] = r),
      (t[40] = K),
      (t[41] = D),
      (t[42] = o),
      (t[43] = m),
      (t[44] = k),
      (t[45] = q))
    : (q = t[45]);
  let J;
  (t[46] !== r || t[47] !== K || t[48] !== D || t[49] !== o || t[50] !== m || t[51] !== k
    ? ((J = [r, K, D, o, m, k]),
      (t[46] = r),
      (t[47] = K),
      (t[48] = D),
      (t[49] = o),
      (t[50] = m),
      (t[51] = k),
      (t[52] = J))
    : (J = t[52]),
    (0, Dr.useEffect)(q, J));
  let ce;
  t[53] !== r || t[54] !== G || t[55] !== s || t[56] !== w || t[57] !== C
    ? ((ce = () => {
        r == null ||
          !s ||
          G !== !0 ||
          w ||
          _.current.has(r) ||
          (_.current.add(r), Kt(C, Or).get(`show_task`, !1));
      }),
      (t[53] = r),
      (t[54] = G),
      (t[55] = s),
      (t[56] = w),
      (t[57] = C),
      (t[58] = ce))
    : (ce = t[58]);
  let le;
  (t[59] !== r || t[60] !== G || t[61] !== s || t[62] !== w || t[63] !== C
    ? ((le = [r, G, s, w, C]), (t[59] = r), (t[60] = G), (t[61] = s), (t[62] = w), (t[63] = C), (t[64] = le))
    : (le = t[64]),
    (0, Dr.useEffect)(ce, le));
  let ue = k && K == null,
    de;
  return (
    t[65] !== K || t[66] !== re || t[67] !== T || t[68] !== ue
      ? ((de = { claudeImportAvailable: K, isPending: ue, detectedClaudeImportItems: re, sessionLimits: T }),
        (t[65] = K),
        (t[66] = re),
        (t[67] = T),
        (t[68] = ue),
        (t[69] = de))
      : (de = t[69]),
    de
  );
}
var Er, Dr, Or;
function kr() {
  return (kr = e(() => {
    ((Er = x()),
      I(),
      (Dr = o()),
      Dt(),
      Xe(),
      He(),
      X(),
      Lt(),
      Vt(),
      L(),
      r(),
      je(),
      Ht(),
      ln(),
      Me(),
      sn(),
      (Or = `1514783977`));
  }))();
}
function Ar(e) {
  let t = (0, Mr.c)(34),
    { accountId: n, isChecklistActive: r, isChecklistExpanded: i } = e,
    a = V(lt) === !0,
    o = r && !a,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = new Set()), (t[0] = s)) : (s = t[0]);
  let c = (0, Nr.useRef)(s),
    { client: l, isLoading: u } = Ge(),
    d;
  t[1] === o ? (d = t[2]) : ((d = { enabled: o }), (t[1] = o), (t[2] = d));
  let { data: f, isError: p } = W($e, P, d),
    m;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { hostId: P, providers: [`claude-cowork`] }), (t[3] = m))
    : (m = t[3]);
  let h;
  t[4] === o ? (h = t[5]) : ((h = { enabled: o }), (t[4] = o), (t[5] = h));
  let { data: g, isError: _ } = W(Tt, m, h),
    v;
  t[6] !== g || t[7] !== f || t[8] !== o || t[9] !== _ || t[10] !== p
    ? ((v = o && ft({ histories: p ? void 0 : f, importStatus: _ ? void 0 : g })),
      (t[6] = g),
      (t[7] = f),
      (t[8] = o),
      (t[9] = _),
      (t[10] = p),
      (t[11] = v))
    : (v = t[11]);
  let y = v,
    b;
  t[12] === y ? (b = t[13]) : ((b = { enabled: y, hostId: P }), (t[12] = y), (t[13] = b));
  let { hasImportedHooks: x, initialTab: S, isLoading: C, tabStatus: w } = En(b),
    T = y && !C && (S != null || x) ? (S ?? `hooks`) : null,
    E = T != null && !u && Kt(l, Pr, { disableExposureLog: !0 }).get(`show_task`, !1) === !0,
    D,
    O;
  (t[14] !== n || t[15] !== T || t[16] !== i || t[17] !== u || t[18] !== l
    ? ((D = () => {
        n == null ||
          !i ||
          T == null ||
          u ||
          c.current.has(n) ||
          (c.current.add(n), Kt(l, Pr).get(`show_task`, !1));
      }),
      (O = [n, T, i, u, l]),
      (t[14] = n),
      (t[15] = T),
      (t[16] = i),
      (t[17] = u),
      (t[18] = l),
      (t[19] = D),
      (t[20] = O))
    : ((D = t[19]), (O = t[20])),
    (0, Nr.useEffect)(D, O));
  let k = T != null && E ? T : null,
    A;
  t[21] !== g ||
  t[22] !== f ||
  t[23] !== o ||
  t[24] !== _ ||
  t[25] !== p ||
  t[26] !== C ||
  t[27] !== u ||
  t[28] !== y ||
  t[29] !== w
    ? ((A = o && (f == null || g == null || p || _ || C || (y && Object.values(w).some(jr)) || u)),
      (t[21] = g),
      (t[22] = f),
      (t[23] = o),
      (t[24] = _),
      (t[25] = p),
      (t[26] = C),
      (t[27] = u),
      (t[28] = y),
      (t[29] = w),
      (t[30] = A))
    : (A = t[30]);
  let j;
  return (
    t[31] !== A || t[32] !== k
      ? ((j = { tab: k, isPending: A }), (t[31] = A), (t[32] = k), (t[33] = j))
      : (j = t[33]),
    j
  );
}
function jr(e) {
  return e !== `ready`;
}
var Mr, Nr, Pr;
function Fr() {
  return (Fr = e(() => {
    ((Mr = x()), I(), (Nr = o()), Dt(), X(), An(), je(), Ht(), (Pr = `3355507188`));
  }))();
}
function Ir(e) {
  let t = (0, Jr.c)(61),
    { className: r, isVisible: a, checklistStateKey: o, onboardingRole: s, finishedContent: c } = e,
    l = a === void 0 || a,
    u = n(S),
    d = V(lt) === !0,
    f = ie(),
    p = (0, Yr.useRef)(null),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { disableExposureLog: !0 }), (t[0] = m))
    : (m = t[0]);
  let h = an(m),
    _ = cn(),
    v;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = { enabled: !0 }), (t[1] = v)) : (v = t[1]);
  let { data: y } = W(Pt, P, v),
    b;
  t[2] === y ? (b = t[3]) : ((b = y != null && (y.find(Kr)?.enabled ?? !0)), (t[2] = y), (t[3] = b));
  let x = b,
    C = ve(`2186196265`),
    { accountId: w, authMethod: T, email: E, planAtLogin: D } = vt(),
    O = o ?? w,
    { data: k } = yt(),
    A = V(Ke),
    M = V(Re) ?? qt,
    N = j(),
    ee = xe(),
    F = st(),
    I = Ce(),
    { isLoading: te } = Ge(),
    [L, R] = (0, Yr.useState)(null),
    z = V(Mt),
    B = V(ut),
    ne = V(dn),
    H = O == null ? void 0 : Te(z, O, B),
    U;
  t[4] === E ? (U = t[5]) : ((U = tn(E)), (t[4] = E), (t[5] = U));
  let re = U,
    ae = w != null && A == null,
    se;
  t[6] === ae ? (se = t[7]) : ((se = { enabled: ae }), (t[6] = ae), (t[7] = se));
  let G = W($t, re, se),
    K = Qt({ debugOverride: A, detectedProvider: G.data, emailDomain: re, isError: G.isError }),
    q = k?.plan_type ?? D,
    ce = s ?? ht({ roleSelectionSkipped: !1, roles: M.roles }),
    le =
      H == null || K == null
        ? []
        : jn({
            items: H.items.filter(Gr),
            locale: f.locale,
            mailProvider: K,
            plan: q,
            representativeRole: ce,
            taskDefinitions: h,
          }),
    ue = Sn({ additionalPluginNames: H?.items.flatMap(Wr), items: le, remotePluginIdsByName: _ }),
    de = Array.from(new Set(ue.values())),
    fe = V(_t) != null,
    {
      claudeImportAvailable: me,
      isPending: he,
      detectedClaudeImportItems: _e,
      sessionLimits: ye,
    } = Tr({
      accountId: O,
      accountState: H,
      debugOverride: B,
      isClaudeImportInFlight: fe,
      isChecklistExpanded: H?.collapsed === !1,
      isChecklistVisible: l && H?.expired !== !0,
      mailProvider: K,
      plan: q,
      representativeRole: ce,
      roles: M.roles,
      taskDefinitions: h,
    }),
    be = H != null && l && B == null && H.dismissed !== !0 && H.expired !== !0,
    Se = H?.collapsed === !1,
    we;
  t[8] !== O || t[9] !== be || t[10] !== Se
    ? ((we = { accountId: O, isChecklistActive: be, isChecklistExpanded: Se }),
      (t[8] = O),
      (t[9] = be),
      (t[10] = Se),
      (t[11] = we))
    : (we = t[11]);
  let { tab: Ee, isPending: De } = Ar(we),
    Oe = x && l && H != null && H.dismissed !== !0 && H.expired !== !0 && K != null,
    ke = Oe && !C,
    Ae;
  t[12] === ke ? (Ae = t[13]) : ((Ae = { enabled: ke }), (t[12] = ke), (t[13] = Ae));
  let { data: je } = W(Rt, P, Ae),
    Me = Oe && de.length > 0,
    Ne;
  t[14] === Me ? (Ne = t[15]) : ((Ne = { enabled: Me }), (t[14] = Me), (t[15] = Ne));
  let { data: Pe } = W(_n, { authMethod: T, hostId: P, plan: q, pluginIds: de }, Ne);
  if ((W(St, O), !l || w == null || O == null || K == null || H == null)) {
    let e;
    return (
      t[16] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)($.Fragment, { children: (0, $.jsx)(ge, { children: null }) })), (t[16] = e))
        : (e = t[16]),
      e
    );
  }
  if (H.dismissed) {
    let e;
    return (
      t[17] === c ? (e = t[18]) : ((e = (0, $.jsx)($.Fragment, { children: c })), (t[17] = c), (t[18] = e)),
      e
    );
  }
  let Fe = H.items.filter((e) => {
      if (d && e.id === `claude_import`) return !1;
      let t = e.id !== `claude_import` || e.completed || B != null || fe || me === !0,
        n = e.id !== `enable_notifications` || !it(e) || H.notificationPermissionItemIncluded === !0;
      return t && n;
    }),
    Ie = new Map(le.map(Ur)),
    Le;
  t[19] !== x || t[20] !== C || t[21] !== je?.plugins || t[22] !== Pe
    ? ((Le = C ? (Pe?.map(Hr) ?? []) : [...(je?.plugins ?? []), ...(Pe?.map(Vr) ?? [])].filter(Br)),
      x || (Le = []),
      (t[19] = x),
      (t[20] = C),
      (t[21] = je?.plugins),
      (t[22] = Pe),
      (t[23] = Le))
    : (Le = t[23]);
  let ze = en(K, q),
    Be = Fe.flatMap((e) => {
      switch (Ft(e)) {
        case `sidebar`: {
          let t = Ie.get(e.id);
          return t == null
            ? []
            : [{ isCompleted: e.completed, item: t, threadId: e.threadId, type: `checklist_item` }];
        }
        case `conversational_onboarding`:
          return e.completed
            ? [
                {
                  isCompleted: !0,
                  snapshot: e.snapshot?.type === `conversational_onboarding` ? e.snapshot : void 0,
                  task: e.id,
                  type: `completed_conversational_task`,
                },
              ]
            : [];
        case `claude_import`: {
          if (e.id !== `claude_import`) return [];
          if (e.completed) return [{ isCompleted: !0, type: `claude_import` }];
          let t = Ie.get(`claude_import`);
          return t == null ? [] : [{ isCompleted: !1, item: t, threadId: void 0, type: `checklist_item` }];
        }
      }
    }),
    Ve = Be.filter(zr).length,
    He = Be.length + (Ee == null ? 0 : 1);
  if (Ve >= He) {
    let e =
        te ||
        he ||
        fe ||
        De ||
        H.items.some(
          (e) =>
            e.id === `enable_notifications` &&
            !e.completed &&
            it(e) &&
            H.notificationPermissionItemIncluded == null,
        ),
      n;
    t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(ge, { children: null })), (t[24] = n))
      : (n = t[24]);
    let r = He > 0 && !e ? c : null,
      i;
    t[25] === O ? (i = t[26]) : ((i = (0, $.jsx)(Sr, { accountId: O })), (t[25] = O), (t[26] = i));
    let a;
    return (
      t[27] !== r || t[28] !== i
        ? ((a = (0, $.jsxs)($.Fragment, { children: [n, r, i] })), (t[27] = r), (t[28] = i), (t[29] = a))
        : (a = t[29]),
      a
    );
  }
  let Ue = [...Be.filter(Rr), ...Be.filter(Lr)],
    We;
  t[30] === f
    ? (We = t[31])
    : ((We = f.formatMessage({
        id: `sidebarOnboardingChecklist.title`,
        defaultMessage: `Getting started`,
        description: `Title for the onboarding checklist shown in the sidebar.`,
      })),
      (t[30] = f),
      (t[31] = We));
  let qe = We,
    Je = () => {
      let e = !H.collapsed;
      (e && ot(u, H.variant), pe(u, O, e));
    },
    Xe = ge,
    Y;
  t[32] === r ? (Y = t[33]) : ((Y = g(`w-full`, r)), (t[32] = r), (t[33] = Y));
  let Ze = lr,
    Qe = H.variant,
    $e = H.collapsed,
    et = () => {
      (xt(u, H.variant), Ye(u, O));
    },
    tt;
  t[34] !== w || t[35] !== O
    ? ((tt = (0, $.jsx)(qr, { accountId: w, checklistStateKey: O })), (t[34] = w), (t[35] = O), (t[36] = tt))
    : (tt = t[36]);
  let nt;
  t[37] === O ? (nt = t[38]) : ((nt = (0, $.jsx)(Sr, { accountId: O })), (t[37] = O), (t[38] = nt));
  let rt;
  t[39] === Symbol.for(`react.memo_cache_sentinel`) ? ((rt = null), (t[39] = rt)) : (rt = t[39]);
  let at;
  t[40] !== tt || t[41] !== nt
    ? ((at = (0, $.jsxs)($.Fragment, { children: [tt, nt, rt] })), (t[40] = tt), (t[41] = nt), (t[42] = at))
    : (at = t[42]);
  let dt = Ee == null ? null : (0, $.jsx)(pr, { initialTab: Ee, variant: H.variant }),
    ft = Ue.map((e) => {
      switch (e.type) {
        case `checklist_item`: {
          let t = Tn(e.item, f),
            n = ne && e.item.action === `enable_notifications`,
            r = L === e.item.id;
          return (0, $.jsx)(
            tr,
            {
              variant: H.variant,
              installedPlugins: Le,
              isCompleted: e.isCompleted,
              isLoading: n || r || (fe && e.item.action === `import_claude`),
              item: e.item,
              label: t,
              reducedMotion: N,
              onClick: (t) => {
                if (r && e.threadId == null) return;
                let { currentTarget: n } = t;
                (ct(u, e.item.id, H.variant),
                  e.item.action === `start_prompt` && R(e.item.id),
                  Pn({
                    scope: u,
                    accountId: w,
                    checklistStateKey: O,
                    detectedClaudeImportItems: _e,
                    importSessionLimits: ye,
                    intl: f,
                    item: e.item,
                    restoreFocus: () => {
                      if (n.isConnected) {
                        n.focus();
                        return;
                      }
                      p.current?.focus();
                    },
                    navigateToLocalConversation: F,
                    startNewConversation: ee,
                    statsigClient: I,
                  }).finally(() => {
                    e.item.action === `start_prompt` && R(null);
                  }));
              },
            },
            e.item.id,
          );
        }
        case `completed_conversational_task`:
          return (0, $.jsx)(
            Rn,
            { installedPlugins: Le, mailProvider: ze, snapshot: e.snapshot, task: e.task },
            `completed-conversational-task-${e.task}`,
          );
        case `claude_import`:
          return (0, $.jsxs)(
            `button`,
            {
              className: `flex cursor-default items-start gap-2 sidebar-item p-1.5 text-start`,
              type: `button`,
              "aria-pressed": !0,
              disabled: !0,
              children: [
                (0, $.jsx)(i, { className: `mt-0.5 shrink-0 text-default`, asset: oe }),
                (0, $.jsx)(`span`, {
                  className: `min-w-0 flex-1 text-sm leading-5 text-tertiary line-through`,
                  children: (0, $.jsx)(J, {
                    id: `sidebarOnboardingChecklist.importAgentSetup`,
                    defaultMessage: `Import agent setup`,
                    description: `Completed external agent setup import item in the sidebar onboarding checklist`,
                  }),
                }),
              ],
            },
            `claude-import`,
          );
      }
    }),
    pt;
  t[43] !== Ze ||
  t[44] !== H ||
  t[45] !== Ve ||
  t[46] !== N ||
  t[47] !== et ||
  t[48] !== at ||
  t[49] !== dt ||
  t[50] !== ft ||
  t[51] !== qe ||
  t[52] !== Je ||
  t[53] !== He
    ? ((pt = (0, $.jsxs)(Ze, {
        variant: Qe,
        title: qe,
        titleButtonRef: p,
        collapsed: $e,
        completedCount: Ve,
        totalCount: He,
        reducedMotion: N,
        onToggleCollapsed: Je,
        onDismiss: et,
        beforeHeader: at,
        children: [dt, ft],
      })),
      (t[43] = Ze),
      (t[44] = H),
      (t[45] = Ve),
      (t[46] = N),
      (t[47] = et),
      (t[48] = at),
      (t[49] = dt),
      (t[50] = ft),
      (t[51] = qe),
      (t[52] = Je),
      (t[53] = He),
      (t[54] = pt))
    : (pt = t[54]);
  let X;
  t[55] !== Y || t[56] !== pt
    ? ((X = (0, $.jsx)(`div`, { className: Y, children: pt })), (t[55] = Y), (t[56] = pt), (t[57] = X))
    : (X = t[57]);
  let mt;
  return (
    t[58] !== Xe || t[59] !== X
      ? ((mt = (0, $.jsx)($.Fragment, { children: (0, $.jsx)(Xe, { children: X }) })),
        (t[58] = Xe),
        (t[59] = X),
        (t[60] = mt))
      : (mt = t[60]),
    mt
  );
}
function Lr(e) {
  return e.isCompleted;
}
function Rr(e) {
  return !e.isCompleted;
}
function zr(e) {
  return e.isCompleted;
}
function Br(e) {
  return e.marketplaceName === `openai-curated` || e.marketplaceName === `openai-curated-remote`;
}
function Vr(e) {
  let { plugin: t } = e;
  return t;
}
function Hr(e) {
  let { plugin: t } = e;
  return t;
}
function Ur(e) {
  return [e.id, e];
}
function Wr(e) {
  return e.snapshot?.type === `conversational_onboarding` && e.snapshot.iconAppId != null
    ? [e.snapshot.iconAppId]
    : [];
}
function Gr(e) {
  return it(e) || Ft(e) === `claude_import`;
}
function Kr(e) {
  let { name: t } = e;
  return t === `plugins`;
}
function qr(e) {
  let t = (0, Jr.c)(3),
    { accountId: n, checklistStateKey: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = { accountId: n, checklistStateKey: r }), (t[0] = n), (t[1] = r), (t[2] = i))
      : (i = t[2]),
    W(Xr, i),
    null
  );
}
var Jr, Yr, $, Xr;
function Zr() {
  return (Zr = e(() => {
    ((Jr = x()),
      p(),
      v(),
      I(),
      K(),
      (Yr = o()),
      M(),
      Ot(),
      Bt(),
      y(),
      Dt(),
      X(),
      D(),
      ye(),
      nn(),
      It(),
      Vt(),
      mn(),
      _e(),
      Ut(),
      r(),
      je(),
      Ze(),
      Ht(),
      jt(),
      Ln(),
      Hn(),
      ir(),
      Wt(),
      Dn(),
      At(),
      Me(),
      fr(),
      rn(),
      _r(),
      fn(),
      Cr(),
      wr(),
      sn(),
      kr(),
      Fr(),
      ($ = m()),
      (Xr = C(S, (e) => null, { onMount: (e, t) => wt(t, t.key.accountId, t.key.checklistStateKey) })));
  }))();
}
export { Zr as n, Ir as t };
//# sourceMappingURL=sidebar-onboarding-checklist.electron-9c2446c40227.js.map
