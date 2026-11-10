const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./external-agent-config-import-flow-eedae021e1b5.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $v as n,
  AO as r,
  CO as i,
  Cot as a,
  Cwt as o,
  FC as s,
  GD as c,
  IC as l,
  IDt as u,
  Ixt as d,
  JR as f,
  KD as p,
  Kat as m,
  MO as h,
  Mz as g,
  Nz as _,
  Pxt as v,
  Qv as y,
  Sj as b,
  Swt as x,
  TO as S,
  VDt as ee,
  Vxt as C,
  XD as w,
  YD as T,
  YR as E,
  Zxt as D,
  _Mt as O,
  _wt as k,
  aD as A,
  aSt as te,
  b1 as j,
  dZ as M,
  fO as N,
  fPt as P,
  fZ as F,
  gMt as I,
  gm as ne,
  gwt as re,
  hm as L,
  hot as R,
  i3 as z,
  iD as B,
  iot as V,
  jDt as H,
  lot as ie,
  pPt as U,
  qat as ae,
  r3 as oe,
  rst as W,
  sj as G,
  t3 as se,
  vO as K,
  vzt as q,
  wot as J,
  xMt as Y,
  y1 as ce,
  yzt as le,
  zxt as X,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Er as ue,
  $Lt as de,
  $Tn as fe,
  $bt as pe,
  ALt as me,
  Abt as he,
  Aot as ge,
  BYt as _e,
  Fin as ve,
  GRt as ye,
  Gbt as be,
  HLt as xe,
  Hin as Se,
  ILt as Ce,
  IYt as we,
  Iot as Te,
  J$n as Ee,
  JLt as De,
  KLt as Oe,
  KTn as ke,
  LLt as Ae,
  LPr as je,
  Lot as Me,
  Met as Ne,
  NLt as Pe,
  NUt as Fe,
  Net as Ie,
  Obt as Le,
  Oot as Re,
  PLt as ze,
  Pot as Be,
  QEr as Ve,
  QLt as He,
  Qbt as Ue,
  RLt as We,
  RPr as Ge,
  TEr as Ke,
  TIr as qe,
  Tbt as Je,
  ULt as Ye,
  URt as Xe,
  VLt as Ze,
  Vbt as Qe,
  WRt as $e,
  Wbt as et,
  X$n as tt,
  XLt as nt,
  XTn as rt,
  YLt as it,
  YTn as at,
  ZLt as ot,
  aDr as st,
  aRt as ct,
  abt as lt,
  dRt as ut,
  dbt as dt,
  e2 as ft,
  eDr as pt,
  eRt as mt,
  f9t as ht,
  fRt as gt,
  fbt as _t,
  fur as vt,
  hbt as yt,
  hzt as bt,
  iDr as xt,
  iRt as St,
  ibt as Ct,
  jUt as wt,
  jbt as Tt,
  kbt as Et,
  kot as Dt,
  mzt as Ot,
  nDr as kt,
  nEn as At,
  nRt as jt,
  oDr as Mt,
  oFr as Nt,
  p9t as Pt,
  pRt as Ft,
  pbt as It,
  pur as Lt,
  qLt as Rt,
  rRt as zt,
  t2 as Bt,
  tEn as Vt,
  tRt as Ht,
  uEn as Ut,
  vCt as Wt,
  vEr as Gt,
  vIr as Kt,
  wbt as qt,
  yCt as Jt,
  zLt as Yt,
} from "./app-initial-5851df3f6cb1.js";
import { nl as Xt, rl as Zt } from "./app-primary-fe8a450b3b04.js";
import { a as Qt, n as $t, o as en, r as tn, t as nn } from "./onboarding-mail-provider-c6c346963bf3.js";
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
} from "./sidebar-onboarding-checklist-task-config-6a24dc34075c.js";
import {
  St as pn,
  _t as mn,
  bt as hn,
  c as gn,
  o as _n,
  r as vn,
  vt as yn,
  yt as bn,
} from "./tasks-e5a6331c5cca.js";
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
} from "./use-imported-setup-opportunity-1f7fb108e1a6.js";
import { r as Mn, t as Nn } from "./task-icon-8aa86d02d13b.js";
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
      return (document.querySelector(Ee.sidebarProjectCreate)?.click(), Promise.resolve());
    case `import_claude`:
      return r.length === 0 || It()
        ? Promise.resolve()
        : P(
            async () => {
              let { openExternalAgentImport: e } = await import(
                `./external-agent-config-import-flow-eedae021e1b5.js`
              );
              return { openExternalAgentImport: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5]),
            import.meta.url,
          )
            .then(async ({ openExternalAgentImport: t }) => {
              let r = { hostId: V, includeHome: !0, providers: Le(!1), sessionLimits: i },
                a = [..._t(r), `cached`];
              await e.queryClient.cancelQueries({ queryKey: a, exact: !0 });
              let { items: o } = await e.queryClient.fetchQuery({
                queryKey: a,
                queryFn: () => dt({ ...r, cache: `refresh` }),
                staleTime: 0,
              });
              await t(e, {
                hostId: V,
                items: o,
                onImportSuccess: () => {
                  ze(e, n, `claude_import`);
                },
                restoreFocus: s,
                sessionLimits: i,
                source: `onboarding_checklist`,
              });
            })
            .catch(() => void 0);
    case `enable_notifications`: {
      let t = Ae(e.get(De), n),
        r = e.get(nt, n);
      return (
        !Ye(t, `enable_notifications`) && r == null && (ot(e, n), e.set(dn, !0)),
        In(e),
        Promise.resolve()
      );
    }
    case `start_prompt`: {
      let r = Ae(e.get(De), n)?.variant,
        i = Cn(o, a),
        s = kn(o),
        d = o.pluginMentions?.map(({ pluginId: e }) => e);
      return o.isAutoSubmitEnabled !== !1 && ue(l, `1984032627`).get(`prompt_action`, null) === `submit`
        ? Fn(e, {
            elicitationPluginIds: d,
            instructions: s,
            prompt: i,
            title: typeof o.message == `string` ? o.message : a.formatMessage(o.message),
          })
            .then(async (t) => {
              if (t.status !== `created`) throw Xe(e, t);
              let a = t.conversationId,
                s = Xe(e, t);
              if (s != null) throw (u(a), s);
              let c;
              try {
                let { turn: t } = await Pe(e, V, a, {
                  request: {
                    turnTrigger: `onboarding_checklist`,
                    threadId: a,
                    input: [{ type: `text`, text: i, text_elements: [] }],
                    serviceTier: await Ie(e, V, null),
                  },
                });
                c = t.id;
              } catch (t) {
                throw (await Fe({ scope: e, archived: !0, hostId: V, threadId: a }).catch(() => void 0), t);
              }
              (ct(e, o.id, a, c, r), ze(e, n, o.id), u(a));
            })
            .catch((t) => {
              e.get(R).danger(Xt(t, a), {
                errorAnalytics: {
                  toastId: `sidebarOnboardingChecklistActions.startSidebarOnboardingChecklistItem`,
                },
              });
            })
        : (Ke(e, `work`),
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
  let a = await ht([`~`], { prompt: r });
  if (a.cwd == null) throw Error(`Missing projectless thread cwd`);
  return ye(e, V, {
    additionalDeveloperInstructions: n || void 0,
    collaborationMode: null,
    config:
      t == null || t.length === 0
        ? void 0
        : {
            [Kt]: !0,
            "features.auth_elicitation": !0,
            "features.tool_suggest": !0,
            "tool_suggest.discoverables": t.map((e) => ({ type: `plugin`, id: e })),
          },
    cwd: a.cwd,
    initialTitle: i,
    input: [],
    projectlessOutputDirectory: a.projectlessOutputDirectory,
    serviceTier: await Ie(e, V, null),
    skipAutoTitleGeneration: !0,
    threadSource: `onboarding_checklist`,
    useAppServerPermissionDefault: !0,
    workspaceKind: `projectless`,
    workspaceRoots: a.workspaceRoots,
  });
}
function In(e) {
  m.systemPermissions
    ?.openNotificationSettings()
    .finally(() => {
      e.set(dn, !1);
    })
    .catch(() => void 0);
}
function Ln() {
  return (Ln = e(() => {
    (W(),
      qe(),
      wt(),
      tt(),
      $e(),
      me(),
      Ne(),
      Zt(),
      Gt(),
      ie(),
      yt(),
      Et(),
      Pt(),
      ae(),
      Nt(),
      pt(),
      Dn(),
      mt(),
      Yt(),
      fn(),
      sn(),
      U());
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
    { installedPlugins: n, mailProvider: r, task: i } = e,
    a = ee(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { disableExposureLog: !0 }), (t[0] = o))
    : (o = t[0]);
  let s = bn(o),
    c,
    l,
    d,
    f,
    p;
  if (t[1] !== s || t[2] !== n || t[3] !== a || t[4] !== r || t[5] !== i) {
    p = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((l = vn(i, s, a.locale, r)), l == null)) {
        p = null;
        break bb0;
      }
      let e = gn(l) ? l.pluginName : null;
      ((c = e == null ? null : (n.find((t) => t.plugin.name === e) ?? null)),
        (d = l.option.label),
        (f = a.formatMessage(d)));
    }
    ((t[1] = s),
      (t[2] = n),
      (t[3] = a),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c),
      (t[7] = l),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p));
  } else ((c = t[6]), (l = t[7]), (d = t[8]), (f = t[9]), (p = t[10]));
  if (p !== Symbol.for(`react.early_return_sentinel`)) return p;
  let m = f,
    h;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(g, { className: `mt-0.5 shrink-0 text-default`, asset: L })), (t[11] = h))
    : (h = t[11]);
  let _;
  t[12] === d
    ? (_ = t[13])
    : ((_ = (0, Z.jsx)(`span`, {
        className: `min-w-0 flex-1 text-sm leading-5 text-tertiary line-through`,
        children: (0, Z.jsx)(u, { ...d }),
      })),
      (t[12] = d),
      (t[13] = _));
  let v;
  t[14] !== c || t[15] !== l
    ? ((v = (0, Z.jsx)(Nn, {
        appPlugin: c,
        className: `mt-0.5 size-4 shrink-0 object-contain opacity-40`,
        entry: l,
      })),
      (t[14] = c),
      (t[15] = l),
      (t[16] = v))
    : (v = t[16]);
  let y;
  return (
    t[17] !== m || t[18] !== _ || t[19] !== v
      ? ((y = (0, Z.jsxs)(`button`, {
          type: `button`,
          "aria-label": m,
          "aria-pressed": !0,
          className: `flex cursor-default items-start gap-2 sidebar-item p-1.5 text-start`,
          disabled: !0,
          children: [h, _, v],
        })),
        (t[17] = m),
        (t[18] = _),
        (t[19] = v),
        (t[20] = y))
      : (y = t[20]),
    y
  );
}
function Bn(e) {
  let t = (0, Vn.c)(19),
    { installedPlugins: n, mailProvider: r, snapshot: i, task: a } = e,
    o;
  t[0] !== n || t[1] !== i.iconAppId
    ? ((o = i.iconAppId == null ? null : (n.find((e) => e.plugin.name === i.iconAppId) ?? null)),
      (t[0] = n),
      (t[1] = i.iconAppId),
      (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] !== r || t[4] !== i.iconAppId || t[5] !== a
    ? ((c = i.iconAppId == null ? vn(a, mn, `en`, r) : null),
      (t[3] = r),
      (t[4] = i.iconAppId),
      (t[5] = a),
      (t[6] = c))
    : (c = t[6]);
  let l = c,
    u;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Z.jsx)(g, { className: `mt-0.5 shrink-0 text-default`, asset: L })), (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] === i.label
    ? (d = t[9])
    : ((d = (0, Z.jsx)(`span`, {
        className: `min-w-0 flex-1 text-sm leading-5 text-tertiary line-through`,
        children: i.label,
      })),
      (t[8] = i.label),
      (t[9] = d));
  let f;
  t[10] !== s?.logoDarkPath || t[11] !== s?.logoPath || t[12] !== l || t[13] !== i.iconAppId
    ? ((f =
        i.iconAppId == null
          ? l == null
            ? null
            : (0, Z.jsx)(Nn, {
                appPlugin: null,
                className: `mt-0.5 size-4 shrink-0 object-contain opacity-40`,
                entry: l,
              })
          : (0, Z.jsx)(Ot, {
              alt: ``,
              className: `mt-0.5 size-4 shrink-0 object-contain opacity-40`,
              knownAppId: i.iconAppId,
              logoDarkUrl: s?.logoDarkPath,
              logoUrl: s?.logoPath,
              fallback: (0, Z.jsx)(g, {
                className: `mt-0.5 shrink-0 opacity-40`,
                "aria-hidden": !1,
                asset: F,
              }),
            })),
      (t[10] = s?.logoDarkPath),
      (t[11] = s?.logoPath),
      (t[12] = l),
      (t[13] = i.iconAppId),
      (t[14] = f))
    : (f = t[14]);
  let p;
  return (
    t[15] !== i.label || t[16] !== d || t[17] !== f
      ? ((p = (0, Z.jsxs)(`button`, {
          type: `button`,
          "aria-label": i.label,
          "aria-pressed": !0,
          className: `flex cursor-default items-start gap-2 sidebar-item p-1.5 text-start`,
          disabled: !0,
          children: [u, d, f],
        })),
        (t[15] = i.label),
        (t[16] = d),
        (t[17] = f),
        (t[18] = p))
      : (p = t[18]),
    p
  );
}
var Vn, Z;
function Hn() {
  return (Hn = e(() => {
    ((Vn = q()), ne(), M(), H(), bt(), _(), yn(), Mn(), _n(), (Z = Y()));
  }))();
}
function Un(e) {
  let t = (0, Wn.c)(21),
    {
      isCompleted: n,
      isLoading: r,
      isDisabled: i,
      label: a,
      reducedMotion: o,
      trailingIcon: c,
      onClick: l,
    } = e,
    u = i ? `cursor-default` : `cursor-interaction hover:bg-primary-ghost-hover`,
    d;
  t[0] === u
    ? (d = t[1])
    : ((d = I(
        `sidebar-item flex w-full items-start gap-2 p-1.5 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-border`,
        u,
      )),
      (t[0] = u),
      (t[1] = d));
  let f = !o && `position`,
    p;
  t[2] !== n || t[3] !== r
    ? ((p = r
        ? (0, Gn.jsx)(oe, {
            className: `icon-xs scale-[1.2]`,
            containerClassName: `mt-0.5 shrink-0 text-tertiary`,
          })
        : (0, Gn.jsx)(g, {
            className: I(`mt-0.5 shrink-0`, n ? `text-default` : `text-tertiary`),
            asset: n ? L : s,
          })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = p))
    : (p = t[4]);
  let m = n && `text-tertiary line-through`,
    h;
  t[5] === m ? (h = t[6]) : ((h = I(`min-w-0 flex-1 text-sm leading-5`, m)), (t[5] = m), (t[6] = h));
  let _;
  t[7] !== a || t[8] !== h
    ? ((_ = (0, Gn.jsx)(`span`, { className: h, children: a })), (t[7] = a), (t[8] = h), (t[9] = _))
    : (_ = t[9]);
  let v;
  return (
    t[10] !== n ||
    t[11] !== i ||
    t[12] !== r ||
    t[13] !== a ||
    t[14] !== l ||
    t[15] !== d ||
    t[16] !== f ||
    t[17] !== p ||
    t[18] !== _ ||
    t[19] !== c
      ? ((v = (0, Gn.jsxs)(k.button, {
          type: `button`,
          "aria-label": a,
          "aria-busy": r,
          "aria-pressed": n,
          className: d,
          disabled: i,
          layout: f,
          transition: G,
          onClick: l,
          children: [p, _, c],
        })),
        (t[10] = n),
        (t[11] = i),
        (t[12] = r),
        (t[13] = a),
        (t[14] = l),
        (t[15] = d),
        (t[16] = f),
        (t[17] = p),
        (t[18] = _),
        (t[19] = c),
        (t[20] = v))
      : (v = t[20]),
    v
  );
}
var Wn, Gn;
function Kn() {
  return (Kn = e(() => {
    ((Wn = q()), ne(), l(), O(), re(), _(), z(), b(), (Gn = Y()));
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
      ((c = i?.find((e) => e.plugin.name === s)), (o = Ot), (l = ``), (u = n?.get(s)));
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
    : ((m = (0, Yn.jsx)(B, { "aria-hidden": !0, className: r })), (t[9] = r), (t[10] = m));
  let h;
  return (
    t[11] !== o ||
    t[12] !== s ||
    t[13] !== r ||
    t[14] !== l ||
    t[15] !== u ||
    t[16] !== f ||
    t[17] !== p ||
    t[18] !== m
      ? ((h = (0, Yn.jsx)(o, {
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
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
var Jn, Yn;
function Xn() {
  return (Xn = e(() => {
    ((Jn = q()), bt(), A(), Dn(), (Yn = Y()));
  }))();
}
function Zn(e, t, n) {
  let r = (0, Qn.c)(5),
    i,
    a;
  (r[0] !== t || r[1] !== e || r[2] !== n
    ? ((i = () => {
        zt(e, t, n);
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
    ((Qn = q()), ($n = le()), mt());
  }))();
}
function tr(e) {
  let t = (0, nr.c)(15),
    {
      installedPlugins: n,
      isCompleted: r,
      isLoading: i,
      item: o,
      label: s,
      reducedMotion: c,
      onClick: l,
      variant: u,
    } = e;
  Zn(d(a), o.id, u);
  let f;
  t[0] === o ? (f = t[1]) : ((f = xn(o)), (t[0] = o), (t[1] = f));
  let p = f,
    m = r && o.action !== `enable_notifications`,
    h;
  t[2] !== p || t[3] !== n || t[4] !== r || t[5] !== o
    ? ((h =
        p == null
          ? null
          : (0, rr.jsx)(qn, {
              className: I(`mt-0.5 size-4 shrink-0`, r && `opacity-40`),
              installedPlugins: n,
              item: o,
            })),
      (t[2] = p),
      (t[3] = n),
      (t[4] = r),
      (t[5] = o),
      (t[6] = h))
    : (h = t[6]);
  let g;
  return (
    t[7] !== r || t[8] !== m || t[9] !== i || t[10] !== s || t[11] !== l || t[12] !== c || t[13] !== h
      ? ((g = (0, rr.jsx)(Un, {
          isCompleted: r,
          isLoading: i,
          isDisabled: m,
          label: s,
          reducedMotion: c,
          onClick: l,
          trailingIcon: h,
        })),
        (t[7] = r),
        (t[8] = m),
        (t[9] = i),
        (t[10] = s),
        (t[11] = l),
        (t[12] = c),
        (t[13] = h),
        (t[14] = g))
      : (g = t[14]),
    g
  );
}
var nr, rr;
function ir() {
  return (ir = e(() => {
    ((nr = q()), O(), v(), Kn(), J(), Xn(), Dn(), er(), (rr = Y()));
  }))();
}
function ar(e) {
  let n = (0, or.c)(64),
    {
      children: r,
      beforeHeader: a,
      title: o,
      titleButtonRef: s,
      collapsed: l,
      completedCount: d,
      totalCount: f,
      reducedMotion: p,
      onToggleCollapsed: m,
      onDismiss: h,
    } = e,
    g = ee(),
    _;
  n[0] !== d || n[1] !== f
    ? ((_ = Math.round((d / f) * 100)), (n[0] = d), (n[1] = f), (n[2] = _))
    : (_ = n[2]);
  let v = _,
    b;
  n[3] !== l || n[4] !== g
    ? ((b = g.formatMessage(
        l
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
      (n[3] = l),
      (n[4] = g),
      (n[5] = b))
    : (b = n[5]);
  let C = b,
    w;
  n[6] !== d || n[7] !== g || n[8] !== f
    ? ((w = g.formatMessage(
        {
          id: `sidebarOnboardingChecklist.progressCountAriaLabel`,
          defaultMessage: `Onboarding progress: {progressCount} of {totalCount}`,
          description: `Accessible label for the onboarding checklist progress`,
        },
        { progressCount: d, totalCount: f },
      )),
      (n[6] = d),
      (n[7] = g),
      (n[8] = f),
      (n[9] = w))
    : (w = n[9]);
  let E = w,
    D;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = I(
        `ease-basic grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-1 transition-all duration-basic motion-reduce:transition-none`,
      )),
      (n[10] = D))
    : (D = n[10]);
  let O = l ? `col-span-full pe-8` : `col-start-1 ps-1`,
    A;
  n[11] === O
    ? (A = n[12])
    : ((A = I(
        `row-start-1 flex min-w-0 cursor-interaction items-center gap-2 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-border`,
        O,
      )),
      (n[11] = O),
      (n[12] = A));
  let te = !l,
    j;
  n[13] !== l || n[14] !== E || n[15] !== v || n[16] !== p
    ? ((j = l
        ? (0, Q.jsx)(`span`, {
            "aria-label": E,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": v,
            className: `inline-flex size-3.5 shrink-0 items-center justify-center text-tertiary`,
            role: `progressbar`,
            children: (0, Q.jsx)(c, {
              animateOnMount: !0,
              percent: v,
              progressClassName: `text-codex-icon`,
              reducedMotion: p,
              size: 14,
              transitionDurationMs: 300,
            }),
          })
        : null),
      (n[13] = l),
      (n[14] = E),
      (n[15] = v),
      (n[16] = p),
      (n[17] = j))
    : (j = n[17]);
  let M;
  n[18] === o
    ? (M = n[19])
    : ((M = (0, Q.jsx)(Te, { className: `truncate`, children: o })), (n[18] = o), (n[19] = M));
  let N;
  n[20] !== m || n[21] !== A || n[22] !== te || n[23] !== j || n[24] !== M || n[25] !== o || n[26] !== s
    ? ((N = (0, Q.jsxs)(`button`, {
        ref: s,
        type: `button`,
        className: A,
        "aria-label": o,
        "aria-expanded": te,
        onClick: m,
        children: [j, M],
      })),
      (n[20] = m),
      (n[21] = A),
      (n[22] = te),
      (n[23] = j),
      (n[24] = M),
      (n[25] = o),
      (n[26] = s),
      (n[27] = N))
    : (N = n[27]);
  let P;
  n[28] !== d || n[29] !== f
    ? ((P = (0, Q.jsx)(`span`, {
        className: `pointer-events-none col-start-2 row-start-1 justify-self-end pe-1 text-xs leading-5 font-normal text-tertiary tabular-nums group-hover:opacity-0 group-has-[[data-state=open]]:opacity-0`,
        children: (0, Q.jsx)(u, {
          id: `sidebarOnboardingChecklist.progressCount`,
          defaultMessage: `{progressCount} of {totalCount}`,
          description: `Progress text for the onboarding checklist`,
          values: { progressCount: d, totalCount: f },
        }),
      })),
      (n[28] = d),
      (n[29] = f),
      (n[30] = P))
    : (P = n[30]);
  let F;
  n[31] !== l || n[32] !== g || n[33] !== h
    ? ((F = l
        ? null
        : (0, Q.jsx)(i, {
            align: `start`,
            contentWidth: `sm`,
            triggerButton: (0, Q.jsx)(y, {
              label: g.formatMessage({
                id: `sidebarOnboardingChecklist.checklistActions`,
                defaultMessage: `Checklist actions`,
                description: `Accessible label for the onboarding checklist actions menu`,
              }),
              size: `xs`,
            }),
            children: (0, Q.jsx)(S.Item, {
              leftIconAsset: ce,
              onSelect: h,
              children: (0, Q.jsx)(u, {
                id: `sidebarOnboardingChecklist.hideSetup`,
                defaultMessage: `Hide setup`,
                description: `Menu item label for hiding setup from the sidebar`,
              }),
            }),
          })),
      (n[31] = l),
      (n[32] = g),
      (n[33] = h),
      (n[34] = F))
    : (F = n[34]);
  let ne = !l,
    re = l && `-rotate-90`,
    L;
  n[35] === re
    ? (L = n[36])
    : ((L = I(`ease-basic icon-2xs transition-transform duration-basic motion-reduce:transition-none`, re)),
      (n[35] = re),
      (n[36] = L));
  let R;
  n[37] === L
    ? (R = n[38])
    : ((R = (0, Q.jsx)(T, { "aria-hidden": !0, className: L })), (n[37] = L), (n[38] = R));
  let z;
  n[39] !== m || n[40] !== ne || n[41] !== R || n[42] !== C
    ? ((z = (0, Q.jsx)(t, {
        "aria-label": C,
        "aria-expanded": ne,
        className: `size-6 rounded-md`,
        color: `ghost`,
        size: `icon`,
        uniform: !0,
        onClick: m,
        children: R,
      })),
      (n[39] = m),
      (n[40] = ne),
      (n[41] = R),
      (n[42] = C),
      (n[43] = z))
    : (z = n[43]);
  let B;
  n[44] !== F || n[45] !== z
    ? ((B = (0, Q.jsxs)(`div`, {
        className: `pointer-events-none col-start-2 row-start-1 flex shrink-0 items-center gap-0 justify-self-end opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 has-[[data-state=open]]:pointer-events-auto has-[[data-state=open]]:opacity-100`,
        children: [F, z],
      })),
      (n[44] = F),
      (n[45] = z),
      (n[46] = B))
    : (B = n[46]);
  let V;
  n[47] !== l || n[48] !== N || n[49] !== P || n[50] !== B
    ? ((V = (0, Q.jsxs)(Be, { compact: l, className: D, children: [N, P, B] })),
      (n[47] = l),
      (n[48] = N),
      (n[49] = P),
      (n[50] = B),
      (n[51] = V))
    : (V = n[51]);
  let H;
  n[52] !== r || n[53] !== l || n[54] !== E || n[55] !== v
    ? ((H = l
        ? null
        : (0, Q.jsx)(
            k.div,
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
                      "aria-label": E,
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                      "aria-valuenow": v,
                      className: `h-1.5 overflow-hidden rounded-full bg-text/10`,
                      role: `progressbar`,
                      children: (0, Q.jsx)(`div`, {
                        className: `h-full rounded-full bg-primary-solid transition-[width] duration-relaxed ease-enter motion-reduce:transition-none`,
                        style: { width: `${v}%` },
                      }),
                    }),
                  }),
                  r,
                ],
              }),
            },
            `sidebar-onboarding-checklist-content`,
          )),
      (n[52] = r),
      (n[53] = l),
      (n[54] = E),
      (n[55] = v),
      (n[56] = H))
    : (H = n[56]);
  let ie;
  n[57] === H
    ? (ie = n[58])
    : ((ie = (0, Q.jsx)(x, { initial: !1, children: H })), (n[57] = H), (n[58] = ie));
  let U;
  return (
    n[59] !== a || n[60] !== V || n[61] !== ie || n[62] !== o
      ? ((U = (0, Q.jsxs)(ge, { "aria-label": o, children: [a, V, ie] })),
        (n[59] = a),
        (n[60] = V),
        (n[61] = ie),
        (n[62] = o),
        (n[63] = U))
      : (U = n[63]),
    U
  );
}
var or, Q, sr;
function cr() {
  return (cr = e(() => {
    ((or = q()),
      j(),
      O(),
      o(),
      re(),
      H(),
      se(),
      r(),
      n(),
      p(),
      w(),
      Me(),
      b(),
      (Q = Y()),
      (sr = { duration: 0.15, ease: G.ease }));
  }))();
}
function lr(e) {
  let t = (0, ur.c)(5),
    n,
    r;
  (t[0] === e ? ((n = t[1]), (r = t[2])) : (({ variant: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r)),
    Zn(d(a), void 0, r));
  let i;
  return (t[3] === n ? (i = t[4]) : ((i = (0, dr.jsx)(ar, { ...n })), (t[3] = n), (t[4] = i)), i);
}
var ur, dr;
function fr() {
  return (fr = e(() => {
    ((ur = q()), v(), cr(), J(), er(), (dr = Y()));
  }))();
}
function pr(e) {
  let t = (0, mr.c)(8),
    { initialTab: n, variant: r } = e,
    i = d(a);
  Zn(i, gr, r);
  let o;
  t[0] !== n || t[1] !== i || t[2] !== r
    ? ((o = () => {
        (St(i, gr, r), wn(i, { hostId: V, initialTab: n }));
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, hr.jsx)(g, { className: `mt-0.5 shrink-0 text-tertiary`, asset: s })), (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, hr.jsx)(`span`, {
        className: `min-w-0 flex-1 text-sm leading-5 select-none`,
        children: (0, hr.jsx)(u, {
          id: `sidebarOnboardingChecklist.finishConnectingImportedTools`,
          defaultMessage: `Connect imported tools`,
          description: `Onboarding checklist item for finishing setup of imported tools`,
        }),
      })),
      (t[5] = l))
    : (l = t[5]);
  let f;
  return (
    t[6] === o
      ? (f = t[7])
      : ((f = (0, hr.jsxs)(`button`, {
          className: `flex w-full cursor-interaction items-start gap-2 rounded-lg p-1.5 text-start hover:bg-primary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-border`,
          type: `button`,
          onClick: o,
          children: [c, l],
        })),
        (t[6] = o),
        (t[7] = f)),
    f
  );
}
var mr, hr, gr;
function _r() {
  return (_r = e(() => {
    ((mr = q()),
      l(),
      v(),
      H(),
      _(),
      On(),
      J(),
      Nt(),
      mt(),
      er(),
      (hr = Y()),
      (gr = `finish_connecting_imported_tools`));
  }))();
}
var vr, yr, br;
function xr() {
  return (xr = e(() => {
    (v(),
      ae(),
      J(),
      gt(),
      Yt(),
      sn(),
      (vr = 1e3),
      (yr = 6e4),
      (br = D(a, (e, { get: t, scope: n }) => {
        let r = m.systemPermissions,
          i = Ae(t(De), e),
          a = t(nt, e),
          o =
            i?.notificationPermissionItemIncluded == null &&
            i?.items.some((e) => e.id === `enable_notifications` && Ft(e)) === !0;
        return {
          enabled: r != null && (o || (a != null && !Ye(i, `enable_notifications`))),
          queryFn: async () => {
            let t;
            return r == null
              ? null
              : ((t = await r.getNotificationPermissionStatus()),
                Ze(n, e, t),
                t === `enabled` &&
                  n.get(nt, e) != null &&
                  !Ye(Ae(n.get(De), e), `enable_notifications`) &&
                  ze(n, e, `enable_notifications`),
                t);
          },
          queryKey: [`sidebar-onboarding-checklist`, `notifications-enabled`, e],
          refetchInterval: () => {
            let t = n.get(nt, e);
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
  return (X(br, t), null);
}
function Cr() {
  return (Cr = e(() => {
    (v(), xr());
  }))();
}
function wr() {
  return (wr = e(() => {
    (q(), v(), H(), se(), K(), N(), h(), J(), fn(), sn(), Y());
  }))();
}
function Tr(e) {
  let t = (0, Er.c)(69),
    {
      accountId: n,
      accountState: r,
      debugOverride: i,
      isClaudeImportInFlight: o,
      isChecklistExpanded: s,
      isChecklistVisible: c,
      mailProvider: l,
      plan: u,
      representativeRole: f,
      roles: p,
      taskDefinitions: h,
    } = e,
    g = d(a),
    _ = C(Ue) === !0,
    v;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = new Set()), (t[0] = v)) : (v = t[0]);
  let y = (0, Dr.useRef)(v),
    b = kt(`2073431215`),
    x;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { disableExposureLog: !0 }), (t[1] = x))
    : (x = t[1]);
  let S = Mt(on, x),
    ee = C(fe),
    { client: w, isLoading: T } = xt(),
    E = Je(),
    D;
  t[2] !== ee || t[3] !== l || t[4] !== u || t[5] !== f || t[6] !== p || t[7] !== S || t[8] !== h
    ? ((D = un({
        canEnableNotifications: m.systemPermissions != null && m.notificationPermissionsSupported !== !1,
        generalAssignment: S.get(`general`, []),
        hideGoogleWorkspaceItems: ee,
        mailProvider: l ?? `other`,
        plan: u,
        representativeRole: f,
        roleAssignment: f == null ? [] : S.get(f, []),
        roles: p,
        taskDefinitions: h,
      })),
      (t[2] = ee),
      (t[3] = l),
      (t[4] = u),
      (t[5] = f),
      (t[6] = p),
      (t[7] = S),
      (t[8] = h),
      (t[9] = D))
    : (D = t[9]);
  let { itemIds: O } = D,
    k;
  t[10] !== r || t[11] !== i || t[12] !== b || t[13] !== c || t[14] !== l
    ? ((k = b && c && i == null && l != null && xe(r)),
      (t[10] = r),
      (t[11] = i),
      (t[12] = b),
      (t[13] = c),
      (t[14] = l),
      (t[15] = k))
    : (k = t[15]);
  let A = !_ && k,
    te;
  t[16] === A ? (te = t[17]) : ((te = { enabled: A }), (t[16] = A), (t[17] = te));
  let { data: j, isError: M, isFetching: N } = X(Tt, V, te),
    P;
  t[18] === A ? (P = t[19]) : ((P = { enabled: A }), (t[18] = A), (t[19] = P));
  let { data: F, isError: I, isFetching: ne } = X(he, V, P),
    re;
  t[20] !== j || t[21] !== F
    ? ((re = j != null && F != null && Qe({ histories: j, importStatus: F })),
      (t[20] = j),
      (t[21] = F),
      (t[22] = re))
    : (re = t[22]);
  let L = re,
    R = A && !M && !I && !N && !ne && !L,
    z;
  t[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((z = Le(!1)), (t[23] = z)) : (z = t[23]);
  let B;
  t[24] !== E || t[25] !== R
    ? ((B = {
        cacheDiscovery: !0,
        enabled: R,
        hostId: V,
        providers: z,
        refetchOnWindowFocus: !0,
        retry: !1,
        sessionLimits: E,
      }),
      (t[24] = E),
      (t[25] = R),
      (t[26] = B))
    : (B = t[26]);
  let {
      detectedItems: H,
      hasDetectionRefreshError: ie,
      hasImportableItems: U,
      isDetectionFetching: ae,
    } = lt(B),
    oe = A && j != null && F != null && !M && !I && !ie && (U || (R && !ae)),
    W;
  t[27] !== oe || t[28] !== L || t[29] !== U || t[30] !== _
    ? (_ || L ? (W = !1) : oe && (W = U), (t[27] = oe), (t[28] = L), (t[29] = U), (t[30] = _), (t[31] = W))
    : (W = t[31]);
  let G;
  if (t[32] !== W || t[33] !== T || t[34] !== w) {
    if (W !== !0) G = W;
    else if (!T) {
      let e;
      (t[36] === w
        ? (e = t[37])
        : ((e = Ve(w, Or, { disableExposureLog: !0 }).get(`show_task`, !1)), (t[36] = w), (t[37] = e)),
        (G = e === !0));
    }
    ((t[32] = W), (t[33] = T), (t[34] = w), (t[35] = G));
  } else G = t[35];
  let se;
  t[38] !== n || t[39] !== G || t[40] !== O || t[41] !== o || t[42] !== g || t[43] !== A
    ? ((se = () => {
        n != null && !o && A && G != null && He(g, n, G, O);
      }),
      (t[38] = n),
      (t[39] = G),
      (t[40] = O),
      (t[41] = o),
      (t[42] = g),
      (t[43] = A),
      (t[44] = se))
    : (se = t[44]);
  let K;
  (t[45] !== n || t[46] !== G || t[47] !== O || t[48] !== o || t[49] !== g || t[50] !== A
    ? ((K = [n, G, O, o, g, A]),
      (t[45] = n),
      (t[46] = G),
      (t[47] = O),
      (t[48] = o),
      (t[49] = g),
      (t[50] = A),
      (t[51] = K))
    : (K = t[51]),
    (0, Dr.useEffect)(se, K));
  let q;
  t[52] !== n || t[53] !== W || t[54] !== s || t[55] !== T || t[56] !== w
    ? ((q = () => {
        n == null ||
          !s ||
          W !== !0 ||
          T ||
          y.current.has(n) ||
          (y.current.add(n), Ve(w, Or).get(`show_task`, !1));
      }),
      (t[52] = n),
      (t[53] = W),
      (t[54] = s),
      (t[55] = T),
      (t[56] = w),
      (t[57] = q))
    : (q = t[57]);
  let J;
  (t[58] !== n || t[59] !== W || t[60] !== s || t[61] !== T || t[62] !== w
    ? ((J = [n, W, s, T, w]), (t[58] = n), (t[59] = W), (t[60] = s), (t[61] = T), (t[62] = w), (t[63] = J))
    : (J = t[63]),
    (0, Dr.useEffect)(q, J));
  let Y = A && G == null,
    ce;
  return (
    t[64] !== G || t[65] !== H || t[66] !== E || t[67] !== Y
      ? ((ce = { claudeImportAvailable: G, isPending: Y, detectedClaudeImportItems: H, sessionLimits: E }),
        (t[64] = G),
        (t[65] = H),
        (t[66] = E),
        (t[67] = Y),
        (t[68] = ce))
      : (ce = t[68]),
    ce
  );
}
var Er, Dr, Or;
function kr() {
  return (kr = e(() => {
    ((Er = q()),
      v(),
      (Dr = le()),
      et(),
      Et(),
      qt(),
      pe(),
      Ct(),
      Vt(),
      ae(),
      J(),
      Nt(),
      pt(),
      ln(),
      Yt(),
      sn(),
      (Or = `1514783977`));
  }))();
}
function Ar(e) {
  let t = (0, Mr.c)(33),
    { accountId: n, isChecklistActive: r, isChecklistExpanded: i } = e,
    a = C(Ue) === !0,
    o = r && !a,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = new Set()), (t[0] = s)) : (s = t[0]);
  let c = (0, Nr.useRef)(s),
    { client: l, isLoading: u } = xt(),
    d;
  t[1] === o ? (d = t[2]) : ((d = { enabled: o }), (t[1] = o), (t[2] = d));
  let { data: f, isError: p } = X(Tt, V, d),
    m;
  t[3] === o ? (m = t[4]) : ((m = { enabled: o }), (t[3] = o), (t[4] = m));
  let { data: h, isError: g } = X(he, V, m),
    _;
  t[5] !== h || t[6] !== f || t[7] !== o || t[8] !== g || t[9] !== p
    ? ((_ = o && Qe({ histories: p ? void 0 : f, importStatus: g ? void 0 : h })),
      (t[5] = h),
      (t[6] = f),
      (t[7] = o),
      (t[8] = g),
      (t[9] = p),
      (t[10] = _))
    : (_ = t[10]);
  let v = _,
    y;
  t[11] === v ? (y = t[12]) : ((y = { enabled: v, hostId: V }), (t[11] = v), (t[12] = y));
  let { hasImportedHooks: b, initialTab: x, isLoading: S, tabStatus: ee } = En(y),
    w = v && !S && (x != null || b) ? (x ?? `hooks`) : null,
    T = w != null && !u && Ve(l, Pr, { disableExposureLog: !0 }).get(`show_task`, !1) === !0,
    E,
    D;
  (t[13] !== n || t[14] !== w || t[15] !== i || t[16] !== u || t[17] !== l
    ? ((E = () => {
        n == null ||
          !i ||
          w == null ||
          u ||
          c.current.has(n) ||
          (c.current.add(n), Ve(l, Pr).get(`show_task`, !1));
      }),
      (D = [n, w, i, u, l]),
      (t[13] = n),
      (t[14] = w),
      (t[15] = i),
      (t[16] = u),
      (t[17] = l),
      (t[18] = E),
      (t[19] = D))
    : ((E = t[18]), (D = t[19])),
    (0, Nr.useEffect)(E, D));
  let O = w != null && T ? w : null,
    k;
  t[20] !== h ||
  t[21] !== f ||
  t[22] !== o ||
  t[23] !== g ||
  t[24] !== p ||
  t[25] !== S ||
  t[26] !== u ||
  t[27] !== v ||
  t[28] !== ee
    ? ((k = o && (f == null || h == null || p || g || S || (v && Object.values(ee).some(jr)) || u)),
      (t[20] = h),
      (t[21] = f),
      (t[22] = o),
      (t[23] = g),
      (t[24] = p),
      (t[25] = S),
      (t[26] = u),
      (t[27] = v),
      (t[28] = ee),
      (t[29] = k))
    : (k = t[29]);
  let A;
  return (
    t[30] !== O || t[31] !== k
      ? ((A = { tab: O, isPending: k }), (t[30] = O), (t[31] = k), (t[32] = A))
      : (A = t[32]),
    A
  );
}
function jr(e) {
  return e !== `ready`;
}
var Mr, Nr, Pr;
function Fr() {
  return (Fr = e(() => {
    ((Mr = q()), v(), (Nr = le()), et(), pe(), An(), Nt(), pt(), (Pr = `3355507188`));
  }))();
}
function Ir(e) {
  let t = (0, Jr.c)(61),
    { className: n, isVisible: r, checklistStateKey: i, onboardingRole: o, finishedContent: s } = e,
    c = r === void 0 || r,
    l = d(a),
    f = C(Ue) === !0,
    p = ee(),
    m = (0, Yr.useRef)(null),
    h;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = { disableExposureLog: !0 }), (t[0] = h))
    : (h = t[0]);
  let _ = an(h),
    v = cn(),
    y;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = { enabled: !0 }), (t[1] = y)) : (y = t[1]);
  let { data: b } = X(je, V, y),
    x;
  t[2] === b ? (x = t[3]) : ((x = b != null && (b.find(Kr)?.enabled ?? !0)), (t[2] = b), (t[3] = x));
  let S = x,
    w = kt(`2186196265`),
    { accountId: T, authMethod: D, email: O, planAtLogin: k } = Lt(),
    A = i ?? T,
    { data: te } = Se(),
    j = C(At),
    M = C(Ut) ?? rt,
    N = E(),
    P = _e(),
    F = Jt(),
    ne = st(),
    { isLoading: re } = xt(),
    [R, z] = (0, Yr.useState)(null),
    B = C(De),
    H = C(Rt),
    ie = C(dn),
    U = A == null ? void 0 : We(B, A, H),
    ae;
  t[4] === O ? (ae = t[5]) : ((ae = $t(O)), (t[4] = O), (t[5] = ae));
  let oe = ae,
    W = T != null && j == null,
    G;
  t[6] === W ? (G = t[7]) : ((G = { enabled: W }), (t[6] = W), (t[7] = G));
  let se = X(nn, oe, G),
    K = tn({ debugOverride: j, detectedProvider: se.data?.provider, emailDomain: oe, isError: se.isError }),
    q = te?.plan_type ?? k,
    J = o ?? ke({ roleSelectionSkipped: !1, roles: M.roles }),
    Y =
      U == null || K == null
        ? []
        : jn({
            items: U.items.filter(Gr),
            locale: p.locale,
            mailProvider: K,
            plan: q,
            representativeRole: J,
            taskDefinitions: _,
          }),
    ce = Sn({ additionalPluginNames: U?.items.flatMap(Wr), items: Y, remotePluginIdsByName: v }),
    le = Array.from(new Set(ce.values())),
    ue = C(be) != null,
    {
      claudeImportAvailable: de,
      isPending: fe,
      detectedClaudeImportItems: pe,
      sessionLimits: me,
    } = Tr({
      accountId: A,
      accountState: U,
      debugOverride: H,
      isClaudeImportInFlight: ue,
      isChecklistExpanded: U?.collapsed === !1,
      isChecklistVisible: c && U?.expired !== !0,
      mailProvider: K,
      plan: q,
      representativeRole: J,
      roles: M.roles,
      taskDefinitions: _,
    }),
    he = U != null && c && H == null && U.dismissed !== !0 && U.expired !== !0,
    ge = U?.collapsed === !1,
    ve;
  t[8] !== A || t[9] !== he || t[10] !== ge
    ? ((ve = { accountId: A, isChecklistActive: he, isChecklistExpanded: ge }),
      (t[8] = A),
      (t[9] = he),
      (t[10] = ge),
      (t[11] = ve))
    : (ve = t[11]);
  let { tab: ye, isPending: xe } = Ar(ve),
    we = S && c && U != null && U.dismissed !== !0 && U.expired !== !0 && K != null,
    Te = we && !w,
    Ee;
  t[12] === Te ? (Ee = t[13]) : ((Ee = { enabled: Te }), (t[12] = Te), (t[13] = Ee));
  let { data: Ae } = X(Bt, V, Ee),
    Me = we && le.length > 0,
    Ne;
  t[14] === Me ? (Ne = t[15]) : ((Ne = { enabled: Me }), (t[14] = Me), (t[15] = Ne));
  let { data: Pe } = X(hn, { authMethod: D, hostId: V, plan: q, pluginIds: le }, Ne);
  if ((X(it, A), !c || T == null || A == null || K == null || U == null)) {
    let e;
    return (
      t[16] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)($.Fragment, { children: (0, $.jsx)(Re, { children: null }) })), (t[16] = e))
        : (e = t[16]),
      e
    );
  }
  if (U.dismissed) {
    let e;
    return (
      t[17] === s ? (e = t[18]) : ((e = (0, $.jsx)($.Fragment, { children: s })), (t[17] = s), (t[18] = e)),
      e
    );
  }
  let Fe = U.items.filter((e) => {
      if (f && e.id === `claude_import`) return !1;
      let t = e.id !== `claude_import` || e.completed || H != null || ue || de === !0,
        n = e.id !== `enable_notifications` || !Ft(e) || U.notificationPermissionItemIncluded === !0;
      return t && n;
    }),
    Ie = new Map(Y.map(Ur)),
    Le;
  t[19] !== S || t[20] !== w || t[21] !== Ae?.plugins || t[22] !== Pe
    ? ((Le = w ? (Pe?.map(Hr) ?? []) : [...(Ae?.plugins ?? []), ...(Pe?.map(Vr) ?? [])].filter(Br)),
      S || (Le = []),
      (t[19] = S),
      (t[20] = w),
      (t[21] = Ae?.plugins),
      (t[22] = Pe),
      (t[23] = Le))
    : (Le = t[23]);
  let ze = Qt(K, q),
    Be = Fe.flatMap((e) => {
      switch (ut(e)) {
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
    He = Be.length + (ye == null ? 0 : 1);
  if (Ve >= He) {
    let e =
        re ||
        fe ||
        ue ||
        xe ||
        U.items.some(
          (e) =>
            e.id === `enable_notifications` &&
            !e.completed &&
            Ft(e) &&
            U.notificationPermissionItemIncluded == null,
        ),
      n;
    t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(Re, { children: null })), (t[24] = n))
      : (n = t[24]);
    let r = He > 0 && !e ? s : null,
      i;
    t[25] === A ? (i = t[26]) : ((i = (0, $.jsx)(Sr, { accountId: A })), (t[25] = A), (t[26] = i));
    let a;
    return (
      t[27] !== r || t[28] !== i
        ? ((a = (0, $.jsxs)($.Fragment, { children: [n, r, i] })), (t[27] = r), (t[28] = i), (t[29] = a))
        : (a = t[29]),
      a
    );
  }
  let Ge = [...Be.filter(Rr), ...Be.filter(Lr)],
    Ke;
  t[30] === p
    ? (Ke = t[31])
    : ((Ke = p.formatMessage({
        id: `sidebarOnboardingChecklist.title`,
        defaultMessage: `Getting started`,
        description: `Title for the onboarding checklist shown in the sidebar.`,
      })),
      (t[30] = p),
      (t[31] = Ke));
  let qe = Ke,
    Je = () => {
      let e = !U.collapsed;
      (e && Ht(l, U.variant), Oe(l, A, e));
    },
    Ye = Re,
    Xe;
  t[32] === n ? (Xe = t[33]) : ((Xe = I(`w-full`, n)), (t[32] = n), (t[33] = Xe));
  let Ze = lr,
    Qe = U.variant,
    $e = U.collapsed,
    et = () => {
      (jt(l, U.variant), Ce(l, A));
    },
    tt;
  t[34] !== T || t[35] !== A
    ? ((tt = (0, $.jsx)(qr, { accountId: T, checklistStateKey: A })), (t[34] = T), (t[35] = A), (t[36] = tt))
    : (tt = t[36]);
  let nt;
  t[37] === A ? (nt = t[38]) : ((nt = (0, $.jsx)(Sr, { accountId: A })), (t[37] = A), (t[38] = nt));
  let at;
  t[39] === Symbol.for(`react.memo_cache_sentinel`) ? ((at = null), (t[39] = at)) : (at = t[39]);
  let ot;
  t[40] !== tt || t[41] !== nt
    ? ((ot = (0, $.jsxs)($.Fragment, { children: [tt, nt, at] })), (t[40] = tt), (t[41] = nt), (t[42] = ot))
    : (ot = t[42]);
  let ct = ye == null ? null : (0, $.jsx)(pr, { initialTab: ye, variant: U.variant }),
    lt = Ge.map((e) => {
      switch (e.type) {
        case `checklist_item`: {
          let t = Tn(e.item, p),
            n = ie && e.item.action === `enable_notifications`,
            r = R === e.item.id;
          return (0, $.jsx)(
            tr,
            {
              variant: U.variant,
              installedPlugins: Le,
              isCompleted: e.isCompleted,
              isLoading: n || r || (ue && e.item.action === `import_claude`),
              item: e.item,
              label: t,
              reducedMotion: N,
              onClick: (t) => {
                if (r && e.threadId == null) return;
                let { currentTarget: n } = t;
                (St(l, e.item.id, U.variant),
                  e.item.action === `start_prompt` && z(e.item.id),
                  Pn({
                    scope: l,
                    accountId: T,
                    checklistStateKey: A,
                    detectedClaudeImportItems: pe,
                    importSessionLimits: me,
                    intl: p,
                    item: e.item,
                    restoreFocus: () => {
                      if (n.isConnected) {
                        n.focus();
                        return;
                      }
                      m.current?.focus();
                    },
                    navigateToLocalConversation: F,
                    startNewConversation: P,
                    statsigClient: ne,
                  }).finally(() => {
                    e.item.action === `start_prompt` && z(null);
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
                (0, $.jsx)(g, { className: `mt-0.5 shrink-0 text-default`, asset: L }),
                (0, $.jsx)(`span`, {
                  className: `min-w-0 flex-1 text-sm leading-5 text-tertiary line-through`,
                  children: (0, $.jsx)(u, {
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
    dt;
  t[43] !== Ze ||
  t[44] !== U ||
  t[45] !== Ve ||
  t[46] !== N ||
  t[47] !== et ||
  t[48] !== ot ||
  t[49] !== ct ||
  t[50] !== lt ||
  t[51] !== qe ||
  t[52] !== Je ||
  t[53] !== He
    ? ((dt = (0, $.jsxs)(Ze, {
        variant: Qe,
        title: qe,
        titleButtonRef: m,
        collapsed: $e,
        completedCount: Ve,
        totalCount: He,
        reducedMotion: N,
        onToggleCollapsed: Je,
        onDismiss: et,
        beforeHeader: ot,
        children: [ct, lt],
      })),
      (t[43] = Ze),
      (t[44] = U),
      (t[45] = Ve),
      (t[46] = N),
      (t[47] = et),
      (t[48] = ot),
      (t[49] = ct),
      (t[50] = lt),
      (t[51] = qe),
      (t[52] = Je),
      (t[53] = He),
      (t[54] = dt))
    : (dt = t[54]);
  let ft;
  t[55] !== Xe || t[56] !== dt
    ? ((ft = (0, $.jsx)(`div`, { className: Xe, children: dt })), (t[55] = Xe), (t[56] = dt), (t[57] = ft))
    : (ft = t[57]);
  let pt;
  return (
    t[58] !== Ye || t[59] !== ft
      ? ((pt = (0, $.jsx)($.Fragment, { children: (0, $.jsx)(Ye, { children: ft }) })),
        (t[58] = Ye),
        (t[59] = ft),
        (t[60] = pt))
      : (pt = t[60]),
    pt
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
  return Ft(e) || ut(e) === `claude_import`;
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
    X(Xr, i),
    null
  );
}
var Jr, Yr, $, Xr;
function Zr() {
  return (Zr = e(() => {
    ((Jr = q()),
      ne(),
      O(),
      v(),
      W(),
      (Yr = le()),
      H(),
      vt(),
      ve(),
      _(),
      et(),
      pe(),
      f(),
      we(),
      en(),
      at(),
      Vt(),
      pn(),
      ft(),
      Ge(),
      J(),
      Nt(),
      Dt(),
      pt(),
      Wt(),
      Ln(),
      Hn(),
      ir(),
      gt(),
      Dn(),
      mt(),
      Yt(),
      fr(),
      rn(),
      _r(),
      fn(),
      Cr(),
      wr(),
      sn(),
      kr(),
      Fr(),
      ($ = Y()),
      (Xr = te(a, (e) => null, { onMount: (e, t) => de(t, t.key.accountId, t.key.checklistStateKey) })));
  }))();
}
export { Zr as n, Ir as t };
//# sourceMappingURL=sidebar-onboarding-checklist.electron-ecfa5cc73ca0.js.map
