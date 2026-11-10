import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  ADt as r,
  Bot as i,
  CPt as a,
  Cot as o,
  Ext as s,
  Fat as c,
  GE as l,
  IDt as u,
  Iot as d,
  Ixt as f,
  JDt as p,
  Lot as m,
  MSt as h,
  NSt as g,
  Pat as _,
  Pxt as v,
  Rot as y,
  Rxt as b,
  SPt as x,
  TJ as S,
  VDt as ee,
  Vxt as C,
  WE as te,
  Wat as w,
  Xot as T,
  Yot as E,
  _O as D,
  _xt as O,
  cV as ne,
  fO as k,
  gO as re,
  hot as ie,
  hrt as ae,
  ixt as oe,
  jDt as A,
  lO as j,
  lot as M,
  mO as N,
  nSt as se,
  oO as ce,
  pW as le,
  sMt as P,
  sO as ue,
  t3 as de,
  tMt as fe,
  vO as F,
  vrt as pe,
  vzt as me,
  wot as I,
  xMt as he,
  yAt as ge,
  yzt as _e,
  zat as ve,
  zxt as ye,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bar as be,
  Bkr as xe,
  Bmt as L,
  CV as Se,
  DV as Ce,
  Dor as we,
  Dun as Te,
  EV as Ee,
  Ear as R,
  Fin as z,
  Iin as De,
  Jmt as Oe,
  Kmt as ke,
  OV as Ae,
  Oln as je,
  Oor as Me,
  Psn as Ne,
  QDr as Pe,
  QMr as Fe,
  SV as Ie,
  Sun as B,
  Umt as Le,
  Vkr as Re,
  XDr as ze,
  XMr as Be,
  XR as Ve,
  Xmn as He,
  YR as Ue,
  Ymn as We,
  Ymr as Ge,
  _B as Ke,
  aV as qe,
  aor as Je,
  bB as Ye,
  bun as Xe,
  c$n as Ze,
  cor as Qe,
  dB as $e,
  dIn as et,
  ean as tt,
  ehr as nt,
  fun as rt,
  hB as it,
  iV as at,
  inn as ot,
  kV as st,
  kln as ct,
  lV as lt,
  mB as ut,
  nV as dt,
  oV as ft,
  pB as V,
  pIn as pt,
  qsn as mt,
  rV as H,
  rcn as ht,
  rnn as U,
  s$n as gt,
  tNr as W,
  tan as _t,
  uB as vt,
  uV as yt,
  wor as bt,
  wsn as xt,
  xB as St,
  xsn as Ct,
  xun as wt,
  yB as Tt,
} from "./app-initial-5851df3f6cb1.js";
import { a as Et, i as Dt, t as Ot } from "./state-23e2d7b7e609.js";
import { n as kt, t as At } from "./avatar-ed18f22a2837.js";
import { i as jt, n as Mt } from "./profile-card-24cf744f537b.js";
import { n as Nt, t as Pt } from "./access-list-99033c7522ef.js";
import { i as Ft, r as It } from "./member-count-5e188d46464b.js";
import { t as Lt } from "./modal-footer-8c17ec58d94e.js";
import { t as Rt } from "./modal-permission-dropdown-75a4787ca1b8.js";
import { o as zt, s as Bt } from "./recipient-picker-caea7e148b2f.js";
import { a as Vt, n as Ht, r as Ut, t as Wt } from "./access-dropdown-62f61b3449da.js";
import { n as Gt, t as Kt } from "./role-label-47a44c95e79a.js";
import { c as qt, f as G, t as Jt } from "./model-a4d407e1a4c5.js";
import { t as Yt } from "./permission-dropdown-e25fe01e48c3.js";
import { i as Xt, n as Zt, r as Qt, t as $t } from "./request-share-dialog-d0f9fc49e4bb.js";
import { a as en, i as tn, n as nn, o as rn, r as an, s as on } from "./suggestions-86fe09486873.js";
function sn(e) {
  let t = (0, un.c)(16),
    { pageId: n, inheritedAccess: r } = e,
    { space: i } = ye(Ne, n),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i?.backing_type === `drive` && i.name.trim() !== `` ? i : null), (t[0] = i), (t[1] = a));
  let o = a,
    s = r?.complete ? r.sources : void 0,
    c;
  t[2] !== s || t[3] !== o?.id
    ? ((c = s?.filter((e) => e.source?.kind === `space` && e.source.id === o?.id)),
      (t[2] = s),
      (t[3] = o?.id),
      (t[4] = c))
    : (c = t[4]);
  let l = c,
    u;
  t[5] !== o || t[6] !== l
    ? ((u = o != null && (0, K.jsx)(ln, { space: o, grants: l?.length ? l : void 0 })),
      (t[5] = o),
      (t[6] = l),
      (t[7] = u))
    : (u = t[7]);
  let d;
  if (t[8] !== s || t[9] !== o?.id) {
    let e;
    (t[11] === s
      ? (e = t[12])
      : ((e = (e) =>
          (0, K.jsx)(
            cn,
            { spaceId: e.id, grants: s?.filter((t) => t.source?.kind === `space` && t.source.id === e.id) },
            e.id,
          )),
        (t[11] = s),
        (t[12] = e)),
      (d = (0, dn.default)(
        s?.flatMap((e) => (e.source?.kind === `space` && e.source.id !== o?.id ? [e.source] : [])),
        `id`,
      ).map(e)),
      (t[8] = s),
      (t[9] = o?.id),
      (t[10] = d));
  } else d = t[10];
  let f;
  return (
    t[13] !== u || t[14] !== d
      ? ((f = (0, K.jsxs)(K.Fragment, { children: [u, d] })), (t[13] = u), (t[14] = d), (t[15] = f))
      : (f = t[15]),
    f
  );
}
function cn(e) {
  let t = (0, un.c)(9),
    { spaceId: n, grants: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = { enabled: !1 }), (t[0] = i)) : (i = t[0]);
  let { data: a, error: o } = ye(mt, n, i),
    s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = { enabled: !1 }), (t[1] = s)) : (s = t[1]);
  let { data: c } = C(ht, s);
  if (o instanceof ae && [403, 404, 410].includes(o.status)) return null;
  let l;
  t[2] !== a || t[3] !== n || t[4] !== c?.items
    ? ((l = a ?? c?.items.find((e) => e.id === n)), (t[2] = a), (t[3] = n), (t[4] = c?.items), (t[5] = l))
    : (l = t[5]);
  let u = l;
  if (u == null) return null;
  let d;
  return (
    t[6] !== r || t[7] !== u
      ? ((d = (0, K.jsx)(ln, { space: u, grants: r })), (t[6] = r), (t[7] = u), (t[8] = d))
      : (d = t[8]),
    d
  );
}
function ln(e) {
  let t = (0, un.c)(14),
    { space: n, grants: r } = e,
    i = r?.[0]?.role,
    a;
  t[0] === n.id
    ? (a = t[1])
    : ((a = (0, K.jsx)(U, { spaceId: n.id, variant: `avatar` })), (t[0] = n.id), (t[1] = a));
  let o;
  t[2] === n.name
    ? (o = t[3])
    : ((o = (0, K.jsx)(u, {
        id: `codex.pages.sharing.spacePeople`,
        defaultMessage: `People in {spaceName}`,
        description: `Uneditable access row for members of a Space whose permissions apply to this Page`,
        values: { spaceName: n.name },
      })),
      (t[2] = n.name),
      (t[3] = o));
  let s;
  t[4] === r
    ? (s = t[5])
    : ((s =
        r != null &&
        (0, K.jsx)(u, {
          id: `codex.pages.sharing.inheritedSpaceAccess`,
          defaultMessage: `Access inherited from this space`,
          description: `Secondary text explaining why Space members can access a Page; the server does not provide a member count. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
      (t[4] = r),
      (t[5] = s));
  let c;
  t[6] !== r || t[7] !== i
    ? ((c = (0, K.jsx)(`span`, {
        className: `pe-2 text-sm text-tertiary`,
        children:
          i != null && r?.every((e) => e.role === i)
            ? (0, K.jsx)(Kt, { permission: i })
            : (0, K.jsx)(u, {
                id: `codex.space.page.shareDialog.spaceAccess`,
                defaultMessage: `Has access`,
                description: `Permission label for the uneditable Space-wide access row in a Page sharing dialog`,
              }),
      })),
      (t[6] = r),
      (t[7] = i),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] !== a || t[10] !== o || t[11] !== s || t[12] !== c
      ? ((l = (0, K.jsx)(Ee, { avatar: a, label: o, secondaryLabel: s, trailingContent: c })),
        (t[9] = a),
        (t[10] = o),
        (t[11] = s),
        (t[12] = c),
        (t[13] = l))
      : (l = t[13]),
    l
  );
}
var un, dn, K;
function fn() {
  return (fn = e(() => {
    ((un = me()), (dn = t(P(), 1)), v(), A(), Ce(), Gt(), pe(), ot(), Ct(), (K = he()));
  }))();
}
function pn(e, t, n) {
  let r = e.get(we),
    i = r == null ? null : Me(e, r, void 0, e.get(Fe).accountUserId ?? null),
    a = !1;
  return (
    i?.signal.addEventListener(`abort`, () => i.stop(), { once: !0 }),
    (r) => {
      if (!a && ((a = !0), i?.stop(), !(i == null || i.signal.aborted)))
        try {
          Pe(e, Xe, {
            target:
              t.type === `page`
                ? rt.CODEX_SPACES_CREATION_TARGET_PAGE
                : rt.CODEX_SPACES_CREATION_TARGET_SPACE,
            operation: {
              permission_mutation: wt.CODEX_SPACES_SHARING_OPERATION_PERMISSIONS,
              link_policy_mutation: wt.CODEX_SPACES_SHARING_OPERATION_LINK_POLICY,
              mixed_mutation: wt.CODEX_SPACES_SHARING_OPERATION_MIXED,
            }[n],
            outcome: {
              confirmed: B.CODEX_SPACES_SHARING_OUTCOME_CONFIRMED,
              unknown: B.CODEX_SPACES_SHARING_OUTCOME_UNKNOWN,
              partially_confirmed: B.CODEX_SPACES_SHARING_OUTCOME_PARTIALLY_CONFIRMED,
              cancelled: B.CODEX_SPACES_SHARING_OUTCOME_CANCELLED,
            }[r],
            ...(t.type === `page` ? ct(e, t.id) : { spaceId: t.id }),
          });
        } catch {}
    }
  );
}
function mn() {
  return (mn = e(() => {
    (Te(), W(), ze(), bt(), je());
  }))();
}
function hn(e, t) {
  let n = crypto.randomUUID(),
    r = w({ attributes: Cn(t, n), name: `pages.sharing.attempt` }),
    i = r?.trace ?? void 0,
    a = { current_access: 0, confirmation: 0 },
    o = 0,
    s = !1,
    c = !1,
    l = () => {
      s && o === 0 && !c && ((c = !0), r?.finish(void 0, { outcome: `expected`, reason: `dialog_closed` }));
    };
  return {
    dispose: () => {
      ((s = !0), l());
    },
    nextRetryOrdinal: (e) => {
      let t = q(a[e]);
      return ((a[e] += 1), t);
    },
    startPhase: ({ operation: r, phase: a, retryOrdinal: s, searchMode: c, recipientLookupScope: u }) => {
      let d = performance.now(),
        f = {
          ...t,
          operation: r,
          phase: a,
          retry_ordinal: s,
          search_mode: c,
          ...(u == null ? {} : { recipient_lookup_scope: u }),
        },
        p = {
          backingType: t.backing_type,
          operation: r,
          phase: a,
          retryOrdinal: s,
          searchMode: c,
          targetType: t.target_type,
          ...(u == null ? {} : { recipientLookupScope: u }),
        };
      e.count(`codex_pages`, `sharing_phase_started`, f);
      let m = J(i, t, n, r, a, s, c, u),
        h = m?.trace ?? _n(i),
        g = !1,
        _;
      ((o += 1), vn(`started`, p, n, h));
      let v = (t, r, i, a) => {
          if (g) return;
          ((g = !0), --o);
          let s = Math.max(0, performance.now() - d),
            c = {
              ...f,
              ambiguous_commit: i ? `true` : `false`,
              outcome: t,
              reason: r,
              roster_size_bucket: Sn(a),
            };
          (e.count(`codex_pages`, `sharing_phase_result`, c),
            e.hist(`codex_pages`, `sharing_phase_latency_ms`, c, s),
            vn(
              `finished`,
              { ...p, ambiguousCommit: i, outcome: t, reason: r, rosterSizeBucket: Sn(a) },
              n,
              h,
              s,
              _,
            ),
            m?.finish(void 0, { outcome: xn(t), reason: r }),
            l());
        },
        y = wn(h);
      return {
        requestOptions:
          y == null
            ? {}
            : {
                additionalHeaders: y,
                onResponseHeaders: (e) => {
                  ((_ = e.get(`x-request-id`) ?? void 0),
                    _ != null && vn(`request_correlated`, p, n, h, void 0, _));
                },
              },
        complete: (e) => v(`success`, `none`, !1, e),
        fail: (e, t = !1) => v(`failure`, e, t),
        cancel: (e = `dialog_closed`, t = !1) => v(`cancelled`, e, t),
      };
    },
  };
}
function gn(e, t, n, r, i = []) {
  let a = performance.now(),
    o = [...new Set(i)].map((n) =>
      We(e, {
        action: n,
        documentType: t.target_type,
        backingType: t.backing_type,
        completionMilestone: `ui_confirmed`,
        startedAtMs: a,
      }),
    ),
    s = !1,
    c = [],
    l = !1,
    u = !1,
    d = !1,
    f,
    p = n?.telemetry.nextRetryOrdinal(`confirmation`),
    m = new Set(),
    h = (e) => {
      if ((e === `mutation` && (d = !0), n == null || p == null)) return null;
      let t = n.telemetry.startPhase({
          operation: n.operation,
          phase: e,
          retryOrdinal: p,
          searchMode: `none`,
        }),
        r = { measurement: t, phase: e };
      return (
        m.add(r),
        {
          requestOptions: t.requestOptions,
          complete: (e) => {
            (m.delete(r), t.complete(e));
          },
          fail: (n, i) => {
            (m.delete(r), e !== `roster_refresh` && (f = n), t.fail(n, i));
          },
          cancel: (e, n) => {
            (m.delete(r), t.cancel(e, n));
          },
        }
      );
    },
    g = h(`durable_completion`),
    _ = (n, r) => {
      if (u) return;
      ((u = !0),
        clearTimeout(b),
        document.removeEventListener(`visibilitychange`, v),
        document.removeEventListener(`freeze`, y),
        window.removeEventListener(`pagehide`, y, !0));
      let i = Math.max(0, performance.now() - a),
        c = { ...t, outcome: n, reason: r, completion_mode: s ? `submitted` : `completed` };
      (document.visibilityState === `visible`
        ? n !== `excluded` && i >= Tn && ((c.outcome = `timeout`), (c.reason = `deadline`))
        : ((c.outcome = `excluded`), (c.reason = `backgrounded`)),
        e.count(`codex_pages`, `sharing_change_result`, c));
      for (let e of o)
        c.outcome === `timeout` || c.outcome === `excluded`
          ? e.finish(c.outcome)
          : c.outcome === `failure`
            ? e.finish(`failure`)
            : c.outcome === `partial_failure`
              ? e.finish(`unobserved`)
              : c.outcome === `cancelled` &&
                (r === `superseded`
                  ? e.finish(`superseded`)
                  : r === `no_changes`
                    ? e.finish(`excluded`)
                    : e.finish(`unobserved`));
      c.outcome === `success` && e.hist(`codex_pages`, `sharing_change_latency_ms`, c, i);
    },
    v = () => {
      document.visibilityState !== `visible` && _(`excluded`, `backgrounded`);
    },
    y = () => _(`excluded`, `suspended`),
    b = setTimeout(() => _(`timeout`, `deadline`), Tn);
  return (
    document.addEventListener(`visibilitychange`, v),
    document.addEventListener(`freeze`, y),
    window.addEventListener(`pagehide`, y, !0),
    e.count(`codex_pages`, `sharing_change_started`, t),
    v(),
    {
      markSubmitted: () => {
        for (let e of o)
          try {
            e.milestone(`operation_accepted`);
          } catch {}
      },
      markAccepted: (e) => {
        s = !0;
        for (let e of o) e.milestone(`operation_accepted`);
        e == null ? g?.cancel(`accepted_only`, !0) : c.push(e);
      },
      complete: () => {
        l = !s;
        for (let e of o) s ? e.finish(`unobserved`) : e.milestone(`operation_committed`);
        (r?.(s ? `unknown` : `confirmed`),
          c.length > 0
            ? Promise.allSettled(c).then((e) => {
                let t = e.find((e) => e.status === `rejected`);
                t?.reason instanceof Error && t.reason.name === `AbortError`
                  ? g?.cancel(`context_changed`, !0)
                  : t == null
                    ? g?.complete()
                    : g?.fail(`request_failed`, !0);
              })
            : g?.complete(),
          _(`success`, `none`));
      },
      paintOpportunity: () => {
        if (l) for (let e of o) e.milestone(`ui_confirmed`);
      },
      fail: (e = !1) => {
        r?.(e ? `partially_confirmed` : `unknown`);
        for (let e of m)
          e.phase !== `durable_completion` &&
            e.phase !== `roster_refresh` &&
            (e.measurement.fail(yn(e.phase), d && e.phase !== `preflight`), (f = yn(e.phase)), m.delete(e));
        (g?.fail(f ?? (d ? `request_failed` : `preflight_failed`), d),
          _(e ? `partial_failure` : `failure`, `save_failed`));
      },
      cancel: (e = `dialog_closed`) => {
        if (e === `dialog_closed` || e === `context_changed`) for (let e of o) e.dispose();
        else if (e === `superseded`) for (let e of o) e.finish(`superseded`);
        if (e !== `dialog_closed` && e !== `superseded`) {
          for (let t of m) (t.measurement.cancel(e, d), m.delete(t));
          r?.(`cancelled`);
        }
        _(`cancelled`, e);
      },
      startPhase: h,
    }
  );
}
function _n(e) {
  let t = e?.traceparent.split(`-`)[1];
  if (t != null) return { traceparent: `00-${t}-${bn(8)}-01`, tracestate: e?.tracestate };
}
function vn(e, t, n, r, i, o) {
  r != null &&
    a.info(`Pages sharing phase`, {
      safe: {
        ...t,
        buildFlavor: `prod`,
        ...(i == null ? {} : { durationMs: i }),
        host: `electron`,
        state: e,
      },
      sensitive: {
        attemptId: n,
        ...(o == null ? {} : { requestId: o }),
        traceId: r.traceparent.split(`-`)[1],
      },
    });
}
function yn(e) {
  switch (e) {
    case `current_access`:
      return `access_failed`;
    case `recipient_lookup`:
      return `search_failed`;
    case `preflight`:
      return `preflight_failed`;
    case `mutation`:
      return `request_failed`;
    case `durable_completion`:
    case `roster_refresh`:
    case `required_reconciliation`:
      return `reconciliation_failed`;
  }
}
function bn(e) {
  return [...crypto.getRandomValues(new Uint8Array(e))].map((e) => e.toString(16).padStart(2, `0`)).join(``);
}
function q(e) {
  return e === 0 ? `initial` : e === 1 ? `retry_1` : `retry_2_plus`;
}
function xn(e) {
  return e === `success` ? `success` : e === `cancelled` ? `aborted` : `failure`;
}
function Sn(e) {
  return e == null ? `unknown` : e === 0 ? `empty` : e <= 10 ? `1_10` : e <= 100 ? `11_100` : `101_plus`;
}
function J(e, t, n, r, i, a, o, s) {
  return e == null
    ? null
    : w({
        attributes: {
          ...Cn(t, n),
          "sharing.operation": r,
          "sharing.phase": i,
          "sharing.retry_ordinal": a,
          "sharing.search_mode": o,
          ...(s == null ? {} : { "sharing.recipient_lookup_scope": s }),
        },
        name: `pages.sharing.${i}`,
        trace: e,
      });
}
function Cn(e, t) {
  return {
    "sharing.attempt_id": t,
    "sharing.backing_type": e.backing_type,
    "sharing.target_type": e.target_type,
  };
}
function wn(e) {
  if (e != null)
    return { traceparent: e.traceparent, ...(e.tracestate == null ? {} : { tracestate: e.tracestate }) };
}
var Tn;
function En() {
  return (En = e(() => {
    (He(), ve(), x(), (Tn = 3e4));
  }))();
}
function Dn(e) {
  let t = (0, On.c)(25),
    { target: r, teamName: i, onCancel: a, onConfirm: o } = e,
    s = ye(xt, r.type === `page` ? r.id : null),
    c;
  t[0] === a
    ? (c = t[1])
    : ((c = (e) => {
        e || a();
      }),
      (t[0] = a),
      (t[1] = c));
  let l;
  t[2] === o
    ? (l = t[3])
    : ((l = (e) => {
        (e.preventDefault(), e.stopPropagation(), o());
      }),
      (t[2] = o),
      (t[3] = l));
  let d;
  t[4] === i
    ? (d = t[5])
    : ((d = (0, Y.jsx)(D, {
        className: `text-heading-lg leading-7 font-semibold wrap-anywhere select-none`,
        variant: `promotional`,
        children: i
          ? (0, Y.jsx)(u, {
              id: `codex.space.driveSharing.reduceTeamAccessTitle`,
              defaultMessage: `Change access for the ‘{teamName}’ team?`,
              description: `Confirmation title before reducing one Team's Editor access to a Page or Space. teamName is the Team's display name. The current user may lose editing access.`,
              values: { teamName: i },
            })
          : (0, Y.jsx)(u, {
              id: `codex.space.driveSharing.reduceAccessTitle`,
              defaultMessage: `Change access?`,
              description: `Confirmation title before reducing Editor access to a Page or Space for a workspace, multiple Teams, or a Team whose display name is unavailable. The current user may lose editing access.`,
            }),
      })),
      (t[4] = i),
      (t[5] = d));
  let f = s?.document_type ?? `page`,
    p;
  t[6] !== f || t[7] !== r.type
    ? ((p = (0, Y.jsx)(re, {
        className: `text-onboarding-body text-secondary select-none`,
        children: (0, Y.jsx)(u, {
          id: `codex.space.driveSharing.reduceOwnEditingAccessDescription.byDocumentType`,
          defaultMessage: `You may lose editing access to this {kind, select, page {{documentType, select, granola_presentation {slide} granola_workbook {sheet} other {page}}} other {space}} and items that inherit access from it. Do you want to continue?`,
          description: `Warning before reducing or removing Team or workspace Editor access to a Page or Space, selected by kind. The current user may lose their own editing access. The server does not identify every source of their access or return an affected-item count. documentType selects slide, sheet, or page for the current document.`,
          values: { documentType: f, kind: r.type },
        }),
      })),
      (t[6] = f),
      (t[7] = r.type),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== d || t[10] !== p
    ? ((m = (0, Y.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [d, p] })),
      (t[9] = d),
      (t[10] = p),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Y.jsx)(n, {
        className: `w-full`,
        color: `primary`,
        size: `promotionalAction`,
        type: `submit`,
        children: (0, Y.jsx)(u, {
          id: `codex.space.driveSharing.confirmReduceAccess`,
          defaultMessage: `Update access`,
          description: `Confirm saving the pending Page or Space sharing changes after a warning about possible loss of the current user's editing access`,
        }),
      })),
      (t[12] = h))
    : (h = t[12]);
  let g;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Y.jsx)(u, {
        id: `codex.space.driveSharing.cancelReduceAccess`,
        defaultMessage: `Cancel`,
        description: `Close the access reduction warning without saving; keep the pending sharing changes in the Page or Space sharing dialog`,
      })),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] === a
    ? (_ = t[15])
    : ((_ = (0, Y.jsxs)(ue, {
        className: `flex-col`,
        children: [
          h,
          (0, Y.jsx)(n, {
            className: `w-full`,
            color: `ghostSecondary`,
            size: `promotionalLink`,
            type: `button`,
            onClick: a,
            children: g,
          }),
        ],
      })),
      (t[14] = a),
      (t[15] = _));
  let v;
  t[16] !== m || t[17] !== _
    ? ((v = (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-8 p-6 pt-14 text-center sm:p-10`,
        children: [m, _],
      })),
      (t[16] = m),
      (t[17] = _),
      (t[18] = v))
    : (v = t[18]);
  let y;
  t[19] !== v || t[20] !== l
    ? ((y = (0, Y.jsx)(ce, { as: `form`, variant: `chatgpt`, onSubmit: l, children: v })),
      (t[19] = v),
      (t[20] = l),
      (t[21] = y))
    : (y = t[21]);
  let b;
  return (
    t[22] !== c || t[23] !== y
      ? ((b = (0, Y.jsx)(N, {
          open: !0,
          variant: `centeredText`,
          size: `feature`,
          onOpenChange: c,
          children: y,
        })),
        (t[22] = c),
        (t[23] = y),
        (t[24] = b))
      : (b = t[24]),
    b
  );
}
var On, Y;
function kn() {
  return (kn = e(() => {
    ((On = me()), v(), A(), de(), F(), k(), Ct(), (Y = he()));
  }))();
}
function An(e) {
  let t = e.inherited_workspace_link_access;
  if (e.workspace_id != null && t?.complete === !0)
    return jn.findLast((e) => t.sources.some((t) => Jt.folder[t.role] === e));
}
var jn;
function Mn() {
  return (Mn = e(() => {
    (G(), (jn = Object.values(Jt.folder)));
  }))();
}
function Nn(e) {
  let t = (0, In.c)(74),
    {
      sharing: n,
      supportsCommenter: r,
      directRole: i,
      hasDirectOverride: a,
      disabled: o,
      isWorkspace: c,
      workspaceName: l,
      workspaceLinkSharingAvailable: d,
      onChange: f,
      onRetry: p,
      onClose: m,
    } = e,
    h = s(),
    g = n.inherited_workspace_link_access,
    _ = c && g?.complete !== !0,
    v,
    y,
    b,
    x,
    S,
    ee,
    C,
    te,
    w,
    T;
  if (
    t[0] !== i ||
    t[1] !== o ||
    t[2] !== a ||
    t[3] !== g?.sources ||
    t[4] !== c ||
    t[5] !== h ||
    t[6] !== f ||
    t[7] !== m ||
    t[8] !== p ||
    t[9] !== n ||
    t[10] !== r ||
    t[11] !== _ ||
    t[12] !== d ||
    t[13] !== l
  ) {
    b = An(n);
    let e = b == null ? void 0 : qt(b, `folder`),
      s = g?.sources.filter((t) => t.role === e),
      E = (s?.find(Fn) ?? s?.[0])?.source;
    S = E == null ? void 0 : `/${E.kind === `page` ? `space` : `spaces`}/${encodeURIComponent(E.id)}`;
    let D =
      b == null
        ? void 0
        : (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(yt.Separator, {}),
              (0, X.jsx)(yt.Item, {
                children: (0, X.jsx)(`span`, {
                  className: `flex max-w-64 min-w-0 flex-1 flex-col`,
                  children: (0, X.jsx)(yt.Description, {
                    children:
                      l == null
                        ? (0, X.jsx)(u, {
                            id: `codex.pages.sharing.workspaceLink.minimum.unnamedWorkspace.helpText`,
                            defaultMessage: `People in your workspace can still {role, select, viewer {view} commenter {comment} other {edit}} through {kind, select, space {this space} page {a parent page} other {a parent}}`,
                            description: `Visible explanation inside Page and Space link-access menus for disabled lower-access options. The parent sets minimum access. Role is viewer, commenter, or editor. Kind identifies a disclosed space or parent page; other means the source is hidden. The workspace name is unavailable.`,
                            values: { role: e, kind: E?.kind },
                          })
                        : (0, X.jsx)(u, {
                            id: `codex.pages.sharing.workspaceLink.minimum.namedWorkspace.helpText`,
                            defaultMessage: `People at {workspaceName} can still {role, select, viewer {view} commenter {comment} other {edit}} through {kind, select, space {this space} page {a parent page} other {a parent}}`,
                            description: `Visible explanation inside Page and Space link-access menus for disabled lower-access options. WorkspaceName is the organization name. The parent sets minimum access. Role is viewer, commenter, or editor. Kind identifies a disclosed space or parent page; other means the source is hidden.`,
                            values: { workspaceName: l, role: e, kind: E?.kind },
                          }),
                  }),
                }),
              }),
              S != null &&
                (0, X.jsx)(yt.Item, {
                  onSelect: () => {
                    (m(), h(S));
                  },
                  children: (0, X.jsx)(u, {
                    id: `codex.pages.sharing.workspaceLink.source.open.label`,
                    defaultMessage: `{kind, select, space {Open space} other {Open parent page}}`,
                    description: `Menu link in Page and Space sharing that opens a readable ancestor resource where the user can access its normal sharing controls. Kind is space or page. It does not edit permissions.`,
                    values: { kind: E?.kind },
                  }),
                }),
            ],
          });
    ((y = (0, X.jsx)(u, {
      id: `codex.pages.sharing.workspaceLink.source.attribution.label`,
      defaultMessage: `{kind, select, space {From space} page {From parent page} other {From parent}}`,
      description: `Short attribution below effective workspace link access in Page and Space sharing. Kind identifies the ancestor supplying the displayed role. Other means the source is undisclosed and cannot be linked. Hidden when the page has a stronger direct grant.`,
      values: { kind: E?.kind },
    })),
      (x = jn.findLast((e) => e === i || e === b)));
    let O = jn
      .filter((e) => (r || e !== `role-library-folder-commenter`) && (n.allowed_roles.includes(e) || e === b))
      .map((e) => ({ value: e, disabled: !d || (b != null && jn.indexOf(e) < jn.indexOf(b)) }));
    ((v = Ae),
      (w = `link`),
      t[24] !== p || t[25] !== _
        ? ((T =
            _ &&
            (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-3`,
                  children: [
                    (0, X.jsx)(`p`, {
                      className: `text-sm text-secondary select-none`,
                      children: (0, X.jsx)(u, {
                        id: `codex.pages.sharing.workspaceLink.unknown.helpText`,
                        defaultMessage: `Couldn’t load link access`,
                        description: `Warning in Page and Space sharing when effective workspace link access could not be verified. Retry refreshes the read. This does not mean access is restricted.`,
                      }),
                    }),
                    (0, X.jsx)(ge, {
                      color: `secondary`,
                      variant: `ghost`,
                      size: `sm`,
                      onClick: p,
                      children: (0, X.jsx)(u, {
                        id: `codex.pages.sharing.workspaceLink.retry.action`,
                        defaultMessage: `Retry`,
                        description: `Button beside a link-access loading error in Page and Space sharing. Retries reading permissions without submitting a change.`,
                      }),
                    }),
                  ],
                }),
                (0, X.jsx)(`p`, {
                  className: `text-xs text-secondary select-none`,
                  children: (0, X.jsx)(u, {
                    id: `codex.pages.sharing.workspaceLink.direct.heading`,
                    defaultMessage: `Set on this page`,
                    description: `Label above the known direct link-access setting when parent access could not be loaded. It describes only the setting on this page, including a Space home page, not all effective access.`,
                  }),
                }),
              ],
            })),
          (t[24] = p),
          (t[25] = _),
          (t[26] = T))
        : (T = t[26]),
      (ee = `flex items-center justify-between gap-3`));
    let k;
    t[27] === _
      ? (k = t[28])
      : ((k = _
          ? (0, X.jsx)(u, {
              id: `codex.pages.sharing.workspaceLink.noDirect.label`,
              defaultMessage: `No workspace link`,
              description: `Disabled link-access label under Set on this page in Page and Space sharing when no direct workspace grant exists and parent access is unknown. It does not mean the page is private.`,
            })
          : (0, X.jsx)(u, {
              id: `codex.pages.sharing.onlyInvited`,
              defaultMessage: `Only those invited`,
              description: `Page and Space link-access option limiting access to existing collaborators`,
            })),
        (t[27] = _),
        (t[28] = k));
    let re = o || _,
      ie;
    t[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ie = (0, X.jsx)(le, {})), (t[29] = ie))
      : (ie = t[29]);
    let ae = b != null,
      oe;
    t[30] === ae
      ? (oe = t[31])
      : ((oe = { value: `restricted`, mode: `restricted`, icon: ie, disabled: ae }),
        (t[30] = ae),
        (t[31] = oe));
    let A;
    t[32] !== c || t[33] !== O || t[34] !== d
      ? ((A = c
          ? [
              {
                value: `workspace`,
                mode: `workspace`,
                icon: (0, X.jsx)(ne, {}),
                disabled: O.length === 0,
                hidden: !d,
              },
            ]
          : []),
        (t[32] = c),
        (t[33] = O),
        (t[34] = d),
        (t[35] = A))
      : (A = t[35]);
    let j;
    t[36] !== oe || t[37] !== A ? ((j = [oe, ...A]), (t[36] = oe), (t[37] = A), (t[38] = j)) : (j = t[38]);
    let M = x == null ? `restricted` : `workspace`,
      N;
    t[39] === l
      ? (N = t[40])
      : ((N =
          l == null
            ? (0, X.jsx)(u, {
                id: `codex.pages.sharing.workspaceLink.audience.unnamedWorkspace.label`,
                defaultMessage: `Anyone in this workspace`,
                description: `Workspace-wide link-access option in Page and Space sharing when the organization name is unavailable. This identifies who can open the link.`,
              })
            : (0, X.jsx)(u, {
                id: `codex.pages.sharing.workspaceLink.audience.namedWorkspace.label`,
                defaultMessage: `Anyone at {workspaceName}`,
                description: `Workspace-wide link-access option in Page and Space sharing. WorkspaceName is the organization name, such as Acme. This identifies who can open the link.`,
                values: { workspaceName: l },
              })),
        (t[39] = l),
        (t[40] = N));
    let se;
    (t[41] !== i || t[42] !== o || t[43] !== b || t[44] !== f || t[45] !== O || t[46] !== _
      ? ((se = (e) => {
          !_ &&
            !o &&
            (e === `restricted`
              ? (b ?? f(null))
              : (b ?? f(O.find((e) => e.value === i)?.value ?? O[0]?.value ?? null)));
        }),
        (t[41] = i),
        (t[42] = o),
        (t[43] = b),
        (t[44] = f),
        (t[45] = O),
        (t[46] = _),
        (t[47] = se))
      : (se = t[47]),
      t[48] !== D ||
      t[49] !== j ||
      t[50] !== M ||
      t[51] !== N ||
      t[52] !== se ||
      t[53] !== k ||
      t[54] !== re ||
      t[55] !== l
        ? ((C = (0, X.jsx)(Wt, {
            restrictedLabel: k,
            disabled: re,
            footer: D,
            options: j,
            value: M,
            workspaceName: l,
            workspaceLabel: N,
            onChange: se,
          })),
          (t[48] = D),
          (t[49] = j),
          (t[50] = M),
          (t[51] = N),
          (t[52] = se),
          (t[53] = k),
          (t[54] = re),
          (t[55] = l),
          (t[56] = C))
        : (C = t[56]),
      (te =
        x != null &&
        (!d && !(b != null && a)
          ? (0, X.jsx)(Kt, { permission: qt(x, `folder`) })
          : (0, X.jsx)(Rt, {
              disabled: o || _,
              footer: D,
              variant: `inline`,
              options: O,
              value: x,
              renderLabel: Pn,
              onChange: (e) => {
                !_ && !o && O.some((t) => t.value === e && !t.disabled) && f(e === b ? null : e);
              },
              removeLabel: (0, X.jsx)(u, {
                id: `codex.pages.sharing.workspaceLink.source.useAccess.action`,
                defaultMessage: `{kind, select, space {Use space access} page {Use parent page access} other {Use parent access}} ({role, select, viewer {Viewer} commenter {Commenter} editor {Editor} other {Owner}})`,
                description: `Menu action in Page and Space link sharing that removes only the direct workspace grant and uses the parent's access. Kind identifies a disclosed space or parent page; other means an undisclosed ancestor. Role is the resulting minimum role. Keep the action concise.`,
                values: { kind: E?.kind, role: e },
              }),
              onRemoveAccess: b != null && a ? () => f(null) : void 0,
            }))),
      (t[0] = i),
      (t[1] = o),
      (t[2] = a),
      (t[3] = g?.sources),
      (t[4] = c),
      (t[5] = h),
      (t[6] = f),
      (t[7] = m),
      (t[8] = p),
      (t[9] = n),
      (t[10] = r),
      (t[11] = _),
      (t[12] = d),
      (t[13] = l),
      (t[14] = v),
      (t[15] = y),
      (t[16] = b),
      (t[17] = x),
      (t[18] = S),
      (t[19] = ee),
      (t[20] = C),
      (t[21] = te),
      (t[22] = w),
      (t[23] = T));
  } else
    ((v = t[14]),
      (y = t[15]),
      (b = t[16]),
      (x = t[17]),
      (S = t[18]),
      (ee = t[19]),
      (C = t[20]),
      (te = t[21]),
      (w = t[22]),
      (T = t[23]));
  let E;
  t[57] !== ee || t[58] !== C || t[59] !== te
    ? ((E = (0, X.jsxs)(`div`, { className: ee, children: [C, te] })),
      (t[57] = ee),
      (t[58] = C),
      (t[59] = te),
      (t[60] = E))
    : (E = t[60]);
  let D;
  t[61] !== y || t[62] !== b || t[63] !== m || t[64] !== x || t[65] !== S || t[66] !== _
    ? ((D =
        !_ &&
        b != null &&
        x === b &&
        (0, X.jsx)(`p`, {
          className: `text-xs text-secondary select-none`,
          children:
            S == null
              ? y
              : (0, X.jsx)(oe, {
                  className: `cursor-interaction text-info underline underline-offset-2`,
                  to: S,
                  onClick: m,
                  children: y,
                }),
        })),
      (t[61] = y),
      (t[62] = b),
      (t[63] = m),
      (t[64] = x),
      (t[65] = S),
      (t[66] = _),
      (t[67] = D))
    : (D = t[67]);
  let O;
  return (
    t[68] !== v || t[69] !== w || t[70] !== T || t[71] !== E || t[72] !== D
      ? ((O = (0, X.jsxs)(v, { kind: w, children: [T, E, D] })),
        (t[68] = v),
        (t[69] = w),
        (t[70] = T),
        (t[71] = E),
        (t[72] = D),
        (t[73] = O))
      : (O = t[73]),
    O
  );
}
function Pn(e) {
  return (0, X.jsx)(Kt, { permission: qt(e, `folder`) });
}
function Fn(e) {
  return e.source != null;
}
var In, X;
function Ln() {
  return (Ln = e(() => {
    ((In = me()), p(), lt(), A(), O(), S(), G(), Ht(), st(), Yt(), Gt(), Mn(), (X = he()));
  }))();
}
function Rn(e) {
  let t = (0, gr.c)(25),
    { target: n, pageId: r, comments: i, copyLinkSpaceId: a, requestAccess: s, onClose: c } = e,
    l = s !== void 0 && s,
    u = f(o),
    d = C(we),
    p = C(Be),
    m = C(ke),
    h;
  t[0] === u.query ? (h = t[1]) : ((h = u.query.getOptions(Le)), (t[0] = u.query), (t[1] = h));
  let g = h,
    _;
  if (
    (t[2] === g
      ? (_ = t[3])
      : ((_ = { ...g, staleTime: g.staleTime, refetchOnMount: `always` }), (t[2] = g), (t[3] = _)),
    T(_, u.queryClient),
    d == null || p == null)
  )
    return null;
  if (l) {
    let e = `${d}:${p}:${n.type}:${n.id}`,
      i;
    t[4] !== n.id || t[5] !== n.type
      ? ((i = { kind: n.type, id: n.id }), (t[4] = n.id), (t[5] = n.type), (t[6] = i))
      : (i = t[6]);
    let o;
    return (
      t[7] !== a || t[8] !== c || t[9] !== r || t[10] !== e || t[11] !== i
        ? ((o = (0, Q.jsx)($t, { target: i, pageId: r, copyLinkSpaceId: a, onClose: c }, e)),
          (t[7] = a),
          (t[8] = c),
          (t[9] = r),
          (t[10] = e),
          (t[11] = i),
          (t[12] = o))
        : (o = t[12]),
      o
    );
  }
  if (m === `unavailable`) {
    let e;
    return (
      t[13] !== a || t[14] !== c || t[15] !== r || t[16] !== n
        ? ((e = (0, Q.jsx)(zn, { target: n, pageId: r, copyLinkSpaceId: a, onClose: c })),
          (t[13] = a),
          (t[14] = c),
          (t[15] = r),
          (t[16] = n),
          (t[17] = e))
        : (e = t[17]),
      e
    );
  }
  let v = `${d}:${p}:${n.type}:${n.id}`,
    y;
  return (
    t[18] !== i || t[19] !== a || t[20] !== c || t[21] !== r || t[22] !== v || t[23] !== n
      ? ((y = (0, Q.jsx)(Bn, { comments: i, target: n, pageId: r, copyLinkSpaceId: a, onClose: c }, v)),
        (t[18] = i),
        (t[19] = a),
        (t[20] = c),
        (t[21] = r),
        (t[22] = v),
        (t[23] = n),
        (t[24] = y))
      : (y = t[24]),
    y
  );
}
function zn(e) {
  let t = (0, gr.c)(22),
    { target: n, pageId: r, copyLinkSpaceId: i, onClose: a } = e,
    s = f(o),
    c = C(ke),
    l = c === `loading`,
    d;
  t[0] !== n.id || t[1] !== n.type
    ? ((d = (0, Q.jsx)(dt, { kind: n.type, id: n.id })), (t[0] = n.id), (t[1] = n.type), (t[2] = d))
    : (d = t[2]);
  let p;
  t[3] !== r || t[4] !== n.type
    ? ((p = (0, Q.jsx)(at, { kind: n.type, pageId: r })), (t[3] = r), (t[4] = n.type), (t[5] = p))
    : (p = t[5]);
  let m;
  t[6] !== i || t[7] !== r || t[8] !== c
    ? ((m = c === `unavailable` ? null : (0, Q.jsx)(Qt, { pageId: r, spaceId: i })),
      (t[6] = i),
      (t[7] = r),
      (t[8] = c),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] !== a || t[11] !== m
    ? ((h = (0, Q.jsx)(Lt, {
        onCancel: a,
        onClose: a,
        hasPendingAccessChange: !1,
        hasPendingInvitees: !1,
        isSaving: !1,
        copyLink: m,
      })),
      (t[10] = a),
      (t[11] = m),
      (t[12] = h))
    : (h = t[12]);
  let g;
  t[13] !== s || t[14] !== c
    ? ((g = (0, Q.jsx)(j, {
        children:
          c === `unavailable`
            ? (0, Q.jsx)(te, {
                role: `status`,
                content: (0, Q.jsx)(u, {
                  id: `codex.space.driveSharing.managementUnavailable`,
                  defaultMessage: `Your admin has turned off sharing for your account. Ask your admin to enable sharing.`,
                  description: `The selected account's admin has disabled managing Page or Space permissions; ask the admin to enable sharing`,
                }),
              })
            : (0, Q.jsx)(Ie, {
                isLoading: c === `loading`,
                onRetry: () => {
                  s.get(Le).refetch();
                },
              }),
      })),
      (t[13] = s),
      (t[14] = c),
      (t[15] = g))
    : (g = t[15]);
  let _;
  return (
    t[16] !== l || t[17] !== d || t[18] !== p || t[19] !== h || t[20] !== g
      ? ((_ = (0, Q.jsx)(qe, { isLoading: l, title: d, subtitle: p, footer: h, children: g })),
        (t[16] = l),
        (t[17] = d),
        (t[18] = p),
        (t[19] = h),
        (t[20] = g),
        (t[21] = _))
      : (_ = t[21]),
    _
  );
}
function Bn(e) {
  let t = (0, gr.c)(149),
    { target: n, pageId: r, comments: a, copyLinkSpaceId: s, onClose: c } = e,
    l = f(o),
    d = ee(),
    { data: p } = De(),
    h = C(be),
    g = C(ke),
    v = C(Oe),
    y = C(we),
    x = C(Be),
    S = p?.accounts?.find((e) => e.id === y && e.structure === `workspace`),
    w = { ...n, includeInheritedAccess: !0 },
    E = l.query.getOptions(it, w),
    D;
  t[0] !== y || t[1] !== n || t[2] !== x
    ? ((D = { accountId: y, userId: x, target: n }), (t[0] = y), (t[1] = n), (t[2] = x), (t[3] = D))
    : (D = t[3]);
  let O = b(St, D),
    ne = C(O.unconfirmed$),
    k = C(O.acceptedPageChanges$),
    re;
  t[4] !== y || t[5] !== n || t[6] !== x
    ? ((re = { accountId: y, userId: x, target: n }), (t[4] = y), (t[5] = n), (t[6] = x), (t[7] = re))
    : (re = t[7]);
  let A = ye(Tt, re),
    M = C(O.completedSpaceChanges$),
    {
      data: N,
      isPending: se,
      fetchStatus: ce,
      isStale: le,
      isError: P,
      refetch: ue,
    } = T({
      ...E,
      enabled: h && g === `available` && y != null && x != null,
      staleTime: E.staleTime,
      refetchOnMount: pr,
    }),
    de = l.query.getOptions(it, n),
    fe;
  (t[8] === k
    ? (fe = t[9])
    : ((fe = (e) =>
        e.state.error instanceof ae && [403, 404].includes(e.state.error.status)
          ? !1
          : k.some((t) => {
                if (t.submissionId != null || t.displayReconciled || Date.now() - t.acceptedAt >= 3e4)
                  return !1;
                let n = e.state.data?.shares.find((e) => e.share_id === t.share.share_id);
                return t.change.action === `remove`
                  ? e.state.data == null || n != null
                  : n?.role_id !== t.share.role_id;
              })
            ? 2e3
            : !1),
      (t[8] = k),
      (t[9] = fe)),
    T({
      ...de,
      enabled: E.enabled && (M.length > 0 || k.some(fr)),
      staleTime: de.staleTime,
      notifyOnChangeProps: [],
      refetchOnMount: M.length > 0 && `always`,
      refetchOnWindowFocus: !1,
      refetchInterval: fe,
    }));
  let F = se || ce === `paused` || (le && ce !== `idle`),
    pe = F,
    me;
  t[10] !== N || t[11] !== P || t[12] !== F || t[13] !== g || t[14] !== n.type
    ? ((me = g === `available` && !F && !P && (n.type === `page` || (N != null && $e(N))) ? N : void 0),
      (t[10] = N),
      (t[11] = P),
      (t[12] = F),
      (t[13] = g),
      (t[14] = n.type),
      (t[15] = me))
    : (me = t[15]);
  let I = me,
    he = function (e, t) {
      let n = t instanceof ae && t.status === 409 ? gt(t) : null,
        r =
          (t instanceof Error && t.message === `space_sharing_inherited_access`) ||
          n ===
            `This recipient already inherits this access from an ancestor. Edit sharing at that source.` ||
          n?.startsWith(`This recipient already inherits equal or stronger access`),
        i = l.get(it, w),
        a =
          r && !i.isError && l.get(ke) === `available`
            ? mr(
                i.data,
                e.action === `invite`
                  ? e.recipient
                  : i.data?.shares.find((t) => t.share_id === e.shareId)?.recipient,
              )
            : void 0;
      l.get(ie).danger(
        a == null
          ? (!r && n) || d.formatMessage($.saveError)
          : d.formatMessage(
              {
                id: `codex.space.driveSharing.inheritedAccessConflictSource`,
                defaultMessage: `This recipient already has access through {kind, select, page {a parent page} other {the space}}`,
                description: `An inherited-access rejection with a source authorized for disclosure. Kind identifies the ancestor Page or Space; no recipient identity or source title is exposed. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
              },
              { kind: a.kind },
            ),
        { errorAnalytics: { toastId: `sharingDialog.mutate.saveError` } },
      );
    },
    ge = m(
      {
        mutationKey: [`space`, `save-library-sharing`, x, y],
        mutationFn: async (e) => {
          let { changes: t, signal: n, telemetry: r, initialSharing: i, workspaceChangeIndex: a } = e;
          n.throwIfAborted();
          let o = await Ke(l, t, r, i, n, void 0, (e, t) => {
              t.catch((t) => {
                l.get(we) === y &&
                  l.get(Be) === x &&
                  l.get(be) &&
                  !(t instanceof Error && t.name === `AbortError`) &&
                  he(e, t);
              });
            }),
            s = o[a],
            c = !1;
          if (
            !n.aborted &&
            l.get(be) &&
            s?.status === `rejected` &&
            ((s.reason instanceof ae && [403, 404].includes(s.reason.status)) ||
              (s.reason instanceof Error && s.reason.message === `sharing_access_unavailable`))
          ) {
            let { data: e, isSuccess: t } = await l.get(Le).refetch();
            c =
              t &&
              e?.includes(`library_sharing_management_available`) === !0 &&
              !e.includes(`library_workspace_link_sharing_available`);
          }
          return { results: o, workspaceSharingDisabled: c };
        },
        networkMode: `always`,
      },
      l.queryClient,
    ),
    _e;
  t[16] !== y || t[17] !== x
    ? ((_e = {
        filters: { mutationKey: [`space`, `save-library-sharing`, x, y], status: `pending`, exact: !0 },
        select: dr,
      }),
      (t[16] = y),
      (t[17] = x),
      (t[18] = _e))
    : (_e = t[18]);
  let ve = i(_e, l.queryClient),
    xe;
  t[19] !== n.id || t[20] !== n.type
    ? ((xe = (e) => (e?.changes ?? []).filter((e) => e.target.type === n.type && e.target.id === n.id)),
      (t[19] = n.id),
      (t[20] = n.type),
      (t[21] = xe))
    : (xe = t[21]);
  let L = ve.flatMap(xe),
    Se;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = { draft: new Map(), invitees: [] }), (t[22] = Se))
    : (Se = t[22]);
  let [Ce, Te] = (0, Z.useState)(Se),
    { draft: R, invitees: z } = Ce,
    [je, Ne] = (0, Z.useState)(null),
    [Pe, Fe] = (0, Z.useState)(!1),
    B = (0, Z.useRef)(null),
    ze = (0, Z.useRef)(!1),
    Ve = (0, Z.useRef)(null),
    He = (0, Z.useRef)(null),
    We = (0, Z.useRef)(null),
    Je;
  t[23] !== l || t[24] !== n.type
    ? ((Je = () => {
        let e = hn(pt(l), { target_type: n.type, backing_type: `drive` });
        return (
          (B.current = e),
          (Ve.current = e.startPhase({
            operation: `read_current_access`,
            phase: `current_access`,
            retryOrdinal: e.nextRetryOrdinal(`current_access`),
            searchMode: `none`,
          })),
          () => {
            (Ve.current?.cancel(), He.current?.cancel(), e.dispose(), B.current === e && (B.current = null));
          }
        );
      }),
      (t[23] = l),
      (t[24] = n.type),
      (t[25] = Je))
    : (Je = t[25]);
  let Ye;
  (t[26] !== l || t[27] !== n.id || t[28] !== n.type
    ? ((Ye = [l, n.id, n.type]), (t[26] = l), (t[27] = n.id), (t[28] = n.type), (t[29] = Ye))
    : (Ye = t[29]),
    (0, Z.useLayoutEffect)(Je, Ye));
  let Xe;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = () => () => {
        We.current?.cancel();
      }),
      (t[30] = Xe))
    : (Xe = t[30]);
  let Ze;
  (t[31] !== y || t[32] !== h || t[33] !== n.id || t[34] !== n.type || t[35] !== x
    ? ((Ze = [y, x, n.id, n.type, h]),
      (t[31] = y),
      (t[32] = h),
      (t[33] = n.id),
      (t[34] = n.type),
      (t[35] = x),
      (t[36] = Ze))
    : (Ze = t[36]),
    (0, Z.useLayoutEffect)(Xe, Ze));
  let [Qe, et] = (0, Z.useState)(``),
    tt = (0, Z.useRef)(null),
    [nt, rt] = (0, Z.useState)(),
    ot = ye(br, n.type === `page` ? r : null),
    st = I?.allowed_roles.filter((e) => e !== `role-library-folder-commenter` || ot),
    ct = function (e) {
      let t = nt ?? Jt.folder[Ut(e.some(ur))];
      return st?.includes(t) ? t : (yr.find((e) => st?.includes(e)) ?? t);
    },
    lt = ct(z),
    ut = (0, Z.useRef)(lt),
    ft = function (e) {
      ((ut.current = e ?? `role-library-folder-viewer`), rt(e));
    },
    mt;
  t[37] !== h || t[38] !== P || t[39] !== pe || t[40] !== g || t[41] !== I
    ? ((mt = h && !pe && g === `available` && !P && I != null && $e(I)),
      (t[37] = h),
      (t[38] = P),
      (t[39] = pe),
      (t[40] = g),
      (t[41] = I),
      (t[42] = mt))
    : (mt = t[42]);
  let H = mt,
    ht;
  t[43] !== H || t[44] !== Qe
    ? ((ht = H ? Qe.trim() : ``), (t[43] = H), (t[44] = Qe), (t[45] = ht))
    : (ht = t[45]);
  let U = ht,
    W;
  t[46] === I
    ? (W = t[47])
    : ((W = `unknown`),
      I?.workspace_id !== void 0 && (W = I.workspace_id == null ? `consumer_email` : `workspace_directory`),
      (t[46] = I),
      (t[47] = W));
  let yt = W === `workspace_directory`,
    bt = H && yt && n.type === `page` && n.id === r && a != null,
    xt = (0, Z.useSyncExternalStore)(
      bt ? a.subscribe : en,
      bt ? a.getSnapshot : tn,
      a?.getServerSnapshot ?? tn,
    ),
    Ct;
  t[48] !== H ||
  t[49] !== z ||
  t[50] !== U ||
  t[51] !== I ||
  t[52] !== yt ||
  t[53] !== n ||
  t[54] !== xt ||
  t[55] !== x
    ? ((Ct =
        H && yt && I != null
          ? {
              ...n,
              sharing: I,
              query: U,
              commenters: nn(xt),
              excludeUserIds: [
                I.owner.principal_id,
                ...(x == null ? [] : [x]),
                ...I.shares.flatMap(lr),
                ...z.flatMap(cr),
              ].map(sr),
            }
          : null),
      (t[48] = H),
      (t[49] = z),
      (t[50] = U),
      (t[51] = I),
      (t[52] = yt),
      (t[53] = n),
      (t[54] = xt),
      (t[55] = x),
      (t[56] = Ct))
    : (Ct = t[56]);
  let wt = ye(on, Ct),
    Et = _t(U, 150),
    Dt;
  t[57] !== y || t[58] !== U || t[59] !== n.id || t[60] !== n.type || t[61] !== x
    ? ((Dt = [`pages-sharing-recipients`, y, x, n.type, n.id, U]),
      (t[57] = y),
      (t[58] = U),
      (t[59] = n.id),
      (t[60] = n.type),
      (t[61] = x),
      (t[62] = Dt))
    : (Dt = t[62]);
  let Ot = H && U.length > 0 && U === Et,
    kt;
  t[63] !== U || t[64] !== n.id || t[65] !== n.type
    ? ((kt = (e) => {
        let { signal: t } = e;
        return Ge.safePost(`/pages/sharing/recipients`, {
          requestBody: {
            page_id: n.type === `page` ? n.id : void 0,
            space_id: n.type === `space` ? n.id : void 0,
            query: U,
            limit: 10,
          },
          signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
        });
      }),
      (t[63] = U),
      (t[64] = n.id),
      (t[65] = n.type),
      (t[66] = kt))
    : (kt = t[66]);
  let jt;
  t[67] !== Dt || t[68] !== Ot || t[69] !== kt
    ? ((jt = {
        queryKey: Dt,
        enabled: Ot,
        networkMode: `always`,
        refetchOnReconnect: !0,
        retry: Re,
        staleTime: _.ONE_MINUTE,
        queryFn: kt,
      }),
      (t[67] = Dt),
      (t[68] = Ot),
      (t[69] = kt),
      (t[70] = jt))
    : (jt = t[70]);
  let { data: Nt, isPending: Ft, isFetching: Bt, isError: Vt, failureCount: Ht } = T(jt),
    Wt;
  t[71] === Nt?.items ? (Wt = t[72]) : ((Wt = Nt?.items.filter(or)), (t[71] = Nt?.items), (t[72] = Wt));
  let Gt = Wt,
    qt;
  t[73] !== Vt || t[74] !== Nt?.unavailable_types
    ? ((qt = Vt || Nt?.unavailable_types?.includes(`user`)),
      (t[73] = Vt),
      (t[74] = Nt?.unavailable_types),
      (t[75] = qt))
    : (qt = t[75]);
  let G = qt,
    Yt = G || Ht > 0,
    Xt = H && U.length > 0 && (Ft || Bt),
    Zt,
    $t;
  (t[76] !== P || t[77] !== pe || t[78] !== I
    ? ((Zt = () => {
        if (pe) {
          if (Ve.current == null) {
            let e = B.current;
            Ve.current =
              e?.startPhase({
                operation: `read_current_access`,
                phase: `current_access`,
                retryOrdinal: e.nextRetryOrdinal(`current_access`) ?? `initial`,
                searchMode: `none`,
              }) ?? null;
          }
          return;
        }
        let e = Ve.current;
        e != null &&
          ((Ve.current = null), P || I == null ? e.fail(`access_failed`) : e.complete(I.shares.length + 1));
      }),
      ($t = [P, pe, I]),
      (t[76] = P),
      (t[77] = pe),
      (t[78] = I),
      (t[79] = Zt),
      (t[80] = $t))
    : ((Zt = t[79]), ($t = t[80])),
    (0, Z.useLayoutEffect)(Zt, $t));
  let rn;
  t[81] === W
    ? (rn = t[82])
    : ((rn = () =>
        B.current?.startPhase({
          operation: `recipient_lookup`,
          phase: `recipient_lookup`,
          retryOrdinal: `initial`,
          searchMode: `text_query`,
          recipientLookupScope: W,
        }) ?? null),
      (t[81] = W),
      (t[82] = rn));
  let an = (0, Z.useEffectEvent)(rn),
    cn;
  t[83] !== U.length || t[84] !== an
    ? ((cn = () => {
        (He.current?.cancel(`superseded`), (He.current = U.length === 0 ? null : an()));
      }),
      (t[83] = U.length),
      (t[84] = an),
      (t[85] = cn))
    : (cn = t[85]);
  let ln;
  (t[86] === U ? (ln = t[87]) : ((ln = [U]), (t[86] = U), (t[87] = ln)), (0, Z.useLayoutEffect)(cn, ln));
  let un;
  t[88] !== Xt || t[89] !== U.length || t[90] !== Gt?.length || t[91] !== G
    ? ((un = () => {
        let e = He.current;
        e == null ||
          U.length === 0 ||
          Xt ||
          ((He.current = null), G ? e.fail(`search_failed`) : e.complete(Gt?.length ?? 0));
      }),
      (t[88] = Xt),
      (t[89] = U.length),
      (t[90] = Gt?.length),
      (t[91] = G),
      (t[92] = un))
    : (un = t[92]);
  let dn = Gt?.length,
    K;
  if (
    (t[93] !== Xt || t[94] !== U || t[95] !== dn || t[96] !== G
      ? ((K = [Xt, U, dn, G]), (t[93] = Xt), (t[94] = U), (t[95] = dn), (t[96] = G), (t[97] = K))
      : (K = t[97]),
    (0, Z.useLayoutEffect)(un, K),
    y == null || x == null || !h)
  )
    return null;
  if (g !== `available`) {
    let e;
    return (
      t[98] !== c || t[99] !== r || t[100] !== n
        ? ((e = (0, Q.jsx)(zn, { target: n, pageId: r, onClose: c })),
          (t[98] = c),
          (t[99] = r),
          (t[100] = n),
          (t[101] = e))
        : (e = t[101]),
      e
    );
  }
  let fn = L.length > 0,
    mn;
  t[102] === I?.shares
    ? (mn = t[103])
    : ((mn = (e) => !I?.shares.some((t) => V(t.recipient) === V(e.share.recipient))),
      (t[102] = I?.shares),
      (t[103] = mn));
  let _n = [...L, ...k.filter(mn).map(ar)].filter(ir),
    vn;
  t[104] !== k || t[105] !== R || t[106] !== I?.shares
    ? ((vn = [...R.values()].some(
        (e) =>
          e.action === `invite` &&
          k.some((t) => t.change.action === `invite` && V(t.share.recipient) === V(e.recipient)) &&
          !I?.shares.some((t) => V(t.recipient) === V(e.recipient)),
      )),
      (t[104] = k),
      (t[105] = R),
      (t[106] = I?.shares),
      (t[107] = vn))
    : (vn = t[107]);
  let yn = vn,
    bn = yr.filter((e) => st?.includes(e)).map(rr),
    q = new Map(I?.shares.map(nr));
  for (let { change: e, share: t } of [...M, ...A]) {
    if (I == null) break;
    if (e.action === `remove`) {
      q.delete(e.shareId);
      continue;
    }
    let n = q.get(t.share_id);
    if (n == null && [...q.values()].some((e) => V(e.recipient) === V(t.recipient))) continue;
    let r = e.action === `invite` ? e.invitee : void 0;
    q.set(t.share_id, {
      ...t,
      ...n,
      role_id: e.roleId,
      recipient_display_name: n?.recipient_display_name ?? t.recipient_display_name ?? r?.label,
      recipient_email: n?.recipient_email ?? t.recipient_email ?? r?.secondaryLabel,
      recipient_avatar_url: n?.recipient_avatar_url ?? t.recipient_avatar_url,
    });
  }
  let xn = new Set(),
    Sn = [...R.values()].filter(tr);
  for (let e of [...Sn, ...L])
    if (e.action === `invite` && I != null) {
      let t = V(e.recipient),
        n = [...q.values()].find((e) => V(e.recipient) === t),
        r = n?.share_id ?? e.invitee?.id ?? t;
      (q.set(r, {
        ...n,
        share_id: r,
        inviter: n?.inviter ?? I.owner,
        recipient: e.recipient,
        role_id: e.roleId,
        status: n?.status ?? `pending`,
        recipient_display_name: n?.recipient_display_name ?? e.invitee?.label,
        recipient_email: n?.recipient_email ?? e.invitee?.secondaryLabel,
      }),
        L.includes(e) && xn.add(r));
    } else if (e.action === `remove`) (q.delete(e.shareId), xn.add(e.shareId));
    else if (e.action === `update`) {
      let t = q.get(e.shareId);
      (t != null && q.set(e.shareId, { ...t, role_id: e.roleId }), xn.add(e.shareId));
    }
  let J = [...q.values()].find(
      (e) =>
        e.recipient.recipient_type === `principal` &&
        e.recipient.principal_type === `workspace` &&
        e.recipient.principal_id === y,
    ),
    Cn;
  if (t[108] !== A || t[109] !== I?.shares) {
    let e;
    (t[111] === I?.shares
      ? (e = t[112])
      : ((e = (e) => !I?.shares.some((t) => t.share_id === e.share.share_id)),
        (t[111] = I?.shares),
        (t[112] = e)),
      (Cn = new Set(A.filter(e).map(er))),
      (t[108] = A),
      (t[109] = I?.shares),
      (t[110] = Cn));
  } else Cn = t[110];
  let wn = Cn,
    Tn;
  t[113] !== k || t[114] !== y || t[115] !== I?.shares
    ? ((Tn = (e) => {
        let t =
          e.action === `invite`
            ? e.recipient
            : (I?.shares.find((t) => t.share_id === e.shareId)?.recipient ??
              k.find((t) => t.share.share_id === e.shareId)?.share.recipient);
        return t?.recipient_type === `principal` && t.principal_type === `workspace` && t.principal_id === y;
      }),
      (t[113] = k),
      (t[114] = y),
      (t[115] = I?.shares),
      (t[116] = Tn))
    : (Tn = t[116]);
  let En = L.some(Tn),
    On = R.get(`workspace`),
    Y = On?.action === `remove` ? null : (On?.roleId ?? J?.role_id),
    kn = I == null ? void 0 : An(I),
    jn =
      On != null &&
      I?.workspace_id != null &&
      (I.inherited_workspace_link_access?.complete !== !0 ||
        (On.action !== `remove` && kn != null && yr.indexOf(On.roleId) <= yr.indexOf(kn))),
    Mn = new Map();
  for (let [e, t] of R) {
    let n =
      t.action === `invite`
        ? ([...q.values()].find((e) => V(e.recipient) === V(t.recipient))?.share_id ?? e)
        : t.shareId;
    Mn.set(n, { key: e, change: t });
  }
  let Pn = [...q.values()].filter(
      (e) =>
        e !== J &&
        Mn.get(e.share_id)?.change.action !== `remove` &&
        (e.recipient.recipient_type !== `principal` ||
          e.recipient.principal_type !== `user` ||
          (e.recipient.principal_id.split(`__`)[0] !== x?.split(`__`)[0] &&
            e.recipient.principal_id.split(`__`)[0] !== I?.owner.principal_id.split(`__`)[0])),
    ),
    Fn = I?.inherited_access,
    In = [...q.values()].find(
      (e) =>
        e.recipient.recipient_type === `principal` &&
        e.recipient.principal_type === `user` &&
        e.recipient.principal_id.split(`__`)[0] === x?.split(`__`)[0],
    ),
    X =
      In?.recipient.recipient_type === `principal` && In.recipient.principal_type === `user`
        ? In.recipient.principal_id
        : (S?.account_user_id ?? null),
    Ln;
  I?.caller_permissions.includes(`library_folder.write`)
    ? (Ln = `editor`)
    : I?.caller_permissions.includes(`library_file.comment`)
      ? (Ln = `commenter`)
      : I?.caller_permissions.includes(`library_folder.read`) && (Ln = `viewer`);
  let Rn = I?.shares.filter((e) => Mn.get(e.share_id)?.change.action === `remove`),
    Bn = new Map([...q.values()].map($n));
  for (let e of I?.shares ?? []) xn.has(e.share_id) && Bn.set(V(e.recipient), `existing`);
  let xr = function (e, t) {
      return {
        id: `group:${e}`,
        label: t,
        accessStatus: Bn.get(`group:${e}`),
        recipient: { recipient_type: `principal`, principal_type: `group`, principal_id: e },
      };
    },
    Sr = function (e, t, n) {
      let r = `user:${e}`;
      return {
        id: r,
        colorKey: e,
        label: I?.workspace_id == null ? (n ?? U) : t,
        secondaryLabel: n ?? void 0,
        accessStatus:
          e === I?.owner.principal_id || e.split(`__`)[0] === x?.split(`__`)[0] ? `existing` : Bn.get(r),
        recipient: { recipient_type: `principal`, principal_type: `user`, principal_id: e },
      };
    },
    Cr = yt
      ? wt.picks.map((e) =>
          e
            .filter((e) => !Bn.has(`user:${e.account_user_id}`))
            .map((e) => Sr(e.account_user_id, e.name ?? e.email ?? e.account_user_id, e.email)),
        )
      : void 0,
    wr = Gt?.map((e) => Sr(e.id, e.display_name, e.detail)).filter(
      (e) => !z.some((t) => t.id === e.id) && (U !== `` || e.accessStatus == null),
    ),
    Tr;
  t[117] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tr = function (e, t) {
        Te((n) => {
          let r = new Map(n.draft);
          return (t == null ? r.delete(e) : r.set(e, t), { ...n, draft: r });
        });
      }),
      (t[117] = Tr))
    : (Tr = t[117]);
  let Er = Tr,
    Dr = (e) => {
      if (e === (J?.role_id ?? null) && !k.some((e) => e.share.share_id === J?.share_id)) {
        Er(`workspace`, null);
        return;
      }
      if (e == null) {
        Er(`workspace`, J == null ? null : { action: `remove`, shareId: J.share_id, target: n });
        return;
      }
      Er(
        `workspace`,
        J == null
          ? {
              action: `invite`,
              recipient: { recipient_type: `principal`, principal_type: `workspace`, principal_id: y },
              roleId: e,
              target: n,
            }
          : { action: `update`, shareId: J.share_id, roleId: e, target: n },
      );
    },
    Or;
  t[118] === I?.shares
    ? (Or = t[119])
    : ((Or = function (e) {
        let t = I?.shares.find((t) =>
          e.action === `invite`
            ? e.invitee != null && V(t.recipient) === V(e.recipient)
            : t.share_id === e.shareId,
        );
        return t?.role_id === `role-library-folder-editor` &&
          t.recipient.recipient_type === `principal` &&
          (t.recipient.principal_type === `group` || t.recipient.principal_type === `workspace`) &&
          (e.action === `remove` || e.roleId !== `role-library-folder-editor`)
          ? t
          : void 0;
      }),
      (t[118] = I?.shares),
      (t[119] = Or));
  let kr = Or,
    Ar = [...R.values()].map(kr).filter(Qn),
    jr = Ar.length === 1 ? Ar[0] : void 0,
    Mr = (e) => {
      let t = e !== void 0 && e;
      if (
        !H ||
        l.get(ke) !== `available` ||
        fn ||
        yn ||
        jn ||
        (R.size === 0 && z.length === 0) ||
        (z.length > 0 && !bn.some((e) => e.value === lt)) ||
        l.get(we) !== y ||
        l.get(Be) !== x
      )
        return;
      if (
        !t &&
        I?.owner.principal_id.split(`__`)[0] !== x.split(`__`)[0] &&
        (In?.status !== `active` || In.role_id !== `role-library-folder-editor`) &&
        Ar.length > 0
      ) {
        Fe(!0);
        return;
      }
      let r = !1,
        i = Me(l, y, x),
        a = i.signal,
        o = new Map(R);
      for (let [e, t] of o) {
        if (t.action !== `invite` || t.invitee == null) continue;
        let r = I?.shares.find((e) => V(e.recipient) === V(t.recipient));
        r != null &&
          (o.delete(e),
          o.set(r.share_id, { action: `update`, shareId: r.share_id, roleId: t.roleId, target: n }));
      }
      for (let e of z)
        o.set(e.id, { action: `invite`, recipient: e.recipient, invitee: e, roleId: ct([e]), target: n });
      let s = (0, _r.default)(
        [...o],
        (e) => {
          let [, t] = e;
          return !!kr(t);
        },
        Zn,
        Xn,
      );
      We.current?.cancel(`superseded`);
      let c = gn(
        pt(l),
        { target_type: n.type, backing_type: `drive` },
        B.current == null ? void 0 : { operation: `permission_mutation`, telemetry: B.current },
        pn(l, n, `permission_mutation`),
        s.map((e) => {
          let [, t] = e;
          return t.action === `remove`
            ? `revoke_access`
            : t.action === `update`
              ? `change_role`
              : n.type === `space`
                ? `invite_space`
                : `share_page`;
        }),
      );
      We.current = c;
      let u = () => {
        (c.complete(), Ne({ id: crypto.randomUUID(), measurement: c, changes: s.map(Yn) }));
      };
      (Te({ draft: new Map(), invitees: [] }),
        et(``),
        tt.current != null && tt.current.scrollIntoView({ block: `start` }));
      let f = (e) => {
          let { data: t, isSuccess: r } = l.get(it, n),
            { queryKey: i } = l.query.snapshot(it, n);
          return !r || l.queryClient.getQueryState(i)?.isInvalidated !== !1
            ? e
            : e.filter((e) => {
                let [, n] = e;
                return (
                  n.action !== `invite` ||
                  !t.shares.some((e) => V(e.recipient) === V(n.recipient) && e.role_id === n.roleId)
                );
              });
        },
        p = (e) => {
          let t = ut.current !== lt;
          Te((n) => {
            let r = new Map(n.draft);
            for (let [n, i] of e) (i.action !== `invite` || R.has(n) || t) && !r.has(n) && r.set(n, i);
            return {
              draft: r,
              invitees: t
                ? n.invitees
                : [
                    ...n.invitees,
                    ...z.filter(
                      (t) =>
                        e.some((e) => {
                          let [n] = e;
                          return n === t.id;
                        }) &&
                        !r.has(t.id) &&
                        !n.invitees.some((e) => e.id === t.id),
                    ),
                  ],
            };
          });
        };
      ge.mutateAsync({
        changes: s.map(Jn),
        signal: a,
        telemetry: c,
        initialSharing: L.length === 0 && !ze.current ? I : void 0,
        workspaceChangeIndex: s.findIndex(qn),
      })
        .then((e) => {
          let { results: t, workspaceSharingDisabled: n } = e;
          if ((t.some(Kn) && (ze.current = !0), a.aborted || !l.get(be))) {
            c.cancel(`context_changed`);
            return;
          }
          let i = f(s.filter((e, n) => t[n].status === `rejected`)),
            o = n && i.some(Gn);
          if (((r = i.length < s.length), i.length > 0)) {
            if ((p(o ? i.filter(Wn) : i), c.fail(r), o)) {
              l.get(ie).danger(
                d.formatMessage({
                  id: `codex.space.driveSharing.workspaceLinksUnavailable`,
                  defaultMessage: `Your admin has turned off workspace-link sharing for your account. Ask your admin to enable workspace links.`,
                  description: `A Page or Space workspace-link change failed and refreshed account policy confirms workspace links are disabled. Named-recipient sharing is still allowed.`,
                }),
                { errorAnalytics: { toastId: `sharingDialog.mutate.saveError` } },
              );
              return;
            }
            let e = i[0][1],
              n = t[s.indexOf(i[0])],
              a = n.status === `rejected` ? n.reason : null;
            he(e, a);
          } else u();
        })
        .catch(() => {
          if (((ze.current = !0), !a.aborted && l.get(be))) {
            let e = f(s);
            if (e.length === 0) {
              u();
              return;
            }
            (p(e),
              c.fail(r || e.length < s.length),
              l
                .get(ie)
                .danger(d.formatMessage($.saveError), {
                  errorAnalytics: { toastId: `sharingDialog.mutate.saveError` },
                }));
          } else c.cancel(`context_changed`);
        })
        .finally(() => i.stop());
    },
    Nr;
  t[120] !== n.id || t[121] !== n.type
    ? ((Nr = (0, Q.jsx)(dt, { kind: n.type, id: n.id })), (t[120] = n.id), (t[121] = n.type), (t[122] = Nr))
    : (Nr = t[122]);
  let Pr;
  t[123] !== r || t[124] !== n.type
    ? ((Pr = (0, Q.jsx)(at, { kind: n.type, pageId: r })), (t[123] = r), (t[124] = n.type), (t[125] = Pr))
    : (Pr = t[125]);
  let Fr;
  t[126] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fr = (0, Q.jsx)(u, {
        id: `codex.pages.sharing.share`,
        defaultMessage: `Share`,
        description: `Button granting the selected recipients access to the Page or Space`,
      })),
      (t[126] = Fr))
    : (Fr = t[126]);
  let Ir;
  t[127] !== s || t[128] !== r
    ? ((Ir = (0, Q.jsx)(Qt, { pageId: r, spaceId: s })), (t[127] = s), (t[128] = r), (t[129] = Ir))
    : (Ir = t[129]);
  let Lr;
  t[130] !== O || t[131] !== ne.length
    ? ((Lr =
        ne.length > 0 &&
        (0, Q.jsx)(j, {
          children: (0, Q.jsx)(te, {
            role: `status`,
            content: (0, Q.jsx)(u, {
              id: `codex.space.driveSharing.confirmationUnknown`,
              defaultMessage: `We couldn’t confirm these sharing changes yet`,
              description: `A sharing change was accepted but its completion could not be confirmed; it stays pending, and Check again checks the same operation without resubmitting it`,
            }),
            primaryCtaText: (0, Q.jsx)(u, {
              id: `codex.space.driveSharing.checkAgain`,
              defaultMessage: `Check again`,
              description: `Check the status of previously accepted sharing changes without submitting them again`,
            }),
            onPrimaryCtaClick: () => O.checkAgain(),
          }),
        })),
      (t[130] = O),
      (t[131] = ne.length),
      (t[132] = Lr))
    : (Lr = t[132]);
  let Rr;
  t[133] !== M.length || t[134] !== ue
    ? ((Rr =
        M.length > 0 &&
        (0, Q.jsx)(j, {
          children: (0, Q.jsx)(te, {
            role: `status`,
            content: (0, Q.jsx)(u, {
              id: `codex.space.driveSharing.completedAwaitingRoster`,
              defaultMessage: `Changes saved. The permissions list hasn’t refreshed yet`,
              description: `The Space sharing command completed, but the visible permissions list may still show older access while its refresh is pending or failed`,
            }),
            primaryCtaText: (0, Q.jsx)(u, {
              id: `codex.space.driveSharing.refreshSpacePermissions`,
              defaultMessage: `Refresh permissions`,
              description: `Refresh the current Space permissions after a completed sharing change without submitting it again`,
            }),
            onPrimaryCtaClick: () => void ue(),
          }),
        })),
      (t[133] = M.length),
      (t[134] = ue),
      (t[135] = Rr))
    : (Rr = t[135]);
  let zr;
  t[136] !== P || t[137] !== F || t[138] !== ue || t[139] !== I
    ? ((zr =
        (F || P || I == null) &&
        (0, Q.jsx)(j, {
          children: (0, Q.jsx)(Ie, {
            isLoading: F,
            onRetry: () => {
              (Te({ draft: new Map(), invitees: [] }), et(``), ue());
            },
          }),
        })),
      (t[136] = P),
      (t[137] = F),
      (t[138] = ue),
      (t[139] = I),
      (t[140] = zr))
    : (zr = t[140]);
  let Br;
  return (
    t[141] !== M.length ||
    t[142] !== je ||
    t[143] !== P ||
    t[144] !== F ||
    t[145] !== fn ||
    t[146] !== L ||
    t[147] !== I
      ? ((Br =
          je != null &&
          !fn &&
          M.length === 0 &&
          !F &&
          !P &&
          L.length === 0 &&
          I != null &&
          je.changes.every((e) => {
            if (e.action === `invite`)
              return I.shares.some((t) => V(t.recipient) === V(e.recipient) && t.role_id === e.roleId);
            let t = I.shares.find((t) => t.share_id === e.shareId);
            return e.action === `remove` ? t == null : t?.role_id === e.roleId;
          }) &&
          (0, Q.jsx)(Ue, { requireVisibleAtPaint: !0, onPaint: je.measurement.paintOpportunity }, je.id)),
        (t[141] = M.length),
        (t[142] = je),
        (t[143] = P),
        (t[144] = F),
        (t[145] = fn),
        (t[146] = L),
        (t[147] = I),
        (t[148] = Br))
      : (Br = t[148]),
    (0, Q.jsxs)(qe, {
      headerContent:
        !F && !P && I != null
          ? (0, Q.jsx)(j, {
              className: `gap-2`,
              children:
                $e(I) &&
                (0, Q.jsx)(zt, {
                  accountId: y,
                  disabled: !H,
                  getGroupRecipient: S == null ? void 0 : (e) => xr(e.id, e.name),
                  getTeamRecipient: S == null ? void 0 : (e) => xr(e.id, e.name),
                  isLoading: !Yt && !wt.isError && (Xt || wt.isLoading),
                  searchFailed: Yt || wt.isError,
                  contextualPicks: Cr,
                  loadingLabel: d.formatMessage({
                    id: `codex.space.driveSharing.searching`,
                    defaultMessage: `Searching for people or teams`,
                    description: `Status while recipient searches in Library-backed Page or Space sharing are loading`,
                  }),
                  emptyMessage: (0, Q.jsx)(u, {
                    id: `codex.space.driveSharing.noMatchingRecipients`,
                    defaultMessage: `No matching people or teams`,
                    description: `Empty workspace member and group search in the Library Page or Space sharing dialog`,
                  }),
                  query: Qe,
                  options: wr,
                  getRemoveLabel: (e) =>
                    d.formatMessage(
                      {
                        id: `shareDialog.removeInvitee`,
                        defaultMessage: `Remove {name} from the invitation`,
                        description: `Accessible label for removing a selected person or group from a sharing invitation; name is the recipient's display name`,
                      },
                      { name: e.label },
                    ),
                  selectedOptions: z,
                  trailingContent:
                    z.length > 0 &&
                    (0, Q.jsx)(Rt, {
                      disabled: !H,
                      options: bn,
                      value: lt,
                      variant: `inline`,
                      renderLabel: Un,
                      onChange: ft,
                    }),
                  onQueryChange: et,
                  onChange: (e) => {
                    (Te((t) => ({ ...t, invitees: e })), (ut.current = ct(e)));
                  },
                }),
            })
          : null,
      isLoading: F,
      onSubmit: () => Mr(),
      title: Nr,
      subtitle: Pr,
      footer: (0, Q.jsx)(Lt, {
        onCancel: () => {
          (Te({ draft: new Map(), invitees: [] }), ft(void 0), et(``));
        },
        onClose: c,
        hasPendingAccessChange: R.size > 0,
        hasPendingInvitees: z.length > 0,
        inviteLabel: Fr,
        isSaving: !1,
        disabled: fn || yn || jn || !H || (z.length > 0 && !bn.some((e) => e.value === lt)),
        copyLink: Ir,
      }),
      children: [
        Pe &&
          H &&
          (0, Q.jsx)(Dn, {
            target: n,
            teamName:
              (jr?.recipient.recipient_type === `principal` &&
                jr.recipient.principal_type === `group` &&
                jr.recipient_display_name?.trim()) ||
              void 0,
            onCancel: () => Fe(!1),
            onConfirm: () => {
              (Fe(!1), Mr(!0));
            },
          }),
        Lr,
        Rr,
        zr,
        !F &&
          !P &&
          I != null &&
          (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(Nn, {
                sharing: I,
                supportsCommenter: ot,
                isWorkspace: I.workspace_id != null || S != null,
                directRole: Y,
                hasDirectOverride: (J != null || On?.action === `invite`) && On?.action !== `remove`,
                disabled: !H || En || (J != null && wn.has(J.share_id)),
                workspaceName: S?.name?.trim() || void 0,
                workspaceLinkSharingAvailable: v,
                onChange: Dr,
                onRetry: () => void ue(),
                onClose: c,
              }),
              jn &&
                I.inherited_workspace_link_access?.complete &&
                (0, Q.jsx)(j, {
                  children: (0, Q.jsx)(`p`, {
                    className: `text-sm text-secondary`,
                    children: (0, Q.jsx)(u, {
                      id: `codex.pages.sharing.workspaceLink.changed.helpText`,
                      defaultMessage: `Parent access changed. Choose a higher role or use parent access before saving`,
                      description: `Page and Space sharing warning when a pending direct workspace role is now covered by an ancestor grant. The user must revise the link-access draft before saving.`,
                    }),
                  }),
                }),
              (0, Q.jsx)(Ae, {
                children: (0, Q.jsxs)(`div`, {
                  ref: tt,
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, Q.jsx)(Pt, {
                      entries: [
                        {
                          id: `owner:${I.owner.principal_id}`,
                          label: d.formatMessage($.owner),
                          isOwner: !0,
                          row: (0, Q.jsx)(hr, {
                            accountUserId: I.owner.principal_id,
                            displayName: I.owner_display_name,
                          }),
                        },
                        ...(I.owner.principal_id.split(`__`)[0] === x.split(`__`)[0]
                          ? []
                          : [
                              {
                                id: `self:${x}`,
                                label: d.formatMessage($.self),
                                isSelf: !0,
                                row: (0, Q.jsx)(Ee, {
                                  avatar: (0, Q.jsx)(At, {
                                    accountUserId: x,
                                    name: d.formatMessage($.self),
                                    size: `group`,
                                  }),
                                  label: (0, Q.jsx)(u, { ...$.self }),
                                  renderIdentity: (e, t) =>
                                    (0, Q.jsx)(Mt, {
                                      inShareDialog: !0,
                                      accountUserId: X,
                                      label: d.formatMessage($.self),
                                      triggerDescriptionId: t,
                                      children: e,
                                    }),
                                  secondaryLabel:
                                    In?.status === `pending` ? (0, Q.jsx)(u, { ...$.pending }) : void 0,
                                  trailingContent: (0, Q.jsx)(`span`, {
                                    className: `pe-2 text-sm text-tertiary`,
                                    children: (0, Q.jsx)(Kt, { permission: Ln }),
                                  }),
                                }),
                              },
                            ]),
                        ...Pn.map((e) => {
                          let t = _n.find((t) => V(t.recipient) === V(e.recipient)),
                            { key: r, change: i } = Mn.get(e.share_id) ?? {
                              key: t?.invitee?.id ?? e.share_id,
                              change: void 0,
                            },
                            a =
                              I.workspace_id == null && e.status === `pending`
                                ? (e.recipient_email ??
                                  (e.recipient.recipient_type === `email`
                                    ? e.recipient.email
                                    : d.formatMessage($.pending)))
                                : (e.recipient_display_name ??
                                  e.recipient_email ??
                                  (e.recipient.recipient_type === `email`
                                    ? e.recipient.email
                                    : e.recipient.principal_id)),
                            o = !xn.has(e.share_id) && i?.action !== `invite` && e.status === `pending`,
                            s = o ? d.formatMessage($.pending) : (e.recipient_email ?? void 0),
                            c =
                              e.recipient.recipient_type === `principal` &&
                              e.recipient.principal_type === `group`
                                ? e.recipient.principal_id
                                : null,
                            l =
                              e.recipient.recipient_type === `principal` &&
                              e.recipient.principal_type === `user`
                                ? e.recipient.principal_id
                                : null;
                          return {
                            id: e.share_id,
                            label: a,
                            isTeam: c != null,
                            row: (0, Q.jsx)(Ee, {
                              avatar:
                                c == null
                                  ? (0, Q.jsx)(At, {
                                      accountUserId: l,
                                      avatarUrl:
                                        e.status === `active` && l != null ? e.recipient_avatar_url : null,
                                      name: a,
                                      size: `group`,
                                    })
                                  : (0, Q.jsx)(It, { groupId: c }),
                              label: a,
                              renderIdentity: (t, n) =>
                                (0, Q.jsx)(Mt, {
                                  inShareDialog: !0,
                                  accountUserId: l,
                                  label: a,
                                  labelEmail: e.recipient_email,
                                  triggerDescriptionId: o ? n : void 0,
                                  children: t,
                                }),
                              secondaryLabel: s,
                              trailingContent: (0, Q.jsx)(Rt, {
                                disabled: !H || !vt(I, e.recipient, x, y),
                                variant: `inline`,
                                options: bn,
                                value: i != null && i.action !== `remove` ? i.roleId : e.role_id,
                                renderLabel: Hn,
                                onChange: (a) => {
                                  let o = bn.find((e) => e.value === a)?.value;
                                  if (o != null) {
                                    let a = i?.action === `invite` ? i : t;
                                    if (a != null) {
                                      Er(
                                        r,
                                        o ===
                                          (t?.roleId ??
                                            I.shares.find((t) => t.share_id === e.share_id)?.role_id)
                                          ? null
                                          : { ...a, roleId: o },
                                      );
                                      return;
                                    }
                                    Er(
                                      r,
                                      o === e.role_id &&
                                        !M.some((t) => t.share.share_id === e.share_id) &&
                                        !k.some((t) => t.share.share_id === e.share_id)
                                        ? null
                                        : { action: `update`, roleId: o, shareId: e.share_id, target: n },
                                    );
                                  }
                                },
                                removeLabel: (0, Q.jsx)(u, {
                                  id: `codex.space.driveSharing.remove`,
                                  defaultMessage: `Remove access`,
                                  description: `Menu command that removes only the direct grant or pending invitation on this Page or Space; inherited access can remain`,
                                }),
                                onRemoveAccess:
                                  xn.has(e.share_id) || wn.has(e.share_id) || t != null
                                    ? void 0
                                    : () =>
                                        Er(
                                          r,
                                          i?.action === `invite` &&
                                            !I.shares.some((t) => t.share_id === e.share_id)
                                            ? null
                                            : { action: `remove`, shareId: e.share_id, target: n },
                                        ),
                              }),
                            }),
                          };
                        }),
                      ],
                    }),
                    (0, Q.jsx)(sn, { pageId: n.type === `page` ? r : null, inheritedAccess: Fn }),
                  ],
                }),
              }),
              (0, vr.default)(Rn, Vn).map((e) => {
                let t = mr(I, e.recipient),
                  n = e.recipient_display_name?.trim() || e.recipient_email?.trim();
                return t != null && n
                  ? (0, Q.jsx)(
                      j,
                      {
                        children: (0, Q.jsx)(`p`, {
                          className: `text-xs text-secondary select-none`,
                          children: (0, Q.jsx)(u, {
                            id: `codex.space.driveSharing.remainingAccess`,
                            defaultMessage: `{name} will still have access through <source>{kind, select, page {a parent page} other {the space}}</source>`,
                            description: `Hint for a staged removal. Name is the recipient; source links to the authorized parent Page or Space where they retain access. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                            values: {
                              name: n,
                              kind: t.kind,
                              source: (e) =>
                                (0, Q.jsx)(oe, {
                                  className: `cursor-interaction text-info underline underline-offset-2`,
                                  to: `/${t.kind === `page` ? `space` : `spaces`}/${encodeURIComponent(t.id)}`,
                                  onClick: c,
                                  children: e,
                                }),
                            },
                          }),
                        }),
                      },
                      V(e.recipient),
                    )
                  : null;
              }),
            ],
          }),
        Br,
      ],
    })
  );
}
function Vn(e) {
  return V(e.recipient);
}
function Hn(e) {
  return (0, Q.jsx)(Kt, { permission: qt(e, `folder`) });
}
function Un(e) {
  return (0, Q.jsx)(Kt, { permission: qt(e, `folder`) });
}
function Wn(e) {
  let [t] = e;
  return t !== `workspace`;
}
function Gn(e) {
  let [t] = e;
  return t === `workspace`;
}
function Kn(e) {
  return e.status === `rejected`;
}
function qn(e) {
  let [t, n] = e;
  return t === `workspace` && n.action !== `remove`;
}
function Jn(e) {
  let [, t] = e;
  return t;
}
function Yn(e) {
  let [, t] = e;
  return t;
}
function Xn(e) {
  let [, t] = e;
  return t.action !== `invite`;
}
function Zn(e) {
  let [t] = e;
  return t === `workspace`;
}
function Qn(e) {
  return e != null;
}
function $n(e) {
  return [V(e.recipient), e.status === `pending` ? `pending` : `existing`];
}
function er(e) {
  return e.share.share_id;
}
function tr(e) {
  return e.action === `invite` && e.invitee != null;
}
function nr(e) {
  return [e.share_id, e];
}
function rr(e) {
  return { value: e };
}
function ir(e) {
  return e.action === `invite`;
}
function ar(e) {
  let { change: t } = e;
  return t;
}
function or(e) {
  return e.type === `user`;
}
function sr(e) {
  return e.split(`__`)[0];
}
function cr(e) {
  let { recipient: t } = e;
  return t.principal_type === `user` ? [t.principal_id] : [];
}
function lr(e) {
  let { recipient: t } = e;
  return t.recipient_type === `principal` && t.principal_type === `user` ? [t.principal_id] : [];
}
function ur(e) {
  return e.recipient.principal_type === `group`;
}
function dr(e) {
  return e.state.variables;
}
function fr(e) {
  return e.submissionId == null;
}
function pr() {
  return g.isOnline() ? !0 : `always`;
}
function mr(e, t) {
  if (e?.inherited_access?.complete && t?.recipient_type === `principal`)
    return e.inherited_access.sources.find(
      (e) => e.recipient != null && e.source != null && V(e.recipient) === V(t),
    )?.source;
}
function hr(e) {
  let t = (0, gr.c)(19),
    { accountUserId: n, displayName: r } = e,
    i = ee(),
    a;
  t[0] === r ? (a = t[1]) : ((a = r?.trim() || null), (t[0] = r), (t[1] = a));
  let o = a,
    s = ye(Dt, o == null ? n : null),
    c;
  t[2] !== s || t[3] !== i || t[4] !== o
    ? ((c = o ?? s ?? i.formatMessage($.owner)), (t[2] = s), (t[3] = i), (t[4] = o), (t[5] = c))
    : (c = t[5]);
  let l = c,
    { data: d } = ye(Et, n),
    f;
  t[6] !== n || t[7] !== l
    ? ((f = (0, Q.jsx)(At, { accountUserId: n, name: l, size: `group` })), (t[6] = n), (t[7] = l), (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] !== n || t[10] !== l || t[11] !== d?.email
    ? ((p = (e) =>
        (0, Q.jsx)(Mt, { inShareDialog: !0, accountUserId: n, label: l, labelEmail: d?.email, children: e })),
      (t[9] = n),
      (t[10] = l),
      (t[11] = d?.email),
      (t[12] = p))
    : (p = t[12]);
  let m = d?.email,
    h;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(`span`, {
        className: `pe-2 text-sm text-tertiary`,
        children: (0, Q.jsx)(u, { ...$.owner }),
      })),
      (t[13] = h))
    : (h = t[13]);
  let g;
  return (
    t[14] !== l || t[15] !== f || t[16] !== p || t[17] !== m
      ? ((g = (0, Q.jsx)(Ee, {
          avatar: f,
          label: l,
          renderIdentity: p,
          secondaryLabel: m,
          trailingContent: h,
        })),
        (t[14] = l),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
var gr, _r, vr, Z, Q, yr, br, $;
function xr() {
  return (xr = e(() => {
    ((gr = me()),
      h(),
      d(),
      y(),
      E(),
      (_r = t(fe(), 1)),
      (vr = t(P(), 1)),
      v(),
      (Z = _e()),
      A(),
      O(),
      et(),
      W(),
      Ze(),
      nt(),
      z(),
      l(),
      k(),
      M(),
      L(),
      G(),
      Zt(),
      ut(),
      Je(),
      R(),
      Xt(),
      fn(),
      kt(),
      rn(),
      jt(),
      Ot(),
      an(),
      mn(),
      ft(),
      En(),
      H(),
      Ct(),
      Ve(),
      I(),
      Nt(),
      Ft(),
      Ce(),
      st(),
      Vt(),
      Se(),
      Yt(),
      Bt(),
      Gt(),
      xe(),
      c(),
      tt(),
      pe(),
      kn(),
      Ye(),
      Ln(),
      Mn(),
      (Q = he()),
      (yr = [`role-library-folder-viewer`, `role-library-folder-commenter`, `role-library-folder-editor`]),
      (br = se(o, (e, { get: t }) => {
        let n = t(xt, e);
        return (n == null ? `page` : Qe(n)) !== `granola_presentation`;
      })),
      ($ = r({
        self: {
          id: `codex.space.driveSharing.self`,
          defaultMessage: `You`,
          description: `Label for the currently signed-in person in the Page or Space sharing dialog`,
        },
        owner: {
          id: `codex.space.driveSharing.owner`,
          defaultMessage: `Owner`,
          description: `Label identifying the original owner in the Library Page or Space sharing dialog; ownership cannot be reassigned here`,
        },
        pending: {
          id: `codex.space.driveSharing.pending`,
          defaultMessage: `Invitation pending`,
          description: `Membership status beneath a person who has been invited to a Page or Space and has not accepted yet`,
        },
        saveError: {
          id: `codex.space.librarySharing.saveError`,
          defaultMessage: `Could not update sharing`,
          description: `Toast shown when inviting, changing a role, or revoking a Page or Space collaborator fails`,
        },
      })));
  }))();
}
export { xr as n, Rn as t };
//# sourceMappingURL=sharing-dialog-184219d7c3ed.js.map
