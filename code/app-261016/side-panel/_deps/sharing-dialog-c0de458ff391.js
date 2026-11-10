import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  Bst as i,
  CNt as a,
  FBt as o,
  HO as s,
  IO as c,
  JO as l,
  KO as u,
  LNt as d,
  LO as f,
  Mst as p,
  NSt as m,
  PBt as h,
  Pit as g,
  QCt as _,
  Qst as v,
  RFt as y,
  Sst as b,
  TY as x,
  USt as ee,
  Vrt as S,
  WO as C,
  XOt as w,
  Y3 as T,
  YOt as E,
  Z3 as D,
  ZCt as O,
  ZSt as k,
  Zot as te,
  _Nt as ne,
  bSt as re,
  bst as A,
  iCt as j,
  iH as ie,
  jit as M,
  jst as ae,
  lG as oe,
  nCt as N,
  nst as P,
  okt as se,
  pkt as ce,
  qO as le,
  qrt as ue,
  tCt as de,
  tkt as F,
  vD as fe,
  vst as I,
  yCt as pe,
  yD as me,
  yst as he,
  zFt as ge,
  zO as _e,
  zjt as ve,
  zst as ye,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as be,
  Cmn as xe,
  Cpn as L,
  DU as R,
  F2n as Se,
  FH as Ce,
  FU as we,
  HH as Te,
  Hcn as Ee,
  I2n as De,
  IH as z,
  IU as B,
  Jlr as Oe,
  LH as ke,
  LU as Ae,
  NU as je,
  OU as Me,
  Odn as Ne,
  Olr as Pe,
  PU as Fe,
  RH as Ie,
  TU as Le,
  Tan as Re,
  Tcn as ze,
  UH as Be,
  Ucn as Ve,
  VRr as He,
  Vdn as Ue,
  Vzn as We,
  Xz as Ge,
  Zdn as Ke,
  Zht as qe,
  Zlr as Je,
  Zz as Ye,
  _mn as Xe,
  _ur as Ze,
  aU as Qe,
  agt as $e,
  cU as et,
  cmn as tt,
  dPr as nt,
  egt as rt,
  gmn as it,
  gur as at,
  h_n as ot,
  hdn as st,
  iRr as ct,
  jU as lt,
  kU as ut,
  lBr as dt,
  m_n as ft,
  mlr as pt,
  nU as mt,
  oU as ht,
  pur as gt,
  rgt as _t,
  sU as vt,
  tU as yt,
  tyr as bt,
  uBr as xt,
  uPr as V,
  vdn as St,
  vmn as Ct,
  wLr as wt,
  wU as Tt,
  wan as Et,
  wcn as Dt,
  wpn as Ot,
  xMr as kt,
  yMr as At,
  zH as H,
  zzn as U,
} from "./app-initial-ad16eaadf81f.js";
import { a as jt, i as Mt, t as Nt } from "./state-d01a5a96b9cf.js";
import { n as Pt, t as Ft } from "./avatar-b3af498c99de.js";
import { i as It, n as Lt } from "./profile-card-596b3632a9d9.js";
import { n as Rt, t as zt } from "./access-list-2635d079c875.js";
import { i as Bt, r as Vt } from "./member-count-bfd3da2c099a.js";
import { t as Ht } from "./modal-footer-412324b30d33.js";
import { t as Ut } from "./modal-permission-dropdown-6dcd00cb5144.js";
import { o as Wt, s as Gt } from "./recipient-picker-5b8b87b8e1c8.js";
import { a as Kt, n as qt, r as Jt, t as Yt } from "./access-dropdown-7c79ad8fbd33.js";
import { n as Xt, t as Zt } from "./role-label-f76597fae88b.js";
import { c as Qt, f as $t, t as en } from "./model-96b25fa95571.js";
import { t as tn } from "./permission-dropdown-5c542829d6d7.js";
import { i as nn, n as rn, r as an, t as on } from "./request-share-dialog-76ce5c69e816.js";
import { a as sn, i as cn, n as ln, o as un, r as dn, s as fn } from "./suggestions-77448d940c25.js";
function pn(e) {
  let t = (0, gn.c)(16),
    { pageId: n, inheritedAccess: r } = e,
    { space: i } = N(Ne, n),
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
    ? ((u = o != null && (0, W.jsx)(hn, { space: o, grants: l?.length ? l : void 0 })),
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
          (0, W.jsx)(
            mn,
            { spaceId: e.id, grants: s?.filter((t) => t.source?.kind === `space` && t.source.id === e.id) },
            e.id,
          )),
        (t[11] = s),
        (t[12] = e)),
      (d = (0, _n.default)(
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
      ? ((f = (0, W.jsxs)(W.Fragment, { children: [u, d] })), (t[13] = u), (t[14] = d), (t[15] = f))
      : (f = t[15]),
    f
  );
}
function mn(e) {
  let t = (0, gn.c)(9),
    { spaceId: n, grants: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = { enabled: !1 }), (t[0] = i)) : (i = t[0]);
  let { data: a, error: o } = N(Ue, n, i),
    s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = { enabled: !1 }), (t[1] = s)) : (s = t[1]);
  let { data: c } = j(Ke, s);
  if (o instanceof M && [403, 404, 410].includes(o.status)) return null;
  let l;
  t[2] !== a || t[3] !== n || t[4] !== c?.items
    ? ((l = a ?? c?.items.find((e) => e.id === n)), (t[2] = a), (t[3] = n), (t[4] = c?.items), (t[5] = l))
    : (l = t[5]);
  let u = l;
  if (u == null) return null;
  let d;
  return (
    t[6] !== r || t[7] !== u
      ? ((d = (0, W.jsx)(hn, { space: u, grants: r })), (t[6] = r), (t[7] = u), (t[8] = d))
      : (d = t[8]),
    d
  );
}
function hn(e) {
  let t = (0, gn.c)(14),
    { space: n, grants: r } = e,
    i = r?.[0]?.role,
    a;
  t[0] === n.id
    ? (a = t[1])
    : ((a = (0, W.jsx)(Et, { spaceId: n.id, variant: `avatar` })), (t[0] = n.id), (t[1] = a));
  let o;
  t[2] === n.name
    ? (o = t[3])
    : ((o = (0, W.jsx)(F, {
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
        (0, W.jsx)(F, {
          id: `codex.pages.sharing.inheritedSpaceAccess`,
          defaultMessage: `Access inherited from this space`,
          description: `Secondary text explaining why Space members can access a Page; the server does not provide a member count. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
      (t[4] = r),
      (t[5] = s));
  let c;
  t[6] !== r || t[7] !== i
    ? ((c = (0, W.jsx)(`span`, {
        className: `pe-2 text-sm text-tertiary`,
        children:
          i != null && r?.every((e) => e.role === i)
            ? (0, W.jsx)(Zt, { permission: i })
            : (0, W.jsx)(F, {
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
      ? ((l = (0, W.jsx)(Qe, { avatar: a, label: o, secondaryLabel: s, trailingContent: c })),
        (t[9] = a),
        (t[10] = o),
        (t[11] = s),
        (t[12] = c),
        (t[13] = l))
      : (l = t[13]),
    l
  );
}
var gn, _n, W;
function vn() {
  return (vn = e(() => {
    ((gn = h()), (_n = t(a(), 1)), k(), w(), ht(), Xt(), g(), Re(), st(), (W = d()));
  }))();
}
function yn(e, t, n) {
  let r = e.get(at),
    i = r == null ? null : Ze(e, r, void 0, e.get(He).accountUserId ?? null),
    a = !1;
  return (
    i?.signal.addEventListener(`abort`, () => i.stop(), { once: !0 }),
    (r) => {
      if (!a && ((a = !0), i?.stop(), !(i == null || i.signal.aborted)))
        try {
          kt(e, it, {
            target:
              t.type === `page`
                ? tt.CODEX_SPACES_CREATION_TARGET_PAGE
                : tt.CODEX_SPACES_CREATION_TARGET_SPACE,
            operation: {
              permission_mutation: Xe.CODEX_SPACES_SHARING_OPERATION_PERMISSIONS,
              link_policy_mutation: Xe.CODEX_SPACES_SHARING_OPERATION_LINK_POLICY,
              mixed_mutation: Xe.CODEX_SPACES_SHARING_OPERATION_MIXED,
            }[n],
            outcome: {
              confirmed: Ct.CODEX_SPACES_SHARING_OUTCOME_CONFIRMED,
              unknown: Ct.CODEX_SPACES_SHARING_OUTCOME_UNKNOWN,
              partially_confirmed: Ct.CODEX_SPACES_SHARING_OUTCOME_PARTIALLY_CONFIRMED,
              cancelled: Ct.CODEX_SPACES_SHARING_OUTCOME_CANCELLED,
            }[r],
            ...(t.type === `page` ? Ot(e, t.id) : { spaceId: t.id }),
          });
        } catch {}
    }
  );
}
function bn() {
  return (bn = e(() => {
    (xe(), wt(), At(), gt(), L());
  }))();
}
function xn(e, t) {
  let n = crypto.randomUUID(),
    r = P({ attributes: jn(t, n), name: `pages.sharing.attempt` }),
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
      let t = Dn(a[e]);
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
      let m = An(i, t, n, r, a, s, c, u),
        h = m?.trace ?? Cn(i),
        g = !1,
        _;
      ((o += 1), wn(`started`, p, n, h));
      let v = (t, r, i, a) => {
          if (g) return;
          ((g = !0), --o);
          let s = Math.max(0, performance.now() - d),
            c = {
              ...f,
              ambiguous_commit: i ? `true` : `false`,
              outcome: t,
              reason: r,
              roster_size_bucket: kn(a),
            };
          (e.count(`codex_pages`, `sharing_phase_result`, c),
            e.hist(`codex_pages`, `sharing_phase_latency_ms`, c, s),
            wn(
              `finished`,
              { ...p, ambiguousCommit: i, outcome: t, reason: r, rosterSizeBucket: kn(a) },
              n,
              h,
              s,
              _,
            ),
            m?.finish(void 0, { outcome: On(t), reason: r }),
            l());
        },
        y = G(h);
      return {
        requestOptions:
          y == null
            ? {}
            : {
                additionalHeaders: y,
                onResponseHeaders: (e) => {
                  ((_ = e.get(`x-request-id`) ?? void 0),
                    _ != null && wn(`request_correlated`, p, n, h, void 0, _));
                },
              },
        complete: (e) => v(`success`, `none`, !1, e),
        fail: (e, t = !1) => v(`failure`, e, t),
        cancel: (e = `dialog_closed`, t = !1) => v(`cancelled`, e, t),
      };
    },
  };
}
function Sn(e, t, n, r, i = []) {
  let a = performance.now(),
    o = [...new Set(i)].map((n) =>
      ft(e, {
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
        ? n !== `excluded` && i >= K && ((c.outcome = `timeout`), (c.reason = `deadline`))
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
    b = setTimeout(() => _(`timeout`, `deadline`), K);
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
            (e.measurement.fail(Tn(e.phase), d && e.phase !== `preflight`), (f = Tn(e.phase)), m.delete(e));
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
function Cn(e) {
  let t = e?.traceparent.split(`-`)[1];
  if (t != null) return { traceparent: `00-${t}-${En(8)}-01`, tracestate: e?.tracestate };
}
function wn(e, t, n, r, i, a) {
  r != null &&
    ge.info(`Pages sharing phase`, {
      safe: {
        ...t,
        buildFlavor: `prod`,
        ...(i == null ? {} : { durationMs: i }),
        host: `electron`,
        state: e,
      },
      sensitive: {
        attemptId: n,
        ...(a == null ? {} : { requestId: a }),
        traceId: r.traceparent.split(`-`)[1],
      },
    });
}
function Tn(e) {
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
function En(e) {
  return [...crypto.getRandomValues(new Uint8Array(e))].map((e) => e.toString(16).padStart(2, `0`)).join(``);
}
function Dn(e) {
  return e === 0 ? `initial` : e === 1 ? `retry_1` : `retry_2_plus`;
}
function On(e) {
  return e === `success` ? `success` : e === `cancelled` ? `aborted` : `failure`;
}
function kn(e) {
  return e == null ? `unknown` : e === 0 ? `empty` : e <= 10 ? `1_10` : e <= 100 ? `11_100` : `101_plus`;
}
function An(e, t, n, r, i, a, o, s) {
  return e == null
    ? null
    : P({
        attributes: {
          ...jn(t, n),
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
function jn(e, t) {
  return {
    "sharing.attempt_id": t,
    "sharing.backing_type": e.backing_type,
    "sharing.target_type": e.target_type,
  };
}
function G(e) {
  if (e != null)
    return { traceparent: e.traceparent, ...(e.tracestate == null ? {} : { tracestate: e.tracestate }) };
}
var K;
function Mn() {
  return (Mn = e(() => {
    (ot(), te(), y(), (K = 3e4));
  }))();
}
function Nn(e) {
  let t = (0, q.c)(25),
    { target: n, teamName: r, onCancel: i, onConfirm: a } = e,
    o = N(St, n.type === `page` ? n.id : null),
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = (e) => {
        e || i();
      }),
      (t[0] = i),
      (t[1] = s));
  let l;
  t[2] === a
    ? (l = t[3])
    : ((l = (e) => {
        (e.preventDefault(), e.stopPropagation(), a());
      }),
      (t[2] = a),
      (t[3] = l));
  let d;
  t[4] === r
    ? (d = t[5])
    : ((d = (0, J.jsx)(le, {
        className: `text-heading-lg leading-7 font-semibold wrap-anywhere select-none`,
        variant: `promotional`,
        children: r
          ? (0, J.jsx)(F, {
              id: `codex.space.driveSharing.reduceTeamAccessTitle`,
              defaultMessage: `Change access for the ‘{teamName}’ team?`,
              description: `Confirmation title before reducing one Team's Editor access to a Page or Space. teamName is the Team's display name. The current user may lose editing access.`,
              values: { teamName: r },
            })
          : (0, J.jsx)(F, {
              id: `codex.space.driveSharing.reduceAccessTitle`,
              defaultMessage: `Change access?`,
              description: `Confirmation title before reducing Editor access to a Page or Space for a workspace, multiple Teams, or a Team whose display name is unavailable. The current user may lose editing access.`,
            }),
      })),
      (t[4] = r),
      (t[5] = d));
  let p = o?.document_type ?? `page`,
    m;
  t[6] !== p || t[7] !== n.type
    ? ((m = (0, J.jsx)(u, {
        className: `text-onboarding-body text-secondary select-none`,
        children: (0, J.jsx)(F, {
          id: `codex.space.driveSharing.reduceOwnEditingAccessDescription.byDocumentType`,
          defaultMessage: `You may lose editing access to this {kind, select, page {{documentType, select, granola_presentation {slide} granola_workbook {sheet} other {page}}} other {space}} and items that inherit access from it. Do you want to continue?`,
          description: `Warning before reducing or removing Team or workspace Editor access to a Page or Space, selected by kind. The current user may lose their own editing access. The server does not identify every source of their access or return an affected-item count. documentType selects slide, sheet, or page for the current document.`,
          values: { documentType: p, kind: n.type },
        }),
      })),
      (t[6] = p),
      (t[7] = n.type),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] !== d || t[10] !== m
    ? ((h = (0, J.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [d, m] })),
      (t[9] = d),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, J.jsx)(T, {
        className: `w-full`,
        color: `primary`,
        size: `promotionalAction`,
        type: `submit`,
        children: (0, J.jsx)(F, {
          id: `codex.space.driveSharing.confirmReduceAccess`,
          defaultMessage: `Update access`,
          description: `Confirm saving the pending Page or Space sharing changes after a warning about possible loss of the current user's editing access`,
        }),
      })),
      (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, J.jsx)(F, {
        id: `codex.space.driveSharing.cancelReduceAccess`,
        defaultMessage: `Cancel`,
        description: `Close the access reduction warning without saving; keep the pending sharing changes in the Page or Space sharing dialog`,
      })),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] === i
    ? (v = t[15])
    : ((v = (0, J.jsxs)(f, {
        className: `flex-col`,
        children: [
          g,
          (0, J.jsx)(T, {
            className: `w-full`,
            color: `ghostSecondary`,
            size: `promotionalLink`,
            type: `button`,
            onClick: i,
            children: _,
          }),
        ],
      })),
      (t[14] = i),
      (t[15] = v));
  let y;
  t[16] !== h || t[17] !== v
    ? ((y = (0, J.jsxs)(`div`, {
        className: `flex flex-col gap-8 p-6 pt-14 text-center sm:p-10`,
        children: [h, v],
      })),
      (t[16] = h),
      (t[17] = v),
      (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] !== y || t[20] !== l
    ? ((b = (0, J.jsx)(c, { as: `form`, variant: `chatgpt`, onSubmit: l, children: y })),
      (t[19] = y),
      (t[20] = l),
      (t[21] = b))
    : (b = t[21]);
  let x;
  return (
    t[22] !== s || t[23] !== b
      ? ((x = (0, J.jsx)(C, {
          open: !0,
          variant: `centeredText`,
          size: `feature`,
          onOpenChange: s,
          children: b,
        })),
        (t[22] = s),
        (t[23] = b),
        (t[24] = x))
      : (x = t[24]),
    x
  );
}
var q, J;
function Pn() {
  return (Pn = e(() => {
    ((q = h()), k(), w(), D(), l(), s(), st(), (J = d()));
  }))();
}
function Fn(e) {
  let t = e.inherited_workspace_link_access;
  if (e.workspace_id != null && t?.complete === !0)
    return Y.findLast((e) => t.sources.some((t) => en.folder[t.role] === e));
}
var Y;
function In() {
  return (In = e(() => {
    ($t(), (Y = Object.values(en.folder)));
  }))();
}
function Ln(e) {
  let t = (0, Bn.c)(74),
    {
      sharing: n,
      supportsCommenter: r,
      directRole: i,
      hasDirectOverride: a,
      disabled: o,
      isWorkspace: s,
      workspaceName: c,
      workspaceLinkSharingAvailable: l,
      onChange: u,
      onRetry: d,
      onClose: f,
    } = e,
    p = ee(),
    m = n.inherited_workspace_link_access,
    h = s && m?.complete !== !0,
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
    t[0] !== i ||
    t[1] !== o ||
    t[2] !== a ||
    t[3] !== m?.sources ||
    t[4] !== s ||
    t[5] !== p ||
    t[6] !== u ||
    t[7] !== f ||
    t[8] !== d ||
    t[9] !== n ||
    t[10] !== r ||
    t[11] !== h ||
    t[12] !== l ||
    t[13] !== c
  ) {
    v = Fn(n);
    let e = v == null ? void 0 : Qt(v, `folder`),
      ee = m?.sources.filter((t) => t.role === e),
      E = (ee?.find(zn) ?? ee?.[0])?.source;
    b = E == null ? void 0 : `/${E.kind === `page` ? `space` : `spaces`}/${encodeURIComponent(E.id)}`;
    let D =
      v == null
        ? void 0
        : (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(Be.Separator, {}),
              (0, X.jsx)(Be.Item, {
                children: (0, X.jsx)(`span`, {
                  className: `flex max-w-64 min-w-0 flex-1 flex-col`,
                  children: (0, X.jsx)(Be.Description, {
                    children:
                      c == null
                        ? (0, X.jsx)(F, {
                            id: `codex.pages.sharing.workspaceLink.minimum.unnamedWorkspace.helpText`,
                            defaultMessage: `People in your workspace can still {role, select, viewer {view} commenter {comment} other {edit}} through {kind, select, space {this space} page {a parent page} other {a parent}}`,
                            description: `Visible explanation inside Page and Space link-access menus for disabled lower-access options. The parent sets minimum access. Role is viewer, commenter, or editor. Kind identifies a disclosed space or parent page; other means the source is hidden. The workspace name is unavailable.`,
                            values: { role: e, kind: E?.kind },
                          })
                        : (0, X.jsx)(F, {
                            id: `codex.pages.sharing.workspaceLink.minimum.namedWorkspace.helpText`,
                            defaultMessage: `People at {workspaceName} can still {role, select, viewer {view} commenter {comment} other {edit}} through {kind, select, space {this space} page {a parent page} other {a parent}}`,
                            description: `Visible explanation inside Page and Space link-access menus for disabled lower-access options. WorkspaceName is the organization name. The parent sets minimum access. Role is viewer, commenter, or editor. Kind identifies a disclosed space or parent page; other means the source is hidden.`,
                            values: { workspaceName: c, role: e, kind: E?.kind },
                          }),
                  }),
                }),
              }),
              b != null &&
                (0, X.jsx)(Be.Item, {
                  onSelect: () => {
                    (f(), p(b));
                  },
                  children: (0, X.jsx)(F, {
                    id: `codex.pages.sharing.workspaceLink.source.open.label`,
                    defaultMessage: `{kind, select, space {Open space} other {Open parent page}}`,
                    description: `Menu link in Page and Space sharing that opens a readable ancestor resource where the user can access its normal sharing controls. Kind is space or page. It does not edit permissions.`,
                    values: { kind: E?.kind },
                  }),
                }),
            ],
          });
    ((_ = (0, X.jsx)(F, {
      id: `codex.pages.sharing.workspaceLink.source.attribution.label`,
      defaultMessage: `{kind, select, space {From space} page {From parent page} other {From parent}}`,
      description: `Short attribution below effective workspace link access in Page and Space sharing. Kind identifies the ancestor supplying the displayed role. Other means the source is undisclosed and cannot be linked. Hidden when the page has a stronger direct grant.`,
      values: { kind: E?.kind },
    })),
      (y = Y.findLast((e) => e === i || e === v)));
    let O = Y.filter(
      (e) => (r || e !== `role-library-folder-commenter`) && (n.allowed_roles.includes(e) || e === v),
    ).map((e) => ({ value: e, disabled: !l || (v != null && Y.indexOf(e) < Y.indexOf(v)) }));
    ((g = vt),
      (w = `link`),
      t[24] !== d || t[25] !== h
        ? ((T =
            h &&
            (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-3`,
                  children: [
                    (0, X.jsx)(`p`, {
                      className: `text-sm text-secondary select-none`,
                      children: (0, X.jsx)(F, {
                        id: `codex.pages.sharing.workspaceLink.unknown.helpText`,
                        defaultMessage: `Couldn’t load link access`,
                        description: `Warning in Page and Space sharing when effective workspace link access could not be verified. Retry refreshes the read. This does not mean access is restricted.`,
                      }),
                    }),
                    (0, X.jsx)(ve, {
                      color: `secondary`,
                      variant: `ghost`,
                      size: `sm`,
                      onClick: d,
                      children: (0, X.jsx)(F, {
                        id: `codex.pages.sharing.workspaceLink.retry.action`,
                        defaultMessage: `Retry`,
                        description: `Button beside a link-access loading error in Page and Space sharing. Retries reading permissions without submitting a change.`,
                      }),
                    }),
                  ],
                }),
                (0, X.jsx)(`p`, {
                  className: `text-xs text-secondary select-none`,
                  children: (0, X.jsx)(F, {
                    id: `codex.pages.sharing.workspaceLink.direct.heading`,
                    defaultMessage: `Set on this page`,
                    description: `Label above the known direct link-access setting when parent access could not be loaded. It describes only the setting on this page, including a Space home page, not all effective access.`,
                  }),
                }),
              ],
            })),
          (t[24] = d),
          (t[25] = h),
          (t[26] = T))
        : (T = t[26]),
      (x = `flex items-center justify-between gap-3`));
    let k;
    t[27] === h
      ? (k = t[28])
      : ((k = h
          ? (0, X.jsx)(F, {
              id: `codex.pages.sharing.workspaceLink.noDirect.label`,
              defaultMessage: `No workspace link`,
              description: `Disabled link-access label under Set on this page in Page and Space sharing when no direct workspace grant exists and parent access is unknown. It does not mean the page is private.`,
            })
          : (0, X.jsx)(F, {
              id: `codex.pages.sharing.onlyInvited`,
              defaultMessage: `Only those invited`,
              description: `Page and Space link-access option limiting access to existing collaborators`,
            })),
        (t[27] = h),
        (t[28] = k));
    let te = o || h,
      ne;
    t[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ne = (0, X.jsx)(oe, {})), (t[29] = ne))
      : (ne = t[29]);
    let re = v != null,
      A;
    t[30] === re
      ? (A = t[31])
      : ((A = { value: `restricted`, mode: `restricted`, icon: ne, disabled: re }),
        (t[30] = re),
        (t[31] = A));
    let j;
    t[32] !== s || t[33] !== O || t[34] !== l
      ? ((j = s
          ? [
              {
                value: `workspace`,
                mode: `workspace`,
                icon: (0, X.jsx)(ie, {}),
                disabled: O.length === 0,
                hidden: !l,
              },
            ]
          : []),
        (t[32] = s),
        (t[33] = O),
        (t[34] = l),
        (t[35] = j))
      : (j = t[35]);
    let M;
    t[36] !== A || t[37] !== j ? ((M = [A, ...j]), (t[36] = A), (t[37] = j), (t[38] = M)) : (M = t[38]);
    let ae = y == null ? `restricted` : `workspace`,
      N;
    t[39] === c
      ? (N = t[40])
      : ((N =
          c == null
            ? (0, X.jsx)(F, {
                id: `codex.pages.sharing.workspaceLink.audience.unnamedWorkspace.label`,
                defaultMessage: `Anyone in this workspace`,
                description: `Workspace-wide link-access option in Page and Space sharing when the organization name is unavailable. This identifies who can open the link.`,
              })
            : (0, X.jsx)(F, {
                id: `codex.pages.sharing.workspaceLink.audience.namedWorkspace.label`,
                defaultMessage: `Anyone at {workspaceName}`,
                description: `Workspace-wide link-access option in Page and Space sharing. WorkspaceName is the organization name, such as Acme. This identifies who can open the link.`,
                values: { workspaceName: c },
              })),
        (t[39] = c),
        (t[40] = N));
    let P;
    (t[41] !== i || t[42] !== o || t[43] !== v || t[44] !== u || t[45] !== O || t[46] !== h
      ? ((P = (e) => {
          !h &&
            !o &&
            (e === `restricted`
              ? (v ?? u(null))
              : (v ?? u(O.find((e) => e.value === i)?.value ?? O[0]?.value ?? null)));
        }),
        (t[41] = i),
        (t[42] = o),
        (t[43] = v),
        (t[44] = u),
        (t[45] = O),
        (t[46] = h),
        (t[47] = P))
      : (P = t[47]),
      t[48] !== D ||
      t[49] !== M ||
      t[50] !== ae ||
      t[51] !== N ||
      t[52] !== P ||
      t[53] !== k ||
      t[54] !== te ||
      t[55] !== c
        ? ((S = (0, X.jsx)(Yt, {
            restrictedLabel: k,
            disabled: te,
            footer: D,
            options: M,
            value: ae,
            workspaceName: c,
            workspaceLabel: N,
            onChange: P,
          })),
          (t[48] = D),
          (t[49] = M),
          (t[50] = ae),
          (t[51] = N),
          (t[52] = P),
          (t[53] = k),
          (t[54] = te),
          (t[55] = c),
          (t[56] = S))
        : (S = t[56]),
      (C =
        y != null &&
        (!l && !(v != null && a)
          ? (0, X.jsx)(Zt, { permission: Qt(y, `folder`) })
          : (0, X.jsx)(Ut, {
              disabled: o || h,
              footer: D,
              variant: `inline`,
              options: O,
              value: y,
              renderLabel: Rn,
              onChange: (e) => {
                !h && !o && O.some((t) => t.value === e && !t.disabled) && u(e === v ? null : e);
              },
              removeLabel: (0, X.jsx)(F, {
                id: `codex.pages.sharing.workspaceLink.source.useAccess.action`,
                defaultMessage: `{kind, select, space {Use space access} page {Use parent page access} other {Use parent access}} ({role, select, viewer {Viewer} commenter {Commenter} editor {Editor} other {Owner}})`,
                description: `Menu action in Page and Space link sharing that removes only the direct workspace grant and uses the parent's access. Kind identifies a disclosed space or parent page; other means an undisclosed ancestor. Role is the resulting minimum role. Keep the action concise.`,
                values: { kind: E?.kind, role: e },
              }),
              onRemoveAccess: v != null && a ? () => u(null) : void 0,
            }))),
      (t[0] = i),
      (t[1] = o),
      (t[2] = a),
      (t[3] = m?.sources),
      (t[4] = s),
      (t[5] = p),
      (t[6] = u),
      (t[7] = f),
      (t[8] = d),
      (t[9] = n),
      (t[10] = r),
      (t[11] = h),
      (t[12] = l),
      (t[13] = c),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y),
      (t[18] = b),
      (t[19] = x),
      (t[20] = S),
      (t[21] = C),
      (t[22] = w),
      (t[23] = T));
  } else
    ((g = t[14]),
      (_ = t[15]),
      (v = t[16]),
      (y = t[17]),
      (b = t[18]),
      (x = t[19]),
      (S = t[20]),
      (C = t[21]),
      (w = t[22]),
      (T = t[23]));
  let E;
  t[57] !== x || t[58] !== S || t[59] !== C
    ? ((E = (0, X.jsxs)(`div`, { className: x, children: [S, C] })),
      (t[57] = x),
      (t[58] = S),
      (t[59] = C),
      (t[60] = E))
    : (E = t[60]);
  let D;
  t[61] !== _ || t[62] !== v || t[63] !== f || t[64] !== y || t[65] !== b || t[66] !== h
    ? ((D =
        !h &&
        v != null &&
        y === v &&
        (0, X.jsx)(`p`, {
          className: `text-xs text-secondary select-none`,
          children:
            b == null
              ? _
              : (0, X.jsx)(re, {
                  className: `cursor-interaction text-info underline underline-offset-2`,
                  to: b,
                  onClick: f,
                  children: _,
                }),
        })),
      (t[61] = _),
      (t[62] = v),
      (t[63] = f),
      (t[64] = y),
      (t[65] = b),
      (t[66] = h),
      (t[67] = D))
    : (D = t[67]);
  let O;
  return (
    t[68] !== g || t[69] !== w || t[70] !== T || t[71] !== E || t[72] !== D
      ? ((O = (0, X.jsxs)(g, { kind: w, children: [T, E, D] })),
        (t[68] = g),
        (t[69] = w),
        (t[70] = T),
        (t[71] = E),
        (t[72] = D),
        (t[73] = O))
      : (O = t[73]),
    O
  );
}
function Rn(e) {
  return (0, X.jsx)(Zt, { permission: Qt(e, `folder`) });
}
function zn(e) {
  return e.source != null;
}
var Bn, X;
function Vn() {
  return (Vn = e(() => {
    ((Bn = h()), ce(), Te(), w(), m(), x(), $t(), qt(), et(), tn(), Xt(), In(), (X = d()));
  }))();
}
function Hn(e) {
  let t = (0, br.c)(25),
    { target: r, pageId: i, comments: a, copyLinkSpaceId: o, requestAccess: s, onClose: c } = e,
    l = s !== void 0 && s,
    u = n(v),
    d = j(at),
    f = j(be),
    m = j(_t),
    h;
  t[0] === u.query ? (h = t[1]) : ((h = u.query.getOptions(rt)), (t[0] = u.query), (t[1] = h));
  let g = h,
    _;
  if (
    (t[2] === g
      ? (_ = t[3])
      : ((_ = { ...g, staleTime: g.staleTime, refetchOnMount: `always` }), (t[2] = g), (t[3] = _)),
    p(_, u.queryClient),
    d == null || f == null)
  )
    return null;
  if (l) {
    let e = `${d}:${f}:${r.type}:${r.id}`,
      n;
    t[4] !== r.id || t[5] !== r.type
      ? ((n = { kind: r.type, id: r.id }), (t[4] = r.id), (t[5] = r.type), (t[6] = n))
      : (n = t[6]);
    let a;
    return (
      t[7] !== o || t[8] !== c || t[9] !== i || t[10] !== e || t[11] !== n
        ? ((a = (0, Q.jsx)(on, { target: n, pageId: i, copyLinkSpaceId: o, onClose: c }, e)),
          (t[7] = o),
          (t[8] = c),
          (t[9] = i),
          (t[10] = e),
          (t[11] = n),
          (t[12] = a))
        : (a = t[12]),
      a
    );
  }
  if (m === `unavailable`) {
    let e;
    return (
      t[13] !== o || t[14] !== c || t[15] !== i || t[16] !== r
        ? ((e = (0, Q.jsx)(Un, { target: r, pageId: i, copyLinkSpaceId: o, onClose: c })),
          (t[13] = o),
          (t[14] = c),
          (t[15] = i),
          (t[16] = r),
          (t[17] = e))
        : (e = t[17]),
      e
    );
  }
  let y = `${d}:${f}:${r.type}:${r.id}`,
    b;
  return (
    t[18] !== a || t[19] !== o || t[20] !== c || t[21] !== i || t[22] !== y || t[23] !== r
      ? ((b = (0, Q.jsx)(Wn, { comments: a, target: r, pageId: i, copyLinkSpaceId: o, onClose: c }, y)),
        (t[18] = a),
        (t[19] = o),
        (t[20] = c),
        (t[21] = i),
        (t[22] = y),
        (t[23] = r),
        (t[24] = b))
      : (b = t[24]),
    b
  );
}
function Un(e) {
  let t = (0, br.c)(22),
    { target: r, pageId: i, copyLinkSpaceId: a, onClose: o } = e,
    s = n(v),
    c = j(_t),
    l = c === `loading`,
    u;
  t[0] !== r.id || t[1] !== r.type
    ? ((u = (0, Q.jsx)(Ce, { kind: r.type, id: r.id })), (t[0] = r.id), (t[1] = r.type), (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== i || t[4] !== r.type
    ? ((d = (0, Q.jsx)(ke, { kind: r.type, pageId: i })), (t[3] = i), (t[4] = r.type), (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] !== a || t[7] !== i || t[8] !== c
    ? ((f = c === `unavailable` ? null : (0, Q.jsx)(an, { pageId: i, spaceId: a })),
      (t[6] = a),
      (t[7] = i),
      (t[8] = c),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== o || t[11] !== f
    ? ((p = (0, Q.jsx)(Ht, {
        onCancel: o,
        onClose: o,
        hasPendingAccessChange: !1,
        hasPendingInvitees: !1,
        isSaving: !1,
        copyLink: f,
      })),
      (t[10] = o),
      (t[11] = f),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] !== s || t[14] !== c
    ? ((m = (0, Q.jsx)(_e, {
        children:
          c === `unavailable`
            ? (0, Q.jsx)(fe, {
                role: `status`,
                content: (0, Q.jsx)(F, {
                  id: `codex.space.driveSharing.managementUnavailable`,
                  defaultMessage: `Your admin has turned off sharing for your account. Ask your admin to enable sharing.`,
                  description: `The selected account's admin has disabled managing Page or Space permissions; ask the admin to enable sharing`,
                }),
              })
            : (0, Q.jsx)(yt, {
                isLoading: c === `loading`,
                onRetry: () => {
                  s.get(rt).refetch();
                },
              }),
      })),
      (t[13] = s),
      (t[14] = c),
      (t[15] = m))
    : (m = t[15]);
  let h;
  return (
    t[16] !== l || t[17] !== u || t[18] !== d || t[19] !== p || t[20] !== m
      ? ((h = (0, Q.jsx)(Ie, { isLoading: l, title: u, subtitle: d, footer: p, children: m })),
        (t[16] = l),
        (t[17] = u),
        (t[18] = d),
        (t[19] = p),
        (t[20] = m),
        (t[21] = h))
      : (h = t[21]),
    h
  );
}
function Wn(e) {
  let t = (0, br.c)(151),
    { target: r, pageId: i, comments: a, copyLinkSpaceId: o, onClose: s } = e,
    c = n(v),
    l = se(),
    { data: u } = ze(),
    d = j(Pe),
    f = j(_t),
    m = j($e),
    h = j(at),
    g = j(be),
    _ = u?.accounts?.find((e) => e.id === h && e.structure === `workspace`),
    y = { ...r, includeInheritedAccess: !0 },
    x = c.query.getOptions(ut, y),
    ee;
  t[0] !== h || t[1] !== r || t[2] !== g
    ? ((ee = { accountId: h, userId: g, target: r }), (t[0] = h), (t[1] = r), (t[2] = g), (t[3] = ee))
    : (ee = t[3]);
  let S = de(we, ee),
    C = j(S.unconfirmed$),
    w = j(S.acceptedPageChanges$),
    T;
  t[4] !== h || t[5] !== r || t[6] !== g
    ? ((T = { accountId: h, userId: g, target: r }), (t[4] = h), (t[5] = r), (t[6] = g), (t[7] = T))
    : (T = t[7]);
  let E = N(je, T),
    D = j(S.completedSpaceChanges$),
    {
      data: O,
      isPending: k,
      fetchStatus: te,
      isStale: ne,
      isError: A,
      refetch: ie,
    } = p({
      ...x,
      enabled: d && f === `available` && h != null && g != null,
      staleTime: x.staleTime,
      refetchOnMount: _r,
    }),
    ae = c.query.getOptions(ut, r),
    oe;
  (t[8] === w
    ? (oe = t[9])
    : ((oe = (e) =>
        e.state.error instanceof M && [403, 404].includes(e.state.error.status)
          ? !1
          : w.some((t) => {
                if (t.submissionId != null || t.displayReconciled || Date.now() - t.acceptedAt >= 3e4)
                  return !1;
                let n = e.state.data?.shares.find((e) => e.share_id === t.share.share_id);
                return t.change.action === `remove`
                  ? e.state.data == null || n != null
                  : n?.role_id !== t.share.role_id;
              })
            ? 2e3
            : !1),
      (t[8] = w),
      (t[9] = oe)),
    p({
      ...ae,
      enabled: x.enabled && (D.length > 0 || w.some(gr)),
      staleTime: ae.staleTime,
      notifyOnChangeProps: [],
      refetchOnMount: D.length > 0 && `always`,
      refetchOnWindowFocus: !1,
      refetchInterval: oe,
    }));
  let P = k || te === `paused` || (ne && te !== `idle`),
    ce = P,
    le;
  t[10] !== O || t[11] !== A || t[12] !== P || t[13] !== f || t[14] !== r.type
    ? ((le = f === `available` && !P && !A && (r.type === `page` || (O != null && Le(O))) ? O : void 0),
      (t[10] = O),
      (t[11] = A),
      (t[12] = P),
      (t[13] = f),
      (t[14] = r.type),
      (t[15] = le))
    : (le = t[15]);
  let I = le,
    pe = function (e, t) {
      let n = t instanceof M && t.status === 409 ? Se(t) : null,
        r =
          (t instanceof Error && t.message === `space_sharing_inherited_access`) ||
          n ===
            `This recipient already inherits this access from an ancestor. Edit sharing at that source.` ||
          n?.startsWith(`This recipient already inherits equal or stronger access`),
        i = c.get(ut, y),
        a =
          r && !i.isError && c.get(_t) === `available`
            ? vr(
                i.data,
                e.action === `invite`
                  ? e.recipient
                  : i.data?.shares.find((t) => t.share_id === e.shareId)?.recipient,
              )
            : void 0;
      c.get(ue).danger(
        a == null
          ? (!r && n) || l.formatMessage($.saveError)
          : l.formatMessage(
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
    me = he(
      {
        mutationKey: [`space`, `save-library-sharing`, g, h],
        mutationFn: async (e) => {
          let { changes: t, signal: n, telemetry: r, initialSharing: i, workspaceChangeIndex: a } = e;
          n.throwIfAborted();
          let o = await lt(c, t, r, i, n, void 0, (e, t) => {
            t.catch((t) => {
              c.get(at) === h &&
                c.get(be) === g &&
                c.get(Pe) &&
                !(t instanceof Error && t.name === `AbortError`) &&
                pe(e, t);
            });
          });
          n.aborted ||
            c.queryClient.invalidateQueries({ queryKey: [`pages-sharing-recent-recipients`, h, g] });
          let s = o[a],
            l = !1;
          if (
            !n.aborted &&
            c.get(Pe) &&
            s?.status === `rejected` &&
            ((s.reason instanceof M && [403, 404].includes(s.reason.status)) ||
              (s.reason instanceof Error && s.reason.message === `sharing_access_unavailable`))
          ) {
            let { data: e, isSuccess: t } = await c.get(rt).refetch();
            l =
              t &&
              e?.includes(`library_sharing_management_available`) === !0 &&
              !e.includes(`library_workspace_link_sharing_available`);
          }
          return { results: o, workspaceSharingDisabled: l };
        },
        networkMode: `always`,
      },
      c.queryClient,
    ),
    ge;
  t[16] !== h || t[17] !== g
    ? ((ge = {
        filters: { mutationKey: [`space`, `save-library-sharing`, g, h], status: `pending`, exact: !0 },
        select: hr,
      }),
      (t[16] = h),
      (t[17] = g),
      (t[18] = ge))
    : (ge = t[18]);
  let ve = b(ge, c.queryClient),
    xe;
  t[19] !== r.id || t[20] !== r.type
    ? ((xe = (e) => (e?.changes ?? []).filter((e) => e.target.type === r.type && e.target.id === r.id)),
      (t[19] = r.id),
      (t[20] = r.type),
      (t[21] = xe))
    : (xe = t[21]);
  let L = ve.flatMap(xe),
    Te;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = { draft: new Map(), invitees: [] }), (t[22] = Te))
    : (Te = t[22]);
  let [Ee, De] = (0, Z.useState)(Te),
    { draft: z, invitees: B } = Ee,
    [Oe, Me] = (0, Z.useState)(null),
    [Ne, Fe] = (0, Z.useState)(!1),
    Re = (0, Z.useRef)(null),
    Be = (0, Z.useRef)(!1),
    He = (0, Z.useRef)(null),
    Ue = (0, Z.useRef)(null),
    Ke = (0, Z.useRef)(null),
    qe;
  t[23] !== c || t[24] !== r.type
    ? ((qe = () => {
        let e = xn(We(c), { target_type: r.type, backing_type: `drive` });
        return (
          (Re.current = e),
          (He.current = e.startPhase({
            operation: `read_current_access`,
            phase: `current_access`,
            retryOrdinal: e.nextRetryOrdinal(`current_access`),
            searchMode: `none`,
          })),
          () => {
            (He.current?.cancel(),
              Ue.current?.cancel(),
              e.dispose(),
              Re.current === e && (Re.current = null));
          }
        );
      }),
      (t[23] = c),
      (t[24] = r.type),
      (t[25] = qe))
    : (qe = t[25]);
  let Je;
  (t[26] !== c || t[27] !== r.id || t[28] !== r.type
    ? ((Je = [c, r.id, r.type]), (t[26] = c), (t[27] = r.id), (t[28] = r.type), (t[29] = Je))
    : (Je = t[29]),
    (0, Z.useLayoutEffect)(qe, Je));
  let Ye;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = () => () => {
        Ke.current?.cancel();
      }),
      (t[30] = Ye))
    : (Ye = t[30]);
  let Xe;
  (t[31] !== h || t[32] !== d || t[33] !== r.id || t[34] !== r.type || t[35] !== g
    ? ((Xe = [h, g, r.id, r.type, d]),
      (t[31] = h),
      (t[32] = d),
      (t[33] = r.id),
      (t[34] = r.type),
      (t[35] = g),
      (t[36] = Xe))
    : (Xe = t[36]),
    (0, Z.useLayoutEffect)(Ye, Xe));
  let [et, tt] = (0, Z.useState)(``),
    it = (0, Z.useRef)(null),
    [ot, st] = (0, Z.useState)(),
    dt = N(wr, r.type === `page` ? i : null),
    ft = I?.allowed_roles.filter((e) => e !== `role-library-folder-commenter` || dt),
    pt = function (e) {
      let t = ot ?? en.folder[Jt(e.some(mr))];
      return ft?.includes(t) ? t : (Cr.find((e) => ft?.includes(e)) ?? t);
    },
    mt = pt(B),
    ht = (0, Z.useRef)(mt),
    gt = function (e) {
      ((ht.current = e ?? `role-library-folder-viewer`), st(e));
    },
    bt;
  t[37] !== d || t[38] !== A || t[39] !== ce || t[40] !== f || t[41] !== I
    ? ((bt = d && !ce && f === `available` && !A && I != null && Le(I)),
      (t[37] = d),
      (t[38] = A),
      (t[39] = ce),
      (t[40] = f),
      (t[41] = I),
      (t[42] = bt))
    : (bt = t[42]);
  let V = bt,
    St = N(xt, `2832056708`),
    Ct = V && I?.workspace_id !== void 0,
    wt;
  t[43] === Ct ? (wt = t[44]) : ((wt = { enabled: Ct }), (t[43] = Ct), (t[44] = wt));
  let { data: Et, isError: Dt, isFetching: Ot, fetchStatus: kt } = N(Ae, r, wt),
    At;
  t[45] !== V || t[46] !== et
    ? ((At = V ? et.trim() : ``), (t[45] = V), (t[46] = et), (t[47] = At))
    : (At = t[47]);
  let H = At,
    U;
  t[48] === I
    ? (U = t[49])
    : ((U = `unknown`),
      I?.workspace_id !== void 0 && (U = I.workspace_id == null ? `consumer_email` : `workspace_directory`),
      (t[48] = I),
      (t[49] = U));
  let jt = U === `workspace_directory`,
    Mt = V && jt && r.type === `page` && r.id === i && a != null,
    Nt = (0, Z.useSyncExternalStore)(
      Mt ? a.subscribe : sn,
      Mt ? a.getSnapshot : cn,
      a?.getServerSnapshot ?? cn,
    ),
    Pt;
  t[50] !== V ||
  t[51] !== B ||
  t[52] !== H ||
  t[53] !== I ||
  t[54] !== jt ||
  t[55] !== r ||
  t[56] !== Nt ||
  t[57] !== g
    ? ((Pt =
        V && jt && I != null
          ? {
              ...r,
              sharing: I,
              query: H,
              commenters: ln(Nt),
              excludeUserIds: [
                I.owner.principal_id,
                ...(g == null ? [] : [g]),
                ...I.shares.flatMap(pr),
                ...B.flatMap(fr),
              ].map(dr),
            }
          : null),
      (t[50] = V),
      (t[51] = B),
      (t[52] = H),
      (t[53] = I),
      (t[54] = jt),
      (t[55] = r),
      (t[56] = Nt),
      (t[57] = g),
      (t[58] = Pt))
    : (Pt = t[58]);
  let It = N(fn, Pt),
    Rt = Ve(H, 150),
    Bt;
  t[59] !== h || t[60] !== H || t[61] !== r.id || t[62] !== r.type || t[63] !== g
    ? ((Bt = [`pages-sharing-recipients`, h, g, r.type, r.id, H]),
      (t[59] = h),
      (t[60] = H),
      (t[61] = r.id),
      (t[62] = r.type),
      (t[63] = g),
      (t[64] = Bt))
    : (Bt = t[64]);
  let Gt = V && H.length > 0 && H === Rt,
    Kt;
  t[65] !== H || t[66] !== r.id || t[67] !== r.type
    ? ((Kt = (e) => {
        let { signal: t } = e;
        return ct.safePost(`/pages/sharing/recipients`, {
          requestBody: {
            page_id: r.type === `page` ? r.id : void 0,
            space_id: r.type === `space` ? r.id : void 0,
            query: H,
            limit: 10,
          },
          signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
        });
      }),
      (t[65] = H),
      (t[66] = r.id),
      (t[67] = r.type),
      (t[68] = Kt))
    : (Kt = t[68]);
  let qt;
  t[69] !== Bt || t[70] !== Gt || t[71] !== Kt
    ? ((qt = {
        queryKey: Bt,
        enabled: Gt,
        networkMode: `always`,
        refetchOnReconnect: !0,
        retry: nt,
        staleTime: ye.ONE_MINUTE,
        queryFn: Kt,
      }),
      (t[69] = Bt),
      (t[70] = Gt),
      (t[71] = Kt),
      (t[72] = qt))
    : (qt = t[72]);
  let { data: Yt, isPending: Xt, isFetching: Qt, isError: $t, failureCount: tn } = p(qt),
    nn;
  t[73] === Yt?.items ? (nn = t[74]) : ((nn = Yt?.items.filter(ur)), (t[73] = Yt?.items), (t[74] = nn));
  let rn = nn,
    on;
  t[75] !== $t || t[76] !== Yt?.unavailable_types
    ? ((on = $t || Yt?.unavailable_types?.includes(`user`)),
      (t[75] = $t),
      (t[76] = Yt?.unavailable_types),
      (t[77] = on))
    : (on = t[77]);
  let un = on,
    dn = un || tn > 0,
    mn = V && H.length > 0 && (Xt || Qt),
    hn,
    gn;
  (t[78] !== A || t[79] !== ce || t[80] !== I
    ? ((hn = () => {
        if (ce) {
          if (He.current == null) {
            let e = Re.current;
            He.current =
              e?.startPhase({
                operation: `read_current_access`,
                phase: `current_access`,
                retryOrdinal: e.nextRetryOrdinal(`current_access`) ?? `initial`,
                searchMode: `none`,
              }) ?? null;
          }
          return;
        }
        let e = He.current;
        e != null &&
          ((He.current = null), A || I == null ? e.fail(`access_failed`) : e.complete(I.shares.length + 1));
      }),
      (gn = [A, ce, I]),
      (t[78] = A),
      (t[79] = ce),
      (t[80] = I),
      (t[81] = hn),
      (t[82] = gn))
    : ((hn = t[81]), (gn = t[82])),
    (0, Z.useLayoutEffect)(hn, gn));
  let _n;
  t[83] === U
    ? (_n = t[84])
    : ((_n = () =>
        Re.current?.startPhase({
          operation: `recipient_lookup`,
          phase: `recipient_lookup`,
          retryOrdinal: `initial`,
          searchMode: `text_query`,
          recipientLookupScope: U,
        }) ?? null),
      (t[83] = U),
      (t[84] = _n));
  let W = (0, Z.useEffectEvent)(_n),
    vn;
  t[85] !== H.length || t[86] !== W
    ? ((vn = () => {
        (Ue.current?.cancel(`superseded`), (Ue.current = H.length === 0 ? null : W()));
      }),
      (t[85] = H.length),
      (t[86] = W),
      (t[87] = vn))
    : (vn = t[87]);
  let bn;
  (t[88] === H ? (bn = t[89]) : ((bn = [H]), (t[88] = H), (t[89] = bn)), (0, Z.useLayoutEffect)(vn, bn));
  let Cn;
  t[90] !== mn || t[91] !== H.length || t[92] !== rn?.length || t[93] !== un
    ? ((Cn = () => {
        let e = Ue.current;
        e == null ||
          H.length === 0 ||
          mn ||
          ((Ue.current = null), un ? e.fail(`search_failed`) : e.complete(rn?.length ?? 0));
      }),
      (t[90] = mn),
      (t[91] = H.length),
      (t[92] = rn?.length),
      (t[93] = un),
      (t[94] = Cn))
    : (Cn = t[94]);
  let wn = rn?.length,
    Tn;
  if (
    (t[95] !== mn || t[96] !== H || t[97] !== wn || t[98] !== un
      ? ((Tn = [mn, H, wn, un]), (t[95] = mn), (t[96] = H), (t[97] = wn), (t[98] = un), (t[99] = Tn))
      : (Tn = t[99]),
    (0, Z.useLayoutEffect)(Cn, Tn),
    h == null || g == null || !d)
  )
    return null;
  if (f !== `available`) {
    let e;
    return (
      t[100] !== s || t[101] !== i || t[102] !== r
        ? ((e = (0, Q.jsx)(Un, { target: r, pageId: i, onClose: s })),
          (t[100] = s),
          (t[101] = i),
          (t[102] = r),
          (t[103] = e))
        : (e = t[103]),
      e
    );
  }
  let En = L.length > 0,
    Dn;
  t[104] === I?.shares
    ? (Dn = t[105])
    : ((Dn = (e) => !I?.shares.some((t) => R(t.recipient) === R(e.share.recipient))),
      (t[104] = I?.shares),
      (t[105] = Dn));
  let On = [...L, ...w.filter(Dn).map(lr)].filter(cr),
    kn;
  t[106] !== w || t[107] !== z || t[108] !== I?.shares
    ? ((kn = [...z.values()].some(
        (e) =>
          e.action === `invite` &&
          w.some((t) => t.change.action === `invite` && R(t.share.recipient) === R(e.recipient)) &&
          !I?.shares.some((t) => R(t.recipient) === R(e.recipient)),
      )),
      (t[106] = w),
      (t[107] = z),
      (t[108] = I?.shares),
      (t[109] = kn))
    : (kn = t[109]);
  let An = kn,
    jn = Cr.filter((e) => ft?.includes(e)).map(sr),
    G = new Map(I?.shares.map(or));
  for (let { change: e, share: t } of [...D, ...E]) {
    if (I == null) break;
    if (e.action === `remove`) {
      G.delete(e.shareId);
      continue;
    }
    let n = G.get(t.share_id);
    if (n == null && [...G.values()].some((e) => R(e.recipient) === R(t.recipient))) continue;
    let r = e.action === `invite` ? e.invitee : void 0;
    G.set(t.share_id, {
      ...t,
      ...n,
      role_id: e.roleId,
      recipient_display_name: n?.recipient_display_name ?? t.recipient_display_name ?? r?.label,
      recipient_email: n?.recipient_email ?? t.recipient_email ?? r?.secondaryLabel,
      recipient_avatar_url: n?.recipient_avatar_url ?? t.recipient_avatar_url,
    });
  }
  let K = new Set(),
    Mn = [...z.values()].filter(ar);
  for (let e of [...Mn, ...L])
    if (e.action === `invite` && I != null) {
      let t = R(e.recipient),
        n = [...G.values()].find((e) => R(e.recipient) === t),
        r = n?.share_id ?? e.invitee?.id ?? t;
      (G.set(r, {
        ...n,
        share_id: r,
        inviter: n?.inviter ?? I.owner,
        recipient: e.recipient,
        role_id: e.roleId,
        status: n?.status ?? `pending`,
        recipient_display_name: n?.recipient_display_name ?? e.invitee?.label,
        recipient_email: n?.recipient_email ?? e.invitee?.secondaryLabel,
      }),
        L.includes(e) && K.add(r));
    } else if (e.action === `remove`) (G.delete(e.shareId), K.add(e.shareId));
    else if (e.action === `update`) {
      let t = G.get(e.shareId);
      (t != null && G.set(e.shareId, { ...t, role_id: e.roleId }), K.add(e.shareId));
    }
  let q = [...G.values()].find(
      (e) =>
        e.recipient.recipient_type === `principal` &&
        e.recipient.principal_type === `workspace` &&
        e.recipient.principal_id === h,
    ),
    J;
  if (t[110] !== E || t[111] !== I?.shares) {
    let e;
    (t[113] === I?.shares
      ? (e = t[114])
      : ((e = (e) => !I?.shares.some((t) => t.share_id === e.share.share_id)),
        (t[113] = I?.shares),
        (t[114] = e)),
      (J = new Set(E.filter(e).map(ir))),
      (t[110] = E),
      (t[111] = I?.shares),
      (t[112] = J));
  } else J = t[112];
  let Pn = J,
    Y;
  t[115] !== w || t[116] !== h || t[117] !== I?.shares
    ? ((Y = (e) => {
        let t =
          e.action === `invite`
            ? e.recipient
            : (I?.shares.find((t) => t.share_id === e.shareId)?.recipient ??
              w.find((t) => t.share.share_id === e.shareId)?.share.recipient);
        return t?.recipient_type === `principal` && t.principal_type === `workspace` && t.principal_id === h;
      }),
      (t[115] = w),
      (t[116] = h),
      (t[117] = I?.shares),
      (t[118] = Y))
    : (Y = t[118]);
  let In = L.some(Y),
    Rn = z.get(`workspace`),
    zn = Rn?.action === `remove` ? null : (Rn?.roleId ?? q?.role_id),
    Bn = I == null ? void 0 : Fn(I),
    X =
      Rn != null &&
      I?.workspace_id != null &&
      (I.inherited_workspace_link_access?.complete !== !0 ||
        (Rn.action !== `remove` && Bn != null && Cr.indexOf(Rn.roleId) <= Cr.indexOf(Bn))),
    Vn = new Map();
  for (let [e, t] of z) {
    let n =
      t.action === `invite`
        ? ([...G.values()].find((e) => R(e.recipient) === R(t.recipient))?.share_id ?? e)
        : t.shareId;
    Vn.set(n, { key: e, change: t });
  }
  let Hn = [...G.values()].filter(
      (e) =>
        e !== q &&
        Vn.get(e.share_id)?.change.action !== `remove` &&
        (e.recipient.recipient_type !== `principal` ||
          e.recipient.principal_type !== `user` ||
          (e.recipient.principal_id.split(`__`)[0] !== g?.split(`__`)[0] &&
            e.recipient.principal_id.split(`__`)[0] !== I?.owner.principal_id.split(`__`)[0])),
    ),
    Wn = I?.inherited_access,
    Tr = [...G.values()].find(
      (e) =>
        e.recipient.recipient_type === `principal` &&
        e.recipient.principal_type === `user` &&
        e.recipient.principal_id.split(`__`)[0] === g?.split(`__`)[0],
    ),
    Er =
      Tr?.recipient.recipient_type === `principal` && Tr.recipient.principal_type === `user`
        ? Tr.recipient.principal_id
        : (_?.account_user_id ?? null),
    Dr;
  I?.caller_permissions.includes(`library_folder.write`)
    ? (Dr = `editor`)
    : I?.caller_permissions.includes(`library_file.comment`)
      ? (Dr = `commenter`)
      : I?.caller_permissions.includes(`library_folder.read`) && (Dr = `viewer`);
  let Or = I?.shares.filter((e) => Vn.get(e.share_id)?.change.action === `remove`),
    kr = new Map([...G.values()].map(rr));
  for (let e of I?.shares ?? []) K.has(e.share_id) && kr.set(R(e.recipient), `existing`);
  let Ar = function (e, t) {
      return {
        id: `group:${e}`,
        label: t,
        accessStatus: kr.get(`group:${e}`),
        recipient: { recipient_type: `principal`, principal_type: `group`, principal_id: e },
      };
    },
    jr = function (e, t, n) {
      let r = `user:${e}`;
      return {
        id: r,
        colorKey: e,
        label: I?.workspace_id == null ? (n ?? H) : t,
        secondaryLabel: n ?? void 0,
        accessStatus:
          e === I?.owner.principal_id || e.split(`__`)[0] === g?.split(`__`)[0] ? `existing` : kr.get(r),
        recipient: { recipient_type: `principal`, principal_type: `user`, principal_id: e },
      };
    },
    Mr = jt
      ? It.picks.map((e) =>
          e
            .filter((e) => !kr.has(`user:${e.account_user_id}`))
            .map((e) => jr(e.account_user_id, e.name ?? e.email ?? e.account_user_id, e.email)),
        )
      : void 0,
    Nr = rn
      ?.map((e) => jr(e.id, e.display_name, e.detail))
      .filter((e) => !B.some((t) => t.id === e.id) && (H !== `` || e.accessStatus == null)),
    Pr =
      V && St && I?.workspace_id !== void 0 && !Dt && !Ot && kt !== `paused`
        ? Et?.items
            .filter((e) => e.type === `user` && (I?.workspace_id != null || !!e.detail?.trim()))
            .map((e) => jr(e.id, e.display_name, e.detail))
            .filter((e) => vr(I, e.recipient) == null)
        : void 0,
    Fr;
  t[119] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fr = function (e, t) {
        De((n) => {
          let r = new Map(n.draft);
          return (t == null ? r.delete(e) : r.set(e, t), { ...n, draft: r });
        });
      }),
      (t[119] = Fr))
    : (Fr = t[119]);
  let Ir = Fr,
    Lr = (e) => {
      if (e === (q?.role_id ?? null) && !w.some((e) => e.share.share_id === q?.share_id)) {
        Ir(`workspace`, null);
        return;
      }
      if (e == null) {
        Ir(`workspace`, q == null ? null : { action: `remove`, shareId: q.share_id, target: r });
        return;
      }
      Ir(
        `workspace`,
        q == null
          ? {
              action: `invite`,
              recipient: { recipient_type: `principal`, principal_type: `workspace`, principal_id: h },
              roleId: e,
              target: r,
            }
          : { action: `update`, shareId: q.share_id, roleId: e, target: r },
      );
    },
    Rr;
  t[120] === I?.shares
    ? (Rr = t[121])
    : ((Rr = function (e) {
        let t = I?.shares.find((t) =>
          e.action === `invite`
            ? e.invitee != null && R(t.recipient) === R(e.recipient)
            : t.share_id === e.shareId,
        );
        return t?.role_id === `role-library-folder-editor` &&
          t.recipient.recipient_type === `principal` &&
          (t.recipient.principal_type === `group` || t.recipient.principal_type === `workspace`) &&
          (e.action === `remove` || e.roleId !== `role-library-folder-editor`)
          ? t
          : void 0;
      }),
      (t[120] = I?.shares),
      (t[121] = Rr));
  let zr = Rr,
    Br = [...z.values()].map(zr).filter(nr),
    Vr = Br.length === 1 ? Br[0] : void 0,
    Hr = (e) => {
      let t = e !== void 0 && e;
      if (
        !V ||
        c.get(_t) !== `available` ||
        En ||
        An ||
        X ||
        (z.size === 0 && B.length === 0) ||
        (B.length > 0 && !jn.some((e) => e.value === mt)) ||
        c.get(at) !== h ||
        c.get(be) !== g
      )
        return;
      if (
        !t &&
        I?.owner.principal_id.split(`__`)[0] !== g.split(`__`)[0] &&
        (Tr?.status !== `active` || Tr.role_id !== `role-library-folder-editor`) &&
        Br.length > 0
      ) {
        Fe(!0);
        return;
      }
      let n = !1,
        i = Ze(c, h, g),
        a = i.signal,
        o = new Map(z);
      for (let [e, t] of o) {
        if (t.action !== `invite` || t.invitee == null) continue;
        let n = I?.shares.find((e) => R(e.recipient) === R(t.recipient));
        n != null &&
          (o.delete(e),
          o.set(n.share_id, { action: `update`, shareId: n.share_id, roleId: t.roleId, target: r }));
      }
      for (let e of B)
        o.set(e.id, { action: `invite`, recipient: e.recipient, invitee: e, roleId: pt([e]), target: r });
      let s = (0, xr.default)(
        [...o],
        (e) => {
          let [, t] = e;
          return !!zr(t);
        },
        tr,
        er,
      );
      Ke.current?.cancel(`superseded`);
      let u = Sn(
        We(c),
        { target_type: r.type, backing_type: `drive` },
        Re.current == null ? void 0 : { operation: `permission_mutation`, telemetry: Re.current },
        yn(c, r, `permission_mutation`),
        s.map((e) => {
          let [, t] = e;
          return t.action === `remove`
            ? `revoke_access`
            : t.action === `update`
              ? `change_role`
              : r.type === `space`
                ? `invite_space`
                : `share_page`;
        }),
      );
      Ke.current = u;
      let d = () => {
        (u.complete(), Me({ id: crypto.randomUUID(), measurement: u, changes: s.map($n) }));
      };
      (De({ draft: new Map(), invitees: [] }),
        tt(``),
        it.current != null && it.current.scrollIntoView({ block: `start` }));
      let f = (e) => {
          let { data: t, isSuccess: n } = c.get(ut, r),
            { queryKey: i } = c.query.snapshot(ut, r);
          return !n || c.queryClient.getQueryState(i)?.isInvalidated !== !1
            ? e
            : e.filter((e) => {
                let [, n] = e;
                return (
                  n.action !== `invite` ||
                  !t.shares.some((e) => R(e.recipient) === R(n.recipient) && e.role_id === n.roleId)
                );
              });
        },
        p = (e) => {
          let t = ht.current !== mt;
          De((n) => {
            let r = new Map(n.draft);
            for (let [n, i] of e) (i.action !== `invite` || z.has(n) || t) && !r.has(n) && r.set(n, i);
            return {
              draft: r,
              invitees: t
                ? n.invitees
                : [
                    ...n.invitees,
                    ...B.filter(
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
      me.mutateAsync({
        changes: s.map(Qn),
        signal: a,
        telemetry: u,
        initialSharing: L.length === 0 && !Be.current ? I : void 0,
        workspaceChangeIndex: s.findIndex(Zn),
      })
        .then((e) => {
          let { results: t, workspaceSharingDisabled: r } = e;
          if ((t.some(Xn) && (Be.current = !0), a.aborted || !c.get(Pe))) {
            u.cancel(`context_changed`);
            return;
          }
          let i = f(s.filter((e, n) => t[n].status === `rejected`)),
            o = r && i.some(Yn);
          if (((n = i.length < s.length), i.length > 0)) {
            if ((p(o ? i.filter(Jn) : i), u.fail(n), o)) {
              c.get(ue).danger(
                l.formatMessage({
                  id: `codex.space.driveSharing.workspaceLinksUnavailable`,
                  defaultMessage: `Your admin has turned off workspace-link sharing for your account. Ask your admin to enable workspace links.`,
                  description: `A Page or Space workspace-link change failed and refreshed account policy confirms workspace links are disabled. Named-recipient sharing is still allowed.`,
                }),
                { errorAnalytics: { toastId: `sharingDialog.mutate.saveError` } },
              );
              return;
            }
            let e = i[0][1],
              r = t[s.indexOf(i[0])],
              a = r.status === `rejected` ? r.reason : null;
            pe(e, a);
          } else d();
        })
        .catch(() => {
          if (((Be.current = !0), !a.aborted && c.get(Pe))) {
            let e = f(s);
            if (e.length === 0) {
              d();
              return;
            }
            (p(e),
              u.fail(n || e.length < s.length),
              c
                .get(ue)
                .danger(l.formatMessage($.saveError), {
                  errorAnalytics: { toastId: `sharingDialog.mutate.saveError` },
                }));
          } else u.cancel(`context_changed`);
        })
        .finally(() => i.stop());
    },
    Ur;
  t[122] !== r.id || t[123] !== r.type
    ? ((Ur = (0, Q.jsx)(Ce, { kind: r.type, id: r.id })), (t[122] = r.id), (t[123] = r.type), (t[124] = Ur))
    : (Ur = t[124]);
  let Wr;
  t[125] !== i || t[126] !== r.type
    ? ((Wr = (0, Q.jsx)(ke, { kind: r.type, pageId: i })), (t[125] = i), (t[126] = r.type), (t[127] = Wr))
    : (Wr = t[127]);
  let Gr;
  t[128] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Gr = (0, Q.jsx)(F, {
        id: `codex.pages.sharing.share`,
        defaultMessage: `Share`,
        description: `Button granting the selected recipients access to the Page or Space`,
      })),
      (t[128] = Gr))
    : (Gr = t[128]);
  let Kr;
  t[129] !== o || t[130] !== i
    ? ((Kr = (0, Q.jsx)(an, { pageId: i, spaceId: o })), (t[129] = o), (t[130] = i), (t[131] = Kr))
    : (Kr = t[131]);
  let qr;
  t[132] !== S || t[133] !== C.length
    ? ((qr =
        C.length > 0 &&
        (0, Q.jsx)(_e, {
          children: (0, Q.jsx)(fe, {
            role: `status`,
            content: (0, Q.jsx)(F, {
              id: `codex.space.driveSharing.confirmationUnknown`,
              defaultMessage: `We couldn’t confirm these sharing changes yet`,
              description: `A sharing change was accepted but its completion could not be confirmed; it stays pending, and Check again checks the same operation without resubmitting it`,
            }),
            primaryCtaText: (0, Q.jsx)(F, {
              id: `codex.space.driveSharing.checkAgain`,
              defaultMessage: `Check again`,
              description: `Check the status of previously accepted sharing changes without submitting them again`,
            }),
            onPrimaryCtaClick: () => S.checkAgain(),
          }),
        })),
      (t[132] = S),
      (t[133] = C.length),
      (t[134] = qr))
    : (qr = t[134]);
  let Jr;
  t[135] !== D.length || t[136] !== ie
    ? ((Jr =
        D.length > 0 &&
        (0, Q.jsx)(_e, {
          children: (0, Q.jsx)(fe, {
            role: `status`,
            content: (0, Q.jsx)(F, {
              id: `codex.space.driveSharing.completedAwaitingRoster`,
              defaultMessage: `Changes saved. The permissions list hasn’t refreshed yet`,
              description: `The Space sharing command completed, but the visible permissions list may still show older access while its refresh is pending or failed`,
            }),
            primaryCtaText: (0, Q.jsx)(F, {
              id: `codex.space.driveSharing.refreshSpacePermissions`,
              defaultMessage: `Refresh permissions`,
              description: `Refresh the current Space permissions after a completed sharing change without submitting it again`,
            }),
            onPrimaryCtaClick: () => void ie(),
          }),
        })),
      (t[135] = D.length),
      (t[136] = ie),
      (t[137] = Jr))
    : (Jr = t[137]);
  let Yr;
  t[138] !== A || t[139] !== P || t[140] !== ie || t[141] !== I
    ? ((Yr =
        (P || A || I == null) &&
        (0, Q.jsx)(_e, {
          children: (0, Q.jsx)(yt, {
            isLoading: P,
            onRetry: () => {
              (De({ draft: new Map(), invitees: [] }), tt(``), ie());
            },
          }),
        })),
      (t[138] = A),
      (t[139] = P),
      (t[140] = ie),
      (t[141] = I),
      (t[142] = Yr))
    : (Yr = t[142]);
  let Xr;
  return (
    t[143] !== D.length ||
    t[144] !== Oe ||
    t[145] !== A ||
    t[146] !== P ||
    t[147] !== En ||
    t[148] !== L ||
    t[149] !== I
      ? ((Xr =
          Oe != null &&
          !En &&
          D.length === 0 &&
          !P &&
          !A &&
          L.length === 0 &&
          I != null &&
          Oe.changes.every((e) => {
            if (e.action === `invite`)
              return I.shares.some((t) => R(t.recipient) === R(e.recipient) && t.role_id === e.roleId);
            let t = I.shares.find((t) => t.share_id === e.shareId);
            return e.action === `remove` ? t == null : t?.role_id === e.roleId;
          }) &&
          (0, Q.jsx)(Ge, { requireVisibleAtPaint: !0, onPaint: Oe.measurement.paintOpportunity }, Oe.id)),
        (t[143] = D.length),
        (t[144] = Oe),
        (t[145] = A),
        (t[146] = P),
        (t[147] = En),
        (t[148] = L),
        (t[149] = I),
        (t[150] = Xr))
      : (Xr = t[150]),
    (0, Q.jsxs)(Ie, {
      headerContent:
        !P && !A && I != null
          ? (0, Q.jsx)(_e, {
              className: `gap-2`,
              children:
                Le(I) &&
                (0, Q.jsx)(Wt, {
                  accountId: h,
                  disabled: !V,
                  getGroupRecipient: _ == null ? void 0 : (e) => Ar(e.id, e.name),
                  getTeamRecipient: _ == null ? void 0 : (e) => Ar(e.id, e.name),
                  isLoading: !dn && !It.isError && (mn || It.isLoading),
                  searchFailed: dn || It.isError,
                  contextualPicks: Mr,
                  loadingLabel: l.formatMessage({
                    id: `codex.space.driveSharing.searching`,
                    defaultMessage: `Searching for people or teams`,
                    description: `Status while recipient searches in Library-backed Page or Space sharing are loading`,
                  }),
                  emptyMessage: (0, Q.jsx)(F, {
                    id: `codex.space.driveSharing.noMatchingRecipients`,
                    defaultMessage: `No matching people or teams`,
                    description: `Empty workspace member and group search in the Library Page or Space sharing dialog`,
                  }),
                  query: et,
                  options: Nr,
                  recentOptions: Pr,
                  getRemoveLabel: (e) =>
                    l.formatMessage(
                      {
                        id: `shareDialog.removeInvitee`,
                        defaultMessage: `Remove {name} from the invitation`,
                        description: `Accessible label for removing a selected person or group from a sharing invitation; name is the recipient's display name`,
                      },
                      { name: e.label },
                    ),
                  selectedOptions: B,
                  trailingContent:
                    B.length > 0 &&
                    (0, Q.jsx)(Ut, {
                      disabled: !V,
                      options: jn,
                      value: mt,
                      variant: `inline`,
                      renderLabel: qn,
                      onChange: gt,
                    }),
                  onQueryChange: tt,
                  onChange: (e) => {
                    (De((t) => ({ ...t, invitees: e })), (ht.current = pt(e)));
                  },
                }),
            })
          : null,
      isLoading: P,
      onSubmit: () => Hr(),
      title: Ur,
      subtitle: Wr,
      footer: (0, Q.jsx)(Ht, {
        onCancel: () => {
          (De({ draft: new Map(), invitees: [] }), gt(void 0), tt(``));
        },
        onClose: s,
        hasPendingAccessChange: z.size > 0,
        hasPendingInvitees: B.length > 0,
        inviteLabel: Gr,
        isSaving: !1,
        disabled: En || An || X || !V || (B.length > 0 && !jn.some((e) => e.value === mt)),
        copyLink: Kr,
      }),
      children: [
        Ne &&
          V &&
          (0, Q.jsx)(Nn, {
            target: r,
            teamName:
              (Vr?.recipient.recipient_type === `principal` &&
                Vr.recipient.principal_type === `group` &&
                Vr.recipient_display_name?.trim()) ||
              void 0,
            onCancel: () => Fe(!1),
            onConfirm: () => {
              (Fe(!1), Hr(!0));
            },
          }),
        qr,
        Jr,
        Yr,
        !P &&
          !A &&
          I != null &&
          (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(Ln, {
                sharing: I,
                supportsCommenter: dt,
                isWorkspace: I.workspace_id != null || _ != null,
                directRole: zn,
                hasDirectOverride: (q != null || Rn?.action === `invite`) && Rn?.action !== `remove`,
                disabled: !V || In || (q != null && Pn.has(q.share_id)),
                workspaceName: _?.name?.trim() || void 0,
                workspaceLinkSharingAvailable: m,
                onChange: Lr,
                onRetry: () => void ie(),
                onClose: s,
              }),
              X &&
                I.inherited_workspace_link_access?.complete &&
                (0, Q.jsx)(_e, {
                  children: (0, Q.jsx)(`p`, {
                    className: `text-sm text-secondary`,
                    children: (0, Q.jsx)(F, {
                      id: `codex.pages.sharing.workspaceLink.changed.helpText`,
                      defaultMessage: `Parent access changed. Choose a higher role or use parent access before saving`,
                      description: `Page and Space sharing warning when a pending direct workspace role is now covered by an ancestor grant. The user must revise the link-access draft before saving.`,
                    }),
                  }),
                }),
              (0, Q.jsx)(vt, {
                children: (0, Q.jsxs)(`div`, {
                  ref: it,
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, Q.jsx)(zt, {
                      entries: [
                        {
                          id: `owner:${I.owner.principal_id}`,
                          label: l.formatMessage($.owner),
                          isOwner: !0,
                          row: (0, Q.jsx)(yr, {
                            accountUserId: I.owner.principal_id,
                            displayName: I.owner_display_name,
                          }),
                        },
                        ...(I.owner.principal_id.split(`__`)[0] === g.split(`__`)[0]
                          ? []
                          : [
                              {
                                id: `self:${g}`,
                                label: l.formatMessage($.self),
                                isSelf: !0,
                                row: (0, Q.jsx)(Qe, {
                                  avatar: (0, Q.jsx)(Ft, {
                                    accountUserId: g,
                                    name: l.formatMessage($.self),
                                    size: `group`,
                                  }),
                                  label: (0, Q.jsx)(F, { ...$.self }),
                                  renderIdentity: (e, t) =>
                                    (0, Q.jsx)(Lt, {
                                      inShareDialog: !0,
                                      accountUserId: Er,
                                      label: l.formatMessage($.self),
                                      triggerDescriptionId: t,
                                      children: e,
                                    }),
                                  secondaryLabel:
                                    Tr?.status === `pending` ? (0, Q.jsx)(F, { ...$.pending }) : void 0,
                                  trailingContent: (0, Q.jsx)(`span`, {
                                    className: `pe-2 text-sm text-tertiary`,
                                    children: (0, Q.jsx)(Zt, { permission: Dr }),
                                  }),
                                }),
                              },
                            ]),
                        ...Hn.map((e) => {
                          let t = On.find((t) => R(t.recipient) === R(e.recipient)),
                            { key: n, change: i } = Vn.get(e.share_id) ?? {
                              key: t?.invitee?.id ?? e.share_id,
                              change: void 0,
                            },
                            a =
                              I.workspace_id == null && e.status === `pending`
                                ? (e.recipient_email ??
                                  (e.recipient.recipient_type === `email`
                                    ? e.recipient.email
                                    : l.formatMessage($.pending)))
                                : (e.recipient_display_name ??
                                  e.recipient_email ??
                                  (e.recipient.recipient_type === `email`
                                    ? e.recipient.email
                                    : e.recipient.principal_id)),
                            o = !K.has(e.share_id) && i?.action !== `invite` && e.status === `pending`,
                            s = o ? l.formatMessage($.pending) : (e.recipient_email ?? void 0),
                            c =
                              e.recipient.recipient_type === `principal` &&
                              e.recipient.principal_type === `group`
                                ? e.recipient.principal_id
                                : null,
                            u =
                              e.recipient.recipient_type === `principal` &&
                              e.recipient.principal_type === `user`
                                ? e.recipient.principal_id
                                : null;
                          return {
                            id: e.share_id,
                            label: a,
                            isTeam: c != null,
                            row: (0, Q.jsx)(Qe, {
                              avatar:
                                c == null
                                  ? (0, Q.jsx)(Ft, {
                                      accountUserId: u,
                                      avatarUrl:
                                        e.status === `active` && u != null ? e.recipient_avatar_url : null,
                                      name: a,
                                      size: `group`,
                                    })
                                  : (0, Q.jsx)(Vt, { groupId: c }),
                              label: a,
                              renderIdentity: (t, n) =>
                                (0, Q.jsx)(Lt, {
                                  inShareDialog: !0,
                                  accountUserId: u,
                                  label: a,
                                  labelEmail: e.recipient_email,
                                  triggerDescriptionId: o ? n : void 0,
                                  children: t,
                                }),
                              secondaryLabel: s,
                              trailingContent: (0, Q.jsx)(Ut, {
                                disabled: !V || !Tt(I, e.recipient, g, h),
                                variant: `inline`,
                                options: jn,
                                value: i != null && i.action !== `remove` ? i.roleId : e.role_id,
                                renderLabel: Kn,
                                onChange: (a) => {
                                  let o = jn.find((e) => e.value === a)?.value;
                                  if (o != null) {
                                    let a = i?.action === `invite` ? i : t;
                                    if (a != null) {
                                      Ir(
                                        n,
                                        o ===
                                          (t?.roleId ??
                                            I.shares.find((t) => t.share_id === e.share_id)?.role_id)
                                          ? null
                                          : { ...a, roleId: o },
                                      );
                                      return;
                                    }
                                    Ir(
                                      n,
                                      o === e.role_id &&
                                        !D.some((t) => t.share.share_id === e.share_id) &&
                                        !w.some((t) => t.share.share_id === e.share_id)
                                        ? null
                                        : { action: `update`, roleId: o, shareId: e.share_id, target: r },
                                    );
                                  }
                                },
                                removeLabel: (0, Q.jsx)(F, {
                                  id: `codex.space.driveSharing.remove`,
                                  defaultMessage: `Remove access`,
                                  description: `Menu command that removes only the direct grant or pending invitation on this Page or Space; inherited access can remain`,
                                }),
                                onRemoveAccess:
                                  K.has(e.share_id) || Pn.has(e.share_id) || t != null
                                    ? void 0
                                    : () =>
                                        Ir(
                                          n,
                                          i?.action === `invite` &&
                                            !I.shares.some((t) => t.share_id === e.share_id)
                                            ? null
                                            : { action: `remove`, shareId: e.share_id, target: r },
                                        ),
                              }),
                            }),
                          };
                        }),
                      ],
                    }),
                    (0, Q.jsx)(pn, { pageId: r.type === `page` ? i : null, inheritedAccess: Wn }),
                  ],
                }),
              }),
              (0, Sr.default)(Or, Gn).map((e) => {
                let t = vr(I, e.recipient),
                  n = e.recipient_display_name?.trim() || e.recipient_email?.trim();
                return t != null && n
                  ? (0, Q.jsx)(
                      _e,
                      {
                        children: (0, Q.jsx)(`p`, {
                          className: `text-xs text-secondary select-none`,
                          children: (0, Q.jsx)(F, {
                            id: `codex.space.driveSharing.remainingAccess`,
                            defaultMessage: `{name} will still have access through <source>{kind, select, page {a parent page} other {the space}}</source>`,
                            description: `Hint for a staged removal. Name is the recipient; source links to the authorized parent Page or Space where they retain access. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                            values: {
                              name: n,
                              kind: t.kind,
                              source: (e) =>
                                (0, Q.jsx)(re, {
                                  className: `cursor-interaction text-info underline underline-offset-2`,
                                  to: `/${t.kind === `page` ? `space` : `spaces`}/${encodeURIComponent(t.id)}`,
                                  onClick: s,
                                  children: e,
                                }),
                            },
                          }),
                        }),
                      },
                      R(e.recipient),
                    )
                  : null;
              }),
            ],
          }),
        Xr,
      ],
    })
  );
}
function Gn(e) {
  return R(e.recipient);
}
function Kn(e) {
  return (0, Q.jsx)(Zt, { permission: Qt(e, `folder`) });
}
function qn(e) {
  return (0, Q.jsx)(Zt, { permission: Qt(e, `folder`) });
}
function Jn(e) {
  let [t] = e;
  return t !== `workspace`;
}
function Yn(e) {
  let [t] = e;
  return t === `workspace`;
}
function Xn(e) {
  return e.status === `rejected`;
}
function Zn(e) {
  let [t, n] = e;
  return t === `workspace` && n.action !== `remove`;
}
function Qn(e) {
  let [, t] = e;
  return t;
}
function $n(e) {
  let [, t] = e;
  return t;
}
function er(e) {
  let [, t] = e;
  return t.action !== `invite`;
}
function tr(e) {
  let [t] = e;
  return t === `workspace`;
}
function nr(e) {
  return e != null;
}
function rr(e) {
  return [R(e.recipient), e.status === `pending` ? `pending` : `existing`];
}
function ir(e) {
  return e.share.share_id;
}
function ar(e) {
  return e.action === `invite` && e.invitee != null;
}
function or(e) {
  return [e.share_id, e];
}
function sr(e) {
  return { value: e };
}
function cr(e) {
  return e.action === `invite`;
}
function lr(e) {
  let { change: t } = e;
  return t;
}
function ur(e) {
  return e.type === `user`;
}
function dr(e) {
  return e.split(`__`)[0];
}
function fr(e) {
  let { recipient: t } = e;
  return t.principal_type === `user` ? [t.principal_id] : [];
}
function pr(e) {
  let { recipient: t } = e;
  return t.recipient_type === `principal` && t.principal_type === `user` ? [t.principal_id] : [];
}
function mr(e) {
  return e.recipient.principal_type === `group`;
}
function hr(e) {
  return e.state.variables;
}
function gr(e) {
  return e.submissionId == null;
}
function _r() {
  return _.isOnline() ? !0 : `always`;
}
function vr(e, t) {
  if (e?.inherited_access?.complete && t?.recipient_type === `principal`)
    return e.inherited_access.sources.find(
      (e) => e.recipient != null && e.source != null && R(e.recipient) === R(t),
    )?.source;
}
function yr(e) {
  let t = (0, br.c)(19),
    { accountUserId: n, displayName: r } = e,
    i = se(),
    a;
  t[0] === r ? (a = t[1]) : ((a = r?.trim() || null), (t[0] = r), (t[1] = a));
  let o = a,
    s = N(Mt, o == null ? n : null),
    c;
  t[2] !== s || t[3] !== i || t[4] !== o
    ? ((c = o ?? s ?? i.formatMessage($.owner)), (t[2] = s), (t[3] = i), (t[4] = o), (t[5] = c))
    : (c = t[5]);
  let l = c,
    { data: u } = N(jt, n),
    d;
  t[6] !== n || t[7] !== l
    ? ((d = (0, Q.jsx)(Ft, { accountUserId: n, name: l, size: `group` })), (t[6] = n), (t[7] = l), (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] !== n || t[10] !== l || t[11] !== u?.email
    ? ((f = (e) =>
        (0, Q.jsx)(Lt, { inShareDialog: !0, accountUserId: n, label: l, labelEmail: u?.email, children: e })),
      (t[9] = n),
      (t[10] = l),
      (t[11] = u?.email),
      (t[12] = f))
    : (f = t[12]);
  let p = u?.email,
    m;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(`span`, {
        className: `pe-2 text-sm text-tertiary`,
        children: (0, Q.jsx)(F, { ...$.owner }),
      })),
      (t[13] = m))
    : (m = t[13]);
  let h;
  return (
    t[14] !== l || t[15] !== d || t[16] !== f || t[17] !== p
      ? ((h = (0, Q.jsx)(Qe, {
          avatar: d,
          label: l,
          renderIdentity: f,
          secondaryLabel: p,
          trailingContent: m,
        })),
        (t[14] = l),
        (t[15] = d),
        (t[16] = f),
        (t[17] = p),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
var br, xr, Sr, Z, Q, Cr, wr, $;
function Tr() {
  return (Tr = e(() => {
    ((br = h()),
      O(),
      I(),
      A(),
      ae(),
      (xr = t(ne(), 1)),
      (Sr = t(a(), 1)),
      k(),
      (Z = o()),
      w(),
      m(),
      U(),
      wt(),
      De(),
      bt(),
      Dt(),
      me(),
      s(),
      S(),
      qe(),
      $t(),
      rn(),
      Me(),
      Oe(),
      pt(),
      nn(),
      vn(),
      Pt(),
      un(),
      It(),
      Nt(),
      dn(),
      bn(),
      H(),
      Mn(),
      z(),
      st(),
      Ye(),
      r(),
      Rt(),
      Bt(),
      ht(),
      et(),
      Kt(),
      mt(),
      tn(),
      Gt(),
      Xt(),
      dt(),
      V(),
      i(),
      Ee(),
      g(),
      Pn(),
      B(),
      Fe(),
      Vn(),
      In(),
      (Q = d()),
      (Cr = [`role-library-folder-viewer`, `role-library-folder-commenter`, `role-library-folder-editor`]),
      (wr = pe(v, (e, { get: t }) => {
        let n = t(St, e);
        return (n == null ? `page` : Je(n)) !== `granola_presentation`;
      })),
      ($ = E({
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
export { Tr as n, Hn as t };
//# sourceMappingURL=sharing-dialog-c0de458ff391.js.map
