import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  DB as i,
  F3 as a,
  FBt as o,
  I3 as s,
  LNt as c,
  Lst as l,
  Mst as u,
  NSt as d,
  Ns as f,
  OB as p,
  PBt as m,
  Pit as h,
  Ps as g,
  Ql as _,
  Qst as v,
  Rst as y,
  SY as b,
  Smt as x,
  TY as S,
  Vrt as C,
  X3 as ee,
  XOt as w,
  XSt as T,
  Y3 as E,
  YOt as D,
  Z3 as O,
  ZSt as te,
  Zl as k,
  ck as A,
  e6 as j,
  jit as ne,
  jst as M,
  kH as N,
  nB as P,
  okt as F,
  qrt as I,
  rB as L,
  rk as R,
  sY as re,
  sct as ie,
  tk as ae,
  tkt as z,
  vD as B,
  yD as V,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as H,
  Ajt as oe,
  Ejr as se,
  IVt as ce,
  Njt as le,
  SRn as ue,
  SRr as de,
  Sjr as fe,
  VRr as pe,
  ZLn as U,
  bRn as me,
  cPt as W,
  iRr as he,
  imr as ge,
  pVt as _e,
  rPt as ve,
  rmr as ye,
  tyr as G,
  vRr as K,
  wLr as be,
  xjr as xe,
} from "./app-initial-ad16eaadf81f.js";
import { r as q, t as Se } from "./email-133e9bdb45ab.js";
import { n as Ce, t as J } from "./telemetry-de5182008974.js";
function we(e, t) {
  return (e === `prolite` && (t.includeProlite || t.preserveProlite)) ||
    (e === `usage_based` && t.includeUsageBased)
    ? e
    : `default`;
}
function Te({
  defaultInviteSeatTypeOverride: e,
  workspaceDefaultSeatType: t,
  isUsageBasedSeatEnabled: n,
  isPremiumSeatEnabled: r = !1,
  availablePaidSeatCounts: i,
}) {
  let a =
    !n && !r && i == null
      ? Me
      : we(e ?? t, { includeUsageBased: n, includeProlite: r, preserveProlite: i != null });
  if (i == null) return a;
  let o = a === `prolite` ? `prolite` : `default`,
    s = o === "default" ? `prolite` : `default`;
  return i[o] > 0 || i[s] <= 0 ? o : s;
}
function Ee({ rows: e, defaultInviteSeatType: t, availablePaidSeatCounts: n }) {
  if (n == null) return [...e];
  let r = t === `prolite` ? `prolite` : `default`,
    i = [r, r === "default" ? `prolite` : `default`],
    a = { default: 0, prolite: 0 };
  return e.map((e) => {
    let t = e.seatType === "default" || e.seatType === `prolite` ? e.seatType : null,
      r = t != null && a[t] < n[t] ? t : i.find((e) => a[e] < n[e]);
    return r == null ? e : ((a[r] += 1), e.seatType === r ? e : { ...e, seatType: r });
  });
}
function De({ rows: e, currentSeatType: t, availablePaidSeatCounts: n }) {
  if (n == null) return [];
  let r = e.reduce(
    (e, t) => ((t.seatType === "default" || t.seatType === `prolite`) && (e[t.seatType] += 1), e),
    { default: 0, prolite: 0 },
  );
  return [`default`, `prolite`].filter((e) => r[e] - +(e === t) >= n[e]);
}
function Oe(e, t, n, r) {
  let i = [],
    a = new Set();
  for (let o of e.split(/\r?\n/)) {
    let [e = ``, s = ``, c = ``] = o.split(`,`).map((e) =>
      e
        .trim()
        .replace(/^(["'])(.*)\1$/, `$2`)
        .trim(),
    );
    if (!Se.test(e) || a.has(e)) continue;
    a.add(e);
    let l = s.toLowerCase().replace(/[- ]/g, `_`),
      u = c.toLowerCase().replace(/[- ]/g, `_`),
      d = r;
    (u === `codex` || u === `usage_based`
      ? (d = `usage_based`)
      : u === `premium` || u === `prolite`
        ? (d = `prolite`)
        : [`chatgpt`, `default`, `standard`].includes(u) && (d = `default`),
      i.push({ id: crypto.randomUUID(), email: e, role: t.find((e) => e === l) ?? n, seatType: d }));
  }
  return i;
}
function ke(e, t) {
  if (t == null) return e;
  let n = new Set();
  return e
    .filter((e) => {
      let t = e.email.trim().toLowerCase();
      return !n.has(t) && (n.add(t), !0);
    })
    .slice(0, t);
}
function Ae(e) {
  let t = e?.redemption;
  if (e?.coupon !== `team-1-month-free` || !t?.redeemed || !t.redeemed_by_workspace) return !1;
  let n = t.workspace_redeemed_at ?? t.redeemed_at,
    r = NaN;
  return (
    t.expires_at
      ? (r = new Date(t.expires_at).getTime())
      : n && (r = new Date(n).getTime() + (t.promotion_length_days ?? 30) * 864e5),
    Date.now() < r
  );
}
function je(e, t, n, r) {
  if (t == null || t.seats_entitled > 10) return !1;
  let i = new Set(n.map((e) => e.trim().toLowerCase())),
    a = new Set(e.map((e) => e.email.trim().toLowerCase()).filter((e) => e.length > 0 && !i.has(e)));
  return Math.max(0, t.seats_in_use) + r + a.size > 10;
}
var Me;
function Ne() {
  return (Ne = e(() => {
    (q(), (Me = `default`));
  }))();
}
function Pe(e) {
  let t = (0, X.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = (0, Q.jsx)(Fe, { ...e }, e.workspaceId)), (t[0] = e), (t[1] = n)),
    n
  );
}
function Fe(e) {
  let r = (0, X.c)(82),
    i = n(v),
    a = se(),
    o;
  r[0] !== e.surface || r[1] !== e.workspace || r[2] !== i || r[3] !== a
    ? ((o = () => J(i, a, e.workspace, e.surface)),
      (r[0] = e.surface),
      (r[1] = e.workspace),
      (r[2] = i),
      (r[3] = a),
      (r[4] = o))
    : (o = r[4]);
  let [s] = (0, Z.useState)(o),
    c = (0, Z.useRef)(!1),
    l,
    d;
  (r[5] === s
    ? ((l = r[6]), (d = r[7]))
    : ((l = () => {
        c.current = !0;
        let e = (e) => {
          e.persisted || s.exit();
        };
        return (
          window.addEventListener(`pagehide`, e),
          () => {
            ((c.current = !1),
              window.removeEventListener(`pagehide`, e),
              queueMicrotask(() => {
                c.current || s.exit();
              }));
          }
        );
      }),
      (d = [s]),
      (r[5] = s),
      (r[6] = l),
      (r[7] = d)),
    (0, Z.useEffect)(l, d));
  let f = e.workspaceId,
    p;
  r[8] === f ? (p = r[9]) : ((p = { "ChatGPT-Account-ID": f, [x]: f }), (r[8] = f), (r[9] = p));
  let m = p,
    h;
  r[10] === f ? (h = r[11]) : ((h = [`workspace-settings`, f]), (r[10] = f), (r[11] = h));
  let g;
  r[12] !== m || r[13] !== f
    ? ((g = (e) => {
        let { signal: t } = e;
        return he.safeGet(`/accounts/{account_id}/settings`, {
          additionalHeaders: m,
          signal: t,
          parameters: { path: { account_id: f } },
        });
      }),
      (r[12] = m),
      (r[13] = f),
      (r[14] = g))
    : (g = r[14]);
  let _;
  r[15] !== h || r[16] !== g
    ? ((_ = { queryKey: h, staleTime: 0, queryFn: g }), (r[15] = h), (r[16] = g), (r[17] = _))
    : (_ = r[17]);
  let { data: y, isLoading: b } = u(_),
    S;
  r[18] === f ? (S = r[19]) : ((S = [`business-onboarding-invite`, f, `identity`]), (r[18] = f), (r[19] = S));
  let C;
  r[20] !== m || r[21] !== f
    ? ((C = (e) => {
        let { signal: t } = e;
        return he.safeGet(`/accounts/{account_id}/identity`, {
          additionalHeaders: m,
          signal: t,
          parameters: { path: { account_id: f } },
        });
      }),
      (r[20] = m),
      (r[21] = f),
      (r[22] = C))
    : (C = r[22]);
  let ee;
  r[23] !== S || r[24] !== C
    ? ((ee = { queryKey: S, staleTime: 0, queryFn: C }), (r[23] = S), (r[24] = C), (r[25] = ee))
    : (ee = r[25]);
  let { data: w } = u(ee),
    T;
  r[26] === f ? (T = r[27]) : ((T = [`business-onboarding-invite`, f, `promo`]), (r[26] = f), (r[27] = T));
  let E;
  r[28] !== m || r[29] !== f
    ? ((E = (e) => {
        let { signal: t } = e;
        return he.safeGet(`/promo_campaign/check_coupon`, {
          additionalHeaders: m,
          signal: t,
          parameters: { query: { coupon: `team-1-month-free`, workspace_id: f } },
        });
      }),
      (r[28] = m),
      (r[29] = f),
      (r[30] = E))
    : (E = r[30]);
  let D;
  r[31] !== T || r[32] !== E
    ? ((D = { queryKey: T, staleTime: 0, queryFn: E }), (r[31] = T), (r[32] = E), (r[33] = D))
    : (D = r[33]);
  let { data: O } = u(D),
    te;
  r[34] === f ? (te = r[35]) : ((te = le(f)), (r[34] = f), (r[35] = te));
  let { data: k } = u(te),
    A;
  r[36] === f ? (A = r[37]) : ((A = [`business-onboarding-invite`, f, `invites`]), (r[36] = f), (r[37] = A));
  let j;
  r[38] !== m || r[39] !== f
    ? ((j = (e) => {
        let { signal: t } = e;
        return he.safeGet(`/accounts/{account_id}/invites`, {
          additionalHeaders: m,
          signal: t,
          parameters: { path: { account_id: f }, query: { offset: 0, limit: 25, query: `` } },
        });
      }),
      (r[38] = m),
      (r[39] = f),
      (r[40] = j))
    : (j = r[40]);
  let ne;
  r[41] !== A || r[42] !== j
    ? ((ne = { queryKey: A, staleTime: 0, queryFn: j }), (r[41] = A), (r[42] = j), (r[43] = ne))
    : (ne = r[43]);
  let { data: M } = u(ne),
    N;
  r[44] === O ? (N = r[45]) : ((N = Ae(O)), (r[44] = O), (r[45] = N));
  let P = N,
    F;
  r[46] === f ? (F = r[47]) : ((F = [`business-onboarding-invite`, f, `users`]), (r[46] = f), (r[47] = F));
  let I;
  r[48] !== m || r[49] !== f
    ? ((I = async (e) => {
        let { signal: t } = e,
          n = await he.safeGet(`/accounts/{account_id}/users`, {
            additionalHeaders: m,
            signal: t,
            parameters: { path: { account_id: f }, query: { offset: 0, limit: 100, query: `` } },
          });
        if (n.total == null) throw Error(`Expected a counted workspace users response`);
        return n;
      }),
      (r[48] = m),
      (r[49] = f),
      (r[50] = I))
    : (I = r[50]);
  let L;
  r[51] !== P || r[52] !== F || r[53] !== I
    ? ((L = { queryKey: F, enabled: P, staleTime: 0, queryFn: I }),
      (r[51] = P),
      (r[52] = F),
      (r[53] = I),
      (r[54] = L))
    : (L = r[54]);
  let { data: R } = u(L),
    re,
    ie;
  (r[55] !== e.workspace || r[56] !== b || r[57] !== k || r[58] !== s
    ? ((re = () => {
        b || s.updateContext(e.workspace, k);
      }),
      (ie = [s, e.workspace, k, b]),
      (r[55] = e.workspace),
      (r[56] = b),
      (r[57] = k),
      (r[58] = s),
      (r[59] = re),
      (r[60] = ie))
    : ((re = r[59]), (ie = r[60])),
    (0, Z.useEffect)(re, ie));
  let ae;
  r[61] !== e || r[62] !== b || r[63] !== s
    ? ((ae = () => {
        (b || s.legacy(`Account Pay: Add Collaborators Modal Clicked`, { buttonType: `Skip` }),
          s.cancel(),
          e.onCancel());
      }),
      (r[61] = e),
      (r[62] = b),
      (r[63] = s),
      (r[64] = ae))
    : (ae = r[64]);
  let z = ae;
  if (b) {
    let n = e.layout,
      i;
    r[65] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(`div`, {
          className: `flex min-h-48 items-center justify-center`,
          children: (0, Q.jsx)(t, { className: `size-6 text-tertiary` }),
        })),
        (r[65] = i))
      : (i = r[65]);
    let a;
    return (
      r[66] !== n || r[67] !== z
        ? ((a = (0, Q.jsx)(n, { content: i, busy: !1, canSubmit: !1, onSubmit: void 0, onCancel: z })),
          (r[66] = n),
          (r[67] = z),
          (r[68] = a))
        : (a = r[68]),
      a
    );
  }
  let B;
  r[69] !== P || r[70] !== w || r[71] !== M || r[72] !== y || r[73] !== k || r[74] !== R
    ? ((B = { settings: y, identity: w, subscription: k, invites: M, users: R, hasTrial: P }),
      (r[69] = P),
      (r[70] = w),
      (r[71] = M),
      (r[72] = y),
      (r[73] = k),
      (r[74] = R),
      (r[75] = B))
    : (B = r[75]);
  let V;
  return (
    r[76] !== z || r[77] !== e || r[78] !== B || r[79] !== s || r[80] !== f
      ? ((V = (0, Q.jsx)(Ie, { ...e, onCancel: z, telemetry: s, workspaceId: f, data: B })),
        (r[76] = z),
        (r[77] = e),
        (r[78] = B),
        (r[79] = s),
        (r[80] = f),
        (r[81] = V))
      : (V = r[81]),
    V
  );
}
function Ie(e) {
  let t = (0, X.c)(56),
    {
      workspace: r,
      workspaceId: a,
      maxInvites: o,
      availablePaidSeatCounts: s,
      billingLinkOpenTarget: c,
      onCancel: l,
      onSuccess: u,
      layout: d,
      data: p,
      telemetry: m,
    } = e,
    h = n(v),
    g = F(),
    b = y(),
    { email: S } = ge(),
    [C] = T(),
    w;
  t[0] === C ? (w = t[1]) : ((w = de(_e, C)), (t[0] = C), (t[1] = w));
  let D = w,
    O = fe(`3528236309`),
    te = se(),
    k =
      [`team`, `self_serve_business_prolite`, `self_serve_business_usage_based`].includes(
        r.account.plan_type ?? ``,
      ) || te.checkGate(`4176229075`),
    A = r.account.account_user_role === `account-owner`,
    j = A || r.account.account_user_role === `account-admin`,
    M = r.account.plan_type === `free_workspace`,
    L;
  t[2] !== S || t[3] !== M
    ? ((L = M && S != null && Se.test(S.trim()) ? S.trim().split(`@`)[1]?.toLowerCase() : void 0),
      (t[2] = S),
      (t[3] = M),
      (t[4] = L))
    : (L = t[4]);
  let ie = L,
    V = !M && A,
    H = M && A ? `owner` : `member`,
    oe = r.account.is_usage_based_seat_enabled === !0,
    ce = oe && s == null,
    U = !!r.entitlement.has_active_subscription && !!r.account.subscription_seat_pools_enabled && k,
    me = A && (oe || U),
    W = Te({
      workspaceDefaultSeatType: p.settings?.default_seat_type,
      isUsageBasedSeatEnabled: oe,
      isPremiumSeatEnabled: U,
      availablePaidSeatCounts: s,
    }),
    ve;
  t[5] !== O || t[6] !== A
    ? ((ve = A
        ? [
            `member`,
            ...(O.get(`can_see_analytics_viewer_role`, !1) ? [`analytics_viewer`] : []),
            `admin`,
            `owner`,
          ]
        : [`member`]),
      (t[5] = O),
      (t[6] = A),
      (t[7] = ve))
    : (ve = t[7]);
  let ye = ve,
    [G, K] = (0, Z.useState)(() =>
      o === 0 ? [] : [{ id: crypto.randomUUID(), email: ``, role: H, seatType: W }],
    ),
    [be, xe] = (0, Z.useState)(!1),
    [q, Ce] = (0, Z.useState)(``),
    [J, Ae] = (0, Z.useState)(!1),
    [Me, Ne] = (0, Z.useState)(null),
    [Pe, Fe] = (0, Z.useState)(!1),
    Ie = (0, Z.useRef)(null),
    Y = (0, Z.useRef)(!0),
    Qe = (0, Z.useRef)(!1),
    $e,
    et;
  (t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($e = () => (
        (Y.current = !0),
        () => {
          Y.current = !1;
        }
      )),
      (et = []),
      (t[8] = $e),
      (t[9] = et))
    : (($e = t[8]), (et = t[9])),
    (0, Z.useEffect)($e, et));
  let tt = G.filter(Ke),
    nt = p.identity?.domains.filter(Ge),
    rt =
      p.identity?.allow_external_domain_invites === !1 && nt != null && nt.length > 0
        ? tt
            .filter(
              (e) => !nt.some((t) => e.email.trim().toLowerCase().endsWith(`@${t.hostname.toLowerCase()}`)),
            )
            .map(We)
        : [],
    it;
  if (
    t[10] !== p.hasTrial ||
    t[11] !== p.invites?.items ||
    t[12] !== p.subscription ||
    t[13] !== p.users?.items ||
    t[14] !== G
  ) {
    let e = p.invites?.items.flatMap(Ue) ?? [],
      n = p.users?.items.flatMap(He) ?? [];
    ((it = p.hasTrial && je(G, p.subscription, [...e, ...n], e.length)),
      (t[10] = p.hasTrial),
      (t[11] = p.invites?.items),
      (t[12] = p.subscription),
      (t[13] = p.users?.items),
      (t[14] = G),
      (t[15] = it));
  } else it = t[15];
  let at = it,
    ot;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = { member: $.member, admin: $.admin, owner: $.owner, analytics_viewer: $.analyticsViewer }),
      (t[16] = ot))
    : (ot = t[16]);
  let st = ot,
    ct = [`default`, ...(U || G.some(Ve) ? [`prolite`] : []), ...(ce ? [`usage_based`] : [])],
    lt = U ? $.standard : $.chatgpt,
    ut;
  t[17] === lt
    ? (ut = t[18])
    : ((ut = { default: lt, prolite: $.premium, usage_based: $.codex }), (t[17] = lt), (t[18] = ut));
  let dt = ut,
    ft = function (e) {
      let t = ke(e, o);
      return (
        o != null &&
          new Set(e.map(Be)).size > o &&
          h.get(I).warning(g.formatMessage($.inviteLimit, { maxInvites: o })),
        K(Ee({ rows: t, defaultInviteSeatType: W, availablePaidSeatCounts: s })),
        t
      );
    },
    pt = function (e) {
      (K((t) => {
        let n = t.filter((t) => t.id !== e);
        return !be && n.length === 0 && o !== 0
          ? [{ id: crypto.randomUUID(), email: ``, role: H, seatType: W }]
          : n;
      }),
        m.legacy(`Account Pay: Collaborator Email Removed`));
    },
    mt = function (e, t) {
      let n = t !== void 0 && t,
        r = e
          .split(/[\s,]+/)
          .map(ze)
          .filter(Re),
        i = (e) => (o == null ? e : e.trim().toLowerCase()),
        a = new Set(G.map((e) => i(e.email))),
        s = r
          .filter((e) => {
            let t = i(e);
            return !a.has(t) && (a.add(t), !0);
          })
          .map((e) => ({ id: crypto.randomUUID(), email: e, role: H, seatType: W }));
      (ft([...G, ...s]),
        Ce(``),
        n &&
          m.legacy(`Account Pay: Collaborator Emails Added`, {
            numEmailsAdded: r.length,
            uploadType: `Manual`,
          }));
    },
    ht = async function (e) {
      if (e.size > 26214400) {
        h.get(I).danger(g.formatMessage($.fileTooLarge, { maxSize: `25MB` }), {
          errorAnalytics: { toastId: `csv_upload_too_large` },
        });
        return;
      }
      if (e.type !== `text/csv`) {
        h.get(I).danger(g.formatMessage($.fileType), { errorAnalytics: { toastId: `csv_upload` } });
        return;
      }
      try {
        let t = Oe(await e.text(), ye, H, W);
        if (!Y.current) return;
        let n = ft(t);
        (xe(!0),
          m.legacy(`Account Pay: Collaborator Emails Added`, {
            numEmailsAdded: n.length,
            uploadType: `Bulk`,
          }));
      } catch {
        Y.current && Ne(g.formatMessage($.fileReadError));
      }
    },
    gt = async function () {
      if (
        !Y.current ||
        h.get(pe).authenticatedAccountId !== a ||
        Qe.current ||
        J ||
        tt.length === 0 ||
        rt.length > 0 ||
        at
      )
        return;
      ((Qe.current = !0), Ae(!0), Ne(null), Fe(!1));
      let e = tt
          .slice(0, o ?? void 0)
          .map((e) => ({
            ...e,
            email: e.email.trim(),
            role: V ? e.role : H,
            seatType:
              me || s != null
                ? we(e.seatType, { includeUsageBased: ce, includeProlite: U, preserveProlite: s != null })
                : W,
          })),
        t = m.start(e);
      m.legacy(`Account Pay: Add Collaborators Modal Clicked`, { buttonType: `Send` });
      let n = new Map();
      for (let t of e) {
        let e = Ze[t.role],
          r = `${e}:${t.seatType}`,
          i = n.get(r);
        i ? i.emails.push(t.email) : n.set(r, { emails: [t.email], role: e, seatType: t.seatType });
      }
      let i = crypto.randomUUID(),
        c = 0,
        l = 0,
        d = !1,
        f = !1,
        p = [];
      await (async () => {
        let e = await Promise.allSettled(
          [...n.values()].flatMap((e) => {
            let n = [],
              r = Math.max(5, Math.round(e.emails.length / 10));
            for (let t = 0; t < e.emails.length; t += r) n.push(e.emails.slice(t, t + r));
            return n.map((n) =>
              he.safePost(`/accounts/{account_id}/invites`, {
                isExpectedError: Ye,
                additionalHeaders: { "ChatGPT-Account-ID": a, [x]: a },
                parameters: { path: { account_id: a } },
                requestBody: {
                  email_addresses: n,
                  role: e.role,
                  seat_type: e.seatType,
                  flow_id: t.flowId,
                  submission_id: i,
                  resend_emails: !0,
                },
              }),
            );
          }),
        );
        for (let t of e) {
          if (t.status === `rejected`) {
            ((d = !0), t.reason instanceof ne && Ye(t.reason) && (f = !0));
            continue;
          }
          ((c += t.value.account_invites?.length ?? 0), (l += t.value.already_member_emails?.length ?? 0));
          for (let e of t.value.errored_emails ?? []) p.push(`${e.email_address}: ${e.error}`);
        }
        if ((t.finish(c, !d, l, d && !f ? void 0 : f), Y.current)) {
          if (
            (c > 0 &&
              (h
                .get(I)
                .success(
                  g.formatMessage(
                    {
                      id: `admin-invite.inviteSuccessCount`,
                      defaultMessage: `Invited {count, plural, one {# user} other {# users}} to {workspaceName}`,
                      description: `Success toast after a workspace administrator sends invitations. {count} is the number of people invited and {workspaceName} is the workspace name. Translate the full sentence, including the plural form of user.`,
                    },
                    { count: c, workspaceName: r.account.name ?? `` },
                  ),
                ),
              setTimeout(() => {
                (b.invalidateQueries({ queryKey: [`business-onboarding-invite`, a] }),
                  b.invalidateQueries({ queryKey: le(a).queryKey }));
              }, 1e3)),
            l > 0 &&
              h
                .get(I)
                .info(
                  g.formatMessage(
                    {
                      id: `codex.business-onboarding.invite.toast.already_member`,
                      defaultMessage: `{count, plural, one {Already a member — no invitation sent} other {# people are already members — no invitations sent}}`,
                      description: `Informational toast after an administrator submits manual or CSV workspace invitations. Count is the number of active members whose role and seat already match; they were skipped without an email. Other people in the batch may still have been invited.`,
                    },
                    { count: l },
                  ),
                ),
            p.length > 0 &&
              h
                .get(I)
                .danger(g.formatMessage($.failure, { emailsStr: p.join(`, `) }), {
                  errorAnalytics: { toastId: `admin_invite` },
                }),
            d)
          ) {
            f ? Fe(!0) : Ne(g.formatMessage($.sendError));
            return;
          }
          u();
        }
      })().finally(() => {
        ((Qe.current = !1), Y.current && Ae(!1));
      });
    },
    _t;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_t = (0, Q.jsx)(z, { ...$.uploadTooltip })), (t[19] = _t))
    : (_t = t[19]);
  let vt;
  t[20] === m
    ? (vt = t[21])
    : ((vt = () => {
        (m.legacy(`Account Pay: Add Collaborators Upload Clicked`), Ie.current?.click());
      }),
      (t[20] = m),
      (t[21] = vt));
  let yt;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((yt = (0, Q.jsx)(i, { asset: f })), (t[22] = yt))
    : (yt = t[22]);
  let bt = be ? $.reupload : $.upload,
    xt;
  t[23] === bt ? (xt = t[24]) : ((xt = (0, Q.jsx)(z, { ...bt })), (t[23] = bt), (t[24] = xt));
  let St;
  t[25] !== J || t[26] !== vt || t[27] !== xt
    ? ((St = (0, Q.jsx)(P, {
        tooltipContent: _t,
        side: `top`,
        tooltipMaxWidth: `280px`,
        delayDuration: 200,
        children: (0, Q.jsxs)(E, {
          type: `button`,
          color: `outlineSurface`,
          disabled: J,
          onClick: vt,
          children: [yt, xt],
        }),
      })),
      (t[25] = J),
      (t[26] = vt),
      (t[27] = xt),
      (t[28] = St))
    : (St = t[28]);
  let Ct = St,
    wt = !J && tt.length > 0 && rt.length === 0 && !at,
    Tt = () => void gt(),
    Et;
  t[29] === ht
    ? (Et = t[30])
    : ((Et = (0, Q.jsx)(`input`, {
        ref: Ie,
        type: `file`,
        accept: `.csv,text/csv`,
        className: `hidden`,
        onChange: (e) => {
          let t = e.target.files?.[0];
          ((e.target.value = ``), t && ht(t));
        },
      })),
      (t[29] = ht),
      (t[30] = Et));
  let Dt;
  t[31] === Me
    ? (Dt = t[32])
    : ((Dt = Me && (0, Q.jsx)(B, { type: `error`, content: Me })), (t[31] = Me), (t[32] = Dt));
  let Ot;
  t[33] !== D || t[34] !== c || t[35] !== A || t[36] !== Pe
    ? ((Ot =
        Pe &&
        (0, Q.jsx)(B, {
          type: `error`,
          content: A
            ? (0, Q.jsx)(z, {
                id: `codex.businessOnboarding.invitePaymentRequired.owner`,
                defaultMessage: `Invitations couldn't be sent because your workspace has an unpaid subscription. Update your payment details, then try sending the invitations again.`,
                description: `Invite failure shown to a workspace owner who can manage billing. Resolving payment does not automatically resend invitations.`,
              })
            : (0, Q.jsx)(z, {
                id: `codex.businessOnboarding.invitePaymentRequired.member`,
                defaultMessage: `Invitations couldn't be sent because your workspace has an unpaid subscription. Ask a workspace owner to update the payment details, then try again.`,
                description: `Invite failure shown to an inviter without billing access, including admins who are not owners. A workspace owner must resolve payment before invitations can be retried.`,
              }),
          customCtas: A
            ? (0, Q.jsx)(ee, {
                href: D,
                target: `_blank`,
                rel: `noopener noreferrer`,
                onClick: (e) =>
                  ue({
                    event: e,
                    href: D,
                    disposition: `new-tab`,
                    openTarget: c,
                    initiator: `open_in_browser_bridge`,
                  }),
                children: (0, Q.jsx)(z, {
                  id: `codex.businessOnboarding.invitePaymentRequired.updatePayment`,
                  defaultMessage: `Update payment`,
                  description: `Opens workspace billing separately so the owner can resolve payment without losing the invite form.`,
                }),
              })
            : void 0,
        })),
      (t[33] = D),
      (t[34] = c),
      (t[35] = A),
      (t[36] = Pe),
      (t[37] = Ot))
    : (Ot = t[37]);
  let kt =
      rt.length > 0 &&
      (0, Q.jsx)(B, {
        type: `error`,
        content: (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(z, { ...$.externalDescription }),
            (0, Q.jsx)(`p`, { className: `break-words select-text`, children: rt.join(`, `) }),
            (0, Q.jsx)(z, { ...$.externalResolution }),
          ],
        }),
      }),
    At;
  t[38] !== D || t[39] !== j || t[40] !== at
    ? ((At =
        at &&
        (0, Q.jsx)(B, {
          type: `warning`,
          title: (0, Q.jsx)(z, { ...$.trialTitle }),
          content: (0, Q.jsx)(z, { ...(j ? $.trialLimit : $.trialAskAdmin) }),
          customCtas: j
            ? (0, Q.jsx)(`a`, {
                href: D,
                className: `inline-flex h-9 shrink-0 cursor-interaction items-center justify-center rounded-full bg-primary-solid px-4 text-sm font-semibold text-primary-solid hover:opacity-90`,
                onClick: (e) =>
                  ue({
                    event: e,
                    href: D,
                    disposition: `current-tab`,
                    openTarget: `external-browser`,
                    initiator: `open_in_browser_bridge`,
                  }),
                children: (0, Q.jsx)(z, { ...$.upgrade }),
              })
            : void 0,
        })),
      (t[38] = D),
      (t[39] = j),
      (t[40] = at),
      (t[41] = At))
    : (At = t[41]);
  let jt = be
      ? (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(`div`, { className: `flex justify-end`, children: Ct }),
            (0, Q.jsxs)(`div`, {
              className: `flex h-48 min-h-48 flex-wrap content-start items-start overflow-auto rounded-lg border border-default bg-surface p-2 text-sm focus-within:border-ring`,
              children: [
                G.map((e) => (0, Q.jsx)(Je, { email: e.email, disabled: J, onRemove: () => pt(e.id) }, e.id)),
                (0, Q.jsx)(`input`, {
                  "aria-label": g.formatMessage($.addEmails),
                  "aria-invalid": G.some(Le) || void 0,
                  className: `h-8 min-w-20 flex-1 border-0 bg-transparent px-2 text-sm text-secondary outline-none placeholder:text-tertiary focus:ring-0`,
                  name: `add-member-emails`,
                  placeholder: G.length === 0 ? g.formatMessage($.csvPlaceholder) : void 0,
                  value: q,
                  disabled: J,
                  onChange: (e) => Ce(e.target.value),
                  onBlur: () => {
                    q.trim() && mt(q);
                  },
                  onKeyDown: (e) => {
                    if (!e.nativeEvent.isComposing) {
                      if (q.length === 0 && e.key === `Backspace`) {
                        let e = G.at(-1);
                        e != null && pt(e.id);
                        return;
                      }
                      q.length > 0 && [`Enter`, `,`, ` `].includes(e.key) && (e.preventDefault(), mt(q, !0));
                    }
                  },
                }),
              ],
            }),
          ],
        })
      : (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(`div`, {
              className: `overflow-x-auto`,
              children: (0, Q.jsxs)(`table`, {
                className: `w-full table-fixed border-separate border-spacing-0 text-start text-base`,
                children: [
                  (0, Q.jsxs)(`colgroup`, {
                    children: [
                      (0, Q.jsx)(`col`, {}),
                      V && (0, Q.jsx)(`col`, { className: `w-32` }),
                      me && (0, Q.jsx)(`col`, { className: `w-36` }),
                      (0, Q.jsx)(`col`, { className: `w-12` }),
                    ],
                  }),
                  (0, Q.jsx)(`thead`, {
                    children: (0, Q.jsxs)(`tr`, {
                      children: [
                        (0, Q.jsx)(`th`, {
                          className: `border-b-[0.5px] border-default py-2 pe-4 text-start font-semibold`,
                          children: (0, Q.jsx)(z, { ...$.email }),
                        }),
                        V &&
                          (0, Q.jsx)(`th`, {
                            className: `border-b-[0.5px] border-default py-2 ps-3 pe-4 text-start font-semibold`,
                            children: (0, Q.jsx)(z, { ...$.role }),
                          }),
                        me &&
                          (0, Q.jsx)(`th`, {
                            className: `border-b-[0.5px] border-default py-2 ps-3 pe-4 text-start font-semibold`,
                            children: (0, Q.jsx)(z, { ...$.seatType }),
                          }),
                        (0, Q.jsx)(`th`, {
                          className: `w-12 border-b-[0.5px] border-default`,
                          "aria-label": g.formatMessage($.remove),
                        }),
                      ],
                    }),
                  }),
                  (0, Q.jsx)(`tbody`, {
                    children: G.map((e, t) =>
                      (0, Q.jsxs)(
                        `tr`,
                        {
                          className: `h-14`,
                          children: [
                            (0, Q.jsx)(`td`, {
                              className: `border-b-[0.5px] border-default py-2 pe-4 align-middle [tr:last-child_&]:border-b-0`,
                              children: (0, Q.jsx)(qe, {
                                email: e.email,
                                duplicate: G.slice(0, t).some(
                                  (t) => t.email.trim().toLowerCase() === e.email.trim().toLowerCase(),
                                ),
                                disabled: J,
                                inviteDomain: ie,
                                onDomainMismatch: () => m.domainMismatch(),
                                onChange: (t) =>
                                  K((n) => n.map((n) => (n.id === e.id ? { ...n, email: t } : n))),
                              }),
                            }),
                            V &&
                              (0, Q.jsx)(`td`, {
                                className: `border-b-[0.5px] border-default pe-4 align-middle [tr:last-child_&]:border-b-0`,
                                children: (0, Q.jsx)(ae, {
                                  surface: `chatgpt`,
                                  triggerButton: (0, Q.jsxs)(E, {
                                    className: `w-full justify-between`,
                                    type: `button`,
                                    color: `ghostActive`,
                                    disabled: J,
                                    size: `dialogGhost`,
                                    children: [(0, Q.jsx)(z, { ...st[e.role] }), (0, Q.jsx)(N, {})],
                                  }),
                                  children: (0, Q.jsx)(R.RadioGroup, {
                                    value: e.role,
                                    onValueChange: (t) => {
                                      let n = ye.find((e) => e === t);
                                      n && K((t) => t.map((t) => (t.id === e.id ? { ...t, role: n } : t)));
                                    },
                                    children: ye.map((e) =>
                                      (0, Q.jsx)(
                                        R.RadioItem,
                                        {
                                          value: e,
                                          variant: `chatgpt`,
                                          children: (0, Q.jsx)(z, { ...st[e] }),
                                        },
                                        e,
                                      ),
                                    ),
                                  }),
                                }),
                              }),
                            me &&
                              (0, Q.jsx)(`td`, {
                                className: `border-b-[0.5px] border-default pe-4 align-middle [tr:last-child_&]:border-b-0`,
                                children: (0, Q.jsx)(ae, {
                                  surface: `chatgpt`,
                                  triggerButton: (0, Q.jsxs)(E, {
                                    className: `w-full justify-between`,
                                    type: `button`,
                                    color: `ghostActive`,
                                    disabled: J,
                                    size: `dialogGhost`,
                                    children: [(0, Q.jsx)(z, { ...dt[e.seatType] }), (0, Q.jsx)(N, {})],
                                  }),
                                  children: (0, Q.jsx)(R.RadioGroup, {
                                    value: e.seatType,
                                    onValueChange: (t) => {
                                      (t === "default" || t === `usage_based` || t === `prolite`) &&
                                        K((n) => n.map((n) => (n.id === e.id ? { ...n, seatType: t } : n)));
                                    },
                                    children: ct.map((t) => {
                                      let n = null;
                                      return (
                                        U && t !== `usage_based`
                                          ? (n = (0, Q.jsx)(Xe, {
                                              workspaceId: a,
                                              seatType: t === `prolite` ? `premium` : `standard`,
                                            }))
                                          : t === `usage_based`
                                            ? (n = (0, Q.jsx)(z, {
                                                id: `WorkspaceMembers.seatTypeCodexSubtitle`,
                                                defaultMessage: `No fixed costs, pay as you go pricing`,
                                                description: `Subtitle shown under the Codex seat type option in workspace seat type dropdowns`,
                                              }))
                                            : t === "default" &&
                                              (n = (0, Q.jsx)(z, {
                                                id: `WorkspaceMembers.seatTypeChatgptSubtitle`,
                                                defaultMessage: `ChatGPT, ChatGPT Work, and Codex, fixed price per seat`,
                                                description: `Subtitle shown under the ChatGPT seat type option in workspace seat type dropdowns for Business workspaces. It tells admins that this fixed-price seat includes access to ChatGPT, ChatGPT Work, and Codex. 'ChatGPT Work' is a product name and must remain in English and unchanged. Short, single-line option subtitle.`,
                                              })),
                                        (0, Q.jsx)(
                                          R.RadioItem,
                                          {
                                            value: t,
                                            variant: `chatgpt`,
                                            SubText: n,
                                            disabled:
                                              (t === `prolite` && !U) ||
                                              De({
                                                rows: G,
                                                currentSeatType: e.seatType,
                                                availablePaidSeatCounts: s,
                                              }).includes(t),
                                            children: (0, Q.jsx)(z, { ...dt[t] }),
                                          },
                                          t,
                                        )
                                      );
                                    }),
                                  }),
                                }),
                              }),
                            (0, Q.jsx)(`td`, {
                              className: `border-b-[0.5px] border-default text-end align-middle [tr:last-child_&]:border-b-0`,
                              children: (0, Q.jsx)(E, {
                                type: `button`,
                                size: `iconCircle`,
                                color: `ghost`,
                                disabled: J,
                                "aria-label": g.formatMessage($.remove),
                                onClick: () => pt(e.id),
                                children: (0, Q.jsx)(re, {}),
                              }),
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            (0, Q.jsxs)(`div`, {
              className: `mb-4 flex justify-between`,
              children: [
                o == null || G.length < o
                  ? (0, Q.jsxs)(E, {
                      type: `button`,
                      color: `outlineSurface`,
                      disabled: J,
                      onClick: () =>
                        K((e) =>
                          Ee({
                            rows: [...e, { id: crypto.randomUUID(), email: ``, role: H, seatType: W }],
                            defaultInviteSeatType: W,
                            availablePaidSeatCounts: s,
                          }),
                        ),
                      children: [(0, Q.jsx)(i, { asset: _ }), (0, Q.jsx)(z, { ...$.addMore })],
                    })
                  : (0, Q.jsx)(`span`, {}),
                Ct,
              ],
            }),
          ],
        }),
    Mt;
  t[42] !== Et || t[43] !== Dt || t[44] !== Ot || t[45] !== kt || t[46] !== At || t[47] !== jt
    ? ((Mt = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-4`,
        children: [Et, Dt, Ot, kt, At, jt],
      })),
      (t[42] = Et),
      (t[43] = Dt),
      (t[44] = Ot),
      (t[45] = kt),
      (t[46] = At),
      (t[47] = jt),
      (t[48] = Mt))
    : (Mt = t[48]);
  let Nt;
  return (
    t[49] !== d || t[50] !== J || t[51] !== l || t[52] !== wt || t[53] !== Tt || t[54] !== Mt
      ? ((Nt = (0, Q.jsx)(d, { busy: J, canSubmit: wt, onSubmit: Tt, onCancel: l, content: Mt })),
        (t[49] = d),
        (t[50] = J),
        (t[51] = l),
        (t[52] = wt),
        (t[53] = Tt),
        (t[54] = Mt),
        (t[55] = Nt))
      : (Nt = t[55]),
    Nt
  );
}
function Le(e) {
  return !Se.test(e.email);
}
function Re(e) {
  return e.length > 0;
}
function ze(e) {
  return e.trim();
}
function Be(e) {
  return e.email.trim().toLowerCase();
}
function Ve(e) {
  return e.seatType === `prolite`;
}
function He(e) {
  return e.email ? [e.email] : [];
}
function Ue(e) {
  return e.email_address ? [e.email_address] : [];
}
function We(e) {
  return e.email;
}
function Ge(e) {
  return e.status === `verified`;
}
function Ke(e) {
  return e.email.trim().length > 0;
}
function qe(e) {
  let t = (0, X.c)(29),
    { email: n, duplicate: r, disabled: i, inviteDomain: a, onDomainMismatch: o, onChange: s } = e,
    c = F(),
    [l, u] = (0, Z.useState)(!1),
    d;
  t[0] === n ? (d = t[1]) : ((d = n.trim().length > 0 && !Se.test(n.trim())), (t[0] = n), (t[1] = d));
  let f = d,
    p;
  t[2] !== n || t[3] !== f || t[4] !== a
    ? ((p = n.trim().length > 0 && !f && a != null && n.trim().split(`@`)[1]?.toLowerCase() !== a),
      (t[2] = n),
      (t[3] = f),
      (t[4] = a),
      (t[5] = p))
    : (p = t[5]);
  let m = p,
    h = null;
  l && f
    ? (h = $.invalidEmail)
    : l && m
      ? (h = $.mismatchedDomain)
      : !f && !m && r && n.trim().length > 0 && (h = $.duplicateEmail);
  let g;
  t[6] === c ? (g = t[7]) : ((g = c.formatMessage($.email)), (t[6] = c), (t[7] = g));
  let _ = h != null,
    v;
  t[8] === c ? (v = t[9]) : ((v = c.formatMessage($.placeholder)), (t[8] = c), (t[9] = v));
  let y;
  t[10] === s ? (y = t[11]) : ((y = (e) => s(e.target.value)), (t[10] = s), (t[11] = y));
  let b;
  t[12] !== m || t[13] !== o
    ? ((b = () => {
        (u(!0), m && o());
      }),
      (t[12] = m),
      (t[13] = o),
      (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] !== i || t[16] !== n || t[17] !== g || t[18] !== _ || t[19] !== v || t[20] !== y || t[21] !== b
    ? ((x = (0, Q.jsx)(U, {
        variant: `outlined`,
        type: `email`,
        "aria-label": g,
        "aria-invalid": _,
        placeholder: v,
        value: n,
        disabled: i,
        onChange: y,
        onBlur: b,
      })),
      (t[15] = i),
      (t[16] = n),
      (t[17] = g),
      (t[18] = _),
      (t[19] = v),
      (t[20] = y),
      (t[21] = b),
      (t[22] = x))
    : (x = t[22]);
  let S;
  t[23] !== h || t[24] !== a
    ? ((S =
        h &&
        (0, Q.jsx)(`div`, {
          className: `text-xs text-danger`,
          children: (0, Q.jsx)(z, { ...h, values: { domain: a ?? `` } }),
        })),
      (t[23] = h),
      (t[24] = a),
      (t[25] = S))
    : (S = t[25]);
  let C;
  return (
    t[26] !== x || t[27] !== S
      ? ((C = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [x, S] })),
        (t[26] = x),
        (t[27] = S),
        (t[28] = C))
      : (C = t[28]),
    C
  );
}
function Je(e) {
  let t = (0, X.c)(20),
    { email: n, disabled: r, onRemove: i } = e,
    a = F(),
    o;
  t[0] === n ? (o = t[1]) : ((o = Se.test(n)), (t[0] = n), (t[1] = o));
  let s = o,
    c;
  t[2] !== n || t[3] !== s
    ? ((c = s ? null : (0, Q.jsx)(z, { ...$.invalidCsvEmail, values: { email: n } })),
      (t[2] = n),
      (t[3] = s),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] !== n || t[6] !== a
    ? ((l = a.formatMessage($.removeMember, { member: n })), (t[5] = n), (t[6] = a), (t[7] = l))
    : (l = t[7]);
  let u = `m-1 inline-flex cursor-interaction items-center gap-1 rounded-md border border-transparent px-1.5 py-1 text-sm select-none disabled:cursor-default ${s ? `bg-primary-soft text-default hover:border-default` : `bg-danger-surface text-danger`}`,
    d;
  t[8] === n ? (d = t[9]) : ((d = (0, Q.jsx)(`span`, { children: n })), (t[8] = n), (t[9] = d));
  let f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = (0, Q.jsx)(b, {})), (t[10] = f)) : (f = t[10]);
  let p;
  t[11] !== r || t[12] !== i || t[13] !== l || t[14] !== u || t[15] !== d
    ? ((p = (0, Q.jsxs)(`button`, {
        type: `button`,
        disabled: r,
        "aria-label": l,
        className: u,
        onClick: i,
        children: [d, f],
      })),
      (t[11] = r),
      (t[12] = i),
      (t[13] = l),
      (t[14] = u),
      (t[15] = d),
      (t[16] = p))
    : (p = t[16]);
  let m;
  return (
    t[17] !== c || t[18] !== p
      ? ((m = (0, Q.jsx)(P, { tooltipContent: c, side: `top`, children: p })),
        (t[17] = c),
        (t[18] = p),
        (t[19] = m))
      : (m = t[19]),
    m
  );
}
function Y(e) {
  let t = (0, X.c)(2),
    { busy: n } = e,
    r = n ? $.sending : $.send,
    i;
  return (t[0] === r ? (i = t[1]) : ((i = (0, Q.jsx)(z, { ...r })), (t[0] = r), (t[1] = i)), i);
}
function Ye(e) {
  return (
    e.status === 401 &&
    (e.errorCode === `workspace_subscription_delinquent` ||
      (e.errorCode == null && e.diagnosticError?.message === `Team has a delinquent subscription`))
  );
}
var X, Z, Q, Xe, Ze, $;
function Qe() {
  return (Qe = e(() => {
    ((X = m()),
      K(),
      q(),
      ve(),
      g(),
      k(),
      M(),
      l(),
      te(),
      ie(),
      (Z = o()),
      w(),
      d(),
      be(),
      ye(),
      G(),
      ce(),
      V(),
      O(),
      A(),
      me(),
      p(),
      S(),
      a(),
      j(),
      H(),
      C(),
      L(),
      oe(),
      r(),
      xe(),
      h(),
      Ne(),
      Ce(),
      (Q = c()),
      (Xe = s(W, { fallback: () => null })),
      (Ze = {
        member: `standard-user`,
        admin: `account-admin`,
        owner: `account-owner`,
        analytics_viewer: `analytics-viewer`,
      }),
      ($ = D({
        uploadTooltip: {
          id: `admin-invite.importCSVTooltip`,
          defaultMessage: `Upload a CSV file. Your file must include an email on each line.`,
          description: `Tooltip for import from CSV button and guidance on CSV format`,
        },
        csvPlaceholder: {
          id: `emailsTextarea.placeholder`,
          defaultMessage: `Type an email and press enter...`,
          description: `Placeholder for input to add emails`,
        },
        invalidCsvEmail: {
          id: `emailsTextarea.tooltipInvalidEmail`,
          defaultMessage: `"{email}" may not be a valid email`,
          description: `Tooltip for invalid email addresses`,
        },
        removeMember: {
          id: `emailsTextarea.removeMember`,
          defaultMessage: `Remove {member}`,
          description: `Remove a member from the list of members to be added`,
        },
        mismatchedDomain: {
          id: `admin-invite.mismatchedDomainWarning`,
          defaultMessage: `Enter an email address with the {domain} domain.`,
          description: `Error helper text under the single-email invite input when a workspace admin blurs the field after typing an address from a different domain than their own. {domain} is the lowercase domain of the current user's email.`,
        },
        trialAskAdmin: {
          id: `admin-invite.freeTrialInviteLimitWarningAskAdmin`,
          defaultMessage: `You can only invite 10 users while on an active free trial. Ask your workspace admin to upgrade for more.`,
          description: `Warning body in the Invite members modal. Shown to non-admin, non-owner workspace members when sending the current batch would exceed the free-trial invite cap.`,
        },
        upgrade: {
          id: `admin-invite.upgradeButton`,
          defaultMessage: `Upgrade`,
          description: `Call to action in the Invite members modal free-trial limit warning that navigates workspace admins and owners to billing.`,
        },
        email: {
          id: `admin-invite.inviteTableHeaderEmail`,
          defaultMessage: `Email`,
          description: `Label for email column of invite table header which shows the email of the user being invited`,
        },
        role: {
          id: `admin-invite.inviteTableHeaderRole`,
          defaultMessage: `Role`,
          description: `Label for role column of invite table header. A user's role indicates their permissions in the workspace.`,
        },
        seatType: {
          id: `WorkspaceMembers.seatType`,
          defaultMessage: `Seat type`,
          description: `Column header for workspace invitation seat types`,
        },
        member: {
          id: `admin-invite.inviteRoleMember`,
          defaultMessage: `Member`,
          description: `Label for role of the newly invited workspace user: workspace member`,
        },
        admin: {
          id: `admin-invite.inviteRoleAdmin`,
          defaultMessage: `Admin`,
          description: `Label for role of the newly invited workspace user: workspace administrator`,
        },
        owner: {
          id: `admin-invite.inviteRoleOwner`,
          defaultMessage: `Owner`,
          description: `Label for role of the newly invited workspace user: workspace owner`,
        },
        analyticsViewer: {
          id: `admin-invite.inviteRoleAnalyticsViewer`,
          defaultMessage: `Analytics viewer`,
          description: `Label for role of the newly invited workspace user: analytics viewer`,
        },
        standard: {
          id: `WorkspaceMembers.seatTypeStandard`,
          defaultMessage: `Standard`,
          description: `Standard Business seat label`,
        },
        premium: {
          id: `WorkspaceMembers.seatTypePremium`,
          defaultMessage: `Premium`,
          description: `Premium Business seat label`,
        },
        chatgpt: {
          id: `WorkspaceMembers.seatTypeChatgpt`,
          defaultMessage: `ChatGPT`,
          description: `Default workspace seat label`,
        },
        codex: {
          id: `WorkspaceMembers.seatTypeCodex`,
          defaultMessage: `Codex`,
          description: `Usage-based workspace seat label`,
        },
        placeholder: {
          id: `admin-invite.emailInputPlaceholder`,
          defaultMessage: `Email`,
          description: `Placeholder for email input`,
        },
        invalidEmail: {
          id: `admin-invite.invalidEmailWarning`,
          defaultMessage: `Please enter a valid email address.`,
          description: `Warning for invalid email`,
        },
        duplicateEmail: {
          id: `admin-invite.duplicateEmailWarning`,
          defaultMessage: `This email is a duplicate.`,
          description: `Warning for duplicate email`,
        },
        addMore: {
          id: `admin-invite.addEmailButton`,
          defaultMessage: `Add more`,
          description: `Button to add another email input`,
        },
        upload: {
          id: `admin-invite.importCSVButton`,
          defaultMessage: `Upload CSV`,
          description: `Name of upload from CSV button which permits uploading a CSV file of emails to invite`,
        },
        reupload: {
          id: `admin-invite.reimportCSVButton`,
          defaultMessage: `Re-upload CSV`,
          description: `Name of re-upload from CSV button which permits re-uploading a CSV file of emails to invite`,
        },
        send: {
          id: `admin-invite.inviteMemberInviteSubmitButton`,
          defaultMessage: `Send invites`,
          description: `The title of the invite member modal submit button`,
        },
        sending: {
          id: `admin-invite.inviteMemberInviteSubmitButtonLoading`,
          defaultMessage: `Sending invites...`,
          description: `Button label while inviting members which indicates that the job to send invites is in progress`,
        },
        addEmails: {
          id: `admin-invite.addEmailsFieldName.0`,
          defaultMessage: `Emails`,
          description: `Name of input for adding emails to workspace`,
        },
        remove: {
          id: `codex.businessOnboarding.removeInvite`,
          defaultMessage: `Remove invitation`,
          description: `Removes a recipient from Business workspace setup`,
        },
        inviteLimit: {
          id: `admin-invite.inviteLimitWarning`,
          defaultMessage: `You can invite up to {maxInvites} people at a time. Extra emails were not added.`,
          description: `Warning shown when pasted or imported invite emails exceed the maximum allowed for the flow.`,
        },
        fileTooLarge: {
          id: `admin-invite.fileTooLargeWarning`,
          defaultMessage: `File is too large. Please upload a CSV file smaller than {maxSize}.`,
          description: `Error when uploading a file that is too large`,
        },
        fileType: {
          id: `admin-invite.fileIncorrectTypeWarning`,
          defaultMessage: `Please upload a CSV file.`,
          description: `Error when uploading a file that is not a CSV`,
        },
        failure: {
          id: `admin-invite.inviteMessageFailure`,
          defaultMessage: `Unable to invite {emailsStr}`,
          description: `Message that shows which emails were unsuccessful at being invited`,
        },
        externalDescription: {
          id: `admin-invite.prohibitedExternalEmailDescription`,
          defaultMessage: `The following emails are not a part of your organization's verified domains:`,
          description: `Description text for error message`,
        },
        externalResolution: {
          id: `admin-invite.prohibitedExternalEmailResolution`,
          defaultMessage: `Either remove these emails, enable "Allow External Domain Invites" from your workspace settings, or verify these email domains.`,
          description: `Description text for error message`,
        },
        trialTitle: {
          id: `admin-invite.freeTrialInviteLimitWarningTitle`,
          defaultMessage: `Trial invite limit reached`,
          description: `Short title for the free-trial invite limit warning in the Invite members modal.`,
        },
        trialLimit: {
          id: `admin-invite.freeTrialInviteLimitWarning`,
          defaultMessage: `You can only invite 10 users while on an active free trial. Upgrade now to invite more.`,
          description: `Warning body in the Invite members modal. Shown to workspace owners and admins when sending the current batch would exceed the free-trial invite cap.`,
        },
        loading: {
          id: `codex.businessOnboarding.loadingInvites`,
          defaultMessage: `Loading invitation settings…`,
          description: `Business setup invitation policy loading state`,
        },
        loadError: {
          id: `codex.businessOnboarding.inviteSettingsError`,
          defaultMessage: `Unable to load invitation settings`,
          description: `Business setup invitation policy request failed`,
        },
        retry: {
          id: `codex.businessOnboarding.retryInvites`,
          defaultMessage: `Retry`,
          description: `Retries loading invitation settings`,
        },
        sendError: {
          id: `codex.businessOnboarding.inviteSendError`,
          defaultMessage: `Some invitations could not be sent. Please try again.`,
          description: `Invitation transport failed and the editable recipients are preserved for retry`,
        },
        fileReadError: {
          id: `codex.businessOnboarding.inviteFileReadError`,
          defaultMessage: `Unable to read this CSV file. Please try again.`,
          description: `The chosen invitation file could not be read`,
        },
      })));
  }))();
}
export { Pe as n, Qe as r, Y as t };
//# sourceMappingURL=form-64562a4532a4.js.map
