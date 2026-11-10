import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  Bst as i,
  DB as a,
  El as o,
  FBt as s,
  HI as c,
  IH as l,
  KSt as u,
  LNt as d,
  Mst as f,
  NH as p,
  NSt as m,
  OB as h,
  Oit as g,
  PBt as _,
  Qst as v,
  TY as y,
  Tl as b,
  USt as x,
  VSt as S,
  Vrt as C,
  WI as w,
  WOt as T,
  X3 as E,
  XG as D,
  XOt as O,
  XSt as k,
  Y3 as A,
  Yst as j,
  Z3 as M,
  ZSt as N,
  Zst as P,
  bSt as F,
  ck as I,
  ew as L,
  git as ee,
  hU as te,
  hit as ne,
  hut as re,
  iCt as R,
  iw as ie,
  jit as z,
  jst as ae,
  lit as oe,
  lk as se,
  mCt as ce,
  mut as le,
  nCt as ue,
  oit as de,
  okt as fe,
  qrt as pe,
  rk as me,
  sw as B,
  tk as he,
  tkt as V,
  uCt as ge,
  uk as _e,
  uw as ve,
  vD as ye,
  yD as be,
  zst as xe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as Se,
  BRr as Ce,
  C5n as we,
  Cjr as Te,
  Emr as Ee,
  FF as De,
  GLn as Oe,
  Get as ke,
  Hcn as Ae,
  I5n as je,
  L5n as Me,
  LF as Ne,
  QF as Pe,
  RF as Fe,
  S5n as Ie,
  SRn as Le,
  Sjr as Re,
  Tcn as ze,
  Ucn as Be,
  V6n as Ve,
  Wet as He,
  XF as Ue,
  Y6n as We,
  ZF as Ge,
  ZLn as Ke,
  _8n as qe,
  _Mn as Je,
  _p as Ye,
  b5n as Xe,
  bRn as Ze,
  cA as Qe,
  do as $e,
  eI as et,
  eRn as tt,
  f8n as nt,
  gMn as rt,
  gp as it,
  hut as at,
  iRr as ot,
  imr as st,
  jcn as ct,
  mut as lt,
  qLn as ut,
  rmr as dt,
  sA as H,
  sRr as ft,
  tRn as pt,
  uo as mt,
  wLr as ht,
  wcn as gt,
  wmr as _t,
  x5n as vt,
  xMr as yt,
  xjr as bt,
  yMr as xt,
  zRr as St,
} from "./app-initial-ad16eaadf81f.js";
import { Jl as Ct, Yl as wt } from "./app-primary-3e00728c2a4c.js";
import { i as Tt, n as Et } from "./view-page-dd92188ae5b3.js";
import { n as Dt, t as Ot } from "./code-review-access-72a8a9b167a7.js";
import { a as kt, i as At, o as jt, r as Mt } from "./cloud-preferences-9ffa0fef6409.js";
function U(e) {
  let t = (0, zt.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ label: r, description: n, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  t[4] === i ? (a = t[5]) : ((a = (e) => (0, W.jsx)(Nt, { ...i, ...e })), (t[4] = i), (t[5] = a));
  let o;
  return (
    t[6] !== n || t[7] !== r || t[8] !== a
      ? ((o = (0, W.jsx)(B, { label: r, description: n, control: a })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
function Nt(e) {
  let t = (0, zt.c)(40),
    n,
    r,
    i,
    a,
    o,
    s,
    c;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]), (c = t[7]))
    : (({ value: c, options: a, disabled: r, onChange: i, renderLabel: s, renderDescription: o, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c));
  let l = (0, Bt.useId)(),
    u = o == null ? void 0 : `panelWide`,
    d = n[`aria-labelledby`] == null ? void 0 : `${n[`aria-labelledby`]} ${l}`,
    f;
  t[8] !== n || t[9] !== l
    ? ((f =
        n[`aria-label`] == null ? n[`aria-describedby`] : [n[`aria-describedby`], l].filter(Pt).join(` `)),
      (t[8] = n),
      (t[9] = l),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== s || t[12] !== c ? ((p = s(c)), (t[11] = s), (t[12] = c), (t[13] = p)) : (p = t[13]);
  let m;
  t[14] !== p || t[15] !== l
    ? ((m = (0, W.jsx)(`span`, { id: l, children: p })), (t[14] = p), (t[15] = l), (t[16] = m))
    : (m = t[16]);
  let h;
  t[17] !== n || t[18] !== r || t[19] !== d || t[20] !== f || t[21] !== m
    ? ((h = (0, W.jsx)(De, { ...n, "aria-labelledby": d, "aria-describedby": f, disabled: r, children: m })),
      (t[17] = n),
      (t[18] = r),
      (t[19] = d),
      (t[20] = f),
      (t[21] = m),
      (t[22] = h))
    : (h = t[22]);
  let g;
  if (t[23] !== i || t[24] !== a || t[25] !== o || t[26] !== s) {
    let e;
    (t[28] !== i || t[29] !== o || t[30] !== s
      ? ((e = (e) =>
          (0, W.jsx)(me.RadioItem, { value: e, onSelect: () => i(e), SubText: o?.(e), children: s(e) }, e)),
        (t[28] = i),
        (t[29] = o),
        (t[30] = s),
        (t[31] = e))
      : (e = t[31]),
      (g = a.map(e)),
      (t[23] = i),
      (t[24] = a),
      (t[25] = o),
      (t[26] = s),
      (t[27] = g));
  } else g = t[27];
  let _;
  t[32] !== g || t[33] !== c
    ? ((_ = (0, W.jsx)(me.RadioGroup, { value: c, children: g })), (t[32] = g), (t[33] = c), (t[34] = _))
    : (_ = t[34]);
  let v;
  return (
    t[35] !== r || t[36] !== u || t[37] !== h || t[38] !== _
      ? ((v = (0, W.jsx)(he, { contentWidth: u, disabled: r, triggerButton: h, children: _ })),
        (t[35] = r),
        (t[36] = u),
        (t[37] = h),
        (t[38] = _),
        (t[39] = v))
      : (v = t[39]),
    v
  );
}
function Pt(e) {
  return e != null;
}
function Ft(e) {
  let n = (0, zt.c)(26),
    { title: r, children: i, security: a, preferences: o, disabled: s, onUpdate: c } = e,
    l = a !== void 0 && a,
    u = o.global_review_preference !== `never_review`,
    d = o.review_preference === `team` ? `team` : `personal`;
  o.global_review_preference === `review_everyone` && (d = `everyone`);
  let f;
  n[0] === r ? (f = n[1]) : ((f = (0, W.jsx)(H.Header, { title: r })), (n[0] = r), (n[1] = f));
  let p = String(l),
    m;
  n[2] === p
    ? (m = n[3])
    : ((m = (0, W.jsx)(V, {
        id: `settings.codeReview.repository.automatic`,
        defaultMessage: `{security, select, true {Auto security review} other {Automatic review}}`,
        description: `Label for the repository setting that enables automatic reviews. Security reviews look for vulnerabilities; the other option reviews code.`,
        values: { security: p },
      })),
      (n[2] = p),
      (n[3] = m));
  let h;
  n[4] === u
    ? (h = n[5])
    : ((h = u
        ? void 0
        : (0, W.jsx)(V, {
            id: `settings.codeReview.repository.manualReviewNotice`,
            defaultMessage: `You can still request a review with @codex`,
            description: `Notice shown while automatic repository reviews are disabled. Signed-in Codex users can request a manual review by mentioning @codex.`,
          })),
      (n[4] = u),
      (n[5] = h));
  let g;
  n[6] !== s || n[7] !== u || n[8] !== c
    ? ((g = (e) =>
        (0, W.jsx)(se, {
          ...e,
          checked: u,
          disabled: s,
          onChange: (e) => c({ global_review_preference: e ? `review_if_enabled` : `never_review` }),
        })),
      (n[6] = s),
      (n[7] = u),
      (n[8] = c),
      (n[9] = g))
    : (g = n[9]);
  let _;
  n[10] !== m || n[11] !== h || n[12] !== g
    ? ((_ = (0, W.jsx)(B, { label: m, description: h, control: g })),
      (n[10] = m),
      (n[11] = h),
      (n[12] = g),
      (n[13] = _))
    : (_ = n[13]);
  let v;
  n[14] !== s || n[15] !== u || n[16] !== c || n[17] !== d
    ? ((v = u
        ? (0, W.jsx)(U, {
            label: (0, W.jsx)(V, {
              id: `settings.codeReview.repository.scope`,
              defaultMessage: `Review`,
              description: `Label for selecting whose pull requests receive automatic reviews in repository settings.`,
            }),
            value: d,
            options: [`everyone`, `team`, `personal`],
            disabled: s,
            onChange: (e) =>
              c({
                global_review_preference: e === `everyone` ? `review_everyone` : `review_if_enabled`,
                review_preference: e === `personal` ? `never` : `team`,
              }),
            renderLabel: It,
          })
        : null),
      (n[14] = s),
      (n[15] = u),
      (n[16] = c),
      (n[17] = d),
      (n[18] = v))
    : (v = n[18]);
  let y = u ? i : null,
    b;
  n[19] !== _ || n[20] !== v || n[21] !== y
    ? ((b = (0, W.jsx)(H.Content, { children: (0, W.jsxs)(t, { children: [_, v, y] }) })),
      (n[19] = _),
      (n[20] = v),
      (n[21] = y),
      (n[22] = b))
    : (b = n[22]);
  let x;
  return (
    n[23] !== b || n[24] !== f
      ? ((x = (0, W.jsxs)(H, { children: [f, b] })), (n[23] = b), (n[24] = f), (n[25] = x))
      : (x = n[25]),
    x
  );
}
function It(e) {
  return (0, W.jsx)(V, {
    id: `settings.codeReview.repository.scope.option`,
    defaultMessage: `{scope, select, everyone {All PRs} team {Team PRs} other {Follow personal preferences}}`,
    description: `Automatic review scope in repository settings. All PRs includes every contributor, Team PRs preserves an existing workspace setting, and Follow personal preferences lets each contributor opt in. PR means pull request.`,
    values: { scope: e },
  });
}
function Lt(e) {
  let t = (0, zt.c)(2),
    { value: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, W.jsx)(V, {
          id: `settings.codeReview.repository.trigger.option`,
          defaultMessage: `{value, select, personal {Follow personal preferences} pr_open {On PR open} every_push {On every push} smart_detect {Smart detect (Experimental)} code_review {Whenever code review runs} other {Unknown}}`,
          description: `Options for when automatic repository reviews run. PR means pull request. Smart detect lets Codex decide whether changed code needs another review.`,
          values: { value: n },
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Rt(e) {
  let t = (0, zt.c)(2),
    { value: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, W.jsx)(V, {
          id: `settings.codeReview.repository.severity.option.v2`,
          defaultMessage: `{value, select, critical {Critical} high {High} medium {Medium} low {Low} inherit {Use repository setting} other {Unknown}}`,
          description: `Minimum severity of vulnerability findings reported or blocked by repository security review. The inherit option uses the corresponding automatic or manual repository setting for a path override.`,
          values: { value: n },
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var zt, Bt, W;
function Vt() {
  return (Vt = e(() => {
    ((zt = _()), (Bt = s()), O(), I(), _e(), Qe(), ve(), Fe(), L(), (W = d()));
  }))();
}
function Ht(e, t) {
  let n = e,
    r = /^https?:\/\//i.test(n),
    i = n.replace(/^www\./i, ``),
    a = t === `gitlab` ? `gitlab.com/` : `github.com/`;
  if (r || i.toLowerCase().startsWith(a)) {
    let e = URL.parse(r ? n : `https://${i}`);
    if (e == null) return null;
    n = e.pathname;
  }
  (t === `github` && (n = n.toLowerCase()), (n = n.replace(/\.git$/, ``)));
  let o = n.split(`/`).filter(Boolean);
  if (t === `gitlab`) {
    let e = o.findIndex((e, t) => t >= 2 && e === `-`);
    e !== -1 && (o = o.slice(0, e));
  }
  return o.length < 2 ? null : t === `gitlab` ? o.join(`/`) : o.slice(0, 2).join(`/`);
}
var Ut, Wt, Gt, Kt, qt;
function Jt() {
  return (Jt = e(() => {
    (N(),
      Xe(),
      Ee(),
      ht(),
      r(),
      i(),
      ft(),
      g(),
      (Ut = 8),
      1e3 / Ut,
      (Wt = ce(v, (e, { get: t, scope: n }) => {
        let r = t(St),
          i = t(Ce);
        return {
          queryKey: [`repository-review-connectors`, r, i, e],
          enabled: !!r && !!i,
          queryFn: async ({ client: t, signal: a }) => {
            let o = (await vt({ provider: e, applyEligibilityFilter: !0 })).filter(
              (e) => e.status !== `DISABLED_BY_ADMIN` && e.labels?.admin_only_connector !== `true`,
            );
            if (o.length === 0) return [];
            a.throwIfAborted();
            let s = await t.fetchQuery({
              ..._t({ accountId: r, userId: i, productSku: `CODEX` }),
              staleTime: 0,
            });
            if ((a.throwIfAborted(), n.get(St) !== r || n.get(Ce) !== i))
              throw Error(`Account changed while loading repository connections`);
            let c = new Set(s.map((e) => e.connector_id));
            return o.filter((e) => c.has(e.id));
          },
          retry: !1,
          refetchOnMount: !0,
          refetchOnWindowFocus: !0,
          staleTime: xe.FIVE_MINUTES,
        };
      })),
      (Gt = ce(v, (e, { get: t }) => ({
        queryKey: [`repository-review-settings`, t(St), `list`, e],
        queryFn: async () => {
          let t = e.search.trim();
          if (t.length === 0 && e.provider === `gitlab`)
            return ot.safeGet(`/wham/settings/code_review`, {
              parameters: {
                query: {
                  provider: e.provider,
                  next_token: e.nextToken,
                  connector_id: e.connectorId,
                  per_page: Ut,
                },
              },
            });
          let n = Number(e.nextToken ?? 1),
            r = Ht(t, e.provider);
          if (n === 1 && r != null)
            try {
              let t = await ot.safeGet(`/wham/settings/code_review/{repo_id}`, {
                expectedErrorStatuses: [400, 403, 404],
                parameters: {
                  path: { repo_id: `${e.provider}-${r}` },
                  query: { connector_id: e.connectorId },
                },
              });
              return { repo_review_settings: t.repository.archived ? [] : [t], next_token: null };
            } catch (e) {
              if (!(e instanceof z) || ![400, 403, 404].includes(e.status)) throw e;
            }
          let i = await ot.safeGet(`/wham/settings/code_review_search`, {
            parameters: {
              query: {
                query: e.provider === `github` ? `${t} archived:false`.trim() : t,
                limit: Ut,
                page: n,
                provider: e.provider,
                connector_id: e.connectorId,
              },
            },
          });
          return {
            ...i,
            next_token:
              i.repo_review_settings.length < Ut || (e.provider === `github` && n >= 125)
                ? null
                : String(n + 1),
          };
        },
        retry: !1,
        refetchOnMount: !0,
        staleTime: xe.FIVE_MINUTES,
      }))),
      (Kt = ce(v, (e, { get: t }) => ({
        queryKey: [`repository-review-settings`, t(St), `detail`, e],
        queryFn: () =>
          ot.safeGet(`/wham/settings/code_review/{repo_id}`, { parameters: { path: { repo_id: e } } }),
        retry: !1,
        refetchOnMount: !0,
        staleTime: xe.FIVE_MINUTES,
      }))),
      (qt = ge(v, (e, { scope: t }) => ({
        mutationFn: (e) =>
          ot.safePatch(`/wham/settings/code_review`, {
            expectedErrorStatuses: [400, 403, 409],
            requestBody: { repo_review_settings: [e] },
          }),
        onSuccess: async () => {
          await t.queryClient.invalidateQueries({ queryKey: [`repository-review-settings`] });
        },
        onError: async (n) => {
          n instanceof z && n.status === 409 && (await t.query.invalidate(Kt, e));
        },
      }))));
  }))();
}
function Yt(e) {
  let n = (0, tn.c)(59),
    { provider: r, onProviderChange: i, onSelectRepository: a } = e,
    o = fe(),
    [s, c] = (0, nn.useState)(``),
    l;
  n[0] === s ? (l = n[1]) : ((l = s.trim()), (n[0] = s), (n[1] = l));
  let u = Be(l, 200),
    { data: d, isPending: f, isError: p, refetch: m } = kt(),
    { data: h, isPending: g, isError: _, refetch: v } = ue(Wt, r),
    [y, b] = (0, nn.useState)(null),
    x = r === `github` ? d?.preferred_github_connector_id : d?.preferred_gitlab_connector_id,
    S = r === `github` ? `GitHub` : `GitLab`,
    C;
  n[2] !== h || n[3] !== x || n[4] !== y
    ? ((C = h?.find((e) => e.id === y) ?? h?.find((e) => e.id === x) ?? h?.[0]),
      (n[2] = h),
      (n[3] = x),
      (n[4] = y),
      (n[5] = C))
    : (C = n[5]);
  let w = C,
    T;
  if (g || f) {
    let e;
    (n[6] === S
      ? (e = n[7])
      : ((e = (0, G.jsx)(Ue, {
          children: (0, G.jsx)(V, {
            id: `settings.codeReview.repositories.connections.loading.v2`,
            defaultMessage: `Loading {provider} connections…`,
            description: `Loading state while selecting the user's saved or connected account for repository review settings. The provider is GitHub or GitLab.`,
            values: { provider: S },
          }),
        })),
        (n[6] = S),
        (n[7] = e)),
      (T = e));
  } else if (_ || p) {
    let e;
    n[8] === S
      ? (e = n[9])
      : ((e = (0, G.jsx)(V, {
          id: `settings.codeReview.repositories.connections.error.v2`,
          defaultMessage: `Unable to load {provider} connections`,
          description: `Error shown when available accounts or the preferred account cannot be loaded for repository review settings. The provider is GitHub or GitLab.`,
          values: { provider: S },
        })),
        (n[8] = S),
        (n[9] = e));
    let r;
    n[10] !== v || n[11] !== m
      ? ((r = () => {
          (v(), m());
        }),
        (n[10] = v),
        (n[11] = m),
        (n[12] = r))
      : (r = n[12]);
    let i;
    n[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, G.jsx)(V, {
          id: `settings.codeReview.repositories.connections.retry`,
          defaultMessage: `Retry`,
          description: `Retry loading available connections and the preferred account for repository review settings.`,
        })),
        (n[13] = i))
      : (i = n[13]);
    let a;
    n[14] === r
      ? (a = n[15])
      : ((a = (0, G.jsx)(A, { color: `secondary`, size: `toolbar`, onClick: r, children: i })),
        (n[14] = r),
        (n[15] = a));
    let o;
    (n[16] !== e || n[17] !== a
      ? ((o = (0, G.jsx)(t, { children: (0, G.jsx)(B, { label: e, control: a }) })),
        (n[16] = e),
        (n[17] = a),
        (n[18] = o))
      : (o = n[18]),
      (T = o));
  } else if (w == null) {
    let e;
    (n[19] === S
      ? (e = n[20])
      : ((e = (0, G.jsx)(it, {
          layout: `settings-row`,
          children: (0, G.jsx)(V, {
            id: `settings.codeReview.repositories.connections.empty.v2`,
            defaultMessage: `Connect a {provider} account to configure repository reviews`,
            description: `Empty state when the user has no linked account available for repository review settings. The provider is GitHub or GitLab.`,
            values: { provider: S },
          }),
        })),
        (n[19] = S),
        (n[20] = e)),
      (T = e));
  } else {
    let e;
    n[21] !== w.id || n[22] !== h || n[23] !== S
      ? ((e =
          h != null && h.length > 1
            ? (0, G.jsx)(t, {
                children: (0, G.jsx)(U, {
                  label: (0, G.jsx)(V, {
                    id: `settings.codeReview.repositories.connection.v2`,
                    defaultMessage: `{provider} connection`,
                    description: `Label for selecting which connected account supplies repositories in review settings, including private server instances. The provider is GitHub or GitLab.`,
                    values: { provider: S },
                  }),
                  value: w.id,
                  options: h.map(Zt),
                  disabled: !1,
                  onChange: b,
                  renderLabel: (e) => h.find((t) => t.id === e)?.name,
                }),
              })
            : null),
        (n[21] = w.id),
        (n[22] = h),
        (n[23] = S),
        (n[24] = e))
      : (e = n[24]);
    let i = `${w.id}:${u}`,
      o;
    n[25] !== w.id || n[26] !== u || n[27] !== a || n[28] !== r || n[29] !== i
      ? ((o = (0, G.jsx)(Qt, { provider: r, connectorId: w.id, search: u, onSelectRepository: a }, i)),
        (n[25] = w.id),
        (n[26] = u),
        (n[27] = a),
        (n[28] = r),
        (n[29] = i),
        (n[30] = o))
      : (o = n[30]);
    let s;
    (n[31] !== e || n[32] !== o
      ? ((s = (0, G.jsxs)(G.Fragment, { children: [e, o] })), (n[31] = e), (n[32] = o), (n[33] = s))
      : (s = n[33]),
      (T = s));
  }
  let E;
  n[34] === o
    ? (E = n[35])
    : ((E = o.formatMessage({
        id: `settings.codeReview.repositories.provider`,
        defaultMessage: `Git provider`,
        description: `Accessible label for choosing GitHub or GitLab repositories in cloud review settings`,
      })),
      (n[34] = o),
      (n[35] = E));
  let D;
  n[36] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = [`github`, `gitlab`]), (n[36] = D)) : (D = n[36]);
  let O;
  n[37] !== i || n[38] !== r || n[39] !== E
    ? ((O = (0, G.jsx)(Nt, {
        "aria-label": E,
        value: r,
        options: D,
        disabled: !1,
        onChange: i,
        renderLabel: Xt,
      })),
      (n[37] = i),
      (n[38] = r),
      (n[39] = E),
      (n[40] = O))
    : (O = n[40]);
  let k, j;
  n[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, G.jsx)(V, {
        id: `settings.codeReview.repositories.title`,
        defaultMessage: `Repositories`,
        description: `Heading for repositories with configurable code and security reviews`,
      })),
      (j = (0, G.jsx)(V, {
        id: `settings.codeReview.repositories.description`,
        defaultMessage: `Choose a repository to configure its automatic reviews`,
        description: `Description of the repository list in Code Review settings`,
      })),
      (n[41] = k),
      (n[42] = j))
    : ((k = n[41]), (j = n[42]));
  let M;
  n[43] === O
    ? (M = n[44])
    : ((M = (0, G.jsx)(H.Header, { actions: O, title: k, subtitle: j })), (n[43] = O), (n[44] = M));
  let N;
  n[45] === o
    ? (N = n[46])
    : ((N = o.formatMessage({
        id: `settings.codeReview.repositories.search.label`,
        defaultMessage: `Search repositories`,
        description: `Accessible label for the repository search in Code Review settings`,
      })),
      (n[45] = o),
      (n[46] = N));
  let P;
  n[47] === o
    ? (P = n[48])
    : ((P = o.formatMessage({
        id: `settings.codeReview.repositories.search.placeholder`,
        defaultMessage: `Search repositories`,
        description: `Placeholder for the repository search in Code Review settings`,
      })),
      (n[47] = o),
      (n[48] = P));
  let F;
  n[49] !== s || n[50] !== P || n[51] !== N
    ? ((F = (0, G.jsx)(lt, {
        id: `code-review-repository-search`,
        inputRole: `searchbox`,
        label: N,
        placeholder: P,
        maxLength: 256,
        searchQuery: s,
        onSearchQueryChange: c,
      })),
      (n[49] = s),
      (n[50] = P),
      (n[51] = N),
      (n[52] = F))
    : (F = n[52]);
  let I;
  n[53] !== T || n[54] !== F
    ? ((I = (0, G.jsxs)(H.Content, { children: [F, T] })), (n[53] = T), (n[54] = F), (n[55] = I))
    : (I = n[55]);
  let L;
  return (
    n[56] !== I || n[57] !== M
      ? ((L = (0, G.jsxs)(H, { children: [M, I] })), (n[56] = I), (n[57] = M), (n[58] = L))
      : (L = n[58]),
    L
  );
}
function Xt(e) {
  return e === `github` ? `GitHub` : `GitLab`;
}
function Zt(e) {
  return e.id;
}
function Qt(e) {
  let n = (0, tn.c)(33),
    { provider: r, connectorId: i, search: a, onSelectRepository: o } = e,
    s;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = [null]), (n[0] = s)) : (s = n[0]);
  let [c, u] = (0, nn.useState)(s),
    d;
  n[1] === c ? (d = n[2]) : ((d = c.at(-1)), (n[1] = c), (n[2] = d));
  let f;
  n[3] !== i || n[4] !== r || n[5] !== a || n[6] !== d
    ? ((f = { provider: r, connectorId: i, search: a, nextToken: d }),
      (n[3] = i),
      (n[4] = r),
      (n[5] = a),
      (n[6] = d),
      (n[7] = f))
    : (f = n[7]);
  let { data: p, isError: m, isPending: h, isFetching: g, refetch: _ } = ue(Gt, f),
    v;
  if (h) {
    let e;
    (n[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(Ue, {
          children: (0, G.jsx)(V, {
            id: `settings.codeReview.repositories.loading`,
            defaultMessage: `Loading repositories…`,
            description: `Loading state for the repository list in Code Review settings`,
          }),
        })),
        (n[8] = e))
      : (e = n[8]),
      (v = e));
  } else if (m || p == null) {
    let e;
    n[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(V, {
          id: `settings.codeReview.repositories.error`,
          defaultMessage: `Unable to load repositories`,
          description: `Error shown when Code Review cannot load the user's repositories`,
        })),
        (n[9] = e))
      : (e = n[9]);
    let r;
    n[10] === _ ? (r = n[11]) : ((r = () => void _()), (n[10] = _), (n[11] = r));
    let i;
    n[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, G.jsx)(V, {
          id: `settings.codeReview.repositories.retry`,
          defaultMessage: `Retry`,
          description: `Button to retry loading repositories in Code Review settings`,
        })),
        (n[12] = i))
      : (i = n[12]);
    let a;
    (n[13] === r
      ? (a = n[14])
      : ((a = (0, G.jsx)(t, {
          children: (0, G.jsx)(B, {
            label: e,
            control: (0, G.jsx)(A, { color: `secondary`, size: `toolbar`, onClick: r, children: i }),
          }),
        })),
        (n[13] = r),
        (n[14] = a)),
      (v = a));
  } else {
    let e;
    n[15] !== p.repo_review_settings || n[16] !== o
      ? ((e =
          p.repo_review_settings.length === 0
            ? (0, G.jsx)(it, {
                layout: `settings-row`,
                children: (0, G.jsx)(V, {
                  id: `settings.codeReview.repositories.empty`,
                  defaultMessage: `No repositories found`,
                  description: `Empty state for the repository list or search in Code Review settings`,
                }),
              })
            : p.repo_review_settings.map((e) =>
                (0, G.jsx)(
                  ie,
                  {
                    label: e.repository.repository_full_name,
                    description: (0, G.jsx)(V, {
                      id: `settings.codeReview.repositories.status`,
                      defaultMessage: `Automatic code review: {policy, select, off {Off} all {All PRs} team {Team PRs} other {Follow personal preferences}}`,
                      description: `Summary of which pull requests are automatically reviewed in a repository`,
                      values: { policy: en(e) },
                    }),
                    edgeRounding: `surface`,
                    trailing: (0, G.jsx)(l, { className: `text-secondary` }),
                    onClick: () => o(e.repository.id),
                  },
                  e.repository.id,
                ),
              )),
        (n[15] = p.repo_review_settings),
        (n[16] = o),
        (n[17] = e))
      : (e = n[17]);
    let r;
    (n[18] === e ? (r = n[19]) : ((r = (0, G.jsx)(t, { children: e })), (n[18] = e), (n[19] = r)), (v = r));
  }
  let y;
  n[20] !== m || n[21] !== h || n[22] !== c || n[23] !== r
    ? ((y =
        !m && !h && r === `github` && Number(c.at(-1)) === 125
          ? (0, G.jsx)(it, {
              layout: `settings-row`,
              children: (0, G.jsx)(V, {
                id: `settings.codeReview.repositories.searchLimit`,
                defaultMessage: `Search by repository name to narrow these results`,
                description: `Guidance after reaching GitHub's repository search pagination limit. Users can change the search to find additional repositories.`,
              }),
            })
          : null),
      (n[20] = m),
      (n[21] = h),
      (n[22] = c),
      (n[23] = r),
      (n[24] = y))
    : (y = n[24]);
  let b;
  n[25] !== p?.next_token || n[26] !== g || n[27] !== c.length
    ? ((b =
        c.length > 1 || p?.next_token != null
          ? (0, G.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2`,
              children: [
                (0, G.jsx)(A, {
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: c.length === 1 || g,
                  onClick: () => u($t),
                  children: (0, G.jsx)(V, {
                    id: `settings.codeReview.repositories.previous`,
                    defaultMessage: `Previous`,
                    description: `Button to show the previous page of Code Review repositories`,
                  }),
                }),
                (0, G.jsx)(A, {
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: p?.next_token == null || g,
                  onClick: () => {
                    let e = p?.next_token;
                    e != null && u((t) => [...t, e]);
                  },
                  children: (0, G.jsx)(V, {
                    id: `settings.codeReview.repositories.next`,
                    defaultMessage: `Next`,
                    description: `Button to show the next page of Code Review repositories`,
                  }),
                }),
              ],
            })
          : null),
      (n[25] = p?.next_token),
      (n[26] = g),
      (n[27] = c.length),
      (n[28] = b))
    : (b = n[28]);
  let x;
  return (
    n[29] !== v || n[30] !== y || n[31] !== b
      ? ((x = (0, G.jsxs)(G.Fragment, { children: [v, y, b] })),
        (n[29] = v),
        (n[30] = y),
        (n[31] = b),
        (n[32] = x))
      : (x = n[32]),
    x
  );
}
function $t(e) {
  return e.slice(0, -1);
}
function en(e) {
  return e.global_review_preference === `never_review`
    ? `off`
    : e.global_review_preference === `review_everyone`
      ? `all`
      : e.review_preference === `team`
        ? `team`
        : `personal`;
}
var tn, nn, G;
function rn() {
  return (rn = e(() => {
    ((tn = _()),
      N(),
      (nn = s()),
      O(),
      M(),
      y(),
      Ye(),
      at(),
      Qe(),
      Ge(),
      ve(),
      L(),
      Ae(),
      Mt(),
      Vt(),
      Jt(),
      (G = d()));
  }))();
}
function an() {
  let e = (0, on.c)(28),
    t = n(v),
    { accountId: r } = st(),
    { data: i } = ze(),
    a;
  e[0] !== r || e[1] !== i?.accounts
    ? ((a = i?.accounts?.find((e) => e.id === r)), (e[0] = r), (e[1] = i?.accounts), (e[2] = a))
    : (a = e[2]);
  let o = a,
    s = o != null,
    c;
  e[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = new Set()), (e[3] = c)) : (c = e[3]);
  let l = (0, sn.useRef)(c),
    u = Re(`3012059064`),
    d,
    f;
  e[4] === u
    ? ((d = e[5]), (f = e[6]))
    : ((d = Date.parse(u.get(`billing_starts_at`, ``))),
      (f = u.get(`show_notice`, !1) && Number.isFinite(d)),
      (e[4] = u),
      (e[5] = d),
      (e[6] = f));
  let p = f,
    m;
  e[7] !== o || e[8] !== d || e[9] !== t
    ? ((m = () => {
        yt(t, He, {
          billingStartsAtUtcDate: new Date(d).toISOString(),
          workspaceRole: o?.structure === `workspace` ? o.account_user_role : void 0,
        });
      }),
      (e[7] = o),
      (e[8] = d),
      (e[9] = t),
      (e[10] = m))
    : (m = e[10]);
  let h = (0, sn.useEffectEvent)(m),
    g;
  e[11] !== r || e[12] !== s || e[13] !== d || e[14] !== h || e[15] !== p
    ? ((g = () => {
        if (!p || !r || !s) return;
        let e = `${r}:${d}`;
        l.current.has(e) || (h(), l.current.add(e));
      }),
      (e[11] = r),
      (e[12] = s),
      (e[13] = d),
      (e[14] = h),
      (e[15] = p),
      (e[16] = g))
    : (g = e[16]);
  let _;
  if (
    (e[17] !== r || e[18] !== s || e[19] !== d || e[20] !== p
      ? ((_ = [r, s, d, p]), (e[17] = r), (e[18] = s), (e[19] = d), (e[20] = p), (e[21] = _))
      : (_ = e[21]),
    (0, sn.useEffect)(g, _),
    !p)
  )
    return null;
  let y;
  e[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, cn.jsx)(V, {
        id: `settings.codeReview.security.billingNotice.title`,
        defaultMessage: `Security Review billing is changing`,
        description: `Title of a notice to existing Security Review customers before their free preview ends`,
      })),
      (e[22] = y))
    : (y = e[22]);
  let b;
  e[23] === d
    ? (b = e[24])
    : ((b = (0, cn.jsx)(V, {
        id: `settings.codeReview.security.billingNotice.body`,
        defaultMessage: `Your Security Review preview continues until {billingStartsAt}. After that, Security Reviews automatically use your Codex allowance and credits according to your billing settings.`,
        description: `Billing transition notice for existing Security Review customers. The date and time are the end of their free preview. Existing billing settings still control credit use.`,
        values: {
          billingStartsAt: (0, cn.jsx)(T, {
            value: d,
            year: `numeric`,
            month: `long`,
            day: `numeric`,
            hour: `numeric`,
            minute: `2-digit`,
            timeZone: `UTC`,
            timeZoneName: `short`,
          }),
        },
      })),
      (e[23] = d),
      (e[24] = b));
  let x;
  e[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, cn.jsx)(Oe, {
        href: `https://developers.openai.com/codex/pricing`,
        initiator: `external_link`,
        underline: `always`,
        children: (0, cn.jsx)(V, {
          id: `settings.codeReview.security.billingNotice.pricing`,
          defaultMessage: `View pricing`,
          description: `Link from the Security Review billing transition notice to Codex pricing`,
        }),
      })),
      (e[25] = x))
    : (x = e[25]);
  let S;
  return (
    e[26] === b
      ? (S = e[27])
      : ((S = (0, cn.jsx)(ye, {
          variant: `settings`,
          layout: `vertical`,
          title: y,
          content: b,
          customCtas: x,
        })),
        (e[26] = b),
        (e[27] = S)),
    S
  );
}
var on, sn, cn;
function ln() {
  return (ln = e(() => {
    ((on = _()), ke(), N(), (sn = s()), O(), dt(), gt(), be(), ut(), xt(), r(), bt(), (cn = d()));
  }))();
}
function un(e) {
  let n = (0, fn.c)(10),
    { repository: r } = e,
    i;
  n[0] === r ? (i = n[1]) : ((i = dn(r)), (n[0] = r), (n[1] = i));
  let a = i,
    o;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, K.jsx)(H.Header, {
        title: (0, K.jsx)(V, {
          id: `settings.codeReview.repository.instructions.title`,
          defaultMessage: `Review instructions`,
          description: `Heading for the repository file that provides instructions for code review.`,
        }),
      })),
      (n[2] = o))
    : (o = n[2]);
  let s, c, l;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, K.jsx)(te, {})),
      (c = (0, K.jsx)(V, {
        id: `settings.codeReview.repository.instructions.fileName`,
        defaultMessage: `AGENTS.md`,
        description: `Name of the repository instruction file. Keep the exact filename AGENTS.md; do not translate it.`,
      })),
      (l = (0, K.jsx)(V, {
        id: `settings.codeReview.repository.instructions.description`,
        defaultMessage: `Add review guidelines to AGENTS.md in this repository`,
        description: `Explanation that users can customize code reviews by adding guidelines to the repository's AGENTS.md file. AGENTS.md is a filename and must not be translated.`,
      })),
      (n[3] = s),
      (n[4] = c),
      (n[5] = l))
    : ((s = n[3]), (c = n[4]), (l = n[5]));
  let u;
  n[6] === a
    ? (u = n[7])
    : ((u =
        a == null
          ? null
          : (0, K.jsx)(Oe, {
              className: `text-sm`,
              appearance: `primary`,
              href: a,
              initiator: `external_link`,
              children: (0, K.jsx)(V, {
                id: `settings.codeReview.repository.instructions.open`,
                defaultMessage: `Open file`,
                description: `Link to the repository's AGENTS.md file on its default branch in the Git provider.`,
              }),
            })),
      (n[6] = a),
      (n[7] = u));
  let d;
  return (
    n[8] === u
      ? (d = n[9])
      : ((d = (0, K.jsxs)(H, {
          children: [
            o,
            (0, K.jsx)(H.Content, {
              children: (0, K.jsx)(t, {
                children: (0, K.jsx)(B, { icon: s, label: c, description: l, control: u }),
              }),
            }),
          ],
        })),
        (n[8] = u),
        (n[9] = d)),
    d
  );
}
function dn(e) {
  let t = URL.parse(e.clone_url);
  if (t == null || ![`https:`, `http:`].includes(t.protocol) || !e.default_branch) return null;
  let n = new URL(t.origin),
    r = e.id.startsWith(`gitlab-`) ? `-/blob` : `blob`;
  return (
    (n.pathname = `${t.pathname.replace(/\.git$/, ``)}/${r}/${encodeURIComponent(e.default_branch)}/AGENTS.md`),
    n.href
  );
}
var fn, K;
function pn() {
  return (pn = e(() => {
    ((fn = _()), O(), ut(), y(), Qe(), ve(), L(), (K = d()));
  }))();
}
function mn(e) {
  let t = (0, Cn.c)(82),
    { repository: n, preferences: r, disabled: i, onUpdate: a } = e,
    o = Te(`579168209`),
    s = Te(`1394080568`),
    [c, l] = (0, wn.useState)(!1),
    u = r.trigger_policy ?? `code_review`,
    d = r.threat_model_source ?? `repository_file`,
    f = r.severity_threshold ?? `high`,
    p = r.blocking_severity_threshold ?? `critical`,
    m = J.indexOf(f) >= J.indexOf(p),
    h = !i && !!n.permissions?.admin,
    g;
  t[0] !== s || t[1] !== n
    ? ((g = s && !n.id.startsWith(`gitlab-`)), (t[0] = s), (t[1] = n), (t[2] = g))
    : (g = t[2]);
  let _ = g,
    v;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, q.jsx)(V, {
        id: `settings.codeReview.repository.securityTitle`,
        defaultMessage: `Review security vulnerabilities`,
        description: `Heading for a repository's security review settings.`,
      })),
      (t[3] = v))
    : (v = t[3]);
  let y;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, q.jsx)(V, {
        id: `settings.codeReview.repository.securityTrigger`,
        defaultMessage: `Trigger`,
        description: `Label for when automatic repository security reviews run.`,
      })),
      (t[4] = y))
    : (y = t[4]);
  let b;
  t[5] !== o || t[6] !== u
    ? ((b =
        o || u === `smart_detect`
          ? [`pr_open`, `every_push`, `smart_detect`, `code_review`]
          : [`pr_open`, `every_push`, `code_review`]),
      (t[5] = o),
      (t[6] = u),
      (t[7] = b))
    : (b = t[7]);
  let x;
  t[8] === a ? (x = t[9]) : ((x = (e) => a({ trigger_policy: e })), (t[8] = a), (t[9] = x));
  let S;
  t[10] !== i || t[11] !== b || t[12] !== x || t[13] !== u
    ? ((S = (0, q.jsx)(U, { label: y, value: u, options: b, disabled: i, renderLabel: yn, onChange: x })),
      (t[10] = i),
      (t[11] = b),
      (t[12] = x),
      (t[13] = u),
      (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] !== i ||
  t[16] !== a ||
  t[17] !== r.codex_security_scan_configuration_id ||
  t[18] !== r.threat_model_source ||
  t[19] !== d
    ? ((C =
        r.codex_security_scan_configuration_id || r.threat_model_source === `codex_security`
          ? (0, q.jsx)(U, {
              label: (0, q.jsx)(V, {
                id: `settings.codeReview.repository.threatSource`,
                defaultMessage: `Threat model source`,
                description: `Choose whether repository security reviews use the connected Codex Security threat model or a repository file.`,
              }),
              value: d,
              options: r.codex_security_scan_configuration_id
                ? [`codex_security`, `repository_file`]
                : [`repository_file`],
              disabled: i,
              onChange: (e) => a({ threat_model_source: e }),
              renderLabel: vn,
            })
          : null),
      (t[15] = i),
      (t[16] = a),
      (t[17] = r.codex_security_scan_configuration_id),
      (t[18] = r.threat_model_source),
      (t[19] = d),
      (t[20] = C))
    : (C = t[20]);
  let w;
  t[21] !== i || t[22] !== a || t[23] !== r.threat_model_file_path || t[24] !== d
    ? ((w =
        d === `repository_file`
          ? (0, q.jsx)(B, {
              variant: `stacked`,
              label: (0, q.jsx)(V, {
                id: `settings.codeReview.repository.threatPath`,
                defaultMessage: `Path to threat model file in this repository`,
                description: `Label for the repository-relative path to a security threat model file.`,
              }),
              description: (0, q.jsx)(V, {
                id: `settings.codeReview.repository.threatPath.description`,
                defaultMessage: `File path is relative to the repository root. If not specified, Codex generates a threat model for every review.`,
                description: `Help text for a security review threat model path. Leaving the path empty uses a newly generated threat model for each review.`,
              }),
              control: (e) =>
                (0, q.jsx)(
                  Sn,
                  {
                    ...e,
                    kind: `threat-model`,
                    savedPath: r.threat_model_file_path ?? ``,
                    disabled: i,
                    onSave: (e) =>
                      a({ threat_model_source: `repository_file`, threat_model_file_path: e || null }),
                  },
                  r.threat_model_file_path ?? ``,
                ),
            })
          : null),
      (t[21] = i),
      (t[22] = a),
      (t[23] = r.threat_model_file_path),
      (t[24] = d),
      (t[25] = w))
    : (w = t[25]);
  let T, E;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, q.jsx)(V, {
        id: `settings.codeReview.repository.autoSeverity`,
        defaultMessage: `Minimum auto review reporting severity`,
        description: `Minimum vulnerability severity reported by automatic repository security reviews.`,
      })),
      (T = (0, q.jsx)(V, {
        id: `settings.codeReview.repository.autoSeverity.description`,
        defaultMessage: `Choose the lowest severity Codex should report for automated reviews`,
        description: `Help text for automatic security review severity.`,
      })),
      (t[26] = T),
      (t[27] = E))
    : ((T = t[26]), (E = t[27]));
  let D;
  t[28] !== p || t[29] !== r.merge_gate_enabled
    ? ((D = r.merge_gate_enabled ? J.slice(J.indexOf(p)) : J),
      (t[28] = p),
      (t[29] = r.merge_gate_enabled),
      (t[30] = D))
    : (D = t[30]);
  let O;
  t[31] === a ? (O = t[32]) : ((O = (e) => a({ severity_threshold: e })), (t[31] = a), (t[32] = O));
  let k;
  t[33] !== i || t[34] !== f || t[35] !== D || t[36] !== O
    ? ((k = (0, q.jsx)(U, {
        label: E,
        description: T,
        value: f,
        options: D,
        disabled: i,
        renderLabel: _n,
        onChange: O,
      })),
      (t[33] = i),
      (t[34] = f),
      (t[35] = D),
      (t[36] = O),
      (t[37] = k))
    : (k = t[37]);
  let j, M;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, q.jsx)(V, {
        id: `settings.codeReview.repository.manualSeverity`,
        defaultMessage: `Minimum manual review reporting severity`,
        description: `Minimum vulnerability severity reported by manually requested repository security reviews.`,
      })),
      (M = (0, q.jsx)(V, {
        id: `settings.codeReview.repository.manualSeverity.description`,
        defaultMessage: `Choose the lowest severity Codex should report for reviews requested with @codex`,
        description: `Help text for manually requested security review severity. Preserve the @codex mention.`,
      })),
      (t[38] = j),
      (t[39] = M))
    : ((j = t[38]), (M = t[39]));
  let N = r.manual_severity_threshold ?? `medium`,
    P;
  t[40] === a ? (P = t[41]) : ((P = (e) => a({ manual_severity_threshold: e })), (t[40] = a), (t[41] = P));
  let F;
  t[42] !== i || t[43] !== N || t[44] !== P
    ? ((F = (0, q.jsx)(U, {
        label: j,
        description: M,
        value: N,
        options: J,
        disabled: i,
        renderLabel: gn,
        onChange: P,
      })),
      (t[42] = i),
      (t[43] = N),
      (t[44] = P),
      (t[45] = F))
    : (F = t[45]);
  let I;
  t[46] !== p ||
  t[47] !== h ||
  t[48] !== m ||
  t[49] !== a ||
  t[50] !== r.merge_gate_enabled ||
  t[51] !== f ||
  t[52] !== _
    ? ((I = _
        ? (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsx)(ye, {
                variant: `settings`,
                content: (0, q.jsx)(V, {
                  id: `settings.codeReview.repository.mergeAdmin`,
                  defaultMessage: `Only GitHub repository admins can change merge protection and blocking severity`,
                  description: `Permission notice for security review merge protection controls.`,
                }),
              }),
              (0, q.jsx)(B, {
                label: (0, q.jsx)(V, {
                  id: `settings.codeReview.repository.mergeProtection`,
                  defaultMessage: `Merge protection`,
                  description: `Setting to publish a failing GitHub check when security findings exceed the repository's blocking threshold.`,
                }),
                description: m
                  ? (0, q.jsx)(V, {
                      id: `settings.codeReview.repository.mergeProtection.description`,
                      defaultMessage: `Publish a GitHub check that fails when Security Review reports a finding at or above the blocking severity. To block merges, also require this check in GitHub.`,
                      description: `Help text explaining security review merge protection requires configuring the corresponding required check in GitHub.`,
                    })
                  : (0, q.jsx)(V, {
                      id: `settings.codeReview.repository.mergeProtection.reportingRequired`,
                      defaultMessage: `Choose a blocking severity at least as high as the automatic reporting severity to enable merge protection`,
                      description: `Explains how to repair a blocking threshold whose findings would be excluded by the repository's automatic reporting threshold.`,
                    }),
                control: (e) =>
                  (0, q.jsx)(se, {
                    ...e,
                    checked: r.merge_gate_enabled ?? !1,
                    disabled: !h || (!r.merge_gate_enabled && !m),
                    onChange: (e) => a({ merge_gate_enabled: e }),
                  }),
              }),
              (0, q.jsx)(U, {
                label: (0, q.jsx)(V, {
                  id: `settings.codeReview.repository.blockingSeverity`,
                  defaultMessage: `Blocking severity`,
                  description: `Minimum finding severity that fails the security review GitHub check.`,
                }),
                description: (0, q.jsx)(V, {
                  id: `settings.codeReview.repository.blockingSeverity.description`,
                  defaultMessage: `Choose the lowest finding severity that should fail the Security Review GitHub check`,
                  description: `Help text for the security review blocking severity setting.`,
                }),
                value: p,
                options: J.slice(0, J.indexOf(f) + 1),
                disabled: !h,
                renderLabel: hn,
                onChange: (e) => a({ blocking_severity_threshold: e }),
              }),
            ],
          })
        : null),
      (t[46] = p),
      (t[47] = h),
      (t[48] = m),
      (t[49] = a),
      (t[50] = r.merge_gate_enabled),
      (t[51] = f),
      (t[52] = _),
      (t[53] = I))
    : (I = t[53]);
  let L, ee;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, q.jsx)(V, {
        id: `settings.codeReview.repository.pathRules`,
        defaultMessage: `Path-based reporting severity override`,
        description: `Heading for security reporting severity overrides for repository paths.`,
      })),
      (ee = (0, q.jsx)(V, {
        id: `settings.codeReview.repository.pathRules.description`,
        defaultMessage: `Override reporting severity for specific repository paths`,
        description: `Help text for repository path-specific security severity rules.`,
      })),
      (t[54] = L),
      (t[55] = ee))
    : ((L = t[54]), (ee = t[55]));
  let te = i || c,
    ne,
    re;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = () => l(!0)),
      (re = (0, q.jsx)(V, {
        id: `settings.codeReview.repository.addPath`,
        defaultMessage: `Add path override`,
        description: `Button to add a path-specific security reporting severity rule.`,
      })),
      (t[56] = ne),
      (t[57] = re))
    : ((ne = t[56]), (re = t[57]));
  let R;
  t[58] === te
    ? (R = t[59])
    : ((R = (0, q.jsx)(B, {
        label: L,
        description: ee,
        control: (0, q.jsx)(A, {
          color: `secondary`,
          size: `toolbar`,
          disabled: te,
          onClick: ne,
          children: re,
        }),
      })),
      (t[58] = te),
      (t[59] = R));
  let ie;
  t[60] !== i || t[61] !== a || t[62] !== r.path_rules
    ? ((ie = r.path_rules?.map((e, t) =>
        (0, q.jsx)(
          bn,
          {
            rule: e,
            disabled: i,
            onUpdate: (e) => a({ path_rules: r.path_rules?.map((n, r) => (r === t ? e : n)) }),
            onRemove: () => a({ path_rules: r.path_rules?.filter((e, n) => n !== t) }),
          },
          `${t}-${e.path_prefix}`,
        ),
      )),
      (t[60] = i),
      (t[61] = a),
      (t[62] = r.path_rules),
      (t[63] = ie))
    : (ie = t[63]);
  let z;
  t[64] !== c || t[65] !== i || t[66] !== a || t[67] !== r.path_rules
    ? ((z = c
        ? (0, q.jsx)(B, {
            variant: `stacked`,
            label: (0, q.jsx)(V, {
              id: `settings.codeReview.repository.newPath`,
              defaultMessage: `Repository path prefix`,
              description: `Label for the path prefix of a new security review severity override.`,
            }),
            control: (e) =>
              (0, q.jsx)(Sn, {
                ...e,
                kind: `override`,
                savedPath: ``,
                disabled: i,
                onCancel: () => l(!1),
                onSave: (e) =>
                  a(
                    {
                      path_rules: [
                        ...(r.path_rules ?? []),
                        { path_prefix: e, auto_severity_threshold: null, manual_severity_threshold: null },
                      ],
                    },
                    () => l(!1),
                  ),
              }),
          })
        : null),
      (t[64] = c),
      (t[65] = i),
      (t[66] = a),
      (t[67] = r.path_rules),
      (t[68] = z))
    : (z = t[68]);
  let ae;
  return (
    t[69] !== i ||
    t[70] !== a ||
    t[71] !== r ||
    t[72] !== k ||
    t[73] !== F ||
    t[74] !== I ||
    t[75] !== R ||
    t[76] !== ie ||
    t[77] !== z ||
    t[78] !== S ||
    t[79] !== C ||
    t[80] !== w
      ? ((ae = (0, q.jsxs)(Ft, {
          security: !0,
          preferences: r,
          disabled: i,
          onUpdate: a,
          title: v,
          children: [S, C, w, k, F, I, R, ie, z],
        })),
        (t[69] = i),
        (t[70] = a),
        (t[71] = r),
        (t[72] = k),
        (t[73] = F),
        (t[74] = I),
        (t[75] = R),
        (t[76] = ie),
        (t[77] = z),
        (t[78] = S),
        (t[79] = C),
        (t[80] = w),
        (t[81] = ae))
      : (ae = t[81]),
    ae
  );
}
function hn(e) {
  return (0, q.jsx)(Rt, { value: e });
}
function gn(e) {
  return (0, q.jsx)(Rt, { value: e });
}
function _n(e) {
  return (0, q.jsx)(Rt, { value: e });
}
function vn(e) {
  return (0, q.jsx)(V, {
    id: `settings.codeReview.repository.threatSource.option`,
    defaultMessage: `{value, select, codex_security {Codex Security} other {Repository file}}`,
    description: `Options for a repository security review threat model: Codex Security or a file in the repository.`,
    values: { value: e },
  });
}
function yn(e) {
  return (0, q.jsx)(Lt, { value: e });
}
function bn(e) {
  let t = (0, Cn.c)(17),
    { rule: n, disabled: r, onUpdate: i, onRemove: a } = e,
    o = fe(),
    s;
  t[0] === n.path_prefix
    ? (s = t[1])
    : ((s = (0, q.jsx)(`span`, { className: `font-mono select-text`, children: n.path_prefix })),
      (t[0] = n.path_prefix),
      (t[1] = s));
  let c;
  t[2] !== r || t[3] !== o || t[4] !== i || t[5] !== n
    ? ((c = [`auto_severity_threshold`, `manual_severity_threshold`].map((e) =>
        (0, q.jsxs)(
          wn.Fragment,
          {
            children: [
              (0, q.jsx)(`span`, {
                className: `text-sm text-secondary`,
                children: (0, q.jsx)(V, {
                  id: `settings.codeReview.repository.pathRule.label`,
                  defaultMessage: `{field, select, auto_severity_threshold {Automatic} other {Manual}}`,
                  description: `Label for the automatic or manual security review severity of a repository path override.`,
                  values: { field: e },
                }),
              }),
              (0, q.jsx)(Nt, {
                "aria-label": o.formatMessage(
                  {
                    id: `settings.codeReview.repository.pathRule.severity`,
                    defaultMessage: `{field, select, auto_severity_threshold {Automatic} other {Manual}} review severity for {path}`,
                    description: `Accessible label for a path override's automatic or manual security reporting severity. Path is the configured repository path.`,
                  },
                  { field: e, path: n.path_prefix },
                ),
                value: n[e] ?? `inherit`,
                options: Tn,
                disabled: r,
                renderLabel: xn,
                onChange: (t) => i({ ...n, [e]: t === `inherit` ? null : t }),
              }),
            ],
          },
          e,
        ),
      )),
      (t[2] = r),
      (t[3] = o),
      (t[4] = i),
      (t[5] = n),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, q.jsx)(V, {
        id: `settings.codeReview.repository.removePath`,
        defaultMessage: `Remove`,
        description: `Remove this repository path's security reporting severity override.`,
      })),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] !== r || t[9] !== a
    ? ((u = (0, q.jsx)(A, { color: `ghost`, size: `toolbar`, disabled: r, onClick: a, children: l })),
      (t[8] = r),
      (t[9] = a),
      (t[10] = u))
    : (u = t[10]);
  let d;
  t[11] !== c || t[12] !== u
    ? ((d = (0, q.jsxs)(`div`, { className: `flex flex-wrap items-center gap-2`, children: [c, u] })),
      (t[11] = c),
      (t[12] = u),
      (t[13] = d))
    : (d = t[13]);
  let f;
  return (
    t[14] !== s || t[15] !== d
      ? ((f = (0, q.jsx)(B, { label: s, variant: `stacked`, control: d })),
        (t[14] = s),
        (t[15] = d),
        (t[16] = f))
      : (f = t[16]),
    f
  );
}
function xn(e) {
  return (0, q.jsx)(Rt, { value: e });
}
function Sn(e) {
  let t = (0, Cn.c)(35),
    n,
    r,
    i,
    a,
    o,
    s;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]))
    : (({ kind: i, savedPath: s, disabled: r, onSave: o, onCancel: a, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s));
  let c = fe(),
    [l, u] = (0, wn.useState)(s),
    d = i === `override`,
    f;
  t[7] === l ? (f = t[8]) : ((f = l.trim()), (t[7] = l), (t[8] = f));
  let p = f !== s,
    m;
  t[9] !== p || t[10] !== r || t[11] !== o || t[12] !== l
    ? ((m = (e) => {
        (e.preventDefault(), !r && p && o(l.trim()));
      }),
      (t[9] = p),
      (t[10] = r),
      (t[11] = o),
      (t[12] = l),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (e) => u(e.currentTarget.value)), (t[14] = h))
    : (h = t[14]);
  let g;
  t[15] !== d || t[16] !== c
    ? ((g = d
        ? c.formatMessage({
            id: `settings.codeReview.repository.newPath.placeholder`,
            defaultMessage: `src/`,
            description: `Example directory prefix for a repository security review override; preserve path syntax.`,
          })
        : c.formatMessage({
            id: `settings.codeReview.repository.threatPath.placeholder`,
            defaultMessage: `docs/threat-model.md`,
            description: `Example repository-relative Markdown path for a threat model file; preserve the file path syntax.`,
          })),
      (t[15] = d),
      (t[16] = c),
      (t[17] = g))
    : (g = t[17]);
  let _;
  t[18] !== d || t[19] !== n || t[20] !== r || t[21] !== i || t[22] !== l || t[23] !== g
    ? ((_ = (0, q.jsx)(Ke, {
        ...n,
        name: i,
        value: l,
        onChange: h,
        disabled: r,
        autoFocus: d,
        placeholder: g,
      })),
      (t[18] = d),
      (t[19] = n),
      (t[20] = r),
      (t[21] = i),
      (t[22] = l),
      (t[23] = g),
      (t[24] = _))
    : (_ = t[24]);
  let v;
  t[25] !== d || t[26] !== p || t[27] !== r || t[28] !== a || t[29] !== s
    ? ((v =
        d || p
          ? (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsx)(A, {
                  type: `submit`,
                  color: `primary`,
                  size: `toolbar`,
                  disabled: r || !p,
                  children: (0, q.jsx)(V, {
                    id: `settings.codeReview.repository.savePathEdit`,
                    defaultMessage: `{adding, select, true {Add} other {Save}}`,
                    description: `Submit a new path override or save an edited threat model file path.`,
                    values: { adding: String(d) },
                  }),
                }),
                (0, q.jsx)(A, {
                  color: `ghost`,
                  size: `toolbar`,
                  disabled: r,
                  onClick: () => {
                    (u(s), a?.());
                  },
                  children: (0, q.jsx)(V, {
                    id: `settings.codeReview.repository.cancelPathEdit`,
                    defaultMessage: `Cancel`,
                    description: `Discard an unsaved repository path override or threat model file path edit.`,
                  }),
                }),
              ],
            })
          : null),
      (t[25] = d),
      (t[26] = p),
      (t[27] = r),
      (t[28] = a),
      (t[29] = s),
      (t[30] = v))
    : (v = t[30]);
  let y;
  return (
    t[31] !== m || t[32] !== _ || t[33] !== v
      ? ((y = (0, q.jsxs)(`form`, { className: `flex items-center gap-2`, onSubmit: m, children: [_, v] })),
        (t[31] = m),
        (t[32] = _),
        (t[33] = v),
        (t[34] = y))
      : (y = t[34]),
    y
  );
}
var Cn, wn, q, J, Tn;
function En() {
  return (En = e(() => {
    ((Cn = _()),
      (wn = s()),
      O(),
      be(),
      M(),
      Se(),
      _e(),
      ve(),
      bt(),
      Vt(),
      (q = d()),
      (J = [`critical`, `high`, `medium`, `low`]),
      (Tn = [`inherit`, ...J]));
  }))();
}
function Dn(e) {
  let t = (0, Mn.c)(30),
    { repositoryId: n, onBack: r } = e,
    { data: i, isError: s, isFetching: c, refetch: l } = ue(Kt, n),
    { isPending: u, error: d, mutate: f } = ue(qt, n),
    m = i?.edit_blocked_reason === null,
    h = u || c || s || !m,
    g = d instanceof z ? String(d.status) : `save`;
  (g === `409` && i?.funding_authorization_required && (g = `funding`), s && (g = `load`));
  let _;
  t[0] !== f || t[1] !== i || t[2] !== n
    ? ((_ = (e, t) => {
        i != null &&
          f(
            {
              repository: n,
              review_preference: i.review_preference,
              funding_generation: i.funding_generation,
              ...e,
            },
            { onSuccess: t },
          );
      }),
      (t[0] = f),
      (t[1] = i),
      (t[2] = n),
      (t[3] = _))
    : (_ = t[3]);
  let v = _,
    y = i?.repository.repository_full_name,
    b,
    x;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Y.jsx)(p, {})),
      (x = (0, Y.jsx)(V, {
        id: `settings.codeReview.repository.back`,
        defaultMessage: `Code review`,
        description: `Back button from repository review settings to the code review settings overview.`,
      })),
      (t[4] = b),
      (t[5] = x))
    : ((b = t[4]), (x = t[5]));
  let S;
  t[6] === r
    ? (S = t[7])
    : ((S = (0, Y.jsxs)(A, { color: `ghost`, size: `toolbar`, onClick: r, children: [b, x] })),
      (t[6] = r),
      (t[7] = S));
  let C, w;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Y.jsx)(V, {
        id: `settings.codeReview.repository.subtitle`,
        defaultMessage: `Manage how Codex reviews this repository`,
        description: `Subtitle of the repository code and security review settings page.`,
      })),
      (w = (0, Y.jsx)(an, {})),
      (t[8] = C),
      (t[9] = w))
    : ((C = t[8]), (w = t[9]));
  let T;
  t[10] !== d || t[11] !== g || t[12] !== s || t[13] !== l
    ? ((T =
        s || d != null
          ? (0, Y.jsx)(ye, {
              type: `error`,
              variant: `settings`,
              role: `alert`,
              content: (0, Y.jsx)(V, {
                id: `settings.codeReview.repository.error`,
                defaultMessage: `{kind, select, load {Unable to load repository settings. Try again. If this continues, check that the correct GitHub or GitLab account is connected and ChatGPT has access to this repository. You may need to reconnect your account.} funding {Workspace funding was removed. Reviews for all PRs require it to be reconnected.} 403 {You do not have permission to change these repository settings} 409 {Repository settings changed. Review the current settings and try again.} other {Unable to save repository settings. Try again.}}`,
                description: `Repository settings error. A load failure suggests retrying, then checking the connected GitHub or GitLab account and ChatGPT's repository access, with reconnection as a possible fix. Funding requires explicit reconnection; a conflict requires reviewing refreshed settings. PR means pull request.`,
                values: { kind: g },
              }),
              primaryCtaText:
                g === `funding`
                  ? void 0
                  : (0, Y.jsx)(V, {
                      id: `settings.codeReview.repository.retryAction`,
                      defaultMessage: `{kind, select, load {Retry} other {Refresh}}`,
                      description: `Reload repository settings after a failed read or save. This does not retry a save or reconnect funding.`,
                      values: { kind: g },
                    }),
              onPrimaryCtaClick: () => void l(),
            })
          : null),
      (t[10] = d),
      (t[11] = g),
      (t[12] = s),
      (t[13] = l),
      (t[14] = T))
    : (T = t[14]);
  let E;
  t[15] !== s || t[16] !== i
    ? ((E =
        i == null && !s
          ? (0, Y.jsx)(Ue, {
              children: (0, Y.jsx)(V, {
                id: `settings.codeReview.repository.loading`,
                defaultMessage: `Loading repository settings…`,
                description: `Status while fetching repository review settings.`,
              }),
            })
          : null),
      (t[15] = s),
      (t[16] = i),
      (t[17] = E))
    : (E = t[17]);
  let D;
  t[18] !== m || t[19] !== h || t[20] !== i || t[21] !== v
    ? ((D =
        i == null
          ? null
          : (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(ye, {
                  variant: `settings`,
                  layout: `verticalIcon`,
                  icon: (0, Y.jsx)(a, { asset: o }),
                  title: (0, Y.jsx)(V, {
                    id: `settings.codeReview.repository.sharedSettingsTitle`,
                    defaultMessage: `Shared repository settings`,
                    description: `Heading for the notice that repository review settings are shared among contributors.`,
                  }),
                  content: (0, Y.jsx)(V, {
                    id: `settings.codeReview.repository.sharedSettingsNotice`,
                    defaultMessage: `{reason, select, allowed {These shared settings control reviews for this repository} repository_admin_required {Only repository admins can change these shared review settings} repository_write_access_required {You need repository admin or push access to change these shared review settings} other {You don't have permission to change these shared review settings}}`,
                    description: `Notice above shared repository review settings. The allowed case identifies repository review settings that are shared among contributors. Otherwise the reason identifies the access required to edit: repository admin, repository admin or push access, or an unspecified permission restriction.`,
                    values: { reason: m ? `allowed` : i.edit_blocked_reason },
                  }),
                }),
                i.funding_authorization_required
                  ? (0, Y.jsx)(On, { disabled: h, onAllow: () => v({ authorize_funding: !0 }) })
                  : null,
                (0, Y.jsx)(kn, { repository: i, disabled: h, onUpdate: v }),
                i.security_review == null
                  ? null
                  : (0, Y.jsx)(mn, {
                      repository: i.repository,
                      preferences: i.security_review,
                      disabled: h,
                      onUpdate: (e, t) => v({ security_review: e }, t),
                    }),
                (0, Y.jsx)(un, { repository: i.repository }),
              ],
            })),
      (t[18] = m),
      (t[19] = h),
      (t[20] = i),
      (t[21] = v),
      (t[22] = D))
    : (D = t[22]);
  let O;
  return (
    t[23] !== u || t[24] !== D || t[25] !== y || t[26] !== S || t[27] !== T || t[28] !== E
      ? ((O = (0, Y.jsxs)(Pe, {
          className: `select-none`,
          "aria-busy": u,
          title: y,
          backSlot: S,
          subtitle: C,
          children: [w, T, E, D],
        })),
        (t[23] = u),
        (t[24] = D),
        (t[25] = y),
        (t[26] = S),
        (t[27] = T),
        (t[28] = E),
        (t[29] = O))
      : (O = t[29]),
    O
  );
}
function On(e) {
  let t = (0, Mn.c)(8),
    { disabled: n, onAllow: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = { preview: !1 }), (t[0] = i)) : (i = t[0]);
  let { data: a } = ct(void 0, i),
    o;
  t[1] === a
    ? (o = t[2])
    : ((o =
        a == null
          ? (0, Y.jsx)(V, {
              id: `settings.codeReview.repository.funding`,
              defaultMessage: `Workspace funding was removed from this repository. Reconnect funding to run automatic reviews.`,
              description: `Notice when repository review funding was revoked and must be explicitly reauthorized before reviews run.`,
            })
          : (0, Y.jsx)(V, {
              id: `settings.codeReview.repository.allowFunding`,
              defaultMessage: `Allow {account} to fund automatic reviews for this repository? Review preferences will stay the same.`,
              description: `Explicit consent to reconnect repository funding to the selected account. The account value is the current account name.`,
              values: { account: a.name },
            })),
      (t[1] = a),
      (t[2] = o));
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(V, {
        id: `settings.codeReview.repository.allowFundingAction`,
        defaultMessage: `Allow funding`,
        description: `Explicitly authorize the selected account to pay for automatic repository reviews after funding was removed.`,
      })),
      (t[3] = s))
    : (s = t[3]);
  let c = n || a == null,
    l;
  return (
    t[4] !== r || t[5] !== o || t[6] !== c
      ? ((l = (0, Y.jsx)(ye, {
          variant: `settings`,
          content: o,
          primaryCtaText: s,
          isPrimaryCtaDisabled: c,
          onPrimaryCtaClick: r,
        })),
        (t[4] = r),
        (t[5] = o),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function kn(e) {
  let t = (0, Mn.c)(23),
    { repository: n, disabled: r, onUpdate: i } = e,
    a = n.exhaustive_code_review == null ? `personal` : `off`;
  n.exhaustive_code_review === !0 && (a = `on`);
  let o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Y.jsx)(V, {
        id: `settings.codeReview.repository.codeTitle`,
        defaultMessage: `Review code`,
        description: `Heading for repository automatic code review settings.`,
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(V, {
        id: `settings.codeReview.repository.codeTrigger`,
        defaultMessage: `Trigger`,
        description: `Label for when repository code reviews are triggered.`,
      })),
      (t[1] = s))
    : (s = t[1]);
  let c = n.code_review_trigger_policy ?? `personal`,
    l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = [`personal`, `pr_open`, `every_push`, `smart_detect`]), (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === i
    ? (u = t[4])
    : ((u = (e) => i({ code_review_trigger_policy: e === `personal` ? null : e })), (t[3] = i), (t[4] = u));
  let d;
  t[5] !== r || t[6] !== c || t[7] !== u
    ? ((d = (0, Y.jsx)(U, { label: s, value: c, options: l, renderLabel: jn, disabled: r, onChange: u })),
      (t[5] = r),
      (t[6] = c),
      (t[7] = u),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Y.jsx)(V, {
        id: `settings.codeReview.repository.exhaustive`,
        defaultMessage: `Exhaustive review`,
        description: `Label for repository exhaustive code review, which continues searching for new findings.`,
      })),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = [`personal`, `on`, `off`]), (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === i
    ? (m = t[12])
    : ((m = (e) => i({ exhaustive_code_review: e === `personal` ? null : e === `on` })),
      (t[11] = i),
      (t[12] = m));
  let h;
  t[13] !== r || t[14] !== a || t[15] !== m
    ? ((h = (0, Y.jsx)(U, { label: f, value: a, options: p, disabled: r, onChange: m, renderLabel: An })),
      (t[13] = r),
      (t[14] = a),
      (t[15] = m),
      (t[16] = h))
    : (h = t[16]);
  let g;
  return (
    t[17] !== r || t[18] !== i || t[19] !== n || t[20] !== h || t[21] !== d
      ? ((g = (0, Y.jsxs)(Ft, { preferences: n, disabled: r, onUpdate: i, title: o, children: [d, h] })),
        (t[17] = r),
        (t[18] = i),
        (t[19] = n),
        (t[20] = h),
        (t[21] = d),
        (t[22] = g))
      : (g = t[22]),
    g
  );
}
function An(e) {
  return (0, Y.jsx)(V, {
    id: `settings.codeReview.repository.exhaustive.option`,
    defaultMessage: `{value, select, personal {Follow personal preferences} on {On} other {Off}}`,
    description: `Choices for exhaustive repository code reviews: inherit the contributor's preference, enable, or disable.`,
    values: { value: e },
  });
}
function jn(e) {
  return (0, Y.jsx)(Lt, { value: e });
}
var Mn, Y;
function Nn() {
  return (Nn = e(() => {
    ((Mn = _()),
      b(),
      N(),
      O(),
      gt(),
      be(),
      M(),
      h(),
      y(),
      et(),
      Ge(),
      g(),
      ln(),
      Vt(),
      pn(),
      Jt(),
      En(),
      (Y = d()));
  }))();
}
function Pn(e) {
  let n = (0, Bn.c)(47),
    { disabled: r, preferences: i, allowCreditsForSecurityReviews: a, onUpdate: o } = e,
    s = Te(`579168209`),
    { data: c } = At(),
    { canManageCreditSettings: l } = wt(),
    u = i.trigger_policy ?? `code_review`,
    d;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, X.jsx)(H.Header, {
        title: (0, X.jsx)(V, {
          id: `settings.codeReview.security.title`,
          defaultMessage: `Personal security review preferences`,
          description: `Title for personal security review preferences`,
        }),
      })),
      (n[0] = d))
    : (d = n[0]);
  let f, p;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(V, {
        id: `settings.codeReview.security.autoReview.label`,
        defaultMessage: `Automatic security review`,
        description: `Label for automatic security review preference`,
      })),
      (p = (0, X.jsx)(V, {
        id: `settings.codeReview.security.autoReview.description`,
        defaultMessage: `If a repository’s review setting differs from your personal preference, the repository setting takes priority`,
        description: `Description for automatic security review preference`,
      })),
      (n[1] = f),
      (n[2] = p))
    : ((f = n[1]), (p = n[2]));
  let m;
  n[3] !== r || n[4] !== o || n[5] !== i.preference
    ? ((m = (0, X.jsx)(B, {
        label: f,
        description: p,
        control: (e) =>
          (0, X.jsx)(se, {
            ...e,
            checked: i.preference === `always`,
            disabled: r,
            onChange: (e) => {
              o({ security_review: { preference: e ? `always` : `repo_default` } });
            },
          }),
      })),
      (n[3] = r),
      (n[4] = o),
      (n[5] = i.preference),
      (n[6] = m))
    : (m = n[6]);
  let h, g;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, X.jsx)(V, {
        id: `settings.codeReview.security.trigger.label`,
        defaultMessage: `Security review trigger`,
        description: `Label for security review trigger preference`,
      })),
      (g = (0, X.jsx)(V, {
        id: `settings.codeReview.security.trigger.description`,
        defaultMessage: `Choose when Codex should review your pull requests for security`,
        description: `Description for security review trigger preference`,
      })),
      (n[7] = h),
      (n[8] = g))
    : ((h = n[7]), (g = n[8]));
  let _;
  n[9] !== s || n[10] !== u
    ? ((_ =
        s || u === `smart_detect`
          ? [`pr_open`, `every_push`, `smart_detect`, `code_review`]
          : [`pr_open`, `every_push`, `code_review`]),
      (n[9] = s),
      (n[10] = u),
      (n[11] = _))
    : (_ = n[11]);
  let v;
  n[12] === o
    ? (v = n[13])
    : ((v = (e) => o({ security_review: { trigger_policy: e } })), (n[12] = o), (n[13] = v));
  let y;
  n[14] !== r || n[15] !== _ || n[16] !== v || n[17] !== u
    ? ((y = (0, X.jsx)(U, {
        label: h,
        description: g,
        value: u,
        options: _,
        disabled: r,
        onChange: v,
        renderLabel: zn,
        renderDescription: Rn,
      })),
      (n[14] = r),
      (n[15] = _),
      (n[16] = v),
      (n[17] = u),
      (n[18] = y))
    : (y = n[18]);
  let b, x;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(V, {
        id: `settings.codeReview.security.autoSeverity.label`,
        defaultMessage: `Minimum automatic review reporting severity`,
        description: `Label for the minimum automatic security review severity`,
      })),
      (x = (0, X.jsx)(V, {
        id: `settings.codeReview.security.autoSeverity.description`,
        defaultMessage: `Choose the lowest severity reported for automated reviews`,
        description: `Description for the minimum automatic security review severity`,
      })),
      (n[19] = b),
      (n[20] = x))
    : ((b = n[19]), (x = n[20]));
  let S = i.severity_threshold ?? `high`,
    C;
  n[21] === o
    ? (C = n[22])
    : ((C = (e) => o({ security_review: { severity_threshold: e } })), (n[21] = o), (n[22] = C));
  let w;
  n[23] !== r || n[24] !== S || n[25] !== C
    ? ((w = (0, X.jsx)(U, {
        label: b,
        description: x,
        disabled: r,
        value: S,
        options: Vn,
        onChange: C,
        renderLabel: Ln,
      })),
      (n[23] = r),
      (n[24] = S),
      (n[25] = C),
      (n[26] = w))
    : (w = n[26]);
  let T, E;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, X.jsx)(V, {
        id: `settings.codeReview.security.manualSeverity.label`,
        defaultMessage: `Minimum manual review reporting severity`,
        description: `Label for the minimum manual security review severity`,
      })),
      (E = (0, X.jsx)(V, {
        id: `settings.codeReview.security.manualSeverity.description`,
        defaultMessage: `Choose the lowest severity reported for reviews requested with @codex`,
        description: `Description for the minimum manual security review severity`,
      })),
      (n[27] = T),
      (n[28] = E))
    : ((T = n[27]), (E = n[28]));
  let D = i.manual_severity_threshold ?? `medium`,
    O;
  n[29] === o
    ? (O = n[30])
    : ((O = (e) => o({ security_review: { manual_severity_threshold: e } })), (n[29] = o), (n[30] = O));
  let k;
  n[31] !== r || n[32] !== D || n[33] !== O
    ? ((k = (0, X.jsx)(U, {
        label: T,
        description: E,
        disabled: r,
        value: D,
        options: Vn,
        onChange: O,
        renderLabel: In,
      })),
      (n[31] = r),
      (n[32] = D),
      (n[33] = O),
      (n[34] = k))
    : (k = n[34]);
  let A;
  n[35] !== a || n[36] !== l || n[37] !== r || n[38] !== o || n[39] !== c?.security_review_credits_available
    ? ((A =
        l && (c?.security_review_credits_available === !0 || a === !0) && a != null
          ? (0, X.jsx)(B, {
              label: (0, X.jsx)(V, {
                id: `settings.codeReview.security.credits.label`,
                defaultMessage: `Use credits for security reviews`,
                description: `Independent opt-in allowing personal credits to fund security reviews after the shared Codex allowance is exhausted`,
              }),
              description: (0, X.jsx)(V, {
                id: `settings.codeReview.security.credits.description`,
                defaultMessage: `Security reviews use this account's shared Codex allowance. Turn this on to use credits after that allowance runs out. This also applies to 'Review Everyone' security reviews you've enabled. <link>View usage</link>.`,
                description: `Security review credit consent also covers the user's Review Everyone automation. The link opens this account's usage settings.`,
                values: { link: Fn },
              }),
              control: (e) =>
                (0, X.jsx)(se, {
                  ...e,
                  checked: a,
                  disabled: r,
                  onChange: (e) => o({ allow_credits_for_security_reviews: e }),
                }),
            })
          : null),
      (n[35] = a),
      (n[36] = l),
      (n[37] = r),
      (n[38] = o),
      (n[39] = c?.security_review_credits_available),
      (n[40] = A))
    : (A = n[40]);
  let j;
  return (
    n[41] !== w || n[42] !== k || n[43] !== A || n[44] !== m || n[45] !== y
      ? ((j = (0, X.jsxs)(H, {
          children: [d, (0, X.jsx)(H.Content, { children: (0, X.jsxs)(t, { children: [m, y, w, k, A] }) })],
        })),
        (n[41] = w),
        (n[42] = k),
        (n[43] = A),
        (n[44] = m),
        (n[45] = y),
        (n[46] = j))
      : (j = n[46]),
    j
  );
}
function Fn(e) {
  return (0, X.jsx)(F, {
    className: `cursor-interaction text-info hover:underline`,
    to: `/settings/usage`,
    children: e,
  });
}
function In(e) {
  return (0, X.jsx)(Rt, { value: e });
}
function Ln(e) {
  return (0, X.jsx)(Rt, { value: e });
}
function Rn(e) {
  return (0, X.jsx)(V, {
    id: `settings.codeReview.security.trigger.option.description`,
    defaultMessage: `{policy, select, pr_open {Review when a pull request is opened.} every_push {Review again whenever new commits are pushed after the initial review.} smart_detect {Codex decides whether to review again based on changes since the last completed security review. Experimental and may change.} code_review {Review whenever Codex runs a code review.} other {}}`,
    description: `Explanation for each security review trigger option`,
    values: { policy: e },
  });
}
function zn(e) {
  return (0, X.jsx)(Lt, { value: e });
}
var Bn, X, Vn;
function Hn() {
  return (Hn = e(() => {
    ((Bn = _()),
      O(),
      m(),
      _e(),
      Ct(),
      Qe(),
      ve(),
      L(),
      bt(),
      Mt(),
      Vt(),
      (X = d()),
      (Vn = [`critical`, `high`, `medium`, `low`]));
  }))();
}
function Un(e) {
  let t = (0, Kn.c)(34),
    { appPreferences: n, provider: r } = e,
    i = r === void 0 ? `github` : r,
    { repositoryId: a } = u(),
    o = x(),
    { search: s } = S(),
    [c, l] = k(),
    d;
  t[0] === c ? (d = t[1]) : ((d = c.get(`provider`)), (t[0] = c), (t[1] = d));
  let f = d,
    p = f === `github` || f === `gitlab` ? f : i,
    m = R(Ot),
    h;
  t[2] !== m.app.visible || t[3] !== m.cloud.visible || t[4] !== c
    ? ((h = m.app.visible && (!m.cloud.visible || c.get(`tab`) === `app`)),
      (t[2] = m.app.visible),
      (t[3] = m.cloud.visible),
      (t[4] = c),
      (t[5] = h))
    : (h = t[5]);
  let g = h,
    _ = m.cloud.visible && m.app.visible;
  if (a != null && m.cloud.visible) {
    let e;
    t[6] !== o || t[7] !== s
      ? ((e = () => void o({ pathname: `/settings/code-review`, search: s })),
        (t[6] = o),
        (t[7] = s),
        (t[8] = e))
      : (e = t[8]);
    let n;
    return (
      t[9] !== a || t[10] !== e
        ? ((n = (0, Z.jsx)(Dn, { repositoryId: a, onBack: e }, a)), (t[9] = a), (t[10] = e), (t[11] = n))
        : (n = t[11]),
      n
    );
  }
  let v;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsx)(Ne, { slug: `code-review` })), (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] !== l || t[14] !== g || t[15] !== _
    ? ((y = _
        ? (0, Z.jsx)(mt, {
            variant: `underline`,
            scrollable: !0,
            ariaLabel: `Code Review`,
            selectedKey: g ? `app` : `cloud`,
            onSelect: (e) => {
              l((t) => (t.set(`tab`, e), t));
            },
            tabs: [
              {
                key: `app`,
                name: (0, Z.jsx)(V, {
                  id: `settings.codeReview.privateTab`,
                  defaultMessage: `Preferences`,
                  description: `Tab for Code Review behavior and review instructions in the desktop app`,
                }),
              },
              {
                key: `cloud`,
                name: (0, Z.jsx)(V, {
                  id: `settings.codeReview.cloudTab`,
                  defaultMessage: `Review agent`,
                  description: `Tab for configuring the agent that runs cloud code and security reviews`,
                }),
              },
            ],
          })
        : void 0),
      (t[13] = l),
      (t[14] = g),
      (t[15] = _),
      (t[16] = y))
    : (y = t[16]);
  let b;
  t[17] !== m.app.error || t[18] !== m.app.visible || t[19] !== m.cloud.error || t[20] !== m.cloud.visible
    ? ((b =
        !m.app.visible && !m.cloud.visible && (m.app.error || m.cloud.error)
          ? (0, Z.jsx)(it, {
              layout: `settings-row`,
              children: (0, Z.jsx)(V, {
                id: `settings.codeReview.access.error`,
                defaultMessage: `Unable to load review access. Try again in a moment.`,
                description: `Error when checking whether code review settings are available`,
              }),
            })
          : null),
      (t[17] = m.app.error),
      (t[18] = m.app.visible),
      (t[19] = m.cloud.error),
      (t[20] = m.cloud.visible),
      (t[21] = b))
    : (b = t[21]);
  let C = g ? n : null,
    w;
  t[22] !== m.cloud.visible || t[23] !== o || t[24] !== p || t[25] !== s || t[26] !== l || t[27] !== g
    ? ((w =
        !g && m.cloud.visible
          ? (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(an, {}),
                (0, Z.jsx)(
                  Yt,
                  {
                    provider: p,
                    onProviderChange: (e) => {
                      l((t) => (t.set(`provider`, e), t));
                    },
                    onSelectRepository: (e) =>
                      void o({
                        pathname: `/settings/code-review/repositories/${encodeURIComponent(e)}`,
                        search: s,
                      }),
                  },
                  p,
                ),
                (0, Z.jsx)(Wn, {}),
              ],
            })
          : null),
      (t[22] = m.cloud.visible),
      (t[23] = o),
      (t[24] = p),
      (t[25] = s),
      (t[26] = l),
      (t[27] = g),
      (t[28] = w))
    : (w = t[28]);
  let T;
  return (
    t[29] !== y || t[30] !== b || t[31] !== C || t[32] !== w
      ? ((T = (0, Z.jsxs)(Pe, {
          className: `select-none`,
          title: v,
          stickyControls: y,
          children: [b, C, w],
        })),
        (t[29] = y),
        (t[30] = b),
        (t[31] = C),
        (t[32] = w),
        (t[33] = T))
      : (T = t[33]),
    T
  );
}
function Wn() {
  let e = (0, Kn.c)(51),
    r = n(v),
    i = fe(),
    { data: a, isError: o, refetch: s } = kt(),
    { mutate: c, isPending: l } = jt(),
    { canManageCreditSettings: u } = wt(),
    d;
  e[0] !== i || e[1] !== c || e[2] !== r
    ? ((d = (e) => {
        c(e, {
          onError: () => {
            r.get(pe).danger(
              i.formatMessage({
                id: `settings.codeReview.save.error`,
                defaultMessage: `Unable to save code review settings`,
                description: `Toast shown when saving code review settings fails`,
              }),
              { errorAnalytics: { toastId: `settings.codeReview.save.error` } },
            );
          },
        });
      }),
      (e[0] = i),
      (e[1] = c),
      (e[2] = r),
      (e[3] = d))
    : (d = e[3]);
  let f = d;
  if (a == null) {
    if (o) {
      let n;
      e[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Z.jsx)(V, {
            id: `settings.codeReview.error`,
            defaultMessage: `Unable to load code review settings`,
            description: `Error state for code review settings`,
          })),
          (e[4] = n))
        : (n = e[4]);
      let r;
      e[5] === s ? (r = e[6]) : ((r = () => void s()), (e[5] = s), (e[6] = r));
      let i;
      e[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, Z.jsx)(V, {
            id: `settings.codeReview.retry`,
            defaultMessage: `Retry`,
            description: `Button to retry loading code review settings`,
          })),
          (e[7] = i))
        : (i = e[7]);
      let a;
      return (
        e[8] === r
          ? (a = e[9])
          : ((a = (0, Z.jsx)(H, {
              children: (0, Z.jsx)(H.Content, {
                children: (0, Z.jsx)(t, {
                  children: (0, Z.jsx)(B, {
                    label: n,
                    control: (0, Z.jsx)(A, { color: `secondary`, size: `toolbar`, onClick: r, children: i }),
                  }),
                }),
              }),
            })),
            (e[8] = r),
            (e[9] = a)),
        a
      );
    }
    let n;
    return (
      e[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Z.jsx)(Ue, {
            children: (0, Z.jsx)(V, {
              id: `settings.codeReview.loading`,
              defaultMessage: `Loading code review settings…`,
              description: `Loading state for code review settings`,
            }),
          })),
          (e[10] = n))
        : (n = e[10]),
      n
    );
  }
  let p = a.code_review_trigger_policy ?? `pr_open`,
    m;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(H.Header, {
        title: (0, Z.jsx)(V, {
          id: `settings.codeReview.personal.title`,
          defaultMessage: `Personal preferences`,
          description: `Title for personal code review preferences`,
        }),
      })),
      (e[11] = m))
    : (m = e[11]);
  let h, g;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(V, {
        id: `settings.codeReview.personal.autoReview.label`,
        defaultMessage: `Automatic review`,
        description: `Label for automatic code review preference`,
      })),
      (g = (0, Z.jsx)(V, {
        id: `settings.codeReview.personal.autoReview.description`,
        defaultMessage: `If a repository’s review setting differs from your personal preference, the repository setting takes priority`,
        description: `Description for automatic code review preference`,
      })),
      (e[12] = h),
      (e[13] = g))
    : ((h = e[12]), (g = e[13]));
  let _;
  e[14] !== f || e[15] !== l || e[16] !== a.code_review_preference
    ? ((_ = (0, Z.jsx)(B, {
        label: h,
        description: g,
        control: (e) =>
          (0, Z.jsx)(se, {
            ...e,
            checked: a.code_review_preference === `always`,
            disabled: l,
            onChange: (e) => {
              f({ code_review_preference: e ? `always` : `repo_default` });
            },
          }),
      })),
      (e[14] = f),
      (e[15] = l),
      (e[16] = a.code_review_preference),
      (e[17] = _))
    : (_ = e[17]);
  let y, b;
  e[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsx)(V, {
        id: `settings.codeReview.personal.trigger.label`,
        defaultMessage: `Review trigger`,
        description: `Label for review trigger preference`,
      })),
      (b = (0, Z.jsx)(V, {
        id: `settings.codeReview.personal.trigger.description`,
        defaultMessage: `Choose when ChatGPT should review your pull requests`,
        description: `Description for review trigger preference`,
      })),
      (e[18] = y),
      (e[19] = b))
    : ((y = e[18]), (b = e[19]));
  let x;
  e[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = [`pr_open`, `every_push`, `smart_detect`]), (e[20] = x))
    : (x = e[20]);
  let S;
  e[21] === f ? (S = e[22]) : ((S = (e) => f({ code_review_trigger_policy: e })), (e[21] = f), (e[22] = S));
  let C;
  e[23] !== l || e[24] !== S || e[25] !== p
    ? ((C = (0, Z.jsx)(U, {
        label: y,
        description: b,
        value: p,
        options: x,
        disabled: l,
        onChange: S,
        renderLabel: Gn,
      })),
      (e[23] = l),
      (e[24] = S),
      (e[25] = p),
      (e[26] = C))
    : (C = e[26]);
  let w, T;
  e[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(V, {
        id: `settings.codeReview.personal.exhaustive.label`,
        defaultMessage: `Exhaustive code review`,
        description: `Label for exhaustive code review preference`,
      })),
      (T = (0, Z.jsx)(V, {
        id: `settings.codeReview.personal.exhaustive.description`,
        defaultMessage: `Keep looking for findings until ChatGPT stops finding new issues`,
        description: `Description for exhaustive code review preference`,
      })),
      (e[27] = w),
      (e[28] = T))
    : ((w = e[27]), (T = e[28]));
  let E;
  e[29] !== f || e[30] !== l || e[31] !== a.exhaustive_code_review
    ? ((E = (0, Z.jsx)(B, {
        label: w,
        description: T,
        control: (e) =>
          (0, Z.jsx)(se, {
            ...e,
            checked: a.exhaustive_code_review,
            disabled: l,
            onChange: (e) => {
              f({ exhaustive_code_review: e });
            },
          }),
      })),
      (e[29] = f),
      (e[30] = l),
      (e[31] = a.exhaustive_code_review),
      (e[32] = E))
    : (E = e[32]);
  let D;
  e[33] !== u || e[34] !== f || e[35] !== l || e[36] !== a.allow_credits_for_code_reviews
    ? ((D = u
        ? (0, Z.jsx)(B, {
            label: (0, Z.jsx)(V, {
              id: `settings.codeReview.personal.credits.label`,
              defaultMessage: `Use credits for reviews`,
              description: `Label for code review credits preference`,
            }),
            description: (0, Z.jsx)(V, {
              id: `settings.codeReview.personal.credits.description`,
              defaultMessage: `Allow credits to be consumed for reviews after rate limits`,
              description: `Description for code review credits preference`,
            }),
            control: (e) =>
              (0, Z.jsx)(se, {
                ...e,
                checked: a.allow_credits_for_code_reviews,
                disabled: l,
                onChange: (e) => {
                  f({ allow_credits_for_code_reviews: e });
                },
              }),
          })
        : null),
      (e[33] = u),
      (e[34] = f),
      (e[35] = l),
      (e[36] = a.allow_credits_for_code_reviews),
      (e[37] = D))
    : (D = e[37]);
  let O;
  e[38] !== E || e[39] !== D || e[40] !== _ || e[41] !== C
    ? ((O = (0, Z.jsxs)(H, {
        children: [m, (0, Z.jsx)(H.Content, { children: (0, Z.jsxs)(t, { children: [_, C, E, D] }) })],
      })),
      (e[38] = E),
      (e[39] = D),
      (e[40] = _),
      (e[41] = C),
      (e[42] = O))
    : (O = e[42]);
  let k;
  e[43] !== f || e[44] !== l || e[45] !== a.allow_credits_for_security_reviews || e[46] !== a.security_review
    ? ((k =
        a.security_review == null
          ? null
          : (0, Z.jsx)(Pn, {
              disabled: l,
              preferences: a.security_review,
              allowCreditsForSecurityReviews: a.allow_credits_for_security_reviews,
              onUpdate: f,
            })),
      (e[43] = f),
      (e[44] = l),
      (e[45] = a.allow_credits_for_security_reviews),
      (e[46] = a.security_review),
      (e[47] = k))
    : (k = e[47]);
  let j;
  return (
    e[48] !== O || e[49] !== k
      ? ((j = (0, Z.jsxs)(Z.Fragment, { children: [O, k] })), (e[48] = O), (e[49] = k), (e[50] = j))
      : (j = e[50]),
    j
  );
}
function Gn(e) {
  return (0, Z.jsx)(Lt, { value: e });
}
var Kn, Z;
function qn() {
  return (qn = e(() => {
    ((Kn = _()),
      N(),
      O(),
      m(),
      M(),
      Ye(),
      $e(),
      C(),
      _e(),
      Ct(),
      r(),
      Dt(),
      et(),
      Qe(),
      Ge(),
      ve(),
      Fe(),
      L(),
      Mt(),
      Vt(),
      rn(),
      Nn(),
      ln(),
      Hn(),
      (Z = d()));
  }))();
}
function Jn() {
  let e = (0, Yn.c)(17),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = le()), (e[0] = t)) : (t = e[0]);
  let n = ne(t.githubConnection),
    r = n == null || n.connectorId === `connector_76869538009648d5b282a4bb21c3d157`,
    i = n?.connectorId ?? `connector_76869538009648d5b282a4bb21c3d157`,
    a = n?.accountLinkId,
    o;
  e[1] !== i || e[2] !== a
    ? ((o = { connectorId: i, linkId: a }), (e[1] = i), (e[2] = a), (e[3] = o))
    : (o = e[3]);
  let s = !r,
    l;
  e[4] === s ? (l = e[5]) : ((l = { enabled: s }), (e[4] = s), (e[5] = l));
  let { data: u, isPending: d, isFetching: f, refetch: p } = ue(nt, o, l),
    m = r ? c : u?.app_installation_url,
    h;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(V, {
        id: `settings.codeReviewPlugin.githubRepositoryAccess.label`,
        defaultMessage: `Repository access`,
        description: `Setting for the repositories the GitHub app can access`,
      })),
      (e[6] = h))
    : (h = e[6]);
  let g;
  e[7] !== m || e[8] !== d
    ? ((g =
        m == null && !d
          ? (0, Q.jsx)(V, {
              id: `settings.codeReviewPlugin.githubRepositoryAccess.error`,
              defaultMessage: `Unable to load GitHub repository settings`,
              description: `Error loading the selected GitHub instance's repository access settings link`,
            })
          : void 0),
      (e[7] = m),
      (e[8] = d),
      (e[9] = g))
    : (g = e[9]);
  let _;
  e[10] !== m || e[11] !== f || e[12] !== p
    ? ((_ =
        m == null
          ? (0, Q.jsx)(A, {
              color: `outline`,
              loading: f,
              onClick: () => void p(),
              children: (0, Q.jsx)(V, {
                id: `settings.codeReviewPlugin.githubRepositoryAccess.retry`,
                defaultMessage: `Try again`,
                description: `Retry loading the selected GitHub instance's repository access settings link`,
              }),
            })
          : (0, Q.jsxs)(E, {
              color: `outline`,
              href: m,
              target: `_blank`,
              rel: `noreferrer`,
              onClick: (e) => {
                Le({
                  event: e,
                  href: m,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                });
              },
              children: [
                (0, Q.jsx)(V, {
                  id: `settings.codeReviewPlugin.githubRepositoryAccess.manage`,
                  defaultMessage: `Manage on GitHub`,
                  description: `Link to GitHub to install or configure the app's repository access`,
                }),
                (0, Q.jsx)(tt, { ExternalIcon: D, href: m, openTarget: `external-browser` }),
              ],
            })),
      (e[10] = m),
      (e[11] = f),
      (e[12] = p),
      (e[13] = _))
    : (_ = e[13]);
  let v;
  return (
    e[14] !== g || e[15] !== _
      ? ((v = (0, Q.jsx)(B, { className: `select-none`, label: h, description: g, control: _ })),
        (e[14] = g),
        (e[15] = _),
        (e[16] = v))
      : (v = e[16]),
    v
  );
}
var Yn, Q;
function Xn() {
  return (Xn = e(() => {
    ((Yn = _()), N(), re(), O(), w(), M(), Ze(), pt(), y(), de(), qe(), ve(), (Q = d()));
  }))();
}
function Zn(e) {
  let t = (0, $n.c)(23),
    {
      provider: r,
      defaultHostname: i,
      options: a,
      selectedKey: o,
      isLoading: s,
      isError: c,
      onSelect: l,
    } = e,
    u = n(v),
    d = fe(),
    [f, p] = (0, er.useState)(!1),
    m;
  if (t[0] !== a || t[1] !== o) {
    let e;
    (t[3] === o ? (e = t[4]) : ((e = (e) => e.key === o), (t[3] = o), (t[4] = e)),
      (m = a.find(e)),
      (t[0] = a),
      (t[1] = o),
      (t[2] = m));
  } else m = t[2];
  let h = m,
    g = s || f,
    _;
  t[5] === r
    ? (_ = t[6])
    : ((_ = (0, $.jsx)(V, {
        id: `settings.codeReviewPlugin.instance.label`,
        defaultMessage: `{provider} instance`,
        description: `Label for the named code hosting provider's selected server`,
        values: { provider: r },
      })),
      (t[5] = r),
      (t[6] = _));
  let y;
  t[7] !== i || t[8] !== c || t[9] !== r
    ? ((y = c
        ? (0, $.jsx)(V, {
            id: `settings.codeReviewPlugin.instance.loadError`,
            defaultMessage: `Unable to load connected {provider} instances`,
            description: `Error loading the named code hosting provider's connections`,
            values: { provider: r },
          })
        : (0, $.jsx)(V, {
            id: `settings.codeReviewPlugin.instance.description`,
            defaultMessage: `Choose {hostname} or a connected instance`,
            description: `Explains choosing the default code hosting server or a connected enterprise instance`,
            values: { hostname: i },
          })),
      (t[7] = i),
      (t[8] = c),
      (t[9] = r),
      (t[10] = y))
    : (y = t[10]);
  let b;
  t[11] !== g || t[12] !== d || t[13] !== l || t[14] !== a || t[15] !== r || t[16] !== u || t[17] !== h
    ? ((b = (e) =>
        (0, $.jsx)(he, {
          disabled: g,
          triggerButton: (0, $.jsx)(De, {
            ...e,
            disabled: g,
            children:
              h == null
                ? (0, $.jsx)(V, {
                    id: `settings.codeReviewPlugin.instance.unavailable`,
                    defaultMessage: `Selected connection unavailable`,
                    description: `The saved code hosting connection is no longer available`,
                  })
                : (0, $.jsx)(Qn, { hostname: h.hostname, name: h.name }),
          }),
          children: a.map((e) =>
            (0, $.jsx)(
              me.Item,
              {
                onSelect: () => {
                  (p(!0),
                    l(e.value)
                      .catch(() => {
                        u.get(pe).danger(
                          d.formatMessage(
                            {
                              id: `settings.codeReviewPlugin.instance.saveError`,
                              defaultMessage: `Unable to save {provider} instance`,
                              description: `Error saving the named code hosting provider's connection`,
                            },
                            { provider: r },
                          ),
                          { errorAnalytics: { toastId: `settings.codeReviewPlugin.instance.saveError` } },
                        );
                      })
                      .finally(() => p(!1)));
                },
                children: (0, $.jsx)(Qn, { hostname: e.hostname, name: e.name }),
              },
              e.key,
            ),
          ),
        })),
      (t[11] = g),
      (t[12] = d),
      (t[13] = l),
      (t[14] = a),
      (t[15] = r),
      (t[16] = u),
      (t[17] = h),
      (t[18] = b))
    : (b = t[18]);
  let x;
  return (
    t[19] !== _ || t[20] !== y || t[21] !== b
      ? ((x = (0, $.jsx)(B, { label: _, description: y, control: b })),
        (t[19] = _),
        (t[20] = y),
        (t[21] = b),
        (t[22] = x))
      : (x = t[22]),
    x
  );
}
function Qn(e) {
  let t = (0, $n.c)(3),
    { hostname: n, name: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = r
          ? (0, $.jsx)(V, {
              id: `settings.codeReviewPlugin.instance.option`,
              defaultMessage: `{hostname} — {name}`,
              description: `Code hosting server hostname and connection name`,
              values: { hostname: n, name: r },
            })
          : (0, $.jsx)($.Fragment, { children: n })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
var $n, er, $;
function tr() {
  return (tr = e(() => {
    (($n = _()), N(), (er = s()), O(), I(), C(), r(), ve(), Fe(), ($ = d()));
  }))();
}
function nr() {
  let e = (0, or.c)(2),
    t = Te(`223049465`),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = t ? (0, sr.jsxs)(sr.Fragment, { children: [(0, sr.jsx)(rr, {}), (0, sr.jsx)(Jn, {})] }) : null),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
function rr() {
  let e = (0, or.c)(14),
    t = n(v),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = le()), (e[0] = r)) : (r = e[0]);
  let i = r.githubConnection,
    a = ne(i),
    o = ee(),
    { data: s, isPending: c, isError: l } = R(Ve),
    u;
  e[1] === a ? (u = e[2]) : ((u = ar(a)), (e[1] = a), (e[2] = u));
  let d = o || c,
    f;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = { key: `github.com`, hostname: `github.com`, name: ``, value: null }), (e[3] = f))
    : (f = e[3]);
  let p;
  e[4] === s ? (p = e[5]) : ((p = [f, ...(s ?? []).map(ir)]), (e[4] = s), (e[5] = p));
  let m;
  e[6] === t ? (m = e[7]) : ((m = (e) => oe(t, i, e)), (e[6] = t), (e[7] = m));
  let h;
  return (
    e[8] !== l || e[9] !== u || e[10] !== d || e[11] !== p || e[12] !== m
      ? ((h = (0, sr.jsx)(Zn, {
          provider: `GitHub`,
          defaultHostname: `github.com`,
          selectedKey: u,
          isLoading: d,
          isError: l,
          options: p,
          onSelect: m,
        })),
        (e[8] = l),
        (e[9] = u),
        (e[10] = d),
        (e[11] = p),
        (e[12] = m),
        (e[13] = h))
      : (h = e[13]),
    h
  );
}
function ir(e) {
  let t = { hostname: e.hostname, ...e.connection };
  return { key: ar(t), hostname: e.hostname, name: e.name, value: t };
}
function ar(e) {
  return e == null ? `github.com` : JSON.stringify([e.hostname, e.connectorId, e.accountLinkId]);
}
var or, sr;
function cr() {
  return (cr = e(() => {
    ((or = _()), N(), re(), r(), de(), bt(), We(), Xn(), tr(), (sr = d()));
  }))();
}
function lr() {
  let e = (0, dr.c)(15),
    t = n(v),
    { accountId: r, userId: i } = st(),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = le()), (e[0] = a)) : (a = e[0]);
  let o = a.gitlabConnectorId,
    s = ne(o) ?? `connector_0c9786b2f41f41558056126bdb46c9bd`,
    c = ee(),
    l;
  e[1] !== r || e[2] !== i
    ? ((l = rt({ accountId: r, userId: i })), (e[1] = r), (e[2] = i), (e[3] = l))
    : (l = e[3]);
  let { data: u, isPending: d, isError: p } = f(l),
    m = c || d,
    h;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = { key: Ie, hostname: `gitlab.com`, name: ``, value: null }), (e[4] = h))
    : (h = e[4]);
  let g;
  e[5] === u ? (g = e[6]) : ((g = [h, ...(u ?? []).map(ur)]), (e[5] = u), (e[6] = g));
  let _;
  e[7] === t ? (_ = e[8]) : ((_ = (e) => oe(t, o, e)), (e[7] = t), (e[8] = _));
  let y;
  return (
    e[9] !== p || e[10] !== s || e[11] !== m || e[12] !== g || e[13] !== _
      ? ((y = (0, fr.jsx)(Zn, {
          provider: `GitLab`,
          defaultHostname: `gitlab.com`,
          selectedKey: s,
          isLoading: m,
          isError: p,
          options: g,
          onSelect: _,
        })),
        (e[9] = p),
        (e[10] = s),
        (e[11] = m),
        (e[12] = g),
        (e[13] = _),
        (e[14] = y))
      : (y = e[14]),
    y
  );
}
function ur(e) {
  return { key: e.connectorId, hostname: e.hostname, name: e.name, value: e.connectorId };
}
var dr, fr;
function pr() {
  return (pr = e(() => {
    ((dr = _()), ae(), N(), re(), we(), dt(), Je(), r(), de(), tr(), (fr = d()));
  }))();
}
function mr() {
  let e = (0, hr.c)(2),
    t = R(je),
    n = _r[t],
    r;
  return (e[0] === n ? (r = e[1]) : ((r = n == null ? null : (0, gr.jsx)(n, {})), (e[0] = n), (e[1] = r)), r);
}
var hr, gr, _r;
function vr() {
  return (vr = e(() => {
    ((hr = _()), N(), Me(), cr(), pr(), (gr = d()), (_r = { github: nr, gitlab: lr }));
  }))();
}
function yr() {
  let e = (0, br.c)(10),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = le()), (e[0] = n)) : (n = e[0]);
  let r = ne(n.gitHostingProvider),
    i = fe(),
    a;
  e[1] === i
    ? (a = e[2])
    : ((a = i.formatMessage({
        id: `settings.codeReviewPlugin.appPreferences`,
        defaultMessage: `App preferences`,
        description: `Code Review app preferences section`,
      })),
      (e[1] = i),
      (e[2] = a));
  let o;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, xr.jsx)(Et, {
        embedded: !0,
        inheritHostBackground: !0,
        hostId: j,
        lifetime: `app`,
        selection: { server: `code-review`, toolName: `pull_requests.settings` },
      })),
      (e[3] = o))
    : (o = e[3]);
  let s;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, xr.jsx)(t, { children: (0, xr.jsx)(mr, {}) })), (e[4] = s))
    : (s = e[4]);
  let c;
  e[5] === a
    ? (c = e[6])
    : ((c = (0, xr.jsxs)(`section`, { "aria-label": a, children: [o, s] })), (e[5] = a), (e[6] = c));
  let l;
  return (
    e[7] !== r || e[8] !== c
      ? ((l = (0, xr.jsx)(Un, { provider: r, appPreferences: c })), (e[7] = r), (e[8] = c), (e[9] = l))
      : (l = e[9]),
    l
  );
}
var br, xr;
function Sr() {
  return (Sr = e(() => {
    ((br = _()), re(), O(), Tt(), de(), qn(), L(), P(), vr(), (xr = d()));
  }))();
}
Sr();
export { yr as CodeReviewPluginSettings };
//# sourceMappingURL=settings-ee81c10f81cd.js.map
