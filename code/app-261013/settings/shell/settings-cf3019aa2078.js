import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $F as n,
  $W as r,
  $nt as i,
  AO as a,
  BV as o,
  CO as s,
  Cot as c,
  Ext as l,
  Fat as u,
  GE as d,
  IDt as f,
  Ixt as p,
  JC as m,
  LV as h,
  MO as g,
  Nxt as _,
  Pat as v,
  Pxt as y,
  QC as b,
  TDt as x,
  TJ as S,
  TO as C,
  VDt as w,
  Vxt as T,
  WE as E,
  Wnt as D,
  Xot as O,
  Yot as k,
  Zxt as A,
  _xt as j,
  dlt as M,
  e3 as N,
  ert as P,
  frt as F,
  hot as I,
  hrt as L,
  iot as ee,
  iw as R,
  ixt as te,
  jDt as z,
  jO as ne,
  kxt as re,
  lot as ie,
  oot as ae,
  qC as B,
  qnt as oe,
  qxt as se,
  t3 as ce,
  tI as le,
  tw as V,
  ult as ue,
  vzt as H,
  wot as de,
  wxt as fe,
  xMt as U,
  yH as pe,
  yzt as me,
  zxt as he,
} from "./app-shared-bbfeca5e5737.js";
import {
  B4n as ge,
  C9 as _e,
  DPn as ve,
  Ek as ye,
  Fin as be,
  Fur as xe,
  GMr as Se,
  Hin as Ce,
  Iin as we,
  JOn as Te,
  JPn as Ee,
  L2n as De,
  M2n as Oe,
  Nur as ke,
  OPn as Ae,
  QDr as je,
  QP as Me,
  R4n as Ne,
  S9 as Pe,
  TPn as Fe,
  Tk as W,
  V4n as Ie,
  XDr as Le,
  XMr as Re,
  XPn as ze,
  YOn as Be,
  _F as Ve,
  co as He,
  e3n as Ue,
  eDr as We,
  eF as Ge,
  ean as Ke,
  fur as qe,
  h2n as Je,
  hF as Ye,
  hp as Xe,
  iPr as Ze,
  kPn as Qe,
  llt as $e,
  lo as et,
  mF as tt,
  mp as nt,
  nDr as rt,
  pF as it,
  pur as at,
  s2n as ot,
  sPr as st,
  t3n as ct,
  tDr as lt,
  tF as ut,
  tNr as dt,
  tan as ft,
  ult as pt,
  xPn as mt,
  yPn as ht,
  z4n as gt,
} from "./app-initial-5851df3f6cb1.js";
import { Ll as _t, Rl as vt } from "./app-primary-fe8a450b3b04.js";
import { i as yt, n as bt } from "./view-page-7e6e4c3c304d.js";
import { n as xt, t as St } from "./code-review-access-497dd017cf4b.js";
import { a as Ct, i as wt, o as Tt, r as Et } from "./cloud-preferences-cef52f477346.js";
function G(e) {
  let t = (0, Nt.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ label: r, description: n, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  t[4] === i ? (a = t[5]) : ((a = (e) => (0, K.jsx)(Dt, { ...i, ...e })), (t[4] = i), (t[5] = a));
  let o;
  return (
    t[6] !== n || t[7] !== r || t[8] !== a
      ? ((o = (0, K.jsx)(V, { label: r, description: n, control: a })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
function Dt(e) {
  let t = (0, Nt.c)(40),
    n,
    r,
    i,
    a,
    o,
    c,
    l;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (c = t[6]), (l = t[7]))
    : (({ value: l, options: a, disabled: r, onChange: i, renderLabel: c, renderDescription: o, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = c),
      (t[7] = l));
  let u = (0, Pt.useId)(),
    d = o == null ? void 0 : `panelWide`,
    f = n[`aria-labelledby`] == null ? void 0 : `${n[`aria-labelledby`]} ${u}`,
    p;
  t[8] !== n || t[9] !== u
    ? ((p =
        n[`aria-label`] == null ? n[`aria-describedby`] : [n[`aria-describedby`], u].filter(Ot).join(` `)),
      (t[8] = n),
      (t[9] = u),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== c || t[12] !== l ? ((m = c(l)), (t[11] = c), (t[12] = l), (t[13] = m)) : (m = t[13]);
  let h;
  t[14] !== m || t[15] !== u
    ? ((h = (0, K.jsx)(`span`, { id: u, children: m })), (t[14] = m), (t[15] = u), (t[16] = h))
    : (h = t[16]);
  let g;
  t[17] !== n || t[18] !== r || t[19] !== f || t[20] !== p || t[21] !== h
    ? ((g = (0, K.jsx)(Me, { ...n, "aria-labelledby": f, "aria-describedby": p, disabled: r, children: h })),
      (t[17] = n),
      (t[18] = r),
      (t[19] = f),
      (t[20] = p),
      (t[21] = h),
      (t[22] = g))
    : (g = t[22]);
  let _;
  if (t[23] !== i || t[24] !== a || t[25] !== o || t[26] !== c) {
    let e;
    (t[28] !== i || t[29] !== o || t[30] !== c
      ? ((e = (e) =>
          (0, K.jsx)(C.RadioItem, { value: e, onSelect: () => i(e), SubText: o?.(e), children: c(e) }, e)),
        (t[28] = i),
        (t[29] = o),
        (t[30] = c),
        (t[31] = e))
      : (e = t[31]),
      (_ = a.map(e)),
      (t[23] = i),
      (t[24] = a),
      (t[25] = o),
      (t[26] = c),
      (t[27] = _));
  } else _ = t[27];
  let v;
  t[32] !== _ || t[33] !== l
    ? ((v = (0, K.jsx)(C.RadioGroup, { value: l, children: _ })), (t[32] = _), (t[33] = l), (t[34] = v))
    : (v = t[34]);
  let y;
  return (
    t[35] !== r || t[36] !== d || t[37] !== g || t[38] !== v
      ? ((y = (0, K.jsx)(s, { contentWidth: d, disabled: r, triggerButton: g, children: v })),
        (t[35] = r),
        (t[36] = d),
        (t[37] = g),
        (t[38] = v),
        (t[39] = y))
      : (y = t[39]),
    y
  );
}
function Ot(e) {
  return e != null;
}
function kt(e) {
  let t = (0, Nt.c)(26),
    { title: n, children: r, security: i, preferences: a, disabled: o, onUpdate: s } = e,
    c = i !== void 0 && i,
    l = a.global_review_preference !== `never_review`,
    u = a.review_preference === `team` ? `team` : `personal`;
  a.global_review_preference === `review_everyone` && (u = `everyone`);
  let d;
  t[0] === n ? (d = t[1]) : ((d = (0, K.jsx)(W.Header, { title: n })), (t[0] = n), (t[1] = d));
  let p = String(c),
    m;
  t[2] === p
    ? (m = t[3])
    : ((m = (0, K.jsx)(f, {
        id: `settings.codeReview.repository.automatic`,
        defaultMessage: `{security, select, true {Auto security review} other {Automatic review}}`,
        description: `Label for the repository setting that enables automatic reviews. Security reviews look for vulnerabilities; the other option reviews code.`,
        values: { security: p },
      })),
      (t[2] = p),
      (t[3] = m));
  let h;
  t[4] === l
    ? (h = t[5])
    : ((h = l
        ? void 0
        : (0, K.jsx)(f, {
            id: `settings.codeReview.repository.manualReviewNotice`,
            defaultMessage: `You can still request a review with @codex`,
            description: `Notice shown while automatic repository reviews are disabled. Signed-in Codex users can request a manual review by mentioning @codex.`,
          })),
      (t[4] = l),
      (t[5] = h));
  let g;
  t[6] !== o || t[7] !== l || t[8] !== s
    ? ((g = (e) =>
        (0, K.jsx)(ne, {
          ...e,
          checked: l,
          disabled: o,
          onChange: (e) => s({ global_review_preference: e ? `review_if_enabled` : `never_review` }),
        })),
      (t[6] = o),
      (t[7] = l),
      (t[8] = s),
      (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] !== m || t[11] !== h || t[12] !== g
    ? ((_ = (0, K.jsx)(V, { label: m, description: h, control: g })),
      (t[10] = m),
      (t[11] = h),
      (t[12] = g),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== o || t[15] !== l || t[16] !== s || t[17] !== u
    ? ((v = l
        ? (0, K.jsx)(G, {
            label: (0, K.jsx)(f, {
              id: `settings.codeReview.repository.scope`,
              defaultMessage: `Review`,
              description: `Label for selecting whose pull requests receive automatic reviews in repository settings.`,
            }),
            value: u,
            options: [`everyone`, `team`, `personal`],
            disabled: o,
            onChange: (e) =>
              s({
                global_review_preference: e === `everyone` ? `review_everyone` : `review_if_enabled`,
                review_preference: e === `personal` ? `never` : `team`,
              }),
            renderLabel: At,
          })
        : null),
      (t[14] = o),
      (t[15] = l),
      (t[16] = s),
      (t[17] = u),
      (t[18] = v))
    : (v = t[18]);
  let y = l ? r : null,
    b;
  t[19] !== _ || t[20] !== v || t[21] !== y
    ? ((b = (0, K.jsx)(W.Content, { children: (0, K.jsxs)(B, { children: [_, v, y] }) })),
      (t[19] = _),
      (t[20] = v),
      (t[21] = y),
      (t[22] = b))
    : (b = t[22]);
  let x;
  return (
    t[23] !== b || t[24] !== d
      ? ((x = (0, K.jsxs)(W, { children: [d, b] })), (t[23] = b), (t[24] = d), (t[25] = x))
      : (x = t[25]),
    x
  );
}
function At(e) {
  return (0, K.jsx)(f, {
    id: `settings.codeReview.repository.scope.option`,
    defaultMessage: `{scope, select, everyone {All PRs} team {Team PRs} other {Follow personal preferences}}`,
    description: `Automatic review scope in repository settings. All PRs includes every contributor, Team PRs preserves an existing workspace setting, and Follow personal preferences lets each contributor opt in. PR means pull request.`,
    values: { scope: e },
  });
}
function jt(e) {
  let t = (0, Nt.c)(2),
    { value: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, K.jsx)(f, {
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
function Mt(e) {
  let t = (0, Nt.c)(2),
    { value: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, K.jsx)(f, {
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
var Nt, Pt, K;
function Ft() {
  return (Ft = e(() => {
    ((Nt = H()), (Pt = me()), z(), a(), g(), ye(), R(), ut(), m(), (K = U()));
  }))();
}
function It(e, t) {
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
var Lt, Rt, zt, Bt, Vt;
function Ht() {
  return (Ht = e(() => {
    (y(),
      Ne(),
      xe(),
      dt(),
      de(),
      u(),
      st(),
      F(),
      (Lt = 8),
      1e3 / Lt,
      (Rt = A(c, (e, { get: t, scope: n }) => {
        let r = t(Se),
          i = t(Re);
        return {
          queryKey: [`repository-review-connectors`, r, i, e],
          enabled: !!r && !!i,
          queryFn: async ({ client: t, signal: a }) => {
            let o = (await gt({ provider: e, applyEligibilityFilter: !0 })).filter(
              (e) => e.status !== `DISABLED_BY_ADMIN` && e.labels?.admin_only_connector !== `true`,
            );
            if (o.length === 0) return [];
            a.throwIfAborted();
            let s = await t.fetchQuery({
              ...ke({ accountId: r, userId: i, productSku: `CODEX` }),
              staleTime: 0,
            });
            if ((a.throwIfAborted(), n.get(Se) !== r || n.get(Re) !== i))
              throw Error(`Account changed while loading repository connections`);
            let c = new Set(s.map((e) => e.connector_id));
            return o.filter((e) => c.has(e.id));
          },
          retry: !1,
          refetchOnMount: !0,
          refetchOnWindowFocus: !0,
          staleTime: v.FIVE_MINUTES,
        };
      })),
      (zt = A(c, (e, { get: t }) => ({
        queryKey: [`repository-review-settings`, t(Se), `list`, e],
        queryFn: async () => {
          let t = e.search.trim();
          if (t.length === 0 && e.provider === `gitlab`)
            return Ze.safeGet(`/wham/settings/code_review`, {
              parameters: {
                query: {
                  provider: e.provider,
                  next_token: e.nextToken,
                  connector_id: e.connectorId,
                  per_page: Lt,
                },
              },
            });
          let n = Number(e.nextToken ?? 1),
            r = It(t, e.provider);
          if (n === 1 && r != null)
            try {
              let t = await Ze.safeGet(`/wham/settings/code_review/{repo_id}`, {
                expectedErrorStatuses: [400, 403, 404],
                parameters: {
                  path: { repo_id: `${e.provider}-${r}` },
                  query: { connector_id: e.connectorId },
                },
              });
              return { repo_review_settings: t.repository.archived ? [] : [t], next_token: null };
            } catch (e) {
              if (!(e instanceof L) || ![400, 403, 404].includes(e.status)) throw e;
            }
          let i = await Ze.safeGet(`/wham/settings/code_review_search`, {
            parameters: {
              query: {
                query: e.provider === `github` ? `${t} archived:false`.trim() : t,
                limit: Lt,
                page: n,
                provider: e.provider,
                connector_id: e.connectorId,
              },
            },
          });
          return {
            ...i,
            next_token:
              i.repo_review_settings.length < Lt || (e.provider === `github` && n >= 125)
                ? null
                : String(n + 1),
          };
        },
        retry: !1,
        refetchOnMount: !0,
        staleTime: v.FIVE_MINUTES,
      }))),
      (Bt = A(c, (e, { get: t }) => ({
        queryKey: [`repository-review-settings`, t(Se), `detail`, e],
        queryFn: () =>
          Ze.safeGet(`/wham/settings/code_review/{repo_id}`, { parameters: { path: { repo_id: e } } }),
        retry: !1,
        refetchOnMount: !0,
        staleTime: v.FIVE_MINUTES,
      }))),
      (Vt = se(c, (e, { scope: t }) => ({
        mutationFn: (e) =>
          Ze.safePatch(`/wham/settings/code_review`, {
            expectedErrorStatuses: [400, 403, 409],
            requestBody: { repo_review_settings: [e] },
          }),
        onSuccess: async () => {
          await t.queryClient.invalidateQueries({ queryKey: [`repository-review-settings`] });
        },
        onError: async (n) => {
          n instanceof L && n.status === 409 && (await t.query.invalidate(Bt, e));
        },
      }))));
  }))();
}
function Ut(e) {
  let n = (0, Yt.c)(59),
    { provider: r, onProviderChange: i, onSelectRepository: a } = e,
    o = w(),
    [s, c] = (0, Xt.useState)(``),
    l;
  n[0] === s ? (l = n[1]) : ((l = s.trim()), (n[0] = s), (n[1] = l));
  let u = ft(l, 200),
    { data: d, isPending: p, isError: m, refetch: h } = Ct(),
    { data: g, isPending: _, isError: v, refetch: y } = he(Rt, r),
    [b, x] = (0, Xt.useState)(null),
    S = r === `github` ? d?.preferred_github_connector_id : d?.preferred_gitlab_connector_id,
    C = r === `github` ? `GitHub` : `GitLab`,
    T;
  n[2] !== g || n[3] !== S || n[4] !== b
    ? ((T = g?.find((e) => e.id === b) ?? g?.find((e) => e.id === S) ?? g?.[0]),
      (n[2] = g),
      (n[3] = S),
      (n[4] = b),
      (n[5] = T))
    : (T = n[5]);
  let E = T,
    D;
  if (_ || p) {
    let e;
    (n[6] === C
      ? (e = n[7])
      : ((e = (0, q.jsx)(it, {
          children: (0, q.jsx)(f, {
            id: `settings.codeReview.repositories.connections.loading.v2`,
            defaultMessage: `Loading {provider} connections…`,
            description: `Loading state while selecting the user's saved or connected account for repository review settings. The provider is GitHub or GitLab.`,
            values: { provider: C },
          }),
        })),
        (n[6] = C),
        (n[7] = e)),
      (D = e));
  } else if (v || m) {
    let e;
    n[8] === C
      ? (e = n[9])
      : ((e = (0, q.jsx)(f, {
          id: `settings.codeReview.repositories.connections.error.v2`,
          defaultMessage: `Unable to load {provider} connections`,
          description: `Error shown when available accounts or the preferred account cannot be loaded for repository review settings. The provider is GitHub or GitLab.`,
          values: { provider: C },
        })),
        (n[8] = C),
        (n[9] = e));
    let r;
    n[10] !== y || n[11] !== h
      ? ((r = () => {
          (y(), h());
        }),
        (n[10] = y),
        (n[11] = h),
        (n[12] = r))
      : (r = n[12]);
    let i;
    n[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, q.jsx)(f, {
          id: `settings.codeReview.repositories.connections.retry`,
          defaultMessage: `Retry`,
          description: `Retry loading available connections and the preferred account for repository review settings.`,
        })),
        (n[13] = i))
      : (i = n[13]);
    let a;
    n[14] === r
      ? (a = n[15])
      : ((a = (0, q.jsx)(t, { color: `secondary`, size: `toolbar`, onClick: r, children: i })),
        (n[14] = r),
        (n[15] = a));
    let o;
    (n[16] !== e || n[17] !== a
      ? ((o = (0, q.jsx)(B, { children: (0, q.jsx)(V, { label: e, control: a }) })),
        (n[16] = e),
        (n[17] = a),
        (n[18] = o))
      : (o = n[18]),
      (D = o));
  } else if (E == null) {
    let e;
    (n[19] === C
      ? (e = n[20])
      : ((e = (0, q.jsx)(nt, {
          layout: `settings-row`,
          children: (0, q.jsx)(f, {
            id: `settings.codeReview.repositories.connections.empty.v2`,
            defaultMessage: `Connect a {provider} account to configure repository reviews`,
            description: `Empty state when the user has no linked account available for repository review settings. The provider is GitHub or GitLab.`,
            values: { provider: C },
          }),
        })),
        (n[19] = C),
        (n[20] = e)),
      (D = e));
  } else {
    let e;
    n[21] !== E.id || n[22] !== g || n[23] !== C
      ? ((e =
          g != null && g.length > 1
            ? (0, q.jsx)(B, {
                children: (0, q.jsx)(G, {
                  label: (0, q.jsx)(f, {
                    id: `settings.codeReview.repositories.connection.v2`,
                    defaultMessage: `{provider} connection`,
                    description: `Label for selecting which connected account supplies repositories in review settings, including private server instances. The provider is GitHub or GitLab.`,
                    values: { provider: C },
                  }),
                  value: E.id,
                  options: g.map(Gt),
                  disabled: !1,
                  onChange: x,
                  renderLabel: (e) => g.find((t) => t.id === e)?.name,
                }),
              })
            : null),
        (n[21] = E.id),
        (n[22] = g),
        (n[23] = C),
        (n[24] = e))
      : (e = n[24]);
    let t = `${E.id}:${u}`,
      i;
    n[25] !== E.id || n[26] !== u || n[27] !== a || n[28] !== r || n[29] !== t
      ? ((i = (0, q.jsx)(Kt, { provider: r, connectorId: E.id, search: u, onSelectRepository: a }, t)),
        (n[25] = E.id),
        (n[26] = u),
        (n[27] = a),
        (n[28] = r),
        (n[29] = t),
        (n[30] = i))
      : (i = n[30]);
    let o;
    (n[31] !== e || n[32] !== i
      ? ((o = (0, q.jsxs)(q.Fragment, { children: [e, i] })), (n[31] = e), (n[32] = i), (n[33] = o))
      : (o = n[33]),
      (D = o));
  }
  let O;
  n[34] === o
    ? (O = n[35])
    : ((O = o.formatMessage({
        id: `settings.codeReview.repositories.provider`,
        defaultMessage: `Git provider`,
        description: `Accessible label for choosing GitHub or GitLab repositories in cloud review settings`,
      })),
      (n[34] = o),
      (n[35] = O));
  let k;
  n[36] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = [`github`, `gitlab`]), (n[36] = k)) : (k = n[36]);
  let A;
  n[37] !== i || n[38] !== r || n[39] !== O
    ? ((A = (0, q.jsx)(Dt, {
        "aria-label": O,
        value: r,
        options: k,
        disabled: !1,
        onChange: i,
        renderLabel: Wt,
      })),
      (n[37] = i),
      (n[38] = r),
      (n[39] = O),
      (n[40] = A))
    : (A = n[40]);
  let j, M;
  n[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, q.jsx)(f, {
        id: `settings.codeReview.repositories.title`,
        defaultMessage: `Repositories`,
        description: `Heading for repositories with configurable code and security reviews`,
      })),
      (M = (0, q.jsx)(f, {
        id: `settings.codeReview.repositories.description`,
        defaultMessage: `Choose a repository to configure its automatic reviews`,
        description: `Description of the repository list in Code Review settings`,
      })),
      (n[41] = j),
      (n[42] = M))
    : ((j = n[41]), (M = n[42]));
  let N;
  n[43] === A
    ? (N = n[44])
    : ((N = (0, q.jsx)(W.Header, { actions: A, title: j, subtitle: M })), (n[43] = A), (n[44] = N));
  let P;
  n[45] === o
    ? (P = n[46])
    : ((P = o.formatMessage({
        id: `settings.codeReview.repositories.search.label`,
        defaultMessage: `Search repositories`,
        description: `Accessible label for the repository search in Code Review settings`,
      })),
      (n[45] = o),
      (n[46] = P));
  let F;
  n[47] === o
    ? (F = n[48])
    : ((F = o.formatMessage({
        id: `settings.codeReview.repositories.search.placeholder`,
        defaultMessage: `Search repositories`,
        description: `Placeholder for the repository search in Code Review settings`,
      })),
      (n[47] = o),
      (n[48] = F));
  let I;
  n[49] !== s || n[50] !== F || n[51] !== P
    ? ((I = (0, q.jsx)($e, {
        id: `code-review-repository-search`,
        inputRole: `searchbox`,
        label: P,
        placeholder: F,
        maxLength: 256,
        searchQuery: s,
        onSearchQueryChange: c,
      })),
      (n[49] = s),
      (n[50] = F),
      (n[51] = P),
      (n[52] = I))
    : (I = n[52]);
  let L;
  n[53] !== D || n[54] !== I
    ? ((L = (0, q.jsxs)(W.Content, { children: [I, D] })), (n[53] = D), (n[54] = I), (n[55] = L))
    : (L = n[55]);
  let ee;
  return (
    n[56] !== L || n[57] !== N
      ? ((ee = (0, q.jsxs)(W, { children: [N, L] })), (n[56] = L), (n[57] = N), (n[58] = ee))
      : (ee = n[58]),
    ee
  );
}
function Wt(e) {
  return e === `github` ? `GitHub` : `GitLab`;
}
function Gt(e) {
  return e.id;
}
function Kt(e) {
  let n = (0, Yt.c)(33),
    { provider: r, connectorId: i, search: a, onSelectRepository: s } = e,
    c;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = [null]), (n[0] = c)) : (c = n[0]);
  let [l, u] = (0, Xt.useState)(c),
    d;
  n[1] === l ? (d = n[2]) : ((d = l.at(-1)), (n[1] = l), (n[2] = d));
  let p;
  n[3] !== i || n[4] !== r || n[5] !== a || n[6] !== d
    ? ((p = { provider: r, connectorId: i, search: a, nextToken: d }),
      (n[3] = i),
      (n[4] = r),
      (n[5] = a),
      (n[6] = d),
      (n[7] = p))
    : (p = n[7]);
  let { data: m, isError: h, isPending: g, isFetching: _, refetch: v } = he(zt, p),
    y;
  if (g) {
    let e;
    (n[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, q.jsx)(it, {
          children: (0, q.jsx)(f, {
            id: `settings.codeReview.repositories.loading`,
            defaultMessage: `Loading repositories…`,
            description: `Loading state for the repository list in Code Review settings`,
          }),
        })),
        (n[8] = e))
      : (e = n[8]),
      (y = e));
  } else if (h || m == null) {
    let e;
    n[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, q.jsx)(f, {
          id: `settings.codeReview.repositories.error`,
          defaultMessage: `Unable to load repositories`,
          description: `Error shown when Code Review cannot load the user's repositories`,
        })),
        (n[9] = e))
      : (e = n[9]);
    let r;
    n[10] === v ? (r = n[11]) : ((r = () => void v()), (n[10] = v), (n[11] = r));
    let i;
    n[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, q.jsx)(f, {
          id: `settings.codeReview.repositories.retry`,
          defaultMessage: `Retry`,
          description: `Button to retry loading repositories in Code Review settings`,
        })),
        (n[12] = i))
      : (i = n[12]);
    let a;
    (n[13] === r
      ? (a = n[14])
      : ((a = (0, q.jsx)(B, {
          children: (0, q.jsx)(V, {
            label: e,
            control: (0, q.jsx)(t, { color: `secondary`, size: `toolbar`, onClick: r, children: i }),
          }),
        })),
        (n[13] = r),
        (n[14] = a)),
      (y = a));
  } else {
    let e;
    n[15] !== m.repo_review_settings || n[16] !== s
      ? ((e =
          m.repo_review_settings.length === 0
            ? (0, q.jsx)(nt, {
                layout: `settings-row`,
                children: (0, q.jsx)(f, {
                  id: `settings.codeReview.repositories.empty`,
                  defaultMessage: `No repositories found`,
                  description: `Empty state for the repository list or search in Code Review settings`,
                }),
              })
            : m.repo_review_settings.map((e) =>
                (0, q.jsx)(
                  b,
                  {
                    label: e.repository.repository_full_name,
                    description: (0, q.jsx)(f, {
                      id: `settings.codeReview.repositories.status`,
                      defaultMessage: `Automatic code review: {policy, select, off {Off} all {All PRs} team {Team PRs} other {Follow personal preferences}}`,
                      description: `Summary of which pull requests are automatically reviewed in a repository`,
                      values: { policy: Jt(e) },
                    }),
                    edgeRounding: `surface`,
                    trailing: (0, q.jsx)(o, { className: `text-secondary` }),
                    onClick: () => s(e.repository.id),
                  },
                  e.repository.id,
                ),
              )),
        (n[15] = m.repo_review_settings),
        (n[16] = s),
        (n[17] = e))
      : (e = n[17]);
    let t;
    (n[18] === e ? (t = n[19]) : ((t = (0, q.jsx)(B, { children: e })), (n[18] = e), (n[19] = t)), (y = t));
  }
  let x;
  n[20] !== h || n[21] !== g || n[22] !== l || n[23] !== r
    ? ((x =
        !h && !g && r === `github` && Number(l.at(-1)) === 125
          ? (0, q.jsx)(nt, {
              layout: `settings-row`,
              children: (0, q.jsx)(f, {
                id: `settings.codeReview.repositories.searchLimit`,
                defaultMessage: `Search by repository name to narrow these results`,
                description: `Guidance after reaching GitHub's repository search pagination limit. Users can change the search to find additional repositories.`,
              }),
            })
          : null),
      (n[20] = h),
      (n[21] = g),
      (n[22] = l),
      (n[23] = r),
      (n[24] = x))
    : (x = n[24]);
  let S;
  n[25] !== m?.next_token || n[26] !== _ || n[27] !== l.length
    ? ((S =
        l.length > 1 || m?.next_token != null
          ? (0, q.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2`,
              children: [
                (0, q.jsx)(t, {
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: l.length === 1 || _,
                  onClick: () => u(qt),
                  children: (0, q.jsx)(f, {
                    id: `settings.codeReview.repositories.previous`,
                    defaultMessage: `Previous`,
                    description: `Button to show the previous page of Code Review repositories`,
                  }),
                }),
                (0, q.jsx)(t, {
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: m?.next_token == null || _,
                  onClick: () => {
                    let e = m?.next_token;
                    e != null && u((t) => [...t, e]);
                  },
                  children: (0, q.jsx)(f, {
                    id: `settings.codeReview.repositories.next`,
                    defaultMessage: `Next`,
                    description: `Button to show the next page of Code Review repositories`,
                  }),
                }),
              ],
            })
          : null),
      (n[25] = m?.next_token),
      (n[26] = _),
      (n[27] = l.length),
      (n[28] = S))
    : (S = n[28]);
  let C;
  return (
    n[29] !== y || n[30] !== x || n[31] !== S
      ? ((C = (0, q.jsxs)(q.Fragment, { children: [y, x, S] })),
        (n[29] = y),
        (n[30] = x),
        (n[31] = S),
        (n[32] = C))
      : (C = n[32]),
    C
  );
}
function qt(e) {
  return e.slice(0, -1);
}
function Jt(e) {
  return e.global_review_preference === `never_review`
    ? `off`
    : e.global_review_preference === `review_everyone`
      ? `all`
      : e.review_preference === `team`
        ? `team`
        : `personal`;
}
var Yt, Xt, q;
function Zt() {
  return (Zt = e(() => {
    ((Yt = H()),
      y(),
      (Xt = me()),
      z(),
      ce(),
      S(),
      Xe(),
      pt(),
      ye(),
      tt(),
      R(),
      m(),
      Ke(),
      Et(),
      Ft(),
      Ht(),
      (q = U()));
  }))();
}
function Qt() {
  let e = (0, $t.c)(28),
    t = p(c),
    { accountId: n } = at(),
    { data: r } = we(),
    i;
  e[0] !== n || e[1] !== r?.accounts
    ? ((i = r?.accounts?.find((e) => e.id === n)), (e[0] = n), (e[1] = r?.accounts), (e[2] = i))
    : (i = e[2]);
  let a = i,
    o = a != null,
    s;
  e[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = new Set()), (e[3] = s)) : (s = e[3]);
  let l = (0, en.useRef)(s),
    u = lt(`3012059064`),
    d,
    m;
  e[4] === u
    ? ((d = e[5]), (m = e[6]))
    : ((d = Date.parse(u.get(`billing_starts_at`, ``))),
      (m = u.get(`show_notice`, !1) && Number.isFinite(d)),
      (e[4] = u),
      (e[5] = d),
      (e[6] = m));
  let h = m,
    g;
  e[7] !== a || e[8] !== d || e[9] !== t
    ? ((g = () => {
        je(t, Pe, {
          billingStartsAtUtcDate: new Date(d).toISOString(),
          workspaceRole: a?.structure === `workspace` ? a.account_user_role : void 0,
        });
      }),
      (e[7] = a),
      (e[8] = d),
      (e[9] = t),
      (e[10] = g))
    : (g = e[10]);
  let _ = (0, en.useEffectEvent)(g),
    v;
  e[11] !== n || e[12] !== o || e[13] !== d || e[14] !== _ || e[15] !== h
    ? ((v = () => {
        if (!h || !n || !o) return;
        let e = `${n}:${d}`;
        l.current.has(e) || (_(), l.current.add(e));
      }),
      (e[11] = n),
      (e[12] = o),
      (e[13] = d),
      (e[14] = _),
      (e[15] = h),
      (e[16] = v))
    : (v = e[16]);
  let y;
  if (
    (e[17] !== n || e[18] !== o || e[19] !== d || e[20] !== h
      ? ((y = [n, o, d, h]), (e[17] = n), (e[18] = o), (e[19] = d), (e[20] = h), (e[21] = y))
      : (y = e[21]),
    (0, en.useEffect)(v, y),
    !h)
  )
    return null;
  let b;
  e[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, tn.jsx)(f, {
        id: `settings.codeReview.security.billingNotice.title`,
        defaultMessage: `Security Review billing is changing`,
        description: `Title of a notice to existing Security Review customers before their free preview ends`,
      })),
      (e[22] = b))
    : (b = e[22]);
  let S;
  e[23] === d
    ? (S = e[24])
    : ((S = (0, tn.jsx)(f, {
        id: `settings.codeReview.security.billingNotice.body`,
        defaultMessage: `Your Security Review preview continues until {billingStartsAt}. After that, Security Reviews automatically use your Codex allowance and credits according to your billing settings.`,
        description: `Billing transition notice for existing Security Review customers. The date and time are the end of their free preview. Existing billing settings still control credit use.`,
        values: {
          billingStartsAt: (0, tn.jsx)(x, {
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
      (e[24] = S));
  let C;
  e[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, tn.jsx)(ht, {
        href: `https://developers.openai.com/codex/pricing`,
        initiator: `external_link`,
        underline: `always`,
        children: (0, tn.jsx)(f, {
          id: `settings.codeReview.security.billingNotice.pricing`,
          defaultMessage: `View pricing`,
          description: `Link from the Security Review billing transition notice to Codex pricing`,
        }),
      })),
      (e[25] = C))
    : (C = e[25]);
  let w;
  return (
    e[26] === S
      ? (w = e[27])
      : ((w = (0, tn.jsx)(E, {
          variant: `settings`,
          layout: `vertical`,
          title: b,
          content: S,
          customCtas: C,
        })),
        (e[26] = S),
        (e[27] = w)),
    w
  );
}
var $t, en, tn;
function nn() {
  return (nn = e(() => {
    (($t = H()), _e(), y(), (en = me()), z(), qe(), be(), d(), mt(), Le(), de(), We(), (tn = U()));
  }))();
}
function rn(e) {
  let t = (0, on.c)(10),
    { repository: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = an(n)), (t[0] = n), (t[1] = r));
  let i = r,
    a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, J.jsx)(W.Header, {
        title: (0, J.jsx)(f, {
          id: `settings.codeReview.repository.instructions.title`,
          defaultMessage: `Review instructions`,
          description: `Heading for the repository file that provides instructions for code review.`,
        }),
      })),
      (t[2] = a))
    : (a = t[2]);
  let o, s, c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, J.jsx)(pe, {})),
      (s = (0, J.jsx)(f, {
        id: `settings.codeReview.repository.instructions.fileName`,
        defaultMessage: `AGENTS.md`,
        description: `Name of the repository instruction file. Keep the exact filename AGENTS.md; do not translate it.`,
      })),
      (c = (0, J.jsx)(f, {
        id: `settings.codeReview.repository.instructions.description`,
        defaultMessage: `Add review guidelines to AGENTS.md in this repository`,
        description: `Explanation that users can customize code reviews by adding guidelines to the repository's AGENTS.md file. AGENTS.md is a filename and must not be translated.`,
      })),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c))
    : ((o = t[3]), (s = t[4]), (c = t[5]));
  let l;
  t[6] === i
    ? (l = t[7])
    : ((l =
        i == null
          ? null
          : (0, J.jsx)(ht, {
              href: i,
              initiator: `external_link`,
              children: (0, J.jsx)(f, {
                id: `settings.codeReview.repository.instructions.open`,
                defaultMessage: `Open file`,
                description: `Link to the repository's AGENTS.md file on its default branch in the Git provider.`,
              }),
            })),
      (t[6] = i),
      (t[7] = l));
  let u;
  return (
    t[8] === l
      ? (u = t[9])
      : ((u = (0, J.jsxs)(W, {
          children: [
            a,
            (0, J.jsx)(W.Content, {
              children: (0, J.jsx)(B, {
                children: (0, J.jsx)(V, { icon: o, label: s, description: c, control: l }),
              }),
            }),
          ],
        })),
        (t[8] = l),
        (t[9] = u)),
    u
  );
}
function an(e) {
  let t = URL.parse(e.clone_url);
  if (t == null || ![`https:`, `http:`].includes(t.protocol) || !e.default_branch) return null;
  let n = new URL(t.origin),
    r = e.id.startsWith(`gitlab-`) ? `-/blob` : `blob`;
  return (
    (n.pathname = `${t.pathname.replace(/\.git$/, ``)}/${r}/${encodeURIComponent(e.default_branch)}/AGENTS.md`),
    n.href
  );
}
var on, J;
function sn() {
  return (sn = e(() => {
    ((on = H()), z(), mt(), S(), ye(), R(), m(), (J = U()));
  }))();
}
function cn(e) {
  let n = (0, _n.c)(82),
    { repository: r, preferences: i, disabled: a, onUpdate: o } = e,
    s = rt(`579168209`),
    c = rt(`1394080568`),
    [l, u] = (0, vn.useState)(!1),
    d = i.trigger_policy ?? `code_review`,
    p = i.threat_model_source ?? `repository_file`,
    m = i.severity_threshold ?? `high`,
    h = i.blocking_severity_threshold ?? `critical`,
    g = yn.indexOf(m) >= yn.indexOf(h),
    _ = !a && !!r.permissions?.admin,
    v;
  n[0] !== c || n[1] !== r
    ? ((v = c && !r.id.startsWith(`gitlab-`)), (n[0] = c), (n[1] = r), (n[2] = v))
    : (v = n[2]);
  let y = v,
    b;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Y.jsx)(f, {
        id: `settings.codeReview.repository.securityTitle`,
        defaultMessage: `Review security vulnerabilities`,
        description: `Heading for a repository's security review settings.`,
      })),
      (n[3] = b))
    : (b = n[3]);
  let x;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Y.jsx)(f, {
        id: `settings.codeReview.repository.securityTrigger`,
        defaultMessage: `Trigger`,
        description: `Label for when automatic repository security reviews run.`,
      })),
      (n[4] = x))
    : (x = n[4]);
  let S;
  n[5] !== s || n[6] !== d
    ? ((S =
        s || d === `smart_detect`
          ? [`pr_open`, `every_push`, `smart_detect`, `code_review`]
          : [`pr_open`, `every_push`, `code_review`]),
      (n[5] = s),
      (n[6] = d),
      (n[7] = S))
    : (S = n[7]);
  let C;
  n[8] === o ? (C = n[9]) : ((C = (e) => o({ trigger_policy: e })), (n[8] = o), (n[9] = C));
  let w;
  n[10] !== a || n[11] !== S || n[12] !== C || n[13] !== d
    ? ((w = (0, Y.jsx)(G, { label: x, value: d, options: S, disabled: a, renderLabel: pn, onChange: C })),
      (n[10] = a),
      (n[11] = S),
      (n[12] = C),
      (n[13] = d),
      (n[14] = w))
    : (w = n[14]);
  let T;
  n[15] !== a ||
  n[16] !== o ||
  n[17] !== i.codex_security_scan_configuration_id ||
  n[18] !== i.threat_model_source ||
  n[19] !== p
    ? ((T =
        i.codex_security_scan_configuration_id || i.threat_model_source === `codex_security`
          ? (0, Y.jsx)(G, {
              label: (0, Y.jsx)(f, {
                id: `settings.codeReview.repository.threatSource`,
                defaultMessage: `Threat model source`,
                description: `Choose whether repository security reviews use the connected Codex Security threat model or a repository file.`,
              }),
              value: p,
              options: i.codex_security_scan_configuration_id
                ? [`codex_security`, `repository_file`]
                : [`repository_file`],
              disabled: a,
              onChange: (e) => o({ threat_model_source: e }),
              renderLabel: fn,
            })
          : null),
      (n[15] = a),
      (n[16] = o),
      (n[17] = i.codex_security_scan_configuration_id),
      (n[18] = i.threat_model_source),
      (n[19] = p),
      (n[20] = T))
    : (T = n[20]);
  let D;
  n[21] !== a || n[22] !== o || n[23] !== i.threat_model_file_path || n[24] !== p
    ? ((D =
        p === `repository_file`
          ? (0, Y.jsx)(V, {
              variant: `stacked`,
              label: (0, Y.jsx)(f, {
                id: `settings.codeReview.repository.threatPath`,
                defaultMessage: `Path to threat model file in this repository`,
                description: `Label for the repository-relative path to a security threat model file.`,
              }),
              description: (0, Y.jsx)(f, {
                id: `settings.codeReview.repository.threatPath.description`,
                defaultMessage: `File path is relative to the repository root. If not specified, Codex generates a threat model for every review.`,
                description: `Help text for a security review threat model path. Leaving the path empty uses a newly generated threat model for each review.`,
              }),
              control: (e) =>
                (0, Y.jsx)(
                  gn,
                  {
                    ...e,
                    kind: `threat-model`,
                    savedPath: i.threat_model_file_path ?? ``,
                    disabled: a,
                    onSave: (e) =>
                      o({ threat_model_source: `repository_file`, threat_model_file_path: e || null }),
                  },
                  i.threat_model_file_path ?? ``,
                ),
            })
          : null),
      (n[21] = a),
      (n[22] = o),
      (n[23] = i.threat_model_file_path),
      (n[24] = p),
      (n[25] = D))
    : (D = n[25]);
  let O, k;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Y.jsx)(f, {
        id: `settings.codeReview.repository.autoSeverity`,
        defaultMessage: `Minimum auto review reporting severity`,
        description: `Minimum vulnerability severity reported by automatic repository security reviews.`,
      })),
      (O = (0, Y.jsx)(f, {
        id: `settings.codeReview.repository.autoSeverity.description`,
        defaultMessage: `Choose the lowest severity Codex should report for automated reviews`,
        description: `Help text for automatic security review severity.`,
      })),
      (n[26] = O),
      (n[27] = k))
    : ((O = n[26]), (k = n[27]));
  let A;
  n[28] !== h || n[29] !== i.merge_gate_enabled
    ? ((A = i.merge_gate_enabled ? yn.slice(yn.indexOf(h)) : yn),
      (n[28] = h),
      (n[29] = i.merge_gate_enabled),
      (n[30] = A))
    : (A = n[30]);
  let j;
  n[31] === o ? (j = n[32]) : ((j = (e) => o({ severity_threshold: e })), (n[31] = o), (n[32] = j));
  let M;
  n[33] !== a || n[34] !== m || n[35] !== A || n[36] !== j
    ? ((M = (0, Y.jsx)(G, {
        label: k,
        description: O,
        value: m,
        options: A,
        disabled: a,
        renderLabel: dn,
        onChange: j,
      })),
      (n[33] = a),
      (n[34] = m),
      (n[35] = A),
      (n[36] = j),
      (n[37] = M))
    : (M = n[37]);
  let N, P;
  n[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Y.jsx)(f, {
        id: `settings.codeReview.repository.manualSeverity`,
        defaultMessage: `Minimum manual review reporting severity`,
        description: `Minimum vulnerability severity reported by manually requested repository security reviews.`,
      })),
      (P = (0, Y.jsx)(f, {
        id: `settings.codeReview.repository.manualSeverity.description`,
        defaultMessage: `Choose the lowest severity Codex should report for reviews requested with @codex`,
        description: `Help text for manually requested security review severity. Preserve the @codex mention.`,
      })),
      (n[38] = N),
      (n[39] = P))
    : ((N = n[38]), (P = n[39]));
  let F = i.manual_severity_threshold ?? `medium`,
    I;
  n[40] === o ? (I = n[41]) : ((I = (e) => o({ manual_severity_threshold: e })), (n[40] = o), (n[41] = I));
  let L;
  n[42] !== a || n[43] !== F || n[44] !== I
    ? ((L = (0, Y.jsx)(G, {
        label: N,
        description: P,
        value: F,
        options: yn,
        disabled: a,
        renderLabel: un,
        onChange: I,
      })),
      (n[42] = a),
      (n[43] = F),
      (n[44] = I),
      (n[45] = L))
    : (L = n[45]);
  let ee;
  n[46] !== h ||
  n[47] !== _ ||
  n[48] !== g ||
  n[49] !== o ||
  n[50] !== i.merge_gate_enabled ||
  n[51] !== m ||
  n[52] !== y
    ? ((ee = y
        ? (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsx)(E, {
                variant: `settings`,
                content: (0, Y.jsx)(f, {
                  id: `settings.codeReview.repository.mergeAdmin`,
                  defaultMessage: `Only GitHub repository admins can change merge protection and blocking severity`,
                  description: `Permission notice for security review merge protection controls.`,
                }),
              }),
              (0, Y.jsx)(V, {
                label: (0, Y.jsx)(f, {
                  id: `settings.codeReview.repository.mergeProtection`,
                  defaultMessage: `Merge protection`,
                  description: `Setting to publish a failing GitHub check when security findings exceed the repository's blocking threshold.`,
                }),
                description: g
                  ? (0, Y.jsx)(f, {
                      id: `settings.codeReview.repository.mergeProtection.description`,
                      defaultMessage: `Publish a GitHub check that fails when Security Review reports a finding at or above the blocking severity. To block merges, also require this check in GitHub.`,
                      description: `Help text explaining security review merge protection requires configuring the corresponding required check in GitHub.`,
                    })
                  : (0, Y.jsx)(f, {
                      id: `settings.codeReview.repository.mergeProtection.reportingRequired`,
                      defaultMessage: `Choose a blocking severity at least as high as the automatic reporting severity to enable merge protection`,
                      description: `Explains how to repair a blocking threshold whose findings would be excluded by the repository's automatic reporting threshold.`,
                    }),
                control: (e) =>
                  (0, Y.jsx)(ne, {
                    ...e,
                    checked: i.merge_gate_enabled ?? !1,
                    disabled: !_ || (!i.merge_gate_enabled && !g),
                    onChange: (e) => o({ merge_gate_enabled: e }),
                  }),
              }),
              (0, Y.jsx)(G, {
                label: (0, Y.jsx)(f, {
                  id: `settings.codeReview.repository.blockingSeverity`,
                  defaultMessage: `Blocking severity`,
                  description: `Minimum finding severity that fails the security review GitHub check.`,
                }),
                description: (0, Y.jsx)(f, {
                  id: `settings.codeReview.repository.blockingSeverity.description`,
                  defaultMessage: `Choose the lowest finding severity that should fail the Security Review GitHub check`,
                  description: `Help text for the security review blocking severity setting.`,
                }),
                value: h,
                options: yn.slice(0, yn.indexOf(m) + 1),
                disabled: !_,
                renderLabel: ln,
                onChange: (e) => o({ blocking_severity_threshold: e }),
              }),
            ],
          })
        : null),
      (n[46] = h),
      (n[47] = _),
      (n[48] = g),
      (n[49] = o),
      (n[50] = i.merge_gate_enabled),
      (n[51] = m),
      (n[52] = y),
      (n[53] = ee))
    : (ee = n[53]);
  let R, te;
  n[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Y.jsx)(f, {
        id: `settings.codeReview.repository.pathRules`,
        defaultMessage: `Path-based reporting severity override`,
        description: `Heading for security reporting severity overrides for repository paths.`,
      })),
      (te = (0, Y.jsx)(f, {
        id: `settings.codeReview.repository.pathRules.description`,
        defaultMessage: `Override reporting severity for specific repository paths`,
        description: `Help text for repository path-specific security severity rules.`,
      })),
      (n[54] = R),
      (n[55] = te))
    : ((R = n[54]), (te = n[55]));
  let z = a || l,
    re,
    ie;
  n[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = () => u(!0)),
      (ie = (0, Y.jsx)(f, {
        id: `settings.codeReview.repository.addPath`,
        defaultMessage: `Add path override`,
        description: `Button to add a path-specific security reporting severity rule.`,
      })),
      (n[56] = re),
      (n[57] = ie))
    : ((re = n[56]), (ie = n[57]));
  let ae;
  n[58] === z
    ? (ae = n[59])
    : ((ae = (0, Y.jsx)(V, {
        label: R,
        description: te,
        control: (0, Y.jsx)(t, {
          color: `secondary`,
          size: `toolbar`,
          disabled: z,
          onClick: re,
          children: ie,
        }),
      })),
      (n[58] = z),
      (n[59] = ae));
  let B;
  n[60] !== a || n[61] !== o || n[62] !== i.path_rules
    ? ((B = i.path_rules?.map((e, t) =>
        (0, Y.jsx)(
          mn,
          {
            rule: e,
            disabled: a,
            onUpdate: (e) => o({ path_rules: i.path_rules?.map((n, r) => (r === t ? e : n)) }),
            onRemove: () => o({ path_rules: i.path_rules?.filter((e, n) => n !== t) }),
          },
          `${t}-${e.path_prefix}`,
        ),
      )),
      (n[60] = a),
      (n[61] = o),
      (n[62] = i.path_rules),
      (n[63] = B))
    : (B = n[63]);
  let oe;
  n[64] !== l || n[65] !== a || n[66] !== o || n[67] !== i.path_rules
    ? ((oe = l
        ? (0, Y.jsx)(V, {
            variant: `stacked`,
            label: (0, Y.jsx)(f, {
              id: `settings.codeReview.repository.newPath`,
              defaultMessage: `Repository path prefix`,
              description: `Label for the path prefix of a new security review severity override.`,
            }),
            control: (e) =>
              (0, Y.jsx)(gn, {
                ...e,
                kind: `override`,
                savedPath: ``,
                disabled: a,
                onCancel: () => u(!1),
                onSave: (e) =>
                  o(
                    {
                      path_rules: [
                        ...(i.path_rules ?? []),
                        { path_prefix: e, auto_severity_threshold: null, manual_severity_threshold: null },
                      ],
                    },
                    () => u(!1),
                  ),
              }),
          })
        : null),
      (n[64] = l),
      (n[65] = a),
      (n[66] = o),
      (n[67] = i.path_rules),
      (n[68] = oe))
    : (oe = n[68]);
  let se;
  return (
    n[69] !== a ||
    n[70] !== o ||
    n[71] !== i ||
    n[72] !== M ||
    n[73] !== L ||
    n[74] !== ee ||
    n[75] !== ae ||
    n[76] !== B ||
    n[77] !== oe ||
    n[78] !== w ||
    n[79] !== T ||
    n[80] !== D
      ? ((se = (0, Y.jsxs)(kt, {
          security: !0,
          preferences: i,
          disabled: a,
          onUpdate: o,
          title: b,
          children: [w, T, D, M, L, ee, ae, B, oe],
        })),
        (n[69] = a),
        (n[70] = o),
        (n[71] = i),
        (n[72] = M),
        (n[73] = L),
        (n[74] = ee),
        (n[75] = ae),
        (n[76] = B),
        (n[77] = oe),
        (n[78] = w),
        (n[79] = T),
        (n[80] = D),
        (n[81] = se))
      : (se = n[81]),
    se
  );
}
function ln(e) {
  return (0, Y.jsx)(Mt, { value: e });
}
function un(e) {
  return (0, Y.jsx)(Mt, { value: e });
}
function dn(e) {
  return (0, Y.jsx)(Mt, { value: e });
}
function fn(e) {
  return (0, Y.jsx)(f, {
    id: `settings.codeReview.repository.threatSource.option`,
    defaultMessage: `{value, select, codex_security {Codex Security} other {Repository file}}`,
    description: `Options for a repository security review threat model: Codex Security or a file in the repository.`,
    values: { value: e },
  });
}
function pn(e) {
  return (0, Y.jsx)(jt, { value: e });
}
function mn(e) {
  let n = (0, _n.c)(17),
    { rule: r, disabled: i, onUpdate: a, onRemove: o } = e,
    s = w(),
    c;
  n[0] === r.path_prefix
    ? (c = n[1])
    : ((c = (0, Y.jsx)(`span`, { className: `font-mono select-text`, children: r.path_prefix })),
      (n[0] = r.path_prefix),
      (n[1] = c));
  let l;
  n[2] !== i || n[3] !== s || n[4] !== a || n[5] !== r
    ? ((l = [`auto_severity_threshold`, `manual_severity_threshold`].map((e) =>
        (0, Y.jsxs)(
          vn.Fragment,
          {
            children: [
              (0, Y.jsx)(`span`, {
                className: `text-sm text-secondary`,
                children: (0, Y.jsx)(f, {
                  id: `settings.codeReview.repository.pathRule.label`,
                  defaultMessage: `{field, select, auto_severity_threshold {Automatic} other {Manual}}`,
                  description: `Label for the automatic or manual security review severity of a repository path override.`,
                  values: { field: e },
                }),
              }),
              (0, Y.jsx)(Dt, {
                "aria-label": s.formatMessage(
                  {
                    id: `settings.codeReview.repository.pathRule.severity`,
                    defaultMessage: `{field, select, auto_severity_threshold {Automatic} other {Manual}} review severity for {path}`,
                    description: `Accessible label for a path override's automatic or manual security reporting severity. Path is the configured repository path.`,
                  },
                  { field: e, path: r.path_prefix },
                ),
                value: r[e] ?? `inherit`,
                options: bn,
                disabled: i,
                renderLabel: hn,
                onChange: (t) => a({ ...r, [e]: t === `inherit` ? null : t }),
              }),
            ],
          },
          e,
        ),
      )),
      (n[2] = i),
      (n[3] = s),
      (n[4] = a),
      (n[5] = r),
      (n[6] = l))
    : (l = n[6]);
  let u;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Y.jsx)(f, {
        id: `settings.codeReview.repository.removePath`,
        defaultMessage: `Remove`,
        description: `Remove this repository path's security reporting severity override.`,
      })),
      (n[7] = u))
    : (u = n[7]);
  let d;
  n[8] !== i || n[9] !== o
    ? ((d = (0, Y.jsx)(t, { color: `ghost`, size: `toolbar`, disabled: i, onClick: o, children: u })),
      (n[8] = i),
      (n[9] = o),
      (n[10] = d))
    : (d = n[10]);
  let p;
  n[11] !== l || n[12] !== d
    ? ((p = (0, Y.jsxs)(`div`, { className: `flex flex-wrap items-center gap-2`, children: [l, d] })),
      (n[11] = l),
      (n[12] = d),
      (n[13] = p))
    : (p = n[13]);
  let m;
  return (
    n[14] !== c || n[15] !== p
      ? ((m = (0, Y.jsx)(V, { label: c, variant: `stacked`, control: p })),
        (n[14] = c),
        (n[15] = p),
        (n[16] = m))
      : (m = n[16]),
    m
  );
}
function hn(e) {
  return (0, Y.jsx)(Mt, { value: e });
}
function gn(e) {
  let n = (0, _n.c)(35),
    r,
    i,
    a,
    o,
    s,
    c;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (a = n[3]), (o = n[4]), (s = n[5]), (c = n[6]))
    : (({ kind: a, savedPath: c, disabled: i, onSave: s, onCancel: o, ...r } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = i),
      (n[3] = a),
      (n[4] = o),
      (n[5] = s),
      (n[6] = c));
  let l = w(),
    [u, d] = (0, vn.useState)(c),
    p = a === `override`,
    m;
  n[7] === u ? (m = n[8]) : ((m = u.trim()), (n[7] = u), (n[8] = m));
  let h = m !== c,
    g;
  n[9] !== h || n[10] !== i || n[11] !== s || n[12] !== u
    ? ((g = (e) => {
        (e.preventDefault(), !i && h && s(u.trim()));
      }),
      (n[9] = h),
      (n[10] = i),
      (n[11] = s),
      (n[12] = u),
      (n[13] = g))
    : (g = n[13]);
  let _;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (e) => d(e.currentTarget.value)), (n[14] = _))
    : (_ = n[14]);
  let v;
  n[15] !== p || n[16] !== l
    ? ((v = p
        ? l.formatMessage({
            id: `settings.codeReview.repository.newPath.placeholder`,
            defaultMessage: `src/`,
            description: `Example directory prefix for a repository security review override; preserve path syntax.`,
          })
        : l.formatMessage({
            id: `settings.codeReview.repository.threatPath.placeholder`,
            defaultMessage: `docs/threat-model.md`,
            description: `Example repository-relative Markdown path for a threat model file; preserve the file path syntax.`,
          })),
      (n[15] = p),
      (n[16] = l),
      (n[17] = v))
    : (v = n[17]);
  let y;
  n[18] !== p || n[19] !== r || n[20] !== i || n[21] !== a || n[22] !== u || n[23] !== v
    ? ((y = (0, Y.jsx)(Fe, {
        ...r,
        name: a,
        value: u,
        onChange: _,
        disabled: i,
        autoFocus: p,
        placeholder: v,
      })),
      (n[18] = p),
      (n[19] = r),
      (n[20] = i),
      (n[21] = a),
      (n[22] = u),
      (n[23] = v),
      (n[24] = y))
    : (y = n[24]);
  let b;
  n[25] !== p || n[26] !== h || n[27] !== i || n[28] !== o || n[29] !== c
    ? ((b =
        p || h
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(t, {
                  type: `submit`,
                  color: `primary`,
                  size: `toolbar`,
                  disabled: i || !h,
                  children: (0, Y.jsx)(f, {
                    id: `settings.codeReview.repository.savePathEdit`,
                    defaultMessage: `{adding, select, true {Add} other {Save}}`,
                    description: `Submit a new path override or save an edited threat model file path.`,
                    values: { adding: String(p) },
                  }),
                }),
                (0, Y.jsx)(t, {
                  color: `ghost`,
                  size: `toolbar`,
                  disabled: i,
                  onClick: () => {
                    (d(c), o?.());
                  },
                  children: (0, Y.jsx)(f, {
                    id: `settings.codeReview.repository.cancelPathEdit`,
                    defaultMessage: `Cancel`,
                    description: `Discard an unsaved repository path override or threat model file path edit.`,
                  }),
                }),
              ],
            })
          : null),
      (n[25] = p),
      (n[26] = h),
      (n[27] = i),
      (n[28] = o),
      (n[29] = c),
      (n[30] = b))
    : (b = n[30]);
  let x;
  return (
    n[31] !== g || n[32] !== y || n[33] !== b
      ? ((x = (0, Y.jsxs)(`form`, { className: `flex items-center gap-2`, onSubmit: g, children: [y, b] })),
        (n[31] = g),
        (n[32] = y),
        (n[33] = b),
        (n[34] = x))
      : (x = n[34]),
    x
  );
}
var _n, vn, Y, yn, bn;
function xn() {
  return (xn = e(() => {
    ((_n = H()),
      (vn = me()),
      z(),
      d(),
      ce(),
      ve(),
      g(),
      R(),
      We(),
      Ft(),
      (Y = U()),
      (yn = [`critical`, `high`, `medium`, `low`]),
      (bn = [`inherit`, ...yn]));
  }))();
}
function Sn(e) {
  let n = (0, Dn.c)(30),
    { repositoryId: r, onBack: i } = e,
    { data: a, isError: o, isFetching: s, refetch: c } = he(Bt, r),
    { isPending: l, error: u, mutate: d } = he(Vt, r),
    p = !!(a?.repository.permissions?.admin || a?.repository.permissions?.push),
    m = l || s || o || !p,
    g = u instanceof L ? String(u.status) : `save`;
  (g === `409` && a?.funding_authorization_required && (g = `funding`), o && (g = `load`));
  let _;
  n[0] !== d || n[1] !== a || n[2] !== r
    ? ((_ = (e, t) => {
        a != null &&
          d(
            {
              repository: r,
              review_preference: a.review_preference,
              funding_generation: a.funding_generation,
              ...e,
            },
            { onSuccess: t },
          );
      }),
      (n[0] = d),
      (n[1] = a),
      (n[2] = r),
      (n[3] = _))
    : (_ = n[3]);
  let v = _,
    y = a?.repository.repository_full_name,
    b,
    x;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(h, {})),
      (x = (0, X.jsx)(f, {
        id: `settings.codeReview.repository.back`,
        defaultMessage: `Code review`,
        description: `Back button from repository review settings to the code review settings overview.`,
      })),
      (n[4] = b),
      (n[5] = x))
    : ((b = n[4]), (x = n[5]));
  let S;
  n[6] === i
    ? (S = n[7])
    : ((S = (0, X.jsxs)(t, { color: `ghost`, size: `toolbar`, onClick: i, children: [b, x] })),
      (n[6] = i),
      (n[7] = S));
  let C, w;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, X.jsx)(f, {
        id: `settings.codeReview.repository.subtitle`,
        defaultMessage: `Manage how Codex reviews this repository`,
        description: `Subtitle of the repository code and security review settings page.`,
      })),
      (w = (0, X.jsx)(Qt, {})),
      (n[8] = C),
      (n[9] = w))
    : ((C = n[8]), (w = n[9]));
  let T;
  n[10] !== u || n[11] !== g || n[12] !== o || n[13] !== c
    ? ((T =
        o || u != null
          ? (0, X.jsx)(E, {
              type: `error`,
              variant: `settings`,
              role: `alert`,
              content: (0, X.jsx)(f, {
                id: `settings.codeReview.repository.error`,
                defaultMessage: `{kind, select, load {Unable to load repository settings} funding {Workspace funding was removed. Reviews for all PRs require it to be reconnected.} 403 {You do not have permission to change these repository settings} 409 {Repository settings changed. Review the current settings and try again.} other {Unable to save repository settings. Try again.}}`,
                description: `Repository settings error. Funding requires explicit reconnection; a conflict requires reviewing refreshed settings. PR means pull request.`,
                values: { kind: g },
              }),
              primaryCtaText:
                g === `funding`
                  ? void 0
                  : (0, X.jsx)(f, {
                      id: `settings.codeReview.repository.retryAction`,
                      defaultMessage: `{kind, select, load {Retry} other {Refresh}}`,
                      description: `Reload repository settings after a failed read or save. This does not retry a save or reconnect funding.`,
                      values: { kind: g },
                    }),
              onPrimaryCtaClick: () => void c(),
            })
          : null),
      (n[10] = u),
      (n[11] = g),
      (n[12] = o),
      (n[13] = c),
      (n[14] = T))
    : (T = n[14]);
  let D;
  n[15] !== o || n[16] !== a
    ? ((D =
        a == null && !o
          ? (0, X.jsx)(it, {
              children: (0, X.jsx)(f, {
                id: `settings.codeReview.repository.loading`,
                defaultMessage: `Loading repository settings…`,
                description: `Status while fetching repository review settings.`,
              }),
            })
          : null),
      (n[15] = o),
      (n[16] = a),
      (n[17] = D))
    : (D = n[17]);
  let O;
  n[18] !== p || n[19] !== m || n[20] !== a || n[21] !== v
    ? ((O =
        a == null
          ? null
          : (0, X.jsxs)(X.Fragment, {
              children: [
                p
                  ? null
                  : (0, X.jsx)(E, {
                      variant: `settings`,
                      content: (0, X.jsx)(f, {
                        id: `settings.codeReview.repository.permissions`,
                        defaultMessage: `You need repository admin or push access to change these settings`,
                        description: `Read-only notice on repository review settings for users without write access.`,
                      }),
                    }),
                a.funding_authorization_required
                  ? (0, X.jsx)(Cn, { disabled: m, onAllow: () => v({ authorize_funding: !0 }) })
                  : null,
                (0, X.jsx)(wn, { repository: a, disabled: m, onUpdate: v }),
                a.security_review == null
                  ? null
                  : (0, X.jsx)(cn, {
                      repository: a.repository,
                      preferences: a.security_review,
                      disabled: m,
                      onUpdate: (e, t) => v({ security_review: e }, t),
                    }),
                (0, X.jsx)(rn, { repository: a.repository }),
              ],
            })),
      (n[18] = p),
      (n[19] = m),
      (n[20] = a),
      (n[21] = v),
      (n[22] = O))
    : (O = n[22]);
  let k;
  return (
    n[23] !== l || n[24] !== O || n[25] !== y || n[26] !== S || n[27] !== T || n[28] !== D
      ? ((k = (0, X.jsxs)(Ye, {
          className: `select-none`,
          "aria-busy": l,
          title: y,
          backSlot: S,
          subtitle: C,
          children: [w, T, D, O],
        })),
        (n[23] = l),
        (n[24] = O),
        (n[25] = y),
        (n[26] = S),
        (n[27] = T),
        (n[28] = D),
        (n[29] = k))
      : (k = n[29]),
    k
  );
}
function Cn(e) {
  let t = (0, Dn.c)(8),
    { disabled: n, onAllow: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = { preview: !1 }), (t[0] = i)) : (i = t[0]);
  let { data: a } = Ce(void 0, i),
    o;
  t[1] === a
    ? (o = t[2])
    : ((o =
        a == null
          ? (0, X.jsx)(f, {
              id: `settings.codeReview.repository.funding`,
              defaultMessage: `Workspace funding was removed from this repository. Reconnect funding to run automatic reviews.`,
              description: `Notice when repository review funding was revoked and must be explicitly reauthorized before reviews run.`,
            })
          : (0, X.jsx)(f, {
              id: `settings.codeReview.repository.allowFunding`,
              defaultMessage: `Allow {account} to fund automatic reviews for this repository? Review preferences will stay the same.`,
              description: `Explicit consent to reconnect repository funding to the selected account. The account value is the current account name.`,
              values: { account: a.name },
            })),
      (t[1] = a),
      (t[2] = o));
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(f, {
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
      ? ((l = (0, X.jsx)(E, {
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
function wn(e) {
  let t = (0, Dn.c)(23),
    { repository: n, disabled: r, onUpdate: i } = e,
    a = n.exhaustive_code_review == null ? `personal` : `off`;
  n.exhaustive_code_review === !0 && (a = `on`);
  let o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(f, {
        id: `settings.codeReview.repository.codeTitle`,
        defaultMessage: `Review code`,
        description: `Heading for repository automatic code review settings.`,
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(f, {
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
    ? ((d = (0, X.jsx)(G, { label: s, value: c, options: l, renderLabel: En, disabled: r, onChange: u })),
      (t[5] = r),
      (t[6] = c),
      (t[7] = u),
      (t[8] = d))
    : (d = t[8]);
  let p;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, X.jsx)(f, {
        id: `settings.codeReview.repository.exhaustive`,
        defaultMessage: `Exhaustive review`,
        description: `Label for repository exhaustive code review, which continues searching for new findings.`,
      })),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = [`personal`, `on`, `off`]), (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] === i
    ? (h = t[12])
    : ((h = (e) => i({ exhaustive_code_review: e === `personal` ? null : e === `on` })),
      (t[11] = i),
      (t[12] = h));
  let g;
  t[13] !== r || t[14] !== a || t[15] !== h
    ? ((g = (0, X.jsx)(G, { label: p, value: a, options: m, disabled: r, onChange: h, renderLabel: Tn })),
      (t[13] = r),
      (t[14] = a),
      (t[15] = h),
      (t[16] = g))
    : (g = t[16]);
  let _;
  return (
    t[17] !== r || t[18] !== i || t[19] !== n || t[20] !== g || t[21] !== d
      ? ((_ = (0, X.jsxs)(kt, { preferences: n, disabled: r, onUpdate: i, title: o, children: [d, g] })),
        (t[17] = r),
        (t[18] = i),
        (t[19] = n),
        (t[20] = g),
        (t[21] = d),
        (t[22] = _))
      : (_ = t[22]),
    _
  );
}
function Tn(e) {
  return (0, X.jsx)(f, {
    id: `settings.codeReview.repository.exhaustive.option`,
    defaultMessage: `{value, select, personal {Follow personal preferences} on {On} other {Off}}`,
    description: `Choices for exhaustive repository code reviews: inherit the contributor's preference, enable, or disable.`,
    values: { value: e },
  });
}
function En(e) {
  return (0, X.jsx)(jt, { value: e });
}
var Dn, X;
function On() {
  return (On = e(() => {
    ((Dn = H()), y(), z(), be(), d(), ce(), S(), Ve(), tt(), F(), nn(), Ft(), sn(), Ht(), xn(), (X = U()));
  }))();
}
function kn(e) {
  let t = (0, Fn.c)(47),
    { disabled: n, preferences: r, allowCreditsForSecurityReviews: i, onUpdate: a } = e,
    o = rt(`579168209`),
    { data: s } = wt(),
    { canManageCreditSettings: c } = vt(),
    l = r.trigger_policy ?? `code_review`,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Z.jsx)(W.Header, {
        title: (0, Z.jsx)(f, {
          id: `settings.codeReview.security.title`,
          defaultMessage: `Personal security review preferences`,
          description: `Title for personal security review preferences`,
        }),
      })),
      (t[0] = u))
    : (u = t[0]);
  let d, p;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(f, {
        id: `settings.codeReview.security.autoReview.label`,
        defaultMessage: `Automatic security review`,
        description: `Label for automatic security review preference`,
      })),
      (p = (0, Z.jsx)(f, {
        id: `settings.codeReview.security.autoReview.description`,
        defaultMessage: `If a repository’s review setting differs from your personal preference, the repository setting takes priority`,
        description: `Description for automatic security review preference`,
      })),
      (t[1] = d),
      (t[2] = p))
    : ((d = t[1]), (p = t[2]));
  let m;
  t[3] !== n || t[4] !== a || t[5] !== r.preference
    ? ((m = (0, Z.jsx)(V, {
        label: d,
        description: p,
        control: (e) =>
          (0, Z.jsx)(ne, {
            ...e,
            checked: r.preference === `always`,
            disabled: n,
            onChange: (e) => {
              a({ security_review: { preference: e ? `always` : `repo_default` } });
            },
          }),
      })),
      (t[3] = n),
      (t[4] = a),
      (t[5] = r.preference),
      (t[6] = m))
    : (m = t[6]);
  let h, g;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(f, {
        id: `settings.codeReview.security.trigger.label`,
        defaultMessage: `Security review trigger`,
        description: `Label for security review trigger preference`,
      })),
      (g = (0, Z.jsx)(f, {
        id: `settings.codeReview.security.trigger.description`,
        defaultMessage: `Choose when Codex should review your pull requests for security`,
        description: `Description for security review trigger preference`,
      })),
      (t[7] = h),
      (t[8] = g))
    : ((h = t[7]), (g = t[8]));
  let _;
  t[9] !== o || t[10] !== l
    ? ((_ =
        o || l === `smart_detect`
          ? [`pr_open`, `every_push`, `smart_detect`, `code_review`]
          : [`pr_open`, `every_push`, `code_review`]),
      (t[9] = o),
      (t[10] = l),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] === a
    ? (v = t[13])
    : ((v = (e) => a({ security_review: { trigger_policy: e } })), (t[12] = a), (t[13] = v));
  let y;
  t[14] !== n || t[15] !== _ || t[16] !== v || t[17] !== l
    ? ((y = (0, Z.jsx)(G, {
        label: h,
        description: g,
        value: l,
        options: _,
        disabled: n,
        onChange: v,
        renderLabel: Pn,
        renderDescription: Nn,
      })),
      (t[14] = n),
      (t[15] = _),
      (t[16] = v),
      (t[17] = l),
      (t[18] = y))
    : (y = t[18]);
  let b, x;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Z.jsx)(f, {
        id: `settings.codeReview.security.autoSeverity.label`,
        defaultMessage: `Minimum automatic review reporting severity`,
        description: `Label for the minimum automatic security review severity`,
      })),
      (x = (0, Z.jsx)(f, {
        id: `settings.codeReview.security.autoSeverity.description`,
        defaultMessage: `Choose the lowest severity reported for automated reviews`,
        description: `Description for the minimum automatic security review severity`,
      })),
      (t[19] = b),
      (t[20] = x))
    : ((b = t[19]), (x = t[20]));
  let S = r.severity_threshold ?? `high`,
    C;
  t[21] === a
    ? (C = t[22])
    : ((C = (e) => a({ security_review: { severity_threshold: e } })), (t[21] = a), (t[22] = C));
  let w;
  t[23] !== n || t[24] !== S || t[25] !== C
    ? ((w = (0, Z.jsx)(G, {
        label: b,
        description: x,
        disabled: n,
        value: S,
        options: In,
        onChange: C,
        renderLabel: Mn,
      })),
      (t[23] = n),
      (t[24] = S),
      (t[25] = C),
      (t[26] = w))
    : (w = t[26]);
  let T, E;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Z.jsx)(f, {
        id: `settings.codeReview.security.manualSeverity.label`,
        defaultMessage: `Minimum manual review reporting severity`,
        description: `Label for the minimum manual security review severity`,
      })),
      (E = (0, Z.jsx)(f, {
        id: `settings.codeReview.security.manualSeverity.description`,
        defaultMessage: `Choose the lowest severity reported for reviews requested with @codex`,
        description: `Description for the minimum manual security review severity`,
      })),
      (t[27] = T),
      (t[28] = E))
    : ((T = t[27]), (E = t[28]));
  let D = r.manual_severity_threshold ?? `medium`,
    O;
  t[29] === a
    ? (O = t[30])
    : ((O = (e) => a({ security_review: { manual_severity_threshold: e } })), (t[29] = a), (t[30] = O));
  let k;
  t[31] !== n || t[32] !== D || t[33] !== O
    ? ((k = (0, Z.jsx)(G, {
        label: T,
        description: E,
        disabled: n,
        value: D,
        options: In,
        onChange: O,
        renderLabel: jn,
      })),
      (t[31] = n),
      (t[32] = D),
      (t[33] = O),
      (t[34] = k))
    : (k = t[34]);
  let A;
  t[35] !== i || t[36] !== c || t[37] !== n || t[38] !== a || t[39] !== s?.security_review_credits_available
    ? ((A =
        c && (s?.security_review_credits_available === !0 || i === !0) && i != null
          ? (0, Z.jsx)(V, {
              label: (0, Z.jsx)(f, {
                id: `settings.codeReview.security.credits.label`,
                defaultMessage: `Use credits for security reviews`,
                description: `Independent opt-in allowing personal credits to fund security reviews after the shared Codex allowance is exhausted`,
              }),
              description: (0, Z.jsx)(f, {
                id: `settings.codeReview.security.credits.description`,
                defaultMessage: `Security reviews use this account's shared Codex allowance. Turn this on to use credits after that allowance runs out. This also applies to 'Review Everyone' security reviews you've enabled. <link>View usage</link>.`,
                description: `Security review credit consent also covers the user's Review Everyone automation. The link opens this account's usage settings.`,
                values: { link: An },
              }),
              control: (e) =>
                (0, Z.jsx)(ne, {
                  ...e,
                  checked: i,
                  disabled: n,
                  onChange: (e) => a({ allow_credits_for_security_reviews: e }),
                }),
            })
          : null),
      (t[35] = i),
      (t[36] = c),
      (t[37] = n),
      (t[38] = a),
      (t[39] = s?.security_review_credits_available),
      (t[40] = A))
    : (A = t[40]);
  let j;
  return (
    t[41] !== w || t[42] !== k || t[43] !== A || t[44] !== m || t[45] !== y
      ? ((j = (0, Z.jsxs)(W, {
          children: [u, (0, Z.jsx)(W.Content, { children: (0, Z.jsxs)(B, { children: [m, y, w, k, A] }) })],
        })),
        (t[41] = w),
        (t[42] = k),
        (t[43] = A),
        (t[44] = m),
        (t[45] = y),
        (t[46] = j))
      : (j = t[46]),
    j
  );
}
function An(e) {
  return (0, Z.jsx)(te, {
    className: `cursor-interaction text-info hover:underline`,
    to: `/settings/usage`,
    children: e,
  });
}
function jn(e) {
  return (0, Z.jsx)(Mt, { value: e });
}
function Mn(e) {
  return (0, Z.jsx)(Mt, { value: e });
}
function Nn(e) {
  return (0, Z.jsx)(f, {
    id: `settings.codeReview.security.trigger.option.description`,
    defaultMessage: `{policy, select, pr_open {Review when a pull request is opened.} every_push {Review again whenever new commits are pushed after the initial review.} smart_detect {Codex decides whether to review again based on changes since the last completed security review. Experimental and may change.} code_review {Review whenever Codex runs a code review.} other {}}`,
    description: `Explanation for each security review trigger option`,
    values: { policy: e },
  });
}
function Pn(e) {
  return (0, Z.jsx)(jt, { value: e });
}
var Fn, Z, In;
function Ln() {
  return (Ln = e(() => {
    ((Fn = H()),
      z(),
      j(),
      g(),
      _t(),
      ye(),
      R(),
      m(),
      We(),
      Et(),
      Ft(),
      (Z = U()),
      (In = [`critical`, `high`, `medium`, `low`]));
  }))();
}
function Rn(e) {
  let t = (0, Vn.c)(34),
    { appPreferences: n, provider: r } = e,
    i = r === void 0 ? `github` : r,
    { repositoryId: a } = re(),
    o = l(),
    { search: s } = fe(),
    [c, u] = _(),
    d;
  t[0] === c ? (d = t[1]) : ((d = c.get(`provider`)), (t[0] = c), (t[1] = d));
  let p = d,
    m = p === `github` || p === `gitlab` ? p : i,
    h = T(St),
    g;
  t[2] !== h.app.visible || t[3] !== h.cloud.visible || t[4] !== c
    ? ((g = h.app.visible && (!h.cloud.visible || c.get(`tab`) === `app`)),
      (t[2] = h.app.visible),
      (t[3] = h.cloud.visible),
      (t[4] = c),
      (t[5] = g))
    : (g = t[5]);
  let v = g,
    y = h.cloud.visible && h.app.visible;
  if (a != null && h.cloud.visible) {
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
        ? ((n = (0, Q.jsx)(Sn, { repositoryId: a, onBack: e }, a)), (t[9] = a), (t[10] = e), (t[11] = n))
        : (n = t[11]),
      n
    );
  }
  let b;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(Ge, { slug: `code-review` })), (t[12] = b))
    : (b = t[12]);
  let x;
  t[13] !== u || t[14] !== v || t[15] !== y
    ? ((x = y
        ? (0, Q.jsx)(He, {
            variant: `underline`,
            scrollable: !0,
            ariaLabel: `Code Review`,
            selectedKey: v ? `app` : `cloud`,
            onSelect: (e) => {
              u((t) => (t.set(`tab`, e), t));
            },
            tabs: [
              {
                key: `app`,
                name: (0, Q.jsx)(f, {
                  id: `settings.codeReview.privateTab`,
                  defaultMessage: `Preferences`,
                  description: `Tab for Code Review behavior and review instructions in the desktop app`,
                }),
              },
              {
                key: `cloud`,
                name: (0, Q.jsx)(f, {
                  id: `settings.codeReview.cloudTab`,
                  defaultMessage: `Review agent`,
                  description: `Tab for configuring the agent that runs cloud code and security reviews`,
                }),
              },
            ],
          })
        : void 0),
      (t[13] = u),
      (t[14] = v),
      (t[15] = y),
      (t[16] = x))
    : (x = t[16]);
  let S;
  t[17] !== h.app.error || t[18] !== h.app.visible || t[19] !== h.cloud.error || t[20] !== h.cloud.visible
    ? ((S =
        !h.app.visible && !h.cloud.visible && (h.app.error || h.cloud.error)
          ? (0, Q.jsx)(nt, {
              layout: `settings-row`,
              children: (0, Q.jsx)(f, {
                id: `settings.codeReview.access.error`,
                defaultMessage: `Unable to load review access. Try again in a moment.`,
                description: `Error when checking whether code review settings are available`,
              }),
            })
          : null),
      (t[17] = h.app.error),
      (t[18] = h.app.visible),
      (t[19] = h.cloud.error),
      (t[20] = h.cloud.visible),
      (t[21] = S))
    : (S = t[21]);
  let C = v ? n : null,
    w;
  t[22] !== h.cloud.visible || t[23] !== o || t[24] !== m || t[25] !== s || t[26] !== u || t[27] !== v
    ? ((w =
        !v && h.cloud.visible
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(Qt, {}),
                (0, Q.jsx)(
                  Ut,
                  {
                    provider: m,
                    onProviderChange: (e) => {
                      u((t) => (t.set(`provider`, e), t));
                    },
                    onSelectRepository: (e) =>
                      void o({
                        pathname: `/settings/code-review/repositories/${encodeURIComponent(e)}`,
                        search: s,
                      }),
                  },
                  m,
                ),
                (0, Q.jsx)(zn, {}),
              ],
            })
          : null),
      (t[22] = h.cloud.visible),
      (t[23] = o),
      (t[24] = m),
      (t[25] = s),
      (t[26] = u),
      (t[27] = v),
      (t[28] = w))
    : (w = t[28]);
  let E;
  return (
    t[29] !== x || t[30] !== S || t[31] !== C || t[32] !== w
      ? ((E = (0, Q.jsxs)(Ye, {
          className: `select-none`,
          title: b,
          stickyControls: x,
          children: [S, C, w],
        })),
        (t[29] = x),
        (t[30] = S),
        (t[31] = C),
        (t[32] = w),
        (t[33] = E))
      : (E = t[33]),
    E
  );
}
function zn() {
  let e = (0, Vn.c)(51),
    n = p(c),
    r = w(),
    { data: i, isError: a, refetch: o } = Ct(),
    { mutate: s, isPending: l } = Tt(),
    { canManageCreditSettings: u } = vt(),
    d;
  e[0] !== r || e[1] !== s || e[2] !== n
    ? ((d = (e) => {
        s(e, {
          onError: () => {
            n.get(I).danger(
              r.formatMessage({
                id: `settings.codeReview.save.error`,
                defaultMessage: `Unable to save code review settings`,
                description: `Toast shown when saving code review settings fails`,
              }),
              { errorAnalytics: { toastId: `settings.codeReview.save.error` } },
            );
          },
        });
      }),
      (e[0] = r),
      (e[1] = s),
      (e[2] = n),
      (e[3] = d))
    : (d = e[3]);
  let m = d;
  if (i == null) {
    if (a) {
      let n;
      e[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Q.jsx)(f, {
            id: `settings.codeReview.error`,
            defaultMessage: `Unable to load code review settings`,
            description: `Error state for code review settings`,
          })),
          (e[4] = n))
        : (n = e[4]);
      let r;
      e[5] === o ? (r = e[6]) : ((r = () => void o()), (e[5] = o), (e[6] = r));
      let i;
      e[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, Q.jsx)(f, {
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
          : ((a = (0, Q.jsx)(W, {
              children: (0, Q.jsx)(W.Content, {
                children: (0, Q.jsx)(B, {
                  children: (0, Q.jsx)(V, {
                    label: n,
                    control: (0, Q.jsx)(t, { color: `secondary`, size: `toolbar`, onClick: r, children: i }),
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
        ? ((n = (0, Q.jsx)(it, {
            children: (0, Q.jsx)(f, {
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
  let h = i.code_review_trigger_policy ?? `pr_open`,
    g;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Q.jsx)(W.Header, {
        title: (0, Q.jsx)(f, {
          id: `settings.codeReview.personal.title`,
          defaultMessage: `Personal preferences`,
          description: `Title for personal code review preferences`,
        }),
      })),
      (e[11] = g))
    : (g = e[11]);
  let _, v;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(f, {
        id: `settings.codeReview.personal.autoReview.label`,
        defaultMessage: `Automatic review`,
        description: `Label for automatic code review preference`,
      })),
      (v = (0, Q.jsx)(f, {
        id: `settings.codeReview.personal.autoReview.description`,
        defaultMessage: `If a repository’s review setting differs from your personal preference, the repository setting takes priority`,
        description: `Description for automatic code review preference`,
      })),
      (e[12] = _),
      (e[13] = v))
    : ((_ = e[12]), (v = e[13]));
  let y;
  e[14] !== m || e[15] !== l || e[16] !== i.code_review_preference
    ? ((y = (0, Q.jsx)(V, {
        label: _,
        description: v,
        control: (e) =>
          (0, Q.jsx)(ne, {
            ...e,
            checked: i.code_review_preference === `always`,
            disabled: l,
            onChange: (e) => {
              m({ code_review_preference: e ? `always` : `repo_default` });
            },
          }),
      })),
      (e[14] = m),
      (e[15] = l),
      (e[16] = i.code_review_preference),
      (e[17] = y))
    : (y = e[17]);
  let b, x;
  e[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(f, {
        id: `settings.codeReview.personal.trigger.label`,
        defaultMessage: `Review trigger`,
        description: `Label for review trigger preference`,
      })),
      (x = (0, Q.jsx)(f, {
        id: `settings.codeReview.personal.trigger.description`,
        defaultMessage: `Choose when ChatGPT should review your pull requests`,
        description: `Description for review trigger preference`,
      })),
      (e[18] = b),
      (e[19] = x))
    : ((b = e[18]), (x = e[19]));
  let S;
  e[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = [`pr_open`, `every_push`, `smart_detect`]), (e[20] = S))
    : (S = e[20]);
  let C;
  e[21] === m ? (C = e[22]) : ((C = (e) => m({ code_review_trigger_policy: e })), (e[21] = m), (e[22] = C));
  let T;
  e[23] !== l || e[24] !== C || e[25] !== h
    ? ((T = (0, Q.jsx)(G, {
        label: b,
        description: x,
        value: h,
        options: S,
        disabled: l,
        onChange: C,
        renderLabel: Bn,
      })),
      (e[23] = l),
      (e[24] = C),
      (e[25] = h),
      (e[26] = T))
    : (T = e[26]);
  let E, D;
  e[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(f, {
        id: `settings.codeReview.personal.exhaustive.label`,
        defaultMessage: `Exhaustive code review`,
        description: `Label for exhaustive code review preference`,
      })),
      (D = (0, Q.jsx)(f, {
        id: `settings.codeReview.personal.exhaustive.description`,
        defaultMessage: `Keep looking for findings until ChatGPT stops finding new issues`,
        description: `Description for exhaustive code review preference`,
      })),
      (e[27] = E),
      (e[28] = D))
    : ((E = e[27]), (D = e[28]));
  let O;
  e[29] !== m || e[30] !== l || e[31] !== i.exhaustive_code_review
    ? ((O = (0, Q.jsx)(V, {
        label: E,
        description: D,
        control: (e) =>
          (0, Q.jsx)(ne, {
            ...e,
            checked: i.exhaustive_code_review,
            disabled: l,
            onChange: (e) => {
              m({ exhaustive_code_review: e });
            },
          }),
      })),
      (e[29] = m),
      (e[30] = l),
      (e[31] = i.exhaustive_code_review),
      (e[32] = O))
    : (O = e[32]);
  let k;
  e[33] !== u || e[34] !== m || e[35] !== l || e[36] !== i.allow_credits_for_code_reviews
    ? ((k = u
        ? (0, Q.jsx)(V, {
            label: (0, Q.jsx)(f, {
              id: `settings.codeReview.personal.credits.label`,
              defaultMessage: `Use credits for reviews`,
              description: `Label for code review credits preference`,
            }),
            description: (0, Q.jsx)(f, {
              id: `settings.codeReview.personal.credits.description`,
              defaultMessage: `Allow credits to be consumed for reviews after rate limits`,
              description: `Description for code review credits preference`,
            }),
            control: (e) =>
              (0, Q.jsx)(ne, {
                ...e,
                checked: i.allow_credits_for_code_reviews,
                disabled: l,
                onChange: (e) => {
                  m({ allow_credits_for_code_reviews: e });
                },
              }),
          })
        : null),
      (e[33] = u),
      (e[34] = m),
      (e[35] = l),
      (e[36] = i.allow_credits_for_code_reviews),
      (e[37] = k))
    : (k = e[37]);
  let A;
  e[38] !== O || e[39] !== k || e[40] !== y || e[41] !== T
    ? ((A = (0, Q.jsxs)(W, {
        children: [g, (0, Q.jsx)(W.Content, { children: (0, Q.jsxs)(B, { children: [y, T, O, k] }) })],
      })),
      (e[38] = O),
      (e[39] = k),
      (e[40] = y),
      (e[41] = T),
      (e[42] = A))
    : (A = e[42]);
  let j;
  e[43] !== m || e[44] !== l || e[45] !== i.allow_credits_for_security_reviews || e[46] !== i.security_review
    ? ((j =
        i.security_review == null
          ? null
          : (0, Q.jsx)(kn, {
              disabled: l,
              preferences: i.security_review,
              allowCreditsForSecurityReviews: i.allow_credits_for_security_reviews,
              onUpdate: m,
            })),
      (e[43] = m),
      (e[44] = l),
      (e[45] = i.allow_credits_for_security_reviews),
      (e[46] = i.security_review),
      (e[47] = j))
    : (j = e[47]);
  let M;
  return (
    e[48] !== A || e[49] !== j
      ? ((M = (0, Q.jsxs)(Q.Fragment, { children: [A, j] })), (e[48] = A), (e[49] = j), (e[50] = M))
      : (M = e[50]),
    M
  );
}
function Bn(e) {
  return (0, Q.jsx)(jt, { value: e });
}
var Vn, Q;
function Hn() {
  return (Hn = e(() => {
    ((Vn = H()),
      y(),
      z(),
      j(),
      ce(),
      Xe(),
      et(),
      ie(),
      g(),
      _t(),
      de(),
      xt(),
      Ve(),
      ye(),
      tt(),
      R(),
      ut(),
      m(),
      Et(),
      Ft(),
      Zt(),
      On(),
      nn(),
      Ln(),
      (Q = U()));
  }))();
}
function Un() {
  let e = (0, Wn.c)(17),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = ue()), (e[0] = a)) : (a = e[0]);
  let o = i(a.githubConnection),
    s = o == null || o.connectorId === `connector_76869538009648d5b282a4bb21c3d157`,
    c = o?.connectorId ?? `connector_76869538009648d5b282a4bb21c3d157`,
    l = o?.accountLinkId,
    u;
  e[1] !== c || e[2] !== l
    ? ((u = { connectorId: c, linkId: l }), (e[1] = c), (e[2] = l), (e[3] = u))
    : (u = e[3]);
  let d = !s,
    p;
  e[4] === d ? (p = e[5]) : ((p = { enabled: d }), (e[4] = d), (e[5] = p));
  let { data: m, isPending: h, isFetching: g, refetch: _ } = he(Oe, u, p),
    v = s ? n : m?.app_installation_url,
    y;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Gn.jsx)(f, {
        id: `settings.codeReviewPlugin.githubRepositoryAccess.label`,
        defaultMessage: `Repository access`,
        description: `Setting for the repositories the GitHub app can access`,
      })),
      (e[6] = y))
    : (y = e[6]);
  let b;
  e[7] !== v || e[8] !== h
    ? ((b =
        v == null && !h
          ? (0, Gn.jsx)(f, {
              id: `settings.codeReviewPlugin.githubRepositoryAccess.error`,
              defaultMessage: `Unable to load GitHub repository settings`,
              description: `Error loading the selected GitHub instance's repository access settings link`,
            })
          : void 0),
      (e[7] = v),
      (e[8] = h),
      (e[9] = b))
    : (b = e[9]);
  let x;
  e[10] !== v || e[11] !== g || e[12] !== _
    ? ((x =
        v == null
          ? (0, Gn.jsx)(t, {
              color: `outline`,
              loading: g,
              onClick: () => void _(),
              children: (0, Gn.jsx)(f, {
                id: `settings.codeReviewPlugin.githubRepositoryAccess.retry`,
                defaultMessage: `Try again`,
                description: `Retry loading the selected GitHub instance's repository access settings link`,
              }),
            })
          : (0, Gn.jsxs)(N, {
              color: `outline`,
              href: v,
              target: `_blank`,
              rel: `noreferrer`,
              onClick: (e) => {
                ze({
                  event: e,
                  href: v,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                });
              },
              children: [
                (0, Gn.jsx)(f, {
                  id: `settings.codeReviewPlugin.githubRepositoryAccess.manage`,
                  defaultMessage: `Manage on GitHub`,
                  description: `Link to GitHub to install or configure the app's repository access`,
                }),
                (0, Gn.jsx)(Ae, { ExternalIcon: r, href: v, openTarget: `external-browser` }),
              ],
            })),
      (e[10] = v),
      (e[11] = g),
      (e[12] = _),
      (e[13] = x))
    : (x = e[13]);
  let S;
  return (
    e[14] !== b || e[15] !== x
      ? ((S = (0, Gn.jsx)(V, { className: `select-none`, label: y, description: b, control: x })),
        (e[14] = b),
        (e[15] = x),
        (e[16] = S))
      : (S = e[16]),
    S
  );
}
var Wn, Gn;
function Kn() {
  return (Kn = e(() => {
    ((Wn = H()), y(), M(), z(), le(), ce(), Ee(), Qe(), S(), D(), De(), R(), (Gn = U()));
  }))();
}
function qn(e) {
  let t = (0, Yn.c)(23),
    {
      provider: n,
      defaultHostname: r,
      options: i,
      selectedKey: a,
      isLoading: o,
      isError: l,
      onSelect: u,
    } = e,
    d = p(c),
    m = w(),
    [h, g] = (0, Xn.useState)(!1),
    _;
  if (t[0] !== i || t[1] !== a) {
    let e;
    (t[3] === a ? (e = t[4]) : ((e = (e) => e.key === a), (t[3] = a), (t[4] = e)),
      (_ = i.find(e)),
      (t[0] = i),
      (t[1] = a),
      (t[2] = _));
  } else _ = t[2];
  let v = _,
    y = o || h,
    b;
  t[5] === n
    ? (b = t[6])
    : ((b = (0, $.jsx)(f, {
        id: `settings.codeReviewPlugin.instance.label`,
        defaultMessage: `{provider} instance`,
        description: `Label for the named code hosting provider's selected server`,
        values: { provider: n },
      })),
      (t[5] = n),
      (t[6] = b));
  let x;
  t[7] !== r || t[8] !== l || t[9] !== n
    ? ((x = l
        ? (0, $.jsx)(f, {
            id: `settings.codeReviewPlugin.instance.loadError`,
            defaultMessage: `Unable to load connected {provider} instances`,
            description: `Error loading the named code hosting provider's connections`,
            values: { provider: n },
          })
        : (0, $.jsx)(f, {
            id: `settings.codeReviewPlugin.instance.description`,
            defaultMessage: `Choose {hostname} or a connected instance`,
            description: `Explains choosing the default code hosting server or a connected enterprise instance`,
            values: { hostname: r },
          })),
      (t[7] = r),
      (t[8] = l),
      (t[9] = n),
      (t[10] = x))
    : (x = t[10]);
  let S;
  t[11] !== y || t[12] !== m || t[13] !== u || t[14] !== i || t[15] !== n || t[16] !== d || t[17] !== v
    ? ((S = (e) =>
        (0, $.jsx)(s, {
          disabled: y,
          triggerButton: (0, $.jsx)(Me, {
            ...e,
            disabled: y,
            children:
              v == null
                ? (0, $.jsx)(f, {
                    id: `settings.codeReviewPlugin.instance.unavailable`,
                    defaultMessage: `Selected connection unavailable`,
                    description: `The saved code hosting connection is no longer available`,
                  })
                : (0, $.jsx)(Jn, { hostname: v.hostname, name: v.name }),
          }),
          children: i.map((e) =>
            (0, $.jsx)(
              C.Item,
              {
                onSelect: () => {
                  (g(!0),
                    u(e.value)
                      .catch(() => {
                        d.get(I).danger(
                          m.formatMessage(
                            {
                              id: `settings.codeReviewPlugin.instance.saveError`,
                              defaultMessage: `Unable to save {provider} instance`,
                              description: `Error saving the named code hosting provider's connection`,
                            },
                            { provider: n },
                          ),
                          { errorAnalytics: { toastId: `settings.codeReviewPlugin.instance.saveError` } },
                        );
                      })
                      .finally(() => g(!1)));
                },
                children: (0, $.jsx)(Jn, { hostname: e.hostname, name: e.name }),
              },
              e.key,
            ),
          ),
        })),
      (t[11] = y),
      (t[12] = m),
      (t[13] = u),
      (t[14] = i),
      (t[15] = n),
      (t[16] = d),
      (t[17] = v),
      (t[18] = S))
    : (S = t[18]);
  let T;
  return (
    t[19] !== b || t[20] !== x || t[21] !== S
      ? ((T = (0, $.jsx)(V, { label: b, description: x, control: S })),
        (t[19] = b),
        (t[20] = x),
        (t[21] = S),
        (t[22] = T))
      : (T = t[22]),
    T
  );
}
function Jn(e) {
  let t = (0, Yn.c)(3),
    { hostname: n, name: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = r
          ? (0, $.jsx)(f, {
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
var Yn, Xn, $;
function Zn() {
  return (Zn = e(() => {
    ((Yn = H()), y(), (Xn = me()), z(), a(), ie(), de(), R(), ut(), ($ = U()));
  }))();
}
function Qn() {
  let e = (0, nr.c)(2),
    t = rt(`223049465`),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = t ? (0, rr.jsxs)(rr.Fragment, { children: [(0, rr.jsx)($n, {}), (0, rr.jsx)(Un, {})] }) : null),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
function $n() {
  let e = (0, nr.c)(14),
    t = p(c),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = ue()), (e[0] = n)) : (n = e[0]);
  let r = n.githubConnection,
    a = i(r),
    o = P(),
    { data: s, isPending: l, isError: u } = T(ot),
    d;
  e[1] === a ? (d = e[2]) : ((d = tr(a)), (e[1] = a), (e[2] = d));
  let f = o || l,
    m;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { key: `github.com`, hostname: `github.com`, name: ``, value: null }), (e[3] = m))
    : (m = e[3]);
  let h;
  e[4] === s ? (h = e[5]) : ((h = [m, ...(s ?? []).map(er)]), (e[4] = s), (e[5] = h));
  let g;
  e[6] === t ? (g = e[7]) : ((g = (e) => oe(t, r, e)), (e[6] = t), (e[7] = g));
  let _;
  return (
    e[8] !== u || e[9] !== d || e[10] !== f || e[11] !== h || e[12] !== g
      ? ((_ = (0, rr.jsx)(qn, {
          provider: `GitHub`,
          defaultHostname: `github.com`,
          selectedKey: d,
          isLoading: f,
          isError: u,
          options: h,
          onSelect: g,
        })),
        (e[8] = u),
        (e[9] = d),
        (e[10] = f),
        (e[11] = h),
        (e[12] = g),
        (e[13] = _))
      : (_ = e[13]),
    _
  );
}
function er(e) {
  let t = { hostname: e.hostname, ...e.connection };
  return { key: tr(t), hostname: e.hostname, name: e.name, value: t };
}
function tr(e) {
  return e == null ? `github.com` : JSON.stringify([e.hostname, e.connectorId, e.accountLinkId]);
}
var nr, rr;
function ir() {
  return (ir = e(() => {
    ((nr = H()), y(), M(), de(), D(), We(), Je(), Kn(), Zn(), (rr = U()));
  }))();
}
function ar() {
  let e = (0, sr.c)(15),
    t = p(c),
    { accountId: n, userId: r } = at(),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = ue()), (e[0] = a)) : (a = e[0]);
  let o = a.gitlabConnectorId,
    s = i(o) ?? `connector_0c9786b2f41f41558056126bdb46c9bd`,
    l = P(),
    u;
  e[1] !== n || e[2] !== r
    ? ((u = Te({ accountId: n, userId: r })), (e[1] = n), (e[2] = r), (e[3] = u))
    : (u = e[3]);
  let { data: d, isPending: f, isError: m } = O(u),
    h = l || f,
    g;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = { key: ge, hostname: `gitlab.com`, name: ``, value: null }), (e[4] = g))
    : (g = e[4]);
  let _;
  e[5] === d ? (_ = e[6]) : ((_ = [g, ...(d ?? []).map(or)]), (e[5] = d), (e[6] = _));
  let v;
  e[7] === t ? (v = e[8]) : ((v = (e) => oe(t, o, e)), (e[7] = t), (e[8] = v));
  let y;
  return (
    e[9] !== m || e[10] !== s || e[11] !== h || e[12] !== _ || e[13] !== v
      ? ((y = (0, cr.jsx)(qn, {
          provider: `GitLab`,
          defaultHostname: `gitlab.com`,
          selectedKey: s,
          isLoading: h,
          isError: m,
          options: _,
          onSelect: v,
        })),
        (e[9] = m),
        (e[10] = s),
        (e[11] = h),
        (e[12] = _),
        (e[13] = v),
        (e[14] = y))
      : (y = e[14]),
    y
  );
}
function or(e) {
  return { key: e.connectorId, hostname: e.hostname, name: e.name, value: e.connectorId };
}
var sr, cr;
function lr() {
  return (lr = e(() => {
    ((sr = H()), k(), y(), M(), Ie(), qe(), Be(), de(), D(), Zn(), (cr = U()));
  }))();
}
function ur() {
  let e = (0, dr.c)(2),
    t = T(Ue),
    n = pr[t],
    r;
  return (e[0] === n ? (r = e[1]) : ((r = n == null ? null : (0, fr.jsx)(n, {})), (e[0] = n), (e[1] = r)), r);
}
var dr, fr, pr;
function mr() {
  return (mr = e(() => {
    ((dr = H()), y(), ct(), ir(), lr(), (fr = U()), (pr = { github: Qn, gitlab: ar }));
  }))();
}
function hr() {
  let e = (0, gr.c)(10),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = ue()), (e[0] = t)) : (t = e[0]);
  let n = i(t.gitHostingProvider),
    r = w(),
    a;
  e[1] === r
    ? (a = e[2])
    : ((a = r.formatMessage({
        id: `settings.codeReviewPlugin.appPreferences`,
        defaultMessage: `App preferences`,
        description: `Code Review app preferences section`,
      })),
      (e[1] = r),
      (e[2] = a));
  let o;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, _r.jsx)(_r.Fragment, {
        children: (0, _r.jsx)(bt, {
          embedded: !0,
          inheritHostBackground: !0,
          hostId: ee,
          lifetime: `app`,
          selection: { server: `code-review`, toolName: `pull_requests.settings` },
        }),
      })),
      (e[3] = o))
    : (o = e[3]);
  let s;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, _r.jsxs)(B, { children: [null, (0, _r.jsx)(ur, {}), null] })), (e[4] = s))
    : (s = e[4]);
  let c;
  e[5] === a
    ? (c = e[6])
    : ((c = (0, _r.jsxs)(`section`, { "aria-label": a, children: [o, s] })), (e[5] = a), (e[6] = c));
  let l;
  return (
    e[7] !== n || e[8] !== c
      ? ((l = (0, _r.jsx)(Rn, { provider: n, appPreferences: c })), (e[7] = n), (e[8] = c), (e[9] = l))
      : (l = e[9]),
    l
  );
}
var gr, _r;
function vr() {
  return (vr = e(() => {
    ((gr = H()), M(), z(), yt(), D(), Hn(), m(), ae(), mr(), (_r = U()));
  }))();
}
vr();
export { hr as CodeReviewPluginSettings };
//# sourceMappingURL=settings-cf3019aa2078.js.map
